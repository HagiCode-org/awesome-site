# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![État de la compilation](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Widget Slack](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Statut Netlify](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Suivre la liste Awesome](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Dernier commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

Nous utilisons le Slack de la communauté _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ pour la communication instantanée ; remplissez le [formulaire ici pour nous rejoindre](https://invite.slack.golangbridge.org/).

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Liste organisée de frameworks, bibliothèques et logiciels Go remarquables | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**Parrainages :**

_Remerciements particuliers à_

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

**Awesome Go n'a pas de frais mensuels**_, mais nous avons des employés qui **travaillent dur** pour le faire fonctionner. Grâce aux fonds récoltés, nous pouvons rétribuer les efforts de chaque personne impliquée ! Vous pouvez voir comment nous calculons notre facturation et notre répartition, car elles sont ouvertes à toute la communauté. Vous souhaitez soutenir le projet ? Cliquez [ici](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)._

> Une liste organisée de frameworks, bibliothèques et logiciels Go remarquables. Inspirée par [awesome-python](https://github.com/vinta/awesome-python).

**Contribuer :**

Veuillez d'abord jeter un rapide coup d'œil aux [règles de contribution](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md). Merci à tous les [contributeurs](https://github.com/avelino/awesome-go/graphs/contributors) ; vous êtes formidables !

> _Si vous voyez ici un paquet ou un projet qui n'est plus maintenu ou qui n'a pas sa place, veuillez soumettre une pull request pour améliorer ce fichier. Merci !_

## Sommaire

<details>
<summary>Afficher le sommaire</summary>

- [Awesome Go](#awesome-go)
  - [Sommaire](#contents)
  - [Modèle d'acteurs](#actor-model)
  - [Intelligence artificielle](#artificial-intelligence)
  - [Audio et musique](#audio-and-music)
  - [Authentification et autorisation](#authentication-and-authorization)
  - [Blockchain](#blockchain)
  - [Création de bots](#bot-building)
  - [Automatisation de la compilation](#build-automation)
  - [Ligne de commande](#command-line)
    - [Interfaces de console avancées](#advanced-console-uis)
    - [CLI standard](#standard-cli)
  - [Configuration](#configuration)
  - [Intégration continue](#continuous-integration)
  - [Préprocesseurs CSS](#css-preprocessors)
  - [Frameworks d'intégration de données](#data-integration-frameworks)
  - [Structures de données et algorithmes](#data-structures-and-algorithms)
    - [Empaquetage de bits et compression](#bit-packing-and-compression)
    - [Ensembles de bits](#bit-sets)
    - [Filtres de Bloom et filtres coucou](#bloom-and-cuckoo-filters)
    - [Collections de structures de données et d'algorithmes](#data-structure-and-algorithm-collections)
    - [Itérateurs](#iterators)
    - [Maps](#maps)
    - [Structures de données et algorithmes divers](#miscellaneous-data-structures-and-algorithms)
    - [Types nullables](#nullable-types)
    - [Files d'attente](#queues)
    - [Ensembles](#sets)
    - [Analyse de texte](#text-analysis)
    - [Arbres](#trees)
    - [Tubes](#pipes)
  - [Bases de données](#database)
    - [Caches](#caches)
    - [Bases de données implémentées en Go](#databases-implemented-in-go)
    - [Migration de schémas de bases de données](#database-schema-migration)
    - [Outils de bases de données](#database-tools)
    - [Constructeurs de requêtes SQL](#sql-query-builders)
  - [Pilotes de bases de données](#database-drivers)
    - [Interfaces vers plusieurs backends](#interfaces-to-multiple-backends)
    - [Pilotes de bases de données relationnelles](#relational-database-drivers)
    - [Pilotes de bases de données NoSQL](#nosql-database-drivers)
    - [Bases de données de recherche et d'analyse](#search-and-analytic-databases)
  - [Date et heure](#date-and-time)
  - [Systèmes distribués](#distributed-systems)
  - [DNS dynamique](#dynamic-dns)
  - [E-mail](#email)
  - [Langages de script intégrables](#embeddable-scripting-languages)
  - [Gestion des erreurs](#error-handling)
  - [Gestion des fichiers](#file-handling)
  - [Finance](#financial)
  - [Formulaires](#forms)
  - [Programmation fonctionnelle](#functional)
  - [Développement de jeux](#game-development)
  - [Générateurs](#generators)
  - [Géographie](#geographic)
  - [Compilateurs Go](#go-compilers)
  - [Goroutines](#goroutines)
  - [Interfaces graphiques](#gui)
  - [Matériel](#hardware)
  - [Images](#images)
  - [IoT (Internet des objets)](#iot-internet-of-things)
  - [Planificateurs de tâches](#job-scheduler)
  - [JSON](#json)
  - [Journalisation](#logging)
  - [Apprentissage automatique](#machine-learning)
  - [Messagerie](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [Divers](#miscellaneous)
    - [Injection de dépendances](#dependency-injection)
    - [Structure de projet](#project-layout)
    - [Chaînes de caractères](#strings)
    - [Non classé](#uncategorized)
  - [Traitement automatique du langage naturel](#natural-language-processing)
    - [Détection de langue](#language-detection)
    - [Analyseurs morphologiques](#morphological-analyzers)
    - [Générateurs de slugs](#slugifiers)
    - [Tokeniseurs](#tokenizers)
    - [Traduction](#translation)
    - [Translittération](#transliteration)
  - [Réseau](#networking)
    - [Clients HTTP](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [Gestion des paquets](#package-management)
  - [Performances](#performance)
  - [Langages de requête](#query-language)
  - [Réflexion](#reflection)
  - [Intégration de ressources](#resource-embedding)
  - [Science et analyse de données](#science-and-data-analysis)
  - [Sécurité](#security)
  - [Sérialisation](#serialization)
  - [Applications serveur](#server-applications)
  - [Traitement de flux](#stream-processing)
  - [Moteurs de modèles](#template-engines)
  - [Tests](#testing)
    - [Frameworks de test](#testing-frameworks)
    - [Simulacres (mocks)](#mock)
    - [Fuzzing et delta-debugging/réduction/minimisation](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium et outils de contrôle de navigateur](#selenium-and-browser-control-tools)
    - [Injection de pannes](#fail-injection)
  - [Traitement de texte](#text-processing)
    - [Formateurs](#formatters)
    - [Langages de balisage](#markup-languages)
    - [Analyseurs/encodeurs/décodeurs](#parsersencodersdecoders)
    - [Expressions régulières](#regular-expressions)
    - [Assainissement](#sanitation)
    - [Outils de scraping](#scrapers)
    - [RSS](#rss)
    - [Utilitaires/divers](#utilitymiscellaneous)
  - [API tierces](#third-party-apis)
  - [Utilitaires](#utilities)
  - [UUID](#uuid)
  - [Validation](#validation)
  - [Gestion de versions](#version-control)
  - [Vidéo](#video)
  - [Frameworks web](#web-frameworks)
    - [Middlewares](#middlewares)
      - [Middlewares proprement dits](#actual-middlewares)
      - [Bibliothèques pour créer des middlewares HTTP](#libraries-for-creating-http-middlewares)
    - [Routeurs](#routers)
  - [WebAssembly](#webassembly)
  - [Serveurs de webhooks](#webhooks-server)
  - [Windows](#windows)
  - [Frameworks de workflows](#workflow-frameworks)
  - [XML](#xml)
  - [Zero Trust](#zero-trust)
  - [Analyse de code](#code-analysis)
  - [Plugins d'éditeurs](#editor-plugins)
  - [Outils go generate](#go-generate-tools)
  - [Outils Go](#go-tools)
  - [Logiciels](#software-packages)
    - [Outils DevOps](#devops-tools)
    - [Autres logiciels](#other-software)
- [Ressources](#resources)
  - [Benchmarks](#benchmarks)
  - [Conférences](#conferences)
  - [Livres numériques](#e-books)
    - [Livres numériques payants](#e-books-for-purchase)
    - [Livres numériques gratuits](#free-e-books)
  - [Gophers](#gophers)
  - [Meetups](#meetups)
  - [Guides de style](#style-guides)
  - [Réseaux sociaux](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Sites web](#websites)
    - [Tutoriels](#tutorials)
    - [Apprentissage guidé](#guided-learning)
  - [Contribution](#contribution)
  - [Licence](#license)

**[⬆ retour en haut](#contents)**



</details>

## Modèle d'acteurs

_Bibliothèques pour créer des programmes fondés sur le modèle d'acteurs._

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - Bibliothèque de flux de contrôle par graphe (AOP, acteurs, machine à états).
- [Ergo](https://github.com/ergo-services/ergo) - Un framework fondé sur les acteurs, avec transparence réseau, pour créer des architectures orientées événements en Golang. Inspiré d'Erlang.
- [Goakt](https://github.com/Tochemey/goakt) - Framework d'acteurs rapide et distribué pour Golang, utilisant les protocol buffers comme messages.
- [Hollywood](https://github.com/anthdm/hollywood) - Moteur d'acteurs léger et extrêmement rapide écrit en Golang.
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Acteurs distribués pour Go, C# et Java/Kotlin.

**[⬆ retour en haut](#contents)**

## Intelligence artificielle

_Bibliothèques pour créer des programmes tirant parti de l'IA._

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - Passerelle IA pour router, sécuriser et surveiller le trafic LLM vers plus de 10 fournisseurs. API compatible OpenAI, plugins de politiques WASM, déploiements canari, tableau de bord en temps réel.
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - Environnement d'exécution d'agents IA avec event sourcing, reprise sur point de contrôle et garantie d'exécution At-Most-Once (au plus une fois). Écrit en Go.
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Framework pour créer des agents IA avec état en Go.
- [agy-mcp](https://github.com/tphakala/agy-mcp) - Serveur Model Context Protocol (MCP) encapsulant la CLI Antigravity pour exécuter des prompts et des revues par les pairs.
- [ai](https://github.com/joakimcarlsson/ai) - Une boîte à outils Go pour créer des agents et des applications d'IA sur plusieurs fournisseurs, avec une intégration unifiée des LLM, des embeddings, de l'appel d'outils et de MCP.
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - Passerelle LLM compatible OpenAI qui route les requêtes vers 30 fournisseurs, avec repli, limitation de débit, budgets, garde-fous et observabilité.
- [chromem-go](https://github.com/philippgille/chromem-go) - Base de données vectorielle intégrable pour Go, avec une interface de type Chroma et aucune dépendance tierce. En mémoire, avec persistance optionnelle.
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Bibliothèque Go pour piloter l'interface de prompts non interactive de la CLI Claude Code depuis des programmes Go.
- [crewai-go](https://github.com/rhgs/crewai-go) - Portage Go idiomatique de CrewAI (orchestration multi-agents). Aucune dépendance, uniquement la bibliothèque standard.
- [Cynative](https://github.com/cynative/cynative) - Framework pour créer en Go des agents IA d'ingénierie de la sécurité. En lecture seule par construction, bac à sable intégré, 45 modèles d'agents pour la recherche approfondie sur AWS, GCP, Azure, K8s, GitHub et GitLab.
- [dakera-go](https://github.com/dakera-ai/dakera-go) - SDK client Go officiel pour le serveur de mémoire d'agents auto-hébergé Dakera, fournissant des interfaces typées pour le stockage et le rappel de mémoire, la gestion des sessions, les opérations sur les espaces de noms et la configuration de la décroissance.
- [fun](https://gitlab.com/tozd/go/fun) - La manière la plus simple, mais puissante, d'utiliser les grands modèles de langage (LLM) en Go.
- [goai](https://github.com/zendev-sh/goai) - SDK Go pour créer des applications d'IA. Un seul SDK, plus de 20 fournisseurs. Inspiré du Vercel AI SDK.
- [GoModel](https://github.com/ENTERPILOT/GoModel) - Passerelle IA exposant une API unifiée compatible OpenAI pour OpenAI, Anthropic, Gemini, Groq, xAI, Ollama et d'autres fournisseurs, avec routage, suivi de l'utilisation, limites de débit et garde-fous.
- [hotplex](https://github.com/hrygo/hotplex) - Moteur d'exécution d'agents IA avec sessions de longue durée pour Claude Code, OpenCode, pi-mono et d'autres outils d'IA en ligne de commande. Offre le streaming full-duplex, des intégrations multiplateformes et un bac à sable sécurisé.
- [jargo](https://github.com/gojargo/jargo) - Framework pour créer des agents vocaux IA en temps réel sur WebRTC, reliant reconnaissance vocale, LLM et synthèse vocale dans un pipeline de streaming.
- [keen-code](https://github.com/mochow13/keen-code) - Un agent de codage IA en terminal, économe en contexte. Indépendant du fournisseur, il prend en charge les MCP, les Agent Skills, les sous-agents et plus encore. Fourni avec une TUI simple et directe.
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo est un framework pour développer des applications reposant sur des modèles de langage.
- [langgraphgo](https://github.com/smallnest/langgraphgo) - Une bibliothèque Go pour créer des applications multi-acteurs avec état à l'aide de LLM, fondée sur le concept de LangGraph, avec de nombreuses architectures d'agents intégrées.
- [llm-box](https://github.com/alib8b8/llm-box) - Moteur de workflows IA en terminal avec des pipelines pilotés par YAML, plus de 20 fournisseurs de LLM (DeepSeek, Qwen, GLM, Mistral, etc.) et une TUI pour gérer les workflows.
- [LocalAI](https://github.com/mudler/LocalAI) - Alternative open source à OpenAI : hébergez vous-même vos modèles d'IA.
- [localaik](https://github.com/harshaneel/localaik) - Émulation locale, à la manière de LocalStack, des API OpenAI et Gemini ; un seul conteneur Docker, backend llama.cpp + Gemma 3.
- [mcp-go](https://github.com/mark3labs/mcp-go) - Implémentation Go du Model Context Protocol pour créer des serveurs et des clients MCP en Go.
- [Ollama](https://github.com/jmorganca/ollama) - Exécutez des grands modèles de langage en local.
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - Gérez des groupes d'instances Ollama, avec répartition de charge et basculement.
- [otellix](https://github.com/oluwajubelo1/otellix) - Observabilité LLM native OpenTelemetry et garde-fous budgétaires pour les environnements de production soumis à des contraintes de coûts.
- [routex](https://github.com/Ad3bay0c/routex) - Environnement d'exécution IA multi-agents piloté par YAML pour Go, avec supervision à la manière d'Erlang, prise en charge des serveurs d'outils MCP et une CLI.
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - Recherche sémantique dans les fichiers PDF, Markdown, DOCX, le code source et d'autres types de fichiers, utilisant des modèles d'embedding d'IA générative pour vectoriser les fichiers dans une base de données vectorielle.
- [skillreaper](https://github.com/thousandflowers/skillreaper) - CLI qui analyse les transcriptions de sessions d'agents IA pour identifier et mettre en quarantaine en toute sécurité les skills, serveurs MCP et agents inutilisés dans Claude Code, Codex CLI, Hermes, OpenCode, Cursor et OpenClaw.
- [Smeldr](https://github.com/Smeldr/core) - Backend de contenu natif IA avec gestion typée du cycle de vie, outils MCP natifs pour chaque type de contenu et aucune dépendance d'exécution.
- [snip](https://github.com/edouard-claude/snip) - Proxy CLI qui réduit de 60 à 90 % la consommation de jetons LLM grâce à des filtres YAML déclaratifs. Remplacement direct pour Claude Code, Cursor, Copilot et Gemini. Alternative à rtk en Go.
- [thermal](https://github.com/jadmadi/thermal) - Carte de chaleur des contributions, suivi des séries et classement des jetons en terminal pour les assistants de codage IA.
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - Framework pour créer des systèmes multi-agents fondés sur des LLM.
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - Serveur MCP offrant aux assistants IA des capacités de recherche web, d'extraction de contenu et de recherche multisource. Binaire unique, 5 fournisseurs de recherche avec basculement par disjoncteur, pipeline de scraping à 4 niveaux.
- [zenflow](https://github.com/zendev-sh/zenflow) - Moteur d'orchestration multi-agents et de workflows. Workflows YAML déclaratifs, coordinateur LLM avec boîtes aux lettres en étoile (hub-and-spoke), livraison sans situation de concurrence. Un fichier YAML, un binaire Go. Fonctionne avec tout fournisseur pris en charge par goai.

**[⬆ retour en haut](#contents)**

## Audio et musique

_Bibliothèques pour manipuler l'audio et la musique._

- [beep](https://github.com/gopxl/beep) - Une bibliothèque simple pour la lecture et la manipulation audio.
- [flac](https://github.com/mewkiz/flac) - Encodeur/décodeur FLAC natif en Go, avec prise en charge des flux FLAC.
- [gaad](https://github.com/Comcast/gaad) - Analyseur de flux binaire AAC natif en Go.
- [go-aac](https://github.com/tphakala/go-aac) - Encodeur et décodeur AAC-LC en Go pur, portés depuis FFmpeg.
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - Rééchantillonneur audio de haute qualité en Go pur, avec accélération SIMD.
- [go-flac](https://github.com/tphakala/go-flac) - Encodeur et décodeur FLAC natifs en Go, avec accélération SIMD.
- [go-mpris](https://github.com/leberKleber/go-mpris) - Client pour les interfaces dbus mpris.
- [go-opus](https://github.com/tphakala/go-opus) - Implémentation native en Go du codec audio Opus (RFC 6716), avec un décodeur conforme à la RFC.
- [go-resample](https://github.com/gojargo/go-resample) - Convertisseur de fréquence d'échantillonnage audio en Go pur (sans cgo), avec des convertisseurs sinc, linéaire et bloqueur d'ordre zéro.
- [go-wav](https://github.com/tphakala/go-wav) - Lecteur et écrivain WAV/RIFF en Go pur, avec prise en charge de RF64 et BW64 pour les fichiers de plus de 4 Gio.
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - Bibliothèque de traitement audio native en Go.
- [gocue](https://github.com/iSerganov/gocue) - CLI d'analyse audio qui détecte les points d'entrée, de sortie et de superposition et mesure le volume sonore EBU R128, en produisant du JSON pour Liquidsoap.
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Liaisons libsamplerate pour Go.
- [id3v2](https://github.com/bogem/id3v2) - Bibliothèque de décodage et d'encodage ID3 pour Go.
- [malgo](https://github.com/gen2brain/malgo) - Mini bibliothèque audio.
- [minimp3](https://github.com/tosone/minimp3) - Bibliothèque légère de décodage MP3.
- [music-theory](https://github.com/go-music-theory/music-theory) - Modèles de théorie musicale en Go.
- [Oto](https://github.com/hajimehoshi/oto) - Une bibliothèque bas niveau pour jouer du son sur plusieurs plateformes.
- [PortAudio](https://github.com/gordonklaus/portaudio) - Liaisons Go pour la bibliothèque d'E/S audio PortAudio.
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - Agents vocaux IA avec configuration JSON, pipelines STT → LLM → TTS sur WebSocket et WebRTC.

**[⬆ retour en haut](#contents)**

## Authentification et autorisation

_Bibliothèques pour mettre en œuvre l'authentification et l'autorisation._

- [authboss](https://github.com/volatiletech/authboss) - Système d'authentification modulaire pour le web. Il cherche à supprimer autant que possible le code répétitif et les « choses difficiles », afin qu'à chaque nouveau projet web en Go vous puissiez le brancher, le configurer et commencer à construire votre application sans devoir recréer un système d'authentification.
- [authgate](https://github.com/go-authgate/authgate) - Un serveur d'autorisation OAuth 2.0 léger prenant en charge le Device Authorization Grant ([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)), le flux Authorization Code avec PKCE ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)) et le Client Credentials Grant pour l'authentification de machine à machine.
- [branca](https://github.com/essentialkaos/branca) - [Implémentation de la spécification](https://github.com/tuupola/branca-spec) des jetons branca pour Golang 1.15+.
- [casbin](https://github.com/hsluoyz/casbin) - Bibliothèque d'autorisation qui prend en charge des modèles de contrôle d'accès tels que ACL, RBAC et ABAC.
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - fournit un analyseur du format de fichier cookies.txt.
- [go-githubauth](https://github.com/jferrl/go-githubauth) - Utilitaires d'authentification GitHub : génération et utilisation de jetons d'application et d'installation GitHub.
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian est une bibliothèque Golang qui offre un moyen simple, propre et idiomatique de mettre en place une authentification moderne et puissante pour les API et le web, prenant en charge l'authentification LDAP, Basic, par jeton Bearer et par certificat.
- [go-iam](https://github.com/melvinodsa/go-iam) - Système de gestion des identités et des accès pensé pour les développeurs, avec une interface simple.
- [go-jose](https://github.com/go-jose/go-jose) - Implémentation assez complète des spécifications JSON Web Token, JSON Web Signatures et JSON Web Encryption du groupe de travail JOSE.
- [go-jwt](https://github.com/deatil/go-jwt) - Une bibliothèque JWT (JSON Web Token) pour Go.
- [go-jwt](https://github.com/pardnchiu/go-jwt) - Paquet d'authentification JWT fournissant des jetons d'accès et des jetons de rafraîchissement, avec empreinte (fingerprinting), stockage Redis et rafraîchissement automatique.
- [goiabada](https://github.com/leodip/goiabada) - Un serveur open source d'authentification et d'autorisation prenant en charge OAuth2 et OpenID Connect.
- [gologin](https://github.com/dghubble/gologin) - gestionnaires chaînables pour la connexion via des fournisseurs d'authentification OAuth1 et OAuth2.
- [gorbac](https://github.com/mikespook/gorbac) - fournit une implémentation légère du contrôle d'accès basé sur les rôles (RBAC) en Golang.
- [gosession](https://github.com/Kwynto/gosession) - Sessions rapides pour net/http en GoLang. Ce paquet est peut-être la meilleure implémentation du mécanisme de session, ou du moins il essaie de le devenir.
- [goth](https://github.com/markbates/goth) - offre un moyen simple, propre et idiomatique d'utiliser OAuth et OAuth2. Gère plusieurs fournisseurs d'emblée.
- [jeff](https://github.com/abraithwaite/jeff) - Gestion des sessions web simple, flexible, sécurisée et idiomatique, avec des backends interchangeables.
- [jwt](https://github.com/pascaldekloe/jwt) - Bibliothèque JSON Web Token (JWT) légère.
- [jwt](https://github.com/cristalhq/jwt) - JSON Web Tokens sûrs, simples et rapides pour Go.
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - Middleware JWT pour les serveurs HTTP Golang, avec de nombreuses options de configuration.
- [jwt-go](https://github.com/golang-jwt/jwt) - Une implémentation complète des JSON Web Tokens (JWT). Cette bibliothèque prend en charge l'analyse et la vérification ainsi que la génération et la signature des JWT.
- [jwx](https://github.com/lestrrat-go/jwx) - Module Go implémentant diverses technologies JWx (JWA/JWE/JWK/JWS/JWT, aussi appelées JOSE).
- [keto](https://github.com/ory/keto) - Implémentation open source (Go) de « Zanzibar: Google's Consistent, Global Authorization System ». Fournit des API gRPC et REST, du newSQL et un langage de permissions simple et granulaire. Prend en charge ACL, RBAC et d'autres modèles d'accès.
- [loginsrv](https://github.com/tarent/loginsrv) - Microservice de connexion JWT avec des backends interchangeables tels que OAuth2 (Github), htpasswd, osiam.
- [melange](https://github.com/pthm/melange) - Compile les schémas d'autorisation OpenFGA en fonctions PL/pgSQL qui exécutent des contrôles d'accès fins fondés sur les relations directement dans PostgreSQL.
- [oauth2](https://github.com/golang/oauth2) - Successeur de goauth2. Paquet OAuth 2.0 générique avec prise en charge de JWT, des API Google, de Compute Engine et d'App Engine.
- [oidc](https://github.com/zitadel/oidc) - Bibliothèque client et serveur OpenID Connect facile à utiliser, écrite pour Go et certifiée par l'OpenID Foundation.
- [openfga](https://github.com/openfga/openfga) - Implémentation d'une autorisation fine fondée sur l'article « Zanzibar: Google's Consistent, Global Authorization System ». Soutenue par la [CNCF](https://www.cncf.io/).
- [osin](https://github.com/openshift/osin) - Bibliothèque de serveur OAuth2 pour Golang.
- [otpgen](https://github.com/grijul/otpgen) - Bibliothèque pour générer des codes TOTP/HOTP.
- [otpgo](https://github.com/jltorresm/otpgo) - Bibliothèque de mots de passe à usage unique basés sur le temps (TOTP) et sur HMAC (HOTP) pour Go.
- [paseto](https://github.com/o1egl/paseto) - Implémentation Golang des Platform-Agnostic Security Tokens (PASETO).
- [permissions](https://github.com/xyproto/permissions) - Bibliothèque pour suivre les utilisateurs, les états de connexion et les permissions. Utilise des cookies sécurisés et bcrypt.
- [scope](https://github.com/SonicRoshan/scope) - Gérez facilement les portées (scopes) OAuth2 en Go.
- [scs](https://github.com/alexedwards/scs) - Gestionnaire de sessions pour serveurs HTTP.
- [securecookie](https://github.com/chmike/securecookie) - Encodage/décodage efficace de cookies sécurisés.
- [session](https://github.com/icza/session) - Gestion des sessions en Go pour les serveurs web (y compris la prise en charge de Google App Engine - GAE).
- [sessions](https://github.com/adam-hanna/sessions) - Service de sessions ultra simple, très performant et hautement personnalisable pour les serveurs HTTP Go.
- [sessionup](https://github.com/swithek/sessionup) - Paquet simple mais efficace de gestion des sessions HTTP et d'identification.
- [sjwt](https://github.com/brianvoe/sjwt) - Générateur et analyseur JWT simple.
- [spicedb](https://github.com/authzed/spicedb) - Une base de données inspirée de Zanzibar qui permet une autorisation fine.
- [x509proxy](https://github.com/vkuznet/x509proxy) - Bibliothèque pour gérer les certificats proxy X509.

**[⬆ retour en haut](#contents)**

## Blockchain

_Outils pour construire des blockchains._

- [cometbft](https://github.com/cometbft/cometbft) - Un moteur de réplication de machine à états déterministe, distribué et tolérant aux pannes byzantines. C'est un fork de Tendermint Core qui implémente l'algorithme de consensus Tendermint.
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Un framework pour construire des blockchains publiques dans l'écosystème Cosmos.
- [gno](https://github.com/gnolang/gno) - Une suite complète de contrats intelligents construite avec Golang et Gnolang, une variante de Go déterministe conçue spécifiquement pour les blockchains.
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Implémentation Go officielle du protocole Ethereum.
- [gosemble](https://github.com/LimeChain/gosemble) - Un framework en Go pour construire des runtimes compatibles Polkadot/Substrate.
- [gossamer](https://github.com/ChainSafe/gossamer) - Une implémentation Go du Polkadot Host.
- [kubo](https://github.com/ipfs/kubo) - Une implémentation d'IPFS en Go. Elle fournit un stockage adressable par contenu, utilisable pour le stockage décentralisé dans les DApps. Elle repose sur le protocole IPFS.
- [lnd](https://github.com/lightningnetwork/lnd) - Une implémentation complète d'un nœud Lightning Network.
- [nview](https://github.com/blinklabs-io/nview) - Outil de surveillance local pour un nœud Cardano. C'est une TUI (interface utilisateur en terminal) conçue pour s'adapter à la plupart des écrans.
- [pactus](https://github.com/pactus-project/pactus) - Une implémentation de nœud complet de la blockchain Pactus en Go.
- [solana-go](https://github.com/gagliardetto/solana-go) - Bibliothèque Go pour communiquer avec les interfaces JSON RPC et WebSocket de Solana.
- [tendermint](https://github.com/tendermint/tendermint) - Middleware haute performance qui transforme une machine à états écrite dans n'importe quel langage de programmation en machine à états répliquée tolérante aux pannes byzantines, à l'aide des protocoles de consensus et de blockchain Tendermint.
- [tronlib](https://github.com/kslamph/tronlib) - Un SDK Go complet et prêt pour la production pour interagir avec la blockchain TRON, avec prise en charge des jetons TRC20.

**[⬆ retour en haut](#contents)**

## Création de bots

_Bibliothèques pour créer des bots et travailler avec eux._

- [arikawa](https://github.com/diamondburned/arikawa) - Une bibliothèque et un framework pour l'API Discord.
- [bot](https://github.com/go-telegram/bot) - Bibliothèque de bots Telegram sans dépendances, avec des composants d'interface supplémentaires.
- [echotron](https://github.com/NicoNex/echotron) - Une bibliothèque élégante et concurrente pour les bots Telegram en Go.
- [go-joe](https://joe-bot.net) - Une bibliothèque de bots polyvalente inspirée de Hubot, mais écrite en Go.
- [go-sarah](https://github.com/oklahomer/go-sarah) - Framework pour créer un bot pour les services de discussion de votre choix, dont LINE, Slack, Gitter et d'autres.
- [go-tg](https://github.com/mr-linch/go-tg) - Bibliothèque cliente Go générée à partir de la documentation officielle pour accéder à l'API Telegram Bot, avec tout le nécessaire pour créer des bots complexes.
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - Bibliothèque pour écrire des bots pour le chat de twitch.tv
- [micha](https://github.com/onrik/micha) - Bibliothèque Go pour l'API des bots Telegram.
- [slack-bot](https://github.com/innogames/slack-bot) - Bot Slack prêt à l'emploi pour les développeurs paresseux : commandes personnalisées, Jenkins, Jira, Bitbucket, Github...
- [slacker](https://github.com/slack-io/slacker) - Framework facile à utiliser pour créer des bots Slack.
- [telebot](https://github.com/tucnak/telebot) - Framework de bots Telegram écrit en Go.
- [teleflow](https://github.com/kslamph/teleflow) - Framework de bots Telegram simple et typé de façon sûre, avec des flux fluides et une gestion automatique de l'état.
- [telego](https://github.com/mymmrac/telego) - Bibliothèque de l'API Telegram Bot pour Golang, avec une implémentation complète et fidèle de l'API.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Client de bot Telegram simple et propre.
- [TG](https://github.com/enetx/tg) - Framework de bots Telegram pour Go.
- [wayback](https://github.com/wabarc/wayback) - Un bot pour Telegram, Mastodon, Slack et d'autres plateformes de messagerie qui archive des pages web.
- [ymsdk](https://github.com/rekurt/ymsdk) - SDK Go pour l'API Bot de Yandex Messenger, avec des modèles typés de façon sûre, des nouvelles tentatives automatiques et la gestion des limites de débit.
   - [Wisp](https://github.com/wisp-trading/wisp) - Framework de trading orienté événements pour Go. Marché au comptant, contrats à terme perpétuels, marchés prédictifs. Multi-plateformes d'échange (Bybit, Hyperliquid, Polymarket).

**[⬆ retour en haut](#contents)**

## Automatisation de la compilation

_Bibliothèques et outils facilitant l'automatisation de la compilation._

- [1build](https://github.com/gopinath-langote/1build) - Outil en ligne de commande pour gérer sans friction les commandes propres à un projet.
- [air](https://github.com/cosmtrek/air) - Air - Rechargement à chaud pour les applications Go.
- [anko](https://github.com/GuilhermeCaruso/anko) - Surveillant d'applications simple pour plusieurs langages de programmation.
- [gaper](https://github.com/maxclaus/gaper) - Compile et redémarre un projet Go lorsqu'il plante ou qu'un fichier surveillé change.
- [gilbert](https://go-gilbert.github.io) - Système de compilation et exécuteur de tâches pour les projets Go.
- [gob](https://github.com/kcmvp/gob) - Outil de compilation à la [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) pour les projets Go.
- [goyek](https://github.com/goyek/goyek) - Créez des pipelines de compilation en Go.
- [mage](https://github.com/magefile/mage) - Mage est un outil de compilation à la make/rake utilisant Go.
- [mmake](https://github.com/tj/mmake) - Un Make moderne.
- [realize](https://github.com/tockins/realize) - Système de compilation Go avec surveillance de fichiers et rechargement à chaud. Exécutez, compilez et surveillez les modifications de fichiers avec des chemins personnalisés.
- [rex](https://github.com/rexrun-dev/rex) - Lanceur de projets universel sans configuration. Détecte votre pile technique (Go, Node, Python, Rust, PHP, Zig, Elixir) et exécute la bonne commande.
- [Task](https://github.com/go-task/task) - alternative simple à « Make ».
- [taskctl](https://github.com/taskctl/taskctl) - Exécuteur de tâches concurrent.
- [xc](https://github.com/joerdav/xc) - Exécuteur de tâches définies dans README.md : du Markdown exécutable.

**[⬆ retour en haut](#contents)**

## Ligne de commande

### Interfaces de console avancées

_Bibliothèques pour créer des applications de console et des interfaces utilisateur en console._

- [asciigraph](https://github.com/guptarohit/asciigraph) - Paquet Go pour créer des graphiques linéaires ASCII légers ╭┈╯ dans les applications en ligne de commande, sans autre dépendance.
- [aurora](https://github.com/logrusorgru/aurora) - Couleurs de terminal ANSI compatibles avec fmt.Printf/Sprintf.
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - Affiche des boîtes hautement personnalisables dans le terminal.
- [bubble-table](https://github.com/Evertras/bubble-table) - Un composant de tableau interactif pour bubbletea.
- [bubbles](https://github.com/charmbracelet/bubbles) - Composants TUI pour bubbletea.
- [bubbletea](https://github.com/charmbracelet/bubbletea) - Framework Go pour créer des applications en terminal, fondé sur The Elm Architecture.
- [chroma16](https://github.com/arceus-7/chroma16) - Génère une palette de terminal harmonieuse de 16 couleurs à partir d'une seule couleur ou chaîne de départ.
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Outil de modélisation dynamique de fichiers de configuration pour les manifestes Kubernetes ou les fichiers de configuration en général.
- [ctc](https://github.com/wzshiming/ctc) - Bibliothèque multiplateforme et non invasive de couleurs de terminal, qui ne nécessite pas de modifier la méthode Print.
- [fx](https://github.com/antonmedv/fx) - Visionneuse et processeur JSON en terminal.
- [go-ataman](https://github.com/workanator/go-ataman) - Bibliothèque Go pour afficher des modèles de texte colorés ANSI dans les terminaux.
- [go-colorable](https://github.com/mattn/go-colorable) - Writer colorable pour Windows.
- [go-colortext](https://github.com/daviddengcn/go-colortext) - Bibliothèque Go pour l'affichage en couleur dans les terminaux.
- [go-isatty](https://github.com/mattn/go-isatty) - isatty pour Golang.
- [go-palette](https://github.com/abusomani/go-palette) - Bibliothèque Go qui fournit des définitions de styles élégantes et pratiques à l'aide des couleurs ANSI. Entièrement compatible avec la [bibliothèque fmt](https://pkg.go.dev/fmt), qu'elle encapsule, pour de jolies mises en page en terminal.
- [go-prompt](https://github.com/c-bata/go-prompt) - Bibliothèque pour créer une invite interactive puissante, inspirée de [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit).
- [go-tui](https://github.com/grindlemire/go-tui) - Un framework déclaratif d'interfaces en terminal avec des modèles à la templ, une mise en page flexbox et un serveur de langage pour la prise en charge dans les éditeurs.
- [gocui](https://github.com/jroimartin/gocui) - Bibliothèque Go minimaliste destinée à créer des interfaces utilisateur en console.
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - Stylise le texte du terminal.
- [gookit/color](https://github.com/gookit/color) - Bibliothèque de rendu des couleurs en terminal, prenant en charge l'affichage en 16 couleurs, 256 couleurs et RVB, compatible avec Windows.
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf génère, via une CLI interactive, un squelette de projet Go aux choix affirmés et de qualité production. Arrêtez de copier-coller du code de base d'un projet à l'autre.
- [lazyenv](https://github.com/lazynop/lazyenv) - TUI pour parcourir, comparer et modifier des fichiers .env.
- [lazyteams](https://github.com/agmonetti/lazyteams) - Interface utilisateur en terminal pilotée au clavier pour Microsoft Teams.
- [lipgloss](https://github.com/charmbracelet/lipgloss) - Définissez de façon déclarative les styles de couleur, de format et de mise en page dans le terminal.
- [loom](https://github.com/loom-go/loom) - Framework de composants réactifs fondé sur les signaux pour créer des TUI.
- [marker](https://github.com/cyucelen/marker) - Le moyen le plus simple de repérer et de marquer des chaînes pour des sorties de terminal colorées.
- [mpb](https://github.com/vbauerster/mpb) - Barres de progression multiples pour les applications en terminal.
- [phoenix](https://github.com/phoenix-tui/phoenix) - Framework TUI haute performance avec une architecture inspirée d'Elm, un rendu Unicode parfait et un système d'événements sans allocation.
- [progressbar](https://github.com/schollz/progressbar) - Barre de progression basique et thread-safe qui fonctionne sur tous les systèmes d'exploitation.
- [pterm](https://github.com/pterm/pterm) - Une bibliothèque pour embellir la sortie console sur toutes les plateformes, avec de nombreux composants combinables.
- [simpletable](https://github.com/alexeyco/simpletable) - Tableaux simples dans un terminal avec Go.
- [spinner](https://github.com/briandowns/spinner) - Paquet Go pour fournir facilement un indicateur d'activité (spinner) en terminal, avec options.
- [tabby](https://github.com/cheynewallace/tabby) - Une toute petite bibliothèque pour des tableaux Golang très simples.
- [table](https://github.com/tomlazar/table) - Petite bibliothèque de tableaux colorés pour le terminal.
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox est une bibliothèque pour créer des interfaces textuelles multiplateformes.
- [termdash](https://github.com/mum4k/termdash) - Tableau de bord en terminal pour Go, basé sur **termbox-go** et inspiré de [termui](https://github.com/gizak/termui).
- [termenv](https://github.com/muesli/termenv) - Prise en charge avancée des styles et couleurs ANSI pour vos applications en terminal.
- [termui](https://github.com/gizak/termui) - Tableau de bord en terminal pour Go, basé sur **termbox-go** et inspiré de [blessed-contrib](https://github.com/yaronn/blessed-contrib).
- [uilive](https://github.com/gosuri/uilive) - Bibliothèque pour mettre à jour la sortie du terminal en temps réel.
- [uiprogress](https://github.com/gosuri/uiprogress) - Bibliothèque flexible pour afficher des barres de progression dans les applications en terminal.
- [uitable](https://github.com/gosuri/uitable) - Bibliothèque pour améliorer la lisibilité des applications en terminal utilisant des données tabulaires.
- [vhs](https://github.com/charmbracelet/vhs) - Votre magnétoscope en ligne de commande : générez des GIF de terminal à partir de code pour la documentation et les tutoriels.
- [yacspin](https://github.com/theckman/yacspin) - Yet Another CLi Spinner (encore un autre spinner CLI), un paquet pour travailler avec des indicateurs d'activité en terminal.

**[⬆ retour en haut](#contents)**

### CLI standard

_Bibliothèques pour créer des applications en ligne de commande standard ou basiques._

- [acmd](https://github.com/cristalhq/acmd) - Paquet CLI simple, utile et aux choix affirmés en Go.
- [argparse](https://github.com/akamensky/argparse) - Analyseur d'arguments de ligne de commande inspiré du module argparse de Python.
- [argv](https://github.com/cosiner/argv) - Bibliothèque Go pour découper une chaîne de ligne de commande en tableau d'arguments selon la syntaxe bash.
- [boa](https://github.com/GiGurra/boa) - Options, variables d'environnement, validation et fichiers de configuration déclaratifs à partir des balises de structures. Construit sur cobra.
- [carapace](https://github.com/rsteube/carapace) - Générateur d'autocomplétion des arguments de commande pour spf13/cobra.
- [carapace-bin](https://github.com/rsteube/carapace-bin) - Outil d'autocomplétion d'arguments multi-shells et multi-commandes.
- [carapace-spec](https://github.com/rsteube/carapace-spec) - Définissez des autocomplétions simples à l'aide d'un fichier de spécification.
- [climax](https://github.com/tucnak/climax) - CLI alternative « à visage humain », dans l'esprit de la commande Go.
- [clîr](https://github.com/leaanthony/clir) - Une bibliothèque CLI simple et claire. Sans dépendance.
- [cmd](https://github.com/posener/cmd) - Étend le paquet standard `flag` pour prendre en charge les sous-commandes et plus encore, de manière idiomatique.
- [cmdr](https://github.com/hedzr/cmdr) - Une bibliothèque Go d'interface en ligne de commande de style POSIX/GNU, à la getopt.
- [cobra](https://github.com/spf13/cobra) - Commander pour des interactions CLI modernes en Go.
- [command-chain](https://github.com/rainu/go-command-chain) - Une bibliothèque Go pour configurer et exécuter des chaînes de commandes, comme les pipelines des shells Unix.
- [commandeer](https://github.com/jaffee/commandeer) - Applications CLI pratiques pour les développeurs : configure les options, les valeurs par défaut et l'aide d'utilisation à partir des champs et balises de structures.
- [complete](https://github.com/posener/complete) - Écrivez des autocomplétions bash en Go, et autocomplétion bash de la commande Go.
- [console](https://github.com/reeflective/console) Bibliothèque d'applications en boucle fermée pour les commandes Cobra, avec des invites oh-my-posh et plus encore.
- [Dnote](https://github.com/dnote/dnote) - Un carnet de notes simple en ligne de commande avec synchronisation multi-appareils.
- [elvish](https://github.com/elves/elvish) - Un langage de programmation expressif et un shell interactif polyvalent.
- [env](https://github.com/codingconcepts/env) - Configuration des structures par l'environnement, fondée sur les balises.
- [flaggy](https://github.com/integrii/flaggy) - Un paquet d'options robuste et idiomatique, avec une excellente prise en charge des sous-commandes.
- [flagvar](https://github.com/sgreben/flagvar) - Une collection de types d'arguments d'options pour le paquet standard `flag` de Go.
- [flash-flags](https://github.com/agilira/flash-flags) - Bibliothèque d'analyse d'options ultra-rapide, sans dépendance et conforme POSIX, utilisable comme remplacement direct de la bibliothèque standard, avec un durcissement de sécurité.
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - Outil en terminal de transfert pair-à-pair de fichiers et de messages sur un protocole UDP fiable personnalisé.
- [getopt](https://github.com/jon-codes/getopt) - Un `getopt` fidèle en Go, validé par rapport à l'implémentation de la libc GNU.
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - Outil CLI pour générer la structure d'applications Go selon les modèles d'architecture minimaliste, standard et hexagonale.
- [go-arg](https://github.com/alexflint/go-arg) - Analyse d'arguments fondée sur les structures en Go.
- [go-flags](https://github.com/jessevdk/go-flags) - analyseur d'options de ligne de commande pour Go.
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Analyseur d'options Go inspiré de la flexibilité du GetOpt::Long de Perl.
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Une bibliothèque d'édition de ligne personnalisable avec raccourcis Emacs, prise en charge d'Unicode, autocomplétion et coloration syntaxique. Utilisée dans le shell NYAGOS.
- [gocmd](https://github.com/devfacet/gocmd) - Bibliothèque Go pour créer des applications en ligne de commande.
- [goopt](https://github.com/napalu/goopt) - Un framework CLI déclaratif pour Go, fondé sur les balises de structures, avec un large éventail de fonctionnalités telles que les commandes/options hiérarchiques, l'i18n, l'autocomplétion du shell et la validation.
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Un binaire multicall unique natif en Go, avec 77 outils POSIX et plus de 97 % de compatibilité avec les tests de BusyBox.
- [hashicorp/cli](https://github.com/hashicorp/cli) - Bibliothèque Go pour implémenter des interfaces en ligne de commande.
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - framework d'applications CLI avec configuration automatique et injection de dépendances.
- [job](https://github.com/liujianping/job) - JOB : transformez votre commande ponctuelle en tâche de longue durée.
- [kingpin](https://github.com/alecthomas/kingpin) - Analyseur de ligne de commande et d'options prenant en charge les sous-commandes (remplacé par `kong` ; voir ci-dessous).
- [liner](https://github.com/peterh/liner) - Bibliothèque Go de type readline pour les interfaces en ligne de commande.
- [mcli](https://github.com/jxskiss/mcli) - Une bibliothèque CLI minimale mais très puissante pour Go.
- [memsh](https://github.com/amjadjibon/memsh) - Shell bash virtuel en Go : exécute des commandes shell sur un système de fichiers en mémoire (afero), avec prise en charge de plugins WASM et un serveur HTTP intégrable.
- [mkideal/cli](https://github.com/mkideal/cli) - Paquet de ligne de commande riche en fonctionnalités et facile à utiliser, fondé sur les balises de structures Golang.
- [mow.cli](https://github.com/jawher/mow.cli) - Bibliothèque Go pour créer des applications CLI avec une analyse et une validation sophistiquées des options et des arguments.
- [neuron-cli](https://github.com/steevin/neuron-cli) - Un gestionnaire de connaissances en terminal, local d'abord et compatible avec Obsidian.
- [OpenCLI](https://github.com/bcdxn/opencli) - Spécification de type OpenAPI pour les CLI ; définissez votre interface dans un document indépendant du langage pour générer la documentation et le code de base du framework.
- [ops](https://github.com/nanovms/ops) - Constructeur/orchestrateur d'unikernels.
- [orpheus](https://github.com/agilira/orpheus) - Framework CLI avec durcissement de sécurité, système de stockage de plugins et fonctionnalités d'observabilité pour la production.
- [pflag](https://github.com/spf13/pflag) - Remplacement direct du paquet flag de Go, implémentant les --flags de style POSIX/GNU.
- [readline](https://github.com/reeflective/readline) - Bibliothèque de shell avec des fonctionnalités d'interface modernes et faciles à utiliser.
- [sflags](https://github.com/octago/sflags) - Générateur d'options fondé sur les structures pour flag, urfave/cli, pflag, cobra, kingpin et d'autres bibliothèques.
- [structcli](https://github.com/leodido/structcli) - Éliminez le code répétitif de Cobra : créez de manière déclarative des CLI puissantes et riches en fonctionnalités à partir de structures Go.
- [strumt](https://github.com/antham/strumt) - Bibliothèque pour créer des chaînes d'invites.
- [subcmd](https://github.com/bobg/subcmd) - Une autre approche de l'analyse et de l'exécution des sous-commandes. Fonctionne avec le paquet standard `flag`.
- [teris-io/cli](https://github.com/teris-io/cli) - API simple et complète pour créer des interfaces en ligne de commande en Go.
- [urfave/cli](https://github.com/urfave/cli) - Paquet simple, rapide et amusant pour créer des applications en ligne de commande en Go (anciennement codegangsta/cli).
- [version](https://github.com/mszostok/version) - Collecte et affiche les informations de version d'une CLI dans plusieurs formats, avec un avis de mise à jour.
- [wlog](https://github.com/dixonwille/wlog) - Interface de journalisation simple prenant en charge la couleur multiplateforme et la concurrence.
- [wmenu](https://github.com/dixonwille/wmenu) - Structure de menu facile à utiliser pour les applications CLI qui invitent l'utilisateur à faire des choix.

**[⬆ retour en haut](#contents)**

## Configuration

_Bibliothèques pour l'analyse de la configuration._

- [aconfig](https://github.com/cristalhq/aconfig) - Chargeur de configuration simple, utile et aux choix affirmés.
- [argus](https://github.com/agilira/argus) - Surveillance de fichiers et gestion de configuration avec tampon circulaire MPSC, stratégies de traitement par lots adaptatives et analyse universelle des formats (JSON, YAML, TOML, INI, HCL, Properties).
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Le fournisseur de configuration permettant de consommer les données d'Azure App Configuration depuis des applications Go.
- [bcl](https://github.com/wkhere/bcl) - BCL est un langage de configuration similaire à HCL.
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - Lecteur de configuration minimaliste (depuis des fichiers, l'ENV et où vous voulez).
- [config](https://github.com/JeremyLoy/config) - Configuration d'applications cloud native. Liez l'ENV à des structures en seulement deux lignes.
- [config](https://github.com/num30/config) - configurez votre application à l'aide d'un fichier, de variables d'environnement ou d'options en deux lignes de code.
- [config](https://github.com/andreiavrammsd/config) - Chargeur de configuration fondé sur les structures, avec un analyseur de fichiers de configuration dédié, prenant en charge les variables d'environnement, les options, les valeurs par défaut et la validation.
- [configuration](https://github.com/BoRuDar/configuration) - Bibliothèque pour initialiser des structures de configuration à partir de variables d'environnement, de fichiers, d'options et de la balise 'default'.
- [configuro](https://github.com/sherifabdlnaby/configuro) - framework de chargement et de validation de configuration aux choix affirmés, depuis l'ENV et des fichiers, destiné aux applications conformes à la méthodologie 12-Factor.
- [confiq](https://github.com/greencoda/confiq) - Bibliothèque Go de décodage de formats de données structurées vers des structures de configuration, prenant en charge plusieurs formats de données.
- [confita](https://github.com/heetch/confita) - Charge en cascade la configuration de plusieurs backends dans une structure.
- [conflate](https://github.com/the4thamigo-uk/conflate) - Bibliothèque/outil pour fusionner plusieurs fichiers JSON/YAML/TOML provenant d'URL arbitraires, les valider par rapport à un schéma JSON et appliquer les valeurs par défaut définies dans le schéma.
- [enflag](https://github.com/atelpis/enflag) - Bibliothèque de configuration orientée conteneurs et sans dépendance, qui unifie l'analyse des variables d'environnement et des options. Utilise les génériques pour la sûreté du typage, sans réflexion ni balises de structures.
- [env](https://github.com/caarlos0/env) - Analyse les variables d'environnement vers des structures Go (avec valeurs par défaut).
- [env](https://github.com/junk1tm/env) - Un paquet léger pour charger des variables d'environnement dans des structures.
- [env](https://github.com/syntaqx/env) - Un paquet utilitaire pour l'environnement, avec prise en charge de la désérialisation dans des structures.
- [envconfig](https://github.com/vrischmann/envconfig) - Lisez votre configuration à partir de variables d'environnement.
- [envh](https://github.com/antham/envh) - Fonctions utilitaires pour gérer les variables d'environnement.
- [envyaml](https://github.com/yuseferi/envyaml) - Lecteur YAML avec variables d'environnement. Il permet de conserver les secrets dans des variables d'environnement tout en chargeant les configurations sous forme de YAML structuré.
- [fig](https://github.com/kkyr/fig) - Toute petite bibliothèque pour lire la configuration depuis un fichier et des variables d'environnement (avec validation et valeurs par défaut).
- [genv](https://github.com/sakirsensoy/genv) - Lisez facilement les variables d'environnement, avec prise en charge de dotenv.
- [go-array](https://github.com/deatil/go-array) - Un paquet Go qui lit ou définit des données dans une map, une slice ou du JSON.
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - Paquet Go qui récupère des paramètres depuis AWS System Manager - Parameter Store.
- [go-cfg](https://github.com/dsbasko/go-cfg) - Cette bibliothèque offre un moyen unifié de lire des données de configuration dans une structure à partir de diverses sources, telles que l'environnement, les options et les fichiers de configuration (.json, .yaml, .toml, .env).
- [go-conf](https://github.com/ThomasObenaus/go-conf) - Bibliothèque simple de configuration d'applications fondée sur des structures annotées. Elle prend en charge la lecture de la configuration depuis des variables d'environnement, des fichiers de configuration et des paramètres de ligne de commande.
- [go-config](https://github.com/MordaTeam/go-config) - Bibliothèque simple et pratique pour travailler avec les configurations d'applications.
- [go-external-config](https://github.com/go-external-config/go) - Bibliothèque de gestion de configuration pour Go inspirée de Spring.
- [go-external-config/aws](https://github.com/go-external-config/aws) - Prise en charge d'AWS comme source de propriétés pour go-external-config.
- [go-external-config/consul](https://github.com/go-external-config/consul) - Prise en charge de Consul comme source de propriétés pour go-external-config.
- [go-external-config/vault](https://github.com/go-external-config/vault) - Prise en charge de Vault comme source de propriétés pour go-external-config.
- [go-ini](https://github.com/subpop/go-ini) - Un paquet Go qui sérialise et désérialise des fichiers INI.
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - Utilitaire Go pour charger des paramètres de configuration depuis AWS SSM (Parameter Store).
- [go-up](https://github.com/ufoscout/go-up) - Une bibliothèque de configuration simple avec résolution récursive des espaces réservés, sans magie.
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - Validation YAML tenant compte de la source, avec des schémas Go natifs et la prise en charge de JSON Schema.
- [GoCfg](https://github.com/Jagerente/gocfg) - Gestionnaire de configuration avec des contrats fondés sur les balises de structures, des fournisseurs de valeurs personnalisés, des analyseurs et la génération de documentation. Personnalisable tout en restant simple.
- [goconfig](https://github.com/fulldump/goconfig) - Remplit des structures Go à partir des options, des variables d'environnement, de config.json et des valeurs par défaut, avec une priorité déterministe. Aucune dépendance supplémentaire.
- [godotenv](https://github.com/joho/godotenv) - Portage Go de la bibliothèque dotenv de Ruby (charge les variables d'environnement depuis `.env`).
- [goenv](https://github.com/psyb0t/goenv) - Lit la variable d'environnement ENV et indique si le processus s'exécute en production ou en développement.
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config est un gestionnaire de configuration léger mais puissant pour le langage de programmation Go.
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - Configuration JSON modulaire. Gardez vos structures de configuration à côté du code qu'elles configurent et déléguez l'analyse à des sous-modules sans sacrifier la sérialisation complète de la configuration.
- [gonfig](https://github.com/milad-abbasi/gonfig) - Analyseur de configuration fondé sur les balises, qui charge des valeurs provenant de différents fournisseurs dans une structure typée de façon sûre.
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - Charge la configuration depuis des variables d'environnement dans des structures par réflexion, avec des valeurs par défaut définies par balises et des champs obligatoires.
- [gookit/config](https://github.com/gookit/config) - gestion de la configuration d'applications (chargement, lecture, écriture). Prend en charge JSON, YAML, TOML, INI, HCL. Chargement de plusieurs fichiers, fusion avec surcharge des données.
- [harvester](https://github.com/beatlabs/harvester) - Harvester, un paquet de configuration statique et dynamique facile à utiliser, prenant en charge l'initialisation, les variables d'environnement et l'intégration avec Consul.
- [hedzr/store](https://github.com/hedzr/store) - Bibliothèque de gestion de configuration extensible et haute performance, optimisée pour les données hiérarchiques.
- [hjson](https://github.com/hjson/hjson-go) - Human JSON, un format de fichier de configuration pour les humains. Syntaxe assouplie, moins d'erreurs, plus de commentaires.
- [hocon](https://github.com/gurkankaymak/hocon) - Bibliothèque de configuration pour le format HOCON (un sur-ensemble de JSON convivial), prenant en charge des fonctionnalités comme les variables d'environnement, les références à d'autres valeurs, les commentaires et les fichiers multiples.
- [ini](https://github.com/go-ini/ini) - Paquet Go pour lire et écrire des fichiers INI.
- [ini](https://github.com/wlevene/ini) - Bibliothèque d'analyse et d'écriture INI : désérialisation vers une structure, sérialisation en JSON, écriture et surveillance de fichiers.
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - Bibliothèque Go pour gérer des données de configuration issues de variables d'environnement.
- [koanf](https://github.com/knadh/koanf) - Bibliothèque légère et extensible pour lire la configuration dans les applications Go. Prise en charge intégrée de JSON, TOML, YAML, de l'environnement et de la ligne de commande.
- [konf](https://github.com/nil-go/konf) - L'API la plus simple pour lire et surveiller la configuration depuis un fichier, l'environnement, les options et les clouds (par ex. AWS, Azure, GCP).
- [konfig](https://github.com/lalamove/konfig) - Gestion de configuration composable, observable et performante pour Go, à l'ère du traitement distribué.
- [kong](https://github.com/alecthomas/kong) - Analyseur de ligne de commande prenant en charge des structures de ligne de commande arbitrairement complexes et des sources de configuration supplémentaires telles que YAML, JSON, TOML, etc. (successeur de `kingpin`).
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - Paquet simple et utile pour lire les variables d'environnement.
- [nfigure](https://github.com/muir/nfigure) - Configuration par bibliothèque fondée sur les balises de structures, depuis la ligne de commande (style POSIX et Go), l'environnement, JSON, YAML
- [onion](https://github.com/goraz/onion) - Configuration par couches pour Go, prenant en charge JSON, TOML, YAML, properties, etcd, l'environnement et le chiffrement avec PGP.
- [piper](https://github.com/Yiling-J/piper) - Surcouche de Viper avec héritage de configuration et génération de clés.
- [sonic](https://github.com/bytedance/sonic) - Une bibliothèque de sérialisation et de désérialisation JSON extrêmement rapide.
- [swap](https://github.com/oblq/swap) - Instancie/configure des structures de façon récursive, en fonction de l'environnement de compilation (YAML, TOML, JSON et environnement).
- [typenv](https://github.com/diegomarangoni/typenv) - Bibliothèque minimaliste de variables d'environnement typées, sans dépendance.
- [uConfig](https://github.com/omeid/uconfig) - Gestion de configuration légère, sans dépendance et extensible.
- [viper](https://github.com/spf13/viper) - Configuration Go avec du mordant (« with fangs »).
- [xdg](https://github.com/adrg/xdg) - Implémentation Go de la [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) et des [répertoires utilisateur XDG](https://wiki.archlinux.org/index.php/XDG_user_directories).
- [yamagiconf](https://github.com/romshark/yamagiconf) - Le « sous-ensemble sûr » de YAML pour les configurations Go.
- [zerocfg](https://github.com/chaindead/zerocfg) - Gestion de configuration concise et sans effort, qui évite le code répétitif et prend en charge plusieurs sources avec surcharges par priorité.

**[⬆ retour en haut](#contents)**

## Intégration continue

_Outils d'aide à l'intégration continue._

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse est une plateforme d'intégration continue distribuée.
- [Bencher](https://bencher.dev/) - Une suite d'outils de benchmarking continu conçus pour détecter les régressions de performances dans la CI.
- [CDS](https://github.com/ovh/cds) - Plateforme open source de CI/CD et d'automatisation DevOps de niveau entreprise.
- [dot](https://github.com/opnlabs/dot) - Un système d'intégration continue minimal, local d'abord, qui utilise Docker pour exécuter des tâches en parallèle par étapes.
- [drone](https://github.com/drone/drone) - Drone est une plateforme d'intégration continue construite sur Docker, écrite en Go.
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - Une GitHub Action pour suivre gratuitement la couverture de code dans vos pull requests, avec un bel aperçu HTML.
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - Utilisez le fuzzing intégré de Go 1.18 dans GitHub Actions.
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Automatise le versionnage sémantique des dépôts Git.
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - Une GitHub Action qui signale des problèmes lorsque la couverture de tests est inférieure au seuil défini.
- [gomason](https://github.com/nikogura/gomason) - Testez, compilez, signez et publiez vos binaires Go depuis un espace de travail propre.
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - la sortie de go test pour les humains.
- [goveralls](https://github.com/mattn/goveralls) - Intégration Go pour Coveralls.io, le système de suivi continu de la couverture de code.
- [muffet](https://github.com/raviqqe/muffet) - Vérificateur de liens de sites web rapide en Go ; voir les [alternatives](https://github.com/lycheeverse/lychee#features).
- [overalls](https://github.com/go-playground/overalls) - coverprofile de projet Go multi-paquets pour des outils comme goveralls.
- [PikoCI](https://github.com/pikoci/pikoci) - CI/CD auto-hébergée inspirée de Concourse. Binaire unique, n'importe quelle base de données, n'importe quelle file d'attente. Pipelines HCL, types de ressources et exécuteurs interchangeables.
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - Outil de test de couverture récursif.
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker est un fork communautaire du système de CI Drone.

**[⬆ retour en haut](#contents)**

## Préprocesseurs CSS

_Bibliothèques pour le prétraitement des fichiers CSS._

- [go-css](https://github.com/napsy/go-css) - Un analyseur CSS très simple, écrit en Go.
- [go-libsass](https://github.com/wellington/go-libsass) - Surcouche Go du projet libsass, compatible à 100 % avec Sass.

**[⬆ retour en haut](#contents)**

## Frameworks d'intégration de données

_Frameworks pour réaliser de l'ELT / ETL_

- [Benthos](https://github.com/benthosdev/benthos) - Une passerelle de diffusion de messages entre de nombreux protocoles.
- [CloudQuery](http://github.com/cloudquery/cloudquery) - Un framework d'intégration de données ELT haute performance, à l'architecture modulaire.
- [confluence2md](https://github.com/gkoos/confluence2md) - Robot d'exploration et convertisseur de Confluence vers Markdown.
- [omniparser](https://github.com/jf-tech/omniparser) - Une bibliothèque ETL polyvalente qui analyse en flux des entrées textuelles (CSV/txt/JSON/XML/EDI/X12/EDIFACT/etc.) et transforme les données en sortie JSON à l'aide d'un schéma piloté par les données.

**[⬆ retour en haut](#contents)**

## Structures de données et algorithmes

### Empaquetage de bits et compression

- [bingo](https://github.com/iancmcc/bingo) - Empaquetage rapide et sans allocation des types natifs en octets, préservant l'ordre lexicographique.
- [binpacker](https://github.com/zhuangsirui/binpacker) - Outil d'empaquetage et de dépaquetage binaire qui aide à construire des flux binaires personnalisés.
- [bit](https://github.com/yourbasic/bit) - Structure de données d'ensemble pour Golang, avec en prime des fonctions de manipulation de bits.
- [crunch](https://github.com/superwhiskers/crunch) - Paquet Go implémentant des tampons pour manipuler facilement divers types de données.
- [go-ef](https://github.com/amallia/go-ef) - Une implémentation Go du codage Elias-Fano.
- [roaring](https://github.com/RoaringBitmap/roaring) - Paquet Go implémentant des ensembles de bits compressés.

### Ensembles de bits

- [bitmap](https://github.com/kelindar/bitmap) - Bitmap/ensemble de bits dense, sans allocation et compatible SIMD en Go.
- [bitset](https://github.com/bits-and-blooms/bitset) - Paquet Go implémentant des ensembles de bits.

### Filtres de Bloom et filtres coucou

- [bloom](https://github.com/bits-and-blooms/bloom) - Paquet Go implémentant des filtres de Bloom.
- [bloom](https://github.com/zhenjl/bloom) - Filtres de Bloom implémentés en Go.
- [bloom](https://github.com/yourbasic/bloom) - Implémentation de filtre de Bloom en Golang.
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Encore une implémentation de filtre de Bloom en Go, compatible avec la bibliothèque Guava de Java.
- [boomfilters](https://github.com/tylertreat/BoomFilters) - Structures de données probabilistes pour traiter des flux continus et non bornés.
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - Filtre coucou : un filtre coucou complet, configurable et optimisé en espace par rapport aux autres implémentations, qui offre toutes les fonctionnalités mentionnées dans l'article d'origine.
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - Filtre coucou : une bonne alternative au filtre de Bloom à comptage, implémentée en Go.
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - Première implémentation en Go pur des filtres Ribbon (en pratique plus petits que les filtres de Bloom et Xor) pour des requêtes d'appartenance approximative économes en espace.
- [ring](https://github.com/TheTannerRyan/ring) - Implémentation Go d'un filtre de Bloom haute performance et thread-safe.

### Collections de structures de données et d'algorithmes

- [algorithms](https://github.com/shady831213/algorithms) - Algorithmes et structures de données. Étude du CLRS.
- [go-datastructures](https://github.com/Workiva/go-datastructures) - Collection de structures de données utiles, performantes et thread-safe.
- [gods](https://github.com/emirpasic/gods) - Structures de données Go. Conteneurs, ensembles, listes, piles, maps, maps bidirectionnelles, arbres, HashSet, etc.
- [gostl](https://github.com/liyue201/gostl) - Bibliothèque de structures de données et d'algorithmes pour Go, conçue pour fournir des fonctions similaires à la STL de C++.

### Itérateurs

- [glinq](https://github.com/CreateLab/glinq) - Bibliothèque d'évaluation paresseuse à la LINQ, avec des génériques typés de façon sûre, des optimisations de performances et aucune dépendance.
- [gloop](https://github.com/alvii147/gloop) - Boucles pratiques grâce à la fonctionnalité range-over-func de Go.
- [goterator](https://github.com/yaa110/goterator) - Implémentation d'itérateurs fournissant les fonctionnalités map et reduce.
- [iter](https://github.com/disksing/iter) - Implémentation Go des itérateurs et algorithmes de la STL de C++.

### Maps

Voir aussi [Bases de données](#database) pour des magasins clé-valeur plus complexes, et [Arbres](#trees) pour
d'autres implémentations de maps ordonnées.

- [cmap](https://github.com/lrita/cmap) - une map concurrente thread-safe pour Go, qui permet d'utiliser `interface{}` comme clé et augmente automatiquement le nombre de fragments.
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Une implémentation de table de hachage concurrente générique, haute performance et thread-safe, avec Swiss Map.
- [dict](https://github.com/srfrog/dict) - Dictionnaires à la Python (dict) pour Go.
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - Surcouche générique typée de façon sûre pour `sync.Map`, avec parité complète des méthodes et aucune dépendance.
- [go-shelve](https://github.com/lucmq/go-shelve) - Un objet persistant de type map pour le langage de programmation Go. Prend en charge plusieurs magasins clé-valeur embarqués.
- [goradd/maps](https://github.com/goradd/maps) - Interface de map générique Go 1.18+ pour les maps ; maps sûres ; maps ordonnées ; maps ordonnées et sûres ; etc.
- [hmap](https://github.com/lyonnee/hmap) - HMap est une implémentation de map générique, concurrente et sûre, conçue pour fournir une API facile à utiliser.

### Structures de données et algorithmes divers

- [combo](https://github.com/bobg/combo) - Opérations combinatoires, dont les permutations, les combinaisons et les combinaisons avec remise.
- [concurrent-writer](https://github.com/free/concurrent-writer) - Remplacement direct hautement concurrent de `bufio.Writer`.
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Implémentation Go du sketch Count-Min-Log : comptage approximatif avec des compteurs approximatifs (comme le sketch Count-Min, mais avec moins de mémoire).
- [FSM](https://github.com/enetx/fsm) - Machine à états finis (FSM) pour Go.
- [fsm](https://github.com/cocoonspace/fsm) - Paquet de machine à états finis.
- [genfuncs](https://github.com/nwillc/genfuncs) - Paquet de génériques Go 1.18+ inspiré de Sequence et Map de Kotlin.
- [go-generics](https://github.com/bobg/go-generics) - Utilitaires génériques pour les slices, maps, ensembles, itérateurs et goroutines.
- [go-geoindex](https://github.com/hailocab/go-geoindex) - Index géographique en mémoire.
- [go-rampart](https://github.com/francesconi/go-rampart) - Détermine les relations entre des intervalles.
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - Quadtrees de régions avec localisation efficace des points et recherche des voisins.
- [go-tuple](https://github.com/barweiss/go-tuple) - Implémentation générique des tuples pour Go 1.18+.
- [go18ds](https://github.com/daichi-m/go18ds) - Structures de données Go utilisant les génériques de Go 1.18.
- [gofal](https://github.com/xxjwxc/gofal) - API de fractions pour Go.
- [gogu](https://github.com/esimov/gogu) - Une bibliothèque complète, réutilisable et efficace de fonctions utilitaires et de structures de données génériques sûres en contexte concurrent.
- [gota](https://github.com/kniren/gota) - Implémentation de dataframes, de séries et de méthodes de préparation de données pour Go.
- [hide](https://github.com/emvi/hide) - Type d'identifiant sérialisé vers et depuis un hachage, pour éviter d'envoyer les identifiants aux clients.
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Implémentation d'HyperLogLog avec représentation creuse (Sparse), correction du biais LogLog-Beta et réduction d'espace TailCut.
- [quadtree](https://github.com/s0rg/quadtree) - Quadtree générique, sans allocation et couvert à 100 % par les tests.
- [slices](https://github.com/twharmon/slices) - Fonctions pures et génériques pour les slices.
- [xsync](https://github.com/puzpuzpuz/xsync) - Structures de données concurrentes et évolutives comme `xsync.Map`, une table de hachage générique concurrente.

### Types nullables

- [nan](https://github.com/kak-tus/nan) - Structures nullables sans allocation réunies dans une seule bibliothèque, avec des fonctions de conversion pratiques, des sérialiseurs et des désérialiseurs.
- [null](https://github.com/emvi/null) - Types Go nullables pouvant être sérialisés/désérialisés vers/depuis JSON.
- [typ](https://github.com/gurukami/typ) - Types nuls, conversion sûre de types primitifs et récupération de valeurs dans des structures complexes.

### Files d'attente

- [deheap](https://github.com/aalpar/deheap) - Tas à double extrémité (tas min-max) avec un accès en O(log n) aux éléments minimum et maximum.
- [deque](https://github.com/edwingeng/deque) - Une file à double extrémité hautement optimisée.
- [deque](https://github.com/gammazero/deque) - Deque (file à double extrémité) rapide fondée sur un tampon circulaire.
- [dqueue](https://github.com/vodolaz095/dqueue) - File d'attente différée simple, en mémoire, sans dépendance, éprouvée et thread-safe.
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - File FIFO concurrente.
- [hatchet](https://github.com/hatchet-dev/hatchet) - File de tâches distribuée et tolérante aux pannes.
- [list](https://github.com/koss-null/list) - Une liste doublement chaînée générique et thread-safe, avec prise en charge complète des itérateurs, et une liste simplement chaînée intrusive pour un usage embarqué ; un remplaçant riche en fonctionnalités de container/list.
- [memlog](https://github.com/embano1/memlog) - Une structure de données en mémoire facile à utiliser, légère, thread-safe et en ajout seul, inspirée d'Apache Kafka.
- [queue](https://github.com/adrianbrad/queue) - Plusieurs implémentations de files d'attente génériques et thread-safe pour Go.

### Ensembles

- [dsu](https://github.com/ihebu/dsu) - Implémentation en Go de la structure de données d'ensembles disjoints.
- [golang-set](https://github.com/deckarep/golang-set) - Ensembles haute performance, thread-safe ou non, pour Go.
- [goset](https://github.com/zoumo/goset) - Une implémentation utile de collection d'ensembles pour Go.
- [set](https://github.com/StudioSol/set) - Implémentation simple d'une structure de données d'ensemble en Go à l'aide de LinkedHashMap.

### Analyse de texte

- [bleve](https://github.com/blevesearch/bleve) - Bibliothèque moderne d'indexation de texte pour Go.
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Implémentation Go de l'arbre radix adaptatif (Adaptive Radix Tree).
- [go-edlib](https://github.com/hbollon/go-edlib) - Bibliothèque Go d'algorithmes de comparaison de chaînes et de distance d'édition (Levenshtein, LCS, Hamming, Damerau-Levenshtein, Jaro-Winkler, etc.), compatible avec Unicode.
- [levenshtein](https://github.com/agext/levenshtein) - Distance de Levenshtein et métriques de similarité avec des coûts d'édition personnalisables et un bonus à la Winkler pour les préfixes communs.
- [levenshtein](https://github.com/agnivade/levenshtein) - Implémentation du calcul de la distance de Levenshtein en Go.
- [mspm](https://github.com/BlackRabbitt/mspm) - Algorithme de recherche de motifs multi-chaînes pour la recherche d'information.
- [parsefields](https://github.com/MonaxGT/parsefields) - Outils d'analyse de journaux de type JSON pour collecter des champs et des événements uniques.
- [ptrie](https://github.com/viant/ptrie) - Une implémentation d'arbre préfixe.
- [radixtree](https://github.com/gammazero/radixtree) - Arbre radix adaptatif (arbre préfixe ou trie compact).
- [trie](https://github.com/derekparker/trie) - Implémentation de trie en Go.

### Arbres

- [graphlib](https://github.com/aio-arch/graphlib) - Bibliothèque de tri topologique : tri et élagage de graphes orientés acycliques (DAG).
- [hashsplit](http://github.com/bobg/hashsplit) - Découpe des flux d'octets en blocs et organise ces blocs en arbres, avec des frontières déterminées par le contenu et non par la position.
- [merkle](https://github.com/bobg/merkle) - Calcul économe en espace des hachages racines de Merkle et des preuves d'inclusion.
- [skiplist](https://github.com/MauriceGit/skiplist) - Implémentation Go très rapide de skiplist.
- [skiplist](https://github.com/gansidui/skiplist) - Implémentation de skiplist en Go.
- [skiplist](https://github.com/huandu/skiplist) - Skip list rapide et facile à utiliser pour Go.
- [treemap](https://github.com/igrmk/treemap) - Map générique triée par clé, reposant en interne sur un arbre rouge-noir.

### Tubes

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - Module Go qui traite des tâches de façon concurrente et renvoie les résultats dans un canal, dans l'ordre des entrées.
- [parapipe](https://github.com/nazar256/parapipe) - Pipeline FIFO qui parallélise l'exécution de chaque étape tout en préservant l'ordre des messages et des résultats.
- [pipeline](https://github.com/hyfather/pipeline) - Une implémentation de pipelines avec fan-in et fan-out.
- [pipelines](https://github.com/nxdir-s/pipelines) - Fonctions de pipeline génériques pour le traitement concurrent.

**[⬆ retour en haut](#contents)**

## Bases de données

### Caches

_Magasins de données à enregistrements expirables, magasins de données distribués en mémoire ou sous-ensembles en mémoire de bases de données sur fichiers._

- [bcache](https://github.com/iwanbk/bcache) - Bibliothèque Go de cache distribué en mémoire à cohérence à terme.
- [BigCache](https://github.com/allegro/bigcache) - Cache clé/valeur efficace pour des gigaoctets de données.
- [cache2go](https://github.com/muesli/cache2go) - Cache clé:valeur en mémoire prenant en charge l'invalidation automatique fondée sur des délais d'expiration.
- [cachego](https://github.com/faabiosr/cachego) - Composant de cache Golang pour plusieurs pilotes.
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - BigCache avec prise en charge du clustering et expiration individuelle des éléments.
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - Implémentation complète de l'API de cache Oracle Coherence pour les applications Go, utilisant gRPC comme transport réseau.
- [couchcache](https://github.com/codingsince1985/couchcache) - Microservice de cache RESTful reposant sur le serveur Couchbase.
- [easycache](https://github.com/hugocarreira/easycache) - Un moyen simple d'utiliser un cache en mémoire en Golang (TTL/FIFO/LRU/LFU).
- [EchoVault](https://github.com/EchoVault/EchoVault) - Magasin de données distribué en mémoire et intégrable, compatible avec les clients Redis.
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - cache en mémoire rapide et thread-safe pour un grand nombre d'entrées. Minimise la surcharge du ramasse-miettes.
- [GCache](https://github.com/bluele/gcache) - Bibliothèque de cache prenant en charge les caches expirables, LFU, LRU et ARC.
- [gdcache](https://github.com/ulovecode/gdcache) - Une bibliothèque de cache purement non intrusive implémentée en Golang, que vous pouvez utiliser pour implémenter votre propre cache distribué.
- [go-cache](https://github.com/viney-shih/go-cache) - Une bibliothèque Go de cache multicouche flexible pour gérer les caches en mémoire et partagés, selon le modèle Cache-Aside.
- [go-freelru](https://github.com/elastic/go-freelru) Une bibliothèque de table de hachage LRU générique et rapide, sans ramasse-miettes, avec verrouillage, partitionnement, éviction et expiration optionnels.
- [go-gcache](https://github.com/szyhf/go-gcache) - La version générique de `GCache`, prenant en charge les caches expirables, LFU, LRU et ARC.
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - Bibliothèque rapide de magasin/cache clé:valeur en mémoire. Caches de pointeurs.
- [gocache](https://github.com/eko/gocache) - Une bibliothèque de cache Go complète avec plusieurs magasins (mémoire, memcache, redis...), caches chaînables, chargeables, avec métriques, et plus encore.
- [gocache](https://github.com/yuseferi/gocache) - Une bibliothèque de cache Go exempte d'accès concurrents conflictuels (data races), haute performance et dotée d'une purge automatique
- [groupcache](https://github.com/golang/groupcache) - Groupcache est une bibliothèque de mise en cache et de remplissage de cache, destinée à remplacer memcached dans de nombreux cas.
- [icache](https://github.com/mdaliyan/icache) - Un paquet de cache haute performance, générique, thread-safe et sans dépendance.
- [imcache](https://github.com/erni27/imcache) - Une bibliothèque Go de cache générique en mémoire. Elle prend en charge l'expiration, l'expiration glissante, la limite du nombre d'entrées, les callbacks d'éviction et le partitionnement.
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - Bibliothèque de cache Go unifiée prenant en charge la mise en cache à plusieurs niveaux.
- [nscache](https://github.com/no-src/nscache) - Un framework de mise en cache Go prenant en charge plusieurs pilotes de sources de données.
- [otter](https://github.com/maypok86/otter) - Un cache sans verrou haute performance pour Go. Bien plus rapide que Ristretto et consorts.
- [pocache](https://github.com/naughtygopher/pocache) - Pocache est un paquet de cache minimal axé sur une stratégie de mise en cache optimiste et préemptive.
- [ristretto](https://github.com/dgraph-io/ristretto) - Un cache Go haute performance limité par la mémoire.
- [sturdyc](https://github.com/viccon/sturdyc) - Une bibliothèque de mise en cache dotée de fonctionnalités de concurrence avancées, conçue pour rendre robustes et très performantes les applications intensives en E/S.
- [theine](https://github.com/Yiling-J/theine-go) - Cache en mémoire haute performance, quasi optimal, avec expiration TTL proactive et génériques.
- [timedmap](https://github.com/zekroTJA/timedmap) - Map avec des paires clé-valeur expirables.
- [ttlcache](https://github.com/jellydator/ttlcache) - Un cache en mémoire avec expiration des éléments et génériques.
- [ttlcache](https://github.com/cheshir/ttlcache) - Stockage clé-valeur en mémoire avec un TTL pour chaque enregistrement.

### Bases de données implémentées en Go

- [badger](https://github.com/dgraph-io/badger) - Magasin clé-valeur rapide en Go.
- [bbolt](https://github.com/etcd-io/bbolt) - Une base de données clé/valeur embarquée pour Go.
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask est une base de données clé-valeur (KV) intégrable, persistante et rapide, écrite en Go pur, offrant des performances de lecture/écriture prévisibles, une faible latence et un débit élevé grâce à l'organisation sur disque bitcask (LSM+WAL).
- [buntdb](https://github.com/tidwall/buntdb) - Base de données clé/valeur en mémoire, rapide et intégrable pour Go, avec indexation personnalisée et prise en charge des données spatiales.
- [clover](https://github.com/ostafen/clover) - Une base de données NoSQL orientée documents et légère, écrite en Golang pur.
- [cockroach](https://github.com/cockroachdb/cockroach) - Magasin de données évolutif, géo-répliqué et transactionnel.
- [Coffer](https://github.com/claygod/coffer) - Base de données clé-valeur ACID simple, prenant en charge les transactions.
- [column](https://github.com/kelindar/column) - Magasin en mémoire haute performance, en colonnes et intégrable, avec indexation par bitmap et transactions.
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL est une base de données SQL sur blockchain.
- [Databunker](https://github.com/paranoidguy/databunker) - Service de stockage d'informations personnelles identifiables (PII) conçu pour être conforme au RGPD et au CCPA.
- [dgraph](https://github.com/dgraph-io/dgraph) - Base de données orientée graphes évolutive, distribuée, à faible latence et à haut débit.
- [DiceDB](https://github.com/DiceDB/dice) - Une base de données en mémoire open source, rapide et réactive, optimisée pour le matériel moderne. Son débit plus élevé et ses latences médianes plus faibles la rendent idéale pour les charges de travail modernes.
- [diskv](https://github.com/peterbourgon/diskv) - Magasin clé-valeur maison stocké sur disque.
- [dolt](https://github.com/dolthub/dolt) - Dolt – Git pour les données.
- [eliasdb](https://github.com/krotik/eliasdb) - Base de données orientée graphes transactionnelle et sans dépendance, avec API REST, recherche de phrases et langage de requête de type SQL.
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - Base de données embarquée de type MongoDB, écrite en Go pur. Prend en charge l'indexation et les requêtes complexes.
- [go-sqlite](https://github.com/glebarez/go-sqlite) – Un pilote SQLite implémenté en Golang pur, sans CGO.
- [godis](https://github.com/hdt3213/godis) - Un serveur et un cluster Redis haute performance implémentés en Golang.
- [goleveldb](https://github.com/syndtr/goleveldb) - Implémentation en Go de la base de données clé/valeur [LevelDB](https://github.com/google/leveldb).
- [hare](https://github.com/jameycribbs/hare) - Un système de gestion de bases de données simple qui stocke chaque table dans un fichier texte de JSON délimité par lignes.
- [immudb](https://github.com/codenotary/immudb) - immudb est une base de données immuable, légère et très rapide, pour les systèmes et applications écrits en Go.
- [influxdb](https://github.com/influxdb/influxdb) - Magasin de données évolutif pour les métriques, les événements et l'analytique en temps réel.
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb est une base NoSQL haute performance semblable à Redis, fondée sur LevelDB.
- [levigo](https://github.com/jmhodges/levigo) - Levigo est une surcouche Go pour LevelDB.
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB est une base de données simple de moins de 1000 lignes de code, conçue pour l'apprentissage.
- [LinDB](https://github.com/lindb/lindb) - LinDB est une base de données de séries temporelles distribuée, évolutive, haute performance et à haute disponibilité.
- [lotusdb](https://github.com/flower-corp/lotusdb) - Base de données clé/valeur rapide compatible avec LSM et B+tree.
- [lynxdb](https://github.com/lynxbase/lynxdb) - Base de données légère en colonnes pour l'analyse de journaux, avec un langage de requête à base de pipes inspiré de SPL.
- [MemHop](https://github.com/qyiun666/MemHop) - Base de données embarquée de mémoire cognitive pour agents IA. Architecture à six couches (L0-L5), pipeline de consolidation Dream, récupération RRF à trois canaux (BM25 + vecteur f16 + entité), fichier .meh unique, Go pur, aucune infrastructure.
- [Milvus](https://github.com/milvus-io/milvus) - Milvus est une base de données vectorielle pour la gestion, l'analyse et la recherche d'embeddings.
- [minisql](https://github.com/RichardKnop/minisql) - Base de données SQL embarquée en un seul fichier.
- [moss](https://github.com/couchbase/moss) - Moss est un moteur de stockage clé-valeur LSM simple, écrit à 100 % en Go.
- [nanotdb](https://github.com/aymanhs/nanotdb) - Une base de données de séries temporelles et un tableau de bord légers, sans dépendance et en ajout seul, optimisés pour le matériel à faible consommation.
- [NoKV](https://github.com/feichai0017/NoKV) - Service de métadonnées natif pour les systèmes de fichiers distribués, le stockage objet et les charges de travail sur les jeux de données d'IA.
- [NornicDB](https://github.com/orneryd/NornicDB) - Base de données graphe + vectorielle haute performance (compatible Neo4j et qDrant), axée sur la récupération graph-RAG à faible latence pour les systèmes d'IA.
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb est un magasin clé/valeur simple, rapide, intégrable et persistant, écrit en Go pur. Il prend en charge les transactions entièrement sérialisables et de nombreuses structures de données telles que les listes, les ensembles et les ensembles triés.
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Base de données objet embarquée haute performance (NoSQL) avec une API Go.
- [pebble](https://github.com/cockroachdb/pebble) - Base de données clé-valeur en Go inspirée de RocksDB/LevelDB.
- [piladb](https://github.com/fern4lvarez/piladb) - Moteur de base de données RESTful léger fondé sur des structures de données en pile.
- [pogreb](https://github.com/akrylysov/pogreb) - Magasin clé-valeur embarqué pour les charges de travail à forte proportion de lectures.
- [prometheus](https://github.com/prometheus/prometheus) - Système de surveillance et base de données de séries temporelles.
- [pudge](https://github.com/recoilme/pudge) - Magasin clé/valeur rapide et simple, écrit avec la bibliothèque standard de Go.
- [redka](https://github.com/nalgeon/redka) - Redis réimplémenté avec SQLite.
- [rosedb](https://github.com/roseduan/rosedb) - Une base de données clé-valeur embarquée fondée sur LSM+WAL, prenant en charge les types string, list, hash, set et zset.
- [rotom](https://github.com/xgzlucario/rotom) - Un tout petit serveur Redis construit en Golang, compatible avec les protocoles RESP.
- [rqlite](https://github.com/rqlite/rqlite) - La base de données relationnelle légère et distribuée construite sur SQLite.
- [tempdb](https://github.com/rafaeljesus/tempdb) - Magasin clé-valeur pour les éléments temporaires.
- [tidb](https://github.com/pingcap/tidb) - TiDB est une base de données SQL distribuée. Inspirée de la conception de Google F1.
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Votre base de données NoSQL propulsée par Golang.
- [unitdb](https://github.com/unit-io/unitdb) - Base de données de séries temporelles rapide pour l'IoT et les applications de messagerie en temps réel. Accédez à unitdb en pub/sub via TCP ou WebSocket à l'aide de l'application github.com/unit-io/unitd.
- [Vasto](https://github.com/chrislusf/vasto) - Un magasin clé-valeur distribué haute performance. Sur disque. Cohérence à terme. Haute disponibilité. Peut s'agrandir ou se réduire sans interruption de service.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - base de données de séries temporelles open source rapide, économe en ressources et évolutive. Peut servir de stockage distant à long terme pour Prometheus. Prend en charge PromQL.
- 
### Migration de schémas de bases de données

- [atlas](https://github.com/ariga/atlas) - Une boîte à outils pour bases de données. Une CLI conçue pour aider les entreprises à mieux travailler avec leurs données.
- [avro](https://github.com/khezen/avro) - Découvrez des schémas SQL et convertissez-les en schémas AVRO. Interrogez des enregistrements SQL sous forme d'octets AVRO.
- [bytebase](https://github.com/bytebase/bytebase) - Modification sûre des schémas de bases de données et gestion de versions pour les équipes DevOps.
- [darwin](https://github.com/GuiaBolso/darwin) - Bibliothèque d'évolution des schémas de bases de données pour Go.
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - CLI pour les migrations versionnées de schémas de bases de données, prenant en charge PostgreSQL, MySQL, ClickHouse, Tarantool et Apache Iceberg.
- [dbmate](https://github.com/amacneil/dbmate) - Un outil de migration de bases de données léger et indépendant de tout framework.
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Fixtures à la Django pour l'excellente bibliothèque intégrée database/sql de Golang.
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - Paquet adapté à la CLI pour la gestion des migrations go-pg.
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - Un paquet Go pour faciliter l'écriture de migrations avec go-pg/pg.
- [goavro](https://github.com/linkedin/goavro) - Un paquet Go qui encode et décode des données Avro.
- [godfish](https://github.com/rafaelespinoza/godfish) - Gestionnaire de migrations de bases de données, fonctionnant avec le langage de requête natif. Prend en charge cassandra, mysql, postgres et sqlite3.
- [goose](https://github.com/pressly/goose) - Outil de migration de bases de données. Vous pouvez gérer l'évolution de votre base de données en créant des scripts SQL ou Go incrémentaux.
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Outil simple d'alimentation initiale (seeder) de bases de données pour l'ORM Gorm.
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Assistant de migration de schémas de bases de données pour l'ORM Gorm.
- [libschema](https://github.com/muir/libschema) - Définissez vos migrations séparément dans chaque bibliothèque. Migrations pour les bibliothèques open source. MySQL et PostgreSQL.
- [migrate](https://github.com/golang-migrate/migrate) - Migrations de bases de données. CLI et bibliothèque Golang.
- [migrator](https://github.com/lopezator/migrator) - Bibliothèque de migration de bases de données Go d'une simplicité enfantine.
- [migrator](https://github.com/larapulse/migrator) - Outil de migration de bases de données MySQL conçu pour exécuter les migrations liées à vos fonctionnalités et gérer les mises à jour de schéma avec du code Go intuitif.
- [schema](https://github.com/adlio/schema) - Bibliothèque pour intégrer dans vos binaires Go des migrations de schéma pour les bases de données compatibles avec database/sql.
- [skeema](https://github.com/skeema/skeema) - Système de gestion de schémas en SQL pur pour MySQL, avec prise en charge du sharding et des outils externes de modification de schéma en ligne.
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - Migration et création de bases de données, ORM, etc. pour MySQL, PostgreSQL et SQLite.
- [sql-migrate](https://github.com/rubenv/sql-migrate) - Outil de migration de bases de données. Permet d'intégrer les migrations dans l'application à l'aide de go-bindata.
- [sqlize](https://github.com/sunary/sqlize) - Générateur de migrations de bases de données. Permet de générer une migration SQL à partir du modèle et du SQL existant en calculant leurs différences.

### Outils de bases de données

- [chproxy](https://github.com/Vertamedia/chproxy) - Proxy HTTP pour la base de données ClickHouse.
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - Regroupe les petites insertions et envoie de grosses requêtes aux serveurs ClickHouse.
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - Analyseur du dialecte SQL de ClickHouse qui produit un AST typé, avec des fonctions utilitaires de parcours, un formatage aller-retour et une CLI.
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - Exécution de SQL en production avec ACL, journaux et liens partagés.
- [dbbench](https://github.com/sj14/dbbench) - Outil de benchmark de bases de données prenant en charge plusieurs bases et scripts.
- [dg](https://github.com/codingconcepts/dg) - Un générateur de données rapide qui produit des fichiers CSV à partir de données relationnelles générées.
- [filesql](https://github.com/nao1215/filesql) - Interrogez en SQL des fichiers CSV, TSV, LTSV, JSON, JSONL, Parquet, Excel, ACH et Fedwire via l'API database/sql, en s'appuyant sur SQLite en mémoire.
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - Passerelle de bases de données cloud native et framework pour créer des applications pilotées par les données. Comme les passerelles d'API, mais pour les bases de données.
- [go-mysql](https://github.com/siddontang/go-mysql) - Ensemble d'outils Go pour gérer le protocole et la réplication MySQL.
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - Sauvegardes PostgreSQL sans serveur vers S3 avec AWS Lambda, avec rotation quotidienne, mensuelle et annuelle.
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - Prise en charge du multi-tenant pour les bases de données gérées par GORM.
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - Analyseur, formateur, linter et scanner de sécurité SQL haute performance, avec prise en charge de plusieurs dialectes et un bac à sable WASM.
- [hasql](https://golang.yandex/hasql) - Bibliothèque pour accéder à des installations de bases de données SQL multi-hôtes.
- [octillery](https://github.com/knocknote/octillery) - Paquet Go pour le sharding de bases de données (prend en charge tous les ORM ou le SQL brut).
- [onedump](https://github.com/liweiyi88/onedump) - Sauvegarde de bases de données depuis différents pilotes vers différentes destinations, avec une seule commande et une seule configuration.
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Planification avancée pour PostgreSQL.
- [pgrwl](https://github.com/pgrwl/pgrwl) - Sauvegarde continue cloud native pour PostgreSQL.
- [pgwd](https://github.com/hrodrig/pgwd) - CLI qui surveille le nombre de connexions PostgreSQL (totales, actives, inactives, obsolètes) et envoie des notifications via Slack et/ou Loki lorsque des seuils sont dépassés. Prend en charge Kubernetes (kubectl port-forward) et un contexte d'exécution optionnel dans les notifications.
- [pgweb](https://github.com/sosedoff/pgweb) - Navigateur web de bases de données PostgreSQL.
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Client CLI PostgreSQL écrit en Go, inspiré de pgcli.
- [prep](https://github.com/hexdigest/prep) - Utilisez des requêtes SQL préparées sans modifier votre code.
- [pREST](https://github.com/prest/prest) - Simplifiez et accélérez le développement ⚡ de façon instantanée, en temps réel et haute performance, sur toute application Postgres, existante ou nouvelle.
- [rdb](https://github.com/HDT3213/rdb) - Analyseur de fichiers RDB de Redis pour le développement secondaire et l'analyse de la mémoire.
- [rwdb](https://github.com/andizzle/rwdb) - rwdb fournit des réplicas en lecture pour les configurations à plusieurs serveurs de bases de données.
- [sqly](https://github.com/nao1215/sqly) - Exécutez du SQL sur des fichiers CSV, TSV, LTSV, JSON, Parquet et Excel dans un shell interactif, en s'appuyant sur SQLite en mémoire.
- [vitess](https://github.com/youtube/vitess) - vitess fournit des serveurs et des outils qui facilitent la mise à l'échelle des bases de données MySQL pour les services web à grande échelle.
- [wescale](https://github.com/wesql/wescale) - WeScale est un proxy de bases de données conçu pour améliorer l'évolutivité, les performances, la sécurité et la résilience de vos applications.
- [xsql](https://github.com/zx06/xsql) - Outil CLI multi-bases de données pensé d'abord pour l'IA, avec protection en lecture seule et sortie JSON structurée.

### Constructeurs de requêtes SQL

_Bibliothèques pour construire et utiliser du SQL._

- [bqb](https://github.com/nullism/bqb) - Constructeur de requêtes léger et facile à apprendre.
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - Bibliothèque Go de construction de requêtes pour PostgreSQL.
- [builq](https://github.com/cristalhq/builq) - Construisez facilement des requêtes SQL en Go.
- [dba](https://github.com/kran/dba) - Constructeur de requêtes pour le SQL écrit à la main, ajoutant des conditions dynamiques, des espaces réservés adaptés au dialecte et un chaînage immuable.
- [dbq](https://github.com/rocketlaunchr/dbq) - Opérations de bases de données sans code répétitif pour Go.
- [Dotsql](https://github.com/gchaincl/dotsql) - Bibliothèque Go qui vous aide à garder vos fichiers SQL au même endroit et à les utiliser facilement.
- [gendry](https://github.com/didi/gendry) - Constructeur SQL non invasif et puissant outil de liaison de données.
- [godbal](https://github.com/xujiajun/godbal) - Couche d'abstraction de bases de données (dbal) pour Go. Prend en charge la construction de requêtes SQL et la récupération facile des résultats.
- [goqu](https://github.com/doug-martin/goqu) - Constructeur SQL et bibliothèque de requêtes idiomatiques.
- [gosql](https://github.com/twharmon/gosql) - Constructeur de requêtes SQL avec une meilleure prise en charge des valeurs nulles.
- [Hotcoal](https://github.com/motrboat/hotcoal) - Protégez votre SQL écrit à la main contre les injections.
- [igor](https://github.com/galeone/igor) - Couche d'abstraction pour PostgreSQL qui prend en charge des fonctionnalités avancées et utilise une syntaxe proche de gorm.
- [jet](https://github.com/go-jet/jet) - Framework pour écrire des requêtes SQL typées de façon sûre en Go, avec la possibilité de convertir facilement le résultat d'une requête en n'importe quelle structure d'objets souhaitée.
- [obreron](https://github.com/profe-ajedrez/obreron) - Constructeur SQL rapide et économique qui ne fait qu'une chose : construire du SQL.
- [ormlite](https://github.com/pupizoid/ormlite) - Paquet léger contenant quelques fonctionnalités de type ORM et des fonctions utilitaires pour les bases de données SQLite.
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - Méthodes puissantes de récupération de données et capacités de construction de requêtes indépendantes de la base de données.
- [patcher](https://github.com/Jacobbrewer1/patcher) - Puissant constructeur de requêtes SQL qui génère automatiquement des requêtes SQL à partir de structures.
- [qrafter](https://github.com/SennovE/qrafter) - Constructeur de requêtes SQL typé de façon sûre, avec un rendu adapté au dialecte, l'introspection de schéma et la génération de migrations.
- [qry](https://github.com/HnH/qry) - Outil qui génère des constantes à partir de fichiers contenant des requêtes SQL brutes.
- [relica](https://github.com/coregx/relica) - Constructeur de requêtes de bases de données typé de façon sûre, sans aucune dépendance en production, avec cache LRU des requêtes préparées, opérations par lots et prise en charge des JOIN, sous-requêtes, CTE et fonctions de fenêtrage.
- [sg](https://github.com/go-the-way/sg) - Un générateur SQL écrit en Go pour produire des requêtes SQL standard (prend en charge le CRUD).
- [sq](https://github.com/bokwoon95/go-structured-query) - Constructeur SQL typé de façon sûre et mappeur de structures pour Go.
- [sqlc](https://github.com/kyleconroy/sqlc) - Génère du code typé de façon sûre à partir de SQL.
- [sqlcredo](https://github.com/Klojer/sqlcredo) - Paquet d'opérations CRUD SQL génériques et typées de façon sûre, avec pagination, transactions, débogage et extensions SQL brutes personnalisées.
- [sqlf](https://github.com/leporo/sqlf) - Constructeur de requêtes SQL rapide.
- [sqlh](https://github.com/kirill-scherba/sqlh) - Assistant SQL sans code répétitif, avec balises de structures et génériques Go (CRUD, UPSERT, JOIN, benchmarks).
- [sqlingo](https://github.com/lqs/sqlingo) - Un DSL léger pour construire du SQL en Go.
- [sqrl](https://github.com/elgris/sqrl) - Constructeur de requêtes SQL, fork de Squirrel aux performances améliorées.
- [Squalus](https://gitlab.com/qosenergy/squalus) - Fine couche au-dessus du paquet SQL de Go qui facilite l'exécution de requêtes.
- [Squirrel](https://github.com/Masterminds/squirrel) - Bibliothèque Go qui vous aide à construire des requêtes SQL.
- [xo](https://github.com/knq/xo) - Génère du code Go idiomatique pour les bases de données à partir de définitions de schémas existantes ou de requêtes personnalisées, avec prise en charge de PostgreSQL, MySQL, SQLite, Oracle et Microsoft SQL Server.

**[⬆ retour en haut](#contents)**

## Pilotes de bases de données

### Interfaces vers plusieurs backends

- [cayley](https://github.com/google/cayley) - Base de données orientée graphes prenant en charge plusieurs backends.
- [dsc](https://github.com/viant/dsc) - Connectivité aux magasins de données pour SQL, NoSQL et fichiers structurés.
- [dynamo](https://github.com/fogfish/dynamo) - Une abstraction clé-valeur simple pour stocker des types de données algébriques et de données liées dans les services de stockage AWS : AWS DynamoDB et AWS S3.
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - Gestionnaire de transactions avec plusieurs adaptateurs (sql, sqlx, gorm, mongo...) qui contrôle les limites des transactions.
- [gokv](https://github.com/philippgille/gokv) - Abstraction simple de magasin clé-valeur et implémentations pour Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB et bien d'autres).
- [transactor](https://github.com/metalfm/transactor) - Abstraction typée de façon sûre des limites de transactions, avec des adaptateurs pour database/sql, sqlx et pgx.

### Pilotes de bases de données relationnelles

- [avatica](https://github.com/apache/calcite-avatica-go) - Pilote SQL Apache Avatica/Phoenix pour database/sql.
- [bgc](https://github.com/viant/bgc) - Connectivité au magasin de données BigQuery pour Go.
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Pilote SQL pour le SGBDR Firebird en Go.
- [go-adodb](https://github.com/mattn/go-adodb) - Pilote Microsoft ActiveX Object DataBase pour Go, utilisant database/sql.
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Pilote Microsoft MSSQL pour Go.
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Pilote Go officiel de Microsoft pour SQL Server, Azure SQL, Azure Synapse, SQL database dans Fabric et Fabric Data Warehouse. Prend en charge Azure AD, Always Encrypted et les opérations en bloc.
- [go-oci8](https://github.com/mattn/go-oci8) - Pilote Oracle pour Go, utilisant database/sql.
- [go-rqlite](https://github.com/rqlite/gorqlite) - Un client Go pour rqlite, fournissant des abstractions faciles à utiliser pour travailler avec l'API rqlite.
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Pilote MySQL pour Go.
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - Pilote SQLite3 pour Go, utilisant database/sql.
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - Ce module Go est compatible avec le pilote database/sql. Il permet d'intégrer SQLite à votre application, offre un accès direct à son API C, prend en charge le VFS de SQLite et inclut également un pilote GORM.
- [godror](https://github.com/godror/godror) - Pilote Oracle pour Go, utilisant le pilote ODPI-C.
- [gofreetds](https://github.com/minus5/gofreetds) - Pilote Microsoft MSSQL. Surcouche Go de [FreeTDS](https://www.freetds.org).
- [KSQL](https://github.com/VinGarcia/ksql) - Une bibliothèque SQL Golang simple et puissante.
- [pgx](https://github.com/jackc/pgx) - Pilote PostgreSQL prenant en charge des fonctionnalités allant au-delà de celles exposées par database/sql.
- [pig](https://github.com/alexeyco/pig) - Surcouche simple de [pgx](https://github.com/jackc/pgx) pour exécuter des requêtes et [scanner](https://github.com/georgysavva/scany) facilement leurs résultats.
- [pq](https://github.com/lib/pq) - Pilote Postgres en Go pur pour database/sql.
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - SQLite en Go pur.
- [sqlhooks](https://github.com/qustavo/sqlhooks) - Attachez des hooks à n'importe quel pilote database/sql.
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - Le paquet sqlite est un pilote sql/database utilisant un portage sans CGo de la bibliothèque C SQLite3.
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Pilote SurrealDB pour Go.
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - pilote natif et database/sql pour YDB (Yandex Database).

### Pilotes de bases de données NoSQL

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Client Aerospike en langage Go.
- [arangolite](https://github.com/solher/arangolite) - Pilote Golang léger pour ArangoDB.
- [asc](https://github.com/viant/asc) - Connectivité au magasin de données Aerospike pour Go.
- [forestdb](https://github.com/couchbase/goforestdb) - Liaisons Go pour ForestDB.
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Client Couchbase en Go.
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - Une bibliothèque Mongo pour Go fondée sur le pilote officiel, offrant des opérations simplifiées sur les documents, une liaison générique des structures aux collections, du CRUD intégré, l'agrégation, la mise à jour automatique des champs, la validation des structures, des hooks et une programmation à base de plugins.
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Bibliothèque cliente Go pour Pilosa.
- [go-rejson](https://github.com/nitishm/go-rejson) - Client Golang pour le module ReJSON de redislabs, utilisant le client Golang Redigo. Stockez et manipulez facilement des structures sous forme d'objets JSON dans Redis.
- [gocb](https://github.com/couchbase/gocb) - SDK Go officiel de Couchbase.
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Client REST et pilote `database/sql` standard pour Azure Cosmos DB.
- [gocql](https://gocql.github.io) - Pilote en langage Go pour Apache Cassandra.
- [godis](https://github.com/piaohao/godis) - client Redis implémenté en Golang, inspiré de jedis.
- [godscache](https://github.com/defcronyke/godscache) - Une surcouche du paquet Go Datastore de Google Cloud Platform qui ajoute la mise en cache via memcached.
- [gomemcache](https://github.com/bradfitz/gomemcache/) - bibliothèque cliente memcache pour le langage de programmation Go.
- [gomemcached](https://github.com/aliexpressru/gomemcached) - Un client Memcached binaire pour Go, prenant en charge le sharding par hachage cohérent ainsi que SASL.
- [gorethink](https://github.com/dancannon/gorethink) - Pilote en langage Go pour RethinkDB.
- [goriak](https://github.com/zegl/goriak) - Pilote en langage Go pour Riak KV.
- [Kivik](https://github.com/go-kivik/kivik) - Kivik fournit une bibliothèque cliente commune Go et GopherJS pour CouchDB, PouchDB et les bases de données similaires.
- [mgm](https://github.com/kamva/mgm) - ODM pour MongoDB fondé sur des modèles, pour Go (basé sur le pilote MongoDB officiel).
- [mgo](https://github.com/globalsign/mgo) - (non maintenu) Pilote MongoDB pour le langage Go qui implémente un ensemble riche et bien testé de fonctionnalités derrière une API très simple suivant les idiomes standard de Go.
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Pilote MongoDB officiel pour le langage Go.
- [neo4j](https://github.com/cihangir/neo4j) - Liaisons de l'API REST de Neo4j pour Golang.
- [neoism](https://github.com/jmcvetta/neoism) - Client Neo4j pour Golang.
- [qmgo](https://github.com/qiniu/qmgo) - Le pilote MongoDB pour Go. Il est fondé sur le pilote MongoDB officiel, mais plus facile à utiliser, comme Mgo.
- [redeo](https://github.com/bsm/redeo) - Serveurs/services TCP compatibles avec le protocole Redis.
- [redigo](https://github.com/gomodule/redigo) - Redigo est un client Go pour la base de données Redis.
- [redis](https://github.com/redis/go-redis) - Client Redis pour Golang.
- [rueidis](http://github.com/rueian/rueidis) - Client Redis RESP3 rapide avec pipelining automatique et mise en cache côté client assistée par le serveur.
- [xredis](https://github.com/shomali11/xredis) - Client Redis typé de façon sûre, personnalisable, propre et facile à utiliser.

### Bases de données de recherche et d'analyse

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - Client SQL ClickHouse pour Go, compatible avec `database/sql`.
- [effdsl](https://github.com/sdqri/effdsl) - Constructeur de requêtes Elasticsearch pour Go.
- [elastic](https://github.com/olivere/elastic) - Client Elasticsearch pour Go.
- [elasticsql](https://github.com/cch123/elasticsql) - Convertit du SQL en DSL Elasticsearch, en Go.
- [elastigo](https://github.com/mattbaird/elastigo) - Bibliothèque cliente Elasticsearch.
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Client Elasticsearch officiel pour Go.
- [goes](https://github.com/OwnLocal/goes) - Bibliothèque pour interagir avec Elasticsearch.
- [skizze](https://github.com/skizzehq/skizze) - Un service et un stockage de structures de données probabilistes.
- [zoekt](https://github.com/sourcegraph/zoekt) - Recherche de code rapide fondée sur les trigrammes.

**[⬆ retour en haut](#contents)**

## Date et heure

_Bibliothèques pour travailler avec les dates et les heures._

- [approx](https://github.com/goschtalt/approx) - Une extension de Duration permettant d'analyser et d'afficher des durées en jours, semaines et années.
- [carbon](https://github.com/dromara/carbon) - Un paquet temporel simple, sémantique et pratique pour les développeurs Golang.
- [carbon](https://github.com/uniplaces/carbon) - Extension simple de Time avec de nombreuses méthodes utilitaires, portée depuis la bibliothèque PHP Carbon.
- [cronrange](https://github.com/1set/cronrange) - Analyse des expressions de plages horaires de style Cron et vérifie si une heure donnée se trouve dans l'une des plages.
- [date](https://github.com/rickb777/date) - Enrichit Time pour travailler avec des dates, des plages de dates, des intervalles de temps, des périodes et des heures de la journée.
- [dateparse](https://github.com/araddon/dateparse) - Analysez des dates sans connaître leur format à l'avance.
- [durafmt](https://github.com/hako/durafmt) - Bibliothèque de formatage de durées pour Go.
- [feiertage](https://github.com/wlbr/feiertage) - Ensemble de fonctions pour calculer les jours fériés en Allemagne, y compris les spécificités des Länder (Bundesländer). Par exemple Pâques, la Pentecôte, la fête d'action de grâce...
- [go-anytime](https://github.com/ijt/go-anytime) - Analyse des dates/heures comme « next dec 22nd at 3pm » et des plages comme « from today until next thursday » sans connaître le format à l'avance.
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - Une bibliothèque complète d'utilitaires de dates pour Go, inspirée de date-fns, avec plus de 140 fonctions pures et immuables.
- [go-datebin](https://github.com/deatil/go-datebin) - Un paquet simple d'analyse de dates et d'heures.
- [go-faketime](https://github.com/harkaitz/go-faketime) - Un `time.Now()` simple qui respecte l'utilitaire faketime(1).
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - L'implémentation du calendrier persan (hégirien solaire) en Go (golang).
- [go-str2duration](https://github.com/xhit/go-str2duration) - Convertit une chaîne en durée. Prend en charge les chaînes renvoyées par time.Duration, et plus encore.
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - Calcule les heures de lever et de coucher du soleil pour un lieu donné.
- [go-week](https://github.com/stoewer/go-week) - Un paquet efficace pour travailler avec les dates de semaine ISO8601.
- [gostradamus](https://github.com/bykof/gostradamus) - Un paquet Go pour travailler avec des dates.
- [iso8601](https://github.com/relvacode/iso8601) - Analyse efficacement les dates-heures ISO8601 sans expressions régulières.
- [kair](https://github.com/GuilhermeCaruso/kair) - Date et heure - Bibliothèque de formatage pour Golang.
- [now](https://github.com/jinzhu/now) - Now est une boîte à outils temporelle pour Golang.
- [strftime](https://github.com/awoodbeck/strftime) - Formateur strftime compatible C99.
- [timespan](https://github.com/SaidinWoT/timespan) - Pour manipuler des intervalles de temps, définis par une heure de début et une durée.
- [timeutil](https://github.com/leekchan/timeutil) - Extensions utiles (Timedelta, Strftime...) du paquet time de Golang.
- [tuesday](https://github.com/osteele/tuesday) - Fonction Strftime compatible avec Ruby.

**[⬆ retour en haut](#contents)**

## Systèmes distribués

_Paquets facilitant la création de systèmes distribués._

- [arpc](https://github.com/lesismal/arpc) - Communication réseau plus efficace, prenant en charge les appels bidirectionnels, les notifications et la diffusion.
- [bedrock](https://github.com/z5labs/bedrock) - Fournit une base minimale, modulaire et composable pour développer rapidement des services et des frameworks plus spécifiques à certains cas d'usage en Go.
- [capillaries](https://github.com/capillariesio/capillaries) - framework distribué de traitement de données par lots.
- [circuit](https://github.com/schigh/circuit) - Disjoncteur (circuit breaker) avec rétablissement progressif par limitation probabiliste.
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Bibliothèque haute performance du patron Commande distribué pour Go.
- [committer](https://github.com/vadiminshakov/committer) - Un système de gestion de transactions distribuées (implémentation 2PC/3PC).
- [consistent](https://github.com/buraksezer/consistent) - Hachage cohérent à charges bornées.
- [consistenthash](https://github.com/mbrostami/consistenthash) - Hachage cohérent avec réplicas configurables.
- [dht](https://github.com/anacrolix/dht) - Implémentation de la DHT Kademlia de BitTorrent.
- [digota](https://github.com/digota/digota) - microservice de commerce électronique en gRPC.
- [dot](https://github.com/dotchain/dot/) - synchronisation distribuée par transformation opérationnelle (OT).
- [doublejump](https://github.com/edwingeng/doublejump) - Une version remaniée du jump consistent hash de Google.
- [dragonboat](https://github.com/lni/dragonboat) - Une bibliothèque Raft multi-groupes complète et haute performance en Go.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Offre une distribution de fichiers et une accélération d'images efficaces, stables et sécurisées, fondées sur la technologie P2P, pour devenir la meilleure pratique et la solution standard des architectures cloud native.
- [drmaa](https://github.com/dgruber/drmaa) - Bibliothèque de soumission de tâches pour les ordonnanceurs de clusters, fondée sur la norme DRMAA.
- [dynamolock](https://cirello.io/dynamolock) - Implémentation de verrous distribués reposant sur DynamoDB.
- [dynatomic](https://github.com/tylfin/dynatomic) - Une bibliothèque pour utiliser DynamoDB comme compteur atomique.
- [emitter-io](https://github.com/emitter-io/emitter) - Plateforme de publication-abonnement haute performance, distribuée, sécurisée et à faible latence, construite avec MQTT, les WebSockets et beaucoup d'amour.
- [evans](https://github.com/ktr0731/evans) - Evans : un client gRPC universel plus expressif.
- [failured](https://github.com/andy2046/failured) - détecteur de pannes adaptatif à accumulation (accrual) pour les systèmes distribués.
- [flowgraph](https://github.com/vectaport/flowgraph) - paquet de programmation par flux (flow-based programming).
- [gleam](https://github.com/chrislusf/gleam) - Système map/reduce distribué, rapide et évolutif, écrit en Go pur et en LuaJIT, alliant la forte concurrence de Go aux hautes performances de LuaJIT ; fonctionne en mode autonome ou distribué.
- [glow](https://github.com/chrislusf/glow) - Traitement de big data distribué, évolutif et facile à utiliser, Map-Reduce, exécution de DAG, le tout en Go pur.
- [gmsec](https://github.com/gmsec/micro) - Un framework Go de développement de systèmes distribués.
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - Un framework de microservices décentralisé fondé sur un protocole gossip et la spécification OpenAPI 3.0. Sa CLI go-doudou intégrée, axée sur le low-code et le développement rapide, peut décupler votre productivité.
- [go-eagle](https://github.com/go-eagle/eagle) - Un framework Go pour les API ou les microservices, avec des outils pratiques de génération de squelettes.
- [go-jump](https://github.com/dgryski/go-jump) - Portage de la fonction de hachage cohérent « Jump » de Google.
- [go-kit](https://github.com/go-kit/kit) - Boîte à outils de microservices prenant en charge la découverte de services, la répartition de charge, les transports interchangeables, le suivi des requêtes, etc.
- [go-micro](https://github.com/micro/go-micro) - Un framework de développement de systèmes distribués.
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - Verrou distribué fondé sur MySQL.
- [go-pdu](https://github.com/pdupub/go-pdu) - Un réseau social décentralisé fondé sur l'identité.
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Une bibliothèque conçue pour permettre de définir des contrôles de santé asynchrones pour les services Golang.
- [go-zero](https://github.com/tal-tech/go-zero) - Un framework web et RPC. Il est né pour garantir la stabilité des sites très fréquentés grâce à une conception résiliente. L'outil goctl intégré améliore grandement la productivité du développement.
- [gorpc](https://github.com/valyala/gorpc) - Bibliothèque RPC simple, rapide et évolutive pour les fortes charges.
- [grpc-go](https://github.com/grpc/grpc-go) - L'implémentation de gRPC en langage Go. RPC fondé sur HTTP/2.
- [health](https://github.com/schigh/health) - Contrôleur de santé pour les services Go, avec prise en charge des sondes Kubernetes.
- [hprose](https://github.com/hprose/hprose-golang) - Bibliothèque RPC très novatrice, qui prend désormais en charge plus de 25 langages.
- [jsonrpc](https://github.com/osamingo/jsonrpc) - Le paquet jsonrpc aide à implémenter JSON-RPC 2.0.
- [jsonrpc](https://github.com/ybbus/jsonrpc) - Implémentation d'un client HTTP JSON-RPC 2.0.
- [K8gb](https://github.com/k8gb-io/k8gb) - Un équilibreur de charge global cloud native pour Kubernetes.
- [Kitex](https://github.com/cloudwego/kitex) - Un framework RPC Golang haute performance et très extensible qui aide les développeurs à créer des microservices. Si les performances et l'extensibilité sont vos principales préoccupations lorsque vous développez des microservices, Kitex peut être un bon choix.
- [Kratos](https://github.com/go-kratos/kratos) - Un framework de microservices modulaire et facile à utiliser en Go.
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - Flux de messages légers et tolérants aux pannes pour NATS.
- [lock](https://github.com/ubgo/lock) - Famille de verrous distribués avec une seule interface Go et cinq backends (filelock, flock, Redis, Postgres, etcd) : jetons de clôture (fencing tokens), mode sémaphore et hooks d'observabilité sur tous les backends.
- [lura](https://github.com/luraproject/lura) - Framework de passerelle d'API ultra-performant, avec middlewares.
- [mochi mqtt](https://github.com/mochi-co/mqtt) - Broker MQTT v5/v3 intégrable et haute performance, entièrement conforme à la spécification, pour l'IoT, la maison connectée et le pub/sub.
- [NATS](https://github.com/nats-io/nats-server) - NATS est un système de communication simple, sécurisé et performant pour les systèmes, services et appareils numériques.
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Instrumentation OpenTelemetry à la compilation pour Golang.
- [oras](https://github.com/oras-project/oras) - CLI et bibliothèque pour les artefacts OCI dans les registres de conteneurs.
- [outbox](https://github.com/oagudo/outbox) - Bibliothèque légère pour le patron transactional outbox en Go, non liée à une base de données relationnelle ou à un broker particulier.
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer est une bibliothèque Go qui implémente le patron outbox.
- [pglock](https://cirello.io/pglock) - Implémentation de verrous distribués reposant sur PostgreSQL.
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Serveur et client JSON-RPC Golang avec spécification Protobuf.
- [raft](https://github.com/hashicorp/raft) - Implémentation Golang du protocole de consensus Raft, par HashiCorp.
- [raft](https://github.com/etcd-io/raft) - Implémentation Go du protocole de consensus Raft, par CoreOS.
- [rain](https://github.com/cenkalti/rain) - Client et bibliothèque BitTorrent.
- [redis-lock](https://github.com/bsm/redislock) - Implémentation simplifiée de verrous distribués à l'aide de Redis.
- [resgate](https://resgate.io/) - Passerelle d'API temps réel pour créer des API REST, temps réel et RPC, où tous les clients sont synchronisés de manière transparente.
- [rpcplatform](https://github.com/nexcode/rpcplatform) - Framework de microservices avec découverte de services, répartition de charge et fonctionnalités associées.
- [rpcx](https://github.com/smallnest/rpcx) - Framework de services RPC distribué et modulaire, comme Dubbo d'Alibaba.
- [Semaphore](https://github.com/jexia/semaphore) - Un orchestrateur de (micro)services simple et direct.
- [servicepack](https://github.com/psyb0t/servicepack) - Framework pour exécuter plusieurs services simultanément dans un seul binaire, en local ou répartis sur plusieurs machines.
- [sleuth](https://github.com/ursiform/sleuth) - Bibliothèque de découverte automatique P2P sans maître et de RPC entre services HTTP (à l'aide de [ZeroMQ](https://github.com/zeromq/libzmq)).
- [sponge](https://github.com/zhufuyi/sponge) - Un framework de développement distribué qui intègre la génération automatique de code, les frameworks gin et grpc ainsi que des frameworks de développement de base.
- [Tarmac](https://github.com/tarmac-project/tarmac) - Framework pour écrire des fonctions, des microservices ou des monolithes avec WebAssembly
- [Temporal](https://github.com/temporalio/sdk-go) - Système d'exécution durable pour rendre le code tolérant aux pannes et simple.
- [torrent](https://github.com/anacrolix/torrent) - Paquet client BitTorrent.
- [trpc-go](https://github.com/trpc-group/trpc-go) - L'implémentation en langage Go de tRPC, un framework RPC modulaire et haute performance.

**[⬆ retour en haut](#contents)**

## DNS dynamique

_Outils pour mettre à jour des enregistrements DNS dynamiques._

- [DDNS](https://github.com/skibish/ddns) - Client DDNS personnel utilisant le DNS de Digital Ocean Networking comme backend.
- [dyndns](https://gitlab.com/alcastle/dyndns) - Processus Go d'arrière-plan qui vérifie régulièrement et automatiquement votre adresse IP et met à jour un ou plusieurs enregistrements DNS dynamiques des domaines Google dès que votre adresse change.
- [GoDNS](https://github.com/timothyye/godns) - Un client DNS dynamique écrit en Go, prenant en charge DNSPod et HE.net.

**[⬆ retour en haut](#contents)**

## E-mail

_Bibliothèques et outils pour créer et envoyer des e-mails._

- [chasquid](https://blitiri.com.ar/p/chasquid) - Serveur SMTP écrit en Go.
- [douceur](https://github.com/aymerick/douceur) - Outil d'intégration du CSS en ligne pour vos e-mails HTML.
- [email](https://github.com/jordan-wright/email) - Une bibliothèque d'e-mails robuste et flexible pour Go.
- [email-verifier](https://github.com/AfterShip/email-verifier) - Une bibliothèque Go de vérification d'adresses e-mail sans envoyer aucun e-mail.
- [go-dkim](https://github.com/toorop/go-dkim) - Bibliothèque DKIM pour signer et vérifier des e-mails.
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - Bibliothèque Golang fournissant une représentation canonique des adresses e-mail.
- [go-imap](https://github.com/BrianLeishman/go-imap) - Client IMAP tout compris avec reconnexion automatique, OAuth2, prise en charge d'IDLE et analyse MIME intégrée.
- [go-imap](https://github.com/emersion/go-imap) - Bibliothèque IMAP pour clients et serveurs.
- [go-mail](https://github.com/wneessen/go-mail) - Une bibliothèque Go simple pour envoyer des e-mails en Go.
- [go-message](https://github.com/emersion/go-message) - Bibliothèque de streaming pour l'Internet Message Format et les messages électroniques.
- [go-premailer](https://github.com/vanng822/go-premailer) - Styles en ligne pour les e-mails HTML en Go.
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - Paquet très simple pour envoyer des e-mails avec SMTP Keep Alive et deux délais d'expiration : Connect et Send.
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Client de l'API SpamCheck de Postmark qui évalue un e-mail brut selon les règles de SpamAssassin.
- [Hectane](https://github.com/hectane/hectane) - Client SMTP léger fournissant une API HTTP.
- [hermes](https://github.com/matcornic/hermes) - Paquet Golang qui génère des e-mails HTML propres et responsives.
- [Maddy](https://github.com/foxcpp/maddy) - Serveur de messagerie tout-en-un (SMTP, IMAP, DKIM, DMARC, MTA-STS, DANE)
- [mailchain](https://github.com/mailchain/mailchain) - Envoyez des e-mails chiffrés vers des adresses blockchain ; écrit en Go.
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Bibliothèque Go pour envoyer des e-mails avec l'API Mailgun.
- [MailHog](https://github.com/mailhog/MailHog) - Test d'e-mails et de SMTP avec interface web et API.
- [Mailpit](https://github.com/axllent/mailpit) - Outil de test d'e-mails et de SMTP pour les développeurs.
- [mailx](https://github.com/valord577/mailx) - Mailx est une bibliothèque qui facilite l'envoi d'e-mails via SMTP. C'est une amélioration de la bibliothèque standard Golang `net/smtp`.
- [mox](https://github.com/mjl-/mox) - Serveur de messagerie moderne, complet et sécurisé, pour une messagerie auto-hébergée nécessitant peu de maintenance.
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - Bibliothèque Go de SendGrid pour envoyer des e-mails.
- [smtp](https://github.com/mailhog/smtp) - Machine à états du protocole de serveur SMTP.
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - Faux serveur SMTP léger, configurable et multithread. Imitez n'importe quel comportement SMTP dans votre environnement de test.
- [tickstem/verify](https://github.com/tickstem/verify) - Validez les adresses e-mail avant qu'elles n'atteignent votre base de données : syntaxe, recherche MX, domaines jetables et boîtes de réception génériques (par rôle).
- [truemail-go](https://github.com/truemail-rb/truemail-go) - Validateur/vérificateur d'e-mails configurable pour Golang. Vérifiez les e-mails par expression régulière, DNS, SMTP et plus encore.

**[⬆ retour en haut](#contents)**

## Langages de script intégrables

_Intégrer d'autres langages dans votre code Go._

- [anko](https://github.com/mattn/anko) - Interpréteur scriptable écrit en Go.
- [binder](https://github.com/alexeyco/binder) - Bibliothèque de liaison de Go vers Lua, fondée sur [gopher-lua](https://github.com/yuin/gopher-lua).
- [cel-go](https://github.com/google/cel-go) - Évaluation d'expressions rapide, portable et non Turing-complète, avec typage graduel.
- [ecal](https://github.com/krotik/ecal) - Un langage de script simple et intégrable qui prend en charge le traitement concurrent d'événements.
- [expr](https://github.com/antonmedv/expr) - Moteur d'évaluation d'expressions pour Go : rapide, non Turing-complet, avec typage dynamique et typage statique.
- [FrankenPHP](https://github.com/dunglas/frankenphp) - PHP intégré à Go, avec un gestionnaire `net/http`.
- [gentee](https://github.com/gentee/gentee) - Langage de programmation de script intégrable.
- [gisp](https://github.com/jcla1/gisp) - LISP simple en Go.
- [go-lua](https://github.com/Shopify/go-lua) - Portage de la VM Lua 5.2 en Go pur.
- [go-lua](https://github.com/speedata/go-lua) - VM Lua 5.4 implémentée en Go pur.
- [go-php](https://github.com/deuill/go-php) - Liaisons PHP pour Go.
- [goal](https://codeberg.org/anaseto/goal) - Un langage de script orienté tableaux et intégrable.
- [goja](https://github.com/dop251/goja) - Implémentation d'ECMAScript 5.1(+) en Go.
- [golua](https://github.com/aarzilli/golua) - Liaisons Go pour l'API C de Lua.
- [gopher-lua](https://github.com/yuin/gopher-lua) - VM et compilateur Lua 5.1 écrits en Go.
- [gval](https://github.com/PaesslerAG/gval) - Un langage d'expressions hautement personnalisable écrit en Go.
- [metacall](https://github.com/metacall/core) - Environnement d'exécution polyglotte multiplateforme prenant en charge NodeJS, JavaScript, TypeScript, Python, Ruby, C#, WebAssembly, Java, Cobol et d'autres.
- [ngaro](https://github.com/db47h/ngaro) - Implémentation intégrable de la VM Ngaro permettant l'écriture de scripts en Retro.
- [prolog](https://github.com/ichiban/prolog) - Prolog intégrable.
- [purl](https://github.com/ian-kent/purl) - Perl 5.18.2 intégré à Go.
- [starlark-go](https://github.com/google/starlark-go) - Implémentation Go de Starlark : un langage proche de Python avec une évaluation déterministe et une exécution hermétique.
- [starlet](https://github.com/1set/starlet) - Surcouche Go de [starlark-go](https://github.com/google/starlark-go) qui simplifie l'exécution de scripts et offre la conversion de données ainsi que des bibliothèques et extensions Starlark utiles.
- [tengo](https://github.com/d5/tengo) - Langage de script compilé en bytecode pour Go.
- [Wa/凹语言](https://github.com/wa-lang/wa) - Le langage de programmation Wa intégré à Go.

**[⬆ retour en haut](#contents)**

## Gestion des erreurs

_Bibliothèques pour gérer les erreurs._

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - Enveloppe les erreurs avec le fichier, la ligne et le nom de fonction de chaque site d'appel.
- [emperror](https://github.com/emperror/emperror) - Outils et bonnes pratiques de gestion des erreurs pour les bibliothèques et applications Go.
- [eris](https://github.com/rotisserie/eris) - Une meilleure façon de gérer, tracer et journaliser les erreurs en Go. Compatible avec la bibliothèque d'erreurs standard et github.com/pkg/errors.
- [errlog](https://github.com/snwfdhmp/errlog) - Paquet modifiable à volonté qui identifie le code source responsable d'une erreur (avec d'autres fonctionnalités de débogage rapide). Se branche directement sur n'importe quel logger.
- [errors](https://github.com/emperror/errors) - Remplacement direct du paquet errors de la bibliothèque standard et de github.com/pkg/errors. Fournit diverses primitives de gestion des erreurs.
- [errors](https://github.com/neuronlabs/errors) - Gestion simple des erreurs en Golang, avec des primitives de classification.
- [errors](https://github.com/PumpkinSeed/errors) - L'enveloppe d'erreurs la plus simple, avec d'excellentes performances et une surcharge mémoire minimale.
- [errors](https://gitlab.com/tozd/go/errors) - Fournit des erreurs avec une trace de pile et des détails structurés optionnels. Compatible avec l'API de github.com/pkg/errors, mais ne l'utilise pas en interne.
- [errors](https://github.com/naughtygopher/errors) - Remplacement direct des erreurs intégrées de Go. C'est un paquet minimal de gestion des erreurs avec des types d'erreurs personnalisés, des messages conviviaux, Unwrap et Is, ainsi que des fonctions utilitaires très faciles à utiliser et directes.
- [errors](https://github.com/cockroachdb/errors) - Bibliothèque d'erreurs Go permettant la portabilité des erreurs à travers le réseau.
- [errorx](https://github.com/joomcode/errorx) - Un paquet d'erreurs riche en fonctionnalités, avec traces de pile, composition d'erreurs et plus encore.
- [exception](https://github.com/rbrahul/exception) - Un paquet utilitaire simple pour gérer les exceptions avec try-catch en Golang.
- [Falcon](https://github.com/SonicRoshan/falcon) - Un paquet simple mais très puissant pour la gestion des erreurs.
- [Fault](https://github.com/Southclaws/fault) - Un mécanisme ergonomique d'enveloppement des erreurs pour faciliter l'ajout de métadonnées structurées et de contexte aux valeurs d'erreur.
- [go-errr](https://github.com/go-errr/go) - Bibliothèque de gestion des erreurs pour Go avec une sémantique Catch/Recover, des chaînes d'erreurs enveloppées et des traces de pile.
- [go-multierror](https://github.com/hashicorp/go-multierror) - Paquet Go (golang) pour représenter une liste d'erreurs sous la forme d'une seule erreur.
- [metaerr](https://github.com/quantumcycle/metaerr) - Une bibliothèque pour créer vos propres constructeurs d'erreurs, produisant des erreurs structurées avec des métadonnées issues de différentes sources et des traces de pile optionnelles.
- [multierr](https://github.com/uber-go/multierr) - Paquet pour représenter une liste d'erreurs sous la forme d'une seule erreur.
- [oops](https://github.com/samber/oops) - Gestion des erreurs avec contexte, trace de pile et fragments de code source.
- [tracerr](https://github.com/ztrue/tracerr) - Erreurs Golang avec trace de pile et fragments de code source.

**[⬆ retour en haut](#contents)**

## Gestion des fichiers

_Bibliothèques pour manipuler les fichiers et les systèmes de fichiers._

- [afero](https://github.com/spf13/afero) - Système d'abstraction de systèmes de fichiers pour Go.
- [afs](https://github.com/viant/afs) - Stockage de fichiers abstrait (mem, scp, zip, tar, cloud : s3, gs) pour Go.
- [baraka](https://github.com/xis/baraka) - Une bibliothèque pour traiter facilement les téléversements de fichiers HTTP.
- [checksum](https://github.com/codingsince1985/checksum) - Calcule des empreintes de message, comme MD5, SHA256, SHA1, CRC ou BLAKE2s, pour les gros fichiers.
- [copy](https://github.com/otiai10/copy) - Copie récursive de répertoires.
- [fastwalk](https://github.com/charlievieth/fastwalk) - Bibliothèque rapide de parcours parallèle de répertoires (utilisée par [fzf](https://github.com/junegunn/fzf)).
- [flop](https://github.com/homedepot/flop) - Bibliothèque d'opérations sur les fichiers qui vise la parité fonctionnelle avec [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html).
- [gdu](https://github.com/dundee/gdu) - Analyseur d'utilisation du disque avec interface en console.
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - Charge des fichiers CSV à l'aide de balises.
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - La copie de fichiers pour les humains.
- [go-exiftool](https://github.com/barasher/go-exiftool) - Liaisons Go pour ExifTool, la célèbre bibliothèque utilisée pour extraire le plus de métadonnées possible (EXIF, IPTC...) des fichiers (images, PDF, documents bureautiques...).
- [go-gtfs](https://github.com/artonge/go-gtfs) - Charge des fichiers GTFS en Go.
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - Un paquet pour convertir un modèle HTML en fichier PDF.
- [goflat](https://github.com/lzambarda/goflat) - Sérialiseur/désérialiseur générique de fichiers plats, tenant compte du contexte.
- [gofs](https://github.com/no-src/gofs) - Un outil multiplateforme de synchronisation de fichiers en temps réel, prêt à l'emploi.
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Traitement PDF/A pour Go.
- [gulter](https://github.com/adelowo/gulter) - Un middleware HTTP simple pour gérer automatiquement tous vos besoins de téléversement de fichiers
- [gut/yos](https://github.com/1set/gut) - Paquet simple et fiable pour les opérations de copie, déplacement, comparaison et listage sur les fichiers, répertoires et liens symboliques.
- [gxpdf](https://github.com/coregx/gxpdf) - Bibliothèque PDF moderne couvrant tout le cycle de vie, pour Go : analysez, extrayez des tableaux, générez et signez des documents, sans aucune dépendance CGO.
- [higgs](https://github.com/dastoori/higgs) - Une toute petite bibliothèque Go multiplateforme pour masquer/afficher des fichiers et des répertoires.
- [iso9660](https://github.com/kdomanski/iso9660) - Un paquet pour lire et créer des images disque ISO9660
- [notify](https://github.com/rjeczalik/notify) - Bibliothèque de notification d'événements du système de fichiers avec une API simple, similaire à os/signal.
- [opc](https://github.com/qmuntal/opc) - Charge des fichiers Open Packaging Conventions (OPC) pour Go.
- [parquet](https://github.com/parsyl/parquet) - Lit et écrit des fichiers [parquet](https://parquet.apache.org).
- [pathtype](https://github.com/jonchun/pathtype) - Traite les chemins comme un type à part entière plutôt que comme des chaînes.
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - Processeur PDF.
- [skywalker](https://github.com/dixonwille/skywalker) - Paquet permettant de parcourir facilement un système de fichiers de façon concurrente.
- [todotxt](https://github.com/1set/todotxt) - Bibliothèque Go pour les fichiers [_todo.txt_](http://todotxt.org/) de Gina Trapani, prenant en charge l'analyse et la manipulation de listes de tâches au [format _todo.txt_](https://github.com/todotxt/todo.txt).
- [vfs](https://github.com/C2FO/vfs) - Un ensemble modulaire, extensible et aux choix affirmés de fonctionnalités de système de fichiers pour Go, couvrant plusieurs types de systèmes de fichiers tels que os, S3 et GCS.

**[⬆ retour en haut](#contents)**

## Finance

_Paquets pour la comptabilité et la finance._

- [accounting](https://github.com/leekchan/accounting) - formatage de montants et de devises pour Golang.
- [ach](https://github.com/moov-io/ach) - Un lecteur, écrivain et validateur de fichiers Automated Clearing House (ACH).
- [bbgo](https://github.com/c9s/bbgo) - Un framework de bots de trading de cryptomonnaies écrit en Go. Comprend une API commune pour les plateformes d'échange, des indicateurs standard, le backtesting et de nombreuses stratégies intégrées.
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - Client Go pour l'API v3 de BingX avec plus de 260 méthodes, contrats à terme USDT-M/Coin-M, marché au comptant, TradFi, flux WebSocket et copy trading.
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Client Go pour l'API UTA v3 de Bitget avec modèles typés, prix sous forme de chaînes, WebSocket à reconnexion automatique et trading de démonstration.
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Client Go pour l'API V5 de Bybit avec authentification HMAC/RSA, flux WebSocket, trading de démonstration et instruments TradFi.
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - Client pour le Fear & Greed Index de CNN, avec ses sept indicateurs composants et environ un an d'historique quotidien.
- [currency](https://github.com/bojanz/currency) - Gère les montants en devises et fournit des informations et un formatage des devises.
- [currency](https://github.com/naughtygopher/currency) - Paquet de calcul monétaire très performant et précis.
- [dec128](https://github.com/jokruger/dec128) - Nombres décimaux à virgule fixe sur 128 bits haute performance.
- [decimal](https://github.com/shopspring/decimal) - Nombres décimaux à virgule fixe en précision arbitraire.
- [decimal](https://github.com/aytechnet/decimal) - Décimaux 64 bits haute performance, partiellement compatibles avec [shopspring/decimal](https://github.com/shopspring/decimal) et int64, incluant Weight et Length.
- [decimal](https://github.com/govalues/decimal) - Nombres décimaux immuables avec une arithmétique sans panique.
- [decimal](https://github.com/klokare/decimal) - Un type décimal de taille fixe et sans allocation, lorsque vous n'avez pas besoin d'une précision arbitraire.
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - Taux de TVA et formats de numéros de TVA pour 45 pays européens, intégrés à la compilation et actualisés quotidiennement à partir de la base TEDB de la Commission européenne.
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - Sérialisation et arithmétique rapides et précises pour les petits décimaux à virgule fixe
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - Montants monétaires ISO4217 en décimaux à virgule fixe, rapides et simples.
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Client Go pour l'API Basic de Glassnode avec 25 catégories de métriques, structures typées, points d'accès groupés, données Point-in-Time et aucune dépendance.
- [go-finance](https://github.com/alpeb/go-finance) - Bibliothèque de fonctions financières pour la valeur temps de l'argent (annuités), les flux de trésorerie, les conversions de taux d'intérêt, les obligations et les calculs d'amortissement.
- [go-finance](https://github.com/pieterclaerhout/go-finance) - Module pour récupérer les taux de change, vérifier les numéros de TVA via VIES et vérifier les numéros de compte bancaire IBAN.
- [go-money](https://github.com/rhymond/go-money) - Implémentation du patron Money de Fowler.
- [go-nowpayments](https://github.com/matm/go-nowpayments) - Bibliothèque pour l'API de cryptomonnaies NOWPayments.
- [gobl](https://github.com/invopop/gobl) - Framework de factures et de documents de facturation, fondé sur JSON Schema. Automatise le calcul et la validation des taxes, avec des outils de conversion vers les formats internationaux.
- [indicator](https://github.com/cinar/indicator) - Bibliothèque d'analyse technique fournissant des indicateurs financiers, des stratégies et un framework de backtesting.
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - Client Go pour les API REST et WebSocket UTA et Classic de KuCoin, avec authentification HMAC-SHA256, prix typés en chaînes et hiérarchie d'erreurs typée.
- [ledger](https://github.com/formancehq/ledger) - Un registre financier programmable qui sert de base aux applications de mouvements de fonds.
- [money](https://github.com/govalues/money) - Montants monétaires et taux de change immuables, avec une arithmétique sans panique.
- [ofxgo](https://github.com/aclindsa/ofxgo) - Interroge des serveurs OFX et/ou analyse leurs réponses (avec un exemple de client en ligne de commande).
- [okx-go](https://github.com/tigusigalpa/okx-go) - Client Go pour l'API v5 d'OKX avec 335 points d'accès REST, 53 canaux WebSocket, prise en charge des génériques et reconnexion automatique.
- [orderbook](https://github.com/i25959341/orderbook) - Moteur d'appariement pour carnet d'ordres à cours limité en Golang.
- [orderbook](https://github.com/intrepidkarthi/orderbook) - Carnet d'ordres à cours limité et moteur d'appariement intégrables, avec des prix exacts en entiers, un cœur à écrivain unique et une reprise après plantage par journal d'écriture anticipée.
- [payme](https://github.com/jovandeginste/payme) - Générateur de codes QR (ASCII et PNG) pour les paiements SEPA.
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - Un SDK Go complet, sans dépendance et entièrement typé pour l'API Paystack.
- [swift](https://code.pfad.fr/swift/) - Vérification hors ligne de la validité des IBAN (numéros de compte bancaire internationaux) et récupération du BIC (pour certains pays).
- [techan](https://github.com/sdcoffey/techan) - Bibliothèque d'analyse technique avec analyse de marché avancée et stratégies de trading.
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Client Go pour l'API Wallet Pay de Telegram, avec vérification des webhooks par HMAC-SHA256 et middlewares pour net/http, Gin et Echo.
- [ticker](https://github.com/achannarasappa/ticker) - Surveillance des cours boursiers et suivi des positions en terminal.
- [transaction](https://github.com/claygod/transaction) - Base de données transactionnelle embarquée de comptes, fonctionnant en mode multithread.
- [udecimal](https://github.com/quagmt/udecimal) - Bibliothèque de décimaux à virgule fixe haute performance, haute précision et sans allocation pour les applications financières.
- [vat](https://github.com/dannyvankooten/vat) - Validation des numéros de TVA et taux de TVA de l'UE.

**[⬆ retour en haut](#contents)**

## Formulaires

_Bibliothèques pour travailler avec les formulaires._

- [bind](https://github.com/robfig/bind) - Lie les données de formulaire à n'importe quelle valeur Go.
- [conform](https://github.com/leebenson/conform) - Garde les saisies utilisateur sous contrôle. Élague, assainit et nettoie les données à partir des balises de structures.
- [form](https://github.com/go-playground/form) - Décode des url.Values en valeur(s) Go et encode des valeur(s) Go en url.Values. Prise en charge des tableaux doubles et des maps complètes.
- [formam](https://github.com/monoculum/formam) - décode les valeurs d'un formulaire dans une structure.
- [forms](https://github.com/albrow/forms) - Bibliothèque indépendante de tout framework pour analyser et valider des données de formulaire/JSON, prenant en charge les formulaires multipart et les fichiers.
- [gbind](https://github.com/bdjimmy/gbind) - Lie des données à n'importe quelle valeur Go. Peut utiliser des capacités de liaison par expressions, intégrées ou personnalisées ; prend en charge la validation des données
- [gorilla/csrf](https://github.com/gorilla/csrf) - Protection CSRF pour les applications et services web Go.
- [httpin](https://github.com/ggicci/httpin) - Décode une requête HTTP dans une structure personnalisée, y compris la chaîne de requête, les formulaires, les en-têtes HTTP, etc.
- [nosurf](https://github.com/justinas/nosurf) - Middleware de protection CSRF pour Go.
- [qs](https://github.com/sonh/qs) - Module Go pour encoder des structures en paramètres de requête d'URL.
- [queryparam](https://github.com/tomwright/queryparam) - Décode des `url.Values` en valeurs de structures exploitables, de types standard ou personnalisés.
- [roamer](https://github.com/slipros/roamer) - Élimine le code répétitif d'analyse des requêtes HTTP en liant les cookies, en-têtes, paramètres de requête, paramètres de chemin, corps, etc. à des structures à l'aide de simples balises.

**[⬆ retour en haut](#contents)**

## Programmation fonctionnelle

_Paquets pour la programmation fonctionnelle en Go._

- [fp-go](https://github.com/repeale/fp-go) - Collection de fonctions utilitaires de programmation fonctionnelle reposant sur les génériques de Golang 1.18+.
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Monades et fonctionnalités de programmation fonctionnelle pour Golang.
- [fuego](https://github.com/seborama/fuego) - Expérimentation fonctionnelle en Go.
- [FuncFrog](https://github.com/koss-null/FuncFrog) - Bibliothèque de fonctions utilitaires fonctionnelles fournissant Map, Filter, Reduce et d'autres opérations de flux sur des slices génériques (Go 1.18+), avec évaluation paresseuse et mécanismes de gestion des erreurs.
- [g](https://github.com/enetx/g) - Framework de programmation fonctionnelle pour Go.
- [go-functional](https://github.com/BooleanCat/go-functional) - Programmation fonctionnelle en Go à l'aide des génériques
- [go-underscore](https://github.com/tobyhede/go-underscore) - Collection utile d'utilitaires fonctionnels pratiques pour les collections Go.
- [gofp](https://github.com/rbrahul/gofp) - Une puissante bibliothèque utilitaire à la lodash pour Golang.
- [mo](https://github.com/samber/mo) - Monades et abstractions de programmation fonctionnelle populaires, fondées sur les génériques de Go 1.18+ (Option, Result, Either...).
- [underscore](https://github.com/rjNemo/underscore) - Fonctions utilitaires de programmation fonctionnelle pour Go 1.18 et au-delà.
- [valor](https://github.com/phelmkamp/valor) - Types génériques option et result qui contiennent éventuellement une valeur.

**[⬆ retour en haut](#contents)**

## Développement de jeux

_Bibliothèques remarquables de développement de jeux._

- [Ark](https://github.com/mlange-42/ark) - Entity Component System (ECS) fondé sur les archétypes pour Go.
- [due](https://github.com/dobyte/due) - Framework de serveur de jeu distribué à composants modulaires, fournissant des passerelles TCP, KCP, WS et QUIC.
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - moteur de jeu 2D d'une simplicité enfantine en Go.
- [ecs](https://github.com/andygeiss/ecs) - Construisez votre propre moteur de jeu fondé sur le concept d'Entity Component System en Golang.
- [engo](https://github.com/EngoEngine/engo) - Engo est un moteur de jeu 2D open source écrit en Go. Il suit le paradigme Entity-Component-System.
- [fantasyname](https://github.com/s0rg/fantasyname) - Générateur de noms de fantasy.
- [g3n](https://github.com/g3n/engine) - Moteur de jeu 3D en Go.
- [go-astar](https://github.com/beefsack/go-astar) - Implémentation Go de l'algorithme de recherche de chemin A\*.
- [go-sdl2](https://github.com/veandco/go-sdl2) - Liaisons Go pour la [Simple DirectMedia Layer](https://www.libsdl.org/).
- [go3d](https://github.com/ungerik/go3d) - Paquet mathématique 2D/3D orienté performances pour Go.
- [gogpu](https://github.com/gogpu/gogpu) - Framework d'applications GPU avec fenêtrage, gestion des entrées et rendu, construit sur WebGPU : réduit plus de 480 lignes de code GPU à environ 20, sans CGO (écosystème GoGPU : [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)).
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Implémentation de WebGPU en Go pur avec des backends Vulkan, DX12 et Metal, sans CGO (fait partie de l'écosystème [GoGPU](https://github.com/gogpu)).
- [GOKe](https://github.com/kjkrol/goke) - Moteur ECS orienté données (DOD) et fondé sur les archétypes, utilisant une disposition SoA par blocs alignée sur le cache L1 pour une croissance mémoire prévisible et progressive et des chemins d'exécution sans allocation.
- [gonet](https://github.com/xtaci/gonet) - Squelette de serveur de jeu implémenté en Golang.
- [goworld](https://github.com/xiaonanln/goworld) - Moteur de serveur de jeu évolutif, doté d'un framework espace-entité et du remplacement à chaud.
- [grid](https://github.com/s0rg/grid) - Grille 2D générique avec lancer de rayons, projection d'ombres et recherche de chemin.
- [Leaf](https://github.com/name5566/leaf) - Framework léger de serveur de jeu.
- [nano](https://github.com/lonng/nano) - Framework de serveur de jeu en Golang, léger, pratique et haute performance.
- [Oak](https://github.com/oakmound/oak) - Moteur de jeu en Go pur.
- [Pi](https://github.com/elgopher/pi) - Moteur de jeu pour créer des jeux rétro pour ordinateurs modernes. Inspiré de Pico-8 et propulsé par Ebitengine.
- [Pitaya](https://github.com/topfreegames/pitaya) - Framework de serveur de jeu évolutif avec prise en charge du clustering et bibliothèques clientes pour iOS, Android, Unity et d'autres via le SDK C.
- [Pixel](https://github.com/gopxl/pixel) - Bibliothèque de jeux 2D artisanale en Go.
- [prototype](https://github.com/gonutz/prototype) - Bibliothèque multiplateforme (Windows/Linux/Mac) pour créer des jeux de bureau à l'aide d'une API minimale.
- [raylib-go](https://github.com/gen2brain/raylib-go) - Liaisons Go pour [raylib](https://www.raylib.com/), une bibliothèque simple et facile à utiliser pour apprendre la programmation de jeux vidéo.
- [sceneCamera](https://github.com/donomii/sceneCamera) - Déplacement de caméra et matrices de vue/projection pour les modes de rendu musée, FPS, RTS et stéréo.
- [termloop](https://github.com/JoelOtter/termloop) - Moteur de jeu en terminal pour Go, construit sur Termbox.
- [tile](https://github.com/kelindar/tile) - Bibliothèque de grilles 2D (TileMap) orientée données et respectueuse du cache, avec recherche de chemin, observateurs et import/export.

**[⬆ retour en haut](#contents)**

## Générateurs

_Outils qui génèrent du code Go._

- [apispec](https://github.com/ehabterra/apispec) - Génère des spécifications OpenAPI 3.1 à partir de code Go sans annotations, avec une interface dans le navigateur pour configurer, prévisualiser et explorer le graphe d'appels.
- [convergen](https://github.com/reedom/convergen) - Générateur de code de copie de type à type riche en fonctionnalités.
- [copygen](https://github.com/switchupcb/copygen) - Génère n'importe quel code à partir de types Go, y compris des convertisseurs de type à type (code de copie), sans réflexion par défaut.
- [generis](https://github.com/senselogic/GENERIS) - Outil de génération de code offrant des génériques, des macros libres, la compilation conditionnelle et des modèles HTML.
- [go-apispec](https://github.com/antst/go-apispec) - Génère des spécifications OpenAPI 3.1 à partir du code source Go par analyse statique, avec détection automatique du framework.
- [go-enum](https://github.com/abice/go-enum) - Génération de code pour les énumérations à partir des commentaires du code.
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - Génération de code pour l'encodage des énumérations à partir des commentaires du code.
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Méthodes de requête à la LINQ de .NET pour Go.
- [goderive](https://github.com/awalterschulze/goderive) - Dérive des fonctions à partir des types d'entrée
- [goverter](https://github.com/jmattheis/goverter) - Génère des convertisseurs en définissant une interface.
- [GoWrap](https://github.com/hexdigest/gowrap) - Génère des décorateurs pour les interfaces Go à l'aide de modèles simples.
- [interfaces](https://github.com/rjeczalik/interfaces) - Outil en ligne de commande pour générer des définitions d'interfaces.
- [jennifer](https://github.com/dave/jennifer) - Génère du code Go arbitraire sans modèles.
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - Ce paquet contient un ensemble d'utilitaires pour générer le code de base Go des services à partir de définitions d'API OpenAPI 3.0.
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - Génère un serveur et un client HTTP à partir de protobuf.
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Génère des outils, prompts et ressources MCP typés à partir de Protocol Buffers.
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - Une bibliothèque pour créer des types dynamiquement.

**[⬆ retour en haut](#contents)**

## Géographie

_Outils et serveurs géographiques_

- [borders](https://github.com/kpfaulkner/borders) - Détecte les contours d'images et les convertit en GeoJSON pour les opérations SIG.
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - SDK Go officiel de GeoEngine, offrant une ingestion de données géospatiales haute performance avec une latence de quelques millisecondes.
- [geoos](https://github.com/spatial-go/geoos) - Une bibliothèque qui fournit des données spatiales et des algorithmes géométriques.
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver est un paquet Go pour manipuler une instance GeoServer via l'API REST de GeoServer.
- [gismanager](https://github.com/hishamkaram/gismanager) - Publiez vos données SIG (données vectorielles) dans PostGIS et Geoserver.
- [godal](https://github.com/airbusgeo/godal) - Surcouche Go pour GDAL.
- [H3](https://github.com/uber/h3-go) - Liaisons Go pour H3, un système d'indexation géospatiale hexagonal et hiérarchique.
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - Utilitaires de conversion entre les index H3 et GeoJSON.
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - Répartition des cellules H3geo d'Uber par nœuds virtuels.
- [mbtileserver](https://github.com/consbio/mbtileserver) - Un serveur simple en Go pour les tuiles cartographiques stockées au format mbtiles.
- [osm](https://github.com/paulmach/osm) - Bibliothèque pour lire, écrire et exploiter les données et les API d'OpenStreetMap.
- [pbf](https://github.com/maguro/pbf) - Encodeur/décodeur Golang pour le format PBF d'OpenStreetMap.
- [S2 geojson](https://github.com/pantrif/s2-geojson) - Convertit du GeoJSON en cellules S2 et présente sur une carte certaines fonctionnalités de la géométrie S2.
- [S2 geometry](https://github.com/golang/geo) - Bibliothèque de géométrie S2 en Go.
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures est une bibliothèque de géométrie 2D qui fournit des types Go modélisant des géométries, ainsi que des algorithmes qui opèrent sur elles.
- [Tile38](https://github.com/tidwall/tile38) - Base de données de géolocalisation avec index spatial et géorepérage en temps réel.
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) Un projet pour utiliser et convertir facilement LonLat, Point et Tile afin d'afficher des informations, des marqueurs, etc. sur une carte utilisant la projection Web Mercator.
- [WGS84](https://github.com/wroge/wgs84) - Bibliothèque de conversion et de transformation de coordonnées (ETRS89, OSGB36, NAD83, RGF93, Web Mercator, UTM).

**[⬆ retour en haut](#contents)**

## Compilateurs Go

_Outils pour compiler du Go vers d'autres langages, et inversement._

- [bunster](https://github.com/yassinebenaid/bunster) - Compile des scripts shell en Go.
- [c4go](https://github.com/Konstantin8105/c4go) - Transpile du code C en code Go.
- [cxgo](https://github.com/gotranspile/cxgo) - Transpile du code C en code Go.
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Transpile du Go en code Arduino.
- [f4go](https://github.com/Konstantin8105/f4go) - Transpile du code FORTRAN 77 en code Go.
- [go2hx](https://github.com/go2hx/go2hx) - Compilateur de Go vers Haxe, puis vers JavaScript/C++/Java/C#.
- [gopherjs](https://github.com/gopherjs/gopherjs) - Compilateur de Go vers JavaScript.

**[⬆ retour en haut](#contents)**

## Goroutines

_Outils pour gérer les goroutines et travailler avec elles._

- [anchor](https://github.com/kyuff/anchor) - Bibliothèque pour gérer le cycle de vie des composants dans les architectures de microservices.
- [ants](https://github.com/panjf2000/ants) - Un pool de goroutines haute performance et peu coûteux en Go.
- [artifex](https://github.com/borderstech/artifex) - File de tâches simple en mémoire pour Golang, avec répartition entre workers.
- [async](https://github.com/yaitoo/async) - Un paquet de tâches asynchrones de style async/await pour Go.
- [async](https://github.com/reugn/async) - Une bibliothèque de synchronisation alternative pour Go (Future, Promise, verrous).
- [async](https://github.com/studiosol/async) - Un moyen sûr d'exécuter des fonctions de manière asynchrone, en les récupérant en cas de panique.
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob est un gestionnaire de tâches en file asynchrone, au code léger, clair et rapide.
- [autopool](https://github.com/AshvinBambhaniya/autopool) - Pool de workers sans configuration et à mise à l'échelle automatique pour Go, avec un ordonnancement tenant compte des priorités.
- [breaker](https://github.com/kamilsk/breaker) - Mécanisme flexible pour rendre un flux d'exécution interruptible.
- [channelify](https://github.com/ddelizia/channelify) - Transformez votre fonction pour qu'elle renvoie des canaux, pour un traitement parallèle simple et puissant.
- [conc](https://github.com/sourcegraph/conc) - `conc` est votre boîte à outils pour la concurrence structurée en Go, qui rend les tâches courantes plus simples et plus sûres.
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - Limiteur de concurrence prenant en charge les délais d'expiration, la priorité dynamique et l'annulation des goroutines par contexte.
- [conexec](https://github.com/ITcathyh/conexec) - Une boîte à outils de concurrence pour exécuter des fonctions de façon concurrente, efficace et sûre. Elle permet de spécifier un délai d'expiration global pour éviter les blocages et utilise un pool de goroutines pour améliorer l'efficacité.
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - CyclicBarrier pour Golang.
- [execpool](https://github.com/hexdigest/execpool) - Un pool construit autour d'exec.Cmd qui démarre à l'avance un nombre donné de processus et leur attache stdin et stdout au besoin. Très similaire à FastCGI ou au MPM Prefork d'Apache, mais fonctionne pour n'importe quelle commande.
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - La concurrence structurée en toute simplicité.
- [go-accumulator](https://github.com/nar10z/go-accumulator) - Solution pour accumuler des événements et les traiter ensuite.
- [go-actor](https://github.com/vladopajic/go-actor) - Une toute petite bibliothèque pour écrire des programmes concurrents selon le modèle d'acteurs.
- [go-floc](https://github.com/workanator/go-floc) - Orchestrez facilement des goroutines.
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - Contrôle l'ordre d'exécution des goroutines.
- [go-future](https://github.com/jizhuozhi/go-future) - Une bibliothèque Future/Promise avec des combinateurs génériques et un moteur d'exécution de DAG.
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - Gérez un pool de goroutines avec cette bibliothèque légère à l'API simple.
- [go-trylock](https://github.com/subchen/go-trylock) - Prise en charge de TryLock sur les verrous en lecture-écriture pour Golang.
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - Comme `sync.WaitGroup`, avec gestion des erreurs et contrôle de la concurrence.
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Inspiré du Thread Pool de Java, Go WorkerPool vise à contrôler les goroutines lourdes.
- [goccm](https://github.com/zenthangplus/goccm) - Le paquet Go Concurrency Manager limite le nombre de goroutines autorisées à s'exécuter simultanément.
- [gohive](https://github.com/loveleshsharma/gohive) - Un pool de goroutines très performant et facile à utiliser pour Go.
- [gollback](https://github.com/vardius/gollback) - utilitaires simples de fonctions asynchrones, pour gérer l'exécution de closures et de callbacks.
- [goscade](https://github.com/ognick/goscade) - Orchestrateur minimaliste du cycle de vie des composants Go, avec graphes de dépendances, séquencement du démarrage, coordination de la disponibilité et arrêt propre.
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl est à la fois un outil de gestion et de surveillance de processus. Un pool de workers infini vous permet de contrôler le pool et les processus et de surveiller leur état.
- [goworker](https://github.com/benmanns/goworker) - goworker est un worker d'arrière-plan écrit en Go.
- [gowp](https://github.com/xxjwxc/gowp) - gowp est un pool de goroutines limitant la concurrence.
- [gpool](https://github.com/Sherifabdlnaby/gpool) - gère un pool redimensionnable de goroutines tenant compte du contexte, pour borner la concurrence.
- [grpool](https://github.com/ivpusic/grpool) - Pool de goroutines léger.
- [hands](https://github.com/duanckham/hands) - Un contrôleur de processus servant à piloter les stratégies d'exécution et de retour de plusieurs goroutines.
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch fournit des fonctions comme `All`, `First`, `Retry`, `Waterfall`, etc., qui rendent le contrôle des flux asynchrones plus intuitif.
- [kyoo](https://github.com/dirkaholic/kyoo) - Fournit une file de tâches illimitée et des pools de workers concurrents.
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - Alternative directe à `sync/errgroup`, limitée à un pool de N goroutines de travail.
- [nursery](https://github.com/arunsworld/nursery) - Concurrence structurée en Go.
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight est une implémentation complète des arbres de supervision d'Erlang.
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - Exécute des fonctions en parallèle.
- [pond](https://github.com/alitto/pond) - Pool de goroutines de travail minimaliste et haute performance écrit en Go.
- [pool](https://github.com/go-playground/pool) - Goroutines consommatrices limitées ou pool de goroutines illimité, pour faciliter la gestion et l'annulation des goroutines.
- [powerlock](https://github.com/donomii/powerlock) - Mutex FIFO nommés avec annulation par contexte, files d'attente bornées, diagnostics de surveillance (watchdog), profils pprof et métriques Prometheus.
- [rill](https://github.com/destel/rill) - Boîte à outils Go pour une concurrence propre, composable et fondée sur les canaux.
- [routine](https://github.com/timandy/routine) - `routine` est une bibliothèque `ThreadLocal` pour Go. Elle encapsule et fournit des interfaces d'accès au contexte des `goroutine` faciles à utiliser, sans contention et haute performance, qui vous aident à accéder plus élégamment aux informations de contexte des coroutines.
- [routine](https://github.com/x-mod/routine) - contrôle des goroutines par contexte, avec prise en charge de Main, Go, Pool et de quelques exécuteurs utiles.
- [semaphore](https://github.com/kamilsk/semaphore) - Implémentation du patron sémaphore avec délai d'expiration des opérations de verrouillage/déverrouillage, fondée sur les canaux et le contexte.
- [semaphore](https://github.com/marusama/semaphore) - Implémentation rapide de sémaphore redimensionnable fondée sur CAS (plus rapide que les implémentations à base de canaux).
- [stl](https://github.com/ssgreg/stl) - Verrous transactionnels logiciels fondés sur le mécanisme de contrôle de concurrence de la mémoire transactionnelle logicielle (STM).
- [threadpool](https://github.com/shettyh/threadpool) - Implémentation de pool de threads en Golang.
- [tunny](https://github.com/Jeffail/tunny) - Pool de goroutines pour Golang.
- [worker-pool](https://github.com/vardius/worker-pool) - goworker est un pool de workers asynchrones simple en Go.
- [workerpool](https://github.com/gammazero/workerpool) - Pool de goroutines qui limite la concurrence de l'exécution des tâches, et non le nombre de tâches en file d'attente.

**[⬆ retour en haut](#contents)**

## Interfaces graphiques

_Bibliothèques pour créer des applications à interface graphique._

_Boîtes à outils_

- [app](https://github.com/murlokswarm/app) - Paquet pour créer des applications avec Go, HTML et CSS. Prend en charge macOS ; Windows en cours.
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - Surcouche Go générée automatiquement pour [Dear ImGui](https://github.com/ocornut/imgui) via [cimgui](https://github.com/cimgui/cimgui).
- [Cogent Core](https://github.com/cogentcore/core) - Un framework pour créer des applications 2D et 3D fonctionnant sur macOS, Windows, Linux, iOS, Android et le web.
- [DarwinKit](https://github.com/progrium/darwinkit) - Créez des applications macOS natives en Go.
- [energy](https://github.com/energye/energy) - Multiplateforme, fondé sur LCL (Native System UI Control Library) et CEF (Chromium Embedded Framework) (Windows / macOS / Linux)
- [fyne](https://github.com/fyne-io/fyne) - Interfaces graphiques natives multiplateformes conçues pour Go, fondées sur Material Design. Prend en charge Linux, macOS, Windows, BSD, iOS et Android.
- [gio](https://gioui.org) - Gio est une bibliothèque pour écrire en Go des interfaces graphiques multiplateformes en mode immédiat. Gio prend en charge toutes les grandes plateformes : Linux, macOS, Windows, Android, iOS, FreeBSD, OpenBSD et WebAssembly.
- [go-gtk](https://mattn.github.io/go-gtk/) - Liaisons Go pour GTK.
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Liaisons Go pour Sciter, le moteur HTML/CSS/script intégrable pour le développement d'interfaces de bureau modernes. Multiplateforme.
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Agrégateur multiplateforme de boîtes à outils d'interface pour Windows / Linux / Mac. GTK, Cocoa, API Windows
- [gogpu/ui](https://github.com/gogpu/ui) - Boîte à outils d'interface graphique accélérée par GPU avec 22 widgets, 3 systèmes de design (Material, Fluent, Cupertino), des signaux réactifs et sans CGO (fait partie de l'écosystème [GoGPU](https://github.com/gogpu)).
- [goradd/html5tag](https://github.com/goradd/html5tag) - Bibliothèque pour produire des balises HTML5.
- [gotk3](https://github.com/gotk3/gotk3) - Liaisons Go pour GTK3.
- [gowd](https://github.com/dtylman/gowd) - Développement rapide et simple d'interfaces de bureau avec Go, HTML, CSS et NW.js. Multiplateforme.
- [proton](https://github.com/CzaxStudio/proton) - Framework d'interface graphique en mode immédiat en Go pur, construit sur Gio, sans aucune dépendance Cgo.
- [qt](https://github.com/therecipe/qt) - Liaison Qt pour Go (prise en charge de Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi).
- [Spot](https://github.com/roblillack/spot) - Boîte à outils d'interface graphique de bureau réactive et multiplateforme.
- [ui](https://github.com/andlabs/ui) - Bibliothèque d'interface graphique native de la plateforme pour Go. Multiplateforme.
- [unison](https://github.com/richardwilkes/unison) - Une boîte à outils unifiée d'expérience utilisateur graphique pour les applications de bureau Go. macOS, Windows et Linux sont pris en charge.
- [Wails](https://wails.io) - Applications de bureau Mac, Windows et Linux avec une interface HTML utilisant le moteur de rendu HTML intégré au système.
- [walk](https://github.com/lxn/walk) - Kit de bibliothèques d'applications Windows pour Go.
- [webview](https://github.com/zserge/webview) - Fenêtre webview multiplateforme avec de simples liaisons JavaScript bidirectionnelles (Windows / macOS / Linux).

_Interaction_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - Liaisons Go pour la bibliothèque C libappindicator3.
- [gogpu/systray](https://github.com/gogpu/systray) - Bibliothèque de zone de notification en Go pur pour Windows, macOS et Linux, sans CGO (fait partie de l'écosystème [GoGPU](https://github.com/gogpu)).
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Bibliothèque de notifications de bureau OS X pour Go.
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - Bibliothèque OS X pour signaler toute activité (configurable) sur votre machine.
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - Notifications de mise en veille et de réveil d'OS X en Golang.
- [robotgo](https://github.com/go-vgo/robotgo) - Automatisation native et multiplateforme de l'interface graphique du système en Go. Contrôlez la souris, le clavier et plus encore.
- [systray](https://github.com/getlantern/systray) - Bibliothèque Go multiplateforme pour placer une icône et un menu dans la zone de notification.
- [trayhost](https://github.com/shurcooL/trayhost) - Bibliothèque Go multiplateforme pour placer une icône dans la barre des tâches du système d'exploitation hôte.
- [zenity](https://github.com/ncruces/zenity) - Bibliothèque Go et CLI multiplateformes pour créer des boîtes de dialogue simples qui interagissent graphiquement avec l'utilisateur.

**[⬆ retour en haut](#contents)**

## Matériel

_Bibliothèques, outils et tutoriels pour interagir avec le matériel._

- [arduino-cli](https://github.com/arduino/arduino-cli) - CLI et bibliothèque Arduino officielles. Peuvent fonctionner de façon autonome ou être intégrées à des projets Go plus importants.
- [emgo](https://github.com/ziutek/emgo) - Langage proche de Go pour programmer des systèmes embarqués (par ex. les microcontrôleurs STM32).
- [ghw](https://github.com/jaypipes/ghw) - Bibliothèque Golang de découverte et d'inspection du matériel.
- [go-osc](https://github.com/hypebeast/go-osc) - Liaisons Open Sound Control (OSC) pour Go.
- [go-rpio](https://github.com/stianeikeland/go-rpio) - GPIO pour Go, sans nécessiter cgo.
- [goroslib](https://github.com/aler9/goroslib) - Bibliothèque Robot Operating System (ROS) pour Go.
- [joystick](https://github.com/0xcafed00d/joystick) - une API par interrogation pour lire l'état d'un joystick connecté.
- [moody](https://github.com/dinakars777/moody) - Démon de « personnalités » pour les événements matériels sous macOS. Surveille l'USB, le chargeur, le couvercle et d'autres événements matériels, et y réagit avec des personnalités personnalisables.
- [sysinfo](https://github.com/zcalusic/sysinfo) - Une bibliothèque en Go pur fournissant des informations système sur l'OS Linux, le noyau et le matériel.

**[⬆ retour en haut](#contents)**

## Images

_Bibliothèques pour manipuler des images._

- [bild](https://github.com/anthonynsimon/bild) - Collection d'algorithmes de traitement d'images en Go pur.
- [bimg](https://github.com/h2non/bimg) - Petit paquet pour un traitement d'images rapide et efficace à l'aide de libvips.
- [cameron](https://github.com/aofei/cameron) - Un générateur d'avatars pour Go.
- [canvas](https://github.com/tdewolff/canvas) - Graphismes vectoriels vers PDF, SVG ou image matricielle.
- [color-extractor](https://github.com/marekm4/color-extractor) - Extracteur de couleurs dominantes sans dépendance externe.
- [darkroom](https://github.com/gojek/darkroom) - Un proxy d'images avec des backends de stockage et des moteurs de traitement d'images interchangeables, axé sur la vitesse et la résilience.
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - API d'optimisation et de transformation d'images utilisant libvips, déployable sur AWS Lambda et CloudFront.
- [geopattern](https://github.com/pravj/geopattern) - Créez de superbes motifs d'images génératifs à partir d'une chaîne.
- [gg](https://github.com/fogleman/gg) - Rendu 2D en Go pur.
- [gift](https://github.com/disintegration/gift) - Paquet de filtres de traitement d'images.
- [gltf](https://github.com/qmuntal/gltf) - Lecteur, écrivain et validateur glTF 2.0 efficace et robuste.
- [go-cairo](https://github.com/ungerik/go-cairo) - Liaison Go pour la bibliothèque graphique cairo.
- [go-gd](https://github.com/bolknote/go-gd) - Liaison Go pour la bibliothèque GD.
- [go-nude](https://github.com/koyachi/go-nude) - Détection de nudité avec Go.
- [go-qrcode](https://github.com/yeqown/go-qrcode) - Génère des codes QR aux styles personnalisés, en permettant d'ajuster la couleur, la taille des blocs, la forme et les icônes.
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Portage de la bibliothèque webcolors de Python vers Go.
- [go-webp](https://github.com/kolesa-team/go-webp) - Bibliothèque pour encoder et décoder des images WebP, à l'aide de libwebp.
- [gocv](https://github.com/hybridgroup/gocv) - Paquet Go de vision par ordinateur utilisant OpenCV 3.3+.
- [gogpu/gg](https://github.com/gogpu/gg) - Rendu 2D accéléré par GPU avec une API de type Canvas, sans CGO (fait partie de l'écosystème graphique en Go pur [GoGPU](https://github.com/gogpu)).
- [goimagehash](https://github.com/corona10/goimagehash) - Paquet Go de hachage perceptuel d'images.
- [goimghdr](https://github.com/corona10/goimghdr) - Le module imghdr pour Go détermine le type d'image contenu dans un fichier.
- [govatar](https://github.com/o1egl/govatar) - Bibliothèque et outil en ligne de commande pour générer des avatars amusants.
- [govips](https://github.com/davidbyttow/govips) - Une bibliothèque de traitement et de redimensionnement d'images ultra-rapide pour Go.
- [gowitness](https://github.com/sensepost/gowitness) - Capture d'écran de pages web en ligne de commande avec Go et Chrome headless.
- [gridder](https://github.com/shomali11/gridder) - Une bibliothèque graphique 2D fondée sur une grille.
- [image2ascii](https://github.com/qeesung/image2ascii) - Convertit une image en ASCII.
- [imagick](https://github.com/gographics/imagick) - Liaison Go vers l'API C MagickWand d'ImageMagick.
- [imaginary](https://github.com/h2non/imaginary) - Microservice HTTP rapide et simple de redimensionnement d'images.
- [imaging](https://github.com/disintegration/imaging) - Paquet Go simple de traitement d'images.
- [imagor](https://github.com/cshum/imagor) - Serveur de traitement d'images et bibliothèque Go rapides et sécurisés, utilisant libvips.
- [img](https://github.com/hawx/img) - Sélection d'outils de manipulation d'images.
- [ln](https://github.com/fogleman/ln) - Rendu 3D de dessins au trait en Go.
- [mergi](https://github.com/noelyahan/mergi) - Outil et bibliothèque Go de manipulation d'images (fusion, recadrage, redimensionnement, filigrane, animation).
- [mort](https://github.com/aldor007/mort) - Serveur de stockage et de traitement d'images écrit en Go.
- [mpo](https://github.com/donatj/mpo) - Décodeur et outil de conversion pour les photos 3D MPO.
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - Encodeur WebP natif en Go, sans aucune dépendance externe.
- [picfit](https://github.com/thoas/picfit) - Un serveur de redimensionnement d'images écrit en Go.
- [pt](https://github.com/fogleman/pt) - Moteur de tracé de chemins (path tracing) écrit en Go.
- [scout](https://github.com/jonoton/scout) - Scout est une solution logicielle open source autonome de vidéosurveillance à faire soi-même.
- [smartcrop](https://github.com/muesli/smartcrop) - Trouve de bons recadrages pour des images et des tailles de recadrage arbitraires.
- [steganography](https://github.com/auyer/steganography) - Bibliothèque en Go pur de stéganographie LSB.
- [stegify](https://github.com/DimitarPetrov/stegify) - Outil Go de stéganographie LSB, capable de cacher n'importe quel fichier dans une image.
- [svgo](https://github.com/ajstarks/svgo) - Bibliothèque en langage Go pour la génération de SVG.
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs redimensionne et optimise les images pour le web à l'aide de formats de nouvelle génération.
- [webp-server](https://github.com/mehdipourfar/webp-server) - Serveur d'images simple et minimal, capable de stocker, redimensionner, convertir et mettre en cache des images.

**[⬆ retour en haut](#contents)**

## IoT (Internet des objets)

_Bibliothèques pour programmer les appareils de l'IoT._

- [connectordb](https://github.com/connectordb/connectordb) - Plateforme open source pour le Quantified Self et l'IoT.
- [devices](https://github.com/goiot/devices) - Suite de bibliothèques pour les appareils IoT, expérimentale pour x/exp/io.
- [ekuiper](https://github.com/lf-edge/ekuiper) - Moteur léger de traitement de flux de données pour l'IoT en périphérie (edge).
- [eywa](https://github.com/xcodersun/eywa) - Le projet Eywa est essentiellement un gestionnaire de connexions qui garde la trace des appareils connectés.
- [flogo](https://github.com/tibcosoftware/flogo) - Le projet Flogo est un framework open source pour les applications et l'intégration IoT en périphérie.
- [gatt](https://github.com/paypal/gatt) - Gatt est un paquet Go pour créer des périphériques Bluetooth Low Energy.
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot est un framework pour la robotique, l'informatique physique et l'Internet des objets.
- [huego](https://github.com/amimof/huego) - Une bibliothèque cliente Philips Hue complète pour Go.
- [iot](https://github.com/vaelen/iot/) - IoT est un framework simple pour implémenter un appareil Google IoT Core.
- [periph](https://periph.io/) - E/S de périphériques pour s'interfacer avec les fonctionnalités bas niveau des cartes.
- [rulego](https://github.com/rulego/rulego) - RuleGo est un moteur de règles léger, haute performance, embarqué et orchestrable, fondé sur des composants, pour l'IoT en périphérie.
- [sensorbee](https://github.com/sensorbee/sensorbee) - Moteur léger de traitement de flux pour l'IoT.
- [shifu](https://github.com/Edgenesis/shifu) - Framework de développement IoT natif Kubernetes.
- [smart-home](https://github.com/e154/smart-home) - Logiciel d'automatisation IoT.

**[⬆ retour en haut](#contents)**

## Planificateurs de tâches

_Bibliothèques pour planifier des tâches._

- [cdule](https://github.com/deepaksinghvi/cdule) - Bibliothèque de planification de tâches avec prise en charge des bases de données
- [cheek](https://github.com/bart6114/cheek) - Un planificateur simple à la crontab qui vise une approche KISS de la planification de tâches.
- [clockwerk](https://github.com/onatm/clockwerk) - Paquet Go pour planifier des tâches périodiques avec une syntaxe simple et fluide.
- [cronticker](https://github.com/krayzpipes/cronticker) - Une implémentation de ticker prenant en charge les planifications cron.
- [go-cron](https://github.com/rk/go-cron) - Bibliothèque Cron simple pour Go, capable d'exécuter des closures ou des fonctions à intervalles variables, d'une fois par seconde à une fois par an à une date et une heure précises. Principalement destinée aux applications web et aux démons de longue durée.
- [go-cron](https://github.com/netresearch/go-cron) - Planificateur de tâches cron avec mise à jour des planifications à l'exécution, contexte par entrée, middlewares de résilience (nouvelles tentatives, disjoncteur, limitation de débit) et hooks d'observabilité ; successeur de robfig/cron.
- [go-job](https://github.com/cybergarage/go-job) - Une bibliothèque flexible et extensible de planification et d'exécution de tâches pour Go.
- [go-quartz](https://github.com/reugn/go-quartz) - Bibliothèque de planification simple et sans dépendance pour Go.
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - Planificateur de tâches prenant en charge les expressions cron standard, les descripteurs personnalisés, les intervalles et les dépendances entre tâches.
- [gocron](https://github.com/go-co-op/gocron) - Planification de tâches Go simple et fluide. Il s'agit d'un fork activement maintenu de [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron).
- [goflow](https://github.com/fieldryand/goflow) - Un planificateur de DAG et un tableau de bord simples mais puissants.
- [gron](https://github.com/roylee0704/gron) - Définissez des tâches temporelles avec une API Go simple, et le planificateur de Gron les exécutera en conséquence.
- [gronx](https://github.com/adhocore/gronx) - Analyseur d'expressions cron, exécuteur de tâches et démon qui traite une liste de tâches à la crontab.
- [JobRunner](https://github.com/bamzi/jobrunner) - Planificateur de tâches cron intelligent et riche en fonctionnalités, avec mise en file des tâches et surveillance en direct intégrées.
- [leprechaun](https://github.com/kilgaloon/leprechaun) - Planificateur de tâches prenant en charge les webhooks, les crons et la planification classique.
- [ofelia](https://github.com/netresearch/ofelia) - Planificateur de tâches Docker (une crontab pour Docker) ; fork de mcuadros/ofelia qui ajoute une interface web, des dépendances entre tâches, des nouvelles tentatives et la persistance des tâches.
- [pending](https://github.com/kahoon/pending) - Planificateur de tâches différées avec anti-rebond par identifiant, annulation, arrêt propre et limites de concurrence optionnelles.
- [sched](https://github.com/romshark/sched) - Un planificateur de tâches capable d'avancer le temps en accéléré.
- [scheduler](https://github.com/carlescere/scheduler) - La planification de tâches cron en toute simplicité.
- [scheduler](https://github.com/yuseferi/scheduler) - Planificateur de tâches distribué natif en Go, avec tâches différées, coordination Redis par lots, nouvelles tentatives, reprise par baux et partitionnement versionné des files.
- [tasks](https://github.com/madflojo/tasks) - Un planificateur intra-processus facile à utiliser pour les tâches récurrentes en Go.
- [tickstem/cron](https://github.com/tickstem/cron) - Client Go pour planifier des tâches cron HTTP, avec historique d'exécution, alertes en cas d'échec et tsk-local pour tester les gestionnaires sans identifiants réels.
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - Client Go de surveillance par pulsations de type dead man's switch : envoyez un ping à une URL après chaque exécution de tâche et soyez alerté par e-mail si les pings cessent d'arriver.

**[⬆ retour en haut](#contents)**

## JSON

_Bibliothèques pour travailler avec JSON._

- [ajson](https://github.com/spyzhov/ajson) - JSON abstrait pour Golang avec prise en charge de JSONPath.
- [ask](https://github.com/simonnilsson/ask) - Accès facile aux valeurs imbriquées dans les maps et les slices. Fonctionne avec encoding/json et d'autres paquets qui désérialisent (« Unmarshal ») des données arbitraires en types de données Go.
- [dynjson](https://github.com/cocoonspace/dynjson) - Formats JSON personnalisables par le client pour les API dynamiques.
- [ej](https://github.com/lucassscaravelli/ej) - Écrivez et lisez du JSON depuis différentes sources de manière concise.
- [epoch](https://github.com/vtopc/epoch) - Contient des primitives pour sérialiser/désérialiser en JSON des horodatages Unix (epoch) vers/depuis le type intégré time.Time.
- [fastjson](https://github.com/valyala/fastjson) - Analyseur et validateur JSON rapide pour Go. Sans structures personnalisées, sans génération de code, sans réflexion.
- [gabs](https://github.com/Jeffail/gabs) - Pour analyser, créer et modifier du JSON inconnu ou dynamique en Go.
- [gjo](https://github.com/skanehira/gjo) - Petit utilitaire pour créer des objets JSON.
- [GJSON](https://github.com/tidwall/gjson) - Obtenez une valeur JSON en une ligne de code.
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError permet de créer facilement des réponses d'erreur JSON conformes à la spécification JsonApi.
- [go-respond](https://github.com/nicklaw5/go-respond) - Paquet Go pour gérer les réponses HTTP JSON courantes.
- [gojmapr](https://github.com/limiu82214/gojmapr) - Obtenez une structure simple à partir d'un JSON complexe grâce à un chemin JSON.
- [gojq](https://github.com/elgs/gojq) - Requêtes JSON en Golang.
- [gojson](https://github.com/ChimeraCoder/gojson) - Génère automatiquement des définitions de structures Go (golang) à partir d'un exemple de JSON.
- [htmljson](https://github.com/nikolaydubina/htmljson) - Rendu enrichi de JSON en HTML, en Go.
- [JayDiff](https://github.com/yazgazan/jaydiff) - Utilitaire de comparaison de JSON écrit en Go.
- [jettison](https://github.com/wI2L/jettison) - Encodeur JSON rapide et flexible pour Go.
- [jscan](https://github.com/romshark/jscan) - Itérateur JSON haute performance sans allocation.
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - Convertit du JSON en structure Go.
- [JSON-to-Proto](https://json-to-proto.github.io/) - Convertit du JSON en Protobuf en ligne.
- [json2go](https://github.com/m-zajac/json2go) - Conversion avancée de JSON en structures Go. Fournit un paquet capable d'analyser plusieurs documents JSON et de créer une structure qui leur convient à tous.
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - Liaisons Go fondées sur la référence des erreurs JSON API.
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - Remplacement direct de `encoding/json` qui produit du JSON coloré.
- [jsondiff](https://github.com/wI2L/jsondiff) - Bibliothèque de comparaison de JSON pour Go fondée sur la RFC6902 (JSON Patch).
- [jsonf](https://github.com/miolini/jsonf) - Outil en console pour le formatage avec coloration et l'interrogation structurée de JSON.
- [jsongo](https://github.com/ricardolonga/jsongo) - API fluide pour faciliter la création d'objets JSON.
- [jsonhal](https://github.com/RichardKnop/jsonhal) - Paquet Go simple pour sérialiser des structures personnalisées en réponses JSON compatibles HAL.
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - Bibliothèque JSON exposant des gestionnaires simples qui vous permettent de lire et d'écrire facilement du JSON depuis diverses sources.
- [jsonic](https://github.com/sinhashubham95/jsonic) - Utilitaires pour manipuler et interroger du JSON de façon typée et sûre, sans définir de structures.
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - Une bibliothèque rapide et pratique pour les données JSON non structurées, remplaçant `encoding/json`.
- [jzon](https://github.com/zerosnake0/jzon) - Bibliothèque JSON dont l'API et le comportement sont compatibles avec la bibliothèque standard.
- [kazaam](https://github.com/Qntfy/kazaam) - API pour la transformation arbitraire de documents JSON.
- [mapslice-json](https://github.com/mickep76/mapslice-json) - MapSlice pour Go, pour sérialiser/désérialiser des maps en JSON en conservant l'ordre.
- [marshmallow](https://github.com/PerimeterX/marshmallow) - Désérialisation JSON performante pour des cas d'usage flexibles.
- [mp](https://github.com/sanbornm/mp) - Analyseur d'e-mails simple en ligne de commande. Il lit actuellement stdin et produit du JSON.
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go est un analyseur haute performance accompagné de divers outils JSON supplémentaires, dont JSONPath.
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Analyseur JSON simple avec validation conditionnelle via les balises des champs de structures Golang.
- [silentjson](https://github.com/GenshIv/silentjson) - Scanner et découpeur de limites JSON sans allocation, utilisant les instructions SIMD AVX2.
- [SJSON](https://github.com/tidwall/sjson) - Définissez une valeur JSON en une ligne de code.
- [ujson](https://github.com/olvrng/ujson) - Analyseur et transformateur JSON rapide et minimal qui fonctionne sur du JSON non structuré.
- [vjson](https://github.com/miladibra10/vjson) - Paquet Go pour valider des objets JSON en déclarant un schéma JSON à l'aide d'une API fluide.

**[⬆ retour en haut](#contents)**

## Journalisation

_Bibliothèques pour générer des fichiers journaux et travailler avec eux._

- [caarlos0/log](https://github.com/caarlos0/log) - Logger CLI coloré.
- [distillog](https://github.com/amoghe/distillog) - journalisation par niveaux épurée (pensez bibliothèque standard + niveaux de journalisation).
- [glg](https://github.com/kpango/glg) - glg est une bibliothèque de journalisation par niveaux simple et rapide pour Go.
- [glo](https://github.com/lajosbencz/glo) - Outil de journalisation inspiré de Monolog (PHP), avec des niveaux de gravité identiques.
- [glog](https://github.com/golang/glog) - Journaux d'exécution par niveaux pour Go.
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - Writer simple qui effectue automatiquement la rotation des fichiers journaux en fonction de la date et de l'heure, comme cronolog.
- [go-log](https://github.com/pieterclaerhout/go-log) - Une bibliothèque de journalisation avec traces de pile, vidage d'objets et horodatages optionnels.
- [go-log](https://github.com/subchen/go-log) - Journalisation simple et configurable en Go, avec niveaux, formateurs et writers.
- [go-log](https://github.com/siddontang/go-log) - Bibliothèque de journalisation prenant en charge les niveaux et plusieurs gestionnaires.
- [go-log](https://github.com/ian-kent/go-log) - Implémentation de Log4j en Go.
- [go-log4g](https://github.com/go-log4g/core) - Log4g fournit une configuration et des mises en forme par motifs à la Log4j pour la façade de journalisation standard log/slog de Go.
- [go-logger](https://github.com/apsdehal/go-logger) - Logger simple pour les programmes Go, avec gestionnaires par niveau.
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - Gestionnaire slog en ajout seul, chaîné par hachage et éventuellement signé en Ed25519, avec vérification hors ligne des falsifications.
- [gone/log](https://github.com/One-com/gone/tree/master/log) - Bibliothèque de journalisation rapide, extensible, complète et compatible au niveau source avec la bibliothèque standard.
- [gslog](https://github.com/maguro/gslog) - Gestionnaire Google Cloud Logging pour log/slog, avec trace et baggage OpenTelemetry et libellés podinfo de Kubernetes.
- [httpretty](https://github.com/henvic/httpretty) - Affiche joliment vos requêtes HTTP dans le terminal pour le débogage (similaire à http.DumpRequest).
- [journald](https://github.com/ssgreg/journald) - Implémentation Go de l'API native de journalisation du journal systemd.
- [kemba](https://github.com/clok/kemba) - Un tout petit outil de journalisation de débogage inspiré de [debug](https://github.com/visionmedia/debug), idéal pour les outils et applications en ligne de commande.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Une TUI pour lire et filtrer les journaux de journalctl, du système de fichiers, des conteneurs Docker et Podman ainsi que des pods Kubernetes.
- [log](https://github.com/aerogo/log) - Un système de journalisation en O(1) qui permet de connecter un journal à plusieurs writers (par ex. stdout, un fichier et une connexion TCP).
- [log](https://github.com/apex/log) - Paquet de journalisation structurée pour Go.
- [log](https://github.com/go-playground/log) - Journalisation structurée simple, configurable et évolutive pour Go.
- [log](https://github.com/teris-io/log) - Interface de journalisation structurée pour Go qui sépare proprement la façade de journalisation de son implémentation.
- [log](https://github.com/heartwilltell/log) - Surcouche simple de journalisation par niveaux autour du paquet log standard.
- [log](https://github.com/no-src/log) - Un framework de journalisation simple, prêt à l'emploi.
- [log15](https://github.com/inconshreveable/log15) - Journalisation simple et puissante pour Go.
- [logdump](https://github.com/ewwwwwqm/logdump) - Paquet de journalisation multi-niveaux.
- [logex](https://github.com/chzyer/logex) - Bibliothèque de journalisation Golang prenant en charge le traçage et les niveaux, construite autour de la bibliothèque log standard.
- [logger](https://github.com/azer/logger) - Bibliothèque de journalisation minimaliste pour Go.
- [logo](https://github.com/mbndr/logo) - Logger Golang vers différents writers configurables.
- [logrus](https://github.com/Sirupsen/logrus) - Logger structuré pour Go.
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - Implémentation d'`io.Writer` utilisant le logger [logrus](https://github.com/sirupsen/logrus).
- [logrusly](https://github.com/sebest/logrusly) - Plugin [logrus](https://github.com/sirupsen/logrus) pour envoyer les erreurs vers [Loggly](https://www.loggly.com/).
- [logutils](https://github.com/hashicorp/logutils) - Utilitaires pour une journalisation un peu meilleure en Go (Golang), qui étendent le logger standard.
- [logxi](https://github.com/mgutz/logxi) - Logger pour applications 12-factor, rapide et qui vous rend heureux.
- [lumberjack](https://github.com/natefinch/lumberjack) - Logger simple à rotation, qui implémente io.WriteCloser.
- [mlog](https://github.com/jbrodriguez/mlog) - Module de journalisation simple pour Go, avec 5 niveaux, une rotation optionnelle des fichiers journaux et une sortie stdout/stderr.
- [noodlog](https://github.com/gyozatech/noodlog) - Bibliothèque de journalisation JSON paramétrable qui permet de masquer les données sensibles et de sérialiser n'importe quel type de contenu. Fini les pointeurs affichés à la place des valeurs et les caractères d'échappement dans les chaînes JSON.
- [onelog](https://github.com/francoispqt/onelog) - Onelog est un logger JSON d'une simplicité enfantine mais très efficace. C'est le logger JSON le plus rapide dans tous les scénarios. C'est aussi l'un des loggers qui allouent le moins de mémoire.
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - Journalisation haute performance prenant en charge la gravité, la catégorisation et le filtrage des journaux. Peut envoyer les messages filtrés vers diverses cibles (par ex. console, réseau, e-mail).
- [phuslu/log](https://github.com/phuslu/log) - Journalisation structurée haute performance.
- [pp](https://github.com/k0kubun/pp) - Affichage formaté en couleur pour le langage Go.
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter est une implémentation d'`io.Writer` à rotation automatique, avec plusieurs politiques de rotation des fichiers journaux.
- [seelog](https://github.com/cihub/seelog) - Fonctionnalités de journalisation avec répartition, filtrage et formatage flexibles.
- [sentry-go](https://github.com/getsentry/sentry-go) - SDK Sentry pour Go. Aide à surveiller et suivre les erreurs, avec des alertes en temps réel et la surveillance des performances.
- [slf4g](https://github.com/echocat/slf4g) - Simple Logging Facade pour Golang : une journalisation structurée simple, mais puissante, extensible et personnalisable, qui tire parti de décennies d'expérience des frameworks de journalisation passés.
- [slog](https://github.com/gookit/slog) - Logger léger, configurable et extensible pour Go.
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - Configure le logger log/slog de la bibliothèque standard à partir de variables d'environnement : niveau, format, emplacement dans le source et séparation stdout/stderr.
- [slog-datadog](https://github.com/samber/slog-datadog) - Un gestionnaire slog pour Datadog.
- [slog-formatter](https://github.com/samber/slog-formatter) - Formateurs courants pour slog et fonctions utilitaires pour créer les vôtres.
- [slog-logrus](https://github.com/samber/slog-logrus) - Un gestionnaire slog pour Logrus.
- [slog-loki](https://github.com/samber/slog-loki) - Un gestionnaire slog pour Grafana Loki.
- [slog-multi](https://github.com/samber/slog-multi) - Chaînage de slog.Handler (pipeline, fanout...).
- [slog-sentry](https://github.com/samber/slog-sentry) - Un gestionnaire slog pour Sentry.
- [slog-slack](https://github.com/samber/slog-slack) - Un gestionnaire slog pour Slack.
- [slog-zap](https://github.com/samber/slog-zap) - Un gestionnaire slog pour Zap.
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Un gestionnaire slog pour Zerolog.
- [slogor](https://gitlab.com/greyxor/slogor) - Un gestionnaire slog coloré.
- [spew](https://github.com/davecgh/go-spew) - Implémente un affichage formaté en profondeur des structures de données Go pour faciliter le débogage.
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Un logger pour les pilotes de bases de données SQL Go, sans modifier l'utilisation existante de \*sql.DB de la bibliothèque standard.
- [stdlog](https://github.com/alexcesaro/log) - Stdlog est une bibliothèque orientée objet de journalisation par niveaux. Elle est très utile pour les tâches cron.
- [structy/log](https://github.com/structy/log) - Un système de journalisation simple à utiliser, minimaliste mais doté de fonctionnalités de débogage et de différenciation des messages.
- [tail](https://github.com/hpcloud/tail) - Paquet Go qui s'efforce d'émuler les fonctionnalités du programme tail de BSD.
- [timberjack](https://github.com/DeRuina/timberjack) - Logger à rotation selon la taille, la durée ou une horloge planifiée, avec compression et nettoyage.
- [tint](https://github.com/lmittmann/tint) - Un slog.Handler qui écrit des journaux colorés.
- [xlog](https://github.com/xfxdev/xlog) - Architecture à plugins et système de journalisation flexible pour Go, avec contrôle des niveaux, cibles multiples et format de journal personnalisé.
- [xlog](https://github.com/rs/xlog) - Logger structuré pour les gestionnaires HTTP compatibles avec `net/context`, avec répartition flexible.
- [xylog](https://github.com/xybor-x/xylog) - Journalisation par niveaux et structurée, champs dynamiques, haute performance, gestion des zones, configuration simple et syntaxe lisible.
- [yell](https://github.com/jfcg/yell) - Encore une bibliothèque de journalisation minimaliste.
- [zap](https://github.com/uber-go/zap) - Journalisation rapide, structurée et par niveaux en Go.
- [zax](https://github.com/yuseferi/zax) - Intègre Context au logger Zap, pour plus de flexibilité dans la journalisation Go.
- [zerolog](https://github.com/rs/zerolog) - Logger JSON sans allocation.
- [zkits-logger](https://github.com/edoger/zkits-logger) - Un puissant logger JSON sans dépendance.
- [zl](https://github.com/nkmr-jp/zl) - Logger fondé sur zap et offrant une excellente expérience développeur. Il propose de riches fonctionnalités tout en restant facile à configurer.

**[⬆ retour en haut](#contents)**

## Apprentissage automatique

_Bibliothèques d'apprentissage automatique._

- [Anneal](https://github.com/georgebuilds/anneal) - Compilateur d'apprentissage automatique en Go, un portage de tinygrad réécrit de zéro avec un backend WebGPU.
- [bayesian](https://github.com/jbrukh/bayesian) - Classification bayésienne naïve pour Golang.
- [born](https://github.com/born-ml/born) - Framework d'apprentissage profond inspiré de Burn (Rust), avec différentiation automatique, tenseurs typés de façon sûre et accélération GPU sans CGO.
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - Bibliothèque de gradient boosting sur arbres de décision rapide, évolutive et haute performance. En Golang, avec Cgo pour une inférence ultra-rapide des modèles CatBoost.
- [CloudForest](https://github.com/ryanbressler/CloudForest) - Ensembles d'arbres de décision rapides, flexibles et multithreads pour l'apprentissage automatique en Go pur.
- [datatrax](https://github.com/rbmuller/datatrax) - Boîte à outils d'ingénierie des données et d'apprentissage automatique classique avec traitement par lots, coercition de types et 7 algorithmes, en Go pur et sans dépendance.
- [ddt](https://github.com/sgrodriguez/ddt) - Arbre de décision dynamique : créez des arbres en définissant des règles personnalisables.
- [eaopt](https://github.com/MaxHalford/eaopt) - Une bibliothèque d'optimisation évolutionnaire.
- [evoli](https://github.com/khezen/evoli) - Bibliothèque d'algorithmes génétiques et d'optimisation par essaims particulaires.
- [fonet](https://github.com/Fontinalis/fonet) - Une bibliothèque de réseaux de neurones profonds écrite en Go.
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - Implémentation Go des algorithmes de clustering k-modes et k-prototypes.
- [go-deep](https://github.com/patrikeh/go-deep) - Une bibliothèque de réseaux de neurones riche en fonctionnalités, en Go.
- [go-fann](https://github.com/white-pony/go-fann) - Liaisons Go pour la bibliothèque Fast Artificial Neural Networks (FANN).
- [go-galib](https://github.com/thoj/go-galib) - Bibliothèque d'algorithmes génétiques écrite en Go / golang.
- [go-pr](https://github.com/daviddengcn/go-pr) - Paquet de reconnaissance de formes en langage Go.
- [gobrain](https://github.com/goml/gobrain) - Réseaux de neurones écrits en Go.
- [godist](https://github.com/e-dard/godist) - Diverses distributions de probabilité et méthodes associées.
- [goga](https://github.com/tomcraven/goga) - Bibliothèque d'algorithmes génétiques pour Go.
- [GoLearn](https://github.com/sjwhitworth/golearn) - Bibliothèque d'apprentissage automatique généraliste pour Go.
- [GoMind](https://github.com/surenderthakran/gomind) - Une bibliothèque de réseaux de neurones simpliste en Go.
- [goml](https://github.com/cdipaolo/goml) - Apprentissage automatique en ligne en Go.
- [GoMLX](https://github.com/gomlx/gomlx) - Un framework d'apprentissage automatique accéléré pour Go.
- [gonet](https://github.com/dathoangnd/gonet) - Réseau de neurones pour Go.
- [Goptuna](https://github.com/c-bata/goptuna) - Framework d'optimisation bayésienne des fonctions boîte noire, écrit en Go. Tout sera optimisé.
- [goRecommend](https://github.com/timkaye11/goRecommend) - Bibliothèque d'algorithmes de recommandation écrite en Go.
- [gorgonia](https://github.com/gorgonia/gorgonia) - bibliothèque de calcul fondée sur les graphes, comme Theano, pour Go, qui fournit des primitives pour construire divers algorithmes d'apprentissage automatique et de réseaux de neurones.
- [gorse](https://github.com/zhenghaoz/gorse) - Un backend de système de recommandation hors ligne fondé sur le filtrage collaboratif, écrit en Go.
- [goscore](https://github.com/asafschers/goscore) - API de scoring Go pour PMML.
- [gosseract](https://github.com/otiai10/gosseract) - Paquet Go d'OCR (reconnaissance optique de caractères) utilisant la bibliothèque C++ Tesseract.
- [hugot](https://github.com/knights-analytics/hugot) - Pipelines de transformers Hugging Face pour Golang avec onnxruntime.
- [libsvm](https://github.com/datastream/libsvm) - Version Golang de libsvm, œuvre dérivée fondée sur LIBSVM 3.14.
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Un outil CLI pour transpiler des modèles d'apprentissage automatique classiques entraînés en code Go natif sans dépendance ; écrit en Python, avec prise en charge du langage Go.
- [neural-go](https://github.com/schuyler/neural-go) - Réseau de perceptrons multicouche implémenté en Go, avec entraînement par rétropropagation.
- [ocrserver](https://github.com/otiai10/ocrserver) - Un serveur d'API OCR simple, vraiment facile à déployer avec Docker et Heroku.
- [onnx-go](https://github.com/owulveryck/onnx-go) - Interface Go pour Open Neural Network Exchange (ONNX).
- [probab](https://github.com/ThePaw/probab) - Fonctions de distribution de probabilité. Inférence bayésienne. Écrit en Go pur.
- [randomforest](https://github.com/malaschitz/randomForest) - Bibliothèque de forêts aléatoires facile à utiliser pour Go.
- [regommend](https://github.com/muesli/regommend) - Moteur de recommandation et de filtrage collaboratif.
- [shield](https://github.com/eaigner/shield) - Classificateur de texte bayésien pour Go, avec des tokeniseurs et des backends de stockage flexibles.
- [tfgo](https://github.com/galeone/tfgo) - Liaisons TensorFlow faciles à utiliser : simplifie l'utilisation des liaisons Go officielles de TensorFlow. Définissez des graphes de calcul en Go, chargez et exécutez des modèles entraînés en Python.
- [Varis](https://github.com/Xamber/Varis) - Réseau de neurones en Golang.

**[⬆ retour en haut](#contents)**

## Messagerie

_Bibliothèques qui implémentent des systèmes de messagerie._

- [ami](https://github.com/kak-tus/ami) - Client Go pour des files d'attente fiables fondées sur les streams de Redis Cluster.
- [amqp](https://github.com/rabbitmq/amqp091-go) - Bibliothèque cliente RabbitMQ pour Go.
- [APNs2](https://github.com/sideshow/apns2) - Fournisseur Apple Push Notification HTTP/2 pour Go : envoyez des notifications push aux applications iOS, tvOS, Safari et OS X.
- [Asynq](https://github.com/hibiken/asynq) - Une file de tâches distribuée simple, fiable et efficace pour Go, construite sur Redis.
- [backlite](https://github.com/mikestefanello/backlite) - Files de tâches embarquées, persistantes et typées de façon sûre, et exécuteur de tâches d'arrière-plan avec SQLite.
- [Beaver](https://github.com/Clivern/Beaver) - Un serveur de messagerie en temps réel pour créer des notifications intégrées, des jeux multijoueurs et des applications de discussion évolutifs dans les applications web et mobiles.
- [broker](https://github.com/qvcloud/broker) - Abstraction de messagerie de qualité production, avec une API unifiée pour divers brokers et une intégration OpenTelemetry intégrée.
- [Bus](https://github.com/mustafaturan/bus) - Implémentation minimaliste de bus de messages pour la communication interne.
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Serveur de messagerie en temps réel (WebSockets ou SockJS) en Go.
- [Chanify](https://github.com/chanify/chanify) - Un serveur de notifications push qui envoie des messages à vos appareils iOS.
- [Commander](https://github.com/jeroenrinzema/commander) - Un consommateur/producteur de haut niveau orienté événements, prenant en charge divers « dialectes » tels qu'Apache Kafka.
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go est le client Golang de Confluent pour Apache Kafka et la Confluent Platform.
- [dbus](https://github.com/godbus/dbus) - Liaisons Go natives pour D-Bus.
- [drone-line](https://github.com/appleboy/drone-line) - Envoi de notifications [Line](https://at.line.me/en) à l'aide d'un binaire, de Docker ou de Drone CI.
- [emitter](https://github.com/olebedev/emitter) - Émet des événements à la manière de Go, avec jokers, prédicats, possibilités d'annulation et bien d'autres avantages.
- [event](https://github.com/agoalofalife/event) - Implémentation du patron Observateur.
- [EventBus](https://github.com/asaskevich/EventBus) - Le bus d'événements léger compatible avec l'asynchrone.
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Client Gaurun écrit en Go.
- [Glue](https://github.com/desertbit/glue) - Bibliothèque de sockets robuste pour Go et JavaScript (alternative à Socket.io).
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Paquet de bus d'événements simple pour Go.
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - Une bibliothèque pour gérer le patron Médiateur et des patrons CQRS simplifiés dans une architecture orientée événements, inspirée de la bibliothèque C# MediatR.
- [go-mq](https://github.com/cheshir/go-mq) - Client RabbitMQ avec configuration déclarative.
- [go-notify](https://github.com/TheCreeper/go-notify) - Implémentation native de la spécification de notifications freedesktop.
- [go-nsq](https://github.com/nsqio/go-nsq) - le paquet Go officiel pour NSQ.
- [go-res](https://github.com/jirenius/go-res) - Paquet pour créer des services REST/temps réel où les clients sont synchronisés de manière transparente, à l'aide de NATS et Resgate.
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Bibliothèque cliente pour le service web Vitotrol de Viessmann.
- [GoEventBus](https://github.com/Raezil/GoEventBus) - Une bibliothèque de bus d'événements en mémoire, sans verrou et ultra-rapide
- [Gollum](https://github.com/trivago/gollum) - Un multiplexeur n:m qui rassemble les messages de différentes sources et les diffuse vers un ensemble de destinations.
- [golongpoll](https://github.com/jcuga/golongpoll) - Bibliothèque de serveur HTTP à long polling qui simplifie le pub/sub sur le web.
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster est un cluster de serveurs push en Go.
- [gorush](https://github.com/appleboy/gorush) - Serveur de notifications push utilisant [APNs2](https://github.com/sideshow/apns2) et [GCM](https://github.com/google/go-gcm) de Google.
- [gosd](https://github.com/alexsniffin/gosd) - Une bibliothèque pour planifier le moment d'envoi d'un message vers un canal.
- [guble](https://github.com/smancke/guble) - Serveur de messagerie utilisant les notifications push (Google Firebase Cloud Messaging, Apple Push Notification services, SMS) ainsi que les WebSockets et une API REST, avec fonctionnement distribué et persistance des messages.
- [hare](https://github.com/leozz37/hare) - Une bibliothèque conviviale pour envoyer des messages et écouter des sockets TCP.
- [hub](https://github.com/leandro-lugaresi/hub) - Un hub de messages/d'événements pour les applications Go, utilisant le patron publication/abonnement avec prise en charge d'alias comme les exchanges de RabbitMQ.
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Confronte des événements à de grands ensembles de règles, écrites en Go ou en JSON.
- [jazz](https://github.com/socifi/jazz) - Une couche d'abstraction RabbitMQ simple pour l'administration des files ainsi que la publication et la consommation de messages.
- [kiln](https://github.com/rafaelaugustos/kiln) - Tâches d'arrière-plan persistantes dans PostgreSQL, MySQL ou SQLite, avec nouvelles tentatives, workflows, tâches récurrentes et tableau de bord.
- [machinery](https://github.com/RichardKnop/machinery) - File de tâches asynchrone fondée sur le passage de messages distribué.
- [mangos](https://github.com/nanomsg/mangos) - Implémentation en Go pur de Nanomsg (« Scalability Protocols »), avec interopérabilité des transports.
- [melody](https://github.com/olahol/melody) - Framework minimaliste pour gérer les sessions WebSocket, avec diffusion et gestion automatique des ping/pong.
- [Mercure](https://github.com/dunglas/mercure) - Serveur et bibliothèque pour diffuser des mises à jour envoyées par le serveur à l'aide du protocole Mercure (construit sur les Server-Sent Events).
- [messagebus](https://github.com/vardius/message-bus) - messagebus est un bus de messages asynchrone simple en Go, parfait comme bus d'événements pour l'event sourcing, le CQRS et le DDD.
- [NATS Go Client](https://github.com/nats-io/nats.go) - Client Go pour le système de messagerie
  NATS.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - Une toute petite surcouche autour des topics et canaux NSQ.
- [oplog](https://github.com/dailymotion/oplog) - Système générique d'oplog/de réplication pour les API REST.
- [pubsub](https://github.com/tuxychandru/pubsub) - Paquet pub/sub simple pour Go.
- [Quamina](https://github.com/timbray/quamina) - Correspondance de motifs rapide pour filtrer les messages et les événements.
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - Bibliothèque légère qui gère la reconnexion automatique à RabbitMQ et les nouvelles tentatives de publication. Elle tient compte de la nécessité de redéclarer les entités dans RabbitMQ après une reconnexion.
- [rabbus](https://github.com/rafaeljesus/rabbus) - Une toute petite surcouche des exchanges et files AMQP.
- [rabtap](https://github.com/jandelgado/rabtap) - Application CLI couteau suisse pour RabbitMQ.
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ est une bibliothèque légère et fiable pour gérer une file de messages locale.
- [Ratus](https://github.com/hyperonym/ratus) - Ratus est un serveur de file de tâches asynchrone RESTful.
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue fournit un producteur et un consommateur pour une file utilisant les streams Redis.
- [rmqconn](https://github.com/sbabiv/rmqconn) - Reconnexion à RabbitMQ. Surcouche d'amqp.Connection et d'amqp.Dial qui permet de se reconnecter lorsque la connexion est rompue, jusqu'à ce que la méthode Close () soit explicitement appelée pour la fermer.
- [sarama](https://github.com/Shopify/sarama) - Bibliothèque Go pour Apache Kafka.
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - Service push unifié reposant sur Redis pour envoyer des notifications côté serveur aux appareils mobiles.
- [varmq](https://github.com/goptics/varmq) - Une file de messages indépendante du stockage et un pool de workers pour les programmes Go concurrents.
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - Travaillez efficacement avec des flux de messages. Créez des applications orientées événements, avec event sourcing, RPC par messages et sagas. Peut utiliser des implémentations pub/sub classiques comme Kafka ou RabbitMQ, mais aussi HTTP ou le binlog MySQL.
- [zmq4](https://github.com/pebbe/zmq4) - Interface Go pour ZeroMQ version 4. Également disponible pour la [version 3](https://github.com/pebbe/zmq3) et la [version 2](https://github.com/pebbe/zmq2).

**[⬆ retour en haut](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Bibliothèque en Go pur pour créer et traiter des documents Office Word (.docx), Excel (.xlsx) et PowerPoint (.pptx).

### Microsoft Excel

_Bibliothèques pour travailler avec Microsoft Excel._

- [cellwalker](https://github.com/chonla/cellwalker) - Parcourez virtuellement Excel, cellule par cellule, par leur nom.
- [excelize](https://github.com/xuri/excelize) - Bibliothèque Golang pour lire et écrire des fichiers Microsoft Excel&trade; (XLSX).
- [exl](https://github.com/go-the-way/exl) - Liaison de feuilles Excel à des structures, écrite en Go (ne prend en charge que Go 1.18+).
- [go-excel](https://github.com/szyhf/go-excel) - Un lecteur simple et léger pour lire comme une table un fichier Excel structuré comme une base de données relationnelle.
- [xlsx](https://github.com/tealeg/xlsx) - Bibliothèque pour simplifier, dans les programmes Go, la lecture du format XML utilisé par les versions récentes de Microsoft Excel.
- [xlsx](https://github.com/plandem/xlsx) - Moyen rapide et sûr de lire/mettre à jour vos fichiers Microsoft Excel existants dans des programmes Go.

### Microsoft Word

_Bibliothèques pour travailler avec Microsoft Word._

- [godocx](https://github.com/gomutex/godocx) - Bibliothèque pour lire et écrire des fichiers Microsoft Word (Docx).

**[⬆ retour en haut](#contents)**

## Divers

### Injection de dépendances

_Bibliothèques pour travailler avec l'injection de dépendances._

- [alice](https://github.com/magic003/alice) - Conteneur d'injection de dépendances additif pour Golang.
- [autowire](https://github.com/tiendc/autowire) - Injection de dépendances à l'aide des génériques et de la réflexion.
- [boot-go](http://github.com/boot-go/boot) - Développement à base de composants avec injection de dépendances par réflexion, pour les développeurs Go.
- [componego](https://github.com/componego/componego) - Un framework d'injection de dépendances fondé sur les composants, permettant de remplacer dynamiquement les dépendances sans dupliquer de code dans les tests.
- [cosban/di](https://gitlab.com/cosban/di) - Un outil de câblage d'injection de dépendances fondé sur la génération de code.
- [dig](https://github.com/uber-go/dig) - Une boîte à outils d'injection de dépendances fondée sur la réflexion pour Go.
- [dingo](https://github.com/i-love-flamingo/dingo) - Une boîte à outils d'injection de dépendances pour Go, fondée sur Guice.
- [do](https://github.com/samber/do) - Un framework d'injection de dépendances fondé sur les génériques.
- [floatdrop/di](https://github.com/floatdrop/di) - Conteneur d'injection de dépendances construit sur des méthodes génériques, avec portées enfants, hooks de cycle de vie et validation du graphe avant toute construction.
- [fx](https://github.com/uber-go/fx) - Un framework d'applications pour Go fondé sur l'injection de dépendances (construit sur dig).
- [go-beans](https://github.com/go-beans/go) - Framework d'injection de dépendances et de cycle de vie d'applications pour Go, inspiré de Spring.
- [Go-Spring](https://github.com/go-spring/spring-core) - Un framework Go haute performance inspiré de Spring Boot, offrant injection de dépendances, configuration automatique et gestion du cycle de vie, tout en préservant la simplicité et l'efficacité de Go.
- [gocontainer](https://github.com/vardius/gocontainer) - Conteneur d'injection de dépendances simple.
- [godi](https://github.com/junioryono/godi) - Injection de dépendances à la Microsoft pour Go, avec durées de vie par portée et génériques.
- [goioc/di](https://github.com/goioc/di) - Conteneur d'injection de dépendances inspiré de Spring.
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container est un conteneur d'injection de dépendances IoC léger mais puissant pour le langage de programmation Go.
- [gontainer](https://github.com/NVIDIA/gontainer) - Un conteneur de services d'injection de dépendances pour les projets Go.
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - Un conteneur d'injection de dépendances fondé sur YAML pour Go. Il prend en charge les portées des dépendances et la détection automatique des dépendances circulaires. Gontainer est sûr en contexte concurrent.
- [HnH/di](https://github.com/HnH/di) - Bibliothèque de conteneur d'injection de dépendances axée sur une API propre et la flexibilité.
- [kinit](https://github.com/go-kata/kinit) - Conteneur d'injection de dépendances personnalisable, avec mode global, initialisation en cascade et finalisation résistante aux paniques.
- [kod](https://github.com/go-kod/kod) - Un framework d'injection de dépendances fondé sur les génériques pour Go.
- [linker](https://github.com/logrange/linker) - Une bibliothèque d'injection de dépendances et d'inversion de contrôle fondée sur la réflexion, avec prise en charge du cycle de vie des composants.
- [nject](https://github.com/muir/nject) - Un framework réflexif et typé de façon sûre pour les bibliothèques, les tests, les points d'accès HTTP et le démarrage des services.
- [ore](https://github.com/firasdarwish/ore) - Conteneur d'injection de dépendances (DI) léger, générique et simple.
- [parsley](https://github.com/matzefriedrich/parsley) - Une bibliothèque d'injection de dépendances flexible et modulaire fondée sur la réflexion, avec des fonctionnalités avancées comme les contextes à portée et la génération de proxys, conçue pour les applications Go à grande échelle.
- [wire](https://github.com/Fs02/wire) - Injection de dépendances stricte à l'exécution pour Golang.
- [yama](https://github.com/livetribe/yama) - Framework d'injection de dépendances et de cycle de vie à la compilation, qui génère le code de démarrage, de mise au repos et d'arrêt pour les graphes Google Wire.

**[⬆ retour en haut](#contents)**

### Structure de projet

_Ensemble **non officiel** de modèles pour structurer les projets._

- [ardanlabs/service](https://github.com/ardanlabs/service) - Un [kit de démarrage](https://github.com/ardanlabs/service/wiki) pour créer des applications de services web évolutives et de qualité production.
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - Un modèle de base d'application Go pour démarrer rapidement des projets en suivant les bonnes pratiques de production.
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - Permet de lancer rapidement un projet Go à l'aide d'un framework populaire.
- [go-ddd](https://github.com/sklinkert/go-ddd) - Modèle Domain-Driven Design avec CQRS, objets valeur, commandes idempotentes et transactional outbox.
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Exemple de monodépôt pour des microservices gRPC en Go avec Bazel, grpc-gateway, OpenAPI et Kubernetes.
- [go-module](https://github.com/octomation/go-module) - Modèle pour un module typique écrit en Go.
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - Base d'API REST Go adaptée à l'IA et prête pour la production, avec architecture propre, authentification JWT, RBAC, PostgreSQL, rechargement à chaud sous Docker et documentation Swagger.
- [go-sample](https://github.com/zitryss/go-sample) - Un exemple de structure pour des projets d'applications Go, avec du code réel.
- [go-starter](https://github.com/allaboutapps/go-starter) - Un modèle de backend JSON RESTful prêt pour la production et aux choix affirmés, très intégré aux DevContainers de VSCode.
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - Exemple de backend Todo en Go utilisant une structure de projet modulaire pour un microservice produit.
- [goapp](https://github.com/naughtygopher/goapp) - Un guide aux choix affirmés pour structurer et développer une application ou un service web en Go.
- [gobase](https://github.com/wajox/gobase) - Un squelette simple d'application Golang avec une configuration de base pour une vraie application Golang.
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Ensemble de modèles de structure de projet courants, historiques et émergents, de l'écosystème Go. Remarque : malgré le nom de l'organisation, ils ne représentent pas des standards officiels de Golang ; voir [ce ticket](https://github.com/golang-standards/project-layout/issues/117) pour plus d'informations. Certains peuvent néanmoins trouver cette structure utile.
- [golang-templates/seed](https://github.com/golang-templates/seed) - Modèle de dépôt GitHub pour applications Go.
- [goxygen](https://github.com/shpota/goxygen) - Générez en quelques secondes un projet web moderne avec Go et Angular, React ou Vue.
- [insidieux/inizio](https://github.com/insidieux/inizio) - Générateur de structure de projet Golang avec plugins.
- [kickstart.go](https://github.com/raeperd/kickstart.go) - Modèle minimaliste de serveur HTTP Go en un seul fichier, sans dépendances tierces.
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - Base et exemple d'application Go appliquant des pratiques modernes.
- [nunu](https://github.com/go-nunu/nunu) - Nunu est un outil de génération de squelettes pour créer des applications Go.
- [pagoda](https://github.com/mikestefanello/pagoda) - Kit de démarrage pour un développement web full-stack rapide et facile, construit en Go.
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold génère une structure de projet Go de départ, pour vous laisser vous concentrer sur l'implémentation de la logique métier.
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Ensemble de pratiques et de discussions sur la manière de structurer un projet Go.

**[⬆ retour en haut](#contents)**

### Chaînes de caractères

_Bibliothèques pour travailler avec les chaînes de caractères._

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - Implémentation Go du mécanisme d'expansion des accolades pour générer des chaînes arbitraires.
- [caps](https://github.com/chanced/caps) - Une bibliothèque de conversion de casse.
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - Implémente des chaînes de format avec des **champs de remplacement** entourés d'accolades `{}`.
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - Bibliothèque de manipulation de chaînes pour convertir en camel case, snake case, kebab case / slug, etc.
- [str](https://github.com/schigh/str) - Boîte à outils de chaînes pensée pour les pipelines, pour composer des transformations.
- [strcase](https://github.com/charlievieth/strcase) - Implémentation insensible à la casse des paquets strings/bytes de la bibliothèque standard.
- [stringFormatter](https://github.com/Wissance/stringFormatter) - Formatage de chaînes à la manière de Python ou de C#, avec des fonctionnalités supplémentaires de mise en forme du texte.
- [strutil](https://github.com/ozgio/strutil) - Utilitaires pour les chaînes.
- [sttr](https://github.com/abhimanyu003/sttr) - application CLI multiplateforme pour effectuer diverses opérations sur les chaînes.
- [xstrings](https://github.com/huandu/xstrings) - Collection de fonctions utiles sur les chaînes, portées depuis d'autres langages.

**[⬆ retour en haut](#contents)**

### Non classé

_Ces bibliothèques ont été placées ici car aucune des autres catégories ne semblait convenir._

- [anagent](https://github.com/mudler/anagent) - Gestionnaire de boucle d'événements et de minuteries pour Golang, minimaliste et modulaire, avec injection de dépendances.
- [antch](https://github.com/antchfx/antch) - Un framework d'exploration et de scraping web rapide, puissant et extensible.
- [archives](https://github.com/mholt/archives) - une bibliothèque Go multiplateforme et multiformat pour travailler avec des archives et des formats de compression via une API unifiée, et sous forme de systèmes de fichiers virtuels compatibles avec io/fs.
- [autoflags](https://github.com/artyom/autoflags) - Paquet Go pour définir automatiquement des options de ligne de commande à partir des champs de structures.
- [avgRating](https://github.com/kirillDanshin/avgRating) - Calcule la note moyenne et le classement à partir de l'équation du score de Wilson.
- [banner](https://github.com/dimiro1/banner) - Ajoutez de belles bannières à vos applications Go.
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch prend en charge les captchas à chiffres, nombres, lettres, arithmétiques, audio et alphanumériques.
- [basexx](https://github.com/bobg/basexx) - Conversion vers, depuis et entre des chaînes de chiffres dans diverses bases numériques.
- [battery](https://github.com/distatus/battery) - Bibliothèque multiplateforme d'informations normalisées sur la batterie.
- [bitio](https://github.com/icza/bitio) - Reader et Writer au niveau des bits hautement optimisés pour Go.
- [browscap_go](https://github.com/digitalcrab/browscap_go) - Bibliothèque GoLang pour le [Browser Capabilities Project](https://browscap.org/).
- [captcha](https://github.com/steambap/captcha) - Le paquet captcha fournit une API de génération de captchas facile à utiliser et sans parti pris.
- [common](https://github.com/kubeservice-stack/common) - Une bibliothèque de framework serveur.
- [conv](https://github.com/cstockton/go-conv) - Le paquet conv fournit des conversions rapides et intuitives entre types Go.
- [datacounter](https://github.com/miolini/datacounter) - Compteurs Go pour les readers, writers et http.ResponseWriter.
- [fake-useragent](https://github.com/lib4u/fake-useragent) - Générateur simple et à jour de faux user agents, avec une base de données réelle, en Golang
- [faker](https://github.com/pioz/faker) - Générateur aléatoire de fausses données et de structures pour Go.
- [ffmt](https://github.com/go-ffmt/ffmt) - Embellit l'affichage des données pour les humains.
- [gatus](https://github.com/TwinProduction/gatus) - Tableau de bord automatisé de la santé des services.
- [go-commandbus](https://github.com/lana/go-commandbus) - Un bus de commandes léger et modulaire pour Go.
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Pool d'objets générique pour Golang.
- [go-openapi](https://github.com/go-openapi) - Collection de paquets pour analyser et utiliser des schémas OpenAPI.
- [go-resiliency](https://github.com/eapache/go-resiliency) - Patrons de résilience pour Golang.
- [go-unarr](https://github.com/gen2brain/go-unarr) - Bibliothèque de décompression pour les archives RAR, TAR, ZIP et 7z.
- [gofakeit](https://github.com/brianvoe/gofakeit) - Générateur de données aléatoires écrit en Go.
- [goffi](https://github.com/go-webgpu/goffi) - FFI en Go pur avec une interface d'appel typée à la libffi et une gestion structurée des erreurs, pour appeler des bibliothèques C sans CGO.
- [gommit](https://github.com/antham/gommit) - Analyse les messages de commit Git pour s'assurer qu'ils suivent les modèles définis.
- [gopsutil](https://github.com/shirou/gopsutil) - Bibliothèque multiplateforme pour obtenir l'utilisation des processus et du système (CPU, mémoire, disques, etc.).
- [gosh](https://github.com/osamingo/gosh) - Fournit un gestionnaire, des structures et des méthodes de mesure de statistiques pour Go.
- [gosms](https://github.com/haxpax/gosms) - Votre propre passerelle SMS locale en Go, utilisable pour envoyer des SMS.
- [gotoprom](https://github.com/cabify/gotoprom) - Bibliothèque de construction de métriques typée de façon sûre, encapsulant le client Prometheus officiel.
- [gountries](https://github.com/pariz/gountries) - Paquet qui expose des données sur les pays et leurs subdivisions.
- [gtree](https://github.com/ddddddO/gtree) - Fournit une CLI, un paquet et une interface web pour afficher des arborescences et créer des répertoires à partir de Markdown ou par programmation.
- [health](https://github.com/alexliesenfeld/health) - Une bibliothèque de contrôle de santé simple et flexible pour Go.
- [health](https://github.com/dimiro1/health) - Bibliothèque de contrôle de santé facile à utiliser et extensible.
- [healthcheck](https://github.com/etherlabsio/healthcheck) - Un gestionnaire HTTP de contrôle de santé concurrent et aux choix affirmés pour les services RESTful.
- [hostutils](https://github.com/Wing924/hostutils) - Une bibliothèque Golang pour empaqueter et dépaqueter des listes de FQDN.
- [indigo](https://github.com/osamingo/indigo) - Générateur distribué d'identifiants uniques utilisant Sonyflake et encodés en Base58.
- [lk](https://github.com/hyperboloide/lk) - Une bibliothèque de gestion de licences simple pour Golang.
- [llvm](https://github.com/llir/llvm) - Bibliothèque pour interagir avec la représentation intermédiaire LLVM (LLVM IR) en Go pur.
- [metrics](https://github.com/pascaldekloe/metrics) - Bibliothèque d'instrumentation de métriques et d'exposition pour Prometheus.
- [morse](https://github.com/alwindoss/morse) - Bibliothèque de conversion vers et depuis le code Morse.
- [numa](https://github.com/lrita/numa) - NUMA est une bibliothèque utilitaire écrite en Go. Elle aide à écrire du code tenant compte de l'architecture NUMA.
- [pdfgen](https://github.com/hyperboloide/pdfgen) - Service HTTP pour générer des PDF à partir de requêtes JSON.
- [persian](https://github.com/mavihq/persian) - Quelques utilitaires pour la langue persane en Go.
- [purego](https://github.com/ebitengine/purego) - Une bibliothèque pour appeler des fonctions C depuis Go sans Cgo.
- [sandid](https://github.com/aofei/sandid) - Chaque grain de sable sur Terre a son propre identifiant.
- [shellwords](https://github.com/Wing924/shellwords) - Une bibliothèque Golang pour manipuler des chaînes selon les règles de découpage en mots du Bourne shell UNIX.
- [shortid](https://github.com/teris-io/shortid) - Génération distribuée d'identifiants très courts, uniques, non séquentiels et adaptés aux URL.
- [shoutrrr](https://github.com/containrrr/shoutrrr) - Bibliothèque de notifications offrant un accès facile à divers services de messagerie comme Slack, Mattermost, Gotify et SMTP, entre autres.
- [sitemap-format](https://github.com/mingard/sitemap-format) - Un générateur de sitemap simple, avec un peu de sucre syntaxique.
- [stateless](https://github.com/qmuntal/stateless) - Une bibliothèque fluide pour créer des machines à états.
- [stats](https://github.com/go-playground/stats) - Surveille les MemStats de Go et des statistiques système comme la mémoire, le swap et le CPU, et les envoie via UDP où vous le souhaitez pour la journalisation, etc.
- [turtle](https://github.com/hackebrot/turtle) - Des emojis pour Go.
- [url-shortener](https://github.com/pantrif/url-shortener) - Un microservice de raccourcissement d'URL moderne, puissant et robuste, avec prise en charge de MySQL.
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - Génère le code répétitif de gestion des entrées et sorties HTTP.
- [varint](https://github.com/chmike/varint) - Un encodeur/décodeur d'entiers de longueur variable plus rapide que celui de la bibliothèque standard.
- [xdg](https://github.com/rkoesters/xdg) - Spécifications FreeDesktop.org (xdg) implémentées en Go.
- [xkg](https://github.com/go-xkg/xkg) - Capture du clavier sous X (X Keyboard Grabber).
- [xz](https://github.com/ulikunitz/xz) - Paquet en Golang pur pour lire et écrire des fichiers compressés en xz.
**[⬆ retour en haut](#contents)**

## Traitement automatique du langage naturel

_Bibliothèques pour travailler avec les langues humaines._

Voir aussi [Traitement de texte](#text-processing) et [Analyse de texte](#text-analysis).

### Détection de langue

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - Client Go de l'API Language Detection. Prend en charge les requêtes par lots et la détection de la langue de courtes phrases ou de mots isolés.
- [getlang](https://github.com/rylans/getlang) - Paquet rapide de détection de la langue naturelle.
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Fonctions pour déterminer la langue naturelle d'un texte Unicode.
- [lingua-go](https://github.com/pemistahl/lingua-go) - Une bibliothèque précise de détection de la langue naturelle, adaptée aux textes longs comme courts. Prend en charge la détection de plusieurs langues dans un texte multilingue.
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Paquet de détection de la langue naturelle pour Go. Prend en charge 84 langues et 24 écritures (systèmes d'écriture comme le latin, le cyrillique, etc.).

### Analyseurs morphologiques

- [go-propisyu](https://github.com/rekurt/go-propisyu) - Convertit des nombres en mots russes, avec le genre grammatical et la déclinaison des noms corrects.
- [go-stem](https://github.com/agonopol/go-stem) - Implémentation de l'algorithme de racinisation de Porter.
- [go2vec](https://github.com/danieldk/go2vec) - Lecteur et fonctions utilitaires pour les embeddings word2vec.
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Liaisons Go pour la bibliothèque libstemmer de Snowball, y compris Porter 2.
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Analyseur de sentiments en Go utilisant le lexique SentiWordNet.
- [govader](https://github.com/jonreiter/govader) - Implémentation Go de [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment).
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - Implémentation sous forme de microservice de [GoVader](https://github.com/jonreiter/govader).
- [kagome](https://github.com/ikawaha/kagome) - Analyseur morphologique du japonais écrit en Go pur.
- [libtextcat](https://github.com/goodsign/libtextcat) - Liaison Cgo pour la bibliothèque C libtextcat. Compatibilité garantie avec la version 2.2.
- [nlp](https://github.com/james-bowman/nlp) - Bibliothèque Go de traitement du langage naturel prenant en charge la LSA (analyse sémantique latente).
- [paicehusk](https://github.com/rookii/paicehusk) - Implémentation Golang de l'algorithme de racinisation de Paice/Husk.
- [porter](https://github.com/a2800276/porter) - Il s'agit d'un portage assez direct de l'implémentation C, par Martin Porter, de l'algorithme de racinisation de Porter.
- [porter2](https://github.com/zhenjl/porter2) - Raciniseur Porter 2 vraiment rapide.
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Portage Go de l'algorithme Rapid Automatic Keyword Extraction (RAKE).
- [snowball](https://github.com/goodsign/snowball) - Portage du raciniseur Snowball (surcouche cgo) pour Go. Fournit la fonctionnalité d'extraction des racines de mots de [Snowball natif](http://snowball.tartarus.org/).
- [spaGO](https://github.com/nlpodyssey/spago) - Bibliothèque autonome d'apprentissage automatique et de traitement du langage naturel en Go.
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - Un correcteur orthographique pour l'espagnol, ou pour créer le vôtre.

### Générateurs de slugs

- [go-slugify](https://github.com/mozillazg/go-slugify) - Crée de jolis slugs, avec prise en charge de plusieurs langues.
- [slug](https://github.com/gosimple/slug) - Génération de slugs adaptés aux URL, avec prise en charge de plusieurs langues.
- [Slugify](https://github.com/avelino/slugify) - Application Go de génération de slugs à partir de chaînes.

### Tokeniseurs

- [gojieba](https://github.com/yanyiwu/gojieba) - Il s'agit d'une implémentation Go de [jieba](https://github.com/fxsjy/jieba), un algorithme de segmentation des mots chinois.
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - Un tokeniseur pour Golang fondé sur un dictionnaire et des modèles de langage à bigrammes (ne prend actuellement en charge que la segmentation du chinois).
- [gse](https://github.com/go-ego/gse) - Segmentation de texte efficace en Go ; prend en charge l'anglais, le chinois, le japonais et d'autres langues.
- [MMSEGO](https://github.com/awsong/MMSEGO) - Il s'agit d'une implémentation Go de [MMSEG](http://technology.chtsai.org/mmseg/), un algorithme de segmentation des mots chinois.
- [segment](https://github.com/blevesearch/segment) - Bibliothèque Go de segmentation de texte Unicode telle que décrite dans l'[Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/)
- [sentences](https://github.com/neurosnap/sentences) - Tokeniseur de phrases : convertit un texte en liste de phrases.
- [shamoji](https://github.com/osamingo/shamoji) - shamoji est un paquet de filtrage de mots écrit en Go.
- [stemmer](https://github.com/dchest/stemmer) - Paquets de racinisation pour le langage de programmation Go. Comprend des raciniseurs pour l'anglais et l'allemand.
- [textcat](https://github.com/pebbe/textcat) - Paquet Go de catégorisation de texte fondée sur les n-grammes, avec prise en charge de l'UTF-8 et du texte brut.

### Traduction

- [ctxi18n](https://github.com/invopop/ctxi18n/) - i18n tenant compte du contexte, avec une API courte et concise, la pluralisation, l'interpolation et la prise en charge de `fs.FS`. Les définitions de locales en YAML s'appuient sur [Rails i18n](https://guides.rubyonrails.org/i18n.html).
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - Paquet et outil associé pour travailler avec du texte localisé.
- [go-mystem](https://github.com/dveselov/mystem) - Liaisons CGo pour Yandex.Mystem, un analyseur morphologique du russe.
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - Convertisseur de caractères chinois (hanzi) en pinyin (hanyu pinyin).
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Une bibliothèque de tables de mots et de ressources textuelles pour les projets Golang.
- [gotext](https://github.com/leonelquinteros/gotext) - Utilitaires GNU gettext pour Go.
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - Translittère le cyrillique → latin de toutes les manières possibles.
- [spreak](https://github.com/vorlif/spreak) - Bibliothèque flexible de traduction et d'humanisation pour Go, fondée sur les concepts de gettext.
- [t](https://github.com/youthlin/t) - Un autre paquet i18n pour Golang, qui suit le style GNU gettext et prend en charge les fichiers .po/.mo : `t.T (gettext)`, `t.N (ngettext)`, etc. Il contient aussi un outil en ligne de commande, [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate), qui peut extraire les messages des modèles text/html dans un fichier pot.

### Translittération

- [enca](https://github.com/endeveit/enca) - Liaisons cgo minimales pour [libenca](https://cihar.com/software/enca/), qui détecte les encodages de caractères.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - Translittérations ASCII de texte Unicode.
- [gounidecode](https://github.com/fiam/gounidecode) - Translittérateur Unicode (aussi appelé unidecode) pour Go.
- [transliterator](https://github.com/alexsergivan/transliterator) - Fournit une translittération de chaînes à sens unique, avec prise en charge de règles de translittération propres à chaque langue.

**[⬆ retour en haut](#contents)**

## Réseau

_Bibliothèques pour travailler avec les différentes couches du réseau._

- [arp](https://github.com/mdlayher/arp) - Le paquet arp implémente le protocole ARP, tel que décrit dans la RFC 826.
- [bart](https://github.com/gaissmai/bart) - Le paquet bart fournit une table de routage équilibrée (BART, Balanced-Routing-Table) pour des recherches IP vers CIDR très rapides, et plus encore.
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - Le streaming de données Protocol Buffers sur TCP en toute simplicité.
- [canopus](https://github.com/zubairhamed/canopus) - Implémentation client/serveur CoAP (RFC 7252).
- [cdns](https://github.com/junevm/cdns) - Changez de serveurs DNS sans effort depuis le terminal.
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - Proxy de ports TCP/UDP sans configuration, avec démarrage automatique, contrôle d'accès par adresse IP et réglage de la pile réseau au niveau du système.
- [cidranger](https://github.com/yl2chen/cidranger) - Recherche rapide d'IP vers CIDR pour Go.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Client Cloudflare Tunnel (anciennement Argo Tunnel).
- [corsproxy](https://github.com/melihbirim/corsproxy) - Serveur proxy CORS avec protection contre les SSRF, listes d'autorisation/de blocage d'hôtes et authentification optionnelle par clé d'API.
- [dhcp6](https://github.com/mdlayher/dhcp6) - Le paquet dhcp6 implémente un serveur DHCPv6, tel que décrit dans la RFC 3315.
- [dns](https://github.com/miekg/dns) - Bibliothèque Go pour travailler avec le DNS.
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - Framework de capture et de surveillance DNS passive.
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Mesure ce qui arrive réellement aux connexions TCP et UDP établies lorsqu'un pod Kubernetes s'arrête.
- [easytcp](https://github.com/DarthPestilane/easytcp) - Un framework TCP léger écrit en Go (Golang), doté d'un routeur de messages. EasyTCP vous aide à construire un serveur TCP facilement, rapidement et sans douleur.
- [ether](https://github.com/songgao/ether) - Paquet Go multiplateforme pour envoyer et recevoir des trames Ethernet.
- [ethernet](https://github.com/mdlayher/ethernet) - Le paquet ethernet implémente la sérialisation et la désérialisation des trames Ethernet II IEEE 802.3 et des étiquettes VLAN IEEE 802.1Q.
- [event](https://github.com/cheng-zhongliang/event) - Bibliothèque simple de notification d'événements d'E/S écrite en Golang.
- [expose](https://github.com/kernelshard/expose) - Outil de tunnel sécurisé, léger et open source pour exposer des serveurs locaux sur Internet.
- [fasthttp](https://github.com/valyala/fasthttp) - Le paquet fasthttp est une implémentation HTTP rapide pour Go, jusqu'à 10 fois plus rapide que net/http.
- [fibersse](https://github.com/vinod-morya/fibersse) - Server-Sent Events (SSE) de qualité production pour Fiber v3, avec regroupement d'événements, voies prioritaires, jokers de sujets, limitation adaptative et authentification intégrée.
- [fortio](https://github.com/fortio/fortio) - Bibliothèque et outil en ligne de commande de tests de charge, serveur d'écho avancé et interface web. Permet de définir une charge fixe en requêtes par seconde, d'enregistrer des histogrammes de latence et d'autres statistiques utiles, et d'en tracer les graphiques. TCP, HTTP, gRPC.
- [ftp](https://github.com/jlaffaye/ftp) - Le paquet ftp implémente un client FTP tel que décrit dans la [RFC 959](https://tools.ietf.org/html/rfc959).
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - Bibliothèque de serveur FTP complète.
- [fullproxy](https://github.com/shoriwe/fullproxy) - Une boîte à outils complète de proxy et de pivot, scriptable et configurable en démon, avec les protocoles SOCKS5, HTTP, ports bruts et proxy inverse.
- [fwdctl](https://github.com/alegrey91/fwdctl) - Une CLI simple et intuitive pour gérer les redirections IPTables sur votre serveur Linux.
- [gaio](https://github.com/xtaci/gaio) - Réseau en E/S asynchrones haute performance pour Golang, en mode proactor.
- [gev](https://github.com/Allenxuxu/gev) - gev est une bibliothèque réseau TCP non bloquante, légère et rapide, fondée sur le mode Reactor.
- [gldap](https://github.com/jimlambrt/gldap) - gldap fournit une implémentation de serveur LDAP, et c'est vous qui fournissez les gestionnaires de ses opérations LDAP.
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt est une bibliothèque de broker MQTT flexible et haute performance qui implémente entièrement le protocole MQTT V3.1.1.
- [gnet](https://github.com/panjf2000/gnet) - `gnet` est un framework réseau haute performance, léger, non bloquant et orienté événements, écrit en Go pur.
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` est un framework réseau haute performance, conçu notamment pour les serveurs de jeu.
- [gNxI](https://github.com/google/gnxi) - Une collection d'outils de gestion de réseau qui utilisent les protocoles gNMI et gNOI.
- [go-getter](https://github.com/hashicorp/go-getter) - Bibliothèque Go pour télécharger des fichiers ou des répertoires depuis diverses sources à l'aide d'une URL.
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - Bibliothèque pour effectuer des requêtes HTTP via un pool de proxys, offrant tolérance aux pannes, répartition de charge, nouvelles tentatives automatiques, gestion des cookies et plus encore, en remplacement de http.Get/Post ou comme RoundTripper directement utilisable avec http.Client
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - Bibliothèque légère de capture de paquets en direct, avec extraction du SNI HTTPS.
- [go-powerdns](https://github.com/joeig/go-powerdns) - Liaisons de l'API PowerDNS pour Golang.
- [go-sse](https://github.com/lampctl/go-sse) - Implémentation Go client et serveur des server-sent events HTML.
- [go-stun](https://github.com/ccding/go-stun) - Implémentation Go du client STUN (RFC 3489 et RFC 5389).
- [gobgp](https://github.com/osrg/gobgp) - BGP implémenté dans le langage de programmation Go.
- [gopacket](https://github.com/google/gopacket) - Bibliothèque Go de traitement de paquets avec des liaisons libpcap.
- [gopcap](https://github.com/akrennmair/gopcap) - Surcouche Go pour libpcap.
- [GoProxy](https://github.com/elazarl/goproxy) - Une bibliothèque pour créer un serveur proxy HTTP/HTTPS personnalisé en Go.
- [goshark](https://github.com/sunwxg/goshark) - Le paquet goshark utilise tshark pour décoder les paquets IP et créer des structures de données permettant de les analyser.
- [gosnmp](https://github.com/soniah/gosnmp) - Bibliothèque Go native pour effectuer des actions SNMP.
- [gotcp](https://github.com/gansidui/gotcp) - Paquet Go pour écrire rapidement des applications TCP.
- [grab](https://github.com/cavaliercoder/grab) - Paquet Go pour gérer les téléchargements de fichiers.
- [graval](https://github.com/koofr/graval) - Framework expérimental de serveur FTP.
- [gws](https://github.com/lxzan/gws) - Serveur et client WebSocket haute performance, avec prise en charge des E/S asynchrones.
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs vous permet d'inspecter des requêtes HTTP et de forger des réponses.
- [httpproxy](https://github.com/wzshiming/httpproxy) - Gestionnaire et dialer de proxy HTTP.
- [iplib](https://github.com/c-robinson/iplib) - Bibliothèque pour travailler avec les adresses IP (net.IP, net.IPNet), inspirée de [ipaddress](https://docs.python.org/3/library/ipaddress.html) de Python et [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html) de Ruby
- [jazigo](https://github.com/udhos/jazigo) - Jazigo est un outil écrit en Go pour récupérer la configuration de multiples équipements réseau.
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP - Protocole ARQ rapide et fiable.
- [lhttp](https://github.com/fanux/lhttp) - Puissant framework WebSocket pour construire plus facilement votre serveur de messagerie instantanée.
- [linkio](https://github.com/ian-kent/linkio) - Simulation de la vitesse de liens réseau pour les interfaces Reader/Writer.
- [llb](https://github.com/kirillDanshin/llb) - Un backend très simple mais rapide pour serveurs proxy. Utile pour rediriger rapidement vers un domaine prédéfini, sans allocation mémoire et avec une réponse rapide.
- [macwifi](https://github.com/jaisonerick/macwifi) - Analyse des réseaux Wi-Fi et récupération des mots de passe du trousseau pour macOS 13+.
- [mdns](https://github.com/hashicorp/mdns) - Bibliothèque client/serveur mDNS (DNS multicast) simple en Golang.
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Le client Paho Go fournit une bibliothèque cliente MQTT pour se connecter aux brokers MQTT via TCP, TLS ou WebSockets.
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - Une implémentation bas niveau de MQTT, d'une simplicité enfantine et sans allocation, bien adaptée aux systèmes embarqués.
- [nbio](https://github.com/lesismal/nbio) - Solution en Go pur pour plus d'un million de connexions, prenant en charge TLS, HTTP 1.x et WebSocket et largement compatible avec net/http ; haute performance, faible consommation mémoire, non bloquante, orientée événements et facile à utiliser.
- [net](https://golang.org/x/net) - Ce dépôt contient des bibliothèques réseau Go complémentaires.
- [netchan](https://github.com/matveynator/netchan) - Canaux réseau (netchan) pour Golang : sécurisés, prêts pour les clusters, prenant en charge les canaux imbriqués et tout type de données. Inspirés de Rob Pike.
- [nethawk](https://github.com/Flowtriq/nethawk) - Interface en terminal pour la capture et l'analyse du trafic réseau en temps réel et la détection d'attaques, avec un mode de sortie JSON.
- [netpoll](https://github.com/cloudwego/netpoll) - Un framework réseau à E/S non bloquantes haute performance, axé sur les scénarios RPC, développé par ByteDance.
- [NFF-Go](https://github.com/intel-go/nff-go) - Framework pour le développement rapide de fonctions réseau performantes, pour le cloud et le bare-metal (anciennement YANFF).
- [nodepass](https://github.com/NodePassProject/nodepass) - Une solution de tunnel TCP/UDP sécurisée et efficace qui offre un accès rapide et fiable malgré les restrictions réseau, grâce à des connexions TCP/QUIC/WebSocket ou HTTP/2 préétablies.
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - Bibliothèque en Go pur de découverte multiplateforme de pairs locaux par multicast UDP.
- [portproxy](https://github.com/aybabtme/portproxy) - Proxy TCP simple qui ajoute la prise en charge de CORS aux API qui ne l'ont pas.
- [proxq](https://github.com/psyb0t/docker-proxq) - Proxy inverse asynchrone qui met chaque requête en file dans Redis et renvoie un identifiant de tâche à interroger pour obtenir la réponse, avec routage par préfixe de chemin, nouvelles tentatives et mise en cache.
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - Protocole réseau du serveur PostgreSQL. Construisez votre propre serveur et commencez à servir des connexions.
- [publicip](https://github.com/polera/publicip) - Le paquet publicip renvoie votre adresse IPv4 publique (sortie Internet).
- [quic-go](https://github.com/lucas-clemente/quic-go) - Une implémentation du protocole QUIC en Go pur.
- [roamr](https://github.com/sourabh-khot65/roamr) - CLI qui note les réseaux Wi-Fi enregistrés à proximité et vous indique lequel utiliser, et pourquoi.
- [sdns](https://github.com/semihalev/sdns) - Un serveur de résolution DNS récursif haute performance, avec prise en charge de DNSSEC, axé sur la protection de la vie privée.
- [sftp](https://github.com/pkg/sftp) - Le paquet sftp implémente le SSH File Transfer Protocol tel que décrit dans <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt>.
- [ssh](https://github.com/gliderlabs/ssh) - API de plus haut niveau pour construire des serveurs SSH (encapsule crypto/ssh).
- [sslb](https://github.com/eduardonunesp/sslb) - C'est un Super Simples Load Balancer (répartiteur de charge super simple), juste un petit projet pour atteindre une certaine performance.
- [stun](https://github.com/go-rtc/stun) - Implémentation Go du protocole STUN de la RFC 5389.
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack est un protocole applicatif fondé sur TCP pour empaqueter et dépaqueter des flux d'octets dans les programmes Go.
- [tspool](https://github.com/two/tspool) - Une bibliothèque TCP qui utilise un pool de workers pour améliorer les performances et protéger votre serveur.
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - Une implémentation en Go pur de tun2socks, reposant sur la pile TCP/IP de [gVisor](https://gvisor.dev/).
- [utp](https://github.com/anacrolix/utp) - Implémentation Go du protocole de micro-transport uTP.
- [vssh](https://github.com/yahoo/vssh) - Bibliothèque Go pour automatiser des réseaux et des serveurs via le protocole SSH.
- [water](https://github.com/songgao/water) - Bibliothèque TUN/TAP simple.
- [webrtc](https://github.com/pions/webrtc) - Une implémentation en Go pur de l'API WebRTC.
- [winrm](https://github.com/masterzen/winrm) - Client WinRM en Go pour exécuter des commandes à distance sur des machines Windows.
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - Client WebSocket résilient avec reconnexion automatique, temporisation exponentielle et gestion des pulsations.
- [xtcp](https://github.com/xfxdev/xtcp) - Framework de serveur TCP avec communication full-duplex simultanée, arrêt propre et protocole personnalisé.

**[⬆ retour en haut](#contents)**

### Clients HTTP

_Bibliothèques pour effectuer des requêtes HTTP._

- [axios4go](https://github.com/rezmoss/axios4go) - Une bibliothèque cliente HTTP Go inspirée d'Axios, fournissant une API simple et intuitive pour effectuer des requêtes HTTP.
- [azuretls-client](https://github.com/Noooste/azuretls-client) - Un client HTTP facile à utiliser, 100 % en Go, pour usurper les empreintes TLS/JA3 et HTTP2.
- [fast-shot](https://github.com/opus-domini/fast-shot) - Atteignez vos cibles d'API avec une précision de tir rapide grâce au client HTTP le plus rapide et le plus simple de Go.
- [gentleman](https://github.com/h2non/gentleman) - Bibliothèque cliente HTTP complète, pilotée par des plugins.
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - Obtenez facilement un client HTTP de la bibliothèque standard qui ne partage aucun état avec d'autres clients.
- [go-http-client](https://github.com/bozd4g/go-http-client) - Effectuez des appels HTTP simplement et facilement.
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - Une bibliothèque de multiplexage des requêtes HTTP sur plusieurs adresses IP sources.
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - http.RoundTripper Go qui émet des métriques OpenTelemetry pour les requêtes HTTP.
- [go-req](https://github.com/wenerme/go-req) - Client HTTP Golang déclaratif.
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - Client HTTP en Go avec nouvelles tentatives.
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Un client HTTP puissant, léger et simple, inspiré de l'API Web Fetch.
- [Grequest](https://github.com/lib4u/grequest)  - Paquet Golang simple et léger pour les requêtes HTTP, fondé sur le puissant net/http
- [grequests](https://github.com/levigross/grequests) - Un « clone » en Go de la célèbre et excellente bibliothèque Requests.
- [hedge](https://github.com/bhope/hedge) - Requêtes de couverture (hedged requests) adaptatives pour Go. Réduit la latence p99 sans configuration, d'après l'article « The Tail at Scale » de Google.
- [heimdall](https://github.com/gojektech/heimdall) - Un client HTTP amélioré, avec nouvelles tentatives et fonctionnalités hystrix.
- [httpretry](https://github.com/ybbus/httpretry) - Enrichit le client HTTP Go par défaut d'une fonctionnalité de nouvelles tentatives.
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - Remplacement direct de net/http.Client avec une empreinte TLS (JA3/JA4) et HTTP/2 (Akamai) identique octet pour octet à celle d'un navigateur.
- [pester](https://github.com/sethgrid/pester) - Appels de client HTTP Go avec nouvelles tentatives, temporisation et concurrence.
- [req](https://github.com/imroc/req) - Client HTTP Go simple avec de la magie noire (moins de code et plus d'efficacité).
- [request](https://github.com/monaco-io/request) - Client HTTP pour Golang. Si vous connaissez axios ou requests, vous allez l'adorer. Aucune dépendance tierce.
- [requests](https://github.com/carlmjohnson/requests) - Requêtes HTTP pour les Gophers. Utilise context.Context et ne masque pas le net/http.Client sous-jacent, ce qui le rend compatible avec les API Go standard. Inclut aussi des outils de test.
- [resty](https://github.com/go-resty/resty) - Client HTTP et REST simple pour Go, inspiré de rest-client de Ruby.
- [rq](https://github.com/ddo/rq) - Une interface plus agréable pour le client HTTP de la bibliothèque standard Golang.
- [sling](https://github.com/dghubble/sling) - Sling est une bibliothèque cliente HTTP Go pour créer et envoyer des requêtes d'API.
- [surf](https://github.com/enetx/surf) - Client HTTP avancé prenant en charge HTTP/1.1, HTTP/2, HTTP/3 (QUIC) et les proxys SOCKS5, avec une empreinte TLS digne d'un navigateur.
- [tls-client](https://github.com/bogdanfinn/tls-client) - Client HTTP de type net/http.Client, avec des options pour choisir les empreintes TLS client à utiliser pour les requêtes.

**[⬆ retour en haut](#contents)**

## OpenGL

_Bibliothèques pour utiliser OpenGL en Go._

- [gl](https://github.com/go-gl/gl) - Liaisons Go pour OpenGL (générées via glow).
- [glfw](https://github.com/go-gl/glfw) - Liaisons Go pour GLFW 3.
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - Portage Go de la bibliothèque [glMatrix](https://glmatrix.net/).
- [goxjs/gl](https://github.com/goxjs/gl) - Liaisons OpenGL multiplateformes pour Go (OS X, Linux, Windows, navigateurs, iOS, Android).
- [goxjs/glfw](https://github.com/goxjs/glfw) - Bibliothèque glfw multiplateforme pour Go, pour créer un contexte OpenGL et recevoir des événements.
- [mathgl](https://github.com/go-gl/mathgl) - Paquet mathématique en Go pur spécialisé dans les mathématiques 3D, inspiré de GLM.

**[⬆ retour en haut](#contents)**

## ORM

_Bibliothèques qui implémentent le mapping objet-relationnel ou des techniques de mapping de données._

- [bob](https://github.com/stephenafamo/bob) - Constructeur de requêtes SQL et générateur d'ORM/de fabriques pour Go. Successeur de SQLBoiler.
- [bun](https://github.com/uptrace/bun) - ORM Golang centré sur SQL. Successeur de go-pg.
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Framework de mise en cache/mémoïsation Redis typé et fondé sur des schémas, pour Go.
- [CQL](https://github.com/FrancoLiberali/cql) - Construit sur GORM, ajoute des requêtes vérifiées à la compilation grâce à du code généré automatiquement.
- [ent](https://github.com/facebook/ent) - Un framework d'entités pour Go. ORM simple mais puissant pour modéliser et interroger des données.
- [go-dbw](https://github.com/hashicorp/go-dbw) - Un paquet simple qui encapsule les opérations de bases de données.
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - Un ORM simple pour Google/Firebase Cloud Firestore.
- [go-sql](https://github.com/rushteam/gosql) - Un ORM simple pour MySQL.
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - Une bibliothèque flexible et puissante de construction de chaînes SQL, avec en plus un ORM sans configuration.
- [go-store](https://github.com/gosuri/go-store) - Bibliothèque de magasin clé-valeur simple et rapide reposant sur Redis, pour Go.
- [golobby/orm](https://github.com/golobby/orm) - ORM générique simple, rapide et typé de façon sûre, pour le bonheur des développeurs.
- [GoooQo](https://github.com/doytowin/goooqo) - Un framework d'accès aux bases de données fondé sur un modèle de requêtes déclaratif.
- [GORM](https://github.com/go-gorm/gorm) - La fantastique bibliothèque ORM pour Golang, qui se veut conviviale pour les développeurs.
- [gormt](https://github.com/xxjwxc/gormt) - Convertit une base de données MySQL en structures gorm pour Golang.
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence, bibliothèque de type ORM pour Go.
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire est une couche d'accès aux bases de données et de validation pour Golang (prend en charge MySQL, PostgreSQL et SQLite3).
- [lore](https://github.com/abrahambotros/lore) - Environnement de pseudo-ORM/pseudo-mapping de structures simple et léger pour Go.
- [marlow](https://github.com/marlow/marlow) - ORM généré à partir des structures du projet, pour des garanties de sûreté à la compilation.
- [pop/soda](https://github.com/gobuffalo/pop) - Migration et création de bases de données, ORM, etc. pour MySQL, PostgreSQL et SQLite.
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go, accès aux bases de données typé de façon sûre pour Go.
- [reform](https://github.com/go-reform/reform) - Un meilleur ORM pour Go, fondé sur des interfaces non vides et la génération de code.
- [rel](https://github.com/go-rel/rel) - Couche moderne d'accès aux bases de données pour Golang : testable, extensible et façonnée en une API propre et élégante.
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - Générateur d'ORM. Générez un ORM complet et ultra-rapide adapté à votre schéma de base de données.
- [upper.io/db](https://github.com/upper/db) - Interface unique pour interagir avec différentes sources de données grâce à des adaptateurs qui encapsulent des pilotes de bases de données éprouvés.
- [XORM](https://gitea.com/xorm/xorm) - ORM simple et puissant pour Go (prend en charge MySQL, MyMysql, PostgreSQL, Tidb, SQLite3, MsSql et Oracle).
- [Zoom](https://github.com/albrow/zoom) - Magasin de données et moteur de requêtes ultra-rapides construits sur Redis.

**[⬆ retour en haut](#contents)**

## Gestion des paquets

_Outillage officiel de gestion des dépendances et des paquets_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - Les modules sont l'unité d'échange et de versionnage du code source. La commande go prend directement en charge le travail avec les modules, y compris l'enregistrement et la résolution des dépendances envers d'autres modules.

_Bibliothèques non officielles de gestion des paquets et des dépendances._

- [gup](https://github.com/nao1215/gup) - Met à jour les binaires installés par « go install ».
- [modup](https://github.com/chaindead/modup) - Interface en terminal pour mettre à jour les dépendances Go, avec détection des modules obsolètes et mise à niveau sélective.
- [syft](https://github.com/anchore/syft) - Un outil CLI et une bibliothèque Go pour générer une nomenclature logicielle (SBOM) à partir d'images de conteneurs et de systèmes de fichiers.

**[⬆ retour en haut](#contents)**

## Performances

- [ebpf-go](https://github.com/cilium/ebpf) - Fournit des utilitaires pour charger, compiler et déboguer des programmes eBPF.
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - Ajoute automatiquement des spans à toutes les méthodes et fonctions.
- [go-perfstat](https://github.com/go-perfstat/go) - Statistiques de performances légères et agrégation des temps d'exécution pour Go.
- [jaeger](https://github.com/jaegertracing/jaeger) - Un système de traçage distribué.
- [mm-go](https://github.com/joetifa2003/mm-go) - Gestion manuelle et générique de la mémoire pour Golang.
- [otelinji](https://github.com/hedhyw/otelinji) - Outil d'instrumentation automatique OpenTelemetry pour ajouter des spans aux fonctions.
- [pixie](https://github.com/pixie-labs/pixie) - Traçage sans instrumentation des applications Golang via eBPF.
- [profile](https://github.com/pkg/profile) - Paquet simple de prise en charge du profilage pour Go.
- [statsviz](https://github.com/arl/statsviz) - Visualisation en direct des statistiques d'exécution de votre application Go.
- [tracer](https://github.com/kamilsk/tracer) - Traçage simple et léger.

**[⬆ retour en haut](#contents)**

## Langages de requête

- [api-fu](https://github.com/ccbrown/api-fu) - Implémentation complète de GraphQL.
- [dasel](https://github.com/tomwright/dasel) - Interrogez et mettez à jour des structures de données à l'aide de sélecteurs depuis la ligne de commande. Comparable à jq/yq, mais prend en charge JSON, YAML, TOML et XML sans aucune dépendance d'exécution.
- [gnata](https://github.com/RecoLabs/gnata) - Implémentation en Go pur du langage de requête et de transformation JSONata 2.x.
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - Un paquet Go simple pour interroger des données JSON.
- [goven](https://github.com/SeldonIO/goven) - Un langage de requête prêt à l'emploi pour n'importe quel schéma de base de données.
- [gqlgen](https://github.com/99designs/gqlgen) - bibliothèque de serveur GraphQL fondée sur go generate.
- [grapher](https://github.com/reaganiwadha/grapher) - Un constructeur de champs GraphQL utilisant les génériques Go, avec des utilitaires et fonctionnalités supplémentaires.
- [graphql](https://github.com/neelance/graphql-go) - Serveur GraphQL axé sur la facilité d'utilisation.
- [graphql-go](https://github.com/graphql-go/graphql) - Implémentation de GraphQL pour Go.
- [gws](https://github.com/Zaba505/gws) - Implémentation client et serveur de « GraphQL over Websocket » d'Apollo.
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - Une bibliothèque de requêtes pour extraire une partie d'un JSON à l'aide de la syntaxe JSONPath.
- [jsonql](https://github.com/elgs/jsonql) - Bibliothèque d'expressions de requête JSON en Golang.
- [jsonslice](https://github.com/bhmj/jsonslice) - Requêtes JSONPath avec filtres avancés.
- [mql](https://github.com/hashicorp/mql) - Model Query Language (mql) est un langage de requête pour vos modèles de bases de données.
- [play](https://github.com/paololazzari/play) - Un bac à sable en TUI pour expérimenter avec vos programmes favoris, comme grep, sed, awk, jq et yq.
- [rql](https://github.com/a8m/rql) - Resource Query Language pour les API REST.
- [rqp](https://github.com/timsolov/rest-query-parser) - Analyseur de requêtes pour les API REST. Le filtrage, les validations et les opérations `AND` et `OR` sont pris en charge directement dans la requête.
- [straf](https://github.com/SonicRoshan/straf) - Convertissez facilement des structures Golang en objets GraphQL.

**[⬆ retour en haut](#contents)**

## Réflexion

- [copy](https://github.com/gotidy/copy) - Paquet pour copier rapidement des structures de types différents.
- [Deepcopier](https://github.com/ulule/deepcopier) - Copie simple de structures pour Go.
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - Bibliothèque rapide de copie profonde.
- [goenum](https://github.com/lvyahui8/goenum) - Une structure d'énumération commune fondée sur les génériques et la réflexion, qui permet de définir rapidement des énumérations et d'utiliser un ensemble de méthodes par défaut utiles.
- [gotype](https://github.com/wzshiming/gotype) - Analyse du code source Golang, avec une utilisation semblable au paquet reflect.
- [gpath](https://github.com/tenntenn/gpath) - Bibliothèque pour simplifier l'accès aux champs de structures à l'aide d'expressions Go, par réflexion.
- [objwalker](https://github.com/rekby/objwalker) - Parcourt les objets Go par réflexion.
- [reflectpro](https://github.com/gontainer/reflectpro) - Appelants, copieurs, accesseurs et mutateurs pour Go.
- [reflectutils](https://github.com/muir/reflectutils) - Fonctions utilitaires pour la réflexion : analyse des balises de structures, parcours récursif, remplissage de valeurs à partir de chaînes.

**[⬆ retour en haut](#contents)**

## Intégration de ressources

- [debme](https://github.com/leaanthony/debme) - Crée un `embed.FS` à partir d'un sous-répertoire d'un `embed.FS` existant.
- [embed](https://pkg.go.dev/embed) - Le paquet embed donne accès aux fichiers intégrés dans le programme Go en cours d'exécution.
- [rebed](https://github.com/soypat/rebed) - Recrée des arborescences de dossiers et des fichiers à partir du type `embed.FS` de Go 1.16
- [vfsgen](https://github.com/shurcooL/vfsgen) - Génère un fichier vfsdata.go qui implémente statiquement le système de fichiers virtuel donné.

**[⬆ retour en haut](#contents)**

## Science et analyse de données

_Bibliothèques de calcul scientifique et d'analyse de données._

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - Fournit un modèle de Bradley-Terry pour les comparaisons par paires.
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Carte de chaleur calendaire en Go pur, inspirée de l'activité de contribution de GitHub.
- [chart](https://github.com/vdobler/chart) - Bibliothèque simple de tracé de graphiques pour Go. Prend en charge de nombreux types de graphiques.
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - Dataframes pour l'apprentissage automatique et les statistiques (similaires à pandas).
- [decimal](https://github.com/db47h/decimal) - Le paquet decimal implémente l'arithmétique décimale à virgule flottante en précision arbitraire.
- [entitydebs](https://github.com/ndabAP/entitydebs) - Un outil de sciences sociales pour analyser par programmation les entités dans des textes non fictionnels, avec un analyseur de dépendances intégré.
- [evaler](https://github.com/soniah/evaler) - Évaluateur simple d'expressions arithmétiques à virgule flottante.
- [ewma](https://github.com/VividCortex/ewma) - Moyennes mobiles à pondération exponentielle.
- [geom](https://github.com/skelterjohn/geom) - Géométrie 2D pour Golang.
- [go-dsp](https://github.com/mjibson/go-dsp) - Traitement numérique du signal pour Go.
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Algorithmes d'estimation d'état et de filtrage en Go.
- [go-gt](https://github.com/ThePaw/go-gt) - Algorithmes de théorie des graphes écrits en langage « Go ».
- [go-hep](https://github.com/go-hep/hep) - Un ensemble de bibliothèques et d'outils pour réaliser facilement des analyses de physique des hautes énergies.
- [godesim](https://github.com/soypat/godesim) - Framework de résolution d'EDO étendues/multivariables pour les simulations à événements, avec une API simple.
- [goent](https://github.com/kzahedi/goent) - Implémentation Go de mesures d'entropie.
- [gograph](https://github.com/hmdsefi/gograph) - Une bibliothèque de graphes générique pour Golang qui fournit la théorie mathématique des graphes et des algorithmes.
- [gonum](https://github.com/gonum/gonum) - Gonum est un ensemble de bibliothèques numériques pour le langage de programmation Go. Il contient des bibliothèques pour les matrices, les statistiques, l'optimisation et plus encore.
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot fournit une API pour construire et dessiner des graphiques en Go.
- [goraph](https://github.com/gyuho/goraph) - Bibliothèque de théorie des graphes en Go pur (structures de données, visualisation d'algorithmes).
- [gosl](https://github.com/cpmech/gosl) - Bibliothèque scientifique Go pour l'algèbre linéaire, la FFT, la géométrie, les NURBS, les méthodes numériques, les probabilités, l'optimisation, les équations différentielles et plus encore.
- [GoStats](https://github.com/OGFris/GoStats) - GoStats est une bibliothèque GoLang open source de statistiques mathématiques, principalement utilisée dans le domaine de l'apprentissage automatique ; elle couvre la plupart des fonctions de mesures statistiques.
- [graph](https://github.com/yourbasic/graph) - Bibliothèque d'algorithmes de graphes de base.
- [hdf5](https://github.com/scigolib/hdf5) - Implémentation en Go pur du format de fichier HDF5 pour le stockage et l'échange de données scientifiques.
- [insyra](https://github.com/HazelnutParadise/insyra) - Bibliothèque d'analyse de données avec statistiques, visualisation, prise en charge de Parquet et intégration de Python.
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - Outil de manipulation de graphes JSONL, avec prise en charge de graphviz.
- [matlab](https://github.com/scigolib/matlab) - Bibliothèque en Go pur pour lire et écrire des fichiers MATLAB .mat (v5-v7.3) sans CGO.
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go est un paquet open source pour définir des programmes mathématiques (par ex. des problèmes d'optimisation convexe) en Go.
- [matrix](https://github.com/Arceus-7/matrix) - Un paquet de calcul matriciel propre, générique et sans dépendance pour Go, prenant en charge l'arithmétique, les décompositions et la résolution de systèmes linéaires.
- [ode](https://github.com/ChristopherRabotin/ode) - Solveur d'équations différentielles ordinaires (EDO) prenant en charge les états étendus et des conditions d'arrêt des itérations fondées sur les canaux.
- [orb](https://github.com/paulmach/orb) - Types géométriques 2D avec découpage et prise en charge de GeoJSON et des Mapbox Vector Tiles.
- [pagerank](https://github.com/alixaxel/pagerank) - Algorithme PageRank pondéré implémenté en Go.
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - Toute petite bibliothèque d'interpolation linéaire.
- [PiHex](https://github.com/claygod/PiHex) - Implémentation de l'algorithme « Bailey-Borwein-Plouffe » pour les décimales hexadécimales de Pi.
- [Poly](https://github.com/bebop/poly) - Un paquet Go pour l'ingénierie des organismes.
- [rootfinding](https://github.com/khezen/rootfinding) - bibliothèque d'algorithmes de recherche de racines pour trouver les racines de fonctions quadratiques.
- [simd](https://github.com/tphakala/simd) - Opérations vectorielles et SIMD natives en Go sur les slices, avec accélération en assembleur multi-architecture.
- [sparse](https://github.com/james-bowman/sparse) - Formats de matrices creuses en Go pour l'algèbre linéaire, destinés aux applications scientifiques et d'apprentissage automatique, compatibles avec les bibliothèques matricielles de gonum.
- [stats](https://github.com/montanaflynn/stats) - Paquet de statistiques regroupant des fonctions courantes absentes de la bibliothèque standard Golang.
- [streamtools](https://github.com/nytlabs/streamtools) - outil graphique polyvalent pour traiter des flux de données.
- [taxonkit](https://github.com/shenwei356/taxonkit) - Une boîte à outils pratique et efficace pour la taxonomie du NCBI ; permet d'interroger les lignées, de reformater, de filtrer et de créer des fichiers taxdump personnalisés.
- [TextRank](https://github.com/DavidBelicza/TextRank) - Implémentation de TextRank en Golang avec des fonctionnalités extensibles (résumé, pondération, extraction de phrases) et la prise en charge du multithreading (goroutines).
- [topk](https://github.com/keilerkonzept/topk) - Sketches top-K classiques et à fenêtre glissante, fondés sur l'algorithme HeavyKeeper.
- [triangolatte](https://github.com/tchayen/triangolatte) - Bibliothèque de triangulation 2D. Permet de traduire des lignes et des polygones (tous deux fondés sur des points) dans le langage des GPU.

**[⬆ retour en haut](#contents)**

## Sécurité

_Bibliothèques qui aident à rendre votre application plus sûre._

- [acme-proxy](https://github.com/esnet/acme-proxy) - Résout le défi ACME http-01 sans ouvrir le port 80 sur Internet et obtient des certificats auprès d'une autorité de certification externe.
- [acmetool](https://github.com/hlandau/acme) - Client ACME (Let's Encrypt) avec renouvellement automatique.
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Petit paquet de génération de mots de passe cryptographiquement sûrs pour Go.
- [acra](https://github.com/cossacklabs/acra) - Proxy de chiffrement réseau pour protéger les applications reposant sur des bases de données contre les fuites de données : chiffrement sélectif fort, prévention des injections SQL, système de détection d'intrusion.
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - Un générateur déterministe de bits aléatoires fondé sur AES en mode compteur (AES-CTR-DRBG), tel que spécifié dans le NIST SP 800-90A.
- [age](https://github.com/FiloSottile/age) - Un outil de chiffrement (et une bibliothèque Go) simple, moderne et sûr, avec de petites clés explicites, aucune option de configuration et une composabilité à la UNIX.
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - surcouche légère du paquet argon2 de Go, qui reprend fidèlement l'interface du paquet Bcrypt de la bibliothèque standard et du paquet simple-scrypt.
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Provisionne automatiquement des certificats Let's Encrypt et démarre un serveur TLS.
- [BadActor](https://github.com/jaredfolkins/badactor) - Système de bannissement en mémoire piloté par l'application, conçu dans l'esprit de fail2ban.
- [beelzebub](https://github.com/mariocandela/beelzebub) - Un framework de honeypot low-code sécurisé, qui s'appuie sur l'IA pour la virtualisation de systèmes.
- [booster](https://github.com/anatol/booster) - Générateur d'initramfs rapide avec prise en charge du chiffrement intégral du disque.
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Middleware de pare-feu applicatif web (WAF) pour le serveur Caddy, avec un moteur de règles par expressions régulières, un score d'anomalies, des listes noires d'IP/DNS/ASN/pays et la limitation de débit.
- [Cameradar](https://github.com/Ullaakut/cameradar) - Outil et bibliothèque pour pirater à distance les flux RTSP de caméras de surveillance.
- [canery](https://github.com/rluders/canery) - Moteur d'autorisation minimal et sans état, avec un modèle d'évaluation interchangeable.
- [certificates](https://github.com/mvmaasakkers/certificates) - Un outil aux choix affirmés pour générer des certificats TLS.
- [CertMagic](https://github.com/caddyserver/certmagic) - Intégration de client ACME mature, robuste et puissante pour l'émission et le renouvellement entièrement gérés des certificats TLS.
- [Coraza](https://github.com/corazawaf/coraza) - Bibliothèque WAF prête pour l'entreprise, compatible avec ModSecurity et l'OWASP CRS.
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - Outil CLI autonome pour valider les règles WAF SecLang de ModSecurity et Coraza avant le déploiement en production.
- [Crenox](https://github.com/crenoxhq/crenox) - Scanner de secrets pré-commit sans dépendance, utilisant Aho-Corasick pour une détection haute performance des fuites d'identifiants.
- [deidentify](https://github.com/aliengiraffe/deidentify) - Suppression déterministe, préservant le format, des informations personnelles identifiables dans le texte et les données structurées.
- [dongle](https://github.com/golang-module/dongle) - Un paquet Golang simple, sémantique et pratique pour l'encodage/décodage et le chiffrement/déchiffrement.
- [dotlock](https://github.com/ahmadraza100/dotlock) - Gestionnaire de coffres .env chiffrés avec une TUI interactive pour gérer les secrets de plusieurs environnements et profils.
- [encid](https://github.com/bobg/encid) - Encode et décode des identifiants entiers chiffrés.
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - Générateur de mots de passe à entropie, doté de nombreux arguments de ligne de commande, pour générer de façon sûre des chaînes aléatoires, notamment des chiffres, des mots de passe et des mots de passe composés de mots de dictionnaire peu courants mêlés de symboles et de chiffres.
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Une application REST pour mettre à jour dynamiquement les règles firewalld sur un serveur Linux.
- [fort](https://github.com/djadmin/fort) - Audite les réglages de sécurité de macOS à travers 16 vérifications, attribue un score et corrige les problèmes lorsque c'est sans risque. Binaire unique, installable via Homebrew.
- [go-generate-password](https://github.com/m1/go-generate-password) - Générateur de mots de passe utilisable en ligne de commande ou comme bibliothèque.
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Analyseur htpasswd d'Apache pour Go.
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - Validateur de mots de passe fondé sur des valeurs brutes d'entropie cryptographique.
- [go-peer](https://github.com/number571/go-peer) - Une bibliothèque logicielle pour créer des systèmes décentralisés sécurisés et anonymes.
- [go-yara](https://github.com/hillu/go-yara) - Liaisons Go pour [YARA](https://github.com/plusvic/yara), le « couteau suisse de la recherche de motifs pour les chercheurs en logiciels malveillants (et tous les autres) ».
- [goArgonPass](https://github.com/dwin/goArgonPass) - Hachage et vérification de mots de passe Argon2, conçus pour être compatibles avec les implémentations existantes en Python et PHP.
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - Un paquet probablement paranoïaque pour hacher et chiffrer les mots de passe de façon sûre.
- [gost-crypto](https://github.com/rekurt/gost-crypto) - Bibliothèque Go pour les standards cryptographiques russes GOST (signatures numériques, hachage Streebog, chiffrement Kuznechik, AEAD MGM), reposant sur gost-engine d'OpenSSL.
- [grim](https://github.com/ijin82/grim) - Outil CLI rapide et sûr pour gérer des coffres de notes Markdown chiffrées en mémoire volatile.
- [gspy](https://github.com/Mutasem-mk4/gspy) - Inspecteur forensique des goroutines jusqu'aux appels système pour les processus Go en cours d'exécution.
- [Interpol](https://github.com/avahidi/interpol) - Générateur de données fondé sur des règles pour le fuzzing et les tests d'intrusion.
- [leakhound](https://github.com/nilpoona/leakhound) - Outil d'analyse statique qui détecte la journalisation accidentelle de champs de structures sensibles, pour éviter les fuites de données dans les journaux.
- [lego](https://github.com/go-acme/lego) - Bibliothèque cliente ACME et outil CLI en Go pur (à utiliser avec Let's Encrypt).
- [luks.go](https://github.com/anatol/luks.go) - Bibliothèque en Golang pur pour gérer les partitions LUKS.
- [mcprobe](https://github.com/tamish560/mcprobe) - Scanner de sécurité pour serveurs MCP, avec détection des injections de prompts et du masquage d'outils (tool shadowing), et sortie SARIF.
- [memguard](https://github.com/awnumar/memguard) - Une bibliothèque en Go pur pour manipuler des valeurs sensibles en mémoire.
- [mist](https://github.com/iSerganov/mist) - Bibliothèque de stéganographie audio à clé asymétrique qui cache des messages chiffrés dans de l'audio compressé à l'aide de X25519 et ChaCha20-Poly1305.
- [multikey](https://github.com/adrianosela/multikey) - Un framework de chiffrement/déchiffrement à seuil n parmi N clés, fondé sur l'algorithme de partage de secret de Shamir.
- [nacl](https://github.com/kevinburke/nacl) - Implémentation Go de l'ensemble d'API NaCl.
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - Supprime en une seule passe les secrets des lignes de journal et des vidages HTTP, en couvrant les en-têtes, le JSON, le XML, les données encodées en URL, les JWT, les clés PEM et les jetons de fournisseurs.
- [optimus-go](https://github.com/pjebs/optimus-go) - Hachage et obfuscation d'identifiants à l'aide de l'algorithme de Knuth.
- [osv-scanner](https://github.com/google/osv-scanner) - Scanner de vulnérabilités écrit en Go qui utilise les données fournies par OSV.
- [passlib](https://github.com/hlandau/passlib) - Bibliothèque de hachage de mots de passe à l'épreuve du temps.
- [passwap](https://github.com/zitadel/passwap) - Fournit une implémentation unifiée de différents algorithmes de hachage de mots de passe
- [pii-shield](https://github.com/pii-shield/pii-shield) - Sidecar Kubernetes d'assainissement des journaux, sans code, qui masque les informations personnelles (PII) des journaux.
- [pm](https://github.com/nicola-strappazzon/password-manager) - Gestionnaire de mots de passe de style Unix écrit en Go, pour enregistrer vos données avec un chiffrement OpenPGP.
- [procscope](https://github.com/Mutasem-mk4/procscope) - Outil d'investigation à l'exécution, limité à un processus, utilisant eBPF pour tracer le cycle de vie du processus, l'activité sur les fichiers et les connexions réseau.
- [qrand](https://github.com/bitfield/qrand) - Client de l'API ANU Quantum Numbers (AQN), qui fournit des données aléatoires sûres au sens de la mécanique quantique.
- [Razify](https://github.com/Hossiy21/razify) - CLI pour analyser, valider et auditer les fichiers .env à la recherche de secrets divulgués et de dérives entre environnements.
- [redact](https://github.com/alesr/redact) - Masque les informations sensibles des journaux fondés sur slog à l'aide d'un pipeline configurable.
- [SafeDep/vet](https://github.com/safedep/vet) - Protège contre les paquets open source malveillants.
- [secret](https://github.com/rsjethani/secret) - Empêche vos secrets de fuiter dans les journaux, std\*, etc.
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - Générateur d'identifiants reposant sur un CSPRNG, avec un schéma JSON versionné pour les mots de passe, phrases de passe, secrets, clés d'API et codes PIN.
- [secure](https://github.com/unrolled/secure) - Middleware HTTP pour Go qui facilite quelques gains de sécurité rapides.
- [secureio](https://github.com/xaionaro-go/secureio) - Une surcouche et un multiplexeur assurant échange de clés, authentification et chiffrement pour `io.ReadWriteCloser`, fondés sur XChaCha20-poly1305, ECDH et ED25519.
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - Paquet Scrypt avec une API simple et évidente et un calibrage automatique du coût intégré.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - chiffrement/déchiffrement à l'aide de clés SSH.
- [sslmgr](https://github.com/adrianosela/sslmgr) - Les certificats SSL en toute simplicité grâce à une surcouche de haut niveau autour d'acme/autocert.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf est un middleware HTTP Go qui fournit les fonctionnalités de l'IDS teler pour protéger contre les attaques web et améliorer la sécurité des applications web en Go. Il est hautement configurable et facile à intégrer aux applications Go existantes.
- [themis](https://github.com/cossacklabs/themis) - bibliothèque cryptographique de haut niveau pour résoudre les tâches typiques de sécurité des données (stockage sécurisé, messagerie sécurisée, authentification par preuve à divulgation nulle de connaissance), disponible pour 14 langages, idéale pour les applications multiplateformes.
- [urusai](https://github.com/calpa/urusai) - Urusai (« bruyant » en japonais) est une implémentation Go d'un générateur de bruit de trafic HTTP/DNS aléatoire qui aide à protéger la vie privée en créant des écrans de fumée numériques pendant la navigation.
- [veil](https://github.com/getveil/veil) - Proxy HTTPS local qui masque les identifiants d'API aux agents de codage IA. Intégration au trousseau du système, espaces réservés tenant compte du format, journal d'audit SQLite.
- [y509](https://github.com/kanywst/y509) - TUI pour les chaînes de certificats X.509 qui indique si une chaîne est valide et, séparément, si un serveur l'a correctement servie.


**[⬆ retour en haut](#contents)**

## Sérialisation

_Bibliothèques et outils de sérialisation binaire._

- [bambam](https://github.com/glycerine/bambam) - générateur de schémas Cap'n Proto à partir de Go.
- [bel](https://github.com/32leaves/bel) - Génère des interfaces TypeScript à partir de structures/interfaces Go. Utile pour JSON RPC.
- [binstruct](https://github.com/ghostiam/binstruct) - Décodeur binaire Golang pour faire correspondre des données à une structure.
- [cbor](https://github.com/fxamacker/cbor) - Bibliothèque d'encodage et de décodage CBOR petite, sûre et simple.
- [colfer](https://github.com/pascaldekloe/colfer) - Génération de code pour le format binaire Colfer.
- [csvutil](https://github.com/jszwec/csvutil) - Encodage et décodage haute performance et idiomatiques d'enregistrements CSV vers des structures Go natives.
- [elastic](https://github.com/epiclabs-io/elastic) - Convertit des slices, des maps ou toute autre valeur inconnue d'un type à l'autre à l'exécution, quoi qu'il arrive.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - Formatage de texte à largeur fixe (UTF-8 pris en charge).
- [fwencoder](https://github.com/o1egl/fwencoder) - Analyseur de fichiers à largeur fixe (bibliothèque d'encodage et de décodage) pour Go.
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Bibliothèque et analyseur Cap'n Proto pour Go.
- [go-codec](https://github.com/ugorji/go) - Bibliothèque d'encodage, de décodage et de RPC haute performance, riche en fonctionnalités et idiomatique pour msgpack, cbor et json, fonctionnant à l'exécution OU par génération de code.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - Bibliothèque de sérialisation/désérialisation CSV de haut niveau aux fonctionnalités riches.
- [goprotobuf](https://github.com/golang/protobuf) - Prise en charge de Go, sous forme de bibliothèque et de plugin du compilateur de protocoles, pour les protocol buffers de Google.
- [gotiny](https://github.com/raszia/gotiny) - Bibliothèque de sérialisation Go efficace ; gotiny est presque aussi rapide que les bibliothèques de sérialisation qui génèrent du code.
- [jsoniter](https://github.com/json-iterator/go) - Remplacement direct haute performance et 100 % compatible de « encoding/json ».
- [mus-go](https://github.com/mus-format/mus-go) - Sérialiseur au format MUS pour Go.
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - Bibliothèque GoLang pour travailler avec le format de session PHP et les fonctions Serialize/Unserialize de PHP.
- [pletter](https://github.com/vimeda/pletter) - Une manière standard d'envelopper un message proto pour les brokers de messages.
- [proto](https://github.com/emicklei/proto) - Analyseur et écrivain de fichiers .proto de Google Protocol Buffers.
- [structomap](https://github.com/tuvistavie/structomap) - Bibliothèque pour générer facilement et dynamiquement des maps à partir de structures statiques.
- [unitpacking](https://github.com/recolude/unitpacking) - Bibliothèque pour empaqueter des vecteurs unitaires dans le moins d'octets possible.

**[⬆ retour en haut](#contents)**

## Applications serveur

- [algernon](https://github.com/xyproto/algernon) - Serveur web HTTP/2 avec prise en charge intégrée de Lua, Markdown, GCSS et Amber.
- [Caddy](https://github.com/caddyserver/caddy) - Caddy est un serveur web HTTP/2 alternatif, facile à configurer et à utiliser.
- [Casdoor](https://github.com/casdoor/casdoor) - Serveur de gestion des identités et des accès (IAM) et d'authentification unique (SSO) avec une interface web, prenant en charge OAuth 2.0, OIDC, SAML, CAS et LDAP.
- [consul](https://www.consul.io/) - Consul est un outil de découverte de services, de surveillance et de configuration.
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Proxy d'écriture distante Prometheus qui ajoute un en-tête d'identifiant de locataire Cortex en fonction des libellés des métriques.
- [devd](https://github.com/cortesi/devd) - Serveur web local pour les développeurs.
- [discovery](https://github.com/Bilibili/discovery) - Un registre pour la répartition de charge et le basculement résilients au niveau intermédiaire.
- [dudeldu](https://github.com/krotik/dudeldu) - Un serveur SHOUTcast simple.
- [Easegress](https://github.com/megaease/easegress) - Un système d'orchestration du trafic cloud native, à haute disponibilité et haute performance, observable et extensible.
- [Engity's Bifröst](https://bifroest.engity.org/) - Serveur SSH hautement personnalisable, offrant plusieurs façons d'autoriser un utilisateur et de choisir comment exécuter sa session (en local ou dans des conteneurs).
- [etcd](https://github.com/etcd-io/etcd) - Magasin clé-valeur hautement disponible pour la configuration partagée et la découverte de services.
- [Euterpe](https://github.com/ironsmile/euterpe) - Serveur de streaming musical auto-hébergé avec interface web intégrée et API REST.
- [Fider](https://github.com/getfider/fider) - Fider est une plateforme ouverte pour recueillir et organiser les retours des clients.
- [Flagr](https://github.com/checkr/flagr) - Flagr est un service open source de feature flags et de tests A/B.
- [flipt](https://github.com/markphelps/flipt) - Une solution autonome de feature flags écrite en Go et Vue.js
- [flue](https://github.com/karnstack/flue) - Démon auto-hébergé qui sert des sessions de terminal dans un onglet de navigateur. Les sessions continuent de tourner après la fermeture de l'onglet.
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - Une solution de feature flags auto-hébergée simple, complète et légère, 100 % open source.
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Proxy inverse simple avec mise en cache, écrit en Go, utilisant Redis.
- [gondola](https://github.com/bmf-san/gondola) - Un proxy inverse en Golang fondé sur YAML.
- [goshs](https://github.com/patrickhener/goshs) - Remplaçant de SimpleHTTPServer avec téléversement/téléchargement de fichiers, WebDAV, SFTP, SMB, TLS, authentification et liens de partage.
- [Kono](https://github.com/starwalkn/kono) - passerelle d'API légère et extensible en Go : fan-out parallèle, agrégation flexible et aucune configuration magique.
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - Proxy inverse pour gérer le HTTPS, avec émission de certificats à la volée via Let's Encrypt.
- [minio](https://github.com/pgsty/minio) - Fork de minio (service de stockage objet) maintenu par la communauté.
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy est un serveur d'applications simple de simulation (mock) et de proxy : vous pouvez créer des points d'accès simulés et relayer les requêtes lorsqu'aucune simulation n'existe pour le point d'accès.
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Analyseur de journaux Nginx et exportateur vers Prometheus.
- [nsq](https://nsq.io/) - Une plateforme de messagerie distribuée en temps réel.
- [OpenRun](https://github.com/openrundev/openrun) - Alternative open source à Google Cloud Run et AWS App Runner. Déployez facilement des outils internes pour toute une équipe.
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase est un backend temps réel en un seul fichier, composé d'une base de données embarquée (SQLite) avec abonnements en temps réel, gestion intégrée de l'authentification et bien plus encore.
- [protoxy](https://github.com/camgraff/protoxy) - Un serveur proxy qui convertit les corps de requêtes JSON en Protocol Buffers.
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - Diffuse en continu les événements de base de données de PostgreSQL vers Kafka.
- [relay](https://github.com/valtors/relay) - Serveur MCP avec plus de 40 outils pour agents IA. Opérations sur les fichiers, recherche web, captures d'écran, coordination multi-agents. Un seul binaire Go.
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Relais pour répartir la charge des événements Riemann et/ou les convertir au format Carbon.
- [RoadRunner](https://github.com/spiral/roadrunner) - Serveur d'applications PHP haute performance, répartiteur de charge et gestionnaire de processus.
- [SFTPGo](https://github.com/drakkan/sftpgo) - Serveur SFTP complet et hautement configurable, avec prise en charge optionnelle de FTP/S et WebDAV. Il peut servir le système de fichiers local et des backends de stockage cloud tels que S3 et Google Cloud Storage.
- [simpleconf](https://github.com/shaunlee/simpleconf) - Serveur de configuration contenant un seul document JSON, lu et écrit par chemin de clé via HTTP et TCP, avec clustering Raft optionnel.
- [Trickster](https://github.com/tricksterproxy/trickster) - Cache de proxy inverse HTTP et accélérateur de séries temporelles.
- [wd-41](https://github.com/baalimago/wd-41) - Un serveur de développement web ((w)eb (d)evelopment) avec rechargement automatique en direct lors des modifications de fichiers.
- [whois](https://github.com/KincaidYang/whois) - Service de requêtes WHOIS/RDAP auto-hébergé et serveur MCP pour les domaines, les adresses IPv4/IPv6, les CIDR et les ASN.
- [Wish](https://github.com/charmbracelet/wish) - Créez des applications SSH, tout simplement !

**[⬆ retour en haut](#contents)**

## Traitement de flux

_Bibliothèques et outils de traitement de flux et de programmation réactive._

- [go-etl](https://github.com/Breeze0806/go-etl) - Une boîte à outils légère pour l'extraction, la transformation et le chargement (ETL) de sources de données.
- [go-streams](https://github.com/reugn/go-streams) - Bibliothèque de traitement de flux en Go.
- [goio](https://github.com/primetalk/goio) - Une implémentation d'IO, Stream et Fiber pour Golang, inspirée des excellentes bibliothèques Scala cats et fs2.
- [gostream](https://github.com/mariomac/gostream) - Bibliothèque de traitement de flux typée de façon sûre, inspirée de l'API Java Streams.
- [machine](https://github.com/whitaker-io/machine) - Bibliothèque Go pour écrire et générer des workers de traitement de flux, avec métriques et traçabilité intégrées.
- [nibbler](https://github.com/naughtygopher/nibbler) - Un paquet léger de traitement par micro-lots.
- [ro](https://github.com/samber/ro) - Programmation réactive : API déclarative et composable pour les applications orientées événements.
- [signals](https://github.com/coregx/signals) - Gestion d'état réactive et typée de façon sûre, inspirée des Signals d'Angular, avec valeurs calculées, effets et suivi des dépendances.
- [stream](https://github.com/youthlin/stream) - Streams Go, comme les Streams de Java 8 : Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce...
- [StreamSQL](https://github.com/rulego/streamsql) - Un moteur SQL de streaming léger pour le traitement de données en temps réel.

**[⬆ retour en haut](#contents)**

## Moteurs de modèles

_Bibliothèques et outils de modèles (templating) et d'analyse lexicale._

- [bagme](https://github.com/boxesandglue/bagme) - Rendu HTML/CSS vers PDF avec une composition typographique de qualité TeX, en Go pur.
- [ego](https://github.com/benbjohnson/ego) - Langage de modèles léger qui permet d'écrire des modèles en Go. Les modèles sont traduits en Go puis compilés.
- [fasttemplate](https://github.com/valyala/fasttemplate) - Moteur de modèles simple et rapide. Remplace les espaces réservés des modèles jusqu'à 10 fois plus vite que [text/template](https://golang.org/pkg/text/template/).
- [gomponents](https://www.gomponents.com) - Composants HTML 5 en Go pur, qui ressemblent à ceci : `func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`.
- [got](https://github.com/goradd/got) - Un générateur de code Go inspiré de Hero et Fasttemplate. Prend en charge les fichiers inclus, les définitions de balises personnalisées, l'injection de code Go, la traduction et plus encore.
- [goview](https://github.com/foolin/goview) - Goview est une bibliothèque de modèles légère, minimaliste et idiomatique, fondée sur html/template de Golang, pour créer des applications web Go.
- [gox](https://github.com/doors-dev/gox) - Des modèles HTML sous forme d'expressions Go de première classe, avec une prise en charge transparente dans les éditeurs.
- [htmgo](https://htmgo.dev) - construisez des systèmes simples et évolutifs avec Go + htmx
- [jet](https://github.com/CloudyKit/jet) - Moteur de modèles Jet.
- [liquid](https://github.com/osteele/liquid) - Implémentation Go des modèles Liquid de Shopify.
- [liquidgo](https://github.com/Notifuse/liquidgo) - Implémentation Go complète du moteur de modèles Liquid de Shopify.
- [maroto](https://github.com/johnfercher/maroto) - Une façon « maroto » de créer des PDF. Maroto s'inspire de Bootstrap et utilise gofpdf. Rapide et simple.
- [pongo2](https://github.com/flosch/pongo2) - Moteur de modèles à la Django pour Go.
- [quicktemplate](https://github.com/valyala/quicktemplate) - Moteur de modèles rapide, puissant et pourtant facile à utiliser. Convertit les modèles en code Go, puis le compile.
- [Razor](https://github.com/sipin/gorazor) - Moteur de vues Razor pour Golang.
- [Soy](https://github.com/robfig/soy) - Modèles Closure (alias modèles Soy) pour Go, conformes à la [spécification officielle](https://developers.google.com/closure/templates/).
- [sprout](https://github.com/go-sprout/sprout) - Fonctions de modèle utiles pour les modèles Go.
- [tbd](https://github.com/lucasepe/tbd) - Une manière vraiment simple de créer des modèles de texte avec des espaces réservés ; expose en plus des métadonnées intégrées du dépôt Git.
- [templ](https://github.com/a-h/templ) - Un langage de modèles HTML doté d'un excellent outillage pour les développeurs.
- [templator](https://github.com/alesr/templator) - Un moteur de rendu de modèles HTML typé de façon sûre pour Go.

**[⬆ retour en haut](#contents)**

## Tests

_Bibliothèques pour tester des bases de code et générer des données de test._

### Frameworks de test

- [apitest](https://apitest.dev) - Bibliothèque de tests comportementaux simple et extensible pour les services REST ou les gestionnaires HTTP, prenant en charge la simulation des appels HTTP externes et le rendu de diagrammes de séquence.
- [arch-go](https://github.com/arch-go/arch-go) - Outil de test d'architecture pour les projets Go.
- [assay](https://github.com/tushariitr-19/assay) - Bibliothèque d'évaluation indépendante de tout framework pour tester les agents Go et les serveurs MCP, avec des vérifications déterministes, des codes de sortie adaptés à la CI et des tests sans code fondés sur YAML.
- [assert](https://github.com/go-playground/assert) - Bibliothèque d'assertions de base, à utiliser avec les tests natifs de Go, avec des briques pour créer des assertions personnalisées.
- [axiom](https://github.com/Nikita-Filonov/axiom) - Framework de test Go composable avec fixtures, hooks, nouvelles tentatives, métadonnées, plugins et exécution parallèle.
- [baloo](https://github.com/h2non/baloo) - Des tests de bout en bout d'API HTTP expressifs et polyvalents, en toute simplicité.
- [be](https://github.com/carlmjohnson/be) - La bibliothèque générique et minimaliste d'assertions de test.
- [biff](https://github.com/fulldump/biff) - Framework de tests par bifurcation, compatible BDD.
- [charlatan](https://github.com/percolate/charlatan) - Outil pour générer de fausses implémentations d'interfaces pour les tests.
- [commander](https://github.com/SimonBaeumer/commander) - Outil pour tester des applications en ligne de commande sous Windows, Linux et OS X.
- [coverage](https://github.com/jbunds/coverage) - Une interface web simple pour la couverture des tests Go, et la GitHub Action réutilisable [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report).
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - Module complémentaire simple de tests par instantanés (snapshots) pour votre framework de test.
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Nettoie la base de données pour les tests, inspiré de `database_cleaner` en Ruby.
- [dft](https://github.com/abecodes/dft) - Conteneurs Docker légers et sans dépendance pour les tests (et plus encore).
- [dsunit](https://github.com/viant/dsunit) - Tests de magasins de données pour SQL, NoSQL et fichiers structurés.
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - Exécutez une vraie base de données Postgres en local sous Linux, OS X ou Windows, au sein d'une autre application ou d'un test Go.
- [endly](https://github.com/viant/endly) - Tests fonctionnels de bout en bout déclaratifs.
- [envite](https://github.com/PerimeterX/envite) - Framework de gestion des environnements de développement et de test.
- [fixenv](https://github.com/rekby/fixenv) - Moteur de gestion de fixtures, inspiré des fixtures de pytest.
- [flute](https://github.com/suzuki-shunsuke/flute) - Framework de test de clients HTTP.
- [frisby](https://github.com/verdverm/frisby) - Framework de test d'API REST.
- [gherkingen](https://github.com/hedhyw/gherkingen) - Générateur de code de base et framework BDD.
- [ginkgo](https://onsi.github.io/ginkgo/) - Framework de tests BDD pour Go.
- [gnomock](https://github.com/orlangure/gnomock) - tests d'intégration avec de vraies dépendances (base de données, cache, voire Kubernetes ou AWS) exécutées dans Docker, sans simulacres.
- [go-carpet](https://github.com/msoap/go-carpet) - Outil pour visualiser la couverture des tests dans le terminal.
- [go-cmp](https://github.com/google/go-cmp) - Paquet pour comparer des valeurs Go dans les tests.
- [go-hit](https://github.com/Eun/go-hit) - Hit est un framework de tests d'intégration HTTP écrit en Golang.
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - Outil de test et de débogage HTTP proposant divers points d'accès pour tester les clients.
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - Tests de mutation pour Go avec seuils de qualité en CI, MSI tenant compte de la couverture, suivi d'une référence et filtrage par git diff.
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - Testcontainer MySQL pour Golang, pour faciliter les tests d'intégration MySQL.
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Tests par instantanés à la Jest en Golang.
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - Outil qui signale les fichiers dont la couverture est inférieure au seuil défini.
- [go-testdeep](https://github.com/maxatome/go-testdeep) - Comparaison profonde extrêmement flexible pour Golang, qui étend le paquet testing de Go.
- [go-testing](https://github.com/tkrop/go-testing) - Extension de test pour Go qui permet de mettre en place simplement des tests unitaires, de composants et d'intégration fortement isolés, avec une prise en charge avancée des simulacres étendant gomock et gock.
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - Bibliothèque d'assertions de test sous forme de prédicats, avec des diagnostics détaillés.
- [go-vcr](https://github.com/dnaeon/go-vcr) - Enregistrez et rejouez vos interactions HTTP pour des tests rapides, déterministes et précis.
- [goblin](https://github.com/franela/goblin) - Framework de test pour Go à la Mocha.
- [goc](https://github.com/qiniu/goc) - Goc est un système complet de test de couverture pour le langage de programmation Go.
- [gocheck](https://labix.org/gocheck) - Framework de test plus avancé, alternative à gotest.
- [GoConvey](https://github.com/smartystreets/goconvey/) - Framework de style BDD avec interface web et rechargement en direct.
- [gocrest](https://github.com/corbym/gocrest) - Matchers composables à la hamcrest pour les assertions Go.
- [godog](https://github.com/cucumber/godog) - Framework BDD Cucumber pour Go.
- [gofight](https://github.com/appleboy/gofight) - Test des gestionnaires d'API pour le framework Golang Router.
- [gogiven](https://github.com/corbym/gogiven) - Framework de tests BDD à la YATSPEC pour Go.
- [gomatch](https://github.com/jfilipczyk/gomatch) - bibliothèque conçue pour tester du JSON par rapport à des motifs.
- [gomega](https://onsi.github.io/gomega/) - Bibliothèque de matchers/assertions à la RSpec.
- [gospecify](https://github.com/stesla/gospecify) - Fournit une syntaxe BDD pour tester votre code Go. Elle devrait être familière à quiconque a utilisé des bibliothèques comme rspec.
- [gosuite](https://github.com/pavlo/gosuite) - Apporte à `testing` des suites de tests légères avec des fonctionnalités de mise en place et de nettoyage, en tirant parti des sous-tests de Go 1.7.
- [got](https://github.com/ysmood/got) - Un framework de test Golang agréable à utiliser.
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Une collection de paquets pour enrichir le paquet testing de Go et prendre en charge des modèles courants.
- [Hamcrest](https://github.com/rdrdr/hamcrest) - framework fluide d'objets Matcher déclaratifs qui, appliqués à des valeurs d'entrée, produisent des résultats autodescriptifs.
- [httper](https://github.com/gustofarbi/httper) - Exécuteur en ligne de commande pour les fichiers .http de JetBrains, avec scripts, assertions, gRPC et tests de charge.
- [httpexpect](https://github.com/gavv/httpexpect) - Tests de bout en bout d'API HTTP et REST concis, déclaratifs et faciles à utiliser.
- [is](https://github.com/matryer/is) - Mini-framework de test léger et professionnel pour Go.
- [jsonassert](https://github.com/kinbiko/jsonassert) - Paquet pour vérifier que vos charges utiles JSON sont correctement sérialisées.
- [keploy](https://github.com/keploy/keploy) - Génère automatiquement des cas de test et des simulacres de données à partir d'appels d'API.
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - La bibliothèque simple pour modifier les valeurs de champs privés lors des tests.
- [restit](https://github.com/yookoala/restit) - Micro-framework Go pour faciliter l'écriture de tests d'intégration d'API RESTful.
- [schema](https://github.com/jgroeneveld/schema) - Correspondance d'expressions rapide et simple pour les schémas JSON utilisés dans les requêtes et les réponses.
- [should](https://github.com/Kairum-Labs/should) - Bibliothèque de test sans dépendance, avec des différences détaillées entre structures et des messages d'erreur lisibles.
- [stop-and-go](https://github.com/elgohr/stop-and-go) - Assistant de test pour la concurrence.
- [testcase](https://github.com/adamluzsi/testcase) - Framework de test idiomatique pour le développement piloté par le comportement (BDD).
- [testcerts](https://github.com/madflojo/testcerts) - Génère dynamiquement des certificats autosignés et des autorités de certification au sein de vos fonctions de test.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - Un paquet Go qui simplifie la création et le nettoyage de dépendances à base de conteneurs pour les tests automatisés d'intégration et de fumée. Son API propre et facile à utiliser permet aux développeurs de définir par programmation les conteneurs à exécuter dans le cadre d'un test et de nettoyer ces ressources une fois le test terminé.
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - Un assistant de fixtures de test à la Rails pour tester les applications utilisant une base de données.
- [Testify](https://github.com/stretchr/testify) - Extension sacrée du paquet testing standard de Go.
- [Testo](https://github.com/ozontech/testo) - Framework de test à base de plugins, avec suites, tests parallèles, hooks et paramétrage. Inspiré de Pytest.
- [testsql](https://github.com/zhulongcheng/testsql) - Génère des données de test à partir de fichiers SQL avant les tests et les supprime une fois terminés.
- [testza](https://github.com/MarvinJWendt/testza) - Framework de test complet avec une jolie sortie colorée.
- [tparse](https://github.com/mfridman/tparse) - Outil CLI pour résumer la sortie de go test. Compatible avec les pipes et avec les options de go test.
- [trial](https://github.com/jgroeneveld/trial) - Assertions extensibles, rapides et faciles, sans beaucoup de code répétitif.
- [Tt](https://github.com/vcaesar/tt) - Outils de test simples et colorés.
- [wstest](https://github.com/posener/wstest) - Client WebSocket pour tester unitairement un http.Handler WebSocket.

### Simulacres (mocks)

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - Outil pour générer des objets simulacres autonomes.
- [fabricator](https://github.com/Goldziher/fabricator) - Fabriques typées de façon sûre pour générer des données simulées et factices en Go, inspirées de factory_boy et interface-forge.
- [genmock](https://gitlab.com/so_literate/genmock) - Système de simulacres pour Go avec un générateur de code pour construire les appels des méthodes d'interface.
- [go-localstack](https://github.com/elgohr/go-localstack) - Outil pour utiliser localstack dans les tests AWS.
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - Pilote SQL simulé pour tester les interactions avec la base de données.
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - Pilote de base de données fondé sur une transaction unique, principalement destiné aux tests.
- [gomock](https://github.com/uber-go/mock) - Framework de simulacres pour le langage de programmation Go.
- [gomock](https://github.com/vibridi/gomock) - Outil CLI pour générer des simulacres d'interfaces typés et indépendants de tout framework, avec prise en charge des génériques.
- [govcr](https://github.com/seborama/govcr) - Simulacre HTTP pour Golang : enregistrez et rejouez des interactions HTTP pour des tests hors ligne.
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - Proxy HTTP(S) pour enregistrer et simuler des API REST/SOAP, avec middlewares extensibles et CLI facile à utiliser.
- [httpmock](https://github.com/jarcoal/httpmock) - Simulation facile des réponses HTTP de ressources externes.
- [minimock](https://github.com/gojuno/minimock) - Générateur de simulacres pour les interfaces Go.
- [mockery](https://github.com/vektra/mockery) - Outil pour générer des interfaces Go.
- [mockfs](https://github.com/balinomad/go-mockfs) - Système de fichiers simulé pour les tests Go, avec injection d'erreurs et simulation de latence, construit sur `testing/fstest.MapFS`.
- [mockhttp](https://github.com/tv42/mockhttp) - Objet simulacre pour http.ResponseWriter de Go.
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - Une façon simple de générer des simulacres à des fins multiples.
- [moq](https://github.com/matryer/moq) - Utilitaire qui génère une structure à partir de n'importe quelle interface. La structure peut servir de simulacre de l'interface dans le code de test.
- [moxie](https://lesiw.io/moxie) - Génère des méthodes simulées sur des structures intégrées.
- [pgxmock](https://github.com/pashagolub/pgxmock) - Une bibliothèque de simulacres implémentant [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/).
- [timex](https://github.com/cabify/timex) - Un remplaçant du paquet natif `time` adapté aux tests.
- [wsmock](https://github.com/sing198/wsmock) - Serveur WebSocket simulé, expressif et sans code répétitif, pour les tests, avec injection de pannes et assertions.
- [xgo](https://github.com/xhd2015/xgo) - Une bibliothèque généraliste de simulation de fonctions.

### Fuzzing et delta-debugging/réduction/minimisation

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - Système de tests aléatoires.
- [Tavor](https://github.com/zimmski/tavor) - Framework générique de fuzzing et de delta-debugging.

### Selenium et outils de contrôle de navigateur

- [bonk](https://github.com/joakimcarlsson/bonk) - Bibliothèque d'automatisation de navigateur rapide et axée sur la discrétion, utilisant le Chrome DevTools Protocol sur WebSocket, sans dépendance externe.
- [cdp](https://github.com/mafredri/cdp) - Liaisons typées de façon sûre pour le Chrome Debugging Protocol, utilisables avec les navigateurs ou d'autres cibles de débogage qui l'implémentent.
- [chromedp](https://github.com/knq/chromedp) - un moyen de piloter/tester Chrome, Safari, Edge, les WebViews Android et d'autres navigateurs prenant en charge le Chrome Debugging Protocol.
- [playwright-go](https://github.com/mxschmitt/playwright-go) - bibliothèque d'automatisation de navigateur pour contrôler Chromium, Firefox et WebKit avec une seule API.
- [rod](https://github.com/go-rod/rod) - Un pilote DevTools pour faciliter l'automatisation web et le scraping.
- [selenosis](https://github.com/alcounit/selenosis) - Hub sans état natif Kubernetes qui achemine les sessions Selenium, Playwright et MCP vers des pods de navigateur à la demande via des ressources personnalisées.

### Injection de pannes

- [failpoint](https://github.com/pingcap/failpoint) - Une implémentation des [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) pour Golang.

**[⬆ retour en haut](#contents)**

## Traitement de texte

_Bibliothèques pour analyser et manipuler des textes._

Voir aussi [Traitement automatique du langage naturel](#natural-language-processing) et [Analyse de texte](#text-analysis).

### Formateurs

- [address](https://github.com/bojanz/address) - Gère la représentation, la validation et le formatage des adresses.
- [align](https://github.com/Guitarbum722/align) - Une application polyvalente qui aligne du texte.
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - Formate et analyse des valeurs numériques en octets (10K, 2M, 3G, etc.).
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - Formatage de texte à largeur fixe (encodeur/décodeur par réflexion).
- [go-humanize](https://github.com/dustin/go-humanize) - Formateurs qui rendent lisibles les durées, les nombres et les tailles mémoire.
- [gotabulate](https://github.com/bndr/gotabulate) - Affichez joliment et facilement vos données tabulaires avec Go.
- [sq](https://github.com/neilotoole/sq) - Convertit des données de bases SQL ou de formats de documents comme CSV ou Excel vers des formats tels que JSON, Excel, CSV, HTML, Markdown, XML et YAML.
- [textwrap](https://github.com/isbm/textwrap) - Effectue le retour à la ligne du texte en fin de ligne. Implémentation du module `textwrap` de Python.

### Langages de balisage

- [bafi](https://github.com/mmalcek/bafi) - Traducteur universel de JSON, BSON, YAML et XML vers N'IMPORTE QUEL format à l'aide de modèles.
- [bbConvert](https://github.com/CalebQ42/bbConvert) - Convertit le bbCode en HTML et permet d'ajouter la prise en charge de balises bbCode personnalisées.
- [blackfriday](https://github.com/russross/blackfriday) - Processeur Markdown en Go.
- [go-output-format](https://github.com/drewstinnett/go-output-format) - Affiche des structures Go dans plusieurs formats (YAML/JSON/etc.) dans votre application en ligne de commande.
- [go-toml](https://github.com/pelletier/go-toml) - Bibliothèque Go pour le format TOML, avec prise en charge des requêtes et des outils CLI pratiques.
- [goldmark](https://github.com/yuin/goldmark) - Un analyseur Markdown écrit en Go. Facile à étendre, conforme au standard (CommonMark) et bien structuré.
- [goq](https://github.com/andrewstuart/goq) - Désérialisation déclarative du HTML à l'aide de balises de structures à la syntaxe jQuery (utilise GoQuery).
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - Convertit du HTML en Markdown. Fonctionne même avec des sites web entiers et peut être étendu par des règles.
- [htmlquery](https://github.com/antchfx/htmlquery) - Un paquet de requêtes XPath pour HTML, qui permet d'extraire des données de documents HTML ou de les évaluer à l'aide d'une expression XPath.
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Rendu enrichi de YAML en HTML, en Go.
- [htree](https://github.com/bobg/htree) - Parcourez, naviguez, filtrez et traitez de toute autre manière des arbres d'objets [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node).
- [markdown](https://github.com/nao1215/markdown) - Constructeur Markdown qui génère du GitHub Flavored Markdown et des diagrammes mermaid par chaînage de méthodes.
- [mdsmith](https://github.com/jeduden/mdsmith) - linter et formateur Markdown rapide, à correction automatique. Vérifie le style, la lisibilité, la structure et l'intégrité entre fichiers.
- [mxj](https://github.com/clbanning/mxj) - Encode/décode du XML en JSON ou en map[string]interface{} ; extrait des valeurs à l'aide de chemins en notation pointée et de jokers. Remplace les paquets x2j et j2x.
- [picoloom](https://github.com/alnah/picoloom) - Convertisseur Markdown vers PDF, avec une CLI et des API de bibliothèque Go.
- [toml](https://github.com/BurntSushi/toml) - Format de configuration TOML (encodeur/décodeur par réflexion).

### Analyseurs/encodeurs/décodeurs

- [allot](https://github.com/sbstjn/allot) - Analyse de texte avec espaces réservés et jokers pour les outils CLI et les bots.
- [codetree](https://github.com/aerogo/codetree) - Analyse du code indenté (python, pixy, scarlet, etc.) et renvoie une structure arborescente.
- [commonregex](https://github.com/mingrammer/commonregex) - Une collection d'expressions régulières courantes pour Go.
- [did](https://github.com/ockam-network/did) - Analyseur et Stringer de DID (identifiants décentralisés) en Go.
- [doi](https://github.com/hscells/doi) - Analyseur d'identifiants d'objets numériques (DOI) en Go.
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Analyseur et outil de manipulation de fichiers Editorconfig pour Go.
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - Module haute performance d'extraction des domaines de premier niveau effectifs (eTLD).
- [go-nmea](https://github.com/adrianmo/go-nmea) - Bibliothèque d'analyse NMEA pour le langage Go.
- [go-querystring](https://github.com/google/go-querystring) - Bibliothèque Go pour encoder des structures en paramètres de requête d'URL.
- [go-vcard](https://github.com/emersion/go-vcard) - Analyse et formate des vCard.
- [godump](https://github.com/yassinebenaid/godump) - Affichez joliment n'importe quelle variable Go, une alternative à `fmt.Printf("%#v")` de Go.
- [godump (goforj)](https://github.com/goforj/godump) - Affiche joliment des structures Go avec des dumps à la Laravel/Symfony, les informations de type complètes, une sortie CLI colorée, la détection des cycles et l'accès aux champs privés.
- [gofeed](https://github.com/mmcdole/gofeed) - Analyse des flux RSS et Atom en Go.
- [gographviz](https://github.com/awalterschulze/gographviz) - Analyse le langage DOT de Graphviz.
- [gonameparts](https://github.com/polera/gonameparts) - Décompose les noms de personnes en leurs différentes parties.
- [ltsv](https://github.com/Wing924/ltsv) - Lecteur [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) haute performance pour Go.
- [normalize](https://github.com/avito-tech/normalize) - Assainit, normalise et compare du texte approximatif.
- [parseargs-go](https://github.com/nproc/parseargs-go) - analyseur d'arguments sous forme de chaînes qui comprend les guillemets et les barres obliques inverses.
- [prattle](https://github.com/askeladdk/prattle) - Analyse lexicale et syntaxique de grammaires LL(1), simplement et efficacement.
- [sh](https://github.com/mvdan/sh) - Analyseur et formateur de shell.
- [tokenizer](https://github.com/bzick/tokenizer) - Découpe n'importe quelle chaîne, slice ou tampon infini en jetons quelconques.
- [vdf](https://github.com/andygrunwald/vdf) - Un analyseur lexical et syntaxique pour le Valve Data Format (connu sous le nom de vdf), écrit en Go.
- [when](https://github.com/olebedev/when) - Analyseur de dates/heures en langage naturel anglais et russe, avec des règles interchangeables.
- [xj2go](https://github.com/stackerzzq/xj2go) - Convertit du XML ou du JSON en structures Go.

### Expressions régulières

- [coregex](https://github.com/coregx/coregex) - Moteur d'expressions régulières de production reprenant l'architecture de la crate regex de Rust : multi-moteur DFA/NFA, préfiltres SIMD, remplacement direct de la bibliothèque standard.
- [genex](https://github.com/alixaxel/genex) - Compte et développe des expressions régulières en toutes les chaînes correspondantes.
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - Correspondance de motifs à jokers simple et légère.
- [goregen](https://github.com/zach-klippenstein/goregen) - Bibliothèque pour générer des chaînes aléatoires à partir d'expressions régulières.
- [regroup](https://github.com/oriser/regroup) - Fait correspondre les groupes nommés d'expressions régulières à des structures Go, à l'aide de balises de structures et d'une analyse automatique.
- [rex](https://github.com/hedhyw/rex) - Constructeur d'expressions régulières.

### Assainissement

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - Assainisseur HTML.
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Un filtre à jurons fondé sur l'assainissement, pour Go.

### Outils de scraping

- [colly](https://github.com/asciimoo/colly) - Framework de scraping rapide et élégant pour les Gophers.
- [dataflowkit](https://github.com/slotix/dataflowkit) - Framework de scraping web pour transformer des sites web en données structurées.
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - Robot d'exploration web qui convertit les sites de documentation en Markdown propre et en JSONL pour l'ingestion par des LLM (RAG, données d'entraînement).
- [go-recipe](https://github.com/kkyr/go-recipe) - Un paquet pour extraire des recettes de cuisine de sites web.
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - Bibliothèque en langage Go pour analyser les sitemaps.
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery apporte au langage Go une syntaxe et un ensemble de fonctionnalités semblables à jQuery.
- [pagser](https://github.com/foolin/pagser) - Pagser est un outil simple, extensible et configurable pour analyser et désérialiser des pages HTML en structures, fondé sur goquery et les balises de structures, pour les robots d'exploration Golang.
- [Tagify](https://github.com/zoomio/tagify) - Produit un ensemble de tags à partir d'une source donnée.
- [walker](https://github.com/cyucelen/walker) - Récupérez de manière transparente des données paginées depuis n'importe quelle source. Scraping d'API simple et haute performance inclus.
- [xurls](https://github.com/mvdan/xurls) - Extrait des URL d'un texte.

### RSS

- [podcast](https://github.com/eduncan911/podcast) - Générateur de podcasts RSS 2.0 conforme à iTunes, en Golang

### Utilitaires/divers

- [ahocorasick](https://github.com/coregx/ahocorasick) - Correspondance de chaînes multi-motifs Aho-Corasick haute performance, avec compilation en DFA et préfiltre SIMD, jusqu'à 7 Go/s de débit (fait partie de l'écosystème [coregx](https://github.com/coregx)).
- [go-runewidth](https://github.com/mattn/go-runewidth) - Fonctions pour obtenir la largeur fixe d'un caractère ou d'une chaîne.
- [kace](https://github.com/codemodus/kace) - Conversions de casse courantes, prenant en compte les sigles usuels.
- [lancet](https://github.com/duke-git/lancet) - Une bibliothèque utilitaire complète à la Lodash pour Go
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich est la bibliothèque qui décline les noms russes selon le cas grammatical demandé.
- [radix](https://github.com/yourbasic/radix) - Algorithme rapide de tri de chaînes.
- [TySug](https://github.com/Dynom/TySug) - Suggestions alternatives tenant compte des dispositions de clavier.
- [uniwidth](https://github.com/unilibs/uniwidth) - Calcul haute performance de la largeur des caractères Unicode, avec optimisation SWAR, tables de recherche en O(1) et prise en charge des emojis ZWJ.
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - Un outil grep sémantique utilisant des plongements de mots pour trouver des correspondances sémantiquement proches. Par exemple, chercher « death » trouvera « dead », « killing », « murder ».

**[⬆ retour en haut](#contents)**

## API tierces

_Bibliothèques pour accéder à des API tierces._

- [airtable](https://github.com/mehanizm/airtable) - Bibliothèque cliente Go pour l'[API Airtable](https://airtable.com/api).
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Bibliothèque cliente Go pour l'API Twitter 1.1.
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - SDK Golang non officiel pour l'API App Store Connect.
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - Implémentation non officielle en Go de l'[AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html).
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Le SDK AWS officiel pour le langage de programmation Go.
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Client Go pour l'API DeFi de Birdeye, avec prix au comptant typés, chandeliers OHLCV, données historiques et une porte de sortie pour les requêtes brutes.
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - Bibliothèque Go de haut niveau pour écrire des données dans [Google BigQuery](https://cloud.google.com/bigquery) à haut débit.
- [brewerydb](https://github.com/naegelejd/brewerydb) - Bibliothèque Go pour accéder à l'API BreweryDB.
- [cachet](https://github.com/andygrunwald/cachet) - Bibliothèque cliente Go pour [Cachet (système open source de pages de statut)](https://cachethq.io/).
- [circleci](https://github.com/jszwedko/go-circleci) - Bibliothèque cliente Go pour interagir avec l'API de CircleCI.
- [codeship-go](https://github.com/codeship/codeship-go) - Bibliothèque cliente Go pour interagir avec l'API v2 de Codeship.
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Client Go pour l'API v4 de Coinglass, sans dépendance, avec flux WebSocket et points d'accès typés pour les contrats à terme, le marché au comptant, les options, les ETF et les indicateurs.
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Bibliothèque cliente Go pour interagir avec l'API de Coinpaprika.
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - Bibliothèque cliente Go pour [The Colony](https://thecolony.cc), un réseau social public dont les utilisateurs sont des agents IA.
- [device-check-go](https://github.com/rinchsan/device-check-go) - Bibliothèque cliente Go pour interagir avec l'[API DeviceCheck d'iOS](https://developer.apple.com/documentation/devicecheck) v1.
- [discordgo](https://github.com/bwmarrin/discordgo) - Liaisons Go pour l'API de discussion de Discord.
- [disgo](https://github.com/switchupcb/disgo) - Surcouche Go pour l'API Discord.
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Client non officiel pour Go de l'API de la passerelle de paiement Dusupay
- [ethrpc](https://github.com/onrik/ethrpc) - Liaisons Go pour l'API JSON RPC d'Ethereum.
- [facebook](https://github.com/huandu/facebook) - Bibliothèque Go prenant en charge l'API Graph de Facebook.
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Client non officiel pour Golang de l'API XML de la passerelle de paiement Fasapay.
- [fcm](https://github.com/maddevsio/fcm) - Bibliothèque Go pour Firebase Cloud Messaging.
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - SDK Go pour les feature flags [Featureflip](https://featureflip.io/), avec évaluation locale et mises à jour en streaming.
- [gads](https://github.com/emiddleton/gads) - API non officielle de Google Adwords.
- [gcm](https://github.com/Aorioli/gcm) - Bibliothèque Go pour Google Cloud Messaging.
- [geo-golang](https://github.com/codingsince1985/geo-golang) - Bibliothèque Go pour accéder aux API de géocodage et de géocodage inverse de [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/) et [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim).
- [github](https://github.com/google/go-github) - Bibliothèque Go pour accéder à l'API REST v3 de GitHub.
- [githubql](https://github.com/shurcooL/githubql) - Bibliothèque Go pour accéder à l'API GraphQL v4 de GitHub.
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - Bibliothèque Go pour accéder aux services [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) (Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud)
- [go-aws-news](https://github.com/circa10a/go-aws-news) - Application et bibliothèque Go pour récupérer les nouveautés d'AWS.
- [go-chronos](https://github.com/axelspringer/go-chronos) - Bibliothèque Go pour interagir avec le planificateur de tâches [Chronos](https://mesos.github.io/chronos/)
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - Bibliothèque cliente Go pour [Gerrit Code Review](https://www.gerritcodereview.com/).
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - Tout petit client Go pour l'API de HackerNews.
- [go-here](https://github.com/abdullahselek/go-here) - Bibliothèque cliente Go pour les API de géolocalisation de HERE.
- [go-hibp](https://github.com/wneessen/go-hibp) - Liaison Go simple pour les API « Have I Been Pwned ».
- [go-imgur](https://github.com/koffeinsource/go-imgur) - Bibliothèque cliente Go pour [imgur](https://imgur.com)
- [go-jira](https://github.com/andygrunwald/go-jira) - Bibliothèque cliente Go pour [Atlassian JIRA](https://www.atlassian.com/software/jira)
- [go-lark](https://github.com/go-lark/lark) - Un SDK non officiel et facile à utiliser pour la plateforme ouverte de [Feishu](https://open.feishu.cn/) et [Lark](https://open.larksuite.com/).
- [go-marathon](https://github.com/gambol99/go-marathon) - Bibliothèque Go pour interagir avec le PaaS Marathon de Mesosphere.
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - Bibliothèque cliente Go pour accéder à l'[API MyAnimeList](https://myanimelist.net/apiconfig/references/api/v2).
- [go-openai](https://github.com/sashabaranov/go-openai) - Bibliothèque Go pour les API ChatGPT, DALL·E et Whisper d'OpenAI.
- [go-openproject](https://github.com/manuelbcd/go-openproject) - Bibliothèque cliente Go pour interagir avec l'API d'[OpenProject](https://docs.openproject.org/api/).
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - Module Go pour travailler avec les [collections Postman](https://learning.getpostman.com/docs/postman/collections/creating-collections/) (compatible avec Insomnia).
- [go-redoc](https://github.com/mvrilo/go-redoc) - Interface de documentation OpenAPI/Swagger intégrée pour Go, utilisant [ReDoc](https://redocly.com/).
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - Bibliothèque Go pour l'[API REST Countries](https://countrylayer.com/).
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - Bibliothèque cliente Go pour interagir avec l'[API REST de Salesforce](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm).
- [go-sophos](https://github.com/esurdam/go-sophos) - Bibliothèque cliente Go pour l'[API REST de Sophos UTM](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en), sans dépendance.
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - Bibliothèque Go contenant une [Swagger UI](https://swagger.io/tools/swagger-ui/) précompilée pour servir du JSON Swagger.
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Client de l'API de la plateforme de publication Telegraph.
- [go-trending](https://github.com/andygrunwald/go-trending) - Bibliothèque Go pour accéder aux [dépôts](https://github.com/trending) et aux [développeurs](https://github.com/trending/developers) tendance sur GitHub.
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - Bibliothèque cliente Go pour l'API d'[Unsplash.com](https://unsplash.com).
- [go-xkcd](https://github.com/nishanths/go-xkcd) - Client Go pour l'API de xkcd.
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Bibliothèque cliente Go pour l'API Yapla v2.0.
- [goagi](https://github.com/staskobzar/goagi) - Bibliothèque Go pour créer des applications agi/fastagi pour l'autocommutateur Asterisk.
- [goami2](https://github.com/staskobzar/goami2) - Bibliothèque AMI v2 pour l'autocommutateur Asterisk.
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Bibliothèque Golang fournissant des abstractions de base de données courantes et simples au-dessus de Google Sheets.
- [gogtrends](https://github.com/groovili/gogtrends) - API non officielle de Google Trends.
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - Surcouche Golang pour l'API v3 de The Movie Database.
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics est une bibliothèque Go pour récupérer des paroles de chansons depuis le site Wikia.
- [gomalshare](https://github.com/MonaxGT/gomalshare) - Bibliothèque Go pour l'API MalShare [malshare.com](https://www.malshare.com/)
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Bibliothèque cliente Go pour MusicBrainz WS2.
- [google](https://github.com/google/google-api-go-client) - API Google générées automatiquement pour Go.
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Surcouche simple pour faciliter les rapports Google Analytics.
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Bibliothèque cliente Go pour les API Google Cloud.
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - Bibliothèque cliente Go pour l'[Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/).
- [gopensky](https://github.com/navidys/gopensky) - Implémentation d'un client Go pour l'API en direct d'[OpenSKY Network](https://opensky-network.org/) (données ADS-B et Mode S de l'espace aérien).
- [gosip](https://github.com/koltyakov/gosip) - Bibliothèque cliente pour SharePoint.
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm est une bibliothèque Go qui implémente le protocole de communication nécessaire pour écrire en Go des spouts et des bolts Storm communiquant avec les shells Storm.
- [hipchat](https://github.com/andybons/hipchat) - Ce projet implémente une bibliothèque cliente Golang pour l'API Hipchat.
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - Un paquet Golang pour communiquer avec HipChat via XMPP.
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - Client Go pour l'API httpSMS.
- [igdb](https://github.com/Henry-Sarabia/igdb) - Client Go pour l'[API Internet Game Database](https://api.igdb.com/).
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - Surcouche Go pour l'API IP2Location.io [IP2Location.io](https://www.ip2location.io/).
- [jokeapi-go](https://github.com/icelain/jokeapi) - Client Go pour [JokeAPI](https://sv443.net/jokeapi/v2/).
- [lark](https://github.com/chyroc/lark) - SDK Go de l'Open API de [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/), prenant en charge TOUTES les Open API et les callbacks d'événements.
- [lastpass-go](https://github.com/ansd/lastpass-go) - Bibliothèque cliente Go pour l'API [LastPass](https://www.lastpass.com/).
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Client Go pour l'API Lemon Squeezy.
- [libgoffi](https://github.com/clevabit/libgoffi) - Boîte à outils d'adaptateurs de bibliothèques pour l'intégration native de [libffi](https://sourceware.org/libffi/)
- [libopenapi](https://github.com/pb33f/libopenapi) - Analysez, validez et exploitez des spécifications OpenAPI, Swagger, Overlays et Arazzo.
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Client Go pour l'API v2 de Manus AI, avec automatisation de tâches, gestion de fichiers, webhooks et modèles typés de façon sûre.
- [Medium](https://github.com/Medium/medium-sdk-go) - SDK Golang pour l'API OAuth2 de Medium.
- [megos](https://github.com/andygrunwald/megos) - Bibliothèque cliente pour accéder à un cluster [Apache Mesos](https://mesos.apache.org/).
- [minio-go](https://github.com/minio/minio-go) - Bibliothèque Go de Minio pour le stockage cloud compatible Amazon S3.
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel est une bibliothèque pour suivre des événements et envoyer des mises à jour de profils Mixpanel à Mixpanel depuis vos applications Go.
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Client Go pour l'API de Nansen AI, avec analyses Smart Money, filtre de jetons, profileur et aucune dépendance.
- [newsapi-go](https://github.com/jellydator/newsapi-go) - Client Go pour [NewsAPI](https://newsapi.org/).
- [openaigo](https://github.com/otiai10/openaigo) - Bibliothèque cliente Go pour l'API ChatGPT GPT3/GPT3.5 d'OpenAI.
- [patreon-go](https://github.com/mxpv/patreon-go) - Bibliothèque Go pour l'API Patreon.
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - Surcouche pour l'API de paiement PayPal.
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Le SDK Go de l'API REST de Playlyfe.
- [pushover](https://github.com/gregdel/pushover) - Surcouche Go pour l'API Pushover.
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - Bibliothèque Go pour l'API de [RAWG Video Games Database](https://rawg.io/)
- [shopify](https://github.com/rapito/go-shopify) - Bibliothèque Go pour effectuer des requêtes CRUD sur l'API Shopify.
- [simples3](https://github.com/rhnvrm/simples3) - Bibliothèque AWS S3 simple et sans fioritures, écrite en Go, utilisant REST avec la signature V4.
- [slack](https://github.com/slack-go/slack) - API Slack en Go.
- [smite](https://github.com/sergiotapia/smitego) - Paquet Go qui encapsule l'accès à l'API du jeu Smite.
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - Bibliothèque cliente Go et client en ligne de commande pour l'API web de SonarQube.
- [spec](https://github.com/oaswrap/spec) - Constructeur OpenAPI 3.x léger prenant en charge la génération statique et des frameworks populaires comme chi, echo, gin, fiber, mux et d'autres.
- [spotify](https://github.com/rapito/go-spotify) - Bibliothèque Go pour accéder à l'API web de Spotify.
- [steam](https://github.com/sostronk/go-steam) - Bibliothèque Go pour interagir avec les serveurs de jeu Steam.
- [stripe](https://github.com/stripe/stripe-go) - Client Go pour l'API Stripe.
- [swag](https://github.com/zc2638/swag) - Surcouche Go simple, sans commentaires, pour créer des API compatibles Swagger 2.0. Prend en charge la plupart des frameworks de routage, comme le routeur intégré, gin, chi, mux, echo, httprouter, fasthttp et d'autres.
- [textbelt](https://github.com/dietsche/textbelt) - Client Go pour l'API d'envoi de SMS de textbelt.com.
- [threads-go](https://github.com/tirthpatell/threads-go) - Bibliothèque cliente Go pour l'API Threads de Meta, avec OAuth 2.0, limitation de débit et gestion des erreurs typée de façon sûre.
- [Trello](https://github.com/adlio/trello) - Surcouche Go pour l'API Trello.
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - Surcouche Go pour l'API TripAdvisor.
- [tumblr](https://github.com/mattcunningham/gumblr) - Surcouche Go pour l'API v2 de Tumblr.
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Surcouche Go et client en ligne de commande pour l'API v2 d'Uptime Robot.
- [vl-go](https://github.com/verifid/vl-go) - Bibliothèque cliente Go pour l'API de la couche de vérification d'identité VerifID.
- [webhooks](https://github.com/go-playground/webhooks) - Récepteur de webhooks pour GitHub et Bitbucket.
- [wit-go](https://github.com/wit-ai/wit-go) - Client Go pour l'API HTTP de wit.ai.
- [ynab](https://github.com/brunomvsouza/ynab.go) - Surcouche Go pour l'API YNAB.
- [zooz](https://github.com/gojuno/go-zooz) - Client Go pour l'API Zooz.

**[⬆ retour en haut](#contents)**

## Utilitaires

_Utilitaires et outils généraux pour vous faciliter la vie._

- [abstract](https://github.com/maxbolgarin/abstract) - Abstractions et utilitaires pour se débarrasser du code répétitif dans la logique métier.
- [apm](https://github.com/topfreegames/apm) - Gestionnaire de processus pour les applications Golang, avec une API HTTP.
- [backscanner](https://github.com/icza/backscanner) - Un scanner semblable à bufio.Scanner, mais qui lit et renvoie les lignes dans l'ordre inverse, en partant d'une position donnée et en remontant.
- [bed](https://github.com/itchyny/bed) - Un éditeur binaire à la Vim écrit en Go.
- [blank](https://github.com/Henry-Sarabia/blank) - Vérifie ou supprime les blancs et les espaces dans les chaînes.
- [bleep](https://github.com/sinhashubham95/bleep) - Exécutez autant d'actions que vous voulez sur n'importe quel ensemble de signaux du système, en Go.
- [boilr](https://github.com/tmrts/boilr) - Outil CLI ultra-rapide pour créer des projets à partir de modèles de base.
- [boring](https://github.com/alebeck/boring) - Gestionnaire de tunnels SSH simple en ligne de commande.
- [changie](https://github.com/miniscruff/changie) - Outil automatisé de journal des modifications pour préparer les versions, avec de nombreuses options de personnalisation.
- [chyle](https://github.com/antham/chyle) - Générateur de journal des modifications à partir d'un dépôt Git, offrant de multiples possibilités de configuration.
- [circuit](https://github.com/cep21/circuit) - Une implémentation Go efficace et complète, à la Hystrix, du patron disjoncteur (circuit breaker).
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Disjoncteurs (circuit breakers) en Go.
- [clipboard](https://github.com/golang-design/clipboard) - 📋 paquet de presse-papiers multiplateforme en Go.
- [clockwork](https://github.com/jonboulle/clockwork) - Une fausse horloge simple pour Golang.
- [cmd](https://github.com/SimonBaeumer/cmd) - Bibliothèque pour exécuter des commandes shell sous OS X, Windows et Linux.
- [config-file-validator](https://github.com/Boeing/config-file-validator) - Outil multiplateforme pour valider des fichiers de configuration.
- [contem](https://github.com/maxbolgarin/contem) - Remplacement direct de context.Context pour l'arrêt propre des applications Go.
- [cookie](https://github.com/syntaqx/cookie) - Paquet d'analyse de structures de cookies et de fonctions utilitaires.
- [copy-pasta](https://github.com/jutkko/copy-pasta) - Presse-papiers universel multi-postes qui utilise un backend de type S3 pour le stockage.
- [countries](https://github.com/biter777/countries) - Implémentation complète des normes ISO-3166-1, ISO-4217, UIT-T E.164, Unicode CLDR et ccTLD de l'IANA.
- [countries](https://github.com/pioz/countries) - Tout ce dont vous avez besoin pour travailler avec des pays en Go.
- [create-go-app](https://github.com/create-go-app/cli) - Une CLI puissante pour créer en une seule commande un nouveau projet prêt pour la production, avec backend (Golang), frontend (JavaScript, TypeScript) et automatisation du déploiement (Ansible, Docker).
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo est une application en TUI écrite entièrement en Go pour surveiller et observer les cours des cryptomonnaies en temps réel !
- [ctop](https://github.com/bcicen/ctop) - Interface [à la top](https://ctop.sh) (par ex. htop) pour les métriques des conteneurs.
- [ctxutil](https://github.com/posener/ctxutil) - Une collection de fonctions utilitaires pour les contextes.
- [cvt](https://github.com/shockerli/cvt) - Convertissez facilement et de façon sûre n'importe quelle valeur vers un autre type.
- [dbt](https://github.com/nikogura/dbt) - Un framework pour exécuter des binaires signés à mise à jour automatique depuis un dépôt central de confiance.
- [Death](https://github.com/vrecan/death) - Gestion de l'arrêt des applications Go au moyen de signaux.
- [debounce](https://github.com/floatdrop/debounce) - Un anti-rebond (debouncer) sans allocation écrit en Go.
- [delve](https://github.com/derekparker/delve) - Débogueur Go.
- [dive](https://github.com/wagoodman/dive) - Un outil pour explorer chaque couche d'une image Docker.
- [dlog](https://github.com/kirillDanshin/dlog) - Logger contrôlé à la compilation pour alléger vos versions publiées sans supprimer les appels de débogage.
- [EaseProbe](https://github.com/megaease/easeprobe) - Un outil simple, autonome et léger qui peut servir de démon de contrôle de santé/d'état, avec prise en charge des sondes HTTP/TCP/SSH/Shell/Client/... et des notifications Slack/Discord/Telegram/SMS...
- [equalizer](https://github.com/reugn/equalizer) - Collection de gestionnaires de quotas et de limiteurs de débit pour Go.
- [ergo](https://github.com/cristianoliveira/ergo) - La gestion de plusieurs services locaux tournant sur différents ports, en toute simplicité.
- [evaluator](https://github.com/nullne/evaluator) - Évalue dynamiquement une expression fondée sur les s-expressions. Simple et facile à étendre.
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Patrons de tolérance aux pannes et de résilience pour Go.
- [filetype](https://github.com/h2non/filetype) - Petit paquet pour déduire le type d'un fichier en vérifiant sa signature (nombres magiques).
- [filler](https://github.com/yaronsumel/filler) - petit utilitaire pour remplir des structures à l'aide de la balise « fill ».
- [filter](https://github.com/gookit/filter) - fournit le filtrage, l'assainissement et la conversion de données Go.
- [fzf](https://github.com/junegunn/fzf) - Outil de recherche approximative en ligne de commande écrit en Go.
- [generate](https://github.com/go-playground/generate) - exécute go generate de façon récursive sur un chemin ou une variable d'environnement donnés, avec possibilité de filtrer par expression régulière.
- [gh-image](https://github.com/drogers0/gh-image) - Une extension de la CLI gh qui téléverse des images vers les tickets, PR et README GitHub depuis la ligne de commande, en produisant des URL user-attachments qui respectent la visibilité du dépôt.
- [ghokin](https://github.com/antham/ghokin) - Formateur parallélisé sans dépendance externe pour gherkin (cucumber, behat...).
- [git-time-metric](https://github.com/git-time-metric/gtm) - Suivi du temps simple, transparent et léger pour Git.
- [git-tools](https://github.com/kazhuravlev/git-tools) - Outil pour faciliter la gestion des tags Git.
- [gitbatch](https://github.com/isacikgoz/gitbatch) - gérez vos dépôts Git en un seul endroit.
- [gitcs](https://github.com/knbr13/gitcs/) - Git Commits Visualizer, outil CLI pour visualiser vos commits Git sur votre machine locale.
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Fonctionnalités prêtes pour la production pour les frameworks web en Go.
- [go-astitodo](https://github.com/asticode/go-astitodo) - Analyse les TODO de votre code Go.
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - outil go:generate pour encapsuler les symboles exportés par les plugins Golang (1.8 uniquement).
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - Bibliothèques et outils CLI bsdiff et bspatch en Go pur.
- [go-clip](https://github.com/prashantgupta24/go-clip) - Un gestionnaire de presse-papiers minimaliste pour Mac.
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Ensembles génériques de constantes typées avec analyse sûre des chaînes, pour combler l'absence de type enum en Go.
- [go-convert](https://github.com/Eun/go-convert) - Le paquet go-convert permet de convertir une valeur vers un autre type.
- [go-countries](https://github.com/mikekonan/go-countries) - Recherche légère parmi les codes ISO-3166.
- [go-dry](https://github.com/ungerik/go-dry) - Paquet DRY (don't repeat yourself, ne vous répétez pas) pour Go.
- [go-events](https://github.com/deatil/go-events) - Un paquet Go d'événements et d'abonnement aux événements, comme les fonctions de hook de WordPress.
- [go-funk](https://github.com/thoas/go-funk) - Bibliothèque utilitaire Go moderne qui fournit des fonctions pratiques (map, find, contains, filter, chunk, reverse...).
- [go-health](https://github.com/Talento90/go-health) - Le paquet health simplifie l'ajout de contrôles de santé à vos services.
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - Bibliothèque Go pour encoder des structures en champs d'en-tête.
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - Une CLI pour supprimer les versions inutilisées ou antérieures des fonctions AWS Lambda.
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock est une bibliothèque de verrous implémentant un mutex en lecture-écriture et un trylock en lecture-écriture sans famine.
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - Une bibliothèque de filtrage par motifs (pattern matching) inspirée de ts-pattern.
- [go-pkg](https://github.com/chenquan/go-pkg) - Une boîte à outils Go.
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Paquet Go pour travailler avec les Problem Details.
- [go-qr](https://github.com/piglig/go-qr) - Un générateur de codes QR natif, de haute qualité et minimaliste.
- [go-rate](https://github.com/beefsack/go-rate) - Limiteur de débit temporisé pour Go.
- [go-safecast](https://github.com/ccoVeille/go-safecast) - Bibliothèque de conversion sûre entre types numériques, qui empêche les dépassements de capacité des entiers, vers le haut comme vers le bas (répond à gosec G115 et CWE-190).
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Générateur de sitemaps XML écrit en Go.
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - Fonctions utilitaires génériques typées de façon sûre pour les slices, maps, chaînes, erreurs, JSON, HTTP et conteneurs, organisées en petits paquets adoptables indépendamment.
- [go-trigger](https://github.com/sadlil/go-trigger) - Déclencheur d'événements global pour Go : enregistrez des événements avec un identifiant et déclenchez-les depuis n'importe où dans votre projet.
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper est un paquet de disjoncteurs pour Go qui permet de gérer des circuits et de contrôler leur état.
- [go-type](https://github.com/mikekonan/go-types) - Bibliothèque fournissant des types Go pour le stockage, la validation et le transfert des codes ISO-4217, ISO-3166 et d'autres types.
- [go-utils](https://github.com/Goldziher/go-utils) - Utilitaires génériques simples et performants pour Go, inspirés de JavaScript et Python (map, filter, reduce et plus encore).
- [goback](https://github.com/carlescere/goback) - Paquet Go simple de temporisation exponentielle.
- [goctx](https://github.com/zerosnake0/goctx) - Récupérez vos valeurs de contexte avec de hautes performances.
- [godaemon](https://github.com/VividCortex/godaemon) - Utilitaire pour écrire des démons.
- [godoclive](https://github.com/syst3mctl/godoclive) - Génère une documentation d'API interactive à partir des gestionnaires HTTP Go, par analyse statique des routeurs chi, gin et net/http.
- [godropbox](https://github.com/dropbox/godropbox) - Bibliothèques communes de Dropbox pour écrire des services/applications Go.
- [gofn](https://github.com/tiendc/gofn) - Fonctions utilitaires haute performance écrites à l'aide des génériques, pour Go 1.18+.
- [golarm](https://github.com/msempere/golarm) - Déclenche des alarmes à partir d'événements système.
- [golog](https://github.com/mlimaloureiro/golog) - Outil CLI simple et léger pour suivre le temps passé sur vos tâches.
- [gopencils](https://github.com/bndr/gopencils) - Petit paquet simple pour consommer facilement des API REST.
- [goplaceholder](https://github.com/michiwend/goplaceholder) - une petite bibliothèque Golang pour générer des images de substitution.
- [goreadability](https://github.com/philipjkim/goreadability) - Extracteur de résumés de pages web utilisant Facebook Open Graph et readability d'arc90.
- [goreleaser](https://github.com/goreleaser/goreleaser) - Livrez des binaires Go aussi vite et facilement que possible.
- [goreporter](https://github.com/wgliang/goreporter) - Outil Golang qui effectue analyse statique, tests unitaires et revue de code, et génère un rapport de qualité du code.
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - Bibliothèque cliente SeaweedFS presque complète.
- [gostrutils](https://github.com/ik5/gostrutils) - Collections de fonctions de manipulation et de conversion de chaînes.
- [gotenv](https://github.com/subosito/gotenv) - Charge des variables d'environnement depuis `.env` ou n'importe quel `io.Reader`, en Go.
- [goval](https://github.com/maja42/goval) - Évalue des expressions arbitraires en Go.
- [graterm](https://github.com/skovtunenko/graterm) - Fournit des primitives pour réaliser une terminaison propre (GRAceful TERMination, c'est-à-dire un arrêt) ordonnée (séquentielle/concurrente) dans les applications Go.
- [grofer](https://github.com/pesos/grofer) - Un outil de surveillance du système et des ressources écrit en Golang !
- [gubrak](https://github.com/novalagung/gubrak) - Bibliothèque utilitaire Golang avec du sucre syntaxique. C'est comme lodash, mais pour Golang.
- [handy](https://github.com/miguelpragier/handy) - De nombreux utilitaires et fonctions pratiques, comme des gestionnaires/formateurs de chaînes et des validateurs.
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Un test de disponibilité (readiness) simple mais puissant pour Kubernetes.
- [hostctl](https://github.com/guumaster/hostctl) - Un outil CLI pour gérer /etc/hosts avec des commandes simples.
- [htcat](https://github.com/htcat/htcat) - Utilitaire de requêtes HTTP GET parallèles et en pipeline.
- [hub](https://github.com/github/hub) - encapsule les commandes git avec des fonctionnalités supplémentaires pour interagir avec GitHub depuis le terminal.
- [immortal](https://github.com/immortal/immortal) - Superviseur multiplateforme pour \*nix (indépendant du système d'exploitation).
- [jet](https://github.com/NicoNex/jet) - Just Edit Text : un outil rapide et puissant pour rechercher et remplacer le contenu et les noms de fichiers à l'aide d'expressions régulières.
- [jsend](https://github.com/clevergo/jsend) - Implémentation de JSend écrite en Go.
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - Visionneuse interactive de journaux JSON.
- [jump](https://github.com/gsamokovarov/jump) - Jump vous aide à naviguer plus vite en apprenant vos habitudes.
- [just](https://github.com/kazhuravlev/just) - Simplement une collection de fonctions utiles pour travailler avec des structures de données génériques.
- [koazee](https://github.com/wesovilabs/koazee) - Bibliothèque inspirée de l'évaluation paresseuse et de la programmation fonctionnelle, qui simplifie le travail avec les tableaux.
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - Découverte et inventaire des équipements réseau, avec étiquetage persistant, analyse de plusieurs réseaux et intégration de Tailscale.
- [lang](https://github.com/maxbolgarin/lang) - Des one-liners génériques pour travailler avec les variables, slices et maps sans code répétitif.
- [lets-go](https://github.com/aplescia-chwy/lets-go) - Module Go qui fournit des utilitaires courants pour le développement d'API REST cloud native. Contient aussi des utilitaires propres à AWS.
- [limiters](https://github.com/mennanov/limiters) - Limiteurs de débit pour les applications distribuées en Golang, avec backends configurables et verrous distribués.
- [lo](https://github.com/samber/lo) - Une bibliothèque Go à la Lodash fondée sur les génériques de Go 1.18+ (map, filter, contains, find...)
- [loncha](https://github.com/kazu/loncha) - Des utilitaires haute performance pour les slices.
- [lrserver](https://github.com/jaschaephraim/lrserver) - Serveur LiveReload pour Go.
- [mani](https://github.com/alajmo/mani) - Outil CLI pour vous aider à gérer plusieurs dépôts.
- [mc](https://github.com/minio/mc) - Minio Client fournit des outils minimaux pour travailler avec le stockage cloud compatible Amazon S3 et les systèmes de fichiers.
- [mergo](https://github.com/imdario/mergo) - Assistant pour fusionner des structures et des maps en Golang. Utile pour les valeurs de configuration par défaut, en évitant les cascades de if.
- [mimemagic](https://github.com/zRedShift/mimemagic) - Bibliothèque/utilitaire de détection MIME ultra-performant en Go pur.
- [mimetype](https://github.com/gabriel-vasile/mimetype) - Paquet de détection du type MIME fondé sur les nombres magiques.
- [minify](https://github.com/tdewolff/minify) - Minificateurs rapides pour les formats de fichiers HTML, CSS, JS, XML, JSON et SVG.
- [minquery](https://github.com/icza/minquery) - Requêtes MongoDB / mgo.v2 prenant en charge une pagination efficace (curseurs pour reprendre le listage des documents là où on s'était arrêté).
- [moldova](https://github.com/StabbyCutyou/moldova) - Utilitaire pour générer des données aléatoires à partir d'un modèle d'entrée.
- [mole](https://github.com/davrodpin/mole) - application CLI pour créer facilement des tunnels SSH.
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - Pagination MongoDB pour le paquet officiel mongodb/mongo-go-driver, prenant en charge à la fois les requêtes classiques et les pipelines d'agrégation.
- [mssqlx](https://github.com/linxGnu/mssqlx) - Bibliothèque cliente de bases de données servant de proxy pour toute architecture maître-esclave ou maître-maître. Conçue pour être légère et équilibrer automatiquement la charge.
- [multitick](https://github.com/VividCortex/multitick) - Multiplexeur pour tickers alignés.
- [netbug](https://github.com/e-dard/netbug) - Profilage à distance facile de vos services.
- [nfdump](https://github.com/chrispassas/nfdump) - Lit les fichiers netflow de nfdump.
- [nostromo](https://github.com/pokanop/nostromo) - CLI pour créer des alias puissants.
- [okrun](https://github.com/xta/okrun) - rouleau compresseur d'erreurs pour go run.
- [olaf](https://github.com/btnguyen2k/olaf) - Snowflake de Twitter implémenté en Go.
- [onecache](https://github.com/adelowo/onecache) - Bibliothèque de mise en cache prenant en charge plusieurs magasins backend (Redis, Memcached, système de fichiers, etc.).
- [optional](https://github.com/kazhuravlev/optional) - Champs de structures et variables optionnels.
- [panicparse](https://github.com/maruel/panicparse) - Regroupe les goroutines similaires et colore les vidages de pile.
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - Bibliothèque de filtrage par motifs.
- [peco](https://github.com/peco/peco) - Outil de filtrage interactif simpliste.
- [pgo](https://github.com/arthurkushman/pgo) - Fonctions pratiques pour la communauté PHP.
- [pm](https://github.com/VividCortex/pm) - Gestionnaire de processus (c'est-à-dire de goroutines) avec une API HTTP.
- [pointer](https://github.com/xorcare/pointer) - Le paquet pointer contient des routines utilitaires pour simplifier la création de champs optionnels de type de base.
- [ptr](https://github.com/gotidy/ptr) - Paquet fournissant des fonctions pour créer simplement des pointeurs à partir de constantes de types de base.
- [rate](https://github.com/webriots/rate) - Bibliothèque de limitation de débit haute performance, avec les stratégies token bucket et AIMD.
- [rclient](https://github.com/zpatrick/rclient) - Client lisible, flexible et simple à utiliser pour les API REST.
- [release](https://github.com/tomodian/release) - CLI pour les journaux des modifications au format Keep-a-changelog.
- [relimpact](https://github.com/hashmap-kz/relimpact) - Rapports rapides de compatibilité d'API pour les projets Go.
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - Contrôlez la souris et le clavier depuis un smartphone.
- [repeat](https://github.com/ssgreg/repeat) - Implémentation Go de différentes stratégies de temporisation, utiles pour réessayer des opérations et envoyer des pulsations.
- [request](https://github.com/mozillazg/request) - Requêtes HTTP en Go pour les humains™.
- [rerun](https://github.com/ivpusic/rerun) - Recompile et relance les applications Go lorsque le code source change.
- [rest-go](https://github.com/edermanoel94/rest-go) - Un paquet qui fournit de nombreuses méthodes utiles pour travailler avec des API REST.
- [retro](https://github.com/goioc/retro) - Bibliothèque pratique de nouvelles tentatives en cas d'erreur, très flexible (stratégies de temporisation, plafonds, etc.).
- [retry](https://github.com/kamilsk/retry) - Le mécanisme fonctionnel le plus avancé pour répéter des actions jusqu'à ce qu'elles réussissent.
- [retry](https://github.com/percolate/retry) - Un paquet de nouvelles tentatives simple mais hautement configurable pour Go.
- [retry](https://github.com/thedevsaddam/retry) - Paquet de mécanisme de nouvelles tentatives simple et facile pour Go.
- [retry](https://github.com/shafreeck/retry) - Une bibliothèque assez simple pour garantir que votre travail sera effectué.
- [retry-go](https://github.com/avast/retry-go) - Bibliothèque simple de mécanisme de nouvelles tentatives.
- [retry-go](https://github.com/rafaeljesus/retry-go) - Les nouvelles tentatives rendues simples et faciles pour Golang.
- [robustly](https://github.com/VividCortex/robustly) - Exécute des fonctions de manière résiliente, en interceptant les paniques et en relançant.
- [rospo](https://github.com/ferama/rospo) - Tunnels SSH simples et fiables avec un serveur SSH intégré, en Golang.
- [scan](https://github.com/blockloop/scan) - Lit directement des `sql.Rows` Golang dans des structures, des slices ou des types primitifs.
- [scan](https://github.com/wroge/scan) - Lit des lignes SQL dans n'importe quel type grâce aux génériques.
- [scany](https://github.com/georgysavva/scany) - Bibliothèque pour lire les données d'une base de données dans des structures Go, et plus encore.
- [serve](https://github.com/syntaqx/serve) - Un serveur HTTP statique partout où vous en avez besoin.
- [sesh](https://github.com/joshmedeski/sesh) - Sesh est une CLI qui vous aide à créer et gérer des sessions tmux rapidement et facilement à l'aide de zoxide.
- [set](https://github.com/nofeaturesonlybugs/set) - Mapping de structures et conversion de types souple, performants et flexibles.
- [shutdown](https://github.com/ztrue/shutdown) - Hooks d'arrêt d'application pour la gestion des `os.Signal`.
- [silk](https://github.com/chrispassas/silk) - Lit les fichiers netflow silk.
- [slice](https://github.com/psampaz/slice) - Fonctions typées de façon sûre pour les opérations courantes sur les slices Go.
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - Conversion de slices entre types primitifs.
- [slicer](https://github.com/leaanthony/slicer) - Facilite le travail avec les slices.
- [sorty](https://github.com/jfcg/sorty) - Tri concurrent / parallèle rapide.
- [sqlex](https://github.com/go-sqlex/sqlex) - Modernisation directement utilisable de jmoiron/sqlx, avec correction des bogues de l'analyseur lexical SQL, expansion automatique des clauses IN, hooks interchangeables et interfaces DB/Tx/Conn unifiées.
- [sqlx](https://github.com/jmoiron/sqlx) - fournit un ensemble d'extensions au-dessus de l'excellent paquet intégré database/sql.
- [sqlz](https://github.com/rfberaldo/sqlz) - Extension du paquet database/sql, ajoutant les requêtes nommées, la lecture dans des structures et les opérations par lots.
- [sshman](https://github.com/shoobyban/sshman) - Gestionnaire SSH des fichiers authorized_keys sur plusieurs serveurs distants.
- [stacktower](https://github.com/stacktower-io/stacktower) - Visualisez des graphes de dépendances sous forme de tours physiques, inspiré du XKCD n° 2347.
- [statiks](https://github.com/janiltonmaciel/statiks) - Serveur de fichiers HTTP statique, rapide et sans configuration.
- [Storm](https://github.com/asdine/storm) - Boîte à outils simple et puissante pour BoltDB.
- [structs](https://github.com/PumpkinSeed/structs) - Implémente des fonctions simples pour manipuler des structures.
- [throttle](https://github.com/yudppp/throttle) - Throttle est un objet qui effectue exactement une action par intervalle de temps.
- [tik](https://github.com/andy2046/tik) - Paquet de roue temporelle (timing wheel) simple et facile pour Go.
- [tome](https://github.com/cyruzin/tome) - Tome a été conçu pour paginer des API RESTful simples.
- [toolbox](https://github.com/viant/toolbox) - Utilitaires pour les slices, maps, multimaps, structures, fonctions et la conversion de données. Routeur de services, évaluateur de macros, tokeniseur.
- [UNIS](https://github.com/esemplastic/unis) - Common Architecture™ pour les utilitaires de chaînes en Go.
- [upterm](https://github.com/owenthereal/upterm) - Un outil permettant aux développeurs de partager des sessions de terminal/tmux de façon sécurisée sur le web. Il est parfait pour la programmation en binôme à distance, l'accès à des ordinateurs derrière des NAT/pare-feu, le débogage à distance et plus encore.
- [usql](https://github.com/knq/usql) - usql est une interface en ligne de commande universelle pour les bases de données SQL.
- [util](https://github.com/shomali11/util) - Collection de fonctions utilitaires utiles (chaînes, concurrence, manipulations...).
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - Exécute une commande périodiquement et expose la dernière sortie STDOUT, ou son delta enrichi, sous forme de point d'accès HTTP.
- [wifiqr](https://github.com/reugn/wifiqr) - Générateur de codes QR Wi-Fi.
- [wuzz](https://github.com/asciimoo/wuzz) - Outil CLI interactif d'inspection HTTP.
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy fournit une bibliothèque de diff et de patch binaires en Golang.
- [xpool](https://github.com/peczenyj/xpool) - Encore un pool d'objets typé de façon sûre pour Golang, utilisant les génériques.
- [yogo](https://github.com/antham/yogo) - Consultez vos e-mails yopmail depuis la ligne de commande.

**[⬆ retour en haut](#contents)**

## UUID

_Bibliothèques pour travailler avec des UUID._

- [fastuuid](https://github.com/rekby/fastuuid) - Génère rapidement des UUIDv4 sous forme de chaîne ou d'octets.
- [goid](https://github.com/jakehl/goid) - Génère et analyse des UUID V4 conformes à la RFC4122.
- [gouid](https://github.com/twharmon/gouid) - Génère des identifiants aléatoires sous forme de chaînes, cryptographiquement sûrs, avec une seule allocation.
- [guid](https://github.com/sdrapkin/guid) - Générateur de GUID rapide et cryptographiquement sûr pour Go (environ 10 fois plus rapide que `uuid`).
- [nanoid](https://github.com/aidarkhanov/nanoid) - Un tout petit générateur Go efficace d'identifiants uniques sous forme de chaînes.
- [nanoid](https://github.com/sixafter/nanoid) - Générateur efficace et cryptographiquement sûr pour créer rapidement et de façon concurrente des NanoID et des UUID.
- [sno](https://github.com/muyo/sno) - Identifiants uniques compacts, triables et rapides, avec métadonnées intégrées.
- [ulid](https://github.com/oklog/ulid) - Implémentation Go des ULID (Universally Unique Lexicographically Sortable Identifier).
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - Identifiants uniques sûrs et rapides, sans tracas, avec des commandes.
- [uuid](https://github.com/agext/uuid) - Génère, encode et décode des UUID v1 avec un identifiant de nœud aléatoire rapide ou de qualité cryptographique.
- [uuid](https://github.com/gofrs/uuid) - Implémentation des identifiants universellement uniques (UUID). Prend en charge à la fois la création et l'analyse des UUID. Fork activement maintenu de satori uuid.
- [uuid](https://github.com/google/uuid) - Paquet Go pour les UUID fondé sur la RFC 4122 et DCE 1.1 : Authentication and Security Services.
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - Une toute petite bibliothèque Go sans dépendance qui valide les UUID selon le format standard de la RFC 4122 et convertit les UUIDv7() en horodatages UTC.
- [wuid](https://github.com/edwingeng/wuid) - Un générateur extrêmement rapide de nombres uniques au niveau mondial.
- [xid](https://github.com/rs/xid) - Xid est une bibliothèque de génération d'identifiants uniques au niveau mondial, prête à être utilisée en toute sécurité directement dans votre code serveur.

**[⬆ retour en haut](#contents)**

## Validation

_Bibliothèques de validation._

- [checkdigit](https://github.com/osamingo/checkdigit) - Fournit des algorithmes de chiffre de contrôle (Luhn, Verhoeff, Damm) et des calculateurs (ISBN, EAN, JAN, UPC, etc.).
- [checker](https://github.com/cinar/checker) - Validation des entrées et normalisation sur place sans dépendance, avec balises de structures, 23 locales et génération de JSON Schema.
- [go-validator](https://github.com/tiendc/go-validator) - Bibliothèque de validation utilisant les génériques.
- [gody](https://github.com/guiferpa/gody) - :balloon: Un validateur de structures léger pour Go.
- [govalid](https://github.com/twharmon/govalid) - Validation rapide de structures fondée sur les balises.
- [govalidator](https://github.com/asaskevich/govalidator) - Validateurs et assainisseurs pour les chaînes, les nombres, les slices et les structures.
- [govalidator](https://github.com/thedevsaddam/govalidator) - Validez les données des requêtes Golang avec des règles simples. Fortement inspiré de la validation des requêtes de Laravel.
- [govy](https://github.com/nobl9/govy) - règles de validation fortement typées via une interface fonctionnelle, reposant sur les génériques et sans réflexion, avec une attention particulière portée à des messages d'erreur clairs et riches en informations.
- [hvalid](https://github.com/lyonnee/hvalid) hvalid est une bibliothèque de validation légère écrite en langage Go. Elle fournit une interface de validateur personnalisé et une série de fonctions de validation courantes pour aider les développeurs à implémenter rapidement la validation des données.
- [jio](https://github.com/faceair/jio) - jio est un validateur de schémas JSON similaire à [joi](https://github.com/hapijs/joi).
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - Prend en charge la validation de divers types de données (structures, chaînes, maps, slices, etc.) avec des règles de validation configurables et extensibles, exprimées par des constructions de code habituelles plutôt que par des balises de structures.
- [validate](https://github.com/gookit/validate) - Paquet Go de validation et de filtrage des données. Prend en charge la validation des données Map, Struct, Request (Form, JSON, url.Values, fichiers téléversés) et bien d'autres fonctionnalités.
- [validate](https://github.com/gobuffalo/validate) - Ce paquet fournit un framework pour écrire des validations pour les applications Go.
- [validator](https://github.com/go-playground/validator) - Validation de structures et de champs Go, y compris entre champs, entre structures et en profondeur dans les maps, slices et tableaux.
- [Validator](https://github.com/go-the-way/validator) - Un validateur de modèles léger écrit en Go. Contient les fonctions de validation Min, Max, MinLength, MaxLength, Length, Enum et Regex.
- [valix](https://github.com/marrow16/valix) Paquet Go pour valider des requêtes
- [vx](https://github.com/sevlyar/vx) - Validation construite à partir de petites vérifications composables, sans dépendance, avec un chemin d'erreur reconstructible.
- [Zog](https://github.com/Oudwins/zog) - Un constructeur de schémas inspiré de [Zod](https://github.com/colinhacks/zod) pour l'analyse et la validation de valeurs à l'exécution.
  **[⬆ retour en haut](#contents)**

## Gestion de versions

_Bibliothèques de gestion de versions._

- [cli](https://gitlab.com/gitlab-org/cli) - Un outil en ligne de commande open source pour GitLab qui apporte les fonctionnalités intéressantes de GitLab dans votre terminal.
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go est une bibliothèque Go qui permet d'effectuer des actions sur les fournisseurs de gestion de versions.
- [ggc](https://github.com/bmf-san/ggc) - Un outil CLI Git offrant à la fois une ligne de commande traditionnelle et une interface interactive à recherche incrémentale, la prise en charge de workflows et des raccourcis clavier configurables.
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Serveur MCP local pour les opérations Git, utilisant Ollama pour économiser des jetons et éviter les fuites de secrets.
- [git2go](https://github.com/libgit2/git2go) - Liaisons Go pour libgit2.
- [githooks](https://github.com/gabyx/githooks) - Hooks Git par dépôt et partagés, versionnés et mis à jour automatiquement.
- [gitty](https://github.com/Omibranch/gitty) - CLI Git/GitHub en un seul binaire qui remplace add→commit→push par une seule commande ; syntaxe lisible, aucune dépendance externe.
- [go-git](https://github.com/go-git/go-git) - implémentation de Git hautement extensible en Go pur.
- [go-vcs](https://github.com/sourcegraph/go-vcs) - manipulez et inspectez des dépôts de gestion de versions en Go.
- [hercules](https://github.com/src-d/hercules) - obtenir des analyses avancées à partir de l'historique d'un dépôt Git.
- [hgo](https://github.com/beyang/hgo) - Hgo est une collection de paquets Go offrant un accès en lecture aux dépôts Mercurial locaux.

**[⬆ retour en haut](#contents)**

## Vidéo

_Bibliothèques pour manipuler la vidéo._

- [gmf](https://github.com/3d0c/gmf) - Liaisons Go pour les bibliothèques av\* de FFmpeg.
- [go-astiav](https://github.com/asticode/go-astiav) - De meilleures liaisons C pour ffmpeg en Go.
- [go-astisub](https://github.com/asticode/go-astisub) - Manipulez des sous-titres en Go (.srt, .stl, .ttml, .webvtt, .ssa/.ass, télétexte, .smi, etc.).
- [go-astits](https://github.com/asticode/go-astits) - Analysez et démultiplexez nativement en Go des flux de transport MPEG (.ts).
- [go-mpd](https://github.com/unki2aut/go-mpd) - Bibliothèque d'analyse et de génération de fichiers manifestes MPEG-DASH.
- [goav](https://github.com/giorgisio/goav) - Liaisons Go complètes pour FFmpeg.
- [gortsplib](https://github.com/aler9/gortsplib) - Bibliothèque serveur et client RTSP en Go pur.
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - Analyseur et générateur de listes de lecture HLS (M3U8), tenu à jour avec la spécification.
- [libvlc-go](https://github.com/adrg/libvlc-go) - Liaisons Go pour libvlc 2.X/3.X/4.X (utilisée par le lecteur multimédia VLC).
- [manifestor](https://github.com/alanzng/manifestor) - Bibliothèque sans dépendance pour analyser, filtrer, transformer et construire des manifestes HLS et DASH.
* [mosaic](https://github.com/farshidrezaei/mosaic) - Empaquetage vidéo à débit adaptatif (ABR) prévisible et prêt pour la production, pour Go (HLS et DASH CMAF).
- [mp4ff](https://github.com/Eyevinn/mp4ff) - Bibliothèque et outils pour travailler avec des fichiers MP4 contenant de la vidéo, de l'audio, des sous-titres ou des métadonnées.
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - Analyseur de flux de transport MPEG-2 qui vérifie la conformité temporelle des PCR et affiche les structures bas niveau TS, PSI et PES.
- [v4l](https://github.com/korandiz/v4l) - Bibliothèque de capture vidéo pour Linux, écrite en Go.

**[⬆ retour en haut](#contents)**

## Frameworks web

_Frameworks web full-stack._

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - Bibliothèque de serveur HTTP tout compris, avec routeur, pile de middlewares, hubs WebSocket, téléversement de fichiers et validation OpenAPI.
- [Andurel](https://github.com/mbvlabs/andurel) - Framework web Go full-stack inspiré de Rails, avec génération de squelettes, outillage de bases de données et frontends rendus côté serveur ou avec Inertia.
- [Atreugo](https://github.com/savsgio/atreugo) - Micro-framework web haute performance et extensible, sans aucune allocation mémoire dans les chemins critiques.
- [Barf](https://github.com/opensaucerer/barf) - Basically, A Remarkable Framework, pour créer des API web fondées sur JSON. Il est entièrement discret et ne réinvente pas la roue. Il est conçu pour qu'on puisse démarrer facilement et rapidement, tout en restant assez flexible pour des cas d'usage plus complexes.
- [Beego](https://github.com/beego/beego) - beego est un framework web open source et haute performance pour le langage de programmation Go.
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti est un framework d'applications web Go doté d'une syntaxe expressive et élégante. Confetti allie l'élégance de Laravel et la simplicité de Go.
- [Don](https://github.com/abemedia/go-don) - Un framework d'API très performant et simple à utiliser.
- [doors](https://github.com/doors-dev/doors) - Framework piloté par le serveur pour créer des applications web réactives et avec état, entièrement en Go.
- [Echo](https://github.com/labstack/echo) - Framework web Go minimaliste et haute performance.
- [Fastschema](https://github.com/fastschema/fastschema) - Un framework web Go flexible et un CMS headless.
- [Fiber](https://github.com/gofiber/fiber) - Un framework web inspiré d'Express.js, construit sur Fasthttp.
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - Framework pour des projets web modulaires. Comprend un concept de modules et offre des fonctionnalités d'injection de dépendances, de Configareas, d'i18n, de moteurs de modèles, de GraphQL, d'observabilité, de sécurité, d'événements, de routage et de routage inverse, etc.
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - Fournit des fonctionnalités de commerce électronique selon une architecture propre (DDD, ports et adaptateurs), que vous pouvez utiliser pour créer des applications de commerce électronique flexibles.
- [Fuego](https://github.com/go-fuego/fuego) - Le framework des développeurs Go pressés ! Framework web qui génère la spécification OpenAPI 3 à partir du code source.
- [Gin](https://github.com/gin-gonic/gin) - Gin est un framework web écrit en Go ! Il propose une API à la martini avec de bien meilleures performances, jusqu'à 40 fois plus rapide. Idéal si vous avez besoin de performances et d'une bonne productivité.
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Outil de liaison automatique des paramètres pour Gin et outils RPC pour Gin.
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - Un framework de microservices pensé d'abord pour gRPC. Ses fonctionnalités incluent la prise en charge d'un ODM pour Mongo, des ressources cloud (AWS/Azure/Google) et une injection de dépendances fluide adaptée à gRPC. En outre, grpc-web est pris en charge directement, ce qui permet d'accéder depuis le navigateur à toutes les API gRPC sans proxy.
- [Goa](https://github.com/goadesign/goa) - Goa propose une approche globale du développement d'API distantes et de microservices en Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr est un framework de développement de microservices aux choix affirmés.
- [GoFrame](https://github.com/gogf/gf) - GoFrame est un framework de développement d'applications Golang modulaire, puissant, haute performance et de classe entreprise.
- [Gone](https://github.com/gone-io/gone) - Un framework web et d'injection de dépendances léger, inspiré de Spring.
- [goravel](https://github.com/goravel/goravel) - Un framework web inspiré de Laravel, avec ORM, authentification, files d'attente, planification de tâches et bien d'autres fonctionnalités intégrées.
- [Goshtoso](https://github.com/araihu/goshtoso) - Composants d'interface rendus côté serveur pour les applications Go, construits avec templ, Tailwind CSS, HTMX et Alpine.js.
- [Goyave](https://github.com/go-goyave/goyave) - Framework d'API REST complet, axé sur un code propre et un développement rapide, avec de puissantes fonctionnalités intégrées.
- [Hertz](https://github.com/cloudwego/hertz) - Un framework HTTP Go haute performance et très extensible qui aide les développeurs à créer des microservices.
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot est un framework d'applications web haute performance avec configuration automatique et prise en charge de l'injection de dépendances.
- [httpsuite](https://github.com/rluders/httpsuite) - Analyse des requêtes HTTP et réponses de problème RFC 9457 pour Go, avec un cœur reposant uniquement sur la bibliothèque standard et une validation optionnelle.
- [Huma](https://github.com/danielgtaylor/huma/) - Framework pour des API REST/GraphQL modernes, avec OpenAPI 3 intégré, documentation générée et une CLI.
- [iWF](https://github.com/indeedeng/iwf) - iWF est une plateforme tout-en-un pour développer des processus métier de longue durée. Elle offre une abstraction pratique pour utiliser des bases de données, ElasticSearch, des files de messages, des minuteries durables et plus encore, avec une interface propre, simple et conviviale.
- [Lit](https://github.com/jvcoutinho/lit) - Framework web déclaratif très performant pour Golang, qui vise la simplicité et le confort d'utilisation.
- [Microservice](https://github.com/claygod/microservice) - Le framework pour créer des microservices, écrit en Golang.
- [NotNet](https://github.com/nottechdm/notnet) - Un framework Go léger pour créer des API RESTful rapides et ergonomiques, avec middlewares et routage flexible.
- [patron](https://github.com/beatlabs/patron) - Patron est un framework de microservices qui suit les meilleures pratiques du cloud, en mettant l'accent sur la productivité.
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux est un puissant framework web Go qui utilise des expressions régulières pour faire correspondre et traiter les requêtes HTTP. Il offre des fonctionnalités telles que la gestion de CORS, la journalisation structurée, l'extraction des paramètres d'URL, des middlewares et la limitation de la concurrence.
- [Revel](https://github.com/revel/revel) - Framework web à haute productivité pour le langage Go.
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Une bibliothèque d'amorçage pour créer rapidement et facilement des microservices Go d'entreprise avec Gin et gRPC.
- [Ronykit](https://github.com/clubpay/ronykit) - Framework web très performant, à l'architecture modulaire.
- [rux](https://github.com/gookit/rux) - Framework web simple et rapide pour créer des applications HTTP en Golang.
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Portage non officiel de shadcn/ui pour Go et templ : des composants d'interface accessibles, avec CLI et registre.
- [togo](https://github.com/togo-framework/togo) - Framework full-stack qui livre votre backend Go et votre frontend React sous la forme d'un seul binaire ; avec une CLI digne d'artisan de Laravel.
- [uAdmin](https://github.com/uadmin/uadmin) - Framework web complet pour Golang, inspiré de Django.
- [WebGo](https://github.com/naughtygopher/webgo) - Un micro-framework pour créer des applications web avec chaînage de gestionnaires, middlewares et injection de contexte, avec des gestionnaires HTTP conformes à la bibliothèque standard (c'est-à-dire `http.HandlerFunc`).
- [Xun](https://github.com/yaitoo/xun) - Framework web construit sur html/template, intégré à Go, et sur le routeur du paquet net/http. Il est conçu pour être léger, rapide et facile à utiliser, tout en offrant une API simple et intuitive pour créer des applications web dotées de fonctionnalités avancées comme les middlewares, le routage et le rendu de modèles.
- [Yokai](https://github.com/ankorstore/yokai) - Framework Go simple, modulaire et observable pour les applications backend.

**[⬆ retour en haut](#contents)**

### Middlewares

#### Middlewares proprement dits

- [client-timing](https://github.com/posener/client-timing) - Un client HTTP pour l'en-tête Server-Timing.
- [CORS](https://github.com/rs/cors) - Ajoutez facilement la prise en charge de CORS à votre API.
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Middleware pour le framework Echo, avec journalisation et métriques.
- [formjson](https://github.com/rs/formjson) - Traite de manière transparente une entrée JSON comme un POST de formulaire standard.
- [go-fault](https://github.com/github/go-fault) - Middleware d'injection de pannes pour Go.
- [Limiter](https://github.com/ulule/limiter) - Middleware de limitation de débit d'une simplicité enfantine pour Go.
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Middleware Go pour monétiser des API à la requête avec le Lightning Network (Bitcoin).
- [mid](https://github.com/bobg/mid) - Diverses fonctionnalités de middleware HTTP : renvoi idiomatique d'erreurs depuis les gestionnaires, réception et réponse avec des données JSON, traçage des requêtes, et plus encore.
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Middleware pour le framework Gin, avec journalisation, métriques, authentification, traçage, etc.
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - Middleware pour gRPC, avec journalisation, métriques, authentification, traçage, etc.
- [Tollbooth](https://github.com/didip/tollbooth) - Gestionnaire de requêtes HTTP avec limitation de débit.
- [XFF](https://github.com/sebest/xff) - Gère l'en-tête `X-Forwarded-For` et ses semblables.

#### Bibliothèques pour créer des middlewares HTTP

- [alice](https://github.com/justinas/alice) - Chaînage de middlewares sans douleur pour Go.
- [catena](https://github.com/codemodus/catena) - Concaténation d'enveloppes de http.Handler (même API que « chain »).
- [chain](https://github.com/codemodus/chain) - Chaînage d'enveloppes de gestionnaires avec données à portée limitée (« middleware » fondé sur net/context).
- [gores](https://github.com/alioygur/gores) - Paquet Go qui gère les réponses HTML, JSON, XML, etc. Utile pour les API RESTful.
- [interpose](https://github.com/carbocation/interpose) - Middleware net/http minimaliste pour Golang.
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - ajoute des intercepteurs à `http.Client` pour permettre le vidage, la mise en forme, le traçage, etc. des requêtes et des réponses.
- [muxchain](https://github.com/stephens2424/muxchain) - Middleware léger pour net/http.
- [negroni](https://github.com/urfave/negroni) - Middleware HTTP idiomatique pour Golang.
- [render](https://github.com/unrolled/render) - Paquet Go pour produire facilement des réponses JSON, XML et des modèles HTML.
- [renderer](https://github.com/thedevsaddam/renderer) - Paquet de rendu de réponses (JSON, JSONP, XML, YAML, HTML, fichier) simple, léger et plus rapide pour Go.
- [stats](https://github.com/thoas/stats) - Middleware Go qui stocke diverses informations sur votre application web.

**[⬆ retour en haut](#contents)**

### Routeurs

- [alien](https://github.com/gernest/alien) - Routeur HTTP léger et rapide venu de l'espace.
- [bellt](https://github.com/GuilhermeCaruso/bellt) - Un routeur HTTP Go simple.
- [Bone](https://github.com/go-zoo/bone) - Multiplexeur HTTP ultra-rapide.
- [Bxog](https://github.com/claygod/Bxog) - Routeur HTTP simple et rapide pour Go. Il fonctionne avec des routes de complexité, de longueur et d'imbrication variables, et sait créer une URL à partir des paramètres reçus.
- [chi](https://github.com/go-chi/chi) - Routeur HTTP petit, rapide et expressif, construit sur net/context.
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - Routeur haute performance issu d'un fork de `httprouter`. Le premier routeur adapté à `fasthttp`.
- [FastRouter](https://github.com/razonyang/fastrouter) - un routeur HTTP rapide et flexible écrit en Go.
- [Fox](https://github.com/fox-toolkit/fox) - Un routeur HTTP haute performance pour construire des proxys inverses et des passerelles d'API, avec une prise en charge de premier ordre de la modification des routes à l'exécution.
- [fursy](https://github.com/coregx/fursy) - Routeur HTTP avec gestionnaires génériques typés de façon sûre, génération automatique d'OpenAPI 3.1 à partir du code et réponses d'erreur RFC 9457.
- [goblin](https://github.com/bmf-san/goblin) - Un routeur HTTP Golang fondé sur un arbre trie.
- [gocraft/web](https://github.com/gocraft/web) - Paquet de multiplexeur et de middlewares en Go.
- [Goji](https://github.com/goji/goji) - Goji est un multiplexeur de requêtes HTTP minimaliste et flexible, avec prise en charge de `net/context`.
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router est un routeur HTTP léger mais puissant pour le langage de programmation Go.
- [goroute](https://github.com/goroute/route) - Multiplexeur de requêtes HTTP simple mais puissant.
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter est un micro-framework serveur/API, un routeur et multiplexeur (mux) de requêtes HTTP qui fournit un routage des requêtes avec des middlewares prenant en charge `net/context`.
- [gowww/router](https://github.com/gowww/router) - Routeur HTTP ultra-rapide entièrement compatible avec l'interface net/http.Handler.
- [httprouter](https://github.com/julienschmidt/httprouter) - Routeur haute performance. Combinez-le aux gestionnaires HTTP standard pour former un framework web très performant.
- [httptreemux](https://github.com/dimfeld/httptreemux) - Routeur HTTP rapide et flexible pour Go, fondé sur un arbre. Inspiré de httprouter.
- [lars](https://github.com/go-playground/lars) - Un routeur HTTP léger, rapide, extensible et sans allocation pour Go, utilisé pour créer des frameworks personnalisables.
- [mux](https://github.com/gorilla/mux) - Puissant routeur et répartiteur d'URL pour Golang.
- [nchi](https://github.com/muir/nchi) - routeur à la chi construit sur httprouter, avec des enveloppes de middlewares fondées sur l'injection de dépendances
- [ngamux](https://github.com/ngamux/ngamux) - Routeur HTTP simple pour Go.
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - Un routeur HTTP Go (golang) extrêmement rapide, qui prend en charge la correspondance de routes par expressions régulières. Offre une prise en charge complète de la création d'API RESTful.
- [pure](https://github.com/go-playground/pure) - Un routeur HTTP léger qui s'en tient à l'implémentation standard « net/http ».
- [Siesta](https://github.com/VividCortex/siesta) - Framework composable pour écrire des middlewares et des gestionnaires.
- [vestigo](https://github.com/husobee/vestigo) - Routeur d'URL performant, autonome et conforme à HTTP pour les applications web Go.
- [violetear](https://github.com/nbari/violetear) - Routeur HTTP Go.
- [xmux](https://github.com/rs/xmux) - Multiplexeur haute performance fondé sur `httprouter`, avec prise en charge de `net/context`.
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Un routeur HTTP simple et rapide pour Go.

**[⬆ retour en haut](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - Bibliothèque DOM.
- [Extism Go SDK](https://github.com/extism/go-sdk) - Framework WebAssembly universel et multilangage pour créer des systèmes de plugins et des applications polyglottes.
- [go-canvas](https://github.com/markfarnan/go-canvas) - Bibliothèque pour utiliser le Canvas HTML5, avec tout le dessin réalisé dans le code Go.
- [tinygo](https://github.com/tinygo-org/tinygo) - Compilateur Go pour les petits environnements : microcontrôleurs, WebAssembly et outils en ligne de commande. Fondé sur LLVM.
- [vert](https://github.com/norunners/vert) - Interopérabilité entre les valeurs Go et JS.
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - Exécutez des tests Go WASM dans votre navigateur.
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Liaisons Go pour l'environnement d'exécution WebAssembly Wasmtime (prise en charge de WASI, JIT/AOT, intégration sûre et rapide).
- [webapi](https://github.com/gowebapi/webapi) - Liaisons pour le DOM et le HTML générées à partir de WebIDL.

**[⬆ retour en haut](#contents)**

## Serveurs de webhooks

- [HookRun](https://github.com/bluvenr/hookrun) - Moteur d'actions de webhooks léger (un seul binaire d'environ 3 Mo, sans dépendance) qui exécute des commandes et des scripts à partir de règles YAML, avec authentification par jeton/HMAC/IP et rechargement à chaud.
- [webhook](https://github.com/adnanh/webhook) - Outil qui permet de créer des points d'accès HTTP (hooks) exécutant des commandes sur le serveur.
- [webhooked](https://github.com/42Atomys/webhooked) - Un récepteur de webhooks dopé : traiter, sécuriser, formater et stocker la charge utile d'un webhook n'a jamais été aussi simple.
- [WebhookX](https://github.com/webhookx-io/webhookx) - Une passerelle de webhooks pour la réception, le traitement et la livraison fiable de messages.

**[⬆ retour en haut](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Liaisons Go pour Direct3D9.
- [go-ole](https://github.com/go-ole/go-ole) - Implémentation de Win32 OLE pour Golang.
- [gosddl](https://github.com/MonaxGT/gosddl) - Convertisseur de chaînes SDDL en JSON lisible. Une chaîne SDDL se compose de quatre parties : Owner, Primary Group, DACL et SACL.
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - Une liaison Golang pour l'API Windows Update Agent, utilisant go-ole.

**[⬆ retour en haut](#contents)**

## Frameworks de workflows

_Bibliothèques pour créer des workflows._

- [Cadence-client](https://github.com/uber-go/cadence-client) - Un framework pour écrire des workflows et des activités s'exécutant sur le moteur d'orchestration Cadence conçu par Uber.
- [Dagu](https://github.com/dagu-go/dagu) - Exécuteur de workflows sans code. Il exécute des DAG définis dans un format YAML simple.
- [durable-go](https://github.com/agenticenv/durable-go) - Moteur d'exécution durable pour les applications Go mono-processus et les agents IA, sans aucune dépendance.
- [Flowbaker](https://github.com/flowbaker/flowbaker) - Moteur d'exécution auto-hébergé pour créer, connecter et automatiser des workflows sans code.
- [go-dag](https://github.com/rhosocial/go-dag) - Un framework développé en Go qui gère l'exécution de workflows décrits par des graphes orientés acycliques.
- [go-taskflow](https://github.com/noneback/go-taskflow) - Un framework généraliste de programmation parallèle par tâches, à la taskflow, avec visualiseur et profileur intégrés.
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Moteur de workflows durable avec console web intégrée, reposant sur Postgres, MySQL ou SQLite.
- [workflow](https://github.com/luno/workflow) - Un framework de workflows orientés événements, indépendant de la pile technique.

**[⬆ retour en haut](#contents)**

## XML

_Bibliothèques et outils pour manipuler du XML._

- [XML-Comp](https://github.com/xml-comp/xml-comp) - Comparateur XML simple en ligne de commande qui génère les différences entre dossiers, fichiers et balises.
- [xml2map](https://github.com/sbabiv/xml2map) - Convertisseur de XML en MAP écrit en Golang.
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery est un paquet XPath Golang pour interroger du XML.
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - API de génération procédurale de XML fondée sur le module xmlwriter de libxml2.
- [xpath](https://github.com/antchfx/xpath) - Paquet XPath pour Go.
- [zek](https://github.com/miku/zek) - Génère une structure Go à partir de XML.

## Zero Trust

_Bibliothèques et outils pour mettre en œuvre des architectures Zero Trust._

- [Cosign](https://github.com/sigstore/cosign) - Signature, vérification et stockage de conteneurs dans un registre OCI.
- [in-toto](https://github.com/in-toto/in-toto-golang) - Implémentation Go de l'implémentation de référence Python d'in-toto (qui fournit un framework pour protéger l'intégrité de la chaîne d'approvisionnement logicielle).
- [OpenZiti](https://github.com/openziti/ziti) - Un réseau overlay zero trust complet et open source. Comprend de nombreux SDK pour de nombreux langages, comme [golang](https://github.com/openziti/sdk-golang), qui vous permettent d'intégrer les principes zero trust directement dans vos applications. L'[OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) propose de nombreux exemples dont s'inspirer, dont un [client SSH zero trust - zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Utilise l'authentification JWT de SPIFFE avec HashiCorp Vault pour une authentification sans secret.
- [Spire](https://github.com/spiffe/spire) - SPIRE (SPIFFE Runtime Environment) est une chaîne d'outils d'API permettant d'établir la confiance entre des systèmes logiciels sur une grande variété de plateformes d'hébergement.

## Analyse de code

_Outils d'analyse du code source, aussi appelés outils de test statique de sécurité des applications (SAST)._

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Vérifie si les modifications récentes d'un projet Go introduisent des changements rétro-incompatibles.
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Analyseur statique de code pour Go et d'autres langages : métriques de complexité, de couplage, de cohésion et de maintenabilité, avec rapports HTML, JSON, Markdown et SARIF.
- [asty](https://github.com/asty-org/asty) - Convertit l'AST Golang en JSON et le JSON en AST.
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket est un outil qui vous aide à repérer les fonctions de vos paquets Go dépourvues de tests unitaires directs.
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Identifie lesquelles de vos dépendances GitHub directes en Go sont vulnérables à une attaque de ChainJacking.
- [Chronos](https://github.com/amit-davidson/Chronos) - Détecte statiquement les situations de concurrence (race conditions)
- [deadmono](https://github.com/arxeiss/deadmono) - Surcouche de deadcode pour détecter le code mort dans les monodépôts Go.
- [dupl](https://github.com/mibk/dupl) - Outil de détection de code dupliqué.
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck est un programme qui détecte les erreurs non vérifiées dans les programmes Go.
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext détecte les contextes imbriqués dans des boucles ou des littéraux de fonction.
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle est un outil de vérification du style semblable à checkstyle pour Java. Il s'inspire de checkstyle pour Java et de golint. Le style se réfère à certains points des Go Code Review Comments.
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch a été créé pour valider les règles de la Clean Architecture, comme la règle de dépendance (The Dependency Rule) et les interactions entre paquets dans vos projets Go.
- [go-critic](https://github.com/go-critic/go-critic) - linter de code source qui apporte des vérifications actuellement absentes des autres linters.
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Un moyen simple de trouver les dépendances obsolètes de vos projets Go.
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - Visualiseur d'AST Golang dans le navigateur.
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Outil pour corriger automatiquement (ajouter, supprimer) vos imports Go.
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - SDK de l'API iFood.
- [golangci-lint](https://github.com/golangci/golangci-lint) – Un exécuteur rapide de linters Go. Il exécute les linters en parallèle, utilise un cache, prend en charge la configuration `yaml`, s'intègre à tous les principaux EDI et inclut des dizaines de linters.
- [golines](https://github.com/segmentio/golines) - Formateur qui raccourcit automatiquement les lignes trop longues du code Go.
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - Linter Markdown avec validation intégrée des liens HTTP, en un seul binaire, sans nécessiter Node.js.
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - Bibliothèque et CLI qui génèrent un diagramme de classes PlantUML textuel contenant les informations sur les structures et les interfaces ainsi que leurs relations.
- [goreturns](https://github.com/sqs/goreturns) - Ajoute des instructions return avec des valeurs zéro correspondant aux types de retour de la fonction.
- [gostatus](https://github.com/shurcooL/gostatus) - Outil en ligne de commande qui affiche l'état des dépôts contenant des paquets Go.
- [lint](https://github.com/surullabs/lint) - Exécute des linters dans le cadre de go test.
- [php-parser](https://github.com/z7zmey/php-parser) - Un analyseur de PHP écrit en Go.
- [revive](https://github.com/mgechev/revive) – Remplacement direct de `golint`, environ 6 fois plus rapide, plus strict, configurable, extensible et élégant.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck, c'est `go vet` dopé : il applique une foule de vérifications d'analyse statique que vous connaissez peut-être grâce à des outils comme ReSharper pour C#.
- [structalign](https://github.com/peczenyj/structalign) - Montre comment réordonner les champs d'une structure pour utiliser moins de mémoire, en affichant un diff au lieu de réécrire les fichiers.
- [stto](https://github.com/mainak55512/stto) - Un compteur de lignes de code léger et ultra-rapide écrit en Go pur.
- [testifylint](https://github.com/Antonboom/testifylint) – Un linter qui vérifie l'utilisation de [github.com/stretchr/testify](https://github.com/stretchr/testify).
- [tickgit](https://github.com/augmentable-dev/tickgit) - CLI et paquet Go pour faire remonter les TODO des commentaires de code (dans n'importe quel langage) et appliquer un `git blame` pour en identifier l'auteur.
- [todocheck](https://github.com/preslavmihaylov/todocheck) - Analyseur statique de code qui relie les commentaires TODO du code aux tickets de votre outil de suivi.
- [unconvert](https://github.com/mdempsky/unconvert) - Supprime les conversions de type inutiles du code source Go.
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Un linter qui détecte les endroits où l'on pourrait utiliser des variables/constantes de la bibliothèque standard de Go.
- [vacuum](https://github.com/daveshanley/vacuum) - Un linter OpenAPI et outil de contrôle qualité léger et ultra-rapide.
- [validate](https://github.com/mccoyst/validate) - Valide automatiquement les champs de structures à l'aide de balises.
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - Un linter qui vérifie que les erreurs provenant de paquets externes sont enveloppées.

**[⬆ retour en haut](#contents)**

## Plugins d'éditeurs

_Plugins pour éditeurs de texte et EDI._

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - Ce plugin ajoute les fonctionnalités de [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) à Vim/Neovim.
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - Une extension Visual Studio Code pour afficher les définitions dans la sortie et générer la documentation Go.
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - Plugin Go pour les EDI JetBrains.
- [go-mode](https://github.com/dominikh/go-mode.el) - Mode Go pour GNU/Emacs.
- [gocode](https://github.com/nsf/gocode) - Démon d'autocomplétion pour le langage de programmation Go.
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - Outil de formatage des imports.
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - Cette extension ajoute à VS Code la prise en charge du profilage des benchmarks pour le langage Go.
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - Collection de plugins Golang pour l'éditeur de texte SublimeText 3, offrant la complétion de code et d'autres fonctionnalités dignes d'un EDI.
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - Plugin Vim pour générer des tests Go à partir de la signature d'une fonction ou d'une méthode.
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - Plugin Vim pour mettre en évidence les erreurs de syntaxe à l'enregistrement.
- [vim-go](https://github.com/fatih/vim-go) - Plugin de développement Go pour Vim.
- [vscode-go](https://github.com/golang/vscode-go) - Extension pour Visual Studio Code (VS Code) qui fournit la prise en charge du langage Go.
- [Watch](https://github.com/eaburns/Watch) - Exécute une commande dans une fenêtre acme lors des modifications de fichiers.

**[⬆ retour en haut](#contents)**

## Outils go generate

- [envdoc](https://github.com/g4s8/envdoc) - génère la documentation des variables d'environnement à partir des fichiers source Go.
- [generic](https://github.com/usk81/generic) - type de données flexible pour Go.
- [gocontracts](https://github.com/Parquery/gocontracts) - apporte la conception par contrat à Go en synchronisant le code avec la documentation.
- [godal](https://github.com/mafulong/godal) - Génère des modèles ORM Golang à partir d'un fichier DDL SQL, utilisables par gorm.
- [gonerics](https://github.com/bouk/gonerics) - Génériques idiomatiques en Go.
- [gotests](https://github.com/cweill/gotests) - Génère des tests Go à partir de votre code source.
- [gounit](https://github.com/hexdigest/gounit) - Génère des tests Go à l'aide de vos propres modèles.
- [hasgo](https://github.com/DylanMeeus/hasgo) - Génère des fonctions inspirées de Haskell pour vos slices.
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - Génère des constantes Go typées à partir de l'extension x-constants d'une spécification OpenAPI.
- [options-gen](https://github.com/kazhuravlev/options-gen) - Options fonctionnelles décrites dans l'article de Dave Cheney « Functional options for friendly APIs ».
- [re2dfa](https://gitlab.com/opennota/re2dfa) - Transforme des expressions régulières en machines à états finis et produit du code source Go.
- [sqlgen](https://github.com/anqiansong/sqlgen) - Génère du code gorm, xorm, sqlx, bun ou sql à partir d'un fichier SQL ou d'un DSN.
- [TOML-to-Go](https://xuri.me/toml-to-go) - Traduit instantanément du TOML en type Go dans le navigateur.
- [xgen](https://github.com/xuri/xgen) - Analyseur XSD (XML Schema Definition) et générateur de code Go/C/Java/Rust/TypeScript.

**[⬆ retour en haut](#contents)**

## Outils Go

- [decouple](https://github.com/bobg/decouple) - Trouve les paramètres de fonctions « surspécifiés » qui pourraient être généralisés avec des types interface.
- [docs](https://github.com/go-oas/docs) - Génère automatiquement la documentation des API RESTful des projets Go, conformément au standard OpenAPI Specification.
- [go-callvis](https://github.com/TrueFurby/go-callvis) - Visualisez le graphe d'appels de votre programme Go au format dot.
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - Analyse et visualise la taille des dépendances dans les binaires Golang compilés, pour comprendre leur impact sur le résultat final.
- [go-swagger](https://github.com/go-swagger/go-swagger) - Implémentation de Swagger 2.0 pour Go. Swagger est une représentation simple mais puissante de votre API RESTful.
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Un environnement interactif pour créer et tester des modèles Go.
- [godbg](https://github.com/tylerwince/godbg) - Implémentation de la macro `dbg!` de Rust pour un débogage simple et rapide pendant le développement.
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - Trouve toutes les structures qui implémentent une interface Go donnée dans une base de code.
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - Outil Go qui exécute et met en cache les binaires inclus dans les fichiers go.mod.
- [gotemplate.io](https://gotemplate.io/) - Outil en ligne pour prévisualiser en direct des modèles `text/template`.
- [gotestdox](https://github.com/bitfield/gotestdox) - Affiche les résultats des tests Go sous forme de phrases lisibles.
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks ajoute automatiquement une étoile à vos dépendances GitHub du go.mod, pour témoigner un peu d'amour à leurs mainteneurs.
- [gotutor](https://github.com/ahmedakef/gotutor) - Débogueur et visualiseur Go en ligne.
- [govisual](https://github.com/doganarif/govisual) - Visualiseur et débogueur de requêtes HTTP sans configuration, en Go pur, pour le développement web Go en local.
- [igo](https://github.com/rocketlaunchr/igo) - Un transpileur d'igo vers Go (de nouvelles fonctionnalités pour le langage Go !)
- [lensm](https://github.com/loov/lensm) - Visionneuse d'assembleur et de code source Go.
- [modver](https://github.com/bobg/modver) - Compare deux versions d'un module Go pour vérifier le changement de numéro de version requis (majeur, mineur ou correctif), selon les règles de [semver](https://semver.org/).
- [MoniGO](https://github.com/iyashjayesh/monigo) - Une bibliothèque de surveillance des performances pour les applications Go. Elle fournit un aperçu en temps réel des performances de l'application ! 🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - Naviguez efficacement dans les fichiers Go avec l'extension de navigateur OctoLinker pour GitHub.
- [richgo](https://github.com/kyoh86/richgo) - Enrichit la sortie de `go test` avec des décorations de texte.
- [roumon](https://github.com/becheran/roumon) - Surveille l'état courant de toutes les goroutines actives via une interface en ligne de commande.
- [rts](https://github.com/galeone/rts) - RTS : response to struct. Génère des structures Go à partir des réponses d'un serveur.
- [textra](https://github.com/ravsii/textra) - Extrait les noms, types et balises des champs de structures Go pour les filtrer et les exporter.
- [typex](https://github.com/dtgorski/typex) - Examine les types Go et leurs dépendances transitives, et peut exporter les résultats sous forme de déclarations d'objets valeur (ou de types) TypeScript.

**[⬆ retour en haut](#contents)**

## Logiciels

_Logiciels écrits en Go._

**[⬆ retour en haut](#contents)**

### Outils DevOps

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate est un outil qui transforme de longues chaînes en chaînes plus courtes avec des séparateurs configurables, par exemple pour intégrer des noms de branches dans des identifiants de piles de déploiement.
- [alaz](https://github.com/ddosify/alaz) - Surveillance de Kubernetes sans effort et à faible surcoût, fondée sur eBPF.
- [aptly](https://github.com/aptly-dev/aptly) - aptly est un outil de gestion de dépôts Debian.
- [aurora](https://github.com/xuri/aurora) - Console web multiplateforme pour le serveur de files d'attente Beanstalkd.
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - Diagnostiquez vos coûts AWS, détectez les ressources inactives et optimisez vos dépenses cloud directement depuis votre terminal 🩺 ☁️.
- [awsenv](https://github.com/soniah/awsenv) - Petit binaire qui charge les variables d'environnement Amazon (AWS) d'un profil.
- [Balerter](https://github.com/balerter/balerter) - Un gestionnaire d'alertes auto-hébergé fondé sur des scripts.
- [Blast](https://github.com/dave/blast) - Un outil simple pour les tests de charge d'API et les tâches par lots.
- [bombardier](https://github.com/codesenberg/bombardier) - Outil de benchmark HTTP rapide et multiplateforme.
- [cassowary](https://github.com/rogerwelin/cassowary) - Outil moderne et multiplateforme de tests de charge HTTP écrit en Go.
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - Un outil de résilience qui aide les applications à tolérer des pannes aléatoires d'instances.
- [colima](https://github.com/abiosoft/colima) - Environnements d'exécution de conteneurs sous macOS (et Linux) avec une configuration minimale.
- [Ddosify](https://github.com/ddosify/ddosify) - Outil de tests de charge haute performance, écrit en Golang.
- [decompose](https://github.com/s0rg/decompose) - outil pour générer et traiter des graphes de connexions entre conteneurs Docker.
- [Den](https://github.com/us/den) - Environnement d'exécution en bac à sable auto-hébergé pour agents IA. Alternative open source à E2B.
- [DepCharge](https://github.com/centerorbit/depcharge) - Aide à orchestrer l'exécution de commandes sur les nombreuses dépendances des grands projets.
- [dish](https://github.com/thevxn/dish) - Un service de surveillance léger et configurable à distance.
- [Docker](https://www.docker.com/) - Plateforme ouverte d'applications distribuées pour les développeurs et les administrateurs système.
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - Image Docker pour compiler des binaires Go pour Windows avec la chaîne d'outils MinGW.
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Sauvegarde des volumes Docker en local ou vers tout stockage compatible S3, WebDAV, Azure Blob Storage, Dropbox ou SSH.
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - Une bibliothèque Go et un exécutable qui produisent des Dockerfiles valides à partir de divers canaux d'entrée.
- [docklite](https://github.com/benzjeremy/docklite) - Alternative légère à Portainer pour la gestion des conteneurs Docker, avec métriques en temps réel via SSE.
- [dogo](https://github.com/liudng/dogo) - Surveille les modifications du fichier source, puis compile et exécute (redémarre) automatiquement.
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - Déclenche des tâches Jenkins en aval à l'aide d'un binaire, de Docker ou de Drone CI.
- [drone-scp](https://github.com/appleboy/drone-scp) - Copie des fichiers et des artefacts via SSH à l'aide d'un binaire, de Docker ou de Drone CI.
- [Dropship](https://github.com/chrismckenzie/dropship) - Outil de déploiement de code via un CDN.
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - Paquet Golang pour faciliter l'exécution à distance via SSH et le téléchargement SCP via `ProxyCommand`.
- [fac](https://github.com/mkchoi212/fac) - Interface utilisateur en ligne de commande pour résoudre les conflits de fusion Git.
- [Flannel](https://github.com/flannel-io/flannel) - Flannel est une structure réseau (network fabric) pour conteneurs, conçue pour Kubernetes.
- [Fleet device management](https://github.com/fleetdm/fleet) - Télémétrie légère et programmable pour serveurs et postes de travail.
- [gaia](https://github.com/gaia-pipeline/gaia) - Construisez de puissants pipelines dans n'importe quel langage de programmation.
- [ghorg](https://github.com/gabrie30/ghorg) - Clonez rapidement tous les dépôts d'une organisation ou d'un utilisateur dans un seul répertoire ; prend en charge GitHub, GitLab, Gitea et Bitbucket.
- [Gitea](https://github.com/go-gitea/gitea) - Fork de Gogs, entièrement piloté par la communauté.
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - Migrez tous vos dépôts, tickets, jalons et étiquettes GitHub vers votre instance Gitea.
- [gitl](https://github.com/akomyagin/gitl) - Revue par IA de plages de commits Git avec évaluation du risque (faible/moyen/élevé), génération du journal des modifications et synthèse d'activité multi-dépôts. GitHub Action incluse.
- [go-furnace](https://github.com/go-furnace/go-furnace) - Solution d'hébergement écrite en Go. Déployez facilement votre application sur AWS, GCP ou DigitalOcean.
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - Un moyen simple de créer des applications Go qui se mettent à jour d'elles-mêmes ; prend en charge GitHub et GitLab.
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Permettez à vos applications Go de se mettre à jour d'elles-mêmes.
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew vous permet de basculer facilement entre plusieurs versions de Go.
- [gobrew](https://github.com/kevincobain2000/gobrew) - Gestionnaire de versions de Go. Outil très simple pour installer et gérer des versions de Go. Installez Go sans droits root. Gobrew ne nécessite pas de rehash du shell.
- [godbg](https://github.com/sirnewton01/godbg) - Interface web pour gdb.
- [Gogs](https://gogs.io/) - Un service Git auto-hébergé écrit dans le langage de programmation Go.
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - Une passerelle d'API et un proxy inverse légers, avec configuration déclarative, middlewares robustes et prise en charge de REST, GraphQL, TCP, UDP et gRPC.
- [gonative](https://github.com/inconshreveable/gonative) - Outil qui crée une version de Go capable de compiler en croisé pour toutes les plateformes tout en utilisant les versions des paquets de la bibliothèque standard compatibles Cgo.
- [govvv](https://github.com/ahmetalpbalkan/govvv) - Surcouche de « go build » pour ajouter facilement des informations de version aux binaires Go.
- [grapes](https://github.com/yaronsumel/grapes) - Outil léger conçu pour distribuer facilement des commandes via SSH.
- [GVM](https://github.com/moovweb/gvm) - GVM fournit une interface pour gérer les versions de Go.
- [Hey](https://github.com/rakyll/hey) - Hey est un tout petit programme qui envoie de la charge à une application web.
- [httpref](https://github.com/dnnrly/httpref) - httpref est une référence pratique en ligne de commande pour les méthodes HTTP, les codes de statut, les en-têtes et les ports TCP et UDP.
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI vous permet de gérer facilement votre Jenkins.
- [k0s](https://github.com/k0sproject/k0s) - Distribution Kubernetes sans friction.
- [k3d](https://github.com/k3d-io/k3d) - Petit outil pour exécuter k3s de la CNCF dans Docker.
- [k3s](https://github.com/k3s-io/k3s) - Kubernetes allégé.
- [k6](https://github.com/grafana/k6) - Un outil moderne de tests de charge, utilisant Go et JavaScript.
- [k9s](https://github.com/derailed/k9s) - CLI Kubernetes pour gérer vos clusters avec style.
- [kala](https://github.com/ajvb/kala) - Planificateur de tâches simple, moderne et performant.
- [kcli](https://github.com/cswank/kcli) - Outil en ligne de commande pour inspecter les topics, partitions et messages Kafka.
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker : des clusters locaux pour tester Kubernetes.
- [ko](https://github.com/google/ko) - Outil en ligne de commande pour compiler et déployer des applications Go sur Kubernetes
- [kool](https://github.com/kool-dev/kool) - Outil en ligne de commande pour gérer facilement des environnements Docker.
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks est un plan de contrôle open source qui exécute et gère des bases de données, des files de messages et d'autres infrastructures de données sur K8s.
- [kubefwd](https://github.com/txn2/kubefwd) - Redirection de ports Kubernetes en masse, avec une IP unique par service, pour le développement local.
- [kubernetes](https://github.com/kubernetes/kubernetes) - Gestionnaire de clusters de conteneurs de Google.
- [kubeshark](https://github.com/kubeshark/kubeshark) - Analyseur de trafic d'API pour Kubernetes, inspiré de Wireshark et conçu spécialement pour Kubernetes.
- [KubeVela](https://github.com/kubevela/kubevela) - Livraison d'applications cloud native.
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN offre un environnement de développement cloud native qui se connecte de manière transparente au réseau de votre cluster Kubernetes.
- [KusionStack](https://github.com/KusionStack/kusion) - Une pile technique de configuration programmable et unifiée pour livrer des applications modernes selon les approches « platform as code » et « infra as code ».
- [kwatch](https://github.com/abahmed/kwatch) - Surveillez et détectez instantanément les plantages dans votre cluster Kubernetes (K8s).
- [lstags](https://github.com/ivanilves/lstags) - Outil et API pour synchroniser des images Docker entre différents registres.
- [lwc](https://github.com/timdp/lwc) - Une version de la commande UNIX wc mise à jour en direct.
- [manssh](https://github.com/xwjdsh/manssh) - manssh est un outil en ligne de commande pour gérer facilement la configuration de vos alias SSH.
- [Mantil](https://github.com/mantil-io/mantil) - Framework propre à Go pour créer des applications serverless sur AWS, qui vous permet de vous concentrer sur du pur code Go pendant que Mantil s'occupe de l'infrastructure.
- [minikube](https://github.com/kubernetes/minikube) - Exécutez Kubernetes en local.
- [Moby](https://github.com/moby/moby) - Projet collaboratif de l'écosystème des conteneurs pour assembler des systèmes à base de conteneurs.
- [Mora](https://github.com/emicklei/mora) - Serveur REST pour accéder aux documents et métadonnées MongoDB.
- [mq-studio](https://github.com/amigoer/mq-studio) - Client de bureau multiplateforme pour gérer et surveiller des clusters RocketMQ, RabbitMQ, Kafka, Pulsar, Redis Stream, MQTT, NATS et ActiveMQ.
- [ostent](https://github.com/ostrost/ostent) - collecte et affiche des métriques système et peut les relayer vers Graphite et/ou InfluxDB.
- [Packer](https://github.com/mitchellh/packer) - Packer est un outil pour créer des images machine identiques pour plusieurs plateformes à partir d'une seule configuration source.
- [Pewpew](https://github.com/bengadbois/pewpew) - Outil flexible de test de charge HTTP en ligne de commande.
- [pingtower](https://github.com/crleonard/pingtower) - Moniteur de disponibilité léger et auto-hébergé pour les sites web et les API.
- [PipeCD](https://github.com/pipe-cd/pipecd) - Une plateforme de livraison continue de style GitOps qui offre une expérience de déploiement et d'exploitation cohérente pour toutes les applications.
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo est une toute petite application web écrite en Go qui illustre les bonnes pratiques d'exécution de microservices dans Kubernetes. Podinfo est utilisée par des projets de la CNCF comme Flux et Flagger pour les tests de bout en bout et les ateliers.
- [podman-tui](https://github.com/containers/podman-tui) - Interface en terminal pour gérer Podman.
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium est un proxy d'accès qui tient compte de l'identité.
- [Rodent](https://github.com/alouche/rodent) - Rodent vous aide à gérer les versions de Go et vos projets, et à suivre les dépendances.
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - Proxy S3 avec méthodes GET, PUT et DELETE et authentification (OpenID Connect et Basic Auth).
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - Petit utilitaire/bibliothèque optimisé pour le transfert à grande vitesse de gros objets vers et depuis Amazon S3.
- [s5cmd](https://github.com/peak/s5cmd) - Outil d'exécution ultra-rapide pour S3 et le système de fichiers local.
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - Gérez des serveurs bare-metal depuis la ligne de commande (aussi facilement qu'avec Docker).
- [script](https://github.com/bitfield/script) - Facilite l'écriture en Go de scripts de type shell pour les tâches DevOps et d'administration système.
- [sg](https://github.com/ChristopherRabotin/sg) - Teste les performances d'un ensemble de points d'accès HTTP (comme ab), avec la possibilité d'utiliser le code de réponse et les données entre chaque appel pour solliciter le serveur de façon ciblée en fonction de sa réponse précédente.
- [sigma](https://github.com/go-sigma/sigma) - Registre d'images de conteneurs natif OCI, prenant en charge les artefacts natifs OCI, l'analyse des artefacts, la construction d'images, etc.
- [skm](https://github.com/TimothyYe/skm) - SKM est un gestionnaire de clés SSH simple et puissant qui vous aide à gérer facilement vos multiples clés SSH !
- [sortie](https://github.com/sortie-ai/sortie) - Transforme les tickets de votre outil de suivi en sessions d'agents de codage autonomes.
- [StatusOK](https://github.com/sanathp/statusok) - Surveillez votre site web et vos API REST. Recevez des notifications par Slack ou par e-mail lorsque votre serveur est en panne ou que le temps de réponse dépasse vos attentes.
- [tau](https://github.com/taubyte/tau) - Créez facilement des plateformes de cloud computing avec des fonctionnalités comme les fonctions WebAssembly serverless, l'hébergement de frontends, la CI/CD, le stockage objet, une base de données clé/valeur et la messagerie pub/sub.
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - Plugin de fournisseur Terraform qui se configure dynamiquement à l'exécution à partir d'un document OpenAPI (anciennement appelé fichier swagger) contenant les définitions des API exposées.
- [tf-profile](https://github.com/datarootsio/tf-profile) - Profileur pour les exécutions Terraform. Génère des statistiques globales, des statistiques par ressource ou des visualisations.
- [tickstem/uptime](https://github.com/tickstem/uptime) - Client Go de surveillance de disponibilité HTTP, avec alertes d'expiration SSL et assertions configurables sur les réponses.
- [tlm](https://github.com/yusufcanb/tlm) - Copilote local en ligne de commande, propulsé par CodeLLaMa
- [traefik](https://github.com/containous/traefik) - Proxy inverse et répartiteur de charge prenant en charge plusieurs backends.
- [trubka](https://github.com/xitonix/trubka) - Un outil CLI pour gérer et dépanner des clusters Apache Kafka, capable de publier et consommer de manière générique des événements protocol buffer et texte brut vers/depuis Kafka.
- [Updatecli](https://github.com/updatecli/updatecli) - Un moteur universel et déclaratif de politiques de mise à jour.
- [uTask](https://github.com/ovh/utask) - Moteur d'automatisation qui modélise et exécute des processus métier déclarés en YAML.
- [Vegeta](https://github.com/tsenart/vegeta) - Outil et bibliothèque de tests de charge HTTP. C'est plus de 9000 !
- [wait-for](https://github.com/dnnrly/wait-for) - Attend (depuis la ligne de commande) qu'un événement se produise avant de continuer. Orchestration facile de services Docker et d'autres choses.
- [Wide](https://wide.b3log.org/login) - EDI web pour les équipes utilisant Golang.
- [winrm-cli](https://github.com/masterzen/winrm-cli) - Outil CLI pour exécuter des commandes à distance sur des machines Windows.
- [zerohand](https://github.com/nilpoona/zerohand) - Un outil de tests de charge simple et efficace pour les API web.

**[⬆ retour en haut](#contents)**

### Autres logiciels

- [Backrest](https://github.com/garethgeorge/backrest) - Interface web et orchestrateur pour les sauvegardes restic.
- [Better Go Playground](https://goplay.tools) - Bac à sable Go avec coloration syntaxique, complétion de code et d'autres fonctionnalités.
- [blocky](https://github.com/0xERR0R/blocky) - Proxy DNS rapide et léger servant de bloqueur de publicités pour le réseau local, doté de nombreuses fonctionnalités.
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - Gestionnaire Bluetooth en TUI pour Linux.
- [borg](https://github.com/crufter/borg) - Moteur de recherche en terminal pour extraits de code bash.
- [boxed](https://github.com/tejo/boxed) - Moteur de blog fondé sur Dropbox.
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar est une alternative multiplateforme à Postman écrite en Go, qui vise à aider les développeurs à tester leurs points d'accès d'API. Elle prend en charge les protocoles HTTP et gRPC.
- [Cherry](https://github.com/rafael-santiago/cherry) - Tout petit serveur de discussion web en Go.
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - Carte publique des radiations, auto-hébergée, pour importer, analyser et visualiser des traces de mesures.
- [Circuit](https://github.com/gocircuit/circuit) - Circuit est une plateforme en tant que service (PaaS) et/ou une infrastructure en tant que service (IaaS) programmable, pour la gestion, la découverte, la synchronisation et l'orchestration des services et des hôtes qui composent les applications cloud.
- [claude-grep](https://github.com/evoleinik/claude-grep) - Recherchez dans l'historique des sessions Claude Code par expressions régulières et par recherche sémantique (vectorielle).
- [Comcast](https://github.com/tylertreat/Comcast) - Simule de mauvaises connexions réseau.
- [confd](https://github.com/kelseyhightower/confd) - Gère les fichiers de configuration locaux des applications à l'aide de modèles et de données issues d'etcd ou de consul.
- [crawley](https://github.com/s0rg/crawley) - Outil de scraping/d'exploration web en ligne de commande.
- [croc](https://github.com/schollz/croc) - Envoyez facilement et en toute sécurité des fichiers ou des dossiers d'un ordinateur à un autre.
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - Un outil léger de nettoyage des caches logiciels pour Windows et Linux.
- [dispositio](https://github.com/tsraveling/dispositio) - Outil en terminal pour planifier de grands projets en simple Markdown.
- [Documize](https://github.com/documize/community) - Logiciel de wiki moderne qui intègre les données d'outils SaaS.
- [dp](https://github.com/scryinfo/dp) - Grâce à un SDK d'échange de données avec la blockchain, les développeurs accèdent facilement au développement de DApps.
- [drive](https://github.com/odeke-em/drive) - Client Google Drive en ligne de commande.
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - Un outil de sauvegarde réseau et cloud multiplateforme fondé sur le principe de la déduplication sans verrou.
- [fjira](https://github.com/mk-5/fjira) - Une application en terminal à recherche approximative pour Atlassian Jira
- [Gebug](https://github.com/moshebe/gebug) - Un outil qui rend le débogage des applications Go dockerisées très facile en activant de façon transparente le débogueur et le rechargement à chaud.
- [gfile](https://github.com/Antonito/gfile) - Transférez des fichiers de façon sécurisée entre deux ordinateurs, sans aucun tiers, via WebRTC.
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - Application qui affiche les mises à jour des paquets Go de votre GOPATH.
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - Client torrent de streaming vidéo.
- [goblin](https://goblin.run) - Outil de compilation dans le cloud pour les CLI écrites en Go
- [GoBoy](https://github.com/Humpheh/goboy) - Émulateur de Nintendo Game Boy Color écrit en Go.
- [gocc](https://github.com/goccmack/gocc) - Gocc est une boîte à outils de compilation pour Go, écrite en Go.
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - Extension Chrome pour les sites Go Doc, qui affiche la description des fonctions sous forme d'infobulle dans la liste des fonctions.
- [Gokapi](https://github.com/Forceu/gokapi) - Serveur léger de partage de fichiers, qui expirent après un nombre défini de téléchargements ou de jours. Semblable à Firefox Send, mais sans téléversement public.
- [GoLand](https://jetbrains.com/go) - EDI Go multiplateforme complet.
- [GoNB](https://github.com/janpfeifer/gonb) - Programmation Go interactive avec les notebooks Jupyter (fonctionne aussi dans VSCode, Binder et Colab de Google).
- [GooseForum](https://github.com/leancodebox/GooseForum) - Plateforme de forum auto-hébergée construite avec Go, Vue et Tailwind CSS.
- [Gor](https://github.com/buger/gor) - Outil de réplication du trafic HTTP, pour rejouer en temps réel le trafic de production vers les environnements de préproduction/développement.
- [Guora](https://github.com/meloalright/guora) - Une application web auto-hébergée à la Quora, écrite en Go.
- [GURL](https://github.com/matveynator/gurl) - Quand CURL vous dit que votre bibliothèque SSL est trop ancienne, utilisez GURL. Un seul fichier. Aucune dépendance SSL.
- [hoofli](https://github.com/dnnrly/hoofli) - Génère des diagrammes PlantUML à partir des inspections réseau de Chrome ou Firefox.
- [hotswap](https://github.com/edwingeng/hotswap) - Une solution complète pour recharger votre code Go sans redémarrer votre serveur ni interrompre ou bloquer les procédures en cours.
- [hugo](https://gohugo.io/) - Moteur de sites web statiques rapide et moderne.
- [ide](https://github.com/thestrukture/ide) - EDI accessible depuis le navigateur. Conçu pour Go, avec Go.
- [joincap](https://github.com/assafmo/joincap) - Utilitaire en ligne de commande pour fusionner plusieurs fichiers pcap.
- [JuiceFS](https://github.com/juicedata/juicefs) - Système de fichiers POSIX distribué construit sur Redis et AWS S3.
- [Juju](https://jujucharms.com/) - Déploiement et orchestration de services indépendants du cloud ; prend en charge EC2, Azure, OpenStack, MAAS et d'autres.
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - Système de fichiers pair-à-pair à la demande qui monte un dossier distant et masque la latence du lien par lecture anticipée, chiffré de bout en bout avec un schéma hybride X25519 et ML-KEM-1024.
- [Layli](https://layli.app) - Dessinez de jolis diagrammes de disposition sous forme de code.
- [Leaps](https://github.com/jeffail/leaps) - Service de programmation en binôme utilisant les transformations opérationnelles.
- [lgo](https://github.com/yunabe/lgo) - Programmation Go interactive avec Jupyter. Prend en charge la complétion et l'inspection du code, avec une compatibilité Go à 100 %.
- [LightCMS](https://github.com/jonradoff/lightcms) - Système de gestion de contenu auto-hébergé avec génération de pages statiques, contrôle d'accès basé sur les rôles et un serveur MCP pour des opérations sur le contenu pilotées par des agents.
- [limetext](https://limetext.github.io) - Lime Text est un éditeur de texte puissant et élégant, développé principalement en Go, qui vise à être un successeur libre et open source de Sublime Text.
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE est un EDI Go simple, open source et multiplateforme.
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - TUI axée sur la prévisualisation pour nettoyer les caches, journaux et fichiers temporaires de macOS.
- [mdv](https://github.com/Allra-Fintech/mdv) - Outil CLI qui affiche des fichiers Markdown dans le navigateur, avec rechargement en direct, GFM, coloration syntaxique, diagrammes Mermaid et export PDF.
- [mockingjay](https://github.com/quii/mockingjay-server) - Faux serveurs HTTP et contrats pilotés par le consommateur à partir d'un seul fichier de configuration. Vous pouvez aussi faire dysfonctionner le serveur aléatoirement pour des tests de performance plus réalistes.
- [myLG](https://github.com/mehrdadrad/mylg) - Outil de diagnostic réseau en ligne de commande écrit en Go.
- [naclpipe](https://github.com/unix4fun/naclpipe) - Outil simple de tube chiffré fondé sur NaCl EC25519, écrit en Go.
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay renaît, pour une nouvelle ère.
- [nes](https://github.com/fogleman/nes) - Émulateur de Nintendo Entertainment System (NES) écrit en Go.
- [onWatch](https://github.com/onllm-dev/onWatch) - Surveillez en local les quotas d'API d'IA de plusieurs fournisseurs, avec historique, alertes et tableau de bord web, pour éviter les limitations surprises et les dépassements de budget.
- [Orbit](https://github.com/gulien/orbit) - Un outil simple pour exécuter des commandes et générer des fichiers à partir de modèles.
- [peg](https://github.com/pointlander/peg) - Peg (Parsing Expression Grammar) est une implémentation d'un générateur d'analyseurs Packrat.
- [Plakar](https://github.com/PlakarKorp/plakar) - Un moteur de sauvegarde chiffré, dédupliqué, vérifiable et évolutif, sans dépendance vis-à-vis d'un fournisseur.
- [Plik](https://github.com/root-gg/plik) - Plik est un système de téléversement de fichiers temporaires (à la WeTransfer) en Go.
- [portal](https://github.com/SpatiumPortae/portal) - Portal est un utilitaire en ligne de commande rapide et simple pour transférer des fichiers de n'importe quel ordinateur vers un autre.
- [restic](https://github.com/restic/restic) - Programme de sauvegarde avec déduplication.
- [sake](https://github.com/alajmo/sake) - sake est un exécuteur de commandes pour hôtes locaux et distants.
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code, un compteur de code très rapide et précis, avec calculs de complexité et estimations COCOMO.
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - CLI d'évaluation de planning selon les 14 points de la DCMA pour les exports Excel/CSV de MS Project.
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - Système de fichiers distribué rapide, simple et évolutif, avec des accès disque en O(1).
- [shell2http](https://github.com/msoap/shell2http) - Exécution de commandes shell via un serveur HTTP (pour le prototypage ou le contrôle à distance).
- [Snitch](https://github.com/lucasgomide/snitch) - Un moyen simple de prévenir votre équipe et de nombreux outils lorsque quelqu'un a déployé une application via Tsuru.
- [sonic](https://github.com/go-sonic/sonic) - Sonic est une plateforme de blog en Go. Simple et puissante.
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Économiseur d'écran de bureau pour Spotify, avec horloge numérique OLED, visualiseur audio sur canvas et commandes MPRIS.
- [Stack Up](https://github.com/pressly/sup) - Stack Up, un outil de déploiement très simple, rien que de l'Unix : voyez-le comme un « make » pour un réseau de serveurs.
- [stew](https://github.com/marwanhawari/stew) - Un gestionnaire de paquets indépendant pour les binaires compilés.
- [syncthing](https://syncthing.net/) - Outil et protocole de synchronisation de fichiers ouverts et décentralisés.
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - Observabilité TCP fondée sur eBPF.
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - Petite application en terminal qui affiche les commits Git des dernières 24 heures et de la semaine, la météo actuelle, quelques conseils de bien-être, une blague et les tâches de votre liste de choses à faire.
- [tldx](https://github.com/brandonyoungdev/tldx) - Vérificateur de disponibilité de noms de domaine en masse, utilisant RDAP, DNS et WHOIS en repli, avec génération de permutations de mots-clés.
- [toxiproxy](https://github.com/shopify/toxiproxy) - Proxy pour simuler des conditions réseau et système lors des tests automatisés.
- [tsuru](https://tsuru.io/) - Logiciel de plateforme en tant que service (PaaS) extensible et open source.
- [untis-go](https://github.com/benzjeremy/untis-go) - Client de bureau WebUntis natif et rapide pour les élèves et les enseignants. Navigation par barre latérale, emplois du temps, devoirs, absences et messages. Identifiants chiffrés en AES-256-GCM, cache SQLite prioritaire, sécurité par port aléatoire.
- [vaku](https://github.com/lingrino/vaku) - CLI et API pour des fonctions orientées dossiers dans Vault, comme la copie, le déplacement et la recherche.
- [vFlow](https://github.com/VerizonDigital/vflow) - Collecteur IPFIX, sFlow et Netflow haute performance, évolutif et fiable.
- [Wave Terminal](https://waveterm.dev) - Wave est un terminal open source natif IA, conçu pour des workflows de développement fluides, avec rendu en ligne, interface moderne et sessions persistantes.
- [wellington](https://github.com/wellington/wellington) - Outil de gestion de projets Sass, qui étend le langage avec des fonctions de sprites (comme Compass).
- [woke](https://github.com/get-woke/woke) - Détecte le langage non inclusif dans votre code source.
- [yai](https://github.com/ekkinox/yai) - Assistant de terminal propulsé par l'IA.
- [zs](https://git.mills.io/prologic/zs) - un générateur de sites statiques extrêmement minimal.

**[⬆ retour en haut](#contents)**

# Ressources

_Où découvrir de nouvelles bibliothèques Go._

**[⬆ retour en haut](#contents)**

## Benchmarks

- [autobench](https://github.com/davecheney/autobench) - Framework pour comparer les performances de différentes versions de Go.
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - Puissant outil de benchmark HTTP combinant les outils Ab, Wrk et Siege. Collecte des statistiques et divers paramètres pour les benchmarks et la comparaison des résultats.
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - Quelques microbenchmarks Go divers. Compare certaines fonctionnalités du langage à des approches alternatives.
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Benchmark et comparaison de routeurs de requêtes HTTP en Go.
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Benchmark JSON en Go.
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - benchmarks d'inférence d'apprentissage automatique en Go.
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Benchmark de frameworks web Go.
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Benchmarks des méthodes de sérialisation en Go.
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Benchmarks d'opérations de base courantes pour le langage Go.
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - une collection de benchmarks Golang.
- [gospeed](https://github.com/feyeleanor/GoSpeed) - Micro-benchmarks Go pour mesurer la vitesse des constructions du langage.
- [kvbench](https://github.com/jimrobinson/kvbench) - Benchmark de bases de données clé/valeur.
- [skynet](https://github.com/atemerev/skynet) - Microbenchmark Skynet à 1 million de threads.
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Compare divers algorithmes de redimensionnement d'images pour le langage Go.
- [vizb](https://github.com/goptics/vizb) - Un outil CLI pour visualiser en 4D les données de benchmarks Go.

**[⬆ retour en haut](#contents)**

## Conférences

- [GoCon](https://gocon.connpass.com/) - Tokyo, Japon.
- [GoDays](https://www.godays.io/) - Berlin, Allemagne.
- [GoLab](https://golab.io/) - Florence, Italie.
- [GopherCon](https://www.gophercon.com/) - Lieux différents chaque année, États-Unis.
- [GopherCon Africa](https://gophercon.africa/) - Nairobi, Kenya.
- [GopherCon Australia](https://gophercon.com.au/) - Sydney, Australie.
- [GopherCon Brazil](https://gopherconbr.org) - Florianópolis, Brésil.
- [GopherCon China](https://gophercon.com.cn) - Shanghai, Chine.
- [GopherCon Europe](https://gophercon.eu/) - Berlin, Allemagne.
- [GopherCon India](https://gopherconindia.org/) - Pune, Inde.
- [GopherCon Israel](https://www.gophercon.org.il/) - Tel-Aviv, Israël.
- [GopherCon Russia](https://www.gophercon-russia.ru) - Moscou, Russie.
- [GopherCon Singapore](https://gophercon.sg) - Mapletree Business City, Singapour.
- [GopherCon UK](https://www.gophercon.co.uk/) - Londres, Royaume-Uni.
- [GopherCon Vietnam](https://gophercon.vn/) - Hô Chi Minh-Ville, Viêt Nam.
- [GoWest Conference](https://www.gowestconf.com/) - Lehi, États-Unis.

**[⬆ retour en haut](#contents)**

## Livres numériques

### Livres numériques payants

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - La programmation Go pour les hackers et les pentesteurs.
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - Ce guide pratique de la livraison continue vous montre comment mettre rapidement en place un pipeline automatisé qui améliorera vos tests, la qualité de votre code et votre produit final.
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - Une introduction au compilateur TinyGo, avec des projets faisant intervenir Arduino et WebAssembly.
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Découvrez la vision unique de Go en matière de conception de programmes et commencez à écrire du code Go simple, maintenable et testable.
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Un livre d'initiation pour les débutants en Go.
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Votre guide pratique de tous les aspects du développement Go, couvrant la bibliothèque standard et les outils les plus importants du puissant écosystème de Go.
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Un guide pour comprendre et utiliser les génériques en Go.
- [Lets-Go](https://lets-go.alexedwards.net) - Un guide pas à pas pour créer des applications web rapides, sûres et maintenables avec Go.
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - Modèles avancés pour créer des API et des applications web en Go.
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Un guide des tests en Go.
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Un guide pour écrire des outils en ligne de commande en Go.
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - Livre qui présente des dizaines de techniques pour écrire du code Go idiomatique, expressif et efficace, en évitant les pièges courants.

### Livres numériques gratuits

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - Le guide fondamental et pratique pour apprendre efficacement et construire progressivement une blockchain de zéro en Go avec gRPC.
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Un livre consacré à la syntaxe et à la sémantique de Go et à toutes sortes de détails.
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Un livre consacré aux paquets `go/*` de Go.
- [Go Faster](https://leanpub.com/gofaster) - Ce livre vise à raccourcir votre courbe d'apprentissage et à vous aider à devenir plus vite un programmeur Go compétent.
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - en persan.
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - Un livre qui montre comment appliquer le DDD, la Clean Architecture et le CQRS par du refactoring pratique.
- [GoBooks](https://github.com/dariubs/GoBooks) - Une liste organisée de livres sur Go.
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - Une introduction à Go de 600 pages destinée aux développeurs débutants.
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ retour en haut](#contents)**

## Gophers

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Pack graphique de gophers par Maria Letta, avec des illustrations et des personnages expressifs en vectoriel et en matriciel.
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Données vectorielles du gopher de Go [.ai, .svg].
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - d'adorables logos de gophers.
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - Transformez-vous en gopher.
- [gophers](https://github.com/ashleymcnamara/gophers) - Illustrations de gophers par Ashley McNamara.
- [gophers](https://github.com/egonelbre/gophers) - Des gophers gratuits.
- [gophers](https://github.com/rogeralsing/gophers) - illustrations aléatoires de gophers.
- [gophers](https://github.com/sillecelik/go-gopher) - Patron de gopher en amigurumi.
- [gophers](https://github.com/scraly/gophers) - Gophers par Aurélie Vache.

**[⬆ retour en haut](#contents)**

## Meetups

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

_Ajoutez ici le groupe de votre ville/pays (envoyez une **PR**)_

**[⬆ retour en haut](#contents)**

## Guides de style

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ retour en haut](#contents)**

## Réseaux sociaux

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ retour en haut](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ retour en haut](#contents)**

## Sites web

- [Awesome Go @LibHunt](https://go.libhunt.com) - Votre boîte à outils Go de référence.
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - Une liste organisée d'ateliers Golang remarquables.
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - Liste organisée d'offres d'emploi en télétravail remarquables. Beaucoup recherchent des hackers Go.
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - Liste d'autres listes Awesome formidables.
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - Analyse le fichier README d'awesome-go et génère un nouveau fichier README avec les informations des dépôts.
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - Ingénieur logiciel et blogs sur codewithmukesh.com.
- [Coding Mystery](https://codingmystery.com) - Résolvez en Go de passionnants défis de programmation inspirés des escape games.
- [CodinGame](https://www.codingame.com/) - Apprenez Go en résolvant des exercices interactifs, avec de petits jeux comme exemples pratiques.
- [Go Blog](https://blog.golang.org) - Le blog officiel de Go.
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - Un groupe de Gophers lit et commente un projet Go différent chaque semaine.
- [Go Community on Hashnode](https://hashnode.com/n/go) - Communauté de Gophers sur Hashnode.
- [Go Forum](https://forum.golangbridge.org) - Forum de discussion sur Go.
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Liste de projets sur le wiki de la communauté Go.
- [Go Proverbs](https://go-proverbs.github.io/) - Les proverbes Go de Rob Pike.
- [Go Report Card](https://goreportcard.com) - Un bulletin de notes pour votre paquet Go.
- [go.dev](https://go.dev/) - Un portail pour les développeurs Go.
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - Collection de projets Go qui ont besoin d'aide. Un bon point de départ pour votre parcours open source en Go.
- [Golang Developer Jobs](https://golangjob.xyz) - Offres d'emploi de développeur exclusivement pour des postes liés à Golang.
- [Golang News](https://golangnews.com) - Liens et actualités sur la programmation Go.
- [Golang Nugget](https://golangnugget.com) - Une sélection hebdomadaire des meilleurs contenus sur Go, livrée dans votre boîte de réception chaque lundi.
- [Golang Weekly](https://discu.eu/weekly/golang/) - Chaque lundi, des projets, tutoriels et articles sur Go.
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Liste de diffusion Go.
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - Rejoignez notre nouvelle communauté Slack pour les Gophers ([découvrez comment elle est née](https://blog.gopheracademy.com/gophers-slack-community/)).
- [Gophercises](https://gophercises.com/) - Exercices de programmation gratuits pour les gophers en herbe.
- [json2go](https://m-zajac.github.io/json2go) - Conversion avancée de JSON en structures Go - outil en ligne.
- [justforfunc](https://www.youtube.com/c/justforfunc) - Chaîne YouTube consacrée aux trucs et astuces du langage de programmation Go, animée par Francesc Campoy [@francesc](https://twitter.com/francesc).
- [Learn Go Programming](https://blog.learngoprogramming.com) - Apprenez les concepts de Go grâce à des illustrations.
- [Libs.tech](https://libs.tech/go) – Bibliothèques Go remarquables et pépites méconnues
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - Documentation des paquets Go open source.
- [studygolang](https://studygolang.com) - La communauté studygolang en Chine.
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - Un bon endroit pour trouver de nouvelles bibliothèques Go.
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ retour en haut](#contents)**

### Tutoriels

- [50 Shades of Go](https://golang50shades.github.io/) - Pièges, chausse-trapes et erreurs courantes des nouveaux développeurs Golang.
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - Plongez dans l'univers de la journalisation structurée en Go, avec un accent particulier sur la proposition slog récemment acceptée, qui vise à apporter à la bibliothèque standard une journalisation structurée par niveaux haute performance.
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - Créer un site de commerce électronique en Golang (démo incluse).
- [A Tour of Go](https://tour.golang.org/) - Visite interactive de Go.
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - Construisez une base de données NoSQL de zéro en 1000 lignes de code.
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Livre numérique Golang qui explique comment créer une application web avec Golang.
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - Nous allons écrire une API avec l'aide du puissant Gorilla Mux.
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Familiarisez-vous avec Gin et découvrez comment il peut vous aider à réduire le code répétitif et à construire un pipeline de traitement des requêtes.
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - Comment mettre en cache les requêtes lentes vers une base de données.
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - Comment annuler des requêtes MySQL.
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - Maîtrisez le Go avancé en construisant vos propres Redis, Docker, Git et SQLite. Au programme : goroutines, programmation système, E/S de fichiers et plus encore.
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Collection de patrons de conception implémentés en Go.
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - Une série de vidéos qui enseigne la programmation et le développement de jeux.
- [Go By Example](https://gobyexample.com/) - Introduction pratique à Go à l'aide de programmes d'exemple annotés.
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - L'aide-mémoire de Go.
- [Go database/sql tutorial](http://go-database-sql.org/) - Introduction à database/sql.
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - Apprenez tout sur Go en 7 jours (par un développeur Node.js).
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Tutoriel pour apprendre le langage Go.
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Apprenez la programmation en Go.
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Modèle Clean Architecture pour les services Golang.
- [go-patterns](https://github.com/tmrts/go-patterns) - Liste organisée de patrons de conception, de recettes et d'idiomes Go.
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - Exemples de Golang comparé à Node.js, pour apprendre.
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Une liste de cours gratuits pour apprendre le langage de programmation Go.
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - De nombreux exemples pour apprendre Golang.
- [Golangbot](https://golangbot.com/learn-golang-series/) - Tutoriels pour débuter la programmation en Go.
- [GopherCoding](https://gophercoding.com/) - Collection d'extraits de code et de tutoriels pour résoudre les problèmes du quotidien.
- [GopherSnippets](https://gophersnippets.com/) - Extraits de code avec tests et exemples testables pour le langage de programmation Go.
- [Gosamples](https://gosamples.dev/) - Collection d'extraits de code qui vous permettent de résoudre des problèmes de code quotidiens.
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - Apprenez à créer un serveur et un client GraphQL en Go avec génération de code. Inclut aussi la création de points d'accès REST.
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - Apprenez Go grâce aux meilleurs tutoriels Golang en ligne, proposés et votés par la communauté des programmeurs Golang.
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - Guide de démarrage pour écrire du code maintenable avec l'architecture hexagonale.
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Apprenez à réaliser des benchmarks en Go. En guise d'étude de cas, nous comparerons dbq, sqlx et GORM.
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Apprenez à utiliser Docker pour le développement Go et à construire des images Docker de production.
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - Un guide pour implémenter le contrôle d'accès basé sur les rôles (RBAC) en Golang, avec des exemples de code, couvrant diverses méthodes pour sécuriser les points d'accès d'une application par une autorisation fondée sur les rôles.
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Débutez avec Godog, un framework de développement piloté par le comportement pour créer et tester des applications Go.
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - Apprenez Go avec des milliers d'exemples, d'exercices et de quiz.
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - Apprenez Go avec le développement piloté par les tests.
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - Série d'articles pour apprendre le langage Golang à travers des applications concrètes.
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - Plongez dans la création de microservices en Go, y compris avec gRPC.
- [package main](https://www.youtube.com/packagemain) - Chaîne YouTube sur la programmation en Go.
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - Spécialisation Coursera pour apprendre Go à partir de zéro.
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - Tout sur la création, le déploiement et la mise à l'échelle d'applications Go en production.
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - Apprenez Go visuellement
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic propose un tutoriel approfondi et un contenu bien organisé pour apprendre la programmation en Golang.
- [Your basic Go](https://yourbasic.org/golang) - Immense collection de tutoriels et de guides pratiques.

**[⬆ retour en haut](#contents)**

### Apprentissage guidé

- [The Go Developer Roadmap](https://roadmap.sh/golang) - Une feuille de route visuelle que les nouveaux développeurs Go peuvent suivre pour apprendre Go.
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Un dépôt GitHub proposant des défis de programmation pour préparer les entretiens techniques Go.
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - Un parcours d'apprentissage guidé mêlant ressources gratuites et payantes.
- [The Go Skill Tree](https://labex.io/skilltrees/go) - Un parcours d'apprentissage structuré qui combine ressources gratuites et payantes.

**[⬆ retour en haut](#contents)**

## Contribution

Les contributions sont les bienvenues ! Veuillez consulter notre [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md) pour connaître les règles.

## Licence

Ce projet est distribué sous [licence MIT](https://github.com/avelino/awesome-go/blob/main/LICENSE) ; consultez le fichier LICENSE pour plus de détails.
