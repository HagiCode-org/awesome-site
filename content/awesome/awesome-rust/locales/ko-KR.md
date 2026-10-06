# Awesome Rust [![린트 배지](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml/badge.svg)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml) [![빌드 배지](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml) [![Awesome 목록 추적](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/rust-unofficial/awesome-rust/)

엄선한 Rust 코드와 자료 모음입니다.

기여하려면 [이 문서](CONTRIBUTING.md)를 읽어 주세요.

<!-- BEGIN mktoc {"min_depth": 2} -->

- [애플리케이션](#applications)
  - [오디오 및 음악](#audio-and-music)
  - [블록체인](#blockchain)
  - [데이터베이스](#database)
  - [임베디드](#embedded)
  - [에뮬레이터](#emulators)
  - [파일 관리자](#file-manager)
  - [금융](#finance)
  - [게임](#games)
  - [그래픽](#graphics)
  - [이미지 처리](#image-processing)
  - [산업 자동화](#industrial-automation)
  - [메시지 큐](#message-queue)
  - [MLOps](#mlops)
  - [관측 가능성](#observability)
  - [운영체제](#operating-systems)
  - [패키지 관리자](#package-managers)
  - [결제](#payments)
  - [생산성](#productivity)
  - [라우팅 프로토콜](#routing-protocols)
  - [보안 도구](#security-tools)
  - [소셜 네트워크](#social-networks)
  - [시스템 도구](#system-tools)
  - [작업 스케줄링](#task-scheduling)
  - [텍스트 편집기](#text-editors)
  - [텍스트 처리](#text-processing)
  - [유틸리티](#utilities)
  - [동영상](#video)
  - [가상화](#virtualization)
  - [웹](#web)
  - [웹 서버](#web-servers)
  - [워크플로 자동화](#workflow-automation)
- [개발 도구](#development-tools)
  - [빌드 시스템](#build-system)
  - [디버깅](#debugging)
  - [배포](#deployment)
  - [임베디드](#embedded-1)
  - [FFI](#ffi)
  - [포매터](#formatters)
  - [IDE](#ides)
  - [프로파일링](#profiling)
  - [서비스](#services)
  - [정적 분석](#static-analysis)
  - [테스트](#testing)
  - [트랜스파일](#transpiling)
  - [터널](#tunnel)
- [라이브러리](#libraries)
  - [인공지능](#artificial-intelligence)
    - [유전 알고리즘](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [머신 러닝](#machine-learning)
    - [OpenAI](#openai)
    - [도구](#tooling)
  - [천문학](#astronomy)
  - [비동기](#asynchronous)
  - [오디오 및 음악](#audio-and-music-1)
  - [인증](#authentication)
  - [자동차](#automotive)
  - [생물정보학](#bioinformatics)
  - [캐싱](#caching)
  - [클라우드](#cloud)
  - [명령줄](#command-line)
  - [압축](#compression)
  - [연산](#computation)
  - [동시성](#concurrency)
  - [설정](#configuration)
  - [암호학](#cryptography)
  - [데이터 처리](#data-processing)
  - [데이터 스트리밍](#data-streaming)
  - [자료 구조](#data-structures)
  - [데이터 시각화](#data-visualization)
  - [데이터베이스](#database-1)
  - [날짜 및 시간](#date-and-time)
  - [분산 시스템](#distributed-systems)
  - [도메인 주도 설계](#domain-driven-design)
  - [eBPF](#ebpf)
  - [이메일](#email)
  - [인코딩](#encoding)
  - [파일시스템](#filesystem)
  - [금융](#finance-1)
  - [함수형 프로그래밍](#functional-programming)
  - [게임 개발](#game-development)
  - [지리공간](#geospatial)
  - [그래프 알고리즘](#graph-algorithms)
  - [그래픽](#graphics-1)
  - [GUI](#gui)
  - [이미지 처리](#image-processing-1)
  - [언어 명세](#language-specification)
  - [라이선스 관리](#licensing)
  - [로깅](#logging)
  - [매크로](#macro)
  - [마크업 언어](#markup-language)
  - [모바일](#mobile)
  - [네트워크 프로그래밍](#network-programming)
  - [파싱](#parsing)
  - [주변 장치](#peripherals)
  - [플랫폼별](#platform-specific)
  - [역공학](#reverse-engineering)
  - [스크립팅](#scripting)
  - [시뮬레이션](#simulation)
  - [소셜 네트워크](#social-networks-1)
  - [시스템](#system)
  - [작업 스케줄링](#task-scheduling-1)
  - [템플릿 엔진](#template-engine)
  - [텍스트 처리](#text-processing-1)
  - [텍스트 검색](#text-search)
  - [안전하지 않은 코드](#unsafe)
  - [동영상](#video-1)
  - [가상화](#virtualization-1)
  - [웹 프로그래밍](#web-programming)
- [레지스트리](#registries)
- [자료](#resources)
- [라이선스](#license)
<!-- END mktoc -->

## 애플리케이션

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - Rust 기반 Wolfram Language 인터프리터.
* [alacritty](https://github.com/alacritty/alacritty) - 여러 플랫폼을 지원하는 GPU 가속 터미널 에뮬레이터
* [Andromeda](https://github.com/tryandromeda/andromeda) - Rust 🦀로 처음부터 구현하고 The Nova Engine을 사용하는 JavaScript 및 TypeScript 런타임.
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - AI 모델, 벤치마크, 코딩 에이전트를 살펴볼 수 있는 TUI [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - Tor 구현체. (아직 완성도가 높지 않은 클라이언트이지만 앞으로의 발전을 지켜봐 주세요!) [![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - 대화형 어셈블리 셸.
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - tauri와 rust 기반의 현대적인 크로스 플랫폼 Clash GUI. Windows, macOS, Linux를 지원합니다.
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - 사용자 공간 WireGuard VPN 구현체 [![빌드 배지](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - Tauri로 만든 가벼운 오픈 소스 데이터베이스 관리 도구. MySQL, PostgreSQL, SQLite, Redis, MongoDB, DuckDB 등을 지원합니다. [![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - 실질적인 2FA/MFA를 제공하는 기업용 오픈 소스 SSO 및 WireGuard VPN
* [denoland/deno](https://github.com/denoland/deno) - V8과 Tokio로 만든 안전한 JavaScript/TypeScript 런타임 [![빌드 상태](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - 좋아하는 색상 팔레트와 테마로 이미지와 배경화면을 변환합니다 [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - WireGuard를 지원하는 간단하고 기능이 풍부한 탈중앙화 메시 VPN. [![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - 간단한 작업을 위한 간단한 편집기. [![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - Ansible 구문에서 영감을 받은 HTTP 부하 테스트 애플리케이션
* [fend](https://github.com/printfn/fend) - 단위를 인식하는 임의 정밀도 계산기 [![빌드](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - 간단한 마이크로서비스
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - 실제 저장소에서 작업하고 브라우저, 터미널, 데스크톱 애플리케이션을 제어할 수 있는 Rust 런타임 기반 크로스 플랫폼 데스크톱 AI 에이전트
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - 매우 빠르고 비교적 안정적인 Mega 다운로더 [![빌드](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - i3wm에서 영감을 받은 Windows용 타일링 창 관리자. YAML 설정, 다중 모니터, 키보드 기반 명령을 지원합니다
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - mdbook용 국제화 및 렌더링 확장.
* [habitat](https://github.com/habitat-sh/habitat) - 애플리케이션 빌드, 배포, 관리를 위해 Chef가 만든 도구.
* [Herd](https://github.com/imjacobclark/Herd) - 실험적인 HTTP 부하 테스트 애플리케이션
* [hickory-dns](https://crates.io/crates/hickory-dns) - DNS 서버 [![빌드 상태](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - 내부적으로 Wireguard를 사용하는 오버레이 또는 사설 메시 네트워크
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - 빠르고 간단하며 가벼운 데이터 수집기
* [kalker](https://github.com/PaddiM8/kalker) - 사용자 정의 변수와 함수, 미분, 적분, 복소수를 수학과 비슷한 구문으로 지원하는 공학용 계산기. 크로스 플랫폼 및 WASM 지원 [![빌드 상태](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - 여러 kubectl 포트 포워딩 설정을 관리하고 공유하는 크로스 플랫폼 시스템 트레이 앱. [![빌드 상태](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - 고성능 피어 투 피어 VPN
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - Kubernetes용 초경량 서비스 메시.
* [LWE](https://github.com/YangYuS8/lwe) - Rust와 Tauri로 만든 Linux 데스크톱 앱. Wallpaper Engine 콘텐츠를 탐색하고 관리하며 적용합니다.
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - KaTeX로 LaTeX 수식을 렌더링하는 [mdBook](https://github.com/rust-lang/mdBook) 전처리기.
* [MaidSafe](https://github.com/maidsafe) - 탈중앙화 플랫폼.
* [mayocream/koharu](https://github.com/mayocream/koharu) - Candle과 Tauri로 만든 머신 러닝 기반 만화 번역기. 말풍선 자동 감지, OCR, 인페인팅, LLM 번역을 제공합니다
* [mdBook](https://github.com/rust-lang/mdBook) - 마크다운 파일로 책을 만드는 명령줄 유틸리티 [![빌드 상태](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - Git을 지원하는 모노레포 및 단일 코드베이스 관리 시스템이자 Google Piper의 비공식 오픈 소스 구현체.
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - 링크를 검사해 주는 mdbook 백엔드.
* [mirrord](https://github.com/metalbear-co/mirrord) - 로컬 프로세스와 클라우드 환경을 연결하고 클라우드 조건에서 로컬 코드를 실행합니다
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - Nostr 신원과 FIPS 기반 데이터 평면으로 구축한 Tailscale 스타일의 사설 메시 VPN. 네이티브 크로스 플랫폼 앱(macOS, Linux, Windows, 모바일)과 CLI/데몬을 제공합니다.
* [newdee/magpie](https://github.com/newdee/magpie) - GitHub 스타, 로컬 파일, 이미지, 동영상을 기기 내에서 의미 기반으로 검색하는 로컬 우선 Spotlight 스타일 런처. [![CI](https://github.com/newdee/magpie/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/newdee/magpie/actions/workflows/ci.yml)
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - linux와 macosx용 steam 및 DRM 없는 게임 등록 도구와 런처
* [openma-ai/Martty](https://github.com/openma-ai/Martty) - DeepSeek Harness와 기타 ACP 호환 코딩 에이전트용 Rust/ratatui 터미널 클라이언트. [![CI](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml/badge.svg?branch=main)](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml)
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - Tauri 2.0과 순수 Rust SSH(russh)로 만든 크로스 플랫폼 SSH 터미널 클라이언트 및 로컬 터미널 에뮬레이터. 연결 다중화, SFTP 파일 관리자, 내장 IDE(CodeMirror 6), 포트 포워딩(-L/-R/-D), Grace Period 자동 재연결, 플러그인 시스템, AI 도우미, 암호화 내보내기(.oxide), 11개 언어를 지원합니다. [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - 패치 기반 분산 버전 관리 시스템
* [provrb/OBDium](https://github.com/provrb/obdium) - 차량 진단 전반을 위한 Tauri 기반 크로스 플랫폼 애플리케이션. ELM327 어댑터로 차량에 연결하여 고장 코드, 실시간 OBD-II 데이터, I/M 준비 상태 테스트 등을 확인하세요!
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - 기업용 신속 개발 플랫폼(Axum + SeaORM + JWT + VUE3, MySQL/Postgres/SQLite 지원)
* [Rauthy](https://github.com/sebadob/rauthy) - OpenID Connect 싱글 사인온 신원 및 접근 관리
* [Rio](https://github.com/raphamorim/rio) - WebGPU 기반 하드웨어 가속 GPU 터미널 에뮬레이터. 데스크톱과 브라우저에서 실행하는 데 중점을 둡니다.
* [rkik](https://github.com/aguacero7/rkik) - dig와 ping이 각각 DNS와 ICMP를 검사하듯, 상태를 유지하지 않고 수동적으로 NTP를 검사하는 CLI 도구. 비동기 요청과 지속적인 모니터링을 지원합니다. [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - 범용 다중 언어 실행기와 스마트 REPL(Python, JS, Go, C 등 25개 이상의 언어).
* [runmat-org/runmat](https://github.com/runmat-org/runmat) [[runmat](https://crates.io/crates/runmat)] - wgpu를 통한 GPU 가속을 지원하는 MATLAB 구문 수치 프로그램 런타임. [![CI](https://github.com/runmat-org/runmat/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/runmat-org/runmat/actions/workflows/ci.yml)
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - 다중 프로토콜 지원과 실시간 데이터 처리를 위해 Rust로 만든 고성능 IoT 개발 플랫폼. MQTT, WebSockets(WS), TCP, CoAP 프로토콜을 지원하여 다양한 IoT 애플리케이션에 유연하게 활용할 수 있습니다.
* [rx](https://github.com/cloudhead/rx) - Vi에서 영감을 받은 현대적인 픽셀 아트 편집기
* [Ryot](https://github.com/ignisda/ryot) - 미디어 소비, 운동 등을 기록하는 자체 호스팅 애플리케이션.
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - 전역 단축키, 중첩 메뉴, JSON 기반 설정으로 미리 정의한 터미널 명령을 정리하고 실행하는 크로스 플랫폼 시스템 트레이 앱(Tauri + Vue).
* [Saga Reader](https://github.com/sopaco/saga-reader) - AI 기반의 매우 빠르고 초경량인 인터넷 리더. 검색 엔진 정보와 RSS 가져오기를 지원합니다.
* [Servo](https://github.com/servo/servo) - 프로토타입 웹 브라우저 엔진
* [shoes](https://github.com/cfal/shoes) - 다중 프로토콜 프록시 서버
* [shuttle](https://github.com/shuttle-hq/shuttle) - 서버리스 플랫폼.
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - 네트워크 트래픽을 손쉽게 모니터링하는 크로스 플랫폼 애플리케이션 [![빌드 배지](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![크레이트](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - 초고속 TypeScript / JavaScript 컴파일러
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - GPU 지원과 OpenAPI 인터페이스를 갖춘 자체 호스팅 AI 코딩 도우미이자 GitHub Copilot의 오픈 소스 대안 [![최신 릴리스](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - 단일 Rust 바이너리로 Vercel, 분석, 오류 추적, 가동 시간 모니터링을 대체하는 자체 호스팅 PaaS
* [tiny](https://github.com/osa1/tiny) - 터미널 IRC 클라이언트
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - Android 맞춤 설정용 오픈 소스 도구 모음. 루트 접근, 부팅 이미지 조작, 시스템리스 수정을 제공합니다
* [tunnetio/Tunnet](https://github.com/tunnetio/Tunnet) - 공개 터널, 신원 기반 SSH, P2P 파일 전송을 지원하는 사설 메시 네트워킹
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - 터미널, 데스크톱 GUI, 명령줄 워크플로를 위한 로컬 코딩 에이전트. 작업 상태를 영속적으로 유지하고 증거 기반 검증을 제공합니다. [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - 마크업 기반 조판 시스템 [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - Tauri로 만든 macOS, Linux, Windows용 WireGuard VPN 클라이언트.
* [vortix](https://github.com/Harry-kp/vortix) - 실시간 원격 측정, 누출 감지, 킬 스위치를 제공하는 WireGuard 및 OpenVPN용 터미널 UI
* [vproxy](https://github.com/0x676e67/vproxy) - 고성능 HTTP/HTTPS/SOCKS5 프록시 서버 [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - WASI와 Emscripten을 지원하는 안전하고 빠른 WebAssembly 런타임 [![빌드 상태](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - 완전한 모의 REST API 생성기
* [wezterm](https://github.com/wezterm/wezterm) - GPU 가속을 지원하는 크로스 플랫폼 터미널 에뮬레이터 및 멀티플렉서
* [WinterJS](https://github.com/wasmerio/winterjs) - SpiderMonkey와 Axum으로 만든 안전한 JavaScript 런타임
* [zellij](https://github.com/zellij-org/zellij) - 필요한 기능을 갖춘 터미널 멀티플렉서(작업 공간)
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - Tauri로 만든 현대적이고 가벼우며 안전한 Mihomo(Clash Meta) GUI 클라이언트. [![보안 감사](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### 오디오 및 음악

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - 실시간 음성 AI 에이전트(전화 + WebRTC)용 네이티브 Rust 런타임. 자체 호스팅 단일 바이너리이며 pipecat과 호환됩니다
* [dano](https://github.com/kimono-koans/dano) - 미디어 파일용 hashdeep/md5tree 도구(그 이상의 기능도 제공)
* [enginesound](https://github.com/DasEtwas/enginesound) - 어느 정도 사실적인 엔진 소리를 절차적으로 생성하는 GUI 및 명령줄 애플리케이션. 세밀한 설정, 가변 샘플링 속도, 주파수 분석 창을 제공합니다.
* [Festival](https://github.com/hinto-janai/festival) - 로컬 음악 플레이어/서버/클라이언트 [![빌드 배지](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - 간단하면서도 다양한 설정을 제공하는 최소한의 mpd 터미널 클라이언트 [![빌드 배지](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - 브라우저에서 함께 음악을 만들기 위한 그래프 지향 라이브 코딩 언어.
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - 네이티브 스트리밍, 동기화된 가사, 실시간 오디오 시각화를 지원하는 Spotify 터미널 클라이언트 [![지속적 배포](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - 앨범 아트를 지원하는 현대적이고 설정 가능한 터미널 기반 MPD 클라이언트
* [ncspot](https://github.com/hrkfdn/ncspot) - ncmpc 등에서 영감을 받은 크로스 플랫폼 ncurses Spotify 클라이언트. [![빌드 배지](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - Rust로 작성한 빠르고 간단한 전문가용 Linux 오디오 계측 및 시각화.
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - 다중 사용자를 지원하는 rust 기반 팟캐스트 관리 시스템. 중앙 데이터베이스를 사용하므로 청취 시간과 테마 등의 정보가 기기 간에 이어집니다. Tauri로 만든 클라이언트를 제공하는 완전한 크로스 플랫폼 청취 솔루션입니다! [![Docker 컨테이너 빌드](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - 새 에피소드를 자동으로 다운로드하는 자체 호스팅 팟캐스트 관리자. 청취용 웹 UI와 AntennaPod 같은 모바일 앱을 위한 GPodder 호환 동기화 API를 제공합니다. [![빌드 배지](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - 음악 스트리밍 애플리케이션.
* [rusty-amp](https://github.com/danylokravchenko/rusty-amp) - 터미널에서 바로 실행되는 완전한 기타 앰프 및 페달보드 구성. 외부 플러그인을 지원합니다.
* [Spotify Player](https://github.com/aome510/spotify-player) - 전체 기능을 지원하는 터미널 Spotify 플레이어.
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - UNIX 데몬으로 실행되는 오픈 소스 Spotify 클라이언트. [![지속적 통합](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - 음악 플레이어 TUI
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - 터미널에서 전 세계 수천 개의 라디오 방송을 검색하고 청취합니다 [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - 일렉트로닉 댄스 음악 제작자를 위한 일일 정적 생성 정보 자료. Beatport와 Spotify 등의 공개 데이터를 사용하여 EDM 장르별로 자주 쓰이는 템포, 조성, 근음 등의 값을 매일 분석합니다.

### 블록체인

* [Anchor](https://github.com/solana-foundation/anchor) - 안전한 Solana 프로그램(스마트 계약)을 만드는 대표적인 개발 프레임워크.
* [artemis](https://github.com/paradigmxyz/artemis) - MEV 봇 작성을 위한 간단하고 모듈식이며 빠른 프레임워크.
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - Bitcoin SV 작업용 라이브러리.
* [cairo](https://github.com/starkware-libs/cairo) - Cairo는 일반 연산을 위한 증명 가능한 프로그램을 만드는 최초의 튜링 완전 언어입니다. STARK 증명을 사용하는 ZK-Rollup인 [StarkNet](https://www.starknet.io)의 네이티브 언어이기도 합니다 ![GitHub 워크플로 상태](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - Polkadot 기반의 완전 탈중앙화 체인 간 암호 자산 관리.
* [CITA](https://github.com/citahub/cita) - 기업 사용자를 위한 고성능 블록체인 커널.
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - 동기/비동기/websocket을 지원하는 Coinbase pro 클라이언트
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - EigenLayer로 보안을 확보한 AI 우선 탈중앙화 저장소.
* [Diem](https://github.com/diem/diem) - Diem의 목표는 수십억 명의 사람들에게 힘을 실어 주는 간단한 글로벌 통화와 금융 인프라를 제공하는 것입니다.
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - 실물 자산(RWA)과 규정을 준수하는 금융 애플리케이션을 위한 프라이버시 중심의 확장 가능한 FMI인 Dusk의 참조 구현. [![빌드 상태](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - Electrum Server의 효율적인 재구현.
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - 신뢰가 필요 없는 StarkNet 경량 클라이언트 Beerus. ⚡매우 빠릅니다⚡ [![GitHub 워크플로 상태](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - 스마트 계약 호출을 인코딩하고 디코딩합니다.
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - 맞춤형 Ethereum 배니티 주소 생성기
* [etk](https://github.com/quilt/etk) - EVM 바이트코드 작성, 읽기, 분석 도구 모음.
* [Forest](https://github.com/ChainSafe/forest) - Filecoin 구현체 [![빌드 상태](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Ethereum 애플리케이션 개발을 위한 매우 빠르고 이식 가능하며 모듈식인 도구 모음. ![빌드 상태](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - MimbleWimble 프로토콜의 발전형
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - BIP-32 HD 지갑 관련 키 파생 유틸리티.
* [Holochain](https://github.com/holochain/holochain) - 늘 만들고 싶었던 분산 앱을 위한 확장 가능한 블록체인의 P2P 대안. [![치명적인 검사 실패 감지](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - 허가가 필요 없는 모듈식 상호운용성 프레임워크. 오프체인 클라이언트와 Solana VM 및 CosmWasm용 스마트 계약을 Rust로 작성했습니다.
* [HyperSync](https://github.com/enviodev/hypersync-client-rust) [[hypersync-client](https://crates.io/crates/hypersync-client)] - JSON-RPC의 대안으로 필터링한 블록, 트랜잭션, 로그를 반환하는 블록체인 데이터 API인 Envio HyperSync의 클라이언트. [![빌드 상태](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml)
* [ibc-rs](https://github.com/informalsystems/hermes) - [Interblockchain Communication](https://docs.cosmos.network/ibc) 프로토콜 구현체
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - BIP39 구현체.
* [interBTC](https://github.com/interlay/interbtc) - Polkadot 및 Kusama로 연결하는 신뢰가 필요 없는 완전 탈중앙화 Bitcoin 브리지.
* [Joystream](https://github.com/Joystream/joystream) - 사용자가 운영하는 동영상 플랫폼
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - 세계에서 가장 빠른 오픈 소스 탈중앙화 레이어 1. 완전한 확장성을 제공합니다.
* [Lighthouse](https://github.com/sigp/lighthouse) - Ethereum 합의 계층(CL) 클라이언트 [![빌드 상태](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - 확장성이 뛰어나고 지연 시간이 짧은 Web3 애플리케이션을 위한 탈중앙화 블록체인 인프라 [![빌드 상태](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - 저사양 모바일 기기를 위한 탈중앙화 스마트 계약 플랫폼.
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervos CKB는 누구나 참여할 수 있는 공개 블록체인이자 Nervos 네트워크의 공통 지식 계층입니다.
* [opensea-rs](https://github.com/gakonst/opensea-rs) - Opensea API 및 계약용 바인딩과 CLI.
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - Parity Bitcoin 클라이언트
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - Intel SGX와 Substrate 기반의 기밀 스마트 계약 블록체인
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - Parity Polkadot 블록체인 SDK
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - Rust로 작성한 Cardano 노드 클라이언트.
* [reth](https://github.com/paradigmxyz/reth) - 모듈식이며 기여하기 쉽고 매우 빠른 Ethereum 프로토콜 구현체.
* [revm](https://github.com/bluealloy/revm) - Revolutionary Machine(revm)은 빠른 Ethereum 가상 머신입니다.
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - Bitcoin 관련 자료 구조와 네트워크 메시지의 직렬화/역직렬화, 파싱, 실행을 지원하는 라이브러리.
* [rust-lightning](https://github.com/lightningdevkit/rust-lightning) [![크레이트](https://img.shields.io/crates/v/lightning.svg?logo=rust)](https://crates.io/crates/lightning) - Bitcoin Lightning 라이브러리. 주 크레이트인 `lightning`은 네트워킹, 영속성 또는 다른 I/O를 처리하지 않습니다. 따라서 런타임에 종속되지 않지만 사용자가 기본 네트워킹 로직, 체인 상호작용, 디스크 저장소를 연동 크레이트에서 구현해야 합니다.
* [sigma-rust](https://github.com/ergoplatform/sigma-rust) - ErgoTree 인터프리터와 지갑 관련 기능.
* [starkware-libs/cairo-vm](https://github.com/starkware-libs/cairo-vm) - Cairo VM 구현체 [![rust](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml/badge.svg)](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml)
* [Subspace](https://github.com/autonomys/subspace) - 확장성, 보안, 탈중앙화를 동시에 달성하여 블록체인 트릴레마를 완전히 해결할 수 있는 최초의 레이어 1 블록체인.
* [Sui](https://github.com/MystenLabs/sui) - Move 프로그래밍 언어 기반의 자산 지향 프로그래밍 모델과 높은 처리량, 낮은 지연 시간을 제공하는 차세대 스마트 계약 플랫폼.
* [svm-rs](https://github.com/alloy-rs/svm-rs) - Solidity 컴파일러 버전 관리자.
* [tempoxyz/tempo](https://github.com/tempoxyz/tempo) - Reth SDK로 만든 대규모 스테이블코인 결제용 블록체인. EVM 호환성, 1초 미만의 완결성, 네이티브 스마트 계정 기능을 제공합니다
* [tendermint-rs](https://github.com/cometbft/tendermint-rs) - Tendermint 블록체인 자료 구조와 클라이언트
* [wagyu](https://github.com/howardwu/wagyu) [[wagyu](https://crates.io/crates/wagyu)] - 암호화폐 지갑 생성 라이브러리
* [zcash](https://github.com/zcash/zcash) - "Zerocash" 프로토콜 구현체인 Zcash.

### 데이터베이스

* [apecloud/ape-dts](https://github.com/apecloud/ape-dts) - 데이터 전송 도구 모음. MySQL, PostgreSQL, Redis, MongoDB, Kafka, ClickHouse 등 사이의 데이터 복제를 제공합니다.
* [Atomic-Server](https://github.com/ontola/atomic-server/) [[atomic-server](https://crates.io/crates/atomic_server)] - 실시간 업데이트, 동적 인덱싱, CMS용으로 쓰기 쉬운 GUI를 갖춘 NoSQL 그래프 데이터베이스. [![릴리스](https://github.com/ontola/atomic-server/actions/workflows/release_please.yml/badge.svg)](https://github.com/ontola/atomic-server/actions)
* [ayarotsky/redis-shield](https://github.com/ayarotsky/redis-shield) - 고성능 요청 속도 제한을 위해 토큰 버킷 알고리즘을 네이티브 명령으로 구현하는 Redis 모듈
* [CozoDB](https://github.com/cozodb/cozo) - Datalog를 사용하며 그래프 데이터와 알고리즘에 중점을 둔 트랜잭션 관계형 데이터베이스. 시점 조회가 가능하고 빠릅니다! [![GitHub 워크플로 상태](https://img.shields.io/github/actions/workflow/status/cozodb/cozo/build.yml?branch=main)](https://github.com/cozodb/cozo/actions/workflows/build.yml)
* [Curvine](https://github.com/CurvineIO/curvine) - Rust로 작성한 고성능 동시성 분산 캐시 시스템. AI, 빅데이터 등의 저지연 고처리량 워크로드를 위해 설계되었습니다.
* [darkbird](https://github.com/Rustixir/darkbird) [[darkbird](https://crates.io/crates/darkbird)] - erlang mnesia에서 영감을 받은 높은 동시성의 실시간 인메모리 저장소
* [Databend](https://github.com/databendlabs/databend) - 클라우드 네이티브 아키텍처를 갖춘 현대적인 실시간 데이터 처리 및 분석 DBMS [![릴리스](https://github.com/databendlabs/databend/actions/workflows/release.yml/badge.svg)](https://github.com/databendlabs/databend/actions)
* [DB3 Network](https://github.com/dbpunk-labs/db3) - 커뮤니티가 주도하는 블록체인 레이어 2 탈중앙화 데이터베이스 네트워크인 DB3 [![GitHub 워크플로 상태(이벤트 포함)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml/badge.svg)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml)
* [dsplce-co/supabase-plus](https://github.com/dsplce-co/supabase-plus) [[supabase-plus](https://crates.io/crates/supabase-plus)] - 공식 Supabase CLI를 확장하고 필요한 기능을 갖춘 명령줄 유틸리티 [![GitHub Actions 워크플로 상태](https://img.shields.io/github/actions/workflow/status/dsplce-co/supabase-plus/publish.yml)
](https://github.com/dsplce-co/supabase-plus/actions/workflows/publish.yml)
* [erikgrinaker/toydb](https://github.com/erikgrinaker/toydb) - 학습 프로젝트로 작성한 분산 SQL 데이터베이스.
* [Garage](https://github.com/deuxfleurs-org/garage) [[garage](https://crates.io/crates/garage)] - 소규모 및 중규모 자체 호스팅을 위해 설계한 S3 호환 분산 객체 저장소 서비스. [![상태 배지](https://woodpecker.deuxfleurs.fr/api/badges/1/status.svg)](https://woodpecker.deuxfleurs.fr/repos/1)
* [GlueSQL](https://github.com/gluesql/gluesql) - 파서(sqlparser-rs), 실행 계층, 영속 및 비영속 저장소 옵션을 하나의 패키지에 담은 SQL 데이터베이스용 Rust 라이브러리. [![crates.io](https://img.shields.io/crates/v/gluesql.svg)](https://crates.io/crates/gluesql)
* [Goldziher/scythe](https://github.com/Goldziher/scythe) - 스키마를 인식하는 린트 기능으로 SQL에서 타입 안전한 코드를 생성하는 다중 방언 SQL 컴파일러 및 린터.
* [GreptimeDB](https://github.com/grepTimeTeam/greptimedb/) - PromQL/SQL/Python을 지원하는 오픈 소스 클라우드 네이티브 분산 시계열 데이터베이스.[![CI](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml/badge.svg)](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml)
* [HelixDB](https://github.com/HelixDB/helix-db) - RAG와 AI를 위한 지능형 데이터 저장용 강력한 그래프-벡터 데이터베이스
* [Hiqlite](https://github.com/sebadob/hiqlite) - 고가용성의 내장 가능한 raft 기반 SQLite 및 캐시
* [hydra-db/hydradb](https://github.com/hydra-db/hydradb) - OpenCypher 쿼리, GraphBLAS 순회, Neo4j 호환 Bolt 연결을 제공하는 객체 저장소 네이티브 분산 그래프 데이터베이스.
* [indradb](https://crates.io/crates/indradb) - 그래프 데이터베이스
* [KiteSQL](https://github.com/KipData/KiteSQL) - Rust용 함수로서의 SQL
* [lancedb](https://github.com/lancedb/lancedb) [[vectordb](https://crates.io/crates/vectordb)] - AI 애플리케이션용 서버리스 저지연 벡터 데이터베이스
* [Lucid](https://github.com/lucid-kv/lucid) - HTTP API로 접근할 수 있는 고성능 분산 KV 저장소. [![빌드 상태](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [Materialize](https://github.com/MaterializeInc/materialize) - Timely Dataflow 기반의 스트리밍 SQL 데이터베이스 :heavy_dollar_sign:
* [microsoft/pg_durable](https://github.com/microsoft/pg_durable) - PostgreSQL 내부의 내구성 있는 실행. 자동 체크포인트, 충돌 복구, 병렬 실행을 갖춘 장시간 실행 내결함성 SQL 함수. 별도 인프라 없이 pgrx와 Rust로 만든 PostgreSQL 확장으로 실행됩니다. [![라이선스](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
* [native_db](https://github.com/vincent-herlemont/native_db) [[native_db](https://crates.io/crates/native_db)] - 다중 플랫폼 앱(서버, 데스크톱, 모바일)에 바로 적용할 수 있는 임베디드 데이터베이스. Rust 타입을 손쉽게 동기화합니다
* [Neon](https://github.com/neondatabase/neon) - 서버리스 Postgres. 저장소와 연산을 분리하여 자동 확장, 분기, 무제한 저장소를 제공합니다.
* [NoKV-Lab/NoKV](https://github.com/NoKV-Lab/NoKV) - AI 네이티브 분산 파일시스템. [![Rust](https://github.com/NoKV-Lab/NoKV/workflows/Rust/badge.svg)](https://github.com/NoKV-Lab/NoKV/actions/workflows/rust.yml)
* [noria](https://github.com/mit-pdos/noria) [[noria](https://crates.io/crates/noria)] - 웹 애플리케이션 백엔드용 동적으로 변하는 부분 상태 유지 데이터 흐름
* [oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) [[oxigraph](https://crates.io/crates/oxigraph)] - [SPARQL](https://www.w3.org/TR/sparql11-overview/) 표준을 구현하는 그래프 데이터베이스 ![Crates.io 버전](https://img.shields.io/crates/v/oxigraph?logo=Rust)
* [ParadeDB](https://github.com/paradedb/paradedb/) - 실시간 검색과 분석을 위해 Postgres 위에 구축한 Elasticsearch 대안인 ParadeDB.
* [ParityDB](https://github.com/paritytech/parity-db) - 읽기 작업에 최적화된 빠르고 안정적인 데이터베이스
* [pgdogdev/pgdog](https://github.com/pgdogdev/pgdog) - 연결 풀링, 부하 분산, 샤딩으로 PostgreSQL을 확장하는 빠른 프록시.
* [Picodata](https://github.com/picodata/picodata) [[picodata-plugin](https://crates.io/crates/picodata-plugin)] - Rust 플러그인 모델을 갖춘 분산 PostgreSQL 호환 데이터베이스. 상용 플러그인으로 Redis 및 Cassandra 와이어 프로토콜 호환성을 제공합니다.
* [PRQL](https://github.com/PRQL/prql) [[prqlc](https://crates.io/crates/prqlc)] - 읽기 쉬운 SQL로 컴파일되는 현대적인 데이터 변환 언어. [![테스트](https://github.com/PRQL/prql/actions/workflows/tests.yml/badge.svg)](https://github.com/PRQL/prql/actions)
* [PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) - 이벤트 소싱 데이터베이스 엔진
* [Qdrant](https://github.com/qdrant/qdrant) - 확장 필터링을 지원하는 오픈 소스 벡터 유사도 검색 엔진 [![테스트](https://github.com/qdrant/qdrant/actions/workflows/rust.yml/badge.svg)](https://github.com/qdrant/qdrant/actions)
* [Qrlew/qrlew](https://github.com/Qrlew/qrlew) [[qrlew](https://crates.io/crates/qrlew)] - SQL에서 SQL로 변환하는 차등 프라이버시 계층 [![Qrlew](https://github.com/Qrlew/qrlew/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrlew/qrlew/actions) ![Crates.io 버전](https://img.shields.io/crates/v/qrlew?logo=Rust)
* [RisingWaveLabs/RisingWave](https://github.com/RisingWaveLabs/risingwave) - 클라우드의 차세대 스트리밍 데이터베이스 [![CI](https://github.com/risingwavelabs/risingwave/actions/workflows/labeler.yml/badge.svg)](https://github.com/risingwavelabs/risingwave/actions)
* [RustFS](https://github.com/rustfs/rustfs) [[RustFS](https://crates.io/crates/rustfs)] - 🚀 RustFS는 오픈 소스 S3 호환 고성능 객체 저장소 시스템으로, MinIO와 Ceph 등 다른 S3 호환 플랫폼과의 마이그레이션 및 공존을 지원합니다.  [![상태 배지](https://github.com/rustfs/rustfs/actions/workflows/ci.yml/badge.svg)](https://github.com/rustfs/rustfs)
* [ruvnet/ruvector](https://github.com/ruvnet/ruvector) [[ruvector-core](https://crates.io/crates/ruvector-core)] - LLM을 로컬에서 실행하고 수평 확장하는 자체 학습 벡터 데이터베이스 및 인지 컨테이너.
* [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) [[turbovec](https://crates.io/crates/turbovec)] - TurboQuant 기반 벡터 인덱스. Rust로 작성했으며 SIMD 가속 검색과 Python 바인딩을 제공합니다
* [sabiql](https://github.com/riii111/sabiql) [[sabiql](https://crates.io/crates/sabiql)] - 안전한 편집과 ER 다이어그램을 갖춘 빠른 무드라이버 Vim 우선 데이터베이스 TUI. [![CI](https://github.com/riii111/sabiql/actions/workflows/ci.yml/badge.svg)](https://github.com/riii111/sabiql/actions/workflows/ci.yml)
* [samyama-ai/samyama-graph](https://github.com/samyama-ai/samyama-graph) - GraphRAG, 지식 그래프, 벡터 검색, 그래프 분석을 위한 Rust 네이티브 그래프-벡터 데이터베이스.
* [seppo0010/rsedis](https://github.com/seppo0010/rsedis) - Redis 재구현.
* [Skytable](https://github.com/skytable/skytable) - 다중 모델 NoSQL 데이터베이스 ![GitHub 워크플로 상태](https://img.shields.io/github/workflow/status/skytable/skytable/Tests?style=flat-square)
* [sled](https://crates.io/crates/sled) - 현대적인 임베디드 데이터베이스(베타) [![빌드 상태](https://github.com/spacejam/sled/actions/workflows/test.yml/badge.svg)](https://github.com/spacejam/sled/actions?workflow=Rust)
* [SQLSync](https://github.com/orbitinghail/sqlsync) - 다중 사용자를 위한 오프라인 우선 SQLite [![GitHub 워크플로 상태](https://github.com/orbitinghail/sqlsync/actions/workflows/actions.yaml/badge.svg?branch=main)](https://github.com/orbitinghail/sqlsync/actions?query=branch%3Amain)
* [SurrealDB](https://github.com/surrealdb/surrealdb) - 확장 가능한 분산 문서-그래프 데이터베이스 [![빌드 상태](https://img.shields.io/github/workflow/status/surrealdb/surrealdb/Continuous%20integration/main)](https://github.com/surrealdb/surrealdb/actions)
* [tabularis](https://github.com/TabularisDB/tabularis) - Tauri와 React로 만든 가벼운 개발자 중심 데이터베이스 관리 도구.
* [teaql/teaql-rs](https://github.com/teaql/teaql-rs) [[teaql-core](https://crates.io/crates/teaql-core)] - 타입이 지정된 쿼리, 통제된 변경, SQL 공급자를 갖춘 모델 기반 런타임 [![CI](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml)
* [TerminusDB](https://github.com/terminusdb/terminusdb-store) - 오픈 소스 그래프 데이터베이스 및 문서 저장소 [![빌드 상태](https://github.com/terminusdb/terminusdb-store/actions/workflows/test.yml/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [tikv](https://github.com/tikv/tikv) - Rust로 작성한 분산 KV 데이터베이스
* [tokio-rs/toasty](https://github.com/tokio-rs/toasty) [[toasty](https://crates.io/crates/toasty)] - derive 매크로, 타입 안전한 쿼리, 데이터베이스별 기능 노출을 제공하며 SQL(SQLite, PostgreSQL, MySQL)과 DynamoDB를 지원하는 편안하고 쉬운 Rust ORM. [![Crates.io](https://img.shields.io/crates/v/toasty.svg)](https://crates.io/crates/toasty)
* [Tonbo](https://github.com/tonbo-io/tonbo) - Apache Arrow와 Parquet 기반의 임베디드 영속 데이터베이스인 Tonbo [![crates.io](https://img.shields.io/crates/v/tonbo.svg)](https://crates.io/crates/tonbo)
* [TrailBase](https://github.com/trailbaseio/trailbase) - 타입 안전한 API, 내장 V8 JS/ES6/TS 엔진, 인증, 관리 대시보드를 갖춘 빠르고 가벼운 단일 파일 FireBase 대안 [![GitHub 워크플로 상태](https://github.com/trailbaseio/trailbase/workflows/test/badge.svg)](https://github.com/trailbaseio/trailbase/actions?workflow=test)
* [tsink](https://github.com/h2337/tsink) - Rust용 임베디드 시계열 데이터베이스 [![crates.io](https://img.shields.io/crates/v/tsink.svg)](https://crates.io/crates/tsink)
* [Turso](https://github.com/tursodatabase/turso) - SQLite와 호환되는 인프로세스 SQL 데이터베이스인 Turso Database.
* [USearch](https://github.com/unum-cloud/usearch) - 벡터와 문자열을 위한 유사도 검색 엔진 [![crates.io](https://img.shields.io/crates/v/usearch.svg)](https://crates.io/crates/usearch)
* [valentinus](https://github.com/kn0sys/valentinus) - LMDB 바인딩으로 만든 차세대 벡터 데이터베이스 [![Crates.io 버전](https://img.shields.io/crates/v/valentinus)](https://crates.io/crates/valentinus)
* [VelesDB](https://github.com/cyberlife-coder/VelesDB) [[velesdb-core](https://crates.io/crates/velesdb-core)] - 내장 가능한 로컬 우선 데이터베이스. 단일 바이너리의 삼중 엔진이 벡터 검색, 속성 그래프, 열 기반 저장소를 하나의 쿼리 언어(VelesQL)로 통합합니다. 의미/에피소드/절차 메모리를 위한 엔진 내 에이전트 메모리 SDK를 제공하며, 세션 간 `why()` 회상이 그래프를 순회하여 벡터 검색만으로 놓치는 연결된 사실을 찾아냅니다.
* [vorot93/libmdbx-rs](https://github.com/vorot93/libmdbx-rs) [[mdbx-sys](https://crates.io/crates/mdbx-sys)] - "빠르고 작고 강력한 임베디드 트랜잭션 키-값 데이터베이스이며 허용적인 라이선스를 사용하는" MDBX의 바인딩. mozilla/lmdb-rs를 포크하고 libmdbx에서 동작하도록 패치했습니다.
* [whispem/minikv](https://github.com/whispem/minikv) - Raft 합의, WAL 내구성, 시계열 API, 벡터 검색, S3 호환 엔드포인트를 갖춘 분산 다중 테넌트 키-값 및 객체 저장소. Helm 차트, Grafana 대시보드, Python SDK를 제공하여 프로덕션 운영을 지향합니다. [![빌드 상태](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)
* [WooriDB](https://github.com/naomijub/wooridb) - Crux와 Datomic에서 영감을 받은 범용 시계열 데이터베이스.

### 임베디드

* [embassy-rs/embassy](https://github.com/embassy-rs/embassy) [[embassy](https://crates.io/crates/embassy)] - STM32, nRF, RP, ESP32 등의 HAL을 제공하는 임베디드 Rust용 차세대 async/await 프레임워크. embassy-time, embassy-net, embassy-usb와 저전력 지원을 제공합니다. [![빌드 상태](https://github.com/embassy-rs/embassy/actions/workflows/ci.yml/badge.svg)](https://github.com/embassy-rs/embassy/actions)
* [infinition/waveshare-watch-rs](https://github.com/infinition/waveshare-watch-rs) - Waveshare ESP32-S3-Touch-AMOLED-2.06용 100% Rust `no_std` 스마트워치 펌웨어. QSPI 80 MHz DMA 디스플레이, Embassy 비동기 런타임, Always-On Display를 갖춘 이벤트 기반 전원 관리를 제공합니다.
* [rmk](https://github.com/haobogu/rmk) - 기능이 풍부한 키보드 펌웨어.
* [rtic-rs/rtic](https://github.com/rtic-rs/rtic) [[rtic](https://crates.io/crates/rtic)] - 임베디드 실시간 시스템 구축을 위한 실시간 인터럽트 기반 동시성 프레임워크.
* [uefi-rs](https://github.com/rust-osdev/uefi-rs) - Unified Extensible Firmware Interface용 Rust 스타일 래퍼. UEFI 기능을 위한 안전하고 편리하며 성능이 뛰어난 추상화를 활용하여 Rust 소프트웨어를 쉽게 개발할 수 있게 해 주는 크레이트입니다.

### 에뮬레이터

['emulator' 키워드와 일치하는 크레이트](https://crates.io/keywords/emulator)도 참고하세요.

* CHIP-8
  * [ColinEberhardt/wasm-rust-chip8](https://github.com/ColinEberhardt/wasm-rust-chip8) - WebAssembly CHIP-8 에뮬레이터.
  * [starrhorne/chip8-rust](https://github.com/starrhorne/chip8-rust) - chip8 에뮬레이터
* Commodore 64
  * [kondrak/rust64](https://github.com/kondrak/rust64) - Commodore 64 에뮬레이터
* Flash Player
  * [Ruffle](https://github.com/ruffle-rs/ruffle) - Adobe Flash Player 에뮬레이터인 Ruffle. WebAssembly를 사용하여 데스크톱과 웹 모두를 대상으로 합니다. [![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml)[![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml)
* Gameboy
  * [Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Game Boy 연구 프로젝트 및 에뮬레이터
  * [joamag/boytacean](https://github.com/joamag/boytacean) - WebAssembly를 사용하여 웹에서 실행되는 GameBoy Color 에뮬레이터.
  * [mohanson/gameboy](https://github.com/mohanson/gameboy) - 모든 기능을 갖춘 크로스 플랫폼 GameBoy 에뮬레이터. 영원한 소년들!
  * [mvdnes/rboy](https://github.com/mvdnes/rboy) - Gameboy 에뮬레이터
* Gameboy Advance
  * [michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - 데스크톱, android, [WebAssembly](https://michelhe.github.io/rustboyadvance-ng/)를 지원하는 Gameboy Advance 에뮬레이터인 RustboyAdvance-ng. [![빌드 배지](https://github.com/michelhe/rustboyadvance-ng/actions/workflows/deploy.yml/badge.svg)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* GameMaker
  * [OpenGMK](https://github.com/OpenGMK/OpenGMK) - 독점 GameMaker Classic 엔진을 현대적으로 재작성한 OpenGMK. 실행기의 완전한 소스 포트, 디컴파일러, TAS 프레임워크, 게임 데이터를 직접 다루는 라이브러리를 제공합니다.
* IBM PC
  * [MartyPC](https://github.com/dbalsom/martypc) - Rust로 작성한 IBM PC/XT 에뮬레이터.
* Intel 8080 CPU
  * [mohanson/i8080](https://github.com/mohanson/i8080) - Intel 8080 CPU 에뮬레이터
* iOS
  * [touchHLE](https://github.com/touchHLE/touchHLE) - iPhone OS 앱용 고수준 에뮬레이터
* iPod
  * [clicky](https://github.com/daniel5151/clicky) - 클릭휠 iPod 에뮬레이터(개발 중)
* NES
  * [koute/pinky](https://github.com/koute/pinky) - NES 에뮬레이터
  * [pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) - NES 에뮬레이터
* Nintendo 64
  * [gopher64](https://github.com/gopher64/gopher64) - Rust로 작성한 N64 에뮬레이터
* Nintendo DS
  * [dust](https://github.com/kelpsyberry/dust) - Nintendo DS 에뮬레이터
* PlayStation 4
  * [Obliteration](https://github.com/obhq/obliteration) - Windows, macOS, Linux용 실험적인 PS4 에뮬레이터 [![CI](https://github.com/obhq/obliteration/actions/workflows/main.yml/badge.svg)](https://github.com/obhq/obliteration/actions/workflows/main.yml)
* Shockwave Player
  * [DirPlayer](https://github.com/igorlira/dirplayer-rs) - Rust로 작성한 웹 호환 Shockwave Player 에뮬레이터
* ZX Spectrum
  * [rustzx/rustzx](https://github.com/rustzx/rustzx) - [![RustZX CI](https://github.com/rustzx/rustzx/actions/workflows/ci.yml/badge.svg)](https://github.com/rustzx/rustzx/actions/workflows/ci.yml)

### 파일 관리자

* [broot](https://github.com/Canop/broot) - 디렉터리 트리를 보고 탐색하는 새로운 방식(큰 디렉터리도 한눈에 살펴보기, 디렉터리를 찾아 `cd`로 이동하기, 검색 중에도 파일 계층을 놓치지 않기, 파일 조작 등). 자세한 내용은 [dystroy.org/broot](https://dystroy.org/broot/)를 참고하세요 [![최신 버전](https://img.shields.io/crates/v/broot.svg)](https://crates.io/crates/broot)
* [elio-fm/elio](https://github.com/elio-fm/elio) [[elio](https://crates.io/crates/elio)] - 풍부한 미리보기, 일괄 작업, 휴지통 지원 등 필요한 기능을 갖춘 터미널 파일 관리자.
* [FileSSH](https://github.com/JayanAXHF/FileSSH) - 빠른 SSH 세션 생성, 제자리 파일 편집 등으로 원격 서버의 파일을 관리하는 빠르고 사용하기 쉬운 TUI! ![crates.io](https://img.shields.io/crates/v/filessh)
* [joshuto](https://github.com/kamiyaa/joshuto) - ranger 스타일의 터미널 파일 관리자
* [moyangzhan/mango-finder](https://github.com/moyangzhan/mango-finder) - 자연어로 파일을 검색합니다
* [pikeru](https://github.com/dvhar/pikeru) - 좋은 섬네일과 검색 기능을 갖춘 linux용 파일 선택기
* [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive) - 가상 분산 파일시스템 기반 파일 관리자.
* [xplr](https://github.com/sayanarijit/xplr) - 수정하기 쉽고 최소한의 구성을 갖춘 빠른 TUI 파일 탐색기
* [yazi](https://github.com/sxyazi/yazi) - 비동기 I/O 기반의 매우 빠른 터미널 파일 관리자.

### 금융

[결제](#payments) 애플리케이션도 참고하세요.

* [Ashutosh0x/rust-finance](https://github.com/Ashutosh0x/rust-finance) - 여러 거래소의 데이터 수집, 주문 실행, 위험 모델, TUI 대시보드를 갖춘 AI 거래 터미널.
* [klirr](https://github.com/Sajjon/klirr) [[klirr](https://crates.io/crates/klirr)] - 서비스와 비용에 대한 아름다운 청구서를 생성하는 유지보수가 필요 없는 스마트 자유 오픈 소스 소프트웨어.
* [longbridge/longbridge-terminal](https://github.com/longbridge/longbridge-terminal) - Longbridge Securities용 AI 네이티브 CLI: 홍콩/미국/A주/싱가포르의 실시간 시세, 포트폴리오, 거래.
* [makeev/alphai-tui](https://github.com/makeev/alphai-tui) [[alphai-tui](https://crates.io/crates/alphai-tui)] - 키 없이 사용할 수 있는 시세와 차트, 뉴스 감성 분석, SEC Form 4 내부자 거래, 실적 해석을 제공하는 터미널 주식 대시보드. ![CI](https://github.com/makeev/alphai-tui/actions/workflows/ci.yml/badge.svg?branch=main)
* [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) - Rust와 Python으로 작성한 고성능 프로덕션급 알고리즘 거래 플랫폼.
* [tackler](https://github.com/tackler-ng/tackler) [[tackler](https://crates.io/crates/tackler)] - 일반 텍스트 회계를 위한 네이티브 GIT SCM 지원을 갖춘 빠르고 안정적인 장부 관리 엔진 [![CI 배지](https://github.com/tackler-ng/tackler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tackler-ng/tackler/blob/main/.github/workflows/ci.yml)
* [tarkah/tickrs](https://github.com/tarkah/tickrs) - 터미널에서 보는 실시간 종목 시세 데이터
* [wealthfolio/wealthfolio](https://github.com/wealthfolio/wealthfolio) - 투자, 순자산, 지출, 시뮬레이션을 위한 아름답고 사적인 로컬 우선 개인 재무 추적 도구.

### 게임

[Piston으로 만든 게임](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston)도 참고하세요.

* [buxx/OpenCombat](https://github.com/buxx/OpenCombat) - 제2차 세계 대전 실시간 전술 게임
* [chess-tui](https://github.com/thomas-mauran/chess-tui) - 체스 TUI 구현체 ♟️
* [citybound](https://github.com/citybound/citybound) - 여러분이 누릴 만한 도시 시뮬레이션
* [cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) - Doom 렌더러. 향후 플레이 가능한 게임으로 발전할 수 있습니다
* [doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) - 몇 가지 개선 사항을 갖춘 Cave Story 엔진 재구현.
* [garkimasera/gaia-maker](https://github.com/garkimasera/gaia-maker) - 행성과 테라포밍 시뮬레이션 게임
* [garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) - 픽셀 아트를 사용하는 확장 가능한 오픈 월드 로그라이크 게임
* [GitType](https://github.com/unhappychoice/gittype) - 소스 코드를 타자 도전 과제로 바꾸는 CLI 코드 타이핑 게임
* [gorilla-devs/ferium](https://github.com/gorilla-devs/ferium) - Modrinth, CurseForge, GitHub Releases에서 Minecraft 모드를, Modrinth와 CurseForge에서 모드팩을 다운로드하고 업데이트하는 빠르고 기능이 풍부한 CLI 프로그램인 Ferium ![ferium 빌드](https://github.com/gorilla-devs/ferium/actions/workflows/build.yml/badge.svg?branch=main)
* [HactarCE/Hyperspeedcube](https://github.com/HactarCE/Hyperspeedcube) - 초보자 친화적인 현대적 3D 및 4D 루빅스 큐브 시뮬레이터. 맞춤형 마우스/키보드 조작과 스피드솔빙용 고급 기능을 제공합니다
* [lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) - BMS 형식을 지원하는 최소한의 리듬 게임
* [louis-e/arnis](https://github.com/louis-e/arnis) - OpenStreetMap과 고도 데이터로 실제 지형을 반영한 Minecraft Java/Bedrock 월드를 생성합니다 [![CI](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions)
* [maras-archive/rsnake](https://github.com/maras-archive/rsnake) - 스네이크 게임.
* [mcthesw/game-save-manager](https://github.com/mcthesw/game-save-manager) - 사용하기 쉬운 게임 저장 관리 도구 [![빌드 배지](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml/badge.svg)](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml)
* [mtkennerly/ludusavi](https://github.com/mtkennerly/ludusavi) - PC 게임 저장 백업 도구 [![빌드 배지](https://img.shields.io/github/actions/workflow/status/mtkennerly/ludusavi/main.yaml?logo=github)](https://github.com/mtkennerly/ludusavi/actions/workflows/main.yaml) [![크레이트](https://img.shields.io/crates/v/ludusavi?logo=rust)](https://crates.io/crates/ludusavi)
* [ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) - 작은 2D 턴제 육각형 전략 게임
* [rhex](https://github.com/dpc/rhex) - 육각형 ASCII 로그라이크
* [rsaarelm/magog](https://github.com/rsaarelm/magog) - 로그라이크 게임.
* [SoftbearStudios/mk48](https://github.com/SoftbearStudios/mk48) - Mk48.io는 온라인 다중 사용자 해전 게임입니다
* [Strophox/tetro-tui](https://github.com/Strophox/tetro-tui) [[tetro-tui](https://crates.io/crates/tetro-tui)] - 테트로미노가 떨어지고 쌓이는 크로스 플랫폼 터미널 게임.
* [swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) - Sokoban 구현체
* [thetawavegame/thetawave-legacy](https://github.com/thetawavegame/thetawave-legacy) - 새 게임 개발자들이 첫 기여를 할 수 있는 입문 지점을 지향하는 우주 슈팅 게임. ![빌드 배지](https://github.com/thetawavegame/thetawave-legacy/actions/workflows/ci.yml/badge.svg?branch=master)
* [Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) - Quake 맵 렌더러.
* [topheman/snake-pipe-rust](https://github.com/topheman/snake-pipe-rust) - stdin/stdout(+tcp와 유닉스 도메인 소켓) 기반의 터미널 스네이크 게임 [![crates.io](https://img.shields.io/crates/v/snakepipe.svg)](https://crates.io/crates/snakepipe)
* [ttyperacer/terminal-typeracer](https://gitlab.com/ttyperacer/terminal-typeracer) - 터미널용으로 작성한 싱글 플레이어 타자 테스트 게임
* [Veloren](https://gitlab.com/veloren/veloren) - 현재 알파 개발 중인 오픈 월드 오픈 소스 다중 사용자 복셀 RPG 게임 [![빌드 배지](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/-/pipelines)
* [zipxing/rust_pixel](https://github.com/zipxing/rust_pixel) [[rust_pixel](https://crates.io/crates/rust_pixel)] - 텍스트 및 그래픽 렌더링 모드를 모두 지원하는 2D 픽셀 아트 게임 엔진 및 신속한 프로토타이핑 도구.
* [Zone of Control](https://github.com/ozkriff/zoc) - 턴제 육각형 전략 게임

### 그래픽

* [dps/rust-raytracer](https://github.com/dps/rust-raytracer) - Peter Shirley의 Ray Tracing in One Weekend를 기반으로 한 매우 간단한 광선 추적기 구현체.
* [flxzt/rnote](https://github.com/flxzt/rnote) - 스케치와 손글씨 메모를 작성합니다.
* [ivanceras/svgbob](https://github.com/ivanceras/svgbob) - ASCII 다이어그램을 SVG 그래픽으로 변환합니다
* [KaminariOS/rustracer](https://github.com/KaminariOS/rustracer) - Vulkan 광선 추적 기반의 PBR glTF 2.0 렌더러.
* [Limeth/euclider](https://github.com/Limeth/euclider) - 실시간 4D CPU 광선 추적기
* [linebender/resvg](https://github.com/linebender/resvg) - SVG 렌더링 라이브러리.
* [monfa-red/lini](https://github.com/monfa-red/lini) [[lini](https://crates.io/crates/lini)] - 다이어그램, 차트, 시퀀스, 회로도, 기술 도면 등 모든 종류의 그림을 위한 작은 언어. 일반 텍스트를 테마 적용 가능한 SVG로 컴파일합니다 [![CI](https://github.com/monfa-red/lini/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/monfa-red/lini/actions/workflows/ci.yml)
* [museslabs/phonto](https://github.com/museslabs/phonto) - Rust로 작성한 Wayland 및 macOS용 GPU 가속 동영상 배경화면 프로그램.
* [rodrigorc/papercraft](https://github.com/rodrigorc/papercraft) - 3D 모델의 전개도를 만들어 가위와 풀로 종이 모형을 제작하는 도구.
* [rustq/vue-skia](https://github.com/rustq/vue-skia) - Skia 기반 2D 그래픽 vue 렌더링 라이브러리. Rust로 소프트웨어 래스터화를 구현하여 렌더링합니다.
* [storytold/artcraft](https://github.com/storytold/artcraft) - 장면, 동영상, 이미지를 점토처럼 빚을 수 있는 AI 기반 IDE 및 만질 수 있는 컴퓨팅 작업 공간.
* [turnage/valora](https://crates.io/crates/valora) - 생성형 미술용 라이브러리
* [Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) - 광선 추적기
* [wahn/rs_pbrt](https://github.com/wahn/rs_pbrt) - PBRT 책(제3판)의 C++ 코드에 대응하는 구현체.

### 이미지 처리

* [Darkly](https://github.com/darkly-art/darkly) - 디지털 아티스트와 화가를 위한 엔트로피 편집기.
* [Graphite](https://github.com/GraphiteEditor/Graphite) - 벡터 기반 그래픽 편집기.
* [Imager](https://github.com/imager-io/imager) - 자동 이미지 최적화.
* [oxipng](https://github.com/oxipng/oxipng) [[oxipng](https://crates.io/crates/oxipng)] - Rust로 작성한 다중 스레드 PNG 최적화 도구. [![빌드 상태](https://github.com/oxipng/oxipng/workflows/oxipng/badge.svg)](https://github.com/oxipng/oxipng/actions?query=branch%3Amaster) [![버전](https://img.shields.io/crates/v/oxipng.svg)](https://crates.io/crates/oxipng)
* [sorairolake/favico](https://github.com/sorairolake/favico) [[favico](https://crates.io/crates/favico)] - 파비콘 생성 유틸리티 [![CI](https://github.com/sorairolake/favico/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/favico/actions/workflows/CI.yaml)
* [Sprite Fusion Pixel Snapper](https://github.com/Hugo-Dz/spritefusion-pixel-snapper) - AI 생성 픽셀 아트를 정리하여 픽셀 단위로 정확한 스프라이트를 만드는 CLI 및 WebAssembly 도구(MIT).
* [visioncortex/vtracer](https://github.com/visioncortex/vtracer) [[vtracer](https://crates.io/crates/vtracer)] - 래스터를 벡터 그래픽으로 변환하는 도구(jpg/png를 svg로 변환).

### 산업 자동화

* [dora-rs/dora](https://github.com/dora-rs/dora) [[dora-cli](https://crates.io/crates/dora-cli)] - Python, Rust, C/C++ API로 로봇 및 다중 AI 애플리케이션을 구축하는 빠르고 간단한 데이터 흐름 지향 프레임워크 [![CI](https://github.com/dora-rs/dora/workflows/CI/badge.svg)](https://github.com/dora-rs/dora/actions)
* [locka99/opcua](https://github.com/locka99/opcua) - [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) 라이브러리.
* [slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) - [tokio](https://tokio.rs) 기반 [modbus](https://www.modbus.org) 라이브러리.

### 메시지 큐

* [lonewolf-io/Narwhal](https://github.com/lonewolf-io/narwhal) - 에지 애플리케이션용 확장 가능한 발행/구독 메시징 서버.
* [Rmqtt](https://github.com/rmqtt/rmqtt) - MQTT 서버/MQTT 브로커 — 5G 시대의 IoT를 위한 확장 가능한 분산 MQTT 메시지 브로커.
* [RobustMQ](https://github.com/robustmq/robustmq) - 차세대 클라우드 네이티브 통합 메시지 큐.
* [Rocketmq-Rust](https://github.com/mxsm/rocketmq-rust) - 🚀Rust🦀로 만든 Apache RocketMQ. 더 빠르고 안전하며 메모리 사용량이 적습니다.

### MLOps

* [api7/aisix](https://github.com/api7/aisix) - LLM과 AI 에이전트용 오픈 소스 AI 게이트웨이. OpenAI, Anthropic, Gemini, Bedrock, Azure OpenAI 및 기타 OpenAI 호환 엔드포인트 앞에 하나의 OpenAI 호환 API와 네이티브 Anthropic Messages API를 제공하며, MCP/A2A 게이트웨이, 의미 기반 라우팅, 가드레일, 의미 기반 캐싱을 갖춥니다. [![CI](https://github.com/api7/aisix/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/api7/aisix/actions/workflows/ci.yml)
* [cocoindex](https://github.com/cocoindex-io/cocoindex) - 증분 처리로 AI 에이전트에 최신 맥락을 제공하는 ETL 프레임워크
* [TensorZero](https://github.com/tensorzero/tensorzero) - 추론, 관측 가능성, 최적화, 실험을 통합하는 LLM용 데이터 및 학습 플라이휠 ![TensorZero 빌드 상태](https://img.shields.io/github/check-runs/tensorzero/tensorzero/main)
* [Uteke](https://github.com/codecoradev/uteke) - AI 에이전트용 오프라인 우선 의미 메모리 엔진. 단일 바이너리, 의존성 없음, MCP 네이티브. [![CI](https://img.shields.io/github/actions/workflow/status/codecoradev/uteke/ci.yml?branch=develop)](https://github.com/codecoradev/uteke/actions/workflows/ci.yml)

### 관측 가능성

* [avito-tech/bioyino](https://github.com/avito-tech/bioyino) - 고성능 확장 가능한 StatsD 호환 서버.
* [esrlabs/chipmunk](https://github.com/esrlabs/chipmunk) - 대규모 로그 파일과 스트림을 분석하는 네이티브 egui 데스크톱 애플리케이션. WebAssembly 플러그인 시스템과 자동차용 형식 지원을 제공합니다. [![Chipmunk CI](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml/badge.svg)](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml)
* [madesroches/micromegas](https://github.com/madesroches/micromegas) [[micromegas](https://crates.io/crates/micromegas)] - 오버헤드가 적은 Rust 계측을 제공하는 로그, 메트릭, 추적용 관측 가능성 백엔드. 원격 측정 데이터를 객체 저장소의 Parquet에 저장하고 SQL로 쿼리합니다. [![Rust](https://github.com/madesroches/micromegas/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/madesroches/micromegas/actions/workflows/rust.yml)
* [MegaAntiCheat/client-backend](https://github.com/MegaAntiCheat/client-backend) - [MAC](https://github.com/MegaAntiCheat) 클라이언트 앱.
* [openobserve](https://github.com/openobserve/openobserve) - 10배 더 쉽고 저장 비용은 140분의 1이며, 고성능 페타바이트 규모를 지원하는 Elasticsearch/Splunk/Datadog 대안.
* [OpenTelemetry](https://crates.io/crates/opentelemetry) - OpenTelemetry는 애플리케이션의 분산 추적과 메트릭을 수집하는 단일 API, 라이브러리, 에이전트, 수집 서비스 모음을 제공합니다. Prometheus, Jaeger 등의 관측 가능성 도구로 분석할 수 있습니다. [![GitHub Actions CI](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml)
* [parseablehq/parseable](https://github.com/parseablehq/parseable) - 로그, 메트릭, 추적, 이벤트를 수집하고 분석하는 AI 네이티브 통합 관측 가능성 플랫폼.
* [Quickwit-oss/quickwit](https://github.com/quickwit-oss/quickwit) - 로그 관리용 클라우드 네이티브 고비용효율 검색 엔진. [![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI)
* [rustrak/rustrak](https://github.com/rustrak/rustrak) - Sentry SDK와 호환되는 초경량 오류 추적 서버.
* [Scaphandre](https://github.com/hubblo-org/scaphandre) - 호스트와 개별 서비스의 전력 소비를 추적하여 더욱 지속 가능한 시스템과 애플리케이션을 설계하도록 돕는 전력 소비 모니터링 에이전트. 모든 모니터링 도구 체인에 맞도록 설계되었습니다(prometheus, warp10, riemann 등을 이미 지원).
* [vectordotdev/vector](https://github.com/vectordotdev/vector) - 고성능 로그, 메트릭 및 이벤트 라우터.

### 운영체제

[Rust로 작성한 운영체제 비교](https://github.com/flosse/rust-os-comparison)도 참고하세요.

* [0x59616e/SteinsOS](https://github.com/0x59616e/SteinsOS) - armv8-a 아키텍처용 운영체제.
* [Andy-Python-Programmer/aero](https://github.com/Andy-Python-Programmer/aero) - 모놀리식 커널 설계를 따르는 현대적인 유닉스 계열 운영체제.
* [asterinas/asterinas](https://github.com/asterinas/asterinas) - Linux 호환 ABI를 제공하는 안전하고 빠른 범용 운영체제 커널.
* [DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS) - 처음부터 자체 개발한 커널과 Linux 호환성을 갖춘 운영체제.
* [hexagonal-sun/moss-kernel](https://github.com/hexagonal-sun/moss-kernel) - Rust와 Aarch64 어셈블리로 작성한 유닉스 계열 Linux 호환 커널.
* [koibtw/highlightos](https://github.com/koibtw/highlightos) - Rust와 Assembly로 작성한 x86_64 운영체제 커널.
* [NON-OS/nonos-micro-kernel](https://github.com/NON-OS/nonos-micro-kernel) - RAM에 상주하는 권한 기반 마이크로커널. 모든 프로그램은 실행 전에 스스로를 입증해야 하는 서명된 캡슐이며 드라이버는 사용자 공간에서 실행됩니다.
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) - 보안, 안정성, 성능, 정확성, 단순성, 실용성에 중점을 둔 유닉스 계열 범용 마이크로커널 운영체제. Linux와 BSD의 완전한 대안을 지향합니다.
* [thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) - rust로 작성한 운영체제 커널. POSIX 비호환
* [theseus-os/Theseus](https://github.com/theseus-os/Theseus) - 안전한 언어로 처음부터 작성한 단일 주소 공간 및 단일 권한 수준 운영체제 - [![빌드 배지](https://img.shields.io/github/workflow/status/theseus-os/Theseus/Documentation?label=docs%20build)](https://www.theseus-os.com/Theseus/book/index.html)
* [tock/tock](https://github.com/tock/tock) - Cortex-M 기반 마이크로컨트롤러용 안전한 임베디드 운영체제
* [vinc/moros](https://github.com/vinc/moros) - x86-64 아키텍처와 BIOS를 갖춘 컴퓨터를 대상으로 하는 텍스트 기반 취미용 운영체제.

### 패키지 관리자

* [helsing-ai/buffrs](https://github.com/helsing-ai/buffrs) [[buffrs](https://crates.io/crates/buffrs)] - 프로토콜 버퍼와 gRPC 아키텍처용 현대적인 패키지 관리자.
* [pkgx](https://github.com/pkgxdev/pkgx) - 무엇이든 실행하세요. 스크립트에서 전체 오픈 소스 생태계를 활용할 수 있는 조합 가능한 패키지 관리자.
* [rebos](https://crates.io/crates/rebos) - 모든 linux 배포판에서 패키지 관리를 자동화하는 선언적 방식 [![크레이트](https://img.shields.io/crates/v/rebos?logo=rust)](https://crates.io/crates/rebos)

### 결제

* [hyperswitch](https://github.com/juspay/hyperswitch) - 단일 API 연동으로 여러 결제 처리업체에 연결하고 결제 트래픽을 손쉽게 라우팅하는 오픈 소스 결제 오케스트레이터 ![GitHub 마지막 커밋](https://img.shields.io/github/last-commit/juspay/hyperswitch?style=flat-square)

### 생산성

* [0xdea/jiggy](https://github.com/0xdea/jiggy) [[jiggy](https://crates.io/crates/jiggy)] - Rust로 작성한 최소한의 크로스 플랫폼 마우스 이동 도구 [![빌드](https://github.com/0xdea/jiggy/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/jiggy/actions/workflows/build.yml)
* [aannoo/hcom](https://github.com/aannoo/hcom) - AI 에이전트가 터미널 간에 서로 메시지를 보내고 지켜보며 생성할 수 있게 합니다(Claude Code, Gemini CLI, Codex, OpenCode). 화면 추적, TUI(ratatui), 데몬 클라이언트 바이너리를 갖춘 Rust PTY 래퍼. Python 훅과 API 제공 [![CI](https://github.com/aannoo/hcom/actions/workflows/ci.yml/badge.svg)](https://github.com/aannoo/hcom/actions/workflows/ci.yml)
* [agent-of-empires](https://github.com/njbrake/agent-of-empires) - tmux, git worktree, Docker 샌드박스로 여러 AI 코딩 에이전트 세션을 관리하는 TUI/CLI [![CI](https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg)](https://github.com/njbrake/agent-of-empires/actions)
* [aichat](https://github.com/sigoden/aichat) - Shell Assistant, Chat-REPL, RAG, AI 도구 및 에이전트를 갖춘 올인원 LLM CLI 도구. OpenAI, Claude, Gemini, Ollama, Groq 등을 이용할 수 있습니다.
* [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) - AI 코딩 에이전트용 장기 메모리: 자동 수명주기 기록, 에이전트 간 인계, 자체 호스팅 MCP 서버를 갖춘 git 기반 마크다운 위키. [![CI](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml)
* [akitaonrails/ai-usagebar](https://github.com/akitaonrails/ai-usagebar) [[ai-usagebar](https://crates.io/crates/ai-usagebar)] - Claude, Codex/ChatGPT, GitHub Copilot, Z.AI(GLM), OpenRouter 등의 AI 요금제 사용량을 모니터링하는 Waybar 위젯, 네이티브 Omarchy Quattro 패널, 탭형 TUI. [![CI](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml)
* [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) [[llmfit](https://crates.io/crates/llmfit)] - 시스템 RAM, CPU, GPU에 적합한 LLM 모델을 찾는 터미널 도구. 하드웨어 감지, 다차원 점수(품질/속도/적합성/컨텍스트), 커뮤니티 순위표, Ollama, llama.cpp, MLX, vLLM 등의 지원을 갖춘 대화형 TUI. [![CI](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml)
* [AlexsJones/llmserve](https://github.com/AlexsJones/llmserve) [[llmserve](https://crates.io/crates/llmserve)] - 백엔드(llama-server, KoboldCpp, LocalAI, MLX, Ollama, vLLM, LM Studio)를 자동 감지하여 로컬 LLM 모델을 제공하는 대화형 TUI. 소스 트리 탐색, 백엔드별 프리셋, 실시간 로그, 비전 모델 지원을 제공합니다. [![CI](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml)
* [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) - Claude Code, Codex, OpenCode, Cursor로 병렬 연구 에이전트를 실행하는 로컬 우선 작업 공간. 재현 가능한 실험 추적을 제공합니다. [![CI](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml/badge.svg)](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml)
* [antiburn/antiburn](https://github.com/antiburn/antiburn) - AI 코딩 에이전트 세션에서 토큰 낭비의 흔한 원인을 확인하는 로컬 데스크톱 앱(Tauri): 너무 깊은 세션, 과도하게 강력한 하위 에이전트, 고장 난 캐싱, 사용하지 않는 MCP 서버/스킬/도구. Claude Code, Codex, Cursor, Copilot, Pi 등을 지원합니다 [![CI](https://github.com/antiburn/antiburn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/antiburn/antiburn/actions/workflows/ci.yml)
* [ast-grep](https://github.com/ast-grep/ast-grep) - 코드 구조 검색, 린트, 재작성을 위한 CLI 도구.
* [Bartib](https://github.com/nikolassv/bartib) [[Bartib](https://crates.io/crates/bartib)] - 간단한 명령줄 시간 추적 도구 [![테스트](https://github.com/nikolassv/bartib/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/nikolassv/bartib/actions/workflows/test.yml)
* [Beetroot](https://github.com/mnardit/beetroot-releases) - AI 변환, OCR, 퍼지 검색을 제공하는 Windows 클립보드 관리자.
* [bitrouter/bitrouter](https://github.com/bitrouter/bitrouter) [[bitrouter](https://crates.io/crates/bitrouter)] - 하네스 변경 없이 실행할 때마다 에이전트를 최적화하고 모든 모델 호출의 신뢰성, 추적성, 보안, 비용 효율성을 확보하는 에이전트 네이티브 LLM 라우터. 단일 로컬 엔드포인트로 OpenAI, Anthropic, Google, OpenRouter, Bedrock, GitHub Copilot 등을 라우팅하며 MCP 게이트웨이, ACP 연동, 가드레일, 관측 가능성, 다중 계정 장애 조치를 제공합니다.
* [CookCLI](https://github.com/cooklang/CookCLI) - 웹 서버, 장보기 목록, 식단 계획 기능을 갖춘 명령줄 레시피 관리자.
* [espanso](https://github.com/espanso/espanso) - 크로스 플랫폼 텍스트 확장 도구. [![CI](https://github.com/espanso/espanso/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/espanso/espanso/actions/workflows/ci.yml)
* [eureka](https://crates.io/crates/eureka) - 터미널을 떠나지 않고 아이디어를 입력하고 저장하는 CLI 도구
* [farion1231/cc-switch](https://github.com/farion1231/cc-switch) - Claude Code, Codex, Gemini CLI용 올인원 GUI 도우미 및 프로필 관리자.
* [fkiene/llmtrim](https://github.com/fkiene/llmtrim) [[llmtrim](https://crates.io/crates/llmtrim)] - 답변을 바꾸지 않고 LLM API 요청을 압축하여 입력 및 출력 토큰을 줄이는 로컬 프록시. HTTPS_PROXY를 통해 AI 도구와 공급자 사이에 위치하며 Claude Code, Codex 등을 지원합니다. [![CI](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml/badge.svg)](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml)
* [flusterIO/fluster](https://github.com/flusterIO/fluster) - STEM 학생과 전문가를 위한 올인원 메모 애플리케이션. [![게시](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml/badge.svg)](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml)
* [fulsomenko/kanban](https://github.com/fulsomenko/kanban) [[kanban-tui](https://crates.io/crates/kanban-tui)] - lazygit에서 영감을 받은 터미널 기반 프로젝트 관리 도구 [![CI](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml/badge.svg)](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml)
* [Furtherance](https://github.com/unobserved-io/Furtherance) - GTK4로 만든 시간 추적 앱
* [futuregene/future-os](https://github.com/futuregene/future-os) - 어디서나 하나의 AI 에이전트: 단일 Rust gRPC 백엔드가 동일한 세션, 메모리, 스킬로 터미널 UI, 데스크톱 앱, 모바일 앱, CLI, 메신저 봇을 구동합니다. 신뢰 우선 승인 기반 도구, 3,800개 이상의 모델, 24시간 이상 실행을 위한 루프 제어 평면을 제공합니다. [![빌드](https://github.com/futuregene/future-os/actions/workflows/ci.yml/badge.svg)](https://github.com/futuregene/future-os/actions/workflows/ci.yml)
* [graves/awful_aj](https://github.com/graves/awful_aj) [[awful_aj](https://crates.io/crates/awful_aj)] - OpenAI 호환 API 작업용 CLI. 프롬프트 엔지니어링을 위한 YAML 템플릿과 영속 메모리용 내장 벡터 데이터베이스를 제공합니다.
* [graykode/abtop](https://github.com/graykode/abtop) [[abtop](https://crates.io/crates/abtop)] - AI 코딩 에이전트 세션(Claude Code, Codex CLI, OpenCode)을 모니터링하는 터미널 TUI. 토큰 사용량, 컨텍스트 창 비율, 요청 제한, 자식 프로세스, 고아 포트를 추적합니다. tmux 연동, 색각 이상 친화적 옵션을 포함한 12개 테마, 크로스 플랫폼 지원을 제공합니다. [![CI](https://github.com/graykode/abtop/actions/workflows/ci.yml/badge.svg)](https://github.com/graykode/abtop/actions/workflows/ci.yml)
* [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) [[deepseek-tui-cli](https://crates.io/crates/deepseek-tui-cli)] - DeepSeek V4용 터미널 코딩 에이전트. 추론 블록 스트리밍, 로컬 작업 공간 편집, 자동 모델 선택, MCP 지원, ratatui 기반 TUI를 제공합니다. [![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
* [iBz-04/gloamy](https://github.com/iBz-04/gloamy) [[gloamy](https://crates.io/crates/gloamy)] - CLI, 채널, 게이트웨이, 하드웨어 워크플로를 위한 Rust 우선 자율 에이전트 런타임.
* [illacloud/illa](https://github.com/illacloud/illa) - 로우코드 내부 도구 빌더.
* [iwe-org/iwe](https://github.com/iwe-org/iwe) [[iwe](https://crates.io/crates/iwe)] - LSP 서버와 CLI를 갖춘 마크다운 기반 지식 관리 도구 [![빌드 상태](https://github.com/iwe-org/iwe/actions/workflows/rust.yml/badge.svg)](https://github.com/iwe-org/iwe/actions/workflows/rust.yml)
* [jchultarsky/mirador](https://github.com/jchultarsky/mirador) [[mirador](https://crates.io/crates/mirador)] - 터미널용 차분한 개인 대시보드. 설정 가능한 격자에 시계, 달력과 일정, 날씨, 작업, 메모, 시장 정보, 실시간 시스템 메트릭을 표시합니다 [![CI](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml)
* [kruseio/hygg](https://github.com/kruseio/hygg) [[hygg](https://crates.io/crates/hygg)] - 📚 읽기를 더 간단하게. 최소한의 Vim 스타일 TUI 문서 리더.
* [LLDAP](https://github.com/lldap/lldap) - 인증용 간소화된 LDAP 인터페이스.
* [lockbook/lockbook](https://github.com/lockbook/lockbook) [[lb-rs](https://crates.io/crates/lb-rs)] - 종단 간 암호화된 협업 메모, 문서, 그림. 공유 Rust 코어 기반의 네이티브 크로스 플랫폼 클라이언트와 자체 호스팅 가능한 서버를 제공합니다. [![통합](https://github.com/lockbook/lockbook/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/lockbook/lockbook/actions/workflows/integration.yml)
* [mag123c/toktrack](https://github.com/mag123c/toktrack) - AI 코딩 CLI(Claude Code, Codex, Gemini CLI 등)의 토큰 사용량과 비용을 추적하는 빠른 TUI/CLI. CLI 데이터가 삭제되어도 유지되는 영속 캐시를 제공합니다. [![CI](https://github.com/mag123c/toktrack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mag123c/toktrack/actions/workflows/ci.yml)
* [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [[worktrunk](https://crates.io/crates/worktrunk)] - AI 에이전트 병렬 실행을 위한 git worktree 관리 CLI. 훅, LLM 커밋 메시지, 병합 워크플로를 제공합니다 [![CI](https://img.shields.io/github/actions/workflow/status/max-sixty/worktrunk/ci.yaml?branch=main&logo=github)](https://github.com/max-sixty/worktrunk/actions?query=branch%3Amain+workflow%3Aci)
* [morganlinton/Albatross](https://github.com/morganlinton/Albatross) [[albatross-cli](https://crates.io/crates/albatross-cli)] - 로컬(Ollama, LM Studio, MLX, llama.cpp) 및 클라우드 백엔드 간 투명한 다중 모델 라우팅을 제공하는 터미널 우선 AI 코딩 에이전트. 턴별 비용 표시, 실제 실행 취소, 감사 가능한 라우팅 기록을 제공합니다. [![CI](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml/badge.svg)](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml)
* [muvon/octomind](https://github.com/muvon/octomind) - 48개 이상의 전문 에이전트, 동적 서버 등록을 갖춘 MCP 호스트, 다중 공급자 지원(13개 이상의 LLM), 4시간 이상 세션용 적응형 컨텍스트 압축을 제공하는 오픈 소스 AI 에이전트 런타임 CLI.
* [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) - AI 코딩 에이전트용 터미널 멀티플렉서. 실제 터미널 화면, 에이전트 상태 감지(대기/작업 중/완료), 작업 공간, 탭, 영속 세션으로 한 터미널에서 여러 에이전트를 실행합니다. 분리/재연결을 지원하는 단일 Rust 바이너리.
* [pier-cli/pier](https://github.com/pier-cli/pier) - 한 줄 명령, 스크립트, 도구, CLI를 모두 관리(추가, 메타데이터 검색 등)하는 중앙 저장소
* [raine/workmux](https://github.com/raine/workmux) [[workmux](https://crates.io/crates/workmux)] - 매끄러운 병렬 개발을 위한 git worktree + tmux 창 [![CI](https://github.com/raine/workmux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/raine/workmux/actions/workflows/ci.yml)
* [rtk-ai/rtk](https://github.com/rtk-ai/rtk) - AI 코딩 도우미의 LLM 토큰 소비를 60~90% 줄이는 고성능 CLI 프록시. Claude Code, Copilot, Cursor, Gemini CLI, Codex 등의 명령 출력을 필터링하고 압축합니다. [![CI](https://github.com/rtk-ai/rtk/workflows/Security%20Check/badge.svg)](https://github.com/rtk-ai/rtk/actions)
* [screenpipe](https://github.com/screenpipe/screenpipe) - 연중무휴 로컬 AI 화면 및 마이크 녹화. 전체 맥락을 갖춘 AI 앱을 만드세요. Ollama와 함께 동작합니다.
* [ShadoySV/work-break](https://github.com/ShadoySV/work-break) [[work-break](https://crates.io/crates/work-break)] - 현재 및 오늘의 피로도를 고려하는 작업과 휴식 시간 조절 도구 [![빌드](https://github.com/ShadoySV/work-break/actions/workflows/release.yml/badge.svg)](https://github.com/ShadoySV/work-break/actions/workflows/release.yml)
* [socai-io/socai](https://github.com/socai-io/socai) - 로그인한 Chrome을 재사용하여 Instagram, TikTok, LinkedIn, X, Xiaohongshu, Douyin의 게시물, 댓글, 프로필, 지원 미디어를 검색하고 읽는 소셜 연구 에이전트.
* [tambourine-voice](https://github.com/kstonekuan/tambourine-voice) - 모든 앱을 위한 개인 AI 음성 인터페이스. 원하는 모델과 프롬프트를 선택할 수 있는 맞춤형 받아쓰기로, Rust로 구현했습니다.
* [tassiovirginio/try-rs](https://github.com/tassiovirginio/try-rs) [[try-rs](https://crates.io/crates/try-rs)] - 임시 실험을 정리하고 탐색하는 TUI를 갖춘 작업 공간 관리 CLI.
* [thClaws/thClaws](https://github.com/thClaws/thClaws) - 다중 공급자 LLM 지원, 스킬 시스템, MCP 서버, 지식 기반, 에이전트 오케스트레이션을 갖춘 네이티브 Rust AI 에이전트 작업 공간. 데스크톱 GUI, CLI REPL, 비대화형 모드를 제공합니다. [![라이선스](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-blue.svg)](https://github.com/thClaws/thClaws)
* [tinyhumansai/opencompany](https://github.com/tinyhumansai/opencompany) - AI 에이전트를 실제로 일하는 회사로 구성하는 오픈 소스 런타임. 공유 작업 보드, 에이전트 간 인계, 사람의 승인, 예약 및 DAG 워크플로를 제공합니다. 사용자가 제공하는 모든 모델로 실행되며 Docker로 자체 호스팅합니다. [![라이선스](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/tinyhumansai/opencompany)
* [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) - 데스크톱 UI, 118개 이상의 OAuth 연동, 로컬 우선 메모리 트리, Obsidian 호환 위키, 네이티브 음성, TokenJuice 압축을 갖춘 오픈 소스 에이전트형 도우미. 프라이버시 중심 개인 AI를 위해 Tauri와 Rust로 만들었습니다.
* [tover0314-w/opentypeless](https://github.com/tover0314-w/opentypeless) - Tauri와 Rust로 만든 크로스 플랫폼 AI 음성 입력 앱.
* [Tuxedo](https://github.com/webstonehq/tuxedo) - todo.txt용 빠른 키보드 기반 터미널 UI.
* [tw93/Pake](https://github.com/tw93/Pake) - Rust와 Tauri로 한 번의 명령으로 모든 웹페이지를 데스크톱 앱으로 바꿉니다. 가볍고 빠르며 macOS, Windows, Linux를 지원합니다.
* [VisiGrid/VisiGrid](https://github.com/VisiGrid/VisiGrid) - GPUI, WASM, 헤드리스 CLI 엔진으로 코드 편집기처럼 만든 네이티브 스프레드시트.
* [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) - 15개 이상의 코딩 도구(Cursor, Claude Code, Codex, Copilot 등)에서 AI 에이전트 스킬을 관리, 동기화, 정리하는 가벼운 데스크톱 앱. Tauri 2, Rust 백엔드, Git 백업을 지원합니다.
* [Xoshbin/asyar](https://github.com/Xoshbin/asyar) - Raycast의 강력함. Alfred의 속도. 설계부터 보호하는 프라이버시. [![CodeQL](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql)
* [yashs662/rust_kanban](https://github.com/yashs662/rust_kanban) [[rust-kanban](https://crates.io/crates/rust-kanban)] [![빌드](https://github.com/yashs662/rust_kanban/actions/workflows/build.yml/badge.svg)](https://github.com/yashs662/rust_kanban/releases) - 터미널용 칸반 앱
* [yicheng47/runner](https://github.com/yicheng47/runner) - Claude Code, Codex, Copilot CLI, pi 등의 CLI 코딩 에이전트가 하나의 작업을 팀으로 수행하는 macOS 및 Windows용 네이티브 GPUI 데스크톱 앱. 각 에이전트는 실제 터미널에서 자체 TUI를 유지합니다. [![CI](https://github.com/yicheng47/runner/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yicheng47/runner/actions/workflows/ci.yaml)
* [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) - 회의를 완전히 로컬 기기에서 녹음, 전사, 요약하는 프라이버시 우선 AI 회의 도우미. Whisper/Parakeet 모델의 실시간 전사, AI 요약, 여러 AI 공급자(Ollama, Claude, Groq, OpenAI) 지원을 제공합니다

### 라우팅 프로토콜

* [Holo](https://github.com/holo-routing/holo) - 대규모 자동화 중심 네트워크를 지원하도록 설계한 라우팅 프로토콜 모음인 Holo
* [RustyBGP](https://github.com/osrg/rustybgp) - BGP

### 보안 도구

* [0xdea/augur](https://github.com/0xdea/augur) [[augur](https://crates.io/crates/augur)] - 바이너리 파일에서 문자열과 관련 의사 코드를 추출하는 역공학 도우미 [![빌드](https://github.com/0xdea/augur/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/augur/actions/workflows/build.yml)
* [0xdea/haruspex](https://github.com/0xdea/haruspex) [[haruspex](https://crates.io/crates/haruspex)] - IDA Hex-Rays 디컴파일러에서 의사 코드를 추출하는 취약점 연구 도우미 [![빌드](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
* [0xdea/oneiromancer](https://github.com/0xdea/oneiromancer) [[oneiromancer](https://crates.io/crates/oneiromancer)] - 로컬에서 실행하는 LLM으로 소스 코드 분석을 돕는 역공학 도우미 [![빌드](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml)
* [0xdea/rhabdomancer](https://github.com/0xdea/rhabdomancer) [[rhabdomancer](https://crates.io/crates/rhabdomancer)] - 바이너리 파일에서 잠재적으로 안전하지 않은 API 함수의 모든 호출을 찾는 취약점 연구 도우미 [![빌드](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml)
* [AdGuardian-Term](https://github.com/Lissy93/AdGuardian-Term) [[adguardian](https://crates.io/crates/adguardian)] - AdGuard Home 인스턴스를 위한 터미널 기반 실시간 트래픽 모니터링 및 통계
* [AFLplusplus/LibAFL](https://github.com/AFLplusplus/LibAFL) - 고급 퍼징 라이브러리. Rust로 퍼저를 조립하세요! 여러 코어와 기기로 확장됩니다. Windows, Android, MacOS, Linux, no_std 등을 지원합니다. [![빌드 및 테스트](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml)
* [arp-scan-rs](https://github.com/kongbytes/arp-scan-rs) - 빠른 로컬 네트워크 스캔을 위한 최소한의 ARP 스캔 도구
* [biandratti/huginn-net](https://github.com/biandratti/huginn-net) - p0f TCP와 JA4 TLS 분석을 결합하여 운영체제와 애플리케이션을 감지하는 다중 프로토콜 수동 네트워크 핑거프린팅 [![CI](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml/badge.svg)](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml)
* [bountyyfi/lonkero](https://github.com/bountyyfi/lonkero) - 침투 테스트와 보안 평가용 60개 이상의 공격 모듈을 갖춘 기업급 웹 취약점 스캐너
* [cargo-audit](https://crates.io/crates/cargo-audit) - Cargo.lock의 크레이트에 보안 취약점이 있는지 검사합니다
* [cargo-auditable](https://crates.io/crates/cargo-auditable) - 프로덕션 Rust 바이너리를 감사 가능하게 만듭니다
* [cargo-crev](https://crates.io/crates/cargo-crev) - cargo 패키지 관리자용 암호학적으로 검증 가능한 코드 검토 시스템.
* [cargo-deny](https://crates.io/crates/cargo-deny) - 대규모 의존성 그래프 관리를 돕는 Cargo 플러그인
* [Cherrybomb](https://github.com/blst-security/cherrybomb) - API 명세를 검증하여 정의되지 않은 사용자 동작을 방지하도록 돕는 CLI 도구로 미완성 API 명세를 없앱니다.
* [cotp](https://github.com/replydev/cotp) - 가져오기 기능을 갖춘 신뢰할 수 있는 암호화 명령줄 TOTP/HOTP 인증 앱.
* [domcyrus/rustnet](https://github.com/domcyrus/rustnet) - eBPF/PKTAP 기반 프로세스 식별과 심층 패킷 검사를 갖춘 크로스 플랫폼 네트워크 모니터링 TUI [![빌드 배지](https://img.shields.io/github/actions/workflow/status/domcyrus/rustnet/rust.yml?logo=github)](https://github.com/domcyrus/rustnet/actions/workflows/rust.yml) [![크레이트](https://img.shields.io/crates/v/rustnet-monitor?logo=rust)](https://crates.io/crates/rustnet-monitor)
* [EFForg/rayhunter](https://github.com/EFForg/rayhunter) - 모바일 핫스팟 하드웨어에서 실행되도록 설계한 IMSI 캐처 감지 도구. 잠재적인 이동통신 감시(Stingray/기지국 시뮬레이터)를 식별하도록 돕습니다 [![테스트](https://github.com/EFForg/rayhunter/actions/workflows/main.yml/badge.svg)](https://github.com/EFForg/rayhunter/actions/workflows/main.yml)
* [entropic-security/xgadget](https://github.com/entropic-security/xgadget) [[xgadget](https://crates.io/crates/xgadget)] - 빠른 병렬 다중 변종 ROP/JOP 가젯 검색 [![GitHub Actions](https://github.com/entropic-security/xgadget/workflows/test/badge.svg)](https://github.com/entropic-security/xgadget/actions)
* [epi052/feroxbuster](https://github.com/epi052/feroxbuster) - 간단하고 빠른 재귀 콘텐츠 탐색 도구.
* [getprovenant/provenant](https://github.com/getprovenant/provenant) [[provenant-cli](https://crates.io/crates/provenant-cli)] - 완전한 폐쇄형 의존성 목록으로 CycloneDX와 SPDX를 출력하는 빠른 라이선스, 저작권, 패키지, SBOM 스캐너. 정적이며 오프라인으로 동작합니다. [![CI](https://github.com/getprovenant/provenant/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/getprovenant/provenant/actions/workflows/check.yml)
* [Inspektor](https://github.com/inspektor-dev/inspektor) - 접근 정책을 적용하는 데이터베이스 프로토콜 인식 프록시 👮
* [kpcyrd/authoscope](https://github.com/kpcyrd/authoscope) - 스크립트 작성이 가능한 네트워크 인증 크래커
* [kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) - TCP 연결 하이재커. shijack 재작성
* [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) - 반자동 OSINT 프레임워크 및 패키지 관리자
* [kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) - 안전한 다중 스레드 패킷 스니퍼
* [LeChatP/RootAsRole](https://github.com/LeChatP/RootAsRole) - sudo(-rs)/su의 더 나은 대안 • ⚡ 매우 빠름 • 🛡️ 메모리 안전성 • 🔐 보안 중심 ![빌드](https://img.shields.io/github/actions/workflow/status/LeChatP/RootAsRole/build.yml?logo=githubactions&label=Build&logoColor=white) ![커버리지](https://img.shields.io/codecov/c/github/lechatp/rootasrole?color=green&link=https%3A%2F%2Fapp.codecov.io%2Fgh%2FLeChatP%2FRootAsRole&label=Test%20Coverage) ![crates.io](https://img.shields.io/crates/v/rootasrole.svg?label=Version&color=e37602&logo=rust)
* [microsoft/mxc](https://github.com/microsoft/mxc) - Windows, Linux, macOS에서 신뢰할 수 없는 코드(모델 출력, 플러그인, 도구)를 실행하는 샌드박스 코드 실행 시스템. JSON 기반 정책 주도 샌드박싱, TypeScript SDK, 여러 격리 백엔드(ProcessContainer, Windows Sandbox, LXC, Bubblewrap, Seatbelt, MicroVM, Hyperlight, IsolationSession, WSLC)를 제공합니다. [![CI](https://github.com/microsoft/mxc/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/mxc/actions)
* [mongodb/kingfisher](https://github.com/mongodb/kingfisher) - 파일, Git 저장소, S3, Jira, Confluence에서 비밀 정보를 감지하고 실시간 검증하는 매우 빠른 도구
* [mullvad/mullvadvpn-app](https://github.com/mullvad/mullvadvpn-app) - WireGuard 지원, 양자 내성 터널, 프라이버시 중심 기능을 갖춘 Mullvad VPN 서비스용 크로스 플랫폼 VPN 클라이언트 애플리케이션. [![CI](https://github.com/mullvad/mullvadvpn-app/actions/workflows/verify.yml/badge.svg)](https://github.com/mullvad/mullvadvpn-app/actions)
* [observer_ward](https://github.com/emo-crab/observer_ward) - 웹 애플리케이션 및 서비스 지문 식별 도구
* [Raspirus](https://github.com/Raspirus/Raspirus) - 사용자와 리소스에 친화적인 규칙 기반 악성코드 스캐너 [![상태](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml/badge.svg)](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml)
* [reaction](https://framagit.org/ppom/reaction) - 로그를 스캔하고 조치하는 fail2ban 대안
* [ripasso](https://github.com/cortex/ripasso/) - pass와 파일시스템이 호환되는 비밀번호 관리자
* [rustscan](https://github.com/bee-san/RustScan) - 이 포트 스캔 도구로 Nmap을 더 빠르게 만듭니다 [![빌드 배지](https://github.com/bee-san/RustScan/actions/workflows/test.yml/badge.svg)](https://github.com/bee-san/RustScan/actions)
* [santhreal/keyhog](https://github.com/santhreal/keyhog) [[keyhog](https://crates.io/crates/keyhog)] - 소스 트리, git 이력, 압축 파일, 원격 소스에서 유출된 자격 증명과 API 키를 감지하고 발견한 비밀 정보를 실시간 검증합니다 [![CI](https://github.com/santhreal/keyhog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/santhreal/keyhog/actions/workflows/ci.yml)
* [secluso](https://github.com/secluso/core) - 종단 간 암호화를 사용하는 개인용 Raspberry Pi 가정 보안 카메라
* [sherlock](https://github.com/jonaylor89/sherlock-rs) [[sherlock](https://crates.io/crates/sherlock)] - 여러 소셜 네트워크에서 사용자 이름으로 소셜 미디어 계정을 찾아냅니다 [![상태](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml)
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) - ssh 키로 암호화 및 복호화하여 비밀 정보를 관리하는 간단한 도구.
* [timescale/rsigma](https://github.com/timescale/rsigma) [[rsigma](https://crates.io/crates/rsigma)] - Sigma 탐지 표준용 완전한 탐지 엔지니어링 도구 모음. 파서, 평가 엔진, 규칙 변환, 스트리밍 런타임, 린터, CLI, MCP, LSP를 제공합니다 [![CI](https://github.com/timescale/rsigma/actions/workflows/ci.yml/badge.svg)](https://github.com/timescale/rsigma/actions/workflows/ci.yml)

### 소셜 네트워크

* Discord
  * [concord](https://github.com/chojs23/concord) - 기능이 풍부한 Discord용 TUI 클라이언트.
  * [Dorion](https://github.com/SpikeHD/Dorion) - 더 작은 설치 용량, 빠른 시작, 테마, 플러그인 등을 제공하는 작은 대체 Discord 클라이언트! ![빌드](https://img.shields.io/github/actions/workflow/status/SpikeHD/Dorion/build.yml)
* Mastodon
  * [Rustodon](https://github.com/rustodon/rustodon) - ActivityPub을 사용하는 Mastodon 호환 서버.
* Telegram
  * [tgt](https://github.com/FedericoBruzzone/tgt) - Telegram용 크로스 플랫폼 TUI [![ci-linux](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml) [![ci-macos](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml) [![ci-windows](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml)
* WhatsApp
  * [imtaqin/waxum](https://github.com/imtaqin/waxum) - 단일 정적 바이너리로 REST API, 웹훅, 다중 세션 지원, 음성 통화를 제공하는 자체 호스팅 WhatsApp 게이트웨이. [![CI](https://github.com/imtaqin/waxum/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/imtaqin/waxum/actions/workflows/ci.yml)

### 시스템 도구

* [adileo/squirreldisk](https://github.com/adileo/squirreldisk) - macOS, Windows, Linux용 디스크 사용량 분석 GUI(egui). 선버스트 및 트리맵 보기를 제공하고 rclone으로 SSH 서버와 클라우드 저장소도 스캔합니다 [![CI](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) - 사용자의 습관을 학습하는 빠른 `cd` 대안 [![릴리스](https://github.com/ajeetdsouza/zoxide/actions/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [anylinuxfs](https://github.com/nohajc/anylinuxfs) - 마이크로 VM의 NFS를 사용하여 linux가 지원하는 모든 파일시스템을 Mac에 마운트하는 CLI 도구
* [anylinuxfs-gui](https://github.com/fenio/anylinuxfs-gui) - anylinuxfs용 GUI 애플리케이션
* [ataraxy-labs/sem](https://github.com/ataraxy-labs/sem) - 개체 수준 의미 기반 버전 관리 CLI. tree-sitter를 통해 32개 언어의 함수/클래스 수준 차이, blame, 그래프, 영향 분석을 제공합니다. [![릴리스](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml)
* [ataraxy-labs/weave](https://github.com/ataraxy-labs/weave) - Git용 개체 수준 병합 드라이버. tree-sitter로 코드 구조를 이해하여 병합 충돌을 해결합니다. .gitattributes를 통해 맞춤형 병합 드라이버로 git에 연결됩니다. [![릴리스](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml)
* [atuin](https://github.com/atuinsh/atuin) [[atuin](https://crates.io/crates/atuin)] - Atuin은 기존 셸 이력을 SQLite 데이터베이스로 대체하고 명령의 추가 맥락을 기록합니다. 또한 Atuin 서버를 통해 기기 간 이력을 완전히 암호화하여 동기화하는 선택 기능을 제공합니다.
* [bandwhich](https://github.com/imsnif/bandwhich) - 터미널 대역폭 사용량 도구
* [bolivian-peru/os-moda](https://github.com/bolivian-peru/os-moda) - AI 에이전트가 91개의 타입 지정 MCP 도구로 루트 권한을 갖는 NixOS 배포판. 9개의 Rust 데몬(시스템 브리지, 자동 롤백을 갖춘 원자적 SafeSwitch 배포, 해시 체인 감사 원장, AES-256-GCM 암호 지갑, Noise_XX + ML-KEM-768 P2P 메시, 로컬 STT/TTS, MCP 서버 수명주기, 시스템 학습, 도메인 허용 목록 기반 송신 프록시)이 유닉스 소켓으로 통신합니다.
* [bottom](https://github.com/ClementTsang/bottom) - 또 하나의 크로스 플랫폼 그래픽 프로세스/시스템 모니터. [![GitHub 워크플로 상태(브랜치)](https://img.shields.io/github/workflow/status/ClementTsang/bottom/ci/master)](https://github.com/ClementTsang/bottom/actions?query=branch%3Amaster)
* [brocode/fblog](https://github.com/brocode/fblog) - 작은 명령줄 JSON 로그 뷰어
* [brush-shell](https://github.com/reubeno/brush) - bash/POSIX 호환 셸 [![CICD](https://github.com/reubeno/brush/actions/workflows/ci.yaml/badge.svg)](https://github.com/reubeno/brush/actions/workflows/ci.yaml)[![크레이트](https://img.shields.io/crates/v/brush-shell.svg?logo=rust)](https://crates.io/crates/brush-shell)
* [bustd](https://github.com/vrmiguel/bustd) - Linux에서 메모리 부족 상황을 처리하는 가벼운 프로세스 종료 데몬. [![GitHub 워크플로 상태(브랜치)](https://img.shields.io/github/workflow/status/vrmiguel/bustd/build-and-test)](https://github.com/vrmiguel/bustd/actions?query=branch%3Amaster)
* [buster/rrun](https://github.com/buster/rrun) - gmrun과 비슷한 Linux용 명령 런처
* [cantino/mcfly](https://github.com/cantino/mcfly) - 셸 이력을 빠르게 누비세요. 세상에!
* [ChurchTao/clipboard-rs](https://github.com/ChurchTao/clipboard-rs) [[clipboard-rs](https://crates.io/crates/clipboard-rs)] - 시스템 클립보드 콘텐츠를 가져오고 설정하며 변경을 감시하는 Rust 기반 크로스 플랫폼 라이브러리.
* [Cocoa-Way](https://github.com/J-x-Z/cocoa-way) [[homebrew](https://github.com/J-x-Z/homebrew-tap)] - VM 오버헤드 없이 Linux GUI 앱을 실행하는 네이티브 macOS Wayland 컴포지터. Smithay로 만들었습니다. [![빌드 배지](https://github.com/J-x-Z/cocoa-way/actions/workflows/release.yml/badge.svg)](https://github.com/J-x-Z/cocoa-way/actions)
* [crabz](https://github.com/sstadick/crabz) - 다중 스레드 압축 및 압축 해제 CLI 도구 [![빌드 상태](https://github.com/sstadick/crabz/workflows/Check/badge.svg)](https://github.com/sstadick/crabz/actions?query=workflow%3ACheck)
* [cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) - [entr](http://eradman.com/entrproject/)에서 영감을 받은 설정 가능한 파일시스템 감시 도구
* [dalance/procs](https://github.com/dalance/procs) - 'ps'의 현대적인 대체 도구 [![회귀 테스트](https://github.com/dalance/procs/actions/workflows/regression.yml/badge.svg)](https://github.com/dalance/procs/actions/workflows/regression.yml)
* [ddh](https://github.com/darakian/ddh) - 빠른 중복 파일 검색 도구
* [deshaw/procfd](https://github.com/deshaw/procfd) [[procfd](https://crates.io/crates/procfd)] - 프로세스의 열린 파일 디스크립터를 나열하는 Linux lsof 대안
* [diskonaut](https://github.com/imsnif/diskonaut) - 터미널 시각적 디스크 공간 탐색기
* [dust](https://github.com/bootandy/dust) - 더 직관적인 du
* [erickochen/purple](https://github.com/erickochen/purple) [[purple-ssh](https://crates.io/crates/purple-ssh)] - 클라우드 동기화, 컨테이너 관리, 파일 전송, 터널, 스니펫, 비밀번호 관리를 갖춘 Ratatui 기반 SSH 클라이언트 [![CI](https://github.com/erickochen/purple/actions/workflows/ci.yml/badge.svg)](https://github.com/erickochen/purple/actions/workflows/ci.yml)
* [eza-community/eza](https://github.com/eza-community/eza) - 'ls' 대체 도구
* [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) - 사용자 친화적인 명령줄 셸
* [fork](https://github.com/immortal/fork) - 제어 터미널에서 분리된 새 프로세스(데몬)를 만드는 라이브러리
* [fselect](https://crates.io/crates/fselect) - SQL 스타일 쿼리로 파일을 찾습니다
* [git-ai-project/git-ai](https://github.com/git-ai-project/git-ai) - 저장소의 AI 생성 코드를 추적하고 코드 줄을 에이전트, 모델, 대화 기록에 연결하는 git 확장.
* [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) - AI 기반 워크플로를 위해 처음부터 만든 GUI와 CLI를 갖춘 현대적인 Git 기반 버전 관리 인터페이스.
* [gitui](https://github.com/gitui-org/gitui) - 매우 빠른 터미널 git 클라이언트. [![빌드](https://github.com/gitui-org/gitui/actions/workflows/ci.yml/badge.svg)](https://github.com/gitui-org/gitui/actions)
* [GQL](https://github.com/amrdeveloper/gql) - .git 파일에서 실행하는 SQL 스타일 쿼리 언어.
* [harry0703/MangoDisk](https://github.com/harry0703/MangoDisk) - 심층 정리, 트리맵 시각화, 중복 감지, 앱 제거, 개발 산출물 정리를 제공하는 크로스 플랫폼 디스크 정리 및 공간 분석 앱. [![크로스 플랫폼 검사](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml/badge.svg)](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml)
* [httm](https://github.com/kimono-koans/httm) - ZFS/btrfs/nilfs2(실제 Time Machine 백업도 포함!)용 대화형 파일 수준 Time Machine 스타일 도구
* [hyperb1iss/unifly](https://github.com/hyperb1iss/unifly) [[unifly](https://crates.io/crates/unifly)] - 두 API를 모두 지원하고 10개 화면의 Ratatui 대시보드를 갖춘 Ubiquiti UniFi 네트워크 컨트롤러 관리용 CLI 및 TUI [![CI](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml/badge.svg)](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml)
* [j0ru/kickoff](https://github.com/j0ru/kickoff) - 빠르고 반응성이 좋은 wayland 프로그램 런처 [![빌드](https://github.com/j0ru/kickoff/actions/workflows/ci.yml/badge.svg)](https://github.com/j0ru/kickoff/actions)
* [jacek-kurlit/pik](https://github.com/jacek-kurlit/pik) [[pik](https://crates.io/crates/pik)] - 프로세스 검색과 종료를 돕는 TUI 명령줄 도구
* [Kondo](https://github.com/tbillington/kondo) - 소프트웨어 프로젝트 산출물을 삭제하고 디스크 공간을 확보하는 CLI 및 GUI 도구
* [LACT](https://github.com/ilya-zlobintsev/LACT) - Linux AMDGPU 제어 도구
* [lodosgroup/lpm](https://github.com/lodosgroup/lpm) - 실험적인 시스템 패키지 관리자
* [lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] - 패턴 매칭을 지원하는 xargs + awk
* [lsd](https://github.com/lsd-rs/lsd) - 아름다운 색상과 멋진 아이콘이 풍부한 ls [![빌드](https://github.com/lsd-rs/lsd/actions/workflows/CICD.yml/badge.svg)](https://github.com/lsd-rs/lsd/actions)
* [Luminarys/synapse](https://github.com/Luminarys/synapse) - 유연하고 빠른 BitTorrent 데몬.
* [m4b/bingrep](https://github.com/m4b/bingrep) - 여러 운영체제와 아키텍처의 바이너리를 grep으로 검색하고 색상을 표시합니다.
* [macpow](https://github.com/k06a/macpow) - Apple Silicon Mac(M1–M5+)용 실시간 전력 소비 모니터 TUI. sudo 없이 IOReport, SMC, IORegistry를 읽습니다. [![CI](https://github.com/k06a/macpow/actions/workflows/ci.yml/badge.svg)](https://github.com/k06a/macpow/actions/workflows/ci.yml)[![crates.io](https://img.shields.io/crates/v/macpow.svg?logo=rust)](https://crates.io/crates/macpow)
* [Mapika/portview](https://github.com/Mapika/portview) [[portview](https://crates.io/crates/portview)] - 포트별 프로세스와 충돌, 와일드카드 노출, 연결 누수 진단을 확인합니다. MCP 서버로도 사용할 수 있습니다. [![CI](https://github.com/Mapika/portview/actions/workflows/ci.yml/badge.svg)](https://github.com/Mapika/portview/actions)
* [matheus-git/systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) [[systemd-manager-tui](https://crates.io/crates/systemd-manager-tui)] - TUI(터미널 사용자 인터페이스)로 systemd 서비스를 관리하는 프로그램.
* [matthart1983/diskwatch](https://github.com/matthart1983/diskwatch) - 단일 호스트 디스크 진단 TUI. 장치, 볼륨, 파일시스템, IO, SMART, 자주 접근하는 파일, 인사이트를 위한 8개 탭.
* [matthart1983/netwatch](https://github.com/matthart1983/netwatch) [[netwatch-tui](https://crates.io/crates/netwatch-tui)] - 실시간 네트워크 진단 TUI. 13개 프로토콜(TLS, QUIC, HTTP, DNS, SSH, MQTT, SNMP 등)의 심층 패킷 검사, eBPF / PKTAP 기반 프로세스별 귀속, TCP 재전송 분석, JA4 핑거프린팅, 선택적 Landlock 샌드박스, Flight Recorder 사고 묶음을 제공합니다.
* [matthart1983/syswatch](https://github.com/matthart1983/syswatch) [[syswatch](https://crates.io/crates/syswatch)] - 단일 호스트 시스템 진단 TUI. CPU, 메모리, 디스크, 프로세스, GPU, 전력, 서비스, 네트워크의 12개 탭과 Timeline 탐색기 및 Insights 이상 탐지 엔진.
* [mdgaziur/findex](https://github.com/mdgaziur/findex) - GTK3를 사용하는 폭넓게 설정 가능한 애플리케이션 검색기인 Findex
* [mitnk/cicada](https://github.com/mitnk/cicada) - bash 스타일의 유닉스 셸
* [mmstick/concurr](https://github.com/mmstick/concurr) - 클라이언트-서버 아키텍처를 갖춘 GNU Parallel 대안
* [mmstick/fontfinder](https://github.com/mmstick/fontfinder) - Google 글꼴을 미리 보고 설치하는 GTK3 애플리케이션
* [mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) - 선택적 GTK3 프런트엔드를 갖춘 TV 시리즈 이름 변경 애플리케이션.
* [mxseev/logram](https://github.com/mxseev/logram) - 로그 파일 업데이트를 Telegram으로 보냅니다
* [netscanner](https://github.com/Chleba/netscanner) - TUI 네트워크 스캐너
* [nickgerace/gfold](https://github.com/nickgerace/gfold) [[gfold](https://crates.io/crates/gfold)] - 여러 Git 저장소의 현황을 추적하도록 돕는 CLI 도구 [![빌드](https://img.shields.io/github/workflow/status/nickgerace/gfold/merge/main)](https://github.com/nickgerace/gfold/actions?query=workflow%3Amerge+branch%3Amain)
* [nivekuil/rip](https://github.com/nivekuil/rip) - 안전하고 사용하기 편한 `rm` 대안
* [nushell/nushell](https://github.com/nushell/nushell) - 새로운 유형의 셸
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) - Terraform MCP 도구. AI 도우미가 Model Context Protocol로 Terraform 환경을 관리하는 CLI.
* [nwiizo/tfocus](https://github.com/nwiizo/tfocus) - Terraform plan/apply 작업을 선택하고 실행하는 대화형 도구
* [orhun/kmon](https://github.com/orhun/kmon) - Linux 커널 관리자 및 활동 모니터 ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/actions/workflow/status/orhun/kmon/ci.yml?branch=master&label=build)
* [orhun/systeroid](https://github.com/orhun/systeroid) - 터미널 사용자 인터페이스를 갖춘 더욱 강력한 sysctl(8) 대안 ![https://github.com/orhun/systeroid/actions](https://img.shields.io/github/actions/workflow/status/orhun/systeroid/ci.yml?branch=main&label=build)
* [ouch](https://github.com/ouch-org/ouch) - 명령줄에서 간편하게 압축하고 압축을 해제합니다 [![GitHub 워크플로 상태(브랜치)](https://img.shields.io/github/workflow/status/ouch-org/ouch/build-and-test)](https://github.com/ouch-org/ouch/actions?query=branch%3Amaster)
* [pkolaczk/fclones](https://github.com/pkolaczk/fclones) - 효율적인 중복 파일 검색 및 제거 도구
* [pop-os/popsicle](https://github.com/pop-os/popsicle) - 여러 USB 장치를 병렬로 플래시하는 GTK3 및 CLI 유틸리티
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) - CLI 도구를 갖춘 Linux 전원 관리 데몬(DBus 인터페이스).
* [pueue](https://github.com/nukesor/pueue) - 장시간 실행되는 셸 명령을 관리합니다. [![GitHub Actions 워크플로](https://github.com/Nukesor/pueue/actions/workflows/test.yml/badge.svg)](https://github.com/nukesor/pueue/actions)
* [qarmin/czkawka](https://github.com/qarmin/czkawka) - 중복 파일, 빈 폴더, 비슷한 이미지 등을 찾는 다기능 앱. [![GitHub Actions 워크플로](https://github.com/qarmin/czkawka/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/qarmin/czkawka/actions)
* [redox-os/ion](https://github.com/redox-os/ion) - 차세대 시스템 셸
* [sharkdp/bat](https://github.com/sharkdp/bat) - 날개를 단 cat(1) 복제 도구. [![CICD](https://github.com/sharkdp/bat/actions/workflows/CICD.yml/badge.svg?branch=master)](https://github.com/sharkdp/bat/actions/workflows/CICD.yml)
* [sharkdp/fd](https://github.com/sharkdp/fd) - 간단하고 빠르며 사용자 친화적인 find 대안. [![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml)
* [sharkdp/hexyl](https://github.com/sharkdp/hexyl) [[hexyl](https://crates.io/crates/hexyl)] - 바이트 종류별로 색상을 표시하는 명령줄 16진수 뷰어 [![CICD](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml)
* [sitkevij/hex](https://github.com/sitkevij/hex) - 색상이 있는 hexdump 터미널 유틸리티.
* [Skardyy/mcat](https://github.com/Skardyy/mcat) [[mcat](https://crates.io/crates/mcat)] - 터미널에서 이미지, 동영상, 마크다운, 기타 문서를 봅니다.
* [skim](https://github.com/skim-rs/skim) - 퍼지 검색 도구
* [sorairolake/hf](https://github.com/sorairolake/hf) [[hf](https://crates.io/crates/hf)] - 크로스 플랫폼 숨김 파일 라이브러리 및 유틸리티 [![CI](https://github.com/sorairolake/hf/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/hf/actions/workflows/CI.yaml)
* [sorairolake/ngrv](https://github.com/sorairolake/ngrv) [[ngrv](https://crates.io/crates/ngrv)] - `pv(1)`과 비슷한 터미널 기반 파이프 뷰어 [![CI](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml)
* [sorairolake/rzopfli](https://github.com/sorairolake/rzopfli) [[rzopfli](https://crates.io/crates/rzopfli)] - Zopfli를 사용하는 무손실 데이터 압축 도구 [![CI](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml)
* [supercilex/fuc](https://github.com/supercilex/fuc) - 빠른 `cp` 및 `rm` 명령
* [theBGuy/GitDesktop](https://github.com/theBGuy/GitDesktop) - GitHub, GitLab, Bitbucket의 PR, 이슈, 토론, CI, 알림 관리와 Jira 연결, AI 에이전트 연동을 제공하는 키보드 우선 Git 데스크톱 클라이언트. Tauri + Rust 백엔드 [![릴리스](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml)
* [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh) - SSH 연결 관리를 위한 빠른 키보드 기반 TUI [![CI](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml/badge.svg)](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml)
* [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments) - 샌드박스 다중 언어 플러그인 시스템을 갖춘 WebAssembly Component Model 기반 REPL [![Crates.io](https://img.shields.io/crates/v/pluginlab.svg)](https://crates.io/crates/pluginlab)
* [trippy](https://github.com/fujiapple852/trippy) - 네트워크 진단 도구 [![빌드 배지](https://github.com/fujiapple852/trippy/workflows/CI/badge.svg)](https://github.com/fujiapple852/trippy/actions/workflows/ci.yml)
* [tw93/Kaku](https://github.com/tw93/Kaku) - AI 코딩용으로 즉시 사용할 수 있는 빠른 터미널 에뮬레이터. 설정이 필요 없는 기본값, AI 도우미 연동, WezTerm 호환 Lua 설정을 제공합니다. macOS 전용.
* [uutils/coreutils](https://github.com/uutils/coreutils) - GNU coreutils의 크로스 플랫폼 재작성 [![CICD](https://github.com/uutils/coreutils/actions/workflows/CICD.yml/badge.svg)](https://github.com/uutils/coreutils/actions/workflows/CICD.yml)
* [vyrti/cleaner](https://github.com/vyrti/cleaner) - Windows, macOS, Linux, FreeBSD용 가장 빠른 디스크 공간 사용량 분석 및 정리 도구. [![CI](https://github.com/vyrti/cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/vyrti/cleaner/actions)
* [watchexec](https://github.com/watchexec/watchexec) - 파일 변경에 반응하여 명령을 실행합니다
* [XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) - 코드 줄 수를 셉니다
* [ynqa/jnv](https://github.com/ynqa/jnv) - jq를 사용하는 대화형 JSON 필터 [![ci](https://github.com/ynqa/jnv/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/jnv/actions/workflows/ci.yml)
* [ynqa/logu](https://github.com/ynqa/logu) - (스트리밍) 비정형 로그 메시지에서 패턴을 추출합니다 [![ci](https://github.com/ynqa/logu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/logu/actions/workflows/ci.yml)
* [ynqa/sig](https://github.com/ynqa/sig) - 대화형 grep(스트리밍용) [![ci](https://github.com/ynqa/sig/actions/workflows/ci.yml/badge.svg)](https://github.com/ynqa/sig/actions/workflows/ci.yml)

### 작업 스케줄링

* [tasklet](https://github.com/stav121/tasklet) [[tasklet](https://crates.io/crates/tasklet)] - Rust로 작성한 작업 스케줄링 라이브러리 ![빌드 상태](https://img.shields.io/github/actions/workflow/status/stav121/tasklet/rust.yml)

### 텍스트 편집기

* [amp](https://amp.rs) - Vi/Vim에서 영감을 받았습니다.
* [Ferrite](https://github.com/OlaProeis/Ferrite) - 실시간 미리보기, 구문 강조, mermaid 다이어그램을 제공하는 egui 기반 크로스 플랫폼 마크다운 편집기.
* [Fresh](https://github.com/sinelaw/fresh) - 사용하기 쉽고 강력하며 빠른 터미널 텍스트 편집기 및 IDE. TypeScript 플러그인을 지원합니다.
* [gchp/iota](https://github.com/gchp/iota) - 간단한 텍스트 편집기
* [helix](https://github.com/helix-editor/helix) - Neovim/Kakoune에서 영감을 받은 포스트모던 모달 텍스트 편집기. [![빌드 배지](https://github.com/helix-editor/helix/actions/workflows/build.yml/badge.svg)](https://github.com/helix-editor/helix/actions)
* [ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) - 구문 강조, 증분 검색 등을 갖춘 작은(≤1024 LOC) 텍스트 편집기. [![빌드 배지](https://github.com/ilai-deutel/kibi/actions/workflows/ci.yml/badge.svg)](https://github.com/ilai-deutel/kibi/actions?query=branch%3Amaster)
* [Inkwell](https://github.com/4worlds4w-svg/inkwell) - Tauri v2로 만든 이식 가능한 오프라인 우선 마크다운 편집기. 단일 실행 파일이며 원격 측정이 없습니다.
* [jamii/focus](https://github.com/jamii/focus) - jj(Jujutsu) 버전 관리 연동을 내장한 최소한의 텍스트 편집기.
* [ki-editor/ki-editor](https://github.com/ki-editor/ki-editor) - 다중 커서 조합형 모달 편집기
* [Lapce](https://github.com/lapce/lapce) - 백엔드를 갖춘 현대적인 편집기. 중단된 [xi-editor](https://github.com/xi-editor/xi-editor)에서 영감을 받았습니다.
* [manyougz/velotype](https://github.com/manyougz/velotype) - WebView 셸 없이 GPUI로 만든 블록 기반 네이티브 마크다운 편집기. WYSIWYG 렌더링과 소스 편집 모드를 제공합니다.
* [mathall/rim](https://github.com/mathall/rim) - Vim 스타일의 텍스트 편집기.
* [ox](https://github.com/curlpipe/ox) - 터미널에서 실행되는 독립적인 Rust 텍스트 편집기!
* [SoloMD](https://github.com/zhitongblog/solomd) - Tauri 2로 만든 실시간 미리보기 지원 경량 크로스 플랫폼 마크다운 편집기.
* [vamolessa/pepper](https://git.sr.ht/~lessa/pepper) [[pepper](https://crates.io/crates/pepper)] - 터미널에서 코드 편집을 단순화하는 뚜렷한 철학의 모달 편집기
* [zed](https://github.com/zed-industries/zed) - Atom과 Tree-sitter 제작자들이 만든 고성능 다중 사용자 코드 편집기.

### 텍스트 처리

* [artob/readmer](https://github.com/artob/readmer) [[readmer](https://crates.io/crates/readmer)] - Readmer는 Liquid 또는 Jinja2 템플릿으로 `README.md` 파일을 구성합니다. [![빌드 상태](https://github.com/artob/readmer/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/readmer/blob/master/.github/workflows/rust.yaml)
* [ashvardanian/stringzilla](https://github.com/ashvardanian/StringZilla) - x86 AVX2 및 AVX-512와 Arm NEON용 SIMD 가속 문자열 검색, 정렬, 편집 거리, 서열 정렬, 생성기 [![crates.io](https://img.shields.io/crates/v/stringzilla.svg)](https://crates.io/crates/stringzilla)
* [bensadeh/tailspin](https://github.com/bensadeh/tailspin) [[tailspin](https://crates.io/crates/tailspin)] - 숫자, 날짜, IP 주소, UUID, 로그 수준을 강조하는 로그 파일 강조 도구. [![테스트 실행](https://github.com/bensadeh/tailspin/workflows/Run%20Tests/badge.svg)](https://github.com/bensadeh/tailspin/actions)
* [brevity1swos/rgx](https://github.com/brevity1swos/rgx) [[rgx-cli](https://crates.io/crates/rgx-cli)] - 실시간 매칭, 단계별 디버거, 3개 엔진, 코드 생성, 실시간 스트림 필터링을 갖춘 터미널 정규식 디버거. [![CI](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml/badge.svg)](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml)
* [cchexcode/complate](https://github.com/cchexcode/complate) - 메시지(GIT 커밋 등)를 표준화하는 터미널 내 텍스트 템플릿 도구. [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![빌드 배지](https://github.com/cchexcode/complate/actions/workflows/release.yml/badge.svg)](https://github.com/cchexcode/complate/actions)
* [dathere/qsv](https://github.com/dathere/qsv) [[qsv](https://crates.io/crates/qsv)] - 고성능 CSV 데이터 처리 도구 모음. xsv에서 포크하여 34개 이상의 추가 명령 등을 제공합니다. [![Linux 빌드 상태](https://github.com/dathere/qsv/actions/workflows/rust.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust.yml) [![Windows 빌드 상태](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml) [![macOS 빌드 상태](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml)
* [dominikwilkowski/cfonts](https://github.com/dominikwilkowski/cfonts) [[cfonts](https://crates.io/crates/cfonts)] - 콘솔용 멋진 ANSI 글꼴 ![빌드 배지](https://github.com/dominikwilkowski/cfonts/actions/workflows/testing.yml/badge.svg)
* [Goldziher/uncomment](https://github.com/Goldziher/uncomment) [[uncomment](https://crates.io/crates/uncomment)] - tree-sitter 문법으로 코드의 주석을 제거하는 매우 빠른 CLI.
* [grex](https://github.com/pemistahl/grex) - 사용자가 제공한 테스트 사례로 정규식을 생성하는 명령줄 도구 및 라이브러리
* [harehare/mq](https://github.com/harehare/mq) - jq 스타일 구문으로 마크다운을 처리하는 명령줄 도구 및 라이브러리 [![빌드 배지](https://github.com/harehare/mq/actions/workflows/ci.yml/badge.svg)](https://github.com/harehare/mq/actions/workflows/ci.yml)
* [Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) - 사람을 위한 간단하고 빠른 문자열 검색 도구
* [loki_text](https://github.com/roquess/loki_text) [[loki_text](https://crates.io/crates/loki_text)] - 패턴 검색, 텍스트 변환, 여러 문자열 검색 알고리즘(KMP, Boyer-Moore, Aho-Corasick 등)을 갖춘 문자열 조작 라이브러리
* [Melody](https://github.com/yoav-lavi/melody) - 정규식으로 컴파일되며 더 읽기 쉽고 유지보수하기 쉬운 것을 지향하는 언어 [![빌드 배지](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml/badge.svg)](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml) [![crates.io](https://img.shields.io/crates/v/melody_compiler?label=compiler)](https://crates.io/crates/melody_compiler)
* [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) [[jsongrep](https://crates.io/crates/jsongrep)] - 직관적인 경로 쿼리 구문을 갖춘 JSON, YAML, TOML 및 기타 직렬화 형식용 빠른 검색 도구.
* [phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) - PDF, 전자책, Office 문서, zip, tar.gz 등에서도 검색하는 ripgrep
* [ripgrep](https://crates.io/crates/ripgrep) - The Silver Searcher의 사용성과 grep의 원시 속도를 결합합니다
* [ruplacer](https://github.com/your-tools/ruplacer) - 소스 파일의 텍스트를 찾아 바꿉니다 [![테스트 실행](https://github.com/your-tools/ruplacer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/your-tools/ruplacer/actions/workflows/test.yml)
* [scooter](https://github.com/thomasschafer/scooter) - 터미널에서 대화형으로 찾아 바꿉니다.
* [sd](https://crates.io/crates/sd) - 직관적인 찾기 및 바꾸기 CLI
* [sstadick/hck](https://github.com/sstadick/hck) - `cut`을 바로 대체할 수 있는 더 빠르고 기능이 풍부한 도구 [![빌드 배지](https://github.com/sstadick/hck/workflows/Check/badge.svg?branch=master)](https://github.com/sstadick/hck)
* [SylphxAI/anymd](https://github.com/SylphxAI/anymd) - 모든 파일(PDF, DOCX, PPTX, XLSX, EPUB, HTML/URL, 이미지, 오디오/동영상)을 AI 에이전트용 깔끔한 마크다운으로 변환하는 CLI 및 MCP 서버 [![빌드 배지](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml)
* [vishaltelangre/ff](https://github.com/vishaltelangre/ff) - 이름으로 파일을 찾습니다(ff)!
* [whitfin/bytelines](https://github.com/whitfin/bytelines) [[bytelines](https://crates.io/crates/bytelines)] - 높은 효율성을 위해 입력 줄을 바이트 슬라이스로 읽습니다.
* [whitfin/runiq](https://github.com/whitfin/runiq) - 정렬되지 않은 입력에서 중복 줄을 효율적으로 걸러냅니다.
* [xsv](https://crates.io/crates/xsv) - 빠른 CSV 명령줄 도구(슬라이싱, 인덱싱, 선택, 검색, 샘플링 등)

### 유틸리티

* [1History](https://github.com/localfirstapp/1History) - Firefox/Chrome/Safari 이력을 하나의 SQLite 파일에 백업하는 명령줄 인터페이스 [![빌드 상태](https://github.com/localfirstapp/1History/actions/workflows/CI.yml/badge.svg)](https://github.com/localfirstapp/1History/actions/workflows/CI.yml)
* [aravpanwar/decayfmt](https://github.com/aravpanwar/decayfmt) [[decayfmt](https://crates.io/crates/decayfmt)] - 열 때마다 영구적으로 조금씩 손상되며 파일만으로는 복구할 수 없는 파일 형식. [![CI](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml/badge.svg)](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml)
* [artob/edky](https://github.com/artob/edky) [[edky](https://crates.io/crates/edky)] - Ed25519 공개 키를 여러 인코딩 형식(Base58, Base64, IPFS, iroh, libp2p, OpenSSH 등) 사이에서 변환하는 명령줄 유틸리티. [![빌드 상태](https://github.com/artob/edky/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/edky/blob/master/.github/workflows/rust.yaml)
* [bloznelis/kbt](https://github.com/bloznelis/kbt) [[kbt](https://crates.io/crates/kbt)] - 키보드 테스트용 간단한 TUI 도구.
* [brycx/checkpwn](https://github.com/brycx/checkpwn) - 유출된 계정과 비밀번호를 쉽게 확인하는 Have I Been Pwned(HIBP) 명령줄 유틸리티 도구.
* [cartesiancs/vessel](https://github.com/cartesiancs/vessel) - 물리적 장치를 오케스트레이션하는 C2(명령 및 제어) 소프트웨어.
* [dcapal](https://github.com/dcapal/dcapal) - 정액 분할 투자로 포트폴리오의 균형을 유지하도록 돕는 무료 무가입 온라인 도구인 DcaPal.
* [Eoin-McMahon/Blindfold](https://github.com/Eoin-McMahon/Blindfold) [[Blindfold](https://crates.io/crates/blindfold)] - `.gitignore` 파일을 빠르고 쉽게 생성하는 간단한 CLI 도구. ) [![빌드 배지](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml/badge.svg)]([https://github.com/nix-community/nurl/actions/workflows/ci.yml](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml))
* [Epic Asset Manager](https://github.com/AchetaGames/Epic-Asset-Manager) - Unreal Engine을 설치하고 Epic Games Store에서 구매한 자산, 프로젝트, 플러그인, 게임을 다운로드 및 관리하는 비공식 클라이언트.
* [evansmurithi/cloak](https://github.com/evansmurithi/cloak) - 명령줄 OTP(일회용 비밀번호) 인증 애플리케이션. ![CI](https://github.com/evansmurithi/cloak/workflows/CI/badge.svg) [![빌드 배지](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) - vimium/vimperator처럼 tmux에서 복사/붙여넣기를 하는 초고속 tmux-fingers 대안.
* [fosk/emplace](https://codeberg.org/fosk/emplace) [[emplace](https://crates.io/crates/emplace)] - 여러 기기의 설치된 패키지를 동기화합니다
* [gitlogue](https://github.com/unhappychoice/gitlogue) - Git 커밋 이력을 터미널에서 시각화하는 TUI 화면 보호기
* [guoxbin/dtool](https://github.com/guoxbin/dtool) - 변환, 코덱, 해싱, 암호화 등의 개발을 돕는 유용한 명령줄 도구 모음.
* [IvanWng97/pixtuoid](https://github.com/IvanWng97/pixtuoid) [[pixtuoid](https://crates.io/crates/pixtuoid)] - Claude Code 세션을 실시간 애니메이션 동료로 시각화하는 터미널 픽셀 아트 사무실. [![CI](https://img.shields.io/github/actions/workflow/status/IvanWng97/pixtuoid/ci.yml?branch=main)](https://github.com/IvanWng97/pixtuoid/actions/workflows/ci.yml)
* [ja7ad/hydra](https://github.com/ja7ad/hydra) - 파일을 병렬 연결과 미러 소스로 분할하는 오픈 소스 고성능 다운로드 관리자 및 가속기. Windows, macOS, Linux에서 동적 범위 분담과 실시간 정체 복구를 제공합니다.
* [lamco-admin/lamco-rdp-server](https://github.com/lamco-admin/lamco-rdp-server) - IronRDP 기반 Wayland 네이티브 RDP 서버. X11 없이 Wayland Linux 데스크톱(GNOME, KDE, COSMIC, wlroots 컴포지터 등)에 원격 데스크톱 접근을 제공합니다.
* [Linus-Mussmaecher/rucola](https://github.com/Linus-Mussmaecher/rucola) - 터미널 기반 마크다운 메모 관리자. [![크레이트](https://img.shields.io/crates/v/rucola-notes.svg?logo=rust)](https://crates.io/crates/rucola-notes) [![빌드 상태](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml/badge.svg)](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml)
* [matugen](https://github.com/InioX/matugen) - 템플릿으로 이미지나 색상에서 색상 팔레트를 생성합니다.
* [Mobslide](https://github.com/thewh1teagle/mobslide) - 스마트폰을 프레젠테이션 리모컨으로 바꾸는 데스크톱 애플리케이션.
* [MoonProxyHQ/moonproxy-desktop](https://github.com/MoonProxyHQ/moonproxy-desktop) - 비전문 사용자도 한 번의 클릭으로 로컬 서비스를 공개 인터넷에 노출할 수 있는 FRP(frpc)용 크로스 플랫폼 GUI 데스크톱 클라이언트. [![CI](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml/badge.svg)](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml)
* [mprocs](https://github.com/pvolok/mprocs) - 여러 프로세스를 실행하는 TUI
* [mrjackwills/oxker](https://github.com/mrjackwills/oxker) [[oxker](https://crates.io/crates/oxker)] - docker 컨테이너를 보고 제어하는 간단한 TUI.
* [nix-community/nix-init](https://github.com/nix-community/nix-init) - 해시 사전 가져오기, 의존성 추론, 라이선스 감지 등으로 URL에서 Nix 패키지를 생성합니다 [![빌드 배지](https://github.com/nix-community/nix-init/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-init/actions/workflows/ci.yml)
* [nix-community/nix-melt](https://github.com/nix-community/nix-melt) - ranger 스타일의 flake.lock 뷰어 [![빌드 배지](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml)
* [nix-community/nurl](https://github.com/nix-community/nurl) [[nurl](https://crates.io/crates/nurl)] - 저장소 URL에서 Nix fetcher 호출을 생성합니다 [![빌드 배지](https://github.com/nix-community/nurl/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nurl/actions/workflows/ci.yml)
* [nomino](https://github.com/yaa110/nomino) - 개발자를 위한 일괄 이름 변경 유틸리티
* [pastel](https://github.com/sharkdp/pastel) - 색상 생성, 혼합, 무작위 색상 등 색상 작업을 돕습니다.
* [race604/clock-tui](https://github.com/race604/clock-tui) [[clock-tui](https://crates.io/crates/clock-tui)] - 로컬 시계, 타이머, 스톱워치를 갖춘 터미널 시계 앱. [![Rust](https://github.com/race604/clock-tui/actions/workflows/rust.yml/badge.svg)](https://github.com/race604/clock-tui/actions/workflows/rust.yml)
* [raftario/licensor](https://github.com/raftario/licensor) - 라이선스를 stdout에 출력합니다 [![GitHub Actions](https://github.com/raftario/licensor/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/raftario/licensor/actions/workflows/build.yml)
* [restsend/rustpbx](https://github.com/restsend/rustpbx) - 등록, 프레즌스, b2bua를 포함하는 소프트웨어 정의 SIP 프록시. Freeswitch/FreePBX 대안.
* [rleeon/hoard](https://github.com/rleeon/hoard) - 자동 감지, 버전별 스냅샷, 자체 호스팅 저장소를 갖춘 게임 저장 백업 및 동기화 시스템. [![CI](https://github.com/rleeon/hoard/actions/workflows/ci.yml/badge.svg)](https://github.com/rleeon/hoard/actions/workflows/ci.yml)
* [rust-parallel](https://github.com/aaronriekenberg/rust-parallel) - Tokio로 명령을 병렬 실행하는 빠른 명령줄 앱. GNU Parallel 또는 xargs와 비슷한 인터페이스. [![크레이트](https://img.shields.io/crates/v/rust-parallel.svg?logo=rust)](https://crates.io/crates/rust-parallel) [![빌드 상태](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml/badge.svg)](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml)
* [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) - TeamViewer와 AnyDesk의 훌륭한 대안인 원격 데스크톱 소프트웨어.
* [rustic-rs/rustic](https://github.com/rustic-rs/rustic) [[rustic-rs](https://crates.io/crates/rustic-rs)] - Rust 기반의 빠른 암호화 중복 제거 백업. [![버전](https://img.shields.io/crates/v/rustic-rs.svg)](https://crates.io/crates/rustic-rs)
* [ruvnet/RuView](https://github.com/ruvnet/RuView) - WiFi 채널 상태 정보(CSI)와 머신 러닝을 사용하는 프라이버시 보호 인체 자세 추정 시스템.
* [sorairolake/qrtool](https://github.com/sorairolake/qrtool) [[qrtool](https://crates.io/crates/qrtool)] - QR 코드 이미지를 인코딩하고 디코딩하는 유틸리티. [![CI](https://github.com/sorairolake/qrtool/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/qrtool/actions?query=workflow%3ACI)
* [sorairolake/randgen](https://github.com/sorairolake/randgen) [[randgen](https://crates.io/crates/randgen)] - 의사 난수 바이트를 생성합니다 [![CI](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml)
* [splashboard](https://github.com/unhappychoice/splashboard) [[splashboard](https://crates.io/crates/splashboard)] - 셸 시작과 디렉터리 변경 시 렌더링되는 맞춤형 터미널 시작 화면. 디렉터리별 대시보드를 제공합니다 [![CI](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml)
* [str4d/rage](https://github.com/str4d/rage) [[rage](https://crates.io/crates/rage)] - [age](https://github.com/FiloSottile/age)의 Rust 구현체.
* [suckit](https://github.com/Skallwar/suckit) - 웹사이트 콘텐츠를 재귀적으로 방문하고 디스크에 다운로드합니다. [![크레이트](https://img.shields.io/crates/v/suckit.svg?logo=rust)](https://crates.io/crates/suckit) [![빌드 상태](https://github.com/Skallwar/suckit/workflows/Build%20and%20test/badge.svg)](https://github.com/Skallwar/suckit/blob/master/.github/workflows/build_and_test.yml)
* [sundegan/JsonStudio](https://github.com/sundegan/JsonStudio) - Rust와 Tauri로 만든 로컬 우선 데스크톱 JSON 작업 공간. 서식 지정, 편집, 차이 비교, 변환, 검증, 로그 추출을 제공합니다.
* [Tabiew](https://github.com/shshemi/tabiew) - CSV 파일을 보고 쿼리하는 가벼운 TUI 앱.
* [Tail Tales](https://github.com/davidmoreno/tailtales) - logfmt를 지원하는 TUI 로그 뷰어. [![크레이트](https://img.shields.io/crates/v/tailtales.svg?logo=rust)](https://crates.io/crates/tailtales)
* [tareqmy/gitwig](https://github.com/tareqmy/gitwig) [[CRATE](https://crates.io/crates/gitwig)] - 마우스로 조작할 수 있는 git TUI 및 다중 저장소 대시보드.
* [television](https://github.com/alexpasmantier/television) - 매우 빠른 범용 퍼지 검색 TUI ![GitHub 브랜치 검사 실행](https://img.shields.io/github/check-runs/alexpasmantier/television/main)
* [Thoth](https://github.com/anitnilay20/thoth) - WASM 기반 플러그인을 지원하며 JSON 및 NDJSON 파일을 보고 탐색하는 고성능 다기능 데스크톱 애플리케이션. [![CI](https://github.com/anitnilay20/thoth/workflows/CI/badge.svg)](https://github.com/anitnilay20/thoth/actions/workflows/ci.yml)
* [vamolessa/verco](https://git.sr.ht/~lessa/verco) [[verco](https://crates.io/crates/verco)] - 키보드 단축키에 중점을 둔 간단한 Git/Hg TUI 클라이언트
* [vaultwarden](https://github.com/dani-garcia/vaultwarden#readme) [![빌드](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml/badge.svg)](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml) - Rust로 작성한 Bitwarden 서버 API의 대체 구현체
* [veirt/weathr](https://github.com/Veirt/weathr) [[weathr](https://crates.io/crates/weathr)] - ASCII 애니메이션을 갖춘 터미널 날씨 앱. [![릴리스](https://github.com/Veirt/weathr/actions/workflows/release.yml/badge.svg)](https://github.com/Veirt/weathr/actions/workflows/release.yml)
* [Vibe](https://github.com/thewh1teagle/vibe) - 모든 플랫폼에서 모든 언어의 오디오와 동영상을 전사합니다.
* [warpdotdev/Warp](https://github.com/warpdotdev/Warp) - :heavy_dollar_sign: Warp는 사용자와 팀의 생산성을 높이기 위해 만든 매우 빠른 현대적 GPU 가속 터미널입니다.
* [Water-Run/treepp](https://github.com/Water-Run/treepp) - Rust 기반 네이티브 Windows `tree` 대안. 정상 실행 시 diff 수준의 입출력 호환성을 제공하며 필수 제외 항목, `.gitignore` 지원 등 많은 추가 기능과 몇 배 빠른 성능을 갖춥니다.
* [wrestic](https://github.com/alvaro17f/wrestic) - restic 래퍼.
* [wthrr](https://github.com/ttytm/wthrr-the-weathercrab) - 터미널용 날씨 도우미. [![crates.io](https://img.shields.io/crates/v/wthrr?logo=rust)](https://crates.io/crates/wthrr)
* [YAKC](https://github.com/iammodev/YAKC) - 스크린캐스트, 스트리밍, 프레젠테이션용 크로스 플랫폼 키 입력 및 마우스 클릭 시각화 도구. Windows, macOS, Linux(X11 및 Wayland)에서 동작합니다. [![CI](https://github.com/iammodev/YAKC/actions/workflows/ci.yml/badge.svg)](https://github.com/iammodev/YAKC/actions/workflows/ci.yml)
* [YueMiyuki/Risuko](https://github.com/YueMiyuki/Risuko) - 모든 기능을 갖춘 다운로드 관리자. [![릴리스 배지](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml/badge.svg)](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml)
* [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown) - Rust/Tokio 엔진 기반 다중 프로토콜 다운로드 관리자. HTTP/FTP, BitTorrent, eD2K, HLS, DASH를 지원하며 IDM 스타일 동적 분할, 브라우저 확장, aria2 호환 JSON-RPC 엔드포인트를 제공합니다.

### 동영상

* [dertuxmalwieder/yaydl](https://github.com/dertuxmalwieder/yaydl) [[yaydl](https://crates.io/crates/yaydl)] - 간단한 동영상 다운로더
* [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow) - 자이로스코프 데이터를 사용하는 동영상 흔들림 보정 애플리케이션
* [harlanc/xiu](https://github.com/harlanc/xiu) - 강력하고 안전한 라이브 서버(rtmp/httpflv/hls/relay). [![crates.io](https://img.shields.io/crates/v/xiu.svg)](https://crates.io/crates/xiu)
* [Jorji49/streamtop](https://github.com/Jorji49/streamtop) [[streamtop](https://crates.io/crates/streamtop)] - 와이어 프로브, TR 101 290, SCTE-35 메트릭을 갖춘 터미널 HLS, DASH, IPTV 스트림 모니터.
* [Michael-A-Kuykendall/muxide](https://github.com/Michael-A-Kuykendall/muxide) [[muxide](https://crates.io/crates/muxide)] - 외부 의존성 없이 인코딩된 프레임에서 표준을 준수하는 MP4를 작성하는 순수 Rust MP4 멀티플렉서.
* [tonhowtf/omniget](https://github.com/tonhowtf/omniget) - 1,800개 이상의 사이트에서 동영상, 강좌, 음악, 책을 다운로드하는 데스크톱 앱. 플레이어, 리더, 학습 라이브러리를 내장합니다. [![CI](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml)
* [vidmerger](https://github.com/TGotwig/vidmerger) - CLI로 동영상과 오디오 파일을 병합합니다
* [vuiodev/vuio](https://github.com/vuiodev/vuio) - Linux, macOS, Windows, Docker를 지원하는 DLNA 미디어 서버
* [xiph/rav1e](https://github.com/xiph/rav1e) - 가장 빠르고 안전한 AV1 인코더.

### 가상화

* [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) - 컨테이너 워크로드용 경량 가상 머신 [Firecracker Microvm](https://firecracker-microvm.github.io/)
* [kata-containers/kata-containers](https://github.com/kata-containers/kata-containers) - 컨테이너와 같은 느낌과 성능을 제공하면서 VM의 워크로드 격리와 보안 이점을 갖춘 경량 가상 머신(VM) 구현체.
* [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox) - 격리된 코드를 밀리초 단위로 실행하는 경량 마이크로 VM 샌드박싱 라이브러리. OCI 호환 컨테이너 이미지와 Rust, Python, TypeScript SDK를 지원합니다. [![GitHub 릴리스](https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases)](https://github.com/superradcompany/microsandbox/releases)
* [tailhook/vagga](https://github.com/tailhook/vagga) - 데몬이 없는 컨테이너화 도구
* [youki-dev/youki](https://github.com/youki-dev/youki) - 컨테이너 런타임 [![빌드 배지](https://github.com/youki-dev/youki/actions/workflows/basic.yml/badge.svg)](https://github.com/youki-dev/youki/actions)

### 웹

* [0xMassi/webclaw](https://github.com/0xMassi/webclaw) - 브라우저 없이 TLS 핑거프린팅과 MCP 서버로 LLM용 웹 콘텐츠를 추출합니다 [![CI](https://github.com/0xMassi/webclaw/actions/workflows/ci.yml/badge.svg)](https://github.com/0xMassi/webclaw/actions)
* [agrinman/tunnelto](https://github.com/agrinman/tunnelto) [[tunnelto](https://crates.io/crates/tunnelto)] - 로컬에서 실행 중인 웹 서버를 공개 URL로 노출합니다.
* [cfal/tobaru](https://github.com/cfal/tobaru) - 허용 목록, IP 및 TLS SNI/ALPN 규칙 기반 라우팅, iptables 지원, 라운드 로빈 전달(부하 분산), 핫 리로드를 갖춘 포트 포워더.
* [hook0/hook0](https://github.com/hook0/hook0) - SaaS 개발자가 쉽게 웹훅을 보낼 수 있는 오픈 소스 서비스형 웹훅 플랫폼
* [importantimport/hatsu](https://github.com/importantimport/hatsu) - 🩵 정적 사이트를 위한 자체 호스팅 완전 자동 ActivityPub 브리지. [![릴리스](https://github.com/importantimport/hatsu/actions/workflows/release.yml/badge.svg)](https://github.com/importantimport/hatsu/actions/workflows/release.yml)
* [IndexFlowing/IndexFlow-core](https://github.com/IndexFlowing/IndexFlow-core) - 사이트맵, URL 제출, 검색 엔진 인덱싱을 관리하는 자체 호스팅 SEO 인덱싱 인프라.
* [janreges/siteone-crawler](https://github.com/janreges/siteone-crawler) [[siteone-crawler](https://crates.io/crates/siteone-crawler)] - 올인원
   웹사이트 크롤러, 감사 도구, 오프라인 아카이버, AI용 마크다운 내보내기 도구. CI/CD 품질 검사를 제공합니다
  [![CI](https://github.com/janreges/siteone-crawler/workflows/CI/badge.svg)](https://github.com/janreges/siteone-crawler/actions)
* [konippi/servo-fetch](https://github.com/konippi/servo-fetch) - 웹 콘텐츠를 가져오고 렌더링하여 마크다운, JSON, 스크린샷으로 추출하는 자체 완결형 브라우저 엔진. Chromium과 API 키가 필요 없습니다. CLI, Python, MCP 서버. [![CI](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml/badge.svg)](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml)
* [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) - 페디버스용 링크 수집기 / reddit 클론 [![빌드 상태](https://cloud.drone.io/api/badges/LemmyNet/lemmy/status.svg)](https://cloud.drone.io/LemmyNet/lemmy)
* [MASQ-Project/Node](https://github.com/MASQ-Project/Node) - 전 세계 사용자가 일반 인터넷 콘텐츠에 접근하도록 노드의 탈중앙화 메시 네트워크를 제공하는 MASQ Node 소프트웨어. Tor와 VPN을 넘어선 차세대 기술 [![빌드 배지](https://github.com/MASQ-Project/Node/actions/workflows/ci-matrix.yml/badge.svg)](https://github.com/MASQ-Project/Node/actions)
* [Plume-org/Plume](https://github.com/Plume-org/Plume) - ActivityPub 연합 블로그 애플리케이션
* [Redlib](https://github.com/redlib-org/redlib) - [Libreddit](https://github.com/libreddit/libreddit)에서 출발한 Reddit용 프라이버시 보호 대체 프런트엔드
* [shouya/rss-funnel](https://github.com/shouya/rss-funnel) - 모듈식 RSS 처리 파이프라인 시스템.
* [SinTan1729/Chhoto URL](https://github.com/SinTan1729/chhoto-url) - 불필요한 기능이 없는 간단하고 매우 빠른 자체 호스팅 URL 단축 도구.[![릴리스](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml/badge.svg)](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml)
* [Stoatchat](https://github.com/stoatchat/stoatchat) - 현대적인 웹 기술로 만든 사용자 우선 채팅 플랫폼.
* [zhom/donutbrowser](https://github.com/zhom/donutbrowser) - 무제한 격리 프로필, Chromium/Firefox 엔진, 지문 위장, 프록시/VPN 지원, 로컬 API 및 MCP 서버, 종단 간 암호화 클라우드 동기화를 갖춘 오픈 소스 탐지 방지 브라우저. [![GitHub 릴리스](https://img.shields.io/github/v/release/zhom/donutbrowser)](https://github.com/zhom/donutbrowser/releases)

### 웹 서버

* [cloudflare/pingora](https://github.com/cloudflare/pingora) - 빠르고 안정적이며 발전 가능한 네트워크 서비스 구축용 라이브러리.
* [emanuele-em/proxelar](https://github.com/emanuele-em/proxelar) - MITM 프록시 🦀! SSL/TLS 기능을 갖춘 HTTP/1, HTTP/2, WebSockets 도구 모음 [![Rust](https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg)](https://github.com/emanuele-em/proxelar/actions)
* [g3proxy](https://github.com/bytedance/g3) - 프록시 체이닝, 프로토콜 검사, MITM 가로채기, ICAP 적응, 투명 프록시를 지원하는 정방향 프록시 서버 [![코드 커버리지](https://github.com/bytedance/g3/actions/workflows/codecov.yml/badge.svg)](https://github.com/bytedance/g3/actions)
* [hyperlane-dev/hyperlane](https://github.com/hyperlane-dev/hyperlane) [[hyperlane](https://crates.io/crates/hyperlane)] - Tokio 기반의 가벼운 고성능 크로스 플랫폼 Rust HTTP 서버 라이브러리. 미들웨어, WebSocket, SSE, 원시 TCP를 내장 지원합니다. [![CI](https://github.com/hyperlane-dev/hyperlane/actions/workflows/rust.yml/badge.svg)](https://github.com/hyperlane-dev/hyperlane/actions)
* [Mini RPS](https://github.com/marcodpt/minirps) - HTTPS, CORS, 정적 파일 호스팅, 템플릿 엔진(minijinja)을 갖춘 작은 역방향 프록시 서버 [crates.io](https://crates.io/crates/minirps)
* [mu-arch/skyfolder](https://github.com/mu-arch/skyfolder) - 🪂 번거로움 없이 아름다운 HTTP/Bittorrent 서버. 안전함 - GUI - 아름다움 - 빠름
* [mufeedvh/binserve](https://github.com/mufeedvh/binserve) - 코드 없이 설정할 수 있는 단일 바이너리에 라우팅, 템플릿, 보안을 갖춘 매우 빠른 정적 웹 서버 [![빌드 배지](https://github.com/mufeedvh/binserve/actions/workflows/build.yml/badge.svg)](https://github.com/mufeedvh/binserve/actions)
* [orhun/rustypaste](https://github.com/orhun/rustypaste) - 최소한의 파일 업로드/pastebin 서비스 ![https://github.com/orhun/rustypaste/actions](https://img.shields.io/github/actions/workflow/status/orhun/rustypaste/ci.yml?branch=master&label=build)
* [plabayo/rama](https://github.com/plabayo/rama) - 네트워크 패킷을 이동하고 변환하는 모듈식 서비스 프레임워크. 웹 클라이언트, 서버, 특히 프록시를 만드는 데 사용합니다
* [ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) - GraphQL 서버를 [Hasura](https://hasura.io/)의 원격 스키마로 사용하는 방법을 보여 주는 예제 ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)
* [static-web-server](https://github.com/static-web-server/static-web-server) - 정적 파일 제공용 매우 빠른 비동기 웹 서버. ⚡ [![CI](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml/badge.svg)](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml?query=branch%3Amaster)
* [svenstaro/miniserve](https://github.com/svenstaro/miniserve) - 바이너리를 받아 파일을 HTTP로 바로 제공할 수 있는 작고 자체 완결적인 크로스 플랫폼 CLI 도구 [![빌드 배지](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [thecoshman/http](https://github.com/thecoshman/http) - Host These Things Please - 폴더를 빠르고 간단하게 호스팅하는 기본 HTTP 서버
* [TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) - 간단한 정적 HTTP 서버
* [vetis-server/vetis](https://github.com/vetis-server/vetis) - 현대적인 Rust 애플리케이션용 매우 빠른 최소 구성 HTTP 서버. 가상 호스트, SNI, 정적 콘텐츠, 역방향 프록시, HTTP 1/2/3, 비동기 런타임으로 Tokio 또는 Smol을 제공합니다!
* [vproxy/0x676e67](https://github.com/0x676e67/vproxy) - 빠른 비동기 Rust HTTP/Socks5 프록시

### 워크플로 자동화

* [cowork-forge](https://github.com/sopaco/cowork-forge) - 전문 에이전트를 7단계 파이프라인으로 오케스트레이션하여 아이디어를 프로덕션용 소프트웨어로 변환하는 AI 네이티브 다중 에이전트 플랫폼. [![릴리스](https://img.shields.io/github/actions/workflow/status/sopaco/cowork-forge/rust.yml?label=Build)](https://github.com/sopaco/cowork-forge/actions/workflows/release.yml)
* [dali-benothmen/woml](https://github.com/dali-benothmen/woml) - WOML(Workflow Orchestration Markup Language)은 Rust 실행 코어를 갖춘 워크플로 자동화용 마크업 언어입니다. HTML처럼 읽기 쉽고, 코드처럼 버전 관리하며, JavaScript처럼 강력합니다. 시각적 빌더의 복잡한 연결이나 단계 기능의 한계가 없습니다. [![릴리스](https://github.com/dali-benothmen/woml/actions/workflows/release.yml/badge.svg)](https://github.com/dali-benothmen/woml/actions/workflows/release.yml)
* [SouravRoy-ETL/duckle](https://github.com/SouravRoy-ETL/duckle) - 전적으로 DuckDB에서 실행되는 시각적 우선 오픈 소스 데이터 스튜디오(ETL/ELT). 소스, 변환, 싱크를 캔버스에 끌어 놓으면 일반 DuckDB SQL로 컴파일됩니다. 300개 이상의 커넥터와 내장 MCP 서버. [![릴리스](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml/badge.svg)](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml)

## 개발 도구

* [7df-lab/devo](https://github.com/7df-lab/devo) - 단일 바이너리로 실행되는 가벼운 모델 중립 코딩 에이전트. 빠르고 토큰 효율적이며 폭넓게 설정할 수 있습니다. [![CI](https://github.com/7df-lab/devo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/7df-lab/devo/actions/workflows/ci.yml)
* [aaif-goose/goose](https://github.com/aaif-goose/goose) - 엔지니어링 작업을 자동화하는 오픈 소스 로컬 AI 에이전트.
* [agavra/tuicr](https://github.com/agavra/tuicr) [[tuicr](https://crates.io/crates/tuicr)] - vim 키 바인딩을 갖춘 코드 검토 TUI. 연속 차이 뷰어, PR 스타일 댓글, GitHub/GitLab/클립보드 내보내기를 제공합니다. git, jj, mercurial을 지원합니다. [![Crates.io](https://img.shields.io/crates/v/tuicr)](https://crates.io/crates/tuicr)
* [armgabrielyan/deadbranch](https://github.com/armgabrielyan/deadbranch) [[deadbranch](https://crates.io/crates/deadbranch)] - 오래된 git 브랜치를 안전하게 정리합니다 [![CI](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml)
* [astral-sh/uv](https://github.com/astral-sh/uv) [[uv](https://crates.io/crates/uv)] - Rust로 작성한 매우 빠른 Python 패키지 및 프로젝트 관리자. [![CI](https://github.com/astral-sh/uv/workflows/CI/badge.svg)](https://github.com/astral-sh/uv/actions)
* [ATAC](https://github.com/Julien-cpsn/ATAC) - Rust로 만든 기능이 풍부한 TUI API 클라이언트. ATAC은 무료 오픈 소스이며 오프라인에서 계정 없이 사용할 수 있습니다.
* [bacon](https://github.com/Canop/bacon) - cargo-watch와 비슷한 백그라운드 rust 코드 검사기
* [biome](https://github.com/biomejs/biome) - 웹 프로젝트 유지보수 기능을 제공하는 도구 체인. Biome은 CLI와 LSP로 사용할 수 있는 포매터와 린터를 제공합니다
* [cachix/devenv](https://github.com/cachix/devenv) - Nix를 사용하는 빠르고 선언적이며 재현 가능하고 조합 가능한 개발 환경 [![CI](https://github.com/cachix/devenv/actions/workflows/release.yml/badge.svg)](https://github.com/cachix/devenv/actions/workflows/release.yml)
* [claudectl](https://github.com/mercurialsolo/claudectl) [[claudectl](https://crates.io/crates/claudectl)] - 도구 호출의 자동 승인/거부를 학습하는 로컬 LLM 두뇌(ollama/llama.cpp/vLLM)를 갖춘 Claude Code 자동 조종 도구. 다중 세션 오케스트레이션, 상태 모니터링, 비용 제어. [![CI](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml/badge.svg)](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml)
* [clippy](https://crates.io/crates/clippy) - Rust 린트
* [clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) - git 메타데이터에서 변경 이력을 생성합니다([conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html))
* [cloudflare/foundations](https://github.com/cloudflare/foundations) - 분산 프로덕션급 시스템을 위해 프로그램을 확장하도록 설계한 모듈식 Rust 라이브러리인 Foundations.
* [cordx56/rustowl](https://github.com/cordx56/rustowl) [[rustowl](https://crates.io/crates/rustowl)] - Rust의 소유권과 수명을 시각화합니다 [![CI](https://github.com/cordx56/rustowl/actions/workflows/checks.yml/badge.svg?branch=main)](https://github.com/cordx56/rustowl/actions/workflows/checks.yml)
* [create-rust-app](https://github.com/Wulf/create-rust-app) - 명령 하나로 현대적인 rust+react 웹 앱을 구성합니다. [![크레이트](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/create-rust-app)
* [dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) - cargo 프로젝트와 모든 의존성에 대한 ctags/etags를 생성합니다
* [datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - 유연한 규칙을 갖춘 강력한 데이터베이스 익명화 도구 [![빌드 배지](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [delta](https://crates.io/crates/git-delta) - git 및 diff 출력용 구문 강조 도구[![빌드 배지](https://github.com/dandavison/delta/actions/workflows/ci.yml/badge.svg)](https://github.com/dandavison/delta//actions)
* [dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) - `.env` 파일용 린터 [![빌드 배지](https://github.com/dotenv-linter/dotenv-linter/actions/workflows/ci.yml/badge.svg)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [enroute-sh/enroute](https://github.com/enroute-sh/enroute) - 객체 저장소 기반의 프로그래밍 가능한 git 인프라
* [envio](https://github.com/humblepenguinn/envio) - 환경 변수 관리를 위한 현대적이고 안전한 CLI 도구 [![빌드 배지](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml/badge.svg?branch=main)](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml)
* [Feel-ix-343/markdown-oxide](https://github.com/Feel-ix-343/markdown-oxide) - Neovim, VSCode, Zed, Helix, Kakoune용 Obsidian 스타일 위키 링크, 역링크, 일일 메모를 지원하는 PKM 마크다운 언어 서버
* [FerrLabs/FerrFlow](https://github.com/FerrLabs/FerrFlow) [[ferrflow](https://crates.io/crates/ferrflow)] - Conventional Commits 기반의 의미적 버전 관리, 변경 이력, 태그 릴리스. 모노레포와 16개 버전 파일 형식을 지원합니다 [![빌드 배지](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml)
* [firelock-ai/kin](https://github.com/firelock-ai/kin) - 사람과 AI 에이전트를 위한 그래프 네이티브 코드 저장소. Kin은 코드를 변경하기 전에 그 영향을 사용자와 AI 에이전트가 이해하도록 돕습니다.
* [Flox](https://github.com/flox/flox) - 가상 환경과 패키지 관리자를 하나로 통합한 Flox.
* [forgecode](https://github.com/tailcallhq/forgecode) - 코드 생성과 편집을 위한 터미널 기반 AI 페어 프로그래머. [![웹사이트](https://img.shields.io/badge/website-forgecode.dev-blue)](https://forgecode.dev/)
* [frolic](https://github.com/frolicflow/Frolic) - 고객용 대시보드를 10배 빠르게 만드는 API 계층
* [fw](https://github.com/brocode/fw) - 작업 공간 생산성 향상 도구 [![Rust](https://github.com/brocode/fw/actions/workflows/rust.yml/badge.svg)](https://github.com/brocode/fw/actions/workflows/rust.yml)
* [fzf-make](https://github.com/kyu08/fzf-make) [[fzf-make](https://crates.io/crates/fzf-make)] - 미리보기 창을 갖춘 퍼지 검색기로 make 타깃을 실행하는 명령줄 도구. [![crates.io](https://img.shields.io/crates/v/fzf-make?style=flatflat-square)](https://crates.io/crates/fzf-make)
* [geiger](https://github.com/geiger-rs/cargo-geiger) - 크레이트와 모든 의존성의 unsafe 코드 사용 통계를 나열하는 프로그램 [![빌드 상태](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/geiger-rs.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [git-cliff](https://github.com/orhun/git-cliff) - Conventional Commit 명세를 따르는 폭넓게 설정 가능한 변경 이력 생성기 ![https://github.com/orhun/git-cliff/actions](https://img.shields.io/github/actions/workflow/status/orhun/git-cliff/ci.yml?branch=main&label=build)
* [git-journal](https://github.com/saschagrunert/git-journal/) - Git 커밋 메시지 및 변경 이력 생성 프레임워크
* [git-time-machine](https://github.com/dinakars777/git-time-machine) - git 실수를 되돌리는 시각적 git reflog TUI [![크레이트](https://img.shields.io/crates/v/git-time-machine.svg)](https://crates.io/crates/git-time-machine) [![빌드 배지](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml/badge.svg)](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml)
* [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) [[gix](https://crates.io/crates/gix)] - 고성능 저수준 크레이트와 clone, fetch, status, diff, commit, config, refs 등의 CLI 도구를 갖춘 순수 Rust Git 구현체. [![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
* [hot-lib-reloader](https://github.com/rksm/hot-lib-reloader-rs) - Rust 코드 핫 리로드 [![빌드 배지](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml)
* [intelli-shell](https://github.com/lasantosr/intelli-shell) - 자리표시자를 포함한 명령을 북마크하고 언제든 검색하거나 자동 완성합니다 [![크레이트](https://img.shields.io/crates/v/intelli-shell.svg)](https://crates.io/crates/intelli-shell) [![빌드 배지](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml/badge.svg)](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml)
* [j178/prek](https://github.com/j178/prek) - Rust로 작성한 더 빠르고 의존성이 없으며 바로 대체 가능한 pre-commit 대안.
* [jj-vcs/jj](https://github.com/jj-vcs/jj) - 깔끔한 CLI, 일급 충돌 처리, 자동 리베이스를 갖춘 Git 호환 버전 관리 시스템 [![릴리스](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
* [just](https://github.com/casey/just) - 프로젝트별 작업을 위한 편리한 명령 실행기
* [mask](https://github.com/jacobdeichert/mask) - 간단한 마크다운 파일로 정의하는 CLI 작업 실행기 [![빌드 배지](https://github.com/jacobdeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jacobdeichert/mask/actions?query=workflow%3ACI)
* [mise](https://github.com/jdx/mise) [[mise](https://crates.io/crates/mise)] - 다중 언어 도구 버전 관리자 및 작업 실행기. 더 빠른 성능으로 asdf를 바로 대체합니다. [![빌드 배지](https://github.com/jdx/mise/actions/workflows/test.yml/badge.svg)](https://github.com/jdx/mise/actions/workflows/test.yml)
* [Module Linker](https://github.com/fiatjaf/module-linker) - GitHub의 `mod`, `use`, `extern crate` 구문 참조에 `<a>` 링크를 추가하는 확장.
* [Muvon/octocode](https://github.com/Muvon/octocode) [[octocode](https://crates.io/crates/octocode)] - GraphRAG 지식 그래프와 MCP 서버를 갖춘 의미 기반 코드 인덱서. Tree-sitter AST 파싱, ast-grep 구조 검색, LanceDB 벡터 저장소, 코드 시그니처 보기를 제공합니다. Claude/Cursor/Windsurf 같은 AI 도우미용 CLI 및 MCP 서버 모드. [![CI](https://github.com/Muvon/octocode/actions/workflows/ci.yml/badge.svg)](https://github.com/Muvon/octocode/actions/workflows/ci.yml)
* [persiyanov/herdr-reviewr](https://github.com/persiyanov/herdr-reviewr) - 코딩 에이전트의 변경 사항을 검토하고 줄별 댓글을 Claude Code, Codex, OpenCode, Pi에 보내는 터미널 패널. [![CI](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml/badge.svg)](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml)
* [prefix-dev/pixi](https://github.com/prefix-dev/pixi) [[pixi](https://crates.io/crates/pixi)] - conda 생태계 기반의 다중 언어 프로젝트용 빠른 패키지 관리 및 워크플로 도구.
* [ptags](https://github.com/dalance/ptags) - git 저장소용 병렬 universal-ctags 래퍼
* [Racer](https://github.com/racer-rust/racer) - Rust 코드 자동 완성
* [reflex-search/reflex](https://github.com/reflex-search/reflex) [[reflex-search](https://crates.io/crates/reflex-search)] - AI 코딩 에이전트용 로컬 우선 전문 코드 검색 엔진. 트라이그램 인덱스, 100ms 미만 쿼리, MCP 서버 모드, tree-sitter 기반 18개 언어 지원.
* [Rust Search Extension](https://github.com/huhu/rust-search-extension) - 주소 표시줄(옴니박스)에서 크레이트와 문서를 검색하는 편리한 브라우저 확장. [![빌드 상태](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [Rustup](https://github.com/rust-lang/rustup) - Rust 도구 체인 설치 프로그램 [![빌드 배지](https://github.com/rust-lang/rustup/actions/workflows/ci.yaml/badge.svg)](https://github.com/rust-lang/rustup/actions)
* [scriptisto](https://github.com/igor-petruk/scriptisto) - 컴파일 언어로 단일 파일 스크립트를 작성할 수 있는 언어 독립적인 "shebang 인터프리터". [![빌드 상태](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [sstraus/tuicommander](https://github.com/sstraus/tuicommander) - 각각 자체 git worktree에서 여러 AI 코딩 에이전트를 병렬 실행하는 데스크톱 작업 공간. 에이전트 상태 감지, 차이 보기, PR 관리, MCP 프록시 허브를 제공합니다 [![CI](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml)
* [Terrain](https://github.com/sopaco/terrain) - 코드베이스를 에이전트가 사용할 수 있게 만드는 AI 네이티브 엔지니어링 환경 관리.
* [typos](https://github.com/crate-ci/typos) [[typos-cli](https://crates.io/crates/typos-cli)] - 소스 코드 맞춤법 검사기
* [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) - Vite, Vitest, Oxlint, Rolldown 등을 단일 Rust 기반 CLI(`vp`)로 결합하는 통합 웹 개발 도구 체인
* [VT Code](https://crates.io/crates/vtcode) - 현대적인 TUI와 tree-sitter 및 ast-grep 기반의 깊이 있는 의미적 코드 이해를 결합한 터미널 코딩 에이전트.
* [Wilfred/difftastic](https://github.com/Wilfred/difftastic) [[difftastic](https://crates.io/crates/difftastic)] - 30개 이상의 프로그래밍 언어를 지원하는 구문 인식 구조적 차이 비교 도구
* [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) [[lean-ctx](https://crates.io/crates/lean-ctx)] - AI 코딩 에이전트용 컨텍스트 런타임. 도구 및 터미널 출력을 압축하여 LLM 토큰 사용을 줄이는 MCP 서버와 셸 훅. Tree-sitter 파싱, 세션 캐싱. [![CI](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml/badge.svg)](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml)

### 빌드 시스템

* [better-fullstack](https://github.com/Marve10s/Better-Fullstack) - TypeScript, Go, Python과 함께 Rust(Axum, Actix Web, Leptos, Dioxus, SeaORM, SQLx, tonic, async-graphql)를 지원하는 종단 간 풀스택 스캐폴딩 도구. 사용자나 AI 에이전트가 바로 사용할 수 있는 코드를 제공합니다.
* [Cargo](https://crates.io/) - Rust 패키지 관리자
  * [cargo-all-features](https://github.com/frewsxcv/cargo-all-features) - 모든 기능 조합의 테스트, 빌드 등을 간소화하는 설정 가능한 하위 명령 [![CI](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml/badge.svg)](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml)
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) - 마이크로 벤치마크 비교 유틸리티
  * [cargo-bins/cargo-binstall](https://github.com/cargo-bins/cargo-binstall) [[cargo-binstall](https://crates.io/crates/cargo-binstall)] - 소스에서 컴파일하지 않고 미리 빌드한 산출물을 가져오는 빠른 Rust 크레이트 바이너리 설치 도구 [![CI](https://github.com/cargo-bins/cargo-binstall/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-bins/cargo-binstall/actions)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) - meta-rust의 클래스를 활용하여 BitBake 레시피를 생성하는 cargo 확장
  * [cargo-cache](https://crates.io/crates/cargo-cache) - cargo 캐시(`~/.cargo/`/`${CARGO_HOME}`) 검사/관리/정리, 크기 출력 등 [![빌드 상태](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) - 정확성 검사만 필요할 때 더 빠르게 컴파일하는 데 유용한 `cargo rustc -- -Zno-trans` 래퍼
  * [cargo-commander](https://crates.io/crates/cargo-commander) - `package.json`의 scripts 섹션처럼 CLI 명령을 실행하는 `cargo` 하위 명령 [![빌드 및 테스트](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml/badge.svg)](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml)
  * [cargo-count](https://crates.io/crates/cargo-count) - unsafe 통계를 포함한 cargo 프로젝트의 소스 코드 수와 세부 정보를 나열합니다
  * [cargo-deb](https://crates.io/crates/cargo-deb) - 바이너리 Debian 패키지를 생성합니다
  * [cargo-depgraph](https://crates.io/crates/cargo-depgraph) - cargo 메타데이터와 graphviz로 cargo 프로젝트의 의존성 그래프를 만듭니다
  * [cargo-do](https://crates.io/crates/cargo-do) - 여러 cargo 명령을 연속으로 실행합니다
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) - 트리 내 eclass를 사용하여 ebuild를 생성하는 cargo 확장
  * [cargo-edit](https://crates.io/crates/cargo-edit) - 명령줄에서 Cargo.toml 파일을 읽고 써서 의존성을 추가하고 나열합니다
  * [cargo-generate](https://github.com/cargo-generate/cargo-generate) - 기존 git 저장소를 템플릿으로 활용하는 rust 프로젝트 생성기.
  * [cargo-info](https://crates.io/crates/cargo-info) - 명령줄에서 crates.io에 크레이트 세부 정보를 조회합니다
  * [cargo-license](https://crates.io/crates/cargo-license) - 모든 의존성의 라이선스를 빠르게 보는 cargo 하위 명령.
  * [cargo-limit](https://crates.io/crates/cargo-limit) - 잡음이 적은 Cargo: 오류를 수정할 때까지 경고 생략, Neovim 연동 등. [![빌드 배지](https://github.com/cargo-limit/cargo-limit/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-limit/cargo-limit/actions)
  * [cargo-machete](https://github.com/bnjbvr/cargo-machete) [[cargo-machete](https://crates.io/crates/cargo-machete)] - Cargo.toml에서 사용하지 않는 의존성을 감지하는 간단한 도구.
  * [cargo-make](https://crates.io/crates/cargo-make) - 작업 실행기 및 빌드 도구. [![빌드 배지](https://github.com/sagiegurari/cargo-make/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/cargo-make/actions)
  * [cargo-modules](https://crates.io/crates/cargo-modules) - 크레이트 모듈의 트리 형태 개요를 보여 주는 cargo 플러그인.
  * [cargo-multi](https://crates.io/crates/cargo-multi) - 여러 크레이트에서 지정한 cargo 명령을 실행합니다
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) - Rust 의존성의 새 버전 제공 여부 또는 구버전 여부를 표시합니다
  * [cargo-rdme](https://github.com/orium/cargo-rdme) [[cargo-rdme](https://crates.io/crates/cargo-rdme)] - 크레이트 문서에서 README를 생성하는 Cargo 하위 명령. [![빌드 배지](https://github.com/orium/cargo-rdme/workflows/CI/badge.svg)](https://github.com/orium/cargo-rdme/actions?query=workflow%3ACI)
  * [cargo-release](https://crates.io/crates/cargo-release) - git으로 관리하는 cargo 프로젝트를 릴리스하는 도구. 빌드, 태그, 게시, 문서, 푸시 [![Rust](https://github.com/crate-ci/cargo-release/actions/workflows/ci.yml/badge.svg)](https://github.com/crate-ci/cargo-release/actions/workflows/rust.yml)
  * [cargo-script](https://crates.io/crates/cargo-script) - Cargo 패키지 생태계를 활용하는 Rust "스크립트"를 빠르고 쉽게 실행합니다
  * [cargo-udeps](https://github.com/est31/cargo-udeps) [[cargo-udeps](https://crates.io/crates/cargo-udeps)] - 사용하지 않는 의존성을 찾습니다
  * [cargo-update](https://crates.io/crates/cargo-update) - 설치된 실행 파일의 업데이트를 확인하고 적용하는 cargo 하위 명령
  * [cargo-watch](https://crates.io/crates/cargo-watch) - 소스가 변경되면 프로젝트를 컴파일하는 cargo 유틸리티
  * [dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) - 소스 코드의 매크로를 확장합니다
* CMake
  * [Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) - Rust 라이브러리를 CMake 프로젝트에 통합하는 데 유용합니다
  * [SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) - Rust와 CMake의 사용법을 보여 주는 예제 프로젝트
* [facebook/buck2](https://github.com/facebook/buck2) - [Buck2](https://buck2.build/)는 Rust로 만든 대규모 빌드 도구입니다
* [Fleet](https://github.com/suptejas/fleet) [[fleet-rs](https://crates.io/crates/fleet-rs)] - Rust용 매우 빠른 빌드 도구.
* GitHub actions
  * [icepuma/rust-action](https://github.com/icepuma/rust-action) - rust GitHub 액션
* [Nix](https://nixos.org/)
  * [nix-community/fenix](https://github.com/nix-community/fenix) - nix용 Rust 도구 체인과 rust analyzer 나이틀리 [![빌드 배지](https://github.com/nix-community/fenix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/fenix/actions/workflows/ci.yml)
* [pantsbuild/pants](https://github.com/pantsbuild/pants) - [Pants](https://www.pantsbuild.org/)는 Rust로 만든 모든 규모의 코드베이스를 위한 빠르고 확장 가능하며 사용자 친화적인 빌드 시스템입니다.
* [rolldown/rolldown](https://github.com/rolldown/rolldown) - Vite의 미래 번들러를 지향하는 Rust 기반 JavaScript/TypeScript 번들러.
* [rui314/mold](https://github.com/rui314/mold) - Linux, macOS, Windows(ELF, Mach-O, PE)용 현대적인 고속 링커
* [tracemachina/nativelink](https://github.com/TraceMachina/nativelink) - [NativeLink](https://nativelink.com)는 [Buck2](https://buck2.build/), [Bazel](https://bazel.build/), [Pants](https://www.pantsbuild.org/) 등의 클라이언트 빌드 시스템을 위한 rust 기반 백엔드 원격 실행 플랫폼입니다. [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TraceMachina/nativelink/badge)](https://securityscorecards.dev/viewer/?uri=github.com/TraceMachina/nativelink) [![OpenSSF 모범 사례](https://www.bestpractices.dev/projects/8050/badge)](https://www.bestpractices.dev/projects/8050)
* [vercel/turborepo](https://github.com/vercel/turborepo) - Rust로 작성한 JavaScript 및 TypeScript 모노레포용 고성능 빌드 시스템. 증분 연산, 원격 캐싱, 병렬 작업 실행을 제공합니다.
* [wislertt/zerv](https://github.com/wislertt/zerv) [[zerv](https://crates.io/crates/zerv)] - 모든 Git 상태에서 빌드마다 버전을 생성하고 SemVer, PEP 440, CalVer를 출력하는 동적 버전 관리 도구 [![CI](https://github.com/wislertt/zerv/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/wislertt/zerv/actions/workflows/cd.yml)

### 디버깅

* GDB
  * [gdbgui](https://github.com/cs01/gdbgui) - C, C++, Rust, go를 디버깅하는 gdb용 브라우저 기반 프런트엔드.
* [godzie44/BugStalker](https://github.com/godzie44/BugStalker) - Linux x86-64용 현대적인 디버거. Rust 프로그램용으로 Rust로 작성했습니다.
* [kxxt/tracexec](https://github.com/kxxt/tracexec) [[tracexec](https://crates.io/crates/tracexec)] - execve{,at}와 실행 전 동작 추적기 및 디버거 런처.
* LLDB
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - [Visual Studio Code](https://code.visualstudio.com/)용 LLDB 확장.

### 배포

* Docker
  * [emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) - musl-libc와 musl-gcc 및 유용한 C 라이브러리의 정적 버전을 사용하여 정적 Rust 바이너리를 컴파일하는 Docker 이미지
  * [kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) - 매우 작은 rust docker 이미지의 예제 프로젝트
  * [lenra-io/dofigen](https://github.com/lenra-io/dofigen) [[dofigen](https://crates.io/crates/dofigen/)] - 간소화된 YAML 또는 JSON 형식의 설명을 사용하는 Dockerfile 생성기 ![Rust CI](https://github.com/lenra-io/dofigen/actions/workflows/build_ci.yml/badge.svg)
  * [liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) - 여러 버전의 Rust Docker 이미지(musl 도구 포함)
  * [LukeMathWalker/cargo-chef](https://github.com/LukeMathWalker/cargo-chef) - Docker 빌드 간 원격 의존성 컴파일을 캐시하는 도구 및 미리 빌드한 이미지.
  * [moghtech/komodo](https://github.com/moghtech/komodo) - 서버 수 제한 없이 웹 UI와 API로 여러 서버에 소프트웨어를 빌드하고 배포하는 도구
  * [rust-cross/rust-musl-cross](https://github.com/rust-cross/rust-musl-cross) - musl-cross로 정적 Rust 바이너리를 컴파일하는 Docker 이미지 [![빌드](https://github.com/rust-cross/rust-musl-cross/workflows/Build/badge.svg)](https://github.com/rust-cross/rust-musl-cross/actions?query=workflow%3ABuild)
  * [rust-lang/docker-rust](https://github.com/rust-lang/docker-rust) - 공식 Rust Docker 이미지
  * [Stavrospanakakis/is_ready](https://github.com/Stavrospanakakis/is_ready) - 여러 서비스가 준비될 때까지 기다립니다 ![빌드](https://github.com/Stavrospanakakis/is_ready/actions/workflows/release.yml/badge.svg)
* Heroku
  * [emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) - Heroku의 Rust 애플리케이션용 빌드팩
* [release-plz](https://github.com/release-plz/release-plz) [[release-plz](https://crates.io/crates/release-plz)] - 변경 이력 생성과 semver 검사를 통해 CI에서 크레이트를 릴리스합니다. [![빌드 배지](https://github.com/release-plz/release-plz/workflows/CI/badge.svg)](https://github.com/release-plz/release-plz/actions)

### 임베디드

[Rust Embedded](https://rust-embedded.org/)는 리소스 제약 환경과 비전통적 플랫폼에서 Rust 사용 경험 전반을 개선하는 데 집중합니다. 엄선한 더 폭넓은 임베디드 Rust 자료 목록은 [awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust)를 참고하세요.

* Arduino
  * [avr-rust/ruduino](https://github.com/avr-rust/ruduino) - Arduino Uno용 재사용 가능한 구성 요소.
* 크로스 컴파일
  * [japaric/rust-cross](https://github.com/japaric/rust-cross) - Rust 프로그램 크로스 컴파일에 대해 알아야 할 모든 것
  * [japaric/xargo](https://github.com/japaric/xargo) - ARM Cortex-M 같은 맞춤형 베어메탈 타깃으로 Rust 프로그램을 손쉽게 크로스 컴파일합니다
* 개발 도구
  * [matheuswhite/scope-rs](https://github.com/matheuswhite/scope-rs) [[scope-monitor](https://crates.io/crates/scope-monitor)] - 16진수/@tag 입력 매크로, 검색, 세션 기록, Lua 플러그인을 갖춘 크로스 플랫폼 직렬 포트 및 RTT 모니터 TUI. [![빌드 상태](https://github.com/matheuswhite/scope-rs/actions/workflows/build.yml/badge.svg)](https://github.com/matheuswhite/scope-rs/actions)
  * [probe-rs/probe-rs](https://github.com/probe-rs/probe-rs) [[probe-rs-tools](https://crates.io/crates/probe-rs-tools)] - ARM 및 RISC-V 마이크로컨트롤러를 플래시하고 디버깅하는 임베디드 디버깅 도구 모음.
  * [Vaishnav-Sabari-Girish/ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - 플로터 TUI를 갖춘 최소한의 직렬 모니터.
* Espressif
  * [esp-rs](https://github.com/esp-rs) - Espressif Systems가 생산하는 다양한 SoC와 모듈에서 Rust 프로그래밍 언어를 사용할 수 있게 하는 여러 커뮤니티 프로젝트의 중심지.
* 펌웨어
  * [oreboot/oreboot](https://github.com/oreboot/oreboot) - oreboot는 C를 제거하고 Rust로 작성한 coreboot의 포크입니다
* nRF
  * [nrf-rs/nrf-hal](https://github.com/nrf-rs/nrf-hal) - nRF 계열 장치용 Rust HAL

### FFI

[외부 함수 인터페이스](https://doc.rust-lang.org/book/first-edition/ffi.html), [The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/)(다른 언어에서 Rust로 작성한 코드를 사용하는 예제 모음), [Rust로 작성한 FFI 예제](https://github.com/alexcrichton/rust-ffi-examples)도 참고하세요.

* C
  * [gtk-rs/gir](https://github.com/gtk-rs/gir) - GObject 기반 C 라이브러리에서 안전한 Rust 바인딩을 만드는 코드 생성기.
  * [mozilla/cbindgen](https://github.com/mozilla/cbindgen) - Rust 소스 파일에서 C 헤더 파일을 생성합니다. Gecko에서 WebRender용으로 사용합니다
  * [Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) - Rust 소스 파일에서 C 헤더 파일을 생성합니다
  * [trevyn/librclone](https://github.com/trevyn/librclone) [[librclone](https://crates.io/crates/librclone)] - librclone C 라이브러리용 Rust 바인딩.
* C#
  * [csbindgen](https://github.com/Cysharp/csbindgen) - Rust 소스 파일용 C# 바인딩을 생성합니다
* C++
  * [dtolnay/cxx](https://github.com/dtolnay/cxx) - Rust와 C++ 사이의 안전한 상호운용성 [![빌드 배지](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [rust-cpp](https://crates.io/crates/cpp) - Rust에 C++ 코드를 직접 삽입합니다. [![빌드 상태](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
  * [rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) - Rust 바인딩 생성기
* Erlang
  * [rusterlium/rustler](https://github.com/rusterlium/rustler) - Erlang NIF 함수를 만드는 안전한 Rust 브리지
* Java
  * [bennettanderson/rjni](https://github.com/benanders/rjni) - Rust에서 Java 사용
  * [drrb/java-rust-example](https://github.com/drrb/java-rust-example) - Java에서 Rust 사용
  * [j4rs](https://crates.io/crates/j4rs) - Rust에서 Java 사용
  * [jni](https://crates.io/crates/jni) - Java에서 Rust 사용
  * [jni-sys](https://crates.io/crates/jni-sys) - jni.h에 대응하는 Rust 정의
  * [rucaja](https://crates.io/crates/rucaja) - Rust에서 Java 사용
* Lua
  * [jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) - Rust용 Lua 5.3 바인딩
  * [lilyball/rust-lua](https://github.com/lilyball/rust-lua) - Lua 5.1용 안전한 Rust 바인딩
  * [mlua-rs/mlua](https://github.com/mlua-rs/mlua) - async/await를 지원하는 Rust용 고수준 Lua 5.4/5.3/5.2/5.1(LuaJIT 포함) 및 Roblox Luau 바인딩 [![빌드 배지](https://github.com/mlua-rs/mlua/workflows/CI/badge.svg)](https://github.com/mlua-rs/mlua/actions)
  * [tickbh/td_rlua](https://github.com/tickbh/td_rlua) [[td_rlua](https://crates.io/crates/td_rlua)] - Rust용 비용 없는 고수준 lua 5.3 래퍼
  * [tomaka/hlua](https://github.com/tomaka/hlua) - Lua와 연동하는 Rust 라이브러리
* mruby
  * [anima-engine/mrusty](https://github.com/anima-engine/mrusty) - Rust용 안전한 mruby 바인딩
* Node.js
  * [infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - Rust로 nodejs 모듈을 쉽게 생성하는 방법
  * [neon-bindings/neon](https://github.com/neon-bindings/neon) - 안전하고 빠른 네이티브 Node.js 모듈을 작성하는 Rust 바인딩
  * [zhangyuang/node-ffi-rs](https://github.com/zhangyuang/node-ffi-rs) - Rust와 N-API로 작성하여 Node.js에 인터페이스(FFI) 기능을 제공하는 모듈
* Objective-C
  * [SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) - Rust용 Objective-C 런타임 바인딩 및 래퍼
* PHP
  * [phper-framework/phper](https://github.com/phper-framework/phper) - 가능한 한 순수하고 안전한 Rust로 PHP 확장을 작성할 수 있게 하는 프레임워크
* Prolog
  * [mthom/scryer-prolog](https://github.com/mthom/scryer-prolog/) - Scryer Prolog는 Rust로 작성한 자유 소프트웨어 ISO Prolog 시스템입니다
* Python
  * [dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) - Python 바인딩
  * [getsentry/milksnake](https://github.com/getsentry/milksnake) - 동적 링크 라이브러리를 가능한 한 이식성 높은 방식으로 Python 휠에 배포하는 python setuptools 확장.
  * [PyO3/PyO3](https://github.com/PyO3/PyO3) - Python 인터프리터용 Rust 바인딩
  * [RustPython](https://github.com/RustPython/RustPython) - Rust로 작성한 Python 인터프리터 [![빌드 상태](https://github.com/RustPython/RustPython/workflows/CI/badge.svg)](https://github.com/RustPython/RustPython/actions?query=workflow%3ACI)
* Ruby
  * [d-unsed/ruru](https://github.com/d-unsed/ruru) - Rust로 작성한 네이티브 Ruby 확장
  * [danielpclark/rutie](https://github.com/danielpclark/rutie) - Rust로 작성한 네이티브 Ruby 확장 및 그 반대
* Web Assembly
  * [rhysd/wain](https://github.com/rhysd/wain) - wain: 의존성 없이 안전한 Rust로 처음부터 만든 WebAssembly 인터프리터 [![빌드 배지](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)
  * [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen) - wasm 모듈과 JS 사이의 고수준 상호작용을 돕는 프로젝트.
  * [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) - :package: :sparkles: wasm을 패키징하고 npm에 게시하세요!

### 포매터

* [astral-sh/ruff](https://github.com/astral-sh/ruff) - 매우 빠른 Python 린터 및 코드 포매터 [![Actions 상태](https://github.com/astral-sh/ruff/workflows/CI/badge.svg)](https://github.com/astral-sh/ruff/actions)
* [dprint](https://github.com/dprint/dprint) - 플러그인과 설정을 지원하는 코드 서식 플랫폼 [![빌드 배지](https://github.com/dprint/dprint/workflows/CI/badge.svg)](https://github.com/dprint/dprint/actions?query=workflow%3ACI)
* [Prettier Rust](https://github.com/jinxdash/prettier-plugin-rust) - 잘못된 구문을 자동 수정하는 뚜렷한 철학의 Rust 코드 포매터([Prettier](https://prettier.io/) 커뮤니티 플러그인)
* [rustfmt](https://github.com/rust-lang/rustfmt) - Rust 팀이 유지보수하며 cargo에 포함된 Rust 코드 포매터
* [rvben/rumdl](https://github.com/rvben/rumdl) [[rumdl](https://crates.io/crates/rumdl)] - Rust로 작성한 빠른 마크다운 린터 및 포매터 [![CI](https://github.com/rvben/rumdl/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rvben/rumdl/actions/workflows/ci.yml)

### IDE

[Rust 도구](https://rust-lang.org/tools/)도 참고하세요.

  * [Eclipse](https://www.eclipse.org/)
    * [Eclipse Corrosion](https://github.com/eclipse-corrosion/corrosion) - Rust Analyzer 언어 서버, Cargo 실행기, gdb 디버거 연동으로 풍부한 편집 경험을 제공하는 Eclipse IDE용 Rust 개발 플러그인
  * [Emacs](https://www.gnu.org/software/emacs/)
    * [emacs-racer](https://github.com/racer-rust/emacs-racer) - 자동 완성([company](https://company-mode.github.io)와 [auto-complete](https://github.com/auto-complete/auto-complete)도 참고)
    * [flycheck-rust](https://github.com/flycheck/flycheck-rust) - [Flycheck](https://github.com/flycheck/flycheck)용 Rust 지원
    * [rust-mode](https://github.com/rust-lang/rust-mode) - Rust 메이저 모드
    * [rustic](https://github.com/emacs-rustic/rustic) - Emacs용 Rust 개발 환경 [![빌드 배지](https://github.com/emacs-rustic/rustic/workflows/CI/badge.svg)](https://github.com/emacs-rustic/rustic/actions?query=workflow%3ACI)
  * [gitpod.io](https://gitpod.io) - Rust Language Server 기반의 완전한 Rust 지원 온라인 IDE
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) - 버전 3.22.2부터 rust와 cargo를 네이티브 지원
  * [IntelliJ](https://www.jetbrains.com/idea/)
    * [intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) - IntelliJ Platform용 Rust 플러그인
  * [Kakoune](http://kakoune.org/)
    * [kakoune-lsp](https://github.com/kakoune-lsp/kakoune-lsp/) - [LSP](https://microsoft.github.io/language-server-protocol/) 클라이언트. Rust로 구현했으며 rls를 기본 지원합니다.
  * [lapce](https://github.com/lapce/lapce) - Rust로 작성한 초고속 강력한 코드 편집기. [![빌드 배지](https://github.com/lapce/lapce/actions/workflows/release.yml/badge.svg)](https://github.com/lapce/lapce/actions/workflows/release.yml)
  * [Ride](https://github.com/madeso/ride) - Rust IDE
  * [RustRover](https://www.jetbrains.com/rust/) - JetBrains의 강력한 Rust IDE. 개인 비상업적 용도로 무료입니다
  * [Sublime Text](https://www.sublimetext.com/)
    * [rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) - 공식 Rust 패키지
  * [Vim](https://vim.sourceforge.io/) - 어디서나 쓰이는 텍스트 편집기
    * [autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) - [LSP](https://microsoft.github.io/language-server-protocol/) 클라이언트. Rust로 구현했으며 rls를 기본 지원합니다.
    * [cargo.nvim](https://github.com/nwiizo/cargo.nvim) - Cargo 명령과 원활하게 연동하는 Neovim 플러그인.
    * [crates.nvim](https://github.com/Saecki/crates.nvim) - crates.io 의존성 관리를 돕는 플러그인.
    * [rust.vim](https://github.com/rust-lang/rust.vim) - 파일 감지, 구문 강조, 서식 지정, Syntastic 연동 등을 제공합니다.
    * [vim-racer](https://github.com/racer-rust/vim-racer) - vim에서 [Racer](https://github.com/racer-rust/racer)로 Rust 코드 자동 완성과 탐색을 사용할 수 있게 합니다.
  * Visual Studio
    * [PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) - Rust용 Visual Studio 확장 [![빌드 상태](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - LLDB 확장
    * [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - 의존성을 손쉽게 관리합니다
    * [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - vscode의 TOML 지원
    * [Prettier - Code formatter (Rust)](https://marketplace.visualstudio.com/items?itemName=jinxdash.prettier-rust) - 잘못된 구문을 자동 수정하는 뚜렷한 철학의 Rust 코드 포매터([Prettier](https://prettier.io/) 커뮤니티 플러그인)
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - RLS의 대안인 rust 언어 서버

### 프로파일링

* [Bencher](https://github.com/bencherdev/bencher) - CI에서 성능 저하를 감지하도록 설계한 지속적 벤치마킹 도구 모음
* [bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) - 통계 기반 벤치마킹 라이브러리
* [Bytehound](https://github.com/koute/bytehound) - Linux용 메모리 프로파일러
* [cong-or/hud](https://github.com/cong-or/hud) - Tokio 런타임을 막는 원인을 찾습니다. 계측이 필요 없는 eBPF 프로파일러.
* [Divan](https://github.com/nvzqz/divan) - 메모리 할당 프로파일링을 갖춘 간단하면서도 강력한 벤치마킹 라이브러리
* [ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) - 스톱워치 라이브러리
* 플레임 그래프
  * [llogiq/flame](https://github.com/llogiq/flame) - rust용 코드 삽입형 플레임 그래프 프로파일링 도구
* [g3bench](https://github.com/bytedance/g3) - HTTP 1.x, HTTP 2, HTTP 3, TLS Handshake, DNS, Cloudflare Keyless를 지원하는 벤치마크 도구
* [pawurb/hotpath](https://github.com/pawurb/hotpath-rs) - 코드가 시간을 소비하고 메모리를 할당하는 정확한 위치를 보여 주는 간단한 프로파일러 [![GH Actions](https://github.com/pawurb/hotpath-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pawurb/hotpath-rs/actions)
* [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) - 명령줄 벤치마킹 도구

### 서비스

* [deepwiki-rs](https://github.com/sopaco/deepwiki-rs) - 코드베이스를 전문적인 아키텍처 문서로 변환합니다. [![crates.io](https://img.shields.io/crates/v/deepwiki-rs?logo=rust)](https://crates.io/crates/deepwiki-rs)
* [deps.rs](https://github.com/deps-rs/deps.rs) - 오래되거나 안전하지 않은 의존성을 감지합니다
* [docs.rs](https://docs.rs) - 크레이트 문서 자동 생성

### 정적 분석

[[단언](https://crates.io/keywords/assert), [정적](https://crates.io/keywords/static)]

* [cargo-coupling](https://github.com/nwiizo/cargo-coupling) - Vlad Khononov의 "Balancing Coupling in Software Design" 프레임워크를 사용하는 Rust 결합도 분석 도구
* [creusot-rs/creusot](https://github.com/creusot-rs/creusot) - 코드를 Why3 검증 플랫폼으로 변환하여 패닉, 오버플로, 단언 실패가 없음을 증명하는 Rust 연역적 검증기
* [dupehound](https://github.com/Rafaelpta/dupehound) [[dupehound](https://crates.io/crates/dupehound)] - 함수 본문의 지문(winnowing)을 추출하여 이름이 바뀌어도 복사본을 찾는 중복 코드 감지기. 저장소의 저품질 코드 점수, 중복 이력 차트, 재사용할 원본 함수를 알려 주는 CI 검사를 제공합니다. Rust와 11개 다른 언어를 지원합니다. [![CI](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml)
* [kucherenko/jscpd](https://github.com/kucherenko/jscpd) [[jscpd](https://crates.io/crates/jscpd)] - 220개 이상의 파일 형식에서 중복 블록을 찾는 소스 코드 복사/붙여넣기 감지기 [![CI](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml)
* [MIRAI](https://github.com/endorlabs/mirai) - Rust의 중간 수준 중간 표현(MIR)에서 동작하는 추상 인터프리터 [![지속적 통합](https://github.com/endorlabs/mirai/actions/workflows/rust.yml/badge.svg)](https://github.com/endorlabs/mirai/actions/workflows/rust.yml)
* [RAPx](https://github.com/safer-rust/RAPx) - Rust 프로그래머가 rustc 컴파일러가 제공하는 수준을 넘어서는 고급 정적 분석 도구를 개발하고 사용하도록 돕는 플랫폼.
* [static_assertions](https://crates.io/crates/static_assertions) - 불변 조건 충족을 보장하는 컴파일 시간 단언
* [verus-lang/verus](https://github.com/verus-lang/verus) - 저수준 시스템 코드용 검증된 Rust
* [zizmorcore/zizmor](https://github.com/zizmorcore/zizmor) [[zizmor](https://crates.io/crates/zizmor)] - 템플릿 주입, 자격 증명 유출, 과도한 권한, 사칭 커밋 등의 보안 문제를 찾는 GitHub Actions 정적 분석 도구. [![CI](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml/badge.svg)](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml)

### 테스트

[[테스트](https://crates.io/keywords/test), [테스트](https://crates.io/keywords/testing)]
* 단언 및 매처
  * [googletest-json-serde](https://crates.io/crates/googletest-json-serde) [![최신 버전](https://img.shields.io/crates/v/googletest-json-serde.svg)](https://crates.io/crates/googletest-json-serde) - 경로, 배열, 객체를 지원하는 googletest-rust용 JSON 매처 모음. [![빌드 상태](https://github.com/chege/googletest-json-serde/actions/workflows/ci.yaml/badge.svg)](https://github.com/chege/googletest-json-serde/actions)
* 코드 커버리지
  * [minikin/cargo-crap](https://github.com/minikin/cargo-crap) [[cargo-crap](https://crates.io/crates/cargo-crap)] - 순환 복잡도와 LCOV 커버리지(CRAP 메트릭)를 결합하여 복잡하고 테스트되지 않은 함수를 찾고 점수로 CI를 검사합니다
  * [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) [[supercov](https://crates.io/crates/supercov)] - 코딩 에이전트용 코드 품질 및 테스트 커버리지. Jev가 소스 파일별로 점수를 매겨 에이전트가 먼저 수정할 항목을 알게 합니다 [![CI](https://github.com/supercorp-ai/supercov/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/supercorp-ai/supercov/actions)
  * [tarpaulin](https://crates.io/crates/cargo-tarpaulin) - 코드 커버리지 도구
* 지속적 통합
  * [trust](https://github.com/japaric/trust) - 5개 아키텍처에서 Rust 크레이트를 테스트하고 Linux, macOS, Windows용 바이너리 릴리스를 게시하는 Travis CI 및 AppVeyor 템플릿
* 프레임워크 및 실행기
  * [AlKass/polish](https://github.com/AlKass/polish) - 작은 테스트/테스트 주도 프레임워크 [![크레이트 패키지 상태](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
  * [bitfield/cargo-testdox](https://github.com/bitfield/cargo-testdox) [[cargo-testdox](https://crates.io/crates/cargo-testdox)] - Rust 테스트를 문서로 바꿉니다 [![CI](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml)
  * [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - 스마트폰 및 기타 소형 프로세서 기기에서 라이브러리 테스트와 벤치를 쉽게 실행하는 cargo 확장.
  * [cucumber](https://crates.io/crates/cucumber) [![최신 버전](https://img.shields.io/crates/v/cucumber.svg)](https://crates.io/crates/cucumber) - Rust용 Cucumber 테스트 프레임워크 구현체. 완전한 네이티브이며 외부 테스트 실행기나 의존성이 없습니다. [![빌드 상태](https://github.com/cucumber-rs/cucumber/actions/workflows/ci.yml/badge.svg)](https://github.com/cucumber-rs/cucumber/actions)
  * [d-e-s-o/test-log](https://github.com/d-e-s-o/test-log) [[test-log](https://crates.io/crates/test-log)] - 테스트 실행 전에 로깅 및/또는 추적 인프라를 초기화하는 `#[test]` 속성 대체 도구. [![GitHub 워크플로 상태](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml)
  * [demonstrate](https://crates.io/crates/demonstrate) - 선언적 테스트 프레임워크
  * [GoogleTest Rust](https://crates.io/crates/googletest) - C++ 테스트 라이브러리 GoogleTest 기반의 강력한 테스트 단언 프레임워크 [![빌드 상태](https://github.com/google/googletest-rust/workflows/CI/badge.svg)](https://github.com/google/googletest-rust/actions?query=workflow%3ACI+branch%3Amain)
  * [hovinen/test-that](https://github.com/hovinen/test-that) [[test-that](https://crates.io/crates/test-that)] - GoogleTest Rust 기반으로 원저자가 만든 Rust 단언 라이브러리. [![빌드 상태](https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg)](https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain)
  * [mitsuhiko/insta](https://github.com/mitsuhiko/insta) [[insta](https://crates.io/crates/insta)] - Rust용 스냅샷 테스트 라이브러리. [![빌드 상태](https://github.com/mitsuhiko/insta/workflows/Tests/badge.svg)](https://github.com/mitsuhiko/insta/actions)
  * [nextest-rs/nextest](https://github.com/nextest-rs/nextest) [[cargo-nextest](https://crates.io/crates/cargo-nextest)] - 병렬 테스트 실행, 더 빠른 테스트, 고급 필터링, 풍부한 출력을 제공하는 Rust용 차세대 테스트 실행기. [![crates.io의 cargo-nextest](https://img.shields.io/crates/v/cargo-nextest)](https://crates.io/crates/cargo-nextest)
  * [padamson/playwright-rust](https://github.com/padamson/playwright-rust) [[playwright-rs](https://crates.io/crates/playwright-rs)] - Microsoft Playwright용 Rust 바인딩. 자동 대기 로케이터와 추적 기록을 갖춘 브라우저 간 종단 간 테스트(Chromium, Firefox, WebKit). [![CI](https://github.com/padamson/playwright-rust/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/padamson/playwright-rust/actions/workflows/test.yml)
  * [palfrey/serial_test](https://github.com/palfrey/serial_test) [[serial_test](https://crates.io/crates/serial_test)] - 전체 또는 이름 지정 그룹으로 테스트를 순차 실행합니다 [![CI](https://github.com/palfrey/serial_test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/palfrey/serial_test/actions/workflows/ci.yml)
  * [rlt](https://github.com/wfxr/rlt) - 실시간 TUI를 지원하는 범용 부하 테스트 프레임워크.
  * [rstest](https://crates.io/crates/rstest) - 픽스처 기반 테스트 프레임워크 [![빌드 상태](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
  * [speculate](https://crates.io/crates/speculate) - RSpec에서 영감을 받은 최소한의 테스트 프레임워크
* 모킹 및 테스트 데이터
  * [asomers/mockall](https://github.com/asomers/mockall) [[mockall](https://crates.io/crates/mockall)] - 강력한 모의 객체 라이브러리. [![CI](https://github.com/asomers/mockall/actions/workflows/ci.yml/badge.svg)](https://github.com/asomers/mockall/actions/workflows/ci.yml)
  * [bcheidemann/fixtures-rs](https://github.com/bcheidemann/fixtures-rs/tree/main/fixtures) [[fixtures](https://crates.io/crates/fixtures)] - glob 패턴으로 픽스처에서 테스트를 생성하는 절차적 매크로
  * [fake-rs](https://github.com/cksac/fake-rs) - 가짜 데이터 생성 라이브러리
  * [goldenfile](https://github.com/calder/rust-goldenfile) [[goldenfile](https://crates.io/crates/goldenfile)] - 골든 파일 테스트를 위한 간단한 API를 제공하는 라이브러리.
  * [httpmock](https://github.com/httpmock/httpmock) - HTTP 모킹 [![빌드](https://github.com/httpmock/httpmock/actions/workflows/build.yml/badge.svg)](https://github.com/httpmock/httpmock/actions/workflows/build.yml)
  * [mockiato](https://crates.io/crates/mockiato) - 불안정 Rust 2018용 엄격하면서도 친절한 모킹 라이브러리
  * [mockito](https://crates.io/crates/mockito) - HTTP 모킹
  * [mocktail](https://github.com/IBM/mocktail) [![mocktail](https://img.shields.io/crates/v/mocktail)](https://crates.io/crates/mocktail) - Rust용 HTTP 및 gRPC 서버 모킹 ![빌드](https://github.com/IBM/mocktail/actions/workflows/build.yml/badge.svg)
  * [nrxus/faux](https://github.com/nrxus/faux/) [![최신 버전](https://img.shields.io/crates/v/faux.svg)](https://crates.io/crates/faux) - 구조체에서 모의 객체를 만드는 라이브러리. ![빌드](https://github.com/nrxus/faux/workflows/test/badge.svg?branch=master)
  * [synth](https://github.com/shuttle-hq/synth/) - 데이터베이스 데이터를 선언적으로 생성합니다. [![빌드](https://github.com/shuttle-hq/synth/actions/workflows/synth-test.yml/badge.svg)](https://github.com/shuttle-hq/synth)
* 변이 테스트
  * [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) [[cargo-mutants](https://crates.io/crates/cargo-mutants)] - 소스 변경 없이 변이를 주입하여 충분히 테스트되지 않은 코드를 찾습니다. [![빌드 배지](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml/badge.svg?branch=main&event=push)](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml?query=branch%3Amain)
  * [mutagen](https://github.com/llogiq/mutagen) [[mutagen](https://crates.io/crates/mutagen)] - 소스 수준 변이 테스트 프레임워크(나이틀리 전용)
* 속성 기반 테스트 및 퍼징
  * [Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident) - 수동 유도 테스트, 흐름 기반 시퀀스, 속성 기반 검증을 제공하는 Solana 스마트 계약용 퍼징 프레임워크
  * [proptest](https://crates.io/crates/proptest) - Python의 [Hypothesis](https://hypothesis.works/) 프레임워크에서 영감을 받은 속성 기반 테스트 프레임워크
  * [quickcheck](https://crates.io/crates/quickcheck) - [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1)의 Rust 구현체
  * [rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) - [AFL](https://lcamtuf.coredump.cx/afl/)을 사용하는 Rust 퍼저

### 트랜스파일

* [aleph-lang/aleph_ollama](https://github.com/aleph-lang/aleph_ollama) [[aleph_ollama](https://crates.io/crates/aleph_ollama)] - 로컬 Ollama API를 사용하는 AI 기반 소스 코드 번역 도구.
* [BayesWitnesses/m2cgen](https://github.com/BayesWitnesses/m2cgen) - 학습된 전통적 머신 러닝 모델을 의존성 없는 네이티브 Rust 코드로 변환하는 CLI 도구.
* [immunant/c2rust](https://github.com/immunant/c2rust) - Clang/LLVM 기반의 C에서 Rust로의 번역기 및 교차 검사기.
* [jameysharp/corrode](https://github.com/jameysharp/corrode) - Haskell로 작성한 C에서 Rust로의 번역기.

### 터널

* [ekzhang/bore](https://github.com/ekzhang/bore) [[bore-cli](https://crates.io/crates/bore-cli)] - NAT 방화벽을 우회하여 로컬 포트를 원격 서버에 노출하는 간단한 TCP 터널 [![빌드 상태](https://img.shields.io/github/actions/workflow/status/ekzhang/bore/ci.yml)](https://github.com/ekzhang/bore/actions)
* [joaoh82/rustunnel](https://github.com/joaoh82/rustunnel) - 자체 호스팅 보안 터널 서버. yamux 다중화와 TLS 암호화 WebSocket으로 로컬 HTTP/HTTPS/TCP/UDP 서비스를 노출하며 다중 지역, Prometheus 메트릭, AI 에이전트용 MCP 서버를 제공합니다.
* [ngrok/ngrok-rust](https://github.com/ngrok/ngrok-rust) [[ngrok-rust](https://crates.io/crates/ngrok)] - 로컬 앱을 인터넷에 안전하게 노출하는 개발자 도구인 ngrok.
* [rathole-org/rathole](https://github.com/rathole-org/rathole) - Noise Protocol/TLS 암호화와 설정 핫 리로드를 지원하는 NAT 통과용 안전한 고성능 역방향 프록시 ![CI](https://img.shields.io/github/actions/workflow/status/rathole-org/rathole/rust.yml?branch=main)

## 라이브러리

* [perf-monitor-rs](https://github.com/larksuite/perf-monitor-rs) - 애플리케이션 성능 모니터링의 기반이 되도록 설계한 도구 모음. [![crates.io](https://img.shields.io/crates/v/perf_monitor.svg)](https://crates.io/crates/perf_monitor)

### 인공지능

#### 유전 알고리즘

* [innoave/genevo](https://github.com/innoave/genevo) - 설정과 확장이 가능한 방식으로 유전 알고리즘(GA) 시뮬레이션을 실행합니다.
* [m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) - 유전 알고리즘 라이브러리. 유지보수 모드입니다.
* [Martin1887/oxigen](https://github.com/Martin1887/oxigen) - 빠르고 병렬 실행이 가능하며 확장 및 조정 가능한 유전 알고리즘 라이브러리. 이 라이브러리의 예제는 1MB 미만의 RAM으로 N = 255인 N-퀸 문제를 몇 초 만에 해결합니다.
* [pkalivas/radiate](https://github.com/pkalivas/radiate) - 지도, 비지도, 강화 학습 문제의 해법을 진화시킬 수 있는 설정 가능한 병렬 유전 프로그래밍 엔진. NEAT와 Evtree의 완전하고 설정 가능한 구현체를 제공합니다.![Crates.io](https://img.shields.io/crates/v/radiate)
* [willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) - 진화 알고리즘

#### Google Gemini

* [gemini-client-api](https://crates.io/crates/gemini-client-api) - Google Gemini API 사용 라이브러리. 자동 컨텍스트 관리, 스키마 생성, 함수 호출 등을 제공합니다.

#### 머신 러닝

[[머신 러닝](https://crates.io/keywords/machine-learning)] 참고

[Rust 머신 러닝 커뮤니티 소개](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f)와 [Are we learning yet?](https://www.arewelearningyet.com)도 참고하세요.

* [autumnai/leaf](https://github.com/autumnai/leaf) - 개방형 기계 지능 프레임워크. 중단된 프로젝트이며 가장 최신 포크는 [juice](https://github.com/fff-rs/juice)입니다.
* [ave-sergeev/tictonix](https://github.com/Ave-Sergeev/Tictonix) [[tictonix](https://crates.io/crates/tictonix)] - 토큰을 임베딩으로 변환하고 위치를 인코딩하는 기능을 제공하는 라이브러리.
* [blackportal-ai/delta](https://github.com/blackportal-ai/delta) - Δ Rust로 만든 오픈 소스 머신 러닝 프레임워크. ![crates.io](https://img.shields.io/crates/v/deltaml.svg) ![빌드](https://img.shields.io/github/actions/workflow/status/blackportal-ai/delta/core.yml?branch=master)
* [blackportal-ai/nebula](https://github.com/blackportal-ai/nebula) - 머신 러닝 데이터셋 및 모델용 패키지 관리자. ![빌드](https://img.shields.io/github/actions/workflow/status/blackportal-ai/nebula/core.yml?branch=master)
* [burn](https://github.com/tracel-ai/burn) - 유연하고 포괄적인 딥 러닝 프레임워크.
* [chelsea0x3b/dfdx](https://github.com/chelsea0x3b/dfdx) - Rust의 다양한 고유 기능을 활용하는 CUDA 가속 머신 러닝 프레임워크. ![Crates.io](https://img.shields.io/crates/v/dfdx)
* [EricLBuehler/mistral.rs](https://github.com/EricLBuehler/mistral.rs) [[mistralrs](https://crates.io/crates/mistralrs)] - 다중 모달 모델, 양자화(GGUF/GPTQ/ISQ), OpenAI 호환 API를 지원하는 빠르고 유연한 LLM 추론 엔진
* [guillaume-be/rust-bert](https://github.com/guillaume-be/rust-bert) [[rust_bert](https://crates.io/crates/rust_bert)] - 바로 사용할 수 있는 NLP 파이프라인과 언어 모델
* [huggingface/candle](https://github.com/huggingface/candle) [[candle-core](https://crates.io/crates/candle-core)] - 사용 편의성과 성능(GPU 지원 포함)에 중점을 둔 최소한의 ML 프레임워크
* [huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Python 바인딩을 갖춘 현대적 NLP 파이프라인용 Hugging Face 토크나이저(원본 구현). [![빌드 상태](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [katanemo/plano](https://github.com/katanemo/plano) - 에이전트형 앱을 위한 AI 네이티브 프록시 서버 및 데이터 평면.
* [LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) - PyTorch 바인딩.
* [luminal-ai/luminal](https://github.com/luminal-ai/luminal) [[luminal](https://crates.io/crates/luminal)] - RISC 스타일 아키텍처, 검색 기반 최적화, 네이티브 CUDA/Metal 백엔드를 갖춘 고성능 범용 추론 컴파일러. 트랜스포머, 합성곱 신경망, 자동 미분을 지원합니다. [![CI 상태](https://img.shields.io/github/actions/workflow/status/luminal-ai/luminal/test-core.yml?style=for-the-badge&logo=github-actions&logoColor=white&branch=main)](https://github.com/luminal-ai/luminal/actions)
* [maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) - 머신 러닝 라이브러리. [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy) [[shimmy](https://crates.io/crates/shimmy)] - OpenAI 호환 API와 네이티브 GGUF 지원을 갖춘 순수 Rust WebGPU 추론 엔진.
* [Michael-A-Kuykendall/shimmytok](https://github.com/Michael-A-Kuykendall/shimmytok) [[shimmytok](https://crates.io/crates/shimmytok)] - llama.cpp 토큰화와 호환되는 GGUF 모델용 순수 Rust 토크나이저.
* [Mottl/lightgb3-rs](https://github.com/Mottl/lightgbm3-rs) - LightGBM 바인딩 [![Crates.io](https://img.shields.io/crates/v/lightgbm3.svg)](https://crates.io/crates/lightgbm3) [![빌드](https://github.com/Mottl/lightgbm3-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/Mottl/lightgbm3-rs/actions)
* [nobodywho-ooo/nobodywho](https://github.com/nobodywho-ooo/nobodywho) - 서버나 API 키 없이 게임과 앱에 직접 내장되는 기기 내 LLM 추론 엔진. 스트리밍 생성, 임베딩, GBNF 문법 제약 구조화 출력, Whisper 음성-텍스트 변환을 지원하며 Godot, Flutter, React Native, Swift 바인딩을 제공합니다.
* [openinfer-project/openinfer](https://github.com/openinfer-project/openinfer) - PyTorch와 Python 런타임이 없는 순수 Rust + CUDA LLM 추론 엔진. OpenAI 호환 API, 페이지형 KV 캐시, CUDA Graph를 제공하며 Qwen3부터 1조 매개변수 Kimi-K2까지 모델을 제공합니다.
* [perpetual-ml/perpetual](https://github.com/perpetual-ml/perpetual) [[perpetual](https://crates.io/crates/perpetual)] - 하이퍼파라미터 최적화가 필요 없는 자기 일반화 그래디언트 부스팅 머신.
* [ramsyana/RustTensor](https://github.com/ramsyana/RustTensor) - Rust로 처음부터 만든 학습 중심 고성능 텐서 연산 라이브러리. 자동 미분과 CPU/CUDA 백엔드를 제공합니다.
* [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) - 문서를 지능형 지식 그래프로 변환하는 고성능 Graph-RAG 프레임워크.
* [rust-ml/linfa](https://github.com/rust-ml/linfa) - 머신 러닝 프레임워크.
* [sipemu/anofox-regression](https://github.com/sipemu/anofox-regression) [[anofox-regression](https://crates.io/crates/anofox-regression)] - R 스타일 추론(p값, 신뢰 및 예측 구간)과 Wasm을 지원하는 통계 회귀 모델(OLS, Elastic Net, GLM, Quantile 및 Isotonic).
* [smartcorelib/smartcore](https://github.com/smartcorelib/smartcore) - 머신 러닝 라이브러리 [![빌드 상태](https://img.shields.io/circleci/build/github/smartcorelib/smartcore)]
* [tag1consulting/feste](https://github.com/tag1consulting/feste) - 교육 목적으로 Rust로 처음부터 구현한 GPT-2 스타일 트랜스포머 언어 모델.
* [tensorflow/rust](https://github.com/tensorflow/rust) - TensorFlow 바인딩.

#### OpenAI

* [0xplaygrounds/rig](https://github.com/0xplaygrounds/rig) - 에이전트와 모듈식 확장 가능한 LLM 기반 애플리케이션을 만드는 라이브러리
* [64bit/async-openai](https://github.com/64bit/async-openai) [[async-openai](https://crates.io/crates/async-openai)] - OpenAPI 명세 기반의 사용하기 편한 OpenAI API Rust 바인딩.
* [awakenworks/awaken](https://github.com/awakenworks/awaken) [[awaken](https://crates.io/crates/awaken)] - Rust용 AI 에이전트 런타임 — 타입 안전한 상태, 다중 프로토콜 제공, 플러그인 확장성.
* [bigduu/Bamboo-agent](https://github.com/bigduu/Bamboo-agent) [[bamboo-agent](https://crates.io/crates/bamboo-agent)] - 로컬 우선 AI 에이전트 하네스 및 런타임. 영속 메모리, 내장 도구, 스킬, MCP, 하위 에이전트, 워크플로, 일정을 단일 HTTP + WebSocket API로 제공합니다. 크레이트로 내장하거나 서버로 실행할 수 있습니다.
* [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) [[AutoAgents](https://crates.io/crates/autoagents)] - 네이티브 에지 지원으로 AI 에이전트를 만드는 다중 에이전트 프레임워크.
* [openai/codex](https://github.com/openai/codex) - Codex CLI는 로컬에서 실행되는 OpenAI 코딩 에이전트입니다.
* [openai/harmony](https://github.com/openai/harmony) [[openai-harmony](https://crates.io/crates/openai-harmony/0.0.3)] - gpt-oss에 사용하는 harmony 응답 형식 렌더러.
* [xberg-io/liter-llm](https://github.com/xberg-io/liter-llm) [[liter-llm](https://crates.io/crates/liter-llm)] - 통합 인터페이스, 스트리밍, 11개 언어의 네이티브 바인딩을 갖춘 142개 이상의 공급자용 범용 LLM API 클라이언트.
* [zurawiki/tiktoken-rs](https://github.com/zurawiki/tiktoken-rs) [[tiktoken-rs](https://crates.io/crates/tiktoken-rs)] - tiktoken으로 OpenAI 모델용 텍스트를 토큰화하는 라이브러리. [![CI](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml)

#### 도구

* [BAML](https://github.com/BoundaryML/baml) - 신뢰할 수 있는 AI 워크플로와 에이전트를 만드는 간단한 프롬프트 언어. BAML 컴파일러는 Rust로 작성했습니다!
* [Cortex Memory](https://github.com/sopaco/cortex-mem) - 추출과 벡터 검색부터 자동 최적화까지 제공하는 완전한 에이전트 메모리 솔루션. 인사이트 대시보드를 기본 제공합니다.
* [juyterman1000/entroly](https://github.com/juyterman1000/entroly) - 강화 학습으로 최적의 RAG 조각을 지능적으로 가지치기하고 선택하는 정보 이론 기반 컨텍스트 엔지니어링 엔진.
* [memvid/memvid](https://github.com/memvid/memvid) [[memvid-core](https://crates.io/crates/memvid-core)] - 벡터 검색, 전문 검색, 장기 회상을 하나의 `.mv2` 파일에 담은 AI 에이전트용 단일 파일 휴대형 메모리 계층
* [pydantic/monty](https://github.com/pydantic/monty) - AI 에이전트에서 LLM 생성 코드를 실행하는 최소한의 안전한 Python 인터프리터. 마이크로초 단위 시작, 엄격한 샌드박싱, 스냅샷을 지원합니다 [![CI](https://github.com/pydantic/monty/actions/workflows/ci.yml/badge.svg)](https://github.com/pydantic/monty/actions/workflows/ci.yml)
* [tenequm/pond](https://github.com/tenequm/pond) [[pond-db](https://crates.io/crates/pond-db)] - 로컬 디렉터리 또는 S3 버킷의 Lance 기반으로 12개 코딩 에이전트 클라이언트의 세션을 손실 없이 저장하고 검색합니다. CLI, HTTP, MCP, 읽기 전용 SQL로 BM25와 선택적 벡터 검색을 제공합니다 [![빌드 배지](https://github.com/tenequm/pond/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenequm/pond/actions/workflows/ci.yml)

### 천문학

[[천문학](https://crates.io/keywords/astronomy)]

* [cds-astro/aladin-lite](https://github.com/cds-astro/aladin-lite) - 공간 및 행성 영상 조사 자료를 다양한 투영법으로 시각화하는 웹 애플리케이션
* [fitsio](https://crates.io/crates/fitsio) - cfitsio를 감싸는 fits 인터페이스 라이브러리
* [flosse/rust-sun](https://github.com/flosse/rust-sun) [[sun](https://crates.io/crates/sun)] - JS 라이브러리 suncalc의 rust 포트
* [saurvs/astro-rust](https://github.com/saurvs/astro-rust) - 천문학

### 비동기

* [async-std](https://async.rs/) [[async-std](https://crates.io/crates/async-std)] - Rust 표준 라이브러리의 비동기 버전 [![CI](https://github.com/async-rs/async-std/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/async-rs/async-std/actions/workflows/ci.yml)
* [dagrs](https://github.com/dagrs-dev/dagrs) - 흐름 기반 프로그래밍 개념을 따르는 고성능 비동기 작업 프로그래밍 프레임워크.
* [dpc/mioco](https://github.com/dpc/mioco) - 확장 가능한 코루틴 기반 비동기 IO 처리 라이브러리
* [igumnoff/gabriel2](https://github.com/igumnoff/gabriel2) [[gabriel2](https://crates.io/crates/gabriel2)] - Gabriel2: Tokio 기반 액터 모델 라이브러리
* [iii-hq/iii](https://github.com/iii-hq/iii) [[iii-sdk](https://crates.io/crates/iii-sdk)] - Worker-Function-Trigger 기본 요소로 서비스를 구성하는 분산 런타임. 실시간 카탈로그, 추적 가능한 함수 호출, 다중 언어 SDK(Rust, Node.js, Python)를 제공합니다. Rust 기반 엔진(ELv2), Apache 2.0 SDK.
* [mio](https://github.com/tokio-rs/mio) - 운영체제 추상화 위에 가능한 한 적은 오버헤드를 추가하는 데 집중한 경량 IO 라이브러리인 MIO
* [nextest-rs/future-queue](https://github.com/nextest-rs/future-queue) [[future-queue](https://crates.io/crates/future-queue)] - 가중 동시성 제한과 선택적 그룹별 제한으로 퓨처를 동시에 실행하는 스트림 어댑터.
* [rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) - 비용 없는 퓨처
* [t3hmrman/async-dropper](https://github.com/t3hmrman/async-dropper) [[async-dropper](https://crates.io/crates/async-dropper)] - `AsyncDrop` 구현체
* [TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) - Rust용 Monad/MonadIO, Handler, Coroutine/doNotation, 함수형 프로그래밍 기능
* [tokio-rs/tokio](https://github.com/tokio-rs/tokio) - Rust 프로그래밍 언어로 안정적이고 비동기이며 슬림한 애플리케이션을 작성하는 런타임.
* [tqwewe/kameo](https://github.com/tqwewe/kameo) - Tokio 기반 내결함성 비동기 액터
* [Xudong-Huang/may](https://github.com/Xudong-Huang/may) - 스택을 갖춘 코루틴 라이브러리
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - 작업 훔치기 스케줄러를 갖춘 코루틴 I/O 라이브러리

### 오디오 및 음악

[[오디오](https://crates.io/keywords/audio)]

* [aschey/stream-download-rs](https://github.com/aschey/stream-download-rs) [[stream-download](https://crates.io/crates/stream-download)] - 오디오, 동영상, 기타 미디어 콘텐츠 스트리밍 라이브러리 [![빌드 배지](https://github.com/aschey/stream-download-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/aschey/stream-download-rs/actions)
* [hound](https://crates.io/crates/hound) - WAV 인코딩 및 디코딩 라이브러리
* [insomnimus/nodi](https://github.com/insomnimus/nodi) [[nodi](https://crates.io/crates/nodi)] - MIDI 파일 재생 및 추상화 라이브러리. [![빌드 배지](https://github.com/insomnimus/nodi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/nodi/actions)
* [jhasse/ears](https://github.com/jhasse/ears) - OpenAL과 libsndfile 기반으로 소리와 음악을 재생하는 간단한 라이브러리
* [musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) - [PortMidi](https://portmedia.sourceforge.net/portmidi/) 바인딩
* [ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) - 음악 이론 라이브러리
* [pdeljanov/Symphonia](https://github.com/pdeljanov/Symphonia) - AAC, FLAC, MP3, MP4, OGG, Vorbis, WAV를 지원하는 오디오 디코딩 및 미디어 역다중화 라이브러리.
* [RustAudio](https://github.com/RustAudio)
  * [RustAudio/cpal](https://github.com/RustAudio/cpal) - 저수준 크로스 플랫폼 오디오 I/O 라이브러리. [![Actions 상태](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [RustAudio/rodio](https://github.com/RustAudio/rodio) - 오디오 재생 라이브러리
  * [RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) - PortAudio 바인딩
* [Serial-ATA/lofty-rs](https://github.com/Serial-ATA/lofty-rs) [[lofty](https://crates.io/crates/lofty)] - 다양한 오디오 형식의 메타데이터를 읽고 편집하는 라이브러리 [![빌드 배지](https://github.com/Serial-ATA/lofty-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Serial-ATA/lofty-rs/actions)

### 인증

* [constantoine/totp-rs](https://github.com/constantoine/totp-rs) [[totp-rs](https://crates.io/crates/totp-rs)] - TOTP 기반 토큰을 생성하고 검증하는 2fa 라이브러리 ![빌드 상태](https://github.com/constantoine/totp-rs/workflows/Rust/badge.svg)
* [GunduLabs/gaze](https://github.com/GunduLabs/gaze) - 기기 내 얼굴 인식, PAM 연동, 로그인/잠금 화면/sudo/데스크톱 관리 도구를 갖춘 Linux용 얼굴 인증. [![CI](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml)
* [Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) - [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) 라이브러리
* [oauth2](https://github.com/ramosbugs/oauth2-rs) - 확장 가능하며 강한 타입을 갖춘 OAuth2 클라이언트 라이브러리
* [oxide-auth](https://github.com/197g/oxide-auth) - actix 또는 다른 프런트엔드와 함께 사용하는 OAuth2 서버 라이브러리. 설정과 플러그인을 지원하는 백엔드 모음을 제공합니다 [![CI](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml)
* [sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) - JWT 워크플로를 관리하고 오케스트레이션하는 비동기 라이브러리
* [tenuo-ai/tenuo](https://github.com/tenuo-ai/tenuo) [[tenuo](https://crates.io/crates/tenuo)] - AI 에이전트용 권한 기반 인가. 서명된 위임장이 도구 호출과 인수의 범위를 제한하며 위임할 때 범위를 축소할 수만 있습니다 [![CI](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml)
* [yup-oauth2](https://github.com/dermesser/yup-oauth2) - 기기, 설치형 앱, 서비스 계정 흐름을 제공하는 oauth2 클라이언트 구현체

### 자동차

* [idletea/tokio-socketcan](https://github.com/idletea/tokio-socketcan) [[tokio-socketcan](https://crates.io/crates/tokio-socketcan)] - socketcan 크레이트 기반의 tokio용 Linux SocketCAN 지원
* [marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] - tokio용 Linux SocketCAN BCM 지원
* [mbr/socketcan](https://github.com/socketcan-rs/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] - Linux SocketCAN 라이브러리
* [oxibus/can-dbc](https://github.com/oxibus/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] - DBC 형식 파서
* [Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] - LIN 버스 드라이버 트레이트 및 프로토콜 구현체 [![빌드 배지](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)

### 생물정보학

* [polars-bio](https://github.com/biodatageeks/polars-bio) - Python DataFrame에서 매우 빠른 생물정보학 연산 ![PyPI - 버전](https://img.shields.io/pypi/v/polars-bio)
* [Rust-Bio](https://github.com/rust-bio) - 생물정보학 라이브러리.

### 캐싱

* [06chaynes/http-cache](https://github.com/06chaynes/http-cache) [[http-cache](https://crates.io/crates/http-cache)] - HTTP 캐싱 규칙을 따르는 캐싱 미들웨어 [![빌드 배지](https://github.com/06chaynes/http-cache/workflows/http-cache/badge.svg)](https://github.com/06chaynes/http-cache/actions/workflows/http-cache.yml)
* [aisk/rust-memcache](https://github.com/aisk/rust-memcache) - Memcached 클라이언트 라이브러리
* [al8n/stretto](https://github.com/al8n/stretto) - 메모리 사용량이 제한된 고성능 스레드 안전 캐시 [![빌드 배지](https://github.com/al8n/stretto/actions/workflows/ci.yml/badge.svg)](https://github.com/al8n/stretto/actions/workflows/ci.yml)
* [hit-box/hitbox](https://github.com/hit-box/hitbox) - HTTP 미들웨어와 다중 계층 백엔드를 갖춘 선언적 캐시 오케스트레이션 프레임워크 [![CI](https://github.com/hit-box/hitbox/actions/workflows/CI.yml/badge.svg)](https://github.com/hit-box/hitbox/actions/workflows/CI.yml)
* [jaemk/cached](https://github.com/jaemk/cached) - 간단한 함수 캐싱/메모이제이션
* [kunobi-ninja/kache](https://github.com/kunobi-ninja/kache) [[kache](https://crates.io/crates/kache)] - Rust와 C/C++용 콘텐츠 주소 기반 컴파일러 캐시([웹사이트](https://ninja.kunobi.com/kache)) [![CI](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml)
* [moka-rs/moka](https://github.com/moka-rs/moka) - Java의 Caffeine 라이브러리에서 영감을 받은 고성능 동시성 캐싱 라이브러리 [![빌드 배지](https://github.com/moka-rs/moka/workflows/CI/badge.svg)](https://github.com/moka-rs/moka/actions/workflows/CI.yml)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - 공유 컴파일 캐시로 뛰어난 컴파일
* [salsa-rs/salsa](https://github.com/salsa-rs/salsa) [[salsa](https://crates.io/crates/salsa)] - rustc 쿼리 시스템에서 영감을 받은 메모이제이션 쿼리 기반 주문형 증분 연산 범용 프레임워크. [![테스트](https://github.com/salsa-rs/salsa/workflows/Test/badge.svg)](https://github.com/salsa-rs/salsa/actions?query=workflow%3ATest)
* [zkat/cacache-rs](https://github.com/zkat/cacache-rs) - 비동기 API에 최적화된 고성능 동시성 콘텐츠 주소 지정 디스크 캐시 [![빌드 배지](https://github.com/zkat/cacache-rs/workflows/CI/badge.svg)](https://github.com/zkat/cacache-rs/actions/workflows/ci.yml)

### 클라우드

* AWS [[aws](https://crates.io/keywords/aws)]
  * [aws/aws-lambda-rust-runtime](https://github.com/aws/aws-lambda-rust-runtime) [[lambda_runtime](https://crates.io/crates/lambda_runtime)] - AWS Lambda 런타임 [![빌드 배지](https://github.com/aws/aws-lambda-rust-runtime/workflows/Rust/badge.svg)](https://github.com/aws/aws-lambda-rust-runtime/actions)
  * [awslabs/aws-sdk-rust](https://github.com/awslabs/aws-sdk-rust) - 새로운 AWS SDK
  * [faiscadev/fakecloud](https://github.com/faiscadev/fakecloud) [[fakecloud](https://crates.io/crates/fakecloud)] - 개발 및 테스트용 로컬 AWS 클라우드 에뮬레이터. [![CI](https://github.com/faiscadev/fakecloud/workflows/CI/badge.svg?branch=main)](https://github.com/faiscadev/fakecloud/actions)
  * [rusoto/rusoto](https://github.com/rusoto/rusoto) - Rust용 AWS SDK
* Azure
  * [Azure/azure-sdk-for-rust](https://github.com/Azure/azure-sdk-for-rust) - 공식 Rust용 Azure SDK
* 부하 분산기
  * [Convey](https://github.com/bparli/convey) - 동적 설정 로딩을 갖춘 계층 4 부하 분산기.
* 멀티 클라우드
  * [Qovery/engine](https://github.com/Qovery/engine) - 클라우드 공급자에 애플리케이션을 몇 분 만에 쉽게 배포하도록 돕는 추상화 계층 라이브러리

### 명령줄

* 인수 파싱
  * [aisk/rust-fire](https://github.com/aisk/rust-fire) [[fire](https://crates.io/crates/fire)] - 코드 한 줄로 함수를 명령줄 앱으로 바꿉니다 [![CI](https://github.com/aisk/rust-fire/actions/workflows/ci.yml/badge.svg)](https://github.com/aisk/rust-fire/actions/workflows/ci.yml)
  * [clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] - 사용하기 쉽고 모든 기능을 갖춘 명령줄 인수 파서
  * [cliparser](https://crates.io/crates/cliparser) - 간단한 명령줄 파서. [![빌드 배지](https://github.com/sagiegurari/cliparser/actions/workflows/ci.yml/badge.svg)](https://github.com/sagiegurari/cliparser/actions)
  * [docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] - DocOpt 구현체
  * [google/argh](https://github.com/google/argh) [[argh](https://crates.io/crates/argh)] - 코드 크기에 최적화된 뚜렷한 철학의 Derive 기반 인수 파서 [![빌드 배지](https://github.com/google/argh/workflows/Argh/badge.svg?branch=master)](https://github.com/google/argh/actions)
  * [killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] - 멋진 CLI 앱을 빠르게 만듭니다
  * [ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] - 최소한의 CLI 프레임워크 [![빌드 상태](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] - 구조체를 정의하여 명령줄 인수를 파싱합니다
* 데이터 시각화
  * [nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] - CLI 도구용 아름다운 동적 표. [![빌드 상태](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [zhiburt/tabled](https://github.com/zhiburt/tabled) [[tabled](https://crates.io/crates/tabled)] - 구조체와 열거형을 보기 좋은 표로 출력하는 사용하기 쉬운 라이브러리. [![빌드 상태](https://github.com/zhiburt/tabled/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/tabled/actions)
* 사람 중심 설계
  * [rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] - 사람을 위한 패닉 메시지
* 줄 편집기
  * [kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] - readline 구현체
  * [MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] - readline 스타일 기능을 제공하는 라이브러리
  * [murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] - 설정 및 확장 가능한 대화형 줄 입력 도구
  * [nushell/reedline](https://github.com/nushell/reedline) [[reedline](https://crates.io/crates/reedline)] - Nushell을 구동하는 기능이 풍부한 줄 편집기. 구문 강조, 탭 자동 완성, 여러 줄, 이력, vi/emacs 키 바인딩, 유니코드를 지원합니다. [![Crates.io](https://img.shields.io/crates/v/reedline)](https://crates.io/crates/reedline)
  * [srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] - 명령줄 편집 라이브러리
* 기타
  * [mgrachev/update-informer](https://github.com/mgrachev/update-informer) [[update-informer](https://crates.io/crates/update-informer)] - CLI 애플리케이션용 업데이트 알림 도구. Crates.io와 GitHub에서 새 버전을 확인합니다 [![빌드 배지](https://github.com/mgrachev/update-informer/workflows/CI/badge.svg)](https://github.com/mgrachev/update-informer/actions)
* 파이프라인
  * [hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] - 외부 파이프라인과 상호작용하는 기능
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] - 출력을 외부 페이저로 전달합니다
  * [oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] - 하위 프로세스 파이프라인과 IO 리디렉션 빌더
  * [rust-cli/rexpect](https://github.com/rust-cli/rexpect) [[rexpect](https://crates.io/crates/rexpect)] - ssh, ftp, passwd 등 대화형 애플리케이션을 자동화합니다 [![CI](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml)
  * [zhiburt/expectrl](https://github.com/zhiburt/expectrl) [[expectrl](https://crates.io/crates/expectrl)] - 의사 터미널에서 대화형 프로그램을 제어하는 라이브러리 [![빌드 배지](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml)
* 진행 상황
  * [a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] - 콘솔 진행률 표시줄
  * [clitic/kdam](https://github.com/clitic/kdam) [[kdam](https://crates.io/crates/kdam)] - tqdm 및 rich.progress에서 영감을 받은 콘솔 진행률 표시줄 라이브러리 [![CI](https://github.com/clitic/kdam/actions/workflows/tests.yml/badge.svg)](https://github.com/clitic/kdam/actions/workflows/tests.yml)
  * [console-rs/indicatif](https://github.com/console-rs/indicatif) [[indicatif](https://crates.io/crates/indicatif)] - 사용자에게 진행 상황을 표시합니다
  * [etienne-napoleone/spinach](https://github.com/etienne-napoleone/spinach) [[spinach](https://crates.io/crates/spinach)] - 실용적인 스피너. [![CI](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml/badge.svg)](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml)
  * [FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] - 60개 이상의 우아한 터미널 스피너
  * [vyfor/rattles](https://github.com/vyfor/rattles) [[rattles](https://crates.io/crates/rattles)] - 최소한의 의존성 없는 터미널 스피너 라이브러리.
* 프롬프트
  * [hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)] - 대화형 명령 프롬프트를 만듭니다
  * [mikaelmello/inquire](https://github.com/mikaelmello/inquire) [[inquire](https://crates.io/crates/inquire)] - 터미널에서 대화형 프롬프트를 만드는 라이브러리. [![빌드 상태](https://github.com/mikaelmello/inquire/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/mikaelmello/inquire/actions)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)] - 모든 셸용 최소한의 매우 빠르고 폭넓게 설정 가능한 프롬프트 [![빌드 상태](https://github.com/starship/starship/actions/workflows/workflow.yml/badge.svg)](https://github.com/starship/starship/actions)
  * [ynqa/promkit](https://github.com/ynqa/promkit) [[promkit](https://crates.io/crates/promkit)] - 대화형 명령줄 도구 제작 도구 모음 [![ci](https://github.com/ynqa/promkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/promkit/actions/workflows/ci.yml)
* 스타일
  * [colored](https://github.com/colored-rs/colored) [[colored](https://crates.io/crates/colored)] - 이미 방법을 알고 있을 만큼 간단한 터미널 색상 지정!
  * [console-rs/dialoguer](https://github.com/console-rs/dialoguer) [[dialoguer](https://crates.io/crates/dialoguer)] - 명령줄 프롬프트 등 관련 기능용 라이브러리.
  * [LukasKalbertodt/bunt](https://github.com/LukasKalbertodt/bunt) [[bunt](https://crates.io/crates/bunt)] - 매크로를 사용하는 크로스 플랫폼 터미널 색상 및 스타일링 [![빌드 상태](https://github.com/LukasKalbertodt/bunt/actions/workflows/ci.yml/badge.svg)](https://github.com/LukasKalbertodt/bunt/actions?query=workflow%3ACI+branch%3Amaster)
  * [LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] - 크로스 플랫폼 스타일 적용 터미널 출력
  * [ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] - ANSI 터미널의 색상과 서식을 제어합니다
  * [SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] - 아주 간단한 ANSI 터미널 색상 지정 라이브러리
* TUI
  * [AppCUI](https://github.com/gdt050579/AppCUI-rs) [[appcui](https://crates.io/crates/appcui)] - 내장 위젯, 레이아웃 제어, 애니메이션, 유니코드, 테마 지원을 갖춘 완전한 크로스 플랫폼 Rust TUI/CUI 프레임워크.
  * BearLibTerminal
    * [cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] - [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal) 바인딩
  * [ccbrown/iocraft](https://github.com/ccbrown/iocraft) [[iocraft](https://crates.io/crates/iocraft)] - 정성껏 만든 아름다운 CLI, TUI, 텍스트 기반 IO용 크레이트. [![빌드 상태](https://github.com/ccbrown/iocraft/actions/workflows/commit.yaml/badge.svg?branch=main)](https://github.com/ccbrown/iocraft/actions) [![docs.rs](https://img.shields.io/docsrs/iocraft)](https://docs.rs/iocraft/)
  * [gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] - 풍부한 TUI 애플리케이션을 만듭니다
  * [ivanceras/titik](https://github.com/ivanceras/titik) - 대화형 위젯 제공을 목표로 하는 크로스 플랫폼 TUI 위젯 라이브러리
  * ncurses
    * [ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] - linux와 windows를 지원하는 curses 라이브러리
    * [jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] - [ncurses](https://invisible-island.net/ncurses/ncurses.html) 바인딩
  * [ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] - 항목을 격자에 배치하는 라이브러리
  * [ratatui-org/ratatui](https://github.com/ratatui/ratatui) [[ratatui](https://crates.io/crates/ratatui)] - 터미널 사용자 인터페이스(TUI)를 만드는 데 집중하는 라이브러리
  * [redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] - 터미널/TTY 제어용 바인딩 없는 라이브러리
  * [ruterm](https://crates.io/crates/ruterm) - TTY 작업용 작고 간단한 라이브러리
  * [subinium/SuperLightTUI](https://github.com/subinium/SuperLightTUI) [[superlighttui](https://crates.io/crates/superlighttui)] - 50개 이상의 위젯, flexbox 레이아웃, 애니메이션 시스템을 갖춘 즉시 모드 TUI 라이브러리 [![CI](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml/badge.svg)](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml)
  * Termbox
    * [gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] - [Termbox](https://github.com/nsf/termbox) 바인딩
  * [TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] - 크로스 플랫폼 터미널 라이브러리

### 압축

* [7z](https://7-zip.org/7z.html)
  * [hasenbanck/sevenz-rust2](https://github.com/hasenbanck/sevenz-rust2) [[sevenz-rust2](https://crates.io/crates/sevenz-rust2)] - 순수 Rust로 작성한 7z 압축 해제/압축 도구 [![Rust](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml)
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
  * [dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) - 선택적으로 표준 라이브러리를 사용하지 않는 Brotli 압축 해제 도구
  * [ende76/brotli-rs](https://github.com/ende76/brotli-rs) - Brotli 압축 구현체
* bzip2
  * [trifectatechfoundation/bzip2-rs](https://github.com/trifectatechfoundation/bzip2-rs) - [libbz2](https://www.sourceware.org/bzip2/) 바인딩
* gzip
  * [zopfli](https://github.com/zopfli-rs/zopfli) [[zopfli](https://crates.io/crates/zopfli)] - 더 높은 품질의 deflate 또는 zlib 압축을 위한 Zopfli 압축 알고리즘 구현체
* gzp
  * [sstadick/gzp](https://github.com/sstadick/gzp/) - deflate 형식과 snappy의 다중 스레드 인코딩 및 디코딩
* LZMA
  * [hasenbanck/lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [[lzma-rust2](https://crates.io/crates/lzma-rust2)] - [tukaani xz for java](https://tukaani.org/xz/java.html)에서 포트한 LZMA / LZMA2 / LZIP / XZ 압축 [![Rust](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml)
* miniz
  * [rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) - [miniz](https://code.google.com/archive/p/miniz) 바인딩 [![빌드 배지](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* [paxit](https://github.com/roquess/paxit) [[paxit](https://crates.io/crates/paxit)] - 여러 알고리즘(zip, tar, gzip, xz, zst 등)으로 파일을 압축하고 해제하는 유연한 라이브러리. 쉽게 확장하는 모듈식 설계
* tar
  * [alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) - tar 아카이브 읽기/쓰기
* zip
  * [zip-rs/zip2](https://github.com/zip-rs/zip2) [[zip](https://crates.io/crates/zip)] - ZIP 아카이브 읽기 및 쓰기
* zstd
  * [gyscos/zstd-rs](https://github.com/gyscos/zstd-rs) - zstd 압축 라이브러리용 rust 바인딩

### 연산

* [alphaville/optimization-engine](https://github.com/alphaville/optimization-engine) [[optimization-engine](https://crates.io/crates/optimization_engine)] - Optimization Engine(OpEn)은 제약 비볼록 최적화 문제 솔버입니다 [![지속적 통합](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml)
* [argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] - 최적화 라이브러리
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
  * [mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) - BLAS 바인딩
* [calebwin/emu](https://github.com/calebwin/emu) - GPGPU 수치 연산 언어
* [dimforge/nalgebra](https://github.com/dimforge/nalgebra) - 저차원 선형대수 라이브러리
* [faer-rs](https://github.com/sarah-quinones/faer-rs) [[faer](https://crates.io/crates/faer)] - Rust용 선형대수 기반
* [fastnum](https://github.com/neogenie/fastnum) [fastnum](https://crates.io/crates/fastnum) - 순수 Rust로 구현한 빠르고 정확한 정밀도 십진수. 금융, 암호화폐 및 기타 고정 정밀도 계산에 적합합니다.
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez/rust-GSL) - GSL 바인딩
* [jolars/basin](https://github.com/jolars/basin) [[basin](https://crates.io/crates/basin)] - 선형대수 백엔드에 대해 제네릭인 수치 최적화 라이브러리. 일차, 미분 없는, 비선형 최소제곱, 진화, 제약 솔버를 제공합니다 [![CI](https://github.com/jolars/basin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jolars/basin/actions/workflows/ci.yml)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
  * [stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) - LAPACK 바인딩
* [ml-rust/numr](https://github.com/ml-rust/numr) [[numr](https://crates.io/crates/numr)] - NumPy에서 영감을 받은 Rust용 수치 연산 라이브러리. 텐서, 선형대수, FFT, 통계, 자동 미분, GPU 가속을 제공합니다. [![CI](https://github.com/ml-rust/numr/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ml-rust/numr/actions/workflows/ci.yml)
* 병렬 처리
  * [arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) - [Arrayfire](https://github.com/arrayfire) 바인딩
  * [autumnai/collenchyma](https://github.com/autumnai/collenchyma) - CUDA, OpenCL, 일반 호스트 CPU에서 병렬 고성능 연산을 수행하는 확장 가능하고 플러그인을 지원하는 백엔드 독립 프레임워크.
  * [luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) - [OpenCL](https://www.khronos.org/opencl/) 바인딩
* 과학
  * [Axect/Peroxide](https://github.com/Axect/Peroxide) - 선형대수, 수치해석, 통계, 머신 러닝 도구를 포함하는 순수 rust 수치 라이브러리
  * [cool-japan/scirs](https://github.com/cool-japan/scirs) - 프로덕션용 순수 Rust 과학 연산. 선형대수, 최적화, 통계, 신경망 등을 포함합니다. Python SciPy에서 영감을 받은 API.
  * [cpmech/russell](https://github.com/cpmech/russell) - 수치 수학, 상미분방정식, 특수 수학 함수, 고성능 (희소) 선형대수용 Rust 과학 라이브러리
  * [Nonanti/mathcore](https://github.com/Nonanti/mathcore) - CAS 기능을 갖춘 기호 수학 라이브러리. 미분, 적분, 방정식 풀이, 임의 정밀도 연산을 지원합니다 [![crates.io](https://img.shields.io/crates/v/mathcore.svg)](https://crates.io/crates/mathcore)
  * [Ryan-D-Gast/differential-equations](https://github.com/Ryan-D-Gast/differential-equations) - 미분방정식을 수치적으로 푸는 고성능 라이브러리
* Statrs
  * [statrs-dev/statrs](https://github.com/statrs-dev/statrs) - 견고한 통계 연산 라이브러리

### 동시성

* [crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) - 병렬 처리 및 저수준 동시성 지원
* [NikitaSmithTheOne/rate-limiters-rs](https://github.com/NikitaSmithTheOne/rate-limiters-rs) [[rate-limiters](https://crates.io/crates/rate_limiters)] - 요청 속도 제한용 Rust 라이브러리(누수 버킷, 토큰 버킷, 고정/슬라이딩 윈도)
* [orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] - `Rc`/`Arc` 포인터 타입을 추상화하는 라이브러리. [![빌드 배지](https://github.com/orium/archery/workflows/CI/badge.svg)](https://github.com/orium/archery/actions?query=workflow%3ACI)
* [orx-parallel](https://crates.io/crates/orx-parallel) - 고성능이며 설정 가능하고 표현력이 풍부한 병렬 연산 라이브러리.
* [Rayon](https://github.com/rayon-rs/rayon) - 데이터 병렬 처리 라이브러리
* [rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) - 코루틴 라이브러리
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - 코루틴 I/O

### 설정

* [andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] - [libUCL](https://github.com/vstakhov/libucl) 기반의 기능이 풍부한 설정 라이브러리. [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] - 애플리케이션 설정을 쉽게 처리하는 라이브러리
* [leptonyu/cfg-rs](https://github.com/leptonyu/cfg-rs) [[cfg-rs](https://crates.io/crates/cfg-rs)] - Rust 애플리케이션용 설정 라이브러리.
* [rust-cli/config-rs](https://github.com/rust-cli/config-rs) [[config](https://crates.io/crates/config)] - 계층형 설정 시스템(12-factor 애플리케이션을 강력하게 지원).
* [SergioBenitez/Figment](https://github.com/SergioBenitez/Figment) [[figment](https://crates.io/crates/figment)] - 번거로움이 믿기 어려울 만큼 없는 설정 라이브러리.
* [softprops/envy](https://github.com/softprops/envy) - 환경 변수를 타입 안전한 구조체로 역직렬화합니다 [![Main](https://github.com/softprops/envy/actions/workflows/main.yml/badge.svg)](https://github.com/softprops/envy/actions/workflows/main.yml)

### 암호학

[[암호화](https://crates.io/keywords/crypto), [암호학](https://crates.io/keywords/cryptography)]

* [arkworks-rs/circom-compat](https://github.com/arkworks-rs/circom-compat) - Groth16 증명 및 위트니스 생성을 위한 Circom R1CS용 Arkworks 바인딩.
* [briansmith/ring](https://github.com/briansmith/ring) - Rust와 BoringSSL 암호 기본 요소를 사용하는 안전하고 빠르며 작은 암호화.
* [briansmith/webpki](https://github.com/briansmith/webpki) - Web PKI TLS X.509 인증서 검증.
* [conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] - 터미널에서 사용하는 간단한 비밀번호 관리자
* [cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] - 일반적인 데이터 보안 작업을 해결하는 고수준 암호화 라이브러리. 다중 플랫폼 앱에 가장 적합합니다. [![빌드 배지](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) - 암호 알고리즘
* [dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) - Curve25519 연산
* [debris/tiny-keccak](https://github.com/debris/tiny-keccak) - Keccak 계열(SHA3)
* [dusk-network/bls12-381](https://github.com/dusk-network/bls12_381) - 영지식 성능을 개선한 Rust 네이티브 BLS12-381. 최적화된 다중 스칼라 곱셈, 맞춤형 해싱, serde 지원으로 프라이버시 중심 프로토콜과 영지식 애플리케이션에 적합합니다. ![빌드 상태](https://github.com/dusk-network/bls12_381/workflows/Continuous%20integration/badge.svg) [[dusk-bls12_381](https://crates.io/crates/dusk-bls12_381)]
* [dusk-network/plonk](https://github.com/dusk-network/plonk/) - BLS12-381 위의 PLONK zk-SNARK를 구현한 고성능 Rust 네이티브 구현체. 효율적인 영지식 증명을 위해 맞춤 게이트와 KZG10 다항식 커밋으로 최적화했습니다. ![빌드 상태](https://github.com/dusk-network/plonk/workflows/Continuous%20integration/badge.svg) [[PLONK](https://crates.io/crates/dusk-plonk)]
* [dusk-network/poseidon252](https://github.com/dusk-network/Poseidon252) - BLS12-381 위의 Rust 네이티브 Poseidon 해시. Poseidon252는 zk-SNARK 효율성을 위해 만들어 프라이버시 중심 프로토콜과 영지식 애플리케이션에 적합합니다. ![빌드 상태](https://github.com/dusk-network/Poseidon252/workflows/Continuous%20integration/badge.svg) [[Poseidon](https://crates.io/crates/dusk-poseidon)]
* [exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] - 블록체인 프로젝트용 확장 가능한 프레임워크
* [facebook/opaque-ke](https://github.com/facebook/opaque-ke) - 최근의 [OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/) 비밀번호 인증 키 교환 구현체. [![빌드 배지](https://github.com/facebook/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/facebook/opaque-ke)
* [iddm/randomorg](https://github.com/iddm/randomorg) - random.org 클라이언트 라이브러리. [![크레이트 배지](https://img.shields.io/crates/v/randomorg.svg)](https://crates.io/crates/randomorg)
* [klutzy/suruga](https://github.com/klutzy/suruga) - [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246) 구현체
* [kn0sys/ecc-rs](https://github.com/kn0sys/ecc-rs) - 타원곡선 암호 튜토리얼용 직관적인 라이브러리 [![Crates.io 버전](https://img.shields.io/crates/v/kn0syseccrs)](https://crates.io/crates/kn0syseccrs)
* [kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) - Security Framework 바인딩(OSX 네이티브)
* [libOctavo/octavo](https://github.com/libOctavo/octavo) - 모듈식 해시 및 암호 라이브러리
* [orion-rs/orion](https://github.com/orion-rs/orion) - 쉽고 사용하기 편한 암호화를 제공하는 라이브러리. '편리함'은 사용하기 쉽고 잘못 사용하기 어려운 고수준 API를 제공한다는 뜻입니다. [![테스트](https://github.com/orion-rs/orion/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/orion-rs/orion/actions/workflows/test.yml)
* [racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) [[djangohashers](https://crates.io/crates/djangohashers)] - Django Project에서 사용하는 비밀번호 기본 요소의 포트. Django 없이 그 방식에 따라 비밀번호를 해시하고 검증합니다.
* [rust-native-tls/rust-native-tls](https://github.com/rust-native-tls/rust-native-tls) - 네이티브 TLS 라이브러리 바인딩
* [rust-openssl](https://github.com/rust-openssl/rust-openssl) - [OpenSSL](https://www.openssl.org/) 바인딩
* [rust-random/rand](https://github.com/rust-random/rand) [[rand](https://crates.io/crates/rand)] - 강력한 PRNG와 소형 PRNG, 난수 값 샘플링, 분포, 확률 과정을 지원하는 종합 난수 생성 라이브러리. [![테스트 상태](https://github.com/rust-random/rand/actions/workflows/test.yml/badge.svg?event=push)](https://github.com/rust-random/rand/actions)
* [RustCrypto/hashes](https://github.com/RustCrypto/hashes) - 암호학적 해시 함수 모음
* [rustls/rustls](https://github.com/rustls/rustls) - TLS 구현체
* [schnorrkel](https://github.com/paritytech/schnorrkel) - Ristretto 군의 Schnorr VRF와 서명
* [sorairolake/abcrypt](https://github.com/sorairolake/abcrypt) [[abcrypt](https://crates.io/crates/abcrypt)] - 간단하고 현대적이며 안전한 파일 암호화 라이브러리. [![CI](https://github.com/sorairolake/abcrypt/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/abcrypt/actions?query=workflow%3ACI)
* [sorairolake/scryptenc-rs](https://github.com/sorairolake/scryptenc-rs) [[scryptenc](https://crates.io/crates/scryptenc)] - scrypt 암호화 데이터 형식 구현체. [![CI](https://github.com/sorairolake/scryptenc-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/scryptenc-rs/actions?query=workflow%3ACI)
* [suradet-ps/encryptman](https://github.com/suradet-ps/encryptman) [[encryptman](https://crates.io/crates/encryptman)] - HKDF 키 파생을 사용하는 애플리케이션 설정용 AES-256-GCM 암호화 [![CI](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml)
* [verifyfetch](https://github.com/hamzaydia/verifyfetch) - 고정 메모리 사용량의 Rust/WASM SHA-256 해싱으로 스트리밍 파일 무결성을 검증합니다. 브라우저에서 대용량 파일 다운로드를 재개할 수 있습니다.

### 데이터 처리

* [amv-dev/yata](https://github.com/amv-dev/yata) - 고성능 기술적 분석 라이브러리 [![빌드 상태](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)
* [AndreaBozzo/dataprof](https://github.com/AndreaBozzo/dataprof) [[dataprof](https://crates.io/crates/dataprof)] - Python 바인딩을 갖춘 CSV, JSON, Parquet, Arrow용 데이터 프로파일링 및 품질 검사 [![CI](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml)
* [bluss/ndarray](https://github.com/rust-ndarray/ndarray) - 배열 뷰, 다차원 슬라이싱, 효율적인 연산을 갖춘 N차원 배열
* [DataBora/elusion](https://github.com/DataBora/elusion) [[elusion](https://crates.io/crates/elusion)] - DataFusion 기반 종단 간 데이터 엔지니어링 DataFrame 라이브러리. Microsoft Fabric, Azure, SharePoint, FTP, Postgres, MySQL, REST API 커넥터를 제공합니다
* [datafusion](https://github.com/apache/datafusion) - Apache Arrow 인메모리 형식으로 Rust에서 고품질 데이터 중심 시스템을 구축하는 매우 빠르고 확장 가능한 쿼리 엔진인 DataFusion.
* [GoPlasmatic/datalogic-rs](https://github.com/GoPlasmatic/datalogic-rs) [[datalogic-rs](https://crates.io/crates/datalogic-rs)] - Node, WASM, Python, Go, Java, .NET, PHP 공식 바인딩을 갖춘 비즈니스 규칙 및 동적 필터링용 고성능 타입 안전 JSONLogic 평가 엔진 [![CI](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml)
* [ironcalc/IronCalc](https://github.com/ironcalc/IronCalc) [[ironcalc](https://crates.io/crates/ironcalc)] - 개발 중인 새로운 현대적 스프레드시트 엔진.
* [kernelmachine/utah](https://github.com/kernelmachine/utah) - DataFrame 구조 및 연산
* [lakehq/sail](https://github.com/lakehq/sail) - Rust로 작성한 Apache Spark의 즉시 대체 도구인 Sail. 배치 처리, 스트림 처리, 연산 집약적인 AI 워크로드를 통합합니다.
* [logisky/LogiSheets](https://github.com/logisky/LogiSheets) [[logisheets-rs](https://crates.io/crates/logisheets-rs)] - 실제 제품을 구동하는 새로운 현대적 스프레드시트 엔진.
* [openooxml/betteroffice](https://github.com/openooxml/betteroffice) - DOCX, XLSX, PPTX용 네이티브 OOXML 엔진. 편집, 레이아웃, 렌더링, CRDT 협업, 에이전트 편집을 제공하며 WebAssembly로 컴파일됩니다.
* [pathwaycom/pathway](https://github.com/pathwaycom/pathway) - 300개 이상의 데이터 소스를 지원하는 Rust 런타임 기반 고성능 오픈 소스 Python ETL 프레임워크.
* [pg_analytics](https://github.com/paradedb/paradedb/tree/dev/pg_analytics) - Postgres 내부의 분석 쿼리 처리를 전용 OLAP 데이터베이스에 견줄 수준으로 가속하는 PostgreSQL 확장.
* [pg_lakehouse](https://github.com/paradedb/paradedb/tree/dev/pg_lakehouse) - Postgres를 AWS S3/GCS 같은 객체 저장소와 Delta Lake/Iceberg 같은 테이블 형식용 분석 쿼리 엔진으로 바꾸는 PostgreSQL 확장.
* [pola-rs/polars](https://github.com/pola-rs/polars) - 빠르고 기능이 완비된 DataFrame 라이브러리 [![Rust 린트](https://github.com/pola-rs/polars/actions/workflows/lint-rust.yml/badge.svg)](https://github.com/pola-rs/polars/actions)
* [PSU3D0/formualizer](https://github.com/PSU3D0/formualizer) [[formualizer](https://crates.io/crates/formualizer)] - Excel 통합 문서를 파싱, 평가, 변경하는 내장 가능한 스프레드시트 엔진. 400개 이상의 함수, Arrow 기반 저장소, 증분 재계산, Python 및 WASM 바인딩 [![CI](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml)
* [weld-project/weld](https://github.com/weld-project/weld) - 데이터 분석 애플리케이션용 고성능 런타임

### 데이터 스트리밍

* [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) - 고성능 Rust 스트림 처리 엔진 [![CI](https://github.com/arkflow-rs/arkflow/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/arkflow-rs/arkflow/actions)
* [ArroyoSystems/arroyo](https://github.com/ArroyoSystems/arroyo) - Rust와 SQL의 고성능 실시간 분석 [![CI](https://github.com/ArroyoSystems/arroyo/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ArroyoSystems/arroyo/actions)
* [beava-dev/beava](https://github.com/beava-dev/beava) - 단일 바이너리 피처 서버. HTTP 또는 TCP로 이벤트를 보내고 중간 브로커 없이 최신 개체별 카운터와 집계를 인라인으로 쿼리합니다. 사기 방지, 추천, LLM 가드레일, 제품 내 분석용 [![CI](https://github.com/beava-dev/beava/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/beava-dev/beava/actions)
* [fluvio](https://github.com/fluvio-community/fluvio) - 프로그래밍 가능한 데이터 스트리밍 플랫폼 [![CI](https://github.com/fluvio-community/fluvio/actions/workflows/ci.yml/badge.svg)](https://github.com/fluvio-community/fluvio/actions)
* [iggy](https://github.com/apache/iggy) [[iggy](https://crates.io/crates/iggy)] - QUIC, TCP, HTTP 전송 프로토콜을 지원하는 영속 메시지 스트리밍 플랫폼 [![CI](https://github.com/apache/iggy/actions/workflows/test.yml/badge.svg)](https://github.com/apache/iggy/actions/workflows/test.yml)
* [wingfoil](https://github.com/wingfoil-io/wingfoil) - 그래프 기반 스트림 처리 프레임워크 [![CI](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml/badge.svg)](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml)

### 자료 구조

* [alrevuelta/rs-merkle-tree](https://github.com/alrevuelta/rs-merkle-tree) - 설정 가능한 저장소 백엔드와 해시 함수를 갖춘 Rust 머클 트리 구현체. 고정 깊이 및 증분 전용이며 빠른 증명 생성에 최적화되었습니다.
* [ashvardanian/NumKong](https://github.com/ashvardanian/NumKong) - x86 AVX2 및 AVX-512와 Arm NEON용 SIMD 가속 벡터 거리 및 유사도 함수 [![crates.io](https://img.shields.io/crates/v/simsimd.svg)](https://crates.io/crates/simsimd)
* [becheran/grid](https://github.com/becheran/grid) [[grid](https://crates.io/crates/grid)] - 사용하기 쉽고 빠른 2차원 자료 구조를 제공합니다. [![빌드 상태](https://github.com/becheran/grid/actions/workflows/rust.yml/badge.svg)](https://github.com/becheran/grid/actions)
* [billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] - 삼진 검색 트리 컬렉션
* [contain-rs](https://github.com/contain-rs) - Rust std::collections 확장
* [danielpclark/array_tool](https://github.com/danielpclark/array_tool) - 배열 도우미. 배열에서 자주 사용하는 메서드를 벡터에 제공합니다. 대부분의 사용 사례를 처리하는 다형적 구현체.
* [enum-map](https://codeberg.org/sugar700/enum-map) [[enum-map](https://crates.io/crates/enum-map)] - 배열에 값을 저장하는 최적화된 열거형 맵 구현체.
* [fizyk20/generic-array](https://github.com/fizyk20/generic-array) - typenum으로 크기를 지정하는 배열을 가능하게 하는 기법
* [garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] - 우선순위 변경을 구현한 우선순위 큐.
* [greyblake/nutype](https://github.com/greyblake/nutype) [[nutype](https://crates.io/crates/nutype)] - 검증 제약 조건을 갖춘 newtype 구조체를 정의합니다. [![빌드 상태](https://github.com/greyblake/nutype/actions/workflows/ci.yml/badge.svg)](https://github.com/greyblake/nutype/actions)
* [jeromefroe/lru-rs](https://github.com/jeromefroe/lru-rs) [[lru](https://crates.io/crates/lru)] - O(1) `put`, `get`, `get_mut`, `pop` 연산을 갖춘 LRU 캐시 구현체. [![crates.io](https://img.shields.io/crates/v/lru.svg)](https://crates.io/crates/lru)
* [mikwielgus/undoredo](https://github.com/mikwielgus/undoredo) [[undoredo](https://crates.io/crates/undoredo)] - 임의 자료 구조용 실행 취소/다시 실행 패턴 구현체. 맞춤 타입용 derive 매크로와 함께 델타 기반(희소 차이), 스냅샷 기반, 명령 기반 방식을 지원합니다. no_std 및 serde 호환. [![Crates.io](https://img.shields.io/crates/v/undoredo.svg)](https://crates.io/crates/undoredo)
* [mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) - 빠른 지리공간 인덱싱과 최근접 이웃 조회용 K차원 트리
* [orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] - 영속 자료 구조. [![빌드 배지](https://github.com/orium/rpds/workflows/CI/badge.svg)](https://github.com/orium/rpds/actions?query=workflow%3ACI)
* [RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) - Roaring 비트맵
* [rust-itertools/itertools](https://github.com/rust-itertools/itertools) - 추가 반복자 어댑터, 함수, 매크로
* [sorairolake/bit-int](https://github.com/sorairolake/bit-int) [[bit-int](https://crates.io/crates/bit-int)] - 임의의 고정 비트 너비 정수 라이브러리 [![CI](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml)
* [tnballo/scapegoat](https://github.com/tnballo/scapegoat) [[scapegoat](https://crates.io/crates/scapegoat)] - 안전하고 실패 처리가 가능하며 스택만 사용하는 `BTreeSet` 및 `BTreeMap` 대안. [![GitHub Actions](https://github.com/tnballo/scapegoat/workflows/test/badge.svg?branch=master)](https://github.com/tnballo/scapegoat/actions)
* [yamafaktory/hypergraph](https://github.com/yamafaktory/hypergraph) [[hypergraph](https://crates.io/crates/hypergraph)] - 방향성 하이퍼그래프를 생성하는 자료 구조 라이브러리인 Hypergraph. [![ci](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml)

### 데이터 시각화

* [blitzarx1/egui_graphs](https://github.com/blitzarx1/egui_graphs) [[egui_graphs](https://crates.io/crates/egui_graphs)] - egui와 petgraph 기반의 대화형 그래프 시각화 위젯. [![Crates.io](https://img.shields.io/crates/v/egui_graphs)](https://crates.io/crates/egui_graphs) [![docs.rs](https://img.shields.io/docsrs/egui_graphs)](https://docs.rs/egui_graphs)
* [djduque/pgfplots](https://github.com/djduque/pgfplots) [[pgfplots](https://crates.io/crates/pgfplots)] - 출판 품질의 그림 생성 라이브러리. [![빌드](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml/badge.svg)](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml)
* [mazznoer/colorgrad-rs](https://github.com/mazznoer/colorgrad-rs) [[colorgrad](https://crates.io/crates/colorgrad)] - 데이터 시각화, 차트, 게임, 지도, 생성형 미술 등을 위한 색상 척도 라이브러리.
* [milliams/plotlib](https://github.com/milliams/plotlib) - Rust용 데이터 플로팅 라이브러리
* [plotly](https://github.com/plotly/plotly.rs) - Rust용 Plotly
* [plotpy](https://github.com/cpmech/plotpy) [[plotpy](https://crates.io/crates/plotpy)] - Python(Matplotlib)을 사용하는 Rust 플로팅 라이브러리
* [plotters](https://github.com/plotters-rs/plotters) - [![빌드 배지](https://github.com/plotters-rs/plotters/workflows/CI/badge.svg)](https://github.com/plotters-rs/plotters/actions)
* [rerun](https://github.com/rerun-io/rerun) - [[rerun](https://crates.io/crates/rerun)] - 컴퓨터 비전과 로봇 데이터(텐서, 점군 등)를 기록하는 SDK와 시간에 따라 데이터를 탐색하는 시각화 도구의 조합.
* [saresend/gust](https://github.com/saresend/Gust) - 작은 차트/시각화 도구 및 부분적인 vega 구현체
* [shergin/malevich](https://github.com/shergin/malevich) [[malevich](https://crates.io/crates/malevich)] - 터미널 플로팅: 자동 축을 갖춘 선, 산점도, 막대, 히스토그램, 히트맵, 상자 그림, 바이올린 등
* [wangjiawen2013/charton](https://github.com/wangjiawen2013/charton) - Rust의 계층형 그래픽 문법 라이브러리. [![문서](https://img.shields.io/docsrs/charton/latest)](https://docs.rs/charton) [![빌드 상태](https://github.com/wangjiawen2013/charton/actions/workflows/ci.yml/badge.svg)](https://github.com/wangjiawen2013/charton/actions)

### 데이터베이스

[[데이터베이스](https://crates.io/keywords/database)]

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

  * [ArangoDB](https://arangodb.com)
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 가벼운 ArangoDB 객체 문서, 관계형 및 그래프 매퍼 [![파이프라인 상태](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
    * [Arangors](https://github.com/fMeow/arangors) [[arangors](https://crates.io/crates/arangors)] - ArangoDB 드라이버
  * [Cassandra](https://cassandra.apache.org/_/index.html) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
    * [AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] - 네이티브 클라이언트
    * [cassandra-rs](https://github.com/cassandra-rs/cassandra-rs) - DataStax C/C++ 바인딩
    * [krojew/cdrs-tokio](https://github.com/krojew/cdrs-tokio) - 100% Rust로 작성한 고수준 비동기 Cassandra 클라이언트. [![빌드 배지](https://github.com/krojew/cdrs-tokio/actions/workflows/rust.yml/badge.svg)](https://github.com/krojew/cdrs-tokio/actions)
      * [[cassandra-protocol](https://crates.io/crates/cassandra-protocol)] - Cassandra 프로토콜 구현체.
      * [[cdrs-tokio](https://crates.io/crates/cdrs-tokio)] - 프로덕션용 비동기 Apache Cassandra 드라이버 클라이언트
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] - CouchDB REST API 클라이언트
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
    * [softprops/dynomite](https://github.com/softprops/dynomite) - `rusoto_dynamodb`와 강한 타입으로 편리하게 상호작용하는 라이브러리 [![빌드 배지](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] - [Elastic](https://www.elastic.co/) REST API 클라이언트
    * [elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] - Rust로 작성한 효율적인 모듈식 Elasticsearch API 클라이언트인 elastic [![빌드 배지](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
  * etcd
    * [jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] - CoreOS etcd용 클라이언트 라이브러리.
  * [InfluxDB](https://www.influxdata.com/)
    * [driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) - 동기화 인터페이스
  * LevelDB
    * [skade/leveldb](https://github.com/skade/leveldb) - [LevelDB](https://github.com/google/leveldb) 바인딩
  * [LMDB](https://www.symas.com/lmdb.php) [[lmdb](https://crates.io/keywords/lmdb)]
    * [meilisearch/heed](https://github.com/meilisearch/heed) [[heed](https://crates.io/crates/heed)] - 최소 오버헤드를 갖춘 완전한 타입 지정 LMDB 래퍼
    * [vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] - LMDB용 Rust 바인딩
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] - [MongoDB](https://www.mongodb.com/) 바인딩
  * [MongrelDB](https://www.mongreldb.com)
    * [visorcraft/MongrelDB](https://github.com/visorcraft/MongrelDB) [[mongreldb-core](https://crates.io/crates/mongreldb-core)] - SQL, 벡터 검색, 전문 검색, AI 네이티브 검색을 갖춘 임베디드 열 기반 데이터베이스 엔진 [![빌드 배지](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
    * [seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) - Python PickleDB에서 많은 영감을 받은 가볍고 간단한 키-값 저장소.
  * [PoloDB](https://www.polodb.org/)
    * [PoloDB](https://github.com/PoloDB/PoloDB) - MongoDB와 비슷한 API를 갖춘 임베디드 JSON 기반 데이터베이스. ![GitHub 워크플로 상태](https://img.shields.io/github/actions/workflow/status/PoloDB/PoloDB/rust.yml)
  * [Redb](https://www.redb.org/)
    * [Redb](https://github.com/cberner/redb) - 임베디드 키-값 데이터베이스. rocksdb와 lmdb 등 다른 임베디드 키-값 저장소와 비슷한 인터페이스를 제공합니다. ![GitHub 워크플로 상태](https://github.com/cberner/redb/actions/workflows/ci.yml/badge.svg)
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [aembke/fred](https://github.com/aembke/fred.rs) [[fred](https://crates.io/crates/fred)] - Tokio를 사용하는 Rust용 고수준 비동기 [Redis](https://redis.io/) 클라이언트. ) [![CircleCI](https://circleci.com/gh/aembke/fred.rs/tree/main.svg?style=svg)]([https://circleci.com/gh/aembke/fred.rs/tree/main](https://app.circleci.com/pipelines/github/aembke/fred.rs?branch=main))
    * [redis-rs](https://github.com/redis-rs/redis-rs) - [Redis](https://redis.io/) 라이브러리 [![Rust](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml)
  * [RocksDB](https://rocksdb.org/)
    * [rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) - RocksDB 바인딩 [![RocksDB CI](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml)
  * [SurrealDB](https://surrealdb.com/)
    * [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) - SurrealDB 임베디드 문서-그래프 데이터베이스
  * [UnQLite](https://github.com/symisc/unqlite)
    * [zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) - UnQLite 바인딩
  * [ZooKeeper](https://zookeeper.apache.org/)
    * [bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] - Apache ZooKeeper용 클라이언트 라이브러리.
    * [krojew/rust-zookeeper](https://github.com/krojew/rust-zookeeper) [[zookeeper-async](https://crates.io/crates/zookeeper-async)] - tokio 기반 비동기 Zookeeper 클라이언트.  ![빌드 상태](https://github.com/krojew/rust-zookeeper/actions/workflows/rust.yml/badge.svg)
* OGM [[ogm](https://crates.io/keywords/ogm)]
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 가벼운 ArangoDB 객체 문서, 관계형 및 그래프 매퍼 [![파이프라인 상태](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [ayarotsky/diesel-guard](https://github.com/ayarotsky/diesel-guard) - 위험한 PostgreSQL 마이그레이션(테이블 잠금, 재작성, 블로킹 작업)을 찾아 안전한 대안을 제안하는 Diesel 및 SQLx 린터 [![크레이트](https://img.shields.io/crates/v/diesel-guard.svg)](https://crates.io/crates/diesel-guard)
  * [diesel-rs/diesel](https://github.com/diesel-rs/diesel) - ORM 및 쿼리 빌더
  * [ivanceras/rustorm](https://github.com/ivanceras/rustorm) - ORM
  * [njord](https://github.com/njord-rs/njord) - ⛵ 다재다능하고 기능이 풍부한 Rust ORM [![빌드 상태](https://github.com/njord-rs/njord/actions/workflows/core.yml/badge.svg)](https://github.com/njord-rs/njord/actions/workflows/core.yml) ![crates.io](https://img.shields.io/crates/v/njord.svg)
  * [rbatis/rbatis](https://github.com/rbatis/rbatis) - 고성능 ORM 프레임워크(JSON 기반)
  * [SeaQL/sea-orm](https://github.com/SeaQL/sea-orm) - 🐚 비동기 및 동적 ORM  [![크레이트](https://img.shields.io/crates/v/sea-orm.svg)](https://crates.io/crates/sea-orm) [![문서](https://img.shields.io/docsrs/sea-orm/latest)](https://docs.rs/sea-orm) [![빌드 상태](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml)
  * [SeaQL/seaography](https://github.com/SeaQL/seaography) - 🧭 SeaORM용 GraphQL 프레임워크 [![크레이트](https://img.shields.io/crates/v/seaography.svg)](https://crates.io/crates/seaography) [![문서](https://img.shields.io/docsrs/seaography/latest)](https://docs.rs/seaography) [![빌드 상태](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml/badge.svg)](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml)
  * [thegenius/taitan-orm](https://github.com/thegenius/taitan-orm) - 비동기 및 컴파일 시간 생성을 제공하는 최첨단 Rust ORM.
* [sfackler/r2d2](https://github.com/sfackler/r2d2) - 범용 연결 풀
* SQL [[sql](https://crates.io/keywords/sql)]
  * 범용
    * [launchbadge/sqlx](https://github.com/launchbadge/sqlx) - 강한 타입 지원을 갖춘 비동기 PostgreSQL/MySQL/SQLite 연결 풀 [![빌드 배지](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
    * [SeaQL/sea-query](https://github.com/SeaQL/sea-query) - 🔱 MySQL, Postgres, SQLite용 동적 SQL 쿼리 빌더 [![크레이트](https://img.shields.io/crates/v/sea-query.svg)](https://crates.io/crates/sea-query) [![문서](https://img.shields.io/docsrs/sea-query/latest)](https://docs.rs/sea-query) [![빌드 상태](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml)
    * [SeaQL/sea-schema](https://github.com/SeaQL/sea-schema) - 🌿 SQL 스키마 정의 및 검색 [![크레이트](https://img.shields.io/crates/v/sea-schema.svg)](https://crates.io/crates/sea-schema) [![문서](https://img.shields.io/docsrs/sea-schema/latest)](https://docs.rs/sea-schema) [![빌드 상태](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml)
  * Microsoft SQL
    * [prisma/tiberius](https://github.com/prisma/tiberius) - [![Cargo 테스트](https://github.com/prisma/tiberius/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prisma/tiberius/actions/workflows/test.yml)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) - MySQL 프록시 [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
    * [blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] - Tokio 기반 비동기 Mysql 드라이버. [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] - 네이티브 MySql 클라이언트
  * Oracle
    * [kubo/rust-oracle](https://github.com/kubo/rust-oracle) [[oracle](https://crates.io/crates/oracle)] - Oracle 드라이버 [![빌드 배지](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml/badge.svg?branch=master)](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 외부 의존성이 적은 빠른 구현체.
    * [isdaniel/pg-walstream](https://github.com/isdaniel/pg-walstream) - PostgreSQL 논리 및 물리 복제 스트리밍용 고성능 비동기 CDC(변경 데이터 캡처) 라이브러리. [![Crates.io 버전](https://img.shields.io/crates/v/pg_walstream)](https://crates.io/crates/pg_walstream)
    * [rust-postgres](https://github.com/rust-postgres/rust-postgres) [[postgres](https://crates.io/crates/postgres)] - 네이티브 [PostgreSQL](https://www.postgresql.org/) 클라이언트
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [rusqlite](https://github.com/rusqlite/rusqlite) - [Sqlite3](https://sqlite.org/index.html) 바인딩
* [VennDB](https://venndb.plabayo.tech/) [[venndb](https://github.com/plabayo/venndb)] - 비트(플래그) 열로 쿼리하는 행을 위한 Rust 추가 전용 인메모리 데이터베이스.

### 날짜 및 시간

[[날짜](https://crates.io/keywords/date), [시간](https://crates.io/keywords/time)]

* [arthurhenrique/rusti-cal](https://github.com/arthurhenrique/rusti-cal) [[rusti-cal](https://crates.io/crates/rusti-cal)] - 매우 빠른 cal(1) 복제 도구. 9999년 이상을 지원하며 Rust로 작성했습니다.
* [burntSushi/jiff](https://github.com/BurntSushi/jiff) - 성공적인 사용으로 자연스럽게 이끄는 Rust 날짜-시간 라이브러리. [![빌드 상태](https://github.com/BurntSushi/jiff/workflows/ci/badge.svg)](https://github.com/BurntSushi/jiff/actions)
* [chronotope/chrono](https://github.com/chronotope/chrono) - 날짜 및 시간 라이브러리
* [Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] - 사람이 쓰는 시간 표현을 밀리초로 변환하는 라이브러리 [![빌드 배지](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)
* [sorairolake/dos-date-time](https://github.com/sorairolake/dos-date-time) [[dos-date-time](https://crates.io/crates/dos-date-time)] - MS-DOS 날짜 및 시간 라이브러리 [![CI](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml)
* [sorairolake/nt-time](https://github.com/sorairolake/nt-time) [[nt-time](https://crates.io/crates/nt-time)] - Windows 파일 시간 라이브러리. [![CI](https://github.com/sorairolake/nt-time/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/nt-time/actions?query=workflow%3ACI)
* [time-rs/time](https://github.com/time-rs/time) - [![빌드 배지](https://github.com/time-rs/time/workflows/Build/badge.svg)](https://github.com/time-rs/time/actions)

### 분산 시스템

* Antimony
  * [antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] - 스트림 처리 / 분산 연산 플랫폼
* Apache Kafka
  * [fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] - [librdkafka](https://github.com/confluentinc/librdkafka) 바인딩
  * [gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) [[schema_registry_converter](https://crates.io/crates/schema_registry_converter)] - [confluent schema registry](https://www.confluent.io/product/confluent-platform/data-compatibility/) 연동
  * [kafka-rust/kafka-rust](https://github.com/kafka-rust/kafka-rust) - Apache Kafka용 Rust 클라이언트
* HDFS
  * [hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) [[hdfs](https://crates.io/crates/hdfs)] - libhdfs 바인딩
* 기타
  * [build-trust/ockam](https://github.com/build-trust/ockam) [[ockam](https://crates.io/crates/ockam)] - 분산 애플리케이션용 종단 간 암호화, 상호 인증, ABAC [![빌드 배지](https://github.com/build-trust/ockam/workflows/Rust/badge.svg)](https://github.com/build-trust/ockam)
  * [zannis/shove](https://github.com/zannis/shove) [[shove](https://crates.io/crates/shove)] - RabbitMQ, Kafka, NATS JetStream, AWS SNS/SQS, Redis Streams에 일관된 단일 API를 제공하는 타입 안전 비동기 발행/구독. 재시도, DLQ 라우팅, 자동 확장 소비자 그룹 지원 [![CI](https://github.com/zannis/shove/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/zannis/shove/actions/workflows/ci.yml)

### 도메인 주도 설계

  * [serverlesstechnology/cqrs](https://github.com/serverlesstechnology/cqrs) [[cqrs-es](https://crates.io/crates/cqrs-es)] - [사용자 가이드](https://doc.rust-cqrs.org/)를 갖춘 CQRS 및 이벤트 소싱 프레임워크

### eBPF

* [aya/aya-rs](https://github.com/aya-rs/aya) - 개발자 경험과 운영 편의성에 중점을 두고 만들었습니다.
* [libbpf/libbpf-rs](https://github.com/libbpf/libbpf-rs) - 최소한의 뚜렷한 철학을 갖춘 eBPF 도구.

### 이메일

[[이메일](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [duesee/imap-codec](https://github.com/duesee/imap-codec) [[imap-codec](https://crates.io/crates/imap-codec)] - 매우 안정적이며 완전한 IMAP 코덱 [![빌드 및 테스트](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml)
* [gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) - SendGrid API 라이브러리
* [jdrouet/catapulte](https://github.com/jdrouet/catapulte) - [MRML](https://github.com/jdrouet/mrml) 템플릿으로 이메일을 보내는 마이크로서비스.
* [jdrouet/jolimail](https://github.com/jdrouet/jolimail) - [MRML](https://github.com/jdrouet/mrml) 템플릿 제작 웹 애플리케이션.
* [jdrouet/mrml](https://github.com/jdrouet/mrml) - 모든 메일 클라이언트에서 동작하는 멋진 이메일 템플릿 생성 라이브러리.
* [lettre/lettre](https://github.com/lettre/lettre) - SMTP 라이브러리 [![CI](https://github.com/lettre/lettre/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/lettre/lettre/actions/workflows/test.yml)
* [mailtutan/mailtutan](https://github.com/mailtutan/mailtutan) - 테스트 및 개발 환경용 SMTP 서버.
* [meli/meli](https://github.com/meli/meli) - 🐝 터미널 메일 클라이언트
* [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists) [[check-if-email-exists](https://crates.io/crates/check-if-email-exists)] - 메일을 보내지 않고 이메일 주소 존재 여부를 확인합니다. SMTP 검증, 일회용 주소 감지, 캐치올 검사를 제공합니다 [![Actions 상태](https://github.com/reacherhq/check-if-email-exists/workflows/pr/badge.svg)](https://github.com/reacherhq/check-if-email-exists/actions)
* [rustmailer/bichon](https://github.com/rustmailer/bichon) - 전문 검색과 WebUI를 갖춘 가벼운 고성능 이메일 아카이버.
* [staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] - 실제 이메일 파일을 파싱하는 라이브러리
* [stalwartlabs/mail-auth](https://github.com/stalwartlabs/mail-auth) [[mail-auth](https://crates.io/crates/mail-auth)] - DKIM, ARC, SPF, DMARC 메시지 인증 라이브러리 [![빌드 배지](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml)
* [stalwartlabs/mail-parser](https://github.com/stalwartlabs/mail-parser) [[mail-parser](https://crates.io/crates/mail-parser)] - 완전한 MIME 지원을 갖춘 빠르고 견고한 이메일 파싱 라이브러리 [![빌드 배지](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml)
* [stalwartlabs/mail-send](https://github.com/stalwartlabs/mail-send) [[mail-send](https://crates.io/crates/mail-send)] - DKIM을 지원하는 이메일 빌더 및 SMTP 클라이언트 라이브러리 [![빌드 배지](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml)
* [tweedegolf/mailcrab](https://github.com/tweedegolf/mailcrab) - 개발용 이메일 테스트 서버.

### 인코딩

[[인코딩](https://crates.io/keywords/encoding)]

* ASN.1
  * [alex/rust-asn1](https://github.com/alex/rust-asn1) - ASN.1(DER) 직렬화 도구
* 바코드
  * [rxing-core/rxing](https://github.com/rxing-core/rxing) [[rxing](https://crates.io/crates/rxing)] - zxing 바코드 라이브러리의 rust 포트. [![Rust](https://github.com/rxing-core/rxing/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rxing-core/rxing/actions/workflows/rust.yml)
* 바이너리
  * [bincode](https://crates.io/crates/bincode) - 바이너리 인코더/디코더
  * [bincode-next](https://crates.io/crates/bincode-next) - 현재 유지보수가 중단된 bincode의 후속 바이너리 인코더/디코더
  * [jamesmunns/postcard](https://github.com/jamesmunns/postcard) [[postcard](https://crates.io/crates/postcard)] - Serde용 #![no_std] 중심 직렬화 및 역직렬화 도구인 Postcard.![no_std] focused serializer and deserializer for Serde.
  * [m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] - 크로스 플랫폼, 제로 카피, 엔디언 인식 바이너리 파싱
* BSON
  * [mongodb/bson-rust](https://github.com/mongodb/bson-rust) - BSON 인코딩 및 디코딩 지원
* 바이트 순서 교환
  * [BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) - 빅 엔디언, 리틀 엔디언, 네이티브 바이트 순서를 지원합니다
* Cap'n Proto
  * [capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) - Cap'n Proto는 분산 시스템용 타입 시스템입니다
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) - serde용 CBOR 지원
* 문자 인코딩
  * [hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] - Gecko 지향 Encoding Standard 구현체
  * [lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) - Rust 문자 인코딩 지원(rust-encoding이라고도 함). WHATWG Encoding Standard 기반이며 오류 감지와 복구를 위한 고급 인터페이스도 제공합니다.
* CRC
  * [mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) - 여러 표준을 지원하는 CRC(16, 32, 64) Rust 구현체
* CSV
  * [BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) - Serde를 지원하는 빠르고 유연한 CSV 읽기 및 쓰기 도구
* Data Matrix
  * [jannschu/datamatrix-rs](https://github.com/jannschu/datamatrix-rs) [[datamatrix](https://crates.io/crates/datamatrix)] - 최적화 인코더를 갖춘 Data Matrix(ECC 200) 디코딩 및 인코딩 [![CI](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml)
* EDN
  * [edn-rs](https://github.com/naomijub/edn-rs) [[edn-rs](https://crates.io/crates/edn-rs)] - EDN 형식을 Rust 타입으로 파싱하고 출력하는 크레이트.
* [FlatBuffers](https://flatbuffers.dev/)
  * [frol/flatc-rust](https://github.com/frol/flatc-rust) - Cargo 빌드 스크립트용 FlatBuffers 컴파일러(flatc) 연동
* HAR
  * [mandrean/har-rs](https://github.com/mandrean/har-rs) [[har](https://crates.io/crates/har)] - HTTP Archive Format(HAR) 직렬화 및 역직렬화 라이브러리
* HTML
  * [servo/html5ever](https://github.com/servo/html5ever) - 고성능 브라우저급 HTML5 파서
* JSON
  * [cloudwego/sonic-rs](https://github.com/cloudwego/sonic-rs) [[sonic-rs](https://crates.io/crates/sonic-rs)] - SIMD 기반의 빠른 Rust JSON 라이브러리.
  * [importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson](https://crates.io/crates/ajson)] - JSON 값을 빠르게 가져옵니다
  * [rustadopt/jzon-rs](https://github.com/rustadopt/jzon-rs/) [[jzon](https://crates.io/crates/jzon)] - JSON 구현체
  * [serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] - [Serde](https://github.com/serde-rs/serde) 프레임워크용 JSON 지원
  * [simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] - simdjson 포트 기반의 고성능 JSON 파서
  * [vcschapp/bufjson](https://github.com/vcschapp/bufjson) [[bufjson](https://crates.io/crates/bufjson)] - 복사와 할당이 없는 스트리밍 JSON 파서 및 렉서. 선택적 스트리밍 JSON Pointer 평가기
* MsgPack
  * [3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) - 저수준/고수준 MessagePack 구현체
* NetCDF
  * [georust/netcdf](https://github.com/georust/netcdf) [[netcdf](https://crates.io/crates/netcdf)] - 배열 형태의 구조를 파일에서 쉽게 읽고 쓰는 중간 수준 netCDF 바인딩.
* PEM
  * [jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] - PEM 인코딩 데이터를 파싱하고 인코딩합니다
* ProtocolBuffers
  * [stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) - Google protocol buffers의 Rust 구현체
  * [tokio-rs/prost](https://github.com/tokio-rs/prost) - [![지속적 통합](https://github.com/tokio-rs/prost/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/tokio-rs/prost/actions)
* QR 코드
  * [magiclen/qrcode-generator](https://github.com/magiclen/qrcode-generator) [[qrcode-generator](https://crates.io/crates/qrcode-generator)] - 순수 Rust로 ISO/IEC 18004 QR Code 및 Micro QR Code 심볼과 ISO/IEC 23941 rMQR 심볼을 생성하고 회색조, PNG, SVG 이미지로 렌더링합니다. [![CI](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml)
  * [sorairolake/qrcode-rust2](https://github.com/sorairolake/qrcode-rust2) [[qrcode2](https://crates.io/crates/qrcode2)] - QR 코드 인코딩 라이브러리 [![CI](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml/badge.svg?branch=main)](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml)
  * [WanzenBug/rqrr](https://github.com/WanzenBug/rqrr) [[rqrr](https://crates.io/crates/rqrr)] - 모든 이미지 소스에서 QR 코드를 감지하고 읽습니다 [![CI](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml/badge.svg?branch=master)](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml)
* rkyv
  * [rkyv/rkyv](https://github.com/rkyv/rkyv) [[rkyv](https://crates.io/crates/rkyv)] - rkyv(archive)는 제로 카피 역직렬화 프레임워크입니다
* RON (Rusty Object Notation)
  * [https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) - Rusty Object Notation
* Serde
  * [iddm/serde-aux](https://github.com/iddm/serde-aux/) - serde 라이브러리와 함께 사용하는 추가 도구. [![CI](https://github.com/iddm/serde-aux/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/serde-aux/actions/workflows/ci.yml) [![크레이트 배지](https://img.shields.io/crates/v/serde-aux.svg)](https://crates.io/crates/serde-aux)
* TOML
  * [tamasfe/taplo](https://github.com/tamasfe/taplo) [[taplo](https://crates.io/crates/taplo)] - TOML 도구 모음 [![CI](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
  * [toml-rs/toml](https://github.com/toml-rs/toml) - [![CI](https://github.com/toml-rs/toml/actions/workflows/ci.yml/badge.svg)](https://github.com/toml-rs/toml/actions/workflows/ci.yml)
* [vitiral/stfu8](https://github.com/vitiral/stfu8) [[stfu8](https://crates.io/crates/stfu8)] - UTF-8의 Sorta Text Format
* XML
  * [Florob/RustyXML](https://github.com/Florob/RustyXML) - XML 파서
  * [netvl/xml-rs](https://github.com/netvl/xml-rs) - 스트리밍 XML 라이브러리
  * [shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) - XML 라이브러리
  * [shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) - XPath 라이브러리
  * [tafia/quick-xml](https://github.com/tafia/quick-xml) - 고성능 XML 풀 읽기/쓰기 도구
  * [yaserde](https://github.com/luminvent/yaserde) - XML에 특화된 또 하나의 직렬화/역직렬화 도구
* YAML
  * [chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) - 부족했던 YAML 1.2 구현체.
  * [saphyr](https://github.com/saphyr-rs/saphyr) - YAML 파싱 전용 크레이트 모음.
  * [serde-saphyr](https://github.com/bourumir-wyngs/serde-saphyr) - 패닉 없는 파싱과 좋은 오류 보고를 강조하는 Serde용 YAML 직렬화/역직렬화 도구 [![crates.io](https://img.shields.io/crates/d/serde-saphyr.svg)](https://crates.io/crates/serde-saphyr)

### 파일시스템

[[파일시스템](https://crates.io/keywords/filesystem)]
* 연산
  * [Camino](https://github.com/camino-rs/camino) [[camino](https://crates.io/crates/camino)] - Rust의 std::path::Path와 비슷하지만 UTF-8을 사용합니다.
  * [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) [[fff-search](https://crates.io/crates/fff-search)] - 빈도와 최근성을 반영한 순위, git 인식 주석, 백그라운드 감시, 가벼운 인메모리 콘텐츠 인덱스를 갖춘 오타에 강한 파일 및 콘텐츠 검색 라이브러리. MCP 서버, Node/Bun SDK, C 라이브러리, Neovim 플러그인을 제공합니다.
  * [dnbln/dir-structure](https://github.com/dnbln/dir-structure) [[dir-structure](https://crates.io/crates/dir-structure)] - 일반 Rust 구조체로 파일시스템 트리를 모델링합니다. [![테스트](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml/badge.svg?branch=trunk)](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml)
  * [OpenDAL](https://github.com/apache/opendal) [[opendal](https://crates.io/crates/opendal)] - 다양한 저장소 서비스에서 매끄럽고 효율적으로 데이터를 가져오는 통합 데이터 접근 계층. [![빌드](https://img.shields.io/github/actions/workflow/status/apache/opendal/ci_core.yml?branch=main)](https://github.com/apache/opendal/actions?query=branch%3Amain)
  * [ParthJadhav/Rust_Search](https://github.com/ParthJadhav/Rust_Search) [[rust_search](https://crates.io/crates/rust_search)] - 매우 빠른 파일 검색 라이브러리.
  * [pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) [[dbus-udisks2](https://crates.io/crates/dbus-udisks2)] - UDisks2 DBus API
  * [pop-os/sys-mount](https://github.com/pop-os/sys-mount) [[sys-mount](https://crates.io/crates/sys-mount)] - `mount` / `umount2` 시스템 호출의 고수준 추상화.
  * [vitiral/path_abs](https://github.com/vitiral/path_abs) [[path_abs](https://crates.io/crates/path_abs)] - 직렬화 가능한 절대 경로 타입과 관련 메서드.
  * [webdesus/fs_extra](https://github.com/webdesus/fs_extra) - 표준 라이브러리 std::fs와 std::io의 가능성을 확장합니다
* 임시 파일
  * [Stebalien/tempfile](https://github.com/Stebalien/tempfile) - 임시 파일 라이브러리
  * [Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] - 유닉스 확장 파일 속성을 나열하고 조작합니다
  * [zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] - 세부 구현을 신경 쓸 필요 없는 프라이버시 중심 내장형 파일시스템.

### 금융

* [avhz/RustQuant](https://github.com/avhz/RustQuant) [[RustQuant](https://crates.io/crates/RustQuant)] - 계량 금융 라이브러리. ![GitHub 워크플로 상태(이벤트 포함)](https://img.shields.io/github/actions/workflow/status/avhz/RustQuant/build.yml)
* [d-e-s-o/apca](https://github.com/d-e-s-o/apca) [[apca](https://crates.io/crates/apca)] - 주식 거래 등을 위한 [Alpaca API](https://alpaca.markets/)의 뚜렷한 철학을 갖춘 포괄적인 바인딩. ![GitHub 워크플로 상태](https://github.com/d-e-s-o/apca/actions/workflows/test.yml/badge.svg?branch=main)
* [kand-ta/kand](https://github.com/kand-ta/kand) [[kand](https://crates.io/crates/kand)] - Rust, Python, JS/TS(WASM)의 현대적 고성능 기술적 분석 라이브러리. [![이미지](https://img.shields.io/crates/v/kand.svg)](https://crates.io/crates/kand)
* [rust-dd/stochastic-rs](https://github.com/rust-dd/stochastic-rs) [[stochastic-rs](https://crates.io/crates/stochastic-rs)] - 계량 금융: 130개 이상의 확률 과정, 옵션 가격 산정 및 보정, 변동성 표면, 코퓰라. SIMD/GPU 가속과 Python 바인딩. ![GitHub 워크플로 상태](https://github.com/rust-dd/stochastic-rs/actions/workflows/rust.yml/badge.svg?branch=main)
* [wickra-lib/wickra](https://github.com/wickra-lib/wickra) [[wickra](https://crates.io/crates/wickra)] - 스트리밍 우선 기술적 분석. Rust 코어의 514개 지표를 틱마다 O(1)로 업데이트하며 네이티브 Python, Node.js, WASM 바인딩과 C, C++, C#, Go, Java, R용 C ABI 허브를 제공합니다. [![CI](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml)

### 함수형 프로그래밍

[[함수형 프로그래밍](https://crates.io/keywords/fp)]
* 프렐루드
  * [JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) - 함수형 프로그래밍 라이브러리
  * [myrrlyn/tap](https://github.com/myrrlyn/tap) - 접미 위치 파이프라인 동작

### 게임 개발

[Are we game yet?](https://arewegameyet.rs)도 참고하세요
* Allegro
  * [SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) - [Allegro 5](https://liballeg.org/) 바인딩
* [Awesome Quads](https://github.com/ozkriff/awesome-quads) - 엄선한 miniquad/macroquad 관련 코드 및 자료 링크 모음
* [Awesome wgpu](https://github.com/rofrol/awesome-wgpu) - 엄선한 wgpu 코드 및 자료 모음
* bracket-lib(이전 이름 RLTK)
  * [bracket-lib](https://github.com/amethyst/bracket-lib) [[bracket-lib](https://crates.io/crates/bracket-lib)] - 로그라이크 도구 모음(RLTK). [![Rust](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml/badge.svg)](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml)
* Challonge
  * [iddm/challonge-rs](https://github.com/iddm/challonge-rs) [[challonge](https://crates.io/crates/challonge)] - Challonge REST API용 클라이언트 라이브러리. 토너먼트 진행을 돕습니다. [![CI](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml)
* 엔티티-컴포넌트 시스템(ECS)
  * [amethyst/specs](https://github.com/amethyst/specs) - Specs 병렬 ECS
  * [legion](https://github.com/amethyst/legion) - 최소한의 상용구로 풍부한 기능을 제공하는 고성능 ECS 라이브러리 [![빌드 배지](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* 게임 엔진
  * [AscendingCreations/AscendingGraphics](https://github.com/AscendingCreations/AscendingGraphics) - WGPU와 Winit을 사용하는 2D 렌더링 프레임워크. - [![Crates.io](https://img.shields.io/crates/v/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics) [![라이선스](https://img.shields.io/crates/l/ascending_graphics.svg)](https://github.com/AscendingCreations/AscendingGraphics/blob/main/LICENSE.MIT) [![Crates.io](https://img.shields.io/crates/d/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics)
  * [Balaur](https://github.com/balaurengine/balaur) - Rune 스크립팅, Rapier 물리, 내장 편집기를 갖춘 결정론적 2D 및 3D 게임 엔진 [![테스트](https://github.com/balaurengine/balaur/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/balaurengine/balaur/actions/workflows/test.yml)
  * [Bevy](https://github.com/bevyengine/bevy) - 기분 좋을 만큼 간단한 데이터 기반 게임 엔진. - [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy) [![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [Fyrox](https://fyrox.rs/) - 3D 게임 엔진 [![Crates.io](https://img.shields.io/crates/v/fyrox.svg)](https://crates.io/crates/fyrox) [![라이선스](https://img.shields.io/crates/l/fyrox.svg)](https://github.com/FyroxEngine/Fyrox/blob/master/LICENSE.md) [![Crates.io](https://img.shields.io/crates/d/fyrox.svg)](https://crates.io/crates/fyrox)
  * [ggez](https://github.com/ggez/ggez) - 최소한의 번거로움으로 2D 게임을 만드는 경량 게임 프레임워크 - [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![라이선스](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/ggez.svg)](https://crates.io/crates/ggez)
  * [Kiss3d](https://github.com/dimforge/kiss3d) - 단순함을 지향하는 3D 그래픽 엔진 [![Crates.io](https://img.shields.io/crates/d/kiss3d.svg)](https://crates.io/crates/kiss3d)
  * [oxidator](https://github.com/Ruddle/oxidator) - WebGPU를 지원하는 실시간 전략 게임/엔진
  * [Piston](https://www.piston.rs/) - [![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston) [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/piston.svg)](https://crates.io/crates/piston)
  * [Unrust](https://github.com/unrust/unrust) - Webgl 2.0 / 네이티브 게임 엔진
* 게임 서버
  * [gamedig/rust-gamedig](https://github.com/gamedig/rust-gamedig) [[gamedig](https://crates.io/crates/gamedig)] - 게임 서버에 이름, 접속 플레이어, 최대 플레이어 수 등의 정보를 조회합니다. [![Crates.io](https://img.shields.io/crates/v/gamedig.svg)](https://crates.io/crates/gamedig) [![Crates.io](https://img.shields.io/crates/d/gamedig.svg)](https://crates.io/crates/gamedig)
* [Godot](https://godotengine.org/)
  * [adalinesimonian/gdvm](https://github.com/adalinesimonian/gdvm) - CLI용 Godot 버전 관리자 [![CI](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml)
  * [godot-rust/gdext](https://github.com/godot-rust/gdext) [[gdext](https://crates.io/crates/gdext)] - Godot 4+ 게임 엔진 바인딩 [![CI](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml)
  * [godot-rust/gdnative](https://github.com/godot-rust/gdnative) [[gdnative](https://crates.io/crates/gdnative)] - Godot 3+ 게임 엔진 바인딩 [![CI](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml)
* Minecraft
  * [bedrock-crustaceans/bedrock-rs](https://github.com/bedrock-crustaceans/bedrock-rs) - Rust의 Minecraft Bedrock Edition 개발용 범용 도구 모음. [![GitHub 스타](https://img.shields.io/github/stars/bedrock-crustaceans/bedrock-rs)](https://github.com/bedrock-crustaceans/bedrock-rs) [![CI](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml)
  * [FerrumC](https://github.com/ferrumc-rs/ferrumc) - Rust로 업그레이드한 원본 Minecraft 서버 [![빌드 배지](https://github.com/ferrumc-rs/ferrumc/actions/workflows/rust.yml/badge.svg)]
  * [Pumpkin](https://github.com/pumpkin-mc/pumpkin) - 완전히 Rust로 작성한 고성능 Minecraft 서버 소프트웨어
  * [SteelMC](https://github.com/Steel-Foundation/SteelMC) - 성능과 기능 동등성을 고려하여 만든 Rust Minecraft 서버
* [Raylib](https://www.raylib.com/)
  * [deltaphc/raylib-rs](https://github.com/deltaphc/raylib-rs) [[raylib](https://crates.io/crates/raylib)] - raylib 바인딩
* [SDL](https://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
  * [brson/rust-sdl](https://github.com/brson/rust-sdl) - SDL1 바인딩
  * [Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) - SDL2 바인딩
* SFML
  * [jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) - [SFML](https://www.sfml-dev.org/) 바인딩
* Skillratings
  * [atomflunder/skillratings](https://github.com/atomflunder/skillratings) [[skillratings](https://crates.io/crates/skillratings)] - Elo, Glicko-2, TrueSkill 등 다중 사용자 게임용 실력 평가 알고리즘 모음. [![crates.io 배지](https://img.shields.io/crates/v/skillratings)](https://crates.io/crates/skillratings) [![CI](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml/badge.svg)](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml)
* Tatami
  * [giraffekey/tatami](https://github.com/giraffekey/tatami) [[tatami](https://crates.io/crates/tatami-dungeon)] - 로그라이크 던전 생성 알고리즘.
* Toornament-rs
  * [iddm/toornament-rs](https://github.com/iddm/toornament-rs) - Toornament.com API 바인딩. [![CI](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml) [![크레이트 배지](https://img.shields.io/crates/v/toornament.svg)](https://crates.io/crates/toornament)
* Victorem
  * [VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] - 간단한 2D 및 3D 온라인 게임 프로토타입을 만드는 쉬운 UDP 게임 서버 및 UDP 클라이언트 프레임워크

### 지리공간

[[지리](https://crates.io/keywords/geo), [GIS](https://crates.io/keywords/gis)]

* [apache/sedona-db](https://github.com/apache/sedona-db) - Rust로 작성한 지리공간 DataFrame 라이브러리인 SedonaDB.
* [DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] - 좌표 변환(2차원, 3차원, 지리공간)
* [Georust](https://github.com/georust) - 지리공간 도구 및 라이브러리
* [georust/geojson](https://github.com/georust/geojson) [[geojson](https://crates.io/crates/geojson)] - GeoJSON 벡터 GIS 파일 형식의 직렬화 및 역직렬화 라이브러리.
* [MapLibre/Martin](https://github.com/maplibre/martin) - PostGIS, MBTiles, PMTiles, 스프라이트를 지원하는 지도 타일 서버. [![CI 빌드](https://github.com/maplibre/martin/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/martin/actions)[![crates.io 버전](https://img.shields.io/crates/v/martin.svg)](https://crates.io/crates/martin)[![책](https://img.shields.io/badge/docs-Book-informational)](https://maplibre.org/martin/)
* [rust-reverse-geocoder](https://github.com/gx0r/rrgeo) - [thampiman/reverse-geocoder](https://github.com/thampiman/reverse-geocoder)에서 영감을 받은 빠른 오프라인 역지오코더
* [vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] - UTM, LatLon, MGRS 좌표 간 변환

### 그래프 알고리즘

* [neo4j-labs/graph](https://github.com/neo4j-labs/graph) - 고성능 그래프 알고리즘 라이브러리 [![graph CI 상태](https://img.shields.io/github/workflow/status/neo4j-labs/graph/CI/main?label=CI)](https://github.com/neo4j-labs/graph/actions/workflows/rust.yml)
* [petgraph/petgraph](https://github.com/petgraph/petgraph) - 그래프 자료 구조 라이브러리. [![graph CI 상태](https://github.com/petgraph/petgraph/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/petgraph/petgraph/actions/workflows/ci.yml)

### 그래픽

[[그래픽](https://crates.io/keywords/graphics)]

* 글꼴
  * [redox-os/rusttype](https://github.com/redox-os/rusttype) - FreeType 같은 라이브러리의 대안
  * [rustybuzz](https://github.com/harfbuzz/rustybuzz) - 점진적인 harfbuzz 포트
* [gfx-rs/gfx](https://github.com/gfx-rs/gfx) - 고성능 바인드리스 그래픽 API.
* [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - gfx-hal 기반 네이티브 WebGPU 구현체. [![빌드 배지](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [gl-rs](https://github.com/rust-windowing/gl-rs) - OpenGL 함수 포인터 로더
  * [glium/glium](https://github.com/glium/glium) - 안전한 OpenGL 래퍼.
  * [glutin](https://crates.io/crates/glutin) - [GLFW](https://www.glfw.org/) 대안
  * [PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) - GLFW3 바인딩 및 관용적인 래퍼
* PDF
  * [bastibense/libharu_ng](https://github.com/bastibense/libharu_ng) [[libharu_ng](https://crates.io/crates/libharu_ng)] - Rust 앱에서 PDF를 쉽게 생성합니다.
  * [fschutt/printpdf](https://github.com/fschutt/printpdf) - PDF 작성 라이브러리
  * [fullbleed-engine/fullbleed-official](https://github.com/fullbleed-engine/fullbleed-official) [[fullbleed](https://crates.io/crates/fullbleed)] - 재사용 가능한 템플릿, 가변 데이터 생성, Python 바인딩을 갖춘 인쇄 중심 HTML/CSS-PDF 엔진. [![CI](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml)
  * [gastongouron/ironpress](https://github.com/gastongouron/ironpress) [[ironpress](https://crates.io/crates/ironpress)] - 내장 레이아웃 엔진을 갖추고 브라우저나 시스템 의존성이 없는 순수 Rust HTML/CSS/Markdown-PDF 변환기. [![CI](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml)
  * [hayro](https://github.com/LaurenzV/hayro) - 순수 Rust PDF 인터프리터 및 렌더러
  * [J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) - PDF 문서 조작
  * [kaj/rust-pdf](https://github.com/kaj/rust-pdf) - 순수 Rust로 PDF 파일 생성
  * [yfedoseev/pdf_oxide](https://github.com/yfedoseev/pdf_oxide) [[pdf_oxide](https://crates.io/crates/pdf_oxide)] - Python 바인딩을 갖춘 빠른 PDF 텍스트 추출, 생성, 편집
* [Vulkan](https://www.vulkan.org/) [[vulkan](https://crates.io/keywords/vulkan)]
  * [erupt](https://gitlab.com/Friz64/erupt) [[erupt](https://crates.io/crates/erupt)] - [![빌드 배지](https://gitlab.com/Friz64/erupt/badges/main/pipeline.svg)](https://gitlab.com/Friz64/erupt/-/pipelines)
  * [vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] - Vulkan API의 안전하고 풍부한 Rust 래퍼

### GUI

[[gui](https://crates.io/keywords/gui)]

* [autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) - 간단한 크로스 플랫폼 GUI 자동화 라이브러리.
* Cocoa
  * [servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) - Mac OS X 및 iOS의 Core Foundation과 기타 저수준 라이브러리용 Rust 바인딩
* [DioxusLabs/dioxus](https://github.com/dioxuslabs/dioxus) - Rust로 크로스 플랫폼 사용자 인터페이스를 만드는 이식 가능하고 성능이 뛰어나며 사용하기 편한 프레임워크. ![rust ci](https://github.com/dioxuslabs/dioxus/actions/workflows/main.yml/badge.svg)
* [emilk/egui](https://github.com/emilk/egui) - 간단하고 빠르며 이식성이 높은 즉시 모드 GUI 라이브러리. egui는 웹, 네이티브, 좋아하는 게임 엔진에서 실행됩니다. [![빌드 상태](https://github.com/emilk/egui/workflows/CI/badge.svg)](https://github.com/emilk/egui/actions?workflow=CI)
* [emoon/rust_minifb](https://github.com/emoon/rust_minifb) - minifb는 선택적 비트맵 렌더링을 갖춘 크로스 플랫폼 창 구성 도구입니다. 마우스와 키보드 입력도 쉽게 처리하며 주로 프로토타이핑용입니다
* [euv-dev/euv](https://github.com/euv-dev/euv) [[euv](https://crates.io/crates/euv)] - 가상 DOM, 반응형 시그널, WebAssembly용 HTML 매크로를 갖춘 선언적 크로스 플랫폼 Rust UI 프레임워크. [![CI](https://github.com/euv-dev/euv/actions/workflows/rust.yml/badge.svg)](https://github.com/euv-dev/euv/actions)
* [FerrisMind/shadcn-rs](https://github.com/FerrisMind/shadcn-rs) [[iced-shadcn](https://crates.io/crates/iced-shadcn)] - shadcn/ui 미학의 iced 및 egui 컴포넌트 모음. [egui-shadcn](https://crates.io/crates/egui-shadcn)을 포함합니다.
* [FLTK](https://www.fltk.org/)
  * [fltk-rs](https://github.com/fltk-rs/fltk-rs) - FLTK 바인딩 [![빌드](https://github.com/fltk-rs/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/fltk-rs/fltk-rs/actions)
* [Flutter](https://flutter.dev/)
  * [cunarist/rinf](https://github.com/cunarist/rinf) - Flutter 백엔드로 Rust를, Rust 프런트엔드로 Flutter를 사용합니다 [![빌드 테스트](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml/badge.svg)](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml?query=branch%3Amain)
  * [flutter-rs](https://github.com/flutter-rs/flutter-rs) - dart와 rust로 flutter 데스크톱 앱을 만듭니다.
  * [fzyzcjy/flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge) - Flutter/Dart <-> Rust용 고수준 메모리 안전 바인딩 생성기
* [fschutt/azul](https://github.com/fschutt/azul) - Rust 데스크톱 애플리케이션을 빠르게 개발하는 무료 함수형 IMGUI 지향 GUI 프레임워크. Mozilla WebRender 렌더링 엔진이 지원합니다.
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
  * [gtk-rs/gtk4-rs](https://github.com/gtk-rs/gtk4-rs) - GTK4 바인딩 ![CI](https://github.com/gtk-rs/gtk4-rs/workflows/CI/badge.svg)
  * [relm](https://github.com/antoyo/relm) - Elm에서 영감을 받은 비동기 GTK+ 기반 GUI 라이브러리
* [iced-rs/iced](https://github.com/iced-rs/iced) [[iced](https://crates.io/crates/iced)] - 단순성과 타입 안전성에 중점을 둔 크로스 플랫폼 GUI 라이브러리. Elm에서 영감을 받았습니다.
* [ImGui](https://github.com/ocornut/imgui)
  * [imgui-rs](https://github.com/imgui-rs/imgui-rs) - ImGui 바인딩 [![빌드 상태](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
  * [Kiss-ui](https://github.com/KISS-UI/kiss-ui) - IUP 기반의 간단한 UI 프레임워크
* [ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - 진정한 네이티브 크로스 플랫폼 GUI 라이브러리. 하나의 통합 코드를 네이티브 GUI, HTML 웹, TUI로 실행할 수 있습니다.
* [libui](https://github.com/andlabs/libui)
  * [rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) - libui 바인딩.
* [linebender/xilem](https://github.com/linebender/xilem) [[xilem](https://crates.io/crates/xilem)] - React, SwiftUI, Elm에서 영감을 받은 실험적 Rust 반응형 UI 프레임워크. Masonry, Vello/wgpu, Parley, AccessKit을 기반으로 웹 및 네이티브 백엔드를 제공합니다. [![CI](https://img.shields.io/github/actions/workflow/status/linebender/xilem/ci.yml?logo=github&label=CI)](https://github.com/linebender/xilem/actions)
* [longbridge/gpui-component](https://github.com/longbridge/gpui-component) [[gpui-component](https://crates.io/crates/gpui-component)] - GPUI로 멋진 데스크톱 애플리케이션을 만드는 UI 컴포넌트.
* [makepad/makepad](https://github.com/makepad/makepad) [[makepad-widgets](https://crates.io/crates/makepad-widgets)] - wasm/webGL, osx/metal, windows/dx11, linux/opengl로 컴파일되는 창의적 소프트웨어 개발 플랫폼인 Makepad.
* [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [nuklear-rust](https://github.com/snuk182/nuklear-rust) - Nuklear 바인딩
* [OrbTk](https://github.com/redox-os/orbtk) - Orbital Widget Toolkit은 SDL2를 사용하는 다중 플랫폼 (G)UI 도구 모음입니다 [![빌드 및 테스트](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) - 사용하기 쉬운 즉시 모드 2D GUI 라이브러리
* [project-blinc/Blinc](https://github.com/project-blinc/Blinc) [[blinc_app](https://crates.io/crates/blinc_app)] - GPUI 스타일 빌더 API, 글래스모피즘 효과, 스프링 물리 애니메이션, 데스크톱/Android/iOS 네이티브 렌더링을 갖춘 GPU 가속 크로스 플랫폼 UI 프레임워크.
* [Qt](https://doc.qt.io)
  * [cyndis/qmlrs](https://github.com/cyndis/qmlrs) - QtQuick 바인딩
  * [rust-qt](https://github.com/rust-qt) - Rust용 Qt 바인딩
  * [woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - 컴파일 시간에 QMetaObject를 구성하여 Qml과 Rust를 통합합니다.
* [Ribir](https://github.com/RibirX/Ribir) - 단일 코드베이스에서 아름다운 네이티브 다중 플랫폼 애플리케이션을 만드는 Rust GUI 프레임워크인 Ribir.
* [rise-ui](https://github.com/rise-ui/rise) - 아름답고 사용자 친화적인 인터페이스 개발용 간단한 컴포넌트 기반 크로스 플랫폼 GUI 도구 모음.
* [saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) - [nativefiledialog](https://github.com/mlabbe/nativefiledialog) 바인딩
* [Sciter](https://sciter.com/)
  * [sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) - Sciter 바인딩 [![빌드 배지](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
* [slint-ui/slint](https://github.com/slint-ui/slint) [slint](https://crates.io/crates/slint) - [Slint](https://slint.dev/)는 임베디드 기기와 데스크톱 애플리케이션의 부드러운 그래픽 사용자 인터페이스를 효율적으로 개발하는 도구 모음입니다. [![빌드 상태](https://github.com/slint-ui/slint/workflows/CI/badge.svg?branch=master)](https://github.com/slint-ui/slint/actions?query=workflow%3ACI)
* [smithay](https://github.com/Smithay/smithay) - [[smithay](https://crates.io/crates/smithay)]는 Wayland 컴포지터 제작의 구성 요소를 제공하는 안전하고 문서화가 잘된 라이브러리입니다
* [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - [WRY](https://github.com/tauri-apps/wry) 기반 웹 프런트엔드로 더 작고 빠르고 안전한 데스크톱 애플리케이션을 만듭니다. [![라이브러리 테스트](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [tauri-apps/wry](https://github.com/tauri-apps/wry) - Webview 렌더링 라이브러리.
* [xilem](https://github.com/linebender/xilem) - 데이터 우선 UI 설계 도구 모음 [druid](https://github.com/linebender/druid)의 후속 도구.

### 이미지 처리

* [abonander/img_hash](https://github.com/abonander/img_hash) - 지각적 이미지 해싱 및 동일성과 유사성 비교.
* [Enet4/dicom-rs](https://github.com/Enet4/dicom-rs) - 빠르고 안전하며 직관적인 사용을 목표로 하는 순수 Rust DICOM 표준 구현체. DICOM 객체 작업과 DICOM 애플리케이션 상호작용을 제공합니다.
* [image-rs/image](https://github.com/image-rs/image) - 기본 이미지 처리 함수와 이미지 형식 간 변환 메서드
* [image-rs/imageproc](https://github.com/image-rs/imageproc) - `image` 라이브러리 기반 이미지 처리 라이브러리.
* [marekm4/dominant_color](https://github.com/marekm4/dominant_color) [[dominant_color](https://crates.io/crates/dominant_color)] - 주요 색상 추출 도구 ![빌드 배지](https://github.com/marekm4/dominant_color/actions/workflows/rust.yml/badge.svg?branch=master)
* [rust-cv/cv](https://github.com/rust-cv/cv) - 컴퓨터 비전 알고리즘, 추상화, 시스템을 구현합니다. 가능한 경우 `#[no_std]`를 지원합니다. ![빌드 배지](https://github.com/rust-cv/cv/workflows/tests/badge.svg)
* [teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] - 간단한 스테가노그래피 라이브러리
* [twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) - OpenCV 바인딩

### 언어 명세

* [shnewto/bnf](https://github.com/shnewto/bnf) - Backus–Naur 형식의 문맥 자유 문법을 파싱하는 라이브러리.

### 라이선스 관리

* [WyvernIXTL/license-fetcher](https://github.com/WyvernIXTL/license-fetcher) [[license-fetcher](https://crates.io/crates/license-fetcher)] - 빌드 시 의존성의 라이선스를 가져와 프로그램에 내장합니다.

### 로깅

[[로그](https://crates.io/keywords/log)]

* [donnie4w/tklog](https://github.com/donnie4w/tklog "donnie4w/tklog") - 로그 수준, 파일 분할, 압축 보관을 지원하는 가볍고 효율적인 rust 구조화 로그 라이브러리.
* [estk/log4rs](https://github.com/estk/log4rs) - Java Logback과 log4j 라이브러리를 모델로 한 폭넓게 설정 가능한 로깅 프레임워크 [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [fast/logforth](https://github.com/fast/logforth) - Rust 애플리케이션용 다재다능하고 확장 가능하며 사용하기 쉬운 로깅 프레임워크. 여러 디스패치, 필터, 어펜더를 설정하여 필요에 맞게 로깅 구성을 조정할 수 있습니다.
* [rbatis/fast_log](https://github.com/rbatis/fast_log) - 비동기 로그: 고성능 비동기 로깅
* [rust-lang/log](https://github.com/rust-lang/log) - 로깅 구현체
* [seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) - 보기 좋고 사용하기 쉬운 로거.
* [slog-rs/slog](https://github.com/slog-rs/slog) - 구조화되고 조합 가능한 로깅
* [tokio-rs/tracing](https://github.com/tokio-rs/tracing) - 비동기를 인식하는 구조화 로깅, 오류 처리, 메트릭 등을 위한 애플리케이션 수준 추적 프레임워크 [![빌드 상태](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)

### 매크로

* cute
  * [mattgathu/cute](https://github.com/mattgathu/cute) - Python 스타일 리스트 컴프리헨션 매크로.
* [elastio/bon](https://github.com/elastio/bon) [[bon](https://crates.io/crates/bon)] - 구조체와 함수의 컴파일 시간 검사 빌더를 생성하며, 함수와 메서드에 부분 적용, 선택적 매개변수, 이름 지정 매개변수를 제공합니다. [![빌드 상태](https://github.com/elastio/bon/actions/workflows/ci.yml/badge.svg)](https://github.com/elastio/bon/actions)
* [Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - C# LINQ 스타일 표현식을 위한 매크로와 메서드. [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)

### 마크업 언어

* [bruits/satteri](https://github.com/bruits/satteri) [[satteri](https://crates.io/crates/satteri)] - 고성능 Markdown 및 MDX 처리. Rust로 파싱 및 컴파일하고 JavaScript로 플러그인을 실행합니다. MDX 확장을 갖춘 CommonMark 파서, MDAST/HAST 트리 연산, JavaScript 상호운용용 NAPI 바인딩을 포함합니다.
* CommonMark
  * [pulldown-cmark/pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark) - [CommonMark](https://commonmark.org/) 파서
* [insomnimus/tidier](https://github.com/insomnimus/tidier) [[tidier](https://crates.io/crates/tidier)] - HTML, XHTML, XML 문서 서식 라이브러리. [![빌드 배지](https://github.com/insomnimus/tidier/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/tidier/actions)

### 모바일

* Android / iOS
  * [ivnsch/rust_android_ios](https://github.com/ivnsch/rust_android_ios) - 각각 rust-swig와 cbindgen으로 Android와 iOS에서 공유 라이브러리를 사용하는 예제.
* 범용
  * [Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile) - iOS CocoaPods / Android JNI
  * [redbadger/crux](https://github.com/redbadger/crux) [[crux_core](https://crates.io/crates/crux_core)] - 크로스 플랫폼 앱 개발. Crux는 앱의 비즈니스 로직과 동작을 모바일(iOS/Android) 및 웹에서 하나의 재사용 가능한 코어로 공유하도록 돕습니다. [![빌드 상태](https://img.shields.io/github/actions/workflow/status/redbadger/crux/build.yaml)](https://github.com/redbadger/crux/actions)
* iOS
  * [TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) - iOS 애플리케이션용 범용 라이브러리를 자동으로 만드는 cargo lipo 하위 명령.

### 네트워크 프로그래밍

* Bluetooth
  * [bluez/bluer](https://github.com/bluez/bluer) [[bluer](https://crates.io/crates/bluer)] - 공식 BlueZ 바인딩. [![빌드 배지](https://github.com/bluez/bluer/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/bluez/bluer/actions/workflows/rust.yml)
* CoAP
  * [Covertness/coap-rs](https://github.com/Covertness/coap-rs) - [Constrained Application Protocol(CoAP)](https://datatracker.ietf.org/doc/html/rfc7252) 라이브러리.
* DNS
  * [kweonminsung/bind9_rndc_rust](https://github.com/kweonminsung/bind9_rndc_rust) [[rndc](https://crates.io/crates/rndc)] - Rust용 BIND9 RNDC 프로토콜 구현체 [![CI](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml/badge.svg)](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml)
* Docker
  * [fussybeaver/bollard](https://github.com/fussybeaver/bollard) - Docker 데몬 API
* FTP
  * [mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) - [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) 클라이언트
* gRPC
  * [hyperium/tonic](https://github.com/hyperium/tonic) - async/await를 지원하는 네이티브 gRPC 클라이언트 및 서버 구현체 [![Crates.io](https://img.shields.io/crates/v/tonic)](https://crates.io/crates/tonic)
  * [tikv/grpc-rs](https://github.com/tikv/grpc-rs) - C Core 라이브러리와 퓨처 기반 gRPC 라이브러리
* HTTP
  * [deboa](https://crates.io/crates/deboa) - 여러 부가 기능, 직렬화 형식, 매크로를 갖춘 hyper 기반의 친절한 HTTP 클라이언트. [![Crates.io](https://img.shields.io/crates/v/deboa)]
  * [Hurl](https://github.com/Orange-OpenSource/hurl) - 일반 텍스트와 libcurl로 HTTP 요청을 실행하고 테스트합니다 [![CI](https://github.com/Orange-OpenSource/hurl/workflows/CI/badge.svg)](https://github.com/Orange-OpenSource/hurl/actions)
* IPNetwork
  * [achanda/ipnetwork](https://github.com/achanda/ipnetwork) - IP 네트워크 작업용 라이브러리
  * [candrew/netsim](https://github.com/canndrew/netsim) - 네트워크 시뮬레이션 및 테스트 라이브러리
* 저수준
  * [actix/actix](https://github.com/actix/actix) - 액터 라이브러리
  * [dylanmckay/protocol](https://github.com/dylanmckay/protocol) - 맞춤 TCP/UDP 프로토콜 정의
  * [libpnet/libpnet](https://github.com/libpnet/libpnet) - 크로스 플랫폼 저수준 네트워킹
  * [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) - 베어메탈 실시간 시스템용 독립적인 이벤트 기반 TCP/IP 스택
* message-io
  * [lemunozm/message-io](https://github.com/lemunozm/message-io) - 네트워크 애플리케이션을 쉽고 빠르게 만드는 이벤트 기반 메시지 라이브러리. TCP, UDP, WebSockets를 지원합니다. [![빌드 배지](https://img.shields.io/github/workflow/status/lemunozm/message-io/message-io%20ci)](https://github.com/lemunozm/message-io/actions?query=workflow%3A%22message-io+ci%22)
* MQTT
  * [bytebeamio/rumqtt](https://github.com/bytebeamio/rumqtt) - TLS 사용 여부와 관계없이 TCP 및 WebSockets로 [MQTT 프로토콜](https://mqtt.org)과 통신하는 애플리케이션을 만드는 개발자용 라이브러리. [![빌드 및 테스트](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml/badge.svg)](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml)
  * [rmqtt/rmqtt](https://github.com/rmqtt/rmqtt) - MQTT 서버/MQTT 브로커 - 5G 시대 IoT용 확장 가능한 분산 MQTT 메시지 브로커
* NanoMsg
  * [thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) - [nanomsg](https://nanomsg.org/) 바인딩
* NATS
  * [nats-io/nats.rs](https://github.com/nats-io/nats.rs) - 클라우드 네이티브 메시징 시스템 NATS용 클라이언트. [![빌드 상태](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] - [Nng (nanomsg v2)](https://nng.nanomsg.org/index.html) 바인딩 [![빌드 배지](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/-/pipelines)
* NNTP
  * [mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) [[nntp](https://crates.io/crates/nntp)] - [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) 클라이언트
* P2P
  * [libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) - libp2p 네트워킹 스택 구현체. [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
  * [n0-computer/iroh](https://github.com/n0-computer/iroh) [[iroh](https://crates.io/crates/iroh)] - 기기 간 직접 연결을 구축하는 크레이트 [![CI](https://github.com/n0-computer/iroh/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)
* POP3
  * [mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) [[pop3](https://crates.io/crates/pop3)] - [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) 클라이언트
* QUIC
  * [aws/s2n-quic](https://github.com/aws/s2n-quic) - IETF QUIC 프로토콜 구현체 ![ci](https://img.shields.io/github/actions/workflow/status/aws/s2n-quic/ci.yml?branch=main)
  * [cloudflare/quiche](https://github.com/cloudflare/quiche) - cloudflare의 QUIC 전송 프로토콜 및 HTTP/3 구현체 ![빌드](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)
  * [mozilla/neqo](https://github.com/mozilla/neqo) - QUIC 구현체
  * [quinn-rs/quinn](https://github.com/quinn-rs/quinn) - 퓨처 기반 QUIC 구현체 [![빌드 배지](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [tencent/tquic](https://github.com/Tencent/tquic) - 고성능 경량 크로스 플랫폼 QUIC 라이브러리 [![빌드 상태](https://img.shields.io/github/actions/workflow/status/tencent/tquic/rust.yml)](https://github.com/Tencent/tquic/actions/workflows/rust.yml)
* Raknet
  * [b23r0/rust-raknet](https://github.com/b23r0/rust-raknet) - RakNet 프로토콜 구현체 [![빌드 상태](https://img.shields.io/github/workflow/status/b23r0/rust-raknet/Rust)](https://github.com/b23r0/rust-raknet/actions/workflows/rust.yml)
* RPC
  * [remoc-rs/remoc](https://github.com/remoc-rs/remoc) [[remoc](https://crates.io/crates/remoc)] - Remoc은 모든 원격 전송에서 Tokio와 비슷한 채널(broadcast, mpsc, oneshot, watch) 및 트레이트 호출을 제공합니다. [![빌드 배지](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml)
  * [smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) - 마이크로서비스를 쉽고 간단하게 개발하는 RPC 라이브러리.
* SIP
  * [restsend/rsipstack](https://github.com/restsend/rsipstack) - RFC 3261을 준수하는 SIP 스택
* Socket.io
  * [1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio) [[rust_socketio](https://crates.io/crates/rust_socketio)] - Rust로 작성한 [socket.io](https://socket.io) 클라이언트 구현체.
* SSH
  * [alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) - [libssh2](https://libssh2.org/) 바인딩
  * [Thrussh](https://pijul.org/thrussh) [[thrussh](https://crates.io/crates/thrussh)] - [libsodium](https://doc.libsodium.org/) 기반 SSH 라이브러리
* Stomp
  * [zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) - [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html) 클라이언트 구현체
* VPN
  * [defguard/wireguard-rs](https://github.com/DefGuard/wireguard-rs) - 네이티브 운영체제 커널 및 사용자 공간 WireGuard 프로토콜 구현체를 사용하여 WireGuard 인터페이스 관리용 통합 고수준 API를 제공하는 다중 플랫폼 라이브러리
* Zenoh
  * [eclipse-zenoh-flow/zenoh-flow](https://github.com/eclipse-zenoh-flow/zenoh-flow) - *클라우드*부터 *사물*까지 아우르는 연산을 위한 선언적 프레임워크
  * [eclipse-zenoh/zenoh](https://github.com/eclipse-zenoh/zenoh) - 오버헤드 없는 네트워크 프로토콜
* ZeroMQ
  * [erickt/rust-zmq](https://github.com/erickt/rust-zmq) - [ZeroMQ](https://zeromq.org/) 바인딩

### 파싱

  * [0xlane/pe-sign](https://github.com/0xlane/pe-sign) [[pe-sign]](https://crates.io/crates/pe-sign) - PE 파일에서 서명 정보를 검증하고 추출하는 크로스 플랫폼 rust no-std 라이브러리. [![crates.io](https://img.shields.io/crates/v/pe-sign)](https://crates.io/crates/pe-sign) [![빌드](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml/badge.svg)](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml)
  * [cchexcode/wavefront_rs](https://github.com/cchexcode/wavefront_rs) - Wavefront OBJ 형식 파서. [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![빌드 배지](https://github.com/cchexcode/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/cchexcode/wavefront_rs/actions)
  * [comex/rust-shlex](https://github.com/comex/rust-shlex) [[shlex](https://crates.io/crates/shlex)] - Python shlex처럼 문자열을 셸 단어로 나눕니다. [![빌드 배지](https://github.com/comex/rust-shlex/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/comex/rust-shlex/actions/workflows/test.yml)
  * [Eliah-Lakhin/lady-deirdre](https://github.com/Eliah-Lakhin/lady-deirdre) - 새 프로그래밍 언어와 LSP 서버용 프레임워크.
  * [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) - PDF 분류 및 텍스트 추출용 빠른 Rust 라이브러리.
  * [Folyd/robotstxt](https://github.com/Folyd/robotstxt) - Google robots.txt 파서 및 매처 C++ 라이브러리의 포트
  * [freestrings/jsonpath](https://github.com/freestrings/jsonpath) - [JsonPath](https://goessner.net/articles/JsonPath/) 엔진. Webassembly와 Javascript도 지원합니다
  * [hmeyer/stl_io](https://crates.io/crates/stl_io) - STL(STereoLithography) 파일 파서
  * [igumnoff/shiva](https://github.com/igumnoff/shiva) - Shiva 라이브러리: 모든 유형의 문서(일반 텍스트, Markdown, HTML, PDF 등)를 위한 Rust 파서 및 생성기 구현체
  * [kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) - 파싱 표현 문법(PEG) 파서 생성기
  * [lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) - LR(1) 파서 생성기
  * [m4rw3r/chomp](https://github.com/m4rw3r/chomp) - 빠른 모나드 스타일 파서 조합기
  * [Marwes/combine](https://github.com/Marwes/combine) - 파서 조합기 라이브러리
  * [mazznoer/csscolorparser-rs](https://github.com/mazznoer/csscolorparser-rs) [[csscolorparser](https://crates.io/crates/csscolorparser)] - CSS 색상 파서 라이브러리 [![CI](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml)
  * [mohamadzoh/phonelib](https://github.com/mohamadzoh/phonelib) [[phonelib](https://crates.io/crates/phonelib)] - 국제 전화번호를 파싱, 검증, 서식 지정, 정규화하는 의존성 없는 Rust 라이브러리.
  * [nrc/zero](https://github.com/nrc/zero) [[zero](https://crates.io/crates/zero/)] - 할당 없는 바이너리 데이터 파싱
  * [ophi-dev/antlr-rust-runtime](https://github.com/ophi-dev/antlr-rust-runtime) [[antlr-rust-runtime](https://crates.io/crates/antlr-rust-runtime)] - 순수 Rust 파서 생성기를 갖춘 ANTLR v4 런타임. Java 없이 `.g4` 문법에서 직접 파서를 생성하며 공식 ANTLR 적합성 테스트 모음으로 검증했습니다. [![빌드 배지](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml)
  * [oxc-project/oxc](https://github.com/oxc-project/oxc) [[oxc](https://crates.io/crates/oxc)] - Rust로 작성한 고성능 JavaScript/TypeScript 파서, 변환기, 축소기, 리졸버. Rolldown, Nuxt, Nova 등을 구동합니다. [![빌드 상태](https://github.com/oxc-project/oxc/actions/workflows/ci.yml/badge.svg?event=push&branch=main)](https://github.com/oxc-project/oxc/actions/workflows/ci.yml)
  * [pest-parser/pest](https://github.com/pest-parser/pest) - 우아한 파서
  * [ptal/oak](https://github.com/ptal/oak) - 타입이 지정된 PEG 파서 생성기(컴파일러 플러그인)
  * [run-llama/liteparse](https://github.com/run-llama/liteparse) [[liteparse](https://crates.io/crates/liteparse)] - 공간적 텍스트 추출, 경계 상자, 유연한 OCR(Tesseract/HTTP 서버), 다중 언어 바인딩(Rust, Node.js, Python, WASM)을 갖춘 빠르고 가벼운 PDF 파싱 라이브러리. PDFium 기반이며 CLI 도구 `lit`를 제공합니다. [![CI](https://github.com/run-llama/liteparse/actions/workflows/ci.yml/badge.svg)](https://github.com/run-llama/liteparse/actions/workflows/ci.yml)
  * [rust-bakery/nom](https://github.com/rust-bakery/nom) - 파서 조합기 라이브러리
  * [s-panferov/queryst](https://github.com/s-panferov/queryst) - [gs](https://github.com/ljharb/qs#readme)에서 영감을 받은 쿼리 문자열 파싱 라이브러리
  * [slimreaper35/dockerfile-parser-rs](https://github.com/slimreaper35/dockerfile-parser-rs) [[dockerfile-parser-rs](https://crates.io/crates/dockerfile-parser-rs)] - Dockerfile 파싱 라이브러리 및 CLI 도구
  * [softdevteam/grmtools](https://github.com/softdevteam/grmtools/) - 더 나은 오류 교정을 갖춘 LR 파서
  * [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) - 프로그래밍 도구를 위한 파서 생성 도구 및 증분 파싱 라이브러리
  * [winnow-rs/winnow](https://github.com/winnow-rs/winnow) [[winnow](https://crates.io/crates/winnow)] - 바이트 지향 제로 카피 파서 조합기 라이브러리. [![빌드 상태](https://github.com/winnow-rs/winnow/workflows/CI/badge.svg)](https://github.com/winnow-rs/winnow/actions)
  * [xberg-io/tree-sitter-language-pack](https://github.com/xberg-io/tree-sitter-language-pack) [[tree-sitter-language-pack](https://crates.io/crates/tree-sitter-language-pack)] - 통합 파서 API와 14개 언어의 바인딩을 갖춘 300개 이상의 언어용 미리 빌드한 tree-sitter 문법.

### 주변 장치

* [AprilNEA/OpenLogi/crates/openlogi-hidpp](https://github.com/AprilNEA/OpenLogi/tree/main/crates/openlogi-hidpp) [[openlogi-hidpp](https://crates.io/crates/openlogi-hidpp)] - Logitech HID++ 프로토콜 지원을 위한 OpenLogi의 벤더링된 hidpp 크레이트 포크.
* [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) [[esp-hal](https://crates.io/crates/esp-hal)] - Espressif ESP32 장치(ESP32, ESP32-C2/C3/C5/C6/C61, ESP32-H2, ESP32-P4, ESP32-S2/S3)용 베어메탈 `no_std` 하드웨어 추상화 계층. GPIO, I2C, SPI, UART, 타이머, DMA 등의 안전한 Rust API를 제공합니다. [![GitHub Actions 워크플로 상태](https://img.shields.io/github/actions/workflow/status/esp-rs/esp-hal/ci.yml?labelColor=1C2C2E&label=CI&logo=github&style=flat-square)](https://github.com/esp-rs/esp-hal/actions/workflows/ci.yml)
* 지문 리더
  * [alvaroparker/libfprint-rs](https://github.com/alvaroparker/libfprint-rs) [[libfprint-rs](https://crates.io/crates/libfprint-rs)] - Linux libfprint 라이브러리의 래퍼를 제공하는 Libfprint-rs.
* [Michael-A-Kuykendall/crabcamera](https://github.com/Michael-A-Kuykendall/crabcamera) [[crabcamera](https://crates.io/crates/crabcamera)] - 자동 품질 검증과 하드웨어 제어를 갖춘 데스크톱 카메라 접근용 Tauri 플러그인.
* 직렬 포트
  * [serialport/serialport-rs](https://github.com/serialport/serialport-rs) [[serialport](https://crates.io/crates/serialport)] - 직렬 포트 접근을 제공하는 크로스 플랫폼 라이브러리

### 플랫폼별

* 크로스 플랫폼
  * [iddm/thread-priority](https://github.com/iddm/thread-priority/) - 간단한 크로스 플랫폼 스레드 우선순위 관리. [![CI](https://github.com/iddm/thread-priority/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/thread-priority/actions/workflows/ci.yml) [![크레이트 배지](https://img.shields.io/crates/v/thread-priority.svg)](https://crates.io/crates/thread-priority)
  * [svartalf/rust-battery](https://crates.io/crates/battery) - 노트북 배터리의 크로스 플랫폼 정보
* FreeBSD
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) [[jail](https://crates.io/crates/jail)] - FreeBSD jail 라이브러리
* Linux
  * [hannobraun/inotify-rs](https://github.com/hannobraun/inotify-rs) - [inotify](https://en.wikipedia.org/wiki/Inotify) 바인딩 [![Rust](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml)
  * [pop-os/distinst](https://github.com/pop-os/distinst/) - Linux 배포판 설치 프로그램
  * [yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) [[iptables](https://crates.io/crates/iptables)] - [iptables](https://www.netfilter.org/projects/iptables/index.html) 바인딩
* 유닉스 계열
  * [nix-rust/nix](https://github.com/nix-rust/nix) - 유닉스 계열 API 바인딩 [![CI](https://github.com/nix-rust/nix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-rust/nix/actions/workflows/ci.yml)
  * [rustix](https://github.com/bytecodealliance/rustix) - POSIX/Unix/Linux/Winsock2 시스템 호출용 안전한 바인딩 [![Actions 상태](https://github.com/bytecodealliance/rustix/workflows/CI/badge.svg)](https://github.com/bytecodealliance/rustix/actions?query=workflow%3ACI)
  * [zargony/fuse-rs](https://github.com/zargony/fuse-rs) - [FUSE](https://github.com/libfuse/libfuse) 바인딩
* Windows
  * [microsoft/windows-rs](https://github.com/microsoft/windows-rs) - Windows용 Rust [![Actions 상태](https://github.com/microsoft/windows-rs/workflows/CI/badge.svg)](https://github.com/microsoft/windows-rs/actions)
  * [retep998/winapi-rs](https://github.com/retep998/winapi-rs) - Windows API 바인딩 [![Rust](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml/badge.svg?branch=dev)](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml)

### 역공학

* [binlex](https://github.com/c3rb3ru5d3d53c/binlex) - 함수 핑거프린팅과 유사성 매칭을 갖춘 바이너리 분석 및 역공학 프레임워크.
* [idalib](https://github.com/idalib-rs/idalib) [[idalib](https://crates.io/crates/idalib)] - IDA v9.0의 idalib로 독립 분석 도구를 개발할 수 있게 하는 IDA SDK Rust 바인딩
* [objdiff](https://github.com/encounter/objdiff) - 디컴파일 프로젝트용 로컬 차이 비교 도구
* [wakaru](https://github.com/pionxzh/wakaru) [[wakaru](https://crates.io/crates/wakaru)] - JavaScript 디컴파일러. webpack/esbuild/Metro/Browserify 번들을 모듈로 풀고 축소기 및 Babel/TypeScript 출력을 읽기 쉬운 코드로 되돌립니다 [![CI](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml/badge.svg?branch=main)](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml)

### 스크립팅

[[스크립팅](https://crates.io/keywords/scripting)]

* [3body-lang](https://github.com/rustq/3body-lang) - The Three Body Language
* [boa-dev/boa](https://github.com/boa-dev/boa) [[boa_engine](https://crates.io/crates/boa_engine)] - Rust로 작성한 실험적인 JavaScript 렉서, 파서, 인터프리터.
* [cel-rust](https://github.com/cel-rust/cel-rust) [[cel-interpreter](https://crates.io/crates/cel-interpreter)] - Common expression language 파서 및 인터프리터
* [duckscript](https://crates.io/crates/duckscript) - [간단하고 확장 가능하며 내장 가능한 스크립트 언어.](https://github.com/sagiegurari/duckscript) [![빌드 배지](https://github.com/sagiegurari/duckscript/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/duckscript/actions)
* [facebook/starlark-rust](https://github.com/facebook/starlark-rust) - Python 구문을 사용하는 작고 결정론적이며 스레드 안전한 언어
* [fleabitdev/gamelisp](https://github.com/fleabitdev/glsp) - 게임 개발용 Lisp 스타일 스크립트 언어
* [giraffekey/xylo](https://github.com/giraffekey/xylo) [[xylo-lang](https://crates.io/crates/xylo-lang)] - 절차적 미술용 함수형 프로그래밍 언어. [![빌드 배지](https://github.com/giraffekey/xylo/actions/workflows/rust.yml/badge.svg)](https://github.com/giraffekey/xylo/actions)
* [gluon-lang/gluon](https://github.com/gluon-lang/gluon) - 작은 정적 타입 함수형 프로그래밍 언어
* [kcl](https://github.com/kcl-lang/kcl) - 주로 설정 및 정책 상황에서 사용하는 제약 기반 레코드 및 함수형 언어.
* [kyren/piccolo](https://github.com/kyren/piccolo) [[piccolo](https://crates.io/crates/piccolo)] - 순환 감지 증분 GC, 샌드박싱 기능, 안전한 Rust <-> Lua 바인딩을 갖춘 순수 Rust 실험적 스택리스 Lua VM. [![crates.io](https://img.shields.io/crates/v/piccolo)](https://crates.io/crates/piccolo)
* [metacall/core](https://github.com/metacall/core) [[metacall](https://crates.io/crates/metacall)] - NodeJS, JavaScript, TypeScript, Python, Ruby, C#, Wasm, Java, Cobol 등을 지원하는 크로스 플랫폼 다중 언어 런타임. [![빌드 배지](https://gitlab.com/metacall/core/badges/master/pipeline.svg)](https://gitlab.com/metacall/core)
* [mun](https://github.com/mun-lang/mun) - 일급 핫 리로드 지원을 갖춘 컴파일 정적 타입 스크립트 언어
* [murarth/ketos](https://github.com/murarth/ketos) - rust의 스크립트 및 확장 언어로 사용하는 Lisp 방언 함수형 프로그래밍 언어
* [PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) - Rust 스타일의 동적 타입 스크립트 언어
* [rhaiscript/rhai](https://github.com/rhaiscript/rhai) - JavaScript와 Rust의 조합을 닮은 작고 빠른 임베디드 스크립트 언어 [![빌드 배지](https://github.com/rhaiscript/rhai/workflows/Build/badge.svg)](https://github.com/rhaiscript/rhai/actions)
* [rune-rs/rune](https://github.com/rune-rs/rune) - 내장 가능한 동적 프로그래밍 언어
* [trynova/nova](https://github.com/trynova/nova) - 완전히 Rust로 작성한 JavaScript 엔진

### 시뮬레이션

[[시뮬레이션](https://crates.io/keywords/simulation)]

* [nyx-space](https://crates.io/crates/nyx-space) - 우주선 임무 설계와 궤도 결정에 쓰이는 높은 정확도의 빠르고 안정적이며 검증된 천체역학 도구 라이브러리 [![빌드 상태](https://gitlab.com/nyx-space/nyx/badges/master/pipeline.svg)](https://gitlab.com/nyx-space/nyx/-/pipelines)
* [rsasaki0109/rust_robotics](https://github.com/rsasaki0109/rust_robotics) [[rust_robotics](https://crates.io/crates/rust_robotics)] - PythonRobotics에서 영감을 받은 로봇 알고리즘의 Rust 구현체. 경로 계획, 위치 추정, SLAM, 제어를 다루며 no_std 지원과 ROS 2 예제를 제공합니다 [![CI](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml)

### 소셜 네트워크

* Telegram
  * [tdilb-rs](https://github.com/FedericoBruzzone/tdlib-rs) [[tdilb-rs](https://crates.io/crates/tdlib-rs)] - Telegram Database Library(TDLib)의 크로스 플랫폼 Rust 래퍼 [![CI Linux](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml) [![CI macOS](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml) [![CI Windows](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml)

### 시스템

* [ardaku/whoami](https://github.com/ardaku/whoami) [[whoami](https://crates.io/crates/whoami)] - 현재 사용자와 환경을 가져오는 크레이트. [![빌드 배지](https://github.com/ardaku/whoami/actions/workflows/ci.yml/badge.svg?branch=stable)](https://github.com/ardaku/whoami/actions/workflows/ci.yml)
* [GuillaumeGomez/sysinfo](https://github.com/GuillaumeGomez/sysinfo) [[sysinfo](https://crates.io/crates/sysinfo)] - 시스템 정보를 가져오는 크로스 플랫폼 라이브러리 [![빌드 배지](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml)
* [navidys/procsys](https://github.com/navidys/procsys) [[procsys](https://crates.io/crates/procsys)] - /proc 및 /sys 의사 파일시스템에서 시스템, 커널, 프로세스 메트릭을 가져오는 라이브러리.
* [Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[nixinfo](https://crates.io/crates/nixinfo)] - cpu, 배포판, 환경, 커널 등의 시스템 정보를 수집하는 라이브러리 크레이트.
* [sorairolake/sysexits-rs](https://github.com/sorairolake/sysexits-rs) [[sysexits](https://crates.io/crates/sysexits)] - [`<sysexits.h>`](https://man.openbsd.org/sysexits)에 정의된 시스템 종료 코드. [![CI](https://github.com/sorairolake/sysexits-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/sysexits-rs/actions?query=workflow%3ACI)

### 작업 스케줄링

* [delay-timer](https://github.com/BinChengZhao/delay-timer) - 지연 작업의 시간 관리자. crontab과 비슷하지만 비동기 작업이 가능합니다. [![빌드](https://github.com/BinChengZhao/delay-timer/actions/workflows/rust.yml/badge.svg)]( https://github.com/BinChengZhao/delay-timer/actions)
* [persistent-scheduler](https://github.com/rustmailer/persistent-scheduler) [[persistent-scheduler](https://crates.io/crates/persistent-scheduler)] - Tokio 기반 고성능 작업 스케줄링 시스템. 안정적인 시간 기반 작업을 위해 작업 영속성, 반복 작업, Cron 기반 스케줄링을 제공합니다.

### 템플릿 엔진

* Handlebars
  * [sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) - 상속과 맞춤형 헬퍼를 지원하는 Handlebars 템플릿 엔진.
  * [zzau13/yarte](https://github.com/zzau13/yarte) - Yarte는 **Y**et **A**nother **R**ust **T**emplate **E**ngine의 약자로 가장 빠른 템플릿 엔진입니다.
* HTML
  * [askama](https://github.com/askama-rs/askama) - Jinja 기반 템플릿 렌더링 엔진
  * [kaj/ructe](https://github.com/kaj/ructe) - HTML 템플릿 시스템
  * [Keats/tera](https://github.com/Keats/tera) - Jinja2와 Django 템플릿 언어 기반 템플릿 엔진. [![Actions 상태](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [lambda-fairy/maud](https://github.com/lambda-fairy/maud) - 컴파일 시간 HTML 템플릿
  * [mitsuhiko/minijinja](https://github.com/mitsuhiko/minijinja) [[minijinja](https://crates.io/crates/minijinja)] - Jinja2 기반 최소 의존성 템플릿 엔진. [![테스트](https://img.shields.io/github/actions/workflow/status/mitsuhiko/minijinja/tests.yml?branch=main&logo=github)](https://github.com/mitsuhiko/minijinja/actions/workflows/tests.yml)
  * [rshtml/rshtml](https://github.com/rshtml/rshtml) [[rshtml](https://crates.io/crates/rshtml)] - RsHtml: Rust를 HTML에, HTML을 Rust에 삽입하는 컴파일 시간 타입 안전 경량 템플릿 엔진.
  * [Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) - 컴파일 시간 HTML 템플릿
* Mustache
  * [rustache/rustache](https://github.com/rustache/rustache) - Mustache 명세의 Rust 구현체

### 텍스트 처리

* [becheran/wildmatch](https://github.com/becheran/wildmatch) [[wildmatch](https://crates.io/crates/wildmatch)] - 물음표 및 별표 와일드카드 연산자를 사용하는 간단한 문자열 매칭 [![Actions 상태](https://github.com/becheran/wildmatch/workflows/Build/badge.svg?branch=master)](https://github.com/becheran/wildmatch/actions)
* [BurntSushi/suffix](https://github.com/BurntSushi/suffix) - 선형 시간 접미사 배열 생성(유니코드 지원)
* [BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) - 탄력적 탭 정지 위치(텍스트 열 정렬)
* [cpc](https://github.com/probablykasper/cpc) - `1+2`부터 `1% of round(1 lightyear / 14!s to km/h)`까지 단위 및 단위 변환을 지원하여 수학 문자열을 파싱하고 계산합니다.
* [Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - SIMD로 가속한 Rust 편집 거리 루틴. 빠른 Hamming, Levenshtein, 제한된 Damerau-Levenshtein 등의 거리 계산과 문자열 검색을 지원합니다 [![빌드 배지](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [fancy-regex/fancy-regex](https://github.com/fancy-regex/fancy-regex) [[fancy-regex](https://crates.io/crates/fancy-regex)] - 전후방 탐색과 백트래킹 등 비교적 풍부한 기능을 지원하도록 설계한 정규식 구현체. [![크레이트](https://img.shields.io/crates/v/fancy-regex.svg)](https://crates.io/crates/fancy-regex) [![빌드 배지](https://github.com/fancy-regex/fancy-regex/workflows/ci/badge.svg)](https://github.com/fancy-regex/fancy-regex/actions/workflows/ci.yml)
* [greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) - 트라이그램 기반 자연어 감지 라이브러리
* [Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] - 범용 문자열 및 반복 가능 항목 결합
* [mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] - 텍스트 줄 바꿈(하이픈 넣기 지원)
* [null8626/decancer](https://github.com/null8626/decancer) [[decancer](https://crates.io/crates/decancer)] - 문자열에서 흔히 혼동되는 유니코드 문자/동형 문자를 제거하는 작은 패키지. [![크레이트](https://img.shields.io/crates/v/decancer.svg)](https://crates.io/crates/decancer) [![빌드 배지](https://github.com/null8626/decancer/workflows/CI/badge.svg)](https://github.com/null8626/decancer/actions/workflows/CI.yml)
* [ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) - 반복자를 소비하지 않고 대용량 파일의 줄을 앞뒤 및 임의 방향으로 탐색하는 리더
* [pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) [[ngrams](https://crates.io/crates/ngrams)] - 임의 반복자에서 [n-그램](https://en.wikipedia.org/wiki/N-gram)을 구성합니다
* [rust-lang/regex](https://github.com/rust-lang/regex) - 정규식(RE2 스타일)
* [strsim-rs](https://crates.io/crates/strsim) - 문자열 유사도 메트릭
* [xberg-io/html-to-markdown](https://github.com/xberg-io/html-to-markdown) [[html-to-markdown-rs](https://crates.io/crates/html-to-markdown-rs)] - Rust 코어와 12개 언어 바인딩을 갖춘 빠른 CommonMark 호환 HTML-마크다운 변환기.
* [xberg-io/xberg](https://github.com/xberg-io/xberg) [[xberg](https://crates.io/crates/xberg)] - 97개 이상의 형식(PDF, Office, OCR 이미지, HTML, 이메일, 압축 파일)에서 텍스트, 표, 메타데이터를 추출하는 문서 지능 라이브러리. 11개 언어 바인딩.
* [yaa110/rake-rs](https://github.com/yaa110/rake-rs) [[rake](https://crates.io/crates/rake)] - Rust용 다국어 RAKE 알고리즘 구현체

### 텍스트 검색

* [andylokandy/simsearch](https://github.com/andylokandy/simsearch) [[simsearch](https://crates.io/crates/simsearch)] - 메모리에서 유사 문자열을 검색하는 간단하고 가벼운 퍼지 검색 엔진
* [BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] - 유한 상태 머신을 사용하는 정렬된 집합과 맵의 빠른 구현체
* [CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] - 지연 처리 방식의 할당 없는 데이터 독립 정보 검색 라이브러리
* [meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) - 매우 높은 관련성, 즉시 검색, 오타 내성을 갖춘 전문 검색 API. [![빌드 상태](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [pg_search](https://github.com/paradedb/paradedb/tree/dev/pg_search) - 최첨단 전문 검색 순위 함수인 BM25 알고리즘으로 SQL 테이블의 전문 검색을 제공하는 PostgreSQL 확장.
* [SeekStorm](https://github.com/SeekStorm/SeekStorm) [[SeekStorm](https://crates.io/crates/seekstorm)] - Rust의 1밀리초 미만 전문 검색 라이브러리 및 다중 테넌트 서버
* [tantivy](https://github.com/quickwit-oss/tantivy) [[tantivy](https://crates.io/crates/tantivy)] - Rust로 작성한 말처럼 빠른 전문 검색 엔진 라이브러리. [![빌드 상태](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)

### 안전하지 않은 코드

* [zerocopy](https://crates.io/crates/zerocopy) - "Zerocopy는 비용 없는 메모리 조작을 쉽게 만듭니다. 여러분이 하지 않아도 되도록 우리가 `unsafe`를 작성합니다."

### 동영상

* [ffmpeg-sidecar](https://github.com/nathanbabcock/ffmpeg-sidecar) - 독립형 FFmpeg 바이너리를 직관적인 Iterator 인터페이스로 감쌉니다. [![빌드 상태](https://github.com/nathanbabcock/ffmpeg-sidecar/actions/workflows/ci.yml/badge.svg)](https://github.com/nathanbabcock/ffmpeg-sidecar/actions)
* [screencapturekit-rs](https://github.com/doom-fish/screencapturekit-rs) [[screencapturekit](https://crates.io/crates/screencapturekit)] - macOS 화면/오디오 캡처를 위한 Apple ScreenCaptureKit 프레임워크의 안전한 Rust 바인딩 [![빌드 상태](https://github.com/doom-fish/screencapturekit-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/doom-fish/screencapturekit-rs/actions)

### 가상화

* [beneills/quantum](https://github.com/beneills/quantum) - 고급 양자 컴퓨터 시뮬레이터
* [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime) - 독립형 WebAssembly 런타임 [![빌드 상태](https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg)](https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI)
* [capsule](https://github.com/capsulerun/capsule) - 신뢰할 수 없는 코드를 실행하는 WebAssembly 샌드박싱 런타임
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) - Chrome OS에서 빠르고 안전한 가상화 환경 안에 Linux 앱을 실행하도록 하는 CrOSVM
* [oxidecomputer/propolis](https://github.com/oxidecomputer/propolis) - illumos bhyve 커널 모듈용 사용자 공간 프로그램
* [saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) - OS X의 하드웨어 가속 가상화
* [smol-machines/smolvm](https://github.com/smol-machines/smolvm) - 실행 중인 VM을 쓰기 시 복사로 포크하는 libkrun 기반 휴대형 마이크로 VM 샌드박스
* [wasmi-labs/wasmi](https://github.com/wasmi-labs/wasmi) - 경량 WebAssembly 런타임

### 웹 프로그래밍

[Are we web yet?](https://www.arewewebyet.org)와 [Rust 웹 프레임워크 비교](https://github.com/flosse/rust-web-framework-comparison)도 참고하세요.
* 백엔드
  * [actix/actix-web](https://github.com/actix/actix-web) - websocket을 지원하는 경량 비동기 웹 프레임워크
  * [Anansi](https://github.com/saru-tora/anansi) - 간단한 풀스택 웹 프레임워크
  * [loco-rs/loco](https://github.com/loco-rs/loco) [[loco-rs](https://crates.io/crates/loco-rs)] - Rails에서 영감을 받은 사이드 프로젝트와 스타트업용 1인 Rust 프레임워크. [![빌드](https://github.com/loco-rs/loco/actions/workflows/ci.yml/badge.svg)](https://github.com/loco-rs/loco/actions)
  * [Rocket](https://github.com/rwf2/Rocket) - 사용 편의성, 표현력, 속도에 중점을 둔 웹 프레임워크인 Rocket
  * [RustAPI](https://github.com/Tuntii/RustAPI) [[rustapi-rs](https://crates.io/crates/rustapi-rs)] - 컴파일 시간 OpenAPI와 네이티브 MCP를 갖춘 사용하기 편한 웹 프레임워크
  * [summer-rs](https://github.com/summer-rs/summer-rs) - java의 spring-boot에서 영감을 받은 rust 애플리케이션 프레임워크인 summer-rs.
  * [tako](https://github.com/rust-dd/tako) [[tako-rs](https://crates.io/crates/tako-rs)] - 다중 전송 웹 프레임워크. Tokio 또는 Compio에서 HTTP/1.1, HTTP/2, HTTP/3, WebSocket, SSE, gRPC, TCP/UDP, 유닉스 소켓을 단일 라우터로 제공합니다. [![CI](https://github.com/rust-dd/tako/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rust-dd/tako/actions/workflows/ci.yml)
  * [tokio-rs/axum](https://github.com/tokio-rs/axum) - Tokio, Tower, Hyper로 만든 사용하기 편한 모듈식 웹 프레임워크 [![빌드 배지](https://github.com/tokio-rs/axum/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/tokio-rs/axum/actions/workflows/CI.yml)
  * [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) [[topcoat](https://crates.io/crates/topcoat)] - 필요한 기능을 갖춘 모듈식 Rust 풀스택 웹 프레임워크. 서버 측 렌더링, WASM 없는 클라이언트 반응성, 모듈 기반 라우팅, 내장 Tailwind/자산 번들링을 제공합니다. [![빌드 상태](https://img.shields.io/github/actions/workflow/status/tokio-rs/topcoat/ci.yml?branch=main&style=flat-square)](https://github.com/tokio-rs/topcoat/actions)
  * [trillium](https://github.com/trillium-rs/trillium) [[trillium](https://crates.io/crates/trillium)] - 비동기 Rust로 인터넷 애플리케이션을 만드는 조합 가능한 도구 모음.
* 클라이언트 측 / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) - 클라이언트 측 웹용 Cargo 하위 명령
  * [leptos](https://github.com/leptos-rs/leptos) - 세밀한 반응성으로 선언적 사용자 인터페이스를 만드는 풀스택 동형 웹 프레임워크인 Leptos.[![크레이트](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/leptos)
  * [sauron](https://github.com/ivanceras/sauron) - The Elm Architecture를 충실히 따르는 클라이언트 측 웹 프레임워크.
  * [seed](https://github.com/seed-rs/seed) - 웹 앱 제작 프레임워크
  * [stdweb](https://crates.io/crates/stdweb) - 클라이언트 측 웹용 표준 라이브러리
  * [synphonyte/leptos-use](https://github.com/synphonyte/leptos-use) [[leptos-use](https://crates.io/crates/leptos-use)] - React-Use와 VueUse에서 영감을 받은 SSR 지원 필수 Leptos 유틸리티 모음 [![빌드 상태](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml/badge.svg)](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml)
  * [thaw-ui/thaw](https://github.com/thaw-ui/thaw) [[thaw](https://crates.io/crates/thaw)] - Fluent Design 기반의 사용하기 쉬운 Leptos 컴포넌트 라이브러리
  * [tinyweb](https://github.com/LiveDuo/tinyweb) - 코드 800줄로 만든 wasm용 최소한의 Rust 웹 프레임워크
  * [yew](https://crates.io/crates/yew) - 클라이언트 웹 앱 제작 프레임워크
* HTTP 클라이언트
  * [0x676e67/wreq](https://github.com/0x676e67/wreq) - TLS 지문을 갖춘 사용하기 편한 Rust HTTP 클라이언트. [![CI](https://github.com/0x676e67/wreq/actions/workflows/ci.yml/badge.svg)](https://github.com/0x676e67/wreq/actions/workflows/ci.yml) [![crates.io](https://img.shields.io/crates/v/wreq.svg?logo=rust)](https://crates.io/crates/wreq)
  * [alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) - [libcurl](https://curl.se/libcurl/) 바인딩
  * [async-graphql](https://github.com/async-graphql/async-graphql) - GraphQL 서버 라이브러리 [![빌드 상태](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - HTTP/2 클라이언트 프레임워크
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) [[yukikaze](https://crates.io/crates/yukikaze)] - 아름답고 우아한 Yukikaze는 hyper 기반의 작은 HTTP 클라이언트 라이브러리입니다. [![빌드 배지](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
  * [ducaale/xh](https://github.com/ducaale/xh) - HTTP 요청을 보내는 친절하고 빠른 도구 [![크레이트](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/xh) [![GitHub actions 상태](https://github.com/ducaale/xh/workflows/CI/badge.svg?branch=master)](https://github.com/ducaale/xh/actions)
  * [graphql-client](https://github.com/graphql-rust/graphql-client) - 타입이 지정되고 올바른 GraphQL 요청과 응답. [![GitHub actions 상태](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP 구현체 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [plabayo/rama](https://github.com/plabayo/rama) - 네트워크 패킷을 이동하고 변환하는 모듈식 서비스 프레임워크. TLS, JA3/JA4, H2, QUIC/H3 지문을 모방하는 클라이언트 구축 등에 사용할 수 있습니다
  * [seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) - 사용하기 편한 HTTP 클라이언트.
* HTTP 서버
  * [branca](https://crates.io/crates/branca) - 인증 및 암호화된 API 토큰용 Branca 구현체.
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 저수준 및 고수준 HTTP/2 서버
  * [carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] - 빠르고 상용구가 없는 웹 프레임워크
  * [Cot](https://github.com/cot-rs/cot) - 게으른 개발자를 위한 Rust 웹 프레임워크.
  * [GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) - JSON Web Token 구현체.
  * [Gotham](https://github.com/gotham-rs/gotham) - 안전성, 보안, 속도를 희생하지 않는 유연한 웹 프레임워크.
  * [Graphul](https://github.com/graphul-rs/graphul) - Express에서 영감을 받은 웹 프레임워크. [![크레이트](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/graphul)
  * [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Iron 웹 프레임워크 미들웨어.
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP 구현체 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [Iron](https://github.com/iron/iron) - 미들웨어 기반 서버 프레임워크
  * [Juniper](https://github.com/graphql-rust/juniper) - GraphQL 서버 라이브러리
  * [miketang84/sapper](https://github.com/miketang84/sapper) - 비동기 hyper 기반 경량 웹 프레임워크.
  * [Nickel](https://github.com/nickel-org/nickel.rs/) - [Express](https://expressjs.com/)에서 영감을 받았습니다
  * [plabayo/rama](https://github.com/plabayo/rama) - 네트워크 패킷을 이동하고 변환하는 모듈식 서비스 프레임워크. 들어오는 클라이언트의 지문 식별에도 사용할 수 있습니다
  * [poem-web/poem](https://github.com/poem-web/poem) - 기능이 완비되고 사용하기 쉬운 웹 프레임워크. [![CI](https://github.com/poem-web/poem/actions/workflows/ci.yml/badge.svg)](https://github.com/poem-web/poem/actions/workflows/ci.yml)
  * [Rustless](https://github.com/rustless/rustless) - [Grape](https://github.com/ruby-grape/grape)와 [Hyper](https://github.com/hyperium/hyper)에서 영감을 받은 REST 스타일 API 마이크로 프레임워크
  * [Salvo](https://github.com/salvo-rs/salvo) - hyper와 tokio 기반의 사용하기 쉬운 웹 프레임워크. [![빌드 빌드](https://github.com/salvo-rs/salvo/actions/workflows/release.yml/badge.svg)](https://github.com/salvo-rs/salvo/actions)
  * [Saphir](https://github.com/richerarc/saphir) - 번거로움 없이 저수준 제어를 제공하는 점진적 웹 프레임워크.
  * [seanmonstar/warp](https://github.com/seanmonstar/warp) - 워프 속도를 위한 매우 쉽고 조합 가능한 웹 서버 프레임워크. [![크레이트](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/warp)
  * [tiny-http](https://github.com/tiny-http/tiny-http) - 저수준 HTTP 서버 라이브러리
  * [tomaka/rouille](https://github.com/tomaka/rouille) - 웹 프레임워크
  * [Zino](https://github.com/zino-rs/zino) - 조합 가능한 애플리케이션용 차세대 프레임워크
* 기타
  * [cargonauts](https://github.com/cargonauts-rs/cargonauts) - 유지보수하기 쉽고 잘 분리된 웹 앱을 만드는 웹 프레임워크.
  * [edezhic/prest](https://github.com/edezhic/prest) [[prest](https://crates.io/crates/prest)] - 풀스택 개발 간소화를 지향하는 점진적 RESTful 프레임워크
  * [Goldziher/spikard](https://github.com/Goldziher/spikard) [[spikard](https://crates.io/crates/spikard)] - Rust 코어와 Python, TypeScript, Ruby, PHP 바인딩을 갖춘 다중 언어 웹 도구 모음.
  * [hominee/dyer](https://github.com/hominee/dyer) [[dyer](https://crates.io/crates/dyer)] - dyer는 데이터 처리, 웹 크롤링 등을 포함하는 안정적이고 유연하며 빠른 요청-응답 기반 서비스를 위해 설계되었습니다. 속도를 희생하지 않고 친절하고 유연하며 포괄적인 기능을 제공합니다.
  * [osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - 애플리케이션에 내장되는 인가용 정책 엔진. [![빌드 상태](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - Python BeautifulSoup과 비슷하며 HTML 문서를 빠르고 쉽게 조작하고 쿼리하도록 설계한 라이브러리. [![빌드 상태](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [pyrossh/rust-embed](https://git.sr.ht/~pyrossh/rust-embed) [[rust-embed](https://crates.io/crates/rust-embed)] - 정적 자산을 rust 바이너리에 내장하는 매크로
  * [rookie](https://github.com/thewh1teagle/rookie) - 모든 플랫폼의 모든 브라우저에서 쿠키를 불러옵니다. ![crates.io](https://img.shields.io/crates/v/rookie.svg)
  * [rust-scraper/scraper](https://github.com/rust-scraper/scraper) [[scraper](https://crates.io/crates/scraper)] - CSS 선택자로 HTML을 파싱하고 쿼리합니다. [![빌드 상태](https://github.com/rust-scraper/scraper/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rust-scraper/scraper/actions)
  * [serenity-rs/serenity](https://github.com/serenity-rs/serenity) [[serenity](https://crates.io/crates/serenity)] - Discord API 라이브러리
  * [softprops/openapi](https://github.com/softprops/openapi) - openapi 명세 파일 처리 라이브러리
  * [svix/svix-webhooks](https://github.com/svix/svix-webhooks) [[svix](https://crates.io/crates/svix)] - 웹훅 전송 및 서명 검증 라이브러리.
  * [tbot](https://gitlab.com/SnejUgal/tbot) [[tbot](https://crates.io/crates/tbot)] - 멋진 Telegram 봇을 쉽게 만듭니다 [![파이프라인 상태](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - 우아한 Telegram 봇 프레임워크 [![빌드 상태](https://github.com/teloxide/teloxide/actions/workflows/ci.yml/badge.svg)](https://github.com/teloxide/teloxide/actions)
  * [tu6ge/valitron](https://github.com/tu6ge/valitron) [[valitron](https://crates.io/crates/valitron)] - 사용하기 편하고 기능적이며 설정 가능한 검증기
  * [utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] - 웹 스크래핑에 적합한 HTML 문서 유용 데이터 추출 라이브러리.
  * [Utoipa](https://github.com/juhaku/utoipa) - 간단하고 빠른 코드 우선 컴파일 시간 생성 OpenAPI 문서 [![crates.io](https://img.shields.io/crates/v/utoipa.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipa) [![Utoipa 빌드](https://github.com/juhaku/utoipa/actions/workflows/build.yaml/badge.svg)](https://github.com/juhaku/utoipa/actions/workflows/build.yaml)
  * [Utoipauto](https://github.com/ProbablyClem/utoipauto) - Utoipa에 경로/스키마 추가를 자동화하는 Rust 매크로 [![crates.io](https://img.shields.io/crates/v/utoipauto.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipauto)
  * [xberg-io/crawlberg](https://github.com/xberg-io/crawlberg) [[crawlberg](https://crates.io/crates/crawlberg)] - HTML-마크다운 변환, 헤드리스 Chrome 대체 실행, 11개 언어 바인딩을 갖춘 고성능 웹 크롤링 및 스크래핑 엔진.
* 역방향 프록시
  * [sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] - HTTP 역방향 프록시. [![CI](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml)
* 정적 사이트 생성기
  * [cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) - 정적 사이트 생성기 [![빌드 상태](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) [[mdblog](https://crates.io/crates/mdblog)] - 마크다운 파일 기반 정적 사이트 생성기.
  * [getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] - 모든 기능이 내장된 뚜렷한 철학의 정적 사이트 생성기. [![빌드 상태](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [grego/blades](https://github.com/grego/blades) [[blades](https://www.getblades.org/)] - 매우 빠르고 아주 간단한 정적 사이트 생성기.
  * [leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] - 간단한 병렬 블로그 생성기.
  * [rochacbruno/marmite](https://github.com/rochacbruno/marmite/) [[Marmite](https://marmite.blog/)] - 설정이 필요 없는 블로그 생성기
  * [zensical/zensical](https://github.com/zensical/zensical) - Material for MkDocs 팀이 만든 현대적인 정적 사이트 생성기 [![빌드](https://github.com/zensical/zensical/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/zensical/zensical/actions/workflows/build.yml)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 암호화를 지원하는 클라이언트와 서버.
  * [housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) - 가벼운 이벤트 기반 WebSocket
  * [iddm/urlshortener-rs](https://github.com/iddm/urlshortener-rs) - 매우 간단한 URL 단축 라이브러리. [![CI](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml) [![크레이트 배지](https://img.shields.io/crates/v/urlshortener.svg)](https://crates.io/crates/urlshortener)
  * [ratchet](https://github.com/graphform/ratchet) [[ratchet_rs](https://crates.io/crates/ratchet_rs)] - Ratchet은 확장과 Deflate를 지원하는 빠르고 가벼우며 완전한 비동기 WebSocket 프로토콜 구현체입니다.
  * [rerun-io/ewebsock](https://github.com/rerun-io/ewebsock) [[ewebsock](https://crates.io/crates/ewebsock)] - 네이티브와 웹(WASM) 모두로 컴파일되는 간단한 Rust WebSocket 라이브러리. 비동기 친화적 API로 텍스트/바이너리 메시지 송수신을 지원합니다. [![unsafe 금지](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
  * [rust-websocket](https://github.com/websockets-rs/rust-websocket) - WebSocket 연결을 다루는 프레임워크(클라이언트와 서버 모두)
  * [snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) - 경량 스트림 기반 WebSocket 구현체.
  * [vi/websocat](https://github.com/vi/websocat) - Netcat, Curl, Socat 기능으로 WebSocket과 상호작용하는 CLI.

## 레지스트리

레지스트리에서는 Rust 라이브러리를 크레이트 패키지로 게시하여 다른 사람들과 공개 또는 비공개로 공유할 수 있습니다.

* [cenotelie/cratery](https://github.com/cenotelie/cratery) - 조직을 위해 만든 필요한 기능이 포함된 경량 비공개 cargo 레지스트리. [docs.rs](https://docs.rs)와 [deps.rs](https://deps.rs) 유사 기능을 포함합니다. [![CI](https://github.com/cenotelie/cratery/actions/workflows/ci.yml/badge.svg)](https://github.com/cenotelie/cratery/actions/workflows/ci.yml)
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/product/formats/cargo-registry) - 공개 및 비공개 Cargo/Rust 레지스트리(및 다양한 다른 레지스트리)를 일급 지원하는 완전 관리형 패키지 관리 SaaS. 오픈 소스 프로젝트에 무료입니다.
* [Crates](https://crates.io) - Rust/Cargo의 공식 공개 레지스트리.
* [getnora-io/nora](https://github.com/getnora-io/nora) - Docker, Maven, npm, PyPI, Cargo, Go, 원시 형식을 지원하는 경량 단일 바이너리 산출물 레지스트리. 캐싱 및 에어갭 모드의 업스트림 프록시.
* [RepoFlow :heavy_dollar_sign:](https://www.repoflow.io) - Rust 크레이트 저장소를 호스팅하고 crates.io를 프록시하는 간단하고 현대적인 저장소 플랫폼. Docker, PyPI, Maven, npm, RubyGems 등의 패키지도 지원합니다. 클라우드 서비스 또는 자체 호스팅으로 사용할 수 있습니다.
* [w4/chartered](https://github.com/w4/chartered) - 비공개 인증 및 권한 제어 Cargo 레지스트리 [![CI](https://github.com/w4/chartered/actions/workflows/ci.yml/badge.svg)](https://github.com/w4/chartered/actions/workflows/ci.yml)

## 자료

* [A Brief History of Rust. Part 1](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-1-805459c60c6b) - 소프트웨어 안정성을 추구하던 개발자의 여정이 제작자를 거의 불안정하게 만든 프로젝트로 이어진 이야기. [2부](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-981d61451aa5). [3부](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-b8c0f7a7e781?sk=c0e7fe5fde11a62edc23f284f125aa18).
* [ANSSI-FR/rust-guide](https://github.com/ANSSI-FR/rust-guide) - 프랑스 사이버 보안 기관(ANSSI)의 Rust 보안 애플리케이션 개발 권장 사항. 생성된 체크리스트 포함
* 미술
  * [🦀 Free Ferris Pack 🦀](https://github.com/MariaLetta/free-ferris-pack) - 다양한 감정, 자세, 상황을 담은 50개 이상의 무료 Ferris 일러스트 모음. PNG 및 SVG 형식이며 CC0 라이선스
* 벤치마크
  * [c410-f3r/wtx-bench](https://github.com/c410-f3r/wtx-bench) - 웹 벤치마크
  * [TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) - [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/) 구현체
* 슬라이드 및 발표
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) - Rustconf 2016에서 [Julia Evans](https://x.com/b0rk) 발표.
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) - C++Now 2018에서 [Nicholas Matsakis](https://github.com/nikomatsakis) 발표
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) - RustConf 2017에서 [Michael Gattozzi](https://github.com/mgattozzi) 발표
* 학습
  * [100 Exercises To Learn Rust](https://rust-exercises.com) - 구문, 타입 등을 다루는 100개 실습으로 Rust를 배웁니다
  * [An Introduction to Programming using entity-component-systems and existence-based processing in Rust](https://root-11.github.io/intro-book/) - Bjorn Madsen의 책
  * [Aquascope](https://github.com/cognitive-engineering-lab/aquascope) - 컴파일 시간과 실행 시간의 Rust 대화형 시각화
  * [Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - 커뮤니티가 엄선한 라이브 스트림 목록.
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) - 멘티를 받아 Rust와 프로그래밍을 가르칠 의향이 있는 도움을 주는 멘토 목록.
  * [CIS 198: Rust Programming](http://cis198-2016s.github.io/schedule/) - 펜실베이니아 대학교 컴퓨터과학 Rust 프로그래밍 강좌
  * [CodeCrafters.io](https://app.codecrafters.io/tracks/rust) - 나만의 Redis, Git, Docker, SQLite를 만듭니다
  * [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - Rust 기초 3일 강좌와 Android, 베어메탈 Rust, 동시성의 각 1일 강좌. 영어, [브라질 포르투갈어](https://google.github.io/comprehensive-rust/pt-BR/), [한국어](https://google.github.io/comprehensive-rust/ko/)로 제공됩니다.
  * [Easy Rust](https://github.com/Dhghomon/easy_rust) - 쉬운 영어로 Rust를 배웁니다.
  * [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - C 또는 C++로 작성한 전통적 임베디드 소프트웨어보다 빠르고 효율적이며 훨씬 안전한 펌웨어 제작을 위한 실용적 입문서.
  * [exercism.org](https://exercism.org/tracks/rust) - Rust의 새 개념 학습을 돕는 프로그래밍 연습 문제.
  * [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) - 게임을 만들며 Rust를 배우는 [Herbert Wolverson](https://github.com/thebracket/)의 실습 가이드(유료)
  * [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker) - [Qouteall](https://github.com/qouteall)이 작성한 Rust 빌림의 작동 방식과 빌림 오류 예방 가이드
  * [Idiomatic Rust](https://github.com/mre/idiomatic-rust) - 관용적인 Rust를 가르치는 동료 검토된 글/발표/저장소 모음.
  * [LabEx Rust Skill Tree](https://labex.io/skilltrees/rust) - 초보자가 Rust를 단계별로 익히도록 설계한 실습 포함 체계적 Rust 학습 경로.
  * [Learn Rust 101](https://rust-lang.guide/) - Rustacean(Rust 개발자)이 되는 여정을 돕는 가이드
  * [Learn Rust by 500 lines code](https://github.com/cuppar/rtd) - 코드 500줄로 Rust를 배우고 할 일 CLI 애플리케이션을 처음부터 만듭니다.
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - 다양한 리스트 구조를 구현하며 Rust 메모리 관리 규칙을 깊이 탐구합니다.
  * [Little Book of Rust Books](https://lborb.github.io/book/) - 엄선한 rust 책과 사용법 모음.
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) - 프로그래밍 커뮤니티가 투표한 권장 자료 목록.
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - Rust 언어 입문서.
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - Rust의 여러 개념과 표준 라이브러리를 설명하는 실행 가능한 예제 모음.
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - Rust 생태계 크레이트로 흔한 프로그래밍 작업을 해결하는 좋은 방법을 보여 주는 간단한 예제 모음.
  * [Rust Flashcards](https://github.com/ad-si/Rust-Flashcards) - 기본 원리부터 Rust를 배우는 550개 이상의 플래시 카드.
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) - 숙련된 소프트웨어 개발자를 위한 빠른 Rust 입문서.
  * [Rust Gym](https://github.com/warycat/rustgym) - Rust로 푼 코딩 면접 문제 대규모 모음.
  * [Rust in Action](https://www.manning.com/books/rust-in-action) - [Tim McNamara](https://github.com/timClicks)의 Rust 시스템 프로그래밍 실습 가이드(유료)
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) - [Carol Nichols](https://github.com/carols10cents)와 [Jake Goulding](https://github.com/shepmaster)의 동영상 시리즈(유료)
  * [Rust Language Cheat Sheet](https://cheats.rs/) - Rust 언어 요약표
  * [Rust Tiếng Việt](https://rust-tieng-viet.github.io/) - 베트남어로 Rust를 배웁니다.
  * [rust-how-do-i-start](https://github.com/jondot/rust-how-do-i-start) - "그래서 Rust는 어떻게 *시작*하나요?"라는 질문에 답하는 저장소. 초보자만을 위한 엄선한 자료와 학습 과정.
  * [rust-learning](https://github.com/ctjhoa/rust-learning) - Rust 학습에 유용한 자료 모음
  * [Rustfinity](https://www.rustfinity.com) - 실습과 도전 과제로 Rust를 연습하는 대화형 플랫폼
  * [Rustlings](https://github.com/rust-lang/rustlings) - Rust 코드 읽기와 쓰기에 익숙해지는 작은 연습 문제
  * [Rusty CS](https://github.com/AbdesamedBendjeddou/Rusty-CS) - 습득한 학문적 지식을 Rust로 연습하도록 돕는 컴퓨터과학 교육 과정
  * [stdx](https://github.com/brson/stdx) - std의 확장으로 이 크레이트들을 먼저 배우세요
  * [Tour of Rust](https://tourofrust.com) - Rust 프로그래밍 언어의 기능을 단계별로 안내하는 대화형 가이드입니다.
* 성능
  * [How to avoid bounds checks in Rust (without unsafe!)](https://shnatsel.medium.com/how-to-avoid-bounds-checks-in-rust-without-unsafe-f65e618b4c1e) - 경계 검사 최적화에 대해 알아야 할 모든 것
  * [Performance of Rust language](https://raw.githubusercontent.com/yugr/rust-slides/main/EN.pdf) - Rust의 성능 지향 언어 기능 개요
  * [The Rust Performance Book](https://nnethercote.github.io/perf-book/) - Rust 프로그램 최적화 팁
* 팟캐스트
  * [New Rustacean](https://newrustacean.com) - Rust 학습에 관한 팟캐스트
  * [Rustacean Station](https://rustacean-station.org/) - Rust 팟캐스트 콘텐츠 제작을 위한 커뮤니티 프로젝트
* [Rust Design Patterns](https://github.com/rust-unofficial/patterns) - Rust 디자인 패턴, 안티패턴, 관용구 목록
* [Rust Guidelines](http://aturon.github.io/) - Aaron Turon의 rust 블로그 글
* [Rust Security Handbook](https://github.com/yevh/rust-security-handbook) - 실제로 안전한 Rust를 작성하는 10장 분량의 핸드북. 타입 안전성, 패닉 방지 등.
* [Rust Servers, Services and Apps - MEAP](https://www.manning.com/books/rust-servers-services-and-apps) - Rust로 백엔드 서버, 서비스, 프런트엔드를 만들어 빠르고 안정적이며 유지보수 가능한 애플리케이션을 구축합니다.
* [Rust Subreddit](https://www.reddit.com/r/rust/) - rust 관련 질문, 글, 자료를 게시하고 토론하는 서브레딧(포럼)
* [RustBooks](https://github.com/sger/RustBooks) - RustBooks 목록
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t) - RustCamp 2015 녹화 발표
* [RustViz](https://github.com/rustviz/rustviz) - 간단한 Rust 프로그램에서 시각화를 생성하여 Rust 수명과 빌림 메커니즘을 더 잘 이해하도록 돕습니다.
* [Watch Jon Gjengset Implement BitTorrent in Rust](https://www.youtube.com/watch?v=jf_ddGnum_4) - Rust로 BitTorrent 클라이언트(일부)를 구현합니다

## 라이선스

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
