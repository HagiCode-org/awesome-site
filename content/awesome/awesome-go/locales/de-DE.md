# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

Für die direkte Kommunikation nutzen wir den Community-Slack von _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_. Zum Beitreten folgen Sie [diesem Formular](https://invite.slack.golangbridge.org/).

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**Sponsoren:**

_Besonderer Dank an_

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

**Awesome Go erhebt keine monatliche Gebühr**_, aber wir haben Mitarbeitende, die **hart daran arbeiten**, das Projekt am Laufen zu halten. Mit den gesammelten Geldern können wir den Einsatz aller Beteiligten vergüten! Sie können nachvollziehen, wie wir Abrechnung und Verteilung berechnen, da dies für die gesamte Community offenliegt. Möchten Sie das Projekt unterstützen? Klicken Sie [hier](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)._

> Eine kuratierte Liste großartiger Go-Frameworks, -Bibliotheken und -Software. Inspiriert von [awesome-python](https://github.com/vinta/awesome-python).

**Mitwirken:**

Bitte werfen Sie zuerst einen kurzen Blick auf die [Richtlinien für Beiträge](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md). Danke an alle [Mitwirkenden](https://github.com/avelino/awesome-go/graphs/contributors) – ihr seid spitze!

> _Wenn Sie hier ein Paket oder Projekt sehen, das nicht mehr gepflegt wird oder nicht gut passt, reichen Sie bitte einen Pull-Request ein, um diese Datei zu verbessern. Vielen Dank!_

## Inhalt

<details>
<summary>Inhalt ausklappen</summary>

- [Awesome Go](#awesome-go)
  - [Inhalt](#contents)
  - [Aktorenmodell](#actor-model)
  - [Künstliche Intelligenz](#artificial-intelligence)
  - [Audio und Musik](#audio-and-music)
  - [Authentifizierung und Autorisierung](#authentication-and-authorization)
  - [Blockchain](#blockchain)
  - [Bot-Entwicklung](#bot-building)
  - [Build-Automatisierung](#build-automation)
  - [Kommandozeile](#command-line)
    - [Fortgeschrittene Konsolen-UIs](#advanced-console-uis)
    - [Standard-CLI](#standard-cli)
  - [Konfiguration](#configuration)
  - [Kontinuierliche Integration](#continuous-integration)
  - [CSS-Präprozessoren](#css-preprocessors)
  - [Frameworks für Datenintegration](#data-integration-frameworks)
  - [Datenstrukturen und Algorithmen](#data-structures-and-algorithms)
    - [Bit-Packing und Kompression](#bit-packing-and-compression)
    - [Bitsets](#bit-sets)
    - [Bloom- und Cuckoo-Filter](#bloom-and-cuckoo-filters)
    - [Sammlungen von Datenstrukturen und Algorithmen](#data-structure-and-algorithm-collections)
    - [Iteratoren](#iterators)
    - [Maps](#maps)
    - [Verschiedene Datenstrukturen und Algorithmen](#miscellaneous-data-structures-and-algorithms)
    - [Nullable-Typen](#nullable-types)
    - [Warteschlangen](#queues)
    - [Mengen](#sets)
    - [Textanalyse](#text-analysis)
    - [Bäume](#trees)
    - [Pipes](#pipes)
  - [Datenbanken](#database)
    - [Caches](#caches)
    - [In Go implementierte Datenbanken](#databases-implemented-in-go)
    - [Migration von Datenbankschemas](#database-schema-migration)
    - [Datenbankwerkzeuge](#database-tools)
    - [SQL-Query-Builder](#sql-query-builders)
  - [Datenbanktreiber](#database-drivers)
    - [Schnittstellen zu mehreren Backends](#interfaces-to-multiple-backends)
    - [Treiber für relationale Datenbanken](#relational-database-drivers)
    - [Treiber für NoSQL-Datenbanken](#nosql-database-drivers)
    - [Such- und Analysedatenbanken](#search-and-analytic-databases)
  - [Datum und Uhrzeit](#date-and-time)
  - [Verteilte Systeme](#distributed-systems)
  - [Dynamisches DNS](#dynamic-dns)
  - [E-Mail](#email)
  - [Einbettbare Skriptsprachen](#embeddable-scripting-languages)
  - [Fehlerbehandlung](#error-handling)
  - [Dateiverarbeitung](#file-handling)
  - [Finanzen](#financial)
  - [Formulare](#forms)
  - [Funktionale Programmierung](#functional)
  - [Spieleentwicklung](#game-development)
  - [Generatoren](#generators)
  - [Geografie](#geographic)
  - [Go-Compiler](#go-compilers)
  - [Goroutinen](#goroutines)
  - [GUI](#gui)
  - [Hardware](#hardware)
  - [Bilder](#images)
  - [IoT (Internet der Dinge)](#iot-internet-of-things)
  - [Job-Scheduler](#job-scheduler)
  - [JSON](#json)
  - [Protokollierung](#logging)
  - [Maschinelles Lernen](#machine-learning)
  - [Nachrichtenübermittlung](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [Verschiedenes](#miscellaneous)
    - [Abhängigkeitsinjektion](#dependency-injection)
    - [Projektstruktur](#project-layout)
    - [Zeichenketten](#strings)
    - [Nicht kategorisiert](#uncategorized)
  - [Verarbeitung natürlicher Sprache](#natural-language-processing)
    - [Spracherkennung](#language-detection)
    - [Morphologische Analysatoren](#morphological-analyzers)
    - [Slugifier](#slugifiers)
    - [Tokenizer](#tokenizers)
    - [Übersetzung](#translation)
    - [Transliteration](#transliteration)
  - [Netzwerk](#networking)
    - [HTTP-Clients](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [Paketverwaltung](#package-management)
  - [Leistung](#performance)
  - [Abfragesprachen](#query-language)
  - [Reflexion](#reflection)
  - [Einbettung von Ressourcen](#resource-embedding)
  - [Wissenschaft und Datenanalyse](#science-and-data-analysis)
  - [Sicherheit](#security)
  - [Serialisierung](#serialization)
  - [Serveranwendungen](#server-applications)
  - [Stream-Verarbeitung](#stream-processing)
  - [Template-Engines](#template-engines)
  - [Testen](#testing)
    - [Test-Frameworks](#testing-frameworks)
    - [Mocks](#mock)
    - [Fuzzing und Delta-Debugging/Reduzieren/Shrinking](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium und Werkzeuge zur Browsersteuerung](#selenium-and-browser-control-tools)
    - [Fehlerinjektion](#fail-injection)
  - [Textverarbeitung](#text-processing)
    - [Formatierer](#formatters)
    - [Auszeichnungssprachen](#markup-languages)
    - [Parser/Encoder/Decoder](#parsersencodersdecoders)
    - [Reguläre Ausdrücke](#regular-expressions)
    - [Bereinigung](#sanitation)
    - [Scraper](#scrapers)
    - [RSS](#rss)
    - [Hilfsprogramme/Verschiedenes](#utilitymiscellaneous)
  - [APIs von Drittanbietern](#third-party-apis)
  - [Hilfsprogramme](#utilities)
  - [UUID](#uuid)
  - [Validierung](#validation)
  - [Versionskontrolle](#version-control)
  - [Video](#video)
  - [Web-Frameworks](#web-frameworks)
    - [Middleware](#middlewares)
      - [Eigentliche Middleware](#actual-middlewares)
      - [Bibliotheken zum Erstellen von HTTP-Middleware](#libraries-for-creating-http-middlewares)
    - [Router](#routers)
  - [WebAssembly](#webassembly)
  - [Webhook-Server](#webhooks-server)
  - [Windows](#windows)
  - [Workflow-Frameworks](#workflow-frameworks)
  - [XML](#xml)
  - [Zero-Trust](#zero-trust)
  - [Codeanalyse](#code-analysis)
  - [Editor-Plugins](#editor-plugins)
  - [Go-Generate-Werkzeuge](#go-generate-tools)
  - [Go-Werkzeuge](#go-tools)
  - [Softwarepakete](#software-packages)
    - [DevOps-Werkzeuge](#devops-tools)
    - [Sonstige Software](#other-software)
- [Ressourcen](#resources)
  - [Benchmarks](#benchmarks)
  - [Konferenzen](#conferences)
  - [E-Books](#e-books)
    - [E-Books zum Kaufen](#e-books-for-purchase)
    - [Kostenlose E-Books](#free-e-books)
  - [Gophers](#gophers)
  - [Treffen](#meetups)
  - [Styleguides](#style-guides)
  - [Soziale Medien](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Webseiten](#websites)
    - [Anleitungen](#tutorials)
    - [Geführtes Lernen](#guided-learning)
  - [Mitwirken](#contribution)
  - [Lizenz](#license)

**[⬆ Zurück nach oben](#contents)**



</details>

## Aktorenmodell

_Bibliotheken zum Erstellen aktorbasierter Programme._

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - Bibliothek für graphbasierten Kontrollfluss (AOP, Aktoren, Zustandsautomaten).
- [Ergo](https://github.com/ergo-services/ergo) - Ein aktorbasiertes Framework mit Netzwerktransparenz zum Erstellen ereignisgesteuerter Architekturen in Golang. Inspiriert von Erlang.
- [Goakt](https://github.com/Tochemey/goakt) - Schnelles, verteiltes Aktor-Framework für Golang, das Protocol Buffers als Nachrichtenformat verwendet.
- [Hollywood](https://github.com/anthdm/hollywood) - Rasend schnelle und leichtgewichtige Aktor-Engine, geschrieben in Golang.
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Verteilte Aktoren für Go, C# und Java/Kotlin.

**[⬆ Zurück nach oben](#contents)**

## Künstliche Intelligenz

_Bibliotheken zum Erstellen von Programmen, die KI nutzen._

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - KI-Gateway zum Routen, Absichern und Überwachen von LLM-Datenverkehr über mehr als 10 Anbieter. OpenAI-kompatible API, WASM-Richtlinien-Plugins, Canary-Rollouts, Echtzeit-Dashboard.
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - Ausführungs-Runtime für KI-Agenten mit Event Sourcing, Checkpoint-Wiederherstellung und At-Most-Once-Ausführungsgarantie. In Go geschrieben.
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Framework zum Erstellen zustandsbehafteter KI-Agenten in Go.
- [agy-mcp](https://github.com/tphakala/agy-mcp) - Server für das Model Context Protocol (MCP), der die Antigravity CLI kapselt, um Prompts und Peer-Reviews auszuführen.
- [ai](https://github.com/joakimcarlsson/ai) - Ein Go-Toolkit zum Erstellen von KI-Agenten und -Anwendungen über mehrere Anbieter hinweg mit einheitlicher LLM-Schnittstelle, Embeddings, Tool-Calling und MCP-Integration.
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - OpenAI-kompatibles LLM-Gateway, das Anfragen über 30 Anbieter routet – mit Fallback, Ratenbegrenzung, Budgets, Guardrails und Observability.
- [chromem-go](https://github.com/philippgille/chromem-go) - Einbettbare Vektordatenbank für Go mit Chroma-ähnlicher Schnittstelle und ohne Abhängigkeiten von Drittanbietern. In-Memory mit optionaler Persistenz.
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Go-Bibliothek, um die nicht interaktive Prompt-Schnittstelle der Claude Code CLI aus Go-Programmen heraus anzusteuern.
- [crewai-go](https://github.com/rhgs/crewai-go) - Idiomatische Go-Portierung von CrewAI (Multi-Agenten-Orchestrierung). Keine Abhängigkeiten, nur Standardbibliothek.
- [Cynative](https://github.com/cynative/cynative) - Framework zum Erstellen von KI-Agenten für Security Engineering in Go. Konstruktionsbedingt nur lesend, integrierte Sandbox, 45 Agenten-Blueprints für tiefgehende Recherchen zu AWS, GCP, Azure, K8s, GitHub und GitLab.
- [dakera-go](https://github.com/dakera-ai/dakera-go) - Offizielles Go-Client-SDK für den selbst gehosteten Agenten-Memory-Server Dakera mit typisierten Schnittstellen für das Speichern und Abrufen von Erinnerungen, Sitzungsverwaltung, Namespace-Operationen und Decay-Konfiguration.
- [fun](https://gitlab.com/tozd/go/fun) - Die einfachste und dennoch leistungsstarke Art, große Sprachmodelle (LLMs) in Go zu nutzen.
- [goai](https://github.com/zendev-sh/goai) - Go-SDK zum Erstellen von KI-Anwendungen. Ein SDK, mehr als 20 Anbieter. Inspiriert vom Vercel AI SDK.
- [GoModel](https://github.com/ENTERPILOT/GoModel) - KI-Gateway, das eine einheitliche OpenAI-kompatible API für OpenAI, Anthropic, Gemini, Groq, xAI, Ollama und weitere Anbieter bereitstellt – mit Routing, Nutzungserfassung, Ratenlimits und Guardrails.
- [hotplex](https://github.com/hrygo/hotplex) - Runtime-Engine für KI-Agenten mit langlebigen Sitzungen für Claude Code, OpenCode, pi-mono und andere KI-Tools für die CLI. Bietet Vollduplex-Streaming, Integrationen für mehrere Plattformen und eine sichere Sandbox.
- [jargo](https://github.com/gojargo/jargo) - Framework zum Erstellen von Echtzeit-Sprach-KI-Agenten über WebRTC, das Speech-to-Text, LLMs und Text-to-Speech zu einer Streaming-Pipeline verbindet.
- [keen-code](https://github.com/mochow13/keen-code) - Ein kontexteffizienter, terminalbasierter KI-Coding-Agent. Anbieterunabhängig, unterstützt MCPs, Agent Skills, Subagents und mehr. Mit einer einfachen und unkomplizierten TUI.
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo ist ein Framework zur Entwicklung von Anwendungen, die auf Sprachmodellen basieren.
- [langgraphgo](https://github.com/smallnest/langgraphgo) - Eine Go-Bibliothek zum Erstellen zustandsbehafteter Multi-Akteur-Anwendungen mit LLMs, basierend auf dem Konzept von LangGraph, mit vielen integrierten Agentenarchitekturen.
- [llm-box](https://github.com/alib8b8/llm-box) - Terminalbasierte KI-Workflow-Engine mit YAML-gesteuerten Pipelines, mehr als 20 LLM-Anbietern (DeepSeek, Qwen, GLM, Mistral usw.) und einer TUI zur Workflow-Verwaltung.
- [LocalAI](https://github.com/mudler/LocalAI) - Open-Source-Alternative zu OpenAI – KI-Modelle selbst hosten.
- [localaik](https://github.com/harshaneel/localaik) - Lokale Emulation der OpenAI- und Gemini-APIs im Stil von LocalStack; ein einzelner Docker-Container, Backend mit llama.cpp + Gemma 3.
- [mcp-go](https://github.com/mark3labs/mcp-go) - Go-Implementierung des Model Context Protocol zum Erstellen von MCP-Servern und -Clients in Go.
- [Ollama](https://github.com/jmorganca/ollama) - Große Sprachmodelle lokal ausführen.
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - Verwaltet Gruppen von Ollama-Instanzen mit Lastverteilung und Failover.
- [otellix](https://github.com/oluwajubelo1/otellix) - OpenTelemetry-native LLM-Observability und Budget-Guardrails für kostenbeschränkte Produktionsumgebungen.
- [routex](https://github.com/Ad3bay0c/routex) - YAML-gesteuerte Multi-Agenten-KI-Runtime für Go mit Supervision im Erlang-Stil, Unterstützung für MCP-Tool-Server und einer CLI.
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - Bedeutungsbasierte Suche über PDF, Markdown, DOCX, Quellcode und andere Dateitypen, die generative KI-Embedding-Modelle nutzt, um Dateien in eine Vektordatenbank zu vektorisieren.
- [skillreaper](https://github.com/thousandflowers/skillreaper) - CLI, die Sitzungsprotokolle von KI-Agenten durchsucht, um ungenutzte Skills, MCP-Server und Agenten in Claude Code, Codex CLI, Hermes, OpenCode, Cursor und OpenClaw zu erkennen und sicher unter Quarantäne zu stellen.
- [Smeldr](https://github.com/Smeldr/core) - KI-natives Content-Backend mit typisiertem Lebenszyklusmanagement, nativen MCP-Tools für jeden Inhaltstyp und ohne Laufzeitabhängigkeiten.
- [snip](https://github.com/edouard-claude/snip) - CLI-Proxy, der den LLM-Tokenverbrauch mit deklarativen YAML-Filtern um 60–90 % senkt. Drop-in-Lösung für Claude Code, Cursor, Copilot und Gemini. rtk-Alternative in Go.
- [thermal](https://github.com/jadmadi/thermal) - Terminal-Heatmap für Beiträge, Streak-Tracker und Token-Bestenliste für KI-Coding-Assistenten.
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - Framework zum Erstellen LLM-basierter Multi-Agenten-Systeme.
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - MCP-Server, der KI-Assistenten Websuche, Inhaltsextraktion und Recherche über mehrere Quellen ermöglicht. Eine einzige Binärdatei, 5 Suchanbieter mit Circuit-Breaker-Failover, 4-stufige Scraping-Pipeline.
- [zenflow](https://github.com/zendev-sh/zenflow) - Engine für Multi-Agenten-Orchestrierung und Workflows. Deklarative YAML-Workflows, LLM-Koordinator mit Hub-and-Spoke-Postfächern, Race-sichere Zustellung. Eine YAML-Datei, eine Go-Binärdatei. Läuft mit jedem von goai unterstützten Anbieter.

**[⬆ Zurück nach oben](#contents)**

## Audio und Musik

_Bibliotheken zur Bearbeitung von Audio und Musik._

- [beep](https://github.com/gopxl/beep) - Eine einfache Bibliothek für Audiowiedergabe und -bearbeitung.
- [flac](https://github.com/mewkiz/flac) - Nativer FLAC-Encoder/-Decoder in Go mit Unterstützung für FLAC-Streams.
- [gaad](https://github.com/Comcast/gaad) - Nativer AAC-Bitstream-Parser in Go.
- [go-aac](https://github.com/tphakala/go-aac) - AAC-LC-Encoder und -Decoder in reinem Go, portiert von FFmpeg.
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - Hochwertiger Audio-Resampler in reinem Go mit SIMD-Beschleunigung.
- [go-flac](https://github.com/tphakala/go-flac) - Nativer FLAC-Encoder und -Decoder in Go mit SIMD-Beschleunigung.
- [go-mpris](https://github.com/leberKleber/go-mpris) - Client für die D-Bus-Schnittstellen von mpris.
- [go-opus](https://github.com/tphakala/go-opus) - Native Go-Implementierung des Opus-Audiocodecs (RFC 6716) mit RFC-konformem Decoder.
- [go-resample](https://github.com/gojargo/go-resample) - Abtastratenkonverter für Audio in reinem Go (ohne cgo) mit Sinc-, Linear- und Zero-Order-Hold-Konvertern.
- [go-wav](https://github.com/tphakala/go-wav) - WAV/RIFF-Reader und -Writer in reinem Go mit RF64- und BW64-Unterstützung für Dateien größer als 4 GiB.
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - Native Go-Bibliothek zur Audioverarbeitung.
- [gocue](https://github.com/iSerganov/gocue) - Audioanalyse-CLI, die Cue-in-, Cue-out- und Overlay-Punkte erkennt, die Lautheit nach EBU R128 misst und JSON für Liquidsoap ausgibt.
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - libsamplerate-Bindings für Go.
- [id3v2](https://github.com/bogem/id3v2) - Bibliothek zum Dekodieren und Kodieren von ID3 für Go.
- [malgo](https://github.com/gen2brain/malgo) - Mini-Audiobibliothek.
- [minimp3](https://github.com/tosone/minimp3) - Leichtgewichtige MP3-Decoder-Bibliothek.
- [music-theory](https://github.com/go-music-theory/music-theory) - Musiktheoretische Modelle in Go.
- [Oto](https://github.com/hajimehoshi/oto) - Eine Low-Level-Bibliothek zur Tonwiedergabe auf mehreren Plattformen.
- [PortAudio](https://github.com/gordonklaus/portaudio) - Go-Bindings für die Audio-I/O-Bibliothek PortAudio.
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - KI-Sprachagenten mit JSON-Konfiguration, STT → LLM → TTS-Pipelines über WebSocket und WebRTC.

**[⬆ Zurück nach oben](#contents)**

## Authentifizierung und Autorisierung

_Bibliotheken zur Implementierung von Authentifizierung und Autorisierung._

- [authboss](https://github.com/volatiletech/authboss) - Modulares Authentifizierungssystem für das Web. Es versucht, so viel Boilerplate und so viele „schwierige Dinge“ wie möglich zu beseitigen, sodass Sie es bei jedem neuen Webprojekt in Go einfach einbinden, konfigurieren und mit der Entwicklung Ihrer App beginnen können, ohne jedes Mal ein Authentifizierungssystem bauen zu müssen.
- [authgate](https://github.com/go-authgate/authgate) - Ein leichtgewichtiger OAuth-2.0-Autorisierungsserver, der Device Authorization Grant ([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)), Authorization Code Flow mit PKCE ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)) und Client Credentials Grant für Machine-to-Machine-Authentifizierung unterstützt.
- [branca](https://github.com/essentialkaos/branca) - branca-Token-[Implementierung der Spezifikation](https://github.com/tuupola/branca-spec) für Golang 1.15+.
- [casbin](https://github.com/hsluoyz/casbin) - Autorisierungsbibliothek, die Zugriffskontrollmodelle wie ACL, RBAC und ABAC unterstützt.
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - Stellt einen Parser für das Dateiformat cookies.txt bereit.
- [go-githubauth](https://github.com/jferrl/go-githubauth) - Hilfsfunktionen für die GitHub-Authentifizierung: GitHub-App- und Installations-Tokens erzeugen und verwenden.
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian ist eine Golang-Bibliothek, die eine einfache, saubere und idiomatische Möglichkeit bietet, leistungsfähige, moderne API- und Web-Authentifizierung zu erstellen, die LDAP, Basic, Bearer und zertifikatsbasierte Authentifizierung unterstützt.
- [go-iam](https://github.com/melvinodsa/go-iam) - Entwicklerorientiertes Identity- und Access-Management-System mit einfacher UI.
- [go-jose](https://github.com/go-jose/go-jose) - Recht vollständige Implementierung der Spezifikationen der JOSE-Arbeitsgruppe für JSON Web Token, JSON Web Signatures und JSON Web Encryption.
- [go-jwt](https://github.com/deatil/go-jwt) - Eine JWT-Bibliothek (JSON Web Token) für Go.
- [go-jwt](https://github.com/pardnchiu/go-jwt) - JWT-Authentifizierungspaket mit Access- und Refresh-Tokens inklusive Fingerprinting, Redis-Speicherung und automatischer Aktualisierung.
- [goiabada](https://github.com/leodip/goiabada) - Ein Open-Source-Server für Authentifizierung und Autorisierung mit Unterstützung für OAuth2 und OpenID Connect.
- [gologin](https://github.com/dghubble/gologin) - Verkettbare Handler für die Anmeldung über OAuth1- und OAuth2-Authentifizierungsanbieter.
- [gorbac](https://github.com/mikespook/gorbac) - Bietet eine leichtgewichtige Implementierung rollenbasierter Zugriffskontrolle (RBAC) in Golang.
- [gosession](https://github.com/Kwynto/gosession) - Schnelle Sessions für net/http in GoLang. Dieses Paket ist vielleicht die beste Implementierung des Session-Mechanismus – oder versucht zumindest, es zu werden.
- [goth](https://github.com/markbates/goth) - Bietet eine einfache, saubere und idiomatische Möglichkeit, OAuth und OAuth2 zu verwenden. Unterstützt direkt mehrere Anbieter.
- [jeff](https://github.com/abraithwaite/jeff) - Einfache, flexible, sichere und idiomatische Verwaltung von Web-Sessions mit austauschbaren Backends.
- [jwt](https://github.com/pascaldekloe/jwt) - Leichtgewichtige Bibliothek für JSON Web Token (JWT).
- [jwt](https://github.com/cristalhq/jwt) - Sichere, einfache und schnelle JSON Web Tokens für Go.
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - JWT-Middleware für Golang-HTTP-Server mit vielen Konfigurationsoptionen.
- [jwt-go](https://github.com/golang-jwt/jwt) - Eine voll ausgestattete Implementierung von JSON Web Tokens (JWT). Diese Bibliothek unterstützt das Parsen und Verifizieren sowie das Erzeugen und Signieren von JWTs.
- [jwx](https://github.com/lestrrat-go/jwx) - Go-Modul, das verschiedene JWx-Technologien implementiert (JWA/JWE/JWK/JWS/JWT, auch bekannt als JOSE).
- [keto](https://github.com/ory/keto) - Open-Source-Implementierung (Go) von „Zanzibar: Google's Consistent, Global Authorization System“. Bietet gRPC, REST-APIs, newSQL und eine einfache, granulare Berechtigungssprache. Unterstützt ACL, RBAC und andere Zugriffsmodelle.
- [loginsrv](https://github.com/tarent/loginsrv) - JWT-Login-Microservice mit austauschbaren Backends wie OAuth2 (Github), htpasswd, osiam.
- [melange](https://github.com/pthm/melange) - Kompiliert OpenFGA-Autorisierungsschemata in PL/pgSQL-Funktionen, die feingranulare, beziehungsbasierte Zugriffskontrollprüfungen direkt in PostgreSQL ausführen.
- [oauth2](https://github.com/golang/oauth2) - Nachfolger von goauth2. Generisches OAuth-2.0-Paket mit Unterstützung für JWT, Google APIs, Compute Engine und App Engine.
- [oidc](https://github.com/zitadel/oidc) - Einfach zu verwendende OpenID-Connect-Client- und -Server-Bibliothek für Go, zertifiziert von der OpenID Foundation.
- [openfga](https://github.com/openfga/openfga) - Implementierung feingranularer Autorisierung auf Basis des Papers „Zanzibar: Google's Consistent, Global Authorization System“. Unterstützt von der [CNCF](https://www.cncf.io/).
- [osin](https://github.com/openshift/osin) - OAuth2-Serverbibliothek für Golang.
- [otpgen](https://github.com/grijul/otpgen) - Bibliothek zum Erzeugen von TOTP/HOTP-Codes.
- [otpgo](https://github.com/jltorresm/otpgo) - Bibliothek für zeitbasierte Einmalpasswörter (TOTP) und HMAC-basierte Einmalpasswörter (HOTP) für Go.
- [paseto](https://github.com/o1egl/paseto) - Golang-Implementierung von Platform-Agnostic Security Tokens (PASETO).
- [permissions](https://github.com/xyproto/permissions) - Bibliothek zur Verwaltung von Benutzern, Anmeldezuständen und Berechtigungen. Verwendet sichere Cookies und bcrypt.
- [scope](https://github.com/SonicRoshan/scope) - OAuth2-Scopes in Go einfach verwalten.
- [scs](https://github.com/alexedwards/scs) - Sitzungsmanager für HTTP-Server.
- [securecookie](https://github.com/chmike/securecookie) - Effizientes Kodieren/Dekodieren sicherer Cookies.
- [session](https://github.com/icza/session) - Go-Sitzungsverwaltung für Webserver (einschließlich Unterstützung für Google App Engine – GAE).
- [sessions](https://github.com/adam-hanna/sessions) - Kinderleichter, hochperformanter und umfassend anpassbarer Sitzungsdienst für Go-HTTP-Server.
- [sessionup](https://github.com/swithek/sessionup) - Einfaches, aber effektives Paket zur Verwaltung und Identifizierung von HTTP-Sitzungen.
- [sjwt](https://github.com/brianvoe/sjwt) - Einfacher JWT-Generator und -Parser.
- [spicedb](https://github.com/authzed/spicedb) - Eine von Zanzibar inspirierte Datenbank, die feingranulare Autorisierung ermöglicht.
- [x509proxy](https://github.com/vkuznet/x509proxy) - Bibliothek zum Umgang mit X509-Proxy-Zertifikaten.

**[⬆ Zurück nach oben](#contents)**

## Blockchain

_Werkzeuge zum Erstellen von Blockchains._

- [cometbft](https://github.com/cometbft/cometbft) - Eine verteilte, byzantinisch fehlertolerante, deterministische Engine zur Replikation von Zustandsautomaten. Sie ist ein Fork von Tendermint Core und implementiert den Tendermint-Konsensalgorithmus.
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Ein Framework zum Erstellen öffentlicher Blockchains im Cosmos-Ökosystem.
- [gno](https://github.com/gnolang/gno) - Eine umfassende Smart-Contract-Suite, entwickelt mit Golang und Gnolang, einer deterministischen, speziell für Blockchains entwickelten Go-Variante.
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Offizielle Go-Implementierung des Ethereum-Protokolls.
- [gosemble](https://github.com/LimeChain/gosemble) - Ein Go-basiertes Framework zum Erstellen von Polkadot/Substrate-kompatiblen Runtimes.
- [gossamer](https://github.com/ChainSafe/gossamer) - Eine Go-Implementierung des Polkadot Host.
- [kubo](https://github.com/ipfs/kubo) - Eine IPFS-Implementierung in Go. Sie bietet inhaltsadressierbaren Speicher, der für dezentrale Speicherung in DApps genutzt werden kann. Basiert auf dem IPFS-Protokoll.
- [lnd](https://github.com/lightningnetwork/lnd) - Eine vollständige Implementierung eines Lightning-Network-Knotens.
- [nview](https://github.com/blinklabs-io/nview) - Lokales Überwachungswerkzeug für einen Cardano-Knoten. Es ist eine TUI (Terminal-Benutzeroberfläche), die für die meisten Bildschirme ausgelegt ist.
- [pactus](https://github.com/pactus-project/pactus) - Eine Full-Node-Implementierung der Pactus-Blockchain in Go.
- [solana-go](https://github.com/gagliardetto/solana-go) - Go-Bibliothek zur Anbindung an die JSON-RPC- und WebSocket-Schnittstellen von Solana.
- [tendermint](https://github.com/tendermint/tendermint) - Hochperformante Middleware, die einen in beliebiger Programmiersprache geschriebenen Zustandsautomaten mithilfe der Tendermint-Konsens- und -Blockchain-Protokolle in einen byzantinisch fehlertoleranten, replizierten Zustandsautomaten verwandelt.
- [tronlib](https://github.com/kslamph/tronlib) - Ein umfassendes, produktionsreifes Go-SDK für die Interaktion mit der TRON-Blockchain mit Unterstützung für TRC20-Tokens.

**[⬆ Zurück nach oben](#contents)**

## Bot-Entwicklung

_Bibliotheken zum Erstellen von und Arbeiten mit Bots._

- [arikawa](https://github.com/diamondburned/arikawa) - Eine Bibliothek und ein Framework für die Discord-API.
- [bot](https://github.com/go-telegram/bot) - Telegram-Bot-Bibliothek ohne Abhängigkeiten mit zusätzlichen UI-Komponenten.
- [echotron](https://github.com/NicoNex/echotron) - Eine elegante, nebenläufige Bibliothek für Telegram-Bots in Go.
- [go-joe](https://joe-bot.net) - Eine universelle Bot-Bibliothek, inspiriert von Hubot, aber in Go geschrieben.
- [go-sarah](https://github.com/oklahomer/go-sarah) - Framework zum Erstellen eines Bots für gewünschte Chatdienste wie LINE, Slack, Gitter und weitere.
- [go-tg](https://github.com/mr-linch/go-tg) - Aus der offiziellen Dokumentation generierte Go-Client-Bibliothek für die Telegram Bot API, inklusive Hilfsmitteln zum Erstellen komplexer Bots.
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - Bibliothek zum Schreiben von Bots für den Chat von twitch.tv.
- [micha](https://github.com/onrik/micha) - Go-Bibliothek für die Telegram-Bot-API.
- [slack-bot](https://github.com/innogames/slack-bot) - Sofort einsatzbereiter Slack-Bot für faule Entwickler: eigene Befehle, Jenkins, Jira, Bitbucket, Github …
- [slacker](https://github.com/slack-io/slacker) - Einfach zu verwendendes Framework zum Erstellen von Slack-Bots.
- [telebot](https://github.com/tucnak/telebot) - Telegram-Bot-Framework, geschrieben in Go.
- [teleflow](https://github.com/kslamph/teleflow) - Einfaches, typsicheres Telegram-Bot-Framework mit Fluent Flows und automatischer Zustandsverwaltung.
- [telego](https://github.com/mymmrac/telego) - Telegram-Bot-API-Bibliothek für Golang mit vollständiger 1:1-Implementierung der API.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Einfacher und sauberer Telegram-Bot-Client.
- [TG](https://github.com/enetx/tg) - Telegram-Bot-Framework für Go.
- [wayback](https://github.com/wabarc/wayback) - Ein Bot für Telegram, Mastodon, Slack und andere Messaging-Plattformen, der Webseiten archiviert.
- [ymsdk](https://github.com/rekurt/ymsdk) - Go-SDK für die Yandex Messenger Bot API mit typsicheren Modellen, automatischen Wiederholungen und Behandlung von Ratenlimits.
   - [Wisp](https://github.com/wisp-trading/wisp) - Ereignisgesteuertes Trading-Framework für Go. Spot, Perpetual Futures, Prognosemärkte. Mehrere Börsen (Bybit, Hyperliquid, Polymarket).

**[⬆ Zurück nach oben](#contents)**

## Build-Automatisierung

_Bibliotheken und Werkzeuge, die bei der Build-Automatisierung helfen._

- [1build](https://github.com/gopinath-langote/1build) - Kommandozeilenwerkzeug zur reibungslosen Verwaltung projektspezifischer Befehle.
- [air](https://github.com/cosmtrek/air) - Air – Live-Reload für Go-Apps.
- [anko](https://github.com/GuilhermeCaruso/anko) - Einfacher Anwendungs-Watcher für mehrere Programmiersprachen.
- [gaper](https://github.com/maxclaus/gaper) - Baut ein Go-Projekt und startet es neu, wenn es abstürzt oder sich eine überwachte Datei ändert.
- [gilbert](https://go-gilbert.github.io) - Build-System und Task-Runner für Go-Projekte.
- [gob](https://github.com/kcmvp/gob) - Build-Werkzeug für Go-Projekte ähnlich wie [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/).
- [goyek](https://github.com/goyek/goyek) - Build-Pipelines in Go erstellen.
- [mage](https://github.com/magefile/mage) - Mage ist ein make/rake-ähnliches Build-Werkzeug, das Go verwendet.
- [mmake](https://github.com/tj/mmake) - Modernes Make.
- [realize](https://github.com/tockins/realize) - Go-Build-System mit Datei-Watchern und Live-Reload. Ausführen, bauen und Dateiänderungen mit benutzerdefinierten Pfaden überwachen.
- [rex](https://github.com/rexrun-dev/rex) - Universeller Projekt-Runner ohne Konfiguration. Erkennt Ihren Stack (Go, Node, Python, Rust, PHP, Zig, Elixir) und führt den passenden Befehl aus.
- [Task](https://github.com/go-task/task) - Einfache Alternative zu „Make“.
- [taskctl](https://github.com/taskctl/taskctl) - Nebenläufiger Task-Runner.
- [xc](https://github.com/joerdav/xc) - Task-Runner mit in README.md definierten Tasks, ausführbares Markdown.

**[⬆ Zurück nach oben](#contents)**

## Kommandozeile

### Fortgeschrittene Konsolen-UIs

_Bibliotheken zum Erstellen von Konsolenanwendungen und Konsolen-Benutzeroberflächen._

- [asciigraph](https://github.com/guptarohit/asciigraph) - Go-Paket zum Erstellen leichtgewichtiger ASCII-Liniendiagramme ╭┈╯ in Kommandozeilen-Apps ohne weitere Abhängigkeiten.
- [aurora](https://github.com/logrusorgru/aurora) - ANSI-Terminalfarben mit Unterstützung für fmt.Printf/Sprintf.
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - Hochgradig anpassbare Boxen im Terminal rendern.
- [bubble-table](https://github.com/Evertras/bubble-table) - Eine interaktive Tabellenkomponente für bubbletea.
- [bubbles](https://github.com/charmbracelet/bubbles) - TUI-Komponenten für bubbletea.
- [bubbletea](https://github.com/charmbracelet/bubbletea) - Go-Framework zum Erstellen von Terminal-Apps, basierend auf The Elm Architecture.
- [chroma16](https://github.com/arceus-7/chroma16) - Erzeugt eine harmonische 16-Farben-Terminalpalette aus einer einzelnen Ausgangsfarbe oder Zeichenkette.
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Werkzeug für dynamisches Templating von Konfigurationsdateien für Kubernetes-Manifeste oder allgemeine Konfigurationsdateien.
- [ctc](https://github.com/wzshiming/ctc) - Die nicht invasive, plattformübergreifende Terminal-Farbbibliothek, die keine Änderung der Print-Methode erfordert.
- [fx](https://github.com/antonmedv/fx) - JSON-Betrachter und -Prozessor für das Terminal.
- [go-ataman](https://github.com/workanator/go-ataman) - Go-Bibliothek zum Rendern von ANSI-farbigen Textvorlagen in Terminals.
- [go-colorable](https://github.com/mattn/go-colorable) - Farbfähiger Writer für Windows.
- [go-colortext](https://github.com/daviddengcn/go-colortext) - Go-Bibliothek für farbige Ausgabe in Terminals.
- [go-isatty](https://github.com/mattn/go-isatty) - isatty für Golang.
- [go-palette](https://github.com/abusomani/go-palette) - Go-Bibliothek, die elegante und praktische Stildefinitionen mit ANSI-Farben bereitstellt. Vollständig kompatibel mit der [fmt-Bibliothek](https://pkg.go.dev/fmt), die sie für schöne Terminal-Layouts kapselt.
- [go-prompt](https://github.com/c-bata/go-prompt) - Bibliothek zum Erstellen eines leistungsfähigen interaktiven Prompts, inspiriert von [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit).
- [go-tui](https://github.com/grindlemire/go-tui) - Ein deklaratives Terminal-UI-Framework mit templ-ähnlichen Vorlagen, Flexbox-Layout und einem Language Server für die Editor-Unterstützung.
- [gocui](https://github.com/jroimartin/gocui) - Minimalistische Go-Bibliothek zum Erstellen von Konsolen-Benutzeroberflächen.
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - Terminaltext gestalten.
- [gookit/color](https://github.com/gookit/color) - Bibliothek zum farbigen Rendern im Terminal, unterstützt 16 Farben, 256 Farben und RGB-Farbausgabe, kompatibel mit Windows.
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf erzeugt meinungsstarke Go-Projekt-Boilerplate in Produktionsqualität über eine interaktive CLI. Schluss mit dem Kopieren von Gerüstcode zwischen Projekten.
- [lazyenv](https://github.com/lazynop/lazyenv) - TUI zum Durchsuchen, Vergleichen und Bearbeiten von .env-Dateien.
- [lazyteams](https://github.com/agmonetti/lazyteams) - Tastaturgesteuerte Terminal-Benutzeroberfläche für Microsoft Teams.
- [lipgloss](https://github.com/charmbracelet/lipgloss) - Stile für Farbe, Format und Layout im Terminal deklarativ definieren.
- [loom](https://github.com/loom-go/loom) - Signalbasiertes Framework für reaktive Komponenten zum Erstellen von TUIs.
- [marker](https://github.com/cyucelen/marker) - Die einfachste Art, Zeichenketten für farbige Terminalausgaben zu finden und zu markieren.
- [mpb](https://github.com/vbauerster/mpb) - Mehrfach-Fortschrittsbalken für Terminalanwendungen.
- [phoenix](https://github.com/phoenix-tui/phoenix) - Hochperformantes TUI-Framework mit Elm-inspirierter Architektur, perfektem Unicode-Rendering und allokationsfreiem Ereignissystem.
- [progressbar](https://github.com/schollz/progressbar) - Einfacher, threadsicherer Fortschrittsbalken, der auf jedem Betriebssystem funktioniert.
- [pterm](https://github.com/pterm/pterm) - Eine Bibliothek, die Konsolenausgaben auf jeder Plattform mit vielen kombinierbaren Komponenten verschönert.
- [simpletable](https://github.com/alexeyco/simpletable) - Einfache Tabellen im Terminal mit Go.
- [spinner](https://github.com/briandowns/spinner) - Go-Paket, das einfach einen Terminal-Spinner mit Optionen bereitstellt.
- [tabby](https://github.com/cheynewallace/tabby) - Eine winzige Bibliothek für supereinfache Golang-Tabellen.
- [table](https://github.com/tomlazar/table) - Kleine Bibliothek für farbbasierte Tabellen im Terminal.
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox ist eine Bibliothek zum Erstellen plattformübergreifender textbasierter Oberflächen.
- [termdash](https://github.com/mum4k/termdash) - Go-Terminal-Dashboard auf Basis von **termbox-go**, inspiriert von [termui](https://github.com/gizak/termui).
- [termenv](https://github.com/muesli/termenv) - Erweiterte Unterstützung für ANSI-Stile und -Farben für Ihre Terminalanwendungen.
- [termui](https://github.com/gizak/termui) - Go-Terminal-Dashboard auf Basis von **termbox-go**, inspiriert von [blessed-contrib](https://github.com/yaronn/blessed-contrib).
- [uilive](https://github.com/gosuri/uilive) - Bibliothek zum Aktualisieren der Terminalausgabe in Echtzeit.
- [uiprogress](https://github.com/gosuri/uiprogress) - Flexible Bibliothek zum Rendern von Fortschrittsbalken in Terminalanwendungen.
- [uitable](https://github.com/gosuri/uitable) - Bibliothek zur besseren Lesbarkeit tabellarischer Daten in Terminal-Apps.
- [vhs](https://github.com/charmbracelet/vhs) - Ihr CLI-Heimvideorekorder – erzeugt Terminal-GIFs aus Code für Dokumentation und Tutorials.
- [yacspin](https://github.com/theckman/yacspin) - Yet Another CLi Spinner – ein Paket für die Arbeit mit Terminal-Spinnern.

**[⬆ Zurück nach oben](#contents)**

### Standard-CLI

_Bibliotheken zum Erstellen von Standard- oder einfachen Kommandozeilenanwendungen._

- [acmd](https://github.com/cristalhq/acmd) - Einfaches, nützliches und meinungsstarkes CLI-Paket in Go.
- [argparse](https://github.com/akamensky/argparse) - Kommandozeilen-Argumentparser, inspiriert vom argparse-Modul von Python.
- [argv](https://github.com/cosiner/argv) - Go-Bibliothek, die eine Kommandozeilen-Zeichenkette mithilfe der Bash-Syntax in ein Argument-Array aufteilt.
- [boa](https://github.com/GiGurra/boa) - Deklarative Flags, Umgebungsvariablen, Validierung und Konfigurationsdateien aus Struct-Tags. Basiert auf cobra.
- [carapace](https://github.com/rsteube/carapace) - Generator für die Vervollständigung von Befehlsargumenten für spf13/cobra.
- [carapace-bin](https://github.com/rsteube/carapace-bin) - Argumentvervollständigung für mehrere Shells und mehrere Befehle.
- [carapace-spec](https://github.com/rsteube/carapace-spec) - Einfache Vervollständigungen über eine Spec-Datei definieren.
- [climax](https://github.com/tucnak/climax) - Alternative CLI mit „menschlichem Gesicht“, im Geiste des Go-Befehls.
- [clîr](https://github.com/leaanthony/clir) - Eine einfache und klare CLI-Bibliothek. Ohne Abhängigkeiten.
- [cmd](https://github.com/posener/cmd) - Erweitert das Standardpaket `flag` auf idiomatische Weise um Unterbefehle und mehr.
- [cmdr](https://github.com/hedzr/cmdr) - Eine Go-Bibliothek für Kommandozeilen-UIs im POSIX/GNU-Stil, ähnlich wie getopt.
- [cobra](https://github.com/spf13/cobra) - Commander für moderne Go-CLI-Interaktionen.
- [command-chain](https://github.com/rainu/go-command-chain) - Eine Go-Bibliothek zum Konfigurieren und Ausführen von Befehlsketten – etwa wie Pipelines in Unix-Shells.
- [commandeer](https://github.com/jaffee/commandeer) - Entwicklerfreundliche CLI-Apps: richtet Flags, Standardwerte und Nutzungshinweise anhand von Struct-Feldern und -Tags ein.
- [complete](https://github.com/posener/complete) - Bash-Vervollständigungen in Go schreiben + Bash-Vervollständigung für den Go-Befehl.
- [console](https://github.com/reeflective/console) Bibliothek für Closed-Loop-Anwendungen für Cobra-Befehle, mit oh-my-posh-Prompts und mehr.
- [Dnote](https://github.com/dnote/dnote) - Ein einfaches Kommandozeilen-Notizbuch mit Synchronisierung über mehrere Geräte.
- [elvish](https://github.com/elves/elvish) - Eine ausdrucksstarke Programmiersprache und eine vielseitige interaktive Shell.
- [env](https://github.com/codingconcepts/env) - Tag-basierte Umgebungskonfiguration für Structs.
- [flaggy](https://github.com/integrii/flaggy) - Ein robustes und idiomatisches Flag-Paket mit hervorragender Unterstützung für Unterbefehle.
- [flagvar](https://github.com/sgreben/flagvar) - Eine Sammlung von Flag-Argumenttypen für das Standardpaket `flag` von Go.
- [flash-flags](https://github.com/agilira/flash-flags) - Ultraschnelle, POSIX-konforme Bibliothek zum Parsen von Flags ohne Abhängigkeiten, die als direkter Ersatz für die Standardbibliothek mit Sicherheitshärtung verwendet werden kann.
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - Terminalbasiertes Peer-to-Peer-Werkzeug zur Übertragung von Dateien und Nachrichten über ein eigenes zuverlässiges UDP.
- [getopt](https://github.com/jon-codes/getopt) - Ein präzises Go-`getopt`, validiert gegen die Implementierung der GNU libc.
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - CLI-Werkzeug zum Erzeugen von Go-Anwendungsgerüsten mit minimalistischen, Standard- und hexagonalen Architekturmustern.
- [go-arg](https://github.com/alexflint/go-arg) - Struct-basiertes Argument-Parsing in Go.
- [go-flags](https://github.com/jessevdk/go-flags) - Parser für Kommandozeilenoptionen in Go.
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Go-Optionsparser, inspiriert von der Flexibilität von Perls GetOpt::Long.
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Eine anpassbare Bibliothek zur Zeilenbearbeitung mit Emacs-Tastenbelegung, Unicode-Unterstützung, Vervollständigung und Syntaxhervorhebung. Wird in der NYAGOS-Shell verwendet.
- [gocmd](https://github.com/devfacet/gocmd) - Go-Bibliothek zum Erstellen von Kommandozeilenanwendungen.
- [goopt](https://github.com/napalu/goopt) - Ein deklaratives, Struct-Tag-basiertes CLI-Framework für Go mit breitem Funktionsumfang wie hierarchischen Befehlen/Flags, i18n, Shell-Vervollständigung und Validierung.
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Ein Go-natives Multicall-Binary mit 77 POSIX-Werkzeugen und über 97 % Kompatibilität mit der BusyBox-Testsuite.
- [hashicorp/cli](https://github.com/hashicorp/cli) - Go-Bibliothek zur Implementierung von Kommandozeilenschnittstellen.
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - CLI-Anwendungsframework mit automatischer Konfiguration und Dependency Injection.
- [job](https://github.com/liujianping/job) - JOB – machen Sie aus Ihrem kurzfristigen Befehl einen langfristigen Job.
- [kingpin](https://github.com/alecthomas/kingpin) - Kommandozeilen- und Flag-Parser mit Unterstützung für Unterbefehle (abgelöst durch `kong`; siehe unten).
- [liner](https://github.com/peterh/liner) - Readline-ähnliche Go-Bibliothek für Kommandozeilenschnittstellen.
- [mcli](https://github.com/jxskiss/mcli) - Eine minimale, aber sehr leistungsfähige CLI-Bibliothek für Go.
- [memsh](https://github.com/amjadjibon/memsh) - Virtuelle Bash-Shell in Go: führt Shell-Befehle auf einem In-Memory-Dateisystem (afero) aus, mit Unterstützung für WASM-Plugins und einem einbettbaren HTTP-Server.
- [mkideal/cli](https://github.com/mkideal/cli) - Funktionsreiches und einfach zu verwendendes Kommandozeilenpaket auf Basis von Golang-Struct-Tags.
- [mow.cli](https://github.com/jawher/mow.cli) - Go-Bibliothek zum Erstellen von CLI-Anwendungen mit ausgefeiltem Parsen und Validieren von Flags und Argumenten.
- [neuron-cli](https://github.com/steevin/neuron-cli) - Ein Local-First-, Obsidian-kompatibler Wissensmanager für das Terminal.
- [OpenCLI](https://github.com/bcdxn/opencli) - Spezifikation im OpenAPI-Stil für CLIs; definieren Sie Ihre Schnittstelle in einem sprachunabhängigen Dokument, um Dokumentation und Boilerplate-Code für Frameworks zu generieren.
- [ops](https://github.com/nanovms/ops) - Unikernel-Builder/-Orchestrator.
- [orpheus](https://github.com/agilira/orpheus) - CLI-Framework mit Sicherheitshärtung, Plugin-Speichersystem und Observability-Funktionen für den Produktivbetrieb.
- [pflag](https://github.com/spf13/pflag) - Direkter Ersatz für das flag-Paket von Go, implementiert --flags im POSIX/GNU-Stil.
- [readline](https://github.com/reeflective/readline) - Shell-Bibliothek mit modernen und einfach zu verwendenden UI-Funktionen.
- [sflags](https://github.com/octago/sflags) - Struct-basierter Flag-Generator für flag, urfave/cli, pflag, cobra, kingpin und andere Bibliotheken.
- [structcli](https://github.com/leodido/structcli) - Schluss mit Cobra-Boilerplate: leistungsstarke, funktionsreiche CLIs deklarativ aus Go-Structs erstellen.
- [strumt](https://github.com/antham/strumt) - Bibliothek zum Erstellen von Prompt-Ketten.
- [subcmd](https://github.com/bobg/subcmd) - Ein weiterer Ansatz zum Parsen und Ausführen von Unterbefehlen. Funktioniert zusammen mit dem Standardpaket `flag`.
- [teris-io/cli](https://github.com/teris-io/cli) - Einfache und vollständige API zum Erstellen von Kommandozeilenschnittstellen in Go.
- [urfave/cli](https://github.com/urfave/cli) - Einfaches, schnelles und unterhaltsames Paket zum Erstellen von Kommandozeilen-Apps in Go (früher codegangsta/cli).
- [version](https://github.com/mszostok/version) - Erfasst CLI-Versionsinformationen und zeigt sie in mehreren Formaten zusammen mit einem Upgrade-Hinweis an.
- [wlog](https://github.com/dixonwille/wlog) - Einfache Logging-Schnittstelle mit Unterstützung für plattformübergreifende Farben und Nebenläufigkeit.
- [wmenu](https://github.com/dixonwille/wmenu) - Einfach zu verwendende Menüstruktur für CLI-Anwendungen, die Benutzer zu einer Auswahl auffordern.

**[⬆ Zurück nach oben](#contents)**

## Konfiguration

_Bibliotheken zum Parsen von Konfigurationen._

- [aconfig](https://github.com/cristalhq/aconfig) - Einfacher, nützlicher und meinungsstarker Konfigurationslader.
- [argus](https://github.com/agilira/argus) - Dateiüberwachung und Konfigurationsverwaltung mit MPSC-Ringpuffer, adaptiven Batching-Strategien und universellem Format-Parsing (JSON, YAML, TOML, INI, HCL, Properties).
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Der Konfigurationsanbieter zum Abrufen von Daten aus Azure App Configuration in Go-Anwendungen.
- [bcl](https://github.com/wkhere/bcl) - BCL ist eine Konfigurationssprache ähnlich wie HCL.
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - Minimalistischer Konfigurationsleser (aus Dateien, ENV und wo immer Sie wollen).
- [config](https://github.com/JeremyLoy/config) - Cloud-native Anwendungskonfiguration. ENV in nur zwei Zeilen an Structs binden.
- [config](https://github.com/num30/config) - Konfigurieren Sie Ihre App mit zwei Codezeilen über Dateien, Umgebungsvariablen oder Flags.
- [config](https://github.com/andreiavrammsd/config) - Struct-basierter Konfigurationslader mit eigenem Parser für Konfigurationsdateien, unterstützt Umgebungsvariablen, Flags, Standardwerte und Validierung.
- [configuration](https://github.com/BoRuDar/configuration) - Bibliothek zum Initialisieren von Konfigurations-Structs aus Umgebungsvariablen, Dateien, Flags und dem Tag 'default'.
- [configuro](https://github.com/sherifabdlnaby/configuro) - Meinungsstarkes Framework zum Laden und Validieren von Konfigurationen aus ENV und Dateien, ausgerichtet auf 12-Factor-konforme Anwendungen.
- [confiq](https://github.com/greencoda/confiq) - Decoder-Bibliothek für Go, die strukturierte Datenformate in Konfigurations-Structs überführt – mit Unterstützung mehrerer Datenformate.
- [confita](https://github.com/heetch/confita) - Konfiguration kaskadierend aus mehreren Backends in ein Struct laden.
- [conflate](https://github.com/the4thamigo-uk/conflate) - Bibliothek/Werkzeug zum Zusammenführen mehrerer JSON/YAML/TOML-Dateien von beliebigen URLs, zur Validierung gegen ein JSON-Schema und zur Anwendung der im Schema definierten Standardwerte.
- [enflag](https://github.com/atelpis/enflag) - Container-orientierte Konfigurationsbibliothek ohne Abhängigkeiten, die das Parsen von Umgebungsvariablen und Flags vereint. Verwendet Generics für Typsicherheit, ohne Reflection oder Struct-Tags.
- [env](https://github.com/caarlos0/env) - Umgebungsvariablen in Go-Structs parsen (mit Standardwerten).
- [env](https://github.com/junk1tm/env) - Ein leichtgewichtiges Paket zum Laden von Umgebungsvariablen in Structs.
- [env](https://github.com/syntaqx/env) - Ein Hilfspaket für Umgebungsvariablen mit Unterstützung für das Unmarshaling in Structs.
- [envconfig](https://github.com/vrischmann/envconfig) - Lesen Sie Ihre Konfiguration aus Umgebungsvariablen.
- [envh](https://github.com/antham/envh) - Hilfsfunktionen zur Verwaltung von Umgebungsvariablen.
- [envyaml](https://github.com/yuseferi/envyaml) - Leser für YAML mit Umgebungsvariablen. Er hilft dabei, Secrets als Umgebungsvariablen vorzuhalten, die Konfiguration aber als strukturiertes YAML zu laden.
- [fig](https://github.com/kkyr/fig) - Winzige Bibliothek zum Lesen der Konfiguration aus einer Datei und aus Umgebungsvariablen (mit Validierung und Standardwerten).
- [genv](https://github.com/sakirsensoy/genv) - Umgebungsvariablen einfach lesen, mit dotenv-Unterstützung.
- [go-array](https://github.com/deatil/go-array) - Ein Go-Paket, das Daten aus Map, Slice oder JSON liest oder setzt.
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - Go-Paket, das Parameter aus dem AWS System Manager – Parameter Store abruft.
- [go-cfg](https://github.com/dsbasko/go-cfg) - Die Bibliothek bietet eine einheitliche Möglichkeit, Konfigurationsdaten aus verschiedenen Quellen wie Umgebungsvariablen, Flags und Konfigurationsdateien (.json, .yaml, .toml, .env) in eine Struktur einzulesen.
- [go-conf](https://github.com/ThomasObenaus/go-conf) - Einfache Bibliothek für Anwendungskonfiguration auf Basis annotierter Structs. Sie unterstützt das Lesen der Konfiguration aus Umgebungsvariablen, Konfigurationsdateien und Kommandozeilenparametern.
- [go-config](https://github.com/MordaTeam/go-config) - Einfache und praktische Bibliothek für die Arbeit mit App-Konfigurationen.
- [go-external-config](https://github.com/go-external-config/go) - Von Spring inspirierte Bibliothek zur Konfigurationsverwaltung für Go.
- [go-external-config/aws](https://github.com/go-external-config/aws) - Unterstützung von AWS als Property-Quelle für go-external-config.
- [go-external-config/consul](https://github.com/go-external-config/consul) - Unterstützung von Consul als Property-Quelle für go-external-config.
- [go-external-config/vault](https://github.com/go-external-config/vault) - Unterstützung von Vault als Property-Quelle für go-external-config.
- [go-ini](https://github.com/subpop/go-ini) - Ein Go-Paket, das INI-Dateien marshalt und unmarshalt.
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - Go-Hilfsprogramm zum Laden von Konfigurationsparametern aus AWS SSM (Parameter Store).
- [go-up](https://github.com/ufoscout/go-up) - Eine einfache Konfigurationsbibliothek mit rekursiver Auflösung von Platzhaltern und ohne Magie.
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - Quellbewusste YAML-Validierung mit nativen Go-Schemas und Unterstützung für JSON Schema.
- [GoCfg](https://github.com/Jagerente/gocfg) - Konfigurationsmanager mit Verträgen auf Basis von Struct-Tags, benutzerdefinierten Wertanbietern, Parsern und Dokumentationsgenerierung. Anpassbar und dennoch einfach.
- [goconfig](https://github.com/fulldump/goconfig) - Befüllt Go-Structs aus Flags, Umgebungsvariablen, config.json und Standardwerten mit deterministischer Rangfolge. Keine zusätzlichen Abhängigkeiten.
- [godotenv](https://github.com/joho/godotenv) - Go-Portierung der dotenv-Bibliothek von Ruby (lädt Umgebungsvariablen aus `.env`).
- [goenv](https://github.com/psyb0t/goenv) - Liest die Umgebungsvariable ENV und meldet, ob der Prozess in Produktion oder Entwicklung läuft.
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config ist ein leichtgewichtiger und dennoch leistungsstarker Konfigurationsmanager für die Programmiersprache Go.
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - Modulare JSON-Konfiguration. Halten Sie Ihre Konfigurations-Structs neben dem Code, den sie konfigurieren, und delegieren Sie das Parsen an Untermodule, ohne auf die vollständige Serialisierung der Konfiguration zu verzichten.
- [gonfig](https://github.com/milad-abbasi/gonfig) - Tag-basierter Konfigurationsparser, der Werte aus verschiedenen Anbietern in typsichere Structs lädt.
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - Lädt Konfigurationen per Reflection aus Umgebungsvariablen in Structs, mit Standardwerten und Pflichtfeldern über Struct-Tags.
- [gookit/config](https://github.com/gookit/config) - Verwaltung von Anwendungskonfigurationen (laden, abrufen, setzen). Unterstützt JSON, YAML, TOML, INI, HCL. Laden mehrerer Dateien, Zusammenführen mit Datenüberschreibung.
- [harvester](https://github.com/beatlabs/harvester) - Harvester, ein einfach zu verwendendes Paket für statische und dynamische Konfiguration mit Unterstützung für Seeding, Umgebungsvariablen und Consul-Integration.
- [hedzr/store](https://github.com/hedzr/store) - Erweiterbare, hochperformante Bibliothek zur Konfigurationsverwaltung, optimiert für hierarchische Daten.
- [hjson](https://github.com/hjson/hjson-go) - Human JSON, ein Konfigurationsdateiformat für Menschen. Lockerere Syntax, weniger Fehler, mehr Kommentare.
- [hocon](https://github.com/gurkankaymak/hocon) - Konfigurationsbibliothek für das Format HOCON (eine menschenfreundliche JSON-Obermenge), unterstützt Funktionen wie Umgebungsvariablen, Verweise auf andere Werte, Kommentare und mehrere Dateien.
- [ini](https://github.com/go-ini/ini) - Go-Paket zum Lesen und Schreiben von INI-Dateien.
- [ini](https://github.com/wlevene/ini) - INI-Parser- und Schreibbibliothek: Unmarshal in Structs, Marshal nach JSON, Dateien schreiben, Dateien überwachen.
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - Go-Bibliothek zur Verwaltung von Konfigurationsdaten aus Umgebungsvariablen.
- [koanf](https://github.com/knadh/koanf) - Leichtgewichtige, erweiterbare Bibliothek zum Lesen von Konfigurationen in Go-Anwendungen. Integrierte Unterstützung für JSON, TOML, YAML, Umgebungsvariablen und Kommandozeile.
- [konf](https://github.com/nil-go/konf) - Die einfachste API zum Lesen/Überwachen von Konfigurationen aus Dateien, Umgebungsvariablen, Flags und Clouds (z. B. AWS, Azure, GCP).
- [konfig](https://github.com/lalamove/konfig) - Komponierbare, beobachtbare und performante Konfigurationsverwaltung für Go im Zeitalter der verteilten Verarbeitung.
- [kong](https://github.com/alecthomas/kong) - Kommandozeilenparser mit Unterstützung für beliebig komplexe Kommandozeilenstrukturen und zusätzliche Konfigurationsquellen wie YAML, JSON, TOML usw. (Nachfolger von `kingpin`).
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - Einfaches, nützliches Paket zum Lesen von Umgebungsvariablen.
- [nfigure](https://github.com/muir/nfigure) - Struct-Tag-basierte Konfiguration pro Bibliothek aus Kommandozeilen (Posix- und Go-Stil); Umgebungsvariablen, JSON, YAML
- [onion](https://github.com/goraz/onion) - Schichtbasierte Konfiguration für Go, unterstützt JSON, TOML, YAML, Properties, etcd, Umgebungsvariablen und Verschlüsselung mit PGP.
- [piper](https://github.com/Yiling-J/piper) - Viper-Wrapper mit Konfigurationsvererbung und Schlüsselgenerierung.
- [sonic](https://github.com/bytedance/sonic) - Eine rasend schnelle Bibliothek zum Serialisieren und Deserialisieren von JSON.
- [swap](https://github.com/oblq/swap) - Structs rekursiv instanziieren/konfigurieren, abhängig von der Build-Umgebung (YAML, TOML, JSON und Umgebungsvariablen).
- [typenv](https://github.com/diegomarangoni/typenv) - Minimalistische, typisierte Bibliothek für Umgebungsvariablen ohne Abhängigkeiten.
- [uConfig](https://github.com/omeid/uconfig) - Leichtgewichtige, erweiterbare Konfigurationsverwaltung ohne Abhängigkeiten.
- [viper](https://github.com/spf13/viper) - Go-Konfiguration mit Biss.
- [xdg](https://github.com/adrg/xdg) - Go-Implementierung der [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) und der [XDG-Benutzerverzeichnisse](https://wiki.archlinux.org/index.php/XDG_user_directories).
- [yamagiconf](https://github.com/romshark/yamagiconf) - Die „sichere Teilmenge“ von YAML für Go-Konfigurationen.
- [zerocfg](https://github.com/chaindead/zerocfg) - Mühelose, prägnante Konfigurationsverwaltung, die Boilerplate und repetitiven Code vermeidet und mehrere Quellen mit Prioritätsüberschreibungen unterstützt.

**[⬆ Zurück nach oben](#contents)**

## Kontinuierliche Integration

_Werkzeuge, die bei der kontinuierlichen Integration helfen._

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse ist eine verteilte CI-Plattform.
- [Bencher](https://bencher.dev/) - Eine Suite von Werkzeugen für kontinuierliches Benchmarking, die Performance-Regressionen in der CI aufspüren.
- [CDS](https://github.com/ovh/cds) - Open-Source-Plattform für CI/CD und DevOps-Automatisierung auf Enterprise-Niveau.
- [dot](https://github.com/opnlabs/dot) - Ein minimales Local-First-System für kontinuierliche Integration, das Docker verwendet, um Jobs nebenläufig in Stufen auszuführen.
- [drone](https://github.com/drone/drone) - Drone ist eine auf Docker aufbauende Plattform für Continuous Integration, geschrieben in Go.
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - Eine GitHub Action, die die Codeabdeckung in Ihren Pull-Requests verfolgt – mit einer schönen HTML-Vorschau, kostenlos.
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - Nutzen Sie das integrierte Fuzz-Testing von Go 1.18 in GitHub Actions.
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Automatisiert die semantische Versionierung von Git-Repositorys.
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - Eine GitHub Action, die Probleme meldet, wenn die Testabdeckung unter einem festgelegten Schwellenwert liegt.
- [gomason](https://github.com/nikogura/gomason) - Testen, bauen, signieren und veröffentlichen Sie Ihre Go-Binärdateien aus einem sauberen Arbeitsbereich.
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - Ausgabe von go test für Menschen.
- [goveralls](https://github.com/mattn/goveralls) - Go-Integration für Coveralls.io, ein System zur kontinuierlichen Verfolgung der Codeabdeckung.
- [muffet](https://github.com/raviqqe/muffet) - Schneller Link-Checker für Websites in Go, siehe [Alternativen](https://github.com/lycheeverse/lychee#features).
- [overalls](https://github.com/go-playground/overalls) - coverprofile für Go-Projekte mit mehreren Paketen, für Werkzeuge wie goveralls.
- [PikoCI](https://github.com/pikoci/pikoci) - Selbst gehostetes CI/CD, inspiriert von Concourse. Eine einzige Binärdatei, beliebige Datenbank, beliebige Queue. HCL-Pipelines, austauschbare Ressourcentypen und Runner.
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - Werkzeug für rekursive Abdeckungstests.
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker ist ein Community-Fork des CI-Systems Drone.

**[⬆ Zurück nach oben](#contents)**

## CSS-Präprozessoren

_Bibliotheken zur Vorverarbeitung von CSS-Dateien._

- [go-css](https://github.com/napsy/go-css) - Ein sehr einfacher CSS-Parser, geschrieben in Go.
- [go-libsass](https://github.com/wellington/go-libsass) - Go-Wrapper für das zu 100 % Sass-kompatible Projekt libsass.

**[⬆ Zurück nach oben](#contents)**

## Frameworks für Datenintegration

_Frameworks zur Durchführung von ELT / ETL_

- [Benthos](https://github.com/benthosdev/benthos) - Eine Messaging-Streaming-Brücke zwischen einer Reihe von Protokollen.
- [CloudQuery](http://github.com/cloudquery/cloudquery) - Ein hochperformantes ELT-Framework für Datenintegration mit erweiterbarer Plugin-Architektur.
- [confluence2md](https://github.com/gkoos/confluence2md) - Crawler und Konverter von Confluence nach Markdown.
- [omniparser](https://github.com/jf-tech/omniparser) - Eine vielseitige ETL-Bibliothek, die Texteingaben (CSV/txt/JSON/XML/EDI/X12/EDIFACT usw.) im Streaming-Verfahren parst und Daten mithilfe eines datengesteuerten Schemas in JSON-Ausgaben umwandelt.

**[⬆ Zurück nach oben](#contents)**

## Datenstrukturen und Algorithmen

### Bit-Packing und Kompression

- [bingo](https://github.com/iancmcc/bingo) - Schnelles, allokationsfreies Packen nativer Typen in Bytes unter Beibehaltung der lexikografischen Reihenfolge.
- [binpacker](https://github.com/zhuangsirui/binpacker) - Binärer Packer und Entpacker, der beim Aufbau benutzerdefinierter Binärströme hilft.
- [bit](https://github.com/yourbasic/bit) - Set-Datenstruktur für Golang mit zusätzlichen Bit-Twiddling-Funktionen.
- [crunch](https://github.com/superwhiskers/crunch) - Go-Paket mit Puffern, um verschiedene Datentypen einfach zu handhaben.
- [go-ef](https://github.com/amallia/go-ef) - Eine Go-Implementierung der Elias-Fano-Kodierung.
- [roaring](https://github.com/RoaringBitmap/roaring) - Go-Paket, das komprimierte Bitsets implementiert.

### Bitsets

- [bitmap](https://github.com/kelindar/bitmap) - Dichte, allokationsfreie Bitmap/Bitset mit SIMD-Unterstützung in Go.
- [bitset](https://github.com/bits-and-blooms/bitset) - Go-Paket, das Bitsets implementiert.

### Bloom- und Cuckoo-Filter

- [bloom](https://github.com/bits-and-blooms/bloom) - Go-Paket, das Bloom-Filter implementiert.
- [bloom](https://github.com/zhenjl/bloom) - In Go implementierte Bloom-Filter.
- [bloom](https://github.com/yourbasic/bloom) - Implementierung eines Bloom-Filters in Golang.
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Noch eine weitere Bloomfilter-Implementierung in Go, kompatibel mit der Guava-Bibliothek von Java.
- [boomfilters](https://github.com/tylertreat/BoomFilters) - Probabilistische Datenstrukturen zur Verarbeitung kontinuierlicher, unbegrenzter Datenströme.
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - Cuckoo-Filter: ein umfassender Cuckoo-Filter, der konfigurierbar und im Vergleich zu anderen Implementierungen platzoptimiert ist; alle im Originalpaper genannten Funktionen sind verfügbar.
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - Cuckoo-Filter: eine gute Alternative zu einem zählenden Bloom-Filter, implementiert in Go.
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - Erste Implementierung von Ribbon-Filtern in reinem Go (in der Praxis kleiner als Bloom und Xor) für platzsparende, approximative Abfragen der Mengenzugehörigkeit.
- [ring](https://github.com/TheTannerRyan/ring) - Go-Implementierung eines hochperformanten, threadsicheren Bloom-Filters.

### Sammlungen von Datenstrukturen und Algorithmen

- [algorithms](https://github.com/shady831213/algorithms) - Algorithmen und Datenstrukturen. Studie zu CLRS.
- [go-datastructures](https://github.com/Workiva/go-datastructures) - Sammlung nützlicher, performanter und threadsicherer Datenstrukturen.
- [gods](https://github.com/emirpasic/gods) - Go-Datenstrukturen. Container, Sets, Listen, Stacks, Maps, BidiMaps, Bäume, HashSet usw.
- [gostl](https://github.com/liyue201/gostl) - Bibliothek für Datenstrukturen und Algorithmen für Go, die Funktionen ähnlich der C++ STL bereitstellen soll.

### Iteratoren

- [glinq](https://github.com/CreateLab/glinq) - LINQ-ähnliche Bibliothek für Lazy Evaluation mit typsicheren Generics, Performance-Optimierungen und ohne Abhängigkeiten.
- [gloop](https://github.com/alvii147/gloop) - Komfortable Schleifen mithilfe der range-over-func-Funktion von Go.
- [goterator](https://github.com/yaa110/goterator) - Iterator-Implementierung, die Map- und Reduce-Funktionalität bereitstellt.
- [iter](https://github.com/disksing/iter) - Go-Implementierung der Iteratoren und Algorithmen der C++ STL.

### Maps

Siehe auch [Datenbanken](#database) für komplexere Key-Value-Stores und [Bäume](#trees) für
weitere Implementierungen geordneter Maps.

- [cmap](https://github.com/lrita/cmap) - Eine threadsichere, nebenläufige Map für Go, unterstützt `interface{}` als Schlüssel und skaliert Shards automatisch.
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Eine hochperformante, threadsichere, generische nebenläufige Hash-Map-Implementierung mit Swiss Map.
- [dict](https://github.com/srfrog/dict) - Python-ähnliche Dictionaries (dict) für Go.
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - Typsicherer generischer Wrapper für `sync.Map` mit vollständiger Methodenparität und ohne Abhängigkeiten.
- [go-shelve](https://github.com/lucmq/go-shelve) - Ein persistentes, Map-ähnliches Objekt für die Programmiersprache Go. Unterstützt mehrere eingebettete Key-Value-Stores.
- [goradd/maps](https://github.com/goradd/maps) - Generisches Map-Interface für Maps ab Go 1.18; sichere Maps; geordnete Maps; geordnete, sichere Maps usw.
- [hmap](https://github.com/lyonnee/hmap) - HMap ist eine nebenläufige und sichere Map-Implementierung mit Generics-Unterstützung, die eine einfach zu verwendende API bieten soll.

### Verschiedene Datenstrukturen und Algorithmen

- [combo](https://github.com/bobg/combo) - Kombinatorische Operationen wie Permutationen, Kombinationen und Kombinationen mit Wiederholung.
- [concurrent-writer](https://github.com/free/concurrent-writer) - Hochgradig nebenläufiger, direkter Ersatz für `bufio.Writer`.
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Go-Implementierung des Count-Min-Log-Sketch: approximatives Zählen mit approximativen Zählern (wie Count-Min-Sketch, aber mit weniger Speicherverbrauch).
- [FSM](https://github.com/enetx/fsm) - FSM für Go.
- [fsm](https://github.com/cocoonspace/fsm) - Paket für endliche Zustandsautomaten.
- [genfuncs](https://github.com/nwillc/genfuncs) - Generics-Paket für Go 1.18+, inspiriert von Sequence und Map aus Kotlin.
- [go-generics](https://github.com/bobg/go-generics) - Generische Hilfsfunktionen für Slices, Maps, Sets, Iteratoren und Goroutinen.
- [go-geoindex](https://github.com/hailocab/go-geoindex) - In-Memory-Geo-Index.
- [go-rampart](https://github.com/francesconi/go-rampart) - Bestimmt, wie sich Intervalle zueinander verhalten.
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - Region-Quadtrees mit effizienter Punktlokalisierung und Nachbarsuche.
- [go-tuple](https://github.com/barweiss/go-tuple) - Generische Tupel-Implementierung für Go 1.18+.
- [go18ds](https://github.com/daichi-m/go18ds) - Go-Datenstrukturen mit Generics aus Go 1.18.
- [gofal](https://github.com/xxjwxc/gofal) - API für Bruchrechnung in Go.
- [gogu](https://github.com/esimov/gogu) - Eine umfassende, wiederverwendbare und effiziente Bibliothek nebenläufigkeitssicherer generischer Hilfsfunktionen und Datenstrukturen.
- [gota](https://github.com/kniren/gota) - Implementierung von DataFrames, Series und Methoden zur Datenaufbereitung für Go.
- [hide](https://github.com/emvi/hide) - ID-Typ mit Marshalling in/aus Hashes, um zu verhindern, dass IDs an Clients gesendet werden.
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - HyperLogLog-Implementierung mit Sparse-Darstellung, LogLog-Beta-Bias-Korrektur und TailCut-Platzreduktion.
- [quadtree](https://github.com/s0rg/quadtree) - Generischer, allokationsfreier Quadtree mit 100 % Testabdeckung.
- [slices](https://github.com/twharmon/slices) - Reine, generische Funktionen für Slices.
- [xsync](https://github.com/puzpuzpuz/xsync) - Nebenläufige, skalierbare Datenstrukturen wie `xsync.Map`, eine nebenläufige generische Hashtabelle.

### Nullable-Typen

- [nan](https://github.com/kak-tus/nan) - Allokationsfreie Nullable-Strukturen in einer Bibliothek mit praktischen Konvertierungsfunktionen, Marshallern und Unmarshallern.
- [null](https://github.com/emvi/null) - Nullable-Go-Typen, die nach/aus JSON gemarshalt bzw. ungemarshalt werden können.
- [typ](https://github.com/gurukami/typ) - Null-Typen, sichere Konvertierung primitiver Typen und Abrufen von Werten aus komplexen Strukturen.

### Warteschlangen

- [deheap](https://github.com/aalpar/deheap) - Doppelseitiger Heap (Min-Max-Heap) mit O(log n)-Zugriff auf das minimale und das maximale Element.
- [deque](https://github.com/edwingeng/deque) - Eine hochoptimierte doppelseitige Warteschlange.
- [deque](https://github.com/gammazero/deque) - Schnelle Deque auf Ringpuffer-Basis (doppelseitige Warteschlange).
- [dqueue](https://github.com/vodolaz095/dqueue) - Einfache, speicherinterne, threadsichere und praxiserprobte verzögerte Warteschlange ohne Abhängigkeiten.
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - Nebenläufige FIFO-Warteschlange.
- [hatchet](https://github.com/hatchet-dev/hatchet) - Verteilte, fehlertolerante Task-Queue.
- [list](https://github.com/koss-null/list) - Eine generische, threadsichere doppelt verkettete Liste mit vollständiger Iterator-Unterstützung sowie eine intrusive einfach verkettete Liste für den eingebetteten Einsatz; ein funktionsreicher Ersatz für container/list.
- [memlog](https://github.com/embano1/memlog) - Eine einfach zu verwendende, leichtgewichtige, threadsichere In-Memory-Datenstruktur, die nur Anhängen erlaubt, inspiriert von Apache Kafka.
- [queue](https://github.com/adrianbrad/queue) - Mehrere threadsichere, generische Warteschlangen-Implementierungen für Go.

### Mengen

- [dsu](https://github.com/ihebu/dsu) - Implementierung der Disjoint-Set-Datenstruktur in Go.
- [golang-set](https://github.com/deckarep/golang-set) - Threadsichere und nicht threadsichere, hochperformante Sets für Go.
- [goset](https://github.com/zoumo/goset) - Eine nützliche Set-Collection-Implementierung für Go.
- [set](https://github.com/StudioSol/set) - Einfache Implementierung einer Set-Datenstruktur in Go mit LinkedHashMap.

### Textanalyse

- [bleve](https://github.com/blevesearch/bleve) - Moderne Bibliothek zur Textindizierung für Go.
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Go-Implementierung des Adaptive Radix Tree.
- [go-edlib](https://github.com/hbollon/go-edlib) - Go-Bibliothek für Zeichenkettenvergleiche und Editierdistanz-Algorithmen (Levenshtein, LCS, Hamming, Damerau-Levenshtein, Jaro-Winkler usw.), Unicode-kompatibel.
- [levenshtein](https://github.com/agext/levenshtein) - Levenshtein-Distanz und Ähnlichkeitsmetriken mit anpassbaren Editierkosten und einem Winkler-ähnlichen Bonus für gemeinsame Präfixe.
- [levenshtein](https://github.com/agnivade/levenshtein) - Implementierung zur Berechnung der Levenshtein-Distanz in Go.
- [mspm](https://github.com/BlackRabbitt/mspm) - Algorithmus für Multi-String-Musterabgleich zur Informationsgewinnung.
- [parsefields](https://github.com/MonaxGT/parsefields) - Werkzeuge zum Parsen JSON-ähnlicher Logs, um eindeutige Felder und Ereignisse zu sammeln.
- [ptrie](https://github.com/viant/ptrie) - Eine Implementierung eines Präfixbaums.
- [radixtree](https://github.com/gammazero/radixtree) - Adaptiver Radix-Baum (Präfixbaum oder kompakter Trie).
- [trie](https://github.com/derekparker/trie) - Trie-Implementierung in Go.

### Bäume

- [graphlib](https://github.com/aio-arch/graphlib) - Bibliothek für topologische Sortierung, Sortieren und Beschneiden von DAG-Graphen.
- [hashsplit](http://github.com/bobg/hashsplit) - Teilt Bytestreams in Chunks auf und ordnet diese in Bäumen an, wobei die Grenzen durch den Inhalt und nicht durch die Position bestimmt werden.
- [merkle](https://github.com/bobg/merkle) - Platzsparende Berechnung von Merkle-Root-Hashes und Inklusionsbeweisen.
- [skiplist](https://github.com/MauriceGit/skiplist) - Sehr schnelle Skiplist-Implementierung in Go.
- [skiplist](https://github.com/gansidui/skiplist) - Skiplist-Implementierung in Go.
- [skiplist](https://github.com/huandu/skiplist) - Schnelle und einfach zu verwendende Skip-Liste für Go.
- [treemap](https://github.com/igrmk/treemap) - Generische, nach Schlüsseln sortierte Map, die intern einen Rot-Schwarz-Baum verwendet.

### Pipes

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - Go-Modul, das Arbeit nebenläufig verarbeitet und die Ausgabe in einem Channel in der Reihenfolge der Eingabe zurückgibt.
- [parapipe](https://github.com/nazar256/parapipe) - FIFO-Pipeline, die die Ausführung in jeder Stufe parallelisiert und dabei die Reihenfolge von Nachrichten und Ergebnissen beibehält.
- [pipeline](https://github.com/hyfather/pipeline) - Eine Implementierung von Pipelines mit Fan-in und Fan-out.
- [pipelines](https://github.com/nxdir-s/pipelines) - Generische Pipeline-Funktionen für nebenläufige Verarbeitung.

**[⬆ Zurück nach oben](#contents)**

## Datenbanken

### Caches

_Datenspeicher mit ablaufenden Einträgen, verteilte In-Memory-Datenspeicher oder In-Memory-Teilmengen dateibasierter Datenbanken._

- [bcache](https://github.com/iwanbk/bcache) - Go-Bibliothek für einen letztendlich konsistenten, verteilten In-Memory-Cache.
- [BigCache](https://github.com/allegro/bigcache) - Effizienter Key/Value-Cache für Gigabytes an Daten.
- [cache2go](https://github.com/muesli/cache2go) - In-Memory-Key:Value-Cache mit automatischer Invalidierung auf Basis von Timeouts.
- [cachego](https://github.com/faabiosr/cachego) - Golang-Cache-Komponente für mehrere Treiber.
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - BigCache mit Cluster-Unterstützung und individuellem Ablauf einzelner Einträge.
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - Vollständige Implementierung der Cache-API von Oracle Coherence für Go-Anwendungen mit gRPC als Netzwerktransport.
- [couchcache](https://github.com/codingsince1985/couchcache) - RESTful-Caching-Microservice auf Basis von Couchbase Server.
- [easycache](https://github.com/hugocarreira/easycache) - Eine einfache Möglichkeit, einen In-Memory-Cache in Golang zu nutzen (TTL/FIFO/LRU/LFU).
- [EchoVault](https://github.com/EchoVault/EchoVault) - Einbettbarer, verteilter In-Memory-Datenspeicher, kompatibel mit Redis-Clients.
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - Schneller, threadsicherer In-Memory-Cache für eine große Anzahl von Einträgen. Minimiert den GC-Overhead.
- [GCache](https://github.com/bluele/gcache) - Cache-Bibliothek mit Unterstützung für ablaufende Caches, LFU, LRU und ARC.
- [gdcache](https://github.com/ulovecode/gdcache) - Eine reine, nicht invasive Cache-Bibliothek in Golang, mit der Sie Ihren eigenen verteilten Cache implementieren können.
- [go-cache](https://github.com/viney-shih/go-cache) - Eine flexible mehrschichtige Go-Caching-Bibliothek für In-Memory- und gemeinsam genutzte Caches nach dem Cache-Aside-Muster.
- [go-freelru](https://github.com/elastic/go-freelru) Eine GC-freie, schnelle und generische LRU-Hashmap-Bibliothek mit optionalem Locking, Sharding, Verdrängung und Ablauf.
- [go-gcache](https://github.com/szyhf/go-gcache) - Die generische Version von `GCache`, Cache-Unterstützung für ablaufende Caches, LFU, LRU und ARC.
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - Schnelle In-Memory-Key:Value-Store/Cache-Bibliothek. Pointer-Caches.
- [gocache](https://github.com/eko/gocache) - Eine vollständige Go-Cache-Bibliothek mit mehreren Speichern (Memory, Memcache, Redis, …), verkettbar, ladbar, Metrik-Cache und mehr.
- [gocache](https://github.com/yuseferi/gocache) - Eine Go-Cache-Bibliothek ohne Data Races, mit hoher Performance und automatischer Bereinigung
- [groupcache](https://github.com/golang/groupcache) - Groupcache ist eine Bibliothek zum Caching und Befüllen von Caches, die in vielen Fällen als Ersatz für memcached gedacht ist.
- [icache](https://github.com/mdaliyan/icache) - Ein hochperformantes, generisches, threadsicheres Cache-Paket ohne Abhängigkeiten.
- [imcache](https://github.com/erni27/imcache) - Eine generische In-Memory-Cache-Bibliothek für Go. Sie unterstützt Ablauf, gleitenden Ablauf, eine maximale Anzahl von Einträgen, Eviction-Callbacks und Sharding.
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - Einheitliche Go-Cache-Bibliothek mit Unterstützung für mehrstufiges Caching.
- [nscache](https://github.com/no-src/nscache) - Ein Go-Caching-Framework, das mehrere Treiber für Datenquellen unterstützt.
- [otter](https://github.com/maypok86/otter) - Ein hochperformanter, lockfreier Cache für Go. Um ein Vielfaches schneller als Ristretto und Co.
- [pocache](https://github.com/naughtygopher/pocache) - Pocache ist ein minimales Cache-Paket mit Fokus auf eine präemptive, optimistische Caching-Strategie.
- [ristretto](https://github.com/dgraph-io/ristretto) - Ein hochperformanter, speicherbegrenzter Go-Cache.
- [sturdyc](https://github.com/viccon/sturdyc) - Eine Caching-Bibliothek mit fortgeschrittenen Nebenläufigkeitsfunktionen, die I/O-lastige Anwendungen robust und hochperformant machen soll.
- [theine](https://github.com/Yiling-J/theine-go) - Hochperformanter, nahezu optimaler In-Memory-Cache mit proaktivem TTL-Ablauf und Generics.
- [timedmap](https://github.com/zekroTJA/timedmap) - Map mit ablaufenden Schlüssel-Wert-Paaren.
- [ttlcache](https://github.com/jellydator/ttlcache) - Ein In-Memory-Cache mit Ablauf von Einträgen und Generics.
- [ttlcache](https://github.com/cheshir/ttlcache) - In-Memory-Key-Value-Speicher mit TTL für jeden Eintrag.

### In Go implementierte Datenbanken

- [badger](https://github.com/dgraph-io/badger) - Schneller Key-Value-Store in Go.
- [bbolt](https://github.com/etcd-io/bbolt) - Eine eingebettete Key/Value-Datenbank für Go.
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask ist eine einbettbare, persistente und schnelle Key-Value-Datenbank (KV), geschrieben in reinem Go, mit vorhersagbarer Lese-/Schreibleistung, niedriger Latenz und hohem Durchsatz dank des Bitcask-On-Disk-Layouts (LSM+WAL).
- [buntdb](https://github.com/tidwall/buntdb) - Schnelle, einbettbare In-Memory-Key/Value-Datenbank für Go mit benutzerdefinierter Indizierung und räumlicher Unterstützung.
- [clover](https://github.com/ostafen/clover) - Eine leichtgewichtige dokumentorientierte NoSQL-Datenbank, geschrieben in reinem Golang.
- [cockroach](https://github.com/cockroachdb/cockroach) - Skalierbarer, georeplizierter, transaktionaler Datenspeicher.
- [Coffer](https://github.com/claygod/coffer) - Einfache ACID-Key-Value-Datenbank mit Unterstützung für Transaktionen.
- [column](https://github.com/kelindar/column) - Hochperformanter, spaltenorientierter, einbettbarer In-Memory-Speicher mit Bitmap-Indizierung und Transaktionen.
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL ist eine SQL-Datenbank auf der Blockchain.
- [Databunker](https://github.com/paranoidguy/databunker) - Speicherdienst für personenbezogene Daten (PII), entwickelt zur Einhaltung von DSGVO (GDPR) und CCPA.
- [dgraph](https://github.com/dgraph-io/dgraph) - Skalierbare, verteilte Graphdatenbank mit niedriger Latenz und hohem Durchsatz.
- [DiceDB](https://github.com/DiceDB/dice) - Eine schnelle, reaktive Open-Source-In-Memory-Datenbank, optimiert für moderne Hardware. Höherer Durchsatz und niedrigere Median-Latenzen machen sie ideal für moderne Workloads.
- [diskv](https://github.com/peterbourgon/diskv) - Selbstgebauter, festplattenbasierter Key-Value-Store.
- [dolt](https://github.com/dolthub/dolt) - Dolt – Git für Daten.
- [eliasdb](https://github.com/krotik/eliasdb) - Abhängigkeitsfreie, transaktionale Graphdatenbank mit REST-API, Phrasensuche und SQL-ähnlicher Abfragesprache.
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - MongoDB-ähnliche eingebettete Datenbank, geschrieben in reinem Go. Unterstützt Indizierung und komplexe Abfragen.
- [go-sqlite](https://github.com/glebarez/go-sqlite) – Ein in reinem Golang implementierter SQLite-Treiber ohne CGO.
- [godis](https://github.com/hdt3213/godis) - Ein in Golang implementierter, hochperformanter Redis-Server und -Cluster.
- [goleveldb](https://github.com/syndtr/goleveldb) - Implementierung der Key/Value-Datenbank [LevelDB](https://github.com/google/leveldb) in Go.
- [hare](https://github.com/jameycribbs/hare) - Ein einfaches Datenbankverwaltungssystem, das jede Tabelle als Textdatei mit zeilengetrenntem JSON speichert.
- [immudb](https://github.com/codenotary/immudb) - immudb ist eine leichtgewichtige, schnelle, unveränderliche Datenbank für Systeme und Anwendungen, geschrieben in Go.
- [influxdb](https://github.com/influxdb/influxdb) - Skalierbarer Datenspeicher für Metriken, Ereignisse und Echtzeitanalysen.
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb ist eine hochperformante NoSQL-Datenbank wie Redis, basierend auf LevelDB.
- [levigo](https://github.com/jmhodges/levigo) - Levigo ist ein Go-Wrapper für LevelDB.
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB ist eine einfache Datenbank mit weniger als 1000 Codezeilen zum Lernen.
- [LinDB](https://github.com/lindb/lindb) - LinDB ist eine skalierbare, hochperformante, hochverfügbare verteilte Zeitreihendatenbank.
- [lotusdb](https://github.com/flower-corp/lotusdb) - Schnelle K/V-Datenbank, kompatibel mit LSM und B+-Baum.
- [lynxdb](https://github.com/lynxbase/lynxdb) - Leichtgewichtige spaltenorientierte Datenbank für Log-Analysen mit einer Pipe-artigen Abfragesprache, inspiriert von SPL.
- [MemHop](https://github.com/qyiun666/MemHop) - Eingebettete kognitive Speicherdatenbank für KI-Agenten. Sechsschichtige Architektur (L0–L5), Dream-Konsolidierungspipeline, dreikanaliges RRF-Retrieval (BM25 + f16-Vektor + Entität), eine einzige .meh-Datei, reines Go, keine Infrastruktur.
- [Milvus](https://github.com/milvus-io/milvus) - Milvus ist eine Vektordatenbank für die Verwaltung, Analyse und Suche von Embeddings.
- [minisql](https://github.com/RichardKnop/minisql) - Eingebettete SQL-Datenbank in einer einzigen Datei.
- [moss](https://github.com/couchbase/moss) - Moss ist eine einfache LSM-Key-Value-Speicher-Engine, zu 100 % in Go geschrieben.
- [nanotdb](https://github.com/aymanhs/nanotdb) - Eine leichtgewichtige Zeitreihendatenbank mit Dashboard, ohne Abhängigkeiten und nur mit Anhängen, optimiert für stromsparende Hardware.
- [NoKV](https://github.com/feichai0017/NoKV) - Nativer Metadatendienst für verteilte Dateisysteme, Objektspeicher und KI-Datensatz-Workloads.
- [NornicDB](https://github.com/orneryd/NornicDB) - Hochperformante Graph- und Vektordatenbank (kompatibel mit Neo4j und qDrant), fokussiert auf Graph-RAG-Abfragen mit niedriger Latenz für KI-Systeme.
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb ist ein einfacher, schneller, einbettbarer, persistenter Key/Value-Store, geschrieben in reinem Go. Er unterstützt vollständig serialisierbare Transaktionen und viele Datenstrukturen wie List, Set und Sorted Set.
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Hochperformante eingebettete Objektdatenbank (NoSQL) mit Go-API.
- [pebble](https://github.com/cockroachdb/pebble) - Von RocksDB/LevelDB inspirierte Key-Value-Datenbank in Go.
- [piladb](https://github.com/fern4lvarez/piladb) - Leichtgewichtige RESTful-Datenbank-Engine auf Basis von Stack-Datenstrukturen.
- [pogreb](https://github.com/akrylysov/pogreb) - Eingebetteter Key-Value-Store für leseintensive Workloads.
- [prometheus](https://github.com/prometheus/prometheus) - Überwachungssystem und Zeitreihendatenbank.
- [pudge](https://github.com/recoilme/pudge) - Schneller und einfacher Key/Value-Store, geschrieben mit der Standardbibliothek von Go.
- [redka](https://github.com/nalgeon/redka) - Redis, neu implementiert mit SQLite.
- [rosedb](https://github.com/roseduan/rosedb) - Eine eingebettete K-V-Datenbank auf Basis von LSM+WAL, unterstützt String, List, Hash, Set und zset.
- [rotom](https://github.com/xgzlucario/rotom) - Ein winziger Redis-Server, entwickelt mit Golang, kompatibel mit den RESP-Protokollen.
- [rqlite](https://github.com/rqlite/rqlite) - Die leichtgewichtige, verteilte relationale Datenbank auf Basis von SQLite.
- [tempdb](https://github.com/rafaeljesus/tempdb) - Key-Value-Store für temporäre Einträge.
- [tidb](https://github.com/pingcap/tidb) - TiDB ist eine verteilte SQL-Datenbank. Inspiriert vom Design von Google F1.
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Ihre NoSQL-Datenbank, angetrieben von Golang.
- [unitdb](https://github.com/unit-io/unitdb) - Schnelle Zeitreihendatenbank für IoT und Echtzeit-Messaging-Anwendungen. Zugriff auf unitdb per Pub/Sub über TCP oder WebSocket mithilfe der Anwendung github.com/unit-io/unitd.
- [Vasto](https://github.com/chrislusf/vasto) - Ein verteilter, hochperformanter Key-Value-Store. Auf der Festplatte. Letztendlich konsistent. Hochverfügbar (HA). Kann ohne Dienstunterbrechung wachsen oder schrumpfen.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - Schnelle, ressourceneffiziente und skalierbare Open-Source-Zeitreihendatenbank. Kann als Langzeit-Remote-Speicher für Prometheus verwendet werden. Unterstützt PromQL.
- 
### Migration von Datenbankschemas

- [atlas](https://github.com/ariga/atlas) - Ein Datenbank-Toolkit. Eine CLI, die Unternehmen helfen soll, besser mit ihren Daten zu arbeiten.
- [avro](https://github.com/khezen/avro) - SQL-Schemas erkennen und in AVRO-Schemas konvertieren. SQL-Datensätze als AVRO-Bytes abfragen.
- [bytebase](https://github.com/bytebase/bytebase) - Sichere Änderungen an Datenbankschemas und Versionskontrolle für DevOps-Teams.
- [darwin](https://github.com/GuiaBolso/darwin) - Bibliothek zur Evolution von Datenbankschemas für Go.
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - CLI für versionierte Datenbankschema-Migrationen mit Unterstützung für PostgreSQL, MySQL, ClickHouse, Tarantool und Apache Iceberg.
- [dbmate](https://github.com/amacneil/dbmate) - Ein leichtgewichtiges, Framework-unabhängiges Werkzeug für Datenbankmigrationen.
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Fixtures im Django-Stil für die hervorragende integrierte database/sql-Bibliothek von Golang.
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - CLI-freundliches Paket zur Verwaltung von go-pg-Migrationen.
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - Ein Go-Paket, das beim Schreiben von Migrationen mit go-pg/pg hilft.
- [goavro](https://github.com/linkedin/goavro) - Ein Go-Paket, das Avro-Daten kodiert und dekodiert.
- [godfish](https://github.com/rafaelespinoza/godfish) - Manager für Datenbankmigrationen, arbeitet mit der nativen Abfragesprache. Unterstützt cassandra, mysql, postgres und sqlite3.
- [goose](https://github.com/pressly/goose) - Werkzeug für Datenbankmigrationen. Sie können die Entwicklung Ihrer Datenbank verwalten, indem Sie inkrementelle SQL- oder Go-Skripte erstellen.
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Einfacher Datenbank-Seeder für das Gorm-ORM.
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Hilfsmittel für die Migration von Datenbankschemas für das Gorm-ORM.
- [libschema](https://github.com/muir/libschema) - Definieren Sie Ihre Migrationen separat in jeder Bibliothek. Migrationen für Open-Source-Bibliotheken. MySQL und PostgreSQL.
- [migrate](https://github.com/golang-migrate/migrate) - Datenbankmigrationen. CLI und Golang-Bibliothek.
- [migrator](https://github.com/lopezator/migrator) - Kinderleichte Go-Bibliothek für Datenbankmigrationen.
- [migrator](https://github.com/larapulse/migrator) - MySQL-Datenbankmigrator, der Migrationen für Ihre Features ausführt und Aktualisierungen des Datenbankschemas mit intuitivem Go-Code verwaltet.
- [schema](https://github.com/adlio/schema) - Bibliothek zum Einbetten von Schemamigrationen für database/sql-kompatible Datenbanken in Ihre Go-Binärdateien.
- [skeema](https://github.com/skeema/skeema) - Reines SQL-System zur Schemaverwaltung für MySQL, mit Unterstützung für Sharding und externe Werkzeuge für Online-Schemaänderungen.
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - Datenbankmigration, -erstellung, ORM usw. für MySQL, PostgreSQL und SQLite.
- [sql-migrate](https://github.com/rubenv/sql-migrate) - Werkzeug für Datenbankmigrationen. Ermöglicht das Einbetten von Migrationen in die Anwendung mithilfe von go-bindata.
- [sqlize](https://github.com/sunary/sqlize) - Generator für Datenbankmigrationen. Erzeugt SQL-Migrationen aus Modellen und vorhandenem SQL, indem er die Unterschiede ermittelt.

### Datenbankwerkzeuge

- [chproxy](https://github.com/Vertamedia/chproxy) - HTTP-Proxy für die ClickHouse-Datenbank.
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - Sammelt kleine Inserts und sendet große Anfragen an ClickHouse-Server.
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - Parser für SQL im ClickHouse-Dialekt, der einen typisierten AST erzeugt, mit Hilfsfunktionen zur Traversierung, Round-Trip-Formatierung und einer CLI.
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - SQL in der Produktion ausführen – mit ACLs, Logs und geteilten Links.
- [dbbench](https://github.com/sj14/dbbench) - Werkzeug für Datenbank-Benchmarks mit Unterstützung für mehrere Datenbanken und Skripte.
- [dg](https://github.com/codingconcepts/dg) - Ein schneller Datengenerator, der CSV-Dateien aus generierten relationalen Daten erzeugt.
- [filesql](https://github.com/nao1215/filesql) - CSV-, TSV-, LTSV-, JSON-, JSONL-, Parquet-, Excel-, ACH- und Fedwire-Dateien mit SQL über die database/sql-API abfragen, gestützt auf In-Memory-SQLite.
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - Cloud-natives Datenbank-Gateway und Framework zum Erstellen datengetriebener Anwendungen. Wie API-Gateways, nur für Datenbanken.
- [go-mysql](https://github.com/siddontang/go-mysql) - Go-Toolset für das MySQL-Protokoll und die Replikation.
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - Serverlose PostgreSQL-Backups nach S3 mit AWS Lambda, mit täglicher, monatlicher und jährlicher Rotation.
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - Mandantenfähigkeit für mit GORM verwaltete Datenbanken.
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - Hochperformanter SQL-Parser, -Formatierer, -Linter und Sicherheitsscanner mit Unterstützung mehrerer Dialekte und WASM-Playground.
- [hasql](https://golang.yandex/hasql) - Bibliothek für den Zugriff auf SQL-Datenbankinstallationen mit mehreren Hosts.
- [octillery](https://github.com/knocknote/octillery) - Go-Paket zum Sharding von Datenbanken (unterstützt jedes ORM oder reines SQL).
- [onedump](https://github.com/liweiyi88/onedump) - Datenbank-Backups von verschiedenen Treibern an verschiedene Ziele mit einem einzigen Befehl und einer Konfiguration.
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Erweiterte Zeitplanung für PostgreSQL.
- [pgrwl](https://github.com/pgrwl/pgrwl) - Cloud-natives kontinuierliches Backup für PostgreSQL.
- [pgwd](https://github.com/hrodrig/pgwd) - CLI, die die Verbindungszahlen von PostgreSQL überwacht (gesamt, aktiv, inaktiv, veraltet) und bei Überschreiten von Schwellenwerten über Slack und/oder Loki benachrichtigt. Unterstützt Kubernetes (kubectl port-forward) und optionalen Ausführungskontext in Benachrichtigungen.
- [pgweb](https://github.com/sosedoff/pgweb) - Webbasierter Browser für PostgreSQL-Datenbanken.
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - PostgreSQL-CLI-Client, geschrieben in Go, inspiriert von pgcli.
- [prep](https://github.com/hexdigest/prep) - Prepared SQL Statements verwenden, ohne den Code zu ändern.
- [pREST](https://github.com/prest/prest) - Vereinfacht und beschleunigt die Entwicklung, ⚡ sofort, in Echtzeit und hochperformant für jede Postgres-Anwendung, ob bestehend oder neu.
- [rdb](https://github.com/HDT3213/rdb) - Parser für Redis-RDB-Dateien zur Weiterentwicklung und Speicheranalyse.
- [rwdb](https://github.com/andizzle/rwdb) - rwdb bietet Lesereplikat-Funktionalität für Setups mit mehreren Datenbankservern.
- [sqly](https://github.com/nao1215/sqly) - SQL auf CSV-, TSV-, LTSV-, JSON-, Parquet- und Excel-Dateien in einer interaktiven Shell ausführen, gestützt auf In-Memory-SQLite.
- [vitess](https://github.com/youtube/vitess) - vitess stellt Server und Werkzeuge bereit, die die Skalierung von MySQL-Datenbanken für große Webdienste erleichtern.
- [wescale](https://github.com/wesql/wescale) - WeScale ist ein Datenbank-Proxy, der die Skalierbarkeit, Performance, Sicherheit und Ausfallsicherheit Ihrer Anwendungen verbessern soll.
- [xsql](https://github.com/zx06/xsql) - KI-orientiertes, datenbankübergreifendes CLI-Werkzeug mit Schreibschutz und strukturierter JSON-Ausgabe.

### SQL-Query-Builder

_Bibliotheken zum Erstellen und Verwenden von SQL._

- [bqb](https://github.com/nullism/bqb) - Leichtgewichtiger und leicht erlernbarer Query-Builder.
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - Go-Bibliothek zum Erstellen von Datenbankabfragen für PostgreSQL.
- [builq](https://github.com/cristalhq/builq) - SQL-Abfragen in Go einfach erstellen.
- [dba](https://github.com/kran/dba) - SQL-Query-Builder für handgeschriebenes SQL, der dynamische Bedingungen, dialektbewusste Platzhalter und unveränderliche Verkettung hinzufügt.
- [dbq](https://github.com/rocketlaunchr/dbq) - Datenbankoperationen ohne Boilerplate für Go.
- [Dotsql](https://github.com/gchaincl/dotsql) - Go-Bibliothek, mit der Sie SQL-Dateien an einem Ort aufbewahren und mühelos verwenden können.
- [gendry](https://github.com/didi/gendry) - Nicht invasiver SQL-Builder und leistungsstarker Daten-Binder.
- [godbal](https://github.com/xujiajun/godbal) - Datenbank-Abstraktionsschicht (dbal) für Go. Unterstützt SQL-Builder und einfaches Abrufen von Ergebnissen.
- [goqu](https://github.com/doug-martin/goqu) - Idiomatische Bibliothek zum Erstellen von SQL und für Abfragen.
- [gosql](https://github.com/twharmon/gosql) - SQL-Query-Builder mit besserer Unterstützung für Null-Werte.
- [Hotcoal](https://github.com/motrboat/hotcoal) - Schützen Sie Ihr handgeschriebenes SQL vor Injection.
- [igor](https://github.com/galeone/igor) - Abstraktionsschicht für PostgreSQL, die erweiterte Funktionen unterstützt und eine gorm-ähnliche Syntax verwendet.
- [jet](https://github.com/go-jet/jet) - Framework zum Schreiben typsicherer SQL-Abfragen in Go, mit der Möglichkeit, Ergebnisse von Datenbankabfragen einfach in beliebige gewünschte Objektstrukturen zu konvertieren.
- [obreron](https://github.com/profe-ajedrez/obreron) - Schneller und schlanker SQL-Builder, der nur eines tut: SQL erstellen.
- [ormlite](https://github.com/pupizoid/ormlite) - Leichtgewichtiges Paket mit einigen ORM-ähnlichen Funktionen und Hilfsfunktionen für SQLite-Datenbanken.
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - Leistungsstarke Methoden zum Abrufen von Daten sowie DB-unabhängige Funktionen zum Erstellen von Abfragen.
- [patcher](https://github.com/Jacobbrewer1/patcher) - Leistungsstarker SQL-Query-Builder, der automatisch SQL-Abfragen aus Structs erzeugt.
- [qrafter](https://github.com/SennovE/qrafter) - Typsicherer SQL-Query-Builder mit dialektbewusstem Rendering, Schema-Introspektion und Generierung von Migrationen.
- [qry](https://github.com/HnH/qry) - Werkzeug, das Konstanten aus Dateien mit rohen SQL-Abfragen erzeugt.
- [relica](https://github.com/coregx/relica) - Typsicherer Datenbank-Query-Builder ohne Produktionsabhängigkeiten, mit LRU-Statement-Cache, Batch-Operationen und Unterstützung für JOINs, Unterabfragen, CTEs und Fensterfunktionen.
- [sg](https://github.com/go-the-way/sg) - Ein SQL-Generator zum Erzeugen von Standard-SQLs (unterstützt: CRUD), geschrieben in Go.
- [sq](https://github.com/bokwoon95/go-structured-query) - Typsicherer SQL-Builder und Struct-Mapper für Go.
- [sqlc](https://github.com/kyleconroy/sqlc) - Typsicheren Code aus SQL generieren.
- [sqlcredo](https://github.com/Klojer/sqlcredo) - Paket für typsichere, generische SQL-CRUD-Operationen mit Paginierung, Transaktionen, Debugging und benutzerdefinierten Raw-SQL-Erweiterungen.
- [sqlf](https://github.com/leporo/sqlf) - Schneller SQL-Query-Builder.
- [sqlh](https://github.com/kirill-scherba/sqlh) - SQL-Hilfsbibliothek ohne Boilerplate mit Struct-Tags und Go-Generics (CRUD, UPSERT, JOIN, Benchmarks).
- [sqlingo](https://github.com/lqs/sqlingo) - Eine leichtgewichtige DSL zum Erstellen von SQL in Go.
- [sqrl](https://github.com/elgris/sqrl) - SQL-Query-Builder, ein Fork von Squirrel mit verbesserter Performance.
- [Squalus](https://gitlab.com/qosenergy/squalus) - Dünne Schicht über dem SQL-Paket von Go, die das Ausführen von Abfragen erleichtert.
- [Squirrel](https://github.com/Masterminds/squirrel) - Go-Bibliothek, die Ihnen beim Erstellen von SQL-Abfragen hilft.
- [xo](https://github.com/knq/xo) - Erzeugt idiomatischen Go-Code für Datenbanken auf Basis bestehender Schemadefinitionen oder benutzerdefinierter Abfragen und unterstützt PostgreSQL, MySQL, SQLite, Oracle und Microsoft SQL Server.

**[⬆ Zurück nach oben](#contents)**

## Datenbanktreiber

### Schnittstellen zu mehreren Backends

- [cayley](https://github.com/google/cayley) - Graphdatenbank mit Unterstützung für mehrere Backends.
- [dsc](https://github.com/viant/dsc) - Datastore-Konnektivität für SQL, NoSQL und strukturierte Dateien.
- [dynamo](https://github.com/fogfish/dynamo) - Eine einfache Key-Value-Abstraktion zum Speichern algebraischer und verknüpfter Datentypen in AWS-Speicherdiensten: AWS DynamoDB und AWS S3.
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - Transaktionsmanager mit mehreren Adaptern (sql, sqlx, gorm, mongo, …), der Transaktionsgrenzen steuert.
- [gokv](https://github.com/philippgille/gokv) - Einfache Key-Value-Store-Abstraktion und Implementierungen für Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB und viele mehr).
- [transactor](https://github.com/metalfm/transactor) - Typsichere Abstraktion von Transaktionsgrenzen mit Adaptern für database/sql, sqlx und pgx.

### Treiber für relationale Datenbanken

- [avatica](https://github.com/apache/calcite-avatica-go) - Apache-Avatica/Phoenix-SQL-Treiber für database/sql.
- [bgc](https://github.com/viant/bgc) - Datastore-Konnektivität für BigQuery für Go.
- [firebirdsql](https://github.com/nakagami/firebirdsql) - SQL-Treiber für das Firebird-RDBMS für Go.
- [go-adodb](https://github.com/mattn/go-adodb) - Treiber für Microsoft ActiveX Object DataBase für Go, der database/sql verwendet.
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Microsoft-MSSQL-Treiber für Go.
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Offizieller Go-Treiber von Microsoft für SQL Server, Azure SQL, Azure Synapse, SQL-Datenbank in Fabric und Fabric Data Warehouse. Unterstützt Azure AD, Always Encrypted und Massenoperationen.
- [go-oci8](https://github.com/mattn/go-oci8) - Oracle-Treiber für Go, der database/sql verwendet.
- [go-rqlite](https://github.com/rqlite/gorqlite) - Ein Go-Client für rqlite mit einfach zu verwendenden Abstraktionen für die Arbeit mit der rqlite-API.
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - MySQL-Treiber für Go.
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - SQLite3-Treiber für Go, der database/sql verwendet.
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - Dieses Go-Modul ist mit dem database/sql-Treiber kompatibel. Es ermöglicht das Einbetten von SQLite in Ihre Anwendung, bietet direkten Zugriff auf dessen C-API, unterstützt SQLite VFS und enthält außerdem einen GORM-Treiber.
- [godror](https://github.com/godror/godror) - Oracle-Treiber für Go, der den ODPI-C-Treiber verwendet.
- [gofreetds](https://github.com/minus5/gofreetds) - Microsoft-MSSQL-Treiber. Go-Wrapper über [FreeTDS](https://www.freetds.org).
- [KSQL](https://github.com/VinGarcia/ksql) - Eine einfache und leistungsstarke Golang-SQL-Bibliothek.
- [pgx](https://github.com/jackc/pgx) - PostgreSQL-Treiber, der Funktionen über die von database/sql bereitgestellten hinaus unterstützt.
- [pig](https://github.com/alexeyco/pig) - Einfacher [pgx](https://github.com/jackc/pgx)-Wrapper, um Abfragen auszuführen und Abfrageergebnisse einfach zu [scannen](https://github.com/georgysavva/scany).
- [pq](https://github.com/lib/pq) - Postgres-Treiber in reinem Go für database/sql.
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - SQLite mit reinem Go.
- [sqlhooks](https://github.com/qustavo/sqlhooks) - Hooks an jeden database/sql-Treiber anhängen.
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - Das Paket sqlite ist ein sql/database-Treiber, der eine CGo-freie Portierung der C-Bibliothek SQLite3 verwendet.
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - SurrealDB-Treiber für Go.
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - Nativer und database/sql-Treiber für YDB (Yandex Database).

### Treiber für NoSQL-Datenbanken

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Aerospike-Client in der Sprache Go.
- [arangolite](https://github.com/solher/arangolite) - Leichtgewichtiger Golang-Treiber für ArangoDB.
- [asc](https://github.com/viant/asc) - Datastore-Konnektivität für Aerospike für Go.
- [forestdb](https://github.com/couchbase/goforestdb) - Go-Bindings für ForestDB.
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Couchbase-Client in Go.
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - Eine Go-Mongo-Bibliothek auf Basis des offiziellen Treibers mit vereinfachten Dokumentoperationen, generischer Bindung von Structs an Collections, integriertem CRUD, Aggregation, automatischen Feldaktualisierungen, Struct-Validierung, Hooks und Plugin-basierter Programmierung.
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Go-Client-Bibliothek für Pilosa.
- [go-rejson](https://github.com/nitishm/go-rejson) - Golang-Client für das ReJSON-Modul von redislabs unter Verwendung des Golang-Clients Redigo. Structs einfach als JSON-Objekte in Redis speichern und bearbeiten.
- [gocb](https://github.com/couchbase/gocb) - Offizielles Couchbase-Go-SDK.
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - REST-Client und Standard-`database/sql`-Treiber für Azure Cosmos DB.
- [gocql](https://gocql.github.io) - Go-Treiber für Apache Cassandra.
- [godis](https://github.com/piaohao/godis) - Redis-Client, implementiert in Golang, inspiriert von jedis.
- [godscache](https://github.com/defcronyke/godscache) - Ein Wrapper für das Go-Datastore-Paket der Google Cloud Platform, der Caching mithilfe von memcached hinzufügt.
- [gomemcache](https://github.com/bradfitz/gomemcache/) - memcache-Client-Bibliothek für die Programmiersprache Go.
- [gomemcached](https://github.com/aliexpressru/gomemcached) - Ein binärer Memcached-Client für Go mit Unterstützung für Sharding über konsistentes Hashing sowie SASL.
- [gorethink](https://github.com/dancannon/gorethink) - Go-Treiber für RethinkDB.
- [goriak](https://github.com/zegl/goriak) - Go-Treiber für Riak KV.
- [Kivik](https://github.com/go-kivik/kivik) - Kivik bietet eine gemeinsame Go- und GopherJS-Client-Bibliothek für CouchDB, PouchDB und ähnliche Datenbanken.
- [mgm](https://github.com/kamva/mgm) - Modellbasiertes MongoDB-ODM für Go (basierend auf dem offiziellen MongoDB-Treiber).
- [mgo](https://github.com/globalsign/mgo) - (nicht mehr gepflegt) MongoDB-Treiber für die Sprache Go, der eine umfangreiche und gut getestete Auswahl an Funktionen unter einer sehr einfachen API implementiert, die den üblichen Go-Idiomen folgt.
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Offizieller MongoDB-Treiber für die Sprache Go.
- [neo4j](https://github.com/cihangir/neo4j) - Neo4j-REST-API-Bindings für Golang.
- [neoism](https://github.com/jmcvetta/neoism) - Neo4j-Client für Golang.
- [qmgo](https://github.com/qiniu/qmgo) - Der MongoDB-Treiber für Go. Er basiert auf dem offiziellen MongoDB-Treiber, ist aber so einfach zu verwenden wie Mgo.
- [redeo](https://github.com/bsm/redeo) - Redis-protokollkompatible TCP-Server/-Dienste.
- [redigo](https://github.com/gomodule/redigo) - Redigo ist ein Go-Client für die Redis-Datenbank.
- [redis](https://github.com/redis/go-redis) - Redis-Client für Golang.
- [rueidis](http://github.com/rueian/rueidis) - Schneller Redis-RESP3-Client mit automatischem Pipelining und serverunterstütztem clientseitigem Caching.
- [xredis](https://github.com/shomali11/xredis) - Typsicherer, anpassbarer, sauberer und einfach zu verwendender Redis-Client.

### Such- und Analysedatenbanken

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - ClickHouse-SQL-Client für Go mit `database/sql`-Kompatibilität.
- [effdsl](https://github.com/sdqri/effdsl) - Elasticsearch-Query-Builder für Go.
- [elastic](https://github.com/olivere/elastic) - Elasticsearch-Client für Go.
- [elasticsql](https://github.com/cch123/elasticsql) - SQL in Elasticsearch-DSL konvertieren, in Go.
- [elastigo](https://github.com/mattbaird/elastigo) - Elasticsearch-Client-Bibliothek.
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Offizieller Elasticsearch-Client für Go.
- [goes](https://github.com/OwnLocal/goes) - Bibliothek zur Interaktion mit Elasticsearch.
- [skizze](https://github.com/skizzehq/skizze) - Ein Dienst und Speicher für probabilistische Datenstrukturen.
- [zoekt](https://github.com/sourcegraph/zoekt) - Schnelle, trigrammbasierte Codesuche.

**[⬆ Zurück nach oben](#contents)**

## Datum und Uhrzeit

_Bibliotheken für die Arbeit mit Datums- und Zeitangaben._

- [approx](https://github.com/goschtalt/approx) - Eine Duration-Erweiterung, die das Parsen und Ausgeben von Zeitdauern in Tagen, Wochen und Jahren unterstützt.
- [carbon](https://github.com/dromara/carbon) - Ein einfaches, semantisches und entwicklerfreundliches Zeitpaket für Golang.
- [carbon](https://github.com/uniplaces/carbon) - Einfache Time-Erweiterung mit vielen Hilfsmethoden, portiert von der PHP-Bibliothek Carbon.
- [cronrange](https://github.com/1set/cronrange) - Parst Zeitbereichsausdrücke im Cron-Stil und prüft, ob eine gegebene Zeit in einem der Bereiche liegt.
- [date](https://github.com/rickb777/date) - Erweitert Time um die Arbeit mit Datumsangaben, Datumsbereichen, Zeitspannen, Perioden und Tageszeiten.
- [dateparse](https://github.com/araddon/dateparse) - Datumsangaben parsen, ohne das Format vorher zu kennen.
- [durafmt](https://github.com/hako/durafmt) - Bibliothek zur Formatierung von Zeitdauern für Go.
- [feiertage](https://github.com/wlbr/feiertage) - Funktionen zur Berechnung gesetzlicher Feiertage in Deutschland, einschließlich der Besonderheiten der Bundesländer. Etwa Ostern, Pfingsten, Erntedank …
- [go-anytime](https://github.com/ijt/go-anytime) - Parst Datums-/Zeitangaben wie "next dec 22nd at 3pm" und Bereiche wie "from today until next thursday", ohne das Format vorher zu kennen.
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - Eine umfassende Datums-Hilfsbibliothek für Go, inspiriert von date-fns, mit mehr als 140 reinen und unveränderlichen Funktionen.
- [go-datebin](https://github.com/deatil/go-datebin) - Ein einfaches Paket zum Parsen von Datum und Uhrzeit.
- [go-faketime](https://github.com/harkaitz/go-faketime) - Ein einfaches `time.Now()`, das das Hilfsprogramm faketime(1) berücksichtigt.
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - Implementierung des persischen Kalenders (Solar Hijri) in Go (Golang).
- [go-str2duration](https://github.com/xhit/go-str2duration) - Zeichenketten in Zeitdauern konvertieren. Unterstützt von time.Duration zurückgegebene Zeichenketten und mehr.
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - Berechnet die Zeiten für Sonnenaufgang und Sonnenuntergang für einen bestimmten Ort.
- [go-week](https://github.com/stoewer/go-week) - Ein effizientes Paket für die Arbeit mit Wochendaten nach ISO8601.
- [gostradamus](https://github.com/bykof/gostradamus) - Ein Go-Paket für die Arbeit mit Datumsangaben.
- [iso8601](https://github.com/relvacode/iso8601) - Effizientes Parsen von ISO8601-Datums-/Zeitangaben ohne reguläre Ausdrücke.
- [kair](https://github.com/GuilhermeCaruso/kair) - Datum und Uhrzeit – Formatierungsbibliothek für Golang.
- [now](https://github.com/jinzhu/now) - Now ist ein Zeit-Toolkit für Golang.
- [strftime](https://github.com/awoodbeck/strftime) - C99-kompatibler strftime-Formatierer.
- [timespan](https://github.com/SaidinWoT/timespan) - Für die Arbeit mit Zeitintervallen, definiert als Startzeit und Dauer.
- [timeutil](https://github.com/leekchan/timeutil) - Nützliche Erweiterungen (Timedelta, Strftime, …) für das time-Paket von Golang.
- [tuesday](https://github.com/osteele/tuesday) - Ruby-kompatible Strftime-Funktion.

**[⬆ Zurück nach oben](#contents)**

## Verteilte Systeme

_Pakete, die beim Aufbau verteilter Systeme helfen._

- [arpc](https://github.com/lesismal/arpc) - Effektivere Netzwerkkommunikation, unterstützt bidirektionale Aufrufe, Benachrichtigungen und Broadcasts.
- [bedrock](https://github.com/z5labs/bedrock) - Bietet eine minimale, modulare und komponierbare Grundlage für die schnelle Entwicklung von Diensten und anwendungsspezifischeren Frameworks in Go.
- [capillaries](https://github.com/capillariesio/capillaries) - Framework für verteilte Batch-Datenverarbeitung.
- [circuit](https://github.com/schigh/circuit) - Circuit Breaker mit schrittweiser Erholung durch probabilistische Drosselung.
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Hochperformante Bibliothek für das verteilte Command-Pattern in Go.
- [committer](https://github.com/vadiminshakov/committer) - Ein System zur Verwaltung verteilter Transaktionen (2PC/3PC-Implementierung).
- [consistent](https://github.com/buraksezer/consistent) - Konsistentes Hashing mit begrenzter Last.
- [consistenthash](https://github.com/mbrostami/consistenthash) - Konsistentes Hashing mit konfigurierbaren Replikaten.
- [dht](https://github.com/anacrolix/dht) - BitTorrent-Kademlia-DHT-Implementierung.
- [digota](https://github.com/digota/digota) - gRPC-E-Commerce-Microservice.
- [dot](https://github.com/dotchain/dot/) - Verteilte Synchronisierung mittels Operational Transformation/OT.
- [doublejump](https://github.com/edwingeng/doublejump) - Eine überarbeitete Version von Googles Jump Consistent Hash.
- [dragonboat](https://github.com/lni/dragonboat) - Eine funktionsvollständige und hochperformante Multi-Group-Raft-Bibliothek in Go.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Bietet effiziente, stabile und sichere Dateiverteilung und Image-Beschleunigung auf Basis von P2P-Technologie, um Best Practice und Standardlösung in Cloud-nativen Architekturen zu sein.
- [drmaa](https://github.com/dgruber/drmaa) - Bibliothek zur Job-Übermittlung an Cluster-Scheduler auf Basis des DRMAA-Standards.
- [dynamolock](https://cirello.io/dynamolock) - Implementierung verteilter Sperren auf Basis von DynamoDB.
- [dynatomic](https://github.com/tylfin/dynatomic) - Eine Bibliothek zur Verwendung von DynamoDB als atomarer Zähler.
- [emitter-io](https://github.com/emitter-io/emitter) - Hochperformante, verteilte, sichere Publish-Subscribe-Plattform mit niedriger Latenz, gebaut mit MQTT, Websockets und Liebe.
- [evans](https://github.com/ktr0731/evans) - Evans: ausdrucksstärkerer universeller gRPC-Client.
- [failured](https://github.com/andy2046/failured) - Adaptiver Accrual-Failure-Detector für verteilte Systeme.
- [flowgraph](https://github.com/vectaport/flowgraph) - Paket für Flow-Based Programming.
- [gleam](https://github.com/chrislusf/gleam) - Schnelles und skalierbares verteiltes Map/Reduce-System, geschrieben in reinem Go und Luajit, das die hohe Nebenläufigkeit von Go mit der hohen Performance von Luajit kombiniert und eigenständig oder verteilt läuft.
- [glow](https://github.com/chrislusf/glow) - Einfach zu verwendende, skalierbare, verteilte Big-Data-Verarbeitung, Map-Reduce, DAG-Ausführung – alles in reinem Go.
- [gmsec](https://github.com/gmsec/micro) - Ein Go-Framework für die Entwicklung verteilter Systeme.
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - Ein dezentrales Microservice-Framework auf Basis des Gossip-Protokolls und der OpenAPI-3.0-Spezifikation. Die integrierte go-doudou-CLI mit Fokus auf Low-Code und schnelle Entwicklung kann Ihre Produktivität steigern.
- [go-eagle](https://github.com/go-eagle/eagle) - Ein Go-Framework für APIs oder Microservices mit praktischen Scaffolding-Werkzeugen.
- [go-jump](https://github.com/dgryski/go-jump) - Portierung der „Jump“-Consistent-Hash-Funktion von Google.
- [go-kit](https://github.com/go-kit/kit) - Microservice-Toolkit mit Unterstützung für Service Discovery, Load Balancing, austauschbare Transporte, Request-Tracking usw.
- [go-micro](https://github.com/micro/go-micro) - Ein Framework für die Entwicklung verteilter Systeme.
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - MySQL-basierte verteilte Sperre.
- [go-pdu](https://github.com/pdupub/go-pdu) - Ein dezentrales, identitätsbasiertes soziales Netzwerk.
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Eine Bibliothek, die das Definieren asynchroner Health-Checks für Golang-Dienste unterstützt.
- [go-zero](https://github.com/tal-tech/go-zero) - Ein Web- und RPC-Framework. Es wurde entwickelt, um mit resilientem Design die Stabilität stark frequentierter Websites sicherzustellen. Das integrierte goctl steigert die Entwicklungsproduktivität erheblich.
- [gorpc](https://github.com/valyala/gorpc) - Einfache, schnelle und skalierbare RPC-Bibliothek für hohe Last.
- [grpc-go](https://github.com/grpc/grpc-go) - Die Go-Implementierung von gRPC. HTTP/2-basiertes RPC.
- [health](https://github.com/schigh/health) - Health-Checker für Go-Dienste mit Unterstützung für Kubernetes-Probes.
- [hprose](https://github.com/hprose/hprose-golang) - Äußerst starke RPC-Bibliothek, unterstützt inzwischen mehr als 25 Sprachen.
- [jsonrpc](https://github.com/osamingo/jsonrpc) - Das Paket jsonrpc hilft bei der Implementierung von JSON-RPC 2.0.
- [jsonrpc](https://github.com/ybbus/jsonrpc) - HTTP-Client-Implementierung für JSON-RPC 2.0.
- [K8gb](https://github.com/k8gb-io/k8gb) - Ein Cloud-nativer globaler Load Balancer für Kubernetes.
- [Kitex](https://github.com/cloudwego/kitex) - Ein hochperformantes und stark erweiterbares Golang-RPC-Framework, das Entwicklern beim Erstellen von Microservices hilft. Wenn Performance und Erweiterbarkeit bei der Entwicklung von Microservices im Vordergrund stehen, kann Kitex eine gute Wahl sein.
- [Kratos](https://github.com/go-kratos/kratos) - Ein modular aufgebautes und einfach zu verwendendes Microservice-Framework in Go.
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - Leichtgewichtige, fehlertolerante Nachrichtenströme für NATS.
- [lock](https://github.com/ubgo/lock) - Familie verteilter Sperren mit einer Go-Schnittstelle und fünf Backends (filelock, flock, Redis, Postgres, etcd) – Fencing-Tokens, Semaphor-Modus und Observability-Hooks für alle Backends.
- [lura](https://github.com/luraproject/lura) - Ultra-performantes API-Gateway-Framework mit Middlewares.
- [mochi mqtt](https://github.com/mochi-co/mqtt) - Vollständig spezifikationskonformer, einbettbarer, hochperformanter MQTT-v5/v3-Broker für IoT, Smart Home und Pub/Sub.
- [NATS](https://github.com/nats-io/nats-server) - NATS ist ein einfaches, sicheres und performantes Kommunikationssystem für digitale Systeme, Dienste und Geräte.
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - OpenTelemetry-Instrumentierung zur Kompilierzeit für Golang.
- [oras](https://github.com/oras-project/oras) - CLI und Bibliothek für OCI-Artefakte in Container-Registrys.
- [outbox](https://github.com/oagudo/outbox) - Leichtgewichtige Bibliothek für das Transactional-Outbox-Muster in Go, nicht an eine bestimmte relationale Datenbank oder einen bestimmten Broker gebunden.
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer ist eine Go-Bibliothek, die das Outbox-Muster implementiert.
- [pglock](https://cirello.io/pglock) - Implementierung verteilter Sperren auf Basis von PostgreSQL.
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Golang-JSON-RPC-Server-Client mit Protobuf-Spezifikation.
- [raft](https://github.com/hashicorp/raft) - Golang-Implementierung des Raft-Konsensprotokolls von HashiCorp.
- [raft](https://github.com/etcd-io/raft) - Go-Implementierung des Raft-Konsensprotokolls von CoreOS.
- [rain](https://github.com/cenkalti/rain) - BitTorrent-Client und -Bibliothek.
- [redis-lock](https://github.com/bsm/redislock) - Vereinfachte Implementierung verteilter Sperren mit Redis.
- [resgate](https://resgate.io/) - Echtzeit-API-Gateway zum Erstellen von REST-, Echtzeit- und RPC-APIs, bei denen alle Clients nahtlos synchronisiert werden.
- [rpcplatform](https://github.com/nexcode/rpcplatform) - Framework für Microservices mit Service Discovery, Load Balancing und verwandten Funktionen.
- [rpcx](https://github.com/smallnest/rpcx) - Verteiltes, erweiterbares RPC-Service-Framework wie Dubbo von Alibaba.
- [Semaphore](https://github.com/jexia/semaphore) - Ein unkomplizierter (Micro-)Service-Orchestrator.
- [servicepack](https://github.com/psyb0t/servicepack) - Framework zum nebenläufigen Ausführen mehrerer Dienste in einer einzigen Binärdatei, lokal oder verteilt über mehrere Maschinen.
- [sleuth](https://github.com/ursiform/sleuth) - Bibliothek für masterlose P2P-Autodiscovery und RPC zwischen HTTP-Diensten (mit [ZeroMQ](https://github.com/zeromq/libzmq)).
- [sponge](https://github.com/zhufuyi/sponge) - Ein Framework für verteilte Entwicklung, das automatische Codegenerierung, die Frameworks gin und grpc sowie grundlegende Entwicklungsframeworks integriert.
- [Tarmac](https://github.com/tarmac-project/tarmac) - Framework zum Schreiben von Funktionen, Microservices oder Monolithen mit WebAssembly
- [Temporal](https://github.com/temporalio/sdk-go) - System für dauerhafte Ausführung (Durable Execution), das Code fehlertolerant und einfach macht.
- [torrent](https://github.com/anacrolix/torrent) - BitTorrent-Client-Paket.
- [trpc-go](https://github.com/trpc-group/trpc-go) - Die Go-Implementierung von tRPC, einem erweiterbaren, hochperformanten RPC-Framework.

**[⬆ Zurück nach oben](#contents)**

## Dynamisches DNS

_Werkzeuge zum Aktualisieren dynamischer DNS-Einträge._

- [DDNS](https://github.com/skibish/ddns) - Persönlicher DDNS-Client mit Digital Ocean Networking DNS als Backend.
- [dyndns](https://gitlab.com/alcastle/dyndns) - Go-Hintergrundprozess, der regelmäßig und automatisch Ihre IP-Adresse prüft und bei jeder Adressänderung (einen oder mehrere) dynamische DNS-Einträge für Google Domains aktualisiert.
- [GoDNS](https://github.com/timothyye/godns) - Ein Client-Werkzeug für dynamisches DNS mit Unterstützung für DNSPod und HE.net, geschrieben in Go.

**[⬆ Zurück nach oben](#contents)**

## E-Mail

_Bibliotheken und Werkzeuge zum Erstellen und Versenden von E-Mails._

- [chasquid](https://blitiri.com.ar/p/chasquid) - SMTP-Server, geschrieben in Go.
- [douceur](https://github.com/aymerick/douceur) - CSS-Inliner für Ihre HTML-E-Mails.
- [email](https://github.com/jordan-wright/email) - Eine robuste und flexible E-Mail-Bibliothek für Go.
- [email-verifier](https://github.com/AfterShip/email-verifier) - Eine Go-Bibliothek zur E-Mail-Verifizierung, ohne E-Mails zu versenden.
- [go-dkim](https://github.com/toorop/go-dkim) - DKIM-Bibliothek zum Signieren und Verifizieren von E-Mails.
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - Golang-Bibliothek zur Bereitstellung einer kanonischen Darstellung von E-Mail-Adressen.
- [go-imap](https://github.com/BrianLeishman/go-imap) - IMAP-Client mit allem Drum und Dran: automatische Wiederverbindung, OAuth2, IDLE-Unterstützung und integriertes MIME-Parsing.
- [go-imap](https://github.com/emersion/go-imap) - IMAP-Bibliothek für Clients und Server.
- [go-mail](https://github.com/wneessen/go-mail) - Eine einfache Go-Bibliothek zum Versenden von E-Mails in Go.
- [go-message](https://github.com/emersion/go-message) - Streaming-Bibliothek für das Internet Message Format und E-Mail-Nachrichten.
- [go-premailer](https://github.com/vanng822/go-premailer) - Inline-Styling für HTML-E-Mails in Go.
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - Sehr einfaches Paket zum Versenden von E-Mails mit SMTP Keep Alive und zwei Timeouts: Connect und Send.
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Client für die SpamCheck-API von Postmark, die eine rohe E-Mail anhand von SpamAssassin-Regeln bewertet.
- [Hectane](https://github.com/hectane/hectane) - Leichtgewichtiger SMTP-Client mit HTTP-API.
- [hermes](https://github.com/matcornic/hermes) - Golang-Paket, das saubere, responsive HTML-E-Mails erzeugt.
- [Maddy](https://github.com/foxcpp/maddy) - All-in-one-E-Mail-Server (SMTP, IMAP, DKIM, DMARC, MTA-STS, DANE)
- [mailchain](https://github.com/mailchain/mailchain) - Verschlüsselte E-Mails an Blockchain-Adressen senden, geschrieben in Go.
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Go-Bibliothek zum Versenden von E-Mails mit der Mailgun-API.
- [MailHog](https://github.com/mailhog/MailHog) - E-Mail- und SMTP-Tests mit Web- und API-Oberfläche.
- [Mailpit](https://github.com/axllent/mailpit) - E-Mail- und SMTP-Testwerkzeug für Entwickler.
- [mailx](https://github.com/valord577/mailx) - Mailx ist eine Bibliothek, die das Versenden von E-Mails über SMTP erleichtert. Sie ist eine Erweiterung der Golang-Standardbibliothek `net/smtp`.
- [mox](https://github.com/mjl-/mox) - Moderner, voll ausgestatteter, sicherer Mailserver für wartungsarme, selbst gehostete E-Mails.
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - Die Go-Bibliothek von SendGrid zum Versenden von E-Mails.
- [smtp](https://github.com/mailhog/smtp) - Zustandsautomat für das SMTP-Serverprotokoll.
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - Leichtgewichtiger, konfigurierbarer Multithreading-Fake-SMTP-Server. Ahmt beliebiges SMTP-Verhalten für Ihre Testumgebung nach.
- [tickstem/verify](https://github.com/tickstem/verify) - Validiert E-Mail-Adressen, bevor sie in Ihre Datenbank gelangen: Syntax, MX-Lookup, Wegwerf-Domains und rollenbasierte Postfächer.
- [truemail-go](https://github.com/truemail-rb/truemail-go) - Konfigurierbarer E-Mail-Validator/-Verifizierer für Golang. Verifiziert E-Mails per Regex, DNS, SMTP und mehr.

**[⬆ Zurück nach oben](#contents)**

## Einbettbare Skriptsprachen

_Andere Sprachen in Ihren Go-Code einbetten._

- [anko](https://github.com/mattn/anko) - Skriptfähiger Interpreter, geschrieben in Go.
- [binder](https://github.com/alexeyco/binder) - Binding-Bibliothek von Go nach Lua, basierend auf [gopher-lua](https://github.com/yuin/gopher-lua).
- [cel-go](https://github.com/google/cel-go) - Schnelle, portable, nicht Turing-vollständige Auswertung von Ausdrücken mit gradueller Typisierung.
- [ecal](https://github.com/krotik/ecal) - Eine einfache einbettbare Skriptsprache mit Unterstützung für nebenläufige Ereignisverarbeitung.
- [expr](https://github.com/antonmedv/expr) - Engine zur Auswertung von Ausdrücken für Go: schnell, nicht Turing-vollständig, dynamische Typisierung, statische Typisierung.
- [FrankenPHP](https://github.com/dunglas/frankenphp) - In Go eingebettetes PHP mit einem `net/http`-Handler.
- [gentee](https://github.com/gentee/gentee) - Einbettbare Skript-Programmiersprache.
- [gisp](https://github.com/jcla1/gisp) - Einfaches LISP in Go.
- [go-lua](https://github.com/Shopify/go-lua) - Portierung der Lua-5.2-VM auf reines Go.
- [go-lua](https://github.com/speedata/go-lua) - Lua-5.4-VM, implementiert in reinem Go.
- [go-php](https://github.com/deuill/go-php) - PHP-Bindings für Go.
- [goal](https://codeberg.org/anaseto/goal) - Eine einbettbare Array-Skriptsprache.
- [goja](https://github.com/dop251/goja) - ECMAScript-5.1(+)-Implementierung in Go.
- [golua](https://github.com/aarzilli/golua) - Go-Bindings für die Lua-C-API.
- [gopher-lua](https://github.com/yuin/gopher-lua) - Lua-5.1-VM und -Compiler, geschrieben in Go.
- [gval](https://github.com/PaesslerAG/gval) - Eine hochgradig anpassbare Ausdruckssprache, geschrieben in Go.
- [metacall](https://github.com/metacall/core) - Plattformübergreifende polyglotte Runtime mit Unterstützung für NodeJS, JavaScript, TypeScript, Python, Ruby, C#, WebAssembly, Java, Cobol und mehr.
- [ngaro](https://github.com/db47h/ngaro) - Einbettbare Ngaro-VM-Implementierung, die Skripting in Retro ermöglicht.
- [prolog](https://github.com/ichiban/prolog) - Einbettbares Prolog.
- [purl](https://github.com/ian-kent/purl) - Perl 5.18.2, eingebettet in Go.
- [starlark-go](https://github.com/google/starlark-go) - Go-Implementierung von Starlark: eine Python-ähnliche Sprache mit deterministischer Auswertung und hermetischer Ausführung.
- [starlet](https://github.com/1set/starlet) - Go-Wrapper für [starlark-go](https://github.com/google/starlark-go), der die Skriptausführung vereinfacht und Datenkonvertierung sowie nützliche Starlark-Bibliotheken und -Erweiterungen bietet.
- [tengo](https://github.com/d5/tengo) - In Bytecode kompilierte Skriptsprache für Go.
- [Wa/凹语言](https://github.com/wa-lang/wa) - Die Programmiersprache Wa, eingebettet in Go.

**[⬆ Zurück nach oben](#contents)**

## Fehlerbehandlung

_Bibliotheken zur Behandlung von Fehlern._

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - Umhüllt Fehler mit Datei, Zeile und Funktionsname jeder Aufrufstelle.
- [emperror](https://github.com/emperror/emperror) - Werkzeuge und Best Practices für die Fehlerbehandlung in Go-Bibliotheken und -Anwendungen.
- [eris](https://github.com/rotisserie/eris) - Eine bessere Möglichkeit, Fehler in Go zu behandeln, nachzuverfolgen und zu protokollieren. Kompatibel mit der Standard-Fehlerbibliothek und github.com/pkg/errors.
- [errlog](https://github.com/snwfdhmp/errlog) - Anpassbares Paket, das den für einen Fehler verantwortlichen Quellcode ermittelt (und einige weitere Funktionen für schnelles Debugging bietet). Lässt sich direkt in jeden Logger einbinden.
- [errors](https://github.com/emperror/errors) - Direkter Ersatz für das errors-Paket der Standardbibliothek und github.com/pkg/errors. Bietet verschiedene Primitive zur Fehlerbehandlung.
- [errors](https://github.com/neuronlabs/errors) - Einfache Fehlerbehandlung in Golang mit Klassifizierungsprimitiven.
- [errors](https://github.com/PumpkinSeed/errors) - Der einfachste Fehler-Wrapper mit großartiger Performance und minimalem Speicher-Overhead.
- [errors](https://gitlab.com/tozd/go/errors) - Stellt Fehler mit Stacktrace und optionalen strukturierten Details bereit. Kompatibel mit der API von github.com/pkg/errors, verwendet diese intern aber nicht.
- [errors](https://github.com/naughtygopher/errors) - Direkter Ersatz für die eingebauten Go-Fehler. Ein minimales Paket zur Fehlerbehandlung mit benutzerdefinierten Fehlertypen, benutzerfreundlichen Meldungen, Unwrap und Is. Mit sehr einfach zu verwendenden und unkomplizierten Hilfsfunktionen.
- [errors](https://github.com/cockroachdb/errors) - Go-Fehlerbibliothek mit Übertragbarkeit von Fehlern über das Netzwerk.
- [errorx](https://github.com/joomcode/errorx) - Ein funktionsreiches Fehlerpaket mit Stacktraces, Komposition von Fehlern und mehr.
- [exception](https://github.com/rbrahul/exception) - Ein einfaches Hilfspaket für die Ausnahmebehandlung mit try-catch in Golang.
- [Falcon](https://github.com/SonicRoshan/falcon) - Ein einfaches und dennoch sehr leistungsstarkes Paket zur Fehlerbehandlung.
- [Fault](https://github.com/Southclaws/fault) - Ein ergonomischer Mechanismus zum Umhüllen von Fehlern, der strukturierte Metadaten und Kontext für Fehlerwerte ermöglicht.
- [go-errr](https://github.com/go-errr/go) - Bibliothek zur Fehlerbehandlung für Go mit Catch/Recover-Semantik, verketteten umhüllten Fehlern und Stacktraces.
- [go-multierror](https://github.com/hashicorp/go-multierror) - Go-Paket (Golang) zur Darstellung einer Liste von Fehlern als einzelner Fehler.
- [metaerr](https://github.com/quantumcycle/metaerr) - Eine Bibliothek zum Erstellen eigener Fehler-Builder, die strukturierte Fehler mit Metadaten aus verschiedenen Quellen und optionalen Stacktraces erzeugen.
- [multierr](https://github.com/uber-go/multierr) - Paket zur Darstellung einer Liste von Fehlern als einzelner Fehler.
- [oops](https://github.com/samber/oops) - Fehlerbehandlung mit Kontext, Stacktrace und Quellcodeausschnitten.
- [tracerr](https://github.com/ztrue/tracerr) - Golang-Fehler mit Stacktrace und Quellcodeausschnitten.

**[⬆ Zurück nach oben](#contents)**

## Dateiverarbeitung

_Bibliotheken für den Umgang mit Dateien und Dateisystemen._

- [afero](https://github.com/spf13/afero) - Dateisystem-Abstraktionssystem für Go.
- [afs](https://github.com/viant/afs) - Abstrakter Dateispeicher (mem, scp, zip, tar, Cloud: s3, gs) für Go.
- [baraka](https://github.com/xis/baraka) - Eine Bibliothek zur einfachen Verarbeitung von HTTP-Datei-Uploads.
- [checksum](https://github.com/codingsince1985/checksum) - Berechnet Message Digests wie MD5, SHA256, SHA1, CRC oder BLAKE2s für große Dateien.
- [copy](https://github.com/otiai10/copy) - Verzeichnisse rekursiv kopieren.
- [fastwalk](https://github.com/charlievieth/fastwalk) - Schnelle Bibliothek zur parallelen Verzeichnistraversierung (verwendet von [fzf](https://github.com/junegunn/fzf)).
- [flop](https://github.com/homedepot/flop) - Bibliothek für Dateioperationen, die Funktionsparität mit [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) anstrebt.
- [gdu](https://github.com/dundee/gdu) - Analysewerkzeug für die Festplattennutzung mit Konsolenoberfläche.
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - CSV-Dateien mithilfe von Tags laden.
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - Dateien kopieren – für Menschen.
- [go-exiftool](https://github.com/barasher/go-exiftool) - Go-Bindings für ExifTool, die bekannte Bibliothek, mit der sich möglichst viele Metadaten (EXIF, IPTC, …) aus Dateien (Bilder, PDF, Office, …) extrahieren lassen.
- [go-gtfs](https://github.com/artonge/go-gtfs) - GTFS-Dateien in Go laden.
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - Ein Paket zum Konvertieren einer HTML-Vorlage in eine PDF-Datei.
- [goflat](https://github.com/lzambarda/goflat) - Kontextbewusster generischer Marshaler/Unmarshaler für Flat Files.
- [gofs](https://github.com/no-src/gofs) - Ein sofort einsatzbereites, plattformübergreifendes Werkzeug zur Echtzeit-Dateisynchronisierung.
- [gopdfrab](https://github.com/voidrab/gopdfrab) - PDF/A-Verarbeitung für Go.
- [gulter](https://github.com/adelowo/gulter) - Eine einfache HTTP-Middleware, die alle Ihre Datei-Uploads automatisch verarbeitet
- [gut/yos](https://github.com/1set/gut) - Einfaches und zuverlässiges Paket für Dateioperationen wie Kopieren/Verschieben/Vergleichen/Auflisten von Dateien, Verzeichnissen und symbolischen Links.
- [gxpdf](https://github.com/coregx/gxpdf) - Moderne PDF-Bibliothek für Go über den gesamten Lebenszyklus – Dokumente parsen, Tabellen extrahieren, generieren und signieren, ohne CGO-Abhängigkeiten.
- [higgs](https://github.com/dastoori/higgs) - Eine winzige plattformübergreifende Go-Bibliothek zum Verbergen/Einblenden von Dateien und Verzeichnissen.
- [iso9660](https://github.com/kdomanski/iso9660) - Ein Paket zum Lesen und Erstellen von ISO9660-Datenträgerabbildern
- [notify](https://github.com/rjeczalik/notify) - Bibliothek für Dateisystem-Ereignisbenachrichtigungen mit einfacher API, ähnlich wie os/signal.
- [opc](https://github.com/qmuntal/opc) - Dateien nach den Open Packaging Conventions (OPC) in Go laden.
- [parquet](https://github.com/parsyl/parquet) - [parquet](https://parquet.apache.org)-Dateien lesen und schreiben.
- [pathtype](https://github.com/jonchun/pathtype) - Pfade als eigenen Typ behandeln, statt Strings zu verwenden.
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - PDF-Prozessor.
- [skywalker](https://github.com/dixonwille/skywalker) - Paket zum mühelosen, nebenläufigen Durchlaufen eines Dateisystems.
- [todotxt](https://github.com/1set/todotxt) - Go-Bibliothek für die [_todo.txt_](http://todotxt.org/)-Dateien von Gina Trapani, unterstützt das Parsen und Bearbeiten von Aufgabenlisten im [_todo.txt_-Format](https://github.com/todotxt/todo.txt).
- [vfs](https://github.com/C2FO/vfs) - Ein erweiterbarer, anpassbarer und meinungsstarker Satz von Dateisystemfunktionen für Go über verschiedene Dateisystemtypen wie os, S3 und GCS hinweg.

**[⬆ Zurück nach oben](#contents)**

## Finanzen

_Pakete für Buchhaltung und Finanzen._

- [accounting](https://github.com/leekchan/accounting) - Formatierung von Geldbeträgen und Währungen für Golang.
- [ach](https://github.com/moov-io/ach) - Ein Reader, Writer und Validator für Dateien des Automated Clearing House (ACH).
- [bbgo](https://github.com/c9s/bbgo) - Ein in Go geschriebenes Framework für Krypto-Trading-Bots. Mit gängiger API für Krypto-Börsen, Standardindikatoren, Backtesting und vielen integrierten Strategien.
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - Go-Client für die BingX API v3 mit mehr als 260 Methoden, USDT-M/Coin-M-Futures, Spot, TradFi, WebSocket-Streams und Copy-Trading.
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Go-Client für die Bitget UTA API v3 mit typisierten Modellen, stringbasierten Preisen, WebSocket mit automatischer Wiederverbindung und Demo-Trading.
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Go-Client für die Bybit V5 API mit HMAC/RSA-Authentifizierung, WebSocket-Streams, Demo-Trading und TradFi-Instrumenten.
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - Client für den Fear & Greed Index von CNN mit den sieben Teilindikatoren und etwa einem Jahr täglicher Historie.
- [currency](https://github.com/bojanz/currency) - Verarbeitet Währungsbeträge und stellt Währungsinformationen und -formatierung bereit.
- [currency](https://github.com/naughtygopher/currency) - Hochperformantes und präzises Paket für Währungsberechnungen.
- [dec128](https://github.com/jokruger/dec128) - Hochperformante 128-Bit-Festkomma-Dezimalzahlen.
- [decimal](https://github.com/shopspring/decimal) - Festkomma-Dezimalzahlen mit beliebiger Genauigkeit.
- [decimal](https://github.com/aytechnet/decimal) - Hochperformante 64-Bit-Dezimalzahlen, teilweise kompatibel mit [shopspring/decimal](https://github.com/shopspring/decimal) und int64, einschließlich Gewicht und Länge.
- [decimal](https://github.com/govalues/decimal) - Unveränderliche Dezimalzahlen mit Panic-freier Arithmetik.
- [decimal](https://github.com/klokare/decimal) - Ein Dezimaltyp fester Größe ohne Allokationen für Fälle, in denen keine beliebige Genauigkeit benötigt wird.
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - Mehrwertsteuersätze (VAT) und USt-IdNr.-Formate für 45 europäische Länder, zur Kompilierzeit eingebettet und täglich aus der TEDB der Europäischen Kommission aktualisiert.
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - Schnelle und präzise Serialisierung und Arithmetik für kleine Festkomma-Dezimalzahlen
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - Schnelle und einfache Festkomma-Dezimalbeträge für Geld nach ISO4217.
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Go-Client für die Glassnode Basic API mit 25 Metrikkategorien, typisierten Structs, Bulk-Endpunkten, Point-in-Time-Daten und ohne Abhängigkeiten.
- [go-finance](https://github.com/alpeb/go-finance) - Bibliothek finanzmathematischer Funktionen für den Zeitwert des Geldes (Annuitäten), Cashflow, Zinsumrechnungen, Anleihen und Abschreibungsberechnungen.
- [go-finance](https://github.com/pieterclaerhout/go-finance) - Modul zum Abrufen von Wechselkursen, Prüfen von USt-IdNr. (VAT) über VIES und Prüfen von IBAN-Kontonummern.
- [go-money](https://github.com/rhymond/go-money) - Implementierung von Fowlers Money-Muster.
- [go-nowpayments](https://github.com/matm/go-nowpayments) - Bibliothek für die Krypto-API von NOWPayments.
- [gobl](https://github.com/invopop/gobl) - Framework für Rechnungs- und Abrechnungsdokumente. Basiert auf JSON Schema. Automatisiert Steuerberechnungen und Validierung, mit Werkzeugen zur Konvertierung in globale Formate.
- [indicator](https://github.com/cinar/indicator) - Bibliothek für technische Analyse mit Finanzindikatoren, Strategien und Backtesting-Framework.
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - Go-Client für die UTA- und Classic-REST- und WebSocket-APIs von KuCoin mit HMAC-SHA256-Authentifizierung, als Strings typisierten Preisen und typisierter Fehlerhierarchie.
- [ledger](https://github.com/formancehq/ledger) - Ein programmierbares Finanzhauptbuch, das eine Grundlage für Anwendungen bietet, die Geld bewegen.
- [money](https://github.com/govalues/money) - Unveränderliche Geldbeträge und Wechselkurse mit Panic-freier Arithmetik.
- [ofxgo](https://github.com/aclindsa/ofxgo) - OFX-Server abfragen und/oder deren Antworten parsen (mit Beispiel-Kommandozeilenclient).
- [okx-go](https://github.com/tigusigalpa/okx-go) - Go-Client für die OKX v5 API mit 335 REST-Endpunkten, 53 WebSocket-Kanälen, Generics-Unterstützung und automatischer Wiederverbindung.
- [orderbook](https://github.com/i25959341/orderbook) - Matching-Engine für ein Limit-Orderbuch in Golang.
- [orderbook](https://github.com/intrepidkarthi/orderbook) - Einbettbares Limit-Orderbuch und Matching-Engine mit ganzzahlig exakter Preisbildung, einem Single-Writer-Kern und Wiederherstellung nach Abstürzen über ein Write-Ahead-Log.
- [payme](https://github.com/jovandeginste/payme) - QR-Code-Generator (ASCII und PNG) für SEPA-Zahlungen.
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - Ein umfassendes, vollständig typisiertes Go-SDK für die Paystack-API ohne Abhängigkeiten.
- [swift](https://code.pfad.fr/swift/) - Offline-Gültigkeitsprüfung von IBAN (International Bank Account Number) und Abruf von BIC (für einige Länder).
- [techan](https://github.com/sdcoffey/techan) - Bibliothek für technische Analyse mit fortgeschrittener Marktanalyse und Trading-Strategien.
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Go-Client für die Telegram Wallet Pay API mit HMAC-SHA256-Webhook-Verifizierung und Middleware für net/http, Gin und Echo.
- [ticker](https://github.com/achannarasappa/ticker) - Börsenbeobachter und Positions-Tracker für Aktien im Terminal.
- [transaction](https://github.com/claygod/transaction) - Eingebettete transaktionale Kontendatenbank, die im Multithreading-Modus läuft.
- [udecimal](https://github.com/quagmt/udecimal) - Hochperformante, hochpräzise und allokationsfreie Festkomma-Dezimalbibliothek für Finanzanwendungen.
- [vat](https://github.com/dannyvankooten/vat) - Validierung von USt-IdNr. (VAT) und EU-Mehrwertsteuersätze.

**[⬆ Zurück nach oben](#contents)**

## Formulare

_Bibliotheken für die Arbeit mit Formularen._

- [bind](https://github.com/robfig/bind) - Formulardaten an beliebige Go-Werte binden.
- [conform](https://github.com/leebenson/conform) - Hält Benutzereingaben unter Kontrolle. Kürzt, bereinigt und säubert Daten anhand von Struct-Tags.
- [form](https://github.com/go-playground/form) - Dekodiert url.Values in Go-Werte und kodiert Go-Werte in url.Values. Unterstützung für Dual-Arrays und vollständige Maps.
- [formam](https://github.com/monoculum/formam) - Formularwerte in ein Struct dekodieren.
- [forms](https://github.com/albrow/forms) - Framework-unabhängige Bibliothek zum Parsen und Validieren von Formular-/JSON-Daten mit Unterstützung für Multipart-Formulare und Dateien.
- [gbind](https://github.com/bdjimmy/gbind) - Daten an beliebige Go-Werte binden. Kann integrierte und benutzerdefinierte Ausdrucksbindungen verwenden; unterstützt Datenvalidierung
- [gorilla/csrf](https://github.com/gorilla/csrf) - CSRF-Schutz für Go-Webanwendungen und -Dienste.
- [httpin](https://github.com/ggicci/httpin) - Dekodiert eine HTTP-Anfrage in ein benutzerdefiniertes Struct, einschließlich Query-String, Formularen, HTTP-Headern usw.
- [nosurf](https://github.com/justinas/nosurf) - CSRF-Schutz-Middleware für Go.
- [qs](https://github.com/sonh/qs) - Go-Modul zum Kodieren von Structs in URL-Query-Parameter.
- [queryparam](https://github.com/tomwright/queryparam) - Dekodiert `url.Values` in verwendbare Struct-Werte von Standard- oder benutzerdefinierten Typen.
- [roamer](https://github.com/slipros/roamer) - Beseitigt Boilerplate-Code beim Parsen von HTTP-Anfragen, indem Cookies, Header, Query-Parameter, Pfadparameter, Body und mehr über einfache Tags an Structs gebunden werden.

**[⬆ Zurück nach oben](#contents)**

## Funktionale Programmierung

_Pakete zur Unterstützung funktionaler Programmierung in Go._

- [fp-go](https://github.com/repeale/fp-go) - Sammlung von Hilfsfunktionen für funktionale Programmierung auf Basis der Generics von Golang 1.18+.
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Monaden und Funktionen für funktionale Programmierung in Golang.
- [fuego](https://github.com/seborama/fuego) - Funktionales Experiment in Go.
- [FuncFrog](https://github.com/koss-null/FuncFrog) - Bibliothek funktionaler Hilfsfunktionen, die Map, Filter, Reduce und weitere Stream-Operationen auf generischen Slices (Go1.18+) mit Lazy Evaluation und Mechanismen zur Fehlerbehandlung bereitstellt.
- [g](https://github.com/enetx/g) - Framework für funktionale Programmierung in Go.
- [go-functional](https://github.com/BooleanCat/go-functional) - Funktionale Programmierung in Go mit Generics
- [go-underscore](https://github.com/tobyhede/go-underscore) - Nützliche Sammlung hilfreicher funktionaler Collection-Hilfsmittel für Go.
- [gofp](https://github.com/rbrahul/gofp) - Eine leistungsstarke, lodash-ähnliche Hilfsbibliothek für Golang.
- [mo](https://github.com/samber/mo) - Monaden und verbreitete FP-Abstraktionen auf Basis der Generics von Go 1.18+ (Option, Result, Either …).
- [underscore](https://github.com/rjNemo/underscore) - Hilfsfunktionen für funktionale Programmierung für Go 1.18 und neuer.
- [valor](https://github.com/phelmkamp/valor) - Generische Option- und Result-Typen, die optional einen Wert enthalten.

**[⬆ Zurück nach oben](#contents)**

## Spieleentwicklung

_Großartige Bibliotheken für die Spieleentwicklung._

- [Ark](https://github.com/mlange-42/ark) - Archetypbasiertes Entity Component System (ECS) für Go.
- [due](https://github.com/dobyte/due) - Verteiltes Gameserver-Framework mit modularem Komponentendesign, das TCP-, KCP-, WS- und QUIC-Gateways bereitstellt.
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Kinderleichte 2D-Spiele-Engine in Go.
- [ecs](https://github.com/andygeiss/ecs) - Bauen Sie Ihre eigene Spiele-Engine auf Basis des Entity-Component-System-Konzepts in Golang.
- [engo](https://github.com/EngoEngine/engo) - Engo ist eine in Go geschriebene Open-Source-2D-Spiele-Engine. Sie folgt dem Entity-Component-System-Paradigma.
- [fantasyname](https://github.com/s0rg/fantasyname) - Generator für Fantasy-Namen.
- [g3n](https://github.com/g3n/engine) - Go-3D-Spiele-Engine.
- [go-astar](https://github.com/beefsack/go-astar) - Go-Implementierung des A\*-Pfadfindungsalgorithmus.
- [go-sdl2](https://github.com/veandco/go-sdl2) - Go-Bindings für den [Simple DirectMedia Layer](https://www.libsdl.org/).
- [go3d](https://github.com/ungerik/go3d) - Performance-orientiertes 2D/3D-Mathematikpaket für Go.
- [gogpu](https://github.com/gogpu/gogpu) - GPU-Anwendungsframework mit Fensterverwaltung, Eingabe und Rendering auf Basis von WebGPU – reduziert mehr als 480 Zeilen GPU-Code auf ~20, ohne CGO (GoGPU-Ökosystem: [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)).
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - WebGPU-Implementierung in reinem Go mit Vulkan-, DX12- und Metal-Backends, ohne CGO (Teil des [GoGPU](https://github.com/gogpu)-Ökosystems).
- [GOKe](https://github.com/kjkrol/goke) - Datenorientierte (DOD), archetypbasierte ECS-Engine mit einem an den L1-Cache ausgerichteten, in Chunks unterteilten SoA-Layout für vorhersagbares, stufenloses Speicherwachstum und allokationsfreie Ausführungspfade.
- [gonet](https://github.com/xtaci/gonet) - Gameserver-Gerüst, implementiert in Golang.
- [goworld](https://github.com/xiaonanln/goworld) - Skalierbare Gameserver-Engine mit Space-Entity-Framework und Hot-Swapping.
- [grid](https://github.com/s0rg/grid) - Generisches 2D-Raster mit Raycasting, Shadowcasting und Pfadfindung.
- [Leaf](https://github.com/name5566/leaf) - Leichtgewichtiges Gameserver-Framework.
- [nano](https://github.com/lonng/nano) - Leichtgewichtiges, komfortables, hochperformantes Gameserver-Framework auf Golang-Basis.
- [Oak](https://github.com/oakmound/oak) - Spiele-Engine in reinem Go.
- [Pi](https://github.com/elgopher/pi) - Spiele-Engine zum Erstellen von Retro-Spielen für moderne Computer. Inspiriert von Pico-8 und angetrieben von Ebitengine.
- [Pitaya](https://github.com/topfreegames/pitaya) - Skalierbares Gameserver-Framework mit Cluster-Unterstützung und Client-Bibliotheken für iOS, Android, Unity und andere über das C-SDK.
- [Pixel](https://github.com/gopxl/pixel) - Handgefertigte 2D-Spielebibliothek in Go.
- [prototype](https://github.com/gonutz/prototype) - Plattformübergreifende Bibliothek (Windows/Linux/Mac) zum Erstellen von Desktop-Spielen mit einer minimalen API.
- [raylib-go](https://github.com/gen2brain/raylib-go) - Go-Bindings für [raylib](https://www.raylib.com/), eine einfache und leicht zu verwendende Bibliothek zum Erlernen der Videospielprogrammierung.
- [sceneCamera](https://github.com/donomii/sceneCamera) - Kamerabewegung und View-/Projektionsmatrizen für Museums-, FPS-, RTS- und Stereo-Rendering-Modi.
- [termloop](https://github.com/JoelOtter/termloop) - Terminalbasierte Spiele-Engine für Go, aufgebaut auf Termbox.
- [tile](https://github.com/kelindar/tile) - Datenorientierte und cachefreundliche 2D-Raster-Bibliothek (TileMap) mit Pfadfindung, Observern und Import/Export.

**[⬆ Zurück nach oben](#contents)**

## Generatoren

_Werkzeuge, die Go-Code generieren._

- [apispec](https://github.com/ehabterra/apispec) - Erzeugt OpenAPI-3.1-Spezifikationen aus Go-Code ohne Annotationen, plus eine Browser-UI zum Konfigurieren, Vorschauen und Erkunden des Aufrufgraphen.
- [convergen](https://github.com/reedom/convergen) - Funktionsreicher Codegenerator für Kopien von Typ zu Typ.
- [copygen](https://github.com/switchupcb/copygen) - Generiert beliebigen Code auf Basis von Go-Typen, einschließlich Typ-zu-Typ-Konvertern (Kopiercode), standardmäßig ohne Reflection.
- [generis](https://github.com/senselogic/GENERIS) - Werkzeug zur Codegenerierung mit Generics, freien Makros, bedingter Kompilierung und HTML-Templating.
- [go-apispec](https://github.com/antst/go-apispec) - Erzeugt OpenAPI-3.1-Spezifikationen aus Go-Quellcode per statischer Analyse mit automatischer Framework-Erkennung.
- [go-enum](https://github.com/abice/go-enum) - Codegenerierung für Enums aus Code-Kommentaren.
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - Codegenerierung für die Kodierung von Enums aus Code-Kommentaren.
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - LINQ-ähnliche Abfragemethoden wie in .NET für Go.
- [goderive](https://github.com/awalterschulze/goderive) - Leitet Funktionen aus Eingabetypen ab
- [goverter](https://github.com/jmattheis/goverter) - Konverter durch Definition eines Interfaces generieren.
- [GoWrap](https://github.com/hexdigest/gowrap) - Decorators für Go-Interfaces mithilfe einfacher Vorlagen generieren.
- [interfaces](https://github.com/rjeczalik/interfaces) - Kommandozeilenwerkzeug zum Generieren von Interface-Definitionen.
- [jennifer](https://github.com/dave/jennifer) - Beliebigen Go-Code ohne Vorlagen generieren.
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - Dieses Paket enthält eine Reihe von Hilfsprogrammen zum Generieren von Go-Boilerplate-Code für Dienste auf Basis von OpenAPI-3.0-API-Definitionen.
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - HTTP-Server und -Client aus Protobuf generieren.
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Typisierte MCP-Tools, Prompts und Ressourcen aus Protocol Buffers generieren.
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - Eine Bibliothek zum dynamischen Erzeugen von Typen.

**[⬆ Zurück nach oben](#contents)**

## Geografie

_Geografische Werkzeuge und Server_

- [borders](https://github.com/kpfaulkner/borders) - Erkennt Bildränder und konvertiert sie für GIS-Operationen in GeoJSON.
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - Offizielles Go-SDK für GeoEngine, das hochperformante Erfassung von Geodaten mit Latenzen im einstelligen Millisekundenbereich bietet.
- [geoos](https://github.com/spatial-go/geoos) - Eine Bibliothek, die räumliche Daten und geometrische Algorithmen bereitstellt.
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver ist ein Go-Paket zur Bearbeitung einer GeoServer-Instanz über die GeoServer-REST-API.
- [gismanager](https://github.com/hishamkaram/gismanager) - Veröffentlichen Sie Ihre GIS-Daten (Vektordaten) in PostGIS und Geoserver.
- [godal](https://github.com/airbusgeo/godal) - Go-Wrapper für GDAL.
- [H3](https://github.com/uber/h3-go) - Go-Bindings für H3, ein hierarchisches, hexagonales räumliches Indexierungssystem.
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - Konvertierungswerkzeuge zwischen H3-Indizes und GeoJSON.
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - Verteilung von Uber-H3geo-Zellen über virtuelle Knoten.
- [mbtileserver](https://github.com/consbio/mbtileserver) - Ein einfacher Go-basierter Server für Kartenkacheln im mbtiles-Format.
- [osm](https://github.com/paulmach/osm) - Bibliothek zum Lesen, Schreiben und Arbeiten mit OpenStreetMap-Daten und -APIs.
- [pbf](https://github.com/maguro/pbf) - OpenStreetMap-PBF-Encoder/-Decoder für Golang.
- [S2 geojson](https://github.com/pantrif/s2-geojson) - GeoJSON in S2-Zellen konvertieren und einige Funktionen der S2-Geometrie auf einer Karte demonstrieren.
- [S2 geometry](https://github.com/golang/geo) - S2-Geometriebibliothek in Go.
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures ist eine 2D-Geometriebibliothek, die Go-Typen zur Modellierung von Geometrien sowie Algorithmen für deren Verarbeitung bereitstellt.
- [Tile38](https://github.com/tidwall/tile38) - Geolokalisierungs-DB mit räumlichem Index und Echtzeit-Geofencing.
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) Ein Projekt, um LonLat, Point und Tile einfach zu verwenden und zu konvertieren, um Informationen, Marker usw. auf einer Karte mithilfe der Web-Mercator-Projektion anzuzeigen.
- [WGS84](https://github.com/wroge/wgs84) - Bibliothek für Koordinatenumrechnung und -transformation (ETRS89, OSGB36, NAD83, RGF93, Web Mercator, UTM).

**[⬆ Zurück nach oben](#contents)**

## Go-Compiler

_Werkzeuge zum Kompilieren von Go in andere Sprachen und umgekehrt._

- [bunster](https://github.com/yassinebenaid/bunster) - Shell-Skripte zu Go kompilieren.
- [c4go](https://github.com/Konstantin8105/c4go) - C-Code in Go-Code transpilieren.
- [cxgo](https://github.com/gotranspile/cxgo) - C-Code in Go-Code transpilieren.
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Go in Arduino-Code transpilieren.
- [f4go](https://github.com/Konstantin8105/f4go) - FORTRAN-77-Code in Go-Code transpilieren.
- [go2hx](https://github.com/go2hx/go2hx) - Compiler von Go nach Haxe nach Javascript/C++/Java/C#.
- [gopherjs](https://github.com/gopherjs/gopherjs) - Compiler von Go nach JavaScript.

**[⬆ Zurück nach oben](#contents)**

## Goroutinen

_Werkzeuge zum Verwalten von und Arbeiten mit Goroutinen._

- [anchor](https://github.com/kyuff/anchor) - Bibliothek zur Verwaltung des Lebenszyklus von Komponenten in Microservice-Architekturen.
- [ants](https://github.com/panjf2000/ants) - Ein hochperformanter und ressourcenschonender Goroutine-Pool in Go.
- [artifex](https://github.com/borderstech/artifex) - Einfache In-Memory-Job-Queue für Golang mit Worker-basierter Verteilung.
- [async](https://github.com/yaitoo/async) - Ein Paket für asynchrone Aufgaben im async/await-Stil für Go.
- [async](https://github.com/reugn/async) - Eine alternative Synchronisationsbibliothek für Go (Future, Promise, Locks).
- [async](https://github.com/studiosol/async) - Eine sichere Möglichkeit, Funktionen asynchron auszuführen und sie im Falle einer Panic wiederherzustellen.
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob ist ein Job-Manager für asynchrone Warteschlangen mit schlankem, klarem und schnellem Code.
- [autopool](https://github.com/AshvinBambhaniya/autopool) - Automatisch skalierender Worker-Pool für Go ohne Konfiguration, mit prioritätsbewusstem Scheduling.
- [breaker](https://github.com/kamilsk/breaker) - Flexibler Mechanismus, um den Ausführungsfluss unterbrechbar zu machen.
- [channelify](https://github.com/ddelizia/channelify) - Wandelt Ihre Funktion so um, dass sie Channels zurückgibt – für einfache und leistungsstarke Parallelverarbeitung.
- [conc](https://github.com/sourcegraph/conc) - `conc` ist Ihr Werkzeuggürtel für strukturierte Nebenläufigkeit in Go und macht gängige Aufgaben einfacher und sicherer.
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - Begrenzer für Nebenläufigkeit mit Unterstützung für Timeouts, dynamische Priorität und Kontextabbruch von Goroutinen.
- [conexec](https://github.com/ITcathyh/conexec) - Ein Toolkit für Nebenläufigkeit, das hilft, Funktionen effizient und sicher nebenläufig auszuführen. Es unterstützt die Angabe eines Gesamt-Timeouts, um Blockierungen zu vermeiden, und verwendet einen Goroutine-Pool zur Effizienzsteigerung.
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - CyclicBarrier für Golang.
- [execpool](https://github.com/hexdigest/execpool) - Ein Pool rund um exec.Cmd, der vorab eine bestimmte Anzahl von Prozessen startet und bei Bedarf stdin und stdout an sie anbindet. Sehr ähnlich wie FastCGI oder Apache Prefork MPM, funktioniert aber für jeden Befehl.
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - Strukturierte Nebenläufigkeit leicht gemacht.
- [go-accumulator](https://github.com/nar10z/go-accumulator) - Lösung zum Sammeln von Ereignissen und deren anschließender Verarbeitung.
- [go-actor](https://github.com/vladopajic/go-actor) - Eine winzige Bibliothek zum Schreiben nebenläufiger Programme nach dem Aktorenmodell.
- [go-floc](https://github.com/workanator/go-floc) - Goroutinen mühelos orchestrieren.
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - Ausführungsreihenfolge von Goroutinen steuern.
- [go-future](https://github.com/jizhuozhi/go-future) - Eine Future/Promise-Bibliothek mit generischen Kombinatoren und einer DAG-Ausführungs-Engine.
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - Verwalten Sie einen Pool von Goroutinen mit dieser leichtgewichtigen Bibliothek mit einfacher API.
- [go-trylock](https://github.com/subchen/go-trylock) - TryLock-Unterstützung für Read-Write-Locks in Golang.
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - Wie `sync.WaitGroup`, mit Fehlerbehandlung und Steuerung der Nebenläufigkeit.
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Inspiriert vom Java Thread Pool soll Go WorkerPool aufwendige Go-Routinen kontrollieren.
- [goccm](https://github.com/zenthangplus/goccm) - Das Paket Go Concurrency Manager begrenzt die Anzahl der Goroutinen, die gleichzeitig ausgeführt werden dürfen.
- [gohive](https://github.com/loveleshsharma/gohive) - Ein hochperformanter und einfach zu verwendender Goroutine-Pool für Go.
- [gollback](https://github.com/vardius/gollback) - Einfache asynchrone Hilfsfunktionen zur Verwaltung der Ausführung von Closures und Callbacks.
- [goscade](https://github.com/ognick/goscade) - Minimalistischer Lebenszyklus-Orchestrator für Go-Komponenten mit Abhängigkeitsgraphen, Startreihenfolge, Bereitschaftskoordination und sauberem Herunterfahren.
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl ist ein Werkzeug für Prozessverwaltung und Prozessüberwachung zugleich. Ein unendlicher Worker-Pool ermöglicht es Ihnen, den Pool und die Prozesse zu steuern und ihren Status zu überwachen.
- [goworker](https://github.com/benmanns/goworker) - goworker ist ein Go-basierter Hintergrund-Worker.
- [gowp](https://github.com/xxjwxc/gowp) - gowp ist ein Goroutine-Pool zur Begrenzung der Nebenläufigkeit.
- [gpool](https://github.com/Sherifabdlnaby/gpool) - Verwaltet einen in der Größe veränderbaren Pool kontextbewusster Goroutinen, um die Nebenläufigkeit zu begrenzen.
- [grpool](https://github.com/ivpusic/grpool) - Leichtgewichtiger Goroutine-Pool.
- [hands](https://github.com/duanckham/hands) - Ein Prozess-Controller zur Steuerung der Ausführungs- und Rückgabestrategien mehrerer Goroutinen.
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch bietet Funktionen wie `All`, `First`, `Retry`, `Waterfall` usw., die die asynchrone Ablaufsteuerung intuitiver machen.
- [kyoo](https://github.com/dirkaholic/kyoo) - Bietet eine unbegrenzte Job-Queue und nebenläufige Worker-Pools.
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - Direkte Alternative zu `sync/errgroup`, begrenzt auf einen Pool von N Worker-Goroutinen.
- [nursery](https://github.com/arunsworld/nursery) - Strukturierte Nebenläufigkeit in Go.
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight ist eine vollständige Implementierung der Supervision Trees von Erlang.
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - Funktionen parallel ausführen.
- [pond](https://github.com/alitto/pond) - Minimalistischer und hochperformanter Goroutine-Worker-Pool, geschrieben in Go.
- [pool](https://github.com/go-playground/pool) - Begrenzter Consumer-Goroutine- oder unbegrenzter Goroutine-Pool für einfachere Handhabung und Abbruch von Goroutinen.
- [powerlock](https://github.com/donomii/powerlock) - Benannte FIFO-Mutexe mit Kontextabbruch, begrenzten Warteschlangen, Watchdog-Diagnose, pprof-Profilen und Prometheus-Metriken.
- [rill](https://github.com/destel/rill) - Go-Toolkit für saubere, komponierbare, Channel-basierte Nebenläufigkeit.
- [routine](https://github.com/timandy/routine) - `routine` ist eine `ThreadLocal`-Bibliothek für Go. Sie kapselt einige einfach zu verwendende, konkurrenzfreie, hochperformante Schnittstellen für den Zugriff auf den `goroutine`-Kontext und hilft Ihnen, eleganter auf Kontextinformationen von Coroutinen zuzugreifen.
- [routine](https://github.com/x-mod/routine) - Steuerung von Go-Routinen mit Kontext, unterstützt: Main, Go, Pool und einige nützliche Executors.
- [semaphore](https://github.com/kamilsk/semaphore) - Implementierung des Semaphor-Musters mit Timeout für Lock/Unlock-Operationen auf Basis von Channel und Context.
- [semaphore](https://github.com/marusama/semaphore) - Schnelle, in der Größe veränderbare Semaphor-Implementierung auf Basis von CAS (schneller als Channel-basierte Semaphor-Implementierungen).
- [stl](https://github.com/ssgreg/stl) - Software Transactional Locks auf Basis des Nebenläufigkeitskontrollmechanismus Software Transactional Memory (STM).
- [threadpool](https://github.com/shettyh/threadpool) - Threadpool-Implementierung für Golang.
- [tunny](https://github.com/Jeffail/tunny) - Goroutine-Pool für Golang.
- [worker-pool](https://github.com/vardius/worker-pool) - goworker ist ein einfacher asynchroner Worker-Pool für Go.
- [workerpool](https://github.com/gammazero/workerpool) - Goroutine-Pool, der die Nebenläufigkeit der Aufgabenausführung begrenzt, nicht die Anzahl der Aufgaben in der Warteschlange.

**[⬆ Zurück nach oben](#contents)**

## GUI

_Bibliotheken zum Erstellen von GUI-Anwendungen._

_Toolkits_

- [app](https://github.com/murlokswarm/app) - Paket zum Erstellen von Apps mit GO, HTML und CSS. Unterstützt: MacOS, Windows ist in Arbeit.
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - Automatisch generierter Go-Wrapper für [Dear ImGui](https://github.com/ocornut/imgui) über [cimgui](https://github.com/cimgui/cimgui).
- [Cogent Core](https://github.com/cogentcore/core) - Ein Framework zum Erstellen von 2D- und 3D-Apps, die unter macOS, Windows, Linux, iOS, Android und im Web laufen.
- [DarwinKit](https://github.com/progrium/darwinkit) - Native macOS-Anwendungen mit Go erstellen.
- [energy](https://github.com/energye/energy) - Plattformübergreifend auf Basis von LCL (Native System UI Control Library) und CEF (Chromium Embedded Framework) (Windows/ macOS / Linux)
- [fyne](https://github.com/fyne-io/fyne) - Plattformübergreifende native GUIs für Go auf Basis von Material Design. Unterstützt: Linux, macOS, Windows, BSD, iOS und Android.
- [gio](https://gioui.org) - Gio ist eine Bibliothek zum Schreiben plattformübergreifender Immediate-Mode-GUIs in Go. Gio unterstützt alle wichtigen Plattformen: Linux, macOS, Windows, Android, iOS, FreeBSD, OpenBSD und WebAssembly.
- [go-gtk](https://mattn.github.io/go-gtk/) - Go-Bindings für GTK.
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Go-Bindings für Sciter: die einbettbare HTML/CSS/Skript-Engine für moderne Desktop-UI-Entwicklung. Plattformübergreifend.
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Aggregator plattformübergreifender UI-Toolkits für Windows / Linux / Mac. GTK, Cocoa, Windows API
- [gogpu/ui](https://github.com/gogpu/ui) - GPU-beschleunigtes GUI-Toolkit mit 22 Widgets, 3 Designsystemen (Material, Fluent, Cupertino), reaktiven Signalen und ohne CGO (Teil des [GoGPU](https://github.com/gogpu)-Ökosystems).
- [goradd/html5tag](https://github.com/goradd/html5tag) - Bibliothek zur Ausgabe von HTML5-Tags.
- [gotk3](https://github.com/gotk3/gotk3) - Go-Bindings für GTK3.
- [gowd](https://github.com/dtylman/gowd) - Schnelle und einfache Desktop-UI-Entwicklung mit GO, HTML, CSS und NW.js. Plattformübergreifend.
- [proton](https://github.com/CzaxStudio/proton) - Immediate-Mode-GUI-Framework in reinem Go auf Basis von Gio, ohne Cgo-Abhängigkeiten.
- [qt](https://github.com/therecipe/qt) - Qt-Binding für Go (Unterstützung für Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi).
- [Spot](https://github.com/roblillack/spot) - Reaktives, plattformübergreifendes Desktop-GUI-Toolkit.
- [ui](https://github.com/andlabs/ui) - Plattformnative GUI-Bibliothek für Go. Plattformübergreifend.
- [unison](https://github.com/richardwilkes/unison) - Ein einheitliches Toolkit für grafische Benutzererfahrung für Go-Desktopanwendungen. macOS, Windows und Linux werden unterstützt.
- [Wails](https://wails.io) - Desktop-Apps für Mac, Windows und Linux mit HTML-UI unter Verwendung des integrierten HTML-Renderers des Betriebssystems.
- [walk](https://github.com/lxn/walk) - Toolkit für Windows-Anwendungen für Go.
- [webview](https://github.com/zserge/webview) - Plattformübergreifendes Webview-Fenster mit einfachen bidirektionalen JavaScript-Bindings (Windows / macOS / Linux).

_Interaktion_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - Go-Bindings für die C-Bibliothek libappindicator3.
- [gogpu/systray](https://github.com/gogpu/systray) - Systemtray-Bibliothek in reinem Go für Windows, macOS und Linux, ohne CGO (Teil des [GoGPU](https://github.com/gogpu)-Ökosystems).
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Bibliothek für OSX-Desktop-Benachrichtigungen für Go.
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - OSX-Bibliothek, die über beliebige (erweiterbare) Aktivitäten auf Ihrem Rechner benachrichtigt.
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - OSX-Benachrichtigungen über Ruhezustand/Aufwachen in Golang.
- [robotgo](https://github.com/go-vgo/robotgo) - Native, plattformübergreifende GUI-Systemautomatisierung in Go. Steuert Maus, Tastatur und mehr.
- [systray](https://github.com/getlantern/systray) - Plattformübergreifende Go-Bibliothek zum Platzieren eines Symbols und Menüs im Infobereich.
- [trayhost](https://github.com/shurcooL/trayhost) - Plattformübergreifende Go-Bibliothek zum Platzieren eines Symbols in der Taskleiste des Host-Betriebssystems.
- [zenity](https://github.com/ncruces/zenity) - Plattformübergreifende Go-Bibliothek und CLI zum Erstellen einfacher Dialoge, die grafisch mit dem Benutzer interagieren.

**[⬆ Zurück nach oben](#contents)**

## Hardware

_Bibliotheken, Werkzeuge und Tutorials für die Interaktion mit Hardware._

- [arduino-cli](https://github.com/arduino/arduino-cli) - Offizielle Arduino-CLI und -Bibliothek. Kann eigenständig laufen oder in größere Go-Projekte integriert werden.
- [emgo](https://github.com/ziutek/emgo) - Go-ähnliche Sprache zur Programmierung eingebetteter Systeme (z. B. STM32-MCU).
- [ghw](https://github.com/jaypipes/ghw) - Golang-Bibliothek zur Hardwareerkennung und -inspektion.
- [go-osc](https://github.com/hypebeast/go-osc) - Open-Sound-Control-Bindings (OSC) für Go.
- [go-rpio](https://github.com/stianeikeland/go-rpio) - GPIO für Go, benötigt kein cgo.
- [goroslib](https://github.com/aler9/goroslib) - Robot-Operating-System-Bibliothek (ROS) für Go.
- [joystick](https://github.com/0xcafed00d/joystick) - Eine Polling-API zum Auslesen des Zustands eines angeschlossenen Joysticks.
- [moody](https://github.com/dinakars777/moody) - Daemon für Hardware-Ereignis-Persönlichkeiten für macOS. Überwacht USB-, Ladegerät-, Deckel- und andere Hardware-Ereignisse und reagiert mit anpassbaren Persönlichkeiten.
- [sysinfo](https://github.com/zcalusic/sysinfo) - Eine Bibliothek in reinem Go, die Systeminformationen zu Linux-OS, Kernel und Hardware bereitstellt.

**[⬆ Zurück nach oben](#contents)**

## Bilder

_Bibliotheken zur Bearbeitung von Bildern._

- [bild](https://github.com/anthonynsimon/bild) - Sammlung von Bildverarbeitungsalgorithmen in reinem Go.
- [bimg](https://github.com/h2non/bimg) - Kleines Paket für schnelle und effiziente Bildverarbeitung mit libvips.
- [cameron](https://github.com/aofei/cameron) - Ein Avatar-Generator für Go.
- [canvas](https://github.com/tdewolff/canvas) - Vektorgrafiken als PDF, SVG oder Rasterbild.
- [color-extractor](https://github.com/marekm4/color-extractor) - Extraktor für dominante Farben ohne externe Abhängigkeiten.
- [darkroom](https://github.com/gojek/darkroom) - Ein Bild-Proxy mit austauschbaren Speicher-Backends und Bildverarbeitungs-Engines mit Fokus auf Geschwindigkeit und Ausfallsicherheit.
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - API zur Optimierung und Transformation von Bildern mit libvips, bereitstellbar auf AWS Lambda und CloudFront.
- [geopattern](https://github.com/pravj/geopattern) - Erzeugt schöne generative Bildmuster aus einer Zeichenkette.
- [gg](https://github.com/fogleman/gg) - 2D-Rendering in reinem Go.
- [gift](https://github.com/disintegration/gift) - Paket mit Bildverarbeitungsfiltern.
- [gltf](https://github.com/qmuntal/gltf) - Effizienter und robuster Reader, Writer und Validator für glTF 2.0.
- [go-cairo](https://github.com/ungerik/go-cairo) - Go-Binding für die Grafikbibliothek cairo.
- [go-gd](https://github.com/bolknote/go-gd) - Go-Binding für die GD-Bibliothek.
- [go-nude](https://github.com/koyachi/go-nude) - Nacktheitserkennung mit Go.
- [go-qrcode](https://github.com/yeqown/go-qrcode) - QR-Codes mit individuellen Stilen erzeugen, mit Anpassungen von Farbe, Blockgröße, Form und Symbolen.
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Portierung der Bibliothek webcolors von Python nach Go.
- [go-webp](https://github.com/kolesa-team/go-webp) - Bibliothek zum Kodieren und Dekodieren von WebP-Bildern mit libwebp.
- [gocv](https://github.com/hybridgroup/gocv) - Go-Paket für Computer Vision mit OpenCV 3.3+.
- [gogpu/gg](https://github.com/gogpu/gg) - GPU-beschleunigtes 2D-Rendering mit Canvas-ähnlicher API, ohne CGO (Teil des [GoGPU](https://github.com/gogpu)-Grafikökosystems in reinem Go).
- [goimagehash](https://github.com/corona10/goimagehash) - Go-Paket für perzeptuelles Bild-Hashing.
- [goimghdr](https://github.com/corona10/goimghdr) - Das imghdr-Modul für Go ermittelt den Typ des in einer Datei enthaltenen Bildes.
- [govatar](https://github.com/o1egl/govatar) - Bibliothek und CMD-Werkzeug zum Erzeugen lustiger Avatare.
- [govips](https://github.com/davidbyttow/govips) - Eine blitzschnelle Bibliothek zur Bildverarbeitung und Größenänderung für Go.
- [gowitness](https://github.com/sensepost/gowitness) - Screenshots von Webseiten mit Go und Headless Chrome auf der Kommandozeile.
- [gridder](https://github.com/shomali11/gridder) - Eine rasterbasierte 2D-Grafikbibliothek.
- [image2ascii](https://github.com/qeesung/image2ascii) - Bilder in ASCII konvertieren.
- [imagick](https://github.com/gographics/imagick) - Go-Binding für die MagickWand-C-API von ImageMagick.
- [imaginary](https://github.com/h2non/imaginary) - Schneller und einfacher HTTP-Microservice zur Größenänderung von Bildern.
- [imaging](https://github.com/disintegration/imaging) - Einfaches Go-Paket zur Bildverarbeitung.
- [imagor](https://github.com/cshum/imagor) - Schneller, sicherer Bildverarbeitungsserver und Go-Bibliothek, auf Basis von libvips.
- [img](https://github.com/hawx/img) - Auswahl an Werkzeugen zur Bildbearbeitung.
- [ln](https://github.com/fogleman/ln) - 3D-Strichzeichnungs-Rendering in Go.
- [mergi](https://github.com/noelyahan/mergi) - Werkzeug und Go-Bibliothek zur Bildbearbeitung (Zusammenführen, Zuschneiden, Größe ändern, Wasserzeichen, Animieren).
- [mort](https://github.com/aldor007/mort) - Speicher- und Bildverarbeitungsserver, geschrieben in Go.
- [mpo](https://github.com/donatj/mpo) - Decoder und Konvertierungswerkzeug für MPO-3D-Fotos.
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - Nativer WebP-Encoder in Go ohne externe Abhängigkeiten.
- [picfit](https://github.com/thoas/picfit) - Ein Server zur Größenänderung von Bildern, geschrieben in Go.
- [pt](https://github.com/fogleman/pt) - Path-Tracing-Engine, geschrieben in Go.
- [scout](https://github.com/jonoton/scout) - Scout ist eine eigenständige Open-Source-Softwarelösung für DIY-Videoüberwachung.
- [smartcrop](https://github.com/muesli/smartcrop) - Findet gute Bildausschnitte für beliebige Bilder und Zuschnittgrößen.
- [steganography](https://github.com/auyer/steganography) - Bibliothek in reinem Go für LSB-Steganografie.
- [stegify](https://github.com/DimitarPetrov/stegify) - Go-Werkzeug für LSB-Steganografie, das beliebige Dateien in einem Bild verstecken kann.
- [svgo](https://github.com/ajstarks/svgo) - Go-Bibliothek zur SVG-Erzeugung.
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs ändert die Größe von Bildern und optimiert sie für das Web mit Formaten der nächsten Generation.
- [webp-server](https://github.com/mehdipourfar/webp-server) - Einfacher und minimaler Bildserver, der Bilder speichern, in der Größe ändern, konvertieren und cachen kann.

**[⬆ Zurück nach oben](#contents)**

## IoT (Internet der Dinge)

_Bibliotheken zur Programmierung von IoT-Geräten._

- [connectordb](https://github.com/connectordb/connectordb) - Open-Source-Plattform für Quantified Self und IoT.
- [devices](https://github.com/goiot/devices) - Suite von Bibliotheken für IoT-Geräte, experimentell für x/exp/io.
- [ekuiper](https://github.com/lf-edge/ekuiper) - Leichtgewichtige Engine zur Datenstromverarbeitung für das IoT-Edge.
- [eywa](https://github.com/xcodersun/eywa) - Project Eywa ist im Wesentlichen ein Verbindungsmanager, der verbundene Geräte verfolgt.
- [flogo](https://github.com/tibcosoftware/flogo) - Project Flogo ist ein Open-Source-Framework für IoT-Edge-Apps und -Integration.
- [gatt](https://github.com/paypal/gatt) - Gatt ist ein Go-Paket zum Erstellen von Bluetooth-Low-Energy-Peripheriegeräten.
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot ist ein Framework für Robotik, Physical Computing und das Internet der Dinge.
- [huego](https://github.com/amimof/huego) - Eine umfangreiche Philips-Hue-Client-Bibliothek für Go.
- [iot](https://github.com/vaelen/iot/) - IoT ist ein einfaches Framework zur Implementierung eines Google-IoT-Core-Geräts.
- [periph](https://periph.io/) - Peripherie-I/O zur Anbindung an Low-Level-Funktionen von Boards.
- [rulego](https://github.com/rulego/rulego) - RuleGo ist eine leichtgewichtige, hochperformante, eingebettete, orchestrierbare, komponentenbasierte Regel-Engine für das IoT-Edge.
- [sensorbee](https://github.com/sensorbee/sensorbee) - Leichtgewichtige Stream-Processing-Engine für IoT.
- [shifu](https://github.com/Edgenesis/shifu) - Kubernetes-natives IoT-Entwicklungsframework.
- [smart-home](https://github.com/e154/smart-home) - Softwarepaket für IoT-Automatisierung.

**[⬆ Zurück nach oben](#contents)**

## Job-Scheduler

_Bibliotheken zur Planung von Jobs._

- [cdule](https://github.com/deepaksinghvi/cdule) - Job-Scheduler-Bibliothek mit Datenbankunterstützung
- [cheek](https://github.com/bart6114/cheek) - Ein einfacher Crontab-ähnlicher Scheduler, der einen KISS-Ansatz für die Jobplanung verfolgt.
- [clockwerk](https://github.com/onatm/clockwerk) - Go-Paket zur Planung periodischer Jobs mit einer einfachen, flüssigen Syntax.
- [cronticker](https://github.com/krayzpipes/cronticker) - Eine Ticker-Implementierung mit Unterstützung für Cron-Zeitpläne.
- [go-cron](https://github.com/rk/go-cron) - Einfache Cron-Bibliothek für Go, die Closures oder Funktionen in unterschiedlichen Intervallen ausführen kann – von einmal pro Sekunde bis einmal pro Jahr an einem bestimmten Datum und zu einer bestimmten Uhrzeit. Hauptsächlich für Webanwendungen und lang laufende Daemons.
- [go-cron](https://github.com/netresearch/go-cron) - Cron-Job-Scheduler mit Aktualisierung von Zeitplänen zur Laufzeit, Kontext pro Eintrag, Resilienz-Middleware (Retry, Circuit Breaker, Ratenbegrenzung) und Observability-Hooks; Nachfolger von robfig/cron.
- [go-job](https://github.com/cybergarage/go-job) - Eine flexible und erweiterbare Bibliothek zur Planung und Ausführung von Jobs für Go.
- [go-quartz](https://github.com/reugn/go-quartz) - Einfache Scheduling-Bibliothek für Go ohne Abhängigkeiten.
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - Job-Scheduler mit Unterstützung für Standard-Cron-Ausdrücke, benutzerdefinierte Deskriptoren, Intervalle und Aufgabenabhängigkeiten.
- [gocron](https://github.com/go-co-op/gocron) - Einfache und flüssige Jobplanung in Go. Dies ist ein aktiv gepflegter Fork von [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron).
- [goflow](https://github.com/fieldryand/goflow) - Ein einfacher, aber leistungsstarker DAG-Scheduler mit Dashboard.
- [gron](https://github.com/roylee0704/gron) - Definieren Sie zeitbasierte Aufgaben über eine einfache Go-API, und der Scheduler von Gron führt sie entsprechend aus.
- [gronx](https://github.com/adhocore/gronx) - Parser für Cron-Ausdrücke, Task-Runner und Daemon, der Crontab-ähnliche Aufgabenlisten verarbeitet.
- [JobRunner](https://github.com/bamzi/jobrunner) - Intelligenter und funktionsreicher Cron-Job-Scheduler mit integrierter Job-Warteschlange und Live-Überwachung.
- [leprechaun](https://github.com/kilgaloon/leprechaun) - Job-Scheduler mit Unterstützung für Webhooks, Crons und klassische Zeitplanung.
- [ofelia](https://github.com/netresearch/ofelia) - Docker-Job-Scheduler (Crontab für Docker); Fork von mcuadros/ofelia, der eine Web-UI, Job-Abhängigkeiten, Wiederholungen und Job-Persistenz hinzufügt.
- [pending](https://github.com/kahoon/pending) - ID-basierter, entprellter Task-Scheduler für verzögerte Aufgaben mit Abbruch, sauberem Herunterfahren und optionalen Nebenläufigkeitsgrenzen.
- [sched](https://github.com/romshark/sched) - Ein Job-Scheduler mit der Fähigkeit, die Zeit vorzuspulen.
- [scheduler](https://github.com/carlescere/scheduler) - Planung von Cronjobs leicht gemacht.
- [scheduler](https://github.com/yuseferi/scheduler) - Go-nativer verteilter Job-Scheduler mit verzögerten Aufgaben, gebündelter Redis-Koordination, Wiederholungen, Lease-basierter Wiederherstellung und versionierter Partitionierung von Warteschlangen.
- [tasks](https://github.com/madflojo/tasks) - Ein einfach zu verwendender In-Process-Scheduler für wiederkehrende Aufgaben in Go.
- [tickstem/cron](https://github.com/tickstem/cron) - Go-Client zur Planung von HTTP-Cronjobs, mit Ausführungshistorie, Fehlerbenachrichtigungen und tsk-local zum Testen von Handlern ohne Live-Zugangsdaten.
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - Go-Client für Heartbeat-Überwachung nach dem Totmannschalter-Prinzip: Nach jedem Joblauf eine URL anpingen und per E-Mail benachrichtigt werden, wenn keine Pings mehr eintreffen.

**[⬆ Zurück nach oben](#contents)**

## JSON

_Bibliotheken für die Arbeit mit JSON._

- [ajson](https://github.com/spyzhov/ajson) - Abstraktes JSON für Golang mit JSONPath-Unterstützung.
- [ask](https://github.com/simonnilsson/ask) - Einfacher Zugriff auf verschachtelte Werte in Maps und Slices. Funktioniert in Kombination mit encoding/json und anderen Paketen, die beliebige Daten in Go-Datentypen „unmarshallen“.
- [dynjson](https://github.com/cocoonspace/dynjson) - Vom Client anpassbare JSON-Formate für dynamische APIs.
- [ej](https://github.com/lucassscaravelli/ej) - JSON prägnant aus verschiedenen Quellen schreiben und lesen.
- [epoch](https://github.com/vtopc/epoch) - Enthält Primitive zum Marshalling/Unmarshalling von Unix-Zeitstempeln/Epoch in den bzw. aus dem integrierten Typ time.Time in JSON.
- [fastjson](https://github.com/valyala/fastjson) - Schneller JSON-Parser und -Validator für Go. Keine benutzerdefinierten Structs, keine Codegenerierung, keine Reflection.
- [gabs](https://github.com/Jeffail/gabs) - Zum Parsen, Erstellen und Bearbeiten von unbekanntem oder dynamischem JSON in Go.
- [gjo](https://github.com/skanehira/gjo) - Kleines Hilfsprogramm zum Erstellen von JSON-Objekten.
- [GJSON](https://github.com/tidwall/gjson) - Einen JSON-Wert mit einer Codezeile abrufen.
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError soll es ermöglichen, auf einfache Weise JSON-Fehlerantworten zu erstellen, die der JsonApi-Spezifikation folgen.
- [go-respond](https://github.com/nicklaw5/go-respond) - Go-Paket zur Verarbeitung gängiger HTTP-JSON-Antworten.
- [gojmapr](https://github.com/limiu82214/gojmapr) - Ein einfaches Struct per JSON-Pfad aus komplexem JSON gewinnen.
- [gojq](https://github.com/elgs/gojq) - JSON-Abfragen in Golang.
- [gojson](https://github.com/ChimeraCoder/gojson) - Go-Struct-Definitionen (Golang) automatisch aus Beispiel-JSON generieren.
- [htmljson](https://github.com/nikolaydubina/htmljson) - Umfangreiches Rendering von JSON als HTML in Go.
- [JayDiff](https://github.com/yazgazan/jaydiff) - JSON-Diff-Werkzeug, geschrieben in Go.
- [jettison](https://github.com/wI2L/jettison) - Schneller und flexibler JSON-Encoder für Go.
- [jscan](https://github.com/romshark/jscan) - Hochperformanter, allokationsfreier JSON-Iterator.
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - JSON in Go-Structs konvertieren.
- [JSON-to-Proto](https://json-to-proto.github.io/) - JSON online in Protobuf konvertieren.
- [json2go](https://github.com/m-zajac/json2go) - Fortgeschrittene Konvertierung von JSON in Go-Structs. Bietet ein Paket, das mehrere JSON-Dokumente parsen und ein Struct erstellen kann, das zu allen passt.
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - Go-Bindings auf Basis der Fehlerreferenz von JSON API.
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - Direkter Ersatz für `encoding/json`, der eingefärbtes JSON ausgibt.
- [jsondiff](https://github.com/wI2L/jsondiff) - JSON-Diff-Bibliothek für Go auf Basis von RFC6902 (JSON Patch).
- [jsonf](https://github.com/miolini/jsonf) - Konsolenwerkzeug zur hervorgehobenen Formatierung von JSON und zum Abrufen per Struct-Abfrage.
- [jsongo](https://github.com/ricardolonga/jsongo) - Fluent API zur einfacheren Erstellung von JSON-Objekten.
- [jsonhal](https://github.com/RichardKnop/jsonhal) - Einfaches Go-Paket, um benutzerdefinierte Structs in HAL-kompatible JSON-Antworten zu marshallen.
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - JSON-Bibliothek mit einfachen Handlern, mit denen Sie JSON bequem aus verschiedenen Quellen lesen und schreiben können.
- [jsonic](https://github.com/sinhashubham95/jsonic) - Hilfsmittel zum typsicheren Verarbeiten und Abfragen von JSON, ohne Structs zu definieren.
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - Eine schnelle und praktische Bibliothek für unstrukturierte JSON-Daten, die `encoding/json` ersetzt.
- [jzon](https://github.com/zerosnake0/jzon) - JSON-Bibliothek mit standardkompatibler API und standardkompatiblem Verhalten.
- [kazaam](https://github.com/Qntfy/kazaam) - API für beliebige Transformationen von JSON-Dokumenten.
- [mapslice-json](https://github.com/mickep76/mapslice-json) - Go-MapSlice für geordnetes Marshalling/Unmarshalling von Maps in JSON.
- [marshmallow](https://github.com/PerimeterX/marshmallow) - Performantes JSON-Unmarshalling für flexible Anwendungsfälle.
- [mp](https://github.com/sanbornm/mp) - Einfacher CLI-E-Mail-Parser. Derzeit liest er von stdin und gibt JSON aus.
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go ist ein hochperformanter Parser mit einer Vielzahl zusätzlicher JSON-Werkzeuge, einschließlich JSONPath.
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Einfacher JSON-Parser mit bedingter Validierung über Golang-Struct-Feld-Tags.
- [silentjson](https://github.com/GenshIv/silentjson) - Allokationsfreier Scanner und Splitter für JSON-Grenzen, der AVX2-SIMD-Instruktionen nutzt.
- [SJSON](https://github.com/tidwall/sjson) - Einen JSON-Wert mit einer Codezeile setzen.
- [ujson](https://github.com/olvrng/ujson) - Schneller und minimaler JSON-Parser und -Transformer, der mit unstrukturiertem JSON arbeitet.
- [vjson](https://github.com/miladibra10/vjson) - Go-Paket zur Validierung von JSON-Objekten durch Deklaration eines JSON-Schemas mit Fluent API.

**[⬆ Zurück nach oben](#contents)**

## Protokollierung

_Bibliotheken zum Erzeugen von und Arbeiten mit Logdateien._

- [caarlos0/log](https://github.com/caarlos0/log) - Farbenfroher CLI-Logger.
- [distillog](https://github.com/amoghe/distillog) - Destilliertes Logging mit Levels (stellen Sie es sich als Standardbibliothek + Log-Levels vor).
- [glg](https://github.com/kpango/glg) - glg ist eine einfache und schnelle Logging-Bibliothek mit Levels für Go.
- [glo](https://github.com/lajosbencz/glo) - Von PHP Monolog inspirierte Logging-Funktionalität mit identischen Schweregraden.
- [glog](https://github.com/golang/glog) - Ausführungslogs mit Levels für Go.
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - Einfacher Writer, der Logdateien automatisch anhand von aktuellem Datum und Uhrzeit rotiert, wie cronolog.
- [go-log](https://github.com/pieterclaerhout/go-log) - Eine Logging-Bibliothek mit Stacktraces, Objekt-Dumps und optionalen Zeitstempeln.
- [go-log](https://github.com/subchen/go-log) - Einfaches und konfigurierbares Logging in Go, mit Levels, Formatierern und Writern.
- [go-log](https://github.com/siddontang/go-log) - Log-Bibliothek mit Unterstützung für Levels und mehrere Handler.
- [go-log](https://github.com/ian-kent/go-log) - Log4j-Implementierung in Go.
- [go-log4g](https://github.com/go-log4g/core) - Log4g bietet Konfiguration und Pattern-Layouts im Log4j-Stil für die Standard-Logging-Fassade log/slog von Go.
- [go-logger](https://github.com/apsdehal/go-logger) - Einfacher Logger für Go-Programme, mit Level-Handlern.
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - Append-only, Hash-verketteter, optional Ed25519-signierter slog-Handler mit Offline-Verifizierung von Manipulationen.
- [gone/log](https://github.com/One-com/gone/tree/master/log) - Schnelle, erweiterbare, voll ausgestattete Log-Bibliothek, quellkompatibel mit der Standardbibliothek.
- [gslog](https://github.com/maguro/gslog) - Google-Cloud-Logging-Handler für log/slog, mit OpenTelemetry-Trace und -Baggage sowie Kubernetes-podinfo-Labels.
- [httpretty](https://github.com/henvic/httpretty) - Gibt Ihre regulären HTTP-Anfragen zum Debuggen hübsch formatiert im Terminal aus (ähnlich wie http.DumpRequest).
- [journald](https://github.com/ssgreg/journald) - Go-Implementierung der nativen Logging-API von systemd Journal.
- [kemba](https://github.com/clok/kemba) - Ein winziges Debug-Logging-Werkzeug, inspiriert von [debug](https://github.com/visionmedia/debug), ideal für CLI-Werkzeuge und -Anwendungen.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - Eine TUI zum Lesen und Filtern von Logs aus journalctl, dem Dateisystem, Docker- und Podman-Containern sowie Kubernetes-Pods.
- [log](https://github.com/aerogo/log) - Ein O(1)-Logging-System, mit dem Sie ein Log mit mehreren Writern verbinden können (z. B. stdout, eine Datei und eine TCP-Verbindung).
- [log](https://github.com/apex/log) - Paket für strukturiertes Logging für Go.
- [log](https://github.com/go-playground/log) - Einfaches, konfigurierbares und skalierbares strukturiertes Logging für Go.
- [log](https://github.com/teris-io/log) - Strukturiertes Log-Interface für Go, das die Logging-Fassade sauber von ihrer Implementierung trennt.
- [log](https://github.com/heartwilltell/log) - Einfacher Logging-Wrapper mit Levels um das Standardpaket log.
- [log](https://github.com/no-src/log) - Ein einfaches, sofort einsatzbereites Logging-Framework.
- [log15](https://github.com/inconshreveable/log15) - Einfaches, leistungsstarkes Logging für Go.
- [logdump](https://github.com/ewwwwwqm/logdump) - Paket für mehrstufiges Logging.
- [logex](https://github.com/chzyer/logex) - Golang-Log-Bibliothek, unterstützt Tracking und Levels, umhüllt die Standard-Log-Bibliothek.
- [logger](https://github.com/azer/logger) - Minimalistische Logging-Bibliothek für Go.
- [logo](https://github.com/mbndr/logo) - Golang-Logger für verschiedene konfigurierbare Writer.
- [logrus](https://github.com/Sirupsen/logrus) - Strukturierter Logger für Go.
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - `io.Writer`-Implementierung mit dem Logger [logrus](https://github.com/sirupsen/logrus).
- [logrusly](https://github.com/sebest/logrusly) - [logrus](https://github.com/sirupsen/logrus)-Plug-in zum Senden von Fehlern an [Loggly](https://www.loggly.com/).
- [logutils](https://github.com/hashicorp/logutils) - Hilfsmittel für etwas besseres Logging in Go (Golang), die den Standard-Logger erweitern.
- [logxi](https://github.com/mgutz/logxi) - Logger für 12-Factor-Apps, der schnell ist und glücklich macht.
- [lumberjack](https://github.com/natefinch/lumberjack) - Einfacher rotierender Logger, implementiert io.WriteCloser.
- [mlog](https://github.com/jbrodriguez/mlog) - Einfaches Logging-Modul für Go mit 5 Levels, optionaler rotierender Logdatei und Ausgabe nach stdout/stderr.
- [noodlog](https://github.com/gyozatech/noodlog) - Parametrisierte JSON-Logging-Bibliothek, mit der Sie sensible Daten verschleiern und beliebige Inhalte marshallen können. Keine ausgegebenen Pointer statt Werten mehr und keine Escape-Zeichen für JSON-Strings.
- [onelog](https://github.com/francoispqt/onelog) - Onelog ist ein kinderleichter, aber sehr effizienter JSON-Logger. Er ist in allen Szenarien der schnellste verfügbare JSON-Logger. Außerdem gehört er zu den Loggern mit den wenigsten Allokationen.
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - Hochperformantes Logging mit Unterstützung für Schweregrade, Kategorisierung und Filterung. Kann gefilterte Log-Nachrichten an verschiedene Ziele senden (z. B. Konsole, Netzwerk, E-Mail).
- [phuslu/log](https://github.com/phuslu/log) - Hochperformantes strukturiertes Logging.
- [pp](https://github.com/k0kubun/pp) - Farbiger Pretty-Printer für die Sprache Go.
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter ist eine `io.Writer`-Implementierung mit automatischer Rotation und mehreren Richtlinien für die Rotation von Logdateien.
- [seelog](https://github.com/cihub/seelog) - Logging-Funktionalität mit flexibler Verteilung, Filterung und Formatierung.
- [sentry-go](https://github.com/getsentry/sentry-go) - Sentry-SDK für Go. Hilft beim Überwachen und Verfolgen von Fehlern mit Echtzeitwarnungen und Performance-Monitoring.
- [slf4g](https://github.com/echocat/slf4g) - Simple Logging Facade for Golang: einfaches strukturiertes Logging – aber leistungsstark, erweiterbar und anpassbar, mit zahlreichen Erkenntnissen aus Jahrzehnten bisheriger Logging-Frameworks.
- [slog](https://github.com/gookit/slog) - Leichtgewichtiger, konfigurierbarer, erweiterbarer Logger für Go.
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - Konfiguriert den log/slog-Logger der Standardbibliothek über Umgebungsvariablen: Level, Format, Quellposition und Aufteilung auf stdout/stderr.
- [slog-datadog](https://github.com/samber/slog-datadog) - Ein slog-Handler für Datadog.
- [slog-formatter](https://github.com/samber/slog-formatter) - Gängige Formatierer für slog und Hilfsmittel, um eigene zu erstellen.
- [slog-logrus](https://github.com/samber/slog-logrus) - Ein slog-Handler für Logrus.
- [slog-loki](https://github.com/samber/slog-loki) - Ein slog-Handler für Grafana Loki.
- [slog-multi](https://github.com/samber/slog-multi) - Verkettung von slog.Handler (Pipeline, Fanout …).
- [slog-sentry](https://github.com/samber/slog-sentry) - Ein slog-Handler für Sentry.
- [slog-slack](https://github.com/samber/slog-slack) - Ein slog-Handler für Slack.
- [slog-zap](https://github.com/samber/slog-zap) - Ein slog-Handler für Zap.
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Ein slog-Handler für Zerolog.
- [slogor](https://gitlab.com/greyxor/slogor) - Ein farbenfroher slog-Handler.
- [spew](https://github.com/davecgh/go-spew) - Implementiert einen tiefgehenden Pretty-Printer für Go-Datenstrukturen zur Unterstützung beim Debuggen.
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Ein Logger für Go-SQL-Datenbanktreiber, ohne die bestehende Verwendung von \*sql.DB aus der Standardbibliothek zu ändern.
- [stdlog](https://github.com/alexcesaro/log) - Stdlog ist eine objektorientierte Bibliothek, die Logging mit Levels bereitstellt. Sie ist sehr nützlich für Cronjobs.
- [structy/log](https://github.com/structy/log) - Ein einfach zu verwendendes Log-System, minimalistisch, aber mit Funktionen zum Debuggen und zur Unterscheidung von Nachrichten.
- [tail](https://github.com/hpcloud/tail) - Go-Paket, das die Funktionen des BSD-Programms tail nachbilden soll.
- [timberjack](https://github.com/DeRuina/timberjack) - Rotierender Logger mit größenbasierter, zeitbasierter und geplanter uhrzeitbasierter Rotation, mit Unterstützung für Komprimierung und Bereinigung.
- [tint](https://github.com/lmittmann/tint) - Ein slog.Handler, der eingefärbte Logs schreibt.
- [xlog](https://github.com/xfxdev/xlog) - Plugin-Architektur und flexibles Log-System für Go, mit Level-Steuerung, mehreren Log-Zielen und benutzerdefiniertem Log-Format.
- [xlog](https://github.com/rs/xlog) - Strukturierter Logger für `net/context`-fähige HTTP-Handler mit flexibler Verteilung.
- [xylog](https://github.com/xybor-x/xylog) - Logging mit Levels und Struktur, dynamische Felder, hohe Performance, Zonenverwaltung, einfache Konfiguration und lesbare Syntax.
- [yell](https://github.com/jfcg/yell) - Noch eine weitere minimalistische Logging-Bibliothek.
- [zap](https://github.com/uber-go/zap) - Schnelles, strukturiertes Logging mit Levels in Go.
- [zax](https://github.com/yuseferi/zax) - Integriert Context in den Zap-Logger, was zu mehr Flexibilität beim Logging in Go führt.
- [zerolog](https://github.com/rs/zerolog) - Allokationsfreier JSON-Logger.
- [zkits-logger](https://github.com/edoger/zkits-logger) - Ein leistungsstarker JSON-Logger ohne Abhängigkeiten.
- [zl](https://github.com/nkmr-jp/zl) - Logger auf Basis von zap mit hoher Developer Experience. Er bietet umfangreiche Funktionalität, ist aber einfach zu konfigurieren.

**[⬆ Zurück nach oben](#contents)**

## Maschinelles Lernen

_Bibliotheken für maschinelles Lernen._

- [Anneal](https://github.com/georgebuilds/anneal) - Machine-Learning-Compiler in Go, eine von Grund auf neu geschriebene Portierung von tinygrad mit WebGPU-Backend.
- [bayesian](https://github.com/jbrukh/bayesian) - Naive Bayes-Klassifikation für Golang.
- [born](https://github.com/born-ml/born) - Deep-Learning-Framework, inspiriert von Burn (Rust), mit Autograd, typsicheren Tensoren und GPU-Beschleunigung ohne CGO.
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - Schnelle, skalierbare, hochperformante Bibliothek für Gradient Boosting auf Entscheidungsbäumen. Golang mit Cgo für blitzschnelle Inferenz von CatBoost-Modellen.
- [CloudForest](https://github.com/ryanbressler/CloudForest) - Schnelle, flexible, multithreaded Ensembles von Entscheidungsbäumen für maschinelles Lernen in reinem Go.
- [datatrax](https://github.com/rbmuller/datatrax) - Toolkit für Data Engineering und klassisches ML mit Batch-Verarbeitung, Typumwandlung und 7 Algorithmen in reinem Go ohne Abhängigkeiten.
- [ddt](https://github.com/sgrodriguez/ddt) - Dynamischer Entscheidungsbaum: Bäume mit anpassbaren Regeln erstellen.
- [eaopt](https://github.com/MaxHalford/eaopt) - Eine Bibliothek für evolutionäre Optimierung.
- [evoli](https://github.com/khezen/evoli) - Bibliothek für genetische Algorithmen und Partikelschwarmoptimierung.
- [fonet](https://github.com/Fontinalis/fonet) - Eine in Go geschriebene Bibliothek für tiefe neuronale Netze.
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - Go-Implementierung der Clustering-Algorithmen k-modes und k-prototypes.
- [go-deep](https://github.com/patrikeh/go-deep) - Eine funktionsreiche Bibliothek für neuronale Netze in Go.
- [go-fann](https://github.com/white-pony/go-fann) - Go-Bindings für die Bibliothek Fast Artificial Neural Networks (FANN).
- [go-galib](https://github.com/thoj/go-galib) - Bibliothek für genetische Algorithmen, geschrieben in Go/Golang.
- [go-pr](https://github.com/daviddengcn/go-pr) - Paket zur Mustererkennung in Go.
- [gobrain](https://github.com/goml/gobrain) - Neuronale Netze, geschrieben in Go.
- [godist](https://github.com/e-dard/godist) - Verschiedene Wahrscheinlichkeitsverteilungen und zugehörige Methoden.
- [goga](https://github.com/tomcraven/goga) - Bibliothek für genetische Algorithmen für Go.
- [GoLearn](https://github.com/sjwhitworth/golearn) - Allgemeine Bibliothek für maschinelles Lernen für Go.
- [GoMind](https://github.com/surenderthakran/gomind) - Eine einfache Bibliothek für neuronale Netze in Go.
- [goml](https://github.com/cdipaolo/goml) - Online-Machine-Learning in Go.
- [GoMLX](https://github.com/gomlx/gomlx) - Ein beschleunigtes Machine-Learning-Framework für Go.
- [gonet](https://github.com/dathoangnd/gonet) - Neuronales Netz für Go.
- [Goptuna](https://github.com/c-bata/goptuna) - Framework für Bayes'sche Optimierung von Black-Box-Funktionen, geschrieben in Go. Alles wird optimiert.
- [goRecommend](https://github.com/timkaye11/goRecommend) - Bibliothek für Empfehlungsalgorithmen, geschrieben in Go.
- [gorgonia](https://github.com/gorgonia/gorgonia) - Graphbasierte Rechenbibliothek wie Theano für Go, die Primitive zum Erstellen verschiedener Algorithmen für maschinelles Lernen und neuronale Netze bereitstellt.
- [gorse](https://github.com/zhenghaoz/gorse) - Ein Offline-Empfehlungssystem-Backend auf Basis von kollaborativem Filtern, geschrieben in Go.
- [goscore](https://github.com/asafschers/goscore) - Go-Scoring-API für PMML.
- [gosseract](https://github.com/otiai10/gosseract) - Go-Paket für OCR (optische Zeichenerkennung) unter Verwendung der C++-Bibliothek Tesseract.
- [hugot](https://github.com/knights-analytics/hugot) - Huggingface-Transformer-Pipelines für Golang mit onnxruntime.
- [libsvm](https://github.com/datastream/libsvm) - Golang-Version von libsvm, ein abgeleitetes Werk auf Basis von LIBSVM 3.14.
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Ein CLI-Werkzeug zum Transpilieren trainierter klassischer ML-Modelle in nativen Go-Code ohne Abhängigkeiten, geschrieben in Python mit Unterstützung für die Sprache Go.
- [neural-go](https://github.com/schuyler/neural-go) - Mehrschichtiges Perzeptron-Netz, implementiert in Go, mit Training über Backpropagation.
- [ocrserver](https://github.com/otiai10/ocrserver) - Ein einfacher OCR-API-Server, wirklich einfach mit Docker und Heroku bereitzustellen.
- [onnx-go](https://github.com/owulveryck/onnx-go) - Go-Schnittstelle zu Open Neural Network Exchange (ONNX).
- [probab](https://github.com/ThePaw/probab) - Wahrscheinlichkeitsverteilungsfunktionen. Bayes'sche Inferenz. Geschrieben in reinem Go.
- [randomforest](https://github.com/malaschitz/randomForest) - Einfach zu verwendende Random-Forest-Bibliothek für Go.
- [regommend](https://github.com/muesli/regommend) - Engine für Empfehlungen und kollaboratives Filtern.
- [shield](https://github.com/eaigner/shield) - Bayes'scher Textklassifikator mit flexiblen Tokenizern und Speicher-Backends für Go.
- [tfgo](https://github.com/galeone/tfgo) - Einfach zu verwendende Tensorflow-Bindings: vereinfacht die Nutzung der offiziellen Tensorflow-Go-Bindings. Definieren Sie Rechengraphen in Go, laden Sie in Python trainierte Modelle und führen Sie sie aus.
- [Varis](https://github.com/Xamber/Varis) - Neuronales Netz in Golang.

**[⬆ Zurück nach oben](#contents)**

## Nachrichtenübermittlung

_Bibliotheken, die Messaging-Systeme implementieren._

- [ami](https://github.com/kak-tus/ami) - Go-Client für zuverlässige Warteschlangen auf Basis von Redis Cluster Streams.
- [amqp](https://github.com/rabbitmq/amqp091-go) - Go-Client-Bibliothek für RabbitMQ.
- [APNs2](https://github.com/sideshow/apns2) - HTTP/2-Provider für Apple Push Notifications für Go – Push-Benachrichtigungen an iOS-, tvOS-, Safari- und OSX-Apps senden.
- [Asynq](https://github.com/hibiken/asynq) - Eine einfache, zuverlässige und effiziente verteilte Task-Queue für Go auf Basis von Redis.
- [backlite](https://github.com/mikestefanello/backlite) - Typsichere, persistente, eingebettete Task-Queues und Hintergrund-Job-Runner mit SQLite.
- [Beaver](https://github.com/Clivern/Beaver) - Ein Echtzeit-Messaging-Server zum Erstellen skalierbarer In-App-Benachrichtigungen, Multiplayer-Spiele und Chat-Apps in Web- und Mobil-Apps.
- [broker](https://github.com/qvcloud/broker) - Produktionsreife Messaging-Abstraktion mit einheitlicher API für verschiedene Broker und integrierter OpenTelemetry-Integration.
- [Bus](https://github.com/mustafaturan/bus) - Minimalistische Message-Bus-Implementierung für interne Kommunikation.
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Echtzeit-Messaging-Server (Websockets oder SockJS) in Go.
- [Chanify](https://github.com/chanify/chanify) - Ein Push-Benachrichtigungsserver, der Nachrichten an Ihre iOS-Geräte sendet.
- [Commander](https://github.com/jeroenrinzema/commander) - Ein ereignisgesteuerter High-Level-Consumer/-Producer mit Unterstützung für verschiedene „Dialekte“ wie Apache Kafka.
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go ist der Golang-Client von Confluent für Apache Kafka und die Confluent Platform.
- [dbus](https://github.com/godbus/dbus) - Native Go-Bindings für D-Bus.
- [drone-line](https://github.com/appleboy/drone-line) - Senden von [Line](https://at.line.me/en)-Benachrichtigungen über eine Binärdatei, Docker oder Drone CI.
- [emitter](https://github.com/olebedev/emitter) - Sendet Ereignisse auf Go-Art, mit Wildcards, Prädikaten, Abbruchmöglichkeiten und vielen weiteren Vorteilen.
- [event](https://github.com/agoalofalife/event) - Implementierung des Observer-Musters.
- [EventBus](https://github.com/asaskevich/EventBus) - Der leichtgewichtige Event-Bus mit Async-Kompatibilität.
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Gaurun-Client, geschrieben in Go.
- [Glue](https://github.com/desertbit/glue) - Robuste Socket-Bibliothek für Go und Javascript (Alternative zu Socket.io).
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Einfaches Event-Bus-Paket für Go.
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - Eine Bibliothek zur Umsetzung von Mediator-Mustern und vereinfachten CQRS-Mustern in einer ereignisgesteuerten Architektur, inspiriert von der C#-Bibliothek MediatR.
- [go-mq](https://github.com/cheshir/go-mq) - RabbitMQ-Client mit deklarativer Konfiguration.
- [go-notify](https://github.com/TheCreeper/go-notify) - Native Implementierung der freedesktop-Benachrichtigungsspezifikation.
- [go-nsq](https://github.com/nsqio/go-nsq) - Das offizielle Go-Paket für NSQ.
- [go-res](https://github.com/jirenius/go-res) - Paket zum Erstellen von REST-/Echtzeitdiensten, bei denen Clients nahtlos synchronisiert werden, mithilfe von NATS und Resgate.
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Client-Bibliothek für den Webdienst Viessmann Vitotrol.
- [GoEventBus](https://github.com/Raezil/GoEventBus) - Eine rasend schnelle, lockfreie In-Memory-Event-Bus-Bibliothek
- [Gollum](https://github.com/trivago/gollum) - Ein n:m-Multiplexer, der Nachrichten aus verschiedenen Quellen sammelt und an eine Reihe von Zielen verteilt.
- [golongpoll](https://github.com/jcuga/golongpoll) - HTTP-Longpoll-Serverbibliothek, die Web-Pub-Sub einfach macht.
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster ist ein Go-Push-Server-Cluster.
- [gorush](https://github.com/appleboy/gorush) - Push-Benachrichtigungsserver mit [APNs2](https://github.com/sideshow/apns2) und Google [GCM](https://github.com/google/go-gcm).
- [gosd](https://github.com/alexsniffin/gosd) - Eine Bibliothek zum Planen, wann eine Nachricht an einen Channel gesendet werden soll.
- [guble](https://github.com/smancke/guble) - Messaging-Server mit Push-Benachrichtigungen (Google Firebase Cloud Messaging, Apple Push Notification Services, SMS) sowie Websockets und einer REST-API, mit verteiltem Betrieb und Nachrichtenpersistenz.
- [hare](https://github.com/leozz37/hare) - Eine benutzerfreundliche Bibliothek zum Senden von Nachrichten und zum Lauschen auf TCP-Sockets.
- [hub](https://github.com/leandro-lugaresi/hub) - Ein Message-/Event-Hub für Go-Anwendungen nach dem Publish/Subscribe-Muster mit Unterstützung für Aliase wie bei rabbitMQ-Exchanges.
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Gleicht Ereignisse mit großen Regelmengen ab, wobei Regeln in Go oder als JSON geschrieben werden.
- [jazz](https://github.com/socifi/jazz) - Eine einfache RabbitMQ-Abstraktionsschicht zur Verwaltung von Warteschlangen sowie zum Veröffentlichen und Konsumieren von Nachrichten.
- [kiln](https://github.com/rafaelaugustos/kiln) - Persistente Hintergrundjobs in PostgreSQL, MySQL oder SQLite, mit Wiederholungen, Workflows, wiederkehrenden Jobs und einem Dashboard.
- [machinery](https://github.com/RichardKnop/machinery) - Asynchrone Task-Queue/Job-Queue auf Basis verteilter Nachrichtenübermittlung.
- [mangos](https://github.com/nanomsg/mangos) - Implementierung von Nanomsg („Scalability Protocols“) in reinem Go mit Transport-Interoperabilität.
- [melody](https://github.com/olahol/melody) - Minimalistisches Framework für den Umgang mit WebSocket-Sitzungen, einschließlich Broadcasting und automatischer Ping/Pong-Behandlung.
- [Mercure](https://github.com/dunglas/mercure) - Server und Bibliothek zum Verteilen servergesendeter Aktualisierungen über das Mercure-Protokoll (aufbauend auf Server-Sent Events).
- [messagebus](https://github.com/vardius/message-bus) - messagebus ist ein einfacher asynchroner Message-Bus für Go, ideal als Event-Bus bei Event Sourcing, CQRS und DDD.
- [NATS Go Client](https://github.com/nats-io/nats.go) - Go-Client für das
  NATS-Messaging-System.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - Ein winziger Wrapper um NSQ-Topics und -Channels.
- [oplog](https://github.com/dailymotion/oplog) - Generisches Oplog-/Replikationssystem für REST-APIs.
- [pubsub](https://github.com/tuxychandru/pubsub) - Einfaches Pub/Sub-Paket für Go.
- [Quamina](https://github.com/timbray/quamina) - Schneller Musterabgleich zum Filtern von Nachrichten und Ereignissen.
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - Leichtgewichtige Bibliothek, die automatische Wiederverbindung und Wiederholungen beim Veröffentlichen für RabbitMQ übernimmt. Die Bibliothek berücksichtigt, dass Entitäten in RabbitMQ nach einer Wiederverbindung neu deklariert werden müssen.
- [rabbus](https://github.com/rafaeljesus/rabbus) - Ein winziger Wrapper über AMQP-Exchanges und -Queues.
- [rabtap](https://github.com/jandelgado/rabtap) - RabbitMQ-Schweizer-Taschenmesser als CLI-App.
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ ist eine leichtgewichtige und zuverlässige Bibliothek zur Verwaltung lokaler Nachrichtenwarteschlangen.
- [Ratus](https://github.com/hyperonym/ratus) - Ratus ist ein RESTful-Server für asynchrone Task-Queues.
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue stellt Producer und Consumer für eine Warteschlange bereit, die Redis Streams verwendet.
- [rmqconn](https://github.com/sbabiv/rmqconn) - RabbitMQ-Wiederverbindung. Wrapper über amqp.Connection und amqp.Dial. Ermöglicht eine Wiederverbindung, wenn die Verbindung abbricht, bevor der Aufruf der Methode Close () zum Schließen erzwungen wird.
- [sarama](https://github.com/Shopify/sarama) - Go-Bibliothek für Apache Kafka.
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - Auf Redis basierender, einheitlicher Push-Dienst für serverseitige Benachrichtigungen an Mobilgeräte.
- [varmq](https://github.com/goptics/varmq) - Eine speicherunabhängige Nachrichtenwarteschlange und ein Worker-Pool für nebenläufige Go-Programme.
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - Effizientes Arbeiten mit Nachrichtenströmen. Erstellung ereignisgesteuerter Anwendungen, Ermöglichung von Event Sourcing, RPC über Nachrichten und Sagas. Kann konventionelle Pub/Sub-Implementierungen wie Kafka oder RabbitMQ, aber auch HTTP oder das MySQL-Binlog verwenden.
- [zmq4](https://github.com/pebbe/zmq4) - Go-Schnittstelle zu ZeroMQ Version 4. Auch verfügbar für [Version 3](https://github.com/pebbe/zmq3) und [Version 2](https://github.com/pebbe/zmq2).

**[⬆ Zurück nach oben](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Bibliothek in reinem Go zum Erstellen und Verarbeiten von Office-Dokumenten in Word (.docx), Excel (.xlsx) und Powerpoint (.pptx).

### Microsoft Excel

_Bibliotheken für die Arbeit mit Microsoft Excel._

- [cellwalker](https://github.com/chonla/cellwalker) - Excel virtuell Zelle für Zelle anhand des Zellnamens durchlaufen.
- [excelize](https://github.com/xuri/excelize) - Golang-Bibliothek zum Lesen und Schreiben von Dateien für Microsoft Excel&trade; (XLSX).
- [exl](https://github.com/go-the-way/exl) - Excel-Bindung an Structs, geschrieben in Go. (Unterstützt nur Go1.18+)
- [go-excel](https://github.com/szyhf/go-excel) - Ein einfacher und schlanker Reader, um Excel-Dateien im Stil relationaler Datenbanken als Tabelle zu lesen.
- [xlsx](https://github.com/tealeg/xlsx) - Bibliothek zum vereinfachten Lesen des XML-Formats, das von neueren Versionen von Microsoft Excel verwendet wird, in Go-Programmen.
- [xlsx](https://github.com/plandem/xlsx) - Schnelle und sichere Möglichkeit, vorhandene Microsoft-Excel-Dateien in Go-Programmen zu lesen und zu aktualisieren.

### Microsoft Word

_Bibliotheken für die Arbeit mit Microsoft Word._

- [godocx](https://github.com/gomutex/godocx) - Bibliothek zum Lesen und Schreiben von Microsoft-Word-Dateien (Docx).

**[⬆ Zurück nach oben](#contents)**

## Verschiedenes

### Abhängigkeitsinjektion

_Bibliotheken für die Arbeit mit Dependency Injection._

- [alice](https://github.com/magic003/alice) - Additiver Dependency-Injection-Container für Golang.
- [autowire](https://github.com/tiendc/autowire) - Dependency Injection mit Generics und Reflection.
- [boot-go](http://github.com/boot-go/boot) - Komponentenbasierte Entwicklung mit Dependency Injection über Reflection für Go-Entwickler.
- [componego](https://github.com/componego/componego) - Ein komponentenbasiertes Dependency-Injection-Framework, das den dynamischen Austausch von Abhängigkeiten ohne Codeduplizierung in Tests ermöglicht.
- [cosban/di](https://gitlab.com/cosban/di) - Ein auf Codegenerierung basierendes Werkzeug zur Verdrahtung per Dependency Injection.
- [dig](https://github.com/uber-go/dig) - Ein reflectionbasiertes Dependency-Injection-Toolkit für Go.
- [dingo](https://github.com/i-love-flamingo/dingo) - Ein Dependency-Injection-Toolkit für Go, basierend auf Guice.
- [do](https://github.com/samber/do) - Ein Dependency-Injection-Framework auf Basis von Generics.
- [floatdrop/di](https://github.com/floatdrop/di) - Dependency-Injection-Container auf Basis generischer Methoden, mit untergeordneten Scopes, Lebenszyklus-Hooks und Graphvalidierung, bevor irgendetwas erstellt wird.
- [fx](https://github.com/uber-go/fx) - Ein auf Dependency Injection basierendes Anwendungsframework für Go (aufbauend auf dig).
- [go-beans](https://github.com/go-beans/go) - Von Spring inspiriertes Framework für Dependency Injection und Anwendungslebenszyklus für Go.
- [Go-Spring](https://github.com/go-spring/spring-core) - Ein von Spring Boot inspiriertes, hochperformantes Go-Framework, das DI, automatische Konfiguration und Lebenszyklusverwaltung bietet und dabei die Einfachheit und Effizienz von Go beibehält.
- [gocontainer](https://github.com/vardius/gocontainer) - Einfacher Dependency-Injection-Container.
- [godi](https://github.com/junioryono/godi) - Dependency Injection im Microsoft-Stil für Go mit Scoped-Lebensdauern und Generics.
- [goioc/di](https://github.com/goioc/di) - Von Spring inspirierter Dependency-Injection-Container.
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container ist ein leichtgewichtiger und dennoch leistungsstarker IoC-Dependency-Injection-Container für die Programmiersprache Go.
- [gontainer](https://github.com/NVIDIA/gontainer) - Ein Dependency-Injection-Service-Container für Go-Projekte.
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - Ein YAML-basierter Dependency-Injection-Container für GO. Er unterstützt Scopes für Abhängigkeiten und die automatische Erkennung zirkulärer Abhängigkeiten. Gontainer ist nebenläufigkeitssicher.
- [HnH/di](https://github.com/HnH/di) - DI-Container-Bibliothek mit Fokus auf saubere API und Flexibilität.
- [kinit](https://github.com/go-kata/kinit) - Anpassbarer Dependency-Injection-Container mit globalem Modus, kaskadierender Initialisierung und Panic-sicherer Finalisierung.
- [kod](https://github.com/go-kod/kod) - Ein auf Generics basierendes Dependency-Injection-Framework für Go.
- [linker](https://github.com/logrange/linker) - Eine reflectionbasierte Bibliothek für Dependency Injection und Inversion of Control mit Unterstützung für den Lebenszyklus von Komponenten.
- [nject](https://github.com/muir/nject) - Ein typsicheres, reflektives Framework für Bibliotheken, Tests, HTTP-Endpunkte und den Start von Diensten.
- [ore](https://github.com/firasdarwish/ore) - Leichtgewichtiger, generischer und einfacher Dependency-Injection-Container (DI).
- [parsley](https://github.com/matzefriedrich/parsley) - Eine flexible und modulare reflectionbasierte DI-Bibliothek mit erweiterten Funktionen wie Scoped Contexts und Proxy-Generierung, entwickelt für große Go-Anwendungen.
- [wire](https://github.com/Fs02/wire) - Strikte Dependency Injection zur Laufzeit für Golang.
- [yama](https://github.com/livetribe/yama) - Framework für Dependency Injection und Lebenszyklus zur Kompilierzeit, das Start-, Quiesce- und Stop-Code für Google-Wire-Graphen generiert.

**[⬆ Zurück nach oben](#contents)**

### Projektstruktur

_**Inoffizielle** Sammlung von Mustern zur Strukturierung von Projekten._

- [ardanlabs/service](https://github.com/ardanlabs/service) - Ein [Starterkit](https://github.com/ardanlabs/service/wiki) zum Erstellen skalierbarer Webdienst-Anwendungen in Produktionsqualität.
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - Eine Boilerplate-Vorlage für Go-Anwendungen zum schnellen Start von Projekten nach bewährten Praktiken für die Produktion.
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - Ermöglicht Benutzern, schnell ein Go-Projekt mit einem beliebten Framework aufzusetzen.
- [go-ddd](https://github.com/sklinkert/go-ddd) - Vorlage für Domain-Driven Design mit CQRS, Value Objects, idempotenten Befehlen und einer transaktionalen Outbox.
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Beispiel-Monorepo für Go-gRPC-Microservices mit Bazel, grpc-gateway, OpenAPI und Kubernetes.
- [go-module](https://github.com/octomation/go-module) - Vorlage für ein typisches, in Go geschriebenes Modul.
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - KI-freundliche, produktionsreife Go-REST-API-Boilerplate mit Clean Architecture, JWT-Authentifizierung, RBAC, PostgreSQL, Docker-Hot-Reload und Swagger-Dokumentation.
- [go-sample](https://github.com/zitryss/go-sample) - Ein Beispiel-Layout für Go-Anwendungsprojekte mit echtem Code.
- [go-starter](https://github.com/allaboutapps/go-starter) - Eine meinungsstarke, produktionsreife RESTful-JSON-Backend-Vorlage, eng integriert mit VSCode DevContainers.
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - Go-Todo-Backend-Beispiel mit modularem Projektlayout für einen Produkt-Microservice.
- [goapp](https://github.com/naughtygopher/goapp) - Eine meinungsstarke Richtlinie zur Strukturierung und Entwicklung einer Go-Webanwendung bzw. eines Go-Webdienstes.
- [gobase](https://github.com/wajox/gobase) - Ein einfaches Gerüst für Golang-Anwendungen mit grundlegender Einrichtung für echte Golang-Anwendungen.
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Sammlung gängiger historischer und aufkommender Muster für Projektlayouts im Go-Ökosystem. Hinweis: Trotz des Organisationsnamens handelt es sich nicht um offizielle Golang-Standards, siehe [dieses Issue](https://github.com/golang-standards/project-layout/issues/117) für weitere Informationen. Dennoch finden einige das Layout nützlich.
- [golang-templates/seed](https://github.com/golang-templates/seed) - GitHub-Repository-Vorlage für Go-Anwendungen.
- [goxygen](https://github.com/shpota/goxygen) - Ein modernes Webprojekt mit Go und Angular, React oder Vue in Sekunden generieren.
- [insidieux/inizio](https://github.com/insidieux/inizio) - Generator für Golang-Projektlayouts mit Plugins.
- [kickstart.go](https://github.com/raeperd/kickstart.go) - Minimalistische Vorlage für einen Go-HTTP-Server in einer einzigen Datei ohne Abhängigkeiten von Drittanbietern.
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - Boilerplate und Beispiel für Go-Anwendungen nach modernen Praktiken.
- [nunu](https://github.com/go-nunu/nunu) - Nunu ist ein Scaffolding-Werkzeug zum Erstellen von Go-Anwendungen.
- [pagoda](https://github.com/mikestefanello/pagoda) - Schnelles, einfaches Starterkit für Full-Stack-Webentwicklung, gebaut in Go.
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold generiert ein Starter-Projektlayout für Go. So können Sie sich auf die Implementierung der Geschäftslogik konzentrieren.
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Sammlung von Praktiken und Diskussionen darüber, wie das Layout eines Go-Projekts strukturiert werden sollte.

**[⬆ Zurück nach oben](#contents)**

### Zeichenketten

_Bibliotheken für die Arbeit mit Zeichenketten._

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - Go-Implementierung des Brace-Expansion-Mechanismus zum Erzeugen beliebiger Zeichenketten.
- [caps](https://github.com/chanced/caps) - Eine Bibliothek zur Umwandlung der Groß-/Kleinschreibung.
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - Implementiert **Ersetzungsfelder**, die in Formatzeichenketten von geschweiften Klammern `{}` umschlossen sind.
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - Bibliothek zur Bearbeitung von Zeichenketten, um sie in Camel Case, Snake Case, Kebab Case umzuwandeln, zu slugifizieren usw.
- [str](https://github.com/schigh/str) - Pipeline-orientiertes Toolkit für Zeichenketten zum Zusammensetzen von Transformationen.
- [strcase](https://github.com/charlievieth/strcase) - Implementierung der strings/bytes-Pakete der Standardbibliothek ohne Beachtung der Groß-/Kleinschreibung.
- [stringFormatter](https://github.com/Wissance/stringFormatter) - Formatierung von Zeichenketten wie in Python oder C#, mit zusätzlichen Funktionen zur Textformatierung.
- [strutil](https://github.com/ozgio/strutil) - Hilfsfunktionen für Zeichenketten.
- [sttr](https://github.com/abhimanyu003/sttr) - Plattformübergreifende CLI-App, um verschiedene Operationen auf Zeichenketten auszuführen.
- [xstrings](https://github.com/huandu/xstrings) - Sammlung nützlicher Zeichenkettenfunktionen, portiert aus anderen Sprachen.

**[⬆ Zurück nach oben](#contents)**

### Nicht kategorisiert

_Diese Bibliotheken wurden hier eingeordnet, weil keine der anderen Kategorien zu passen schien._

- [anagent](https://github.com/mudler/anagent) - Minimalistischer, erweiterbarer Golang-Handler für Event-Loops/Timer mit Dependency Injection.
- [antch](https://github.com/antchfx/antch) - Ein schnelles, leistungsstarkes und erweiterbares Framework für Web-Crawling und Scraping.
- [archives](https://github.com/mholt/archives) - Eine plattformübergreifende Go-Bibliothek für mehrere Formate zur Arbeit mit Archiven und Komprimierungsformaten über eine einheitliche API und als virtuelle Dateisysteme, kompatibel mit io/fs.
- [autoflags](https://github.com/artyom/autoflags) - Go-Paket zum automatischen Definieren von Kommandozeilen-Flags aus Struct-Feldern.
- [avgRating](https://github.com/kirillDanshin/avgRating) - Berechnet durchschnittliche Punktzahlen und Bewertungen auf Basis der Wilson-Score-Gleichung.
- [banner](https://github.com/dimiro1/banner) - Schöne Banner zu Ihren Go-Anwendungen hinzufügen.
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch unterstützt Ziffern-, Zahlen-, Alphabet-, Arithmetik-, Audio- und Ziffern-Alphabet-Captchas.
- [basexx](https://github.com/bobg/basexx) - Konvertierung in, aus und zwischen Ziffernfolgen in verschiedenen Zahlenbasen.
- [battery](https://github.com/distatus/battery) - Plattformübergreifende Bibliothek für normalisierte Akkuinformationen.
- [bitio](https://github.com/icza/bitio) - Hochoptimierter Reader und Writer auf Bitebene für Go.
- [browscap_go](https://github.com/digitalcrab/browscap_go) - GoLang-Bibliothek für das [Browser Capabilities Project](https://browscap.org/).
- [captcha](https://github.com/steambap/captcha) - Das Paket captcha bietet eine einfach zu verwendende, nicht meinungsbehaftete API zur Captcha-Erzeugung.
- [common](https://github.com/kubeservice-stack/common) - Eine Bibliothek für Server-Frameworks.
- [conv](https://github.com/cstockton/go-conv) - Das Paket conv bietet schnelle und intuitive Konvertierungen zwischen Go-Typen.
- [datacounter](https://github.com/miolini/datacounter) - Go-Zähler für Reader/Writer/http.ResponseWriter.
- [fake-useragent](https://github.com/lib4u/fake-useragent) - Aktueller, einfacher User-Agent-Fälscher mit realer Datenbank in Golang
- [faker](https://github.com/pioz/faker) - Generator für zufällige Fake-Daten und Structs für Go.
- [ffmt](https://github.com/go-ffmt/ffmt) - Datenanzeige für Menschen verschönern.
- [gatus](https://github.com/TwinProduction/gatus) - Automatisiertes Dashboard für den Zustand von Diensten.
- [go-commandbus](https://github.com/lana/go-commandbus) - Ein schlanker und erweiterbarer Command-Bus für Go.
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Generischer Objektpool für Golang.
- [go-openapi](https://github.com/go-openapi) - Sammlung von Paketen zum Parsen und Verwenden von OpenAPI-Schemas.
- [go-resiliency](https://github.com/eapache/go-resiliency) - Resilienzmuster für Golang.
- [go-unarr](https://github.com/gen2brain/go-unarr) - Dekomprimierungsbibliothek für RAR-, TAR-, ZIP- und 7z-Archive.
- [gofakeit](https://github.com/brianvoe/gofakeit) - Zufallsdatengenerator, geschrieben in Go.
- [goffi](https://github.com/go-webgpu/goffi) - FFI in reinem Go mit typisierter Aufrufschnittstelle im Stil von libffi und strukturierter Fehlerbehandlung, um C-Bibliotheken ohne CGO aufzurufen.
- [gommit](https://github.com/antham/gommit) - Analysiert Git-Commit-Nachrichten, um sicherzustellen, dass sie definierten Mustern folgen.
- [gopsutil](https://github.com/shirou/gopsutil) - Plattformübergreifende Bibliothek zum Abrufen der Prozess- und Systemauslastung (CPU, Speicher, Festplatten usw.).
- [gosh](https://github.com/osamingo/gosh) - Stellt Go Statistics Handler, Struct und Measure-Methode bereit.
- [gosms](https://github.com/haxpax/gosms) - Ihr eigenes lokales SMS-Gateway in Go, das zum Versenden von SMS verwendet werden kann.
- [gotoprom](https://github.com/cabify/gotoprom) - Wrapper-Bibliothek für typsichere Metrik-Builder für den offiziellen Prometheus-Client.
- [gountries](https://github.com/pariz/gountries) - Paket, das Daten zu Ländern und deren Untergliederungen bereitstellt.
- [gtree](https://github.com/ddddddO/gtree) - Bietet CLI, Paket und Web für Baumausgaben und die Erstellung von Verzeichnissen aus Markdown oder programmatisch.
- [health](https://github.com/alexliesenfeld/health) - Eine einfache und flexible Health-Check-Bibliothek für Go.
- [health](https://github.com/dimiro1/health) - Einfach zu verwendende, erweiterbare Health-Check-Bibliothek.
- [healthcheck](https://github.com/etherlabsio/healthcheck) - Ein meinungsstarker und nebenläufiger Health-Check-HTTP-Handler für RESTful-Dienste.
- [hostutils](https://github.com/Wing924/hostutils) - Eine Golang-Bibliothek zum Packen und Entpacken von Listen von FQDNs.
- [indigo](https://github.com/osamingo/indigo) - Verteilter Generator eindeutiger IDs mit Sonyflake, kodiert mit Base58.
- [lk](https://github.com/hyperboloide/lk) - Eine einfache Lizenzierungsbibliothek für Golang.
- [llvm](https://github.com/llir/llvm) - Bibliothek zur Interaktion mit LLVM IR in reinem Go.
- [metrics](https://github.com/pascaldekloe/metrics) - Bibliothek für Metrik-Instrumentierung und Bereitstellung für Prometheus.
- [morse](https://github.com/alwindoss/morse) - Bibliothek zur Konvertierung in und aus Morsecode.
- [numa](https://github.com/lrita/numa) - NUMA ist eine in Go geschriebene Hilfsbibliothek. Sie hilft beim Schreiben von NUMA-bewusstem Code.
- [pdfgen](https://github.com/hyperboloide/pdfgen) - HTTP-Dienst zum Erzeugen von PDFs aus JSON-Anfragen.
- [persian](https://github.com/mavihq/persian) - Einige Hilfsmittel für die persische Sprache in Go.
- [purego](https://github.com/ebitengine/purego) - Eine Bibliothek zum Aufrufen von C-Funktionen aus Go ohne Cgo.
- [sandid](https://github.com/aofei/sandid) - Jedes Sandkorn auf der Erde hat seine eigene ID.
- [shellwords](https://github.com/Wing924/shellwords) - Eine Golang-Bibliothek zur Bearbeitung von Zeichenketten gemäß den Wortparsing-Regeln der UNIX-Bourne-Shell.
- [shortid](https://github.com/teris-io/shortid) - Verteilte Erzeugung superkurzer, eindeutiger, nicht sequenzieller, URL-freundlicher IDs.
- [shoutrrr](https://github.com/containrrr/shoutrrr) - Benachrichtigungsbibliothek mit einfachem Zugriff auf verschiedene Messaging-Dienste wie slack, mattermost, gotify und smtp.
- [sitemap-format](https://github.com/mingard/sitemap-format) - Ein einfacher Sitemap-Generator mit etwas syntaktischem Zucker.
- [stateless](https://github.com/qmuntal/stateless) - Eine Fluent-Bibliothek zum Erstellen von Zustandsautomaten.
- [stats](https://github.com/go-playground/stats) - Überwacht Go MemStats + Systemstatistiken wie Speicher, Swap und CPU und sendet sie per UDP an einen beliebigen Ort, etwa zum Logging …
- [turtle](https://github.com/hackebrot/turtle) - Emojis für Go.
- [url-shortener](https://github.com/pantrif/url-shortener) - Ein moderner, leistungsstarker und robuster URL-Shortener-Microservice mit MySQL-Unterstützung.
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - Boilerplate für die HTTP-Ein- und Ausgabeverarbeitung generieren.
- [varint](https://github.com/chmike/varint) - Ein schnellerer Encoder/Decoder für Ganzzahlen variabler Länge als der in der Standardbibliothek.
- [xdg](https://github.com/rkoesters/xdg) - In Go implementierte Spezifikationen von FreeDesktop.org (xdg).
- [xkg](https://github.com/go-xkg/xkg) - Tastatur-Grabber für X.
- [xz](https://github.com/ulikunitz/xz) - Paket in reinem Golang zum Lesen und Schreiben von xz-komprimierten Dateien.
**[⬆ Zurück nach oben](#contents)**

## Verarbeitung natürlicher Sprache

_Bibliotheken für die Arbeit mit menschlichen Sprachen._

Siehe auch [Textverarbeitung](#text-processing) und [Textanalyse](#text-analysis).

### Spracherkennung

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - Go-Client für die Language Detection API. Unterstützt Batch-Anfragen sowie die Spracherkennung kurzer Phrasen oder einzelner Wörter.
- [getlang](https://github.com/rylans/getlang) - Schnelles Paket zur Erkennung natürlicher Sprachen.
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Funktionen zur Bestimmung der natürlichen Sprache eines Unicode-Textes.
- [lingua-go](https://github.com/pemistahl/lingua-go) - Eine präzise Bibliothek zur Erkennung natürlicher Sprachen, geeignet für lange und kurze Texte gleichermaßen. Unterstützt die Erkennung mehrerer Sprachen in gemischtsprachigen Texten.
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Paket zur Erkennung natürlicher Sprachen für Go. Unterstützt 84 Sprachen und 24 Schriften (Schriftsysteme, z. B. Latein, Kyrillisch usw.).

### Morphologische Analysatoren

- [go-propisyu](https://github.com/rekurt/go-propisyu) - Konvertiert Zahlen in russische Wörter mit korrektem grammatikalischem Geschlecht und korrekter Substantivdeklination.
- [go-stem](https://github.com/agonopol/go-stem) - Implementierung des Porter-Stemming-Algorithmus.
- [go2vec](https://github.com/danieldk/go2vec) - Reader und Hilfsfunktionen für word2vec-Embeddings.
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Go-Bindings für die Snowball-Bibliothek libstemmer, einschließlich Porter 2.
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Sentiment-Analysator mit dem Lexikon sentiwordnet in Go.
- [govader](https://github.com/jonreiter/govader) - Go-Implementierung der [VADER-Sentimentanalyse](https://github.com/cjhutto/vaderSentiment).
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - Microservice-Implementierung von [GoVader](https://github.com/jonreiter/govader).
- [kagome](https://github.com/ikawaha/kagome) - Morphologischer Analysator für Japanisch (JP), geschrieben in reinem Go.
- [libtextcat](https://github.com/goodsign/libtextcat) - Cgo-Binding für die C-Bibliothek libtextcat. Garantierte Kompatibilität mit Version 2.2.
- [nlp](https://github.com/james-bowman/nlp) - Go-Bibliothek für die Verarbeitung natürlicher Sprache mit Unterstützung für LSA (Latent Semantic Analysis).
- [paicehusk](https://github.com/rookii/paicehusk) - Golang-Implementierung des Paice/Husk-Stemming-Algorithmus.
- [porter](https://github.com/a2800276/porter) - Dies ist eine recht direkte Portierung von Martin Porters C-Implementierung des Porter-Stemming-Algorithmus.
- [porter2](https://github.com/zhenjl/porter2) - Wirklich schneller Porter-2-Stemmer.
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Go-Portierung des Rapid Automatic Keyword Extraction Algorithm (RAKE).
- [snowball](https://github.com/goodsign/snowball) - Snowball-Stemmer-Portierung (cgo-Wrapper) für Go. Bietet Funktionalität zur Extraktion von Wortstämmen über [Snowball native](http://snowball.tartarus.org/).
- [spaGO](https://github.com/nlpodyssey/spago) - Eigenständige Bibliothek für maschinelles Lernen und die Verarbeitung natürlicher Sprache in Go.
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - Ein Rechtschreibkorrektor für die spanische Sprache – oder erstellen Sie Ihren eigenen.

### Slugifier

- [go-slugify](https://github.com/mozillazg/go-slugify) - Schöne Slugs mit Unterstützung für mehrere Sprachen erzeugen.
- [slug](https://github.com/gosimple/slug) - URL-freundliches Slugify mit Unterstützung für mehrere Sprachen.
- [Slugify](https://github.com/avelino/slugify) - Go-Slugify-Anwendung zur Verarbeitung von Zeichenketten.

### Tokenizer

- [gojieba](https://github.com/yanyiwu/gojieba) - Dies ist eine Go-Implementierung von [jieba](https://github.com/fxsjy/jieba), einem Algorithmus zur Segmentierung chinesischer Wörter.
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - Ein Tokenizer für Golang auf Basis von Wörterbuch- und Bigram-Sprachmodellen. (Unterstützt derzeit nur chinesische Segmentierung)
- [gse](https://github.com/go-ego/gse) - Effiziente Textsegmentierung in Go; unterstützt Englisch, Chinesisch, Japanisch und weitere.
- [MMSEGO](https://github.com/awsong/MMSEGO) - Dies ist eine GO-Implementierung von [MMSEG](http://technology.chtsai.org/mmseg/), einem Algorithmus zur Segmentierung chinesischer Wörter.
- [segment](https://github.com/blevesearch/segment) - Go-Bibliothek zur Unicode-Textsegmentierung wie in [Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/) beschrieben
- [sentences](https://github.com/neurosnap/sentences) - Satz-Tokenizer: wandelt Text in eine Liste von Sätzen um.
- [shamoji](https://github.com/osamingo/shamoji) - shamoji ist ein in Go geschriebenes Paket zur Wortfilterung.
- [stemmer](https://github.com/dchest/stemmer) - Stemmer-Pakete für die Programmiersprache Go. Enthält Stemmer für Englisch und Deutsch.
- [textcat](https://github.com/pebbe/textcat) - Go-Paket zur n-Gramm-basierten Textkategorisierung mit Unterstützung für UTF-8 und Rohtext.

### Übersetzung

- [ctxi18n](https://github.com/invopop/ctxi18n/) - Kontextbewusste i18n mit kurzer und prägnanter API, Pluralisierung, Interpolation und `fs.FS`-Unterstützung. YAML-Locale-Definitionen basieren auf [Rails i18n](https://guides.rubyonrails.org/i18n.html).
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - Paket und begleitendes Werkzeug für die Arbeit mit lokalisierten Texten.
- [go-mystem](https://github.com/dveselov/mystem) - CGo-Bindings für Yandex.Mystem – einen Analysator für russische Morphologie.
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - Konverter von chinesischen (CN) Hanzi in Hanyu Pinyin.
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Eine Wortschatztabelle und Textressourcen-Bibliothek für Golang-Projekte.
- [gotext](https://github.com/leonelquinteros/gotext) - GNU-gettext-Hilfsprogramme für Go.
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - Kyrillisch → Lateinisch auf jede erdenkliche Weise transliterieren.
- [spreak](https://github.com/vorlif/spreak) - Flexible Bibliothek für Übersetzung und Humanisierung für Go, basierend auf den Konzepten hinter gettext.
- [t](https://github.com/youthlin/t) - Ein weiteres i18n-Paket für Golang, das dem GNU-gettext-Stil folgt und .po/.mo-Dateien unterstützt: `t.T (gettext)`, `t.N (ngettext)` usw. Außerdem enthält es das Kommandozeilenwerkzeug [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate), das Nachrichten aus text/html-Vorlagen als pot-Datei extrahieren kann.

### Transliteration

- [enca](https://github.com/endeveit/enca) - Minimale cgo-Bindings für [libenca](https://cihar.com/software/enca/), das Zeichenkodierungen erkennt.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - ASCII-Transliterationen von Unicode-Text.
- [gounidecode](https://github.com/fiam/gounidecode) - Unicode-Transliterator (auch bekannt als unidecode) für Go.
- [transliterator](https://github.com/alexsergivan/transliterator) - Bietet einseitige Transliteration von Zeichenketten mit Unterstützung sprachspezifischer Transliterationsregeln.

**[⬆ Zurück nach oben](#contents)**

## Netzwerk

_Bibliotheken für die Arbeit mit verschiedenen Netzwerkschichten._

- [arp](https://github.com/mdlayher/arp) - Das Paket arp implementiert das ARP-Protokoll gemäß RFC 826.
- [bart](https://github.com/gaissmai/bart) - Das Paket bart bietet eine Balanced-Routing-Table (BART) für sehr schnelle IP-zu-CIDR-Lookups und mehr.
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - Streaming von Protocol-Buffer-Daten über TCP leicht gemacht.
- [canopus](https://github.com/zubairhamed/canopus) - CoAP-Client/Server-Implementierung (RFC 7252).
- [cdns](https://github.com/junevm/cdns) - DNS-Server mühelos über das Terminal wechseln.
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - TCP/UDP-Port-Proxy ohne Konfiguration, mit Autostart, IP-basierter Zugriffskontrolle und Tuning des Netzwerkstacks auf OS-Ebene.
- [cidranger](https://github.com/yl2chen/cidranger) - Schnelles IP-zu-CIDR-Lookup für Go.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare-Tunnel-Client (früher Argo Tunnel).
- [corsproxy](https://github.com/melihbirim/corsproxy) - CORS-Proxyserver mit SSRF-Schutz, Allow-/Blocklisten für Hosts und optionaler Authentifizierung per API-Schlüssel.
- [dhcp6](https://github.com/mdlayher/dhcp6) - Das Paket dhcp6 implementiert einen DHCPv6-Server gemäß RFC 3315.
- [dns](https://github.com/miekg/dns) - Go-Bibliothek für die Arbeit mit DNS.
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - Framework zur passiven DNS-Erfassung und -Überwachung.
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Misst, was mit bestehenden TCP- und UDP-Verbindungen tatsächlich passiert, wenn ein Kubernetes-Pod beendet wird.
- [easytcp](https://github.com/DarthPestilane/easytcp) - Ein leichtgewichtiges TCP-Framework, geschrieben in Go (Golang), mit integriertem Nachrichten-Router. EasyTCP hilft Ihnen, einen TCP-Server einfach, schnell und schmerzfrei zu erstellen.
- [ether](https://github.com/songgao/ether) - Plattformübergreifendes Go-Paket zum Senden und Empfangen von Ethernet-Frames.
- [ethernet](https://github.com/mdlayher/ethernet) - Das Paket ethernet implementiert das Marshalling und Unmarshalling von IEEE-802.3-Ethernet-II-Frames und IEEE-802.1Q-VLAN-Tags.
- [event](https://github.com/cheng-zhongliang/event) - Einfache Bibliothek für I/O-Ereignisbenachrichtigungen, geschrieben in Golang.
- [expose](https://github.com/kernelshard/expose) - Leichtgewichtiges Open-Source-Werkzeug für sichere Tunnel, um lokale Server im Internet erreichbar zu machen.
- [fasthttp](https://github.com/valyala/fasthttp) - Das Paket fasthttp ist eine schnelle HTTP-Implementierung für Go, bis zu 10-mal schneller als net/http.
- [fibersse](https://github.com/vinod-morya/fibersse) - Produktionsreife Server-Sent Events (SSE) für Fiber v3 mit Zusammenfassung von Ereignissen, Prioritätsspuren, Topic-Wildcards, adaptiver Drosselung und integrierter Authentifizierung.
- [fortio](https://github.com/fortio/fortio) - Bibliothek und Kommandozeilenwerkzeug für Lasttests, fortgeschrittener Echo-Server und Web-UI. Ermöglicht es, eine bestimmte Last in Abfragen pro Sekunde festzulegen, Latenzhistogramme und andere nützliche Statistiken aufzuzeichnen und grafisch darzustellen. TCP, HTTP, gRPC.
- [ftp](https://github.com/jlaffaye/ftp) - Das Paket ftp implementiert einen FTP-Client gemäß [RFC 959](https://tools.ietf.org/html/rfc959).
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - Voll ausgestattete FTP-Server-Bibliothek.
- [fullproxy](https://github.com/shoriwe/fullproxy) - Ein voll ausgestattetes, skriptfähiges und als Daemon konfigurierbares Proxy- und Pivoting-Toolkit mit SOCKS5-, HTTP-, Raw-Port- und Reverse-Proxy-Protokollen.
- [fwdctl](https://github.com/alegrey91/fwdctl) - Eine einfache und intuitive CLI zur Verwaltung von IPTables-Weiterleitungen auf Ihrem Linux-Server.
- [gaio](https://github.com/xtaci/gaio) - Hochperformantes Async-IO-Networking für Golang im Proactor-Modus.
- [gev](https://github.com/Allenxuxu/gev) - gev ist eine leichtgewichtige, schnelle, nicht blockierende TCP-Netzwerkbibliothek auf Basis des Reactor-Modus.
- [gldap](https://github.com/jimlambrt/gldap) - gldap stellt eine LDAP-Server-Implementierung bereit, und Sie liefern die Handler für deren LDAP-Operationen.
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt ist eine flexible, hochperformante MQTT-Broker-Bibliothek, die das MQTT-Protokoll V3.1.1 vollständig implementiert.
- [gnet](https://github.com/panjf2000/gnet) - `gnet` ist ein hochperformantes, leichtgewichtiges, nicht blockierendes, ereignisgesteuertes Netzwerk-Framework, geschrieben in reinem Go.
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` ist ein hochperformantes Netzwerk-Framework, insbesondere für Gameserver.
- [gNxI](https://github.com/google/gnxi) - Eine Sammlung von Werkzeugen für das Netzwerkmanagement, die die Protokolle gNMI und gNOI verwenden.
- [go-getter](https://github.com/hashicorp/go-getter) - Go-Bibliothek zum Herunterladen von Dateien oder Verzeichnissen aus verschiedenen Quellen über eine URL.
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - Bibliothek für HTTP-Anfragen über einen Pool von Proxys mit Fehlertoleranz, Lastverteilung, automatischen Wiederholungen, Cookie-Verwaltung und mehr – als Ersatz für http.Get/Post oder als direkt einsetzbarer RoundTripper für http.Client
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - Leichtgewichtige Bibliothek für Live-Paketmitschnitte mit Extraktion von HTTPS-SNI.
- [go-powerdns](https://github.com/joeig/go-powerdns) - PowerDNS-API-Bindings für Golang.
- [go-sse](https://github.com/lampctl/go-sse) - Go-Client- und -Server-Implementierung von HTML Server-Sent Events.
- [go-stun](https://github.com/ccding/go-stun) - Go-Implementierung des STUN-Clients (RFC 3489 und RFC 5389).
- [gobgp](https://github.com/osrg/gobgp) - BGP, implementiert in der Programmiersprache Go.
- [gopacket](https://github.com/google/gopacket) - Go-Bibliothek zur Paketverarbeitung mit libpcap-Bindings.
- [gopcap](https://github.com/akrennmair/gopcap) - Go-Wrapper für libpcap.
- [GoProxy](https://github.com/elazarl/goproxy) - Eine Bibliothek zum Erstellen eines angepassten HTTP/HTTPS-Proxyservers mit Go.
- [goshark](https://github.com/sunwxg/goshark) - Das Paket goshark verwendet tshark, um IP-Pakete zu dekodieren und Datenstrukturen zur Paketanalyse zu erstellen.
- [gosnmp](https://github.com/soniah/gosnmp) - Native Go-Bibliothek zum Ausführen von SNMP-Aktionen.
- [gotcp](https://github.com/gansidui/gotcp) - Go-Paket zum schnellen Schreiben von TCP-Anwendungen.
- [grab](https://github.com/cavaliercoder/grab) - Go-Paket zur Verwaltung von Datei-Downloads.
- [graval](https://github.com/koofr/graval) - Experimentelles FTP-Server-Framework.
- [gws](https://github.com/lxzan/gws) - Hochperformanter WebSocket-Server und -Client mit AsyncIO-Unterstützung.
- [HTTPLab](https://github.com/gchaincl/httplab) - Mit HTTPLabs können Sie HTTP-Anfragen untersuchen und Antworten fälschen.
- [httpproxy](https://github.com/wzshiming/httpproxy) - HTTP-Proxy-Handler und -Dialer.
- [iplib](https://github.com/c-robinson/iplib) - Bibliothek für die Arbeit mit IP-Adressen (net.IP, net.IPNet), inspiriert von Pythons [ipaddress](https://docs.python.org/3/library/ipaddress.html) und Rubys [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html)
- [jazigo](https://github.com/udhos/jazigo) - Jazigo ist ein in Go geschriebenes Werkzeug zum Abrufen der Konfiguration mehrerer Netzwerkgeräte.
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP – schnelles und zuverlässiges ARQ-Protokoll.
- [lhttp](https://github.com/fanux/lhttp) - Leistungsstarkes WebSocket-Framework, mit dem Sie Ihren IM-Server einfacher erstellen.
- [linkio](https://github.com/ian-kent/linkio) - Simulation der Geschwindigkeit von Netzwerkverbindungen für Reader/Writer-Interfaces.
- [llb](https://github.com/kirillDanshin/llb) - Ein sehr einfaches, aber schnelles Backend für Proxyserver. Kann für schnelle Weiterleitungen auf vordefinierte Domains ohne Speicherallokation und mit schneller Antwort nützlich sein.
- [macwifi](https://github.com/jaisonerick/macwifi) - WLAN-Scans und Abruf von Keychain-Passwörtern für macOS 13+.
- [mdns](https://github.com/hashicorp/mdns) - Einfache mDNS-Client/Server-Bibliothek (Multicast DNS) in Golang.
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Der Paho Go Client stellt eine MQTT-Client-Bibliothek für Verbindungen zu MQTT-Brokern über TCP, TLS oder WebSockets bereit.
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - Eine kinderleichte, allokationsfreie Low-Level-Implementierung von MQTT, gut geeignet für eingebettete Systeme.
- [nbio](https://github.com/lesismal/nbio) - Lösung in reinem Go für mehr als 1000k Verbindungen, unterstützt tls/http1.x/websocket und ist weitgehend kompatibel mit net/http, mit hoher Performance und geringem Speicherverbrauch, nicht blockierend, ereignisgesteuert und einfach zu verwenden.
- [net](https://golang.org/x/net) - Dieses Repository enthält ergänzende Go-Netzwerkbibliotheken.
- [netchan](https://github.com/matveynator/netchan) - Network Channels (netchan) für Golang: sicher, clusterfähig, unterstützt verschachtelte Channels und beliebige Datentypen. Inspiriert von Rob Pike.
- [nethawk](https://github.com/Flowtriq/nethawk) - Terminal-UI für Echtzeit-Mitschnitt und -Analyse von Netzwerkverkehr sowie Angriffserkennung, mit JSON-Ausgabemodus.
- [netpoll](https://github.com/cloudwego/netpoll) - Ein hochperformantes, nicht blockierendes I/O-Netzwerk-Framework mit Fokus auf RPC-Szenarien, entwickelt von ByteDance.
- [NFF-Go](https://github.com/intel-go/nff-go) - Framework zur schnellen Entwicklung performanter Netzwerkfunktionen für Cloud und Bare Metal (ehemals YANFF).
- [nodepass](https://github.com/NodePassProject/nodepass) - Eine sichere, effiziente TCP/UDP-Tunnellösung, die über vorab aufgebaute TCP/QUIC/WebSocket- oder HTTP/2-Verbindungen schnellen, zuverlässigen Zugriff trotz Netzwerkbeschränkungen bietet.
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - Bibliothek in reinem Go für plattformübergreifende lokale Peer-Erkennung per UDP-Multicast.
- [portproxy](https://github.com/aybabtme/portproxy) - Einfacher TCP-Proxy, der APIs ohne CORS-Unterstützung CORS-Unterstützung hinzufügt.
- [proxq](https://github.com/psyb0t/docker-proxq) - Asynchroner Reverse-Proxy, der jede Anfrage in Redis einreiht und eine Job-ID zurückgibt, mit der die Antwort abgefragt werden kann – mit Routing nach Pfadpräfix, Wiederholungen und Caching.
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - PostgreSQL-Server-Wire-Protokoll. Bauen Sie Ihren eigenen Server und beginnen Sie, Verbindungen zu bedienen.
- [publicip](https://github.com/polera/publicip) - Das Paket publicip gibt Ihre öffentliche IPv4-Adresse zurück (Internet-Egress).
- [quic-go](https://github.com/lucas-clemente/quic-go) - Eine Implementierung des QUIC-Protokolls in reinem Go.
- [roamr](https://github.com/sourabh-khot65/roamr) - CLI, die gespeicherte WLAN-Netzwerke in der Nähe bewertet und Ihnen sagt, welches Sie verwenden sollten und warum.
- [sdns](https://github.com/semihalev/sdns) - Ein hochperformanter, rekursiver DNS-Resolver-Server mit DNSSEC-Unterstützung und Fokus auf den Schutz der Privatsphäre.
- [sftp](https://github.com/pkg/sftp) - Das Paket sftp implementiert das SSH File Transfer Protocol gemäß <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt>.
- [ssh](https://github.com/gliderlabs/ssh) - High-Level-API zum Erstellen von SSH-Servern (kapselt crypto/ssh).
- [sslb](https://github.com/eduardonunesp/sslb) - Ein Super Simples Load Balancer – nur ein kleines Projekt, um eine gewisse Performance zu erreichen.
- [stun](https://github.com/go-rtc/stun) - Go-Implementierung des STUN-Protokolls nach RFC 5389.
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack ist ein auf TCP basierendes Anwendungsprotokoll zum Packen und Entpacken von Bytestreams in Go-Programmen.
- [tspool](https://github.com/two/tspool) - Eine TCP-Bibliothek, die einen Worker-Pool verwendet, um die Performance zu verbessern und Ihren Server zu schützen.
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - Eine Implementierung von tun2socks in reinem Go auf Basis des TCP/IP-Stacks von [gVisor](https://gvisor.dev/).
- [utp](https://github.com/anacrolix/utp) - Go-Implementierung des uTP-Mikrotransportprotokolls.
- [vssh](https://github.com/yahoo/vssh) - Go-Bibliothek zum Aufbau von Netzwerk- und Serverautomatisierung über das SSH-Protokoll.
- [water](https://github.com/songgao/water) - Einfache TUN/TAP-Bibliothek.
- [webrtc](https://github.com/pions/webrtc) - Eine Implementierung der WebRTC-API in reinem Go.
- [winrm](https://github.com/masterzen/winrm) - Go-WinRM-Client zur Remote-Ausführung von Befehlen auf Windows-Rechnern.
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - Resilienter WebSocket-Client mit automatischer Wiederverbindung, exponentiellem Backoff und Heartbeat-Verwaltung.
- [xtcp](https://github.com/xfxdev/xtcp) - TCP-Server-Framework mit gleichzeitiger Vollduplex-Kommunikation, sauberem Herunterfahren und benutzerdefiniertem Protokoll.

**[⬆ Zurück nach oben](#contents)**

### HTTP-Clients

_Bibliotheken für HTTP-Anfragen._

- [axios4go](https://github.com/rezmoss/axios4go) - Eine von Axios inspirierte Go-HTTP-Client-Bibliothek mit einer einfachen und intuitiven API für HTTP-Anfragen.
- [azuretls-client](https://github.com/Noooste/azuretls-client) - Ein einfach zu verwendender HTTP-Client, zu 100 % in Go, zum Fälschen von TLS/JA3- und HTTP2-Fingerprints.
- [fast-shot](https://github.com/opus-domini/fast-shot) - Treffen Sie Ihre API-Ziele mit Schnellfeuerpräzision mithilfe des schnellsten und einfachsten HTTP-Clients für Go.
- [gentleman](https://github.com/h2non/gentleman) - Voll ausgestattete, Plugin-gesteuerte HTTP-Client-Bibliothek.
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - Einfach einen HTTP-Client der Standardbibliothek erhalten, der keinen Zustand mit anderen Clients teilt.
- [go-http-client](https://github.com/bozd4g/go-http-client) - HTTP-Aufrufe einfach und unkompliziert durchführen.
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - Eine Bibliothek zum Multiplexen von HTTP-Anfragen auf Basis mehrerer Quell-IPs.
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - http.RoundTripper für Go, der OpenTelemetry-Metriken für HTTP-Anfragen ausgibt.
- [go-req](https://github.com/wenerme/go-req) - Deklarativer Golang-HTTP-Client.
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - HTTP-Client mit Wiederholungsfunktion in Go.
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Ein leistungsstarker, leichtgewichtiger, einfacher HTTP-Client, inspiriert von der Web Fetch API.
- [Grequest](https://github.com/lib4u/grequest)  - Einfaches und leichtgewichtiges Golang-Paket für HTTP-Anfragen. Basiert auf dem leistungsstarken net/http
- [grequests](https://github.com/levigross/grequests) - Ein Go-„Klon“ der großartigen und berühmten Requests-Bibliothek.
- [hedge](https://github.com/bhope/hedge) - Adaptive Hedged Requests für Go. Senkt die p99-Latenz ohne Konfiguration, basierend auf Googles Paper „The Tail at Scale“.
- [heimdall](https://github.com/gojektech/heimdall) - Ein erweiterter HTTP-Client mit Wiederholungs- und Hystrix-Funktionen.
- [httpretry](https://github.com/ybbus/httpretry) - Erweitert den Standard-HTTP-Client von Go um Wiederholungsfunktionalität.
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - Direkt einsetzbarer net/http.Client mit bytegenauem Browser-Fingerprint für TLS (JA3/JA4) und HTTP/2 (Akamai).
- [pester](https://github.com/sethgrid/pester) - Go-HTTP-Client-Aufrufe mit Wiederholungen, Backoff und Nebenläufigkeit.
- [req](https://github.com/imroc/req) - Einfacher Go-HTTP-Client mit schwarzer Magie (weniger Code und mehr Effizienz).
- [request](https://github.com/monaco-io/request) - HTTP-Client für Golang. Wenn Sie Erfahrung mit axios oder requests haben, werden Sie ihn lieben. Keine Abhängigkeiten von Drittanbietern.
- [requests](https://github.com/carlmjohnson/requests) - HTTP-Anfragen für Gophers. Verwendet context.Context und verbirgt den zugrunde liegenden net/http.Client nicht, wodurch es mit Standard-Go-APIs kompatibel ist. Enthält außerdem Testwerkzeuge.
- [resty](https://github.com/go-resty/resty) - Einfacher HTTP- und REST-Client für Go, inspiriert von Rubys rest-client.
- [rq](https://github.com/ddo/rq) - Eine schönere Schnittstelle für den HTTP-Client der Golang-Standardbibliothek.
- [sling](https://github.com/dghubble/sling) - Sling ist eine Go-HTTP-Client-Bibliothek zum Erstellen und Senden von API-Anfragen.
- [surf](https://github.com/enetx/surf) - Fortgeschrittener HTTP-Client mit Unterstützung für HTTP/1.1, HTTP/2, HTTP/3 (QUIC), SOCKS5-Proxys und TLS-Fingerprinting auf Browserniveau.
- [tls-client](https://github.com/bogdanfinn/tls-client) - HTTP-Client ähnlich wie net/http.Client mit Optionen zur Auswahl bestimmter Client-TLS-Fingerprints für Anfragen.

**[⬆ Zurück nach oben](#contents)**

## OpenGL

_Bibliotheken zur Verwendung von OpenGL in Go._

- [gl](https://github.com/go-gl/gl) - Go-Bindings für OpenGL (generiert über glow).
- [glfw](https://github.com/go-gl/glfw) - Go-Bindings für GLFW 3.
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - Go-Portierung der Bibliothek [glMatrix](https://glmatrix.net/).
- [goxjs/gl](https://github.com/goxjs/gl) - Plattformübergreifende OpenGL-Bindings für Go (OS X, Linux, Windows, Browser, iOS, Android).
- [goxjs/glfw](https://github.com/goxjs/glfw) - Plattformübergreifende glfw-Bibliothek für Go zum Erstellen eines OpenGL-Kontexts und zum Empfangen von Ereignissen.
- [mathgl](https://github.com/go-gl/mathgl) - Mathematikpaket in reinem Go, spezialisiert auf 3D-Mathematik, inspiriert von GLM.

**[⬆ Zurück nach oben](#contents)**

## ORM

_Bibliotheken, die objektrelationales Mapping oder Data-Mapping-Techniken implementieren._

- [bob](https://github.com/stephenafamo/bob) - SQL-Query-Builder und ORM-/Factory-Generator für Go. Nachfolger von SQLBoiler.
- [bun](https://github.com/uptrace/bun) - SQL-zentriertes ORM für Golang. Nachfolger von go-pg.
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Schemabasiertes, typisiertes Redis-Caching/Memoize-Framework für Go.
- [CQL](https://github.com/FrancoLiberali/cql) - Baut auf GORM auf und ergänzt zur Kompilierzeit verifizierte Abfragen auf Basis automatisch generierten Codes.
- [ent](https://github.com/facebook/ent) - Ein Entity-Framework für Go. Einfaches und dennoch leistungsstarkes ORM zur Modellierung und Abfrage von Daten.
- [go-dbw](https://github.com/hashicorp/go-dbw) - Ein einfaches Paket, das Datenbankoperationen kapselt.
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - Ein einfaches ORM für Google/Firebase Cloud Firestore.
- [go-sql](https://github.com/rushteam/gosql) - Ein einfaches ORM für MySQL.
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - Eine flexible und leistungsstarke Bibliothek zum Erstellen von SQL-Zeichenketten sowie ein ORM ohne Konfiguration.
- [go-store](https://github.com/gosuri/go-store) - Einfache und schnelle Key-Value-Store-Bibliothek für Go auf Basis von Redis.
- [golobby/orm](https://github.com/golobby/orm) - Einfaches, schnelles, typsicheres, generisches ORM für glückliche Entwickler.
- [GoooQo](https://github.com/doytowin/goooqo) - Ein Framework für den Datenbankzugriff auf Basis eines deklarativen Abfragemodells.
- [GORM](https://github.com/go-gorm/gorm) - Die fantastische ORM-Bibliothek für Golang, die entwicklerfreundlich sein will.
- [gormt](https://github.com/xxjwxc/gormt) - MySQL-Datenbank zu Golang-GORM-Structs.
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence, ORM-artige Bibliothek für Go.
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire ist eine Datenbankzugriffsschicht mit Validierung für Golang. (Unterstützt: MySQL, PostgreSQL und SQLite3).
- [lore](https://github.com/abrahambotros/lore) - Einfache und leichtgewichtige Pseudo-ORM-/Pseudo-Struct-Mapping-Umgebung für Go.
- [marlow](https://github.com/marlow/marlow) - Aus Projekt-Structs generiertes ORM für Sicherheitsgarantien zur Kompilierzeit.
- [pop/soda](https://github.com/gobuffalo/pop) - Datenbankmigration, -erstellung, ORM usw. für MySQL, PostgreSQL und SQLite.
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go, typsicherer Datenbankzugriff für Go.
- [reform](https://github.com/go-reform/reform) - Besseres ORM für Go, basierend auf nicht leeren Interfaces und Codegenerierung.
- [rel](https://github.com/go-rel/rel) - Moderne Datenbankzugriffsschicht für Golang – testbar, erweiterbar und zu einer sauberen und eleganten API geformt.
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - ORM-Generator. Erzeugt ein funktionsreiches und rasend schnelles ORM, das auf Ihr Datenbankschema zugeschnitten ist.
- [upper.io/db](https://github.com/upper/db) - Eine einheitliche Schnittstelle zur Interaktion mit verschiedenen Datenquellen über Adapter, die ausgereifte Datenbanktreiber kapseln.
- [XORM](https://gitea.com/xorm/xorm) - Einfaches und leistungsstarkes ORM für Go. (Unterstützt: MySQL, MyMysql, PostgreSQL, Tidb, SQLite3, MsSql und Oracle).
- [Zoom](https://github.com/albrow/zoom) - Rasend schneller Datenspeicher und Abfrage-Engine auf Basis von Redis.

**[⬆ Zurück nach oben](#contents)**

## Paketverwaltung

_Offizielle Werkzeuge für Abhängigkeits- und Paketverwaltung_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - Module sind die Einheit für den Austausch und die Versionierung von Quellcode. Der go-Befehl unterstützt die Arbeit mit Modulen direkt, einschließlich des Erfassens und Auflösens von Abhängigkeiten zu anderen Modulen.

_Inoffizielle Bibliotheken für Paket- und Abhängigkeitsverwaltung._

- [gup](https://github.com/nao1215/gup) - Aktualisiert per "go install" installierte Binärdateien.
- [modup](https://github.com/chaindead/modup) - Terminal-UI für Aktualisierungen von Go-Abhängigkeiten mit Erkennung veralteter Module und selektivem Upgrade.
- [syft](https://github.com/anchore/syft) - Ein CLI-Werkzeug und eine Go-Bibliothek zum Erzeugen einer Software Bill of Materials (SBOM) aus Container-Images und Dateisystemen.

**[⬆ Zurück nach oben](#contents)**

## Leistung

- [ebpf-go](https://github.com/cilium/ebpf) - Bietet Hilfsmittel zum Laden, Kompilieren und Debuggen von eBPF-Programmen.
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - Fügt allen Methoden und Funktionen automatisch Spans hinzu.
- [go-perfstat](https://github.com/go-perfstat/go) - Leichtgewichtige Performance-Statistiken und Aggregation von Ausführungszeiten für Go.
- [jaeger](https://github.com/jaegertracing/jaeger) - Ein System für verteiltes Tracing.
- [mm-go](https://github.com/joetifa2003/mm-go) - Generische manuelle Speicherverwaltung für Golang.
- [otelinji](https://github.com/hedhyw/otelinji) - OpenTelemetry-Werkzeug zur automatischen Instrumentierung, das Funktionen Spans hinzufügt.
- [pixie](https://github.com/pixie-labs/pixie) - Tracing ohne Instrumentierung für Golang-Anwendungen über eBPF.
- [profile](https://github.com/pkg/profile) - Einfaches Paket zur Profiling-Unterstützung für Go.
- [statsviz](https://github.com/arl/statsviz) - Live-Visualisierung der Laufzeitstatistiken Ihrer Go-Anwendung.
- [tracer](https://github.com/kamilsk/tracer) - Einfaches, leichtgewichtiges Tracing.

**[⬆ Zurück nach oben](#contents)**

## Abfragesprachen

- [api-fu](https://github.com/ccbrown/api-fu) - Umfassende GraphQL-Implementierung.
- [dasel](https://github.com/tomwright/dasel) - Datenstrukturen über die Kommandozeile mithilfe von Selektoren abfragen und aktualisieren. Vergleichbar mit jq/yq, unterstützt aber JSON, YAML, TOML und XML ohne Laufzeitabhängigkeiten.
- [gnata](https://github.com/RecoLabs/gnata) - Implementierung der Abfrage- und Transformationssprache JSONata 2.x in reinem Go.
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - Ein einfaches Go-Paket für Abfragen über JSON-Daten.
- [goven](https://github.com/SeldonIO/goven) - Eine direkt einsetzbare Abfragesprache für jedes Datenbankschema.
- [gqlgen](https://github.com/99designs/gqlgen) - GraphQL-Serverbibliothek auf Basis von go generate.
- [grapher](https://github.com/reaganiwadha/grapher) - Ein GraphQL-Feld-Builder, der Go-Generics nutzt, mit zusätzlichen Hilfsmitteln und Funktionen.
- [graphql](https://github.com/neelance/graphql-go) - GraphQL-Server mit Fokus auf Benutzerfreundlichkeit.
- [graphql-go](https://github.com/graphql-go/graphql) - Implementierung von GraphQL für Go.
- [gws](https://github.com/Zaba505/gws) - Client- und Server-Implementierung von Apollos „GraphQL over Websocket“.
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - Eine Abfragebibliothek zum Abrufen von Teilen eines JSON-Dokuments auf Basis der JSONPath-Syntax.
- [jsonql](https://github.com/elgs/jsonql) - Bibliothek für JSON-Abfrageausdrücke in Golang.
- [jsonslice](https://github.com/bhmj/jsonslice) - Jsonpath-Abfragen mit erweiterten Filtern.
- [mql](https://github.com/hashicorp/mql) - Model Query Language (mql) ist eine Abfragesprache für Ihre Datenbankmodelle.
- [play](https://github.com/paololazzari/play) - Ein TUI-Spielplatz zum Experimentieren mit Ihren Lieblingsprogrammen wie grep, sed, awk, jq und yq.
- [rql](https://github.com/a8m/rql) - Resource Query Language für REST-APIs.
- [rqp](https://github.com/timsolov/rest-query-parser) - Abfrageparser für REST-APIs. Filterung, Validierungen sowie `AND`- und `OR`-Operationen werden direkt in der Abfrage unterstützt.
- [straf](https://github.com/SonicRoshan/straf) - Golang-Structs einfach in GraphQL-Objekte konvertieren.

**[⬆ Zurück nach oben](#contents)**

## Reflexion

- [copy](https://github.com/gotidy/copy) - Paket zum schnellen Kopieren von Structs unterschiedlicher Typen.
- [Deepcopier](https://github.com/ulule/deepcopier) - Einfaches Kopieren von Structs für Go.
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - Schnelle Deep-Copy-Bibliothek.
- [goenum](https://github.com/lvyahui8/goenum) - Ein allgemeines Aufzählungs-Struct auf Basis von Generics und Reflection, mit dem Sie schnell Aufzählungen definieren und eine Reihe nützlicher Standardmethoden verwenden können.
- [gotype](https://github.com/wzshiming/gotype) - Parsen von Golang-Quellcode, Verwendung wie beim Paket reflect.
- [gpath](https://github.com/tenntenn/gpath) - Bibliothek zur Vereinfachung des Zugriffs auf Struct-Felder mit Go-Ausdrücken per Reflection.
- [objwalker](https://github.com/rekby/objwalker) - Go-Objekte per Reflection durchlaufen.
- [reflectpro](https://github.com/gontainer/reflectpro) - Caller, Copier, Getter und Setter für Go.
- [reflectutils](https://github.com/muir/reflectutils) - Hilfsmittel für die Arbeit mit Reflection: Parsen von Struct-Tags, rekursives Durchlaufen, Befüllen von Werten aus Zeichenketten.

**[⬆ Zurück nach oben](#contents)**

## Einbettung von Ressourcen

- [debme](https://github.com/leaanthony/debme) - Ein `embed.FS` aus einem Unterverzeichnis eines bestehenden `embed.FS` erstellen.
- [embed](https://pkg.go.dev/embed) - Das Paket embed bietet Zugriff auf Dateien, die in das laufende Go-Programm eingebettet sind.
- [rebed](https://github.com/soypat/rebed) - Ordnerstrukturen und Dateien aus dem Typ `embed.FS` von Go 1.16 wiederherstellen
- [vfsgen](https://github.com/shurcooL/vfsgen) - Erzeugt eine Datei vfsdata.go, die das angegebene virtuelle Dateisystem statisch implementiert.

**[⬆ Zurück nach oben](#contents)**

## Wissenschaft und Datenanalyse

_Bibliotheken für wissenschaftliches Rechnen und Datenanalyse._

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - Stellt ein Bradley-Terry-Modell für paarweise Vergleiche bereit.
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Kalender-Heatmap in reinem Go, inspiriert von der Beitragsaktivität auf Github.
- [chart](https://github.com/vdobler/chart) - Einfache Bibliothek zum Zeichnen von Diagrammen für Go. Unterstützt viele Diagrammtypen.
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - DataFrames für maschinelles Lernen und Statistik (ähnlich wie pandas).
- [decimal](https://github.com/db47h/decimal) - Das Paket decimal implementiert dezimale Gleitkommaarithmetik mit beliebiger Genauigkeit.
- [entitydebs](https://github.com/ndabAP/entitydebs) - Ein sozialwissenschaftliches Werkzeug zur programmatischen Analyse von Entitäten in Sachtexten mit integriertem Dependency-Parser.
- [evaler](https://github.com/soniah/evaler) - Einfacher Auswerter für arithmetische Gleitkommaausdrücke.
- [ewma](https://github.com/VividCortex/ewma) - Exponentiell gewichtete gleitende Durchschnitte.
- [geom](https://github.com/skelterjohn/geom) - 2D-Geometrie für Golang.
- [go-dsp](https://github.com/mjibson/go-dsp) - Digitale Signalverarbeitung für Go.
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Algorithmen zur Zustandsschätzung und Filterung in Go.
- [go-gt](https://github.com/ThePaw/go-gt) - Algorithmen der Graphentheorie, geschrieben in der Sprache „Go“.
- [go-hep](https://github.com/go-hep/hep) - Eine Sammlung von Bibliotheken und Werkzeugen, um Analysen in der Hochenergiephysik mühelos durchzuführen.
- [godesim](https://github.com/soypat/godesim) - Erweitertes/multivariables ODE-Löser-Framework für ereignisbasierte Simulationen mit einfacher API.
- [goent](https://github.com/kzahedi/goent) - GO-Implementierung von Entropiemaßen.
- [gograph](https://github.com/hmdsefi/gograph) - Eine generische Graph-Bibliothek für Golang, die mathematische Graphentheorie und Algorithmen bereitstellt.
- [gonum](https://github.com/gonum/gonum) - Gonum ist eine Sammlung numerischer Bibliotheken für die Programmiersprache Go. Sie enthält Bibliotheken für Matrizen, Statistik, Optimierung und mehr.
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot bietet eine API zum Erstellen und Zeichnen von Plots in Go.
- [goraph](https://github.com/gyuho/goraph) - Bibliothek für Graphentheorie in reinem Go (Datenstruktur, Visualisierung von Algorithmen).
- [gosl](https://github.com/cpmech/gosl) - Wissenschaftliche Go-Bibliothek für lineare Algebra, FFT, Geometrie, NURBS, numerische Methoden, Wahrscheinlichkeiten, Optimierung, Differentialgleichungen und mehr.
- [GoStats](https://github.com/OGFris/GoStats) - GoStats ist eine Open-Source-Bibliothek in GoLang für mathematische Statistik, die vor allem im Bereich maschinelles Lernen eingesetzt wird; sie deckt die meisten statistischen Kennzahlfunktionen ab.
- [graph](https://github.com/yourbasic/graph) - Bibliothek grundlegender Graphalgorithmen.
- [hdf5](https://github.com/scigolib/hdf5) - Implementierung des Dateiformats HDF5 in reinem Go zur Speicherung und zum Austausch wissenschaftlicher Daten.
- [insyra](https://github.com/HazelnutParadise/insyra) - Bibliothek für Datenanalyse mit Statistik, Visualisierung, Parquet-Unterstützung und Python-Integration.
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - Werkzeug zur Bearbeitung von JSONL-Graphen mit Graphviz-Unterstützung.
- [matlab](https://github.com/scigolib/matlab) - Bibliothek in reinem Go zum Lesen und Schreiben von MATLAB-.mat-Dateien (v5–v7.3) ohne CGO.
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go ist ein Open-Source-Paket zur Definition mathematischer Programme (z. B. konvexer Optimierungsprobleme) in Go.
- [matrix](https://github.com/Arceus-7/matrix) - Ein sauberes, generisches Paket für Matrizenrechnung ohne Abhängigkeiten für Go, mit Unterstützung für Arithmetik, Zerlegungen und das Lösen linearer Gleichungssysteme.
- [ode](https://github.com/ChristopherRabotin/ode) - Löser für gewöhnliche Differentialgleichungen (ODE), der erweiterte Zustände und Channel-basierte Abbruchbedingungen für Iterationen unterstützt.
- [orb](https://github.com/paulmach/orb) - 2D-Geometrietypen mit Clipping, GeoJSON- und Mapbox-Vector-Tile-Unterstützung.
- [pagerank](https://github.com/alixaxel/pagerank) - Gewichteter PageRank-Algorithmus, implementiert in Go.
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - Winzige Bibliothek für lineare Interpolation.
- [PiHex](https://github.com/claygod/PiHex) - Implementierung des „Bailey-Borwein-Plouffe“-Algorithmus für die hexadezimale Darstellung der Zahl Pi.
- [Poly](https://github.com/bebop/poly) - Ein Go-Paket für das Engineering von Organismen.
- [rootfinding](https://github.com/khezen/rootfinding) - Bibliothek mit Algorithmen zur Nullstellensuche für quadratische Funktionen.
- [simd](https://github.com/tphakala/simd) - Native Vektor- und SIMD-Operationen für Slices in Go mit Assembly-Beschleunigung für mehrere Architekturen.
- [sparse](https://github.com/james-bowman/sparse) - Formate für dünnbesetzte Matrizen in Go für lineare Algebra, die wissenschaftliche Anwendungen und Anwendungen des maschinellen Lernens unterstützen, kompatibel mit den Matrix-Bibliotheken von gonum.
- [stats](https://github.com/montanaflynn/stats) - Statistikpaket mit gängigen Funktionen, die in der Golang-Standardbibliothek fehlen.
- [streamtools](https://github.com/nytlabs/streamtools) - Universelles grafisches Werkzeug für den Umgang mit Datenströmen.
- [taxonkit](https://github.com/shenwei356/taxonkit) - Ein praktisches und effizientes Toolkit für die NCBI-Taxonomie; unterstützt das Abfragen von Abstammungslinien, Umformatieren, Filtern und Erstellen eigener taxdump-Dateien.
- [TextRank](https://github.com/DavidBelicza/TextRank) - TextRank-Implementierung in Golang mit erweiterbaren Funktionen (Zusammenfassung, Gewichtung, Phrasenextraktion) und Multithreading-Unterstützung (Goroutinen).
- [topk](https://github.com/keilerkonzept/topk) - Top-K-Sketches mit gleitendem Fenster und reguläre Top-K-Sketches auf Basis des HeavyKeeper-Algorithmus.
- [triangolatte](https://github.com/tchayen/triangolatte) - 2D-Triangulationsbibliothek. Ermöglicht die Übersetzung von Linien und Polygonen (beide punktbasiert) in die Sprache von GPUs.

**[⬆ Zurück nach oben](#contents)**

## Sicherheit

_Bibliotheken, die dabei helfen, Ihre Anwendung sicherer zu machen._

- [acme-proxy](https://github.com/esnet/acme-proxy) - Löst die ACME-Challenge http-01, ohne Port 80 zum Internet zu öffnen, und bezieht Zertifikate von einer externen Zertifizierungsstelle.
- [acmetool](https://github.com/hlandau/acme) - ACME-Client-Werkzeug (Let's Encrypt) mit automatischer Erneuerung.
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Kleines Go-Paket zur kryptografisch sicheren Passwortgenerierung.
- [acra](https://github.com/cossacklabs/acra) - Netzwerk-Verschlüsselungsproxy zum Schutz datenbankbasierter Anwendungen vor Datenlecks: starke selektive Verschlüsselung, Verhinderung von SQL-Injections, Intrusion-Detection-System.
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - Ein deterministischer Zufallsbitgenerator auf Basis von AES im Counter-Modus (AES-CTR-DRBG) gemäß NIST SP 800-90A.
- [age](https://github.com/FiloSottile/age) - Ein einfaches, modernes und sicheres Verschlüsselungswerkzeug (und Go-Bibliothek) mit kleinen expliziten Schlüsseln, ohne Konfigurationsoptionen und mit Kombinierbarkeit im UNIX-Stil.
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Schlanker Wrapper um das argon2-Paket von Go, der sich eng an den Paketen Bcrypt und simple-scrypt der Go-Standardbibliothek orientiert.
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Let's-Encrypt-Zertifikate automatisch bereitstellen und einen TLS-Server starten.
- [BadActor](https://github.com/jaredfolkins/badactor) - In-Memory-Jailer auf Anwendungsebene im Geiste von fail2ban.
- [beelzebub](https://github.com/mariocandela/beelzebub) - Ein sicheres Low-Code-Honeypot-Framework, das KI zur Systemvirtualisierung nutzt.
- [booster](https://github.com/anatol/booster) - Schneller initramfs-Generator mit Unterstützung für Festplattenvollverschlüsselung.
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Web-Application-Firewall-Middleware für den Caddy-Server, mit Regex-Regel-Engine, Anomalie-Scoring, IP/DNS/ASN/Länder-Blacklists und Ratenbegrenzung.
- [Cameradar](https://github.com/Ullaakut/cameradar) - Werkzeug und Bibliothek, um RTSP-Streams von Überwachungskameras aus der Ferne zu hacken.
- [canery](https://github.com/rluders/canery) - Minimale, zustandslose Autorisierungs-Engine mit austauschbarem Auswertungsmodell.
- [certificates](https://github.com/mvmaasakkers/certificates) - Ein meinungsstarkes Werkzeug zum Erzeugen von TLS-Zertifikaten.
- [CertMagic](https://github.com/caddyserver/certmagic) - Ausgereifte, robuste und leistungsstarke ACME-Client-Integration für vollständig verwaltete Ausstellung und Erneuerung von TLS-Zertifikaten.
- [Coraza](https://github.com/corazawaf/coraza) - Unternehmenstaugliche, mit modsecurity und OWASP CRS kompatible WAF-Bibliothek.
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - Eigenständiges CLI-Werkzeug zur Validierung von ModSecurity- und Coraza-SecLang-WAF-Regeln vor dem Produktiveinsatz.
- [Crenox](https://github.com/crenoxhq/crenox) - Pre-Commit-Secret-Scanner ohne Abhängigkeiten, der Aho-Corasick für die hochperformante Erkennung von Zugangsdaten-Lecks verwendet.
- [deidentify](https://github.com/aliengiraffe/deidentify) - Deterministische, formaterhaltende Entfernung personenbezogener Daten aus Texten und strukturierten Daten.
- [dongle](https://github.com/golang-module/dongle) - Ein einfaches, semantisches und entwicklerfreundliches Golang-Paket für Kodierung und Dekodierung sowie Ver- und Entschlüsselung.
- [dotlock](https://github.com/ahmadraza100/dotlock) - Manager für verschlüsselte .env-Tresore mit interaktiver TUI zur Verwaltung von Secrets über mehrere Umgebungen und Profile hinweg.
- [encid](https://github.com/bobg/encid) - Verschlüsselte ganzzahlige IDs kodieren und dekodieren.
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - Entropie-Passwortgenerator mit umfangreichen Kommandozeilenargumenten zum sicheren Erzeugen zufälliger Zeichenketten, darunter Ziffern, Passwörter und Passwörter aus seltenen Wörterbuchwörtern, gemischt mit Symbolen und Ziffern.
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Eine REST-Anwendung zur dynamischen Aktualisierung von firewalld-Regeln auf einem Linux-Server.
- [fort](https://github.com/djadmin/fort) - Prüft macOS-Sicherheitseinstellungen anhand von 16 Checks, gibt eine Bewertung aus und behebt Probleme, wo dies sicher möglich ist. Eine einzige Binärdatei, installierbar über Homebrew.
- [go-generate-password](https://github.com/m1/go-generate-password) - Passwortgenerator, der über die CLI oder als Bibliothek verwendet werden kann.
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Apache-htpasswd-Parser für Go.
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - Passwort-Validator auf Basis roher kryptografischer Entropiewerte.
- [go-peer](https://github.com/number571/go-peer) - Eine Softwarebibliothek zum Erstellen sicherer und anonymer dezentraler Systeme.
- [go-yara](https://github.com/hillu/go-yara) - Go-Bindings für [YARA](https://github.com/plusvic/yara), das „Schweizer Taschenmesser für Mustererkennung für Malware-Forscher (und alle anderen)“.
- [goArgonPass](https://github.com/dwin/goArgonPass) - Argon2-Passwort-Hashing und -Verifizierung, kompatibel mit bestehenden Python- und PHP-Implementierungen.
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - Ein wahrscheinlich paranoides Paket zum sicheren Hashen und Verschlüsseln von Passwörtern.
- [gost-crypto](https://github.com/rekurt/gost-crypto) - Go-Bibliothek für russische kryptografische GOST-Standards (digitale Signaturen, Streebog-Hash, Kuznechik-Chiffre, MGM AEAD) auf Basis von OpenSSL gost-engine.
- [grim](https://github.com/ijin82/grim) - Schnelles und sicheres CLI-Werkzeug zur Verwaltung verschlüsselter Markdown-Notiz-Tresore im flüchtigen Speicher.
- [gspy](https://github.com/Mutasem-mk4/gspy) - Forensischer Inspektor für die Zuordnung von Goroutinen zu Syscalls in laufenden Go-Prozessen.
- [Interpol](https://github.com/avahidi/interpol) - Regelbasierter Datengenerator für Fuzzing und Penetrationstests.
- [leakhound](https://github.com/nilpoona/leakhound) - Werkzeug zur statischen Analyse, das versehentliches Logging sensibler Struct-Felder erkennt und so Datenlecks in Logs verhindert.
- [lego](https://github.com/go-acme/lego) - ACME-Client-Bibliothek und CLI-Werkzeug in reinem Go (zur Verwendung mit Let's Encrypt).
- [luks.go](https://github.com/anatol/luks.go) - Bibliothek in reinem Golang zur Verwaltung von LUKS-Partitionen.
- [mcprobe](https://github.com/tamish560/mcprobe) - Sicherheitsscanner für MCP-Server mit Erkennung von Prompt-Injection, Tool-Shadowing und SARIF-Ausgabe.
- [memguard](https://github.com/awnumar/memguard) - Eine Bibliothek in reinem Go zum Umgang mit sensiblen Werten im Speicher.
- [mist](https://github.com/iSerganov/mist) - Audio-Steganografie-Bibliothek mit asymmetrischen Schlüsseln, die verschlüsselte Nachrichten mithilfe von X25519 und ChaCha20-Poly1305 in komprimiertem Audio versteckt.
- [multikey](https://github.com/adrianosela/multikey) - Ein Framework zur n-aus-N-Schlüssel-Ver-/Entschlüsselung auf Basis des Shamir's-Secret-Sharing-Algorithmus.
- [nacl](https://github.com/kevinburke/nacl) - Go-Implementierung der NaCL-API-Sammlung.
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - Entfernt Secrets in einem einzigen Durchlauf aus Logzeilen und HTTP-Dumps, einschließlich Headern, JSON, XML, URL-kodierten Daten, JWTs, PEM-Schlüsseln und Anbieter-Tokens.
- [optimus-go](https://github.com/pjebs/optimus-go) - ID-Hashing und Verschleierung mit dem Algorithmus von Knuth.
- [osv-scanner](https://github.com/google/osv-scanner) - In Go geschriebener Schwachstellenscanner, der die von OSV bereitgestellten Daten nutzt.
- [passlib](https://github.com/hlandau/passlib) - Zukunftssichere Bibliothek für Passwort-Hashing.
- [passwap](https://github.com/zitadel/passwap) - Bietet eine einheitliche Implementierung für verschiedene Passwort-Hashing-Algorithmen
- [pii-shield](https://github.com/pii-shield/pii-shield) - Zero-Code-Sidecar zur Bereinigung von Logs für Kubernetes, das personenbezogene Daten (PII) aus Logs schwärzt.
- [pm](https://github.com/nicola-strappazzon/password-manager) - Passwortmanager im Unix-Stil, geschrieben in Go, der Ihre Daten mit OpenPGP-Verschlüsselung speichert.
- [procscope](https://github.com/Mutasem-mk4/procscope) - Prozessbezogenes Laufzeit-Analysewerkzeug, das eBPF nutzt, um Prozesslebenszyklus, Dateiaktivitäten und Netzwerkverbindungen nachzuverfolgen.
- [qrand](https://github.com/bitfield/qrand) - Client für die ANU-Quantum-Numbers-API (AQN), die quantenmechanisch sichere Zufallsdaten liefert.
- [Razify](https://github.com/Hossiy21/razify) - CLI zum Scannen, Validieren und Prüfen von .env-Dateien auf geleakte Secrets und Abweichungen zwischen Umgebungen.
- [redact](https://github.com/alesr/redact) - Sensible Informationen aus slog-basierten Logs mit einer konfigurierbaren Pipeline schwärzen.
- [SafeDep/vet](https://github.com/safedep/vet) - Schutz vor bösartigen Open-Source-Paketen.
- [secret](https://github.com/rsjethani/secret) - Verhindern Sie, dass Ihre Secrets in Logs, std\* usw. gelangen.
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - CSPRNG-gestützter Generator für Zugangsdaten mit versioniertem JSON-Schema für Passwörter, Passphrasen, Secrets, API-Schlüssel und PINs.
- [secure](https://github.com/unrolled/secure) - HTTP-Middleware für Go, die einige schnelle Sicherheitsgewinne ermöglicht.
- [secureio](https://github.com/xaionaro-go/secureio) - Ein Wrapper und Multiplexer mit Schlüsselaustausch, Authentifizierung und Verschlüsselung für `io.ReadWriteCloser` auf Basis von XChaCha20-poly1305, ECDH und ED25519.
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - Scrypt-Paket mit einer einfachen, offensichtlichen API und integrierter automatischer Kostenkalibrierung.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - Ver- und Entschlüsselung mit SSH-Schlüsseln.
- [sslmgr](https://github.com/adrianosela/sslmgr) - SSL-Zertifikate leicht gemacht mit einem High-Level-Wrapper um acme/autocert.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf ist eine Go-HTTP-Middleware, die teler-IDS-Funktionalität bietet, um vor webbasierten Angriffen zu schützen und die Sicherheit Go-basierter Webanwendungen zu verbessern. Sie ist hochgradig konfigurierbar und lässt sich einfach in bestehende Go-Anwendungen integrieren.
- [themis](https://github.com/cossacklabs/themis) - High-Level-Kryptografiebibliothek zur Lösung typischer Datensicherheitsaufgaben (sichere Datenspeicherung, sicheres Messaging, Zero-Knowledge-Proof-Authentifizierung), verfügbar für 14 Sprachen, am besten geeignet für plattformübergreifende Apps.
- [urusai](https://github.com/calpa/urusai) - Urusai (japanisch für „laut“) ist eine Go-Implementierung eines Generators für zufälliges HTTP/DNS-Verkehrsrauschen, der durch digitale Nebelwände beim Surfen die Privatsphäre schützt.
- [veil](https://github.com/getveil/veil) - Lokaler HTTPS-Proxy, der API-Zugangsdaten vor KI-Coding-Agenten verbirgt. Integration mit dem OS-Schlüsselbund, formatbewusste Platzhalter, SQLite-Audit-Log.
- [y509](https://github.com/kanywst/y509) - TUI für X.509-Zertifikatsketten, die meldet, ob eine Kette verifiziert werden kann und – separat davon – ob ein Server sie korrekt ausgeliefert hat.


**[⬆ Zurück nach oben](#contents)**

## Serialisierung

_Bibliotheken und Werkzeuge für binäre Serialisierung._

- [bambam](https://github.com/glycerine/bambam) - Generator für Cap'n-Proto-Schemas aus Go.
- [bel](https://github.com/32leaves/bel) - TypeScript-Interfaces aus Go-Structs/-Interfaces generieren. Nützlich für JSON-RPC.
- [binstruct](https://github.com/ghostiam/binstruct) - Golang-Binärdecoder zum Abbilden von Daten auf Strukturen.
- [cbor](https://github.com/fxamacker/cbor) - Kleine, sichere und einfache Bibliothek zum Kodieren und Dekodieren von CBOR.
- [colfer](https://github.com/pascaldekloe/colfer) - Codegenerierung für das Binärformat Colfer.
- [csvutil](https://github.com/jszwec/csvutil) - Hochperformantes, idiomatisches Kodieren und Dekodieren von CSV-Datensätzen in native Go-Strukturen.
- [elastic](https://github.com/epiclabs-io/elastic) - Slices, Maps oder beliebige andere unbekannte Werte zur Laufzeit zwischen verschiedenen Typen konvertieren – egal was.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - Textformatierung mit fester Breite (UTF-8 wird unterstützt).
- [fwencoder](https://github.com/o1egl/fwencoder) - Parser für Dateien mit fester Breite (Bibliothek zum Kodieren und Dekodieren) für Go.
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Cap'n-Proto-Bibliothek und -Parser für Go.
- [go-codec](https://github.com/ugorji/go) - Hochperformante, funktionsreiche, idiomatische Bibliothek zum Kodieren, Dekodieren und für RPC für msgpack, cbor und json, mit laufzeitbasierter ODER Codegenerierungs-Unterstützung.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - Bibliothek zur CSV-Serialisierung/-Deserialisierung mit High-Level- und umfangreichen Funktionen.
- [goprotobuf](https://github.com/golang/protobuf) - Go-Unterstützung für die Protocol Buffers von Google in Form einer Bibliothek und eines Plugins für den Protokoll-Compiler.
- [gotiny](https://github.com/raszia/gotiny) - Effiziente Go-Serialisierungsbibliothek; gotiny ist fast so schnell wie Serialisierungsbibliotheken, die Code generieren.
- [jsoniter](https://github.com/json-iterator/go) - Hochperformanter, zu 100 % kompatibler direkter Ersatz für "encoding/json".
- [mus-go](https://github.com/mus-format/mus-go) - Serialisierer für das MUS-Format für Go.
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - GoLang-Bibliothek für die Arbeit mit dem PHP-Session-Format und den PHP-Funktionen Serialize/Unserialize.
- [pletter](https://github.com/vimeda/pletter) - Ein Standardweg, Proto-Nachrichten für Message-Broker zu verpacken.
- [proto](https://github.com/emicklei/proto) - Parser und Writer für .proto-Dateien von Google ProtocolBuffers.
- [structomap](https://github.com/tuvistavie/structomap) - Bibliothek zum einfachen und dynamischen Erzeugen von Maps aus statischen Strukturen.
- [unitpacking](https://github.com/recolude/unitpacking) - Bibliothek zum Packen von Einheitsvektoren in möglichst wenige Bytes.

**[⬆ Zurück nach oben](#contents)**

## Serveranwendungen

- [algernon](https://github.com/xyproto/algernon) - HTTP/2-Webserver mit integrierter Unterstützung für Lua, Markdown, GCSS und Amber.
- [Caddy](https://github.com/caddyserver/caddy) - Caddy ist ein alternativer HTTP/2-Webserver, der einfach zu konfigurieren und zu verwenden ist.
- [Casdoor](https://github.com/casdoor/casdoor) - Server für Identity and Access Management (IAM) und Single Sign-on (SSO) mit Web-UI, unterstützt OAuth 2.0, OIDC, SAML, CAS und LDAP.
- [consul](https://www.consul.io/) - Consul ist ein Werkzeug für Service Discovery, Überwachung und Konfiguration.
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Prometheus-Remote-Write-Proxy, der anhand von Metrik-Labels einen Cortex-Tenant-ID-Header hinzufügt.
- [devd](https://github.com/cortesi/devd) - Lokaler Webserver für Entwickler.
- [discovery](https://github.com/Bilibili/discovery) - Eine Registry für resiliente Lastverteilung und Failover in der mittleren Schicht.
- [dudeldu](https://github.com/krotik/dudeldu) - Ein einfacher SHOUTcast-Server.
- [Easegress](https://github.com/megaease/easegress) - Ein Cloud-natives, hochverfügbares/hochperformantes System zur Orchestrierung von Datenverkehr mit Observability und Erweiterbarkeit.
- [Engity's Bifröst](https://bifroest.engity.org/) - Hochgradig anpassbarer SSH-Server mit mehreren Möglichkeiten, einen Benutzer zu autorisieren und festzulegen, wie seine Sitzung ausgeführt wird (lokal oder in Containern).
- [etcd](https://github.com/etcd-io/etcd) - Hochverfügbarer Key-Value-Store für gemeinsame Konfiguration und Service Discovery.
- [Euterpe](https://github.com/ironsmile/euterpe) - Selbst gehosteter Musik-Streaming-Server mit integrierter Web-UI und REST-API.
- [Fider](https://github.com/getfider/fider) - Fider ist eine offene Plattform zum Sammeln und Organisieren von Kundenfeedback.
- [Flagr](https://github.com/checkr/flagr) - Flagr ist ein Open-Source-Dienst für Feature-Flags und A/B-Tests.
- [flipt](https://github.com/markphelps/flipt) - Eine eigenständige Feature-Flag-Lösung, geschrieben in Go und Vue.js
- [flue](https://github.com/karnstack/flue) - Selbst gehosteter Daemon, der Terminalsitzungen in einem Browser-Tab bereitstellt. Sitzungen laufen weiter, nachdem der Tab geschlossen wurde.
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - Eine einfache, vollständige und leichtgewichtige selbst gehostete Feature-Flag-Lösung, zu 100 % Open Source.
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Einfacher Reverse-Proxy mit Caching, geschrieben in Go, unter Verwendung von Redis.
- [gondola](https://github.com/bmf-san/gondola) - Ein YAML-basierter Reverse-Proxy in Golang.
- [goshs](https://github.com/patrickhener/goshs) - Ersatz für SimpleHTTPServer mit Datei-Upload/-Download, WebDAV, SFTP, SMB, TLS, Authentifizierung und Freigabelinks.
- [Kono](https://github.com/starwalkn/kono) - Leichtgewichtiges, erweiterbares API-Gateway in Go – paralleles Fan-out, flexible Aggregation und Magie ohne Konfiguration.
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - Reverse-Proxy für HTTPS mit spontaner Ausstellung von Zertifikaten über Let's Encrypt.
- [minio](https://github.com/pgsty/minio) - Von der Community gepflegter Fork von minio (Object Storage Service).
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy ist ein einfacher Mock- und Proxy-Anwendungsserver: Sie können Mock-Endpunkte erstellen und Anfragen weiterleiten, falls für einen Endpunkt kein Mock existiert.
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Nginx-Log-Parser und -Exporter für Prometheus.
- [nsq](https://nsq.io/) - Eine verteilte Echtzeit-Messaging-Plattform.
- [OpenRun](https://github.com/openrundev/openrun) - Open-Source-Alternative zu Google Cloud Run und AWS App Runner. Interne Werkzeuge einfach im Team bereitstellen.
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase ist ein Echtzeit-Backend in einer einzigen Datei, bestehend aus einer eingebetteten Datenbank (SQLite) mit Echtzeit-Abonnements, integrierter Authentifizierungsverwaltung und vielem mehr.
- [protoxy](https://github.com/camgraff/protoxy) - Ein Proxyserver, der JSON-Request-Bodies in Protocol Buffers konvertiert.
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - Datenbankereignisse von PostgreSQL nach Kafka streamen.
- [relay](https://github.com/valtors/relay) - MCP-Server mit mehr als 40 Werkzeugen für KI-Agenten. Dateioperationen, Websuche, Screenshots, Multi-Agenten-Koordination. Eine einzige Go-Binärdatei.
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Relay zur Lastverteilung von Riemann-Ereignissen und/oder deren Konvertierung nach Carbon.
- [RoadRunner](https://github.com/spiral/roadrunner) - Hochperformanter PHP-Anwendungsserver, Load Balancer und Prozessmanager.
- [SFTPGo](https://github.com/drakkan/sftpgo) - Voll ausgestatteter und hochgradig konfigurierbarer SFTP-Server mit optionaler FTP/S- und WebDAV-Unterstützung. Er kann lokale Dateisysteme und Cloud-Storage-Backends wie S3 und Google Cloud Storage bereitstellen.
- [simpleconf](https://github.com/shaunlee/simpleconf) - Konfigurationsserver, der ein JSON-Dokument vorhält, das über HTTP und TCP per Schlüsselpfad gelesen und geschrieben wird, mit optionalem Raft-Clustering.
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTP-Reverse-Proxy-Cache und Zeitreihen-Beschleuniger.
- [wd-41](https://github.com/baalimago/wd-41) - Ein (W)eb-(D)evelopment-Server mit automatischem Live-Reload bei Dateiänderungen.
- [whois](https://github.com/KincaidYang/whois) - Selbst gehosteter WHOIS/RDAP-Abfragedienst und MCP-Server für Domains, IPv4/IPv6-Adressen, CIDRs und ASNs.
- [Wish](https://github.com/charmbracelet/wish) - SSH-Apps erstellen, einfach so!

**[⬆ Zurück nach oben](#contents)**

## Stream-Verarbeitung

_Bibliotheken und Werkzeuge für Stream-Verarbeitung und reaktive Programmierung._

- [go-etl](https://github.com/Breeze0806/go-etl) - Ein leichtgewichtiges Toolkit zum Extrahieren, Transformieren und Laden (ETL) von Datenquellen.
- [go-streams](https://github.com/reugn/go-streams) - Go-Bibliothek für Stream-Verarbeitung.
- [goio](https://github.com/primetalk/goio) - Eine Implementierung von IO, Stream und Fiber für Golang, inspiriert von den großartigen Scala-Bibliotheken cats und fs2.
- [gostream](https://github.com/mariomac/gostream) - Typsichere Bibliothek für Stream-Verarbeitung, inspiriert von der Java Streams API.
- [machine](https://github.com/whitaker-io/machine) - Go-Bibliothek zum Schreiben und Generieren von Stream-Workern mit integrierten Metriken und Nachverfolgbarkeit.
- [nibbler](https://github.com/naughtygopher/nibbler) - Ein leichtgewichtiges Paket für Micro-Batch-Verarbeitung.
- [ro](https://github.com/samber/ro) - Reaktive Programmierung: deklarative und komponierbare API für ereignisgesteuerte Anwendungen.
- [signals](https://github.com/coregx/signals) - Typsichere reaktive Zustandsverwaltung, inspiriert von Angular Signals, mit berechneten Werten, Effekten und Abhängigkeitsverfolgung.
- [stream](https://github.com/youthlin/stream) - Go Stream, wie Java 8 Stream: Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce …
- [StreamSQL](https://github.com/rulego/streamsql) - Eine leichtgewichtige Streaming-SQL-Engine für Echtzeit-Datenverarbeitung.

**[⬆ Zurück nach oben](#contents)**

## Template-Engines

_Bibliotheken und Werkzeuge für Templating und lexikalische Analyse._

- [bagme](https://github.com/boxesandglue/bagme) - HTML/CSS-zu-PDF-Rendering mit Satzqualität auf TeX-Niveau in reinem Go.
- [ego](https://github.com/benbjohnson/ego) - Leichtgewichtige Templating-Sprache, mit der Sie Vorlagen in Go schreiben können. Vorlagen werden in Go übersetzt und kompiliert.
- [fasttemplate](https://github.com/valyala/fasttemplate) - Einfache und schnelle Template-Engine. Ersetzt Platzhalter in Vorlagen bis zu 10-mal schneller als [text/template](https://golang.org/pkg/text/template/).
- [gomponents](https://www.gomponents.com) - HTML-5-Komponenten in reinem Go, die etwa so aussehen: `func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`.
- [got](https://github.com/goradd/got) - Ein Go-Codegenerator, inspiriert von Hero und Fasttemplate. Bietet Include-Dateien, benutzerdefinierte Tag-Definitionen, eingebetteten Go-Code, Sprachübersetzung und mehr.
- [goview](https://github.com/foolin/goview) - Goview ist eine leichtgewichtige, minimalistische und idiomatische Template-Bibliothek auf Basis von Golangs html/template zum Erstellen von Go-Webanwendungen.
- [gox](https://github.com/doors-dev/gox) - HTML-Vorlagen als erstklassige Go-Ausdrücke, mit nahtloser Editor-Unterstützung.
- [htmgo](https://htmgo.dev) - Einfache und skalierbare Systeme mit Go + htmx erstellen
- [jet](https://github.com/CloudyKit/jet) - Jet-Template-Engine.
- [liquid](https://github.com/osteele/liquid) - Go-Implementierung der Liquid-Templates von Shopify.
- [liquidgo](https://github.com/Notifuse/liquidgo) - Vollständige Go-Implementierung der Liquid-Template-Engine von Shopify.
- [maroto](https://github.com/johnfercher/maroto) - Eine Maroto-Art, PDFs zu erstellen. Maroto ist von Bootstrap inspiriert und verwendet gofpdf. Schnell und einfach.
- [pongo2](https://github.com/flosch/pongo2) - Django-ähnliche Template-Engine für Go.
- [quicktemplate](https://github.com/valyala/quicktemplate) - Schnelle, leistungsstarke und dennoch einfach zu verwendende Template-Engine. Konvertiert Vorlagen in Go-Code und kompiliert diesen anschließend.
- [Razor](https://github.com/sipin/gorazor) - Razor-View-Engine für Golang.
- [Soy](https://github.com/robfig/soy) - Closure Templates (auch Soy Templates genannt) für Go, gemäß der [offiziellen Spezifikation](https://developers.google.com/closure/templates/).
- [sprout](https://github.com/go-sprout/sprout) - Nützliche Template-Funktionen für Go-Vorlagen.
- [tbd](https://github.com/lucasepe/tbd) - Eine wirklich einfache Möglichkeit, Textvorlagen mit Platzhaltern zu erstellen – stellt zusätzliche integrierte Metadaten des Git-Repositorys bereit.
- [templ](https://github.com/a-h/templ) - Eine HTML-Templating-Sprache mit großartigen Entwicklerwerkzeugen.
- [templator](https://github.com/alesr/templator) - Eine typsichere Engine zum Rendern von HTML-Vorlagen für Go.

**[⬆ Zurück nach oben](#contents)**

## Testen

_Bibliotheken zum Testen von Codebasen und zum Erzeugen von Testdaten._

### Test-Frameworks

- [apitest](https://apitest.dev) - Einfache und erweiterbare Bibliothek für verhaltensbasiertes Testen von REST-basierten Diensten oder HTTP-Handlern, die das Mocken externer HTTP-Aufrufe und das Rendern von Sequenzdiagrammen unterstützt.
- [arch-go](https://github.com/arch-go/arch-go) - Werkzeug für Architekturtests in Go-Projekten.
- [assay](https://github.com/tushariitr-19/assay) - Framework-unabhängige Evaluierungsbibliothek zum Testen von Go-Agenten und MCP-Servern mit deterministischen Prüfungen, CI-tauglichen Exit-Codes und YAML-basiertem Testen ganz ohne Code.
- [assert](https://github.com/go-playground/assert) - Grundlegende Assertion-Bibliothek zur Verwendung neben dem nativen Go-Testing, mit Bausteinen für eigene Assertions.
- [axiom](https://github.com/Nikita-Filonov/axiom) - Komponierbares Go-Test-Framework mit Fixtures, Hooks, Wiederholungen, Metadaten, Plugins und paralleler Ausführung.
- [baloo](https://github.com/h2non/baloo) - Ausdrucksstarkes und vielseitiges End-to-End-Testen von HTTP-APIs leicht gemacht.
- [be](https://github.com/carlmjohnson/be) - Die minimalistische generische Bibliothek für Test-Assertions.
- [biff](https://github.com/fulldump/biff) - Bifurcation-Test-Framework, BDD-kompatibel.
- [charlatan](https://github.com/percolate/charlatan) - Werkzeug zum Generieren gefälschter Interface-Implementierungen für Tests.
- [commander](https://github.com/SimonBaeumer/commander) - Werkzeug zum Testen von CLI-Anwendungen unter Windows, Linux und OSX.
- [coverage](https://github.com/jbunds/coverage) - Eine einfache Web-UI für Go-Testabdeckung und die wiederverwendbare GitHub Action [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report).
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - Einfaches Snapshot-Testing-Add-on für Ihr Test-Framework.
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Datenbank für Testzwecke bereinigen, inspiriert von `database_cleaner` in Ruby.
- [dft](https://github.com/abecodes/dft) - Leichtgewichtige Docker-Container ohne Abhängigkeiten für Tests (oder mehr).
- [dsunit](https://github.com/viant/dsunit) - Datastore-Tests für SQL, NoSQL und strukturierte Dateien.
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - Eine echte Postgres-Datenbank lokal unter Linux, OSX oder Windows als Teil einer anderen Go-Anwendung oder eines Tests ausführen.
- [endly](https://github.com/viant/endly) - Deklaratives funktionales End-to-End-Testen.
- [envite](https://github.com/PerimeterX/envite) - Framework zur Verwaltung von Entwicklungs- und Testumgebungen.
- [fixenv](https://github.com/rekby/fixenv) - Engine zur Verwaltung von Fixtures, inspiriert von pytest-Fixtures.
- [flute](https://github.com/suzuki-shunsuke/flute) - Test-Framework für HTTP-Clients.
- [frisby](https://github.com/verdverm/frisby) - Test-Framework für REST-APIs.
- [gherkingen](https://github.com/hedhyw/gherkingen) - BDD-Boilerplate-Generator und Framework.
- [ginkgo](https://onsi.github.io/ginkgo/) - BDD-Test-Framework für Go.
- [gnomock](https://github.com/orlangure/gnomock) - Integrationstests mit echten Abhängigkeiten (Datenbank, Cache, sogar Kubernetes oder AWS), die in Docker laufen, ohne Mocks.
- [go-carpet](https://github.com/msoap/go-carpet) - Werkzeug zur Anzeige der Testabdeckung im Terminal.
- [go-cmp](https://github.com/google/go-cmp) - Paket zum Vergleichen von Go-Werten in Tests.
- [go-hit](https://github.com/Eun/go-hit) - Hit ist ein in Golang geschriebenes Framework für HTTP-Integrationstests.
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - Werkzeug zum Testen und Debuggen von HTTP mit verschiedenen Endpunkten zum Testen von Clients.
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - Mutationstests für Go mit CI-Qualitätsgates, abdeckungsbewusstem MSI, Baseline-Tracking und Filterung nach git-diff.
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - Golang-MySQL-Testcontainer zur Unterstützung von MySQL-Integrationstests.
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Snapshot-Testing in Golang wie bei Jest.
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - Werkzeug, das die Abdeckung von Dateien unterhalb eines festgelegten Schwellenwerts meldet.
- [go-testdeep](https://github.com/maxatome/go-testdeep) - Äußerst flexibler tiefer Vergleich für Golang, erweitert das Go-Paket testing.
- [go-testing](https://github.com/tkrop/go-testing) - Go-Testing-Erweiterung, die eine einfache Einrichtung stark isolierter Unit-, Komponenten- und Integrationstests ermöglicht und erweiterte Mock-Unterstützung bietet, die gomock und gock erweitert.
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - Assertion-Bibliothek im Stil von Testprädikaten mit umfangreicher Diagnoseausgabe.
- [go-vcr](https://github.com/dnaeon/go-vcr) - Zeichnen Sie Ihre HTTP-Interaktionen auf und spielen Sie sie für schnelle, deterministische und präzise Tests erneut ab.
- [goblin](https://github.com/franela/goblin) - Mocha-ähnliches Test-Framework für Go.
- [goc](https://github.com/qiniu/goc) - Goc ist ein umfassendes System für Abdeckungstests für die Programmiersprache Go.
- [gocheck](https://labix.org/gocheck) - Fortgeschritteneres Test-Framework als Alternative zu gotest.
- [GoConvey](https://github.com/smartystreets/goconvey/) - BDD-artiges Framework mit Web-UI und Live-Reload.
- [gocrest](https://github.com/corbym/gocrest) - Komponierbare, Hamcrest-ähnliche Matcher für Go-Assertions.
- [godog](https://github.com/cucumber/godog) - Cucumber-BDD-Framework für Go.
- [gofight](https://github.com/appleboy/gofight) - API-Handler-Tests für Golang-Router-Frameworks.
- [gogiven](https://github.com/corbym/gogiven) - YATSPEC-ähnliches BDD-Test-Framework für Go.
- [gomatch](https://github.com/jfilipczyk/gomatch) - Bibliothek zum Testen von JSON gegen Muster.
- [gomega](https://onsi.github.io/gomega/) - Rspec-ähnliche Matcher-/Assertion-Bibliothek.
- [gospecify](https://github.com/stesla/gospecify) - Bietet eine BDD-Syntax zum Testen Ihres Go-Codes. Sie sollte jedem vertraut sein, der Bibliotheken wie rspec verwendet hat.
- [gosuite](https://github.com/pavlo/gosuite) - Bringt leichtgewichtige Test-Suites mit Setup/Teardown-Funktionen zu `testing`, indem die Subtests von Go1.7 genutzt werden.
- [got](https://github.com/ysmood/got) - Ein angenehmes Test-Framework für Golang.
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Eine Sammlung von Paketen, die das Go-Paket testing erweitern und gängige Muster unterstützen.
- [Hamcrest](https://github.com/rdrdr/hamcrest) - Fluent-Framework für deklarative Matcher-Objekte, die bei Anwendung auf Eingabewerte selbstbeschreibende Ergebnisse liefern.
- [httper](https://github.com/gustofarbi/httper) - CLI-Runner für JetBrains-.http-Dateien mit Skripting, Assertions, gRPC und Lasttests.
- [httpexpect](https://github.com/gavv/httpexpect) - Prägnantes, deklaratives und einfach zu verwendendes End-to-End-Testen von HTTP- und REST-APIs.
- [is](https://github.com/matryer/is) - Professionelles, leichtgewichtiges Mini-Test-Framework für Go.
- [jsonassert](https://github.com/kinbiko/jsonassert) - Paket zur Überprüfung, ob Ihre JSON-Payloads korrekt serialisiert werden.
- [keploy](https://github.com/keploy/keploy) - Testfälle und Daten-Mocks automatisch aus API-Aufrufen generieren.
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - Die einfache Bibliothek zum Ändern der Werte privater Felder für Tests.
- [restit](https://github.com/yookoala/restit) - Go-Mikroframework zum Schreiben von Integrationstests für RESTful-APIs.
- [schema](https://github.com/jgroeneveld/schema) - Schneller und einfacher Abgleich von Ausdrücken für JSON-Schemas in Anfragen und Antworten.
- [should](https://github.com/Kairum-Labs/should) - Testbibliothek ohne Abhängigkeiten, mit detaillierten Struct-Diffs und gut lesbaren Fehlermeldungen.
- [stop-and-go](https://github.com/elgohr/stop-and-go) - Testhilfe für Nebenläufigkeit.
- [testcase](https://github.com/adamluzsi/testcase) - Idiomatisches Test-Framework für Behavior Driven Development.
- [testcerts](https://github.com/madflojo/testcerts) - Selbstsignierte Zertifikate und Zertifizierungsstellen dynamisch in Ihren Testfunktionen erzeugen.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - Ein Go-Paket, das das Erstellen und Aufräumen containerbasierter Abhängigkeiten für automatisierte Integrations-/Smoke-Tests vereinfacht. Die saubere, einfach zu verwendende API ermöglicht es Entwicklern, programmatisch Container zu definieren, die als Teil eines Tests ausgeführt werden sollen, und diese Ressourcen nach Abschluss des Tests aufzuräumen.
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - Ein Hilfsmittel für Test-Fixtures im Stil von Rails zum Testen von Datenbankanwendungen.
- [Testify](https://github.com/stretchr/testify) - Heilige Erweiterung des Standard-Go-Pakets testing.
- [Testo](https://github.com/ozontech/testo) - Plugin-basiertes Test-Framework mit Suites, parallelen Tests, Hooks und Parametrisierung. Inspiriert von Pytest.
- [testsql](https://github.com/zhulongcheng/testsql) - Testdaten vor dem Testen aus SQL-Dateien erzeugen und nach Abschluss wieder löschen.
- [testza](https://github.com/MarvinJWendt/testza) - Voll ausgestattetes Test-Framework mit schöner farbiger Ausgabe.
- [tparse](https://github.com/mfridman/tparse) - CLI-Werkzeug zur Zusammenfassung der Ausgabe von go test. Pipe-freundlich. Kompatibel mit den Flags von go test.
- [trial](https://github.com/jgroeneveld/trial) - Schnelle und einfach erweiterbare Assertions, ohne viel Boilerplate einzuführen.
- [Tt](https://github.com/vcaesar/tt) - Einfache und farbenfrohe Testwerkzeuge.
- [wstest](https://github.com/posener/wstest) - WebSocket-Client für Unit-Tests eines WebSocket-http.Handler.

### Mocks

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - Werkzeug zum Generieren eigenständiger Mock-Objekte.
- [fabricator](https://github.com/Goldziher/fabricator) - Typsichere Factories zum Erzeugen von Mock- und Fake-Daten in Go, inspiriert von factory_boy und interface-forge.
- [genmock](https://gitlab.com/so_literate/genmock) - Mocking-System für Go mit Codegenerator zum Erstellen von Aufrufen der Interface-Methoden.
- [go-localstack](https://github.com/elgohr/go-localstack) - Werkzeug zur Verwendung von localstack in AWS-Tests.
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - Mock-SQL-Treiber zum Testen von Datenbankinteraktionen.
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - Auf einer einzelnen Transaktion basierender Datenbanktreiber, hauptsächlich für Testzwecke.
- [gomock](https://github.com/uber-go/mock) - Mocking-Framework für die Programmiersprache Go.
- [gomock](https://github.com/vibridi/gomock) - CLI-Werkzeug zum Generieren typisierter, Framework-unabhängiger Interface-Mocks, mit Unterstützung für Generics.
- [govcr](https://github.com/seborama/govcr) - HTTP-Mock für Golang: HTTP-Interaktionen für Offline-Tests aufzeichnen und wiedergeben.
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - HTTP(S)-Proxy zum Aufzeichnen und Simulieren von REST/SOAP-APIs mit erweiterbarer Middleware und einfach zu verwendender CLI.
- [httpmock](https://github.com/jarcoal/httpmock) - Einfaches Mocken von HTTP-Antworten externer Ressourcen.
- [minimock](https://github.com/gojuno/minimock) - Mock-Generator für Go-Interfaces.
- [mockery](https://github.com/vektra/mockery) - Werkzeug zum Generieren von Go-Interfaces.
- [mockfs](https://github.com/balinomad/go-mockfs) - Mock-Dateisystem für Go-Tests mit Fehlerinjektion und Latenzsimulation, aufgebaut auf `testing/fstest.MapFS`.
- [mockhttp](https://github.com/tv42/mockhttp) - Mock-Objekt für http.ResponseWriter in Go.
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - Eine einfache Möglichkeit, Mocks für verschiedene Zwecke zu generieren.
- [moq](https://github.com/matryer/moq) - Hilfsprogramm, das aus einem beliebigen Interface ein Struct generiert. Das Struct kann im Testcode als Mock des Interfaces verwendet werden.
- [moxie](https://lesiw.io/moxie) - Mock-Methoden für eingebettete Structs generieren.
- [pgxmock](https://github.com/pashagolub/pgxmock) - Eine Mock-Bibliothek, die [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/) implementiert.
- [timex](https://github.com/cabify/timex) - Ein testfreundlicher Ersatz für das native Paket `time`.
- [wsmock](https://github.com/sing198/wsmock) - Ausdrucksstarker WebSocket-Mock-Server ohne Boilerplate für Tests mit Fehlerinjektion und Assertions.
- [xgo](https://github.com/xhd2015/xgo) - Eine universelle Bibliothek zum Mocken von Funktionen.

### Fuzzing und Delta-Debugging/Reduzieren/Shrinking

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - System für randomisierte Tests.
- [Tavor](https://github.com/zimmski/tavor) - Generisches Framework für Fuzzing und Delta-Debugging.

### Selenium und Werkzeuge zur Browsersteuerung

- [bonk](https://github.com/joakimcarlsson/bonk) - Schnelle Bibliothek zur Browserautomatisierung mit Fokus auf Unauffälligkeit, die das Chrome DevTools Protocol über WebSocket ohne externe Abhängigkeiten nutzt.
- [cdp](https://github.com/mafredri/cdp) - Typsichere Bindings für das Chrome Debugging Protocol, die mit Browsern oder anderen Debug-Zielen verwendet werden können, die es implementieren.
- [chromedp](https://github.com/knq/chromedp) - Eine Möglichkeit, Chrome, Safari, Edge, Android-Webviews und andere Browser, die das Chrome Debugging Protocol unterstützen, zu steuern und zu testen.
- [playwright-go](https://github.com/mxschmitt/playwright-go) - Bibliothek zur Browserautomatisierung, um Chromium, Firefox und WebKit mit einer einzigen API zu steuern.
- [rod](https://github.com/go-rod/rod) - Ein Devtools-Treiber, der Web-Automatisierung und Scraping einfach macht.
- [selenosis](https://github.com/alcounit/selenosis) - Zustandsloser, Kubernetes-nativer Hub, der Selenium-, Playwright- und MCP-Sitzungen über Custom Resources an bedarfsgesteuerte Browser-Pods weiterleitet.

### Fehlerinjektion

- [failpoint](https://github.com/pingcap/failpoint) - Eine Implementierung von [Failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) für Golang.

**[⬆ Zurück nach oben](#contents)**

## Textverarbeitung

_Bibliotheken zum Parsen und Bearbeiten von Texten._

Siehe auch [Verarbeitung natürlicher Sprache](#natural-language-processing) und [Textanalyse](#text-analysis).

### Formatierer

- [address](https://github.com/bojanz/address) - Verarbeitet die Darstellung, Validierung und Formatierung von Adressen.
- [align](https://github.com/Guitarbum722/align) - Eine universelle Anwendung zum Ausrichten von Text.
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - Formatiert und parst numerische Bytewerte (10K, 2M, 3G usw.).
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - Textformatierung mit fester Breite (Encoder/Decoder mit Reflection).
- [go-humanize](https://github.com/dustin/go-humanize) - Formatierer für Zeitangaben, Zahlen und Speichergrößen in menschenlesbarem Format.
- [gotabulate](https://github.com/bndr/gotabulate) - Tabellarische Daten mit Go einfach hübsch ausgeben.
- [sq](https://github.com/neilotoole/sq) - Konvertiert Daten aus SQL-Datenbanken oder Dokumentformaten wie CSV oder Excel in Formate wie JSON, Excel, CSV, HTML, Markdown, XML und YAML.
- [textwrap](https://github.com/isbm/textwrap) - Bricht Text am Zeilenende um. Implementierung des Python-Moduls `textwrap`.

### Auszeichnungssprachen

- [bafi](https://github.com/mmalcek/bafi) - Universeller Übersetzer von JSON, BSON, YAML und XML in BELIEBIGE Formate mithilfe von Vorlagen.
- [bbConvert](https://github.com/CalebQ42/bbConvert) - Konvertiert bbCode in HTML und ermöglicht die Unterstützung benutzerdefinierter bbCode-Tags.
- [blackfriday](https://github.com/russross/blackfriday) - Markdown-Prozessor in Go.
- [go-output-format](https://github.com/drewstinnett/go-output-format) - Go-Strukturen in Ihrer Kommandozeilen-App in mehreren Formaten ausgeben (YAML/JSON usw.).
- [go-toml](https://github.com/pelletier/go-toml) - Go-Bibliothek für das TOML-Format mit Abfrageunterstützung und praktischen CLI-Werkzeugen.
- [goldmark](https://github.com/yuin/goldmark) - Ein in Go geschriebener Markdown-Parser. Einfach erweiterbar, standardkonform (CommonMark), gut strukturiert.
- [goq](https://github.com/andrewstuart/goq) - Deklaratives Unmarshalling von HTML mithilfe von Struct-Tags mit jQuery-Syntax (verwendet GoQuery).
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - HTML in Markdown konvertieren. Funktioniert sogar mit ganzen Websites und lässt sich über Regeln erweitern.
- [htmlquery](https://github.com/antchfx/htmlquery) - Ein XPath-Abfragepaket für HTML, mit dem Sie per XPath-Ausdruck Daten aus HTML-Dokumenten extrahieren oder auswerten können.
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Umfangreiches Rendering von YAML als HTML in Go.
- [htree](https://github.com/bobg/htree) - Bäume aus [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node)-Objekten durchlaufen, navigieren, filtern und anderweitig verarbeiten.
- [markdown](https://github.com/nao1215/markdown) - Markdown-Builder, der per Methodenverkettung GitHub Flavored Markdown und Mermaid-Diagramme erzeugt.
- [mdsmith](https://github.com/jeduden/mdsmith) - Schneller, automatisch korrigierender Markdown-Linter und -Formatierer. Prüft Stil, Lesbarkeit, Struktur und dateiübergreifende Integrität.
- [mxj](https://github.com/clbanning/mxj) - XML als JSON oder map[string]interface{} kodieren/dekodieren; Werte über Pfade in Punktnotation und Wildcards extrahieren. Ersetzt die Pakete x2j und j2x.
- [picoloom](https://github.com/alnah/picoloom) - Konverter von Markdown zu PDF mit CLI- und Go-Bibliotheks-APIs.
- [toml](https://github.com/BurntSushi/toml) - TOML-Konfigurationsformat (Encoder/Decoder mit Reflection).

### Parser/Encoder/Decoder

- [allot](https://github.com/sbstjn/allot) - Parsen von Text mit Platzhaltern und Wildcards für CLI-Werkzeuge und Bots.
- [codetree](https://github.com/aerogo/codetree) - Parst eingerückten Code (python, pixy, scarlet usw.) und gibt eine Baumstruktur zurück.
- [commonregex](https://github.com/mingrammer/commonregex) - Eine Sammlung gängiger regulärer Ausdrücke für Go.
- [did](https://github.com/ockam-network/did) - Parser und Stringer für DIDs (Decentralized Identifiers) in Go.
- [doi](https://github.com/hscells/doi) - Parser für Document Object Identifier (doi) in Go.
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Parser und Manipulator für Editorconfig-Dateien für Go.
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - Hochperformantes Modul zur Extraktion effektiver Top-Level-Domains (eTLD).
- [go-nmea](https://github.com/adrianmo/go-nmea) - NMEA-Parser-Bibliothek für die Sprache Go.
- [go-querystring](https://github.com/google/go-querystring) - Go-Bibliothek zum Kodieren von Structs in URL-Query-Parameter.
- [go-vcard](https://github.com/emersion/go-vcard) - vCard parsen und formatieren.
- [godump](https://github.com/yassinebenaid/godump) - Beliebige GO-Variablen mühelos hübsch ausgeben, eine Alternative zu `fmt.Printf("%#v")` von Go.
- [godump (goforj)](https://github.com/goforj/godump) - Go-Structs hübsch ausgeben mit Dumps im Laravel/Symfony-Stil, vollständigen Typinformationen, farbiger CLI-Ausgabe, Zykluserkennung und Zugriff auf private Felder.
- [gofeed](https://github.com/mmcdole/gofeed) - RSS- und Atom-Feeds in Go parsen.
- [gographviz](https://github.com/awalterschulze/gographviz) - Parst die Graphviz-Sprache DOT.
- [gonameparts](https://github.com/polera/gonameparts) - Zerlegt Personennamen in einzelne Namensbestandteile.
- [ltsv](https://github.com/Wing924/ltsv) - Hochperformanter Reader für [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) für Go.
- [normalize](https://github.com/avito-tech/normalize) - Unscharfen Text bereinigen, normalisieren und vergleichen.
- [parseargs-go](https://github.com/nproc/parseargs-go) - Parser für String-Argumente, der Anführungszeichen und Backslashes versteht.
- [prattle](https://github.com/askeladdk/prattle) - LL(1)-Grammatiken einfach und effizient scannen und parsen.
- [sh](https://github.com/mvdan/sh) - Shell-Parser und -Formatierer.
- [tokenizer](https://github.com/bzick/tokenizer) - Beliebige Zeichenketten, Slices oder unendliche Puffer in beliebige Tokens zerlegen.
- [vdf](https://github.com/andygrunwald/vdf) - Ein Lexer und Parser für das Valves Data Format (bekannt als vdf), geschrieben in Go.
- [when](https://github.com/olebedev/when) - Parser für Datums-/Zeitangaben in natürlichem Englisch (EN) und Russisch (RU) mit erweiterbaren Regeln.
- [xj2go](https://github.com/stackerzzq/xj2go) - XML oder JSON in Go-Structs konvertieren.

### Reguläre Ausdrücke

- [coregex](https://github.com/coregx/coregex) - Produktionsreife Regex-Engine mit der Architektur des Rust-Crates regex: mehrere Engines (DFA/NFA), SIMD-Vorfilter, direkter Ersatz für die Standardbibliothek.
- [genex](https://github.com/alixaxel/genex) - Reguläre Ausdrücke zählen und in alle passenden Zeichenketten expandieren.
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - Einfacher und leichtgewichtiger Abgleich von Wildcard-Mustern.
- [goregen](https://github.com/zach-klippenstein/goregen) - Bibliothek zum Erzeugen zufälliger Zeichenketten aus regulären Ausdrücken.
- [regroup](https://github.com/oriser/regroup) - Benannte Gruppen regulärer Ausdrücke mithilfe von Struct-Tags und automatischem Parsen auf Go-Structs abbilden.
- [rex](https://github.com/hedhyw/rex) - Builder für reguläre Ausdrücke.

### Bereinigung

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTML-Sanitizer.
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Ein auf Bereinigung basierender Schimpfwortfilter für Go.

### Scraper

- [colly](https://github.com/asciimoo/colly) - Schnelles und elegantes Scraping-Framework für Gophers.
- [dataflowkit](https://github.com/slotix/dataflowkit) - Web-Scraping-Framework, das Websites in strukturierte Daten verwandelt.
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - Web-Crawler, der Dokumentationsseiten in sauberes Markdown und JSONL für die Aufnahme in LLMs konvertiert (RAG, Trainingsdaten).
- [go-recipe](https://github.com/kkyr/go-recipe) - Ein Paket zum Scrapen von Rezepten von Websites.
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - Go-Bibliothek zum Parsen von Sitemaps.
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery bringt eine Syntax und einen Funktionsumfang ähnlich wie jQuery in die Sprache Go.
- [pagser](https://github.com/foolin/pagser) - Pagser ist ein einfaches, erweiterbares, konfigurierbares Werkzeug zum Parsen und Deserialisieren von HTML-Seiten in Structs, basierend auf goquery und Struct-Tags, für Golang-Crawler.
- [Tagify](https://github.com/zoomio/tagify) - Erzeugt eine Menge von Tags aus einer gegebenen Quelle.
- [walker](https://github.com/cyucelen/walker) - Paginierte Daten nahtlos aus beliebigen Quellen abrufen. Einfaches und hochperformantes Scraping von APIs inklusive.
- [xurls](https://github.com/mvdan/xurls) - URLs aus Text extrahieren.

### RSS

- [podcast](https://github.com/eduncan911/podcast) - iTunes-konformer Podcast-Generator für RSS 2.0 in Golang

### Hilfsprogramme/Verschiedenes

- [ahocorasick](https://github.com/coregx/ahocorasick) - Hochperformanter Aho-Corasick-Abgleich mehrerer Muster in Zeichenketten mit DFA-Kompilierung und SIMD-Vorfilter, bis zu 7 GB/s Durchsatz (Teil des [coregx](https://github.com/coregx)-Ökosystems).
- [go-runewidth](https://github.com/mattn/go-runewidth) - Funktionen zur Ermittlung der festen Breite eines Zeichens oder einer Zeichenkette.
- [kace](https://github.com/codemodus/kace) - Gängige Umwandlungen der Groß-/Kleinschreibung unter Berücksichtigung gängiger Initialismen.
- [lancet](https://github.com/duke-git/lancet) - Eine umfassende, Lodash-ähnliche Hilfsbibliothek für Go
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich ist eine Bibliothek, die russische Namen in den angegebenen grammatikalischen Fall flektiert.
- [radix](https://github.com/yourbasic/radix) - Schneller Algorithmus zur Sortierung von Zeichenketten.
- [TySug](https://github.com/Dynom/TySug) - Alternative Vorschläge unter Berücksichtigung von Tastaturlayouts.
- [uniwidth](https://github.com/unilibs/uniwidth) - Hochperformante Berechnung der Breite von Unicode-Zeichen mit SWAR-Optimierung, O(1)-Lookup-Tabellen und Unterstützung für ZWJ-Emojis.
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - Ein semantisches grep-Werkzeug, das Wort-Embeddings verwendet, um semantisch ähnliche Treffer zu finden. Eine Suche nach "death" findet beispielsweise "dead", "killing", "murder".

**[⬆ Zurück nach oben](#contents)**

## APIs von Drittanbietern

_Bibliotheken für den Zugriff auf APIs von Drittanbietern._

- [airtable](https://github.com/mehanizm/airtable) - Go-Client-Bibliothek für die [Airtable-API](https://airtable.com/api).
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Go-Client-Bibliothek für die Twitter-API 1.1.
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - Inoffizielles Golang-SDK für die AppStore Connect API.
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - Inoffizielle Go-SDK-Implementierung des [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html).
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Das offizielle AWS SDK für die Programmiersprache Go.
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Go-Client für die Birdeye-DeFi-API mit typisierten Spotpreisen, OHLCV-Kerzen, historischen Daten und einem Notausgang für Rohanfragen.
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - High-Level-Go-Bibliothek zum Schreiben von Daten in [Google BigQuery](https://cloud.google.com/bigquery) mit hohem Durchsatz.
- [brewerydb](https://github.com/naegelejd/brewerydb) - Go-Bibliothek für den Zugriff auf die BreweryDB-API.
- [cachet](https://github.com/andygrunwald/cachet) - Go-Client-Bibliothek für [Cachet (Open-Source-Statusseitensystem)](https://cachethq.io/).
- [circleci](https://github.com/jszwedko/go-circleci) - Go-Client-Bibliothek für die Interaktion mit der API von CircleCI.
- [codeship-go](https://github.com/codeship/codeship-go) - Go-Client-Bibliothek für die Interaktion mit der API v2 von Codeship.
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Go-Client für die Coinglass API v4 ohne Abhängigkeiten, mit WebSocket-Streams und typisierten Endpunkten für Futures, Spot, Optionen, ETFs und Indikatoren.
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Go-Client-Bibliothek für die Interaktion mit der API von Coinpaprika.
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - Go-Client-Bibliothek für [The Colony](https://thecolony.cc) – ein öffentliches soziales Netzwerk, dessen Benutzer KI-Agenten sind.
- [device-check-go](https://github.com/rinchsan/device-check-go) - Go-Client-Bibliothek für die Interaktion mit der [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1.
- [discordgo](https://github.com/bwmarrin/discordgo) - Go-Bindings für die Discord-Chat-API.
- [disgo](https://github.com/switchupcb/disgo) - Go-API-Wrapper für die Discord-API.
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Inoffizieller API-Client für das Zahlungsgateway Dusupay für Go
- [ethrpc](https://github.com/onrik/ethrpc) - Go-Bindings für die Ethereum-JSON-RPC-API.
- [facebook](https://github.com/huandu/facebook) - Go-Bibliothek mit Unterstützung für die Facebook Graph API.
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Inoffizieller XML-API-Client für das Zahlungsgateway Fasapay für Golang.
- [fcm](https://github.com/maddevsio/fcm) - Go-Bibliothek für Firebase Cloud Messaging.
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - Go-SDK für [Featureflip](https://featureflip.io/)-Feature-Flags, mit lokaler Auswertung und Streaming-Aktualisierungen.
- [gads](https://github.com/emiddleton/gads) - Inoffizielle API für Google Adwords.
- [gcm](https://github.com/Aorioli/gcm) - Go-Bibliothek für Google Cloud Messaging.
- [geo-golang](https://github.com/codingsince1985/geo-golang) - Go-Bibliothek für den Zugriff auf die Geocoding-/Reverse-Geocoding-APIs von [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/) und [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim).
- [github](https://github.com/google/go-github) - Go-Bibliothek für den Zugriff auf die GitHub REST API v3.
- [githubql](https://github.com/shurcooL/githubql) - Go-Bibliothek für den Zugriff auf die GitHub GraphQL API v4.
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - Go-Bibliothek für den Zugriff auf die Dienste der [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) (Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud)
- [go-aws-news](https://github.com/circa10a/go-aws-news) - Go-Anwendung und -Bibliothek zum Abrufen der Neuigkeiten von AWS.
- [go-chronos](https://github.com/axelspringer/go-chronos) - Go-Bibliothek für die Interaktion mit dem Job-Scheduler [Chronos](https://mesos.github.io/chronos/)
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - Go-Client-Bibliothek für [Gerrit Code Review](https://www.gerritcodereview.com/).
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - Winziger Go-Client für die HackerNews-API.
- [go-here](https://github.com/abdullahselek/go-here) - Go-Client-Bibliothek für die standortbasierten APIs von HERE.
- [go-hibp](https://github.com/wneessen/go-hibp) - Einfaches Go-Binding für die APIs von "Have I Been Pwned".
- [go-imgur](https://github.com/koffeinsource/go-imgur) - Go-Client-Bibliothek für [imgur](https://imgur.com)
- [go-jira](https://github.com/andygrunwald/go-jira) - Go-Client-Bibliothek für [Atlassian JIRA](https://www.atlassian.com/software/jira)
- [go-lark](https://github.com/go-lark/lark) - Ein einfach zu verwendendes inoffizielles SDK für die Open Platform von [Feishu](https://open.feishu.cn/) und [Lark](https://open.larksuite.com/).
- [go-marathon](https://github.com/gambol99/go-marathon) - Go-Bibliothek für die Interaktion mit dem Marathon-PAAS von Mesosphere.
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - Go-Client-Bibliothek für den Zugriff auf die [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2).
- [go-openai](https://github.com/sashabaranov/go-openai) - Bibliothek für die APIs von OpenAI ChatGPT, DALL·E und Whisper für Go.
- [go-openproject](https://github.com/manuelbcd/go-openproject) - Go-Client-Bibliothek für die Interaktion mit der API von [OpenProject](https://docs.openproject.org/api/).
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - Go-Modul für die Arbeit mit [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) (kompatibel mit Insomnia).
- [go-redoc](https://github.com/mvrilo/go-redoc) - Eingebettete OpenAPI/Swagger-Dokumentations-UI für Go mit [ReDoc](https://redocly.com/).
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - Go-Bibliothek für die [REST Countries API](https://countrylayer.com/).
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - Go-Client-Bibliothek für die Interaktion mit der [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm).
- [go-sophos](https://github.com/esurdam/go-sophos) - Go-Client-Bibliothek für die [Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) ohne Abhängigkeiten.
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - Go-Bibliothek mit vorkompilierter [Swagger UI](https://swagger.io/tools/swagger-ui/) zum Ausliefern von Swagger-JSON.
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - API-Client für die Publishing-Plattform Telegraph.
- [go-trending](https://github.com/andygrunwald/go-trending) - Go-Bibliothek für den Zugriff auf [angesagte Repositorys](https://github.com/trending) und [Entwickler](https://github.com/trending/developers) auf Github.
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - Go-Client-Bibliothek für die API von [Unsplash.com](https://unsplash.com).
- [go-xkcd](https://github.com/nishanths/go-xkcd) - Go-Client für die xkcd-API.
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Go-Client-Bibliothek für die Yapla API v2.0.
- [goagi](https://github.com/staskobzar/goagi) - Go-Bibliothek zum Erstellen von agi/fastagi-Anwendungen für Asterisk PBX.
- [goami2](https://github.com/staskobzar/goami2) - AMI-v2-Bibliothek für Asterisk PBX.
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Golang-Bibliothek, die gängige und einfache Datenbankabstraktionen auf Basis von Google Sheets bereitstellt.
- [gogtrends](https://github.com/groovili/gogtrends) - Inoffizielle API für Google Trends.
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - Golang-Wrapper für die API v3 von The Movie Database.
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics ist eine Go-Bibliothek zum Abrufen von Songtext-Daten von der Website Wikia.
- [gomalshare](https://github.com/MonaxGT/gomalshare) - Go-Bibliothek für die MalShare-API [malshare.com](https://www.malshare.com/)
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Go-Client-Bibliothek für MusicBrainz WS2.
- [google](https://github.com/google/google-api-go-client) - Automatisch generierte Google-APIs für Go.
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Einfacher Wrapper für unkomplizierte Google-Analytics-Berichte.
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Go-Client-Bibliothek für die Google-Cloud-APIs.
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - Go-Client-Bibliothek für die [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/).
- [gopensky](https://github.com/navidys/gopensky) - Go-Client-Implementierung für die Live-API des [OpenSKY Network](https://opensky-network.org/) (ADS-B- und Mode-S-Daten des Luftraums).
- [gosip](https://github.com/koltyakov/gosip) - Client-Bibliothek für SharePoint.
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm ist eine Go-Bibliothek, die das Kommunikationsprotokoll implementiert, das benötigt wird, um Storm-Spouts und -Bolts in Go zu schreiben, die mit den Storm-Shells kommunizieren.
- [hipchat](https://github.com/andybons/hipchat) - Dieses Projekt implementiert eine Golang-Client-Bibliothek für die Hipchat-API.
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - Ein Golang-Paket zur Kommunikation mit HipChat über XMPP.
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - Go-Client für die httpSMS-API.
- [igdb](https://github.com/Henry-Sarabia/igdb) - Go-Client für die [Internet Game Database API](https://api.igdb.com/).
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - Go-Wrapper für die IP2Location.io-API [IP2Location.io](https://www.ip2location.io/).
- [jokeapi-go](https://github.com/icelain/jokeapi) - Go-Client für [JokeAPI](https://sv443.net/jokeapi/v2/).
- [lark](https://github.com/chyroc/lark) - Go-SDK für die Open API von [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/), unterstützt ALLE Open APIs und Event-Callbacks.
- [lastpass-go](https://github.com/ansd/lastpass-go) - Go-Client-Bibliothek für die [LastPass](https://www.lastpass.com/)-API.
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Go-Client für die Lemon Squeezy API.
- [libgoffi](https://github.com/clevabit/libgoffi) - Toolbox mit Bibliotheksadaptern für die native Integration von [libffi](https://sourceware.org/libffi/)
- [libopenapi](https://github.com/pb33f/libopenapi) - OpenAPI-, Swagger-, Overlays- und Arazzo-Spezifikationen parsen, validieren und damit arbeiten.
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Go-Client für die Manus AI API v2 mit Aufgabenautomatisierung, Dateiverwaltung, Webhooks und typsicheren Modellen.
- [Medium](https://github.com/Medium/medium-sdk-go) - Golang-SDK für die OAuth2-API von Medium.
- [megos](https://github.com/andygrunwald/megos) - Client-Bibliothek für den Zugriff auf einen [Apache Mesos](https://mesos.apache.org/)-Cluster.
- [minio-go](https://github.com/minio/minio-go) - Minio-Go-Bibliothek für Amazon-S3-kompatiblen Cloud-Speicher.
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel ist eine Bibliothek zum Erfassen von Ereignissen und zum Senden von Mixpanel-Profilaktualisierungen an Mixpanel aus Ihren Go-Anwendungen.
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Go-Client für die Nansen AI API mit Smart-Money-Analysen, Token-Screener, Profiler und ohne Abhängigkeiten.
- [newsapi-go](https://github.com/jellydator/newsapi-go) - Go-Client für [NewsAPI](https://newsapi.org/).
- [openaigo](https://github.com/otiai10/openaigo) - API-Client-Bibliothek für OpenAI GPT3/GPT3.5 ChatGPT für Go.
- [patreon-go](https://github.com/mxpv/patreon-go) - Go-Bibliothek für die Patreon-API.
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - Wrapper für die Zahlungs-API von PayPal.
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Das Go-SDK für die Rest-API von Playlyfe.
- [pushover](https://github.com/gregdel/pushover) - Go-Wrapper für die Pushover-API.
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - Go-Bibliothek für die API der [RAWG Video Games Database](https://rawg.io/)
- [shopify](https://github.com/rapito/go-shopify) - Go-Bibliothek für CRUD-Anfragen an die Shopify-API.
- [simples3](https://github.com/rhnvrm/simples3) - Einfache AWS-S3-Bibliothek ohne Schnickschnack, die REST mit V4-Signierung nutzt, geschrieben in Go.
- [slack](https://github.com/slack-go/slack) - Slack-API in Go.
- [smite](https://github.com/sergiotapia/smitego) - Go-Paket, das den Zugriff auf die Smite-Spiel-API kapselt.
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - Go-Client-Bibliothek und Kommandozeilenclient für die SonarQube-Web-API.
- [spec](https://github.com/oaswrap/spec) - Leichtgewichtiger OpenAPI-3.x-Builder mit Unterstützung für statische Generierung und beliebte Frameworks wie chi, echo, gin, fiber, mux und weitere.
- [spotify](https://github.com/rapito/go-spotify) - Go-Bibliothek für den Zugriff auf die Spotify WEB API.
- [steam](https://github.com/sostronk/go-steam) - Go-Bibliothek für die Interaktion mit Steam-Gameservern.
- [stripe](https://github.com/stripe/stripe-go) - Go-Client für die Stripe-API.
- [swag](https://github.com/zc2638/swag) - Ohne Kommentare: einfacher Go-Wrapper zum Erstellen von Swagger-2.0-kompatiblen APIs. Unterstützt die meisten Routing-Frameworks, etwa das integrierte, gin, chi, mux, echo, httprouter, fasthttp und weitere.
- [textbelt](https://github.com/dietsche/textbelt) - Go-Client für die Textnachrichten-API von textbelt.com.
- [threads-go](https://github.com/tirthpatell/threads-go) - Go-Client-Bibliothek für die Meta Threads API mit OAuth 2.0, Ratenbegrenzung und typsicherer Fehlerbehandlung.
- [Trello](https://github.com/adlio/trello) - Go-Wrapper für die Trello-API.
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - Go-Wrapper für die TripAdvisor-API.
- [tumblr](https://github.com/mattcunningham/gumblr) - Go-Wrapper für die Tumblr-API v2.
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Go-Wrapper und Kommandozeilenclient für die Uptime Robot API v2.
- [vl-go](https://github.com/verifid/vl-go) - Go-Client-Bibliothek für die API der Identitätsverifizierungsschicht VerifID.
- [webhooks](https://github.com/go-playground/webhooks) - Webhook-Empfänger für GitHub und Bitbucket.
- [wit-go](https://github.com/wit-ai/wit-go) - Go-Client für die HTTP-API von wit.ai.
- [ynab](https://github.com/brunomvsouza/ynab.go) - Go-Wrapper für die YNAB-API.
- [zooz](https://github.com/gojuno/go-zooz) - Go-Client für die Zooz-API.

**[⬆ Zurück nach oben](#contents)**

## Hilfsprogramme

_Allgemeine Hilfsprogramme und Werkzeuge, die Ihnen das Leben leichter machen._

- [abstract](https://github.com/maxbolgarin/abstract) - Abstraktionen und Hilfsmittel, um Boilerplate-Code in der Geschäftslogik loszuwerden.
- [apm](https://github.com/topfreegames/apm) - Prozessmanager für Golang-Anwendungen mit HTTP-API.
- [backscanner](https://github.com/icza/backscanner) - Ein Scanner ähnlich wie bufio.Scanner, der Zeilen jedoch in umgekehrter Reihenfolge liest und zurückgibt, beginnend an einer bestimmten Position und rückwärts fortschreitend.
- [bed](https://github.com/itchyny/bed) - Ein Vim-ähnlicher Binäreditor, geschrieben in Go.
- [blank](https://github.com/Henry-Sarabia/blank) - Leerzeichen und Whitespace in Zeichenketten prüfen oder entfernen.
- [bleep](https://github.com/sinhashubham95/bleep) - Beliebig viele Aktionen auf beliebige Mengen von OS-Signalen in Go ausführen.
- [boilr](https://github.com/tmrts/boilr) - Rasend schnelles CLI-Werkzeug zum Erstellen von Projekten aus Boilerplate-Vorlagen.
- [boring](https://github.com/alebeck/boring) - Einfacher Kommandozeilen-Manager für SSH-Tunnel.
- [changie](https://github.com/miniscruff/changie) - Automatisiertes Changelog-Werkzeug zur Vorbereitung von Releases mit vielen Anpassungsoptionen.
- [chyle](https://github.com/antham/chyle) - Changelog-Generator auf Basis eines Git-Repositorys mit vielfältigen Konfigurationsmöglichkeiten.
- [circuit](https://github.com/cep21/circuit) - Eine effiziente und funktionsvollständige, Hystrix-ähnliche Go-Implementierung des Circuit-Breaker-Musters.
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Circuit Breaker in Go.
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Plattformübergreifendes Zwischenablage-Paket in Go.
- [clockwork](https://github.com/jonboulle/clockwork) - Eine einfache Fake-Uhr für Golang.
- [cmd](https://github.com/SimonBaeumer/cmd) - Bibliothek zum Ausführen von Shell-Befehlen unter OSX, Windows und Linux.
- [config-file-validator](https://github.com/Boeing/config-file-validator) - Plattformübergreifendes Werkzeug zur Validierung von Konfigurationsdateien.
- [contem](https://github.com/maxbolgarin/contem) - Direkter Ersatz für context.Context für das saubere Herunterfahren von Go-Anwendungen.
- [cookie](https://github.com/syntaqx/cookie) - Paket zum Parsen von Cookie-Structs und Hilfsfunktionen.
- [copy-pasta](https://github.com/jutkko/copy-pasta) - Universelle Zwischenablage für mehrere Arbeitsplätze, die ein S3-ähnliches Backend als Speicher verwendet.
- [countries](https://github.com/biter777/countries) - Vollständige Implementierung der Standards ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR und IANA ccTLD.
- [countries](https://github.com/pioz/countries) - Alles, was Sie für die Arbeit mit Ländern in Go benötigen.
- [create-go-app](https://github.com/create-go-app/cli) - Eine leistungsstarke CLI, um mit einem einzigen Befehl ein neues, produktionsreifes Projekt mit Backend (Golang), Frontend (JavaScript, TypeScript) und Deployment-Automatisierung (Ansible, Docker) zu erstellen.
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo ist eine TUI-basierte Anwendung, komplett in Go geschrieben, um Kryptowährungskurse in Echtzeit zu überwachen und zu beobachten!
- [ctop](https://github.com/bcicen/ctop) - [Top-ähnliche](https://ctop.sh) Oberfläche (z. B. htop) für Container-Metriken.
- [ctxutil](https://github.com/posener/ctxutil) - Eine Sammlung von Hilfsfunktionen für Contexts.
- [cvt](https://github.com/shockerli/cvt) - Beliebige Werte einfach und sicher in einen anderen Typ konvertieren.
- [dbt](https://github.com/nikogura/dbt) - Ein Framework zum Ausführen sich selbst aktualisierender, signierter Binärdateien aus einem zentralen, vertrauenswürdigen Repository.
- [Death](https://github.com/vrecan/death) - Herunterfahren von Go-Anwendungen mit Signalen verwalten.
- [debounce](https://github.com/floatdrop/debounce) - Ein allokationsfreier Debouncer, geschrieben in Go.
- [delve](https://github.com/derekparker/delve) - Go-Debugger.
- [dive](https://github.com/wagoodman/dive) - Ein Werkzeug zum Erkunden jeder Schicht eines Docker-Images.
- [dlog](https://github.com/kirillDanshin/dlog) - Zur Kompilierzeit gesteuerter Logger, der Ihr Release verkleinert, ohne Debug-Aufrufe zu entfernen.
- [EaseProbe](https://github.com/megaease/easeprobe) - Ein einfaches, eigenständiges und leichtgewichtiges Werkzeug, das als Daemon für Health-/Statusprüfungen dienen kann, unterstützt HTTP/TCP/SSH/Shell/Client/…-Probes und Benachrichtigungen über Slack/Discord/Telegram/SMS …
- [equalizer](https://github.com/reugn/equalizer) - Sammlung von Kontingentmanagern und Ratenbegrenzern für Go.
- [ergo](https://github.com/cristianoliveira/ergo) - Die Verwaltung mehrerer lokaler Dienste, die auf verschiedenen Ports laufen, leicht gemacht.
- [evaluator](https://github.com/nullne/evaluator) - Wertet einen Ausdruck dynamisch auf Basis von S-Expressions aus. Einfach und leicht erweiterbar.
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Muster für Fehlertoleranz und Resilienz für Go.
- [filetype](https://github.com/h2non/filetype) - Kleines Paket, das den Dateityp anhand der Signatur der Magic Numbers ermittelt.
- [filler](https://github.com/yaronsumel/filler) - Kleines Hilfsprogramm zum Befüllen von Structs mithilfe des Tags "fill".
- [filter](https://github.com/gookit/filter) - Bietet Filterung, Bereinigung und Konvertierung von Go-Daten.
- [fzf](https://github.com/junegunn/fzf) - Fuzzy-Finder für die Kommandozeile, geschrieben in Go.
- [generate](https://github.com/go-playground/generate) - Führt go generate rekursiv auf einem angegebenen Pfad oder einer Umgebungsvariable aus und kann per Regex filtern.
- [gh-image](https://github.com/drogers0/gh-image) - Eine Erweiterung für die gh CLI, die Bilder von der Kommandozeile aus in GitHub-Issues, PRs und READMEs hochlädt und user-attachments-URLs erzeugt, die die Sichtbarkeit des Repositorys respektieren.
- [ghokin](https://github.com/antham/ghokin) - Parallelisierter Formatierer ohne externe Abhängigkeiten für Gherkin (Cucumber, Behat …).
- [git-time-metric](https://github.com/git-time-metric/gtm) - Einfache, nahtlose, leichtgewichtige Zeiterfassung für Git.
- [git-tools](https://github.com/kazhuravlev/git-tools) - Werkzeug zur Verwaltung von Git-Tags.
- [gitbatch](https://github.com/isacikgoz/gitbatch) - Verwalten Sie Ihre Git-Repositorys an einem Ort.
- [gitcs](https://github.com/knbr13/gitcs/) - Git-Commits-Visualisierer, ein CLI-Werkzeug zur Visualisierung Ihrer Git-Commits auf Ihrem lokalen Rechner.
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Produktionsreife Funktionen für Go-basierte Web-Frameworks.
- [go-astitodo](https://github.com/asticode/go-astitodo) - TODOs in Ihrem GO-Code parsen.
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - go:generate-Werkzeug zum Kapseln von Symbolen, die von Golang-Plugins exportiert werden (nur 1.8).
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - bsdiff- und bspatch-Bibliotheken und CLI-Werkzeuge in reinem Go.
- [go-clip](https://github.com/prashantgupta24/go-clip) - Ein minimalistischer Zwischenablage-Manager für Mac.
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Generische, typisierte Konstantenmengen mit sicherem String-Parsing als Ersatz für den fehlenden Enum-Typ von Go.
- [go-convert](https://github.com/Eun/go-convert) - Das Paket go-convert ermöglicht die Konvertierung eines Werts in einen anderen Typ.
- [go-countries](https://github.com/mikekonan/go-countries) - Leichtgewichtiges Nachschlagen von ISO-3166-Codes.
- [go-dry](https://github.com/ungerik/go-dry) - DRY-Paket (Don't Repeat Yourself) für Go.
- [go-events](https://github.com/deatil/go-events) - Ein Go-Paket für Ereignisse und Ereignisabonnements, ähnlich wie die Hook-Funktionen von WordPress.
- [go-funk](https://github.com/thoas/go-funk) - Moderne Go-Hilfsbibliothek mit Hilfsfunktionen (map, find, contains, filter, chunk, reverse, …).
- [go-health](https://github.com/Talento90/go-health) - Das Paket health vereinfacht das Hinzufügen von Health-Checks zu Ihren Diensten.
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - Go-Bibliothek zum Kodieren von Structs in Header-Felder.
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - Eine CLI zum Entfernen ungenutzter oder früherer Versionen von AWS-Lambdas.
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock ist eine Lock-Bibliothek, die einen Read-Write-Mutex und ein Read-Write-Trylock ohne Starvation implementiert.
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - Eine von ts-pattern inspirierte Bibliothek für Pattern Matching.
- [go-pkg](https://github.com/chenquan/go-pkg) - Ein Go-Toolkit.
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Go-Paket für die Arbeit mit Problem Details.
- [go-qr](https://github.com/piglig/go-qr) - Ein nativer, hochwertiger und minimalistischer QR-Code-Generator.
- [go-rate](https://github.com/beefsack/go-rate) - Zeitgesteuerter Ratenbegrenzer für Go.
- [go-safecast](https://github.com/ccoVeille/go-safecast) - Bibliothek für sichere Konvertierung von Zahlentypen, die Integer-Über- und -Unterläufe verhindert (adressiert gosec G115 und CWE-190).
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - XML-Sitemap-Generator, geschrieben in Go.
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - Typsichere generische Hilfsfunktionen für Slices, Maps, Strings, Fehler, JSON, HTTP und Container, organisiert als kleine, unabhängig einsetzbare Pakete.
- [go-trigger](https://github.com/sadlil/go-trigger) - Globaler Event-Trigger für Go: Ereignisse mit einer ID registrieren und von überall in Ihrem Projekt auslösen.
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper ist ein Circuit-Breaker-Paket für Go, mit dem Sie Schaltkreise auslösen und deren Status steuern können.
- [go-type](https://github.com/mikekonan/go-types) - Bibliothek mit Go-Typen für Speicherung/Validierung und Übertragung von ISO-4217, ISO-3166 und weiteren Typen.
- [go-utils](https://github.com/Goldziher/go-utils) - Einfache, performante generische Hilfsfunktionen für Go, inspiriert von JavaScript und Python (map, filter, reduce und mehr).
- [goback](https://github.com/carlescere/goback) - Einfaches Paket für exponentielles Backoff in Go.
- [goctx](https://github.com/zerosnake0/goctx) - Context-Werte mit hoher Performance abrufen.
- [godaemon](https://github.com/VividCortex/godaemon) - Hilfsprogramm zum Schreiben von Daemons.
- [godoclive](https://github.com/syst3mctl/godoclive) - Generiert interaktive API-Dokumentation aus Go-HTTP-Handlern mithilfe statischer Analyse von chi-, gin- und net/http-Routern.
- [godropbox](https://github.com/dropbox/godropbox) - Gemeinsame Bibliotheken von Dropbox zum Schreiben von Go-Diensten/-Anwendungen.
- [gofn](https://github.com/tiendc/gofn) - Hochperformante Hilfsfunktionen, geschrieben mit Generics für Go 1.18+.
- [golarm](https://github.com/msempere/golarm) - Alarme bei Systemereignissen auslösen.
- [golog](https://github.com/mlimaloureiro/golog) - Einfaches und leichtgewichtiges CLI-Werkzeug zur Zeiterfassung Ihrer Aufgaben.
- [gopencils](https://github.com/bndr/gopencils) - Kleines und einfaches Paket, um REST-APIs bequem zu nutzen.
- [goplaceholder](https://github.com/michiwend/goplaceholder) - Eine kleine Golang-Bibliothek zum Erzeugen von Platzhalterbildern.
- [goreadability](https://github.com/philipjkim/goreadability) - Extraktor für Webseiten-Zusammenfassungen mit Facebook Open Graph und der Readability von arc90.
- [goreleaser](https://github.com/goreleaser/goreleaser) - Go-Binärdateien so schnell und einfach wie möglich ausliefern.
- [goreporter](https://github.com/wgliang/goreporter) - Golang-Werkzeug für statische Analyse, Unit-Tests, Code-Reviews und die Erstellung von Codequalitätsberichten.
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - SeaweedFS-Client-Bibliothek mit nahezu vollständigem Funktionsumfang.
- [gostrutils](https://github.com/ik5/gostrutils) - Sammlungen von Funktionen zur Bearbeitung und Konvertierung von Zeichenketten.
- [gotenv](https://github.com/subosito/gotenv) - Umgebungsvariablen in Go aus `.env` oder einem beliebigen `io.Reader` laden.
- [goval](https://github.com/maja42/goval) - Beliebige Ausdrücke in Go auswerten.
- [graterm](https://github.com/skovtunenko/graterm) - Stellt Primitive für ein geordnetes (sequenzielles/nebenläufiges) GRAceful TERMination (also sauberes Herunterfahren) in Go-Anwendungen bereit.
- [grofer](https://github.com/pesos/grofer) - Ein Werkzeug zur System- und Ressourcenüberwachung, geschrieben in Golang!
- [gubrak](https://github.com/novalagung/gubrak) - Golang-Hilfsbibliothek mit syntaktischem Zucker. Wie lodash, aber für Golang.
- [handy](https://github.com/miguelpragier/handy) - Viele Hilfsmittel wie String-Handler/-Formatierer und Validatoren.
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Ein einfacher und dennoch leistungsstarker Readiness-Test für Kubernetes.
- [hostctl](https://github.com/guumaster/hostctl) - Ein CLI-Werkzeug zur Verwaltung von /etc/hosts mit einfachen Befehlen.
- [htcat](https://github.com/htcat/htcat) - Hilfsprogramm für parallele HTTP-GET-Anfragen mit Pipelining.
- [hub](https://github.com/github/hub) - Kapselt Git-Befehle mit zusätzlicher Funktionalität für die Interaktion mit GitHub über das Terminal.
- [immortal](https://github.com/immortal/immortal) - Plattformübergreifender (OS-unabhängiger) Supervisor für \*nix.
- [jet](https://github.com/NicoNex/jet) - Just Edit Text: ein schnelles und leistungsstarkes Werkzeug zum Suchen und Ersetzen von Dateiinhalten und -namen mithilfe regulärer Ausdrücke.
- [jsend](https://github.com/clevergo/jsend) - Implementierung von JSend, geschrieben in Go.
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - Interaktiver Betrachter für JSON-Logs.
- [jump](https://github.com/gsamokovarov/jump) - Jump hilft Ihnen, schneller zu navigieren, indem es Ihre Gewohnheiten lernt.
- [just](https://github.com/kazhuravlev/just) - Einfach eine Sammlung nützlicher Funktionen für die Arbeit mit generischen Datenstrukturen.
- [koazee](https://github.com/wesovilabs/koazee) - Von Lazy Evaluation und funktionaler Programmierung inspirierte Bibliothek, die die Arbeit mit Arrays erleichtert.
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - Erkennung und Inventarisierung von Netzwerkgeräten mit persistenter Kennzeichnung, Scannen mehrerer Netzwerke und Tailscale-Integration.
- [lang](https://github.com/maxbolgarin/lang) - Generische Einzeiler für die Arbeit mit Variablen, Slices und Maps ohne Boilerplate-Code.
- [lets-go](https://github.com/aplescia-chwy/lets-go) - Go-Modul mit gängigen Hilfsmitteln für die Entwicklung Cloud-nativer REST-APIs. Enthält auch AWS-spezifische Hilfsmittel.
- [limiters](https://github.com/mennanov/limiters) - Ratenbegrenzer für verteilte Anwendungen in Golang mit konfigurierbaren Backends und verteilten Sperren.
- [lo](https://github.com/samber/lo) - Eine Lodash-ähnliche Go-Bibliothek auf Basis der Generics von Go 1.18+ (map, filter, contains, find …)
- [loncha](https://github.com/kazu/loncha) - Hochperformante Hilfsmittel für Slices.
- [lrserver](https://github.com/jaschaephraim/lrserver) - LiveReload-Server für Go.
- [mani](https://github.com/alajmo/mani) - CLI-Werkzeug, das Ihnen bei der Verwaltung mehrerer Repositorys hilft.
- [mc](https://github.com/minio/mc) - Minio Client bietet minimale Werkzeuge für die Arbeit mit Amazon-S3-kompatiblem Cloud-Speicher und Dateisystemen.
- [mergo](https://github.com/imdario/mergo) - Hilfsmittel zum Zusammenführen von Structs und Maps in Golang. Nützlich für Standardwerte von Konfigurationen und zur Vermeidung unübersichtlicher if-Anweisungen.
- [mimemagic](https://github.com/zRedShift/mimemagic) - Ultra-performante Bibliothek/Hilfsprogramm zur MIME-Erkennung in reinem Go.
- [mimetype](https://github.com/gabriel-vasile/mimetype) - Paket zur Erkennung von MIME-Typen auf Basis von Magic Numbers.
- [minify](https://github.com/tdewolff/minify) - Schnelle Minifier für die Dateiformate HTML, CSS, JS, XML, JSON und SVG.
- [minquery](https://github.com/icza/minquery) - MongoDB-/mgo.v2-Abfrage mit Unterstützung für effiziente Paginierung (Cursor, um das Auflisten von Dokumenten dort fortzusetzen, wo wir aufgehört haben).
- [moldova](https://github.com/StabbyCutyou/moldova) - Hilfsprogramm zum Erzeugen zufälliger Daten auf Basis einer Eingabevorlage.
- [mole](https://github.com/davrodpin/mole) - CLI-App zum einfachen Erstellen von SSH-Tunneln.
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - MongoDB-Paginierung für das offizielle Paket mongodb/mongo-go-driver, die sowohl normale Abfragen als auch Aggregations-Pipelines unterstützt.
- [mssqlx](https://github.com/linxGnu/mssqlx) - Datenbank-Client-Bibliothek, Proxy für beliebige Master-Slave- und Master-Master-Strukturen. Ausgelegt auf Leichtgewichtigkeit und automatische Lastverteilung.
- [multitick](https://github.com/VividCortex/multitick) - Multiplexer für ausgerichtete Ticker.
- [netbug](https://github.com/e-dard/netbug) - Einfaches Remote-Profiling Ihrer Dienste.
- [nfdump](https://github.com/chrispassas/nfdump) - nfdump-Netflow-Dateien lesen.
- [nostromo](https://github.com/pokanop/nostromo) - CLI zum Erstellen leistungsstarker Aliase.
- [okrun](https://github.com/xta/okrun) - Dampfwalze für Fehler bei go run.
- [olaf](https://github.com/btnguyen2k/olaf) - Twitter Snowflake, implementiert in Go.
- [onecache](https://github.com/adelowo/onecache) - Caching-Bibliothek mit Unterstützung für mehrere Backend-Speicher (Redis, Memcached, Dateisystem usw.).
- [optional](https://github.com/kazhuravlev/optional) - Optionale Struct-Felder und Variablen.
- [panicparse](https://github.com/maruel/panicparse) - Gruppiert ähnliche Goroutinen und färbt Stack-Dumps ein.
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - Bibliothek für Pattern Matching.
- [peco](https://github.com/peco/peco) - Einfaches interaktives Filterwerkzeug.
- [pgo](https://github.com/arthurkushman/pgo) - Praktische Funktionen für die PHP-Community.
- [pm](https://github.com/VividCortex/pm) - Prozess- (d. h. Goroutine-)Manager mit HTTP-API.
- [pointer](https://github.com/xorcare/pointer) - Das Paket pointer enthält Hilfsroutinen, die das Erstellen optionaler Felder einfacher Typen vereinfachen.
- [ptr](https://github.com/gotidy/ptr) - Paket mit Funktionen zur vereinfachten Erstellung von Pointern aus Konstanten einfacher Typen.
- [rate](https://github.com/webriots/rate) - Hochperformante Bibliothek zur Ratenbegrenzung mit Token-Bucket- und AIMD-Strategien.
- [rclient](https://github.com/zpatrick/rclient) - Lesbarer, flexibler, einfach zu verwendender Client für REST-APIs.
- [release](https://github.com/tomodian/release) - CLI für Changelogs im Keep-a-Changelog-Format.
- [relimpact](https://github.com/hashmap-kz/relimpact) - Schnelle Berichte zur API-Kompatibilität für Go-Projekte.
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - Maus und Tastatur über ein Smartphone steuern.
- [repeat](https://github.com/ssgreg/repeat) - Go-Implementierung verschiedener Backoff-Strategien, nützlich für das Wiederholen von Operationen und für Heartbeats.
- [request](https://github.com/mozillazg/request) - Go-HTTP-Anfragen für Menschen™.
- [rerun](https://github.com/ivpusic/rerun) - Go-Apps bei Quellcodeänderungen neu kompilieren und neu starten.
- [rest-go](https://github.com/edermanoel94/rest-go) - Ein Paket mit vielen hilfreichen Methoden für die Arbeit mit REST-APIs.
- [retro](https://github.com/goioc/retro) - Praktische Bibliothek für Wiederholungen bei Fehlern mit umfassender Flexibilität (Backoff-Strategien, Obergrenzen usw.).
- [retry](https://github.com/kamilsk/retry) - Der fortschrittlichste funktionale Mechanismus, um Aktionen wiederholt auszuführen, bis sie erfolgreich sind.
- [retry](https://github.com/percolate/retry) - Ein einfaches, aber hochgradig konfigurierbares Retry-Paket für Go.
- [retry](https://github.com/thedevsaddam/retry) - Einfaches und leicht verständliches Paket für Wiederholungsmechanismen für Go.
- [retry](https://github.com/shafreeck/retry) - Eine recht einfache Bibliothek, die sicherstellt, dass Ihre Arbeit erledigt wird.
- [retry-go](https://github.com/avast/retry-go) - Einfache Bibliothek für Wiederholungsmechanismen.
- [retry-go](https://github.com/rafaeljesus/retry-go) - Wiederholungen einfach und unkompliziert gemacht für Golang.
- [robustly](https://github.com/VividCortex/robustly) - Führt Funktionen resilient aus, fängt Panics ab und startet neu.
- [rospo](https://github.com/ferama/rospo) - Einfache und zuverlässige SSH-Tunnel mit eingebettetem SSH-Server in Golang.
- [scan](https://github.com/blockloop/scan) - Golang-`sql.Rows` direkt in Structs, Slices oder primitive Typen scannen.
- [scan](https://github.com/wroge/scan) - SQL-Zeilen mithilfe von Generics in beliebige Typen scannen.
- [scany](https://github.com/georgysavva/scany) - Bibliothek zum Scannen von Daten aus einer Datenbank in Go-Structs und mehr.
- [serve](https://github.com/syntaqx/serve) - Ein statischer HTTP-Server, wo immer Sie ihn brauchen.
- [sesh](https://github.com/joshmedeski/sesh) - Sesh ist eine CLI, mit der Sie tmux-Sitzungen mithilfe von zoxide schnell und einfach erstellen und verwalten können.
- [set](https://github.com/nofeaturesonlybugs/set) - Performantes und flexibles Struct-Mapping und lockere Typkonvertierung.
- [shutdown](https://github.com/ztrue/shutdown) - Shutdown-Hooks für Apps zur Behandlung von `os.Signal`.
- [silk](https://github.com/chrispassas/silk) - silk-Netflow-Dateien lesen.
- [slice](https://github.com/psampaz/slice) - Typsichere Funktionen für gängige Operationen auf Go-Slices.
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - Konvertierung von Slices zwischen primitiven Typen.
- [slicer](https://github.com/leaanthony/slicer) - Erleichtert die Arbeit mit Slices.
- [sorty](https://github.com/jfcg/sorty) - Schnelles nebenläufiges/paralleles Sortieren.
- [sqlex](https://github.com/go-sqlex/sqlex) - Direkt einsetzbare Modernisierung von jmoiron/sqlx mit behobenen Fehlern im SQL-Lexer, automatischer Expansion von IN-Klauseln, erweiterbaren Hooks und einheitlichen DB/Tx/Conn-Interfaces.
- [sqlx](https://github.com/jmoiron/sqlx) - Bietet eine Reihe von Erweiterungen auf Basis des hervorragenden integrierten Pakets database/sql.
- [sqlz](https://github.com/rfberaldo/sqlz) - Erweiterung für das Paket database/sql, die benannte Abfragen, Struct-Scanning und Batch-Operationen hinzufügt.
- [sshman](https://github.com/shoobyban/sshman) - SSH-Manager für authorized_keys-Dateien auf mehreren entfernten Servern.
- [stacktower](https://github.com/stacktower-io/stacktower) - Abhängigkeitsgraphen als physische Turmstrukturen visualisieren, inspiriert von XKCD #2347.
- [statiks](https://github.com/janiltonmaciel/statiks) - Schneller statischer HTTP-Dateiserver ohne Konfiguration.
- [Storm](https://github.com/asdine/storm) - Einfaches und leistungsstarkes Toolkit für BoltDB.
- [structs](https://github.com/PumpkinSeed/structs) - Implementiert einfache Funktionen zur Bearbeitung von Structs.
- [throttle](https://github.com/yudppp/throttle) - Throttle ist ein Objekt, das pro Zeitspanne genau eine Aktion ausführt.
- [tik](https://github.com/andy2046/tik) - Einfaches und leicht zu verwendendes Timing-Wheel-Paket für Go.
- [tome](https://github.com/cyruzin/tome) - Tome wurde entwickelt, um einfache RESTful-APIs zu paginieren.
- [toolbox](https://github.com/viant/toolbox) - Hilfsmittel für Slices, Maps, Multimaps, Structs, Funktionen und Datenkonvertierung. Service-Router, Makro-Auswerter, Tokenizer.
- [UNIS](https://github.com/esemplastic/unis) - Common Architecture™ für String-Hilfsmittel in Go.
- [upterm](https://github.com/owenthereal/upterm) - Ein Werkzeug für Entwickler, um Terminal-/tmux-Sitzungen sicher über das Web zu teilen. Ideal für Remote-Pair-Programming, den Zugriff auf Computer hinter NATs/Firewalls, Remote-Debugging und mehr.
- [usql](https://github.com/knq/usql) - usql ist eine universelle Kommandozeilenschnittstelle für SQL-Datenbanken.
- [util](https://github.com/shomali11/util) - Sammlung nützlicher Hilfsfunktionen (Strings, Nebenläufigkeit, Manipulationen, …).
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - Führt einen Befehl periodisch aus und stellt die neueste STDOUT-Ausgabe oder deren detailliertes Delta als HTTP-Endpunkt bereit.
- [wifiqr](https://github.com/reugn/wifiqr) - WLAN-QR-Code-Generator.
- [wuzz](https://github.com/asciimoo/wuzz) - Interaktives CLI-Werkzeug zur HTTP-Inspektion.
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy bietet eine Bibliothek für binäre Diffs und Patches in Golang.
- [xpool](https://github.com/peczenyj/xpool) - Noch ein typsicherer Objektpool für Golang mit Generics.
- [yogo](https://github.com/antham/yogo) - Yopmail-E-Mails über die Kommandozeile abrufen.

**[⬆ Zurück nach oben](#contents)**

## UUID

_Bibliotheken für die Arbeit mit UUIDs._

- [fastuuid](https://github.com/rekby/fastuuid) - UUIDv4 schnell als String oder Bytes erzeugen.
- [goid](https://github.com/jakehl/goid) - RFC4122-konforme V4-UUIDs erzeugen und parsen.
- [gouid](https://github.com/twharmon/gouid) - Kryptografisch sichere zufällige String-IDs mit nur einer Allokation erzeugen.
- [guid](https://github.com/sdrapkin/guid) - Schneller, kryptografisch sicherer Guid-Generator für Go (~10-mal schneller als `uuid`).
- [nanoid](https://github.com/aidarkhanov/nanoid) - Ein winziger und effizienter Generator eindeutiger String-IDs für Go.
- [nanoid](https://github.com/sixafter/nanoid) - Effizienter, kryptografisch sicherer Generator zur schnellen, nebenläufigen Erzeugung von NanoID und UUID.
- [sno](https://github.com/muyo/sno) - Kompakte, sortierbare und schnelle eindeutige IDs mit eingebetteten Metadaten.
- [ulid](https://github.com/oklog/ulid) - Go-Implementierung von ULID (Universally Unique Lexicographically Sortable Identifier).
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - Sichere, schnelle eindeutige Bezeichner mit Befehlen – ganz ohne Aufwand.
- [uuid](https://github.com/agext/uuid) - UUIDs v1 mit schnellem oder kryptografisch hochwertigem zufälligem Knotenbezeichner erzeugen, kodieren und dekodieren.
- [uuid](https://github.com/gofrs/uuid) - Implementierung des Universally Unique Identifier (UUID). Unterstützt sowohl das Erzeugen als auch das Parsen von UUIDs. Aktiv gepflegter Fork von satori uuid.
- [uuid](https://github.com/google/uuid) - Go-Paket für UUIDs auf Basis von RFC 4122 und DCE 1.1: Authentication and Security Services.
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - Eine winzige Go-Bibliothek ohne Abhängigkeiten, die UUIDs anhand der Standardformatierung nach RFC 4122 validiert und UUIDv7() in UTC-Zeitstempel konvertiert.
- [wuid](https://github.com/edwingeng/wuid) - Ein extrem schneller Generator global eindeutiger Zahlen.
- [xid](https://github.com/rs/xid) - Xid ist eine Bibliothek zur Erzeugung global eindeutiger IDs, die sich direkt und sicher in Ihrem Servercode verwenden lässt.

**[⬆ Zurück nach oben](#contents)**

## Validierung

_Bibliotheken zur Validierung._

- [checkdigit](https://github.com/osamingo/checkdigit) - Stellt Prüfziffernalgorithmen (Luhn, Verhoeff, Damm) und Rechner (ISBN, EAN, JAN, UPC usw.) bereit.
- [checker](https://github.com/cinar/checker) - Eingabevalidierung und direkte Normalisierung ohne Abhängigkeiten mit Struct-Tags, 23 Locales und JSON-Schema-Generierung.
- [go-validator](https://github.com/tiendc/go-validator) - Validierungsbibliothek mit Generics.
- [gody](https://github.com/guiferpa/gody) - :balloon: Ein leichtgewichtiger Struct-Validator für Go.
- [govalid](https://github.com/twharmon/govalid) - Schnelle, tag-basierte Validierung für Structs.
- [govalidator](https://github.com/asaskevich/govalidator) - Validatoren und Bereiniger für Strings, Zahlen, Slices und Structs.
- [govalidator](https://github.com/thedevsaddam/govalidator) - Golang-Anfragedaten mit einfachen Regeln validieren. Stark inspiriert von der Request-Validierung in Laravel.
- [govy](https://github.com/nobl9/govy) - Stark typisierte Validierungsregeln über eine funktionale Schnittstelle, auf Basis von Generics und ohne Reflection, mit starkem Fokus auf klare und informative Fehlermeldungen.
- [hvalid](https://github.com/lyonnee/hvalid) hvalid ist eine leichtgewichtige Validierungsbibliothek, geschrieben in der Sprache Go. Sie bietet eine benutzerdefinierte Validator-Schnittstelle und eine Reihe gängiger Validierungsfunktionen, die Entwicklern helfen, Datenvalidierung schnell zu implementieren.
- [jio](https://github.com/faceair/jio) - jio ist ein JSON-Schema-Validator ähnlich wie [joi](https://github.com/hapijs/joi).
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - Unterstützt die Validierung verschiedener Datentypen (Structs, Strings, Maps, Slices usw.) mit konfigurierbaren und erweiterbaren Validierungsregeln, die in üblichen Code-Konstrukten statt in Struct-Tags angegeben werden.
- [validate](https://github.com/gookit/validate) - Go-Paket zur Datenvalidierung und -filterung. Unterstützt die Validierung von Map-, Struct- und Request-Daten (Form, JSON, url.Values, hochgeladene Dateien) und weitere Funktionen.
- [validate](https://github.com/gobuffalo/validate) - Dieses Paket bietet ein Framework zum Schreiben von Validierungen für Go-Anwendungen.
- [validator](https://github.com/go-playground/validator) - Validierung von Go-Structs und -Feldern, einschließlich Cross Field, Cross Struct sowie Diving in Maps, Slices und Arrays.
- [Validator](https://github.com/go-the-way/validator) - Ein leichtgewichtiger Modellvalidator, geschrieben in Go. Enthält VFs: Min, Max, MinLength, MaxLength, Length, Enum, Regex.
- [valix](https://github.com/marrow16/valix) Go-Paket zur Validierung von Anfragen
- [vx](https://github.com/sevlyar/vx) - Validierung aus kleinen, komponierbaren Prüfungen, ohne Abhängigkeiten und mit rekonstruierbarem Fehlerpfad.
- [Zog](https://github.com/Oudwins/zog) - Ein von [Zod](https://github.com/colinhacks/zod) inspirierter Schema-Builder für das Parsen und Validieren von Werten zur Laufzeit.
  **[⬆ Zurück nach oben](#contents)**

## Versionskontrolle

_Bibliotheken für die Versionskontrolle._

- [cli](https://gitlab.com/gitlab-org/cli) - Ein Open-Source-Kommandozeilenwerkzeug für GitLab, das die praktischen Funktionen von GitLab auf Ihre Kommandozeile bringt.
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go ist eine Go-Bibliothek, mit der Aktionen bei VCS-Anbietern ausgeführt werden können.
- [ggc](https://github.com/bmf-san/ggc) - Ein Git-CLI-Werkzeug mit klassischer Kommandozeile und interaktiver UI mit inkrementeller Suche, Workflow-Unterstützung und konfigurierbaren Tastenbelegungen.
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Lokaler MCP-Server für Git-Operationen, der Ollama nutzt, um Tokens zu sparen und das Durchsickern von Secrets zu verhindern.
- [git2go](https://github.com/libgit2/git2go) - Go-Bindings für libgit2.
- [githooks](https://github.com/gabyx/githooks) - Git-Hooks pro Repository und gemeinsam genutzte Git-Hooks mit Versionskontrolle und automatischer Aktualisierung.
- [gitty](https://github.com/Omibranch/gitty) - Git/GitHub-CLI in einer einzigen Binärdatei, die add→commit→push durch einen Befehl ersetzt; menschenlesbare Syntax, keine externen Abhängigkeiten.
- [go-git](https://github.com/go-git/go-git) - Hochgradig erweiterbare Git-Implementierung in reinem Go.
- [go-vcs](https://github.com/sourcegraph/go-vcs) - VCS-Repositorys in Go bearbeiten und untersuchen.
- [hercules](https://github.com/src-d/hercules) - Gewinnt fortgeschrittene Erkenntnisse aus der Historie von Git-Repositorys.
- [hgo](https://github.com/beyang/hgo) - Hgo ist eine Sammlung von Go-Paketen, die Lesezugriff auf lokale Mercurial-Repositorys bieten.

**[⬆ Zurück nach oben](#contents)**

## Video

_Bibliotheken zur Bearbeitung von Videos._

- [gmf](https://github.com/3d0c/gmf) - Go-Bindings für die av\*-Bibliotheken von FFmpeg.
- [go-astiav](https://github.com/asticode/go-astiav) - Bessere C-Bindings für ffmpeg in GO.
- [go-astisub](https://github.com/asticode/go-astisub) - Untertitel in GO bearbeiten (.srt, .stl, .ttml, .webvtt, .ssa/.ass, Teletext, .smi usw.).
- [go-astits](https://github.com/asticode/go-astits) - MPEG-Transportströme (.ts) nativ in GO parsen und demultiplexen.
- [go-mpd](https://github.com/unki2aut/go-mpd) - Parser- und Generatorbibliothek für MPEG-DASH-Manifestdateien.
- [goav](https://github.com/giorgisio/goav) - Umfassende Go-Bindings für FFmpeg.
- [gortsplib](https://github.com/aler9/gortsplib) - RTSP-Server- und -Client-Bibliothek in reinem Go.
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - Parser und Generator für HLS-Playlists (M3U8); wird mit der Spezifikation aktuell gehalten.
- [libvlc-go](https://github.com/adrg/libvlc-go) - Go-Bindings für libvlc 2.X/3.X/4.X (verwendet vom VLC Media Player).
- [manifestor](https://github.com/alanzng/manifestor) - Bibliothek ohne Abhängigkeiten zum Parsen, Filtern, Transformieren und Erstellen von HLS- und DASH-Manifesten.
* [mosaic](https://github.com/farshidrezaei/mosaic) - Vorhersagbares, produktionsreifes Video-Packaging mit adaptiver Bitrate (ABR) für Go (HLS und DASH CMAF).
- [mp4ff](https://github.com/Eyevinn/mp4ff) - Bibliothek und Werkzeuge für die Arbeit mit MP4-Dateien, die Video, Audio, Untertitel oder Metadaten enthalten.
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - Analysator für MPEG-2-Transportströme, der die Konformität des PCR-Timings prüft und Low-Level-Strukturen von TS, PSI und PES ausgibt.
- [v4l](https://github.com/korandiz/v4l) - Videoaufnahmebibliothek für Linux, geschrieben in Go.

**[⬆ Zurück nach oben](#contents)**

## Web-Frameworks

_Full-Stack-Web-Frameworks._

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - HTTP-Serverbibliothek mit allem Drum und Dran: Router, Middleware-Stack, WebSocket-Hubs, Datei-Uploads und OpenAPI-Validierung.
- [Andurel](https://github.com/mbvlabs/andurel) - Von Rails inspiriertes Full-Stack-Web-Framework für Go mit Scaffolding, Datenbankwerkzeugen und serverseitig gerenderten oder Inertia-Frontends.
- [Atreugo](https://github.com/savsgio/atreugo) - Hochperformantes und erweiterbares Micro-Web-Framework ohne Speicherallokationen in Hot Paths.
- [Barf](https://github.com/opensaucerer/barf) - Basically, A Remarkable Framework – ein Framework zum Erstellen JSON-basierter Web-APIs. Es ist völlig unaufdringlich und erfindet kein Rad neu. Es ist so gestaltet, dass der Einstieg einfach und schnell gelingt, und dennoch flexibel genug für komplexere Anwendungsfälle.
- [Beego](https://github.com/beego/beego) - beego ist ein quelloffenes, hochperformantes Web-Framework für die Programmiersprache Go.
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti ist ein Framework für Go-Webanwendungen mit einer ausdrucksstarken, eleganten Syntax. Confetti vereint die Eleganz von Laravel mit der Einfachheit von Go.
- [Don](https://github.com/abemedia/go-don) - Ein hochperformantes und einfach zu verwendendes API-Framework.
- [doors](https://github.com/doors-dev/doors) - Servergesteuertes Framework zum Erstellen zustandsbehafteter, reaktiver Webanwendungen vollständig in Go.
- [Echo](https://github.com/labstack/echo) - Hochperformantes, minimalistisches Go-Web-Framework.
- [Fastschema](https://github.com/fastschema/fastschema) - Ein flexibles Go-Web-Framework und Headless CMS.
- [Fiber](https://github.com/gofiber/fiber) - Ein von Express.js inspiriertes Web-Framework auf Basis von Fasthttp.
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - Framework für erweiterbare Webprojekte. Enthält ein Konzept für Module und bietet Funktionen für DI, Configareas, i18n, Template-Engines, GraphQL, Observability, Sicherheit, Ereignisse, Routing und Reverse Routing usw.
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - Bietet E-Commerce-Funktionen mit sauberer Architektur wie DDD sowie Ports and Adapters, mit denen Sie flexible E-Commerce-Anwendungen erstellen können.
- [Fuego](https://github.com/go-fuego/fuego) - Das Framework für vielbeschäftigte Go-Entwickler! Web-Framework, das OpenAPI-3-Spezifikationen aus dem Quellcode generiert.
- [Gin](https://github.com/gin-gonic/gin) - Gin ist ein in Go geschriebenes Web-Framework! Es bietet eine Martini-ähnliche API mit deutlich besserer Performance – bis zu 40-mal schneller. Wenn Sie Performance und gute Produktivität brauchen.
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Werkzeug zur automatischen Parameterbindung für Gin, RPC-Werkzeuge für Gin.
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - Ein gRpc-orientiertes Microservice-Framework. Zu den Funktionen gehören ODM-Unterstützung für Mongo, Unterstützung für Cloud-Ressourcen (AWS/Azure/Google) und eine fließende Dependency Injection, die auf gRpc zugeschnitten ist. Zusätzlich wird grpc-web direkt unterstützt, wodurch der Browserzugriff auf alle gRpc-APIs ohne Proxy möglich ist.
- [Goa](https://github.com/goadesign/goa) - Goa bietet einen ganzheitlichen Ansatz für die Entwicklung von Remote-APIs und Microservices in Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr ist ein meinungsstarkes Framework für die Entwicklung von Microservices.
- [GoFrame](https://github.com/gogf/gf) - GoFrame ist ein modulares, leistungsstarkes, hochperformantes Framework für die Anwendungsentwicklung auf Enterprise-Niveau in Golang.
- [Gone](https://github.com/gone-io/gone) - Ein leichtgewichtiges Dependency-Injection- und Web-Framework, inspiriert von Spring.
- [goravel](https://github.com/goravel/goravel) - Ein von Laravel inspiriertes Web-Framework mit ORM, Authentifizierung, Queue, Aufgabenplanung und weiteren integrierten Funktionen.
- [Goshtoso](https://github.com/araihu/goshtoso) - Serverseitig gerenderte UI-Komponenten für Go-Anwendungen, erstellt mit templ, Tailwind CSS, HTMX und Alpine.js.
- [Goyave](https://github.com/go-goyave/goyave) - Funktionsvollständiges REST-API-Framework mit Fokus auf sauberen Code und schnelle Entwicklung, mit leistungsstarken integrierten Funktionen.
- [Hertz](https://github.com/cloudwego/hertz) - Ein hochperformantes und stark erweiterbares Go-HTTP-Framework, das Entwicklern beim Erstellen von Microservices hilft.
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot ist ein hochperformantes Framework für Webanwendungen mit Unterstützung für automatische Konfiguration und Dependency Injection.
- [httpsuite](https://github.com/rluders/httpsuite) - Parsen von HTTP-Anfragen und Problem-Antworten nach RFC 9457 für Go, mit einem Kern, der nur die Standardbibliothek nutzt, und optionaler Validierung.
- [Huma](https://github.com/danielgtaylor/huma/) - Framework für moderne REST/GraphQL-APIs mit integriertem OpenAPI 3, generierter Dokumentation und einer CLI.
- [iWF](https://github.com/indeedeng/iwf) - iWF ist eine All-in-one-Plattform zur Entwicklung lang laufender Geschäftsprozesse. Sie bietet eine komfortable Abstraktion für die Nutzung von Datenbanken, ElasticSearch, Nachrichtenwarteschlangen, dauerhaften Timern und mehr – mit einer sauberen, einfachen und benutzerfreundlichen Schnittstelle.
- [Lit](https://github.com/jvcoutinho/lit) - Hochperformantes deklaratives Web-Framework für Golang, mit dem Ziel von Einfachheit und Lebensqualität.
- [Microservice](https://github.com/claygod/microservice) - Das Framework zur Erstellung von Microservices, geschrieben in Golang.
- [NotNet](https://github.com/nottechdm/notnet) - Ein leichtgewichtiges Go-Framework zum Erstellen schneller, ergonomischer RESTful-APIs mit Middleware und flexiblem Routing.
- [patron](https://github.com/beatlabs/patron) - Patron ist ein Microservice-Framework, das bewährten Cloud-Praktiken folgt und auf Produktivität ausgerichtet ist.
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux ist ein leistungsstarkes Go-Web-Framework, das Regex zum Abgleichen und Verarbeiten von HTTP-Anfragen verwendet. Es bietet Funktionen wie CORS-Behandlung, strukturiertes Logging, Extraktion von URL-Parametern, Middlewares und Begrenzung der Nebenläufigkeit.
- [Revel](https://github.com/revel/revel) - Hochproduktives Web-Framework für die Sprache Go.
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Eine Bootstrapper-Bibliothek zum schnellen und einfachen Erstellen von Go-Microservices für Unternehmen mit Gin und gRPC.
- [Ronykit](https://github.com/clubpay/ronykit) - Web-Framework mit erweiterbarer Architektur und sehr hoher Performance.
- [rux](https://github.com/gookit/rux) - Einfaches und schnelles Web-Framework zum Erstellen von HTTP-Anwendungen in Golang.
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Inoffizielle Portierung von shadcn/ui für Go und templ: barrierefreie UI-Komponenten mit CLI und Registry.
- [togo](https://github.com/togo-framework/togo) - Full-Stack-Framework, das Ihr Go-Backend und React-Frontend als eine einzige Binärdatei ausliefert; eine CLI auf dem Niveau von Laravel Artisan.
- [uAdmin](https://github.com/uadmin/uadmin) - Voll ausgestattetes Web-Framework für Golang, inspiriert von Django.
- [WebGo](https://github.com/naughtygopher/webgo) - Ein Mikroframework zum Erstellen von Web-Apps mit Handler-Verkettung, Middleware und Context-Injection. Mit standardbibliothekskonformen HTTP-Handlern (d. h. `http.HandlerFunc`).
- [Xun](https://github.com/yaitoo/xun) - Web-Framework auf Basis des integrierten html/template von Go und des Routers aus dem Paket net/http. Es ist leichtgewichtig, schnell und einfach zu verwenden und bietet zugleich eine einfache und intuitive API zum Erstellen von Webanwendungen mit fortgeschrittenen Funktionen wie Middleware, Routing und Template-Rendering.
- [Yokai](https://github.com/ankorstore/yokai) - Einfaches, modulares und beobachtbares Go-Framework für Backend-Anwendungen.

**[⬆ Zurück nach oben](#contents)**

### Middleware

#### Eigentliche Middleware

- [client-timing](https://github.com/posener/client-timing) - Ein HTTP-Client für den Header Server-Timing.
- [CORS](https://github.com/rs/cors) - Fügen Sie Ihrer API ganz einfach CORS-Funktionen hinzu.
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Middleware für das Echo-Framework mit Logging und Metriken.
- [formjson](https://github.com/rs/formjson) - JSON-Eingaben transparent wie einen Standard-Formular-POST behandeln.
- [go-fault](https://github.com/github/go-fault) - Middleware zur Fehlerinjektion für Go.
- [Limiter](https://github.com/ulule/limiter) - Kinderleichte Middleware zur Ratenbegrenzung für Go.
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Go-Middleware zur Monetarisierung von APIs pro Anfrage über das Lightning Network (Bitcoin).
- [mid](https://github.com/bobg/mid) - Verschiedene HTTP-Middleware-Funktionen: idiomatische Fehlerrückgabe aus Handlern, Empfangen/Antworten mit JSON-Daten, Request-Tracing und mehr.
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Middleware für das Gin-Framework mit Logging, Metriken, Authentifizierung, Tracing usw.
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - Middleware für gRPC mit Logging, Metriken, Authentifizierung, Tracing usw.
- [Tollbooth](https://github.com/didip/tollbooth) - Request-Handler für HTTP mit Ratenbegrenzung.
- [XFF](https://github.com/sebest/xff) - Behandelt den Header `X-Forwarded-For` und verwandte Header.

#### Bibliotheken zum Erstellen von HTTP-Middleware

- [alice](https://github.com/justinas/alice) - Schmerzfreie Verkettung von Middleware für Go.
- [catena](https://github.com/codemodus/catena) - Verkettung von http.Handler-Wrappern (gleiche API wie "chain").
- [chain](https://github.com/codemodus/chain) - Verkettung von Handler-Wrappern mit bereichsbezogenen Daten („Middleware“ auf Basis von net/context).
- [gores](https://github.com/alioygur/gores) - Go-Paket zur Verarbeitung von HTML-, JSON-, XML- und weiteren Antworten. Nützlich für RESTful-APIs.
- [interpose](https://github.com/carbocation/interpose) - Minimalistische net/http-Middleware für Golang.
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - Fügt `http.Client` Interceptors hinzu, um Anfragen/Antworten auszugeben, zu formen, nachzuverfolgen usw.
- [muxchain](https://github.com/stephens2424/muxchain) - Leichtgewichtige Middleware für net/http.
- [negroni](https://github.com/urfave/negroni) - Idiomatische HTTP-Middleware für Golang.
- [render](https://github.com/unrolled/render) - Go-Paket zum einfachen Rendern von JSON-, XML- und HTML-Template-Antworten.
- [renderer](https://github.com/thedevsaddam/renderer) - Einfaches, leichtgewichtiges und schnelleres Paket zum Rendern von Antworten (JSON, JSONP, XML, YAML, HTML, Datei) für Go.
- [stats](https://github.com/thoas/stats) - Go-Middleware, die verschiedene Informationen über Ihre Webanwendung speichert.

**[⬆ Zurück nach oben](#contents)**

### Router

- [alien](https://github.com/gernest/alien) - Leichtgewichtiger und schneller HTTP-Router aus dem Weltall.
- [bellt](https://github.com/GuilhermeCaruso/bellt) - Ein einfacher Go-HTTP-Router.
- [Bone](https://github.com/go-zoo/bone) - Blitzschneller HTTP-Multiplexer.
- [Bxog](https://github.com/claygod/Bxog) - Einfacher und schneller HTTP-Router für Go. Er funktioniert mit Routen unterschiedlicher Komplexität, Länge und Verschachtelung. Und er kann aus den empfangenen Parametern eine URL erzeugen.
- [chi](https://github.com/go-chi/chi) - Kleiner, schneller und ausdrucksstarker HTTP-Router auf Basis von net/context.
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - Hochperformanter Router, ein Fork von `httprouter`. Der erste Router, der für `fasthttp` geeignet ist.
- [FastRouter](https://github.com/razonyang/fastrouter) - Ein schneller, flexibler HTTP-Router, geschrieben in Go.
- [Fox](https://github.com/fox-toolkit/fox) - Ein hochperformanter HTTP-Router zum Erstellen von Reverse-Proxys und API-Gateways, mit erstklassiger Unterstützung für die Änderung von Routen zur Laufzeit.
- [fursy](https://github.com/coregx/fursy) - HTTP-Router mit typsicheren generischen Handlern, automatischer OpenAPI-3.1-Generierung aus dem Code und Fehlerantworten nach RFC 9457.
- [goblin](https://github.com/bmf-san/goblin) - Ein Golang-HTTP-Router auf Basis eines Trie-Baums.
- [gocraft/web](https://github.com/gocraft/web) - Mux- und Middleware-Paket in Go.
- [Goji](https://github.com/goji/goji) - Goji ist ein minimalistischer und flexibler HTTP-Request-Multiplexer mit Unterstützung für `net/context`.
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router ist ein leichtgewichtiger und dennoch leistungsstarker HTTP-Router für die Programmiersprache Go.
- [goroute](https://github.com/goroute/route) - Einfacher und dennoch leistungsstarker HTTP-Request-Multiplexer.
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter ist ein Server-/API-Mikroframework, HTTP-Request-Router, Multiplexer und Mux, der einen Request-Router mit Middleware-Unterstützung für `net/context` bereitstellt.
- [gowww/router](https://github.com/gowww/router) - Blitzschneller HTTP-Router, vollständig kompatibel mit dem Interface net/http.Handler.
- [httprouter](https://github.com/julienschmidt/httprouter) - Hochperformanter Router. Nutzen Sie ihn zusammen mit den Standard-HTTP-Handlern, um ein sehr leistungsfähiges Web-Framework zu bilden.
- [httptreemux](https://github.com/dimfeld/httptreemux) - Schneller, flexibler, baumbasierter HTTP-Router für Go. Inspiriert von httprouter.
- [lars](https://github.com/go-playground/lars) - Ein leichtgewichtiger, schneller und erweiterbarer allokationsfreier HTTP-Router für Go, mit dem sich anpassbare Frameworks erstellen lassen.
- [mux](https://github.com/gorilla/mux) - Leistungsstarker URL-Router und Dispatcher für Golang.
- [nchi](https://github.com/muir/nchi) - chi-ähnlicher Router auf Basis von httprouter mit Middleware-Wrappern auf Dependency-Injection-Basis
- [ngamux](https://github.com/ngamux/ngamux) - Einfacher HTTP-Router für Go.
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - Ein extrem schneller HTTP-Router für Go (Golang), der Routenabgleich mit regulären Ausdrücken unterstützt. Bietet vollständige Unterstützung für das Erstellen von RESTful-APIs.
- [pure](https://github.com/go-playground/pure) - Ein leichtgewichtiger HTTP-Router, der sich an die Standardimplementierung "net/http" hält.
- [Siesta](https://github.com/VividCortex/siesta) - Komponierbares Framework zum Schreiben von Middleware und Handlern.
- [vestigo](https://github.com/husobee/vestigo) - Performanter, eigenständiger, HTTP-konformer URL-Router für Go-Webanwendungen.
- [violetear](https://github.com/nbari/violetear) - Go-HTTP-Router.
- [xmux](https://github.com/rs/xmux) - Hochperformanter Muxer auf Basis von `httprouter` mit Unterstützung für `net/context`.
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Ein einfacher und schneller HTTP-Router für Go.

**[⬆ Zurück nach oben](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - DOM-Bibliothek.
- [Extism Go SDK](https://github.com/extism/go-sdk) - Universelles, sprachübergreifendes WebAssembly-Framework zum Erstellen von Plug-in-Systemen und polyglotten Apps.
- [go-canvas](https://github.com/markfarnan/go-canvas) - Bibliothek zur Nutzung von HTML5 Canvas, wobei das gesamte Zeichnen im Go-Code erfolgt.
- [tinygo](https://github.com/tinygo-org/tinygo) - Go-Compiler für kleine Umgebungen. Mikrocontroller, WebAssembly und Kommandozeilenwerkzeuge. Basiert auf LLVM.
- [vert](https://github.com/norunners/vert) - Interoperabilität zwischen Go- und JS-Werten.
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - Go-WASM-Tests in Ihrem Browser ausführen.
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Go-Bindings für die WebAssembly-Runtime Wasmtime (WASI-Unterstützung, JIT/AOT, sicheres und schnelles Einbetten).
- [webapi](https://github.com/gowebapi/webapi) - Aus WebIDL generierte Bindings für DOM und HTML.

**[⬆ Zurück nach oben](#contents)**

## Webhook-Server

- [HookRun](https://github.com/bluvenr/hookrun) - Leichtgewichtige Webhook-Action-Engine (~3 MB, eine einzige Binärdatei, ohne Abhängigkeiten), die Befehle und Skripte aus YAML-Regeln mit Token-/HMAC-/IP-Authentifizierung und Hot Reload ausführt.
- [webhook](https://github.com/adnanh/webhook) - Werkzeug, mit dem Benutzer HTTP-Endpunkte (Hooks) erstellen können, die Befehle auf dem Server ausführen.
- [webhooked](https://github.com/42Atomys/webhooked) - Ein Webhook-Empfänger auf Steroiden: Webhook-Payloads verarbeiten, absichern, formatieren und speichern war noch nie so einfach.
- [WebhookX](https://github.com/webhookx-io/webhookx) - Ein Webhook-Gateway zum Empfangen, Verarbeiten und zuverlässigen Zustellen von Nachrichten.

**[⬆ Zurück nach oben](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Go-Bindings für Direct3D9.
- [go-ole](https://github.com/go-ole/go-ole) - Win32-OLE-Implementierung für Golang.
- [gosddl](https://github.com/MonaxGT/gosddl) - Konverter von SDDL-Strings in benutzerfreundliches JSON. SDDL besteht aus vier Teilen: Owner, Primary Group, DACL, SACL.
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - Ein Golang-Binding für die Windows Update Agent API unter Verwendung von go-ole.

**[⬆ Zurück nach oben](#contents)**

## Workflow-Frameworks

_Bibliotheken zum Erstellen von Workflows._

- [Cadence-client](https://github.com/uber-go/cadence-client) - Ein Framework zum Erstellen von Workflows und Aktivitäten, die auf der von Uber entwickelten Orchestrierungs-Engine Cadence laufen.
- [Dagu](https://github.com/dagu-go/dagu) - No-Code-Workflow-Executor. Er führt DAGs aus, die in einem einfachen YAML-Format definiert sind.
- [durable-go](https://github.com/agenticenv/durable-go) - Engine für dauerhafte Ausführung (Durable Execution) für Go-Apps mit einem einzigen Prozess und KI-Agenten, ohne Abhängigkeiten.
- [Flowbaker](https://github.com/flowbaker/flowbaker) - Selbst gehostete Ausführungs-Engine zum Erstellen, Verbinden und Automatisieren von No-Code-Workflows.
- [go-dag](https://github.com/rhosocial/go-dag) - Ein in Go entwickeltes Framework, das die Ausführung von Workflows verwaltet, die durch gerichtete azyklische Graphen beschrieben werden.
- [go-taskflow](https://github.com/noneback/go-taskflow) - Ein taskflow-ähnliches Framework für allgemeine taskparallele Programmierung mit integriertem Visualizer und Profiler.
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Dauerhafte Workflow-Engine mit integrierter Webkonsole, gestützt auf Postgres, MySQL oder SQLite.
- [workflow](https://github.com/luno/workflow) - Ein technologieunabhängiges, ereignisgesteuertes Workflow-Framework.

**[⬆ Zurück nach oben](#contents)**

## XML

_Bibliotheken und Werkzeuge zur Bearbeitung von XML._

- [XML-Comp](https://github.com/xml-comp/xml-comp) - Einfacher XML-Vergleicher für die Kommandozeile, der Diffs von Ordnern, Dateien und Tags erzeugt.
- [xml2map](https://github.com/sbabiv/xml2map) - Konverter von XML in MAP, geschrieben in Golang.
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery ist ein XPath-Paket für Golang für XML-Abfragen.
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - Prozedurale API zur XML-Erzeugung auf Basis des xmlwriter-Moduls von libxml2.
- [xpath](https://github.com/antchfx/xpath) - XPath-Paket für Go.
- [zek](https://github.com/miku/zek) - Ein Go-Struct aus XML generieren.

## Zero-Trust

_Bibliotheken und Werkzeuge zur Implementierung von Zero-Trust-Architekturen._

- [Cosign](https://github.com/sigstore/cosign) - Signieren, Verifizieren und Speichern von Containern in einer OCI-Registry.
- [in-toto](https://github.com/in-toto/in-toto-golang) - Go-Implementierung der Python-Referenzimplementierung von in-toto (bietet ein Framework zum Schutz der Integrität der Software-Lieferkette).
- [OpenZiti](https://github.com/openziti/ziti) - Ein vollständiges Open-Source-Zero-Trust-Overlay-Netzwerk. Enthält zahlreiche SDKs für viele Sprachen wie [golang](https://github.com/openziti/sdk-golang), mit denen Sie Zero-Trust-Prinzipien direkt in Ihre Anwendungen einbetten können. Die [OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) bietet zahlreiche Beispiele als Inspiration, darunter einen [zero trust ssh client - zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Nutzt Spiffe-JWT-Authentifizierung mit Hashicorp Vault für eine Authentifizierung ohne Secrets.
- [Spire](https://github.com/spiffe/spire) - SPIRE (die SPIFFE Runtime Environment) ist eine Toolchain von APIs zum Herstellen von Vertrauen zwischen Softwaresystemen über eine Vielzahl von Hosting-Plattformen hinweg.

## Codeanalyse

_Werkzeuge zur Quellcodeanalyse, auch bekannt als Werkzeuge für Static Application Security Testing (SAST)._

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Prüft aktuelle Änderungen an einem Go-Projekt auf rückwärtsinkompatible Änderungen.
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Statischer Codeanalysator für Go und andere Sprachen: Metriken für Komplexität, Kopplung, Kohäsion und Wartbarkeit, mit Berichten in HTML, JSON, Markdown und SARIF.
- [asty](https://github.com/asty-org/asty) - Konvertiert Golang-AST in JSON und JSON in AST.
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket ist ein Werkzeug, das Ihnen hilft, Funktionen in Ihren Go-Paketen zu finden, die keine direkten Unit-Tests haben.
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Findet heraus, welche Ihrer direkten GitHub-Abhängigkeiten in Go für einen ChainJacking-Angriff anfällig sind.
- [Chronos](https://github.com/amit-davidson/Chronos) - Erkennt Race Conditions statisch
- [deadmono](https://github.com/arxeiss/deadmono) - Wrapper um deadcode zur Erkennung von totem Code in Go-Monorepos.
- [dupl](https://github.com/mibk/dupl) - Werkzeug zur Erkennung von Code-Klonen.
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck ist ein Programm, das Go-Programme auf ungeprüfte Fehler untersucht.
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext erkennt verschachtelte Contexts in Schleifen oder Funktionsliteralen.
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle ist ein Werkzeug zur Stilprüfung wie Java Checkstyle. Dieses Werkzeug ist von Java Checkstyle und golint inspiriert. Der Stil bezieht sich auf einige Punkte der Go Code Review Comments.
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch wurde entwickelt, um Regeln der Clean Architecture zu validieren, etwa die Dependency Rule und die Interaktion zwischen Paketen in Ihren Go-Projekten.
- [go-critic](https://github.com/go-critic/go-critic) - Quellcode-Linter, der Prüfungen mitbringt, die derzeit in anderen Lintern nicht implementiert sind.
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Eine einfache Möglichkeit, veraltete Abhängigkeiten Ihrer Go-Projekte zu finden.
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - Webbasierter Visualisierer für Golang-ASTs.
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Werkzeug, das Ihre Go-Imports automatisch korrigiert (hinzufügt, entfernt).
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - SDK für die iFood-API.
- [golangci-lint](https://github.com/golangci/golangci-lint) – Ein schneller Runner für Go-Linter. Er führt Linter parallel aus, nutzt Caching, unterstützt `yaml`-Konfiguration, bietet Integrationen für alle gängigen IDEs und enthält Dutzende von Lintern.
- [golines](https://github.com/segmentio/golines) - Formatierer, der lange Zeilen in Go-Code automatisch kürzt.
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - Markdown-Linter mit integrierter Validierung von HTTP-Links, eine einzige Binärdatei, kein Node.js erforderlich.
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - Bibliothek und CLI, die textbasierte PlantUML-Klassendiagramme mit Informationen über Strukturen und Interfaces sowie deren Beziehungen erzeugt.
- [goreturns](https://github.com/sqs/goreturns) - Fügt Return-Anweisungen mit Nullwerten hinzu, passend zu den Rückgabetypen der Funktion.
- [gostatus](https://github.com/shurcooL/gostatus) - Kommandozeilenwerkzeug, das den Status von Repositorys anzeigt, die Go-Pakete enthalten.
- [lint](https://github.com/surullabs/lint) - Linter als Teil von go test ausführen.
- [php-parser](https://github.com/z7zmey/php-parser) - Ein in Go geschriebener Parser für PHP.
- [revive](https://github.com/mgechev/revive) – ~6-mal schnellerer, strengerer, konfigurierbarer, erweiterbarer und schöner direkter Ersatz für `golint`.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck ist `go vet` auf Steroiden und wendet eine Vielzahl statischer Analyseprüfungen an, die Sie vielleicht von Werkzeugen wie ReSharper für C# kennen.
- [structalign](https://github.com/peczenyj/structalign) - Zeigt, wie die Felder eines Structs neu angeordnet werden könnten, um weniger Speicher zu verbrauchen, und gibt einen Diff aus, statt Dateien umzuschreiben.
- [stto](https://github.com/mainak55512/stto) - Ein leichtgewichtiger, superschneller Zähler für Codezeilen, geschrieben in reinem Go.
- [testifylint](https://github.com/Antonboom/testifylint) – Ein Linter, der die Verwendung von [github.com/stretchr/testify](https://github.com/stretchr/testify) prüft.
- [tickgit](https://github.com/augmentable-dev/tickgit) - CLI und Go-Paket, um TODOs in Code-Kommentaren (in beliebigen Sprachen) aufzuspüren und per `git blame` den Autor zu ermitteln.
- [todocheck](https://github.com/preslavmihaylov/todocheck) - Statischer Codeanalysator, der TODO-Kommentare im Code mit Issues in Ihrem Issue-Tracker verknüpft.
- [unconvert](https://github.com/mdempsky/unconvert) - Unnötige Typkonvertierungen aus Go-Quellcode entfernen.
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Ein Linter, der erkennt, wo Variablen/Konstanten aus der Go-Standardbibliothek verwendet werden könnten.
- [vacuum](https://github.com/daveshanley/vacuum) - Ein ultra-superschnelles, leichtgewichtiges Werkzeug für OpenAPI-Linting und Qualitätsprüfung.
- [validate](https://github.com/mccoyst/validate) - Validiert Struct-Felder automatisch anhand von Tags.
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - Ein Linter, der prüft, ob Fehler aus externen Paketen umhüllt werden.

**[⬆ Zurück nach oben](#contents)**

## Editor-Plugins

_Plugins für Texteditoren und IDEs._

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - Dieses Plugin fügt Vim/Neovim die Funktionen von [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) hinzu.
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - Eine Visual-Studio-Code-Erweiterung zur Anzeige von Definitionen in der Ausgabe und zur Generierung von Go-Dokumentation.
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - Go-Plugin für JetBrains-IDEs.
- [go-mode](https://github.com/dominikh/go-mode.el) - Go-Modus für GNU/Emacs.
- [gocode](https://github.com/nsf/gocode) - Daemon zur Autovervollständigung für die Programmiersprache Go.
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - Formatierungswerkzeug für Imports.
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - Diese Erweiterung fügt VS Code Unterstützung für Benchmark-Profiling für die Sprache Go hinzu.
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - Golang-Plugin-Sammlung für den Texteditor SublimeText 3 mit Codevervollständigung und weiteren IDE-ähnlichen Funktionen.
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - Vim-Plugin zum Generieren von Go-Tests auf Basis der Signatur einer Funktion oder Methode.
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - Vim-Plugin, das Syntaxfehler beim Speichern hervorhebt.
- [vim-go](https://github.com/fatih/vim-go) - Plugin für die Go-Entwicklung in Vim.
- [vscode-go](https://github.com/golang/vscode-go) - Erweiterung für Visual Studio Code (VS Code), die Unterstützung für die Sprache Go bietet.
- [Watch](https://github.com/eaburns/Watch) - Führt bei Dateiänderungen einen Befehl in einem acme-Fenster aus.

**[⬆ Zurück nach oben](#contents)**

## Go-Generate-Werkzeuge

- [envdoc](https://github.com/g4s8/envdoc) - Dokumentation für Umgebungsvariablen aus Go-Quelldateien generieren.
- [generic](https://github.com/usk81/generic) - Flexibler Datentyp für Go.
- [gocontracts](https://github.com/Parquery/gocontracts) - Bringt Design by Contract nach Go, indem der Code mit der Dokumentation synchronisiert wird.
- [godal](https://github.com/mafulong/godal) - ORM-Modelle für Golang durch Angabe einer SQL-DDL-Datei generieren, die von gorm verwendet werden können.
- [gonerics](https://github.com/bouk/gonerics) - Idiomatische Generics in Go.
- [gotests](https://github.com/cweill/gotests) - Go-Tests aus Ihrem Quellcode generieren.
- [gounit](https://github.com/hexdigest/gounit) - Go-Tests mit Ihren eigenen Vorlagen generieren.
- [hasgo](https://github.com/DylanMeeus/hasgo) - Von Haskell inspirierte Funktionen für Ihre Slices generieren.
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - Typisierte Go-Konstanten aus der x-constants-Erweiterung einer OpenAPI-Spezifikation generieren.
- [options-gen](https://github.com/kazhuravlev/options-gen) - Functional Options, wie in Dave Cheneys Beitrag „Functional options for friendly APIs“ beschrieben.
- [re2dfa](https://gitlab.com/opennota/re2dfa) - Reguläre Ausdrücke in endliche Automaten umwandeln und Go-Quellcode ausgeben.
- [sqlgen](https://github.com/anqiansong/sqlgen) - gorm-, xorm-, sqlx-, bun- und SQL-Code aus SQL-Dateien oder DSN generieren.
- [TOML-to-Go](https://xuri.me/toml-to-go) - Übersetzt TOML sofort im Browser in einen Go-Typ.
- [xgen](https://github.com/xuri/xgen) - Parser für XSD (XML Schema Definition) und Codegenerator für Go/C/Java/Rust/TypeScript.

**[⬆ Zurück nach oben](#contents)**

## Go-Werkzeuge

- [decouple](https://github.com/bobg/decouple) - Findet „überspezifizierte“ Funktionsparameter, die mit Interface-Typen verallgemeinert werden könnten.
- [docs](https://github.com/go-oas/docs) - Automatische Generierung von RESTful-API-Dokumentation für GO-Projekte – ausgerichtet am Standard der Open API Specification.
- [go-callvis](https://github.com/TrueFurby/go-callvis) - Den Aufrufgraphen Ihres Go-Programms im dot-Format visualisieren.
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - Analysiert und visualisiert die Größe von Abhängigkeiten in kompilierten Golang-Binärdateien und gibt Einblick in ihren Einfluss auf den finalen Build.
- [go-swagger](https://github.com/go-swagger/go-swagger) - Swagger-2.0-Implementierung für Go. Swagger ist eine einfache und dennoch leistungsstarke Darstellung Ihrer RESTful-API.
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Eine interaktive Umgebung zum Erstellen und Testen von Go-Vorlagen.
- [godbg](https://github.com/tylerwince/godbg) - Implementierung des Rust-Makros `dbg!` für schnelles und einfaches Debugging während der Entwicklung.
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - Findet alle Structs in einer Codebasis, die ein bestimmtes Go-Interface implementieren.
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - Go-Werkzeug, das in go.mod-Dateien enthaltene Binärdateien ausführt und zwischenspeichert.
- [gotemplate.io](https://gotemplate.io/) - Online-Werkzeug zur Live-Vorschau von `text/template`-Vorlagen.
- [gotestdox](https://github.com/bitfield/gotestdox) - Go-Testergebnisse als lesbare Sätze anzeigen.
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks vergibt automatisch Sterne an Ihre GitHub-Abhängigkeiten aus go.mod und sendet so etwas Liebe an deren Maintainer.
- [gotutor](https://github.com/ahmedakef/gotutor) - Online-Debugger und -Visualisierer für Go.
- [govisual](https://github.com/doganarif/govisual) - HTTP-Request-Visualisierer und -Debugger in reinem Go ohne Konfiguration für die lokale Go-Webentwicklung.
- [igo](https://github.com/rocketlaunchr/igo) - Ein Transpiler von igo nach Go (neue Sprachfunktionen für die Sprache Go!)
- [lensm](https://github.com/loov/lensm) - Betrachter für Go-Assembly und -Quellcode.
- [modver](https://github.com/bobg/modver) - Vergleicht zwei Versionen eines Go-Moduls, um die erforderliche Änderung der Versionsnummer (Major, Minor oder Patchlevel) gemäß den [Semver](https://semver.org/)-Regeln zu prüfen.
- [MoniGO](https://github.com/iyashjayesh/monigo) - Eine Bibliothek zur Performance-Überwachung für Go-Anwendungen. Sie liefert Echtzeit-Einblicke in die Anwendungsperformance! 🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - Navigieren Sie effizient durch Go-Dateien mit der Browsererweiterung OctoLinker für GitHub.
- [richgo](https://github.com/kyoh86/richgo) - Bereichert die Ausgabe von `go test` mit Textdekorationen.
- [roumon](https://github.com/becheran/roumon) - Den aktuellen Zustand aller aktiven Goroutinen über eine Kommandozeilenschnittstelle überwachen.
- [rts](https://github.com/galeone/rts) - RTS: Response to Struct. Generiert Go-Structs aus Serverantworten.
- [textra](https://github.com/ravsii/textra) - Namen, Typen und Tags von Go-Struct-Feldern zum Filtern und Exportieren extrahieren.
- [typex](https://github.com/dtgorski/typex) - Go-Typen und ihre transitiven Abhängigkeiten untersuchen, alternativ die Ergebnisse als Deklarationen von TypeScript-Value-Objects (oder -Typen) exportieren.

**[⬆ Zurück nach oben](#contents)**

## Softwarepakete

_In Go geschriebene Software._

**[⬆ Zurück nach oben](#contents)**

### DevOps-Werkzeuge

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate ist ein Werkzeug, das lange Zeichenketten mit konfigurierbaren Trennzeichen in kürzere umwandelt, etwa um Branch-Namen in IDs von Deployment-Stacks einzubetten.
- [alaz](https://github.com/ddosify/alaz) - Mühelose, ressourcenschonende Kubernetes-Überwachung auf Basis von eBPF.
- [aptly](https://github.com/aptly-dev/aptly) - aptly ist ein Werkzeug zur Verwaltung von Debian-Repositorys.
- [aurora](https://github.com/xuri/aurora) - Plattformübergreifende, webbasierte Konsole für Beanstalkd-Queue-Server.
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - AWS-Kosten diagnostizieren, ungenutzte Ressourcen erkennen und Cloud-Ausgaben direkt aus dem Terminal optimieren 🩺 ☁️.
- [awsenv](https://github.com/soniah/awsenv) - Kleine Binärdatei, die Amazon-Umgebungsvariablen (AWS) für ein Profil lädt.
- [Balerter](https://github.com/balerter/balerter) - Ein selbst gehosteter, skriptbasierter Alerting-Manager.
- [Blast](https://github.com/dave/blast) - Ein einfaches Werkzeug für API-Lasttests und Batch-Jobs.
- [bombardier](https://github.com/codesenberg/bombardier) - Schnelles, plattformübergreifendes HTTP-Benchmarking-Werkzeug.
- [cassowary](https://github.com/rogerwelin/cassowary) - Modernes, plattformübergreifendes Werkzeug für HTTP-Lasttests, geschrieben in Go.
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - Ein Resilienz-Werkzeug, das Anwendungen hilft, zufällige Instanzausfälle zu tolerieren.
- [colima](https://github.com/abiosoft/colima) - Container-Runtimes unter macOS (und Linux) mit minimalem Einrichtungsaufwand.
- [Ddosify](https://github.com/ddosify/ddosify) - Hochperformantes Werkzeug für Lasttests, geschrieben in Golang.
- [decompose](https://github.com/s0rg/decompose) - Werkzeug zum Erzeugen und Verarbeiten von Verbindungsgraphen von Docker-Containern.
- [Den](https://github.com/us/den) - Selbst gehostete Sandbox-Runtime für KI-Agenten. Open-Source-Alternative zu E2B.
- [DepCharge](https://github.com/centerorbit/depcharge) - Hilft bei der Orchestrierung der Ausführung von Befehlen über die vielen Abhängigkeiten größerer Projekte hinweg.
- [dish](https://github.com/thevxn/dish) - Ein leichtgewichtiger, remote konfigurierbarer Überwachungsdienst.
- [Docker](https://www.docker.com/) - Offene Plattform für verteilte Anwendungen für Entwickler und Systemadministratoren.
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - Docker-Image zum Bauen von Go-Binärdateien für Windows mit der MinGW-Toolchain.
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Docker-Volumes lokal oder auf beliebigen S3-, WebDAV-, Azure-Blob-Storage-, Dropbox- oder SSH-kompatiblen Speicher sichern.
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - Eine Go-Bibliothek und ein ausführbares Programm, das aus verschiedenen Eingabekanälen gültige Dockerfiles erzeugt.
- [docklite](https://github.com/benzjeremy/docklite) - Leichtgewichtige Portainer-Alternative zur Verwaltung von Docker-Containern mit Echtzeit-Metriken über SSE.
- [dogo](https://github.com/liudng/dogo) - Überwacht Änderungen in Quelldateien und kompiliert und startet automatisch (neu).
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - Nachgelagerte Jenkins-Jobs über eine Binärdatei, Docker oder Drone CI auslösen.
- [drone-scp](https://github.com/appleboy/drone-scp) - Dateien und Artefakte über SSH mithilfe einer Binärdatei, Docker oder Drone CI kopieren.
- [Dropship](https://github.com/chrismckenzie/dropship) - Werkzeug zum Bereitstellen von Code über ein CDN.
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - Golang-Paket für einfache Remote-Ausführung über SSH und SCP-Downloads über `ProxyCommand`.
- [fac](https://github.com/mkchoi212/fac) - Kommandozeilen-Benutzeroberfläche zum Beheben von Git-Merge-Konflikten.
- [Flannel](https://github.com/flannel-io/flannel) - Flannel ist ein Netzwerk-Fabric für Container, entwickelt für Kubernetes.
- [Fleet device management](https://github.com/fleetdm/fleet) - Leichtgewichtige, programmierbare Telemetrie für Server und Workstations.
- [gaia](https://github.com/gaia-pipeline/gaia) - Leistungsstarke Pipelines in jeder Programmiersprache erstellen.
- [ghorg](https://github.com/gabrie30/ghorg) - Schnell alle Repositorys einer Organisation/eines Benutzers in ein Verzeichnis klonen – unterstützt GitHub, GitLab, Gitea und Bitbucket.
- [Gitea](https://github.com/go-gitea/gitea) - Fork von Gogs, vollständig von der Community getragen.
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - Migrieren Sie alle Ihre GitHub-Repositorys, Issues, Meilensteine und Labels in Ihre Gitea-Instanz.
- [gitl](https://github.com/akomyagin/gitl) - KI-Review von Git-Commit-Bereichen mit Risikobewertung (niedrig/mittel/hoch), Changelog-Generierung und Aktivitätsübersicht über mehrere Repositorys. GitHub Action inklusive.
- [go-furnace](https://github.com/go-furnace/go-furnace) - In Go geschriebene Hosting-Lösung. Stellen Sie Ihre Anwendung mühelos auf AWS, GCP oder DigitalOcean bereit.
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - Eine einfache Möglichkeit, sich selbst aktualisierende Go-Anwendungen zu erstellen – unterstützt Github und Gitlab.
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Ermöglicht es Ihren Go-Anwendungen, sich selbst zu aktualisieren.
- [gobrew](https://github.com/cryptojuice/gobrew) - Mit gobrew können Sie einfach zwischen mehreren Go-Versionen wechseln.
- [gobrew](https://github.com/kevincobain2000/gobrew) - Go-Versionsmanager. Superleichtes Werkzeug zum Installieren und Verwalten von Go-Versionen. Go ohne Root installieren. Gobrew erfordert kein Shell-Rehash.
- [godbg](https://github.com/sirnewton01/godbg) - Webbasierte Frontend-Anwendung für gdb.
- [Gogs](https://gogs.io/) - Ein selbst gehosteter Git-Dienst in der Programmiersprache Go.
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - Ein leichtgewichtiges API-Gateway und Reverse-Proxy mit deklarativer Konfiguration, robuster Middleware und Unterstützung für REST, GraphQL, TCP, UDP und gRPC.
- [gonative](https://github.com/inconshreveable/gonative) - Werkzeug, das einen Build von Go erstellt, der für alle Plattformen cross-kompilieren kann und dabei weiterhin die Cgo-fähigen Versionen der Standardbibliothekspakete verwendet.
- [govvv](https://github.com/ahmetalpbalkan/govvv) - Wrapper für „go build“, um Go-Binärdateien einfach mit Versionsinformationen zu versehen.
- [grapes](https://github.com/yaronsumel/grapes) - Leichtgewichtiges Werkzeug, mit dem sich Befehle mühelos per SSH verteilen lassen.
- [GVM](https://github.com/moovweb/gvm) - GVM bietet eine Schnittstelle zur Verwaltung von Go-Versionen.
- [Hey](https://github.com/rakyll/hey) - Hey ist ein winziges Programm, das eine Webanwendung unter Last setzt.
- [httpref](https://github.com/dnnrly/httpref) - httpref ist eine praktische CLI-Referenz für HTTP-Methoden, Statuscodes, Header sowie TCP- und UDP-Ports.
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Mit der Jenkins CLI können Sie Ihr Jenkins auf einfache Weise verwalten.
- [k0s](https://github.com/k0sproject/k0s) - Kubernetes-Distribution ohne Reibungsverluste.
- [k3d](https://github.com/k3d-io/k3d) - Kleiner Helfer zum Ausführen von k3s der CNCF in Docker.
- [k3s](https://github.com/k3s-io/k3s) - Leichtgewichtiges Kubernetes.
- [k6](https://github.com/grafana/k6) - Ein modernes Werkzeug für Lasttests mit Go und JavaScript.
- [k9s](https://github.com/derailed/k9s) - Kubernetes-CLI, um Ihre Cluster mit Stil zu verwalten.
- [kala](https://github.com/ajvb/kala) - Einfacher, moderner und performanter Job-Scheduler.
- [kcli](https://github.com/cswank/kcli) - Kommandozeilenwerkzeug zur Untersuchung von Kafka-Topics/-Partitionen/-Nachrichten.
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker – lokale Cluster zum Testen von Kubernetes.
- [ko](https://github.com/google/ko) - Kommandozeilenwerkzeug zum Bauen und Bereitstellen von Go-Anwendungen auf Kubernetes
- [kool](https://github.com/kool-dev/kool) - Kommandozeilenwerkzeug zur einfachen Verwaltung von Docker-Umgebungen.
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks ist eine Open-Source-Control-Plane, die Datenbanken, Nachrichtenwarteschlangen und andere Dateninfrastruktur auf K8s betreibt und verwaltet.
- [kubefwd](https://github.com/txn2/kubefwd) - Massenweises Kubernetes-Port-Forwarding mit eindeutigen IPs pro Dienst für die lokale Entwicklung.
- [kubernetes](https://github.com/kubernetes/kubernetes) - Container-Cluster-Manager von Google.
- [kubeshark](https://github.com/kubeshark/kubeshark) - API-Traffic-Analysator für Kubernetes, inspiriert von Wireshark, gezielt für Kubernetes entwickelt.
- [KubeVela](https://github.com/kubevela/kubevela) - Cloud-native Anwendungsbereitstellung.
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN bietet eine Cloud-native Entwicklungsumgebung, die sich nahtlos mit dem Netzwerk Ihres Kubernetes-Clusters verbindet.
- [KusionStack](https://github.com/KusionStack/kusion) - Ein einheitlicher, programmierbarer Konfigurations-Techstack, um moderne Apps nach dem Ansatz „Platform as Code“ und „Infra as Code“ bereitzustellen.
- [kwatch](https://github.com/abahmed/kwatch) - Abstürze in Ihrem Kubernetes-Cluster (K8s) sofort überwachen und erkennen.
- [lstags](https://github.com/ivanilves/lstags) - Werkzeug und API zum Synchronisieren von Docker-Images über verschiedene Registrys hinweg.
- [lwc](https://github.com/timdp/lwc) - Eine sich live aktualisierende Version des UNIX-Befehls wc.
- [manssh](https://github.com/xwjdsh/manssh) - manssh ist ein Kommandozeilenwerkzeug zur einfachen Verwaltung Ihrer SSH-Alias-Konfiguration.
- [Mantil](https://github.com/mantil-io/mantil) - Go-spezifisches Framework zum Erstellen serverloser Anwendungen auf AWS, mit dem Sie sich auf reinen Go-Code konzentrieren können, während Mantil sich um die Infrastruktur kümmert.
- [minikube](https://github.com/kubernetes/minikube) - Kubernetes lokal ausführen.
- [Moby](https://github.com/moby/moby) - Gemeinschaftsprojekt für das Container-Ökosystem zum Zusammenstellen containerbasierter Systeme.
- [Mora](https://github.com/emicklei/mora) - REST-Server für den Zugriff auf MongoDB-Dokumente und -Metadaten.
- [mq-studio](https://github.com/amigoer/mq-studio) - Plattformübergreifender Desktop-Client zur Verwaltung und Überwachung von RocketMQ-, RabbitMQ-, Kafka-, Pulsar-, Redis-Stream-, MQTT-, NATS- und ActiveMQ-Clustern.
- [ostent](https://github.com/ostrost/ostent) - Erfasst und zeigt Systemmetriken an und leitet sie optional an Graphite und/oder InfluxDB weiter.
- [Packer](https://github.com/mitchellh/packer) - Packer ist ein Werkzeug zum Erstellen identischer Maschinen-Images für mehrere Plattformen aus einer einzigen Quellkonfiguration.
- [Pewpew](https://github.com/bengadbois/pewpew) - Flexibler HTTP-Stresstester für die Kommandozeile.
- [pingtower](https://github.com/crleonard/pingtower) - Leichtgewichtiger, selbst gehosteter Uptime-Monitor für Websites und APIs.
- [PipeCD](https://github.com/pipe-cd/pipecd) - Eine Continuous-Delivery-Plattform im GitOps-Stil, die eine konsistente Bereitstellungs- und Betriebserfahrung für beliebige Anwendungen bietet.
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo ist eine winzige, mit Go erstellte Webanwendung, die Best Practices für den Betrieb von Microservices in Kubernetes zeigt. Podinfo wird von CNCF-Projekten wie Flux und Flagger für End-to-End-Tests und Workshops verwendet.
- [podman-tui](https://github.com/containers/podman-tui) - Terminal-UI zur Verwaltung von Podman.
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium ist ein identitätsbewusster Zugriffsproxy.
- [Rodent](https://github.com/alouche/rodent) - Rodent hilft Ihnen, Go-Versionen und Projekte zu verwalten und Abhängigkeiten zu verfolgen.
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - S3-Proxy mit den Methoden GET, PUT und DELETE sowie Authentifizierung (OpenID Connect und Basic Auth).
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - Kleines Hilfsprogramm/kleine Bibliothek, optimiert für die Hochgeschwindigkeitsübertragung großer Objekte in und aus Amazon S3.
- [s5cmd](https://github.com/peak/s5cmd) - Rasend schnelles Werkzeug zur Ausführung von Operationen auf S3 und dem lokalen Dateisystem.
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - BareMetal-Server über die Kommandozeile verwalten (so einfach wie mit Docker).
- [script](https://github.com/bitfield/script) - Erleichtert das Schreiben Shell-ähnlicher Skripte in Go für DevOps- und Systemadministrationsaufgaben.
- [sg](https://github.com/ChristopherRabotin/sg) - Benchmarkt eine Reihe von HTTP-Endpunkten (wie ab), mit der Möglichkeit, Antwortcode und Daten zwischen den einzelnen Aufrufen zu nutzen, um einen Server gezielt auf Basis seiner vorherigen Antwort zu belasten.
- [sigma](https://github.com/go-sigma/sigma) - OCI-native Container-Image-Registry, unterstützt OCI-native Artefakte, Artefakt-Scans, Image-Builds usw.
- [skm](https://github.com/TimothyYe/skm) - SKM ist ein einfacher und leistungsstarker SSH-Schlüsselmanager, mit dem Sie Ihre verschiedenen SSH-Schlüssel mühelos verwalten können!
- [sortie](https://github.com/sortie-ai/sortie) - Verwandelt Tracker-Tickets in Sitzungen autonomer Coding-Agenten.
- [StatusOK](https://github.com/sanathp/statusok) - Überwachen Sie Ihre Website und REST-APIs. Lassen Sie sich per Slack oder E-Mail benachrichtigen, wenn Ihr Server ausfällt oder die Antwortzeit länger als erwartet ist.
- [tau](https://github.com/taubyte/tau) - Einfaches Erstellen von Cloud-Computing-Plattformen mit Funktionen wie Serverless-WebAssembly-Funktionen, Frontend-Hosting, CI/CD, Objektspeicher, K/V-Datenbank und Pub/Sub-Messaging.
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - Terraform-Provider-Plugin, das sich zur Laufzeit dynamisch auf Basis eines OpenAPI-Dokuments (früher als Swagger-Datei bekannt) konfiguriert, das die Definitionen der bereitgestellten APIs enthält.
- [tf-profile](https://github.com/datarootsio/tf-profile) - Profiler für Terraform-Läufe. Erzeugt globale Statistiken, Statistiken auf Ressourcenebene oder Visualisierungen.
- [tickstem/uptime](https://github.com/tickstem/uptime) - Go-Client für die HTTP-Uptime-Überwachung mit Warnungen bei ablaufenden SSL-Zertifikaten und konfigurierbaren Assertions für Antworten.
- [tlm](https://github.com/yusufcanb/tlm) - Lokaler CLI-Copilot, angetrieben von CodeLLaMa
- [traefik](https://github.com/containous/traefik) - Reverse-Proxy und Load Balancer mit Unterstützung für mehrere Backends.
- [trubka](https://github.com/xitonix/trubka) - Ein CLI-Werkzeug zur Verwaltung und Fehlerbehebung von Apache-Kafka-Clustern, mit der Möglichkeit, generisch Protocol-Buffer- und Klartext-Ereignisse an Kafka zu veröffentlichen bzw. von Kafka zu konsumieren.
- [Updatecli](https://github.com/updatecli/updatecli) - Eine universelle, deklarative Engine für Update-Richtlinien.
- [uTask](https://github.com/ovh/utask) - Automatisierungs-Engine, die in YAML deklarierte Geschäftsprozesse modelliert und ausführt.
- [Vegeta](https://github.com/tsenart/vegeta) - Werkzeug und Bibliothek für HTTP-Lasttests. Es sind über 9000!
- [wait-for](https://github.com/dnnrly/wait-for) - Darauf warten, dass etwas passiert (über die Kommandozeile), bevor es weitergeht. Einfache Orchestrierung von Docker-Diensten und anderen Dingen.
- [Wide](https://wide.b3log.org/login) - Webbasierte IDE für Teams, die Golang verwenden.
- [winrm-cli](https://github.com/masterzen/winrm-cli) - CLI-Werkzeug zur Remote-Ausführung von Befehlen auf Windows-Rechnern.
- [zerohand](https://github.com/nilpoona/zerohand) - Ein einfaches und effizientes Werkzeug für Lasttests von Web-APIs.

**[⬆ Zurück nach oben](#contents)**

### Sonstige Software

- [Backrest](https://github.com/garethgeorge/backrest) - Webbasierte UI und Orchestrator für restic-Backups.
- [Better Go Playground](https://goplay.tools) - Go-Playground mit Syntaxhervorhebung, Codevervollständigung und weiteren Funktionen.
- [blocky](https://github.com/0xERR0R/blocky) - Schneller und leichtgewichtiger DNS-Proxy als Werbeblocker für das lokale Netzwerk, mit vielen Funktionen.
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - TUI-Bluetooth-Manager für Linux.
- [borg](https://github.com/crufter/borg) - Terminalbasierte Suchmaschine für Bash-Snippets.
- [boxed](https://github.com/tejo/boxed) - Dropbox-basierte Blog-Engine.
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar ist eine plattformübergreifende, in Go entwickelte Postman-Alternative, die Entwicklern beim Testen ihrer API-Endpunkte helfen soll. Sie unterstützt die Protokolle HTTP und gRPC.
- [Cherry](https://github.com/rafael-santiago/cherry) - Winziger Webchat-Server in Go.
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - Selbst gehostete öffentliche Strahlungskarte zum Importieren, Analysieren und Visualisieren von Messspuren.
- [Circuit](https://github.com/gocircuit/circuit) - Circuit ist eine programmierbare Platform-as-a-Service (PaaS) und/oder Infrastructure-as-a-Service (IaaS) zur Verwaltung, Erkennung, Synchronisierung und Orchestrierung von Diensten und Hosts, aus denen Cloud-Anwendungen bestehen.
- [claude-grep](https://github.com/evoleinik/claude-grep) - Durchsucht den Sitzungsverlauf von Claude Code mit Regex und semantischer (Vektor-)Suche.
- [Comcast](https://github.com/tylertreat/Comcast) - Schlechte Netzwerkverbindungen simulieren.
- [confd](https://github.com/kelseyhightower/confd) - Lokale Konfigurationsdateien von Anwendungen mithilfe von Vorlagen und Daten aus etcd oder consul verwalten.
- [crawley](https://github.com/s0rg/crawley) - Web-Scraper/-Crawler für die CLI.
- [croc](https://github.com/schollz/croc) - Dateien oder Ordner einfach und sicher von einem Computer an einen anderen senden.
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - Ein leichtgewichtiges Werkzeug zur Bereinigung von Software-Caches für Windows und Linux.
- [dispositio](https://github.com/tsraveling/dispositio) - Terminalwerkzeug zur Planung großer Projekte in einfachem Markdown.
- [Documize](https://github.com/documize/community) - Moderne Wiki-Software, die Daten aus SaaS-Werkzeugen integriert.
- [dp](https://github.com/scryinfo/dp) - Über das SDK für den Datenaustausch mit der Blockchain erhalten Entwickler einfachen Zugang zur DAPP-Entwicklung.
- [drive](https://github.com/odeke-em/drive) - Google-Drive-Client für die Kommandozeile.
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - Ein plattformübergreifendes Werkzeug für Netzwerk- und Cloud-Backups, basierend auf der Idee der lockfreien Deduplizierung.
- [fjira](https://github.com/mk-5/fjira) - Eine Terminal-UI-Anwendung mit Fuzzy-Suche für Atlassian Jira
- [Gebug](https://github.com/moshebe/gebug) - Ein Werkzeug, das das Debugging von Go-Anwendungen in Docker mit nahtlosen Debugger- und Hot-Reload-Funktionen besonders einfach macht.
- [gfile](https://github.com/Antonito/gfile) - Dateien sicher zwischen zwei Computern übertragen, ohne Dritte, über WebRTC.
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - App, die Updates für die Go-Pakete in Ihrem GOPATH anzeigt.
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - Torrent-Client für Video-Streaming.
- [goblin](https://goblin.run) - Cloud-Builder für in Go geschriebene CLIs
- [GoBoy](https://github.com/Humpheh/goboy) - Emulator für den Nintendo Game Boy Color, geschrieben in Go.
- [gocc](https://github.com/goccmack/gocc) - Gocc ist ein in Go geschriebenes Compiler-Kit für Go.
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - Chrome-Erweiterung für Go-Doc-Seiten, die in der Funktionsliste die Funktionsbeschreibung als Tooltip anzeigt.
- [Gokapi](https://github.com/Forceu/gokapi) - Leichtgewichtiger Server zum Teilen von Dateien, die nach einer festgelegten Anzahl von Downloads oder Tagen ablaufen. Ähnlich wie Firefox Send, aber ohne öffentlichen Upload.
- [GoLand](https://jetbrains.com/go) - Voll ausgestattete, plattformübergreifende Go-IDE.
- [GoNB](https://github.com/janpfeifer/gonb) - Interaktive Go-Programmierung mit Jupyter Notebooks (funktioniert auch in VSCode, Binder und Googles Colab).
- [GooseForum](https://github.com/leancodebox/GooseForum) - Selbst gehostete Forenplattform, entwickelt mit Go, Vue und Tailwind CSS.
- [Gor](https://github.com/buger/gor) - Werkzeug zur Replikation von HTTP-Datenverkehr, um Datenverkehr aus der Produktion in Echtzeit in Staging-/Entwicklungsumgebungen wiederzugeben.
- [Guora](https://github.com/meloalright/guora) - Eine selbst gehostete, Quora-ähnliche Webanwendung, geschrieben in Go.
- [GURL](https://github.com/matveynator/gurl) - Wenn CURL meldet, dass Ihre SSL-Bibliothek zu alt ist – nutzen Sie GURL. Eine Datei. Keine SSL-Abhängigkeiten.
- [hoofli](https://github.com/dnnrly/hoofli) - PlantUML-Diagramme aus Netzwerkanalysen in Chrome oder Firefox generieren.
- [hotswap](https://github.com/edwingeng/hotswap) - Eine Komplettlösung, um Ihren Go-Code neu zu laden, ohne den Server neu zu starten oder laufende Vorgänge zu unterbrechen bzw. zu blockieren.
- [hugo](https://gohugo.io/) - Schnelle und moderne Engine für statische Websites.
- [ide](https://github.com/thestrukture/ide) - Im Browser zugängliche IDE. Für Go entwickelt, mit Go.
- [joincap](https://github.com/assafmo/joincap) - Kommandozeilenwerkzeug zum Zusammenführen mehrerer pcap-Dateien.
- [JuiceFS](https://github.com/juicedata/juicefs) - Verteiltes POSIX-Dateisystem auf Basis von Redis und AWS S3.
- [Juju](https://jujucharms.com/) - Cloud-unabhängige Bereitstellung und Orchestrierung von Diensten – unterstützt EC2, Azure, Openstack, MAAS und mehr.
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - Bedarfsgesteuertes Peer-to-Peer-Dateisystem, das einen entfernten Ordner einbindet und Verbindungslatenz durch Read-ahead verbirgt, Ende-zu-Ende-verschlüsselt mit hybridem X25519 und ML-KEM-1024.
- [Layli](https://layli.app) - Schöne Layout-Diagramme als Code zeichnen.
- [Leaps](https://github.com/jeffail/leaps) - Pair-Programming-Dienst mit Operational Transforms.
- [lgo](https://github.com/yunabe/lgo) - Interaktive Go-Programmierung mit Jupyter. Unterstützt Codevervollständigung, Code-Inspektion und 100 % Go-Kompatibilität.
- [LightCMS](https://github.com/jonradoff/lightcms) - Selbst gehostetes Content-Management-System mit statischer Seitengenerierung, rollenbasierter Zugriffskontrolle und einem MCP-Server für agentengesteuerte Inhaltsoperationen.
- [limetext](https://limetext.github.io) - Lime Text ist ein leistungsstarker und eleganter Texteditor, der hauptsächlich in Go entwickelt wird und ein freier Open-Source-Nachfolger von Sublime Text sein soll.
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE ist eine einfache, quelloffene, plattformübergreifende Go-IDE.
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - TUI mit Vorschau zum Bereinigen von macOS-Caches, Logs und temporären Dateien.
- [mdv](https://github.com/Allra-Fintech/mdv) - CLI-Werkzeug, das Markdown-Dateien im Browser rendert – mit Live-Reload, GFM, Syntaxhervorhebung, Mermaid-Diagrammen und PDF-Export.
- [mockingjay](https://github.com/quii/mockingjay-server) - Fake-HTTP-Server und verbrauchergesteuerte Verträge aus einer einzigen Konfigurationsdatei. Sie können den Server auch zufällig fehlverhalten lassen, um realistischere Performance-Tests durchzuführen.
- [myLG](https://github.com/mehrdadrad/mylg) - Kommandozeilenwerkzeug zur Netzwerkdiagnose, geschrieben in Go.
- [naclpipe](https://github.com/unix4fun/naclpipe) - Einfaches Krypto-Pipe-Werkzeug auf Basis von NaCL EC25519, geschrieben in Go.
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay ist wiedergeboren. Für eine neue Ära.
- [nes](https://github.com/fogleman/nes) - Emulator für das Nintendo Entertainment System (NES), geschrieben in Go.
- [onWatch](https://github.com/onllm-dev/onWatch) - KI-API-Kontingente verschiedener Anbieter lokal überwachen, mit Verlaufsdaten, Warnungen und einem Web-Dashboard, um überraschende Drosselungen und Budgetüberschreitungen zu vermeiden.
- [Orbit](https://github.com/gulien/orbit) - Ein einfaches Werkzeug zum Ausführen von Befehlen und Generieren von Dateien aus Vorlagen.
- [peg](https://github.com/pointlander/peg) - Peg (Parsing Expression Grammar) ist eine Implementierung eines Packrat-Parsergenerators.
- [Plakar](https://github.com/PlakarKorp/plakar) - Eine verschlüsselte, deduplizierte, verifizierbare und skalierbare Backup-Engine ohne Herstellerbindung.
- [Plik](https://github.com/root-gg/plik) - Plik ist ein System für temporäre Datei-Uploads (ähnlich wie Wetransfer) in Go.
- [portal](https://github.com/SpatiumPortae/portal) - Portal ist ein schnelles und einfaches Kommandozeilen-Hilfsprogramm zur Dateiübertragung von einem beliebigen Computer zu einem anderen.
- [restic](https://github.com/restic/restic) - Backup-Programm mit Deduplizierung.
- [sake](https://github.com/alajmo/sake) - sake ist ein Befehls-Runner für lokale und entfernte Hosts.
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code, ein sehr schneller, präziser Codezähler mit Komplexitätsberechnungen und COCOMO-Schätzungen.
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - CLI für die Terminplanbewertung nach den 14 Punkten der DCMA für Excel/CSV-Exporte aus MS Project.
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - Schnelles, einfaches und skalierbares verteiltes Dateisystem mit O(1)-Festplattenzugriff.
- [shell2http](https://github.com/msoap/shell2http) - Ausführen von Shell-Befehlen über einen HTTP-Server (für Prototyping oder Fernsteuerung).
- [Snitch](https://github.com/lucasgomide/snitch) - Einfache Möglichkeit, Ihr Team und viele Werkzeuge zu benachrichtigen, wenn jemand eine Anwendung über Tsuru bereitgestellt hat.
- [sonic](https://github.com/go-sonic/sonic) - Sonic ist eine Blogging-Plattform in Go. Einfach und leistungsstark.
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Desktop-Bildschirmschoner für Spotify mit digitaler OLED-Uhr, Canvas-Audiovisualisierung und MPRIS-Steuerung.
- [Stack Up](https://github.com/pressly/sup) - Stack Up, ein supereinfaches Deployment-Werkzeug – nur Unix –, stellen Sie es sich wie 'make' für ein Netzwerk von Servern vor.
- [stew](https://github.com/marwanhawari/stew) - Ein unabhängiger Paketmanager für kompilierte Binärdateien.
- [syncthing](https://syncthing.net/) - Offenes, dezentrales Werkzeug und Protokoll zur Dateisynchronisierung.
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - TCP-Observability auf Basis von eBPF.
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - Kleine Terminal-App, die Git-Commits der letzten 24 Stunden und der letzten Woche, das aktuelle Wetter, einige Selbstfürsorge-Tipps, einen Witz und Ihre aktuellen Aufgaben aus der To-do-Liste anzeigt.
- [tldx](https://github.com/brandonyoungdev/tldx) - Massenprüfung der Verfügbarkeit von Domains mit RDAP, DNS und WHOIS als Fallback sowie Generierung von Schlüsselwort-Permutationen.
- [toxiproxy](https://github.com/shopify/toxiproxy) - Proxy zur Simulation von Netzwerk- und Systembedingungen für automatisierte Tests.
- [tsuru](https://tsuru.io/) - Erweiterbare Open-Source-Software für Platform as a Service.
- [untis-go](https://github.com/benzjeremy/untis-go) - Schneller, nativer WebUntis-Desktop-Client für Schüler und Lehrkräfte. Navigation in der Seitenleiste, Stundenpläne, Hausaufgaben, Abwesenheiten und Nachrichten. Mit AES-256-GCM verschlüsselte Zugangsdaten, SQLite-Cache-first, Sicherheit durch zufällige Ports.
- [vaku](https://github.com/lingrino/vaku) - CLI und API für ordnerbasierte Funktionen in Vault wie Kopieren, Verschieben und Suchen.
- [vFlow](https://github.com/VerizonDigital/vflow) - Hochperformanter, skalierbarer und zuverlässiger Collector für IPFIX, sFlow und Netflow.
- [Wave Terminal](https://waveterm.dev) - Wave ist ein quelloffenes, KI-natives Terminal für nahtlose Entwickler-Workflows mit Inline-Rendering, moderner UI und persistenten Sitzungen.
- [wellington](https://github.com/wellington/wellington) - Werkzeug zur Verwaltung von Sass-Projekten, erweitert die Sprache um Sprite-Funktionen (wie Compass).
- [woke](https://github.com/get-woke/woke) - Nicht inklusive Sprache in Ihrem Quellcode erkennen.
- [yai](https://github.com/ekkinox/yai) - KI-gestützter Terminal-Assistent.
- [zs](https://git.mills.io/prologic/zs) - Ein extrem minimaler Generator für statische Websites.

**[⬆ Zurück nach oben](#contents)**

# Ressourcen

_Wo man neue Go-Bibliotheken entdecken kann._

**[⬆ Zurück nach oben](#contents)**

## Benchmarks

- [autobench](https://github.com/davecheney/autobench) - Framework zum Vergleich der Performance zwischen verschiedenen Go-Versionen.
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - Leistungsstarkes HTTP-Benchmark-Werkzeug, kombiniert mit den Werkzeugen Аb, Wrk und Siege. Sammelt Statistiken und verschiedene Parameter für Benchmarks und Vergleichsergebnisse.
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - Einige verschiedene Go-Microbenchmarks. Vergleicht einige Sprachfunktionen mit alternativen Ansätzen.
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Benchmark und Vergleich von Go-HTTP-Request-Routern.
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Go-JSON-Benchmark.
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Benchmarks für Inferenz im maschinellen Lernen in Go.
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Benchmark für Go-Web-Frameworks.
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Benchmarks von Serialisierungsmethoden in Go.
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Benchmarks gängiger Grundoperationen der Sprache Go.
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - Eine Sammlung von Golang-Benchmarks.
- [gospeed](https://github.com/feyeleanor/GoSpeed) - Go-Microbenchmarks zur Berechnung der Geschwindigkeit von Sprachkonstrukten.
- [kvbench](https://github.com/jimrobinson/kvbench) - Benchmark für Key/Value-Datenbanken.
- [skynet](https://github.com/atemerev/skynet) - Skynet-Microbenchmark mit 1 Mio. Threads.
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Vergleich verschiedener Algorithmen zur Größenänderung von Bildern für die Sprache Go.
- [vizb](https://github.com/goptics/vizb) - Ein CLI-Werkzeug zur Visualisierung von Go-Benchmark-Daten in 4D.

**[⬆ Zurück nach oben](#contents)**

## Konferenzen

- [GoCon](https://gocon.connpass.com/) - Tokio, Japan.
- [GoDays](https://www.godays.io/) - Berlin, Deutschland.
- [GoLab](https://golab.io/) - Florenz, Italien.
- [GopherCon](https://www.gophercon.com/) - Jedes Jahr an wechselnden Orten, USA.
- [GopherCon Africa](https://gophercon.africa/) - Nairobi, Kenia.
- [GopherCon Australia](https://gophercon.com.au/) - Sydney, Australien.
- [GopherCon Brazil](https://gopherconbr.org) - Florianópolis, Brasilien.
- [GopherCon China](https://gophercon.com.cn) - Shanghai, China.
- [GopherCon Europe](https://gophercon.eu/) - Berlin, Deutschland.
- [GopherCon India](https://gopherconindia.org/) - Pune, Indien.
- [GopherCon Israel](https://www.gophercon.org.il/) - Tel Aviv, Israel.
- [GopherCon Russia](https://www.gophercon-russia.ru) - Moskau, Russland.
- [GopherCon Singapore](https://gophercon.sg) - Mapletree Business City, Singapur.
- [GopherCon UK](https://www.gophercon.co.uk/) - London, Vereinigtes Königreich.
- [GopherCon Vietnam](https://gophercon.vn/) - Ho-Chi-Minh-Stadt, Vietnam.
- [GoWest Conference](https://www.gowestconf.com/) - Lehi, USA.

**[⬆ Zurück nach oben](#contents)**

## E-Books

### E-Books zum Kaufen

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - Go-Programmierung für Hacker und Pentester.
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - Dieser praktische Leitfaden zu Continuous Delivery zeigt Ihnen, wie Sie schnell eine automatisierte Pipeline aufbauen, die Ihre Tests, Ihre Codequalität und Ihr Endprodukt verbessert.
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - Eine Einführung in den TinyGo-Compiler mit Projekten rund um Arduino und WebAssembly.
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Entdecken Sie die einzigartige Perspektive von Go auf Programmdesign und schreiben Sie einfachen, wartbaren und testbaren Go-Code.
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Ein Einführungsbuch für Go-Einsteiger.
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Ihr praktischer Leitfaden zu allen Feinheiten der Go-Entwicklung, der die Standardbibliothek und die wichtigsten Werkzeuge aus dem leistungsstarken Ökosystem von Go abdeckt.
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Ein Leitfaden zum Verstehen und Verwenden von Generics in Go.
- [Lets-Go](https://lets-go.alexedwards.net) - Eine Schritt-für-Schritt-Anleitung zum Erstellen schneller, sicherer und wartbarer Webanwendungen mit Go.
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - Fortgeschrittene Muster zum Erstellen von APIs und Webanwendungen in Go.
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Ein Leitfaden zum Testen in Go.
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Ein Leitfaden zum Schreiben von Kommandozeilenwerkzeugen in Go.
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - Buch, das Dutzende Techniken zum Schreiben von idiomatischem, ausdrucksstarkem und effizientem Go-Code vorstellt, der häufige Fallstricke vermeidet.

### Kostenlose E-Books

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - Der grundlegende und praktische Leitfaden, um effektiv zu lernen und schrittweise eine Blockchain von Grund auf in Go mit gRPC zu bauen.
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Ein Buch, das sich auf die Syntax/Semantik von Go und allerlei Details konzentriert.
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Ein Buch über die Go-Pakete `go/*`.
- [Go Faster](https://leanpub.com/gofaster) - Dieses Buch möchte Ihre Lernkurve verkürzen und Ihnen helfen, schneller ein versierter Go-Programmierer zu werden.
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - Auf Persisch.
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - Ein Buch, das zeigt, wie man DDD, Clean Architecture und CQRS durch praktisches Refactoring anwendet.
- [GoBooks](https://github.com/dariubs/GoBooks) - Eine kuratierte Liste von Go-Büchern.
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - Eine 600-seitige Einführung in Go für Programmieranfänger.
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ Zurück nach oben](#contents)**

## Gophers

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Gopher-Grafikpaket von Maria Letta mit Illustrationen und emotionalen Figuren als Vektor- und Rastergrafiken.
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Vektordaten des Go-Gophers [.ai, .svg].
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - Bezaubernde Gopher-Logos.
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - Machen Sie einen Gopher aus sich.
- [gophers](https://github.com/ashleymcnamara/gophers) - Gopher-Kunstwerke von Ashley McNamara.
- [gophers](https://github.com/egonelbre/gophers) - Kostenlose Gophers.
- [gophers](https://github.com/rogeralsing/gophers) - Zufällige Gopher-Grafiken.
- [gophers](https://github.com/sillecelik/go-gopher) - Häkelanleitung für einen Gopher als Amigurumi-Spielzeug.
- [gophers](https://github.com/scraly/gophers) - Gophers von Aurélie Vache.

**[⬆ Zurück nach oben](#contents)**

## Treffen

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

_Fügen Sie hier die Gruppe Ihrer Stadt bzw. Ihres Landes hinzu (senden Sie einen **PR**)_

**[⬆ Zurück nach oben](#contents)**

## Styleguides

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ Zurück nach oben](#contents)**

## Soziale Medien

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ Zurück nach oben](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ Zurück nach oben](#contents)**

## Webseiten

- [Awesome Go @LibHunt](https://go.libhunt.com) - Ihre erste Anlaufstelle: die Go-Toolbox.
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - Eine kuratierte Liste großartiger Golang-Workshops.
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - Kuratierte Liste großartiger Remote-Jobs. Viele davon suchen Go-Hacker.
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - Liste anderer erstaunlich großartiger Listen.
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - Parst die README-Datei von awesome-go und erzeugt eine neue README-Datei mit Repository-Informationen.
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - Softwareentwickler und Blogs @ codewithmukesh.com.
- [Coding Mystery](https://codingmystery.com) - Lösen Sie spannende, von Escape Rooms inspirierte Programmieraufgaben mit Go.
- [CodinGame](https://www.codingame.com/) - Lernen Sie Go durch das Lösen interaktiver Aufgaben anhand kleiner Spiele als praktische Beispiele.
- [Go Blog](https://blog.golang.org) - Der offizielle Go-Blog.
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - Eine Gruppe von Gophers liest und diskutiert jede Woche ein anderes Go-Projekt.
- [Go Community on Hashnode](https://hashnode.com/n/go) - Community von Gophers auf Hashnode.
- [Go Forum](https://forum.golangbridge.org) - Forum zur Diskussion über Go.
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Liste von Projekten im Wiki der Go-Community.
- [Go Proverbs](https://go-proverbs.github.io/) - Go-Sprichwörter von Rob Pike.
- [Go Report Card](https://goreportcard.com) - Ein Zeugnis für Ihr Go-Paket.
- [go.dev](https://go.dev/) - Eine Anlaufstelle für Go-Entwickler.
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - Sammlung von Go-Projekten, die Hilfe benötigen. Ein guter Ort, um Ihren Open-Source-Weg mit Go zu beginnen.
- [Golang Developer Jobs](https://golangjob.xyz) - Entwickler-Jobs ausschließlich für Golang-bezogene Rollen.
- [Golang News](https://golangnews.com) - Links und Neuigkeiten rund um die Go-Programmierung.
- [Golang Nugget](https://golangnugget.com) - Ein wöchentlicher Überblick über die besten Go-Inhalte, jeden Montag in Ihrem Posteingang.
- [Golang Weekly](https://discu.eu/weekly/golang/) - Jeden Montag Projekte, Tutorials und Artikel über Go.
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Go-Mailingliste.
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - Treten Sie unserer neuen Slack-Community für Gophers bei ([Erfahren Sie, wie sie entstanden ist](https://blog.gopheracademy.com/gophers-slack-community/)).
- [Gophercises](https://gophercises.com/) - Kostenlose Programmierübungen für angehende Gophers.
- [json2go](https://m-zajac.github.io/json2go) - Fortgeschrittene Konvertierung von JSON in Go-Structs – Online-Werkzeug.
- [justforfunc](https://www.youtube.com/c/justforfunc) - YouTube-Kanal mit Tipps und Tricks zur Programmiersprache Go, moderiert von Francesc Campoy [@francesc](https://twitter.com/francesc).
- [Learn Go Programming](https://blog.learngoprogramming.com) - Go-Konzepte mit Illustrationen lernen.
- [Libs.tech](https://libs.tech/go) – Großartige Go-Bibliotheken und verborgene Schätze
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - Dokumentation für Open-Source-Go-Pakete.
- [studygolang](https://studygolang.com) - Die studygolang-Community in China.
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - Ein guter Ort, um neue Go-Bibliotheken zu finden.
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ Zurück nach oben](#contents)**

### Anleitungen

- [50 Shades of Go](https://golang50shades.github.io/) - Fallen, Stolpersteine und häufige Fehler für neue Golang-Entwickler.
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - Tauchen Sie tief in die Welt des strukturierten Loggings in Go ein, mit besonderem Fokus auf den kürzlich angenommenen slog-Vorschlag, der hochperformantes strukturiertes Logging mit Levels in die Standardbibliothek bringen soll.
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - Erstellen einer Golang-Website für E-Commerce (inklusive Demo).
- [A Tour of Go](https://tour.golang.org/) - Interaktive Tour durch Go.
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - Eine NoSQL-Datenbank von Grund auf in 1000 Codezeilen bauen.
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Golang-E-Book als Einführung, wie man mit Golang eine Web-App erstellt.
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - Wir schreiben eine API mithilfe des leistungsstarken Gorilla Mux.
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Lernen Sie Gin kennen und finden Sie heraus, wie es Ihnen helfen kann, Boilerplate-Code zu reduzieren und eine Pipeline zur Verarbeitung von Anfragen aufzubauen.
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - Wie man langsame Datenbankabfragen zwischenspeichert.
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - Wie man MySQL-Abfragen abbricht.
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - Meistern Sie fortgeschrittenes Go, indem Sie Ihr eigenes Redis, Docker, Git und SQLite bauen. Mit Goroutinen, Systemprogrammierung, Datei-I/O und mehr.
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Sammlung von Entwurfsmustern der Programmierung, implementiert in Go.
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - Eine Videoserie, die Programmierung und Spieleentwicklung vermittelt.
- [Go By Example](https://gobyexample.com/) - Praxisnahe Einführung in Go anhand kommentierter Beispielprogramme.
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Die Referenzkarte für Go.
- [Go database/sql tutorial](http://go-database-sql.org/) - Einführung in database/sql.
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - Lernen Sie alles über Go in 7 Tagen (von einem Node.js-Entwickler).
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Tutorial zum Erlernen der Sprache Go.
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Go-Programmierung lernen.
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Vorlage für Clean Architecture für Golang-Dienste.
- [go-patterns](https://github.com/tmrts/go-patterns) - Kuratierte Liste von Entwurfsmustern, Rezepten und Idiomen für Go.
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - Beispiele für Golang im Vergleich zu Node.js zum Lernen.
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Eine Liste kostenloser Kurse zum Erlernen der Programmiersprache Go.
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - Viele Beispiele zum Erlernen von Golang.
- [Golangbot](https://golangbot.com/learn-golang-series/) - Tutorials für den Einstieg in die Programmierung mit Go.
- [GopherCoding](https://gophercoding.com/) - Sammlung von Code-Snippets und Tutorials zur Lösung alltäglicher Probleme.
- [GopherSnippets](https://gophersnippets.com/) - Code-Snippets mit Tests und testbaren Beispielen für die Programmiersprache Go.
- [Gosamples](https://gosamples.dev/) - Sammlung von Code-Snippets, mit denen Sie alltägliche Programmierprobleme lösen können.
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - Lernen Sie, wie Sie mit Codegenerierung einen GraphQL-Server und -Client in Go erstellen. Behandelt auch das Erstellen von REST-Endpunkten.
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - Lernen Sie Go mit den besten Online-Tutorials für Golang, eingereicht und bewertet von der Golang-Community.
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - Leitfaden für den Einstieg in das Schreiben wartbaren Codes mit hexagonaler Architektur.
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Lernen Sie, wie man in Go Benchmarks durchführt. Als Fallstudie benchmarken wir dbq, sqlx und GORM.
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Lernen Sie, wie Sie Docker für die Go-Entwicklung verwenden und Docker-Images für die Produktion bauen.
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - Ein Leitfaden zur Implementierung rollenbasierter Zugriffskontrolle (RBAC) in Golang, einschließlich Codebeispielen, der verschiedene Methoden zur Absicherung von App-Endpunkten mit rollenbasierter Autorisierung behandelt.
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Erste Schritte mit Godog – einem Framework für Behavior-driven Development zum Erstellen und Testen von Go-Anwendungen.
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - Lernen Sie Go mit Tausenden von Beispielen, Übungen und Quizfragen.
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - Lernen Sie Go mit testgetriebener Entwicklung.
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - Artikelserie zum Erlernen der Sprache Golang anhand konkreter Anwendungen als Beispiel.
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - Tauchen Sie tief in die Entwicklung von Microservices mit Go ein, einschließlich gRPC.
- [package main](https://www.youtube.com/packagemain) - YouTube-Kanal über das Programmieren in Go.
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - Coursera-Spezialisierung, um Go von Grund auf zu lernen.
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - Alles über das Erstellen, Bereitstellen und Skalieren von Go-Anwendungen in der Produktion.
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - Go auf visuelle Weise lernen
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic bietet ein ausführliches Tutorial und gut strukturierte Inhalte zum Erlernen der Golang-Programmierung.
- [Your basic Go](https://yourbasic.org/golang) - Riesige Sammlung von Tutorials und Anleitungen.

**[⬆ Zurück nach oben](#contents)**

### Geführtes Lernen

- [The Go Developer Roadmap](https://roadmap.sh/golang) - Eine visuelle Roadmap, der neue Go-Entwickler folgen können, um Go zu lernen.
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Ein GitHub-Repository mit Programmieraufgaben zur Vorbereitung auf technische Go-Interviews.
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - Ein geführter Lernpfad mit einer Mischung aus kostenlosen und Premium-Ressourcen.
- [The Go Skill Tree](https://labex.io/skilltrees/go) - Ein strukturierter Lernpfad, der kostenlose und Premium-Ressourcen kombiniert.

**[⬆ Zurück nach oben](#contents)**

## Mitwirken

Wir freuen uns über Beiträge! Bitte lesen Sie unsere [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md) für die Richtlinien.

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](https://github.com/avelino/awesome-go/blob/main/LICENSE) lizenziert – Details finden Sie in der Datei LICENSE.
