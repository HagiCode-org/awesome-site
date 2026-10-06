# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

Usamos o Slack da comunidade _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ para comunicação instantânea; para participar, preencha o [formulário aqui](https://invite.slack.golangbridge.org/).

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**Patrocínios:**

_Agradecimentos especiais a_

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

**O Awesome Go não cobra mensalidade**_, mas temos colaboradores que **trabalham duro** para mantê-lo funcionando. Com o dinheiro arrecadado, podemos recompensar o esforço de cada pessoa envolvida! Você pode ver como calculamos nosso faturamento e a distribuição, pois isso é aberto a toda a comunidade. Quer apoiar o projeto? Clique [aqui](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)._

> Uma lista com curadoria de frameworks, bibliotecas e softwares incríveis em Go. Inspirada na [awesome-python](https://github.com/vinta/awesome-python).

**Como contribuir:**

Antes de tudo, dê uma olhada rápida nas [diretrizes de contribuição](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md). Obrigado a todos os [colaboradores](https://github.com/avelino/awesome-go/graphs/contributors); vocês são demais!

> _Se você encontrar aqui um pacote ou projeto que não é mais mantido ou que não se encaixa bem, envie um pull request para melhorar este arquivo. Obrigado!_

## Conteúdo

<details>
<summary>Expandir conteúdo</summary>

- [Awesome Go](#awesome-go)
  - [Conteúdo](#contents)
  - [Modelo de atores](#actor-model)
  - [Inteligência artificial](#artificial-intelligence)
  - [Áudio e música](#audio-and-music)
  - [Autenticação e autorização](#authentication-and-authorization)
  - [Blockchain](#blockchain)
  - [Criação de bots](#bot-building)
  - [Automação de build](#build-automation)
  - [Linha de comando](#command-line)
    - [Interfaces de console avançadas](#advanced-console-uis)
    - [CLI padrão](#standard-cli)
  - [Configuração](#configuration)
  - [Integração contínua](#continuous-integration)
  - [Pré-processadores de CSS](#css-preprocessors)
  - [Frameworks de integração de dados](#data-integration-frameworks)
  - [Estruturas de dados e algoritmos](#data-structures-and-algorithms)
    - [Empacotamento de bits e compressão](#bit-packing-and-compression)
    - [Conjuntos de bits](#bit-sets)
    - [Filtros de Bloom e Cuckoo](#bloom-and-cuckoo-filters)
    - [Coleções de estruturas de dados e algoritmos](#data-structure-and-algorithm-collections)
    - [Iteradores](#iterators)
    - [Mapas](#maps)
    - [Estruturas de dados e algoritmos diversos](#miscellaneous-data-structures-and-algorithms)
    - [Tipos anuláveis](#nullable-types)
    - [Filas](#queues)
    - [Conjuntos](#sets)
    - [Análise de texto](#text-analysis)
    - [Árvores](#trees)
    - [Pipes](#pipes)
  - [Banco de dados](#database)
    - [Caches](#caches)
    - [Bancos de dados implementados em Go](#databases-implemented-in-go)
    - [Migração de esquemas de banco de dados](#database-schema-migration)
    - [Ferramentas de banco de dados](#database-tools)
    - [Construtores de consultas SQL](#sql-query-builders)
  - [Drivers de banco de dados](#database-drivers)
    - [Interfaces para múltiplos backends](#interfaces-to-multiple-backends)
    - [Drivers de bancos de dados relacionais](#relational-database-drivers)
    - [Drivers de bancos de dados NoSQL](#nosql-database-drivers)
    - [Bancos de dados de busca e análise](#search-and-analytic-databases)
  - [Data e hora](#date-and-time)
  - [Sistemas distribuídos](#distributed-systems)
  - [DNS dinâmico](#dynamic-dns)
  - [E-mail](#email)
  - [Linguagens de script embutíveis](#embeddable-scripting-languages)
  - [Tratamento de erros](#error-handling)
  - [Manipulação de arquivos](#file-handling)
  - [Finanças](#financial)
  - [Formulários](#forms)
  - [Programação funcional](#functional)
  - [Desenvolvimento de jogos](#game-development)
  - [Geradores](#generators)
  - [Geográfico](#geographic)
  - [Compiladores Go](#go-compilers)
  - [Goroutines](#goroutines)
  - [GUI](#gui)
  - [Hardware](#hardware)
  - [Imagens](#images)
  - [IoT (Internet das Coisas)](#iot-internet-of-things)
  - [Agendador de tarefas](#job-scheduler)
  - [JSON](#json)
  - [Logging](#logging)
  - [Aprendizado de máquina](#machine-learning)
  - [Mensageria](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [Diversos](#miscellaneous)
    - [Injeção de dependências](#dependency-injection)
    - [Estrutura de projetos](#project-layout)
    - [Strings](#strings)
    - [Sem categoria](#uncategorized)
  - [Processamento de linguagem natural](#natural-language-processing)
    - [Detecção de idioma](#language-detection)
    - [Analisadores morfológicos](#morphological-analyzers)
    - [Geradores de slugs](#slugifiers)
    - [Tokenizadores](#tokenizers)
    - [Tradução](#translation)
    - [Transliteração](#transliteration)
  - [Redes](#networking)
    - [Clientes HTTP](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [Gerenciamento de pacotes](#package-management)
  - [Desempenho](#performance)
  - [Linguagem de consulta](#query-language)
  - [Reflexão](#reflection)
  - [Incorporação de recursos](#resource-embedding)
  - [Ciência e análise de dados](#science-and-data-analysis)
  - [Segurança](#security)
  - [Serialização](#serialization)
  - [Aplicações de servidor](#server-applications)
  - [Processamento de streams](#stream-processing)
  - [Motores de template](#template-engines)
  - [Testes](#testing)
    - [Frameworks de teste](#testing-frameworks)
    - [Mock](#mock)
    - [Fuzzing e delta-debugging/redução/minimização](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium e ferramentas de controle de navegador](#selenium-and-browser-control-tools)
    - [Injeção de falhas](#fail-injection)
  - [Processamento de texto](#text-processing)
    - [Formatadores](#formatters)
    - [Linguagens de marcação](#markup-languages)
    - [Parsers/codificadores/decodificadores](#parsersencodersdecoders)
    - [Expressões regulares](#regular-expressions)
    - [Sanitização](#sanitation)
    - [Scrapers](#scrapers)
    - [RSS](#rss)
    - [Utilitários/diversos](#utilitymiscellaneous)
  - [APIs de terceiros](#third-party-apis)
  - [Utilitários](#utilities)
  - [UUID](#uuid)
  - [Validação](#validation)
  - [Controle de versão](#version-control)
  - [Vídeo](#video)
  - [Frameworks web](#web-frameworks)
    - [Middlewares](#middlewares)
      - [Middlewares propriamente ditos](#actual-middlewares)
      - [Bibliotecas para criar middlewares HTTP](#libraries-for-creating-http-middlewares)
    - [Roteadores](#routers)
  - [WebAssembly](#webassembly)
  - [Servidores de webhooks](#webhooks-server)
  - [Windows](#windows)
  - [Frameworks de workflow](#workflow-frameworks)
  - [XML](#xml)
  - [Zero Trust](#zero-trust)
  - [Análise de código](#code-analysis)
  - [Plugins para editores](#editor-plugins)
  - [Ferramentas para go generate](#go-generate-tools)
  - [Ferramentas Go](#go-tools)
  - [Pacotes de software](#software-packages)
    - [Ferramentas de DevOps](#devops-tools)
    - [Outros softwares](#other-software)
- [Recursos](#resources)
  - [Benchmarks](#benchmarks)
  - [Conferências](#conferences)
  - [E-books](#e-books)
    - [E-books pagos](#e-books-for-purchase)
    - [E-books gratuitos](#free-e-books)
  - [Gophers](#gophers)
  - [Meetups](#meetups)
  - [Guias de estilo](#style-guides)
  - [Redes sociais](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Sites](#websites)
    - [Tutoriais](#tutorials)
    - [Aprendizado guiado](#guided-learning)
  - [Contribuição](#contribution)
  - [Licença](#license)

**[⬆ voltar ao topo](#contents)**



</details>

## Modelo de atores

_Bibliotecas para criar programas baseados em atores._

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - Biblioteca de fluxo de controle baseada em grafos (AOP, atores, máquina de estados).
- [Ergo](https://github.com/ergo-services/ergo) - Framework baseado em atores com transparência de rede para criar arquiteturas orientadas a eventos em Golang. Inspirado em Erlang.
- [Goakt](https://github.com/Tochemey/goakt) - Framework de atores rápido e distribuído para Golang que usa protocol buffers como mensagens.
- [Hollywood](https://github.com/anthdm/hollywood) - Engine de atores extremamente rápida e leve escrita em Golang.
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Atores distribuídos para Go, C# e Java/Kotlin.

**[⬆ voltar ao topo](#contents)**

## Inteligência artificial

_Bibliotecas para criar programas que aproveitam IA._

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - Gateway de IA para rotear, proteger e monitorar o tráfego de LLMs entre mais de 10 provedores. API compatível com a OpenAI, plugins de políticas em WASM, rollouts canary e dashboard em tempo real.
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - Runtime de execução de agentes de IA com event sourcing, recuperação por checkpoints e garantia de execução At-Most-Once. Escrito em Go.
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Framework para criar agentes de IA com estado em Go.
- [agy-mcp](https://github.com/tphakala/agy-mcp) - Servidor Model Context Protocol (MCP) que encapsula a CLI do Antigravity para executar prompts e revisões por pares.
- [ai](https://github.com/joakimcarlsson/ai) - Kit de ferramentas Go para criar agentes e aplicações de IA com vários provedores, com integração unificada de LLM, embeddings, chamada de ferramentas e MCP.
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - Gateway de LLM compatível com a OpenAI que roteia requisições entre 30 provedores, com fallback, limitação de taxa, orçamentos, guardrails e observabilidade.
- [chromem-go](https://github.com/philippgille/chromem-go) - Banco de dados vetorial embutível para Go, com interface semelhante à do Chroma e zero dependências de terceiros. Em memória, com persistência opcional.
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Biblioteca Go para controlar a interface de prompt não interativa da CLI do Claude Code a partir de programas Go.
- [crewai-go](https://github.com/rhgs/crewai-go) - Port idiomático em Go do CrewAI (orquestração multiagente). Zero dependências, apenas a stdlib.
- [Cynative](https://github.com/cynative/cynative) - Framework para criar agentes de IA de engenharia de segurança em Go. Somente leitura por construção, sandbox integrado e 45 blueprints de agentes para pesquisa aprofundada em AWS, GCP, Azure, K8s, GitHub e GitLab.
- [dakera-go](https://github.com/dakera-ai/dakera-go) - SDK cliente oficial em Go para o servidor auto-hospedado de memória de agentes Dakera, com interfaces tipadas para armazenamento/recuperação de memória, gerenciamento de sessões, operações de namespace e configuração de decaimento.
- [fun](https://gitlab.com/tozd/go/fun) - A forma mais simples, porém poderosa, de usar grandes modelos de linguagem (LLMs) em Go.
- [goai](https://github.com/zendev-sh/goai) - SDK Go para criar aplicações de IA. Um SDK, mais de 20 provedores. Inspirado no Vercel AI SDK.
- [GoModel](https://github.com/ENTERPILOT/GoModel) - Gateway de IA que expõe uma API unificada compatível com a OpenAI para OpenAI, Anthropic, Gemini, Groq, xAI, Ollama e outros provedores, com roteamento, rastreamento de uso, limites de taxa e guardrails.
- [hotplex](https://github.com/hrygo/hotplex) - Engine de runtime de agentes de IA com sessões de longa duração para Claude Code, OpenCode, pi-mono e outras ferramentas de IA de CLI. Oferece streaming full-duplex, integrações multiplataforma e sandbox seguro.
- [jargo](https://github.com/gojargo/jargo) - Framework para criar agentes de IA de voz em tempo real sobre WebRTC, conectando speech-to-text, LLMs e text-to-speech em um pipeline de streaming.
- [keen-code](https://github.com/mochow13/keen-code) - Agente de programação com IA baseado em terminal e eficiente no uso de contexto. Agnóstico de provedor, com suporte a MCPs, Agent Skills, subagentes e mais. Vem com uma TUI simples e direta.
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo é um framework para desenvolver aplicações movidas por modelos de linguagem.
- [langgraphgo](https://github.com/smallnest/langgraphgo) - Biblioteca Go para criar aplicações com estado e múltiplos atores usando LLMs, baseada no conceito do LangGraph, com muitas arquiteturas de agentes integradas.
- [llm-box](https://github.com/alib8b8/llm-box) - Engine de workflows de IA baseada em terminal, com pipelines definidos em YAML, mais de 20 provedores de LLM (DeepSeek, Qwen, GLM, Mistral etc.) e uma TUI para gerenciamento de workflows.
- [LocalAI](https://github.com/mudler/LocalAI) - Alternativa de código aberto à OpenAI; hospede você mesmo modelos de IA.
- [localaik](https://github.com/harshaneel/localaik) - Emulação local no estilo LocalStack das APIs da OpenAI e do Gemini; um único contêiner Docker, backend llama.cpp + Gemma 3.
- [mcp-go](https://github.com/mark3labs/mcp-go) - Implementação em Go do Model Context Protocol para criar servidores e clientes MCP em Go.
- [Ollama](https://github.com/jmorganca/ollama) - Execute grandes modelos de linguagem localmente.
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - Gerencie, balanceie a carga e faça failover de grupos de Ollamas.
- [otellix](https://github.com/oluwajubelo1/otellix) - Observabilidade de LLMs nativa em OpenTelemetry e guardrails de orçamento para ambientes de produção com custos restritos.
- [routex](https://github.com/Ad3bay0c/routex) - Runtime de IA multiagente para Go definido em YAML, com supervisão no estilo Erlang, suporte a servidores de ferramentas MCP e uma CLI.
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - Busca baseada em significado em PDF, Markdown, DOCX, código-fonte e outros tipos de arquivo, usando modelos de embedding de IA generativa para vetorizar arquivos em um banco de dados vetorial.
- [skillreaper](https://github.com/thousandflowers/skillreaper) - CLI que analisa transcrições de sessões de agentes de IA para identificar e colocar em quarentena com segurança skills, servidores MCP e agentes não utilizados no Claude Code, Codex CLI, Hermes, OpenCode, Cursor e OpenClaw.
- [Smeldr](https://github.com/Smeldr/core) - Backend de conteúdo nativo para IA com gerenciamento tipado de ciclo de vida, ferramentas MCP nativas para cada tipo de conteúdo e zero dependências em tempo de execução.
- [snip](https://github.com/edouard-claude/snip) - Proxy de CLI que reduz o uso de tokens de LLM em 60-90% com filtros YAML declarativos. Substituto direto para Claude Code, Cursor, Copilot e Gemini. Alternativa ao rtk em Go.
- [thermal](https://github.com/jadmadi/thermal) - Mapa de calor de contribuições, rastreador de sequências e ranking de tokens no terminal para assistentes de programação com IA.
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - Framework para criar sistemas multiagente baseados em LLMs.
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - Servidor MCP que oferece a assistentes de IA recursos de busca na web, extração de conteúdo e pesquisa em múltiplas fontes. Binário único, 5 provedores de busca com failover via circuit breaker e pipeline de scraping em 4 camadas.
- [zenflow](https://github.com/zendev-sh/zenflow) - Engine de orquestração multiagente e de workflows. Workflows declarativos em YAML, coordenador LLM com caixas de correio hub-and-spoke e entrega livre de condições de corrida. Um arquivo YAML, um binário Go. Funciona com qualquer provedor suportado pelo goai.

**[⬆ voltar ao topo](#contents)**

## Áudio e música

_Bibliotecas para manipular áudio e música._

- [beep](https://github.com/gopxl/beep) - Biblioteca simples para reprodução e manipulação de áudio.
- [flac](https://github.com/mewkiz/flac) - Codificador/decodificador FLAC nativo em Go com suporte a streams FLAC.
- [gaad](https://github.com/Comcast/gaad) - Parser de bitstream AAC nativo em Go.
- [go-aac](https://github.com/tphakala/go-aac) - Codificador e decodificador AAC-LC em Go puro, portado do FFmpeg.
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - Reamostrador de áudio de alta qualidade em Go puro, com aceleração SIMD.
- [go-flac](https://github.com/tphakala/go-flac) - Codificador e decodificador FLAC nativo em Go com aceleração SIMD.
- [go-mpris](https://github.com/leberKleber/go-mpris) - Cliente para as interfaces dbus do mpris.
- [go-opus](https://github.com/tphakala/go-opus) - Implementação nativa em Go do codec de áudio Opus (RFC 6716) com decodificador em conformidade com a RFC.
- [go-resample](https://github.com/gojargo/go-resample) - Conversor de taxa de amostragem de áudio em Go puro (sem cgo), com conversores sinc, linear e zero-order hold.
- [go-wav](https://github.com/tphakala/go-wav) - Leitor e gravador de WAV/RIFF em Go puro, com suporte a RF64 e BW64 para arquivos maiores que 4 GiB.
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - Biblioteca nativa em Go para processamento de áudio.
- [gocue](https://github.com/iSerganov/gocue) - CLI de análise de áudio que detecta pontos de cue-in, cue-out e sobreposição e mede a loudness EBU R128, emitindo JSON para o Liquidsoap.
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Bindings da libsamplerate para Go.
- [id3v2](https://github.com/bogem/id3v2) - Biblioteca de decodificação e codificação de ID3 para Go.
- [malgo](https://github.com/gen2brain/malgo) - Mini biblioteca de áudio.
- [minimp3](https://github.com/tosone/minimp3) - Biblioteca leve de decodificação de MP3.
- [music-theory](https://github.com/go-music-theory/music-theory) - Modelos de teoria musical em Go.
- [Oto](https://github.com/hajimehoshi/oto) - Biblioteca de baixo nível para reproduzir som em várias plataformas.
- [PortAudio](https://github.com/gordonklaus/portaudio) - Bindings Go para a biblioteca de E/S de áudio PortAudio.
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - Agentes de voz com IA configurados via JSON, com pipelines STT → LLM → TTS sobre WebSocket e WebRTC.

**[⬆ voltar ao topo](#contents)**

## Autenticação e autorização

_Bibliotecas para implementar autenticação e autorização._

- [authboss](https://github.com/volatiletech/authboss) - Sistema de autenticação modular para a web. Procura eliminar o máximo possível de boilerplate e de "coisas difíceis", para que, sempre que você iniciar um novo projeto web em Go, possa conectá-lo, configurá-lo e começar a construir seu app sem precisar criar um sistema de autenticação toda vez.
- [authgate](https://github.com/go-authgate/authgate) - Servidor de autorização OAuth 2.0 leve com suporte a Device Authorization Grant ([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)), Authorization Code Flow com PKCE ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)) e Client Credentials Grant para autenticação máquina a máquina.
- [branca](https://github.com/essentialkaos/branca) - [Implementação da especificação](https://github.com/tuupola/branca-spec) de tokens branca para Golang 1.15+.
- [casbin](https://github.com/hsluoyz/casbin) - Biblioteca de autorização com suporte a modelos de controle de acesso como ACL, RBAC e ABAC.
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - Fornece um parser para o formato de arquivo cookies.txt.
- [go-githubauth](https://github.com/jferrl/go-githubauth) - Utilitários para autenticação no GitHub: gere e use tokens de aplicativos e de instalação do GitHub.
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian é uma biblioteca golang que oferece uma forma simples, limpa e idiomática de criar autenticação moderna e poderosa para APIs e web, com suporte a autenticação LDAP, Basic, ****** e baseada em certificados.
- [go-iam](https://github.com/melvinodsa/go-iam) - Sistema de gerenciamento de identidade e acesso voltado para desenvolvedores, com uma interface simples.
- [go-jose](https://github.com/go-jose/go-jose) - Implementação bastante completa das especificações JSON Web Token, JSON Web Signatures e JSON Web Encryption do grupo de trabalho JOSE.
- [go-jwt](https://github.com/deatil/go-jwt) - Biblioteca JWT (JSON Web Token) para Go.
- [go-jwt](https://github.com/pardnchiu/go-jwt) - Pacote de autenticação JWT que fornece access tokens e refresh tokens com fingerprinting, armazenamento no Redis e renovação automática.
- [goiabada](https://github.com/leodip/goiabada) - Servidor de autenticação e autorização de código aberto com suporte a OAuth2 e OpenID Connect.
- [gologin](https://github.com/dghubble/gologin) - Handlers encadeáveis para login com provedores de autenticação OAuth1 e OAuth2.
- [gorbac](https://github.com/mikespook/gorbac) - Fornece uma implementação leve de controle de acesso baseado em papéis (RBAC) em Golang.
- [gosession](https://github.com/Kwynto/gosession) - Sessões rápidas para net/http em GoLang. Este pacote talvez seja a melhor implementação do mecanismo de sessão, ou pelo menos tenta se tornar uma.
- [goth](https://github.com/markbates/goth) - Oferece uma forma simples, limpa e idiomática de usar OAuth e OAuth2. Suporta vários provedores de imediato.
- [jeff](https://github.com/abraithwaite/jeff) - Gerenciamento de sessões web simples, flexível, seguro e idiomático, com backends plugáveis.
- [jwt](https://github.com/pascaldekloe/jwt) - Biblioteca leve de JSON Web Token (JWT).
- [jwt](https://github.com/cristalhq/jwt) - JSON Web Tokens seguros, simples e rápidos para Go.
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - Middleware JWT para servidores HTTP em Golang com muitas opções de configuração.
- [jwt-go](https://github.com/golang-jwt/jwt) - Implementação completa de JSON Web Tokens (JWT). Esta biblioteca oferece suporte à análise e à verificação, bem como à geração e à assinatura de JWTs.
- [jwx](https://github.com/lestrrat-go/jwx) - Módulo Go que implementa várias tecnologias JWx (JWA/JWE/JWK/JWS/JWT, também conhecidas como JOSE).
- [keto](https://github.com/ory/keto) - Implementação de código aberto (em Go) do "Zanzibar: Google's Consistent, Global Authorization System". Inclui APIs gRPC e REST, newSQL e uma linguagem de permissões fácil e granular. Suporta ACL, RBAC e outros modelos de acesso.
- [loginsrv](https://github.com/tarent/loginsrv) - Microsserviço de login JWT com backends plugáveis, como OAuth2 (Github), htpasswd e osiam.
- [melange](https://github.com/pthm/melange) - Compila esquemas de autorização do OpenFGA em funções PL/pgSQL que executam verificações de controle de acesso granular baseado em relacionamentos dentro do PostgreSQL.
- [oauth2](https://github.com/golang/oauth2) - Sucessor do goauth2. Pacote OAuth 2.0 genérico que inclui suporte a JWT, APIs do Google, Compute Engine e App Engine.
- [oidc](https://github.com/zitadel/oidc) - Biblioteca de cliente e servidor OpenID Connect fácil de usar, escrita para Go e certificada pela OpenID Foundation.
- [openfga](https://github.com/openfga/openfga) - Implementação de autorização granular baseada no artigo "Zanzibar: Google's Consistent, Global Authorization System". Apoiado pela [CNCF](https://www.cncf.io/).
- [osin](https://github.com/openshift/osin) - Biblioteca de servidor OAuth2 em Golang.
- [otpgen](https://github.com/grijul/otpgen) - Biblioteca para gerar códigos TOTP/HOTP.
- [otpgo](https://github.com/jltorresm/otpgo) - Biblioteca de senhas de uso único baseadas em tempo (TOTP) e em HMAC (HOTP) para Go.
- [paseto](https://github.com/o1egl/paseto) - Implementação em Golang dos Platform-Agnostic Security Tokens (PASETO).
- [permissions](https://github.com/xyproto/permissions) - Biblioteca para acompanhar usuários, estados de login e permissões. Usa cookies seguros e bcrypt.
- [scope](https://github.com/SonicRoshan/scope) - Gerencie facilmente escopos OAuth2 em Go.
- [scs](https://github.com/alexedwards/scs) - Gerenciador de sessões para servidores HTTP.
- [securecookie](https://github.com/chmike/securecookie) - Codificação/decodificação eficiente de cookies seguros.
- [session](https://github.com/icza/session) - Gerenciamento de sessões em Go para servidores web (incluindo suporte ao Google App Engine - GAE).
- [sessions](https://github.com/adam-hanna/sessions) - Serviço de sessões extremamente simples, de alto desempenho e altamente personalizável para servidores HTTP em Go.
- [sessionup](https://github.com/swithek/sessionup) - Pacote simples, porém eficaz, de gerenciamento e identificação de sessões HTTP.
- [sjwt](https://github.com/brianvoe/sjwt) - Gerador e parser simples de JWT.
- [spicedb](https://github.com/authzed/spicedb) - Banco de dados inspirado no Zanzibar que permite autorização granular.
- [x509proxy](https://github.com/vkuznet/x509proxy) - Biblioteca para lidar com certificados proxy X509.

**[⬆ voltar ao topo](#contents)**

## Blockchain

_Ferramentas para construir blockchains._

- [cometbft](https://github.com/cometbft/cometbft) - Engine de replicação de máquinas de estado distribuída, tolerante a falhas bizantinas e determinística. É um fork do Tendermint Core e implementa o algoritmo de consenso Tendermint.
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Framework para construir blockchains públicas no ecossistema Cosmos.
- [gno](https://github.com/gnolang/gno) - Suíte abrangente de contratos inteligentes construída com Golang e Gnolang, uma variante determinística de Go criada especificamente para blockchains.
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Implementação oficial em Go do protocolo Ethereum.
- [gosemble](https://github.com/LimeChain/gosemble) - Framework baseado em Go para construir runtimes compatíveis com Polkadot/Substrate.
- [gossamer](https://github.com/ChainSafe/gossamer) - Implementação em Go do Polkadot Host.
- [kubo](https://github.com/ipfs/kubo) - Implementação do IPFS em Go. Fornece armazenamento endereçável por conteúdo, que pode ser usado para armazenamento descentralizado em DApps. É baseado no protocolo IPFS.
- [lnd](https://github.com/lightningnetwork/lnd) - Implementação completa de um nó da Lightning Network.
- [nview](https://github.com/blinklabs-io/nview) - Ferramenta de monitoramento local para um nó Cardano. É uma TUI (interface de usuário de terminal) projetada para caber na maioria das telas.
- [pactus](https://github.com/pactus-project/pactus) - Implementação de full node da blockchain Pactus em Go.
- [solana-go](https://github.com/gagliardetto/solana-go) - Biblioteca Go para interagir com as interfaces JSON RPC e WebSocket da Solana.
- [tendermint](https://github.com/tendermint/tendermint) - Middleware de alto desempenho para transformar uma máquina de estados escrita em qualquer linguagem de programação em uma máquina de estados replicada tolerante a falhas bizantinas, usando os protocolos de consenso e de blockchain do Tendermint.
- [tronlib](https://github.com/kslamph/tronlib) - SDK Go abrangente e pronto para produção para interagir com a blockchain TRON, com suporte a tokens TRC20.

**[⬆ voltar ao topo](#contents)**

## Criação de bots

_Bibliotecas para criar e trabalhar com bots._

- [arikawa](https://github.com/diamondburned/arikawa) - Biblioteca e framework para a API do Discord.
- [bot](https://github.com/go-telegram/bot) - Biblioteca de bots do Telegram sem dependências, com componentes de UI adicionais.
- [echotron](https://github.com/NicoNex/echotron) - Biblioteca elegante e concorrente para bots do Telegram em Go.
- [go-joe](https://joe-bot.net) - Biblioteca de bots de uso geral inspirada no Hubot, mas escrita em Go.
- [go-sarah](https://github.com/oklahomer/go-sarah) - Framework para criar bots para os serviços de chat desejados, incluindo LINE, Slack, Gitter e outros.
- [go-tg](https://github.com/mr-linch/go-tg) - Biblioteca cliente Go gerada a partir da documentação oficial para acessar a Telegram Bot API, com tudo incluído para criar bots complexos.
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - Biblioteca para escrever bots para o chat da twitch.tv
- [micha](https://github.com/onrik/micha) - Biblioteca Go para a API de bots do Telegram.
- [slack-bot](https://github.com/innogames/slack-bot) - Bot do Slack pronto para uso para desenvolvedores preguiçosos: comandos personalizados, Jenkins, Jira, Bitbucket, Github...
- [slacker](https://github.com/slack-io/slacker) - Framework fácil de usar para criar bots do Slack.
- [telebot](https://github.com/tucnak/telebot) - Framework de bots do Telegram escrito em Go.
- [teleflow](https://github.com/kslamph/teleflow) - Framework de bots do Telegram simples e com segurança de tipos, com fluxos fluentes e gerenciamento automático de estado.
- [telego](https://github.com/mymmrac/telego) - Biblioteca da Telegram Bot API para Golang com implementação completa e um-para-um da API.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - Cliente de bots do Telegram simples e limpo.
- [TG](https://github.com/enetx/tg) - Framework de bots do Telegram para Go.
- [wayback](https://github.com/wabarc/wayback) - Bot para Telegram, Mastodon, Slack e outras plataformas de mensagens que arquiva páginas web.
- [ymsdk](https://github.com/rekurt/ymsdk) - SDK Go para a Bot API do Yandex Messenger com modelos com segurança de tipos, novas tentativas automáticas e tratamento de limites de taxa.
   - [Wisp](https://github.com/wisp-trading/wisp) - Framework de trading orientado a eventos para Go. Spot, futuros perpétuos, mercados de previsão. Multi-exchange (Bybit, Hyperliquid, Polymarket).

**[⬆ voltar ao topo](#contents)**

## Automação de build

_Bibliotecas e ferramentas que ajudam na automação de build._

- [1build](https://github.com/gopinath-langote/1build) - Ferramenta de linha de comando para gerenciar sem atrito comandos específicos de cada projeto.
- [air](https://github.com/cosmtrek/air) - Air - Live reload para apps Go.
- [anko](https://github.com/GuilhermeCaruso/anko) - Observador de aplicações simples para várias linguagens de programação.
- [gaper](https://github.com/maxclaus/gaper) - Compila e reinicia um projeto Go quando ele trava ou quando algum arquivo observado muda.
- [gilbert](https://go-gilbert.github.io) - Sistema de build e executor de tarefas para projetos Go.
- [gob](https://github.com/kcmvp/gob) - Ferramenta de build semelhante ao [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) para projetos Go.
- [goyek](https://github.com/goyek/goyek) - Crie pipelines de build em Go.
- [mage](https://github.com/magefile/mage) - Mage é uma ferramenta de build semelhante ao make/rake que usa Go.
- [mmake](https://github.com/tj/mmake) - Make moderno.
- [realize](https://github.com/tockins/realize) - Sistema de build para Go com observadores de arquivos e live reload. Execute, compile e observe alterações em arquivos com caminhos personalizados.
- [rex](https://github.com/rexrun-dev/rex) - Executor universal de projetos sem configuração. Detecta sua stack (Go, Node, Python, Rust, PHP, Zig, Elixir) e executa o comando certo.
- [Task](https://github.com/go-task/task) - Alternativa simples ao "Make".
- [taskctl](https://github.com/taskctl/taskctl) - Executor de tarefas concorrente.
- [xc](https://github.com/joerdav/xc) - Executor de tarefas definidas no README.md, markdown executável.

**[⬆ voltar ao topo](#contents)**

## Linha de comando

### Interfaces de console avançadas

_Bibliotecas para criar aplicações de console e interfaces de usuário de console._

- [asciigraph](https://github.com/guptarohit/asciigraph) - Pacote Go para criar gráficos de linha ASCII leves ╭┈╯ em apps de linha de comando, sem outras dependências.
- [aurora](https://github.com/logrusorgru/aurora) - Cores ANSI para terminal com suporte a fmt.Printf/Sprintf.
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - Renderize caixas altamente personalizáveis no terminal.
- [bubble-table](https://github.com/Evertras/bubble-table) - Componente de tabela interativa para o bubbletea.
- [bubbles](https://github.com/charmbracelet/bubbles) - Componentes de TUI para o bubbletea.
- [bubbletea](https://github.com/charmbracelet/bubbletea) - Framework Go para criar apps de terminal, baseado na The Elm Architecture.
- [chroma16](https://github.com/arceus-7/chroma16) - Gere uma paleta harmoniosa de 16 cores para terminal a partir de uma única cor ou string semente.
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Ferramenta de templates dinâmicos de arquivos de configuração para manifestos do kubernetes ou arquivos de configuração em geral.
- [ctc](https://github.com/wzshiming/ctc) - Biblioteca multiplataforma e não invasiva de cores para terminal que não exige modificar o método Print.
- [fx](https://github.com/antonmedv/fx) - Visualizador e processador de JSON para terminal.
- [go-ataman](https://github.com/workanator/go-ataman) - Biblioteca Go para renderizar templates de texto com cores ANSI em terminais.
- [go-colorable](https://github.com/mattn/go-colorable) - Writer com suporte a cores para Windows.
- [go-colortext](https://github.com/daviddengcn/go-colortext) - Biblioteca Go para saída colorida em terminais.
- [go-isatty](https://github.com/mattn/go-isatty) - isatty para golang.
- [go-palette](https://github.com/abusomani/go-palette) - Biblioteca Go que fornece definições de estilo elegantes e práticas usando cores ANSI. Totalmente compatível, encapsula a [biblioteca fmt](https://pkg.go.dev/fmt) para layouts de terminal bonitos.
- [go-prompt](https://github.com/c-bata/go-prompt) - Biblioteca para criar um prompt interativo poderoso, inspirada no [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit).
- [go-tui](https://github.com/grindlemire/go-tui) - Framework declarativo de UI para terminal com templates no estilo templ, layout flexbox e um language server para suporte em editores.
- [gocui](https://github.com/jroimartin/gocui) - Biblioteca Go minimalista voltada à criação de interfaces de usuário de console.
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - Estilize texto no terminal.
- [gookit/color](https://github.com/gookit/color) - Biblioteca de renderização de cores no terminal, com suporte à saída em 16 cores, 256 cores e cores RGB, compatível com Windows.
- [goscaf](https://github.com/iyashjayesh/goscaf) - O goscaf gera boilerplate opinativo e com qualidade de produção para projetos Go por meio de uma CLI interativa. Pare de copiar e colar código-esqueleto entre projetos.
- [lazyenv](https://github.com/lazynop/lazyenv) - TUI para navegar, comparar e editar arquivos .env.
- [lazyteams](https://github.com/agmonetti/lazyteams) - Interface de usuário de terminal controlada pelo teclado para o Microsoft Teams.
- [lipgloss](https://github.com/charmbracelet/lipgloss) - Defina de forma declarativa estilos de cor, formato e layout no terminal.
- [loom](https://github.com/loom-go/loom) - Framework de componentes reativos baseado em sinais para criar TUIs.
- [marker](https://github.com/cyucelen/marker) - A forma mais fácil de encontrar e marcar strings para saídas coloridas no terminal.
- [mpb](https://github.com/vbauerster/mpb) - Múltiplas barras de progresso para aplicações de terminal.
- [phoenix](https://github.com/phoenix-tui/phoenix) - Framework de TUI de alto desempenho com arquitetura inspirada no Elm, renderização Unicode perfeita e sistema de eventos sem alocações.
- [progressbar](https://github.com/schollz/progressbar) - Barra de progresso básica e thread-safe que funciona em qualquer sistema operacional.
- [pterm](https://github.com/pterm/pterm) - Biblioteca para embelezar a saída do console em todas as plataformas, com muitos componentes combináveis.
- [simpletable](https://github.com/alexeyco/simpletable) - Tabelas simples no terminal com Go.
- [spinner](https://github.com/briandowns/spinner) - Pacote Go para exibir facilmente um spinner no terminal, com opções.
- [tabby](https://github.com/cheynewallace/tabby) - Biblioteca minúscula para tabelas Golang supersimples.
- [table](https://github.com/tomlazar/table) - Pequena biblioteca para tabelas coloridas no terminal.
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox é uma biblioteca para criar interfaces multiplataforma baseadas em texto.
- [termdash](https://github.com/mum4k/termdash) - Dashboard de terminal em Go baseado no **termbox-go** e inspirado no [termui](https://github.com/gizak/termui).
- [termenv](https://github.com/muesli/termenv) - Suporte avançado a estilos e cores ANSI para suas aplicações de terminal.
- [termui](https://github.com/gizak/termui) - Dashboard de terminal em Go baseado no **termbox-go** e inspirado no [blessed-contrib](https://github.com/yaronn/blessed-contrib).
- [uilive](https://github.com/gosuri/uilive) - Biblioteca para atualizar a saída do terminal em tempo real.
- [uiprogress](https://github.com/gosuri/uiprogress) - Biblioteca flexível para renderizar barras de progresso em aplicações de terminal.
- [uitable](https://github.com/gosuri/uitable) - Biblioteca para melhorar a legibilidade de dados tabulares em apps de terminal.
- [vhs](https://github.com/charmbracelet/vhs) - Seu gravador de vídeo caseiro para a CLI - gere GIFs do terminal a partir de código para documentação e tutoriais.
- [yacspin](https://github.com/theckman/yacspin) - Yet Another CLi Spinner: pacote para trabalhar com spinners no terminal.

**[⬆ voltar ao topo](#contents)**

### CLI padrão

_Bibliotecas para criar aplicações de linha de comando padrão ou básicas._

- [acmd](https://github.com/cristalhq/acmd) - Pacote de CLI simples, útil e opinativo em Go.
- [argparse](https://github.com/akamensky/argparse) - Parser de argumentos de linha de comando inspirado no módulo argparse do Python.
- [argv](https://github.com/cosiner/argv) - Biblioteca Go para dividir uma string de linha de comando em um array de argumentos usando a sintaxe do bash.
- [boa](https://github.com/GiGurra/boa) - Flags, variáveis de ambiente, validação e arquivos de configuração declarativos a partir de struct tags. Construído sobre o cobra.
- [carapace](https://github.com/rsteube/carapace) - Gerador de autocompletar de argumentos de comandos para o spf13/cobra.
- [carapace-bin](https://github.com/rsteube/carapace-bin) - Autocompletar de argumentos para múltiplos shells e múltiplos comandos.
- [carapace-spec](https://github.com/rsteube/carapace-spec) - Defina autocompletares simples usando um arquivo de especificação.
- [climax](https://github.com/tucnak/climax) - CLI alternativa com "cara humana", no espírito do comando go.
- [clîr](https://github.com/leaanthony/clir) - Biblioteca de CLI simples e clara. Sem dependências.
- [cmd](https://github.com/posener/cmd) - Estende o pacote padrão `flag` para dar suporte a subcomandos e mais, de forma idiomática.
- [cmdr](https://github.com/hedzr/cmdr) - Biblioteca Go de interface de linha de comando no estilo POSIX/GNU, semelhante ao getopt.
- [cobra](https://github.com/spf13/cobra) - Commander para interações modernas de CLI em Go.
- [command-chain](https://github.com/rainu/go-command-chain) - Biblioteca Go para configurar e executar cadeias de comandos - como pipelines em shells unix.
- [commandeer](https://github.com/jaffee/commandeer) - Apps de CLI amigáveis para desenvolvedores: configura flags, valores padrão e mensagens de uso com base em campos e tags de structs.
- [complete](https://github.com/posener/complete) - Escreva autocompletares do bash em Go + autocompletar do bash para o comando go.
- [console](https://github.com/reeflective/console) Biblioteca de aplicações em ciclo fechado para comandos Cobra, com prompts oh-my-posh e mais.
- [Dnote](https://github.com/dnote/dnote) - Caderno de anotações simples de linha de comando com sincronização entre vários dispositivos.
- [elvish](https://github.com/elves/elvish) - Linguagem de programação expressiva e shell interativo versátil.
- [env](https://github.com/codingconcepts/env) - Configuração de ambiente baseada em tags para structs.
- [flaggy](https://github.com/integrii/flaggy) - Pacote de flags robusto e idiomático com excelente suporte a subcomandos.
- [flagvar](https://github.com/sgreben/flagvar) - Coleção de tipos de argumento de flag para o pacote padrão `flag` do Go.
- [flash-flags](https://github.com/agilira/flash-flags) - Biblioteca de parsing de flags ultrarrápida, sem dependências e compatível com POSIX, que pode ser usada como substituta direta da stdlib, com reforço de segurança.
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - Ferramenta de terminal para transferência peer-to-peer de arquivos e mensagens sobre um UDP confiável personalizado.
- [getopt](https://github.com/jon-codes/getopt) - Um `getopt` preciso em Go, validado com a implementação da GNU libc.
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - Ferramenta de CLI para gerar a estrutura inicial de aplicações Go com os padrões de arquitetura Minimalista, Padrão e Hexagonal.
- [go-arg](https://github.com/alexflint/go-arg) - Parsing de argumentos baseado em structs em Go.
- [go-flags](https://github.com/jessevdk/go-flags) - Parser de opções de linha de comando para Go.
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Parser de opções em Go inspirado na flexibilidade do GetOpt::Long do Perl.
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Biblioteca personalizável de edição de linha com atalhos de teclado do Emacs, suporte a Unicode, autocompletar e realce de sintaxe. Usada no shell NYAGOS.
- [gocmd](https://github.com/devfacet/gocmd) - Biblioteca Go para criar aplicações de linha de comando.
- [goopt](https://github.com/napalu/goopt) - Framework de CLI declarativo para Go baseado em struct tags, com um amplo conjunto de recursos, como comandos/flags hierárquicos, i18n, autocompletar no shell e validação.
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Binário multicall único e nativo em Go, com 77 ferramentas POSIX e mais de 97% de compatibilidade com os testes do BusyBox.
- [hashicorp/cli](https://github.com/hashicorp/cli) - Biblioteca Go para implementar interfaces de linha de comando.
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - Framework de aplicações de CLI com configuração automática e injeção de dependências.
- [job](https://github.com/liujianping/job) - JOB: transforme seu comando de curta duração em um job de longa duração.
- [kingpin](https://github.com/alecthomas/kingpin) - Parser de linha de comando e de flags com suporte a subcomandos (substituído pelo `kong`; veja abaixo).
- [liner](https://github.com/peterh/liner) - Biblioteca Go semelhante ao readline para interfaces de linha de comando.
- [mcli](https://github.com/jxskiss/mcli) - Biblioteca de CLI mínima, mas muito poderosa, para Go.
- [memsh](https://github.com/amjadjibon/memsh) - Shell bash virtual em Go: executa comandos de shell em um sistema de arquivos em memória (afero), com suporte a plugins WASM e um servidor HTTP embutível.
- [mkideal/cli](https://github.com/mkideal/cli) - Pacote de linha de comando rico em recursos e fácil de usar, baseado em struct tags do golang.
- [mow.cli](https://github.com/jawher/mow.cli) - Biblioteca Go para criar aplicações de CLI com parsing e validação sofisticados de flags e argumentos.
- [neuron-cli](https://github.com/steevin/neuron-cli) - Gerenciador de conhecimento para terminal, local-first e compatível com o Obsidian.
- [OpenCLI](https://github.com/bcdxn/opencli) - Especificação no estilo OpenAPI para CLIs; defina sua interface em um documento independente de linguagem para gerar documentação e código boilerplate de frameworks.
- [ops](https://github.com/nanovms/ops) - Construtor/orquestrador de unikernels.
- [orpheus](https://github.com/agilira/orpheus) - Framework de CLI com reforço de segurança, sistema de armazenamento de plugins e recursos de observabilidade para produção.
- [pflag](https://github.com/spf13/pflag) - Substituto direto do pacote flag do Go, implementando --flags no estilo POSIX/GNU.
- [readline](https://github.com/reeflective/readline) - Biblioteca de shell com recursos de interface modernos e fáceis de usar.
- [sflags](https://github.com/octago/sflags) - Gerador de flags baseado em structs para flag, urfave/cli, pflag, cobra, kingpin e outras bibliotecas.
- [structcli](https://github.com/leodido/structcli) - Elimine o boilerplate do Cobra: crie CLIs poderosas e ricas em recursos de forma declarativa a partir de structs Go.
- [strumt](https://github.com/antham/strumt) - Biblioteca para criar cadeias de prompts.
- [subcmd](https://github.com/bobg/subcmd) - Outra abordagem para analisar e executar subcomandos. Funciona em conjunto com o pacote padrão `flag`.
- [teris-io/cli](https://github.com/teris-io/cli) - API simples e completa para criar interfaces de linha de comando em Go.
- [urfave/cli](https://github.com/urfave/cli) - Pacote simples, rápido e divertido para criar apps de linha de comando em Go (antigo codegangsta/cli).
- [version](https://github.com/mszostok/version) - Coleta e exibe informações de versão da CLI em vários formatos, junto com avisos de atualização.
- [wlog](https://github.com/dixonwille/wlog) - Interface de logging simples com suporte a cores multiplataforma e concorrência.
- [wmenu](https://github.com/dixonwille/wmenu) - Estrutura de menus fácil de usar para aplicações de CLI que pedem ao usuário que faça escolhas.

**[⬆ voltar ao topo](#contents)**

## Configuração

_Bibliotecas para parsing de configuração._

- [aconfig](https://github.com/cristalhq/aconfig) - Carregador de configuração simples, útil e opinativo.
- [argus](https://github.com/agilira/argus) - Observação de arquivos e gerenciamento de configuração com ring buffer MPSC, estratégias adaptativas de batching e parsing universal de formatos (JSON, YAML, TOML, INI, HCL, Properties).
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Provedor de configuração para consumir dados do Azure App Configuration em aplicações Go.
- [bcl](https://github.com/wkhere/bcl) - BCL é uma linguagem de configuração semelhante ao HCL.
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - Leitor de configuração minimalista (de arquivos, ENV e de onde você quiser).
- [config](https://github.com/JeremyLoy/config) - Configuração de aplicações cloud native. Vincule ENV a structs em apenas duas linhas.
- [config](https://github.com/num30/config) - Configure seu app usando arquivo, variáveis de ambiente ou flags em duas linhas de código.
- [config](https://github.com/andreiavrammsd/config) - Carregador de configuração baseado em structs com um parser dedicado de arquivos de configuração, com suporte a variáveis de ambiente, flags, valores padrão e validação.
- [configuration](https://github.com/BoRuDar/configuration) - Biblioteca para inicializar structs de configuração a partir de variáveis de ambiente, arquivos, flags e da tag 'default'.
- [configuro](https://github.com/sherifabdlnaby/configuro) - Framework opinativo de carregamento e validação de configuração a partir de ENV e arquivos, voltado para aplicações compatíveis com o 12-Factor.
- [confiq](https://github.com/greencoda/confiq) - Biblioteca Go que decodifica formatos de dados estruturados em structs de configuração - com suporte a vários formatos de dados.
- [confita](https://github.com/heetch/confita) - Carregue configurações em cascata de vários backends para uma struct.
- [conflate](https://github.com/the4thamigo-uk/conflate) - Biblioteca/ferramenta para mesclar vários arquivos JSON/YAML/TOML de URLs arbitrárias, validar com um JSON schema e aplicar valores padrão definidos no schema.
- [enflag](https://github.com/atelpis/enflag) - Biblioteca de configuração orientada a contêineres e sem dependências que unifica o parsing de variáveis de ambiente e de flags. Usa generics para segurança de tipos, sem reflexão nem struct tags.
- [env](https://github.com/caarlos0/env) - Faça o parsing de variáveis de ambiente para structs Go (com valores padrão).
- [env](https://github.com/junk1tm/env) - Pacote leve para carregar variáveis de ambiente em structs.
- [env](https://github.com/syntaqx/env) - Pacote utilitário de ambiente com suporte a unmarshaling em structs.
- [envconfig](https://github.com/vrischmann/envconfig) - Leia sua configuração a partir de variáveis de ambiente.
- [envh](https://github.com/antham/envh) - Helpers para gerenciar variáveis de ambiente.
- [envyaml](https://github.com/yuseferi/envyaml) - Leitor de YAML com variáveis de ambiente. Ajuda a manter segredos como variáveis de ambiente, mas carregá-los como configurações em YAML estruturado.
- [fig](https://github.com/kkyr/fig) - Biblioteca minúscula para ler configuração de um arquivo e de variáveis de ambiente (com validação e valores padrão).
- [genv](https://github.com/sakirsensoy/genv) - Leia variáveis de ambiente facilmente, com suporte a dotenv.
- [go-array](https://github.com/deatil/go-array) - Pacote Go que lê ou define dados de map, slice ou JSON.
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - Pacote Go que busca parâmetros do AWS System Manager - Parameter Store.
- [go-cfg](https://github.com/dsbasko/go-cfg) - A biblioteca oferece uma forma unificada de ler dados de configuração para uma estrutura a partir de várias fontes, como env, flags e arquivos de configuração (.json, .yaml, .toml, .env).
- [go-conf](https://github.com/ThomasObenaus/go-conf) - Biblioteca simples para configuração de aplicações baseada em structs anotadas. Suporta a leitura da configuração a partir de variáveis de ambiente, arquivos de configuração e parâmetros de linha de comando.
- [go-config](https://github.com/MordaTeam/go-config) - Biblioteca simples e prática para trabalhar com configurações de apps.
- [go-external-config](https://github.com/go-external-config/go) - Biblioteca de gerenciamento de configuração para Go inspirada no Spring.
- [go-external-config/aws](https://github.com/go-external-config/aws) - Suporte a fontes de propriedades da AWS para o go-external-config.
- [go-external-config/consul](https://github.com/go-external-config/consul) - Suporte a fontes de propriedades do Consul para o go-external-config.
- [go-external-config/vault](https://github.com/go-external-config/vault) - Suporte a fontes de propriedades do Vault para o go-external-config.
- [go-ini](https://github.com/subpop/go-ini) - Pacote Go que faz marshal e unmarshal de arquivos INI.
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - Utilitário Go para carregar parâmetros de configuração do AWS SSM (Parameter Store).
- [go-up](https://github.com/ufoscout/go-up) - Biblioteca de configuração simples, com resolução recursiva de placeholders e sem mágica.
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - Validação de YAML ciente da origem, com schemas nativos em Go e suporte a JSON Schema.
- [GoCfg](https://github.com/Jagerente/gocfg) - Gerenciador de configuração com contratos baseados em struct tags, provedores de valores personalizados, parsers e geração de documentação. Personalizável, mas simples.
- [goconfig](https://github.com/fulldump/goconfig) - Preencha structs Go a partir de flags, variáveis de ambiente, config.json e valores padrão, com precedência determinística. Sem dependências extras.
- [godotenv](https://github.com/joho/godotenv) - Port em Go da biblioteca dotenv do Ruby (carrega variáveis de ambiente a partir de `.env`).
- [goenv](https://github.com/psyb0t/goenv) - Lê a variável de ambiente ENV e informa se o processo está rodando em produção ou em desenvolvimento.
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config é um gerenciador de configuração leve, porém poderoso, para a linguagem de programação Go.
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - Configuração JSON modular. Mantenha suas structs de configuração junto ao código que elas configuram e delegue o parsing a submódulos sem abrir mão da serialização completa da configuração.
- [gonfig](https://github.com/milad-abbasi/gonfig) - Parser de configuração baseado em tags que carrega valores de diferentes provedores em uma struct com segurança de tipos.
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - Carrega a configuração de variáveis de ambiente em structs via reflexão, com valores padrão definidos em struct tags e campos obrigatórios.
- [gookit/config](https://github.com/gookit/config) - Gerenciamento de configuração de aplicações (load, get, set). Suporta JSON, YAML, TOML, INI e HCL. Carregamento de vários arquivos e mesclagem com sobrescrita de dados.
- [harvester](https://github.com/beatlabs/harvester) - Harvester, um pacote de configuração estática e dinâmica fácil de usar, com suporte a seeding, variáveis de ambiente e integração com o Consul.
- [hedzr/store](https://github.com/hedzr/store) - Biblioteca de gerenciamento de configuração extensível e de alto desempenho, otimizada para dados hierárquicos.
- [hjson](https://github.com/hjson/hjson-go) - Human JSON, um formato de arquivo de configuração para humanos. Sintaxe flexível, menos erros, mais comentários.
- [hocon](https://github.com/gurkankaymak/hocon) - Biblioteca de configuração para trabalhar com o formato HOCON (um superconjunto do JSON amigável para humanos), com suporte a recursos como variáveis de ambiente, referências a outros valores, comentários e múltiplos arquivos.
- [ini](https://github.com/go-ini/ini) - Pacote Go para ler e escrever arquivos INI.
- [ini](https://github.com/wlevene/ini) - Biblioteca de parsing e escrita de INI: unmarshal para struct, marshal para JSON, escrita em arquivo e observação de arquivos.
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - Biblioteca Go para gerenciar dados de configuração a partir de variáveis de ambiente.
- [koanf](https://github.com/knadh/koanf) - Biblioteca leve e extensível para ler configuração em aplicações Go. Suporte integrado a JSON, TOML, YAML, env e linha de comando.
- [konf](https://github.com/nil-go/konf) - A API mais simples para ler/observar configuração de arquivos, env, flags e nuvens (por exemplo, AWS, Azure, GCP).
- [konfig](https://github.com/lalamove/konfig) - Gerenciamento de configuração componível, observável e de alto desempenho para Go, para a era do processamento distribuído.
- [kong](https://github.com/alecthomas/kong) - Parser de linha de comando com suporte a estruturas de linha de comando arbitrariamente complexas e a fontes adicionais de configuração, como YAML, JSON, TOML etc. (sucessor do `kingpin`).
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - Pacote simples e útil para ler variáveis de ambiente.
- [nfigure](https://github.com/muir/nfigure) - Configuração por biblioteca baseada em struct tags a partir da linha de comando (estilo POSIX e Go), do ambiente, de JSON e de YAML
- [onion](https://github.com/goraz/onion) - Configuração baseada em camadas para Go. Suporta JSON, TOML, YAML, properties, etcd, env e criptografia com PGP.
- [piper](https://github.com/Yiling-J/piper) - Wrapper do Viper com herança de configuração e geração de chaves.
- [sonic](https://github.com/bytedance/sonic) - Biblioteca extremamente rápida de serialização e desserialização de JSON.
- [swap](https://github.com/oblq/swap) - Instancie/configure structs recursivamente com base no ambiente de build. (YAML, TOML, JSON e env).
- [typenv](https://github.com/diegomarangoni/typenv) - Biblioteca minimalista e sem dependências de variáveis de ambiente tipadas.
- [uConfig](https://github.com/omeid/uconfig) - Gerenciamento de configuração leve, sem dependências e extensível.
- [viper](https://github.com/spf13/viper) - Configuração para Go com presas afiadas.
- [xdg](https://github.com/adrg/xdg) - Implementação em Go da [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) e dos [diretórios de usuário XDG](https://wiki.archlinux.org/index.php/XDG_user_directories).
- [yamagiconf](https://github.com/romshark/yamagiconf) - O "subconjunto seguro" do YAML para configurações em Go.
- [zerocfg](https://github.com/chaindead/zerocfg) - Gerenciamento de configuração conciso e sem esforço, que evita boilerplate e código repetitivo, com suporte a múltiplas fontes com sobrescrita por prioridade.

**[⬆ voltar ao topo](#contents)**

## Integração contínua

_Ferramentas para ajudar com integração contínua._

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse é uma plataforma de CI distribuída.
- [Bencher](https://bencher.dev/) - Conjunto de ferramentas de benchmarking contínuo projetado para detectar regressões de desempenho na CI.
- [CDS](https://github.com/ovh/cds) - Plataforma de código aberto de CI/CD e automação de DevOps de nível empresarial.
- [dot](https://github.com/opnlabs/dot) - Sistema de integração contínua mínimo e local-first que usa Docker para executar jobs concorrentemente em estágios.
- [drone](https://github.com/drone/drone) - Drone é uma plataforma de integração contínua construída sobre Docker, escrita em Go.
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - GitHub Action para acompanhar a cobertura de código nos seus pull requests, com uma bela prévia em HTML, de graça.
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - Use os testes de fuzzing nativos do Go 1.18 no GitHub Actions.
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Automatize o versionamento semântico de repositórios Git.
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - GitHub Action que reporta problemas quando a cobertura de testes está abaixo do limite definido.
- [gomason](https://github.com/nikogura/gomason) - Teste, compile, assine e publique seus binários Go a partir de um workspace limpo.
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - Saída do go test para humanos.
- [goveralls](https://github.com/mattn/goveralls) - Integração Go para o sistema de acompanhamento contínuo de cobertura de código Coveralls.io.
- [muffet](https://github.com/raviqqe/muffet) - Verificador rápido de links de sites em Go; veja as [alternativas](https://github.com/lycheeverse/lychee#features).
- [overalls](https://github.com/go-playground/overalls) - Coverprofile de projetos Go com múltiplos pacotes para ferramentas como o goveralls.
- [PikoCI](https://github.com/pikoci/pikoci) - CI/CD auto-hospedado inspirado no Concourse. Binário único, qualquer banco de dados, qualquer fila. Pipelines em HCL, tipos de recursos e runners plugáveis.
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - Ferramenta recursiva de testes de cobertura.
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker é um fork comunitário do sistema de CI Drone.

**[⬆ voltar ao topo](#contents)**

## Pré-processadores de CSS

_Bibliotecas para pré-processar arquivos CSS._

- [go-css](https://github.com/napsy/go-css) - Parser de CSS muito simples, escrito em Go.
- [go-libsass](https://github.com/wellington/go-libsass) - Wrapper Go para o projeto libsass, 100% compatível com Sass.

**[⬆ voltar ao topo](#contents)**

## Frameworks de integração de dados

_Frameworks para realizar ELT / ETL_

- [Benthos](https://github.com/benthosdev/benthos) - Ponte de streaming de mensagens entre diversos protocolos.
- [CloudQuery](http://github.com/cloudquery/cloudquery) - Framework de integração de dados ELT de alto desempenho com arquitetura plugável.
- [confluence2md](https://github.com/gkoos/confluence2md) - Crawler e conversor de Confluence para Markdown.
- [omniparser](https://github.com/jf-tech/omniparser) - Biblioteca ETL versátil que analisa entradas de texto (CSV/txt/JSON/XML/EDI/X12/EDIFACT/etc) em streaming e transforma os dados em saída JSON usando um schema orientado a dados.

**[⬆ voltar ao topo](#contents)**

## Estruturas de dados e algoritmos

### Empacotamento de bits e compressão

- [bingo](https://github.com/iancmcc/bingo) - Empacotamento rápido e sem alocações de tipos nativos em bytes, preservando a ordem lexicográfica.
- [binpacker](https://github.com/zhuangsirui/binpacker) - Empacotador e desempacotador binário que ajuda a construir streams binários personalizados.
- [bit](https://github.com/yourbasic/bit) - Estrutura de dados de conjunto em Golang com funções bônus de manipulação de bits.
- [crunch](https://github.com/superwhiskers/crunch) - Pacote Go que implementa buffers para lidar facilmente com vários tipos de dados.
- [go-ef](https://github.com/amallia/go-ef) - Implementação em Go da codificação Elias-Fano.
- [roaring](https://github.com/RoaringBitmap/roaring) - Pacote Go que implementa bitsets comprimidos.

### Conjuntos de bits

- [bitmap](https://github.com/kelindar/bitmap) - Bitmap/bitset denso, sem alocações e com suporte a SIMD em Go.
- [bitset](https://github.com/bits-and-blooms/bitset) - Pacote Go que implementa bitsets.

### Filtros de Bloom e Cuckoo

- [bloom](https://github.com/bits-and-blooms/bloom) - Pacote Go que implementa filtros de Bloom.
- [bloom](https://github.com/zhenjl/bloom) - Filtros de Bloom implementados em Go.
- [bloom](https://github.com/yourbasic/bloom) - Implementação de filtro de Bloom em Golang.
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Mais uma implementação de filtro de Bloom em Go, compatível com a biblioteca Guava do Java.
- [boomfilters](https://github.com/tylertreat/BoomFilters) - Estruturas de dados probabilísticas para processar streams contínuos e ilimitados.
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - Filtro cuckoo: um filtro cuckoo abrangente, configurável e com uso de espaço otimizado em comparação com outras implementações, com todos os recursos mencionados no artigo original disponíveis.
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - Filtro cuckoo: uma boa alternativa a um counting bloom filter, implementado em Go.
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - Primeira implementação em Go puro de filtros Ribbon (na prática, menores que Bloom e Xor) para consultas aproximadas de pertinência a conjuntos com uso eficiente de espaço.
- [ring](https://github.com/TheTannerRyan/ring) - Implementação em Go de um filtro de Bloom de alto desempenho e thread-safe.

### Coleções de estruturas de dados e algoritmos

- [algorithms](https://github.com/shady831213/algorithms) - Algoritmos e estruturas de dados. Estudo do CLRS.
- [go-datastructures](https://github.com/Workiva/go-datastructures) - Coleção de estruturas de dados úteis, eficientes e thread-safe.
- [gods](https://github.com/emirpasic/gods) - Estruturas de dados em Go. Contêineres, conjuntos, listas, pilhas, mapas, BidiMaps, árvores, HashSet etc.
- [gostl](https://github.com/liyue201/gostl) - Biblioteca de estruturas de dados e algoritmos para Go, projetada para oferecer funções semelhantes às da STL do C++.

### Iteradores

- [glinq](https://github.com/CreateLab/glinq) - Biblioteca de avaliação preguiçosa no estilo LINQ, com generics com segurança de tipos, otimizações de desempenho e zero dependências.
- [gloop](https://github.com/alvii147/gloop) - Loops práticos usando o recurso range-over-func do Go.
- [goterator](https://github.com/yaa110/goterator) - Implementação de iteradores que oferece funcionalidades de map e reduce.
- [iter](https://github.com/disksing/iter) - Implementação em Go dos iteradores e algoritmos da STL do C++.

### Mapas

Veja também [Banco de dados](#database) para armazenamentos chave-valor mais complexos e [Árvores](#trees) para
implementações adicionais de mapas ordenados.

- [cmap](https://github.com/lrita/cmap) - Mapa concorrente thread-safe para Go, com suporte ao uso de `interface{}` como chave e escalonamento automático de shards.
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Implementação de hash map concorrente, genérica, thread-safe e de alto desempenho com Swiss Map.
- [dict](https://github.com/srfrog/dict) - Dicionários (dict) no estilo Python para Go.
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - Wrapper genérico com segurança de tipos para `sync.Map`, com paridade total de métodos e zero dependências.
- [go-shelve](https://github.com/lucmq/go-shelve) - Objeto persistente semelhante a um mapa para a linguagem de programação Go. Suporta vários armazenamentos chave-valor embutidos.
- [goradd/maps](https://github.com/goradd/maps) - Interface genérica de mapas para Go 1.18+: mapas; mapas seguros; mapas ordenados; mapas ordenados e seguros; etc.
- [hmap](https://github.com/lyonnee/hmap) - HMap é uma implementação de Map concorrente, segura e com suporte a generics, projetada para oferecer uma API fácil de usar.

### Estruturas de dados e algoritmos diversos

- [combo](https://github.com/bobg/combo) - Operações combinatórias, incluindo permutações, combinações e combinações com repetição.
- [concurrent-writer](https://github.com/free/concurrent-writer) - Substituto direto altamente concorrente para `bufio.Writer`.
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Implementação em Go do sketch Count-Min-Log: contagem aproximada com contadores aproximados (como o sketch Count-Min, mas usando menos memória).
- [FSM](https://github.com/enetx/fsm) - FSM para Go.
- [fsm](https://github.com/cocoonspace/fsm) - Pacote de máquina de estados finitos.
- [genfuncs](https://github.com/nwillc/genfuncs) - Pacote de generics para Go 1.18+ inspirado em Sequence e Map do Kotlin.
- [go-generics](https://github.com/bobg/go-generics) - Utilitários genéricos para slices, mapas, conjuntos, iteradores e goroutines.
- [go-geoindex](https://github.com/hailocab/go-geoindex) - Índice geográfico em memória.
- [go-rampart](https://github.com/francesconi/go-rampart) - Determine como intervalos se relacionam entre si.
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - Quadtrees de regiões com localização eficiente de pontos e busca de vizinhos.
- [go-tuple](https://github.com/barweiss/go-tuple) - Implementação genérica de tuplas para Go 1.18+.
- [go18ds](https://github.com/daichi-m/go18ds) - Estruturas de dados em Go usando os generics do Go 1.18.
- [gofal](https://github.com/xxjwxc/gofal) - API de frações para Go.
- [gogu](https://github.com/esimov/gogu) - Biblioteca abrangente, reutilizável e eficiente de funções utilitárias e estruturas de dados genéricas e seguras para concorrência.
- [gota](https://github.com/kniren/gota) - Implementação de dataframes, séries e métodos de manipulação de dados para Go.
- [hide](https://github.com/emvi/hide) - Tipo de ID com marshalling de/para hash para evitar o envio de IDs aos clientes.
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Implementação de HyperLogLog com representação Sparse, correção de viés LogLog-Beta e redução de espaço TailCut.
- [quadtree](https://github.com/s0rg/quadtree) - Quadtree genérica, sem alocações e com 100% de cobertura de testes.
- [slices](https://github.com/twharmon/slices) - Funções puras e genéricas para slices.
- [xsync](https://github.com/puzpuzpuz/xsync) - Estruturas de dados concorrentes e escaláveis, como `xsync.Map`, uma tabela hash genérica concorrente.

### Tipos anuláveis

- [nan](https://github.com/kak-tus/nan) - Estruturas anuláveis sem alocações em uma única biblioteca, com funções de conversão práticas, marshallers e unmarshallers.
- [null](https://github.com/emvi/null) - Tipos Go anuláveis que podem ser convertidos (marshal/unmarshal) de/para JSON.
- [typ](https://github.com/gurukami/typ) - Tipos nulos, conversão segura de tipos primitivos e obtenção de valores de estruturas complexas.

### Filas

- [deheap](https://github.com/aalpar/deheap) - Heap de duas pontas (min-max heap) com acesso O(log n) tanto ao menor quanto ao maior elemento.
- [deque](https://github.com/edwingeng/deque) - Fila de duas pontas altamente otimizada.
- [deque](https://github.com/gammazero/deque) - Deque (fila de duas pontas) rápido baseado em ring buffer.
- [dqueue](https://github.com/vodolaz095/dqueue) - Fila adiada simples, em memória, sem dependências, testada em batalha e thread-safe.
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - Fila FIFO concorrente.
- [hatchet](https://github.com/hatchet-dev/hatchet) - Fila de tarefas distribuída e tolerante a falhas.
- [list](https://github.com/koss-null/list) - Lista duplamente encadeada genérica e thread-safe, com suporte completo a iteradores, e uma lista simplesmente encadeada intrusiva para uso embutido; um substituto rico em recursos para container/list.
- [memlog](https://github.com/embano1/memlog) - Estrutura de dados em memória fácil de usar, leve, thread-safe e somente de acréscimo (append-only), inspirada no Apache Kafka.
- [queue](https://github.com/adrianbrad/queue) - Várias implementações de filas genéricas e thread-safe para Go.

### Conjuntos

- [dsu](https://github.com/ihebu/dsu) - Implementação em Go da estrutura de dados de conjuntos disjuntos (Disjoint Set).
- [golang-set](https://github.com/deckarep/golang-set) - Conjuntos de alto desempenho, thread-safe e não thread-safe, para Go.
- [goset](https://github.com/zoumo/goset) - Implementação útil de coleção Set para Go.
- [set](https://github.com/StudioSol/set) - Implementação simples da estrutura de dados de conjunto em Go usando LinkedHashMap.

### Análise de texto

- [bleve](https://github.com/blevesearch/bleve) - Biblioteca moderna de indexação de texto para Go.
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Implementação em Go da Adaptive Radix Tree.
- [go-edlib](https://github.com/hbollon/go-edlib) - Biblioteca Go de algoritmos de comparação de strings e de distância de edição (Levenshtein, LCS, Hamming, Damerau levenshtein, Jaro-Winkler etc.) compatível com Unicode.
- [levenshtein](https://github.com/agext/levenshtein) - Distância de Levenshtein e métricas de similaridade com custos de edição personalizáveis e bônus no estilo Winkler para prefixos comuns.
- [levenshtein](https://github.com/agnivade/levenshtein) - Implementação para calcular a distância de Levenshtein em Go.
- [mspm](https://github.com/BlackRabbitt/mspm) - Algoritmo de correspondência de padrões com múltiplas strings para recuperação de informação.
- [parsefields](https://github.com/MonaxGT/parsefields) - Ferramentas para analisar logs no estilo JSON e coletar campos e eventos únicos.
- [ptrie](https://github.com/viant/ptrie) - Implementação de árvore de prefixos.
- [radixtree](https://github.com/gammazero/radixtree) - Árvore radix adaptativa (árvore de prefixos ou trie compacta).
- [trie](https://github.com/derekparker/trie) - Implementação de trie em Go.

### Árvores

- [graphlib](https://github.com/aio-arch/graphlib) - Biblioteca de ordenação topológica; ordenação e poda de grafos DAG.
- [hashsplit](http://github.com/bobg/hashsplit) - Divida streams de bytes em blocos e organize os blocos em árvores, com limites determinados pelo conteúdo, não pela posição.
- [merkle](https://github.com/bobg/merkle) - Cálculo eficiente em espaço de hashes raiz de Merkle e de provas de inclusão.
- [skiplist](https://github.com/MauriceGit/skiplist) - Implementação muito rápida de skiplist em Go.
- [skiplist](https://github.com/gansidui/skiplist) - Implementação de skiplist em Go.
- [skiplist](https://github.com/huandu/skiplist) - Skip list rápida e fácil de usar para Go.
- [treemap](https://github.com/igrmk/treemap) - Mapa genérico ordenado por chave que usa uma árvore rubro-negra internamente.

### Pipes

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - Módulo Go que processa trabalho de forma concorrente e retorna a saída em um canal na ordem da entrada.
- [parapipe](https://github.com/nazar256/parapipe) - Pipeline FIFO que paraleliza a execução em cada estágio, mantendo a ordem das mensagens e dos resultados.
- [pipeline](https://github.com/hyfather/pipeline) - Implementação de pipelines com fan-in e fan-out.
- [pipelines](https://github.com/nxdir-s/pipelines) - Funções genéricas de pipeline para processamento concorrente.

**[⬆ voltar ao topo](#contents)**

## Banco de dados

### Caches

_Armazenamentos de dados com registros que expiram, armazenamentos de dados distribuídos em memória ou subconjuntos em memória de bancos de dados baseados em arquivos._

- [bcache](https://github.com/iwanbk/bcache) - Biblioteca Go de cache distribuído em memória com consistência eventual.
- [BigCache](https://github.com/allegro/bigcache) - Cache chave/valor eficiente para gigabytes de dados.
- [cache2go](https://github.com/muesli/cache2go) - Cache chave:valor em memória com suporte a invalidação automática baseada em timeouts.
- [cachego](https://github.com/faabiosr/cachego) - Componente de cache em Golang para vários drivers.
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - BigCache com suporte a clustering e expiração individual de itens.
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - Implementação completa da API de cache do Oracle Coherence para aplicações Go, usando gRPC como transporte de rede.
- [couchcache](https://github.com/codingsince1985/couchcache) - Microsserviço de cache RESTful baseado no servidor Couchbase.
- [easycache](https://github.com/hugocarreira/easycache) - Forma simples de usar cache em memória em Golang (TTL/FIFO/LRU/LFU).
- [EchoVault](https://github.com/EchoVault/EchoVault) - Armazenamento de dados distribuído em memória e embutível, compatível com clientes Redis.
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - Cache em memória rápido e thread-safe para um grande número de entradas. Minimiza a sobrecarga do GC.
- [GCache](https://github.com/bluele/gcache) - Biblioteca de cache com suporte a cache com expiração, LFU, LRU e ARC.
- [gdcache](https://github.com/ulovecode/gdcache) - Biblioteca de cache pura e não intrusiva implementada em golang; você pode usá-la para implementar seu próprio cache distribuído.
- [go-cache](https://github.com/viney-shih/go-cache) - Biblioteca de cache Go flexível e em múltiplas camadas para lidar com cache em memória e compartilhado, adotando o padrão Cache-Aside.
- [go-freelru](https://github.com/elastic/go-freelru) Biblioteca de hashmap LRU rápida, genérica e sem GC, com locking, sharding, remoção e expiração opcionais.
- [go-gcache](https://github.com/szyhf/go-gcache) - Versão genérica do `GCache`, com suporte a cache com expiração, LFU, LRU e ARC.
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - Biblioteca rápida de armazenamento/cache chave:valor em memória. Caches de ponteiros.
- [gocache](https://github.com/eko/gocache) - Biblioteca de cache Go completa com vários armazenamentos (memória, memcache, redis, ...), cache encadeável, carregável, com métricas e mais.
- [gocache](https://github.com/yuseferi/gocache) - Biblioteca de cache Go livre de data races, com alto desempenho e funcionalidade de limpeza automática
- [groupcache](https://github.com/golang/groupcache) - Groupcache é uma biblioteca de cache e de preenchimento de cache, criada para substituir o memcached em muitos casos.
- [icache](https://github.com/mdaliyan/icache) - Pacote de cache de alto desempenho, genérico, thread-safe e sem dependências.
- [imcache](https://github.com/erni27/imcache) - Biblioteca Go de cache genérico em memória. Suporta expiração, expiração deslizante, limite máximo de entradas, callbacks de remoção e sharding.
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - Biblioteca de cache unificada para Go com suporte a cache em vários níveis.
- [nscache](https://github.com/no-src/nscache) - Framework de cache em Go com suporte a vários drivers de fontes de dados.
- [otter](https://github.com/maypok86/otter) - Cache sem locks de alto desempenho para Go. Muitas vezes mais rápido que o Ristretto e similares.
- [pocache](https://github.com/naughtygopher/pocache) - Pocache é um pacote de cache mínimo focado em uma estratégia de cache otimista e preemptiva.
- [ristretto](https://github.com/dgraph-io/ristretto) - Cache Go de alto desempenho limitado pela memória.
- [sturdyc](https://github.com/viccon/sturdyc) - Biblioteca de cache com recursos avançados de concorrência, projetada para tornar aplicações com muito I/O robustas e de alto desempenho.
- [theine](https://github.com/Yiling-J/theine-go) - Cache em memória de alto desempenho e quase ótimo, com expiração proativa por TTL e generics.
- [timedmap](https://github.com/zekroTJA/timedmap) - Mapa com pares chave-valor que expiram.
- [ttlcache](https://github.com/jellydator/ttlcache) - Cache em memória com expiração de itens e generics.
- [ttlcache](https://github.com/cheshir/ttlcache) - Armazenamento chave-valor em memória com TTL para cada registro.

### Bancos de dados implementados em Go

- [badger](https://github.com/dgraph-io/badger) - Armazenamento chave-valor rápido em Go.
- [bbolt](https://github.com/etcd-io/bbolt) - Banco de dados chave/valor embutido para Go.
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask é um banco de dados chave-valor (KV) embutível, persistente e rápido, escrito em Go puro, com desempenho de leitura/escrita previsível, baixa latência e alta vazão graças ao layout em disco do bitcask (LSM+WAL).
- [buntdb](https://github.com/tidwall/buntdb) - Banco de dados chave/valor em memória, rápido e embutível para Go, com indexação personalizada e suporte espacial.
- [clover](https://github.com/ostafen/clover) - Banco de dados NoSQL leve e orientado a documentos, escrito em Golang puro.
- [cockroach](https://github.com/cockroachdb/cockroach) - Armazenamento de dados escalável, com replicação geográfica e transacional.
- [Coffer](https://github.com/claygod/coffer) - Banco de dados chave-valor ACID simples com suporte a transações.
- [column](https://github.com/kelindar/column) - Armazenamento em memória colunar, embutível e de alto desempenho, com indexação por bitmap e transações.
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL é um banco de dados SQL sobre blockchain.
- [Databunker](https://github.com/paranoidguy/databunker) - Serviço de armazenamento de informações de identificação pessoal (PII) criado para cumprir a GDPR e a CCPA.
- [dgraph](https://github.com/dgraph-io/dgraph) - Banco de dados de grafos escalável, distribuído, de baixa latência e alta vazão.
- [DiceDB](https://github.com/DiceDB/dice) - Banco de dados em memória de código aberto, rápido e reativo, otimizado para hardware moderno. Maior vazão e menores latências medianas, o que o torna ideal para cargas de trabalho modernas.
- [diskv](https://github.com/peterbourgon/diskv) - Armazenamento chave-valor caseiro baseado em disco.
- [dolt](https://github.com/dolthub/dolt) - Dolt – É o Git para dados.
- [eliasdb](https://github.com/krotik/eliasdb) - Banco de dados de grafos transacional e sem dependências, com API REST, busca por frases e linguagem de consulta semelhante ao SQL.
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - Banco de dados embutido semelhante ao MongoDB, escrito em Go puro. Suporta indexação e consultas complexas.
- [go-sqlite](https://github.com/glebarez/go-sqlite) – Driver SQLite implementado em Golang puro, sem CGO.
- [godis](https://github.com/hdt3213/godis) - Servidor e cluster Redis de alto desempenho implementados em Golang.
- [goleveldb](https://github.com/syndtr/goleveldb) - Implementação em Go do banco de dados chave/valor [LevelDB](https://github.com/google/leveldb).
- [hare](https://github.com/jameycribbs/hare) - Sistema de gerenciamento de banco de dados simples que armazena cada tabela como um arquivo de texto de JSON delimitado por linhas.
- [immudb](https://github.com/codenotary/immudb) - immudb é um banco de dados imutável, leve e de alta velocidade para sistemas e aplicações, escrito em Go.
- [influxdb](https://github.com/influxdb/influxdb) - Armazenamento de dados escalável para métricas, eventos e análises em tempo real.
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb é um NoSQL de alto desempenho semelhante ao Redis, baseado no LevelDB.
- [levigo](https://github.com/jmhodges/levigo) - Levigo é um wrapper Go para o LevelDB.
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB é um banco de dados simples, com menos de 1000 linhas de código, para aprendizado.
- [LinDB](https://github.com/lindb/lindb) - LinDB é um banco de dados de séries temporais distribuído, escalável, de alto desempenho e alta disponibilidade.
- [lotusdb](https://github.com/flower-corp/lotusdb) - Banco de dados k/v rápido compatível com lsm e b+tree.
- [lynxdb](https://github.com/lynxbase/lynxdb) - Banco de dados colunar leve para análise de logs, com uma linguagem de consulta no estilo pipe inspirada no SPL.
- [MemHop](https://github.com/qyiun666/MemHop) - Banco de dados de memória cognitiva embutido para agentes de IA. Arquitetura de seis camadas (L0-L5), pipeline de consolidação Dream, recuperação RRF em três canais (BM25 + vetor f16 + entidade), arquivo .meh único, Go puro, zero infraestrutura.
- [Milvus](https://github.com/milvus-io/milvus) - Milvus é um banco de dados vetorial para gerenciamento, análise e busca de embeddings.
- [minisql](https://github.com/RichardKnop/minisql) - Banco de dados SQL embutido em arquivo único.
- [moss](https://github.com/couchbase/moss) - Moss é uma engine de armazenamento chave-valor LSM simples, escrita 100% em Go.
- [nanotdb](https://github.com/aymanhs/nanotdb) - Banco de dados de séries temporais e dashboard leves, sem dependências e append-only, otimizados para hardware de baixo consumo.
- [NoKV](https://github.com/feichai0017/NoKV) - Serviço de metadados nativo para sistemas de arquivos distribuídos, armazenamento de objetos e cargas de trabalho de datasets de IA.
- [NornicDB](https://github.com/orneryd/NornicDB) - Banco de dados de grafos + vetorial de alto desempenho (compatível com Neo4j e qDrant), focado em recuperação graph-rag de baixa latência para sistemas de IA.
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb é um armazenamento chave/valor simples, rápido, embutível e persistente, escrito em Go puro. Suporta transações totalmente serializáveis e muitas estruturas de dados, como list, set e sorted set.
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Banco de dados de objetos (NoSQL) embutido e de alto desempenho com API Go.
- [pebble](https://github.com/cockroachdb/pebble) - Banco de dados chave-valor em Go inspirado no RocksDB/LevelDB.
- [piladb](https://github.com/fern4lvarez/piladb) - Engine de banco de dados RESTful leve baseada em estruturas de dados de pilha.
- [pogreb](https://github.com/akrylysov/pogreb) - Armazenamento chave-valor embutido para cargas de trabalho com muita leitura.
- [prometheus](https://github.com/prometheus/prometheus) - Sistema de monitoramento e banco de dados de séries temporais.
- [pudge](https://github.com/recoilme/pudge) - Armazenamento chave/valor rápido e simples escrito com a biblioteca padrão do Go.
- [redka](https://github.com/nalgeon/redka) - Redis reimplementado com SQLite.
- [rosedb](https://github.com/roseduan/rosedb) - Banco de dados k-v embutido baseado em LSM+WAL, com suporte a string, list, hash, set e zset.
- [rotom](https://github.com/xgzlucario/rotom) - Servidor Redis minúsculo construído com Golang, compatível com os protocolos RESP.
- [rqlite](https://github.com/rqlite/rqlite) - O banco de dados relacional leve e distribuído construído sobre o SQLite.
- [tempdb](https://github.com/rafaeljesus/tempdb) - Armazenamento chave-valor para itens temporários.
- [tidb](https://github.com/pingcap/tidb) - TiDB é um banco de dados SQL distribuído. Inspirado no design do Google F1.
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Seu banco de dados NoSQL movido a Golang.
- [unitdb](https://github.com/unit-io/unitdb) - Banco de dados de séries temporais rápido para IoT e aplicações de mensagens em tempo real. Acesse o unitdb com pubsub sobre tcp ou websocket usando a aplicação github.com/unit-io/unitd.
- [Vasto](https://github.com/chrislusf/vasto) - Armazenamento chave-valor distribuído de alto desempenho. Em disco. Consistência eventual. Alta disponibilidade. Capaz de crescer ou encolher sem interrupção do serviço.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - Banco de dados de séries temporais de código aberto rápido, eficiente no uso de recursos e escalável. Pode ser usado como armazenamento remoto de longo prazo para o Prometheus. Suporta PromQL.
- 
### Migração de esquemas de banco de dados

- [atlas](https://github.com/ariga/atlas) - Kit de ferramentas para bancos de dados. Uma CLI projetada para ajudar empresas a trabalhar melhor com seus dados.
- [avro](https://github.com/khezen/avro) - Descubra esquemas SQL e converta-os em esquemas AVRO. Consulte registros SQL como bytes AVRO.
- [bytebase](https://github.com/bytebase/bytebase) - Alteração segura de esquemas de banco de dados e controle de versão para equipes de DevOps.
- [darwin](https://github.com/GuiaBolso/darwin) - Biblioteca de evolução de esquemas de banco de dados para Go.
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - CLI para migrações versionadas de esquemas de banco de dados com suporte a PostgreSQL, MySQL, ClickHouse, Tarantool e Apache Iceberg.
- [dbmate](https://github.com/amacneil/dbmate) - Ferramenta de migração de banco de dados leve e independente de framework.
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Fixtures no estilo Django para a excelente biblioteca nativa database/sql do Golang.
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - Pacote amigável para CLI para gerenciar migrações do go-pg.
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - Pacote Go para ajudar a escrever migrações com go-pg/pg.
- [goavro](https://github.com/linkedin/goavro) - Pacote Go que codifica e decodifica dados Avro.
- [godfish](https://github.com/rafaelespinoza/godfish) - Gerenciador de migrações de banco de dados que funciona com a linguagem de consulta nativa. Suporte a cassandra, mysql, postgres e sqlite3.
- [goose](https://github.com/pressly/goose) - Ferramenta de migração de banco de dados. Você pode gerenciar a evolução do seu banco de dados criando scripts SQL ou Go incrementais.
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Seeder de banco de dados simples para o ORM Gorm.
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Auxiliar de migração de esquemas de banco de dados para o ORM Gorm.
- [libschema](https://github.com/muir/libschema) - Defina suas migrações separadamente em cada biblioteca. Migrações para bibliotecas de código aberto. MySQL e PostgreSQL.
- [migrate](https://github.com/golang-migrate/migrate) - Migrações de banco de dados. CLI e biblioteca Golang.
- [migrator](https://github.com/lopezator/migrator) - Biblioteca de migração de banco de dados para Go extremamente simples.
- [migrator](https://github.com/larapulse/migrator) - Migrador de banco de dados MySQL projetado para executar migrações das suas funcionalidades e gerenciar atualizações de esquema com código Go intuitivo.
- [schema](https://github.com/adlio/schema) - Biblioteca para embutir migrações de esquema para bancos de dados compatíveis com database/sql nos seus binários Go.
- [skeema](https://github.com/skeema/skeema) - Sistema de gerenciamento de esquemas em SQL puro para MySQL, com suporte a sharding e a ferramentas externas de alteração de esquema online.
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - Migração e criação de bancos de dados, ORM etc... para MySQL, PostgreSQL e SQLite.
- [sql-migrate](https://github.com/rubenv/sql-migrate) - Ferramenta de migração de banco de dados. Permite embutir migrações na aplicação usando go-bindata.
- [sqlize](https://github.com/sunary/sqlize) - Gerador de migrações de banco de dados. Permite gerar migrações SQL a partir do modelo e do SQL existente, comparando as diferenças entre eles.

### Ferramentas de banco de dados

- [chproxy](https://github.com/Vertamedia/chproxy) - Proxy HTTP para o banco de dados ClickHouse.
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - Coleta pequenos inserts e envia grandes requisições aos servidores ClickHouse.
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - Parser de SQL no dialeto do ClickHouse que produz uma AST tipada, com helpers de travessia, formatação round-trip e uma CLI.
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - Execute SQL em produção com ACLs, logs e links compartilhados.
- [dbbench](https://github.com/sj14/dbbench) - Ferramenta de benchmarking de bancos de dados com suporte a vários bancos de dados e scripts.
- [dg](https://github.com/codingconcepts/dg) - Gerador de dados rápido que produz arquivos CSV a partir de dados relacionais gerados.
- [filesql](https://github.com/nao1215/filesql) - Consulte arquivos CSV, TSV, LTSV, JSON, JSONL, Parquet, Excel, ACH e Fedwire com SQL por meio da API database/sql, com SQLite em memória por trás.
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - Gateway de banco de dados cloud native e framework para criar aplicações orientadas a dados. Como gateways de API, mas para bancos de dados.
- [go-mysql](https://github.com/siddontang/go-mysql) - Conjunto de ferramentas Go para lidar com o protocolo e a replicação do MySQL.
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - Backups serverless do PostgreSQL para o S3 usando AWS Lambda, com rotação diária, mensal e anual.
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - Suporte a multilocação (multi-tenancy) para bancos de dados gerenciados pelo GORM.
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - Parser, formatador, linter e scanner de segurança de SQL de alto desempenho, com suporte a vários dialetos e playground em WASM.
- [hasql](https://golang.yandex/hasql) - Biblioteca para acessar instalações de bancos de dados SQL com múltiplos hosts.
- [octillery](https://github.com/knocknote/octillery) - Pacote Go para sharding de bancos de dados ( suporta qualquer ORM ou SQL puro ).
- [onedump](https://github.com/liweiyi88/onedump) - Backup de bancos de dados de diferentes drivers para diferentes destinos com um único comando e configuração.
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - Agendamento avançado para PostgreSQL.
- [pgrwl](https://github.com/pgrwl/pgrwl) - Backup contínuo cloud native para PostgreSQL.
- [pgwd](https://github.com/hrodrig/pgwd) - CLI que monitora a contagem de conexões do PostgreSQL (totais, ativas, ociosas, obsoletas) e notifica via Slack e/ou Loki quando os limites são excedidos. Suporta Kubernetes (kubectl port-forward) e contexto de execução opcional nas notificações.
- [pgweb](https://github.com/sosedoff/pgweb) - Navegador de bancos de dados PostgreSQL baseado na web.
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Cliente de CLI para PostgreSQL escrito em Go, inspirado no pgcli.
- [prep](https://github.com/hexdigest/prep) - Use prepared statements SQL sem alterar seu código.
- [pREST](https://github.com/prest/prest) - Simplifique e acelere o desenvolvimento, ⚡ instantâneo, em tempo real e de alto desempenho em qualquer aplicação Postgres, existente ou nova.
- [rdb](https://github.com/HDT3213/rdb) - Parser de arquivos RDB do Redis para desenvolvimento secundário e análise de memória.
- [rwdb](https://github.com/andizzle/rwdb) - rwdb oferece capacidade de réplicas de leitura para configurações com vários servidores de banco de dados.
- [sqly](https://github.com/nao1215/sqly) - Execute SQL em arquivos CSV, TSV, LTSV, JSON, Parquet e Excel em um shell interativo, com SQLite em memória por trás.
- [vitess](https://github.com/youtube/vitess) - vitess fornece servidores e ferramentas que facilitam o escalonamento de bancos de dados MySQL para serviços web de grande escala.
- [wescale](https://github.com/wesql/wescale) - WeScale é um proxy de banco de dados projetado para melhorar a escalabilidade, o desempenho, a segurança e a resiliência das suas aplicações.
- [xsql](https://github.com/zx06/xsql) - Ferramenta de CLI multibanco com foco em IA, proteção somente leitura e saída JSON estruturada.

### Construtores de consultas SQL

_Bibliotecas para construir e usar SQL._

- [bqb](https://github.com/nullism/bqb) - Construtor de consultas leve e fácil de aprender.
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - Biblioteca Go de construção de consultas de banco de dados para PostgreSQL.
- [builq](https://github.com/cristalhq/builq) - Construa consultas SQL facilmente em Go.
- [dba](https://github.com/kran/dba) - Construtor de consultas SQL para SQL escrito à mão, que adiciona condições dinâmicas, placeholders cientes do dialeto e encadeamento imutável.
- [dbq](https://github.com/rocketlaunchr/dbq) - Operações de banco de dados sem boilerplate para Go.
- [Dotsql](https://github.com/gchaincl/dotsql) - Biblioteca Go que ajuda a manter arquivos SQL em um só lugar e usá-los com facilidade.
- [gendry](https://github.com/didi/gendry) - Construtor de SQL não invasivo e poderoso vinculador de dados.
- [godbal](https://github.com/xujiajun/godbal) - Camada de abstração de banco de dados (dbal) para Go. Suporta construção de SQL e obtenção de resultados com facilidade.
- [goqu](https://github.com/doug-martin/goqu) - Construtor de SQL e biblioteca de consultas idiomáticos.
- [gosql](https://github.com/twharmon/gosql) - Construtor de consultas SQL com melhor suporte a valores nulos.
- [Hotcoal](https://github.com/motrboat/hotcoal) - Proteja seu SQL escrito à mão contra injeção.
- [igor](https://github.com/galeone/igor) - Camada de abstração para PostgreSQL que suporta funcionalidades avançadas e usa sintaxe semelhante à do gorm.
- [jet](https://github.com/go-jet/jet) - Framework para escrever consultas SQL com segurança de tipos em Go, com a capacidade de converter facilmente o resultado da consulta em qualquer estrutura de objeto desejada.
- [obreron](https://github.com/profe-ajedrez/obreron) - Construtor de SQL rápido e barato que faz apenas uma coisa: construir SQL.
- [ormlite](https://github.com/pupizoid/ormlite) - Pacote leve com alguns recursos e helpers no estilo ORM para bancos de dados sqlite.
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - Métodos poderosos de recuperação de dados, além de recursos de construção de consultas independentes de banco de dados.
- [patcher](https://github.com/Jacobbrewer1/patcher) - Construtor de consultas SQL poderoso que gera automaticamente consultas SQL a partir de structs.
- [qrafter](https://github.com/SennovE/qrafter) - Construtor de consultas SQL com segurança de tipos, renderização ciente do dialeto, introspecção de esquema e geração de migrações.
- [qry](https://github.com/HnH/qry) - Ferramenta que gera constantes a partir de arquivos com consultas SQL puras.
- [relica](https://github.com/coregx/relica) - Construtor de consultas de banco de dados com segurança de tipos, zero dependências em produção, cache LRU de statements, operações em lote e suporte a JOINs, subconsultas, CTEs e funções de janela.
- [sg](https://github.com/go-the-way/sg) - Gerador de SQL para gerar SQLs padrão (suporta: CRUD), escrito em Go.
- [sq](https://github.com/bokwoon95/go-structured-query) - Construtor de SQL com segurança de tipos e mapeador de structs para Go.
- [sqlc](https://github.com/kyleconroy/sqlc) - Gere código com segurança de tipos a partir de SQL.
- [sqlcredo](https://github.com/Klojer/sqlcredo) - Pacote para operações CRUD genéricas em SQL com segurança de tipos, com paginação, transações, depuração e extensões personalizadas de SQL puro.
- [sqlf](https://github.com/leporo/sqlf) - Construtor de consultas SQL rápido.
- [sqlh](https://github.com/kirill-scherba/sqlh) - Helper de SQL sem boilerplate com struct tags e generics do Go (CRUD, UPSERT, JOIN, benchmarks).
- [sqlingo](https://github.com/lqs/sqlingo) - DSL leve para construir SQL em Go.
- [sqrl](https://github.com/elgris/sqrl) - Construtor de consultas SQL, fork do Squirrel com desempenho aprimorado.
- [Squalus](https://gitlab.com/qosenergy/squalus) - Camada fina sobre o pacote SQL do Go que facilita a execução de consultas.
- [Squirrel](https://github.com/Masterminds/squirrel) - Biblioteca Go que ajuda você a construir consultas SQL.
- [xo](https://github.com/knq/xo) - Gere código Go idiomático para bancos de dados com base em definições de esquema existentes ou em consultas personalizadas, com suporte a PostgreSQL, MySQL, SQLite, Oracle e Microsoft SQL Server.

**[⬆ voltar ao topo](#contents)**

## Drivers de banco de dados

### Interfaces para múltiplos backends

- [cayley](https://github.com/google/cayley) - Banco de dados de grafos com suporte a vários backends.
- [dsc](https://github.com/viant/dsc) - Conectividade de armazenamento de dados para SQL, NoSQL e arquivos estruturados.
- [dynamo](https://github.com/fogfish/dynamo) - Abstração chave-valor simples para armazenar tipos de dados algébricos e de dados vinculados nos serviços de armazenamento da AWS: AWS DynamoDB e AWS S3.
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - Gerenciador de transações com vários adaptadores (sql, sqlx, gorm, mongo, ...) que controla os limites das transações.
- [gokv](https://github.com/philippgille/gokv) - Abstração simples de armazenamento chave-valor e implementações para Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB e muitos outros).
- [transactor](https://github.com/metalfm/transactor) - Abstração de limites de transação com segurança de tipos, com adaptadores para database/sql, sqlx e pgx.

### Drivers de bancos de dados relacionais

- [avatica](https://github.com/apache/calcite-avatica-go) - Driver SQL do Apache Avatica/Phoenix para database/sql.
- [bgc](https://github.com/viant/bgc) - Conectividade de armazenamento de dados com o BigQuery para Go.
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Driver SQL do SGBD Firebird para Go.
- [go-adodb](https://github.com/mattn/go-adodb) - Driver Microsoft ActiveX Object DataBase para Go que usa database/sql.
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Driver Microsoft MSSQL para Go.
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Driver Go oficial da Microsoft para SQL Server, Azure SQL, Azure Synapse, SQL database no Fabric e Fabric Data Warehouse. Suporta Azure AD, Always Encrypted e operações em massa.
- [go-oci8](https://github.com/mattn/go-oci8) - Driver Oracle para Go que usa database/sql.
- [go-rqlite](https://github.com/rqlite/gorqlite) - Cliente Go para o rqlite, com abstrações fáceis de usar para trabalhar com a API do rqlite.
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Driver MySQL para Go.
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - Driver SQLite3 para Go que usa database/sql.
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - Este módulo Go é compatível com o driver database/sql. Permite embutir o SQLite na sua aplicação, oferece acesso direto à sua API C, suporta o VFS do SQLite e também inclui um driver GORM.
- [godror](https://github.com/godror/godror) - Driver Oracle para Go, usando o driver ODPI-C.
- [gofreetds](https://github.com/minus5/gofreetds) - Driver Microsoft MSSQL. Wrapper Go sobre o [FreeTDS](https://www.freetds.org).
- [KSQL](https://github.com/VinGarcia/ksql) - Biblioteca SQL para Golang simples e poderosa.
- [pgx](https://github.com/jackc/pgx) - Driver PostgreSQL com suporte a recursos além dos expostos pelo database/sql.
- [pig](https://github.com/alexeyco/pig) - Wrapper simples do [pgx](https://github.com/jackc/pgx) para executar consultas e fazer [scan](https://github.com/georgysavva/scany) dos resultados com facilidade.
- [pq](https://github.com/lib/pq) - Driver Postgres em Go puro para database/sql.
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - SQLite com Go puro.
- [sqlhooks](https://github.com/qustavo/sqlhooks) - Anexe hooks a qualquer driver database/sql.
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - O pacote sqlite é um driver sql/database que usa um port sem CGo da biblioteca C SQLite3.
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Driver do SurrealDB para Go.
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - Driver nativo e database/sql para o YDB (Yandex Database).

### Drivers de bancos de dados NoSQL

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Cliente Aerospike na linguagem Go.
- [arangolite](https://github.com/solher/arangolite) - Driver golang leve para o ArangoDB.
- [asc](https://github.com/viant/asc) - Conectividade de armazenamento de dados com o Aerospike para Go.
- [forestdb](https://github.com/couchbase/goforestdb) - Bindings Go para o ForestDB.
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Cliente Couchbase em Go.
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - Biblioteca Mongo para Go baseada no driver oficial, com operações de documentos simplificadas, vinculação genérica de structs a coleções, CRUD integrado, agregação, atualização automática de campos, validação de structs, hooks e programação baseada em plugins.
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Biblioteca cliente Go para o Pilosa.
- [go-rejson](https://github.com/nitishm/go-rejson) - Cliente Golang para o módulo ReJSON da redislabs usando o cliente golang Redigo. Armazene e manipule structs como objetos JSON no redis com facilidade.
- [gocb](https://github.com/couchbase/gocb) - SDK Go oficial do Couchbase.
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Cliente REST e driver padrão `database/sql` para o Azure Cosmos DB.
- [gocql](https://gocql.github.io) - Driver na linguagem Go para o Apache Cassandra.
- [godis](https://github.com/piaohao/godis) - Cliente redis implementado em golang, inspirado no jedis.
- [godscache](https://github.com/defcronyke/godscache) - Wrapper para o pacote Go Datastore do Google Cloud Platform que adiciona cache usando memcached.
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Biblioteca cliente memcache para a linguagem de programação Go.
- [gomemcached](https://github.com/aliexpressru/gomemcached) - Cliente Memcached binário para Go com suporte a sharding usando hashing consistente, além de SASL.
- [gorethink](https://github.com/dancannon/gorethink) - Driver na linguagem Go para o RethinkDB.
- [goriak](https://github.com/zegl/goriak) - Driver na linguagem Go para o Riak KV.
- [Kivik](https://github.com/go-kivik/kivik) - Kivik oferece uma biblioteca cliente comum para Go e GopherJS para CouchDB, PouchDB e bancos de dados semelhantes.
- [mgm](https://github.com/kamva/mgm) - ODM baseado em modelos para MongoDB em Go (baseado no driver oficial do MongoDB).
- [mgo](https://github.com/globalsign/mgo) - (sem manutenção) Driver MongoDB para a linguagem Go que implementa uma seleção rica e bem testada de recursos sob uma API muito simples que segue os idiomas padrão de Go.
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Driver oficial do MongoDB para a linguagem Go.
- [neo4j](https://github.com/cihangir/neo4j) - Bindings da API REST do Neo4j para Golang.
- [neoism](https://github.com/jmcvetta/neoism) - Cliente Neo4j para Golang.
- [qmgo](https://github.com/qiniu/qmgo) - Driver MongoDB para Go. É baseado no driver oficial do MongoDB, mas é mais fácil de usar, como o Mgo.
- [redeo](https://github.com/bsm/redeo) - Servidores/serviços TCP compatíveis com o protocolo Redis.
- [redigo](https://github.com/gomodule/redigo) - Redigo é um cliente Go para o banco de dados Redis.
- [redis](https://github.com/redis/go-redis) - Cliente Redis para Golang.
- [rueidis](http://github.com/rueian/rueidis) - Cliente Redis RESP3 rápido com pipelining automático e cache no lado do cliente assistido pelo servidor.
- [xredis](https://github.com/shomali11/xredis) - Cliente Redis com segurança de tipos, personalizável, limpo e fácil de usar.

### Bancos de dados de busca e análise

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - Cliente SQL do ClickHouse para Go, compatível com `database/sql`.
- [effdsl](https://github.com/sdqri/effdsl) - Construtor de consultas do Elasticsearch para Go.
- [elastic](https://github.com/olivere/elastic) - Cliente Elasticsearch para Go.
- [elasticsql](https://github.com/cch123/elasticsql) - Converta SQL para a DSL do Elasticsearch em Go.
- [elastigo](https://github.com/mattbaird/elastigo) - Biblioteca cliente do Elasticsearch.
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Cliente oficial do Elasticsearch para Go.
- [goes](https://github.com/OwnLocal/goes) - Biblioteca para interagir com o Elasticsearch.
- [skizze](https://github.com/skizzehq/skizze) - Serviço e armazenamento de estruturas de dados probabilísticas.
- [zoekt](https://github.com/sourcegraph/zoekt) - Busca de código rápida baseada em trigramas.

**[⬆ voltar ao topo](#contents)**

## Data e hora

_Bibliotecas para trabalhar com datas e horas._

- [approx](https://github.com/goschtalt/approx) - Extensão de Duration com suporte a parsing/impressão de durações em dias, semanas e anos.
- [carbon](https://github.com/dromara/carbon) - Pacote de tempo simples, semântico e amigável para desenvolvedores para golang.
- [carbon](https://github.com/uniplaces/carbon) - Extensão simples de Time com muitos métodos utilitários, portada da biblioteca Carbon do PHP.
- [cronrange](https://github.com/1set/cronrange) - Analisa expressões de intervalos de tempo no estilo Cron e verifica se um horário está dentro de algum dos intervalos.
- [date](https://github.com/rickb777/date) - Estende Time para trabalhar com datas, intervalos de datas, intervalos de tempo, períodos e horas do dia.
- [dateparse](https://github.com/araddon/dateparse) - Faça o parsing de datas sem conhecer o formato de antemão.
- [durafmt](https://github.com/hako/durafmt) - Biblioteca de formatação de durações de tempo para Go.
- [feiertage](https://github.com/wlbr/feiertage) - Conjunto de funções para calcular feriados na Alemanha, incluindo especificidades dos estados alemães (Bundesländer). Coisas como Páscoa, Pentecostes, Dia de Ação de Graças...
- [go-anytime](https://github.com/ijt/go-anytime) - Faça o parsing de datas/horas como "next dec 22nd at 3pm" e de intervalos como "from today until next thursday" sem conhecer o formato de antemão.
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - Biblioteca abrangente de utilitários de data para Go, inspirada no date-fns, com mais de 140 funções puras e imutáveis.
- [go-datebin](https://github.com/deatil/go-datebin) - Pacote simples de parsing de data e hora.
- [go-faketime](https://github.com/harkaitz/go-faketime) - Um `time.Now()` simples que respeita o utilitário faketime(1).
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - Implementação do calendário persa (Hégira Solar) em Go (golang).
- [go-str2duration](https://github.com/xhit/go-str2duration) - Converta strings em durações. Suporta a string retornada por time.Duration e mais.
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - Calcule os horários do nascer e do pôr do sol para um determinado local.
- [go-week](https://github.com/stoewer/go-week) - Pacote eficiente para trabalhar com datas de semana ISO8601.
- [gostradamus](https://github.com/bykof/gostradamus) - Pacote Go para trabalhar com datas.
- [iso8601](https://github.com/relvacode/iso8601) - Faça o parsing eficiente de datas e horas ISO8601 sem regex.
- [kair](https://github.com/GuilhermeCaruso/kair) - Data e hora - biblioteca de formatação para Golang.
- [now](https://github.com/jinzhu/now) - Now é um kit de ferramentas de tempo para golang.
- [strftime](https://github.com/awoodbeck/strftime) - Formatador strftime compatível com C99.
- [timespan](https://github.com/SaidinWoT/timespan) - Para interagir com intervalos de tempo, definidos como um horário de início e uma duração.
- [timeutil](https://github.com/leekchan/timeutil) - Extensões úteis (Timedelta, Strftime, ...) para o pacote time do golang.
- [tuesday](https://github.com/osteele/tuesday) - Função Strftime compatível com Ruby.

**[⬆ voltar ao topo](#contents)**

## Sistemas distribuídos

_Pacotes que ajudam na construção de sistemas distribuídos._

- [arpc](https://github.com/lesismal/arpc) - Comunicação de rede mais eficaz, com suporte a chamadas bidirecionais, notificações e broadcast.
- [bedrock](https://github.com/z5labs/bedrock) - Fornece uma base mínima, modular e componível para desenvolver rapidamente serviços e frameworks mais específicos para cada caso de uso em Go.
- [capillaries](https://github.com/capillariesio/capillaries) - Framework de processamento distribuído de dados em lote.
- [circuit](https://github.com/schigh/circuit) - Circuit breaker com recuperação gradual via throttling probabilístico.
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Biblioteca de alto desempenho do padrão command distribuído para Go.
- [committer](https://github.com/vadiminshakov/committer) - Sistema de gerenciamento de transações distribuídas (implementação de 2PC/3PC).
- [consistent](https://github.com/buraksezer/consistent) - Hashing consistente com cargas limitadas.
- [consistenthash](https://github.com/mbrostami/consistenthash) - Hashing consistente com réplicas configuráveis.
- [dht](https://github.com/anacrolix/dht) - Implementação da DHT Kademlia do BitTorrent.
- [digota](https://github.com/digota/digota) - Microsserviço de e-commerce em gRPC.
- [dot](https://github.com/dotchain/dot/) - Sincronização distribuída usando transformação operacional (OT).
- [doublejump](https://github.com/edwingeng/doublejump) - Versão reformulada do jump consistent hash do Google.
- [dragonboat](https://github.com/lni/dragonboat) - Biblioteca Raft multigrupo completa e de alto desempenho em Go.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - Oferece distribuição de arquivos e aceleração de imagens eficiente, estável e segura baseada em tecnologia p2p, para ser a melhor prática e a solução padrão em arquiteturas cloud native.
- [drmaa](https://github.com/dgruber/drmaa) - Biblioteca de submissão de jobs para escalonadores de clusters baseada no padrão DRMAA.
- [dynamolock](https://cirello.io/dynamolock) - Implementação de locks distribuídos baseada no DynamoDB.
- [dynatomic](https://github.com/tylfin/dynatomic) - Biblioteca para usar o DynamoDB como contador atômico.
- [emitter-io](https://github.com/emitter-io/emitter) - Plataforma publish-subscribe de alto desempenho, distribuída, segura e de baixa latência, construída com MQTT, Websockets e amor.
- [evans](https://github.com/ktr0731/evans) - Evans: cliente gRPC universal mais expressivo.
- [failured](https://github.com/andy2046/failured) - Detector de falhas adaptativo do tipo accrual para sistemas distribuídos.
- [flowgraph](https://github.com/vectaport/flowgraph) - Pacote de programação baseada em fluxo.
- [gleam](https://github.com/chrislusf/gleam) - Sistema map/reduce distribuído, rápido e escalável, escrito em Go puro e Luajit, que combina a alta concorrência do Go com o alto desempenho do Luajit; roda de forma independente ou distribuída.
- [glow](https://github.com/chrislusf/glow) - Processamento distribuído de big data escalável e fácil de usar, Map-Reduce e execução de DAGs, tudo em Go puro.
- [gmsec](https://github.com/gmsec/micro) - Framework de desenvolvimento de sistemas distribuídos em Go.
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - Framework de microsserviços descentralizado baseado em protocolo gossip e na especificação OpenAPI 3.0. A CLI go-doudou integrada, focada em low-code e desenvolvimento rápido, pode turbinar sua produtividade.
- [go-eagle](https://github.com/go-eagle/eagle) - Framework Go para APIs ou microsserviços com ferramentas práticas de scaffolding.
- [go-jump](https://github.com/dgryski/go-jump) - Port da função de hash consistente "Jump" do Google.
- [go-kit](https://github.com/go-kit/kit) - Kit de ferramentas para microsserviços com suporte a descoberta de serviços, balanceamento de carga, transportes plugáveis, rastreamento de requisições etc.
- [go-micro](https://github.com/micro/go-micro) - Framework de desenvolvimento de sistemas distribuídos.
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - Lock distribuído baseado em MySQL.
- [go-pdu](https://github.com/pdupub/go-pdu) - Rede social descentralizada baseada em identidade.
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Biblioteca criada para oferecer suporte à definição de health checks assíncronos para serviços golang.
- [go-zero](https://github.com/tal-tech/go-zero) - Framework web e RPC. Nasceu para garantir a estabilidade de sites movimentados com um design resiliente. O goctl integrado melhora muito a produtividade do desenvolvimento.
- [gorpc](https://github.com/valyala/gorpc) - Biblioteca RPC simples, rápida e escalável para alta carga.
- [grpc-go](https://github.com/grpc/grpc-go) - Implementação do gRPC na linguagem Go. RPC baseado em HTTP/2.
- [health](https://github.com/schigh/health) - Verificador de saúde para serviços Go com suporte a probes do Kubernetes.
- [hprose](https://github.com/hprose/hprose-golang) - Biblioteca RPC muito inovadora, que já suporta mais de 25 linguagens.
- [jsonrpc](https://github.com/osamingo/jsonrpc) - O pacote jsonrpc ajuda a implementar JSON-RPC 2.0.
- [jsonrpc](https://github.com/ybbus/jsonrpc) - Implementação de cliente HTTP JSON-RPC 2.0.
- [K8gb](https://github.com/k8gb-io/k8gb) - Balanceador global cloud native para Kubernetes.
- [Kitex](https://github.com/cloudwego/kitex) - Framework RPC em Golang de alto desempenho e altamente extensível que ajuda desenvolvedores a criar microsserviços. Se desempenho e extensibilidade são suas principais preocupações ao desenvolver microsserviços, o Kitex pode ser uma boa escolha.
- [Kratos](https://github.com/go-kratos/kratos) - Framework de microsserviços em Go com design modular e fácil de usar.
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - Streams de mensagens leves e tolerantes a falhas para o NATS.
- [lock](https://github.com/ubgo/lock) - Família de locks distribuídos com uma interface Go e cinco backends (filelock, flock, Redis, Postgres, etcd) — fencing tokens, modo semáforo e hooks de observabilidade em todos os backends.
- [lura](https://github.com/luraproject/lura) - Framework de API Gateway de altíssimo desempenho com middlewares.
- [mochi mqtt](https://github.com/mochi-co/mqtt) - Broker MQTT v5/v3 embutível e de alto desempenho, totalmente compatível com a especificação, para IoT, casas inteligentes e pubsub.
- [NATS](https://github.com/nats-io/nats-server) - NATS é um sistema de comunicação simples, seguro e de alto desempenho para sistemas, serviços e dispositivos digitais.
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Instrumentação do OpenTelemetry em tempo de compilação para Golang.
- [oras](https://github.com/oras-project/oras) - CLI e biblioteca para artefatos OCI em registries de contêineres.
- [outbox](https://github.com/oagudo/outbox) - Biblioteca leve para o padrão transactional outbox em Go, sem vínculo com nenhum banco de dados relacional ou broker específico.
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer é uma biblioteca Go que implementa o padrão outbox.
- [pglock](https://cirello.io/pglock) - Implementação de locks distribuídos baseada no PostgreSQL.
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Servidor e cliente JSON-RPC em Golang com especificação Protobuf.
- [raft](https://github.com/hashicorp/raft) - Implementação em Golang do protocolo de consenso Raft, da HashiCorp.
- [raft](https://github.com/etcd-io/raft) - Implementação em Go do protocolo de consenso Raft, da CoreOS.
- [rain](https://github.com/cenkalti/rain) - Cliente e biblioteca BitTorrent.
- [redis-lock](https://github.com/bsm/redislock) - Implementação simplificada de locks distribuídos usando Redis.
- [resgate](https://resgate.io/) - API Gateway em tempo real para criar APIs REST, em tempo real e RPC, em que todos os clientes são sincronizados de forma transparente.
- [rpcplatform](https://github.com/nexcode/rpcplatform) - Framework para microsserviços com descoberta de serviços, balanceamento de carga e recursos relacionados.
- [rpcx](https://github.com/smallnest/rpcx) - Framework de serviços RPC distribuído e plugável, semelhante ao Dubbo da alibaba.
- [Semaphore](https://github.com/jexia/semaphore) - Orquestrador de (micro)serviços direto ao ponto.
- [servicepack](https://github.com/psyb0t/servicepack) - Framework para executar vários serviços concorrentemente em um único binário, localmente ou distribuídos entre máquinas.
- [sleuth](https://github.com/ursiform/sleuth) - Biblioteca para descoberta automática p2p sem nó mestre e RPC entre serviços HTTP (usando [ZeroMQ](https://github.com/zeromq/libzmq)).
- [sponge](https://github.com/zhufuyi/sponge) - Framework de desenvolvimento distribuído que integra geração automática de código, os frameworks gin e grpc e frameworks de desenvolvimento básicos.
- [Tarmac](https://github.com/tarmac-project/tarmac) - Framework para escrever funções, microsserviços ou monólitos com WebAssembly
- [Temporal](https://github.com/temporalio/sdk-go) - Sistema de execução durável para tornar o código tolerante a falhas e simples.
- [torrent](https://github.com/anacrolix/torrent) - Pacote cliente BitTorrent.
- [trpc-go](https://github.com/trpc-group/trpc-go) - Implementação na linguagem Go do tRPC, um framework RPC plugável e de alto desempenho.

**[⬆ voltar ao topo](#contents)**

## DNS dinâmico

_Ferramentas para atualizar registros de DNS dinâmico._

- [DDNS](https://github.com/skibish/ddns) - Cliente DDNS pessoal com o DNS do Digital Ocean Networking como backend.
- [dyndns](https://gitlab.com/alcastle/dyndns) - Processo Go em segundo plano que verifica de forma regular e automática seu endereço IP e atualiza (um ou vários) registros de DNS dinâmico de domínios do Google sempre que seu endereço muda.
- [GoDNS](https://github.com/timothyye/godns) - Ferramenta cliente de DNS dinâmico, com suporte a DNSPod e HE.net, escrita em Go.

**[⬆ voltar ao topo](#contents)**

## E-mail

_Bibliotecas e ferramentas que implementam a criação e o envio de e-mails._

- [chasquid](https://blitiri.com.ar/p/chasquid) - Servidor SMTP escrito em Go.
- [douceur](https://github.com/aymerick/douceur) - Inliner de CSS para seus e-mails HTML.
- [email](https://github.com/jordan-wright/email) - Biblioteca de e-mail robusta e flexível para Go.
- [email-verifier](https://github.com/AfterShip/email-verifier) - Biblioteca Go para verificação de e-mails sem enviar nenhum e-mail.
- [go-dkim](https://github.com/toorop/go-dkim) - Biblioteca DKIM para assinar e verificar e-mails.
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - Biblioteca Golang que fornece uma representação canônica de endereços de e-mail.
- [go-imap](https://github.com/BrianLeishman/go-imap) - Cliente IMAP completo, com reconexão automática, OAuth2, suporte a IDLE e parsing de MIME integrado.
- [go-imap](https://github.com/emersion/go-imap) - Biblioteca IMAP para clientes e servidores.
- [go-mail](https://github.com/wneessen/go-mail) - Biblioteca Go simples para enviar e-mails em Go.
- [go-message](https://github.com/emersion/go-message) - Biblioteca de streaming para o Internet Message Format e mensagens de e-mail.
- [go-premailer](https://github.com/vanng822/go-premailer) - Estilos inline para e-mails HTML em Go.
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - Pacote muito simples para enviar e-mails com SMTP Keep Alive e dois timeouts: Connect e Send.
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Cliente para a API SpamCheck da Postmark, que pontua um e-mail bruto segundo as regras do SpamAssassin.
- [Hectane](https://github.com/hectane/hectane) - Cliente SMTP leve que fornece uma API HTTP.
- [hermes](https://github.com/matcornic/hermes) - Pacote Golang que gera e-mails HTML limpos e responsivos.
- [Maddy](https://github.com/foxcpp/maddy) - Servidor de e-mail tudo em um (SMTP, IMAP, DKIM, DMARC, MTA-STS, DANE)
- [mailchain](https://github.com/mailchain/mailchain) - Envie e-mails criptografados para endereços de blockchain; escrito em Go.
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Biblioteca Go para enviar e-mails com a API do Mailgun.
- [MailHog](https://github.com/mailhog/MailHog) - Testes de e-mail e SMTP com interface web e API.
- [Mailpit](https://github.com/axllent/mailpit) - Ferramenta de testes de e-mail e SMTP para desenvolvedores.
- [mailx](https://github.com/valord577/mailx) - Mailx é uma biblioteca que facilita o envio de e-mails via SMTP. É um aprimoramento da biblioteca padrão do golang `net/smtp`.
- [mox](https://github.com/mjl-/mox) - Servidor de e-mail moderno, completo e seguro para e-mail auto-hospedado de baixa manutenção.
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - Biblioteca Go da SendGrid para enviar e-mails.
- [smtp](https://github.com/mailhog/smtp) - Máquina de estados do protocolo de servidor SMTP.
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - Servidor SMTP falso, leve, configurável e multithread. Imite qualquer comportamento SMTP no seu ambiente de testes.
- [tickstem/verify](https://github.com/tickstem/verify) - Valide endereços de e-mail antes que cheguem ao seu banco de dados: sintaxe, consulta MX, domínios descartáveis e caixas de entrada baseadas em funções.
- [truemail-go](https://github.com/truemail-rb/truemail-go) - Validador/verificador de e-mails configurável em Golang. Verifique e-mails via regex, DNS, SMTP e muito mais.

**[⬆ voltar ao topo](#contents)**

## Linguagens de script embutíveis

_Como embutir outras linguagens no seu código Go._

- [anko](https://github.com/mattn/anko) - Interpretador programável escrito em Go.
- [binder](https://github.com/alexeyco/binder) - Biblioteca de binding de Go para Lua, baseada no [gopher-lua](https://github.com/yuin/gopher-lua).
- [cel-go](https://github.com/google/cel-go) - Avaliação de expressões rápida, portável e não Turing-completa, com tipagem gradual.
- [ecal](https://github.com/krotik/ecal) - Linguagem de script simples e embutível com suporte a processamento concorrente de eventos.
- [expr](https://github.com/antonmedv/expr) - Engine de avaliação de expressões para Go: rápida, não Turing-completa, com tipagem dinâmica e estática.
- [FrankenPHP](https://github.com/dunglas/frankenphp) - PHP embutido em Go, com um handler `net/http`.
- [gentee](https://github.com/gentee/gentee) - Linguagem de programação de script embutível.
- [gisp](https://github.com/jcla1/gisp) - LISP simples em Go.
- [go-lua](https://github.com/Shopify/go-lua) - Port da VM do Lua 5.2 para Go puro.
- [go-lua](https://github.com/speedata/go-lua) - VM do Lua 5.4 implementada em Go puro.
- [go-php](https://github.com/deuill/go-php) - Bindings de PHP para Go.
- [goal](https://codeberg.org/anaseto/goal) - Linguagem de script orientada a arrays e embutível.
- [goja](https://github.com/dop251/goja) - Implementação do ECMAScript 5.1(+) em Go.
- [golua](https://github.com/aarzilli/golua) - Bindings Go para a API C do Lua.
- [gopher-lua](https://github.com/yuin/gopher-lua) - VM e compilador do Lua 5.1 escritos em Go.
- [gval](https://github.com/PaesslerAG/gval) - Linguagem de expressões altamente personalizável escrita em Go.
- [metacall](https://github.com/metacall/core) - Runtime poliglota multiplataforma com suporte a NodeJS, JavaScript, TypeScript, Python, Ruby, C#, WebAssembly, Java, Cobol e mais.
- [ngaro](https://github.com/db47h/ngaro) - Implementação embutível da VM Ngaro que permite scripts em Retro.
- [prolog](https://github.com/ichiban/prolog) - Prolog embutível.
- [purl](https://github.com/ian-kent/purl) - Perl 5.18.2 embutido em Go.
- [starlark-go](https://github.com/google/starlark-go) - Implementação em Go do Starlark: linguagem semelhante ao Python com avaliação determinística e execução hermética.
- [starlet](https://github.com/1set/starlet) - Wrapper Go para o [starlark-go](https://github.com/google/starlark-go) que simplifica a execução de scripts e oferece conversão de dados e bibliotecas e extensões úteis do Starlark.
- [tengo](https://github.com/d5/tengo) - Linguagem de script compilada para bytecode para Go.
- [Wa/凹语言](https://github.com/wa-lang/wa) - A linguagem de programação Wa embutida em Go.

**[⬆ voltar ao topo](#contents)**

## Tratamento de erros

_Bibliotecas para tratamento de erros._

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - Encapsule erros com o arquivo, a linha e o nome da função de cada ponto de chamada.
- [emperror](https://github.com/emperror/emperror) - Ferramentas e boas práticas de tratamento de erros para bibliotecas e aplicações Go.
- [eris](https://github.com/rotisserie/eris) - Uma forma melhor de tratar, rastrear e registrar erros em Go. Compatível com a biblioteca padrão de erros e com github.com/pkg/errors.
- [errlog](https://github.com/snwfdhmp/errlog) - Pacote hackeável que determina o código-fonte responsável por um erro (e alguns outros recursos de depuração rápida). Pode ser conectado a qualquer logger existente.
- [errors](https://github.com/emperror/errors) - Substituto direto do pacote errors da biblioteca padrão e de github.com/pkg/errors. Fornece várias primitivas de tratamento de erros.
- [errors](https://github.com/neuronlabs/errors) - Tratamento de erros simples em golang com primitivas de classificação.
- [errors](https://github.com/PumpkinSeed/errors) - O wrapper de erros mais simples, com desempenho incrível e sobrecarga mínima de memória.
- [errors](https://gitlab.com/tozd/go/errors) - Fornece erros com stack trace e detalhes estruturados opcionais. Compatível com a API de github.com/pkg/errors, mas não a usa internamente.
- [errors](https://github.com/naughtygopher/errors) - Substituto direto para os erros nativos do Go. É um pacote mínimo de tratamento de erros com tipos de erro personalizados, mensagens amigáveis, Unwrap e Is. Com funções auxiliares muito fáceis de usar e diretas.
- [errors](https://github.com/cockroachdb/errors) - Biblioteca de erros Go com portabilidade de erros pela rede.
- [errorx](https://github.com/joomcode/errorx) - Pacote de erros rico em recursos, com stack traces, composição de erros e mais.
- [exception](https://github.com/rbrahul/exception) - Pacote utilitário simples para tratamento de exceções com try-catch em Golang.
- [Falcon](https://github.com/SonicRoshan/falcon) - Pacote simples, porém muito poderoso, para tratamento de erros.
- [Fault](https://github.com/Southclaws/fault) - Mecanismo ergonômico para encapsular erros, facilitando metadados estruturados e contexto para valores de erro.
- [go-errr](https://github.com/go-errr/go) - Biblioteca de tratamento de erros para Go com semântica Catch/Recover, cadeias de erros encapsulados e stack traces.
- [go-multierror](https://github.com/hashicorp/go-multierror) - Pacote Go (golang) para representar uma lista de erros como um único erro.
- [metaerr](https://github.com/quantumcycle/metaerr) - Biblioteca para criar seus próprios construtores de erros, que produzem erros estruturados com metadados de diferentes fontes e stack traces opcionais.
- [multierr](https://github.com/uber-go/multierr) - Pacote para representar uma lista de erros como um único erro.
- [oops](https://github.com/samber/oops) - Tratamento de erros com contexto, stack trace e fragmentos do código-fonte.
- [tracerr](https://github.com/ztrue/tracerr) - Erros em Golang com stack trace e fragmentos do código-fonte.

**[⬆ voltar ao topo](#contents)**

## Manipulação de arquivos

_Bibliotecas para manipular arquivos e sistemas de arquivos._

- [afero](https://github.com/spf13/afero) - Sistema de abstração de sistemas de arquivos para Go.
- [afs](https://github.com/viant/afs) - Armazenamento abstrato de arquivos (mem, scp, zip, tar, nuvem: s3, gs) para Go.
- [baraka](https://github.com/xis/baraka) - Biblioteca para processar uploads de arquivos via HTTP com facilidade.
- [checksum](https://github.com/codingsince1985/checksum) - Calcule resumos de mensagens, como MD5, SHA256, SHA1, CRC ou BLAKE2s, para arquivos grandes.
- [copy](https://github.com/otiai10/copy) - Copie diretórios recursivamente.
- [fastwalk](https://github.com/charlievieth/fastwalk) - Biblioteca rápida de travessia paralela de diretórios (usada pelo [fzf](https://github.com/junegunn/fzf)).
- [flop](https://github.com/homedepot/flop) - Biblioteca de operações com arquivos que busca paridade de recursos com o [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html).
- [gdu](https://github.com/dundee/gdu) - Analisador de uso de disco com interface de console.
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - Carregue arquivos CSV usando tags.
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - Cópia de arquivos para humanos.
- [go-exiftool](https://github.com/barasher/go-exiftool) - Bindings Go para o ExifTool, a conhecida biblioteca usada para extrair o máximo possível de metadados (EXIF, IPTC, ...) de arquivos (imagens, PDF, office, ...).
- [go-gtfs](https://github.com/artonge/go-gtfs) - Carregue arquivos GTFS em Go.
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - Pacote para converter um template HTML em um arquivo PDF.
- [goflat](https://github.com/lzambarda/goflat) - Marshaler/unmarshaler genérico de arquivos planos ciente de contexto.
- [gofs](https://github.com/no-src/gofs) - Ferramenta multiplataforma de sincronização de arquivos em tempo real, pronta para uso.
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Processamento de PDF/A para Go.
- [gulter](https://github.com/adelowo/gulter) - Middleware HTTP simples para lidar automaticamente com todas as suas necessidades de upload de arquivos
- [gut/yos](https://github.com/1set/gut) - Pacote simples e confiável para operações como copiar/mover/comparar/listar arquivos, diretórios e links simbólicos.
- [gxpdf](https://github.com/coregx/gxpdf) - Biblioteca de PDF moderna para Go que cobre todo o ciclo de vida — analise, extraia tabelas, gere e assine documentos sem nenhuma dependência de CGO.
- [higgs](https://github.com/dastoori/higgs) - Pequena biblioteca Go multiplataforma para ocultar/exibir arquivos e diretórios.
- [iso9660](https://github.com/kdomanski/iso9660) - Pacote para ler e criar imagens de disco ISO9660
- [notify](https://github.com/rjeczalik/notify) - Biblioteca de notificação de eventos do sistema de arquivos com API simples, semelhante a os/signal.
- [opc](https://github.com/qmuntal/opc) - Carregue arquivos Open Packaging Conventions (OPC) em Go.
- [parquet](https://github.com/parsyl/parquet) - Leia e escreva arquivos [parquet](https://parquet.apache.org).
- [pathtype](https://github.com/jonchun/pathtype) - Trate caminhos como um tipo próprio em vez de usar strings.
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - Processador de PDF.
- [skywalker](https://github.com/dixonwille/skywalker) - Pacote que permite percorrer um sistema de arquivos de forma concorrente com facilidade.
- [todotxt](https://github.com/1set/todotxt) - Biblioteca Go para os arquivos [_todo.txt_](http://todotxt.org/) de Gina Trapani, com suporte a parsing e manipulação de listas de tarefas no [formato _todo.txt_](https://github.com/todotxt/todo.txt).
- [vfs](https://github.com/C2FO/vfs) - Conjunto plugável, extensível e opinativo de funcionalidades de sistema de arquivos para Go, abrangendo vários tipos de sistemas de arquivos, como os, S3 e GCS.

**[⬆ voltar ao topo](#contents)**

## Finanças

_Pacotes para contabilidade e finanças._

- [accounting](https://github.com/leekchan/accounting) - Formatação de dinheiro e moedas para golang.
- [ach](https://github.com/moov-io/ach) - Leitor, gravador e validador de arquivos Automated Clearing House (ACH).
- [bbgo](https://github.com/c9s/bbgo) - Framework de bots de trading de criptomoedas escrito em Go. Inclui API comum para exchanges de criptomoedas, indicadores padrão, backtesting e muitas estratégias integradas.
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - Cliente Go para a API v3 da BingX com mais de 260 métodos, futuros USDT-M/Coin-M, spot, TradFi, streams WebSocket e copy trading.
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Cliente Go para a API UTA v3 da Bitget com modelos tipados, preços baseados em strings, WebSocket com reconexão automática e trading de demonstração.
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Cliente Go para a API V5 da Bybit com autenticação HMAC/RSA, streams WebSocket, trading de demonstração e instrumentos TradFi.
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - Cliente para o Fear & Greed Index da CNN, com os sete indicadores que o compõem e cerca de um ano de histórico diário.
- [currency](https://github.com/bojanz/currency) - Lida com valores monetários e fornece informações e formatação de moedas.
- [currency](https://github.com/naughtygopher/currency) - Pacote de cálculos monetários preciso e de alto desempenho.
- [dec128](https://github.com/jokruger/dec128) - Números decimais de ponto fixo de 128 bits de alto desempenho.
- [decimal](https://github.com/shopspring/decimal) - Números decimais de ponto fixo com precisão arbitrária.
- [decimal](https://github.com/aytechnet/decimal) - Decimal de 64 bits de alto desempenho, parcialmente compatível com [shopspring/decimal](https://github.com/shopspring/decimal) e int64, incluindo Weight e Length.
- [decimal](https://github.com/govalues/decimal) - Números decimais imutáveis com aritmética livre de panics.
- [decimal](https://github.com/klokare/decimal) - Tipo decimal de tamanho fixo e sem alocações para quando você não precisa de precisão arbitrária.
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - Alíquotas de IVA e formatos de números de IVA de 45 países europeus, embutidos em tempo de compilação e atualizados diariamente a partir da TEDB da Comissão Europeia.
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - Serialização e aritmética rápidas e precisas para pequenos decimais de ponto fixo
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - Dinheiro decimal de ponto fixo ISO4217 rápido e simples.
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Cliente Go para a API Basic da Glassnode com 25 categorias de métricas, structs tipadas, endpoints em massa, dados Point-in-Time e zero dependências.
- [go-finance](https://github.com/alpeb/go-finance) - Biblioteca de funções financeiras para valor do dinheiro no tempo (anuidades), fluxo de caixa, conversões de taxas de juros, títulos e cálculos de depreciação.
- [go-finance](https://github.com/pieterclaerhout/go-finance) - Módulo para obter taxas de câmbio, verificar números de IVA via VIES e verificar números de contas bancárias IBAN.
- [go-money](https://github.com/rhymond/go-money) - Implementação do padrão Money de Fowler.
- [go-nowpayments](https://github.com/matm/go-nowpayments) - Biblioteca para a API de criptomoedas NOWPayments.
- [gobl](https://github.com/invopop/gobl) - Framework de documentos de faturamento e cobrança. Baseado em JSON Schema. Automatiza cálculos e validação de impostos, com ferramentas para converter em formatos globais.
- [indicator](https://github.com/cinar/indicator) - Biblioteca de análise técnica que fornece indicadores financeiros, estratégias e um framework de backtesting.
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - Cliente Go para as APIs REST e WebSocket UTA e Classic da KuCoin, com autenticação HMAC-SHA256, preços tipados como strings e hierarquia de erros tipada.
- [ledger](https://github.com/formancehq/ledger) - Livro-razão financeiro programável que fornece uma base para aplicações que movimentam dinheiro.
- [money](https://github.com/govalues/money) - Valores monetários e taxas de câmbio imutáveis com aritmética livre de panics.
- [ofxgo](https://github.com/aclindsa/ofxgo) - Consulte servidores OFX e/ou faça o parsing das respostas (com um cliente de linha de comando de exemplo).
- [okx-go](https://github.com/tigusigalpa/okx-go) - Cliente Go para a API v5 da OKX com 335 endpoints REST, 53 canais WebSocket, suporte a generics e reconexão automática.
- [orderbook](https://github.com/i25959341/orderbook) - Engine de matching para livro de ofertas limitadas em Golang.
- [orderbook](https://github.com/intrepidkarthi/orderbook) - Livro de ofertas limitadas e engine de matching embutíveis, com preços exatos em inteiros, núcleo com escritor único e recuperação de falhas via write-ahead log.
- [payme](https://github.com/jovandeginste/payme) - Gerador de QR codes (ASCII e PNG) para pagamentos SEPA.
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - SDK Go abrangente, sem dependências e totalmente tipado para a API do Paystack.
- [swift](https://code.pfad.fr/swift/) - Verificação offline da validade de IBAN (International Bank Account Number) e obtenção do BIC (para alguns países).
- [techan](https://github.com/sdcoffey/techan) - Biblioteca de análise técnica com análise de mercado avançada e estratégias de trading.
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Cliente Go para a API Wallet Pay do Telegram com verificação de webhooks HMAC-SHA256 e middleware para net/http, Gin e Echo.
- [ticker](https://github.com/achannarasappa/ticker) - Monitor de ações e rastreador de posições em ações para o terminal.
- [transaction](https://github.com/claygod/transaction) - Banco de dados transacional embutido de contas, executado em modo multithread.
- [udecimal](https://github.com/quagmt/udecimal) - Biblioteca de decimais de ponto fixo de alto desempenho, alta precisão e sem alocações para aplicações financeiras.
- [vat](https://github.com/dannyvankooten/vat) - Validação de números de IVA e alíquotas de IVA da UE.

**[⬆ voltar ao topo](#contents)**

## Formulários

_Bibliotecas para trabalhar com formulários._

- [bind](https://github.com/robfig/bind) - Vincule dados de formulários a quaisquer valores Go.
- [conform](https://github.com/leebenson/conform) - Mantém a entrada do usuário sob controle. Apara, sanitiza e limpa dados com base em struct tags.
- [form](https://github.com/go-playground/form) - Decodifica url.Values em valor(es) Go e codifica valor(es) Go em url.Values. Suporte a arrays duplos e mapas completos.
- [formam](https://github.com/monoculum/formam) - Decodifica os valores de formulários em uma struct.
- [forms](https://github.com/albrow/forms) - Biblioteca independente de framework para parsing e validação de dados de formulários/JSON, com suporte a formulários multipart e arquivos.
- [gbind](https://github.com/bdjimmy/gbind) - Vincule dados a qualquer valor Go. Pode usar recursos de vinculação por expressões integrados e personalizados; suporta validação de dados
- [gorilla/csrf](https://github.com/gorilla/csrf) - Proteção contra CSRF para aplicações e serviços web em Go.
- [httpin](https://github.com/ggicci/httpin) - Decodifique uma requisição HTTP em uma struct personalizada, incluindo querystring, formulários, cabeçalhos HTTP etc.
- [nosurf](https://github.com/justinas/nosurf) - Middleware de proteção contra CSRF para Go.
- [qs](https://github.com/sonh/qs) - Módulo Go para codificar structs em parâmetros de consulta de URL.
- [queryparam](https://github.com/tomwright/queryparam) - Decodifique `url.Values` em valores de struct utilizáveis de tipos padrão ou personalizados.
- [roamer](https://github.com/slipros/roamer) - Elimina o código boilerplate do parsing de requisições HTTP vinculando cookies, cabeçalhos, parâmetros de consulta, parâmetros de caminho, corpo e mais a structs usando tags simples.

**[⬆ voltar ao topo](#contents)**

## Programação funcional

_Pacotes para dar suporte à programação funcional em Go._

- [fp-go](https://github.com/repeale/fp-go) - Coleção de helpers de programação funcional movidos pelos generics do Golang 1.18+.
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Mônadas e recursos de programação funcional para Golang.
- [fuego](https://github.com/seborama/fuego) - Experimento funcional em Go.
- [FuncFrog](https://github.com/koss-null/FuncFrog) - Biblioteca de helpers funcionais que fornece Map, Filter, Reduce e outras operações de stream sobre slices genéricos (Go 1.18+), com avaliação preguiçosa e mecanismos de tratamento de erros.
- [g](https://github.com/enetx/g) - Framework de programação funcional para Go.
- [go-functional](https://github.com/BooleanCat/go-functional) - Programação funcional em Go usando generics
- [go-underscore](https://github.com/tobyhede/go-underscore) - Coleção útil de utilitários funcionais para coleções em Go.
- [gofp](https://github.com/rbrahul/gofp) - Biblioteca de utilitários poderosa semelhante ao lodash para Golang.
- [mo](https://github.com/samber/mo) - Mônadas e abstrações populares de programação funcional, baseadas nos generics do Go 1.18+ (Option, Result, Either...).
- [underscore](https://github.com/rjNemo/underscore) - Helpers de programação funcional para Go 1.18 e posteriores.
- [valor](https://github.com/phelmkamp/valor) - Tipos genéricos option e result que opcionalmente contêm um valor.

**[⬆ voltar ao topo](#contents)**

## Desenvolvimento de jogos

_Bibliotecas incríveis para desenvolvimento de jogos._

- [Ark](https://github.com/mlange-42/ark) - Entity Component System (ECS) baseado em arquétipos para Go.
- [due](https://github.com/dobyte/due) - Framework de servidores de jogos distribuídos com design de componentes modular, oferecendo gateways tcp, kcp, ws e quic.
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Engine de jogos 2D extremamente simples em Go.
- [ecs](https://github.com/andygeiss/ecs) - Crie sua própria engine de jogos baseada no conceito de Entity Component System em Golang.
- [engo](https://github.com/EngoEngine/engo) - Engo é uma engine de jogos 2D de código aberto escrita em Go. Segue o paradigma Entity-Component-System.
- [fantasyname](https://github.com/s0rg/fantasyname) - Gerador de nomes de fantasia.
- [g3n](https://github.com/g3n/engine) - Engine de jogos 3D em Go.
- [go-astar](https://github.com/beefsack/go-astar) - Implementação em Go do algoritmo de busca de caminhos A\*.
- [go-sdl2](https://github.com/veandco/go-sdl2) - Bindings Go para a [Simple DirectMedia Layer](https://www.libsdl.org/).
- [go3d](https://github.com/ungerik/go3d) - Pacote de matemática 2D/3D orientado a desempenho para Go.
- [gogpu](https://github.com/gogpu/gogpu) - Framework de aplicações para GPU com janelas, entrada e renderização construído sobre WebGPU — reduz mais de 480 linhas de código de GPU para ~20, zero CGO (ecossistema GoGPU: [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)).
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Implementação de WebGPU em Go puro com backends Vulkan, DX12 e Metal, zero CGO (parte do ecossistema [GoGPU](https://github.com/gogpu)).
- [GOKe](https://github.com/kjkrol/goke) - Engine ECS orientada a dados (DOD) e baseada em arquétipos, que usa um layout SoA em blocos alinhados ao cache L1 para crescimento de memória previsível e contínuo e caminhos de execução sem alocações.
- [gonet](https://github.com/xtaci/gonet) - Esqueleto de servidor de jogos implementado em golang.
- [goworld](https://github.com/xiaonanln/goworld) - Engine de servidores de jogos escalável, com framework de espaços e entidades e hot-swapping.
- [grid](https://github.com/s0rg/grid) - Grade 2D genérica com ray-casting, shadow-casting e busca de caminhos.
- [Leaf](https://github.com/name5566/leaf) - Framework leve de servidores de jogos.
- [nano](https://github.com/lonng/nano) - Framework de servidores de jogos baseado em golang, leve, prático e de alto desempenho.
- [Oak](https://github.com/oakmound/oak) - Engine de jogos em Go puro.
- [Pi](https://github.com/elgopher/pi) - Engine de jogos para criar jogos retrô para computadores modernos. Inspirada no Pico-8 e movida pelo Ebitengine.
- [Pitaya](https://github.com/topfreegames/pitaya) - Framework de servidores de jogos escalável com suporte a clustering e bibliotecas cliente para iOS, Android, Unity e outros por meio do SDK em C.
- [Pixel](https://github.com/gopxl/pixel) - Biblioteca de jogos 2D feita à mão em Go.
- [prototype](https://github.com/gonutz/prototype) - Biblioteca multiplataforma (Windows/Linux/Mac) para criar jogos para desktop usando uma API mínima.
- [raylib-go](https://github.com/gen2brain/raylib-go) - Bindings Go para a [raylib](https://www.raylib.com/), uma biblioteca simples e fácil de usar para aprender programação de videogames.
- [sceneCamera](https://github.com/donomii/sceneCamera) - Movimentação de câmera e matrizes de visualização/projeção para os modos de renderização museu, FPS, RTS e estéreo.
- [termloop](https://github.com/JoelOtter/termloop) - Engine de jogos baseada em terminal para Go, construída sobre o Termbox.
- [tile](https://github.com/kelindar/tile) - Biblioteca de grade 2D (TileMap) orientada a dados e amigável ao cache; inclui busca de caminhos, observadores e importação/exportação.

**[⬆ voltar ao topo](#contents)**

## Geradores

_Ferramentas que geram código Go._

- [apispec](https://github.com/ehabterra/apispec) - Gere especificações OpenAPI 3.1 a partir de código Go sem anotações, além de uma interface no navegador para configurar, pré-visualizar e explorar o grafo de chamadas.
- [convergen](https://github.com/reedom/convergen) - Gerador de código de cópia entre tipos rico em recursos.
- [copygen](https://github.com/switchupcb/copygen) - Gere qualquer código com base em tipos Go, incluindo conversores entre tipos (código de cópia) sem reflexão por padrão.
- [generis](https://github.com/senselogic/GENERIS) - Ferramenta de geração de código que oferece generics, macros de forma livre, compilação condicional e templates HTML.
- [go-apispec](https://github.com/antst/go-apispec) - Gere especificações OpenAPI 3.1 a partir do código-fonte Go por meio de análise estática, com detecção automática de framework.
- [go-enum](https://github.com/abice/go-enum) - Geração de código para enums a partir de comentários no código.
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - Geração de código de codificação de enums a partir de comentários no código.
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Métodos de consulta no estilo LINQ do .NET para Go.
- [goderive](https://github.com/awalterschulze/goderive) - Deriva funções a partir de tipos de entrada
- [goverter](https://github.com/jmattheis/goverter) - Gere conversores definindo uma interface.
- [GoWrap](https://github.com/hexdigest/gowrap) - Gere decoradores para interfaces Go usando templates simples.
- [interfaces](https://github.com/rjeczalik/interfaces) - Ferramenta de linha de comando para gerar definições de interfaces.
- [jennifer](https://github.com/dave/jennifer) - Gere código Go arbitrário sem templates.
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - Este pacote contém um conjunto de utilitários para gerar código boilerplate Go para serviços com base em definições de API OpenAPI 3.0.
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - Gere servidor e cliente HTTP a partir de protobuf.
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Gere ferramentas, prompts e recursos MCP tipados a partir de Protocol Buffers.
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - Biblioteca para criar tipos dinamicamente.

**[⬆ voltar ao topo](#contents)**

## Geográfico

_Ferramentas e servidores geográficos_

- [borders](https://github.com/kpfaulkner/borders) - Detecta bordas de imagens e as converte em GeoJSON para operações de GIS.
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - SDK Go oficial do GeoEngine, que oferece ingestão de dados geoespaciais de alto desempenho com latência de poucos milissegundos.
- [geoos](https://github.com/spatial-go/geoos) - Biblioteca que fornece dados espaciais e algoritmos geométricos.
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver é um pacote Go para manipular uma instância do GeoServer por meio da API REST do GeoServer.
- [gismanager](https://github.com/hishamkaram/gismanager) - Publique seus dados de GIS (dados vetoriais) no PostGIS e no Geoserver.
- [godal](https://github.com/airbusgeo/godal) - Wrapper Go para o GDAL.
- [H3](https://github.com/uber/h3-go) - Bindings Go para o H3, um sistema hierárquico de indexação geoespacial hexagonal.
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - Utilitários de conversão entre índices H3 e GeoJSON.
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - Distribuição de células H3geo da Uber por nós virtuais.
- [mbtileserver](https://github.com/consbio/mbtileserver) - Servidor simples baseado em Go para tiles de mapas armazenados no formato mbtiles.
- [osm](https://github.com/paulmach/osm) - Biblioteca para ler, escrever e trabalhar com dados e APIs do OpenStreetMap.
- [pbf](https://github.com/maguro/pbf) - Codificador/decodificador golang de PBF do OpenStreetMap.
- [S2 geojson](https://github.com/pantrif/s2-geojson) - Converta geojson em células s2 e demonstre alguns recursos de geometria S2 em um mapa.
- [S2 geometry](https://github.com/golang/geo) - Biblioteca de geometria S2 em Go.
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures é uma biblioteca de geometria 2D que fornece tipos Go que modelam geometrias, além de algoritmos que operam sobre elas.
- [Tile38](https://github.com/tidwall/tile38) - Banco de dados de geolocalização com índice espacial e geofencing em tempo real.
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) Projeto para usar e converter facilmente LonLat, Point e Tile para exibir informações, marcadores etc. em um mapa usando a projeção Web Mercator.
- [WGS84](https://github.com/wroge/wgs84) - Biblioteca para conversão e transformação de coordenadas (ETRS89, OSGB36, NAD83, RGF93, Web Mercator, UTM).

**[⬆ voltar ao topo](#contents)**

## Compiladores Go

_Ferramentas para compilar Go para outras linguagens e vice-versa._

- [bunster](https://github.com/yassinebenaid/bunster) - Compile scripts de shell para Go.
- [c4go](https://github.com/Konstantin8105/c4go) - Transpile código C para código Go.
- [cxgo](https://github.com/gotranspile/cxgo) - Transpile código C para código Go.
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Transpile Go para código Arduino.
- [f4go](https://github.com/Konstantin8105/f4go) - Transpile código FORTRAN 77 para código Go.
- [go2hx](https://github.com/go2hx/go2hx) - Compilador de Go para Haxe e daí para Javascript/C++/Java/C#.
- [gopherjs](https://github.com/gopherjs/gopherjs) - Compilador de Go para JavaScript.

**[⬆ voltar ao topo](#contents)**

## Goroutines

_Ferramentas para gerenciar e trabalhar com goroutines._

- [anchor](https://github.com/kyuff/anchor) - Biblioteca para gerenciar o ciclo de vida de componentes em arquiteturas de microsserviços.
- [ants](https://github.com/panjf2000/ants) - Pool de goroutines de alto desempenho e baixo custo em Go.
- [artifex](https://github.com/borderstech/artifex) - Fila de jobs em memória simples para Golang, com despacho baseado em workers.
- [async](https://github.com/yaitoo/async) - Pacote de tarefas assíncronas no estilo async/await para Go.
- [async](https://github.com/reugn/async) - Biblioteca de sincronização alternativa para Go (Future, Promise, Locks).
- [async](https://github.com/studiosol/async) - Forma segura de executar funções de forma assíncrona, recuperando-as em caso de panic.
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob é um gerenciador de jobs em fila assíncrona com código leve, claro e rápido.
- [autopool](https://github.com/AshvinBambhaniya/autopool) - Pool de workers para Go sem configuração e com escalonamento automático, com agendamento ciente de prioridades.
- [breaker](https://github.com/kamilsk/breaker) - Mecanismo flexível para tornar o fluxo de execução interrompível.
- [channelify](https://github.com/ddelizia/channelify) - Transforme sua função para retornar canais, para um processamento paralelo fácil e poderoso.
- [conc](https://github.com/sourcegraph/conc) - `conc` é seu cinto de ferramentas para concorrência estruturada em Go, tornando tarefas comuns mais fáceis e seguras.
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - Limitador de concorrência com suporte a timeouts, prioridade dinâmica e cancelamento de goroutines via contexto.
- [conexec](https://github.com/ITcathyh/conexec) - Kit de ferramentas para ajudar a executar funções concorrentemente de forma eficiente e segura. Permite especificar um timeout geral para evitar bloqueios e usa um pool de goroutines para melhorar a eficiência.
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - CyclicBarrier para golang.
- [execpool](https://github.com/hexdigest/execpool) - Pool construído em torno de exec.Cmd que inicia antecipadamente um determinado número de processos e conecta stdin e stdout a eles quando necessário. Muito semelhante ao FastCGI ou ao Apache Prefork MPM, mas funciona com qualquer comando.
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - Concorrência estruturada de forma fácil.
- [go-accumulator](https://github.com/nar10z/go-accumulator) - Solução para acumular eventos e processá-los posteriormente.
- [go-actor](https://github.com/vladopajic/go-actor) - Biblioteca minúscula para escrever programas concorrentes usando o modelo de atores.
- [go-floc](https://github.com/workanator/go-floc) - Orquestre goroutines com facilidade.
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - Controle a ordem de execução de goroutines.
- [go-future](https://github.com/jizhuozhi/go-future) - Biblioteca de Future/Promise com combinadores genéricos e uma engine de execução de DAGs.
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - Gerencie um pool de goroutines usando esta biblioteca leve com uma API simples.
- [go-trylock](https://github.com/subchen/go-trylock) - Suporte a TryLock em locks de leitura e escrita para Golang.
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - Como o `sync.WaitGroup`, mas com tratamento de erros e controle de concorrência.
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Inspirado no Thread Pool do Java, o Go WorkerPool busca controlar goroutines pesadas.
- [goccm](https://github.com/zenthangplus/goccm) - O pacote Go Concurrency Manager limita o número de goroutines que podem ser executadas concorrentemente.
- [gohive](https://github.com/loveleshsharma/gohive) - Pool de goroutines de alto desempenho e fácil de usar para Go.
- [gollback](https://github.com/vardius/gollback) - Utilitários simples de funções assíncronas para gerenciar a execução de closures e callbacks.
- [goscade](https://github.com/ognick/goscade) - Orquestrador minimalista de ciclo de vida para componentes Go, com grafos de dependências, sequenciamento de inicialização, coordenação de prontidão e encerramento gracioso.
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl é ao mesmo tempo uma ferramenta de gerenciamento e de monitoramento de processos. Um pool infinito de workers dá a você a capacidade de controlar o pool e os processos e monitorar seu status.
- [goworker](https://github.com/benmanns/goworker) - goworker é um worker em segundo plano baseado em Go.
- [gowp](https://github.com/xxjwxc/gowp) - gowp é um pool de goroutines que limita a concorrência.
- [gpool](https://github.com/Sherifabdlnaby/gpool) - Gerencia um pool redimensionável de goroutines cientes de contexto para limitar a concorrência.
- [grpool](https://github.com/ivpusic/grpool) - Pool de goroutines leve.
- [hands](https://github.com/duanckham/hands) - Controlador de processos usado para controlar as estratégias de execução e de retorno de várias goroutines.
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch fornece funções como `All`, `First`, `Retry`, `Waterfall` etc., que tornam o controle de fluxo assíncrono mais intuitivo.
- [kyoo](https://github.com/dirkaholic/kyoo) - Fornece uma fila de jobs ilimitada e pools de workers concorrentes.
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - Alternativa direta ao `sync/errgroup`, limitada a um pool de N goroutines de trabalho.
- [nursery](https://github.com/arunsworld/nursery) - Concorrência estruturada em Go.
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight é uma implementação completa das árvores de supervisão do Erlang.
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - Execute funções em paralelo.
- [pond](https://github.com/alitto/pond) - Pool de workers com goroutines minimalista e de alto desempenho, escrito em Go.
- [pool](https://github.com/go-playground/pool) - Pool de goroutines consumidoras limitado ou ilimitado, para facilitar o gerenciamento e o cancelamento de goroutines.
- [powerlock](https://github.com/donomii/powerlock) - Mutexes FIFO nomeados com cancelamento via contexto, filas de espera limitadas, diagnósticos de watchdog, perfis pprof e métricas do Prometheus.
- [rill](https://github.com/destel/rill) - Kit de ferramentas Go para concorrência limpa, componível e baseada em canais.
- [routine](https://github.com/timandy/routine) - `routine` é uma biblioteca `ThreadLocal` para Go. Encapsula e fornece interfaces de acesso ao contexto de `goroutine` fáceis de usar, sem concorrência e de alto desempenho, que ajudam você a acessar informações de contexto de corrotinas de forma mais elegante.
- [routine](https://github.com/x-mod/routine) - Controle de goroutines com contexto, com suporte a: Main, Go, Pool e alguns Executors úteis.
- [semaphore](https://github.com/kamilsk/semaphore) - Implementação do padrão semáforo com timeout das operações de lock/unlock, baseada em canais e contexto.
- [semaphore](https://github.com/marusama/semaphore) - Implementação rápida de semáforo redimensionável baseada em CAS (mais rápida que implementações de semáforo baseadas em canais).
- [stl](https://github.com/ssgreg/stl) - Locks transacionais em software baseados no mecanismo de controle de concorrência Software Transactional Memory (STM).
- [threadpool](https://github.com/shettyh/threadpool) - Implementação de threadpool em Golang.
- [tunny](https://github.com/Jeffail/tunny) - Pool de goroutines para golang.
- [worker-pool](https://github.com/vardius/worker-pool) - goworker é um pool de workers assíncronos simples para Go.
- [workerpool](https://github.com/gammazero/workerpool) - Pool de goroutines que limita a concorrência da execução de tarefas, não o número de tarefas na fila.

**[⬆ voltar ao topo](#contents)**

## GUI

_Bibliotecas para criar aplicações com GUI._

_Kits de ferramentas_

- [app](https://github.com/murlokswarm/app) - Pacote para criar apps com GO, HTML e CSS. Suporta: MacOS; Windows em andamento.
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - Wrapper Go gerado automaticamente para o [Dear ImGui](https://github.com/ocornut/imgui) via [cimgui](https://github.com/cimgui/cimgui).
- [Cogent Core](https://github.com/cogentcore/core) - Framework para criar apps 2D e 3D que rodam em macOS, Windows, Linux, iOS, Android e na web.
- [DarwinKit](https://github.com/progrium/darwinkit) - Crie aplicações nativas para macOS usando Go.
- [energy](https://github.com/energye/energy) - Multiplataforma, baseado na LCL (Native System UI Control Library) e no CEF (Chromium Embedded Framework) (Windows/ macOS / Linux)
- [fyne](https://github.com/fyne-io/fyne) - GUIs nativas multiplataforma projetadas para Go, baseadas no Material Design. Suporta: Linux, macOS, Windows, BSD, iOS e Android.
- [gio](https://gioui.org) - Gio é uma biblioteca para escrever GUIs multiplataforma em modo imediato em Go. O Gio suporta todas as principais plataformas: Linux, macOS, Windows, Android, iOS, FreeBSD, OpenBSD e WebAssembly.
- [go-gtk](https://mattn.github.io/go-gtk/) - Bindings Go para GTK.
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Bindings Go para o Sciter: a engine embutível de HTML/CSS/script para desenvolvimento moderno de interfaces desktop. Multiplataforma.
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Agregador multiplataforma de toolkits de UI para Windows / Linux / Mac. GTK, Cocoa, Windows API
- [gogpu/ui](https://github.com/gogpu/ui) - Toolkit de GUI acelerado por GPU com 22 widgets, 3 design systems (Material, Fluent, Cupertino), sinais reativos e zero CGO (parte do ecossistema [GoGPU](https://github.com/gogpu)).
- [goradd/html5tag](https://github.com/goradd/html5tag) - Biblioteca para gerar tags HTML5.
- [gotk3](https://github.com/gotk3/gotk3) - Bindings Go para GTK3.
- [gowd](https://github.com/dtylman/gowd) - Desenvolvimento rápido e simples de interfaces desktop com GO, HTML, CSS e NW.js. Multiplataforma.
- [proton](https://github.com/CzaxStudio/proton) - Framework de GUI em modo imediato em Go puro, construído sobre o Gio, sem nenhuma dependência de Cgo.
- [qt](https://github.com/therecipe/qt) - Binding do Qt para Go (com suporte a Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi).
- [Spot](https://github.com/roblillack/spot) - Toolkit de GUI desktop reativo e multiplataforma.
- [ui](https://github.com/andlabs/ui) - Biblioteca de GUI nativa da plataforma para Go. Multiplataforma.
- [unison](https://github.com/richardwilkes/unison) - Toolkit unificado de experiência gráfica do usuário para aplicações desktop em Go. Suporta macOS, Windows e Linux.
- [Wails](https://wails.io) - Apps desktop para Mac, Windows e Linux com interface HTML usando o renderizador HTML nativo do sistema operacional.
- [walk](https://github.com/lxn/walk) - Kit de bibliotecas de aplicações Windows para Go.
- [webview](https://github.com/zserge/webview) - Janela webview multiplataforma com bindings JavaScript bidirecionais simples (Windows / macOS / Linux).

_Interação_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - Bindings Go para a biblioteca C libappindicator3.
- [gogpu/systray](https://github.com/gogpu/systray) - Biblioteca de bandeja do sistema em Go puro para Windows, macOS e Linux, com zero CGO (parte do ecossistema [GoGPU](https://github.com/gogpu)).
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Biblioteca de notificações de desktop do OSX para Go.
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - Biblioteca para OSX que notifica sobre qualquer atividade (plugável) na sua máquina.
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - Notificações de suspensão/despertar do OSX em golang.
- [robotgo](https://github.com/go-vgo/robotgo) - Automação de sistema via GUI multiplataforma e nativa em Go. Controle o mouse, o teclado e outros.
- [systray](https://github.com/getlantern/systray) - Biblioteca Go multiplataforma para colocar um ícone e um menu na área de notificação.
- [trayhost](https://github.com/shurcooL/trayhost) - Biblioteca Go multiplataforma para colocar um ícone na barra de tarefas do sistema operacional.
- [zenity](https://github.com/ncruces/zenity) - Biblioteca Go e CLI multiplataforma para criar diálogos simples que interagem graficamente com o usuário.

**[⬆ voltar ao topo](#contents)**

## Hardware

_Bibliotecas, ferramentas e tutoriais para interagir com hardware._

- [arduino-cli](https://github.com/arduino/arduino-cli) - CLI e biblioteca oficiais do Arduino. Podem ser executadas de forma independente ou incorporadas a projetos Go maiores.
- [emgo](https://github.com/ziutek/emgo) - Linguagem semelhante a Go para programar sistemas embarcados (por exemplo, MCU STM32).
- [ghw](https://github.com/jaypipes/ghw) - Biblioteca Golang de descoberta/inspeção de hardware.
- [go-osc](https://github.com/hypebeast/go-osc) - Bindings de Open Sound Control (OSC) para Go.
- [go-rpio](https://github.com/stianeikeland/go-rpio) - GPIO para Go, não requer cgo.
- [goroslib](https://github.com/aler9/goroslib) - Biblioteca do Robot Operating System (ROS) para Go.
- [joystick](https://github.com/0xcafed00d/joystick) - API baseada em polling para ler o estado de um joystick conectado.
- [moody](https://github.com/dinakars777/moody) - Daemon de personalidade para eventos de hardware no macOS. Monitora USB, carregador, tampa e outros eventos de hardware e responde com personalidades personalizáveis.
- [sysinfo](https://github.com/zcalusic/sysinfo) - Biblioteca em Go puro que fornece informações do sistema Linux (SO / kernel / hardware).

**[⬆ voltar ao topo](#contents)**

## Imagens

_Bibliotecas para manipular imagens._

- [bild](https://github.com/anthonynsimon/bild) - Coleção de algoritmos de processamento de imagens em Go puro.
- [bimg](https://github.com/h2non/bimg) - Pequeno pacote para processamento de imagens rápido e eficiente usando libvips.
- [cameron](https://github.com/aofei/cameron) - Gerador de avatares para Go.
- [canvas](https://github.com/tdewolff/canvas) - Gráficos vetoriais para PDF, SVG ou imagem rasterizada.
- [color-extractor](https://github.com/marekm4/color-extractor) - Extrator de cor dominante sem dependências externas.
- [darkroom](https://github.com/gojek/darkroom) - Proxy de imagens com backends de armazenamento e engines de processamento de imagens intercambiáveis, com foco em velocidade e resiliência.
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - API de otimização e transformação de imagens usando libvips, implantável no AWS Lambda e no CloudFront.
- [geopattern](https://github.com/pravj/geopattern) - Crie belos padrões de imagens generativas a partir de uma string.
- [gg](https://github.com/fogleman/gg) - Renderização 2D em Go puro.
- [gift](https://github.com/disintegration/gift) - Pacote de filtros de processamento de imagens.
- [gltf](https://github.com/qmuntal/gltf) - Leitor, gravador e validador de glTF 2.0 eficiente e robusto.
- [go-cairo](https://github.com/ungerik/go-cairo) - Binding Go para a biblioteca gráfica cairo.
- [go-gd](https://github.com/bolknote/go-gd) - Binding Go para a biblioteca GD.
- [go-nude](https://github.com/koyachi/go-nude) - Detecção de nudez com Go.
- [go-qrcode](https://github.com/yeqown/go-qrcode) - Gere QR codes com estilos personalizados, permitindo ajustes de cor, tamanho de bloco, forma e ícones.
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Port da biblioteca webcolors do Python para Go.
- [go-webp](https://github.com/kolesa-team/go-webp) - Biblioteca para codificar e decodificar imagens webp, usando libwebp.
- [gocv](https://github.com/hybridgroup/gocv) - Pacote Go para visão computacional usando OpenCV 3.3+.
- [gogpu/gg](https://github.com/gogpu/gg) - Renderização 2D acelerada por GPU com API semelhante à do Canvas, zero CGO (parte do ecossistema gráfico em Go puro [GoGPU](https://github.com/gogpu)).
- [goimagehash](https://github.com/corona10/goimagehash) - Pacote Go de hashing perceptual de imagens.
- [goimghdr](https://github.com/corona10/goimghdr) - O módulo imghdr determina o tipo de imagem contida em um arquivo, para Go.
- [govatar](https://github.com/o1egl/govatar) - Biblioteca e ferramenta de linha de comando para gerar avatares engraçados.
- [govips](https://github.com/davidbyttow/govips) - Biblioteca extremamente rápida de processamento e redimensionamento de imagens para Go.
- [gowitness](https://github.com/sensepost/gowitness) - Capturas de tela de páginas web usando Go e Chrome headless na linha de comando.
- [gridder](https://github.com/shomali11/gridder) - Biblioteca de gráficos 2D baseada em grade.
- [image2ascii](https://github.com/qeesung/image2ascii) - Converta imagens em ASCII.
- [imagick](https://github.com/gographics/imagick) - Binding Go para a API C MagickWand do ImageMagick.
- [imaginary](https://github.com/h2non/imaginary) - Microsserviço HTTP rápido e simples para redimensionamento de imagens.
- [imaging](https://github.com/disintegration/imaging) - Pacote simples de processamento de imagens em Go.
- [imagor](https://github.com/cshum/imagor) - Servidor de processamento de imagens rápido e seguro e biblioteca Go, usando libvips.
- [img](https://github.com/hawx/img) - Seleção de ferramentas de manipulação de imagens.
- [ln](https://github.com/fogleman/ln) - Renderização de line art 3D em Go.
- [mergi](https://github.com/noelyahan/mergi) - Ferramenta e biblioteca Go para manipulação de imagens (mesclar, recortar, redimensionar, marca d'água, animar).
- [mort](https://github.com/aldor007/mort) - Servidor de armazenamento e processamento de imagens escrito em Go.
- [mpo](https://github.com/donatj/mpo) - Decodificador e ferramenta de conversão para fotos 3D MPO.
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - Codificador WebP nativo em Go sem dependências externas.
- [picfit](https://github.com/thoas/picfit) - Servidor de redimensionamento de imagens escrito em Go.
- [pt](https://github.com/fogleman/pt) - Engine de path tracing escrita em Go.
- [scout](https://github.com/jonoton/scout) - Scout é uma solução de software de código aberto independente para segurança por vídeo do tipo faça você mesmo.
- [smartcrop](https://github.com/muesli/smartcrop) - Encontra bons recortes para imagens e tamanhos de recorte arbitrários.
- [steganography](https://github.com/auyer/steganography) - Biblioteca em Go puro para esteganografia LSB.
- [stegify](https://github.com/DimitarPetrov/stegify) - Ferramenta Go para esteganografia LSB, capaz de esconder qualquer arquivo dentro de uma imagem.
- [svgo](https://github.com/ajstarks/svgo) - Biblioteca da linguagem Go para geração de SVG.
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs redimensiona e otimiza imagens para a web usando formatos de última geração.
- [webp-server](https://github.com/mehdipourfar/webp-server) - Servidor de imagens simples e mínimo, capaz de armazenar, redimensionar, converter e fazer cache de imagens.

**[⬆ voltar ao topo](#contents)**

## IoT (Internet das Coisas)

_Bibliotecas para programar dispositivos de IoT._

- [connectordb](https://github.com/connectordb/connectordb) - Plataforma de código aberto para Quantified Self e IoT.
- [devices](https://github.com/goiot/devices) - Conjunto de bibliotecas para dispositivos IoT, experimental para x/exp/io.
- [ekuiper](https://github.com/lf-edge/ekuiper) - Engine leve de processamento de streams de dados para a borda (edge) de IoT.
- [eywa](https://github.com/xcodersun/eywa) - O Projeto Eywa é essencialmente um gerenciador de conexões que acompanha os dispositivos conectados.
- [flogo](https://github.com/tibcosoftware/flogo) - O Projeto Flogo é um framework de código aberto para apps e integração de IoT na borda.
- [gatt](https://github.com/paypal/gatt) - Gatt é um pacote Go para criar periféricos Bluetooth Low Energy.
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot é um framework para robótica, computação física e Internet das Coisas.
- [huego](https://github.com/amimof/huego) - Biblioteca cliente abrangente do Philips Hue para Go.
- [iot](https://github.com/vaelen/iot/) - IoT é um framework simples para implementar um dispositivo do Google IoT Core.
- [periph](https://periph.io/) - E/S de periféricos para interagir com recursos de baixo nível das placas.
- [rulego](https://github.com/rulego/rulego) - RuleGo é uma engine de regras leve, de alto desempenho, embutida, orquestrável e baseada em componentes para a borda de IoT.
- [sensorbee](https://github.com/sensorbee/sensorbee) - Engine leve de processamento de streams para IoT.
- [shifu](https://github.com/Edgenesis/shifu) - Framework de desenvolvimento de IoT nativo do Kubernetes.
- [smart-home](https://github.com/e154/smart-home) - Pacote de software para automação de IoT.

**[⬆ voltar ao topo](#contents)**

## Agendador de tarefas

_Bibliotecas para agendar jobs._

- [cdule](https://github.com/deepaksinghvi/cdule) - Biblioteca de agendamento de jobs com suporte a banco de dados
- [cheek](https://github.com/bart6114/cheek) - Agendador simples semelhante ao crontab que busca oferecer uma abordagem KISS para o agendamento de jobs.
- [clockwerk](https://github.com/onatm/clockwerk) - Pacote Go para agendar jobs periódicos usando uma sintaxe simples e fluente.
- [cronticker](https://github.com/krayzpipes/cronticker) - Implementação de ticker com suporte a agendamentos cron.
- [go-cron](https://github.com/rk/go-cron) - Biblioteca Cron simples para Go que pode executar closures ou funções em intervalos variados, de uma vez por segundo a uma vez por ano em uma data e hora específicas. Voltada principalmente para aplicações web e daemons de longa duração.
- [go-cron](https://github.com/netresearch/go-cron) - Agendador de cron jobs com atualização de agendamentos em tempo de execução, contexto por entrada, middleware de resiliência (retry, circuit breaker, limitação de taxa) e hooks de observabilidade; sucessor do robfig/cron.
- [go-job](https://github.com/cybergarage/go-job) - Biblioteca flexível e extensível de agendamento e execução de jobs para Go.
- [go-quartz](https://github.com/reugn/go-quartz) - Biblioteca de agendamento simples e sem dependências para Go.
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - Agendador de jobs com suporte a expressões cron padrão, descritores personalizados, intervalos e dependências entre tarefas.
- [gocron](https://github.com/go-co-op/gocron) - Agendamento de jobs em Go fácil e fluente. É um fork ativamente mantido do [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron).
- [goflow](https://github.com/fieldryand/goflow) - Agendador de DAGs e dashboard simples, mas poderosos.
- [gron](https://github.com/roylee0704/gron) - Defina tarefas baseadas em tempo usando uma API Go simples, e o agendador do Gron as executará de acordo.
- [gronx](https://github.com/adhocore/gronx) - Parser de expressões cron, executor de tarefas e daemon que consome listas de tarefas no estilo crontab.
- [JobRunner](https://github.com/bamzi/jobrunner) - Agendador de cron jobs inteligente e rico em recursos, com enfileiramento de jobs e monitoramento ao vivo integrados.
- [leprechaun](https://github.com/kilgaloon/leprechaun) - Agendador de jobs com suporte a webhooks, crons e agendamento clássico.
- [ofelia](https://github.com/netresearch/ofelia) - Agendador de jobs para Docker (crontab para Docker); fork do mcuadros/ofelia que adiciona uma interface web, dependências entre jobs, novas tentativas e persistência de jobs.
- [pending](https://github.com/kahoon/pending) - Agendador de tarefas adiadas com debounce baseado em IDs, com cancelamento, encerramento gracioso e limites opcionais de concorrência.
- [sched](https://github.com/romshark/sched) - Agendador de jobs com a capacidade de avançar o tempo.
- [scheduler](https://github.com/carlescere/scheduler) - Agendamento de cron jobs de forma fácil.
- [scheduler](https://github.com/yuseferi/scheduler) - Agendador de jobs distribuído nativo em Go, com tarefas atrasadas, coordenação via Redis em lotes, novas tentativas, recuperação baseada em leases e particionamento versionado de filas.
- [tasks](https://github.com/madflojo/tasks) - Agendador em processo fácil de usar para tarefas recorrentes em Go.
- [tickstem/cron](https://github.com/tickstem/cron) - Cliente Go para agendar cron jobs HTTP, com histórico de execução, alertas de falha e tsk-local para testar handlers sem credenciais reais.
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - Cliente Go para monitoramento de heartbeat do tipo dead-man's switch: faça ping em uma URL após cada execução de job e receba alertas por e-mail se os pings pararem de chegar.

**[⬆ voltar ao topo](#contents)**

## JSON

_Bibliotecas para trabalhar com JSON._

- [ajson](https://github.com/spyzhov/ajson) - JSON abstrato para golang com suporte a JSONPath.
- [ask](https://github.com/simonnilsson/ask) - Acesso fácil a valores aninhados em mapas e slices. Funciona em conjunto com encoding/json e outros pacotes que fazem "Unmarshal" de dados arbitrários em tipos de dados Go.
- [dynjson](https://github.com/cocoonspace/dynjson) - Formatos JSON personalizáveis pelo cliente para APIs dinâmicas.
- [ej](https://github.com/lucassscaravelli/ej) - Escreva e leia JSON de diferentes fontes de forma sucinta.
- [epoch](https://github.com/vtopc/epoch) - Contém primitivas para marshal/unmarshal de timestamps Unix/epoch de/para o tipo nativo time.Time em JSON.
- [fastjson](https://github.com/valyala/fastjson) - Parser e validador de JSON rápido para Go. Sem structs personalizadas, sem geração de código, sem reflexão.
- [gabs](https://github.com/Jeffail/gabs) - Para analisar, criar e editar JSON desconhecido ou dinâmico em Go.
- [gjo](https://github.com/skanehira/gjo) - Pequeno utilitário para criar objetos JSON.
- [GJSON](https://github.com/tidwall/gjson) - Obtenha um valor JSON com uma linha de código.
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError permite criar facilmente respostas de erro em JSON que seguem a especificação JsonApi.
- [go-respond](https://github.com/nicklaw5/go-respond) - Pacote Go para lidar com respostas HTTP JSON comuns.
- [gojmapr](https://github.com/limiu82214/gojmapr) - Obtenha uma struct simples a partir de um JSON complexo usando JSON path.
- [gojq](https://github.com/elgs/gojq) - Consultas JSON em Golang.
- [gojson](https://github.com/ChimeraCoder/gojson) - Gere automaticamente definições de structs Go (golang) a partir de um JSON de exemplo.
- [htmljson](https://github.com/nikolaydubina/htmljson) - Renderização rica de JSON como HTML em Go.
- [JayDiff](https://github.com/yazgazan/jaydiff) - Utilitário de diff de JSON escrito em Go.
- [jettison](https://github.com/wI2L/jettison) - Codificador JSON rápido e flexível para Go.
- [jscan](https://github.com/romshark/jscan) - Iterador JSON de alto desempenho e sem alocações.
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - Converta JSON em structs Go.
- [JSON-to-Proto](https://json-to-proto.github.io/) - Converta JSON em Protobuf online.
- [json2go](https://github.com/m-zajac/json2go) - Conversão avançada de JSON em structs Go. Fornece um pacote que pode analisar vários documentos JSON e criar uma struct que se ajuste a todos eles.
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - Bindings Go baseados na referência de erros da JSON API.
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - Substituto direto para `encoding/json` que gera JSON colorido.
- [jsondiff](https://github.com/wI2L/jsondiff) - Biblioteca de diff de JSON para Go baseada na RFC6902 (JSON Patch).
- [jsonf](https://github.com/miolini/jsonf) - Ferramenta de console para formatação com realce e consulta de structs em JSON.
- [jsongo](https://github.com/ricardolonga/jsongo) - API fluente para facilitar a criação de objetos JSON.
- [jsonhal](https://github.com/RichardKnop/jsonhal) - Pacote Go simples para fazer marshal de structs personalizadas em respostas JSON compatíveis com HAL.
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - Biblioteca JSON que expõe handlers simples que permitem ler e escrever JSON facilmente de várias fontes.
- [jsonic](https://github.com/sinhashubham95/jsonic) - Utilitários para manipular e consultar JSON sem definir structs, de forma segura em relação a tipos.
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - Biblioteca rápida e prática para dados JSON não estruturados, substituindo `encoding/json`.
- [jzon](https://github.com/zerosnake0/jzon) - Biblioteca JSON com API/comportamento compatíveis com a biblioteca padrão.
- [kazaam](https://github.com/Qntfy/kazaam) - API para transformação arbitrária de documentos JSON.
- [mapslice-json](https://github.com/mickep76/mapslice-json) - MapSlice em Go para marshal/unmarshal ordenado de mapas em JSON.
- [marshmallow](https://github.com/PerimeterX/marshmallow) - Unmarshalling de JSON de alto desempenho para casos de uso flexíveis.
- [mp](https://github.com/sanbornm/mp) - Parser de e-mails simples para CLI. Atualmente lê do stdin e gera JSON.
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go é um parser de alto desempenho com várias ferramentas JSON adicionais, incluindo JSONPath.
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Parser de JSON simples com validação por condição via tags de campos de structs golang.
- [silentjson](https://github.com/GenshIv/silentjson) - Scanner e divisor de limites de JSON sem alocações que utiliza instruções SIMD AVX2.
- [SJSON](https://github.com/tidwall/sjson) - Defina um valor JSON com uma linha de código.
- [ujson](https://github.com/olvrng/ujson) - Parser e transformador de JSON rápido e mínimo que trabalha com JSON não estruturado.
- [vjson](https://github.com/miladibra10/vjson) - Pacote Go para validar objetos JSON declarando um JSON schema com uma API fluente.

**[⬆ voltar ao topo](#contents)**

## Logging

_Bibliotecas para gerar e trabalhar com arquivos de log._

- [caarlos0/log](https://github.com/caarlos0/log) - Logger colorido para CLI.
- [distillog](https://github.com/amoghe/distillog) - Logging destilado com níveis (pense nele como stdlib + níveis de log).
- [glg](https://github.com/kpango/glg) - glg é uma biblioteca de logging com níveis simples e rápida para Go.
- [glo](https://github.com/lajosbencz/glo) - Recurso de logging inspirado no Monolog do PHP, com níveis de severidade idênticos.
- [glog](https://github.com/golang/glog) - Logs de execução com níveis para Go.
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - Writer simples que rotaciona arquivos de log automaticamente com base na data e hora atuais, como o cronolog.
- [go-log](https://github.com/pieterclaerhout/go-log) - Biblioteca de logging com stack traces, dump de objetos e timestamps opcionais.
- [go-log](https://github.com/subchen/go-log) - Logging simples e configurável em Go, com níveis, formatadores e writers.
- [go-log](https://github.com/siddontang/go-log) - Biblioteca de log com suporte a níveis e múltiplos handlers.
- [go-log](https://github.com/ian-kent/go-log) - Implementação do Log4j em Go.
- [go-log4g](https://github.com/go-log4g/core) - Log4g fornece configuração e layouts de padrão no estilo Log4j para a fachada de logging padrão log/slog do Go.
- [go-logger](https://github.com/apsdehal/go-logger) - Logger simples para programas Go, com handlers por nível.
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - Handler de slog append-only, encadeado por hash e opcionalmente assinado com Ed25519, com verificação offline de adulteração.
- [gone/log](https://github.com/One-com/gone/tree/master/log) - Biblioteca de log rápida, extensível, completa e compatível com o código-fonte da biblioteca padrão.
- [gslog](https://github.com/maguro/gslog) - Handler do Google Cloud Logging para log/slog, com trace e baggage do OpenTelemetry e labels de podinfo do Kubernetes.
- [httpretty](https://github.com/henvic/httpretty) - Exibe de forma legível suas requisições HTTP comuns no terminal para depuração (semelhante a http.DumpRequest).
- [journald](https://github.com/ssgreg/journald) - Implementação em Go da API nativa de logging do Journal do systemd.
- [kemba](https://github.com/clok/kemba) - Pequena ferramenta de logging de depuração inspirada no [debug](https://github.com/visionmedia/debug), ótima para ferramentas e aplicações de CLI.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - TUI para ler e filtrar logs do journalctl, do sistema de arquivos, de contêineres Docker e Podman e também de pods do Kubernetes.
- [log](https://github.com/aerogo/log) - Sistema de logging O(1) que permite conectar um log a vários writers (por exemplo, stdout, um arquivo e uma conexão TCP).
- [log](https://github.com/apex/log) - Pacote de logging estruturado para Go.
- [log](https://github.com/go-playground/log) - Logging estruturado simples, configurável e escalável para Go.
- [log](https://github.com/teris-io/log) - Interface de log estruturado para Go que separa de forma limpa a fachada de logging da sua implementação.
- [log](https://github.com/heartwilltell/log) - Wrapper simples de logging com níveis em torno do pacote log padrão.
- [log](https://github.com/no-src/log) - Framework de logging simples, pronto para uso.
- [log15](https://github.com/inconshreveable/log15) - Logging simples e poderoso para Go.
- [logdump](https://github.com/ewwwwwqm/logdump) - Pacote para logging em vários níveis.
- [logex](https://github.com/chzyer/logex) - Biblioteca de log para Golang, com suporte a rastreamento e níveis, encapsulando a biblioteca de log padrão.
- [logger](https://github.com/azer/logger) - Biblioteca de logging minimalista para Go.
- [logo](https://github.com/mbndr/logo) - Logger Golang para diferentes writers configuráveis.
- [logrus](https://github.com/Sirupsen/logrus) - Logger estruturado para Go.
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - Implementação de `io.Writer` usando o logger [logrus](https://github.com/sirupsen/logrus).
- [logrusly](https://github.com/sebest/logrusly) - Plug-in do [logrus](https://github.com/sirupsen/logrus) para enviar erros ao [Loggly](https://www.loggly.com/).
- [logutils](https://github.com/hashicorp/logutils) - Utilitários para um logging um pouco melhor em Go (Golang), estendendo o logger padrão.
- [logxi](https://github.com/mgutz/logxi) - Logger para apps 12-factor que é rápido e deixa você feliz.
- [lumberjack](https://github.com/natefinch/lumberjack) - Logger rotativo simples que implementa io.WriteCloser.
- [mlog](https://github.com/jbrodriguez/mlog) - Módulo de logging simples para Go, com 5 níveis, recurso opcional de arquivo de log rotativo e saída em stdout/stderr.
- [noodlog](https://github.com/gyozatech/noodlog) - Biblioteca parametrizada de logging em JSON que permite ofuscar dados sensíveis e fazer marshal de qualquer tipo de conteúdo. Chega de ponteiros impressos no lugar de valores ou de caracteres de escape nas strings JSON.
- [onelog](https://github.com/francoispqt/onelog) - Onelog é um logger JSON extremamente simples, mas muito eficiente. É o logger JSON mais rápido que existe em todos os cenários. Além disso, é um dos loggers com menos alocações.
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - Logging de alto desempenho com suporte a severidade, categorização e filtragem de logs. Pode enviar mensagens de log filtradas para vários destinos (por exemplo, console, rede, e-mail).
- [phuslu/log](https://github.com/phuslu/log) - Logging estruturado de alto desempenho.
- [pp](https://github.com/k0kubun/pp) - Pretty printer colorido para a linguagem Go.
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter é uma implementação de `io.Writer` com rotação automática e várias políticas para oferecer rotação de arquivos de log.
- [seelog](https://github.com/cihub/seelog) - Funcionalidade de logging com despacho, filtragem e formatação flexíveis.
- [sentry-go](https://github.com/getsentry/sentry-go) - SDK do Sentry para Go. Ajuda a monitorar e rastrear erros com alertas em tempo real e monitoramento de desempenho.
- [slf4g](https://github.com/echocat/slf4g) - Simple Logging Facade for Golang: logging estruturado simples, mas poderoso, extensível e personalizável, com muitos aprendizados de décadas de frameworks de logging anteriores.
- [slog](https://github.com/gookit/slog) - Logger leve, configurável e extensível para Go.
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - Configura o logger log/slog da biblioteca padrão a partir de variáveis de ambiente: nível, formato, localização no código-fonte e divisão entre stdout/stderr.
- [slog-datadog](https://github.com/samber/slog-datadog) - Handler de slog para o Datadog.
- [slog-formatter](https://github.com/samber/slog-formatter) - Formatadores comuns para slog e helpers para criar os seus próprios.
- [slog-logrus](https://github.com/samber/slog-logrus) - Handler de slog para o Logrus.
- [slog-loki](https://github.com/samber/slog-loki) - Handler de slog para o Grafana Loki.
- [slog-multi](https://github.com/samber/slog-multi) - Cadeia de slog.Handler (pipeline, fanout...).
- [slog-sentry](https://github.com/samber/slog-sentry) - Handler de slog para o Sentry.
- [slog-slack](https://github.com/samber/slog-slack) - Handler de slog para o Slack.
- [slog-zap](https://github.com/samber/slog-zap) - Handler de slog para o Zap.
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Handler de slog para o Zerolog.
- [slogor](https://gitlab.com/greyxor/slogor) - Handler de slog colorido.
- [spew](https://github.com/davecgh/go-spew) - Implementa um pretty printer profundo para estruturas de dados Go, para auxiliar na depuração.
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Logger para drivers de banco de dados SQL em Go sem modificar o uso existente de \*sql.DB da stdlib.
- [stdlog](https://github.com/alexcesaro/log) - Stdlog é uma biblioteca orientada a objetos que oferece logging com níveis. É muito útil para cron jobs.
- [structy/log](https://github.com/structy/log) - Sistema de log simples de usar, minimalista, mas com recursos para depuração e diferenciação de mensagens.
- [tail](https://github.com/hpcloud/tail) - Pacote Go que busca emular os recursos do programa tail do BSD.
- [timberjack](https://github.com/DeRuina/timberjack) - Logger rotativo com rotação baseada em tamanho, em tempo e em horários agendados, com suporte a compressão e limpeza.
- [tint](https://github.com/lmittmann/tint) - slog.Handler que escreve logs coloridos.
- [xlog](https://github.com/xfxdev/xlog) - Arquitetura de plugins e sistema de log flexível para Go, com controle de nível, múltiplos destinos de log e formato de log personalizado.
- [xlog](https://github.com/rs/xlog) - Logger estruturado para handlers HTTP cientes de `net/context`, com despacho flexível.
- [xylog](https://github.com/xybor-x/xylog) - Logging estruturado e com níveis, campos dinâmicos, alto desempenho, gerenciamento de zonas, configuração simples e sintaxe legível.
- [yell](https://github.com/jfcg/yell) - Mais uma biblioteca de logging minimalista.
- [zap](https://github.com/uber-go/zap) - Logging rápido, estruturado e com níveis em Go.
- [zax](https://github.com/yuseferi/zax) - Integra Context ao logger Zap, o que traz mais flexibilidade ao logging em Go.
- [zerolog](https://github.com/rs/zerolog) - Logger JSON sem alocações.
- [zkits-logger](https://github.com/edoger/zkits-logger) - Logger JSON poderoso e sem dependências.
- [zl](https://github.com/nkmr-jp/zl) - Logger baseado no zap com ótima experiência para desenvolvedores. Oferece funcionalidades ricas, mas é fácil de configurar.

**[⬆ voltar ao topo](#contents)**

## Aprendizado de máquina

_Bibliotecas para aprendizado de máquina._

- [Anneal](https://github.com/georgebuilds/anneal) - Compilador de aprendizado de máquina em Go, um port do tinygrad feito do zero, com backend WebGPU.
- [bayesian](https://github.com/jbrukh/bayesian) - Classificação Naive Bayes para Golang.
- [born](https://github.com/born-ml/born) - Framework de deep learning inspirado no Burn (Rust), com autograd, tensores com segurança de tipos e aceleração por GPU sem CGO.
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - Biblioteca de Gradient Boosting em árvores de decisão rápida, escalável e de alto desempenho. Golang usando Cgo para inferência extremamente rápida de modelos CatBoost.
- [CloudForest](https://github.com/ryanbressler/CloudForest) - Ensembles de árvores de decisão rápidos, flexíveis e multithread para aprendizado de máquina em Go puro.
- [datatrax](https://github.com/rbmuller/datatrax) - Kit de ferramentas de engenharia de dados e ML clássico com processamento em lote, coerção de tipos e 7 algoritmos em Go puro, sem dependências.
- [ddt](https://github.com/sgrodriguez/ddt) - Árvore de decisão dinâmica; crie árvores definindo regras personalizáveis.
- [eaopt](https://github.com/MaxHalford/eaopt) - Biblioteca de otimização evolutiva.
- [evoli](https://github.com/khezen/evoli) - Biblioteca de algoritmos genéticos e otimização por enxame de partículas.
- [fonet](https://github.com/Fontinalis/fonet) - Biblioteca de redes neurais profundas escrita em Go.
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - Implementação em Go dos algoritmos de clusterização k-modes e k-prototypes.
- [go-deep](https://github.com/patrikeh/go-deep) - Biblioteca de redes neurais rica em recursos em Go.
- [go-fann](https://github.com/white-pony/go-fann) - Bindings Go para a biblioteca Fast Artificial Neural Networks (FANN).
- [go-galib](https://github.com/thoj/go-galib) - Biblioteca de algoritmos genéticos escrita em Go / golang.
- [go-pr](https://github.com/daviddengcn/go-pr) - Pacote de reconhecimento de padrões em Go.
- [gobrain](https://github.com/goml/gobrain) - Redes neurais escritas em Go.
- [godist](https://github.com/e-dard/godist) - Várias distribuições de probabilidade e métodos associados.
- [goga](https://github.com/tomcraven/goga) - Biblioteca de algoritmos genéticos para Go.
- [GoLearn](https://github.com/sjwhitworth/golearn) - Biblioteca de aprendizado de máquina de uso geral para Go.
- [GoMind](https://github.com/surenderthakran/gomind) - Biblioteca de redes neurais simplista em Go.
- [goml](https://github.com/cdipaolo/goml) - Aprendizado de máquina online em Go.
- [GoMLX](https://github.com/gomlx/gomlx) - Framework de aprendizado de máquina acelerado para Go.
- [gonet](https://github.com/dathoangnd/gonet) - Rede neural para Go.
- [Goptuna](https://github.com/c-bata/goptuna) - Framework de otimização bayesiana para funções caixa-preta escrito em Go. Tudo será otimizado.
- [goRecommend](https://github.com/timkaye11/goRecommend) - Biblioteca de algoritmos de recomendação escrita em Go.
- [gorgonia](https://github.com/gorgonia/gorgonia) - Biblioteca computacional baseada em grafos, como o Theano, para Go, que fornece primitivas para construir vários algoritmos de aprendizado de máquina e redes neurais.
- [gorse](https://github.com/zhenghaoz/gorse) - Backend de sistema de recomendação offline baseado em filtragem colaborativa, escrito em Go.
- [goscore](https://github.com/asafschers/goscore) - API de scoring em Go para PMML.
- [gosseract](https://github.com/otiai10/gosseract) - Pacote Go para OCR (reconhecimento óptico de caracteres) usando a biblioteca C++ Tesseract.
- [hugot](https://github.com/knights-analytics/hugot) - Pipelines de transformers do Huggingface para golang com onnxruntime.
- [libsvm](https://github.com/datastream/libsvm) - Versão golang da libsvm, trabalho derivado baseado na LIBSVM 3.14.
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Ferramenta de CLI para transpilar modelos clássicos de ML treinados em código Go nativo sem dependências, escrita em Python com suporte à linguagem Go.
- [neural-go](https://github.com/schuyler/neural-go) - Rede perceptron multicamadas implementada em Go, com treinamento via retropropagação.
- [ocrserver](https://github.com/otiai10/ocrserver) - Servidor de API de OCR simples, realmente fácil de implantar com Docker e Heroku.
- [onnx-go](https://github.com/owulveryck/onnx-go) - Interface Go para o Open Neural Network Exchange (ONNX).
- [probab](https://github.com/ThePaw/probab) - Funções de distribuição de probabilidade. Inferência bayesiana. Escrito em Go puro.
- [randomforest](https://github.com/malaschitz/randomForest) - Biblioteca de Random Forest fácil de usar para Go.
- [regommend](https://github.com/muesli/regommend) - Engine de recomendação e filtragem colaborativa.
- [shield](https://github.com/eaigner/shield) - Classificador de texto bayesiano com tokenizadores e backends de armazenamento flexíveis para Go.
- [tfgo](https://github.com/galeone/tfgo) - Bindings do Tensorflow fáceis de usar: simplifica o uso dos bindings Go oficiais do Tensorflow. Defina grafos computacionais em Go e carregue e execute modelos treinados em Python.
- [Varis](https://github.com/Xamber/Varis) - Rede neural em Golang.

**[⬆ voltar ao topo](#contents)**

## Mensageria

_Bibliotecas que implementam sistemas de mensageria._

- [ami](https://github.com/kak-tus/ami) - Cliente Go para filas confiáveis baseadas em Redis Cluster Streams.
- [amqp](https://github.com/rabbitmq/amqp091-go) - Biblioteca cliente do RabbitMQ para Go.
- [APNs2](https://github.com/sideshow/apns2) - Provedor de Apple Push Notification via HTTP/2 para Go - envie notificações push para apps iOS, tvOS, Safari e OSX.
- [Asynq](https://github.com/hibiken/asynq) - Fila de tarefas distribuída simples, confiável e eficiente para Go, construída sobre o Redis.
- [backlite](https://github.com/mikestefanello/backlite) - Filas de tarefas embutidas, persistentes e com segurança de tipos e executor de jobs em segundo plano com SQLite.
- [Beaver](https://github.com/Clivern/Beaver) - Servidor de mensagens em tempo real para criar notificações in-app escaláveis, jogos multiplayer e apps de chat em aplicações web e móveis.
- [broker](https://github.com/qvcloud/broker) - Abstração de mensageria pronta para produção, com uma API unificada para vários brokers e integração nativa com o OpenTelemetry.
- [Bus](https://github.com/mustafaturan/bus) - Implementação minimalista de barramento de mensagens para comunicação interna.
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Servidor de mensagens em tempo real (Websockets ou SockJS) em Go.
- [Chanify](https://github.com/chanify/chanify) - Servidor de notificações push que envia mensagens para seus dispositivos iOS.
- [Commander](https://github.com/jeroenrinzema/commander) - Consumidor/produtor de alto nível orientado a eventos com suporte a vários "dialetos", como o Apache Kafka.
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go é o cliente Golang da Confluent para o Apache Kafka e a Confluent Platform.
- [dbus](https://github.com/godbus/dbus) - Bindings nativos em Go para D-Bus.
- [drone-line](https://github.com/appleboy/drone-line) - Envio de notificações do [Line](https://at.line.me/en) usando um binário, docker ou o Drone CI.
- [emitter](https://github.com/olebedev/emitter) - Emite eventos à maneira do Go, com curingas, predicados, possibilidades de cancelamento e muitas outras vantagens.
- [event](https://github.com/agoalofalife/event) - Implementação do padrão observer.
- [EventBus](https://github.com/asaskevich/EventBus) - Barramento de eventos leve com compatibilidade assíncrona.
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Cliente do Gaurun escrito em Go.
- [Glue](https://github.com/desertbit/glue) - Biblioteca de sockets robusta para Go e Javascript (alternativa ao Socket.io).
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Pacote simples de barramento de eventos para Go.
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - Biblioteca para lidar com o padrão mediator e padrões CQRS simplificados em uma arquitetura orientada a eventos, inspirada na biblioteca MediatR do C#.
- [go-mq](https://github.com/cheshir/go-mq) - Cliente RabbitMQ com configuração declarativa.
- [go-notify](https://github.com/TheCreeper/go-notify) - Implementação nativa da especificação de notificações do freedesktop.
- [go-nsq](https://github.com/nsqio/go-nsq) - O pacote Go oficial do NSQ.
- [go-res](https://github.com/jirenius/go-res) - Pacote para criar serviços REST/em tempo real nos quais os clientes são sincronizados de forma transparente, usando NATS e Resgate.
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Biblioteca cliente para o serviço web Viessmann Vitotrol.
- [GoEventBus](https://github.com/Raezil/GoEventBus) - Biblioteca de barramento de eventos extremamente rápida, em memória e sem locks
- [Gollum](https://github.com/trivago/gollum) - Multiplexador n:m que reúne mensagens de diferentes fontes e as transmite para um conjunto de destinos.
- [golongpoll](https://github.com/jcuga/golongpoll) - Biblioteca de servidor HTTP long polling que simplifica o pub-sub na web.
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster é um cluster de servidores push em Go.
- [gorush](https://github.com/appleboy/gorush) - Servidor de notificações push usando o [APNs2](https://github.com/sideshow/apns2) e o [GCM](https://github.com/google/go-gcm) do Google.
- [gosd](https://github.com/alexsniffin/gosd) - Biblioteca para agendar quando despachar uma mensagem para um canal.
- [guble](https://github.com/smancke/guble) - Servidor de mensagens que usa notificações push (Google Firebase Cloud Messaging, Apple Push Notification services, SMS), além de websockets e uma API REST, com operação distribuída e persistência de mensagens.
- [hare](https://github.com/leozz37/hare) - Biblioteca amigável para enviar mensagens e escutar sockets TCP.
- [hub](https://github.com/leandro-lugaresi/hub) - Hub de mensagens/eventos para aplicações Go, usando o padrão publish/subscribe com suporte a aliases, como as exchanges do rabbitMQ.
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Compara eventos com grandes conjuntos de regras, escritas em Go ou em JSON.
- [jazz](https://github.com/socifi/jazz) - Camada de abstração simples do RabbitMQ para administração de filas e publicação e consumo de mensagens.
- [kiln](https://github.com/rafaelaugustos/kiln) - Jobs em segundo plano persistentes em PostgreSQL, MySQL ou SQLite, com novas tentativas, workflows, jobs recorrentes e um dashboard.
- [machinery](https://github.com/RichardKnop/machinery) - Fila de tarefas/jobs assíncrona baseada em troca de mensagens distribuída.
- [mangos](https://github.com/nanomsg/mangos) - Implementação em Go puro do Nanomsg ("Scalability Protocols") com interoperabilidade de transporte.
- [melody](https://github.com/olahol/melody) - Framework minimalista para lidar com sessões websocket; inclui broadcast e tratamento automático de ping/pong.
- [Mercure](https://github.com/dunglas/mercure) - Servidor e biblioteca para despachar atualizações enviadas pelo servidor usando o protocolo Mercure (construído sobre Server-Sent Events).
- [messagebus](https://github.com/vardius/message-bus) - messagebus é um barramento de mensagens assíncrono simples para Go, perfeito para usar como barramento de eventos ao fazer event sourcing, CQRS e DDD.
- [NATS Go Client](https://github.com/nats-io/nats.go) - Cliente Go para o sistema de mensageria
  NATS.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - Pequeno wrapper em torno de tópicos e canais do NSQ.
- [oplog](https://github.com/dailymotion/oplog) - Sistema genérico de oplog/replicação para APIs REST.
- [pubsub](https://github.com/tuxychandru/pubsub) - Pacote pubsub simples para Go.
- [Quamina](https://github.com/timbray/quamina) - Correspondência de padrões rápida para filtrar mensagens e eventos.
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - Biblioteca leve que cuida da reconexão automática ao RabbitMQ e das novas tentativas de publicação. A biblioteca leva em conta a necessidade de redeclarar entidades no RabbitMQ após a reconexão.
- [rabbus](https://github.com/rafaeljesus/rabbus) - Pequeno wrapper sobre exchanges e filas amqp.
- [rabtap](https://github.com/jandelgado/rabtap) - App de CLI canivete suíço para RabbitMQ.
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ é uma biblioteca leve e confiável para gerenciar a fila local de mensagens.
- [Ratus](https://github.com/hyperonym/ratus) - Ratus é um servidor de filas de tarefas assíncronas RESTful.
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue fornece um produtor e um consumidor de uma fila que usa streams do Redis.
- [rmqconn](https://github.com/sbabiv/rmqconn) - Reconexão ao RabbitMQ. Wrapper sobre amqp.Connection e amqp.Dial. Permite reconectar quando a conexão cai, até que a chamada ao método Close () force seu fechamento.
- [sarama](https://github.com/Shopify/sarama) - Biblioteca Go para o Apache Kafka.
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - Serviço de push unificado baseado em Redis para notificações do lado do servidor para dispositivos móveis.
- [varmq](https://github.com/goptics/varmq) - Fila de mensagens e pool de workers independentes de armazenamento para programas Go concorrentes.
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - Trabalhe de forma eficiente com streams de mensagens. Crie aplicações orientadas a eventos, com event sourcing, RPC sobre mensagens e sagas. Pode usar implementações convencionais de pub/sub, como Kafka ou RabbitMQ, mas também HTTP ou binlog do MySQL.
- [zmq4](https://github.com/pebbe/zmq4) - Interface Go para o ZeroMQ versão 4. Também disponível para a [versão 3](https://github.com/pebbe/zmq3) e a [versão 2](https://github.com/pebbe/zmq2).

**[⬆ voltar ao topo](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Biblioteca em Go puro para criar e processar documentos do Office Word (.docx), Excel (.xlsx) e Powerpoint (.pptx).

### Microsoft Excel

_Bibliotecas para trabalhar com o Microsoft Excel._

- [cellwalker](https://github.com/chonla/cellwalker) - Percorra virtualmente o Excel célula por célula pelo nome.
- [excelize](https://github.com/xuri/excelize) - Biblioteca Golang para ler e escrever arquivos do Microsoft Excel&trade; (XLSX).
- [exl](https://github.com/go-the-way/exl) - Vinculação de Excel a structs escrita em Go. (Suporta apenas Go1.18+)
- [go-excel](https://github.com/szyhf/go-excel) - Leitor simples e leve para ler um Excel semelhante a um banco de dados relacional como uma tabela.
- [xlsx](https://github.com/tealeg/xlsx) - Biblioteca para simplificar a leitura, em programas Go, do formato XML usado pelas versões recentes do Microsoft Excel.
- [xlsx](https://github.com/plandem/xlsx) - Forma rápida e segura de ler/atualizar seus arquivos existentes do Microsoft Excel em programas Go.

### Microsoft Word

_Bibliotecas para trabalhar com o Microsoft Word._

- [godocx](https://github.com/gomutex/godocx) - Biblioteca para ler e escrever arquivos do Microsoft Word (Docx).

**[⬆ voltar ao topo](#contents)**

## Diversos

### Injeção de dependências

_Bibliotecas para trabalhar com injeção de dependências._

- [alice](https://github.com/magic003/alice) - Contêiner aditivo de injeção de dependências para Golang.
- [autowire](https://github.com/tiendc/autowire) - Injeção de dependências usando generics e reflexão.
- [boot-go](http://github.com/boot-go/boot) - Desenvolvimento baseado em componentes com injeção de dependências usando reflexão para desenvolvedores Go.
- [componego](https://github.com/componego/componego) - Framework de injeção de dependências baseado em componentes, que permite a substituição dinâmica de dependências sem duplicar código nos testes.
- [cosban/di](https://gitlab.com/cosban/di) - Ferramenta de ligação de injeção de dependências baseada em geração de código.
- [dig](https://github.com/uber-go/dig) - Kit de ferramentas de injeção de dependências baseado em reflexão para Go.
- [dingo](https://github.com/i-love-flamingo/dingo) - Kit de ferramentas de injeção de dependências para Go, baseado no Guice.
- [do](https://github.com/samber/do) - Framework de injeção de dependências baseado em generics.
- [floatdrop/di](https://github.com/floatdrop/di) - Contêiner de injeção de dependências construído sobre métodos genéricos, com escopos filhos, hooks de ciclo de vida e validação do grafo antes que qualquer coisa seja construída.
- [fx](https://github.com/uber-go/fx) - Framework de aplicações baseado em injeção de dependências para Go (construído sobre o dig).
- [go-beans](https://github.com/go-beans/go) - Framework de injeção de dependências e ciclo de vida de aplicações para Go, inspirado no Spring.
- [Go-Spring](https://github.com/go-spring/spring-core) - Framework Go de alto desempenho inspirado no Spring Boot, que oferece DI, configuração automática e gerenciamento de ciclo de vida, mantendo a simplicidade e a eficiência do Go.
- [gocontainer](https://github.com/vardius/gocontainer) - Contêiner de injeção de dependências simples.
- [godi](https://github.com/junioryono/godi) - Injeção de dependências no estilo da Microsoft para Go, com tempos de vida por escopo e generics.
- [goioc/di](https://github.com/goioc/di) - Contêiner de injeção de dependências inspirado no Spring.
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container é um contêiner de injeção de dependências IoC leve, porém poderoso, para a linguagem de programação Go.
- [gontainer](https://github.com/NVIDIA/gontainer) - Contêiner de serviços com injeção de dependências para projetos Go.
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - Contêiner de injeção de dependências baseado em YAML para GO. Suporta escopos de dependências e detecção automática de dependências circulares. O Gontainer é seguro para concorrência.
- [HnH/di](https://github.com/HnH/di) - Biblioteca de contêiner de DI focada em uma API limpa e em flexibilidade.
- [kinit](https://github.com/go-kata/kinit) - Contêiner de injeção de dependências personalizável com modo global, inicialização em cascata e finalização segura contra panics.
- [kod](https://github.com/go-kod/kod) - Framework de injeção de dependências baseado em generics para Go.
- [linker](https://github.com/logrange/linker) - Biblioteca de injeção de dependências e inversão de controle baseada em reflexão, com suporte ao ciclo de vida de componentes.
- [nject](https://github.com/muir/nject) - Framework reflexivo e com segurança de tipos para bibliotecas, testes, endpoints HTTP e inicialização de serviços.
- [ore](https://github.com/firasdarwish/ore) - Contêiner de injeção de dependências (DI) leve, genérico e simples.
- [parsley](https://github.com/matzefriedrich/parsley) - Biblioteca de DI flexível, modular e baseada em reflexão, com recursos avançados como contextos com escopo e geração de proxies, projetada para aplicações Go de grande escala.
- [wire](https://github.com/Fs02/wire) - Injeção de dependências estrita em tempo de execução para Golang.
- [yama](https://github.com/livetribe/yama) - Framework de injeção de dependências e ciclo de vida em tempo de compilação que gera código de início, pausa (quiesce) e parada para grafos do Google Wire.

**[⬆ voltar ao topo](#contents)**

### Estrutura de projetos

_Conjunto **não oficial** de padrões para estruturar projetos._

- [ardanlabs/service](https://github.com/ardanlabs/service) - [Kit inicial](https://github.com/ardanlabs/service/wiki) para criar aplicações de serviços web escaláveis e prontas para produção.
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - Template de boilerplate de aplicação Go para iniciar projetos rapidamente seguindo as boas práticas de produção.
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - Permite criar rapidamente um projeto Go usando um framework popular.
- [go-ddd](https://github.com/sklinkert/go-ddd) - Template de Domain-Driven Design com CQRS, value objects, comandos idempotentes e um transactional outbox.
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Monorepo de exemplo para microsserviços gRPC em Go com Bazel, grpc-gateway, OpenAPI e Kubernetes.
- [go-module](https://github.com/octomation/go-module) - Template para um módulo típico escrito em Go.
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - Boilerplate de API REST em Go amigável para IA e pronto para produção, com arquitetura limpa, autenticação JWT, RBAC, PostgreSQL, hot-reload com Docker e documentação Swagger.
- [go-sample](https://github.com/zitryss/go-sample) - Layout de exemplo para projetos de aplicações Go com código real.
- [go-starter](https://github.com/allaboutapps/go-starter) - Template opinativo de backend JSON RESTful pronto para produção, altamente integrado aos DevContainers do VSCode.
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - Exemplo de backend Todo em Go usando layout de projeto modular para um microsserviço de produto.
- [goapp](https://github.com/naughtygopher/goapp) - Diretriz opinativa para estruturar e desenvolver uma aplicação/serviço web em Go.
- [gobase](https://github.com/wajox/gobase) - Esqueleto simples para aplicações golang, com configuração básica para uma aplicação golang real.
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Conjunto de padrões de layout de projetos comuns, históricos e emergentes no ecossistema Go. Observação: apesar do nome da organização, eles não representam padrões oficiais do golang; veja [esta issue](https://github.com/golang-standards/project-layout/issues/117) para mais informações. Ainda assim, algumas pessoas podem achar o layout útil.
- [golang-templates/seed](https://github.com/golang-templates/seed) - Template de repositório GitHub para aplicações Go.
- [goxygen](https://github.com/shpota/goxygen) - Gere um projeto web moderno com Go e Angular, React ou Vue em segundos.
- [insidieux/inizio](https://github.com/insidieux/inizio) - Gerador de layout de projetos Golang com plugins.
- [kickstart.go](https://github.com/raeperd/kickstart.go) - Template minimalista de servidor HTTP em Go em arquivo único, sem dependências de terceiros.
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - Boilerplate e exemplo de aplicação Go aplicando práticas modernas.
- [nunu](https://github.com/go-nunu/nunu) - Nunu é uma ferramenta de scaffolding para criar aplicações Go.
- [pagoda](https://github.com/mikestefanello/pagoda) - Kit inicial para desenvolvimento web full-stack rápido e fácil, construído em Go.
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold gera um layout inicial de projeto Go. Permite que você se concentre na implementação da lógica de negócio.
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Conjunto de práticas e discussões sobre como estruturar o layout de projetos Go.

**[⬆ voltar ao topo](#contents)**

### Strings

_Bibliotecas para trabalhar com strings._

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - Implementação em Go do mecanismo de expansão de chaves (Brace Expansion) para gerar strings arbitrárias.
- [caps](https://github.com/chanced/caps) - Biblioteca de conversão entre maiúsculas e minúsculas.
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - Implementa strings de formatação com **campos de substituição** delimitados por chaves `{}`.
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - Biblioteca de manipulação de strings para converter strings em camel case, snake case, kebab case / slugify etc.
- [str](https://github.com/schigh/str) - Kit de ferramentas de strings orientado a pipelines para compor transformações.
- [strcase](https://github.com/charlievieth/strcase) - Implementação sem distinção entre maiúsculas e minúsculas dos pacotes strings/bytes da biblioteca padrão.
- [stringFormatter](https://github.com/Wissance/stringFormatter) - Formatação de strings à maneira do Python ou do C#, com recursos adicionais de formatação de texto.
- [strutil](https://github.com/ozgio/strutil) - Utilitários de strings.
- [sttr](https://github.com/abhimanyu003/sttr) - App de CLI multiplataforma para realizar várias operações em strings.
- [xstrings](https://github.com/huandu/xstrings) - Coleção de funções úteis para strings portadas de outras linguagens.

**[⬆ voltar ao topo](#contents)**

### Sem categoria

_Estas bibliotecas foram colocadas aqui porque nenhuma das outras categorias parecia adequada._

- [anagent](https://github.com/mudler/anagent) - Handler de event loop/timer em Golang minimalista e plugável, com injeção de dependências.
- [antch](https://github.com/antchfx/antch) - Framework de web crawling e scraping rápido, poderoso e extensível.
- [archives](https://github.com/mholt/archives) - Biblioteca Go multiplataforma e multiformato para trabalhar com arquivos compactados e formatos de compressão com uma API unificada e como sistemas de arquivos virtuais compatíveis com io/fs.
- [autoflags](https://github.com/artyom/autoflags) - Pacote Go para definir automaticamente flags de linha de comando a partir de campos de structs.
- [avgRating](https://github.com/kirillDanshin/avgRating) - Calcule a pontuação média e a classificação com base na equação Wilson Score.
- [banner](https://github.com/dimiro1/banner) - Adicione belos banners às suas aplicações Go.
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch suporta captchas de dígitos, números, alfabeto, aritmética, áudio e dígitos com letras.
- [basexx](https://github.com/bobg/basexx) - Converta para, de e entre strings de dígitos em várias bases numéricas.
- [battery](https://github.com/distatus/battery) - Biblioteca multiplataforma de informações normalizadas de bateria.
- [bitio](https://github.com/icza/bitio) - Reader e Writer em nível de bits altamente otimizados para Go.
- [browscap_go](https://github.com/digitalcrab/browscap_go) - Biblioteca GoLang para o [Browser Capabilities Project](https://browscap.org/).
- [captcha](https://github.com/steambap/captcha) - O pacote captcha fornece uma API fácil de usar e não opinativa para geração de captchas.
- [common](https://github.com/kubeservice-stack/common) - Biblioteca para frameworks de servidor.
- [conv](https://github.com/cstockton/go-conv) - O pacote conv fornece conversões rápidas e intuitivas entre tipos Go.
- [datacounter](https://github.com/miolini/datacounter) - Contadores Go para readers/writer/http.ResponseWriter.
- [fake-useragent](https://github.com/lib4u/fake-useragent) - Gerador simples e atualizado de user agents falsos, com banco de dados do mundo real, em Golang
- [faker](https://github.com/pioz/faker) - Gerador de dados falsos aleatórios e de structs para Go.
- [ffmt](https://github.com/go-ffmt/ffmt) - Embeleza a exibição de dados para humanos.
- [gatus](https://github.com/TwinProduction/gatus) - Dashboard automatizado de saúde de serviços.
- [go-commandbus](https://github.com/lana/go-commandbus) - Command bus leve e plugável para Go.
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Pool de objetos genérico para Golang.
- [go-openapi](https://github.com/go-openapi) - Coleção de pacotes para analisar e utilizar schemas open-api.
- [go-resiliency](https://github.com/eapache/go-resiliency) - Padrões de resiliência para golang.
- [go-unarr](https://github.com/gen2brain/go-unarr) - Biblioteca de descompressão para arquivos RAR, TAR, ZIP e 7z.
- [gofakeit](https://github.com/brianvoe/gofakeit) - Gerador de dados aleatórios escrito em Go.
- [goffi](https://github.com/go-webgpu/goffi) - FFI em Go puro com interface de chamadas tipada no estilo libffi e tratamento estruturado de erros, para chamar bibliotecas C sem CGO.
- [gommit](https://github.com/antham/gommit) - Analise mensagens de commit do git para garantir que sigam padrões definidos.
- [gopsutil](https://github.com/shirou/gopsutil) - Biblioteca multiplataforma para obter a utilização de processos e do sistema (CPU, memória, discos etc.).
- [gosh](https://github.com/osamingo/gosh) - Fornece um handler de estatísticas Go, structs e métodos de medição.
- [gosms](https://github.com/haxpax/gosms) - Seu próprio gateway local de SMS em Go, que pode ser usado para enviar SMS.
- [gotoprom](https://github.com/cabify/gotoprom) - Biblioteca wrapper de construção de métricas com segurança de tipos para o cliente oficial do Prometheus.
- [gountries](https://github.com/pariz/gountries) - Pacote que expõe dados de países e subdivisões.
- [gtree](https://github.com/ddddddO/gtree) - Fornece CLI, pacote e interface web para saída em árvore e criação de diretórios a partir de Markdown ou programaticamente.
- [health](https://github.com/alexliesenfeld/health) - Biblioteca de health check simples e flexível para Go.
- [health](https://github.com/dimiro1/health) - Biblioteca de health check fácil de usar e extensível.
- [healthcheck](https://github.com/etherlabsio/healthcheck) - Handler HTTP de health check opinativo e concorrente para serviços RESTful.
- [hostutils](https://github.com/Wing924/hostutils) - Biblioteca golang para empacotar e desempacotar listas de FQDNs.
- [indigo](https://github.com/osamingo/indigo) - Gerador distribuído de IDs únicos que usa Sonyflake e codificação Base58.
- [lk](https://github.com/hyperboloide/lk) - Biblioteca de licenciamento simples para golang.
- [llvm](https://github.com/llir/llvm) - Biblioteca para interagir com o LLVM IR em Go puro.
- [metrics](https://github.com/pascaldekloe/metrics) - Biblioteca para instrumentação de métricas e exposição ao Prometheus.
- [morse](https://github.com/alwindoss/morse) - Biblioteca para converter de e para código morse.
- [numa](https://github.com/lrita/numa) - NUMA é uma biblioteca utilitária escrita em Go. Ajuda a escrever código ciente de NUMA (NUMA-AWARED).
- [pdfgen](https://github.com/hyperboloide/pdfgen) - Serviço HTTP para gerar PDF a partir de requisições JSON.
- [persian](https://github.com/mavihq/persian) - Alguns utilitários para o idioma persa em Go.
- [purego](https://github.com/ebitengine/purego) - Biblioteca para chamar funções C a partir de Go sem Cgo.
- [sandid](https://github.com/aofei/sandid) - Cada grão de areia na Terra tem seu próprio ID.
- [shellwords](https://github.com/Wing924/shellwords) - Biblioteca Golang para manipular strings de acordo com as regras de análise de palavras do shell Bourne do UNIX.
- [shortid](https://github.com/teris-io/shortid) - Geração distribuída de IDs supercurtos, únicos, não sequenciais e amigáveis para URLs.
- [shoutrrr](https://github.com/containrrr/shoutrrr) - Biblioteca de notificações que oferece acesso fácil a vários serviços de mensagens, como slack, mattermost, gotify e smtp, entre outros.
- [sitemap-format](https://github.com/mingard/sitemap-format) - Gerador de sitemaps simples, com um pouco de açúcar sintático.
- [stateless](https://github.com/qmuntal/stateless) - Biblioteca fluente para criar máquinas de estados.
- [stats](https://github.com/go-playground/stats) - Monitora as MemStats do Go + estatísticas do sistema, como memória, swap e CPU, e as envia via UDP para onde você quiser, para logging etc...
- [turtle](https://github.com/hackebrot/turtle) - Emojis para Go.
- [url-shortener](https://github.com/pantrif/url-shortener) - Microsserviço encurtador de URLs moderno, poderoso e robusto, com suporte a mysql.
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - Gere o boilerplate de tratamento de entrada e saída HTTP.
- [varint](https://github.com/chmike/varint) - Codificador/decodificador de inteiros de tamanho variável mais rápido que o fornecido pela biblioteca padrão.
- [xdg](https://github.com/rkoesters/xdg) - Especificações do FreeDesktop.org (xdg) implementadas em Go.
- [xkg](https://github.com/go-xkg/xkg) - Capturador de teclado para o X (X Keyboard Grabber).
- [xz](https://github.com/ulikunitz/xz) - Pacote em golang puro para ler e escrever arquivos compactados com xz.
**[⬆ voltar ao topo](#contents)**

## Processamento de linguagem natural

_Bibliotecas para trabalhar com idiomas humanos._

Veja também [Processamento de texto](#text-processing) e [Análise de texto](#text-analysis).

### Detecção de idioma

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - Cliente Go da API Language Detection. Suporta requisições em lote e detecção de idioma de frases curtas ou de palavras isoladas.
- [getlang](https://github.com/rylans/getlang) - Pacote rápido de detecção de idioma natural.
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Funções para determinar o idioma natural de um texto unicode.
- [lingua-go](https://github.com/pemistahl/lingua-go) - Biblioteca precisa de detecção de idioma natural, adequada tanto para textos longos quanto curtos. Suporta a detecção de vários idiomas em textos com idiomas misturados.
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Pacote de detecção de idioma natural para Go. Suporta 84 idiomas e 24 scripts (sistemas de escrita, por exemplo, latino, cirílico etc.).

### Analisadores morfológicos

- [go-propisyu](https://github.com/rekurt/go-propisyu) - Converta números em palavras em russo com o gênero gramatical e a declinação de substantivos corretos.
- [go-stem](https://github.com/agonopol/go-stem) - Implementação do algoritmo de stemming de Porter.
- [go2vec](https://github.com/danieldk/go2vec) - Leitor e funções utilitárias para embeddings word2vec.
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Bindings Go para a biblioteca libstemmer do snowball, incluindo o porter 2.
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Analisador de sentimentos usando o léxico sentiwordnet em Go.
- [govader](https://github.com/jonreiter/govader) - Implementação em Go do [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment).
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - Implementação em microsserviço do [GoVader](https://github.com/jonreiter/govader).
- [kagome](https://github.com/ikawaha/kagome) - Analisador morfológico de japonês escrito em Go puro.
- [libtextcat](https://github.com/goodsign/libtextcat) - Binding Cgo para a biblioteca C libtextcat. Compatibilidade garantida com a versão 2.2.
- [nlp](https://github.com/james-bowman/nlp) - Biblioteca Go de processamento de linguagem natural com suporte a LSA (Latent Semantic Analysis).
- [paicehusk](https://github.com/rookii/paicehusk) - Implementação em Golang do algoritmo de stemming Paice/Husk.
- [porter](https://github.com/a2800276/porter) - Port bastante direto da implementação em C de Martin Porter do algoritmo de stemming de Porter.
- [porter2](https://github.com/zhenjl/porter2) - Stemmer Porter 2 realmente rápido.
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Port em Go do algoritmo Rapid Automatic Keyword Extraction (RAKE).
- [snowball](https://github.com/goodsign/snowball) - Port do stemmer Snowball (wrapper cgo) para Go. Fornece a funcionalidade de extração de radicais de palavras do [Snowball nativo](http://snowball.tartarus.org/).
- [spaGO](https://github.com/nlpodyssey/spago) - Biblioteca autocontida de aprendizado de máquina e processamento de linguagem natural em Go.
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - Corretor ortográfico para o idioma espanhol, ou crie o seu próprio.

### Geradores de slugs

- [go-slugify](https://github.com/mozillazg/go-slugify) - Crie slugs bonitos com suporte a vários idiomas.
- [slug](https://github.com/gosimple/slug) - Slugify amigável para URLs com suporte a vários idiomas.
- [Slugify](https://github.com/avelino/slugify) - Aplicação Go de slugify que lida com strings.

### Tokenizadores

- [gojieba](https://github.com/yanyiwu/gojieba) - Implementação em Go do [jieba](https://github.com/fxsjy/jieba), um algoritmo de segmentação de palavras em chinês.
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - Tokenizador para Golang baseado em dicionário e em modelos de linguagem de bigramas. (Por enquanto, suporta apenas segmentação de chinês)
- [gse](https://github.com/go-ego/gse) - Segmentação de texto eficiente em Go; suporta inglês, chinês, japonês e outros.
- [MMSEGO](https://github.com/awsong/MMSEGO) - Implementação em GO do [MMSEG](http://technology.chtsai.org/mmseg/), um algoritmo de segmentação de palavras em chinês.
- [segment](https://github.com/blevesearch/segment) - Biblioteca Go para realizar a segmentação de texto Unicode, conforme descrito no [Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/)
- [sentences](https://github.com/neurosnap/sentences) - Tokenizador de sentenças: converte texto em uma lista de sentenças.
- [shamoji](https://github.com/osamingo/shamoji) - O shamoji é um pacote de filtragem de palavras escrito em Go.
- [stemmer](https://github.com/dchest/stemmer) - Pacotes de stemming para a linguagem de programação Go. Inclui stemmers para inglês e alemão.
- [textcat](https://github.com/pebbe/textcat) - Pacote Go para categorização de texto baseada em n-gramas, com suporte a utf-8 e texto bruto.

### Tradução

- [ctxi18n](https://github.com/invopop/ctxi18n/) - i18n ciente de contexto com uma API curta e concisa, pluralização, interpolação e suporte a `fs.FS`. As definições de locale em YAML são baseadas no [Rails i18n](https://guides.rubyonrails.org/i18n.html).
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - Pacote e ferramenta complementar para trabalhar com texto localizado.
- [go-mystem](https://github.com/dveselov/mystem) - Bindings CGo para o Yandex.Mystem - analisador morfológico de russo.
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - Conversor de Hanzi chinês para Hanyu Pinyin.
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Biblioteca de tabela de palavras e recursos de texto para projetos Golang.
- [gotext](https://github.com/leonelquinteros/gotext) - Utilitários GNU gettext para Go.
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - Translitere do cirílico → latino de todas as formas possíveis.
- [spreak](https://github.com/vorlif/spreak) - Biblioteca flexível de tradução e humanização para Go, baseada nos conceitos por trás do gettext.
- [t](https://github.com/youthlin/t) - Mais um pacote de i18n para golang, que segue o estilo do GNU gettext e suporta arquivos .po/.mo: `t.T (gettext)`, `t.N (ngettext)` etc. Também contém uma ferramenta de linha de comando, o [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate), que pode extrair mensagens de templates text/html como um arquivo pot.

### Transliteração

- [enca](https://github.com/endeveit/enca) - Bindings cgo mínimos para a [libenca](https://cihar.com/software/enca/), que detecta codificações de caracteres.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - Transliterações ASCII de texto Unicode.
- [gounidecode](https://github.com/fiam/gounidecode) - Transliterador Unicode (também conhecido como unidecode) para Go.
- [transliterator](https://github.com/alexsergivan/transliterator) - Fornece transliteração unidirecional de strings com suporte a regras de transliteração específicas de cada idioma.

**[⬆ voltar ao topo](#contents)**

## Redes

_Bibliotecas para trabalhar com as várias camadas da rede._

- [arp](https://github.com/mdlayher/arp) - O pacote arp implementa o protocolo ARP, conforme descrito na RFC 826.
- [bart](https://github.com/gaissmai/bart) - O pacote bart fornece uma Balanced-Routing-Table (BART) para buscas muito rápidas de IP para CIDR e mais.
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - Streaming de dados protocolbuffer sobre TCP de forma fácil.
- [canopus](https://github.com/zubairhamed/canopus) - Implementação de cliente/servidor CoAP (RFC 7252).
- [cdns](https://github.com/junevm/cdns) - Troque servidores DNS sem esforço pelo terminal.
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - Proxy de portas TCP/UDP sem configuração, com inicialização automática, controle de acesso baseado em IP e ajuste da pilha de rede no nível do sistema operacional.
- [cidranger](https://github.com/yl2chen/cidranger) - Busca rápida de IP para CIDR para Go.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cliente do Cloudflare Tunnel (antigo Argo Tunnel).
- [corsproxy](https://github.com/melihbirim/corsproxy) - Servidor proxy CORS com proteção contra SSRF, listas de permissão/bloqueio de hosts e autenticação opcional por chave de API.
- [dhcp6](https://github.com/mdlayher/dhcp6) - O pacote dhcp6 implementa um servidor DHCPv6, conforme descrito na RFC 3315.
- [dns](https://github.com/miekg/dns) - Biblioteca Go para trabalhar com DNS.
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - Framework de captura/monitoramento passivo de DNS.
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Mede o que realmente acontece com as conexões TCP e UDP estabelecidas quando um pod do Kubernetes é encerrado.
- [easytcp](https://github.com/DarthPestilane/easytcp) - Framework TCP leve escrito em Go (Golang), construído com um roteador de mensagens. O EasyTCP ajuda você a criar um servidor TCP de forma fácil, rápida e menos dolorosa.
- [ether](https://github.com/songgao/ether) - Pacote Go multiplataforma para enviar e receber quadros ethernet.
- [ethernet](https://github.com/mdlayher/ethernet) - O pacote ethernet implementa marshal e unmarshal de quadros IEEE 802.3 Ethernet II e de tags de VLAN IEEE 802.1Q.
- [event](https://github.com/cheng-zhongliang/event) - Biblioteca simples de notificação de eventos de E/S escrita em Golang.
- [expose](https://github.com/kernelshard/expose) - Ferramenta de tunelamento seguro, leve e de código aberto para expor servidores locais à internet.
- [fasthttp](https://github.com/valyala/fasthttp) - O pacote fasthttp é uma implementação HTTP rápida para Go, até 10 vezes mais rápida que net/http.
- [fibersse](https://github.com/vinod-morya/fibersse) - Server-Sent Events (SSE) prontos para produção para o Fiber v3, com agrupamento de eventos, faixas de prioridade, curingas de tópicos, throttling adaptativo e autenticação integrada.
- [fortio](https://github.com/fortio/fortio) - Biblioteca e ferramenta de linha de comando para testes de carga, servidor de eco avançado e interface web. Permite especificar uma carga fixa de consultas por segundo, registrar histogramas de latência e outras estatísticas úteis e exibi-los em gráficos. Tcp, Http, gRPC.
- [ftp](https://github.com/jlaffaye/ftp) - O pacote ftp implementa um cliente FTP conforme descrito na [RFC 959](https://tools.ietf.org/html/rfc959).
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - Biblioteca de servidor FTP completa.
- [fullproxy](https://github.com/shoriwe/fullproxy) - Kit de ferramentas completo de proxy e pivoting, programável e configurável como daemon, com SOCKS5, HTTP, portas brutas e protocolos de proxy reverso.
- [fwdctl](https://github.com/alegrey91/fwdctl) - CLI simples e intuitiva para gerenciar encaminhamentos do IPTables no seu servidor Linux.
- [gaio](https://github.com/xtaci/gaio) - Rede com E/S assíncrona de alto desempenho para Golang no modo proactor.
- [gev](https://github.com/Allenxuxu/gev) - gev é uma biblioteca de rede TCP leve, rápida e não bloqueante baseada no modo Reactor.
- [gldap](https://github.com/jimlambrt/gldap) - gldap fornece uma implementação de servidor LDAP, e você fornece os handlers para suas operações LDAP.
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt é uma biblioteca de broker MQTT flexível e de alto desempenho que implementa completamente o protocolo MQTT V3.1.1.
- [gnet](https://github.com/panjf2000/gnet) - `gnet` é um framework de rede de alto desempenho, leve, não bloqueante e orientado a eventos, escrito em Go puro.
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` é um framework de rede de alto desempenho, especialmente para servidores de jogos.
- [gNxI](https://github.com/google/gnxi) - Coleção de ferramentas de gerenciamento de rede que usam os protocolos gNMI e gNOI.
- [go-getter](https://github.com/hashicorp/go-getter) - Biblioteca Go para baixar arquivos ou diretórios de várias fontes usando uma URL.
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - Biblioteca para fazer requisições HTTP por meio de um pool de proxies, oferecendo tolerância a falhas, balanceamento de carga, novas tentativas automáticas, gerenciamento de cookies e mais, via substituição de http.Get/Post ou como RoundTripper direto do http.Client
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - Biblioteca leve de captura de pacotes ao vivo com extração de SNI de HTTPS.
- [go-powerdns](https://github.com/joeig/go-powerdns) - Bindings da API do PowerDNS para Golang.
- [go-sse](https://github.com/lampctl/go-sse) - Implementação de cliente e servidor em Go de server-sent events do HTML.
- [go-stun](https://github.com/ccding/go-stun) - Implementação em Go do cliente STUN (RFC 3489 e RFC 5389).
- [gobgp](https://github.com/osrg/gobgp) - BGP implementado na linguagem de programação Go.
- [gopacket](https://github.com/google/gopacket) - Biblioteca Go para processamento de pacotes com bindings da libpcap.
- [gopcap](https://github.com/akrennmair/gopcap) - Wrapper Go para a libpcap.
- [GoProxy](https://github.com/elazarl/goproxy) - Biblioteca para criar um servidor proxy HTTP/HTTPS personalizado usando Go.
- [goshark](https://github.com/sunwxg/goshark) - O pacote goshark usa o tshark para decodificar pacotes IP e criar estruturas de dados para analisá-los.
- [gosnmp](https://github.com/soniah/gosnmp) - Biblioteca nativa em Go para realizar ações SNMP.
- [gotcp](https://github.com/gansidui/gotcp) - Pacote Go para escrever rapidamente aplicações TCP.
- [grab](https://github.com/cavaliercoder/grab) - Pacote Go para gerenciar downloads de arquivos.
- [graval](https://github.com/koofr/graval) - Framework experimental de servidor FTP.
- [gws](https://github.com/lxzan/gws) - Servidor e cliente WebSocket de alto desempenho com suporte a AsyncIO.
- [HTTPLab](https://github.com/gchaincl/httplab) - O HTTPLabs permite inspecionar requisições HTTP e forjar respostas.
- [httpproxy](https://github.com/wzshiming/httpproxy) - Handler e dialer de proxy HTTP.
- [iplib](https://github.com/c-robinson/iplib) - Biblioteca para trabalhar com endereços IP (net.IP, net.IPNet), inspirada no [ipaddress](https://docs.python.org/3/library/ipaddress.html) do python e no [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html) do ruby
- [jazigo](https://github.com/udhos/jazigo) - Jazigo é uma ferramenta escrita em Go para obter a configuração de vários dispositivos de rede.
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP - protocolo ARQ rápido e confiável.
- [lhttp](https://github.com/fanux/lhttp) - Framework websocket poderoso; crie seu servidor de mensagens instantâneas com mais facilidade.
- [linkio](https://github.com/ian-kent/linkio) - Simulação da velocidade de links de rede para interfaces Reader/Writer.
- [llb](https://github.com/kirillDanshin/llb) - Backend muito simples, mas rápido, para servidores proxy. Pode ser útil para redirecionamento rápido a um domínio predefinido, com zero alocação de memória e resposta rápida.
- [macwifi](https://github.com/jaisonerick/macwifi) - Varredura de Wi-Fi e recuperação de senhas do Keychain para macOS 13+.
- [mdns](https://github.com/hashicorp/mdns) - Biblioteca simples de cliente/servidor mDNS (Multicast DNS) em Golang.
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - O Paho Go Client fornece uma biblioteca cliente MQTT para conexão com brokers MQTT via TCP, TLS ou WebSockets.
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - Implementação de MQTT de baixo nível, extremamente simples e sem alocações, bem adequada a sistemas embarcados.
- [nbio](https://github.com/lesismal/nbio) - Solução em Go puro para mais de 1000k conexões, com suporte a tls/http1.x/websocket e basicamente compatível com net/http, com alto desempenho e baixo consumo de memória, não bloqueante, orientada a eventos e fácil de usar.
- [net](https://golang.org/x/net) - Este repositório contém bibliotecas de rede complementares para Go.
- [netchan](https://github.com/matveynator/netchan) - Canais de rede (netchan) para Golang: seguros, prontos para cluster, com suporte a canais aninhados e qualquer tipo de dado. Inspirado em Rob Pike.
- [nethawk](https://github.com/Flowtriq/nethawk) - Interface de terminal para captura, análise e detecção de ataques no tráfego de rede em tempo real, com modo de saída em JSON.
- [netpoll](https://github.com/cloudwego/netpoll) - Framework de rede com E/S não bloqueante de alto desempenho, focado em cenários de RPC, desenvolvido pela ByteDance.
- [NFF-Go](https://github.com/intel-go/nff-go) - Framework para o desenvolvimento rápido de funções de rede de alto desempenho para nuvem e bare-metal (antigo YANFF).
- [nodepass](https://github.com/NodePassProject/nodepass) - Solução de tunelamento TCP/UDP segura e eficiente que oferece acesso rápido e confiável através de restrições de rede usando conexões TCP/QUIC/WebSocket ou HTTP/2 pré-estabelecidas.
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - Biblioteca em Go puro para descoberta multiplataforma de pares locais usando multicast UDP.
- [portproxy](https://github.com/aybabtme/portproxy) - Proxy TCP simples que adiciona suporte a CORS a APIs que não o suportam.
- [proxq](https://github.com/psyb0t/docker-proxq) - Proxy reverso assíncrono que enfileira cada requisição no Redis e retorna um ID de job para consultar a resposta, com roteamento por prefixo de caminho, novas tentativas e cache.
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - Protocolo de comunicação (wire protocol) do servidor PostgreSQL. Crie seu próprio servidor e comece a atender conexões..
- [publicip](https://github.com/polera/publicip) - O pacote publicip retorna seu endereço IPv4 público (saída para a internet).
- [quic-go](https://github.com/lucas-clemente/quic-go) - Implementação do protocolo QUIC em Go puro.
- [roamr](https://github.com/sourabh-khot65/roamr) - CLI que pontua as redes WiFi salvas próximas e diz qual usar e por quê.
- [sdns](https://github.com/semihalev/sdns) - Servidor resolvedor DNS recursivo de alto desempenho com suporte a DNSSEC, focado em preservar a privacidade.
- [sftp](https://github.com/pkg/sftp) - O pacote sftp implementa o SSH File Transfer Protocol conforme descrito em <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt>.
- [ssh](https://github.com/gliderlabs/ssh) - API de nível mais alto para criar servidores SSH (encapsula crypto/ssh).
- [sslb](https://github.com/eduardonunesp/sslb) - É um Super Simples Load Balancer, apenas um pequeno projeto para alcançar algum tipo de desempenho.
- [stun](https://github.com/go-rtc/stun) - Implementação em Go do protocolo STUN da RFC 5389.
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack é um protocolo de aplicação baseado em TCP para empacotar e desempacotar streams de bytes em programas Go.
- [tspool](https://github.com/two/tspool) - Biblioteca TCP que usa um pool de workers para melhorar o desempenho e proteger seu servidor.
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - Implementação em Go puro do tun2socks, movida pela pilha TCP/IP do [gVisor](https://gvisor.dev/).
- [utp](https://github.com/anacrolix/utp) - Implementação em Go do protocolo de microtransporte uTP.
- [vssh](https://github.com/yahoo/vssh) - Biblioteca Go para criar automação de redes e servidores sobre o protocolo SSH.
- [water](https://github.com/songgao/water) - Biblioteca TUN/TAP simples.
- [webrtc](https://github.com/pions/webrtc) - Implementação em Go puro da API WebRTC.
- [winrm](https://github.com/masterzen/winrm) - Cliente WinRM em Go para executar comandos remotamente em máquinas Windows.
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - Cliente WebSocket resiliente com reconexão automática, backoff exponencial e gerenciamento de heartbeat.
- [xtcp](https://github.com/xfxdev/xtcp) - Framework de servidor TCP com comunicação full duplex simultânea, encerramento gracioso e protocolo personalizado.

**[⬆ voltar ao topo](#contents)**

### Clientes HTTP

_Bibliotecas para fazer requisições HTTP._

- [axios4go](https://github.com/rezmoss/axios4go) - Biblioteca cliente HTTP em Go inspirada no Axios, com uma API simples e intuitiva para fazer requisições HTTP.
- [azuretls-client](https://github.com/Noooste/azuretls-client) - Cliente HTTP fácil de usar, 100% em Go, para falsificar fingerprints TLS/JA3 e HTTP2.
- [fast-shot](https://github.com/opus-domini/fast-shot) - Atinja seus alvos de API com precisão de tiro rápido usando o cliente HTTP mais rápido e simples do Go.
- [gentleman](https://github.com/h2non/gentleman) - Biblioteca cliente HTTP completa e orientada a plugins.
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - Obtenha facilmente um cliente HTTP da stdlib que não compartilha nenhum estado com outros clientes.
- [go-http-client](https://github.com/bozd4g/go-http-client) - Faça chamadas HTTP de forma simples e fácil.
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - Biblioteca para multiplexar requisições HTTP com base em vários IPs de origem.
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - http.RoundTripper em Go que emite métricas do OpenTelemetry para requisições HTTP.
- [go-req](https://github.com/wenerme/go-req) - Cliente HTTP declarativo para golang.
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - Cliente HTTP com novas tentativas em Go.
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Cliente HTTP poderoso, leve e fácil, inspirado na Web Fetch API.
- [Grequest](https://github.com/lib4u/grequest)  - Pacote golang simples e leve para requisições HTTP. Baseado no poderoso net/http
- [grequests](https://github.com/levigross/grequests) - Um "clone" em Go da excelente e famosa biblioteca Requests.
- [hedge](https://github.com/bhope/hedge) - Requisições hedged adaptativas para Go. Reduz a latência p99 sem nenhuma configuração, com base no artigo "The Tail at Scale" do Google.
- [heimdall](https://github.com/gojektech/heimdall) - Cliente HTTP aprimorado com recursos de novas tentativas e hystrix.
- [httpretry](https://github.com/ybbus/httpretry) - Enriquece o cliente HTTP padrão do Go com funcionalidade de novas tentativas.
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - net/http.Client substituto direto com fingerprint TLS (JA3/JA4) e HTTP/2 (Akamai) idêntico byte a byte ao de navegadores.
- [pester](https://github.com/sethgrid/pester) - Chamadas de cliente HTTP em Go com novas tentativas, backoff e concorrência.
- [req](https://github.com/imroc/req) - Cliente HTTP simples em Go com magia negra (menos código e mais eficiência).
- [request](https://github.com/monaco-io/request) - Cliente HTTP para golang. Se você tem experiência com axios ou requests, vai adorá-lo. Sem dependências de terceiros.
- [requests](https://github.com/carlmjohnson/requests) - Requisições HTTP para Gophers. Usa context.Context e não esconde o net/http.Client subjacente, o que o torna compatível com as APIs padrão do Go. Também inclui ferramentas de teste.
- [resty](https://github.com/go-resty/resty) - Cliente HTTP e REST simples para Go inspirado no rest-client do Ruby.
- [rq](https://github.com/ddo/rq) - Interface mais agradável para o cliente HTTP da stdlib do golang.
- [sling](https://github.com/dghubble/sling) - Sling é uma biblioteca cliente HTTP em Go para criar e enviar requisições de API.
- [surf](https://github.com/enetx/surf) - Cliente HTTP avançado com suporte a HTTP/1.1, HTTP/2, HTTP/3 (QUIC), proxy SOCKS5 e fingerprinting TLS de nível de navegador.
- [tls-client](https://github.com/bogdanfinn/tls-client) - Cliente HTTP semelhante ao net/http.Client, com opções para selecionar fingerprints TLS de clientes específicos a serem usados nas requisições.

**[⬆ voltar ao topo](#contents)**

## OpenGL

_Bibliotecas para usar OpenGL em Go._

- [gl](https://github.com/go-gl/gl) - Bindings Go para OpenGL (gerados via glow).
- [glfw](https://github.com/go-gl/glfw) - Bindings Go para GLFW 3.
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - Port em Go da biblioteca [glMatrix](https://glmatrix.net/).
- [goxjs/gl](https://github.com/goxjs/gl) - Bindings OpenGL multiplataforma em Go (OS X, Linux, Windows, navegadores, iOS, Android).
- [goxjs/glfw](https://github.com/goxjs/glfw) - Biblioteca glfw multiplataforma em Go para criar um contexto OpenGL e receber eventos.
- [mathgl](https://github.com/go-gl/mathgl) - Pacote de matemática em Go puro especializado em matemática 3D, inspirado no GLM.

**[⬆ voltar ao topo](#contents)**

## ORM

_Bibliotecas que implementam técnicas de mapeamento objeto-relacional ou de mapeamento de dados._

- [bob](https://github.com/stephenafamo/bob) - Construtor de consultas SQL e gerador de ORM/Factory para Go. Sucessor do SQLBoiler.
- [bun](https://github.com/uptrace/bun) - ORM Golang com foco em SQL. Sucessor do go-pg.
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Framework de cache/memoização tipado para Redis, baseado em esquemas, para Go.
- [CQL](https://github.com/FrancoLiberali/cql) - Construído sobre o GORM, adiciona consultas verificadas em tempo de compilação com base em código gerado automaticamente.
- [ent](https://github.com/facebook/ent) - Framework de entidades para Go. ORM simples, porém poderoso, para modelar e consultar dados.
- [go-dbw](https://github.com/hashicorp/go-dbw) - Pacote simples que encapsula operações de banco de dados.
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - ORM simples para o Google/Firebase Cloud Firestore.
- [go-sql](https://github.com/rushteam/gosql) - ORM fácil para mysql.
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - Biblioteca flexível e poderosa de construção de strings SQL, além de um ORM sem configuração.
- [go-store](https://github.com/gosuri/go-store) - Biblioteca de armazenamento chave-valor simples e rápida baseada em Redis para Go.
- [golobby/orm](https://github.com/golobby/orm) - ORM simples, rápido, genérico e com segurança de tipos, para a felicidade dos desenvolvedores.
- [GoooQo](https://github.com/doytowin/goooqo) - Framework de acesso a bancos de dados baseado em um modelo de consulta declarativo.
- [GORM](https://github.com/go-gorm/gorm) - A fantástica biblioteca ORM para Golang, que busca ser amigável para desenvolvedores.
- [gormt](https://github.com/xxjwxc/gormt) - De banco de dados Mysql para structs gorm em golang.
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence, biblioteca no estilo ORM para Go.
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire é uma camada de acesso a bancos de dados e de validação para golang. (Suporta: MySQL, PostgreSQL e SQLite3).
- [lore](https://github.com/abrahambotros/lore) - Ambiente simples e leve de pseudo-ORM/pseudo-mapeamento de structs para Go.
- [marlow](https://github.com/marlow/marlow) - ORM gerado a partir das structs do projeto para garantias de segurança em tempo de compilação.
- [pop/soda](https://github.com/gobuffalo/pop) - Migração e criação de bancos de dados, ORM etc... para MySQL, PostgreSQL e SQLite.
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go: acesso a bancos de dados com segurança de tipos para Go.
- [reform](https://github.com/go-reform/reform) - ORM melhor para Go, baseado em interfaces não vazias e geração de código.
- [rel](https://github.com/go-rel/rel) - Camada moderna de acesso a bancos de dados para Golang - testável, extensível e construída em uma API limpa e elegante.
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - Gerador de ORM. Gere um ORM rico em recursos e extremamente rápido, feito sob medida para o esquema do seu banco de dados.
- [upper.io/db](https://github.com/upper/db) - Interface única para interagir com diferentes fontes de dados por meio de adaptadores que encapsulam drivers de banco de dados maduros.
- [XORM](https://gitea.com/xorm/xorm) - ORM simples e poderoso para Go. (Suporta: MySQL, MyMysql, PostgreSQL, Tidb, SQLite3, MsSql e Oracle).
- [Zoom](https://github.com/albrow/zoom) - Armazenamento de dados e engine de consultas extremamente rápidos, construídos sobre o Redis.

**[⬆ voltar ao topo](#contents)**

## Gerenciamento de pacotes

_Ferramentas oficiais para gerenciamento de dependências e pacotes_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - Módulos são a unidade de intercâmbio e versionamento de código-fonte. O comando go tem suporte direto para trabalhar com módulos, incluindo o registro e a resolução de dependências de outros módulos.

_Bibliotecas não oficiais para gerenciamento de pacotes e dependências._

- [gup](https://github.com/nao1215/gup) - Atualize binários instalados pelo "go install".
- [modup](https://github.com/chaindead/modup) - Interface de terminal para atualizar dependências Go, com detecção de módulos desatualizados e atualização seletiva.
- [syft](https://github.com/anchore/syft) - Ferramenta de CLI e biblioteca Go para gerar uma lista de materiais de software (SBOM) a partir de imagens de contêineres e sistemas de arquivos.

**[⬆ voltar ao topo](#contents)**

## Desempenho

- [ebpf-go](https://github.com/cilium/ebpf) - Fornece utilitários para carregar, compilar e depurar programas eBPF.
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - Adicione spans automaticamente a todos os métodos e funções.
- [go-perfstat](https://github.com/go-perfstat/go) - Estatísticas de desempenho leves e agregação de tempos de execução para Go.
- [jaeger](https://github.com/jaegertracing/jaeger) - Sistema de rastreamento distribuído.
- [mm-go](https://github.com/joetifa2003/mm-go) - Gerenciamento manual de memória genérico para golang.
- [otelinji](https://github.com/hedhyw/otelinji) - Ferramenta de autoinstrumentação do OpenTelemetry para adicionar spans a funções.
- [pixie](https://github.com/pixie-labs/pixie) - Rastreamento sem instrumentação para aplicações Golang via eBPF.
- [profile](https://github.com/pkg/profile) - Pacote simples de suporte a profiling para Go.
- [statsviz](https://github.com/arl/statsviz) - Visualização ao vivo das estatísticas de runtime da sua aplicação Go.
- [tracer](https://github.com/kamilsk/tracer) - Rastreamento simples e leve.

**[⬆ voltar ao topo](#contents)**

## Linguagem de consulta

- [api-fu](https://github.com/ccbrown/api-fu) - Implementação abrangente de GraphQL.
- [dasel](https://github.com/tomwright/dasel) - Consulte e atualize estruturas de dados usando seletores na linha de comando. Comparável ao jq/yq, mas suporta JSON, YAML, TOML e XML sem nenhuma dependência em tempo de execução.
- [gnata](https://github.com/RecoLabs/gnata) - Implementação em Go puro da linguagem de consulta e transformação JSONata 2.x.
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - Pacote Go simples para consultar dados JSON.
- [goven](https://github.com/SeldonIO/goven) - Linguagem de consulta plug-and-play para qualquer esquema de banco de dados.
- [gqlgen](https://github.com/99designs/gqlgen) - Biblioteca de servidor GraphQL baseada em go generate.
- [grapher](https://github.com/reaganiwadha/grapher) - Construtor de campos GraphQL que utiliza generics do Go, com utilitários e recursos extras.
- [graphql](https://github.com/neelance/graphql-go) - Servidor GraphQL com foco na facilidade de uso.
- [graphql-go](https://github.com/graphql-go/graphql) - Implementação de GraphQL para Go.
- [gws](https://github.com/Zaba505/gws) - Implementação de cliente e servidor do "GraphQL over Websocket" do Apollo.
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - Biblioteca de consulta para obter partes de um JSON com base na sintaxe JSONPath.
- [jsonql](https://github.com/elgs/jsonql) - Biblioteca de expressões de consulta JSON em Golang.
- [jsonslice](https://github.com/bhmj/jsonslice) - Consultas Jsonpath com filtros avançados.
- [mql](https://github.com/hashicorp/mql) - Model Query Language (mql) é uma linguagem de consulta para os modelos do seu banco de dados.
- [play](https://github.com/paololazzari/play) - Playground em TUI para experimentar seus programas favoritos, como grep, sed, awk, jq e yq.
- [rql](https://github.com/a8m/rql) - Resource Query Language para APIs REST.
- [rqp](https://github.com/timsolov/rest-query-parser) - Parser de consultas para APIs REST. Filtragem, validações e operações `AND` e `OR` são suportadas diretamente na consulta.
- [straf](https://github.com/SonicRoshan/straf) - Converta facilmente structs Golang em objetos GraphQL.

**[⬆ voltar ao topo](#contents)**

## Reflexão

- [copy](https://github.com/gotidy/copy) - Pacote para copiar rapidamente structs de tipos diferentes.
- [Deepcopier](https://github.com/ulule/deepcopier) - Cópia simples de structs para Go.
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - Biblioteca rápida de cópia profunda.
- [goenum](https://github.com/lvyahui8/goenum) - Struct de enumeração comum baseada em generics e reflexão, que permite definir enumerações rapidamente e usar um conjunto de métodos padrão úteis.
- [gotype](https://github.com/wzshiming/gotype) - Análise de código-fonte Golang, com uso semelhante ao do pacote reflect.
- [gpath](https://github.com/tenntenn/gpath) - Biblioteca para simplificar o acesso a campos de structs com expressões Go via reflexão.
- [objwalker](https://github.com/rekby/objwalker) - Percorra objetos Go com reflexão.
- [reflectpro](https://github.com/gontainer/reflectpro) - Callers, copiers, getters e setters para Go.
- [reflectutils](https://github.com/muir/reflectutils) - Helpers para trabalhar com reflexão: parsing de struct tags, percurso recursivo e preenchimento de valores a partir de strings.

**[⬆ voltar ao topo](#contents)**

## Incorporação de recursos

- [debme](https://github.com/leaanthony/debme) - Crie um `embed.FS` a partir de um subdiretório de um `embed.FS` existente.
- [embed](https://pkg.go.dev/embed) - O pacote embed fornece acesso a arquivos embutidos no programa Go em execução.
- [rebed](https://github.com/soypat/rebed) - Recrie estruturas de pastas e arquivos a partir do tipo `embed.FS` do Go 1.16
- [vfsgen](https://github.com/shurcooL/vfsgen) - Gera um arquivo vfsdata.go que implementa estaticamente o sistema de arquivos virtual fornecido.

**[⬆ voltar ao topo](#contents)**

## Ciência e análise de dados

_Bibliotecas para computação científica e análise de dados._

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - Fornece um modelo de Bradley-Terry para comparações par a par.
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Mapa de calor em formato de calendário em Go puro, inspirado na atividade de contribuições do Github.
- [chart](https://github.com/vdobler/chart) - Biblioteca simples de plotagem de gráficos para Go. Suporta muitos tipos de gráficos.
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - Dataframes para aprendizado de máquina e estatística (semelhante ao pandas).
- [decimal](https://github.com/db47h/decimal) - O pacote decimal implementa aritmética decimal de ponto flutuante com precisão arbitrária.
- [entitydebs](https://github.com/ndabAP/entitydebs) - Ferramenta de ciências sociais para analisar programaticamente entidades em textos de não ficção, com um parser de dependências integrado.
- [evaler](https://github.com/soniah/evaler) - Avaliador simples de expressões aritméticas de ponto flutuante.
- [ewma](https://github.com/VividCortex/ewma) - Médias móveis exponencialmente ponderadas.
- [geom](https://github.com/skelterjohn/geom) - Geometria 2D para golang.
- [go-dsp](https://github.com/mjibson/go-dsp) - Processamento digital de sinais para Go.
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Algoritmos de estimação de estado e filtragem em Go.
- [go-gt](https://github.com/ThePaw/go-gt) - Algoritmos de teoria dos grafos escritos na linguagem "Go".
- [go-hep](https://github.com/go-hep/hep) - Conjunto de bibliotecas e ferramentas para realizar análises de física de altas energias com facilidade.
- [godesim](https://github.com/soypat/godesim) - Framework de solução de EDOs estendidas/multivariáveis para simulações baseadas em eventos, com API simples.
- [goent](https://github.com/kzahedi/goent) - Implementação em GO de medidas de entropia.
- [gograph](https://github.com/hmdsefi/gograph) - Biblioteca genérica de grafos em golang que fornece teoria matemática dos grafos e algoritmos.
- [gonum](https://github.com/gonum/gonum) - Gonum é um conjunto de bibliotecas numéricas para a linguagem de programação Go. Contém bibliotecas para matrizes, estatística, otimização e mais.
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot fornece uma API para construir e desenhar gráficos em Go.
- [goraph](https://github.com/gyuho/goraph) - Biblioteca de teoria dos grafos em Go puro (estruturas de dados, visualização de algoritmos).
- [gosl](https://github.com/cpmech/gosl) - Biblioteca científica Go para álgebra linear, FFT, geometria, NURBS, métodos numéricos, probabilidades, otimização, equações diferenciais e mais.
- [GoStats](https://github.com/OGFris/GoStats) - GoStats é uma biblioteca GoLang de código aberto para estatística matemática, usada principalmente em domínios de aprendizado de máquina; cobre a maioria das funções de medidas estatísticas.
- [graph](https://github.com/yourbasic/graph) - Biblioteca de algoritmos básicos de grafos.
- [hdf5](https://github.com/scigolib/hdf5) - Implementação em Go puro do formato de arquivo HDF5 para armazenamento e troca de dados científicos.
- [insyra](https://github.com/HazelnutParadise/insyra) - Biblioteca de análise de dados com estatística, visualização, suporte a Parquet e integração com Python.
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - Ferramenta para manipular grafos JSONL com suporte a graphviz.
- [matlab](https://github.com/scigolib/matlab) - Biblioteca em Go puro para ler e escrever arquivos .mat do MATLAB (v5-v7.3) sem CGO.
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go é um pacote de código aberto para definir programas matemáticos (por exemplo, problemas de otimização convexa) em Go.
- [matrix](https://github.com/Arceus-7/matrix) - Pacote de matemática de matrizes limpo, genérico e sem dependências para Go, com suporte a aritmética, decomposições e resolução de sistemas lineares.
- [ode](https://github.com/ChristopherRabotin/ode) - Solucionador de equações diferenciais ordinárias (EDO) com suporte a estados estendidos e condições de parada de iteração baseadas em canais.
- [orb](https://github.com/paulmach/orb) - Tipos de geometria 2D com suporte a recorte, GeoJSON e Mapbox Vector Tile.
- [pagerank](https://github.com/alixaxel/pagerank) - Algoritmo PageRank ponderado implementado em Go.
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - Pequena biblioteca de interpolação linear.
- [PiHex](https://github.com/claygod/PiHex) - Implementação do algoritmo "Bailey-Borwein-Plouffe" para o número Pi em hexadecimal.
- [Poly](https://github.com/bebop/poly) - Pacote Go para engenharia de organismos.
- [rootfinding](https://github.com/khezen/rootfinding) - Biblioteca de algoritmos para encontrar raízes de funções quadráticas.
- [simd](https://github.com/tphakala/simd) - Operações vetoriais e SIMD nativas em Go sobre slices, com aceleração em assembly para várias arquiteturas.
- [sparse](https://github.com/james-bowman/sparse) - Formatos de matrizes esparsas em Go para álgebra linear, com suporte a aplicações científicas e de aprendizado de máquina, compatíveis com as bibliotecas de matrizes do gonum.
- [stats](https://github.com/montanaflynn/stats) - Pacote de estatística com funções comuns ausentes na biblioteca padrão do Golang.
- [streamtools](https://github.com/nytlabs/streamtools) - Ferramenta gráfica de uso geral para lidar com streams de dados.
- [taxonkit](https://github.com/shenwei356/taxonkit) - Kit de ferramentas prático e eficiente para a taxonomia do NCBI; suporta consulta de linhagens, reformatação, filtragem e criação de arquivos taxdump personalizados.
- [TextRank](https://github.com/DavidBelicza/TextRank) - Implementação do TextRank em Golang com recursos extensíveis (sumarização, ponderação, extração de frases) e suporte a multithreading (goroutines).
- [topk](https://github.com/keilerkonzept/topk) - Sketches top-K regulares e de janela deslizante, baseados no algoritmo HeavyKeeper.
- [triangolatte](https://github.com/tchayen/triangolatte) - Biblioteca de triangulação 2D. Permite traduzir linhas e polígonos (ambos baseados em pontos) para a linguagem das GPUs.

**[⬆ voltar ao topo](#contents)**

## Segurança

_Bibliotecas usadas para ajudar a tornar sua aplicação mais segura._

- [acme-proxy](https://github.com/esnet/acme-proxy) - Resolva o desafio ACME http-01 sem abrir a porta 80 para a internet e obtenha certificados de uma autoridade certificadora externa.
- [acmetool](https://github.com/hlandau/acme) - Ferramenta cliente ACME (Let's Encrypt) com renovação automática.
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Pequeno pacote gerador de senhas criptograficamente seguras para Go.
- [acra](https://github.com/cossacklabs/acra) - Proxy de criptografia de rede para proteger aplicações baseadas em bancos de dados contra vazamentos de dados: criptografia seletiva forte, prevenção de injeções de SQL e sistema de detecção de intrusões.
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - Gerador determinístico de bits aleatórios baseado em AES no modo contador (AES-CTR-DRBG), conforme especificado no NIST SP 800-90A.
- [age](https://github.com/FiloSottile/age) - Ferramenta de criptografia (e biblioteca Go) simples, moderna e segura, com chaves pequenas e explícitas, sem opções de configuração e com composabilidade no estilo UNIX.
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Wrapper leve em torno do pacote argon2 do Go que espelha de perto o pacote Bcrypt da biblioteca padrão do Go e o pacote simple-scrypt.
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Provisione automaticamente certificados Let's Encrypt e inicie um servidor TLS.
- [BadActor](https://github.com/jaredfolkins/badactor) - Jailer em memória, controlado pela aplicação, construído no espírito do fail2ban.
- [beelzebub](https://github.com/mariocandela/beelzebub) - Framework de honeypot low-code seguro que aproveita IA para virtualização de sistemas.
- [booster](https://github.com/anatol/booster) - Gerador rápido de initramfs com suporte a criptografia de disco completo.
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Middleware de Web Application Firewall para o servidor Caddy, com engine de regras regex, pontuação de anomalias, listas de bloqueio de IP/DNS/ASN/país e limitação de taxa.
- [Cameradar](https://github.com/Ullaakut/cameradar) - Ferramenta e biblioteca para invadir remotamente streams RTSP de câmeras de vigilância.
- [canery](https://github.com/rluders/canery) - Engine de autorização mínima e sem estado, com um modelo de avaliação plugável.
- [certificates](https://github.com/mvmaasakkers/certificates) - Ferramenta opinativa para gerar certificados TLS.
- [CertMagic](https://github.com/caddyserver/certmagic) - Integração de cliente ACME madura, robusta e poderosa para emissão e renovação de certificados TLS totalmente gerenciadas.
- [Coraza](https://github.com/corazawaf/coraza) - Biblioteca de WAF pronta para uso empresarial, compatível com modsecurity e OWASP CRS.
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - Ferramenta de CLI independente para validar regras de WAF ModSecurity e Coraza SecLang antes da implantação em produção.
- [Crenox](https://github.com/crenoxhq/crenox) - Scanner de segredos para pre-commit sem dependências, que usa Aho-Corasick para detectar vazamentos de credenciais com alto desempenho.
- [deidentify](https://github.com/aliengiraffe/deidentify) - Remoção determinística e que preserva o formato de informações de identificação pessoal de textos e dados estruturados.
- [dongle](https://github.com/golang-module/dongle) - Pacote golang simples, semântico e amigável para desenvolvedores para codificação e decodificação e para criptografia e descriptografia.
- [dotlock](https://github.com/ahmadraza100/dotlock) - Gerenciador de cofres .env criptografados com TUI interativa para gerenciar segredos em vários ambientes e perfis.
- [encid](https://github.com/bobg/encid) - Codifique e decodifique IDs inteiros criptografados.
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - Gerador de senhas por entropia com amplos argumentos de linha de comando para gerar strings aleatórias com segurança, incluindo dígitos, senhas e senhas construídas com palavras obscuras de dicionário misturadas com símbolos e dígitos.
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Aplicação REST para atualizar dinamicamente as regras do firewalld em um servidor linux.
- [fort](https://github.com/djadmin/fort) - Audita as configurações de segurança do macOS em 16 verificações, informa uma pontuação e corrige problemas quando pode fazê-lo com segurança. Binário único, instalável via Homebrew.
- [go-generate-password](https://github.com/m1/go-generate-password) - Gerador de senhas que pode ser usado na CLI ou como biblioteca.
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Parser de htpasswd do Apache para Go.
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - Validador de senhas baseado em valores brutos de entropia criptográfica.
- [go-peer](https://github.com/number571/go-peer) - Biblioteca de software para criar sistemas descentralizados seguros e anônimos.
- [go-yara](https://github.com/hillu/go-yara) - Bindings Go para o [YARA](https://github.com/plusvic/yara), o "canivete suíço de correspondência de padrões para pesquisadores de malware (e todos os demais)".
- [goArgonPass](https://github.com/dwin/goArgonPass) - Hash e verificação de senhas Argon2 projetados para serem compatíveis com as implementações existentes em Python e PHP.
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - Pacote provavelmente paranoico para fazer hash e criptografar senhas com segurança.
- [gost-crypto](https://github.com/rekurt/gost-crypto) - Biblioteca Go para os padrões criptográficos russos GOST (assinaturas digitais, hash Streebog, cifra Kuznechik, MGM AEAD), baseada no gost-engine do OpenSSL.
- [grim](https://github.com/ijin82/grim) - Ferramenta de CLI rápida e segura para gerenciar cofres de notas em Markdown criptografados em memória volátil.
- [gspy](https://github.com/Mutasem-mk4/gspy) - Inspetor forense de goroutines e syscalls para processos Go em execução.
- [Interpol](https://github.com/avahidi/interpol) - Gerador de dados baseado em regras para fuzzing e testes de penetração.
- [leakhound](https://github.com/nilpoona/leakhound) - Ferramenta de análise estática para detectar o registro acidental de campos sensíveis de structs, evitando vazamentos de dados em logs.
- [lego](https://github.com/go-acme/lego) - Biblioteca cliente ACME e ferramenta de CLI em Go puro (para uso com o Let's Encrypt).
- [luks.go](https://github.com/anatol/luks.go) - Biblioteca em Golang puro para gerenciar partições LUKS.
- [mcprobe](https://github.com/tamish560/mcprobe) - Scanner de segurança para servidores MCP com detecção de injeção de prompt, tool shadowing e saída SARIF.
- [memguard](https://github.com/awnumar/memguard) - Biblioteca em Go puro para lidar com valores sensíveis em memória.
- [mist](https://github.com/iSerganov/mist) - Biblioteca de esteganografia de áudio com chave assimétrica que esconde mensagens criptografadas dentro de áudio comprimido usando X25519 e ChaCha20-Poly1305.
- [multikey](https://github.com/adrianosela/multikey) - Framework de criptografia/descriptografia com n de N chaves, baseado no algoritmo Shamir's Secret Sharing.
- [nacl](https://github.com/kevinburke/nacl) - Implementação em Go do conjunto de APIs NaCL.
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - Remove segredos de linhas de log e dumps HTTP em uma única passagem, cobrindo cabeçalhos, JSON, XML, dados URL-encoded, JWTs, chaves PEM e tokens de fornecedores.
- [optimus-go](https://github.com/pjebs/optimus-go) - Hashing e ofuscação de IDs usando o algoritmo de Knuth.
- [osv-scanner](https://github.com/google/osv-scanner) - Scanner de vulnerabilidades escrito em Go que usa os dados fornecidos pelo OSV.
- [passlib](https://github.com/hlandau/passlib) - Biblioteca de hashing de senhas à prova de futuro.
- [passwap](https://github.com/zitadel/passwap) - Fornece uma implementação unificada entre diferentes algoritmos de hashing de senhas
- [pii-shield](https://github.com/pii-shield/pii-shield) - Sidecar de sanitização de logs sem código para Kubernetes que remove PII dos logs.
- [pm](https://github.com/nicola-strappazzon/password-manager) - Gerenciador de senhas no estilo Unix escrito em Go para salvar seus dados com criptografia OpenPGP.
- [procscope](https://github.com/Mutasem-mk4/procscope) - Investigador de runtime com escopo de processo que usa eBPF para rastrear o ciclo de vida de processos, a atividade de arquivos e as conexões de rede.
- [qrand](https://github.com/bitfield/qrand) - Cliente para a API ANU Quantum Numbers (AQN), que fornece dados aleatórios seguros do ponto de vista da mecânica quântica.
- [Razify](https://github.com/Hossiy21/razify) - CLI para examinar, validar e auditar arquivos .env em busca de segredos vazados e divergências entre ambientes.
- [redact](https://github.com/alesr/redact) - Oculte informações sensíveis de logs baseados em slog usando um pipeline configurável.
- [SafeDep/vet](https://github.com/safedep/vet) - Proteja-se contra pacotes de código aberto maliciosos.
- [secret](https://github.com/rsjethani/secret) - Evite que seus segredos vazem para logs, std\* etc.
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - Gerador de credenciais baseado em CSPRNG, com um JSON schema versionado para senhas, frases-senha, segredos, chaves de API e PINs.
- [secure](https://github.com/unrolled/secure) - Middleware HTTP para Go que facilita alguns ganhos rápidos de segurança.
- [secureio](https://github.com/xaionaro-go/secureio) - Wrapper e multiplexador com troca de chaves, autenticação e criptografia para `io.ReadWriteCloser`, baseado em XChaCha20-poly1305, ECDH e ED25519.
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - Pacote Scrypt com uma API simples e óbvia e calibração automática de custo integrada.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - Criptografe/descriptografe usando chaves SSH.
- [sslmgr](https://github.com/adrianosela/sslmgr) - Certificados SSL de forma fácil, com um wrapper de alto nível em torno de acme/autocert.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf é um middleware HTTP para Go que fornece a funcionalidade de IDS do teler para proteger contra ataques baseados na web e melhorar a segurança de aplicações web em Go. É altamente configurável e fácil de integrar a aplicações Go existentes.
- [themis](https://github.com/cossacklabs/themis) - Biblioteca criptográfica de alto nível para resolver tarefas típicas de segurança de dados (armazenamento seguro de dados, mensagens seguras, autenticação por prova de conhecimento zero), disponível para 14 linguagens, ideal para apps multiplataforma.
- [urusai](https://github.com/calpa/urusai) - Urusai ("barulhento" em japonês) é uma implementação em Go de um gerador aleatório de ruído de tráfego HTTP/DNS que ajuda a proteger a privacidade criando cortinas de fumaça digitais durante a navegação.
- [veil](https://github.com/getveil/veil) - Proxy HTTPS local que esconde credenciais de API de agentes de programação com IA. Integração com o keychain do sistema operacional, placeholders cientes do formato e log de auditoria em SQLite.
- [y509](https://github.com/kanywst/y509) - TUI para cadeias de certificados X.509 que informa se uma cadeia é verificada e, separadamente, se um servidor a serviu corretamente.


**[⬆ voltar ao topo](#contents)**

## Serialização

_Bibliotecas e ferramentas para serialização binária._

- [bambam](https://github.com/glycerine/bambam) - Gerador de schemas Cap'n Proto a partir de Go.
- [bel](https://github.com/32leaves/bel) - Gere interfaces TypeScript a partir de structs/interfaces Go. Útil para JSON RPC.
- [binstruct](https://github.com/ghostiam/binstruct) - Decodificador binário em Golang para mapear dados em estruturas.
- [cbor](https://github.com/fxamacker/cbor) - Biblioteca pequena, segura e fácil de codificação e decodificação CBOR.
- [colfer](https://github.com/pascaldekloe/colfer) - Geração de código para o formato binário Colfer.
- [csvutil](https://github.com/jszwec/csvutil) - Codificação e decodificação idiomáticas e de alto desempenho de registros CSV para estruturas Go nativas.
- [elastic](https://github.com/epiclabs-io/elastic) - Converta slices, mapas ou qualquer outro valor desconhecido entre tipos diferentes em tempo de execução, aconteça o que acontecer.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - Formatação de texto de largura fixa (com suporte a UTF-8).
- [fwencoder](https://github.com/o1egl/fwencoder) - Parser de arquivos de largura fixa (biblioteca de codificação e decodificação) para Go.
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Biblioteca e parser de Cap'n Proto para Go.
- [go-codec](https://github.com/ugorji/go) - Biblioteca de codificação, decodificação e RPC de alto desempenho, rica em recursos e idiomática para msgpack, cbor e json, com suporte baseado em runtime OU em geração de código.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - Biblioteca de serialização/desserialização de CSV de alto nível e com funcionalidades ricas.
- [goprotobuf](https://github.com/golang/protobuf) - Suporte Go, na forma de uma biblioteca e de um plugin do compilador de protocolos, para os protocol buffers do Google.
- [gotiny](https://github.com/raszia/gotiny) - Biblioteca de serialização eficiente para Go; o gotiny é quase tão rápido quanto bibliotecas de serialização que geram código.
- [jsoniter](https://github.com/json-iterator/go) - Substituto direto de alto desempenho e 100% compatível do "encoding/json".
- [mus-go](https://github.com/mus-format/mus-go) - Serializador do formato MUS para Go.
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - Biblioteca GoLang para trabalhar com o formato de sessão do PHP e com as funções Serialize/Unserialize do PHP.
- [pletter](https://github.com/vimeda/pletter) - Forma padrão de encapsular uma mensagem proto para brokers de mensagens.
- [proto](https://github.com/emicklei/proto) - Parser e gravador de arquivos .proto do Google ProtocolBuffers.
- [structomap](https://github.com/tuvistavie/structomap) - Biblioteca para gerar mapas de forma fácil e dinâmica a partir de estruturas estáticas.
- [unitpacking](https://github.com/recolude/unitpacking) - Biblioteca para empacotar vetores unitários no menor número possível de bytes.

**[⬆ voltar ao topo](#contents)**

## Aplicações de servidor

- [algernon](https://github.com/xyproto/algernon) - Servidor web HTTP/2 com suporte integrado a Lua, Markdown, GCSS e Amber.
- [Caddy](https://github.com/caddyserver/caddy) - Caddy é um servidor web HTTP/2 alternativo, fácil de configurar e usar.
- [Casdoor](https://github.com/casdoor/casdoor) - Servidor de gerenciamento de identidade e acesso (IAM) e single sign-on (SSO) com interface web, com suporte a OAuth 2.0, OIDC, SAML, CAS e LDAP.
- [consul](https://www.consul.io/) - Consul é uma ferramenta para descoberta de serviços, monitoramento e configuração.
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Proxy de remote write do Prometheus que adiciona o cabeçalho de ID de tenant do Cortex com base nos labels das métricas.
- [devd](https://github.com/cortesi/devd) - Servidor web local para desenvolvedores.
- [discovery](https://github.com/Bilibili/discovery) - Registro para balanceamento de carga e failover resilientes na camada intermediária.
- [dudeldu](https://github.com/krotik/dudeldu) - Servidor SHOUTcast simples.
- [Easegress](https://github.com/megaease/easegress) - Sistema de orquestração de tráfego cloud native de alta disponibilidade/desempenho, com observabilidade e extensibilidade.
- [Engity's Bifröst](https://bifroest.engity.org/) - Servidor SSH altamente personalizável, com várias formas de autorizar um usuário e definir como executar sua sessão (localmente ou em contêineres).
- [etcd](https://github.com/etcd-io/etcd) - Armazenamento chave-valor de alta disponibilidade para configuração compartilhada e descoberta de serviços.
- [Euterpe](https://github.com/ironsmile/euterpe) - Servidor auto-hospedado de streaming de música com interface web integrada e API REST.
- [Fider](https://github.com/getfider/fider) - Fider é uma plataforma aberta para coletar e organizar o feedback de clientes.
- [Flagr](https://github.com/checkr/flagr) - Flagr é um serviço de código aberto de feature flags e testes A/B.
- [flipt](https://github.com/markphelps/flipt) - Solução de feature flags autocontida, escrita em Go e Vue.js
- [flue](https://github.com/karnstack/flue) - Daemon auto-hospedado que serve sessões de terminal em uma aba do navegador. As sessões continuam rodando depois que a aba é fechada.
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - Solução de feature flags auto-hospedada simples, completa e leve, 100% de código aberto.
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Proxy reverso simples com cache, escrito em Go, usando Redis.
- [gondola](https://github.com/bmf-san/gondola) - Proxy reverso em golang baseado em YAML.
- [goshs](https://github.com/patrickhener/goshs) - Substituto do SimpleHTTPServer com upload/download de arquivos, WebDAV, SFTP, SMB, TLS, autenticação e links de compartilhamento.
- [Kono](https://github.com/starwalkn/kono) - API Gateway leve e extensível em Go - fan-out paralelo, agregação flexível e zero mágica de configuração.
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - Proxy reverso para lidar com HTTPS, emitindo certificados em tempo real a partir do lets-encrypt.
- [minio](https://github.com/pgsty/minio) - Fork mantido pela comunidade do minio (serviço de armazenamento de objetos).
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy é um servidor de aplicação simples de mocks e proxy; você pode criar endpoints mock e também encaminhar requisições via proxy caso não exista mock para o endpoint.
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Parser de logs do Nginx e exportador para o Prometheus.
- [nsq](https://nsq.io/) - Plataforma distribuída de mensagens em tempo real.
- [OpenRun](https://github.com/openrundev/openrun) - Alternativa de código aberto ao Google Cloud Run e ao AWS App Runner. Implante facilmente ferramentas internas para toda uma equipe.
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase é um backend em tempo real em 1 arquivo, composto por um banco de dados embutido (SQLite) com assinaturas em tempo real, gerenciamento de autenticação integrado e muito mais.
- [protoxy](https://github.com/camgraff/protoxy) - Servidor proxy que converte corpos de requisição JSON em Protocol Buffers.
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - Transmita eventos de banco de dados do PostgreSQL para o Kafka.
- [relay](https://github.com/valtors/relay) - Servidor MCP com mais de 40 ferramentas para agentes de IA. Operações com arquivos, busca na web, capturas de tela e coordenação multiagente. Binário Go único.
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Relay para balancear a carga de eventos do Riemann e/ou convertê-los para o Carbon.
- [RoadRunner](https://github.com/spiral/roadrunner) - Servidor de aplicações PHP, balanceador de carga e gerenciador de processos de alto desempenho.
- [SFTPGo](https://github.com/drakkan/sftpgo) - Servidor SFTP completo e altamente configurável, com suporte opcional a FTP/S e WebDAV. Pode servir o sistema de arquivos local e backends de armazenamento em nuvem, como S3 e Google Cloud Storage.
- [simpleconf](https://github.com/shaunlee/simpleconf) - Servidor de configuração que mantém um documento JSON, lido e escrito por caminho de chave via HTTP e TCP, com clustering Raft opcional.
- [Trickster](https://github.com/tricksterproxy/trickster) - Cache de proxy reverso HTTP e acelerador de séries temporais.
- [wd-41](https://github.com/baalimago/wd-41) - Servidor de desenvolvimento web ((w)eb (d)evelopment) com live reload automático quando arquivos mudam.
- [whois](https://github.com/KincaidYang/whois) - Serviço auto-hospedado de consultas WHOIS/RDAP e servidor MCP para domínios, endereços IPv4/IPv6, CIDRs e ASNs.
- [Wish](https://github.com/charmbracelet/wish) - Crie apps SSH, simples assim!

**[⬆ voltar ao topo](#contents)**

## Processamento de streams

_Bibliotecas e ferramentas para processamento de streams e programação reativa._

- [go-etl](https://github.com/Breeze0806/go-etl) - Kit de ferramentas leve para extração, transformação e carga (ETL) de fontes de dados.
- [go-streams](https://github.com/reugn/go-streams) - Biblioteca de processamento de streams para Go.
- [goio](https://github.com/primetalk/goio) - Implementação de IO, Stream e Fiber para Golang, inspirada nas incríveis bibliotecas Scala cats e fs2.
- [gostream](https://github.com/mariomac/gostream) - Biblioteca de processamento de streams com segurança de tipos inspirada na Java Streams API.
- [machine](https://github.com/whitaker-io/machine) - Biblioteca Go para escrever e gerar workers de streams com métricas e rastreabilidade integradas.
- [nibbler](https://github.com/naughtygopher/nibbler) - Pacote leve para processamento em micro lotes.
- [ro](https://github.com/samber/ro) - Programação reativa: API declarativa e componível para aplicações orientadas a eventos.
- [signals](https://github.com/coregx/signals) - Gerenciamento de estado reativo com segurança de tipos inspirado nos Angular Signals, com valores computados, efeitos e rastreamento de dependências.
- [stream](https://github.com/youthlin/stream) - Go Stream, como o Stream do Java 8: Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce...
- [StreamSQL](https://github.com/rulego/streamsql) - Engine SQL de streaming leve para processamento de dados em tempo real.

**[⬆ voltar ao topo](#contents)**

## Motores de template

_Bibliotecas e ferramentas para templates e análise léxica._

- [bagme](https://github.com/boxesandglue/bagme) - Renderização de HTML/CSS para PDF com tipografia de qualidade TeX em Go puro.
- [ego](https://github.com/benbjohnson/ego) - Linguagem de templates leve que permite escrever templates em Go. Os templates são traduzidos para Go e compilados.
- [fasttemplate](https://github.com/valyala/fasttemplate) - Motor de templates simples e rápido. Substitui os placeholders de templates até 10 vezes mais rápido que o [text/template](https://golang.org/pkg/text/template/).
- [gomponents](https://www.gomponents.com) - Componentes HTML 5 em Go puro, com uma aparência mais ou menos assim: `func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`.
- [got](https://github.com/goradd/got) - Gerador de código Go inspirado no Hero e no Fasttemplate. Tem arquivos de inclusão, definições de tags personalizadas, código Go injetado, tradução de idiomas e mais.
- [goview](https://github.com/foolin/goview) - Goview é uma biblioteca de templates leve, minimalista e idiomática, baseada no html/template do golang, para criar aplicações web em Go.
- [gox](https://github.com/doors-dev/gox) - Templates HTML como expressões Go de primeira classe, com suporte transparente em editores.
- [htmgo](https://htmgo.dev) - Crie sistemas simples e escaláveis com go + htmx
- [jet](https://github.com/CloudyKit/jet) - Motor de templates Jet.
- [liquid](https://github.com/osteele/liquid) - Implementação em Go dos templates Liquid da Shopify.
- [liquidgo](https://github.com/Notifuse/liquidgo) - Implementação completa em Go do motor de templates Liquid da Shopify.
- [maroto](https://github.com/johnfercher/maroto) - Um jeito maroto de criar PDFs. O Maroto é inspirado no Bootstrap e usa o gofpdf. Rápido e simples.
- [pongo2](https://github.com/flosch/pongo2) - Motor de templates semelhante ao do Django para Go.
- [quicktemplate](https://github.com/valyala/quicktemplate) - Motor de templates rápido, poderoso e, ainda assim, fácil de usar. Converte templates em código Go e depois o compila.
- [Razor](https://github.com/sipin/gorazor) - Motor de views Razor para Golang.
- [Soy](https://github.com/robfig/soy) - Closure templates (também conhecidos como Soy templates) para Go, seguindo a [especificação oficial](https://developers.google.com/closure/templates/).
- [sprout](https://github.com/go-sprout/sprout) - Funções de template úteis para templates Go.
- [tbd](https://github.com/lucasepe/tbd) - Uma forma realmente simples de criar templates de texto com placeholders - expõe metadados extras integrados do repositório Git.
- [templ](https://github.com/a-h/templ) - Linguagem de templates HTML com ótimas ferramentas para desenvolvedores.
- [templator](https://github.com/alesr/templator) - Motor de renderização de templates HTML com segurança de tipos para Go.

**[⬆ voltar ao topo](#contents)**

## Testes

_Bibliotecas para testar bases de código e gerar dados de teste._

### Frameworks de teste

- [apitest](https://apitest.dev) - Biblioteca de testes comportamentais simples e extensível para serviços REST ou handlers HTTP, com suporte a mocks de chamadas HTTP externas e renderização de diagramas de sequência.
- [arch-go](https://github.com/arch-go/arch-go) - Ferramenta de testes de arquitetura para projetos Go.
- [assay](https://github.com/tushariitr-19/assay) - Biblioteca de avaliação independente de framework para testar agentes Go e servidores MCP, com verificações determinísticas, códigos de saída prontos para CI e testes baseados em YAML sem código.
- [assert](https://github.com/go-playground/assert) - Biblioteca básica de asserções usada junto com os testes nativos do Go, com blocos de construção para asserções personalizadas.
- [axiom](https://github.com/Nikita-Filonov/axiom) - Framework de testes Go componível com fixtures, hooks, novas tentativas, metadados, plugins e execução paralela.
- [baloo](https://github.com/h2non/baloo) - Testes end-to-end de APIs HTTP expressivos e versáteis de forma fácil.
- [be](https://github.com/carlmjohnson/be) - A biblioteca minimalista e genérica de asserções para testes.
- [biff](https://github.com/fulldump/biff) - Framework de testes por bifurcação, compatível com BDD.
- [charlatan](https://github.com/percolate/charlatan) - Ferramenta para gerar implementações falsas de interfaces para testes.
- [commander](https://github.com/SimonBaeumer/commander) - Ferramenta para testar aplicações de CLI no windows, linux e osx.
- [coverage](https://github.com/jbunds/coverage) - Interface web simples para a cobertura de testes em Go, e a GitHub Action reutilizável [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report).
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - Complemento simples de testes de snapshot para o seu framework de testes.
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Limpe o banco de dados para fins de teste, inspirado no `database_cleaner` do Ruby.
- [dft](https://github.com/abecodes/dft) - Contêineres docker leves e sem dependências para testes (ou mais).
- [dsunit](https://github.com/viant/dsunit) - Testes de armazenamento de dados para SQL, NoSQL e arquivos estruturados.
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - Execute um banco de dados Postgres real localmente no Linux, OSX ou Windows como parte de outra aplicação ou teste Go.
- [endly](https://github.com/viant/endly) - Testes funcionais end-to-end declarativos.
- [envite](https://github.com/PerimeterX/envite) - Framework de gerenciamento de ambientes de desenvolvimento e teste.
- [fixenv](https://github.com/rekby/fixenv) - Engine de gerenciamento de fixtures, inspirada nas fixtures do pytest.
- [flute](https://github.com/suzuki-shunsuke/flute) - Framework de testes de clientes HTTP.
- [frisby](https://github.com/verdverm/frisby) - Framework de testes de APIs REST.
- [gherkingen](https://github.com/hedhyw/gherkingen) - Gerador de boilerplate e framework de BDD.
- [ginkgo](https://onsi.github.io/ginkgo/) - Framework de testes BDD para Go.
- [gnomock](https://github.com/orlangure/gnomock) - Testes de integração com dependências reais (banco de dados, cache e até Kubernetes ou AWS) rodando no Docker, sem mocks.
- [go-carpet](https://github.com/msoap/go-carpet) - Ferramenta para visualizar a cobertura de testes no terminal.
- [go-cmp](https://github.com/google/go-cmp) - Pacote para comparar valores Go em testes.
- [go-hit](https://github.com/Eun/go-hit) - Hit é um framework de testes de integração HTTP escrito em golang.
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - Ferramenta de teste e depuração HTTP com vários endpoints para testar clientes.
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - Testes de mutação para Go com quality gates de CI, MSI ciente da cobertura, acompanhamento de baseline e filtragem por git diff.
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - Testcontainer de MySQL em Golang para ajudar nos testes de integração com MySQL.
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Testes de snapshot no estilo do Jest em Golang.
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - Ferramenta que reporta a cobertura de arquivos abaixo do limite definido.
- [go-testdeep](https://github.com/maxatome/go-testdeep) - Comparação profunda extremamente flexível para golang; estende o pacote testing do Go.
- [go-testing](https://github.com/tkrop/go-testing) - Extensão de testes para Go que permite configurar de forma simples testes unitários, de componentes e de integração fortemente isolados, com suporte avançado a mocks que estende o gomock e o gock.
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - Biblioteca de asserções no estilo de predicados de teste, com saída de diagnóstico extensa.
- [go-vcr](https://github.com/dnaeon/go-vcr) - Grave e reproduza suas interações HTTP para testes rápidos, determinísticos e precisos.
- [goblin](https://github.com/franela/goblin) - Framework de testes para Go semelhante ao Mocha.
- [goc](https://github.com/qiniu/goc) - Goc é um sistema abrangente de testes de cobertura para a linguagem de programação Go.
- [gocheck](https://labix.org/gocheck) - Framework de testes mais avançado, alternativo ao gotest.
- [GoConvey](https://github.com/smartystreets/goconvey/) - Framework no estilo BDD com interface web e live reload.
- [gocrest](https://github.com/corbym/gocrest) - Matchers componíveis no estilo hamcrest para asserções em Go.
- [godog](https://github.com/cucumber/godog) - Framework BDD Cucumber para Go.
- [gofight](https://github.com/appleboy/gofight) - Testes de handlers de API para frameworks de roteamento em Golang.
- [gogiven](https://github.com/corbym/gogiven) - Framework de testes BDD semelhante ao YATSPEC para Go.
- [gomatch](https://github.com/jfilipczyk/gomatch) - Biblioteca criada para testar JSON contra padrões.
- [gomega](https://onsi.github.io/gomega/) - Biblioteca de matchers/asserções semelhante ao Rspec.
- [gospecify](https://github.com/stesla/gospecify) - Fornece uma sintaxe BDD para testar seu código Go. Deve ser familiar para quem já usou bibliotecas como o rspec.
- [gosuite](https://github.com/pavlo/gosuite) - Traz suítes de teste leves com recursos de setup/teardown ao `testing`, aproveitando os Subtests do Go1.7.
- [got](https://github.com/ysmood/got) - Framework de testes para golang agradável de usar.
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Coleção de pacotes para ampliar o pacote testing do Go e dar suporte a padrões comuns.
- [Hamcrest](https://github.com/rdrdr/hamcrest) - Framework fluente para objetos Matcher declarativos que, quando aplicados a valores de entrada, produzem resultados autodescritivos.
- [httper](https://github.com/gustofarbi/httper) - Executor de CLI para arquivos .http da JetBrains, com scripts, asserções, gRPC e testes de carga.
- [httpexpect](https://github.com/gavv/httpexpect) - Testes end-to-end de HTTP e APIs REST concisos, declarativos e fáceis de usar.
- [is](https://github.com/matryer/is) - Miniframework de testes leve e profissional para Go.
- [jsonassert](https://github.com/kinbiko/jsonassert) - Pacote para verificar se seus payloads JSON estão serializados corretamente.
- [keploy](https://github.com/keploy/keploy) - Gere casos de teste e mocks de dados a partir de chamadas de API automaticamente.
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - Biblioteca simples para alterar valores de campos privados em testes.
- [restit](https://github.com/yookoala/restit) - Microframework Go para ajudar a escrever testes de integração de APIs RESTful.
- [schema](https://github.com/jgroeneveld/schema) - Correspondência de expressões rápida e fácil para JSON schemas usados em requisições e respostas.
- [should](https://github.com/Kairum-Labs/should) - Biblioteca de testes sem dependências, com diffs detalhados de structs e mensagens de erro legíveis.
- [stop-and-go](https://github.com/elgohr/stop-and-go) - Auxiliar de testes para concorrência.
- [testcase](https://github.com/adamluzsi/testcase) - Framework de testes idiomático para Behavior Driven Development.
- [testcerts](https://github.com/madflojo/testcerts) - Gere dinamicamente certificados autoassinados e autoridades certificadoras dentro das suas funções de teste.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - Pacote Go que simplifica a criação e a limpeza de dependências baseadas em contêineres para testes automatizados de integração/smoke. A API limpa e fácil de usar permite que desenvolvedores definam programaticamente contêineres que devem ser executados como parte de um teste e limpem esses recursos quando o teste termina.
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - Auxiliar para fixtures de teste no estilo do Rails, para testar aplicações com banco de dados.
- [Testify](https://github.com/stretchr/testify) - Extensão sagrada do pacote testing padrão do Go.
- [Testo](https://github.com/ozontech/testo) - Framework de testes baseado em plugins, com suítes, testes paralelos, hooks e parametrização. Inspirado no Pytest.
- [testsql](https://github.com/zhulongcheng/testsql) - Gere dados de teste a partir de arquivos SQL antes dos testes e limpe-os ao final.
- [testza](https://github.com/MarvinJWendt/testza) - Framework de testes completo com uma bela saída colorida.
- [tparse](https://github.com/mfridman/tparse) - Ferramenta de CLI para resumir a saída do go test. Amigável a pipes. Compatível com as flags do go test.
- [trial](https://github.com/jgroeneveld/trial) - Asserções extensíveis rápidas e fáceis, sem introduzir muito boilerplate.
- [Tt](https://github.com/vcaesar/tt) - Ferramentas de teste simples e coloridas.
- [wstest](https://github.com/posener/wstest) - Cliente websocket para testes unitários de um http.Handler de websocket.

### Mock

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - Ferramenta para gerar objetos mock autocontidos.
- [fabricator](https://github.com/Goldziher/fabricator) - Factories com segurança de tipos para gerar dados mock e falsos em Go, inspiradas no factory_boy e no interface-forge.
- [genmock](https://gitlab.com/so_literate/genmock) - Sistema de mocks para Go com gerador de código para construir chamadas dos métodos de interfaces.
- [go-localstack](https://github.com/elgohr/go-localstack) - Ferramenta para usar o localstack em testes da AWS.
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - Driver SQL mock para testar interações com bancos de dados.
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - Driver de banco de dados baseado em uma única transação, principalmente para fins de teste.
- [gomock](https://github.com/uber-go/mock) - Framework de mocks para a linguagem de programação Go.
- [gomock](https://github.com/vibridi/gomock) - Ferramenta de CLI para gerar mocks de interfaces tipados e independentes de framework, com suporte a generics.
- [govcr](https://github.com/seborama/govcr) - Mock HTTP para Golang: grave e reproduza interações HTTP para testes offline.
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - Proxy HTTP(S) para gravar e simular APIs REST/SOAP, com middleware extensível e CLI fácil de usar.
- [httpmock](https://github.com/jarcoal/httpmock) - Mocks fáceis de respostas HTTP de recursos externos.
- [minimock](https://github.com/gojuno/minimock) - Gerador de mocks para interfaces Go.
- [mockery](https://github.com/vektra/mockery) - Ferramenta para gerar interfaces Go.
- [mockfs](https://github.com/balinomad/go-mockfs) - Sistema de arquivos mock para testes em Go, com injeção de erros e simulação de latência, construído sobre `testing/fstest.MapFS`.
- [mockhttp](https://github.com/tv42/mockhttp) - Objeto mock para o http.ResponseWriter do Go.
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - Forma simples de gerar mocks para diversos propósitos.
- [moq](https://github.com/matryer/moq) - Utilitário que gera uma struct a partir de qualquer interface. A struct pode ser usada no código de teste como mock da interface.
- [moxie](https://lesiw.io/moxie) - Gere métodos mock em structs embutidas.
- [pgxmock](https://github.com/pashagolub/pgxmock) - Biblioteca de mocks que implementa o [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/).
- [timex](https://github.com/cabify/timex) - Substituto amigável para testes do pacote nativo `time`.
- [wsmock](https://github.com/sing198/wsmock) - Servidor mock de WebSocket expressivo e sem boilerplate para testes, com injeção de falhas e asserções.
- [xgo](https://github.com/xhd2015/xgo) - Biblioteca de mocks de funções de uso geral.

### Fuzzing e delta-debugging/redução/minimização

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - Sistema de testes randomizados.
- [Tavor](https://github.com/zimmski/tavor) - Framework genérico de fuzzing e delta-debugging.

### Selenium e ferramentas de controle de navegador

- [bonk](https://github.com/joakimcarlsson/bonk) - Biblioteca de automação de navegadores rápida e com foco em discrição, que usa o Chrome DevTools Protocol sobre WebSocket, sem dependências externas.
- [cdp](https://github.com/mafredri/cdp) - Bindings com segurança de tipos para o Chrome Debugging Protocol, que podem ser usados com navegadores ou outros alvos de depuração que o implementem.
- [chromedp](https://github.com/knq/chromedp) - Forma de controlar/testar o Chrome, o Safari, o Edge, Webviews do Android e outros navegadores que suportam o Chrome Debugging Protocol.
- [playwright-go](https://github.com/mxschmitt/playwright-go) - Biblioteca de automação de navegadores para controlar o Chromium, o Firefox e o WebKit com uma única API.
- [rod](https://github.com/go-rod/rod) - Driver de Devtools para facilitar a automação web e o scraping.
- [selenosis](https://github.com/alcounit/selenosis) - Hub sem estado e nativo do Kubernetes que roteia sessões do Selenium, do Playwright e de MCP para pods de navegadores sob demanda por meio de recursos personalizados.

### Injeção de falhas

- [failpoint](https://github.com/pingcap/failpoint) - Implementação de [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) para Golang.

**[⬆ voltar ao topo](#contents)**

## Processamento de texto

_Bibliotecas para analisar e manipular textos._

Veja também [Processamento de linguagem natural](#natural-language-processing) e [Análise de texto](#text-analysis).

### Formatadores

- [address](https://github.com/bojanz/address) - Lida com a representação, a validação e a formatação de endereços.
- [align](https://github.com/Guitarbum722/align) - Aplicação de uso geral que alinha texto.
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - Formata e analisa valores numéricos de bytes (10K, 2M, 3G etc.).
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - Formatação de texto de largura fixa (codificador/decodificador com reflexão).
- [go-humanize](https://github.com/dustin/go-humanize) - Formatadores de tempo, números e tamanhos de memória em formato legível por humanos.
- [gotabulate](https://github.com/bndr/gotabulate) - Exiba de forma bonita seus dados tabulares com Go, facilmente.
- [sq](https://github.com/neilotoole/sq) - Converta dados de bancos de dados SQL ou de formatos de documentos como CSV ou Excel em formatos como JSON, Excel, CSV, HTML, Markdown, XML e YAML.
- [textwrap](https://github.com/isbm/textwrap) - Quebra o texto no fim das linhas. Implementação do módulo `textwrap` do Python.

### Linguagens de marcação

- [bafi](https://github.com/mmalcek/bafi) - Tradutor universal de JSON, BSON, YAML e XML para QUALQUER formato usando templates.
- [bbConvert](https://github.com/CalebQ42/bbConvert) - Converte bbCode em HTML e permite adicionar suporte a tags bbCode personalizadas.
- [blackfriday](https://github.com/russross/blackfriday) - Processador de Markdown em Go.
- [go-output-format](https://github.com/drewstinnett/go-output-format) - Gere estruturas Go em vários formatos (YAML/JSON/etc) no seu app de linha de comando.
- [go-toml](https://github.com/pelletier/go-toml) - Biblioteca Go para o formato TOML com suporte a consultas e ferramentas de CLI práticas.
- [goldmark](https://github.com/yuin/goldmark) - Parser de Markdown escrito em Go. Fácil de estender, em conformidade com o padrão (CommonMark) e bem estruturado.
- [goq](https://github.com/andrewstuart/goq) - Unmarshalling declarativo de HTML usando struct tags com sintaxe do jQuery (usa o GoQuery).
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - Converta HTML em Markdown. Funciona até com sites inteiros e pode ser estendido por meio de regras.
- [htmlquery](https://github.com/antchfx/htmlquery) - Pacote de consultas XPath para HTML, que permite extrair dados ou avaliar documentos HTML por meio de uma expressão XPath.
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Renderização rica de YAML como HTML em Go.
- [htree](https://github.com/bobg/htree) - Percorra, navegue, filtre e processe de outras formas árvores de objetos [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node).
- [markdown](https://github.com/nao1215/markdown) - Construtor de Markdown que gera GitHub Flavored Markdown e diagramas mermaid por meio de encadeamento de métodos.
- [mdsmith](https://github.com/jeduden/mdsmith) - Linter e formatador de Markdown rápido e com correção automática. Verifica estilo, legibilidade, estrutura e integridade entre arquivos.
- [mxj](https://github.com/clbanning/mxj) - Codifique / decodifique XML como JSON ou map[string]interface{}; extraia valores com caminhos em notação de ponto e curingas. Substitui os pacotes x2j e j2x.
- [picoloom](https://github.com/alnah/picoloom) - Conversor de Markdown para PDF com CLI e APIs de biblioteca Go.
- [toml](https://github.com/BurntSushi/toml) - Formato de configuração TOML (codificador/decodificador com reflexão).

### Parsers/codificadores/decodificadores

- [allot](https://github.com/sbstjn/allot) - Parsing de texto com placeholders e curingas para ferramentas de CLI e bots.
- [codetree](https://github.com/aerogo/codetree) - Analisa código indentado (python, pixy, scarlet etc.) e retorna uma estrutura de árvore.
- [commonregex](https://github.com/mingrammer/commonregex) - Coleção de expressões regulares comuns para Go.
- [did](https://github.com/ockam-network/did) - Parser e Stringer de DID (Decentralized Identifiers) em Go.
- [doi](https://github.com/hscells/doi) - Parser de identificadores de objetos digitais (doi) em Go.
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Parser e manipulador de arquivos Editorconfig para Go.
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - Módulo de alto desempenho para extração de domínios de nível superior efetivos (eTLD).
- [go-nmea](https://github.com/adrianmo/go-nmea) - Biblioteca de parsing de NMEA para a linguagem Go.
- [go-querystring](https://github.com/google/go-querystring) - Biblioteca Go para codificar structs em parâmetros de consulta de URL.
- [go-vcard](https://github.com/emersion/go-vcard) - Analise e formate vCards.
- [godump](https://github.com/yassinebenaid/godump) - Exiba de forma legível qualquer variável GO com facilidade; uma alternativa ao `fmt.Printf("%#v")` do Go.
- [godump (goforj)](https://github.com/goforj/godump) - Exiba de forma legível structs Go com dumps no estilo Laravel/Symfony, informações completas de tipos, saída colorida na CLI, detecção de ciclos e acesso a campos privados.
- [gofeed](https://github.com/mmcdole/gofeed) - Analise feeds RSS e Atom em Go.
- [gographviz](https://github.com/awalterschulze/gographviz) - Analisa a linguagem DOT do Graphviz.
- [gonameparts](https://github.com/polera/gonameparts) - Divide nomes de pessoas em suas partes individuais.
- [ltsv](https://github.com/Wing924/ltsv) - Leitor de [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) de alto desempenho para Go.
- [normalize](https://github.com/avito-tech/normalize) - Sanitize, normalize e compare texto aproximado.
- [parseargs-go](https://github.com/nproc/parseargs-go) - Parser de argumentos em string que entende aspas e barras invertidas.
- [prattle](https://github.com/askeladdk/prattle) - Analise léxica e sintaticamente gramáticas LL(1) de forma simples e eficiente.
- [sh](https://github.com/mvdan/sh) - Parser e formatador de shell.
- [tokenizer](https://github.com/bzick/tokenizer) - Converta qualquer string, slice ou buffer infinito em quaisquer tokens.
- [vdf](https://github.com/andygrunwald/vdf) - Lexer e parser para o Valves Data Format (conhecido como vdf), escrito em Go.
- [when](https://github.com/olebedev/when) - Parser de datas/horas em linguagem natural em inglês e russo, com regras plugáveis.
- [xj2go](https://github.com/stackerzzq/xj2go) - Converta XML ou JSON em structs Go.

### Expressões regulares

- [coregex](https://github.com/coregx/coregex) - Engine de regex para produção com a arquitetura da crate regex do Rust: DFA/NFA com múltiplas engines, pré-filtros SIMD e substituição direta da stdlib.
- [genex](https://github.com/alixaxel/genex) - Conte e expanda expressões regulares em todas as strings correspondentes.
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - Correspondência de padrões com curingas simples e leve.
- [goregen](https://github.com/zach-klippenstein/goregen) - Biblioteca para gerar strings aleatórias a partir de expressões regulares.
- [regroup](https://github.com/oriser/regroup) - Mapeie grupos nomeados de expressões regex em structs Go usando struct tags e parsing automático.
- [rex](https://github.com/hedhyw/rex) - Construtor de expressões regulares.

### Sanitização

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - Sanitizador de HTML.
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Filtro de palavrões baseado em sanitização para Go.

### Scrapers

- [colly](https://github.com/asciimoo/colly) - Framework de scraping rápido e elegante para Gophers.
- [dataflowkit](https://github.com/slotix/dataflowkit) - Framework de web scraping para transformar sites em dados estruturados.
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - Web crawler que converte sites de documentação em Markdown limpo e JSONL para ingestão por LLMs (RAG, dados de treinamento).
- [go-recipe](https://github.com/kkyr/go-recipe) - Pacote para fazer scraping de receitas em sites.
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - Biblioteca da linguagem Go para analisar sitemaps.
- [GoQuery](https://github.com/PuerkitoBio/goquery) - O GoQuery traz para a linguagem Go uma sintaxe e um conjunto de recursos semelhantes aos do jQuery.
- [pagser](https://github.com/foolin/pagser) - Pagser é um parser simples, extensível e configurável que desserializa páginas HTML em structs com base no goquery e em struct tags, para crawlers em golang.
- [Tagify](https://github.com/zoomio/tagify) - Produz um conjunto de tags a partir de uma fonte fornecida.
- [walker](https://github.com/cyucelen/walker) - Obtenha de forma transparente dados paginados de qualquer fonte. Inclui scraping de APIs simples e de alto desempenho.
- [xurls](https://github.com/mvdan/xurls) - Extraia URLs de textos.

### RSS

- [podcast](https://github.com/eduncan911/podcast) - Gerador de podcasts compatível com iTunes e RSS 2.0 em Golang

### Utilitários/diversos

- [ahocorasick](https://github.com/coregx/ahocorasick) - Correspondência de strings com múltiplos padrões Aho-Corasick de alto desempenho, com compilação para DFA e pré-filtro SIMD, vazão de até 7 GB/s (parte do ecossistema [coregx](https://github.com/coregx)).
- [go-runewidth](https://github.com/mattn/go-runewidth) - Funções para obter a largura fixa de caracteres ou strings.
- [kace](https://github.com/codemodus/kace) - Conversões comuns entre estilos de caixa, cobrindo siglas comuns.
- [lancet](https://github.com/duke-git/lancet) - Biblioteca de utilitários abrangente, semelhante ao Lodash, para Go
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich é a biblioteca que flexiona nomes russos no caso gramatical desejado.
- [radix](https://github.com/yourbasic/radix) - Algoritmo rápido de ordenação de strings.
- [TySug](https://github.com/Dynom/TySug) - Sugestões alternativas levando em conta layouts de teclado.
- [uniwidth](https://github.com/unilibs/uniwidth) - Cálculo de alto desempenho da largura de caracteres Unicode, com otimização SWAR, tabelas de consulta O(1) e suporte a emojis ZWJ.
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - Ferramenta de grep semântico que usa word embeddings para encontrar correspondências semanticamente semelhantes. Por exemplo, buscar "death" encontrará "dead", "killing", "murder".

**[⬆ voltar ao topo](#contents)**

## APIs de terceiros

_Bibliotecas para acessar APIs de terceiros._

- [airtable](https://github.com/mehanizm/airtable) - Biblioteca cliente Go para a [API do Airtable](https://airtable.com/api).
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Biblioteca cliente Go para a API 1.1 do Twitter.
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - SDK Golang não oficial para a API do App Store Connect.
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - Implementação não oficial em Go do [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html).
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - O SDK oficial da AWS para a linguagem de programação Go.
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Cliente Go para a API DeFi da Birdeye, com preços spot tipados, candles OHLCV, dados históricos e uma saída para requisições brutas.
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - Biblioteca Go de alto nível para gravar dados no [Google BigQuery](https://cloud.google.com/bigquery) com alta vazão.
- [brewerydb](https://github.com/naegelejd/brewerydb) - Biblioteca Go para acessar a API do BreweryDB.
- [cachet](https://github.com/andygrunwald/cachet) - Biblioteca cliente Go para o [Cachet (sistema de páginas de status de código aberto)](https://cachethq.io/).
- [circleci](https://github.com/jszwedko/go-circleci) - Biblioteca cliente Go para interagir com a API do CircleCI.
- [codeship-go](https://github.com/codeship/codeship-go) - Biblioteca cliente Go para interagir com a API v2 do Codeship.
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Cliente Go para a API v4 da Coinglass, sem dependências, com streams WebSocket e endpoints tipados para futuros, spot, opções, ETFs e indicadores.
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Biblioteca cliente Go para interagir com a API da Coinpaprika.
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - Biblioteca cliente Go para [The Colony](https://thecolony.cc) — uma rede social pública cujos usuários são agentes de IA.
- [device-check-go](https://github.com/rinchsan/device-check-go) - Biblioteca cliente Go para interagir com a [API DeviceCheck do iOS](https://developer.apple.com/documentation/devicecheck) v1.
- [discordgo](https://github.com/bwmarrin/discordgo) - Bindings Go para a API de chat do Discord.
- [disgo](https://github.com/switchupcb/disgo) - Wrapper Go para a API do Discord.
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Cliente não oficial para Go da API do gateway de pagamentos Dusupay
- [ethrpc](https://github.com/onrik/ethrpc) - Bindings Go para a API JSON RPC do Ethereum.
- [facebook](https://github.com/huandu/facebook) - Biblioteca Go com suporte à Graph API do Facebook.
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Cliente não oficial para Golang da API XML do gateway de pagamentos Fasapay.
- [fcm](https://github.com/maddevsio/fcm) - Biblioteca Go para o Firebase Cloud Messaging.
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - SDK Go para feature flags do [Featureflip](https://featureflip.io/), com avaliação local e atualizações via streaming.
- [gads](https://github.com/emiddleton/gads) - API não oficial do Google Adwords.
- [gcm](https://github.com/Aorioli/gcm) - Biblioteca Go para o Google Cloud Messaging.
- [geo-golang](https://github.com/codingsince1985/geo-golang) - Biblioteca Go para acessar as APIs de geocodificação / geocodificação reversa do [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/) e [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim).
- [github](https://github.com/google/go-github) - Biblioteca Go para acessar a API REST v3 do GitHub.
- [githubql](https://github.com/shurcooL/githubql) - Biblioteca Go para acessar a API GraphQL v4 do GitHub.
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - Biblioteca Go para acessar os serviços do [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) (Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud)
- [go-aws-news](https://github.com/circa10a/go-aws-news) - Aplicação e biblioteca Go para obter as novidades da AWS.
- [go-chronos](https://github.com/axelspringer/go-chronos) - Biblioteca Go para interagir com o agendador de jobs [Chronos](https://mesos.github.io/chronos/)
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - Biblioteca cliente Go para o [Gerrit Code Review](https://www.gerritcodereview.com/).
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - Pequeno cliente Go para a API do HackerNews.
- [go-here](https://github.com/abdullahselek/go-here) - Biblioteca cliente Go para as APIs baseadas em localização da HERE.
- [go-hibp](https://github.com/wneessen/go-hibp) - Binding Go simples para as APIs do "Have I Been Pwned".
- [go-imgur](https://github.com/koffeinsource/go-imgur) - Biblioteca cliente Go para o [imgur](https://imgur.com)
- [go-jira](https://github.com/andygrunwald/go-jira) - Biblioteca cliente Go para o [Atlassian JIRA](https://www.atlassian.com/software/jira)
- [go-lark](https://github.com/go-lark/lark) - SDK não oficial e fácil de usar para a Open Platform do [Feishu](https://open.feishu.cn/) e do [Lark](https://open.larksuite.com/).
- [go-marathon](https://github.com/gambol99/go-marathon) - Biblioteca Go para interagir com o PAAS Marathon da Mesosphere.
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - Biblioteca cliente Go para acessar a [API do MyAnimeList](https://myanimelist.net/apiconfig/references/api/v2).
- [go-openai](https://github.com/sashabaranov/go-openai) - Biblioteca Go para as APIs ChatGPT, DALL·E e Whisper da OpenAI.
- [go-openproject](https://github.com/manuelbcd/go-openproject) - Biblioteca cliente Go para interagir com a API do [OpenProject](https://docs.openproject.org/api/).
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - Módulo Go para trabalhar com [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) (compatível com o Insomnia).
- [go-redoc](https://github.com/mvrilo/go-redoc) - Interface de documentação OpenAPI/Swagger embutida para Go usando o [ReDoc](https://redocly.com/).
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - Biblioteca Go para a [REST Countries API](https://countrylayer.com/).
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - Biblioteca cliente Go para interagir com a [API REST do Salesforce](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm).
- [go-sophos](https://github.com/esurdam/go-sophos) - Biblioteca cliente Go para a [API REST do Sophos UTM](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en), sem dependências.
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - Biblioteca Go que contém o [Swagger UI](https://swagger.io/tools/swagger-ui/) pré-compilado para servir JSON do swagger.
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Cliente da API da plataforma de publicação Telegraph.
- [go-trending](https://github.com/andygrunwald/go-trending) - Biblioteca Go para acessar os [repositórios em alta](https://github.com/trending) e os [desenvolvedores em alta](https://github.com/trending/developers) no Github.
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - Biblioteca cliente Go para a API do [Unsplash.com](https://unsplash.com).
- [go-xkcd](https://github.com/nishanths/go-xkcd) - Cliente Go para a API do xkcd.
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Biblioteca cliente Go para a API v2.0 do Yapla.
- [goagi](https://github.com/staskobzar/goagi) - Biblioteca Go para criar aplicações agi/fastagi para o Asterisk PBX.
- [goami2](https://github.com/staskobzar/goami2) - Biblioteca AMI v2 para o Asterisk PBX.
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Biblioteca Golang que fornece abstrações de banco de dados comuns e simples sobre o Google Sheets.
- [gogtrends](https://github.com/groovili/gogtrends) - API não oficial do Google Trends.
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - Wrapper Golang para a API v3 do The Movie Database.
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics é uma biblioteca Go para obter letras de músicas do site Wikia.
- [gomalshare](https://github.com/MonaxGT/gomalshare) - Biblioteca Go para a API do MalShare [malshare.com](https://www.malshare.com/)
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Biblioteca cliente Go para o MusicBrainz WS2.
- [google](https://github.com/google/google-api-go-client) - APIs do Google geradas automaticamente para Go.
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Wrapper simples para relatórios fáceis do google analytics.
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Biblioteca cliente Go para as APIs do Google Cloud.
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - Biblioteca cliente Go para a [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/).
- [gopensky](https://github.com/navidys/gopensky) - Implementação de cliente Go para a API ao vivo da [OpenSKY Network](https://opensky-network.org/) (dados ADS-B e Mode S do espaço aéreo).
- [gosip](https://github.com/koltyakov/gosip) - Biblioteca cliente para o SharePoint.
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm é uma biblioteca Go que implementa o protocolo de comunicação necessário para escrever spouts e bolts do Storm em Go que se comunicam com os shells do Storm.
- [hipchat](https://github.com/andybons/hipchat) - Este projeto implementa uma biblioteca cliente golang para a API do Hipchat.
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - Pacote golang para se comunicar com o HipChat via XMPP.
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - Cliente Go para a API do httpSMS.
- [igdb](https://github.com/Henry-Sarabia/igdb) - Cliente Go para a [Internet Game Database API](https://api.igdb.com/).
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - Wrapper Go para a API do IP2Location.io [IP2Location.io](https://www.ip2location.io/).
- [jokeapi-go](https://github.com/icelain/jokeapi) - Cliente Go para a [JokeAPI](https://sv443.net/jokeapi/v2/).
- [lark](https://github.com/chyroc/lark) - SDK Go para a Open API do [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/), com suporte a TODA a Open API e a callbacks de eventos.
- [lastpass-go](https://github.com/ansd/lastpass-go) - Biblioteca cliente Go para a API do [LastPass](https://www.lastpass.com/).
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Cliente Go para a API do Lemon Squeezy.
- [libgoffi](https://github.com/clevabit/libgoffi) - Kit de ferramentas de adaptadores de bibliotecas para integração nativa com a [libffi](https://sourceware.org/libffi/)
- [libopenapi](https://github.com/pb33f/libopenapi) - Analise, valide e trabalhe com especificações OpenAPI, Swagger, Overlays e Arazzo.
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Cliente Go para a API v2 da Manus AI, com automação de tarefas, gerenciamento de arquivos, webhooks e modelos com segurança de tipos.
- [Medium](https://github.com/Medium/medium-sdk-go) - SDK Golang para a API OAuth2 do Medium.
- [megos](https://github.com/andygrunwald/megos) - Biblioteca cliente para acessar um cluster [Apache Mesos](https://mesos.apache.org/).
- [minio-go](https://github.com/minio/minio-go) - Biblioteca Go do Minio para armazenamento em nuvem compatível com o Amazon S3.
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel é uma biblioteca para rastrear eventos e enviar atualizações de perfis ao Mixpanel a partir das suas aplicações Go.
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Cliente Go para a API da Nansen AI, com análises de Smart Money, filtro de tokens, profiler e zero dependências.
- [newsapi-go](https://github.com/jellydator/newsapi-go) - Cliente Go para a [NewsAPI](https://newsapi.org/).
- [openaigo](https://github.com/otiai10/openaigo) - Biblioteca cliente Go para a API do ChatGPT GPT3/GPT3.5 da OpenAI.
- [patreon-go](https://github.com/mxpv/patreon-go) - Biblioteca Go para a API do Patreon.
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - Wrapper para a API de pagamentos do PayPal.
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - SDK Go para a API REST do Playlyfe.
- [pushover](https://github.com/gregdel/pushover) - Wrapper Go para a API do Pushover.
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - Biblioteca Go para a API do [RAWG Video Games Database](https://rawg.io/)
- [shopify](https://github.com/rapito/go-shopify) - Biblioteca Go para fazer requisições CRUD à API da Shopify.
- [simples3](https://github.com/rhnvrm/simples3) - Biblioteca simples e sem firulas para o AWS S3 usando REST com assinatura V4, escrita em Go.
- [slack](https://github.com/slack-go/slack) - API do Slack em Go.
- [smite](https://github.com/sergiotapia/smitego) - Pacote Go que encapsula o acesso à API do jogo Smite.
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - Biblioteca cliente Go e cliente de linha de comando para a Web API do SonarQube.
- [spec](https://github.com/oaswrap/spec) - Construtor leve de OpenAPI 3.x com suporte a geração estática e a frameworks populares como chi, echo, gin, fiber, mux e outros.
- [spotify](https://github.com/rapito/go-spotify) - Biblioteca Go para acessar a Web API do Spotify.
- [steam](https://github.com/sostronk/go-steam) - Biblioteca Go para interagir com servidores de jogos da Steam.
- [stripe](https://github.com/stripe/stripe-go) - Cliente Go para a API da Stripe.
- [swag](https://github.com/zc2638/swag) - Sem comentários: wrapper Go simples para criar APIs compatíveis com swagger 2.0. Suporta a maioria dos frameworks de roteamento, como o nativo, gin, chi, mux, echo, httprouter, fasthttp e outros.
- [textbelt](https://github.com/dietsche/textbelt) - Cliente Go para a API de mensagens de texto do textbelt.com.
- [threads-go](https://github.com/tirthpatell/threads-go) - Biblioteca cliente Go para a API do Threads da Meta, com OAuth 2.0, limitação de taxa e tratamento de erros com segurança de tipos.
- [Trello](https://github.com/adlio/trello) - Wrapper Go para a API do Trello.
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - Wrapper Go para a API do TripAdvisor.
- [tumblr](https://github.com/mattcunningham/gumblr) - Wrapper Go para a API v2 do Tumblr.
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Wrapper Go e cliente de linha de comando para a API v2 do Uptime Robot.
- [vl-go](https://github.com/verifid/vl-go) - Biblioteca cliente Go para a API da camada de verificação de identidade VerifID.
- [webhooks](https://github.com/go-playground/webhooks) - Receptor de webhooks para GitHub e Bitbucket.
- [wit-go](https://github.com/wit-ai/wit-go) - Cliente Go para a API HTTP do wit.ai.
- [ynab](https://github.com/brunomvsouza/ynab.go) - Wrapper Go para a API do YNAB.
- [zooz](https://github.com/gojuno/go-zooz) - Cliente Go para a API do Zooz.

**[⬆ voltar ao topo](#contents)**

## Utilitários

_Utilitários e ferramentas gerais para facilitar sua vida._

- [abstract](https://github.com/maxbolgarin/abstract) - Abstrações e utilitários para eliminar código boilerplate da lógica de negócio.
- [apm](https://github.com/topfreegames/apm) - Gerenciador de processos para aplicações Golang com uma API HTTP.
- [backscanner](https://github.com/icza/backscanner) - Scanner semelhante ao bufio.Scanner, mas que lê e retorna linhas em ordem inversa, começando em uma determinada posição e indo para trás.
- [bed](https://github.com/itchyny/bed) - Editor binário semelhante ao Vim escrito em Go.
- [blank](https://github.com/Henry-Sarabia/blank) - Verifique ou remova espaços em branco de strings.
- [bleep](https://github.com/sinhashubham95/bleep) - Execute qualquer número de ações para qualquer conjunto de sinais do sistema operacional em Go.
- [boilr](https://github.com/tmrts/boilr) - Ferramenta de CLI extremamente rápida para criar projetos a partir de templates de boilerplate.
- [boring](https://github.com/alebeck/boring) - Gerenciador simples de túneis SSH para a linha de comando.
- [changie](https://github.com/miniscruff/changie) - Ferramenta automatizada de changelog para preparar releases, com muitas opções de personalização.
- [chyle](https://github.com/antham/chyle) - Gerador de changelog que usa um repositório git, com várias possibilidades de configuração.
- [circuit](https://github.com/cep21/circuit) - Implementação em Go eficiente e completa do padrão circuit breaker, semelhante ao Hystrix.
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Circuit breakers em Go.
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Pacote de área de transferência multiplataforma em Go.
- [clockwork](https://github.com/jonboulle/clockwork) - Relógio falso simples para golang.
- [cmd](https://github.com/SimonBaeumer/cmd) - Biblioteca para executar comandos de shell no osx, windows e linux.
- [config-file-validator](https://github.com/Boeing/config-file-validator) - Ferramenta multiplataforma para validar arquivos de configuração.
- [contem](https://github.com/maxbolgarin/contem) - Substituto direto do context.Context para o encerramento gracioso de aplicações Go.
- [cookie](https://github.com/syntaqx/cookie) - Pacote de parsing e helpers para structs de cookies.
- [copy-pasta](https://github.com/jutkko/copy-pasta) - Área de transferência universal para várias estações de trabalho que usa um backend semelhante ao S3 para o armazenamento.
- [countries](https://github.com/biter777/countries) - Implementação completa dos padrões ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR e IANA ccTLD.
- [countries](https://github.com/pioz/countries) - Tudo o que você precisa ao trabalhar com países em Go.
- [create-go-app](https://github.com/create-go-app/cli) - CLI poderosa para criar um novo projeto pronto para produção, com backend (Golang), frontend (JavaScript, TypeScript) e automação de deploy (Ansible, Docker), executando um único comando.
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo é uma aplicação baseada em TUI, escrita totalmente em Go, para monitorar e observar preços de criptomoedas em tempo real!
- [ctop](https://github.com/bcicen/ctop) - Interface [semelhante ao top](https://ctop.sh) (por exemplo, htop) para métricas de contêineres.
- [ctxutil](https://github.com/posener/ctxutil) - Coleção de funções utilitárias para contextos.
- [cvt](https://github.com/shockerli/cvt) - Converta qualquer valor para outro tipo de forma fácil e segura.
- [dbt](https://github.com/nikogura/dbt) - Framework para executar binários assinados e autoatualizáveis a partir de um repositório central confiável.
- [Death](https://github.com/vrecan/death) - Gerenciamento do encerramento de aplicações Go com sinais.
- [debounce](https://github.com/floatdrop/debounce) - Debouncer sem alocações escrito em Go.
- [delve](https://github.com/derekparker/delve) - Depurador para Go.
- [dive](https://github.com/wagoodman/dive) - Ferramenta para explorar cada camada de uma imagem Docker.
- [dlog](https://github.com/kirillDanshin/dlog) - Logger controlado em tempo de compilação para deixar seu release menor sem remover as chamadas de depuração.
- [EaseProbe](https://github.com/megaease/easeprobe) - Ferramenta simples, independente e leve que funciona como daemon de verificação de saúde/status, com suporte a probes HTTP/TCP/SSH/Shell/Client/... e notificações via Slack/Discord/Telegram/SMS...
- [equalizer](https://github.com/reugn/equalizer) - Coleção de gerenciadores de cotas e limitadores de taxa para Go.
- [ergo](https://github.com/cristianoliveira/ergo) - Gerenciamento fácil de vários serviços locais rodando em portas diferentes.
- [evaluator](https://github.com/nullne/evaluator) - Avalie uma expressão dinamicamente com base em s-expressions. É simples e fácil de estender.
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Padrões de tolerância a falhas e resiliência para Go.
- [filetype](https://github.com/h2non/filetype) - Pequeno pacote para inferir o tipo de arquivo verificando a assinatura de magic numbers.
- [filler](https://github.com/yaronsumel/filler) - Pequeno utilitário para preencher structs usando a tag "fill".
- [filter](https://github.com/gookit/filter) - Fornece filtragem, sanitização e conversão de dados Go.
- [fzf](https://github.com/junegunn/fzf) - Buscador fuzzy de linha de comando escrito em Go.
- [generate](https://github.com/go-playground/generate) - Executa go generate recursivamente em um caminho ou variável de ambiente especificados e pode filtrar por regex.
- [gh-image](https://github.com/drogers0/gh-image) - Extensão da CLI gh que envia imagens para issues, PRs e READMEs do GitHub pela linha de comando, gerando URLs de user-attachments que respeitam a visibilidade do repositório.
- [ghokin](https://github.com/antham/ghokin) - Formatador paralelizado e sem dependências externas para gherkin (cucumber, behat...).
- [git-time-metric](https://github.com/git-time-metric/gtm) - Controle de tempo simples, transparente e leve para o Git.
- [git-tools](https://github.com/kazhuravlev/git-tools) - Ferramenta para ajudar a gerenciar tags do git.
- [gitbatch](https://github.com/isacikgoz/gitbatch) - Gerencie seus repositórios git em um só lugar.
- [gitcs](https://github.com/knbr13/gitcs/) - Git Commits Visualizer: ferramenta de CLI para visualizar seus commits do Git na sua máquina local.
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Recursos prontos para produção para frameworks web baseados em Go.
- [go-astitodo](https://github.com/asticode/go-astitodo) - Analise os TODOs no seu código GO.
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - Ferramenta go:generate para encapsular símbolos exportados por plugins golang (apenas 1.8).
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - Bibliotecas e ferramentas de CLI bsdiff e bspatch em Go puro.
- [go-clip](https://github.com/prashantgupta24/go-clip) - Gerenciador de área de transferência minimalista para Mac.
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Conjuntos genéricos de constantes tipadas com parsing seguro de strings, para suprir o tipo enum que falta no Go.
- [go-convert](https://github.com/Eun/go-convert) - O pacote go-convert permite converter um valor em outro tipo.
- [go-countries](https://github.com/mikekonan/go-countries) - Consulta leve de códigos ISO-3166.
- [go-dry](https://github.com/ungerik/go-dry) - Pacote DRY (don't repeat yourself) para Go.
- [go-events](https://github.com/deatil/go-events) - Pacote Go de eventos e assinatura de eventos, como as funções de hook do wordpress.
- [go-funk](https://github.com/thoas/go-funk) - Biblioteca moderna de utilitários Go que fornece helpers (map, find, contains, filter, chunk, reverse, ...).
- [go-health](https://github.com/Talento90/go-health) - O pacote Health simplifica a forma de adicionar health checks aos seus serviços.
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - Biblioteca Go para codificar structs em campos de cabeçalho.
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - CLI para remover versões não utilizadas ou anteriores de AWS Lambdas.
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock é uma biblioteca de locks que implementa mutex de leitura e escrita e trylock de leitura e escrita sem starvation.
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - Biblioteca de pattern matching inspirada no ts-pattern.
- [go-pkg](https://github.com/chenquan/go-pkg) - Kit de ferramentas Go.
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Pacote Go para trabalhar com Problem Details.
- [go-qr](https://github.com/piglig/go-qr) - Gerador de QR codes nativo, de alta qualidade e minimalista.
- [go-rate](https://github.com/beefsack/go-rate) - Limitador de taxa temporizado para Go.
- [go-safecast](https://github.com/ccoVeille/go-safecast) - Biblioteca de conversão segura de tipos numéricos que evita overflow e underflow de inteiros (trata o gosec G115 e a CWE-190).
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Gerador de sitemaps XML escrito em Go.
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - Helpers genéricos com segurança de tipos para slices, mapas, strings, erros, JSON, HTTP e contêineres, organizados como pequenos pacotes que podem ser adotados de forma independente.
- [go-trigger](https://github.com/sadlil/go-trigger) - Disparador global de eventos para Go: registre eventos com um id e dispare-os de qualquer lugar do seu projeto.
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper é um pacote de circuit breaker para Go que permite criar circuitos e controlar o status deles.
- [go-type](https://github.com/mikekonan/go-types) - Biblioteca que fornece tipos Go para armazenamento/validação e transferência de ISO-4217, ISO-3166 e outros tipos.
- [go-utils](https://github.com/Goldziher/go-utils) - Utilitários genéricos simples e eficientes para Go, inspirados em JavaScript e Python (map, filter, reduce e mais).
- [goback](https://github.com/carlescere/goback) - Pacote simples de backoff exponencial para Go.
- [goctx](https://github.com/zerosnake0/goctx) - Obtenha os valores do seu contexto com alto desempenho.
- [godaemon](https://github.com/VividCortex/godaemon) - Utilitário para escrever daemons.
- [godoclive](https://github.com/syst3mctl/godoclive) - Gera documentação interativa de APIs a partir de handlers HTTP em Go usando análise estática de roteadores chi, gin e net/http.
- [godropbox](https://github.com/dropbox/godropbox) - Bibliotecas comuns do Dropbox para escrever serviços/aplicações Go.
- [gofn](https://github.com/tiendc/gofn) - Funções utilitárias de alto desempenho escritas com generics para Go 1.18+.
- [golarm](https://github.com/msempere/golarm) - Dispare alarmes com eventos do sistema.
- [golog](https://github.com/mlimaloureiro/golog) - Ferramenta de CLI fácil e leve para controlar o tempo das suas tarefas.
- [gopencils](https://github.com/bndr/gopencils) - Pacote pequeno e simples para consumir APIs REST facilmente.
- [goplaceholder](https://github.com/michiwend/goplaceholder) - Pequena biblioteca golang para gerar imagens de placeholder.
- [goreadability](https://github.com/philipjkim/goreadability) - Extrator de resumos de páginas web usando o Open Graph do Facebook e o readability da arc90.
- [goreleaser](https://github.com/goreleaser/goreleaser) - Entregue binários Go da forma mais rápida e fácil possível.
- [goreporter](https://github.com/wgliang/goreporter) - Ferramenta Golang que faz análise estática, testes unitários e revisão de código e gera relatórios de qualidade de código.
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - Biblioteca cliente do SeaweedFS com quase todos os recursos.
- [gostrutils](https://github.com/ik5/gostrutils) - Coleções de funções de manipulação e conversão de strings.
- [gotenv](https://github.com/subosito/gotenv) - Carregue variáveis de ambiente de `.env` ou de qualquer `io.Reader` em Go.
- [goval](https://github.com/maja42/goval) - Avalie expressões arbitrárias em Go.
- [graterm](https://github.com/skovtunenko/graterm) - Fornece primitivas para realizar o GRAceful TERMination (também conhecido como encerramento gracioso) ordenado (sequencial/concorrente) em aplicações Go.
- [grofer](https://github.com/pesos/grofer) - Ferramenta de monitoramento de sistema e recursos escrita em Golang!
- [gubrak](https://github.com/novalagung/gubrak) - Biblioteca de utilitários Golang com açúcar sintático. É como o lodash, mas para golang.
- [handy](https://github.com/miguelpragier/handy) - Muitos utilitários e helpers, como manipuladores/formatadores de strings e validadores.
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Teste de prontidão (readiness) simples, porém poderoso, para Kubernetes.
- [hostctl](https://github.com/guumaster/hostctl) - Ferramenta de CLI para gerenciar o /etc/hosts com comandos fáceis.
- [htcat](https://github.com/htcat/htcat) - Utilitário de HTTP GET paralelo e em pipeline.
- [hub](https://github.com/github/hub) - Encapsula comandos do git com funcionalidades adicionais para interagir com o github pelo terminal.
- [immortal](https://github.com/immortal/immortal) - Supervisor multiplataforma para \*nix (independente de sistema operacional).
- [jet](https://github.com/NicoNex/jet) - Just Edit Text: ferramenta rápida e poderosa para localizar e substituir conteúdo e nomes de arquivos usando expressões regulares.
- [jsend](https://github.com/clevergo/jsend) - Implementação do JSend escrita em Go.
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - Visualizador interativo de logs JSON.
- [jump](https://github.com/gsamokovarov/jump) - O Jump ajuda você a navegar mais rápido aprendendo seus hábitos.
- [just](https://github.com/kazhuravlev/just) - Apenas uma coleção de funções úteis para trabalhar com estruturas de dados genéricas.
- [koazee](https://github.com/wesovilabs/koazee) - Biblioteca inspirada em avaliação preguiçosa e programação funcional que tira o trabalho chato de lidar com arrays.
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - Descoberta e inventário de dispositivos de rede com rotulagem persistente, varredura de várias redes e integração com o Tailscale.
- [lang](https://github.com/maxbolgarin/lang) - One-liners genéricos para trabalhar com variáveis, slices e mapas sem código boilerplate.
- [lets-go](https://github.com/aplescia-chwy/lets-go) - Módulo Go que fornece utilitários comuns para o desenvolvimento de APIs REST cloud native. Também contém utilitários específicos da AWS.
- [limiters](https://github.com/mennanov/limiters) - Limitadores de taxa para aplicações distribuídas em Golang, com backends configuráveis e locks distribuídos.
- [lo](https://github.com/samber/lo) - Biblioteca Go semelhante ao Lodash baseada nos generics do Go 1.18+ (map, filter, contains, find...)
- [loncha](https://github.com/kazu/loncha) - Utilitários de slices de alto desempenho.
- [lrserver](https://github.com/jaschaephraim/lrserver) - Servidor LiveReload para Go.
- [mani](https://github.com/alajmo/mani) - Ferramenta de CLI para ajudar você a gerenciar vários repositórios.
- [mc](https://github.com/minio/mc) - O Minio Client fornece ferramentas mínimas para trabalhar com armazenamento em nuvem compatível com o Amazon S3 e sistemas de arquivos.
- [mergo](https://github.com/imdario/mergo) - Auxiliar para mesclar structs e mapas em Golang. Útil para valores padrão de configuração, evitando ifs bagunçados.
- [mimemagic](https://github.com/zRedShift/mimemagic) - Biblioteca/utilitário de detecção de MIME em Go puro, de altíssimo desempenho.
- [mimetype](https://github.com/gabriel-vasile/mimetype) - Pacote para detecção de tipos MIME com base em magic numbers.
- [minify](https://github.com/tdewolff/minify) - Minificadores rápidos para os formatos de arquivo HTML, CSS, JS, XML, JSON e SVG.
- [minquery](https://github.com/icza/minquery) - Consulta MongoDB / mgo.v2 com suporte a paginação eficiente (cursores para continuar listando documentos de onde paramos).
- [moldova](https://github.com/StabbyCutyou/moldova) - Utilitário para gerar dados aleatórios com base em um template de entrada.
- [mole](https://github.com/davrodpin/mole) - App de CLI para criar túneis SSH facilmente.
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - Paginação do Mongodb para o pacote oficial mongodb/mongo-go-driver, com suporte tanto a consultas normais quanto a pipelines de agregação.
- [mssqlx](https://github.com/linxGnu/mssqlx) - Biblioteca cliente de banco de dados e proxy para quaisquer estruturas master-slave e master-master. Pensada para ser leve e com balanceamento automático.
- [multitick](https://github.com/VividCortex/multitick) - Multiplexador para tickers alinhados.
- [netbug](https://github.com/e-dard/netbug) - Profiling remoto fácil dos seus serviços.
- [nfdump](https://github.com/chrispassas/nfdump) - Leia arquivos netflow do nfdump.
- [nostromo](https://github.com/pokanop/nostromo) - CLI para criar aliases poderosos.
- [okrun](https://github.com/xta/okrun) - Rolo compressor de erros do go run.
- [olaf](https://github.com/btnguyen2k/olaf) - Snowflake do Twitter implementado em Go.
- [onecache](https://github.com/adelowo/onecache) - Biblioteca de cache com suporte a vários armazenamentos de backend (Redis, Memcached, sistema de arquivos etc.).
- [optional](https://github.com/kazhuravlev/optional) - Campos de structs e variáveis opcionais.
- [panicparse](https://github.com/maruel/panicparse) - Agrupa goroutines semelhantes e colore o dump da pilha.
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - Biblioteca de pattern matching.
- [peco](https://github.com/peco/peco) - Ferramenta de filtragem interativa simplista.
- [pgo](https://github.com/arthurkushman/pgo) - Funções práticas para a comunidade PHP.
- [pm](https://github.com/VividCortex/pm) - Gerenciador de processos (ou seja, goroutines) com uma API HTTP.
- [pointer](https://github.com/xorcare/pointer) - O pacote pointer contém rotinas auxiliares para simplificar a criação de campos opcionais de tipos básicos.
- [ptr](https://github.com/gotidy/ptr) - Pacote que fornece funções para a criação simplificada de ponteiros a partir de constantes de tipos básicos.
- [rate](https://github.com/webriots/rate) - Biblioteca de limitação de taxa de alto desempenho com as estratégias token bucket e AIMD.
- [rclient](https://github.com/zpatrick/rclient) - Cliente legível, flexível e simples de usar para APIs REST.
- [release](https://github.com/tomodian/release) - CLI para changelogs no formato Keep-a-changelog.
- [relimpact](https://github.com/hashmap-kz/relimpact) - Relatórios rápidos de compatibilidade de API para projetos Go.
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - Controle o mouse e o teclado a partir de um smartphone.
- [repeat](https://github.com/ssgreg/repeat) - Implementação em Go de diferentes estratégias de backoff, úteis para repetir operações e para heartbeats.
- [request](https://github.com/mozillazg/request) - Requisições HTTP em Go para Humanos™.
- [rerun](https://github.com/ivpusic/rerun) - Recompila e reexecuta apps Go quando o código-fonte muda.
- [rest-go](https://github.com/edermanoel94/rest-go) - Pacote que fornece muitos métodos úteis para trabalhar com APIs REST.
- [retro](https://github.com/goioc/retro) - Biblioteca prática de novas tentativas em caso de erro, com ampla flexibilidade (estratégias de backoff, limites etc.).
- [retry](https://github.com/kamilsk/retry) - O mecanismo funcional mais avançado para executar ações repetidamente até que tenham sucesso.
- [retry](https://github.com/percolate/retry) - Pacote de novas tentativas simples, mas altamente configurável, para Go.
- [retry](https://github.com/thedevsaddam/retry) - Pacote simples e fácil de mecanismo de novas tentativas para Go.
- [retry](https://github.com/shafreeck/retry) - Biblioteca bem simples para garantir que seu trabalho seja concluído.
- [retry-go](https://github.com/avast/retry-go) - Biblioteca simples de mecanismo de novas tentativas.
- [retry-go](https://github.com/rafaeljesus/retry-go) - Novas tentativas de forma simples e fácil para golang.
- [robustly](https://github.com/VividCortex/robustly) - Executa funções de forma resiliente, capturando panics e reiniciando.
- [rospo](https://github.com/ferama/rospo) - Túneis SSH simples e confiáveis com servidor SSH embutido em Golang.
- [scan](https://github.com/blockloop/scan) - Faça o scan de `sql.Rows` do golang diretamente para structs, slices ou tipos primitivos.
- [scan](https://github.com/wroge/scan) - Faça o scan de linhas SQL para qualquer tipo, com o poder dos generics.
- [scany](https://github.com/georgysavva/scany) - Biblioteca para fazer o scan de dados de um banco de dados para structs Go e mais.
- [serve](https://github.com/syntaqx/serve) - Servidor HTTP estático onde você precisar.
- [sesh](https://github.com/joshmedeski/sesh) - Sesh é uma CLI que ajuda você a criar e gerenciar sessões do tmux de forma rápida e fácil usando o zoxide.
- [set](https://github.com/nofeaturesonlybugs/set) - Mapeamento de structs eficiente e flexível e conversão de tipos tolerante.
- [shutdown](https://github.com/ztrue/shutdown) - Hooks de encerramento de apps para o tratamento de `os.Signal`.
- [silk](https://github.com/chrispassas/silk) - Leia arquivos netflow do silk.
- [slice](https://github.com/psampaz/slice) - Funções com segurança de tipos para operações comuns com slices em Go.
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - Conversão de slices entre tipos primitivos.
- [slicer](https://github.com/leaanthony/slicer) - Facilita o trabalho com slices.
- [sorty](https://github.com/jfcg/sorty) - Ordenação concorrente / paralela rápida.
- [sqlex](https://github.com/go-sqlex/sqlex) - Modernização direta do jmoiron/sqlx, com bugs do lexer SQL corrigidos, expansão automática de cláusulas IN, hooks plugáveis e interfaces DB/Tx/Conn unificadas.
- [sqlx](https://github.com/jmoiron/sqlx) - Fornece um conjunto de extensões sobre o excelente pacote nativo database/sql.
- [sqlz](https://github.com/rfberaldo/sqlz) - Extensão para o pacote database/sql que adiciona consultas nomeadas, scan para structs e operações em lote.
- [sshman](https://github.com/shoobyban/sshman) - Gerenciador SSH para arquivos authorized_keys em vários servidores remotos.
- [stacktower](https://github.com/stacktower-io/stacktower) - Visualize grafos de dependências como estruturas físicas de torres, inspirado no XKCD #2347.
- [statiks](https://github.com/janiltonmaciel/statiks) - Servidor HTTP de arquivos estáticos rápido e sem configuração.
- [Storm](https://github.com/asdine/storm) - Kit de ferramentas simples e poderoso para o BoltDB.
- [structs](https://github.com/PumpkinSeed/structs) - Implementa funções simples para manipular structs.
- [throttle](https://github.com/yudppp/throttle) - Throttle é um objeto que executa exatamente uma ação por intervalo de tempo.
- [tik](https://github.com/andy2046/tik) - Pacote de timing wheel simples e fácil para Go.
- [tome](https://github.com/cyruzin/tome) - O Tome foi projetado para paginar APIs RESTful simples.
- [toolbox](https://github.com/viant/toolbox) - Utilitários de slices, mapas, multimapas, structs, funções e conversão de dados. Roteador de serviços, avaliador de macros, tokenizador.
- [UNIS](https://github.com/esemplastic/unis) - Common Architecture™ para utilitários de strings em Go.
- [upterm](https://github.com/owenthereal/upterm) - Ferramenta para desenvolvedores compartilharem sessões de terminal/tmux com segurança pela web. É perfeita para programação em par remota, acesso a computadores atrás de NATs/firewalls, depuração remota e mais.
- [usql](https://github.com/knq/usql) - usql é uma interface de linha de comando universal para bancos de dados SQL.
- [util](https://github.com/shomali11/util) - Coleção de funções utilitárias úteis. (strings, concorrência, manipulações, ...).
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - Execute um comando periodicamente e exponha o STDOUT mais recente ou seu delta detalhado como um endpoint HTTP.
- [wifiqr](https://github.com/reugn/wifiqr) - Gerador de QR codes de Wi-Fi.
- [wuzz](https://github.com/asciimoo/wuzz) - Ferramenta de CLI interativa para inspeção de HTTP.
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy fornece uma biblioteca de diff e patch binários em golang.
- [xpool](https://github.com/peczenyj/xpool) - Mais um pool de objetos com segurança de tipos para golang, usando generics.
- [yogo](https://github.com/antham/yogo) - Verifique e-mails do yopmail pela linha de comando.

**[⬆ voltar ao topo](#contents)**

## UUID

_Bibliotecas para trabalhar com UUIDs._

- [fastuuid](https://github.com/rekby/fastuuid) - Gere rapidamente UUIDv4 como string ou bytes.
- [goid](https://github.com/jakehl/goid) - Gere e analise UUIDs V4 em conformidade com a RFC4122.
- [gouid](https://github.com/twharmon/gouid) - Gere IDs de strings aleatórias criptograficamente seguros com apenas uma alocação.
- [guid](https://github.com/sdrapkin/guid) - Gerador de Guid rápido e criptograficamente seguro para Go (~10x mais rápido que `uuid`).
- [nanoid](https://github.com/aidarkhanov/nanoid) - Gerador de IDs únicos em string, minúsculo e eficiente, para Go.
- [nanoid](https://github.com/sixafter/nanoid) - Gerador eficiente e criptograficamente seguro para a criação rápida e concorrente de NanoIDs e UUIDs.
- [sno](https://github.com/muyo/sno) - IDs únicos compactos, ordenáveis e rápidos, com metadados embutidos.
- [ulid](https://github.com/oklog/ulid) - Implementação em Go do ULID (Universally Unique Lexicographically Sortable Identifier).
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - Identificadores únicos seguros e rápidos, sem complicação, com comandos.
- [uuid](https://github.com/agext/uuid) - Gere, codifique e decodifique UUIDs v1 com identificador de nó aleatório rápido ou de qualidade criptográfica.
- [uuid](https://github.com/gofrs/uuid) - Implementação do Universally Unique Identifier (UUID). Suporta tanto a criação quanto o parsing de UUIDs. Fork ativamente mantido do satori uuid.
- [uuid](https://github.com/google/uuid) - Pacote Go para UUIDs baseado na RFC 4122 e no DCE 1.1: Authentication and Security Services.
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - Biblioteca Go minúscula e sem dependências que valida UUIDs segundo a formatação padrão da RFC 4122 e converte UUIDv7() em timestamps UTC.
- [wuid](https://github.com/edwingeng/wuid) - Gerador de números globalmente únicos extremamente rápido.
- [xid](https://github.com/rs/xid) - Xid é uma biblioteca geradora de IDs globalmente únicos, pronta para ser usada com segurança diretamente no código do seu servidor.

**[⬆ voltar ao topo](#contents)**

## Validação

_Bibliotecas para validação._

- [checkdigit](https://github.com/osamingo/checkdigit) - Fornece algoritmos de dígito verificador (Luhn, Verhoeff, Damm) e calculadoras (ISBN, EAN, JAN, UPC etc.).
- [checker](https://github.com/cinar/checker) - Validação de entrada e normalização no local sem dependências, com struct tags, 23 locales e geração de JSON Schema.
- [go-validator](https://github.com/tiendc/go-validator) - Biblioteca de validação usando generics.
- [gody](https://github.com/guiferpa/gody) - :balloon: Validador de structs leve para Go.
- [govalid](https://github.com/twharmon/govalid) - Validação rápida de structs baseada em tags.
- [govalidator](https://github.com/asaskevich/govalidator) - Validadores e sanitizadores para strings, números, slices e structs.
- [govalidator](https://github.com/thedevsaddam/govalidator) - Valide dados de requisições em Golang com regras simples. Fortemente inspirado na validação de requisições do Laravel.
- [govy](https://github.com/nobl9/govy) - Regras de validação fortemente tipadas sobre uma interface funcional, com generics e sem reflexão, com forte foco em produzir mensagens de erro claras e ricas em informações.
- [hvalid](https://github.com/lyonnee/hvalid) hvalid é uma biblioteca de validação leve escrita na linguagem Go. Fornece uma interface de validador personalizável e uma série de funções de validação comuns para ajudar desenvolvedores a implementar rapidamente a validação de dados.
- [jio](https://github.com/faceair/jio) - jio é um validador de JSON schema semelhante ao [joi](https://github.com/hapijs/joi).
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - Suporta a validação de vários tipos de dados (structs, strings, mapas, slices etc.) com regras de validação configuráveis e extensíveis, especificadas em construções de código comuns em vez de struct tags.
- [validate](https://github.com/gookit/validate) - Pacote Go para validação e filtragem de dados. Suporta a validação de dados de Map, Struct e Request (Form, JSON, url.Values, arquivos enviados) e mais recursos.
- [validate](https://github.com/gobuffalo/validate) - Este pacote fornece um framework para escrever validações para aplicações Go.
- [validator](https://github.com/go-playground/validator) - Validação de structs e campos em Go, incluindo validação entre campos e entre structs e mergulho em mapas, slices e arrays.
- [Validator](https://github.com/go-the-way/validator) - Validador de modelos leve escrito em Go. Contém as VFs: Min, Max, MinLength, MaxLength, Length, Enum, Regex.
- [valix](https://github.com/marrow16/valix) Pacote Go para validar requisições
- [vx](https://github.com/sevlyar/vx) - Validação construída a partir de verificações pequenas e componíveis, sem dependências e com um caminho de erro reconstruível.
- [Zog](https://github.com/Oudwins/zog) - Construtor de schemas inspirado no [Zod](https://github.com/colinhacks/zod) para parsing e validação de valores em tempo de execução.
  **[⬆ voltar ao topo](#contents)**

## Controle de versão

_Bibliotecas para controle de versão._

- [cli](https://gitlab.com/gitlab-org/cli) - Ferramenta de linha de comando de código aberto do GitLab que leva os recursos legais do GitLab para a sua linha de comando.
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go é uma biblioteca Go que permite executar ações em provedores de VCS.
- [ggc](https://github.com/bmf-san/ggc) - Ferramenta de CLI para Git com linha de comando tradicional e interface interativa de busca incremental, suporte a workflows e atalhos de teclado configuráveis.
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Servidor MCP local para operações do Git que usa o Ollama para economizar tokens e evitar vazamento de segredos.
- [git2go](https://github.com/libgit2/git2go) - Bindings Go para a libgit2.
- [githooks](https://github.com/gabyx/githooks) - Hooks do Git por repositório e compartilhados, com controle de versão e atualização automática.
- [gitty](https://github.com/Omibranch/gitty) - CLI de Git/GitHub em binário único que substitui add→commit→push por um único comando; sintaxe legível por humanos, sem dependências externas.
- [go-git](https://github.com/go-git/go-git) - Implementação do Git altamente extensível em Go puro.
- [go-vcs](https://github.com/sourcegraph/go-vcs) - Manipule e inspecione repositórios de VCS em Go.
- [hercules](https://github.com/src-d/hercules) - Obtenha insights avançados a partir do histórico de repositórios Git.
- [hgo](https://github.com/beyang/hgo) - Hgo é uma coleção de pacotes Go que fornecem acesso de leitura a repositórios Mercurial locais.

**[⬆ voltar ao topo](#contents)**

## Vídeo

_Bibliotecas para manipular vídeo._

- [gmf](https://github.com/3d0c/gmf) - Bindings Go para as bibliotecas av\* do FFmpeg.
- [go-astiav](https://github.com/asticode/go-astiav) - Bindings C melhores para o ffmpeg em GO.
- [go-astisub](https://github.com/asticode/go-astisub) - Manipule legendas em GO (.srt, .stl, .ttml, .webvtt, .ssa/.ass, teletexto, .smi etc.).
- [go-astits](https://github.com/asticode/go-astits) - Analise e faça o demux de MPEG Transport Streams (.ts) nativamente em GO.
- [go-mpd](https://github.com/unki2aut/go-mpd) - Biblioteca de parsing e geração de arquivos de manifesto MPEG-DASH.
- [goav](https://github.com/giorgisio/goav) - Bindings Go abrangentes para o FFmpeg.
- [gortsplib](https://github.com/aler9/gortsplib) - Biblioteca de servidor e cliente RTSP em Go puro.
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - Parser e gerador de playlists HLS (M3U8), mantido atualizado com a especificação.
- [libvlc-go](https://github.com/adrg/libvlc-go) - Bindings Go para a libvlc 2.X/3.X/4.X (usada pelo reprodutor de mídia VLC).
- [manifestor](https://github.com/alanzng/manifestor) - Biblioteca sem dependências para analisar, filtrar, transformar e construir manifestos HLS e DASH.
* [mosaic](https://github.com/farshidrezaei/mosaic) - Empacotamento de vídeo com Adaptive Bitrate (ABR) previsível e pronto para produção para Go (HLS e DASH CMAF).
- [mp4ff](https://github.com/Eyevinn/mp4ff) - Biblioteca e ferramentas para trabalhar com arquivos MP4 que contêm vídeo, áudio, legendas ou metadados.
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - Analisador de MPEG-2 Transport Streams que verifica a conformidade de temporização do PCR e exibe estruturas TS, PSI e PES de baixo nível.
- [v4l](https://github.com/korandiz/v4l) - Biblioteca de captura de vídeo para Linux, escrita em Go.

**[⬆ voltar ao topo](#contents)**

## Frameworks web

_Frameworks web full stack._

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - Biblioteca de servidor HTTP completa, com roteador, pilha de middlewares, hubs WebSocket, uploads de arquivos e validação OpenAPI.
- [Andurel](https://github.com/mbvlabs/andurel) - Framework web full-stack em Go inspirado no Rails, com scaffolding, ferramentas de banco de dados e frontends renderizados no servidor ou com Inertia.
- [Atreugo](https://github.com/savsgio/atreugo) - Microframework web de alto desempenho e extensível, sem alocações de memória nos caminhos críticos.
- [Barf](https://github.com/opensaucerer/barf) - Basically, A Remarkable Framework (basicamente, um framework notável) para criar APIs web baseadas em JSON. É totalmente discreto e não reinventa nenhuma roda. Foi feito para que começar seja fácil e rápido, sendo ao mesmo tempo flexível o bastante para casos de uso mais complexos.
- [Beego](https://github.com/beego/beego) - beego é um framework web de código aberto e de alto desempenho para a linguagem de programação Go.
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti é um framework de aplicações web em Go com sintaxe expressiva e elegante. O Confetti combina a elegância do Laravel com a simplicidade do Go.
- [Don](https://github.com/abemedia/go-don) - Framework de APIs de alto desempenho e simples de usar.
- [doors](https://github.com/doors-dev/doors) - Framework orientado pelo servidor para criar aplicações web reativas e com estado inteiramente em Go.
- [Echo](https://github.com/labstack/echo) - Framework web em Go minimalista e de alto desempenho.
- [Fastschema](https://github.com/fastschema/fastschema) - Framework web em Go flexível e Headless CMS.
- [Fiber](https://github.com/gofiber/fiber) - Framework web inspirado no Express.js e construído sobre o Fasthttp.
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - Framework para projetos web plugáveis. Inclui um conceito de módulos e oferece recursos de DI, Configareas, i18n, motores de template, graphql, observabilidade, segurança, eventos, roteamento e roteamento reverso etc.
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - Fornece recursos de e-commerce usando arquitetura limpa, como DDD e ports and adapters, que você pode usar para criar aplicações de e-commerce flexíveis.
- [Fuego](https://github.com/go-fuego/fuego) - O framework para desenvolvedores Go ocupados! Framework web que gera a especificação OpenAPI 3 a partir do código-fonte.
- [Gin](https://github.com/gin-gonic/gin) - Gin é um framework web escrito em Go! Tem uma API semelhante à do martini com desempenho muito melhor, até 40 vezes mais rápido. Para quando você precisa de desempenho e boa produtividade.
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Ferramenta de vinculação automática de parâmetros para o Gin; ferramentas de RPC para o gin.
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - Framework de microsserviços com foco em gRpc. Os recursos incluem suporte a ODM para Mongo, suporte a recursos de nuvem (AWS/Azure/Google) e uma injeção de dependências fluente personalizada para gRpc. Além disso, o grpc-web é suportado diretamente, permitindo o acesso pelo navegador a todas as APIs gRpc sem proxy.
- [Goa](https://github.com/goadesign/goa) - Goa oferece uma abordagem holística para desenvolver APIs remotas e microsserviços em Go.
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr é um framework opinativo de desenvolvimento de microsserviços.
- [GoFrame](https://github.com/gogf/gf) - GoFrame é um framework de desenvolvimento de aplicações em Golang modular, poderoso, de alto desempenho e de nível empresarial.
- [Gone](https://github.com/gone-io/gone) - Framework web e de injeção de dependências leve, inspirado no Spring.
- [goravel](https://github.com/goravel/goravel) - Framework web inspirado no Laravel, com ORM, autenticação, filas, agendamento de tarefas e mais recursos integrados.
- [Goshtoso](https://github.com/araihu/goshtoso) - Componentes de UI renderizados no servidor para aplicações Go, construídos com templ, Tailwind CSS, HTMX e Alpine.js.
- [Goyave](https://github.com/go-goyave/goyave) - Framework completo de APIs REST voltado para código limpo e desenvolvimento rápido, com funcionalidades integradas poderosas.
- [Hertz](https://github.com/cloudwego/hertz) - Framework HTTP em Go de alto desempenho e altamente extensível que ajuda desenvolvedores a criar microsserviços.
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot é um framework de aplicações web de alto desempenho com suporte a configuração automática e injeção de dependências.
- [httpsuite](https://github.com/rluders/httpsuite) - Parsing de requisições HTTP e respostas de problema RFC 9457 para Go, com núcleo baseado apenas na stdlib e validação opcional.
- [Huma](https://github.com/danielgtaylor/huma/) - Framework para APIs REST/GraphQL modernas com OpenAPI 3 integrado, documentação gerada e uma CLI.
- [iWF](https://github.com/indeedeng/iwf) - iWF é uma plataforma tudo em um para desenvolver processos de negócio de longa duração. Oferece uma abstração prática para usar bancos de dados, ElasticSearch, filas de mensagens, timers duráveis e mais, com uma interface limpa, simples e amigável.
- [Lit](https://github.com/jvcoutinho/lit) - Framework web declarativo de alto desempenho para Golang, que busca simplicidade e qualidade de vida.
- [Microservice](https://github.com/claygod/microservice) - O framework para a criação de microsserviços, escrito em Golang.
- [NotNet](https://github.com/nottechdm/notnet) - Framework Go leve para criar APIs RESTful rápidas e ergonômicas, com middlewares e roteamento flexível.
- [patron](https://github.com/beatlabs/patron) - Patron é um framework de microsserviços que segue as melhores práticas de nuvem, com foco em produtividade.
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux é um framework web poderoso em Go que usa regex para corresponder e tratar requisições HTTP. Oferece recursos como tratamento de CORS, logging estruturado, extração de parâmetros de URL, middlewares e limitação de concorrência.
- [Revel](https://github.com/revel/revel) - Framework web de alta produtividade para a linguagem Go.
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Biblioteca de bootstrap para criar microsserviços Go empresariais com Gin e gRPC de forma rápida e fácil.
- [Ronykit](https://github.com/clubpay/ronykit) - Framework web com arquitetura plugável e de altíssimo desempenho.
- [rux](https://github.com/gookit/rux) - Framework web simples e rápido para criar aplicações HTTP em golang.
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Port não oficial do shadcn/ui para Go e templ: componentes de UI acessíveis com CLI e registro.
- [togo](https://github.com/togo-framework/togo) - Framework full-stack que entrega seu backend Go e seu frontend React como um único binário; uma CLI no nível do artisan do Laravel.
- [uAdmin](https://github.com/uadmin/uadmin) - Framework web completo para Golang, inspirado no Django.
- [WebGo](https://github.com/naughtygopher/webgo) - Microframework para criar apps web com encadeamento de handlers, middlewares e injeção de contexto. Com handlers HTTP compatíveis com a biblioteca padrão (ou seja, `http.HandlerFunc`)..
- [Xun](https://github.com/yaitoo/xun) - Framework web construído sobre o html/template nativo do Go e o roteador do pacote net/http. Foi projetado para ser leve, rápido e fácil de usar, oferecendo uma API simples e intuitiva para criar aplicações web com recursos avançados, como middlewares, roteamento e renderização de templates.
- [Yokai](https://github.com/ankorstore/yokai) - Framework Go simples, modular e observável para aplicações de backend.

**[⬆ voltar ao topo](#contents)**

### Middlewares

#### Middlewares propriamente ditos

- [client-timing](https://github.com/posener/client-timing) - Cliente HTTP para o cabeçalho Server-Timing.
- [CORS](https://github.com/rs/cors) - Adicione facilmente recursos de CORS à sua API.
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Middleware para o framework Echo com logging e métricas.
- [formjson](https://github.com/rs/formjson) - Trate de forma transparente entradas JSON como um POST de formulário padrão.
- [go-fault](https://github.com/github/go-fault) - Middleware de injeção de falhas para Go.
- [Limiter](https://github.com/ulule/limiter) - Middleware de limitação de taxa extremamente simples para Go.
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Middleware Go para monetizar APIs por requisição com a Lightning Network (Bitcoin).
- [mid](https://github.com/bobg/mid) - Recursos diversos de middleware HTTP: retorno idiomático de erros a partir de handlers; recebimento/resposta com dados JSON; rastreamento de requisições; e mais.
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Middleware para o framework Gin com logging, métricas, autenticação, rastreamento etc.
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - Middleware para gRPC com logging, métricas, autenticação, rastreamento etc.
- [Tollbooth](https://github.com/didip/tollbooth) - Handler de requisições HTTP com limitação de taxa.
- [XFF](https://github.com/sebest/xff) - Lide com o cabeçalho `X-Forwarded-For` e similares.

#### Bibliotecas para criar middlewares HTTP

- [alice](https://github.com/justinas/alice) - Encadeamento de middlewares sem dor para Go.
- [catena](https://github.com/codemodus/catena) - Concatenação de wrappers de http.Handler (mesma API do "chain").
- [chain](https://github.com/codemodus/chain) - Encadeamento de wrappers de handlers com dados com escopo ("middleware" baseado em net/context).
- [gores](https://github.com/alioygur/gores) - Pacote Go que lida com respostas HTML, JSON, XML etc. Útil para APIs RESTful.
- [interpose](https://github.com/carbocation/interpose) - Middleware net/http minimalista para golang.
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - Adicione interceptadores ao `http.Client` para permitir dump/modelagem/rastreamento/... de requisições/respostas.
- [muxchain](https://github.com/stephens2424/muxchain) - Middleware leve para net/http.
- [negroni](https://github.com/urfave/negroni) - Middleware HTTP idiomático para Golang.
- [render](https://github.com/unrolled/render) - Pacote Go para renderizar facilmente respostas JSON, XML e de templates HTML.
- [renderer](https://github.com/thedevsaddam/renderer) - Pacote de renderização de respostas (JSON, JSONP, XML, YAML, HTML, arquivo) simples, leve e mais rápido para Go.
- [stats](https://github.com/thoas/stats) - Middleware Go que armazena várias informações sobre sua aplicação web.

**[⬆ voltar ao topo](#contents)**

### Roteadores

- [alien](https://github.com/gernest/alien) - Roteador HTTP leve e rápido vindo do espaço sideral.
- [bellt](https://github.com/GuilhermeCaruso/bellt) - Roteador HTTP simples para Go.
- [Bone](https://github.com/go-zoo/bone) - Multiplexador HTTP extremamente rápido.
- [Bxog](https://github.com/claygod/Bxog) - Roteador HTTP simples e rápido para Go. Funciona com rotas de diferentes níveis de dificuldade, comprimento e aninhamento. E sabe criar uma URL a partir dos parâmetros recebidos.
- [chi](https://github.com/go-chi/chi) - Roteador HTTP pequeno, rápido e expressivo construído sobre net/context.
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - Roteador de alto desempenho derivado do `httprouter`. O primeiro roteador adequado ao `fasthttp`.
- [FastRouter](https://github.com/razonyang/fastrouter) - Roteador HTTP rápido e flexível escrito em Go.
- [Fox](https://github.com/fox-toolkit/fox) - Roteador HTTP de alto desempenho para criar proxies reversos e API gateways, com suporte de primeira classe à alteração de rotas em tempo de execução.
- [fursy](https://github.com/coregx/fursy) - Roteador HTTP com handlers genéricos com segurança de tipos, geração automática de OpenAPI 3.1 a partir do código e respostas de erro RFC 9457.
- [goblin](https://github.com/bmf-san/goblin) - Roteador HTTP em golang baseado em árvore trie.
- [gocraft/web](https://github.com/gocraft/web) - Pacote de mux e middlewares em Go.
- [Goji](https://github.com/goji/goji) - Goji é um multiplexador de requisições HTTP minimalista e flexível com suporte a `net/context`.
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router é um roteador HTTP leve, porém poderoso, para a linguagem de programação Go.
- [goroute](https://github.com/goroute/route) - Multiplexador de requisições HTTP simples, porém poderoso.
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter é um microframework de servidor/API, roteador de requisições HTTP, multiplexador e mux que fornece roteamento de requisições com middlewares com suporte a `net/context`.
- [gowww/router](https://github.com/gowww/router) - Roteador HTTP extremamente rápido, totalmente compatível com a interface net/http.Handler.
- [httprouter](https://github.com/julienschmidt/httprouter) - Roteador de alto desempenho. Use-o com os handlers HTTP padrão para formar um framework web de altíssimo desempenho.
- [httptreemux](https://github.com/dimfeld/httptreemux) - Roteador HTTP rápido e flexível baseado em árvore para Go. Inspirado no httprouter.
- [lars](https://github.com/go-playground/lars) - Roteador HTTP leve, rápido, extensível e sem alocações para Go, usado para criar frameworks personalizáveis.
- [mux](https://github.com/gorilla/mux) - Roteador e despachante de URLs poderoso para golang.
- [nchi](https://github.com/muir/nchi) - Roteador semelhante ao chi construído sobre o httprouter, com wrappers de middlewares baseados em injeção de dependências
- [ngamux](https://github.com/ngamux/ngamux) - Roteador HTTP simples para Go.
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - Roteador HTTP extremamente rápido para Go (golang) com suporte a correspondência de rotas por expressões regulares. Vem com suporte completo para criar APIs RESTful.
- [pure](https://github.com/go-playground/pure) - Roteador HTTP leve que se mantém fiel à implementação padrão "net/http".
- [Siesta](https://github.com/VividCortex/siesta) - Framework componível para escrever middlewares e handlers.
- [vestigo](https://github.com/husobee/vestigo) - Roteador de URLs eficiente, independente e compatível com HTTP para aplicações web em Go.
- [violetear](https://github.com/nbari/violetear) - Roteador HTTP para Go.
- [xmux](https://github.com/rs/xmux) - Muxer de alto desempenho baseado no `httprouter`, com suporte a `net/context`.
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Roteador HTTP simples e rápido para Go.

**[⬆ voltar ao topo](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - Biblioteca de DOM.
- [Extism Go SDK](https://github.com/extism/go-sdk) - Framework WebAssembly universal e multilinguagem para criar sistemas de plug-ins e apps poliglotas.
- [go-canvas](https://github.com/markfarnan/go-canvas) - Biblioteca para usar o Canvas do HTML5, com todo o desenho feito no código Go.
- [tinygo](https://github.com/tinygo-org/tinygo) - Compilador Go para lugares pequenos. Microcontroladores, WebAssembly e ferramentas de linha de comando. Baseado no LLVM.
- [vert](https://github.com/norunners/vert) - Interoperabilidade entre valores Go e JS.
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - Execute testes WASM de Go no seu navegador.
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Bindings Go para o runtime WebAssembly Wasmtime (suporte a WASI, JIT/AOT, embutimento seguro e rápido).
- [webapi](https://github.com/gowebapi/webapi) - Bindings para DOM e HTML gerados a partir de WebIDL.

**[⬆ voltar ao topo](#contents)**

## Servidores de webhooks

- [HookRun](https://github.com/bluvenr/hookrun) - Engine leve de ações de webhook (binário único de ~3MB, sem dependências) que executa comandos e scripts a partir de regras YAML, com autenticação por token/HMAC/IP e hot reload.
- [webhook](https://github.com/adnanh/webhook) - Ferramenta que permite criar endpoints HTTP (hooks) que executam comandos no servidor.
- [webhooked](https://github.com/42Atomys/webhooked) - Receptor de webhooks turbinado: tratar, proteger, formatar e armazenar o payload de um webhook nunca foi tão fácil.
- [WebhookX](https://github.com/webhookx-io/webhookx) - Gateway de webhooks para recebimento, processamento e entrega confiável de mensagens.

**[⬆ voltar ao topo](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Bindings Go para Direct3D9.
- [go-ole](https://github.com/go-ole/go-ole) - Implementação de OLE do Win32 para golang.
- [gosddl](https://github.com/MonaxGT/gosddl) - Conversor de strings SDDL em JSON amigável. O SDDL é composto por quatro partes: Owner, Primary Group, DACL e SACL.
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - Binding Golang para a API do Windows Update Agent usando go-ole.

**[⬆ voltar ao topo](#contents)**

## Frameworks de workflow

_Bibliotecas para criar workflows._

- [Cadence-client](https://github.com/uber-go/cadence-client) - Framework para criar workflows e atividades que rodam sobre a engine de orquestração Cadence, criada pela Uber.
- [Dagu](https://github.com/dagu-go/dagu) - Executor de workflows sem código. Executa DAGs definidos em um formato YAML simples.
- [durable-go](https://github.com/agenticenv/durable-go) - Engine de execução durável para apps Go de processo único e agentes de IA, sem dependências.
- [Flowbaker](https://github.com/flowbaker/flowbaker) - Engine de execução auto-hospedada para criar, conectar e automatizar workflows sem código.
- [go-dag](https://github.com/rhosocial/go-dag) - Framework desenvolvido em Go que gerencia a execução de workflows descritos por grafos acíclicos dirigidos.
- [go-taskflow](https://github.com/noneback/go-taskflow) - Framework de programação paralela de tarefas de uso geral, semelhante ao taskflow, com visualizador e profiler integrados.
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Engine de workflows durável com console web integrado, baseada em Postgres, MySQL ou SQLite.
- [workflow](https://github.com/luno/workflow) - Framework de workflows orientado a eventos e independente de stack tecnológica.

**[⬆ voltar ao topo](#contents)**

## XML

_Bibliotecas e ferramentas para manipular XML._

- [XML-Comp](https://github.com/xml-comp/xml-comp) - Comparador de XML simples de linha de comando que gera diffs de pastas, arquivos e tags.
- [xml2map](https://github.com/sbabiv/xml2map) - Conversor de XML para MAP escrito em Golang.
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery é um pacote XPath em Golang para consultas em XML.
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - API procedural de geração de XML baseada no módulo xmlwriter da libxml2.
- [xpath](https://github.com/antchfx/xpath) - Pacote XPath para Go.
- [zek](https://github.com/miku/zek) - Gere uma struct Go a partir de XML.

## Zero Trust

_Bibliotecas e ferramentas para implementar arquiteturas Zero Trust._

- [Cosign](https://github.com/sigstore/cosign) - Assinatura, verificação e armazenamento de contêineres em um registry OCI.
- [in-toto](https://github.com/in-toto/in-toto-golang) - Implementação em Go da implementação de referência em python do in-toto (que fornece um framework para proteger a integridade da cadeia de suprimentos de software).
- [OpenZiti](https://github.com/openziti/ziti) - Rede overlay zero trust completa e de código aberto. Inclui diversos SDKs para diversas linguagens, como [golang](https://github.com/openziti/sdk-golang), que permitem embutir princípios de zero trust diretamente nas suas aplicações. O [OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) tem diversos exemplos para servir de inspiração, incluindo um [cliente ssh zero trust - zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Utiliza a autenticação JWT do Spiffe com o Hashicorp Vault para autenticação sem segredos.
- [Spire](https://github.com/spiffe/spire) - SPIRE (o SPIFFE Runtime Environment) é um conjunto de APIs para estabelecer confiança entre sistemas de software em uma ampla variedade de plataformas de hospedagem.

## Análise de código

_Ferramentas de análise de código-fonte, também conhecidas como ferramentas de Static Application Security Testing (SAST)._

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Verifica mudanças recentes em um projeto Go em busca de alterações incompatíveis com versões anteriores.
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Analisador estático de código para Go e outras linguagens: métricas de complexidade, acoplamento, coesão e manutenibilidade, com relatórios em HTML, JSON, Markdown e SARIF.
- [asty](https://github.com/asty-org/asty) - Converte AST do golang em JSON e JSON em AST.
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket é uma ferramenta que ajuda a encontrar funções sem testes unitários diretos nos seus pacotes Go.
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Descubra quais das suas dependências diretas do GitHub em Go são suscetíveis a ataques de ChainJacking.
- [Chronos](https://github.com/amit-davidson/Chronos) - Detecta condições de corrida estaticamente
- [deadmono](https://github.com/arxeiss/deadmono) - Wrapper em torno do deadcode para detectar código morto em monorepos Go.
- [dupl](https://github.com/mibk/dupl) - Ferramenta para detecção de código duplicado.
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck é um programa para verificar erros não tratados em programas Go.
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext detecta contextos aninhados em loops ou em literais de função.
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle é uma ferramenta de verificação de estilo como o checkstyle do java. Esta ferramenta foi inspirada no checkstyle do java e no golint. O estilo segue alguns pontos do Go Code Review Comments.
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch foi criado para validar regras da Clean Architecture, como a The Dependency Rule e a interação entre pacotes nos seus projetos Go.
- [go-critic](https://github.com/go-critic/go-critic) - Linter de código-fonte que traz verificações que ainda não estão implementadas em outros linters.
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Forma fácil de encontrar dependências desatualizadas dos seus projetos Go.
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - Visualizador web de AST do Golang.
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Ferramenta para corrigir (adicionar, remover) seus imports Go automaticamente.
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - SDK da API do iFood.
- [golangci-lint](https://github.com/golangci/golangci-lint) – Executor rápido de linters Go. Roda linters em paralelo, usa cache, suporta configuração em `yaml`, tem integrações com todas as principais IDEs e inclui dezenas de linters.
- [golines](https://github.com/segmentio/golines) - Formatador que encurta automaticamente linhas longas em código Go.
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - Linter de Markdown com validação de links HTTP integrada, binário único, sem necessidade de Node.js.
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - Biblioteca e CLI que geram diagramas de classes PlantUML em texto com informações sobre estruturas e interfaces e os relacionamentos entre elas.
- [goreturns](https://github.com/sqs/goreturns) - Adiciona instruções return com valores zero para corresponder aos tipos de retorno da função.
- [gostatus](https://github.com/shurcooL/gostatus) - Ferramenta de linha de comando que mostra o status de repositórios que contêm pacotes Go.
- [lint](https://github.com/surullabs/lint) - Execute linters como parte do go test.
- [php-parser](https://github.com/z7zmey/php-parser) - Parser de PHP escrito em Go.
- [revive](https://github.com/mgechev/revive) – Substituto direto do `golint` ~6x mais rápido, mais rigoroso, configurável, extensível e bonito.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck é um `go vet` turbinado, que aplica uma enorme quantidade de verificações de análise estática às quais você pode estar acostumado em ferramentas como o ReSharper para C#.
- [structalign](https://github.com/peczenyj/structalign) - Mostra como os campos de uma struct poderiam ser reordenados para usar menos memória, exibindo um diff em vez de reescrever arquivos.
- [stto](https://github.com/mainak55512/stto) - Contador de linhas de código leve e superrápido escrito em Go puro.
- [testifylint](https://github.com/Antonboom/testifylint) – Linter que verifica o uso do [github.com/stretchr/testify](https://github.com/stretchr/testify).
- [tickgit](https://github.com/augmentable-dev/tickgit) - CLI e pacote Go para trazer à tona comentários TODO no código (em qualquer linguagem) e aplicar um `git blame` para identificar o autor.
- [todocheck](https://github.com/preslavmihaylov/todocheck) - Analisador estático de código que vincula comentários TODO no código a issues no seu issue tracker.
- [unconvert](https://github.com/mdempsky/unconvert) - Remova conversões de tipo desnecessárias do código-fonte Go.
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Linter que detecta a possibilidade de usar variáveis/constantes da biblioteca padrão do Go.
- [vacuum](https://github.com/daveshanley/vacuum) - Linter de OpenAPI e ferramenta de verificação de qualidade ultrarrápida e leve.
- [validate](https://github.com/mccoyst/validate) - Valida automaticamente campos de structs com tags.
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - Linter que verifica se os erros de pacotes externos são encapsulados.

**[⬆ voltar ao topo](#contents)**

## Plugins para editores

_Plugins para editores de texto e IDEs._

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - Este plugin adiciona os recursos do [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) ao Vim/Neovim.
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - Extensão do Visual Studio Code para exibir definições na saída e gerar go doc.
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - Plugin Go para IDEs da JetBrains.
- [go-mode](https://github.com/dominikh/go-mode.el) - Modo Go para o GNU/Emacs.
- [gocode](https://github.com/nsf/gocode) - Daemon de autocompletar para a linguagem de programação Go.
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - Ferramenta de formatação de imports.
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - Esta extensão adiciona ao VS Code suporte a profiling de benchmarks para a linguagem Go.
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - Coleção de plugins Golang para o editor de texto SublimeText 3, com autocompletar de código e outros recursos típicos de IDEs.
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - Plugin do Vim para gerar testes Go com base na assinatura da função ou do método.
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - Plugin do Vim para destacar erros de sintaxe ao salvar.
- [vim-go](https://github.com/fatih/vim-go) - Plugin de desenvolvimento Go para o Vim.
- [vscode-go](https://github.com/golang/vscode-go) - Extensão para o Visual Studio Code (VS Code) que oferece suporte à linguagem Go.
- [Watch](https://github.com/eaburns/Watch) - Executa um comando em uma janela do acme quando arquivos mudam.

**[⬆ voltar ao topo](#contents)**

## Ferramentas para go generate

- [envdoc](https://github.com/g4s8/envdoc) - Gere documentação para variáveis de ambiente a partir de arquivos-fonte Go.
- [generic](https://github.com/usk81/generic) - Tipo de dado flexível para Go.
- [gocontracts](https://github.com/Parquery/gocontracts) - Traz o design por contrato para Go, sincronizando o código com a documentação.
- [godal](https://github.com/mafulong/godal) - Gere modelos ORM em golang a partir de um arquivo SQL DDL, que podem ser usados pelo gorm.
- [gonerics](https://github.com/bouk/gonerics) - Generics idiomáticos em Go.
- [gotests](https://github.com/cweill/gotests) - Gere testes Go a partir do seu código-fonte.
- [gounit](https://github.com/hexdigest/gounit) - Gere testes Go usando seus próprios templates.
- [hasgo](https://github.com/DylanMeeus/hasgo) - Gere funções inspiradas em Haskell para seus slices.
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - Gere constantes Go tipadas a partir da extensão x-constants de uma especificação OpenAPI.
- [options-gen](https://github.com/kazhuravlev/options-gen) - Opções funcionais descritas no post de Dave Cheney "Functional options for friendly APIs".
- [re2dfa](https://gitlab.com/opennota/re2dfa) - Transforme expressões regulares em máquinas de estados finitos e gere código-fonte Go.
- [sqlgen](https://github.com/anqiansong/sqlgen) - Gere código gorm, xorm, sqlx, bun e sql a partir de um arquivo SQL ou de um DSN.
- [TOML-to-Go](https://xuri.me/toml-to-go) - Traduz TOML em um tipo Go instantaneamente no navegador.
- [xgen](https://github.com/xuri/xgen) - Parser de XSD (XML Schema Definition) e gerador de código Go/C/Java/Rust/TypeScript.

**[⬆ voltar ao topo](#contents)**

## Ferramentas Go

- [decouple](https://github.com/bobg/decouple) - Encontre parâmetros de função “superespecificados” que poderiam ser generalizados com tipos de interface.
- [docs](https://github.com/go-oas/docs) - Gere automaticamente documentação de APIs RESTful para projetos GO - alinhada ao padrão Open API Specification.
- [go-callvis](https://github.com/TrueFurby/go-callvis) - Visualize o grafo de chamadas do seu programa Go usando o formato dot.
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - Analise e visualize o tamanho das dependências em binários Golang compilados, com insights sobre seu impacto no build final.
- [go-swagger](https://github.com/go-swagger/go-swagger) - Implementação do Swagger 2.0 para Go. O Swagger é uma representação simples, porém poderosa, da sua API RESTful.
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Ambiente interativo para criar e testar templates Go.
- [godbg](https://github.com/tylerwince/godbg) - Implementação da macro `dbg!` do Rust para depuração rápida e fácil durante o desenvolvimento.
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - Encontre todas as structs que implementam uma determinada interface Go em uma base de código.
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - Ferramenta Go que executa e faz cache de binários incluídos em arquivos go.mod.
- [gotemplate.io](https://gotemplate.io/) - Ferramenta online para pré-visualizar templates `text/template` ao vivo.
- [gotestdox](https://github.com/bitfield/gotestdox) - Mostre os resultados de testes Go como frases legíveis.
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks dá estrela automaticamente nas dependências do github do seu go.mod, enviando assim um pouco de carinho aos mantenedores.
- [gotutor](https://github.com/ahmedakef/gotutor) - Depurador e visualizador de Go online.
- [govisual](https://github.com/doganarif/govisual) - Visualizador e depurador de requisições HTTP em Go puro e sem configuração para o desenvolvimento web local em Go.
- [igo](https://github.com/rocketlaunchr/igo) - Transpilador de igo para go (novos recursos de linguagem para a linguagem Go!)
- [lensm](https://github.com/loov/lensm) - Visualizador de assembly e de código-fonte Go.
- [modver](https://github.com/bobg/modver) - Compare duas versões de um módulo Go para verificar a mudança de número de versão necessária (major, minor ou patchlevel), de acordo com as regras do [semver](https://semver.org/).
- [MoniGO](https://github.com/iyashjayesh/monigo) - Biblioteca de monitoramento de desempenho para aplicações Go. Fornece insights em tempo real sobre o desempenho da aplicação! 🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - Navegue por arquivos Go de forma eficiente com a extensão de navegador OctoLinker para o GitHub.
- [richgo](https://github.com/kyoh86/richgo) - Enriqueça as saídas do `go test` com decorações de texto.
- [roumon](https://github.com/becheran/roumon) - Monitore o estado atual de todas as goroutines ativas por meio de uma interface de linha de comando.
- [rts](https://github.com/galeone/rts) - RTS: response to struct. Gera structs Go a partir de respostas de servidores.
- [textra](https://github.com/ravsii/textra) - Extraia nomes, tipos e tags de campos de structs Go para filtragem e exportação.
- [typex](https://github.com/dtgorski/typex) - Examine tipos Go e suas dependências transitivas e, opcionalmente, exporte os resultados como declarações de value objects (ou tipos) TypeScript.

**[⬆ voltar ao topo](#contents)**

## Pacotes de software

_Software escrito em Go._

**[⬆ voltar ao topo](#contents)**

### Ferramentas de DevOps

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate é uma ferramenta que transforma strings longas em strings mais curtas com separadores configuráveis, por exemplo, para embutir nomes de branches em IDs de stacks de deploy.
- [alaz](https://github.com/ddosify/alaz) - Monitoramento de Kubernetes baseado em eBPF, sem esforço e com baixa sobrecarga.
- [aptly](https://github.com/aptly-dev/aptly) - aptly é uma ferramenta de gerenciamento de repositórios Debian.
- [aurora](https://github.com/xuri/aurora) - Console web multiplataforma para servidores de filas Beanstalkd.
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - Diagnostique custos da AWS, detecte recursos ociosos e otimize os gastos com nuvem diretamente do seu terminal 🩺 ☁️.
- [awsenv](https://github.com/soniah/awsenv) - Pequeno binário que carrega as variáveis de ambiente da Amazon (AWS) de um perfil.
- [Balerter](https://github.com/balerter/balerter) - Gerenciador de alertas auto-hospedado baseado em scripts.
- [Blast](https://github.com/dave/blast) - Ferramenta simples para testes de carga de APIs e jobs em lote.
- [bombardier](https://github.com/codesenberg/bombardier) - Ferramenta rápida e multiplataforma de benchmarking HTTP.
- [cassowary](https://github.com/rogerwelin/cassowary) - Ferramenta moderna e multiplataforma de testes de carga HTTP escrita em Go.
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - Ferramenta de resiliência que ajuda aplicações a tolerar falhas aleatórias de instâncias.
- [colima](https://github.com/abiosoft/colima) - Runtimes de contêineres no macOS (e no Linux) com configuração mínima.
- [Ddosify](https://github.com/ddosify/ddosify) - Ferramenta de testes de carga de alto desempenho, escrita em Golang.
- [decompose](https://github.com/s0rg/decompose) - Ferramenta para gerar e processar grafos de conexões de contêineres Docker.
- [Den](https://github.com/us/den) - Runtime de sandbox auto-hospedado para agentes de IA. Alternativa de código aberto ao E2B.
- [DepCharge](https://github.com/centerorbit/depcharge) - Ajuda a orquestrar a execução de comandos nas muitas dependências de projetos maiores.
- [dish](https://github.com/thevxn/dish) - Serviço de monitoramento leve e configurável remotamente.
- [Docker](https://www.docker.com/) - Plataforma aberta de aplicações distribuídas para desenvolvedores e administradores de sistemas.
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - Imagem Docker para compilar binários Go para Windows com o toolchain MinGW.
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Faça backup de volumes Docker localmente ou em qualquer armazenamento compatível com S3, WebDAV, Azure Blob Storage, Dropbox ou SSH.
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - Biblioteca Go e executável que produzem Dockerfiles válidos usando vários canais de entrada.
- [docklite](https://github.com/benzjeremy/docklite) - Alternativa leve ao Portainer para gerenciamento de contêineres Docker, com métricas em tempo real via SSE.
- [dogo](https://github.com/liudng/dogo) - Monitora alterações nos arquivos-fonte e compila e executa (reinicia) automaticamente.
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - Dispare jobs downstream do Jenkins usando um binário, docker ou o Drone CI.
- [drone-scp](https://github.com/appleboy/drone-scp) - Copie arquivos e artefatos via SSH usando um binário, docker ou o Drone CI.
- [Dropship](https://github.com/chrismckenzie/dropship) - Ferramenta para implantar código via CDN.
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - Pacote Golang para execução remota fácil via SSH e downloads por SCP via `ProxyCommand`.
- [fac](https://github.com/mkchoi212/fac) - Interface de linha de comando para corrigir conflitos de merge do git.
