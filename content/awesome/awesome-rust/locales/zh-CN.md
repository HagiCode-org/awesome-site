# Awesome Rust [![lint badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml/badge.svg)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml) [![build badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/rust-unofficial/awesome-rust/)

Rust 代码与资源精选列表。

如果你想贡献内容，请阅读[此文档](CONTRIBUTING.md)。

<!-- BEGIN mktoc {"min_depth": 2} -->

- [应用程序](#applications)
  - [音频与音乐](#audio-and-music)
  - [区块链](#blockchain)
  - [数据库](#database)
  - [嵌入式](#embedded)
  - [模拟器](#emulators)
  - [文件管理器](#file-manager)
  - [金融](#finance)
  - [游戏](#games)
  - [图形](#graphics)
  - [图像处理](#image-processing)
  - [工业自动化](#industrial-automation)
  - [消息队列](#message-queue)
  - [机器学习运维（MLOps）](#mlops)
  - [可观测性](#observability)
  - [操作系统](#operating-systems)
  - [包管理器](#package-managers)
  - [支付](#payments)
  - [效率工具](#productivity)
  - [路由协议](#routing-protocols)
  - [安全工具](#security-tools)
  - [社交网络](#social-networks)
  - [系统工具](#system-tools)
  - [任务调度](#task-scheduling)
  - [文本编辑器](#text-editors)
  - [文本处理](#text-processing)
  - [实用工具](#utilities)
  - [视频](#video)
  - [虚拟化](#virtualization)
  - [Web 应用](#web)
  - [Web 服务器](#web-servers)
  - [工作流自动化](#workflow-automation)
- [开发工具](#development-tools)
  - [构建系统](#build-system)
  - [调试](#debugging)
  - [部署](#deployment)
  - [嵌入式](#embedded-1)
  - [外部函数接口（FFI）](#ffi)
  - [格式化工具](#formatters)
  - [集成开发环境（IDE）](#ides)
  - [性能分析](#profiling)
  - [服务](#services)
  - [静态分析](#static-analysis)
  - [测试](#testing)
  - [转译](#transpiling)
  - [隧道](#tunnel)
- [库](#libraries)
  - [人工智能](#artificial-intelligence)
    - [遗传算法](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [机器学习](#machine-learning)
    - [OpenAI](#openai)
    - [工具](#tooling)
  - [天文学](#astronomy)
  - [异步](#asynchronous)
  - [音频与音乐](#audio-and-music-1)
  - [身份验证](#authentication)
  - [汽车](#automotive)
  - [生物信息学](#bioinformatics)
  - [缓存](#caching)
  - [云](#cloud)
  - [命令行](#command-line)
  - [压缩](#compression)
  - [计算](#computation)
  - [并发](#concurrency)
  - [配置](#configuration)
  - [密码学](#cryptography)
  - [数据处理](#data-processing)
  - [数据流](#data-streaming)
  - [数据结构](#data-structures)
  - [数据可视化](#data-visualization)
  - [数据库](#database-1)
  - [日期与时间](#date-and-time)
  - [分布式系统](#distributed-systems)
  - [领域驱动设计](#domain-driven-design)
  - [eBPF](#ebpf)
  - [电子邮件](#email)
  - [编码](#encoding)
  - [文件系统](#filesystem)
  - [金融](#finance-1)
  - [函数式编程](#functional-programming)
  - [游戏开发](#game-development)
  - [地理空间](#geospatial)
  - [图算法](#graph-algorithms)
  - [图形](#graphics-1)
  - [图形用户界面（GUI）](#gui)
  - [图像处理](#image-processing-1)
  - [语言规范](#language-specification)
  - [许可](#licensing)
  - [日志记录](#logging)
  - [宏](#macro)
  - [标记语言](#markup-language)
  - [移动开发](#mobile)
  - [网络编程](#network-programming)
  - [解析](#parsing)
  - [外设](#peripherals)
  - [平台专用](#platform-specific)
  - [逆向工程](#reverse-engineering)
  - [脚本](#scripting)
  - [仿真](#simulation)
  - [社交网络](#social-networks-1)
  - [系统](#system)
  - [任务调度](#task-scheduling-1)
  - [模板引擎](#template-engine)
  - [文本处理](#text-processing-1)
  - [文本搜索](#text-search)
  - [不安全代码](#unsafe)
  - [视频](#video-1)
  - [虚拟化](#virtualization-1)
  - [Web 编程](#web-programming)
- [注册表](#registries)
- [资源](#resources)
- [许可](#license)
<!-- END mktoc -->

## 应用程序

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - 由 Rust 驱动的 Wolfram 语言解释器。
* [alacritty](https://github.com/alacritty/alacritty) - 一款跨平台、使用 GPU 加速的终端模拟器
* [Andromeda](https://github.com/tryandromeda/andromeda) - 从头开始使用 Rust 构建的 JavaScript 和 TypeScript 运行时 🦀，由 Nova Engine 驱动。
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - 用于浏览 AI 模型、基准测试和编程代理的 TUI [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - Tor 的一种实现。（目前还是一个尚不完整的客户端，敬请期待！）[![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - 交互式汇编语言 shell。
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - 基于 Tauri 和 Rust 构建的跨平台现代 Clash GUI，支持 Windows、macOS 和 Linux。
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - 用户空间 WireGuard VPN 实现 [![build badge](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - 使用 Tauri 构建的轻量级开源数据库管理工具，支持 MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB 等。[![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - 企业级开源 SSO 和 WireGuard VPN，支持真正的双因素/多因素身份验证。
* [denoland/deno](https://github.com/denoland/deno) - 基于 V8 和 Tokio 构建的安全 JavaScript/TypeScript 运行时 [![Build Status](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - 使用你喜爱的调色板/主题转换喜爱的图像和壁纸 [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - 简单、功能齐全的去中心化网状 VPN，支持 WireGuard。[![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - 满足简单需求的简易编辑器。[![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - 受 Ansible 语法启发的 HTTP 负载测试应用程序
* [fend](https://github.com/printfn/fend) - 支持单位运算的任意精度计算器 [![build](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - 简单的微服务
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - 跨平台桌面 AI 代理，使用 Rust 运行时，可在真实代码仓库中工作，并操控浏览器、终端和桌面应用程序。
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - 极快且相对稳定的 Mega 下载器 [![build](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - 受 i3wm 启发的 Windows 平铺式窗口管理器，支持 YAML 配置、多显示器和键盘驱动的命令
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - mdbook 的国际化和渲染扩展。
* [habitat](https://github.com/habitat-sh/habitat) - Chef 创建的应用程序构建、部署和管理工具。
* [Herd](https://github.com/imjacobclark/Herd) - 实验性的 HTTP 负载测试应用程序
* [hickory-dns](https://crates.io/crates/hickory-dns) - DNS 服务器 [![Build Status](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - 底层使用 WireGuard 的覆盖网络或私有网状网络
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - 快速、简单且轻量级的数据收集器
* [kalker](https://github.com/PaddiM8/kalker) - 支持类数学语法、用户自定义变量和函数、求导、积分及复数的科学计算器。支持跨平台和 WASM [![Build Status](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - 用于管理和共享多个 kubectl 端口转发配置的跨平台系统托盘应用。[![Build Status](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - 高性能点对点 VPN
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - 超轻量级 Kubernetes 服务网格。
* [LWE](https://github.com/YangYuS8/lwe) - 使用 Rust 和 Tauri 构建的 Linux 桌面应用程序，用于浏览、管理和应用 Wallpaper Engine 内容。
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - [mdBook](https://github.com/rust-lang/mdBook) 的预处理器，使用 KaTeX 渲染 LaTeX 数学表达式。
* [MaidSafe](https://github.com/maidsafe) - 去中心化平台。
* [mayocream/koharu](https://github.com/mayocream/koharu) - 使用 Candle 和 Tauri 构建的机器学习漫画翻译器，支持自动检测对话气泡、OCR、图像修复和 LLM 翻译
* [mdBook](https://github.com/rust-lang/mdBook) - 用于从 Markdown 文件创建书籍的命令行工具 [![Build Status](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - 支持 Git 的单仓库与单体代码库管理系统，也是 Google Piper 的非官方开源实现。
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - 为你检查链接的 mdbook 后端。
* [mirrord](https://github.com/metalbear-co/mirrord) - 连接本地进程与云环境，在云端条件下运行本地代码
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - 基于 Nostr 身份与 FIPS 支持的数据平面构建的 Tailscale 风格私有网状 VPN。提供原生跨平台应用（macOS、Linux、Windows、移动端）及 CLI/守护进程。
* [newdee/magpie](https://github.com/newdee/magpie) - 本地优先的 Spotlight 风格启动器，完全在设备上对 GitHub 收藏、本地文件、图像和视频进行语义搜索。 [![CI](https://github.com/newdee/magpie/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/newdee/magpie/actions/workflows/ci.yml)
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - 适用于 Linux 和 macOS 的 Steam 及无 DRM 游戏目录与启动器
* [openma-ai/Martty](https://github.com/openma-ai/Martty) - 使用 Rust/ratatui 构建的终端客户端，适用于 DeepSeek Harness 及其他兼容 ACP 的编程代理。 [![CI](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml/badge.svg?branch=main)](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml)
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - 基于 Tauri 2.0 和纯 Rust SSH（russh）构建的跨平台 SSH 终端客户端及本地终端模拟器。支持多路复用连接、SFTP 文件管理器、内置 IDE（CodeMirror 6）、端口转发（-L/-R/-D）、宽限期自动重连、插件系统、AI 助手、加密导出（.oxide）和 11 种语言。 [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - 基于补丁的分布式版本控制系统
* [provrb/OBDium](https://github.com/provrb/obdium) - 基于 Tauri 的跨平台全方位车辆诊断应用。通过 ELM327 适配器连接车辆，读取故障码、实时 OBD-II 数据、I/M 就绪测试等！
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - 企业级快速开发平台（Axum + SeaORM + JWT + VUE3，支持 MySQL/Postgres/SQLite）
* [Rauthy](https://github.com/sebadob/rauthy) - 基于 OpenID Connect 单点登录的身份与访问管理
* [Rio](https://github.com/raphamorim/rio) - 由 WebGPU 驱动、使用 GPU 硬件加速的终端模拟器，专注于桌面和浏览器运行。
* [rkik](https://github.com/aguacero7/rkik) - 用于无状态、被动 NTP 检查的 CLI 工具，正如 dig 和 ping 分别用于 DNS 和 ICMP。支持异步请求和持续监控。 [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - 通用多语言运行器与智能 REPL（25 种以上语言：Python、JS、Go、C 等）。
* [runmat-org/runmat](https://github.com/runmat-org/runmat) [[runmat](https://crates.io/crates/runmat)] - MATLAB 语法数值程序的运行时，通过 wgpu 提供 GPU 加速。 [![CI](https://github.com/runmat-org/runmat/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/runmat-org/runmat/actions/workflows/ci.yml)
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - 使用 Rust 构建的高性能物联网开发平台，面向多协议支持与实时数据处理。支持 MQTT、WebSockets（WS）、TCP 和 CoAP 协议，灵活适用于多种物联网应用。
* [rx](https://github.com/cloudhead/rx) - 受 Vi 启发的现代像素艺术编辑器
* [Ryot](https://github.com/ignisda/ryot) - 跟踪媒体消费、健身等活动的自托管应用。
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - 跨平台系统托盘应用，通过全局快捷键、嵌套菜单和 JSON 配置组织并运行预定义终端命令（Tauri + Vue）。
* [Saga Reader](https://github.com/sopaco/saga-reader) - AI 驱动、极快且极轻量的互联网阅读器。支持获取搜索引擎信息和 RSS。
* [Servo](https://github.com/servo/servo) - 原型 Web 浏览器引擎
* [shoes](https://github.com/cfal/shoes) - 多协议代理服务器
* [shuttle](https://github.com/shuttle-hq/shuttle) - 无服务器平台。
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - 轻松监控网络流量的跨平台应用 [![build badge](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - 超快的 TypeScript / JavaScript 编译器
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - 自托管 AI 编程助手，GitHub Copilot 的开源替代品，支持 GPU 和 OpenAPI 接口 [![latest release](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - 自托管 PaaS，以单个 Rust 二进制程序取代 Vercel、分析、错误追踪和运行时间监控
* [tiny](https://github.com/osa1/tiny) - 终端 IRC 客户端
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - 用于定制 Android 的开源工具套件，提供 root 访问、启动镜像操作和无系统分区修改
* [tunnetio/Tunnet](https://github.com/tunnetio/Tunnet) - 私有网状网络，支持公共隧道、基于身份的 SSH 和 P2P 文件传输
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - 用于终端、桌面 GUI 和命令行工作流的本地编程代理，具备持久任务状态及有证据支持的验证。 [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - 基于标记的排版系统 [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - 基于 Tauri 构建的 macOS、Linux 和 Windows WireGuard VPN 客户端。
* [vortix](https://github.com/Harry-kp/vortix) - WireGuard 和 OpenVPN 的终端界面，支持实时遥测、泄漏检测和断网保护
* [vproxy](https://github.com/0x676e67/vproxy) - 高性能 HTTP/HTTPS/SOCKS5 代理服务器 [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - 安全快速的 WebAssembly 运行时，支持 WASI 和 Emscripten [![Build Status](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - 完整的模拟 REST API 生成器
* [wezterm](https://github.com/wezterm/wezterm) - GPU 加速的跨平台终端模拟器和多路复用器
* [WinterJS](https://github.com/wasmerio/winterjs) - 使用 SpiderMonkey 和 Axum 构建的安全 JavaScript 运行时
* [zellij](https://github.com/zellij-org/zellij) - 功能齐全的终端多路复用器（工作区）
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - 使用 Tauri 构建的现代、轻量且安全的 Mihomo（Clash Meta）GUI 客户端。 [![Security Audit](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### 音频与音乐

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - 原生 Rust 实时语音 AI 代理运行时（电话 + WebRTC），自托管单个二进制程序，兼容 pipecat
* [dano](https://github.com/kimono-koans/dano) - 面向媒体文件的 hashdeep/md5tree 工具（功能远不止于此）
* [enginesound](https://github.com/DasEtwas/enginesound) - 通过程序生成较真实引擎声音的 GUI 与命令行应用，具备深入配置、可变采样率和频率分析窗口。
* [Festival](https://github.com/hinto-janai/festival) - 本地音乐播放器/服务器/客户端 [![build-badge](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - 精简的 mpd 终端客户端，追求简单且高度可配置 [![build-badge](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - 面向图的实时编程语言，用于在浏览器中协作创作音乐。
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - Spotify 终端客户端，支持原生流媒体、同步歌词和实时音频可视化 [![Continuous Deployment](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - 现代、可配置的终端 MPD 客户端，支持专辑封面
* [ncspot](https://github.com/hrkfdn/ncspot) - 跨平台 ncurses Spotify 客户端，受 ncmpc 等启发。 [![build badge](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - 使用 Rust 编写的快速、简单且专业的 Linux 音频计量/可视化工具。
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - 基于 Rust 的播客管理系统，支持多用户。Pinepods 使用中央数据库，使收听时间和主题等信息跨设备同步。结合 Tauri 构建的客户端，提供完整的跨平台收听方案！ [![Docker Container Build](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - 自托管播客管理器，自动下载新节目，提供收听用 Web 界面和兼容 GPodder 的同步 API，可用于 AntennaPod 等移动应用。 [![build badge](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - 音乐流媒体应用。
* [rusty-amp](https://github.com/danylokravchenko/rusty-amp) - 在终端中运行的完整吉他放大器与效果器板系统，支持外部插件。
* [Spotify Player](https://github.com/aome510/spotify-player) - 功能完全对等的终端 Spotify 播放器。
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - 作为 UNIX 守护进程运行的开源 Spotify 客户端。 [![Continuous Integration](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - 音乐播放器 TUI
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - 在终端中浏览并收听全球数千个广播电台 [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - 每日静态生成的电子舞曲制作人信息资源。利用 Beatport、Spotify 等公开数据，按 EDM 类型每日分析最常用的速度、调性、根音等数值。

### 区块链

* [Anchor](https://github.com/solana-foundation/anchor) - Anchor 是构建安全 Solana 程序（智能合约）的领先开发框架。
* [artemis](https://github.com/paradigmxyz/artemis) - 编写 MEV 机器人的简单、模块化快速框架。
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - 操作 Bitcoin SV 的库。
* [cairo](https://github.com/starkware-libs/cairo) - Cairo 是首个用于创建可证明通用计算程序的图灵完备语言，也是使用 STARK 证明的 ZK-Rollup [StarkNet](https://www.starknet.io) 的原生语言 ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - 基于 Polkadot 的完全去中心化跨链加密资产管理。
* [CITA](https://github.com/citahub/cita) - 面向企业用户的高性能区块链内核。
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - Coinbase Pro 客户端，支持同步/异步/WebSocket
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - 由 EigenLayer 保障安全、AI 优先的去中心化存储。
* [Diem](https://github.com/diem/diem) - Diem 的使命是提供简单的全球货币与金融基础设施，赋能数十亿人。
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - Dusk 的参考实现，为现实世界资产（RWA）和合规金融应用提供注重隐私、可扩展的金融市场基础设施（FMI）。 [![Build Status](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - Electrum Server 的高效重新实现。
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - Beerus 是无需信任的 StarkNet 轻客户端，⚡极其快速⚡ [![GitHub Workflow Status](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - 编码和解码智能合约调用。
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - 自定义以太坊靓号地址生成器
* [etk](https://github.com/quilt/etk) - etk 是编写、读取和分析 EVM 字节码的工具集合。
* [Forest](https://github.com/ChainSafe/forest) - Filecoin 实现 [![Build Status](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Foundry 是极快、可移植且模块化的以太坊应用开发工具包。 ![Build Status](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - MimbleWimble 协议的演进
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - BIP-32 HD 钱包相关的密钥派生工具。
* [Holochain](https://github.com/holochain/holochain) - 区块链的可扩展 P2P 替代方案，用于构建你一直想开发的各类分布式应用。 [![detect critical check failures](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - 无需许可、模块化的互操作框架。链下客户端使用 Rust 编写，Solana VM 和 CosmWasm 智能合约亦然。
* [HyperSync](https://github.com/enviodev/hypersync-client-rust) [[hypersync-client](https://crates.io/crates/hypersync-client)] - Envio HyperSync 的客户端；该区块链数据 API 返回过滤后的区块、交易与日志，可替代 JSON-RPC。 [![Build Status](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml)
* [ibc-rs](https://github.com/informalsystems/hermes) - [跨链通信](https://docs.cosmos.network/ibc)协议的实现
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - BIP39 的实现。
* [interBTC](https://github.com/interlay/interbtc) - 连接 Polkadot 和 Kusama 的无需信任、完全去中心化比特币桥。
* [Joystream](https://github.com/Joystream/joystream) - 用户治理的视频平台
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - 世界上最快、开源、去中心化且完全可扩展的 Layer-1。
* [Lighthouse](https://github.com/sigp/lighthouse) - 以太坊共识层（CL）客户端 [![Build Status](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - 为高度可扩展、低延迟 Web3 应用设计的去中心化区块链基础设施 [![Build Status](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - 面向低端移动设备的去中心化智能合约平台。
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervos CKB 是无需许可的公有区块链，是 Nervos 网络的共同知识层。
* [opensea-rs](https://github.com/gakonst/opensea-rs) - Opensea API 与合约的绑定及 CLI。
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - Parity 比特币客户端
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - 基于 Intel SGX 和 Substrate 的机密智能合约区块链
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - Parity Polkadot 区块链 SDK
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - 使用 Rust 编写的 Cardano 节点客户端。
* [reth](https://github.com/paradigmxyz/reth) - 模块化、对贡献者友好且极快的以太坊协议实现。
* [revm](https://github.com/bluealloy/revm) - Revolutionary Machine（revm）是快速的以太坊虚拟机。
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - 支持比特币相关数据结构与网络消息的序列化/反序列化、解析和执行的库。
* [rust-lightning](https://github.com/lightningdevkit/rust-lightning) [![Crate](https://img.shields.io/crates/v/lightning.svg?logo=rust)](https://crates.io/crates/lightning) - 比特币闪电网络库。主要 crate `lightning` 不处理网络、持久化或其他 I/O，因此不依赖运行时，但用户须实现基本网络逻辑、链交互和磁盘存储，以及链接 crate。
* [sigma-rust](https://github.com/ergoplatform/sigma-rust) - ErgoTree 解释器与钱包相关功能。
* [starkware-libs/cairo-vm](https://github.com/starkware-libs/cairo-vm) - Cairo VM 的实现 [![rust](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml/badge.svg)](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml)
* [Subspace](https://github.com/autonomys/subspace) - 首个同时实现可扩展性、安全性和去中心化，完全解决区块链三难困境的第一层区块链。
* [Sui](https://github.com/MystenLabs/sui) - 下一代智能合约平台，具备高吞吐量、低延迟和由 Move 语言支持的面向资产编程模型。
* [svm-rs](https://github.com/alloy-rs/svm-rs) - Solidity 编译器版本管理器。
* [tempoxyz/tempo](https://github.com/tempoxyz/tempo) - 面向大规模稳定币支付的区块链，兼容 EVM，支持亚秒级最终确认和原生智能账户功能，基于 Reth SDK 构建
* [tendermint-rs](https://github.com/cometbft/tendermint-rs) - Tendermint 区块链数据结构与客户端
* [wagyu](https://github.com/howardwu/wagyu) [[wagyu](https://crates.io/crates/wagyu)] - 生成加密货币钱包的库
* [zcash](https://github.com/zcash/zcash) - Zcash 是“Zerocash”协议的实现。

### 数据库

* [apecloud/ape-dts](https://github.com/apecloud/ape-dts) - 数据传输套件。支持 MySQL、PostgreSQL、Redis、MongoDB、Kafka、ClickHouse 等之间的数据复制。
* [Atomic-Server](https://github.com/ontola/atomic-server/) [[atomic-server](https://crates.io/crates/atomic_server)] - NoSQL 图数据库，具备实时更新、动态索引及用于 CMS 的易用 GUI。 [![Release](https://github.com/ontola/atomic-server/actions/workflows/release_please.yml/badge.svg)](https://github.com/ontola/atomic-server/actions)
* [ayarotsky/redis-shield](https://github.com/ayarotsky/redis-shield) - 将令牌桶算法实现为原生命令的 Redis 模块，用于高性能限流
* [CozoDB](https://github.com/cozodb/cozo) - 使用 Datalog、专注于图数据和算法的事务型关系数据库。支持时间旅行，速度快！ [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cozodb/cozo/build.yml?branch=main)](https://github.com/cozodb/cozo/actions/workflows/build.yml)
* [Curvine](https://github.com/CurvineIO/curvine) - Curvine 是使用 Rust 编写的高性能并发分布式缓存系统，面向 AI、大数据等低延迟、高吞吐量工作负载。
* [darkbird](https://github.com/Rustixir/darkbird) [[darkbird](https://crates.io/crates/darkbird)] - 受 Erlang Mnesia 启发的高并发、实时内存存储
* [Databend](https://github.com/databendlabs/databend) - 采用云原生架构的现代实时数据处理与分析 DBMS [![Release](https://github.com/databendlabs/databend/actions/workflows/release.yml/badge.svg)](https://github.com/databendlabs/databend/actions)
* [DB3 Network](https://github.com/dbpunk-labs/db3) - DB3 是社区驱动的区块链第二层去中心化数据库网络 [![GitHub Workflow Status (with event)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml/badge.svg)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml)
* [dsplce-co/supabase-plus](https://github.com/dsplce-co/supabase-plus) [[supabase-plus](https://crates.io/crates/supabase-plus)] - 功能齐全的命令行工具，扩展官方 Supabase CLI [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dsplce-co/supabase-plus/publish.yml)
](https://github.com/dsplce-co/supabase-plus/actions/workflows/publish.yml)
* [erikgrinaker/toydb](https://github.com/erikgrinaker/toydb) - 分布式 SQL 数据库，作为学习项目编写。
* [Garage](https://github.com/deuxfleurs-org/garage) [[garage](https://crates.io/crates/garage)] - 兼容 S3 的分布式对象存储服务，适合中小规模自托管。 [![status-badge](https://woodpecker.deuxfleurs.fr/api/badges/1/status.svg)](https://woodpecker.deuxfleurs.fr/repos/1)
* [GlueSQL](https://github.com/gluesql/gluesql) - SQL 数据库 Rust 库，集解析器（sqlparser-rs）、执行层和多种持久化及非持久化存储选项于一体。 [![crates.io](https://img.shields.io/crates/v/gluesql.svg)](https://crates.io/crates/gluesql)
* [Goldziher/scythe](https://github.com/Goldziher/scythe) - 多语言 SQL 编译器与检查器，通过感知模式的检查生成类型安全的 SQL 代码。
* [GreptimeDB](https://github.com/grepTimeTeam/greptimedb/) - 开源、云原生的分布式时序数据库，支持 PromQL/SQL/Python。[![CI](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml/badge.svg)](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml)
* [HelixDB](https://github.com/HelixDB/helix-db) - 强大的图向量数据库，用于 RAG 和 AI 的智能数据存储
* [Hiqlite](https://github.com/sebadob/hiqlite) - 高可用、可嵌入、基于 Raft 的 SQLite 与缓存
* [hydra-db/hydradb](https://github.com/hydra-db/hydradb) - 对象存储原生的分布式图数据库，支持 OpenCypher 查询、GraphBLAS 遍历和兼容 Neo4j 的 Bolt 连接。
* [indradb](https://crates.io/crates/indradb) - 图数据库
* [KiteSQL](https://github.com/KipData/KiteSQL) - 将 SQL 作为 Rust 函数使用
* [lancedb](https://github.com/lancedb/lancedb) [[vectordb](https://crates.io/crates/vectordb)] - 面向 AI 应用的无服务器低延迟向量数据库
* [Lucid](https://github.com/lucid-kv/lucid) - 可通过 HTTP API 访问的高性能分布式键值存储。 [![Build Status](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [Materialize](https://github.com/MaterializeInc/materialize) - 由 Timely Dataflow 驱动的流式 SQL 数据库 :heavy_dollar_sign:
* [microsoft/pg_durable](https://github.com/microsoft/pg_durable) - 在 PostgreSQL 内执行持久任务。长时间运行、容错的 SQL 函数，支持自动检查点、崩溃恢复和并行执行。零额外基础设施，以 pgrx 和 Rust 构建的 PostgreSQL 扩展运行。 [![License](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
* [native_db](https://github.com/vincent-herlemont/native_db) [[native_db](https://crates.io/crates/native_db)] - 可直接嵌入多平台应用（服务器、桌面、移动端）的数据库。轻松同步 Rust 类型
* [Neon](https://github.com/neondatabase/neon) - 无服务器 Postgres。分离存储与计算，以提供自动扩缩容、分支和无限存储。
* [NoKV-Lab/NoKV](https://github.com/NoKV-Lab/NoKV) - AI 原生分布式文件系统。 [![Rust](https://github.com/NoKV-Lab/NoKV/workflows/Rust/badge.svg)](https://github.com/NoKV-Lab/NoKV/actions/workflows/rust.yml)
* [noria](https://github.com/mit-pdos/noria) [[noria](https://crates.io/crates/noria)] - 用于 Web 应用后端的动态变化、部分有状态的数据流
* [oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) [[oxigraph](https://crates.io/crates/oxigraph)] - 实现 [SPARQL](https://www.w3.org/TR/sparql11-overview/) 标准的图数据库 ![Crates.io Version](https://img.shields.io/crates/v/oxigraph?logo=Rust)
* [ParadeDB](https://github.com/paradedb/paradedb/) - ParadeDB 是基于 Postgres 的 Elasticsearch 替代品，专为实时搜索与分析设计。
* [ParityDB](https://github.com/paritytech/parity-db) - 快速可靠、针对读取操作优化的数据库
* [pgdogdev/pgdog](https://github.com/pgdogdev/pgdog) - 用于扩展 PostgreSQL 的快速代理，提供连接池、负载均衡和分片。
* [Picodata](https://github.com/picodata/picodata) [[picodata-plugin](https://crates.io/crates/picodata-plugin)] - 兼容 PostgreSQL 的分布式数据库，采用 Rust 插件模型；商业插件提供 Redis 和 Cassandra 线协议兼容性。
* [PRQL](https://github.com/PRQL/prql) [[prqlc](https://crates.io/crates/prqlc)] - 现代数据转换语言，可编译为可读 SQL。 [![Tests](https://github.com/PRQL/prql/actions/workflows/tests.yml/badge.svg)](https://github.com/PRQL/prql/actions)
* [PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) - 事件溯源数据库引擎
* [Qdrant](https://github.com/qdrant/qdrant) - 支持扩展过滤的开源向量相似度搜索引擎 [![Tests](https://github.com/qdrant/qdrant/actions/workflows/rust.yml/badge.svg)](https://github.com/qdrant/qdrant/actions)
* [Qrlew/qrlew](https://github.com/Qrlew/qrlew) [[qrlew](https://crates.io/crates/qrlew)] - SQL 到 SQL 的差分隐私层 [![Qrlew](https://github.com/Qrlew/qrlew/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrlew/qrlew/actions) ![Crates.io Version](https://img.shields.io/crates/v/qrlew?logo=Rust)
* [RisingWaveLabs/RisingWave](https://github.com/RisingWaveLabs/risingwave) - 云中的下一代流式数据库 [![CI](https://github.com/risingwavelabs/risingwave/actions/workflows/labeler.yml/badge.svg)](https://github.com/risingwavelabs/risingwave/actions)
* [RustFS](https://github.com/rustfs/rustfs) [[RustFS](https://crates.io/crates/rustfs)] - 🚀 RustFS 是开源、兼容 S3 的高性能对象存储系统，支持与 MinIO、Ceph 等兼容 S3 的平台迁移及共存。  [![status-badge](https://github.com/rustfs/rustfs/actions/workflows/ci.yml/badge.svg)](https://github.com/rustfs/rustfs)
* [ruvnet/ruvector](https://github.com/ruvnet/ruvector) [[ruvector-core](https://crates.io/crates/ruvector-core)] - 自学习向量数据库与认知容器，在本地运行 LLM，支持水平扩展。
* [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) [[turbovec](https://crates.io/crates/turbovec)] - 基于 TurboQuant、使用 Rust 编写的向量索引，支持 SIMD 加速搜索和 Python 绑定
* [sabiql](https://github.com/riii111/sabiql) [[sabiql](https://crates.io/crates/sabiql)] - 快速、无需驱动、Vim 优先的数据库 TUI，支持安全编辑和 ER 图。 [![CI](https://github.com/riii111/sabiql/actions/workflows/ci.yml/badge.svg)](https://github.com/riii111/sabiql/actions/workflows/ci.yml)
* [samyama-ai/samyama-graph](https://github.com/samyama-ai/samyama-graph) - Rust 原生图向量数据库，用于 GraphRAG、知识图谱、向量搜索和图分析。
* [seppo0010/rsedis](https://github.com/seppo0010/rsedis) - Redis 的重新实现。
* [Skytable](https://github.com/skytable/skytable) - 多模型 NoSQL 数据库 ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/skytable/skytable/Tests?style=flat-square)
* [sled](https://crates.io/crates/sled) - 现代嵌入式数据库（测试版） [![Build Status](https://github.com/spacejam/sled/actions/workflows/test.yml/badge.svg)](https://github.com/spacejam/sled/actions?workflow=Rust)
* [SQLSync](https://github.com/orbitinghail/sqlsync) - 多人使用、离线优先的 SQLite [![GitHub Workflow Status](https://github.com/orbitinghail/sqlsync/actions/workflows/actions.yaml/badge.svg?branch=main)](https://github.com/orbitinghail/sqlsync/actions?query=branch%3Amain)
* [SurrealDB](https://github.com/surrealdb/surrealdb) - 可扩展的分布式文档图数据库 [![Build Status](https://img.shields.io/github/workflow/status/surrealdb/surrealdb/Continuous%20integration/main)](https://github.com/surrealdb/surrealdb/actions)
* [tabularis](https://github.com/TabularisDB/tabularis) - 面向开发者的轻量级数据库管理工具，使用 Tauri 和 React 构建。
* [teaql/teaql-rs](https://github.com/teaql/teaql-rs) [[teaql-core](https://crates.io/crates/teaql-core)] - 模型驱动的运行时，提供类型化查询、受治理的修改和 SQL 提供程序 [![CI](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml)
* [TerminusDB](https://github.com/terminusdb/terminusdb-store) - 开源图数据库与文档存储 [![Build Status](https://github.com/terminusdb/terminusdb-store/actions/workflows/test.yml/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [tikv](https://github.com/tikv/tikv) - 使用 Rust 编写的分布式键值数据库
* [tokio-rs/toasty](https://github.com/tokio-rs/toasty) [[toasty](https://crates.io/crates/toasty)] - 简便舒适的 Rust ORM，支持 SQL（SQLite、PostgreSQL、MySQL）和 DynamoDB，提供派生宏、类型安全查询及数据库专属功能。 [![Crates.io](https://img.shields.io/crates/v/toasty.svg)](https://crates.io/crates/toasty)
* [Tonbo](https://github.com/tonbo-io/tonbo) - Tonbo 是基于 Apache Arrow 和 Parquet 的嵌入式持久化数据库 [![crates.io](https://img.shields.io/crates/v/tonbo.svg)](https://crates.io/crates/tonbo)
* [TrailBase](https://github.com/trailbaseio/trailbase) - 快速轻量的单文件 FireBase 替代品，提供类型安全 API、内置 V8 JS/ES6/TS 引擎、身份验证与管理面板 [![GitHub Workflow Status](https://github.com/trailbaseio/trailbase/workflows/test/badge.svg)](https://github.com/trailbaseio/trailbase/actions?workflow=test)
* [tsink](https://github.com/h2337/tsink) - Rust 嵌入式时序数据库 [![crates.io](https://img.shields.io/crates/v/tsink.svg)](https://crates.io/crates/tsink)
* [Turso](https://github.com/tursodatabase/turso) - Turso Database 是进程内 SQL 数据库，兼容 SQLite。
* [USearch](https://github.com/unum-cloud/usearch) - 向量与字符串相似度搜索引擎 [![crates.io](https://img.shields.io/crates/v/usearch.svg)](https://crates.io/crates/usearch)
* [valentinus](https://github.com/kn0sys/valentinus) - 基于 LMDB 绑定构建的下一代向量数据库 [![Crates.io Version](https://img.shields.io/crates/v/valentinus)](https://crates.io/crates/valentinus)
* [VelesDB](https://github.com/cyberlife-coder/VelesDB) [[velesdb-core](https://crates.io/crates/velesdb-core)] - 可嵌入、本地优先的数据库，以单个二进制程序中的三引擎架构，通过一种查询语言（VelesQL）融合向量搜索、属性图和列式存储。附带内核内代理记忆 SDK——语义/情景/过程记忆——支持跨会话 `why()` 回忆，通过图遍历揭示仅靠向量搜索会遗漏的关联事实。
* [vorot93/libmdbx-rs](https://github.com/vorot93/libmdbx-rs) [[mdbx-sys](https://crates.io/crates/mdbx-sys)] - MDBX 的绑定；MDBX 是“快速、紧凑、强大、嵌入式、事务型的键值数据库，采用宽松许可证”。这是 mozilla/lmdb-rs 的分支，通过补丁适配 libmdbx。
* [whispem/minikv](https://github.com/whispem/minikv) - 分布式多租户键值与对象存储，支持 Raft 共识、WAL 持久性、时序 API、向量搜索及兼容 S3 的端点。面向生产，提供 Helm Chart、Grafana 仪表板和 Python SDK。 [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)
* [WooriDB](https://github.com/naomijub/wooridb) - 受 Crux 和 Datomic 启发的通用时序数据库。

### 嵌入式

* [embassy-rs/embassy](https://github.com/embassy-rs/embassy) [[embassy](https://crates.io/crates/embassy)] - 下一代嵌入式 Rust async/await 框架，提供 STM32、nRF、RP、ESP32 等 HAL，具备 embassy-time、embassy-net、embassy-usb 及低功耗支持。 [![Build Status](https://github.com/embassy-rs/embassy/actions/workflows/ci.yml/badge.svg)](https://github.com/embassy-rs/embassy/actions)
* [infinition/waveshare-watch-rs](https://github.com/infinition/waveshare-watch-rs) - Waveshare ESP32-S3-Touch-AMOLED-2.06 的纯 Rust `no_std` 智能手表固件。支持 QSPI 80 MHz DMA 显示、Embassy 异步运行时，以及带常亮显示的事件驱动电源管理。
* [rmk](https://github.com/haobogu/rmk) - 功能丰富的键盘固件。
* [rtic-rs/rtic](https://github.com/rtic-rs/rtic) [[rtic](https://crates.io/crates/rtic)] - 用于构建嵌入式实时系统的实时中断驱动并发框架。
* [uefi-rs](https://github.com/rust-osdev/uefi-rs) - 统一可扩展固件接口的 Rust 封装。此 crate 提供安全、方便且高性能的 UEFI 功能抽象，便于开发 Rust 软件。

### 模拟器

另见[匹配关键词“emulator”的 crate](https://crates.io/keywords/emulator)。

* CHIP-8
  * [ColinEberhardt/wasm-rust-chip8](https://github.com/ColinEberhardt/wasm-rust-chip8) - WebAssembly CHIP-8 模拟器。
  * [starrhorne/chip8-rust](https://github.com/starrhorne/chip8-rust) - CHIP-8 模拟器
* Commodore 64
  * [kondrak/rust64](https://github.com/kondrak/rust64) - Commodore 64 模拟器
* Flash Player
  * [Ruffle](https://github.com/ruffle-rs/ruffle) - Ruffle 是 Adobe Flash Player 模拟器，利用 WebAssembly 面向桌面和 Web。 [![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml)[![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml)
* Gameboy
  * [Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Game Boy 研究项目与模拟器
  * [joamag/boytacean](https://github.com/joamag/boytacean) - 通过 WebAssembly 在 Web 上运行的 GameBoy Color 模拟器。
  * [mohanson/gameboy](https://github.com/mohanson/gameboy) - 功能完整的跨平台 GameBoy 模拟器。永远的男孩！
  * [mvdnes/rboy](https://github.com/mvdnes/rboy) - Gameboy 模拟器
* Gameboy Advance
  * [michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - RustboyAdvance-ng 是支持桌面、Android 和 [WebAssembly](https://michelhe.github.io/rustboyadvance-ng/) 的 Gameboy Advance 模拟器。 [![build badge](https://github.com/michelhe/rustboyadvance-ng/actions/workflows/deploy.yml/badge.svg)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* GameMaker
  * [OpenGMK](https://github.com/OpenGMK/OpenGMK) - OpenGMK 是对专有 GameMaker Classic 引擎的现代重写，提供运行器的完整源码移植、反编译器、TAS 框架，以及自行处理游戏数据的库。
* IBM PC
  * [MartyPC](https://github.com/dbalsom/martypc) - 使用 Rust 编写的 IBM PC/XT 模拟器。
* Intel 8080 CPU
  * [mohanson/i8080](https://github.com/mohanson/i8080) - Intel 8080 CPU 模拟器
* iOS
  * [touchHLE](https://github.com/touchHLE/touchHLE) - iPhone OS 应用的高级模拟器
* iPod
  * [clicky](https://github.com/daniel5151/clicky) - 转盘式 iPod 模拟器（开发中）
* NES
  * [koute/pinky](https://github.com/koute/pinky) - NES 模拟器
  * [pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) - NES 模拟器
* Nintendo 64
  * [gopher64](https://github.com/gopher64/gopher64) - 使用 Rust 编写的 N64 模拟器
* Nintendo DS
  * [dust](https://github.com/kelpsyberry/dust) - Nintendo DS 模拟器
* PlayStation 4
  * [Obliteration](https://github.com/obhq/obliteration) - 面向 Windows、macOS 和 Linux 的实验性 PS4 模拟器 [![CI](https://github.com/obhq/obliteration/actions/workflows/main.yml/badge.svg)](https://github.com/obhq/obliteration/actions/workflows/main.yml)
* Shockwave Player
  * [DirPlayer](https://github.com/igorlira/dirplayer-rs) - 使用 Rust 编写、兼容 Web 的 Shockwave Player 模拟器
* ZX Spectrum
  * [rustzx/rustzx](https://github.com/rustzx/rustzx) - [![RustZX CI](https://github.com/rustzx/rustzx/actions/workflows/ci.yml/badge.svg)](https://github.com/rustzx/rustzx/actions/workflows/ci.yml)

### 文件管理器

* [broot](https://github.com/Canop/broot) - 查看和浏览目录树的新方式（概览目录，即使很大；查找目录后通过 `cd` 进入；搜索时始终掌握文件层级；操作文件等），详见 [dystroy.org/broot](https://dystroy.org/broot/) [![Latest Version](https://img.shields.io/crates/v/broot.svg)](https://crates.io/crates/broot)
* [elio-fm/elio](https://github.com/elio-fm/elio) [[elio](https://crates.io/crates/elio)] - 功能齐全的终端文件管理器，提供丰富预览、批量操作和回收站支持。
* [FileSSH](https://github.com/JayanAXHF/FileSSH) - 快速易用的远程服务器文件管理 TUI，支持快速创建 SSH 会话、原位文件编辑等！ ![crates.io](https://img.shields.io/crates/v/filessh)
* [joshuto](https://github.com/kamiyaa/joshuto) - 类似 ranger 的终端文件管理器
* [moyangzhan/mango-finder](https://github.com/moyangzhan/mango-finder) - 使用自然语言搜索文件
* [pikeru](https://github.com/dvhar/pikeru) - Linux 文件选择器，具备良好缩略图和搜索功能
* [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive) - 基于虚拟分布式文件系统构建的文件管理器。
* [xplr](https://github.com/sayanarijit/xplr) - 可定制、精简且快速的 TUI 文件浏览器
* [yazi](https://github.com/sxyazi/yazi) - 基于异步 I/O 的极快终端文件管理器。

### 金融

另见[支付](#payments)应用。

* [Ashutosh0x/rust-finance](https://github.com/Ashutosh0x/rust-finance) - AI 交易终端，支持多交易所数据接入、执行、风险模型和 TUI 仪表板。
* [klirr](https://github.com/Sajjon/klirr) [[klirr](https://crates.io/crates/klirr)] - 零维护、智能的自由开源软件，为服务与费用生成精美发票。
* [longbridge/longbridge-terminal](https://github.com/longbridge/longbridge-terminal) - 长桥证券的 AI 原生 CLI：支持港股/美股/A 股/新加坡市场的实时行情、投资组合和交易。
* [makeev/alphai-tui](https://github.com/makeev/alphai-tui) [[alphai-tui](https://crates.io/crates/alphai-tui)] - 终端股票仪表板，无需密钥即可获取行情与图表，提供新闻情绪、SEC Form 4 内部人交易和财报解读。 ![CI](https://github.com/makeev/alphai-tui/actions/workflows/ci.yml/badge.svg?branch=main)
* [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) - 使用 Rust 和 Python 编写的高性能生产级算法交易平台。
* [tackler](https://github.com/tackler-ng/tackler) [[tackler](https://crates.io/crates/tackler)] - 快速可靠的记账引擎，原生支持 GIT SCM，适用于纯文本记账 [![CI Badge](https://github.com/tackler-ng/tackler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tackler-ng/tackler/blob/main/.github/workflows/ci.yml)
* [tarkah/tickrs](https://github.com/tarkah/tickrs) - 在终端中查看实时行情数据
* [wealthfolio/wealthfolio](https://github.com/wealthfolio/wealthfolio) - 精美、私密、本地优先的个人财务追踪工具：投资、净资产、支出和模拟。

### 游戏

另见[使用 Piston 制作的游戏](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston)。

* [buxx/OpenCombat](https://github.com/buxx/OpenCombat) - 实时二战战术游戏
* [chess-tui](https://github.com/thomas-mauran/chess-tui) - 国际象棋 TUI 实现 ♟️
* [citybound](https://github.com/citybound/citybound) - 你值得拥有的城市模拟游戏
* [cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) - Doom 渲染器，未来可能发展为可玩的游戏
* [doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) - Cave Story 引擎的重新实现，带有部分增强。
* [garkimasera/gaia-maker](https://github.com/garkimasera/gaia-maker) - 行星与地形改造模拟游戏
* [garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) - 可扩展的开放世界像素艺术 Roguelike 游戏
* [GitType](https://github.com/unhappychoice/gittype) - 将源码变成打字挑战的 CLI 代码打字游戏
* [gorilla-devs/ferium](https://github.com/gorilla-devs/ferium) - Ferium 是快速、功能丰富的 CLI 程序，从 Modrinth、CurseForge 和 GitHub Releases 下载并更新 Minecraft 模组，从 Modrinth 和 CurseForge 下载并更新模组包 ![ferium build](https://github.com/gorilla-devs/ferium/actions/workflows/build.yml/badge.svg?branch=main)
* [HactarCE/Hyperspeedcube](https://github.com/HactarCE/Hyperspeedcube) - 现代、适合初学者的 3D 和 4D 魔方模拟器，支持可定制的鼠标与键盘操作及竞速复原高级功能
* [lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) - 支持 BMS 格式的极简音乐游戏
* [louis-e/arnis](https://github.com/louis-e/arnis) - 利用 OpenStreetMap 和高程数据，将现实地理环境生成 Minecraft Java/Bedrock 世界 [![CI](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions)
* [maras-archive/rsnake](https://github.com/maras-archive/rsnake) - 贪吃蛇。
* [mcthesw/game-save-manager](https://github.com/mcthesw/game-save-manager) - 用户友好的游戏存档管理工具 [![build badge](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml/badge.svg)](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml)
* [mtkennerly/ludusavi](https://github.com/mtkennerly/ludusavi) - PC 游戏存档备份工具 [![build badge](https://img.shields.io/github/actions/workflow/status/mtkennerly/ludusavi/main.yaml?logo=github)](https://github.com/mtkennerly/ludusavi/actions/workflows/main.yaml) [![crate](https://img.shields.io/crates/v/ludusavi?logo=rust)](https://crates.io/crates/ludusavi)
* [ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) - 小型 2D 回合制六边形策略游戏
* [rhex](https://github.com/dpc/rhex) - 六边形 ASCII Roguelike 游戏
* [rsaarelm/magog](https://github.com/rsaarelm/magog) - Roguelike 游戏。
* [SoftbearStudios/mk48](https://github.com/SoftbearStudios/mk48) - Mk48.io 是在线多人海战游戏
* [Strophox/tetro-tui](https://github.com/Strophox/tetro-tui) [[tetro-tui](https://crates.io/crates/tetro-tui)] - 跨平台终端游戏，四格骨牌不断下落并堆叠。
* [swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) - 推箱子实现
* [thetawavegame/thetawave-legacy](https://github.com/thetawavegame/thetawave-legacy) - 太空射击游戏，旨在为新游戏开发者首次贡献提供入口。 ![build badge](https://github.com/thetawavegame/thetawave-legacy/actions/workflows/ci.yml/badge.svg?branch=master)
* [Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) - Quake 地图渲染器。
* [topheman/snake-pipe-rust](https://github.com/topheman/snake-pipe-rust) - 基于 stdin/stdout（以及 TCP 和 Unix 域套接字）的终端贪吃蛇游戏 [![crates.io](https://img.shields.io/crates/v/snakepipe.svg)](https://crates.io/crates/snakepipe)
* [ttyperacer/terminal-typeracer](https://gitlab.com/ttyperacer/terminal-typeracer) - 为终端编写的单人打字测试游戏
* [Veloren](https://gitlab.com/veloren/veloren) - 开源、开放世界的多人体素 RPG 游戏，目前处于 Alpha 开发阶段 [![build badge](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/-/pipelines)
* [zipxing/rust_pixel](https://github.com/zipxing/rust_pixel) [[rust_pixel](https://crates.io/crates/rust_pixel)] - 2D 像素艺术游戏引擎与快速原型工具，支持文本和图形渲染模式。
* [Zone of Control](https://github.com/ozkriff/zoc) - 回合制六边形策略游戏

### 图形

* [dps/rust-raytracer](https://github.com/dps/rust-raytracer) - 基于 Peter Shirley 的 Ray Tracing in One Weekend 实现的极简光线追踪器。
* [flxzt/rnote](https://github.com/flxzt/rnote) - 绘制草图并记录手写笔记。
* [ivanceras/svgbob](https://github.com/ivanceras/svgbob) - 将 ASCII 图转换为 SVG 图形
* [KaminariOS/rustracer](https://github.com/KaminariOS/rustracer) - 基于 Vulkan 光线追踪的 PBR glTF 2.0 渲染器。
* [Limeth/euclider](https://github.com/Limeth/euclider) - 实时 4D CPU 光线追踪器
* [linebender/resvg](https://github.com/linebender/resvg) - SVG 渲染库。
* [monfa-red/lini](https://github.com/monfa-red/lini) [[lini](https://crates.io/crates/lini)] - 用于各种图形的小型语言——示意图、图表、序列图、原理图、技术图纸——将纯文本编译为可应用主题的 SVG [![CI](https://github.com/monfa-red/lini/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/monfa-red/lini/actions/workflows/ci.yml)
* [museslabs/phonto](https://github.com/museslabs/phonto) - 使用 Rust 编写、适用于 Wayland 和 macOS 的 GPU 加速视频壁纸程序。
* [rodrigorc/papercraft](https://github.com/rodrigorc/papercraft) - 展开 3D 模型，并用剪刀和胶水制作纸模型的工具。
* [rustq/vue-skia](https://github.com/rustq/vue-skia) - 基于 Skia 的 2D 图形 Vue 渲染库，使用 Rust 实现软件光栅化渲染。
* [storytold/artcraft](https://github.com/storytold/artcraft) - AI 驱动的 IDE 与可触式计算界面，像塑造黏土一样塑造场景、视频和图像。
* [turnage/valora](https://crates.io/crates/valora) - 生成式美术库
* [Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) - 光线追踪器
* [wahn/rs_pbrt](https://github.com/wahn/rs_pbrt) - PBRT 书籍（第三版）C++ 代码的对应实现。

### 图像处理

* [Darkly](https://github.com/darkly-art/darkly) - 面向数字艺术家与画家的熵式编辑器。
* [Graphite](https://github.com/GraphiteEditor/Graphite) - 矢量图形编辑器。
* [Imager](https://github.com/imager-io/imager) - 自动图像优化。
* [oxipng](https://github.com/oxipng/oxipng) [[oxipng](https://crates.io/crates/oxipng)] - 使用 Rust 编写的多线程 PNG 优化器。 [![Build Status](https://github.com/oxipng/oxipng/workflows/oxipng/badge.svg)](https://github.com/oxipng/oxipng/actions?query=branch%3Amaster) [![Version](https://img.shields.io/crates/v/oxipng.svg)](https://crates.io/crates/oxipng)
* [sorairolake/favico](https://github.com/sorairolake/favico) [[favico](https://crates.io/crates/favico)] - 创建网站图标的工具 [![CI](https://github.com/sorairolake/favico/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/favico/actions/workflows/CI.yaml)
* [Sprite Fusion Pixel Snapper](https://github.com/Hugo-Dz/spritefusion-pixel-snapper) - 清理 AI 生成像素艺术的 CLI 与 WebAssembly 工具，获得像素精确的精灵图（MIT）。
* [visioncortex/vtracer](https://github.com/visioncortex/vtracer) [[vtracer](https://crates.io/crates/vtracer)] - 将位图转换为矢量图的工具（jpg/png 转 svg）。

### 工业自动化

* [dora-rs/dora](https://github.com/dora-rs/dora) [[dora-cli](https://crates.io/crates/dora-cli)] - 用于构建机器人和多 AI 应用的快速、简单、面向数据流的框架，提供 Python、Rust 和 C/C++ API [![CI](https://github.com/dora-rs/dora/workflows/CI/badge.svg)](https://github.com/dora-rs/dora/actions)
* [locka99/opcua](https://github.com/locka99/opcua) - [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) 库。
* [slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) - 基于 [tokio](https://tokio.rs) 的 [modbus](https://www.modbus.org) 库。

### 消息队列

* [lonewolf-io/Narwhal](https://github.com/lonewolf-io/narwhal) - 用于边缘应用的可扩展发布/订阅消息服务器。
* [Rmqtt](https://github.com/rmqtt/rmqtt) - MQTT 服务器/MQTT Broker——面向 5G 时代物联网的可扩展分布式 MQTT 消息代理。
* [RobustMQ](https://github.com/robustmq/robustmq) - 下一代云原生融合消息队列。
* [Rocketmq-Rust](https://github.com/mxsm/rocketmq-rust) - 🚀使用 Rust 构建的 Apache RocketMQ🦀。更快、更安全、内存占用更低。

### 机器学习运维（MLOps）

* [api7/aisix](https://github.com/api7/aisix) - 面向 LLM 与 AI 代理的开源 AI 网关：在 OpenAI、Anthropic、Gemini、Bedrock、Azure OpenAI 及其他兼容 OpenAI 的端点前，提供统一的兼容 OpenAI API 与原生 Anthropic Messages API，以及 MCP 和 A2A 网关、语义路由、防护栏和语义缓存。 [![CI](https://github.com/api7/aisix/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/api7/aisix/actions/workflows/ci.yml)
* [cocoindex](https://github.com/cocoindex-io/cocoindex) - 为 AI 代理构建新鲜上下文的 ETL 框架，支持增量处理
* [TensorZero](https://github.com/tensorzero/tensorzero) - 面向 LLM 的数据与学习飞轮，统一推理、可观测性、优化和实验 ![TensorZero Build Status](https://img.shields.io/github/check-runs/tensorzero/tensorzero/main)
* [Uteke](https://github.com/codecoradev/uteke) - AI 代理的离线优先语义记忆引擎。单个二进制程序、零依赖、原生 MCP。 [![CI](https://img.shields.io/github/actions/workflow/status/codecoradev/uteke/ci.yml?branch=develop)](https://github.com/codecoradev/uteke/actions/workflows/ci.yml)

### 可观测性

* [avito-tech/bioyino](https://github.com/avito-tech/bioyino) - 高性能、可扩展、兼容 StatsD 的服务器。
* [esrlabs/chipmunk](https://github.com/esrlabs/chipmunk) - 分析海量日志文件和日志流的原生 egui 桌面应用，支持 WebAssembly 插件系统和汽车格式。 [![Chipmunk CI](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml/badge.svg)](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml)
* [madesroches/micromegas](https://github.com/madesroches/micromegas) [[micromegas](https://crates.io/crates/micromegas)] - 日志、指标与追踪的可观测性后端，提供低开销 Rust 插桩，将遥测数据以 Parquet 存储于对象存储，并通过 SQL 查询。 [![Rust](https://github.com/madesroches/micromegas/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/madesroches/micromegas/actions/workflows/rust.yml)
* [MegaAntiCheat/client-backend](https://github.com/MegaAntiCheat/client-backend) - [MAC](https://github.com/MegaAntiCheat) 客户端应用。
* [openobserve](https://github.com/openobserve/openobserve) - 易用性提升 10 倍、存储成本降低 140 倍、高性能、PB 级规模的 Elasticsearch/Splunk/Datadog 替代品。
* [OpenTelemetry](https://crates.io/crates/opentelemetry) - OpenTelemetry 提供统一的 API、库、代理和收集器服务，采集应用的分布式追踪与指标。可使用 Prometheus、Jaeger 等可观测性工具进行分析。 [![GitHub Actions CI](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml)
* [parseablehq/parseable](https://github.com/parseablehq/parseable) - AI 原生统一可观测性平台，用于收集并分析日志、指标、追踪和事件。
* [Quickwit-oss/quickwit](https://github.com/quickwit-oss/quickwit) - 云原生且成本效益极高的日志管理搜索引擎。 [![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI)
* [rustrak/rustrak](https://github.com/rustrak/rustrak) - 超轻量、兼容 Sentry SDK 的错误追踪服务器。
* [Scaphandre](https://github.com/hubblo-org/scaphandre) - 功耗监控代理，跟踪主机及各服务功耗，帮助设计更可持续的系统和应用。适配任意监控工具链（已支持 prometheus、warp10、riemann 等）。
* [vectordotdev/vector](https://github.com/vectordotdev/vector) - 高性能日志、指标与事件路由器。

### 操作系统

另见[使用 Rust 编写的操作系统对比](https://github.com/flosse/rust-os-comparison)。

* [0x59616e/SteinsOS](https://github.com/0x59616e/SteinsOS) - 面向 armv8-a 架构的操作系统。
* [Andy-Python-Programmer/aero](https://github.com/Andy-Python-Programmer/aero) - 遵循单体内核设计的现代类 Unix 操作系统。
* [asterinas/asterinas](https://github.com/asterinas/asterinas) - 安全、快速、通用的操作系统内核，提供兼容 Linux 的 ABI。
* [DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS) - 从零自研内核、兼容 Linux 的操作系统。
* [hexagonal-sun/moss-kernel](https://github.com/hexagonal-sun/moss-kernel) - 使用 Rust 和 Aarch64 汇编编写的类 Unix、兼容 Linux 的内核。
* [koibtw/highlightos](https://github.com/koibtw/highlightos) - 使用 Rust 与汇编编写的 x86_64 操作系统内核。
* [NON-OS/nonos-micro-kernel](https://github.com/NON-OS/nonos-micro-kernel) - 基于能力、驻留 RAM 的微内核；每个程序都是签名胶囊，必须先证明自身才能运行，驱动在用户空间运行。
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) - 通用的类 Unix 微内核操作系统，注重安全、稳定、性能、正确性、简单和务实，旨在完全替代 Linux 与 BSD。
* [thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) - 使用 Rust 编写的非 POSIX 操作系统内核
* [theseus-os/Theseus](https://github.com/theseus-os/Theseus) - 从零编写、采用安全语言、单地址空间与单权限级别的操作系统 - [![build badge](https://img.shields.io/github/workflow/status/theseus-os/Theseus/Documentation?label=docs%20build)](https://www.theseus-os.com/Theseus/book/index.html)
* [tock/tock](https://github.com/tock/tock) - 面向 Cortex-M 微控制器的安全嵌入式操作系统
* [vinc/moros](https://github.com/vinc/moros) - 面向 x86-64 架构和 BIOS 计算机的文本式业余操作系统。

### 包管理器

* [helsing-ai/buffrs](https://github.com/helsing-ai/buffrs) [[buffrs](https://crates.io/crates/buffrs)] - 面向 Protocol Buffers 和 gRPC 架构的现代包管理器。
* [pkgx](https://github.com/pkgxdev/pkgx) - 运行一切。可组合的包管理器，让脚本访问整个开源生态。
* [rebos](https://crates.io/crates/rebos) - 在任意 Linux 发行版上自动管理软件包的声明式方式 [![crate](https://img.shields.io/crates/v/rebos?logo=rust)](https://crates.io/crates/rebos)

### 支付

* [hyperswitch](https://github.com/juspay/hyperswitch) - 开源支付编排器，通过一次 API 集成连接多个支付处理商并轻松路由支付流量 ![GitHub last commit](https://img.shields.io/github/last-commit/juspay/hyperswitch?style=flat-square)

### 效率工具

* [0xdea/jiggy](https://github.com/0xdea/jiggy) [[jiggy](https://crates.io/crates/jiggy)] - 使用 Rust 编写的极简跨平台鼠标抖动器 [![build](https://github.com/0xdea/jiggy/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/jiggy/actions/workflows/build.yml)
* [aannoo/hcom](https://github.com/aannoo/hcom) - 让 AI 代理跨终端互发消息、观察和启动彼此（Claude Code、Gemini CLI、Codex、OpenCode）。Rust PTY 封装，提供屏幕跟踪、TUI（ratatui）、守护进程客户端二进制程序及 Python 钩子与 API [![CI](https://github.com/aannoo/hcom/actions/workflows/ci.yml/badge.svg)](https://github.com/aannoo/hcom/actions/workflows/ci.yml)
* [agent-of-empires](https://github.com/njbrake/agent-of-empires) - 使用 tmux、Git 工作树和 Docker 沙箱管理多个 AI 编程代理会话的 TUI/CLI [![CI](https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg)](https://github.com/njbrake/agent-of-empires/actions)
* [aichat](https://github.com/sigoden/aichat) - 一体化 LLM CLI 工具，提供 Shell 助手、聊天 REPL、RAG、AI 工具与代理，可访问 OpenAI、Claude、Gemini、Ollama、Groq 等。
* [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) - AI 编程代理的长期记忆：基于 Git 的 Markdown Wiki，支持自动生命周期捕获、跨代理交接和自托管 MCP 服务器。 [![CI](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml)
* [akitaonrails/ai-usagebar](https://github.com/akitaonrails/ai-usagebar) [[ai-usagebar](https://crates.io/crates/ai-usagebar)] - Waybar 组件、原生 Omarchy Quattro 面板和标签式 TUI，监控 Claude、Codex/ChatGPT、GitHub Copilot、Z.AI（GLM）、OpenRouter 等的 AI 套餐用量。 [![CI](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml)
* [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) [[llmfit](https://crates.io/crates/llmfit)] - 根据系统 RAM、CPU 和 GPU 合理选择 LLM 模型的终端工具。交互式 TUI 提供硬件检测、多维评分（质量/速度/适配/上下文）、社区排行榜，支持 Ollama、llama.cpp、MLX、vLLM 等。 [![CI](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml)
* [AlexsJones/llmserve](https://github.com/AlexsJones/llmserve) [[llmserve](https://crates.io/crates/llmserve)] - 为本地 LLM 模型提供服务的交互式 TUI，自动检测后端（llama-server、KoboldCpp、LocalAI、MLX、Ollama、vLLM、LM Studio）。支持源码树导航、各后端预设、实时日志和视觉模型。 [![CI](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml)
* [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) - 本地优先工作区，利用 Claude Code、Codex、OpenCode 或 Cursor 运行并行研究代理，提供可复现实验跟踪。 [![CI](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml/badge.svg)](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml)
* [antiburn/antiburn](https://github.com/antiburn/antiburn) - 本地桌面应用（Tauri），检查 AI 编程代理会话中常见的 token 浪费原因：会话过深、子代理过强、缓存失效，以及闲置 MCP 服务器、技能和工具。支持 Claude Code、Codex、Cursor、Copilot、Pi 等 [![CI](https://github.com/antiburn/antiburn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/antiburn/antiburn/actions/workflows/ci.yml)
* [ast-grep](https://github.com/ast-grep/ast-grep) - 代码结构搜索、检查和重写的 CLI 工具。
* [Bartib](https://github.com/nikolassv/bartib) [[Bartib](https://crates.io/crates/bartib)] - 简单的命令行时间追踪器 [![Tests](https://github.com/nikolassv/bartib/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/nikolassv/bartib/actions/workflows/test.yml)
* [Beetroot](https://github.com/mnardit/beetroot-releases) - Windows 剪贴板管理器，支持 AI 转换、OCR 和模糊搜索。
* [bitrouter/bitrouter](https://github.com/bitrouter/bitrouter) [[bitrouter](https://crates.io/crates/bitrouter)] - 代理原生 LLM 路由器，无需更改运行框架即可逐次优化代理，使每次模型调用可靠、可追踪、安全且经济。通过单一本地端点路由至 OpenAI、Anthropic、Google、OpenRouter、Bedrock、GitHub Copilot 等，提供 MCP 网关、ACP 集成、防护栏、可观测性和多账户故障切换。
* [CookCLI](https://github.com/cooklang/CookCLI) - 命令行食谱管理器，具备 Web 服务器、购物清单和餐食规划功能。
* [espanso](https://github.com/espanso/espanso) - 跨平台文本扩展器。 [![CI](https://github.com/espanso/espanso/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/espanso/espanso/actions/workflows/ci.yml)
* [eureka](https://crates.io/crates/eureka) - 无需离开终端即可输入和存储想法的 CLI 工具
* [farion1231/cc-switch](https://github.com/farion1231/cc-switch) - Claude Code、Codex 和 Gemini CLI 的一体化 GUI 助手与配置管理器。
* [fkiene/llmtrim](https://github.com/fkiene/llmtrim) [[llmtrim](https://crates.io/crates/llmtrim)] - 压缩 LLM API 请求的本地代理，不改变答案即可减少输入和输出 token。通过 HTTPS_PROXY 位于 AI 工具与提供商之间，适用于 Claude Code、Codex 等。 [![CI](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml/badge.svg)](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml)
* [flusterIO/fluster](https://github.com/flusterIO/fluster) - 面向 STEM 学生与专业人士的一体化笔记应用。 [![publish](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml/badge.svg)](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml)
* [fulsomenko/kanban](https://github.com/fulsomenko/kanban) [[kanban-tui](https://crates.io/crates/kanban-tui)] - 受 lazygit 启发的终端项目管理工具 [![CI](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml/badge.svg)](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml)
* [Furtherance](https://github.com/unobserved-io/Furtherance) - 使用 GTK4 构建的时间追踪应用
* [futuregene/future-os](https://github.com/futuregene/future-os) - 一个 AI 代理，无处不在：单个 Rust gRPC 后端驱动终端界面、桌面应用、移动应用、CLI 和即时通信机器人，共享会话、记忆和技能。提供信任优先且需批准的工具、3,800 多种模型，以及支持运行超过 24 小时的循环控制平面。 [![build](https://github.com/futuregene/future-os/actions/workflows/ci.yml/badge.svg)](https://github.com/futuregene/future-os/actions/workflows/ci.yml)
* [graves/awful_aj](https://github.com/graves/awful_aj) [[awful_aj](https://crates.io/crates/awful_aj)] - 操作兼容 OpenAI API 的 CLI，提供提示工程 YAML 模板和持久记忆用内置向量数据库。
* [graykode/abtop](https://github.com/graykode/abtop) [[abtop](https://crates.io/crates/abtop)] - 监控 AI 编程代理会话（Claude Code、Codex CLI、OpenCode）的终端 TUI，跟踪 token 用量、上下文窗口百分比、速率限制、子进程和孤立端口。支持 tmux 集成、包括色盲友好选项的 12 种主题及跨平台运行。 [![CI](https://github.com/graykode/abtop/actions/workflows/ci.yml/badge.svg)](https://github.com/graykode/abtop/actions/workflows/ci.yml)
* [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) [[deepseek-tui-cli](https://crates.io/crates/deepseek-tui-cli)] - DeepSeek V4 终端编程代理，提供流式推理块、本地工作区编辑、自动模型选择、MCP 支持和基于 ratatui 的 TUI。 [![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
* [iBz-04/gloamy](https://github.com/iBz-04/gloamy) [[gloamy](https://crates.io/crates/gloamy)] - Rust 优先的自主代理运行时，用于 CLI、通道、网关和硬件工作流。
* [illacloud/illa](https://github.com/illacloud/illa) - 低代码内部工具构建器。
* [iwe-org/iwe](https://github.com/iwe-org/iwe) [[iwe](https://crates.io/crates/iwe)] - 基于 Markdown 的知识管理工具，提供 LSP 服务器和 CLI [![Build Status](https://github.com/iwe-org/iwe/actions/workflows/rust.yml/badge.svg)](https://github.com/iwe-org/iwe/actions/workflows/rust.yml)
* [jchultarsky/mirador](https://github.com/jchultarsky/mirador) [[mirador](https://crates.io/crates/mirador)] - 安静的终端个人仪表板：在可配置网格中显示时钟、日历与日程、天气、任务、笔记、市场和实时系统指标 [![CI](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml)
* [kruseio/hygg](https://github.com/kruseio/hygg) [[hygg](https://crates.io/crates/hygg)] - 📚简化阅读方式。极简、类似 Vim 的 TUI 文档阅读器。
* [LLDAP](https://github.com/lldap/lldap) - 简化的 LDAP 身份验证接口。
* [lockbook/lockbook](https://github.com/lockbook/lockbook) [[lb-rs](https://crates.io/crates/lb-rs)] - 协作式端到端加密笔记、文档和绘图，共享 Rust 核心的原生跨平台客户端和可自托管服务器。 [![Integration](https://github.com/lockbook/lockbook/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/lockbook/lockbook/actions/workflows/integration.yml)
* [mag123c/toktrack](https://github.com/mag123c/toktrack) - 快速 TUI/CLI，跟踪各 AI 编程 CLI（Claude Code、Codex、Gemini CLI 等）的 token 用量与费用，持久缓存不受 CLI 数据删除影响。 [![CI](https://github.com/mag123c/toktrack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mag123c/toktrack/actions/workflows/ci.yml)
* [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [[worktrunk](https://crates.io/crates/worktrunk)] - 为并行运行 AI 代理设计的 Git 工作树管理 CLI，支持钩子、LLM 提交消息和合并工作流 [![CI](https://img.shields.io/github/actions/workflow/status/max-sixty/worktrunk/ci.yaml?branch=main&logo=github)](https://github.com/max-sixty/worktrunk/actions?query=branch%3Amain+workflow%3Aci)
* [morganlinton/Albatross](https://github.com/morganlinton/Albatross) [[albatross-cli](https://crates.io/crates/albatross-cli)] - 终端优先 AI 编程代理，透明地在本地（Ollama、LM Studio、MLX、llama.cpp）与云后端之间进行多模型路由，提供逐轮费用、真正的撤销和可审计路由凭据。 [![CI](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml/badge.svg)](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml)
* [muvon/octomind](https://github.com/muvon/octomind) - 开源代理运行时 CLI，提供 48 个以上专用代理、支持动态服务器注册的 MCP 主机、多提供商支持（13 种以上 LLM），以及适合 4 小时以上会话的自适应上下文压缩。
* [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) - 为 AI 编程代理设计的终端多路复用器。在一个终端运行多个代理，提供真实终端视图、代理状态检测（受阻/工作中/完成）、工作区、标签页和持久会话。单个 Rust 二进制程序，支持分离/重新附加。
* [pier-cli/pier](https://github.com/pier-cli/pier) - 集中管理（添加、搜索元数据等）所有单行命令、脚本、工具和 CLI 的仓库
* [raine/workmux](https://github.com/raine/workmux) [[workmux](https://crates.io/crates/workmux)] - Git 工作树 + tmux 窗口，实现无摩擦并行开发 [![CI](https://github.com/raine/workmux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/raine/workmux/actions/workflows/ci.yml)
* [rtk-ai/rtk](https://github.com/rtk-ai/rtk) - 高性能 CLI 代理，为 AI 编程助手减少 60–90% 的 LLM token 消耗，过滤并压缩 Claude Code、Copilot、Cursor、Gemini CLI、Codex 等的命令输出。 [![CI](https://github.com/rtk-ai/rtk/workflows/Security%20Check/badge.svg)](https://github.com/rtk-ai/rtk/actions)
* [screenpipe](https://github.com/screenpipe/screenpipe) - 全天候本地 AI 屏幕与麦克风录制。构建拥有完整上下文的 AI 应用。适用于 Ollama。
* [ShadoySV/work-break](https://github.com/ShadoySV/work-break) [[work-break](https://crates.io/crates/work-break)] - 根据当前及当天负荷平衡工作与休息时间 [![Build](https://github.com/ShadoySV/work-break/actions/workflows/release.yml/badge.svg)](https://github.com/ShadoySV/work-break/actions/workflows/release.yml)
* [socai-io/socai](https://github.com/socai-io/socai) - 社交研究代理，复用已登录的 Chrome，在 Instagram、TikTok、LinkedIn、X、小红书和抖音搜索、阅读帖子、评论、个人资料及支持的媒体。
* [tambourine-voice](https://github.com/kstonekuan/tambourine-voice) - 面向任意应用的个人 AI 语音界面——可定制听写，允许自选模型和提示词，使用 Rust 构建。
* [tassiovirginio/try-rs](https://github.com/tassiovirginio/try-rs) [[try-rs](https://crates.io/crates/try-rs)] - 工作区管理 CLI，通过 TUI 组织和浏览临时实验。
* [thClaws/thClaws](https://github.com/thClaws/thClaws) - 原生 Rust AI 代理工作区，支持多提供商 LLM、技能系统、MCP 服务器、知识库和代理编排，提供桌面 GUI、CLI REPL 和非交互模式。 [![License](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-blue.svg)](https://github.com/thClaws/thClaws)
* [tinyhumansai/opencompany](https://github.com/tinyhumansai/opencompany) - 将 AI 代理组织成实际运作公司的开源运行时：共享工作板、代理间交接、人工批准、定时及 DAG 工作流。使用自带任意模型，通过 Docker 自托管。 [![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/tinyhumansai/opencompany)
* [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) - 开源代理助手，具备桌面界面、118 个以上 OAuth 集成、本地优先记忆树、兼容 Obsidian 的 Wiki、原生语音和 TokenJuice 压缩。使用 Tauri 与 Rust 构建，提供注重隐私的个人 AI。
* [tover0314-w/opentypeless](https://github.com/tover0314-w/opentypeless) - 使用 Tauri 和 Rust 构建的跨平台 AI 语音输入应用。
* [Tuxedo](https://github.com/webstonehq/tuxedo) - todo.txt 的快速键盘驱动终端界面。
* [tw93/Pake](https://github.com/tw93/Pake) - 使用 Rust 和 Tauri，通过一条命令将任意网页变成桌面应用。轻量、快速，支持 macOS、Windows 和 Linux。
* [VisiGrid/VisiGrid](https://github.com/VisiGrid/VisiGrid) - 像代码编辑器一样构建的原生电子表格，使用 GPUI、WASM 和无界面 CLI 引擎。
* [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) - 轻量桌面应用，跨 15 种以上编程工具（Cursor、Claude Code、Codex、Copilot 等）管理、同步和组织 AI 代理技能，采用 Tauri 2、Rust 后端，支持 Git 备份。
* [Xoshbin/asyar](https://github.com/Xoshbin/asyar) - Raycast 的能力，Alfred 的速度，隐私融入设计。 [![CodeQL](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql)
* [yashs662/rust_kanban](https://github.com/yashs662/rust_kanban) [[rust-kanban](https://crates.io/crates/rust-kanban)] [![Build](https://github.com/yashs662/rust_kanban/actions/workflows/build.yml/badge.svg)](https://github.com/yashs662/rust_kanban/releases) - 终端看板应用
* [yicheng47/runner](https://github.com/yicheng47/runner) - macOS 和 Windows 的原生 GPUI 桌面应用，让 Claude Code、Codex、Copilot CLI、pi 等 CLI 编程代理组成团队共同处理任务，每个代理在真实终端中保留自己的 TUI。 [![CI](https://github.com/yicheng47/runner/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yicheng47/runner/actions/workflows/ci.yaml)
* [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) - 隐私优先的 AI 会议助手，完全在本机录制、转写和总结会议。支持 Whisper/Parakeet 模型实时转写、AI 摘要和多个 AI 提供商（Ollama、Claude、Groq、OpenAI）

### 路由协议

* [Holo](https://github.com/holo-routing/holo) - Holo 是面向大规模、自动化驱动网络的路由协议套件
* [RustyBGP](https://github.com/osrg/rustybgp) - BGP

### 安全工具

* [0xdea/augur](https://github.com/0xdea/augur) [[augur](https://crates.io/crates/augur)] - 逆向工程助手，从二进制文件提取字符串及相关伪代码 [![build](https://github.com/0xdea/augur/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/augur/actions/workflows/build.yml)
* [0xdea/haruspex](https://github.com/0xdea/haruspex) [[haruspex](https://crates.io/crates/haruspex)] - 漏洞研究助手，从 IDA Hex-Rays 反编译器提取伪代码 [![build](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
* [0xdea/oneiromancer](https://github.com/0xdea/oneiromancer) [[oneiromancer](https://crates.io/crates/oneiromancer)] - 利用本地运行的 LLM 辅助源码分析的逆向工程助手 [![build](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml)
* [0xdea/rhabdomancer](https://github.com/0xdea/rhabdomancer) [[rhabdomancer](https://crates.io/crates/rhabdomancer)] - 漏洞研究助手，定位二进制文件中所有可能不安全的 API 函数调用 [![build](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml)
* [AdGuardian-Term](https://github.com/Lissy93/AdGuardian-Term) [[adguardian](https://crates.io/crates/adguardian)] - 在终端中实时监控 AdGuard Home 实例流量并统计
* [AFLplusplus/LibAFL](https://github.com/AFLplusplus/LibAFL) - 高级模糊测试库——用 Rust 组合你的模糊测试器！可跨核心与机器扩展，适用于 Windows、Android、macOS、Linux、no_std 等。 [![build and test](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml)
* [arp-scan-rs](https://github.com/kongbytes/arp-scan-rs) - 用于快速本地网络扫描的极简 ARP 扫描工具
* [biandratti/huginn-net](https://github.com/biandratti/huginn-net) - 多协议被动网络指纹识别，结合 p0f TCP 与 JA4 TLS 分析检测操作系统和应用 [![CI](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml/badge.svg)](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml)
* [bountyyfi/lonkero](https://github.com/bountyyfi/lonkero) - 企业级 Web 漏洞扫描器，提供 60 个以上攻击模块，用于渗透测试和安全评估
* [cargo-audit](https://crates.io/crates/cargo-audit) - 审计 Cargo.lock 中存在安全漏洞的 crate
* [cargo-auditable](https://crates.io/crates/cargo-auditable) - 使生产 Rust 二进制程序可审计
* [cargo-crev](https://crates.io/crates/cargo-crev) - cargo 包管理器的密码学可验证代码审查系统。
* [cargo-deny](https://crates.io/crates/cargo-deny) - 帮助管理大型依赖图的 Cargo 插件
* [Cherrybomb](https://github.com/blst-security/cherrybomb) - 告别不完整的 API 规范：CLI 工具验证 API 规范，避免未定义的用户行为。
* [cotp](https://github.com/replydev/cotp) - 可信、加密的命令行 TOTP/HOTP 身份验证应用，支持导入。
* [domcyrus/rustnet](https://github.com/domcyrus/rustnet) - 跨平台网络监控 TUI，通过 eBPF/PKTAP 识别进程并进行深度数据包检查 [![build badge](https://img.shields.io/github/actions/workflow/status/domcyrus/rustnet/rust.yml?logo=github)](https://github.com/domcyrus/rustnet/actions/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/rustnet-monitor?logo=rust)](https://crates.io/crates/rustnet-monitor)
* [EFForg/rayhunter](https://github.com/EFForg/rayhunter) - 面向移动热点硬件的 IMSI 捕获器检测工具，帮助识别潜在的蜂窝监控（Stingray/伪基站） [![Tests](https://github.com/EFForg/rayhunter/actions/workflows/main.yml/badge.svg)](https://github.com/EFForg/rayhunter/actions/workflows/main.yml)
* [entropic-security/xgadget](https://github.com/entropic-security/xgadget) [[xgadget](https://crates.io/crates/xgadget)] - 快速、并行、跨变体 ROP/JOP 指令片段搜索 [![GitHub Actions](https://github.com/entropic-security/xgadget/workflows/test/badge.svg)](https://github.com/entropic-security/xgadget/actions)
* [epi052/feroxbuster](https://github.com/epi052/feroxbuster) - 简单快速的递归内容发现工具。
* [getprovenant/provenant](https://github.com/getprovenant/provenant) [[provenant-cli](https://crates.io/crates/provenant-cli)] - 快速许可证、版权、软件包和 SBOM 扫描器，输出 CycloneDX 和 SPDX 及完整封闭的依赖清单；静态且离线。 [![CI](https://github.com/getprovenant/provenant/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/getprovenant/provenant/actions/workflows/check.yml)
* [Inspektor](https://github.com/inspektor-dev/inspektor) - 感知数据库协议、用于强制执行访问策略的代理 👮
* [kpcyrd/authoscope](https://github.com/kpcyrd/authoscope) - 可脚本化的网络身份验证破解工具
* [kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) - TCP 连接劫持器，重写自 shijack
* [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) - 半自动 OSINT 框架与包管理器
* [kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) - 安全的多线程数据包嗅探器
* [LeChatP/RootAsRole](https://github.com/LeChatP/RootAsRole) - sudo(-rs)/su 的更好替代品 • ⚡极快 • 🛡️内存安全 • 🔐注重安全 ![Build](https://img.shields.io/github/actions/workflow/status/LeChatP/RootAsRole/build.yml?logo=githubactions&label=Build&logoColor=white) ![Coverage](https://img.shields.io/codecov/c/github/lechatp/rootasrole?color=green&link=https%3A%2F%2Fapp.codecov.io%2Fgh%2FLeChatP%2FRootAsRole&label=Test%20Coverage) ![crates.io](https://img.shields.io/crates/v/rootasrole.svg?label=Version&color=e37602&logo=rust)
* [microsoft/mxc](https://github.com/microsoft/mxc) - 在 Windows、Linux 和 macOS 运行不可信代码（模型输出、插件、工具）的沙箱执行系统。支持多个隔离后端（ProcessContainer、Windows Sandbox、LXC、Bubblewrap、Seatbelt、MicroVM、Hyperlight、IsolationSession、WSLC）、基于 JSON 策略的沙箱及 TypeScript SDK。 [![CI](https://github.com/microsoft/mxc/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/mxc/actions)
* [mongodb/kingfisher](https://github.com/mongodb/kingfisher) - 极快的密钥检测与实时验证工具，覆盖文件、Git 仓库、S3、Jira 和 Confluence
* [mullvad/mullvadvpn-app](https://github.com/mullvad/mullvadvpn-app) - Mullvad VPN 服务的跨平台 VPN 客户端，支持 WireGuard、抗量子隧道及注重隐私的功能。 [![CI](https://github.com/mullvad/mullvadvpn-app/actions/workflows/verify.yml/badge.svg)](https://github.com/mullvad/mullvadvpn-app/actions)
* [observer_ward](https://github.com/emo-crab/observer_ward) - Web 应用与服务指纹识别工具
* [Raspirus](https://github.com/Raspirus/Raspirus) - 对用户和资源友好的基于规则恶意软件扫描器 [![status](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml/badge.svg)](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml)
* [reaction](https://framagit.org/ppom/reaction) - 扫描日志并采取行动：fail2ban 的替代品
* [ripasso](https://github.com/cortex/ripasso/) - 密码管理器，文件系统兼容 pass
* [rustscan](https://github.com/bee-san/RustScan) - 通过此端口扫描工具加速 Nmap [![build badge](https://github.com/bee-san/RustScan/actions/workflows/test.yml/badge.svg)](https://github.com/bee-san/RustScan/actions)
* [santhreal/keyhog](https://github.com/santhreal/keyhog) [[keyhog](https://crates.io/crates/keyhog)] - 在源码树、Git 历史、归档和远程来源中检测泄漏凭据与 API 密钥，并实时验证发现的密钥 [![CI](https://github.com/santhreal/keyhog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/santhreal/keyhog/actions/workflows/ci.yml)
* [secluso](https://github.com/secluso/core) - 使用端到端加密的私密 Raspberry Pi 家庭安防摄像头
* [sherlock](https://github.com/jonaylor89/sherlock-rs) [[sherlock](https://crates.io/crates/sherlock)] - 按用户名跨社交网络查找社交媒体账户 [![status](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml)
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) - 使用 SSH 密钥加密和解密的简单密钥管理工具。
* [timescale/rsigma](https://github.com/timescale/rsigma) [[rsigma](https://crates.io/crates/rsigma)] - Sigma 检测标准的完整检测工程工具包，包含解析器、求值引擎、规则转换、流式运行时、检查器、CLI、MCP 和 LSP [![CI](https://github.com/timescale/rsigma/actions/workflows/ci.yml/badge.svg)](https://github.com/timescale/rsigma/actions/workflows/ci.yml)

### 社交网络

* Discord
  * [concord](https://github.com/chojs23/concord) - 功能丰富的 Discord TUI 客户端。
  * [Dorion](https://github.com/SpikeHD/Dorion) - 小巧的 Discord 替代客户端，占用更少、启动更快，支持主题、插件等！ ![build](https://img.shields.io/github/actions/workflow/status/SpikeHD/Dorion/build.yml)
* Mastodon
  * [Rustodon](https://github.com/rustodon/rustodon) - 兼容 Mastodon、使用 ActivityPub 的服务器。
* Telegram
  * [tgt](https://github.com/FedericoBruzzone/tgt) - 跨平台 Telegram TUI [![ci-linux](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml) [![ci-macos](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml) [![ci-windows](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml)
* WhatsApp
  * [imtaqin/waxum](https://github.com/imtaqin/waxum) - 自托管 WhatsApp 网关，单个静态二进制程序提供 REST API、Webhook、多会话支持和语音通话。 [![CI](https://github.com/imtaqin/waxum/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/imtaqin/waxum/actions/workflows/ci.yml)

### 系统工具

* [adileo/squirreldisk](https://github.com/adileo/squirreldisk) - macOS、Windows 和 Linux 的磁盘用量分析 GUI（egui），提供旭日图和树状图，还可通过 rclone 扫描 SSH 服务器与云存储 [![CI](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) - 更快的 `cd` 替代品，可学习你的习惯 [![release](https://github.com/ajeetdsouza/zoxide/actions/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [anylinuxfs](https://github.com/nohajc/anylinuxfs) - 在 Mac 挂载 Linux 支持的任意文件系统的 CLI 工具，使用 NFS 与微型虚拟机
* [anylinuxfs-gui](https://github.com/fenio/anylinuxfs-gui) - anylinuxfs 的 GUI 应用
* [ataraxy-labs/sem](https://github.com/ataraxy-labs/sem) - 实体级语义版本控制 CLI，通过 tree-sitter 在 32 种语言中提供函数/类级差异、追责、图和影响分析。 [![Release](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml)
* [ataraxy-labs/weave](https://github.com/ataraxy-labs/weave) - Git 实体级合并驱动，通过 tree-sitter 理解代码结构以解决冲突，通过 .gitattributes 作为自定义合并驱动接入 Git。 [![Release](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml)
* [atuin](https://github.com/atuinsh/atuin) [[atuin](https://crates.io/crates/atuin)] - Atuin 用 SQLite 数据库替代现有 Shell 历史，并记录命令的额外上下文；还可通过 Atuin 服务器在机器间选择性地进行完全加密的历史同步。
* [bandwhich](https://github.com/imsnif/bandwhich) - 终端带宽使用工具
* [bolivian-peru/os-moda](https://github.com/bolivian-peru/os-moda) - NixOS 发行版，AI 代理通过 91 个类型化 MCP 工具拥有 root 权限。9 个 Rust 守护进程（系统桥、自动回滚的原子 SafeSwitch 部署、哈希链审计账本、AES-256-GCM 加密钱包、Noise_XX + ML-KEM-768 P2P 网状网络、本地 STT/TTS、MCP 服务器生命周期、系统学习、域名白名单出口代理）通过 Unix 套接字通信。
* [bottom](https://github.com/ClementTsang/bottom) - 又一个跨平台图形进程/系统监视器。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ClementTsang/bottom/ci/master)](https://github.com/ClementTsang/bottom/actions?query=branch%3Amaster)
* [brocode/fblog](https://github.com/brocode/fblog) - 小型命令行 JSON 日志查看器
* [brush-shell](https://github.com/reubeno/brush) - 兼容 Bash/POSIX 的 Shell [![CICD](https://github.com/reubeno/brush/actions/workflows/ci.yaml/badge.svg)](https://github.com/reubeno/brush/actions/workflows/ci.yaml)[![Crate](https://img.shields.io/crates/v/brush-shell.svg?logo=rust)](https://crates.io/crates/brush-shell)
* [bustd](https://github.com/vrmiguel/bustd) - 处理 Linux 内存不足情况的轻量进程终止守护程序。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vrmiguel/bustd/build-and-test)](https://github.com/vrmiguel/bustd/actions?query=branch%3Amaster)
* [buster/rrun](https://github.com/buster/rrun) - Linux 命令启动器，类似 gmrun
* [cantino/mcfly](https://github.com/cantino/mcfly) - 飞速穿梭于 Shell 历史。天哪！
* [ChurchTao/clipboard-rs](https://github.com/ChurchTao/clipboard-rs) [[clipboard-rs](https://crates.io/crates/clipboard-rs)] - 使用 Rust 编写的跨平台库，用于获取、设置和监控系统剪贴板内容变化。
* [Cocoa-Way](https://github.com/J-x-Z/cocoa-way) [[homebrew](https://github.com/J-x-Z/homebrew-tap)] - 原生 macOS Wayland 合成器，无虚拟机开销即可运行 Linux GUI 应用，基于 Smithay 构建。 [![build badge](https://github.com/J-x-Z/cocoa-way/actions/workflows/release.yml/badge.svg)](https://github.com/J-x-Z/cocoa-way/actions)
* [crabz](https://github.com/sstadick/crabz) - 多线程压缩与解压 CLI 工具 [![Build Status](https://github.com/sstadick/crabz/workflows/Check/badge.svg)](https://github.com/sstadick/crabz/actions?query=workflow%3ACheck)
* [cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) - 受 [entr](http://eradman.com/entrproject/) 启发的可配置文件系统监视器
* [dalance/procs](https://github.com/dalance/procs) - 现代的“ps”替代品 [![Regression](https://github.com/dalance/procs/actions/workflows/regression.yml/badge.svg)](https://github.com/dalance/procs/actions/workflows/regression.yml)
* [ddh](https://github.com/darakian/ddh) - 快速重复文件查找器
* [deshaw/procfd](https://github.com/deshaw/procfd) [[procfd](https://crates.io/crates/procfd)] - Linux lsof 替代品，列出进程打开的文件描述符
* [diskonaut](https://github.com/imsnif/diskonaut) - 终端可视化磁盘空间导航器
* [dust](https://github.com/bootandy/dust) - 更直观的 du
* [erickochen/purple](https://github.com/erickochen/purple) [[purple-ssh](https://crates.io/crates/purple-ssh)] - 由 Ratatui 驱动的 SSH 客户端，支持云同步、容器管理、文件传输、隧道、代码片段和密码管理 [![CI](https://github.com/erickochen/purple/actions/workflows/ci.yml/badge.svg)](https://github.com/erickochen/purple/actions/workflows/ci.yml)
* [eza-community/eza](https://github.com/eza-community/eza) - “ls”的替代品
* [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) - 用户友好的命令行 Shell
* [fork](https://github.com/immortal/fork) - 创建脱离控制终端的新进程（守护进程）的库
* [fselect](https://crates.io/crates/fselect) - 通过类似 SQL 的查询查找文件
* [git-ai-project/git-ai](https://github.com/git-ai-project/git-ai) - 跟踪仓库中 AI 生成代码的 Git 扩展，将代码行关联到代理、模型和对话记录。
* [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) - 现代的基于 Git 的版本控制界面，为 AI 工作流从零构建，提供 GUI 与 CLI。
* [gitui](https://github.com/gitui-org/gitui) - 极快的 Git 终端客户端。 [![build](https://github.com/gitui-org/gitui/actions/workflows/ci.yml/badge.svg)](https://github.com/gitui-org/gitui/actions)
* [GQL](https://github.com/amrdeveloper/gql) - 在 .git 文件上运行的类 SQL 查询语言。
* [harry0703/MangoDisk](https://github.com/harry0703/MangoDisk) - 跨平台磁盘清理与空间分析应用，支持深度清理、树状图可视化、重复检测、应用卸载及开发产物清理。 [![Cross-platform Check](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml/badge.svg)](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml)
* [httm](https://github.com/kimono-koans/httm) - 适用于 ZFS/btrfs/nilfs2 的交互式文件级 Time Machine 风格工具（甚至支持真实 Time Machine 备份！）
* [hyperb1iss/unifly](https://github.com/hyperb1iss/unifly) [[unifly](https://crates.io/crates/unifly)] - 管理 Ubiquiti UniFi 网络控制器的 CLI 与 TUI，覆盖双 API，提供 10 屏 Ratatui 仪表板 [![CI](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml/badge.svg)](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml)
* [j0ru/kickoff](https://github.com/j0ru/kickoff) - 快速灵敏的 Wayland 程序启动器 [![build](https://github.com/j0ru/kickoff/actions/workflows/ci.yml/badge.svg)](https://github.com/j0ru/kickoff/actions)
* [jacek-kurlit/pik](https://github.com/jacek-kurlit/pik) [[pik](https://crates.io/crates/pik)] - 帮助查找并终止进程的 TUI 命令行工具
* [Kondo](https://github.com/tbillington/kondo) - 删除软件项目产物、回收磁盘空间的 CLI 与 GUI 工具
* [LACT](https://github.com/ilya-zlobintsev/LACT) - Linux AMDGPU 控制器
* [lodosgroup/lpm](https://github.com/lodosgroup/lpm) - 实验性系统包管理器
* [lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] - 支持模式匹配的 xargs + awk
* [lsd](https://github.com/lsd-rs/lsd) - 拥有丰富漂亮颜色与精美图标的 ls [![build](https://github.com/lsd-rs/lsd/actions/workflows/CICD.yml/badge.svg)](https://github.com/lsd-rs/lsd/actions)
* [Luminarys/synapse](https://github.com/Luminarys/synapse) - 灵活快速的 BitTorrent 守护进程。
* [m4b/bingrep](https://github.com/m4b/bingrep) - 搜索多种操作系统与架构的二进制文件，并着色显示。
* [macpow](https://github.com/k06a/macpow) - Apple Silicon Mac（M1–M5+）实时功耗监控 TUI，读取 IOReport、SMC 和 IORegistry，无需 sudo。 [![CI](https://github.com/k06a/macpow/actions/workflows/ci.yml/badge.svg)](https://github.com/k06a/macpow/actions/workflows/ci.yml)[![crates.io](https://img.shields.io/crates/v/macpow.svg?logo=rust)](https://crates.io/crates/macpow)
* [Mapika/portview](https://github.com/Mapika/portview) [[portview](https://crates.io/crates/portview)] - 查看端口对应的进程，诊断冲突、通配符暴露与连接泄漏，兼作 MCP 服务器。 [![CI](https://github.com/Mapika/portview/actions/workflows/ci.yml/badge.svg)](https://github.com/Mapika/portview/actions)
* [matheus-git/systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) [[systemd-manager-tui](https://crates.io/crates/systemd-manager-tui)] - 通过 TUI（终端用户界面）管理 systemd 服务的程序。
* [matthart1983/diskwatch](https://github.com/matthart1983/diskwatch) - 单主机磁盘诊断 TUI：八个标签页覆盖设备、卷、文件系统、IO、SMART、热点文件和洞察。
* [matthart1983/netwatch](https://github.com/matthart1983/netwatch) [[netwatch-tui](https://crates.io/crates/netwatch-tui)] - 实时网络诊断 TUI：深度检查 13 种协议（TLS、QUIC、HTTP、DNS、SSH、MQTT、SNMP 等），通过 eBPF / PKTAP 按进程归因，提供 TCP 重传分析、JA4 指纹、可选 Landlock 沙箱和 Flight Recorder 事件包。
* [matthart1983/syswatch](https://github.com/matthart1983/syswatch) [[syswatch](https://crates.io/crates/syswatch)] - 单主机系统诊断 TUI：十二个标签页覆盖 CPU、内存、磁盘、进程、GPU、电源、服务和网络，另有时间线浏览器与 Insights 异常引擎。
* [mdgaziur/findex](https://github.com/mdgaziur/findex) - Findex 是使用 GTK3 的高度可定制应用查找器
* [mitnk/cicada](https://github.com/mitnk/cicada) - 类似 Bash 的 Unix Shell
* [mmstick/concurr](https://github.com/mmstick/concurr) - 采用客户端/服务器架构的 GNU Parallel 替代品
* [mmstick/fontfinder](https://github.com/mmstick/fontfinder) - 用于预览和安装 Google 字体的 GTK3 应用
* [mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) - 电视剧重命名应用，提供可选 GTK3 前端。
* [mxseev/logram](https://github.com/mxseev/logram) - 将日志文件更新推送到 Telegram
* [netscanner](https://github.com/Chleba/netscanner) - TUI 网络扫描器
* [nickgerace/gfold](https://github.com/nickgerace/gfold) [[gfold](https://crates.io/crates/gfold)] - 帮助跟踪多个 Git 仓库的 CLI 工具 [![build](https://img.shields.io/github/workflow/status/nickgerace/gfold/merge/main)](https://github.com/nickgerace/gfold/actions?query=workflow%3Amerge+branch%3Amain)
* [nivekuil/rip](https://github.com/nivekuil/rip) - 安全易用的 `rm` 替代品
* [nushell/nushell](https://github.com/nushell/nushell) - 新型 Shell
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) - Terraform MCP 工具——供 AI 助手通过 Model Context Protocol 管理 Terraform 环境的 CLI。
* [nwiizo/tfocus](https://github.com/nwiizo/tfocus) - 交互选择并执行 Terraform plan/apply 操作的工具
* [orhun/kmon](https://github.com/orhun/kmon) - Linux 内核管理器与活动监视器 ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/actions/workflow/status/orhun/kmon/ci.yml?branch=master&label=build)
* [orhun/systeroid](https://github.com/orhun/systeroid) - 更强大的 sysctl(8) 替代品，提供终端用户界面 ![https://github.com/orhun/systeroid/actions](https://img.shields.io/github/actions/workflow/status/orhun/systeroid/ci.yml?branch=main&label=build)
* [ouch](https://github.com/ouch-org/ouch) - 轻松进行命令行压缩与解压 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ouch-org/ouch/build-and-test)](https://github.com/ouch-org/ouch/actions?query=branch%3Amaster)
* [pkolaczk/fclones](https://github.com/pkolaczk/fclones) - 高效重复文件查找与删除工具
* [pop-os/popsicle](https://github.com/pop-os/popsicle) - 并行刷写多个 USB 设备的 GTK3 与 CLI 工具
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) - Linux 电源管理守护进程（DBus 接口），附带 CLI 工具。
* [pueue](https://github.com/nukesor/pueue) - 管理长时间运行的 Shell 命令。 [![GitHub Actions Workflow](https://github.com/Nukesor/pueue/actions/workflows/test.yml/badge.svg)](https://github.com/nukesor/pueue/actions)
* [qarmin/czkawka](https://github.com/qarmin/czkawka) - 查找重复项、空文件夹、相似图像等的多功能应用。 [![GitHub Actions Workflow](https://github.com/qarmin/czkawka/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/qarmin/czkawka/actions)
* [redox-os/ion](https://github.com/redox-os/ion) - 下一代系统 Shell
* [sharkdp/bat](https://github.com/sharkdp/bat) - 如虎添翼的 cat(1) 克隆。 [![CICD](https://github.com/sharkdp/bat/actions/workflows/CICD.yml/badge.svg?branch=master)](https://github.com/sharkdp/bat/actions/workflows/CICD.yml)
* [sharkdp/fd](https://github.com/sharkdp/fd) - 简单、快速且用户友好的 find 替代品。 [![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml)
* [sharkdp/hexyl](https://github.com/sharkdp/hexyl) [[hexyl](https://crates.io/crates/hexyl)] - 命令行十六进制查看器，用不同颜色显示不同字节类别 [![CICD](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml)
* [sitkevij/hex](https://github.com/sitkevij/hex) - 彩色十六进制转储终端工具。
* [Skardyy/mcat](https://github.com/Skardyy/mcat) [[mcat](https://crates.io/crates/mcat)] - 在终端中查看图像、视频、Markdown 和其他文档。
* [skim](https://github.com/skim-rs/skim) - 模糊查找器
* [sorairolake/hf](https://github.com/sorairolake/hf) [[hf](https://crates.io/crates/hf)] - 跨平台隐藏文件库与工具 [![CI](https://github.com/sorairolake/hf/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/hf/actions/workflows/CI.yaml)
* [sorairolake/ngrv](https://github.com/sorairolake/ngrv) [[ngrv](https://crates.io/crates/ngrv)] - 类似 `pv(1)` 的终端管道查看器 [![CI](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml)
* [sorairolake/rzopfli](https://github.com/sorairolake/rzopfli) [[rzopfli](https://crates.io/crates/rzopfli)] - 使用 Zopfli 的无损数据压缩工具 [![CI](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml)
* [supercilex/fuc](https://github.com/supercilex/fuc) - 快速的 `cp` 和 `rm` 命令
* [theBGuy/GitDesktop](https://github.com/theBGuy/GitDesktop) - 键盘优先的 Git 桌面客户端，跨 GitHub、GitLab 和 Bitbucket 管理 PR、议题、讨论、CI 与通知，并提供 Jira 关联与 AI 代理集成；采用 Tauri + Rust 后端 [![Release](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml)
* [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh) - 管理 SSH 连接的快速键盘驱动 TUI [![CI](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml/badge.svg)](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml)
* [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments) - 基于 WebAssembly Component Model 的 REPL，具备沙箱多语言插件系统 [![Crates.io](https://img.shields.io/crates/v/pluginlab.svg)](https://crates.io/crates/pluginlab)
* [trippy](https://github.com/fujiapple852/trippy) - 网络诊断工具 [![build badge](https://github.com/fujiapple852/trippy/workflows/CI/badge.svg)](https://github.com/fujiapple852/trippy/actions/workflows/ci.yml)
* [tw93/Kaku](https://github.com/tw93/Kaku) - 为 AI 编程构建、开箱即用的快速终端模拟器，提供零配置默认设置、AI 助手集成和兼容 WezTerm 的 Lua 配置。仅限 macOS。
* [uutils/coreutils](https://github.com/uutils/coreutils) - GNU coreutils 的跨平台重写 [![CICD](https://github.com/uutils/coreutils/actions/workflows/CICD.yml/badge.svg)](https://github.com/uutils/coreutils/actions/workflows/CICD.yml)
* [vyrti/cleaner](https://github.com/vyrti/cleaner) - 适用于 Windows、macOS、Linux 和 FreeBSD 的最快磁盘空间用量分析与清理工具。 [![CI](https://github.com/vyrti/cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/vyrti/cleaner/actions)
* [watchexec](https://github.com/watchexec/watchexec) - 响应文件修改执行命令
* [XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) - 统计代码行数
* [ynqa/jnv](https://github.com/ynqa/jnv) - 使用 jq 的交互式 JSON 过滤器 [![ci](https://github.com/ynqa/jnv/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/jnv/actions/workflows/ci.yml)
* [ynqa/logu](https://github.com/ynqa/logu) - 从（流式）非结构化日志消息中提取模式 [![ci](https://github.com/ynqa/logu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/logu/actions/workflows/ci.yml)
* [ynqa/sig](https://github.com/ynqa/sig) - 交互式 grep（用于流式数据） [![ci](https://github.com/ynqa/sig/actions/workflows/ci.yml/badge.svg)](https://github.com/ynqa/sig/actions/workflows/ci.yml)

### 任务调度

* [tasklet](https://github.com/stav121/tasklet) [[tasklet](https://crates.io/crates/tasklet)] - 使用 Rust 编写的任务调度库 ![Build Status](https://img.shields.io/github/actions/workflow/status/stav121/tasklet/rust.yml)

### 文本编辑器

* [amp](https://amp.rs) - 受 Vi/Vim 启发。
* [Ferrite](https://github.com/OlaProeis/Ferrite) - 基于 egui 的跨平台 Markdown 编辑器，支持实时预览、语法高亮和 Mermaid 图。
* [Fresh](https://github.com/sinelaw/fresh) - 易用、强大且快速的终端文本编辑器与 IDE，支持 TypeScript 插件。
* [gchp/iota](https://github.com/gchp/iota) - 简单的文本编辑器
* [helix](https://github.com/helix-editor/helix) - 受 Neovim/Kakoune 启发的后现代模态文本编辑器。 [![build badge](https://github.com/helix-editor/helix/actions/workflows/build.yml/badge.svg)](https://github.com/helix-editor/helix/actions)
* [ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) - 小巧（≤1024 行代码）的文本编辑器，支持语法高亮、增量搜索等。 [![build badge](https://github.com/ilai-deutel/kibi/actions/workflows/ci.yml/badge.svg)](https://github.com/ilai-deutel/kibi/actions?query=branch%3Amaster)
* [Inkwell](https://github.com/4worlds4w-svg/inkwell) - 使用 Tauri v2 构建的便携、离线优先 Markdown 编辑器，单个可执行文件，零遥测。
* [jamii/focus](https://github.com/jamii/focus) - 极简文本编辑器，内置 jj（Jujutsu）版本控制集成。
* [ki-editor/ki-editor](https://github.com/ki-editor/ki-editor) - 多光标组合式模态编辑器
* [Lapce](https://github.com/lapce/lapce) - 带后端的现代编辑器，受已停止开发的 [xi-editor](https://github.com/xi-editor/xi-editor) 启发。
* [manyougz/velotype](https://github.com/manyougz/velotype) - 基于块的原生 Markdown 编辑器，提供所见即所得渲染和源码编辑模式，基于 GPUI，无 WebView 外壳。
* [mathall/rim](https://github.com/mathall/rim) - 类似 Vim 的文本编辑器。
* [ox](https://github.com/curlpipe/ox) - 在终端中运行的独立 Rust 文本编辑器！
* [SoloMD](https://github.com/zhitongblog/solomd) - 使用 Tauri 2 构建、支持实时预览的轻量跨平台 Markdown 编辑器。
* [vamolessa/pepper](https://git.sr.ht/~lessa/pepper) [[pepper](https://crates.io/crates/pepper)] - 具有明确设计主张的模态编辑器，简化终端代码编辑
* [zed](https://github.com/zed-industries/zed) - 由 Atom 和 Tree-sitter 创作者打造的高性能多人代码编辑器。

### 文本处理

* [artob/readmer](https://github.com/artob/readmer) [[readmer](https://crates.io/crates/readmer)] - Readmer 从 Liquid 或 Jinja2 模板生成 `README.md` 文件。 [![Build Status](https://github.com/artob/readmer/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/readmer/blob/master/.github/workflows/rust.yaml)
* [ashvardanian/stringzilla](https://github.com/ashvardanian/StringZilla) - SIMD 加速的字符串搜索、排序、编辑距离、对齐和生成器，适用于 x86 AVX2 与 AVX-512，以及 Arm NEON [![crates.io](https://img.shields.io/crates/v/stringzilla.svg)](https://crates.io/crates/stringzilla)
* [bensadeh/tailspin](https://github.com/bensadeh/tailspin) [[tailspin](https://crates.io/crates/tailspin)] - 日志文件高亮工具，突出数字、日期、IP 地址、UUID 和日志级别。 [![Run Tests](https://github.com/bensadeh/tailspin/workflows/Run%20Tests/badge.svg)](https://github.com/bensadeh/tailspin/actions)
* [brevity1swos/rgx](https://github.com/brevity1swos/rgx) [[rgx-cli](https://crates.io/crates/rgx-cli)] - 终端正则调试器，支持实时匹配、逐步调试、3 种引擎、代码生成和实时流过滤。 [![CI](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml/badge.svg)](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml)
* [cchexcode/complate](https://github.com/cchexcode/complate) - 在终端中标准化消息（例如 Git 提交消息）的文本模板工具。 [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![build badge](https://github.com/cchexcode/complate/actions/workflows/release.yml/badge.svg)](https://github.com/cchexcode/complate/actions)
* [dathere/qsv](https://github.com/dathere/qsv) [[qsv](https://crates.io/crates/qsv)] - 高性能 CSV 数据整理工具包，分支自 xsv，新增 34 个以上命令及更多功能。 [![Linux build status](https://github.com/dathere/qsv/actions/workflows/rust.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust.yml) [![Windows build status](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml) [![macOS build status](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml)
* [dominikwilkowski/cfonts](https://github.com/dominikwilkowski/cfonts) [[cfonts](https://crates.io/crates/cfonts)] - 控制台的漂亮 ANSI 字体 ![build badge](https://github.com/dominikwilkowski/cfonts/actions/workflows/testing.yml/badge.svg)
* [Goldziher/uncomment](https://github.com/Goldziher/uncomment) [[uncomment](https://crates.io/crates/uncomment)] - 利用 tree-sitter 语法移除代码注释的极快 CLI。
* [grex](https://github.com/pemistahl/grex) - 根据用户测试用例生成正则表达式的命令行工具与库
* [harehare/mq](https://github.com/harehare/mq) - 使用类似 jq 语法处理 Markdown 的命令行工具与库 [![build badge](https://github.com/harehare/mq/actions/workflows/ci.yml/badge.svg)](https://github.com/harehare/mq/actions/workflows/ci.yml)
* [Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) - 面向普通用户的简单快速字符串搜索工具
* [loki_text](https://github.com/roquess/loki_text) [[loki_text](https://crates.io/crates/loki_text)] - 字符串操作库，提供模式搜索、文本转换及多种字符串搜索算法（KMP、Boyer-Moore、Aho-Corasick 等）
* [Melody](https://github.com/yoav-lavi/melody) - 编译为正则表达式的语言，旨在更易阅读与维护 [![build badge](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml/badge.svg)](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml) [![crates.io](https://img.shields.io/crates/v/melody_compiler?label=compiler)](https://crates.io/crates/melody_compiler)
* [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) [[jsongrep](https://crates.io/crates/jsongrep)] - 面向 JSON、YAML、TOML 等序列化格式的快速搜索工具，采用直观的路径查询语法。
* [phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) - ripgrep，还可搜索 PDF、电子书、Office 文档、zip、tar.gz 等
* [ripgrep](https://crates.io/crates/ripgrep) - 结合 The Silver Searcher 的易用性与 grep 的原始速度
* [ruplacer](https://github.com/your-tools/ruplacer) - 查找并替换源文件中的文本 [![Run tests](https://github.com/your-tools/ruplacer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/your-tools/ruplacer/actions/workflows/test.yml)
* [scooter](https://github.com/thomasschafer/scooter) - 在终端中交互查找和替换。
* [sd](https://crates.io/crates/sd) - 直观的查找与替换 CLI
* [sstadick/hck](https://github.com/sstadick/hck) - 更快、功能更丰富、可直接替代 `cut` 的工具 [![build badge](https://github.com/sstadick/hck/workflows/Check/badge.svg?branch=master)](https://github.com/sstadick/hck)
* [SylphxAI/anymd](https://github.com/SylphxAI/anymd) - 将任意文件（PDF、DOCX、PPTX、XLSX、EPUB、HTML/URL、图像、音频/视频）转换为供 AI 代理使用的干净 Markdown；提供 CLI 和 MCP 服务器 [![build badge](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml)
* [vishaltelangre/ff](https://github.com/vishaltelangre/ff) - 按名称查找文件（ff）！
* [whitfin/bytelines](https://github.com/whitfin/bytelines) [[bytelines](https://crates.io/crates/bytelines)] - 将输入行作为字节切片读取，以实现高效率。
* [whitfin/runiq](https://github.com/whitfin/runiq) - 高效过滤未排序输入中的重复行。
* [xsv](https://crates.io/crates/xsv) - 快速 CSV 命令行工具（切片、索引、选择、搜索、采样等）

### 实用工具

* [1History](https://github.com/localfirstapp/1History) - 将 Firefox/Chrome/Safari 历史备份到单个 SQLite 文件的命令行界面 [![Build Status](https://github.com/localfirstapp/1History/actions/workflows/CI.yml/badge.svg)](https://github.com/localfirstapp/1History/actions/workflows/CI.yml)
* [aravpanwar/decayfmt](https://github.com/aravpanwar/decayfmt) [[decayfmt](https://crates.io/crates/decayfmt)] - 每次打开都会永久损坏一小部分的文件格式，无法仅凭文件本身恢复。 [![CI](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml/badge.svg)](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml)
* [artob/edky](https://github.com/artob/edky) [[edky](https://crates.io/crates/edky)] - 在多种编码格式（Base58、Base64、IPFS、iroh、libp2p、OpenSSH 等）间转换 Ed25519 公钥的命令行工具。 [![Build Status](https://github.com/artob/edky/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/edky/blob/master/.github/workflows/rust.yaml)
* [bloznelis/kbt](https://github.com/bloznelis/kbt) [[kbt](https://crates.io/crates/kbt)] - 简单的键盘测试 TUI 工具。
* [brycx/checkpwn](https://github.com/brycx/checkpwn) - Have I Been Pwned（HIBP）命令行工具，轻松检查泄漏的账户与密码。
* [cartesiancs/vessel](https://github.com/cartesiancs/vessel) - 编排物理设备的 C2（命令与控制）软件。
* [dcapal](https://github.com/dcapal/dcapal) - DcaPal 是免费、无需注册的在线工具，通过定额投资帮助平衡投资组合。
* [Eoin-McMahon/Blindfold](https://github.com/Eoin-McMahon/Blindfold) [[Blindfold](https://crates.io/crates/blindfold)] - 快速轻松生成 `.gitignore` 文件的简单 CLI 工具。 ) [![build-badge](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml/badge.svg)]([https://github.com/nix-community/nurl/actions/workflows/ci.yml](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml))
* [Epic Asset Manager](https://github.com/AchetaGames/Epic-Asset-Manager) - 非官方客户端，用于安装 Unreal Engine，并从 Epic Games Store 下载和管理已购买的资源、项目、插件及游戏。
* [evansmurithi/cloak](https://github.com/evansmurithi/cloak) - 命令行 OTP（一次性密码）身份验证应用。 ![CI](https://github.com/evansmurithi/cloak/workflows/CI/badge.svg) [![build badge](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) - tmux-fingers 的极速版本，像 vimium/vimperator 一样在 tmux 中复制/粘贴。
* [fosk/emplace](https://codeberg.org/fosk/emplace) [[emplace](https://crates.io/crates/emplace)] - 同步多台机器上安装的软件包
* [gitlogue](https://github.com/unhappychoice/gitlogue) - 在终端中可视化 Git 提交历史的 TUI 屏保
* [guoxbin/dtool](https://github.com/guoxbin/dtool) - 辅助开发的实用命令行工具集，包含转换、编解码、哈希、加密等。
* [IvanWng97/pixtuoid](https://github.com/IvanWng97/pixtuoid) [[pixtuoid](https://crates.io/crates/pixtuoid)] - 终端像素艺术办公室，将 Claude Code 会话实时呈现为动画同事。 [![CI](https://img.shields.io/github/actions/workflow/status/IvanWng97/pixtuoid/ci.yml?branch=main)](https://github.com/IvanWng97/pixtuoid/actions/workflows/ci.yml)
* [ja7ad/hydra](https://github.com/ja7ad/hydra) - 开源高性能下载管理器与加速器，通过并行连接和镜像来源分割下载文件，支持动态区间抢占和实时停滞恢复，适用于 Windows、macOS 和 Linux。
* [lamco-admin/lamco-rdp-server](https://github.com/lamco-admin/lamco-rdp-server) - 基于 IronRDP 的 Wayland 原生 RDP 服务器，无需 X11，即可远程访问 Wayland Linux 桌面（GNOME、KDE、COSMIC、wlroots 合成器等）。
* [Linus-Mussmaecher/rucola](https://github.com/Linus-Mussmaecher/rucola) - 终端 Markdown 笔记管理器。 [![Crate](https://img.shields.io/crates/v/rucola-notes.svg?logo=rust)](https://crates.io/crates/rucola-notes) [![Build Status](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml/badge.svg)](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml)
* [matugen](https://github.com/InioX/matugen) - 使用模板从图像或颜色生成调色板。
* [Mobslide](https://github.com/thewh1teagle/mobslide) - 将智能手机变成演示遥控器的桌面应用。
* [MoonProxyHQ/moonproxy-desktop](https://github.com/MoonProxyHQ/moonproxy-desktop) - FRP（frpc）的跨平台 GUI 桌面客户端，让非技术用户一键将本地服务公开到互联网。 [![CI](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml/badge.svg)](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml)
* [mprocs](https://github.com/pvolok/mprocs) - 运行多个进程的 TUI
* [mrjackwills/oxker](https://github.com/mrjackwills/oxker) [[oxker](https://crates.io/crates/oxker)] - 查看和控制 Docker 容器的简单 TUI。
* [nix-community/nix-init](https://github.com/nix-community/nix-init) - 从 URL 生成 Nix 包，支持哈希预取、依赖推断、许可证检测等 [![build-badge](https://github.com/nix-community/nix-init/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-init/actions/workflows/ci.yml)
* [nix-community/nix-melt](https://github.com/nix-community/nix-melt) - 类似 ranger 的 flake.lock 查看器 [![build-badge](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml)
* [nix-community/nurl](https://github.com/nix-community/nurl) [[nurl](https://crates.io/crates/nurl)] - 从仓库 URL 生成 Nix 获取器调用 [![build-badge](https://github.com/nix-community/nurl/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nurl/actions/workflows/ci.yml)
* [nomino](https://github.com/yaa110/nomino) - 面向开发者的批量重命名工具
* [pastel](https://github.com/sharkdp/pastel) - 辅助颜色操作：生成、混合和随机颜色。
* [race604/clock-tui](https://github.com/race604/clock-tui) [[clock-tui](https://crates.io/crates/clock-tui)] - 终端时钟应用，具备本地时钟、计时器和秒表。 [![Rust](https://github.com/race604/clock-tui/actions/workflows/rust.yml/badge.svg)](https://github.com/race604/clock-tui/actions/workflows/rust.yml)
* [raftario/licensor](https://github.com/raftario/licensor) - 将许可证写入标准输出 [![GitHub Actions](https://github.com/raftario/licensor/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/raftario/licensor/actions/workflows/build.yml)
* [restsend/rustpbx](https://github.com/restsend/rustpbx) - 软件定义的 SIP 代理，包含注册、在线状态和 b2bua；Freeswitch/FreePBX 的替代品。
* [rleeon/hoard](https://github.com/rleeon/hoard) - 游戏存档备份与同步系统，支持自动检测、版本化快照和自托管存储。 [![CI](https://github.com/rleeon/hoard/actions/workflows/ci.yml/badge.svg)](https://github.com/rleeon/hoard/actions/workflows/ci.yml)
* [rust-parallel](https://github.com/aaronriekenberg/rust-parallel) - 使用 Tokio 并行执行命令的快速命令行应用，界面类似 GNU Parallel 或 xargs。 [![Crate](https://img.shields.io/crates/v/rust-parallel.svg?logo=rust)](https://crates.io/crates/rust-parallel) [![Build Status](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml/badge.svg)](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml)
* [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) - 远程桌面软件，TeamViewer 和 AnyDesk 的优秀替代品。
* [rustic-rs/rustic](https://github.com/rustic-rs/rustic) [[rustic-rs](https://crates.io/crates/rustic-rs)] - 由 Rust 驱动的快速、加密、去重备份。 [![Version](https://img.shields.io/crates/v/rustic-rs.svg)](https://crates.io/crates/rustic-rs)
* [ruvnet/RuView](https://github.com/ruvnet/RuView) - 使用 WiFi 信道状态信息（CSI）和机器学习、保护隐私的人体姿态估计系统。
* [sorairolake/qrtool](https://github.com/sorairolake/qrtool) [[qrtool](https://crates.io/crates/qrtool)] - 编码和解码二维码图像的工具。 [![CI](https://github.com/sorairolake/qrtool/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/qrtool/actions?query=workflow%3ACI)
* [sorairolake/randgen](https://github.com/sorairolake/randgen) [[randgen](https://crates.io/crates/randgen)] - 生成伪随机字节 [![CI](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml)
* [splashboard](https://github.com/unhappychoice/splashboard) [[splashboard](https://crates.io/crates/splashboard)] - 可定制终端启动画面，在 Shell 启动和目录变化时显示，提供各目录专属仪表板 [![CI](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml)
* [str4d/rage](https://github.com/str4d/rage) [[rage](https://crates.io/crates/rage)] - [age](https://github.com/FiloSottile/age) 的 Rust 实现。
* [suckit](https://github.com/Skallwar/suckit) - 递归访问网站并下载内容到磁盘。 [![Crate](https://img.shields.io/crates/v/suckit.svg?logo=rust)](https://crates.io/crates/suckit) [![Build Status](https://github.com/Skallwar/suckit/workflows/Build%20and%20test/badge.svg)](https://github.com/Skallwar/suckit/blob/master/.github/workflows/build_and_test.yml)
* [sundegan/JsonStudio](https://github.com/sundegan/JsonStudio) - 使用 Rust 和 Tauri 构建的本地优先桌面 JSON 工作区，用于格式化、编辑、比较、转换、验证及日志提取。
* [Tabiew](https://github.com/shshemi/tabiew) - 查看和查询 CSV 文件的轻量 TUI 应用。
* [Tail Tales](https://github.com/davidmoreno/tailtales) - 支持 logfmt 的 TUI 日志查看器。 [![Crate](https://img.shields.io/crates/v/tailtales.svg?logo=rust)](https://crates.io/crates/tailtales)
* [tareqmy/gitwig](https://github.com/tareqmy/gitwig) [[CRATE](https://crates.io/crates/gitwig)] - 可用鼠标操作的 Git TUI 与多仓库仪表板。
* [television](https://github.com/alexpasmantier/television) - 极快的通用模糊查找 TUI ![GitHub branch check runs](https://img.shields.io/github/check-runs/alexpasmantier/television/main)
* [Thoth](https://github.com/anitnilay20/thoth) - 高性能、功能丰富的 JSON 和 NDJSON 文件查看探索桌面应用，支持基于 WASM 的插件。 [![CI](https://github.com/anitnilay20/thoth/workflows/CI/badge.svg)](https://github.com/anitnilay20/thoth/actions/workflows/ci.yml)
* [vamolessa/verco](https://git.sr.ht/~lessa/verco) [[verco](https://crates.io/crates/verco)] - 专注键盘快捷键的简单 Git/Hg TUI 客户端
* [vaultwarden](https://github.com/dani-garcia/vaultwarden#readme) [![Build](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml/badge.svg)](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml) - 使用 Rust 编写的 Bitwarden 服务器 API 替代实现
* [veirt/weathr](https://github.com/Veirt/weathr) [[weathr](https://crates.io/crates/weathr)] - 带 ASCII 动画的终端天气应用。 [![Release](https://github.com/Veirt/weathr/actions/workflows/release.yml/badge.svg)](https://github.com/Veirt/weathr/actions/workflows/release.yml)
* [Vibe](https://github.com/thewh1teagle/vibe) - 在每个平台转写每种语言的音频或视频。
* [warpdotdev/Warp](https://github.com/warpdotdev/Warp) - :heavy_dollar_sign: Warp 是极快、现代的 GPU 加速终端，旨在提升你与团队的生产力。
* [Water-Run/treepp](https://github.com/Water-Run/treepp) - 基于 Rust 的原生 Windows `tree` 替代品，成功运行时输入/输出在差异比较层面兼容，提供更多功能，包括必要排除与 `.gitignore` 支持，性能快数倍。
* [wrestic](https://github.com/alvaro17f/wrestic) - restic 的封装。
* [wthrr](https://github.com/ttytm/wthrr-the-weathercrab) - 终端天气伙伴。 [![crates.io](https://img.shields.io/crates/v/wthrr?logo=rust)](https://crates.io/crates/wthrr)
* [YAKC](https://github.com/iammodev/YAKC) - 跨平台按键与鼠标点击可视化工具，用于录屏、直播和演示。支持 Windows、macOS 和 Linux（X11 与 Wayland）。 [![CI](https://github.com/iammodev/YAKC/actions/workflows/ci.yml/badge.svg)](https://github.com/iammodev/YAKC/actions/workflows/ci.yml)
* [YueMiyuki/Risuko](https://github.com/YueMiyuki/Risuko) - 功能完整的下载管理器。 [![Release-Badge](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml/badge.svg)](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml)
* [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown) - 采用 Rust/Tokio 引擎的多协议下载管理器，支持 HTTP/FTP、BitTorrent、eD2K、HLS 和 DASH，提供 IDM 风格动态分段、浏览器扩展及兼容 aria2 的 JSON-RPC 端点。

### 视频

* [dertuxmalwieder/yaydl](https://github.com/dertuxmalwieder/yaydl) [[yaydl](https://crates.io/crates/yaydl)] - 简单的视频下载器
* [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow) - 利用陀螺仪数据的视频防抖应用
* [harlanc/xiu](https://github.com/harlanc/xiu) - 强大安全的直播服务器（rtmp/httpflv/hls/relay）。 [![crates.io](https://img.shields.io/crates/v/xiu.svg)](https://crates.io/crates/xiu)
* [Jorji49/streamtop](https://github.com/Jorji49/streamtop) [[streamtop](https://crates.io/crates/streamtop)] - 终端 HLS、DASH 和 IPTV 流监控器，提供线路探测、TR 101 290 和 SCTE-35 指标。
* [Michael-A-Kuykendall/muxide](https://github.com/Michael-A-Kuykendall/muxide) [[muxide](https://crates.io/crates/muxide)] - 无外部依赖的纯 Rust MP4 封装器，从编码帧生成符合标准的 MP4。
* [tonhowtf/omniget](https://github.com/tonhowtf/omniget) - 从 1,800 多个网站下载视频、课程、音乐和书籍的桌面应用，内置播放器、阅读器和学习库。 [![CI](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml)
* [vidmerger](https://github.com/TGotwig/vidmerger) - 通过 CLI 合并视频与音频文件
* [vuiodev/vuio](https://github.com/vuiodev/vuio) - 支持 Linux、macOS、Windows 和 Docker 的 DLNA 媒体服务器
* [xiph/rav1e](https://github.com/xiph/rav1e) - 最快、最安全的 AV1 编码器。

### 虚拟化

* [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) - 用于容器工作负载的轻量虚拟机 [Firecracker Microvm](https://firecracker-microvm.github.io/)
* [kata-containers/kata-containers](https://github.com/kata-containers/kata-containers) - 轻量虚拟机（VM）的实现，使用体验和性能如同容器，同时提供虚拟机的工作负载隔离与安全优势。
* [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox) - 毫秒级运行隔离代码的轻量 microVM 沙箱库，支持 Rust、Python 和 TypeScript SDK，以及兼容 OCI 的容器镜像。 [![GitHub release](https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases)](https://github.com/superradcompany/microsandbox/releases)
* [tailhook/vagga](https://github.com/tailhook/vagga) - 无需守护进程的容器化工具
* [youki-dev/youki](https://github.com/youki-dev/youki) - 容器运行时 [![build badge](https://github.com/youki-dev/youki/actions/workflows/basic.yml/badge.svg)](https://github.com/youki-dev/youki/actions)

### Web 应用

* [0xMassi/webclaw](https://github.com/0xMassi/webclaw) - 为 LLM 提取 Web 内容，提供 TLS 指纹、MCP 服务器，无需浏览器 [![CI](https://github.com/0xMassi/webclaw/actions/workflows/ci.yml/badge.svg)](https://github.com/0xMassi/webclaw/actions)
* [agrinman/tunnelto](https://github.com/agrinman/tunnelto) [[tunnelto](https://crates.io/crates/tunnelto)] - 通过公共 URL 暴露本地运行的 Web 服务器。
* [cfal/tobaru](https://github.com/cfal/tobaru) - 端口转发器，支持白名单、基于 IP 和 TLS SNI/ALPN 规则的路由、iptables、轮询转发（负载均衡）及热重载。
* [hook0/hook0](https://github.com/hook0/hook0) - 开源 Webhook 即服务平台，让 SaaS 开发者轻松发送 Webhook
* [importantimport/hatsu](https://github.com/importantimport/hatsu) - 🩵面向静态网站的自托管、全自动 ActivityPub 桥。 [![release](https://github.com/importantimport/hatsu/actions/workflows/release.yml/badge.svg)](https://github.com/importantimport/hatsu/actions/workflows/release.yml)
* [IndexFlowing/IndexFlow-core](https://github.com/IndexFlowing/IndexFlow-core) - 自托管 SEO 索引基础设施，用于管理站点地图、URL 提交和搜索引擎索引。
* [janreges/siteone-crawler](https://github.com/janreges/siteone-crawler) [[siteone-crawler](https://crates.io/crates/siteone-crawler)] - 一体化
   网站爬虫、审计工具、离线归档器及 AI 适用的 Markdown 导出器，提供 CI/CD 质量门禁
  [![CI](https://github.com/janreges/siteone-crawler/workflows/CI/badge.svg)](https://github.com/janreges/siteone-crawler/actions)
* [konippi/servo-fetch](https://github.com/konippi/servo-fetch) - 自包含浏览器引擎，获取、渲染并将 Web 内容提取为 Markdown、JSON 或截图——无需 Chromium 或 API 密钥。提供 CLI、Python 和 MCP 服务器。 [![CI](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml/badge.svg)](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml)
* [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) - 联邦宇宙中的链接聚合器 / Reddit 克隆 [![Build Status](https://cloud.drone.io/api/badges/LemmyNet/lemmy/status.svg)](https://cloud.drone.io/LemmyNet/lemmy)
* [MASQ-Project/Node](https://github.com/MASQ-Project/Node) - MASQ Node 软件提供去中心化节点网状网络，让全球用户访问普通互联网内容——超越 Tor 与 VPN 的下一代技术 [![build badge](https://github.com/MASQ-Project/Node/actions/workflows/ci-matrix.yml/badge.svg)](https://github.com/MASQ-Project/Node/actions)
* [Plume-org/Plume](https://github.com/Plume-org/Plume) - 支持 ActivityPub 联邦的博客应用
* [Redlib](https://github.com/redlib-org/redlib) - Reddit 的替代私密前端，源自 [Libreddit](https://github.com/libreddit/libreddit)
* [shouya/rss-funnel](https://github.com/shouya/rss-funnel) - 模块化 RSS 处理管道系统。
* [SinTan1729/Chhoto URL](https://github.com/SinTan1729/chhoto-url) - 简单、极快、自托管的 URL 缩短服务，没有不必要的功能。[![release](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml/badge.svg)](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml)
* [Stoatchat](https://github.com/stoatchat/stoatchat) - 使用现代 Web 技术构建、用户优先的聊天平台。
* [zhom/donutbrowser](https://github.com/zhom/donutbrowser) - 开源反检测浏览器，提供无限隔离配置、Chromium/Firefox 引擎、指纹伪装、代理/VPN 支持、本地 API 与 MCP 服务器，以及端到端加密云同步。 [![GitHub release](https://img.shields.io/github/v/release/zhom/donutbrowser)](https://github.com/zhom/donutbrowser/releases)

### Web 服务器

* [cloudflare/pingora](https://github.com/cloudflare/pingora) - 构建快速、可靠且可演进网络服务的库。
* [emanuele-em/proxelar](https://github.com/emanuele-em/proxelar) - MITM 代理 🦀！HTTP/1、HTTP/2 和 WebSocket 工具包，具备 SSL/TLS 功能 [![Rust](https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg)](https://github.com/emanuele-em/proxelar/actions)
* [g3proxy](https://github.com/bytedance/g3) - 正向代理服务器，支持代理链、协议检查、MITM 拦截、ICAP 适配和透明代理 [![CodeCoverage](https://github.com/bytedance/g3/actions/workflows/codecov.yml/badge.svg)](https://github.com/bytedance/g3/actions)
* [hyperlane-dev/hyperlane](https://github.com/hyperlane-dev/hyperlane) [[hyperlane](https://crates.io/crates/hyperlane)] - 基于 Tokio 的轻量、高性能、跨平台 Rust HTTP 服务器库，内置中间件、WebSocket、SSE 和原始 TCP 支持。 [![CI](https://github.com/hyperlane-dev/hyperlane/actions/workflows/rust.yml/badge.svg)](https://github.com/hyperlane-dev/hyperlane/actions)
* [Mini RPS](https://github.com/marcodpt/minirps) - 小型反向代理服务器，提供 HTTPS、CORS、静态文件托管和模板引擎（minijinja） [crates.io](https://crates.io/crates/minirps)
* [mu-arch/skyfolder](https://github.com/mu-arch/skyfolder) - 🪂漂亮、省心的 HTTP/BitTorrent 服务器。安全 - GUI - 美观 - 快速
* [mufeedvh/binserve](https://github.com/mufeedvh/binserve) - 极快的静态 Web 服务器，在单个二进制程序中集成路由、模板和安全功能，无需编写代码即可配置 [![build badge](https://github.com/mufeedvh/binserve/actions/workflows/build.yml/badge.svg)](https://github.com/mufeedvh/binserve/actions)
* [orhun/rustypaste](https://github.com/orhun/rustypaste) - 极简文件上传/文本分享服务 ![https://github.com/orhun/rustypaste/actions](https://img.shields.io/github/actions/workflow/status/orhun/rustypaste/ci.yml?branch=master&label=build)
* [plabayo/rama](https://github.com/plabayo/rama) - 移动和转换网络数据包的模块化服务框架，用于构建 Web 客户端、服务器，尤其是代理
* [ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) - 演示如何将 GraphQL 服务器作为 [Hasura](https://hasura.io/) 的远程模式使用 ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)
* [static-web-server](https://github.com/static-web-server/static-web-server) - 用于静态文件服务的极快异步 Web 服务器。⚡ [![CI](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml/badge.svg)](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml?query=branch%3Amaster)
* [svenstaro/miniserve](https://github.com/svenstaro/miniserve) - 小巧、自包含的跨平台 CLI 工具，下载二进制程序即可通过 HTTP 提供文件 [![build badge](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [thecoshman/http](https://github.com/thecoshman/http) - Host These Things Please——快速简单地托管文件夹的基础 HTTP 服务器
* [TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) - 简单的静态 HTTP 服务器
* [vetis-server/vetis](https://github.com/vetis-server/vetis) - 面向现代 Rust 应用的极快、极简 HTTP 服务器，支持虚拟主机、SNI、静态内容、反向代理、HTTP 1/2/3，以及 Tokio 或 Smol 异步运行时！
* [vproxy/0x676e67](https://github.com/0x676e67/vproxy) - 快速异步的 Rust HTTP/Socks5 代理

### 工作流自动化

* [cowork-forge](https://github.com/sopaco/cowork-forge) - AI 原生多代理平台，通过七阶段管道编排专用代理，将想法转化为生产就绪软件。 [![release](https://img.shields.io/github/actions/workflow/status/sopaco/cowork-forge/rust.yml?label=Build)](https://github.com/sopaco/cowork-forge/actions/workflows/release.yml)
* [dali-benothmen/woml](https://github.com/dali-benothmen/woml) - WOML（工作流编排标记语言）是工作流自动化标记语言，采用 Rust 执行核心。像 HTML 一样可读，像代码一样可版本化，像 JavaScript 一样强大——没有可视化构建器的杂乱连线，步骤能力无上限。 [![release](https://github.com/dali-benothmen/woml/actions/workflows/release.yml/badge.svg)](https://github.com/dali-benothmen/woml/actions/workflows/release.yml)
* [SouravRoy-ETL/duckle](https://github.com/SouravRoy-ETL/duckle) - 可视化优先的开源数据工作台（ETL/ELT），完全运行于 DuckDB。将源、转换和目标拖到画布上，即可编译为普通 DuckDB SQL；提供 300 个以上连接器及内置 MCP 服务器。 [![release](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml/badge.svg)](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml)

## 开发工具

* [7df-lab/devo](https://github.com/7df-lab/devo) - 以单个二进制程序运行的轻量、模型中立编程代理。快速、节省 token、高度可定制。 [![CI](https://github.com/7df-lab/devo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/7df-lab/devo/actions/workflows/ci.yml)
* [aaif-goose/goose](https://github.com/aaif-goose/goose) - 自动执行工程任务的开源本地 AI 代理。
* [agavra/tuicr](https://github.com/agavra/tuicr) [[tuicr](https://crates.io/crates/tuicr)] - 使用 Vim 键位的代码审查 TUI，提供连续差异查看、PR 风格评论和 GitHub/GitLab/剪贴板导出，支持 Git、jj 与 Mercurial。 [![Crates.io](https://img.shields.io/crates/v/tuicr)](https://crates.io/crates/tuicr)
* [armgabrielyan/deadbranch](https://github.com/armgabrielyan/deadbranch) [[deadbranch](https://crates.io/crates/deadbranch)] - 安全清理过时 Git 分支 [![CI](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml)
* [astral-sh/uv](https://github.com/astral-sh/uv) [[uv](https://crates.io/crates/uv)] - 使用 Rust 编写的极速 Python 包与项目管理器。 [![CI](https://github.com/astral-sh/uv/workflows/CI/badge.svg)](https://github.com/astral-sh/uv/actions)
* [ATAC](https://github.com/Julien-cpsn/ATAC) - 使用 Rust 制作的功能完整 TUI API 客户端。ATAC 免费、开源、离线且无需账户。
* [bacon](https://github.com/Canop/bacon) - 后台 Rust 代码检查器，类似 cargo-watch
* [biome](https://github.com/biomejs/biome) - 提供 Web 项目维护功能的工具链。Biome 提供格式化与检查器，可通过 CLI 和 LSP 使用
* [cachix/devenv](https://github.com/cachix/devenv) - 使用 Nix 的快速、声明式、可复现、可组合开发环境 [![CI](https://github.com/cachix/devenv/actions/workflows/release.yml/badge.svg)](https://github.com/cachix/devenv/actions/workflows/release.yml)
* [claudectl](https://github.com/mercurialsolo/claudectl) [[claudectl](https://crates.io/crates/claudectl)] - Claude Code 的自动驾驶工具，以本地 LLM（ollama/llama.cpp/vLLM）学习自动批准/拒绝工具调用，支持多会话编排、健康监控和费用控制。 [![CI](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml/badge.svg)](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml)
* [clippy](https://crates.io/crates/clippy) - Rust 代码检查
* [clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) - 从 Git 元数据生成变更日志（[约定式变更日志](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)）
* [cloudflare/foundations](https://github.com/cloudflare/foundations) - Foundations 是模块化 Rust 库，帮助程序扩展为分布式生产级系统。
* [cordx56/rustowl](https://github.com/cordx56/rustowl) [[rustowl](https://crates.io/crates/rustowl)] - 可视化 Rust 的所有权与生命周期 [![CI](https://github.com/cordx56/rustowl/actions/workflows/checks.yml/badge.svg?branch=main)](https://github.com/cordx56/rustowl/actions/workflows/checks.yml)
* [create-rust-app](https://github.com/Wulf/create-rust-app) - 通过一条命令搭建现代 Rust+React Web 应用。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/create-rust-app)
* [dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) - 为 Cargo 项目及所有依赖创建 ctags/etags
* [datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - 规则灵活、功能强大的数据库匿名化工具 [![build badge](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [delta](https://crates.io/crates/git-delta) - Git 和 diff 输出的语法高亮工具[![build badge](https://github.com/dandavison/delta/actions/workflows/ci.yml/badge.svg)](https://github.com/dandavison/delta//actions)
* [dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) - `.env` 文件检查器 [![build badge](https://github.com/dotenv-linter/dotenv-linter/actions/workflows/ci.yml/badge.svg)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [enroute-sh/enroute](https://github.com/enroute-sh/enroute) - 对象存储上的可编程 Git 基础设施
* [envio](https://github.com/humblepenguinn/envio) - 管理环境变量的现代安全 CLI 工具 [![build badge](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml/badge.svg?branch=main)](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml)
* [Feel-ix-343/markdown-oxide](https://github.com/Feel-ix-343/markdown-oxide) - PKM Markdown 语言服务器，支持 Obsidian 风格 Wiki 链接、反向链接和每日笔记，适用于 Neovim、VSCode、Zed、Helix 和 Kakoune
* [FerrLabs/FerrFlow](https://github.com/FerrLabs/FerrFlow) [[ferrflow](https://crates.io/crates/ferrflow)] - 由 Conventional Commits 驱动的语义版本、变更日志和标签发布，支持单仓库及 16 种版本文件格式 [![build badge](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml)
* [firelock-ai/kin](https://github.com/firelock-ai/kin) - 面向人类与 AI 代理的图原生代码仓库。Kin 帮助你和 AI 代理在修改代码前理解潜在影响。
* [Flox](https://github.com/flox/flox) - Flox 将虚拟环境与包管理器融为一体。
* [forgecode](https://github.com/tailcallhq/forgecode) - 在终端中生成和编辑代码的 AI 结对程序员。 [![Website](https://img.shields.io/badge/website-forgecode.dev-blue)](https://forgecode.dev/)
* [frolic](https://github.com/frolicflow/Frolic) - 将面向客户的仪表板构建速度提升 10 倍的 API 层
* [fw](https://github.com/brocode/fw) - 工作区生产力增强工具 [![Rust](https://github.com/brocode/fw/actions/workflows/rust.yml/badge.svg)](https://github.com/brocode/fw/actions/workflows/rust.yml)
* [fzf-make](https://github.com/kyu08/fzf-make) [[fzf-make](https://crates.io/crates/fzf-make)] - 通过带预览窗口的模糊查找器执行 make 目标的命令行工具。 [![crates.io](https://img.shields.io/crates/v/fzf-make?style=flatflat-square)](https://crates.io/crates/fzf-make)
* [geiger](https://github.com/geiger-rs/cargo-geiger) - 列出 crate 及全部依赖中不安全代码用量统计的程序 [![Build Status](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/geiger-rs.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [git-cliff](https://github.com/orhun/git-cliff) - 遵循 Conventional Commit 规范的高度可定制变更日志生成器 ![https://github.com/orhun/git-cliff/actions](https://img.shields.io/github/actions/workflow/status/orhun/git-cliff/ci.yml?branch=main&label=build)
* [git-journal](https://github.com/saschagrunert/git-journal/) - Git 提交消息与变更日志生成框架
* [git-time-machine](https://github.com/dinakars777/git-time-machine) - 用于撤销 Git 错误的可视化 git reflog TUI [![crate](https://img.shields.io/crates/v/git-time-machine.svg)](https://crates.io/crates/git-time-machine) [![build badge](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml/badge.svg)](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml)
* [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) [[gix](https://crates.io/crates/gix)] - 纯 Rust Git 实现，提供高性能底层 crate 和 CLI 工具，支持克隆、获取、状态、差异、提交、配置、引用等。 [![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
* [hot-lib-reloader](https://github.com/rksm/hot-lib-reloader-rs) - 热重载 Rust 代码 [![build badge](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml)
* [intelli-shell](https://github.com/lasantosr/intelli-shell) - 收藏带占位符的命令，随时搜索或自动补全 [![crate](https://img.shields.io/crates/v/intelli-shell.svg)](https://crates.io/crates/intelli-shell) [![build badge](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml/badge.svg)](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml)
* [j178/prek](https://github.com/j178/prek) - 使用 Rust 编写、更快、无依赖、可直接替代 pre-commit 的工具。
* [jj-vcs/jj](https://github.com/jj-vcs/jj) - 兼容 Git 的版本控制系统，提供简洁 CLI、一流冲突处理和自动变基 [![Release](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
* [just](https://github.com/casey/just) - 便捷的项目专用任务命令运行器
* [mask](https://github.com/jacobdeichert/mask) - 由简单 Markdown 文件定义的 CLI 任务运行器 [![build badge](https://github.com/jacobdeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jacobdeichert/mask/actions?query=workflow%3ACI)
* [mise](https://github.com/jdx/mise) [[mise](https://crates.io/crates/mise)] - 多语言工具版本管理器与任务运行器，可直接替代 asdf，性能更快。 [![build badge](https://github.com/jdx/mise/actions/workflows/test.yml/badge.svg)](https://github.com/jdx/mise/actions/workflows/test.yml)
* [Module Linker](https://github.com/fiatjaf/module-linker) - 为 GitHub 上的引用添加 `<a>` 链接的扩展，支持 `mod`、`use` 和 `extern crate` 语句。
* [Muvon/octocode](https://github.com/Muvon/octocode) [[octocode](https://crates.io/crates/octocode)] - 语义代码索引器，具备 GraphRAG 知识图谱和 MCP 服务器。提供 Tree-sitter AST 解析、ast-grep 结构搜索、LanceDB 向量存储和代码签名视图。CLI 与 MCP 服务器模式适用于 Claude/Cursor/Windsurf 等 AI 助手。 [![CI](https://github.com/Muvon/octocode/actions/workflows/ci.yml/badge.svg)](https://github.com/Muvon/octocode/actions/workflows/ci.yml)
* [persiyanov/herdr-reviewr](https://github.com/persiyanov/herdr-reviewr) - 审查编程代理差异的终端面板，可将逐行评论发回 Claude Code、Codex、OpenCode 或 Pi。 [![CI](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml/badge.svg)](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml)
* [prefix-dev/pixi](https://github.com/prefix-dev/pixi) [[pixi](https://crates.io/crates/pixi)] - 基于 conda 生态构建的快速多语言项目包管理与工作流工具。
* [ptags](https://github.com/dalance/ptags) - 面向 Git 仓库的并行 universal-ctags 封装
* [Racer](https://github.com/racer-rust/racer) - Rust 代码补全
* [reflex-search/reflex](https://github.com/reflex-search/reflex) [[reflex-search](https://crates.io/crates/reflex-search)] - 面向 AI 编程代理的本地优先全文代码搜索引擎。三元组索引、低于 100 毫秒查询、MCP 服务器模式，通过 tree-sitter 支持 18 种语言。
* [Rust Search Extension](https://github.com/huhu/rust-search-extension) - 在地址栏（omnibox）中搜索 crate 与文档的便捷浏览器扩展。 [![Build Status](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [Rustup](https://github.com/rust-lang/rustup) - Rust 工具链安装器 [![build badge](https://github.com/rust-lang/rustup/actions/workflows/ci.yaml/badge.svg)](https://github.com/rust-lang/rustup/actions)
* [scriptisto](https://github.com/igor-petruk/scriptisto) - 不依赖语言的“shebang 解释器”，让你用编译型语言编写单文件脚本。 [![Build Status](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [sstraus/tuicommander](https://github.com/sstraus/tuicommander) - 并行运行多个 AI 编程代理的桌面工作区，每个代理拥有独立 Git 工作树，提供代理状态检测、差异、PR 管理和 MCP 代理中心 [![CI](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml)
* [Terrain](https://github.com/sopaco/terrain) - AI 原生工程环境管理，使代码库可供代理使用。
* [typos](https://github.com/crate-ci/typos) [[typos-cli](https://crates.io/crates/typos-cli)] - 源码拼写检查器
* [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) - 统一 Web 开发工具链，将 Vite、Vitest、Oxlint、Rolldown 等整合到由 Rust 驱动的单一 CLI（`vp`）
* [VT Code](https://crates.io/crates/vtcode) - 终端编程代理，将现代 TUI 与 tree-sitter 和 ast-grep 驱动的深层语义代码理解结合。
* [Wilfred/difftastic](https://github.com/Wilfred/difftastic) [[difftastic](https://crates.io/crates/difftastic)] - 理解语法的结构化差异工具，支持 30 多种编程语言
* [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) [[lean-ctx](https://crates.io/crates/lean-ctx)] - AI 编程代理的上下文运行时：MCP 服务器和 Shell 钩子，压缩工具与终端输出以减少 LLM token 用量；支持 Tree-sitter 解析和会话缓存。 [![CI](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml/badge.svg)](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml)

### 构建系统

* [better-fullstack](https://github.com/Marve10s/Better-Fullstack) - 端到端全栈脚手架工具，支持 Rust（Axum、Actix Web、Leptos、Dioxus、SeaORM、SQLx、tonic、async-graphql）以及 TypeScript、Go 和 Python——代码可直接交给你或 AI 代理使用。
* [Cargo](https://crates.io/) - Rust 包管理器
  * [cargo-all-features](https://github.com/frewsxcv/cargo-all-features) - 可配置子命令，简化所有功能组合的测试、构建等操作 [![CI](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml/badge.svg)](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml)
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) - 比较微基准测试的工具
  * [cargo-bins/cargo-binstall](https://github.com/cargo-bins/cargo-binstall) [[cargo-binstall](https://crates.io/crates/cargo-binstall)] - 快速 Rust crate 二进制安装器，获取预构建产物而非从源码编译 [![CI](https://github.com/cargo-bins/cargo-binstall/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-bins/cargo-binstall/actions)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) - 使用 meta-rust 类生成 BitBake 配方的 Cargo 扩展
  * [cargo-cache](https://crates.io/crates/cargo-cache) - 检查/管理/清理 Cargo 缓存（`~/.cargo/`/`${CARGO_HOME}`）、打印大小等 [![Build Status](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) - `cargo rustc -- -Zno-trans` 的封装，仅需正确性检查时可帮助加快编译
  * [cargo-commander](https://crates.io/crates/cargo-commander) - 运行 CLI 命令的 `cargo` 子命令，类似 `package.json` 的 scripts 部分 [![Build and test](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml/badge.svg)](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml)
  * [cargo-count](https://crates.io/crates/cargo-count) - 列出 Cargo 项目的源码计数与详情，包括不安全代码统计
  * [cargo-deb](https://crates.io/crates/cargo-deb) - 生成 Debian 二进制包
  * [cargo-depgraph](https://crates.io/crates/cargo-depgraph) - 利用 Cargo 元数据和 Graphviz 生成 Cargo 项目依赖图
  * [cargo-do](https://crates.io/crates/cargo-do) - 连续运行多个 Cargo 命令
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) - 使用树内 eclass 生成 ebuild 的 Cargo 扩展
  * [cargo-edit](https://crates.io/crates/cargo-edit) - 从命令行读写 Cargo.toml，添加和列出依赖
  * [cargo-generate](https://github.com/cargo-generate/cargo-generate) - 利用现有 Git 仓库作为模板的 Rust 项目生成器。
  * [cargo-info](https://crates.io/crates/cargo-info) - 从命令行查询 crates.io 的 crate 详情
  * [cargo-license](https://crates.io/crates/cargo-license) - 快速查看所有依赖许可证的 Cargo 子命令。
  * [cargo-limit](https://crates.io/crates/cargo-limit) - 更少噪声的 Cargo：错误修复前跳过警告，提供 Neovim 集成等。 [![build badge](https://github.com/cargo-limit/cargo-limit/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-limit/cargo-limit/actions)
  * [cargo-machete](https://github.com/bnjbvr/cargo-machete) [[cargo-machete](https://crates.io/crates/cargo-machete)] - 检测 Cargo.toml 中未使用依赖的简单工具。
  * [cargo-make](https://crates.io/crates/cargo-make) - 任务运行器与构建工具。 [![build badge](https://github.com/sagiegurari/cargo-make/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/cargo-make/actions)
  * [cargo-modules](https://crates.io/crates/cargo-modules) - 以树状形式概览 crate 模块的 Cargo 插件。
  * [cargo-multi](https://crates.io/crates/cargo-multi) - 对多个 crate 运行指定 Cargo 命令
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) - 显示 Rust 依赖何时有新版本或已过时
  * [cargo-rdme](https://github.com/orium/cargo-rdme) [[cargo-rdme](https://crates.io/crates/cargo-rdme)] - 从 crate 文档创建 README 的 Cargo 子命令。 [![build badge](https://github.com/orium/cargo-rdme/workflows/CI/badge.svg)](https://github.com/orium/cargo-rdme/actions?query=workflow%3ACI)
  * [cargo-release](https://crates.io/crates/cargo-release) - 发布 Git 管理的 Cargo 项目的工具，支持构建、打标签、发布、文档及推送 [![Rust](https://github.com/crate-ci/cargo-release/actions/workflows/ci.yml/badge.svg)](https://github.com/crate-ci/cargo-release/actions/workflows/rust.yml)
  * [cargo-script](https://crates.io/crates/cargo-script) - 让人们快速轻松运行可使用 Cargo 包生态的 Rust“脚本”
  * [cargo-udeps](https://github.com/est31/cargo-udeps) [[cargo-udeps](https://crates.io/crates/cargo-udeps)] - 查找未使用的依赖
  * [cargo-update](https://crates.io/crates/cargo-update) - 检查并应用已安装可执行程序更新的 Cargo 子命令
  * [cargo-watch](https://crates.io/crates/cargo-watch) - 源码变化时编译项目的 Cargo 工具
  * [dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) - 展开源码中的宏
* CMake
  * [Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) - 将 Rust 库集成到 CMake 项目的实用工具
  * [SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) - 展示 Rust 与 CMake 配合使用的示例项目
* [facebook/buck2](https://github.com/facebook/buck2) - [Buck2](https://buck2.build/) 是使用 Rust 构建的大规模构建工具
* [Fleet](https://github.com/suptejas/fleet) [[fleet-rs](https://crates.io/crates/fleet-rs)] - 极速 Rust 构建工具。
* GitHub actions
  * [icepuma/rust-action](https://github.com/icepuma/rust-action) - Rust 的 GitHub Action
* [Nix](https://nixos.org/)
  * [nix-community/fenix](https://github.com/nix-community/fenix) - Nix 的 Rust 工具链及 rust-analyzer 每夜版 [![build-badge](https://github.com/nix-community/fenix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/fenix/actions/workflows/ci.yml)
* [pantsbuild/pants](https://github.com/pantsbuild/pants) - [Pants](https://www.pantsbuild.org/) 是使用 Rust 构建、快速可扩展且用户友好的构建系统，适用于各种规模代码库。
* [rolldown/rolldown](https://github.com/rolldown/rolldown) - 使用 Rust 编写的 JavaScript/TypeScript 打包器，旨在成为 Vite 的未来打包器。
* [rui314/mold](https://github.com/rui314/mold) - 适用于 Linux、macOS 和 Windows 的现代高速链接器（ELF、Mach-O、PE）
* [tracemachina/nativelink](https://github.com/TraceMachina/nativelink) - [NativeLink](https://nativelink.com) 是使用 Rust 编写的后端远程执行平台，面向 [Buck2](https://buck2.build/)、[Bazel](https://bazel.build/)、[Pants](https://www.pantsbuild.org/) 等客户端构建系统。 [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TraceMachina/nativelink/badge)](https://securityscorecards.dev/viewer/?uri=github.com/TraceMachina/nativelink) [![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8050/badge)](https://www.bestpractices.dev/projects/8050)
* [vercel/turborepo](https://github.com/vercel/turborepo) - 使用 Rust 编写的高性能 JavaScript 和 TypeScript 单仓库构建系统，支持增量计算、远程缓存和并行任务执行。
* [wislertt/zerv](https://github.com/wislertt/zerv) [[zerv](https://crates.io/crates/zerv)] - 动态版本工具，从任意 Git 状态为每次构建生成版本，支持 SemVer、PEP 440 和 CalVer 输出 [![CI](https://github.com/wislertt/zerv/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/wislertt/zerv/actions/workflows/cd.yml)

### 调试

* GDB
  * [gdbgui](https://github.com/cs01/gdbgui) - 基于浏览器的 GDB 前端，用于调试 C、C++、Rust 和 Go。
* [godzie44/BugStalker](https://github.com/godzie44/BugStalker) - Linux x86-64 现代调试器，使用 Rust 编写，面向 Rust 程序。
* [kxxt/tracexec](https://github.com/kxxt/tracexec) [[tracexec](https://crates.io/crates/tracexec)] - execve{,at} 及执行前行为的追踪器、调试器启动器。
* LLDB
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - [Visual Studio Code](https://code.visualstudio.com/) 的 LLDB 扩展。

### 部署

* Docker
  * [emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) - 使用 musl-libc 和 musl-gcc 编译静态 Rust 二进制程序的 Docker 镜像，包含实用 C 库的静态版本
  * [kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) - 用于构建极小 Rust Docker 镜像的示例项目
  * [lenra-io/dofigen](https://github.com/lenra-io/dofigen) [[dofigen](https://crates.io/crates/dofigen/)] - 使用简化 YAML 或 JSON 描述的 Dockerfile 生成器 ![Rust CI](https://github.com/lenra-io/dofigen/actions/workflows/build_ci.yml/badge.svg)
  * [liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) - 多版本 Rust Docker 镜像（附 musl 工具）
  * [LukeMathWalker/cargo-chef](https://github.com/LukeMathWalker/cargo-chef) - 在 Docker 构建间缓存远程依赖编译结果的工具和预构建镜像。
  * [moghtech/komodo](https://github.com/moghtech/komodo) - 跨多台服务器构建和部署软件的工具，提供 Web 界面、API，且无服务器数量限制
  * [rust-cross/rust-musl-cross](https://github.com/rust-cross/rust-musl-cross) - 使用 musl-cross 编译静态 Rust 二进制程序的 Docker 镜像 [![Build](https://github.com/rust-cross/rust-musl-cross/workflows/Build/badge.svg)](https://github.com/rust-cross/rust-musl-cross/actions?query=workflow%3ABuild)
  * [rust-lang/docker-rust](https://github.com/rust-lang/docker-rust) - 官方 Rust Docker 镜像
  * [Stavrospanakakis/is_ready](https://github.com/Stavrospanakakis/is_ready) - 等待多个服务可用 ![Build](https://github.com/Stavrospanakakis/is_ready/actions/workflows/release.yml/badge.svg)
* Heroku
  * [emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) - Heroku Rust 应用构建包
* [release-plz](https://github.com/release-plz/release-plz) [[release-plz](https://crates.io/crates/release-plz)] - 从 CI 发布 crate，支持变更日志生成和语义版本检查。 [![build badge](https://github.com/release-plz/release-plz/workflows/CI/badge.svg)](https://github.com/release-plz/release-plz/actions)

### 嵌入式

[Rust Embedded](https://rust-embedded.org/) 专注于改善在资源受限环境与非传统平台使用 Rust 的端到端体验。参见 [awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust)，获取精选且更全面的嵌入式 Rust 资源。

* Arduino
  * [avr-rust/ruduino](https://github.com/avr-rust/ruduino) - Arduino Uno 的可复用组件。
* 交叉编译
  * [japaric/rust-cross](https://github.com/japaric/rust-cross) - 关于 Rust 程序交叉编译你需要了解的一切
  * [japaric/xargo](https://github.com/japaric/xargo) - 轻松将 Rust 程序交叉编译到 ARM Cortex-M 等自定义裸机目标
* 开发工具
  * [matheuswhite/scope-rs](https://github.com/matheuswhite/scope-rs) [[scope-monitor](https://crates.io/crates/scope-monitor)] - 跨平台串口与 RTT 监控 TUI，支持十六进制/@tag 输入宏、搜索、会话录制及 Lua 插件。 [![Build Status](https://github.com/matheuswhite/scope-rs/actions/workflows/build.yml/badge.svg)](https://github.com/matheuswhite/scope-rs/actions)
  * [probe-rs/probe-rs](https://github.com/probe-rs/probe-rs) [[probe-rs-tools](https://crates.io/crates/probe-rs-tools)] - 用于刷写和调试 ARM 与 RISC-V 微控制器的嵌入式调试工具包。
  * [Vaishnav-Sabari-Girish/ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - 带绘图器 TUI 的极简串口监视器。
* Espressif
  * [esp-rs](https://github.com/esp-rs) - 汇集多个社区项目，使 Espressif Systems 生产的各类 SoC 和模块能够使用 Rust 编程语言。
* 固件
  * [oreboot/oreboot](https://github.com/oreboot/oreboot) - oreboot 是去掉 C、使用 Rust 编写的 coreboot 分支
* nRF
  * [nrf-rs/nrf-hal](https://github.com/nrf-rs/nrf-hal) - nRF 系列设备的 Rust HAL

### 外部函数接口（FFI）

另见[外部函数接口](https://doc.rust-lang.org/book/first-edition/ffi.html)、[The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/)（从其他语言使用 Rust 代码的示例集）以及 [Rust 编写的 FFI 示例](https://github.com/alexcrichton/rust-ffi-examples)。

* C
  * [gtk-rs/gir](https://github.com/gtk-rs/gir) - 从基于 GObject 的 C 库创建安全 Rust 绑定的代码生成器。
  * [mozilla/cbindgen](https://github.com/mozilla/cbindgen) - 从 Rust 源文件生成 C 头文件，Gecko 的 WebRender 使用此工具
  * [Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) - 从 Rust 源文件生成 C 头文件
  * [trevyn/librclone](https://github.com/trevyn/librclone) [[librclone](https://crates.io/crates/librclone)] - librclone C 库的 Rust 绑定。
* C#
  * [csbindgen](https://github.com/Cysharp/csbindgen) - 为 Rust 源文件生成 C# 绑定
* C++
  * [dtolnay/cxx](https://github.com/dtolnay/cxx) - Rust 与 C++ 之间的安全互操作 [![build badge](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [rust-cpp](https://crates.io/crates/cpp) - 在 Rust 中直接嵌入 C++ 代码。 [![Build status](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
  * [rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) - Rust 绑定生成器
* Erlang
  * [rusterlium/rustler](https://github.com/rusterlium/rustler) - 创建 Erlang NIF 函数的安全 Rust 桥
* Java
  * [bennettanderson/rjni](https://github.com/benanders/rjni) - 从 Rust 使用 Java
  * [drrb/java-rust-example](https://github.com/drrb/java-rust-example) - 从 Java 使用 Rust
  * [j4rs](https://crates.io/crates/j4rs) - 从 Rust 使用 Java
  * [jni](https://crates.io/crates/jni) - 从 Java 使用 Rust
  * [jni-sys](https://crates.io/crates/jni-sys) - 对应 jni.h 的 Rust 定义
  * [rucaja](https://crates.io/crates/rucaja) - 从 Rust 使用 Java
* Lua
  * [jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) - Rust 的 Lua 5.3 绑定
  * [lilyball/rust-lua](https://github.com/lilyball/rust-lua) - Lua 5.1 的安全 Rust 绑定
  * [mlua-rs/mlua](https://github.com/mlua-rs/mlua) - Lua 5.4/5.3/5.2/5.1（包括 LuaJIT）和 Roblox Luau 的高级 Rust 绑定，支持 async/await [![build badge](https://github.com/mlua-rs/mlua/workflows/CI/badge.svg)](https://github.com/mlua-rs/mlua/actions)
  * [tickbh/td_rlua](https://github.com/tickbh/td_rlua) [[td_rlua](https://crates.io/crates/td_rlua)] - Rust 的零开销高级 Lua 5.3 封装
  * [tomaka/hlua](https://github.com/tomaka/hlua) - Rust 与 Lua 交互的库
* mruby
  * [anima-engine/mrusty](https://github.com/anima-engine/mrusty) - mruby 的安全 Rust 绑定
* Node.js
  * [infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - 使用 Rust 生成 Node.js 模块的简便方式
  * [neon-bindings/neon](https://github.com/neon-bindings/neon) - 编写安全快速原生 Node.js 模块的 Rust 绑定
  * [zhangyuang/node-ffi-rs](https://github.com/zhangyuang/node-ffi-rs) - 使用 Rust 与 N-API 编写的模块，为 Node.js 提供接口（FFI）功能
* Objective-C
  * [SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) - Objective-C 运行时的 Rust 绑定与封装
* PHP
  * [phper-framework/phper](https://github.com/phper-framework/phper) - 尽可能使用纯粹、安全的 Rust 编写 PHP 扩展的框架
* Prolog
  * [mthom/scryer-prolog](https://github.com/mthom/scryer-prolog/) - Scryer Prolog 是使用 Rust 编写的自由软件 ISO Prolog 系统
* Python
  * [dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) - Python 绑定
  * [getsentry/milksnake](https://github.com/getsentry/milksnake) - Python setuptools 扩展，以尽可能便携的方式在 Python wheel 中分发动态链接库。
  * [PyO3/PyO3](https://github.com/PyO3/PyO3) - Python 解释器的 Rust 绑定
  * [RustPython](https://github.com/RustPython/RustPython) - 使用 Rust 编写的 Python 解释器 [![Build Status](https://github.com/RustPython/RustPython/workflows/CI/badge.svg)](https://github.com/RustPython/RustPython/actions?query=workflow%3ACI)
* Ruby
  * [d-unsed/ruru](https://github.com/d-unsed/ruru) - 使用 Rust 编写的原生 Ruby 扩展
  * [danielpclark/rutie](https://github.com/danielpclark/rutie) - 使用 Rust 编写原生 Ruby 扩展，反之亦然
* Web Assembly
  * [rhysd/wain](https://github.com/rhysd/wain) - wain：从零使用安全 Rust 构建的 WebAssembly 解释器，零依赖 [![build badge](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)
  * [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen) - 促进 Wasm 模块与 JS 高级交互的项目。
  * [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) - :package: :sparkles: 打包 Wasm 并发布到 npm！

### 格式化工具

* [astral-sh/ruff](https://github.com/astral-sh/ruff) - 极速 Python 检查器与代码格式化工具 [![Actions status](https://github.com/astral-sh/ruff/workflows/CI/badge.svg)](https://github.com/astral-sh/ruff/actions)
* [dprint](https://github.com/dprint/dprint) - 可插拔、可配置的代码格式化平台 [![build badge](https://github.com/dprint/dprint/workflows/CI/badge.svg)](https://github.com/dprint/dprint/actions?query=workflow%3ACI)
* [Prettier Rust](https://github.com/jinxdash/prettier-plugin-rust) - 有明确设计主张的 Rust 代码格式化工具，自动修正错误语法（[Prettier](https://prettier.io/) 社区插件）
* [rustfmt](https://github.com/rust-lang/rustfmt) - Rust 团队维护并包含在 Cargo 中的 Rust 代码格式化工具
* [rvben/rumdl](https://github.com/rvben/rumdl) [[rumdl](https://crates.io/crates/rumdl)] - 使用 Rust 编写的快速 Markdown 检查器与格式化工具 [![CI](https://github.com/rvben/rumdl/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rvben/rumdl/actions/workflows/ci.yml)

### 集成开发环境（IDE）

另见 [Rust 工具](https://rust-lang.org/tools/)。

  * [Eclipse](https://www.eclipse.org/)
    * [Eclipse Corrosion](https://github.com/eclipse-corrosion/corrosion) - Eclipse IDE 的 Rust 开发插件，通过集成 Rust Analyzer 语言服务器、Cargo 运行器和 GDB 调试器提供丰富编辑体验
  * [Emacs](https://www.gnu.org/software/emacs/)
    * [emacs-racer](https://github.com/racer-rust/emacs-racer) - 自动补全（另见 [company](https://company-mode.github.io) 和 [auto-complete](https://github.com/auto-complete/auto-complete)）
    * [flycheck-rust](https://github.com/flycheck/flycheck-rust) - [Flycheck](https://github.com/flycheck/flycheck) 的 Rust 支持
    * [rust-mode](https://github.com/rust-lang/rust-mode) - Rust 主模式
    * [rustic](https://github.com/emacs-rustic/rustic) - Emacs 的 Rust 开发环境 [![build badge](https://github.com/emacs-rustic/rustic/workflows/CI/badge.svg)](https://github.com/emacs-rustic/rustic/actions?query=workflow%3ACI)
  * [gitpod.io](https://gitpod.io) - 基于 Rust Language Server、完整支持 Rust 的在线 IDE
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) - 自 3.22.2 版本起原生支持 Rust 和 Cargo
  * [IntelliJ](https://www.jetbrains.com/idea/)
    * [intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) - IntelliJ 平台的 Rust 插件
  * [Kakoune](http://kakoune.org/)
    * [kakoune-lsp](https://github.com/kakoune-lsp/kakoune-lsp/) - [LSP](https://microsoft.github.io/language-server-protocol/) 客户端，使用 Rust 实现，开箱即支持 RLS。
  * [lapce](https://github.com/lapce/lapce) - 使用 Rust 编写、极速且强大的代码编辑器。 [![build badge](https://github.com/lapce/lapce/actions/workflows/release.yml/badge.svg)](https://github.com/lapce/lapce/actions/workflows/release.yml)
  * [Ride](https://github.com/madeso/ride) - Rust 集成开发环境（IDE）
  * [RustRover](https://www.jetbrains.com/rust/) - JetBrains 的强大 Rust IDE，个人非商业使用免费
  * [Sublime Text](https://www.sublimetext.com/)
    * [rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) - 官方 Rust 包
  * [Vim](https://vim.sourceforge.io/) - 无处不在的文本编辑器
    * [autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) - [LSP](https://microsoft.github.io/language-server-protocol/) 客户端，使用 Rust 实现，开箱即支持 RLS。
    * [cargo.nvim](https://github.com/nwiizo/cargo.nvim) - 无缝集成 Cargo 命令的 Neovim 插件。
    * [crates.nvim](https://github.com/Saecki/crates.nvim) - 帮助管理 crates.io 依赖的插件。
    * [rust.vim](https://github.com/rust-lang/rust.vim) - 提供文件检测、语法高亮、格式化、Syntastic 集成等。
    * [vim-racer](https://github.com/racer-rust/vim-racer) - 让 Vim 使用 [Racer](https://github.com/racer-rust/racer) 进行 Rust 代码补全和导航。
  * Visual Studio
    * [PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) - Rust 的 Visual Studio 扩展 [![Build status](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - LLDB 扩展
    * [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - 轻松管理依赖
    * [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - VSCode 的 TOML 支持
    * [Prettier - Code formatter (Rust)](https://marketplace.visualstudio.com/items?itemName=jinxdash.prettier-rust) - 有明确设计主张的 Rust 代码格式化工具，自动修正错误语法（[Prettier](https://prettier.io/) 社区插件）
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - RLS 之外的另一种 Rust 语言服务器

### 性能分析

* [Bencher](https://github.com/bencherdev/bencher) - 持续基准测试工具套件，旨在捕获 CI 中的性能回退
* [bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) - 统计驱动的基准测试库
* [Bytehound](https://github.com/koute/bytehound) - Linux 内存分析器
* [cong-or/hud](https://github.com/cong-or/hud) - 找出阻塞 Tokio 运行时的原因。零插桩 eBPF 分析器。
* [Divan](https://github.com/nvzqz/divan) - 简单强大的基准测试库，支持分配分析
* [ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) - 秒表库
* 火焰图
  * [llogiq/flame](https://github.com/llogiq/flame) - Rust 侵入式火焰图分析工具
* [g3bench](https://github.com/bytedance/g3) - 支持 HTTP 1.x、HTTP 2、HTTP 3、TLS 握手、DNS 和 Cloudflare Keyless 的基准测试工具
* [pawurb/hotpath](https://github.com/pawurb/hotpath-rs) - 精确显示代码耗时与分配位置的简单分析器 [![GH Actions](https://github.com/pawurb/hotpath-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pawurb/hotpath-rs/actions)
* [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) - 命令行基准测试工具

### 服务

* [deepwiki-rs](https://github.com/sopaco/deepwiki-rs) - 将代码库转化为专业架构文档。 [![crates.io](https://img.shields.io/crates/v/deepwiki-rs?logo=rust)](https://crates.io/crates/deepwiki-rs)
* [deps.rs](https://github.com/deps-rs/deps.rs) - 检测过时或不安全的依赖
* [docs.rs](https://docs.rs) - 自动生成 crate 文档

### 静态分析

[[断言](https://crates.io/keywords/assert), [静态](https://crates.io/keywords/static)]

* [cargo-coupling](https://github.com/nwiizo/cargo-coupling) - 使用 Vlad Khononov 的“平衡软件设计中的耦合”框架进行 Rust 耦合分析的工具
* [creusot-rs/creusot](https://github.com/creusot-rs/creusot) - Rust 演绎验证器，将代码转换到 Why3 验证平台，证明不存在 panic、溢出和断言失败
* [dupehound](https://github.com/Rafaelpta/dupehound) [[dupehound](https://crates.io/crates/dupehound)] - 重复代码检测器，对函数体进行指纹识别（winnowing），即使重命名也能识别副本。提供仓库粗糙度评分、重复历史图及指出可复用原函数的 CI 门禁。支持 Rust 和其他 11 种语言。 [![CI](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml)
* [kucherenko/jscpd](https://github.com/kucherenko/jscpd) [[jscpd](https://crates.io/crates/jscpd)] - 源码复制粘贴检测器，跨 220 种以上文件格式查找重复块 [![CI](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml)
* [MIRAI](https://github.com/endorlabs/mirai) - 对 Rust 中层中间表示（MIR）进行分析的抽象解释器 [![Continuous Integration](https://github.com/endorlabs/mirai/actions/workflows/rust.yml/badge.svg)](https://github.com/endorlabs/mirai/actions/workflows/rust.yml)
* [RAPx](https://github.com/safer-rust/RAPx) - 帮助 Rust 程序员开发和使用超越 rustc 编译器内置能力的高级静态分析工具的平台。
* [static_assertions](https://crates.io/crates/static_assertions) - 确保满足不变量的编译期断言
* [verus-lang/verus](https://github.com/verus-lang/verus) - 面向底层系统代码的经过验证的 Rust
* [zizmorcore/zizmor](https://github.com/zizmorcore/zizmor) [[zizmor](https://crates.io/crates/zizmor)] - GitHub Actions 静态分析工具，检测模板注入、凭据泄漏、权限过大和冒名提交等安全问题。 [![CI](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml/badge.svg)](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml)

### 测试

[[测试](https://crates.io/keywords/test), [测试](https://crates.io/keywords/testing)]
* 断言与匹配器
  * [googletest-json-serde](https://crates.io/crates/googletest-json-serde) [![Latest Version](https://img.shields.io/crates/v/googletest-json-serde.svg)](https://crates.io/crates/googletest-json-serde) - googletest-rust 的 JSON 匹配器集合，支持路径、数组和对象。 [![Build Status](https://github.com/chege/googletest-json-serde/actions/workflows/ci.yaml/badge.svg)](https://github.com/chege/googletest-json-serde/actions)
* 代码覆盖率
  * [minikin/cargo-crap](https://github.com/minikin/cargo-crap) [[cargo-crap](https://crates.io/crates/cargo-crap)] - 结合圈复杂度与 LCOV 覆盖率（CRAP 指标）找出复杂且未测试的函数，按分数设置 CI 门禁
  * [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) [[supercov](https://crates.io/crates/supercov)] - 面向编程代理的代码质量与测试覆盖率：Jev 为每个源文件评分，让代理知道优先修复什么 [![CI](https://github.com/supercorp-ai/supercov/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/supercorp-ai/supercov/actions)
  * [tarpaulin](https://crates.io/crates/cargo-tarpaulin) - 代码覆盖率工具
* 持续集成
  * [trust](https://github.com/japaric/trust) - Travis CI 与 AppVeyor 模板，在 5 种架构测试 Rust crate，并发布 Linux、macOS 和 Windows 二进制版本
* 框架与运行器
  * [AlKass/polish](https://github.com/AlKass/polish) - 小型测试/测试驱动框架 [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
  * [bitfield/cargo-testdox](https://github.com/bitfield/cargo-testdox) [[cargo-testdox](https://crates.io/crates/cargo-testdox)] - 将 Rust 测试转化为文档 [![CI](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml)
  * [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - 简化在智能手机及其他小型处理器设备上运行库测试与基准测试的 Cargo 扩展。
  * [cucumber](https://crates.io/crates/cucumber) [![Latest Version](https://img.shields.io/crates/v/cucumber.svg)](https://crates.io/crates/cucumber) - Cucumber 测试框架的 Rust 实现，完全原生，无外部测试运行器或依赖。 [![Build Status](https://github.com/cucumber-rs/cucumber/actions/workflows/ci.yml/badge.svg)](https://github.com/cucumber-rs/cucumber/actions)
  * [d-e-s-o/test-log](https://github.com/d-e-s-o/test-log) [[test-log](https://crates.io/crates/test-log)] - `#[test]` 属性的替代品，在运行测试前初始化日志和/或追踪基础设施。 [![GitHub Workflow Status](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml)
  * [demonstrate](https://crates.io/crates/demonstrate) - 声明式测试框架
  * [GoogleTest Rust](https://crates.io/crates/googletest) - 基于 C++ 测试库 GoogleTest 的强大测试断言框架 [![Build Status](https://github.com/google/googletest-rust/workflows/CI/badge.svg)](https://github.com/google/googletest-rust/actions?query=workflow%3ACI+branch%3Amain)
  * [hovinen/test-that](https://github.com/hovinen/test-that) [[test-that](https://crates.io/crates/test-that)] - 基于 GoogleTest Rust、由其原作者开发的 Rust 断言库。 [![Build Status](https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg)](https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain)
  * [mitsuhiko/insta](https://github.com/mitsuhiko/insta) [[insta](https://crates.io/crates/insta)] - Rust 快照测试库。 [![Build Status](https://github.com/mitsuhiko/insta/workflows/Tests/badge.svg)](https://github.com/mitsuhiko/insta/actions)
  * [nextest-rs/nextest](https://github.com/nextest-rs/nextest) [[cargo-nextest](https://crates.io/crates/cargo-nextest)] - 下一代 Rust 测试运行器，支持并行执行、更快测试、高级过滤和丰富输出。 [![cargo-nextest on crates.io](https://img.shields.io/crates/v/cargo-nextest)](https://crates.io/crates/cargo-nextest)
  * [padamson/playwright-rust](https://github.com/padamson/playwright-rust) [[playwright-rs](https://crates.io/crates/playwright-rs)] - Microsoft Playwright 的 Rust 绑定：跨浏览器端到端测试（Chromium、Firefox、WebKit），支持自动等待定位器和追踪捕获。 [![CI](https://github.com/padamson/playwright-rust/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/padamson/playwright-rust/actions/workflows/test.yml)
  * [palfrey/serial_test](https://github.com/palfrey/serial_test) [[serial_test](https://crates.io/crates/serial_test)] - 串行运行测试，可整体运行或按命名组运行 [![CI](https://github.com/palfrey/serial_test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/palfrey/serial_test/actions/workflows/ci.yml)
  * [rlt](https://github.com/wfxr/rlt) - 通用负载测试框架，支持实时 TUI。
  * [rstest](https://crates.io/crates/rstest) - 基于夹具的测试框架 [![Build Status](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
  * [speculate](https://crates.io/crates/speculate) - 受 RSpec 启发的极简测试框架
* 模拟与测试数据
  * [asomers/mockall](https://github.com/asomers/mockall) [[mockall](https://crates.io/crates/mockall)] - 强大的模拟对象库。 [![CI](https://github.com/asomers/mockall/actions/workflows/ci.yml/badge.svg)](https://github.com/asomers/mockall/actions/workflows/ci.yml)
  * [bcheidemann/fixtures-rs](https://github.com/bcheidemann/fixtures-rs/tree/main/fixtures) [[fixtures](https://crates.io/crates/fixtures)] - 使用 glob 模式从夹具生成测试的过程宏
  * [fake-rs](https://github.com/cksac/fake-rs) - 生成虚假数据的库
  * [goldenfile](https://github.com/calder/rust-goldenfile) [[goldenfile](https://crates.io/crates/goldenfile)] - 为黄金文件测试提供简单 API 的库。
  * [httpmock](https://github.com/httpmock/httpmock) - HTTP 模拟 [![Build](https://github.com/httpmock/httpmock/actions/workflows/build.yml/badge.svg)](https://github.com/httpmock/httpmock/actions/workflows/build.yml)
  * [mockiato](https://crates.io/crates/mockiato) - 面向不稳定版 Rust 2018、严格而友好的模拟库
  * [mockito](https://crates.io/crates/mockito) - HTTP 模拟
  * [mocktail](https://github.com/IBM/mocktail) [![mocktail](https://img.shields.io/crates/v/mocktail)](https://crates.io/crates/mocktail) - Rust 的 HTTP 与 gRPC 服务器模拟 ![build](https://github.com/IBM/mocktail/actions/workflows/build.yml/badge.svg)
  * [nrxus/faux](https://github.com/nrxus/faux/) [![Latest Version](https://img.shields.io/crates/v/faux.svg)](https://crates.io/crates/faux) - 从结构体创建模拟对象的库。 ![build](https://github.com/nrxus/faux/workflows/test/badge.svg?branch=master)
  * [synth](https://github.com/shuttle-hq/synth/) - 声明式生成数据库数据。 [![build](https://github.com/shuttle-hq/synth/actions/workflows/synth-test.yml/badge.svg)](https://github.com/shuttle-hq/synth)
* 变异测试
  * [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) [[cargo-mutants](https://crates.io/crates/cargo-mutants)] - 注入变异找出测试不足的代码，无需修改源码。 [![build badge](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml/badge.svg?branch=main&event=push)](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml?query=branch%3Amain)
  * [mutagen](https://github.com/llogiq/mutagen) [[mutagen](https://crates.io/crates/mutagen)] - 源码级变异测试框架（仅限每夜版）
* 属性测试与模糊测试
  * [Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident) - Solana 智能合约模糊测试框架，支持人工引导测试、基于流程的序列和基于属性的验证
  * [proptest](https://crates.io/crates/proptest) - 受 Python [Hypothesis](https://hypothesis.works/) 框架启发的属性测试框架
  * [quickcheck](https://crates.io/crates/quickcheck) - [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1) 的 Rust 实现
  * [rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) - 使用 [AFL](https://lcamtuf.coredump.cx/afl/) 的 Rust 模糊测试器

### 转译

* [aleph-lang/aleph_ollama](https://github.com/aleph-lang/aleph_ollama) [[aleph_ollama](https://crates.io/crates/aleph_ollama)] - 使用本地 Ollama API 的 AI 驱动源码翻译工具。
* [BayesWitnesses/m2cgen](https://github.com/BayesWitnesses/m2cgen) - 将训练好的经典机器学习模型转译为零依赖原生 Rust 代码的 CLI 工具。
* [immunant/c2rust](https://github.com/immunant/c2rust) - 基于 Clang/LLVM 的 C 到 Rust 翻译器与交叉检查器。
* [jameysharp/corrode](https://github.com/jameysharp/corrode) - 使用 Haskell 编写的 C 到 Rust 翻译器。

### 隧道

* [ekzhang/bore](https://github.com/ekzhang/bore) [[bore-cli](https://crates.io/crates/bore-cli)] - 将本地端口暴露到远程服务器、绕过 NAT 防火墙的简单 TCP 隧道 [![Build status](https://img.shields.io/github/actions/workflow/status/ekzhang/bore/ci.yml)](https://github.com/ekzhang/bore/actions)
* [joaoh82/rustunnel](https://github.com/joaoh82/rustunnel) - 自托管安全隧道服务器，通过 TLS 加密的 WebSocket 与 yamux 多路复用暴露本地 HTTP/HTTPS/TCP/UDP 服务，支持多区域、Prometheus 指标和供 AI 代理使用的 MCP 服务器。
* [ngrok/ngrok-rust](https://github.com/ngrok/ngrok-rust) [[ngrok-rust](https://crates.io/crates/ngrok)] - ngrok 是安全地将本地应用暴露到互联网的开发工具。
* [rathole-org/rathole](https://github.com/rathole-org/rathole) - 用于 NAT 穿透的安全高性能反向代理，支持 Noise Protocol/TLS 加密与配置热重载 ![CI](https://img.shields.io/github/actions/workflow/status/rathole-org/rathole/rust.yml?branch=main)

## 库

* [perf-monitor-rs](https://github.com/larksuite/perf-monitor-rs) - 为应用性能监控提供基础的工具包。 [![crates.io](https://img.shields.io/crates/v/perf_monitor.svg)](https://crates.io/crates/perf_monitor)

### 人工智能

#### 遗传算法

* [innoave/genevo](https://github.com/innoave/genevo) - 以可定制、可扩展方式执行遗传算法（GA）模拟。
* [m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) - 遗传算法库，目前处于维护模式。
* [Martin1887/oxigen](https://github.com/Martin1887/oxigen) - 快速、并行、可扩展且适应性强的遗传算法库。示例仅用几秒、不到 1 MB RAM 即可求解 N = 255 的 N 皇后问题。
* [pkalivas/radiate](https://github.com/pkalivas/radiate) - 可定制并行遗传编程引擎，可演化监督、无监督和强化学习问题的解，附带完整可定制的 NEAT 和 Evtree 实现。![Crates.io](https://img.shields.io/crates/v/radiate)
* [willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) - 演化算法

#### Google Gemini

* [gemini-client-api](https://crates.io/crates/gemini-client-api) - 使用 Google Gemini API 的库，支持自动上下文管理、模式生成、函数调用等。

#### 机器学习

参见[[机器学习](https://crates.io/keywords/machine-learning)]

另见[关于 Rust 的机器学习社区](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f)以及 [Are we learning yet?](https://www.arewelearningyet.com)。

* [autumnai/leaf](https://github.com/autumnai/leaf) - 开放机器智能框架。已停止开发，最新的分支是 [juice](https://github.com/fff-rs/juice)。
* [ave-sergeev/tictonix](https://github.com/Ave-Sergeev/Tictonix) [[tictonix](https://crates.io/crates/tictonix)] - 将 token 转换为嵌入并编码位置的库。
* [blackportal-ai/delta](https://github.com/blackportal-ai/delta) - Δ 使用 Rust 编写的开源机器学习框架。 ![crates.io](https://img.shields.io/crates/v/deltaml.svg) ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/delta/core.yml?branch=master)
* [blackportal-ai/nebula](https://github.com/blackportal-ai/nebula) - 机器学习数据集与模型包管理器。 ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/nebula/core.yml?branch=master)
* [burn](https://github.com/tracel-ai/burn) - 灵活全面的深度学习框架。
* [chelsea0x3b/dfdx](https://github.com/chelsea0x3b/dfdx) - 利用 Rust 多种独特功能的 CUDA 加速机器学习框架。 ![Crates.io](https://img.shields.io/crates/v/dfdx)
* [EricLBuehler/mistral.rs](https://github.com/EricLBuehler/mistral.rs) [[mistralrs](https://crates.io/crates/mistralrs)] - 快速灵活的 LLM 推理引擎，支持多模态模型、量化（GGUF/GPTQ/ISQ）及兼容 OpenAI 的 API
* [guillaume-be/rust-bert](https://github.com/guillaume-be/rust-bert) [[rust_bert](https://crates.io/crates/rust_bert)] - 开箱即用的 NLP 管道与语言模型
* [huggingface/candle](https://github.com/huggingface/candle) [[candle-core](https://crates.io/crates/candle-core)] - 注重易用性与性能的极简机器学习框架（支持 GPU）
* [huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Hugging Face 的现代 NLP 管道分词器（原始实现），提供 Python 绑定。 [![Build Status](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [katanemo/plano](https://github.com/katanemo/plano) - 代理式应用的 AI 原生代理服务器与数据平面。
* [LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) - PyTorch 绑定。
* [luminal-ai/luminal](https://github.com/luminal-ai/luminal) [[luminal](https://crates.io/crates/luminal)] - 高性能通用推理编译器，采用 RISC 风格架构、基于搜索的优化和原生 CUDA/Metal 后端，支持 Transformer、卷积网络和自动求导。 [![CI Status](https://img.shields.io/github/actions/workflow/status/luminal-ai/luminal/test-core.yml?style=for-the-badge&logo=github-actions&logoColor=white&branch=main)](https://github.com/luminal-ai/luminal/actions)
* [maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) - 机器学习库。 [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy) [[shimmy](https://crates.io/crates/shimmy)] - 纯 Rust WebGPU 推理引擎，提供兼容 OpenAI 的 API 和原生 GGUF 支持。
* [Michael-A-Kuykendall/shimmytok](https://github.com/Michael-A-Kuykendall/shimmytok) [[shimmytok](https://crates.io/crates/shimmytok)] - GGUF 模型的纯 Rust 分词器，兼容 llama.cpp 分词。
* [Mottl/lightgb3-rs](https://github.com/Mottl/lightgbm3-rs) - LightGBM 绑定 [![Crates.io](https://img.shields.io/crates/v/lightgbm3.svg)](https://crates.io/crates/lightgbm3) [![build](https://github.com/Mottl/lightgbm3-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/Mottl/lightgbm3-rs/actions)
* [nobodywho-ooo/nobodywho](https://github.com/nobodywho-ooo/nobodywho) - 直接嵌入游戏和应用的设备端 LLM 推理引擎，无需服务器或 API 密钥。支持流式生成、嵌入、GBNF 语法约束结构化输出和 Whisper 语音转文本，并提供 Godot、Flutter、React Native 和 Swift 绑定。
* [openinfer-project/openinfer](https://github.com/openinfer-project/openinfer) - 纯 Rust + CUDA LLM 推理引擎，无 PyTorch、无 Python 运行时——兼容 OpenAI 的 API、分页 KV 缓存、CUDA Graph，支持从 Qwen3 到万亿参数 Kimi-K2 的模型服务。
* [perpetual-ml/perpetual](https://github.com/perpetual-ml/perpetual) [[perpetual](https://crates.io/crates/perpetual)] - 无需超参数优化的自泛化梯度提升机。
* [ramsyana/RustTensor](https://github.com/ramsyana/RustTensor) - 面向学习、从零用 Rust 构建的高性能张量计算库，支持自动微分和 CPU/CUDA 后端。
* [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) - 高性能 Graph-RAG 框架，将文档转化为智能知识图谱。
* [rust-ml/linfa](https://github.com/rust-ml/linfa) - 机器学习框架。
* [sipemu/anofox-regression](https://github.com/sipemu/anofox-regression) [[anofox-regression](https://crates.io/crates/anofox-regression)] - 统计回归模型（OLS、Elastic Net、GLM、分位数与保序回归），提供类似 R 的推断（p 值、置信区间与预测区间）及 Wasm 支持。
* [smartcorelib/smartcore](https://github.com/smartcorelib/smartcore) - 机器学习库 [] [![Build Status](https://img.shields.io/circleci/build/github/smartcorelib/smartcore)]
* [tag1consulting/feste](https://github.com/tag1consulting/feste) - 为教学从零用 Rust 实现的 GPT-2 风格 Transformer 语言模型。
* [tensorflow/rust](https://github.com/tensorflow/rust) - TensorFlow 绑定。

#### OpenAI

* [0xplaygrounds/rig](https://github.com/0xplaygrounds/rig) - 创建代理和模块化、可扩展 LLM 应用的库
* [64bit/async-openai](https://github.com/64bit/async-openai) [[async-openai](https://crates.io/crates/async-openai)] - 基于 OpenAPI 规范、易用的 OpenAI API Rust 绑定。
* [awakenworks/awaken](https://github.com/awakenworks/awaken) [[awaken](https://crates.io/crates/awaken)] - Rust AI 代理运行时——类型安全状态、多协议服务和插件扩展。
* [bigduu/Bamboo-agent](https://github.com/bigduu/Bamboo-agent) [[bamboo-agent](https://crates.io/crates/bamboo-agent)] - 本地优先 AI 代理框架与运行时——通过统一 HTTP + WebSocket API 提供持久记忆、内置工具、技能、MCP、子代理、工作流和日程。可嵌入为 crate 或作为服务器运行。
* [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) [[AutoAgents](https://crates.io/crates/autoagents)] - 构建 AI 代理的多代理框架，原生支持边缘端。
* [openai/codex](https://github.com/openai/codex) - Codex CLI 是 OpenAI 提供的本地运行编程代理。
* [openai/harmony](https://github.com/openai/harmony) [[openai-harmony](https://crates.io/crates/openai-harmony/0.0.3)] - 用于 gpt-oss 的 Harmony 响应格式渲染器。
* [xberg-io/liter-llm](https://github.com/xberg-io/liter-llm) [[liter-llm](https://crates.io/crates/liter-llm)] - 面向 142 个以上提供商的通用 LLM API 客户端，提供统一接口、流式处理及 11 种语言的原生绑定。
* [zurawiki/tiktoken-rs](https://github.com/zurawiki/tiktoken-rs) [[tiktoken-rs](https://crates.io/crates/tiktoken-rs)] - 使用 tiktoken 对 OpenAI 模型文本分词的库。 [![CI](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml)

#### 工具

* [BAML](https://github.com/BoundaryML/baml) - 构建可靠 AI 工作流和代理的简单提示语言。BAML 编译器使用 Rust 编写！
* [Cortex Memory](https://github.com/sopaco/cortex-mem) - 完整的代理记忆方案，从提取、向量搜索到自动优化和开箱即用的洞察仪表板。
* [juyterman1000/entroly](https://github.com/juyterman1000/entroly) - 基于信息论的上下文工程引擎，通过强化学习智能裁剪并选择最优 RAG 片段。
* [memvid/memvid](https://github.com/memvid/memvid) [[memvid-core](https://crates.io/crates/memvid-core)] - AI 代理的单文件便携记忆层，在一个 `.mv2` 文件中集成向量搜索、全文搜索和长期回忆
* [pydantic/monty](https://github.com/pydantic/monty) - 用于在 AI 代理中运行 LLM 生成代码的极简安全 Python 解释器，支持微秒级启动、严格沙箱和快照 [![CI](https://github.com/pydantic/monty/actions/workflows/ci.yml/badge.svg)](https://github.com/pydantic/monty/actions/workflows/ci.yml)
* [tenequm/pond](https://github.com/tenequm/pond) [[pond-db](https://crates.io/crates/pond-db)] - 跨十二种编程代理客户端无损存储与搜索 AI 代理会话，基于本地目录或 S3 存储桶上的 Lance，通过 CLI、HTTP、MCP 和只读 SQL 提供 BM25 及可选向量检索 [![build badge](https://github.com/tenequm/pond/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenequm/pond/actions/workflows/ci.yml)

### 天文学

[[天文学](https://crates.io/keywords/astronomy)]

* [cds-astro/aladin-lite](https://github.com/cds-astro/aladin-lite) - 以不同投影可视化空间和行星图像巡天数据的 Web 应用
* [fitsio](https://crates.io/crates/fitsio) - 封装 cfitsio 的 FITS 接口库
* [flosse/rust-sun](https://github.com/flosse/rust-sun) [[sun](https://crates.io/crates/sun)] - JS 库 suncalc 的 Rust 移植
* [saurvs/astro-rust](https://github.com/saurvs/astro-rust) - 天文学

### 异步

* [async-std](https://async.rs/) [[async-std](https://crates.io/crates/async-std)] - Rust 标准库的异步版本 [![CI](https://github.com/async-rs/async-std/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/async-rs/async-std/actions/workflows/ci.yml)
* [dagrs](https://github.com/dagrs-dev/dagrs) - 遵循流式编程理念的高性能异步任务编程框架。
* [dpc/mioco](https://github.com/dpc/mioco) - 可扩展、基于协程的异步 IO 处理库
* [igumnoff/gabriel2](https://github.com/igumnoff/gabriel2) [[gabriel2](https://crates.io/crates/gabriel2)] - Gabriel2：基于 Tokio 的 Actor 模型库
* [iii-hq/iii](https://github.com/iii-hq/iii) [[iii-sdk](https://crates.io/crates/iii-sdk)] - 分布式运行时，通过 Worker-Function-Trigger 原语组合服务。提供实时目录、可追踪函数调用和多语言 SDK（Rust、Node.js、Python）。引擎使用 Rust 编写（ELv2），SDK 采用 Apache 2.0。
* [mio](https://github.com/tokio-rs/mio) - MIO 是轻量 IO 库，专注于尽量减少相对于操作系统抽象的额外开销
* [nextest-rs/future-queue](https://github.com/nextest-rs/future-queue) [[future-queue](https://crates.io/crates/future-queue)] - 并发运行 Future 的流适配器，支持加权并发限制及可选分组限制。
* [rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) - 零成本 Future
* [t3hmrman/async-dropper](https://github.com/t3hmrman/async-dropper) [[async-dropper](https://crates.io/crates/async-dropper)] - `AsyncDrop` 的实现
* [TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) - Rust 的 Monad/MonadIO、Handler、Coroutine/doNotation 和函数式编程功能
* [tokio-rs/tokio](https://github.com/tokio-rs/tokio) - 使用 Rust 编写可靠、异步、精简应用的运行时。
* [tqwewe/kameo](https://github.com/tqwewe/kameo) - 基于 Tokio 的容错异步 Actor
* [Xudong-Huang/may](https://github.com/Xudong-Huang/may) - 有栈协程库
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - 具备工作窃取调度器的协程 I/O 库

### 音频与音乐

[[音频](https://crates.io/keywords/audio)]

* [aschey/stream-download-rs](https://github.com/aschey/stream-download-rs) [[stream-download](https://crates.io/crates/stream-download)] - 音频、视频及其他媒体内容的流式传输库 [![build badge](https://github.com/aschey/stream-download-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/aschey/stream-download-rs/actions)
* [hound](https://crates.io/crates/hound) - WAV 编码与解码库
* [insomnimus/nodi](https://github.com/insomnimus/nodi) [[nodi](https://crates.io/crates/nodi)] - MIDI 文件播放与抽象库。 [![build badge](https://github.com/insomnimus/nodi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/nodi/actions)
* [jhasse/ears](https://github.com/jhasse/ears) - 基于 OpenAL 和 libsndfile 播放声音与音乐的简单库
* [musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) - [PortMidi](https://portmedia.sourceforge.net/portmidi/) 绑定
* [ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) - 乐理库
* [pdeljanov/Symphonia](https://github.com/pdeljanov/Symphonia) - 音频解码与媒体解复用库，支持 AAC、FLAC、MP3、MP4、OGG、Vorbis 和 WAV。
* [RustAudio](https://github.com/RustAudio)
  * [RustAudio/cpal](https://github.com/RustAudio/cpal) - 底层跨平台音频 I/O 库。 [![Actions Status](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [RustAudio/rodio](https://github.com/RustAudio/rodio) - 音频播放库
  * [RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) - PortAudio 绑定
* [Serial-ATA/lofty-rs](https://github.com/Serial-ATA/lofty-rs) [[lofty](https://crates.io/crates/lofty)] - 读取和编辑多种音频格式元数据的库 [![build badge](https://github.com/Serial-ATA/lofty-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Serial-ATA/lofty-rs/actions)

### 身份验证

* [constantoine/totp-rs](https://github.com/constantoine/totp-rs) [[totp-rs](https://crates.io/crates/totp-rs)] - 生成和验证基于 TOTP 令牌的双因素身份验证库 ![Build Status](https://github.com/constantoine/totp-rs/workflows/Rust/badge.svg)
* [GunduLabs/gaze](https://github.com/GunduLabs/gaze) - Linux 人脸身份验证，提供设备端人脸识别、PAM 集成，以及登录、锁屏、sudo 和桌面管理工具。 [![CI](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml)
* [Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) - [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) 库
* [oauth2](https://github.com/ramosbugs/oauth2-rs) - 可扩展的强类型 OAuth2 客户端库
* [oxide-auth](https://github.com/197g/oxide-auth) - 可结合 Actix 或其他前端使用的 OAuth2 服务器库，提供可配置、可插拔后端 [![CI](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml)
* [sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) - 管理与编排 JWT 工作流的异步库
* [tenuo-ai/tenuo](https://github.com/tenuo-ai/tenuo) [[tenuo](https://crates.io/crates/tenuo)] - 面向 AI 代理的基于能力授权。签名授权凭据限定工具调用和参数范围，委托时只能收窄 [![CI](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml)
* [yup-oauth2](https://github.com/dermesser/yup-oauth2) - 提供设备、已安装应用与服务账户流程的 OAuth2 客户端实现

### 汽车

* [idletea/tokio-socketcan](https://github.com/idletea/tokio-socketcan) [[tokio-socketcan](https://crates.io/crates/tokio-socketcan)] - 基于 socketcan crate 为 Tokio 提供 Linux SocketCAN 支持
* [marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] - Tokio 的 Linux SocketCAN BCM 支持
* [mbr/socketcan](https://github.com/socketcan-rs/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] - Linux SocketCAN 库
* [oxibus/can-dbc](https://github.com/oxibus/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] - DBC 格式解析器
* [Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] - LIN 总线驱动 trait 与协议实现 [![build badge](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)

### 生物信息学

* [polars-bio](https://github.com/biodatageeks/polars-bio) - 在 Python DataFrame 上执行极速生物信息学操作 ![PyPI - Version](https://img.shields.io/pypi/v/polars-bio)
* [Rust-Bio](https://github.com/rust-bio) - 生物信息学库。

### 缓存

* [06chaynes/http-cache](https://github.com/06chaynes/http-cache) [[http-cache](https://crates.io/crates/http-cache)] - 遵循 HTTP 缓存规则的缓存中间件 [![build badge](https://github.com/06chaynes/http-cache/workflows/http-cache/badge.svg)](https://github.com/06chaynes/http-cache/actions/workflows/http-cache.yml)
* [aisk/rust-memcache](https://github.com/aisk/rust-memcache) - Memcached 客户端库
* [al8n/stretto](https://github.com/al8n/stretto) - 高性能、线程安全、内存容量受限的缓存 [![build badge](https://github.com/al8n/stretto/actions/workflows/ci.yml/badge.svg)](https://github.com/al8n/stretto/actions/workflows/ci.yml)
* [hit-box/hitbox](https://github.com/hit-box/hitbox) - 声明式缓存编排框架，提供 HTTP 中间件和多层后端 [![CI](https://github.com/hit-box/hitbox/actions/workflows/CI.yml/badge.svg)](https://github.com/hit-box/hitbox/actions/workflows/CI.yml)
* [jaemk/cached](https://github.com/jaemk/cached) - 简单函数缓存/记忆化
* [kunobi-ninja/kache](https://github.com/kunobi-ninja/kache) [[kache](https://crates.io/crates/kache)] - Rust 和 C/C++ 的内容寻址编译器缓存（[网站](https://ninja.kunobi.com/kache)） [![CI](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml)
* [moka-rs/moka](https://github.com/moka-rs/moka) - 受 Java Caffeine 库启发的高性能并发缓存库 [![build badge](https://github.com/moka-rs/moka/workflows/CI/badge.svg)](https://github.com/moka-rs/moka/actions/workflows/CI.yml)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - 共享编译缓存，出色的编译体验
* [salsa-rs/salsa](https://github.com/salsa-rs/salsa) [[salsa](https://crates.io/crates/salsa)] - 采用记忆化查询的按需增量计算通用框架，受 rustc 查询系统启发。 [![Test](https://github.com/salsa-rs/salsa/workflows/Test/badge.svg)](https://github.com/salsa-rs/salsa/actions?query=workflow%3ATest)
* [zkat/cacache-rs](https://github.com/zkat/cacache-rs) - 高性能、并发、内容寻址磁盘缓存，针对异步 API 优化 [![build badge](https://github.com/zkat/cacache-rs/workflows/CI/badge.svg)](https://github.com/zkat/cacache-rs/actions/workflows/ci.yml)

### 云

* AWS [[aws](https://crates.io/keywords/aws)]
  * [aws/aws-lambda-rust-runtime](https://github.com/aws/aws-lambda-rust-runtime) [[lambda_runtime](https://crates.io/crates/lambda_runtime)] - AWS Lambda 运行时 [![build badge](https://github.com/aws/aws-lambda-rust-runtime/workflows/Rust/badge.svg)](https://github.com/aws/aws-lambda-rust-runtime/actions)
  * [awslabs/aws-sdk-rust](https://github.com/awslabs/aws-sdk-rust) - 新的 AWS SDK
  * [faiscadev/fakecloud](https://github.com/faiscadev/fakecloud) [[fakecloud](https://crates.io/crates/fakecloud)] - 用于开发和测试的本地 AWS 云模拟器。 [![CI](https://github.com/faiscadev/fakecloud/workflows/CI/badge.svg?branch=main)](https://github.com/faiscadev/fakecloud/actions)
  * [rusoto/rusoto](https://github.com/rusoto/rusoto) - Rust 的 AWS SDK
* Azure
  * [Azure/azure-sdk-for-rust](https://github.com/Azure/azure-sdk-for-rust) - 官方 Azure Rust SDK
* 负载均衡器
  * [Convey](https://github.com/bparli/convey) - 支持动态配置加载的第四层负载均衡器。
* 多云
  * [Qovery/engine](https://github.com/Qovery/engine) - 抽象层库，在几分钟内轻松将应用部署到云提供商

### 命令行

* 参数解析
  * [aisk/rust-fire](https://github.com/aisk/rust-fire) [[fire](https://crates.io/crates/fire)] - 一行代码将函数变为命令行应用 [![CI](https://github.com/aisk/rust-fire/actions/workflows/ci.yml/badge.svg)](https://github.com/aisk/rust-fire/actions/workflows/ci.yml)
  * [clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] - 易用、功能完整的命令行参数解析器
  * [cliparser](https://crates.io/crates/cliparser) - 简单命令行解析器。 [![build badge](https://github.com/sagiegurari/cliparser/actions/workflows/ci.yml/badge.svg)](https://github.com/sagiegurari/cliparser/actions)
  * [docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] - DocOpt 的实现
  * [google/argh](https://github.com/google/argh) [[argh](https://crates.io/crates/argh)] - 有明确设计主张、基于 Derive、针对代码大小优化的参数解析器 [![build badge](https://github.com/google/argh/workflows/Argh/badge.svg?branch=master)](https://github.com/google/argh/actions)
  * [killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] - 快速构建酷炫 CLI 应用
  * [ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] - 极简 CLI 框架 [![Build status](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] - 通过定义结构体解析命令行参数
* 数据可视化
  * [nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] - CLI 工具的精美动态表格。 [![Build status](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [zhiburt/tabled](https://github.com/zhiburt/tabled) [[tabled](https://crates.io/crates/tabled)] - 易于使用的库，漂亮打印结构体和枚举的表格。 [![Build Status](https://github.com/zhiburt/tabled/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/tabled/actions)
* 以人为本的设计
  * [rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] - 易于理解的 panic 消息
* 行编辑器
  * [kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] - readline 实现
  * [MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] - 提供类似 readline 功能的库
  * [murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] - 可配置、可扩展的交互式行读取器
  * [nushell/reedline](https://github.com/nushell/reedline) [[reedline](https://crates.io/crates/reedline)] - 为 Nushell 提供支持的功能丰富行编辑器。支持语法高亮、Tab 补全、多行、历史、Vi/Emacs 键位和 Unicode。 [![Crates.io](https://img.shields.io/crates/v/reedline)](https://crates.io/crates/reedline)
  * [srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] - 命令行编辑库
* 其他
  * [mgrachev/update-informer](https://github.com/mgrachev/update-informer) [[update-informer](https://crates.io/crates/update-informer)] - CLI 应用更新提示器，检查 Crates.io 和 GitHub 上的新版本 [![build badge](https://github.com/mgrachev/update-informer/workflows/CI/badge.svg)](https://github.com/mgrachev/update-informer/actions)
* 管道
  * [hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] - 与外部管道交互的功能
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] - 将输出通过管道传给外部分页器
  * [oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] - 子进程管道与 IO 重定向构建器
  * [rust-cli/rexpect](https://github.com/rust-cli/rexpect) [[rexpect](https://crates.io/crates/rexpect)] - 自动操作 SSH、FTP、passwd 等交互式应用 [![CI](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml)
  * [zhiburt/expectrl](https://github.com/zhiburt/expectrl) [[expectrl](https://crates.io/crates/expectrl)] - 在伪终端中控制交互式程序的库 [![build badge](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml)
* 进度
  * [a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] - 控制台进度条
  * [clitic/kdam](https://github.com/clitic/kdam) [[kdam](https://crates.io/crates/kdam)] - 受 tqdm 与 rich.progress 启发的控制台进度条库 [![CI](https://github.com/clitic/kdam/actions/workflows/tests.yml/badge.svg)](https://github.com/clitic/kdam/actions/workflows/tests.yml)
  * [console-rs/indicatif](https://github.com/console-rs/indicatif) [[indicatif](https://crates.io/crates/indicatif)] - 向用户显示进度
  * [etienne-napoleone/spinach](https://github.com/etienne-napoleone/spinach) [[spinach](https://crates.io/crates/spinach)] - 实用的旋转进度指示器。 [![CI](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml/badge.svg)](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml)
  * [FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] - 60 多种优雅终端旋转进度指示器
  * [vyfor/rattles](https://github.com/vyfor/rattles) [[rattles](https://crates.io/crates/rattles)] - 极简、无依赖的终端旋转进度指示器库。
* 提示
  * [hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)] - 构建交互式命令提示
  * [mikaelmello/inquire](https://github.com/mikaelmello/inquire) [[inquire](https://crates.io/crates/inquire)] - 在终端中构建交互式提示的库。 [![Build status](https://github.com/mikaelmello/inquire/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/mikaelmello/inquire/actions)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)] - 面向任意 Shell 的极简、极速且高度可定制提示符 [![Build status](https://github.com/starship/starship/actions/workflows/workflow.yml/badge.svg)](https://github.com/starship/starship/actions)
  * [ynqa/promkit](https://github.com/ynqa/promkit) [[promkit](https://crates.io/crates/promkit)] - 构建交互式命令行工具的工具包 [![ci](https://github.com/ynqa/promkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/promkit/actions/workflows/ci.yml)
* 样式
  * [colored](https://github.com/colored-rs/colored) [[colored](https://crates.io/crates/colored)] - 终端着色如此简单，你已经知道怎么做！
  * [console-rs/dialoguer](https://github.com/console-rs/dialoguer) [[dialoguer](https://crates.io/crates/dialoguer)] - 命令行提示及类似功能的库。
  * [LukasKalbertodt/bunt](https://github.com/LukasKalbertodt/bunt) [[bunt](https://crates.io/crates/bunt)] - 使用宏提供跨平台终端颜色与样式 [![Build status](https://github.com/LukasKalbertodt/bunt/actions/workflows/ci.yml/badge.svg)](https://github.com/LukasKalbertodt/bunt/actions?query=workflow%3ACI+branch%3Amaster)
  * [LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] - 跨平台带样式终端输出
  * [ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] - 控制 ANSI 终端中的颜色和格式
  * [SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] - 极其简单的 ANSI 终端着色库
* TUI
  * [AppCUI](https://github.com/gdt050579/AppCUI-rs) [[appcui](https://crates.io/crates/appcui)] - 功能完整的跨平台 Rust TUI/CUI 框架，内置组件、布局控制、动画、Unicode 和主题支持。
  * BearLibTerminal
    * [cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] - [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal) 绑定
  * [ccbrown/iocraft](https://github.com/ccbrown/iocraft) [[iocraft](https://crates.io/crates/iocraft)] - 打造精美、手工雕琢的 CLI、TUI 和文本 IO 的 crate。 [![Build status](https://github.com/ccbrown/iocraft/actions/workflows/commit.yaml/badge.svg?branch=main)](https://github.com/ccbrown/iocraft/actions) [![docs.rs](https://img.shields.io/docsrs/iocraft)](https://docs.rs/iocraft/)
  * [gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] - 构建丰富的 TUI 应用
  * [ivanceras/titik](https://github.com/ivanceras/titik) - 跨平台 TUI 组件库，旨在提供交互式组件
  * ncurses
    * [ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] - curses 库，支持 Linux 和 Windows
    * [jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] - [ncurses](https://invisible-island.net/ncurses/ncurses.html) 绑定
  * [ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] - 将内容放入网格的库
  * [ratatui-org/ratatui](https://github.com/ratatui/ratatui) [[ratatui](https://crates.io/crates/ratatui)] - 专为构建终端用户界面（TUI）的库
  * [redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] - 控制终端/TTY 的无绑定库
  * [ruterm](https://crates.io/crates/ruterm) - 操作 TTY 的小巧简单库
  * [subinium/SuperLightTUI](https://github.com/subinium/SuperLightTUI) [[superlighttui](https://crates.io/crates/superlighttui)] - 即时模式 TUI 库，提供 50 个以上组件、Flexbox 布局和动画系统 [![CI](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml/badge.svg)](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml)
  * Termbox
    * [gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] - [Termbox](https://github.com/nsf/termbox) 绑定
  * [TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] - 跨平台终端库

### 压缩

* [7z](https://7-zip.org/7z.html)
  * [hasenbanck/sevenz-rust2](https://github.com/hasenbanck/sevenz-rust2) [[sevenz-rust2](https://crates.io/crates/sevenz-rust2)] - 纯 Rust 编写的 7z 解压器/压缩器 [![Rust](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml)
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
  * [dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) - 可选择不使用标准库的 Brotli 解压器
  * [ende76/brotli-rs](https://github.com/ende76/brotli-rs) - Brotli 压缩实现
* bzip2
  * [trifectatechfoundation/bzip2-rs](https://github.com/trifectatechfoundation/bzip2-rs) - [libbz2](https://www.sourceware.org/bzip2/) 绑定
* gzip
  * [zopfli](https://github.com/zopfli-rs/zopfli) [[zopfli](https://crates.io/crates/zopfli)] - Zopfli 压缩算法实现，用于更高质量的 Deflate 或 zlib 压缩
* gzp
  * [sstadick/gzp](https://github.com/sstadick/gzp/) - 多线程编码和解码 Deflate 格式与 Snappy
* LZMA
  * [hasenbanck/lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [[lzma-rust2](https://crates.io/crates/lzma-rust2)] - 从 [tukaani xz for java](https://tukaani.org/xz/java.html) 移植的 LZMA / LZMA2 / LZIP / XZ 压缩 [![Rust](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml)
* miniz
  * [rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) - [miniz](https://code.google.com/archive/p/miniz) 绑定 [![build badge](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* [paxit](https://github.com/roquess/paxit) [[paxit](https://crates.io/crates/paxit)] - 使用多种算法（zip、tar、gzip、xz、zst 等）压缩和解压文件的灵活库，模块化设计便于扩展
* tar
  * [alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) - tar 归档读写
* zip
  * [zip-rs/zip2](https://github.com/zip-rs/zip2) [[zip](https://crates.io/crates/zip)] - 读写 ZIP 归档
* zstd
  * [gyscos/zstd-rs](https://github.com/gyscos/zstd-rs) - zstd 压缩库的 Rust 绑定

### 计算

* [alphaville/optimization-engine](https://github.com/alphaville/optimization-engine) [[optimization-engine](https://crates.io/crates/optimization_engine)] - Optimization Engine（OpEn）是带约束非凸优化问题的求解器 [![Continuous integration](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml)
* [argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] - 优化库
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
  * [mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) - BLAS 绑定
* [calebwin/emu](https://github.com/calebwin/emu) - GPGPU 数值计算语言
* [dimforge/nalgebra](https://github.com/dimforge/nalgebra) - 低维线性代数库
* [faer-rs](https://github.com/sarah-quinones/faer-rs) [[faer](https://crates.io/crates/faer)] - Rust 线性代数基础
* [fastnum](https://github.com/neogenie/fastnum) [fastnum](https://crates.io/crates/fastnum) - 纯 Rust 实现的快速精确十进制数，适用于金融、加密货币及其他定点精度计算。
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez/rust-GSL) - GSL 绑定
* [jolars/basin](https://github.com/jolars/basin) [[basin](https://crates.io/crates/basin)] - 数值优化库，提供一阶、无导数、非线性最小二乘、演化与约束求解器，可泛用于不同线性代数后端 [![CI](https://github.com/jolars/basin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jolars/basin/actions/workflows/ci.yml)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
  * [stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) - LAPACK 绑定
* [ml-rust/numr](https://github.com/ml-rust/numr) [[numr](https://crates.io/crates/numr)] - 受 NumPy 启发的 Rust 数值计算库，具备张量、线性代数、FFT、统计、自动微分和 GPU 加速。 [![CI](https://github.com/ml-rust/numr/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ml-rust/numr/actions/workflows/ci.yml)
* 并行
  * [arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) - [Arrayfire](https://github.com/arrayfire) 绑定
  * [autumnai/collenchyma](https://github.com/autumnai/collenchyma) - 可扩展、可插拔、不依赖后端的并行高性能计算框架，支持 CUDA、OpenCL 和常规主机 CPU。
  * [luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) - [OpenCL](https://www.khronos.org/opencl/) 绑定
* 科学
  * [Axect/Peroxide](https://github.com/Axect/Peroxide) - 纯 Rust 数值库，包含线性代数、数值分析、统计和机器学习工具
  * [cool-japan/scirs](https://github.com/cool-japan/scirs) - 生产就绪的纯 Rust 科学计算，包含线性代数、优化、统计、神经网络等，API 受 Python SciPy 启发。
  * [cpmech/russell](https://github.com/cpmech/russell) - Rust 科学库，支持数值数学、常微分方程、特殊数学函数和高性能（稀疏）线性代数
  * [Nonanti/mathcore](https://github.com/Nonanti/mathcore) - 具备 CAS 能力的符号数学库，支持微分、积分、方程求解和任意精度算术 [![crates.io](https://img.shields.io/crates/v/mathcore.svg)](https://crates.io/crates/mathcore)
  * [Ryan-D-Gast/differential-equations](https://github.com/Ryan-D-Gast/differential-equations) - 数值求解微分方程的高性能库
* Statrs
  * [statrs-dev/statrs](https://github.com/statrs-dev/statrs) - 稳健的统计计算库

### 并发

* [crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) - 支持并行与底层并发
* [NikitaSmithTheOne/rate-limiters-rs](https://github.com/NikitaSmithTheOne/rate-limiters-rs) [[rate-limiters](https://crates.io/crates/rate_limiters)] - Rust 限流库（漏桶、令牌桶、固定/滑动窗口）
* [orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] - 抽象 `Rc`/`Arc` 指针类型的库。 [![build badge](https://github.com/orium/archery/workflows/CI/badge.svg)](https://github.com/orium/archery/actions?query=workflow%3ACI)
* [orx-parallel](https://crates.io/crates/orx-parallel) - 高性能、可配置、富表达力的并行计算库。
* [Rayon](https://github.com/rayon-rs/rayon) - 数据并行库
* [rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) - 协程库
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - 协程 I/O

### 配置

* [andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] - 基于 [libUCL](https://github.com/vstakhov/libucl) 的功能丰富配置库。 [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] - 轻松处理应用配置的库
* [leptonyu/cfg-rs](https://github.com/leptonyu/cfg-rs) [[cfg-rs](https://crates.io/crates/cfg-rs)] - Rust 应用配置库。
* [rust-cli/config-rs](https://github.com/rust-cli/config-rs) [[config](https://crates.io/crates/config)] - 分层配置系统（充分支持十二要素应用）。
* [SergioBenitez/Figment](https://github.com/SergioBenitez/Figment) [[figment](https://crates.io/crates/figment)] - 简单到令人难以置信的配置库。
* [softprops/envy](https://github.com/softprops/envy) - 将环境变量反序列化为类型安全的结构体 [![Main](https://github.com/softprops/envy/actions/workflows/main.yml/badge.svg)](https://github.com/softprops/envy/actions/workflows/main.yml)

### 密码学

[[加密](https://crates.io/keywords/crypto), [密码学](https://crates.io/keywords/cryptography)]

* [arkworks-rs/circom-compat](https://github.com/arkworks-rs/circom-compat) - Circom R1CS 的 Arkworks 绑定，用于生成 Groth16 证明与见证。
* [briansmith/ring](https://github.com/briansmith/ring) - 使用 Rust 与 BoringSSL 密码学原语，提供安全、快速、小巧的加密功能。
* [briansmith/webpki](https://github.com/briansmith/webpki) - Web PKI TLS X.509 证书验证。
* [conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] - 在终端中使用的简单密码管理器
* [cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] - 解决常见数据安全任务的高级密码学库，最适合多平台应用。 [![build badge](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) - 密码学算法
* [dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) - Curve25519 操作
* [debris/tiny-keccak](https://github.com/debris/tiny-keccak) - Keccak 家族（SHA3）
* [dusk-network/bls12-381](https://github.com/dusk-network/bls12_381) - Rust 原生 BLS12-381，增强零知识性能：优化多标量乘法、自定义哈希和 Serde 支持，适合注重隐私的协议与零知识应用。 dusk-bls12_381 ![Build Status](https://github.com/dusk-network/bls12_381/workflows/Continuous%20integration/badge.svg) [[dusk-bls12_381](https://crates.io/crates/dusk-bls12_381)]
* [dusk-network/plonk](https://github.com/dusk-network/plonk/) - 在 BLS12-381 上实现 PLONK zk-SNARK 的高性能 Rust 原生实现，利用自定义门和 KZG10 多项式承诺优化，实现高效零知识证明。 PLONK ![Build Status](https://github.com/dusk-network/plonk/workflows/Continuous%20integration/badge.svg) [[PLONK](https://crates.io/crates/dusk-plonk)]
* [dusk-network/poseidon252](https://github.com/dusk-network/Poseidon252) - Rust 原生的 BLS12-381 Poseidon 哈希；Poseidon252 为 zk-SNARK 效率设计，适合注重隐私的协议与零知识应用。 Poseidon ![Build Status](https://github.com/dusk-network/Poseidon252/workflows/Continuous%20integration/badge.svg) [[Poseidon](https://crates.io/crates/dusk-poseidon)]
* [exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] - 区块链项目的可扩展框架
* [facebook/opaque-ke](https://github.com/facebook/opaque-ke) - 新型 [OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/) 密码认证密钥交换的实现。 [![build badge](https://github.com/facebook/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/facebook/opaque-ke)
* [iddm/randomorg](https://github.com/iddm/randomorg) - random.org 客户端库。 [![Crates badge](https://img.shields.io/crates/v/randomorg.svg)](https://crates.io/crates/randomorg)
* [klutzy/suruga](https://github.com/klutzy/suruga) - [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246) 实现
* [kn0sys/ecc-rs](https://github.com/kn0sys/ecc-rs) - 用于椭圆曲线密码学教程的直观库 [![Crates.io Version](https://img.shields.io/crates/v/kn0syseccrs)](https://crates.io/crates/kn0syseccrs)
* [kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) - Security Framework 的绑定（OSX 原生）
* [libOctavo/octavo](https://github.com/libOctavo/octavo) - 模块化哈希与密码学库
* [orion-rs/orion](https://github.com/orion-rs/orion) - 旨在提供简单易用密码学功能的库。“易用”指提供易于使用、难以误用的高级 API。 [![Tests](https://github.com/orion-rs/orion/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/orion-rs/orion/actions/workflows/test.yml)
* [racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) [[djangohashers](https://crates.io/crates/djangohashers)] - Django 项目所用密码原语的移植，无需 Django，仅按其方式哈希与验证密码。
* [rust-native-tls/rust-native-tls](https://github.com/rust-native-tls/rust-native-tls) - 原生 TLS 库的绑定
* [rust-openssl](https://github.com/rust-openssl/rust-openssl) - [OpenSSL](https://www.openssl.org/) 绑定
* [rust-random/rand](https://github.com/rust-random/rand) [[rand](https://crates.io/crates/rand)] - 全面的随机数生成库，支持强大与小型伪随机数生成器、随机值采样、分布和随机过程。 [![Test Status](https://github.com/rust-random/rand/actions/workflows/test.yml/badge.svg?event=push)](https://github.com/rust-random/rand/actions)
* [RustCrypto/hashes](https://github.com/RustCrypto/hashes) - 密码学哈希函数集合
* [rustls/rustls](https://github.com/rustls/rustls) - TLS 实现
* [schnorrkel](https://github.com/paritytech/schnorrkel) - Ristretto 群上的 Schnorr VRF 与签名
* [sorairolake/abcrypt](https://github.com/sorairolake/abcrypt) [[abcrypt](https://crates.io/crates/abcrypt)] - 简单、现代、安全的文件加密库。 [![CI](https://github.com/sorairolake/abcrypt/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/abcrypt/actions?query=workflow%3ACI)
* [sorairolake/scryptenc-rs](https://github.com/sorairolake/scryptenc-rs) [[scryptenc](https://crates.io/crates/scryptenc)] - scrypt 加密数据格式实现。 [![CI](https://github.com/sorairolake/scryptenc-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/scryptenc-rs/actions?query=workflow%3ACI)
* [suradet-ps/encryptman](https://github.com/suradet-ps/encryptman) [[encryptman](https://crates.io/crates/encryptman)] - 使用 HKDF 密钥派生对应用设置进行 AES-256-GCM 加密 [![CI](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml)
* [verifyfetch](https://github.com/hamzaydia/verifyfetch) - 使用 Rust/WASM SHA-256 哈希进行常量内存流式文件完整性验证，支持浏览器大文件断点续传。

### 数据处理

* [amv-dev/yata](https://github.com/amv-dev/yata) - 高性能技术分析库 [![Build Status](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)
* [AndreaBozzo/dataprof](https://github.com/AndreaBozzo/dataprof) [[dataprof](https://crates.io/crates/dataprof)] - CSV、JSON、Parquet 和 Arrow 的数据剖析与质量门禁，提供 Python 绑定 [![CI](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml)
* [bluss/ndarray](https://github.com/rust-ndarray/ndarray) - N 维数组，支持数组视图、多维切片和高效操作
* [DataBora/elusion](https://github.com/DataBora/elusion) [[elusion](https://crates.io/crates/elusion)] - 基于 DataFusion 的端到端数据工程 DataFrame 库，提供 Microsoft Fabric、Azure、SharePoint、FTP、Postgres、MySQL 和 REST API 连接器
* [datafusion](https://github.com/apache/datafusion) - DataFusion 是极快、可扩展的查询引擎，使用 Apache Arrow 内存格式，用于构建高质量 Rust 数据中心系统。
* [GoPlasmatic/datalogic-rs](https://github.com/GoPlasmatic/datalogic-rs) [[datalogic-rs](https://crates.io/crates/datalogic-rs)] - 高性能、类型安全的 JSONLogic 求值引擎，用于业务规则和动态过滤，提供 Node、WASM、Python、Go、Java、.NET 和 PHP 官方绑定 [![CI](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml)
* [ironcalc/IronCalc](https://github.com/ironcalc/IronCalc) [[ironcalc](https://crates.io/crates/ironcalc)] - 正在开发的新型现代电子表格引擎。
* [kernelmachine/utah](https://github.com/kernelmachine/utah) - DataFrame 结构与操作
* [lakehq/sail](https://github.com/lakehq/sail) - Sail 是使用 Rust 编写、可直接替代 Apache Spark 的工具，统一批处理、流处理和计算密集型 AI 工作负载。
* [logisky/LogiSheets](https://github.com/logisky/LogiSheets) [[logisheets-rs](https://crates.io/crates/logisheets-rs)] - 驱动真实产品的新型现代电子表格引擎。
* [openooxml/betteroffice](https://github.com/openooxml/betteroffice) - DOCX、XLSX 和 PPTX 的原生 OOXML 引擎：编辑、布局、渲染、CRDT 协作和代理编辑，可编译为 WebAssembly。
* [pathwaycom/pathway](https://github.com/pathwaycom/pathway) - 高性能开源 Python ETL 框架，采用 Rust 运行时，支持 300 多种数据源。
* [pg_analytics](https://github.com/paradedb/paradedb/tree/dev/pg_analytics) - PostgreSQL 扩展，将 Postgres 内分析查询处理加速至媲美专用 OLAP 数据库的水平。
* [pg_lakehouse](https://github.com/paradedb/paradedb/tree/dev/pg_lakehouse) - PostgreSQL 扩展，将 Postgres 变为可查询 AWS S3/GCS 等对象存储及 Delta Lake/Iceberg 等表格式的分析查询引擎。
* [pola-rs/polars](https://github.com/pola-rs/polars) - 快速、功能完整的 DataFrame 库 [![Lint Rust](https://github.com/pola-rs/polars/actions/workflows/lint-rust.yml/badge.svg)](https://github.com/pola-rs/polars/actions)
* [PSU3D0/formualizer](https://github.com/PSU3D0/formualizer) [[formualizer](https://crates.io/crates/formualizer)] - 可嵌入电子表格引擎，解析、求值和修改 Excel 工作簿：400 多种函数、Arrow 存储、增量重算、Python 和 WASM 绑定 [![CI](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml)
* [weld-project/weld](https://github.com/weld-project/weld) - 数据分析应用的高性能运行时

### 数据流

* [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) - 高性能 Rust 流处理引擎 [![CI](https://github.com/arkflow-rs/arkflow/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/arkflow-rs/arkflow/actions)
* [ArroyoSystems/arroyo](https://github.com/ArroyoSystems/arroyo) - Rust 和 SQL 的高性能实时分析 [![CI](https://github.com/ArroyoSystems/arroyo/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ArroyoSystems/arroyo/actions)
* [beava-dev/beava](https://github.com/beava-dev/beava) - 单二进制特征服务器。通过 HTTP 或 TCP 推送事件，直接查询最新实体计数器和聚合，无中间代理。适用于欺诈检测、推荐、LLM 防护栏及产品内分析 [![CI](https://github.com/beava-dev/beava/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/beava-dev/beava/actions)
* [fluvio](https://github.com/fluvio-community/fluvio) - 可编程数据流平台 [![CI](https://github.com/fluvio-community/fluvio/actions/workflows/ci.yml/badge.svg)](https://github.com/fluvio-community/fluvio/actions)
* [iggy](https://github.com/apache/iggy) [[iggy](https://crates.io/crates/iggy)] - 持久化消息流平台，支持 QUIC、TCP 和 HTTP 传输协议 [![CI](https://github.com/apache/iggy/actions/workflows/test.yml/badge.svg)](https://github.com/apache/iggy/actions/workflows/test.yml)
* [wingfoil](https://github.com/wingfoil-io/wingfoil) - 基于图的流处理框架 [![CI](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml/badge.svg)](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml)

### 数据结构

* [alrevuelta/rs-merkle-tree](https://github.com/alrevuelta/rs-merkle-tree) - Rust Merkle 树实现，支持可配置存储后端与哈希函数。固定深度、仅支持增量，针对快速证明生成优化。
* [ashvardanian/NumKong](https://github.com/ashvardanian/NumKong) - SIMD 加速的向量距离与相似度函数，适用于 x86 AVX2 和 AVX-512，以及 Arm NEON [![crates.io](https://img.shields.io/crates/v/simsimd.svg)](https://crates.io/crates/simsimd)
* [becheran/grid](https://github.com/becheran/grid) [[grid](https://crates.io/crates/grid)] - 提供易用、快速的二维数据结构。 [![build status](https://github.com/becheran/grid/actions/workflows/rust.yml/badge.svg)](https://github.com/becheran/grid/actions)
* [billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] - 三元搜索树集合
* [contain-rs](https://github.com/contain-rs) - Rust std::collections 的扩展
* [danielpclark/array_tool](https://github.com/danielpclark/array_tool) - 数组辅助工具，在 Vector 上提供常用数组方法；多态实现覆盖多数用例。
* [enum-map](https://codeberg.org/sugar700/enum-map) [[enum-map](https://crates.io/crates/enum-map)] - 使用数组存储值、针对枚举优化的映射实现。
* [fizyk20/generic-array](https://github.com/fizyk20/generic-array) - 让数组可按 typenum 指定大小的技巧
* [garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] - 支持优先级变更的优先队列。
* [greyblake/nutype](https://github.com/greyblake/nutype) [[nutype](https://crates.io/crates/nutype)] - 定义具有验证约束的 newtype 结构。 [![build status](https://github.com/greyblake/nutype/actions/workflows/ci.yml/badge.svg)](https://github.com/greyblake/nutype/actions)
* [jeromefroe/lru-rs](https://github.com/jeromefroe/lru-rs) [[lru](https://crates.io/crates/lru)] - LRU 缓存实现，`put`、`get`、`get_mut` 和 `pop` 操作均为 O(1)。 [![crates.io](https://img.shields.io/crates/v/lru.svg)](https://crates.io/crates/lru)
* [mikwielgus/undoredo](https://github.com/mikwielgus/undoredo) [[undoredo](https://crates.io/crates/undoredo)] - 任意数据结构的撤销/重做模式实现，支持基于增量（稀疏差异）、快照和命令的撤销/重做，并为自定义类型提供派生宏。兼容 no_std 和 Serde。 [![Crates.io](https://img.shields.io/crates/v/undoredo.svg)](https://crates.io/crates/undoredo)
* [mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) - 用于快速地理空间索引与最近邻查询的 K 维树
* [orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] - 持久化数据结构。 [![build badge](https://github.com/orium/rpds/workflows/CI/badge.svg)](https://github.com/orium/rpds/actions?query=workflow%3ACI)
* [RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) - Roaring 位图
* [rust-itertools/itertools](https://github.com/rust-itertools/itertools) - 额外的迭代器适配器、函数和宏
* [sorairolake/bit-int](https://github.com/sorairolake/bit-int) [[bit-int](https://crates.io/crates/bit-int)] - 任意固定位宽整数库 [![CI](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml)
* [tnballo/scapegoat](https://github.com/tnballo/scapegoat) [[scapegoat](https://crates.io/crates/scapegoat)] - `BTreeSet` 和 `BTreeMap` 的安全、可失败、仅栈分配替代品。 [![GitHub Actions](https://github.com/tnballo/scapegoat/workflows/test/badge.svg?branch=master)](https://github.com/tnballo/scapegoat/actions)
* [yamafaktory/hypergraph](https://github.com/yamafaktory/hypergraph) [[hypergraph](https://crates.io/crates/hypergraph)] - Hypergraph 是生成有向超图的数据结构库。 [![ci](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml)

### 数据可视化

* [blitzarx1/egui_graphs](https://github.com/blitzarx1/egui_graphs) [[egui_graphs](https://crates.io/crates/egui_graphs)] - 基于 egui 和 petgraph 的交互式图可视化组件。 [![Crates.io](https://img.shields.io/crates/v/egui_graphs)](https://crates.io/crates/egui_graphs) [![docs.rs](https://img.shields.io/docsrs/egui_graphs)](https://docs.rs/egui_graphs)
* [djduque/pgfplots](https://github.com/djduque/pgfplots) [[pgfplots](https://crates.io/crates/pgfplots)] - 生成出版级图形的库。 [![build](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml/badge.svg)](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml)
* [mazznoer/colorgrad-rs](https://github.com/mazznoer/colorgrad-rs) [[colorgrad](https://crates.io/crates/colorgrad)] - 用于数据可视化、图表、游戏、地图、生成艺术等的色阶库。
* [milliams/plotlib](https://github.com/milliams/plotlib) - Rust 数据绘图库
* [plotly](https://github.com/plotly/plotly.rs) - Rust 的 Plotly
* [plotpy](https://github.com/cpmech/plotpy) [[plotpy](https://crates.io/crates/plotpy)] - 使用 Python（Matplotlib）的 Rust 绘图库
* [plotters](https://github.com/plotters-rs/plotters) - [![build badge](https://github.com/plotters-rs/plotters/workflows/CI/badge.svg)](https://github.com/plotters-rs/plotters/actions)
* [rerun](https://github.com/rerun-io/rerun) - [[rerun](https://crates.io/crates/rerun)] - 记录计算机视觉与机器人数据（张量、点云等）的 SDK，配有可视化工具，用于随时间探索数据。
* [saresend/gust](https://github.com/saresend/Gust) - 小型图表/可视化工具，部分实现 Vega
* [shergin/malevich](https://github.com/shergin/malevich) [[malevich](https://crates.io/crates/malevich)] - 终端绘图：折线图、散点图、条形图、直方图、热力图、箱线图、小提琴图等，自动生成坐标轴
* [wangjiawen2013/charton](https://github.com/wangjiawen2013/charton) - Rust 分层图形语法库。 [![Documentation](https://img.shields.io/docsrs/charton/latest)](https://docs.rs/charton) [![Build Status](https://github.com/wangjiawen2013/charton/actions/workflows/ci.yml/badge.svg)](https://github.com/wangjiawen2013/charton/actions)

### 数据库

[[数据库](https://crates.io/keywords/database)]

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

  * [ArangoDB](https://arangodb.com)
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 轻量 ArangoDB 对象文档、关系与图映射器 [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
    * [Arangors](https://github.com/fMeow/arangors) [[arangors](https://crates.io/crates/arangors)] - ArangoDB 驱动
  * [Cassandra](https://cassandra.apache.org/_/index.html) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
    * [AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] - 原生客户端
    * [cassandra-rs](https://github.com/cassandra-rs/cassandra-rs) - DataStax C/C++ 绑定
    * [krojew/cdrs-tokio](https://github.com/krojew/cdrs-tokio) - 纯 Rust 编写的高级异步 Cassandra 客户端。 [![build badge](https://github.com/krojew/cdrs-tokio/actions/workflows/rust.yml/badge.svg)](https://github.com/krojew/cdrs-tokio/actions)
      * [[cassandra-protocol](https://crates.io/crates/cassandra-protocol)] - Cassandra 协议实现。
      * [[cdrs-tokio](https://crates.io/crates/cdrs-tokio)] - 生产就绪的异步 Apache Cassandra 驱动客户端
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] - CouchDB REST API 客户端
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
    * [softprops/dynomite](https://github.com/softprops/dynomite) - 与 `rusoto_dynamodb` 进行强类型、便捷交互的库 [![build badge](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] - [Elastic](https://www.elastic.co/) REST API 客户端
    * [elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] - elastic 是使用 Rust 编写、高效、模块化的 Elasticsearch API 客户端 [![build badge](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
  * etcd
    * [jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] - CoreOS etcd 的客户端库。
  * [InfluxDB](https://www.influxdata.com/)
    * [driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) - 同步接口
  * LevelDB
    * [skade/leveldb](https://github.com/skade/leveldb) - [LevelDB](https://github.com/google/leveldb) 绑定
  * [LMDB](https://www.symas.com/lmdb.php) [[lmdb](https://crates.io/keywords/lmdb)]
    * [meilisearch/heed](https://github.com/meilisearch/heed) [[heed](https://crates.io/crates/heed)] - 完全类型化、最小开销的 LMDB 封装
    * [vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] - LMDB 的 Rust 绑定
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] - [MongoDB](https://www.mongodb.com/) 绑定
  * [MongrelDB](https://www.mongreldb.com)
    * [visorcraft/MongrelDB](https://github.com/visorcraft/MongrelDB) [[mongreldb-core](https://crates.io/crates/mongreldb-core)] - 嵌入式列式数据库引擎，提供 SQL、向量搜索、全文搜索和 AI 原生检索 [![build badge](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
    * [seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) - 轻量简单的键值存储，深受 Python PickleDB 启发。
  * [PoloDB](https://www.polodb.org/)
    * [PoloDB](https://github.com/PoloDB/PoloDB) - 基于 JSON 的嵌入式数据库，API 类似 MongoDB。 ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/PoloDB/PoloDB/rust.yml)
  * [Redb](https://www.redb.org/)
    * [Redb](https://github.com/cberner/redb) - 嵌入式键值数据库，提供类似 rocksdb、lmdb 等其他嵌入式键值存储的接口。 ![GitHub Workflow Status](https://github.com/cberner/redb/actions/workflows/ci.yml/badge.svg)
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [aembke/fred](https://github.com/aembke/fred.rs) [[fred](https://crates.io/crates/fred)] - 基于 Tokio 的高级异步 Rust [Redis](https://redis.io/) 客户端。 ) [![CircleCI](https://circleci.com/gh/aembke/fred.rs/tree/main.svg?style=svg)]([https://circleci.com/gh/aembke/fred.rs/tree/main](https://app.circleci.com/pipelines/github/aembke/fred.rs?branch=main))
    * [redis-rs](https://github.com/redis-rs/redis-rs) - [Redis](https://redis.io/) 库 [![Rust](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml)
  * [RocksDB](https://rocksdb.org/)
    * [rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) - RocksDB 绑定 [![RocksDB CI](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml)
  * [SurrealDB](https://surrealdb.com/)
    * [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) - SurrealDB 嵌入式文档图数据库
  * [UnQLite](https://github.com/symisc/unqlite)
    * [zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) - UnQLite 绑定
  * [ZooKeeper](https://zookeeper.apache.org/)
    * [bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] - Apache ZooKeeper 客户端库。
    * [krojew/rust-zookeeper](https://github.com/krojew/rust-zookeeper) [[zookeeper-async](https://crates.io/crates/zookeeper-async)] - 基于 Tokio 的异步 ZooKeeper 客户端。  ![build status](https://github.com/krojew/rust-zookeeper/actions/workflows/rust.yml/badge.svg)
* OGM [[ogm](https://crates.io/keywords/ogm)]
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 轻量 ArangoDB 对象文档、关系与图映射器 [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [ayarotsky/diesel-guard](https://github.com/ayarotsky/diesel-guard) - Diesel 和 SQLx 的检查器，捕获危险 PostgreSQL 迁移（表锁、重写、阻塞操作），并建议安全替代方案 [![crate](https://img.shields.io/crates/v/diesel-guard.svg)](https://crates.io/crates/diesel-guard)
  * [diesel-rs/diesel](https://github.com/diesel-rs/diesel) - ORM 与查询构建器
  * [ivanceras/rustorm](https://github.com/ivanceras/rustorm) - 对象关系映射器（ORM）
  * [njord](https://github.com/njord-rs/njord) - ⛵多功能、功能丰富的 Rust ORM [![build status](https://github.com/njord-rs/njord/actions/workflows/core.yml/badge.svg)](https://github.com/njord-rs/njord/actions/workflows/core.yml) ![crates.io](https://img.shields.io/crates/v/njord.svg)
  * [rbatis/rbatis](https://github.com/rbatis/rbatis) - 高性能 ORM 框架（基于 JSON）
  * [SeaQL/sea-orm](https://github.com/SeaQL/sea-orm) - 🐚异步动态 ORM  [![crate](https://img.shields.io/crates/v/sea-orm.svg)](https://crates.io/crates/sea-orm) [![docs](https://img.shields.io/docsrs/sea-orm/latest)](https://docs.rs/sea-orm) [![build status](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml)
  * [SeaQL/seaography](https://github.com/SeaQL/seaography) - 🧭SeaORM 的 GraphQL 框架 [![crate](https://img.shields.io/crates/v/seaography.svg)](https://crates.io/crates/seaography) [![docs](https://img.shields.io/docsrs/seaography/latest)](https://docs.rs/seaography) [![build status](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml/badge.svg)](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml)
  * [thegenius/taitan-orm](https://github.com/thegenius/taitan-orm) - 先进的 Rust ORM，支持异步与编译期生成。
* [sfackler/r2d2](https://github.com/sfackler/r2d2) - 通用连接池
* SQL [[sql](https://crates.io/keywords/sql)]
  * 通用
    * [launchbadge/sqlx](https://github.com/launchbadge/sqlx) - 异步 PostgreSQL/MySQL/SQLite 连接池，支持强类型 [![build badge](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
    * [SeaQL/sea-query](https://github.com/SeaQL/sea-query) - 🔱MySQL、Postgres 和 SQLite 的动态 SQL 查询构建器 [![crate](https://img.shields.io/crates/v/sea-query.svg)](https://crates.io/crates/sea-query) [![docs](https://img.shields.io/docsrs/sea-query/latest)](https://docs.rs/sea-query) [![build status](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml)
    * [SeaQL/sea-schema](https://github.com/SeaQL/sea-schema) - 🌿SQL 模式定义与发现 [![crate](https://img.shields.io/crates/v/sea-schema.svg)](https://crates.io/crates/sea-schema) [![docs](https://img.shields.io/docsrs/sea-schema/latest)](https://docs.rs/sea-schema) [![build status](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml)
  * Microsoft SQL
    * [prisma/tiberius](https://github.com/prisma/tiberius) - [![Cargo tests](https://github.com/prisma/tiberius/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prisma/tiberius/actions/workflows/test.yml)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) - MySQL 代理 [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
    * [blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] - 基于 Tokio 的异步 MySQL 驱动。 [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] - 原生 MySQL 客户端
  * Oracle
    * [kubo/rust-oracle](https://github.com/kubo/rust-oracle) [[oracle](https://crates.io/crates/oracle)] - Oracle 驱动 [![build badge](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml/badge.svg?branch=master)](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 快速实现，外部依赖少。
    * [isdaniel/pg-walstream](https://github.com/isdaniel/pg-walstream) - PostgreSQL 逻辑和物理复制流的高性能异步 CDC（变更数据捕获）库。 [![Crates.io Version](https://img.shields.io/crates/v/pg_walstream)](https://crates.io/crates/pg_walstream)
    * [rust-postgres](https://github.com/rust-postgres/rust-postgres) [[postgres](https://crates.io/crates/postgres)] - 原生 [PostgreSQL](https://www.postgresql.org/) 客户端
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [rusqlite](https://github.com/rusqlite/rusqlite) - [Sqlite3](https://sqlite.org/index.html) 绑定
* [VennDB](https://venndb.plabayo.tech/) [[venndb](https://github.com/plabayo/venndb)] - Rust 只追加内存数据库，用于通过位（标志）列查询行。

### 日期与时间

[[日期](https://crates.io/keywords/date), [时间](https://crates.io/keywords/time)]

* [arthurhenrique/rusti-cal](https://github.com/arthurhenrique/rusti-cal) [[rusti-cal](https://crates.io/crates/rusti-cal)] - 极速 cal(1) 克隆，支持超过 9999 年，使用 Rust 编写。
* [burntSushi/jiff](https://github.com/BurntSushi/jiff) - Rust 日期时间库，鼓励你轻松走向成功。 [![Build status](https://github.com/BurntSushi/jiff/workflows/ci/badge.svg)](https://github.com/BurntSushi/jiff/actions)
* [chronotope/chrono](https://github.com/chronotope/chrono) - 日期与时间库
* [Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] - 将人类表达的时间转换为毫秒的库 [![build badge](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)
* [sorairolake/dos-date-time](https://github.com/sorairolake/dos-date-time) [[dos-date-time](https://crates.io/crates/dos-date-time)] - MS-DOS 日期与时间库 [![CI](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml)
* [sorairolake/nt-time](https://github.com/sorairolake/nt-time) [[nt-time](https://crates.io/crates/nt-time)] - Windows 文件时间库。 [![CI](https://github.com/sorairolake/nt-time/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/nt-time/actions?query=workflow%3ACI)
* [time-rs/time](https://github.com/time-rs/time) - [![build badge](https://github.com/time-rs/time/workflows/Build/badge.svg)](https://github.com/time-rs/time/actions)

### 分布式系统

* Antimony
  * [antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] - 流处理/分布式计算平台
* Apache Kafka
  * [fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] - [librdkafka](https://github.com/confluentinc/librdkafka) 绑定
  * [gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) [[schema_registry_converter](https://crates.io/crates/schema_registry_converter)] - 集成 [confluent schema registry](https://www.confluent.io/product/confluent-platform/data-compatibility/)
  * [kafka-rust/kafka-rust](https://github.com/kafka-rust/kafka-rust) - Apache Kafka Rust 客户端
* HDFS
  * [hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) [[hdfs](https://crates.io/crates/hdfs)] - libhdfs 绑定
* 其他
  * [build-trust/ockam](https://github.com/build-trust/ockam) [[ockam](https://crates.io/crates/ockam)] - 分布式应用的端到端加密、双向身份验证和 ABAC [![build badge](https://github.com/build-trust/ockam/workflows/Rust/badge.svg)](https://github.com/build-trust/ockam)
  * [zannis/shove](https://github.com/zannis/shove) [[shove](https://crates.io/crates/shove)] - 类型安全的异步发布/订阅，通过统一 API 支持 RabbitMQ、Kafka、NATS JetStream、AWS SNS/SQS 和 Redis Streams，提供重试、死信队列路由与消费组自动扩缩容 [![CI](https://github.com/zannis/shove/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/zannis/shove/actions/workflows/ci.yml)

### 领域驱动设计

  * [serverlesstechnology/cqrs](https://github.com/serverlesstechnology/cqrs) [[cqrs-es](https://crates.io/crates/cqrs-es)] - CQRS 与事件溯源框架，附[用户指南](https://doc.rust-cqrs.org/)

### eBPF

* [aya/aya-rs](https://github.com/aya-rs/aya) - 注重开发体验与可操作性。
* [libbpf/libbpf-rs](https://github.com/libbpf/libbpf-rs) - 极简且有明确设计主张的 eBPF 工具。

### 电子邮件

[[电子邮件](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [duesee/imap-codec](https://github.com/duesee/imap-codec) [[imap-codec](https://crates.io/crates/imap-codec)] - 稳健完整的 IMAP 编解码器 [![Build & Test](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml)
* [gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) - SendGrid API 库
* [jdrouet/catapulte](https://github.com/jdrouet/catapulte) - 使用 [MRML](https://github.com/jdrouet/mrml) 模板发送邮件的微服务。
* [jdrouet/jolimail](https://github.com/jdrouet/jolimail) - 构建 [MRML](https://github.com/jdrouet/mrml) 模板的 Web 应用。
* [jdrouet/mrml](https://github.com/jdrouet/mrml) - 生成适用于任意邮件客户端的精美邮件模板的库。
* [lettre/lettre](https://github.com/lettre/lettre) - SMTP 库 [![CI](https://github.com/lettre/lettre/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/lettre/lettre/actions/workflows/test.yml)
* [mailtutan/mailtutan](https://github.com/mailtutan/mailtutan) - 用于测试和开发环境的 SMTP 服务器。
* [meli/meli](https://github.com/meli/meli) - 🐝终端邮件客户端
* [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists) [[check-if-email-exists](https://crates.io/crates/check-if-email-exists)] - 无需发送邮件即可检查邮箱是否存在，提供 SMTP 验证、临时地址检测和全收邮件检查 [![Actions Status](https://github.com/reacherhq/check-if-email-exists/workflows/pr/badge.svg)](https://github.com/reacherhq/check-if-email-exists/actions)
* [rustmailer/bichon](https://github.com/rustmailer/bichon) - 轻量、高性能邮件归档器，支持全文搜索与 Web 界面。
* [staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] - 解析真实世界邮件文件的库
* [stalwartlabs/mail-auth](https://github.com/stalwartlabs/mail-auth) [[mail-auth](https://crates.io/crates/mail-auth)] - DKIM、ARC、SPF 和 DMARC 邮件身份验证库 [![build badge](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml)
* [stalwartlabs/mail-parser](https://github.com/stalwartlabs/mail-parser) [[mail-parser](https://crates.io/crates/mail-parser)] - 快速稳健、完整支持 MIME 的邮件解析库 [![build badge](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml)
* [stalwartlabs/mail-send](https://github.com/stalwartlabs/mail-send) [[mail-send](https://crates.io/crates/mail-send)] - 支持 DKIM 的邮件构建器与 SMTP 客户端库 [![build badge](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml)
* [tweedegolf/mailcrab](https://github.com/tweedegolf/mailcrab) - 开发用邮件测试服务器。

### 编码

[[编码](https://crates.io/keywords/encoding)]

* ASN.1
  * [alex/rust-asn1](https://github.com/alex/rust-asn1) - ASN.1（DER）序列化器
* 条形码
  * [rxing-core/rxing](https://github.com/rxing-core/rxing) [[rxing](https://crates.io/crates/rxing)] - zxing 条形码库的 Rust 移植。 [![Rust](https://github.com/rxing-core/rxing/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rxing-core/rxing/actions/workflows/rust.yml)
* 二进制
  * [bincode](https://crates.io/crates/bincode) - 二进制编码器/解码器
  * [bincode-next](https://crates.io/crates/bincode-next) - 二进制编码器/解码器，已停止维护的 bincode 的后继者
  * [jamesmunns/postcard](https://github.com/jamesmunns/postcard) [[postcard](https://crates.io/crates/postcard)] - Postcard 是面向 #![no_std] 的 Serde 序列化与反序列化工具。![no_std] focused serializer and deserializer for Serde.
  * [m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] - 跨平台、零拷贝、感知字节序的二进制解析
* BSON
  * [mongodb/bson-rust](https://github.com/mongodb/bson-rust) - BSON 编码与解码支持
* 字节交换
  * [BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) - 支持大端、小端和本机字节序
* Cap'n Proto
  * [capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) - Cap'n Proto 是分布式系统的类型系统
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) - Serde 的 CBOR 支持
* 字符编码
  * [hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] - 面向 Gecko 的 Encoding Standard 实现
  * [lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) - Rust 字符编码支持（也称 rust-encoding），基于 WHATWG Encoding Standard，并提供高级错误检测与恢复接口。
* CRC
  * [mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) - Rust CRC（16、32、64）实现，支持多种标准
* CSV
  * [BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) - 快速灵活的 CSV 读写工具，支持 Serde
* Data Matrix
  * [jannschu/datamatrix-rs](https://github.com/jannschu/datamatrix-rs) [[datamatrix](https://crates.io/crates/datamatrix)] - Data Matrix（ECC 200）解码与编码，配备优化编码器 [![CI](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml)
* EDN
  * [edn-rs](https://github.com/naomijub/edn-rs) [[edn-rs](https://crates.io/crates/edn-rs)] - 将 EDN 格式解析为 Rust 类型并输出的 crate。
* [FlatBuffers](https://flatbuffers.dev/)
  * [frol/flatc-rust](https://github.com/frol/flatc-rust) - Cargo 构建脚本的 FlatBuffers 编译器（flatc）集成
* HAR
  * [mandrean/har-rs](https://github.com/mandrean/har-rs) [[har](https://crates.io/crates/har)] - HTTP 归档格式（HAR）序列化与反序列化库
* HTML
  * [servo/html5ever](https://github.com/servo/html5ever) - 高性能浏览器级 HTML5 解析器
* JSON
  * [cloudwego/sonic-rs](https://github.com/cloudwego/sonic-rs) [[sonic-rs](https://crates.io/crates/sonic-rs)] - 基于 SIMD 的快速 Rust JSON 库。
  * [importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson](https://crates.io/crates/ajson)] - 快速获取 JSON 值
  * [rustadopt/jzon-rs](https://github.com/rustadopt/jzon-rs/) [[jzon](https://crates.io/crates/jzon)] - JSON 实现
  * [serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] - [Serde](https://github.com/serde-rs/serde) 框架的 JSON 支持
  * [simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] - 基于 simdjson 移植的高性能 JSON 解析器
  * [vcschapp/bufjson](https://github.com/vcschapp/bufjson) [[bufjson](https://crates.io/crates/bufjson)] - 流式 JSON 解析器与词法分析器，无拷贝/无分配，可选流式 JSON Pointer 求值器
* MsgPack
  * [3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) - 底层/高级 MessagePack 实现
* NetCDF
  * [georust/netcdf](https://github.com/georust/netcdf) [[netcdf](https://crates.io/crates/netcdf)] - 中层 netCDF 绑定，便于将类数组结构读写到文件。
* PEM
  * [jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] - 解析和编码 PEM 编码的数据
* ProtocolBuffers
  * [stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) - Google Protocol Buffers 的 Rust 实现
  * [tokio-rs/prost](https://github.com/tokio-rs/prost) - [![continuous integration](https://github.com/tokio-rs/prost/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/tokio-rs/prost/actions)
* 二维码
  * [magiclen/qrcode-generator](https://github.com/magiclen/qrcode-generator) [[qrcode-generator](https://crates.io/crates/qrcode-generator)] - 使用纯 Rust 生成 ISO/IEC 18004 QR Code、Micro QR Code 和 ISO/IEC 23941 rMQR 符号，再渲染为灰度、PNG 和 SVG 图像。 [![CI](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml)
  * [sorairolake/qrcode-rust2](https://github.com/sorairolake/qrcode-rust2) [[qrcode2](https://crates.io/crates/qrcode2)] - 二维码编码库 [![CI](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml/badge.svg?branch=main)](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml)
  * [WanzenBug/rqrr](https://github.com/WanzenBug/rqrr) [[rqrr](https://crates.io/crates/rqrr)] - 检测和读取任意图像源中的二维码 [![CI](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml/badge.svg?branch=master)](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml)
* rkyv
  * [rkyv/rkyv](https://github.com/rkyv/rkyv) [[rkyv](https://crates.io/crates/rkyv)] - rkyv（归档）是零拷贝反序列化框架
* RON (Rusty Object Notation)
  * [https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) - Rust 对象表示法
* Serde
  * [iddm/serde-aux](https://github.com/iddm/serde-aux/) - 配合 Serde 库使用的额外工具。 [![CI](https://github.com/iddm/serde-aux/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/serde-aux/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/serde-aux.svg)](https://crates.io/crates/serde-aux)
* TOML
  * [tamasfe/taplo](https://github.com/tamasfe/taplo) [[taplo](https://crates.io/crates/taplo)] - TOML 工具包 [![CI](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
  * [toml-rs/toml](https://github.com/toml-rs/toml) - [![CI](https://github.com/toml-rs/toml/actions/workflows/ci.yml/badge.svg)](https://github.com/toml-rs/toml/actions/workflows/ci.yml)
* [vitiral/stfu8](https://github.com/vitiral/stfu8) [[stfu8](https://crates.io/crates/stfu8)] - UTF-8 的 Sorta 文本格式
* XML
  * [Florob/RustyXML](https://github.com/Florob/RustyXML) - XML 解析器
  * [netvl/xml-rs](https://github.com/netvl/xml-rs) - 流式 XML 库
  * [shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) - XML 库
  * [shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) - XPath 库
  * [tafia/quick-xml](https://github.com/tafia/quick-xml) - 高性能 XML 拉式读写器
  * [yaserde](https://github.com/luminvent/yaserde) - 又一个专用于 XML 的序列化器/反序列化器
* YAML
  * [chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) - 缺失的 YAML 1.2 实现。
  * [saphyr](https://github.com/saphyr-rs/saphyr) - 专门解析 YAML 的 crate 集合。
  * [serde-saphyr](https://github.com/bourumir-wyngs/serde-saphyr) - Serde 的 YAML 序列化/反序列化工具，强调无 panic 解析与良好错误报告 [![crates.io](https://img.shields.io/crates/d/serde-saphyr.svg)](https://crates.io/crates/serde-saphyr)

### 文件系统

[[文件系统](https://crates.io/keywords/filesystem)]
* 操作
  * [Camino](https://github.com/camino-rs/camino) [[camino](https://crates.io/crates/camino)] - 类似 Rust std::path::Path，但使用 UTF-8。
  * [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) [[fff-search](https://crates.io/crates/fff-search)] - 抗拼写错误的文件与内容搜索库，提供频率/近期性排名、感知 Git 的注解、后台监视器和轻量内存内容索引。提供 MCP 服务器、Node/Bun SDK、C 库和 Neovim 插件。
  * [dnbln/dir-structure](https://github.com/dnbln/dir-structure) [[dir-structure](https://crates.io/crates/dir-structure)] - 使用普通 Rust 结构体建模文件系统树。 [![Tests](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml/badge.svg?branch=trunk)](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml)
  * [OpenDAL](https://github.com/apache/opendal) [[opendal](https://crates.io/crates/opendal)] - 统一数据访问层，让用户无缝高效获取各类存储服务的数据。 [![build](https://img.shields.io/github/actions/workflow/status/apache/opendal/ci_core.yml?branch=main)](https://github.com/apache/opendal/actions?query=branch%3Amain)
  * [ParthJadhav/Rust_Search](https://github.com/ParthJadhav/Rust_Search) [[rust_search](https://crates.io/crates/rust_search)] - 极快的文件搜索库。
  * [pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) [[dbus-udisks2](https://crates.io/crates/dbus-udisks2)] - UDisks2 的 DBus API
  * [pop-os/sys-mount](https://github.com/pop-os/sys-mount) [[sys-mount](https://crates.io/crates/sys-mount)] - `mount` / `umount2` 系统调用的高级抽象。
  * [vitiral/path_abs](https://github.com/vitiral/path_abs) [[path_abs](https://crates.io/crates/path_abs)] - 可序列化绝对路径类型与相关方法。
  * [webdesus/fs_extra](https://github.com/webdesus/fs_extra) - 扩展标准库 std::fs 和 std::io 的能力
* 临时文件
  * [Stebalien/tempfile](https://github.com/Stebalien/tempfile) - 临时文件库
  * [Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] - 列出和操作 Unix 扩展文件属性
  * [zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] - 零细节、注重隐私的可嵌入文件系统。

### 金融

* [avhz/RustQuant](https://github.com/avhz/RustQuant) [[RustQuant](https://crates.io/crates/RustQuant)] - 量化金融库。 ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/avhz/RustQuant/build.yml)
* [d-e-s-o/apca](https://github.com/d-e-s-o/apca) [[apca](https://crates.io/crates/apca)] - 有明确设计主张、全面的 [Alpaca API](https://alpaca.markets/) 绑定，用于股票交易等。 ![GitHub Workflow Status](https://github.com/d-e-s-o/apca/actions/workflows/test.yml/badge.svg?branch=main)
* [kand-ta/kand](https://github.com/kand-ta/kand) [[kand](https://crates.io/crates/kand)] - 面向 Rust、Python 和 JS/TS（WASM）的现代高性能技术分析库。 [![image](https://img.shields.io/crates/v/kand.svg)](https://crates.io/crates/kand)
* [rust-dd/stochastic-rs](https://github.com/rust-dd/stochastic-rs) [[stochastic-rs](https://crates.io/crates/stochastic-rs)] - 量化金融：130 多种随机过程、期权定价与校准、波动率曲面和 Copula，采用 SIMD/GPU 加速，提供 Python 绑定。 ![GitHub Workflow Status](https://github.com/rust-dd/stochastic-rs/actions/workflows/rust.yml/badge.svg?branch=main)
* [wickra-lib/wickra](https://github.com/wickra-lib/wickra) [[wickra](https://crates.io/crates/wickra)] - 流式优先的技术分析：514 个指标，每次行情更新为 O(1)，Rust 核心配原生 Python、Node.js 和 WASM 绑定，以及供 C、C++、C#、Go、Java 和 R 使用的 C ABI 中心。 [![CI](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml)

### 函数式编程

[[函数式编程](https://crates.io/keywords/fp)]
* Prelude
  * [JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) - 函数式编程库
  * [myrrlyn/tap](https://github.com/myrrlyn/tap) - 后缀位置管道行为

### 游戏开发

另见 [Are we game yet?](https://arewegameyet.rs)
* Allegro
  * [SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) - [Allegro 5](https://liballeg.org/) 绑定
* [Awesome Quads](https://github.com/ozkriff/awesome-quads) - miniquad/macroquad 相关代码与资源链接精选列表
* [Awesome wgpu](https://github.com/rofrol/awesome-wgpu) - wgpu 代码与资源精选列表
* bracket-lib（原名 RLTK）
  * [bracket-lib](https://github.com/amethyst/bracket-lib) [[bracket-lib](https://crates.io/crates/bracket-lib)] - Roguelike 工具包（RLTK）。 [![Rust](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml/badge.svg)](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml)
* Challonge
  * [iddm/challonge-rs](https://github.com/iddm/challonge-rs) [[challonge](https://crates.io/crates/challonge)] - Challonge REST API 客户端库，帮助组织锦标赛。 [![CI](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml)
* 实体组件系统（ECS）
  * [amethyst/specs](https://github.com/amethyst/specs) - Specs 并行 ECS
  * [legion](https://github.com/amethyst/legion) - 功能丰富、高性能、样板代码极少的 ECS 库 [![build badge](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* 游戏引擎
  * [AscendingCreations/AscendingGraphics](https://github.com/AscendingCreations/AscendingGraphics) - 使用 WGPU 和 Winit 的 2D 渲染框架。 - [![Crates.io](https://img.shields.io/crates/v/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics) [![license](https://img.shields.io/crates/l/ascending_graphics.svg)](https://github.com/AscendingCreations/AscendingGraphics/blob/main/LICENSE.MIT) [![Crates.io](https://img.shields.io/crates/d/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics)
  * [Balaur](https://github.com/balaurengine/balaur) - 确定性的 2D 和 3D 游戏引擎，支持 Rune 脚本、Rapier 物理和内置编辑器 [![Test](https://github.com/balaurengine/balaur/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/balaurengine/balaur/actions/workflows/test.yml)
  * [Bevy](https://github.com/bevyengine/bevy) - 简洁清爽的数据驱动游戏引擎。 - [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy) [![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [Fyrox](https://fyrox.rs/) - 3D 游戏引擎 [![Crates.io](https://img.shields.io/crates/v/fyrox.svg)](https://crates.io/crates/fyrox) [![license](https://img.shields.io/crates/l/fyrox.svg)](https://github.com/FyroxEngine/Fyrox/blob/master/LICENSE.md) [![Crates.io](https://img.shields.io/crates/d/fyrox.svg)](https://crates.io/crates/fyrox)
  * [ggez](https://github.com/ggez/ggez) - 轻量游戏框架，以最少阻碍制作 2D 游戏 - [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/ggez.svg)](https://crates.io/crates/ggez)
  * [Kiss3d](https://github.com/dimforge/kiss3d) - 遵循“保持简单”原则的 3D 图形引擎 [![Crates.io](https://img.shields.io/crates/d/kiss3d.svg)](https://crates.io/crates/kiss3d)
  * [oxidator](https://github.com/Ruddle/oxidator) - 支持 WebGPU 的实时策略游戏/引擎
  * [Piston](https://www.piston.rs/) - [![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston) [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/piston.svg)](https://crates.io/crates/piston)
  * [Unrust](https://github.com/unrust/unrust) - WebGL 2.0 / 原生游戏引擎
* 游戏服务器
  * [gamedig/rust-gamedig](https://github.com/gamedig/rust-gamedig) [[gamedig](https://crates.io/crates/gamedig)] - 查询游戏服务器名称、在线玩家、最大玩家数等信息。 [![Crates.io](https://img.shields.io/crates/v/gamedig.svg)](https://crates.io/crates/gamedig) [![Crates.io](https://img.shields.io/crates/d/gamedig.svg)](https://crates.io/crates/gamedig)
* [Godot](https://godotengine.org/)
  * [adalinesimonian/gdvm](https://github.com/adalinesimonian/gdvm) - CLI 的 Godot 版本管理器 [![CI](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml)
  * [godot-rust/gdext](https://github.com/godot-rust/gdext) [[gdext](https://crates.io/crates/gdext)] - Godot 4+ 游戏引擎绑定 [![CI](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml)
  * [godot-rust/gdnative](https://github.com/godot-rust/gdnative) [[gdnative](https://crates.io/crates/gdnative)] - Godot 3+ 游戏引擎绑定 [![CI](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml)
* Minecraft
  * [bedrock-crustaceans/bedrock-rs](https://github.com/bedrock-crustaceans/bedrock-rs) - 用于 Rust Minecraft Bedrock Edition 开发的通用工具包。 [![GitHub stars](https://img.shields.io/github/stars/bedrock-crustaceans/bedrock-rs)](https://github.com/bedrock-crustaceans/bedrock-rs) [![CI](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml)
  * [FerrumC](https://github.com/ferrumc-rs/ferrumc) - 原始 Minecraft 服务器的 Rust 升级版 [] [![build badge](https://github.com/ferrumc-rs/ferrumc/actions/workflows/rust.yml/badge.svg)]
  * [Pumpkin](https://github.com/pumpkin-mc/pumpkin) - 完全使用 Rust 编写的高性能 Minecraft 服务器软件
  * [SteelMC](https://github.com/Steel-Foundation/SteelMC) - 注重性能与功能对等的 Rust Minecraft 服务器
* [Raylib](https://www.raylib.com/)
  * [deltaphc/raylib-rs](https://github.com/deltaphc/raylib-rs) [[raylib](https://crates.io/crates/raylib)] - raylib 绑定
* [SDL](https://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
  * [brson/rust-sdl](https://github.com/brson/rust-sdl) - SDL1 绑定
  * [Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) - SDL2 绑定
* SFML
  * [jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) - [SFML](https://www.sfml-dev.org/) 绑定
* Skillratings
  * [atomflunder/skillratings](https://github.com/atomflunder/skillratings) [[skillratings](https://crates.io/crates/skillratings)] - 多人游戏技能评分算法集合，如 Elo、Glicko-2、TrueSkill 等。 [![crates.io badge](https://img.shields.io/crates/v/skillratings)](https://crates.io/crates/skillratings) [![CI](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml/badge.svg)](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml)
* Tatami
  * [giraffekey/tatami](https://github.com/giraffekey/tatami) [[tatami](https://crates.io/crates/tatami-dungeon)] - Roguelike 地牢生成算法。
* Toornament-rs
  * [iddm/toornament-rs](https://github.com/iddm/toornament-rs) - Toornament.com API 绑定。 [![CI](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/toornament.svg)](https://crates.io/crates/toornament)
* Victorem
  * [VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] - 简易 UDP 游戏服务器与 UDP 客户端框架，用于创建简单 2D 和 3D 在线游戏原型

### 地理空间

[[地理](https://crates.io/keywords/geo), [GIS](https://crates.io/keywords/gis)]

* [apache/sedona-db](https://github.com/apache/sedona-db) - SedonaDB 是使用 Rust 编写的地理空间 DataFrame 库。
* [DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] - 坐标变换（二维、三维和地理空间）
* [Georust](https://github.com/georust) - 地理空间工具与库
* [georust/geojson](https://github.com/georust/geojson) [[geojson](https://crates.io/crates/geojson)] - GeoJSON 矢量 GIS 文件格式的序列化与反序列化库。
* [MapLibre/Martin](https://github.com/maplibre/martin) - 地图瓦片服务器，支持 PostGIS、MBTiles、PMTiles 和精灵图。 [![CI build](https://github.com/maplibre/martin/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/martin/actions)[![crates.io version](https://img.shields.io/crates/v/martin.svg)](https://crates.io/crates/martin)[![Book](https://img.shields.io/badge/docs-Book-informational)](https://maplibre.org/martin/)
* [rust-reverse-geocoder](https://github.com/gx0r/rrgeo) - 快速离线逆地理编码器，受 [thampiman/reverse-geocoder](https://github.com/thampiman/reverse-geocoder) 启发
* [vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] - UTM、LatLon 和 MGRS 坐标间转换

### 图算法

* [neo4j-labs/graph](https://github.com/neo4j-labs/graph) - 高性能图算法库 [![graph CI status](https://img.shields.io/github/workflow/status/neo4j-labs/graph/CI/main?label=CI)](https://github.com/neo4j-labs/graph/actions/workflows/rust.yml)
* [petgraph/petgraph](https://github.com/petgraph/petgraph) - 图数据结构库。 [![graph CI status](https://github.com/petgraph/petgraph/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/petgraph/petgraph/actions/workflows/ci.yml)

### 图形

[[图形](https://crates.io/keywords/graphics)]

* 字体
  * [redox-os/rusttype](https://github.com/redox-os/rusttype) - FreeType 等库的替代品
  * [rustybuzz](https://github.com/harfbuzz/rustybuzz) - HarfBuzz 的增量移植
* [gfx-rs/gfx](https://github.com/gfx-rs/gfx) - 高性能无绑定图形 API。
* [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - 基于 gfx-hal 的原生 WebGPU 实现。 [![build badge](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [gl-rs](https://github.com/rust-windowing/gl-rs) - OpenGL 函数指针加载器
  * [glium/glium](https://github.com/glium/glium) - 安全 OpenGL 封装。
  * [glutin](https://crates.io/crates/glutin) - [GLFW](https://www.glfw.org/) 的替代品
  * [PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) - GLFW3 绑定与惯用封装
* PDF
  * [bastibense/libharu_ng](https://github.com/bastibense/libharu_ng) [[libharu_ng](https://crates.io/crates/libharu_ng)] - 从 Rust 应用轻松生成 PDF。
  * [fschutt/printpdf](https://github.com/fschutt/printpdf) - PDF 写入库
  * [fullbleed-engine/fullbleed-official](https://github.com/fullbleed-engine/fullbleed-official) [[fullbleed](https://crates.io/crates/fullbleed)] - 面向打印的 HTML/CSS 到 PDF 引擎，提供可复用模板、可变数据生成和 Python 绑定。 [![CI](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml)
  * [gastongouron/ironpress](https://github.com/gastongouron/ironpress) [[ironpress](https://crates.io/crates/ironpress)] - 纯 Rust HTML/CSS/Markdown 到 PDF 转换器，内置布局引擎，无浏览器或系统依赖。 [![CI](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml)
  * [hayro](https://github.com/LaurenzV/hayro) - 纯 Rust PDF 解释器与渲染器
  * [J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) - PDF 文档操作
  * [kaj/rust-pdf](https://github.com/kaj/rust-pdf) - 使用纯 Rust 生成 PDF 文件
  * [yfedoseev/pdf_oxide](https://github.com/yfedoseev/pdf_oxide) [[pdf_oxide](https://crates.io/crates/pdf_oxide)] - 快速 PDF 文本提取、创建和编辑，提供 Python 绑定
* [Vulkan](https://www.vulkan.org/) [[vulkan](https://crates.io/keywords/vulkan)]
  * [erupt](https://gitlab.com/Friz64/erupt) [[erupt](https://crates.io/crates/erupt)] - [![build badge](https://gitlab.com/Friz64/erupt/badges/main/pipeline.svg)](https://gitlab.com/Friz64/erupt/-/pipelines)
  * [vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] - Vulkan API 的安全丰富 Rust 封装

### 图形用户界面（GUI）

[[图形用户界面](https://crates.io/keywords/gui)]

* [autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) - 简单跨平台 GUI 自动化库。
* Cocoa
  * [servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) - Mac OS X 和 iOS 的 Core Foundation 及其他底层库的 Rust 绑定
* [DioxusLabs/dioxus](https://github.com/dioxuslabs/dioxus) - 使用 Rust 构建跨平台用户界面的便携、高性能、易用框架。 ![rust ci](https://github.com/dioxuslabs/dioxus/actions/workflows/main.yml/badge.svg)
* [emilk/egui](https://github.com/emilk/egui) - 简单、快速、高度可移植的即时模式 GUI 库。egui 可运行于 Web、原生环境和你喜爱的游戏引擎。 [![Build Status](https://github.com/emilk/egui/workflows/CI/badge.svg)](https://github.com/emilk/egui/actions?workflow=CI)
* [emoon/rust_minifb](https://github.com/emoon/rust_minifb) - minifb 提供跨平台窗口设置及可选位图渲染，附带便捷鼠标与键盘输入，主要用于原型制作
* [euv-dev/euv](https://github.com/euv-dev/euv) [[euv](https://crates.io/crates/euv)] - 声明式跨平台 Rust UI 框架，提供虚拟 DOM、响应式信号及面向 WebAssembly 的 HTML 宏。 [![CI](https://github.com/euv-dev/euv/actions/workflows/rust.yml/badge.svg)](https://github.com/euv-dev/euv/actions)
* [FerrisMind/shadcn-rs](https://github.com/FerrisMind/shadcn-rs) [[iced-shadcn](https://crates.io/crates/iced-shadcn)] - 具有 shadcn/ui 美学的 iced 和 egui 组件集，包含 [egui-shadcn](https://crates.io/crates/egui-shadcn)。
* [FLTK](https://www.fltk.org/)
  * [fltk-rs](https://github.com/fltk-rs/fltk-rs) - FLTK 绑定 [![Build](https://github.com/fltk-rs/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/fltk-rs/fltk-rs/actions)
* [Flutter](https://flutter.dev/)
  * [cunarist/rinf](https://github.com/cunarist/rinf) - Rust 作为 Flutter 后端，Flutter 作为 Rust 前端 [![Build Test](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml/badge.svg)](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml?query=branch%3Amain)
  * [flutter-rs](https://github.com/flutter-rs/flutter-rs) - 使用 Dart 和 Rust 构建 Flutter 桌面应用。
  * [fzyzcjy/flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge) - Flutter/Dart <-> Rust 的高级内存安全绑定生成器
* [fschutt/azul](https://github.com/fschutt/azul) - 免费、函数式、面向 IMGUI 的 GUI 框架，快速开发 Rust 桌面应用，由 Mozilla WebRender 渲染引擎支持。
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
  * [gtk-rs/gtk4-rs](https://github.com/gtk-rs/gtk4-rs) - GTK4 绑定 ![CI](https://github.com/gtk-rs/gtk4-rs/workflows/CI/badge.svg)
  * [relm](https://github.com/antoyo/relm) - 受 Elm 启发、基于 GTK+ 的异步 GUI 库
* [iced-rs/iced](https://github.com/iced-rs/iced) [[iced](https://crates.io/crates/iced)] - 注重简单与类型安全的跨平台 GUI 库，受 Elm 启发。
* [ImGui](https://github.com/ocornut/imgui)
  * [imgui-rs](https://github.com/imgui-rs/imgui-rs) - ImGui 绑定 [![Build Status](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
  * [Kiss-ui](https://github.com/KISS-UI/kiss-ui) - 基于 IUP 的简单 UI 框架
* [ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - 真正原生、跨平台的 GUI 库，统一代码可运行为原生 GUI、HTML Web 和 TUI。
* [libui](https://github.com/andlabs/libui)
  * [rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) - libui 绑定。
* [linebender/xilem](https://github.com/linebender/xilem) [[xilem](https://crates.io/crates/xilem)] - 受 React、SwiftUI 和 Elm 启发的实验性 Rust 响应式 UI 框架，基于 Masonry、Vello/wgpu、Parley 和 AccessKit，提供 Web 与原生后端。 [![CI](https://img.shields.io/github/actions/workflow/status/linebender/xilem/ci.yml?logo=github&label=CI)](https://github.com/linebender/xilem/actions)
* [longbridge/gpui-component](https://github.com/longbridge/gpui-component) [[gpui-component](https://crates.io/crates/gpui-component)] - 使用 GPUI 构建出色桌面应用的 UI 组件。
* [makepad/makepad](https://github.com/makepad/makepad) [[makepad-widgets](https://crates.io/crates/makepad-widgets)] - Makepad 是创意软件开发平台，可编译到 wasm/webGL、osx/metal、windows/dx11 和 linux/opengl。
* [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [nuklear-rust](https://github.com/snuk182/nuklear-rust) - Nuklear 绑定
* [OrbTk](https://github.com/redox-os/orbtk) - Orbital Widget Toolkit 是使用 SDL2 的多平台（G）UI 工具包 [![Build and test](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) - 易用的即时模式 2D GUI 库
* [project-blinc/Blinc](https://github.com/project-blinc/Blinc) [[blinc_app](https://crates.io/crates/blinc_app)] - GPU 加速的跨平台 UI 框架，提供受 GPUI 启发的构建器 API、玻璃拟态效果、弹簧物理动画及桌面、Android 和 iOS 原生渲染。
* [Qt](https://doc.qt.io)
  * [cyndis/qmlrs](https://github.com/cyndis/qmlrs) - QtQuick 绑定
  * [rust-qt](https://github.com/rust-qt) - Rust Qt 绑定
  * [woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - 在编译期构建 QMetaObject，以集成 QML 和 Rust。
* [Ribir](https://github.com/RibirX/Ribir) - Ribir 是 Rust GUI 框架，帮助从单一代码库构建精美原生多平台应用。
* [rise-ui](https://github.com/rise-ui/rise) - 简单、基于组件的跨平台 GUI 工具包，用于开发精美、用户友好的界面。
* [saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) - [nativefiledialog](https://github.com/mlabbe/nativefiledialog) 绑定
* [Sciter](https://sciter.com/)
  * [sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) - Sciter 绑定 [![build badge](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
* [slint-ui/slint](https://github.com/slint-ui/slint) [slint](https://crates.io/crates/slint) - [Slint](https://slint.dev/) 是高效开发流畅图形用户界面的工具包，适用于嵌入式设备和桌面应用。 [![Build Status](https://github.com/slint-ui/slint/workflows/CI/badge.svg?branch=master)](https://github.com/slint-ui/slint/actions?query=workflow%3ACI)
* [smithay](https://github.com/Smithay/smithay) - [[smithay](https://crates.io/crates/smithay)] 是安全、文档完善的库，提供创建 Wayland 合成器的构建块
* [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - 由 [WRY](https://github.com/tauri-apps/wry) 驱动，使用 Web 前端构建更小、更快、更安全的桌面应用。 [![test library](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [tauri-apps/wry](https://github.com/tauri-apps/wry) - WebView 渲染库。
* [xilem](https://github.com/linebender/xilem) - 数据优先 UI 设计工具包 [druid](https://github.com/linebender/druid) 的后继者。

### 图像处理

* [abonander/img_hash](https://github.com/abonander/img_hash) - 感知图像哈希，以及相等性与相似度比较。
* [Enet4/dicom-rs](https://github.com/Enet4/dicom-rs) - DICOM 标准的纯 Rust 实现，使用户操作 DICOM 对象并与 DICOM 应用交互，追求快速、安全、直观易用。
* [image-rs/image](https://github.com/image-rs/image) - 基础图像处理功能，以及图像格式相互转换的方法
* [image-rs/imageproc](https://github.com/image-rs/imageproc) - 基于 `image` 库的图像处理库。
* [marekm4/dominant_color](https://github.com/marekm4/dominant_color) [[dominant_color](https://crates.io/crates/dominant_color)] - 主色提取器 ![build badge](https://github.com/marekm4/dominant_color/actions/workflows/rust.yml/badge.svg?branch=master)
* [rust-cv/cv](https://github.com/rust-cv/cv) - 实现计算机视觉算法、抽象和系统，尽可能支持 `#[no_std]`。 ![build badge](https://github.com/rust-cv/cv/workflows/tests/badge.svg)
* [teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] - 简单隐写术库
* [twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) - OpenCV 绑定

### 语言规范

* [shnewto/bnf](https://github.com/shnewto/bnf) - 解析巴科斯–诺尔范式上下文无关文法的库。

### 许可

* [WyvernIXTL/license-fetcher](https://github.com/WyvernIXTL/license-fetcher) [[license-fetcher](https://crates.io/crates/license-fetcher)] - 构建时获取依赖许可证，并嵌入程序。

### 日志记录

[[日志](https://crates.io/keywords/log)]

* [donnie4w/tklog](https://github.com/donnie4w/tklog "donnie4w/tklog") - 轻量高效的 Rust 结构化日志库，支持日志级别、文件分段和压缩归档。
* [estk/log4rs](https://github.com/estk/log4rs) - 高度可配置的日志框架，模仿 Java Logback 和 log4j 库 [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [fast/logforth](https://github.com/fast/logforth) - 多功能、可扩展、易用的 Rust 应用日志框架，可配置多个分发器、过滤器和追加器，按需定制日志。
* [rbatis/fast_log](https://github.com/rbatis/fast_log) - 异步日志，高性能异步日志记录
* [rust-lang/log](https://github.com/rust-lang/log) - 日志实现
* [seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) - 美观易用的日志记录器。
* [slog-rs/slog](https://github.com/slog-rs/slog) - 结构化、可组合的日志记录
* [tokio-rs/tracing](https://github.com/tokio-rs/tracing) - 应用级追踪框架，支持感知异步的结构化日志、错误处理、指标等 [![Build Status](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)

### 宏

* cute
  * [mattgathu/cute](https://github.com/mattgathu/cute) - Python 风格列表推导式宏。
* [elastio/bon](https://github.com/elastio/bon) [[bon](https://crates.io/crates/bon)] - 为结构体与函数生成编译期检查的构建器，为函数和方法提供部分应用、可选参数和命名参数。 [![build status](https://github.com/elastio/bon/actions/workflows/ci.yml/badge.svg)](https://github.com/elastio/bon/actions)
* [Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - 类似 C# LINQ 表达式的宏与方法。 [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)

### 标记语言

* [bruits/satteri](https://github.com/bruits/satteri) [[satteri](https://crates.io/crates/satteri)] - 高性能 Markdown 与 MDX 处理，使用 Rust 解析和编译、JavaScript 运行插件。包含支持 MDX 扩展的 CommonMark 解析器、MDAST/HAST 树操作及 JavaScript 互操作 NAPI 绑定。
* CommonMark
  * [pulldown-cmark/pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark) - [CommonMark](https://commonmark.org/) 解析器
* [insomnimus/tidier](https://github.com/insomnimus/tidier) [[tidier](https://crates.io/crates/tidier)] - 格式化 HTML、XHTML 和 XML 文档的库。 [![build badge](https://github.com/insomnimus/tidier/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/tidier/actions)

### 移动开发

* Android / iOS
  * [ivnsch/rust_android_ios](https://github.com/ivnsch/rust_android_ios) - 分别使用 rust-swig 和 cbindgen，在 Android 与 iOS 中使用共享库的示例。
* 通用
  * [Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile) - iOS CocoaPods / Android JNI
  * [redbadger/crux](https://github.com/redbadger/crux) [[crux_core](https://crates.io/crates/crux_core)] - 跨平台应用开发。Crux 将应用业务逻辑与行为作为单个可复用核心，在移动端（iOS/Android）与 Web 间共享。 [![Build status](https://img.shields.io/github/actions/workflow/status/redbadger/crux/build.yaml)](https://github.com/redbadger/crux/actions)
* iOS
  * [TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) - 自动创建 iOS 应用所用通用库的 Cargo lipo 子命令。

### 网络编程

* 蓝牙
  * [bluez/bluer](https://github.com/bluez/bluer) [[bluer](https://crates.io/crates/bluer)] - 官方 BlueZ 绑定。 [![build badge](https://github.com/bluez/bluer/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/bluez/bluer/actions/workflows/rust.yml)
* CoAP
  * [Covertness/coap-rs](https://github.com/Covertness/coap-rs) - [受限应用协议（CoAP）](https://datatracker.ietf.org/doc/html/rfc7252)库。
* DNS
  * [kweonminsung/bind9_rndc_rust](https://github.com/kweonminsung/bind9_rndc_rust) [[rndc](https://crates.io/crates/rndc)] - Rust BIND9 RNDC 协议实现 [![CI](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml/badge.svg)](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml)
* Docker
  * [fussybeaver/bollard](https://github.com/fussybeaver/bollard) - Docker 守护进程 API
* FTP
  * [mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) - [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) 客户端
* gRPC
  * [hyperium/tonic](https://github.com/hyperium/tonic) - 原生 gRPC 客户端与服务器实现，支持 async/await [![Crates.io](https://img.shields.io/crates/v/tonic)](https://crates.io/crates/tonic)
  * [tikv/grpc-rs](https://github.com/tikv/grpc-rs) - 基于 C Core 库和 Future 的 gRPC 库
* HTTP
  * [deboa](https://crates.io/crates/deboa) - 基于 Hyper 的友好 HTTP 客户端，提供多种扩展、序列化格式和宏。 [] [![Crates.io](https://img.shields.io/crates/v/deboa)]
  * [Hurl](https://github.com/Orange-OpenSource/hurl) - 使用纯文本和 libcurl 运行并测试 HTTP 请求 [![CI](https://github.com/Orange-OpenSource/hurl/workflows/CI/badge.svg)](https://github.com/Orange-OpenSource/hurl/actions)
* IPNetwork
  * [achanda/ipnetwork](https://github.com/achanda/ipnetwork) - 操作 IP 网络的库
  * [candrew/netsim](https://github.com/canndrew/netsim) - 网络模拟与测试库
* 底层
  * [actix/actix](https://github.com/actix/actix) - Actor 库
  * [dylanmckay/protocol](https://github.com/dylanmckay/protocol) - 自定义 TCP/UDP 协议定义
  * [libpnet/libpnet](https://github.com/libpnet/libpnet) - 跨平台底层网络功能
  * [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) - 为裸机实时系统设计的独立、事件驱动 TCP/IP 协议栈
* message-io
  * [lemunozm/message-io](https://github.com/lemunozm/message-io) - 事件驱动消息库，轻松快速构建网络应用，支持 TCP、UDP 和 WebSocket。 [![build badge](https://img.shields.io/github/workflow/status/lemunozm/message-io/message-io%20ci)](https://github.com/lemunozm/message-io/actions?query=workflow%3A%22message-io+ci%22)
* MQTT
  * [bytebeamio/rumqtt](https://github.com/bytebeamio/rumqtt) - 帮助开发者构建通过 TCP 和 WebSocket 使用 [MQTT 协议](https://mqtt.org) 通信的应用库，可使用或不使用 TLS。 [![Build and Test](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml/badge.svg)](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml)
  * [rmqtt/rmqtt](https://github.com/rmqtt/rmqtt) - MQTT 服务器/MQTT Broker - 面向 5G 时代物联网的可扩展分布式 MQTT 消息代理
* NanoMsg
  * [thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) - [nanomsg](https://nanomsg.org/) 绑定
* NATS
  * [nats-io/nats.rs](https://github.com/nats-io/nats.rs) - 云原生消息系统 NATS 的客户端。 [![Build Status](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] - [Nng (nanomsg v2)](https://nng.nanomsg.org/index.html)绑定 [![build badge](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/-/pipelines)
* NNTP
  * [mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) [[nntp](https://crates.io/crates/nntp)] - [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) 客户端
* P2P
  * [libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) - libp2p 网络协议栈实现。 [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
  * [n0-computer/iroh](https://github.com/n0-computer/iroh) [[iroh](https://crates.io/crates/iroh)] - 基于设备间直接连接构建应用的 crate [![CI](https://github.com/n0-computer/iroh/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)
* POP3
  * [mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) [[pop3](https://crates.io/crates/pop3)] - [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) 客户端
* QUIC
  * [aws/s2n-quic](https://github.com/aws/s2n-quic) - IETF QUIC 协议实现 ![ci](https://img.shields.io/github/actions/workflow/status/aws/s2n-quic/ci.yml?branch=main)
  * [cloudflare/quiche](https://github.com/cloudflare/quiche) - Cloudflare 的 QUIC 传输协议与 HTTP/3 实现 ![build](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)
  * [mozilla/neqo](https://github.com/mozilla/neqo) - QUIC 实现
  * [quinn-rs/quinn](https://github.com/quinn-rs/quinn) - 基于 Future 的 QUIC 实现 [![build badge](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [tencent/tquic](https://github.com/Tencent/tquic) - 高性能、轻量、跨平台 QUIC 库 [![Build Status](https://img.shields.io/github/actions/workflow/status/tencent/tquic/rust.yml)](https://github.com/Tencent/tquic/actions/workflows/rust.yml)
* Raknet
  * [b23r0/rust-raknet](https://github.com/b23r0/rust-raknet) - RakNet 协议实现 [![Build Status](https://img.shields.io/github/workflow/status/b23r0/rust-raknet/Rust)](https://github.com/b23r0/rust-raknet/actions/workflows/rust.yml)
* RPC
  * [remoc-rs/remoc](https://github.com/remoc-rs/remoc) [[remoc](https://crates.io/crates/remoc)] - Remoc 提供类似 Tokio 的通道（广播、mpsc、oneshot、watch），以及通过任意远程传输调用 trait 的能力。 [![build badge](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml)
  * [smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) - 轻松简单开发微服务的 RPC 库。
* SIP
  * [restsend/rsipstack](https://github.com/restsend/rsipstack) - 符合 RFC 3261 的 SIP 协议栈
* Socket.io
  * [1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio) [[rust_socketio](https://crates.io/crates/rust_socketio)] - 使用 Rust 编写的 [socket.io](https://socket.io) 客户端实现。
* SSH
  * [alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) - [libssh2](https://libssh2.org/) 绑定
  * [Thrussh](https://pijul.org/thrussh) [[thrussh](https://crates.io/crates/thrussh)] - 基于 [libsodium](https://doc.libsodium.org/) 的 SSH 库
* Stomp
  * [zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) - [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html) 客户端实现
* VPN
  * [defguard/wireguard-rs](https://github.com/DefGuard/wireguard-rs) - 多平台库，提供统一高级 API，利用原生操作系统内核及用户空间 WireGuard 协议实现管理 WireGuard 接口
* Zenoh
  * [eclipse-zenoh-flow/zenoh-flow](https://github.com/eclipse-zenoh-flow/zenoh-flow) - 从*云端*到*设备端*的跨域计算声明式框架
  * [eclipse-zenoh/zenoh](https://github.com/eclipse-zenoh/zenoh) - 零开销网络协议
* ZeroMQ
  * [erickt/rust-zmq](https://github.com/erickt/rust-zmq) - [ZeroMQ](https://zeromq.org/) 绑定

### 解析

  * [0xlane/pe-sign](https://github.com/0xlane/pe-sign) [[pe-sign]](https://crates.io/crates/pe-sign) - 跨平台 Rust no-std 库，用于验证和提取 PE 文件签名信息。 [![crates.io](https://img.shields.io/crates/v/pe-sign)](https://crates.io/crates/pe-sign) [![build](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml/badge.svg)](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml)
  * [cchexcode/wavefront_rs](https://github.com/cchexcode/wavefront_rs) - Wavefront OBJ 格式解析器。 [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![build badge](https://github.com/cchexcode/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/cchexcode/wavefront_rs/actions)
  * [comex/rust-shlex](https://github.com/comex/rust-shlex) [[shlex](https://crates.io/crates/shlex)] - 将字符串分割为 Shell 单词，类似 Python shlex。 [![build badge](https://github.com/comex/rust-shlex/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/comex/rust-shlex/actions/workflows/test.yml)
  * [Eliah-Lakhin/lady-deirdre](https://github.com/Eliah-Lakhin/lady-deirdre) - 新编程语言与 LSP 服务器框架。
  * [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) - 快速 Rust PDF 分类与文本提取库。
  * [Folyd/robotstxt](https://github.com/Folyd/robotstxt) - Google robots.txt 解析器与匹配器 C++ 库的移植
  * [freestrings/jsonpath](https://github.com/freestrings/jsonpath) - [JsonPath](https://goessner.net/articles/JsonPath/) 引擎，也支持 WebAssembly 和 JavaScript
  * [hmeyer/stl_io](https://crates.io/crates/stl_io) - STL（立体光刻）文件解析器
  * [igumnoff/shiva](https://github.com/igumnoff/shiva) - Shiva 库：以 Rust 实现各类文档（纯文本、Markdown、HTML、PDF 等）解析器与生成器
  * [kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) - 解析表达式文法（PEG）解析器生成器
  * [lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) - LR(1) 解析器生成器
  * [m4rw3r/chomp](https://github.com/m4rw3r/chomp) - 快速 Monad 风格解析器组合器
  * [Marwes/combine](https://github.com/Marwes/combine) - 解析器组合器库
  * [mazznoer/csscolorparser-rs](https://github.com/mazznoer/csscolorparser-rs) [[csscolorparser](https://crates.io/crates/csscolorparser)] - CSS 颜色解析器库 [![CI](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml)
  * [mohamadzoh/phonelib](https://github.com/mohamadzoh/phonelib) [[phonelib](https://crates.io/crates/phonelib)] - 无依赖 Rust 库，用于解析、验证、格式化和规范化国际电话号码。
  * [nrc/zero](https://github.com/nrc/zero) [[zero](https://crates.io/crates/zero/)] - 零分配二进制数据解析
  * [ophi-dev/antlr-rust-runtime](https://github.com/ophi-dev/antlr-rust-runtime) [[antlr-rust-runtime](https://crates.io/crates/antlr-rust-runtime)] - ANTLR v4 运行时，带纯 Rust 解析器生成器：直接从 `.g4` 文法生成解析器（无需 Java），通过官方 ANTLR 一致性测试套件验证。 [![build badge](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml)
  * [oxc-project/oxc](https://github.com/oxc-project/oxc) [[oxc](https://crates.io/crates/oxc)] - 使用 Rust 编写的高性能 JavaScript/TypeScript 解析器、转换器、压缩器和模块解析器，驱动 Rolldown、Nuxt、Nova 等。 [![Build Status](https://github.com/oxc-project/oxc/actions/workflows/ci.yml/badge.svg?event=push&branch=main)](https://github.com/oxc-project/oxc/actions/workflows/ci.yml)
  * [pest-parser/pest](https://github.com/pest-parser/pest) - 优雅的解析器
  * [ptal/oak](https://github.com/ptal/oak) - 类型化 PEG 解析器生成器（编译器插件）
  * [run-llama/liteparse](https://github.com/run-llama/liteparse) [[liteparse](https://crates.io/crates/liteparse)] - 快速轻量 PDF 解析库，支持空间文本提取、边界框、灵活 OCR（Tesseract/HTTP 服务器）和多语言绑定（Rust、Node.js、Python、WASM）。基于 PDFium，附带 CLI 工具 `lit`。 [![CI](https://github.com/run-llama/liteparse/actions/workflows/ci.yml/badge.svg)](https://github.com/run-llama/liteparse/actions/workflows/ci.yml)
  * [rust-bakery/nom](https://github.com/rust-bakery/nom) - 解析器组合器库
  * [s-panferov/queryst](https://github.com/s-panferov/queryst) - 受 [gs](https://github.com/ljharb/qs#readme) 启发的查询字符串解析库
  * [slimreaper35/dockerfile-parser-rs](https://github.com/slimreaper35/dockerfile-parser-rs) [[dockerfile-parser-rs](https://crates.io/crates/dockerfile-parser-rs)] - Dockerfile 解析库与 CLI 工具
  * [softdevteam/grmtools](https://github.com/softdevteam/grmtools/) - 具备更好纠错能力的 LR 解析器
  * [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) - 面向编程工具的解析器生成工具与增量解析库
  * [winnow-rs/winnow](https://github.com/winnow-rs/winnow) [[winnow](https://crates.io/crates/winnow)] - 面向字节、零拷贝的解析器组合器库。 [![Build status](https://github.com/winnow-rs/winnow/workflows/CI/badge.svg)](https://github.com/winnow-rs/winnow/actions)
  * [xberg-io/tree-sitter-language-pack](https://github.com/xberg-io/tree-sitter-language-pack) [[tree-sitter-language-pack](https://crates.io/crates/tree-sitter-language-pack)] - 300 多种语言的预构建 tree-sitter 文法，提供统一解析器 API 和 14 种语言绑定。

### 外设

* [AprilNEA/OpenLogi/crates/openlogi-hidpp](https://github.com/AprilNEA/OpenLogi/tree/main/crates/openlogi-hidpp) [[openlogi-hidpp](https://crates.io/crates/openlogi-hidpp)] - OpenLogi 内置的 hidpp crate 分支，提供 Logitech HID++ 协议支持。
* [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) [[esp-hal](https://crates.io/crates/esp-hal)] - Espressif ESP32 设备（ESP32、ESP32-C2/C3/C5/C6/C61、ESP32-H2、ESP32-P4、ESP32-S2/S3）的裸机 `no_std` 硬件抽象层，为 GPIO、I2C、SPI、UART、定时器、DMA 等提供安全 Rust API。 [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/esp-rs/esp-hal/ci.yml?labelColor=1C2C2E&label=CI&logo=github&style=flat-square)](https://github.com/esp-rs/esp-hal/actions/workflows/ci.yml)
* 指纹读取器
  * [alvaroparker/libfprint-rs](https://github.com/alvaroparker/libfprint-rs) [[libfprint-rs](https://crates.io/crates/libfprint-rs)] - Libfprint-rs 提供 Linux libfprint 库的封装。
* [Michael-A-Kuykendall/crabcamera](https://github.com/Michael-A-Kuykendall/crabcamera) [[crabcamera](https://crates.io/crates/crabcamera)] - 提供桌面摄像头访问的 Tauri 插件，支持自动质量验证与硬件控制。
* 串口
  * [serialport/serialport-rs](https://github.com/serialport/serialport-rs) [[serialport](https://crates.io/crates/serialport)] - 提供串口访问的跨平台库

### 平台专用

* 跨平台
  * [iddm/thread-priority](https://github.com/iddm/thread-priority/) - 简单跨平台线程优先级管理。 [![CI](https://github.com/iddm/thread-priority/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/thread-priority/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/thread-priority.svg)](https://crates.io/crates/thread-priority)
  * [svartalf/rust-battery](https://crates.io/crates/battery) - 跨平台笔记本电池信息
* FreeBSD
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) [[jail](https://crates.io/crates/jail)] - FreeBSD jail 库
* Linux
  * [hannobraun/inotify-rs](https://github.com/hannobraun/inotify-rs) - [inotify](https://en.wikipedia.org/wiki/Inotify) 绑定 [![Rust](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml)
  * [pop-os/distinst](https://github.com/pop-os/distinst/) - Linux 发行版安装器
  * [yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) [[iptables](https://crates.io/crates/iptables)] - [iptables](https://www.netfilter.org/projects/iptables/index.html) 绑定
* 类 Unix
  * [nix-rust/nix](https://github.com/nix-rust/nix) - 类 Unix API 绑定 [![CI](https://github.com/nix-rust/nix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-rust/nix/actions/workflows/ci.yml)
  * [rustix](https://github.com/bytecodealliance/rustix) - POSIX/Unix/Linux/Winsock2 系统调用的安全绑定 [![Actions Status](https://github.com/bytecodealliance/rustix/workflows/CI/badge.svg)](https://github.com/bytecodealliance/rustix/actions?query=workflow%3ACI)
  * [zargony/fuse-rs](https://github.com/zargony/fuse-rs) - [FUSE](https://github.com/libfuse/libfuse) 绑定
* Windows
  * [microsoft/windows-rs](https://github.com/microsoft/windows-rs) - Rust 的 Windows 支持 [![Actions Status](https://github.com/microsoft/windows-rs/workflows/CI/badge.svg)](https://github.com/microsoft/windows-rs/actions)
  * [retep998/winapi-rs](https://github.com/retep998/winapi-rs) - Windows API 绑定 [![Rust](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml/badge.svg?branch=dev)](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml)

### 逆向工程

* [binlex](https://github.com/c3rb3ru5d3d53c/binlex) - 二进制分析与逆向工程框架，支持函数指纹和相似度匹配。
* [idalib](https://github.com/idalib-rs/idalib) [[idalib](https://crates.io/crates/idalib)] - IDA SDK 的 Rust 绑定，可使用 IDA v9.0 的 idalib 开发独立分析工具
* [objdiff](https://github.com/encounter/objdiff) - 反编译项目的本地差异比较工具
* [wakaru](https://github.com/pionxzh/wakaru) [[wakaru](https://crates.io/crates/wakaru)] - JavaScript 反编译器，将 webpack/esbuild/Metro/Browserify 包解包为模块，把压缩器及 Babel/TypeScript 输出还原为可读代码 [![CI](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml/badge.svg?branch=main)](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml)

### 脚本

[[脚本](https://crates.io/keywords/scripting)]

* [3body-lang](https://github.com/rustq/3body-lang) - 三体语言
* [boa-dev/boa](https://github.com/boa-dev/boa) [[boa_engine](https://crates.io/crates/boa_engine)] - 使用 Rust 编写的实验性 JavaScript 词法分析器、解析器和解释器。
* [cel-rust](https://github.com/cel-rust/cel-rust) [[cel-interpreter](https://crates.io/crates/cel-interpreter)] - Common Expression Language 解析器与解释器
* [duckscript](https://crates.io/crates/duckscript) - [简单、可扩展、可嵌入的脚本语言。](https://github.com/sagiegurari/duckscript) [![build badge](https://github.com/sagiegurari/duckscript/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/duckscript/actions)
* [facebook/starlark-rust](https://github.com/facebook/starlark-rust) - 采用 Python 语法的小型、确定性、线程安全语言
* [fleabitdev/gamelisp](https://github.com/fleabitdev/glsp) - 用于游戏开发的类 Lisp 脚本语言
* [giraffekey/xylo](https://github.com/giraffekey/xylo) [[xylo-lang](https://crates.io/crates/xylo-lang)] - 用于程序化艺术的函数式编程语言。 [![build badge](https://github.com/giraffekey/xylo/actions/workflows/rust.yml/badge.svg)](https://github.com/giraffekey/xylo/actions)
* [gluon-lang/gluon](https://github.com/gluon-lang/gluon) - 小型、静态类型的函数式编程语言
* [kcl](https://github.com/kcl-lang/kcl) - 基于约束的记录与函数式语言，主要用于配置和策略场景。
* [kyren/piccolo](https://github.com/kyren/piccolo) [[piccolo](https://crates.io/crates/piccolo)] - 纯 Rust 实现的实验性无栈 Lua VM，提供循环检测增量 GC、沙箱功能及安全 Rust <-> Lua 绑定。 [![crates.io](https://img.shields.io/crates/v/piccolo)](https://crates.io/crates/piccolo)
* [metacall/core](https://github.com/metacall/core) [[metacall](https://crates.io/crates/metacall)] - 跨平台多语言运行时，支持 NodeJS、JavaScript、TypeScript、Python、Ruby、C#、Wasm、Java、Cobol 等。 [![build badge](https://gitlab.com/metacall/core/badges/master/pipeline.svg)](https://gitlab.com/metacall/core)
* [mun](https://github.com/mun-lang/mun) - 编译型静态类型脚本语言，提供一流热重载支持
* [murarth/ketos](https://github.com/murarth/ketos) - Lisp 方言函数式编程语言，作为 Rust 脚本与扩展语言
* [PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) - 充满 Rust 风格的动态类型脚本语言
* [rhaiscript/rhai](https://github.com/rhaiscript/rhai) - 小巧快速的嵌入式脚本语言，类似 JavaScript 与 Rust 的结合 [![build badge](https://github.com/rhaiscript/rhai/workflows/Build/badge.svg)](https://github.com/rhaiscript/rhai/actions)
* [rune-rs/rune](https://github.com/rune-rs/rune) - 可嵌入动态编程语言
* [trynova/nova](https://github.com/trynova/nova) - 完全使用 Rust 编写的 JavaScript 引擎

### 仿真

[[模拟](https://crates.io/keywords/simulation)]

* [nyx-space](https://crates.io/crates/nyx-space) - 高保真、快速、可靠、经过验证的天体动力学工具库，用于航天器任务设计和轨道确定 [![Build Status](https://gitlab.com/nyx-space/nyx/badges/master/pipeline.svg)](https://gitlab.com/nyx-space/nyx/-/pipelines)
* [rsasaki0109/rust_robotics](https://github.com/rsasaki0109/rust_robotics) [[rust_robotics](https://crates.io/crates/rust_robotics)] - 受 PythonRobotics 启发的机器人算法 Rust 实现，覆盖路径规划、定位、SLAM 和控制，支持 no_std 并提供 ROS 2 示例 [![CI](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml)

### 社交网络

* Telegram
  * [tdilb-rs](https://github.com/FedericoBruzzone/tdlib-rs) [[tdilb-rs](https://crates.io/crates/tdlib-rs)] - Telegram Database Library（TDLib）的跨平台 Rust 封装 [![CI Linux](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml) [![CI macOS](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml) [![CI Windows](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml)

### 系统

* [ardaku/whoami](https://github.com/ardaku/whoami) [[whoami](https://crates.io/crates/whoami)] - 获取当前用户与环境的 crate。 [![build badge](https://github.com/ardaku/whoami/actions/workflows/ci.yml/badge.svg?branch=stable)](https://github.com/ardaku/whoami/actions/workflows/ci.yml)
* [GuillaumeGomez/sysinfo](https://github.com/GuillaumeGomez/sysinfo) [[sysinfo](https://crates.io/crates/sysinfo)] - 获取系统信息的跨平台库 [![build badge](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml)
* [navidys/procsys](https://github.com/navidys/procsys) [[procsys](https://crates.io/crates/procsys)] - 从 /proc 和 /sys 伪文件系统获取系统、内核和进程指标的库。
* [Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[nixinfo](https://crates.io/crates/nixinfo)] - 收集 CPU、发行版、环境、内核等系统信息的库 crate。
* [sorairolake/sysexits-rs](https://github.com/sorairolake/sysexits-rs) [[sysexits](https://crates.io/crates/sysexits)] - [`<sysexits.h>`](https://man.openbsd.org/sysexits) 定义的系统退出码。 [![CI](https://github.com/sorairolake/sysexits-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/sysexits-rs/actions?query=workflow%3ACI)

### 任务调度

* [delay-timer](https://github.com/BinChengZhao/delay-timer) - 延迟任务时间管理器，类似 crontab，但支持异步任务。 [![Build](https://github.com/BinChengZhao/delay-timer/actions/workflows/rust.yml/badge.svg)]( https://github.com/BinChengZhao/delay-timer/actions)
* [persistent-scheduler](https://github.com/rustmailer/persistent-scheduler) [[persistent-scheduler](https://crates.io/crates/persistent-scheduler)] - 基于 Tokio 构建的高性能任务调度系统，支持任务持久化、可重复任务和 Cron 调度，可靠执行基于时间的操作。

### 模板引擎

* Handlebars
  * [sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) - Handlebars 模板引擎，支持继承与自定义辅助函数。
  * [zzau13/yarte](https://github.com/zzau13/yarte) - Yarte 是 **Y**et **A**nother **R**ust **T**emplate **E**ngine（又一个 Rust 模板引擎）的缩写，是最快的模板引擎。
* HTML
  * [askama](https://github.com/askama-rs/askama) - 基于 Jinja 的模板渲染引擎
  * [kaj/ructe](https://github.com/kaj/ructe) - HTML 模板系统
  * [Keats/tera](https://github.com/Keats/tera) - 基于 Jinja2 和 Django 模板语言的模板引擎。 [![Actions Status](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [lambda-fairy/maud](https://github.com/lambda-fairy/maud) - 编译期 HTML 模板
  * [mitsuhiko/minijinja](https://github.com/mitsuhiko/minijinja) [[minijinja](https://crates.io/crates/minijinja)] - 基于 Jinja2 的最少依赖模板引擎。 [![Tests](https://img.shields.io/github/actions/workflow/status/mitsuhiko/minijinja/tests.yml?branch=main&logo=github)](https://github.com/mitsuhiko/minijinja/actions/workflows/tests.yml)
  * [rshtml/rshtml](https://github.com/rshtml/rshtml) [[rshtml](https://crates.io/crates/rshtml)] - RsHtml：编译期、类型安全、轻量模板引擎，在 HTML 中嵌入 Rust，在 Rust 中嵌入 HTML。
  * [Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) - 编译期 HTML 模板
* Mustache
  * [rustache/rustache](https://github.com/rustache/rustache) - Mustache 规范的 Rust 实现

### 文本处理

* [becheran/wildmatch](https://github.com/becheran/wildmatch) [[wildmatch](https://crates.io/crates/wildmatch)] - 支持问号和星号通配符运算符的简单字符串匹配 [![Actions Status](https://github.com/becheran/wildmatch/workflows/Build/badge.svg?branch=master)](https://github.com/becheran/wildmatch/actions)
* [BurntSushi/suffix](https://github.com/BurntSushi/suffix) - 线性时间后缀数组构建（支持 Unicode）
* [BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) - 弹性制表位（即文本列对齐）
* [cpc](https://github.com/probablykasper/cpc) - 解析和计算数学字符串，支持单位及转换，从 `1+2` 到 `1% of round(1 lightyear / 14!s to km/h)`。
* [Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - SIMD 加速的 Rust 编辑距离例程，支持快速 Hamming、Levenshtein、受限 Damerau-Levenshtein 等距离计算和字符串搜索 [![build badge](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [fancy-regex/fancy-regex](https://github.com/fancy-regex/fancy-regex) [[fancy-regex](https://crates.io/crates/fancy-regex)] - 正则表达式实现，支持较丰富功能，如环视和回溯。 [![crates](https://img.shields.io/crates/v/fancy-regex.svg)](https://crates.io/crates/fancy-regex) [![build badge](https://github.com/fancy-regex/fancy-regex/workflows/ci/badge.svg)](https://github.com/fancy-regex/fancy-regex/actions/workflows/ci.yml)
* [greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) - 基于三元组的自然语言检测库
* [Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] - 通用字符串与可迭代对象连接
* [mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] - 文本自动换行（支持断词）
* [null8626/decancer](https://github.com/null8626/decancer) [[decancer](https://crates.io/crates/decancer)] - 从字符串中移除常见 Unicode 混淆字符/同形字符的小包。 [![crates](https://img.shields.io/crates/v/decancer.svg)](https://crates.io/crates/decancer) [![build badge](https://github.com/null8626/decancer/workflows/CI/badge.svg)](https://github.com/null8626/decancer/actions/workflows/CI.yml)
* [ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) - 无需消耗迭代器即可向前、向后和随机浏览巨大文件行的读取器
* [pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) [[ngrams](https://crates.io/crates/ngrams)] - 从任意迭代器构建 [n-gram](https://en.wikipedia.org/wiki/N-gram)
* [rust-lang/regex](https://github.com/rust-lang/regex) - 正则表达式（RE2 风格）
* [strsim-rs](https://crates.io/crates/strsim) - 字符串相似度指标
* [xberg-io/html-to-markdown](https://github.com/xberg-io/html-to-markdown) [[html-to-markdown-rs](https://crates.io/crates/html-to-markdown-rs)] - 快速、符合 CommonMark 的 HTML 到 Markdown 转换器，Rust 核心提供 12 种语言绑定。
* [xberg-io/xberg](https://github.com/xberg-io/xberg) [[xberg](https://crates.io/crates/xberg)] - 文档智能库，从 97 种以上格式（PDF、Office、带 OCR 的图像、HTML、邮件、归档）提取文本、表格和元数据，提供 11 种语言绑定。
* [yaa110/rake-rs](https://github.com/yaa110/rake-rs) [[rake](https://crates.io/crates/rake)] - Rust RAKE 算法的多语言实现

### 文本搜索

* [andylokandy/simsearch](https://github.com/andylokandy/simsearch) [[simsearch](https://crates.io/crates/simsearch)] - 简单轻量的内存模糊搜索引擎，搜索相似字符串
* [BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] - 使用有限状态机的快速有序集合与映射实现
* [CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] - 惰性、零分配、不依赖数据类型的信息检索库
* [meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) - 高度相关、即时且容错的全文搜索 API。 [![Build Status](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [pg_search](https://github.com/paradedb/paradedb/tree/dev/pg_search) - PostgreSQL 扩展，使用先进全文搜索排名函数 BM25 算法对 SQL 表进行全文搜索。
* [SeekStorm](https://github.com/SeekStorm/SeekStorm) [[SeekStorm](https://crates.io/crates/seekstorm)] - Rust 亚毫秒全文搜索库与多租户服务器
* [tantivy](https://github.com/quickwit-oss/tantivy) [[tantivy](https://crates.io/crates/tantivy)] - 使用 Rust 编写、快如奔马的全文搜索引擎库。 [![Build Status](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)

### 不安全代码

* [zerocopy](https://crates.io/crates/zerocopy) - “Zerocopy 让零成本内存操作变得轻松。我们编写 `unsafe`，让你不必这么做。”

### 视频

* [ffmpeg-sidecar](https://github.com/nathanbabcock/ffmpeg-sidecar) - 将独立 FFmpeg 二进制程序封装为直观的 Iterator 接口。 [![Build Status](https://github.com/nathanbabcock/ffmpeg-sidecar/actions/workflows/ci.yml/badge.svg)](https://github.com/nathanbabcock/ffmpeg-sidecar/actions)
* [screencapturekit-rs](https://github.com/doom-fish/screencapturekit-rs) [[screencapturekit](https://crates.io/crates/screencapturekit)] - Apple ScreenCaptureKit 框架的安全 Rust 绑定，用于 macOS 屏幕/音频捕获 [![Build Status](https://github.com/doom-fish/screencapturekit-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/doom-fish/screencapturekit-rs/actions)

### 虚拟化

* [beneills/quantum](https://github.com/beneills/quantum) - 高级量子计算机模拟器
* [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime) - 独立 WebAssembly 运行时 [![Build Status](https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg)](https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI)
* [capsule](https://github.com/capsulerun/capsule) - 执行不可信代码的 WebAssembly 沙箱运行时
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) - CrOSVM 使 Chrome OS 在快速、安全的虚拟化环境中运行 Linux 应用
* [oxidecomputer/propolis](https://github.com/oxidecomputer/propolis) - illumos bhyve 内核模块的用户空间程序
* [saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) - OS X 硬件加速虚拟化
* [smol-machines/smolvm](https://github.com/smol-machines/smolvm) - 基于 libkrun 的便携 microVM 沙箱，通过写时复制派生正在运行的虚拟机
* [wasmi-labs/wasmi](https://github.com/wasmi-labs/wasmi) - 轻量 WebAssembly 运行时

### Web 编程

另见 [Are we web yet?](https://www.arewewebyet.org) 和 [Rust Web 框架对比](https://github.com/flosse/rust-web-framework-comparison)。
* 后端
  * [actix/actix-web](https://github.com/actix/actix-web) - 支持 WebSocket 的轻量异步 Web 框架
  * [Anansi](https://github.com/saru-tora/anansi) - 简单全栈 Web 框架
  * [loco-rs/loco](https://github.com/loco-rs/loco) [[loco-rs](https://crates.io/crates/loco-rs)] - 受 Rails 启发、面向个人项目与初创公司的 Rust 单人开发框架。 [![Build](https://github.com/loco-rs/loco/actions/workflows/ci.yml/badge.svg)](https://github.com/loco-rs/loco/actions)
  * [Rocket](https://github.com/rwf2/Rocket) - Rocket 是注重易用性、表达力和速度的 Web 框架
  * [RustAPI](https://github.com/Tuntii/RustAPI) [[rustapi-rs](https://crates.io/crates/rustapi-rs)] - 易用 Web 框架，提供编译期 OpenAPI 与原生 MCP
  * [summer-rs](https://github.com/summer-rs/summer-rs) - summer-rs 是使用 Rust 编写、受 Java Spring Boot 启发的应用框架。
  * [tako](https://github.com/rust-dd/tako) [[tako-rs](https://crates.io/crates/tako-rs)] - 多传输 Web 框架：在统一路由器后支持 HTTP/1.1、HTTP/2、HTTP/3、WebSocket、SSE、gRPC、TCP/UDP 和 Unix 套接字，运行于 Tokio 或 Compio。 [![CI](https://github.com/rust-dd/tako/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rust-dd/tako/actions/workflows/ci.yml)
  * [tokio-rs/axum](https://github.com/tokio-rs/axum) - 使用 Tokio、Tower 和 Hyper 构建的易用、模块化 Web 框架 [![Build badge](https://github.com/tokio-rs/axum/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/tokio-rs/axum/actions/workflows/CI.yml)
  * [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) [[topcoat](https://crates.io/crates/topcoat)] - 模块化、功能齐全的 Rust 全栈 Web 框架，支持服务器端渲染、无需 WASM 的客户端响应性、模块路由和内置 Tailwind/资源打包。 [![Build Status](https://img.shields.io/github/actions/workflow/status/tokio-rs/topcoat/ci.yml?branch=main&style=flat-square)](https://github.com/tokio-rs/topcoat/actions)
  * [trillium](https://github.com/trillium-rs/trillium) [[trillium](https://crates.io/crates/trillium)] - 使用异步 Rust 构建互联网应用的可组合工具包。
* 客户端 / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) - 面向客户端 Web 的 Cargo 子命令
  * [leptos](https://github.com/leptos-rs/leptos) - Leptos 是全栈同构 Web 框架，通过细粒度响应性构建声明式用户界面。[![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/leptos)
  * [sauron](https://github.com/ivanceras/sauron) - 严格遵循 Elm 架构的客户端 Web 框架。
  * [seed](https://github.com/seed-rs/seed) - 创建 Web 应用的框架
  * [stdweb](https://crates.io/crates/stdweb) - 客户端 Web 标准库
  * [synphonyte/leptos-use](https://github.com/synphonyte/leptos-use) [[leptos-use](https://crates.io/crates/leptos-use)] - 受 React-Use 和 VueUse 启发的实用 Leptos 工具集，支持 SSR [![Build Status](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml/badge.svg)](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml)
  * [thaw-ui/thaw](https://github.com/thaw-ui/thaw) [[thaw](https://crates.io/crates/thaw)] - 基于 Fluent Design 的易用 Leptos 组件库
  * [tinyweb](https://github.com/LiveDuo/tinyweb) - 800 行代码实现的极简 Rust Wasm Web 框架
  * [yew](https://crates.io/crates/yew) - 制作客户端 Web 应用的框架
* HTTP 客户端
  * [0x676e67/wreq](https://github.com/0x676e67/wreq) - 支持 TLS 指纹、易用的 Rust HTTP 客户端。 [![CI](https://github.com/0x676e67/wreq/actions/workflows/ci.yml/badge.svg)](https://github.com/0x676e67/wreq/actions/workflows/ci.yml) [![crates.io](https://img.shields.io/crates/v/wreq.svg?logo=rust)](https://crates.io/crates/wreq)
  * [alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) - [libcurl](https://curl.se/libcurl/) 绑定
  * [async-graphql](https://github.com/async-graphql/async-graphql) - GraphQL 服务器库 [![Build Status](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - HTTP/2 客户端框架
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) [[yukikaze](https://crates.io/crates/yukikaze)] - 精美优雅的 Yukikaze 是基于 Hyper 的小型 HTTP 客户端库。 [![build badge](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
  * [ducaale/xh](https://github.com/ducaale/xh) - 友好快速的 HTTP 请求发送工具 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/xh) [![GitHub actions Status](https://github.com/ducaale/xh/workflows/CI/badge.svg?branch=master)](https://github.com/ducaale/xh/actions)
  * [graphql-client](https://github.com/graphql-rust/graphql-client) - 类型化、正确的 GraphQL 请求与响应。 [![GitHub actions Status](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP 实现 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [plabayo/rama](https://github.com/plabayo/rama) - 移动和转换网络数据包的模块化服务框架，可用于构建支持 TLS、JA3/JA4、H2 和 QUIC/H3 指纹模拟的客户端等
  * [seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) - 易用的 HTTP 客户端。
* HTTP 服务器
  * [branca](https://crates.io/crates/branca) - Branca 实现，用于经过身份验证和加密的 API 令牌。
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 底层与高级 HTTP/2 服务器
  * [carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] - 快速、无样板代码的 Web 框架
  * [Cot](https://github.com/cot-rs/cot) - 面向懒惰开发者的 Rust Web 框架。
  * [GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) - JSON Web Token 实现。
  * [Gotham](https://github.com/gotham-rs/gotham) - 不牺牲安全性、安全保障或速度的灵活 Web 框架。
  * [Graphul](https://github.com/graphul-rs/graphul) - 受 Express 启发的 Web 框架。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/graphul)
  * [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Iron Web 框架中间件。
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP 实现 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [Iron](https://github.com/iron/iron) - 基于中间件的服务器框架
  * [Juniper](https://github.com/graphql-rust/juniper) - GraphQL 服务器库
  * [miketang84/sapper](https://github.com/miketang84/sapper) - 基于异步 Hyper 的轻量 Web 框架。
  * [Nickel](https://github.com/nickel-org/nickel.rs/) - 受 [Express](https://expressjs.com/) 启发
  * [plabayo/rama](https://github.com/plabayo/rama) - 移动和转换网络数据包的模块化服务框架，也可识别传入客户端的指纹
  * [poem-web/poem](https://github.com/poem-web/poem) - 功能完整、易用的 Web 框架。 [![CI](https://github.com/poem-web/poem/actions/workflows/ci.yml/badge.svg)](https://github.com/poem-web/poem/actions/workflows/ci.yml)
  * [Rustless](https://github.com/rustless/rustless) - 受 [Grape](https://github.com/ruby-grape/grape) 和 [Hyper](https://github.com/hyperium/hyper) 启发的类 REST API 微框架
  * [Salvo](https://github.com/salvo-rs/salvo) - 基于 Hyper 和 Tokio 的易用 Web 框架。 [![build build](https://github.com/salvo-rs/salvo/actions/workflows/release.yml/badge.svg)](https://github.com/salvo-rs/salvo/actions)
  * [Saphir](https://github.com/richerarc/saphir) - 渐进式 Web 框架，轻松提供底层控制。
  * [seanmonstar/warp](https://github.com/seanmonstar/warp) - 超简单、可组合、快如曲速的 Web 服务器框架。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/warp)
  * [tiny-http](https://github.com/tiny-http/tiny-http) - 底层 HTTP 服务器库
  * [tomaka/rouille](https://github.com/tomaka/rouille) - Web 框架
  * [Zino](https://github.com/zino-rs/zino) - 面向可组合应用的下一代框架
* 杂项
  * [cargonauts](https://github.com/cargonauts-rs/cargonauts) - 构建可维护、结构良好 Web 应用的框架。
  * [edezhic/prest](https://github.com/edezhic/prest) [[prest](https://crates.io/crates/prest)] - 简化全栈开发的渐进式 RESTful 框架
  * [Goldziher/spikard](https://github.com/Goldziher/spikard) [[spikard](https://crates.io/crates/spikard)] - 多语言 Web 工具包，Rust 核心提供 Python、TypeScript、Ruby 和 PHP 绑定。
  * [hominee/dyer](https://github.com/hominee/dyer) [[dyer](https://crates.io/crates/dyer)] - dyer 面向可靠、灵活、快速的请求-响应服务，包括数据处理、网页爬取等，在不牺牲速度的前提下提供友好、灵活、全面的功能。
  * [osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - 嵌入应用的授权策略引擎。 [![Build Status](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - 类似 Python BeautifulSoup 的库，快速轻松操作和查询 HTML 文档。 [![Build Status](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [pyrossh/rust-embed](https://git.sr.ht/~pyrossh/rust-embed) [[rust-embed](https://crates.io/crates/rust-embed)] - 将静态资源嵌入 Rust 二进制程序的宏
  * [rookie](https://github.com/thewh1teagle/rookie) - 从任意平台的任意浏览器加载 Cookie。 ![crates.io](https://img.shields.io/crates/v/rookie.svg)
  * [rust-scraper/scraper](https://github.com/rust-scraper/scraper) [[scraper](https://crates.io/crates/scraper)] - 使用 CSS 选择器解析和查询 HTML。 [![Build Status](https://github.com/rust-scraper/scraper/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rust-scraper/scraper/actions)
  * [serenity-rs/serenity](https://github.com/serenity-rs/serenity) [[serenity](https://crates.io/crates/serenity)] - Discord API 库
  * [softprops/openapi](https://github.com/softprops/openapi) - 处理 OpenAPI 规范文件的库
  * [svix/svix-webhooks](https://github.com/svix/svix-webhooks) [[svix](https://crates.io/crates/svix)] - 发送 Webhook 并验证签名的库。
  * [tbot](https://gitlab.com/SnejUgal/tbot) [[tbot](https://crates.io/crates/tbot)] - 轻松制作酷炫 Telegram 机器人 [![pipeline status](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - 优雅的 Telegram 机器人框架 [![Build Status](https://github.com/teloxide/teloxide/actions/workflows/ci.yml/badge.svg)](https://github.com/teloxide/teloxide/actions)
  * [tu6ge/valitron](https://github.com/tu6ge/valitron) [[valitron](https://crates.io/crates/valitron)] - 易用、函数式、可配置的验证器
  * [utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] - 从 HTML 文档提取有用数据的库，适用于网页抓取。
  * [Utoipa](https://github.com/juhaku/utoipa) - 简单、快速、代码优先、编译期生成的 OpenAPI 文档 [![crates.io](https://img.shields.io/crates/v/utoipa.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipa) [![Utoipa build](https://github.com/juhaku/utoipa/actions/workflows/build.yaml/badge.svg)](https://github.com/juhaku/utoipa/actions/workflows/build.yaml)
  * [Utoipauto](https://github.com/ProbablyClem/utoipauto) - 自动向 Utoipa 添加路径/模式的 Rust 宏 [![crates.io](https://img.shields.io/crates/v/utoipauto.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipauto)
  * [xberg-io/crawlberg](https://github.com/xberg-io/crawlberg) [[crawlberg](https://crates.io/crates/crawlberg)] - 高性能网页爬取与抓取引擎，支持 HTML 到 Markdown 转换、无头 Chrome 回退和 11 种语言绑定。
* 反向代理
  * [sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] - HTTP 反向代理。 [![CI](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml)
* 静态网站生成器
  * [cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) - 静态网站生成器 [![Build Status](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) [[mdblog](https://crates.io/crates/mdblog)] - 从 Markdown 文件生成静态网站。
  * [getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] - 有明确设计主张、内置一切的静态网站生成器。 [![Build Status](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [grego/blades](https://github.com/grego/blades) [[blades](https://www.getblades.org/)] - 极快、极简单的静态网站生成器。
  * [leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] - 简单、并行的博客生成器。
  * [rochacbruno/marmite](https://github.com/rochacbruno/marmite/) [[Marmite](https://marmite.blog/)] - 零配置博客生成器
  * [zensical/zensical](https://github.com/zensical/zensical) - Material for MkDocs 团队开发的现代静态网站生成器 [![Build](https://github.com/zensical/zensical/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/zensical/zensical/actions/workflows/build.yml)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 支持加密的客户端与服务器。
  * [housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) - 轻量、事件驱动的 WebSocket
  * [iddm/urlshortener-rs](https://github.com/iddm/urlshortener-rs) - 极简单的 URL 缩短库。 [![CI](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/urlshortener.svg)](https://crates.io/crates/urlshortener)
  * [ratchet](https://github.com/graphform/ratchet) [[ratchet_rs](https://crates.io/crates/ratchet_rs)] - Ratchet 是快速、轻量、完全异步的 WebSocket 协议实现，支持扩展与 Deflate。
  * [rerun-io/ewebsock](https://github.com/rerun-io/ewebsock) [[ewebsock](https://crates.io/crates/ewebsock)] - 简单的 Rust WebSocket 库，可编译到原生环境和 Web（WASM）。通过适合异步的 API 发送与接收文本/二进制消息。 [![unsafe forbidden](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
  * [rust-websocket](https://github.com/websockets-rs/rust-websocket) - 处理 WebSocket 连接（客户端和服务器）的框架
  * [snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) - 轻量、基于流的 WebSocket 实现。
  * [vi/websocat](https://github.com/vi/websocat) - 与 WebSocket 交互的 CLI，具备 Netcat、Curl 和 Socat 的功能。

## 注册表

注册表允许你将 Rust 库发布为 crate 包，公开或私下与他人共享。

* [cenotelie/cratery](https://github.com/cenotelie/cratery) - 面向组织的轻量私有 Cargo 注册表，功能齐全，包含类似 [docs.rs](https://docs.rs) 和 [deps.rs](https://deps.rs) 的功能。 [![CI](https://github.com/cenotelie/cratery/actions/workflows/ci.yml/badge.svg)](https://github.com/cenotelie/cratery/actions/workflows/ci.yml)
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/product/formats/cargo-registry) - 完全托管的包管理 SaaS，一流支持公共与私有 Cargo/Rust 注册表（以及许多其他类型），开源项目免费。
* [Crates](https://crates.io) - Rust/Cargo 官方公共注册表。
* [getnora-io/nora](https://github.com/getnora-io/nora) - 轻量、单二进制产物注册表，支持 Docker、Maven、npm、PyPI、Cargo、Go 和原始格式。提供带缓存的上游代理与隔离网络模式。
* [RepoFlow :heavy_dollar_sign:](https://www.repoflow.io) - 简单现代的仓库平台，托管 Rust crate 仓库并代理 crates.io，也支持 Docker、PyPI、Maven、npm 和 RubyGems 等其他包类型，可用云服务或自托管。
* [w4/chartered](https://github.com/w4/chartered) - 私有、需身份验证、带权限控制的 Cargo 注册表 [![CI](https://github.com/w4/chartered/actions/workflows/ci.yml/badge.svg)](https://github.com/w4/chartered/actions/workflows/ci.yml)

## 资源

* [A Brief History of Rust. Part 1](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-1-805459c60c6b) - 从开发者追求软件稳定，到项目几乎让创作者失去稳定。[第二部分](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-981d61451aa5)。[第三部分](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-b8c0f7a7e781?sk=c0e7fe5fde11a62edc23f284f125aa18)。
* [ANSSI-FR/rust-guide](https://github.com/ANSSI-FR/rust-guide) - 法国网络安全机构（ANSSI）关于使用 Rust 开发安全应用的建议，附生成的检查清单
* 艺术
  * [🦀 Free Ferris Pack 🦀](https://github.com/MariaLetta/free-ferris-pack) - 50 多个免费的 Ferris 插画，涵盖不同情绪、姿态和场景，提供 PNG 和 SVG 格式，采用 CC0 许可
* 基准测试
  * [c410-f3r/wtx-bench](https://github.com/c410-f3r/wtx-bench) - Web 基准测试
  * [TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) - [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/) 的实现
* 幻灯片与演讲
  * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) - [Julia Evans](https://x.com/b0rk) 在 Rustconf 2016 的演讲。
  * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) - [Nicholas Matsakis](https://github.com/nikomatsakis) 在 C++Now 2018 的演讲
  * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) - [Michael Gattozzi](https://github.com/mgattozzi) 在 RustConf 2017 的演讲
* 学习
  * [100 Exercises To Learn Rust](https://rust-exercises.com) - 通过 100 个动手练习学习 Rust，覆盖语法、类型等
  * [An Introduction to Programming using entity-component-systems and existence-based processing in Rust](https://root-11.github.io/intro-book/) - Bjorn Madsen 编写的书籍
  * [Aquascope](https://github.com/cognitive-engineering-lab/aquascope) - Rust 编译期与运行期交互式可视化
  * [Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - 社区精选直播列表。
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) - 愿意接收学员并教授 Rust 与编程的热心导师列表。
  * [CIS 198: Rust Programming](http://cis198-2016s.github.io/schedule/) - 宾夕法尼亚大学计算机科学 Rust 编程课程
  * [CodeCrafters.io](https://app.codecrafters.io/tracks/rust) - 构建自己的 Redis、Git、Docker 或 SQLite
  * [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - 三天 Rust 基础课程，另提供 Android、裸机 Rust 和并发的一天课程；有英语、[巴西葡萄牙语](https://google.github.io/comprehensive-rust/pt-BR/)和[韩语](https://google.github.io/comprehensive-rust/ko/)版本。
  * [Easy Rust](https://github.com/Dhghomon/easy_rust) - 用简单英语学习 Rust。
  * [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - 构建快速、高效且远比传统 C 或 C++ 嵌入式软件安全的固件的实践入门。
  * [exercism.org](https://exercism.org/tracks/rust) - 帮助学习 Rust 新概念的编程练习。
  * [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) - [Herbert Wolverson](https://github.com/thebracket/) 编写、通过制作游戏学习 Rust 的实践指南（付费）
  * [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker) - [Qouteall](https://github.com/qouteall) 编写的指南，介绍 Rust 借用机制及如何避免借用错误
  * [Idiomatic Rust](https://github.com/mre/idiomatic-rust) - 经同行审查、教授惯用 Rust 的文章/演讲/仓库集合。
  * [LabEx Rust Skill Tree](https://labex.io/skilltrees/rust) - 结构化 Rust 学习路径，提供动手实验，帮助初学者逐步掌握 Rust。
  * [Learn Rust 101](https://rust-lang.guide/) - 帮助你成为 Rustacean（Rust 开发者）的指南
  * [Learn Rust by 500 lines code](https://github.com/cuppar/rtd) - 通过 500 行代码学习 Rust，从零构建待办事项 CLI 应用。
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - 通过实现几种不同列表结构，深入探索 Rust 内存管理规则。
  * [Little Book of Rust Books](https://lborb.github.io/book/) - 精选 Rust 书籍与操作指南列表。
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) - 编程社区投票推荐的资源列表。
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - Rust 语言入门书籍。
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - 可运行示例集合，展示多种 Rust 概念与标准库。
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - 简单示例集合，演示如何使用 Rust 生态 crate，以良好实践完成常见编程任务。
  * [Rust Flashcards](https://github.com/ad-si/Rust-Flashcards) - 550 多张学习 Rust 基本原理的闪卡。
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) - 面向有经验软件开发者的 Rust 快速入门。
  * [Rust Gym](https://github.com/warycat/rustgym) - 使用 Rust 解决的编程面试题大合集。
  * [Rust in Action](https://www.manning.com/books/rust-in-action) - [Tim McNamara](https://github.com/timClicks) 编写的 Rust 系统编程实践指南（付费）
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) - [Carol Nichols](https://github.com/carols10cents) 和 [Jake Goulding](https://github.com/shepmaster) 的视频系列（付费）
  * [Rust Language Cheat Sheet](https://cheats.rs/) - Rust 语言速查表
  * [Rust Tiếng Việt](https://rust-tieng-viet.github.io/) - 用越南语学习 Rust。
  * [rust-how-do-i-start](https://github.com/jondot/rust-how-do-i-start) - 专门回答“Rust，我该如何*开始*？”的仓库，为初学者精选资源与学习路线。
  * [rust-learning](https://github.com/ctjhoa/rust-learning) - 学习 Rust 的实用资源集合
  * [Rustfinity](https://www.rustfinity.com) - 通过动手练习和挑战实践 Rust 的交互平台
  * [Rustlings](https://github.com/rust-lang/rustlings) - 帮助熟悉 Rust 代码读写的小练习
  * [Rusty CS](https://github.com/AbdesamedBendjeddou/Rusty-CS) - 用 Rust 实践已学学术知识的计算机科学课程
  * [stdx](https://github.com/brson/stdx) - 先学习这些 crate，将其作为标准库扩展
  * [Tour of Rust](https://tourofrust.com) - Rust 编程语言功能的交互式分步指南。
* 性能
  * [How to avoid bounds checks in Rust (without unsafe!)](https://shnatsel.medium.com/how-to-avoid-bounds-checks-in-rust-without-unsafe-f65e618b4c1e) - 关于优化边界检查你需要了解的一切
  * [Performance of Rust language](https://raw.githubusercontent.com/yugr/rust-slides/main/EN.pdf) - Rust 面向性能的语言功能概览
  * [The Rust Performance Book](https://nnethercote.github.io/perf-book/) - Rust 程序优化技巧
* 播客
  * [New Rustacean](https://newrustacean.com) - 关于学习 Rust 的播客
  * [Rustacean Station](https://rustacean-station.org/) - 创作 Rust 播客内容的社区项目
* [Rust Design Patterns](https://github.com/rust-unofficial/patterns) - Rust 设计模式、反模式与惯用法目录
* [Rust Guidelines](http://aturon.github.io/) - Aaron Turon 关于 Rust 的博客文章
* [Rust Security Handbook](https://github.com/yevh/rust-security-handbook) - 十章手册，教你编写真正安全的 Rust：类型安全、防止 panic 等。
* [Rust Servers, Services and Apps - MEAP](https://www.manning.com/books/rust-servers-services-and-apps) - 使用 Rust 构建后端服务器、服务和前端，获得快速、可靠、可维护的应用。
* [Rust Subreddit](https://www.reddit.com/r/rust/) - 发布并讨论 Rust 相关问题、文章与资源的 subreddit（论坛）
* [RustBooks](https://github.com/sger/RustBooks) - RustBooks 列表
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t) - RustCamp 2015 演讲录像
* [RustViz](https://github.com/rustviz/rustviz) - 从简单 Rust 程序生成可视化，帮助用户更好理解 Rust 生命周期与借用机制。
* [Watch Jon Gjengset Implement BitTorrent in Rust](https://www.youtube.com/watch?v=jf_ddGnum_4) - 使用 Rust 实现 BitTorrent 客户端（部分功能）

## 许可

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
