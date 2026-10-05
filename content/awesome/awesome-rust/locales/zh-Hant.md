# Awesome Rust [![lint badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml/badge.svg)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml) [![build badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/rust-unofficial/awesome-rust/)

Rust 程式碼與資源的精選清單。

如欲貢獻內容，請閱讀[此文件](CONTRIBUTING.md)。

<!-- BEGIN mktoc {"min_depth": 2} -->

- [應用程式](#applications)
  - [音訊與音樂](#audio-and-music)
  - [區塊鏈](#blockchain)
  - [資料庫](#database)
  - [嵌入式](#embedded)
  - [模擬器](#emulators)
  - [檔案管理器](#file-manager)
  - [金融](#finance)
  - [遊戲](#games)
  - [圖形](#graphics)
  - [影像處理](#image-processing)
  - [工業自動化](#industrial-automation)
  - [訊息佇列](#message-queue)
  - [MLOps](#mlops)
  - [可觀測性](#observability)
  - [作業系統](#operating-systems)
  - [套件管理器](#package-managers)
  - [支付](#payments)
  - [生產力工具](#productivity)
  - [路由協定](#routing-protocols)
  - [安全工具](#security-tools)
  - [社群網路](#social-networks)
  - [系統工具](#system-tools)
  - [任務排程](#task-scheduling)
  - [文字編輯器](#text-editors)
  - [文字處理](#text-processing)
  - [實用工具](#utilities)
  - [影片](#video)
  - [虛擬化](#virtualization)
  - [網頁](#web)
  - [Web 伺服器](#web-servers)
  - [工作流程自動化](#workflow-automation)
- [開發工具](#development-tools)
  - [建置系統](#build-system)
  - [除錯](#debugging)
  - [部署](#deployment)
  - [嵌入式](#embedded-1)
  - [FFI](#ffi)
  - [格式化工具](#formatters)
  - [IDE](#ides)
  - [效能分析](#profiling)
  - [服務](#services)
  - [靜態分析](#static-analysis)
  - [測試](#testing)
  - [轉譯](#transpiling)
  - [通道](#tunnel)
- [函式庫](#libraries)
  - [人工智慧](#artificial-intelligence)
    - [遺傳演算法](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [機器學習](#machine-learning)
    - [OpenAI](#openai)
    - [工具](#tooling)
  - [天文學](#astronomy)
  - [非同步](#asynchronous)
  - [音訊與音樂](#audio-and-music-1)
  - [驗證](#authentication)
  - [汽車](#automotive)
  - [生物資訊學](#bioinformatics)
  - [快取](#caching)
  - [雲端](#cloud)
  - [命令列](#command-line)
  - [壓縮](#compression)
  - [計算](#computation)
  - [並行處理](#concurrency)
  - [設定](#configuration)
  - [密碼學](#cryptography)
  - [資料處理](#data-processing)
  - [資料串流](#data-streaming)
  - [資料結構](#data-structures)
  - [資料視覺化](#data-visualization)
  - [資料庫](#database-1)
  - [日期與時間](#date-and-time)
  - [分散式系統](#distributed-systems)
  - [領域驅動設計](#domain-driven-design)
  - [eBPF](#ebpf)
  - [電子郵件](#email)
  - [編碼](#encoding)
  - [檔案系統](#filesystem)
  - [金融](#finance-1)
  - [函數式程式設計](#functional-programming)
  - [遊戲開發](#game-development)
  - [地理空間](#geospatial)
  - [圖形演算法](#graph-algorithms)
  - [圖形](#graphics-1)
  - [圖形使用者介面](#gui)
  - [影像處理](#image-processing-1)
  - [語言規格](#language-specification)
  - [授權](#licensing)
  - [日誌](#logging)
  - [巨集](#macro)
  - [標記語言](#markup-language)
  - [行動裝置](#mobile)
  - [網路程式設計](#network-programming)
  - [剖析](#parsing)
  - [周邊設備](#peripherals)
  - [平台特定](#platform-specific)
  - [逆向工程](#reverse-engineering)
  - [腳本](#scripting)
  - [模擬](#simulation)
  - [社群網路](#social-networks-1)
  - [系統](#system)
  - [任務排程](#task-scheduling-1)
  - [範本引擎](#template-engine)
  - [文字處理](#text-processing-1)
  - [文字搜尋](#text-search)
  - [Unsafe](#unsafe)
  - [影片](#video-1)
  - [虛擬化](#virtualization-1)
  - [網頁程式設計](#web-programming)
- [套件登錄庫](#registries)
- [資源](#resources)
- [授權](#license)
<!-- END mktoc -->

## 應用程式

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - 以 Rust 驅動的 Wolfram Language 直譯器。
* [alacritty](https://github.com/alacritty/alacritty) - 具備 GPU 加速的跨平台終端機模擬器。
* [Andromeda](https://github.com/tryandromeda/andromeda) - 從零以 Rust 🦀 打造、由 Nova Engine 驅動的 JavaScript 與 TypeScript 執行環境。
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - 用於瀏覽 AI 模型、基準測試與程式設計代理的 TUI [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - Tor 的實作（目前還只是相當不完整的用戶端，敬請期待！） [![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - 互動式組合語言 Shell。
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - 以 Tauri 與 Rust 為基礎，支援 Windows、macOS 和 Linux 的跨平台現代化 Clash 圖形介面。
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - 在使用者空間執行的 WireGuard VPN 實作。 [![build badge](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - 以 Tauri 打造的輕量開源資料庫管理工具，支援 MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB 等。 [![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - 具備完整 2FA/MFA 的企業級開源 SSO 與 WireGuard VPN。
* [denoland/deno](https://github.com/denoland/deno) - 使用 V8 與 Tokio 打造的安全 JavaScript／TypeScript 執行環境。 [![Build Status](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - 使用喜愛的調色盤與主題轉換圖片和桌布。 [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - 簡單、功能完整且去中心化的網狀 VPN，支援 WireGuard。 [![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - 滿足簡單需求的簡潔編輯器。 [![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - 受 Ansible 語法啟發的 HTTP 負載測試應用程式。
* [fend](https://github.com/printfn/fend) - 支援任意精度與單位的計算機。 [![build](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - 簡易微服務。
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - 搭載 Rust 執行環境的跨平台桌面 AI 代理，可在真實儲存庫中運作並操控瀏覽器、終端機及桌面應用程式。
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - 速度極快且相對穩定的 Mega 下載器。 [![build](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - 受 i3wm 啟發的 Windows 磚塊式視窗管理器，支援 YAML 設定、多螢幕與鍵盤操作命令。
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - mdBook 的國際化與渲染擴充功能。
* [habitat](https://github.com/habitat-sh/habitat) - 由 Chef 開發，用來建置、部署及管理應用程式的工具。
* [Herd](https://github.com/imjacobclark/Herd) - 實驗性 HTTP 負載測試應用程式。
* [hickory-dns](https://crates.io/crates/hickory-dns) - DNS 伺服器。 [![Build Status](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - 底層使用 WireGuard 的覆疊式私人網狀網路。
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - 快速、簡單且輕量的資料收集器。
* [kalker](https://github.com/PaddiM8/kalker) - 支援數學式語法的科學計算機，可使用者自訂變數與函式，並支援微分、積分及複數。可跨平台使用，也支援 WASM。 [![Build Status](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - 跨平台系統匣應用程式，可管理及分享多組 kubectl 連接埠轉送設定。 [![Build Status](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - 高效能點對點 VPN。
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - 適用於 Kubernetes 的超輕量服務網格。
* [LWE](https://github.com/YangYuS8/lwe) - 以 Rust 和 Tauri 打造的 Linux 桌面應用程式，可瀏覽、管理及套用 Wallpaper Engine 內容。
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - [mdBook](https://github.com/rust-lang/mdBook) 預處理器，使用 KaTeX 渲染 LaTeX 數學式。
* [MaidSafe](https://github.com/maidsafe) - 去中心化平台。
* [mayocream/koharu](https://github.com/mayocream/koharu) - 以 Candle 和 Tauri 打造的機器學習漫畫翻譯工具，具備自動偵測對話框、OCR、影像修補與 LLM 翻譯功能。
* [mdBook](https://github.com/rust-lang/mdBook) - 從 Markdown 檔案建立書籍的命令列工具。 [![Build Status](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - 支援 Git 的單一儲存庫與單體程式碼庫管理系統，也是 Google Piper 的非官方開源實作。
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - 可協助檢查連結的 mdBook 後端。
* [mirrord](https://github.com/metalbear-co/mirrord) - 連結本機程序與雲端環境，讓本機程式碼在雲端條件下執行。
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - 採用 Nostr 身分與 FIPS 支援資料平面的 Tailscale 風格私人網狀 VPN。提供 macOS、Linux、Windows、行動裝置原生跨平台應用程式，以及 CLI／常駐程式。
* [newdee/magpie](https://github.com/newdee/magpie) - 以本機資料為優先、類似 Spotlight 的啟動器，可完全在裝置端語意搜尋 GitHub 星號、在地檔案、圖片與影片。 [![CI](https://github.com/newdee/magpie/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/newdee/magpie/actions/workflows/ci.yml)
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - 供 Linux 和 macOS 使用的 Steam 與 DRM-free 遊戲登錄庫及啟動器。
* [openma-ai/Martty](https://github.com/openma-ai/Martty) - 以 Rust／ratatui 開發的終端機用戶端，適用於 DeepSeek Harness 與其他相容 ACP 的程式設計代理。 [![CI](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml/badge.svg?branch=main)](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml)
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - 以 Tauri 2.0 和純 Rust SSH（russh）打造的跨平台 SSH 終端機用戶端與本機終端機模擬器。具備多工連線、SFTP 檔案管理器、內建 IDE（CodeMirror 6）、連接埠轉送（-L／-R／-D）、寬限期自動重新連線、外掛系統、AI 助理、加密匯出（.oxide）及 11 種語言。 [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - 以修補程式為基礎的分散式版本控制系統。
* [provrb/OBDium](https://github.com/provrb/obdium) - 以 Tauri 為基礎的跨平台車輛診斷應用程式。透過 ELM327 轉接器連接車輛，讀取故障碼、即時 OBD-II 資料、I/M 就緒狀態測試等資訊！
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - 企業級快速開發平台（Axum + SeaORM + JWT + VUE3，支援 MySQL／Postgres／SQLite）。
* [Rauthy](https://github.com/sebadob/rauthy) - OpenID Connect 單一登入身分與存取管理。
* [Rio](https://github.com/raphamorim/rio) - 以 WebGPU 驅動的硬體加速 GPU 終端機模擬器，專為在桌面與瀏覽器中執行而設計。
* [rkik](https://github.com/aguacero7/rkik) - 專為無狀態、被動式 NTP 檢查設計的 CLI 工具，就像 dig 或 ping 分別用於 DNS 與 ICMP 一樣。支援非同步請求與持續監控。 [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - 通用多語言執行器與智慧 REPL（支援 25 種以上語言，包括 Python、JS、Go、C 等）。
* [runmat-org/runmat](https://github.com/runmat-org/runmat) [[runmat](https://crates.io/crates/runmat)] - 用於執行 MATLAB 語法數值程式的執行環境，並透過 wgpu 提供 GPU 加速。 [![CI](https://github.com/runmat-org/runmat/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/runmat-org/runmat/actions/workflows/ci.yml)
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - 以 Rust 打造的高效能 IoT 開發平台，支援多種通訊協定與即時資料處理。支援 MQTT、WebSockets（WS）、TCP 和 CoAP，能靈活滿足各類 IoT 應用需求。
* [rx](https://github.com/cloudhead/rx) - 受 Vi 啟發的現代像素藝術編輯器。
* [Ryot](https://github.com/ignisda/ryot) - 可自行託管的應用程式，用於追蹤媒體消費、健身等活動。
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - 跨平台系統匣應用程式，可透過全域快速鍵、巢狀選單及 JSON 設定檔整理並執行預先定義的終端機命令（Tauri + Vue）。
* [Saga Reader](https://github.com/sopaco/saga-reader) - 由 AI 驅動、速度飛快且極輕量的網路閱讀器。支援擷取搜尋引擎資訊與 RSS。
* [Servo](https://github.com/servo/servo) - 原型網頁瀏覽器引擎。
* [shoes](https://github.com/cfal/shoes) - 多通訊協定 Proxy 伺服器。
* [shuttle](https://github.com/shuttle-hq/shuttle) - 無伺服器平台。
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - 輕鬆監控網路流量的跨平台應用程式。 [![build badge](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - 速度極快的 TypeScript／JavaScript 編譯器。
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - 可自行託管的 AI 程式設計助理，是支援 GPU 與 OpenAPI 介面的 GitHub Copilot 開源替代方案。 [![latest release](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - 可自行託管的 PaaS，以單一 Rust 執行檔取代 Vercel、分析工具、錯誤追蹤與正常運作時間監控。
* [tiny](https://github.com/osa1/tiny) - 終端機 IRC 用戶端。
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - 一套用於自訂 Android 的開源工具，提供 Root 權限、開機映像檔操作及無系統修改功能。
* [tunnetio/Tunnet](https://github.com/tunnetio/Tunnet) - 私人網狀網路，具備公開通道、以身分識別為基礎的 SSH，以及點對點檔案傳輸。
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - 適用於終端機、桌面 GUI 與命令列工作流程的本機程式設計代理，具備持續保存的任務狀態與以證據為依據的驗證。 [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - 以標記語言為基礎的排版系統。 [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - 以 Tauri 打造、適用於 macOS、Linux 和 Windows 的 WireGuard VPN 用戶端。
* [vortix](https://github.com/Harry-kp/vortix) - WireGuard 與 OpenVPN 的終端機 UI，具備即時遙測、洩漏偵測及終止開關。
* [vproxy](https://github.com/0x676e67/vproxy) - 高效能 HTTP／HTTPS／SOCKS5 Proxy 伺服器。 [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - 安全且快速的 WebAssembly 執行環境，支援 WASI 與 Emscripten。 [![Build Status](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - 完整的假資料 REST API 產生器。
* [wezterm](https://github.com/wezterm/wezterm) - GPU 加速的跨平台終端機模擬器與多工器。
* [WinterJS](https://github.com/wasmerio/winterjs) - 以 SpiderMonkey 和 Axum 打造的安全 JavaScript 執行環境。
* [zellij](https://github.com/zellij-org/zellij) - 內建完整功能的終端機多工器（工作區）。
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - 以 Tauri 打造的現代、輕量且安全的 Mihomo（Clash Meta）GUI 用戶端。 [![Security Audit](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### 音訊與音樂

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - 以原生 Rust 打造的即時語音 AI 代理執行環境（電話 + WebRTC），可自行託管的單一執行檔，並與 pipecat 相容。
* [dano](https://github.com/kimono-koans/dano) - 適用於媒體檔案的 hashdeep／md5tree（但功能豐富得多）。
* [enginesound](https://github.com/DasEtwas/enginesound) - 具備 GUI 與命令列介面的應用程式，可程序化產生擬真的引擎音效；提供深入設定、可變取樣率及頻率分析視窗。
* [Festival](https://github.com/hinto-janai/festival) - 本機音樂播放器／伺服器／用戶端。 [![build-badge](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - 極簡 MPD 終端機用戶端，力求簡單又高度可設定。 [![build-badge](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - 以圖形為核心的即時程式設計語言，讓使用者在瀏覽器中協作創作音樂。
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - Spotify 終端機用戶端，提供原生串流播放、同步歌詞與即時音訊視覺化。 [![Continuous Deployment](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - 現代且可設定的終端機 MPD 用戶端，支援專輯封面。
* [ncspot](https://github.com/hrkfdn/ncspot) - 受 ncmpc 等程式啟發的跨平台 ncurses Spotify 用戶端。 [![build badge](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - 以 Rust 撰寫，快速、簡潔且專業的 Linux 音訊計量／視覺化工具。
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - 以 Rust 打造、支援多使用者的 Podcast 管理系統。Pinepods 使用中央資料庫，讓聆聽時間與主題等資訊能在不同裝置間同步。搭配以 Tauri 建置的用戶端，提供完整的跨平台收聽體驗！ [![Docker Container Build](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - 可自行託管的 Podcast 管理器，會自動下載新集數，並提供用於收聽的網頁介面，以及適用於 AntennaPod 等行動應用程式、相容 GPodder 的同步 API。 [![build badge](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - 音樂串流應用程式。
* [rusty-amp](https://github.com/danylokravchenko/rusty-amp) - 完整的吉他音箱與效果器組合，支援外部外掛，直接在終端機中執行。
* [Spotify Player](https://github.com/aome510/spotify-player) - 功能完整的終端機 Spotify 播放器。
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - 以 UNIX 常駐程式執行的開源 Spotify 用戶端。 [![Continuous Integration](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - 以 Rust 撰寫的音樂播放器 TUI。
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - 直接從終端機瀏覽並收聽全球數千個廣播電台。 [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - 每日靜態產生的電子舞曲製作資訊資源。運用 Beatport、Spotify 等公開資料，每日分析各 EDM 曲風最常使用的速度、調性、根音等數值。

### 區塊鏈

* [Anchor](https://github.com/solana-foundation/anchor) - Anchor 是建置安全 Solana 程式（智慧合約）的領先開發框架。
* [artemis](https://github.com/paradigmxyz/artemis) - 簡單、模組化且快速的 MEV 機器人開發框架。
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - 用於操作 Bitcoin SV 的函式庫。
* [cairo](https://github.com/starkware-libs/cairo) - Cairo 是首個用於建立通用運算可驗證程式的圖靈完備語言，也是使用 STARK 證明的 ZK-Rollup [StarkNet](https://www.starknet.io) 的原生語言。 ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - 在 Polkadot 上完全去中心化的跨鏈加密資產管理。
* [CITA](https://github.com/citahub/cita) - 面向企業用戶的高效能區塊鏈核心。
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - Coinbase Pro 用戶端，支援同步、非同步及 WebSocket。
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - 由 EigenLayer 保護、以 AI 為先的去中心化儲存。
* [Diem](https://github.com/diem/diem) - Diem 的使命是打造簡單的全球貨幣與金融基礎設施，賦能數十億人。
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - Dusk 的參考實作。Dusk 是以隱私為核心、可擴充的金融市場基礎設施（FMI），服務實體資產（RWA）與合規金融應用程式。 [![Build Status](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - Electrum Server 的高效率重新實作。
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - Beerus 是無須信任的 StarkNet 輕用戶端，⚡速度飛快⚡。 [![GitHub Workflow Status](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - 編碼與解碼智慧合約呼叫。
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - 自訂 Ethereum 虛榮地址產生器。
* [etk](https://github.com/quilt/etk) - etk 是一套用於撰寫、讀取與分析 EVM 位元組碼的工具。
* [Forest](https://github.com/ChainSafe/forest) - Filecoin 實作。 [![Build Status](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Foundry 是用於 Ethereum 應用程式開發的超高速、可攜式、模組化工具組。 ![Build Status](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - MimbleWimble 協定的演進版本。
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - BIP-32 HD 錢包相關的金鑰衍生工具。
* [Holochain](https://github.com/holochain/holochain) - 可擴充的點對點區塊鏈替代方案，適用於各種你一直想打造的分散式應用程式。 [![detect critical check failures](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - 無須許可的模組化互通性框架。其鏈下用戶端以 Rust 撰寫，Solana VM 與 CosmWasm 的智慧合約亦然。
* [HyperSync](https://github.com/enviodev/hypersync-client-rust) [[hypersync-client](https://crates.io/crates/hypersync-client)] - Envio HyperSync 用戶端。HyperSync 是區塊鏈資料 API，可篩選並回傳區塊、交易與日誌，作為 JSON-RPC 的替代方案。 [![Build Status](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml)
* [ibc-rs](https://github.com/informalsystems/hermes) - [跨鏈通訊（Interblockchain Communication）](https://docs.cosmos.network/ibc) 協定的實作。
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - BIP39 的實作。
* [interBTC](https://github.com/interlay/interbtc) - 通往 Polkadot 與 Kusama、無須信任且完全去中心化的 Bitcoin 橋接器。
* [Joystream](https://github.com/Joystream/joystream) - 由使用者治理的影片平台。
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - 全球最快、開源、去中心化且可完全擴充的 Layer 1。
* [Lighthouse](https://github.com/sigp/lighthouse) - Ethereum 共識層（CL）用戶端。 [![Build Status](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - 專為高擴充性、低延遲 Web3 應用程式打造的去中心化區塊鏈基礎設施。 [![Build Status](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - 面向低階行動裝置的去中心化智慧合約平台。
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervos CKB 是公開、無須許可的區塊鏈，也是 Nervos 網路的共通知識層。
* [opensea-rs](https://github.com/gakonst/opensea-rs) - OpenSea API 與合約的繫結和 CLI。
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - Parity Bitcoin 用戶端。
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - 以 Intel SGX 與 Substrate 為基礎的機密智慧合約區塊鏈。
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - Parity Polkadot 區塊鏈 SDK。
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - 以 Rust 撰寫的 Cardano 節點用戶端。
* [reth](https://github.com/paradigmxyz/reth) - 模組化、方便貢獻者參與且速度飛快的 Ethereum 協定實作。
* [revm](https://github.com/bluealloy/revm) - Revolutionary Machine（revm）是一款快速的 Ethereum 虛擬機器。
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - 提供序列化／反序列化、剖析與執行功能的函式庫，支援與 Bitcoin 相關的資料結構和網路訊息。
* [rust-lightning](https://github.com/lightningdevkit/rust-lightning) [![Crate](https://img.shields.io/crates/v/lightning.svg?logo=rust)](https://crates.io/crates/lightning) - Bitcoin Lightning 函式庫。主要 crate `lightning` 不處理網路、持久化或任何其他 I/O，因此與執行環境無關；不過使用者必須自行實作基本網路邏輯、鏈上互動與磁碟儲存。
* [sigma-rust](https://github.com/ergoplatform/sigma-rust) - ErgoTree 直譯器與錢包相關功能。
* [starkware-libs/cairo-vm](https://github.com/starkware-libs/cairo-vm) - Cairo VM 的實作。 [![rust](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml/badge.svg)](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml)
* [Subspace](https://github.com/autonomys/subspace) - 首個能同時實現擴充性、安全性與去中心化，完整解決區塊鏈三難困境的 Layer 1 區塊鏈。
* [Sui](https://github.com/MystenLabs/sui) - 新世代智慧合約平台，具備高吞吐量、低延遲與以資產為核心的程式設計模型，並由 Move 語言驅動。
* [svm-rs](https://github.com/alloy-rs/svm-rs) - Solidity 編譯器版本管理工具。
* [tempoxyz/tempo](https://github.com/tempoxyz/tempo) - 專為大規模穩定幣支付打造的區塊鏈，支援 EVM、亞秒級最終性與原生智慧帳戶功能，並以 Reth SDK 建置。
* [tendermint-rs](https://github.com/cometbft/tendermint-rs) - Tendermint 區塊鏈資料結構與用戶端。
* [wagyu](https://github.com/howardwu/wagyu) [[wagyu](https://crates.io/crates/wagyu)] - 用於產生加密貨幣錢包的函式庫。
* [zcash](https://github.com/zcash/zcash) - Zcash 是「Zerocash」協定的實作。

### 資料庫

* [apecloud/ape-dts](https://github.com/apecloud/ape-dts) - 資料傳輸工具組，可在 MySQL、PostgreSQL、Redis、MongoDB、Kafka、ClickHouse 等系統間複製資料。
* [Atomic-Server](https://github.com/ontola/atomic-server/) [[atomic-server](https://crates.io/crates/atomic_server)] - NoSQL 圖形資料庫，具備即時更新、動態索引與易用的 GUI，適用於 CMS。 [![Release](https://github.com/ontola/atomic-server/actions/workflows/release_please.yml/badge.svg)](https://github.com/ontola/atomic-server/actions)
* [ayarotsky/redis-shield](https://github.com/ayarotsky/redis-shield) - Redis 模組，將 Token Bucket 演算法實作為原生命令，以實現高效能速率限制。
* [CozoDB](https://github.com/cozodb/cozo) - 具交易功能的關聯式資料庫，採用 Datalog，專注於圖形資料與演算法。支援時間回溯，速度也很快！ [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cozodb/cozo/build.yml?branch=main)](https://github.com/cozodb/cozo/actions/workflows/build.yml)
* [Curvine](https://github.com/CurvineIO/curvine) - 以 Rust 撰寫的高效能並行分散式快取系統 Curvine，專為 AI、大數據等低延遲、高吞吐量工作負載設計。
* [darkbird](https://github.com/Rustixir/darkbird) [[darkbird](https://crates.io/crates/darkbird)] - 受 Erlang Mnesia 啟發的高並行、即時記憶體儲存系統。
* [Databend](https://github.com/databendlabs/databend) - 採用雲原生架構的現代即時資料處理與分析 DBMS。 [![Release](https://github.com/databendlabs/databend/actions/workflows/release.yml/badge.svg)](https://github.com/databendlabs/databend/actions)
* [DB3 Network](https://github.com/dbpunk-labs/db3) - 由社群驅動的區塊鏈 Layer 2 去中心化資料庫網路。 [![GitHub Workflow Status (with event)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml/badge.svg)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml)
* [dsplce-co/supabase-plus](https://github.com/dsplce-co/supabase-plus) [[supabase-plus](https://crates.io/crates/supabase-plus)] - 功能齊全的命令列工具，可擴充官方 Supabase CLI。 [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dsplce-co/supabase-plus/publish.yml)
](https://github.com/dsplce-co/supabase-plus/actions/workflows/publish.yml)
* [erikgrinaker/toydb](https://github.com/erikgrinaker/toydb) - 以學習為目的撰寫的分散式 SQL 資料庫。
* [Garage](https://github.com/deuxfleurs-org/garage) [[garage](https://crates.io/crates/garage)] - 相容 S3 的分散式物件儲存服務，專為中小規模自行託管而設計。 [![status-badge](https://woodpecker.deuxfleurs.fr/api/badges/1/status.svg)](https://woodpecker.deuxfleurs.fr/repos/1)
* [GlueSQL](https://github.com/gluesql/gluesql) - Rust SQL 資料庫函式庫，將剖析器（sqlparser-rs）、執行層及多種持久化與非持久化儲存選項整合於同一套件。 [![crates.io](https://img.shields.io/crates/v/gluesql.svg)](https://crates.io/crates/gluesql)
* [Goldziher/scythe](https://github.com/Goldziher/scythe) - 多語言 SQL 編譯器與 Linter，可從 SQL 產生型別安全程式碼，並依據結構描述進行檢查。
* [GreptimeDB](https://github.com/grepTimeTeam/greptimedb/) - 開源、雲原生的分散式時間序列資料庫，支援 PromQL／SQL／Python。 ![CI](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml/badge.svg)](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml)
* [HelixDB](https://github.com/HelixDB/helix-db) - 功能強大的圖形向量資料庫，專為 RAG 與 AI 的智慧資料儲存打造。
* [Hiqlite](https://github.com/sebadob/hiqlite) - 高可用、可嵌入、以 Raft 為基礎的 SQLite 與快取。
* [hydra-db/hydradb](https://github.com/hydra-db/hydradb) - 原生支援物件儲存的分散式圖形資料庫，提供 OpenCypher 查詢、GraphBLAS 遍歷，以及相容 Neo4j 的 Bolt 連線。
* [indradb](https://crates.io/crates/indradb) - 圖形資料庫。
* [KiteSQL](https://github.com/KipData/KiteSQL) - 以函式形式使用的 Rust SQL。
* [lancedb](https://github.com/lancedb/lancedb) [[vectordb](https://crates.io/crates/vectordb)] - 供 AI 應用程式使用的無伺服器、低延遲向量資料庫。
* [Lucid](https://github.com/lucid-kv/lucid) - 透過 HTTP API 存取的高效能分散式鍵值儲存庫。 [![Build Status](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [Materialize](https://github.com/MaterializeInc/materialize) - 由 Timely Dataflow 驅動的串流 SQL 資料庫。
* [microsoft/pg_durable](https://github.com/microsoft/pg_durable) - 在 PostgreSQL 內執行持久化工作。提供可長時間執行、具容錯能力的 SQL 函式，並支援自動檢查點、當機復原與平行執行。無須額外基礎設施，以 pgrx 和 Rust 建置的 PostgreSQL 擴充功能形式執行。 [![License](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
* [native_db](https://github.com/vincent-herlemont/native_db) [[native_db](https://crates.io/crates/native_db)] - 適用於多平台應用程式（伺服器、桌面、行動裝置）的即插即用內嵌式資料庫，可輕鬆同步 Rust 型別。
* [Neon](https://github.com/neondatabase/neon) - 無伺服器 Postgres。將儲存與運算分離，提供自動擴縮、分支及無上限儲存空間。
* [NoKV-Lab/NoKV](https://github.com/NoKV-Lab/NoKV) - 以 AI 為核心的分散式檔案系統。 [![Rust](https://github.com/NoKV-Lab/NoKV/workflows/Rust/badge.svg)](https://github.com/NoKV-Lab/NoKV/actions/workflows/rust.yml)
* [noria](https://github.com/mit-pdos/noria) [[noria](https://crates.io/crates/noria)] - 供 Web 應用程式後端使用、可動態變化且具部分狀態的資料流。
* [oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) [[oxigraph](https://crates.io/crates/oxigraph)] - 實作 [SPARQL](https://www.w3.org/TR/sparql11-overview/) 標準的圖形資料庫。 ![Crates.io Version](https://img.shields.io/crates/v/oxigraph?logo=Rust)
* [ParadeDB](https://github.com/paradedb/paradedb/) - ParadeDB 是以 Postgres 為基礎打造、專為即時搜尋與分析設計的 Elasticsearch 替代方案。
* [ParityDB](https://github.com/paritytech/parity-db) - 快速可靠、針對讀取作業最佳化的資料庫。
* [pgdogdev/pgdog](https://github.com/pgdogdev/pgdog) - 具備連線集區、負載平衡與分片功能的 PostgreSQL 擴充 Proxy。
* [Picodata](https://github.com/picodata/picodata) [[picodata-plugin](https://crates.io/crates/picodata-plugin)] - 相容分散式 PostgreSQL 的資料庫，以 Rust 撰寫並採用外掛模型；透過商業外掛支援 Redis 與 Cassandra 線路協定。
* [PRQL](https://github.com/PRQL/prql) [[prqlc](https://crates.io/crates/prqlc)] - 用於轉換資料的現代語言，可編譯為易讀的 SQL。 [![Tests](https://github.com/PRQL/prql/actions/workflows/tests.yml/badge.svg)](https://github.com/PRQL/prql/actions)
* [PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) - 事件溯源資料庫引擎。
* [Qdrant](https://github.com/qdrant/qdrant) - 開源向量相似度搜尋引擎，支援進階篩選功能。 [![Tests](https://github.com/qdrant/qdrant/actions/workflows/rust.yml/badge.svg)](https://github.com/qdrant/qdrant/actions)
* [Qrlew/qrlew](https://github.com/Qrlew/qrlew) [[qrlew](https://crates.io/crates/qrlew)] - SQL-to-SQL 差分隱私層。 [![Qrlew](https://github.com/Qrlew/qrlew/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrlew/qrlew/actions) ![Crates.io Version](https://img.shields.io/crates/v/qrlew?logo=Rust)
* [RisingWaveLabs/RisingWave](https://github.com/RisingWaveLabs/risingwave) - 雲端新世代串流資料庫。 [![CI](https://github.com/risingwavelabs/risingwave/actions/workflows/labeler.yml/badge.svg)](https://github.com/risingwavelabs/risingwave/actions)
* [RustFS](https://github.com/rustfs/rustfs) [[RustFS](https://crates.io/crates/rustfs)] - 🚀 RustFS 是開源、相容 S3 的高效能物件儲存系統，支援遷移及與 MinIO、Ceph 等其他 S3 相容平台共存。 [![status-badge](https://github.com/rustfs/rustfs/actions/workflows/ci.yml/badge.svg)](https://github.com/rustfs/rustfs)
* [ruvnet/ruvector](https://github.com/ruvnet/ruvector) [[ruvector-core](https://crates.io/crates/ruvector-core)] - 可自行學習的向量資料庫與認知容器，可在本機執行 LLM 並水平擴充。
* [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) [[turbovec](https://crates.io/crates/turbovec)] - 以 TurboQuant 為基礎建置的向量索引，以 Rust 撰寫，提供 SIMD 加速搜尋與 Python 繫結。
* [sabiql](https://github.com/riii111/sabiql) [[sabiql](https://crates.io/crates/sabiql)] - 快速、免驅動、以 Vim 為先的資料庫 TUI，具備安全編輯與 ER 圖表功能。 [![CI](https://github.com/riii111/sabiql/actions/workflows/ci.yml/badge.svg)](https://github.com/riii111/sabiql/actions/workflows/ci.yml)
* [samyama-ai/samyama-graph](https://github.com/samyama-ai/samyama-graph) - 原生以 Rust 撰寫的圖形向量資料庫，適用於 GraphRAG、知識圖譜、向量搜尋與圖形分析。
* [seppo0010/rsedis](https://github.com/seppo0010/rsedis) - Redis 的重新實作。
* [Skytable](https://github.com/skytable/skytable) - 多模型 NoSQL 資料庫。 ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/skytable/skytable/Tests?style=flat-square)
* [sled](https://crates.io/crates/sled) - 現代化的內嵌式資料庫（Beta 版）。 [![Build Status](https://github.com/spacejam/sled/actions/workflows/test.yml/badge.svg)](https://github.com/spacejam/sled/actions?workflow=Rust)
* [SQLSync](https://github.com/orbitinghail/sqlsync) - 支援多人協作、離線優先的 SQLite。 [![GitHub Workflow Status](https://github.com/orbitinghail/sqlsync/actions/workflows/actions.yaml/badge.svg?branch=main)](https://github.com/orbitinghail/sqlsync/actions?query=branch%3Amain)
* [SurrealDB](https://github.com/surrealdb/surrealdb) - 可擴充的分散式文件圖形資料庫。 [![Build Status](https://img.shields.io/github/workflow/status/surrealdb/surrealdb/Continuous%20integration/main)](https://github.com/surrealdb/surrealdb/actions)
* [tabularis](https://github.com/TabularisDB/tabularis) - 以 Tauri 和 React 打造、以開發者為中心的輕量資料庫管理工具。
* [teaql/teaql-rs](https://github.com/teaql/teaql-rs) [[teaql-core](https://crates.io/crates/teaql-core)] - 以模型為驅動的執行環境，提供具型別的查詢、受控的資料異動與 SQL 提供者。 [![CI](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml)
* [TerminusDB](https://github.com/terminusdb/terminusdb-store) - 開源圖形資料庫與文件儲存庫。 [![Build Status](https://github.com/terminusdb/terminusdb-store/actions/workflows/test.yml/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [tikv](https://github.com/tikv/tikv) - 以 Rust 撰寫的分散式鍵值資料庫。
* [tokio-rs/toasty](https://github.com/tokio-rs/toasty) [[toasty](https://crates.io/crates/toasty)] - 易於使用的 Rust ORM，支援 SQL（SQLite、PostgreSQL、MySQL）與 DynamoDB，具備 derive 巨集、型別安全查詢及依資料庫提供的功能。 [![Crates.io](https://img.shields.io/crates/v/toasty.svg)](https://crates.io/crates/toasty)
* [Tonbo](https://github.com/tonbo-io/tonbo) - 以 Apache Arrow 與 Parquet 為基礎的 Tonbo 內嵌式持久資料庫。 [![crates.io](https://img.shields.io/crates/v/tonbo.svg)](https://crates.io/crates/tonbo)
* [TrailBase](https://github.com/trailbaseio/trailbase) - 快速、輕量、單檔式 Firebase 替代方案，具備型別安全 API、內建 V8 JS／ES6／TS 引擎、驗證功能與管理儀表板。 [![GitHub Workflow Status](https://github.com/trailbaseio/trailbase/workflows/test/badge.svg)](https://github.com/trailbaseio/trailbase/actions?workflow=test)
* [tsink](https://github.com/h2337/tsink) - Rust 內嵌式時間序列資料庫。 [![crates.io](https://img.shields.io/crates/v/tsink.svg)](https://crates.io/crates/tsink)
* [Turso](https://github.com/tursodatabase/turso) - Turso Database 是與 SQLite 相容的程序內 SQL 資料庫。
* [USearch](https://github.com/unum-cloud/usearch) - 向量與字串相似度搜尋引擎。 [![crates.io](https://img.shields.io/crates/v/usearch.svg)](https://crates.io/crates/usearch)
* [valentinus](https://github.com/kn0sys/valentinus) - 使用 LMDB 繫結建置的新世代向量資料庫。 [![Crates.io Version](https://img.shields.io/crates/v/valentinus)](https://crates.io/crates/valentinus)
* [VelesDB](https://github.com/cyberlife-coder/VelesDB) [[velesdb-core](https://crates.io/crates/velesdb-core)] - 可嵌入、以本機資料為優先的資料庫，以單一查詢語言 VelesQL 和單一執行檔整合向量搜尋、屬性圖與欄式儲存三種引擎。內附核心內的代理式記憶體 SDK，涵蓋語意、情節與程序記憶，並提供跨工作階段的 `why()` 回想功能，能沿圖形找出向量搜尋單獨無法發現的關聯事實。
* [vorot93/libmdbx-rs](https://github.com/vorot93/libmdbx-rs) [[mdbx-sys](https://crates.io/crates/mdbx-sys)] - MDBX 繫結。MDBX 是一款快速、精簡、強大、可嵌入且具交易功能，並採寬鬆授權的鍵值資料庫。此專案由 mozilla/lmdb-rs 分支而來，加入修補程式以支援 libmdbx。
* [whispem/minikv](https://github.com/whispem/minikv) - 分散式多租戶鍵值與物件儲存庫，具備 Raft 共識、WAL 持久性、時間序列 API、向量搜尋及相容 S3 的端點。以正式環境為目標，提供 Helm chart、Grafana 儀表板與 Python SDK。 [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)
* [WooriDB](https://github.com/naomijub/wooridb) - 受 Crux 和 Datomic 啟發的通用時間序列資料庫。

### 嵌入式

* [embassy-rs/embassy](https://github.com/embassy-rs/embassy) [[embassy](https://crates.io/crates/embassy)] - 新世代嵌入式 Rust async／await 框架，提供 STM32、nRF、RP、ESP32 等平台的 HAL。具備 embassy-time、embassy-net、embassy-usb 與低功耗支援。 [![Build Status](https://github.com/embassy-rs/embassy/actions/workflows/ci.yml/badge.svg)](https://github.com/embassy-rs/embassy/actions)
* [infinition/waveshare-watch-rs](https://github.com/infinition/waveshare-watch-rs) - 為 Waveshare ESP32-S3-Touch-AMOLED-2.06 打造的 100% Rust `no_std` 智慧手錶韌體。功能包括 80 MHz QSPI DMA 顯示器、Embassy 非同步執行環境，以及支援常時顯示的事件驅動電源管理。
* [rmk](https://github.com/haobogu/rmk) - 功能豐富的鍵盤韌體。
* [rtic-rs/rtic](https://github.com/rtic-rs/rtic) [[rtic](https://crates.io/crates/rtic)] - 用於建置嵌入式即時系統的即時中斷驅動並行框架。
* [uefi-rs](https://github.com/rust-osdev/uefi-rs) - Unified Extensible Firmware Interface（UEFI）的 Rust 封裝。此 crate 讓你輕鬆運用安全、便利且高效能的 UEFI 功能抽象層開發 Rust 軟體。

### 模擬器

另請參閱 [符合「emulator」關鍵字的 crates](https://crates.io/keywords/emulator)。

* CHIP-8
  * [ColinEberhardt/wasm-rust-chip8](https://github.com/ColinEberhardt/wasm-rust-chip8) - WebAssembly CHIP-8 模擬器。
  * [starrhorne/chip8-rust](https://github.com/starrhorne/chip8-rust) - CHIP-8 模擬器。
* Commodore 64
  * [kondrak/rust64](https://github.com/kondrak/rust64) - Commodore 64 模擬器。
* Flash Player
  * [Ruffle](https://github.com/ruffle-rs/ruffle) - Ruffle 是 Adobe Flash Player 模擬器，透過 WebAssembly 同時支援桌面與網頁。 [![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml)[![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml)
* Gameboy
  * [Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Game Boy 研究專案與模擬器。
  * [joamag/boytacean](https://github.com/joamag/boytacean) - 可透過 WebAssembly 在網頁上執行的 Game Boy Color 模擬器。
  * [mohanson/gameboy](https://github.com/mohanson/gameboy) - 功能完整的跨平台 Game Boy 模擬器。永遠的男孩！
  * [mvdnes/rboy](https://github.com/mvdnes/rboy) - Game Boy 模擬器。
* Gameboy Advance
  * [michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - RustboyAdvance-ng 是支援桌面、Android 與 [WebAssembly](https://michelhe.github.io/rustboyadvance-ng/) 的 Game Boy Advance 模擬器。 [![build badge](https://github.com/michelhe/rustboyadvance-ng/actions/workflows/deploy.yml/badge.svg)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* GameMaker
  * [OpenGMK](https://github.com/OpenGMK/OpenGMK) - OpenGMK 是對專有 GameMaker Classic 引擎的現代化重寫，提供完整的 runner 原始碼移植版、反編譯器、TAS 框架，以及可自行操作遊戲資料的函式庫。
* IBM PC
  * [MartyPC](https://github.com/dbalsom/martypc) - 以 Rust 撰寫的 IBM PC／XT 模擬器。
* Intel 8080 CPU
  * [mohanson/i8080](https://github.com/mohanson/i8080) - Intel 8080 CPU 模擬器。
* iOS
  * [touchHLE](https://github.com/touchHLE/touchHLE) - 適用於 iPhone OS 應用程式的高階模擬器。
* iPod
  * [clicky](https://github.com/daniel5151/clicky) - 具備點選式轉盤的 iPod 模擬器（開發中）。
* NES
  * [koute/pinky](https://github.com/koute/pinky) - NES 模擬器。
  * [pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) - NES 模擬器。
* Nintendo 64
  * [gopher64](https://github.com/gopher64/gopher64) - 以 Rust 撰寫的 N64 模擬器。
* Nintendo DS
  * [dust](https://github.com/kelpsyberry/dust) - Nintendo DS 模擬器。
* PlayStation 4
  * [Obliteration](https://github.com/obhq/obliteration) - 適用於 Windows、macOS 和 Linux 的實驗性 PS4 模擬器。 [![CI](https://github.com/obhq/obliteration/actions/workflows/main.yml/badge.svg)](https://github.com/obhq/obliteration/actions/workflows/main.yml)
* Shockwave Player
  * [DirPlayer](https://github.com/igorlira/dirplayer-rs) - 與網頁相容、以 Rust 撰寫的 Shockwave Player 模擬器。
* ZX Spectrum
  * [rustzx/rustzx](https://github.com/rustzx/rustzx) - [![RustZX CI](https://github.com/rustzx/rustzx/actions/workflows/ci.yml/badge.svg)](https://github.com/rustzx/rustzx/actions/workflows/ci.yml)

### 檔案管理器

* [broot](https://github.com/Canop/broot) - 以全新方式檢視及瀏覽目錄樹：掌握目錄概況（即使目錄很大）、找到目錄後直接 `cd` 前往、搜尋時不再迷失檔案階層，並管理檔案等。詳情請參閱 [dystroy.org/broot](https://dystroy.org/broot/)。 [![Latest Version](https://img.shields.io/crates/v/broot.svg)](https://crates.io/crates/broot)
* [elio-fm/elio](https://github.com/elio-fm/elio) [[elio](https://crates.io/crates/elio)] - 內建完整功能的終端機檔案管理器，支援豐富預覽、批次操作及垃圾桶。
* [FileSSH](https://github.com/JayanAXHF/FileSSH) - 快速易用的 TUI，可管理遠端伺服器上的檔案，包括快速建立 SSH 工作階段、直接編輯檔案等！ ![crates.io](https://img.shields.io/crates/v/filessh)
* [joshuto](https://github.com/kamiyaa/joshuto) - 類似 ranger 的終端機檔案管理器。
* [moyangzhan/mango-finder](https://github.com/moyangzhan/mango-finder) - 使用自然語言搜尋檔案。
* [pikeru](https://github.com/dvhar/pikeru) - 適用於 Linux、具備優質縮圖與搜尋功能的檔案選擇器。
* [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive) - 以虛擬分散式檔案系統為基礎的檔案管理器。
* [xplr](https://github.com/sayanarijit/xplr) - 可自訂、精簡快速的 TUI 檔案瀏覽器。
* [yazi](https://github.com/sxyazi/yazi) - 以非同步 I/O 為基礎、速度飛快的終端機檔案管理器。

### 金融

另請參閱[支付](#payments)應用程式。

* [Ashutosh0x/rust-finance](https://github.com/Ashutosh0x/rust-finance) - 支援多個交易所資料匯入、下單、風險模型與 TUI 儀表板的 AI 交易終端機。
* [klirr](https://github.com/Sajjon/klirr) [[klirr](https://crates.io/crates/klirr)] - 免維護的智慧 FOSS，可為服務與費用產生精美發票。
* [longbridge/longbridge-terminal](https://github.com/longbridge/longbridge-terminal) - Longbridge Securities 的 AI 原生 CLI：提供港股、美股、A 股與新加坡市場的即時報價、投資組合及交易功能。
* [makeev/alphai-tui](https://github.com/makeev/alphai-tui) [[alphai-tui](https://crates.io/crates/alphai-tui)] - 終端機股票儀表板，提供無須金鑰的報價與圖表、新聞情緒、SEC Form 4 內部人交易資訊及財報速讀。 ![CI](https://github.com/makeev/alphai-tui/actions/workflows/ci.yml/badge.svg?branch=main)
* [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) - 以 Rust 與 Python 撰寫的高效能、可用於正式環境的演算法交易平台。
* [tackler](https://github.com/tackler-ng/tackler) [[tackler](https://crates.io/crates/tackler)] - 快速可靠的簿記引擎，原生支援純文字會計的 GIT SCM。 [![CI Badge](https://github.com/tackler-ng/tackler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tackler-ng/tackler/blob/main/.github/workflows/ci.yml)
* [tarkah/tickrs](https://github.com/tarkah/tickrs) - 在終端機中查看即時行情資料。
* [wealthfolio/wealthfolio](https://github.com/wealthfolio/wealthfolio) - 美觀、重視隱私且以本機資料為優先的個人財務追蹤工具：投資、淨資產、支出與模擬分析一應俱全。

### 遊戲

另請參閱 [Games Made With Piston](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston)。

* [buxx/OpenCombat](https://github.com/buxx/OpenCombat) - 即時第二次世界大戰戰術遊戲。
* [chess-tui](https://github.com/thomas-mauran/chess-tui) - 以 TUI 實作的西洋棋 ♟️。
* [citybound](https://github.com/citybound/citybound) - 你值得擁有的城市模擬遊戲。
* [cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) - Doom 渲染器，未來可能發展成可遊玩的遊戲。
* [doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) - 附加改良功能的 Cave Story 引擎重新實作。
* [garkimasera/gaia-maker](https://github.com/garkimasera/gaia-maker) - 行星與地球改造模擬遊戲。
* [garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) - 可擴充、採像素美術風格的開放世界 Rogue-like 遊戲。
* [GitType](https://github.com/unhappychoice/gittype) - CLI 打字遊戲，將你的原始碼轉化為打字挑戰。
* [gorilla-devs/ferium](https://github.com/gorilla-devs/ferium) - Ferium 是快速且功能豐富的 CLI 程式，可從 Modrinth、CurseForge 與 GitHub Releases 下載及更新 Minecraft 模組，並從 Modrinth 與 CurseForge 下載整合包。 ![ferium build](https://github.com/gorilla-devs/ferium/actions/workflows/build.yml/badge.svg?branch=main)
* [HactarCE/Hyperspeedcube](https://github.com/HactarCE/Hyperspeedcube) - 現代化、適合初學者的 3D 與 4D Rubik 魔術方塊模擬器，提供可自訂的滑鼠和鍵盤控制，以及進階速解功能。
* [lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) - 支援 BMS 格式的極簡音樂電玩遊戲。
* [louis-e/arnis](https://github.com/louis-e/arnis) - 使用 OpenStreetMap 與高程資料，依真實世界地理資訊產生 Minecraft Java／Bedrock 世界。 [![CI](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions)
* [maras-archive/rsnake](https://github.com/maras-archive/rsnake) - 貪食蛇。
* [mcthesw/game-save-manager](https://github.com/mcthesw/game-save-manager) - 易於使用的遊戲存檔管理工具。 [![build badge](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml/badge.svg)](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml)
* [mtkennerly/ludusavi](https://github.com/mtkennerly/ludusavi) - PC 遊戲存檔備份工具。 [![build badge](https://img.shields.io/github/actions/workflow/status/mtkennerly/ludusavi/main.yaml?logo=github)](https://github.com/mtkennerly/ludusavi/actions/workflows/main.yaml) [![crate](https://img.shields.io/crates/v/ludusavi?logo=rust)](https://crates.io/crates/ludusavi)
* [ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) - 小型 2D 回合制六角格策略遊戲。
* [rhex](https://github.com/dpc/rhex) - 六角格 ASCII Roguelike。
* [rsaarelm/magog](https://github.com/rsaarelm/magog) - Roguelike 遊戲。
* [SoftbearStudios/mk48](https://github.com/SoftbearStudios/mk48) - Mk48.io 是線上多人海戰遊戲。
* [Strophox/tetro-tui](https://github.com/Strophox/tetro-tui) [[tetro-tui](https://crates.io/crates/tetro-tui)] - 跨平台終端機遊戲，讓四格方塊落下並堆疊。
* [swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) - Sokoban 推箱子遊戲實作。
* [thetawavegame/thetawave-legacy](https://github.com/thetawavegame/thetawave-legacy) - 太空射擊遊戲，致力成為新手遊戲開發者首次貢獻的起點。 ![build badge](https://github.com/thetawavegame/thetawave-legacy/actions/workflows/ci.yml/badge.svg?branch=master)
* [Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) - Quake 地圖渲染器。
* [topheman/snake-pipe-rust](https://github.com/topheman/snake-pipe-rust) - 以 stdin／stdout（另支援 TCP 與 Unix domain socket）運作的終端機貪食蛇遊戲。 [![crates.io](https://img.shields.io/crates/v/snakepipe.svg)](https://crates.io/crates/snakepipe)
* [ttyperacer/terminal-typeracer](https://gitlab.com/ttyperacer/terminal-typeracer) - 為終端機打造的單人打字測試遊戲。
* [Veloren](https://gitlab.com/veloren/veloren) - 仍在 Alpha 開發階段的開放世界、開源多人方塊 RPG。 [![build badge](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/-/pipelines)
* [zipxing/rust_pixel](https://github.com/zipxing/rust_pixel) [[rust_pixel](https://crates.io/crates/rust_pixel)] - 2D 像素美術遊戲引擎與快速原型工具，支援文字及圖形渲染模式。
* [Zone of Control](https://github.com/ozkriff/zoc) - 回合制六角格策略遊戲。

### 圖形

* [dps/rust-raytracer](https://github.com/dps/rust-raytracer) - 依據 Peter Shirley 的《Ray Tracing in One Weekend》打造的極簡光線追蹤器實作。
* [flxzt/rnote](https://github.com/flxzt/rnote) - 素描並記錄手寫筆記。
* [ivanceras/svgbob](https://github.com/ivanceras/svgbob) - 將 ASCII 圖表轉換成 SVG 圖形。
* [KaminariOS/rustracer](https://github.com/KaminariOS/rustracer) - 以 Vulkan 光線追蹤為基礎的 PBR glTF 2.0 渲染器。
* [Limeth/euclider](https://github.com/Limeth/euclider) - 即時 4D CPU 光線追蹤器。
* [linebender/resvg](https://github.com/linebender/resvg) - SVG 渲染函式庫。
* [monfa-red/lini](https://github.com/monfa-red/lini) [[lini](https://crates.io/crates/lini)] - 繪製各類圖形的小型語言，涵蓋圖表、圖形、時序圖、示意圖與技術圖，從純文字編譯成可套用主題的 SVG。 [![CI](https://github.com/monfa-red/lini/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/monfa-red/lini/actions/workflows/ci.yml)
* [museslabs/phonto](https://github.com/museslabs/phonto) - 以 Rust 撰寫、適用於 Wayland 和 macOS 的 GPU 加速影片桌布程式。
* [rodrigorc/papercraft](https://github.com/rodrigorc/papercraft) - 將 3D 模型攤平成紙模型，方便列印後用剪刀和膠水組裝的工具。
* [rustq/vue-skia](https://github.com/rustq/vue-skia) - 以 Skia 為基礎的 2D 圖形 Vue 渲染函式庫，使用 Rust 實作軟體光柵化以完成渲染。
* [storytold/artcraft](https://github.com/storytold/artcraft) - 由 AI 驅動的 IDE 與實體運算工作空間，讓你像揉捏黏土般塑造場景、影片與圖片。
* [turnage/valora](https://crates.io/crates/valora) - 生成式細緻藝術函式庫。
* [Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) - 光線追蹤器。
* [wahn/rs_pbrt](https://github.com/wahn/rs_pbrt) - 實作 PBRT 書籍（第 3 版）C++ 程式碼的對應版本。

### 影像處理

* [Darkly](https://github.com/darkly-art/darkly) - 供數位藝術家與畫家使用的 Entropic 編輯器。
* [Graphite](https://github.com/GraphiteEditor/Graphite) - 向量繪圖編輯器。
* [Imager](https://github.com/imager-io/imager) - 自動化圖片最佳化工具。
* [oxipng](https://github.com/oxipng/oxipng) [[oxipng](https://crates.io/crates/oxipng)] - 以 Rust 撰寫的多執行緒 PNG 最佳化工具。 [![Build Status](https://github.com/oxipng/oxipng/workflows/oxipng/badge.svg)](https://github.com/oxipng/oxipng/actions?query=branch%3Amaster) [![Version](https://img.shields.io/crates/v/oxipng.svg)](https://crates.io/crates/oxipng)
* [sorairolake/favico](https://github.com/sorairolake/favico) [[favico](https://crates.io/crates/favico)] - 用於建立 favicon 的工具。 [![CI](https://github.com/sorairolake/favico/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/favico/actions/workflows/CI.yaml)
* [Sprite Fusion Pixel Snapper](https://github.com/Hugo-Dz/spritefusion-pixel-snapper) - CLI 與 WebAssembly 工具，可清理 AI 生成的像素畫，產生像素完美的點陣圖精靈圖（MIT 授權）。
* [visioncortex/vtracer](https://github.com/visioncortex/vtracer) [[vtracer](https://crates.io/crates/vtracer)] - 將點陣圖轉換為向量圖形的工具（JPG／PNG 轉 SVG）。

### 工業自動化

* [dora-rs/dora](https://github.com/dora-rs/dora) [[dora-cli](https://crates.io/crates/dora-cli)] - 快速、簡潔且以資料流為核心的框架，用於建置機器人與多 AI 應用程式，提供 Python、Rust 及 C／C++ API。 [![CI](https://github.com/dora-rs/dora/workflows/CI/badge.svg)](https://github.com/dora-rs/dora/actions)
* [locka99/opcua](https://github.com/locka99/opcua) - [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) 函式庫。
* [slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) - 以 [tokio](https://tokio.rs) 為基礎的 [modbus](https://www.modbus.org) 函式庫。

### 訊息佇列

* [lonewolf-io/Narwhal](https://github.com/lonewolf-io/narwhal) - 適用於邊緣應用程式、可擴充的發布／訂閱訊息伺服器。
* [Rmqtt](https://github.com/rmqtt/rmqtt) - MQTT 伺服器／Broker：面向 5G 時代 IoT 的可擴充分散式 MQTT 訊息 Broker。
* [RobustMQ](https://github.com/robustmq/robustmq) - 新世代雲原生融合訊息佇列。
* [Rocketmq-Rust](https://github.com/mxsm/rocketmq-rust) - 🚀以 Rust🦀 打造的 Apache RocketMQ。速度更快、更安全，且記憶體用量更低。

### MLOps

* [api7/aisix](https://github.com/api7/aisix) - LLM 與 AI 代理的開源 AI 閘道：以單一相容 OpenAI 的 API，以及原生 Anthropic Messages API，連接 OpenAI、Anthropic、Gemini、Bedrock、Azure OpenAI 和其他相容 OpenAI 的端點；另提供 MCP 與 A2A 閘道、語意路由、護欄及語意快取。 [![CI](https://github.com/api7/aisix/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/api7/aisix/actions/workflows/ci.yml)
* [cocoindex](https://github.com/cocoindex-io/cocoindex) - 為 AI 代理建立新鮮情境的 ETL 框架，支援增量處理。
* [TensorZero](https://github.com/tensorzero/tensorzero) - 為 LLM 打造的資料與學習飛輪，整合推論、可觀測性、最佳化與實驗功能。 ![TensorZero Build Status](https://img.shields.io/github/check-runs/tensorzero/tensorzero/main)
* [Uteke](https://github.com/codecoradev/uteke) - 以離線優先為設計的 AI 代理語意記憶引擎。單一執行檔、零相依性、原生支援 MCP。 [![CI](https://img.shields.io/github/actions/workflow/status/codecoradev/uteke/ci.yml?branch=develop)](https://github.com/codecoradev/uteke/actions/workflows/ci.yml)

### 可觀測性

* [avito-tech/bioyino](https://github.com/avito-tech/bioyino) - 高效能、可擴充且相容 StatsD 的伺服器。
* [esrlabs/chipmunk](https://github.com/esrlabs/chipmunk) - 以 egui 原生打造的桌面應用程式，可分析大型日誌檔與串流。具備 WebAssembly 外掛系統，並支援汽車產業格式。 [![Chipmunk CI](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml/badge.svg)](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml)
* [madesroches/micromegas](https://github.com/madesroches/micromegas) [[micromegas](https://crates.io/crates/micromegas)] - 用於日誌、指標與追蹤的可觀測性後端，搭配低負擔的 Rust 埋點。將遙測資料以 Parquet 儲存在物件儲存空間，並使用 SQL 查詢。 [![Rust](https://github.com/madesroches/micromegas/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/madesroches/micromegas/actions/workflows/rust.yml)
* [MegaAntiCheat/client-backend](https://github.com/MegaAntiCheat/client-backend) - [MAC](https://github.com/MegaAntiCheat) 的用戶端應用程式。
* [openobserve](https://github.com/openobserve/openobserve) - 簡化十倍、儲存成本降低 140 倍，兼具高效能與 PB 級擴充能力，是 Elasticsearch／Splunk／Datadog 的替代方案。
* [OpenTelemetry](https://crates.io/crates/opentelemetry) - OpenTelemetry 提供一組統一的 API、函式庫、代理與收集器服務，以擷取應用程式的分散式追蹤與指標。你可以使用 Prometheus、Jaeger 等可觀測性工具分析這些資料。 [![GitHub Actions CI](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml)
* [parseablehq/parseable](https://github.com/parseablehq/parseable) - 以 AI 為核心的統一可觀測性平台，用於收集與分析日誌、指標、追蹤和事件。
* [Quickwit-oss/quickwit](https://github.com/quickwit-oss/quickwit) - 用於日誌管理、雲原生且極具成本效益的搜尋引擎。 [![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI)
* [rustrak/rustrak](https://github.com/rustrak/rustrak) - 相容 Sentry SDK 的超輕量錯誤追蹤伺服器。
* [Scaphandre](https://github.com/hubblo-org/scaphandre) - 電力消耗監控代理，可追蹤主機與各服務的耗電量，協助設計更永續的系統與應用程式。旨在融入各種監控工具鏈（目前已支援 Prometheus、Warp 10、Riemann 等）。
* [vectordotdev/vector](https://github.com/vectordotdev/vector) - 高效能日誌、指標與事件路由器。

### 作業系統

另請參閱 [以 Rust 撰寫的作業系統比較](https://github.com/flosse/rust-os-comparison)。

* [0x59616e/SteinsOS](https://github.com/0x59616e/SteinsOS) - 適用於 ARMv8-A 架構的作業系統。
* [Andy-Python-Programmer/aero](https://github.com/Andy-Python-Programmer/aero) - 採用單體核心設計的現代類 Unix 作業系統。
* [asterinas/asterinas](https://github.com/asterinas/asterinas) - 安全、快速且通用的作業系統核心，提供與 Linux 相容的 ABI。
* [DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS) - 從零開始自行開發核心並相容 Linux 的作業系統。
* [hexagonal-sun/moss-kernel](https://github.com/hexagonal-sun/moss-kernel) - 以 Rust 與 AArch64 組合語言撰寫的類 Unix、相容 Linux 核心。
* [koibtw/highlightos](https://github.com/koibtw/highlightos) - 以 Rust 與組合語言撰寫的 x86_64 作業系統核心。
* [NON-OS/nonos-micro-kernel](https://github.com/NON-OS/nonos-micro-kernel) - 以能力為基礎、常駐 RAM 的微核心；每個程式都是必須先證明自身可信度才能由核心執行的簽章膠囊，驅動程式則在使用者空間執行。
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) - 類 Unix、相容 Linux 的通用微核心作業系統，著重安全、穩定、效能、正確性、簡潔與務實，目標是成為 Linux 和 BSD 的完整替代方案。
* [thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) - 以 Rust 撰寫的作業系統核心，不支援 POSIX。
* [theseus-os/Theseus](https://github.com/theseus-os/Theseus) - 從零撰寫、採安全語言、單一位址空間與單一特權層級的作業系統。 [![build badge](https://img.shields.io/github/workflow/status/theseus-os/Theseus/Documentation?label=docs%20build)](https://www.theseus-os.com/Theseus/book/index.html)
* [tock/tock](https://github.com/tock/tock) - 適用於 Cortex-M 微控制器的安全嵌入式作業系統。
* [vinc/moros](https://github.com/vinc/moros) - 以文字介面為主的自製作業系統，目標平台為搭載 BIOS 的 x86-64 電腦。

### 套件管理器

* [helsing-ai/buffrs](https://github.com/helsing-ai/buffrs) [[buffrs](https://crates.io/crates/buffrs)] - 適用於 Protocol Buffers 與 gRPC 架構的現代套件管理器。
* [pkgx](https://github.com/pkgxdev/pkgx) - 想執行什麼都可以。可組合的套件管理器，讓腳本能使用整個開源生態系。
* [rebos](https://crates.io/crates/rebos) - 適用於任何 Linux 發行版的宣告式套件管理自動化工具。 [![crate](https://img.shields.io/crates/v/rebos?logo=rust)](https://crates.io/crates/rebos)

### 支付

* [hyperswitch](https://github.com/juspay/hyperswitch) - 開源支付協調平台，只需整合一次 API，即可連接多家支付處理商並輕鬆路由支付流量。 ![GitHub last commit](https://img.shields.io/github/last-commit/juspay/hyperswitch?style=flat-square)

### 生產力工具

* [0xdea/jiggy](https://github.com/0xdea/jiggy) [[jiggy](https://crates.io/crates/jiggy)] - 以 Rust 撰寫的極簡跨平台滑鼠微動工具。 [![build](https://github.com/0xdea/jiggy/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/jiggy/actions/workflows/build.yml)
* [aannoo/hcom](https://github.com/aannoo/hcom) - 讓 AI 代理透過終端機彼此傳訊、監看並啟動其他代理（Claude Code、Gemini CLI、Codex、OpenCode）。提供具螢幕追蹤功能的 Rust PTY 封裝、TUI（ratatui）與常駐程式用戶端執行檔；另含 Python hooks 與 API。 [![CI](https://github.com/aannoo/hcom/actions/workflows/ci.yml/badge.svg)](https://github.com/aannoo/hcom/actions/workflows/ci.yml)
* [agent-of-empires](https://github.com/njbrake/agent-of-empires) - 使用 tmux、git worktree 與 Docker 沙箱管理多個 AI 程式設計代理工作階段的 TUI／CLI。 [![CI](https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg)](https://github.com/njbrake/agent-of-empires/actions)
* [aichat](https://github.com/sigoden/aichat) - 全方位 LLM CLI 工具，包含 Shell 助理、Chat-REPL、RAG、AI 工具與代理，並可連接 OpenAI、Claude、Gemini、Ollama、Groq 等服務。
* [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) - AI 程式設計代理的長期記憶：以 Git 為後端的 Markdown Wiki，支援自動擷取生命週期資訊、跨代理交接，以及自行託管 MCP 伺服器。 [![CI](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml)
* [akitaonrails/ai-usagebar](https://github.com/akitaonrails/ai-usagebar) [[ai-usagebar](https://crates.io/crates/ai-usagebar)] - Waybar 小工具、原生 Omarchy Quattro 面板與分頁 TUI，可監控 Claude、Codex／ChatGPT、GitHub Copilot、Z.AI（GLM）、OpenRouter 等平台的 AI 方案用量。 [![CI](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml)
* [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) [[llmfit](https://crates.io/crates/llmfit)] - 終端機工具，依據系統 RAM、CPU 與 GPU 為 LLM 模型挑選合適規模。互動式 TUI 具備硬體偵測、多維評分（品質／速度／適配度／情境長度）、社群排行榜，並支援 Ollama、llama.cpp、MLX、vLLM 等。 [![CI](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml)
* [AlexsJones/llmserve](https://github.com/AlexsJones/llmserve) [[llmserve](https://crates.io/crates/llmserve)] - 互動式 TUI，可使用自動偵測的後端提供本機 LLM 模型服務（llama-server、KoboldCpp、LocalAI、MLX、Ollama、vLLM、LM Studio）。具備來源樹瀏覽、各後端預設設定、即時日誌與視覺模型支援。 [![CI](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml)
* [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) - 以本機資料為優先的工作空間，可使用 Claude Code、Codex、OpenCode 或 Cursor 執行平行研究代理，並支援可重現的實驗追蹤。 [![CI](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml/badge.svg)](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml)
* [antiburn/antiburn](https://github.com/antiburn/antiburn) - 本機桌面應用程式（Tauri），可檢查 AI 程式設計代理工作階段中常見的 Token 浪費原因：工作階段過深、子代理權限過大、快取失效，以及未使用的 MCP 伺服器、技能和工具。支援 Claude Code、Codex、Cursor、Copilot、Pi 等。 [![CI](https://github.com/antiburn/antiburn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/antiburn/antiburn/actions/workflows/ci.yml)
* [ast-grep](https://github.com/ast-grep/ast-grep) - 用於程式碼結構搜尋、Lint 與改寫的 CLI 工具。
* [Bartib](https://github.com/nikolassv/bartib) [[Bartib](https://crates.io/crates/bartib)] - 簡單的命令列時間追蹤器。 [![Tests](https://github.com/nikolassv/bartib/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/nikolassv/bartib/actions/workflows/test.yml)
* [Beetroot](https://github.com/mnardit/beetroot-releases) - 適用於 Windows 的剪貼簿管理器，具備 AI 轉換、OCR 與模糊搜尋。
* [bitrouter/bitrouter](https://github.com/bitrouter/bitrouter) [[bitrouter](https://crates.io/crates/bitrouter)] - 以代理為核心的 LLM 路由器，每次執行都會最佳化代理，不必變更任何 harness，讓每次模型呼叫都可靠、可追蹤、安全且具成本效益。透過單一本機端點路由至 OpenAI、Anthropic、Google、OpenRouter、Bedrock、GitHub Copilot 等服務，並提供 MCP 閘道、ACP 整合、護欄、可觀測性及多帳戶故障切換。
* [CookCLI](https://github.com/cooklang/CookCLI) - 命令列食譜管理器，具備網頁伺服器、購物清單與膳食規劃功能。
* [espanso](https://github.com/espanso/espanso) - 跨平台文字擴充工具。 [![CI](https://github.com/espanso/espanso/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/espanso/espanso/actions/workflows/ci.yml)
* [eureka](https://crates.io/crates/eureka) - 無須離開終端機即可輸入並儲存想法的 CLI 工具。
* [farion1231/cc-switch](https://github.com/farion1231/cc-switch) - 整合式 GUI 助理與設定檔管理器，適用於 Claude Code、Codex 和 Gemini CLI。
* [fkiene/llmtrim](https://github.com/fkiene/llmtrim) [[llmtrim](https://crates.io/crates/llmtrim)] - 本機 Proxy，可壓縮 LLM API 請求，在不改變回答的情況下降低輸入與輸出 Token。透過 HTTPS_PROXY 位於 AI 工具與供應商之間，適用於 Claude Code、Codex 等。 [![CI](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml/badge.svg)](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml)
* [flusterIO/fluster](https://github.com/flusterIO/fluster) - 專為 STEM 學生與專業人士打造的全方位筆記應用程式。 [![publish](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml/badge.svg)](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml)
* [fulsomenko/kanban](https://github.com/fulsomenko/kanban) [[kanban-tui](https://crates.io/crates/kanban-tui)] - 受 lazygit 啟發、以終端機為基礎的專案管理工具。 [![CI](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml/badge.svg)](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml)
* [Furtherance](https://github.com/unobserved-io/Furtherance) - 以 GTK4 打造的時間追蹤應用程式。
* [futuregene/future-os](https://github.com/futuregene/future-os) - 讓 AI 代理無處不在：單一 Rust gRPC 後端驅動終端機 UI、桌面應用程式、行動應用程式、CLI 與即時通訊機器人，共用相同的工作階段、記憶和技能。工具採信任優先與核准閘控，支援 3,800 多種模型，並以迴圈控制平面支援 24 小時以上執行。 [![build](https://github.com/futuregene/future-os/actions/workflows/ci.yml/badge.svg)](https://github.com/futuregene/future-os/actions/workflows/ci.yml)
* [graves/awful_aj](https://github.com/graves/awful_aj) [[awful_aj](https://crates.io/crates/awful_aj)] - 用於操作相容 OpenAI API 的 CLI，提供提示工程 YAML 範本與內建向量資料庫，用於保存持久記憶。
* [graykode/abtop](https://github.com/graykode/abtop) [[abtop](https://crates.io/crates/abtop)] - 終端機 TUI，可監控 AI 程式設計代理工作階段（Claude Code、Codex CLI、OpenCode）。追蹤 Token 用量、情境視窗百分比、速率限制、子程序及孤立連接埠。支援 tmux 整合、12 種主題（含色盲友善選項）及跨平台使用。 [![CI](https://github.com/graykode/abtop/actions/workflows/ci.yml/badge.svg)](https://github.com/graykode/abtop/actions/workflows/ci.yml)
* [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) [[deepseek-tui-cli](https://crates.io/crates/deepseek-tui-cli)] - DeepSeek V4 終端機程式設計代理，提供串流推理區塊、本機工作區編輯、自動模型選擇、MCP 支援，以及以 ratatui 打造的 TUI。 [![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
* [iBz-04/gloamy](https://github.com/iBz-04/gloamy) [[gloamy](https://crates.io/crates/gloamy)] - 以 Rust 為先的自主代理執行環境，適用於 CLI、通道、閘道與硬體工作流程。
* [illacloud/illa](https://github.com/illacloud/illa) - 低程式碼內部工具建置器。
* [iwe-org/iwe](https://github.com/iwe-org/iwe) [[iwe](https://crates.io/crates/iwe)] - 以 Markdown 為基礎的知識管理工具，提供 LSP 伺服器與 CLI。 [![Build Status](https://github.com/iwe-org/iwe/actions/workflows/rust.yml/badge.svg)](https://github.com/iwe-org/iwe/actions/workflows/rust.yml)
* [jchultarsky/mirador](https://github.com/jchultarsky/mirador) [[mirador](https://crates.io/crates/mirador)] - 平靜簡潔的終端機個人儀表板：以可設定的網格呈現時鐘、行事曆與待辦行程、天氣、任務、筆記、市場資訊及即時系統指標。 [![CI](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml)
* [kruseio/hygg](https://github.com/kruseio/hygg) [[hygg](https://crates.io/crates/hygg)] - 📚 讓閱讀更簡單。極簡、類 Vim 的 TUI 文件閱讀器。
* [LLDAP](https://github.com/lldap/lldap) - 簡化的 LDAP 驗證介面。
* [lockbook/lockbook](https://github.com/lockbook/lockbook) [[lb-rs](https://crates.io/crates/lb-rs)] - 支援協作、端對端加密的筆記、文件與繪圖工具，使用共用 Rust 核心建置原生跨平台用戶端，並提供可自行託管的伺服器。 [![Integration](https://github.com/lockbook/lockbook/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/lockbook/lockbook/actions/workflows/integration.yml)
* [mag123c/toktrack](https://github.com/mag123c/toktrack) - 快速的 TUI／CLI，可追蹤 Claude Code、Codex、Gemini CLI 等 AI 程式設計 CLI 的 Token 用量與成本，並以持久快取避免 CLI 資料刪除造成資訊遺失。 [![CI](https://github.com/mag123c/toktrack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mag123c/toktrack/actions/workflows/ci.yml)
* [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [[worktrunk](https://crates.io/crates/worktrunk)] - 專為平行執行 AI 代理設計的 Git worktree 管理 CLI，支援 hooks、LLM 提交訊息與合併工作流程。 [![CI](https://img.shields.io/github/actions/workflow/status/max-sixty/worktrunk/ci.yaml?branch=main&logo=github)](https://github.com/max-sixty/worktrunk/actions?query=branch%3Amain+workflow%3Aci)
* [morganlinton/Albatross](https://github.com/morganlinton/Albatross) [[albatross-cli](https://crates.io/crates/albatross-cli)] - 以終端機為先的 AI 程式設計代理，透明地跨本機（Ollama、LM Studio、MLX、llama.cpp）與雲端後端路由多種模型，提供每回合成本顯示、真正的復原功能及可稽核的路由憑證。 [![CI](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml/badge.svg)](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml)
* [muvon/octomind](https://github.com/muvon/octomind) - 開源代理執行環境 CLI，提供 48 種以上專業代理、支援動態伺服器註冊的 MCP Host、支援 13 種以上 LLM 的多供應商功能，以及適用於 4 小時以上工作階段的自適應情境壓縮。
* [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) - 專為 AI 程式設計代理打造的終端機多工器。可在單一終端機中執行多個代理，提供真實終端機檢視、代理狀態偵測（受阻／工作中／完成）、工作區、分頁與持久工作階段。單一 Rust 執行檔，支援分離與重新連接。
* [pier-cli/pier](https://github.com/pier-cli/pier) - 集中管理所有單行指令、腳本、工具與 CLI 的儲存庫，支援新增、搜尋中繼資料等功能。
* [raine/workmux](https://github.com/raine/workmux) [[workmux](https://crates.io/crates/workmux)] - 以 Git worktree 和 tmux 視窗實現零摩擦平行開發。 [![CI](https://github.com/raine/workmux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/raine/workmux/actions/workflows/ci.yml)
* [rtk-ai/rtk](https://github.com/rtk-ai/rtk) - 高效能 CLI Proxy，可讓 AI 程式設計助理的 LLM Token 用量降低 60%–90%。為 Claude Code、Copilot、Cursor、Gemini CLI、Codex 等篩選並壓縮命令輸出。 [![CI](https://github.com/rtk-ai/rtk/workflows/Security%20Check/badge.svg)](https://github.com/rtk-ai/rtk/actions)
* [screenpipe](https://github.com/screenpipe/screenpipe) - 全天候本機 AI 螢幕與麥克風錄製工具。打造能掌握完整情境的 AI 應用程式，並支援 Ollama。
* [ShadoySV/work-break](https://github.com/ShadoySV/work-break) [[work-break](https://crates.io/crates/work-break)] - 依據目前與當日負荷平衡工作及休息時間。 [![Build](https://github.com/ShadoySV/work-break/actions/workflows/release.yml/badge.svg)](https://github.com/ShadoySV/work-break/actions/workflows/release.yml)
* [socai-io/socai](https://github.com/socai-io/socai) - 社群研究代理，重用已登入的 Chrome，在 Instagram、TikTok、LinkedIn、X、小紅書與抖音搜尋並閱讀貼文、留言、個人檔案及支援的媒體。
* [tambourine-voice](https://github.com/kstonekuan/tambourine-voice) - 適用於任何應用程式的個人 AI 語音介面，可自訂聽寫並自行選擇模型與提示詞，以 Rust 打造。
* [tassiovirginio/try-rs](https://github.com/tassiovirginio/try-rs) [[try-rs](https://crates.io/crates/try-rs)] - 工作區管理 CLI，提供 TUI 以整理及瀏覽暫時性實驗。
* [thClaws/thClaws](https://github.com/thClaws/thClaws) - 原生 Rust AI 代理工作區，支援多供應商 LLM、技能系統、MCP 伺服器、知識庫與代理協調。提供桌面 GUI、CLI REPL 及非互動模式。 [![License](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-blue.svg)](https://github.com/thClaws/thClaws)
* [tinyhumansai/opencompany](https://github.com/tinyhumansai/opencompany) - 開源執行環境，可將 AI 代理組成實際運作的公司：提供共用工作看板、代理間交接、人為核准、排程與 DAG 工作流程。可使用任意模型，並透過 Docker 自行託管。 [![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/tinyhumansai/opencompany)
* [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) - 開源代理式助理，具備桌面 UI、118 種以上 OAuth 整合、本機優先的記憶樹、相容 Obsidian 的 Wiki、原生語音及 TokenJuice 壓縮功能。以 Tauri 和 Rust 打造，專注隱私的個人 AI 助理。
* [tover0314-w/opentypeless](https://github.com/tover0314-w/opentypeless) - 以 Tauri 和 Rust 打造的跨平台 AI 語音輸入應用程式。
* [Tuxedo](https://github.com/webstonehq/tuxedo) - 快速、以鍵盤操作為主的 todo.txt 終端機 UI。
* [tw93/Pake](https://github.com/tw93/Pake) - 只需一個命令即可使用 Rust 和 Tauri 將任何網頁轉成桌面應用程式。輕量快速，支援 macOS、Windows 和 Linux。
* [VisiGrid/VisiGrid](https://github.com/VisiGrid/VisiGrid) - 以 GPUI、WASM 與無頭 CLI 引擎打造，外觀與操作方式皆如程式碼編輯器的原生試算表。
* [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) - 輕量桌面應用程式，可跨 15 種以上程式設計工具（Cursor、Claude Code、Codex、Copilot 等）管理、同步及整理 AI 代理技能，使用 Tauri 2、Rust 後端並支援 Git 備份。
* [Xoshbin/asyar](https://github.com/Xoshbin/asyar) - Raycast 的強大功能、Alfred 的速度，以及從設計開始就重視隱私。 [![CodeQL](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql)
* [yashs662/rust_kanban](https://github.com/yashs662/rust_kanban) [[rust-kanban](https://crates.io/crates/rust-kanban)] [![Build](https://github.com/yashs662/rust_kanban/actions/workflows/build.yml/badge.svg)](https://github.com/yashs662/rust_kanban/releases) - 終端機看板應用程式。
* [yicheng47/runner](https://github.com/yicheng47/runner) - 原生 GPUI 桌面應用程式，適用於 macOS 和 Windows。Claude Code、Codex、Copilot CLI、pi 等 CLI 程式設計代理可在真實終端機中各自使用 TUI，協同執行一項任務。 [![CI](https://github.com/yicheng47/runner/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yicheng47/runner/actions/workflows/ci.yaml)
* [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) - 以隱私優先的 AI 會議助理，完全在本機擷取、轉錄並摘要會議。支援 Whisper／Parakeet 模型即時轉錄、AI 摘要，以及 Ollama、Claude、Groq、OpenAI 等多家 AI 供應商。

### 路由協定

* [Holo](https://github.com/holo-routing/holo) - Holo 是一套路由協定，專為支援大規模且以自動化驅動的網路而設計。
* [RustyBGP](https://github.com/osrg/rustybgp) - BGP。

### 安全工具

* [0xdea/augur](https://github.com/0xdea/augur) [[augur](https://crates.io/crates/augur)] - 逆向工程助理，可從二進位檔擷取字串及相關偽程式碼。 [![build](https://github.com/0xdea/augur/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/augur/actions/workflows/build.yml)
* [0xdea/haruspex](https://github.com/0xdea/haruspex) [[haruspex](https://crates.io/crates/haruspex)] - 漏洞研究助理，可從 IDA Hex-Rays 反編譯器擷取偽程式碼。 [![build](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
* [0xdea/oneiromancer](https://github.com/0xdea/oneiromancer) [[oneiromancer](https://crates.io/crates/oneiromancer)] - 逆向工程助理，使用本機執行的 LLM 協助分析原始碼。 [![build](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml)
* [0xdea/rhabdomancer](https://github.com/0xdea/rhabdomancer) [[rhabdomancer](https://crates.io/crates/rhabdomancer)] - 漏洞研究助理，可找出二進位檔中所有呼叫潛在不安全 API 函式的位置。 [![build](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml)
* [AdGuardian-Term](https://github.com/Lissy93/AdGuardian-Term) [[adguardian](https://crates.io/crates/adguardian)] - 以終端機即時監控 AdGuard Home 執行個體的流量與統計資料。
* [AFLplusplus/LibAFL](https://github.com/AFLplusplus/LibAFL) - 進階模糊測試函式庫——以 Rust 組合你的 Fuzzer！可跨核心與機器擴充，支援 Windows、Android、macOS、Linux、no_std 等。 [![build and test](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml)
* [arp-scan-rs](https://github.com/kongbytes/arp-scan-rs) - 用於快速區域網路掃描的極簡 ARP 掃描工具。
* [biandratti/huginn-net](https://github.com/biandratti/huginn-net) - 結合 p0f TCP 與 JA4 TLS 分析的多協定被動式網路指紋辨識工具，用於作業系統與應用程式偵測。 [![CI](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml/badge.svg)](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml)
* [bountyyfi/lonkero](https://github.com/bountyyfi/lonkero) - 企業級網頁漏洞掃描器，提供 60 多種攻擊模組，適用於滲透測試與安全評估。
* [cargo-audit](https://crates.io/crates/cargo-audit) - 稽核 Cargo.lock 中含有安全漏洞的 crates。
* [cargo-auditable](https://crates.io/crates/cargo-auditable) - 讓正式環境使用的 Rust 二進位檔具備可稽核性。
* [cargo-crev](https://crates.io/crates/cargo-crev) - 適用於 Cargo 套件管理器、可透過密碼學驗證的程式碼審查系統。
* [cargo-deny](https://crates.io/crates/cargo-deny) - Cargo 外掛，協助管理大型相依性圖。
* [Cherrybomb](https://github.com/blst-security/cherrybomb) - 使用 CLI 工具終止半成品 API 規格：驗證 API 規格，避免使用者行為定義不明。
* [cotp](https://github.com/replydev/cotp) - 可信賴、加密的命令列 TOTP／HOTP 驗證器應用程式，支援匯入功能。
* [domcyrus/rustnet](https://github.com/domcyrus/rustnet) - 跨平台網路監控 TUI，透過 eBPF／PKTAP 識別程序並深入檢查封包。 [![build badge](https://img.shields.io/github/actions/workflow/status/domcyrus/rustnet/rust.yml?logo=github)](https://github.com/domcyrus/rustnet/actions/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/rustnet-monitor?logo=rust)](https://crates.io/crates/rustnet-monitor)
* [EFForg/rayhunter](https://github.com/EFForg/rayhunter) - 專為行動熱點硬體設計的 IMSI 捕捉器偵測工具，協助使用者辨識可能的行動網路監控（Stingray／基地台模擬器）。 [![Tests](https://github.com/EFForg/rayhunter/actions/workflows/main.yml/badge.svg)](https://github.com/EFForg/rayhunter/actions/workflows/main.yml)
* [entropic-security/xgadget](https://github.com/entropic-security/xgadget) [[xgadget](https://crates.io/crates/xgadget)] - 快速、平行、跨變體的 ROP／JOP gadget 搜尋工具。 [![GitHub Actions](https://github.com/entropic-security/xgadget/workflows/test/badge.svg)](https://github.com/entropic-security/xgadget/actions)
* [epi052/feroxbuster](https://github.com/epi052/feroxbuster) - 簡單、快速、遞迴式的內容探索工具。
* [getprovenant/provenant](https://github.com/getprovenant/provenant) [[provenant-cli](https://crates.io/crates/provenant-cli)] - 快速掃描授權、著作權、套件與 SBOM，輸出 CycloneDX 和 SPDX，並列出完整且封閉的相依性清單；採靜態離線運作。 [![CI](https://github.com/getprovenant/provenant/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/getprovenant/provenant/actions/workflows/check.yml)
* [Inspektor](https://github.com/inspektor-dev/inspektor) - 可識別資料庫協定的 Proxy，用於強制執行存取政策 👮
* [kpcyrd/authoscope](https://github.com/kpcyrd/authoscope) - 可編寫腳本的網路驗證破解工具。
* [kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) - TCP 連線劫持工具，重新撰寫自 shijack。
* [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) - 半自動 OSINT 框架與套件管理器。
* [kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) - 安全的多執行緒封包嗅探器。
* [LeChatP/RootAsRole](https://github.com/LeChatP/RootAsRole) - sudo(-rs)／su 的更佳替代方案 • ⚡ 極速 • 🛡️ 記憶體安全 • 🔐 以安全為核心 ![Build](https://img.shields.io/github/actions/workflow/status/LeChatP/RootAsRole/build.yml?logo=githubactions&label=Build&logoColor=white) ![Coverage](https://img.shields.io/codecov/c/github/lechatp/rootasrole?color=green&link=https%3A%2F%2Fapp.codecov.io%2Fgh%2FLeChatP%2FRootAsRole&label=Test%20Coverage) ![crates.io](https://img.shields.io/crates/v/rootasrole.svg?label=Version&color=e37602&logo=rust)
* [microsoft/mxc](https://github.com/microsoft/mxc) - 沙箱程式碼執行系統，可在 Windows、Linux 和 macOS 執行不受信任的程式碼（模型輸出、外掛、工具）。支援多種隔離後端（ProcessContainer、Windows Sandbox、LXC、Bubblewrap、Seatbelt、MicroVM、Hyperlight、IsolationSession、WSLC），並提供以 JSON 政策為基礎的沙箱機制與 TypeScript SDK。 [![CI](https://github.com/microsoft/mxc/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/mxc/actions)
* [mongodb/kingfisher](https://github.com/mongodb/kingfisher) - 快速工具，可在檔案、Git 儲存庫、S3、Jira 和 Confluence 中偵測密鑰並即時驗證。
* [mullvad/mullvadvpn-app](https://github.com/mullvad/mullvadvpn-app) - Mullvad VPN 服務的跨平台 VPN 用戶端，支援 WireGuard、抗量子通道及以隱私為核心的功能。 [![CI](https://github.com/mullvad/mullvadvpn-app/actions/workflows/verify.yml/badge.svg)](https://github.com/mullvad/mullvadvpn-app/actions)
* [observer_ward](https://github.com/emo-crab/observer_ward) - 網頁應用程式與服務指紋辨識工具。
* [Raspirus](https://github.com/Raspirus/Raspirus) - 對使用者與資源都友善、以規則為基礎的惡意軟體掃描器。 [![status](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml/badge.svg)](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml)
* [reaction](https://framagit.org/ppom/reaction) - 掃描日誌並採取行動：fail2ban 的替代方案。
* [ripasso](https://github.com/cortex/ripasso/) - 與 pass 檔案系統相容的密碼管理器。
* [rustscan](https://github.com/bee-san/RustScan) - 使用這款連接埠掃描工具加快 Nmap 速度。 [![build badge](https://github.com/bee-san/RustScan/actions/workflows/test.yml/badge.svg)](https://github.com/bee-san/RustScan/actions)
* [santhreal/keyhog](https://github.com/santhreal/keyhog) [[keyhog](https://crates.io/crates/keyhog)] - 可在原始碼樹、Git 歷史、封存檔與遠端來源中偵測外洩的憑證與 API 金鑰，並即時驗證找到的密鑰。 [![CI](https://github.com/santhreal/keyhog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/santhreal/keyhog/actions/workflows/ci.yml)
* [secluso](https://github.com/secluso/core) - 重視隱私、採端對端加密的 Raspberry Pi 家用安全攝影機。
* [sherlock](https://github.com/jonaylor89/sherlock-rs) [[sherlock](https://crates.io/crates/sherlock)] - 依使用者名稱跨社群網路搜尋社群媒體帳號。 [![status](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml)
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) - 使用 SSH 金鑰加密與解密、簡單管理密鑰的工具。
* [timescale/rsigma](https://github.com/timescale/rsigma) [[rsigma](https://crates.io/crates/rsigma)] - 完整的 Sigma 偵測標準偵測工程工具組，包含剖析器、評估引擎、規則轉換、串流執行環境、Linter、CLI、MCP 與 LSP。 [![CI](https://github.com/timescale/rsigma/actions/workflows/ci.yml/badge.svg)](https://github.com/timescale/rsigma/actions/workflows/ci.yml)

### 社群網路

* Discord
  * [concord](https://github.com/chojs23/concord) - 功能豐富的 Discord TUI 用戶端。
  * [Dorion](https://github.com/SpikeHD/Dorion) - 小巧的 Discord 用戶端替代方案，佔用空間更少、啟動更快，並支援主題、外掛等功能！ ![build](https://img.shields.io/github/actions/workflow/status/SpikeHD/Dorion/build.yml)
* Mastodon
  * [Rustodon](https://github.com/rustodon/rustodon) - 相容 Mastodon、支援 ActivityPub 的伺服器。
* Telegram
  * [tgt](https://github.com/FedericoBruzzone/tgt) - 跨平台 Telegram TUI。 [![ci-linux](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml) [![ci-macos](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml) [![ci-windows](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml)
* WhatsApp
  * [imtaqin/waxum](https://github.com/imtaqin/waxum) - 可自行託管的 WhatsApp 閘道，透過單一靜態執行檔提供 REST API、webhook、多工作階段支援與語音通話。 [![CI](https://github.com/imtaqin/waxum/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/imtaqin/waxum/actions/workflows/ci.yml)

### 系統工具

* [adileo/squirreldisk](https://github.com/adileo/squirreldisk) - 適用於 macOS、Windows 和 Linux 的磁碟用量分析 GUI（egui），提供旭日圖與樹狀圖檢視，還能透過 rclone 掃描 SSH 伺服器與雲端儲存空間。 [![CI](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) - 會學習使用習慣、速度更快的 `cd` 替代工具。 [![release](https://github.com/ajeetdsouza/zoxide/actions/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [anylinuxfs](https://github.com/nohajc/anylinuxfs) - 可在 Mac 上掛載任何 Linux 支援檔案系統的 CLI 工具，透過 microVM 使用 NFS。
* [anylinuxfs-gui](https://github.com/fenio/anylinuxfs-gui) - anylinuxfs 的 GUI 應用程式。
* [ataraxy-labs/sem](https://github.com/ataraxy-labs/sem) - 實體層級語意版本控制 CLI，可透過 tree-sitter 跨 32 種語言在函式／類別層級進行差異比對、Blame、圖形與影響分析。 [![Release](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml)
* [ataraxy-labs/weave](https://github.com/ataraxy-labs/weave) - Git 的實體層級合併驅動程式，透過 tree-sitter 理解程式碼結構來解決合併衝突，並可透過 .gitattributes 設定為自訂合併驅動程式。 [![Release](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml)
* [atuin](https://github.com/atuinsh/atuin) [[atuin](https://crates.io/crates/atuin)] - Atuin 以 SQLite 資料庫取代現有的 Shell 歷史記錄，並記錄命令的其他情境資訊。此外，還可選擇透過 Atuin 伺服器在不同機器間同步歷史記錄，且全程加密。
* [bandwhich](https://github.com/imsnif/bandwhich) - 終端機頻寬使用率工具。
* [bolivian-peru/os-moda](https://github.com/bolivian-peru/os-moda) - NixOS 發行版，AI 代理可透過 91 個具型別的 MCP 工具取得 Root 權限。9 個 Rust 常駐程式（系統橋接、具自動復原的原子 SafeSwitch 部署、雜湊鏈稽核帳本、AES-256-GCM 加密錢包、Noise_XX + ML-KEM-768 點對點網狀網路、本機 STT／TTS、MCP 伺服器生命週期管理、系統學習，以及網域允許清單輸出 Proxy）透過 Unix socket 通訊。
* [bottom](https://github.com/ClementTsang/bottom) - 另一款跨平台圖形化程序／系統監控工具。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ClementTsang/bottom/ci/master)](https://github.com/ClementTsang/bottom/actions?query=branch%3Amaster)
* [brocode/fblog](https://github.com/brocode/fblog) - 小巧的命令列 JSON 日誌檢視器。
* [brush-shell](https://github.com/reubeno/brush) - 相容 bash／POSIX 的 Shell。 [![CICD](https://github.com/reubeno/brush/actions/workflows/ci.yaml/badge.svg)](https://github.com/reubeno/brush/actions/workflows/ci.yaml)[![Crate](https://img.shields.io/crates/v/brush-shell.svg?logo=rust)](https://crates.io/crates/brush-shell)
* [bustd](https://github.com/vrmiguel/bustd) - 輕量級程序終止常駐程式，用於處理 Linux 記憶體不足的情況。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vrmiguel/bustd/build-and-test)](https://github.com/vrmiguel/bustd/actions?query=branch%3Amaster)
* [buster/rrun](https://github.com/buster/rrun) - Linux 命令啟動器，類似 gmrun。
* [cantino/mcfly](https://github.com/cantino/mcfly) - 快速瀏覽 Shell 歷史記錄。Great Scott！
* [ChurchTao/clipboard-rs](https://github.com/ChurchTao/clipboard-rs) [[clipboard-rs](https://crates.io/crates/clipboard-rs)] - 以 Rust 撰寫的跨平台函式庫，可取得、設定並監控系統剪貼簿內容的變更。
* [Cocoa-Way](https://github.com/J-x-Z/cocoa-way) [[homebrew](https://github.com/J-x-Z/homebrew-tap)] - 原生 macOS Wayland 合成器，可在不承受虛擬機器額外負擔的情況下執行 Linux GUI 應用程式。以 Smithay 打造。 [![build badge](https://github.com/J-x-Z/cocoa-way/actions/workflows/release.yml/badge.svg)](https://github.com/J-x-Z/cocoa-way/actions)
* [crabz](https://github.com/sstadick/crabz) - 多執行緒壓縮與解壓縮 CLI 工具。 [![Build Status](https://github.com/sstadick/crabz/workflows/Check/badge.svg)](https://github.com/sstadick/crabz/actions?query=workflow%3ACheck)
* [cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) - 受 [entr](http://eradman.com/entrproject/) 啟發、可設定的檔案系統監看工具。
* [dalance/procs](https://github.com/dalance/procs) - 現代化的 `ps` 替代工具。 [![Regression](https://github.com/dalance/procs/actions/workflows/regression.yml/badge.svg)](https://github.com/dalance/procs/actions/workflows/regression.yml)
* [ddh](https://github.com/darakian/ddh) - 快速重複檔案搜尋器。
* [deshaw/procfd](https://github.com/deshaw/procfd) [[procfd](https://crates.io/crates/procfd)] - Linux lsof 替代工具，可列出程序開啟的檔案描述符。
* [diskonaut](https://github.com/imsnif/diskonaut) - 終端機視覺化磁碟空間瀏覽器。
* [dust](https://github.com/bootandy/dust) - 更直覺易用的 du。
* [erickochen/purple](https://github.com/erickochen/purple) [[purple-ssh](https://crates.io/crates/purple-ssh)] - 以 Ratatui 打造的 SSH 用戶端，支援雲端同步、容器管理、檔案傳輸、通道、程式碼片段與密碼管理。 [![CI](https://github.com/erickochen/purple/actions/workflows/ci.yml/badge.svg)](https://github.com/erickochen/purple/actions/workflows/ci.yml)
* [eza-community/eza](https://github.com/eza-community/eza) - `ls` 的替代工具。
* [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) - 方便使用者的命令列 Shell。
* [fork](https://github.com/immortal/fork) - 用於建立與控制終端機分離之新程序（常駐程式）的函式庫。
* [fselect](https://crates.io/crates/fselect) - 使用類 SQL 查詢搜尋檔案。
* [git-ai-project/git-ai](https://github.com/git-ai-project/git-ai) - Git 擴充功能，可追蹤儲存庫中的 AI 生成程式碼，將程式碼行連結至代理、模型與逐字稿。
* [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) - 從零打造的現代 Git 版本控制介面，同時提供 GUI 與 CLI，專為 AI 驅動的工作流程設計。
* [gitui](https://github.com/gitui-org/gitui) - 速度飛快的終端機 Git 用戶端。 [![build](https://github.com/gitui-org/gitui/actions/workflows/ci.yml/badge.svg)](https://github.com/gitui-org/gitui/actions)
* [GQL](https://github.com/amrdeveloper/gql) - 可對 .git 檔案執行的類 SQL 查詢語言。
* [harry0703/MangoDisk](https://github.com/harry0703/MangoDisk) - 跨平台磁碟清理與空間分析應用程式，具備深度清理、樹狀圖視覺化、重複檔案偵測、應用程式解除安裝與開發者產物清理功能。 [![Cross-platform Check](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml/badge.svg)](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml)
* [httm](https://github.com/kimono-koans/httm) - 適用於 ZFS／btrfs／nilfs2（甚至真正 Time Machine 備份）的互動式檔案層級 Time Machine 風格工具！
* [hyperb1iss/unifly](https://github.com/hyperb1iss/unifly) [[unifly](https://crates.io/crates/unifly)] - 管理 Ubiquiti UniFi 網路控制器的 CLI 與 TUI，涵蓋雙 API 並提供 10 畫面的 Ratatui 儀表板。 [![CI](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml/badge.svg)](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml)
* [j0ru/kickoff](https://github.com/j0ru/kickoff) - 快速流暢的 Wayland 程式啟動器。 [![build](https://github.com/j0ru/kickoff/actions/workflows/ci.yml/badge.svg)](https://github.com/j0ru/kickoff/actions)
* [jacek-kurlit/pik](https://github.com/jacek-kurlit/pik) [[pik](https://crates.io/crates/pik)] - 協助尋找並終止程序的 TUI 命令列工具。
* [Kondo](https://github.com/tbillington/kondo) - 用於刪除軟體專案產物並回收磁碟空間的 CLI 與 GUI 工具。
* [LACT](https://github.com/ilya-zlobintsev/LACT) - Linux AMDGPU 控制器。
* [lodosgroup/lpm](https://github.com/lodosgroup/lpm) - 實驗性系統套件管理器。
* [lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] - 支援模式比對的 xargs + awk。
* [lsd](https://github.com/lsd-rs/lsd) - 色彩繽紛、圖示豐富的 ls。 [![build](https://github.com/lsd-rs/lsd/actions/workflows/CICD.yml/badge.svg)](https://github.com/lsd-rs/lsd/actions)
* [Luminarys/synapse](https://github.com/Luminarys/synapse) - 彈性且快速的 BitTorrent 常駐程式。
* [m4b/bingrep](https://github.com/m4b/bingrep) - 搜尋各種作業系統與架構的二進位檔，並以顏色標示結果。
* [macpow](https://github.com/k06a/macpow) - 適用於 Apple Silicon Mac（M1–M5 以上）的即時耗電量監控 TUI。讀取 IOReport、SMC、IORegistry，無須 sudo。 [![CI](https://github.com/k06a/macpow/actions/workflows/ci.yml/badge.svg)](https://github.com/k06a/macpow/actions/workflows/ci.yml)[![crates.io](https://img.shields.io/crates/v/macpow.svg?logo=rust)](https://crates.io/crates/macpow)
* [Mapika/portview](https://github.com/Mapika/portview) [[portview](https://crates.io/crates/portview)] - 查看各連接埠的使用情形：顯示每個連接埠背後的程序，並診斷衝突、萬用位址暴露及連線洩漏；也可作為 MCP 伺服器。 [![CI](https://github.com/Mapika/portview/actions/workflows/ci.yml/badge.svg)](https://github.com/Mapika/portview/actions)
* [matheus-git/systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) [[systemd-manager-tui](https://crates.io/crates/systemd-manager-tui)] - 透過 TUI（終端機使用者介面）管理 systemd 服務的程式。
* [matthart1983/diskwatch](https://github.com/matthart1983/diskwatch) - 單一主機磁碟診斷 TUI：以八個分頁檢視裝置、磁碟區、檔案系統、I/O、SMART、熱門檔案及洞察分析。
* [matthart1983/netwatch](https://github.com/matthart1983/netwatch) [[netwatch-tui](https://crates.io/crates/netwatch-tui)] - 即時網路診斷 TUI：深入檢查 13 種協定的封包（TLS、QUIC、HTTP、DNS、SSH、MQTT、SNMP 等）、透過 eBPF／PKTAP 對應程序、分析 TCP 重傳、進行 JA4 指紋辨識，並可選用 Landlock 沙箱與 Flight Recorder 事件套件。
* [matthart1983/syswatch](https://github.com/matthart1983/syswatch) [[syswatch](https://crates.io/crates/syswatch)] - 單一主機系統診斷 TUI：以 12 個分頁檢視 CPU、記憶體、磁碟、程序、GPU、電力、服務與網路，另有時間軸瀏覽器及洞察異常引擎。
* [mdgaziur/findex](https://github.com/mdgaziur/findex) - 高度可自訂的應用程式搜尋器，使用 GTK3 打造。
* [mitnk/cicada](https://github.com/mitnk/cicada) - 類似 bash 的 Unix Shell。
* [mmstick/concurr](https://github.com/mmstick/concurr) - 採用用戶端／伺服器架構的 GNU Parallel 替代方案。
* [mmstick/fontfinder](https://github.com/mmstick/fontfinder) - 用於預覽及安裝 Google 字型的 GTK3 應用程式。
* [mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) - 電視影集重新命名應用程式，可選用 GTK3 前端。
* [mxseev/logram](https://github.com/mxseev/logram) - 將日誌檔更新推送至 Telegram。
* [netscanner](https://github.com/Chleba/netscanner) - TUI 網路掃描器。
* [nickgerace/gfold](https://github.com/nickgerace/gfold) [[gfold](https://crates.io/crates/gfold)] - 協助追蹤多個 Git 儲存庫的 CLI 工具。 [![build](https://img.shields.io/github/workflow/status/nickgerace/gfold/merge/main)](https://github.com/nickgerace/gfold/actions?query=workflow%3Amerge+branch%3Amain)
* [nivekuil/rip](https://github.com/nivekuil/rip) - 安全且符合人體工學的 `rm` 替代工具。
* [nushell/nushell](https://github.com/nushell/nushell) - 新型態的 Shell。
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) - Terraform MCP 工具——供 AI 助理透過 Model Context Protocol 管理 Terraform 環境的 CLI。
* [nwiizo/tfocus](https://github.com/nwiizo/tfocus) - 互動式工具，可選擇並執行 Terraform plan／apply 操作。
* [orhun/kmon](https://github.com/orhun/kmon) - Linux 核心管理器與活動監控工具。 ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/actions/workflow/status/orhun/kmon/ci.yml?branch=master&label=build)
* [orhun/systeroid](https://github.com/orhun/systeroid) - 具備終端機使用者介面的 sysctl(8) 強化替代方案。 ![https://github.com/orhun/systeroid/actions](https://img.shields.io/github/actions/workflow/status/orhun/systeroid/ci.yml?branch=main&label=build)
* [ouch](https://github.com/ouch-org/ouch) - 輕鬆在命令列壓縮與解壓縮。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ouch-org/ouch/build-and-test)](https://github.com/ouch-org/ouch/actions?query=branch%3Amaster)
* [pkolaczk/fclones](https://github.com/pkolaczk/fclones) - 高效率的重複檔案搜尋與移除工具。
* [pop-os/popsicle](https://github.com/pop-os/popsicle) - 可平行燒錄多個 USB 裝置的 GTK3 與 CLI 工具。
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) - Linux 電源管理常駐程式（DBus 介面），並附 CLI 工具。
* [pueue](https://github.com/nukesor/pueue) - 管理長時間執行的 Shell 命令。 [![GitHub Actions Workflow](https://github.com/Nukesor/pueue/actions/workflows/test.yml/badge.svg)](https://github.com/nukesor/pueue/actions)
* [qarmin/czkawka](https://github.com/qarmin/czkawka) - 多功能應用程式，可尋找重複檔案、空資料夾、相似圖片等。 [![GitHub Actions Workflow](https://github.com/qarmin/czkawka/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/qarmin/czkawka/actions)
* [redox-os/ion](https://github.com/redox-os/ion) - 新世代系統 Shell。
* [sharkdp/bat](https://github.com/sharkdp/bat) - 長出翅膀的 cat(1) 複製版。 [![CICD](https://github.com/sharkdp/bat/actions/workflows/CICD.yml/badge.svg?branch=master)](https://github.com/sharkdp/bat/actions/workflows/CICD.yml)
* [sharkdp/fd](https://github.com/sharkdp/fd) - 簡單、快速且易用的 find 替代工具。 [![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml)
* [sharkdp/hexyl](https://github.com/sharkdp/hexyl) [[hexyl](https://crates.io/crates/hexyl)] - 命令列十六進位檢視器，依不同位元組類別以顏色標示輸出。 [![CICD](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml)
* [sitkevij/hex](https://github.com/sitkevij/hex) - 彩色十六進位傾印終端機工具。
* [Skardyy/mcat](https://github.com/Skardyy/mcat) [[mcat](https://crates.io/crates/mcat)] - 在終端機中檢視圖片、影片、Markdown 與其他文件。
* [skim](https://github.com/skim-rs/skim) - 模糊搜尋器。
* [sorairolake/hf](https://github.com/sorairolake/hf) [[hf](https://crates.io/crates/hf)] - 跨平台隱藏檔案函式庫與工具。 [![CI](https://github.com/sorairolake/hf/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/hf/actions/workflows/CI.yaml)
* [sorairolake/ngrv](https://github.com/sorairolake/ngrv) [[ngrv](https://crates.io/crates/ngrv)] - 類似 `pv(1)` 的終端機管線檢視器。 [![CI](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml)
* [sorairolake/rzopfli](https://github.com/sorairolake/rzopfli) [[rzopfli](https://crates.io/crates/rzopfli)] - 使用 Zopfli 的無損資料壓縮工具。 [![CI](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml)
* [supercilex/fuc](https://github.com/supercilex/fuc) - 快速的 `cp` 與 `rm` 命令。
* [theBGuy/GitDesktop](https://github.com/theBGuy/GitDesktop) - 以鍵盤操作為先的 Git 桌面用戶端，可管理 GitHub、GitLab 和 Bitbucket 上的 PR、Issue、討論、CI 與通知，並支援 Jira 連結和 AI 代理整合；以 Tauri 搭配 Rust 後端打造。 [![Release](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml)
* [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh) - 快速、以鍵盤操作為先的 TUI，可管理 SSH 連線。 [![CI](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml/badge.svg)](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml)
* [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments) - 以 WebAssembly Component Model 為基礎的 REPL，具備沙箱化多語言外掛系統。 [![Crates.io](https://img.shields.io/crates/v/pluginlab.svg)](https://crates.io/crates/pluginlab)
* [trippy](https://github.com/fujiapple852/trippy) - 網路診斷工具。 [![build badge](https://github.com/fujiapple852/trippy/workflows/CI/badge.svg)](https://github.com/fujiapple852/trippy/actions/workflows/ci.yml)
* [tw93/Kaku](https://github.com/tw93/Kaku) - 為 AI 程式設計打造的快速即用終端機模擬器，預設無須設定、整合 AI 助理，並相容 WezTerm Lua 設定。僅支援 macOS。
* [uutils/coreutils](https://github.com/uutils/coreutils) - 跨平台重新實作 GNU coreutils。 [![CICD](https://github.com/uutils/coreutils/actions/workflows/CICD.yml/badge.svg)](https://github.com/uutils/coreutils/actions/workflows/CICD.yml)
* [vyrti/cleaner](https://github.com/vyrti/cleaner) - 適用於 Windows、macOS、Linux 與 FreeBSD，速度最快的磁碟空間分析與清理工具。 [![CI](https://github.com/vyrti/cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/vyrti/cleaner/actions)
* [watchexec](https://github.com/watchexec/watchexec) - 在檔案變更時執行命令。
* [XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) - 計算程式碼行數。
* [ynqa/jnv](https://github.com/ynqa/jnv) - 互動式 JSON 篩選器，採用 jq 語法。 [![ci](https://github.com/ynqa/jnv/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/jnv/actions/workflows/ci.yml)
* [ynqa/logu](https://github.com/ynqa/logu) - 從（串流）非結構化日誌訊息中擷取模式。 [![ci](https://github.com/ynqa/logu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/logu/actions/workflows/ci.yml)
* [ynqa/sig](https://github.com/ynqa/sig) - 互動式 grep（支援串流）。 [![ci](https://github.com/ynqa/sig/actions/workflows/ci.yml/badge.svg)](https://github.com/ynqa/sig/actions/workflows/ci.yml)

### 任務排程

* [tasklet](https://github.com/stav121/tasklet) [[tasklet](https://crates.io/crates/tasklet)] - 以 Rust 撰寫的任務排程函式庫。 ![Build Status](https://img.shields.io/github/actions/workflow/status/stav121/tasklet/rust.yml)

### 文字編輯器

* [amp](https://amp.rs) - 受 Vi／Vim 啟發。
* [Ferrite](https://github.com/OlaProeis/Ferrite) - 以 egui 打造的跨平台 Markdown 編輯器，具備即時預覽、語法醒目提示與 Mermaid 圖表。
* [Fresh](https://github.com/sinelaw/fresh) - 易用、強大且快速的終端機文字編輯器與 IDE，支援 TypeScript 外掛。
* [gchp/iota](https://github.com/gchp/iota) - 簡單的文字編輯器。
* [helix](https://github.com/helix-editor/helix) - 受 Neovim／Kakoune 啟發的後現代模態文字編輯器。 [![build badge](https://github.com/helix-editor/helix/actions/workflows/build.yml/badge.svg)](https://github.com/helix-editor/helix/actions)
* [ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) - 精巧（≤1024 行程式碼）的文字編輯器，具備語法醒目提示、增量搜尋等功能。 [![build badge](https://github.com/ilai-deutel/kibi/actions/workflows/ci.yml/badge.svg)](https://github.com/ilai-deutel/kibi/actions?query=branch%3Amaster)
* [Inkwell](https://github.com/4worlds4w-svg/inkwell) - 可攜式、離線優先的 Markdown 編輯器，以 Tauri v2 打造。單一執行檔、零遙測。
* [jamii/focus](https://github.com/jamii/focus) - 極簡文字編輯器，內建 jj（Jujutsu）版本控制整合。
* [ki-editor/ki-editor](https://github.com/ki-editor/ki-editor) - 多游標組合式模態編輯器。
* [Lapce](https://github.com/lapce/lapce) - 具備後端的現代編輯器，靈感來自已停止開發的 [xi-editor](https://github.com/xi-editor/xi-editor)。
* [manyougz/velotype](https://github.com/manyougz/velotype) - 以 GPUI 打造的區塊式原生 Markdown 編輯器，提供 WYSIWYG 渲染與原始碼編輯模式，無須 WebView 外殼。
* [mathall/rim](https://github.com/mathall/rim) - 類 Vim 文字編輯器。
* [ox](https://github.com/curlpipe/ox) - 可在終端機執行的獨立 Rust 文字編輯器！
* [SoloMD](https://github.com/zhitongblog/solomd) - 以 Tauri 2 打造的輕量跨平台 Markdown 編輯器，支援即時預覽。
* [vamolessa/pepper](https://git.sr.ht/~lessa/pepper) [[pepper](https://crates.io/crates/pepper)] - 以主張為先的模態編輯器，簡化終端機程式碼編輯。
* [zed](https://github.com/zed-industries/zed) - Atom 和 Tree-sitter 開發者打造的高效能多人協作程式碼編輯器。

### 文字處理

* [artob/readmer](https://github.com/artob/readmer) [[readmer](https://crates.io/crates/readmer)] - Readmer 使用 Liquid 或 Jinja2 範本組合 `README.md` 檔案。 [![Build Status](https://github.com/artob/readmer/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/readmer/blob/master/.github/workflows/rust.yaml)
* [ashvardanian/stringzilla](https://github.com/ashvardanian/StringZilla) - 以 SIMD 加速的字串搜尋、排序、編輯距離計算、比對與產生工具，支援 x86 AVX2／AVX-512 及 Arm NEON。 [![crates.io](https://img.shields.io/crates/v/stringzilla.svg)](https://crates.io/crates/stringzilla)
* [bensadeh/tailspin](https://github.com/bensadeh/tailspin) [[tailspin](https://crates.io/crates/tailspin)] - 日誌檔醒目提示工具，可標示數字、日期、IP 位址、UUID 與日誌等級。 [![Run Tests](https://github.com/bensadeh/tailspin/workflows/Run%20Tests/badge.svg)](https://github.com/bensadeh/tailspin/actions)
* [brevity1swos/rgx](https://github.com/brevity1swos/rgx) [[rgx-cli](https://crates.io/crates/rgx-cli)] - 終端機 Regex 除錯器，具備即時比對、逐步除錯、三種引擎、程式碼產生與即時串流篩選功能。 [![CI](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml/badge.svg)](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml)
* [cchexcode/complate](https://github.com/cchexcode/complate) - 在終端機中使用的文字範本工具，專為標準化訊息（例如 Git commit）設計。 [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![build badge](https://github.com/cchexcode/complate/actions/workflows/release.yml/badge.svg)](https://github.com/cchexcode/complate/actions)
* [dathere/qsv](https://github.com/dathere/qsv) [[qsv](https://crates.io/crates/qsv)] - 高效能 CSV 資料整理工具組。由 xsv 分支而來，另新增 34 個以上命令等功能。 [![Linux build status](https://github.com/dathere/qsv/actions/workflows/rust.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust.yml) [![Windows build status](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml) [![macOS build status](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml)
* [dominikwilkowski/cfonts](https://github.com/dominikwilkowski/cfonts) [[cfonts](https://crates.io/crates/cfonts)] - 讓主控台變得時髦的 ANSI 字型。 ![build badge](https://github.com/dominikwilkowski/cfonts/actions/workflows/testing.yml/badge.svg)
* [Goldziher/uncomment](https://github.com/Goldziher/uncomment) [[uncomment](https://crates.io/crates/uncomment)] - 透過 tree-sitter 文法極速移除程式碼註解的 CLI。
* [grex](https://github.com/pemistahl/grex) - 根據使用者提供的測試案例產生正規表示式的命令列工具與函式庫。
* [harehare/mq](https://github.com/harehare/mq) - 使用類似 jq 的語法處理 Markdown 的命令列工具與函式庫。 [![build badge](https://github.com/harehare/mq/actions/workflows/ci.yml/badge.svg)](https://github.com/harehare/mq/actions/workflows/ci.yml)
* [Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) - 為一般使用者打造的簡單快速字串搜尋工具。
* [loki_text](https://github.com/roquess/loki_text) [[loki_text](https://crates.io/crates/loki_text)] - 字串操作函式庫，提供模式搜尋、文字轉換及多種字串搜尋演算法（KMP、Boyer–Moore、Aho–Corasick 等）。
* [Melody](https://github.com/yoav-lavi/melody) - 可編譯為正規表示式的語言，目標是讓表示式更易讀、易維護。 [![build badge](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml/badge.svg)](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml) [![crates.io](https://img.shields.io/crates/v/melody_compiler?label=compiler)](https://crates.io/crates/melody_compiler)
* [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) [[jsongrep](https://crates.io/crates/jsongrep)] - 快速搜尋 JSON、YAML、TOML 與其他序列化格式的工具，提供直覺的路徑查詢語法。
* [phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) - ripgrep 的延伸版，還能搜尋 PDF、電子書、Office 文件、zip、tar.gz 等檔案。
* [ripgrep](https://crates.io/crates/ripgrep) - 結合 The Silver Searcher 的易用性與 grep 的純粹速度。
* [ruplacer](https://github.com/your-tools/ruplacer) - 搜尋並取代原始碼檔案中的文字。 [![Run tests](https://github.com/your-tools/ruplacer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/your-tools/ruplacer/actions/workflows/test.yml)
* [scooter](https://github.com/thomasschafer/scooter) - 在終端機中互動式搜尋並取代。
* [sd](https://crates.io/crates/sd) - 直覺易用的搜尋與取代 CLI。
* [sstadick/hck](https://github.com/sstadick/hck) - 功能更多、速度更快，可直接替代 `cut` 的工具。 [![build badge](https://github.com/sstadick/hck/workflows/Check/badge.svg?branch=master)](https://github.com/sstadick/hck)
* [SylphxAI/anymd](https://github.com/SylphxAI/anymd) - 將任何檔案（PDF、DOCX、PPTX、XLSX、EPUB、HTML／網址、圖片、音訊／影片）轉換成乾淨 Markdown，供 AI 代理使用；提供 CLI 與 MCP 伺服器。 [![build badge](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml)
* [vishaltelangre/ff](https://github.com/vishaltelangre/ff) - 依名稱尋找檔案（ff）！
* [whitfin/bytelines](https://github.com/whitfin/bytelines) [[bytelines](https://crates.io/crates/bytelines)] - 將輸入行讀取為位元組切片，以提升效率。
* [whitfin/runiq](https://github.com/whitfin/runiq) - 有效篩除未排序輸入中的重複行。
* [xsv](https://crates.io/crates/xsv) - 快速的 CSV 命令列工具（切片、索引、選取、搜尋、取樣等）。

### 實用工具

* [1History](https://github.com/localfirstapp/1History) - 命令列介面，可將 Firefox／Chrome／Safari 歷史記錄備份至單一 SQLite 檔案。 [![Build Status](https://github.com/localfirstapp/1History/actions/workflows/CI.yml/badge.svg)](https://github.com/localfirstapp/1History/actions/workflows/CI.yml)
* [aravpanwar/decayfmt](https://github.com/aravpanwar/decayfmt) [[decayfmt](https://crates.io/crates/decayfmt)] - 一種檔案格式：每次開啟時檔案都會永久損毀一小部分，而且無法僅靠檔案復原。 [![CI](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml/badge.svg)](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml)
* [artob/edky](https://github.com/artob/edky) [[edky](https://crates.io/crates/edky)] - 命令列工具，可在不同編碼格式（Base58、Base64、IPFS、iroh、libp2p、OpenSSH 等）之間轉換 Ed25519 公開金鑰。 [![Build Status](https://github.com/artob/edky/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/edky/blob/master/.github/workflows/rust.yaml)
* [bloznelis/kbt](https://github.com/bloznelis/kbt) [[kbt](https://crates.io/crates/kbt)] - 簡易 TUI 鍵盤測試工具。
* [brycx/checkpwn](https://github.com/brycx/checkpwn) - Have I Been Pwned（HIBP）命令列工具，可輕鬆檢查帳戶與密碼是否遭到外洩。
* [cartesiancs/vessel](https://github.com/cartesiancs/vessel) - 用於協調實體裝置的 C2（命令與控制）軟體。
* [dcapal](https://github.com/dcapal/dcapal) - DcaPal 是免費、無須註冊的線上工具，透過定期定額投資協助維持投資組合平衡。
* [Eoin-McMahon/Blindfold](https://github.com/Eoin-McMahon/Blindfold) [[Blindfold](https://crates.io/crates/blindfold)] - 簡單的 CLI 工具，可快速輕鬆產生 `.gitignore` 檔案。 [![build-badge](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml/badge.svg)]([https://github.com/nix-community/nurl/actions/workflows/ci.yml](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml))
* [Epic Asset Manager](https://github.com/AchetaGames/Epic-Asset-Manager) - 非官方用戶端，可安裝 Unreal Engine，並從 Epic Games Store 下載及管理已購買的資產、專案、外掛與遊戲。
* [evansmurithi/cloak](https://github.com/evansmurithi/cloak) - 命令列 OTP（一次性密碼）驗證器應用程式。 ![CI](https://github.com/evansmurithi/cloak/workflows/CI/badge.svg) [![build badge](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) - 速度飛快的 tmux-fingers 版本，以類似 vimium／vimperator 的方式在 tmux 中複製與貼上。
* [fosk/emplace](https://codeberg.org/fosk/emplace) [[emplace](https://crates.io/crates/emplace)] - 在多部機器間同步已安裝的套件。
* [gitlogue](https://github.com/unhappychoice/gitlogue) - TUI 螢幕保護程式，會在終端機中視覺化呈現 Git 提交歷史。
* [guoxbin/dtool](https://github.com/guoxbin/dtool) - 實用命令列工具集，協助開發工作，包含轉換、編解碼、雜湊、加密等功能。
* [IvanWng97/pixtuoid](https://github.com/IvanWng97/pixtuoid) [[pixtuoid](https://crates.io/crates/pixtuoid)] - 終端機像素藝術辦公室，將 Claude Code 工作階段即時呈現為動態同事。 [![CI](https://img.shields.io/github/actions/workflow/status/IvanWng97/pixtuoid/ci.yml?branch=main)](https://github.com/IvanWng97/pixtuoid/actions/workflows/ci.yml)
* [ja7ad/hydra](https://github.com/ja7ad/hydra) - 開源高效能下載管理器與加速器，可透過平行連線與鏡像來源分段下載每個檔案。具備動態區段接管及即時停滯復原，支援 Windows、macOS 和 Linux。
* [lamco-admin/lamco-rdp-server](https://github.com/lamco-admin/lamco-rdp-server) - 以 IronRDP 為基礎的原生 Wayland RDP 伺服器，可在 Wayland Linux 桌面（GNOME、KDE、COSMIC、wlroots 合成器等）提供遠端桌面存取，無須 X11。
* [Linus-Mussmaecher/rucola](https://github.com/Linus-Mussmaecher/rucola) - 以終端機為基礎的 Markdown 筆記管理器。 [![Crate](https://img.shields.io/crates/v/rucola-notes.svg?logo=rust)](https://crates.io/crates/rucola-notes) [![Build Status](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml/badge.svg)](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml)
* [matugen](https://github.com/InioX/matugen) - 依範本從圖片或顏色產生調色盤。
* [Mobslide](https://github.com/thewh1teagle/mobslide) - 可將智慧型手機變成簡報遙控器的桌面應用程式。
* [MoonProxyHQ/moonproxy-desktop](https://github.com/MoonProxyHQ/moonproxy-desktop) - 跨平台 GUI 桌面用戶端，適用於 FRP（frpc），讓非技術使用者只需按一下即可將本機服務公開至網際網路。 [![CI](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml/badge.svg)](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml)
* [mprocs](https://github.com/pvolok/mprocs) - 可執行多個程序的 TUI。
* [mrjackwills/oxker](https://github.com/mrjackwills/oxker) [[oxker](https://crates.io/crates/oxker)] - 簡易 TUI，可檢視與控制 Docker 容器。
* [nix-community/nix-init](https://github.com/nix-community/nix-init) - 依據網址產生 Nix 套件，支援雜湊預先擷取、相依性推斷、授權偵測等功能。 [![build-badge](https://github.com/nix-community/nix-init/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-init/actions/workflows/ci.yml)
* [nix-community/nix-melt](https://github.com/nix-community/nix-melt) - 類似 ranger 的 flake.lock 檢視器。 [![build-badge](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml)
* [nix-community/nurl](https://github.com/nix-community/nurl) [[nurl](https://crates.io/crates/nurl)] - 從儲存庫網址產生 Nix fetcher 呼叫。 [![build-badge](https://github.com/nix-community/nurl/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nurl/actions/workflows/ci.yml)
* [nomino](https://github.com/yaa110/nomino) - 為開發者打造的批次重新命名工具。
* [pastel](https://github.com/sharkdp/pastel) - 色彩工具：產生、混合並隨機挑選顏色。
* [race604/clock-tui](https://github.com/race604/clock-tui) [[clock-tui](https://crates.io/crates/clock-tui)] - 終端機時鐘應用程式，具備本地時鐘、計時器與碼錶功能。 [![Rust](https://github.com/race604/clock-tui/actions/workflows/rust.yml/badge.svg)](https://github.com/race604/clock-tui/actions/workflows/rust.yml)
* [raftario/licensor](https://github.com/raftario/licensor) - 將授權條款輸出至 stdout。 [![GitHub Actions](https://github.com/raftario/licensor/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/raftario/licensor/actions/workflows/build.yml)
* [restsend/rustpbx](https://github.com/restsend/rustpbx) - 軟體定義 SIP Proxy，包含註冊、狀態資訊與 B2BUA，是 Freeswitch／FreePBX 的替代方案。
* [rleeon/hoard](https://github.com/rleeon/hoard) - 遊戲存檔備份與同步系統，支援自動偵測、版本化快照及自行託管儲存空間。 [![CI](https://github.com/rleeon/hoard/actions/workflows/ci.yml/badge.svg)](https://github.com/rleeon/hoard/actions/workflows/ci.yml)
* [rust-parallel](https://github.com/aaronriekenberg/rust-parallel) - 使用 Tokio 的快速命令列應用程式，可平行執行命令。介面類似 GNU Parallel 或 xargs。 [![Crate](https://img.shields.io/crates/v/rust-parallel.svg?logo=rust)](https://crates.io/crates/rust-parallel) [![Build Status](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml/badge.svg)](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml)
* [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) - 遠端桌面軟體，是 TeamViewer 與 AnyDesk 的絕佳替代方案。
* [rustic-rs/rustic](https://github.com/rustic-rs/rustic) [[rustic-rs](https://crates.io/crates/rustic-rs)] - 由 Rust 驅動的快速、加密、去重複備份工具。 [![Version](https://img.shields.io/crates/v/rustic-rs.svg)](https://crates.io/crates/rustic-rs)
* [ruvnet/RuView](https://github.com/ruvnet/RuView) - 使用 WiFi 通道狀態資訊（CSI）與機器學習、兼顧隱私的人體姿勢估測系統。
* [sorairolake/qrtool](https://github.com/sorairolake/qrtool) [[qrtool](https://crates.io/crates/qrtool)] - 用於編碼與解碼 QR Code 圖片的工具。 [![CI](https://github.com/sorairolake/qrtool/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/qrtool/actions?query=workflow%3ACI)
* [sorairolake/randgen](https://github.com/sorairolake/randgen) [[randgen](https://crates.io/crates/randgen)] - 產生偽隨機位元組。 [![CI](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml)
* [splashboard](https://github.com/unhappychoice/splashboard) [[splashboard](https://crates.io/crates/splashboard)] - 可自訂的終端機啟動畫面，會在 Shell 啟動與目錄變更時呈現，並支援各目錄專屬儀表板。 [![CI](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml)
* [str4d/rage](https://github.com/str4d/rage) [[rage](https://crates.io/crates/rage)] - [age](https://github.com/FiloSottile/age) 的 Rust 實作。
* [suckit](https://github.com/Skallwar/suckit) - 遞迴瀏覽網站並將內容下載至磁碟。 [![Crate](https://img.shields.io/crates/v/suckit.svg?logo=rust)](https://crates.io/crates/suckit) [![Build Status](https://github.com/Skallwar/suckit/workflows/Build%20and%20test/badge.svg)](https://github.com/Skallwar/suckit/blob/master/.github/workflows/build_and_test.yml)
* [sundegan/JsonStudio](https://github.com/sundegan/JsonStudio) - 以 Rust 和 Tauri 打造、以本機資料為優先的桌面 JSON 工作空間，可格式化、編輯、比較差異、轉換、驗證 JSON 並擷取日誌。
* [Tabiew](https://github.com/shshemi/tabiew) - 輕量 TUI 應用程式，可檢視並查詢 CSV 檔案。
* [Tail Tales](https://github.com/davidmoreno/tailtales) - 支援 logfmt 的 TUI 日誌檢視器。 [![Crate](https://img.shields.io/crates/v/tailtales.svg?logo=rust)](https://crates.io/crates/tailtales)
* [tareqmy/gitwig](https://github.com/tareqmy/gitwig) [[CRATE](https://crates.io/crates/gitwig)] - 可使用滑鼠操作的 Git TUI 與多儲存庫儀表板。
* [television](https://github.com/alexpasmantier/television) - 速度飛快、用途廣泛的模糊搜尋 TUI。 ![GitHub branch check runs](https://img.shields.io/github/check-runs/alexpasmantier/television/main)
* [Thoth](https://github.com/anitnilay20/thoth) - 高效能、功能豐富的桌面應用程式，可檢視及探索 JSON 與 NDJSON 檔案，並支援以 WASM 為基礎的外掛。 [![CI](https://github.com/anitnilay20/thoth/workflows/CI/badge.svg)](https://github.com/anitnilay20/thoth/actions/workflows/ci.yml)
* [vamolessa/verco](https://git.sr.ht/~lessa/verco) [[verco](https://crates.io/crates/verco)] - 以鍵盤快速鍵為核心的簡易 Git／Hg TUI 用戶端。
* [vaultwarden](https://github.com/dani-garcia/vaultwarden#readme) [![Build](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml/badge.svg)](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml) - 以 Rust 撰寫的 Bitwarden Server API 替代實作。
* [veirt/weathr](https://github.com/Veirt/weathr) [[weathr](https://crates.io/crates/weathr)] - 帶有 ASCII 動畫的終端機天氣應用程式。 [![Release](https://github.com/Veirt/weathr/actions/workflows/release.yml/badge.svg)](https://github.com/Veirt/weathr/actions/workflows/release.yml)
* [Vibe](https://github.com/thewh1teagle/vibe) - 在任何平台轉錄任何語言的音訊或影片。
* [warpdotdev/Warp](https://github.com/warpdotdev/Warp) - :heavy_dollar_sign: Warp 是極速、現代且由 GPU 加速的終端機，旨在提升個人與團隊的生產力。
* [Water-Run/treepp](https://github.com/Water-Run/treepp) - 以 Rust 原生打造的 Windows `tree` 替代工具，成功執行時在輸入／輸出差異層級相容，另有必要排除規則與 `.gitignore` 支援等更多功能，速度快上數倍。
* [wrestic](https://github.com/alvaro17f/wrestic) - restic 的封裝工具。
* [wthrr](https://github.com/ttytm/wthrr-the-weathercrab) - 終端機天氣夥伴。 [![crates.io](https://img.shields.io/crates/v/wthrr?logo=rust)](https://crates.io/crates/wthrr)
* [YAKC](https://github.com/iammodev/YAKC) - 適用於錄影教學、直播與簡報的跨平台按鍵及滑鼠點擊視覺化工具。支援 Windows、macOS 和 Linux（X11 與 Wayland）。 [![CI](https://github.com/iammodev/YAKC/actions/workflows/ci.yml/badge.svg)](https://github.com/iammodev/YAKC/actions/workflows/ci.yml)
* [YueMiyuki/Risuko](https://github.com/YueMiyuki/Risuko) - 功能完整的下載管理器。 [![Release-Badge](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml/badge.svg)](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml)
* [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown) - 多協定下載管理器，採用 Rust／Tokio 引擎，支援 HTTP／FTP、BitTorrent、eD2K、HLS 和 DASH，並具備 IDM 風格的動態分段、瀏覽器擴充功能及相容 aria2 的 JSON-RPC 端點。

### 影片

* [dertuxmalwieder/yaydl](https://github.com/dertuxmalwieder/yaydl) [[yaydl](https://crates.io/crates/yaydl)] - 簡易影片下載器。
* [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow) - 使用陀螺儀資料的影片穩定應用程式。
* [harlanc/xiu](https://github.com/harlanc/xiu) - 功能強大且安全的直播伺服器（RTMP／HTTP-FLV／HLS／Relay）。 [![crates.io](https://img.shields.io/crates/v/xiu.svg)](https://crates.io/crates/xiu)
* [Jorji49/streamtop](https://github.com/Jorji49/streamtop) [[streamtop](https://crates.io/crates/streamtop)] - 終端機 HLS、DASH 與 IPTV 串流監控器，提供線路探測、TR 101 290 與 SCTE-35 指標。
* [Michael-A-Kuykendall/muxide](https://github.com/Michael-A-Kuykendall/muxide) [[muxide](https://crates.io/crates/muxide)] - 純 Rust MP4 多工器，無外部相依性，可從編碼影格寫入符合標準的 MP4。
* [tonhowtf/omniget](https://github.com/tonhowtf/omniget) - 桌面應用程式，可從 1,800 多個網站下載影片、課程、音樂與書籍，內建播放器、閱讀器和學習資料庫。 [![CI](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml)
* [vidmerger](https://github.com/TGotwig/vidmerger) - 透過 CLI 合併影片與音訊檔案。
* [vuiodev/vuio](https://github.com/vuiodev/vuio) - DLNA 媒體伺服器，支援 Linux、macOS、Windows 與 Docker。
* [xiph/rav1e](https://github.com/xiph/rav1e) - 速度最快且最安全的 AV1 編碼器。

### 虛擬化

* [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) - 適用於容器工作負載的輕量虛擬機器 [Firecracker Microvm](https://firecracker-microvm.github.io/)。
* [kata-containers/kata-containers](https://github.com/kata-containers/kata-containers) - 輕量虛擬機器（VM）實作，具備如同容器般的手感與效能，同時保有 VM 的工作負載隔離與安全優勢。
* [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox) - 輕量 microVM 沙箱函式庫，可在毫秒內執行隔離程式碼。支援 Rust、Python、TypeScript SDK 與相容 OCI 的容器映像檔。 [![GitHub release](https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases)](https://github.com/superradcompany/microsandbox/releases)
* [tailhook/vagga](https://github.com/tailhook/vagga) - 無需常駐程式的容器化工具。
* [youki-dev/youki](https://github.com/youki-dev/youki) - 容器執行環境。 [![build badge](https://github.com/youki-dev/youki/actions/workflows/basic.yml/badge.svg)](https://github.com/youki-dev/youki/actions)

### 網頁

* [0xMassi/webclaw](https://github.com/0xMassi/webclaw) - 為 LLM 擷取網頁內容，具備 TLS 指紋辨識與 MCP 伺服器，無需瀏覽器。 [![CI](https://github.com/0xMassi/webclaw/actions/workflows/ci.yml/badge.svg)](https://github.com/0xMassi/webclaw/actions)
* [agrinman/tunnelto](https://github.com/agrinman/tunnelto) [[tunnelto](https://crates.io/crates/tunnelto)] - 讓你透過公開網址公開本機執行的網頁伺服器。
* [cfal/tobaru](https://github.com/cfal/tobaru) - 連接埠轉送器，支援允許清單、IP 與 TLS SNI／ALPN 規則路由、iptables、循環轉送（負載平衡）及熱重新載入。
* [hook0/hook0](https://github.com/hook0/hook0) - 開源的 Webhooks 即服務平台，讓 SaaS 開發者能輕鬆傳送 Webhook。
* [importantimport/hatsu](https://github.com/importantimport/hatsu) - 🩵 可自行託管且全自動化的靜態網站 ActivityPub 橋接器。 [![release](https://github.com/importantimport/hatsu/actions/workflows/release.yml/badge.svg)](https://github.com/importantimport/hatsu/actions/workflows/release.yml)
* [IndexFlowing/IndexFlow-core](https://github.com/IndexFlowing/IndexFlow-core) - 可自行託管的 SEO 索引基礎設施，用於管理網站地圖、網址提交與搜尋引擎索引。
* [janreges/siteone-crawler](https://github.com/janreges/siteone-crawler) [[siteone-crawler](https://crates.io/crates/siteone-crawler)] - 一體化。
   網站爬蟲、稽核工具、離線封存器，以及具備 CI/CD 品質閘門、適合 AI 的 Markdown 匯出工具。
  [![CI](https://github.com/janreges/siteone-crawler/workflows/CI/badge.svg)](https://github.com/janreges/siteone-crawler/actions)
* [konippi/servo-fetch](https://github.com/konippi/servo-fetch) - 獨立的瀏覽器引擎，可擷取、渲染並將網頁內容匯出為 Markdown、JSON 或螢幕截圖——無需 Chromium，也不需 API 金鑰。提供 CLI、Python 與 MCP 伺服器。 [![CI](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml/badge.svg)](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml)
* [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) - Fediverse 的連結彙整器／Reddit 複製版。 [![Build Status](https://cloud.drone.io/api/badges/LemmyNet/lemmy/status.svg)](https://cloud.drone.io/LemmyNet/lemmy)
* [MASQ-Project/Node](https://github.com/MASQ-Project/Node) - MASQ Node 軟體提供去中心化節點網狀網路，讓全球使用者存取一般網際網路內容，是 Tor 與 VPN 之後的下一代技術。 [![build badge](https://github.com/MASQ-Project/Node/actions/workflows/ci-matrix.yml/badge.svg)](https://github.com/MASQ-Project/Node/actions)
* [Plume-org/Plume](https://github.com/Plume-org/Plume) - 支援 ActivityPub 聯邦協定的部落格應用程式。
* [Redlib](https://github.com/redlib-org/redlib) - 以 [Libreddit](https://github.com/libreddit/libreddit) 為起點的 Reddit 私人前端替代方案。
* [shouya/rss-funnel](https://github.com/shouya/rss-funnel) - 模組化 RSS 處理管線系統。
* [SinTan1729/Chhoto URL](https://github.com/SinTan1729/chhoto-url) - 簡單、極速且可自行託管的網址縮短工具，沒有多餘功能。 ![release](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml/badge.svg)](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml)
* [Stoatchat](https://github.com/stoatchat/stoatchat) - 使用現代 Web 技術打造、以使用者為先的聊天平台。
* [zhom/donutbrowser](https://github.com/zhom/donutbrowser) - 開源反偵測瀏覽器，提供無限隔離設定檔、Chromium／Firefox 引擎、指紋偽裝、Proxy／VPN 支援、本機 API 與 MCP 伺服器，以及端對端加密雲端同步。 [![GitHub release](https://img.shields.io/github/v/release/zhom/donutbrowser)](https://github.com/zhom/donutbrowser/releases)

### Web 伺服器

* [cloudflare/pingora](https://github.com/cloudflare/pingora) - 用於建置快速、可靠且易於演進的網路服務的函式庫。
* [emanuele-em/proxelar](https://github.com/emanuele-em/proxelar) - 🦀 MITM Proxy 工具組！支援 HTTP/1、HTTP/2、WebSocket 與 SSL／TLS 功能。 [![Rust](https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg)](https://github.com/emanuele-em/proxelar/actions)
* [g3proxy](https://github.com/bytedance/g3) - Forward Proxy 伺服器，支援 Proxy 串接、協定檢查、MITM 攔截、ICAP 調適與透明 Proxy。 [![CodeCoverage](https://github.com/bytedance/g3/actions/workflows/codecov.yml/badge.svg)](https://github.com/bytedance/g3/actions)
* [hyperlane-dev/hyperlane](https://github.com/hyperlane-dev/hyperlane) [[hyperlane](https://crates.io/crates/hyperlane)] - 以 Tokio 為基礎打造的輕量、高效能、跨平台 Rust HTTP 伺服器函式庫；內建中介軟體、WebSocket、SSE 與原始 TCP 支援。 [![CI](https://github.com/hyperlane-dev/hyperlane/actions/workflows/rust.yml/badge.svg)](https://github.com/hyperlane-dev/hyperlane/actions)
* [Mini RPS](https://github.com/marcodpt/minirps) - 迷你反向 Proxy 伺服器，支援 HTTPS、CORS、靜態檔案託管與範本引擎（minijinja）[crates.io](https://crates.io/crates/minirps)。
* [mu-arch/skyfolder](https://github.com/mu-arch/skyfolder) - 🪂 美觀又省事的 HTTP／BitTorrent 伺服器。安全、具 GUI、美觀、快速。
* [mufeedvh/binserve](https://github.com/mufeedvh/binserve) - 極速靜態網頁伺服器，將路由、範本與安全性整合在單一執行檔中，無須撰寫程式碼即可設定。 [![build badge](https://github.com/mufeedvh/binserve/actions/workflows/build.yml/badge.svg)](https://github.com/mufeedvh/binserve/actions)
* [orhun/rustypaste](https://github.com/orhun/rustypaste) - 極簡檔案上傳／Pastebin 服務。 ![https://github.com/orhun/rustypaste/actions](https://img.shields.io/github/actions/workflow/status/orhun/rustypaste/ci.yml?branch=master&label=build)
* [plabayo/rama](https://github.com/plabayo/rama) - 模組化服務框架，可移動並轉換網路封包，用於建置 Web 用戶端、伺服器，尤其是 Proxy。
* [ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) - 示範如何將 GraphQL 伺服器作為 [Hasura](https://hasura.io/) 的遠端結構描述。 ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)
* [static-web-server](https://github.com/static-web-server/static-web-server) - 用於提供靜態檔案、速度飛快的非同步網頁伺服器。⚡ [![CI](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml/badge.svg)](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml?query=branch%3Amaster)
* [svenstaro/miniserve](https://github.com/svenstaro/miniserve) - 小型獨立跨平台 CLI 工具，只需下載執行檔，即可透過 HTTP 伺服器提供檔案服務。 [![build badge](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [thecoshman/http](https://github.com/thecoshman/http) - Host These Things Please——可快速簡單託管資料夾的基礎 HTTP 伺服器。
* [TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) - 簡易靜態 HTTP 伺服器。
* [vetis-server/vetis](https://github.com/vetis-server/vetis) - 專為現代 Rust 應用程式打造的極速極簡 HTTP 伺服器。支援虛擬主機、SNI、靜態內容、反向 Proxy、HTTP 1／2／3，以及 Tokio 或 Smol 非同步執行環境！
* [vproxy/0x676e67](https://github.com/0x676e67/vproxy) - 快速的非同步 Rust HTTP／Socks5 Proxy。

### 工作流程自動化

* [cowork-forge](https://github.com/sopaco/cowork-forge) - 以 AI 為核心的多代理平台，透過七階段管線協調專業代理，將構想轉化為可投入正式環境的軟體。 [![release](https://img.shields.io/github/actions/workflow/status/sopaco/cowork-forge/rust.yml?label=Build)](https://github.com/sopaco/cowork-forge/actions/workflows/release.yml)
* [dali-benothmen/woml](https://github.com/dali-benothmen/woml) - WOML（Workflow Orchestration Markup Language）是工作流程自動化標記語言，具備 Rust 執行核心。像 HTML 一樣易讀、像程式碼一樣可版本控制，且如 JavaScript 般強大——沒有視覺化建置器的雜亂，也不限制步驟功能。 [![release](https://github.com/dali-benothmen/woml/actions/workflows/release.yml/badge.svg)](https://github.com/dali-benothmen/woml/actions/workflows/release.yml)
* [SouravRoy-ETL/duckle](https://github.com/SouravRoy-ETL/duckle) - 以視覺操作為先的開源資料工作室（ETL／ELT），完全以 DuckDB 執行。將來源、轉換與接收端拖曳至畫布，便會編譯成純 DuckDB SQL；提供 300 多個連接器與內建 MCP 伺服器。 [![release](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml/badge.svg)](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml)

## 開發工具

* [7df-lab/devo](https://github.com/7df-lab/devo) - 輕量且不受模型綁定的程式設計代理，以單一執行檔運作。快速、省 Token 且高度可自訂。 [![CI](https://github.com/7df-lab/devo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/7df-lab/devo/actions/workflows/ci.yml)
* [aaif-goose/goose](https://github.com/aaif-goose/goose) - 開源本機 AI 代理，可自動執行工程任務。
* [agavra/tuicr](https://github.com/agavra/tuicr) [[tuicr](https://crates.io/crates/tuicr)] - 具備 Vim 快速鍵的程式碼審查 TUI。提供持續差異檢視器、PR 風格留言，並可匯出至 GitHub／GitLab／剪貼簿。支援 Git、jj 與 Mercurial。 [![Crates.io](https://img.shields.io/crates/v/tuicr)](https://crates.io/crates/tuicr)
* [armgabrielyan/deadbranch](https://github.com/armgabrielyan/deadbranch) [[deadbranch](https://crates.io/crates/deadbranch)] - 安全清理過期的 Git 分支。 [![CI](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml)
* [astral-sh/uv](https://github.com/astral-sh/uv) [[uv](https://crates.io/crates/uv)] - 以 Rust 撰寫、速度極快的 Python 套件與專案管理器。 [![CI](https://github.com/astral-sh/uv/workflows/CI/badge.svg)](https://github.com/astral-sh/uv/actions)
* [ATAC](https://github.com/Julien-cpsn/ATAC) - 以 Rust 打造、功能完整的 TUI API 用戶端。ATAC 免費、開源、可離線使用，且不需帳戶。
* [bacon](https://github.com/Canop/bacon) - 在背景檢查 Rust 程式碼，類似 cargo-watch。
* [biome](https://github.com/biomejs/biome) - 專為維護 Web 專案提供功能的工具鏈。Biome 提供可透過 CLI 與 LSP 使用的格式化工具及 Linter。
* [cachix/devenv](https://github.com/cachix/devenv) - 使用 Nix 打造快速、宣告式、可重現且可組合的開發環境。 [![CI](https://github.com/cachix/devenv/actions/workflows/release.yml/badge.svg)](https://github.com/cachix/devenv/actions/workflows/release.yml)
* [claudectl](https://github.com/mercurialsolo/claudectl) [[claudectl](https://crates.io/crates/claudectl)] - Claude Code 自動駕駛工具，採用本機 LLM（ollama／llama.cpp／vLLM）作為核心，學習自動核准或拒絕工具呼叫。支援多工作階段協調、健康監控與支出控管。 [![CI](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml/badge.svg)](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml)
* [clippy](https://crates.io/crates/clippy) - Rust Lint 集合。
* [clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) - 根據 Git 中繼資料產生變更日誌（[conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)）。
* [cloudflare/foundations](https://github.com/cloudflare/foundations) - Foundations 是模組化 Rust 函式庫，旨在協助程式擴充至分散式、正式環境等級的系統。
* [cordx56/rustowl](https://github.com/cordx56/rustowl) [[rustowl](https://crates.io/crates/rustowl)] - 視覺化呈現 Rust 的所有權與生命週期。 [![CI](https://github.com/cordx56/rustowl/actions/workflows/checks.yml/badge.svg?branch=main)](https://github.com/cordx56/rustowl/actions/workflows/checks.yml)
* [create-rust-app](https://github.com/Wulf/create-rust-app) - 執行一個命令即可建置現代 Rust + React 網頁應用程式。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/create-rust-app)
* [dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) - 為 Cargo 專案及其所有相依性建立 ctags／etags。
* [datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - 功能強大的資料庫匿名化工具，規則彈性可調。 [![build badge](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [delta](https://crates.io/crates/git-delta) - 適用於 Git 與差異輸出的語法醒目提示工具。 ![build badge](https://github.com/dandavison/delta/actions/workflows/ci.yml/badge.svg)](https://github.com/dandavison/delta//actions)
* [dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) - `.env` 檔案 Linter。 [![build badge](https://github.com/dotenv-linter/dotenv-linter/actions/workflows/ci.yml/badge.svg)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [enroute-sh/enroute](https://github.com/enroute-sh/enroute) - 在物件儲存空間上執行可程式化 Git 基礎設施。
* [envio](https://github.com/humblepenguinn/envio) - 用於管理環境變數的現代安全 CLI 工具。 [![build badge](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml/badge.svg?branch=main)](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml)
* [Feel-ix-343/markdown-oxide](https://github.com/Feel-ix-343/markdown-oxide) - PKM Markdown Language Server，支援 Obsidian 風格的 Wiki 連結、反向連結與每日筆記，適用於 Neovim、VSCode、Zed、Helix 和 Kakoune。
* [FerrLabs/FerrFlow](https://github.com/FerrLabs/FerrFlow) [[ferrflow](https://crates.io/crates/ferrflow)] - 依 Conventional Commits 產生語意版本、變更日誌及標記版本，支援 monorepo 與 16 種版本檔案格式。 [![build badge](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml)
* [firelock-ai/kin](https://github.com/firelock-ai/kin) - 為人類與 AI 代理打造的圖形原生程式碼儲存庫。Kin 協助你和 AI 代理在變更程式碼前了解可能受影響的部分。
* [Flox](https://github.com/flox/flox) - Flox 將虛擬環境與套件管理器整合為一。
* [forgecode](https://github.com/tailcallhq/forgecode) - 以終端機為基礎的 AI 結對程式設計助理，可產生及編輯程式碼。 [![Website](https://img.shields.io/badge/website-forgecode.dev-blue)](https://forgecode.dev/)
* [frolic](https://github.com/frolicflow/Frolic) - API 層，讓你以十倍速度建置面向客戶的儀表板。
* [fw](https://github.com/brocode/fw) - 提升工作區生產力的工具。 [![Rust](https://github.com/brocode/fw/actions/workflows/rust.yml/badge.svg)](https://github.com/brocode/fw/actions/workflows/rust.yml)
* [fzf-make](https://github.com/kyu08/fzf-make) [[fzf-make](https://crates.io/crates/fzf-make)] - 命令列工具，可透過含預覽視窗的模糊搜尋器執行 make 目標。 [![crates.io](https://img.shields.io/crates/v/fzf-make?style=flatflat-square)](https://crates.io/crates/fzf-make)
* [geiger](https://github.com/geiger-rs/cargo-geiger) - 列出 crate 及其所有相依性中 unsafe 程式碼用量統計的工具。 [![Build Status](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/geiger-rs.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [git-cliff](https://github.com/orhun/git-cliff) - 高度可自訂、遵循 Conventional Commit 規格的變更日誌產生器。 ![https://github.com/orhun/git-cliff/actions](https://img.shields.io/github/actions/workflow/status/orhun/git-cliff/ci.yml?branch=main&label=build)
* [git-journal](https://github.com/saschagrunert/git-journal/) - Git 提交訊息與變更日誌產生框架。
* [git-time-machine](https://github.com/dinakars777/git-time-machine) - 視覺化 Git reflog TUI，可復原 Git 操作失誤。 [![crate](https://img.shields.io/crates/v/git-time-machine.svg)](https://crates.io/crates/git-time-machine) [![build badge](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml/badge.svg)](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml)
* [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) [[gix](https://crates.io/crates/gix)] - 純 Rust Git 實作，提供高效能底層 crates 與 CLI 工具，支援 clone、fetch、status、diff、commit、config、refs 等。 [![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
* [hot-lib-reloader](https://github.com/rksm/hot-lib-reloader-rs) - Rust 程式碼熱重新載入。 [![build badge](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml)
* [intelli-shell](https://github.com/lasantosr/intelli-shell) - 可收藏含佔位符的命令，並隨時搜尋或自動補全。 [![crate](https://img.shields.io/crates/v/intelli-shell.svg)](https://crates.io/crates/intelli-shell) [![build badge](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml/badge.svg)](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml)
* [j178/prek](https://github.com/j178/prek) - 以 Rust 撰寫的 pre-commit 替代方案，速度更快、無相依性且可直接替換。
* [jj-vcs/jj](https://github.com/jj-vcs/jj) - 與 Git 相容的版本控制系統，CLI 簡潔、衝突處理完善，並支援自動 rebase。 [![Release](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
* [just](https://github.com/casey/just) - 方便執行專案專屬任務的命令執行器。
* [mask](https://github.com/jacobdeichert/mask) - 以簡單 Markdown 檔案定義的 CLI 任務執行器。 [![build badge](https://github.com/jacobdeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jacobdeichert/mask/actions?query=workflow%3ACI)
* [mise](https://github.com/jdx/mise) [[mise](https://crates.io/crates/mise)] - 多語言工具版本管理器與任務執行器，是效能更快的 asdf 直接替代方案。 [![build badge](https://github.com/jdx/mise/actions/workflows/test.yml/badge.svg)](https://github.com/jdx/mise/actions/workflows/test.yml)
* [Module Linker](https://github.com/fiatjaf/module-linker) - 擴充功能，可為 GitHub 上 `mod`、`use` 與 `extern crate` 陳述式中的參照加入 `<a>` 連結。
* [Muvon/octocode](https://github.com/Muvon/octocode) [[octocode](https://crates.io/crates/octocode)] - 語意程式碼索引器，具備 GraphRAG 知識圖譜與 MCP 伺服器。採用 tree-sitter AST 剖析、ast-grep 結構搜尋、LanceDB 向量儲存與程式碼簽章檢視；提供 CLI 與 MCP 伺服器模式，供 Claude／Cursor／Windsurf 等 AI 助理使用。 [![CI](https://github.com/Muvon/octocode/actions/workflows/ci.yml/badge.svg)](https://github.com/Muvon/octocode/actions/workflows/ci.yml)
* [persiyanov/herdr-reviewr](https://github.com/persiyanov/herdr-reviewr) - 終端機窗格，可檢視程式設計代理的差異，並將行內評論傳回 Claude Code、Codex、OpenCode 或 Pi。 [![CI](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml/badge.svg)](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml)
* [prefix-dev/pixi](https://github.com/prefix-dev/pixi) [[pixi](https://crates.io/crates/pixi)] - 適用於多語言專案、以 conda 生態系為基礎的快速套件管理與工作流程工具。
* [ptags](https://github.com/dalance/ptags) - 平行執行的通用 ctags Git 儲存庫封裝工具。
* [Racer](https://github.com/racer-rust/racer) - Rust 程式碼補全。
* [reflex-search/reflex](https://github.com/reflex-search/reflex) [[reflex-search](https://crates.io/crates/reflex-search)] - 以本機優先為設計、供 AI 程式設計代理使用的全文程式碼搜尋引擎。採用 Trigram 索引，查詢時間低於 100 毫秒，支援 MCP 伺服器模式與透過 tree-sitter 支援 18 種語言。
* [Rust Search Extension](https://github.com/huhu/rust-search-extension) - 實用的瀏覽器擴充功能，可直接在網址列（omnibox）搜尋 crates 與文件。 [![Build Status](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [Rustup](https://github.com/rust-lang/rustup) - Rust 工具鏈安裝程式。 [![build badge](https://github.com/rust-lang/rustup/actions/workflows/ci.yaml/badge.svg)](https://github.com/rust-lang/rustup/actions)
* [scriptisto](https://github.com/igor-petruk/scriptisto) - 與語言無關的「shebang 直譯器」，讓你以編譯式語言撰寫單檔腳本。 [![Build Status](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [sstraus/tuicommander](https://github.com/sstraus/tuicommander) - 桌面工作區，可在各自的 Git worktree 中平行執行多個 AI 程式設計代理，具備代理狀態偵測、差異檢視、PR 管理及 MCP Proxy 中樞。 [![CI](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml)
* [Terrain](https://github.com/sopaco/terrain) - 以 AI 為核心的工程環境管理工具，讓程式碼庫做好代理就緒準備。
* [typos](https://github.com/crate-ci/typos) [[typos-cli](https://crates.io/crates/typos-cli)] - 原始碼拼字檢查器。
* [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) - 統一 Web 開發工具鏈，整合 Vite、Vitest、Oxlint、Rolldown 等，採 Rust 驅動的單一 CLI（`vp`）。
* [VT Code](https://crates.io/crates/vtcode) - 終端機程式設計代理，結合現代 TUI 與由 tree-sitter 和 ast-grep 驅動的深度語意程式碼理解。
* [Wilfred/difftastic](https://github.com/Wilfred/difftastic) [[difftastic](https://crates.io/crates/difftastic)] - 可理解語法、支援 30 多種程式語言的結構差異工具。
* [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) [[lean-ctx](https://crates.io/crates/lean-ctx)] - AI 程式設計代理的情境執行環境：MCP 伺服器與 Shell Hook，可壓縮工具及終端機輸出以降低 LLM Token 用量；採用 Tree-sitter 剖析與工作階段快取。 [![CI](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml/badge.svg)](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml)

### 建置系統

* [better-fullstack](https://github.com/Marve10s/Better-Fullstack) - 端對端全端專案樣板工具，支援 Rust（Axum、Actix Web、Leptos、Dioxus、SeaORM、SQLx、tonic、async-graphql），以及 TypeScript、Go、Python；產生的程式碼可供你或 AI 代理直接使用。
* [Cargo](https://crates.io/) - Rust 套件管理器。
  * [cargo-all-features](https://github.com/frewsxcv/cargo-all-features) - 可設定的子命令，簡化各種功能組合下的測試、建置等工作。 [![CI](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml/badge.svg)](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml)
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) - 用於比較微型基準測試的工具。
  * [cargo-bins/cargo-binstall](https://github.com/cargo-bins/cargo-binstall) [[cargo-binstall](https://crates.io/crates/cargo-binstall)] - 快速安裝 Rust crates 的二進位安裝器，會下載預先建置的產物，而非從原始碼編譯。 [![CI](https://github.com/cargo-bins/cargo-binstall/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-bins/cargo-binstall/actions)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) - Cargo 擴充功能，可運用 meta-rust 中的 classes 產生 BitBake recipes。
  * [cargo-cache](https://crates.io/crates/cargo-cache) - 檢查／管理／清理 Cargo 快取（`~/.cargo/`／`${CARGO_HOME}`），並列印大小等資訊。 [![Build Status](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) - 封裝 `cargo rustc -- -Zno-trans` 的工具；若只需正確性檢查，可藉此加快編譯。
  * [cargo-commander](https://crates.io/crates/cargo-commander) - Cargo 子命令，可像 `package.json` 的 scripts 區段一樣執行 CLI 命令。 [![Build and test](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml/badge.svg)](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml)
  * [cargo-count](https://crates.io/crates/cargo-count) - 列出 Cargo 專案的原始碼數量與詳細資訊，包括 unsafe 統計資料。
  * [cargo-deb](https://crates.io/crates/cargo-deb) - 產生二進位 Debian 套件。
  * [cargo-depgraph](https://crates.io/crates/cargo-depgraph) - 使用 cargo metadata 與 graphviz 為 Cargo 專案建立相依性圖。
  * [cargo-do](https://crates.io/crates/cargo-do) - 依序執行多個 Cargo 命令。
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) - Cargo 擴充功能，可使用樹內 eclasses 產生 ebuilds。
  * [cargo-edit](https://crates.io/crates/cargo-edit) - 透過命令列讀取／寫入 Cargo.toml，以新增及列出相依性。
  * [cargo-generate](https://github.com/cargo-generate/cargo-generate) - 利用既有 Git 儲存庫作為範本來產生 Rust 專案。
  * [cargo-info](https://crates.io/crates/cargo-info) - 透過命令列查詢 crates.io 的 crate 詳細資訊。
  * [cargo-license](https://crates.io/crates/cargo-license) - Cargo 子命令，可快速檢視所有相依套件的授權。
  * [cargo-limit](https://crates.io/crates/cargo-limit) - 降低雜訊的 Cargo：修正錯誤前略過警告，並提供 Neovim 整合等功能。 [![build badge](https://github.com/cargo-limit/cargo-limit/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-limit/cargo-limit/actions)
  * [cargo-machete](https://github.com/bnjbvr/cargo-machete) [[cargo-machete](https://crates.io/crates/cargo-machete)] - 簡單的工具，可偵測 Cargo.toml 中未使用的相依性。
  * [cargo-make](https://crates.io/crates/cargo-make) - 任務執行器與建置工具。 [![build badge](https://github.com/sagiegurari/cargo-make/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/cargo-make/actions)
  * [cargo-modules](https://crates.io/crates/cargo-modules) - Cargo 外掛，以樹狀檢視呈現 crate 模組概況。
  * [cargo-multi](https://crates.io/crates/cargo-multi) - 對多個 crate 執行指定的 Cargo 命令。
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) - 顯示 Rust 相依套件是否有更新版本，或已經過期。
  * [cargo-rdme](https://github.com/orium/cargo-rdme) [[cargo-rdme](https://crates.io/crates/cargo-rdme)] - Cargo 子命令，可從 crate 文件建立 README。 [![build badge](https://github.com/orium/cargo-rdme/workflows/CI/badge.svg)](https://github.com/orium/cargo-rdme/actions?query=workflow%3ACI)
  * [cargo-release](https://crates.io/crates/cargo-release) - 用於發布由 Git 管理的 Cargo 專案：建置、標記版本、發布、產生文件並推送。 [![Rust](https://github.com/crate-ci/cargo-release/actions/workflows/ci.yml/badge.svg)](https://github.com/crate-ci/cargo-release/actions/workflows/rust.yml)
  * [cargo-script](https://crates.io/crates/cargo-script) - 讓使用者快速輕鬆執行可使用 Cargo 套件生態系的 Rust「腳本」。
  * [cargo-udeps](https://github.com/est31/cargo-udeps) [[cargo-udeps](https://crates.io/crates/cargo-udeps)] - 尋找未使用的相依性。
  * [cargo-update](https://crates.io/crates/cargo-update) - Cargo 子命令，可檢查並更新已安裝的執行檔。
  * [cargo-watch](https://crates.io/crates/cargo-watch) - Cargo 工具，可在原始碼變更時編譯專案。
  * [dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) - 展開原始碼中的巨集。
* CMake
  * [Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) - 協助將 Rust 函式庫整合至 CMake 專案。
  * [SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) - 示範如何在 Rust 中使用 CMake 的範例專案。
* [facebook/buck2](https://github.com/facebook/buck2) - [Buck2](https://buck2.build/) 是以 Rust 撰寫的大型建置工具。
* [Fleet](https://github.com/suptejas/fleet) [[fleet-rs](https://crates.io/crates/fleet-rs)] - 速度飛快的 Rust 建置工具。
* GitHub actions
  * [icepuma/rust-action](https://github.com/icepuma/rust-action) - Rust GitHub Action。
* [Nix](https://nixos.org/)
  * [nix-community/fenix](https://github.com/nix-community/fenix) - 供 Nix 使用的 Rust 工具鏈與 rust-analyzer nightly 版本。 [![build-badge](https://github.com/nix-community/fenix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/fenix/actions/workflows/ci.yml)
* [pantsbuild/pants](https://github.com/pantsbuild/pants) - [Pants](https://www.pantsbuild.org/) 是以 Rust 打造的快速、可擴充且易用建置系統，適用於各種規模的程式碼庫。
* [rolldown/rolldown](https://github.com/rolldown/rolldown) - 以 Rust 撰寫的 JavaScript／TypeScript 打包工具，目標是成為 Vite 未來採用的打包器。
* [rui314/mold](https://github.com/rui314/mold) - 適用於 Linux、macOS 和 Windows 的現代高速連結器（ELF、Mach-O、PE）。
* [tracemachina/nativelink](https://github.com/TraceMachina/nativelink) - [NativeLink](https://nativelink.com) 是以 Rust 撰寫的後端遠端執行平台，適用於 [Buck2](https://buck2.build/)、[Bazel](https://bazel.build/)、[Pants](https://www.pantsbuild.org/) 等用戶端建置系統。 [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TraceMachina/nativelink/badge)](https://securityscorecards.dev/viewer/?uri=github.com/TraceMachina/nativelink) [![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8050/badge)](https://www.bestpractices.dev/projects/8050)
* [vercel/turborepo](https://github.com/vercel/turborepo) - 以 Rust 撰寫、供 JavaScript 與 TypeScript monorepo 使用的高效能建置系統，具備增量運算、遠端快取及平行任務執行功能。
* [wislertt/zerv](https://github.com/wislertt/zerv) [[zerv](https://crates.io/crates/zerv)] - 動態版本管理工具，可根據任意 Git 狀態為每次建置產生版本，並輸出 SemVer、PEP 440 與 CalVer 格式。 [![CI](https://github.com/wislertt/zerv/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/wislertt/zerv/actions/workflows/cd.yml)

### 除錯

* GDB
  * [gdbgui](https://github.com/cs01/gdbgui) - 以瀏覽器為基礎的 GDB 前端，可除錯 C、C++、Rust 和 Go。
* [godzie44/BugStalker](https://github.com/godzie44/BugStalker) - 適用於 Linux x86-64 的現代除錯器，以 Rust 撰寫，專為 Rust 程式而設計。
* [kxxt/tracexec](https://github.com/kxxt/tracexec) [[tracexec](https://crates.io/crates/tracexec)] - 追蹤 execve{,at} 與執行前行為，並可作為除錯器啟動器。
* LLDB
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - [Visual Studio Code](https://code.visualstudio.com/) 的 LLDB 擴充功能。

### 部署

* Docker
  * [emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) - 用於編譯靜態 Rust 二進位檔的 Docker 映像檔，採用 musl-libc 與 musl-gcc，並包含實用 C 函式庫的靜態版本。
  * [kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) - 超小型 Rust Docker 映像檔的範例專案。
  * [lenra-io/dofigen](https://github.com/lenra-io/dofigen) [[dofigen](https://crates.io/crates/dofigen/)] - 使用簡化的 YAML 或 JSON 描述產生 Dockerfile。 ![Rust CI](https://github.com/lenra-io/dofigen/actions/workflows/build_ci.yml/badge.svg)
  * [liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) - 支援多版本（含 musl 工具）的 Rust Docker 映像檔。
  * [LukeMathWalker/cargo-chef](https://github.com/LukeMathWalker/cargo-chef) - 提供工具與預先建置映像檔，可在 Docker 建置期間快取並編譯遠端相依性。
  * [moghtech/komodo](https://github.com/moghtech/komodo) - 用於在多台伺服器建置與部署軟體的工具，提供網頁 UI、API，且不限制伺服器數量。
  * [rust-cross/rust-musl-cross](https://github.com/rust-cross/rust-musl-cross) - 使用 musl-cross 編譯靜態 Rust 二進位檔的 Docker 映像檔。 [![Build](https://github.com/rust-cross/rust-musl-cross/workflows/Build/badge.svg)](https://github.com/rust-cross/rust-musl-cross/actions?query=workflow%3ABuild)
  * [rust-lang/docker-rust](https://github.com/rust-lang/docker-rust) - 官方 Rust Docker 映像檔。
  * [Stavrospanakakis/is_ready](https://github.com/Stavrospanakakis/is_ready) - 等待多個服務就緒。 ![Build](https://github.com/Stavrospanakakis/is_ready/actions/workflows/release.yml/badge.svg)
* Heroku
  * [emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) - 適用於 Heroku Rust 應用程式的 buildpack。
* [release-plz](https://github.com/release-plz/release-plz) [[release-plz](https://crates.io/crates/release-plz)] - 從 CI 發布 crates，支援產生變更日誌與 SemVer 檢查。 [![build badge](https://github.com/release-plz/release-plz/workflows/CI/badge.svg)](https://github.com/release-plz/release-plz/actions)

### 嵌入式

[Rust Embedded](https://rust-embedded.org/) focuses on improving the end-to-end experience of using Rust in resource-constrained environments and non-traditional platforms. See [awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust) for a curated, and more extended list of embedded Rust resources.

* Arduino
  * [avr-rust/ruduino](https://github.com/avr-rust/ruduino) - 適用於 Arduino Uno 的可重複使用元件。
* Cross compiling
  * [japaric/rust-cross](https://github.com/japaric/rust-cross) - Rust 程式交叉編譯須知大全。
  * [japaric/xargo](https://github.com/japaric/xargo) - 輕鬆將 Rust 程式交叉編譯至 ARM Cortex-M 等自訂裸機目標平台。
* Development Tools
  * [matheuswhite/scope-rs](https://github.com/matheuswhite/scope-rs) [[scope-monitor](https://crates.io/crates/scope-monitor)] - 跨平台序列埠與 RTT 監控 TUI，支援十六進位／@tag 輸入巨集、搜尋、工作階段錄製及 Lua 外掛。 [![Build Status](https://github.com/matheuswhite/scope-rs/actions/workflows/build.yml/badge.svg)](https://github.com/matheuswhite/scope-rs/actions)
  * [probe-rs/probe-rs](https://github.com/probe-rs/probe-rs) [[probe-rs-tools](https://crates.io/crates/probe-rs-tools)] - 嵌入式除錯工具組，可燒錄與除錯 ARM 和 RISC-V 微控制器。
  * [Vaishnav-Sabari-Girish/ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - 附帶繪圖器 TUI 的極簡序列埠監控器。
* Espressif
  * [esp-rs](https://github.com/esp-rs) - 多個社群專案的集合，致力於在 Espressif Systems 生產的各種 SoC 與模組上使用 Rust 程式語言。
* Firmware
  * [oreboot/oreboot](https://github.com/oreboot/oreboot) - oreboot 是從 coreboot 分支而來、移除 C 並以 Rust 撰寫的專案。
* nRF
  * [nrf-rs/nrf-hal](https://github.com/nrf-rs/nrf-hal) - nRF 系列裝置的 Rust HAL。

### FFI

另請參閱[外部函式介面（FFI）](https://doc.rust-lang.org/book/first-edition/ffi.html)、[Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/)（一系列從其他語言呼叫 Rust 程式碼的範例），以及[以 Rust 撰寫的 FFI 範例](https://github.com/alexcrichton/rust-ffi-examples)。

* C
  * [gtk-rs/gir](https://github.com/gtk-rs/gir) - 從 GObject C 函式庫產生安全 Rust 繫結的程式碼產生器。
  * [mozilla/cbindgen](https://github.com/mozilla/cbindgen) - 從 Rust 原始碼產生 C 標頭檔。用於 Gecko 的 WebRender。
  * [Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) - 從 Rust 原始碼產生 C 標頭檔。
  * [trevyn/librclone](https://github.com/trevyn/librclone) [[librclone](https://crates.io/crates/librclone)] - librclone C 函式庫的 Rust 繫結。
* C#
  * [csbindgen](https://github.com/Cysharp/csbindgen) - 為 Rust 原始碼產生 C# 繫結。
* C++
  * [dtolnay/cxx](https://github.com/dtolnay/cxx) - Rust 與 C++ 之間安全的互通方式。 [![build badge](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [rust-cpp](https://crates.io/crates/cpp) - 可直接在 Rust 中嵌入 C++ 程式碼。 [![Build status](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
  * [rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) - Rust 繫結產生器。
* Erlang
  * [rusterlium/rustler](https://github.com/rusterlium/rustler) - 安全的 Rust 橋接工具，用於建立 Erlang NIF 函式。
* Java
  * [bennettanderson/rjni](https://github.com/benanders/rjni) - 在 Rust 中使用 Java。
  * [drrb/java-rust-example](https://github.com/drrb/java-rust-example) - 在 Java 中使用 Rust。
  * [j4rs](https://crates.io/crates/j4rs) - 在 Rust 中使用 Java。
  * [jni](https://crates.io/crates/jni) - 在 Java 中使用 Rust。
  * [jni-sys](https://crates.io/crates/jni-sys) - 對應 jni.h 的 Rust 定義。
  * [rucaja](https://crates.io/crates/rucaja) - 在 Rust 中使用 Java。
* Lua
  * [jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) - Lua 5.3 的 Rust 繫結。
  * [lilyball/rust-lua](https://github.com/lilyball/rust-lua) - Lua 5.1 的安全 Rust 繫結。
  * [mlua-rs/mlua](https://github.com/mlua-rs/mlua) - 高階 Lua 5.4／5.3／5.2／5.1（含 LuaJIT）與 Roblox Luau Rust 繫結，支援 async／await。 [![build badge](https://github.com/mlua-rs/mlua/workflows/CI/badge.svg)](https://github.com/mlua-rs/mlua/actions)
  * [tickbh/td_rlua](https://github.com/tickbh/td_rlua) [[td_rlua](https://crates.io/crates/td_rlua)] - 零成本的 Rust Lua 5.3 高階封裝。
  * [tomaka/hlua](https://github.com/tomaka/hlua) - 用於與 Lua 介接的 Rust 函式庫。
* mruby
  * [anima-engine/mrusty](https://github.com/anima-engine/mrusty) - mruby 的安全 Rust 繫結。
* Node.js
  * [infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - 輕鬆使用 Rust 建立 Node.js 模組。
  * [neon-bindings/neon](https://github.com/neon-bindings/neon) - 用於撰寫安全快速原生 Node.js 模組的 Rust 繫結。
  * [zhangyuang/node-ffi-rs](https://github.com/zhangyuang/node-ffi-rs) - 以 Rust 和 N-API 撰寫的模組，為 Node.js 提供介面（FFI）功能。
* Objective-C
  * [SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) - Objective-C Runtime 的 Rust 繫結與封裝。
* PHP
  * [phper-framework/phper](https://github.com/phper-framework/phper) - 此框架可盡可能以純 Rust、安全地撰寫 PHP 擴充功能。
* Prolog
  * [mthom/scryer-prolog](https://github.com/mthom/scryer-prolog/) - Scryer Prolog 是以 Rust 撰寫的自由軟體 ISO Prolog 系統。
* Python
  * [dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) - Python 繫結。
  * [getsentry/milksnake](https://github.com/getsentry/milksnake) - Python setuptools 擴充功能，能以最可攜的方式在 Python wheels 中散布動態連結函式庫。
  * [PyO3/PyO3](https://github.com/PyO3/PyO3) - Python 直譯器的 Rust 繫結。
  * [RustPython](https://github.com/RustPython/RustPython) - 以 Rust 撰寫的 Python 直譯器。 [![Build Status](https://github.com/RustPython/RustPython/workflows/CI/badge.svg)](https://github.com/RustPython/RustPython/actions?query=workflow%3ACI)
* Ruby
  * [d-unsed/ruru](https://github.com/d-unsed/ruru) - 以 Rust 撰寫的原生 Ruby 擴充功能。
  * [danielpclark/rutie](https://github.com/danielpclark/rutie) - 以 Rust 撰寫原生 Ruby 擴充功能，並支援反向呼叫 Rust。
* Web Assembly
  * [rhysd/wain](https://github.com/rhysd/wain) - wain：以安全 Rust 從零打造、零相依性的 WebAssembly 直譯器。 [![build badge](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)
  * [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen) - 促進 wasm 模組與 JS 之間高階互動的專案。
  * [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) - :package: :sparkles: 將 wasm 打包並發布至 npm！

### 格式化工具

* [astral-sh/ruff](https://github.com/astral-sh/ruff) - 速度極快的 Python Linter 與程式碼格式化工具。 [![Actions status](https://github.com/astral-sh/ruff/workflows/CI/badge.svg)](https://github.com/astral-sh/ruff/actions)
* [dprint](https://github.com/dprint/dprint) - 可插拔且可設定的程式碼格式化平台。 [![build badge](https://github.com/dprint/dprint/workflows/CI/badge.svg)](https://github.com/dprint/dprint/actions?query=workflow%3ACI)
* [Prettier Rust](https://github.com/jinxdash/prettier-plugin-rust) - 遵循主張的 Rust 程式碼格式化工具，可自動修正不良語法（[Prettier](https://prettier.io/) 社群外掛）。
* [rustfmt](https://github.com/rust-lang/rustfmt) - 由 Rust 團隊維護並隨 Cargo 提供的 Rust 程式碼格式化工具。
* [rvben/rumdl](https://github.com/rvben/rumdl) [[rumdl](https://crates.io/crates/rumdl)] - 以 Rust 撰寫的快速 Markdown Linter 與格式化工具。 [![CI](https://github.com/rvben/rumdl/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rvben/rumdl/actions/workflows/ci.yml)

### IDE

另請參閱 [Rust 工具](https://rust-lang.org/tools/)。

  * [Eclipse](https://www.eclipse.org/)
    * [Eclipse Corrosion](https://github.com/eclipse-corrosion/corrosion) - Eclipse IDE 的 Rust 開發外掛，整合 Rust Analyzer Language Server、Cargo Runner 與 GDB 除錯器，提供豐富的編輯體驗。
  * [Emacs](https://www.gnu.org/software/emacs/)
    * [emacs-racer](https://github.com/racer-rust/emacs-racer) - 自動補全（另請參閱 [company](https://company-mode.github.io) 與 [auto-complete](https://github.com/auto-complete/auto-complete)）。
    * [flycheck-rust](https://github.com/flycheck/flycheck-rust) - [Flycheck](https://github.com/flycheck/flycheck) 的 Rust 支援。
    * [rust-mode](https://github.com/rust-lang/rust-mode) - Rust Major Mode。
    * [rustic](https://github.com/emacs-rustic/rustic) - Emacs 的 Rust 開發環境。 [![build badge](https://github.com/emacs-rustic/rustic/workflows/CI/badge.svg)](https://github.com/emacs-rustic/rustic/actions?query=workflow%3ACI)
  * [gitpod.io](https://gitpod.io) - 以 Rust Language Server 為基礎、完整支援 Rust 的線上 IDE。
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) - 自 3.22.2 版起原生支援 Rust 與 Cargo。
  * [IntelliJ](https://www.jetbrains.com/idea/)
    * [intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) - IntelliJ Platform 的 Rust 外掛。
  * [Kakoune](http://kakoune.org/)
    * [kakoune-lsp](https://github.com/kakoune-lsp/kakoune-lsp/) - [LSP](https://microsoft.github.io/language-server-protocol/) 用戶端，以 Rust 實作並開箱即支援 rls。
  * [lapce](https://github.com/lapce/lapce) - 以 Rust 撰寫的極速強大程式碼編輯器。 [![build badge](https://github.com/lapce/lapce/actions/workflows/release.yml/badge.svg)](https://github.com/lapce/lapce/actions/workflows/release.yml)
  * [Ride](https://github.com/madeso/ride) - Rust IDE。
  * [RustRover](https://www.jetbrains.com/rust/) - JetBrains 推出的強大 Rust IDE，個人非商業用途免費。
  * [Sublime Text](https://www.sublimetext.com/)
    * [rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) - 官方 Rust 套件。
  * [Vim](https://vim.sourceforge.io/) - 廣受使用的文字編輯器。
    * [autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) - [LSP](https://microsoft.github.io/language-server-protocol/) 用戶端，以 Rust 實作並開箱即支援 rls。
    * [cargo.nvim](https://github.com/nwiizo/cargo.nvim) - Neovim 外掛，可無縫整合 Cargo 命令。
    * [crates.nvim](https://github.com/Saecki/crates.nvim) - 協助管理 crates.io 相依套件的外掛。
    * [rust.vim](https://github.com/rust-lang/rust.vim) - 提供檔案偵測、語法醒目提示、格式化、Syntastic 整合等功能。
    * [vim-racer](https://github.com/racer-rust/vim-racer) - 讓 Vim 使用 [Racer](https://github.com/racer-rust/racer) 進行 Rust 程式碼補全與導覽。
  * Visual Studio
    * [PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) - Visual Studio 的 Rust 擴充功能。 [![Build status](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - LLDB 擴充功能。
    * [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - 輕鬆管理相依性。
    * [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - VS Code 的 TOML 支援。
    * [Prettier - Code formatter (Rust)](https://marketplace.visualstudio.com/items?itemName=jinxdash.prettier-rust) - 遵循主張的 Rust 程式碼格式化工具，可自動修正不良語法（[Prettier](https://prettier.io/) 社群外掛）。
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - RLS 的替代 Rust Language Server。

### 效能分析

* [Bencher](https://github.com/bencherdev/bencher) - 持續基準測試工具組，專為在 CI 中捕捉效能退化而設計。
* [bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) - 以統計資料為導向的基準測試函式庫。
* [Bytehound](https://github.com/koute/bytehound) - Linux 記憶體分析器。
* [cong-or/hud](https://github.com/cong-or/hud) - 找出阻塞 Tokio 執行環境的原因。零埋點 eBPF 效能分析器。
* [Divan](https://github.com/nvzqz/divan) - 簡單而強大的基準測試函式庫，提供配置分析功能。
* [ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) - 碼錶函式庫。
* FlameGraphs
  * [llogiq/flame](https://github.com/llogiq/flame) - Rust 專用的侵入式火焰圖分析工具。
* [g3bench](https://github.com/bytedance/g3) - 基準測試工具，支援 HTTP 1.x、HTTP 2、HTTP 3、TLS 交握、DNS 與 Cloudflare Keyless。
* [pawurb/hotpath](https://github.com/pawurb/hotpath-rs) - 簡易效能分析器，可精確顯示程式碼耗時與配置記憶體的位置。 [![GH Actions](https://github.com/pawurb/hotpath-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pawurb/hotpath-rs/actions)
* [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) - 命令列基準測試工具。

### 服務

* [deepwiki-rs](https://github.com/sopaco/deepwiki-rs) - 將程式碼庫轉化為專業架構文件。 [![crates.io](https://img.shields.io/crates/v/deepwiki-rs?logo=rust)](https://crates.io/crates/deepwiki-rs)
* [deps.rs](https://github.com/deps-rs/deps.rs) - 偵測過期或不安全的相依套件。
* [docs.rs](https://docs.rs) - 自動產生 crates 文件。

### 靜態分析

[[assert](https://crates.io/keywords/assert), [static](https://crates.io/keywords/static)]

* [cargo-coupling](https://github.com/nwiizo/cargo-coupling) - 使用 Vlad Khononov《Balancing Coupling in Software Design》框架分析 Rust 耦合關係的工具。
* [creusot-rs/creusot](https://github.com/creusot-rs/creusot) - 演繹式 Rust 驗證器，將程式碼轉換至 Why3 驗證平台，以證明不存在 Panic、溢位或斷言失敗。
* [dupehound](https://github.com/Rafaelpta/dupehound) [[dupehound](https://crates.io/crates/dupehound)] - 重複程式碼偵測器，使用函式本體指紋（Winnowing），即使複製後重新命名也能找出。提供儲存庫冗餘分數、重複歷史圖表，以及指出原始函式以供重用的 CI 閘門。支援 Rust 與另外 11 種語言。 [![CI](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml)
* [kucherenko/jscpd](https://github.com/kucherenko/jscpd) [[jscpd](https://crates.io/crates/jscpd)] - 原始碼複製／貼上偵測器，可在 220 多種檔案格式中尋找重複區塊。 [![CI](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml)
* [MIRAI](https://github.com/endorlabs/mirai) - 在 Rust 中階中間表示（MIR）上執行的抽象直譯器。 [![Continuous Integration](https://github.com/endorlabs/mirai/actions/workflows/rust.yml/badge.svg)](https://github.com/endorlabs/mirai/actions/workflows/rust.yml)
* [RAPx](https://github.com/safer-rust/RAPx) - 協助 Rust 程式設計師開發及使用進階靜態分析工具的平台，功能超越 rustc 編譯器內建工具。
* [static_assertions](https://crates.io/crates/static_assertions) - 編譯時期斷言，確保不變條件成立。
* [verus-lang/verus](https://github.com/verus-lang/verus) - 適用於低階系統程式碼的已驗證 Rust。
* [zizmorcore/zizmor](https://github.com/zizmorcore/zizmor) [[zizmor](https://crates.io/crates/zizmor)] - GitHub Actions 靜態分析工具，可找出範本注入、憑證洩漏、權限過大及冒名提交等安全問題。 [![CI](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml/badge.svg)](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml)

### 測試

[[test](https://crates.io/keywords/test), [testing](https://crates.io/keywords/testing)]
* Assertions and Matchers
  * [googletest-json-serde](https://crates.io/crates/googletest-json-serde) [![Latest Version](https://img.shields.io/crates/v/googletest-json-serde.svg)](https://crates.io/crates/googletest-json-serde) - 一組供 googletest-rust 使用的 JSON 比對器，支援路徑、陣列與物件。 [![Build Status](https://github.com/chege/googletest-json-serde/actions/workflows/ci.yaml/badge.svg)](https://github.com/chege/googletest-json-serde/actions)
* Code Coverage
  * [minikin/cargo-crap](https://github.com/minikin/cargo-crap) [[cargo-crap](https://crates.io/crates/cargo-crap)] - 結合圈複雜度與 LCOV 覆蓋率（CRAP 指標）找出複雜且未測試的函式，並依分數設定 CI 閘門。
  * [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) [[supercov](https://crates.io/crates/supercov)] - 為程式設計代理提供程式碼品質與測試覆蓋率資訊：Jev 會為每個原始碼檔案評分，讓代理知道該優先修正哪些項目。 [![CI](https://github.com/supercorp-ai/supercov/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/supercorp-ai/supercov/actions)
  * [tarpaulin](https://crates.io/crates/cargo-tarpaulin) - 程式碼覆蓋率工具。
* Continuous Integration
  * [trust](https://github.com/japaric/trust) - Travis CI 與 AppVeyor 範本，可在五種架構測試 Rust crate，並為 Linux、macOS 與 Windows 發布二進位版本。
* Frameworks and Runners
  * [AlKass/polish](https://github.com/AlKass/polish) - 迷你測試／測試驅動開發框架。 [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
  * [bitfield/cargo-testdox](https://github.com/bitfield/cargo-testdox) [[cargo-testdox](https://crates.io/crates/cargo-testdox)] - 將 Rust 測試轉為文件。 [![CI](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml)
  * [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - Cargo 擴充功能，簡化在智慧型手機及其他小型處理器裝置上執行函式庫測試與基準測試。
  * [cucumber](https://crates.io/crates/cucumber) [![Latest Version](https://img.shields.io/crates/v/cucumber.svg)](https://crates.io/crates/cucumber) - Rust 的 Cucumber 測試框架實作。完全原生，無需外部測試執行器或相依套件。 [![Build Status](https://github.com/cucumber-rs/cucumber/actions/workflows/ci.yml/badge.svg)](https://github.com/cucumber-rs/cucumber/actions)
  * [d-e-s-o/test-log](https://github.com/d-e-s-o/test-log) [[test-log](https://crates.io/crates/test-log)] - `#[test]` 屬性的替代方案，可在執行測試前初始化日誌及／或追蹤基礎設施。 [![GitHub Workflow Status](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml)
  * [demonstrate](https://crates.io/crates/demonstrate) - 宣告式測試框架。
  * [GoogleTest Rust](https://crates.io/crates/googletest) - 以 C++ 測試函式庫 GoogleTest 為基礎的強大測試斷言框架。 [![Build Status](https://github.com/google/googletest-rust/workflows/CI/badge.svg)](https://github.com/google/googletest-rust/actions?query=workflow%3ACI+branch%3Amain)
  * [hovinen/test-that](https://github.com/hovinen/test-that) [[test-that](https://crates.io/crates/test-that)] - Rust 斷言函式庫，以 GoogleTest Rust 為基礎，由其原始作者打造。 [![Build Status](https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg)](https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain)
  * [mitsuhiko/insta](https://github.com/mitsuhiko/insta) [[insta](https://crates.io/crates/insta)] - Rust 快照測試函式庫。 [![Build Status](https://github.com/mitsuhiko/insta/workflows/Tests/badge.svg)](https://github.com/mitsuhiko/insta/actions)
  * [nextest-rs/nextest](https://github.com/nextest-rs/nextest) [[cargo-nextest](https://crates.io/crates/cargo-nextest)] - 新世代 Rust 測試執行器，支援平行執行測試、加快測試速度、進階篩選與豐富輸出。 [![cargo-nextest on crates.io](https://img.shields.io/crates/v/cargo-nextest)](https://crates.io/crates/cargo-nextest)
  * [padamson/playwright-rust](https://github.com/padamson/playwright-rust) [[playwright-rs](https://crates.io/crates/playwright-rs)] - Microsoft Playwright 的 Rust 繫結：支援跨瀏覽器端對端測試（Chromium、Firefox、WebKit）、自動等待定位器與追蹤擷取。 [![CI](https://github.com/padamson/playwright-rust/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/padamson/playwright-rust/actions/workflows/test.yml)
  * [palfrey/serial_test](https://github.com/palfrey/serial_test) [[serial_test](https://crates.io/crates/serial_test)] - 以序列方式執行測試，可一次執行全部或指定群組。 [![CI](https://github.com/palfrey/serial_test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/palfrey/serial_test/actions/workflows/ci.yml)
  * [rlt](https://github.com/wfxr/rlt) - 通用負載測試框架，支援即時 TUI。
  * [rstest](https://crates.io/crates/rstest) - 以 Fixture 為基礎的測試框架。 [![Build Status](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
  * [speculate](https://crates.io/crates/speculate) - 受 RSpec 啟發的極簡測試框架。
* Mocking and Test Data
  * [asomers/mockall](https://github.com/asomers/mockall) [[mockall](https://crates.io/crates/mockall)] - 功能強大的 Mock 物件函式庫。 [![CI](https://github.com/asomers/mockall/actions/workflows/ci.yml/badge.svg)](https://github.com/asomers/mockall/actions/workflows/ci.yml)
  * [bcheidemann/fixtures-rs](https://github.com/bcheidemann/fixtures-rs/tree/main/fixtures) [[fixtures](https://crates.io/crates/fixtures)] - 使用 Glob 模式從 Fixtures 產生測試的程序巨集。
  * [fake-rs](https://github.com/cksac/fake-rs) - 產生假資料的函式庫。
  * [goldenfile](https://github.com/calder/rust-goldenfile) [[goldenfile](https://crates.io/crates/goldenfile)] - 提供簡單 API 以進行 Golden File 測試的函式庫。
  * [httpmock](https://github.com/httpmock/httpmock) - HTTP Mock。 [![Build](https://github.com/httpmock/httpmock/actions/workflows/build.yml/badge.svg)](https://github.com/httpmock/httpmock/actions/workflows/build.yml)
  * [mockiato](https://crates.io/crates/mockiato) - 嚴謹而友善、適用於不穩定 Rust 2018 版本的 Mock 函式庫。
  * [mockito](https://crates.io/crates/mockito) - HTTP Mock。
  * [mocktail](https://github.com/IBM/mocktail) [![mocktail](https://img.shields.io/crates/v/mocktail)](https://crates.io/crates/mocktail) - Rust 的 HTTP 與 gRPC 伺服器 Mock 工具。 ![build](https://github.com/IBM/mocktail/actions/workflows/build.yml/badge.svg)
  * [nrxus/faux](https://github.com/nrxus/faux/) [![Latest Version](https://img.shields.io/crates/v/faux.svg)](https://crates.io/crates/faux) - 從結構體建立 Mock 的函式庫。 ![build](https://github.com/nrxus/faux/workflows/test/badge.svg?branch=master)
  * [synth](https://github.com/shuttle-hq/synth/) - 以宣告方式產生資料庫資料。 [![build](https://github.com/shuttle-hq/synth/actions/workflows/synth-test.yml/badge.svg)](https://github.com/shuttle-hq/synth)
* Mutation Testing
  * [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) [[cargo-mutants](https://crates.io/crates/cargo-mutants)] - 透過注入變異找出測試不足的程式碼，無需變更原始碼。 [![build badge](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml/badge.svg?branch=main&event=push)](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml?query=branch%3Amain)
  * [mutagen](https://github.com/llogiq/mutagen) [[mutagen](https://crates.io/crates/mutagen)] - 原始碼層級的變異測試框架（僅限 Nightly）。
* Property Testing and Fuzzing
  * [Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident) - Solana 智慧合約模糊測試框架，支援手動引導測試、流程式序列與屬性式驗證。
  * [proptest](https://crates.io/crates/proptest) - 受 Python [Hypothesis](https://hypothesis.works/) 框架啟發的屬性測試框架。
  * [quickcheck](https://crates.io/crates/quickcheck) - [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1) 的 Rust 實作。
  * [rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) - 使用 [AFL](https://lcamtuf.coredump.cx/afl/) 的 Rust Fuzzer。

### 轉譯

* [aleph-lang/aleph_ollama](https://github.com/aleph-lang/aleph_ollama) [[aleph_ollama](https://crates.io/crates/aleph_ollama)] - 使用本機 Ollama API、由 AI 驅動的原始碼翻譯工具。
* [BayesWitnesses/m2cgen](https://github.com/BayesWitnesses/m2cgen) - CLI 工具，可將訓練完成的傳統機器學習模型轉譯為原生 Rust 程式碼，且零相依性。
* [immunant/c2rust](https://github.com/immunant/c2rust) - 以 Clang／LLVM 為基礎打造的 C 轉 Rust 翻譯器與交叉檢查器。
* [jameysharp/corrode](https://github.com/jameysharp/corrode) - 以 Haskell 撰寫的 C 轉 Rust 翻譯器。

### 通道

* [ekzhang/bore](https://github.com/ekzhang/bore) [[bore-cli](https://crates.io/crates/bore-cli)] - 簡易 TCP 通道，可將本機連接埠公開至遠端伺服器，繞過 NAT 防火牆。 [![Build status](https://img.shields.io/github/actions/workflow/status/ekzhang/bore/ci.yml)](https://github.com/ekzhang/bore/actions)
* [joaoh82/rustunnel](https://github.com/joaoh82/rustunnel) - 可自行託管的安全通道伺服器。透過 TLS 加密 WebSocket 與 yamux 多工，公開本機 HTTP／HTTPS／TCP／UDP 服務；支援多區域、Prometheus 指標，以及供 AI 代理使用的 MCP 伺服器。
* [ngrok/ngrok-rust](https://github.com/ngrok/ngrok-rust) [[ngrok-rust](https://crates.io/crates/ngrok)] - ngrok 是開發者工具，可安全地將本機應用程式公開至網際網路。
* [rathole-org/rathole](https://github.com/rathole-org/rathole) - 安全高效能的 NAT 穿越反向 Proxy，支援 Noise Protocol／TLS 加密與熱重新載入設定。 ![CI](https://img.shields.io/github/actions/workflow/status/rathole-org/rathole/rust.yml?branch=main)

## 函式庫

* [perf-monitor-rs](https://github.com/larksuite/perf-monitor-rs) - 為應用程式監控效能奠定基礎的工具組。 [![crates.io](https://img.shields.io/crates/v/perf_monitor.svg)](https://crates.io/crates/perf_monitor)

### 人工智慧

#### 遺傳演算法

* [innoave/genevo](https://github.com/innoave/genevo) - 以可自訂且可擴充的方式執行遺傳演算法（GA）模擬。
* [m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) - 遺傳演算法函式庫，處於維護模式。
* [Martin1887/oxigen](https://github.com/Martin1887/oxigen) - 快速、平行、可擴充且易於調整的遺傳演算法函式庫。使用範例只需幾秒、不到 1 MB 記憶體，即可求解 N = 255 的 N 皇后問題。
* [pkalivas/radiate](https://github.com/pkalivas/radiate) - 可自訂的平行遺傳程式設計引擎，能演化監督式、非監督式與強化學習問題的解法。內含完整且可自訂的 NEAT 與 Evtree 實作。 ![Crates.io](https://img.shields.io/crates/v/radiate)
* [willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) - 演化演算法。

#### Google Gemini

* [gemini-client-api](https://crates.io/crates/gemini-client-api) - 使用 Google Gemini API 的函式庫，提供自動情境管理、結構描述產生、函式呼叫等功能。

#### 機器學習

參見[[機器學習](https://crates.io/keywords/machine-learning)]。

另請參閱 [Rust 機器學習社群簡介](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f) 與 [Are we learning yet?](https://www.arewelearningyet.com)。

* [autumnai/leaf](https://github.com/autumnai/leaf) - 開放機器智慧框架。已停止開發，最新的分支版本為 [juice](https://github.com/fff-rs/juice)。
* [ave-sergeev/tictonix](https://github.com/Ave-Sergeev/Tictonix) [[tictonix](https://crates.io/crates/tictonix)] - 可將 Token 轉換為 Embedding，並編碼其位置資訊的函式庫。
* [blackportal-ai/delta](https://github.com/blackportal-ai/delta) - Δ 以 Rust 撰寫的開源機器學習框架。 ![crates.io](https://img.shields.io/crates/v/deltaml.svg) ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/delta/core.yml?branch=master)
* [blackportal-ai/nebula](https://github.com/blackportal-ai/nebula) - 機器學習資料集與模型套件管理器。 ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/nebula/core.yml?branch=master)
* [burn](https://github.com/tracel-ai/burn) - 彈性且完整的深度學習框架。
* [chelsea0x3b/dfdx](https://github.com/chelsea0x3b/dfdx) - CUDA 加速的機器學習框架，運用 Rust 的多項獨特功能。 ![Crates.io](https://img.shields.io/crates/v/dfdx)
* [EricLBuehler/mistral.rs](https://github.com/EricLBuehler/mistral.rs) [[mistralrs](https://crates.io/crates/mistralrs)] - 快速、彈性的 LLM 推論引擎，支援多模態模型、量化（GGUF／GPTQ／ISQ）及相容 OpenAI 的 API。
* [guillaume-be/rust-bert](https://github.com/guillaume-be/rust-bert) [[rust_bert](https://crates.io/crates/rust_bert)] - 可直接使用的 NLP 管線與語言模型。
* [huggingface/candle](https://github.com/huggingface/candle) [[candle-core](https://crates.io/crates/candle-core)] - 極簡 ML 框架，著重易用性與效能（包括 GPU 支援）。
* [huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Hugging Face 現代 NLP 管線所用的 Tokenizer（原始實作），並提供 Python 繫結。 [![Build Status](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [katanemo/plano](https://github.com/katanemo/plano) - 以 AI 為核心的代理式應用 Proxy 伺服器與資料平面。
* [LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) - PyTorch 繫結。
* [luminal-ai/luminal](https://github.com/luminal-ai/luminal) [[luminal](https://crates.io/crates/luminal)] - 高效能通用推論編譯器，採用 RISC 風格架構、搜尋式最佳化，並原生支援 CUDA／Metal 後端。支援 Transformer、卷積網路與自動微分。 [![CI Status](https://img.shields.io/github/actions/workflow/status/luminal-ai/luminal/test-core.yml?style=for-the-badge&logo=github-actions&logoColor=white&branch=main)](https://github.com/luminal-ai/luminal/actions)
* [maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) - 機器學習函式庫。 [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy) [[shimmy](https://crates.io/crates/shimmy)] - 純 Rust WebGPU 推論引擎，提供相容 OpenAI 的 API 並原生支援 GGUF。
* [Michael-A-Kuykendall/shimmytok](https://github.com/Michael-A-Kuykendall/shimmytok) [[shimmytok](https://crates.io/crates/shimmytok)] - 純 Rust GGUF 模型 Tokenizer，相容 llama.cpp Tokenization。
* [Mottl/lightgb3-rs](https://github.com/Mottl/lightgbm3-rs) - LightGBM 繫結。 [![Crates.io](https://img.shields.io/crates/v/lightgbm3.svg)](https://crates.io/crates/lightgbm3) [![build](https://github.com/Mottl/lightgbm3-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/Mottl/lightgbm3-rs/actions)
* [nobodywho-ooo/nobodywho](https://github.com/nobodywho-ooo/nobodywho) - 裝置端 LLM 推論引擎，可直接嵌入遊戲與應用程式，無需伺服器或 API 金鑰。支援串流生成、Embedding、GBNF 文法約束結構化輸出及 Whisper 語音轉文字，並提供 Godot、Flutter、React Native 與 Swift 繫結。
* [openinfer-project/openinfer](https://github.com/openinfer-project/openinfer) - 純 Rust + CUDA 的 LLM 推論引擎，無需 PyTorch 或 Python 執行環境；提供相容 OpenAI 的 API、分頁式 KV 快取與 CUDA Graph，可服務從 Qwen3 到萬億參數 Kimi-K2 的模型。
* [perpetual-ml/perpetual](https://github.com/perpetual-ml/perpetual) [[perpetual](https://crates.io/crates/perpetual)] - 無需超參數最佳化的自我泛化梯度提升機。
* [ramsyana/RustTensor](https://github.com/ramsyana/RustTensor) - 以 Rust 從零打造、重視學習且具高效能的張量運算函式庫，支援自動微分與 CPU／CUDA 後端。
* [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) - 高效能 Graph-RAG 框架，可將文件轉換成智慧知識圖譜。
* [rust-ml/linfa](https://github.com/rust-ml/linfa) - 機器學習框架。
* [sipemu/anofox-regression](https://github.com/sipemu/anofox-regression) [[anofox-regression](https://crates.io/crates/anofox-regression)] - 統計迴歸模型（OLS、Elastic Net、GLM、Quantile 與 Isotonic），提供類 R 推論（p 值、信賴區間與預測區間）並支援 Wasm。
* [smartcorelib/smartcore](https://github.com/smartcorelib/smartcore) - 機器學習函式庫。 [![Build Status](https://img.shields.io/circleci/build/github/smartcorelib/smartcore)]
* [tag1consulting/feste](https://github.com/tag1consulting/feste) - 為教學目的以 Rust 從零實作的 GPT-2 風格 Transformer 語言模型。
* [tensorflow/rust](https://github.com/tensorflow/rust) - TensorFlow 繫結。

#### OpenAI

* [0xplaygrounds/rig](https://github.com/0xplaygrounds/rig) - 用於建立代理與模組化、可擴充 LLM 應用程式的函式庫。
* [64bit/async-openai](https://github.com/64bit/async-openai) [[async-openai](https://crates.io/crates/async-openai)] - 依 OpenAPI 規格打造、符合人體工學的 OpenAI API Rust 繫結。
* [awakenworks/awaken](https://github.com/awakenworks/awaken) [[awaken](https://crates.io/crates/awaken)] - Rust AI 代理執行環境——具型別安全的狀態、多協定服務與外掛擴充能力。
* [bigduu/Bamboo-agent](https://github.com/bigduu/Bamboo-agent) [[bamboo-agent](https://crates.io/crates/bamboo-agent)] - 以本機資料為先的 AI 代理 Harness 與執行環境：透過單一 HTTP + WebSocket API 提供持久記憶、內建工具、技能、MCP、子代理、工作流程與排程。可嵌入為 crate，亦可作為伺服器執行。
* [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) [[AutoAgents](https://crates.io/crates/autoagents)] - 多代理框架，用於建置原生支援邊緣運算的 AI 代理。
* [openai/codex](https://github.com/openai/codex) - Codex CLI 是 OpenAI 開發、可在本機執行的程式設計代理。
* [openai/harmony](https://github.com/openai/harmony) [[openai-harmony](https://crates.io/crates/openai-harmony/0.0.3)] - 用於 gpt-oss 的 Harmony 回應格式渲染器。
* [xberg-io/liter-llm](https://github.com/xberg-io/liter-llm) [[liter-llm](https://crates.io/crates/liter-llm)] - 通用 LLM API 用戶端，支援 142 家以上供應商、統一介面、串流，以及 11 種語言的原生繫結。
* [zurawiki/tiktoken-rs](https://github.com/zurawiki/tiktoken-rs) [[tiktoken-rs](https://crates.io/crates/tiktoken-rs)] - 使用 tiktoken 為 OpenAI 模型 Tokenize 文字的函式庫。 [![CI](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml)

#### 工具

* [BAML](https://github.com/BoundaryML/baml) - 簡單的提示語言，用於建置可靠的 AI 工作流程與代理。BAML 編譯器以 Rust 撰寫！
* [Cortex Memory](https://github.com/sopaco/cortex-mem) - 完整代理記憶體解決方案，涵蓋資訊擷取、向量搜尋、自動最佳化及開箱即用的洞察儀表板。
* [juyterman1000/entroly](https://github.com/juyterman1000/entroly) - 以資訊理論為基礎的情境工程引擎，運用強化學習智慧剪枝並挑選最佳 RAG 片段。
* [memvid/memvid](https://github.com/memvid/memvid) [[memvid-core](https://crates.io/crates/memvid-core)] - 供 AI 代理使用的單檔可攜式記憶層，將向量搜尋、全文搜尋與長期回想整合於單一 `.mv2` 檔案。
* [pydantic/monty](https://github.com/pydantic/monty) - 精簡安全的 Python 直譯器，可在 AI 代理中執行 LLM 生成程式碼，具備微秒級啟動、嚴格沙箱與快照支援。 [![CI](https://github.com/pydantic/monty/actions/workflows/ci.yml/badge.svg)](https://github.com/pydantic/monty/actions/workflows/ci.yml)
* [tenequm/pond](https://github.com/tenequm/pond) [[pond-db](https://crates.io/crates/pond-db)] - 以無損方式儲存並搜尋十二種程式設計代理用戶端的 AI 代理工作階段。以本機目錄或 S3 Bucket 上的 Lance 為基礎，提供 BM25 與可選向量檢索，並透過 CLI、HTTP、MCP 和唯讀 SQL 存取。 [![build badge](https://github.com/tenequm/pond/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenequm/pond/actions/workflows/ci.yml)

### 天文學

[[astronomy](https://crates.io/keywords/astronomy)]

* [cds-astro/aladin-lite](https://github.com/cds-astro/aladin-lite) - 網頁應用程式，可用不同投影方式呈現空間與行星影像巡天資料。
* [fitsio](https://crates.io/crates/fitsio) - 封裝 cfitsio 的 FITS 介面函式庫。
* [flosse/rust-sun](https://github.com/flosse/rust-sun) [[sun](https://crates.io/crates/sun)] - JavaScript 函式庫 suncalc 的 Rust 移植版。
* [saurvs/astro-rust](https://github.com/saurvs/astro-rust) - 天文學。

### 非同步

* [async-std](https://async.rs/) [[async-std](https://crates.io/crates/async-std)] - Rust 標準函式庫的非同步版本。 [![CI](https://github.com/async-rs/async-std/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/async-rs/async-std/actions/workflows/ci.yml)
* [dagrs](https://github.com/dagrs-dev/dagrs) - 高效能非同步任務程式設計框架，採用 Flow-based Programming 概念。
* [dpc/mioco](https://github.com/dpc/mioco) - 可擴充、以 Coroutine 為基礎的非同步 I/O 處理函式庫。
* [igumnoff/gabriel2](https://github.com/igumnoff/gabriel2) [[gabriel2](https://crates.io/crates/gabriel2)] - Gabriel2：以 Tokio 為基礎的 Actor 模型函式庫。
* [iii-hq/iii](https://github.com/iii-hq/iii) [[iii-sdk](https://crates.io/crates/iii-sdk)] - 分散式執行環境，使用 Worker-Function-Trigger 原語組合服務。提供即時目錄、可追蹤函式呼叫，以及 Rust、Node.js、Python 多語言 SDK。引擎以 Rust 撰寫（ELv2），SDK 採 Apache 2.0 授權。
* [mio](https://github.com/tokio-rs/mio) - MIO 是輕量 I/O 函式庫，著重盡可能減少對作業系統抽象層的額外負擔。
* [nextest-rs/future-queue](https://github.com/nextest-rs/future-queue) [[future-queue](https://crates.io/crates/future-queue)] - Stream Adapter，可在指定權重的並行限制及可選群組限制下並行執行 Futures。
* [rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) - 零成本 Futures。
* [t3hmrman/async-dropper](https://github.com/t3hmrman/async-dropper) [[async-dropper](https://crates.io/crates/async-dropper)] - `AsyncDrop` 的實作。
* [TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) - 為 Rust 提供 Monad／MonadIO、Handler、Coroutine／doNotation 與函數式程式設計功能。
* [tokio-rs/tokio](https://github.com/tokio-rs/tokio) - 使用 Rust 撰寫可靠、非同步且精簡應用程式的執行環境。
* [tqwewe/kameo](https://github.com/tqwewe/kameo) - 以 Tokio 為基礎、具容錯能力的非同步 Actor。
* [Xudong-Huang/may](https://github.com/Xudong-Huang/may) - Stackful Coroutine 函式庫。
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - 具備工作竊取排程器的 Coroutine I/O 函式庫。

### 音訊與音樂

[[audio](https://crates.io/keywords/audio)]

* [aschey/stream-download-rs](https://github.com/aschey/stream-download-rs) [[stream-download](https://crates.io/crates/stream-download)] - 用於串流音訊、影片與其他媒體內容的函式庫。 [![build badge](https://github.com/aschey/stream-download-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/aschey/stream-download-rs/actions)
* [hound](https://crates.io/crates/hound) - WAV 編碼與解碼函式庫。
* [insomnimus/nodi](https://github.com/insomnimus/nodi) [[nodi](https://crates.io/crates/nodi)] - 播放與抽象化 MIDI 檔案的函式庫。 [![build badge](https://github.com/insomnimus/nodi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/nodi/actions)
* [jhasse/ears](https://github.com/jhasse/ears) - 建構於 OpenAL 與 libsndfile 之上的簡易音效與音樂播放函式庫。
* [musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) - [PortMidi](https://portmedia.sourceforge.net/portmidi/) 繫結。
* [ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) - 音樂理論函式庫。
* [pdeljanov/Symphonia](https://github.com/pdeljanov/Symphonia) - 音訊解碼與媒體解多工函式庫，支援 AAC、FLAC、MP3、MP4、OGG、Vorbis 與 WAV。
* [RustAudio](https://github.com/RustAudio)
  * [RustAudio/cpal](https://github.com/RustAudio/cpal) - 低階跨平台音訊 I/O 函式庫。 [![Actions Status](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [RustAudio/rodio](https://github.com/RustAudio/rodio) - 音訊播放函式庫。
  * [RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) - PortAudio 繫結。
* [Serial-ATA/lofty-rs](https://github.com/Serial-ATA/lofty-rs) [[lofty](https://crates.io/crates/lofty)] - 讀取與編輯各種音訊格式中繼資料的函式庫。 [![build badge](https://github.com/Serial-ATA/lofty-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Serial-ATA/lofty-rs/actions)

### 驗證

* [constantoine/totp-rs](https://github.com/constantoine/totp-rs) [[totp-rs](https://crates.io/crates/totp-rs)] - 產生與驗證 TOTP 型權杖的 2FA 函式庫。 ![Build Status](https://github.com/constantoine/totp-rs/workflows/Rust/badge.svg)
* [GunduLabs/gaze](https://github.com/GunduLabs/gaze) - Linux 臉部驗證工具，提供裝置端臉部辨識、PAM 整合，以及登入、鎖定畫面、sudo 與桌面管理工具。 [![CI](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml)
* [Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) - [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) 函式庫。
* [oauth2](https://github.com/ramosbugs/oauth2-rs) - 可擴充、強型別的 OAuth2 用戶端函式庫。
* [oxide-auth](https://github.com/197g/oxide-auth) - OAuth2 伺服器函式庫，可搭配 Actix 或其他前端使用，並提供一組可設定、可插拔的後端。 [![CI](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml)
* [sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) - 用於管理及協調 JWT 工作流程的非同步函式庫。
* [tenuo-ai/tenuo](https://github.com/tenuo-ai/tenuo) [[tenuo](https://crates.io/crates/tenuo)] - 以能力為基礎的 AI 代理授權機制。已簽署的 warrant 可限定工具呼叫及參數，委派時只能縮小權限範圍。 [![CI](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml)
* [yup-oauth2](https://github.com/dermesser/yup-oauth2) - OAuth2 用戶端實作，提供 Device、Installed 與 Service Account 流程。

### 汽車

* [idletea/tokio-socketcan](https://github.com/idletea/tokio-socketcan) [[tokio-socketcan](https://crates.io/crates/tokio-socketcan)] - 以 socketcan crate 為基礎的 Tokio Linux SocketCAN 支援。
* [marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] - Tokio Linux SocketCAN BCM 支援。
* [mbr/socketcan](https://github.com/socketcan-rs/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] - Linux SocketCAN 函式庫。
* [oxibus/can-dbc](https://github.com/oxibus/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] - DBC 格式剖析器。
* [Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] - LIN Bus 驅動程式 Trait 與協定實作。 [![build badge](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)

### 生物資訊學

* [polars-bio](https://github.com/biodatageeks/polars-bio) - 在 Python DataFrame 上執行高速生物資訊運算。 ![PyPI - Version](https://img.shields.io/pypi/v/polars-bio)
* [Rust-Bio](https://github.com/rust-bio) - 生物資訊函式庫。

### 快取

* [06chaynes/http-cache](https://github.com/06chaynes/http-cache) [[http-cache](https://crates.io/crates/http-cache)] - 遵循 HTTP 快取規則的快取中介軟體。 [![build badge](https://github.com/06chaynes/http-cache/workflows/http-cache/badge.svg)](https://github.com/06chaynes/http-cache/actions/workflows/http-cache.yml)
* [aisk/rust-memcache](https://github.com/aisk/rust-memcache) - Memcached 用戶端函式庫。
* [al8n/stretto](https://github.com/al8n/stretto) - 高效能、執行緒安全且受記憶體限制的快取。 [![build badge](https://github.com/al8n/stretto/actions/workflows/ci.yml/badge.svg)](https://github.com/al8n/stretto/actions/workflows/ci.yml)
* [hit-box/hitbox](https://github.com/hit-box/hitbox) - 宣告式快取協調框架，提供 HTTP 中介軟體與多層後端。 [![CI](https://github.com/hit-box/hitbox/actions/workflows/CI.yml/badge.svg)](https://github.com/hit-box/hitbox/actions/workflows/CI.yml)
* [jaemk/cached](https://github.com/jaemk/cached) - 簡易函式快取／Memoization。
* [kunobi-ninja/kache](https://github.com/kunobi-ninja/kache) [[kache](https://crates.io/crates/kache)] - 適用於 Rust 與 C／C++ 的內容定址編譯快取（[網站](https://ninja.kunobi.com/kache)）。 [![CI](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml)
* [moka-rs/moka](https://github.com/moka-rs/moka) - 受 Java Caffeine 函式庫啟發的高效能並行快取函式庫。 [![build badge](https://github.com/moka-rs/moka/workflows/CI/badge.svg)](https://github.com/moka-rs/moka/actions/workflows/CI.yml)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - 共用編譯快取，大幅提升編譯效率。
* [salsa-rs/salsa](https://github.com/salsa-rs/salsa) [[salsa](https://crates.io/crates/salsa)] - 通用框架，適用於隨需、增量化且具備 Memoized 查詢的運算，靈感來自 rustc 查詢系統。 [![Test](https://github.com/salsa-rs/salsa/workflows/Test/badge.svg)](https://github.com/salsa-rs/salsa/actions?query=workflow%3ATest)
* [zkat/cacache-rs](https://github.com/zkat/cacache-rs) - 高效能、並行、內容定址的磁碟快取，針對非同步 API 最佳化。 [![build badge](https://github.com/zkat/cacache-rs/workflows/CI/badge.svg)](https://github.com/zkat/cacache-rs/actions/workflows/ci.yml)

### 雲端

* AWS [[aws](https://crates.io/keywords/aws)]
  * [aws/aws-lambda-rust-runtime](https://github.com/aws/aws-lambda-rust-runtime) [[lambda_runtime](https://crates.io/crates/lambda_runtime)] - AWS Lambda 執行環境。 [![build badge](https://github.com/aws/aws-lambda-rust-runtime/workflows/Rust/badge.svg)](https://github.com/aws/aws-lambda-rust-runtime/actions)
  * [awslabs/aws-sdk-rust](https://github.com/awslabs/aws-sdk-rust) - 新一代 AWS SDK。
  * [faiscadev/fakecloud](https://github.com/faiscadev/fakecloud) [[fakecloud](https://crates.io/crates/fakecloud)] - 供開發與測試使用的本機 AWS 雲端模擬器。 [![CI](https://github.com/faiscadev/fakecloud/workflows/CI/badge.svg?branch=main)](https://github.com/faiscadev/fakecloud/actions)
  * [rusoto/rusoto](https://github.com/rusoto/rusoto) - Rust 版 AWS SDK。
* Azure
  * [Azure/azure-sdk-for-rust](https://github.com/Azure/azure-sdk-for-rust) - 官方 Azure Rust SDK。
* Load Balancer
  * [Convey](https://github.com/bparli/convey) - 支援動態載入設定的 Layer 4 負載平衡器。
* Multi Cloud
  * [Qovery/engine](https://github.com/Qovery/engine) - 抽象層函式庫，可讓應用程式在幾分鐘內輕鬆部署至雲端供應商。

### 命令列

* Argument parsing
  * [aisk/rust-fire](https://github.com/aisk/rust-fire) [[fire](https://crates.io/crates/fire)] - 一行程式碼即可將函式轉為命令列應用程式。 [![CI](https://github.com/aisk/rust-fire/actions/workflows/ci.yml/badge.svg)](https://github.com/aisk/rust-fire/actions/workflows/ci.yml)
  * [clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] - 簡單易用、功能完整的命令列引數剖析器。
  * [cliparser](https://crates.io/crates/cliparser) - 簡易命令列剖析器。 [![build badge](https://github.com/sagiegurari/cliparser/actions/workflows/ci.yml/badge.svg)](https://github.com/sagiegurari/cliparser/actions)
  * [docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] - DocOpt 實作。
  * [google/argh](https://github.com/google/argh) [[argh](https://crates.io/crates/argh)] - 以 Derive 為基礎、遵循主張且針對程式碼大小最佳化的引數剖析器。 [![build badge](https://github.com/google/argh/workflows/Argh/badge.svg?branch=master)](https://github.com/google/argh/actions)
  * [killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] - 快速打造酷炫 CLI 應用程式。
  * [ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] - 極簡 CLI 框架。 [![Build status](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] - 透過定義結構體來剖析命令列引數。
* Data visualization
  * [nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] - 為 CLI 工具打造美觀的動態表格。 [![Build status](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [zhiburt/tabled](https://github.com/zhiburt/tabled) [[tabled](https://crates.io/crates/tabled)] - 易用的函式庫，可漂亮地列印結構體與列舉的表格。 [![Build Status](https://github.com/zhiburt/tabled/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/tabled/actions)
* Human-centered design
  * [rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] - 讓人看得懂的 Panic 訊息。
* Line editor
  * [kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] - Readline 實作。
  * [MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] - 提供類 Readline 功能的函式庫。
  * [murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] - 可設定、可擴充的互動式行編輯器。
  * [nushell/reedline](https://github.com/nushell/reedline) [[reedline](https://crates.io/crates/reedline)] - 為 Nushell 提供支援的功能豐富行編輯器，支援語法醒目提示、Tab 補全、多行輸入、歷史記錄、Vi／Emacs 快速鍵與 Unicode。 [![Crates.io](https://img.shields.io/crates/v/reedline)](https://crates.io/crates/reedline)
  * [srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] - 命令列編輯函式庫。
* Other
  * [mgrachev/update-informer](https://github.com/mgrachev/update-informer) [[update-informer](https://crates.io/crates/update-informer)] - CLI 應用程式的更新提示工具，可檢查 Crates.io 與 GitHub 是否有新版本。 [![build badge](https://github.com/mgrachev/update-informer/workflows/CI/badge.svg)](https://github.com/mgrachev/update-informer/actions)
* Pipeline
  * [hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] - 提供與外部管線互動的功能。
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] - 透過外部分頁器傳送輸出。
  * [oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] - 子程序管線與 I/O 重新導向建置器。
  * [rust-cli/rexpect](https://github.com/rust-cli/rexpect) [[rexpect](https://crates.io/crates/rexpect)] - 自動化 SSH、FTP、passwd 等互動式應用程式。 [![CI](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml)
  * [zhiburt/expectrl](https://github.com/zhiburt/expectrl) [[expectrl](https://crates.io/crates/expectrl)] - 在偽終端機中控制互動式程式的函式庫。 [![build badge](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml)
* Progress
  * [a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] - 主控台進度列。
  * [clitic/kdam](https://github.com/clitic/kdam) [[kdam](https://crates.io/crates/kdam)] - 受 tqdm 與 rich.progress 啟發的主控台進度列函式庫。 [![CI](https://github.com/clitic/kdam/actions/workflows/tests.yml/badge.svg)](https://github.com/clitic/kdam/actions/workflows/tests.yml)
  * [console-rs/indicatif](https://github.com/console-rs/indicatif) [[indicatif](https://crates.io/crates/indicatif)] - 向使用者顯示進度。
  * [etienne-napoleone/spinach](https://github.com/etienne-napoleone/spinach) [[spinach](https://crates.io/crates/spinach)] - 實用的 Spinner。 [![CI](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml/badge.svg)](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml)
  * [FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] - 60 多種優雅的終端機 Spinner。
  * [vyfor/rattles](https://github.com/vyfor/rattles) [[rattles](https://crates.io/crates/rattles)] - 極簡、零相依性的終端機 Spinner 函式庫。
* Prompt
  * [hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)] - 建置互動式命令提示。
  * [mikaelmello/inquire](https://github.com/mikaelmello/inquire) [[inquire](https://crates.io/crates/inquire)] - 用於在終端機建置互動式提示的函式庫。 [![Build status](https://github.com/mikaelmello/inquire/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/mikaelmello/inquire/actions)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)] - 極簡、速度飛快且高度可自訂的 Shell 提示工具。 [![Build status](https://github.com/starship/starship/actions/workflows/workflow.yml/badge.svg)](https://github.com/starship/starship/actions)
  * [ynqa/promkit](https://github.com/ynqa/promkit) [[promkit](https://crates.io/crates/promkit)] - 建置互動式命令列工具的工具組。 [![ci](https://github.com/ynqa/promkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/promkit/actions/workflows/ci.yml)
* Style
  * [colored](https://github.com/colored-rs/colored) [[colored](https://crates.io/crates/colored)] - 讓終端機上色如此簡單，你早就知道怎麼做！
  * [console-rs/dialoguer](https://github.com/console-rs/dialoguer) [[dialoguer](https://crates.io/crates/dialoguer)] - 命令列提示及類似功能的函式庫。
  * [LukasKalbertodt/bunt](https://github.com/LukasKalbertodt/bunt) [[bunt](https://crates.io/crates/bunt)] - 搭配巨集的跨平台終端機色彩與樣式工具。 [![Build status](https://github.com/LukasKalbertodt/bunt/actions/workflows/ci.yml/badge.svg)](https://github.com/LukasKalbertodt/bunt/actions?query=workflow%3ACI+branch%3Amaster)
  * [LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] - 跨平台樣式化終端機輸出。
  * [ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] - 控制 ANSI 終端機的顏色與格式。
  * [SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] - 極簡 ANSI 終端機色彩繪製函式庫。
* TUI
  * [AppCUI](https://github.com/gdt050579/AppCUI-rs) [[appcui](https://crates.io/crates/appcui)] - 功能完整的跨平台 Rust TUI／CUI 框架，內建元件，支援版面控制、動畫、Unicode 與佈景主題。
  * BearLibTerminal
    * [cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] - [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal) 繫結。
  * [ccbrown/iocraft](https://github.com/ccbrown/iocraft) [[iocraft](https://crates.io/crates/iocraft)] - 用於打造精美、精心設計的 CLI、TUI 與文字 I/O 的 crate。 [![Build status](https://github.com/ccbrown/iocraft/actions/workflows/commit.yaml/badge.svg?branch=main)](https://github.com/ccbrown/iocraft/actions) [![docs.rs](https://img.shields.io/docsrs/iocraft)](https://docs.rs/iocraft/)
  * [gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] - 建置豐富的 TUI 應用程式。
  * [ivanceras/titik](https://github.com/ivanceras/titik) - 跨平台 TUI Widget 函式庫，目標是提供互動式元件。
  * ncurses
    * [ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] - 支援 Linux 和 Windows 的 curses 函式庫。
    * [jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] - [ncurses](https://invisible-island.net/ncurses/ncurses.html) 繫結。
  * [ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] - 用於以網格排列物件的函式庫。
  * [ratatui-org/ratatui](https://github.com/ratatui/ratatui) [[ratatui](https://crates.io/crates/ratatui)] - 專為打造終端機使用者介面（TUI）的函式庫。
  * [redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] - 無繫結的終端機／TTY 控制函式庫。
  * [ruterm](https://crates.io/crates/ruterm) - 小巧簡易的 TTY 操作函式庫。
  * [subinium/SuperLightTUI](https://github.com/subinium/SuperLightTUI) [[superlighttui](https://crates.io/crates/superlighttui)] - 立即模式 TUI 函式庫，具備 50 多種元件、Flexbox 版面與動畫系統。 [![CI](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml/badge.svg)](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml)
  * Termbox
    * [gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] - [Termbox](https://github.com/nsf/termbox) 繫結。
  * [TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] - 跨平台終端機函式庫。

### 壓縮

* [7z](https://7-zip.org/7z.html)
  * [hasenbanck/sevenz-rust2](https://github.com/hasenbanck/sevenz-rust2) [[sevenz-rust2](https://crates.io/crates/sevenz-rust2)] - 以純 Rust 撰寫的 7z 壓縮與解壓縮工具。 [![Rust](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml)
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
  * [dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) - 可選擇避開標準函式庫的 Brotli 解壓縮器。
  * [ende76/brotli-rs](https://github.com/ende76/brotli-rs) - Brotli 壓縮實作。
* bzip2
  * [trifectatechfoundation/bzip2-rs](https://github.com/trifectatechfoundation/bzip2-rs) - [libbz2](https://www.sourceware.org/bzip2/) 繫結。
* gzip
  * [zopfli](https://github.com/zopfli-rs/zopfli) [[zopfli](https://crates.io/crates/zopfli)] - Zopfli 壓縮演算法實作，可實現更高品質的 deflate 或 zlib 壓縮。
* gzp
  * [sstadick/gzp](https://github.com/sstadick/gzp/) - 多執行緒編碼與解碼 deflate 格式及 Snappy。
* LZMA
  * [hasenbanck/lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [[lzma-rust2](https://crates.io/crates/lzma-rust2)] - 從 [tukaani xz for java](https://tukaani.org/xz/java.html) 移植的 LZMA／LZMA2／LZIP／XZ 壓縮工具。 [![Rust](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml)
* miniz
  * [rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) - [miniz](https://code.google.com/archive/p/miniz) 繫結。 [![build badge](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* [paxit](https://github.com/roquess/paxit) [[paxit](https://crates.io/crates/paxit)] - 彈性函式庫，可使用多種演算法（zip、tar、gzip、xz、zst 等）壓縮與解壓縮檔案，採模組化設計，方便擴充。
* tar
  * [alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) - 讀取與寫入 tar 封存檔。
* zip
  * [zip-rs/zip2](https://github.com/zip-rs/zip2) [[zip](https://crates.io/crates/zip)] - 讀取與寫入 ZIP 封存檔。
* zstd
  * [gyscos/zstd-rs](https://github.com/gyscos/zstd-rs) - zstd 壓縮函式庫的 Rust 繫結。

### 計算

* [alphaville/optimization-engine](https://github.com/alphaville/optimization-engine) [[optimization-engine](https://crates.io/crates/optimization_engine)] - 最佳化引擎（OpEn）是受限非凸最佳化問題的求解器。 [![Continuous integration](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml)
* [argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] - 最佳化函式庫。
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
  * [mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) - BLAS 繫結。
* [calebwin/emu](https://github.com/calebwin/emu) - GPGPU 數值運算語言。
* [dimforge/nalgebra](https://github.com/dimforge/nalgebra) - 低維線性代數函式庫。
* [faer-rs](https://github.com/sarah-quinones/faer-rs) [[faer](https://crates.io/crates/faer)] - Rust 線性代數基礎函式庫。
* [fastnum](https://github.com/neogenie/fastnum) [fastnum](https://crates.io/crates/fastnum) - 以純 Rust 實作的高效能精確十進位數字，適用於金融、加密貨幣與其他固定精度運算。
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez/rust-GSL) - GSL 繫結。
* [jolars/basin](https://github.com/jolars/basin) [[basin](https://crates.io/crates/basin)] - 數值最佳化函式庫，提供一階、無導數、非線性最小平方法、演化式與受限求解器，且可搭配通用線性代數後端。 [![CI](https://github.com/jolars/basin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jolars/basin/actions/workflows/ci.yml)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
  * [stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) - LAPACK 繫結。
* [ml-rust/numr](https://github.com/ml-rust/numr) [[numr](https://crates.io/crates/numr)] - 受 NumPy 啟發的 Rust 數值運算函式庫，提供張量、線性代數、FFT、統計、自動微分與 GPU 加速。 [![CI](https://github.com/ml-rust/numr/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ml-rust/numr/actions/workflows/ci.yml)
* Parallel
  * [arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) - [Arrayfire](https://github.com/arrayfire) 繫結。
  * [autumnai/collenchyma](https://github.com/autumnai/collenchyma) - 可擴充、可插拔且與後端無關的框架，適用於 CUDA、OpenCL 與一般主機 CPU 上的平行高效能運算。
  * [luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) - [OpenCL](https://www.khronos.org/opencl/) 繫結。
* Science
  * [Axect/Peroxide](https://github.com/Axect/Peroxide) - Rust 數值函式庫，以純 Rust 提供線性代數、數值分析、統計與機器學習工具。
  * [cool-japan/scirs](https://github.com/cool-japan/scirs) - 可用於正式環境的純 Rust 科學運算函式庫，包含線性代數、最佳化、統計、神經網路等功能。API 靈感來自 Python SciPy。
  * [cpmech/russell](https://github.com/cpmech/russell) - Rust 科學函式庫，提供數值數學、常微分方程、特殊數學函式與高效能（稀疏）線性代數。
  * [Nonanti/mathcore](https://github.com/Nonanti/mathcore) - 具備 CAS 功能的符號數學函式庫，支援微分、積分、方程式求解與任意精度運算。 [![crates.io](https://img.shields.io/crates/v/mathcore.svg)](https://crates.io/crates/mathcore)
  * [Ryan-D-Gast/differential-equations](https://github.com/Ryan-D-Gast/differential-equations) - 用於數值求解微分方程的高效能函式庫。
* Statrs
  * [statrs-dev/statrs](https://github.com/statrs-dev/statrs) - 穩健的統計計算函式庫。

### 並行處理

* [crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) - 平行處理與低階並行功能支援。
* [NikitaSmithTheOne/rate-limiters-rs](https://github.com/NikitaSmithTheOne/rate-limiters-rs) [[rate-limiters](https://crates.io/crates/rate_limiters)] - Rust 速率限制函式庫（漏桶、令牌桶、固定／滑動視窗）。
* [orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] - 抽象化 `Rc`／`Arc` 指標型別的函式庫。 [![build badge](https://github.com/orium/archery/workflows/CI/badge.svg)](https://github.com/orium/archery/actions?query=workflow%3ACI)
* [orx-parallel](https://crates.io/crates/orx-parallel) - 高效能、可設定且表達力強的平行運算函式庫。
* [Rayon](https://github.com/rayon-rs/rayon) - 資料平行處理函式庫。
* [rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) - Coroutine 函式庫。
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - Coroutine I/O。

### 設定

* [andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] - 以 [libUCL](https://github.com/vstakhov/libucl) 為基礎、功能豐富的設定函式庫。 [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] - 輕鬆處理應用程式設定的函式庫。
* [leptonyu/cfg-rs](https://github.com/leptonyu/cfg-rs) [[cfg-rs](https://crates.io/crates/cfg-rs)] - Rust 應用程式設定函式庫。
* [rust-cli/config-rs](https://github.com/rust-cli/config-rs) [[config](https://crates.io/crates/config)] - 分層設定系統（強力支援 12-factor 應用程式）。
* [SergioBenitez/Figment](https://github.com/SergioBenitez/Figment) [[figment](https://crates.io/crates/figment)] - 設定函式庫，簡單到幾乎沒有設定困擾，令人難以置信。
* [softprops/envy](https://github.com/softprops/envy) - 將環境變數反序列化為型別安全的結構體。 [![Main](https://github.com/softprops/envy/actions/workflows/main.yml/badge.svg)](https://github.com/softprops/envy/actions/workflows/main.yml)

### 密碼學

[[crypto](https://crates.io/keywords/crypto), [cryptography](https://crates.io/keywords/cryptography)]

* [arkworks-rs/circom-compat](https://github.com/arkworks-rs/circom-compat) - 將 Circom 的 R1CS 繫結至 Arkworks，用於產生 Groth16 證明與見證。
* [briansmith/ring](https://github.com/briansmith/ring) - 以 Rust 和 BoringSSL 密碼學原語打造的安全、快速、小巧加密工具。
* [briansmith/webpki](https://github.com/briansmith/webpki) - Web PKI TLS X.509 憑證驗證。
* [conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] - 在終端機使用的簡易密碼管理器。
* [cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] - 高階密碼學函式庫，適合解決常見資料安全問題，尤其適用於多平台應用程式。 [![build badge](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) - 密碼學演算法。
* [dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) - Curve25519 操作。
* [debris/tiny-keccak](https://github.com/debris/tiny-keccak) - Keccak 系列（SHA3）。
* [dusk-network/bls12-381](https://github.com/dusk-network/bls12_381) - 以 Rust 原生打造的 BLS12-381，強化零知識證明效能：最佳化多純量乘法、自訂雜湊與 serde 支援，適用於重視隱私的協定及零知識應用程式。 ![Build Status](https://github.com/dusk-network/bls12_381/workflows/Continuous%20integration/badge.svg) [[dusk-bls12_381](https://crates.io/crates/dusk-bls12_381)]
* [dusk-network/plonk](https://github.com/dusk-network/plonk/) - 以 Rust 原生實作的 BLS12-381 PLONK zk-SNARK 高效能函式庫，透過自訂閘與 KZG10 多項式承諾最佳化，能有效產生零知識證明。 ![Build Status](https://github.com/dusk-network/plonk/workflows/Continuous%20integration/badge.svg) [[PLONK](https://crates.io/crates/dusk-plonk)]
* [dusk-network/poseidon252](https://github.com/dusk-network/Poseidon252) - 以 Rust 原生實作的 BLS12-381 Poseidon 雜湊。Poseidon252 專為 zk-SNARK 效能打造，適用於重視隱私的協定與零知識應用程式。 ![Build Status](https://github.com/dusk-network/Poseidon252/workflows/Continuous%20integration/badge.svg) [[Poseidon](https://crates.io/crates/dusk-poseidon)]
* [exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] - 區塊鏈專案的可擴充框架。
* [facebook/opaque-ke](https://github.com/facebook/opaque-ke) - 近期 [OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/) 密碼驗證金鑰交換協定的實作。 [![build badge](https://github.com/facebook/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/facebook/opaque-ke)
* [iddm/randomorg](https://github.com/iddm/randomorg) - random.org 用戶端函式庫。 [![Crates badge](https://img.shields.io/crates/v/randomorg.svg)](https://crates.io/crates/randomorg)
* [klutzy/suruga](https://github.com/klutzy/suruga) - [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246) 實作。
* [kn0sys/ecc-rs](https://github.com/kn0sys/ecc-rs) - 直覺易用的橢圓曲線密碼學教學函式庫。 [![Crates.io Version](https://img.shields.io/crates/v/kn0syseccrs)](https://crates.io/crates/kn0syseccrs)
* [kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) - Security Framework 繫結（OSX 原生）。
* [libOctavo/octavo](https://github.com/libOctavo/octavo) - 模組化雜湊與密碼學函式庫。
* [orion-rs/orion](https://github.com/orion-rs/orion) - 此函式庫致力提供簡單易用的密碼學。所謂「易用」，是指提供容易使用且不易誤用的高階 API。 [![Tests](https://github.com/orion-rs/orion/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/orion-rs/orion/actions/workflows/test.yml)
* [racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) [[djangohashers](https://crates.io/crates/djangohashers)] - 移植 Django 專案使用的密碼原語。無須安裝 Django，即可依 Django 風格雜湊並驗證密碼。
* [rust-native-tls/rust-native-tls](https://github.com/rust-native-tls/rust-native-tls) - 原生 TLS 函式庫的繫結。
* [rust-openssl](https://github.com/rust-openssl/rust-openssl) - [OpenSSL](https://www.openssl.org/) 繫結。
* [rust-random/rand](https://github.com/rust-random/rand) [[rand](https://crates.io/crates/rand)] - 完整的亂數產生函式庫，支援高強度與小型 PRNG、隨機值取樣、機率分布及隨機程序。 [![Test Status](https://github.com/rust-random/rand/actions/workflows/test.yml/badge.svg?event=push)](https://github.com/rust-random/rand/actions)
* [RustCrypto/hashes](https://github.com/RustCrypto/hashes) - 密碼學雜湊函式集合。
* [rustls/rustls](https://github.com/rustls/rustls) - TLS 實作。
* [schnorrkel](https://github.com/paritytech/schnorrkel) - 以 Ristretto 群實作的 Schnorr VRF 與簽章。
* [sorairolake/abcrypt](https://github.com/sorairolake/abcrypt) [[abcrypt](https://crates.io/crates/abcrypt)] - 簡單、現代且安全的檔案加密函式庫。 [![CI](https://github.com/sorairolake/abcrypt/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/abcrypt/actions?query=workflow%3ACI)
* [sorairolake/scryptenc-rs](https://github.com/sorairolake/scryptenc-rs) [[scryptenc](https://crates.io/crates/scryptenc)] - scrypt 加密資料格式的實作。 [![CI](https://github.com/sorairolake/scryptenc-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/scryptenc-rs/actions?query=workflow%3ACI)
* [suradet-ps/encryptman](https://github.com/suradet-ps/encryptman) [[encryptman](https://crates.io/crates/encryptman)] - 應用程式設定的 AES-256-GCM 加密，使用 HKDF 衍生金鑰。 [![CI](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml)
* [verifyfetch](https://github.com/hamzaydia/verifyfetch) - 使用 Rust／WASM SHA-256 雜湊、以固定記憶體用量串流驗證檔案完整性。支援瀏覽器大型檔案續傳。

### 資料處理

* [amv-dev/yata](https://github.com/amv-dev/yata) - 高效能技術分析函式庫。 [![Build Status](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)
* [AndreaBozzo/dataprof](https://github.com/AndreaBozzo/dataprof) [[dataprof](https://crates.io/crates/dataprof)] - CSV、JSON、Parquet 與 Arrow 的資料剖析及品質閘門，提供 Python 繫結。 [![CI](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml)
* [bluss/ndarray](https://github.com/rust-ndarray/ndarray) - N 維陣列，支援陣列檢視、多維切片與高效率操作。
* [DataBora/elusion](https://github.com/DataBora/elusion) [[elusion](https://crates.io/crates/elusion)] - 以 DataFusion 為基礎打造的端對端資料工程 DataFrame 函式庫，提供 Microsoft Fabric、Azure、SharePoint、FTP、Postgres、MySQL 與 REST API 連接器。
* [datafusion](https://github.com/apache/datafusion) - DataFusion 是速度極快、可擴充的查詢引擎，使用 Apache Arrow 記憶體格式建置高品質、以資料為核心的 Rust 系統。
* [GoPlasmatic/datalogic-rs](https://github.com/GoPlasmatic/datalogic-rs) [[datalogic-rs](https://crates.io/crates/datalogic-rs)] - 高效能、型別安全的 JSONLogic 評估引擎，適用於商業規則與動態篩選；正式提供 Node、WASM、Python、Go、Java、.NET 和 PHP 繫結。 [![CI](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml)
* [ironcalc/IronCalc](https://github.com/ironcalc/IronCalc) [[ironcalc](https://crates.io/crates/ironcalc)] - 新式、現代且仍在開發中的試算表引擎。
* [kernelmachine/utah](https://github.com/kernelmachine/utah) - DataFrame 結構與操作。
* [lakehq/sail](https://github.com/lakehq/sail) - Sail 是以 Rust 撰寫、可直接替代 Apache Spark 的工具，整合批次處理、串流處理與高運算量 AI 工作負載。
* [logisky/LogiSheets](https://github.com/logisky/LogiSheets) [[logisheets-rs](https://crates.io/crates/logisheets-rs)] - 驅動實際產品的新式試算表引擎。
* [openooxml/betteroffice](https://github.com/openooxml/betteroffice) - 原生 OOXML 引擎，支援 DOCX、XLSX 與 PPTX 編輯、版面配置、渲染、CRDT 協作及代理編輯，並可編譯為 WebAssembly。
* [pathwaycom/pathway](https://github.com/pathwaycom/pathway) - 高效能開源 Python ETL 框架，採 Rust 執行環境，支援 300 多個資料來源。
* [pg_analytics](https://github.com/paradedb/paradedb/tree/dev/pg_analytics) - PostgreSQL 擴充功能，可加速 Postgres 內的分析查詢，使效能媲美專用 OLAP 資料庫。
* [pg_lakehouse](https://github.com/paradedb/paradedb/tree/dev/pg_lakehouse) - PostgreSQL 擴充功能，可將 Postgres 轉化為分析查詢引擎，直接查詢 AWS S3 等物件儲存空間及 Delta Lake／Iceberg 等資料表格式。
* [pola-rs/polars](https://github.com/pola-rs/polars) - 快速且功能完整的 DataFrame 函式庫。 [![Lint Rust](https://github.com/pola-rs/polars/actions/workflows/lint-rust.yml/badge.svg)](https://github.com/pola-rs/polars/actions)
* [PSU3D0/formualizer](https://github.com/PSU3D0/formualizer) [[formualizer](https://crates.io/crates/formualizer)] - 可嵌入的試算表引擎，可剖析、計算與修改 Excel 活頁簿：提供 400 多種函式、以 Arrow 為後端的儲存、增量重新計算，以及 Python／WASM 繫結。 [![CI](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml)
* [weld-project/weld](https://github.com/weld-project/weld) - 供資料分析應用程式使用的高效能執行環境。

### 資料串流

* [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) - 高效能 Rust 串流處理引擎。 [![CI](https://github.com/arkflow-rs/arkflow/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/arkflow-rs/arkflow/actions)
* [ArroyoSystems/arroyo](https://github.com/ArroyoSystems/arroyo) - 使用 Rust 和 SQL 進行高效能即時分析。 [![CI](https://github.com/ArroyoSystems/arroyo/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ArroyoSystems/arroyo/actions)
* [beava-dev/beava](https://github.com/beava-dev/beava) - 單一執行檔的特徵服務伺服器。透過 HTTP 或 TCP 推送事件，並即時查詢每個實體最新的計數器與彙總值，中間無需 Broker。適用於詐欺偵測、推薦、LLM 護欄與產品內分析。 [![CI](https://github.com/beava-dev/beava/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/beava-dev/beava/actions)
* [fluvio](https://github.com/fluvio-community/fluvio) - 可程式化資料串流平台。 [![CI](https://github.com/fluvio-community/fluvio/actions/workflows/ci.yml/badge.svg)](https://github.com/fluvio-community/fluvio/actions)
* [iggy](https://github.com/apache/iggy) [[iggy](https://crates.io/crates/iggy)] - 持久化訊息串流平台，支援 QUIC、TCP 與 HTTP 傳輸協定。 [![CI](https://github.com/apache/iggy/actions/workflows/test.yml/badge.svg)](https://github.com/apache/iggy/actions/workflows/test.yml)
* [wingfoil](https://github.com/wingfoil-io/wingfoil) - 以圖形為基礎的串流處理框架。 [![CI](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml/badge.svg)](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml)

### 資料結構

* [alrevuelta/rs-merkle-tree](https://github.com/alrevuelta/rs-merkle-tree) - Rust Merkle Tree 實作，儲存後端與雜湊函式皆可設定。僅支援固定深度與增量操作，並針對快速產生證明最佳化。
* [ashvardanian/NumKong](https://github.com/ashvardanian/NumKong) - 以 SIMD 加速的向量距離與相似度函式，支援 x86 AVX2／AVX-512 與 Arm NEON。 [![crates.io](https://img.shields.io/crates/v/simsimd.svg)](https://crates.io/crates/simsimd)
* [becheran/grid](https://github.com/becheran/grid) [[grid](https://crates.io/crates/grid)] - 提供簡單快速、易於使用的二維資料結構。 [![build status](https://github.com/becheran/grid/actions/workflows/rust.yml/badge.svg)](https://github.com/becheran/grid/actions)
* [billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] - 三元搜尋樹集合。
* [contain-rs](https://github.com/contain-rs) - Rust `std::collections` 擴充。
* [danielpclark/array_tool](https://github.com/danielpclark/array_tool) - 陣列輔助工具。將常用於陣列的方法提供給 Vector，並以多型實作涵蓋多數使用情境。
* [enum-map](https://codeberg.org/sugar700/enum-map) [[enum-map](https://crates.io/crates/enum-map)] - 使用陣列儲存值、針對列舉型別最佳化的 Map 實作。
* [fizyk20/generic-array](https://github.com/fizyk20/generic-array) - 允許陣列長度由 typenum 指定的技巧。
* [garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] - 支援調整優先順序的優先佇列。
* [greyblake/nutype](https://github.com/greyblake/nutype) [[nutype](https://crates.io/crates/nutype)] - 可定義具有驗證條件的新型別結構。 [![build status](https://github.com/greyblake/nutype/actions/workflows/ci.yml/badge.svg)](https://github.com/greyblake/nutype/actions)
* [jeromefroe/lru-rs](https://github.com/jeromefroe/lru-rs) [[lru](https://crates.io/crates/lru)] - LRU 快取實作，`put`、`get`、`get_mut` 與 `pop` 操作皆為 O(1)。 [![crates.io](https://img.shields.io/crates/v/lru.svg)](https://crates.io/crates/lru)
* [mikwielgus/undoredo](https://github.com/mikwielgus/undoredo) [[undoredo](https://crates.io/crates/undoredo)] - 適用於任意資料結構的復原／重做模式實作。支援以差異（稀疏 Diff）、快照及命令為基礎的復原／重做，並提供自訂型別的 Derive 巨集。相容 no_std 與 serde。 [![Crates.io](https://img.shields.io/crates/v/undoredo.svg)](https://crates.io/crates/undoredo)
* [mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) - 用於快速地理空間索引與最近鄰查詢的 K 維樹。
* [orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] - 持久化資料結構。 [![build badge](https://github.com/orium/rpds/workflows/CI/badge.svg)](https://github.com/orium/rpds/actions?query=workflow%3ACI)
* [RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) - Roaring Bitmap。
* [rust-itertools/itertools](https://github.com/rust-itertools/itertools) - 額外的 Iterator Adapter、函式與巨集。
* [sorairolake/bit-int](https://github.com/sorairolake/bit-int) [[bit-int](https://crates.io/crates/bit-int)] - 任意固定位元寬度整數函式庫。 [![CI](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml)
* [tnballo/scapegoat](https://github.com/tnballo/scapegoat) [[scapegoat](https://crates.io/crates/scapegoat)] - 安全、可失敗且僅使用堆疊的 `BTreeSet` 與 `BTreeMap` 替代方案。 [![GitHub Actions](https://github.com/tnballo/scapegoat/workflows/test/badge.svg?branch=master)](https://github.com/tnballo/scapegoat/actions)
* [yamafaktory/hypergraph](https://github.com/yamafaktory/hypergraph) [[hypergraph](https://crates.io/crates/hypergraph)] - Hypergraph 是用於產生有向超圖的資料結構函式庫。 [![ci](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml)

### 資料視覺化

* [blitzarx1/egui_graphs](https://github.com/blitzarx1/egui_graphs) [[egui_graphs](https://crates.io/crates/egui_graphs)] - 由 egui 與 petgraph 驅動的互動式圖形視覺化元件。 [![Crates.io](https://img.shields.io/crates/v/egui_graphs)](https://crates.io/crates/egui_graphs) [![docs.rs](https://img.shields.io/docsrs/egui_graphs)](https://docs.rs/egui_graphs)
* [djduque/pgfplots](https://github.com/djduque/pgfplots) [[pgfplots](https://crates.io/crates/pgfplots)] - 產生出版品質圖表的函式庫。 [![build](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml/badge.svg)](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml)
* [mazznoer/colorgrad-rs](https://github.com/mazznoer/colorgrad-rs) [[colorgrad](https://crates.io/crates/colorgrad)] - 適用於資料視覺化、圖表、遊戲、地圖、生成藝術等用途的色階函式庫。
* [milliams/plotlib](https://github.com/milliams/plotlib) - Rust 資料繪圖函式庫。
* [plotly](https://github.com/plotly/plotly.rs) - Rust 版 Plotly。
* [plotpy](https://github.com/cpmech/plotpy) [[plotpy](https://crates.io/crates/plotpy)] - 透過 Python（Matplotlib）使用的 Rust 繪圖函式庫。
* [plotters](https://github.com/plotters-rs/plotters) - ![build badge](https://github.com/plotters-rs/plotters/workflows/CI/badge.svg)](https://github.com/plotters-rs/plotters/actions)
* [rerun](https://github.com/rerun-io/rerun) - [[rerun](https://crates.io/crates/rerun)] - 用於記錄電腦視覺與機器人資料（張量、點雲等）的 SDK，並附帶可探索資料隨時間變化的視覺化工具。
* [saresend/gust](https://github.com/saresend/Gust) - 小型圖表／視覺化工具，並部分實作 Vega。
* [shergin/malevich](https://github.com/shergin/malevich) [[malevich](https://crates.io/crates/malevich)] - 終端機繪圖：折線、散佈、長條、直方圖、熱圖、箱型圖、小提琴圖等，並自動設定座標軸。
* [wangjiawen2013/charton](https://github.com/wangjiawen2013/charton) - Rust 分層圖形文法函式庫。 [![Documentation](https://img.shields.io/docsrs/charton/latest)](https://docs.rs/charton) [![Build Status](https://github.com/wangjiawen2013/charton/actions/workflows/ci.yml/badge.svg)](https://github.com/wangjiawen2013/charton/actions)

### 資料庫

[[database](https://crates.io/keywords/database)]

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

  * [ArangoDB](https://arangodb.com)
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 輕量 ArangoDB 物件文件、關聯式與圖形映射器。 [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
    * [Arangors](https://github.com/fMeow/arangors) [[arangors](https://crates.io/crates/arangors)] - ArangoDB 驅動程式。
  * [Cassandra](https://cassandra.apache.org/_/index.html) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
    * [AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] - 原生用戶端。
    * [cassandra-rs](https://github.com/cassandra-rs/cassandra-rs) - DataStax C／C++ 繫結。
    * [krojew/cdrs-tokio](https://github.com/krojew/cdrs-tokio) - 以 100% Rust 撰寫的高階非同步 Cassandra 用戶端。 [![build badge](https://github.com/krojew/cdrs-tokio/actions/workflows/rust.yml/badge.svg)](https://github.com/krojew/cdrs-tokio/actions)
      * [[cassandra-protocol](https://crates.io/crates/cassandra-protocol)] - Cassandra 協定實作。
      * [[cdrs-tokio](https://crates.io/crates/cdrs-tokio)] - 可用於正式環境的非同步 Apache Cassandra 驅動程式。
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] - CouchDB REST API 用戶端。
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
    * [softprops/dynomite](https://github.com/softprops/dynomite) - 用於以強型別且便利的方式操作 `rusoto_dynamodb` 的函式庫。 [![build badge](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] - [Elastic](https://www.elastic.co/) REST API 用戶端。
    * [elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] - elastic 是以 Rust 撰寫、適用於 Elasticsearch 的高效能模組化 API 用戶端。 [![build badge](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
  * etcd
    * [jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] - CoreOS etcd 用戶端函式庫。
  * [InfluxDB](https://www.influxdata.com/)
    * [driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) - 同步介面。
  * LevelDB
    * [skade/leveldb](https://github.com/skade/leveldb) - [LevelDB](https://github.com/google/leveldb) 繫結。
  * [LMDB](https://www.symas.com/lmdb.php) [[lmdb](https://crates.io/keywords/lmdb)]
    * [meilisearch/heed](https://github.com/meilisearch/heed) [[heed](https://crates.io/crates/heed)] - 完整型別的 LMDB 封裝，額外負擔極低。
    * [vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] - LMDB Rust 繫結。
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] - [MongoDB](https://www.mongodb.com/) 繫結。
  * [MongrelDB](https://www.mongreldb.com)
    * [visorcraft/MongrelDB](https://github.com/visorcraft/MongrelDB) [[mongreldb-core](https://crates.io/crates/mongreldb-core)] - 內嵌式欄式資料庫引擎，提供 SQL、向量搜尋、全文搜尋與 AI 原生檢索。 [![build badge](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
    * [seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) - 輕量簡易的鍵值儲存庫，深受 Python PickleDB 啟發。
  * [PoloDB](https://www.polodb.org/)
    * [PoloDB](https://github.com/PoloDB/PoloDB) - 內嵌式 JSON 資料庫，提供類似 MongoDB 的 API。 ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/PoloDB/PoloDB/rust.yml)
  * [Redb](https://www.redb.org/)
    * [Redb](https://github.com/cberner/redb) - 內嵌式鍵值資料庫，介面類似 rocksdb、lmdb 等其他內嵌式鍵值儲存庫。 ![GitHub Workflow Status](https://github.com/cberner/redb/actions/workflows/ci.yml/badge.svg)
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [aembke/fred](https://github.com/aembke/fred.rs) [[fred](https://crates.io/crates/fred)] - 適用於 Tokio 的 Rust 高階非同步 [Redis](https://redis.io/) 用戶端。 [![CircleCI](https://circleci.com/gh/aembke/fred.rs/tree/main.svg?style=svg)]([https://circleci.com/gh/aembke/fred.rs/tree/main](https://app.circleci.com/pipelines/github/aembke/fred.rs?branch=main))
    * [redis-rs](https://github.com/redis-rs/redis-rs) - [Redis](https://redis.io/) 函式庫。 [![Rust](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml)
  * [RocksDB](https://rocksdb.org/)
    * [rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) - RocksDB 繫結。 [![RocksDB CI](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml)
  * [SurrealDB](https://surrealdb.com/)
    * [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) - SurrealDB 內嵌式文件圖形資料庫。
  * [UnQLite](https://github.com/symisc/unqlite)
    * [zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) - UnQLite 繫結。
  * [ZooKeeper](https://zookeeper.apache.org/)
    * [bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] - Apache ZooKeeper 用戶端函式庫。
    * [krojew/rust-zookeeper](https://github.com/krojew/rust-zookeeper) [[zookeeper-async](https://crates.io/crates/zookeeper-async)] - 以 Tokio 為基礎的非同步 Zookeeper 用戶端。 ![build status](https://github.com/krojew/rust-zookeeper/actions/workflows/rust.yml/badge.svg)
* OGM [[ogm](https://crates.io/keywords/ogm)]
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 輕量 ArangoDB 物件文件、關聯式與圖形映射器。 [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [ayarotsky/diesel-guard](https://github.com/ayarotsky/diesel-guard) - Diesel 與 SQLx 的 Linter，可偵測危險的 PostgreSQL 遷移操作（資料表鎖定、重寫、阻塞作業），並建議安全替代方案。 [![crate](https://img.shields.io/crates/v/diesel-guard.svg)](https://crates.io/crates/diesel-guard)
  * [diesel-rs/diesel](https://github.com/diesel-rs/diesel) - ORM 與查詢建置器。
  * [ivanceras/rustorm](https://github.com/ivanceras/rustorm) - ORM。
  * [njord](https://github.com/njord-rs/njord) - ⛵ 多用途、功能豐富的 Rust ORM。 [![build status](https://github.com/njord-rs/njord/actions/workflows/core.yml/badge.svg)](https://github.com/njord-rs/njord/actions/workflows/core.yml) ![crates.io](https://img.shields.io/crates/v/njord.svg)
  * [rbatis/rbatis](https://github.com/rbatis/rbatis) - 高效能（以 JSON 為基礎）的 ORM 框架。
  * [SeaQL/sea-orm](https://github.com/SeaQL/sea-orm) - 🐚 非同步且動態的 ORM。 [![crate](https://img.shields.io/crates/v/sea-orm.svg)](https://crates.io/crates/sea-orm) [![docs](https://img.shields.io/docsrs/sea-orm/latest)](https://docs.rs/sea-orm) [![build status](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml)
  * [SeaQL/seaography](https://github.com/SeaQL/seaography) - 🧭 SeaORM 的 GraphQL 框架。 [![crate](https://img.shields.io/crates/v/seaography.svg)](https://crates.io/crates/seaography) [![docs](https://img.shields.io/docsrs/seaography/latest)](https://docs.rs/seaography) [![build status](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml/badge.svg)](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml)
  * [thegenius/taitan-orm](https://github.com/thegenius/taitan-orm) - Rust 頂尖 ORM，支援非同步與編譯期程式碼產生。
* [sfackler/r2d2](https://github.com/sfackler/r2d2) - 通用連線集區。
* SQL [[sql](https://crates.io/keywords/sql)]
  * Generic
    * [launchbadge/sqlx](https://github.com/launchbadge/sqlx) - 支援強型別的非同步 PostgreSQL／MySQL／SQLite 連線集區。 [![build badge](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
    * [SeaQL/sea-query](https://github.com/SeaQL/sea-query) - 🔱 適用於 MySQL、Postgres 與 SQLite 的動態 SQL 查詢建置器。 [![crate](https://img.shields.io/crates/v/sea-query.svg)](https://crates.io/crates/sea-query) [![docs](https://img.shields.io/docsrs/sea-query/latest)](https://docs.rs/sea-query) [![build status](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml)
    * [SeaQL/sea-schema](https://github.com/SeaQL/sea-schema) - 🌿 SQL 結構描述定義與探索工具。 [![crate](https://img.shields.io/crates/v/sea-schema.svg)](https://crates.io/crates/sea-schema) [![docs](https://img.shields.io/docsrs/sea-schema/latest)](https://docs.rs/sea-schema) [![build status](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml)
  * Microsoft SQL
    * [prisma/tiberius](https://github.com/prisma/tiberius) - ![Cargo tests](https://github.com/prisma/tiberius/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prisma/tiberius/actions/workflows/test.yml)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) - MySQL Proxy。 [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
    * [blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] - 以 Tokio 為基礎的非同步 MySQL 驅動程式。 [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] - 原生 MySQL 用戶端。
  * Oracle
    * [kubo/rust-oracle](https://github.com/kubo/rust-oracle) [[oracle](https://crates.io/crates/oracle)] - Oracle 驅動程式。 [![build badge](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml/badge.svg?branch=master)](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 快速實作，外部相依套件少。
    * [isdaniel/pg-walstream](https://github.com/isdaniel/pg-walstream) - 高效能非同步 CDC（變更資料擷取）函式庫，用於 PostgreSQL 邏輯與實體複寫串流。 [![Crates.io Version](https://img.shields.io/crates/v/pg_walstream)](https://crates.io/crates/pg_walstream)
    * [rust-postgres](https://github.com/rust-postgres/rust-postgres) [[postgres](https://crates.io/crates/postgres)] - 原生 [PostgreSQL](https://www.postgresql.org/) 用戶端。
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [rusqlite](https://github.com/rusqlite/rusqlite) - [Sqlite3](https://sqlite.org/index.html) 繫結。
* [VennDB](https://venndb.plabayo.tech/) [[venndb](https://github.com/plabayo/venndb)] - 以 Rust 撰寫的僅追加記憶體資料庫，使用位元（旗標）欄位查詢資料列。

### 日期與時間

[[date](https://crates.io/keywords/date), [time](https://crates.io/keywords/time)]

* [arthurhenrique/rusti-cal](https://github.com/arthurhenrique/rusti-cal) [[rusti-cal](https://crates.io/crates/rusti-cal)] - cal(1) 複製版，閃電般快速，可處理超過 9999 年的日期；以 Rust 撰寫。
* [burntSushi/jiff](https://github.com/BurntSushi/jiff) - Rust 日期時間函式庫，鼓勵你順利踏入成功之坑。 [![Build status](https://github.com/BurntSushi/jiff/workflows/ci/badge.svg)](https://github.com/BurntSushi/jiff/actions)
* [chronotope/chrono](https://github.com/chronotope/chrono) - 日期與時間函式庫。
* [Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] - 將人類可讀時間轉換成毫秒的函式庫。 [![build badge](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)
* [sorairolake/dos-date-time](https://github.com/sorairolake/dos-date-time) [[dos-date-time](https://crates.io/crates/dos-date-time)] - MS-DOS 日期與時間函式庫。 [![CI](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml)
* [sorairolake/nt-time](https://github.com/sorairolake/nt-time) [[nt-time](https://crates.io/crates/nt-time)] - Windows 檔案時間函式庫。 [![CI](https://github.com/sorairolake/nt-time/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/nt-time/actions?query=workflow%3ACI)
* [time-rs/time](https://github.com/time-rs/time) - ![build badge](https://github.com/time-rs/time/workflows/Build/badge.svg)](https://github.com/time-rs/time/actions)

### 分散式系統

* Antimony
  * [antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] - 串流處理／分散式運算平台。
* Apache Kafka
  * [fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] - [librdkafka](https://github.com/confluentinc/librdkafka) 繫結。
  * [gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) [[schema_registry_converter](https://crates.io/crates/schema_registry_converter)] - 用於整合 [Confluent Schema Registry](https://www.confluent.io/product/confluent-platform/data-compatibility/)。
  * [kafka-rust/kafka-rust](https://github.com/kafka-rust/kafka-rust) - Apache Kafka Rust 用戶端。
* HDFS
  * [hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) [[hdfs](https://crates.io/crates/hdfs)] - libhdfs 繫結。
* Other
  * [build-trust/ockam](https://github.com/build-trust/ockam) [[ockam](https://crates.io/crates/ockam)] - 分散式應用程式的端對端加密、相互驗證與 ABAC。 [![build badge](https://github.com/build-trust/ockam/workflows/Rust/badge.svg)](https://github.com/build-trust/ockam)
  * [zannis/shove](https://github.com/zannis/shove) [[shove](https://crates.io/crates/shove)] - 型別安全的非同步發布／訂閱，使用一致 API 支援 RabbitMQ、Kafka、NATS JetStream、AWS SNS／SQS 與 Redis Streams，並具備重試、DLQ 路由及自動擴縮消費者群組。 [![CI](https://github.com/zannis/shove/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/zannis/shove/actions/workflows/ci.yml)

### 領域驅動設計

  * [serverlesstechnology/cqrs](https://github.com/serverlesstechnology/cqrs) [[cqrs-es](https://crates.io/crates/cqrs-es)] - CQRS 與事件溯源框架，附有[使用者指南](https://doc.rust-cqrs.org/)。

### eBPF

* [aya/aya-rs](https://github.com/aya-rs/aya) - 以開發者體驗與可操作性為核心打造。
* [libbpf/libbpf-rs](https://github.com/libbpf/libbpf-rs) - 極簡且遵循主張的 eBPF 工具。

### 電子郵件

[[email](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [duesee/imap-codec](https://github.com/duesee/imap-codec) [[imap-codec](https://crates.io/crates/imap-codec)] - 穩定完整的 IMAP Codec。 [![Build & Test](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml)
* [gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) - SendGrid API 函式庫。
* [jdrouet/catapulte](https://github.com/jdrouet/catapulte) - 使用 [MRML](https://github.com/jdrouet/mrml) 範本寄送電子郵件的微服務。
* [jdrouet/jolimail](https://github.com/jdrouet/jolimail) - 用來建置 [MRML](https://github.com/jdrouet/mrml) 範本的網頁應用程式。
* [jdrouet/mrml](https://github.com/jdrouet/mrml) - 可產生適用於任何郵件用戶端之精美電子郵件範本的函式庫。
* [lettre/lettre](https://github.com/lettre/lettre) - SMTP 函式庫。 [![CI](https://github.com/lettre/lettre/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/lettre/lettre/actions/workflows/test.yml)
* [mailtutan/mailtutan](https://github.com/mailtutan/mailtutan) - 供測試與開發環境使用的 SMTP 伺服器。
* [meli/meli](https://github.com/meli/meli) - 🐝 終端機郵件用戶端。
* [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists) [[check-if-email-exists](https://crates.io/crates/check-if-email-exists)] - 無須寄信即可檢查電子郵件地址是否存在，提供 SMTP 驗證、一次性地址偵測與 Catch-all 檢查。 [![Actions Status](https://github.com/reacherhq/check-if-email-exists/workflows/pr/badge.svg)](https://github.com/reacherhq/check-if-email-exists/actions)
* [rustmailer/bichon](https://github.com/rustmailer/bichon) - 輕量且高效能的電子郵件封存工具，支援全文搜尋與 Web UI。
* [staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] - 剖析真實世界電子郵件檔案的函式庫。
* [stalwartlabs/mail-auth](https://github.com/stalwartlabs/mail-auth) [[mail-auth](https://crates.io/crates/mail-auth)] - DKIM、ARC、SPF 與 DMARC 訊息驗證函式庫。 [![build badge](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml)
* [stalwartlabs/mail-parser](https://github.com/stalwartlabs/mail-parser) [[mail-parser](https://crates.io/crates/mail-parser)] - 快速穩健的電子郵件剖析函式庫，完整支援 MIME。 [![build badge](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml)
* [stalwartlabs/mail-send](https://github.com/stalwartlabs/mail-send) [[mail-send](https://crates.io/crates/mail-send)] - 支援 DKIM 的電子郵件建構器與 SMTP 用戶端函式庫。 [![build badge](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml)
* [tweedegolf/mailcrab](https://github.com/tweedegolf/mailcrab) - 開發用電子郵件測試伺服器。

### 編碼

[[encoding](https://crates.io/keywords/encoding)]

* ASN.1
  * [alex/rust-asn1](https://github.com/alex/rust-asn1) - ASN.1（DER）序列化器。
* Barcode
  * [rxing-core/rxing](https://github.com/rxing-core/rxing) [[rxing](https://crates.io/crates/rxing)] - ZXing 條碼函式庫的 Rust 移植版。 [![Rust](https://github.com/rxing-core/rxing/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rxing-core/rxing/actions/workflows/rust.yml)
* Binary
  * [bincode](https://crates.io/crates/bincode) - 二進位編碼／解碼器。
  * [bincode-next](https://crates.io/crates/bincode-next) - 二進位編碼／解碼器，接替目前已停止維護的 bincode。
  * [jamesmunns/postcard](https://github.com/jamesmunns/postcard) [[postcard](https://crates.io/crates/postcard)] - Postcard 是以 `#![no_std]` 為核心的 Serde 序列化與反序列化器。
  * [m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] - 跨平台、零拷貝且能處理位元組序的二進位剖析。
* BSON
  * [mongodb/bson-rust](https://github.com/mongodb/bson-rust) - BSON 編碼與解碼支援。
* Byte swapping
  * [BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) - 支援大端序、小端序與原生位元組序。
* Cap'n Proto
  * [capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) - Cap’n Proto 是分散式系統的型別系統。
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) - Serde 的 CBOR 支援。
* Character Encoding
  * [hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] - 面向 Gecko 的 Encoding Standard 實作。
  * [lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) - Rust 字元編碼支援（又稱 rust-encoding）。以 WHATWG Encoding Standard 為基礎，並提供進階錯誤偵測與復原介面。
* CRC
  * [mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) - Rust CRC（16、32、64）實作，支援多種標準。
* CSV
  * [BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) - 快速且彈性的 CSV 讀寫器，支援 Serde。
* Data Matrix
  * [jannschu/datamatrix-rs](https://github.com/jannschu/datamatrix-rs) [[datamatrix](https://crates.io/crates/datamatrix)] - 具備最佳化編碼器的 Data Matrix（ECC 200）解碼與編碼工具。 [![CI](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml)
* EDN
  * [edn-rs](https://github.com/naomijub/edn-rs) [[edn-rs](https://crates.io/crates/edn-rs)] - 將 EDN 格式剖析及輸出為 Rust 型別的 crate。
* [FlatBuffers](https://flatbuffers.dev/)
  * [frol/flatc-rust](https://github.com/frol/flatc-rust) - Cargo 建置腳本的 FlatBuffers 編譯器（flatc）整合。
* HAR
  * [mandrean/har-rs](https://github.com/mandrean/har-rs) [[har](https://crates.io/crates/har)] - HTTP Archive Format（HAR）序列化與反序列化函式庫。
* HTML
  * [servo/html5ever](https://github.com/servo/html5ever) - 高效能、達瀏覽器等級的 HTML5 剖析器。
* JSON
  * [cloudwego/sonic-rs](https://github.com/cloudwego/sonic-rs) [[sonic-rs](https://crates.io/crates/sonic-rs)] - 以 SIMD 為基礎的快速 Rust JSON 函式庫。
  * [importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson](https://crates.io/crates/ajson)] - 快速取得 JSON 值。
  * [rustadopt/jzon-rs](https://github.com/rustadopt/jzon-rs/) [[jzon](https://crates.io/crates/jzon)] - JSON 實作。
  * [serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] - [Serde](https://github.com/serde-rs/serde) 框架的 JSON 支援。
  * [simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] - 以移植版 simdjson 為基礎的高效能 JSON 剖析器。
  * [vcschapp/bufjson](https://github.com/vcschapp/bufjson) [[bufjson](https://crates.io/crates/bufjson)] - 串流 JSON 剖析器與 Lexer，零拷貝、零配置，並可選擇啟用串流 JSON Pointer 評估器。
* MsgPack
  * [3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) - 中階／低階 MessagePack 實作。
* NetCDF
  * [georust/netcdf](https://github.com/georust/netcdf) [[netcdf](https://crates.io/crates/netcdf)] - 中階 netCDF 繫結，可輕鬆將類陣列結構讀寫至檔案。
* PEM
  * [jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] - 剖析並編碼 PEM 格式資料。
* ProtocolBuffers
  * [stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) - Google Protocol Buffers 的 Rust 實作。
  * [tokio-rs/prost](https://github.com/tokio-rs/prost) - ![continuous integration](https://github.com/tokio-rs/prost/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/tokio-rs/prost/actions)
* QR code
  * [magiclen/qrcode-generator](https://github.com/magiclen/qrcode-generator) [[qrcode-generator](https://crates.io/crates/qrcode-generator)] - 以純 Rust 產生 ISO／IEC 18004 QR Code 與 Micro QR Code 符號，以及 ISO／IEC 23941 rMQR 符號，並將其渲染為灰階、PNG 與 SVG 圖片。 [![CI](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml)
  * [sorairolake/qrcode-rust2](https://github.com/sorairolake/qrcode-rust2) [[qrcode2](https://crates.io/crates/qrcode2)] - QR Code 編碼函式庫。 [![CI](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml/badge.svg?branch=main)](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml)
  * [WanzenBug/rqrr](https://github.com/WanzenBug/rqrr) [[rqrr](https://crates.io/crates/rqrr)] - 從任何圖片來源偵測並讀取 QR Code。 [![CI](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml/badge.svg?branch=master)](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml)
* rkyv
  * [rkyv/rkyv](https://github.com/rkyv/rkyv) [[rkyv](https://crates.io/crates/rkyv)] - rkyv（archive）是零拷貝反序列化框架。
* RON (Rusty Object Notation)
  * [https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) - Rusty Object Notation。
* Serde
  * [iddm/serde-aux](https://github.com/iddm/serde-aux/) - 搭配 serde 函式庫使用的其他工具。 [![CI](https://github.com/iddm/serde-aux/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/serde-aux/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/serde-aux.svg)](https://crates.io/crates/serde-aux)
* TOML
  * [tamasfe/taplo](https://github.com/tamasfe/taplo) [[taplo](https://crates.io/crates/taplo)] - TOML 工具組。 [![CI](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
  * [toml-rs/toml](https://github.com/toml-rs/toml) - ![CI](https://github.com/toml-rs/toml/actions/workflows/ci.yml/badge.svg)](https://github.com/toml-rs/toml/actions/workflows/ci.yml)
* [vitiral/stfu8](https://github.com/vitiral/stfu8) [[stfu8](https://crates.io/crates/stfu8)] - UTF-8 編碼的 Sorta Text Format。
* XML
  * [Florob/RustyXML](https://github.com/Florob/RustyXML) - XML 剖析器。
  * [netvl/xml-rs](https://github.com/netvl/xml-rs) - 串流 XML 函式庫。
  * [shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) - XML 函式庫。
  * [shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) - XPath 函式庫。
  * [tafia/quick-xml](https://github.com/tafia/quick-xml) - 高效能 XML Pull Reader／Writer。
  * [yaserde](https://github.com/luminvent/yaserde) - 專為 XML 打造的另一款序列化／反序列化器。
* YAML
  * [chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) - 補足缺漏的 YAML 1.2 實作。
  * [saphyr](https://github.com/saphyr-rs/saphyr) - 專門用於剖析 YAML 的一組 crates。
  * [serde-saphyr](https://github.com/bourumir-wyngs/serde-saphyr) - Serde 的 YAML 序列化／反序列化器，著重避免 Panic 並提供良好錯誤訊息。 [![crates.io](https://img.shields.io/crates/d/serde-saphyr.svg)](https://crates.io/crates/serde-saphyr)

### 檔案系統

[[filesystem](https://crates.io/keywords/filesystem)]
* Operations
  * [Camino](https://github.com/camino-rs/camino) [[camino](https://crates.io/crates/camino)] - 類似 Rust `std::path::Path`，但支援 UTF-8。
  * [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) [[fff-search](https://crates.io/crates/fff-search)] - 具抗拼字錯誤能力的檔案與內容搜尋函式庫，提供 Frecency 排序、Git 感知註記、背景監看器與輕量記憶體內容索引。另提供 MCP 伺服器、Node／Bun SDK、C 函式庫與 Neovim 外掛。
  * [dnbln/dir-structure](https://github.com/dnbln/dir-structure) [[dir-structure](https://crates.io/crates/dir-structure)] - 使用純 Rust 結構體建模檔案系統樹。 [![Tests](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml/badge.svg?branch=trunk)](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml)
  * [OpenDAL](https://github.com/apache/opendal) [[opendal](https://crates.io/crates/opendal)] - 統一的資料存取層，讓使用者能無縫且有效率地從各種儲存服務擷取資料。 [![build](https://img.shields.io/github/actions/workflow/status/apache/opendal/ci_core.yml?branch=main)](https://github.com/apache/opendal/actions?query=branch%3Amain)
  * [ParthJadhav/Rust_Search](https://github.com/ParthJadhav/Rust_Search) [[rust_search](https://crates.io/crates/rust_search)] - 速度飛快的檔案搜尋函式庫。
  * [pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) [[dbus-udisks2](https://crates.io/crates/dbus-udisks2)] - UDisks2 DBus API。
  * [pop-os/sys-mount](https://github.com/pop-os/sys-mount) [[sys-mount](https://crates.io/crates/sys-mount)] - `mount`／`umount2` 系統呼叫的高階抽象層。
  * [vitiral/path_abs](https://github.com/vitiral/path_abs) [[path_abs](https://crates.io/crates/path_abs)] - 絕對路徑的可序列化型別及相關方法。
  * [webdesus/fs_extra](https://github.com/webdesus/fs_extra) - 擴充標準函式庫 std::fs 與 std::io 的功能。
* Temporary Files
  * [Stebalien/tempfile](https://github.com/Stebalien/tempfile) - 暫存檔案函式庫。
  * [Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] - 列出並操作 Unix 延伸檔案屬性。
  * [zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] - 零細節、重視隱私且可嵌入的檔案系統。

### 金融

* [avhz/RustQuant](https://github.com/avhz/RustQuant) [[RustQuant](https://crates.io/crates/RustQuant)] - 量化金融函式庫。 ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/avhz/RustQuant/build.yml)
* [d-e-s-o/apca](https://github.com/d-e-s-o/apca) [[apca](https://crates.io/crates/apca)] - 以主張為先且完整的 [Alpaca API](https://alpaca.markets/) 繫結，適用於股票交易等用途。 ![GitHub Workflow Status](https://github.com/d-e-s-o/apca/actions/workflows/test.yml/badge.svg?branch=main)
* [kand-ta/kand](https://github.com/kand-ta/kand) [[kand](https://crates.io/crates/kand)] - 以 Rust、Python 與 JS／TS（WASM）打造的現代高效能技術分析函式庫。 [![image](https://img.shields.io/crates/v/kand.svg)](https://crates.io/crates/kand)
* [rust-dd/stochastic-rs](https://github.com/rust-dd/stochastic-rs) [[stochastic-rs](https://crates.io/crates/stochastic-rs)] - 量化金融：提供 130 多種隨機過程、選擇權定價與校準、波動率曲面及 Copula，並使用 SIMD／GPU 加速與 Python 繫結。 ![GitHub Workflow Status](https://github.com/rust-dd/stochastic-rs/actions/workflows/rust.yml/badge.svg?branch=main)
* [wickra-lib/wickra](https://github.com/wickra-lib/wickra) [[wickra](https://crates.io/crates/wickra)] - 以串流為先的技術分析：提供 514 種指標，由 Rust 核心以每個 Tick O(1) 更新；附原生 Python、Node.js、WASM 繫結，以及供 C、C++、C#、Go、Java 和 R 使用的 C ABI 中樞。 [![CI](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml)

### 函數式程式設計

[[functional programming](https://crates.io/keywords/fp)]
* Prelude
  * [JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) - 函數式程式設計函式庫。
  * [myrrlyn/tap](https://github.com/myrrlyn/tap) - 後綴位置管線行為。

### 遊戲開發

另請參閱 [Are we game yet?](https://arewegameyet.rs)。
* Allegro
  * [SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) - [Allegro 5](https://liballeg.org/) 繫結。
* [Awesome Quads](https://github.com/ozkriff/awesome-quads) - miniquad／macroquad 相關程式碼與資源的精選連結清單。
* [Awesome wgpu](https://github.com/rofrol/awesome-wgpu) - wgpu 程式碼與資源精選清單。
* bracket-lib (previously RLTK)
  * [bracket-lib](https://github.com/amethyst/bracket-lib) [[bracket-lib](https://crates.io/crates/bracket-lib)] - Roguelike 工具組（RLTK）。 [![Rust](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml/badge.svg)](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml)
* Challonge
  * [iddm/challonge-rs](https://github.com/iddm/challonge-rs) [[challonge](https://crates.io/crates/challonge)] - Challonge REST API 用戶端函式庫，協助安排錦標賽。 [![CI](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml)
* Entity-Component Systems (ECS)
  * [amethyst/specs](https://github.com/amethyst/specs) - Specs 平行 ECS。
  * [legion](https://github.com/amethyst/legion) - 功能豐富且高效能的 ECS 函式庫，樣板程式碼極少。 [![build badge](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* Game Engines
  * [AscendingCreations/AscendingGraphics](https://github.com/AscendingCreations/AscendingGraphics) - 使用 WGPU 與 Winit 的 2D 渲染框架。 [![Crates.io](https://img.shields.io/crates/v/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics) [![license](https://img.shields.io/crates/l/ascending_graphics.svg)](https://github.com/AscendingCreations/AscendingGraphics/blob/main/LICENSE.MIT) [![Crates.io](https://img.shields.io/crates/d/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics)
  * [Balaur](https://github.com/balaurengine/balaur) - 確定性的 2D 與 3D 遊戲引擎，具備 Rune 腳本、Rapier 物理引擎及內建編輯器。 [![Test](https://github.com/balaurengine/balaur/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/balaurengine/balaur/actions/workflows/test.yml)
  * [Bevy](https://github.com/bevyengine/bevy) - 令人耳目一新的簡單資料導向遊戲引擎。 [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy) [![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [Fyrox](https://fyrox.rs/) - 3D 遊戲引擎。 [![Crates.io](https://img.shields.io/crates/v/fyrox.svg)](https://crates.io/crates/fyrox) [![license](https://img.shields.io/crates/l/fyrox.svg)](https://github.com/FyroxEngine/Fyrox/blob/master/LICENSE.md) [![Crates.io](https://img.shields.io/crates/d/fyrox.svg)](https://crates.io/crates/fyrox)
  * [ggez](https://github.com/ggez/ggez) - 輕量遊戲框架，讓你輕鬆製作 2D 遊戲。 [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/ggez.svg)](https://crates.io/crates/ggez)
  * [Kiss3d](https://github.com/dimforge/kiss3d) - 遵循「Keep It Simple, Stupid」原則的 3D 圖形引擎。 [![Crates.io](https://img.shields.io/crates/d/kiss3d.svg)](https://crates.io/crates/kiss3d)
  * [oxidator](https://github.com/Ruddle/oxidator) - 支援 WebGPU 的即時策略遊戲／引擎。
  * [Piston](https://www.piston.rs/) -  [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/piston.svg)](https://crates.io/crates/piston) ![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston)
  * [Unrust](https://github.com/unrust/unrust) - WebGL 2.0／原生遊戲引擎。
* Game Servers
  * [gamedig/rust-gamedig](https://github.com/gamedig/rust-gamedig) [[gamedig](https://crates.io/crates/gamedig)] - 查詢遊戲伺服器資訊，例如名稱、線上玩家數、玩家上限等。 [![Crates.io](https://img.shields.io/crates/v/gamedig.svg)](https://crates.io/crates/gamedig) [![Crates.io](https://img.shields.io/crates/d/gamedig.svg)](https://crates.io/crates/gamedig)
* [Godot](https://godotengine.org/)
  * [adalinesimonian/gdvm](https://github.com/adalinesimonian/gdvm) - CLI 用 Godot 版本管理器。 [![CI](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml)
  * [godot-rust/gdext](https://github.com/godot-rust/gdext) [[gdext](https://crates.io/crates/gdext)] - Godot 4 以上版本遊戲引擎的繫結。 [![CI](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml)
  * [godot-rust/gdnative](https://github.com/godot-rust/gdnative) [[gdnative](https://crates.io/crates/gdnative)] - Godot 3 以上版本遊戲引擎的繫結。 [![CI](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml)
* Minecraft
  * [bedrock-crustaceans/bedrock-rs](https://github.com/bedrock-crustaceans/bedrock-rs) - Minecraft Bedrock Edition 開發的 Rust 通用工具組。 [![GitHub stars](https://img.shields.io/github/stars/bedrock-crustaceans/bedrock-rs)](https://github.com/bedrock-crustaceans/bedrock-rs) [![CI](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml)
  * [FerrumC](https://github.com/ferrumc-rs/ferrumc) - 以 Rust 升級原始 Minecraft 伺服器。 [![build badge](https://github.com/ferrumc-rs/ferrumc/actions/workflows/rust.yml/badge.svg)]
  * [Pumpkin](https://github.com/pumpkin-mc/pumpkin) - 完全以 Rust 撰寫的高效能 Minecraft 伺服器軟體。
  * [SteelMC](https://github.com/Steel-Foundation/SteelMC) - 以效能與相容性為設計目標的 Rust Minecraft 伺服器。
* [Raylib](https://www.raylib.com/)
  * [deltaphc/raylib-rs](https://github.com/deltaphc/raylib-rs) [[raylib](https://crates.io/crates/raylib)] - raylib 繫結。
* [SDL](https://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
  * [brson/rust-sdl](https://github.com/brson/rust-sdl) - SDL1 繫結。
  * [Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) - SDL2 繫結。
* SFML
  * [jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) - [SFML](https://www.sfml-dev.org/) 繫結。
* Skillratings
  * [atomflunder/skillratings](https://github.com/atomflunder/skillratings) [[skillratings](https://crates.io/crates/skillratings)] - 多人遊戲的技能評分演算法集合，例如 Elo、Glicko-2、TrueSkill 等。 [![crates.io badge](https://img.shields.io/crates/v/skillratings)](https://crates.io/crates/skillratings) [![CI](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml/badge.svg)](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml)
* Tatami
  * [giraffekey/tatami](https://github.com/giraffekey/tatami) [[tatami](https://crates.io/crates/tatami-dungeon)] - Roguelike 地城產生演算法。
* Toornament-rs
  * [iddm/toornament-rs](https://github.com/iddm/toornament-rs) - Toornament.com API 繫結。 [![CI](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/toornament.svg)](https://crates.io/crates/toornament)
* Victorem
  * [VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] - 簡易 UDP 遊戲原型的 UDP 伺服器與用戶端框架。

### 地理空間

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [apache/sedona-db](https://github.com/apache/sedona-db) - SedonaDB 是以 Rust 撰寫的地理空間 DataFrame 函式庫。
* [DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] - 座標轉換（2D、3D 與地理空間）。
* [Georust](https://github.com/georust) - 以 Rust 撰寫的地理空間工具與函式庫。
* [georust/geojson](https://github.com/georust/geojson) [[geojson](https://crates.io/crates/geojson)] - 用於序列化與反序列化 GeoJSON 向量 GIS 檔案格式的函式庫。
* [MapLibre/Martin](https://github.com/maplibre/martin) - 地圖圖磚伺服器，支援 PostGIS、MBTiles、PMTiles 與 Sprite。 [![CI build](https://github.com/maplibre/martin/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/martin/actions)[![crates.io version](https://img.shields.io/crates/v/martin.svg)](https://crates.io/crates/martin)[![Book](https://img.shields.io/badge/docs-Book-informational)](https://maplibre.org/martin/)
* [rust-reverse-geocoder](https://github.com/gx0r/rrgeo) - 受 [thampiman/reverse-geocoder](https://github.com/thampiman/reverse-geocoder) 啟發、快速且可離線使用的反向地理編碼器。
* [vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] - UTM、經緯度與 MGRS 座標之間的轉換。

### 圖形演算法

* [neo4j-labs/graph](https://github.com/neo4j-labs/graph) - 高效能圖形演算法函式庫。 [![graph CI status](https://img.shields.io/github/workflow/status/neo4j-labs/graph/CI/main?label=CI)](https://github.com/neo4j-labs/graph/actions/workflows/rust.yml)
* [petgraph/petgraph](https://github.com/petgraph/petgraph) - 圖形資料結構函式庫。 [![graph CI status](https://github.com/petgraph/petgraph/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/petgraph/petgraph/actions/workflows/ci.yml)

### 圖形

[[graphics](https://crates.io/keywords/graphics)]

* Fonts
  * [redox-os/rusttype](https://github.com/redox-os/rusttype) - FreeType 等函式庫的替代方案。
  * [rustybuzz](https://github.com/harfbuzz/rustybuzz) - Harfbuzz 的增量移植版。
* [gfx-rs/gfx](https://github.com/gfx-rs/gfx) - 高效能、無繫結圖形 API。
* [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - 以 gfx-hal 為基礎的原生 WebGPU 實作。 [![build badge](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [gl-rs](https://github.com/rust-windowing/gl-rs) - OpenGL 函式指標載入器。
  * [glium/glium](https://github.com/glium/glium) - 安全的 OpenGL 封裝。
  * [glutin](https://crates.io/crates/glutin) - [GLFW](https://www.glfw.org/) 的替代方案。
  * [PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) - GLFW3 繫結與符合 Rust 慣用方式的封裝。
* PDF
  * [bastibense/libharu_ng](https://github.com/bastibense/libharu_ng) [[libharu_ng](https://crates.io/crates/libharu_ng)] - 輕鬆從 Rust 應用程式產生 PDF。
  * [fschutt/printpdf](https://github.com/fschutt/printpdf) - PDF 寫入函式庫。
  * [fullbleed-engine/fullbleed-official](https://github.com/fullbleed-engine/fullbleed-official) [[fullbleed](https://crates.io/crates/fullbleed)] - 著重列印的 HTML／CSS 轉 PDF 引擎，具備可重用範本、變動資料產生與 Python 繫結。 [![CI](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml)
  * [gastongouron/ironpress](https://github.com/gastongouron/ironpress) [[ironpress](https://crates.io/crates/ironpress)] - 純 Rust HTML／CSS／Markdown 轉 PDF 工具，內建版面配置引擎，無需瀏覽器或系統相依套件。 [![CI](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml)
  * [hayro](https://github.com/LaurenzV/hayro) - 純 Rust PDF 直譯器與渲染器。
  * [J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) - PDF 文件操作工具。
  * [kaj/rust-pdf](https://github.com/kaj/rust-pdf) - 以純 Rust 產生 PDF 檔案。
  * [yfedoseev/pdf_oxide](https://github.com/yfedoseev/pdf_oxide) [[pdf_oxide](https://crates.io/crates/pdf_oxide)] - 快速 PDF 文字擷取、建立與編輯工具，提供 Python 繫結。
* [Vulkan](https://www.vulkan.org/) [[vulkan](https://crates.io/keywords/vulkan)]
  * [erupt](https://gitlab.com/Friz64/erupt) [[erupt](https://crates.io/crates/erupt)] - ![build badge](https://gitlab.com/Friz64/erupt/badges/main/pipeline.svg)](https://gitlab.com/Friz64/erupt/-/pipelines)
  * [vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] - 安全且功能豐富的 Vulkan API Rust 封裝。

### 圖形使用者介面

[[gui](https://crates.io/keywords/gui)]

* [autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) - 簡易跨平台 GUI 自動化函式庫。
* Cocoa
  * [servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) - Core Foundation 與其他 Mac OS X、iOS 低階函式庫的 Rust 繫結。
* [DioxusLabs/dioxus](https://github.com/dioxuslabs/dioxus) - 可攜、高效能且符合人體工學的 Rust 跨平台 UI 建置框架。 ![rust ci](https://github.com/dioxuslabs/dioxus/actions/workflows/main.yml/badge.svg)
* [emilk/egui](https://github.com/emilk/egui) - 簡單、快速且高度可攜的立即模式 GUI 函式庫。egui 可在網頁、原生環境與你喜愛的遊戲引擎中執行。 [![Build Status](https://github.com/emilk/egui/workflows/CI/badge.svg)](https://github.com/emilk/egui/actions?workflow=CI)
* [emoon/rust_minifb](https://github.com/emoon/rust_minifb) - minifb 是跨平台視窗配置工具，可選擇使用點陣圖渲染，並提供簡易滑鼠與鍵盤輸入功能。主要用於快速製作原型。
* [euv-dev/euv](https://github.com/euv-dev/euv) [[euv](https://crates.io/crates/euv)] - Rust 宣告式跨平台 UI 框架，具備虛擬 DOM、反應式訊號與供 WebAssembly 使用的 HTML 巨集。 [![CI](https://github.com/euv-dev/euv/actions/workflows/rust.yml/badge.svg)](https://github.com/euv-dev/euv/actions)
* [FerrisMind/shadcn-rs](https://github.com/FerrisMind/shadcn-rs) [[iced-shadcn](https://crates.io/crates/iced-shadcn)] - 採用 shadcn/ui 美學風格的 iced 與 egui 元件集合，包含 [egui-shadcn](https://crates.io/crates/egui-shadcn)。
* [FLTK](https://www.fltk.org/)
  * [fltk-rs](https://github.com/fltk-rs/fltk-rs) - FLTK 繫結。 [![Build](https://github.com/fltk-rs/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/fltk-rs/fltk-rs/actions)
* [Flutter](https://flutter.dev/)
  * [cunarist/rinf](https://github.com/cunarist/rinf) - Rust 作為 Flutter 後端，Flutter 作為 Rust 前端。 [![Build Test](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml/badge.svg)](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml?query=branch%3Amain)
  * [flutter-rs](https://github.com/flutter-rs/flutter-rs) - 使用 Dart 和 Rust 建置 Flutter 桌面應用程式。
  * [fzyzcjy/flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge) - Flutter／Dart ↔ Rust 的高階記憶體安全繫結產生器。
* [fschutt/azul](https://github.com/fschutt/azul) - 免費、實用且以 IMGUI 為核心的 GUI 框架，可快速開發 Rust 桌面應用程式，並由 Mozilla WebRender 渲染引擎支援。
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
  * [gtk-rs/gtk4-rs](https://github.com/gtk-rs/gtk4-rs) - GTK4 繫結。 ![CI](https://github.com/gtk-rs/gtk4-rs/workflows/CI/badge.svg)
  * [relm](https://github.com/antoyo/relm) - 受 Elm 啟發、以 GTK+ 為基礎的非同步 GUI 函式庫。
* [iced-rs/iced](https://github.com/iced-rs/iced) [[iced](https://crates.io/crates/iced)] - 以簡潔與型別安全為核心、受 Elm 啟發的跨平台 GUI 函式庫。
* [ImGui](https://github.com/ocornut/imgui)
  * [imgui-rs](https://github.com/imgui-rs/imgui-rs) - ImGui 繫結。 [![Build Status](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
  * [Kiss-ui](https://github.com/KISS-UI/kiss-ui) - 以 IUP 為基礎建置的簡易 UI 框架。
* [ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - 真正原生且跨平台的 GUI 函式庫。同一份統一程式碼可作為原生 GUI、HTML 網頁與 TUI 執行。
* [libui](https://github.com/andlabs/libui)
  * [rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) - libui 繫結。
* [linebender/xilem](https://github.com/linebender/xilem) [[xilem](https://crates.io/crates/xilem)] - 受 React、SwiftUI 與 Elm 啟發的實驗性 Rust 反應式 UI 框架。以 Masonry、Vello／wgpu、Parley 和 AccessKit 為基礎，提供網頁及原生後端。 [![CI](https://img.shields.io/github/actions/workflow/status/linebender/xilem/ci.yml?logo=github&label=CI)](https://github.com/linebender/xilem/actions)
* [longbridge/gpui-component](https://github.com/longbridge/gpui-component) [[gpui-component](https://crates.io/crates/gpui-component)] - 用於使用 GPUI 建置精彩桌面應用程式的 UI 元件。
* [makepad/makepad](https://github.com/makepad/makepad) [[makepad-widgets](https://crates.io/crates/makepad-widgets)] - Makepad 是創意軟體開發平台，可編譯為 wasm／WebGL、OSX／Metal、Windows／DX11 及 Linux／OpenGL。
* [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [nuklear-rust](https://github.com/snuk182/nuklear-rust) - Nuklear 繫結。
* [OrbTk](https://github.com/redox-os/orbtk) - Orbital Widget Toolkit 是以 SDL2 為基礎的多平台（G）UI 工具組。 [![Build and test](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) - 易用的立即模式 2D GUI 函式庫。
* [project-blinc/Blinc](https://github.com/project-blinc/Blinc) [[blinc_app](https://crates.io/crates/blinc_app)] - GPU 加速跨平台 UI 框架，提供受 GPUI 啟發的建置器 API、玻璃擬態效果、彈簧物理動畫，並支援桌面、Android 與 iOS 原生渲染。
* [Qt](https://doc.qt.io)
  * [cyndis/qmlrs](https://github.com/cyndis/qmlrs) - QtQuick 繫結。
  * [rust-qt](https://github.com/rust-qt) - Rust Qt 繫結。
  * [woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - 在編譯時建置 QMetaObject，以整合 QML 與 Rust。
* [Ribir](https://github.com/RibirX/Ribir) - Ribir 是 Rust GUI 框架，可使用單一程式碼庫打造美觀原生的多平台應用程式。
* [rise-ui](https://github.com/rise-ui/rise) - 簡易、元件式的跨平台 GUI 工具組，適用於打造美觀易用的介面。
* [saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) - [nativefiledialog](https://github.com/mlabbe/nativefiledialog) 繫結。
* [Sciter](https://sciter.com/)
  * [sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) - Sciter 繫結。 [![build badge](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
* [slint-ui/slint](https://github.com/slint-ui/slint) [slint](https://crates.io/crates/slint) - [Slint](https://slint.dev/) 是一套工具組，可有效率地為嵌入式裝置與桌面應用程式開發流暢圖形介面。 [![Build Status](https://github.com/slint-ui/slint/workflows/CI/badge.svg?branch=master)](https://github.com/slint-ui/slint/actions?query=workflow%3ACI)
* [smithay](https://github.com/Smithay/smithay) - [[smithay](https://crates.io/crates/smithay)] 是安全且文件完善的函式庫，旨在提供建置 Wayland 合成器的基礎元件。
* [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - 使用網頁前端打造更小、更快、更安全的桌面應用程式，由 [WRY](https://github.com/tauri-apps/wry) 驅動。 [![test library](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [tauri-apps/wry](https://github.com/tauri-apps/wry) - Webview 渲染函式庫。
* [xilem](https://github.com/linebender/xilem) - 資料優先 UI 設計工具組 [druid](https://github.com/linebender/druid) 的後繼者。

### 影像處理

* [abonander/img_hash](https://github.com/abonander/img_hash) - 用於判斷相等與相似程度的感知式圖片雜湊與比較工具。
* [Enet4/dicom-rs](https://github.com/Enet4/dicom-rs) - 純 Rust DICOM 標準實作，讓使用者操作 DICOM 物件並與 DICOM 應用程式互動，同時追求快速、安全與易用。
* [image-rs/image](https://github.com/image-rs/image) - 基本影像處理函式與影像格式轉換方法。
* [image-rs/imageproc](https://github.com/image-rs/imageproc) - 以 `image` 函式庫為基礎的影像處理函式庫。
* [marekm4/dominant_color](https://github.com/marekm4/dominant_color) [[dominant_color](https://crates.io/crates/dominant_color)] - 主要顏色擷取器。 ![build badge](https://github.com/marekm4/dominant_color/actions/workflows/rust.yml/badge.svg?branch=master)
* [rust-cv/cv](https://github.com/rust-cv/cv) - 實作電腦視覺演算法、抽象層與系統；在可行時支援 `#[no_std]`。 ![build badge](https://github.com/rust-cv/cv/workflows/tests/badge.svg)
* [teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] - 簡易隱寫術函式庫。
* [twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) - OpenCV 繫結。

### 語言規格

* [shnewto/bnf](https://github.com/shnewto/bnf) - 剖析 Backus–Naur Form 上下文無關文法的函式庫。

### 授權

* [WyvernIXTL/license-fetcher](https://github.com/WyvernIXTL/license-fetcher) [[license-fetcher](https://crates.io/crates/license-fetcher)] - 在建置時取得相依套件的授權，並將其嵌入程式。

### 日誌

[[log](https://crates.io/keywords/log)]

* [donnie4w/tklog](https://github.com/donnie4w/tklog "donnie4w/tklog") - 輕量且高效率的 Rust 結構化日誌函式庫，支援日誌等級、檔案分段及壓縮封存。
* [estk/log4rs](https://github.com/estk/log4rs) - 高度可設定的日誌框架，仿效 Java Logback 與 log4j 函式庫。 [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [fast/logforth](https://github.com/fast/logforth) - 多用途、可擴充且易於使用的 Rust 應用程式日誌框架，可依需求設定多個 Dispatch、篩選器與 Appender。
* [rbatis/fast_log](https://github.com/rbatis/fast_log) - 非同步高效能日誌。
* [rust-lang/log](https://github.com/rust-lang/log) - 日誌實作。
* [seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) - 美觀易用的 Logger。
* [slog-rs/slog](https://github.com/slog-rs/slog) - 結構化、可組合的日誌。
* [tokio-rs/tracing](https://github.com/tokio-rs/tracing) - 應用程式層級的追蹤框架，適用於支援非同步的結構化日誌、錯誤處理、指標等。 [![Build Status](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)

### 巨集

* cute
  * [mattgathu/cute](https://github.com/mattgathu/cute) - Python 風格 List Comprehension 巨集。
* [elastio/bon](https://github.com/elastio/bon) [[bon](https://crates.io/crates/bon)] - 為結構體與函式產生編譯期檢查的建置器，並為函式與方法提供部分應用、選擇性參數及具名參數。 [![build status](https://github.com/elastio/bon/actions/workflows/ci.yml/badge.svg)](https://github.com/elastio/bon/actions)
* [Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - 提供類 C# LINQ 運算式的巨集與方法。 [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)

### 標記語言

* [bruits/satteri](https://github.com/bruits/satteri) [[satteri](https://crates.io/crates/satteri)] - 高效能 Markdown 與 MDX 處理工具。使用 Rust 剖析及編譯，並以 JavaScript 執行外掛。包含支援 MDX 擴充功能的 CommonMark 剖析器、MDAST／HAST 樹操作，以及供 JavaScript 互通的 NAPI 繫結。
* CommonMark
  * [pulldown-cmark/pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark) - [CommonMark](https://commonmark.org/) 剖析器。
* [insomnimus/tidier](https://github.com/insomnimus/tidier) [[tidier](https://crates.io/crates/tidier)] - 格式化 HTML、XHTML 與 XML 文件的函式庫。 [![build badge](https://github.com/insomnimus/tidier/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/tidier/actions)

### 行動裝置

* Android / iOS
  * [ivnsch/rust_android_ios](https://github.com/ivnsch/rust_android_ios) - 範例：使用 rust-swig 與 cbindgen，透過共用函式庫開發 Android 與 iOS 應用程式。
* Generic
  * [Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile) - iOS CocoaPods／Android JNI。
  * [redbadger/crux](https://github.com/redbadger/crux) [[crux_core](https://crates.io/crates/crux_core)] - 跨平台應用程式開發。Crux 協助你將應用程式商業邏輯與行為作為單一可重用核心，分享至行動裝置（iOS／Android）與網頁。 [![Build status](https://img.shields.io/github/actions/workflow/status/redbadger/crux/build.yaml)](https://github.com/redbadger/crux/actions)
* iOS
  * [TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) - Cargo lipo 子命令，可自動建立 iOS 應用程式使用的 Universal 函式庫。

### 網路程式設計

* Bluetooth
  * [bluez/bluer](https://github.com/bluez/bluer) [[bluer](https://crates.io/crates/bluer)] - 官方 BlueZ 繫結。 [![build badge](https://github.com/bluez/bluer/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/bluez/bluer/actions/workflows/rust.yml)
* CoAP
  * [Covertness/coap-rs](https://github.com/Covertness/coap-rs) - [受限應用協定（CoAP）](https://datatracker.ietf.org/doc/html/rfc7252) 函式庫。
* DNS
  * [kweonminsung/bind9_rndc_rust](https://github.com/kweonminsung/bind9_rndc_rust) [[rndc](https://crates.io/crates/rndc)] - Rust 的 BIND9 RNDC 協定實作。 [![CI](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml/badge.svg)](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml)
* Docker
  * [fussybeaver/bollard](https://github.com/fussybeaver/bollard) - Docker 常駐程式 API。
* FTP
  * [mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) - [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) 用戶端。
* gRPC
  * [hyperium/tonic](https://github.com/hyperium/tonic) - 原生 gRPC 用戶端與伺服器實作，支援 async／await。 [![Crates.io](https://img.shields.io/crates/v/tonic)](https://crates.io/crates/tonic)
  * [tikv/grpc-rs](https://github.com/tikv/grpc-rs) - 以 C Core 函式庫與 Futures 為基礎打造的 gRPC 函式庫。
* HTTP
  * [deboa](https://crates.io/crates/deboa) - 以 hyper 為基礎的易用 HTTP 用戶端，附帶多種擴充、序列化格式與巨集。 [![Crates.io](https://img.shields.io/crates/v/deboa)]
  * [Hurl](https://github.com/Orange-OpenSource/hurl) - 使用純文字與 libcurl 執行及測試 HTTP 請求。 [![CI](https://github.com/Orange-OpenSource/hurl/workflows/CI/badge.svg)](https://github.com/Orange-OpenSource/hurl/actions)
* IPNetwork
  * [achanda/ipnetwork](https://github.com/achanda/ipnetwork) - IP 網路函式庫。
  * [candrew/netsim](https://github.com/canndrew/netsim) - 網路模擬與測試函式庫。
* Low level
  * [actix/actix](https://github.com/actix/actix) - Actor 函式庫。
  * [dylanmckay/protocol](https://github.com/dylanmckay/protocol) - 自訂 TCP／UDP 協定定義。
  * [libpnet/libpnet](https://github.com/libpnet/libpnet) - 跨平台低階網路函式庫。
  * [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) - 獨立、事件驅動的 TCP／IP 堆疊，專為裸機即時系統設計。
* message-io
  * [lemunozm/message-io](https://github.com/lemunozm/message-io) - 事件驅動訊息函式庫，讓網路應用程式建置更簡單快速，支援 TCP、UDP 與 WebSocket。 [![build badge](https://img.shields.io/github/workflow/status/lemunozm/message-io/message-io%20ci)](https://github.com/lemunozm/message-io/actions?query=workflow%3A%22message-io+ci%22)
* MQTT
  * [bytebeamio/rumqtt](https://github.com/bytebeamio/rumqtt) - 供開發者建置可透過 TCP 與 WebSocket 使用 [MQTT 協定](https://mqtt.org) 通訊的應用程式，可選擇使用 TLS。 [![Build and Test](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml/badge.svg)](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml)
  * [rmqtt/rmqtt](https://github.com/rmqtt/rmqtt) - MQTT 伺服器／Broker——面向 5G 時代 IoT 的可擴充分散式 MQTT 訊息 Broker。
* NanoMsg
  * [thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) - [nanomsg](https://nanomsg.org/) 繫結。
* NATS
  * [nats-io/nats.rs](https://github.com/nats-io/nats.rs) - NATS 用戶端；NATS 是雲原生訊息系統。 [![Build Status](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] - [Nng（nanomsg v2）](https://nng.nanomsg.org/index.html) 繫結。 [![build badge](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/-/pipelines)
* NNTP
  * [mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) [[nntp](https://crates.io/crates/nntp)] - [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) 用戶端。
* P2P
  * [libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) - libp2p 網路堆疊實作。 [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
  * [n0-computer/iroh](https://github.com/n0-computer/iroh) [[iroh](https://crates.io/crates/iroh)] - 用於建置裝置間直接連線的 crate。 [![CI](https://github.com/n0-computer/iroh/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)
* POP3
  * [mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) [[pop3](https://crates.io/crates/pop3)] - [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) 用戶端。
* QUIC
  * [aws/s2n-quic](https://github.com/aws/s2n-quic) - IETF QUIC 協定實作。 ![ci](https://img.shields.io/github/actions/workflow/status/aws/s2n-quic/ci.yml?branch=main)
  * [cloudflare/quiche](https://github.com/cloudflare/quiche) - Cloudflare 的 QUIC 傳輸協定與 HTTP/3 實作。 ![build](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)
  * [mozilla/neqo](https://github.com/mozilla/neqo) - QUIC 實作。
  * [quinn-rs/quinn](https://github.com/quinn-rs/quinn) - 以 Futures 為基礎的 QUIC 實作。 [![build badge](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [tencent/tquic](https://github.com/Tencent/tquic) - 高效能、輕量且跨平台的 QUIC 函式庫。 [![Build Status](https://img.shields.io/github/actions/workflow/status/tencent/tquic/rust.yml)](https://github.com/Tencent/tquic/actions/workflows/rust.yml)
* Raknet
  * [b23r0/rust-raknet](https://github.com/b23r0/rust-raknet) - RakNet 協定實作。 [![Build Status](https://img.shields.io/github/workflow/status/b23r0/rust-raknet/Rust)](https://github.com/b23r0/rust-raknet/actions/workflows/rust.yml)
* RPC
  * [remoc-rs/remoc](https://github.com/remoc-rs/remoc) [[remoc](https://crates.io/crates/remoc)] - Remoc 提供類似 Tokio 的通道（broadcast、mpsc、oneshot、watch），並能透過任何遠端傳輸呼叫 Trait。 [![build badge](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml)
  * [smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) - 簡單易用的微服務 RPC 開發函式庫。
* SIP
  * [restsend/rsipstack](https://github.com/restsend/rsipstack) - 符合 RFC 3261 的 SIP 協定堆疊。
* Socket.io
  * [1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio) [[rust_socketio](https://crates.io/crates/rust_socketio)] - 以 Rust 撰寫的 [socket.io](https://socket.io) 用戶端實作。
* SSH
  * [alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) - [libssh2](https://libssh2.org/) 繫結。
  * [Thrussh](https://pijul.org/thrussh) [[thrussh](https://crates.io/crates/thrussh)] - 以 [libsodium](https://doc.libsodium.org/) 為基礎的 SSH 函式庫。
* Stomp
  * [zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) - [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html) 用戶端實作。
* VPN
  * [defguard/wireguard-rs](https://github.com/DefGuard/wireguard-rs) - 多平台函式庫，提供統一的高階 API，以原生作業系統核心與使用者空間 WireGuard 協定實作管理 WireGuard 介面。
* Zenoh
  * [eclipse-zenoh-flow/zenoh-flow](https://github.com/eclipse-zenoh-flow/zenoh-flow) - 宣告式框架，支援從「雲端」到「裝置」的運算。
  * [eclipse-zenoh/zenoh](https://github.com/eclipse-zenoh/zenoh) - 零負擔網路協定。
* ZeroMQ
  * [erickt/rust-zmq](https://github.com/erickt/rust-zmq) - [ZeroMQ](https://zeromq.org/) 繫結。

### 剖析

  * [0xlane/pe-sign](https://github.com/0xlane/pe-sign) [[pe-sign]](https://crates.io/crates/pe-sign) - 跨平台 Rust no_std 函式庫，可驗證並擷取 PE 檔案中的簽章資訊。 [![crates.io](https://img.shields.io/crates/v/pe-sign)](https://crates.io/crates/pe-sign) [![build](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml/badge.svg)](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml)
  * [cchexcode/wavefront_rs](https://github.com/cchexcode/wavefront_rs) - Wavefront OBJ 格式剖析器。 [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![build badge](https://github.com/cchexcode/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/cchexcode/wavefront_rs/actions)
  * [comex/rust-shlex](https://github.com/comex/rust-shlex) [[shlex](https://crates.io/crates/shlex)] - 將字串拆分為 Shell 詞彙，類似 Python 的 shlex。 [![build badge](https://github.com/comex/rust-shlex/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/comex/rust-shlex/actions/workflows/test.yml)
  * [Eliah-Lakhin/lady-deirdre](https://github.com/Eliah-Lakhin/lady-deirdre) - 新程式語言與 LSP 伺服器開發框架。
  * [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) - 快速 Rust PDF 分類與文字擷取函式庫。
  * [Folyd/robotstxt](https://github.com/Folyd/robotstxt) - Google robots.txt C++ 剖析器與比對函式庫的移植版。
  * [freestrings/jsonpath](https://github.com/freestrings/jsonpath) - [JsonPath](https://goessner.net/articles/JsonPath/) 引擎，另支援 WebAssembly 與 JavaScript。
  * [hmeyer/stl_io](https://crates.io/crates/stl_io) - STL（STereoLithography）檔案剖析器。
  * [igumnoff/shiva](https://github.com/igumnoff/shiva) - Shiva 函式庫：以 Rust 實作的各種文件格式（純文字、Markdown、HTML、PDF 等）剖析器與產生器。
  * [kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) - Parsing Expression Grammar（PEG）剖析器產生器。
  * [lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) - LR(1) 剖析器產生器。
  * [m4rw3r/chomp](https://github.com/m4rw3r/chomp) - 快速的 Monad 風格 Parser Combinator。
  * [Marwes/combine](https://github.com/Marwes/combine) - Parser Combinator 函式庫。
  * [mazznoer/csscolorparser-rs](https://github.com/mazznoer/csscolorparser-rs) [[csscolorparser](https://crates.io/crates/csscolorparser)] - CSS 顏色剖析函式庫。 [![CI](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml)
  * [mohamadzoh/phonelib](https://github.com/mohamadzoh/phonelib) [[phonelib](https://crates.io/crates/phonelib)] - 零相依 Rust 函式庫，可剖析、驗證、格式化與正規化國際電話號碼。
  * [nrc/zero](https://github.com/nrc/zero) [[zero](https://crates.io/crates/zero/)] - 零配置二進位資料剖析。
  * [ophi-dev/antlr-rust-runtime](https://github.com/ophi-dev/antlr-rust-runtime) [[antlr-rust-runtime](https://crates.io/crates/antlr-rust-runtime)] - ANTLR v4 執行環境，搭配純 Rust 剖析器產生器：直接從 `.g4` 文法產生剖析器（無需 Java），並已通過官方 ANTLR 相容性測試套件。 [![build badge](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml)
  * [oxc-project/oxc](https://github.com/oxc-project/oxc) [[oxc](https://crates.io/crates/oxc)] - 以 Rust 撰寫的高效能 JavaScript／TypeScript 剖析器、轉換器、壓縮器與解析器，為 Rolldown、Nuxt、Nova 等提供動力。 [![Build Status](https://github.com/oxc-project/oxc/actions/workflows/ci.yml/badge.svg?event=push&branch=main)](https://github.com/oxc-project/oxc/actions/workflows/ci.yml)
  * [pest-parser/pest](https://github.com/pest-parser/pest) - 優雅的剖析器。
  * [ptal/oak](https://github.com/ptal/oak) - 具型別的 PEG 剖析器產生器（編譯器外掛）。
  * [run-llama/liteparse](https://github.com/run-llama/liteparse) [[liteparse](https://crates.io/crates/liteparse)] - 快速輕量 PDF 剖析函式庫，支援空間文字擷取、邊界框、彈性 OCR（Tesseract／HTTP 伺服器）及多語言繫結（Rust、Node.js、Python、WASM）。以 PDFium 為基礎，並提供 `lit` CLI 工具。 [![CI](https://github.com/run-llama/liteparse/actions/workflows/ci.yml/badge.svg)](https://github.com/run-llama/liteparse/actions/workflows/ci.yml)
  * [rust-bakery/nom](https://github.com/rust-bakery/nom) - Parser Combinator 函式庫。
  * [s-panferov/queryst](https://github.com/s-panferov/queryst) - 受 [gs](https://github.com/ljharb/qs#readme) 啟發的查詢字串剖析函式庫。
  * [slimreaper35/dockerfile-parser-rs](https://github.com/slimreaper35/dockerfile-parser-rs) [[dockerfile-parser-rs](https://crates.io/crates/dockerfile-parser-rs)] - Dockerfile 剖析函式庫與 CLI 工具。
  * [softdevteam/grmtools](https://github.com/softdevteam/grmtools/) - 具備更佳錯誤修正能力的 LR 剖析器。
  * [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) - 專為程式設計工具打造的剖析器產生器與增量剖析函式庫。
  * [winnow-rs/winnow](https://github.com/winnow-rs/winnow) [[winnow](https://crates.io/crates/winnow)] - 以位元組為導向、零拷貝的 Parser Combinator 函式庫。 [![Build status](https://github.com/winnow-rs/winnow/workflows/CI/badge.svg)](https://github.com/winnow-rs/winnow/actions)
  * [xberg-io/tree-sitter-language-pack](https://github.com/xberg-io/tree-sitter-language-pack) [[tree-sitter-language-pack](https://crates.io/crates/tree-sitter-language-pack)] - 提供 300 多種語言的預先建置 tree-sitter 文法，搭配統一剖析器 API 與 14 種語言繫結。

### 周邊設備

* [AprilNEA/OpenLogi/crates/openlogi-hidpp](https://github.com/AprilNEA/OpenLogi/tree/main/crates/openlogi-hidpp) [[openlogi-hidpp](https://crates.io/crates/openlogi-hidpp)] - OpenLogi 自行供應的 hidpp crate 分支，支援 Logitech HID++ 協定。
* [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) [[esp-hal](https://crates.io/crates/esp-hal)] - 適用於 Espressif ESP32 裝置（ESP32、ESP32-C2／C3／C5／C6／C61、ESP32-H2、ESP32-P4、ESP32-S2／S3）的裸機 `no_std` 硬體抽象層。提供 GPIO、I2C、SPI、UART、計時器、DMA 等安全 Rust API。 [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/esp-rs/esp-hal/ci.yml?labelColor=1C2C2E&label=CI&logo=github&style=flat-square)](https://github.com/esp-rs/esp-hal/actions/workflows/ci.yml)
* Fingerprint reader
  * [alvaroparker/libfprint-rs](https://github.com/alvaroparker/libfprint-rs) [[libfprint-rs](https://crates.io/crates/libfprint-rs)] - Libfprint-rs 封裝 Linux libfprint 函式庫。
* [Michael-A-Kuykendall/crabcamera](https://github.com/Michael-A-Kuykendall/crabcamera) [[crabcamera](https://crates.io/crates/crabcamera)] - Tauri 外掛，提供桌面相機存取、自動品質驗證與硬體控制。
* Serial Port
  * [serialport/serialport-rs](https://github.com/serialport/serialport-rs) [[serialport](https://crates.io/crates/serialport)] - 提供序列埠存取功能的跨平台函式庫。

### 平台特定

* Cross-platform
  * [iddm/thread-priority](https://github.com/iddm/thread-priority/) - 簡單的跨平台執行緒優先順序管理。 [![CI](https://github.com/iddm/thread-priority/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/thread-priority/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/thread-priority.svg)](https://crates.io/crates/thread-priority)
  * [svartalf/rust-battery](https://crates.io/crates/battery) - 跨平台筆記型電腦電池資訊。
* FreeBSD
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) [[jail](https://crates.io/crates/jail)] - FreeBSD Jail 函式庫。
* Linux
  * [hannobraun/inotify-rs](https://github.com/hannobraun/inotify-rs) - [inotify](https://en.wikipedia.org/wiki/Inotify) 繫結。 [![Rust](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml)
  * [pop-os/distinst](https://github.com/pop-os/distinst/) - Linux 發行版安裝程式。
  * [yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) [[iptables](https://crates.io/crates/iptables)] - [iptables](https://www.netfilter.org/projects/iptables/index.html) 繫結。
* Unix-like
  * [nix-rust/nix](https://github.com/nix-rust/nix) - 類 Unix API 繫結。 [![CI](https://github.com/nix-rust/nix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-rust/nix/actions/workflows/ci.yml)
  * [rustix](https://github.com/bytecodealliance/rustix) - POSIX／Unix／Linux／Winsock2 系統呼叫的安全繫結。 [![Actions Status](https://github.com/bytecodealliance/rustix/workflows/CI/badge.svg)](https://github.com/bytecodealliance/rustix/actions?query=workflow%3ACI)
  * [zargony/fuse-rs](https://github.com/zargony/fuse-rs) - [FUSE](https://github.com/libfuse/libfuse) 繫結。
* Windows
  * [microsoft/windows-rs](https://github.com/microsoft/windows-rs) - Rust for Windows。 [![Actions Status](https://github.com/microsoft/windows-rs/workflows/CI/badge.svg)](https://github.com/microsoft/windows-rs/actions)
  * [retep998/winapi-rs](https://github.com/retep998/winapi-rs) - Windows API 繫結。 [![Rust](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml/badge.svg?branch=dev)](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml)

### 逆向工程

* [binlex](https://github.com/c3rb3ru5d3d53c/binlex) - 二進位分析與逆向工程框架，具備函式指紋辨識與相似度比對功能。
* [idalib](https://github.com/idalib-rs/idalib) [[idalib](https://crates.io/crates/idalib)] - IDA SDK 的 Rust 繫結，可使用 IDA v9.0 idalib 開發獨立分析工具。
* [objdiff](https://github.com/encounter/objdiff) - 反編譯專案的本機差異比對工具。
* [wakaru](https://github.com/pionxzh/wakaru) [[wakaru](https://crates.io/crates/wakaru)] - JavaScript 反編譯器：將 webpack／esbuild／Metro／Browserify 封裝拆解為模組，並將壓縮器和 Babel／TypeScript 輸出還原為易讀程式碼。 [![CI](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml/badge.svg?branch=main)](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml)

### 腳本

[[scripting](https://crates.io/keywords/scripting)]

* [3body-lang](https://github.com/rustq/3body-lang) - 三體語言。
* [boa-dev/boa](https://github.com/boa-dev/boa) [[boa_engine](https://crates.io/crates/boa_engine)] - 以 Rust 撰寫的實驗性 JavaScript Lexer、剖析器與直譯器。
* [cel-rust](https://github.com/cel-rust/cel-rust) [[cel-interpreter](https://crates.io/crates/cel-interpreter)] - 通用運算式語言剖析器與直譯器。
* [duckscript](https://crates.io/crates/duckscript) - [簡單、可擴充且可嵌入的腳本語言。](https://github.com/sagiegurari/duckscript) [![build badge](https://github.com/sagiegurari/duckscript/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/duckscript/actions)
* [facebook/starlark-rust](https://github.com/facebook/starlark-rust) - 語法採用 Python 的小型確定性執行緒安全語言。
* [fleabitdev/gamelisp](https://github.com/fleabitdev/glsp) - 用於遊戲開發的類 Lisp 腳本語言。
* [giraffekey/xylo](https://github.com/giraffekey/xylo) [[xylo-lang](https://crates.io/crates/xylo-lang)] - 用於程序化藝術的函數式程式語言。 [![build badge](https://github.com/giraffekey/xylo/actions/workflows/rust.yml/badge.svg)](https://github.com/giraffekey/xylo/actions)
* [gluon-lang/gluon](https://github.com/gluon-lang/gluon) - 小型、靜態型別的函數式程式語言。
* [kcl](https://github.com/kcl-lang/kcl) - 以限制條件為基礎的記錄與函數式語言，主要用於設定與政策情境。
* [kyren/piccolo](https://github.com/kyren/piccolo) [[piccolo](https://crates.io/crates/piccolo)] - 以純 Rust 實作的實驗性無堆疊 Lua VM，具備循環偵測增量式 GC、沙箱功能及安全的 Rust ↔ Lua 繫結。 [![crates.io](https://img.shields.io/crates/v/piccolo)](https://crates.io/crates/piccolo)
* [metacall/core](https://github.com/metacall/core) [[metacall](https://crates.io/crates/metacall)] - 跨平台多語言執行環境，支援 NodeJS、JavaScript、TypeScript、Python、Ruby、C#、Wasm、Java、Cobol 等。 [![build badge](https://gitlab.com/metacall/core/badges/master/pipeline.svg)](https://gitlab.com/metacall/core)
* [mun](https://github.com/mun-lang/mun) - 編譯式靜態型別腳本語言，原生支援熱重新載入。
* [murarth/ketos](https://github.com/murarth/ketos) - Lisp 方言函數式程式語言，可作為 Rust 的腳本與擴充語言。
* [PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) - Rust 風格的動態型別腳本語言。
* [rhaiscript/rhai](https://github.com/rhaiscript/rhai) - 小巧快速的嵌入式腳本語言，語法融合 JavaScript 與 Rust。 [![build badge](https://github.com/rhaiscript/rhai/workflows/Build/badge.svg)](https://github.com/rhaiscript/rhai/actions)
* [rune-rs/rune](https://github.com/rune-rs/rune) - 可嵌入的動態程式語言。
* [trynova/nova](https://github.com/trynova/nova) - 完全以 Rust 撰寫的 JavaScript 引擎。

### 模擬

[[simulation](https://crates.io/keywords/simulation)]

* [nyx-space](https://crates.io/crates/nyx-space) - 高精度、快速、可靠且經驗證的軌道動力學工具函式庫，適用於太空船任務設計與軌道測定。 [![Build Status](https://gitlab.com/nyx-space/nyx/badges/master/pipeline.svg)](https://gitlab.com/nyx-space/nyx/-/pipelines)
* [rsasaki0109/rust_robotics](https://github.com/rsasaki0109/rust_robotics) [[rust_robotics](https://crates.io/crates/rust_robotics)] - 受 PythonRobotics 啟發的 Rust 機器人演算法實作，涵蓋路徑規劃、定位、SLAM 與控制，支援 no_std，並附 ROS 2 範例。 [![CI](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml)

### 社群網路

* Telegram
  * [tdilb-rs](https://github.com/FedericoBruzzone/tdlib-rs) [[tdilb-rs](https://crates.io/crates/tdlib-rs)] - Telegram Database Library（TDLib）的跨平台 Rust 封裝。 [![CI Linux](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml) [![CI macOS](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml) [![CI Windows](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml)

### 系統

* [ardaku/whoami](https://github.com/ardaku/whoami) [[whoami](https://crates.io/crates/whoami)] - 用於取得目前使用者與環境資訊的 crate。 [![build badge](https://github.com/ardaku/whoami/actions/workflows/ci.yml/badge.svg?branch=stable)](https://github.com/ardaku/whoami/actions/workflows/ci.yml)
* [GuillaumeGomez/sysinfo](https://github.com/GuillaumeGomez/sysinfo) [[sysinfo](https://crates.io/crates/sysinfo)] - 跨平台系統資訊擷取函式庫。 [![build badge](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml)
* [navidys/procsys](https://github.com/navidys/procsys) [[procsys](https://crates.io/crates/procsys)] - 從 /proc 與 /sys 虛擬檔案系統取得系統、核心與程序指標的函式庫。
* [Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[nixinfo](https://crates.io/crates/nixinfo)] - 收集 CPU、發行版、環境、核心等系統資訊的函式庫 crate。
* [sorairolake/sysexits-rs](https://github.com/sorairolake/sysexits-rs) [[sysexits](https://crates.io/crates/sysexits)] - [`<sysexits.h>`](https://man.openbsd.org/sysexits) 定義的系統結束代碼。 [![CI](https://github.com/sorairolake/sysexits-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/sysexits-rs/actions?query=workflow%3ACI)

### 任務排程

* [delay-timer](https://github.com/BinChengZhao/delay-timer) - 延遲任務的時間管理器，類似 crontab，但可執行非同步任務。 [![Build](https://github.com/BinChengZhao/delay-timer/actions/workflows/rust.yml/badge.svg)]( https://github.com/BinChengZhao/delay-timer/actions)
* [persistent-scheduler](https://github.com/rustmailer/persistent-scheduler) [[persistent-scheduler](https://crates.io/crates/persistent-scheduler)] - 以 Tokio 打造的高效能任務排程系統，提供任務持久化、重複任務及以 Cron 為基礎的排程，可靠執行定時作業。

### 範本引擎

* Handlebars
  * [sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) - Handlebars 範本引擎，支援繼承與自訂 Helper。
  * [zzau13/yarte](https://github.com/zzau13/yarte) - Yarte 代表 **Y**et **A**nother **R**ust **T**emplate **E**ngine，是速度最快的範本引擎。
* HTML
  * [askama](https://github.com/askama-rs/askama) - 以 Jinja 為基礎的範本渲染引擎。
  * [kaj/ructe](https://github.com/kaj/ructe) - HTML 範本系統。
  * [Keats/tera](https://github.com/Keats/tera) - 以 Jinja2 與 Django 範本語言為基礎的範本引擎。 [![Actions Status](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [lambda-fairy/maud](https://github.com/lambda-fairy/maud) - 編譯期 HTML 範本。
  * [mitsuhiko/minijinja](https://github.com/mitsuhiko/minijinja) [[minijinja](https://crates.io/crates/minijinja)] - 以 Jinja2 為基礎、相依套件極少的範本引擎。 [![Tests](https://img.shields.io/github/actions/workflow/status/mitsuhiko/minijinja/tests.yml?branch=main&logo=github)](https://github.com/mitsuhiko/minijinja/actions/workflows/tests.yml)
  * [rshtml/rshtml](https://github.com/rshtml/rshtml) [[rshtml](https://crates.io/crates/rshtml)] - RsHtml：編譯期、型別安全且輕量的範本引擎，可在 HTML 中嵌入 Rust，也能在 Rust 中嵌入 HTML。
  * [Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) - 編譯期 HTML 範本。
* Mustache
  * [rustache/rustache](https://github.com/rustache/rustache) - Mustache 規格的 Rust 實作。

### 文字處理

* [becheran/wildmatch](https://github.com/becheran/wildmatch) [[wildmatch](https://crates.io/crates/wildmatch)] - 簡易字串比對，支援問號與星號萬用字元。 [![Actions Status](https://github.com/becheran/wildmatch/workflows/Build/badge.svg?branch=master)](https://github.com/becheran/wildmatch/actions)
* [BurntSushi/suffix](https://github.com/BurntSushi/suffix) - 線性時間建構後綴陣列（支援 Unicode）。
* [BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) - 彈性 Tab 停駐點（即文字欄位對齊）。
* [cpc](https://github.com/probablykasper/cpc) - 剖析並計算支援單位與單位轉換的數學字串，從 `1+2` 到 `1% of round(1 lightyear / 14!s to km/h)` 都可處理。
* [Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - 以 SIMD 加速的 Rust 編輯距離演算法；支援快速 Hamming、Levenshtein、受限 Damerau–Levenshtein 等距離計算及字串搜尋。 [![build badge](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [fancy-regex/fancy-regex](https://github.com/fancy-regex/fancy-regex) [[fancy-regex](https://crates.io/crates/fancy-regex)] - 正規表示式實作，支援前後顧與回溯等豐富功能。 [![crates](https://img.shields.io/crates/v/fancy-regex.svg)](https://crates.io/crates/fancy-regex) [![build badge](https://github.com/fancy-regex/fancy-regex/workflows/ci/badge.svg)](https://github.com/fancy-regex/fancy-regex/actions/workflows/ci.yml)
* [greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) - 以 Trigram 為基礎的自然語言偵測函式庫。
* [Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] - 通用字串與可疊代物件合併工具。
* [mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] - 文字自動換行（支援斷字）。
* [null8626/decancer](https://github.com/null8626/decancer) [[decancer](https://crates.io/crates/decancer)] - 小巧套件，可從字串移除常見 Unicode 易混淆字元／同形異義字。 [![crates](https://img.shields.io/crates/v/decancer.svg)](https://crates.io/crates/decancer) [![build badge](https://github.com/null8626/decancer/workflows/CI/badge.svg)](https://github.com/null8626/decancer/actions/workflows/CI.yml)
* [ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) - 可在大型檔案中向前、向後及隨機瀏覽各行而不消耗 Iterator 的 Reader。
* [pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) [[ngrams](https://crates.io/crates/ngrams)] - 從任意 Iterator 建構 [N-gram](https://en.wikipedia.org/wiki/N-gram)。
* [rust-lang/regex](https://github.com/rust-lang/regex) - 正規表示式（RE2 風格）。
* [strsim-rs](https://crates.io/crates/strsim) - 字串相似度指標。
* [xberg-io/html-to-markdown](https://github.com/xberg-io/html-to-markdown) [[html-to-markdown-rs](https://crates.io/crates/html-to-markdown-rs)] - 快速且符合 CommonMark 標準的 HTML 轉 Markdown 工具，核心以 Rust 撰寫，並提供 12 種語言繫結。
* [xberg-io/xberg](https://github.com/xberg-io/xberg) [[xberg](https://crates.io/crates/xberg)] - 文件智慧函式庫，可從 97 種以上格式（PDF、Office、含 OCR 的圖片、HTML、電子郵件、封存檔）擷取文字、表格與中繼資料，並提供 11 種語言繫結。
* [yaa110/rake-rs](https://github.com/yaa110/rake-rs) [[rake](https://crates.io/crates/rake)] - Rust 的多語言 RAKE 演算法實作。

### 文字搜尋

* [andylokandy/simsearch](https://github.com/andylokandy/simsearch) [[simsearch](https://crates.io/crates/simsearch)] - 簡單輕量的模糊搜尋引擎，在記憶體中搜尋相似字串。
* [BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] - 使用有限狀態機快速實作有序集合與 Map。
* [CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] - 延遲評估、零配置且不依賴特定資料型別的資訊檢索函式庫。
* [meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) - 高度相關、即時且容錯拼字的全文搜尋 API。 [![Build Status](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [pg_search](https://github.com/paradedb/paradedb/tree/dev/pg_search) - PostgreSQL 擴充功能，使用全文搜尋領域的先進排序函式 BM25，讓 SQL 資料表支援全文搜尋。
* [SeekStorm](https://github.com/SeekStorm/SeekStorm) [[SeekStorm](https://crates.io/crates/seekstorm)] - 以 Rust 撰寫、亞毫秒全文搜尋函式庫與多租戶伺服器。
* [tantivy](https://github.com/quickwit-oss/tantivy) [[tantivy](https://crates.io/crates/tantivy)] - 以 Rust 撰寫、速度如駿馬的全文搜尋引擎函式庫。 [![Build Status](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)

### Unsafe

* [zerocopy](https://crates.io/crates/zerocopy) - 「Zerocopy 讓零成本記憶體操作變得輕而易舉。我們負責撰寫 `unsafe`，你就不必操心。」

### 影片

* [ffmpeg-sidecar](https://github.com/nathanbabcock/ffmpeg-sidecar) - 將獨立 FFmpeg 執行檔封裝為直覺易用的 Iterator 介面。 [![Build Status](https://github.com/nathanbabcock/ffmpeg-sidecar/actions/workflows/ci.yml/badge.svg)](https://github.com/nathanbabcock/ffmpeg-sidecar/actions)
* [screencapturekit-rs](https://github.com/doom-fish/screencapturekit-rs) [[screencapturekit](https://crates.io/crates/screencapturekit)] - Apple ScreenCaptureKit 框架的安全 Rust 繫結，用於 macOS 螢幕／音訊擷取。 [![Build Status](https://github.com/doom-fish/screencapturekit-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/doom-fish/screencapturekit-rs/actions)

### 虛擬化

* [beneills/quantum](https://github.com/beneills/quantum) - 進階量子電腦模擬器。
* [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime) - 獨立 WebAssembly 執行環境。 [![Build Status](https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg)](https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI)
* [capsule](https://github.com/capsulerun/capsule) - 用於執行不受信任程式碼的 WebAssembly 沙箱執行環境。
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) - CrOSVM 讓 Chrome OS 能在快速安全的虛擬化環境中執行 Linux 應用程式。
* [oxidecomputer/propolis](https://github.com/oxidecomputer/propolis) - 供使用者空間操作 illumos bhyve 核心模組的程式。
* [saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) - OS X 硬體加速虛擬化。
* [smol-machines/smolvm](https://github.com/smol-machines/smolvm) - 以 libkrun 為基礎的可攜式 microVM 沙箱，支援執行中 VM 的寫入時複製分叉。
* [wasmi-labs/wasmi](https://github.com/wasmi-labs/wasmi) - 輕量 WebAssembly 執行環境。

### 網頁程式設計

另請參閱 [Are we web yet?](https://www.arewewebyet.org) 與 [Rust Web 框架比較](https://github.com/flosse/rust-web-framework-comparison)。
* Backend
  * [actix/actix-web](https://github.com/actix/actix-web) - 支援 WebSocket 的輕量非同步 Web 框架。
  * [Anansi](https://github.com/saru-tora/anansi) - 簡易全端 Web 框架。
  * [loco-rs/loco](https://github.com/loco-rs/loco) [[loco-rs](https://crates.io/crates/loco-rs)] - 專為 Rust 個人開發者打造的框架，適合 Side Project 與新創公司，靈感來自 Rails。 [![Build](https://github.com/loco-rs/loco/actions/workflows/ci.yml/badge.svg)](https://github.com/loco-rs/loco/actions)
  * [Rocket](https://github.com/rwf2/Rocket) - Rocket 是著重易用性、表達力與速度的 Web 框架。
  * [RustAPI](https://github.com/Tuntii/RustAPI) [[rustapi-rs](https://crates.io/crates/rustapi-rs)] - 符合人體工學的 Web 框架，支援編譯期 OpenAPI 與原生 MCP。
  * [summer-rs](https://github.com/summer-rs/summer-rs) - summer-rs 是以 Rust 撰寫、受 Java Spring Boot 啟發的應用程式框架。
  * [tako](https://github.com/rust-dd/tako) [[tako-rs](https://crates.io/crates/tako-rs)] - 多傳輸協定 Web 框架：透過單一 Router 支援 HTTP/1.1、HTTP/2、HTTP/3、WebSocket、SSE、gRPC、TCP／UDP 與 Unix Socket，可使用 Tokio 或 Compio。 [![CI](https://github.com/rust-dd/tako/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rust-dd/tako/actions/workflows/ci.yml)
  * [tokio-rs/axum](https://github.com/tokio-rs/axum) - 以 Tokio、Tower 與 Hyper 打造、符合人體工學且模組化的 Web 框架。 [![Build badge](https://github.com/tokio-rs/axum/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/tokio-rs/axum/actions/workflows/CI.yml)
  * [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) [[topcoat](https://crates.io/crates/topcoat)] - 模組化、內建完整功能的 Rust 全端 Web 框架，支援伺服器端渲染、無需 WASM 的用戶端反應性、模組化路由，以及內建 Tailwind／資產打包。 [![Build Status](https://img.shields.io/github/actions/workflow/status/tokio-rs/topcoat/ci.yml?branch=main&style=flat-square)](https://github.com/tokio-rs/topcoat/actions)
  * [trillium](https://github.com/trillium-rs/trillium) [[trillium](https://crates.io/crates/trillium)] - 使用非同步 Rust 建置網際網路應用程式的可組合工具組。
* Client-side / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) - 用於用戶端 Web 的 Cargo 子命令。
  * [leptos](https://github.com/leptos-rs/leptos) - Leptos 是全端同構 Web 框架，運用細粒度反應性建置宣告式使用者介面。 ![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/leptos)
  * [sauron](https://github.com/ivanceras/sauron) - 緊密遵循 Elm Architecture 的用戶端 Web 框架。
  * [seed](https://github.com/seed-rs/seed) - 建立 Web 應用程式的框架。
  * [stdweb](https://crates.io/crates/stdweb) - 用戶端 Web 標準函式庫。
  * [synphonyte/leptos-use](https://github.com/synphonyte/leptos-use) [[leptos-use](https://crates.io/crates/leptos-use)] - 受 React-Use 與 VueUse 啟發的 Leptos 核心工具集合，支援 SSR。 [![Build Status](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml/badge.svg)](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml)
  * [thaw-ui/thaw](https://github.com/thaw-ui/thaw) [[thaw](https://crates.io/crates/thaw)] - 以 Fluent Design 為基礎、易用的 Leptos 元件函式庫。
  * [tinyweb](https://github.com/LiveDuo/tinyweb) - 僅以 800 行程式碼打造的極簡 Rust WASM Web 框架。
  * [yew](https://crates.io/crates/yew) - 用於製作用戶端 Web 應用程式的框架。
* HTTP Client
  * [0x676e67/wreq](https://github.com/0x676e67/wreq) - 符合人體工學、具有 TLS 指紋的 Rust HTTP 用戶端。 [![CI](https://github.com/0x676e67/wreq/actions/workflows/ci.yml/badge.svg)](https://github.com/0x676e67/wreq/actions/workflows/ci.yml) [![crates.io](https://img.shields.io/crates/v/wreq.svg?logo=rust)](https://crates.io/crates/wreq)
  * [alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) - [libcurl](https://curl.se/libcurl/) 繫結。
  * [async-graphql](https://github.com/async-graphql/async-graphql) - GraphQL 伺服器函式庫。 [![Build Status](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - HTTP/2 用戶端框架。
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) [[yukikaze](https://crates.io/crates/yukikaze)] - 美觀優雅的 Yukikaze 是以 hyper 為基礎打造的小型 HTTP 用戶端函式庫。 [![build badge](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
  * [ducaale/xh](https://github.com/ducaale/xh) - 易用快速的 HTTP 請求傳送工具。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/xh) [![GitHub actions Status](https://github.com/ducaale/xh/workflows/CI/badge.svg?branch=master)](https://github.com/ducaale/xh/actions)
  * [graphql-client](https://github.com/graphql-rust/graphql-client) - 具型別且正確的 GraphQL 請求與回應。 [![GitHub actions Status](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP 實作。 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [plabayo/rama](https://github.com/plabayo/rama) - 模組化服務框架，可移動並轉換網路封包，並能建置具備 TLS、JA3／JA4、H2 與 QUIC／H3 指紋偽裝功能的用戶端。
  * [seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) - 符合人體工學的 HTTP 用戶端。
* HTTP Server
  * [branca](https://crates.io/crates/branca) - Branca 實作，用於產生已驗證且加密的 API Token。
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 低階／高階 HTTP/2 伺服器。
  * [carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] - 快速、零樣板程式碼的 Web 框架。
  * [Cot](https://github.com/cot-rs/cot) - 為懶人開發者打造的 Rust Web 框架。
  * [GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) - JSON Web Token 實作。
  * [Gotham](https://github.com/gotham-rs/gotham) - 不犧牲安全、資訊安全或速度的彈性 Web 框架。
  * [Graphul](https://github.com/graphul-rs/graphul) - 受 Express 啟發的 Web 框架。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/graphul)
  * [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Iron Web 框架中介軟體。
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP 實作。 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [Iron](https://github.com/iron/iron) - 以中介軟體為基礎的伺服器框架。
  * [Juniper](https://github.com/graphql-rust/juniper) - GraphQL 伺服器函式庫。
  * [miketang84/sapper](https://github.com/miketang84/sapper) - 以非同步 hyper 為基礎打造的輕量 Web 框架。
  * [Nickel](https://github.com/nickel-org/nickel.rs/) - 受 [Express](https://expressjs.com/) 啟發。
  * [plabayo/rama](https://github.com/plabayo/rama) - 模組化服務框架，可移動並轉換網路封包，也可用於辨識連入用戶端的指紋。
  * [poem-web/poem](https://github.com/poem-web/poem) - 功能完整且易用的 Web 框架。 [![CI](https://github.com/poem-web/poem/actions/workflows/ci.yml/badge.svg)](https://github.com/poem-web/poem/actions/workflows/ci.yml)
  * [Rustless](https://github.com/rustless/rustless) - 受 [Grape](https://github.com/ruby-grape/grape) 與 [Hyper](https://github.com/hyperium/hyper) 啟發、類 REST API 微型框架。
  * [Salvo](https://github.com/salvo-rs/salvo) - 易用、以 hyper 與 tokio 為基礎的 Web 框架。 [![build build](https://github.com/salvo-rs/salvo/actions/workflows/release.yml/badge.svg)](https://github.com/salvo-rs/salvo/actions)
  * [Saphir](https://github.com/richerarc/saphir) - 漸進式 Web 框架，提供低階控制又不帶來痛苦。
  * [seanmonstar/warp](https://github.com/seanmonstar/warp) - 超易用、可組合且速度如 warp 的 Web 伺服器框架。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/warp)
  * [tiny-http](https://github.com/tiny-http/tiny-http) - 低階 HTTP 伺服器函式庫。
  * [tomaka/rouille](https://github.com/tomaka/rouille) - Web 框架。
  * [Zino](https://github.com/zino-rs/zino) - 新世代可組合應用程式框架。
* Miscellaneous
  * [cargonauts](https://github.com/cargonauts-rs/cargonauts) - 專為打造易於維護、結構良好的 Web 應用程式而設計的框架。
  * [edezhic/prest](https://github.com/edezhic/prest) [[prest](https://crates.io/crates/prest)] - 旨在簡化全端開發的漸進式 RESTful 框架。
  * [Goldziher/spikard](https://github.com/Goldziher/spikard) [[spikard](https://crates.io/crates/spikard)] - 多語言 Web 工具組，以 Rust 為核心並提供 Python、TypeScript、Ruby 與 PHP 繫結。
  * [hominee/dyer](https://github.com/hominee/dyer) [[dyer](https://crates.io/crates/dyer)] - dyer 專為可靠、彈性且快速的 Request-Response 服務設計，適用於資料處理、網頁爬取等用途，並在不犧牲速度的前提下提供友善、彈性且完整的功能。
  * [osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - 嵌入應用程式的授權政策引擎。 [![Build Status](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - 類似 Python BeautifulSoup 的函式庫，可快速輕鬆地操作與查詢 HTML 文件。 [![Build Status](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [pyrossh/rust-embed](https://git.sr.ht/~pyrossh/rust-embed) [[rust-embed](https://crates.io/crates/rust-embed)] - 將靜態資產嵌入 Rust 二進位檔的巨集。
  * [rookie](https://github.com/thewh1teagle/rookie) - 從任何平台上的任何瀏覽器載入 Cookie。 ![crates.io](https://img.shields.io/crates/v/rookie.svg)
  * [rust-scraper/scraper](https://github.com/rust-scraper/scraper) [[scraper](https://crates.io/crates/scraper)] - 使用 CSS Selector 剖析與查詢 HTML。 [![Build Status](https://github.com/rust-scraper/scraper/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rust-scraper/scraper/actions)
  * [serenity-rs/serenity](https://github.com/serenity-rs/serenity) [[serenity](https://crates.io/crates/serenity)] - Discord API 函式庫。
  * [softprops/openapi](https://github.com/softprops/openapi) - 處理 OpenAPI 規格檔案的函式庫。
  * [svix/svix-webhooks](https://github.com/svix/svix-webhooks) [[svix](https://crates.io/crates/svix)] - 傳送 Webhook 並驗證簽章的函式庫。
  * [tbot](https://gitlab.com/SnejUgal/tbot) [[tbot](https://crates.io/crates/tbot)] - 輕鬆打造酷炫 Telegram 機器人。 [![pipeline status](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - 優雅的 Telegram 機器人框架。 [![Build Status](https://github.com/teloxide/teloxide/actions/workflows/ci.yml/badge.svg)](https://github.com/teloxide/teloxide/actions)
  * [tu6ge/valitron](https://github.com/tu6ge/valitron) [[valitron](https://crates.io/crates/valitron)] - 符合人體工學、實用且可設定的驗證器。
  * [utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] - 從 HTML 文件擷取實用資料、適合網頁爬取的函式庫。
  * [Utoipa](https://github.com/juhaku/utoipa) - 簡單快速、以程式碼為先且在編譯期產生的 OpenAPI 文件。 [![crates.io](https://img.shields.io/crates/v/utoipa.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipa) [![Utoipa build](https://github.com/juhaku/utoipa/actions/workflows/build.yaml/badge.svg)](https://github.com/juhaku/utoipa/actions/workflows/build.yaml)
  * [Utoipauto](https://github.com/ProbablyClem/utoipauto) - Rust 巨集，可自動為 Utoipa 新增路徑／結構描述。 [![crates.io](https://img.shields.io/crates/v/utoipauto.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipauto)
  * [xberg-io/crawlberg](https://github.com/xberg-io/crawlberg) [[crawlberg](https://crates.io/crates/crawlberg)] - 高效能網頁爬取與擷取引擎，支援 HTML 轉 Markdown、無頭 Chrome 備援，以及 11 種語言繫結。
* Reverse Proxy
  * [sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] - HTTP 反向 Proxy。 [![CI](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml)
* Static Site Generators
  * [cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) - 靜態網站產生器。 [![Build Status](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) [[mdblog](https://crates.io/crates/mdblog)] - 從 Markdown 檔案產生靜態網站。
  * [getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] - 遵循主張且內建所有功能的靜態網站產生器。 [![Build Status](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [grego/blades](https://github.com/grego/blades) [[blades](https://www.getblades.org/)] - 速度飛快、極簡的靜態網站產生器。
  * [leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] - 簡單的平行部落格產生器。
  * [rochacbruno/marmite](https://github.com/rochacbruno/marmite/) [[Marmite](https://marmite.blog/)] - 零設定部落格產生器。
  * [zensical/zensical](https://github.com/zensical/zensical) - Material for MkDocs 團隊打造的現代靜態網站產生器。 [![Build](https://github.com/zensical/zensical/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/zensical/zensical/actions/workflows/build.yml)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 支援加密的用戶端與伺服器。
  * [housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) - 輕量、事件驅動的 WebSocket。
  * [iddm/urlshortener-rs](https://github.com/iddm/urlshortener-rs) - 極簡網址縮短函式庫。 [![CI](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/urlshortener.svg)](https://crates.io/crates/urlshortener)
  * [ratchet](https://github.com/graphform/ratchet) [[ratchet_rs](https://crates.io/crates/ratchet_rs)] - Ratchet 是快速、輕量且完全非同步的 WebSocket 協定實作，支援擴充功能與 Deflate。
  * [rerun-io/ewebsock](https://github.com/rerun-io/ewebsock) [[ewebsock](https://crates.io/crates/ewebsock)] - 簡單的 Rust WebSocket 函式庫，可編譯為原生程式或 Web（WASM）。透過適合非同步的 API 傳送與接收文字／二進位訊息。 [![unsafe forbidden](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
  * [rust-websocket](https://github.com/websockets-rs/rust-websocket) - 處理 WebSocket 連線（用戶端與伺服器）的框架。
  * [snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) - 輕量串流式 WebSocket 實作。
  * [vi/websocat](https://github.com/vi/websocat) - 與 WebSocket 互動的 CLI，具備 Netcat、Curl 與 Socat 功能。

## 套件登錄庫

套件登錄庫可讓你將 Rust 函式庫發布為 crate 套件，供他人公開或私下分享。

* [cenotelie/cratery](https://github.com/cenotelie/cratery) - 輕量、內建完整功能的私有 Cargo 登錄庫，專為組織打造，並提供類似 [docs.rs](https://docs.rs) 與 [deps.rs](https://deps.rs) 的功能。 [![CI](https://github.com/cenotelie/cratery/actions/workflows/ci.yml/badge.svg)](https://github.com/cenotelie/cratery/actions/workflows/ci.yml)
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/product/formats/cargo-registry) - 全代管套件管理 SaaS，原生支援公開與私有 Cargo／Rust 登錄庫（以及許多其他生態系）。開源專案可免費使用。
* [Crates](https://crates.io) - Rust／Cargo 官方公開登錄庫。
* [getnora-io/nora](https://github.com/getnora-io/nora) - 輕量單一執行檔的產物登錄庫，支援 Docker、Maven、npm、PyPI、Cargo、Go 與原始格式，並提供含快取及離線模式的上游 Proxy。
* [RepoFlow :heavy_dollar_sign:](https://www.repoflow.io) - 簡單現代的儲存庫平台，可託管 Rust crate 儲存庫並 Proxy crates.io，也支援 Docker、PyPI、Maven、npm、RubyGems 等套件格式。可使用雲端服務或自行託管。
* [w4/chartered](https://github.com/w4/chartered) - 私有、需驗證且具權限控管的 Cargo 登錄庫。 [![CI](https://github.com/w4/chartered/actions/workflows/ci.yml/badge.svg)](https://github.com/w4/chartered/actions/workflows/ci.yml)

## 資源

* [A Brief History of Rust. Part 1](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-1-805459c60c6b) - 從開發者追求軟體穩定性的歷程，到幾乎讓創作者失去穩定性的專案。[第二部分](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-981d61451aa5)。[第三部分](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-b8c0f7a7e781?sk=c0e7fe5fde11a62edc23f284f125aa18)。
* [ANSSI-FR/rust-guide](https://github.com/ANSSI-FR/rust-guide) - 法國國家資訊系統安全局（ANSSI）提供的 Rust 安全應用程式開發建議，附自動產生的檢查清單。
* 藝術
  * [🦀 Free Ferris Pack 🦀](https://github.com/MariaLetta/free-ferris-pack) - 50 多張免費 Ferris 插圖，呈現不同情緒、姿勢與情境，提供 PNG 與 SVG 格式並採 CC0 授權。
* 基準測試
  * [c410-f3r/wtx-bench](https://github.com/c410-f3r/wtx-bench) - Web 基準測試。
  * [TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) - [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/) 的實作。
* 簡報與演講
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) - 由 [Julia Evans](https://x.com/b0rk) 在 RustConf 2016 發表。
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) - 由 [Nicholas Matsakis](https://github.com/nikomatsakis) 在 C++Now 2018 發表。
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) - 由 [Michael Gattozzi](https://github.com/mgattozzi) 在 RustConf 2017 發表。
* 學習資源
  * [100 Exercises To Learn Rust](https://rust-exercises.com) - 透過 100 個實作練習學習 Rust，涵蓋語法、型別等內容。
  * [An Introduction to Programming using entity-component-systems and existence-based processing in Rust](https://root-11.github.io/intro-book/) - Bjorn Madsen 著作。
  * [Aquascope](https://github.com/cognitive-engineering-lab/aquascope) - 以互動視覺化方式呈現 Rust 編譯期與執行期行為。
  * [Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - 社群共同整理的直播清單。
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) - 願意指導學員並教授 Rust 與程式設計的導師清單。
  * [CIS 198: Rust Programming](http://cis198-2016s.github.io/schedule/) - 賓夕法尼亞大學電腦科學 Rust 程式設計課程。
  * [CodeCrafters.io](https://app.codecrafters.io/tracks/rust) - 打造自己的 Redis、Git、Docker 或 SQLite。
  * [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - Rust 基礎三日課程，另有 Android、裸機 Rust 與並行程式設計一日課程。提供英文、[巴西葡萄牙文](https://google.github.io/comprehensive-rust/pt-BR/)與[韓文](https://google.github.io/comprehensive-rust/ko/)版本。
  * [Easy Rust](https://github.com/Dhghomon/easy_rust) - 以淺顯英文學習 Rust。
  * [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - 實用入門指南，教你打造速度快、效率高，且比傳統 C／C++ 嵌入式軟體安全許多的韌體。
  * [exercism.org](https://exercism.org/tracks/rust) - 協助你學習 Rust 新概念的程式練習。
  * [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) - 透過製作遊戲學習 Rust 的實作指南，由 [Herbert Wolverson](https://github.com/thebracket/) 著（付費）。
  * [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker) - [Qouteall](https://github.com/qouteall) 撰寫的指南，說明 Rust 的借用機制與避免借用錯誤的方法。
  * [Idiomatic Rust](https://github.com/mre/idiomatic-rust) - 經同儕審查、教導慣用 Rust 的文章／演講／儲存庫合集。
  * [LabEx Rust Skill Tree](https://labex.io/skilltrees/rust) - 有系統的 Rust 學習路徑，提供實作實驗，專為初學者循序掌握 Rust 而設計。
  * [Learn Rust 101](https://rust-lang.guide/) - 協助你踏上成為 Rustacean（Rust 開發者）之路的指南。
  * [Learn Rust by 500 lines code](https://github.com/cuppar/rtd) - 透過 500 行程式碼學習 Rust，從零打造待辦事項 CLI 應用程式。
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - 深入探索 Rust 記憶體管理規則，並實作數種不同的 List 結構。
  * [Little Book of Rust Books](https://lborb.github.io/book/) - 精選 Rust 書籍與教學指南清單。
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) - 由程式設計社群票選推薦資源清單。
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - 介紹 Rust 語言的書籍。
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - 可執行範例合集，說明各種 Rust 概念與標準函式庫。
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - 簡單範例合集，示範如何使用 Rust 生態系的 crates 以良好方式完成常見程式設計任務。
  * [Rust Flashcards](https://github.com/ad-si/Rust-Flashcards) - 超過 550 張閃卡，從基礎原理開始學習 Rust。
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) - 為資深軟體開發者準備的 Rust 快速入門。
  * [Rust Gym](https://github.com/warycat/rustgym) - 以 Rust 解答的大型程式設計面試題合集。
  * [Rust in Action](https://www.manning.com/books/rust-in-action) - [Tim McNamara](https://github.com/timClicks) 撰寫的 Rust 系統程式設計實作指南（付費）。
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) - 由 [Carol Nichols](https://github.com/carols10cents) 與 [Jake Goulding](https://github.com/shepmaster) 主講的影片系列（付費）。
  * [Rust Language Cheat Sheet](https://cheats.rs/) - Rust 語言速查表。
  * [Rust Tiếng Việt](https://rust-tieng-viet.github.io/) - 以越南語學習 Rust。
  * [rust-how-do-i-start](https://github.com/jondot/rust-how-do-i-start) - 專門回答「Rust，那麼我該如何開始？」的儲存庫。僅收錄為初學者精選的資源與學習路線。
  * [rust-learning](https://github.com/ctjhoa/rust-learning) - 學習 Rust 的實用資源合集。
  * [Rustfinity](https://www.rustfinity.com) - 透過實作練習與挑戰學習 Rust 的互動平台。
  * [Rustlings](https://github.com/rust-lang/rustlings) - 協助熟悉閱讀與撰寫 Rust 程式碼的小型練習。
  * [Rusty CS](https://github.com/AbdesamedBendjeddou/Rusty-CS) - 電腦科學課程，協助使用 Rust 練習已學到的學術知識。
  * [stdx](https://github.com/brson/stdx) - 先學習這些 crates，作為標準函式庫的延伸。
  * [Tour of Rust](https://tourofrust.com) - 互動式循序指南，帶你認識 Rust 程式語言的各項功能。
* 效能
  * [How to avoid bounds checks in Rust (without unsafe!)](https://shnatsel.medium.com/how-to-avoid-bounds-checks-in-rust-without-unsafe-f65e618b4c1e) - 最佳化邊界檢查須知大全。
  * [Performance of Rust language](https://raw.githubusercontent.com/yugr/rust-slides/main/EN.pdf) - Rust 著重效能的語言功能概覽。
  * [The Rust Performance Book](https://nnethercote.github.io/perf-book/) - Rust 程式最佳化技巧。
* Podcast
  * [New Rustacean](https://newrustacean.com) - 關於學習 Rust 的 Podcast。
  * [Rustacean Station](https://rustacean-station.org/) - 製作 Rust Podcast 內容的社群專案。
* [Rust Design Patterns](https://github.com/rust-unofficial/patterns) - Rust 設計模式、反模式與慣用法目錄。
* [Rust Guidelines](http://aturon.github.io/) - Aaron Turon 的 Rust 部落格文章。
* [Rust Security Handbook](https://github.com/yevh/rust-security-handbook) - 十章手冊，教你撰寫真正安全的 Rust：型別安全、防止 Panic 等。
* [Rust Servers, Services and Apps - MEAP](https://www.manning.com/books/rust-servers-services-and-apps) - 以 Rust 建置後端伺服器、服務與前端，打造快速、可靠且易維護的應用程式。
* [Rust Subreddit](https://www.reddit.com/r/rust/) - 討論 Rust 相關問題、文章與資源的 Subreddit（論壇）。
* [RustBooks](https://github.com/sger/RustBooks) - Rust 書籍清單。
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t) - RustCamp 2015 錄影演講。
* [RustViz](https://github.com/rustviz/rustviz) - 從簡單 Rust 程式產生視覺化結果，協助使用者更了解 Rust 的生命週期與借用機制。
* [Watch Jon Gjengset Implement BitTorrent in Rust](https://www.youtube.com/watch?v=jf_ddGnum_4) - 以 Rust 實作（部分）BitTorrent 用戶端。

## 授權

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
