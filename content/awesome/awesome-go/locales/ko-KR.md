# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

저희는 실시간 소통을 위해 _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ 커뮤니티 Slack을 사용합니다. [여기 양식을 통해 참여하세요](https://invite.slack.golangbridge.org/).

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**후원:**

_특별히 감사드립니다_

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

**Awesome Go는 월 사용료가 없지만**_, 이를 계속 운영하기 위해 **열심히 일하는** 직원들이 있습니다. 모금된 금액으로 참여한 모든 분의 노력에 보답할 수 있습니다! 비용 청구와 분배 방식은 커뮤니티 전체에 공개되어 있으므로 누구나 확인할 수 있습니다. 프로젝트의 후원자가 되고 싶다면 [여기](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)를 클릭하세요._

> 멋진 Go 프레임워크, 라이브러리, 소프트웨어를 엄선한 목록입니다. [awesome-python](https://github.com/vinta/awesome-python)에서 영감을 받았습니다.

**기여하기:**

먼저 [기여 가이드라인](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)을 간단히 살펴봐 주세요. 모든 [기여자](https://github.com/avelino/awesome-go/graphs/contributors)분들께 감사드립니다. 여러분 최고예요!

> _더 이상 유지 관리되지 않거나 적합하지 않은 패키지나 프로젝트를 발견하면 풀 리퀘스트를 제출해 이 파일을 개선해 주세요. 감사합니다!_

## 목차

<details>
<summary>목차 펼치기</summary>

- [Awesome Go](#awesome-go)
  - [목차](#contents)
  - [액터 모델](#actor-model)
  - [인공지능](#artificial-intelligence)
  - [오디오 및 음악](#audio-and-music)
  - [인증 및 권한 부여](#authentication-and-authorization)
  - [블록체인](#blockchain)
  - [봇 구축](#bot-building)
  - [빌드 자동화](#build-automation)
  - [명령줄](#command-line)
    - [고급 콘솔 UI](#advanced-console-uis)
    - [표준 CLI](#standard-cli)
  - [설정](#configuration)
  - [지속적 통합](#continuous-integration)
  - [CSS 전처리기](#css-preprocessors)
  - [데이터 통합 프레임워크](#data-integration-frameworks)
  - [자료 구조 및 알고리즘](#data-structures-and-algorithms)
    - [비트 패킹 및 압축](#bit-packing-and-compression)
    - [비트 집합](#bit-sets)
    - [블룸 및 쿠쿠 필터](#bloom-and-cuckoo-filters)
    - [자료 구조 및 알고리즘 모음](#data-structure-and-algorithm-collections)
    - [이터레이터](#iterators)
    - [맵](#maps)
    - [기타 자료 구조 및 알고리즘](#miscellaneous-data-structures-and-algorithms)
    - [널 허용 타입](#nullable-types)
    - [큐](#queues)
    - [집합](#sets)
    - [텍스트 분석](#text-analysis)
    - [트리](#trees)
    - [파이프](#pipes)
  - [데이터베이스](#database)
    - [캐시](#caches)
    - [Go로 구현된 데이터베이스](#databases-implemented-in-go)
    - [데이터베이스 스키마 마이그레이션](#database-schema-migration)
    - [데이터베이스 도구](#database-tools)
    - [SQL 쿼리 빌더](#sql-query-builders)
  - [데이터베이스 드라이버](#database-drivers)
    - [다중 백엔드 인터페이스](#interfaces-to-multiple-backends)
    - [관계형 데이터베이스 드라이버](#relational-database-drivers)
    - [NoSQL 데이터베이스 드라이버](#nosql-database-drivers)
    - [검색 및 분석 데이터베이스](#search-and-analytic-databases)
  - [날짜 및 시간](#date-and-time)
  - [분산 시스템](#distributed-systems)
  - [동적 DNS](#dynamic-dns)
  - [이메일](#email)
  - [임베드 가능한 스크립팅 언어](#embeddable-scripting-languages)
  - [오류 처리](#error-handling)
  - [파일 처리](#file-handling)
  - [금융](#financial)
  - [폼](#forms)
  - [함수형 프로그래밍](#functional)
  - [게임 개발](#game-development)
  - [생성기](#generators)
  - [지리 정보](#geographic)
  - [Go 컴파일러](#go-compilers)
  - [고루틴](#goroutines)
  - [GUI](#gui)
  - [하드웨어](#hardware)
  - [이미지](#images)
  - [IoT(사물 인터넷)](#iot-internet-of-things)
  - [작업 스케줄러](#job-scheduler)
  - [JSON](#json)
  - [로깅](#logging)
  - [머신러닝](#machine-learning)
  - [메시징](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [기타](#miscellaneous)
    - [의존성 주입](#dependency-injection)
    - [프로젝트 레이아웃](#project-layout)
    - [문자열](#strings)
    - [미분류](#uncategorized)
  - [자연어 처리](#natural-language-processing)
    - [언어 감지](#language-detection)
    - [형태소 분석기](#morphological-analyzers)
    - [슬러그 생성기](#slugifiers)
    - [토크나이저](#tokenizers)
    - [번역](#translation)
    - [음역](#transliteration)
  - [네트워킹](#networking)
    - [HTTP 클라이언트](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [패키지 관리](#package-management)
  - [성능](#performance)
  - [쿼리 언어](#query-language)
  - [리플렉션](#reflection)
  - [리소스 임베딩](#resource-embedding)
  - [과학 및 데이터 분석](#science-and-data-analysis)
  - [보안](#security)
  - [직렬화](#serialization)
  - [서버 애플리케이션](#server-applications)
  - [스트림 처리](#stream-processing)
  - [템플릿 엔진](#template-engines)
  - [테스트](#testing)
    - [테스트 프레임워크](#testing-frameworks)
    - [목(Mock)](#mock)
    - [퍼징 및 델타 디버깅/축소/최소화](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium 및 브라우저 제어 도구](#selenium-and-browser-control-tools)
    - [장애 주입](#fail-injection)
  - [텍스트 처리](#text-processing)
    - [포매터](#formatters)
    - [마크업 언어](#markup-languages)
    - [파서/인코더/디코더](#parsersencodersdecoders)
    - [정규 표현식](#regular-expressions)
    - [새니타이징](#sanitation)
    - [스크래퍼](#scrapers)
    - [RSS](#rss)
    - [유틸리티/기타](#utilitymiscellaneous)
  - [서드파티 API](#third-party-apis)
  - [유틸리티](#utilities)
  - [UUID](#uuid)
  - [유효성 검사](#validation)
  - [버전 관리](#version-control)
  - [비디오](#video)
  - [웹 프레임워크](#web-frameworks)
    - [미들웨어](#middlewares)
      - [실제 미들웨어](#actual-middlewares)
      - [HTTP 미들웨어 작성용 라이브러리](#libraries-for-creating-http-middlewares)
    - [라우터](#routers)
  - [WebAssembly](#webassembly)
  - [웹훅 서버](#webhooks-server)
  - [Windows](#windows)
  - [워크플로 프레임워크](#workflow-frameworks)
  - [XML](#xml)
  - [제로 트러스트](#zero-trust)
  - [코드 분석](#code-analysis)
  - [에디터 플러그인](#editor-plugins)
  - [Go Generate 도구](#go-generate-tools)
  - [Go 도구](#go-tools)
  - [소프트웨어 패키지](#software-packages)
    - [DevOps 도구](#devops-tools)
    - [기타 소프트웨어](#other-software)
- [리소스](#resources)
  - [벤치마크](#benchmarks)
  - [콘퍼런스](#conferences)
  - [전자책](#e-books)
    - [유료 전자책](#e-books-for-purchase)
    - [무료 전자책](#free-e-books)
  - [고퍼](#gophers)
  - [밋업](#meetups)
  - [스타일 가이드](#style-guides)
  - [소셜 미디어](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [웹사이트](#websites)
    - [튜토리얼](#tutorials)
    - [가이드형 학습](#guided-learning)
  - [기여](#contribution)
  - [라이선스](#license)

**[⬆ 맨 위로](#contents)**



</details>

## 액터 모델

_액터 기반 프로그램을 구축하기 위한 라이브러리._

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - 그래프 제어 흐름 라이브러리(AOP, 액터, 상태 머신).
- [Ergo](https://github.com/ergo-services/ergo) - Golang에서 이벤트 기반 아키텍처를 만들기 위한, 네트워크 투명성을 갖춘 액터 기반 프레임워크. Erlang에서 영감을 받았습니다.
- [Goakt](https://github.com/Tochemey/goakt) - 프로토콜 버퍼를 메시지로 사용하는 Golang용 빠른 분산 액터 프레임워크.
- [Hollywood](https://github.com/anthdm/hollywood) - Golang으로 작성된 매우 빠르고 가벼운 액터 엔진.
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Go, C#, Java/Kotlin을 위한 분산 액터.

**[⬆ 맨 위로](#contents)**

## 인공지능

_AI를 활용하는 프로그램을 구축하기 위한 라이브러리._

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - 10개 이상의 제공자에 걸친 LLM 트래픽을 라우팅, 보호, 모니터링하는 AI 게이트웨이. OpenAI 호환 API, WASM 정책 플러그인, 카나리 배포, 실시간 대시보드를 제공합니다.
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - 이벤트 소싱, 체크포인트 복구, 최대 한 번(At-Most-Once) 실행 보장을 갖춘 AI 에이전트 실행 런타임. Go로 작성되었습니다.
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Go로 상태 유지형(stateful) AI 에이전트를 구축하기 위한 프레임워크.
- [agy-mcp](https://github.com/tphakala/agy-mcp) - 프롬프트와 피어 리뷰를 실행하기 위해 Antigravity CLI를 감싸는 MCP(Model Context Protocol) 서버.
- [ai](https://github.com/joakimcarlsson/ai) - 통합된 LLM, 임베딩, 도구 호출, MCP 연동을 통해 여러 제공자에 걸쳐 AI 에이전트와 애플리케이션을 구축하기 위한 Go 툴킷.
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - 폴백, 속도 제한, 예산, 가드레일, 관측 가능성을 갖추고 30개 제공자에 걸쳐 요청을 라우팅하는 OpenAI 호환 LLM 게이트웨이.
- [chromem-go](https://github.com/philippgille/chromem-go) - Chroma와 유사한 인터페이스를 제공하며 서드파티 의존성이 전혀 없는 Go용 임베드 가능 벡터 데이터베이스. 인메모리 방식이며 선택적으로 영속화를 지원합니다.
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Go 프로그램에서 Claude Code CLI의 비대화형 프롬프트 인터페이스를 구동하기 위한 Go 라이브러리.
- [crewai-go](https://github.com/rhgs/crewai-go) - CrewAI(멀티 에이전트 오케스트레이션)를 Go 관용구에 맞게 포팅한 라이브러리. 의존성 없이 표준 라이브러리만 사용합니다.
- [Cynative](https://github.com/cynative/cynative) - Go로 보안 엔지니어링 AI 에이전트를 구축하기 위한 프레임워크. 설계상 읽기 전용이며, 샌드박스가 내장되어 있고, AWS, GCP, Azure, K8s, GitHub 및 GitLab 심층 조사를 위한 45개의 에이전트 청사진을 제공합니다.
- [dakera-go](https://github.com/dakera-ai/dakera-go) - Dakera 셀프 호스팅 에이전트 메모리 서버용 공식 Go 클라이언트 SDK로, 메모리 저장/회상, 세션 관리, 네임스페이스 작업, 감쇠(decay) 설정을 위한 타입 지정 인터페이스를 제공합니다.
- [fun](https://gitlab.com/tozd/go/fun) - Go에서 대규모 언어 모델(LLM)을 사용하는 가장 간단하면서도 강력한 방법.
- [goai](https://github.com/zendev-sh/goai) - AI 애플리케이션 구축을 위한 Go SDK. 하나의 SDK로 20개 이상의 제공자를 지원합니다. Vercel AI SDK에서 영감을 받았습니다.
- [GoModel](https://github.com/ENTERPILOT/GoModel) - 라우팅, 사용량 추적, 속도 제한, 가드레일을 갖추고 OpenAI, Anthropic, Gemini, Groq, xAI, Ollama 및 기타 제공자에 걸쳐 통합된 OpenAI 호환 API를 제공하는 AI 게이트웨이.
- [hotplex](https://github.com/hrygo/hotplex) - Claude Code, OpenCode, pi-mono 및 기타 CLI AI 도구를 위한 장기 세션을 지원하는 AI 에이전트 런타임 엔진. 전이중 스트리밍, 멀티 플랫폼 연동, 보안 샌드박스를 제공합니다.
- [jargo](https://github.com/gojargo/jargo) - 음성-텍스트 변환, LLM, 텍스트-음성 변환을 스트리밍 파이프라인으로 연결하여 WebRTC 기반의 실시간 음성 AI 에이전트를 구축하기 위한 프레임워크.
- [keen-code](https://github.com/mochow13/keen-code) - 컨텍스트를 효율적으로 사용하는 터미널 기반 AI 코딩 에이전트. 특정 제공자에 종속되지 않으며 MCP, Agent Skills, 서브에이전트 등을 지원합니다. 간단하고 직관적인 TUI를 제공합니다.
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo는 언어 모델 기반 애플리케이션을 개발하기 위한 프레임워크입니다.
- [langgraphgo](https://github.com/smallnest/langgraphgo) - LangGraph의 개념을 바탕으로 LLM을 활용한 상태 유지형 멀티 액터 애플리케이션을 구축하기 위한 Go 라이브러리로, 다양한 에이전트 아키텍처가 내장되어 있습니다.
- [llm-box](https://github.com/alib8b8/llm-box) - YAML 기반 파이프라인, 20개 이상의 LLM 제공자(DeepSeek, Qwen, GLM, Mistral 등), 워크플로 관리를 위한 TUI를 갖춘 터미널 기반 AI 워크플로 엔진.
- [LocalAI](https://github.com/mudler/LocalAI) - 오픈 소스 OpenAI 대안으로, AI 모델을 셀프 호스팅할 수 있습니다.
- [localaik](https://github.com/harshaneel/localaik) - OpenAI 및 Gemini API를 LocalStack 방식으로 로컬에서 에뮬레이션합니다. 단일 Docker 컨테이너와 llama.cpp + Gemma 3 백엔드를 사용합니다.
- [mcp-go](https://github.com/mark3labs/mcp-go) - Go로 MCP 서버와 클라이언트를 구축하기 위한 Model Context Protocol의 Go 구현.
- [Ollama](https://github.com/jmorganca/ollama) - 대규모 언어 모델을 로컬에서 실행합니다.
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - 여러 Ollama 인스턴스 묶음을 관리하고 로드 밸런싱 및 장애 조치를 수행합니다.
- [otellix](https://github.com/oluwajubelo1/otellix) - 비용 제약이 있는 프로덕션 환경을 위한 OpenTelemetry 네이티브 LLM 관측 가능성 및 예산 가드레일.
- [routex](https://github.com/Ad3bay0c/routex) - Erlang 스타일의 감독(supervision), MCP 도구 서버 지원, CLI를 갖춘 Go용 YAML 기반 멀티 에이전트 AI 런타임.
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - 생성형 AI 임베딩 모델로 파일을 벡터화해 벡터 데이터베이스에 저장하고, PDF, Markdown, DOCX, 소스 코드 등 다양한 파일 형식을 의미 기반으로 검색합니다.
- [skillreaper](https://github.com/thousandflowers/skillreaper) - AI 에이전트 세션 기록을 스캔하여 Claude Code, Codex CLI, Hermes, OpenCode, Cursor, OpenClaw 전반에서 사용되지 않는 스킬, MCP 서버, 에이전트를 식별하고 안전하게 격리하는 CLI.
- [Smeldr](https://github.com/Smeldr/core) - 타입 기반 수명 주기 관리와 모든 콘텐츠 유형을 위한 네이티브 MCP 도구를 제공하며 런타임 의존성이 없는 AI 네이티브 콘텐츠 백엔드.
- [snip](https://github.com/edouard-claude/snip) - 선언적 YAML 필터로 LLM 토큰 사용량을 60~90% 줄여 주는 CLI 프록시. Claude Code, Cursor, Copilot, Gemini에 그대로 끼워 쓸 수 있습니다. Go로 작성된 rtk 대안입니다.
- [thermal](https://github.com/jadmadi/thermal) - AI 코딩 어시스턴트를 위한 터미널 기여 히트맵, 연속 기록 추적기, 토큰 리더보드.
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - LLM 기반 멀티 에이전트 시스템을 구축하기 위한 프레임워크.
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - AI 어시스턴트에 웹 검색, 콘텐츠 추출, 다중 소스 조사 기능을 제공하는 MCP 서버. 단일 바이너리이며, 서킷 브레이커 장애 조치를 지원하는 5개의 검색 제공자와 4단계 스크래핑 파이프라인을 갖추고 있습니다.
- [zenflow](https://github.com/zendev-sh/zenflow) - 멀티 에이전트 오케스트레이션 및 워크플로 엔진. 선언적 YAML 워크플로, 허브 앤 스포크 메일박스를 갖춘 LLM 코디네이터, 경쟁 상태에 안전한 전달을 제공합니다. YAML 파일 하나와 Go 바이너리 하나로 동작하며 goai가 지원하는 모든 제공자에서 실행됩니다.

**[⬆ 맨 위로](#contents)**

## 오디오 및 음악

_오디오와 음악을 다루기 위한 라이브러리._

- [beep](https://github.com/gopxl/beep) - 재생 및 오디오 조작을 위한 간단한 라이브러리.
- [flac](https://github.com/mewkiz/flac) - FLAC 스트림을 지원하는 네이티브 Go FLAC 인코더/디코더.
- [gaad](https://github.com/Comcast/gaad) - 네이티브 Go AAC 비트스트림 파서.
- [go-aac](https://github.com/tphakala/go-aac) - FFmpeg에서 포팅한 순수 Go AAC-LC 인코더 및 디코더.
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - SIMD 가속을 지원하는 순수 Go 고품질 오디오 리샘플러.
- [go-flac](https://github.com/tphakala/go-flac) - SIMD 가속을 지원하는 네이티브 Go FLAC 인코더 및 디코더.
- [go-mpris](https://github.com/leberKleber/go-mpris) - mpris dbus 인터페이스용 클라이언트.
- [go-opus](https://github.com/tphakala/go-opus) - RFC를 준수하는 디코더를 포함한 Opus 오디오 코덱(RFC 6716)의 네이티브 Go 구현.
- [go-resample](https://github.com/gojargo/go-resample) - sinc, 선형, 0차 홀드 변환기를 갖춘 순수 Go(cgo 미사용) 오디오 샘플레이트 변환기.
- [go-wav](https://github.com/tphakala/go-wav) - 4GiB보다 큰 파일을 위한 RF64 및 BW64를 지원하는 순수 Go WAV/RIFF 리더 및 라이터.
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - 네이티브 Go 오디오 처리 라이브러리.
- [gocue](https://github.com/iSerganov/gocue) - 큐인, 큐아웃, 오버레이 지점을 감지하고 EBU R128 라우드니스를 측정하여 Liquidsoap용 JSON을 출력하는 오디오 분석 CLI.
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Go용 libsamplerate 바인딩.
- [id3v2](https://github.com/bogem/id3v2) - Go용 ID3 디코딩 및 인코딩 라이브러리.
- [malgo](https://github.com/gen2brain/malgo) - 미니 오디오 라이브러리.
- [minimp3](https://github.com/tosone/minimp3) - 경량 MP3 디코더 라이브러리.
- [music-theory](https://github.com/go-music-theory/music-theory) - Go로 구현한 음악 이론 모델.
- [Oto](https://github.com/hajimehoshi/oto) - 여러 플랫폼에서 사운드를 재생하기 위한 저수준 라이브러리.
- [PortAudio](https://github.com/gordonklaus/portaudio) - PortAudio 오디오 I/O 라이브러리용 Go 바인딩.
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - JSON 설정으로 구성하는 AI 음성 에이전트로, WebSocket과 WebRTC를 통한 STT → LLM → TTS 파이프라인을 제공합니다.

**[⬆ 맨 위로](#contents)**

## 인증 및 권한 부여

_인증 및 권한 부여를 구현하기 위한 라이브러리._

- [authboss](https://github.com/volatiletech/authboss) - 웹을 위한 모듈식 인증 시스템. 보일러플레이트와 "어려운 작업"을 최대한 없애서, Go로 새 웹 프로젝트를 시작할 때마다 인증 시스템을 매번 직접 만들 필요 없이 연결하고 설정한 뒤 바로 앱 개발을 시작할 수 있게 해 줍니다.
- [authgate](https://github.com/go-authgate/authgate) - 디바이스 권한 부여 그랜트([RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)), PKCE를 사용하는 인가 코드 흐름([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)), 머신 간 인증을 위한 클라이언트 자격 증명 그랜트를 지원하는 경량 OAuth 2.0 인가 서버.
- [branca](https://github.com/essentialkaos/branca) - Golang 1.15+용 branca 토큰 [명세 구현](https://github.com/tuupola/branca-spec).
- [casbin](https://github.com/hsluoyz/casbin) - ACL, RBAC, ABAC 같은 접근 제어 모델을 지원하는 권한 부여 라이브러리.
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - cookies.txt 파일 형식용 파서를 제공합니다.
- [go-githubauth](https://github.com/jferrl/go-githubauth) - GitHub 인증을 위한 유틸리티: GitHub 애플리케이션 토큰과 설치 토큰을 생성하고 사용합니다.
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian은 LDAP, Basic, ****** 및 인증서 기반 인증을 지원하는 강력하고 현대적인 API 및 웹 인증을 간단하고 깔끔하며 관용적인 방식으로 만들 수 있게 해 주는 Golang 라이브러리입니다.
- [go-iam](https://github.com/melvinodsa/go-iam) - 간단한 UI를 갖춘 개발자 중심의 ID 및 접근 관리(IAM) 시스템.
- [go-jose](https://github.com/go-jose/go-jose) - JOSE 워킹 그룹의 JSON Web Token, JSON Web Signatures, JSON Web Encryption 명세를 상당히 완전하게 구현한 라이브러리.
- [go-jwt](https://github.com/deatil/go-jwt) - Go용 JWT(JSON Web Token) 라이브러리.
- [go-jwt](https://github.com/pardnchiu/go-jwt) - 핑거프린팅, Redis 저장소, 자동 갱신 기능을 갖춘 액세스 토큰과 리프레시 토큰을 제공하는 JWT 인증 패키지.
- [goiabada](https://github.com/leodip/goiabada) - OAuth2와 OpenID Connect를 지원하는 오픈 소스 인증 및 권한 부여 서버.
- [gologin](https://github.com/dghubble/gologin) - OAuth1 및 OAuth2 인증 제공자로 로그인하기 위한 체이닝 가능한 핸들러.
- [gorbac](https://github.com/mikespook/gorbac) - Golang으로 작성된 경량 역할 기반 접근 제어(RBAC) 구현을 제공합니다.
- [gosession](https://github.com/Kwynto/gosession) - GoLang의 net/http를 위한 빠른 세션입니다. 이 패키지는 아마도 세션 메커니즘의 가장 뛰어난 구현이거나, 적어도 그렇게 되려고 노력합니다.
- [goth](https://github.com/markbates/goth) - OAuth와 OAuth2를 간단하고 깔끔하며 관용적인 방식으로 사용할 수 있게 해 줍니다. 여러 제공자를 기본으로 지원합니다.
- [jeff](https://github.com/abraithwaite/jeff) - 플러그인 방식의 백엔드를 지원하는 간단하고 유연하며 안전하고 관용적인 웹 세션 관리.
- [jwt](https://github.com/pascaldekloe/jwt) - 경량 JSON Web Token(JWT) 라이브러리.
- [jwt](https://github.com/cristalhq/jwt) - Go를 위한 안전하고 간단하며 빠른 JSON Web Token.
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - 다양한 설정 옵션을 제공하는 Golang HTTP 서버용 JWT 미들웨어.
- [jwt-go](https://github.com/golang-jwt/jwt) - JSON Web Token(JWT)의 모든 기능을 갖춘 구현. 이 라이브러리는 JWT의 파싱과 검증은 물론 생성과 서명도 지원합니다.
- [jwx](https://github.com/lestrrat-go/jwx) - 다양한 JWx(JWA/JWE/JWK/JWS/JWT, 일명 JOSE) 기술을 구현한 Go 모듈.
- [keto](https://github.com/ory/keto) - "Zanzibar: Google's Consistent, Global Authorization System"의 오픈 소스(Go) 구현. gRPC, REST API, newSQL, 쉽고 세분화된 권한 언어를 제공합니다. ACL, RBAC 및 기타 접근 모델을 지원합니다.
- [loginsrv](https://github.com/tarent/loginsrv) - OAuth2(Github), htpasswd, osiam 같은 플러그인 방식 백엔드를 지원하는 JWT 로그인 마이크로서비스.
- [melange](https://github.com/pthm/melange) - OpenFGA 권한 부여 스키마를 PostgreSQL 내부에서 세분화된 관계 기반 접근 제어 검사를 실행하는 PL/pgSQL 함수로 컴파일합니다.
- [oauth2](https://github.com/golang/oauth2) - goauth2의 후속 프로젝트. JWT, Google API, Compute Engine, App Engine 지원이 포함된 범용 OAuth 2.0 패키지.
- [oidc](https://github.com/zitadel/oidc) - Go용으로 작성되고 OpenID Foundation의 인증을 받은, 사용하기 쉬운 OpenID Connect 클라이언트 및 서버 라이브러리.
- [openfga](https://github.com/openfga/openfga) - "Zanzibar: Google's Consistent, Global Authorization System" 논문에 기반한 세분화된 권한 부여 구현. [CNCF](https://www.cncf.io/)의 지원을 받습니다.
- [osin](https://github.com/openshift/osin) - Golang OAuth2 서버 라이브러리.
- [otpgen](https://github.com/grijul/otpgen) - TOTP/HOTP 코드를 생성하는 라이브러리.
- [otpgo](https://github.com/jltorresm/otpgo) - Go용 시간 기반 일회용 비밀번호(TOTP) 및 HMAC 기반 일회용 비밀번호(HOTP) 라이브러리.
- [paseto](https://github.com/o1egl/paseto) - 플랫폼 독립적 보안 토큰(PASETO)의 Golang 구현.
- [permissions](https://github.com/xyproto/permissions) - 사용자, 로그인 상태, 권한을 추적하기 위한 라이브러리. 보안 쿠키와 bcrypt를 사용합니다.
- [scope](https://github.com/SonicRoshan/scope) - Go에서 OAuth2 스코프를 쉽게 관리합니다.
- [scs](https://github.com/alexedwards/scs) - HTTP 서버용 세션 관리자.
- [securecookie](https://github.com/chmike/securecookie) - 효율적인 보안 쿠키 인코딩/디코딩.
- [session](https://github.com/icza/session) - 웹 서버를 위한 Go 세션 관리(Google App Engine - GAE 지원 포함).
- [sessions](https://github.com/adam-hanna/sessions) - Go HTTP 서버를 위한 매우 간단하고 성능이 뛰어나며 사용자 정의가 자유로운 세션 서비스.
- [sessionup](https://github.com/swithek/sessionup) - 간단하면서도 효과적인 HTTP 세션 관리 및 식별 패키지.
- [sjwt](https://github.com/brianvoe/sjwt) - 간단한 JWT 생성기 및 파서.
- [spicedb](https://github.com/authzed/spicedb) - Zanzibar에서 영감을 받아 세분화된 권한 부여를 가능하게 하는 데이터베이스.
- [x509proxy](https://github.com/vkuznet/x509proxy) - X509 프록시 인증서를 처리하는 라이브러리.

**[⬆ 맨 위로](#contents)**

## 블록체인

_블록체인을 구축하기 위한 도구._

- [cometbft](https://github.com/cometbft/cometbft) - 분산형 비잔틴 장애 허용 결정적 상태 머신 복제 엔진. Tendermint Core의 포크이며 Tendermint 합의 알고리즘을 구현합니다.
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Cosmos 생태계에서 퍼블릭 블록체인을 구축하기 위한 프레임워크.
- [gno](https://github.com/gnolang/gno) - Golang과, 블록체인을 위해 특별히 만들어진 결정적 Go 변형 언어인 Gnolang으로 구축된 종합 스마트 계약 제품군.
- [go-ethereum](https://github.com/ethereum/go-ethereum) - 이더리움 프로토콜의 공식 Go 구현.
- [gosemble](https://github.com/LimeChain/gosemble) - Polkadot/Substrate 호환 런타임을 구축하기 위한 Go 기반 프레임워크.
- [gossamer](https://github.com/ChainSafe/gossamer) - Polkadot Host의 Go 구현.
- [kubo](https://github.com/ipfs/kubo) - Go로 구현한 IPFS. DApp의 탈중앙화 저장소로 사용할 수 있는 콘텐츠 주소 지정 방식의 저장소를 제공합니다. IPFS 프로토콜을 기반으로 합니다.
- [lnd](https://github.com/lightningnetwork/lnd) - 라이트닝 네트워크 노드의 완전한 구현.
- [nview](https://github.com/blinklabs-io/nview) - Cardano 노드를 위한 로컬 모니터링 도구. 대부분의 화면에 맞도록 설계된 TUI(터미널 사용자 인터페이스)입니다.
- [pactus](https://github.com/pactus-project/pactus) - Go로 구현한 Pactus 블록체인의 풀 노드.
- [solana-go](https://github.com/gagliardetto/solana-go) - Solana JSON RPC 및 WebSocket 인터페이스와 연동하기 위한 Go 라이브러리.
- [tendermint](https://github.com/tendermint/tendermint) - Tendermint 합의 및 블록체인 프로토콜을 사용해 어떤 프로그래밍 언어로 작성된 상태 머신이든 비잔틴 장애 허용 복제 상태 머신으로 변환하는 고성능 미들웨어.
- [tronlib](https://github.com/kslamph/tronlib) - TRC20 토큰을 지원하며 TRON 블록체인과 상호 작용하기 위한 포괄적이고 프로덕션 환경에 바로 쓸 수 있는 Go SDK.

**[⬆ 맨 위로](#contents)**

## 봇 구축

_봇을 구축하고 다루기 위한 라이브러리._

- [arikawa](https://github.com/diamondburned/arikawa) - Discord API를 위한 라이브러리 및 프레임워크.
- [bot](https://github.com/go-telegram/bot) - 추가 UI 컴포넌트를 제공하는, 의존성 없는 Telegram 봇 라이브러리.
- [echotron](https://github.com/NicoNex/echotron) - Go로 Telegram 봇을 만들기 위한 우아하고 동시성을 지원하는 라이브러리.
- [go-joe](https://joe-bot.net) - Hubot에서 영감을 받아 Go로 작성된 범용 봇 라이브러리.
- [go-sarah](https://github.com/oklahomer/go-sarah) - LINE, Slack, Gitter 등 원하는 채팅 서비스용 봇을 구축하기 위한 프레임워크.
- [go-tg](https://github.com/mr-linch/go-tg) - 공식 문서로부터 생성된 Telegram Bot API 접근용 Go 클라이언트 라이브러리로, 복잡한 봇을 만드는 데 필요한 기능이 모두 포함되어 있습니다.
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - twitch.tv 채팅용 봇을 작성하기 위한 라이브러리
- [micha](https://github.com/onrik/micha) - Telegram 봇 API를 위한 Go 라이브러리.
- [slack-bot](https://github.com/innogames/slack-bot) - 게으른 개발자를 위한 바로 사용 가능한 Slack 봇: 사용자 정의 명령, Jenkins, Jira, Bitbucket, Github...
- [slacker](https://github.com/slack-io/slacker) - Slack 봇을 만들기 위한 사용하기 쉬운 프레임워크.
- [telebot](https://github.com/tucnak/telebot) - Go로 작성된 Telegram 봇 프레임워크.
- [teleflow](https://github.com/kslamph/teleflow) - 플루언트 방식의 흐름 정의와 자동 상태 관리를 갖춘 간단하고 타입 안전한 Telegram 봇 프레임워크.
- [telego](https://github.com/mymmrac/telego) - API를 일대일로 완전히 구현한 Golang용 Telegram Bot API 라이브러리.
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - 간단하고 깔끔한 Telegram 봇 클라이언트.
- [TG](https://github.com/enetx/tg) - Go용 Telegram 봇 프레임워크.
- [wayback](https://github.com/wabarc/wayback) - Telegram, Mastodon, Slack 및 기타 메시징 플랫폼에서 웹 페이지를 보관하는 봇.
- [ymsdk](https://github.com/rekurt/ymsdk) - 타입 안전한 모델, 자동 재시도, 속도 제한 처리를 갖춘 Yandex Messenger Bot API용 Go SDK.
   - [Wisp](https://github.com/wisp-trading/wisp) - Go용 이벤트 기반 트레이딩 프레임워크. 현물, 무기한 선물, 예측 시장을 다룹니다. 다중 거래소(Bybit, Hyperliquid, Polymarket)를 지원합니다.

**[⬆ 맨 위로](#contents)**

## 빌드 자동화

_빌드 자동화를 돕는 라이브러리와 도구._

- [1build](https://github.com/gopinath-langote/1build) - 프로젝트별 명령을 번거로움 없이 관리하는 명령줄 도구.
- [air](https://github.com/cosmtrek/air) - Air - Go 앱을 위한 라이브 리로드.
- [anko](https://github.com/GuilhermeCaruso/anko) - 여러 프로그래밍 언어를 위한 간단한 애플리케이션 감시 도구.
- [gaper](https://github.com/maxclaus/gaper) - Go 프로젝트가 충돌하거나 감시 중인 파일이 변경되면 프로젝트를 빌드하고 다시 시작합니다.
- [gilbert](https://go-gilbert.github.io) - Go 프로젝트를 위한 빌드 시스템 및 작업 실행기.
- [gob](https://github.com/kcmvp/gob) - Go 프로젝트를 위한 [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) 같은 빌드 도구.
- [goyek](https://github.com/goyek/goyek) - Go로 빌드 파이프라인을 만듭니다.
- [mage](https://github.com/magefile/mage) - Mage는 Go를 사용하는 make/rake 유사 빌드 도구입니다.
- [mmake](https://github.com/tj/mmake) - 현대적인 Make.
- [realize](https://github.com/tockins/realize) - 파일 감시와 라이브 리로드를 갖춘 Go 빌드 시스템. 사용자 지정 경로로 실행, 빌드하고 파일 변경을 감시합니다.
- [rex](https://github.com/rexrun-dev/rex) - 설정이 필요 없는 범용 프로젝트 실행기. 사용 중인 스택(Go, Node, Python, Rust, PHP, Zig, Elixir)을 감지하여 알맞은 명령을 실행합니다.
- [Task](https://github.com/go-task/task) - 간단한 "Make" 대안.
- [taskctl](https://github.com/taskctl/taskctl) - 동시 작업 실행기.
- [xc](https://github.com/joerdav/xc) - README.md에 정의된 작업을 실행하는 작업 실행기로, 실행 가능한 마크다운입니다.

**[⬆ 맨 위로](#contents)**

## 명령줄

### 고급 콘솔 UI

_콘솔 애플리케이션과 콘솔 사용자 인터페이스를 구축하기 위한 라이브러리._

- [asciigraph](https://github.com/guptarohit/asciigraph) - 다른 의존성 없이 명령줄 앱에서 가벼운 ASCII 선 그래프 ╭┈╯를 만드는 Go 패키지.
- [aurora](https://github.com/logrusorgru/aurora) - fmt.Printf/Sprintf를 지원하는 ANSI 터미널 색상.
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - 터미널에서 자유롭게 사용자 정의할 수 있는 박스를 렌더링합니다.
- [bubble-table](https://github.com/Evertras/bubble-table) - bubbletea용 대화형 테이블 컴포넌트.
- [bubbles](https://github.com/charmbracelet/bubbles) - bubbletea용 TUI 컴포넌트.
- [bubbletea](https://github.com/charmbracelet/bubbletea) - The Elm Architecture를 기반으로 터미널 앱을 만드는 Go 프레임워크.
- [chroma16](https://github.com/arceus-7/chroma16) - 하나의 시드 색상이나 문자열로부터 조화로운 16색 터미널 팔레트를 생성합니다.
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - 쿠버네티스 매니페스트나 일반 설정 파일을 위한 동적 설정 파일 템플릿 도구.
- [ctc](https://github.com/wzshiming/ctc) - Print 메서드를 수정할 필요가 없는 비침투적 크로스 플랫폼 터미널 색상 라이브러리.
- [fx](https://github.com/antonmedv/fx) - 터미널 JSON 뷰어 및 처리기.
- [go-ataman](https://github.com/workanator/go-ataman) - 터미널에서 ANSI 색상 텍스트 템플릿을 렌더링하기 위한 Go 라이브러리.
- [go-colorable](https://github.com/mattn/go-colorable) - Windows용 컬러 출력 라이터.
- [go-colortext](https://github.com/daviddengcn/go-colortext) - 터미널 컬러 출력을 위한 Go 라이브러리.
- [go-isatty](https://github.com/mattn/go-isatty) - Golang용 isatty.
- [go-palette](https://github.com/abusomani/go-palette) - ANSI 색상을 사용해 우아하고 편리한 스타일 정의를 제공하는 Go 라이브러리. 보기 좋은 터미널 레이아웃을 위해 [fmt 라이브러리](https://pkg.go.dev/fmt)와 완전히 호환되며 이를 감쌉니다.
- [go-prompt](https://github.com/c-bata/go-prompt) - [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit)에서 영감을 받은, 강력한 대화형 프롬프트를 구축하기 위한 라이브러리.
- [go-tui](https://github.com/grindlemire/go-tui) - templ 유사 템플릿, flexbox 레이아웃, 에디터 지원을 위한 언어 서버를 갖춘 선언적 터미널 UI 프레임워크.
- [gocui](https://github.com/jroimartin/gocui) - 콘솔 사용자 인터페이스 제작을 목표로 하는 미니멀한 Go 라이브러리.
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - 터미널 텍스트에 스타일을 적용합니다.
- [gookit/color](https://github.com/gookit/color) - 16색, 256색, RGB 색상 렌더링 출력을 지원하고 Windows와 호환되는 터미널 색상 렌더링 도구 라이브러리.
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf는 대화형 CLI를 통해 정해진 규칙을 따르는 프로덕션 품질의 Go 프로젝트 보일러플레이트를 생성합니다. 더 이상 프로젝트 간에 뼈대 코드를 복사해 붙여 넣지 마세요.
- [lazyenv](https://github.com/lazynop/lazyenv) - .env 파일을 탐색, 비교, 편집하기 위한 TUI.
- [lazyteams](https://github.com/agmonetti/lazyteams) - 키보드로 조작하는 Microsoft Teams용 터미널 사용자 인터페이스.
- [lipgloss](https://github.com/charmbracelet/lipgloss) - 터미널의 색상, 서식, 레이아웃 스타일을 선언적으로 정의합니다.
- [loom](https://github.com/loom-go/loom) - TUI 구축을 위한 시그널 기반 반응형 컴포넌트 프레임워크.
- [marker](https://github.com/cyucelen/marker) - 다채로운 터미널 출력을 위해 문자열을 매칭하고 표시하는 가장 쉬운 방법.
- [mpb](https://github.com/vbauerster/mpb) - 터미널 애플리케이션을 위한 다중 진행률 표시줄.
- [phoenix](https://github.com/phoenix-tui/phoenix) - Elm에서 영감을 받은 아키텍처, 완벽한 유니코드 렌더링, 할당 없는(zero-allocation) 이벤트 시스템을 갖춘 고성능 TUI 프레임워크.
- [progressbar](https://github.com/schollz/progressbar) - 모든 OS에서 동작하는 기본적인 스레드 안전 진행률 표시줄.
- [pterm](https://github.com/pterm/pterm) - 조합 가능한 다양한 컴포넌트로 모든 플랫폼에서 콘솔 출력을 보기 좋게 꾸며 주는 라이브러리.
- [simpletable](https://github.com/alexeyco/simpletable) - Go로 터미널에 간단한 테이블을 표시합니다.
- [spinner](https://github.com/briandowns/spinner) - 옵션과 함께 터미널 스피너를 쉽게 제공하는 Go 패키지.
- [tabby](https://github.com/cheynewallace/tabby) - 아주 간단한 Golang 테이블을 위한 작은 라이브러리.
- [table](https://github.com/tomlazar/table) - 터미널 색상 기반 테이블을 위한 작은 라이브러리.
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox는 크로스 플랫폼 텍스트 기반 인터페이스를 만들기 위한 라이브러리입니다.
- [termdash](https://github.com/mum4k/termdash) - **termbox-go**를 기반으로 하고 [termui](https://github.com/gizak/termui)에서 영감을 받은 Go 터미널 대시보드.
- [termenv](https://github.com/muesli/termenv) - 터미널 애플리케이션을 위한 고급 ANSI 스타일 및 색상 지원.
- [termui](https://github.com/gizak/termui) - **termbox-go**를 기반으로 하고 [blessed-contrib](https://github.com/yaronn/blessed-contrib)에서 영감을 받은 Go 터미널 대시보드.
- [uilive](https://github.com/gosuri/uilive) - 터미널 출력을 실시간으로 갱신하기 위한 라이브러리.
- [uiprogress](https://github.com/gosuri/uiprogress) - 터미널 애플리케이션에서 진행률 표시줄을 렌더링하기 위한 유연한 라이브러리.
- [uitable](https://github.com/gosuri/uitable) - 표 형식 데이터를 사용해 터미널 앱의 가독성을 높여 주는 라이브러리.
- [vhs](https://github.com/charmbracelet/vhs) - CLI용 홈 비디오 녹화기 - 문서와 튜토리얼을 위해 코드로 터미널 GIF를 생성합니다.
- [yacspin](https://github.com/theckman/yacspin) - 터미널 스피너를 다루기 위한 또 하나의 CLI 스피너(Yet Another CLi Spinner) 패키지.

**[⬆ 맨 위로](#contents)**

### 표준 CLI

_표준 또는 기본 명령줄 애플리케이션을 구축하기 위한 라이브러리._

- [acmd](https://github.com/cristalhq/acmd) - 간단하고 유용하며 설계 방향이 뚜렷한 Go CLI 패키지.
- [argparse](https://github.com/akamensky/argparse) - Python의 argparse 모듈에서 영감을 받은 명령줄 인수 파서.
- [argv](https://github.com/cosiner/argv) - bash 문법을 사용해 명령줄 문자열을 인수 배열로 분리하는 Go 라이브러리.
- [boa](https://github.com/GiGurra/boa) - 구조체 태그로부터 선언적 플래그, 환경 변수, 유효성 검사, 설정 파일을 제공합니다. cobra 기반입니다.
- [carapace](https://github.com/rsteube/carapace) - spf13/cobra용 명령 인수 자동 완성 생성기.
- [carapace-bin](https://github.com/rsteube/carapace-bin) - 여러 셸과 여러 명령을 지원하는 인수 자동 완성기.
- [carapace-spec](https://github.com/rsteube/carapace-spec) - 명세 파일로 간단한 자동 완성을 정의합니다.
- [climax](https://github.com/tucnak/climax) - Go 명령의 정신을 따르는, "사람 친화적인 얼굴"을 가진 대안 CLI.
- [clîr](https://github.com/leaanthony/clir) - 간단하고 명확한 CLI 라이브러리. 의존성이 없습니다.
- [cmd](https://github.com/posener/cmd) - 표준 `flag` 패키지를 확장하여 하위 명령 등을 관용적인 방식으로 지원합니다.
- [cmdr](https://github.com/hedzr/cmdr) - POSIX/GNU 스타일의 getopt 유사 명령줄 UI Go 라이브러리.
- [cobra](https://github.com/spf13/cobra) - 현대적인 Go CLI 상호 작용을 위한 커맨더.
- [command-chain](https://github.com/rainu/go-command-chain) - 유닉스 셸의 파이프라이닝처럼 명령 체인을 구성하고 실행하기 위한 Go 라이브러리.
- [commandeer](https://github.com/jaffee/commandeer) - 개발자 친화적인 CLI 앱: 구조체 필드와 태그를 기반으로 플래그, 기본값, 사용법을 설정합니다.
- [complete](https://github.com/posener/complete) - Go로 bash 자동 완성 작성 + Go 명령용 bash 자동 완성.
- [console](https://github.com/reeflective/console) oh-my-posh 프롬프트 등을 지원하는 Cobra 명령용 폐쇄 루프 애플리케이션 라이브러리.
- [Dnote](https://github.com/dnote/dnote) - 여러 기기 간 동기화를 지원하는 간단한 명령줄 노트북.
- [elvish](https://github.com/elves/elvish) - 표현력 있는 프로그래밍 언어이자 다재다능한 대화형 셸.
- [env](https://github.com/codingconcepts/env) - 구조체를 위한 태그 기반 환경 설정.
- [flaggy](https://github.com/integrii/flaggy) - 하위 명령을 훌륭하게 지원하는 견고하고 관용적인 플래그 패키지.
- [flagvar](https://github.com/sgreben/flagvar) - Go 표준 `flag` 패키지를 위한 플래그 인수 타입 모음.
- [flash-flags](https://github.com/agilira/flash-flags) - 보안이 강화되어 표준 라이브러리를 그대로 대체할 수 있는, 초고속에 의존성이 없고 POSIX를 준수하는 플래그 파싱 라이브러리.
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - 자체 신뢰성 UDP 위에서 동작하는 터미널 기반 P2P 파일 및 메시지 전송 도구.
- [getopt](https://github.com/jon-codes/getopt) - GNU libc 구현과 대조하여 검증된 정확한 Go `getopt`.
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - 미니멀, 표준, 헥사고날 아키텍처 패턴으로 Go 애플리케이션의 뼈대를 생성하는 CLI 도구.
- [go-arg](https://github.com/alexflint/go-arg) - Go의 구조체 기반 인수 파싱.
- [go-flags](https://github.com/jessevdk/go-flags) - Go 명령줄 옵션 파서.
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Perl GetOpt::Long의 유연성에서 영감을 받은 Go 옵션 파서.
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Emacs 키 바인딩, 유니코드 지원, 자동 완성, 구문 강조를 갖춘 사용자 정의 가능한 줄 편집 라이브러리. NYAGOS 셸에서 사용됩니다.
- [gocmd](https://github.com/devfacet/gocmd) - 명령줄 애플리케이션을 구축하기 위한 Go 라이브러리.
- [goopt](https://github.com/napalu/goopt) - 계층적 명령/플래그, i18n, 셸 자동 완성, 유효성 검사 등 폭넓은 기능을 갖춘 Go용 선언적 구조체 태그 기반 CLI 프레임워크.
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - 77개의 POSIX 도구를 담고 BusyBox 테스트 호환성이 97%를 넘는 Go 네이티브 단일 바이너리 멀티콜 도구.
- [hashicorp/cli](https://github.com/hashicorp/cli) - 명령줄 인터페이스를 구현하기 위한 Go 라이브러리.
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - 자동 설정과 의존성 주입을 지원하는 CLI 애플리케이션 프레임워크.
- [job](https://github.com/liujianping/job) - JOB, 단기 명령을 장기 작업으로 만들어 줍니다.
- [kingpin](https://github.com/alecthomas/kingpin) - 하위 명령을 지원하는 명령줄 및 플래그 파서(`kong`으로 대체됨, 아래 참조).
- [liner](https://github.com/peterh/liner) - 명령줄 인터페이스를 위한 readline 유사 Go 라이브러리.
- [mcli](https://github.com/jxskiss/mcli) - 최소한이지만 매우 강력한 Go용 CLI 라이브러리.
- [memsh](https://github.com/amjadjibon/memsh) - Go로 만든 가상 bash 셸: 인메모리 파일 시스템(afero)에서 셸 명령을 실행하며, WASM 플러그인과 임베드 가능한 HTTP 서버를 지원합니다.
- [mkideal/cli](https://github.com/mkideal/cli) - Golang 구조체 태그를 기반으로 한, 기능이 풍부하고 사용하기 쉬운 명령줄 패키지.
- [mow.cli](https://github.com/jawher/mow.cli) - 정교한 플래그 및 인수 파싱과 유효성 검사를 갖춘 CLI 애플리케이션을 구축하기 위한 Go 라이브러리.
- [neuron-cli](https://github.com/steevin/neuron-cli) - 로컬 우선, Obsidian 호환 터미널 지식 관리 도구.
- [OpenCLI](https://github.com/bcdxn/opencli) - CLI를 위한 OpenAPI 스타일 명세. 언어 중립적인 문서로 인터페이스를 정의하면 문서와 프레임워크 보일러플레이트 코드를 생성할 수 있습니다.
- [ops](https://github.com/nanovms/ops) - 유니커널 빌더/오케스트레이터.
- [orpheus](https://github.com/agilira/orpheus) - 보안 강화, 플러그인 저장소 시스템, 프로덕션 관측 가능성 기능을 갖춘 CLI 프레임워크.
- [pflag](https://github.com/spf13/pflag) - POSIX/GNU 스타일의 --flags를 구현한, Go flag 패키지의 드롭인 대체품.
- [readline](https://github.com/reeflective/readline) - 현대적이고 사용하기 쉬운 UI 기능을 갖춘 셸 라이브러리.
- [sflags](https://github.com/octago/sflags) - flag, urfave/cli, pflag, cobra, kingpin 등의 라이브러리를 위한 구조체 기반 플래그 생성기.
- [structcli](https://github.com/leodido/structcli) - Cobra 보일러플레이트 제거: Go 구조체로부터 강력하고 기능이 풍부한 CLI를 선언적으로 구축합니다.
- [strumt](https://github.com/antham/strumt) - 프롬프트 체인을 만들기 위한 라이브러리.
- [subcmd](https://github.com/bobg/subcmd) - 하위 명령을 파싱하고 실행하는 또 다른 접근 방식. 표준 `flag` 패키지와 함께 동작합니다.
- [teris-io/cli](https://github.com/teris-io/cli) - Go로 명령줄 인터페이스를 구축하기 위한 간단하고 완전한 API.
- [urfave/cli](https://github.com/urfave/cli) - Go로 명령줄 앱을 만들기 위한 간단하고 빠르며 재미있는 패키지(이전 이름 codegangsta/cli).
- [version](https://github.com/mszostok/version) - CLI 버전 정보를 수집하여 업그레이드 알림과 함께 여러 형식으로 표시합니다.
- [wlog](https://github.com/dixonwille/wlog) - 크로스 플랫폼 색상과 동시성을 지원하는 간단한 로깅 인터페이스.
- [wmenu](https://github.com/dixonwille/wmenu) - 사용자에게 선택을 요청하는 CLI 애플리케이션을 위한 사용하기 쉬운 메뉴 구조.

**[⬆ 맨 위로](#contents)**

## 설정

_설정 파싱을 위한 라이브러리._

- [aconfig](https://github.com/cristalhq/aconfig) - 간단하고 유용하며 설계 방향이 뚜렷한 설정 로더.
- [argus](https://github.com/agilira/argus) - MPSC 링 버퍼, 적응형 배치 전략, 범용 형식 파싱(JSON, YAML, TOML, INI, HCL, Properties)을 갖춘 파일 감시 및 설정 관리.
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Go 애플리케이션에서 Azure App Configuration의 데이터를 사용하기 위한 설정 제공자.
- [bcl](https://github.com/wkhere/bcl) - BCL은 HCL과 비슷한 설정 언어입니다.
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - 미니멀한 설정 리더(파일, 환경 변수 등 원하는 어디에서든 읽음).
- [config](https://github.com/JeremyLoy/config) - 클라우드 네이티브 애플리케이션 설정. 단 두 줄로 환경 변수를 구조체에 바인딩합니다.
- [config](https://github.com/num30/config) - 두 줄의 코드로 파일, 환경 변수, 플래그를 사용해 앱을 설정합니다.
- [config](https://github.com/andreiavrammsd/config) - 전용 설정 파일 파서를 갖추고 환경 변수, 플래그, 기본값, 유효성 검사를 지원하는 구조체 기반 설정 로더.
- [configuration](https://github.com/BoRuDar/configuration) - 환경 변수, 파일, 플래그, 'default' 태그로부터 설정 구조체를 초기화하는 라이브러리.
- [configuro](https://github.com/sherifabdlnaby/configuro) - 12-Factor를 준수하는 애플리케이션에 초점을 맞춰 환경 변수와 파일에서 설정을 로드하고 검증하는, 설계 방향이 뚜렷한 프레임워크.
- [confiq](https://github.com/greencoda/confiq) - 구조화된 데이터 형식을 설정 구조체로 디코딩하는 Go 라이브러리 - 여러 데이터 형식을 지원합니다.
- [confita](https://github.com/heetch/confita) - 여러 백엔드에서 계단식으로 설정을 읽어 구조체에 로드합니다.
- [conflate](https://github.com/the4thamigo-uk/conflate) - 임의의 URL에 있는 여러 JSON/YAML/TOML 파일을 병합하고, JSON 스키마로 검증하며, 스키마에 정의된 기본값을 적용하는 라이브러리/도구.
- [enflag](https://github.com/atelpis/enflag) - 환경 변수와 플래그 파싱을 통합한 컨테이너 지향의 의존성 없는 설정 라이브러리. 리플렉션이나 구조체 태그 없이 제네릭으로 타입 안전성을 확보합니다.
- [env](https://github.com/caarlos0/env) - 환경 변수를 Go 구조체로 파싱합니다(기본값 지원).
- [env](https://github.com/junk1tm/env) - 환경 변수를 구조체로 로드하기 위한 경량 패키지.
- [env](https://github.com/syntaqx/env) - 구조체로의 언마샬링을 지원하는 환경 유틸리티 패키지.
- [envconfig](https://github.com/vrischmann/envconfig) - 환경 변수에서 설정을 읽어 옵니다.
- [envh](https://github.com/antham/envh) - 환경 변수를 관리하기 위한 헬퍼.
- [envyaml](https://github.com/yuseferi/envyaml) - 환경 변수를 포함한 Yaml 리더. 비밀 값은 환경 변수로 두면서 설정은 구조화된 Yaml로 로드할 수 있게 도와줍니다.
- [fig](https://github.com/kkyr/fig) - 파일과 환경 변수에서 설정을 읽어 오는 작은 라이브러리(유효성 검사 및 기본값 지원).
- [genv](https://github.com/sakirsensoy/genv) - dotenv를 지원하며 환경 변수를 쉽게 읽어 옵니다.
- [go-array](https://github.com/deatil/go-array) - 맵, 슬라이스, JSON에서 데이터를 읽거나 설정하는 Go 패키지.
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - AWS System Manager - Parameter Store에서 매개변수를 가져오는 Go 패키지.
- [go-cfg](https://github.com/dsbasko/go-cfg) - 환경 변수, 플래그, 설정 파일(.json, .yaml, .toml, .env) 등 다양한 소스에서 설정 데이터를 구조체로 읽어 오는 통일된 방법을 제공하는 라이브러리.
- [go-conf](https://github.com/ThomasObenaus/go-conf) - 어노테이션이 달린 구조체를 기반으로 한 간단한 애플리케이션 설정 라이브러리. 환경 변수, 설정 파일, 명령줄 매개변수에서 설정을 읽어 오는 기능을 지원합니다.
- [go-config](https://github.com/MordaTeam/go-config) - 앱 설정을 다루기 위한 간단하고 편리한 라이브러리.
- [go-external-config](https://github.com/go-external-config/go) - Spring에서 영감을 받은 Go용 설정 관리 라이브러리.
- [go-external-config/aws](https://github.com/go-external-config/aws) - go-external-config를 위한 AWS 속성 소스 지원.
- [go-external-config/consul](https://github.com/go-external-config/consul) - go-external-config를 위한 Consul 속성 소스 지원.
- [go-external-config/vault](https://github.com/go-external-config/vault) - go-external-config를 위한 Vault 속성 소스 지원.
- [go-ini](https://github.com/subpop/go-ini) - INI 파일을 마샬링하고 언마샬링하는 Go 패키지.
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - AWS SSM(Parameter Store)에서 설정 매개변수를 로드하기 위한 Go 유틸리티.
- [go-up](https://github.com/ufoscout/go-up) - 재귀적 플레이스홀더 해석을 지원하며 마법 같은 동작이 없는 간단한 설정 라이브러리.
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - 네이티브 Go 스키마와 JSON Schema를 지원하는, 소스 위치를 인식하는 YAML 유효성 검사.
- [GoCfg](https://github.com/Jagerente/gocfg) - 구조체 태그 기반 계약, 사용자 정의 값 제공자, 파서, 문서 생성을 갖춘 설정 관리자. 사용자 정의가 가능하면서도 간단합니다.
- [goconfig](https://github.com/fulldump/goconfig) - 결정적인 우선순위에 따라 플래그, 환경 변수, config.json, 기본값으로 Go 구조체를 채웁니다. 추가 의존성이 없습니다.
- [godotenv](https://github.com/joho/godotenv) - Ruby dotenv 라이브러리의 Go 포트(`.env`에서 환경 변수를 로드).
- [goenv](https://github.com/psyb0t/goenv) - ENV 환경 변수를 읽어 프로세스가 프로덕션에서 실행 중인지 개발 환경에서 실행 중인지 알려 줍니다.
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config는 Go 프로그래밍 언어를 위한 가볍지만 강력한 설정 관리자입니다.
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - 모듈식 JSON 설정. 설정 구조체를 해당 설정을 사용하는 코드와 함께 두고, 전체 설정 직렬화를 희생하지 않으면서 파싱을 하위 모듈에 위임합니다.
- [gonfig](https://github.com/milad-abbasi/gonfig) - 여러 제공자로부터 값을 읽어 타입 안전한 구조체에 로드하는 태그 기반 설정 파서.
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - 구조체 태그 기본값과 필수 필드를 지원하며, 리플렉션을 통해 환경 변수의 설정을 구조체로 로드합니다.
- [gookit/config](https://github.com/gookit/config) - 애플리케이션 설정 관리(로드, 조회, 설정). JSON, YAML, TOML, INI, HCL을 지원합니다. 여러 파일 로드와 데이터 덮어쓰기 병합을 지원합니다.
- [harvester](https://github.com/beatlabs/harvester) - Harvester는 시딩, 환경 변수, Consul 연동을 지원하는 사용하기 쉬운 정적 및 동적 설정 패키지입니다.
- [hedzr/store](https://github.com/hedzr/store) - 계층적 데이터에 최적화된 확장 가능한 고성능 설정 관리 라이브러리.
- [hjson](https://github.com/hjson/hjson-go) - 사람을 위한 설정 파일 형식인 Human JSON. 느슨한 문법, 더 적은 실수, 더 많은 주석.
- [hocon](https://github.com/gurkankaymak/hocon) - HOCON(사람 친화적인 JSON 상위 집합) 형식을 다루기 위한 설정 라이브러리로, 환경 변수, 다른 값 참조, 주석, 여러 파일 같은 기능을 지원합니다.
- [ini](https://github.com/go-ini/ini) - INI 파일을 읽고 쓰기 위한 Go 패키지.
- [ini](https://github.com/wlevene/ini) - INI 파서 및 쓰기 라이브러리. 구조체로 언마샬링, JSON으로 마샬링, 파일 쓰기, 파일 감시를 지원합니다.
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - 환경 변수의 설정 데이터를 관리하기 위한 Go 라이브러리.
- [koanf](https://github.com/knadh/koanf) - Go 애플리케이션에서 설정을 읽기 위한 가볍고 확장 가능한 라이브러리. JSON, TOML, YAML, 환경 변수, 명령줄을 기본 지원합니다.
- [konf](https://github.com/nil-go/konf) - 파일, 환경 변수, 플래그, 클라우드(예: AWS, Azure, GCP)에서 설정을 읽고 감시하기 위한 가장 간단한 API.
- [konfig](https://github.com/lalamove/konfig) - 분산 처리 시대를 위한, 조합 가능하고 관찰 가능하며 성능이 뛰어난 Go 설정 처리.
- [kong](https://github.com/alecthomas/kong) - 임의로 복잡한 명령줄 구조와 YAML, JSON, TOML 등 추가 설정 소스를 지원하는 명령줄 파서(`kingpin`의 후속작).
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - 환경 변수를 읽기 위한 간단하고 유용한 패키지.
- [nfigure](https://github.com/muir/nfigure) - 라이브러리별 구조체 태그 기반 설정: 명령줄(Posix 및 Go 스타일), 환경 변수, JSON, YAML
- [onion](https://github.com/goraz/onion) - Go를 위한 레이어 기반 설정. JSON, TOML, YAML, properties, etcd, 환경 변수, PGP를 사용한 암호화를 지원합니다.
- [piper](https://github.com/Yiling-J/piper) - 설정 상속과 키 생성을 지원하는 Viper 래퍼.
- [sonic](https://github.com/bytedance/sonic) - 매우 빠른 JSON 직렬화 및 역직렬화 라이브러리.
- [swap](https://github.com/oblq/swap) - 빌드 환경에 따라 구조체를 재귀적으로 인스턴스화하고 설정합니다. (YAML, TOML, JSON, env 지원).
- [typenv](https://github.com/diegomarangoni/typenv) - 미니멀하고 의존성이 없는 타입 지정 환경 변수 라이브러리.
- [uConfig](https://github.com/omeid/uconfig) - 가볍고 의존성이 없으며 확장 가능한 설정 관리.
- [viper](https://github.com/spf13/viper) - 독니를 가진 Go 설정 관리 도구.
- [xdg](https://github.com/adrg/xdg) - [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/)과 [XDG 사용자 디렉터리](https://wiki.archlinux.org/index.php/XDG_user_directories)의 Go 구현.
- [yamagiconf](https://github.com/romshark/yamagiconf) - Go 설정을 위한 YAML의 "안전한 부분 집합".
- [zerocfg](https://github.com/chaindead/zerocfg) - 보일러플레이트와 반복 코드를 피하고 우선순위 기반 재정의로 여러 소스를 지원하는, 수고가 들지 않는 간결한 설정 관리.

**[⬆ 맨 위로](#contents)**

## 지속적 통합

_지속적 통합을 돕는 도구._

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse는 분산 CI 플랫폼입니다.
- [Bencher](https://bencher.dev/) - CI에서 성능 저하를 잡아내도록 설계된 지속적 벤치마킹 도구 모음.
- [CDS](https://github.com/ovh/cds) - 엔터프라이즈급 CI/CD 및 DevOps 자동화 오픈 소스 플랫폼.
- [dot](https://github.com/opnlabs/dot) - Docker를 사용해 작업을 단계별로 동시에 실행하는 미니멀한 로컬 우선 지속적 통합 시스템.
- [drone](https://github.com/drone/drone) - Drone은 Docker 기반으로 구축되고 Go로 작성된 지속적 통합 플랫폼입니다.
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - 보기 좋은 HTML 미리보기와 함께 풀 리퀘스트의 코드 커버리지를 무료로 추적하는 GitHub Action.
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - GitHub Actions에서 Go 1.18의 내장 퍼즈 테스트를 사용합니다.
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Git 저장소의 시맨틱 버저닝을 자동화합니다.
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - 테스트 커버리지가 설정된 임계값보다 낮을 때 문제를 보고하는 GitHub Action.
- [gomason](https://github.com/nikogura/gomason) - 깨끗한 작업 공간에서 Go 바이너리를 테스트, 빌드, 서명, 게시합니다.
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - 사람이 읽기 좋은 go test 출력.
- [goveralls](https://github.com/mattn/goveralls) - Coveralls.io 지속적 코드 커버리지 추적 시스템을 위한 Go 연동.
- [muffet](https://github.com/raviqqe/muffet) - Go로 작성된 빠른 웹사이트 링크 검사기. [대안](https://github.com/lycheeverse/lychee#features)도 참고하세요.
- [overalls](https://github.com/go-playground/overalls) - goveralls 같은 도구를 위한 다중 패키지 Go 프로젝트 coverprofile.
- [PikoCI](https://github.com/pikoci/pikoci) - Concourse에서 영감을 받은 셀프 호스팅 CI/CD. 단일 바이너리로 어떤 데이터베이스와 큐든 사용할 수 있습니다. HCL 파이프라인, 플러그인 방식의 리소스 타입과 러너를 제공합니다.
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - 재귀적 커버리지 테스트 도구.
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker는 Drone CI 시스템의 커뮤니티 포크입니다.

**[⬆ 맨 위로](#contents)**

## CSS 전처리기

_CSS 파일을 전처리하기 위한 라이브러리._

- [go-css](https://github.com/napsy/go-css) - Go로 작성된 매우 간단한 CSS 파서.
- [go-libsass](https://github.com/wellington/go-libsass) - Sass와 100% 호환되는 libsass 프로젝트의 Go 래퍼.

**[⬆ 맨 위로](#contents)**

## 데이터 통합 프레임워크

_ELT / ETL을 수행하기 위한 프레임워크_

- [Benthos](https://github.com/benthosdev/benthos) - 다양한 프로토콜 간의 메시지 스트리밍 브리지.
- [CloudQuery](http://github.com/cloudquery/cloudquery) - 플러그인 방식 아키텍처를 갖춘 고성능 ELT 데이터 통합 프레임워크.
- [confluence2md](https://github.com/gkoos/confluence2md) - Confluence를 Markdown으로 변환하는 크롤러 및 변환기.
- [omniparser](https://github.com/jf-tech/omniparser) - 텍스트 입력(CSV/txt/JSON/XML/EDI/X12/EDIFACT 등)을 스트리밍 방식으로 파싱하고 데이터 기반 스키마를 사용해 JSON 출력으로 변환하는 다목적 ETL 라이브러리.

**[⬆ 맨 위로](#contents)**

## 자료 구조 및 알고리즘

### 비트 패킹 및 압축

- [bingo](https://github.com/iancmcc/bingo) - 네이티브 타입을 사전식 순서를 유지하며 바이트로 패킹하는, 빠르고 할당 없는 라이브러리.
- [binpacker](https://github.com/zhuangsirui/binpacker) - 사용자 정의 바이너리 스트림 구축을 돕는 바이너리 패커 및 언패커.
- [bit](https://github.com/yourbasic/bit) - 비트 조작 함수를 덤으로 제공하는 Golang 집합 자료 구조.
- [crunch](https://github.com/superwhiskers/crunch) - 다양한 데이터 타입을 쉽게 다루기 위한 버퍼를 구현한 Go 패키지.
- [go-ef](https://github.com/amallia/go-ef) - Elias-Fano 인코딩의 Go 구현.
- [roaring](https://github.com/RoaringBitmap/roaring) - 압축 비트셋을 구현한 Go 패키지.

### 비트 집합

- [bitmap](https://github.com/kelindar/bitmap) - Go로 작성된 밀집형, 할당 없는, SIMD 지원 비트맵/비트셋.
- [bitset](https://github.com/bits-and-blooms/bitset) - 비트셋을 구현한 Go 패키지.

### 블룸 및 쿠쿠 필터

- [bloom](https://github.com/bits-and-blooms/bloom) - 블룸 필터를 구현한 Go 패키지.
- [bloom](https://github.com/zhenjl/bloom) - Go로 구현한 블룸 필터.
- [bloom](https://github.com/yourbasic/bloom) - Golang 블룸 필터 구현.
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Java의 Guava 라이브러리와 호환되는 또 하나의 Go 블룸 필터 구현.
- [boomfilters](https://github.com/tylertreat/BoomFilters) - 연속적이고 무한한 스트림을 처리하기 위한 확률적 자료 구조.
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - 쿠쿠 필터: 다른 구현에 비해 설정 가능하고 공간이 최적화된 포괄적인 쿠쿠 필터로, 원 논문에서 언급된 모든 기능을 사용할 수 있습니다.
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - 쿠쿠 필터: Go로 구현된, 카운팅 블룸 필터의 좋은 대안.
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - 공간 효율적인 근사 집합 소속 질의를 위한 Ribbon 필터(실제로 Bloom 및 Xor보다 작음)의 최초 순수 Go 구현.
- [ring](https://github.com/TheTannerRyan/ring) - 고성능 스레드 안전 블룸 필터의 Go 구현.

### 자료 구조 및 알고리즘 모음

- [algorithms](https://github.com/shady831213/algorithms) - 알고리즘과 자료 구조. CLRS 학습.
- [go-datastructures](https://github.com/Workiva/go-datastructures) - 유용하고 성능이 뛰어나며 스레드 안전한 자료 구조 모음.
- [gods](https://github.com/emirpasic/gods) - Go 자료 구조. 컨테이너, 집합, 리스트, 스택, 맵, 양방향 맵(BidiMap), 트리, HashSet 등.
- [gostl](https://github.com/liyue201/gostl) - C++ STL과 유사한 기능을 제공하도록 설계된 Go용 자료 구조 및 알고리즘 라이브러리.

### 이터레이터

- [glinq](https://github.com/CreateLab/glinq) - 타입 안전한 제네릭과 성능 최적화를 갖추고 의존성이 없는 LINQ 유사 지연 평가 라이브러리.
- [gloop](https://github.com/alvii147/gloop) - Go의 range-over-func 기능을 사용한 편리한 반복.
- [goterator](https://github.com/yaa110/goterator) - map 및 reduce 기능을 제공하는 이터레이터 구현.
- [iter](https://github.com/disksing/iter) - C++ STL 이터레이터와 알고리즘의 Go 구현.

### 맵

더 복잡한 키-값 저장소는 [데이터베이스](#database)를, 추가적인 순서 있는 맵 구현은 [트리](#trees)를
참고하세요.

- [cmap](https://github.com/lrita/cmap) - Go용 스레드 안전 동시성 맵으로, `interface{}`를 키로 사용할 수 있고 샤드를 자동으로 확장합니다.
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Swiss Map을 사용한 고성능 스레드 안전 제네릭 동시성 해시 맵 구현.
- [dict](https://github.com/srfrog/dict) - Go를 위한 Python 스타일 딕셔너리(dict).
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - 모든 메서드를 동일하게 제공하고 의존성이 없는 `sync.Map`용 타입 안전 제네릭 래퍼.
- [go-shelve](https://github.com/lucmq/go-shelve) - Go 프로그래밍 언어를 위한 영속적인 맵 형태의 객체. 여러 임베디드 키-값 저장소를 지원합니다.
- [goradd/maps](https://github.com/goradd/maps) - 맵, 안전한 맵, 순서 있는 맵, 순서 있고 안전한 맵 등을 위한 Go 1.18+ 제네릭 맵 인터페이스.
- [hmap](https://github.com/lyonnee/hmap) - HMap은 사용하기 쉬운 API를 제공하도록 설계된, 동시성을 지원하고 안전하며 제네릭을 지원하는 맵 구현입니다.

### 기타 자료 구조 및 알고리즘

- [combo](https://github.com/bobg/combo) - 순열, 조합, 중복 조합을 포함한 조합론 연산.
- [concurrent-writer](https://github.com/free/concurrent-writer) - `bufio.Writer`를 그대로 대체할 수 있는 고도의 동시성 지원 구현.
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Count-Min-Log 스케치의 Go 구현: 근사 카운터를 이용한 근사 계수(Count-Min 스케치와 비슷하지만 메모리를 덜 사용).
- [FSM](https://github.com/enetx/fsm) - Go용 FSM.
- [fsm](https://github.com/cocoonspace/fsm) - 유한 상태 기계 패키지.
- [genfuncs](https://github.com/nwillc/genfuncs) - Kotlin의 Sequence와 Map에서 영감을 받은 Go 1.18+ 제네릭 패키지.
- [go-generics](https://github.com/bobg/go-generics) - 제네릭 슬라이스, 맵, 집합, 이터레이터, 고루틴 유틸리티.
- [go-geoindex](https://github.com/hailocab/go-geoindex) - 인메모리 지리 인덱스.
- [go-rampart](https://github.com/francesconi/go-rampart) - 구간들이 서로 어떤 관계인지 판별합니다.
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - 효율적인 점 위치 탐색과 이웃 찾기를 지원하는 영역 쿼드트리.
- [go-tuple](https://github.com/barweiss/go-tuple) - Go 1.18+용 제네릭 튜플 구현.
- [go18ds](https://github.com/daichi-m/go18ds) - Go 1.18 제네릭을 사용한 Go 자료 구조.
- [gofal](https://github.com/xxjwxc/gofal) - Go용 분수 API.
- [gogu](https://github.com/esimov/gogu) - 포괄적이고 재사용 가능하며 효율적인, 동시성에 안전한 제네릭 유틸리티 함수 및 자료 구조 라이브러리.
- [gota](https://github.com/kniren/gota) - Go를 위한 데이터프레임, 시리즈, 데이터 랭글링 메서드 구현.
- [hide](https://github.com/emvi/hide) - 클라이언트에 ID가 전송되지 않도록 해시와 상호 마샬링하는 ID 타입.
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Sparse, LogLog-Beta 편향 보정, TailCut 공간 절감을 갖춘 HyperLogLog 구현.
- [quadtree](https://github.com/s0rg/quadtree) - 제네릭, 할당 없음, 테스트 커버리지 100%의 쿼드트리.
- [slices](https://github.com/twharmon/slices) - 슬라이스를 위한 순수 제네릭 함수.
- [xsync](https://github.com/puzpuzpuz/xsync) - 동시성 제네릭 해시 테이블인 `xsync.Map` 같은 확장 가능한 동시성 자료 구조.

### 널 허용 타입

- [nan](https://github.com/kak-tus/nan) - 편리한 변환 함수, 마샬러, 언마샬러를 갖춘, 할당 없는 널 허용 구조체를 하나의 라이브러리로 제공합니다.
- [null](https://github.com/emvi/null) - JSON으로 마샬링/언마샬링할 수 있는 널 허용 Go 타입.
- [typ](https://github.com/gurukami/typ) - 널 타입, 안전한 기본 타입 변환, 복잡한 구조체에서 값 가져오기.

### 큐

- [deheap](https://github.com/aalpar/deheap) - 최솟값과 최댓값 원소 모두에 O(log n)으로 접근할 수 있는 양방향 힙(최소-최대 힙).
- [deque](https://github.com/edwingeng/deque) - 고도로 최적화된 양방향 큐.
- [deque](https://github.com/gammazero/deque) - 빠른 링 버퍼 덱(양방향 큐).
- [dqueue](https://github.com/vodolaz095/dqueue) - 간단하고 인메모리이며 의존성이 없고 실전에서 검증된 스레드 안전 지연 큐.
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - 동시성 FIFO 큐.
- [hatchet](https://github.com/hatchet-dev/hatchet) - 분산형 장애 허용 작업 큐.
- [list](https://github.com/koss-null/list) - 이터레이터를 완벽하게 지원하는 제네릭 스레드 안전 이중 연결 리스트와 임베디드 용도의 침투형 단일 연결 리스트. 기능이 풍부한 container/list 대체품입니다.
- [memlog](https://github.com/embano1/memlog) - Apache Kafka에서 영감을 받은, 사용하기 쉽고 가벼우며 스레드 안전한 추가 전용 인메모리 자료 구조.
- [queue](https://github.com/adrianbrad/queue) - Go를 위한 여러 가지 스레드 안전 제네릭 큐 구현.

### 집합

- [dsu](https://github.com/ihebu/dsu) - Go로 구현한 서로소 집합(Disjoint Set) 자료 구조.
- [golang-set](https://github.com/deckarep/golang-set) - Go를 위한 스레드 안전 및 비스레드 안전 고성능 집합.
- [goset](https://github.com/zoumo/goset) - Go를 위한 유용한 집합 컬렉션 구현.
- [set](https://github.com/StudioSol/set) - LinkedHashMap을 사용해 Go로 구현한 간단한 집합 자료 구조.

### 텍스트 분석

- [bleve](https://github.com/blevesearch/bleve) - Go를 위한 현대적인 텍스트 인덱싱 라이브러리.
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - 적응형 기수 트리(Adaptive Radix Tree)의 Go 구현.
- [go-edlib](https://github.com/hbollon/go-edlib) - 유니코드와 호환되는 Go 문자열 비교 및 편집 거리 알고리즘 라이브러리(Levenshtein, LCS, Hamming, Damerau levenshtein, Jaro-Winkler 등).
- [levenshtein](https://github.com/agext/levenshtein) - 편집 비용을 사용자 정의할 수 있고 공통 접두사에 Winkler 방식의 가산점을 주는 레벤슈타인 거리 및 유사도 지표.
- [levenshtein](https://github.com/agnivade/levenshtein) - Go로 레벤슈타인 거리를 계산하는 구현.
- [mspm](https://github.com/BlackRabbitt/mspm) - 정보 검색을 위한 다중 문자열 패턴 매칭 알고리즘.
- [parsefields](https://github.com/MonaxGT/parsefields) - JSON 형태의 로그를 파싱해 고유한 필드와 이벤트를 수집하는 도구.
- [ptrie](https://github.com/viant/ptrie) - 접두사 트리 구현.
- [radixtree](https://github.com/gammazero/radixtree) - 적응형 기수 트리(접두사 트리 또는 압축 트라이).
- [trie](https://github.com/derekparker/trie) - Go로 구현한 트라이.

### 트리

- [graphlib](https://github.com/aio-arch/graphlib) - 위상 정렬 라이브러리. DAG 그래프의 정렬 및 가지치기.
- [hashsplit](http://github.com/bobg/hashsplit) - 위치가 아닌 콘텐츠로 경계를 결정하여 바이트 스트림을 청크로 분할하고 청크를 트리로 구성합니다.
- [merkle](https://github.com/bobg/merkle) - 머클 루트 해시와 포함 증명의 공간 효율적인 계산.
- [skiplist](https://github.com/MauriceGit/skiplist) - 매우 빠른 Go 스킵 리스트 구현.
- [skiplist](https://github.com/gansidui/skiplist) - Go로 구현한 스킵 리스트.
- [skiplist](https://github.com/huandu/skiplist) - Go를 위한 빠르고 사용하기 쉬운 스킵 리스트.
- [treemap](https://github.com/igrmk/treemap) - 내부적으로 레드-블랙 트리를 사용하는 제네릭 키 정렬 맵.

### 파이프

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - 작업을 동시에 처리하고 입력 순서대로 채널에 결과를 반환하는 Go 모듈.
- [parapipe](https://github.com/nazar256/parapipe) - 메시지와 결과의 순서를 유지하면서 각 단계의 실행을 병렬화하는 FIFO 파이프라인.
- [pipeline](https://github.com/hyfather/pipeline) - 팬인과 팬아웃을 지원하는 파이프라인 구현.
- [pipelines](https://github.com/nxdir-s/pipelines) - 동시 처리를 위한 제네릭 파이프라인 함수.

**[⬆ 맨 위로](#contents)**

## 데이터베이스

### 캐시

_만료되는 레코드를 가진 데이터 저장소, 인메모리 분산 데이터 저장소, 또는 파일 기반 데이터베이스의 인메모리 부분 집합._

- [bcache](https://github.com/iwanbk/bcache) - 최종 일관성을 갖는 분산 인메모리 캐시 Go 라이브러리.
- [BigCache](https://github.com/allegro/bigcache) - 기가바이트 규모 데이터를 위한 효율적인 키/값 캐시.
- [cache2go](https://github.com/muesli/cache2go) - 타임아웃에 따른 자동 무효화를 지원하는 인메모리 키:값 캐시.
- [cachego](https://github.com/faabiosr/cachego) - 여러 드라이버를 지원하는 Golang 캐시 컴포넌트.
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - 클러스터링과 개별 항목 만료를 지원하는 BigCache.
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - gRPC를 네트워크 전송으로 사용하는, Go 애플리케이션용 Oracle Coherence 캐시 API의 완전한 구현.
- [couchcache](https://github.com/codingsince1985/couchcache) - Couchbase 서버를 기반으로 하는 RESTful 캐싱 마이크로서비스.
- [easycache](https://github.com/hugocarreira/easycache) - Golang에서 인메모리 캐시(TTL/FIFO/LRU/LFU)를 사용하는 간단한 방법.
- [EchoVault](https://github.com/EchoVault/EchoVault) - Redis 클라이언트와 호환되는 임베드 가능한 분산 인메모리 데이터 저장소.
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - 많은 수의 항목을 위한 빠른 스레드 안전 인메모리 캐시. GC 오버헤드를 최소화합니다.
- [GCache](https://github.com/bluele/gcache) - 만료 가능한 캐시, LFU, LRU, ARC를 지원하는 캐시 라이브러리.
- [gdcache](https://github.com/ulovecode/gdcache) - Golang으로 구현된 순수 비침투적 캐시 라이브러리로, 자신만의 분산 캐시를 구현하는 데 사용할 수 있습니다.
- [go-cache](https://github.com/viney-shih/go-cache) - Cache-Aside 패턴을 채택하여 인메모리 캐시와 공유 캐시를 다루는 유연한 다계층 Go 캐싱 라이브러리.
- [go-freelru](https://github.com/elastic/go-freelru) 선택적 잠금, 샤딩, 축출, 만료를 지원하는, GC 부담이 없고 빠른 제네릭 LRU 해시맵 라이브러리.
- [go-gcache](https://github.com/szyhf/go-gcache) - `GCache`의 제네릭 버전으로, 만료 가능한 캐시, LFU, LRU, ARC를 지원합니다.
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - 빠른 인메모리 키:값 저장소/캐시 라이브러리. 포인터 캐시.
- [gocache](https://github.com/eko/gocache) - 여러 저장소(memory, memcache, redis, ...)와 체인, 로더블, 메트릭 캐시 등을 갖춘 완전한 Go 캐시 라이브러리.
- [gocache](https://github.com/yuseferi/gocache) - 고성능과 자동 정리 기능을 갖춘, 데이터 경쟁이 없는 Go 캐시 라이브러리
- [groupcache](https://github.com/golang/groupcache) - Groupcache는 많은 경우 memcached를 대체하기 위한 캐싱 및 캐시 채우기 라이브러리입니다.
- [icache](https://github.com/mdaliyan/icache) - 고성능, 제네릭, 스레드 안전, 의존성 없는 캐시 패키지.
- [imcache](https://github.com/erni27/imcache) - 제네릭 인메모리 캐시 Go 라이브러리. 만료, 슬라이딩 만료, 최대 항목 수 제한, 축출 콜백, 샤딩을 지원합니다.
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - 다단계 캐싱을 지원하는 통합 Go 캐시 라이브러리.
- [nscache](https://github.com/no-src/nscache) - 여러 데이터 소스 드라이버를 지원하는 Go 캐싱 프레임워크.
- [otter](https://github.com/maypok86/otter) - Go를 위한 고성능 잠금 없는 캐시. Ristretto 등보다 몇 배나 빠릅니다.
- [pocache](https://github.com/naughtygopher/pocache) - Pocache는 선제적 낙관적 캐싱 전략에 초점을 맞춘 미니멀한 캐시 패키지입니다.
- [ristretto](https://github.com/dgraph-io/ristretto) - 메모리 한도 내에서 동작하는 고성능 Go 캐시.
- [sturdyc](https://github.com/viccon/sturdyc) - I/O 부하가 큰 애플리케이션을 견고하고 고성능으로 만들도록 설계된 고급 동시성 기능을 갖춘 캐싱 라이브러리.
- [theine](https://github.com/Yiling-J/theine-go) - 선제적 TTL 만료와 제네릭을 지원하는, 최적에 가까운 고성능 인메모리 캐시.
- [timedmap](https://github.com/zekroTJA/timedmap) - 만료되는 키-값 쌍을 가진 맵.
- [ttlcache](https://github.com/jellydator/ttlcache) - 항목 만료와 제네릭을 지원하는 인메모리 캐시.
- [ttlcache](https://github.com/cheshir/ttlcache) - 레코드마다 TTL을 지정할 수 있는 인메모리 키-값 저장소.

### Go로 구현된 데이터베이스

- [badger](https://github.com/dgraph-io/badger) - Go로 작성된 빠른 키-값 저장소.
- [bbolt](https://github.com/etcd-io/bbolt) - Go를 위한 임베디드 키/값 데이터베이스.
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask는 순수 Go로 작성된 임베드 가능하고 영속적이며 빠른 키-값(KV) 데이터베이스로, bitcask 온디스크 레이아웃(LSM+WAL) 덕분에 예측 가능한 읽기/쓰기 성능, 낮은 지연 시간, 높은 처리량을 제공합니다.
- [buntdb](https://github.com/tidwall/buntdb) - 사용자 정의 인덱싱과 공간 데이터를 지원하는 Go용 빠르고 임베드 가능한 인메모리 키/값 데이터베이스.
- [clover](https://github.com/ostafen/clover) - 순수 Golang으로 작성된 경량 문서 지향 NoSQL 데이터베이스.
- [cockroach](https://github.com/cockroachdb/cockroach) - 확장 가능하고 지리적으로 복제되는 트랜잭션 데이터 저장소.
- [Coffer](https://github.com/claygod/coffer) - 트랜잭션을 지원하는 간단한 ACID 키-값 데이터베이스.
- [column](https://github.com/kelindar/column) - 비트맵 인덱싱과 트랜잭션을 지원하는 고성능 컬럼형 임베드 가능 인메모리 저장소.
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL은 블록체인 위의 SQL 데이터베이스입니다.
- [Databunker](https://github.com/paranoidguy/databunker) - GDPR 및 CCPA를 준수하도록 구축된 개인 식별 정보(PII) 저장 서비스.
- [dgraph](https://github.com/dgraph-io/dgraph) - 확장 가능하고 분산형이며 지연 시간이 짧고 처리량이 높은 그래프 데이터베이스.
- [DiceDB](https://github.com/DiceDB/dice) - 현대 하드웨어에 최적화된 오픈 소스의 빠른 반응형 인메모리 데이터베이스. 처리량이 더 높고 중앙값 지연 시간이 더 낮아 현대적인 워크로드에 이상적입니다.
- [diskv](https://github.com/peterbourgon/diskv) - 자체 개발한 디스크 기반 키-값 저장소.
- [dolt](https://github.com/dolthub/dolt) - Dolt – 데이터를 위한 Git입니다.
- [eliasdb](https://github.com/krotik/eliasdb) - REST API, 구문 검색, SQL 유사 쿼리 언어를 갖춘 의존성 없는 트랜잭션 그래프 데이터베이스.
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - 순수 Go로 작성된 MongoDB 유사 임베디드 데이터베이스. 인덱싱과 복잡한 쿼리를 지원합니다.
- [go-sqlite](https://github.com/glebarez/go-sqlite) – CGO 없이 순수 Golang으로 구현된 SQLite 드라이버.
- [godis](https://github.com/hdt3213/godis) - Golang으로 구현한 고성능 Redis 서버 및 클러스터.
- [goleveldb](https://github.com/syndtr/goleveldb) - [LevelDB](https://github.com/google/leveldb) 키/값 데이터베이스의 Go 구현.
- [hare](https://github.com/jameycribbs/hare) - 각 테이블을 줄 단위로 구분된 JSON 텍스트 파일로 저장하는 간단한 데이터베이스 관리 시스템.
- [immudb](https://github.com/codenotary/immudb) - immudb는 Go로 작성된, 시스템과 애플리케이션을 위한 경량 고속 불변 데이터베이스입니다.
- [influxdb](https://github.com/influxdb/influxdb) - 메트릭, 이벤트, 실시간 분석을 위한 확장 가능한 데이터 저장소.
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb는 LevelDB를 기반으로 한 Redis 같은 고성능 NoSQL입니다.
- [levigo](https://github.com/jmhodges/levigo) - Levigo는 LevelDB용 Go 래퍼입니다.
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB는 학습용으로 만든, 1000줄 미만의 코드로 이루어진 간단한 데이터베이스입니다.
- [LinDB](https://github.com/lindb/lindb) - LinDB는 확장 가능하고 고성능이며 고가용성을 갖춘 분산 시계열 데이터베이스입니다.
- [lotusdb](https://github.com/flower-corp/lotusdb) - LSM 및 B+트리와 호환되는 빠른 k/v 데이터베이스.
- [lynxdb](https://github.com/lynxbase/lynxdb) - SPL에서 영감을 받은 파이프 스타일 쿼리 언어를 갖춘 경량 컬럼형 로그 분석 데이터베이스.
- [MemHop](https://github.com/qyiun666/MemHop) - AI 에이전트를 위한 임베디드 인지 메모리 데이터베이스. 6계층 아키텍처(L0-L5), Dream 통합 파이프라인, 3채널 RRF 검색(BM25 + f16 벡터 + 엔티티), 단일 .meh 파일, 순수 Go, 별도 인프라 불필요.
- [Milvus](https://github.com/milvus-io/milvus) - Milvus는 임베딩 관리, 분석, 검색을 위한 벡터 데이터베이스입니다.
- [minisql](https://github.com/RichardKnop/minisql) - 임베디드 단일 파일 SQL 데이터베이스.
- [moss](https://github.com/couchbase/moss) - Moss는 100% Go로 작성된 간단한 LSM 키-값 스토리지 엔진입니다.
- [nanotdb](https://github.com/aymanhs/nanotdb) - 저전력 하드웨어에 최적화된 가볍고 의존성 없는 추가 전용 시계열 데이터베이스 및 대시보드.
- [NoKV](https://github.com/feichai0017/NoKV) - 분산 파일 시스템, 객체 스토리지, AI 데이터셋 워크로드를 위한 네이티브 메타데이터 서비스.
- [NornicDB](https://github.com/orneryd/NornicDB) - AI 시스템을 위한 저지연 graph-rag 검색에 초점을 맞춘 고성능 그래프 + 벡터 데이터베이스(Neo4j 및 qDrant 호환).
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb는 순수 Go로 작성된 간단하고 빠르며 임베드 가능한 영속 키/값 저장소입니다. 완전히 직렬화 가능한 트랜잭션과 리스트, 집합, 정렬된 집합 같은 다양한 자료 구조를 지원합니다.
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Go API를 제공하는 고성능 임베디드 객체 데이터베이스(NoSQL).
- [pebble](https://github.com/cockroachdb/pebble) - RocksDB/LevelDB에서 영감을 받은 Go 키-값 데이터베이스.
- [piladb](https://github.com/fern4lvarez/piladb) - 스택 자료 구조를 기반으로 한 경량 RESTful 데이터베이스 엔진.
- [pogreb](https://github.com/akrylysov/pogreb) - 읽기 위주 워크로드를 위한 임베디드 키-값 저장소.
- [prometheus](https://github.com/prometheus/prometheus) - 모니터링 시스템 및 시계열 데이터베이스.
- [pudge](https://github.com/recoilme/pudge) - Go 표준 라이브러리로 작성된 빠르고 간단한 키/값 저장소.
- [redka](https://github.com/nalgeon/redka) - SQLite로 다시 구현한 Redis.
- [rosedb](https://github.com/roseduan/rosedb) - LSM+WAL 기반의 임베디드 k-v 데이터베이스로, string, list, hash, set, zset을 지원합니다.
- [rotom](https://github.com/xgzlucario/rotom) - Golang으로 만든 작은 Redis 서버로, RESP 프로토콜과 호환됩니다.
- [rqlite](https://github.com/rqlite/rqlite) - SQLite를 기반으로 구축된 경량 분산 관계형 데이터베이스.
- [tempdb](https://github.com/rafaeljesus/tempdb) - 임시 항목을 위한 키-값 저장소.
- [tidb](https://github.com/pingcap/tidb) - TiDB는 분산 SQL 데이터베이스입니다. Google F1의 설계에서 영감을 받았습니다.
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Golang으로 구동되는 NoSQL 데이터베이스.
- [unitdb](https://github.com/unit-io/unitdb) - IoT 및 실시간 메시징 애플리케이션을 위한 빠른 시계열 데이터베이스. github.com/unit-io/unitd 애플리케이션을 사용해 TCP 또는 WebSocket 위의 pubsub으로 unitdb에 접근할 수 있습니다.
- [Vasto](https://github.com/chrislusf/vasto) - 분산형 고성능 키-값 저장소. 디스크 기반, 최종 일관성, 고가용성(HA)을 갖추었으며 서비스 중단 없이 확장하거나 축소할 수 있습니다.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 빠르고 자원 효율적이며 확장 가능한 오픈 소스 시계열 데이터베이스. Prometheus의 장기 원격 저장소로 사용할 수 있습니다. PromQL을 지원합니다.
- 
### 데이터베이스 스키마 마이그레이션

- [atlas](https://github.com/ariga/atlas) - 데이터베이스 툴킷. 기업이 데이터를 더 잘 다룰 수 있도록 설계된 CLI입니다.
- [avro](https://github.com/khezen/avro) - SQL 스키마를 찾아 AVRO 스키마로 변환합니다. SQL 레코드를 조회해 AVRO 바이트로 변환합니다.
- [bytebase](https://github.com/bytebase/bytebase) - DevOps 팀을 위한 안전한 데이터베이스 스키마 변경 및 버전 관리.
- [darwin](https://github.com/GuiaBolso/darwin) - Go용 데이터베이스 스키마 진화 라이브러리.
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - PostgreSQL, MySQL, ClickHouse, Tarantool, Apache Iceberg를 지원하는 버전 관리형 데이터베이스 스키마 마이그레이션 CLI.
- [dbmate](https://github.com/amacneil/dbmate) - 가볍고 프레임워크에 구애받지 않는 데이터베이스 마이그레이션 도구.
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Golang의 훌륭한 내장 database/sql 라이브러리를 위한 Django 스타일 픽스처.
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - go-pg 마이그레이션 관리를 위한 CLI 친화적인 패키지.
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - go-pg/pg로 마이그레이션을 작성하도록 돕는 Go 패키지.
- [goavro](https://github.com/linkedin/goavro) - Avro 데이터를 인코딩하고 디코딩하는 Go 패키지.
- [godfish](https://github.com/rafaelespinoza/godfish) - 네이티브 쿼리 언어로 동작하는 데이터베이스 마이그레이션 관리자. cassandra, mysql, postgres, sqlite3를 지원합니다.
- [goose](https://github.com/pressly/goose) - 데이터베이스 마이그레이션 도구. 점진적인 SQL 또는 Go 스크립트를 작성하여 데이터베이스의 변화를 관리할 수 있습니다.
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Gorm ORM을 위한 간단한 데이터베이스 시더.
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Gorm ORM을 위한 데이터베이스 스키마 마이그레이션 헬퍼.
- [libschema](https://github.com/muir/libschema) - 각 라이브러리에서 마이그레이션을 따로 정의합니다. 오픈 소스 라이브러리를 위한 마이그레이션. MySQL 및 PostgreSQL 지원.
- [migrate](https://github.com/golang-migrate/migrate) - 데이터베이스 마이그레이션. CLI 및 Golang 라이브러리.
- [migrator](https://github.com/lopezator/migrator) - 아주 간단한 Go 데이터베이스 마이그레이션 라이브러리.
- [migrator](https://github.com/larapulse/migrator) - 기능에 맞춰 마이그레이션을 실행하고 직관적인 Go 코드로 데이터베이스 스키마 업데이트를 관리하도록 설계된 MySQL 데이터베이스 마이그레이터.
- [schema](https://github.com/adlio/schema) - database/sql 호환 데이터베이스용 스키마 마이그레이션을 Go 바이너리 안에 임베드하는 라이브러리.
- [skeema](https://github.com/skeema/skeema) - 샤딩과 외부 온라인 스키마 변경 도구를 지원하는 MySQL용 순수 SQL 스키마 관리 시스템.
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - MySQL, PostgreSQL, SQLite를 위한 데이터베이스 마이그레이션, 생성, ORM 등...
- [sql-migrate](https://github.com/rubenv/sql-migrate) - 데이터베이스 마이그레이션 도구. go-bindata를 사용해 마이그레이션을 애플리케이션에 임베드할 수 있습니다.
- [sqlize](https://github.com/sunary/sqlize) - 데이터베이스 마이그레이션 생성기. 모델과 기존 SQL을 비교하여 SQL 마이그레이션을 생성할 수 있습니다.

### 데이터베이스 도구

- [chproxy](https://github.com/Vertamedia/chproxy) - ClickHouse 데이터베이스용 HTTP 프록시.
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - 작은 삽입 요청을 모아 ClickHouse 서버에 큰 요청으로 보냅니다.
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - 타입이 지정된 AST를 생성하는 ClickHouse 방언 SQL 파서로, 순회 헬퍼, 왕복 포매팅, CLI를 제공합니다.
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - ACL, 로그, 공유 링크와 함께 프로덕션에서 SQL을 실행합니다.
- [dbbench](https://github.com/sj14/dbbench) - 여러 데이터베이스와 스크립트를 지원하는 데이터베이스 벤치마킹 도구.
- [dg](https://github.com/codingconcepts/dg) - 생성된 관계형 데이터로부터 CSV 파일을 만들어 내는 빠른 데이터 생성기.
- [filesql](https://github.com/nao1215/filesql) - 인메모리 SQLite를 기반으로 database/sql API를 통해 CSV, TSV, LTSV, JSON, JSONL, Parquet, Excel, ACH, Fedwire 파일을 SQL로 조회합니다.
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - 데이터 기반 애플리케이션을 구축하기 위한 클라우드 네이티브 데이터베이스 게이트웨이 및 프레임워크. 데이터베이스를 위한 API 게이트웨이와 같습니다.
- [go-mysql](https://github.com/siddontang/go-mysql) - MySQL 프로토콜과 복제를 처리하기 위한 Go 도구 모음.
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - AWS Lambda를 사용해 일별, 월별, 연별 순환 방식으로 PostgreSQL을 S3에 서버리스 백업합니다.
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - GORM으로 관리되는 데이터베이스를 위한 멀티 테넌시 지원.
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - 다중 방언 지원과 WASM 플레이그라운드를 갖춘 고성능 SQL 파서, 포매터, 린터, 보안 스캐너.
- [hasql](https://golang.yandex/hasql) - 다중 호스트로 설치된 SQL 데이터베이스에 접근하기 위한 라이브러리.
- [octillery](https://github.com/knocknote/octillery) - 데이터베이스 샤딩을 위한 Go 패키지(모든 ORM 또는 순수 SQL 지원).
- [onedump](https://github.com/liweiyi88/onedump) - 하나의 명령과 설정으로 여러 드라이버의 데이터베이스를 여러 대상으로 백업합니다.
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL을 위한 고급 스케줄링.
- [pgrwl](https://github.com/pgrwl/pgrwl) - PostgreSQL을 위한 클라우드 네이티브 연속 백업.
- [pgwd](https://github.com/hrodrig/pgwd) - PostgreSQL 연결 수(전체, 활성, 유휴, 오래된 연결)를 모니터링하고 임계값을 초과하면 Slack 및/또는 Loki로 알리는 CLI. Kubernetes(kubectl port-forward)와 알림 내 선택적 실행 컨텍스트를 지원합니다.
- [pgweb](https://github.com/sosedoff/pgweb) - 웹 기반 PostgreSQL 데이터베이스 브라우저.
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - pgcli에서 영감을 받아 Go로 작성된 PostgreSQL CLI 클라이언트.
- [prep](https://github.com/hexdigest/prep) - 코드를 변경하지 않고 준비된(prepared) SQL 문을 사용합니다.
- [pREST](https://github.com/prest/prest) - 기존 또는 새로운 모든 Postgres 애플리케이션에서 개발을 단순화하고 가속합니다. ⚡ 즉각적이고 실시간이며 고성능입니다.
- [rdb](https://github.com/HDT3213/rdb) - 2차 개발과 메모리 분석을 위한 Redis RDB 파일 파서.
- [rwdb](https://github.com/andizzle/rwdb) - rwdb는 다중 데이터베이스 서버 구성을 위한 읽기 복제본 기능을 제공합니다.
- [sqly](https://github.com/nao1215/sqly) - 인메모리 SQLite를 기반으로 대화형 셸에서 CSV, TSV, LTSV, JSON, Parquet, Excel 파일에 SQL을 실행합니다.
- [vitess](https://github.com/youtube/vitess) - vitess는 대규모 웹 서비스를 위한 MySQL 데이터베이스 확장을 쉽게 해 주는 서버와 도구를 제공합니다.
- [wescale](https://github.com/wesql/wescale) - WeScale은 애플리케이션의 확장성, 성능, 보안, 복원력을 향상하도록 설계된 데이터베이스 프록시입니다.
- [xsql](https://github.com/zx06/xsql) - 읽기 전용 보호와 구조화된 JSON 출력을 갖춘 AI 우선 크로스 데이터베이스 CLI 도구.

### SQL 쿼리 빌더

_SQL을 작성하고 사용하기 위한 라이브러리._

- [bqb](https://github.com/nullism/bqb) - 가볍고 배우기 쉬운 쿼리 빌더.
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - PostgreSQL용 Go 데이터베이스 쿼리 빌더 라이브러리.
- [builq](https://github.com/cristalhq/builq) - Go에서 SQL 쿼리를 쉽게 작성합니다.
- [dba](https://github.com/kran/dba) - 직접 작성한 SQL에 동적 조건, 방언을 인식하는 플레이스홀더, 불변 체이닝을 더해 주는 SQL 쿼리 빌더.
- [dbq](https://github.com/rocketlaunchr/dbq) - 보일러플레이트가 전혀 없는 Go용 데이터베이스 작업.
- [Dotsql](https://github.com/gchaincl/dotsql) - SQL 파일을 한곳에 모아 두고 쉽게 사용할 수 있도록 도와주는 Go 라이브러리.
- [gendry](https://github.com/didi/gendry) - 비침투적 SQL 빌더이자 강력한 데이터 바인더.
- [godbal](https://github.com/xujiajun/godbal) - Go용 데이터베이스 추상화 계층(dbal). SQL 빌더를 지원하며 결과를 쉽게 얻을 수 있습니다.
- [goqu](https://github.com/doug-martin/goqu) - 관용적인 SQL 빌더 및 쿼리 라이브러리.
- [gosql](https://github.com/twharmon/gosql) - null 값을 더 잘 지원하는 SQL 쿼리 빌더.
- [Hotcoal](https://github.com/motrboat/hotcoal) - 직접 작성한 SQL을 인젝션으로부터 보호합니다.
- [igor](https://github.com/galeone/igor) - 고급 기능을 지원하고 gorm과 유사한 문법을 사용하는 PostgreSQL용 추상화 계층.
- [jet](https://github.com/go-jet/jet) - Go에서 타입 안전한 SQL 쿼리를 작성하기 위한 프레임워크로, 데이터베이스 쿼리 결과를 원하는 임의의 객체 구조로 쉽게 변환할 수 있습니다.
- [obreron](https://github.com/profe-ajedrez/obreron) - SQL 작성이라는 한 가지 일만 하는 빠르고 가벼운 SQL 빌더.
- [ormlite](https://github.com/pupizoid/ormlite) - sqlite 데이터베이스를 위한 몇 가지 ORM 유사 기능과 헬퍼를 담은 경량 패키지.
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - 강력한 데이터 조회 메서드와 DB에 구애받지 않는 쿼리 작성 기능.
- [patcher](https://github.com/Jacobbrewer1/patcher) - 구조체로부터 SQL 쿼리를 자동으로 생성하는 강력한 SQL 쿼리 빌더.
- [qrafter](https://github.com/SennovE/qrafter) - 방언을 인식하는 렌더링, 스키마 인트로스펙션, 마이그레이션 생성을 갖춘 타입 안전 SQL 쿼리 빌더.
- [qry](https://github.com/HnH/qry) - 원시 SQL 쿼리가 담긴 파일로부터 상수를 생성하는 도구.
- [relica](https://github.com/coregx/relica) - 프로덕션 의존성이 없고 LRU 구문 캐시와 일괄 작업을 갖추었으며 JOIN, 서브쿼리, CTE, 윈도 함수를 지원하는 타입 안전 데이터베이스 쿼리 빌더.
- [sg](https://github.com/go-the-way/sg) - Go로 작성된, 표준 SQL을 생성하는 SQL 생성기(CRUD 지원).
- [sq](https://github.com/bokwoon95/go-structured-query) - Go를 위한 타입 안전 SQL 빌더 및 구조체 매퍼.
- [sqlc](https://github.com/kyleconroy/sqlc) - SQL로부터 타입 안전한 코드를 생성합니다.
- [sqlcredo](https://github.com/Klojer/sqlcredo) - 페이지네이션, 트랜잭션, 디버깅, 사용자 정의 원시 SQL 확장을 지원하는 타입 안전 제네릭 SQL CRUD 작업 패키지.
- [sqlf](https://github.com/leporo/sqlf) - 빠른 SQL 쿼리 빌더.
- [sqlh](https://github.com/kirill-scherba/sqlh) - 구조체 태그와 Go 제네릭을 활용한 보일러플레이트 없는 SQL 헬퍼(CRUD, UPSERT, JOIN, 벤치마크).
- [sqlingo](https://github.com/lqs/sqlingo) - Go에서 SQL을 작성하기 위한 경량 DSL.
- [sqrl](https://github.com/elgris/sqrl) - 성능을 개선한 Squirrel 포크인 SQL 쿼리 빌더.
- [Squalus](https://gitlab.com/qosenergy/squalus) - 쿼리 수행을 더 쉽게 해 주는 Go SQL 패키지 위의 얇은 계층.
- [Squirrel](https://github.com/Masterminds/squirrel) - SQL 쿼리 작성을 도와주는 Go 라이브러리.
- [xo](https://github.com/knq/xo) - 기존 스키마 정의나 사용자 정의 쿼리를 바탕으로 데이터베이스용 관용적인 Go 코드를 생성하며 PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server를 지원합니다.

**[⬆ 맨 위로](#contents)**

## 데이터베이스 드라이버

### 다중 백엔드 인터페이스

- [cayley](https://github.com/google/cayley) - 여러 백엔드를 지원하는 그래프 데이터베이스.
- [dsc](https://github.com/viant/dsc) - SQL, NoSQL, 구조화된 파일을 위한 데이터 저장소 연결.
- [dynamo](https://github.com/fogfish/dynamo) - 대수적 데이터 타입과 링크드 데이터 타입을 AWS 스토리지 서비스(AWS DynamoDB 및 AWS S3)에 저장하기 위한 간단한 키-값 추상화.
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - 여러 어댑터(sql, sqlx, gorm, mongo, ...)를 갖추고 트랜잭션 경계를 제어하는 트랜잭션 관리자.
- [gokv](https://github.com/philippgille/gokv) - Go를 위한 간단한 키-값 저장소 추상화 및 구현(Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB 등 다수).
- [transactor](https://github.com/metalfm/transactor) - database/sql, sqlx, pgx용 어댑터를 갖춘 타입 안전 트랜잭션 경계 추상화.

### 관계형 데이터베이스 드라이버

- [avatica](https://github.com/apache/calcite-avatica-go) - database/sql용 Apache Avatica/Phoenix SQL 드라이버.
- [bgc](https://github.com/viant/bgc) - Go를 위한 BigQuery 데이터 저장소 연결.
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Go용 Firebird RDBMS SQL 드라이버.
- [go-adodb](https://github.com/mattn/go-adodb) - database/sql을 사용하는 Go용 Microsoft ActiveX Object DataBase 드라이버.
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Go용 Microsoft MSSQL 드라이버.
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - SQL Server, Azure SQL, Azure Synapse, SQL database in Fabric, Fabric Data Warehouse를 위한 Microsoft 공식 Go 드라이버. Azure AD, Always Encrypted, 대량 작업을 지원합니다.
- [go-oci8](https://github.com/mattn/go-oci8) - database/sql을 사용하는 Go용 Oracle 드라이버.
- [go-rqlite](https://github.com/rqlite/gorqlite) - rqlite API를 다루기 위한 사용하기 쉬운 추상화를 제공하는 rqlite용 Go 클라이언트.
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Go용 MySQL 드라이버.
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - database/sql을 사용하는 Go용 SQLite3 드라이버.
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - database/sql 드라이버와 호환되는 Go 모듈입니다. 애플리케이션에 SQLite를 임베드할 수 있고, C API에 직접 접근할 수 있으며, SQLite VFS를 지원하고, GORM 드라이버도 포함합니다.
- [godror](https://github.com/godror/godror) - ODPI-C 드라이버를 사용하는 Go용 Oracle 드라이버.
- [gofreetds](https://github.com/minus5/gofreetds) - Microsoft MSSQL 드라이버. [FreeTDS](https://www.freetds.org)를 감싼 Go 래퍼입니다.
- [KSQL](https://github.com/VinGarcia/ksql) - 간단하고 강력한 Golang SQL 라이브러리.
- [pgx](https://github.com/jackc/pgx) - database/sql이 제공하는 것 이상의 기능을 지원하는 PostgreSQL 드라이버.
- [pig](https://github.com/alexeyco/pig) - 쿼리를 실행하고 결과를 쉽게 [스캔](https://github.com/georgysavva/scany)하기 위한 간단한 [pgx](https://github.com/jackc/pgx) 래퍼.
- [pq](https://github.com/lib/pq) - database/sql용 순수 Go Postgres 드라이버.
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - 순수 Go로 사용하는 SQLite.
- [sqlhooks](https://github.com/qustavo/sqlhooks) - 모든 database/sql 드라이버에 훅을 연결합니다.
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - sqlite 패키지는 C SQLite3 라이브러리를 CGo 없이 포팅한 sql/database 드라이버입니다.
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Go용 SurrealDB 드라이버.
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - YDB(Yandex Database)용 네이티브 및 database/sql 드라이버.

### NoSQL 데이터베이스 드라이버

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Go 언어로 작성된 Aerospike 클라이언트.
- [arangolite](https://github.com/solher/arangolite) - ArangoDB용 경량 Golang 드라이버.
- [asc](https://github.com/viant/asc) - Go를 위한 Aerospike 데이터 저장소 연결.
- [forestdb](https://github.com/couchbase/goforestdb) - ForestDB용 Go 바인딩.
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Go로 작성된 Couchbase 클라이언트.
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - 공식 드라이버를 기반으로 한 Go Mongo 라이브러리로, 간소화된 문서 작업, 구조체와 컬렉션의 제네릭 바인딩, 내장 CRUD, 집계, 자동 필드 업데이트, 구조체 유효성 검사, 훅, 플러그인 기반 프로그래밍을 제공합니다.
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Pilosa용 Go 클라이언트 라이브러리.
- [go-rejson](https://github.com/nitishm/go-rejson) - Redigo Golang 클라이언트를 사용하는 redislabs ReJSON 모듈용 Golang 클라이언트. 구조체를 JSON 객체로 redis에 쉽게 저장하고 조작할 수 있습니다.
- [gocb](https://github.com/couchbase/gocb) - 공식 Couchbase Go SDK.
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Azure Cosmos DB용 REST 클라이언트 및 표준 `database/sql` 드라이버.
- [gocql](https://gocql.github.io) - Apache Cassandra용 Go 언어 드라이버.
- [godis](https://github.com/piaohao/godis) - jedis에서 영감을 받아 Golang으로 구현한 redis 클라이언트.
- [godscache](https://github.com/defcronyke/godscache) - memcached를 사용한 캐싱을 추가하는 Google Cloud Platform Go Datastore 패키지용 래퍼.
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Go 프로그래밍 언어용 memcache 클라이언트 라이브러리.
- [gomemcached](https://github.com/aliexpressru/gomemcached) - 일관된 해싱을 이용한 샤딩과 SASL을 지원하는 Go용 바이너리 Memcached 클라이언트.
- [gorethink](https://github.com/dancannon/gorethink) - RethinkDB용 Go 언어 드라이버.
- [goriak](https://github.com/zegl/goriak) - Riak KV용 Go 언어 드라이버.
- [Kivik](https://github.com/go-kivik/kivik) - Kivik은 CouchDB, PouchDB 및 유사한 데이터베이스를 위한 공통 Go 및 GopherJS 클라이언트 라이브러리를 제공합니다.
- [mgm](https://github.com/kamva/mgm) - Go를 위한 MongoDB 모델 기반 ODM(공식 MongoDB 드라이버 기반).
- [mgo](https://github.com/globalsign/mgo) - (유지 관리 중단) 표준 Go 관용구를 따르는 매우 간단한 API 아래에 풍부하고 잘 검증된 기능을 구현한 Go 언어용 MongoDB 드라이버.
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Go 언어용 공식 MongoDB 드라이버.
- [neo4j](https://github.com/cihangir/neo4j) - Golang용 Neo4j REST API 바인딩.
- [neoism](https://github.com/jmcvetta/neoism) - Golang용 Neo4j 클라이언트.
- [qmgo](https://github.com/qiniu/qmgo) - Go용 MongoDB 드라이버. 공식 MongoDB 드라이버를 기반으로 하지만 Mgo처럼 더 쉽게 사용할 수 있습니다.
- [redeo](https://github.com/bsm/redeo) - Redis 프로토콜 호환 TCP 서버/서비스.
- [redigo](https://github.com/gomodule/redigo) - Redigo는 Redis 데이터베이스용 Go 클라이언트입니다.
- [redis](https://github.com/redis/go-redis) - Golang용 Redis 클라이언트.
- [rueidis](http://github.com/rueian/rueidis) - 자동 파이프라이닝과 서버 지원 클라이언트 측 캐싱을 갖춘 빠른 Redis RESP3 클라이언트.
- [xredis](https://github.com/shomali11/xredis) - 타입 안전하고 사용자 정의 가능하며 깔끔하고 사용하기 쉬운 Redis 클라이언트.

### 검색 및 분석 데이터베이스

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - `database/sql`과 호환되는 Go용 ClickHouse SQL 클라이언트.
- [effdsl](https://github.com/sdqri/effdsl) - Go용 Elasticsearch 쿼리 빌더.
- [elastic](https://github.com/olivere/elastic) - Go용 Elasticsearch 클라이언트.
- [elasticsql](https://github.com/cch123/elasticsql) - Go에서 SQL을 Elasticsearch DSL로 변환합니다.
- [elastigo](https://github.com/mattbaird/elastigo) - Elasticsearch 클라이언트 라이브러리.
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Go용 공식 Elasticsearch 클라이언트.
- [goes](https://github.com/OwnLocal/goes) - Elasticsearch와 상호 작용하기 위한 라이브러리.
- [skizze](https://github.com/skizzehq/skizze) - 확률적 자료 구조 서비스 및 저장소.
- [zoekt](https://github.com/sourcegraph/zoekt) - 트라이그램 기반의 빠른 코드 검색.

**[⬆ 맨 위로](#contents)**

## 날짜 및 시간

_날짜와 시간을 다루기 위한 라이브러리._

- [approx](https://github.com/goschtalt/approx) - 일, 주, 년 단위 기간의 파싱/출력을 지원하는 Duration 확장.
- [carbon](https://github.com/dromara/carbon) - Golang을 위한 간단하고 의미론적이며 개발자 친화적인 시간 패키지.
- [carbon](https://github.com/uniplaces/carbon) - PHP Carbon 라이브러리에서 포팅한, 많은 유틸리티 메서드를 갖춘 간단한 Time 확장.
- [cronrange](https://github.com/1set/cronrange) - Cron 스타일 시간 범위 표현식을 파싱하고 주어진 시간이 범위 안에 있는지 확인합니다.
- [date](https://github.com/rickb777/date) - 날짜, 날짜 범위, 시간 간격, 기간, 하루 중 시각을 다룰 수 있도록 Time을 보강합니다.
- [dateparse](https://github.com/araddon/dateparse) - 형식을 미리 알지 못해도 날짜를 파싱합니다.
- [durafmt](https://github.com/hako/durafmt) - Go용 시간 간격 포매팅 라이브러리.
- [feiertage](https://github.com/wlbr/feiertage) - 독일 각 주(Bundesländer)별 특수 공휴일을 포함하여 독일의 공휴일을 계산하는 함수 모음. 부활절, 오순절, 추수감사절 등...
- [go-anytime](https://github.com/ijt/go-anytime) - 형식을 미리 알지 못해도 "next dec 22nd at 3pm" 같은 날짜/시간과 "from today until next thursday" 같은 범위를 파싱합니다.
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - date-fns에서 영감을 받아 140개 이상의 순수하고 불변인 함수를 제공하는 Go용 종합 날짜 유틸리티 라이브러리.
- [go-datebin](https://github.com/deatil/go-datebin) - 간단한 날짜/시간 파싱 패키지.
- [go-faketime](https://github.com/harkaitz/go-faketime) - faketime(1) 유틸리티를 따르는 간단한 `time.Now()`.
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - 페르시아력(태양 히즈라력)의 Go(golang) 구현.
- [go-str2duration](https://github.com/xhit/go-str2duration) - 문자열을 기간(duration)으로 변환합니다. time.Duration이 반환하는 문자열 등을 지원합니다.
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - 주어진 위치의 일출 및 일몰 시각을 계산합니다.
- [go-week](https://github.com/stoewer/go-week) - ISO8601 주 단위 날짜를 다루기 위한 효율적인 패키지.
- [gostradamus](https://github.com/bykof/gostradamus) - 날짜를 다루기 위한 Go 패키지.
- [iso8601](https://github.com/relvacode/iso8601) - 정규식 없이 ISO8601 날짜/시간을 효율적으로 파싱합니다.
- [kair](https://github.com/GuilhermeCaruso/kair) - 날짜 및 시간 - Golang 포매팅 라이브러리.
- [now](https://github.com/jinzhu/now) - Now는 Golang용 시간 툴킷입니다.
- [strftime](https://github.com/awoodbeck/strftime) - C99 호환 strftime 포매터.
- [timespan](https://github.com/SaidinWoT/timespan) - 시작 시각과 기간으로 정의되는 시간 구간을 다루기 위한 라이브러리.
- [timeutil](https://github.com/leekchan/timeutil) - Golang time 패키지에 대한 유용한 확장(Timedelta, Strftime, ...).
- [tuesday](https://github.com/osteele/tuesday) - Ruby 호환 Strftime 함수.

**[⬆ 맨 위로](#contents)**

## 분산 시스템

_분산 시스템 구축을 돕는 패키지._

- [arpc](https://github.com/lesismal/arpc) - 더 효과적인 네트워크 통신. 양방향 호출, 알림, 브로드캐스트를 지원합니다.
- [bedrock](https://github.com/z5labs/bedrock) - Go로 서비스와 특정 용도에 맞춘 프레임워크를 빠르게 개발하기 위한 최소한의 모듈식, 조합 가능한 기반을 제공합니다.
- [capillaries](https://github.com/capillariesio/capillaries) - 분산 배치 데이터 처리 프레임워크.
- [circuit](https://github.com/schigh/circuit) - 확률적 스로틀링을 통한 점진적 복구를 지원하는 서킷 브레이커.
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Go를 위한 고성능 분산 커맨드 패턴 라이브러리.
- [committer](https://github.com/vadiminshakov/committer) - 분산 트랜잭션 관리 시스템(2PC/3PC 구현).
- [consistent](https://github.com/buraksezer/consistent) - 부하 상한이 있는 일관된 해싱.
- [consistenthash](https://github.com/mbrostami/consistenthash) - 복제본 수를 설정할 수 있는 일관된 해싱.
- [dht](https://github.com/anacrolix/dht) - BitTorrent Kademlia DHT 구현.
- [digota](https://github.com/digota/digota) - gRPC 전자상거래 마이크로서비스.
- [dot](https://github.com/dotchain/dot/) - 운영 변환(OT)을 사용한 분산 동기화.
- [doublejump](https://github.com/edwingeng/doublejump) - Google의 점프 일관된 해시를 개선한 버전.
- [dragonboat](https://github.com/lni/dragonboat) - Go로 작성된 기능이 완전하고 고성능인 다중 그룹 Raft 라이브러리.
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - P2P 기술을 기반으로 효율적이고 안정적이며 안전한 파일 배포와 이미지 가속을 제공하여 클라우드 네이티브 아키텍처의 모범 사례이자 표준 솔루션이 되고자 합니다.
- [drmaa](https://github.com/dgruber/drmaa) - DRMAA 표준을 기반으로 한 클러스터 스케줄러용 작업 제출 라이브러리.
- [dynamolock](https://cirello.io/dynamolock) - DynamoDB 기반 분산 잠금 구현.
- [dynatomic](https://github.com/tylfin/dynatomic) - DynamoDB를 원자적 카운터로 사용하기 위한 라이브러리.
- [emitter-io](https://github.com/emitter-io/emitter) - MQTT, WebSocket, 그리고 애정으로 만든 고성능, 분산형, 안전하고 지연 시간이 짧은 발행-구독 플랫폼.
- [evans](https://github.com/ktr0731/evans) - Evans: 더 표현력 있는 범용 gRPC 클라이언트.
- [failured](https://github.com/andy2046/failured) - 분산 시스템을 위한 적응형 누적(accrual) 장애 감지기.
- [flowgraph](https://github.com/vectaport/flowgraph) - 흐름 기반 프로그래밍 패키지.
- [gleam](https://github.com/chrislusf/gleam) - 순수 Go와 Luajit으로 작성된 빠르고 확장 가능한 분산 map/reduce 시스템으로, Go의 높은 동시성과 Luajit의 높은 성능을 결합했으며 단독 또는 분산 환경에서 실행됩니다.
- [glow](https://github.com/chrislusf/glow) - 사용하기 쉽고 확장 가능한 분산 빅데이터 처리, Map-Reduce, DAG 실행을 모두 순수 Go로 제공합니다.
- [gmsec](https://github.com/gmsec/micro) - Go 분산 시스템 개발 프레임워크.
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - 가십 프로토콜과 OpenAPI 3.0 명세를 기반으로 한 탈중앙화 마이크로서비스 프레임워크. 로우코드와 빠른 개발에 초점을 맞춘 내장 go-doudou CLI로 생산성을 높일 수 있습니다.
- [go-eagle](https://github.com/go-eagle/eagle) - 편리한 스캐폴딩 도구를 갖춘 API 또는 마이크로서비스용 Go 프레임워크.
- [go-jump](https://github.com/dgryski/go-jump) - Google의 "Jump" 일관된 해시 함수 포트.
- [go-kit](https://github.com/go-kit/kit) - 서비스 디스커버리, 로드 밸런싱, 플러그인 방식의 전송 계층, 요청 추적 등을 지원하는 마이크로서비스 툴킷.
- [go-micro](https://github.com/micro/go-micro) - 분산 시스템 개발 프레임워크.
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - MySQL 기반 분산 잠금.
- [go-pdu](https://github.com/pdupub/go-pdu) - 탈중앙화된 신원 기반 소셜 네트워크.
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Golang 서비스를 위한 비동기 서비스 상태 검사 정의를 지원하도록 만들어진 라이브러리.
- [go-zero](https://github.com/tal-tech/go-zero) - 웹 및 RPC 프레임워크. 복원력 있는 설계로 트래픽이 많은 사이트의 안정성을 보장하기 위해 탄생했습니다. 내장된 goctl이 개발 생산성을 크게 높여 줍니다.
- [gorpc](https://github.com/valyala/gorpc) - 고부하 환경을 위한 간단하고 빠르며 확장 가능한 RPC 라이브러리.
- [grpc-go](https://github.com/grpc/grpc-go) - gRPC의 Go 언어 구현. HTTP/2 기반 RPC.
- [health](https://github.com/schigh/health) - Kubernetes 프로브를 지원하는 Go 서비스용 상태 검사기.
- [hprose](https://github.com/hprose/hprose-golang) - 매우 뛰어난 RPC 라이브러리로, 현재 25개 이상의 언어를 지원합니다.
- [jsonrpc](https://github.com/osamingo/jsonrpc) - jsonrpc 패키지는 JSON-RPC 2.0 구현을 돕습니다.
- [jsonrpc](https://github.com/ybbus/jsonrpc) - JSON-RPC 2.0 HTTP 클라이언트 구현.
- [K8gb](https://github.com/k8gb-io/k8gb) - 클라우드 네이티브 Kubernetes 글로벌 밸런서.
- [Kitex](https://github.com/cloudwego/kitex) - 개발자가 마이크로서비스를 구축하도록 돕는, 고성능에 확장성이 뛰어난 Golang RPC 프레임워크. 마이크로서비스를 개발할 때 성능과 확장성이 주요 관심사라면 Kitex가 좋은 선택이 될 수 있습니다.
- [Kratos](https://github.com/go-kratos/kratos) - 모듈식으로 설계되어 사용하기 쉬운 Go 마이크로서비스 프레임워크.
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - NATS를 위한 가볍고 장애에 강한 메시지 스트림.
- [lock](https://github.com/ubgo/lock) - 하나의 Go 인터페이스와 다섯 가지 백엔드(filelock, flock, Redis, Postgres, etcd)를 갖춘 분산 잠금 제품군 — 모든 백엔드에서 펜싱 토큰, 세마포어 모드, 관측 가능성 훅을 지원합니다.
- [lura](https://github.com/luraproject/lura) - 미들웨어를 지원하는 초고성능 API 게이트웨이 프레임워크.
- [mochi mqtt](https://github.com/mochi-co/mqtt) - IoT, 스마트홈, pubsub을 위한, 명세를 완벽히 준수하고 임베드 가능한 고성능 MQTT v5/v3 브로커.
- [NATS](https://github.com/nats-io/nats-server) - NATS는 디지털 시스템, 서비스, 장치를 위한 간단하고 안전하며 성능이 뛰어난 통신 시스템입니다.
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Golang을 위한 OpenTelemetry 컴파일 타임 계측.
- [oras](https://github.com/oras-project/oras) - 컨테이너 레지스트리의 OCI 아티팩트를 위한 CLI 및 라이브러리.
- [outbox](https://github.com/oagudo/outbox) - 특정 관계형 데이터베이스나 브로커에 종속되지 않는, Go용 트랜잭셔널 아웃박스 패턴 경량 라이브러리.
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer는 아웃박스 패턴을 구현한 Go 라이브러리입니다.
- [pglock](https://cirello.io/pglock) - PostgreSQL 기반 분산 잠금 구현.
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Protobuf 명세를 사용하는 Golang JSON-RPC 서버-클라이언트.
- [raft](https://github.com/hashicorp/raft) - HashiCorp가 만든 Raft 합의 프로토콜의 Golang 구현.
- [raft](https://github.com/etcd-io/raft) - CoreOS가 만든 Raft 합의 프로토콜의 Go 구현.
- [rain](https://github.com/cenkalti/rain) - BitTorrent 클라이언트 및 라이브러리.
- [redis-lock](https://github.com/bsm/redislock) - Redis를 사용한 간소화된 분산 잠금 구현.
- [resgate](https://resgate.io/) - 모든 클라이언트가 매끄럽게 동기화되는 REST, 실시간, RPC API를 구축하기 위한 실시간 API 게이트웨이.
- [rpcplatform](https://github.com/nexcode/rpcplatform) - 서비스 디스커버리, 로드 밸런싱 및 관련 기능을 갖춘 마이크로서비스 프레임워크.
- [rpcx](https://github.com/smallnest/rpcx) - alibaba Dubbo와 같은 분산형 플러그인 방식 RPC 서비스 프레임워크.
- [Semaphore](https://github.com/jexia/semaphore) - 직관적인 (마이크로)서비스 오케스트레이터.
- [servicepack](https://github.com/psyb0t/servicepack) - 여러 서비스를 단일 바이너리에서 로컬로 또는 여러 머신에 분산하여 동시에 실행하기 위한 프레임워크.
- [sleuth](https://github.com/ursiform/sleuth) - HTTP 서비스 간 마스터 없는 P2P 자동 검색과 RPC를 위한 라이브러리([ZeroMQ](https://github.com/zeromq/libzmq) 사용).
- [sponge](https://github.com/zhufuyi/sponge) - 자동 코드 생성, gin 및 grpc 프레임워크, 기본 개발 프레임워크를 통합한 분산 개발 프레임워크.
- [Tarmac](https://github.com/tarmac-project/tarmac) - WebAssembly로 함수, 마이크로서비스, 모놀리스를 작성하기 위한 프레임워크
- [Temporal](https://github.com/temporalio/sdk-go) - 코드를 장애에 강하고 단순하게 만들어 주는 지속 실행(durable execution) 시스템.
- [torrent](https://github.com/anacrolix/torrent) - BitTorrent 클라이언트 패키지.
- [trpc-go](https://github.com/trpc-group/trpc-go) - 플러그인 방식의 고성능 RPC 프레임워크인 tRPC의 Go 언어 구현.

**[⬆ 맨 위로](#contents)**

## 동적 DNS

_동적 DNS 레코드를 업데이트하기 위한 도구._

- [DDNS](https://github.com/skibish/ddns) - Digital Ocean Networking DNS를 백엔드로 사용하는 개인용 DDNS 클라이언트.
- [dyndns](https://gitlab.com/alcastle/dyndns) - IP 주소를 정기적으로 자동 확인하고 주소가 바뀔 때마다 Google 도메인의 (하나 또는 여러) 동적 DNS 레코드를 업데이트하는 백그라운드 Go 프로세스.
- [GoDNS](https://github.com/timothyye/godns) - Go로 작성되었으며 DNSPod와 HE.net을 지원하는 동적 DNS 클라이언트 도구.

**[⬆ 맨 위로](#contents)**

## 이메일

_이메일 작성 및 발송을 구현하는 라이브러리와 도구._

- [chasquid](https://blitiri.com.ar/p/chasquid) - Go로 작성된 SMTP 서버.
- [douceur](https://github.com/aymerick/douceur) - HTML 이메일을 위한 CSS 인라이너.
- [email](https://github.com/jordan-wright/email) - Go를 위한 견고하고 유연한 이메일 라이브러리.
- [email-verifier](https://github.com/AfterShip/email-verifier) - 이메일을 보내지 않고 이메일 주소를 검증하는 Go 라이브러리.
- [go-dkim](https://github.com/toorop/go-dkim) - 이메일 서명 및 검증을 위한 DKIM 라이브러리.
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - 이메일 주소의 정규화된 표현을 제공하는 Golang 라이브러리.
- [go-imap](https://github.com/BrianLeishman/go-imap) - 자동 재연결, OAuth2, IDLE 지원, 내장 MIME 파싱을 모두 갖춘 IMAP 클라이언트.
- [go-imap](https://github.com/emersion/go-imap) - 클라이언트와 서버를 위한 IMAP 라이브러리.
- [go-mail](https://github.com/wneessen/go-mail) - Go에서 메일을 보내기 위한 간단한 Go 라이브러리.
- [go-message](https://github.com/emersion/go-message) - 인터넷 메시지 형식과 메일 메시지를 위한 스트리밍 라이브러리.
- [go-premailer](https://github.com/vanng822/go-premailer) - Go에서 HTML 메일에 인라인 스타일을 적용합니다.
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - SMTP Keep Alive와 두 가지 타임아웃(연결 및 전송)을 지원하며 이메일을 보내는 매우 간단한 패키지.
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - 원본 이메일을 SpamAssassin 규칙으로 채점하는 Postmark SpamCheck API용 클라이언트.
- [Hectane](https://github.com/hectane/hectane) - HTTP API를 제공하는 경량 SMTP 클라이언트.
- [hermes](https://github.com/matcornic/hermes) - 깔끔한 반응형 HTML 이메일을 생성하는 Golang 패키지.
- [Maddy](https://github.com/foxcpp/maddy) - 올인원(SMTP, IMAP, DKIM, DMARC, MTA-STS, DANE) 이메일 서버
- [mailchain](https://github.com/mailchain/mailchain) - 블록체인 주소로 암호화된 이메일을 보냅니다. Go로 작성되었습니다.
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Mailgun API로 메일을 보내기 위한 Go 라이브러리.
- [MailHog](https://github.com/mailhog/MailHog) - 웹 및 API 인터페이스를 갖춘 이메일 및 SMTP 테스트 도구.
- [Mailpit](https://github.com/axllent/mailpit) - 개발자를 위한 이메일 및 SMTP 테스트 도구.
- [mailx](https://github.com/valord577/mailx) - Mailx는 SMTP를 통한 이메일 발송을 더 쉽게 해 주는 라이브러리입니다. Golang 표준 라이브러리 `net/smtp`를 개선한 것입니다.
- [mox](https://github.com/mjl-/mox) - 유지 관리 부담이 적은 셀프 호스팅 이메일을 위한, 모든 기능을 갖춘 현대적이고 안전한 메일 서버.
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - 이메일 발송을 위한 SendGrid의 Go 라이브러리.
- [smtp](https://github.com/mailhog/smtp) - SMTP 서버 프로토콜 상태 머신.
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - 가볍고 설정 가능한 멀티스레드 가짜 SMTP 서버. 테스트 환경에서 모든 SMTP 동작을 흉내 낼 수 있습니다.
- [tickstem/verify](https://github.com/tickstem/verify) - 이메일 주소가 데이터베이스에 저장되기 전에 문법, MX 조회, 일회용 도메인, 역할 기반 수신함을 검증합니다.
- [truemail-go](https://github.com/truemail-rb/truemail-go) - 설정 가능한 Golang 이메일 유효성 검사기/검증기. 정규식, DNS, SMTP 등으로 이메일을 검증합니다.

**[⬆ 맨 위로](#contents)**

## 임베드 가능한 스크립팅 언어

_Go 코드 안에 다른 언어를 임베드합니다._

- [anko](https://github.com/mattn/anko) - Go로 작성된 스크립트 가능한 인터프리터.
- [binder](https://github.com/alexeyco/binder) - [gopher-lua](https://github.com/yuin/gopher-lua)를 기반으로 한 Go-Lua 바인딩 라이브러리.
- [cel-go](https://github.com/google/cel-go) - 점진적 타이핑을 지원하는 빠르고 이식 가능한 비튜링 완전 표현식 평가.
- [ecal](https://github.com/krotik/ecal) - 동시 이벤트 처리를 지원하는 간단한 임베드 가능 스크립팅 언어.
- [expr](https://github.com/antonmedv/expr) - Go용 표현식 평가 엔진: 빠르고, 비튜링 완전하며, 동적 타이핑과 정적 타이핑을 지원합니다.
- [FrankenPHP](https://github.com/dunglas/frankenphp) - `net/http` 핸들러를 갖춘, Go에 임베드된 PHP.
- [gentee](https://github.com/gentee/gentee) - 임베드 가능한 스크립팅 프로그래밍 언어.
- [gisp](https://github.com/jcla1/gisp) - Go로 구현한 간단한 LISP.
- [go-lua](https://github.com/Shopify/go-lua) - Lua 5.2 VM을 순수 Go로 포팅한 것.
- [go-lua](https://github.com/speedata/go-lua) - 순수 Go로 구현한 Lua 5.4 VM.
- [go-php](https://github.com/deuill/go-php) - Go용 PHP 바인딩.
- [goal](https://codeberg.org/anaseto/goal) - 임베드 가능한 스크립팅 배열 언어.
- [goja](https://github.com/dop251/goja) - Go로 구현한 ECMAScript 5.1(+).
- [golua](https://github.com/aarzilli/golua) - Lua C API용 Go 바인딩.
- [gopher-lua](https://github.com/yuin/gopher-lua) - Go로 작성된 Lua 5.1 VM 및 컴파일러.
- [gval](https://github.com/PaesslerAG/gval) - Go로 작성된, 사용자 정의 폭이 넓은 표현식 언어.
- [metacall](https://github.com/metacall/core) - NodeJS, JavaScript, TypeScript, Python, Ruby, C#, WebAssembly, Java, Cobol 등을 지원하는 크로스 플랫폼 폴리글랏 런타임.
- [ngaro](https://github.com/db47h/ngaro) - Retro로 스크립팅할 수 있게 해 주는 임베드 가능한 Ngaro VM 구현.
- [prolog](https://github.com/ichiban/prolog) - 임베드 가능한 Prolog.
- [purl](https://github.com/ian-kent/purl) - Go에 임베드된 Perl 5.18.2.
- [starlark-go](https://github.com/google/starlark-go) - Starlark의 Go 구현: 결정적 평가와 밀폐된(hermetic) 실행을 제공하는 Python 유사 언어.
- [starlet](https://github.com/1set/starlet) - 스크립트 실행을 단순화하고 데이터 변환과 유용한 Starlark 라이브러리 및 확장을 제공하는 [starlark-go](https://github.com/google/starlark-go)용 Go 래퍼.
- [tengo](https://github.com/d5/tengo) - Go를 위한 바이트코드 컴파일 스크립트 언어.
- [Wa/凹语言](https://github.com/wa-lang/wa) - Go에 임베드된 Wa 프로그래밍 언어.

**[⬆ 맨 위로](#contents)**

## 오류 처리

_오류를 처리하기 위한 라이브러리._

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - 각 호출 지점의 파일, 줄, 함수 이름으로 오류를 감쌉니다.
- [emperror](https://github.com/emperror/emperror) - Go 라이브러리와 애플리케이션을 위한 오류 처리 도구 및 모범 사례.
- [eris](https://github.com/rotisserie/eris) - Go에서 오류를 처리, 추적, 로깅하는 더 나은 방법. 표준 error 라이브러리 및 github.com/pkg/errors와 호환됩니다.
- [errlog](https://github.com/snwfdhmp/errlog) - 오류의 원인이 된 소스 코드를 찾아내는 해킹 가능한 패키지(및 기타 빠른 디버깅 기능). 어떤 로거에도 그 자리에서 연결할 수 있습니다.
- [errors](https://github.com/emperror/errors) - 표준 라이브러리 errors 패키지와 github.com/pkg/errors를 그대로 대체할 수 있습니다. 다양한 오류 처리 기본 요소를 제공합니다.
- [errors](https://github.com/neuronlabs/errors) - 분류 기본 요소를 갖춘 간단한 Golang 오류 처리.
- [errors](https://github.com/PumpkinSeed/errors) - 뛰어난 성능과 최소한의 메모리 오버헤드를 갖춘 가장 간단한 오류 래퍼.
- [errors](https://gitlab.com/tozd/go/errors) - 스택 트레이스와 선택적 구조화 세부 정보를 포함한 오류를 제공합니다. github.com/pkg/errors API와 호환되지만 내부적으로 이를 사용하지는 않습니다.
- [errors](https://github.com/naughtygopher/errors) - Go 내장 errors를 그대로 대체할 수 있는 패키지. 사용자 정의 오류 타입, 사용자 친화적인 메시지, Unwrap 및 Is를 갖춘 최소한의 오류 처리 패키지입니다. 매우 사용하기 쉽고 직관적인 헬퍼 함수를 제공합니다.
- [errors](https://github.com/cockroachdb/errors) - 네트워크를 통한 오류 이식성을 제공하는 Go 오류 라이브러리.
- [errorx](https://github.com/joomcode/errorx) - 스택 트레이스, 오류 조합 등을 지원하는 기능이 풍부한 오류 패키지.
- [exception](https://github.com/rbrahul/exception) - Golang에서 try-catch로 예외를 처리하기 위한 간단한 유틸리티 패키지.
- [Falcon](https://github.com/SonicRoshan/falcon) - 간단하지만 매우 강력한 오류 처리 패키지.
- [Fault](https://github.com/Southclaws/fault) - 오류 값에 구조화된 메타데이터와 컨텍스트를 쉽게 담을 수 있도록 오류를 감싸는 인체공학적인 메커니즘.
- [go-errr](https://github.com/go-errr/go) - Catch/Recover 의미 체계, 래핑된 오류 체인, 스택 트레이스를 제공하는 Go용 오류 처리 라이브러리.
- [go-multierror](https://github.com/hashicorp/go-multierror) - 오류 목록을 하나의 오류로 표현하기 위한 Go(golang) 패키지.
- [metaerr](https://github.com/quantumcycle/metaerr) - 다양한 소스의 메타데이터와 선택적 스택 트레이스를 담은 구조화된 오류를 만드는 사용자 정의 오류 빌더를 생성하기 위한 라이브러리.
- [multierr](https://github.com/uber-go/multierr) - 오류 목록을 하나의 오류로 표현하기 위한 패키지.
- [oops](https://github.com/samber/oops) - 컨텍스트, 스택 트레이스, 소스 코드 조각을 포함한 오류 처리.
- [tracerr](https://github.com/ztrue/tracerr) - 스택 트레이스와 소스 코드 조각을 포함하는 Golang 오류.

**[⬆ 맨 위로](#contents)**

## 파일 처리

_파일과 파일 시스템을 다루기 위한 라이브러리._

- [afero](https://github.com/spf13/afero) - Go를 위한 파일 시스템 추상화 시스템.
- [afs](https://github.com/viant/afs) - Go를 위한 추상 파일 저장소(mem, scp, zip, tar, 클라우드: s3, gs).
- [baraka](https://github.com/xis/baraka) - HTTP 파일 업로드를 쉽게 처리하기 위한 라이브러리.
- [checksum](https://github.com/codingsince1985/checksum) - 대용량 파일의 MD5, SHA256, SHA1, CRC, BLAKE2s 같은 메시지 다이제스트를 계산합니다.
- [copy](https://github.com/otiai10/copy) - 디렉터리를 재귀적으로 복사합니다.
- [fastwalk](https://github.com/charlievieth/fastwalk) - 빠른 병렬 디렉터리 순회 라이브러리([fzf](https://github.com/junegunn/fzf)에서 사용).
- [flop](https://github.com/homedepot/flop) - [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html)와 동일한 기능 제공을 목표로 하는 파일 작업 라이브러리.
- [gdu](https://github.com/dundee/gdu) - 콘솔 인터페이스를 갖춘 디스크 사용량 분석기.
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - 태그를 사용해 CSV 파일을 로드합니다.
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - 사람을 위한 파일 복사.
- [go-exiftool](https://github.com/barasher/go-exiftool) - 파일(사진, PDF, 오피스 문서 등)에서 가능한 한 많은 메타데이터(EXIF, IPTC 등)를 추출하는 데 쓰이는 잘 알려진 라이브러리 ExifTool의 Go 바인딩.
- [go-gtfs](https://github.com/artonge/go-gtfs) - Go에서 GTFS 파일을 로드합니다.
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - HTML 템플릿을 PDF 파일로 변환하는 패키지.
- [goflat](https://github.com/lzambarda/goflat) - 컨텍스트를 인식하는 제네릭 플랫 파일 마샬러/언마샬러.
- [gofs](https://github.com/no-src/gofs) - 바로 사용할 수 있는 크로스 플랫폼 실시간 파일 동기화 도구.
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Go를 위한 PDF/A 처리.
- [gulter](https://github.com/adelowo/gulter) - 파일 업로드에 필요한 모든 것을 자동으로 처리하는 간단한 HTTP 미들웨어
- [gut/yos](https://github.com/1set/gut) - 파일, 디렉터리, 심볼릭 링크에 대한 복사/이동/비교/목록 같은 파일 작업을 위한 간단하고 신뢰할 수 있는 패키지.
- [gxpdf](https://github.com/coregx/gxpdf) - Go를 위한 현대적인 전체 수명 주기 PDF 라이브러리 — CGO 의존성 없이 문서를 파싱하고, 표를 추출하고, 생성하고, 서명합니다.
- [higgs](https://github.com/dastoori/higgs) - 파일과 디렉터리를 숨기거나 숨김 해제하는 작은 크로스 플랫폼 Go 라이브러리.
- [iso9660](https://github.com/kdomanski/iso9660) - ISO9660 디스크 이미지를 읽고 생성하기 위한 패키지
- [notify](https://github.com/rjeczalik/notify) - os/signal과 비슷한 간단한 API를 갖춘 파일 시스템 이벤트 알림 라이브러리.
- [opc](https://github.com/qmuntal/opc) - Go에서 Open Packaging Conventions(OPC) 파일을 로드합니다.
- [parquet](https://github.com/parsyl/parquet) - [parquet](https://parquet.apache.org) 파일을 읽고 씁니다.
- [pathtype](https://github.com/jonchun/pathtype) - 경로를 문자열 대신 고유한 타입으로 다룹니다.
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - PDF 처리기.
- [skywalker](https://github.com/dixonwille/skywalker) - 파일 시스템을 쉽게 동시 순회할 수 있게 해 주는 패키지.
- [todotxt](https://github.com/1set/todotxt) - Gina Trapani의 [_todo.txt_](http://todotxt.org/) 파일을 위한 Go 라이브러리로, [_todo.txt_ 형식](https://github.com/todotxt/todo.txt)의 작업 목록 파싱과 조작을 지원합니다.
- [vfs](https://github.com/C2FO/vfs) - os, S3, GCS 등 여러 파일 시스템 유형에 걸쳐 동작하는, 플러그인 방식이고 확장 가능하며 설계 방향이 뚜렷한 Go용 파일 시스템 기능 모음.

**[⬆ 맨 위로](#contents)**

## 금융

_회계와 금융을 위한 패키지._

- [accounting](https://github.com/leekchan/accounting) - Golang을 위한 금액 및 통화 포매팅.
- [ach](https://github.com/moov-io/ach) - ACH(Automated Clearing House) 파일을 위한 리더, 라이터, 유효성 검사기.
- [bbgo](https://github.com/c9s/bbgo) - Go로 작성된 암호화폐 트레이딩 봇 프레임워크. 일반적인 암호화폐 거래소 API, 표준 지표, 백테스팅, 다양한 내장 전략을 포함합니다.
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - 260개 이상의 메서드, USDT-M/Coin-M 선물, 현물, TradFi, WebSocket 스트림, 카피 트레이딩을 지원하는 BingX API v3용 Go 클라이언트.
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - 타입 지정 모델, 문자열 기반 가격, 자동 재연결 WebSocket, 모의 거래를 지원하는 Bitget UTA API v3용 Go 클라이언트.
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - HMAC/RSA 인증, WebSocket 스트림, 모의 거래, TradFi 상품을 지원하는 Bybit V5 API용 Go 클라이언트.
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - 7개의 구성 지표와 약 1년치 일별 기록을 제공하는 CNN 공포 및 탐욕 지수(Fear & Greed Index)용 클라이언트.
- [currency](https://github.com/bojanz/currency) - 통화 금액을 처리하고 통화 정보와 포매팅을 제공합니다.
- [currency](https://github.com/naughtygopher/currency) - 고성능의 정확한 통화 계산 패키지.
- [dec128](https://github.com/jokruger/dec128) - 고성능 128비트 고정 소수점 십진수.
- [decimal](https://github.com/shopspring/decimal) - 임의 정밀도 고정 소수점 십진수.
- [decimal](https://github.com/aytechnet/decimal) - [shopspring/decimal](https://github.com/shopspring/decimal) 및 int64와 부분적으로 호환되며 Weight와 Length를 포함하는 고성능 64비트 십진수.
- [decimal](https://github.com/govalues/decimal) - 패닉 없는 산술 연산을 지원하는 불변 십진수.
- [decimal](https://github.com/klokare/decimal) - 임의 정밀도가 필요 없을 때 사용하는 고정 크기, 할당 없는 십진수 타입.
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - 유럽 45개국의 VAT 세율과 VAT 번호 형식으로, 컴파일 시점에 임베드되며 유럽 위원회 TEDB에서 매일 갱신됩니다.
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - 작은 고정 소수점 십진수를 위한 빠르고 정확한 직렬화 및 산술 연산
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - 빠르고 간단한 ISO4217 고정 소수점 십진 화폐.
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - 25개 지표 카테고리, 타입 지정 구조체, 대량 엔드포인트, 특정 시점(Point-in-Time) 데이터를 지원하고 의존성이 없는 Glassnode Basic API용 Go 클라이언트.
- [go-finance](https://github.com/alpeb/go-finance) - 화폐의 시간 가치(연금), 현금 흐름, 이자율 변환, 채권, 감가상각 계산을 위한 금융 함수 라이브러리.
- [go-finance](https://github.com/pieterclaerhout/go-finance) - 환율을 가져오고, VIES를 통해 VAT 번호를 확인하며, IBAN 은행 계좌 번호를 확인하는 모듈.
- [go-money](https://github.com/rhymond/go-money) - Fowler의 Money 패턴 구현.
- [go-nowpayments](https://github.com/matm/go-nowpayments) - 암호화폐 NOWPayments API용 라이브러리.
- [gobl](https://github.com/invopop/gobl) - 송장 및 청구 문서 프레임워크. JSON Schema 기반입니다. 세금 계산과 검증을 자동화하며, 전 세계 형식으로 변환하는 도구를 제공합니다.
- [indicator](https://github.com/cinar/indicator) - 금융 지표, 전략, 백테스팅 프레임워크를 제공하는 기술적 분석 라이브러리.
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - HMAC-SHA256 인증, 문자열 타입 가격, 타입 지정 오류 계층을 갖춘 KuCoin UTA 및 Classic REST & WebSocket API용 Go 클라이언트.
- [ledger](https://github.com/formancehq/ledger) - 자금 이동 애플리케이션의 기반을 제공하는 프로그래밍 가능한 금융 원장.
- [money](https://github.com/govalues/money) - 패닉 없는 산술 연산을 지원하는 불변 금액 및 환율.
- [ofxgo](https://github.com/aclindsa/ofxgo) - OFX 서버에 질의하거나 응답을 파싱합니다(예제 명령줄 클라이언트 포함).
- [okx-go](https://github.com/tigusigalpa/okx-go) - 335개의 REST 엔드포인트, 53개의 WebSocket 채널, 제네릭 지원, 자동 재연결을 갖춘 OKX v5 API용 Go 클라이언트.
- [orderbook](https://github.com/i25959341/orderbook) - Golang으로 작성된 지정가 주문장용 매칭 엔진.
- [orderbook](https://github.com/intrepidkarthi/orderbook) - 정수 기반의 정확한 가격 책정, 단일 작성자 코어, 선행 기록 로그(WAL) 기반 장애 복구를 갖춘 임베드 가능한 지정가 주문장 및 매칭 엔진.
- [payme](https://github.com/jovandeginste/payme) - SEPA 결제를 위한 QR 코드 생성기(ASCII 및 PNG).
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - Paystack API를 위한 포괄적이고 의존성이 없으며 완전히 타입이 지정된 Go SDK.
- [swift](https://code.pfad.fr/swift/) - IBAN(국제 은행 계좌 번호)의 오프라인 유효성 검사와 BIC 조회(일부 국가).
- [techan](https://github.com/sdcoffey/techan) - 고급 시장 분석 및 트레이딩 전략을 갖춘 기술적 분석 라이브러리.
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - HMAC-SHA256 웹훅 검증과 net/http, Gin, Echo용 미들웨어를 갖춘 Telegram Wallet Pay API용 Go 클라이언트.
- [ticker](https://github.com/achannarasappa/ticker) - 터미널 주식 시세 감시 및 주식 포지션 추적 도구.
- [transaction](https://github.com/claygod/transaction) - 멀티스레드 모드로 실행되는 계좌용 임베디드 트랜잭션 데이터베이스.
- [udecimal](https://github.com/quagmt/udecimal) - 금융 애플리케이션을 위한 고성능, 고정밀, 할당 없는 고정 소수점 십진수 라이브러리.
- [vat](https://github.com/dannyvankooten/vat) - VAT 번호 유효성 검사 및 EU VAT 세율.

**[⬆ 맨 위로](#contents)**

## 폼

_폼을 다루기 위한 라이브러리._

- [bind](https://github.com/robfig/bind) - 폼 데이터를 임의의 Go 값에 바인딩합니다.
- [conform](https://github.com/leebenson/conform) - 사용자 입력을 통제합니다. 구조체 태그를 기반으로 데이터를 다듬고 정제하고 깨끗하게 합니다.
- [form](https://github.com/go-playground/form) - url.Values를 Go 값으로 디코딩하고 Go 값을 url.Values로 인코딩합니다. 이중 배열과 전체 맵을 지원합니다.
- [formam](https://github.com/monoculum/formam) - 폼 값을 구조체로 디코딩합니다.
- [forms](https://github.com/albrow/forms) - 멀티파트 폼과 파일을 지원하며 폼/JSON 데이터를 파싱하고 검증하는, 프레임워크에 구애받지 않는 라이브러리.
- [gbind](https://github.com/bdjimmy/gbind) - 데이터를 임의의 Go 값에 바인딩합니다. 내장 및 사용자 정의 표현식 바인딩 기능을 사용할 수 있으며 데이터 유효성 검사를 지원합니다
- [gorilla/csrf](https://github.com/gorilla/csrf) - Go 웹 애플리케이션 및 서비스를 위한 CSRF 보호.
- [httpin](https://github.com/ggicci/httpin) - 쿼리 문자열, 폼, HTTP 헤더 등을 포함한 HTTP 요청을 사용자 정의 구조체로 디코딩합니다.
- [nosurf](https://github.com/justinas/nosurf) - Go용 CSRF 보호 미들웨어.
- [qs](https://github.com/sonh/qs) - 구조체를 URL 쿼리 매개변수로 인코딩하기 위한 Go 모듈.
- [queryparam](https://github.com/tomwright/queryparam) - `url.Values`를 표준 또는 사용자 정의 타입의 사용 가능한 구조체 값으로 디코딩합니다.
- [roamer](https://github.com/slipros/roamer) - 간단한 태그로 쿠키, 헤더, 쿼리 매개변수, 경로 매개변수, 본문 등을 구조체에 바인딩하여 HTTP 요청 파싱을 위한 보일러플레이트 코드를 없애 줍니다.

**[⬆ 맨 위로](#contents)**

## 함수형 프로그래밍

_Go에서 함수형 프로그래밍을 지원하는 패키지._

- [fp-go](https://github.com/repeale/fp-go) - Golang 1.18+ 제네릭으로 구현한 함수형 프로그래밍 헬퍼 모음.
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Golang을 위한 모나드 및 함수형 프로그래밍 기능.
- [fuego](https://github.com/seborama/fuego) - Go에서의 함수형 실험.
- [FuncFrog](https://github.com/koss-null/FuncFrog) - 지연 평가와 오류 처리 메커니즘을 갖추고 Go1.18+ 제네릭 슬라이스에 대해 Map, Filter, Reduce 등의 스트림 연산을 제공하는 함수형 헬퍼 라이브러리.
- [g](https://github.com/enetx/g) - Go를 위한 함수형 프로그래밍 프레임워크.
- [go-functional](https://github.com/BooleanCat/go-functional) - 제네릭을 사용한 Go 함수형 프로그래밍
- [go-underscore](https://github.com/tobyhede/go-underscore) - 유용한 함수형 Go 컬렉션 유틸리티 모음.
- [gofp](https://github.com/rbrahul/gofp) - Golang을 위한 lodash 같은 강력한 유틸리티 라이브러리.
- [mo](https://github.com/samber/mo) - Go 1.18+ 제네릭 기반의 모나드와 인기 있는 함수형 추상화(Option, Result, Either...).
- [underscore](https://github.com/rjNemo/underscore) - Go 1.18 이상을 위한 함수형 프로그래밍 헬퍼.
- [valor](https://github.com/phelmkamp/valor) - 값을 선택적으로 담는 제네릭 option 및 result 타입.

**[⬆ 맨 위로](#contents)**

## 게임 개발

_멋진 게임 개발 라이브러리._

- [Ark](https://github.com/mlange-42/ark) - Go를 위한 아키타입 기반 엔티티 컴포넌트 시스템(ECS).
- [due](https://github.com/dobyte/due) - 모듈식 컴포넌트 설계를 갖추고 tcp, kcp, ws, quic 게이트웨이를 제공하는 분산 게임 서버 프레임워크.
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Go로 작성된 아주 간단한 2D 게임 엔진.
- [ecs](https://github.com/andygeiss/ecs) - Golang에서 엔티티 컴포넌트 시스템 개념을 기반으로 자신만의 게임 엔진을 만듭니다.
- [engo](https://github.com/EngoEngine/engo) - Engo는 Go로 작성된 오픈 소스 2D 게임 엔진입니다. 엔티티-컴포넌트-시스템 패러다임을 따릅니다.
- [fantasyname](https://github.com/s0rg/fantasyname) - 판타지 이름 생성기.
- [g3n](https://github.com/g3n/engine) - Go 3D 게임 엔진.
- [go-astar](https://github.com/beefsack/go-astar) - A\* 경로 탐색 알고리즘의 Go 구현.
- [go-sdl2](https://github.com/veandco/go-sdl2) - [Simple DirectMedia Layer](https://www.libsdl.org/)용 Go 바인딩.
- [go3d](https://github.com/ungerik/go3d) - Go를 위한 성능 지향 2D/3D 수학 패키지.
- [gogpu](https://github.com/gogpu/gogpu) - WebGPU 기반의 창 관리, 입력, 렌더링을 갖춘 GPU 애플리케이션 프레임워크 — 480줄 이상의 GPU 코드를 약 20줄로 줄여 주며 CGO가 필요 없습니다(GoGPU 생태계: [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)).
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Vulkan, DX12, Metal 백엔드를 갖추고 CGO가 필요 없는 순수 Go WebGPU 구현([GoGPU](https://github.com/gogpu) 생태계의 일부).
- [GOKe](https://github.com/kjkrol/goke) - 예측 가능하고 단계 없는 메모리 증가와 할당 없는 실행 경로를 위해 L1 캐시에 정렬된 청크 단위 SoA 레이아웃을 활용하는 데이터 지향(DOD) 아키타입 기반 ECS 엔진.
- [gonet](https://github.com/xtaci/gonet) - Golang으로 구현한 게임 서버 뼈대.
- [goworld](https://github.com/xiaonanln/goworld) - 공간-엔티티 프레임워크와 핫 스와핑을 갖춘 확장 가능한 게임 서버 엔진.
- [grid](https://github.com/s0rg/grid) - 레이 캐스팅, 섀도 캐스팅, 경로 탐색을 지원하는 제네릭 2D 그리드.
- [Leaf](https://github.com/name5566/leaf) - 경량 게임 서버 프레임워크.
- [nano](https://github.com/lonng/nano) - 가볍고 편리한 고성능 Golang 기반 게임 서버 프레임워크.
- [Oak](https://github.com/oakmound/oak) - 순수 Go 게임 엔진.
- [Pi](https://github.com/elgopher/pi) - 현대 컴퓨터용 레트로 게임을 만들기 위한 게임 엔진. Pico-8에서 영감을 받았으며 Ebitengine으로 구동됩니다.
- [Pitaya](https://github.com/topfreegames/pitaya) - 클러스터링을 지원하고 C SDK를 통해 iOS, Android, Unity 등을 위한 클라이언트 라이브러리를 제공하는 확장 가능한 게임 서버 프레임워크.
- [Pixel](https://github.com/gopxl/pixel) - Go로 정성껏 만든 2D 게임 라이브러리.
- [prototype](https://github.com/gonutz/prototype) - 최소한의 API로 데스크톱 게임을 만들기 위한 크로스 플랫폼(Windows/Linux/Mac) 라이브러리.
- [raylib-go](https://github.com/gen2brain/raylib-go) - 비디오 게임 프로그래밍을 배우기 위한 간단하고 사용하기 쉬운 라이브러리인 [raylib](https://www.raylib.com/)의 Go 바인딩.
- [sceneCamera](https://github.com/donomii/sceneCamera) - 박물관, FPS, RTS, 스테레오 렌더링 모드를 위한 카메라 이동 및 뷰/투영 행렬.
- [termloop](https://github.com/JoelOtter/termloop) - Termbox 위에 구축된 Go용 터미널 기반 게임 엔진.
- [tile](https://github.com/kelindar/tile) - 경로 탐색, 옵저버, 가져오기/내보내기를 포함하는 데이터 지향적이고 캐시 친화적인 2D 그리드 라이브러리(TileMap).

**[⬆ 맨 위로](#contents)**

## 생성기

_Go 코드를 생성하는 도구._

- [apispec](https://github.com/ehabterra/apispec) - 어노테이션 없이 Go 코드로부터 OpenAPI 3.1 명세를 생성하며, 설정, 미리보기, 호출 그래프 탐색을 위한 브라우저 UI도 제공합니다.
- [convergen](https://github.com/reedom/convergen) - 기능이 풍부한 타입 간 복사 코드 생성기.
- [copygen](https://github.com/switchupcb/copygen) - 기본적으로 리플렉션 없이 타입 간 변환기(복사 코드)를 포함해 Go 타입을 기반으로 어떤 코드든 생성합니다.
- [generis](https://github.com/senselogic/GENERIS) - 제네릭, 자유 형식 매크로, 조건부 컴파일, HTML 템플릿을 제공하는 코드 생성 도구.
- [go-apispec](https://github.com/antst/go-apispec) - 프레임워크를 자동으로 감지하는 정적 분석을 통해 Go 소스 코드로부터 OpenAPI 3.1 명세를 생성합니다.
- [go-enum](https://github.com/abice/go-enum) - 코드 주석으로부터 열거형 코드를 생성합니다.
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - 코드 주석으로부터 열거형 인코딩 코드를 생성합니다.
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Go를 위한 .NET LINQ 유사 쿼리 메서드.
- [goderive](https://github.com/awalterschulze/goderive) - 입력 타입으로부터 함수를 파생합니다
- [goverter](https://github.com/jmattheis/goverter) - 인터페이스를 정의하여 변환기를 생성합니다.
- [GoWrap](https://github.com/hexdigest/gowrap) - 간단한 템플릿을 사용해 Go 인터페이스용 데코레이터를 생성합니다.
- [interfaces](https://github.com/rjeczalik/interfaces) - 인터페이스 정의를 생성하기 위한 명령줄 도구.
- [jennifer](https://github.com/dave/jennifer) - 템플릿 없이 임의의 Go 코드를 생성합니다.
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - OpenAPI 3.0 API 정의를 기반으로 서비스용 Go 보일러플레이트 코드를 생성하는 유틸리티 모음을 담은 패키지입니다.
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - protobuf로부터 HTTP 서버와 클라이언트를 생성합니다.
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Protocol Buffers로부터 타입이 지정된 MCP 도구, 프롬프트, 리소스를 생성합니다.
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - 타입을 동적으로 생성하기 위한 라이브러리.

**[⬆ 맨 위로](#contents)**

## 지리 정보

_지리 정보 도구 및 서버_

- [borders](https://github.com/kpfaulkner/borders) - 이미지 경계를 감지하고 GIS 작업을 위해 GeoJSON으로 변환합니다.
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - 한 자릿수 밀리초 지연 시간의 고성능 지리 공간 데이터 수집을 제공하는 GeoEngine 공식 Go SDK.
- [geoos](https://github.com/spatial-go/geoos) - 공간 데이터와 기하 알고리즘을 제공하는 라이브러리.
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver는 GeoServer REST API를 통해 GeoServer 인스턴스를 조작하기 위한 Go 패키지입니다.
- [gismanager](https://github.com/hishamkaram/gismanager) - GIS 데이터(벡터 데이터)를 PostGIS와 Geoserver에 게시합니다.
- [godal](https://github.com/airbusgeo/godal) - GDAL용 Go 래퍼.
- [H3](https://github.com/uber/h3-go) - 계층적 육각형 지리 공간 인덱싱 시스템인 H3의 Go 바인딩.
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - H3 인덱스와 GeoJSON 간 변환 유틸리티.
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - 가상 노드에 따른 Uber H3geo 셀 분배.
- [mbtileserver](https://github.com/consbio/mbtileserver) - mbtiles 형식으로 저장된 지도 타일을 위한 간단한 Go 기반 서버.
- [osm](https://github.com/paulmach/osm) - OpenStreetMap 데이터와 API를 읽고 쓰고 다루기 위한 라이브러리.
- [pbf](https://github.com/maguro/pbf) - OpenStreetMap PBF Golang 인코더/디코더.
- [S2 geojson](https://github.com/pantrif/s2-geojson) - geojson을 s2 셀로 변환하고 지도 위에서 몇 가지 S2 기하 기능을 시연합니다.
- [S2 geometry](https://github.com/golang/geo) - Go로 작성된 S2 기하 라이브러리.
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures는 도형을 모델링하는 Go 타입과 이를 다루는 알고리즘을 제공하는 2D 기하 라이브러리입니다.
- [Tile38](https://github.com/tidwall/tile38) - 공간 인덱스와 실시간 지오펜싱을 갖춘 지리 위치 DB.
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) 웹 메르카토르 투영법을 사용하는 지도에 정보, 마커 등을 표시하기 위해 LonLat, Point, Tile을 쉽게 사용하고 변환할 수 있게 해 주는 프로젝트.
- [WGS84](https://github.com/wroge/wgs84) - 좌표 변환 및 변형을 위한 라이브러리(ETRS89, OSGB36, NAD83, RGF93, Web Mercator, UTM).

**[⬆ 맨 위로](#contents)**

## Go 컴파일러

_Go를 다른 언어로, 또는 다른 언어를 Go로 컴파일하기 위한 도구._

- [bunster](https://github.com/yassinebenaid/bunster) - 셸 스크립트를 Go로 컴파일합니다.
- [c4go](https://github.com/Konstantin8105/c4go) - C 코드를 Go 코드로 트랜스파일합니다.
- [cxgo](https://github.com/gotranspile/cxgo) - C 코드를 Go 코드로 트랜스파일합니다.
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Go를 Arduino 코드로 트랜스파일합니다.
- [f4go](https://github.com/Konstantin8105/f4go) - FORTRAN 77 코드를 Go 코드로 트랜스파일합니다.
- [go2hx](https://github.com/go2hx/go2hx) - Go를 Haxe를 거쳐 Javascript/C++/Java/C#으로 컴파일하는 컴파일러.
- [gopherjs](https://github.com/gopherjs/gopherjs) - Go를 JavaScript로 컴파일하는 컴파일러.

**[⬆ 맨 위로](#contents)**

## 고루틴

_고루틴을 관리하고 다루기 위한 도구._

- [anchor](https://github.com/kyuff/anchor) - 마이크로서비스 아키텍처에서 컴포넌트 수명 주기를 관리하기 위한 라이브러리.
- [ants](https://github.com/panjf2000/ants) - Go로 작성된 고성능 저비용 고루틴 풀.
- [artifex](https://github.com/borderstech/artifex) - 워커 기반 디스패칭을 사용하는 Golang용 간단한 인메모리 작업 큐.
- [async](https://github.com/yaitoo/async) - Go를 위한 async/await 스타일의 비동기 작업 패키지.
- [async](https://github.com/reugn/async) - Go를 위한 대안 동기화 라이브러리(Future, Promise, Lock).
- [async](https://github.com/studiosol/async) - 패닉이 발생하면 복구하면서 함수를 비동기로 안전하게 실행하는 방법.
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob은 가볍고 명확하며 빠른 코드로 이루어진 비동기 큐 작업 관리자입니다.
- [autopool](https://github.com/AshvinBambhaniya/autopool) - 우선순위를 고려한 스케줄링을 지원하며 설정 없이 자동으로 확장되는 Go용 워커 풀.
- [breaker](https://github.com/kamilsk/breaker) - 실행 흐름을 중단 가능하게 만드는 유연한 메커니즘.
- [channelify](https://github.com/ddelizia/channelify) - 함수가 채널을 반환하도록 변환하여 쉽고 강력한 병렬 처리를 가능하게 합니다.
- [conc](https://github.com/sourcegraph/conc) - `conc`는 Go의 구조적 동시성을 위한 도구 모음으로, 일반적인 작업을 더 쉽고 안전하게 만들어 줍니다.
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - 타임아웃, 동적 우선순위, 고루틴의 컨텍스트 취소를 지원하는 동시성 제한기.
- [conexec](https://github.com/ITcathyh/conexec) - 함수를 효율적이고 안전하게 동시 실행하도록 돕는 동시성 툴킷. 블로킹을 피하기 위한 전체 타임아웃 지정을 지원하며 효율성을 높이기 위해 고루틴 풀을 사용합니다.
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - Golang용 CyclicBarrier.
- [execpool](https://github.com/hexdigest/execpool) - exec.Cmd를 중심으로 만든 풀로, 지정된 수의 프로세스를 미리 띄워 두고 필요할 때 stdin과 stdout을 연결합니다. FastCGI나 Apache Prefork MPM과 매우 비슷하지만 어떤 명령에도 동작합니다.
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - 쉽게 만든 구조적 동시성.
- [go-accumulator](https://github.com/nar10z/go-accumulator) - 이벤트를 누적하고 이후에 처리하기 위한 솔루션.
- [go-actor](https://github.com/vladopajic/go-actor) - 액터 모델을 사용해 동시성 프로그램을 작성하기 위한 작은 라이브러리.
- [go-floc](https://github.com/workanator/go-floc) - 고루틴을 쉽게 오케스트레이션합니다.
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - 고루틴 실행 순서를 제어합니다.
- [go-future](https://github.com/jizhuozhi/go-future) - 제네릭 조합기와 DAG 실행 엔진을 갖춘 Future/Promise 라이브러리.
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - 간단한 API를 갖춘 이 경량 라이브러리로 고루틴 풀을 관리합니다.
- [go-trylock](https://github.com/subchen/go-trylock) - Golang 읽기-쓰기 잠금에 대한 TryLock 지원.
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - 오류 처리와 동시성 제어를 갖춘 `sync.WaitGroup` 같은 도구.
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Java 스레드 풀에서 영감을 받은 Go WorkerPool은 무거운 고루틴을 제어하는 것을 목표로 합니다.
- [goccm](https://github.com/zenthangplus/goccm) - Go Concurrency Manager 패키지는 동시에 실행할 수 있는 고루틴의 수를 제한합니다.
- [gohive](https://github.com/loveleshsharma/gohive) - Go를 위한 고성능의 사용하기 쉬운 고루틴 풀.
- [gollback](https://github.com/vardius/gollback) - 클로저와 콜백의 실행을 관리하기 위한 간단한 비동기 함수 유틸리티.
- [goscade](https://github.com/ognick/goscade) - 의존성 그래프, 시작 순서 지정, 준비 상태 조정, 정상 종료를 지원하는 Go 컴포넌트용 미니멀한 수명 주기 오케스트레이터.
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl은 프로세스 관리와 프로세스 모니터링을 동시에 수행하는 도구입니다. 무한 워커 풀로 풀과 프로세스를 제어하고 상태를 모니터링할 수 있습니다.
- [goworker](https://github.com/benmanns/goworker) - goworker는 Go 기반 백그라운드 워커입니다.
- [gowp](https://github.com/xxjwxc/gowp) - gowp는 동시성을 제한하는 고루틴 풀입니다.
- [gpool](https://github.com/Sherifabdlnaby/gpool) - 동시성을 제한하기 위해 컨텍스트를 인식하는 고루틴의 크기 조절 가능한 풀을 관리합니다.
- [grpool](https://github.com/ivpusic/grpool) - 경량 고루틴 풀.
- [hands](https://github.com/duanckham/hands) - 여러 고루틴의 실행 및 반환 전략을 제어하는 데 쓰이는 프로세스 컨트롤러.
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch는 `All`, `First`, `Retry`, `Waterfall` 등의 함수를 제공하여 비동기 흐름 제어를 더 직관적으로 만들어 줍니다.
- [kyoo](https://github.com/dirkaholic/kyoo) - 무제한 작업 큐와 동시성 워커 풀을 제공합니다.
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - N개의 워커 고루틴 풀로 제한되는, `sync/errgroup`의 드롭인 대안.
- [nursery](https://github.com/arunsworld/nursery) - Go의 구조적 동시성.
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight는 Erlang 감독 트리의 완전한 구현입니다.
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - 함수를 병렬로 실행합니다.
- [pond](https://github.com/alitto/pond) - Go로 작성된 미니멀한 고성능 고루틴 워커 풀.
- [pool](https://github.com/go-playground/pool) - 고루틴 처리와 취소를 더 쉽게 해 주는 제한된 소비자 고루틴 또는 무제한 고루틴 풀.
- [powerlock](https://github.com/donomii/powerlock) - 컨텍스트 취소, 크기 제한 대기 큐, 워치독 진단, pprof 프로파일, Prometheus 메트릭을 지원하는 이름 있는 FIFO 뮤텍스.
- [rill](https://github.com/destel/rill) - 깔끔하고 조합 가능한 채널 기반 동시성을 위한 Go 툴킷.
- [routine](https://github.com/timandy/routine) - `routine`은 Go를 위한 `ThreadLocal` 라이브러리입니다. 사용하기 쉽고 경합이 없는 고성능 `goroutine` 컨텍스트 접근 인터페이스를 캡슐화하여 제공하므로 코루틴 컨텍스트 정보에 더 우아하게 접근할 수 있습니다.
- [routine](https://github.com/x-mod/routine) - 컨텍스트를 사용한 고루틴 제어. Main, Go, Pool 및 몇 가지 유용한 Executor를 지원합니다.
- [semaphore](https://github.com/kamilsk/semaphore) - 채널과 컨텍스트를 기반으로 잠금/해제 작업의 타임아웃을 지원하는 세마포어 패턴 구현.
- [semaphore](https://github.com/marusama/semaphore) - CAS 기반의 빠르고 크기 조절 가능한 세마포어 구현(채널 기반 세마포어 구현보다 빠름).
- [stl](https://github.com/ssgreg/stl) - 소프트웨어 트랜잭셔널 메모리(STM) 동시성 제어 메커니즘을 기반으로 한 소프트웨어 트랜잭셔널 잠금.
- [threadpool](https://github.com/shettyh/threadpool) - Golang 스레드 풀 구현.
- [tunny](https://github.com/Jeffail/tunny) - Golang용 고루틴 풀.
- [worker-pool](https://github.com/vardius/worker-pool) - goworker는 간단한 Go 비동기 워커 풀입니다.
- [workerpool](https://github.com/gammazero/workerpool) - 대기 중인 작업 수가 아니라 작업 실행의 동시성을 제한하는 고루틴 풀.

**[⬆ 맨 위로](#contents)**

## GUI

_GUI 애플리케이션을 구축하기 위한 라이브러리._

_툴킷_

- [app](https://github.com/murlokswarm/app) - GO, HTML, CSS로 앱을 만들기 위한 패키지. 지원: MacOS, Windows는 진행 중.
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - [cimgui](https://github.com/cimgui/cimgui)를 통해 자동 생성된 [Dear ImGui](https://github.com/ocornut/imgui)용 Go 래퍼.
- [Cogent Core](https://github.com/cogentcore/core) - macOS, Windows, Linux, iOS, Android, 웹에서 실행되는 2D 및 3D 앱을 구축하기 위한 프레임워크.
- [DarwinKit](https://github.com/progrium/darwinkit) - Go로 네이티브 macOS 애플리케이션을 구축합니다.
- [energy](https://github.com/energye/energy) - LCL(네이티브 시스템 UI 컨트롤 라이브러리)과 CEF(Chromium Embedded Framework) 기반의 크로스 플랫폼(Windows/ macOS / Linux)
- [fyne](https://github.com/fyne-io/fyne) - Material Design을 기반으로 Go를 위해 설계된 크로스 플랫폼 네이티브 GUI. 지원: Linux, macOS, Windows, BSD, iOS, Android.
- [gio](https://gioui.org) - Gio는 Go로 크로스 플랫폼 즉시 모드 GUI를 작성하기 위한 라이브러리입니다. Gio는 Linux, macOS, Windows, Android, iOS, FreeBSD, OpenBSD, WebAssembly 등 모든 주요 플랫폼을 지원합니다.
- [go-gtk](https://mattn.github.io/go-gtk/) - GTK용 Go 바인딩.
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - 현대적인 데스크톱 UI 개발을 위한 임베드 가능한 HTML/CSS/스크립트 엔진인 Sciter의 Go 바인딩. 크로스 플랫폼.
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Windows / Linux / Mac용 크로스 플랫폼 UI 툴킷 통합 도구. GTK, Cocoa, Windows API
- [gogpu/ui](https://github.com/gogpu/ui) - 22개의 위젯, 3가지 디자인 시스템(Material, Fluent, Cupertino), 반응형 시그널을 갖추고 CGO가 필요 없는 GPU 가속 GUI 툴킷([GoGPU](https://github.com/gogpu) 생태계의 일부).
- [goradd/html5tag](https://github.com/goradd/html5tag) - HTML5 태그를 출력하기 위한 라이브러리.
- [gotk3](https://github.com/gotk3/gotk3) - GTK3용 Go 바인딩.
- [gowd](https://github.com/dtylman/gowd) - GO, HTML, CSS, NW.js를 사용한 빠르고 간단한 데스크톱 UI 개발. 크로스 플랫폼.
- [proton](https://github.com/CzaxStudio/proton) - Gio 위에 구축되어 Cgo 의존성이 없는 순수 Go 즉시 모드 GUI 프레임워크.
- [qt](https://github.com/therecipe/qt) - Go용 Qt 바인딩(Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi 지원).
- [Spot](https://github.com/roblillack/spot) - 반응형 크로스 플랫폼 데스크톱 GUI 툴킷.
- [ui](https://github.com/andlabs/ui) - Go를 위한 플랫폼 네이티브 GUI 라이브러리. 크로스 플랫폼.
- [unison](https://github.com/richardwilkes/unison) - Go 데스크톱 애플리케이션을 위한 통합 그래픽 사용자 경험 툴킷. macOS, Windows, Linux를 지원합니다.
- [Wails](https://wails.io) - OS 내장 HTML 렌더러를 사용하여 HTML UI로 Mac, Windows, Linux 데스크톱 앱을 만듭니다.
- [walk](https://github.com/lxn/walk) - Go를 위한 Windows 애플리케이션 라이브러리 키트.
- [webview](https://github.com/zserge/webview) - 간단한 양방향 JavaScript 바인딩을 갖춘 크로스 플랫폼 웹뷰 창(Windows / macOS / Linux).

_상호 작용_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - libappindicator3 C 라이브러리용 Go 바인딩.
- [gogpu/systray](https://github.com/gogpu/systray) - CGO가 필요 없는 Windows, macOS, Linux용 순수 Go 시스템 트레이 라이브러리([GoGPU](https://github.com/gogpu) 생태계의 일부).
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Go용 OSX 데스크톱 알림 라이브러리.
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - 컴퓨터에서 일어나는 모든 (플러그인 가능한) 활동을 알려 주는 OSX 라이브러리.
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - Golang에서 OSX 절전/깨우기 알림.
- [robotgo](https://github.com/go-vgo/robotgo) - Go 네이티브 크로스 플랫폼 GUI 시스템 자동화. 마우스, 키보드 등을 제어합니다.
- [systray](https://github.com/getlantern/systray) - 알림 영역에 아이콘과 메뉴를 배치하는 크로스 플랫폼 Go 라이브러리.
- [trayhost](https://github.com/shurcooL/trayhost) - 호스트 운영 체제의 작업 표시줄에 아이콘을 배치하는 크로스 플랫폼 Go 라이브러리.
- [zenity](https://github.com/ncruces/zenity) - 사용자와 그래픽으로 상호 작용하는 간단한 대화 상자를 만드는 크로스 플랫폼 Go 라이브러리 및 CLI.

**[⬆ 맨 위로](#contents)**

## 하드웨어

_하드웨어와 상호 작용하기 위한 라이브러리, 도구, 튜토리얼._

- [arduino-cli](https://github.com/arduino/arduino-cli) - 공식 Arduino CLI 및 라이브러리. 단독으로 실행하거나 더 큰 Go 프로젝트에 통합할 수 있습니다.
- [emgo](https://github.com/ziutek/emgo) - 임베디드 시스템(예: STM32 MCU) 프로그래밍을 위한 Go 유사 언어.
- [ghw](https://github.com/jaypipes/ghw) - Golang 하드웨어 탐색/검사 라이브러리.
- [go-osc](https://github.com/hypebeast/go-osc) - Go용 Open Sound Control(OSC) 바인딩.
- [go-rpio](https://github.com/stianeikeland/go-rpio) - cgo가 필요 없는 Go용 GPIO.
- [goroslib](https://github.com/aler9/goroslib) - Go용 로봇 운영 체제(ROS) 라이브러리.
- [joystick](https://github.com/0xcafed00d/joystick) - 연결된 조이스틱의 상태를 읽는 폴링 방식 API.
- [moody](https://github.com/dinakars777/moody) - macOS용 하드웨어 이벤트 개성 데몬. USB, 충전기, 덮개 등 하드웨어 이벤트를 모니터링하고 사용자 정의 가능한 개성으로 반응합니다.
- [sysinfo](https://github.com/zcalusic/sysinfo) - Linux OS / 커널 / 하드웨어 시스템 정보를 제공하는 순수 Go 라이브러리.

**[⬆ 맨 위로](#contents)**

## 이미지

_이미지를 다루기 위한 라이브러리._

- [bild](https://github.com/anthonynsimon/bild) - 순수 Go로 작성된 이미지 처리 알고리즘 모음.
- [bimg](https://github.com/h2non/bimg) - libvips를 사용한 빠르고 효율적인 이미지 처리를 위한 작은 패키지.
- [cameron](https://github.com/aofei/cameron) - Go용 아바타 생성기.
- [canvas](https://github.com/tdewolff/canvas) - 벡터 그래픽을 PDF, SVG 또는 래스터 이미지로 변환합니다.
- [color-extractor](https://github.com/marekm4/color-extractor) - 외부 의존성이 없는 주요 색상 추출기.
- [darkroom](https://github.com/gojek/darkroom) - 속도와 복원력에 초점을 맞추고 저장소 백엔드와 이미지 처리 엔진을 교체할 수 있는 이미지 프록시.
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - AWS Lambda와 CloudFront에 배포할 수 있는, libvips를 사용한 이미지 최적화 및 변환 API.
- [geopattern](https://github.com/pravj/geopattern) - 문자열로부터 아름다운 생성형 이미지 패턴을 만듭니다.
- [gg](https://github.com/fogleman/gg) - 순수 Go로 구현한 2D 렌더링.
- [gift](https://github.com/disintegration/gift) - 이미지 처리 필터 패키지.
- [gltf](https://github.com/qmuntal/gltf) - 효율적이고 견고한 glTF 2.0 리더, 라이터, 유효성 검사기.
- [go-cairo](https://github.com/ungerik/go-cairo) - cairo 그래픽 라이브러리용 Go 바인딩.
- [go-gd](https://github.com/bolknote/go-gd) - GD 라이브러리용 Go 바인딩.
- [go-nude](https://github.com/koyachi/go-nude) - Go로 구현한 노출 이미지 감지.
- [go-qrcode](https://github.com/yeqown/go-qrcode) - 색상, 블록 크기, 모양, 아이콘을 조정할 수 있는 개인화된 스타일의 QR 코드를 생성합니다.
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Python webcolors 라이브러리를 Go로 포팅한 것.
- [go-webp](https://github.com/kolesa-team/go-webp) - libwebp를 사용해 webp 이미지를 인코딩하고 디코딩하는 라이브러리.
- [gocv](https://github.com/hybridgroup/gocv) - OpenCV 3.3+를 사용하는 컴퓨터 비전용 Go 패키지.
- [gogpu/gg](https://github.com/gogpu/gg) - Canvas 유사 API를 갖추고 CGO가 필요 없는 GPU 가속 2D 렌더링([GoGPU](https://github.com/gogpu) 순수 Go 그래픽 생태계의 일부).
- [goimagehash](https://github.com/corona10/goimagehash) - Go 지각적 이미지 해싱 패키지.
- [goimghdr](https://github.com/corona10/goimghdr) - 파일에 포함된 이미지의 유형을 판별하는 imghdr 모듈의 Go 버전.
- [govatar](https://github.com/o1egl/govatar) - 재미있는 아바타를 생성하기 위한 라이브러리 및 CMD 도구.
- [govips](https://github.com/davidbyttow/govips) - Go를 위한 번개처럼 빠른 이미지 처리 및 크기 조정 라이브러리.
- [gowitness](https://github.com/sensepost/gowitness) - 명령줄에서 Go와 헤드리스 Chrome을 사용해 웹 페이지 스크린샷을 찍습니다.
- [gridder](https://github.com/shomali11/gridder) - 그리드 기반 2D 그래픽 라이브러리.
- [image2ascii](https://github.com/qeesung/image2ascii) - 이미지를 ASCII로 변환합니다.
- [imagick](https://github.com/gographics/imagick) - ImageMagick MagickWand C API용 Go 바인딩.
- [imaginary](https://github.com/h2non/imaginary) - 이미지 크기 조정을 위한 빠르고 간단한 HTTP 마이크로서비스.
- [imaging](https://github.com/disintegration/imaging) - 간단한 Go 이미지 처리 패키지.
- [imagor](https://github.com/cshum/imagor) - libvips를 사용하는 빠르고 안전한 이미지 처리 서버 및 Go 라이브러리.
- [img](https://github.com/hawx/img) - 엄선된 이미지 조작 도구 모음.
- [ln](https://github.com/fogleman/ln) - Go로 구현한 3D 선화 렌더링.
- [mergi](https://github.com/noelyahan/mergi) - 이미지 조작(병합, 자르기, 크기 조정, 워터마크, 애니메이션)을 위한 도구 및 Go 라이브러리.
- [mort](https://github.com/aldor007/mort) - Go로 작성된 저장소 및 이미지 처리 서버.
- [mpo](https://github.com/donatj/mpo) - MPO 3D 사진용 디코더 및 변환 도구.
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - 외부 의존성이 없는 Go 네이티브 WebP 인코더.
- [picfit](https://github.com/thoas/picfit) - Go로 작성된 이미지 크기 조정 서버.
- [pt](https://github.com/fogleman/pt) - Go로 작성된 경로 추적(path tracing) 엔진.
- [scout](https://github.com/jonoton/scout) - Scout는 DIY 영상 보안을 위한 독립형 오픈 소스 소프트웨어 솔루션입니다.
- [smartcrop](https://github.com/muesli/smartcrop) - 임의의 이미지와 자르기 크기에 맞는 좋은 자르기 영역을 찾습니다.
- [steganography](https://github.com/auyer/steganography) - LSB 스테가노그래피를 위한 순수 Go 라이브러리.
- [stegify](https://github.com/DimitarPetrov/stegify) - 이미지 안에 어떤 파일이든 숨길 수 있는 LSB 스테가노그래피용 Go 도구.
- [svgo](https://github.com/ajstarks/svgo) - SVG 생성을 위한 Go 언어 라이브러리.
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs는 차세대 형식을 사용하여 웹용 이미지의 크기를 조정하고 최적화합니다.
- [webp-server](https://github.com/mehdipourfar/webp-server) - 이미지를 저장, 크기 조정, 변환, 캐싱할 수 있는 간단하고 최소한의 이미지 서버.

**[⬆ 맨 위로](#contents)**

## IoT(사물 인터넷)

_IoT 장치를 프로그래밍하기 위한 라이브러리._

- [connectordb](https://github.com/connectordb/connectordb) - 자기 정량화(Quantified Self) 및 IoT를 위한 오픈 소스 플랫폼.
- [devices](https://github.com/goiot/devices) - IoT 장치를 위한 라이브러리 모음으로, x/exp/io용 실험적 버전입니다.
- [ekuiper](https://github.com/lf-edge/ekuiper) - IoT 엣지를 위한 경량 데이터 스트림 처리 엔진.
- [eywa](https://github.com/xcodersun/eywa) - Project Eywa는 본질적으로 연결된 장치를 추적하는 연결 관리자입니다.
- [flogo](https://github.com/tibcosoftware/flogo) - Project Flogo는 IoT 엣지 앱 및 통합을 위한 오픈 소스 프레임워크입니다.
- [gatt](https://github.com/paypal/gatt) - Gatt는 Bluetooth Low Energy 주변 장치를 구축하기 위한 Go 패키지입니다.
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot은 로봇 공학, 피지컬 컴퓨팅, 사물 인터넷을 위한 프레임워크입니다.
- [huego](https://github.com/amimof/huego) - Go를 위한 광범위한 Philips Hue 클라이언트 라이브러리.
- [iot](https://github.com/vaelen/iot/) - IoT는 Google IoT Core 장치를 구현하기 위한 간단한 프레임워크입니다.
- [periph](https://periph.io/) - 저수준 보드 기능과 연동하기 위한 주변 장치 I/O.
- [rulego](https://github.com/rulego/rulego) - RuleGo는 IoT 엣지를 위한 가볍고 고성능이며 임베드 가능하고 오케스트레이션 가능한 컴포넌트 기반 규칙 엔진입니다.
- [sensorbee](https://github.com/sensorbee/sensorbee) - IoT를 위한 경량 스트림 처리 엔진.
- [shifu](https://github.com/Edgenesis/shifu) - Kubernetes 네이티브 IoT 개발 프레임워크.
- [smart-home](https://github.com/e154/smart-home) - IoT 자동화를 위한 소프트웨어 패키지.

**[⬆ 맨 위로](#contents)**

## 작업 스케줄러

_작업을 스케줄링하기 위한 라이브러리._

- [cdule](https://github.com/deepaksinghvi/cdule) - 데이터베이스를 지원하는 작업 스케줄러 라이브러리
- [cheek](https://github.com/bart6114/cheek) - 작업 스케줄링에 KISS 접근 방식을 제공하는 것을 목표로 하는 간단한 crontab 유사 스케줄러.
- [clockwerk](https://github.com/onatm/clockwerk) - 간단하고 유창한(fluent) 문법으로 주기적인 작업을 스케줄링하는 Go 패키지.
- [cronticker](https://github.com/krayzpipes/cronticker) - cron 스케줄을 지원하는 티커 구현.
- [go-cron](https://github.com/rk/go-cron) - 초당 한 번부터 특정 날짜와 시간에 연 1회까지 다양한 간격으로 클로저나 함수를 실행할 수 있는 Go용 간단한 Cron 라이브러리. 주로 웹 애플리케이션과 장기 실행 데몬을 위한 것입니다.
- [go-cron](https://github.com/netresearch/go-cron) - 런타임 스케줄 업데이트, 항목별 컨텍스트, 복원력 미들웨어(재시도, 서킷 브레이커, 속도 제한), 관측 가능성 훅을 갖춘 cron 작업 스케줄러. robfig/cron의 후속작입니다.
- [go-job](https://github.com/cybergarage/go-job) - Go를 위한 유연하고 확장 가능한 작업 스케줄링 및 실행 라이브러리.
- [go-quartz](https://github.com/reugn/go-quartz) - Go를 위한 간단하고 의존성 없는 스케줄링 라이브러리.
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - 표준 cron 표현식, 사용자 정의 디스크립터, 간격, 작업 의존성을 지원하는 작업 스케줄러.
- [gocron](https://github.com/go-co-op/gocron) - 쉽고 유창한 Go 작업 스케줄링. [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron)을 활발히 유지 관리하는 포크입니다.
- [goflow](https://github.com/fieldryand/goflow) - 간단하지만 강력한 DAG 스케줄러 및 대시보드.
- [gron](https://github.com/roylee0704/gron) - 간단한 Go API로 시간 기반 작업을 정의하면 Gron의 스케줄러가 그에 맞춰 실행합니다.
- [gronx](https://github.com/adhocore/gronx) - crontab 형식의 작업 목록을 사용하는 cron 표현식 파서, 작업 실행기 및 데몬.
- [JobRunner](https://github.com/bamzi/jobrunner) - 작업 대기열과 실시간 모니터링이 내장된, 똑똑하고 기능이 풍부한 cron 작업 스케줄러.
- [leprechaun](https://github.com/kilgaloon/leprechaun) - 웹훅, cron, 고전적인 스케줄링을 지원하는 작업 스케줄러.
- [ofelia](https://github.com/netresearch/ofelia) - Docker 작업 스케줄러(Docker용 crontab). 웹 UI, 작업 의존성, 재시도, 작업 영속성을 추가한 mcuadros/ofelia의 포크입니다.
- [pending](https://github.com/kahoon/pending) - 취소, 정상 종료, 선택적 동시성 제한을 지원하는, 지연 작업을 위한 ID 기반 디바운스 작업 스케줄러.
- [sched](https://github.com/romshark/sched) - 시간을 빨리 감을 수 있는 작업 스케줄러.
- [scheduler](https://github.com/carlescere/scheduler) - 쉽게 만든 cron 작업 스케줄링.
- [scheduler](https://github.com/yuseferi/scheduler) - 지연 작업, 일괄 Redis 조정, 재시도, 임대(lease) 기반 복구, 버전 관리형 큐 파티셔닝을 갖춘 Go 네이티브 분산 작업 스케줄러.
- [tasks](https://github.com/madflojo/tasks) - Go에서 반복 작업을 위한 사용하기 쉬운 프로세스 내 스케줄러.
- [tickstem/cron](https://github.com/tickstem/cron) - 실행 기록, 실패 알림, 실제 자격 증명 없이 핸들러를 테스트하기 위한 tsk-local을 갖춘, HTTP cron 작업 스케줄링용 Go 클라이언트.
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - 데드맨 스위치 하트비트 모니터링을 위한 Go 클라이언트: 각 작업 실행 후 URL에 핑을 보내고, 핑이 더 이상 도착하지 않으면 이메일로 알림을 받습니다.

**[⬆ 맨 위로](#contents)**

## JSON

_JSON을 다루기 위한 라이브러리._

- [ajson](https://github.com/spyzhov/ajson) - JSONPath를 지원하는 Golang용 추상 JSON.
- [ask](https://github.com/simonnilsson/ask) - 맵과 슬라이스의 중첩된 값에 쉽게 접근합니다. 임의의 데이터를 Go 데이터 타입으로 "Unmarshal"하는 encoding/json 및 기타 패키지와 함께 동작합니다.
- [dynjson](https://github.com/cocoonspace/dynjson) - 동적 API를 위해 클라이언트가 사용자 정의할 수 있는 JSON 형식.
- [ej](https://github.com/lucassscaravelli/ej) - 다양한 소스의 JSON을 간결하게 쓰고 읽습니다.
- [epoch](https://github.com/vtopc/epoch) - JSON에서 Unix 타임스탬프/에포크를 내장 time.Time 타입과 상호 마샬링/언마샬링하기 위한 기본 요소를 담고 있습니다.
- [fastjson](https://github.com/valyala/fastjson) - Go를 위한 빠른 JSON 파서 및 유효성 검사기. 사용자 정의 구조체도, 코드 생성도, 리플렉션도 필요 없습니다.
- [gabs](https://github.com/Jeffail/gabs) - Go에서 알 수 없거나 동적인 JSON을 파싱, 생성, 편집하기 위한 라이브러리.
- [gjo](https://github.com/skanehira/gjo) - JSON 객체를 만들기 위한 작은 유틸리티.
- [GJSON](https://github.com/tidwall/gjson) - 한 줄의 코드로 JSON 값을 가져옵니다.
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError는 JsonApi 명세를 따르는 JSON 응답 오류를 쉽게 만들 수 있게 해 줍니다.
- [go-respond](https://github.com/nicklaw5/go-respond) - 일반적인 HTTP JSON 응답을 처리하기 위한 Go 패키지.
- [gojmapr](https://github.com/limiu82214/gojmapr) - JSON 경로를 이용해 복잡한 JSON에서 간단한 구조체를 얻습니다.
- [gojq](https://github.com/elgs/gojq) - Golang으로 구현한 JSON 쿼리.
- [gojson](https://github.com/ChimeraCoder/gojson) - 예제 JSON으로부터 Go(golang) 구조체 정의를 자동 생성합니다.
- [htmljson](https://github.com/nikolaydubina/htmljson) - Go에서 JSON을 HTML로 풍부하게 렌더링합니다.
- [JayDiff](https://github.com/yazgazan/jaydiff) - Go로 작성된 JSON 비교(diff) 유틸리티.
- [jettison](https://github.com/wI2L/jettison) - Go를 위한 빠르고 유연한 JSON 인코더.
- [jscan](https://github.com/romshark/jscan) - 할당 없는 고성능 JSON 이터레이터.
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - JSON을 Go 구조체로 변환합니다.
- [JSON-to-Proto](https://json-to-proto.github.io/) - JSON을 온라인에서 Protobuf로 변환합니다.
- [json2go](https://github.com/m-zajac/json2go) - 고급 JSON-Go 구조체 변환. 여러 JSON 문서를 파싱하여 모두에 맞는 구조체를 만들 수 있는 패키지를 제공합니다.
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - JSON API 오류 레퍼런스를 기반으로 한 Go 바인딩.
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - 색상이 입혀진 JSON을 출력하는 `encoding/json`의 드롭인 대체품.
- [jsondiff](https://github.com/wI2L/jsondiff) - RFC6902(JSON Patch) 기반의 Go용 JSON 비교 라이브러리.
- [jsonf](https://github.com/miolini/jsonf) - JSON을 강조 표시하여 포매팅하고 구조 쿼리로 값을 가져오는 콘솔 도구.
- [jsongo](https://github.com/ricardolonga/jsongo) - JSON 객체를 더 쉽게 만들 수 있게 해 주는 플루언트 API.
- [jsonhal](https://github.com/RichardKnop/jsonhal) - 사용자 정의 구조체를 HAL 호환 JSON 응답으로 마샬링하는 간단한 Go 패키지.
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - 다양한 소스의 JSON을 쉽게 읽고 쓸 수 있는 간단한 핸들러를 제공하는 JSON 라이브러리.
- [jsonic](https://github.com/sinhashubham95/jsonic) - 구조체를 정의하지 않고도 타입 안전한 방식으로 JSON을 처리하고 조회하는 유틸리티.
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - `encoding/json`을 대체하는, 비정형 JSON 데이터를 위한 빠르고 편리한 라이브러리.
- [jzon](https://github.com/zerosnake0/jzon) - 표준과 호환되는 API/동작을 갖춘 JSON 라이브러리.
- [kazaam](https://github.com/Qntfy/kazaam) - JSON 문서를 임의로 변환하기 위한 API.
- [mapslice-json](https://github.com/mickep76/mapslice-json) - JSON에서 맵을 순서대로 마샬링/언마샬링하기 위한 Go MapSlice.
- [marshmallow](https://github.com/PerimeterX/marshmallow) - 유연한 사용 사례를 위한 고성능 JSON 언마샬링.
- [mp](https://github.com/sanbornm/mp) - 간단한 CLI 이메일 파서. 현재 stdin을 입력받아 JSON을 출력합니다.
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go는 JSONPath를 비롯한 다양한 추가 JSON 도구를 갖춘 고성능 파서입니다.
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Golang 구조체 필드 태그를 통한 조건부 유효성 검사를 지원하는 간단한 JSON 파서.
- [silentjson](https://github.com/GenshIv/silentjson) - AVX2 SIMD 명령어를 활용하는 할당 없는 JSON 경계 스캐너 및 분할기.
- [SJSON](https://github.com/tidwall/sjson) - 한 줄의 코드로 JSON 값을 설정합니다.  
- [ujson](https://github.com/olvrng/ujson) - 비정형 JSON에서 동작하는 빠르고 최소한의 JSON 파서 및 변환기.
- [vjson](https://github.com/miladibra10/vjson) - 플루언트 API로 JSON 스키마를 선언하여 JSON 객체를 검증하는 Go 패키지.

**[⬆ 맨 위로](#contents)**

## 로깅

_로그 파일을 생성하고 다루기 위한 라이브러리._

- [caarlos0/log](https://github.com/caarlos0/log) - 다채로운 색상의 CLI 로거.
- [distillog](https://github.com/amoghe/distillog) - 정제된 레벨 기반 로깅(표준 라이브러리 + 로그 레벨이라고 생각하면 됩니다).
- [glg](https://github.com/kpango/glg) - glg는 Go를 위한 간단하고 빠른 레벨 기반 로깅 라이브러리입니다.
- [glo](https://github.com/lajosbencz/glo) - PHP Monolog에서 영감을 받아 동일한 심각도 수준을 제공하는 로깅 기능.
- [glog](https://github.com/golang/glog) - Go를 위한 레벨 기반 실행 로그.
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - cronolog처럼 현재 날짜와 시간에 따라 로그 파일을 자동으로 순환시키는 간단한 라이터.
- [go-log](https://github.com/pieterclaerhout/go-log) - 스택 트레이스, 객체 덤프, 선택적 타임스탬프를 지원하는 로깅 라이브러리.
- [go-log](https://github.com/subchen/go-log) - 레벨, 포매터, 라이터를 갖춘 간단하고 설정 가능한 Go 로깅.
- [go-log](https://github.com/siddontang/go-log) - 레벨과 다중 핸들러를 지원하는 로그 라이브러리.
- [go-log](https://github.com/ian-kent/go-log) - Go로 구현한 Log4j.
- [go-log4g](https://github.com/go-log4g/core) - Log4g는 Go 표준 log/slog 로깅 퍼사드를 위한 Log4j 스타일의 설정과 패턴 레이아웃을 제공합니다.
- [go-logger](https://github.com/apsdehal/go-logger) - 레벨 핸들러를 갖춘 Go 프로그램용 간단한 로거.
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - 변조 여부를 오프라인으로 검증할 수 있는, 추가 전용이며 해시 체인으로 연결되고 선택적으로 Ed25519 서명을 지원하는 slog 핸들러.
- [gone/log](https://github.com/One-com/gone/tree/master/log) - 빠르고 확장 가능하며 모든 기능을 갖추고 표준 라이브러리와 소스 호환되는 로그 라이브러리.
- [gslog](https://github.com/maguro/gslog) - OpenTelemetry 트레이스 및 배기지, Kubernetes podinfo 레이블을 지원하는 log/slog용 Google Cloud Logging 핸들러.
- [httpretty](https://github.com/henvic/httpretty) - 디버깅을 위해 일반 HTTP 요청을 터미널에 보기 좋게 출력합니다(http.DumpRequest와 유사).
- [journald](https://github.com/ssgreg/journald) - 로깅을 위한 systemd Journal 네이티브 API의 Go 구현.
- [kemba](https://github.com/clok/kemba) - [debug](https://github.com/visionmedia/debug)에서 영감을 받은 작은 디버그 로깅 도구로, CLI 도구와 애플리케이션에 적합합니다.
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - journalctl, 파일 시스템, Docker 및 Podman 컨테이너, Kubernetes 파드의 로그를 읽고 필터링하기 위한 TUI.
- [log](https://github.com/aerogo/log) - 하나의 로그를 여러 라이터(예: stdout, 파일, TCP 연결)에 연결할 수 있는 O(1) 로깅 시스템.
- [log](https://github.com/apex/log) - Go용 구조화된 로깅 패키지.
- [log](https://github.com/go-playground/log) - Go를 위한 간단하고 설정 가능하며 확장 가능한 구조화된 로깅.
- [log](https://github.com/teris-io/log) - 로깅 퍼사드와 구현을 깔끔하게 분리하는 Go용 구조화된 로그 인터페이스.
- [log](https://github.com/heartwilltell/log) - 표준 log 패키지를 감싼 간단한 레벨 기반 로깅 래퍼.
- [log](https://github.com/no-src/log) - 바로 사용할 수 있는 간단한 로깅 프레임워크.
- [log15](https://github.com/inconshreveable/log15) - Go를 위한 간단하고 강력한 로깅.
- [logdump](https://github.com/ewwwwwqm/logdump) - 다단계 로깅을 위한 패키지.
- [logex](https://github.com/chzyer/logex) - 추적과 레벨을 지원하며 표준 log 라이브러리를 감싼 Golang 로그 라이브러리.
- [logger](https://github.com/azer/logger) - Go를 위한 미니멀한 로깅 라이브러리.
- [logo](https://github.com/mbndr/logo) - 설정 가능한 여러 라이터로 출력하는 Golang 로거.
- [logrus](https://github.com/Sirupsen/logrus) - Go용 구조화된 로거.
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - [logrus](https://github.com/sirupsen/logrus) 로거를 사용하는 `io.Writer` 구현.
- [logrusly](https://github.com/sebest/logrusly) - 오류를 [Loggly](https://www.loggly.com/)로 보내는 [logrus](https://github.com/sirupsen/logrus) 플러그인.
- [logutils](https://github.com/hashicorp/logutils) - 표준 로거를 확장하여 Go(Golang)에서 조금 더 나은 로깅을 가능하게 하는 유틸리티.
- [logxi](https://github.com/mgutz/logxi) - 빠르고 사용하면 행복해지는 12-factor 앱 로거.
- [lumberjack](https://github.com/natefinch/lumberjack) - io.WriteCloser를 구현한 간단한 롤링 로거.
- [mlog](https://github.com/jbrodriguez/mlog) - 5단계 레벨, 선택적 로그 파일 순환 기능, stdout/stderr 출력을 갖춘 Go용 간단한 로깅 모듈.
- [noodlog](https://github.com/gyozatech/noodlog) - 민감한 데이터를 난독화하고 모든 종류의 콘텐츠를 마샬링할 수 있는 매개변수화된 JSON 로깅 라이브러리. 더 이상 값 대신 포인터가 출력되거나 JSON 문자열에 이스케이프 문자가 출력되지 않습니다.
- [onelog](https://github.com/francoispqt/onelog) - Onelog는 아주 간단하지만 매우 효율적인 JSON 로거입니다. 모든 시나리오에서 가장 빠른 JSON 로거입니다. 또한 할당이 가장 적은 로거 중 하나입니다.
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - 로그 심각도, 분류, 필터링을 지원하는 고성능 로깅. 필터링된 로그 메시지를 다양한 대상(예: 콘솔, 네트워크, 메일)으로 보낼 수 있습니다.
- [phuslu/log](https://github.com/phuslu/log) - 고성능 구조화된 로깅.
- [pp](https://github.com/k0kubun/pp) - Go 언어를 위한 컬러 프리티 프린터.
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter는 로그 파일 순환을 위해 다양한 정책을 제공하는 자동 순환 `io.Writer` 구현입니다.
- [seelog](https://github.com/cihub/seelog) - 유연한 디스패칭, 필터링, 포매팅을 갖춘 로깅 기능.
- [sentry-go](https://github.com/getsentry/sentry-go) - Go용 Sentry SDK. 실시간 알림과 성능 모니터링으로 오류를 모니터링하고 추적하도록 돕습니다.
- [slf4g](https://github.com/echocat/slf4g) - Golang용 Simple Logging Facade: 간단한 구조화된 로깅이지만, 수십 년간의 로깅 프레임워크에서 얻은 수많은 교훈을 바탕으로 강력하고 확장 가능하며 사용자 정의가 가능합니다.
- [slog](https://github.com/gookit/slog) - Go를 위한 가볍고 설정 가능하며 확장 가능한 로거.
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - 환경 변수로 표준 라이브러리 log/slog 로거의 레벨, 형식, 소스 위치, stdout/stderr 분리를 설정합니다.
- [slog-datadog](https://github.com/samber/slog-datadog) - Datadog용 slog 핸들러.
- [slog-formatter](https://github.com/samber/slog-formatter) - slog용 공통 포매터와 직접 포매터를 만들기 위한 헬퍼.
- [slog-logrus](https://github.com/samber/slog-logrus) - Logrus용 slog 핸들러.
- [slog-loki](https://github.com/samber/slog-loki) - Grafana Loki용 slog 핸들러.
- [slog-multi](https://github.com/samber/slog-multi) - slog.Handler 체인(파이프라인, 팬아웃...).
- [slog-sentry](https://github.com/samber/slog-sentry) - Sentry용 slog 핸들러.
- [slog-slack](https://github.com/samber/slog-slack) - Slack용 slog 핸들러.
- [slog-zap](https://github.com/samber/slog-zap) - Zap용 slog 핸들러.
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Zerolog용 slog 핸들러.
- [slogor](https://gitlab.com/greyxor/slogor) - 다채로운 색상의 slog 핸들러.
- [spew](https://github.com/davecgh/go-spew) - 디버깅을 돕기 위해 Go 자료 구조를 깊이 있게 보기 좋게 출력하는 프리티 프린터를 구현합니다.
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - 기존 표준 라이브러리 \*sql.DB 사용 방식을 수정하지 않는 Go SQL 데이터베이스 드라이버용 로거.
- [stdlog](https://github.com/alexcesaro/log) - Stdlog는 레벨 기반 로깅을 제공하는 객체 지향 라이브러리입니다. cron 작업에 매우 유용합니다.
- [structy/log](https://github.com/structy/log) - 사용하기 쉬운 로그 시스템으로, 미니멀하지만 디버깅과 메시지 구분을 위한 기능을 갖추고 있습니다.
- [tail](https://github.com/hpcloud/tail) - BSD tail 프로그램의 기능을 흉내 내려는 Go 패키지.
- [timberjack](https://github.com/DeRuina/timberjack) - 크기 기반, 시간 기반, 예약된 시각 기반 순환을 지원하고 압축과 정리를 지원하는 롤링 로거.
- [tint](https://github.com/lmittmann/tint) - 색상이 입혀진 로그를 기록하는 slog.Handler.
- [xlog](https://github.com/xfxdev/xlog) - 레벨 제어, 다중 로그 대상, 사용자 정의 로그 형식을 갖춘 Go용 플러그인 아키텍처 및 유연한 로그 시스템.
- [xlog](https://github.com/rs/xlog) - 유연한 디스패칭을 갖춘, `net/context`를 인식하는 HTTP 핸들러용 구조화된 로거.
- [xylog](https://github.com/xybor-x/xylog) - 레벨 기반 및 구조화된 로깅, 동적 필드, 고성능, 영역 관리, 간단한 설정, 읽기 쉬운 문법.
- [yell](https://github.com/jfcg/yell) - 또 하나의 미니멀한 로깅 라이브러리.
- [zap](https://github.com/uber-go/zap) - Go를 위한 빠르고 구조화된 레벨 기반 로깅.
- [zax](https://github.com/yuseferi/zax) - Context를 Zap 로거와 통합하여 Go 로깅의 유연성을 높여 줍니다.
- [zerolog](https://github.com/rs/zerolog) - 할당 없는 JSON 로거.
- [zkits-logger](https://github.com/edoger/zkits-logger) - 의존성 없는 강력한 JSON 로거.
- [zl](https://github.com/nkmr-jp/zl) - 뛰어난 개발자 경험을 제공하는 zap 기반 로거. 풍부한 기능을 제공하면서도 설정하기 쉽습니다.

**[⬆ 맨 위로](#contents)**

## 머신러닝

_머신러닝을 위한 라이브러리._

- [Anneal](https://github.com/georgebuilds/anneal) - Go로 작성된 머신러닝 컴파일러로, WebGPU 백엔드를 갖춘 tinygrad를 처음부터 다시 포팅한 것입니다.
- [bayesian](https://github.com/jbrukh/bayesian) - Golang을 위한 나이브 베이즈 분류.
- [born](https://github.com/born-ml/born) - Burn(Rust)에서 영감을 받은 딥러닝 프레임워크로, 자동 미분, 타입 안전 텐서, CGO 없는 GPU 가속을 제공합니다.
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - 빠르고 확장 가능한 고성능 결정 트리 기반 그래디언트 부스팅 라이브러리. Cgo를 사용해 Golang에서 CatBoost 모델을 매우 빠르게 추론합니다.
- [CloudForest](https://github.com/ryanbressler/CloudForest) - 순수 Go로 작성된 머신러닝용의 빠르고 유연한 멀티스레드 결정 트리 앙상블.
- [datatrax](https://github.com/rbmuller/datatrax) - 배치 처리, 타입 강제 변환, 7가지 알고리즘을 갖춘 데이터 엔지니어링 및 고전적 ML 툴킷으로, 의존성 없이 순수 Go로 작성되었습니다.
- [ddt](https://github.com/sgrodriguez/ddt) - 동적 결정 트리. 사용자 정의 가능한 규칙을 정의하여 트리를 만듭니다.
- [eaopt](https://github.com/MaxHalford/eaopt) - 진화 최적화 라이브러리.
- [evoli](https://github.com/khezen/evoli) - 유전 알고리즘 및 입자 군집 최적화 라이브러리.
- [fonet](https://github.com/Fontinalis/fonet) - Go로 작성된 심층 신경망 라이브러리.
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - k-modes 및 k-prototypes 클러스터링 알고리즘의 Go 구현.
- [go-deep](https://github.com/patrikeh/go-deep) - Go로 작성된 기능이 풍부한 신경망 라이브러리.
- [go-fann](https://github.com/white-pony/go-fann) - FANN(Fast Artificial Neural Networks) 라이브러리용 Go 바인딩.
- [go-galib](https://github.com/thoj/go-galib) - Go / golang으로 작성된 유전 알고리즘 라이브러리.
- [go-pr](https://github.com/daviddengcn/go-pr) - Go 언어로 작성된 패턴 인식 패키지.
- [gobrain](https://github.com/goml/gobrain) - Go로 작성된 신경망.
- [godist](https://github.com/e-dard/godist) - 다양한 확률 분포와 관련 메서드.
- [goga](https://github.com/tomcraven/goga) - Go용 유전 알고리즘 라이브러리.
- [GoLearn](https://github.com/sjwhitworth/golearn) - Go용 범용 머신러닝 라이브러리.
- [GoMind](https://github.com/surenderthakran/gomind) - Go로 작성된 단순한 신경망 라이브러리.
- [goml](https://github.com/cdipaolo/goml) - Go로 구현한 온라인 머신러닝.
- [GoMLX](https://github.com/gomlx/gomlx) - Go를 위한 가속 머신러닝 프레임워크.
- [gonet](https://github.com/dathoangnd/gonet) - Go용 신경망.
- [Goptuna](https://github.com/c-bata/goptuna) - Go로 작성된 블랙박스 함수용 베이즈 최적화 프레임워크. 모든 것이 최적화됩니다.
- [goRecommend](https://github.com/timkaye11/goRecommend) - Go로 작성된 추천 알고리즘 라이브러리.
- [gorgonia](https://github.com/gorgonia/gorgonia) - 다양한 머신러닝 및 신경망 알고리즘을 구축하기 위한 기본 요소를 제공하는, Theano 같은 Go용 그래프 기반 계산 라이브러리.
- [gorse](https://github.com/zhenghaoz/gorse) - Go로 작성된 협업 필터링 기반 오프라인 추천 시스템 백엔드.
- [goscore](https://github.com/asafschers/goscore) - PMML용 Go 점수 산정 API.
- [gosseract](https://github.com/otiai10/gosseract) - Tesseract C++ 라이브러리를 사용하는 OCR(광학 문자 인식)용 Go 패키지.
- [hugot](https://github.com/knights-analytics/hugot) - onnxruntime을 사용하는 Golang용 Huggingface 트랜스포머 파이프라인.
- [libsvm](https://github.com/datastream/libsvm) - LIBSVM 3.14를 기반으로 한 libsvm의 Golang 파생 버전.
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 학습된 고전적 ML 모델을 의존성 없는 네이티브 Go 코드로 트랜스파일하는 CLI 도구로, Python으로 작성되었으며 Go 언어를 지원합니다.
- [neural-go](https://github.com/schuyler/neural-go) - 역전파를 통한 학습을 지원하는, Go로 구현한 다층 퍼셉트론 네트워크.
- [ocrserver](https://github.com/otiai10/ocrserver) - Docker와 Heroku로 정말 쉽게 배포할 수 있는 간단한 OCR API 서버.
- [onnx-go](https://github.com/owulveryck/onnx-go) - ONNX(Open Neural Network Exchange)용 Go 인터페이스.
- [probab](https://github.com/ThePaw/probab) - 확률 분포 함수. 베이즈 추론. 순수 Go로 작성되었습니다.
- [randomforest](https://github.com/malaschitz/randomForest) - Go를 위한 사용하기 쉬운 랜덤 포레스트 라이브러리.
- [regommend](https://github.com/muesli/regommend) - 추천 및 협업 필터링 엔진.
- [shield](https://github.com/eaigner/shield) - 유연한 토크나이저와 저장소 백엔드를 갖춘 Go용 베이즈 텍스트 분류기.
- [tfgo](https://github.com/galeone/tfgo) - 사용하기 쉬운 Tensorflow 바인딩: 공식 Tensorflow Go 바인딩의 사용법을 단순화합니다. Go로 계산 그래프를 정의하고, Python으로 학습한 모델을 로드하고 실행합니다.
- [Varis](https://github.com/Xamber/Varis) - Golang 신경망.

**[⬆ 맨 위로](#contents)**

## 메시징

_메시징 시스템을 구현하는 라이브러리._

- [ami](https://github.com/kak-tus/ami) - Redis Cluster Streams 기반의 신뢰할 수 있는 큐를 위한 Go 클라이언트.
- [amqp](https://github.com/rabbitmq/amqp091-go) - Go RabbitMQ 클라이언트 라이브러리.
- [APNs2](https://github.com/sideshow/apns2) - Go용 HTTP/2 Apple 푸시 알림 제공자 - iOS, tvOS, Safari, OSX 앱에 푸시 알림을 보냅니다.
- [Asynq](https://github.com/hibiken/asynq) - Redis 위에 구축된, Go를 위한 간단하고 신뢰할 수 있으며 효율적인 분산 작업 큐.
- [backlite](https://github.com/mikestefanello/backlite) - SQLite를 사용하는 타입 안전하고 영속적인 임베디드 작업 큐 및 백그라운드 작업 실행기.
- [Beaver](https://github.com/Clivern/Beaver) - 웹 및 모바일 앱에서 확장 가능한 인앱 알림, 멀티플레이어 게임, 채팅 앱을 구축하기 위한 실시간 메시징 서버.
- [broker](https://github.com/qvcloud/broker) - 다양한 브로커를 위한 통합 API와 내장 OpenTelemetry 연동을 갖춘 프로덕션급 메시징 추상화.
- [Bus](https://github.com/mustafaturan/bus) - 내부 통신을 위한 미니멀한 메시지 버스 구현.
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Go로 작성된 실시간 메시징(WebSocket 또는 SockJS) 서버.
- [Chanify](https://github.com/chanify/chanify) - iOS 기기로 메시지를 보내는 푸시 알림 서버.
- [Commander](https://github.com/jeroenrinzema/commander) - Apache Kafka 같은 다양한 "방언"을 지원하는 고수준 이벤트 기반 소비자/생산자.
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go는 Apache Kafka와 Confluent Platform을 위한 Confluent의 Golang 클라이언트입니다.
- [dbus](https://github.com/godbus/dbus) - D-Bus용 네이티브 Go 바인딩.
- [drone-line](https://github.com/appleboy/drone-line) - 바이너리, docker 또는 Drone CI를 사용해 [Line](https://at.line.me/en) 알림을 보냅니다.
- [emitter](https://github.com/olebedev/emitter) - 와일드카드, 조건자, 취소 기능 등 여러 장점을 갖추고 Go 방식으로 이벤트를 발생시킵니다.
- [event](https://github.com/agoalofalife/event) - 옵저버 패턴의 구현.
- [EventBus](https://github.com/asaskevich/EventBus) - 비동기와 호환되는 경량 이벤트 버스.
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Go로 작성된 Gaurun 클라이언트.
- [Glue](https://github.com/desertbit/glue) - 견고한 Go 및 Javascript 소켓 라이브러리(Socket.io의 대안).
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Go를 위한 간단한 이벤트 버스 패키지.
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - C# MediatR 라이브러리에서 영감을 받아, 이벤트 기반 아키텍처에서 중재자 패턴과 간소화된 CQRS 패턴을 처리하기 위한 라이브러리.
- [go-mq](https://github.com/cheshir/go-mq) - 선언적 설정을 지원하는 RabbitMQ 클라이언트.
- [go-notify](https://github.com/TheCreeper/go-notify) - freedesktop 알림 명세의 네이티브 구현.
- [go-nsq](https://github.com/nsqio/go-nsq) - NSQ용 공식 Go 패키지.
- [go-res](https://github.com/jirenius/go-res) - NATS와 Resgate를 사용해 클라이언트가 매끄럽게 동기화되는 REST/실시간 서비스를 구축하기 위한 패키지.
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Viessmann Vitotrol 웹 서비스용 클라이언트 라이브러리.
- [GoEventBus](https://github.com/Raezil/GoEventBus) - 매우 빠른 인메모리 잠금 없는 이벤트 버스 라이브러리
- [Gollum](https://github.com/trivago/gollum) - 여러 소스에서 메시지를 모아 여러 대상으로 브로드캐스트하는 n:m 멀티플렉서.
- [golongpoll](https://github.com/jcuga/golongpoll) - 웹 pub-sub을 간단하게 만들어 주는 HTTP 롱폴 서버 라이브러리.
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster는 Go 푸시 서버 클러스터입니다.
- [gorush](https://github.com/appleboy/gorush) - [APNs2](https://github.com/sideshow/apns2)와 Google [GCM](https://github.com/google/go-gcm)을 사용하는 푸시 알림 서버.
- [gosd](https://github.com/alexsniffin/gosd) - 메시지를 채널로 보낼 시점을 스케줄링하기 위한 라이브러리.
- [guble](https://github.com/smancke/guble) - 푸시 알림(Google Firebase Cloud Messaging, Apple Push Notification 서비스, SMS)과 WebSocket, REST API를 사용하며 분산 운영과 메시지 영속성을 갖춘 메시징 서버.
- [hare](https://github.com/leozz37/hare) - 메시지를 보내고 TCP 소켓을 수신 대기하기 위한 사용자 친화적인 라이브러리.
- [hub](https://github.com/leandro-lugaresi/hub) - rabbitMQ exchange 같은 별칭을 지원하는 발행/구독 패턴을 사용하는 Go 애플리케이션용 메시지/이벤트 허브.
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Go 또는 JSON으로 작성된 대규모 규칙 집합에 이벤트를 매칭합니다.
- [jazz](https://github.com/socifi/jazz) - 큐 관리와 메시지 발행 및 소비를 위한 간단한 RabbitMQ 추상화 계층.
- [kiln](https://github.com/rafaelaugustos/kiln) - 재시도, 워크플로, 반복 작업, 대시보드를 갖춘 PostgreSQL, MySQL, SQLite 기반의 영속적 백그라운드 작업.
- [machinery](https://github.com/RichardKnop/machinery) - 분산 메시지 전달을 기반으로 한 비동기 작업 큐/잡 큐.
- [mangos](https://github.com/nanomsg/mangos) - 전송 계층 상호 운용성을 갖춘 Nanomsg("Scalability Protocols")의 순수 Go 구현.
- [melody](https://github.com/olahol/melody) - 브로드캐스트와 자동 ping/pong 처리를 포함한, WebSocket 세션을 다루기 위한 미니멀한 프레임워크.
- [Mercure](https://github.com/dunglas/mercure) - Mercure 프로토콜(Server-Sent Events 기반)을 사용해 서버 전송 업데이트를 발송하기 위한 서버 및 라이브러리.
- [messagebus](https://github.com/vardius/message-bus) - messagebus는 간단한 Go 비동기 메시지 버스로, 이벤트 소싱, CQRS, DDD를 할 때 이벤트 버스로 사용하기에 적합합니다.
- [NATS Go Client](https://github.com/nats-io/nats.go) - NATS 메시징 시스템을 위한
  Go 클라이언트.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - NSQ 토픽과 채널을 감싼 작은 래퍼.
- [oplog](https://github.com/dailymotion/oplog) - REST API를 위한 범용 oplog/복제 시스템.
- [pubsub](https://github.com/tuxychandru/pubsub) - Go를 위한 간단한 pubsub 패키지.
- [Quamina](https://github.com/timbray/quamina) - 메시지와 이벤트를 필터링하기 위한 빠른 패턴 매칭.
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - RabbitMQ 자동 재연결과 발행 재시도를 처리하는 경량 라이브러리. 재연결 후 RabbitMQ에서 엔티티를 다시 선언해야 하는 필요성도 고려합니다.
- [rabbus](https://github.com/rafaeljesus/rabbus) - amqp exchange와 큐를 감싼 작은 래퍼.
- [rabtap](https://github.com/jandelgado/rabtap) - RabbitMQ를 위한 맥가이버 칼 같은 CLI 앱.
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ는 로컬 메시지 큐를 관리하기 위한 가볍고 신뢰할 수 있는 라이브러리입니다.
- [Ratus](https://github.com/hyperonym/ratus) - Ratus는 RESTful 비동기 작업 큐 서버입니다.
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue는 Redis 스트림을 사용하는 큐의 생산자와 소비자를 제공합니다.
- [rmqconn](https://github.com/sbabiv/rmqconn) - RabbitMQ 재연결. amqp.Connection과 amqp.Dial을 감싼 래퍼입니다. Close () 메서드 호출로 강제 종료되기 전에 연결이 끊어지면 재연결할 수 있게 해 줍니다.
- [sarama](https://github.com/Shopify/sarama) - Apache Kafka용 Go 라이브러리.
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - 모바일 기기로 서버 측 알림을 보내기 위한 Redis 기반 통합 푸시 서비스.
- [varmq](https://github.com/goptics/varmq) - 동시성 Go 프로그램을 위한, 저장소에 구애받지 않는 메시지 큐 및 워커 풀.
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - 메시지 스트림을 효율적으로 다룹니다. 이벤트 기반 애플리케이션을 구축하고 이벤트 소싱, 메시지 기반 RPC, 사가를 가능하게 합니다. Kafka나 RabbitMQ 같은 일반적인 pub/sub 구현은 물론 HTTP나 MySQL binlog도 사용할 수 있습니다.
- [zmq4](https://github.com/pebbe/zmq4) - ZeroMQ 버전 4용 Go 인터페이스. [버전 3](https://github.com/pebbe/zmq3)과 [버전 2](https://github.com/pebbe/zmq2)용도 있습니다.

**[⬆ 맨 위로](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Office Word(.docx), Excel(.xlsx), Powerpoint(.pptx) 문서를 생성하고 처리하기 위한 순수 Go 라이브러리.

### Microsoft Excel

_Microsoft Excel을 다루기 위한 라이브러리._

- [cellwalker](https://github.com/chonla/cellwalker) - 셀 이름으로 Excel 셀을 가상으로 순회합니다.
- [excelize](https://github.com/xuri/excelize) - Microsoft Excel&trade;(XLSX) 파일을 읽고 쓰기 위한 Golang 라이브러리.
- [exl](https://github.com/go-the-way/exl) - Go로 작성된 Excel-구조체 바인딩.(Go1.18+만 지원)
- [go-excel](https://github.com/szyhf/go-excel) - 관계형 DB 같은 Excel을 테이블처럼 읽는 간단하고 가벼운 리더.
- [xlsx](https://github.com/tealeg/xlsx) - Go 프로그램에서 최신 버전 Microsoft Excel이 사용하는 XML 형식을 간단히 읽기 위한 라이브러리.
- [xlsx](https://github.com/plandem/xlsx) - Go 프로그램에서 기존 Microsoft Excel 파일을 빠르고 안전하게 읽고 업데이트하는 방법.

### Microsoft Word

_Microsoft Word를 다루기 위한 라이브러리._

- [godocx](https://github.com/gomutex/godocx) - Microsoft Word(Docx) 파일을 읽고 쓰기 위한 라이브러리.

**[⬆ 맨 위로](#contents)**

## 기타

### 의존성 주입

_의존성 주입을 다루기 위한 라이브러리._

- [alice](https://github.com/magic003/alice) - Golang을 위한 추가형(additive) 의존성 주입 컨테이너.
- [autowire](https://github.com/tiendc/autowire) - 제네릭과 리플렉션을 사용한 의존성 주입.
- [boot-go](http://github.com/boot-go/boot) - Go 개발자를 위해 리플렉션을 사용한 의존성 주입으로 컴포넌트 기반 개발을 지원합니다.
- [componego](https://github.com/componego/componego) - 테스트에서 코드를 중복하지 않고도 의존성을 동적으로 교체할 수 있는 컴포넌트 기반 의존성 주입 프레임워크.
- [cosban/di](https://gitlab.com/cosban/di) - 코드 생성 기반 의존성 주입 연결 도구.
- [dig](https://github.com/uber-go/dig) - Go를 위한 리플렉션 기반 의존성 주입 툴킷.
- [dingo](https://github.com/i-love-flamingo/dingo) - Guice를 기반으로 한 Go용 의존성 주입 툴킷.
- [do](https://github.com/samber/do) - 제네릭 기반 의존성 주입 프레임워크.
- [floatdrop/di](https://github.com/floatdrop/di) - 제네릭 메서드 위에 구축된 의존성 주입 컨테이너로, 하위 스코프, 수명 주기 훅, 그리고 무엇이든 빌드되기 전의 그래프 검증을 제공합니다.
- [fx](https://github.com/uber-go/fx) - Go를 위한 의존성 주입 기반 애플리케이션 프레임워크(dig 기반).
- [go-beans](https://github.com/go-beans/go) - Spring에서 영감을 받은 Go용 의존성 주입 및 애플리케이션 수명 주기 프레임워크.
- [Go-Spring](https://github.com/go-spring/spring-core) - Spring Boot에서 영감을 받은 고성능 Go 프레임워크로, Go의 단순함과 효율성을 유지하면서 DI, 자동 설정, 수명 주기 관리를 제공합니다.
- [gocontainer](https://github.com/vardius/gocontainer) - 간단한 의존성 주입 컨테이너.
- [godi](https://github.com/junioryono/godi) - 범위 지정 수명과 제네릭을 지원하는 Go용 Microsoft 스타일 의존성 주입.
- [goioc/di](https://github.com/goioc/di) - Spring에서 영감을 받은 의존성 주입 컨테이너.
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container는 Go 프로그래밍 언어를 위한 가볍지만 강력한 IoC 의존성 주입 컨테이너입니다.
- [gontainer](https://github.com/NVIDIA/gontainer) - Go 프로젝트를 위한 의존성 주입 서비스 컨테이너.
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - GO를 위한 YAML 기반 의존성 주입 컨테이너. 의존성 스코프와 순환 의존성 자동 감지를 지원합니다. Gontainer는 동시성에 안전합니다.
- [HnH/di](https://github.com/HnH/di) - 깔끔한 API와 유연성에 초점을 맞춘 DI 컨테이너 라이브러리.
- [kinit](https://github.com/go-kata/kinit) - 전역 모드, 연쇄 초기화, 패닉에 안전한 종료 처리를 갖춘 사용자 정의 가능한 의존성 주입 컨테이너.
- [kod](https://github.com/go-kod/kod) - Go를 위한 제네릭 기반 의존성 주입 프레임워크.
- [linker](https://github.com/logrange/linker) - 컴포넌트 수명 주기를 지원하는 리플렉션 기반 의존성 주입 및 제어 역전 라이브러리.
- [nject](https://github.com/muir/nject) - 라이브러리, 테스트, HTTP 엔드포인트, 서비스 시작을 위한 타입 안전한 리플렉션 기반 프레임워크.
- [ore](https://github.com/firasdarwish/ore) - 가볍고 제네릭하며 간단한 의존성 주입(DI) 컨테이너.
- [parsley](https://github.com/matzefriedrich/parsley) - 대규모 Go 애플리케이션을 위해 설계된, 스코프 컨텍스트와 프록시 생성 같은 고급 기능을 갖춘 유연하고 모듈식인 리플렉션 기반 DI 라이브러리.
- [wire](https://github.com/Fs02/wire) - Golang을 위한 엄격한 런타임 의존성 주입.
- [yama](https://github.com/livetribe/yama) - Google Wire 그래프를 위한 시작, 정지 준비(quiesce), 중지 코드를 생성하는 컴파일 타임 의존성 주입 및 수명 주기 프레임워크.

**[⬆ 맨 위로](#contents)**

### 프로젝트 레이아웃

_프로젝트를 구조화하기 위한 **비공식** 패턴 모음._

- [ardanlabs/service](https://github.com/ardanlabs/service) - 프로덕션급의 확장 가능한 웹 서비스 애플리케이션을 구축하기 위한 [스타터 키트](https://github.com/ardanlabs/service/wiki).
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - 프로덕션 모범 사례를 따르는 프로젝트를 빠르게 시작하기 위한 Go 애플리케이션 보일러플레이트 템플릿.
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - 인기 있는 프레임워크를 사용해 Go 프로젝트를 빠르게 시작할 수 있게 해 줍니다.
- [go-ddd](https://github.com/sklinkert/go-ddd) - CQRS, 값 객체, 멱등 명령, 트랜잭셔널 아웃박스를 갖춘 도메인 주도 설계(DDD) 템플릿.
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Bazel, grpc-gateway, OpenAPI, Kubernetes를 사용하는 Go gRPC 마이크로서비스용 예제 모노레포.
- [go-module](https://github.com/octomation/go-module) - Go로 작성된 일반적인 모듈을 위한 템플릿.
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - 클린 아키텍처, JWT 인증, RBAC, PostgreSQL, Docker 핫 리로드, Swagger 문서를 갖춘, AI 친화적이고 프로덕션 환경에 바로 쓸 수 있는 Go REST API 보일러플레이트.
- [go-sample](https://github.com/zitryss/go-sample) - 실제 코드를 포함한 Go 애플리케이션 프로젝트용 샘플 레이아웃.
- [go-starter](https://github.com/allaboutapps/go-starter) - VSCode DevContainers와 긴밀하게 통합된, 설계 방향이 뚜렷하고 프로덕션 환경에 바로 쓸 수 있는 RESTful JSON 백엔드 템플릿.
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - 제품 마이크로서비스를 위한 모듈식 프로젝트 레이아웃을 사용한 Go Todo 백엔드 예제.
- [goapp](https://github.com/naughtygopher/goapp) - Go 웹 애플리케이션/서비스를 구조화하고 개발하기 위한, 설계 방향이 뚜렷한 가이드라인.
- [gobase](https://github.com/wajox/gobase) - 실제 Golang 애플리케이션을 위한 기본 설정을 갖춘 간단한 Golang 애플리케이션 뼈대.
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Go 생태계에서 예전부터 쓰여 온 일반적인 프로젝트 레이아웃 패턴과 새롭게 떠오르는 패턴 모음. 참고: 조직 이름과 달리 공식 Golang 표준을 나타내지 않습니다. 자세한 내용은 [이 이슈](https://github.com/golang-standards/project-layout/issues/117)를 참고하세요. 그럼에도 일부 사용자에게는 이 레이아웃이 유용할 수 있습니다.
- [golang-templates/seed](https://github.com/golang-templates/seed) - Go 애플리케이션용 GitHub 저장소 템플릿.
- [goxygen](https://github.com/shpota/goxygen) - Go와 Angular, React 또는 Vue로 현대적인 웹 프로젝트를 몇 초 만에 생성합니다.
- [insidieux/inizio](https://github.com/insidieux/inizio) - 플러그인을 지원하는 Golang 프로젝트 레이아웃 생성기.
- [kickstart.go](https://github.com/raeperd/kickstart.go) - 서드파티 의존성이 없는 미니멀한 단일 파일 Go HTTP 서버 템플릿.
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - 현대적인 관행을 적용한 Go 애플리케이션 보일러플레이트 및 예제.
- [nunu](https://github.com/go-nunu/nunu) - Nunu는 Go 애플리케이션 구축을 위한 스캐폴딩 도구입니다.
- [pagoda](https://github.com/mikestefanello/pagoda) - Go로 만든 빠르고 쉬운 풀스택 웹 개발 스타터 키트.
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold는 시작용 Go 프로젝트 레이아웃을 생성합니다. 비즈니스 로직 구현에 집중할 수 있게 해 줍니다.
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Go 프로젝트 레이아웃을 구조화하는 방법에 관한 관행과 논의 모음.

**[⬆ 맨 위로](#contents)**

### 문자열

_문자열을 다루기 위한 라이브러리._

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - 임의의 문자열을 생성하는 중괄호 확장(Brace Expansion) 메커니즘의 Go 구현.
- [caps](https://github.com/chanced/caps) - 대소문자 변환 라이브러리.
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - 중괄호 `{}`로 둘러싸인 **대체 필드** 형식 문자열을 구현합니다.
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - 문자열을 카멜 케이스, 스네이크 케이스, 케밥 케이스로 변환하거나 슬러그화하는 등의 문자열 조작 라이브러리.
- [str](https://github.com/schigh/str) - 변환을 조합하기 위한 파이프라인 중심의 문자열 툴킷.
- [strcase](https://github.com/charlievieth/strcase) - 표준 라이브러리 strings/bytes 패키지의 대소문자 구분 없는 구현.
- [stringFormatter](https://github.com/Wissance/stringFormatter) - 추가적인 텍스트 서식 기능을 갖춘 Python 또는 C# 방식의 문자열 포매팅.
- [strutil](https://github.com/ozgio/strutil) - 문자열 유틸리티.
- [sttr](https://github.com/abhimanyu003/sttr) - 문자열에 다양한 작업을 수행하는 크로스 플랫폼 CLI 앱.
- [xstrings](https://github.com/huandu/xstrings) - 다른 언어에서 포팅한 유용한 문자열 함수 모음.

**[⬆ 맨 위로](#contents)**

### 미분류

_다른 어떤 카테고리에도 맞지 않는 것 같아 이곳에 배치한 라이브러리입니다._

- [anagent](https://github.com/mudler/anagent) - 의존성 주입을 지원하는 미니멀하고 플러그인 가능한 Golang 이벤트 루프/타이머 핸들러.
- [antch](https://github.com/antchfx/antch) - 빠르고 강력하며 확장 가능한 웹 크롤링 및 스크래핑 프레임워크.
- [archives](https://github.com/mholt/archives) - 통합 API와 io/fs 호환 가상 파일 시스템으로 아카이브 및 압축 형식을 다루는 크로스 플랫폼 다중 형식 Go 라이브러리.
- [autoflags](https://github.com/artyom/autoflags) - 구조체 필드로부터 명령줄 플래그를 자동으로 정의하는 Go 패키지.
- [avgRating](https://github.com/kirillDanshin/avgRating) - Wilson 점수 공식을 기반으로 평균 점수와 평점을 계산합니다.
- [banner](https://github.com/dimiro1/banner) - Go 애플리케이션에 멋진 배너를 추가합니다.
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch는 숫자, 수, 알파벳, 산술, 오디오, 숫자-알파벳 캡차를 지원합니다.
- [basexx](https://github.com/bobg/basexx) - 다양한 진법의 숫자 문자열로, 숫자 문자열로부터, 그리고 그 사이에서 변환합니다.
- [battery](https://github.com/distatus/battery) - 정규화된 배터리 정보를 제공하는 크로스 플랫폼 라이브러리.
- [bitio](https://github.com/icza/bitio) - Go를 위한 고도로 최적화된 비트 단위 Reader 및 Writer.
- [browscap_go](https://github.com/digitalcrab/browscap_go) - [Browser Capabilities Project](https://browscap.org/)를 위한 GoLang 라이브러리.
- [captcha](https://github.com/steambap/captcha) - captcha 패키지는 캡차 생성을 위한 사용하기 쉽고 특정 방식을 강요하지 않는 API를 제공합니다.
- [common](https://github.com/kubeservice-stack/common) - 서버 프레임워크를 위한 라이브러리.
- [conv](https://github.com/cstockton/go-conv) - conv 패키지는 Go 타입 간의 빠르고 직관적인 변환을 제공합니다.
- [datacounter](https://github.com/miolini/datacounter) - reader/writer/http.ResponseWriter를 위한 Go 카운터.
- [fake-useragent](https://github.com/lib4u/fake-useragent) - 실제 데이터베이스를 사용하는 Golang용 최신 간단한 사용자 에이전트 위조 도구
- [faker](https://github.com/pioz/faker) - Go를 위한 무작위 가짜 데이터 및 구조체 생성기.
- [ffmt](https://github.com/go-ffmt/ffmt) - 사람이 보기 좋게 데이터를 표시합니다.
- [gatus](https://github.com/TwinProduction/gatus) - 자동화된 서비스 상태 대시보드.
- [go-commandbus](https://github.com/lana/go-commandbus) - Go를 위한 가볍고 플러그인 가능한 커맨드 버스.
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Golang용 범용 객체 풀.
- [go-openapi](https://github.com/go-openapi) - open-api 스키마를 파싱하고 활용하기 위한 패키지 모음.
- [go-resiliency](https://github.com/eapache/go-resiliency) - Golang을 위한 복원력 패턴.
- [go-unarr](https://github.com/gen2brain/go-unarr) - RAR, TAR, ZIP, 7z 아카이브용 압축 해제 라이브러리.
- [gofakeit](https://github.com/brianvoe/gofakeit) - Go로 작성된 무작위 데이터 생성기.
- [goffi](https://github.com/go-webgpu/goffi) - CGO 없이 C 라이브러리를 호출하기 위한, libffi 스타일의 타입 지정 호출 인터페이스와 구조화된 오류 처리를 갖춘 순수 Go FFI.
- [gommit](https://github.com/antham/gommit) - git 커밋 메시지를 분석하여 정의된 패턴을 따르는지 확인합니다.
- [gopsutil](https://github.com/shirou/gopsutil) - 프로세스와 시스템 사용률(CPU, 메모리, 디스크 등)을 조회하기 위한 크로스 플랫폼 라이브러리.
- [gosh](https://github.com/osamingo/gosh) - Go 통계 핸들러, 구조체, 측정 메서드를 제공합니다.
- [gosms](https://github.com/haxpax/gosms) - SMS를 보내는 데 사용할 수 있는, Go로 만든 나만의 로컬 SMS 게이트웨이.
- [gotoprom](https://github.com/cabify/gotoprom) - 공식 Prometheus 클라이언트를 위한 타입 안전 메트릭 빌더 래퍼 라이브러리.
- [gountries](https://github.com/pariz/gountries) - 국가 및 하위 행정 구역 데이터를 제공하는 패키지.
- [gtree](https://github.com/ddddddO/gtree) - Markdown이나 프로그래밍 방식으로 트리를 출력하고 디렉터리를 생성하기 위한 CLI, 패키지, 웹을 제공합니다.
- [health](https://github.com/alexliesenfeld/health) - Go를 위한 간단하고 유연한 상태 검사 라이브러리.
- [health](https://github.com/dimiro1/health) - 사용하기 쉽고 확장 가능한 상태 검사 라이브러리.
- [healthcheck](https://github.com/etherlabsio/healthcheck) - RESTful 서비스를 위한, 설계 방향이 뚜렷하고 동시성을 지원하는 상태 검사 HTTP 핸들러.
- [hostutils](https://github.com/Wing924/hostutils) - FQDN 목록을 패킹하고 언패킹하기 위한 Golang 라이브러리.
- [indigo](https://github.com/osamingo/indigo) - Sonyflake를 사용하고 Base58로 인코딩하는 분산 고유 ID 생성기.
- [lk](https://github.com/hyperboloide/lk) - Golang을 위한 간단한 라이선스 라이브러리.
- [llvm](https://github.com/llir/llvm) - 순수 Go로 LLVM IR과 상호 작용하기 위한 라이브러리.
- [metrics](https://github.com/pascaldekloe/metrics) - 메트릭 계측과 Prometheus 노출을 위한 라이브러리.
- [morse](https://github.com/alwindoss/morse) - 모스 부호와 상호 변환하는 라이브러리.
- [numa](https://github.com/lrita/numa) - NUMA는 Go로 작성된 유틸리티 라이브러리입니다. NUMA를 인식하는 코드를 작성하는 데 도움을 줍니다.
- [pdfgen](https://github.com/hyperboloide/pdfgen) - JSON 요청으로부터 PDF를 생성하는 HTTP 서비스.
- [persian](https://github.com/mavihq/persian) - Go에서 페르시아어를 위한 몇 가지 유틸리티.
- [purego](https://github.com/ebitengine/purego) - Cgo 없이 Go에서 C 함수를 호출하기 위한 라이브러리.
- [sandid](https://github.com/aofei/sandid) - 지구상의 모든 모래알이 각자의 ID를 가집니다.
- [shellwords](https://github.com/Wing924/shellwords) - UNIX Bourne 셸의 단어 파싱 규칙에 따라 문자열을 조작하는 Golang 라이브러리.
- [shortid](https://github.com/teris-io/shortid) - 매우 짧고 고유하며 순차적이지 않고 URL 친화적인 ID를 분산 생성합니다.
- [shoutrrr](https://github.com/containrrr/shoutrrr) - slack, mattermost, gotify, smtp 등 다양한 메시징 서비스에 쉽게 접근할 수 있게 해 주는 알림 라이브러리.
- [sitemap-format](https://github.com/mingard/sitemap-format) - 약간의 문법적 설탕을 곁들인 간단한 사이트맵 생성기.
- [stateless](https://github.com/qmuntal/stateless) - 상태 머신을 만들기 위한 플루언트 라이브러리.
- [stats](https://github.com/go-playground/stats) - Go MemStats와 메모리, 스왑, CPU 같은 시스템 통계를 모니터링하고 로깅 등을 위해 원하는 곳 어디로든 UDP로 전송합니다...
- [turtle](https://github.com/hackebrot/turtle) - Go를 위한 이모지.
- [url-shortener](https://github.com/pantrif/url-shortener) - mysql을 지원하는 현대적이고 강력하며 견고한 URL 단축 마이크로서비스.
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - HTTP 입출력 처리를 위한 보일러플레이트를 생성합니다.
- [varint](https://github.com/chmike/varint) - 표준 라이브러리에서 제공하는 것보다 빠른 가변 길이 정수 인코더/디코더.
- [xdg](https://github.com/rkoesters/xdg) - Go로 구현한 FreeDesktop.org(xdg) 명세.
- [xkg](https://github.com/go-xkg/xkg) - X 키보드 그래버.
- [xz](https://github.com/ulikunitz/xz) - xz로 압축된 파일을 읽고 쓰기 위한 순수 Golang 패키지.
**[⬆ 맨 위로](#contents)**

## 자연어 처리

_인간의 언어를 다루기 위한 라이브러리._

[텍스트 처리](#text-processing)와 [텍스트 분석](#text-analysis)도 참고하세요.

### 언어 감지

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - 언어 감지 API Go 클라이언트. 일괄 요청과 짧은 구문 또는 단일 단어의 언어 감지를 지원합니다.
- [getlang](https://github.com/rylans/getlang) - 빠른 자연어 감지 패키지.
- [guesslanguage](https://github.com/endeveit/guesslanguage) - 유니코드 텍스트의 자연어를 판별하는 함수.
- [lingua-go](https://github.com/pemistahl/lingua-go) - 긴 텍스트와 짧은 텍스트 모두에 적합한 정확한 자연어 감지 라이브러리. 여러 언어가 섞인 텍스트에서 여러 언어를 감지하는 기능을 지원합니다.
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Go용 자연어 감지 패키지. 84개 언어와 24개 문자 체계(예: 라틴 문자, 키릴 문자 등)를 지원합니다.

### 형태소 분석기

- [go-propisyu](https://github.com/rekurt/go-propisyu) - 문법적 성과 명사 격변화를 올바르게 적용하여 숫자를 러시아어 단어로 변환합니다.
- [go-stem](https://github.com/agonopol/go-stem) - Porter 어간 추출 알고리즘의 구현.
- [go2vec](https://github.com/danieldk/go2vec) - word2vec 임베딩을 위한 리더 및 유틸리티 함수.
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - porter 2를 포함한 snowball libstemmer 라이브러리용 Go 바인딩.
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Go에서 sentiwordnet 어휘 사전을 사용하는 감성 분석기.
- [govader](https://github.com/jonreiter/govader) - [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment)의 Go 구현.
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - [GoVader](https://github.com/jonreiter/govader)의 마이크로서비스 구현.
- [kagome](https://github.com/ikawaha/kagome) - 순수 Go로 작성된 일본어 형태소 분석기.
- [libtextcat](https://github.com/goodsign/libtextcat) - libtextcat C 라이브러리용 Cgo 바인딩. 버전 2.2와의 호환성이 보장됩니다.
- [nlp](https://github.com/james-bowman/nlp) - LSA(잠재 의미 분석)를 지원하는 Go 자연어 처리 라이브러리.
- [paicehusk](https://github.com/rookii/paicehusk) - Paice/Husk 어간 추출 알고리즘의 Golang 구현.
- [porter](https://github.com/a2800276/porter) - Martin Porter가 C로 구현한 Porter 어간 추출 알고리즘을 꽤 직관적으로 포팅한 것입니다.
- [porter2](https://github.com/zhenjl/porter2) - 정말 빠른 Porter 2 어간 추출기.
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - RAKE(Rapid Automatic Keyword Extraction) 알고리즘의 Go 포트.
- [snowball](https://github.com/goodsign/snowball) - Go용 Snowball 어간 추출기 포트(cgo 래퍼). [Snowball 네이티브](http://snowball.tartarus.org/) 어간 추출 기능을 제공합니다.
- [spaGO](https://github.com/nlpodyssey/spago) - Go로 작성된 독립형 머신러닝 및 자연어 처리 라이브러리.
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - 스페인어용 맞춤법 교정기이며, 직접 교정기를 만들 수도 있습니다.

### 슬러그 생성기

- [go-slugify](https://github.com/mozillazg/go-slugify) - 여러 언어를 지원하며 보기 좋은 슬러그를 만듭니다.
- [slug](https://github.com/gosimple/slug) - 여러 언어를 지원하는 URL 친화적인 슬러그 생성.
- [Slugify](https://github.com/avelino/slugify) - 문자열을 처리하는 Go 슬러그 생성 애플리케이션.

### 토크나이저

- [gojieba](https://github.com/yanyiwu/gojieba) - 중국어 단어 분할 알고리즘인 [jieba](https://github.com/fxsjy/jieba)의 Go 구현입니다.
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - 사전과 바이그램 언어 모델을 기반으로 한 Golang용 토크나이저. (현재는 중국어 분할만 지원)
- [gse](https://github.com/go-ego/gse) - Go의 효율적인 텍스트 분할. 영어, 중국어, 일본어 등을 지원합니다.
- [MMSEGO](https://github.com/awsong/MMSEGO) - 중국어 단어 분할 알고리즘인 [MMSEG](http://technology.chtsai.org/mmseg/)의 GO 구현입니다.
- [segment](https://github.com/blevesearch/segment) - [Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/)에 설명된 유니코드 텍스트 분할을 수행하는 Go 라이브러리
- [sentences](https://github.com/neurosnap/sentences) - 문장 토크나이저: 텍스트를 문장 목록으로 변환합니다.
- [shamoji](https://github.com/osamingo/shamoji) - shamoji는 Go로 작성된 단어 필터링 패키지입니다.
- [stemmer](https://github.com/dchest/stemmer) - Go 프로그래밍 언어용 어간 추출기 패키지. 영어 및 독일어 어간 추출기를 포함합니다.
- [textcat](https://github.com/pebbe/textcat) - utf-8과 원시 텍스트를 지원하는 n-gram 기반 텍스트 분류용 Go 패키지.

### 번역

- [ctxi18n](https://github.com/invopop/ctxi18n/) - 짧고 간결한 API, 복수형 처리, 보간, `fs.FS` 지원을 갖춘 컨텍스트 인식 i18n. YAML 로케일 정의는 [Rails i18n](https://guides.rubyonrails.org/i18n.html)을 기반으로 합니다.
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - 현지화된 텍스트를 다루기 위한 패키지와 부속 도구.
- [go-mystem](https://github.com/dveselov/mystem) - 러시아어 형태 분석기인 Yandex.Mystem용 CGo 바인딩.
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - 중국어 한자를 한어 병음으로 변환하는 변환기.
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Golang 프로젝트를 위한 단어 테이블 및 텍스트 리소스 라이브러리.
- [gotext](https://github.com/leonelquinteros/gotext) - Go용 GNU gettext 유틸리티.
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - 가능한 모든 방식으로 키릴 문자 → 라틴 문자 음역을 수행합니다.
- [spreak](https://github.com/vorlif/spreak) - gettext의 개념을 바탕으로 한 Go용 유연한 번역 및 휴머나이제이션 라이브러리.
- [t](https://github.com/youthlin/t) - GNU gettext 스타일을 따르고 .po/.mo 파일을 지원하는 또 하나의 Golang용 i18n 패키지: `t.T (gettext)`, `t.N (ngettext)` 등. 또한 text/html 템플릿에서 메시지를 pot 파일로 추출할 수 있는 명령 도구 [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate)을 포함합니다.

### 음역

- [enca](https://github.com/endeveit/enca) - 문자 인코딩을 감지하는 [libenca](https://cihar.com/software/enca/)용 최소한의 cgo 바인딩.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - 유니코드 텍스트의 ASCII 음역.
- [gounidecode](https://github.com/fiam/gounidecode) - Go용 유니코드 음역기(unidecode라고도 함).
- [transliterator](https://github.com/alexsergivan/transliterator) - 언어별 음역 규칙을 지원하는 단방향 문자열 음역을 제공합니다.

**[⬆ 맨 위로](#contents)**

## 네트워킹

_네트워크의 다양한 계층을 다루기 위한 라이브러리._

- [arp](https://github.com/mdlayher/arp) - arp 패키지는 RFC 826에 기술된 ARP 프로토콜을 구현합니다.
- [bart](https://github.com/gaissmai/bart) - bart 패키지는 매우 빠른 IP-CIDR 조회 등을 위한 균형 라우팅 테이블(BART)을 제공합니다.
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - TCP를 통한 프로토콜 버퍼 데이터 스트리밍을 쉽게 만들어 줍니다.
- [canopus](https://github.com/zubairhamed/canopus) - CoAP 클라이언트/서버 구현(RFC 7252).
- [cdns](https://github.com/junevm/cdns) - 터미널에서 DNS 서버를 손쉽게 변경합니다.
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - 자동 시작, IP 기반 접근 제어, OS 수준 네트워크 스택 튜닝을 갖춘 설정 없는 TCP/UDP 포트 프록시.
- [cidranger](https://github.com/yl2chen/cidranger) - Go를 위한 빠른 IP-CIDR 조회.
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare Tunnel 클라이언트(이전 이름 Argo Tunnel).
- [corsproxy](https://github.com/melihbirim/corsproxy) - SSRF 보호, 호스트 허용/차단 목록, 선택적 API 키 인증을 갖춘 CORS 프록시 서버.
- [dhcp6](https://github.com/mdlayher/dhcp6) - dhcp6 패키지는 RFC 3315에 기술된 DHCPv6 서버를 구현합니다.
- [dns](https://github.com/miekg/dns) - DNS를 다루기 위한 Go 라이브러리.
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - 수동 DNS 캡처/모니터링 프레임워크.
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Kubernetes 파드가 종료될 때 기존 TCP 및 UDP 연결에 실제로 어떤 일이 일어나는지 측정합니다.
- [easytcp](https://github.com/DarthPestilane/easytcp) - 메시지 라우터를 내장한, Go(Golang)로 작성된 경량 TCP 프레임워크. EasyTCP를 사용하면 TCP 서버를 쉽고 빠르게, 덜 고통스럽게 구축할 수 있습니다.
- [ether](https://github.com/songgao/ether) - 이더넷 프레임을 송수신하기 위한 크로스 플랫폼 Go 패키지.
- [ethernet](https://github.com/mdlayher/ethernet) - ethernet 패키지는 IEEE 802.3 Ethernet II 프레임과 IEEE 802.1Q VLAN 태그의 마샬링 및 언마샬링을 구현합니다.
- [event](https://github.com/cheng-zhongliang/event) - Golang으로 작성된 간단한 I/O 이벤트 알림 라이브러리.
- [expose](https://github.com/kernelshard/expose) - 로컬 서버를 인터넷에 노출하기 위한 가볍고 안전한 오픈 소스 터널링 도구.
- [fasthttp](https://github.com/valyala/fasthttp) - fasthttp 패키지는 net/http보다 최대 10배 빠른 Go용 고속 HTTP 구현입니다.
- [fibersse](https://github.com/vinod-morya/fibersse) - 이벤트 병합, 우선순위 레인, 토픽 와일드카드, 적응형 스로틀링, 내장 인증을 갖춘 Fiber v3용 프로덕션급 Server-Sent Events(SSE).
- [fortio](https://github.com/fortio/fortio) - 부하 테스트 라이브러리 및 명령줄 도구, 고급 에코 서버와 웹 UI. 초당 쿼리 수를 지정해 부하를 걸고, 지연 시간 히스토그램과 기타 유용한 통계를 기록해 그래프로 볼 수 있습니다. Tcp, Http, gRPC를 지원합니다.
- [ftp](https://github.com/jlaffaye/ftp) - ftp 패키지는 [RFC 959](https://tools.ietf.org/html/rfc959)에 기술된 FTP 클라이언트를 구현합니다.
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - 모든 기능을 갖춘 FTP 서버 라이브러리.
- [fullproxy](https://github.com/shoriwe/fullproxy) - SOCKS5, HTTP, 원시 포트, 리버스 프록시 프로토콜을 지원하며 스크립트로 제어하고 데몬으로 설정할 수 있는, 모든 기능을 갖춘 프록시 및 피버팅 툴킷.
- [fwdctl](https://github.com/alegrey91/fwdctl) - Linux 서버에서 IPTables 포워딩을 관리하기 위한 간단하고 직관적인 CLI.
- [gaio](https://github.com/xtaci/gaio) - 프로액터 모드로 동작하는 Golang용 고성능 비동기 I/O 네트워킹.
- [gev](https://github.com/Allenxuxu/gev) - gev는 리액터 모드를 기반으로 한 가볍고 빠른 논블로킹 TCP 네트워크 라이브러리입니다.
- [gldap](https://github.com/jimlambrt/gldap) - gldap은 LDAP 서버 구현을 제공하며, 사용자는 LDAP 작업을 위한 핸들러를 제공하면 됩니다.
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt는 MQTT 프로토콜 V3.1.1을 완전히 구현한 유연한 고성능 MQTT 브로커 라이브러리입니다.
- [gnet](https://github.com/panjf2000/gnet) - `gnet`은 순수 Go로 작성된 고성능, 경량, 논블로킹, 이벤트 기반 네트워킹 프레임워크입니다.
- [gnet](https://github.com/fish-tennis/gnet) - `gnet`은 특히 게임 서버를 위한 고성능 네트워킹 프레임워크입니다.
- [gNxI](https://github.com/google/gnxi) - gNMI 및 gNOI 프로토콜을 사용하는 네트워크 관리 도구 모음.
- [go-getter](https://github.com/hashicorp/go-getter) - URL을 사용해 다양한 소스에서 파일이나 디렉터리를 다운로드하기 위한 Go 라이브러리.
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - http.Get/Post 대체 함수나 http.Client RoundTripper 드롭인을 통해, 장애 허용, 로드 밸런싱, 자동 재시도, 쿠키 관리 등을 제공하는 프록시 풀로 HTTP 요청을 보내기 위한 라이브러리
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - HTTPS SNI 추출 기능을 갖춘 경량 실시간 패킷 캡처 라이브러리.
- [go-powerdns](https://github.com/joeig/go-powerdns) - Golang용 PowerDNS API 바인딩.
- [go-sse](https://github.com/lampctl/go-sse) - HTML 서버 전송 이벤트(server-sent events)의 Go 클라이언트 및 서버 구현.
- [go-stun](https://github.com/ccding/go-stun) - STUN 클라이언트(RFC 3489 및 RFC 5389)의 Go 구현.
- [gobgp](https://github.com/osrg/gobgp) - Go 프로그래밍 언어로 구현한 BGP.
- [gopacket](https://github.com/google/gopacket) - libpcap 바인딩을 갖춘 패킷 처리용 Go 라이브러리.
- [gopcap](https://github.com/akrennmair/gopcap) - libpcap용 Go 래퍼.
- [GoProxy](https://github.com/elazarl/goproxy) - Go로 사용자 정의 HTTP/HTTPS 프록시 서버를 만들기 위한 라이브러리.
- [goshark](https://github.com/sunwxg/goshark) - goshark 패키지는 tshark를 사용해 IP 패킷을 디코딩하고 패킷 분석을 위한 데이터 구조체를 생성합니다.
- [gosnmp](https://github.com/soniah/gosnmp) - SNMP 작업을 수행하기 위한 네이티브 Go 라이브러리.
- [gotcp](https://github.com/gansidui/gotcp) - TCP 애플리케이션을 빠르게 작성하기 위한 Go 패키지.
- [grab](https://github.com/cavaliercoder/grab) - 파일 다운로드를 관리하기 위한 Go 패키지.
- [graval](https://github.com/koofr/graval) - 실험적인 FTP 서버 프레임워크.
- [gws](https://github.com/lxzan/gws) - AsyncIO를 지원하는 고성능 WebSocket 서버 및 클라이언트.
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs를 사용하면 HTTP 요청을 검사하고 응답을 위조할 수 있습니다.
- [httpproxy](https://github.com/wzshiming/httpproxy) - HTTP 프록시 핸들러 및 다이얼러.
- [iplib](https://github.com/c-robinson/iplib) - Python [ipaddress](https://docs.python.org/3/library/ipaddress.html)와 Ruby [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html)에서 영감을 받은, IP 주소(net.IP, net.IPNet)를 다루기 위한 라이브러리
- [jazigo](https://github.com/udhos/jazigo) - Jazigo는 여러 네트워크 장치의 설정을 가져오기 위해 Go로 작성된 도구입니다.
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP - 빠르고 신뢰할 수 있는 ARQ 프로토콜.
- [lhttp](https://github.com/fanux/lhttp) - 강력한 WebSocket 프레임워크로, IM 서버를 더 쉽게 구축할 수 있습니다.
- [linkio](https://github.com/ian-kent/linkio) - Reader/Writer 인터페이스를 위한 네트워크 링크 속도 시뮬레이션.
- [llb](https://github.com/kirillDanshin/llb) - 매우 간단하지만 빠른 프록시 서버용 백엔드입니다. 메모리 할당 없이 미리 정의된 도메인으로 빠르게 리디렉션하고 빠르게 응답하는 데 유용합니다.
- [macwifi](https://github.com/jaisonerick/macwifi) - macOS 13+를 위한 Wi-Fi 스캔 및 키체인 비밀번호 조회.
- [mdns](https://github.com/hashicorp/mdns) - Golang으로 작성된 간단한 mDNS(멀티캐스트 DNS) 클라이언트/서버 라이브러리.
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Paho Go 클라이언트는 TCP, TLS 또는 WebSocket을 통해 MQTT 브로커에 연결하기 위한 MQTT 클라이언트 라이브러리를 제공합니다.
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - 임베디드 시스템에 적합한, 아주 간단하고 할당이 없는 저수준 MQTT 구현.
- [nbio](https://github.com/lesismal/nbio) - 100만 개 이상의 연결을 처리하는 순수 Go 솔루션으로, tls/http1.x/websocket을 지원하고 기본적으로 net/http와 호환되며, 고성능에 메모리 비용이 낮고, 논블로킹, 이벤트 기반이며 사용하기 쉽습니다.
- [net](https://golang.org/x/net) - 보조 Go 네트워킹 라이브러리를 담고 있는 저장소입니다.
- [netchan](https://github.com/matveynator/netchan) - Golang을 위한 네트워크 채널(netchan): 안전하고 클러스터에 바로 적용할 수 있으며 중첩 채널과 모든 데이터 타입을 지원합니다. Rob Pike에게서 영감을 받았습니다.
- [nethawk](https://github.com/Flowtriq/nethawk) - JSON 출력 모드를 갖춘 실시간 네트워크 트래픽 캡처, 분석, 공격 탐지용 터미널 UI.
- [netpoll](https://github.com/cloudwego/netpoll) - ByteDance가 개발한, RPC 시나리오에 초점을 맞춘 고성능 논블로킹 I/O 네트워킹 프레임워크.
- [NFF-Go](https://github.com/intel-go/nff-go) - 클라우드 및 베어메탈용 고성능 네트워크 기능을 빠르게 개발하기 위한 프레임워크(이전 이름 YANFF).
- [nodepass](https://github.com/NodePassProject/nodepass) - 미리 수립된 TCP/QUIC/WebSocket 또는 HTTP/2 연결을 사용해 네트워크 제한을 넘어 빠르고 안정적인 접근을 제공하는 안전하고 효율적인 TCP/UDP 터널링 솔루션.
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - UDP 멀티캐스트를 사용한 크로스 플랫폼 로컬 피어 탐색을 위한 순수 Go 라이브러리.
- [portproxy](https://github.com/aybabtme/portproxy) - CORS를 지원하지 않는 API에 CORS 지원을 추가하는 간단한 TCP 프록시.
- [proxq](https://github.com/psyb0t/docker-proxq) - 각 요청을 Redis 큐에 넣고 응답을 폴링할 수 있는 작업 ID를 반환하는 비동기 리버스 프록시로, 경로 접두사 라우팅, 재시도, 캐싱을 지원합니다.
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - PostgreSQL 서버 와이어 프로토콜. 직접 서버를 구축하고 연결을 처리해 보세요.
- [publicip](https://github.com/polera/publicip) - publicip 패키지는 외부에 공개된 IPv4 주소(인터넷 송신 주소)를 반환합니다.
- [quic-go](https://github.com/lucas-clemente/quic-go) - 순수 Go로 구현한 QUIC 프로토콜.
- [roamr](https://github.com/sourabh-khot65/roamr) - 주변의 저장된 WiFi 네트워크에 점수를 매겨 어떤 것을 왜 사용해야 하는지 알려 주는 CLI.
- [sdns](https://github.com/semihalev/sdns) - 개인정보 보호에 초점을 맞추고 DNSSEC를 지원하는 고성능 재귀 DNS 리졸버 서버.
- [sftp](https://github.com/pkg/sftp) - sftp 패키지는 <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt>에 기술된 SSH 파일 전송 프로토콜을 구현합니다.
- [ssh](https://github.com/gliderlabs/ssh) - SSH 서버 구축을 위한 고수준 API(crypto/ssh를 감쌈).
- [sslb](https://github.com/eduardonunesp/sslb) - 아주 간단한 로드 밸런서(Super Simples Load Balancer)로, 어느 정도의 성능을 달성하기 위한 작은 프로젝트입니다.
- [stun](https://github.com/go-rtc/stun) - RFC 5389 STUN 프로토콜의 Go 구현.
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack은 Go 프로그램에서 바이트 스트림을 패킹하고 언패킹하기 위한 TCP 기반 애플리케이션 프로토콜입니다.
- [tspool](https://github.com/two/tspool) - 워커 풀을 사용해 성능을 높이고 서버를 보호하는 TCP 라이브러리.
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - [gVisor](https://gvisor.dev/) TCP/IP 스택으로 구동되는 tun2socks의 순수 Go 구현.
- [utp](https://github.com/anacrolix/utp) - Go uTP 마이크로 전송 프로토콜 구현.
- [vssh](https://github.com/yahoo/vssh) - SSH 프로토콜을 통한 네트워크 및 서버 자동화를 구축하기 위한 Go 라이브러리.
- [water](https://github.com/songgao/water) - 간단한 TUN/TAP 라이브러리.
- [webrtc](https://github.com/pions/webrtc) - WebRTC API의 순수 Go 구현.
- [winrm](https://github.com/masterzen/winrm) - Windows 컴퓨터에서 원격으로 명령을 실행하기 위한 Go WinRM 클라이언트.
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - 자동 재연결, 지수 백오프, 하트비트 관리를 갖춘 복원력 있는 WebSocket 클라이언트.
- [xtcp](https://github.com/xfxdev/xtcp) - 동시 전이중 통신, 정상 종료, 사용자 정의 프로토콜을 지원하는 TCP 서버 프레임워크.

**[⬆ 맨 위로](#contents)**

### HTTP 클라이언트

_HTTP 요청을 보내기 위한 라이브러리._

- [axios4go](https://github.com/rezmoss/axios4go) - Axios에서 영감을 받아 HTTP 요청을 위한 간단하고 직관적인 API를 제공하는 Go HTTP 클라이언트 라이브러리.
- [azuretls-client](https://github.com/Noooste/azuretls-client) - TLS/JA3 및 HTTP2 지문을 위장하기 위한, 100% Go로 작성된 사용하기 쉬운 HTTP 클라이언트.
- [fast-shot](https://github.com/opus-domini/fast-shot) - Go의 가장 빠르고 간단한 HTTP 클라이언트로 API 대상을 속사포처럼 정확하게 호출합니다.
- [gentleman](https://github.com/h2non/gentleman) - 모든 기능을 갖춘 플러그인 기반 HTTP 클라이언트 라이브러리.
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - 다른 클라이언트와 어떤 상태도 공유하지 않는 표준 라이브러리 HTTP 클라이언트를 쉽게 얻을 수 있습니다.
- [go-http-client](https://github.com/bozd4g/go-http-client) - HTTP 호출을 간단하고 쉽게 수행합니다.
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - 여러 소스 IP를 기반으로 HTTP 요청을 다중화하기 위한 라이브러리.
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - HTTP 요청에 대한 OpenTelemetry 메트릭을 내보내는 Go http.RoundTripper.
- [go-req](https://github.com/wenerme/go-req) - 선언적 Golang HTTP 클라이언트.
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - Go로 작성된 재시도 가능한 HTTP 클라이언트.
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Web Fetch API에서 영감을 받은 강력하고 가볍고 쉬운 HTTP 클라이언트.
- [Grequest](https://github.com/lib4u/grequest)  - HTTP 요청을 위한 간단하고 가벼운 Golang 패키지. 강력한 net/http를 기반으로 합니다
- [grequests](https://github.com/levigross/grequests) - 훌륭하고 유명한 Requests 라이브러리의 Go "클론".
- [hedge](https://github.com/bhope/hedge) - Go를 위한 적응형 헤지 요청. Google의 "The Tail at Scale" 논문을 바탕으로 설정 없이 p99 지연 시간을 줄여 줍니다.
- [heimdall](https://github.com/gojektech/heimdall) - 재시도와 hystrix 기능을 갖춘 향상된 HTTP 클라이언트.
- [httpretry](https://github.com/ybbus/httpretry) - Go 기본 HTTP 클라이언트에 재시도 기능을 더해 줍니다.
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - 바이트 단위까지 정확한 브라우저 TLS(JA3/JA4) 및 HTTP/2(Akamai) 지문을 갖춘 드롭인 net/http.Client.
- [pester](https://github.com/sethgrid/pester) - 재시도, 백오프, 동시성을 지원하는 Go HTTP 클라이언트 호출.
- [req](https://github.com/imroc/req) - 흑마법(더 적은 코드와 더 높은 효율)을 갖춘 간단한 Go HTTP 클라이언트.
- [request](https://github.com/monaco-io/request) - Golang용 HTTP 클라이언트. axios나 requests를 사용해 본 적이 있다면 마음에 들 것입니다. 서드파티 의존성이 없습니다.
- [requests](https://github.com/carlmjohnson/requests) - Gopher를 위한 HTTP 요청. context.Context를 사용하고 내부의 net/http.Client를 숨기지 않아 표준 Go API와 호환됩니다. 테스트 도구도 포함합니다.
- [resty](https://github.com/go-resty/resty) - Ruby rest-client에서 영감을 받은 Go용 간단한 HTTP 및 REST 클라이언트.
- [rq](https://github.com/ddo/rq) - Golang 표준 라이브러리 HTTP 클라이언트를 위한 더 나은 인터페이스.
- [sling](https://github.com/dghubble/sling) - Sling은 API 요청을 생성하고 보내기 위한 Go HTTP 클라이언트 라이브러리입니다.
- [surf](https://github.com/enetx/surf) - HTTP/1.1, HTTP/2, HTTP/3(QUIC), SOCKS5 프록시 지원과 브라우저 수준의 TLS 지문을 갖춘 고급 HTTP 클라이언트.
- [tls-client](https://github.com/bogdanfinn/tls-client) - 요청에 사용할 특정 클라이언트 TLS 지문을 선택하는 옵션을 갖춘 net/http.Client 유사 HTTP 클라이언트.

**[⬆ 맨 위로](#contents)**

## OpenGL

_Go에서 OpenGL을 사용하기 위한 라이브러리._

- [gl](https://github.com/go-gl/gl) - OpenGL용 Go 바인딩(glow로 생성).
- [glfw](https://github.com/go-gl/glfw) - GLFW 3용 Go 바인딩.
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - [glMatrix](https://glmatrix.net/) 라이브러리의 Go 포트.
- [goxjs/gl](https://github.com/goxjs/gl) - Go 크로스 플랫폼 OpenGL 바인딩(OS X, Linux, Windows, 브라우저, iOS, Android).
- [goxjs/glfw](https://github.com/goxjs/glfw) - OpenGL 컨텍스트를 생성하고 이벤트를 수신하기 위한 Go 크로스 플랫폼 glfw 라이브러리.
- [mathgl](https://github.com/go-gl/mathgl) - GLM에서 영감을 받은, 3D 수학에 특화된 순수 Go 수학 패키지.

**[⬆ 맨 위로](#contents)**

## ORM

_객체-관계 매핑(ORM) 또는 데이터 매핑 기법을 구현하는 라이브러리._

- [bob](https://github.com/stephenafamo/bob) - Go용 SQL 쿼리 빌더 및 ORM/팩토리 생성기. SQLBoiler의 후속작입니다.
- [bun](https://github.com/uptrace/bun) - SQL 우선 Golang ORM. go-pg의 후속작입니다.
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Go를 위한 스키마 기반의 타입 지정 Redis 캐싱/메모이제이션 프레임워크.
- [CQL](https://github.com/FrancoLiberali/cql) - GORM 위에 구축되어 자동 생성 코드를 기반으로 컴파일 타임에 검증되는 쿼리를 추가합니다.
- [ent](https://github.com/facebook/ent) - Go를 위한 엔티티 프레임워크. 데이터 모델링과 조회를 위한 간단하지만 강력한 ORM입니다.
- [go-dbw](https://github.com/hashicorp/go-dbw) - 데이터베이스 작업을 캡슐화한 간단한 패키지.
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - Google/Firebase Cloud Firestore를 위한 간단한 ORM.
- [go-sql](https://github.com/rushteam/gosql) - mysql을 위한 쉬운 ORM.
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - 유연하고 강력한 SQL 문자열 빌더 라이브러리와 설정 없는 ORM.
- [go-store](https://github.com/gosuri/go-store) - Go를 위한 간단하고 빠른 Redis 기반 키-값 저장소 라이브러리.
- [golobby/orm](https://github.com/golobby/orm) - 개발자의 행복을 위한 간단하고 빠르며 타입 안전한 제네릭 ORM.
- [GoooQo](https://github.com/doytowin/goooqo) - 선언적 쿼리 모델을 기반으로 한 데이터베이스 접근 프레임워크.
- [GORM](https://github.com/go-gorm/gorm) - 개발자 친화적인 것을 목표로 하는 Golang용 환상적인 ORM 라이브러리.
- [gormt](https://github.com/xxjwxc/gormt) - Mysql 데이터베이스를 Golang gorm 구조체로 변환합니다.
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence, Go를 위한 ORM 스타일 라이브러리.
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire는 Golang을 위한 데이터베이스 접근 계층 및 유효성 검사 도구입니다. (지원: MySQL, PostgreSQL, SQLite3).
- [lore](https://github.com/abrahambotros/lore) - Go를 위한 간단하고 가벼운 유사 ORM/유사 구조체 매핑 환경.
- [marlow](https://github.com/marlow/marlow) - 컴파일 타임 안전성 보장을 위해 프로젝트 구조체로부터 생성되는 ORM.
- [pop/soda](https://github.com/gobuffalo/pop) - MySQL, PostgreSQL, SQLite를 위한 데이터베이스 마이그레이션, 생성, ORM 등...
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go, Go를 위한 타입 안전 데이터베이스 접근.
- [reform](https://github.com/go-reform/reform) - 비어 있지 않은 인터페이스와 코드 생성을 기반으로 한 더 나은 Go용 ORM.
- [rel](https://github.com/go-rel/rel) - Golang을 위한 현대적인 데이터베이스 접근 계층 - 테스트 가능하고 확장 가능하며 깔끔하고 우아한 API로 다듬어졌습니다.
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - ORM 생성기. 데이터베이스 스키마에 맞춘 기능이 풍부하고 매우 빠른 ORM을 생성합니다.
- [upper.io/db](https://github.com/upper/db) - 성숙한 데이터베이스 드라이버를 감싸는 어댑터를 사용해 다양한 데이터 소스와 상호 작용하기 위한 단일 인터페이스.
- [XORM](https://gitea.com/xorm/xorm) - Go를 위한 간단하고 강력한 ORM. (지원: MySQL, MyMysql, PostgreSQL, Tidb, SQLite3, MsSql, Oracle).
- [Zoom](https://github.com/albrow/zoom) - Redis 위에 구축된 매우 빠른 데이터 저장소 및 쿼리 엔진.

**[⬆ 맨 위로](#contents)**

## 패키지 관리

_의존성 및 패키지 관리를 위한 공식 도구_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - 모듈은 소스 코드 교환과 버전 관리의 단위입니다. go 명령은 다른 모듈에 대한 의존성의 기록과 해결을 포함하여 모듈 작업을 직접 지원합니다.

_패키지 및 의존성 관리를 위한 비공식 라이브러리._

- [gup](https://github.com/nao1215/gup) - "go install"로 설치한 바이너리를 업데이트합니다.
- [modup](https://github.com/chaindead/modup) - 오래된 모듈 감지와 선택적 업그레이드를 지원하는 Go 의존성 업데이트용 터미널 UI.
- [syft](https://github.com/anchore/syft) - 컨테이너 이미지와 파일 시스템으로부터 소프트웨어 자재 명세서(SBOM)를 생성하는 CLI 도구 및 Go 라이브러리.

**[⬆ 맨 위로](#contents)**

## 성능

- [ebpf-go](https://github.com/cilium/ebpf) - eBPF 프로그램을 로드, 컴파일, 디버깅하기 위한 유틸리티를 제공합니다.
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - 모든 메서드와 함수에 스팬을 자동으로 추가합니다.
- [go-perfstat](https://github.com/go-perfstat/go) - Go를 위한 경량 성능 통계 및 실행 시간 집계.
- [jaeger](https://github.com/jaegertracing/jaeger) - 분산 추적 시스템.
- [mm-go](https://github.com/joetifa2003/mm-go) - Golang을 위한 제네릭 수동 메모리 관리.
- [otelinji](https://github.com/hedhyw/otelinji) - 함수에 스팬을 추가하기 위한 OpenTelemetry 자동 계측 도구.
- [pixie](https://github.com/pixie-labs/pixie) - eBPF를 통해 계측 없이 Golang 애플리케이션을 추적합니다.
- [profile](https://github.com/pkg/profile) - Go를 위한 간단한 프로파일링 지원 패키지.
- [statsviz](https://github.com/arl/statsviz) - Go 애플리케이션 런타임 통계의 실시간 시각화.
- [tracer](https://github.com/kamilsk/tracer) - 간단하고 가벼운 추적.

**[⬆ 맨 위로](#contents)**

## 쿼리 언어

- [api-fu](https://github.com/ccbrown/api-fu) - 포괄적인 GraphQL 구현.
- [dasel](https://github.com/tomwright/dasel) - 명령줄에서 셀렉터를 사용해 데이터 구조를 조회하고 업데이트합니다. jq/yq와 비슷하지만 런타임 의존성 없이 JSON, YAML, TOML, XML을 지원합니다.
- [gnata](https://github.com/RecoLabs/gnata) - JSONata 2.x 쿼리 및 변환 언어의 순수 Go 구현.
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - JSON 데이터를 조회하기 위한 간단한 Go 패키지.
- [goven](https://github.com/SeldonIO/goven) - 어떤 데이터베이스 스키마에도 바로 적용할 수 있는 쿼리 언어.
- [gqlgen](https://github.com/99designs/gqlgen) - go generate 기반 GraphQL 서버 라이브러리.
- [grapher](https://github.com/reaganiwadha/grapher) - Go 제네릭을 활용하며 추가 유틸리티와 기능을 갖춘 GraphQL 필드 빌더.
- [graphql](https://github.com/neelance/graphql-go) - 사용 편의성에 초점을 맞춘 GraphQL 서버.
- [graphql-go](https://github.com/graphql-go/graphql) - Go를 위한 GraphQL 구현.
- [gws](https://github.com/Zaba505/gws) - Apollo의 "GraphQL over Websocket" 클라이언트 및 서버 구현.
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - JSONPath 문법을 기반으로 JSON의 일부를 조회하기 위한 쿼리 라이브러리.
- [jsonql](https://github.com/elgs/jsonql) - Golang으로 작성된 JSON 쿼리 표현식 라이브러리.
- [jsonslice](https://github.com/bhmj/jsonslice) - 고급 필터를 지원하는 Jsonpath 쿼리.
- [mql](https://github.com/hashicorp/mql) - Model Query Language(mql)는 데이터베이스 모델을 위한 쿼리 언어입니다.
- [play](https://github.com/paololazzari/play) - grep, sed, awk, jq, yq 같은 즐겨 쓰는 프로그램을 실험해 볼 수 있는 TUI 플레이그라운드.
- [rql](https://github.com/a8m/rql) - REST API를 위한 리소스 쿼리 언어.
- [rqp](https://github.com/timsolov/rest-query-parser) - REST API를 위한 쿼리 파서. 쿼리에서 필터링, 유효성 검사, `AND`와 `OR` 연산을 직접 지원합니다.
- [straf](https://github.com/SonicRoshan/straf) - Golang 구조체를 GraphQL 객체로 쉽게 변환합니다.

**[⬆ 맨 위로](#contents)**

## 리플렉션

- [copy](https://github.com/gotidy/copy) - 서로 다른 타입의 구조체를 빠르게 복사하기 위한 패키지.
- [Deepcopier](https://github.com/ulule/deepcopier) - Go를 위한 간단한 구조체 복사.
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - 빠른 깊은 복사 라이브러리.
- [goenum](https://github.com/lvyahui8/goenum) - 열거형을 빠르게 정의하고 유용한 기본 메서드 모음을 사용할 수 있게 해 주는, 제네릭과 리플렉션 기반의 공통 열거형 구조체.
- [gotype](https://github.com/wzshiming/gotype) - reflect 패키지처럼 사용하는 Golang 소스 코드 파싱.
- [gpath](https://github.com/tenntenn/gpath) - 리플렉션에서 Go 표현식으로 구조체 필드에 쉽게 접근할 수 있게 해 주는 라이브러리.
- [objwalker](https://github.com/rekby/objwalker) - 리플렉션으로 Go 객체를 순회합니다.
- [reflectpro](https://github.com/gontainer/reflectpro) - Go를 위한 호출자, 복사기, getter, setter.
- [reflectutils](https://github.com/muir/reflectutils) - 리플렉션 작업을 위한 헬퍼: 구조체 태그 파싱, 재귀 순회, 문자열로부터 값 채우기.

**[⬆ 맨 위로](#contents)**

## 리소스 임베딩

- [debme](https://github.com/leaanthony/debme) - 기존 `embed.FS`의 하위 디렉터리로부터 `embed.FS`를 생성합니다.
- [embed](https://pkg.go.dev/embed) - embed 패키지는 실행 중인 Go 프로그램에 임베드된 파일에 대한 접근을 제공합니다.
- [rebed](https://github.com/soypat/rebed) - Go 1.16의 `embed.FS` 타입으로부터 폴더 구조와 파일을 다시 생성합니다
- [vfsgen](https://github.com/shurcooL/vfsgen) - 주어진 가상 파일 시스템을 정적으로 구현하는 vfsdata.go 파일을 생성합니다.

**[⬆ 맨 위로](#contents)**

## 과학 및 데이터 분석

_과학 계산과 데이터 분석을 위한 라이브러리._

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - 쌍대 비교를 위한 Bradley-Terry 모델을 제공합니다.
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Github 기여 활동에서 영감을 받아 순수 Go로 만든 캘린더 히트맵.
- [chart](https://github.com/vdobler/chart) - Go를 위한 간단한 차트 플로팅 라이브러리. 다양한 그래프 유형을 지원합니다.
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - 머신러닝과 통계를 위한 데이터프레임(pandas와 유사).
- [decimal](https://github.com/db47h/decimal) - decimal 패키지는 임의 정밀도 십진 부동 소수점 연산을 구현합니다.
- [entitydebs](https://github.com/ndabAP/entitydebs) - 내장 의존 구문 분석기를 사용해 논픽션 텍스트의 개체를 프로그래밍 방식으로 분석하는 사회과학 도구.
- [evaler](https://github.com/soniah/evaler) - 간단한 부동 소수점 산술 표현식 평가기.
- [ewma](https://github.com/VividCortex/ewma) - 지수 가중 이동 평균.
- [geom](https://github.com/skelterjohn/geom) - Golang을 위한 2D 기하학.
- [go-dsp](https://github.com/mjibson/go-dsp) - Go를 위한 디지털 신호 처리.
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Go로 작성된 상태 추정 및 필터링 알고리즘.
- [go-gt](https://github.com/ThePaw/go-gt) - "Go" 언어로 작성된 그래프 이론 알고리즘.
- [go-hep](https://github.com/go-hep/hep) - 고에너지 물리학 분석을 쉽게 수행하기 위한 라이브러리 및 도구 모음.
- [godesim](https://github.com/soypat/godesim) - 간단한 API를 갖춘, 이벤트 기반 시뮬레이션을 위한 확장/다변수 ODE 솔버 프레임워크.
- [goent](https://github.com/kzahedi/goent) - 엔트로피 측정의 GO 구현.
- [gograph](https://github.com/hmdsefi/gograph) - 수학적 그래프 이론과 알고리즘을 제공하는 Golang 제네릭 그래프 라이브러리.
- [gonum](https://github.com/gonum/gonum) - Gonum은 Go 프로그래밍 언어를 위한 수치 라이브러리 모음입니다. 행렬, 통계, 최적화 등을 위한 라이브러리를 포함합니다.
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot은 Go에서 플롯을 만들고 그리기 위한 API를 제공합니다.
- [goraph](https://github.com/gyuho/goraph) - 순수 Go 그래프 이론 라이브러리(자료 구조, 알고리즘 시각화).
- [gosl](https://github.com/cpmech/gosl) - 선형 대수, FFT, 기하학, NURBS, 수치 해석, 확률, 최적화, 미분 방정식 등을 위한 Go 과학 라이브러리.
- [GoStats](https://github.com/OGFris/GoStats) - GoStats는 주로 머신러닝 분야에서 사용되는 수리 통계용 오픈 소스 GoLang 라이브러리로, 대부분의 통계 측정 함수를 다룹니다.
- [graph](https://github.com/yourbasic/graph) - 기본 그래프 알고리즘 라이브러리.
- [hdf5](https://github.com/scigolib/hdf5) - 과학 데이터 저장 및 교환을 위한 HDF5 파일 형식의 순수 Go 구현.
- [insyra](https://github.com/HazelnutParadise/insyra) - 통계, 시각화, Parquet 지원, Python 연동을 갖춘 데이터 분석 라이브러리.
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - graphviz를 지원하는 JSONL 그래프 조작 도구.
- [matlab](https://github.com/scigolib/matlab) - CGO 없이 MATLAB .mat 파일(v5-v7.3)을 읽고 쓰기 위한 순수 Go 라이브러리.
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go는 Go에서 수리 계획 문제(예: 볼록 최적화 문제)를 정의하기 위한 오픈 소스 패키지입니다.
- [matrix](https://github.com/Arceus-7/matrix) - 산술 연산, 분해, 선형 시스템 풀이를 지원하는, 깔끔하고 제네릭하며 의존성 없는 Go용 행렬 수학 패키지.
- [ode](https://github.com/ChristopherRabotin/ode) - 확장 상태와 채널 기반 반복 중지 조건을 지원하는 상미분 방정식(ODE) 솔버.
- [orb](https://github.com/paulmach/orb) - 클리핑, GeoJSON, Mapbox Vector Tile을 지원하는 2D 기하 타입.
- [pagerank](https://github.com/alixaxel/pagerank) - Go로 구현한 가중 PageRank 알고리즘.
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - 작은 선형 보간 라이브러리.
- [PiHex](https://github.com/claygod/PiHex) - 16진수 원주율(Pi)을 위한 "Bailey-Borwein-Plouffe" 알고리즘 구현.
- [Poly](https://github.com/bebop/poly) - 생물체 공학을 위한 Go 패키지.
- [rootfinding](https://github.com/khezen/rootfinding) - 이차 함수의 근을 찾기 위한 근 찾기 알고리즘 라이브러리.
- [simd](https://github.com/tphakala/simd) - 다중 아키텍처 어셈블리 가속을 지원하는, 슬라이스에 대한 네이티브 Go 벡터 및 SIMD 연산.
- [sparse](https://github.com/james-bowman/sparse) - 과학 및 머신러닝 애플리케이션을 지원하는 선형 대수용 Go 희소 행렬 형식으로, gonum 행렬 라이브러리와 호환됩니다.
- [stats](https://github.com/montanaflynn/stats) - Golang 표준 라이브러리에 없는 일반적인 함수를 담은 통계 패키지.
- [streamtools](https://github.com/nytlabs/streamtools) - 데이터 스트림을 다루기 위한 범용 그래픽 도구.
- [taxonkit](https://github.com/shenwei356/taxonkit) - 실용적이고 효율적인 NCBI 분류 체계 툴킷. 계통 조회, 형식 변환, 필터링, 사용자 정의 taxdump 파일 생성을 지원합니다.
- [TextRank](https://github.com/DavidBelicza/TextRank) - 확장 가능한 기능(요약, 가중치 부여, 구문 추출)과 멀티스레딩(고루틴)을 지원하는 TextRank의 Golang 구현.
- [topk](https://github.com/keilerkonzept/topk) - HeavyKeeper 알고리즘을 기반으로 한 슬라이딩 윈도 및 일반 top-K 스케치.
- [triangolatte](https://github.com/tchayen/triangolatte) - 2D 삼각 분할 라이브러리. (점 기반의) 선과 다각형을 GPU의 언어로 변환할 수 있습니다.

**[⬆ 맨 위로](#contents)**

## 보안

_애플리케이션을 더 안전하게 만드는 데 도움이 되는 라이브러리._

- [acme-proxy](https://github.com/esnet/acme-proxy) - 인터넷에 80번 포트를 열지 않고 ACME http-01 챌린지를 해결하고, 외부 인증 기관에서 인증서를 발급받습니다.
- [acmetool](https://github.com/hlandau/acme) - 자동 갱신을 지원하는 ACME(Let's Encrypt) 클라이언트 도구.
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Go를 위한 작고 암호학적으로 안전한 비밀번호 생성 패키지.
- [acra](https://github.com/cossacklabs/acra) - 데이터베이스 기반 애플리케이션을 데이터 유출로부터 보호하는 네트워크 암호화 프록시: 강력한 선택적 암호화, SQL 인젝션 방지, 침입 탐지 시스템.
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - NIST SP 800-90A에 명시된, 카운터 모드 AES 기반 결정적 난수 비트 생성기(AES-CTR-DRBG).
- [age](https://github.com/FiloSottile/age) - 작고 명시적인 키, 설정 옵션 없음, UNIX 스타일의 조합성을 갖춘 간단하고 현대적이며 안전한 암호화 도구(및 Go 라이브러리).
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Go 표준 라이브러리의 Bcrypt 및 simple-scrypt 패키지와 거의 동일한 방식으로 동작하는, Go argon2 패키지의 가벼운 래퍼.
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Let's Encrypt 인증서를 자동으로 발급하고 TLS 서버를 시작합니다.
- [BadActor](https://github.com/jaredfolkins/badactor) - fail2ban의 정신을 이어받아 만든 인메모리, 애플리케이션 주도형 차단 도구.
- [beelzebub](https://github.com/mariocandela/beelzebub) - 시스템 가상화에 AI를 활용하는 안전한 로우코드 허니팟 프레임워크.
- [booster](https://github.com/anatol/booster) - 전체 디스크 암호화를 지원하는 빠른 initramfs 생성기.
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - 정규식 규칙 엔진, 이상 점수 산정, IP/DNS/ASN/국가 블랙리스트, 속도 제한을 갖춘 Caddy 서버용 웹 애플리케이션 방화벽 미들웨어.
- [Cameradar](https://github.com/Ullaakut/cameradar) - 감시 카메라의 RTSP 스트림을 원격으로 해킹하는 도구 및 라이브러리.
- [canery](https://github.com/rluders/canery) - 플러그인 방식의 평가 모델을 갖춘 최소한의 무상태 권한 부여 엔진.
- [certificates](https://github.com/mvmaasakkers/certificates) - TLS 인증서를 생성하기 위한, 설계 방향이 뚜렷한 도구.
- [CertMagic](https://github.com/caddyserver/certmagic) - 완전 관리형 TLS 인증서 발급 및 갱신을 위한 성숙하고 견고하며 강력한 ACME 클라이언트 통합.
- [Coraza](https://github.com/corazawaf/coraza) - 엔터프라이즈 환경에 적합하며 modsecurity 및 OWASP CRS와 호환되는 WAF 라이브러리.
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - 프로덕션 배포 전에 ModSecurity 및 Coraza SecLang WAF 규칙을 검증하는 독립형 CLI 도구.
- [Crenox](https://github.com/crenoxhq/crenox) - 고성능 자격 증명 유출 탐지를 위해 Aho-Corasick을 사용하는 의존성 없는 pre-commit 비밀 정보 스캐너.
- [deidentify](https://github.com/aliengiraffe/deidentify) - 텍스트와 구조화된 데이터에서 개인 식별 정보를 결정적이고 형식을 보존하는 방식으로 제거합니다.
- [dongle](https://github.com/golang-module/dongle) - 인코딩/디코딩과 암호화/복호화를 위한 간단하고 의미론적이며 개발자 친화적인 Golang 패키지.
- [dotlock](https://github.com/ahmadraza100/dotlock) - 여러 환경과 프로필에 걸쳐 비밀 정보를 관리하기 위한 대화형 TUI를 갖춘 암호화된 .env 볼트 관리자.
- [encid](https://github.com/bobg/encid) - 암호화된 정수 ID를 인코딩하고 디코딩합니다.
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - 숫자, 비밀번호, 그리고 잘 쓰이지 않는 사전 단어에 기호와 숫자를 섞어 만든 비밀번호 등 무작위 문자열을 안전하게 생성하는, 다양한 명령줄 인수를 갖춘 엔트로피 비밀번호 생성기.
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Linux 서버의 firewalld 규칙을 동적으로 업데이트하는 REST 애플리케이션.
- [fort](https://github.com/djadmin/fort) - 16가지 항목에 걸쳐 macOS 보안 설정을 감사하고 점수를 보고하며, 안전하게 고칠 수 있는 문제는 수정합니다. 단일 바이너리이며 Homebrew로 설치할 수 있습니다.
- [go-generate-password](https://github.com/m1/go-generate-password) - CLI 또는 라이브러리로 사용할 수 있는 비밀번호 생성기.
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Go용 Apache htpasswd 파서.
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - 원시 암호학적 엔트로피 값을 기반으로 한 비밀번호 유효성 검사기.
- [go-peer](https://github.com/number571/go-peer) - 안전하고 익명성을 보장하는 탈중앙화 시스템을 만들기 위한 소프트웨어 라이브러리.
- [go-yara](https://github.com/hillu/go-yara) - "악성코드 연구자(그리고 다른 모든 사람)를 위한 패턴 매칭 맥가이버 칼"인 [YARA](https://github.com/plusvic/yara)의 Go 바인딩.
- [goArgonPass](https://github.com/dwin/goArgonPass) - 기존 Python 및 PHP 구현과 호환되도록 설계된 Argon2 비밀번호 해시 및 검증.
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - 비밀번호를 안전하게 해시하고 암호화하기 위한, 다소 편집증적일지도 모르는 패키지.
- [gost-crypto](https://github.com/rekurt/gost-crypto) - OpenSSL gost-engine을 기반으로 한 러시아 GOST 암호 표준(디지털 서명, Streebog 해시, Kuznechik 암호, MGM AEAD)용 Go 라이브러리.
- [grim](https://github.com/ijin82/grim) - 휘발성 메모리에서 암호화된 Markdown 노트 볼트를 관리하는 빠르고 안전한 CLI 도구.
- [gspy](https://github.com/Mutasem-mk4/gspy) - 실행 중인 Go 프로세스를 위한 포렌식용 고루틴-시스템 호출 검사기.
- [Interpol](https://github.com/avahidi/interpol) - 퍼징과 침투 테스트를 위한 규칙 기반 데이터 생성기.
- [leakhound](https://github.com/nilpoona/leakhound) - 민감한 구조체 필드가 실수로 로깅되는 것을 감지하여 로그를 통한 데이터 유출을 방지하는 정적 분석 도구.
- [lego](https://github.com/go-acme/lego) - 순수 Go ACME 클라이언트 라이브러리 및 CLI 도구(Let's Encrypt와 함께 사용).
- [luks.go](https://github.com/anatol/luks.go) - LUKS 파티션을 관리하기 위한 순수 Golang 라이브러리.
- [mcprobe](https://github.com/tamish560/mcprobe) - 프롬프트 인젝션 탐지, 도구 섀도잉 검사, SARIF 출력을 갖춘 MCP 서버용 보안 스캐너.
- [memguard](https://github.com/awnumar/memguard) - 메모리에서 민감한 값을 다루기 위한 순수 Go 라이브러리.
- [mist](https://github.com/iSerganov/mist) - X25519와 ChaCha20-Poly1305를 사용해 압축 오디오 안에 암호화된 메시지를 숨기는 비대칭 키 오디오 스테가노그래피 라이브러리.
- [multikey](https://github.com/adrianosela/multikey) - Shamir의 비밀 공유 알고리즘을 기반으로 한 N개 중 n개 키 암호화/복호화 프레임워크.
- [nacl](https://github.com/kevinburke/nacl) - NaCL API 모음의 Go 구현.
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - 헤더, JSON, XML, URL 인코딩 데이터, JWT, PEM 키, 벤더 토큰을 포함하여 로그 줄과 HTTP 덤프에서 비밀 정보를 한 번에 제거합니다.
- [optimus-go](https://github.com/pjebs/optimus-go) - Knuth 알고리즘을 사용한 ID 해싱 및 난독화.
- [osv-scanner](https://github.com/google/osv-scanner) - OSV가 제공하는 데이터를 사용하는, Go로 작성된 취약점 스캐너.
- [passlib](https://github.com/hlandau/passlib) - 미래에도 대비된 비밀번호 해싱 라이브러리.
- [passwap](https://github.com/zitadel/passwap) - 서로 다른 비밀번호 해싱 알고리즘 간에 통일된 구현을 제공합니다
- [pii-shield](https://github.com/pii-shield/pii-shield) - 로그에서 개인 식별 정보(PII)를 제거하는, 코드 수정이 필요 없는 Kubernetes용 로그 정제 사이드카.
- [pm](https://github.com/nicola-strappazzon/password-manager) - OpenPGP 암호화로 데이터를 저장하는, Go로 작성된 Unix 스타일 비밀번호 관리자.
- [procscope](https://github.com/Mutasem-mk4/procscope) - eBPF를 사용해 프로세스 수명 주기, 파일 활동, 네트워크 연결을 추적하는 프로세스 범위 런타임 조사 도구.
- [qrand](https://github.com/bitfield/qrand) - 양자역학적으로 안전한 난수 데이터를 제공하는 ANU Quantum Numbers(AQN) API용 클라이언트.
- [Razify](https://github.com/Hossiy21/razify) - 유출된 비밀 정보와 환경 불일치를 찾기 위해 .env 파일을 스캔, 검증, 감사하는 CLI.
- [redact](https://github.com/alesr/redact) - 설정 가능한 파이프라인을 사용해 slog 기반 로그에서 민감한 정보를 제거합니다.
- [SafeDep/vet](https://github.com/safedep/vet) - 악성 오픈 소스 패키지로부터 보호합니다.
- [secret](https://github.com/rsjethani/secret) - 비밀 정보가 로그, std\* 등으로 유출되는 것을 방지합니다.
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - 비밀번호, 패스프레이즈, 비밀 값, API 키, PIN을 위한 버전 관리형 JSON 스키마를 갖춘 CSPRNG 기반 자격 증명 생성기.
- [secure](https://github.com/unrolled/secure) - 몇 가지 보안 강화를 빠르게 적용할 수 있게 해 주는 Go용 HTTP 미들웨어.
- [secureio](https://github.com/xaionaro-go/secureio) - XChaCha20-poly1305, ECDH, ED25519를 기반으로 한 `io.ReadWriteCloser`용 키 교환+인증+암호화 래퍼 및 멀티플렉서.
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - 간단하고 명확한 API와 자동 비용 보정 기능이 내장된 Scrypt 패키지.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - SSH 키를 사용한 암호화/복호화.
- [sslmgr](https://github.com/adrianosela/sslmgr) - acme/autocert를 감싼 고수준 래퍼로 SSL 인증서를 쉽게 다룹니다.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf는 웹 기반 공격을 방어하고 Go 기반 웹 애플리케이션의 보안을 강화하기 위해 teler IDS 기능을 제공하는 Go HTTP 미들웨어입니다. 설정 폭이 넓고 기존 Go 애플리케이션에 쉽게 통합할 수 있습니다.
- [themis](https://github.com/cossacklabs/themis) - 일반적인 데이터 보안 작업(안전한 데이터 저장, 안전한 메시징, 영지식 증명 인증)을 해결하기 위한 고수준 암호화 라이브러리로, 14개 언어에서 사용할 수 있으며 멀티 플랫폼 앱에 가장 적합합니다.
- [urusai](https://github.com/calpa/urusai) - Urusai(일본어로 "시끄러운")는 브라우징 중에 디지털 연막을 만들어 개인정보 보호를 돕는 무작위 HTTP/DNS 트래픽 노이즈 생성기의 Go 구현입니다.
- [veil](https://github.com/getveil/veil) - AI 코딩 에이전트로부터 API 자격 증명을 숨기는 로컬 HTTPS 프록시. OS 키체인 연동, 형식 인식 플레이스홀더, SQLite 감사 로그를 제공합니다.
- [y509](https://github.com/kanywst/y509) - 인증서 체인이 검증되는지, 그리고 별도로 서버가 이를 올바르게 제공했는지를 보고하는 X.509 인증서 체인용 TUI.


**[⬆ 맨 위로](#contents)**

## 직렬화

_바이너리 직렬화를 위한 라이브러리와 도구._

- [bambam](https://github.com/glycerine/bambam) - Go로부터 Cap'n Proto 스키마를 생성하는 생성기.
- [bel](https://github.com/32leaves/bel) - Go 구조체/인터페이스로부터 TypeScript 인터페이스를 생성합니다. JSON RPC에 유용합니다.
- [binstruct](https://github.com/ghostiam/binstruct) - 데이터를 구조체에 매핑하는 Golang 바이너리 디코더.
- [cbor](https://github.com/fxamacker/cbor) - 작고 안전하며 쉬운 CBOR 인코딩 및 디코딩 라이브러리.
- [colfer](https://github.com/pascaldekloe/colfer) - Colfer 바이너리 형식을 위한 코드 생성.
- [csvutil](https://github.com/jszwec/csvutil) - 네이티브 Go 구조체와의 고성능 관용적 CSV 레코드 인코딩 및 디코딩.
- [elastic](https://github.com/epiclabs-io/elastic) - 슬라이스, 맵 또는 기타 알 수 없는 값을 런타임에 어떤 경우든 다른 타입으로 변환합니다.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - 고정 폭 텍스트 포매팅(UTF-8 지원).
- [fwencoder](https://github.com/o1egl/fwencoder) - Go용 고정 폭 파일 파서(인코딩 및 디코딩 라이브러리).
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Go용 Cap'n Proto 라이브러리 및 파서.
- [go-codec](https://github.com/ugorji/go) - 런타임 기반 또는 코드 생성을 지원하는, msgpack, cbor, json을 위한 고성능의 기능이 풍부하고 관용적인 인코딩, 디코딩, RPC 라이브러리.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - 고수준의 풍부한 기능을 갖춘 CSV 직렬화/역직렬화 라이브러리.
- [goprotobuf](https://github.com/golang/protobuf) - 라이브러리와 프로토콜 컴파일러 플러그인 형태로 제공되는, Google 프로토콜 버퍼의 Go 지원.
- [gotiny](https://github.com/raszia/gotiny) - 효율적인 Go 직렬화 라이브러리로, gotiny는 코드를 생성하는 직렬화 라이브러리만큼이나 빠릅니다.
- [jsoniter](https://github.com/json-iterator/go) - "encoding/json"과 100% 호환되는 고성능 드롭인 대체품.
- [mus-go](https://github.com/mus-format/mus-go) - Go용 MUS 형식 직렬화기.
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - PHP 세션 형식과 PHP Serialize/Unserialize 함수를 다루기 위한 GoLang 라이브러리.
- [pletter](https://github.com/vimeda/pletter) - 메시지 브로커를 위해 proto 메시지를 감싸는 표준 방식.
- [proto](https://github.com/emicklei/proto) - Google ProtocolBuffers .proto 파일용 파서 및 라이터.
- [structomap](https://github.com/tuvistavie/structomap) - 정적 구조체로부터 맵을 쉽고 동적으로 생성하는 라이브러리.
- [unitpacking](https://github.com/recolude/unitpacking) - 단위 벡터를 가능한 한 적은 바이트로 패킹하는 라이브러리.

**[⬆ 맨 위로](#contents)**

## 서버 애플리케이션

- [algernon](https://github.com/xyproto/algernon) - Lua, Markdown, GCSS, Amber를 기본 지원하는 HTTP/2 웹 서버.
- [Caddy](https://github.com/caddyserver/caddy) - Caddy는 설정하고 사용하기 쉬운 대안 HTTP/2 웹 서버입니다.
- [Casdoor](https://github.com/casdoor/casdoor) - OAuth 2.0, OIDC, SAML, CAS, LDAP를 지원하고 웹 UI를 갖춘 ID 및 접근 관리(IAM) 및 싱글 사인온(SSO) 서버.
- [consul](https://www.consul.io/) - Consul은 서비스 디스커버리, 모니터링, 설정을 위한 도구입니다.
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - 메트릭 레이블을 기반으로 Cortex 테넌트 ID 헤더를 추가하는 Prometheus 원격 쓰기 프록시.
- [devd](https://github.com/cortesi/devd) - 개발자를 위한 로컬 웹 서버.
- [discovery](https://github.com/Bilibili/discovery) - 복원력 있는 중간 계층 로드 밸런싱과 장애 조치를 위한 레지스트리.
- [dudeldu](https://github.com/krotik/dudeldu) - 간단한 SHOUTcast 서버.
- [Easegress](https://github.com/megaease/easegress) - 관측 가능성과 확장성을 갖춘 클라우드 네이티브 고가용성/고성능 트래픽 오케스트레이션 시스템.
- [Engity's Bifröst](https://bifroest.engity.org/) - 사용자 권한 부여와 세션 실행 방식(로컬 또는 컨테이너)을 여러 가지로 지정할 수 있는, 사용자 정의 폭이 넓은 SSH 서버.
- [etcd](https://github.com/etcd-io/etcd) - 공유 설정과 서비스 디스커버리를 위한 고가용성 키-값 저장소.
- [Euterpe](https://github.com/ironsmile/euterpe) - 웹 UI와 REST API가 내장된 셀프 호스팅 음악 스트리밍 서버.
- [Fider](https://github.com/getfider/fider) - Fider는 고객 피드백을 수집하고 정리하기 위한 오픈 플랫폼입니다.
- [Flagr](https://github.com/checkr/flagr) - Flagr는 오픈 소스 기능 플래그 및 A/B 테스트 서비스입니다.
- [flipt](https://github.com/markphelps/flipt) - Go와 Vue.js로 작성된 독립형 기능 플래그 솔루션
- [flue](https://github.com/karnstack/flue) - 터미널 세션을 브라우저 탭으로 제공하는 셀프 호스팅 데몬. 탭을 닫은 후에도 세션은 계속 실행됩니다.
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - 100% 오픈 소스인 간단하고 완전하며 가벼운 셀프 호스팅 기능 플래그 솔루션.
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Redis를 사용하고 Go로 작성된, 캐싱을 지원하는 간단한 리버스 프록시.
- [gondola](https://github.com/bmf-san/gondola) - YAML 기반 Golang 리버스 프록시.
- [goshs](https://github.com/patrickhener/goshs) - 파일 업로드/다운로드, WebDAV, SFTP, SMB, TLS, 인증, 공유 링크를 지원하는 SimpleHTTPServer 대체품.
- [Kono](https://github.com/starwalkn/kono) - Go로 작성된 가볍고 확장 가능한 API 게이트웨이 - 병렬 팬아웃, 유연한 집계, 마법 같은 무설정 동작을 제공합니다.
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - lets-encrypt에서 즉석으로 인증서를 발급받아 HTTPS를 처리하는 리버스 프록시.
- [minio](https://github.com/pgsty/minio) - 커뮤니티가 유지 관리하는 minio(객체 스토리지 서비스) 포크.
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy는 간단한 목(mock) 및 프록시 애플리케이션 서버로, 목 엔드포인트를 만들 수 있을 뿐 아니라 엔드포인트에 대한 목이 없을 경우 요청을 프록시할 수도 있습니다.
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Nginx 로그 파서 및 Prometheus 익스포터.
- [nsq](https://nsq.io/) - 실시간 분산 메시징 플랫폼.
- [OpenRun](https://github.com/openrundev/openrun) - Google Cloud Run과 AWS App Runner의 오픈 소스 대안. 팀 전체에 내부 도구를 쉽게 배포합니다.
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase는 실시간 구독, 내장 인증 관리 등을 갖춘 임베디드 데이터베이스(SQLite)로 구성된, 단일 파일 실시간 백엔드입니다.
- [protoxy](https://github.com/camgraff/protoxy) - JSON 요청 본문을 Protocol Buffers로 변환하는 프록시 서버.
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - PostgreSQL의 데이터베이스 이벤트를 Kafka로 스트리밍합니다.
- [relay](https://github.com/valtors/relay) - AI 에이전트를 위한 40개 이상의 도구를 갖춘 MCP 서버. 파일 작업, 웹 검색, 스크린샷, 멀티 에이전트 조정을 지원합니다. 단일 Go 바이너리입니다.
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Riemann 이벤트를 로드 밸런싱하거나 Carbon으로 변환하는 릴레이.
- [RoadRunner](https://github.com/spiral/roadrunner) - 고성능 PHP 애플리케이션 서버, 로드 밸런서 및 프로세스 관리자.
- [SFTPGo](https://github.com/drakkan/sftpgo) - 선택적으로 FTP/S와 WebDAV를 지원하는, 모든 기능을 갖추고 설정 폭이 넓은 SFTP 서버. 로컬 파일 시스템과 S3, Google Cloud Storage 같은 클라우드 스토리지 백엔드를 제공할 수 있습니다.
- [simpleconf](https://github.com/shaunlee/simpleconf) - 하나의 JSON 문서를 보관하고 HTTP와 TCP를 통해 키 경로로 읽고 쓰며, 선택적으로 Raft 클러스터링을 지원하는 설정 서버.
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTP 리버스 프록시 캐시 및 시계열 가속기.
- [wd-41](https://github.com/baalimago/wd-41) - 파일 변경 시 자동 라이브 리로드를 지원하는 웹 개발((w)eb (d)evelopment) 서버.
- [whois](https://github.com/KincaidYang/whois) - 도메인, IPv4/IPv6 주소, CIDR, ASN을 위한 셀프 호스팅 WHOIS/RDAP 조회 서비스 및 MCP 서버.
- [Wish](https://github.com/charmbracelet/wish) - SSH 앱을 뚝딱 만들어 보세요!

**[⬆ 맨 위로](#contents)**

## 스트림 처리

_스트림 처리와 반응형 프로그래밍을 위한 라이브러리와 도구._

- [go-etl](https://github.com/Breeze0806/go-etl) - 데이터 소스 추출, 변환, 적재(ETL)를 위한 경량 툴킷.
- [go-streams](https://github.com/reugn/go-streams) - Go 스트림 처리 라이브러리.
- [goio](https://github.com/primetalk/goio) - 멋진 Scala 라이브러리인 cats와 fs2에서 영감을 받은, Golang용 IO, Stream, Fiber 구현.
- [gostream](https://github.com/mariomac/gostream) - Java Streams API에서 영감을 받은 타입 안전 스트림 처리 라이브러리.
- [machine](https://github.com/whitaker-io/machine) - 메트릭과 추적 기능이 내장된 스트림 워커를 작성하고 생성하기 위한 Go 라이브러리.
- [nibbler](https://github.com/naughtygopher/nibbler) - 마이크로 배치 처리를 위한 경량 패키지.
- [ro](https://github.com/samber/ro) - 반응형 프로그래밍: 이벤트 기반 애플리케이션을 위한 선언적이고 조합 가능한 API.
- [signals](https://github.com/coregx/signals) - Angular Signals에서 영감을 받아 계산된 값, 이펙트, 의존성 추적을 제공하는 타입 안전 반응형 상태 관리.
- [stream](https://github.com/youthlin/stream) - Java 8 Stream과 같은 Go Stream: Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce...
- [StreamSQL](https://github.com/rulego/streamsql) - 실시간 데이터 처리를 위한 경량 스트리밍 SQL 엔진.

**[⬆ 맨 위로](#contents)**

## 템플릿 엔진

_템플릿 처리와 렉싱을 위한 라이브러리와 도구._

- [bagme](https://github.com/boxesandglue/bagme) - 순수 Go로 TeX 수준의 조판 품질을 제공하는 HTML/CSS-PDF 렌더링.
- [ego](https://github.com/benbjohnson/ego) - Go로 템플릿을 작성할 수 있게 해 주는 경량 템플릿 언어. 템플릿은 Go로 변환된 뒤 컴파일됩니다.
- [fasttemplate](https://github.com/valyala/fasttemplate) - 간단하고 빠른 템플릿 엔진. [text/template](https://golang.org/pkg/text/template/)보다 최대 10배 빠르게 템플릿 플레이스홀더를 치환합니다.
- [gomponents](https://www.gomponents.com) - 순수 Go로 작성하는 HTML 5 컴포넌트로, 대략 다음과 같은 모습입니다: `func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`.
- [got](https://github.com/goradd/got) - Hero와 Fasttemplate에서 영감을 받은 Go 코드 생성기. 파일 포함, 사용자 정의 태그 정의, Go 코드 주입, 언어 번역 등을 지원합니다.
- [goview](https://github.com/foolin/goview) - Goview는 Go 웹 애플리케이션 구축을 위한, Golang html/template 기반의 가볍고 미니멀하며 관용적인 템플릿 라이브러리입니다.
- [gox](https://github.com/doors-dev/gox) - 매끄러운 에디터 지원과 함께 HTML 템플릿을 일급 Go 표현식으로 다룹니다.
- [htmgo](https://htmgo.dev) - go + htmx로 간단하고 확장 가능한 시스템을 구축합니다
- [jet](https://github.com/CloudyKit/jet) - Jet 템플릿 엔진.
- [liquid](https://github.com/osteele/liquid) - Shopify Liquid 템플릿의 Go 구현.
- [liquidgo](https://github.com/Notifuse/liquidgo) - Shopify Liquid 템플릿 엔진의 완전한 Go 구현.
- [maroto](https://github.com/johnfercher/maroto) - maroto 방식으로 PDF를 만듭니다. Maroto는 Bootstrap에서 영감을 받았고 gofpdf를 사용합니다. 빠르고 간단합니다.
- [pongo2](https://github.com/flosch/pongo2) - Go를 위한 Django 스타일 템플릿 엔진.
- [quicktemplate](https://github.com/valyala/quicktemplate) - 빠르고 강력하면서도 사용하기 쉬운 템플릿 엔진. 템플릿을 Go 코드로 변환한 다음 컴파일합니다.
- [Razor](https://github.com/sipin/gorazor) - Golang용 Razor 뷰 엔진.
- [Soy](https://github.com/robfig/soy) - [공식 명세](https://developers.google.com/closure/templates/)를 따르는 Go용 Closure 템플릿(일명 Soy 템플릿).
- [sprout](https://github.com/go-sprout/sprout) - Go 템플릿을 위한 유용한 템플릿 함수.
- [tbd](https://github.com/lucasepe/tbd) - 플레이스홀더가 있는 텍스트 템플릿을 만드는 정말 간단한 방법 - 추가로 내장 Git 저장소 메타데이터를 제공합니다.
- [templ](https://github.com/a-h/templ) - 훌륭한 개발자 도구를 갖춘 HTML 템플릿 언어.
- [templator](https://github.com/alesr/templator) - Go를 위한 타입 안전 HTML 템플릿 렌더링 엔진.

**[⬆ 맨 위로](#contents)**

## 테스트

_코드베이스를 테스트하고 테스트 데이터를 생성하기 위한 라이브러리._

### 테스트 프레임워크

- [apitest](https://apitest.dev) - 외부 HTTP 호출 목킹과 시퀀스 다이어그램 렌더링을 지원하는, REST 기반 서비스나 HTTP 핸들러를 위한 간단하고 확장 가능한 동작 테스트 라이브러리.
- [arch-go](https://github.com/arch-go/arch-go) - Go 프로젝트를 위한 아키텍처 테스트 도구.
- [assay](https://github.com/tushariitr-19/assay) - 결정적 검사, CI에 바로 쓸 수 있는 종료 코드, 코드 없는 YAML 기반 테스트로 Go 에이전트와 MCP 서버를 테스트하는, 프레임워크에 구애받지 않는 평가 라이브러리.
- [assert](https://github.com/go-playground/assert) - 사용자 정의 어서션을 위한 구성 요소를 갖추고 Go 기본 테스트와 함께 사용하는 기본 어서션 라이브러리.
- [axiom](https://github.com/Nikita-Filonov/axiom) - 픽스처, 훅, 재시도, 메타데이터, 플러그인, 병렬 실행을 갖춘 조합 가능한 Go 테스트 프레임워크.
- [baloo](https://github.com/h2non/baloo) - 표현력 있고 다재다능한 엔드투엔드 HTTP API 테스트를 쉽게 만들어 줍니다.
- [be](https://github.com/carlmjohnson/be) - 미니멀한 제네릭 테스트 어서션 라이브러리.
- [biff](https://github.com/fulldump/biff) - BDD와 호환되는 분기(bifurcation) 테스트 프레임워크.
- [charlatan](https://github.com/percolate/charlatan) - 테스트용 가짜 인터페이스 구현을 생성하는 도구.
- [commander](https://github.com/SimonBaeumer/commander) - windows, linux, osx에서 CLI 애플리케이션을 테스트하기 위한 도구.
- [coverage](https://github.com/jbunds/coverage) - Go 테스트 커버리지를 위한 간단한 웹 UI와 재사용 가능한 GitHub Action인 [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report).
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - 테스트 프레임워크를 위한 간단한 스냅숏 테스트 애드온.
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Ruby의 `database_cleaner`에서 영감을 받아 테스트 목적으로 데이터베이스를 정리합니다.
- [dft](https://github.com/abecodes/dft) - 테스트(또는 그 이상)를 위한 가볍고 의존성 없는 docker 컨테이너.
- [dsunit](https://github.com/viant/dsunit) - SQL, NoSQL, 구조화된 파일을 위한 데이터 저장소 테스트.
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - 다른 Go 애플리케이션이나 테스트의 일부로 Linux, OSX, Windows에서 실제 Postgres 데이터베이스를 로컬로 실행합니다.
- [endly](https://github.com/viant/endly) - 선언적 엔드투엔드 기능 테스트.
- [envite](https://github.com/PerimeterX/envite) - 개발 및 테스트 환경 관리 프레임워크.
- [fixenv](https://github.com/rekby/fixenv) - pytest 픽스처에서 영감을 받은 픽스처 관리 엔진.
- [flute](https://github.com/suzuki-shunsuke/flute) - HTTP 클라이언트 테스트 프레임워크.
- [frisby](https://github.com/verdverm/frisby) - REST API 테스트 프레임워크.
- [gherkingen](https://github.com/hedhyw/gherkingen) - BDD 보일러플레이트 생성기 및 프레임워크.
- [ginkgo](https://onsi.github.io/ginkgo/) - Go용 BDD 테스트 프레임워크.
- [gnomock](https://github.com/orlangure/gnomock) - 목 없이 Docker에서 실행되는 실제 의존성(데이터베이스, 캐시, 심지어 Kubernetes나 AWS까지)으로 통합 테스트를 수행합니다.
- [go-carpet](https://github.com/msoap/go-carpet) - 터미널에서 테스트 커버리지를 확인하는 도구.
- [go-cmp](https://github.com/google/go-cmp) - 테스트에서 Go 값을 비교하기 위한 패키지.
- [go-hit](https://github.com/Eun/go-hit) - Hit은 Golang으로 작성된 HTTP 통합 테스트 프레임워크입니다.
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - 클라이언트 테스트를 위한 다양한 엔드포인트를 갖춘 HTTP 테스트 및 디버깅 도구.
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - CI 품질 게이트, 커버리지를 고려한 MSI, 기준선 추적, git-diff 필터링을 갖춘 Go용 변이 테스트.
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - MySQL 통합 테스트를 돕는 Golang MySQL 테스트 컨테이너.
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Golang에서의 Jest 스타일 스냅숏 테스트.
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - 설정된 임계값보다 낮은 파일의 커버리지를 보고하는 도구.
- [go-testdeep](https://github.com/maxatome/go-testdeep) - go testing 패키지를 확장하는, 매우 유연한 Golang 깊은 비교.
- [go-testing](https://github.com/tkrop/go-testing) - gomock과 gock을 확장한 고급 목 지원을 제공하여, 강하게 격리된 단위, 컴포넌트, 통합 테스트를 간단하게 설정할 수 있게 해 주는 Go 테스트 확장.
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - 풍부한 진단 출력을 제공하는 테스트 조건자 스타일 어서션 라이브러리.
- [go-vcr](https://github.com/dnaeon/go-vcr) - 빠르고 결정적이며 정확한 테스트를 위해 HTTP 상호 작용을 기록하고 재생합니다.
- [goblin](https://github.com/franela/goblin) - Mocha 같은 Go 테스트 프레임워크.
- [goc](https://github.com/qiniu/goc) - Goc는 Go 프로그래밍 언어를 위한 종합적인 커버리지 테스트 시스템입니다.
- [gocheck](https://labix.org/gocheck) - gotest를 대체하는 더 발전된 테스트 프레임워크.
- [GoConvey](https://github.com/smartystreets/goconvey/) - 웹 UI와 라이브 리로드를 갖춘 BDD 스타일 프레임워크.
- [gocrest](https://github.com/corbym/gocrest) - Go 어서션을 위한 조합 가능한 hamcrest 스타일 매처.
- [godog](https://github.com/cucumber/godog) - Go용 Cucumber BDD 프레임워크.
- [gofight](https://github.com/appleboy/gofight) - Golang 라우터 프레임워크를 위한 API 핸들러 테스트.
- [gogiven](https://github.com/corbym/gogiven) - Go를 위한 YATSPEC 스타일 BDD 테스트 프레임워크.
- [gomatch](https://github.com/jfilipczyk/gomatch) - JSON을 패턴과 대조하여 테스트하기 위해 만든 라이브러리.
- [gomega](https://onsi.github.io/gomega/) - Rspec 같은 매처/어서션 라이브러리.
- [gospecify](https://github.com/stesla/gospecify) - Go 코드를 테스트하기 위한 BDD 문법을 제공합니다. rspec 같은 라이브러리를 사용해 본 사람이라면 익숙할 것입니다.
- [gosuite](https://github.com/pavlo/gosuite) - Go1.7의 서브테스트를 활용해 setup/teardown 기능을 갖춘 가벼운 테스트 스위트를 `testing`에 도입합니다.
- [got](https://github.com/ysmood/got) - 즐겁게 사용할 수 있는 Golang 테스트 프레임워크.
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - go testing 패키지를 보강하고 일반적인 패턴을 지원하는 패키지 모음.
- [Hamcrest](https://github.com/rdrdr/hamcrest) - 입력 값에 적용하면 스스로를 설명하는 결과를 생성하는 선언적 Matcher 객체를 위한 플루언트 프레임워크.
- [httper](https://github.com/gustofarbi/httper) - 스크립팅, 어서션, gRPC, 부하 테스트를 지원하는 JetBrains .http 파일용 CLI 실행기.
- [httpexpect](https://github.com/gavv/httpexpect) - 간결하고 선언적이며 사용하기 쉬운 엔드투엔드 HTTP 및 REST API 테스트.
- [is](https://github.com/matryer/is) - Go를 위한 전문적인 경량 테스트 미니 프레임워크.
- [jsonassert](https://github.com/kinbiko/jsonassert) - JSON 페이로드가 올바르게 직렬화되었는지 검증하기 위한 패키지.
- [keploy](https://github.com/keploy/keploy) - API 호출로부터 테스트 케이스와 데이터 목을 자동으로 생성합니다.
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - 테스트를 위해 비공개 필드의 값을 변경하는 간단한 라이브러리.
- [restit](https://github.com/yookoala/restit) - RESTful API 통합 테스트 작성을 돕는 Go 마이크로 프레임워크.
- [schema](https://github.com/jgroeneveld/schema) - 요청과 응답에 사용되는 JSON 스키마를 위한 빠르고 쉬운 표현식 매칭.
- [should](https://github.com/Kairum-Labs/should) - 의존성이 없고 자세한 구조체 비교와 사람이 읽기 쉬운 오류 메시지를 제공하는 테스트 라이브러리.
- [stop-and-go](https://github.com/elgohr/stop-and-go) - 동시성 테스트 헬퍼.
- [testcase](https://github.com/adamluzsi/testcase) - 행위 주도 개발(BDD)을 위한 관용적인 테스트 프레임워크.
- [testcerts](https://github.com/madflojo/testcerts) - 테스트 함수 안에서 자체 서명 인증서와 인증 기관을 동적으로 생성합니다.
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - 자동화된 통합/스모크 테스트를 위한 컨테이너 기반 의존성을 간단하게 생성하고 정리할 수 있게 해 주는 Go 패키지. 깔끔하고 사용하기 쉬운 API로 테스트의 일부로 실행할 컨테이너를 프로그래밍 방식으로 정의하고, 테스트가 끝나면 해당 리소스를 정리할 수 있습니다.
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - 데이터베이스 애플리케이션을 테스트하기 위한 Rails 스타일 테스트 픽스처 헬퍼.
- [Testify](https://github.com/stretchr/testify) - 표준 go testing 패키지의 신성한 확장.
- [Testo](https://github.com/ozontech/testo) - 스위트, 병렬 테스트, 훅, 매개변수화를 갖춘 플러그인 기반 테스트 프레임워크. Pytest에서 영감을 받았습니다.
- [testsql](https://github.com/zhulongcheng/testsql) - 테스트 전에 SQL 파일로부터 테스트 데이터를 생성하고 완료 후 정리합니다.
- [testza](https://github.com/MarvinJWendt/testza) - 보기 좋은 컬러 출력을 갖춘, 모든 기능을 갖춘 테스트 프레임워크.
- [tparse](https://github.com/mfridman/tparse) - go test 출력을 요약하는 CLI 도구. 파이프 친화적이며 go test 플래그와 호환됩니다.
- [trial](https://github.com/jgroeneveld/trial) - 보일러플레이트를 많이 추가하지 않는 빠르고 쉬운 확장 가능한 어서션.
- [Tt](https://github.com/vcaesar/tt) - 간단하고 다채로운 테스트 도구.
- [wstest](https://github.com/posener/wstest) - WebSocket http.Handler를 단위 테스트하기 위한 WebSocket 클라이언트.

### 목(Mock)

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - 독립적인 목 객체를 생성하기 위한 도구.
- [fabricator](https://github.com/Goldziher/fabricator) - factory_boy와 interface-forge에서 영감을 받은, Go에서 목과 가짜 데이터를 생성하기 위한 타입 안전 팩토리.
- [genmock](https://gitlab.com/so_literate/genmock) - 인터페이스 메서드 호출을 구성하기 위한 코드 생성기를 갖춘 Go 목킹 시스템.
- [go-localstack](https://github.com/elgohr/go-localstack) - AWS 테스트에서 localstack을 사용하기 위한 도구.
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - 데이터베이스 상호 작용을 테스트하기 위한 목 SQL 드라이버.
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - 주로 테스트 목적의 단일 트랜잭션 기반 데이터베이스 드라이버.
- [gomock](https://github.com/uber-go/mock) - Go 프로그래밍 언어를 위한 목킹 프레임워크.
- [gomock](https://github.com/vibridi/gomock) - 제네릭을 지원하며 타입이 지정되고 프레임워크에 구애받지 않는 인터페이스 목을 생성하는 CLI 도구.
- [govcr](https://github.com/seborama/govcr) - Golang용 HTTP 목: 오프라인 테스트를 위해 HTTP 상호 작용을 기록하고 재생합니다.
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - 확장 가능한 미들웨어와 사용하기 쉬운 CLI를 갖추고 REST/SOAP API를 기록하고 시뮬레이션하는 HTTP(S) 프록시.
- [httpmock](https://github.com/jarcoal/httpmock) - 외부 리소스의 HTTP 응답을 쉽게 목킹합니다.
- [minimock](https://github.com/gojuno/minimock) - Go 인터페이스용 목 생성기.
- [mockery](https://github.com/vektra/mockery) - Go 인터페이스를 생성하는 도구.
- [mockfs](https://github.com/balinomad/go-mockfs) - `testing/fstest.MapFS` 위에 구축된, 오류 주입과 지연 시뮬레이션을 지원하는 Go 테스트용 목 파일 시스템.
- [mockhttp](https://github.com/tv42/mockhttp) - Go http.ResponseWriter용 목 객체.
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - 다양한 용도의 목을 생성하는 간단한 방법.
- [moq](https://github.com/matryer/moq) - 어떤 인터페이스로부터든 구조체를 생성하는 유틸리티. 생성된 구조체는 테스트 코드에서 해당 인터페이스의 목으로 사용할 수 있습니다.
- [moxie](https://lesiw.io/moxie) - 임베디드 구조체에 목 메서드를 생성합니다.
- [pgxmock](https://github.com/pashagolub/pgxmock) - [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/)을 구현한 목 라이브러리.
- [timex](https://github.com/cabify/timex) - 네이티브 `time` 패키지를 대체하는 테스트 친화적인 패키지.
- [wsmock](https://github.com/sing198/wsmock) - 장애 주입과 어서션을 지원하는, 표현력 있고 보일러플레이트 없는 테스트용 WebSocket 목 서버.
- [xgo](https://github.com/xhd2015/xgo) - 범용 함수 목킹 라이브러리.

### 퍼징 및 델타 디버깅/축소/최소화

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - 무작위 테스트 시스템.
- [Tavor](https://github.com/zimmski/tavor) - 범용 퍼징 및 델타 디버깅 프레임워크.

### Selenium 및 브라우저 제어 도구

- [bonk](https://github.com/joakimcarlsson/bonk) - 외부 의존성 없이 WebSocket 위에서 Chrome DevTools Protocol을 사용하는, 빠르고 스텔스를 우선시하는 브라우저 자동화 라이브러리.
- [cdp](https://github.com/mafredri/cdp) - Chrome Debugging Protocol을 구현한 브라우저나 기타 디버그 대상과 함께 사용할 수 있는 타입 안전 바인딩.
- [chromedp](https://github.com/knq/chromedp) - Chrome, Safari, Edge, Android 웹뷰 등 Chrome Debugging Protocol을 지원하는 브라우저를 구동하고 테스트하는 방법.
- [playwright-go](https://github.com/mxschmitt/playwright-go) - 단일 API로 Chromium, Firefox, WebKit을 제어하는 브라우저 자동화 라이브러리.
- [rod](https://github.com/go-rod/rod) - 웹 자동화와 스크래핑을 쉽게 만들어 주는 Devtools 드라이버.
- [selenosis](https://github.com/alcounit/selenosis) - 사용자 정의 리소스를 통해 Selenium, Playwright, MCP 세션을 온디맨드 브라우저 파드로 라우팅하는 무상태 Kubernetes 네이티브 허브.

### 장애 주입

- [failpoint](https://github.com/pingcap/failpoint) - Golang을 위한 [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) 구현.

**[⬆ 맨 위로](#contents)**

## 텍스트 처리

_텍스트를 파싱하고 조작하기 위한 라이브러리._

[자연어 처리](#natural-language-processing)와 [텍스트 분석](#text-analysis)도 참고하세요.

### 포매터

- [address](https://github.com/bojanz/address) - 주소 표현, 유효성 검사, 포매팅을 처리합니다.
- [align](https://github.com/Guitarbum722/align) - 텍스트를 정렬하는 범용 애플리케이션.
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - 숫자 바이트 값(10K, 2M, 3G 등)을 포매팅하고 파싱합니다.
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - 고정 폭 텍스트 포매팅(리플렉션을 사용하는 인코더/디코더).
- [go-humanize](https://github.com/dustin/go-humanize) - 시간, 숫자, 메모리 크기를 사람이 읽기 쉬운 형식으로 바꾸는 포매터.
- [gotabulate](https://github.com/bndr/gotabulate) - Go로 표 형식 데이터를 쉽게 보기 좋게 출력합니다.
- [sq](https://github.com/neilotoole/sq) - SQL 데이터베이스나 CSV, Excel 같은 문서 형식의 데이터를 JSON, Excel, CSV, HTML, Markdown, XML, YAML 등의 형식으로 변환합니다.
- [textwrap](https://github.com/isbm/textwrap) - 줄 끝에서 텍스트를 줄바꿈합니다. Python `textwrap` 모듈의 구현입니다.

### 마크업 언어

- [bafi](https://github.com/mmalcek/bafi) - 템플릿을 사용해 JSON, BSON, YAML, XML을 어떤 형식으로든 변환하는 범용 변환기.
- [bbConvert](https://github.com/CalebQ42/bbConvert) - bbCode를 HTML로 변환하며, 사용자 정의 bbCode 태그 지원을 추가할 수 있습니다.
- [blackfriday](https://github.com/russross/blackfriday) - Go로 작성된 Markdown 처리기.
- [go-output-format](https://github.com/drewstinnett/go-output-format) - 명령줄 앱에서 Go 구조체를 여러 형식(YAML/JSON 등)으로 출력합니다.
- [go-toml](https://github.com/pelletier/go-toml) - 쿼리 지원과 편리한 CLI 도구를 갖춘 TOML 형식용 Go 라이브러리.
- [goldmark](https://github.com/yuin/goldmark) - Go로 작성된 Markdown 파서. 확장하기 쉽고 표준(CommonMark)을 준수하며 구조가 잘 잡혀 있습니다.
- [goq](https://github.com/andrewstuart/goq) - jQuery 문법의 구조체 태그를 사용한 HTML의 선언적 언마샬링(GoQuery 사용).
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - HTML을 Markdown으로 변환합니다. 웹사이트 전체에도 동작하며 규칙을 통해 확장할 수 있습니다.
- [htmlquery](https://github.com/antchfx/htmlquery) - XPath 표현식으로 HTML 문서에서 데이터를 추출하거나 평가할 수 있게 해 주는 HTML용 XPath 쿼리 패키지.
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Go에서 YAML을 HTML로 풍부하게 렌더링합니다.
- [htree](https://github.com/bobg/htree) - [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node) 객체 트리를 순회, 탐색, 필터링하는 등 다양하게 처리합니다.
- [markdown](https://github.com/nao1215/markdown) - 메서드 체이닝으로 GitHub Flavored Markdown과 mermaid 다이어그램을 생성하는 Markdown 빌더.
- [mdsmith](https://github.com/jeduden/mdsmith) - 빠르고 자동 수정을 지원하는 Markdown 린터 및 포매터. 스타일, 가독성, 구조, 파일 간 무결성을 검사합니다.
- [mxj](https://github.com/clbanning/mxj) - XML을 JSON 또는 map[string]interface{}로 인코딩/디코딩하고, 점 표기법 경로와 와일드카드로 값을 추출합니다. x2j 및 j2x 패키지를 대체합니다.
- [picoloom](https://github.com/alnah/picoloom) - CLI와 Go 라이브러리 API를 갖춘 Markdown-PDF 변환기.
- [toml](https://github.com/BurntSushi/toml) - TOML 설정 형식(리플렉션을 사용하는 인코더/디코더).

### 파서/인코더/디코더

- [allot](https://github.com/sbstjn/allot) - CLI 도구와 봇을 위한 플레이스홀더 및 와일드카드 텍스트 파싱.
- [codetree](https://github.com/aerogo/codetree) - 들여쓰기된 코드(python, pixy, scarlet 등)를 파싱하여 트리 구조를 반환합니다.
- [commonregex](https://github.com/mingrammer/commonregex) - Go를 위한 일반적인 정규 표현식 모음.
- [did](https://github.com/ockam-network/did) - Go로 작성된 DID(탈중앙화 식별자) 파서 및 Stringer.
- [doi](https://github.com/hscells/doi) - Go로 작성된 문서 객체 식별자(doi) 파서.
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Go용 Editorconfig 파일 파서 및 조작 도구.
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - 고성능 유효 최상위 도메인(eTLD) 추출 모듈.
- [go-nmea](https://github.com/adrianmo/go-nmea) - Go 언어용 NMEA 파서 라이브러리.
- [go-querystring](https://github.com/google/go-querystring) - 구조체를 URL 쿼리 매개변수로 인코딩하기 위한 Go 라이브러리.
- [go-vcard](https://github.com/emersion/go-vcard) - vCard를 파싱하고 포매팅합니다.
- [godump](https://github.com/yassinebenaid/godump) - 어떤 GO 변수든 쉽게 보기 좋게 출력하는, Go `fmt.Printf("%#v")`의 대안.
- [godump (goforj)](https://github.com/goforj/godump) - Laravel/Symfony 스타일 덤프, 전체 타입 정보, 컬러 CLI 출력, 순환 감지, 비공개 필드 접근으로 Go 구조체를 보기 좋게 출력합니다.
- [gofeed](https://github.com/mmcdole/gofeed) - Go에서 RSS 및 Atom 피드를 파싱합니다.
- [gographviz](https://github.com/awalterschulze/gographviz) - Graphviz DOT 언어를 파싱합니다.
- [gonameparts](https://github.com/polera/gonameparts) - 사람 이름을 개별 이름 요소로 파싱합니다.
- [ltsv](https://github.com/Wing924/ltsv) - Go를 위한 고성능 [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) 리더.
- [normalize](https://github.com/avito-tech/normalize) - 모호한 텍스트를 정제하고 정규화하고 비교합니다.
- [parseargs-go](https://github.com/nproc/parseargs-go) - 따옴표와 백슬래시를 이해하는 문자열 인수 파서.
- [prattle](https://github.com/askeladdk/prattle) - LL(1) 문법을 간단하고 효율적으로 스캔하고 파싱합니다.
- [sh](https://github.com/mvdan/sh) - 셸 파서 및 포매터.
- [tokenizer](https://github.com/bzick/tokenizer) - 어떤 문자열, 슬라이스, 무한 버퍼든 원하는 토큰으로 파싱합니다.
- [vdf](https://github.com/andygrunwald/vdf) - Go로 작성된 Valve 데이터 형식(vdf로 알려짐)용 렉서 및 파서.
- [when](https://github.com/olebedev/when) - 플러그인 방식의 규칙을 지원하는 자연어 영어 및 러시아어 날짜/시간 파서.
- [xj2go](https://github.com/stackerzzq/xj2go) - xml 또는 json을 Go 구조체로 변환합니다.

### 정규 표현식

- [coregex](https://github.com/coregx/coregex) - Rust regex 크레이트 아키텍처를 따르는 프로덕션용 정규식 엔진: 다중 엔진 DFA/NFA, SIMD 사전 필터, 표준 라이브러리 드롭인 대체.
- [genex](https://github.com/alixaxel/genex) - 정규 표현식과 일치하는 모든 문자열의 개수를 세고 전개합니다.
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - 간단하고 가벼운 와일드카드 패턴 매칭.
- [goregen](https://github.com/zach-klippenstein/goregen) - 정규 표현식으로부터 무작위 문자열을 생성하는 라이브러리.
- [regroup](https://github.com/oriser/regroup) - 구조체 태그와 자동 파싱을 사용해 정규식의 이름 있는 그룹을 Go 구조체에 매칭합니다.
- [rex](https://github.com/hedhyw/rex) - 정규 표현식 빌더.

### 새니타이징

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTML 새니타이저.
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Go를 위한 새니타이징 기반 욕설 필터.

### 스크래퍼

- [colly](https://github.com/asciimoo/colly) - Gopher를 위한 빠르고 우아한 스크래핑 프레임워크.
- [dataflowkit](https://github.com/slotix/dataflowkit) - 웹사이트를 구조화된 데이터로 바꾸는 웹 스크래핑 프레임워크.
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - LLM 수집(RAG, 학습 데이터)을 위해 문서 사이트를 깔끔한 Markdown과 JSONL로 변환하는 웹 크롤러.
- [go-recipe](https://github.com/kkyr/go-recipe) - 웹사이트에서 레시피를 스크래핑하기 위한 패키지.
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - 사이트맵을 파싱하기 위한 Go 언어 라이브러리.
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery는 jQuery와 유사한 문법과 기능을 Go 언어에 제공합니다.
- [pagser](https://github.com/foolin/pagser) - Pagser는 Golang 크롤러를 위해 goquery와 구조체 태그를 기반으로 HTML 페이지를 구조체로 파싱하고 역직렬화하는 간단하고 확장 가능하며 설정 가능한 도구입니다.
- [Tagify](https://github.com/zoomio/tagify) - 주어진 소스로부터 태그 모음을 생성합니다.
- [walker](https://github.com/cyucelen/walker) - 어떤 소스에서든 페이지로 나뉜 데이터를 매끄럽게 가져옵니다. 간단하고 고성능인 API 스크래핑을 포함합니다.
- [xurls](https://github.com/mvdan/xurls) - 텍스트에서 URL을 추출합니다.

### RSS

- [podcast](https://github.com/eduncan911/podcast) - Golang으로 작성된 iTunes 호환 RSS 2.0 팟캐스트 생성기

### 유틸리티/기타

- [ahocorasick](https://github.com/coregx/ahocorasick) - DFA 컴파일과 SIMD 사전 필터를 사용하여 최대 7 GB/s의 처리량을 내는 고성능 Aho-Corasick 다중 패턴 문자열 매칭([coregx](https://github.com/coregx) 생태계의 일부).
- [go-runewidth](https://github.com/mattn/go-runewidth) - 문자나 문자열의 고정 폭을 구하는 함수.
- [kace](https://github.com/codemodus/kace) - 일반적인 약어(이니셜리즘)를 고려한 대소문자 변환.
- [lancet](https://github.com/duke-git/lancet) - Go를 위한 포괄적인 Lodash 스타일 유틸리티 라이브러리
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich는 러시아어 이름을 주어진 문법적 격에 맞게 굴절시키는 라이브러리입니다.
- [radix](https://github.com/yourbasic/radix) - 빠른 문자열 정렬 알고리즘.
- [TySug](https://github.com/Dynom/TySug) - 키보드 배열을 고려한 대체 단어 제안.
- [uniwidth](https://github.com/unilibs/uniwidth) - SWAR 최적화, O(1) 조회 테이블, ZWJ 이모지 지원을 갖춘 고성능 유니코드 문자 폭 계산.
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - 단어 임베딩을 사용해 의미적으로 유사한 결과를 찾는 시맨틱 grep 도구. 예를 들어 "death"를 검색하면 "dead", "killing", "murder"를 찾습니다.

**[⬆ 맨 위로](#contents)**

## 서드파티 API

_서드파티 API에 접근하기 위한 라이브러리._

- [airtable](https://github.com/mehanizm/airtable) - [Airtable API](https://airtable.com/api)용 Go 클라이언트 라이브러리.
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Twitter 1.1 API용 Go 클라이언트 라이브러리.
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - AppStore Connect API용 비공식 Golang SDK.
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html)의 비공식 Go SDK 구현.
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Go 프로그래밍 언어용 공식 AWS SDK.
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - 타입이 지정된 현물 가격, OHLCV 캔들, 과거 데이터, 원시 요청용 탈출구를 제공하는 Birdeye DeFi API용 Go 클라이언트.
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - [Google BigQuery](https://cloud.google.com/bigquery)에 높은 처리량으로 데이터를 쓰기 위한 고수준 Go 라이브러리.
- [brewerydb](https://github.com/naegelejd/brewerydb) - BreweryDB API에 접근하기 위한 Go 라이브러리.
- [cachet](https://github.com/andygrunwald/cachet) - [Cachet(오픈 소스 상태 페이지 시스템)](https://cachethq.io/)용 Go 클라이언트 라이브러리.
- [circleci](https://github.com/jszwedko/go-circleci) - CircleCI API와 상호 작용하기 위한 Go 클라이언트 라이브러리.
- [codeship-go](https://github.com/codeship/codeship-go) - Codeship API v2와 상호 작용하기 위한 Go 클라이언트 라이브러리.
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - 의존성이 없고 WebSocket 스트림과 선물, 현물, 옵션, ETF, 지표용 타입 지정 엔드포인트를 제공하는 Coinglass API v4용 Go 클라이언트.
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Coinpaprika API와 상호 작용하기 위한 Go 클라이언트 라이브러리.
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - 사용자가 AI 에이전트인 공개 소셜 네트워크 [The Colony](https://thecolony.cc)용 Go 클라이언트 라이브러리.
- [device-check-go](https://github.com/rinchsan/device-check-go) - [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1과 상호 작용하기 위한 Go 클라이언트 라이브러리.
- [discordgo](https://github.com/bwmarrin/discordgo) - Discord Chat API용 Go 바인딩.
- [disgo](https://github.com/switchupcb/disgo) - Discord API용 Go API 래퍼.
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Go용 비공식 Dusupay 결제 게이트웨이 API 클라이언트
- [ethrpc](https://github.com/onrik/ethrpc) - Ethereum JSON RPC API용 Go 바인딩.
- [facebook](https://github.com/huandu/facebook) - Facebook Graph API를 지원하는 Go 라이브러리.
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Golang용 비공식 Fasapay 결제 게이트웨이 XML API 클라이언트.
- [fcm](https://github.com/maddevsio/fcm) - Firebase Cloud Messaging용 Go 라이브러리.
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - 로컬 평가와 스트리밍 업데이트를 지원하는 [Featureflip](https://featureflip.io/) 기능 플래그용 Go SDK.
- [gads](https://github.com/emiddleton/gads) - Google Adwords 비공식 API.
- [gcm](https://github.com/Aorioli/gcm) - Google Cloud Messaging용 Go 라이브러리.
- [geo-golang](https://github.com/codingsince1985/geo-golang) - [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/), [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim) 지오코딩 / 역지오코딩 API에 접근하기 위한 Go 라이브러리.
- [github](https://github.com/google/go-github) - GitHub REST API v3에 접근하기 위한 Go 라이브러리.
- [githubql](https://github.com/shurcooL/githubql) - GitHub GraphQL API v4에 접근하기 위한 Go 라이브러리.
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) 서비스(Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud)에 접근하기 위한 Go 라이브러리
- [go-aws-news](https://github.com/circa10a/go-aws-news) - AWS의 새로운 소식을 가져오는 Go 애플리케이션 및 라이브러리.
- [go-chronos](https://github.com/axelspringer/go-chronos) - [Chronos](https://mesos.github.io/chronos/) 작업 스케줄러와 상호 작용하기 위한 Go 라이브러리
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - [Gerrit Code Review](https://www.gerritcodereview.com/)용 Go 클라이언트 라이브러리.
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - HackerNews API용 작은 Go 클라이언트.
- [go-here](https://github.com/abdullahselek/go-here) - HERE 위치 기반 API를 위한 Go 클라이언트 라이브러리.
- [go-hibp](https://github.com/wneessen/go-hibp) - "Have I Been Pwned" API용 간단한 Go 바인딩.
- [go-imgur](https://github.com/koffeinsource/go-imgur) - [imgur](https://imgur.com)용 Go 클라이언트 라이브러리
- [go-jira](https://github.com/andygrunwald/go-jira) - [Atlassian JIRA](https://www.atlassian.com/software/jira)용 Go 클라이언트 라이브러리
- [go-lark](https://github.com/go-lark/lark) - [Feishu](https://open.feishu.cn/) 및 [Lark](https://open.larksuite.com/) 오픈 플랫폼을 위한 사용하기 쉬운 비공식 SDK.
- [go-marathon](https://github.com/gambol99/go-marathon) - Mesosphere의 Marathon PAAS와 상호 작용하기 위한 Go 라이브러리.
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2)에 접근하기 위한 Go 클라이언트 라이브러리.
- [go-openai](https://github.com/sashabaranov/go-openai) - Go용 OpenAI ChatGPT, DALL·E, Whisper API 라이브러리.
- [go-openproject](https://github.com/manuelbcd/go-openproject) - [OpenProject](https://docs.openproject.org/api/) API와 상호 작용하기 위한 Go 클라이언트 라이브러리.
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/)를 다루기 위한 Go 모듈(Insomnia와 호환).
- [go-redoc](https://github.com/mvrilo/go-redoc) - [ReDoc](https://redocly.com/)을 사용하는 Go용 임베디드 OpenAPI/Swagger 문서 UI.
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - [REST Countries API](https://countrylayer.com/)용 Go 라이브러리.
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm)와 상호 작용하기 위한 Go 클라이언트 라이브러리.
- [go-sophos](https://github.com/esurdam/go-sophos) - 의존성이 없는 [Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en)용 Go 클라이언트 라이브러리.
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - swagger json을 제공하기 위해 미리 컴파일된 [Swagger UI](https://swagger.io/tools/swagger-ui/)를 포함한 Go 라이브러리.
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Telegraph 게시 플랫폼 API 클라이언트.
- [go-trending](https://github.com/andygrunwald/go-trending) - Github의 [트렌딩 저장소](https://github.com/trending)와 [개발자](https://github.com/trending/developers)에 접근하기 위한 Go 라이브러리.
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - [Unsplash.com](https://unsplash.com) API용 Go 클라이언트 라이브러리.
- [go-xkcd](https://github.com/nishanths/go-xkcd) - xkcd API용 Go 클라이언트.
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Yapla v2.0 API용 Go 클라이언트 라이브러리.
- [goagi](https://github.com/staskobzar/goagi) - Asterisk PBX agi/fastagi 애플리케이션을 구축하기 위한 Go 라이브러리.
- [goami2](https://github.com/staskobzar/goami2) - Asterisk PBX용 AMI v2 라이브러리.
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Google Sheets 위에 일반적이고 간단한 데이터베이스 추상화를 제공하는 Golang 라이브러리.
- [gogtrends](https://github.com/groovili/gogtrends) - Google Trends 비공식 API.
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - The Movie Database API v3용 Golang 래퍼.
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics는 Wikia 웹사이트에서 노래 가사 데이터를 가져오는 Go 라이브러리입니다.
- [gomalshare](https://github.com/MonaxGT/gomalshare) - MalShare API [malshare.com](https://www.malshare.com/)용 Go 라이브러리
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Go MusicBrainz WS2 클라이언트 라이브러리.
- [google](https://github.com/google/google-api-go-client) - 자동 생성된 Go용 Google API.
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Google Analytics 보고를 쉽게 해 주는 간단한 래퍼.
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Google Cloud API Go 클라이언트 라이브러리.
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/)용 Go 클라이언트 라이브러리.
- [gopensky](https://github.com/navidys/gopensky) - [OpenSKY Network](https://opensky-network.org/) 실시간 API(공역 ADS-B 및 Mode S 데이터)용 Go 클라이언트 구현.
- [gosip](https://github.com/koltyakov/gosip) - SharePoint용 클라이언트 라이브러리.
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm은 Storm 셸과 통신하는 Storm spout와 Bolt를 Go로 작성하는 데 필요한 통신 프로토콜을 구현한 Go 라이브러리입니다.
- [hipchat](https://github.com/andybons/hipchat) - Hipchat API용 Golang 클라이언트 라이브러리를 구현한 프로젝트입니다.
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - XMPP를 통해 HipChat과 통신하기 위한 Golang 패키지.
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - httpSMS API용 Go 클라이언트.
- [igdb](https://github.com/Henry-Sarabia/igdb) - [Internet Game Database API](https://api.igdb.com/)용 Go 클라이언트.
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - IP2Location.io API [IP2Location.io](https://www.ip2location.io/)용 Go 래퍼.
- [jokeapi-go](https://github.com/icelain/jokeapi) - [JokeAPI](https://sv443.net/jokeapi/v2/)용 Go 클라이언트.
- [lark](https://github.com/chyroc/lark) - [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/) Open API Go SDK. 모든 Open API와 이벤트 콜백을 지원합니다.
- [lastpass-go](https://github.com/ansd/lastpass-go) - [LastPass](https://www.lastpass.com/) API용 Go 클라이언트 라이브러리.
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Lemon Squeezy API용 Go 클라이언트.
- [libgoffi](https://github.com/clevabit/libgoffi) - 네이티브 [libffi](https://sourceware.org/libffi/) 연동을 위한 라이브러리 어댑터 도구 상자
- [libopenapi](https://github.com/pb33f/libopenapi) - OpenAPI, Swagger, Overlays, Arazzo 명세를 파싱하고 검증하고 다룹니다.
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - 작업 자동화, 파일 관리, 웹훅, 타입 안전 모델을 갖춘 Manus AI API v2용 Go 클라이언트.
- [Medium](https://github.com/Medium/medium-sdk-go) - Medium OAuth2 API용 Golang SDK.
- [megos](https://github.com/andygrunwald/megos) - [Apache Mesos](https://mesos.apache.org/) 클러스터에 접근하기 위한 클라이언트 라이브러리.
- [minio-go](https://github.com/minio/minio-go) - Amazon S3 호환 클라우드 스토리지를 위한 Minio Go 라이브러리.
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel은 Go 애플리케이션에서 이벤트를 추적하고 Mixpanel 프로필 업데이트를 Mixpanel로 전송하기 위한 라이브러리입니다.
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Smart Money 분석, 토큰 스크리너, 프로파일러를 지원하고 의존성이 없는 Nansen AI API용 Go 클라이언트.
- [newsapi-go](https://github.com/jellydator/newsapi-go) - [NewsAPI](https://newsapi.org/)용 Go 클라이언트.
- [openaigo](https://github.com/otiai10/openaigo) - Go용 OpenAI GPT3/GPT3.5 ChatGPT API 클라이언트 라이브러리.
- [patreon-go](https://github.com/mxpv/patreon-go) - Patreon API용 Go 라이브러리.
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - PayPal 결제 API용 래퍼.
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Playlyfe Rest API Go SDK.
- [pushover](https://github.com/gregdel/pushover) - Pushover API용 Go 래퍼.
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - [RAWG Video Games Database](https://rawg.io/) API용 Go 라이브러리
- [shopify](https://github.com/rapito/go-shopify) - Shopify API에 CRUD 요청을 보내기 위한 Go 라이브러리.
- [simples3](https://github.com/rhnvrm/simples3) - Go로 작성된, V4 서명과 REST를 사용하는 군더더기 없는 간단한 AWS S3 라이브러리.
- [slack](https://github.com/slack-go/slack) - Go로 구현한 Slack API.
- [smite](https://github.com/sergiotapia/smitego) - Smite 게임 API 접근을 감싸는 Go 패키지.
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - SonarQube Web API용 Go 클라이언트 라이브러리 및 명령줄 클라이언트.
- [spec](https://github.com/oaswrap/spec) - 정적 생성과 chi, echo, gin, fiber, mux 등 인기 있는 프레임워크를 지원하는 경량 OpenAPI 3.x 빌더.
- [spotify](https://github.com/rapito/go-spotify) - Spotify WEB API에 접근하기 위한 Go 라이브러리.
- [steam](https://github.com/sostronk/go-steam) - Steam 게임 서버와 상호 작용하기 위한 Go 라이브러리.
- [stripe](https://github.com/stripe/stripe-go) - Stripe API용 Go 클라이언트.
- [swag](https://github.com/zc2638/swag) - 주석 없이 swagger 2.0 호환 API를 만드는 간단한 Go 래퍼. 내장 라우터, gin, chi, mux, echo, httprouter, fasthttp 등 대부분의 라우팅 프레임워크를 지원합니다.
- [textbelt](https://github.com/dietsche/textbelt) - textbelt.com 문자 메시지 API용 Go 클라이언트.
- [threads-go](https://github.com/tirthpatell/threads-go) - OAuth 2.0, 속도 제한, 타입 안전 오류 처리를 갖춘 Meta Threads API용 Go 클라이언트 라이브러리.
- [Trello](https://github.com/adlio/trello) - Trello API용 Go 래퍼.
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - TripAdvisor API용 Go 래퍼.
- [tumblr](https://github.com/mattcunningham/gumblr) - Tumblr v2 API용 Go 래퍼.
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Uptime Robot v2 API용 Go 래퍼 및 명령줄 클라이언트.
- [vl-go](https://github.com/verifid/vl-go) - VerifID 신원 확인 레이어 API를 위한 Go 클라이언트 라이브러리.
- [webhooks](https://github.com/go-playground/webhooks) - GitHub와 Bitbucket을 위한 웹훅 수신기.
- [wit-go](https://github.com/wit-ai/wit-go) - wit.ai HTTP API용 Go 클라이언트.
- [ynab](https://github.com/brunomvsouza/ynab.go) - YNAB API용 Go 래퍼.
- [zooz](https://github.com/gojuno/go-zooz) - Zooz API용 Go 클라이언트.

**[⬆ 맨 위로](#contents)**

## 유틸리티

_삶을 더 편하게 만들어 주는 범용 유틸리티와 도구._

- [abstract](https://github.com/maxbolgarin/abstract) - 비즈니스 로직에서 보일러플레이트 코드를 없애기 위한 추상화와 유틸리티.
- [apm](https://github.com/topfreegames/apm) - HTTP API를 갖춘 Golang 애플리케이션용 프로세스 관리자.
- [backscanner](https://github.com/icza/backscanner) - bufio.Scanner와 비슷하지만, 주어진 위치에서 시작해 거꾸로 진행하며 줄을 역순으로 읽어 반환하는 스캐너.
- [bed](https://github.com/itchyny/bed) - Go로 작성된 Vim 스타일 바이너리 에디터.
- [blank](https://github.com/Henry-Sarabia/blank) - 문자열의 공백과 화이트스페이스를 검증하거나 제거합니다.
- [bleep](https://github.com/sinhashubham95/bleep) - Go에서 임의의 OS 시그널 집합에 대해 원하는 만큼의 동작을 수행합니다.
- [boilr](https://github.com/tmrts/boilr) - 보일러플레이트 템플릿으로부터 프로젝트를 만드는 매우 빠른 CLI 도구.
- [boring](https://github.com/alebeck/boring) - 간단한 명령줄 SSH 터널 관리자.
- [changie](https://github.com/miniscruff/changie) - 다양한 사용자 정의 옵션을 갖춘, 릴리스 준비를 위한 자동화된 변경 로그 도구.
- [chyle](https://github.com/antham/chyle) - 다양한 설정이 가능한, git 저장소를 사용하는 변경 로그 생성기.
- [circuit](https://github.com/cep21/circuit) - 서킷 브레이커 패턴을 Hystrix처럼 구현한, 효율적이고 기능이 완전한 Go 구현.
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Go로 구현한 서킷 브레이커.
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Go로 작성된 크로스 플랫폼 클립보드 패키지.
- [clockwork](https://github.com/jonboulle/clockwork) - Golang을 위한 간단한 가짜 시계.
- [cmd](https://github.com/SimonBaeumer/cmd) - osx, windows, linux에서 셸 명령을 실행하기 위한 라이브러리.
- [config-file-validator](https://github.com/Boeing/config-file-validator) - 설정 파일을 검증하는 크로스 플랫폼 도구.
- [contem](https://github.com/maxbolgarin/contem) - Go 애플리케이션의 정상 종료를 위한 context.Context 드롭인 대체품.
- [cookie](https://github.com/syntaqx/cookie) - 쿠키 구조체 파싱 및 헬퍼 패키지.
- [copy-pasta](https://github.com/jutkko/copy-pasta) - S3 같은 백엔드를 저장소로 사용하는 범용 다중 워크스테이션 클립보드.
- [countries](https://github.com/biter777/countries) - ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR, IANA ccTLD 표준의 완전한 구현.
- [countries](https://github.com/pioz/countries) - Go에서 국가 정보를 다룰 때 필요한 모든 것.
- [create-go-app](https://github.com/create-go-app/cli) - 명령 하나로 백엔드(Golang), 프런트엔드(JavaScript, TypeScript), 배포 자동화(Ansible, Docker)를 갖춘 새 프로덕션용 프로젝트를 만드는 강력한 CLI.
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo는 암호화폐 가격을 실시간으로 모니터링하고 관찰하기 위해 순수 Go로 작성된 TUI 기반 애플리케이션입니다!
- [ctop](https://github.com/bcicen/ctop) - 컨테이너 메트릭을 위한 [top 같은](https://ctop.sh) 인터페이스(예: htop).
- [ctxutil](https://github.com/posener/ctxutil) - 컨텍스트를 위한 유틸리티 함수 모음.
- [cvt](https://github.com/shockerli/cvt) - 어떤 값이든 다른 타입으로 쉽고 안전하게 변환합니다.
- [dbt](https://github.com/nikogura/dbt) - 신뢰할 수 있는 중앙 저장소에서 서명된 자체 업데이트 바이너리를 실행하기 위한 프레임워크.
- [Death](https://github.com/vrecan/death) - 시그널로 Go 애플리케이션 종료를 관리합니다.
- [debounce](https://github.com/floatdrop/debounce) - Go로 작성된 할당 없는 디바운서.
- [delve](https://github.com/derekparker/delve) - Go 디버거.
- [dive](https://github.com/wagoodman/dive) - Docker 이미지의 각 레이어를 탐색하는 도구.
- [dlog](https://github.com/kirillDanshin/dlog) - 디버그 호출을 제거하지 않고도 릴리스를 더 작게 만들어 주는, 컴파일 타임에 제어되는 로거.
- [EaseProbe](https://github.com/megaease/easeprobe) - 상태 검사 데몬 역할을 할 수 있는 간단하고 독립적이며 가벼운 도구로, HTTP/TCP/SSH/Shell/Client/... 프로브와 Slack/Discord/Telegram/SMS... 알림을 지원합니다.
- [equalizer](https://github.com/reugn/equalizer) - Go를 위한 할당량 관리자 및 속도 제한기 모음.
- [ergo](https://github.com/cristianoliveira/ergo) - 서로 다른 포트에서 실행되는 여러 로컬 서비스를 쉽게 관리합니다.
- [evaluator](https://github.com/nullne/evaluator) - S-표현식을 기반으로 표현식을 동적으로 평가합니다. 간단하고 확장하기 쉽습니다.
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Go를 위한 장애 허용 및 복원력 패턴.
- [filetype](https://github.com/h2non/filetype) - 매직 넘버 시그니처를 확인해 파일 유형을 추론하는 작은 패키지.
- [filler](https://github.com/yaronsumel/filler) - "fill" 태그를 사용해 구조체를 채우는 작은 유틸리티.
- [filter](https://github.com/gookit/filter) - Go 데이터의 필터링, 정제, 변환을 제공합니다.
- [fzf](https://github.com/junegunn/fzf) - Go로 작성된 명령줄 퍼지 파인더.
- [generate](https://github.com/go-playground/generate) - 지정된 경로나 환경 변수에 대해 go generate를 재귀적으로 실행하며 정규식으로 필터링할 수 있습니다.
- [gh-image](https://github.com/drogers0/gh-image) - 명령줄에서 GitHub 이슈, PR, README에 이미지를 업로드하고 저장소 공개 범위를 따르는 user-attachments URL을 생성하는 gh CLI 확장.
- [ghokin](https://github.com/antham/ghokin) - 외부 의존성이 없는 gherkin(cucumber, behat...)용 병렬 포매터.
- [git-time-metric](https://github.com/git-time-metric/gtm) - Git을 위한 간단하고 매끄럽고 가벼운 시간 추적.
- [git-tools](https://github.com/kazhuravlev/git-tools) - git 태그 관리를 돕는 도구.
- [gitbatch](https://github.com/isacikgoz/gitbatch) - git 저장소를 한곳에서 관리합니다.
- [gitcs](https://github.com/knbr13/gitcs/) - Git 커밋 시각화 도구. 로컬 머신에서 Git 커밋을 시각화하는 CLI 도구입니다.
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Go 기반 웹 프레임워크를 위한 프로덕션 지원 기능.
- [go-astitodo](https://github.com/asticode/go-astitodo) - GO 코드의 TODO를 파싱합니다.
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - Golang 플러그인이 내보낸 심볼을 감싸기 위한 go:generate 도구(1.8 전용).
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - 순수 Go bsdiff 및 bspatch 라이브러리와 CLI 도구.
- [go-clip](https://github.com/prashantgupta24/go-clip) - Mac용 미니멀한 클립보드 관리자.
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Go에 없는 열거형 타입을 대신하는, 안전한 문자열 파싱을 지원하는 제네릭 타입 상수 집합.
- [go-convert](https://github.com/Eun/go-convert) - go-convert 패키지를 사용하면 값을 다른 타입으로 변환할 수 있습니다.
- [go-countries](https://github.com/mikekonan/go-countries) - ISO-3166 코드에 대한 가벼운 조회.
- [go-dry](https://github.com/ungerik/go-dry) - Go를 위한 DRY(don't repeat yourself) 패키지.
- [go-events](https://github.com/deatil/go-events) - WordPress 훅 함수 같은 Go 이벤트 및 이벤트 구독 패키지.
- [go-funk](https://github.com/thoas/go-funk) - 헬퍼(map, find, contains, filter, chunk, reverse, ...)를 제공하는 현대적인 Go 유틸리티 라이브러리.
- [go-health](https://github.com/Talento90/go-health) - Health 패키지는 서비스에 상태 검사를 추가하는 방법을 단순화합니다.
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - 구조체를 헤더 필드로 인코딩하기 위한 Go 라이브러리.
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - 사용하지 않거나 이전 버전인 AWS Lambda를 제거하기 위한 CLI.
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock은 기아 상태 없이 읽기-쓰기 뮤텍스와 읽기-쓰기 trylock을 구현한 잠금 라이브러리입니다.
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - ts-pattern에서 영감을 받은 패턴 매칭 라이브러리.
- [go-pkg](https://github.com/chenquan/go-pkg) - Go 툴킷.
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Problem Details를 다루기 위한 Go 패키지.
- [go-qr](https://github.com/piglig/go-qr) - 네이티브의 고품질 미니멀 QR 코드 생성기.
- [go-rate](https://github.com/beefsack/go-rate) - Go를 위한 시간 기반 속도 제한기.
- [go-safecast](https://github.com/ccoVeille/go-safecast) - 정수 오버플로와 언더플로를 방지하는 안전한 숫자 타입 변환 라이브러리(gosec G115 및 CWE-190 대응).
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Go로 작성된 XML 사이트맵 생성기.
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - 독립적으로 도입할 수 있는 작은 패키지들로 구성된, 슬라이스, 맵, 문자열, 오류, JSON, HTTP, 컨테이너를 위한 타입 안전 제네릭 헬퍼.
- [go-trigger](https://github.com/sadlil/go-trigger) - Go 언어 전역 이벤트 트리거. ID로 이벤트를 등록하고 프로젝트의 어디에서든 이벤트를 발생시킬 수 있습니다.
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper는 회로를 차단하고 회로 상태를 제어할 수 있게 해 주는 Go용 서킷 브레이커 패키지입니다.
- [go-type](https://github.com/mikekonan/go-types) - ISO-4217, ISO-3166 등의 타입을 저장/검증하고 전송하기 위한 Go 타입을 제공하는 라이브러리.
- [go-utils](https://github.com/Goldziher/go-utils) - JavaScript와 Python에서 영감을 받은 간단하고 성능 좋은 Go용 제네릭 유틸리티(map, filter, reduce 등).
- [goback](https://github.com/carlescere/goback) - 간단한 Go 지수 백오프 패키지.
- [goctx](https://github.com/zerosnake0/goctx) - 컨텍스트 값을 고성능으로 가져옵니다.
- [godaemon](https://github.com/VividCortex/godaemon) - 데몬을 작성하기 위한 유틸리티.
- [godoclive](https://github.com/syst3mctl/godoclive) - chi, gin, net/http 라우터의 정적 분석을 통해 Go HTTP 핸들러로부터 대화형 API 문서를 생성합니다.
- [godropbox](https://github.com/dropbox/godropbox) - Dropbox에서 만든, Go 서비스/애플리케이션 작성을 위한 공통 라이브러리.
- [gofn](https://github.com/tiendc/gofn) - Go 1.18+ 제네릭으로 작성된 고성능 유틸리티 함수.
- [golarm](https://github.com/msempere/golarm) - 시스템 이벤트로 알람을 발생시킵니다.
- [golog](https://github.com/mlimaloureiro/golog) - 작업 시간을 추적하는 쉽고 가벼운 CLI 도구.
- [gopencils](https://github.com/bndr/gopencils) - REST API를 쉽게 사용하기 위한 작고 간단한 패키지.
- [goplaceholder](https://github.com/michiwend/goplaceholder) - 플레이스홀더 이미지를 생성하는 작은 Golang 라이브러리.
- [goreadability](https://github.com/philipjkim/goreadability) - Facebook Open Graph와 arc90의 readability를 사용하는 웹 페이지 요약 추출기.
- [goreleaser](https://github.com/goreleaser/goreleaser) - Go 바이너리를 최대한 빠르고 쉽게 배포합니다.
- [goreporter](https://github.com/wgliang/goreporter) - 정적 분석, 단위 테스트, 코드 리뷰를 수행하고 코드 품질 보고서를 생성하는 Golang 도구.
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - 거의 모든 기능을 갖춘 SeaweedFS 클라이언트 라이브러리.
- [gostrutils](https://github.com/ik5/gostrutils) - 문자열 조작 및 변환 함수 모음.
- [gotenv](https://github.com/subosito/gotenv) - Go에서 `.env` 또는 임의의 `io.Reader`로부터 환경 변수를 로드합니다.
- [goval](https://github.com/maja42/goval) - Go에서 임의의 표현식을 평가합니다.
- [graterm](https://github.com/skovtunenko/graterm) - Go 애플리케이션에서 순서가 지정된(순차/동시) 정상 종료(GRAceful TERMination, 일명 셧다운)를 수행하기 위한 기본 요소를 제공합니다.
- [grofer](https://github.com/pesos/grofer) - Golang으로 작성된 시스템 및 리소스 모니터링 도구!
- [gubrak](https://github.com/novalagung/gubrak) - 문법적 설탕을 갖춘 Golang 유틸리티 라이브러리. Golang판 lodash라고 할 수 있습니다.
- [handy](https://github.com/miguelpragier/handy) - 문자열 핸들러/포매터와 유효성 검사기 같은 다양한 유틸리티와 헬퍼.
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Kubernetes를 위한 간단하지만 강력한 준비 상태(readiness) 테스트.
- [hostctl](https://github.com/guumaster/hostctl) - 쉬운 명령으로 /etc/hosts를 관리하는 CLI 도구.
- [htcat](https://github.com/htcat/htcat) - 병렬 및 파이프라인 방식의 HTTP GET 유틸리티.
- [hub](https://github.com/github/hub) - 터미널에서 github와 상호 작용하는 추가 기능으로 git 명령을 감쌉니다.
- [immortal](https://github.com/immortal/immortal) - \*nix 크로스 플랫폼(OS 독립적) 프로세스 감독 도구.
- [jet](https://github.com/NicoNex/jet) - Just Edit Text: 정규 표현식을 사용해 파일 내용과 이름을 찾아 바꾸는 빠르고 강력한 도구.
- [jsend](https://github.com/clevergo/jsend) - Go로 작성된 JSend 구현.
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - JSON 로그를 위한 대화형 뷰어.
- [jump](https://github.com/gsamokovarov/jump) - Jump는 사용자의 습관을 학습하여 더 빠르게 이동할 수 있도록 도와줍니다.
- [just](https://github.com/kazhuravlev/just) - 제네릭 자료 구조를 다루기 위한 유용한 함수 모음일 뿐입니다.
- [koazee](https://github.com/wesovilabs/koazee) - 지연 평가와 함수형 프로그래밍에서 영감을 받아 배열 작업의 번거로움을 덜어 주는 라이브러리.
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - 영구 레이블 지정, 다중 네트워크 스캔, Tailscale 연동을 갖춘 네트워크 장치 탐색 및 인벤토리.
- [lang](https://github.com/maxbolgarin/lang) - 보일러플레이트 코드 없이 변수, 슬라이스, 맵을 다루기 위한 제네릭 한 줄 함수.
- [lets-go](https://github.com/aplescia-chwy/lets-go) - 클라우드 네이티브 REST API 개발을 위한 공통 유틸리티를 제공하는 Go 모듈. AWS 전용 유틸리티도 포함합니다.
- [limiters](https://github.com/mennanov/limiters) - 설정 가능한 백엔드와 분산 잠금을 갖춘 Golang 분산 애플리케이션용 속도 제한기.
- [lo](https://github.com/samber/lo) - Go 1.18+ 제네릭 기반의 Lodash 스타일 Go 라이브러리(map, filter, contains, find...)
- [loncha](https://github.com/kazu/loncha) - 고성능 슬라이스 유틸리티.
- [lrserver](https://github.com/jaschaephraim/lrserver) - Go용 LiveReload 서버.
- [mani](https://github.com/alajmo/mani) - 여러 저장소를 관리하도록 돕는 CLI 도구.
- [mc](https://github.com/minio/mc) - Minio Client는 Amazon S3 호환 클라우드 스토리지 및 파일 시스템을 다루기 위한 최소한의 도구를 제공합니다.
- [mergo](https://github.com/imdario/mergo) - Golang에서 구조체와 맵을 병합하는 헬퍼. 지저분한 if 문 없이 설정 기본값을 지정할 때 유용합니다.
- [mimemagic](https://github.com/zRedShift/mimemagic) - 순수 Go로 작성된 초고성능 MIME 스니핑 라이브러리/유틸리티.
- [mimetype](https://github.com/gabriel-vasile/mimetype) - 매직 넘버를 기반으로 MIME 타입을 감지하는 패키지.
- [minify](https://github.com/tdewolff/minify) - HTML, CSS, JS, XML, JSON, SVG 파일 형식을 위한 빠른 압축(minify) 도구.
- [minquery](https://github.com/icza/minquery) - 효율적인 페이지네이션(중단한 지점부터 문서 목록을 이어 가는 커서)을 지원하는 MongoDB / mgo.v2 쿼리.
- [moldova](https://github.com/StabbyCutyou/moldova) - 입력 템플릿을 기반으로 무작위 데이터를 생성하는 유틸리티.
- [mole](https://github.com/davrodpin/mole) - SSH 터널을 쉽게 만드는 CLI 앱.
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - 일반 쿼리와 집계 파이프라인을 모두 지원하는, 공식 mongodb/mongo-go-driver 패키지용 Mongodb 페이지네이션.
- [mssqlx](https://github.com/linxGnu/mssqlx) - 마스터-슬레이브, 마스터-마스터 구조를 위한 데이터베이스 클라이언트 라이브러리이자 프록시. 가볍고 자동 밸런싱을 염두에 두고 설계되었습니다.
- [multitick](https://github.com/VividCortex/multitick) - 정렬된 티커를 위한 멀티플렉서.
- [netbug](https://github.com/e-dard/netbug) - 서비스를 쉽게 원격 프로파일링합니다.
- [nfdump](https://github.com/chrispassas/nfdump) - nfdump netflow 파일을 읽습니다.
- [nostromo](https://github.com/pokanop/nostromo) - 강력한 별칭을 만들기 위한 CLI.
- [okrun](https://github.com/xta/okrun) - go run 오류를 밀어붙이는 스팀롤러.
- [olaf](https://github.com/btnguyen2k/olaf) - Go로 구현한 Twitter Snowflake.
- [onecache](https://github.com/adelowo/onecache) - 여러 백엔드 저장소(Redis, Memcached, 파일 시스템 등)를 지원하는 캐싱 라이브러리.
- [optional](https://github.com/kazhuravlev/optional) - 선택적 구조체 필드와 변수.
- [panicparse](https://github.com/maruel/panicparse) - 비슷한 고루틴을 그룹화하고 스택 덤프에 색상을 입힙니다.
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - 패턴 매칭 라이브러리.
- [peco](https://github.com/peco/peco) - 단순한 대화형 필터링 도구.
- [pgo](https://github.com/arthurkushman/pgo) - PHP 커뮤니티를 위한 편리한 함수.
- [pm](https://github.com/VividCortex/pm) - HTTP API를 갖춘 프로세스(즉, 고루틴) 관리자.
- [pointer](https://github.com/xorcare/pointer) - pointer 패키지는 기본 타입의 선택적 필드 생성을 단순화하는 헬퍼 루틴을 담고 있습니다.
- [ptr](https://github.com/gotidy/ptr) - 기본 타입 상수로부터 포인터를 간편하게 생성하는 함수를 제공하는 패키지.
- [rate](https://github.com/webriots/rate) - 토큰 버킷과 AIMD 전략을 갖춘 고성능 속도 제한 라이브러리.
- [rclient](https://github.com/zpatrick/rclient) - 읽기 쉽고 유연하며 사용하기 간단한 REST API용 클라이언트.
- [release](https://github.com/tomodian/release) - Keep-a-changelog 형식의 변경 로그를 위한 CLI.
- [relimpact](https://github.com/hashmap-kz/relimpact) - Go 프로젝트를 위한 빠른 API 호환성 보고서.
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - 스마트폰으로 마우스와 키보드를 제어합니다.
- [repeat](https://github.com/ssgreg/repeat) - 작업 재시도와 하트비트에 유용한 다양한 백오프 전략의 Go 구현.
- [request](https://github.com/mozillazg/request) - 사람을 위한 Go HTTP 요청(HTTP Requests for Humans™).
- [rerun](https://github.com/ivpusic/rerun) - 소스가 변경되면 Go 앱을 다시 컴파일하고 다시 실행합니다.
- [rest-go](https://github.com/edermanoel94/rest-go) - REST API 작업에 유용한 다양한 메서드를 제공하는 패키지.
- [retro](https://github.com/goioc/retro) - 폭넓은 유연성(백오프 전략, 상한 등)을 갖춘 편리한 오류 시 재시도 라이브러리.
- [retry](https://github.com/kamilsk/retry) - 성공할 때까지 작업을 반복 수행하는 가장 발전된 함수형 메커니즘.
- [retry](https://github.com/percolate/retry) - Go를 위한 간단하지만 설정 폭이 넓은 재시도 패키지.
- [retry](https://github.com/thedevsaddam/retry) - Go를 위한 간단하고 쉬운 재시도 메커니즘 패키지.
- [retry](https://github.com/shafreeck/retry) - 작업이 반드시 완료되도록 보장하는 아주 간단한 라이브러리.
- [retry-go](https://github.com/avast/retry-go) - 재시도 메커니즘을 위한 간단한 라이브러리.
- [retry-go](https://github.com/rafaeljesus/retry-go) - Golang에서 재시도를 간단하고 쉽게 만들어 줍니다.
- [robustly](https://github.com/VividCortex/robustly) - 패닉을 잡아 재시작하며 함수를 탄력적으로 실행합니다.
- [rospo](https://github.com/ferama/rospo) - Golang으로 작성된, 내장 SSH 서버를 갖춘 간단하고 안정적인 SSH 터널.
- [scan](https://github.com/blockloop/scan) - Golang `sql.Rows`를 구조체, 슬라이스, 기본 타입으로 직접 스캔합니다.
- [scan](https://github.com/wroge/scan) - 제네릭을 활용해 SQL 행을 어떤 타입으로든 스캔합니다.
- [scany](https://github.com/georgysavva/scany) - 데이터베이스의 데이터를 Go 구조체 등으로 스캔하기 위한 라이브러리.
- [serve](https://github.com/syntaqx/serve) - 필요한 곳 어디에서나 사용할 수 있는 정적 HTTP 서버.
- [sesh](https://github.com/joshmedeski/sesh) - Sesh는 zoxide를 사용해 tmux 세션을 빠르고 쉽게 만들고 관리할 수 있게 도와주는 CLI입니다.
- [set](https://github.com/nofeaturesonlybugs/set) - 성능이 뛰어나고 유연한 구조체 매핑 및 느슨한 타입 변환.
- [shutdown](https://github.com/ztrue/shutdown) - `os.Signal` 처리를 위한 앱 종료 훅.
- [silk](https://github.com/chrispassas/silk) - silk netflow 파일을 읽습니다.
- [slice](https://github.com/psampaz/slice) - 일반적인 Go 슬라이스 연산을 위한 타입 안전 함수.
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - 기본 타입 간 슬라이스 변환.
- [slicer](https://github.com/leaanthony/slicer) - 슬라이스 작업을 더 쉽게 만들어 줍니다.
- [sorty](https://github.com/jfcg/sorty) - 빠른 동시 / 병렬 정렬.
- [sqlex](https://github.com/go-sqlex/sqlex) - SQL 렉서 버그 수정, 자동 IN 절 확장, 플러그인 방식 훅, 통합된 DB/Tx/Conn 인터페이스를 갖춘, jmoiron/sqlx를 그대로 대체하는 현대화 버전.
- [sqlx](https://github.com/jmoiron/sqlx) - 훌륭한 내장 database/sql 패키지 위에 확장 기능 모음을 제공합니다.
- [sqlz](https://github.com/rfberaldo/sqlz) - 이름 있는 쿼리, 구조체 스캔, 일괄 작업을 추가하는 database/sql 패키지 확장.
- [sshman](https://github.com/shoobyban/sshman) - 여러 원격 서버의 authorized_keys 파일을 위한 SSH 관리자.
- [stacktower](https://github.com/stacktower-io/stacktower) - XKCD #2347에서 영감을 받아 의존성 그래프를 물리적인 탑 구조로 시각화합니다.
- [statiks](https://github.com/janiltonmaciel/statiks) - 빠르고 설정이 필요 없는 정적 HTTP 파일 서버.
- [Storm](https://github.com/asdine/storm) - BoltDB를 위한 간단하고 강력한 툴킷.
- [structs](https://github.com/PumpkinSeed/structs) - 구조체를 조작하기 위한 간단한 함수를 구현합니다.
- [throttle](https://github.com/yudppp/throttle) - Throttle은 지정된 시간마다 정확히 한 번의 동작을 수행하는 객체입니다.
- [tik](https://github.com/andy2046/tik) - Go를 위한 간단하고 쉬운 타이밍 휠 패키지.
- [tome](https://github.com/cyruzin/tome) - Tome은 간단한 RESTful API를 페이지네이션하기 위해 설계되었습니다.
- [toolbox](https://github.com/viant/toolbox) - 슬라이스, 맵, 멀티맵, 구조체, 함수, 데이터 변환 유틸리티. 서비스 라우터, 매크로 평가기, 토크나이저.
- [UNIS](https://github.com/esemplastic/unis) - Go 문자열 유틸리티를 위한 공통 아키텍처(Common Architecture™).
- [upterm](https://github.com/owenthereal/upterm) - 개발자가 웹을 통해 터미널/tmux 세션을 안전하게 공유할 수 있는 도구. 원격 페어 프로그래밍, NAT/방화벽 뒤의 컴퓨터 접근, 원격 디버깅 등에 안성맞춤입니다.
- [usql](https://github.com/knq/usql) - usql은 SQL 데이터베이스를 위한 범용 명령줄 인터페이스입니다.
- [util](https://github.com/shomali11/util) - 유용한 유틸리티 함수 모음. (문자열, 동시성, 조작, ...).
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - 명령을 주기적으로 실행하고 최신 STDOUT 또는 그 상세한 변경분을 HTTP 엔드포인트로 노출합니다.
- [wifiqr](https://github.com/reugn/wifiqr) - Wi-Fi QR 코드 생성기.
- [wuzz](https://github.com/asciimoo/wuzz) - HTTP 검사를 위한 대화형 CLI 도구.
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy는 Golang으로 작성된 바이너리 diff 및 패치 라이브러리를 제공합니다.
- [xpool](https://github.com/peczenyj/xpool) - 제네릭을 사용하는 또 하나의 Golang 타입 안전 객체 풀.
- [yogo](https://github.com/antham/yogo) - 명령줄에서 yopmail 메일을 확인합니다.

**[⬆ 맨 위로](#contents)**

## UUID

_UUID를 다루기 위한 라이브러리._

- [fastuuid](https://github.com/rekby/fastuuid) - UUIDv4를 문자열이나 바이트로 빠르게 생성합니다.
- [goid](https://github.com/jakehl/goid) - RFC4122를 준수하는 V4 UUID를 생성하고 파싱합니다.
- [gouid](https://github.com/twharmon/gouid) - 단 한 번의 할당으로 암호학적으로 안전한 무작위 문자열 ID를 생성합니다.
- [guid](https://github.com/sdrapkin/guid) - Go를 위한 빠르고 암호학적으로 안전한 Guid 생성기(`uuid`보다 약 10배 빠름).
- [nanoid](https://github.com/aidarkhanov/nanoid) - 작고 효율적인 Go 고유 문자열 ID 생성기.
- [nanoid](https://github.com/sixafter/nanoid) - 빠르고 동시적인 NanoID 및 UUID 생성을 위한 효율적이고 암호학적으로 안전한 생성기.
- [sno](https://github.com/muyo/sno) - 메타데이터가 내장된, 작고 정렬 가능하며 빠른 고유 ID.
- [ulid](https://github.com/oklog/ulid) - ULID(Universally Unique Lexicographically Sortable Identifier)의 Go 구현.
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - 명령으로 번거로움 없이 안전하고 빠르게 고유 식별자를 생성합니다.
- [uuid](https://github.com/agext/uuid) - 빠르거나 암호학적 품질의 무작위 노드 식별자로 UUID v1을 생성, 인코딩, 디코딩합니다.
- [uuid](https://github.com/gofrs/uuid) - 범용 고유 식별자(UUID)의 구현. UUID 생성과 파싱을 모두 지원합니다. satori uuid를 활발히 유지 관리하는 포크입니다.
- [uuid](https://github.com/google/uuid) - RFC 4122 및 DCE 1.1: Authentication and Security Services를 기반으로 한 UUID용 Go 패키지.
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - 표준 RFC 4122 형식에 따라 UUID를 검증하고 UUIDv7()을 UTC 타임스탬프로 변환하는, 의존성 없는 작은 Go 라이브러리.
- [wuid](https://github.com/edwingeng/wuid) - 매우 빠른 전역 고유 번호 생성기.
- [xid](https://github.com/rs/xid) - Xid는 서버 코드에서 바로 안전하게 사용할 수 있는 전역 고유 ID 생성 라이브러리입니다.

**[⬆ 맨 위로](#contents)**

## 유효성 검사

_유효성 검사를 위한 라이브러리._

- [checkdigit](https://github.com/osamingo/checkdigit) - 체크 디지트 알고리즘(Luhn, Verhoeff, Damm)과 계산기(ISBN, EAN, JAN, UPC 등)를 제공합니다.
- [checker](https://github.com/cinar/checker) - 구조체 태그, 23개 로케일, JSON Schema 생성을 지원하는 의존성 없는 입력 유효성 검사 및 제자리 정규화.
- [go-validator](https://github.com/tiendc/go-validator) - 제네릭을 사용하는 유효성 검사 라이브러리.
- [gody](https://github.com/guiferpa/gody) - :balloon: Go를 위한 경량 구조체 유효성 검사기.
- [govalid](https://github.com/twharmon/govalid) - 구조체를 위한 빠른 태그 기반 유효성 검사.
- [govalidator](https://github.com/asaskevich/govalidator) - 문자열, 숫자, 슬라이스, 구조체를 위한 유효성 검사기와 새니타이저.
- [govalidator](https://github.com/thedevsaddam/govalidator) - 간단한 규칙으로 Golang 요청 데이터를 검증합니다. Laravel의 요청 유효성 검사에서 큰 영감을 받았습니다.
- [govy](https://github.com/nobl9/govy) - 명확하고 정보가 풍부한 오류 메시지를 만드는 데 중점을 둔, 제네릭 기반에 리플렉션을 쓰지 않는 함수형 인터페이스의 강타입 유효성 검사 규칙.
- [hvalid](https://github.com/lyonnee/hvalid) hvalid는 Go 언어로 작성된 경량 유효성 검사 라이브러리입니다. 사용자 정의 유효성 검사기 인터페이스와 일련의 일반적인 유효성 검사 함수를 제공하여 개발자가 데이터 유효성 검사를 빠르게 구현할 수 있도록 돕습니다.
- [jio](https://github.com/faceair/jio) - jio는 [joi](https://github.com/hapijs/joi)와 비슷한 JSON 스키마 유효성 검사기입니다.
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - 구조체 태그 대신 일반 코드 구문으로 지정하는 설정 및 확장 가능한 유효성 검사 규칙으로 다양한 데이터 타입(구조체, 문자열, 맵, 슬라이스 등)의 유효성 검사를 지원합니다.
- [validate](https://github.com/gookit/validate) - 데이터 유효성 검사와 필터링을 위한 Go 패키지. Map, Struct, Request(Form, JSON, url.Values, 업로드된 파일) 데이터 검증 등 다양한 기능을 지원합니다.
- [validate](https://github.com/gobuffalo/validate) - Go 애플리케이션의 유효성 검사를 작성하기 위한 프레임워크를 제공하는 패키지입니다.
- [validator](https://github.com/go-playground/validator) - 필드 간, 구조체 간 검증과 Map, Slice, Array 내부 탐색을 포함한 Go 구조체 및 필드 유효성 검사.
- [Validator](https://github.com/go-the-way/validator) - Go로 작성된 경량 모델 유효성 검사기. Min, Max, MinLength, MaxLength, Length, Enum, Regex 검증 함수를 포함합니다.
- [valix](https://github.com/marrow16/valix) 요청 유효성 검사를 위한 Go 패키지
- [vx](https://github.com/sevlyar/vx) - 의존성 없이 작고 조합 가능한 검사로 구성되며 재구성 가능한 오류 경로를 제공하는 유효성 검사.
- [Zog](https://github.com/Oudwins/zog) - 런타임 값 파싱과 유효성 검사를 위한, [Zod](https://github.com/colinhacks/zod)에서 영감을 받은 스키마 빌더.
  **[⬆ 맨 위로](#contents)**

## 버전 관리

_버전 관리를 위한 라이브러리._

- [cli](https://gitlab.com/gitlab-org/cli) - GitLab의 멋진 기능을 명령줄로 가져오는 오픈 소스 GitLab 명령줄 도구.
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go는 VCS 제공자에 대한 작업을 수행할 수 있게 해 주는 Go 라이브러리입니다.
- [ggc](https://github.com/bmf-san/ggc) - 전통적인 명령줄과 대화형 증분 검색 UI를 모두 제공하고 워크플로 지원과 설정 가능한 키 바인딩을 갖춘 Git CLI 도구.
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - 토큰을 절약하고 비밀 정보 유출을 막기 위해 Ollama를 사용하는, Git 작업용 로컬 MCP 서버.
- [git2go](https://github.com/libgit2/git2go) - libgit2용 Go 바인딩.
- [githooks](https://github.com/gabyx/githooks) - 버전 관리와 자동 업데이트를 지원하는 저장소별 및 공유 Git 훅.
- [gitty](https://github.com/Omibranch/gitty) - add→commit→push를 명령 하나로 대체하는 단일 바이너리 Git/GitHub CLI. 사람이 읽기 쉬운 문법을 사용하며 외부 의존성이 없습니다.
- [go-git](https://github.com/go-git/go-git) - 순수 Go로 작성된 확장성이 뛰어난 Git 구현.
- [go-vcs](https://github.com/sourcegraph/go-vcs) - Go에서 VCS 저장소를 조작하고 검사합니다.
- [hercules](https://github.com/src-d/hercules) - Git 저장소 기록에서 고급 인사이트를 얻습니다.
- [hgo](https://github.com/beyang/hgo) - Hgo는 로컬 Mercurial 저장소에 대한 읽기 접근을 제공하는 Go 패키지 모음입니다.

**[⬆ 맨 위로](#contents)**

## 비디오

_비디오를 다루기 위한 라이브러리._

- [gmf](https://github.com/3d0c/gmf) - FFmpeg av\* 라이브러리용 Go 바인딩.
- [go-astiav](https://github.com/asticode/go-astiav) - GO를 위한 더 나은 ffmpeg C 바인딩.
- [go-astisub](https://github.com/asticode/go-astisub) - GO에서 자막(.srt, .stl, .ttml, .webvtt, .ssa/.ass, teletext, .smi 등)을 다룹니다.
- [go-astits](https://github.com/asticode/go-astits) - GO에서 MPEG 전송 스트림(.ts)을 네이티브로 파싱하고 역다중화합니다.
- [go-mpd](https://github.com/unki2aut/go-mpd) - MPEG-DASH 매니페스트 파일용 파서 및 생성기 라이브러리.
- [goav](https://github.com/giorgisio/goav) - FFmpeg를 위한 포괄적인 Go 바인딩.
- [gortsplib](https://github.com/aler9/gortsplib) - 순수 Go RTSP 서버 및 클라이언트 라이브러리.
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - HLS(M3U8) 재생 목록용 파서 및 생성기. 명세에 맞춰 최신 상태로 유지됩니다.
- [libvlc-go](https://github.com/adrg/libvlc-go) - libvlc 2.X/3.X/4.X용 Go 바인딩(VLC 미디어 플레이어에서 사용).
- [manifestor](https://github.com/alanzng/manifestor) - HLS 및 DASH 매니페스트를 파싱, 필터링, 변환, 생성하기 위한 의존성 없는 라이브러리.
* [mosaic](https://github.com/farshidrezaei/mosaic) - Go를 위한 예측 가능하고 프로덕션 환경에 바로 쓸 수 있는 적응형 비트레이트(ABR) 비디오 패키징(HLS 및 DASH CMAF).
- [mp4ff](https://github.com/Eyevinn/mp4ff) - 비디오, 오디오, 자막, 메타데이터를 담은 MP4 파일을 다루기 위한 라이브러리 및 도구.
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - PCR 타이밍 준수 여부를 검사하고 저수준 TS, PSI, PES 구조를 덤프하는 MPEG-2 전송 스트림 분석기.
- [v4l](https://github.com/korandiz/v4l) - Go로 작성된 Linux용 비디오 캡처 라이브러리.

**[⬆ 맨 위로](#contents)**

## 웹 프레임워크

_풀스택 웹 프레임워크._

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - 라우터, 미들웨어 스택, WebSocket 허브, 파일 업로드, OpenAPI 유효성 검사를 모두 갖춘 HTTP 서버 라이브러리.
- [Andurel](https://github.com/mbvlabs/andurel) - 스캐폴딩, 데이터베이스 도구, 서버 렌더링 또는 Inertia 프런트엔드를 갖춘, Rails에서 영감을 받은 풀스택 Go 웹 프레임워크.
- [Atreugo](https://github.com/savsgio/atreugo) - 핫 패스에서 메모리 할당이 전혀 없는 고성능의 확장 가능한 마이크로 웹 프레임워크.
- [Barf](https://github.com/opensaucerer/barf) - Basically, A Remarkable Framework의 약자로, JSON 기반 웹 API를 구축하기 위한 프레임워크입니다. 전혀 거슬리지 않으며 바퀴를 재발명하지 않습니다. 쉽고 빠르게 시작할 수 있으면서도 더 복잡한 사용 사례에도 대응할 만큼 유연하게 만들어졌습니다.
- [Beego](https://github.com/beego/beego) - beego는 Go 프로그래밍 언어를 위한 오픈 소스 고성능 웹 프레임워크입니다.
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti는 표현력 있고 우아한 문법을 갖춘 Go 웹 애플리케이션 프레임워크입니다. Laravel의 우아함과 Go의 단순함을 결합했습니다.
- [Don](https://github.com/abemedia/go-don) - 성능이 매우 뛰어나고 사용하기 간단한 API 프레임워크.
- [doors](https://github.com/doors-dev/doors) - 상태를 유지하는 반응형 웹 애플리케이션을 전부 Go로 구축하기 위한 서버 주도 프레임워크.
- [Echo](https://github.com/labstack/echo) - 고성능의 미니멀한 Go 웹 프레임워크.
- [Fastschema](https://github.com/fastschema/fastschema) - 유연한 Go 웹 프레임워크이자 헤드리스 CMS.
- [Fiber](https://github.com/gofiber/fiber) - Fasthttp 위에 구축된, Express.js에서 영감을 받은 웹 프레임워크.
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - 플러그인 방식 웹 프로젝트를 위한 프레임워크. 모듈 개념을 포함하며 DI, Configareas, i18n, 템플릿 엔진, graphql, 관측 가능성, 보안, 이벤트, 라우팅 및 역라우팅 등의 기능을 제공합니다.
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - DDD, 포트 및 어댑터 같은 클린 아키텍처를 사용해 유연한 전자상거래 애플리케이션을 구축할 수 있는 전자상거래 기능을 제공합니다.
- [Fuego](https://github.com/go-fuego/fuego) - 바쁜 Go 개발자를 위한 프레임워크! 소스 코드로부터 OpenAPI 3 명세를 생성하는 웹 프레임워크입니다.
- [Gin](https://github.com/gin-gonic/gin) - Gin은 Go로 작성된 웹 프레임워크입니다! martini와 비슷한 API를 제공하면서 성능은 훨씬 뛰어나 최대 40배 빠릅니다. 성능과 높은 생산성이 필요하다면 사용해 보세요.
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Gin 매개변수 자동 바인딩 도구, gin rpc 도구.
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - gRpc 우선 마이크로서비스 프레임워크. Mongo용 ODM 지원, 클라우드 리소스 지원(AWS/Azure/Google), gRpc에 맞춤화된 플루언트 의존성 주입 등의 기능을 제공합니다. 또한 grpc-web을 직접 지원하여 프록시 없이 브라우저에서 모든 gRpc API에 접근할 수 있습니다.
- [Goa](https://github.com/goadesign/goa) - Goa는 Go로 원격 API와 마이크로서비스를 개발하기 위한 총체적인 접근 방식을 제공합니다.
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr는 설계 방향이 뚜렷한 마이크로서비스 개발 프레임워크입니다.
- [GoFrame](https://github.com/gogf/gf) - GoFrame은 모듈식이고 강력하며 고성능인 엔터프라이즈급 Golang 애플리케이션 개발 프레임워크입니다.
- [Gone](https://github.com/gone-io/gone) - Spring에서 영감을 받은 경량 의존성 주입 및 웹 프레임워크.
- [goravel](https://github.com/goravel/goravel) - ORM, 인증, 큐, 작업 스케줄링 등의 기능이 내장된, Laravel에서 영감을 받은 웹 프레임워크.
- [Goshtoso](https://github.com/araihu/goshtoso) - templ, Tailwind CSS, HTMX, Alpine.js로 만든 Go 애플리케이션용 서버 렌더링 UI 컴포넌트.
- [Goyave](https://github.com/go-goyave/goyave) - 강력한 내장 기능을 갖추고 깔끔한 코드와 빠른 개발을 목표로 하는, 기능이 완전한 REST API 프레임워크.
- [Hertz](https://github.com/cloudwego/hertz) - 개발자가 마이크로서비스를 구축하도록 돕는, 고성능에 확장성이 뛰어난 Go HTTP 프레임워크.
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot은 자동 설정과 의존성 주입을 지원하는 고성능 웹 애플리케이션 프레임워크입니다.
- [httpsuite](https://github.com/rluders/httpsuite) - 표준 라이브러리만 사용하는 코어와 선택적 유효성 검사를 갖춘, Go용 HTTP 요청 파싱 및 RFC 9457 문제 응답.
- [Huma](https://github.com/danielgtaylor/huma/) - 내장 OpenAPI 3, 자동 생성 문서, CLI를 갖춘 현대적인 REST/GraphQL API용 프레임워크.
- [iWF](https://github.com/indeedeng/iwf) - iWF는 장기 실행 비즈니스 프로세스를 개발하기 위한 올인원 플랫폼입니다. 깔끔하고 간단하며 사용자 친화적인 인터페이스로 데이터베이스, ElasticSearch, 메시지 큐, 지속성 타이머 등을 활용하기 위한 편리한 추상화를 제공합니다.
- [Lit](https://github.com/jvcoutinho/lit) - 단순함과 개발 편의성을 목표로 하는, 성능이 뛰어난 Golang용 선언적 웹 프레임워크.
- [Microservice](https://github.com/claygod/microservice) - Golang으로 작성된, 마이크로서비스 생성을 위한 프레임워크.
- [NotNet](https://github.com/nottechdm/notnet) - 미들웨어와 유연한 라우팅으로 빠르고 사용하기 편한 RESTful API를 구축하기 위한 경량 Go 프레임워크.
- [patron](https://github.com/beatlabs/patron) - Patron은 생산성에 중점을 두고 클라우드 모범 사례를 따르는 마이크로서비스 프레임워크입니다.
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux는 정규식으로 HTTP 요청을 매칭하고 처리하는 강력한 Go 웹 프레임워크입니다. CORS 처리, 구조화된 로깅, URL 매개변수 추출, 미들웨어, 동시성 제한 등의 기능을 제공합니다.
- [Revel](https://github.com/revel/revel) - Go 언어를 위한 고생산성 웹 프레임워크.
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Gin과 gRPC로 엔터프라이즈 Go 마이크로서비스를 빠르고 쉽게 구축하기 위한 부트스트래퍼 라이브러리.
- [Ronykit](https://github.com/clubpay/ronykit) - 플러그인 방식 아키텍처를 갖추고 성능이 매우 뛰어난 웹 프레임워크.
- [rux](https://github.com/gookit/rux) - Golang HTTP 애플리케이션을 구축하기 위한 간단하고 빠른 웹 프레임워크.
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Go와 templ을 위한 비공식 shadcn/ui 포트: CLI와 레지스트리를 갖춘 접근성 높은 UI 컴포넌트.
- [togo](https://github.com/togo-framework/togo) - Go 백엔드와 React 프런트엔드를 단일 바이너리로 배포하는 풀스택 프레임워크. Laravel artisan 수준의 CLI를 제공합니다.
- [uAdmin](https://github.com/uadmin/uadmin) - Django에서 영감을 받은, 모든 기능을 갖춘 Golang용 웹 프레임워크.
- [WebGo](https://github.com/naughtygopher/webgo) - 핸들러 체이닝, 미들웨어, 컨텍스트 주입으로 웹 앱을 구축하기 위한 마이크로 프레임워크. 표준 라이브러리를 준수하는 HTTP 핸들러(즉, `http.HandlerFunc`)를 사용합니다.
- [Xun](https://github.com/yaitoo/xun) - Go 내장 html/template과 net/http 패키지의 라우터 위에 구축된 웹 프레임워크. 가볍고 빠르며 사용하기 쉽도록 설계되었으며, 미들웨어, 라우팅, 템플릿 렌더링 같은 고급 기능으로 웹 애플리케이션을 구축하기 위한 간단하고 직관적인 API를 제공합니다.
- [Yokai](https://github.com/ankorstore/yokai) - 백엔드 애플리케이션을 위한 간단하고 모듈식이며 관찰 가능한 Go 프레임워크.

**[⬆ 맨 위로](#contents)**

### 미들웨어

#### 실제 미들웨어

- [client-timing](https://github.com/posener/client-timing) - Server-Timing 헤더를 위한 HTTP 클라이언트.
- [CORS](https://github.com/rs/cors) - API에 CORS 기능을 쉽게 추가합니다.
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - 로깅과 메트릭을 갖춘 Echo 프레임워크용 미들웨어.
- [formjson](https://github.com/rs/formjson) - JSON 입력을 표준 폼 POST처럼 투명하게 처리합니다.
- [go-fault](https://github.com/github/go-fault) - Go용 장애 주입 미들웨어.
- [Limiter](https://github.com/ulule/limiter) - Go를 위한 아주 간단한 속도 제한 미들웨어.
- [ln-paywall](https://github.com/philippgille/ln-paywall) - 라이트닝 네트워크(Bitcoin)로 요청 단위 API 수익화를 구현하는 Go 미들웨어.
- [mid](https://github.com/bobg/mid) - 다양한 HTTP 미들웨어 기능: 핸들러의 관용적인 오류 반환, JSON 데이터 수신/응답, 요청 추적 등.
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - 로깅, 메트릭, 인증, 추적 등을 갖춘 Gin 프레임워크용 미들웨어.
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - 로깅, 메트릭, 인증, 추적 등을 갖춘 gRPC용 미들웨어.
- [Tollbooth](https://github.com/didip/tollbooth) - HTTP 요청 속도 제한 핸들러.
- [XFF](https://github.com/sebest/xff) - `X-Forwarded-For` 헤더와 관련 헤더를 처리합니다.

#### HTTP 미들웨어 작성용 라이브러리

- [alice](https://github.com/justinas/alice) - Go를 위한 손쉬운 미들웨어 체이닝.
- [catena](https://github.com/codemodus/catena) - http.Handler 래퍼 연결("chain"과 동일한 API).
- [chain](https://github.com/codemodus/chain) - 범위 지정 데이터를 갖춘 핸들러 래퍼 체이닝(net/context 기반 "미들웨어").
- [gores](https://github.com/alioygur/gores) - HTML, JSON, XML 등의 응답을 처리하는 Go 패키지. RESTful API에 유용합니다.
- [interpose](https://github.com/carbocation/interpose) - Golang을 위한 미니멀한 net/http 미들웨어.
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - `http.Client`에 인터셉터를 추가하여 요청/응답의 덤프, 변형, 추적 등을 가능하게 합니다.
- [muxchain](https://github.com/stephens2424/muxchain) - net/http용 경량 미들웨어.
- [negroni](https://github.com/urfave/negroni) - Golang을 위한 관용적인 HTTP 미들웨어.
- [render](https://github.com/unrolled/render) - JSON, XML, HTML 템플릿 응답을 쉽게 렌더링하기 위한 Go 패키지.
- [renderer](https://github.com/thedevsaddam/renderer) - Go를 위한 간단하고 가벼우며 더 빠른 응답(JSON, JSONP, XML, YAML, HTML, File) 렌더링 패키지.
- [stats](https://github.com/thoas/stats) - 웹 애플리케이션에 관한 다양한 정보를 저장하는 Go 미들웨어.

**[⬆ 맨 위로](#contents)**

### 라우터

- [alien](https://github.com/gernest/alien) - 우주에서 온 가볍고 빠른 HTTP 라우터.
- [bellt](https://github.com/GuilhermeCaruso/bellt) - 간단한 Go HTTP 라우터.
- [Bone](https://github.com/go-zoo/bone) - 번개처럼 빠른 HTTP 멀티플렉서.
- [Bxog](https://github.com/claygod/Bxog) - Go를 위한 간단하고 빠른 HTTP 라우터. 다양한 복잡도, 길이, 중첩 수준의 라우트를 처리합니다. 또한 전달받은 매개변수로 URL을 생성할 수도 있습니다.
- [chi](https://github.com/go-chi/chi) - net/context 위에 구축된 작고 빠르며 표현력 있는 HTTP 라우터.
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - `httprouter`에서 포크한 고성능 라우터. `fasthttp`에 맞춘 최초의 라우터입니다.
- [FastRouter](https://github.com/razonyang/fastrouter) - Go로 작성된 빠르고 유연한 HTTP 라우터.
- [Fox](https://github.com/fox-toolkit/fox) - 런타임에 라우트를 변경하는 기능을 일급으로 지원하는, 리버스 프록시와 API 게이트웨이 구축을 위한 고성능 HTTP 라우터.
- [fursy](https://github.com/coregx/fursy) - 타입 안전 제네릭 핸들러, 코드로부터의 자동 OpenAPI 3.1 생성, RFC 9457 오류 응답을 갖춘 HTTP 라우터.
- [goblin](https://github.com/bmf-san/goblin) - 트라이 트리 기반의 Golang HTTP 라우터.
- [gocraft/web](https://github.com/gocraft/web) - Go로 작성된 Mux 및 미들웨어 패키지.
- [Goji](https://github.com/goji/goji) - Goji는 `net/context`를 지원하는 미니멀하고 유연한 HTTP 요청 멀티플렉서입니다.
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router는 Go 프로그래밍 언어를 위한 가볍지만 강력한 HTTP 라우터입니다.
- [goroute](https://github.com/goroute/route) - 간단하지만 강력한 HTTP 요청 멀티플렉서.
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter는 `net/context`를 지원하는 미들웨어와 함께 요청 라우터를 제공하는 서버/API 마이크로 프레임워크이자 HTTP 요청 라우터, 멀티플렉서, mux입니다.
- [gowww/router](https://github.com/gowww/router) - net/http.Handler 인터페이스와 완전히 호환되는 번개처럼 빠른 HTTP 라우터.
- [httprouter](https://github.com/julienschmidt/httprouter) - 고성능 라우터. 이 라우터와 표준 HTTP 핸들러를 함께 사용하면 매우 높은 성능의 웹 프레임워크를 구성할 수 있습니다.
- [httptreemux](https://github.com/dimfeld/httptreemux) - Go를 위한 고속의 유연한 트리 기반 HTTP 라우터. httprouter에서 영감을 받았습니다.
- [lars](https://github.com/go-playground/lars) - 사용자 정의 가능한 프레임워크를 만드는 데 쓰이는, Go용 경량의 빠르고 확장 가능한 할당 없는 HTTP 라우터입니다.
- [mux](https://github.com/gorilla/mux) - Golang을 위한 강력한 URL 라우터 및 디스패처.
- [nchi](https://github.com/muir/nchi) - 의존성 주입 기반 미들웨어 래퍼를 갖춘, httprouter 위에 구축된 chi 스타일 라우터
- [ngamux](https://github.com/ngamux/ngamux) - Go를 위한 간단한 HTTP 라우터.
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - 정규 표현식 라우트 매칭을 지원하는 매우 빠른 Go(golang) HTTP 라우터. RESTful API 구축을 완벽하게 지원합니다.
- [pure](https://github.com/go-playground/pure) - 표준 "net/http" 구현을 고수하는 경량 HTTP 라우터입니다.
- [Siesta](https://github.com/VividCortex/siesta) - 미들웨어와 핸들러를 작성하기 위한 조합 가능한 프레임워크.
- [vestigo](https://github.com/husobee/vestigo) - Go 웹 애플리케이션을 위한 고성능의 독립형 HTTP 준수 URL 라우터.
- [violetear](https://github.com/nbari/violetear) - Go HTTP 라우터.
- [xmux](https://github.com/rs/xmux) - `net/context`를 지원하는, `httprouter` 기반의 고성능 먹서(muxer).
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Go를 위한 간단하고 빠른 HTTP 라우터.

**[⬆ 맨 위로](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - DOM 라이브러리.
- [Extism Go SDK](https://github.com/extism/go-sdk) - 플러그인 시스템과 폴리글랏 앱을 구축하기 위한 범용 다중 언어 WebAssembly 프레임워크.
- [go-canvas](https://github.com/markfarnan/go-canvas) - 모든 그리기를 Go 코드 안에서 처리하며 HTML5 Canvas를 사용하기 위한 라이브러리.
- [tinygo](https://github.com/tinygo-org/tinygo) - 작은 환경을 위한 Go 컴파일러. 마이크로컨트롤러, WebAssembly, 명령줄 도구를 대상으로 하며 LLVM 기반입니다.
- [vert](https://github.com/norunners/vert) - Go 값과 JS 값 사이의 상호 운용.
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - 브라우저에서 Go WASM 테스트를 실행합니다.
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Wasmtime WebAssembly 런타임용 Go 바인딩(WASI 지원, JIT/AOT, 안전하고 빠른 임베딩).
- [webapi](https://github.com/gowebapi/webapi) - WebIDL로부터 생성된 DOM 및 HTML 바인딩.

**[⬆ 맨 위로](#contents)**

## 웹훅 서버

- [HookRun](https://github.com/bluvenr/hookrun) - 경량 웹훅 액션 엔진(~3MB 단일 바이너리, 의존성 없음)으로 YAML 규칙에서 토큰/HMAC/IP 인증 및 핫 리로드를 통해 명령과 스크립트를 실행합니다.
- [webhook](https://github.com/adnanh/webhook) - 사용자가 서버에서 명령을 실행하는 HTTP 엔드포인트(훅)를 생성할 수 있게 해주는 도구입니다.
- [webhooked](https://github.com/42Atomys/webhooked) - 스테로이드를 맞은 웹훅 수신기: 웹훅 페이로드를 처리, 보안, 형식 지정 및 저장하는 것이 그 어느 때보다 쉬워졌습니다.
- [WebhookX](https://github.com/webhookx-io/webhookx) - 메시지 수신, 처리 및 안정적인 전달을 위한 웹훅 게이트웨이입니다.

**[⬆ 맨 위로](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Direct3D9용 Go 바인딩입니다.
- [go-ole](https://github.com/go-ole/go-ole) - golang을 위한 Win32 OLE 구현입니다.
- [gosddl](https://github.com/MonaxGT/gosddl) - SDDL 문자열을 사용자 친화적 JSON으로 변환합니다. SDDL은 네 부분으로 구성됩니다: 소유자, 주 그룹, DACL, SACL입니다.
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - go-ole를 사용하는 Windows Update Agent API용 Golang 바인딩입니다.

**[⬆ 맨 위로](#contents)**

## 워크플로 프레임워크

_워크플로를 생성하기 위한 라이브러리._

- [Cadence-client](https://github.com/uber-go/cadence-client) - Uber에서 만든 Cadence 오케스트레이션 엔진 위에서 실행되는 워크플로와 액티비티를 작성하기 위한 프레임워크입니다.
- [Dagu](https://github.com/dagu-go/dagu) - 코드 없는 워크플로 실행기입니다. 간단한 YAML 형식으로 정의된 DAG를 실행합니다.
- [durable-go](https://github.com/agenticenv/durable-go) - 단일 프로세스 Go 앱 및 AI 에이전트를 위한 지속 가능한 실행 엔진으로 의존성이 없습니다.
- [Flowbaker](https://github.com/flowbaker/flowbaker) - 코드 없는 워크플로를 구축, 연결 및 자동화하기 위한 자체 호스팅 실행 엔진입니다.
- [go-dag](https://github.com/rhosocial/go-dag) - 방향성 비순환 그래프로 설명된 워크플로의 실행을 관리하는 Go로 개발된 프레임워크입니다.
- [go-taskflow](https://github.com/noneback/go-taskflow) - 통합 시각화 및 프로파일러를 포함한 작업 흐름과 유사한 범용 작업 병렬 프로그래밍 프레임워크입니다.
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Postgres, MySQL 또는 SQLite로 지원되는 내장 웹 콘솔이 있는 내구성 있는 워크플로 엔진입니다.
- [workflow](https://github.com/luno/workflow) - 기술 스택에 구애받지 않는 이벤트 기반 워크플로 프레임워크입니다.

**[⬆ 맨 위로](#contents)**

## XML

_XML을 조작하기 위한 라이브러리 및 도구._

- [XML-Comp](https://github.com/xml-comp/xml-comp) - 폴더, 파일 및 태그의 차이점을 생성하는 간단한 명령줄 XML 비교 도구입니다.
- [xml2map](https://github.com/sbabiv/xml2map) - Golang으로 작성된 XML을 MAP로 변환합니다.
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery는 XML 쿼리를 위한 Golang XPath 패키지입니다.
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - libxml2의 xmlwriter 모듈을 기반으로 한 절차형 XML 생성 API입니다.
- [xpath](https://github.com/antchfx/xpath) - Go용 XPath 패키지입니다.
- [zek](https://github.com/miku/zek) - XML에서 Go 구조체를 생성합니다.

## 제로 트러스트

_제로 트러스트 아키텍처를 구현하기 위한 라이브러리 및 도구._

- [Cosign](https://github.com/sigstore/cosign) - OCI 레지스트리에서 컨테이너 서명, 검증 및 저장입니다.
- [in-toto](https://github.com/in-toto/in-toto-golang) - in-toto의 Go 구현(소프트웨어 공급망의 무결성을 보호하기 위한 프레임워크를 제공합니다) Python 참조 구현입니다.
- [OpenZiti](https://github.com/openziti/ziti) - 완전한 오픈 소스 제로 트러스트 오버레이 네트워크입니다. [golang](https://github.com/openziti/sdk-golang)을 포함한 여러 언어를 위한 수많은 SDK를 포함하고 있어 제로 트러스트 원칙을 응용 프로그램에 직접 포함할 수 있습니다. [OpenZiti 테스트 키친](https://github.com/openziti-test-kitchen)에는 [제로 트러스트 ssh 클라이언트 - zssh](https://github.com/openziti-test-kitchen/zssh)를 포함한 영감을 얻을 수 있는 수많은 예시가 있습니다.
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Hashicorp Vault를 사용한 Spiffe JWT 인증을 활용하여 비밀 없는 인증을 제공합니다.
- [Spire](https://github.com/spiffe/spire) - SPIRE(SPIFFE 런타임 환경)는 다양한 호스팅 플랫폼에 걸쳐 소프트웨어 시스템 간의 신뢰를 설정하기 위한 API의 도구 모음입니다.

## 코드 분석

_소스 코드 분석 도구로 정적 응용 프로그램 보안 테스트(SAST) 도구라고도 합니다._

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Go 프로젝트에 대한 최근 변경 사항을 확인하여 이전 버전과의 호환성이 없는 변경 사항을 확인합니다.
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Go 및 기타 언어를 위한 정적 코드 분석기입니다: HTML, JSON, Markdown 및 SARIF 보고서가 있는 복잡성, 결합, 응집력 및 유지 보수 가능성 메트릭입니다.
- [asty](https://github.com/asty-org/asty) - golang AST를 JSON으로, JSON을 AST로 변환합니다.
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket은 Go 패키지에서 직접 단위 테스트가 없는 함수를 포착하는 데 도움이 되는 도구입니다.
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Go lang 직접 GitHub 의존성 중 어느 것이 ChainJacking 공격에 취약한지 찾습니다.
- [Chronos](https://github.com/amit-davidson/Chronos) - 정적으로 경합 조건을 감지합니다.
- [deadmono](https://github.com/arxeiss/deadmono) - Go monorepo에서 죽은 코드 감지를 위한 deadcode 주위의 래퍼입니다.
- [dupl](https://github.com/mibk/dupl) - 코드 복제 감지를 위한 도구입니다.
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck는 Go 프로그램에서 확인되지 않은 오류를 확인하기 위한 프로그램입니다.
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext는 루프 또는 함수 리터럴의 중첩된 컨텍스트를 감지합니다.
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle은 java checkstyle과 유사한 스타일 확인 도구입니다. 이 도구는 java checkstyle, golint에서 영감을 받았습니다. 스타일은 Go Code Review Comments의 일부 요점을 참고합니다.
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch는 Clean Architecture 규칙(예: The Dependency Rule 및 Go 프로젝트의 패키지 간 상호 작용)을 검증하기 위해 생성되었습니다.
- [go-critic](https://github.com/go-critic/go-critic) - 현재 다른 린터에서 구현되지 않은 검사를 제공하는 소스 코드 린터입니다.
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Go 프로젝트의 오래된 의존성을 찾는 쉬운 방법입니다.
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - 웹 기반 Golang AST 시각화 도구입니다.
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Go 가져오기를 자동으로 수정(추가, 제거)하기 위한 도구입니다.
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - iFood API SDK입니다.
- [golangci-lint](https://github.com/golangci/golangci-lint) – 빠른 Go 린터 러너입니다. 린터를 병렬로 실행하고 캐싱을 사용하며 `yaml` 구성을 지원하고 모든 주요 IDE와의 통합을 가지며 수십 개의 린터가 포함되어 있습니다.
- [golines](https://github.com/segmentio/golines) - Go 코드의 긴 줄을 자동으로 단축하는 포매터입니다.
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - 기본 제공 HTTP 링크 검증, 단일 바이너리, Node.js 필요 없음을 포함한 Markdown 린터입니다.
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - 구조 및 인터페이스에 대한 정보와 그들 간의 관계를 포함하는 텍스트 plantump 클래스 다이어그램을 생성하는 라이브러리 및 CLI입니다.
- [goreturns](https://github.com/sqs/goreturns) - func 반환 타입과 일치하도록 0값 return 문을 추가합니다.
- [gostatus](https://github.com/shurcooL/gostatus) - 명령줄 도구로 Go 패키지를 포함하는 저장소의 상태를 보여줍니다.
- [lint](https://github.com/surullabs/lint) - go 테스트의 일부로 린터를 실행합니다.
- [php-parser](https://github.com/z7zmey/php-parser) - Go로 작성된 PHP용 파서입니다.
- [revive](https://github.com/mgechev/revive) – ~6배 더 빠르고, 더 엄격하며, 구성 가능하고, 확장 가능하며, `golint`를 위한 아름다운 드롭인 대체입니다.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck는 `go vet`의 스테로이드 버전으로 C#용 ReSharper와 같은 도구에서 사용할 수 있는 수많은 정적 분석 검사를 적용합니다.
- [structalign](https://github.com/peczenyj/structalign) - 구조체의 필드를 재정렬하여 더 적은 메모리를 사용하는 방법을 보여주고 파일을 다시 쓰는 대신 diff를 인쇄합니다.
- [stto](https://github.com/mainak55512/stto) - 순수 Go로 작성된 경량의 매우 빠른 코드 줄 카운터입니다.
- [testifylint](https://github.com/Antonboom/testifylint) – [github.com/stretchr/testify](https://github.com/stretchr/testify) 사용을 확인하는 린터입니다.
- [tickgit](https://github.com/augmentable-dev/tickgit) - 코드 주석 TODO(모든 언어)를 표시하고 `git blame`을 적용하여 작성자를 식별하기 위한 CLI 및 go 패키지입니다.
- [todocheck](https://github.com/preslavmihaylov/todocheck) - 코드의 TODO 주석을 이슈 추적기의 이슈와 연결하는 정적 코드 분석기입니다.
- [unconvert](https://github.com/mdempsky/unconvert) - Go 소스에서 불필요한 타입 변환을 제거합니다.
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Go 표준 라이브러리의 변수/상수를 사용할 수 있는 가능성을 감지하는 린터입니다.
- [vacuum](https://github.com/daveshanley/vacuum) - 초고속, 경량 OpenAPI 린터 및 품질 검사 도구입니다.
- [validate](https://github.com/mccoyst/validate) - 태그를 사용하여 자동으로 구조 필드를 검증합니다.
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - 외부 패키지의 오류를 래핑하는 린터입니다.

**[⬆ 맨 위로](#contents)**

## 에디터 플러그인

_텍스트 편집기 및 IDE용 플러그인._

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - 이 플러그인은 [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) 기능을 Vim/Neovim에 추가합니다.
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - 출력에서 정의를 표시하고 go 문서를 생성하기 위한 Visual Studio Code 확장입니다.
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - JetBrains IDE용 Go 플러그인입니다.
- [go-mode](https://github.com/dominikh/go-mode.el) - GNU/Emacs용 Go 모드입니다.
- [gocode](https://github.com/nsf/gocode) - Go 프로그래밍 언어를 위한 자동 완성 데몬입니다.
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - 가져오기 형식 지정 도구입니다.
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - 이 확장은 VS Code에 Go 언어를 위한 벤치마크 프로파일링 지원을 추가합니다.
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - SublimeText 3 텍스트 편집기를 위한 Golang 플러그인 컬렉션으로 코드 완성 및 기타 IDE와 유사한 기능을 제공합니다.
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - 함수 또는 메서드의 서명을 기반으로 Go 테스트를 생성하기 위한 Vim 플러그인입니다.
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - 저장 시 구문 오류를 강조하기 위한 Vim 플러그인입니다.
- [vim-go](https://github.com/fatih/vim-go) - Vim용 Go 개발 플러그인입니다.
- [vscode-go](https://github.com/golang/vscode-go) - Go 언어에 대한 지원을 제공하는 Visual Studio Code(VS Code)의 확장입니다.
- [Watch](https://github.com/eaburns/Watch) - 파일 변경 시 acme 승리에서 명령을 실행합니다.

**[⬆ 맨 위로](#contents)**

## Go Generate 도구

- [envdoc](https://github.com/g4s8/envdoc) - Go 소스 파일에서 환경 변수에 대한 문서를 생성합니다.
- [generic](https://github.com/usk81/generic) - Go를 위한 유연한 데이터 타입입니다.
- [gocontracts](https://github.com/Parquery/gocontracts) - 계약 설계를 Go에 제공하고 코드를 문서와 동기화합니다.
- [godal](https://github.com/mafulong/godal) - SQL DDL 파일을 지정하여 golang에 해당하는 ORM 모델을 생성하고 gorm에서 사용할 수 있습니다.
- [gonerics](https://github.com/bouk/gonerics) - Go의 관용적 제네릭입니다.
- [gotests](https://github.com/cweill/gotests) - 소스 코드에서 Go 테스트를 생성합니다.
- [gounit](https://github.com/hexdigest/gounit) - 자신의 템플릿을 사용하여 Go 테스트를 생성합니다.
- [hasgo](https://github.com/DylanMeeus/hasgo) - 슬라이스에 대해 Haskell 영감 함수를 생성합니다.
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - OpenAPI 사양의 x-constants 확장에서 입력한 Go 상수를 생성합니다.
- [options-gen](https://github.com/kazhuravlev/options-gen) - Dave Cheney의 게시물 "친화적인 API를 위한 기능 옵션"으로 설명된 함수 옵션입니다.
- [re2dfa](https://gitlab.com/opennota/re2dfa) - 정규식을 유한 상태 머신으로 변환하고 Go 소스 코드를 출력합니다.
- [sqlgen](https://github.com/anqiansong/sqlgen) - SQL 파일 또는 DSN에서 gorm, xorm, sqlx, bun, sql 코드를 생성합니다.
- [TOML-to-Go](https://xuri.me/toml-to-go) - TOML을 브라우저에서 즉시 Go 타입으로 변환합니다.
- [xgen](https://github.com/xuri/xgen) - XSD(XML 스키마 정의) 파서 및 Go/C/Java/Rust/TypeScript 코드 생성기입니다.

**[⬆ 맨 위로](#contents)**

## Go 도구

- [decouple](https://github.com/bobg/decouple) - 인터페이스 타입으로 일반화될 수 있는 "과도하게 지정된" 함수 매개 변수를 찾습니다.
- [docs](https://github.com/go-oas/docs) - GO 프로젝트에 대해 Open API 사양 표준에 맞춘 RESTful API 문서를 자동으로 생성합니다.
- [go-callvis](https://github.com/TrueFurby/go-callvis) - dot 형식을 사용하여 Go 프로그램의 호출 그래프를 시각화합니다.
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - 컴파일된 Golang 바이너리의 의존성 크기를 분석하고 시각화하여 최종 빌드에 미치는 영향을 파악할 수 있습니다.
- [go-swagger](https://github.com/go-swagger/go-swagger) - go용 Swagger 2.0 구현입니다. Swagger는 RESTful API를 간단하면서도 강력하게 표현합니다.
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Go 템플릿을 생성하고 테스트하기 위한 대화형 환경입니다.
- [godbg](https://github.com/tylerwince/godbg) - Rust의 `dbg!` 매크로를 개발 중에 빠르고 쉽게 디버깅하기 위해 구현합니다.
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - 코드베이스 전체에서 특정 Go 인터페이스를 구현하는 모든 구조체를 찾습니다.
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - go.mod 파일에 포함된 바이너리를 실행하고 캐시하는 Go 도구입니다.
- [gotemplate.io](https://gotemplate.io/) - `text/template` 템플릿을 실시간으로 미리 보기 위한 온라인 도구입니다.
- [gotestdox](https://github.com/bitfield/gotestdox) - Go 테스트 결과를 읽을 수 있는 문장으로 보여줍니다.
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks는 자동으로 go.mod github 의존성에 별을 표시하여 유지 관리자에게 사랑을 보냅니다.
- [gotutor](https://github.com/ahmedakef/gotutor) - 온라인 Go 디버거 및 시각화 도구입니다.
- [govisual](https://github.com/doganarif/govisual) - 로컬 Go 웹 개발을 위한 구성 없음, 순수 Go HTTP 요청 시각화 및 디버거입니다.
- [igo](https://github.com/rocketlaunchr/igo) - Go 언어로의 igo 변환기(Go 언어의 새로운 언어 기능!)
- [lensm](https://github.com/loov/lensm) - Go 어셈블리 및 소스 뷰어입니다.
- [modver](https://github.com/bobg/modver) - Go 모듈의 두 버전을 비교하여 [semver](https://semver.org/) 규칙에 따라 필요한 버전 번호 변경(주, 부, 패치 레벨)을 확인합니다.
- [MoniGO](https://github.com/iyashjayesh/monigo) - Go 응용 프로그램을 위한 성능 모니터링 라이브러리입니다. 응용 프로그램 성능에 대한 실시간 인사이트를 제공합니다! 🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - GitHub를 위한 OctoLinker 브라우저 확장을 통해 효율적으로 go 파일을 탐색합니다.
- [richgo](https://github.com/kyoh86/richgo) - 텍스트 장식으로 `go test` 출력을 풍부하게 합니다.
- [roumon](https://github.com/becheran/roumon) - 명령줄 인터페이스를 통해 현재 상태의 모든 활성 고루틴을 모니터합니다.
- [rts](https://github.com/galeone/rts) - RTS: 구조로의 응답입니다. 서버 응답에서 Go 구조체를 생성합니다.
- [textra](https://github.com/ravsii/textra) - 필터링 및 내보내기를 위해 Go 구조체 필드 이름, 타입 및 태그를 추출합니다.
- [typex](https://github.com/dtgorski/typex) - Go 타입 및 이들의 추이 종속성을 검토하고 선택적으로 결과를 TypeScript 값 객체(또는 타입) 선언으로 내보냅니다.

**[⬆ 맨 위로](#contents)**

## 소프트웨어 패키지

_Go로 작성된 소프트웨어._

**[⬆ 맨 위로](#contents)**

### DevOps 도구

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate는 긴 문자열을 설정 가능한 구분 기호를 사용하여 더 짧은 것으로 변환하는 도구입니다. 예를 들어 브랜치 이름을 배포 스택 ID에 임베드하는 경우에 사용합니다.
- [alaz](https://github.com/ddosify/alaz) - 손쉬운 저오버헤드 eBPF 기반 Kubernetes 모니터링.
- [aptly](https://github.com/aptly-dev/aptly) - aptly는 Debian 저장소 관리 도구입니다.
- [aurora](https://github.com/xuri/aurora) - 크로스 플랫폼 웹 기반 Beanstalkd 큐 서버 콘솔.
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - AWS 비용을 진단하고 유휴 리소스를 감지하며 터미널에서 바로 클라우드 비용을 최적화합니다 🩺 ☁️.
- [awsenv](https://github.com/soniah/awsenv) - Amazon(AWS) 환경 변수를 프로필에 대해 로드하는 작은 바이너리입니다.
- [Balerter](https://github.com/balerter/balerter) - 셀프 호스팅 스크립트 기반 경고 관리자입니다.
- [Blast](https://github.com/dave/blast) - API 로드 테스트 및 배치 작업을 위한 간단한 도구입니다.
- [bombardier](https://github.com/codesenberg/bombardier) - 빠른 크로스 플랫폼 HTTP 벤치마킹 도구입니다.
- [cassowary](https://github.com/rogerwelin/cassowary) - Go로 작성된 현대적 크로스 플랫폼 HTTP 로드 테스트 도구입니다.
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - 애플리케이션이 임의의 인스턴스 장애를 허용할 수 있도록 도와주는 복원력 도구입니다.
- [colima](https://github.com/abiosoft/colima) - macOS(및 Linux)에서 최소한의 설정으로 컨테이너 런타임을 실행합니다.
- [Ddosify](https://github.com/ddosify/ddosify) - Golang으로 작성된 고성능 로드 테스트 도구입니다.
- [decompose](https://github.com/s0rg/decompose) - Docker 컨테이너 연결 그래프를 생성하고 처리하는 도구입니다.
- [Den](https://github.com/us/den) - AI 에이전트용 셀프 호스팅 샌드박스 런타임. 오픈 소스 E2B 대안입니다.
- [DepCharge](https://github.com/centerorbit/depcharge) - 더 큰 프로젝트의 많은 종속성에 걸쳐 명령 실행을 오케스트레이션하는 것을 지원합니다.
- [dish](https://github.com/thevxn/dish) - 경량의 원격 구성 가능한 모니터링 서비스입니다.
- [Docker](https://www.docker.com/) - 개발자 및 sysadmin을 위한 분산 애플리케이션용 오픈 플랫폼입니다.
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - MinGW 도구 체인을 사용하여 Windows용 Go 바이너리를 빌드하기 위한 Docker 이미지입니다.
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Docker 볼륨을 로컬로 또는 S3, WebDAV, Azure Blob Storage, Dropbox 또는 SSH 호환 저장소로 백업합니다.
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - 다양한 입력 채널을 사용하여 유효한 Dockerfile을 생성하는 go 라이브러리 및 실행 파일입니다.
- [docklite](https://github.com/benzjeremy/docklite) - 실시간 SSE 메트릭을 사용한 Docker 컨테이너 관리용 경량 Portainer 대안입니다.
- [dogo](https://github.com/liudng/dogo) - 소스 파일의 변경 사항을 모니터링하고 자동으로 컴파일 및 실행(다시 시작)합니다.
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - 바이너리, docker 또는 Drone CI를 사용하여 다운스트림 Jenkins 작업을 트리거합니다.
- [drone-scp](https://github.com/appleboy/drone-scp) - 바이너리, docker 또는 Drone CI를 사용하여 SSH를 통해 파일 및 아티팩트를 복사합니다.
- [Dropship](https://github.com/chrismckenzie/dropship) - CDN을 통해 코드를 배포하기 위한 도구입니다.
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - `ProxyCommand`를 통해 SSH 및 SCP를 통한 쉬운 원격 실행을 위한 Golang 패키지입니다.
- [fac](https://github.com/mkchoi212/fac) - git 병합 충돌을 해결하기 위한 명령줄 사용자 인터페이스입니다.
- [Flannel](https://github.com/flannel-io/flannel) - Flannel은 Kubernetes를 위해 설계된 컨테이너용 네트워크 패브릭입니다.
- [Fleet device management](https://github.com/fleetdm/fleet) - 서버 및 워크스테이션용 경량의 프로그래밍 가능한 원격 측정입니다.
- [gaia](https://github.com/gaia-pipeline/gaia) - 모든 프로그래밍 언어로 강력한 파이프라인을 구축합니다.
- [ghorg](https://github.com/gabrie30/ghorg) - 전체 org/사용자 저장소를 한 디렉토리로 빠르게 복제합니다 - GitHub, GitLab, Gitea, Bitbucket을 지원합니다.
- [Gitea](https://github.com/go-gitea/gitea) - Gogs의 포크이며 완전히 커뮤니티 주도입니다.
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - 모든 GitHub 저장소, 문제, 마일스톤 및 레이블을 Gitea 인스턴스로 마이그레이션합니다.
- [gitl](https://github.com/akomyagin/gitl) - 위험 점수(낮음/중간/높음), 변경 로그 생성, 다중 저장소 활동 요약을 포함한 git 커밋 범위의 AI 검토. GitHub Action이 포함되어 있습니다.
- [go-furnace](https://github.com/go-furnace/go-furnace) - Go로 작성된 호스팅 솔루션입니다. AWS, GCP 또는 DigitalOcean에서 쉽게 애플리케이션을 배포합니다.
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - Go 애플리케이션을 자동 업데이트하는 간단한 방법입니다 - Github 및 Gitlab을 지원합니다.
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Go 애플리케이션이 자동 업데이트되도록 설정합니다.
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew를 사용하면 Go의 여러 버전 간에 쉽게 전환할 수 있습니다.
- [gobrew](https://github.com/kevincobain2000/gobrew) - Go 버전 관리자입니다. Go 버전을 설치하고 관리하는 매우 간단한 도구입니다. root 없이 Go를 설치합니다. Gobrew는 셸 재해시(shell rehash)를 요구하지 않습니다.
- [godbg](https://github.com/sirnewton01/godbg) - 웹 기반 gdb 프런트엔드 애플리케이션입니다.
- [Gogs](https://gogs.io/) - Go 프로그래밍 언어로 작성된 셀프 호스팅 Git 서비스입니다.
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - 선언적 설정, 강력한 미들웨어, REST, GraphQL, TCP, UDP 및 gRPC를 지원하는 경량 API 게이트웨이 및 역 프록시입니다.
- [gonative](https://github.com/inconshreveable/gonative) - 모든 플랫폼으로 크로스 컴파일할 수 있는 Go 빌드를 생성하는 도구이면서도 여전히 Cgo 활성화 버전의 stdlib 패키지를 사용합니다.
- [govvv](https://github.com/ahmetalpbalkan/govvv) - 버전 정보를 Go 바이너리에 쉽게 추가하는 "go build" 래퍼입니다.
- [grapes](https://github.com/yaronsumel/grapes) - ssh를 통해 명령을 배포하기 위해 설계된 경량 도구입니다.
- [GVM](https://github.com/moovweb/gvm) - GVM은 Go 버전을 관리하기 위한 인터페이스를 제공합니다.
- [Hey](https://github.com/rakyll/hey) - Hey는 웹 애플리케이션에 로드를 보내는 작은 프로그램입니다.
- [httpref](https://github.com/dnnrly/httpref) - httpref는 HTTP 메서드, 상태 코드, 헤더 및 TCP 및 UDP 포트에 대한 편리한 CLI 참조입니다.
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI를 사용하면 Jenkins를 쉽게 관리할 수 있습니다.
- [k0s](https://github.com/k0sproject/k0s) - Zero Friction Kubernetes 배포판입니다.
- [k3d](https://github.com/k3d-io/k3d) - CNCF의 k3s를 Docker에서 실행하기 위한 작은 헬퍼입니다.
- [k3s](https://github.com/k3s-io/k3s) - 경량 Kubernetes입니다.
- [k6](https://github.com/grafana/k6) - Go 및 JavaScript를 사용한 현대적 로드 테스트 도구입니다.
- [k9s](https://github.com/derailed/k9s) - 스타일 있게 클러스터를 관리하기 위한 Kubernetes CLI입니다.
- [kala](https://github.com/ajvb/kala) - 단순하고 현대적이며 성능이 우수한 작업 스케줄러입니다.
- [kcli](https://github.com/cswank/kcli) - kafka 토픽/파티션/메시지를 검사하기 위한 명령줄 도구입니다.
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker - Kubernetes를 테스트하기 위한 로컬 클러스터입니다.
- [ko](https://github.com/google/ko) - Kubernetes에서 Go 애플리케이션을 빌드하고 배포하기 위한 명령줄 도구
- [kool](https://github.com/kool-dev/kool) - Docker 환경을 쉽게 관리하기 위한 명령줄 도구입니다.
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks는 K8s에서 데이터베이스, 메시지 큐 및 기타 데이터 인프라를 실행하고 관리하는 오픈 소스 제어 평면입니다.
- [kubefwd](https://github.com/txn2/kubefwd) - 로컬 개발을 위해 서비스당 고유한 IP를 사용한 대량 Kubernetes 포트 포워딩입니다.
- [kubernetes](https://github.com/kubernetes/kubernetes) - Google의 컨테이너 클러스터 관리자입니다.
- [kubeshark](https://github.com/kubeshark/kubeshark) - Wireshark에서 영감을 받았으며 Kubernetes를 위해 특별히 구축된 Kubernetes용 API 트래픽 분석기입니다.
- [KubeVela](https://github.com/kubevela/kubevela) - 클라우드 네이티브 애플리케이션 전달입니다.
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN은 Kubernetes 클러스터 네트워크에 원활하게 연결되는 클라우드 네이티브 개발 환경을 제공합니다.
- [KusionStack](https://github.com/KusionStack/kusion) - '플랫폼 코드형' 및 '인프라 코드형' 접근 방식으로 현대적 앱을 제공하기 위한 통합 프로그래밍 가능 설정 기술 스택입니다.
- [kwatch](https://github.com/abahmed/kwatch) - Kubernetes(K8s) 클러스터에서 충돌을 모니터링하고 즉시 감지합니다.
- [lstags](https://github.com/ivanilves/lstags) - 다양한 저장소 간에 Docker 이미지를 동기화하기 위한 도구 및 API입니다.
- [lwc](https://github.com/timdp/lwc) - UNIX wc 명령의 라이브 업데이트 버전입니다.
- [manssh](https://github.com/xwjdsh/manssh) - manssh는 ssh 별칭 설정을 쉽게 관리하기 위한 명령줄 도구입니다.
- [Mantil](https://github.com/mantil-io/mantil) - AWS에서 서버리스 애플리케이션을 구축할 수 있도록 하는 Go 특정 프레임워크이며, Mantil이 인프라를 담당하는 동안 순수 Go 코드에 집중할 수 있습니다.
- [minikube](https://github.com/kubernetes/minikube) - Kubernetes를 로컬로 실행합니다.
- [Moby](https://github.com/moby/moby) - 컨테이너 기반 시스템을 조립하기 위한 컨테이너 에코시스템 협력 프로젝트입니다.
- [Mora](https://github.com/emicklei/mora) - MongoDB 문서 및 메타 데이터에 액세스하기 위한 REST 서버입니다.
- [mq-studio](https://github.com/amigoer/mq-studio) - RocketMQ, RabbitMQ, Kafka, Pulsar, Redis Stream, MQTT, NATS 및 ActiveMQ 클러스터를 관리하고 모니터링하기 위한 크로스 플랫폼 데스크톱 클라이언트입니다.
- [ostent](https://github.com/ostrost/ostent) - 시스템 메트릭을 수집하고 표시하며 선택적으로 Graphite 및/또는 InfluxDB로 릴레이합니다.
- [Packer](https://github.com/mitchellh/packer) - Packer는 단일 원본 설정에서 여러 플랫폼을 위한 동일한 머신 이미지를 만드는 도구입니다.
- [Pewpew](https://github.com/bengadbois/pewpew) - 유연한 HTTP 명령줄 스트레스 테스터입니다.
- [pingtower](https://github.com/crleonard/pingtower) - 웹사이트 및 API에 대한 경량 셀프 호스팅 가동 시간 모니터입니다.
- [PipeCD](https://github.com/pipe-cd/pipecd) - 모든 애플리케이션에 일관된 배포 및 운영 환경을 제공하는 GitOps 스타일 지속적 전달 플랫폼입니다.
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo는 Kubernetes에서 마이크로서비스를 실행하는 모범 사례를 보여주는 Go로 만든 작은 웹 애플리케이션입니다. Podinfo는 Flux 및 Flagger와 같은 CNCF 프로젝트에서 엔드투엔드 테스트 및 워크숍에 사용됩니다.
- [podman-tui](https://github.com/containers/podman-tui) - Podman 관리를 위한 터미널 UI입니다.
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium은 ID 인식 액세스 프록시입니다.
- [Rodent](https://github.com/alouche/rodent) - Rodent는 Go 버전, 프로젝트 및 종속성을 관리하고 추적하도록 도와줍니다.
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - GET, PUT 및 DELETE 메서드와 인증(OpenID Connect 및 기본 인증)을 지원하는 S3 프록시입니다.
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - Amazon S3로 대용량 객체를 고속 전송하기 위해 최적화된 작은 유틸리티/라이브러리입니다.
- [s5cmd](https://github.com/peak/s5cmd) - 번개 같이 빠른 S3 및 로컬 파일 시스템 실행 도구입니다.
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - 명령줄에서 BareMetal 서버 관리(Docker처럼 쉽게).
- [script](https://github.com/bitfield/script) - DevOps 및 시스템 관리 작업을 위해 Go에서 셸과 유사한 스크립트를 쉽게 작성할 수 있습니다.
- [sg](https://github.com/ChristopherRabotin/sg) - HTTP 엔드포인트 집합을 벤치마킹합니다(ab처럼), 각 호출 간에 응답 코드와 데이터를 사용하여 이전 응답을 기반으로 특정 서버 스트레스를 사용할 수 있습니다.
- [sigma](https://github.com/go-sigma/sigma) - OCI 네이티브 컨테이너 이미지 레지스트리로, OCI 네이티브 아티팩트, 스캔 아티팩트, 이미지 빌드 등을 지원합니다.
- [skm](https://github.com/TimothyYe/skm) - SKM은 단순하고 강력한 SSH 키 관리자이며, 여러 SSH 키를 쉽게 관리할 수 있도록 도와줍니다!
- [sortie](https://github.com/sortie-ai/sortie) - 추적 프로젝트 티켓을 자율적 코딩 에이전트 세션으로 변환합니다.
- [StatusOK](https://github.com/sanathp/statusok) - 웹사이트 및 REST API를 모니터링합니다. 서버가 다운되거나 응답 시간이 예상보다 길면 Slack, 이메일로 알림을 받습니다.
- [tau](https://github.com/taubyte/tau) - 서버리스 WebAssembly 함수, 프런트엔드 호스팅, CI/CD, 객체 저장소, K/V 데이터베이스 및 Pub-Sub 메시징과 같은 기능으로 클라우드 컴퓨팅 플랫폼을 쉽게 구축할 수 있습니다.
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - 노출된 API의 정의를 포함하는 OpenAPI 문서(이전의 swagger 파일)를 기반으로 런타임에 자동으로 설정되는 Terraform 공급자 플러그인입니다.
- [tf-profile](https://github.com/datarootsio/tf-profile) - Terraform 실행용 프로파일러입니다. 전역 통계, 리소스 수준 통계 또는 시각화를 생성합니다.
- [tickstem/uptime](https://github.com/tickstem/uptime) - SSL 만료 경고 및 구성 가능한 응답 어설션을 포함한 HTTP 가동 시간 모니터링을 위한 Go 클라이언트입니다.
- [tlm](https://github.com/yusufcanb/tlm) - CodeLLaMa로 구동되는 로컬 cli 코파일럿
- [traefik](https://github.com/containous/traefik) - 여러 백엔드를 지원하는 역 프록시 및 로드 밸런서입니다.
- [trubka](https://github.com/xitonix/trubka) - Apache Kafka 클러스터를 관리하고 문제를 해결하기 위한 CLI 도구로, 프로토콜 버퍼 및 일반 텍스트 이벤트를 Kafka로/로부터 일반적으로 게시/소비할 수 있는 기능이 있습니다.
- [Updatecli](https://github.com/updatecli/updatecli) - 범용 선언적 업데이트 정책 엔진입니다.
- [uTask](https://github.com/ovh/utask) - yaml에서 선언된 비즈니스 프로세스를 모델링하고 실행하는 자동화 엔진입니다.
- [Vegeta](https://github.com/tsenart/vegeta) - HTTP 로드 테스트 도구 및 라이브러리입니다. 9000을 넘습니다!
- [wait-for](https://github.com/dnnrly/wait-for) - 무언가가 발생할 때까지 대기합니다(명령줄에서) 계속 진행합니다. Docker 서비스 및 기타 것들의 쉬운 오케스트레이션입니다.
- [Wide](https://wide.b3log.org/login) - Golang을 사용한 팀용 웹 기반 IDE입니다.
- [winrm-cli](https://github.com/masterzen/winrm-cli) - Windows 시스템에서 원격으로 명령을 실행하기 위한 CLI 도구입니다.
- [zerohand](https://github.com/nilpoona/zerohand) - 웹 API를 위한 간단하고 효율적인 로드 테스트 도구입니다.

**[⬆ 맨 위로](#contents)**

### 기타 소프트웨어

- [Backrest](https://github.com/garethgeorge/backrest) - restic 백업을 위한 웹 기반 UI 및 오케스트레이터입니다.
- [Better Go Playground](https://goplay.tools) - 구문 강조, 코드 완성 및 기타 기능이 있는 Go 재생장입니다.
- [blocky](https://github.com/0xERR0R/blocky) - 많은 기능이 있는 로컬 네트워크용 빠르고 경량의 DNS 프록시(광고 차단기)입니다.
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - Linux를 위한 TUI Bluetooth 관리자입니다.
- [borg](https://github.com/crufter/borg) - bash 스니펫을 위한 터미널 기반 검색 엔진입니다.
- [boxed](https://github.com/tejo/boxed) - Dropbox 기반 블로그 엔진입니다.
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar는 Go로 구축된 크로스 플랫폼 Postman 대안으로, 개발자가 API 엔드포인트를 테스트할 수 있도록 지원합니다. HTTP 및 gRPC 프로토콜을 지원합니다.
- [Cherry](https://github.com/rafael-santiago/cherry) - Go로 작성된 작은 웹채팅 서버입니다.
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - 측정 트랙을 가져오고, 분석하고, 시각화하기 위한 셀프 호스팅 공개 방사능 지도입니다.
- [Circuit](https://github.com/gocircuit/circuit) - Circuit은 클라우드 애플리케이션을 구성하는 서비스 및 호스트의 관리, 발견, 동기화 및 오케스트레이션을 위한 프로그래밍 가능한 플랫폼 서비스(PaaS) 및/또는 인프라 서비스(IaaS)입니다.
- [claude-grep](https://github.com/evoleinik/claude-grep) - 정규 표현식 및 의미(벡터) 검색을 사용하여 Claude Code 세션 기록을 검색합니다.
- [Comcast](https://github.com/tylertreat/Comcast) - 네트워크 연결을 시뮬레이션합니다.
- [confd](https://github.com/kelseyhightower/confd) - 템플릿 및 etcd 또는 consul의 데이터를 사용하여 로컬 애플리케이션 설정 파일을 관리합니다.
- [crawley](https://github.com/s0rg/crawley) - cli를 위한 웹 스크래퍼/크롤러입니다.
- [croc](https://github.com/schollz/croc) - 한 컴퓨터에서 다른 컴퓨터로 쉽고 안전하게 파일 또는 폴더를 보냅니다.
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - Windows 및 Linux용 경량의 소프트웨어 캐시 정리 도구입니다.
- [dispositio](https://github.com/tsraveling/dispositio) - 간단한 마크다운에서 대규모 프로젝트를 계획하기 위한 터미널 도구입니다.
- [Documize](https://github.com/documize/community) - SaaS 도구에서 데이터를 통합하는 현대적 위키 소프트웨어입니다.
- [dp](https://github.com/scryinfo/dp) - SDK를 통해 블록체인과의 데이터 교환으로 개발자는 DAPP 개발에 쉽게 접근할 수 있습니다.
- [drive](https://github.com/odeke-em/drive) - 명령줄용 Google 드라이브 클라이언트입니다.
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - 잠금 없는 중복 제거 아이디어를 기반으로 한 크로스 플랫폼 네트워크 및 클라우드 백업 도구입니다.
- [fjira](https://github.com/mk-5/fjira) - Atlassian Jira용 퍼지 검색 기반 터미널 UI 애플리케이션입니다.
- [Gebug](https://github.com/moshebe/gebug) - 디버거 및 핫 리로드 기능을 원활하게 활성화하여 Dockerized Go 애플리케이션의 디버깅을 매우 쉽게 만드는 도구입니다.
- [gfile](https://github.com/Antonito/gfile) - 서드파티 없이 WebRTC를 통해 두 컴퓨터 간에 안전하게 파일을 전송합니다.
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - GOPATH의 Go 패키지 업데이트를 표시하는 앱입니다.
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - 비디오 스트리밍 토렌트 클라이언트입니다.
- [goblin](https://goblin.run) - Go lang으로 작성된 CLI용 클라우드 빌더
- [GoBoy](https://github.com/Humpheh/goboy) - Go로 작성된 Nintendo Game Boy Color 에뮬레이터입니다.
- [gocc](https://github.com/goccmack/gocc) - Gocc는 Go로 작성된 Go용 컴파일러 키트입니다.
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - Go Doc 사이트용 Chrome 확장 프로그램으로, 함수 목록에서 함수 설명을 도구 설명으로 표시합니다.
- [Gokapi](https://github.com/Forceu/gokapi) - 지정된 다운로드 수 또는 일수 후에 만료되는 파일을 공유하기 위한 경량 서버입니다. Firefox Send와 유사하지만 공개 업로드는 없습니다.
- [GoLand](https://jetbrains.com/go) - 완벽한 기능의 크로스 플랫폼 Go IDE입니다.
- [GoNB](https://github.com/janpfeifer/gonb) - Jupyter Notebooks를 사용한 대화형 Go 프로그래밍(VSCode, Binder 및 Google의 Colab에서도 작동).
- [GooseForum](https://github.com/leancodebox/GooseForum) - Go, Vue 및 Tailwind CSS로 구축된 셀프 호스팅 포럼 플랫폼입니다.
- [Gor](https://github.com/buger/gor) - Http 트래픽 복제 도구로, 실시간으로 프로덕션에서 stage/dev 환경으로 트래픽을 재생합니다.
- [Guora](https://github.com/meloalright/guora) - Go로 작성된 셀프 호스팅 Quora 같은 웹 애플리케이션입니다.
- [GURL](https://github.com/matveynator/gurl) - CURL이 SSL 라이브러리가 너무 오래되었다고 할 때 - GURL을 사용하세요. 한 파일. 제로 SSL 종속성.
- [hoofli](https://github.com/dnnrly/hoofli) - Chrome 또는 Firefox 네트워크 검사에서 PlantUML 다이어그램을 생성합니다.
- [hotswap](https://github.com/edwingeng/hotswap) - 서버를 다시 시작하거나 진행 중인 절차를 중단하거나 차단하지 않고 Go 코드를 다시 로드하는 완전한 솔루션입니다.
- [hugo](https://gohugo.io/) - 빠르고 현대적인 정적 웹사이트 엔진입니다.
- [ide](https://github.com/thestrukture/ide) - 브라우저에 접근 가능한 IDE입니다. Go로 Go 사용을 위해 설계되었습니다.
- [joincap](https://github.com/assafmo/joincap) - 여러 pcap 파일을 함께 병합하기 위한 명령줄 유틸리티입니다.
- [JuiceFS](https://github.com/juicedata/juicefs) - Redis 및 AWS S3 위에 구축된 분산 POSIX 파일 시스템입니다.
- [Juju](https://jujucharms.com/) - 클라우드에 구애받지 않는 서비스 배포 및 오케스트레이션 - EC2, Azure, Openstack, MAAS 등을 지원합니다.
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - 주문형 피어 투 피어 파일 시스템으로 원격 폴더를 마운트하고 read-ahead로 링크 지연을 숨기며 하이브리드 X25519 및 ML-KEM-1024로 엔드 투 엔드 암호화합니다.
- [Layli](https://layli.app) - 아름다운 레이아웃 다이어그램을 코드로 그립니다.
- [Leaps](https://github.com/jeffail/leaps) - 운영 변환을 사용한 쌍 프로그래밍 서비스입니다.
- [lgo](https://github.com/yunabe/lgo) - Jupyter를 사용한 대화형 Go 프로그래밍입니다. 코드 완성, 코드 검사 및 100% Go 호환성을 지원합니다.
- [LightCMS](https://github.com/jonradoff/lightcms) - 정적 페이지 생성, 역할 기반 액세스 제어 및 에이전트 기반 콘텐츠 작업을 위한 MCP 서버를 포함한 셀프 호스팅 콘텐츠 관리 시스템입니다.
- [limetext](https://limetext.github.io) - Lime Text는 Sublime Text의 자유 및 오픈 소스 후속자를 목표로 하는 주로 Go에서 개발된 강력하고 우아한 텍스트 편집기입니다.
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE는 단순하고 오픈 소스이며 크로스 플랫폼 Go IDE입니다.
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - macOS 캐시, 로그 및 임시 파일을 정리하기 위한 미리보기 우선 TUI입니다.
- [mdv](https://github.com/Allra-Fintech/mdv) - 라이브 재로드, GFM, 구문 강조, Mermaid 다이어그램 및 PDF 내보내기를 사용하여 브라우저에서 Markdown 파일을 렌더링하는 CLI 도구입니다.
- [mockingjay](https://github.com/quii/mockingjay-server) - 하나의 설정 파일에서 가짜 HTTP 서버 및 소비자 기반 계약입니다. 또한 서버가 무작위로 작동 불량이 되도록 할 수 있어 더 현실적인 성능 테스트에 도움이 됩니다.
- [myLG](https://github.com/mehrdadrad/mylg) - Go로 작성된 명령줄 네트워크 진단 도구입니다.
- [naclpipe](https://github.com/unix4fun/naclpipe) - Go로 작성된 간단한 NaCL EC25519 기반 암호 파이프 도구입니다.
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay가 다시 태어났습니다. 새로운 시대를 위해.
- [nes](https://github.com/fogleman/nes) - Go로 작성된 Nintendo Entertainment System(NES) 에뮬레이터입니다.
- [onWatch](https://github.com/onllm-dev/onWatch) - 역사적 추적, 경고 및 웹 대시보드를 사용하여 제공자 전체의 AI API 할당량을 로컬로 모니터링하여 갑작스러운 스로틀링 및 예산 초과를 피합니다.
- [Orbit](https://github.com/gulien/orbit) - 명령 실행 및 템플릿에서 파일을 생성하기 위한 간단한 도구입니다.
- [peg](https://github.com/pointlander/peg) - Peg는 Packrat 파서 생성기의 구현인 Parsing Expression Grammar입니다.
- [Plakar](https://github.com/PlakarKorp/plakar) - 벤더 잠금이 없는 암호화, 중복 제거, 확인 가능 및 확장 가능한 백업 엔진입니다.
- [Plik](https://github.com/root-gg/plik) - Plik은 Go로 작성된 임시 파일 업로드 시스템(Wetransfer 같음)입니다.
- [portal](https://github.com/SpatiumPortae/portal) - Portal은 한 컴퓨터에서 다른 컴퓨터로의 빠르고 쉬운 명령줄 파일 전송 유틸리티입니다.
- [restic](https://github.com/restic/restic) - 중복 제거 백업 프로그램입니다.
- [sake](https://github.com/alajmo/sake) - sake는 로컬 및 원격 호스트를 위한 명령 실행기입니다.
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code로, 복잡도 계산 및 COCOMO 추정을 포함한 매우 빠르고 정확한 코드 카운터입니다.
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - MS Project Excel/CSV 내보내기를 위한 DCMA 14포인트 일정 평가 CLI입니다.
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - 빠르고 간단하고 확장 가능한 분산 파일 시스템으로 O(1) 디스크 검색입니다.
- [shell2http](https://github.com/msoap/shell2http) - http 서버를 통해 셸 명령을 실행합니다(프로토타입 또는 원격 제어용).
- [Snitch](https://github.com/lucasgomide/snitch) - 누군가 Tsuru를 통해 애플리케이션을 배포할 때 팀과 많은 도구에 알리는 간단한 방법입니다.
- [sonic](https://github.com/go-sonic/sonic) - Sonic은 Go 블로깅 플랫폼입니다. 간단하고 강력합니다.
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Spotify용 데스크톱 스크린세이버로 디지털 OLED 시계, 캔버스 오디오 시각화 및 MPRIS 제어를 갖춘입니다.
- [Stack Up](https://github.com/pressly/sup) - Stack Up으로, 매우 간단한 배포 도구입니다 - Unix만 - 서버 네트워크의 'make'라고 생각하면 됩니다.
- [stew](https://github.com/marwanhawari/stew) - 컴파일된 바이너리를 위한 독립적 패키지 관리자입니다.
- [syncthing](https://syncthing.net/) - 오픈이고 분산된 파일 동기화 도구 및 프로토콜입니다.
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - eBPF 기반 TCP 관찰 가능성입니다.
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - 지난 24시간과 주간의 git 커밋, 현재 날씨, 자기 관리 조언, 농담, 현재 할 일 목록 작업을 표시하는 작은 터미널 앱입니다.
- [tldx](https://github.com/brandonyoungdev/tldx) - RDAP, DNS 및 WHOIS 폴백을 사용한 대량 도메인 가용성 검사기로 키워드 순열 생성입니다.
- [toxiproxy](https://github.com/shopify/toxiproxy) - 자동화된 테스트를 위해 네트워크 및 시스템 조건을 시뮬레이션하는 프록시입니다.
- [tsuru](https://tsuru.io/) - 확장 가능하고 오픈 소스 플랫폼 서비스(PaaS) 소프트웨어입니다.
- [untis-go](https://github.com/benzjeremy/untis-go) - 학생 및 교사를 위한 빠르고 네이티브 WebUntis 데스크톱 클라이언트입니다. 사이드바 네비게이션, 시간표, 숙제, 부재 및 메시지입니다. AES-256-GCM 암호화 자격 증명, SQLite 캐시 우선, 무작위 포트 보안입니다.
- [vaku](https://github.com/lingrino/vaku) - Vault에서 복사, 이동 및 검색과 같은 폴더 기반 함수를 위한 CLI 및 API입니다.
- [vFlow](https://github.com/VerizonDigital/vflow) - 고성능의 확장 가능하고 안정적인 IPFIX, sFlow 및 Netflow 수집기입니다.
- [Wave Terminal](https://waveterm.dev) - Wave는 인라인 렌더링, 현대적 UI 및 영속적 세션을 갖춘 원활한 개발자 워크플로우를 위해 구축된 오픈 소스 AI 네이티브 터미널입니다.
- [wellington](https://github.com/wellington/wellington) - Sass 프로젝트 관리 도구로 스프라이트 함수를 사용하여 언어를 확장합니다(Compass처럼).
- [woke](https://github.com/get-woke/woke) - 소스 코드에서 비포괄적 언어를 감지합니다.
- [yai](https://github.com/ekkinox/yai) - AI 기반 터미널 어시스턴트입니다.
- [zs](https://git.mills.io/prologic/zs) - 매우 미니멀한 정적 사이트 생성기입니다.

**[⬆ 맨 위로](#contents)**

# 리소스

_Go 라이브러리를 발견할 수 있는 곳._

**[⬆ 맨 위로](#contents)**

## 벤치마크

- [autobench](https://github.com/davecheney/autobench) - Go 버전 간 성능 비교 프레임워크입니다.
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - Ab, Wrk, Siege 도구를 혼합한 강력한 HTTP 벤치마크 도구입니다. 벤치마크 및 비교 결과를 위한 통계 및 다양한 매개변수를 수집합니다.
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - 다양한 Go 마이크로벤치마크입니다. 일부 언어 기능을 대체 접근 방식과 비교합니다.
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Go HTTP 요청 라우터 벤치마크 및 비교입니다.
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Go JSON 벤치마크입니다.
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Go의 머신러닝 추론 벤치마크입니다.
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Go 웹 프레임워크 벤치마크입니다.
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Go 직렬화 방법의 벤치마크입니다.
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Go 언어의 일반적인 기본 작업 벤치마크입니다.
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - golang 벤치마크 모음입니다.
- [gospeed](https://github.com/feyeleanor/GoSpeed) - 언어 구성의 속도를 계산하기 위한 Go 마이크로벤치마크입니다.
- [kvbench](https://github.com/jimrobinson/kvbench) - 키/값 데이터베이스 벤치마크입니다.
- [skynet](https://github.com/atemerev/skynet) - Skynet 1M 스레드 마이크로벤치마크입니다.
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Go 언어의 다양한 이미지 크기 조정 알고리즘을 비교합니다.
- [vizb](https://github.com/goptics/vizb) - Go 벤치마크 데이터를 4D로 시각화하는 CLI 도구입니다.

**[⬆ 맨 위로](#contents)**

## 컨퍼런스

- [GoCon](https://gocon.connpass.com/) - 도쿄, 일본.
- [GoDays](https://www.godays.io/) - 베를린, 독일.
- [GoLab](https://golab.io/) - 피렌체, 이탈리아.
- [GopherCon](https://www.gophercon.com/) - 매년 다양한 장소, 미국.
- [GopherCon Africa](https://gophercon.africa/) - 나이로비, 케냐.
- [GopherCon Australia](https://gophercon.com.au/) - 시드니, 호주.
- [GopherCon Brazil](https://gopherconbr.org) - 플로리아노폴리스, 브라질.
- [GopherCon China](https://gophercon.com.cn) - 상하이, 중국.
- [GopherCon Europe](https://gophercon.eu/) - 베를린, 독일.
- [GopherCon India](https://gopherconindia.org/) - 푸네, 인도.
- [GopherCon Israel](https://www.gophercon.org.il/) - 텔아비브, 이스라엘.
- [GopherCon Russia](https://www.gophercon-russia.ru) - 모스크바, 러시아.
- [GopherCon Singapore](https://gophercon.sg) - 메이플트리 비즈니스 시티, 싱가포르.
- [GopherCon UK](https://www.gophercon.co.uk/) - 런던, 영국.
- [GopherCon Vietnam](https://gophercon.vn/) - 호찌민시, 베트남.
- [GoWest Conference](https://www.gowestconf.com/) - 레히, 미국.

**[⬆ 맨 위로](#contents)**

## 전자책

### 구매 가능한 전자책

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - 해커와 펜테스터를 위한 Go 프로그래밍입니다.
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - Go의 지속적 배포에 대한 실용적인 가이드로 테스트, 코드 품질 및 최종 제품을 개선하는 자동화된 파이프라인을 빠르게 구축하는 방법을 보여줍니다.
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - Arduino와 WebAssembly를 포함한 프로젝트를 통한 TinyGo 컴파일러 소개입니다.
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Go의 독특한 프로그램 설계 관점을 열어보고 간단하고 유지 관리 가능하며 테스트 가능한 Go 코드를 작성하기 시작합니다.
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Go 초보자를 위한 입문 책입니다.
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Go 개발의 내부와 외부에 관한 실용적인 가이드로, 표준 라이브러리와 Go의 강력한 생태계에서 가장 중요한 도구를 다룹니다.
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Go의 제네릭을 이해하고 사용하기 위한 가이드입니다.
- [Lets-Go](https://lets-go.alexedwards.net) - Go를 사용하여 빠르고 안전하며 유지 관리할 수 있는 웹 애플리케이션을 만드는 단계별 가이드입니다.
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - Go로 API 및 웹 애플리케이션을 구축하기 위한 고급 패턴입니다.
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Go의 테스트에 대한 가이드입니다.
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Go로 명령줄 도구를 작성하기 위한 가이드입니다.
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - 일반적인 함정을 피하면서 관용적이고 표현력 있으며 효율적인 Go 코드를 작성하기 위한 수십 가지 기법을 소개하는 책입니다.

### 무료 전자책

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - Go에서 gRPC를 사용하여 처음부터 블록체인을 효과적으로 학습하고 점진적으로 구축하기 위한 기초적이고 실용적인 가이드입니다.
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Go 구문/의미론 및 모든 종류의 세부 사항에 중점을 두는 책입니다.
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Go `go/*` 패키지에 중점을 두는 책입니다.
- [Go Faster](https://leanpub.com/gofaster) - 이 책은 학습 곡선을 단축하고 더 빨리 능숙한 Go 프로그래머가 되도록 도움을 주려고 합니다.
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - 페르시아어로입니다.
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - 실제적인 리팩토링을 통해 DDD, 클린 아키텍처 및 CQRS를 적용하는 방법을 보여주는 책입니다.
- [GoBooks](https://github.com/dariubs/GoBooks) - Go 책의 엄선된 목록입니다.
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - 처음으로 개발하는 사람을 위한 600 페이지의 Go 소개입니다.
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ 맨 위로](#contents)**

## 고퍼

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Maria Letta의 벡터 및 래스터 삽화 및 감정적 캐릭터가 있는 고퍼 그래픽 팩입니다.
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Go 고퍼 벡터 데이터 [.ai, .svg]입니다.
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - 귀여운 고퍼 로고들입니다.
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - 자신을 고퍼로 만드세요.
- [gophers](https://github.com/ashleymcnamara/gophers) - Ashley McNamara의 고퍼 artwork입니다.
- [gophers](https://github.com/egonelbre/gophers) - 무료 고퍼들입니다.
- [gophers](https://github.com/rogeralsing/gophers) - 무작위 고퍼 그래픽입니다.
- [gophers](https://github.com/sillecelik/go-gopher) - 고퍼 아미구루미 장난감 패턴입니다.
- [gophers](https://github.com/scraly/gophers) - Aurélie Vache의 고퍼들입니다.

**[⬆ 맨 위로](#contents)**

## 밋업

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

_당신의 도시/국가 그룹을 여기에 추가하세요 (풀 요청 보내세요)_

**[⬆ 맨 위로](#contents)**

## 스타일 가이드

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ 맨 위로](#contents)**

## 소셜 미디어

### 트위터

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ 맨 위로](#contents)**

### 레딧

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ 맨 위로](#contents)**

## 웹사이트

- [Awesome Go @LibHunt](https://go.libhunt.com) - Go 도구 상자로 가세요.
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - 멋진 golang 워크샵의 엄선된 목록입니다.
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - 멋진 원격 직업의 엄선된 목록입니다. 많은 사람들이 Go 해커를 찾고 있습니다.
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - 다른 멋진 목록들의 목록입니다.
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - awesome-go README 파일을 파싱하고 저장소 정보와 함께 새로운 README 파일을 생성합니다.
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - 소프트웨어 엔지니어 및 codewithmukesh.com의 블로그입니다.
- [Coding Mystery](https://codingmystery.com) - Go를 사용하여 흥미로운 탈출실 느낌의 프로그래밍 챌린지를 해결하세요.
- [CodinGame](https://www.codingame.com/) - 작은 게임을 실용적인 예제로 사용하여 대화형 작업을 풀어서 Go를 배웁니다.
- [Go Blog](https://blog.golang.org) - 공식 Go 블로그입니다.
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - Go 프로젝트를 매주 읽고 논의하는 고퍼 그룹입니다.
- [Go Community on Hashnode](https://hashnode.com/n/go) - Hashnode의 고퍼 커뮤니티입니다.
- [Go Forum](https://forum.golangbridge.org) - Go를 논의할 포럼입니다.
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Go 커뮤니티 wiki의 프로젝트 목록입니다.
- [Go Proverbs](https://go-proverbs.github.io/) - Rob Pike의 Go 속담입니다.
- [Go Report Card](https://goreportcard.com) - Go 패키지의 보고서 카드입니다.
- [go.dev](https://go.dev/) - Go 개발자를 위한 허브입니다.
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - 도움이 필요한 Go 프로젝트의 모음입니다. Go에서 오픈소스를 시작하기 좋은 장소입니다.
- [Golang Developer Jobs](https://golangjob.xyz) - Go 관련 역할만을 위한 개발자 직업입니다.
- [Golang News](https://golangnews.com) - Go 프로그래밍에 관한 링크 및 뉴스입니다.
- [Golang Nugget](https://golangnugget.com) - 매주 최고의 Go 콘텐츠를 모아서 매주 월요일 받은편지함으로 전송합니다.
- [Golang Weekly](https://discu.eu/weekly/golang/) - 매주 월요일 Go에 대한 프로젝트, 튜토리얼 및 기사입니다.
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Go 메일링 목록입니다.
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - 고퍼들을 위한 새로운 Slack 커뮤니티에 참여하세요 ([어떻게 시작했는지 알아보기](https://blog.gopheracademy.com/gophers-slack-community/)).
- [Gophercises](https://gophercises.com/) - 신진 고퍼를 위한 무료 코딩 연습입니다.
- [json2go](https://m-zajac.github.io/json2go) - 고급 JSON에서 Go 구조체 변환 - 온라인 도구입니다.
- [justforfunc](https://www.youtube.com/c/justforfunc) - Go 프로그래밍 언어 팁과 트릭에 전용된 Youtube 채널로 Francesc Campoy [@francesc](https://twitter.com/francesc)에 의해 호스팅됩니다.
- [Learn Go Programming](https://blog.learngoprogramming.com) - 삽화로 Go 개념을 배우세요.
- [Libs.tech](https://libs.tech/go) – 멋진 Go 라이브러리 및 숨겨진 보석들
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - 오픈소스 Go 패키지의 문서입니다.
- [studygolang](https://studygolang.com) - 중국의 studygolang 커뮤니티입니다.
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - 새로운 Go 라이브러리를 찾기 위한 좋은 장소입니다.
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ 맨 위로](#contents)**

### 튜토리얼

- [50 Shades of Go](https://golang50shades.github.io/) - 새로운 Golang 개발자를 위한 함정, 예상 밖의 상황 및 일반적인 실수입니다.
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - 최근 승인된 slog 제안에 특별히 중점을 두고 Go의 구조화된 로깅의 세계로 깊이 파고들어 표준 라이브러리에 높은 성능의 구조화된 로깅 및 레벨을 가져오는 것을 목표로 합니다.
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - Golang 전자 상거래 사이트 구축 (데모 포함).
- [A Tour of Go](https://tour.golang.org/) - Go의 대화형 투어입니다.
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - 1000 줄의 코드로 처음부터 NoSQL 데이터베이스를 구축합니다.
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Golang 웹 앱을 빌드하는 방법에 대한 Golang 전자책 소개입니다.
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - 강력한 Gorilla Mux의 도움으로 API를 작성할 것입니다.
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Gin에 익숙해지고 보일러플레이트 코드를 줄이고 요청 처리 파이프라인을 구축하는 데 도움이 될 수 있는 방법을 알아보세요.
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - 느린 데이터베이스 쿼리를 캐시하는 방법입니다.
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - MySQL 쿼리를 취소하는 방법입니다.
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - 자신의 Redis, Docker, Git 및 SQLite를 구축하여 Go의 숙달을 달성하세요. 고루틴, 시스템 프로그래밍, 파일 I/O 등을 특징으로 합니다.
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Go로 구현된 프로그래밍 디자인 패턴 모음입니다.
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - 프로그래밍 및 게임 개발을 가르치는 비디오 시리즈입니다.
- [Go By Example](https://gobyexample.com/) - 주석이 있는 예제 프로그램을 사용한 Go에 대한 실습 소개입니다.
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Go의 참조 카드입니다.
- [Go database/sql tutorial](http://go-database-sql.org/) - database/sql 소개입니다.
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - 7 일 안에 Go의 모든 것을 배우세요 (Nodejs 개발자로부터).
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Go 언어 튜토리얼을 배우세요.
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Go 프로그래밍을 배우세요.
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Golang 서비스를 위한 클린 아키텍처 템플릿입니다.
- [go-patterns](https://github.com/tmrts/go-patterns) - Go 디자인 패턴, 레시피 및 관용구의 엄선된 목록입니다.
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - Node.js와 비교하여 배우기 위한 Golang의 예입니다.
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Go 프로그래밍 언어를 배우기 위한 무료 과정 목록입니다.
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - Golang을 배우기 위한 많은 예제들입니다.
- [Golangbot](https://golangbot.com/learn-golang-series/) - Go 프로그래밍을 시작하기 위한 튜토리얼입니다.
- [GopherCoding](https://gophercoding.com/) - 매일의 문제를 해결하는 데 도움이 되는 코드 스니펫 및 튜토리얼 모음입니다.
- [GopherSnippets](https://gophersnippets.com/) - Go 프로그래밍 언어에 대한 테스트 및 테스트 가능한 예제가 있는 코드 스니펫입니다.
- [Gosamples](https://gosamples.dev/) - 매일의 코드 문제를 해결할 수 있는 코드 스니펫 모음입니다.
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - 코드 생성을 사용하여 Go GraphQL 서버 및 클라이언트를 만드는 방법을 배우세요. REST 끝점 생성도 포함합니다.
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - golang 프로그래밍 커뮤니티에 의해 제출되고 투표된 최고의 온라인 golang 튜토리얼에서 Go를 배우세요.
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - 육각형 아키텍처를 사용하여 유지 보수 가능한 코드를 작성하기 위한 시작 지침입니다.
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Go에서 벤치마크하는 방법을 배웁니다. 사례 연구로서 dbq, sqlx 및 GORM을 벤치마크할 것입니다.
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Go 개발을 위해 Docker를 사용하는 방법과 프로덕션 Docker 이미지를 구축하는 방법을 배우세요.
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - 코드 예제를 포함한 Golang에서 역할 기반 액세스 제어 (RBAC)를 구현하는 방법에 대한 가이드로 앱 끝점을 역할 기반 권한 부여로 보호하는 다양한 방법을 다룹니다.
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Godog를 사용하여 시작하기 - Go 애플리케이션을 구축하고 테스트하기 위한 행동 기반 개발 프레임워크입니다.
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - 수천 가지의 예제, 연습 및 퀴즈로 Go를 배우세요.
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - 테스트 주도 개발로 Go를 배우세요.
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - 구체적인 응용 프로그램을 예제로 하여 Golang 언어를 배우기 위한 기사 시리즈입니다.
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - gRPC를 포함한 Go를 사용하여 마이크로서비스를 구축하는 방법을 깊이 있게 파고들어봅니다.
- [package main](https://www.youtube.com/packagemain) - Go 프로그래밍에 대한 Youtube 채널입니다.
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - 처음부터 Go에 대해 배우기 위한 Coursera 특수성입니다.
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - 프로덕션에서 Go 애플리케이션을 구축, 배포 및 스케일링하는 방법에 대한 모든 것입니다.
- [The world's easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - Go를 시각적으로 배우세요.
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic은 Go 프로그래밍을 배우기 위한 깊이 있는 튜토리얼과 잘 구성된 콘텐츠를 제공합니다.
- [Your basic Go](https://yourbasic.org/golang) - 튜토리얼 및 방법에 대한 거대한 모음입니다.

**[⬆ 맨 위로](#contents)**

### 가이드 학습

- [The Go Developer Roadmap](https://roadmap.sh/golang) - 새로운 Go 개발자가 따를 수 있도록 돕는 시각적 로드맵입니다.
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Go 기술 인터뷰 준비를 위한 코딩 챌린지를 제공하는 GitHub 저장소입니다.
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - 무료 및 프리미엄 리소스가 혼합된 가이드 학습 경로입니다.
- [The Go Skill Tree](https://labex.io/skilltrees/go) - 무료 및 프리미엄 리소스를 모두 결합한 구조화된 학습 경로입니다.

**[⬆ 맨 위로](#contents)**

## 기여

기여를 환영합니다! 자세한 내용은 [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)를 참조하세요.

## 라이선스

이 프로젝트는 [MIT 라이선스](https://github.com/avelino/awesome-go/blob/main/LICENSE)로 허가되어 있습니다 - 자세한 내용은 LICENSE 파일을 참조하세요.
