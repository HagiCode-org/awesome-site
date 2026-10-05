# Awesome Rust [![lint badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml/badge.svg)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/lint.yml) [![build badge](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rust-unofficial/awesome-rust/actions/workflows/rust.yml) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/rust-unofficial/awesome-rust/)

Rustのコードやリソースを厳選した一覧です。

貢献する場合は、[こちら](CONTRIBUTING.md)をお読みください。

<!-- BEGIN mktoc {"min_depth": 2} -->

- [アプリケーション](#applications)
  - [音声・音楽](#audio-and-music)
  - [ブロックチェーン](#blockchain)
  - [データベース](#database)
  - [組み込み](#embedded)
  - [エミュレーター](#emulators)
  - [ファイルマネージャー](#file-manager)
  - [金融](#finance)
  - [ゲーム](#games)
  - [グラフィックス](#graphics)
  - [画像処理](#image-processing)
  - [産業オートメーション](#industrial-automation)
  - [メッセージキュー](#message-queue)
  - [MLOps](#mlops)
  - [可観測性](#observability)
  - [オペレーティングシステム](#operating-systems)
  - [パッケージマネージャー](#package-managers)
  - [決済](#payments)
  - [生産性](#productivity)
  - [ルーティングプロトコル](#routing-protocols)
  - [セキュリティツール](#security-tools)
  - [ソーシャルネットワーク](#social-networks)
  - [システムツール](#system-tools)
  - [タスクスケジューリング](#task-scheduling)
  - [テキストエディター](#text-editors)
  - [テキスト処理](#text-processing)
  - [ユーティリティ](#utilities)
  - [動画](#video)
  - [仮想化](#virtualization)
  - [Web](#web)
  - [Webサーバー](#web-servers)
  - [ワークフロー自動化](#workflow-automation)
- [開発ツール](#development-tools)
  - [ビルドシステム](#build-system)
  - [デバッグ](#debugging)
  - [デプロイ](#deployment)
  - [組み込み](#embedded-1)
  - [FFI](#ffi)
  - [フォーマッター](#formatters)
  - [IDE](#ides)
  - [プロファイリング](#profiling)
  - [サービス](#services)
  - [静的解析](#static-analysis)
  - [テスト](#testing)
  - [トランスパイル](#transpiling)
  - [トンネル](#tunnel)
- [ライブラリ](#libraries)
  - [人工知能](#artificial-intelligence)
    - [遺伝的アルゴリズム](#genetic-algorithms)
    - [Google Gemini](#google-gemini)
    - [機械学習](#machine-learning)
    - [OpenAI](#openai)
    - [ツール](#tooling)
  - [天文学](#astronomy)
  - [非同期](#asynchronous)
  - [音声・音楽](#audio-and-music-1)
  - [認証](#authentication)
  - [自動車](#automotive)
  - [バイオインフォマティクス](#bioinformatics)
  - [キャッシュ](#caching)
  - [クラウド](#cloud)
  - [コマンドライン](#command-line)
  - [圧縮](#compression)
  - [計算](#computation)
  - [並行処理](#concurrency)
  - [設定](#configuration)
  - [暗号](#cryptography)
  - [データ処理](#data-processing)
  - [データストリーミング](#data-streaming)
  - [データ構造](#data-structures)
  - [データ可視化](#data-visualization)
  - [データベース](#database-1)
  - [日付と時刻](#date-and-time)
  - [分散システム](#distributed-systems)
  - [ドメイン駆動設計](#domain-driven-design)
  - [eBPF](#ebpf)
  - [メール](#email)
  - [エンコーディング](#encoding)
  - [ファイルシステム](#filesystem)
  - [金融](#finance-1)
  - [関数型プログラミング](#functional-programming)
  - [ゲーム開発](#game-development)
  - [地理空間](#geospatial)
  - [グラフアルゴリズム](#graph-algorithms)
  - [グラフィックス](#graphics-1)
  - [GUI](#gui)
  - [画像処理](#image-processing-1)
  - [言語仕様](#language-specification)
  - [ライセンス](#licensing)
  - [ロギング](#logging)
  - [マクロ](#macro)
  - [マークアップ言語](#markup-language)
  - [モバイル](#mobile)
  - [ネットワークプログラミング](#network-programming)
  - [解析](#parsing)
  - [周辺機器](#peripherals)
  - [プラットフォーム固有](#platform-specific)
  - [リバースエンジニアリング](#reverse-engineering)
  - [スクリプティング](#scripting)
  - [シミュレーション](#simulation)
  - [ソーシャルネットワーク](#social-networks-1)
  - [システム](#system)
  - [タスクスケジューリング](#task-scheduling-1)
  - [テンプレートエンジン](#template-engine)
  - [テキスト処理](#text-processing-1)
  - [テキスト検索](#text-search)
  - [Unsafe](#unsafe)
  - [動画](#video-1)
  - [仮想化](#virtualization-1)
  - [Webプログラミング](#web-programming)
- [レジストリ](#registries)
- [リソース](#resources)
- [ライセンス](#license)
<!-- END mktoc -->

## アプリケーション

* [ad-si/Woxi](https://github.com/ad-si/Woxi) [[woxi](https://crates.io/crates/woxi)] - Rust製のWolfram Languageインタープリター。
* [alacritty](https://github.com/alacritty/alacritty) - GPUで強化されたクロスプラットフォームのターミナルエミュレーター
* [Andromeda](https://github.com/tryandromeda/andromeda) - Nova Engineを搭載し、Rust 🦀で一から構築されたJavaScript／TypeScriptランタイム。
* [arimxyer/models](https://github.com/arimxyer/models) [[modelsdev](https://crates.io/crates/modelsdev)] - AIモデル、ベンチマーク、コーディングエージェントを閲覧するTUI [![CI](https://github.com/arimxyer/models/actions/workflows/ci.yml/badge.svg)](https://github.com/arimxyer/models/actions/workflows/ci.yml)
* [Arti](https://gitlab.torproject.org/tpo/core/arti) - Torの実装（現時点では未完成のクライアントですが、今後にご期待ください）。 [![Crates.io](https://img.shields.io/crates/v/arti.svg)](https://crates.io/crates/arti)
* [asm-cli-rust](https://github.com/cch123/asm-cli-rust) - 対話型アセンブリシェル。
* [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) - TauriとRustを基盤とする、Windows、macOS、Linux対応のモダンなClash GUI。
* [cloudflare/boringtun](https://github.com/cloudflare/boringtun) - ユーザー空間で動作するWireGuard VPNの実装 [![build badge](https://img.shields.io/crates/v/boringtun.svg)](https://crates.io/crates/boringtun)
* [DBX](https://github.com/t8y2/dbx) - Tauri製の軽量なオープンソースDB管理ツール。MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDBなどに対応。 [![CI](https://github.com/t8y2/dbx/actions/workflows/ci.yml/badge.svg)](https://github.com/t8y2/dbx/actions/workflows/ci.yml)
* [defguard](https://github.com/defguard/defguard) - 本格的な2FA/MFAを備える、エンタープライズ向けオープンソースSSOおよびWireGuard VPN
* [denoland/deno](https://github.com/denoland/deno) - V8とTokioを用いて構築された、安全なJavaScript／TypeScriptランタイム [![Build Status](https://github.com/denoland/deno/actions/workflows/ci.yml/badge.svg)](https://github.com/denoland/deno/actions)
* [doprz/dipc](https://github.com/doprz/dipc) - お気に入りのカラーパレットやテーマを使って画像や壁紙を変換 [![crates.io](https://img.shields.io/crates/v/dipc)](https://crates.io/crates/dipc)
* [EasyTier](https://github.com/EasyTier/EasyTier) - WireGuard対応の、シンプルで高機能な分散型メッシュVPN。 [![crates.io](https://img.shields.io/crates/v/easytier)](https://crates.io/crates/easytier) [![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/core.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)[![GitHub actions](https://github.com/EasyTier/EasyTier/actions/workflows/gui.yml/badge.svg)](https://github.com/EasyTier/EasyTier/actions/)
* [Edit](https://github.com/microsoft/edit) - シンプルな用途に応えるシンプルなエディター。 [![CI](https://github.com/microsoft/edit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/edit/actions/workflows/ci.yml)
* [fcsonline/drill](https://github.com/fcsonline/drill) - Ansible構文に着想を得たHTTP負荷テストアプリケーション
* [fend](https://github.com/printfn/fend) - 任意精度で単位を扱える計算機 [![build](https://github.com/printfn/fend/workflows/build/badge.svg)](https://github.com/printfn/fend/actions/workflows/actions.yml)
* [Fractalide](https://github.com/fractalide/fractalide) - シンプルなマイクロサービス
* [GCWing/BitFun](https://github.com/GCWing/BitFun) - 実際のリポジトリで動作し、ブラウザー、ターミナル、デスクトップアプリを操作できるRustランタイム搭載のクロスプラットフォームAIデスクトップエージェント
* [giga-grabber](https://github.com/chanderlud/giga-grabber) - 非常に高速で比較的安定したMegaダウンローダー [![build](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml/badge.svg)](https://github.com/chanderlud/giga-grabber/actions/workflows/release.yml)
* [glzr-io/glazewm](https://github.com/glzr-io/glazewm) - i3wmに着想を得たWindows用タイル型ウィンドウマネージャー。YAML設定、マルチモニター、キーボード操作に対応。
* [google/mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers) [[mdbook-i18n-helpers](https://crates.io/crates/mdbook-i18n-helpers)] - mdBook向けの国際化およびレンダリング拡張機能。
* [habitat](https://github.com/habitat-sh/habitat) - アプリケーションのビルド、デプロイ、管理を行うためにChefが開発したツール。
* [Herd](https://github.com/imjacobclark/Herd) - 実験的なHTTP負荷テストアプリケーション
* [hickory-dns](https://crates.io/crates/hickory-dns) - DNSサーバー [![Build Status](https://github.com/hickory-dns/hickory-dns/actions/workflows/test.yml/badge.svg)](https://github.com/hickory-dns/hickory-dns/actions?query=workflow%3Atest)
* [innernet](https://github.com/tonarino/innernet) - WireGuardを内部で利用するオーバーレイ型のプライベートメッシュネットワーク
* [jedisct1/flowgger](https://github.com/awslabs/flowgger) - 高速でシンプル、軽量なデータコレクター
* [kalker](https://github.com/PaddiM8/kalker) - 数式風の構文をサポートする科学計算機。ユーザー定義の変数や関数、微分、積分、複素数に対応。クロスプラットフォームでWASMもサポート。 [![Build Status](https://github.com/PaddiM8/kalker/workflows/Release/badge.svg)](https://github.com/PaddiM8/kalker/actions)
* [kftray](https://github.com/hcavarsan/kftray) - 複数のkubectlポートフォワード設定を管理・共有するクロスプラットフォームのシステムトレイアプリ。 [![Build Status](https://github.com/hcavarsan/kftray/workflows/Release/badge.svg)](https://github.com/hcavarsan/kftray/actions)
* [kytan](https://github.com/changlan/kytan) - 高性能なピアツーピアVPN
* [linkerd/linkerd2-proxy](https://github.com/linkerd/linkerd2-proxy) - Kubernetes向けの超軽量サービスメッシュ。
* [LWE](https://github.com/YangYuS8/lwe) - RustとTauriで構築された、Wallpaper Engineのコンテンツを閲覧・管理・適用するLinuxデスクトップアプリ。
* [lzanini/mdbook-katex](https://github.com/lzanini/mdbook-katex) [[mdbook-katex](https://crates.io/crates/mdbook-katex)] - LaTeX数式をKaTeXで描画する[mdBook](https://github.com/rust-lang/mdBook)用プリプロセッサ。
* [MaidSafe](https://github.com/maidsafe) - 分散型プラットフォーム。
* [mayocream/koharu](https://github.com/mayocream/koharu) - CandleとTauriで構築された、吹き出しの自動検出、OCR、インペインティング、LLM翻訳に対応する機械学習ベースの漫画翻訳ツール
* [mdBook](https://github.com/rust-lang/mdBook) - Markdownファイルから書籍を作成するコマンドラインユーティリティ [![Build Status](https://github.com/rust-lang/mdBook/actions/workflows/main.yml/badge.svg)](https://github.com/rust-lang/mdBook/actions)
* [Mega](https://github.com/web3infra-foundation/mega) - Git対応のモノレポ／モノリシックなコードベース管理システム。Google Piperの非公式オープンソース実装でもあります。
* [Michael-F-Bryan/mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck) [[mdbook-linkcheck](https://crates.io/crates/mdbook-linkcheck)] - リンクをチェックするmdbook用バックエンド。
* [mirrord](https://github.com/metalbear-co/mirrord) - ローカルプロセスをクラウド環境に接続し、クラウド環境の条件でローカルコードを実行
* [mmalmi/nostr-vpn](https://github.com/mmalmi/nostr-vpn) [[nvpn](https://crates.io/crates/nvpn)] - Nostr IDとFIPS準拠のデータプレーンを基盤とするTailscale風のプライベートメッシュVPN。macOS、Linux、Windows、モバイル向けのネイティブアプリとCLI／デーモンを搭載。
* [newdee/magpie](https://github.com/newdee/magpie) - GitHubのスター、ローカルファイル、画像、動画をオンデバイスで意味検索する、ローカル優先のSpotlight風ランチャー。 [![CI](https://github.com/newdee/magpie/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/newdee/magpie/actions/workflows/ci.yml)
* [nicohman/eidolon](https://github.com/nicohman/eidolon) - LinuxとmacOS向けの、SteamやDRMに依存しないゲームレジストリ兼ランチャー
* [openma-ai/Martty](https://github.com/openma-ai/Martty) - DeepSeek HarnessなどACP互換コーディングエージェント向けのRust／ratatuiターミナルクライアント。 [![CI](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml/badge.svg?branch=main)](https://github.com/openma-ai/Martty/actions/workflows/package-npm.yml)
* [OxideTerm](https://github.com/AnalyseDeCircuit/oxideterm) - Tauri 2.0と純Rust製SSH（russh）で構築された、クロスプラットフォームのSSHクライアント兼ローカルターミナルエミュレーター。多重化接続、SFTPファイルマネージャー、CodeMirror 6内蔵IDE、ポートフォワーディング（-L/-R/-D）、Grace Period自動再接続、プラグイン、AIアシスタント、暗号化エクスポート（.oxide）、11言語に対応。 [![CI](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml/badge.svg)](https://github.com/AnalyseDeCircuit/oxideterm/actions/workflows/ci.yml)
* [Pijul](https://pijul.org) - パッチベースの分散型バージョン管理システム
* [provrb/OBDium](https://github.com/provrb/obdium) - 車両診断のあらゆる用途に対応するクロスプラットフォームのTauriアプリ。ELM327アダプターで車両に接続し、故障コード、OBD-IIライブデータ、I/M準備状況テストなどを確認できます。
* [qiluo-admin](https://github.com/chelunfu/qiluo_admin) - エンタープライズ向け高速開発プラットフォーム（Axum + SeaORM + JWT + VUE3。MySQL／Postgres／SQLite対応）
* [Rauthy](https://github.com/sebadob/rauthy) - OpenID Connectシングルサインオン（SSO）を提供するID・アクセス管理システム
* [Rio](https://github.com/raphamorim/rio) - WebGPU搭載のハードウェアアクセラレーション対応GPUターミナルエミュレーター。デスクトップとブラウザーでの実行を重視。
* [rkik](https://github.com/aguacero7/rkik) - digやpingがDNSやICMPに対して行うのと同様に、ステートレスで受動的なNTP検査を行うCLIツール。非同期リクエストと継続的監視に対応。 [![crates.io](https://img.shields.io/crates/v/rkik?logo=rust)](https://crates.io/crates/rkik)
* [run](https://github.com/Esubaalew/run) [[run-kit](https://crates.io/crates/run-kit)] - 25以上の言語（Python、JS、Go、Cなど）に対応する汎用マルチ言語ランナー兼スマートREPL。
* [runmat-org/runmat](https://github.com/runmat-org/runmat) [[runmat](https://crates.io/crates/runmat)] - MATLAB構文の数値プログラムを実行するランタイム。wgpuによるGPUアクセラレーションに対応。 [![CI](https://github.com/runmat-org/runmat/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/runmat-org/runmat/actions/workflows/ci.yml)
* [Rust Iot Platform](https://github.com/iot-ecology/rust-iot-platform) - マルチプロトコル対応とリアルタイムデータ処理を目的に設計された高性能Rust製IoT開発プラットフォーム。MQTT、WebSockets（WS）、TCP、CoAPに対応し、幅広い用途に柔軟に対応します。
* [rx](https://github.com/cloudhead/rx) - Viに着想を得たモダンなピクセルアートエディター
* [Ryot](https://github.com/ignisda/ryot) - メディア消費、フィットネスなどを記録するセルフホスト型アプリケーション
* [s00d/switchshuttle](https://github.com/s00d/switchshuttle) - グローバルホットキー、ネストしたメニュー、JSONベース設定で、定義済みターミナルコマンドを整理・実行するクロスプラットフォームのシステムトレイアプリ（Tauri + Vue）。
* [Saga Reader](https://github.com/sopaco/saga-reader) - AIを活用した、非常に高速で軽量なインターネットリーダー。検索エンジン情報の取得とRSSに対応。
* [Servo](https://github.com/servo/servo) - プロトタイプのWebブラウザーエンジン
* [shoes](https://github.com/cfal/shoes) - マルチプロトコル対応のプロキシサーバー
* [shuttle](https://github.com/shuttle-hq/shuttle) - サーバーレスプラットフォーム。
* [Sniffnet](https://github.com/GyulyVGC/sniffnet) - ネットワークトラフィックを手軽に監視できるクロスプラットフォームアプリケーション [![build badge](https://img.shields.io/github/actions/workflow/status/gyulyvgc/sniffnet/rust.yml?logo=github)](https://github.com/GyulyVGC/sniffnet/blob/main/.github/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/sniffnet?logo=rust)](https://crates.io/crates/sniffnet)
* [SWC](https://github.com/swc-project/swc) - 超高速なTypeScript／JavaScriptコンパイラー
* [TabbyML/tabby](https://github.com/TabbyML/tabby) - GPUとOpenAPIインターフェース対応のセルフホスト型AIコーディングアシスタント。GitHub Copilotのオープンソース代替製品。 [![latest release](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
* [temps](https://github.com/gotempsh/temps) - 分析、エラー追跡、稼働監視を単一のRustバイナリに統合し、Vercelを置き換えるセルフホスト型PaaS
* [tiny](https://github.com/osa1/tiny) - ターミナル向けIRCクライアント
* [topjohnwu/Magisk](https://github.com/topjohnwu/Magisk) - rootアクセス、ブートイメージ操作、システムレス変更機能を備え、Androidをカスタマイズするオープンソースツール群
* [tunnetio/Tunnet](https://github.com/tunnetio/Tunnet) - パブリックトンネル、IDベースのSSH、P2Pファイル転送に対応するプライベートメッシュネットワーク
* [Tura-AI/tura](https://github.com/Tura-AI/tura) - ターミナル、デスクトップGUI、CLIのワークフローに対応したローカルコーディングエージェント。永続的なタスク状態と根拠に基づく検証を備えます。 [![CI](https://github.com/Tura-AI/tura/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Tura-AI/tura/actions/workflows/ci.yml)
* [Typst](https://github.com/typst/typst) - マークアップベースの組版システム [![crates.io](https://img.shields.io/crates/v/typst.svg)](https://crates.io/crates/typst)
* [UpVPN](https://github.com/upvpn/upvpn-app) - Tauriを基盤とするmacOS、Linux、Windows向けWireGuard VPNクライアント。
* [vortix](https://github.com/Harry-kp/vortix) - リアルタイムテレメトリー、漏えい検知、キルスイッチを備えたWireGuard／OpenVPN向けターミナルUI
* [vproxy](https://github.com/0x676e67/vproxy) - 高性能なHTTP/HTTPS/SOCKS5プロキシサーバー [![crates.io](https://img.shields.io/crates/v/vproxy.svg)](https://crates.io/crates/vproxy)
* [wasmer](https://github.com/wasmerio/wasmer) - WASIとEmscriptenをサポートする、安全で高速なWebAssemblyランタイム [![Build Status](https://github.com/wasmerio/wasmer/actions/workflows/build.yml/badge.svg)](https://github.com/wasmerio/wasmer/actions)
* [Weld](https://github.com/serayuzgur/weld) - 完全なモックREST APIジェネレーター
* [wezterm](https://github.com/wezterm/wezterm) - GPUアクセラレーション対応のクロスプラットフォーム・ターミナルエミュレーター兼マルチプレクサー
* [WinterJS](https://github.com/wasmerio/winterjs) - SpiderMonkeyとAxumで構築された安全なJavaScriptランタイム
* [zellij](https://github.com/zellij-org/zellij) - 必要な機能をすべて備えたターミナルマルチプレクサー（ワークスペース）
* [Zephyr](https://github.com/Juwan-Hwang/Zephyr) - Tauriで構築されたモダンで軽量、安全なMihomo（Clash Meta）GUIクライアント。 [![Security Audit](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml/badge.svg)](https://github.com/Juwan-Hwang/Zephyr/actions/workflows/security.yml)

### 音声・音楽

* [AreevAI/flowcat](https://github.com/AreevAI/flowcat) - リアルタイム音声AIエージェント（電話およびWebRTC）向けのネイティブRustランタイム。セルフホスト可能な単一バイナリで、pipecat互換。
* [dano](https://github.com/kimono-koans/dano) - メディアファイル向けのhashdeep／md5tree（ただし、さらに多機能）
* [enginesound](https://github.com/DasEtwas/enginesound) - 半現実的なエンジン音を手続き的に生成するGUI／コマンドラインアプリ。詳細な設定、可変サンプルレート、周波数解析ウィンドウを備えます。
* [Festival](https://github.com/hinto-janai/festival) - ローカル音楽プレーヤー／サーバー／クライアント [![build-badge](https://github.com/hinto-janai/festival/actions/workflows/ci.yml/badge.svg)](https://github.com/hinto-janai/festival/actions/workflows/ci.yml)
* [figsoda/mmtc](https://github.com/figsoda/mmtc) [[mmtc](https://crates.io/crates/mmtc)] - シンプルさと高い設定可能性を両立する、最小構成のMPDターミナルクライアント [![build-badge](https://github.com/figsoda/mmtc/actions/workflows/ci.yml/badge.svg)](https://github.com/figsoda/mmtc/actions/workflows/ci.yml)
* [Glicol](https://github.com/chaosprint/glicol) - ブラウザー上での共同作曲向けグラフ指向ライブコーディング言語。
* [LargeModGames/spotatui](https://github.com/LargeModGames/spotatui) [[spotatui](https://crates.io/crates/spotatui)] - ネイティブストリーミング、歌詞同期、リアルタイム音声可視化を備えたSpotifyターミナルクライアント [![Continuous Deployment](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml/badge.svg)](https://github.com/LargeModGames/spotatui/actions/workflows/cd.yml)
* [mierak/rmpc](https://github.com/mierak/rmpc) [[rmpc](https://crates.io/crates/rmpc)] - アルバムアートに対応する、モダンで設定可能なターミナルベースのMPDクライアント
* [ncspot](https://github.com/hrkfdn/ncspot) - ncmpcなどに着想を得た、クロスプラットフォームのncurses製Spotifyクライアント。 [![build badge](https://github.com/hrkfdn/ncspot/actions/workflows/ci.yml/badge.svg)](https://github.com/hrkfdn/ncspot/actions?query=workflow%3ABuild)
* [OpenMeters](https://github.com/httpsworldview/openmeters) - Rustで記述された、Linux向けの高速でシンプル、プロ品質のオーディオメーター／可視化ツール。
* [Pinepods](https://github.com/madeofpendletonwool/PinePods) - マルチユーザー対応のRust製ポッドキャスト管理システム。再生時間やテーマなどをデバイス間で引き継げる中央データベースを使用します。Tauri製クライアントを備え、完全なクロスプラットフォーム再生環境を提供。 [![Docker Container Build](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/madeofpendletonwool/PinePods/actions/workflows/docker-publish.yml)
* [PodFetch](https://github.com/SamTV12345/PodFetch) - 新着エピソードを自動ダウンロードするセルフホスト型ポッドキャストマネージャー。Web UIでの再生と、AntennaPodなどのモバイルアプリ向けGPodder互換同期APIを備えます。 [![build badge](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml/badge.svg)](https://github.com/SamTV12345/PodFetch/actions/workflows/rust.yml)
* [Polaris](https://github.com/agersant/polaris) - 音楽ストリーミングアプリケーション。
* [rusty-amp](https://github.com/danylokravchenko/rusty-amp) - 外部プラグインに対応し、ターミナルで動作する、ギターアンプとペダルボードの完全な環境。
* [Spotify Player](https://github.com/aome510/spotify-player) - ターミナル上で、Spotifyと同等の全機能を利用できるプレーヤー。
* [Spotifyd](https://github.com/Spotifyd/spotifyd) - UNIXデーモンとして動作するオープンソースのSpotifyクライアント。 [![Continuous Integration](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml/badge.svg)](https://github.com/Spotifyd/spotifyd/actions/workflows/ci.yml)
* [termusic](https://github.com/tramhao/termusic) - TUIで書かれた音楽プレーヤー
* [tunein-cli](https://github.com/tsirysndr/tunein-cli) - ターミナルから世界中の何千ものラジオ局を閲覧して聴取 [![CI](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tsirysndr/tunein-cli/actions/workflows/ci.yml)
* [WhatBPM](https://github.com/sergree/whatbpm) - 電子音楽プロデューサー向けに毎日静的生成される情報リソース。BeatportやSpotifyなど公開データを使い、EDM各ジャンルでよく使われるテンポ、キー、ルート音などを日次で分析します。

### ブロックチェーン

* [Anchor](https://github.com/solana-foundation/anchor) - 安全なSolanaプログラム（スマートコントラクト）を構築するための、主要な開発フレームワーク。
* [artemis](https://github.com/paradigmxyz/artemis) - MEVボットを作成するための、シンプルでモジュール式の高速フレームワーク。
* [Bitcoin Satoshi's Vision](https://github.com/brentongunning/rust-sv) [[sv](https://crates.io/crates/sv)] - Bitcoin SVを扱うためのライブラリ。
* [cairo](https://github.com/starkware-libs/cairo) - 一般的な計算向けの証明可能なプログラムを作成する、初のチューリング完全言語。STARK証明を用いるZK-Rollupである[StarkNet](https://www.starknet.io)のネイティブ言語でもあります。 ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/starkware-libs/cairo/CI?style=flat-square&logo=github)
* [ChainX](https://github.com/chainx-org/ChainX) - Polkadot上の完全分散型インターチェーン暗号資産管理。
* [CITA](https://github.com/citahub/cita) - エンタープライズ向けの高性能ブロックチェーンカーネル。
* [coinbase-pro-rs](https://github.com/inv2004/coinbase-pro-rs) - 同期／非同期／WebSocketに対応するCoinbase Proクライアント
* [datahaven-xyz/datahaven](https://github.com/datahaven-xyz/datahaven) - EigenLayerによって保護される、AIを中心に据えた分散型ストレージ。
* [Diem](https://github.com/diem/diem) - シンプルなグローバル通貨と金融インフラを実現し、何十億もの人々を支援するというDiemの使命。
* [dusk-network/rusk](https://github.com/dusk-network/rusk) - 現実資産（RWA）と規制準拠の金融アプリケーション向けに設計された、プライバシー重視でスケーラブルなFMI「Dusk」のリファレンス実装。 [![Build Status](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml/badge.svg)](https://github.com/dusk-network/rusk/actions/workflows/rusk_ci.yml)
* [electrumrs](https://github.com/romanz/electrs) - Electrum Serverの効率的な再実装。
* [equilibriumco/beerus](https://github.com/equilibriumco/beerus) - トラストレスなStarkNetライトクライアント。⚡驚異的な高速動作⚡ [![GitHub Workflow Status](https://github.com/equilibriumco/beerus/actions/workflows/check.yml/badge.svg)](https://github.com/equilibriumco/beerus/actions/workflows/check.yml)
* [ethabi](https://github.com/rust-ethereum/ethabi) - スマートコントラクト呼び出しのエンコードとデコード。
* [ethaddrgen](https://github.com/Limeth/ethaddrgen) - Ethereumのカスタム・バニティアドレス生成ツール
* [etk](https://github.com/quilt/etk) - EVMバイトコードの作成、読み取り、分析のためのツール集。
* [Forest](https://github.com/ChainSafe/forest) - Filecoinの実装 [![Build Status](https://img.shields.io/circleci/build/gh/ChainSafe/forest/main?branch=master)](https://app.circleci.com/pipelines/github/ChainSafe/forest?branch=main)
* [Foundry](https://github.com/foundry-rs/foundry) - Ethereumアプリケーション開発向けの、非常に高速でポータブル、モジュール式のツールキット。 ![Build Status](https://img.shields.io/github/workflow/status/foundry-rs/foundry/test?style=flat-square)
* [Grin](https://github.com/mimblewimble/grin/) - MimbleWimbleプロトコルの進化形
* [hdwallet](https://github.com/jjyr/hdwallet) [[hdwallet](https://crates.io/crates/hdwallet)] - BIP-32 HDウォレット関連の鍵導出ユーティリティ。
* [Holochain](https://github.com/holochain/holochain) - 構築したかったあらゆる分散型アプリに対応する、ブロックチェーンのスケーラブルなP2P代替技術。 [![detect critical check failures](https://github.com/holochain/holochain/actions/workflows/autorebase.yml/badge.svg)](https://github.com/holochain/holochain/actions/)
* [Hyperlane](https://github.com/hyperlane-xyz/hyperlane-monorepo) - パーミッションレスでモジュール式の相互運用性を実現するフレームワーク。オフチェーンクライアントとSolana VM／CosmWasm向けスマートコントラクトはRustで記述されています。
* [HyperSync](https://github.com/enviodev/hypersync-client-rust) [[hypersync-client](https://crates.io/crates/hypersync-client)] - JSON-RPCに代わる、フィルター済みブロック、トランザクション、ログを返すブロックチェーンデータAPI「Envio HyperSync」のクライアント。 [![Build Status](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/enviodev/hypersync-client-rust/actions/workflows/ci.yaml)
* [ibc-rs](https://github.com/informalsystems/hermes) - [Interblockchain Communication](https://docs.cosmos.network/ibc)プロトコルの実装
* [infincia/bip39-rs](https://github.com/infincia/bip39-rs) [[bip39](https://crates.io/crates/bip39)] - BIP39の実装。
* [interBTC](https://github.com/interlay/interbtc) - PolkadotとKusama向けの、トラストレスで完全分散型のBitcoinブリッジ。
* [Joystream](https://github.com/Joystream/joystream) - ユーザーが運営する動画プラットフォーム
* [Kaspa](https://github.com/kaspanet/rusty-kaspa) - 世界最速のオープンソース、分散型かつ完全にスケーラブルなLayer-1。
* [Lighthouse](https://github.com/sigp/lighthouse) - Ethereum Consensus Layer（CL）クライアント [![Build Status](https://github.com/sigp/lighthouse/actions/workflows/test-suite.yml/badge.svg)](https://github.com/sigp/lighthouse/actions)
* [linera-io/linera-protocol](https://github.com/linera-io/linera-protocol) - 高いスケーラビリティと低レイテンシを備えたWeb3アプリケーション向けに設計された分散型ブロックチェーン基盤 [![Build Status](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
* [near/nearcore](https://github.com/near/nearcore) - ローエンドのモバイルデバイス向け分散型スマートコントラクトプラットフォーム。
* [Nervos CKB](https://github.com/nervosnetwork/ckb) - Nervosネットワークの共有知識レイヤーである、パブリックかつパーミッションレスなブロックチェーン。
* [opensea-rs](https://github.com/gakonst/opensea-rs) - Opensea APIおよびコントラクト向けのバインディングとCLI。
* [Parity-Bitcoin](https://github.com/paritytech/parity-bitcoin) - Parity Bitcoinクライアント
* [Phala-Network/phala-blockchain](https://github.com/Phala-Network/phala-blockchain) - Intel SGXとSubstrateを基盤とする、機密スマートコントラクト対応ブロックチェーン
* [polkadot-sdk](https://github.com/paritytech/polkadot-sdk) - Parity製PolkadotブロックチェーンSDK
* [pragma-org/amaru](https://github.com/pragma-org/amaru) - Rustで記述されたCardanoノードクライアント。
* [reth](https://github.com/paradigmxyz/reth) - モジュール式で貢献者に優しく、非常に高速なEthereumプロトコル実装。
* [revm](https://github.com/bluealloy/revm) - 高速なEthereum仮想マシン「Revolutionary Machine（revm）」。
* [rust-bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - Bitcoin関連のデータ構造とネットワークメッセージを対象に、シリアライズ／デシリアライズ、解析、実行をサポートするライブラリ。
* [rust-lightning](https://github.com/lightningdevkit/rust-lightning) [![Crate](https://img.shields.io/crates/v/lightning.svg?logo=rust)](https://crates.io/crates/lightning) - Bitcoin Lightningライブラリ。メインクレートの`lightning`はネットワーク、永続化、その他のI/Oを処理しないため、特定ランタイムに依存しません。ただし利用側で基本的なネットワーク処理、チェーンとのやりとり、ディスク保存を実装する必要があります。
* [sigma-rust](https://github.com/ergoplatform/sigma-rust) - ErgoTreeインタープリターとウォレット関連機能。
* [starkware-libs/cairo-vm](https://github.com/starkware-libs/cairo-vm) - Cairo VMの実装 [![rust](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml/badge.svg)](https://github.com/starkware-libs/cairo-vm/actions/workflows/rust.yml)
* [Subspace](https://github.com/autonomys/subspace) - スケーラビリティ、安全性、分散性を同時に実現し、ブロックチェーンのトリレンマを完全に解決する初のレイヤー1ブロックチェーン。
* [Sui](https://github.com/MystenLabs/sui) - Move言語を基盤とする、次世代スマートコントラクトプラットフォーム。高スループット、低レイテンシ、アセット指向のプログラミングモデルを備えます。
* [svm-rs](https://github.com/alloy-rs/svm-rs) - Solidityコンパイラーのバージョン管理ツール。
* [tempoxyz/tempo](https://github.com/tempoxyz/tempo) - 大規模なステーブルコイン決済向けブロックチェーン。EVM互換性、1秒未満のファイナリティ、ネイティブのスマートアカウント機能を備え、Reth SDKを基盤とします。
* [tendermint-rs](https://github.com/cometbft/tendermint-rs) - Tendermintのブロックチェーンデータ構造とクライアント
* [wagyu](https://github.com/howardwu/wagyu) [[wagyu](https://crates.io/crates/wagyu)] - 暗号資産ウォレットを生成するライブラリ
* [zcash](https://github.com/zcash/zcash) - 「Zerocash」プロトコルの実装。

### データベース

* [apecloud/ape-dts](https://github.com/apecloud/ape-dts) - データ転送スイート。MySQL、PostgreSQL、Redis、MongoDB、Kafka、ClickHouseなどの間でデータをレプリケーションします。
* [Atomic-Server](https://github.com/ontola/atomic-server/) [[atomic-server](https://crates.io/crates/atomic_server)] - リアルタイム更新、動的インデックス、CMS用途に便利なGUIを備えたNoSQLグラフデータベース。 [![Release](https://github.com/ontola/atomic-server/actions/workflows/release_please.yml/badge.svg)](https://github.com/ontola/atomic-server/actions)
* [ayarotsky/redis-shield](https://github.com/ayarotsky/redis-shield) - 高性能なレート制限を実現するため、トークンバケットアルゴリズムをネイティブコマンドとして実装するRedisモジュール
* [CozoDB](https://github.com/cozodb/cozo) - Datalogを使用し、グラフデータとアルゴリズムに重点を置くトランザクショナルなリレーショナルデータベース。タイムトラベルに対応し、高速です。 [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cozodb/cozo/build.yml?branch=main)](https://github.com/cozodb/cozo/actions/workflows/build.yml)
* [Curvine](https://github.com/CurvineIO/curvine) - AIやビッグデータなど、低レイテンシかつ高スループットのワークロード向けに設計された、高性能な並行分散キャッシュシステム。
* [darkbird](https://github.com/Rustixir/darkbird) [[darkbird](https://crates.io/crates/darkbird)] - Erlang Mnesiaに着想を得た、高並行・リアルタイムのインメモリストレージ
* [Databend](https://github.com/databendlabs/databend) - クラウドネイティブアーキテクチャを備えた、モダンなリアルタイムデータ処理・分析DBMS [![Release](https://github.com/databendlabs/databend/actions/workflows/release.yml/badge.svg)](https://github.com/databendlabs/databend/actions)
* [DB3 Network](https://github.com/dbpunk-labs/db3) - コミュニティ主導の分散型データベースネットワークであるDB3のブロックチェーンLayer 2 [![GitHub Workflow Status (with event)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml/badge.svg)](https://github.com/dbpunk-labs/db3/actions/workflows/ci.yml)
* [dsplce-co/supabase-plus](https://github.com/dsplce-co/supabase-plus) [[supabase-plus](https://crates.io/crates/supabase-plus)] - 公式Supabase CLIを拡張する、必要な機能をすべて備えたコマンドラインユーティリティ [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dsplce-co/supabase-plus/publish.yml)
](https://github.com/dsplce-co/supabase-plus/actions/workflows/publish.yml)
* [erikgrinaker/toydb](https://github.com/erikgrinaker/toydb) - 学習プロジェクトとして記述された分散SQLデータベース。
* [Garage](https://github.com/deuxfleurs-org/garage) [[garage](https://crates.io/crates/garage)] - 小規模から中規模のセルフホスト向けに設計された、S3互換の分散オブジェクトストレージサービス。 [![status-badge](https://woodpecker.deuxfleurs.fr/api/badges/1/status.svg)](https://woodpecker.deuxfleurs.fr/repos/1)
* [GlueSQL](https://github.com/gluesql/gluesql) - パーサー（sqlparser-rs）、実行レイヤー、永続／非永続の各ストレージをすべて備えるSQLデータベース向けRustライブラリ。 [![crates.io](https://img.shields.io/crates/v/gluesql.svg)](https://crates.io/crates/gluesql)
* [Goldziher/scythe](https://github.com/Goldziher/scythe) - SQLスキーマを認識したLintにより、型安全なコードを生成する多言語SQLコンパイラー兼リンター。
* [GreptimeDB](https://github.com/grepTimeTeam/greptimedb/) - PromQL／SQL／Pythonに対応した、オープンソースのクラウドネイティブ分散型時系列データベース。[![CI](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml/badge.svg)](https://github.com/greptimeTeam/greptimedb/actions/workflows/develop.yml)
* [HelixDB](https://github.com/HelixDB/helix-db) - RAGとAI向けに、インテリジェントなデータ保存を実現する高機能グラフ・ベクトルデータベース
* [Hiqlite](https://github.com/sebadob/hiqlite) - 高可用性で組み込み可能なRaftベースのSQLiteとキャッシュ
* [hydra-db/hydradb](https://github.com/hydra-db/hydradb) - OpenCypherクエリ、GraphBLAS探索、Neo4j互換Bolt接続に対応する、オブジェクトストレージネイティブな分散グラフデータベース。
* [indradb](https://crates.io/crates/indradb) - グラフデータベース
* [KiteSQL](https://github.com/KipData/KiteSQL) - RustでSQLを関数として扱う
* [lancedb](https://github.com/lancedb/lancedb) [[vectordb](https://crates.io/crates/vectordb)] - AIアプリケーション向けの、サーバーレスで低レイテンシなベクトルデータベース
* [Lucid](https://github.com/lucid-kv/lucid) - HTTP APIから利用できる、高性能な分散KVストア。 [![Build Status](https://github.com/lucid-kv/lucid/workflows/Lucid/badge.svg?branch=master)](https://github.com/lucid-kv/lucid/actions?workflow=Lucid)
* [Materialize](https://github.com/MaterializeInc/materialize) - Timely Dataflowを基盤とするストリーミングSQLデータベース :heavy_dollar_sign:
* [microsoft/pg_durable](https://github.com/microsoft/pg_durable) - PostgreSQL内部での耐久性のある実行。自動チェックポイント、クラッシュリカバリー、並列実行を備えた長時間実行・障害耐性のあるSQL関数を提供します。インフラ不要で、pgrxとRustで構築されたPostgreSQL拡張として動作。 [![License](https://img.shields.io/badge/license-PostgreSQL%20License-3d86c6.svg)](LICENSE.txt)
* [native_db](https://github.com/vincent-herlemont/native_db) [[native_db](https://crates.io/crates/native_db)] - サーバー、デスクトップ、モバイルなどマルチプラットフォームアプリ向けの、組み込み型ドロップインデータベース。Rustの型を簡単に同期。
* [Neon](https://github.com/neondatabase/neon) - サーバーレスPostgres。ストレージとコンピュートを分離し、自動スケーリング、ブランチ作成、無制限ストレージを実現。
* [NoKV-Lab/NoKV](https://github.com/NoKV-Lab/NoKV) - AIネイティブの分散ファイルシステム。 [![Rust](https://github.com/NoKV-Lab/NoKV/workflows/Rust/badge.svg)](https://github.com/NoKV-Lab/NoKV/actions/workflows/rust.yml)
* [noria](https://github.com/mit-pdos/noria) [[noria](https://crates.io/crates/noria)] - Webアプリケーションのバックエンド向けに、動的に変化する部分状態型データフロー
* [oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) [[oxigraph](https://crates.io/crates/oxigraph)] - [SPARQL](https://www.w3.org/TR/sparql11-overview/)標準を実装するグラフデータベース ![Crates.io Version](https://img.shields.io/crates/v/oxigraph?logo=Rust)
* [ParadeDB](https://github.com/paradedb/paradedb/) - リアルタイム検索と分析向けに設計され、Postgresを基盤とするElasticsearch代替製品。
* [ParityDB](https://github.com/paritytech/parity-db) - 読み取り操作に最適化された、高速で信頼性の高いデータベース
* [pgdogdev/pgdog](https://github.com/pgdogdev/pgdog) - 接続プーリング、負荷分散、シャーディングによりPostgreSQLをスケールする高速プロキシ。
* [Picodata](https://github.com/picodata/picodata) [[picodata-plugin](https://crates.io/crates/picodata-plugin)] - Rustのプラグインモデルを備える、分散型PostgreSQL互換データベース
* [PRQL](https://github.com/PRQL/prql) [[prqlc](https://crates.io/crates/prqlc)] - データを変換し、読みやすいSQLにコンパイルするモダンな言語。 [![Tests](https://github.com/PRQL/prql/actions/workflows/tests.yml/badge.svg)](https://github.com/PRQL/prql/actions)
* [PumpkinDB](https://github.com/PumpkinDB/PumpkinDB) - イベントソーシング型データベースエンジン
* [Qdrant](https://github.com/qdrant/qdrant) - 高度なフィルタリングに対応するオープンソースのベクトル類似検索エンジン [![Tests](https://github.com/qdrant/qdrant/actions/workflows/rust.yml/badge.svg)](https://github.com/qdrant/qdrant/actions)
* [Qrlew/qrlew](https://github.com/Qrlew/qrlew) [[qrlew](https://crates.io/crates/qrlew)] - SQLからSQLへの差分プライバシーレイヤー [![Qrlew](https://github.com/Qrlew/qrlew/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrlew/qrlew/actions) ![Crates.io Version](https://img.shields.io/crates/v/qrlew?logo=Rust)
* [RisingWaveLabs/RisingWave](https://github.com/RisingWaveLabs/risingwave) - クラウド上で動作する次世代ストリーミングデータベース [![CI](https://github.com/risingwavelabs/risingwave/actions/workflows/labeler.yml/badge.svg)](https://github.com/risingwavelabs/risingwave/actions)
* [RustFS](https://github.com/rustfs/rustfs) [[RustFS](https://crates.io/crates/rustfs)] - オープンソースでS3互換の高性能オブジェクトストレージ。MinIOやCephなど他のS3互換プラットフォームとの移行と共存に対応。  [![status-badge](https://github.com/rustfs/rustfs/actions/workflows/ci.yml/badge.svg)](https://github.com/rustfs/rustfs)
* [ruvnet/ruvector](https://github.com/ruvnet/ruvector) [[ruvector-core](https://crates.io/crates/ruvector-core)] - LLMをローカル実行し、水平スケールする自己学習型ベクトルデータベース兼認知コンテナー。
* [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) [[turbovec](https://crates.io/crates/turbovec)] - TurboQuantを基盤とするベクトルインデックス。Rust製で、SIMDアクセラレーション検索とPythonバインディングに対応。
* [sabiql](https://github.com/riii111/sabiql) [[sabiql](https://crates.io/crates/sabiql)] - 安全な編集とER図を備えた、高速でドライバー不要、Vimを重視したDB TUI。 [![CI](https://github.com/riii111/sabiql/actions/workflows/ci.yml/badge.svg)](https://github.com/riii111/sabiql/actions/workflows/ci.yml)
* [samyama-ai/samyama-graph](https://github.com/samyama-ai/samyama-graph) - GraphRAG、ナレッジグラフ、ベクトル検索、グラフ分析向けのRustネイティブなグラフ・ベクトルDB。
* [seppo0010/rsedis](https://github.com/seppo0010/rsedis) - Redisの再実装。
* [Skytable](https://github.com/skytable/skytable) - マルチモデルNoSQLデータベース ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/skytable/skytable/Tests?style=flat-square)
* [sled](https://crates.io/crates/sled) - モダンな組み込み型データベース（ベータ版） [![Build Status](https://github.com/spacejam/sled/actions/workflows/test.yml/badge.svg)](https://github.com/spacejam/sled/actions?workflow=Rust)
* [SQLSync](https://github.com/orbitinghail/sqlsync) - マルチプレイヤー対応のオフラインファーストSQLite [![GitHub Workflow Status](https://github.com/orbitinghail/sqlsync/actions/workflows/actions.yaml/badge.svg?branch=main)](https://github.com/orbitinghail/sqlsync/actions?query=branch%3Amain)
* [SurrealDB](https://github.com/surrealdb/surrealdb) - スケーラブルな分散型ドキュメント・グラフデータベース [![Build Status](https://img.shields.io/github/workflow/status/surrealdb/surrealdb/Continuous%20integration/main)](https://github.com/surrealdb/surrealdb/actions)
* [tabularis](https://github.com/TabularisDB/tabularis) - TauriとReactで構築された、開発者向けの軽量なDB管理ツール。
* [teaql/teaql-rs](https://github.com/teaql/teaql-rs) [[teaql-core](https://crates.io/crates/teaql-core)] - 型付きクエリ、統制された変更、SQLプロバイダーを備えたモデル駆動型ランタイム [![CI](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/teaql/teaql-rs/actions/workflows/ci.yml)
* [TerminusDB](https://github.com/terminusdb/terminusdb-store) - オープンソースのグラフデータベース兼ドキュメントストア [![Build Status](https://github.com/terminusdb/terminusdb-store/actions/workflows/test.yml/badge.svg)](https://github.com/terminusdb/terminusdb-store/actions)
* [tikv](https://github.com/tikv/tikv) - Rust製の分散KVデータベース
* [tokio-rs/toasty](https://github.com/tokio-rs/toasty) [[toasty](https://crates.io/crates/toasty)] - deriveマクロ、型安全なクエリ、DB固有機能を備え、SQL（SQLite、PostgreSQL、MySQL）とDynamoDBをサポートするRust向けORM。 [![Crates.io](https://img.shields.io/crates/v/toasty.svg)](https://crates.io/crates/toasty)
* [Tonbo](https://github.com/tonbo-io/tonbo) - Apache ArrowとParquetを基盤とする組み込み型永続データベース [![crates.io](https://img.shields.io/crates/v/tonbo.svg)](https://crates.io/crates/tonbo)
* [TrailBase](https://github.com/trailbaseio/trailbase) - 型安全なAPI、V8 JS/ES6/TSエンジン、認証、管理ダッシュボードを内蔵した、高速で軽量な単一ファイルのFirebase代替製品 [![GitHub Workflow Status](https://github.com/trailbaseio/trailbase/workflows/test/badge.svg)](https://github.com/trailbaseio/trailbase/actions?workflow=test)
* [tsink](https://github.com/h2337/tsink) - Rust向けの組み込み型時系列データベース [![crates.io](https://img.shields.io/crates/v/tsink.svg)](https://crates.io/crates/tsink)
* [Turso](https://github.com/tursodatabase/turso) - SQLite互換のプロセス内SQLデータベース。
* [USearch](https://github.com/unum-cloud/usearch) - ベクトルと文字列の類似検索エンジン [![crates.io](https://img.shields.io/crates/v/usearch.svg)](https://crates.io/crates/usearch)
* [valentinus](https://github.com/kn0sys/valentinus) - LMDBバインディングで構築された次世代ベクトルデータベース [![Crates.io Version](https://img.shields.io/crates/v/valentinus)](https://crates.io/crates/valentinus)
* [VelesDB](https://github.com/cyberlife-coder/VelesDB) [[velesdb-core](https://crates.io/crates/velesdb-core)] - 単一バイナリに収まる組み込み型・ローカルファーストDB。ベクトル検索、プロパティグラフ、列指向ストアの3エンジンを単一クエリ言語で統合します。セッション横断の`why()`想起機能を備えたエージェント記憶SDK（意味／エピソード／手続き）を内蔵し、ベクトル検索だけでは見つからない関連事実をグラフ探索で提示します。
* [vorot93/libmdbx-rs](https://github.com/vorot93/libmdbx-rs) [[mdbx-sys](https://crates.io/crates/mdbx-sys)] - 「高速、コンパクト、高性能で、寛容なライセンスの組み込み型トランザクションKVデータベース」であるMDBX向けバインディング。libmdbxで動作するようパッチを加えたmozilla/lmdb-rsのフォークです。
* [whispem/minikv](https://github.com/whispem/minikv) - Raft合意、WAL耐久性、時系列API、ベクトル検索、S3互換エンドポイントを備える分散型マルチテナントKV／オブジェクトストア。Helmチャート、Grafanaダッシュボード、Python SDKを備え、本番環境を想定。 [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)
* [WooriDB](https://github.com/naomijub/wooridb) - CruxとDatomicに着想を得た汎用時系列データベース。

### 組み込み

* [embassy-rs/embassy](https://github.com/embassy-rs/embassy) [[embassy](https://crates.io/crates/embassy)] - STM32、nRF、RP、ESP32などのHALを備え、組み込みRust向けにasync/awaitを提供する次世代フレームワーク。embassy-time、embassy-net、embassy-usb、低電力対応を備えます。 [![Build Status](https://github.com/embassy-rs/embassy/actions/workflows/ci.yml/badge.svg)](https://github.com/embassy-rs/embassy/actions)
* [infinition/waveshare-watch-rs](https://github.com/infinition/waveshare-watch-rs) - Waveshare ESP32-S3-Touch-AMOLED-2.06向けのRust `no_std`スマートウォッチファームウェア。QSPI 80 MHz DMAディスプレイ、Embassy非同期ランタイム、常時表示対応のイベント駆動型電源管理を備えます。
* [rmk](https://github.com/haobogu/rmk) - 豊富な機能を備えたキーボードファームウェア。
* [rtic-rs/rtic](https://github.com/rtic-rs/rtic) [[rtic](https://crates.io/crates/rtic)] - 組み込みリアルタイムシステム構築向けの、リアルタイム割り込み駆動型並行処理フレームワーク。
* [uefi-rs](https://github.com/rust-osdev/uefi-rs) - Unified Extensible Firmware Interface向けのRustラッパー。このクレートを使うと、安全で便利かつ高性能なUEFI機能を活用するRustソフトウェアを簡単に開発できます。

### エミュレーター

[emulatorキーワードに一致するクレート](https://crates.io/keywords/emulator)も参照してください。

* CHIP-8
  * [ColinEberhardt/wasm-rust-chip8](https://github.com/ColinEberhardt/wasm-rust-chip8) - WebAssembly製のCHIP-8エミュレーター。
  * [starrhorne/chip8-rust](https://github.com/starrhorne/chip8-rust) - CHIP-8エミュレーター
* Commodore 64
  * [kondrak/rust64](https://github.com/kondrak/rust64) - Commodore 64エミュレーター
* Flash Player
  * [Ruffle](https://github.com/ruffle-rs/ruffle) - Adobe Flash Playerエミュレーター。デスクトップとWebの両方をWebAssemblyでサポートします。 [![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_rust.yml)[![CI](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml/badge.svg)](https://github.com/ruffle-rs/ruffle/actions/workflows/test_web.yml)
* Gameboy
  * [Gekkio/mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Game Boyの研究プロジェクト兼エミュレーター
  * [joamag/boytacean](https://github.com/joamag/boytacean) - WebAssemblyでWeb上で動作するGame Boy Colorエミュレーター。
  * [mohanson/gameboy](https://github.com/mohanson/gameboy) - 多機能なクロスプラットフォームGame Boyエミュレーター。いつまでも少年の心を。
  * [mvdnes/rboy](https://github.com/mvdnes/rboy) - Game Boyエミュレーター
* Gameboy Advance
  * [michelhe/rustboyadvance-ng](https://github.com/michelhe/rustboyadvance-ng) - デスクトップ、Android、[WebAssembly](https://michelhe.github.io/rustboyadvance-ng/)に対応するGame Boy Advanceエミュレーター。 [![build badge](https://github.com/michelhe/rustboyadvance-ng/actions/workflows/deploy.yml/badge.svg)](https://github.com/michelhe/rustboyadvance-ng/actions?query=workflow%3ADeploy)
* GameMaker
  * [OpenGMK](https://github.com/OpenGMK/OpenGMK) - 独自仕様のGameMaker Classicエンジンをモダンに再実装。runnerの完全なソースポート、逆コンパイラー、TASフレームワーク、ゲームデータ用ライブラリを提供します。
* IBM PC
  * [MartyPC](https://github.com/dbalsom/martypc) - Rust製のIBM PC/XTエミュレーター。
* Intel 8080 CPU
  * [mohanson/i8080](https://github.com/mohanson/i8080) - Intel 8080 CPUエミュレーター
* iOS
  * [touchHLE](https://github.com/touchHLE/touchHLE) - iPhone OSアプリ向けの高水準エミュレーター
* iPod
  * [clicky](https://github.com/daniel5151/clicky) - クリックホイール搭載iPodエミュレーター（開発中）
* NES
  * [koute/pinky](https://github.com/koute/pinky) - NESエミュレーター
  * [pcwalton/sprocketnes](https://github.com/pcwalton/sprocketnes) - NESエミュレーター
* Nintendo 64
  * [gopher64](https://github.com/gopher64/gopher64) - Rust製のN64エミュレーター
* Nintendo DS
  * [dust](https://github.com/kelpsyberry/dust) - Nintendo DSエミュレーター
* PlayStation 4
  * [Obliteration](https://github.com/obhq/obliteration) - Windows、macOS、Linux向けの実験的なPS4エミュレーター [![CI](https://github.com/obhq/obliteration/actions/workflows/main.yml/badge.svg)](https://github.com/obhq/obliteration/actions/workflows/main.yml)
* Shockwave Player
  * [DirPlayer](https://github.com/igorlira/dirplayer-rs) - Web互換のRust製Shockwave Playerエミュレーター
* ZX Spectrum
  * [rustzx/rustzx](https://github.com/rustzx/rustzx) - [![RustZX CI](https://github.com/rustzx/rustzx/actions/workflows/ci.yml/badge.svg)](https://github.com/rustzx/rustzx/actions/workflows/ci.yml)

### ファイルマネージャー

* [broot](https://github.com/Canop/broot) - ディレクトリツリーの新しい表示・ナビゲーション方法（大きなディレクトリの概要を確認、検索して見つけたディレクトリへ`cd`、検索中も階層を見失わずに操作、ファイル編集など）。詳しくは[dystroy.org/broot](https://dystroy.org/broot/)を参照。 [![Latest Version](https://img.shields.io/crates/v/broot.svg)](https://crates.io/crates/broot)
* [elio-fm/elio](https://github.com/elio-fm/elio) [[elio](https://crates.io/crates/elio)] - 豊富なプレビュー、一括操作、ゴミ箱に対応した、機能一式を備えるターミナルファイルマネージャー。
* [FileSSH](https://github.com/JayanAXHF/FileSSH) - リモートサーバー上のファイルを管理する高速で使いやすいTUI。SSHセッションの即時作成、ファイルの直接編集などに対応。 ![crates.io](https://img.shields.io/crates/v/filessh)
* [joshuto](https://github.com/kamiyaa/joshuto) - ranger風のターミナルファイルマネージャー
* [moyangzhan/mango-finder](https://github.com/moyangzhan/mango-finder) - 自然言語でファイルを検索
* [pikeru](https://github.com/dvhar/pikeru) - サムネイルと検索機能に優れたLinux向けファイルピッカー
* [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive) - 仮想分散ファイルシステムを基盤とするファイルマネージャー。
* [xplr](https://github.com/sayanarijit/xplr) - 拡張可能で最小構成かつ高速なTUIファイルエクスプローラー
* [yazi](https://github.com/sxyazi/yazi) - 非同期I/Oを基盤とする非常に高速なターミナルファイルマネージャー。

### 金融

[決済](#payments)アプリケーションも参照してください。

* [Ashutosh0x/rust-finance](https://github.com/Ashutosh0x/rust-finance) - 複数取引所からのデータ収集、執行、リスクモデル、TUIダッシュボードを備えたAIトレーディングターミナル。
* [klirr](https://github.com/Sajjon/klirr) [[klirr](https://crates.io/crates/klirr)] - サービスや経費の美しい請求書を生成する、メンテナンス不要のスマートなFOSS。
* [longbridge/longbridge-terminal](https://github.com/longbridge/longbridge-terminal) - Longbridge Securities向けAIネイティブCLI。香港／米国／A株／シンガポール市場のリアルタイム相場、ポートフォリオ、取引に対応。
* [makeev/alphai-tui](https://github.com/makeev/alphai-tui) [[alphai-tui](https://crates.io/crates/alphai-tui)] - キー不要の相場とチャート、ニュースセンチメント、SEC Form 4のインサイダー取引、決算情報を備えたターミナル株式ダッシュボード。 ![CI](https://github.com/makeev/alphai-tui/actions/workflows/ci.yml/badge.svg?branch=main)
* [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) - RustとPythonで記述された高性能で本番運用品質のアルゴリズム取引プラットフォーム。
* [tackler](https://github.com/tackler-ng/tackler) [[tackler](https://crates.io/crates/tackler)] - プレーンテキスト会計向けの高速で信頼性の高い簿記エンジン。ネイティブなGit SCMに対応。 [![CI Badge](https://github.com/tackler-ng/tackler/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tackler-ng/tackler/blob/main/.github/workflows/ci.yml)
* [tarkah/tickrs](https://github.com/tarkah/tickrs) - ターミナル上のリアルタイム株価データ
* [wealthfolio/wealthfolio](https://github.com/wealthfolio/wealthfolio) - 投資、純資産、支出、シミュレーションを追跡する、美しくプライベートなローカルファーストの家計管理ツール。

### ゲーム

[Piston製ゲーム一覧](https://github.com/PistonDevelopers/piston/wiki/Games-Made-With-Piston)も参照してください。

* [buxx/OpenCombat](https://github.com/buxx/OpenCombat) - リアルタイムの第二次世界大戦タクティカルゲーム
* [chess-tui](https://github.com/thomas-mauran/chess-tui) - チェスのTUI実装 ♟️
* [citybound](https://github.com/citybound/citybound) - あなたにふさわしい都市シミュレーション
* [cristicbz/rust-doom](https://github.com/cristicbz/rust-doom) - Doom向けレンダラー。将来プレイ可能なゲームになるかもしれません。
* [doukutsu-rs](https://github.com/doukutsu-rs/doukutsu-rs) - 機能強化を加えたCave Storyエンジンの再実装。
* [garkimasera/gaia-maker](https://github.com/garkimasera/gaia-maker) - 惑星とテラフォーミングのシミュレーションゲーム
* [garkimasera/rusted-ruins](https://github.com/garkimasera/rusted-ruins) - 拡張可能なオープンワールドのローグライクゲーム（ピクセルアート）。
* [GitType](https://github.com/unhappychoice/gittype) - ソースコードをタイピング課題に変えるCLIコードタイピングゲーム
* [gorilla-devs/ferium](https://github.com/gorilla-devs/ferium) - Modrinth、CurseForge、GitHub ReleasesからMinecraft MODを、ModrinthとCurseForgeからMODパックをダウンロード／更新する、高速で高機能なCLIプログラム。 ![ferium build](https://github.com/gorilla-devs/ferium/actions/workflows/build.yml/badge.svg?branch=main)
* [HactarCE/Hyperspeedcube](https://github.com/HactarCE/Hyperspeedcube) - マウスとキーボード操作をカスタマイズでき、高度な機能を備えるモダンで初心者向けの3D／4Dルービックキューブシミュレーター
* [lifthrasiir/angolmois-rust](https://github.com/lifthrasiir/angolmois-rust) - BMS形式に対応したシンプルな音楽ビデオゲーム
* [louis-e/arnis](https://github.com/louis-e/arnis) - OpenStreetMapと標高データを使い、実際の地理情報からMinecraft Java／Bedrockワールドを生成 [![CI](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions)
* [maras-archive/rsnake](https://github.com/maras-archive/rsnake) - Snake。
* [mcthesw/game-save-manager](https://github.com/mcthesw/game-save-manager) - ゲームのセーブデータを管理する使いやすいツール [![build badge](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml/badge.svg)](https://github.com/mcthesw/game-save-manager/actions/workflows/tauri.yml)
* [mtkennerly/ludusavi](https://github.com/mtkennerly/ludusavi) - PCゲームのセーブデータ向けバックアップツール [![build badge](https://img.shields.io/github/actions/workflow/status/mtkennerly/ludusavi/main.yaml?logo=github)](https://github.com/mtkennerly/ludusavi/actions/workflows/main.yaml) [![crate](https://img.shields.io/crates/v/ludusavi?logo=rust)](https://crates.io/crates/ludusavi)
* [ozkriff/zemeroth](https://github.com/ozkriff/zemeroth) - 小規模な2Dターン制ヘックス戦略ゲーム
* [rhex](https://github.com/dpc/rhex) - ヘックス形式のASCIIローグライク
* [rsaarelm/magog](https://github.com/rsaarelm/magog) - ローグライクゲーム。
* [SoftbearStudios/mk48](https://github.com/SoftbearStudios/mk48) - Mk48.ioはオンラインマルチプレイヤーの海戦ゲームです。
* [Strophox/tetro-tui](https://github.com/Strophox/tetro-tui) [[tetro-tui](https://crates.io/crates/tetro-tui)] - テトロミノが落下して積み重なるクロスプラットフォームのターミナルゲーム。
* [swatteau/sokoban-rs](https://github.com/swatteau/sokoban-rs) - 倉庫番の実装
* [thetawavegame/thetawave-legacy](https://github.com/thetawavegame/thetawave-legacy) - 新しいゲーム開発者が最初の貢献を始められるようにすることを目指す宇宙シューティングゲーム。 ![build badge](https://github.com/thetawavegame/thetawave-legacy/actions/workflows/ci.yml/badge.svg?branch=master)
* [Thinkofname/rust-quake](https://github.com/Thinkofname/rust-quake) - Quakeマップレンダラー。
* [topheman/snake-pipe-rust](https://github.com/topheman/snake-pipe-rust) - 標準入出力（TCPとUnixドメインソケットも対応）を使うターミナル上のSnakeゲーム [![crates.io](https://img.shields.io/crates/v/snakepipe.svg)](https://crates.io/crates/snakepipe)
* [ttyperacer/terminal-typeracer](https://gitlab.com/ttyperacer/terminal-typeracer) - ターミナル向けのシングルプレイヤー・タイピングテストゲーム
* [Veloren](https://gitlab.com/veloren/veloren) - アルファ版として開発中のオープンワールド・オープンソース・マルチプレイヤーボクセルRPG [![build badge](https://gitlab.com/veloren/veloren/badges/master/pipeline.svg)](https://gitlab.com/veloren/veloren/-/pipelines)
* [zipxing/rust_pixel](https://github.com/zipxing/rust_pixel) [[rust_pixel](https://crates.io/crates/rust_pixel)] - テキスト／グラフィック両方の描画モードに対応する2Dピクセルアートゲームエンジンと迅速なプロトタイピングツール
* [Zone of Control](https://github.com/ozkriff/zoc) - ターン制ヘックス戦略ゲーム

### グラフィックス

* [dps/rust-raytracer](https://github.com/dps/rust-raytracer) - Peter Shirleyの「Ray Tracing in One Weekend」を基にした非常にシンプルなレイトレーサーの実装。
* [flxzt/rnote](https://github.com/flxzt/rnote) - スケッチと手書きメモの作成。
* [ivanceras/svgbob](https://github.com/ivanceras/svgbob) - ASCII図をSVG画像に変換
* [KaminariOS/rustracer](https://github.com/KaminariOS/rustracer) - Vulkanレイトレーシングを基盤とするPBR glTF 2.0レンダラー。
* [Limeth/euclider](https://github.com/Limeth/euclider) - リアルタイム4D CPUレイトレーサー
* [linebender/resvg](https://github.com/linebender/resvg) - SVGレンダリングライブラリ。
* [monfa-red/lini](https://github.com/monfa-red/lini) [[lini](https://crates.io/crates/lini)] - 図、チャート、シーケンス、回路図、技術図面など、あらゆる図版を扱う小さな言語。プレーンテキストからテーマ変更可能なSVGにコンパイルします。 [![CI](https://github.com/monfa-red/lini/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/monfa-red/lini/actions/workflows/ci.yml)
* [museslabs/phonto](https://github.com/museslabs/phonto) - WaylandとmacOS向けのGPUアクセラレーション対応動画壁紙プログラム。Rust製。
* [rodrigorc/papercraft](https://github.com/rodrigorc/papercraft) - 3Dモデルを展開し、紙とはさみ、のりで組み立てられるようにするツール。
* [rustq/vue-skia](https://github.com/rustq/vue-skia) - Skiaベースの2DグラフィックスVueレンダリングライブラリ。Rustによるソフトウェアラスタライズを使って描画します。
* [storytold/artcraft](https://github.com/storytold/artcraft) - シーン、動画、画像を粘土のように造形できる、AI搭載IDE兼タンジブルコンピューティング環境。
* [turnage/valora](https://crates.io/crates/valora) - ジェネラティブ・ファインアート用ライブラリ
* [Twinklebear/tray_rust](https://github.com/Twinklebear/tray_rust) - レイトレーサー
* [wahn/rs_pbrt](https://github.com/wahn/rs_pbrt) - PBRT書籍第3版のC++コードに相当する実装。

### 画像処理

* [Darkly](https://github.com/darkly-art/darkly) - デジタルアーティストや画家向けのエントロピーエディター。
* [Graphite](https://github.com/GraphiteEditor/Graphite) - ベクターベースのグラフィックエディター。
* [Imager](https://github.com/imager-io/imager) - 画像の自動最適化。
* [oxipng](https://github.com/oxipng/oxipng) [[oxipng](https://crates.io/crates/oxipng)] - Rust製のマルチスレッドPNGオプティマイザー。 [![Build Status](https://github.com/oxipng/oxipng/workflows/oxipng/badge.svg)](https://github.com/oxipng/oxipng/actions?query=branch%3Amaster) [![Version](https://img.shields.io/crates/v/oxipng.svg)](https://crates.io/crates/oxipng)
* [sorairolake/favico](https://github.com/sorairolake/favico) [[favico](https://crates.io/crates/favico)] - ファビコンを作成するユーティリティ [![CI](https://github.com/sorairolake/favico/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/favico/actions/workflows/CI.yaml)
* [Sprite Fusion Pixel Snapper](https://github.com/Hugo-Dz/spritefusion-pixel-snapper) - AI生成のピクセルアートを整え、ピクセル単位で正確なスプライトにするCLI／WebAssemblyツール（MIT）。
* [visioncortex/vtracer](https://github.com/visioncortex/vtracer) [[vtracer](https://crates.io/crates/vtracer)] - ラスター画像（JPG/PNG）をベクター画像（SVG）に変換。

### 産業オートメーション

* [dora-rs/dora](https://github.com/dora-rs/dora) [[dora-cli](https://crates.io/crates/dora-cli)] - Python、Rust、C/C++ APIを備え、ロボットやマルチAIアプリを構築する高速でシンプルなデータフロー指向フレームワーク [![CI](https://github.com/dora-rs/dora/workflows/CI/badge.svg)](https://github.com/dora-rs/dora/actions)
* [locka99/opcua](https://github.com/locka99/opcua) - [OPC UA](https://opcfoundation.org/about/opc-technologies/opc-ua/)ライブラリ。
* [slowtec/tokio-modbus](https://github.com/slowtec/tokio-modbus) - [tokio](https://tokio.rs)を基盤とする[modbus](https://www.modbus.org)ライブラリ。

### メッセージキュー

* [lonewolf-io/Narwhal](https://github.com/lonewolf-io/narwhal) - エッジアプリ向けの拡張可能なPub/Subメッセージングサーバー。
* [Rmqtt](https://github.com/rmqtt/rmqtt) - MQTTサーバー／ブローカー。5G時代のIoT向けにスケーラブルな分散MQTTメッセージブローカー。
* [RobustMQ](https://github.com/robustmq/robustmq) - 次世代クラウドネイティブ統合メッセージキュー。
* [Rocketmq-Rust](https://github.com/mxsm/rocketmq-rust) - 🚀 Apache RocketMQをRustで構築🦀。より高速で安全、メモリー使用量も少なくなります。

### MLOps

* [api7/aisix](https://github.com/api7/aisix) - LLMやAIエージェント向けオープンソースAIゲートウェイ。OpenAI、Anthropic、Gemini、Bedrock、Azure OpenAIなどへの接続に、OpenAI互換APIとネイティブAnthropic Messages APIを提供。MCP／A2Aゲートウェイ、セマンティックルーティング、ガードレール、セマンティックキャッシュにも対応。 [![CI](https://github.com/api7/aisix/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/api7/aisix/actions/workflows/ci.yml)
* [cocoindex](https://github.com/cocoindex-io/cocoindex) - 増分処理によりAIエージェント向けの最新コンテキストを構築するETLフレームワーク
* [TensorZero](https://github.com/tensorzero/tensorzero) - 推論、可観測性、最適化、実験を統合するLLM向けデータ／学習フライホイール ![TensorZero Build Status](https://img.shields.io/github/check-runs/tensorzero/tensorzero/main)
* [Uteke](https://github.com/codecoradev/uteke) - AIエージェント向けのオフラインファーストなセマンティックメモリエンジン。単一バイナリで依存関係ゼロ、MCPネイティブ。 [![CI](https://img.shields.io/github/actions/workflow/status/codecoradev/uteke/ci.yml?branch=develop)](https://github.com/codecoradev/uteke/actions/workflows/ci.yml)

### 可観測性

* [avito-tech/bioyino](https://github.com/avito-tech/bioyino) - 高性能でスケーラブルなStatsD互換サーバー。
* [esrlabs/chipmunk](https://github.com/esrlabs/chipmunk) - 巨大なログファイルやストリームを分析するegui製ネイティブデスクトップアプリ。WebAssemblyプラグインシステムと自動車業界の形式に対応。 [![Chipmunk CI](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml/badge.svg)](https://github.com/esrlabs/chipmunk/actions/workflows/lint_master.yml)
* [madesroches/micromegas](https://github.com/madesroches/micromegas) [[micromegas](https://crates.io/crates/micromegas)] - ログ、メトリクス、トレース向けの可観測性バックエンド。低オーバーヘッドのRust計測機能を備え、テレメトリーをオブジェクトストレージ上のParquetに保存してSQLで検索します。 [![Rust](https://github.com/madesroches/micromegas/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/madesroches/micromegas/actions/workflows/rust.yml)
* [MegaAntiCheat/client-backend](https://github.com/MegaAntiCheat/client-backend) - [MAC](https://github.com/MegaAntiCheat)のクライアントアプリ。
* [openobserve](https://github.com/openobserve/openobserve) - 10倍簡単、ストレージコスト140分の1、高性能でペタバイト規模に対応する、Elasticsearch／Splunk／Datadogの代替製品。
* [OpenTelemetry](https://crates.io/crates/opentelemetry) - OpenTelemetryは、アプリケーションから分散トレースやメトリクスを収集するAPI、ライブラリ、エージェント、コレクターサービスの統一セットを提供します。Prometheus、Jaegerなどの可観測性ツールで分析できます。 [![GitHub Actions CI](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml/badge.svg)](https://github.com/open-telemetry/opentelemetry-rust/actions/workflows/ci.yml)
* [parseablehq/parseable](https://github.com/parseablehq/parseable) - ログ、メトリクス、トレース、イベントを収集・分析するAIネイティブな統合可観測性プラットフォーム。
* [Quickwit-oss/quickwit](https://github.com/quickwit-oss/quickwit) - ログ管理向けのクラウドネイティブで高コスト効率な検索エンジン。 [![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI)
* [rustrak/rustrak](https://github.com/rustrak/rustrak) - Sentry SDKと互換性のある超軽量エラー追跡サーバー。
* [Scaphandre](https://github.com/hubblo-org/scaphandre) - ホスト全体と各サービスの電力消費を追跡する電力監視エージェント。持続可能性の高いシステムやアプリの設計を支援し、各種監視ツールチェーンに適合（Prometheus、Warp10、Riemannなどをサポート）。
* [vectordotdev/vector](https://github.com/vectordotdev/vector) - 高性能なログ、メトリクス、イベントルーター。

### オペレーティングシステム

[Rustで記述されたオペレーティングシステムの比較](https://github.com/flosse/rust-os-comparison)も参照してください。

* [0x59616e/SteinsOS](https://github.com/0x59616e/SteinsOS) - ARMv8-Aアーキテクチャ向けOS。
* [Andy-Python-Programmer/aero](https://github.com/Andy-Python-Programmer/aero) - モノリシックカーネル設計を採用する、モダンなUnix系OS。
* [asterinas/asterinas](https://github.com/asterinas/asterinas) - Linux互換ABIを提供する、安全で高速な汎用OSカーネル。
* [DragonOS-Community/DragonOS](https://github.com/DragonOS-Community/DragonOS) - カーネルをゼロから独自開発し、Linux互換性を備えたOS。
* [hexagonal-sun/moss-kernel](https://github.com/hexagonal-sun/moss-kernel) - RustとAArch64アセンブリで記述された、Unix系Linux互換カーネル。
* [koibtw/highlightos](https://github.com/koibtw/highlightos) - Rustとアセンブリで記述されたx86_64 OSカーネル。
* [NON-OS/nonos-micro-kernel](https://github.com/NON-OS/nonos-micro-kernel) - RAM常駐型の権限ベースマイクロカーネル。各プログラムはカーネルが実行前に検証する署名済みカプセルで、ドライバーはユーザー空間で動作します。
* [redox-os/redox](https://gitlab.redox-os.org/redox-os/redox) - セキュリティ、安定性、性能、正確性、シンプルさ、実用性を重視し、LinuxとBSDに代わる完全なOSを目指すUnix系汎用マイクロカーネルOS。
* [thepowersgang/rust_os](https://github.com/thepowersgang/rust_os) - Rustで記述されたOSカーネル。POSIX非対応。
* [theseus-os/Theseus](https://github.com/theseus-os/Theseus) - ゼロから記述された、安全言語を採用し、単一アドレス空間と単一特権レベルで動作するOS [![build badge](https://img.shields.io/github/workflow/status/theseus-os/Theseus/Documentation?label=docs%20build)](https://www.theseus-os.com/Theseus/book/index.html)
* [tock/tock](https://github.com/tock/tock) - Cortex-Mベースのマイクロコントローラー向け安全な組み込みOS
* [vinc/moros](https://github.com/vinc/moros) - x86-64アーキテクチャのBIOS搭載コンピューターを対象とする、テキストベースのホビーOS。

### パッケージマネージャー

* [helsing-ai/buffrs](https://github.com/helsing-ai/buffrs) [[buffrs](https://crates.io/crates/buffrs)] - Protocol BuffersとgRPCアーキテクチャ向けのモダンなパッケージマネージャー。
* [pkgx](https://github.com/pkgxdev/pkgx) - 何でも実行。オープンソースエコシステム全体をスクリプトから利用可能にする、合成可能なパッケージマネージャー。
* [rebos](https://crates.io/crates/rebos) - あらゆるLinuxディストリビューションでパッケージ管理を自動化する宣言的な方法 [![crate](https://img.shields.io/crates/v/rebos?logo=rust)](https://crates.io/crates/rebos)

### 決済

* [hyperswitch](https://github.com/juspay/hyperswitch) - 単一のAPI統合で複数の決済プロセッサーと接続し、決済トラフィックを簡単にルーティングできるオープンソースの決済オーケストレーター。 ![GitHub last commit](https://img.shields.io/github/last-commit/juspay/hyperswitch?style=flat-square)

### 生産性

* [0xdea/jiggy](https://github.com/0xdea/jiggy) [[jiggy](https://crates.io/crates/jiggy)] - Rust製の最小構成クロスプラットフォーム・マウスジグラー [![build](https://github.com/0xdea/jiggy/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/jiggy/actions/workflows/build.yml)
* [aannoo/hcom](https://github.com/aannoo/hcom) - Claude Code、Gemini CLI、Codex、OpenCodeなど、ターミナルをまたいでAIエージェント同士がメッセージ送信、監視、起動を行えるようにします。画面追跡機能付きRust PTYラッパー、ratatui TUI、デーモンクライアントバイナリに加え、PythonフックとAPIを提供。 [![CI](https://github.com/aannoo/hcom/actions/workflows/ci.yml/badge.svg)](https://github.com/aannoo/hcom/actions/workflows/ci.yml)
* [agent-of-empires](https://github.com/njbrake/agent-of-empires) - tmux、Git worktree、Dockerサンドボックスを使って複数のAIコーディングエージェントのセッションを管理するTUI／CLI [![CI](https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg)](https://github.com/njbrake/agent-of-empires/actions)
* [aichat](https://github.com/sigoden/aichat) - シェルアシスタント、Chat-REPL、RAG、AIツール／エージェントを備えるオールインワンLLM CLI。OpenAI、Claude、Gemini、Ollama、Groqなどを利用できます。
* [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) - AIコーディングエージェント向けの長期記憶。自動ライフサイクル記録、エージェント間引き継ぎ、セルフホストMCPサーバーを備えたGit管理のMarkdown Wiki。 [![CI](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-memory/actions/workflows/ci.yml)
* [akitaonrails/ai-usagebar](https://github.com/akitaonrails/ai-usagebar) [[ai-usagebar](https://crates.io/crates/ai-usagebar)] - Claude、Codex／ChatGPT、GitHub Copilot、Z.AI（GLM）、OpenRouterなどでのAIプラン使用量を監視するWaybarウィジェット、Omarchy Quattroネイティブパネル、タブ式TUI。 [![CI](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml/badge.svg)](https://github.com/akitaonrails/ai-usagebar/actions/workflows/ci.yml)
* [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) [[llmfit](https://crates.io/crates/llmfit)] - システムのRAM、CPU、GPUに合うLLMモデルを選定するターミナルツール。ハードウェア検出、品質／速度／適合性／コンテキストの多次元評価、コミュニティランキング、Ollama、llama.cpp、MLX、vLLMなどに対応。 [![CI](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmfit/actions/workflows/ci.yml)
* [AlexsJones/llmserve](https://github.com/AlexsJones/llmserve) [[llmserve](https://crates.io/crates/llmserve)] - llama-server、KoboldCpp、LocalAI、MLX、Ollama、vLLM、LM Studioなどのバックエンドを自動検出し、ローカルLLMを提供する対話型TUI。ソースツリー操作、バックエンド別プリセット、ライブログ、視覚モデルにも対応。 [![CI](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml/badge.svg)](https://github.com/AlexsJones/llmserve/actions/workflows/ci.yml)
* [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) - Claude Code、Codex、OpenCode、Cursorで並列リサーチエージェントを実行するローカルファーストのワークスペース。再現可能な実験追跡を備えます。 [![CI](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml/badge.svg)](https://github.com/alphaXiv/OpenResearch/actions/workflows/ci.yml)
* [antiburn/antiburn](https://github.com/antiburn/antiburn) - AIコーディングエージェントのセッションでトークンを浪費する一般的な原因（セッションの肥大化、過剰なサブエージェント、キャッシュ破損、未使用のMCPサーバー／スキル／ツール）を検査するローカルデスクトップアプリ（Tauri）。Claude Code、Codex、Cursor、Copilot、Piなどに対応。 [![CI](https://github.com/antiburn/antiburn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/antiburn/antiburn/actions/workflows/ci.yml)
* [ast-grep](https://github.com/ast-grep/ast-grep) - コードの構造検索、Lint、書き換えを行うCLIツール。
* [Bartib](https://github.com/nikolassv/bartib) [[Bartib](https://crates.io/crates/bartib)] - コマンドライン向けのシンプルな時間記録ツール [![Tests](https://github.com/nikolassv/bartib/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/nikolassv/bartib/actions/workflows/test.yml)
* [Beetroot](https://github.com/mnardit/beetroot-releases) - AI変換、OCR、あいまい検索を備えるWindows向けクリップボードマネージャー。
* [bitrouter/bitrouter](https://github.com/bitrouter/bitrouter) [[bitrouter](https://crates.io/crates/bitrouter)] - 実行のたびにエージェントを最適化する、ハーネス変更不要のエージェントネイティブLLMルーター。単一のローカルエンドポイント経由でOpenAI、Anthropic、Google、OpenRouter、Bedrock、GitHub Copilotなどへルーティングし、信頼性、追跡可能性、安全性、コスト効率を向上。MCPゲートウェイ、ACP統合、ガードレール、可観測性、マルチアカウントフェイルオーバーを備えます。
* [CookCLI](https://github.com/cooklang/CookCLI) - Webサーバー、買い物リスト、献立計画機能を備えたコマンドラインのレシピ管理ツール。
* [espanso](https://github.com/espanso/espanso) - クロスプラットフォームのテキスト展開ツール。 [![CI](https://github.com/espanso/espanso/actions/workflows/ci.yml/badge.svg?branch=dev&event=push)](https://github.com/espanso/espanso/actions/workflows/ci.yml)
* [eureka](https://crates.io/crates/eureka) - ターミナルを離れずにアイデアを入力・保存するCLIツール
* [farion1231/cc-switch](https://github.com/farion1231/cc-switch) - Claude Code、Codex、Gemini CLI向けのオールインワンGUIアシスタント兼プロファイルマネージャー。
* [fkiene/llmtrim](https://github.com/fkiene/llmtrim) [[llmtrim](https://crates.io/crates/llmtrim)] - 回答を変えずに入出力トークンを削減するため、LLM APIリクエストを圧縮するローカルプロキシ。HTTPS_PROXY経由でAIツールとプロバイダーの間に入り、Claude Code、Codexなどで動作。 [![CI](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml/badge.svg)](https://github.com/fkiene/llmtrim/actions/workflows/ci.yml)
* [flusterIO/fluster](https://github.com/flusterIO/fluster) - STEM分野の学生や専門家向けに構築されたオールインワンのノートアプリ。 [![publish](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml/badge.svg)](https://github.com/flusterIO/fluster/actions/workflows/release_rust.yml)
* [fulsomenko/kanban](https://github.com/fulsomenko/kanban) [[kanban-tui](https://crates.io/crates/kanban-tui)] - lazygitに着想を得たターミナルベースのプロジェクト管理ツール [![CI](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml/badge.svg)](https://github.com/fulsomenko/kanban/actions/workflows/ci.yml)
* [Furtherance](https://github.com/unobserved-io/Furtherance) - GTK4で構築された時間追跡アプリ
* [futuregene/future-os](https://github.com/futuregene/future-os) - どこでも使える単一AIエージェント。Rust製gRPCバックエンドから、同じセッション、記憶、スキルを備えたターミナルUI、デスクトップ／モバイルアプリ、CLI、IMボットを駆動します。信頼を重視した承認ゲート付きツール、3,800以上のモデル、24時間超の実行を制御するループ基盤を備えます。 [![build](https://github.com/futuregene/future-os/actions/workflows/ci.yml/badge.svg)](https://github.com/futuregene/future-os/actions/workflows/ci.yml)
* [graves/awful_aj](https://github.com/graves/awful_aj) [[awful_aj](https://crates.io/crates/awful_aj)] - OpenAI互換APIを扱うCLI。プロンプトエンジニアリング向けYAMLテンプレートと、永続記憶用の組み込みベクトルデータベースを備えます。
* [graykode/abtop](https://github.com/graykode/abtop) [[abtop](https://crates.io/crates/abtop)] - Claude Code、Codex CLI、OpenCodeなどのAIコーディングエージェントのセッションを監視するターミナルTUI。トークン使用量、コンテキストウィンドウ比率、レート制限、子プロセス、孤立ポートを追跡。tmux統合、色覚多様性に配慮したものを含む12テーマ、クロスプラットフォーム対応。 [![CI](https://github.com/graykode/abtop/actions/workflows/ci.yml/badge.svg)](https://github.com/graykode/abtop/actions/workflows/ci.yml)
* [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) [[deepseek-tui-cli](https://crates.io/crates/deepseek-tui-cli)] - ストリーミング推論ブロック、ローカルワークスペース編集、自動モデル選択、MCP対応、ratatuiベースTUIを備えるDeepSeek V4向けターミナルコーディングエージェント。 [![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
* [iBz-04/gloamy](https://github.com/iBz-04/gloamy) [[gloamy](https://crates.io/crates/gloamy)] - CLI、チャネル、ゲートウェイ、ハードウェアのワークフロー向けRustネイティブ自律エージェントランタイム。
* [illacloud/illa](https://github.com/illacloud/illa) - ローコードの社内ツールビルダー。
* [iwe-org/iwe](https://github.com/iwe-org/iwe) [[iwe](https://crates.io/crates/iwe)] - LSPサーバーとCLIを備えたMarkdownベースのナレッジ管理ツール [![Build Status](https://github.com/iwe-org/iwe/actions/workflows/rust.yml/badge.svg)](https://github.com/iwe-org/iwe/actions/workflows/rust.yml)
* [jchultarsky/mirador](https://github.com/jchultarsky/mirador) [[mirador](https://crates.io/crates/mirador)] - 設定可能なグリッドに、時計、カレンダーと予定、天気、タスク、メモ、市場情報、システムのライブメトリクスを表示する、ターミナル向けの落ち着いた個人用ダッシュボード [![CI](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jchultarsky/mirador/actions/workflows/ci.yml)
* [kruseio/hygg](https://github.com/kruseio/hygg) [[hygg](https://crates.io/crates/hygg)] - 📚 読書をよりシンプルに。Vim風でミニマルなTUIドキュメントリーダー。
* [LLDAP](https://github.com/lldap/lldap) - 認証向けの簡素化されたLDAPインターフェース。
* [lockbook/lockbook](https://github.com/lockbook/lockbook) [[lb-rs](https://crates.io/crates/lb-rs)] - 共有Rustコアを基盤とするネイティブなクロスプラットフォームクライアントと、セルフホスト可能なサーバーを備えた、共同作業用のエンドツーエンド暗号化ノート／ドキュメント／描画ツール。 [![Integration](https://github.com/lockbook/lockbook/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/lockbook/lockbook/actions/workflows/integration.yml)
* [mag123c/toktrack](https://github.com/mag123c/toktrack) - Claude Code、Codex、Gemini CLIなどのAIコーディングCLI全体でトークン使用量とコストを追跡する高速TUI／CLI。CLIデータを削除しても残る永続キャッシュを備えます。 [![CI](https://github.com/mag123c/toktrack/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mag123c/toktrack/actions/workflows/ci.yml)
* [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) [[worktrunk](https://crates.io/crates/worktrunk)] - フック、LLMによるコミットメッセージ、マージワークフローを備え、AIエージェントの並列実行を想定したGit worktree管理CLI [![CI](https://img.shields.io/github/actions/workflow/status/max-sixty/worktrunk/ci.yaml?branch=main&logo=github)](https://github.com/max-sixty/worktrunk/actions?query=branch%3Amain+workflow%3Aci)
* [morganlinton/Albatross](https://github.com/morganlinton/Albatross) [[albatross-cli](https://crates.io/crates/albatross-cli)] - ローカル（Ollama、LM Studio、MLX、llama.cpp）とクラウドのバックエンドにまたがる透過的なマルチモデルルーティング、ターンごとのコスト表示、確実なUndo、監査可能なルーティング記録を備えた、ターミナル中心のAIコーディングエージェント。 [![CI](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml/badge.svg)](https://github.com/morganlinton/Albatross/actions/workflows/ci.yml)
* [muvon/octomind](https://github.com/muvon/octomind) - 48以上の専門エージェント、動的なサーバー登録が可能なMCPホスト、13以上のLLMプロバイダー対応、4時間超のセッション向け適応型コンテキスト圧縮を備えたオープンソースAIエージェントランタイムCLI。
* [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) - AIコーディングエージェント向けターミナルマルチプレクサー。1つのターミナルで複数エージェントを動かし、実際のターミナル表示、エージェント状態検知（ブロック中／作業中／完了）、ワークスペース、タブ、永続セッションを利用できます。detach／reattach対応の単一Rustバイナリ。
* [pier-cli/pier](https://github.com/pier-cli/pier) - ワンライナー、スクリプト、ツール、CLIを一元管理（追加、メタデータ検索など）するリポジトリ
* [raine/workmux](https://github.com/raine/workmux) [[workmux](https://crates.io/crates/workmux)] - Git worktreeとtmuxウィンドウを使った、手間のない並列開発 [![CI](https://github.com/raine/workmux/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/raine/workmux/actions/workflows/ci.yml)
* [rtk-ai/rtk](https://github.com/rtk-ai/rtk) - AIコーディングアシスタントのLLMトークン消費を60～90%削減する高性能CLIプロキシ。Claude Code、Copilot、Cursor、Gemini CLI、Codexなどのコマンド出力をフィルタリング／圧縮します。 [![CI](https://github.com/rtk-ai/rtk/workflows/Security%20Check/badge.svg)](https://github.com/rtk-ai/rtk/actions)
* [screenpipe](https://github.com/screenpipe/screenpipe) - 24時間稼働するローカルAI画面・マイク録画。あらゆるコンテキストを持つAIアプリを構築できます。Ollama対応。
* [ShadoySV/work-break](https://github.com/ShadoySV/work-break) [[work-break](https://crates.io/crates/work-break)] - 現在および今日の負荷を考慮して仕事と休息の時間を調整するツール [![Build](https://github.com/ShadoySV/work-break/actions/workflows/release.yml/badge.svg)](https://github.com/ShadoySV/work-break/actions/workflows/release.yml)
* [socai-io/socai](https://github.com/socai-io/socai) - ログイン済みChromeを再利用し、Instagram、TikTok、LinkedIn、X、小紅書、Douyinの投稿、コメント、プロフィール、対応メディアを検索・閲覧するソーシャルリサーチエージェント。
* [tambourine-voice](https://github.com/kstonekuan/tambourine-voice) - あらゆるアプリで使える個人向けAI音声インターフェース。モデルとプロンプトを選べるカスタマイズ可能な音声入力ツールで、Rust製。
* [tassiovirginio/try-rs](https://github.com/tassiovirginio/try-rs) [[try-rs](https://crates.io/crates/try-rs)] - 一時的な実験を整理して移動できるTUI付きワークスペース管理CLI。
* [thClaws/thClaws](https://github.com/thClaws/thClaws) - 複数LLMプロバイダー、スキルシステム、MCPサーバー、ナレッジベース、エージェントオーケストレーションに対応したRustネイティブAIエージェントワークスペース。デスクトップGUI、CLI REPL、非対話モードを備えます。 [![License](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-blue.svg)](https://github.com/thClaws/thClaws)
* [tinyhumansai/opencompany](https://github.com/tinyhumansai/opencompany) - AIエージェントを実際に動く会社へと組み立てるオープンソースランタイム。共有作業ボード、エージェント間の引き継ぎ、人間による承認、スケジュール／DAGワークフローを備え、任意のモデルを使ってDockerでセルフホストできます。 [![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/tinyhumansai/opencompany)
* [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) - デスクトップUI、118以上のOAuth統合、ローカルファーストの記憶ツリー、Obsidian互換Wiki、ネイティブ音声、TokenJuice圧縮を備えたオープンソースのエージェント型アシスタント。プライバシー重視の個人向けAIとしてTauriとRustで構築。
* [tover0314-w/opentypeless](https://github.com/tover0314-w/opentypeless) - TauriとRustで構築されたクロスプラットフォームAI音声入力アプリ。
* [Tuxedo](https://github.com/webstonehq/tuxedo) - todo.txt向けの高速でキーボード操作中心のターミナルUI。
* [tw93/Pake](https://github.com/tw93/Pake) - RustとTauriを使い、1つのコマンドで任意のWebページをデスクトップアプリ化。軽量かつ高速で、macOS、Windows、Linuxに対応。
* [VisiGrid/VisiGrid](https://github.com/VisiGrid/VisiGrid) - GPUI、WASM、ヘッドレスCLIエンジンを用いてコードエディターのように構築されたネイティブ表計算アプリ。
* [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) - Tauri 2、Rustバックエンド、Gitバックアップに対応し、Cursor、Claude Code、Codex、Copilotなど15以上のコーディングツール間でAIエージェントのスキルを管理、同期、整理する軽量デスクトップアプリ。
* [Xoshbin/asyar](https://github.com/Xoshbin/asyar) - Raycastの機能。Alfredの速度。設計段階からプライバシーを重視。 [![CodeQL](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Xoshbin/asyar/actions/workflows/github-code-scanning/codeql)
* [yashs662/rust_kanban](https://github.com/yashs662/rust_kanban) [[rust-kanban](https://crates.io/crates/rust-kanban)] [![Build](https://github.com/yashs662/rust_kanban/actions/workflows/build.yml/badge.svg)](https://github.com/yashs662/rust_kanban/releases) - ターミナル向けカンバンアプリ
* [yicheng47/runner](https://github.com/yicheng47/runner) - macOSとWindows向けのネイティブGPUIデスクトップアプリ。Claude Code、Codex、Copilot CLI、piなどのCLIコーディングエージェントが、実際のターミナル内でそれぞれ独自のTUIを保ちながら、1つのタスクをチームとして共同作業します。 [![CI](https://github.com/yicheng47/runner/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/yicheng47/runner/actions/workflows/ci.yaml)
* [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) - 会議をすべてローカル端末で録音、文字起こし、要約するプライバシー重視のAI会議アシスタント。Whisper／Parakeetモデルによるリアルタイム文字起こし、AI要約、Ollama、Claude、Groq、OpenAIなど複数プロバイダーに対応。

### ルーティングプロトコル

* [Holo](https://github.com/holo-routing/holo) - Holoは、大規模で自動化主導のネットワークを支えるルーティングプロトコル群です。
* [RustyBGP](https://github.com/osrg/rustybgp) - BGP

### セキュリティツール

* [0xdea/augur](https://github.com/0xdea/augur) [[augur](https://crates.io/crates/augur)] - バイナリファイルから文字列と関連する疑似コードを抽出するリバースエンジニアリング支援ツール [![build](https://github.com/0xdea/augur/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/augur/actions/workflows/build.yml)
* [0xdea/haruspex](https://github.com/0xdea/haruspex) [[haruspex](https://crates.io/crates/haruspex)] - IDA Hex-Rays逆コンパイラーから疑似コードを抽出する脆弱性調査支援ツール [![build](https://github.com/0xdea/haruspex/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/haruspex/actions/workflows/build.yml)
* [0xdea/oneiromancer](https://github.com/0xdea/oneiromancer) [[oneiromancer](https://crates.io/crates/oneiromancer)] - ローカルで動作するLLMを使い、ソースコード分析を支援するリバースエンジニアリングツール [![build](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/oneiromancer/actions/workflows/build.yml)
* [0xdea/rhabdomancer](https://github.com/0xdea/rhabdomancer) [[rhabdomancer](https://crates.io/crates/rhabdomancer)] - バイナリ内の安全でない可能性があるAPI関数への呼び出しをすべて特定する脆弱性調査支援ツール [![build](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml/badge.svg)](https://github.com/0xdea/rhabdomancer/actions/workflows/build.yml)
* [AdGuardian-Term](https://github.com/Lissy93/AdGuardian-Term) [[adguardian](https://crates.io/crates/adguardian)] - AdGuard Home向けのターミナルベースのリアルタイムトラフィック監視と統計
* [AFLplusplus/LibAFL](https://github.com/AFLplusplus/LibAFL) - 高度なファジングライブラリ。Rustでファザーを組み合わせて使えます。コアやマシンをまたいでスケールし、Windows、Android、macOS、Linux、no_stdなどに対応。 [![build and test](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/AFLplusplus/LibAFL/actions/workflows/build_and_test.yml)
* [arp-scan-rs](https://github.com/kongbytes/arp-scan-rs) - ローカルネットワークを高速スキャンするための最小構成ARPスキャンツール
* [biandratti/huginn-net](https://github.com/biandratti/huginn-net) - p0f TCPとJA4 TLS分析を組み合わせたマルチプロトコル受動ネットワークフィンガープリント。OSとアプリケーションを識別します。 [![CI](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml/badge.svg)](https://github.com/biandratti/huginn-net/actions/workflows/ci.yml)
* [bountyyfi/lonkero](https://github.com/bountyyfi/lonkero) - ペネトレーションテストとセキュリティ評価向けに60以上の攻撃モジュールを備えたエンタープライズ級Web脆弱性スキャナー
* [cargo-audit](https://crates.io/crates/cargo-audit) - Cargo.lockを監査し、セキュリティ脆弱性のあるクレートを検出
* [cargo-auditable](https://crates.io/crates/cargo-auditable) - 本番用Rustバイナリを監査可能にする
* [cargo-crev](https://crates.io/crates/cargo-crev) - Cargoパッケージマネージャー向けの、暗号学的に検証可能なコードレビューシステム。
* [cargo-deny](https://crates.io/crates/cargo-deny) - 大規模な依存関係グラフの管理を支援するCargoプラグイン
* [Cherrybomb](https://github.com/blst-security/cherrybomb) - 未定義のユーザー動作を避けるためAPI仕様を検証し、未完成のAPI仕様を防ぐCLIツール
* [cotp](https://github.com/replydev/cotp) - インポート機能を備えた、信頼性が高く暗号化されたコマンドラインTOTP／HOTP認証アプリ。
* [domcyrus/rustnet](https://github.com/domcyrus/rustnet) - eBPF／PKTAPによるプロセス識別とディープパケットインスペクションに対応するクロスプラットフォームのネットワーク監視TUI [![build badge](https://img.shields.io/github/actions/workflow/status/domcyrus/rustnet/rust.yml?logo=github)](https://github.com/domcyrus/rustnet/actions/workflows/rust.yml) [![crate](https://img.shields.io/crates/v/rustnet-monitor?logo=rust)](https://crates.io/crates/rustnet-monitor)
* [EFForg/rayhunter](https://github.com/EFForg/rayhunter) - モバイルホットスポット機器上で動作し、IMSIキャッチャー（Stingray／基地局シミュレーター）による潜在的な携帯電話監視の特定を支援するツール [![Tests](https://github.com/EFForg/rayhunter/actions/workflows/main.yml/badge.svg)](https://github.com/EFForg/rayhunter/actions/workflows/main.yml)
* [entropic-security/xgadget](https://github.com/entropic-security/xgadget) [[xgadget](https://crates.io/crates/xgadget)] - 高速で並列かつ複数バリアントに対応したROP／JOPガジェット検索 [![GitHub Actions](https://github.com/entropic-security/xgadget/workflows/test/badge.svg)](https://github.com/entropic-security/xgadget/actions)
* [epi052/feroxbuster](https://github.com/epi052/feroxbuster) - シンプルで高速な再帰型コンテンツ探索ツール。
* [getprovenant/provenant](https://github.com/getprovenant/provenant) [[provenant-cli](https://crates.io/crates/provenant-cli)] - ライセンス、著作権、パッケージ、SBOMを高速スキャンし、完全かつ閉じた依存関係一覧とともにCycloneDX／SPDXを出力。静的かつオフラインで動作。 [![CI](https://github.com/getprovenant/provenant/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/getprovenant/provenant/actions/workflows/check.yml)
* [Inspektor](https://github.com/inspektor-dev/inspektor) - アクセス制御ポリシーを適用する、データベースプロトコルを認識するプロキシ 👮
* [kpcyrd/authoscope](https://github.com/kpcyrd/authoscope) - スクリプト可能なネットワーク認証クラッカー
* [kpcyrd/rshijack](https://github.com/kpcyrd/rshijack) - TCP接続ハイジャッカー。shijackの書き直し。
* [kpcyrd/sn0int](https://github.com/kpcyrd/sn0int) - 半自動OSINTフレームワーク兼パッケージマネージャー
* [kpcyrd/sniffglue](https://github.com/kpcyrd/sniffglue) - 安全なマルチスレッドパケットスニファー
* [LeChatP/RootAsRole](https://github.com/LeChatP/RootAsRole) - sudo(-rs)／suに代わる、より優れたツール。⚡圧倒的に高速 🛡️ メモリー安全 🔐 セキュリティ重視 ![Build](https://img.shields.io/github/actions/workflow/status/LeChatP/RootAsRole/build.yml?logo=githubactions&label=Build&logoColor=white) ![Coverage](https://img.shields.io/codecov/c/github/lechatp/rootasrole?color=green&link=https%3A%2F%2Fapp.codecov.io%2Fgh%2FLeChatP%2FRootAsRole&label=Test%20Coverage) ![crates.io](https://img.shields.io/crates/v/rootasrole.svg?label=Version&color=e37602&logo=rust)
* [microsoft/mxc](https://github.com/microsoft/mxc) - Windows、Linux、macOS上で信頼できないコード（モデル出力、プラグイン、ツール）を実行するサンドボックスシステム。ProcessContainer、Windows Sandbox、LXC、Bubblewrap、Seatbelt、MicroVM、Hyperlight、IsolationSession、WSLCなど複数の隔離バックエンドと、JSONベースのポリシー駆動サンドボックスを備え、TypeScript SDKを提供。 [![CI](https://github.com/microsoft/mxc/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/mxc/actions)
* [mongodb/kingfisher](https://github.com/mongodb/kingfisher) - ファイル、Gitリポジトリ、S3、Jira、Confluenceを対象に、秘密情報を高速検出し、その場で検証するツール
* [mullvad/mullvadvpn-app](https://github.com/mullvad/mullvadvpn-app) - WireGuard、量子耐性トンネル、プライバシー重視機能に対応するMullvad VPNサービス向けクロスプラットフォームVPNクライアントアプリ。 [![CI](https://github.com/mullvad/mullvadvpn-app/actions/workflows/verify.yml/badge.svg)](https://github.com/mullvad/mullvadvpn-app/actions)
* [observer_ward](https://github.com/emo-crab/observer_ward) - Webアプリケーションとサービスのフィンガープリント識別ツール
* [Raspirus](https://github.com/Raspirus/Raspirus) - ユーザーとリソースに優しいルールベースのマルウェアスキャナー [![status](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml/badge.svg)](https://github.com/Raspirus/Raspirus/actions/workflows/testproject.yml)
* [reaction](https://framagit.org/ppom/reaction) - ログをスキャンして対処する、fail2banの代替製品
* [ripasso](https://github.com/cortex/ripasso/) - passと互換性のあるファイルシステムを使用するパスワードマネージャー
* [rustscan](https://github.com/bee-san/RustScan) - ポートスキャンツールでNmapを高速化 [![build badge](https://github.com/bee-san/RustScan/actions/workflows/test.yml/badge.svg)](https://github.com/bee-san/RustScan/actions)
* [santhreal/keyhog](https://github.com/santhreal/keyhog) [[keyhog](https://crates.io/crates/keyhog)] - ソースツリー、Git履歴、アーカイブ、リモートソースを対象に漏えいした認証情報やAPIキーを検出し、発見した秘密情報をライブ検証します。 [![CI](https://github.com/santhreal/keyhog/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/santhreal/keyhog/actions/workflows/ci.yml)
* [secluso](https://github.com/secluso/core) - エンドツーエンド暗号化を使う、プライベートなRaspberry Pi向けホームセキュリティカメラ
* [sherlock](https://github.com/jonaylor89/sherlock-rs) [[sherlock](https://crates.io/crates/sherlock)] - ユーザー名からソーシャルネットワーク上のアカウントを特定 [![status](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/jonaylor89/sherlock-rs/actions/workflows/rust.yml)
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) - SSHキーを使って秘密情報を暗号化／復号するシンプルな管理ツール。
* [timescale/rsigma](https://github.com/timescale/rsigma) [[rsigma](https://crates.io/crates/rsigma)] - Sigma検出標準向けの完全な検出エンジニアリングツールキット。パーサー、評価エンジン、ルール変換、ストリーミングランタイム、リンター、CLI、MCP、LSPを備えます。 [![CI](https://github.com/timescale/rsigma/actions/workflows/ci.yml/badge.svg)](https://github.com/timescale/rsigma/actions/workflows/ci.yml)

### ソーシャルネットワーク

* Discord
  * [concord](https://github.com/chojs23/concord) - 多機能なDiscord向けTUIクライアント。
  * [Dorion](https://github.com/SpikeHD/Dorion) - より小さく軽快な起動、テーマ、プラグインなどを備える軽量なDiscord代替クライアント。 ![build](https://img.shields.io/github/actions/workflow/status/SpikeHD/Dorion/build.yml)
* Mastodon
  * [Rustodon](https://github.com/rustodon/rustodon) - Mastodon互換でActivityPubに対応するサーバー。
* Telegram
  * [tgt](https://github.com/FedericoBruzzone/tgt) - Telegram向けクロスプラットフォームTUI [![ci-linux](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-linux.yml) [![ci-macos](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-macos.yml) [![ci-windows](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tgt/actions/workflows/ci-windows.yml)
* WhatsApp
  * [imtaqin/waxum](https://github.com/imtaqin/waxum) - 単一の静的バイナリでREST API、Webhook、複数セッション、音声通話を提供するセルフホスト型WhatsAppゲートウェイ。 [![CI](https://github.com/imtaqin/waxum/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/imtaqin/waxum/actions/workflows/ci.yml)

### システムツール

* [adileo/squirreldisk](https://github.com/adileo/squirreldisk) - macOS、Windows、Linux向けディスク使用量分析GUI（egui）。サンバースト／ツリーマップ表示を備え、SSHサーバーやrclone経由のクラウドストレージもスキャンできます。 [![CI](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adileo/squirreldisk/actions/workflows/ci.yml)
* [ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide/) - 利用習慣を学習する、`cd`の高速な代替ツール [![release](https://github.com/ajeetdsouza/zoxide/actions/workflows/release.yml/badge.svg)](https://github.com/ajeetdsouza/zoxide/actions)
* [anylinuxfs](https://github.com/nohajc/anylinuxfs) - マイクロVM上のNFSを利用し、Linux対応のあらゆるファイルシステムをMacにマウントするCLIツール
* [anylinuxfs-gui](https://github.com/fenio/anylinuxfs-gui) - anylinuxfs向けGUIアプリケーション
* [ataraxy-labs/sem](https://github.com/ataraxy-labs/sem) - エンティティ単位のセマンティックバージョン管理CLI。tree-sitterを通じて32言語の関数／クラス単位でdiff、blame、グラフ、影響分析を行います。 [![Release](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/sem/actions/workflows/release.yml)
* [ataraxy-labs/weave](https://github.com/ataraxy-labs/weave) - Git向けエンティティ単位のマージドライバー。tree-sitterでコード構造を理解して競合を解決し、.gitattributes経由でカスタムドライバーとしてGitに組み込めます。 [![Release](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml/badge.svg)](https://github.com/ataraxy-labs/weave/actions/workflows/release.yml)
* [atuin](https://github.com/atuinsh/atuin) [[atuin](https://crates.io/crates/atuin)] - Atuinは既存のシェル履歴をSQLiteデータベースに置き換え、コマンドの追加コンテキストも記録します。Atuinサーバー経由で、マシン間の履歴を任意で完全暗号化同期できます。
* [bandwhich](https://github.com/imsnif/bandwhich) - ターミナル帯域使用量ツール
* [bolivian-peru/os-moda](https://github.com/bolivian-peru/os-moda) - AIエージェントが91個の型付きMCPツールを通じてroot権限を持つNixOSディストリビューション。9つのRustデーモン（システムブリッジ、自動ロールバック付きSafeSwitch原子的デプロイ、ハッシュチェーン監査台帳、AES-256-GCM暗号ウォレット、Noise_XX + ML-KEM-768 P2Pメッシュ、ローカルSTT/TTS、MCPサーバーライフサイクル、システム学習、ドメイン許可リスト付き送信プロキシ）がUnixソケット経由で通信します。
* [bottom](https://github.com/ClementTsang/bottom) - クロスプラットフォーム対応の、もう一つのグラフィカルなプロセス／システムモニター。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ClementTsang/bottom/ci/master)](https://github.com/ClementTsang/bottom/actions?query=branch%3Amaster)
* [brocode/fblog](https://github.com/brocode/fblog) - 小型のコマンドラインJSONログビューアー
* [brush-shell](https://github.com/reubeno/brush) - bash／POSIX互換シェル [![CICD](https://github.com/reubeno/brush/actions/workflows/ci.yaml/badge.svg)](https://github.com/reubeno/brush/actions/workflows/ci.yaml)[![Crate](https://img.shields.io/crates/v/brush-shell.svg?logo=rust)](https://crates.io/crates/brush-shell)
* [bustd](https://github.com/vrmiguel/bustd) - Linuxのメモリー不足時に対応する軽量なプロセス終了デーモン。 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vrmiguel/bustd/build-and-test)](https://github.com/vrmiguel/bustd/actions?query=branch%3Amaster)
* [buster/rrun](https://github.com/buster/rrun) - gmrunに似たLinux向けコマンドランチャー
* [cantino/mcfly](https://github.com/cantino/mcfly) - シェル履歴を駆け抜けろ。Great Scott!
* [ChurchTao/clipboard-rs](https://github.com/ChurchTao/clipboard-rs) [[clipboard-rs](https://crates.io/crates/clipboard-rs)] - システムのクリップボード内容の取得、設定、変更監視を行うRust製クロスプラットフォームライブラリ。
* [Cocoa-Way](https://github.com/J-x-Z/cocoa-way) [[homebrew](https://github.com/J-x-Z/homebrew-tap)] - VMのオーバーヘッドなしでLinux GUIアプリを動かすネイティブmacOS Waylandコンポジター。Smithay製。 [![build badge](https://github.com/J-x-Z/cocoa-way/actions/workflows/release.yml/badge.svg)](https://github.com/J-x-Z/cocoa-way/actions)
* [crabz](https://github.com/sstadick/crabz) - マルチスレッド対応の圧縮／展開CLIツール [![Build Status](https://github.com/sstadick/crabz/workflows/Check/badge.svg)](https://github.com/sstadick/crabz/actions?query=workflow%3ACheck)
* [cristianoliveira/funzzy](https://github.com/cristianoliveira/funzzy) - [entr](http://eradman.com/entrproject/)に着想を得た、設定可能なモニター型ファイルシステムウォッチャー
* [dalance/procs](https://github.com/dalance/procs) - 「ps」のモダンな代替ツール [![Regression](https://github.com/dalance/procs/actions/workflows/regression.yml/badge.svg)](https://github.com/dalance/procs/actions/workflows/regression.yml)
* [ddh](https://github.com/darakian/ddh) - 高速な重複ファイル検索ツール
* [deshaw/procfd](https://github.com/deshaw/procfd) [[procfd](https://crates.io/crates/procfd)] - プロセスのオープンファイルディスクリプターを一覧表示するLinux lsof代替ツール
* [diskonaut](https://github.com/imsnif/diskonaut) - ターミナルで使う視覚的なディスク容量ナビゲーター
* [dust](https://github.com/bootandy/dust) - より直感的なdu
* [erickochen/purple](https://github.com/erickochen/purple) [[purple-ssh](https://crates.io/crates/purple-ssh)] - クラウド同期、コンテナー管理、ファイル転送、トンネル、スニペット、パスワード管理を備えたRatatui製SSHクライアント [![CI](https://github.com/erickochen/purple/actions/workflows/ci.yml/badge.svg)](https://github.com/erickochen/purple/actions/workflows/ci.yml)
* [eza-community/eza](https://github.com/eza-community/eza) - 「ls」の代替ツール
* [fish-shell/fish-shell](https://github.com/fish-shell/fish-shell) - ユーザーフレンドリーなコマンドラインシェル
* [fork](https://github.com/immortal/fork) - 制御端末から切り離された新しいプロセス（デーモン）を作成するライブラリ
* [fselect](https://crates.io/crates/fselect) - SQL風クエリでファイルを検索
* [git-ai-project/git-ai](https://github.com/git-ai-project/git-ai) - AI生成コードをリポジトリ内で追跡し、行をエージェント、モデル、トランスクリプトに結び付けるGit拡張機能。
* [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) - AI活用ワークフロー向けにゼロから構築された、GUIとCLIを備えるモダンなGitベースのバージョン管理インターフェース。
* [gitui](https://github.com/gitui-org/gitui) - 非常に高速なターミナルGitクライアント。 [![build](https://github.com/gitui-org/gitui/actions/workflows/ci.yml/badge.svg)](https://github.com/gitui-org/gitui/actions)
* [GQL](https://github.com/amrdeveloper/gql) - .gitファイルに対して実行するSQL風クエリ言語。
* [harry0703/MangoDisk](https://github.com/harry0703/MangoDisk) - 詳細なクリーンアップ、ツリーマップ可視化、重複検出、アプリのアンインストール、開発者向け生成物の削除に対応するクロスプラットフォームのディスク整理／容量分析アプリ。 [![Cross-platform Check](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml/badge.svg)](https://github.com/harry0703/MangoDisk/actions/workflows/cross-platform-check.yml)
* [httm](https://github.com/kimono-koans/httm) - ZFS／btrfs／nilfs2（実際のTime Machineバックアップも）向けの、対話型でファイル単位のTime Machine風ツール。
* [hyperb1iss/unifly](https://github.com/hyperb1iss/unifly) [[unifly](https://crates.io/crates/unifly)] - デュアルAPIとRatatui製10画面ダッシュボードを備える、Ubiquiti UniFiネットワークコントローラー管理用CLI／TUI [![CI](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml/badge.svg)](https://github.com/hyperb1iss/unifly/actions/workflows/cicd.yml)
* [j0ru/kickoff](https://github.com/j0ru/kickoff) - 高速で軽快なWaylandプログラムランチャー [![build](https://github.com/j0ru/kickoff/actions/workflows/ci.yml/badge.svg)](https://github.com/j0ru/kickoff/actions)
* [jacek-kurlit/pik](https://github.com/jacek-kurlit/pik) [[pik](https://crates.io/crates/pik)] - プロセスの検索と終了を支援するTUIコマンドラインツール
* [Kondo](https://github.com/tbillington/kondo) - ソフトウェアプロジェクトの生成物を削除してディスク容量を回復するCLI／GUIツール
* [LACT](https://github.com/ilya-zlobintsev/LACT) - Linux AMDGPUコントローラー
* [lodosgroup/lpm](https://github.com/lodosgroup/lpm) - 実験的なシステムパッケージマネージャー
* [lotabout/rargs](https://github.com/lotabout/rargs) [[rargs](https://crates.io/crates/rargs)] - パターンマッチング対応のxargs + awk
* [lsd](https://github.com/lsd-rs/lsd) - カラフルな色と素晴らしいアイコンを備えたls [![build](https://github.com/lsd-rs/lsd/actions/workflows/CICD.yml/badge.svg)](https://github.com/lsd-rs/lsd/actions)
* [Luminarys/synapse](https://github.com/Luminarys/synapse) - 柔軟で高速なBitTorrentデーモン。
* [m4b/bingrep](https://github.com/m4b/bingrep) - さまざまなOS／アーキテクチャのバイナリをgrepし、色付けして表示します。
* [macpow](https://github.com/k06a/macpow) - Apple Silicon Mac（M1～M5以降）向けリアルタイム電力消費監視TUI。IOReport、SMC、IORegistryを読み取り、sudoは不要。 [![CI](https://github.com/k06a/macpow/actions/workflows/ci.yml/badge.svg)](https://github.com/k06a/macpow/actions/workflows/ci.yml)[![crates.io](https://img.shields.io/crates/v/macpow.svg?logo=rust)](https://crates.io/crates/macpow)
* [Mapika/portview](https://github.com/Mapika/portview) [[portview](https://crates.io/crates/portview)] - 各ポートで動作するプロセスを表示し、競合、ワイルドカード公開、接続リークを診断。MCPサーバーとしても動作します。 [![CI](https://github.com/Mapika/portview/actions/workflows/ci.yml/badge.svg)](https://github.com/Mapika/portview/actions)
* [matheus-git/systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) [[systemd-manager-tui](https://crates.io/crates/systemd-manager-tui)] - TUI（ターミナルユーザーインターフェース）でsystemdサービスを管理するプログラム。
* [matthart1983/diskwatch](https://github.com/matthart1983/diskwatch) - 単一ホスト向けディスク診断TUI。デバイス、ボリューム、ファイルシステム、I/O、SMART、ホットファイル、分析情報を8つのタブで表示。
* [matthart1983/netwatch](https://github.com/matthart1983/netwatch) [[netwatch-tui](https://crates.io/crates/netwatch-tui)] - リアルタイムのネットワーク診断TUI。13プロトコル（TLS、QUIC、HTTP、DNS、SSH、MQTT、SNMPなど）のディープパケットインスペクション、eBPF／PKTAPによるプロセス別分析、TCP再送分析、JA4フィンガープリンティング、任意のLandlockサンドボックス、Flight Recorderインシデント記録を備えます。
* [matthart1983/syswatch](https://github.com/matthart1983/syswatch) [[syswatch](https://crates.io/crates/syswatch)] - 単一ホスト向けシステム診断TUI。CPU、メモリー、ディスク、プロセス、GPU、電力、サービス、ネットワークを12タブで表示し、タイムラインスクラバーと異常検出エンジンも備えます。
* [mdgaziur/findex](https://github.com/mdgaziur/findex) - GTK3製の高度にカスタマイズ可能なアプリケーション検索ツール。
* [mitnk/cicada](https://github.com/mitnk/cicada) - bash風のUnixシェル
* [mmstick/concurr](https://github.com/mmstick/concurr) - クライアント／サーバーアーキテクチャを採用したGNU Parallelの代替ツール
* [mmstick/fontfinder](https://github.com/mmstick/fontfinder) - Google FontsをプレビューしてインストールするGTK3アプリケーション
* [mmstick/tv-renamer](https://github.com/mmstick/tv-renamer) - オプションのGTK3フロントエンドを備えたテレビシリーズ名変更アプリ。
* [mxseev/logram](https://github.com/mxseev/logram) - ログファイルの更新をTelegramに送信
* [netscanner](https://github.com/Chleba/netscanner) - TUIネットワークスキャナー
* [nickgerace/gfold](https://github.com/nickgerace/gfold) [[gfold](https://crates.io/crates/gfold)] - 複数のGitリポジトリを追跡するCLIツール [![build](https://img.shields.io/github/workflow/status/nickgerace/gfold/merge/main)](https://github.com/nickgerace/gfold/actions?query=workflow%3Amerge+branch%3Amain)
* [nivekuil/rip](https://github.com/nivekuil/rip) - `rm`の安全で使いやすい代替ツール
* [nushell/nushell](https://github.com/nushell/nushell) - 新しい種類のシェル
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) - Terraform MCPツール。AIアシスタントがModel Context Protocol経由でTerraform環境を管理するためのCLI。
* [nwiizo/tfocus](https://github.com/nwiizo/tfocus) - Terraformのplan／apply操作を選択して実行する対話型ツール
* [orhun/kmon](https://github.com/orhun/kmon) - Linuxカーネルマネージャー兼アクティビティモニター ![https://github.com/orhun/kmon/actions](https://img.shields.io/github/actions/workflow/status/orhun/kmon/ci.yml?branch=master&label=build)
* [orhun/systeroid](https://github.com/orhun/systeroid) - ターミナルUIを備えた、sysctl(8)のより高機能な代替ツール ![https://github.com/orhun/systeroid/actions](https://img.shields.io/github/actions/workflow/status/orhun/systeroid/ci.yml?branch=main&label=build)
* [ouch](https://github.com/ouch-org/ouch) - コマンドラインで手軽に圧縮／展開 [![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/ouch-org/ouch/build-and-test)](https://github.com/ouch-org/ouch/actions?query=branch%3Amaster)
* [pkolaczk/fclones](https://github.com/pkolaczk/fclones) - 効率的な重複ファイル検索／削除ツール
* [pop-os/popsicle](https://github.com/pop-os/popsicle) - 複数のUSBデバイスへ並列書き込みするGTK3／CLIユーティリティ
* [pop-os/system76-power](https://github.com/pop-os/system76-power/) - CLIツールを備えたLinux電源管理デーモン（D-Busインターフェース）。
* [pueue](https://github.com/nukesor/pueue) - 長時間実行されるシェルコマンドを管理。 [![GitHub Actions Workflow](https://github.com/Nukesor/pueue/actions/workflows/test.yml/badge.svg)](https://github.com/nukesor/pueue/actions)
* [qarmin/czkawka](https://github.com/qarmin/czkawka) - 重複、空フォルダー、類似画像などを探す多機能アプリ。 [![GitHub Actions Workflow](https://github.com/qarmin/czkawka/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/qarmin/czkawka/actions)
* [redox-os/ion](https://github.com/redox-os/ion) - 次世代システムシェル
* [sharkdp/bat](https://github.com/sharkdp/bat) - 翼の生えたcat(1)クローン。 [![CICD](https://github.com/sharkdp/bat/actions/workflows/CICD.yml/badge.svg?branch=master)](https://github.com/sharkdp/bat/actions/workflows/CICD.yml)
* [sharkdp/fd](https://github.com/sharkdp/fd) - findに代わるシンプルで高速、使いやすいツール。 [![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml)
* [sharkdp/hexyl](https://github.com/sharkdp/hexyl) [[hexyl](https://crates.io/crates/hexyl)] - バイトの種類ごとに色分けして表示するコマンドラインhexビューアー [![CICD](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/hexyl/actions/workflows/CICD.yml)
* [sitkevij/hex](https://github.com/sitkevij/hex) - 色付き表示のhexdumpターミナルユーティリティ。
* [Skardyy/mcat](https://github.com/Skardyy/mcat) [[mcat](https://crates.io/crates/mcat)] - ターミナルで画像、動画、Markdownなどのドキュメントを表示。
* [skim](https://github.com/skim-rs/skim) - ファジーファインダー
* [sorairolake/hf](https://github.com/sorairolake/hf) [[hf](https://crates.io/crates/hf)] - クロスプラットフォームの隠しファイルライブラリ兼ユーティリティ [![CI](https://github.com/sorairolake/hf/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/hf/actions/workflows/CI.yaml)
* [sorairolake/ngrv](https://github.com/sorairolake/ngrv) [[ngrv](https://crates.io/crates/ngrv)] - `pv(1)`に似たターミナルベースのパイプビューアー [![CI](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/ngrv/actions/workflows/CI.yaml)
* [sorairolake/rzopfli](https://github.com/sorairolake/rzopfli) [[rzopfli](https://crates.io/crates/rzopfli)] - Zopfliを使った可逆データ圧縮ツール [![CI](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/rzopfli/actions/workflows/CI.yaml)
* [supercilex/fuc](https://github.com/supercilex/fuc) - 高速な`cp`／`rm`コマンド
* [theBGuy/GitDesktop](https://github.com/theBGuy/GitDesktop) - GitHub、GitLab、BitbucketにまたがるPR、Issue、ディスカッション、CI、通知管理に加え、Jira連携とAIエージェント統合を備えたキーボード操作中心のGitデスクトップクライアント。Tauri + Rustバックエンド。 [![Release](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/theBGuy/GitDesktop/actions/workflows/release.yml)
* [timhartmann7/omnyssh](https://github.com/timhartmann7/omnyssh) - SSH接続管理向けの高速でキーボード操作中心のTUI [![CI](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml/badge.svg)](https://github.com/timhartmann7/omnyssh/actions/workflows/ci.yml)
* [topheman/webassembly-component-model-experiments](https://github.com/topheman/webassembly-component-model-experiments) - サンドボックス化された多言語プラグインシステムを備える、WebAssembly Component ModelベースのREPL [![Crates.io](https://img.shields.io/crates/v/pluginlab.svg)](https://crates.io/crates/pluginlab)
* [trippy](https://github.com/fujiapple852/trippy) - ネットワーク診断ツール [![build badge](https://github.com/fujiapple852/trippy/workflows/CI/badge.svg)](https://github.com/fujiapple852/trippy/actions/workflows/ci.yml)
* [tw93/Kaku](https://github.com/tw93/Kaku) - AIコーディング向けに作られた、すぐ使える高速ターミナルエミュレーター。設定不要の初期設定、AIアシスタント統合、WezTerm互換Lua設定に対応。macOS専用。
* [uutils/coreutils](https://github.com/uutils/coreutils) - GNU coreutilsのクロスプラットフォーム書き換え [![CICD](https://github.com/uutils/coreutils/actions/workflows/CICD.yml/badge.svg)](https://github.com/uutils/coreutils/actions/workflows/CICD.yml)
* [vyrti/cleaner](https://github.com/vyrti/cleaner) - Windows、macOS、Linux、FreeBSD向けの最速ディスク容量分析／クリーンアップツール。 [![CI](https://github.com/vyrti/cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/vyrti/cleaner/actions)
* [watchexec](https://github.com/watchexec/watchexec) - ファイル変更に応じてコマンドを実行
* [XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei) - コード行数を数える
* [ynqa/jnv](https://github.com/ynqa/jnv) - jqを使った対話型JSONフィルター [![ci](https://github.com/ynqa/jnv/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/jnv/actions/workflows/ci.yml)
* [ynqa/logu](https://github.com/ynqa/logu) - （ストリーミング）非構造化ログメッセージからパターンを抽出 [![ci](https://github.com/ynqa/logu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/logu/actions/workflows/ci.yml)
* [ynqa/sig](https://github.com/ynqa/sig) - 対話型grep（ストリーミング対応） [![ci](https://github.com/ynqa/sig/actions/workflows/ci.yml/badge.svg)](https://github.com/ynqa/sig/actions/workflows/ci.yml)

### タスクスケジューリング

* [tasklet](https://github.com/stav121/tasklet) [[tasklet](https://crates.io/crates/tasklet)] - Rustで記述されたタスクスケジューリングライブラリ ![Build Status](https://img.shields.io/github/actions/workflow/status/stav121/tasklet/rust.yml)

### テキストエディター

* [amp](https://amp.rs) - Vi／Vimに着想を得たエディター。
* [Ferrite](https://github.com/OlaProeis/Ferrite) - ライブプレビュー、構文強調表示、Mermaid図に対応する、egui製クロスプラットフォームMarkdownエディター。
* [Fresh](https://github.com/sinelaw/fresh) - TypeScriptプラグインに対応した、使いやすく高機能で高速なターミナルテキストエディター兼IDE。
* [gchp/iota](https://github.com/gchp/iota) - シンプルなテキストエディター
* [helix](https://github.com/helix-editor/helix) - Neovim／Kakouneに着想を得たポストモダンなモーダルテキストエディター。 [![build badge](https://github.com/helix-editor/helix/actions/workflows/build.yml/badge.svg)](https://github.com/helix-editor/helix/actions)
* [ilai-deutel/kibi](https://github.com/ilai-deutel/kibi) - 構文強調表示、インクリメンタル検索などを備えた小型（1024行以下）のテキストエディター。 [![build badge](https://github.com/ilai-deutel/kibi/actions/workflows/ci.yml/badge.svg)](https://github.com/ilai-deutel/kibi/actions?query=branch%3Amaster)
* [Inkwell](https://github.com/4worlds4w-svg/inkwell) - Tauri v2製のポータブルでオフラインファーストなMarkdownエディター。単一実行ファイルでテレメトリーなし。
* [jamii/focus](https://github.com/jamii/focus) - jj（Jujutsu）バージョン管理を統合したミニマルなテキストエディター。
* [ki-editor/ki-editor](https://github.com/ki-editor/ki-editor) - 複数カーソル対応の組み合わせ型モーダルエディター
* [Lapce](https://github.com/lapce/lapce) - バックエンドを備えたモダンなエディター。開発終了した[xi-editor](https://github.com/xi-editor/xi-editor)に着想を得ています。
* [manyougz/velotype](https://github.com/manyougz/velotype) - GPUIで構築されたブロックベースのネイティブMarkdownエディター。WebViewシェルを使わず、WYSIWYG描画とソース編集モードを備えます。
* [mathall/rim](https://github.com/mathall/rim) - Vim風テキストエディター。
* [ox](https://github.com/curlpipe/ox) - ターミナルで動作する独立系Rustテキストエディター！
* [SoloMD](https://github.com/zhitongblog/solomd) - Tauri 2で構築された、ライブプレビュー付きの軽量クロスプラットフォームMarkdownエディター。
* [vamolessa/pepper](https://git.sr.ht/~lessa/pepper) [[pepper](https://crates.io/crates/pepper)] - ターミナルでのコード編集を簡素化する、独自の方針を持つモーダルエディター
* [zed](https://github.com/zed-industries/zed) - AtomとTree-sitterの開発者が手掛ける、高性能なマルチプレイヤーコードエディター。

### テキスト処理

* [artob/readmer](https://github.com/artob/readmer) [[readmer](https://crates.io/crates/readmer)] - LiquidまたはJinja2テンプレートから`README.md`を組み立てます。 [![Build Status](https://github.com/artob/readmer/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/readmer/blob/master/.github/workflows/rust.yaml)
* [ashvardanian/stringzilla](https://github.com/ashvardanian/StringZilla) - x86 AVX2／AVX-512およびArm NEON向けの、SIMDアクセラレーション対応文字列検索、ソート、編集距離、アラインメント、ジェネレーター [![crates.io](https://img.shields.io/crates/v/stringzilla.svg)](https://crates.io/crates/stringzilla)
* [bensadeh/tailspin](https://github.com/bensadeh/tailspin) [[tailspin](https://crates.io/crates/tailspin)] - 数値、日付、IPアドレス、UUID、ログレベルを強調表示するログファイルハイライター。 [![Run Tests](https://github.com/bensadeh/tailspin/workflows/Run%20Tests/badge.svg)](https://github.com/bensadeh/tailspin/actions)
* [brevity1swos/rgx](https://github.com/brevity1swos/rgx) [[rgx-cli](https://crates.io/crates/rgx-cli)] - リアルタイム照合、ステップ実行デバッガー、3つのエンジン、コード生成、ライブストリームフィルターを備えたターミナル正規表現デバッガー。 [![CI](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml/badge.svg)](https://github.com/brevity1swos/rgx/actions/workflows/ci.yml)
* [cchexcode/complate](https://github.com/cchexcode/complate) - Gitコミットなどのメッセージを標準化するために設計された、ターミナル内テキストテンプレートツール。 [![crates.io](https://img.shields.io/crates/v/complate.svg)](https://crates.io/crates/complate) [![crates.io](https://img.shields.io/crates/d/complate?label=crates.io%20downloads)](https://crates.io/crates/complate) [![build badge](https://github.com/cchexcode/complate/actions/workflows/release.yml/badge.svg)](https://github.com/cchexcode/complate/actions)
* [dathere/qsv](https://github.com/dathere/qsv) [[qsv](https://crates.io/crates/qsv)] - 高性能CSVデータ加工ツールキット。xsvのフォークで、34以上のコマンドを追加。 [![Linux build status](https://github.com/dathere/qsv/actions/workflows/rust.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust.yml) [![Windows build status](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-windows.yml) [![macOS build status](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml/badge.svg)](https://github.com/dathere/qsv/actions/workflows/rust-macos.yml)
* [dominikwilkowski/cfonts](https://github.com/dominikwilkowski/cfonts) [[cfonts](https://crates.io/crates/cfonts)] - コンソール向けのクールなANSIフォント ![build badge](https://github.com/dominikwilkowski/cfonts/actions/workflows/testing.yml/badge.svg)
* [Goldziher/uncomment](https://github.com/Goldziher/uncomment) [[uncomment](https://crates.io/crates/uncomment)] - tree-sitter文法を使ってコードからコメントを削除する超高速CLI。
* [grex](https://github.com/pemistahl/grex) - ユーザーが指定したテストケースから正規表現を生成するコマンドラインツール兼ライブラリ
* [harehare/mq](https://github.com/harehare/mq) - jq風構文でMarkdownを処理するコマンドラインツール兼ライブラリ [![build badge](https://github.com/harehare/mq/actions/workflows/ci.yml/badge.svg)](https://github.com/harehare/mq/actions/workflows/ci.yml)
* [Lisprez/so_stupid_search](https://github.com/Lisprez/so_stupid_search) - 人間向けのシンプルで高速な文字列検索ツール
* [loki_text](https://github.com/roquess/loki_text) [[loki_text](https://crates.io/crates/loki_text)] - パターン検索、テキスト変換、複数の文字列検索アルゴリズム（KMP、Boyer-Moore、Aho-Corasickなど）を備える文字列操作ライブラリ
* [Melody](https://github.com/yoav-lavi/melody) - より読みやすく保守しやすい正規表現へのコンパイルを目指す言語 [![build badge](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml/badge.svg)](https://github.com/yoav-lavi/melody/actions/workflows/rust.yml) [![crates.io](https://img.shields.io/crates/v/melody_compiler?label=compiler)](https://crates.io/crates/melody_compiler)
* [micahkepe/jsongrep](https://github.com/micahkepe/jsongrep) [[jsongrep](https://crates.io/crates/jsongrep)] - 直感的なパス問い合わせ構文を備えた、JSON、YAML、TOMLなどの高速検索ツール。
* [phiresky/ripgrep-all](https://github.com/phiresky/ripgrep-all) - PDF、電子書籍、Office文書、zip、tar.gzなども検索できるripgrep
* [ripgrep](https://crates.io/crates/ripgrep) - The Silver Searcherの使いやすさとgrepの圧倒的な速度を組み合わせたツール
* [ruplacer](https://github.com/your-tools/ruplacer) - ソースファイル内のテキストを検索して置換 [![Run tests](https://github.com/your-tools/ruplacer/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/your-tools/ruplacer/actions/workflows/test.yml)
* [scooter](https://github.com/thomasschafer/scooter) - ターミナル内で対話的に検索・置換。
* [sd](https://crates.io/crates/sd) - 直感的な検索・置換CLI
* [sstadick/hck](https://github.com/sstadick/hck) - `cut`の高速で高機能なドロップイン代替ツール [![build badge](https://github.com/sstadick/hck/workflows/Check/badge.svg?branch=master)](https://github.com/sstadick/hck)
* [SylphxAI/anymd](https://github.com/SylphxAI/anymd) - PDF、DOCX、PPTX、XLSX、EPUB、HTML／URL、画像、音声／動画などのファイルをAIエージェント向けにクリーンなMarkdownへ変換するCLI兼MCPサーバー [![build badge](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/SylphxAI/anymd/actions/workflows/ci.yml)
* [vishaltelangre/ff](https://github.com/vishaltelangre/ff) - 名前でファイルを検索（ff）！
* [whitfin/bytelines](https://github.com/whitfin/bytelines) [[bytelines](https://crates.io/crates/bytelines)] - 高効率化のため、入力行をバイトスライスとして読み込みます。
* [whitfin/runiq](https://github.com/whitfin/runiq) - 並べ替えられていない入力から重複行を効率よく取り除きます。
* [xsv](https://crates.io/crates/xsv) - スライス、インデックス作成、選択、検索、サンプリングなどができる高速CSVコマンドラインツール

### ユーティリティ

* [1History](https://github.com/localfirstapp/1History) - Firefox／Chrome／Safariの履歴を1つのSQLiteファイルにバックアップするコマンドラインインターフェース [![Build Status](https://github.com/localfirstapp/1History/actions/workflows/CI.yml/badge.svg)](https://github.com/localfirstapp/1History/actions/workflows/CI.yml)
* [aravpanwar/decayfmt](https://github.com/aravpanwar/decayfmt) [[decayfmt](https://crates.io/crates/decayfmt)] - 開くたびに少しずつ永久に破損し、ファイル単体からは復旧できないファイル形式。 [![CI](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml/badge.svg)](https://github.com/aravpanwar/decayfmt/actions/workflows/ci.yml)
* [artob/edky](https://github.com/artob/edky) [[edky](https://crates.io/crates/edky)] - Ed25519公開鍵をBase58、Base64、IPFS、iroh、libp2p、OpenSSHなどの各種エンコード形式間で変換するコマンドラインユーティリティ [![Build Status](https://github.com/artob/edky/actions/workflows/rust.yaml/badge.svg)](https://github.com/artob/edky/blob/master/.github/workflows/rust.yaml)
* [bloznelis/kbt](https://github.com/bloznelis/kbt) [[kbt](https://crates.io/crates/kbt)] - キーボードをテストするシンプルなTUIツール。
* [brycx/checkpwn](https://github.com/brycx/checkpwn) - 侵害されたアカウントやパスワードを簡単に確認できるHave I Been Pwned（HIBP）CLIユーティリティ
* [cartesiancs/vessel](https://github.com/cartesiancs/vessel) - 物理デバイスをオーケストレーションするC2（コマンド＆コントロール）ソフトウェア。
* [dcapal](https://github.com/dcapal/dcapal) - DcaPalは、ドルコスト平均法による投資でポートフォリオのバランスを保つための、無料・登録不要のオンラインツールです。
* [Eoin-McMahon/Blindfold](https://github.com/Eoin-McMahon/Blindfold) [[Blindfold](https://crates.io/crates/blindfold)] - `.gitignore`ファイルを手早く簡単に生成するシンプルなCLIツール。 [![build-badge](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml/badge.svg)]([https://github.com/nix-community/nurl/actions/workflows/ci.yml](https://github.com/Eoin-McMahon/blindfold/actions/workflows/rust.yml))
* [Epic Asset Manager](https://github.com/AchetaGames/Epic-Asset-Manager) - Epic Games StoreからUnreal Engineのインストール、購入済みアセット、プロジェクト、プラグイン、ゲームのダウンロードと管理を行う非公式クライアント。
* [evansmurithi/cloak](https://github.com/evansmurithi/cloak) - コマンドラインOTP（ワンタイムパスワード）認証アプリケーション。 ![CI](https://github.com/evansmurithi/cloak/workflows/CI/badge.svg) [![build badge](https://ci.appveyor.com/api/projects/status/9mlfpfru3ng4c689/branch/master?svg=true)](https://ci.appveyor.com/project/evansmurithi/cloak)
* [fcsonline/tmux-thumbs](https://github.com/fcsonline/tmux-thumbs) - tmux-fingersを超高速化した実装。vimium／vimperator風にtmuxでコピー＆ペーストできます。
* [fosk/emplace](https://codeberg.org/fosk/emplace) [[emplace](https://crates.io/crates/emplace)] - 複数マシン間でインストール済みパッケージを同期
* [gitlogue](https://github.com/unhappychoice/gitlogue) - ターミナルでGitコミット履歴を可視化するTUIスクリーンセーバー
* [guoxbin/dtool](https://github.com/guoxbin/dtool) - 変換、コーデック、ハッシュ、暗号化など、開発を支援する便利なコマンドラインツール集
* [IvanWng97/pixtuoid](https://github.com/IvanWng97/pixtuoid) [[pixtuoid](https://crates.io/crates/pixtuoid)] - Claude Codeのセッションを、リアルタイムで働く同僚としてアニメーション表示するターミナルのピクセルアートオフィス。 [![CI](https://img.shields.io/github/actions/workflow/status/IvanWng97/pixtuoid/ci.yml?branch=main)](https://github.com/IvanWng97/pixtuoid/actions/workflows/ci.yml)
* [ja7ad/hydra](https://github.com/ja7ad/hydra) - 並列接続とミラーソースに分割してファイルを取得する、オープンソースで高性能なダウンロードマネージャー兼アクセラレーター。動的レンジスティーリングとリアルタイム停滞回復に対応し、Windows、macOS、Linuxで動作。
* [lamco-admin/lamco-rdp-server](https://github.com/lamco-admin/lamco-rdp-server) - IronRDPを基盤とするWaylandネイティブのRDPサーバー。X11なしでGNOME、KDE、COSMIC、wlrootsなどのWayland Linuxデスクトップへリモートデスクトップ接続を提供。
* [Linus-Mussmaecher/rucola](https://github.com/Linus-Mussmaecher/rucola) - ターミナルベースのMarkdownノート管理ツール。 [![Crate](https://img.shields.io/crates/v/rucola-notes.svg?logo=rust)](https://crates.io/crates/rucola-notes) [![Build Status](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml/badge.svg)](https://github.com/Linus-Mussmaecher/rucola/actions/workflows/continuous-testing.yml)
* [matugen](https://github.com/InioX/matugen) - テンプレートを使い、画像や色からカラーパレットを生成。
* [Mobslide](https://github.com/thewh1teagle/mobslide) - スマートフォンをプレゼン用リモコンに変えるデスクトップアプリケーション。
* [MoonProxyHQ/moonproxy-desktop](https://github.com/MoonProxyHQ/moonproxy-desktop) - FRP（frpc）向けクロスプラットフォームGUIデスクトップクライアント。技術者でなくてもワンクリックでローカルサービスをインターネットに公開できます。 [![CI](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml/badge.svg)](https://github.com/MoonProxyHQ/moonproxy-desktop/actions/workflows/ci.yml)
* [mprocs](https://github.com/pvolok/mprocs) - 複数プロセスを実行するTUI
* [mrjackwills/oxker](https://github.com/mrjackwills/oxker) [[oxker](https://crates.io/crates/oxker)] - Dockerコンテナーを表示・制御するシンプルなTUI。
* [nix-community/nix-init](https://github.com/nix-community/nix-init) - URLからNixパッケージを生成。ハッシュの事前取得、依存関係推定、ライセンス検出などに対応。 [![build-badge](https://github.com/nix-community/nix-init/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-init/actions/workflows/ci.yml)
* [nix-community/nix-melt](https://github.com/nix-community/nix-melt) - ranger風のflake.lockビューアー [![build-badge](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nix-melt/actions/workflows/ci.yml)
* [nix-community/nurl](https://github.com/nix-community/nurl) [[nurl](https://crates.io/crates/nurl)] - リポジトリURLからNix fetcher呼び出しを生成 [![build-badge](https://github.com/nix-community/nurl/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/nurl/actions/workflows/ci.yml)
* [nomino](https://github.com/yaa110/nomino) - 開発者向け一括リネームユーティリティ
* [pastel](https://github.com/sharkdp/pastel) - 色の生成、混合、ランダム選択などを行うカラー支援ツール。
* [race604/clock-tui](https://github.com/race604/clock-tui) [[clock-tui](https://crates.io/crates/clock-tui)] - ローカル時計、タイマー、ストップウォッチを備えたターミナル時計アプリ。 [![Rust](https://github.com/race604/clock-tui/actions/workflows/rust.yml/badge.svg)](https://github.com/race604/clock-tui/actions/workflows/rust.yml)
* [raftario/licensor](https://github.com/raftario/licensor) - ライセンスを標準出力に書き出す [![GitHub Actions](https://github.com/raftario/licensor/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/raftario/licensor/actions/workflows/build.yml)
* [restsend/rustpbx](https://github.com/restsend/rustpbx) - register、presence、B2BUAに対応するソフトウェア定義SIPプロキシ。FreeSWITCH／FreePBXの代替製品。
* [rleeon/hoard](https://github.com/rleeon/hoard) - 自動検出、バージョン管理スナップショット、セルフホストストレージを備えたゲームセーブデータのバックアップ／同期システム。 [![CI](https://github.com/rleeon/hoard/actions/workflows/ci.yml/badge.svg)](https://github.com/rleeon/hoard/actions/workflows/ci.yml)
* [rust-parallel](https://github.com/aaronriekenberg/rust-parallel) - Tokioを使ってコマンドを並列実行する高速CLIアプリ。GNU Parallelやxargsに似たインターフェースです。 [![Crate](https://img.shields.io/crates/v/rust-parallel.svg?logo=rust)](https://crates.io/crates/rust-parallel) [![Build Status](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml/badge.svg)](https://github.com/aaronriekenberg/rust-parallel/actions/workflows/CI.yml)
* [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk) - TeamViewerやAnyDeskに代わる、使いやすいリモートデスクトップソフトウェア。
* [rustic-rs/rustic](https://github.com/rustic-rs/rustic) [[rustic-rs](https://crates.io/crates/rustic-rs)] - Rustを活用した高速で暗号化され、重複排除を行うバックアップ。 [![Version](https://img.shields.io/crates/v/rustic-rs.svg)](https://crates.io/crates/rustic-rs)
* [ruvnet/RuView](https://github.com/ruvnet/RuView) - Wi-Fi Channel State Information（CSI）と機械学習を使った、プライバシー保護型の人体姿勢推定システム。
* [sorairolake/qrtool](https://github.com/sorairolake/qrtool) [[qrtool](https://crates.io/crates/qrtool)] - QRコード画像をエンコード／デコードするユーティリティ。 [![CI](https://github.com/sorairolake/qrtool/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/qrtool/actions?query=workflow%3ACI)
* [sorairolake/randgen](https://github.com/sorairolake/randgen) [[randgen](https://crates.io/crates/randgen)] - 疑似乱数バイトを生成 [![CI](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/randgen/actions/workflows/CI.yaml)
* [splashboard](https://github.com/unhappychoice/splashboard) [[splashboard](https://crates.io/crates/splashboard)] - シェル起動時とディレクトリ変更時に表示する、ディレクトリごとのダッシュボード付きカスタマイズ可能なターミナルスプラッシュ [![CI](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/unhappychoice/splashboard/actions/workflows/ci.yml)
* [str4d/rage](https://github.com/str4d/rage) [[rage](https://crates.io/crates/rage)] - [age](https://github.com/FiloSottile/age)のRust実装。
* [suckit](https://github.com/Skallwar/suckit) - Webサイトのコンテンツを再帰的にたどってディスクにダウンロード。 [![Crate](https://img.shields.io/crates/v/suckit.svg?logo=rust)](https://crates.io/crates/suckit) [![Build Status](https://github.com/Skallwar/suckit/workflows/Build%20and%20test/badge.svg)](https://github.com/Skallwar/suckit/blob/master/.github/workflows/build_and_test.yml)
* [sundegan/JsonStudio](https://github.com/sundegan/JsonStudio) - 整形、編集、差分比較、変換、検証、ログ抽出を行うRust／Tauri製ローカルファーストのデスクトップJSONワークスペース。
* [Tabiew](https://github.com/shshemi/tabiew) - CSVファイルの表示とクエリに使う軽量TUIアプリ。
* [Tail Tales](https://github.com/davidmoreno/tailtales) - logfmtに対応したTUIログビューアー。 [![Crate](https://img.shields.io/crates/v/tailtales.svg?logo=rust)](https://crates.io/crates/tailtales)
* [tareqmy/gitwig](https://github.com/tareqmy/gitwig) [[CRATE](https://crates.io/crates/gitwig)] - マウス操作可能なGit TUI兼マルチリポジトリ・ダッシュボード。
* [television](https://github.com/alexpasmantier/television) - 超高速な汎用ファジーファインダーTUI ![GitHub branch check runs](https://img.shields.io/github/check-runs/alexpasmantier/television/main)
* [Thoth](https://github.com/anitnilay20/thoth) - WASMベースのプラグインに対応する、高性能で高機能なJSON／NDJSON表示・探索デスクトップアプリケーション。 [![CI](https://github.com/anitnilay20/thoth/workflows/CI/badge.svg)](https://github.com/anitnilay20/thoth/actions/workflows/ci.yml)
* [vamolessa/verco](https://git.sr.ht/~lessa/verco) [[verco](https://crates.io/crates/verco)] - キーボードショートカットを重視したGit／Hg向け代替TUIクライアント
* [vaultwarden](https://github.com/dani-garcia/vaultwarden#readme) [![Build](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml/badge.svg)](https://github.com/dani-garcia/vaultwarden/actions/workflows/build.yml) - Rustで記述されたBitwardenサーバーAPIの代替実装
* [veirt/weathr](https://github.com/Veirt/weathr) [[weathr](https://crates.io/crates/weathr)] - ASCIIアニメーション付きターミナル天気アプリ。 [![Release](https://github.com/Veirt/weathr/actions/workflows/release.yml/badge.svg)](https://github.com/Veirt/weathr/actions/workflows/release.yml)
* [Vibe](https://github.com/thewh1teagle/vibe) - あらゆるプラットフォームで、あらゆる言語の音声または動画を文字起こし。
* [warpdotdev/Warp](https://github.com/warpdotdev/Warp) - :heavy_dollar_sign: Warpは、個人とチームの生産性を高めるために作られた、非常に高速でモダンなGPUアクセラレーション対応ターミナルです。
* [Water-Run/treepp](https://github.com/Water-Run/treepp) - Rust製のネイティブWindows `tree`代替ツール。正常実行時の入出力はdiffレベルで互換性があり、必須の除外機能や`.gitignore`対応など多数の機能を備え、数倍高速。
* [wrestic](https://github.com/alvaro17f/wrestic) - resticのラッパー。
* [wthrr](https://github.com/ttytm/wthrr-the-weathercrab) - ターミナル向けの天気アプリ。 [![crates.io](https://img.shields.io/crates/v/wthrr?logo=rust)](https://crates.io/crates/wthrr)
* [YAKC](https://github.com/iammodev/YAKC) - Windows、macOS、Linux（X11／Wayland）に対応する、録画配信やプレゼン向けクロスプラットフォームのキー入力／マウスクリック表示ツール。 [![CI](https://github.com/iammodev/YAKC/actions/workflows/ci.yml/badge.svg)](https://github.com/iammodev/YAKC/actions/workflows/ci.yml)
* [YueMiyuki/Risuko](https://github.com/YueMiyuki/Risuko) - フル機能のダウンロードマネージャー。 [![Release-Badge](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml/badge.svg)](https://github.com/YueMiyuki/Risuko/actions/workflows/release.yml)
* [zerx-lab/FluxDown](https://github.com/zerx-lab/FluxDown) - Rust／Tokioエンジンを搭載したマルチプロトコル・ダウンロードマネージャー。HTTP／FTP、BitTorrent、eD2K、HLS、DASHに対応し、IDM風動的分割、ブラウザー拡張、aria2互換JSON-RPCエンドポイントを備えます。

### 動画

* [dertuxmalwieder/yaydl](https://github.com/dertuxmalwieder/yaydl) [[yaydl](https://crates.io/crates/yaydl)] - シンプルな動画ダウンローダー
* [gyroflow/gyroflow](https://github.com/gyroflow/gyroflow) - ジャイロスコープデータを使った動画安定化アプリケーション
* [harlanc/xiu](https://github.com/harlanc/xiu) - 高機能で安全なライブサーバー（RTMP／HTTP-FLV／HLS／リレー）。 [![crates.io](https://img.shields.io/crates/v/xiu.svg)](https://crates.io/crates/xiu)
* [Jorji49/streamtop](https://github.com/Jorji49/streamtop) [[streamtop](https://crates.io/crates/streamtop)] - wire probe、TR 101 290、SCTE-35メトリクスを備えた、ターミナル向けHLS／DASH／IPTVストリームモニター。
* [Michael-A-Kuykendall/muxide](https://github.com/Michael-A-Kuykendall/muxide) [[muxide](https://crates.io/crates/muxide)] - 外部依存なしの純Rust製MP4多重化ツール。エンコード済みフレームから規格準拠MP4を書き出します。
* [tonhowtf/omniget](https://github.com/tonhowtf/omniget) - 1,800以上のサイトから動画、講座、音楽、書籍をダウンロードするデスクトップアプリ。プレーヤー、リーダー、学習ライブラリを内蔵。 [![CI](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tonhowtf/omniget/actions/workflows/ci.yml)
* [vidmerger](https://github.com/TGotwig/vidmerger) - CLIで動画と音声のファイルを結合
* [vuiodev/vuio](https://github.com/vuiodev/vuio) - Linux、macOS、Windows、Dockerに対応するDLNAメディアサーバー
* [xiph/rav1e](https://github.com/xiph/rav1e) - 最速かつ最も安全なAV1エンコーダー。

### 仮想化

* [firecracker-microvm/firecracker](https://github.com/firecracker-microvm/firecracker) - コンテナワークロード向けの軽量仮想マシン。[Firecracker Microvm](https://firecracker-microvm.github.io/)
* [kata-containers/kata-containers](https://github.com/kata-containers/kata-containers) - コンテナーのような使い勝手と性能を保ちながら、VMのワークロード分離とセキュリティ上の利点を提供する軽量仮想マシン（VM）の実装。
* [superradcompany/microsandbox](https://github.com/superradcompany/microsandbox) - 分離されたコード実行を数ミリ秒で起動する軽量なmicroVMサンドボックスライブラリ。OCI互換コンテナーイメージとRust、Python、TypeScript SDKに対応。 [![GitHub release](https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases)](https://github.com/superradcompany/microsandbox/releases)
* [tailhook/vagga](https://github.com/tailhook/vagga) - デーモンを使わないコンテナー化ツール
* [youki-dev/youki](https://github.com/youki-dev/youki) - コンテナーランタイム [![build badge](https://github.com/youki-dev/youki/actions/workflows/basic.yml/badge.svg)](https://github.com/youki-dev/youki/actions)

### Web

* [0xMassi/webclaw](https://github.com/0xMassi/webclaw) - TLSフィンガープリンティングとMCPサーバーを備え、ブラウザー不要でLLM向けにWebコンテンツを抽出 [![CI](https://github.com/0xMassi/webclaw/actions/workflows/ci.yml/badge.svg)](https://github.com/0xMassi/webclaw/actions)
* [agrinman/tunnelto](https://github.com/agrinman/tunnelto) [[tunnelto](https://crates.io/crates/tunnelto)] - ローカルで動作するWebサーバーを公開URL経由で外部に公開できます。
* [cfal/tobaru](https://github.com/cfal/tobaru) - 許可リスト、IPとTLS SNI／ALPNのルールベースルーティング、iptables、ラウンドロビン転送（負荷分散）、ホットリロードに対応するポートフォワーダー。
* [hook0/hook0](https://github.com/hook0/hook0) - SaaS開発者が簡単にWebhookを送信できるオープンソースのWebhook-as-a-Serviceプラットフォーム
* [importantimport/hatsu](https://github.com/importantimport/hatsu) - 🩵 静的サイト向けのセルフホスト型・完全自動化ActivityPubブリッジ。 [![release](https://github.com/importantimport/hatsu/actions/workflows/release.yml/badge.svg)](https://github.com/importantimport/hatsu/actions/workflows/release.yml)
* [IndexFlowing/IndexFlow-core](https://github.com/IndexFlowing/IndexFlow-core) - サイトマップ、URL送信、検索エンジン登録を管理するセルフホスト型SEOインデックス基盤。
* [janreges/siteone-crawler](https://github.com/janreges/siteone-crawler) [[siteone-crawler](https://crates.io/crates/siteone-crawler)] - Webサイトクローラー、監査ツール、オフラインアーカイバー、CI/CD品質ゲートを備えたAI対応Markdownエクスポーターを兼ねるオールインワンツール。
   Webサイトのクロール、監査、オフライン保存、AI向けMarkdown出力をまとめて実行し、CI/CD品質ゲートを備えます。
  [![CI](https://github.com/janreges/siteone-crawler/workflows/CI/badge.svg)](https://github.com/janreges/siteone-crawler/actions)
* [konippi/servo-fetch](https://github.com/konippi/servo-fetch) - Webコンテンツを取得、描画し、Markdown、JSON、スクリーンショットとして抽出する自己完結型ブラウザーエンジン。ChromiumもAPIキーも不要。CLI、Python、MCPサーバーに対応。 [![CI](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml/badge.svg)](https://github.com/konippi/servo-fetch/actions/workflows/ci.yml)
* [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy) - Fediverse向けリンクアグリゲーター／Redditクローン [![Build Status](https://cloud.drone.io/api/badges/LemmyNet/lemmy/status.svg)](https://cloud.drone.io/LemmyNet/lemmy)
* [MASQ-Project/Node](https://github.com/MASQ-Project/Node) - MASQ NodeはTorやVPNを超える次世代技術として、世界中のユーザーが通常のインターネットコンテンツにアクセスできる分散型ノードメッシュネットワークを提供します。 [![build badge](https://github.com/MASQ-Project/Node/actions/workflows/ci-matrix.yml/badge.svg)](https://github.com/MASQ-Project/Node/actions)
* [Plume-org/Plume](https://github.com/Plume-org/Plume) - ActivityPub対応の分散型ブログアプリケーション
* [Redlib](https://github.com/redlib-org/redlib) - [Libreddit](https://github.com/libreddit/libreddit)を起源とする、Reddit向けのプライベートな代替フロントエンド
* [shouya/rss-funnel](https://github.com/shouya/rss-funnel) - モジュール式RSS処理パイプラインシステム。
* [SinTan1729/Chhoto URL](https://github.com/SinTan1729/chhoto-url) - 不要な機能のない、シンプルで非常に高速なセルフホスト型URL短縮サービス。[![release](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml/badge.svg)](https://github.com/SinTan1729/chhoto-url/actions/workflows/docker-release.yml)
* [Stoatchat](https://github.com/stoatchat/stoatchat) - モダンなWeb技術で構築された、ユーザー第一のチャットプラットフォーム。
* [zhom/donutbrowser](https://github.com/zhom/donutbrowser) - 無制限の隔離プロファイル、Chromium／Firefoxエンジン、フィンガープリント偽装、プロキシ／VPN対応、ローカルAPI／MCPサーバー、E2E暗号化クラウド同期を備えるオープンソースのアンチディテクトブラウザー。 [![GitHub release](https://img.shields.io/github/v/release/zhom/donutbrowser)](https://github.com/zhom/donutbrowser/releases)

### Webサーバー

* [cloudflare/pingora](https://github.com/cloudflare/pingora) - 高速で信頼性が高く、進化し続けられるネットワークサービスを構築するライブラリ。
* [emanuele-em/proxelar](https://github.com/emanuele-em/proxelar) - HTTP/1、HTTP/2、WebSocket向けのSSL／TLS機能を備えたMITMプロキシツールキット 🦀 [![Rust](https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg)](https://github.com/emanuele-em/proxelar/actions)
* [g3proxy](https://github.com/bytedance/g3) - プロキシチェーン、プロトコル検査、MITM傍受、ICAP適応、透過プロキシに対応するフォワードプロキシサーバー [![CodeCoverage](https://github.com/bytedance/g3/actions/workflows/codecov.yml/badge.svg)](https://github.com/bytedance/g3/actions)
* [hyperlane-dev/hyperlane](https://github.com/hyperlane-dev/hyperlane) [[hyperlane](https://crates.io/crates/hyperlane)] - Tokioを基盤とする、軽量で高性能なクロスプラットフォームRust製HTTPサーバーライブラリ。ミドルウェア、WebSocket、SSE、生TCPを標準サポート。 [![CI](https://github.com/hyperlane-dev/hyperlane/actions/workflows/rust.yml/badge.svg)](https://github.com/hyperlane-dev/hyperlane/actions)
* [Mini RPS](https://github.com/marcodpt/minirps) - HTTPS、CORS、静的ファイル配信、テンプレートエンジン（minijinja）を備えた小型リバースプロキシサーバー [crates.io](https://crates.io/crates/minirps)
* [mu-arch/skyfolder](https://github.com/mu-arch/skyfolder) - 面倒なく使える、美しくHTTP／BitTorrentに対応したサーバー。安全、GUI、美しい、高速。
* [mufeedvh/binserve](https://github.com/mufeedvh/binserve) - ルーティング、テンプレート、セキュリティを単一バイナリにまとめ、コード不要で設定できる超高速静的Webサーバー [![build badge](https://github.com/mufeedvh/binserve/actions/workflows/build.yml/badge.svg)](https://github.com/mufeedvh/binserve/actions)
* [orhun/rustypaste](https://github.com/orhun/rustypaste) - 最小構成のファイルアップロード／Pastebinサービス ![https://github.com/orhun/rustypaste/actions](https://img.shields.io/github/actions/workflow/status/orhun/rustypaste/ci.yml?branch=master&label=build)
* [plabayo/rama](https://github.com/plabayo/rama) - ネットワークパケットを移動・変換するモジュール式サービスフレームワーク。Webクライアント、サーバー、とりわけプロキシの構築に使われます。
* [ronanyeah/rust-hasura](https://github.com/ronanyeah/rust-hasura) - [Hasura](https://hasura.io/)のリモートスキーマとしてGraphQLサーバーを使う方法を示すデモ。 ![Rust](https://github.com/ronanyeah/rust-hasura/workflows/Rust/badge.svg?branch=master)
* [static-web-server](https://github.com/static-web-server/static-web-server) - 静的ファイル配信用の非常に高速な非同期Webサーバー ⚡ [![CI](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml/badge.svg)](https://github.com/static-web-server/static-web-server/actions/workflows/devel.yml?query=branch%3Amaster)
* [svenstaro/miniserve](https://github.com/svenstaro/miniserve) - バイナリを取得するだけでファイルをHTTP配信できる、小型で自己完結型のクロスプラットフォームCLIツール [![build badge](https://github.com/svenstaro/miniserve/workflows/CI/badge.svg?branch=master)](https://github.com/svenstaro/miniserve/actions)
* [thecoshman/http](https://github.com/thecoshman/http) - 「これらをホストしてください」フォルダーを手早く簡単に配信する基本的なHTTPサーバー
* [TheWaWaR/simple-http-server](https://github.com/TheWaWaR/simple-http-server) - シンプルな静的HTTPサーバー
* [vetis-server/vetis](https://github.com/vetis-server/vetis) - モダンなRustアプリ向けに構築された、非常に高速でミニマルなHTTPサーバー。仮想ホスト、SNI、静的コンテンツ、リバースプロキシ、HTTP 1／2／3、Tokio／Smol非同期ランタイムに対応。
* [vproxy/0x676e67](https://github.com/0x676e67/vproxy) - 高速な非同期Rust HTTP／SOCKS5プロキシ

### ワークフロー自動化

* [cowork-forge](https://github.com/sopaco/cowork-forge) - アイデアを本番対応ソフトウェアへ変換する7段階パイプラインで専門エージェントを編成する、AIネイティブなマルチエージェントプラットフォーム。 [![release](https://img.shields.io/github/actions/workflow/status/sopaco/cowork-forge/rust.yml?label=Build)](https://github.com/sopaco/cowork-forge/actions/workflows/release.yml)
* [dali-benothmen/woml](https://github.com/dali-benothmen/woml) - WOML（Workflow Orchestration Markup Language）はRust実行コアを備えたワークフロー自動化用マークアップ言語です。HTMLのように読みやすく、コードのようにバージョン管理でき、JavaScriptのように強力。ビジュアルビルダーのスパゲッティも、ステップでできることの上限もありません。 [![release](https://github.com/dali-benothmen/woml/actions/workflows/release.yml/badge.svg)](https://github.com/dali-benothmen/woml/actions/workflows/release.yml)
* [SouravRoy-ETL/duckle](https://github.com/SouravRoy-ETL/duckle) - DuckDB上で完全に動作する、ビジュアル優先のオープンソースデータスタジオ（ETL／ELT）。ソース、変換、シンクをキャンバスに配置するとプレーンなDuckDB SQLへコンパイルされ、300以上のコネクターとMCPサーバーを内蔵。 [![release](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml/badge.svg)](https://github.com/SouravRoy-ETL/duckle/actions/workflows/release.yml)

## 開発ツール

* [7df-lab/devo](https://github.com/7df-lab/devo) - 単一バイナリで動作する、軽量でモデル中立なコーディングエージェント。高速でトークン効率が高く、柔軟にカスタマイズできます。 [![CI](https://github.com/7df-lab/devo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/7df-lab/devo/actions/workflows/ci.yml)
* [aaif-goose/goose](https://github.com/aaif-goose/goose) - エンジニアリングタスクを自動化するオープンソースのローカルAIエージェント。
* [agavra/tuicr](https://github.com/agavra/tuicr) [[tuicr](https://crates.io/crates/tuicr)] - Vimキーバインドを備えたコードレビューTUI。継続的な差分ビューアー、PR風コメント、GitHub／GitLab／クリップボードへのエクスポートに対応し、git、jj、Mercurialをサポート。 [![Crates.io](https://img.shields.io/crates/v/tuicr)](https://crates.io/crates/tuicr)
* [armgabrielyan/deadbranch](https://github.com/armgabrielyan/deadbranch) [[deadbranch](https://crates.io/crates/deadbranch)] - 古くなったGitブランチを安全に整理 [![CI](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/armgabrielyan/deadbranch/actions/workflows/ci.yml)
* [astral-sh/uv](https://github.com/astral-sh/uv) [[uv](https://crates.io/crates/uv)] - Rustで記述された非常に高速なPythonパッケージ／プロジェクトマネージャー。 [![CI](https://github.com/astral-sh/uv/workflows/CI/badge.svg)](https://github.com/astral-sh/uv/actions)
* [ATAC](https://github.com/Julien-cpsn/ATAC) - Rust製の高機能TUI APIクライアント。ATACは無料、オープンソース、オフライン対応でアカウント不要。
* [bacon](https://github.com/Canop/bacon) - cargo-watchに似たバックグラウンドRustコードチェッカー
* [biome](https://github.com/biomejs/biome) - Webプロジェクトの保守機能を提供するツールチェーン。BiomeはCLIとLSPから使えるフォーマッターとリンターを備えます。
* [cachix/devenv](https://github.com/cachix/devenv) - Nixを使った高速で宣言的、再現可能かつ合成可能な開発環境 [![CI](https://github.com/cachix/devenv/actions/workflows/release.yml/badge.svg)](https://github.com/cachix/devenv/actions/workflows/release.yml)
* [claudectl](https://github.com/mercurialsolo/claudectl) [[claudectl](https://crates.io/crates/claudectl)] - ローカルLLM（Ollama／llama.cpp／vLLM）を頭脳とするClaude Code自動操縦ツール。ツール呼び出しの自動承認／拒否を学習し、複数セッションの調整、健全性監視、支出制御に対応。 [![CI](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml/badge.svg)](https://github.com/mercurialsolo/claudectl/actions/workflows/ci.yml)
* [clippy](https://crates.io/crates/clippy) - Rust用Lint
* [clog-tool/clog-cli](https://github.com/clog-tool/clog-cli) - Gitメタデータから変更履歴を生成（[conventional changelog](https://blog.thoughtram.io/announcements/tools/2014/09/18/announcing-clog-a-conventional-changelog-generator-for-the-rest-of-us.html)）
* [cloudflare/foundations](https://github.com/cloudflare/foundations) - Foundationsは、分散型の本番品質システムに向けてプログラムをスケールさせるために設計されたモジュール式Rustライブラリです。
* [cordx56/rustowl](https://github.com/cordx56/rustowl) [[rustowl](https://crates.io/crates/rustowl)] - Rustの所有権とライフタイムを可視化 [![CI](https://github.com/cordx56/rustowl/actions/workflows/checks.yml/badge.svg?branch=main)](https://github.com/cordx56/rustowl/actions/workflows/checks.yml)
* [create-rust-app](https://github.com/Wulf/create-rust-app) - 1つのコマンドでモダンなRust + React Webアプリを構築。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/create-rust-app)
* [dan-t/rusty-tags](https://github.com/dan-t/rusty-tags) - Cargoプロジェクトとすべての依存関係向けにctags／etagsを生成
* [datanymizer/datanymizer](https://github.com/datanymizer/datanymizer) - 柔軟なルールを備えた強力なデータベース匿名化ツール [![build badge](https://github.com/datanymizer/datanymizer/workflows/CI/badge.svg?branch=main)](https://github.com/datanymizer/datanymizer/actions?query=workflow%3ACI+branch%3Amain)
* [delta](https://crates.io/crates/git-delta) - Gitとdiff出力向けの構文ハイライター[![build badge](https://github.com/dandavison/delta/actions/workflows/ci.yml/badge.svg)](https://github.com/dandavison/delta//actions)
* [dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) - `.env`ファイル用リンター [![build badge](https://github.com/dotenv-linter/dotenv-linter/actions/workflows/ci.yml/badge.svg)](https://github.com/dotenv-linter/dotenv-linter/actions?query=workflow%3ACI+branch%3Amaster)
* [enroute-sh/enroute](https://github.com/enroute-sh/enroute) - オブジェクトストレージ上でプログラム可能なGit基盤
* [envio](https://github.com/humblepenguinn/envio) - 環境変数を管理するモダンで安全なCLIツール [![build badge](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml/badge.svg?branch=main)](https://github.com/humblepenguinn/envio/actions/workflows/CICD.yml)
* [Feel-ix-343/markdown-oxide](https://github.com/Feel-ix-343/markdown-oxide) - Obsidian風Wikiリンク、バックリンク、デイリーノートに対応し、Neovim、VSCode、Zed、Helix、Kakouneで使えるPKM向けMarkdown Language Server
* [FerrLabs/FerrFlow](https://github.com/FerrLabs/FerrFlow) [[ferrflow](https://crates.io/crates/ferrflow)] - Conventional Commitsに基づき、セマンティックバージョニング、変更履歴、タグ付きリリースを自動化。モノレポと16種類のバージョンファイル形式に対応。 [![build badge](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/FerrLabs/FerrFlow/actions/workflows/ci.yml)
* [firelock-ai/kin](https://github.com/firelock-ai/kin) - 人とAIエージェント向けのグラフネイティブなコードリポジトリ。変更前にコード変更の影響範囲を把握できます。
* [Flox](https://github.com/flox/flox) - Floxは仮想環境とパッケージマネージャーを一体化したツールです。
* [forgecode](https://github.com/tailcallhq/forgecode) - コード生成と編集を行うターミナルベースのAIペアプログラマー。 [![Website](https://img.shields.io/badge/website-forgecode.dev-blue)](https://forgecode.dev/)
* [frolic](https://github.com/frolicflow/Frolic) - 顧客向けダッシュボードを10倍速く構築するAPIレイヤー
* [fw](https://github.com/brocode/fw) - ワークスペースの生産性向上ツール [![Rust](https://github.com/brocode/fw/actions/workflows/rust.yml/badge.svg)](https://github.com/brocode/fw/actions/workflows/rust.yml)
* [fzf-make](https://github.com/kyu08/fzf-make) [[fzf-make](https://crates.io/crates/fzf-make)] - プレビューウィンドウ付きファジーファインダーでmakeターゲットを実行するコマンドラインツール。 [![crates.io](https://img.shields.io/crates/v/fzf-make?style=flatflat-square)](https://crates.io/crates/fzf-make)
* [geiger](https://github.com/geiger-rs/cargo-geiger) - クレートとすべての依存関係におけるunsafeコードの使用統計を一覧表示 [![Build Status](https://dev.azure.com/cargo-geiger/cargo-geiger/_apis/build/status/geiger-rs.cargo-geiger?branchName=master)](https://dev.azure.com/cargo-geiger/cargo-geiger/_build/latest?definitionId=1&branchName=master)
* [git-cliff](https://github.com/orhun/git-cliff) - Conventional Commit仕様に準拠した、高度にカスタマイズ可能な変更履歴生成ツール ![https://github.com/orhun/git-cliff/actions](https://img.shields.io/github/actions/workflow/status/orhun/git-cliff/ci.yml?branch=main&label=build)
* [git-journal](https://github.com/saschagrunert/git-journal/) - Gitコミットメッセージと変更履歴の生成フレームワーク
* [git-time-machine](https://github.com/dinakars777/git-time-machine) - Gitの操作ミスを取り消すためのリフログ可視化TUI [![crate](https://img.shields.io/crates/v/git-time-machine.svg)](https://crates.io/crates/git-time-machine) [![build badge](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml/badge.svg)](https://github.com/dinakars777/git-time-machine/actions/workflows/rust.yml)
* [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) [[gix](https://crates.io/crates/gix)] - clone、fetch、status、diff、commit、config、refsなどに対応する高性能な基盤クレートとCLIツールを備えた純Rust製Git実装。 [![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
* [hot-lib-reloader](https://github.com/rksm/hot-lib-reloader-rs) - Rustコードをホットリロード [![build badge](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/rksm/hot-lib-reloader-rs/actions/workflows/ci.yml)
* [intelli-shell](https://github.com/lasantosr/intelli-shell) - プレースホルダー付きでコマンドをブックマークし、いつでも検索／自動補完 [![crate](https://img.shields.io/crates/v/intelli-shell.svg)](https://crates.io/crates/intelli-shell) [![build badge](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml/badge.svg)](https://github.com/lasantosr/intelli-shell/actions/workflows/release.yml)
* [j178/prek](https://github.com/j178/prek) - Rustで記述された、高速で依存関係不要のpre-commitドロップイン代替ツール。
* [jj-vcs/jj](https://github.com/jj-vcs/jj) - 整理されたCLI、優れた競合処理、自動リベースを備えたGit互換バージョン管理システム [![Release](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
* [just](https://github.com/casey/just) - プロジェクト固有のタスクに便利なコマンドランナー
* [mask](https://github.com/jacobdeichert/mask) - シンプルなMarkdownファイルで定義するCLIタスクランナー [![build badge](https://github.com/jacobdeichert/mask/workflows/CI/badge.svg?branch=master)](https://github.com/jacobdeichert/mask/actions?query=workflow%3ACI)
* [mise](https://github.com/jdx/mise) [[mise](https://crates.io/crates/mise)] - 多言語ツールのバージョン管理とタスク実行を行うツール。asdfのドロップイン代替で、より高速。 [![build badge](https://github.com/jdx/mise/actions/workflows/test.yml/badge.svg)](https://github.com/jdx/mise/actions/workflows/test.yml)
* [Module Linker](https://github.com/fiatjaf/module-linker) - GitHub上の`mod`、`use`、`extern crate`文の参照に`<a>`リンクを追加する拡張機能
* [Muvon/octocode](https://github.com/Muvon/octocode) [[octocode](https://crates.io/crates/octocode)] - GraphRAGナレッジグラフとMCPサーバーを備えたセマンティックコードインデクサー。tree-sitter AST解析、ast-grep構造検索、LanceDBベクトルストレージ、コードシグネチャ表示に対応。Claude／Cursor／WindsurfなどのAIアシスタント向けCLI／MCPモード。 [![CI](https://github.com/Muvon/octocode/actions/workflows/ci.yml/badge.svg)](https://github.com/Muvon/octocode/actions/workflows/ci.yml)
* [persiyanov/herdr-reviewr](https://github.com/persiyanov/herdr-reviewr) - コーディングエージェントの差分を確認し、Claude Code、Codex、OpenCode、Piへ行コメントを返すターミナルペイン。 [![CI](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml/badge.svg)](https://github.com/persiyanov/herdr-reviewr/actions/workflows/ci.yml)
* [prefix-dev/pixi](https://github.com/prefix-dev/pixi) [[pixi](https://crates.io/crates/pixi)] - condaエコシステムを基盤とする、多言語プロジェクト向けの高速なパッケージ管理／ワークフローツール。
* [ptags](https://github.com/dalance/ptags) - Gitリポジトリ向けの並列universal-ctagsラッパー
* [Racer](https://github.com/racer-rust/racer) - Rustのコード補完
* [reflex-search/reflex](https://github.com/reflex-search/reflex) [[reflex-search](https://crates.io/crates/reflex-search)] - AIコーディングエージェント向けのローカルファースト全文コード検索エンジン。トライグラム索引、100ミリ秒未満のクエリ、MCPサーバーモード、tree-sitter経由の18言語に対応。
* [Rust Search Extension](https://github.com/huhu/rust-search-extension) - アドレスバー（オムニボックス）からクレートやドキュメントを検索する便利なブラウザー拡張機能。 [![Build Status](https://github.com/huhu/rust-search-extension/workflows/build/badge.svg?branch=master)](https://github.com/huhu/rust-search-extension/actions)
* [Rustup](https://github.com/rust-lang/rustup) - Rustツールチェーンインストーラー [![build badge](https://github.com/rust-lang/rustup/actions/workflows/ci.yaml/badge.svg)](https://github.com/rust-lang/rustup/actions)
* [scriptisto](https://github.com/igor-petruk/scriptisto) - コンパイル言語で単一ファイルのスクリプトを記述できる、言語非依存の「shebangインタープリター」。 [![Build Status](https://cloud.drone.io/api/badges/igor-petruk/scriptisto/status.svg)](https://cloud.drone.io/igor-petruk/scriptisto)
* [sstraus/tuicommander](https://github.com/sstraus/tuicommander) - 多数のAIコーディングエージェントをそれぞれ専用Git worktreeで並列実行するデスクトップワークスペース。エージェント状態検知、差分、PR管理、MCPプロキシハブを備えます。 [![CI](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sstraus/tuicommander/actions/workflows/ci.yml)
* [Terrain](https://github.com/sopaco/terrain) - コードベースをエージェント対応にするAIネイティブなエンジニアリング環境管理ツール。
* [typos](https://github.com/crate-ci/typos) [[typos-cli](https://crates.io/crates/typos-cli)] - ソースコードのスペルチェッカー
* [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus) - Vite、Vitest、Oxlint、Rolldownなどを単一のRust製CLI（`vp`）に統合したWeb開発ツールチェーン
* [VT Code](https://crates.io/crates/vtcode) - tree-sitterとast-grepによる深いセマンティックコード理解とモダンなTUIを組み合わせたターミナルコーディングエージェント。
* [Wilfred/difftastic](https://github.com/Wilfred/difftastic) [[difftastic](https://crates.io/crates/difftastic)] - 30以上のプログラミング言語に対応し、構文を理解する構造的diffツール
* [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) [[lean-ctx](https://crates.io/crates/lean-ctx)] - AIコーディングエージェント向けコンテキストランタイム。MCPサーバーとシェルフックにより、ツール／ターミナル出力を圧縮してLLMトークンを削減。tree-sitter解析とセッションキャッシュを備えます。 [![CI](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml/badge.svg)](https://github.com/yvgude/lean-ctx/actions/workflows/ci.yml)

### ビルドシステム

* [better-fullstack](https://github.com/Marve10s/Better-Fullstack) - Rust（Axum、Actix Web、Leptos、Dioxus、SeaORM、SQLx、tonic、async-graphql）に加え、TypeScript、Go、Pythonをサポートするフルスタックのエンドツーエンド雛形生成ツール。本人またはAIエージェントがすぐ使えるコードを生成します。
* [Cargo](https://crates.io/) - Rustのパッケージマネージャー
  * [cargo-all-features](https://github.com/frewsxcv/cargo-all-features) - あらゆる機能の組み合わせに対するテストやビルドなどを簡素化する、設定可能なサブコマンド [![CI](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml/badge.svg)](https://github.com/frewsxcv/cargo-all-features/actions/workflows/ci.yml)
  * [cargo-benchcmp](https://crates.io/crates/cargo-benchcmp) - マイクロベンチマークを比較するユーティリティ
  * [cargo-bins/cargo-binstall](https://github.com/cargo-bins/cargo-binstall) [[cargo-binstall](https://crates.io/crates/cargo-binstall)] - ソースからコンパイルせず、ビルド済み成果物を取得するRustクレート向け高速バイナリーインストーラー [![CI](https://github.com/cargo-bins/cargo-binstall/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-bins/cargo-binstall/actions)
  * [cargo-bitbake](https://crates.io/crates/cargo-bitbake) - meta-rustのクラスを使ってBitBakeレシピを生成できるCargo拡張機能
  * [cargo-cache](https://crates.io/crates/cargo-cache) - Cargoキャッシュ（`~/.cargo/`／`${CARGO_HOME}`）を調査、管理、クリーンアップし、サイズなどを表示 [![Build Status](https://github.com/matthiaskrgr/cargo-cache/workflows/ci/badge.svg?branch=master)](https://github.com/matthiaskrgr/cargo-cache/actions)
  * [cargo-check](https://crates.io/crates/cargo-check) - 正確性チェックだけが必要な場合にコンパイルを高速化できる、`cargo rustc -- -Zno-trans`のラッパー
  * [cargo-commander](https://crates.io/crates/cargo-commander) - `package.json`のscriptsセクションに似たCLIコマンドを実行するCargoサブコマンド [![Build and test](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml/badge.svg)](https://github.com/simonhyll/cargo-commander/actions/workflows/build.yml)
  * [cargo-count](https://crates.io/crates/cargo-count) - unsafe統計を含むCargoプロジェクトのソースコード行数や詳細を一覧表示
  * [cargo-deb](https://crates.io/crates/cargo-deb) - バイナリDebianパッケージを生成
  * [cargo-depgraph](https://crates.io/crates/cargo-depgraph) - cargo metadataとGraphvizを使ってCargoプロジェクトの依存関係グラフを作成
  * [cargo-do](https://crates.io/crates/cargo-do) - 複数のCargoコマンドを連続実行
  * [cargo-ebuild](https://crates.io/crates/cargo-ebuild) - ツリー内のeclassを使ってebuildを生成するCargo拡張機能
  * [cargo-edit](https://crates.io/crates/cargo-edit) - コマンドラインからCargo.tomlを読み書きし、依存関係の追加と一覧表示を行う
  * [cargo-generate](https://github.com/cargo-generate/cargo-generate) - 既存のGitリポジトリをテンプレートとしてRustプロジェクトを生成
  * [cargo-info](https://crates.io/crates/cargo-info) - コマンドラインからcrates.ioに問い合わせてクレートの詳細を取得
  * [cargo-license](https://crates.io/crates/cargo-license) - すべての依存関係のライセンスをすばやく確認するCargoサブコマンド
  * [cargo-limit](https://crates.io/crates/cargo-limit) - ノイズを減らしたCargo。エラーが解消されるまで警告を省略し、Neovim統合などを提供。 [![build badge](https://github.com/cargo-limit/cargo-limit/actions/workflows/ci.yml/badge.svg)](https://github.com/cargo-limit/cargo-limit/actions)
  * [cargo-machete](https://github.com/bnjbvr/cargo-machete) [[cargo-machete](https://crates.io/crates/cargo-machete)] - Cargo.toml内の未使用依存関係を検出するシンプルなツール。
  * [cargo-make](https://crates.io/crates/cargo-make) - タスクランナー兼ビルドツール。 [![build badge](https://github.com/sagiegurari/cargo-make/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/cargo-make/actions)
  * [cargo-modules](https://crates.io/crates/cargo-modules) - クレートのモジュール構成をツリー形式で表示するCargoプラグイン。
  * [cargo-multi](https://crates.io/crates/cargo-multi) - 複数のクレートに対して指定したCargoコマンドを実行
  * [cargo-outdated](https://crates.io/crates/cargo-outdated) - Rust依存関係の新バージョン公開や更新遅れを表示
  * [cargo-rdme](https://github.com/orium/cargo-rdme) [[cargo-rdme](https://crates.io/crates/cargo-rdme)] - クレートのドキュメントからREADMEを作成するCargoサブコマンド。 [![build badge](https://github.com/orium/cargo-rdme/workflows/CI/badge.svg)](https://github.com/orium/cargo-rdme/actions?query=workflow%3ACI)
  * [cargo-release](https://crates.io/crates/cargo-release) - Git管理されたCargoプロジェクトをビルド、タグ付け、公開、ドキュメント生成、プッシュしてリリース [![Rust](https://github.com/crate-ci/cargo-release/actions/workflows/ci.yml/badge.svg)](https://github.com/crate-ci/cargo-release/actions/workflows/rust.yml)
  * [cargo-script](https://crates.io/crates/cargo-script) - Cargoのパッケージエコシステムを利用するRust「スクリプト」を手軽に実行
  * [cargo-udeps](https://github.com/est31/cargo-udeps) [[cargo-udeps](https://crates.io/crates/cargo-udeps)] - 未使用の依存関係を検索
  * [cargo-update](https://crates.io/crates/cargo-update) - インストール済み実行ファイルの更新を確認・適用するCargoサブコマンド
  * [cargo-watch](https://crates.io/crates/cargo-watch) - ソース変更時にプロジェクトをコンパイルするCargoユーティリティ
  * [dtolnay/cargo-expand](https://github.com/dtolnay/cargo-expand) - ソースコード内のマクロを展開
* CMake
  * [Devolutions/CMakeRust](https://github.com/Devolutions/CMakeRust) - RustライブラリをCMakeプロジェクトへ統合するのに便利なツール
  * [SiegeLord/RustCMake](https://github.com/SiegeLord/RustCMake) - RustでCMakeを使用する例を示すプロジェクト
* [facebook/buck2](https://github.com/facebook/buck2) - [Buck2](https://buck2.build/)はRustで構築された大規模ビルドツールです。
* [Fleet](https://github.com/suptejas/fleet) [[fleet-rs](https://crates.io/crates/fleet-rs)] - Rust向けの圧倒的に高速なビルドツール。
* GitHub actions
  * [icepuma/rust-action](https://github.com/icepuma/rust-action) - Rust用GitHub Action
* [Nix](https://nixos.org/)
  * [nix-community/fenix](https://github.com/nix-community/fenix) - Nix向けRustツールチェーンとrust-analyzer nightly [![build-badge](https://github.com/nix-community/fenix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-community/fenix/actions/workflows/ci.yml)
* [pantsbuild/pants](https://github.com/pantsbuild/pants) - [Pants](https://www.pantsbuild.org/)はRustで構築され、あらゆる規模のコードベースに対応する高速でスケーラブル、使いやすいビルドシステムです。
* [rolldown/rolldown](https://github.com/rolldown/rolldown) - Viteの将来のバンドラーを目指すRust製JavaScript／TypeScriptバンドラー
* [rui314/mold](https://github.com/rui314/mold) - Linux、macOS、Windows（ELF、Mach-O、PE）対応のモダンで高速なリンカー
* [tracemachina/nativelink](https://github.com/TraceMachina/nativelink) - [NativeLink](https://nativelink.com)は、[Buck2](https://buck2.build/)、[Bazel](https://bazel.build/)、[Pants](https://www.pantsbuild.org/)などのクライアントビルドシステム向けにRustで記述されたリモート実行バックエンドです。 [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TraceMachina/nativelink/badge)](https://securityscorecards.dev/viewer/?uri=github.com/TraceMachina/nativelink) [![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8050/badge)](https://www.bestpractices.dev/projects/8050)
* [vercel/turborepo](https://github.com/vercel/turborepo) - Rust製のJavaScript／TypeScriptモノレポ向け高性能ビルドシステム。増分計算、リモートキャッシュ、並列タスク実行を備えます。
* [wislertt/zerv](https://github.com/wislertt/zerv) [[zerv](https://crates.io/crates/zerv)] - あらゆるGit状態から各ビルドのバージョンを生成する動的バージョニングツール。SemVer、PEP 440、CalVerで出力。 [![CI](https://github.com/wislertt/zerv/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/wislertt/zerv/actions/workflows/cd.yml)

### デバッグ

* GDB
  * [gdbgui](https://github.com/cs01/gdbgui) - C、C++、Rust、GoをデバッグするGDB用ブラウザーベースのフロントエンド。
* [godzie44/BugStalker](https://github.com/godzie44/BugStalker) - Linux x86-64向けモダンデバッガー。Rustプログラム向けにRustで記述。
* [kxxt/tracexec](https://github.com/kxxt/tracexec) [[tracexec](https://crates.io/crates/tracexec)] - execve{,at}と実行前の挙動を追跡し、デバッガーを起動するツール。
* LLDB
  * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - [Visual Studio Code](https://code.visualstudio.com/)向けLLDB拡張機能。

### デプロイ

* Docker
  * [emk/rust-musl-builder](https://github.com/emk/rust-musl-builder) - musl-libcとmusl-gcc、および便利なCライブラリの静的版を使ってRust静的バイナリをコンパイルするDockerイメージ
  * [kpcyrd/mini-docker-rust](https://github.com/kpcyrd/mini-docker-rust) - 非常に小さなRust用Dockerイメージの例示プロジェクト
  * [lenra-io/dofigen](https://github.com/lenra-io/dofigen) [[dofigen](https://crates.io/crates/dofigen/)] - 簡略化したYAML／JSON記述からDockerfileを生成 ![Rust CI](https://github.com/lenra-io/dofigen/actions/workflows/build_ci.yml/badge.svg)
  * [liuchong/docker-rustup](https://github.com/liuchong/docker-rustup) - 複数バージョンとmuslツールを含むRust Dockerイメージ
  * [LukeMathWalker/cargo-chef](https://github.com/LukeMathWalker/cargo-chef) - Dockerビルド間でリモート依存関係のコンパイル結果をキャッシュするツールと事前ビルド済みイメージ。
  * [moghtech/komodo](https://github.com/moghtech/komodo) - Web UIとAPIを備え、サーバー数の制限なく多数のサーバーへソフトウェアをビルド／デプロイするツール
  * [rust-cross/rust-musl-cross](https://github.com/rust-cross/rust-musl-cross) - musl-crossを使ってRust静的バイナリをコンパイルするDockerイメージ [![Build](https://github.com/rust-cross/rust-musl-cross/workflows/Build/badge.svg)](https://github.com/rust-cross/rust-musl-cross/actions?query=workflow%3ABuild)
  * [rust-lang/docker-rust](https://github.com/rust-lang/docker-rust) - 公式Rust Dockerイメージ
  * [Stavrospanakakis/is_ready](https://github.com/Stavrospanakakis/is_ready) - 複数のサービスが利用可能になるまで待機 ![Build](https://github.com/Stavrospanakakis/is_ready/actions/workflows/release.yml/badge.svg)
* Heroku
  * [emk/heroku-buildpack-rust](https://github.com/emk/heroku-buildpack-rust) - Heroku上のRustアプリケーション向けビルドパック
* [release-plz](https://github.com/release-plz/release-plz) [[release-plz](https://crates.io/crates/release-plz)] - 変更履歴生成とsemverチェックを備え、CIからクレートをリリース。 [![build badge](https://github.com/release-plz/release-plz/workflows/CI/badge.svg)](https://github.com/release-plz/release-plz/actions)

### 組み込み

[Rust Embedded](https://rust-embedded.org/)は、リソース制約のある環境や従来とは異なるプラットフォームでRustを使う際のエンドツーエンド体験の向上に取り組んでいます。厳選された、さらに充実したRust組み込みリソース一覧は[awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust)を参照してください。

* Arduino
  * [avr-rust/ruduino](https://github.com/avr-rust/ruduino) - Arduino Uno向けの再利用可能なコンポーネント。
* Cross compiling
  * [japaric/rust-cross](https://github.com/japaric/rust-cross) - Rustプログラムのクロスコンパイルに必要な情報をすべて提供
  * [japaric/xargo](https://github.com/japaric/xargo) - RustプログラムをARM Cortex-Mなどのカスタムベアメタルターゲットへ手軽にクロスコンパイル
* Development Tools
  * [matheuswhite/scope-rs](https://github.com/matheuswhite/scope-rs) [[scope-monitor](https://crates.io/crates/scope-monitor)] - 16進数／@タグ入力マクロ、検索、セッション録画、Luaプラグインを備えるクロスプラットフォームのシリアルポート／RTT監視TUI。 [![Build Status](https://github.com/matheuswhite/scope-rs/actions/workflows/build.yml/badge.svg)](https://github.com/matheuswhite/scope-rs/actions)
  * [probe-rs/probe-rs](https://github.com/probe-rs/probe-rs) [[probe-rs-tools](https://crates.io/crates/probe-rs-tools)] - ARM／RISC-Vマイクロコントローラーの書き込みとデバッグを行う組み込みデバッグツールキット。
  * [Vaishnav-Sabari-Girish/ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - プロッターTUIを備えた最小構成のシリアルモニター。
* Espressif
  * [esp-rs](https://github.com/esp-rs) - Espressif Systems製SoC／モジュールでRust言語を使えるようにするコミュニティプロジェクト群を提供。
* Firmware
  * [oreboot/oreboot](https://github.com/oreboot/oreboot) - orebootはcorebootのフォークで、Cを取り除きRustで記述。
* nRF
  * [nrf-rs/nrf-hal](https://github.com/nrf-rs/nrf-hal) - nRFデバイスファミリー向けRust HAL

### FFI

[Foreign Function Interface](https://doc.rust-lang.org/book/first-edition/ffi.html)、[The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/)（Rustで記述されたコードを他言語から使う例集）、[Rustで記述されたFFIの例](https://github.com/alexcrichton/rust-ffi-examples)も参照してください。

* C
  * [gtk-rs/gir](https://github.com/gtk-rs/gir) - GObjectベースのCライブラリから安全なRustバインディングを生成するコードジェネレーター。
  * [mozilla/cbindgen](https://github.com/mozilla/cbindgen) - RustソースファイルからCヘッダーファイルを生成。GeckoのWebRenderで使用。
  * [Sean1708/rusty-cheddar](https://github.com/Sean1708/rusty-cheddar) - RustソースファイルからCヘッダーファイルを生成
  * [trevyn/librclone](https://github.com/trevyn/librclone) [[librclone](https://crates.io/crates/librclone)] - librclone Cライブラリ向けRustバインディング。
* C#
  * [csbindgen](https://github.com/Cysharp/csbindgen) - Rustソースファイル向けC#バインディングを生成
* C++
  * [dtolnay/cxx](https://github.com/dtolnay/cxx) - RustとC++間の安全な相互運用 [![build badge](https://img.shields.io/badge/github-dtolnay/cxx-8da0cb?style=for-the-badge&labelColor=555555&logo=github)](https://github.com/dtolnay/cxx)
  * [rust-cpp](https://crates.io/crates/cpp) - C++コードをRustに直接埋め込む。 [![Build status](https://ci.appveyor.com/api/projects/status/uu76vmcrwnjqra0u/branch/master?svg=true)](https://ci.appveyor.com/project/mystor/rust-cpp/branch/master)
  * [rust-lang/rust-bindgen](https://github.com/rust-lang/rust-bindgen) - Rustバインディングジェネレーター
* Erlang
  * [rusterlium/rustler](https://github.com/rusterlium/rustler) - Erlang NIF関数を作成する安全なRustブリッジ
* Java
  * [bennettanderson/rjni](https://github.com/benanders/rjni) - RustからJavaを利用
  * [drrb/java-rust-example](https://github.com/drrb/java-rust-example) - JavaからRustを利用
  * [j4rs](https://crates.io/crates/j4rs) - RustからJavaを利用
  * [jni](https://crates.io/crates/jni) - JavaからRustを利用
  * [jni-sys](https://crates.io/crates/jni-sys) - jni.hに対応するRust定義
  * [rucaja](https://crates.io/crates/rucaja) - RustからJavaを利用
* Lua
  * [jcmoyer/rust-lua53](https://github.com/jcmoyer/rust-lua53) - Rust向けLua 5.3バインディング
  * [lilyball/rust-lua](https://github.com/lilyball/rust-lua) - Lua 5.1向け安全なRustバインディング
  * [mlua-rs/mlua](https://github.com/mlua-rs/mlua) - async／await対応の、高水準Lua 5.4／5.3／5.2／5.1（LuaJITを含む）およびRoblox Luau向けRustバインディング [![build badge](https://github.com/mlua-rs/mlua/workflows/CI/badge.svg)](https://github.com/mlua-rs/mlua/actions)
  * [tickbh/td_rlua](https://github.com/tickbh/td_rlua) [[td_rlua](https://crates.io/crates/td_rlua)] - Rust向けゼロコスト高水準Lua 5.3ラッパー
  * [tomaka/hlua](https://github.com/tomaka/hlua) - Luaと連携するRustライブラリ
* mruby
  * [anima-engine/mrusty](https://github.com/anima-engine/mrusty) - Rust向けmruby安全バインディング
* Node.js
  * [infinyon/node-bindgen](https://github.com/infinyon/node-bindgen) - Rustを使ったNode.jsモジュールを簡単に生成
  * [neon-bindings/neon](https://github.com/neon-bindings/neon) - 安全で高速なネイティブNode.jsモジュールを記述するRustバインディング
  * [zhangyuang/node-ffi-rs](https://github.com/zhangyuang/node-ffi-rs) - RustとN-APIで記述されたNode.js向けインターフェース（FFI）モジュール
* Objective-C
  * [SSheldon/rust-objc](https://github.com/SSheldon/rust-objc) - Rust向けObjective-Cランタイムのバインディングとラッパー
* PHP
  * [phper-framework/phper](https://github.com/phper-framework/phper) - 可能な限り純粋で安全なRustを使ってPHP拡張機能を記述できるフレームワーク
* Prolog
  * [mthom/scryer-prolog](https://github.com/mthom/scryer-prolog/) - Scryer PrologはRustで記述された自由ソフトウェアのISO Prologシステムです。
* Python
  * [dgrunwald/rust-cpython](https://github.com/dgrunwald/rust-cpython) - Pythonバインディング
  * [getsentry/milksnake](https://github.com/getsentry/milksnake) - Python wheel内で動的リンクライブラリを可能な限りポータブルに配布するPython setuptools拡張機能。
  * [PyO3/PyO3](https://github.com/PyO3/PyO3) - Pythonインタープリター向けRustバインディング
  * [RustPython](https://github.com/RustPython/RustPython) - Rustで記述されたPythonインタープリター [![Build Status](https://github.com/RustPython/RustPython/workflows/CI/badge.svg)](https://github.com/RustPython/RustPython/actions?query=workflow%3ACI)
* Ruby
  * [d-unsed/ruru](https://github.com/d-unsed/ruru) - Rustで記述されたネイティブRuby拡張機能
  * [danielpclark/rutie](https://github.com/danielpclark/rutie) - Rustで記述されたネイティブRuby拡張機能、およびその逆
* Web Assembly
  * [rhysd/wain](https://github.com/rhysd/wain) - 依存関係ゼロの安全なRustで一から実装したwain（WebAssemblyインタープリター） [![build badge](https://github.com/rhysd/wain/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/rhysd/wain/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush)
  * [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen) - wasmモジュールとJavaScript間の高水準な連携を実現するプロジェクト。
  * [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) - :package: :sparkles: wasmをまとめてnpmに公開！

### フォーマッター

* [astral-sh/ruff](https://github.com/astral-sh/ruff) - 非常に高速なPythonリンター兼コードフォーマッター [![Actions status](https://github.com/astral-sh/ruff/workflows/CI/badge.svg)](https://github.com/astral-sh/ruff/actions)
* [dprint](https://github.com/dprint/dprint) - プラグイン式で設定可能なコード整形プラットフォーム [![build badge](https://github.com/dprint/dprint/workflows/CI/badge.svg)](https://github.com/dprint/dprint/actions?query=workflow%3ACI)
* [Prettier Rust](https://github.com/jinxdash/prettier-plugin-rust) - 不正な構文を自動修正する独自方針のRustコードフォーマッター（[Prettier](https://prettier.io/)コミュニティプラグイン）
* [rustfmt](https://github.com/rust-lang/rustfmt) - Rustチームが保守しCargoに含まれるRustコードフォーマッター
* [rvben/rumdl](https://github.com/rvben/rumdl) [[rumdl](https://crates.io/crates/rumdl)] - Rustで記述された高速なMarkdownリンター兼フォーマッター [![CI](https://github.com/rvben/rumdl/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rvben/rumdl/actions/workflows/ci.yml)

### IDE

[Rust Tools](https://rust-lang.org/tools/)も参照してください。

  * [Eclipse](https://www.eclipse.org/)
    * [Eclipse Corrosion](https://github.com/eclipse-corrosion/corrosion) - Rust Analyzer Language Server、Cargoランナー、GDBデバッガーと統合し、豊富な編集環境を提供するEclipse IDE向けRust開発プラグイン
  * [Emacs](https://www.gnu.org/software/emacs/)
    * [emacs-racer](https://github.com/racer-rust/emacs-racer) - 自動補完（[company](https://company-mode.github.io)と[auto-complete](https://github.com/auto-complete/auto-complete)も参照）
    * [flycheck-rust](https://github.com/flycheck/flycheck-rust) - [Flycheck](https://github.com/flycheck/flycheck)向けRustサポート
    * [rust-mode](https://github.com/rust-lang/rust-mode) - Rust Major Mode
    * [rustic](https://github.com/emacs-rustic/rustic) - Emacs向けRust開発環境 [![build badge](https://github.com/emacs-rustic/rustic/workflows/CI/badge.svg)](https://github.com/emacs-rustic/rustic/actions?query=workflow%3ACI)
  * [gitpod.io](https://gitpod.io) - Rust Language Serverを基盤とする、Rustを完全サポートしたオンラインIDE
  * [gnome-builder](https://wiki.gnome.org/Apps/Builder) - バージョン3.22.2以降でRustとCargoをネイティブサポート
  * [IntelliJ](https://www.jetbrains.com/idea/)
    * [intellij-rust/intellij-rust](https://github.com/intellij-rust/intellij-rust) - IntelliJ Platform向けRustプラグイン
  * [Kakoune](http://kakoune.org/)
    * [kakoune-lsp](https://github.com/kakoune-lsp/kakoune-lsp/) - [LSP](https://microsoft.github.io/language-server-protocol/)クライアント。Rust製で、rlsを標準でサポート。
  * [lapce](https://github.com/lapce/lapce) - Rustで記述された超高速で高機能なコードエディター。 [![build badge](https://github.com/lapce/lapce/actions/workflows/release.yml/badge.svg)](https://github.com/lapce/lapce/actions/workflows/release.yml)
  * [Ride](https://github.com/madeso/ride) - Rust IDE
  * [RustRover](https://www.jetbrains.com/rust/) - 個人の非商用利用は無料の、JetBrains製高機能Rust IDE
  * [Sublime Text](https://www.sublimetext.com/)
    * [rust-lang/rust-enhanced](https://github.com/rust-lang/rust-enhanced) - 公式Rustパッケージ
  * [Vim](https://vim.sourceforge.io/) - 広く使われているテキストエディター
    * [autozimu/LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim) - [LSP](https://microsoft.github.io/language-server-protocol/)クライアント。Rust製でrlsを標準サポート。
    * [cargo.nvim](https://github.com/nwiizo/cargo.nvim) - Cargoコマンドとシームレスに統合するNeovimプラグイン。
    * [crates.nvim](https://github.com/Saecki/crates.nvim) - crates.io依存関係の管理を支援するプラグイン。
    * [rust.vim](https://github.com/rust-lang/rust.vim) - ファイル検出、構文強調表示、整形、Syntastic統合などを提供。
    * [vim-racer](https://github.com/racer-rust/vim-racer) - Vimで[Racer](https://github.com/racer-rust/racer)を使い、Rustコードの補完とナビゲーションを実現。
  * Visual Studio
    * [PistonDevelopers/VisualRust](https://github.com/PistonDevelopers/VisualRust) - Rust向けVisual Studio拡張機能 [![Build status](https://ci.appveyor.com/api/projects/status/5nw5no10jj0y4p3f?svg=true)](https://ci.appveyor.com/project/vosen/visualrust)
  * [Visual Studio Code](https://code.visualstudio.com/)
    * [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) - LLDB拡張機能
    * [Dependi](https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi) - 依存関係を簡単に管理
    * [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - VS Code向けTOMLサポート
    * [Prettier - Code formatter (Rust)](https://marketplace.visualstudio.com/items?itemName=jinxdash.prettier-rust) - 不正な構文を自動修正する独自方針のRustコードフォーマッター（[Prettier](https://prettier.io/)コミュニティプラグイン）
    * [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) - RLSに代わるRust Language Server

### プロファイリング

* [Bencher](https://github.com/bencherdev/bencher) - CIでパフォーマンス低下を検出するために設計された継続的ベンチマークツール群
* [bheisler/criterion.rs](https://github.com/bheisler/criterion.rs) - 統計に基づくベンチマークライブラリ
* [Bytehound](https://github.com/koute/bytehound) - Linux向けメモリープロファイラー
* [cong-or/hud](https://github.com/cong-or/hud) - Tokioランタイムをブロックしている原因を特定。計測コード不要のeBPFプロファイラー。
* [Divan](https://github.com/nvzqz/divan) - 割り当てプロファイリングを備えたシンプルで高機能なベンチマークライブラリ
* [ellisonch/rust-stopwatch](https://github.com/ellisonch/rust-stopwatch) - ストップウォッチライブラリ
* FlameGraphs
  * [llogiq/flame](https://github.com/llogiq/flame) - Rust向け侵入型フレームグラフプロファイリングツール
* [g3bench](https://github.com/bytedance/g3) - HTTP 1.x／2／3、TLSハンドシェイク、DNS、Cloudflare Keylessに対応するベンチマークツール
* [pawurb/hotpath](https://github.com/pawurb/hotpath-rs) - コードの処理時間とメモリー割り当て箇所を正確に表示するシンプルなプロファイラー [![GH Actions](https://github.com/pawurb/hotpath-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pawurb/hotpath-rs/actions)
* [sharkdp/hyperfine](https://github.com/sharkdp/hyperfine) - コマンドラインベンチマークツール

### サービス

* [deepwiki-rs](https://github.com/sopaco/deepwiki-rs) - コードベースをプロ品質のアーキテクチャドキュメントに変換。 [![crates.io](https://img.shields.io/crates/v/deepwiki-rs?logo=rust)](https://crates.io/crates/deepwiki-rs)
* [deps.rs](https://github.com/deps-rs/deps.rs) - 古い依存関係や安全でない依存関係を検出
* [docs.rs](https://docs.rs) - クレートのドキュメントを自動生成

### 静的解析

[[assert](https://crates.io/keywords/assert), [static](https://crates.io/keywords/static)]

* [cargo-coupling](https://github.com/nwiizo/cargo-coupling) - Vlad Khononovの「Balancing Coupling in Software Design」フレームワークを用いるRust結合度分析ツール
* [creusot-rs/creusot](https://github.com/creusot-rs/creusot) - コードをWhy3検証プラットフォームへ変換し、パニック、オーバーフロー、アサーション失敗がないことを証明するRust演繹検証ツール
* [dupehound](https://github.com/Rafaelpta/dupehound) [[dupehound](https://crates.io/crates/dupehound)] - 関数本体のフィンガープリント（winnowing）により、名前変更後もコピーを検出する重複コード検出ツール。リポジトリの無駄コードスコア、重複履歴チャート、再利用元の関数を示すCIゲートを備え、Rustと他11言語に対応。 [![CI](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml/badge.svg)](https://github.com/Rafaelpta/dupehound/actions/workflows/ci.yml)
* [kucherenko/jscpd](https://github.com/kucherenko/jscpd) [[jscpd](https://crates.io/crates/jscpd)] - 220以上のファイル形式で重複ブロックを検出するソースコードのコピー＆ペースト検出ツール [![CI](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/kucherenko/jscpd/actions/workflows/rust.yml)
* [MIRAI](https://github.com/endorlabs/mirai) - Rustの中間表現（MIR）に対して動作する抽象インタープリター [![Continuous Integration](https://github.com/endorlabs/mirai/actions/workflows/rust.yml/badge.svg)](https://github.com/endorlabs/mirai/actions/workflows/rust.yml)
* [RAPx](https://github.com/safer-rust/RAPx) - rustcコンパイラーが提供するものを超えた高度な静的解析ツールの開発と利用を支援するプラットフォーム。
* [static_assertions](https://crates.io/crates/static_assertions) - 不変条件が満たされることを保証するコンパイル時アサーション
* [verus-lang/verus](https://github.com/verus-lang/verus) - 低レベルシステムコード向けの検証済みRust
* [zizmorcore/zizmor](https://github.com/zizmorcore/zizmor) [[zizmor](https://crates.io/crates/zizmor)] - テンプレートインジェクション、認証情報漏えい、過剰な権限、偽装コミットなどのセキュリティ問題を検出するGitHub Actions静的解析ツール。 [![CI](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml/badge.svg)](https://github.com/zizmorcore/zizmor/actions/workflows/ci.yml)

### テスト

[[test](https://crates.io/keywords/test), [testing](https://crates.io/keywords/testing)]
* Assertions and Matchers
  * [googletest-json-serde](https://crates.io/crates/googletest-json-serde) [![Latest Version](https://img.shields.io/crates/v/googletest-json-serde.svg)](https://crates.io/crates/googletest-json-serde) - パス、配列、オブジェクトに対応するgoogletest-rust用JSONマッチャー集。 [![Build Status](https://github.com/chege/googletest-json-serde/actions/workflows/ci.yaml/badge.svg)](https://github.com/chege/googletest-json-serde/actions)
* Code Coverage
  * [minikin/cargo-crap](https://github.com/minikin/cargo-crap) [[cargo-crap](https://crates.io/crates/cargo-crap)] - 循環的複雑度とLCOVカバレッジ（CRAPメトリクス）を組み合わせ、複雑で未テストの関数を検出してスコアに基づきCIを制御
  * [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) [[supercov](https://crates.io/crates/supercov)] - コーディングエージェント向けコード品質／テストカバレッジ。各ソースファイルを採点し、最初に修正すべき対象を示します。 [![CI](https://github.com/supercorp-ai/supercov/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/supercorp-ai/supercov/actions)
  * [tarpaulin](https://crates.io/crates/cargo-tarpaulin) - コードカバレッジツール
* Continuous Integration
  * [trust](https://github.com/japaric/trust) - 5アーキテクチャでRustクレートをテストし、Linux、macOS、Windows向けバイナリーリリースを公開するTravis CI／AppVeyorテンプレート
* Frameworks and Runners
  * [AlKass/polish](https://github.com/AlKass/polish) - ミニテスト／テスト駆動開発フレームワーク [![Crates Package Status](https://img.shields.io/crates/v/polish.svg)](https://crates.io/crates/polish)
  * [bitfield/cargo-testdox](https://github.com/bitfield/cargo-testdox) [[cargo-testdox](https://crates.io/crates/cargo-testdox)] - Rustテストをドキュメントに変換 [![CI](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bitfield/cargo-testdox/actions/workflows/ci.yml)
  * [cargo-dinghy](https://crates.io/crates/cargo-dinghy/) - スマートフォンなどの小型プロセッサーデバイスでライブラリテストやベンチマークを実行しやすくするCargo拡張機能。
  * [cucumber](https://crates.io/crates/cucumber) [![Latest Version](https://img.shields.io/crates/v/cucumber.svg)](https://crates.io/crates/cucumber) - 外部テストランナーや依存関係を必要としない、Rust向けCucumberテストフレームワークの完全ネイティブ実装。 [![Build Status](https://github.com/cucumber-rs/cucumber/actions/workflows/ci.yml/badge.svg)](https://github.com/cucumber-rs/cucumber/actions)
  * [d-e-s-o/test-log](https://github.com/d-e-s-o/test-log) [[test-log](https://crates.io/crates/test-log)] - テスト実行前にログ／トレース基盤を初期化する`#[test]`属性の代替 [![GitHub Workflow Status](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/d-e-s-o/test-log/actions/workflows/test.yml)
  * [demonstrate](https://crates.io/crates/demonstrate) - 宣言的テストフレームワーク
  * [GoogleTest Rust](https://crates.io/crates/googletest) - C++テストライブラリGoogleTestを基盤とする高機能アサーションフレームワーク [![Build Status](https://github.com/google/googletest-rust/workflows/CI/badge.svg)](https://github.com/google/googletest-rust/actions?query=workflow%3ACI+branch%3Amain)
  * [hovinen/test-that](https://github.com/hovinen/test-that) [[test-that](https://crates.io/crates/test-that)] - GoogleTest Rustとその原作者に基づくRust用アサーションライブラリ。 [![Build Status](https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg)](https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain)
  * [mitsuhiko/insta](https://github.com/mitsuhiko/insta) [[insta](https://crates.io/crates/insta)] - Rust向けスナップショットテストライブラリ。 [![Build Status](https://github.com/mitsuhiko/insta/workflows/Tests/badge.svg)](https://github.com/mitsuhiko/insta/actions)
  * [nextest-rs/nextest](https://github.com/nextest-rs/nextest) [[cargo-nextest](https://crates.io/crates/cargo-nextest)] - 並列テスト実行、高速化、高度なフィルタリング、豊富な出力を備えた次世代Rustテストランナー。 [![cargo-nextest on crates.io](https://img.shields.io/crates/v/cargo-nextest)](https://crates.io/crates/cargo-nextest)
  * [padamson/playwright-rust](https://github.com/padamson/playwright-rust) [[playwright-rs](https://crates.io/crates/playwright-rs)] - Microsoft Playwright向けRustバインディング。自動待機ロケーターとトレース取得を備え、Chromium、Firefox、WebKitでクロスブラウザーE2Eテストを実施。 [![CI](https://github.com/padamson/playwright-rust/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/padamson/playwright-rust/actions/workflows/test.yml)
  * [palfrey/serial_test](https://github.com/palfrey/serial_test) [[serial_test](https://crates.io/crates/serial_test)] - テストを全体または名前付きグループ単位で逐次実行 [![CI](https://github.com/palfrey/serial_test/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/palfrey/serial_test/actions/workflows/ci.yml)
  * [rlt](https://github.com/wfxr/rlt) - リアルタイムTUI対応の汎用負荷テストフレームワーク。
  * [rstest](https://crates.io/crates/rstest) - フィクスチャベースのテストフレームワーク [![Build Status](https://github.com/la10736/rstest/workflows/Test/badge.svg?branch=master)](https://github.com/la10736/rstest/actions)
  * [speculate](https://crates.io/crates/speculate) - RSpecに着想を得た最小構成テストフレームワーク
* Mocking and Test Data
  * [asomers/mockall](https://github.com/asomers/mockall) [[mockall](https://crates.io/crates/mockall)] - 高機能なモックオブジェクトライブラリ。 [![CI](https://github.com/asomers/mockall/actions/workflows/ci.yml/badge.svg)](https://github.com/asomers/mockall/actions/workflows/ci.yml)
  * [bcheidemann/fixtures-rs](https://github.com/bcheidemann/fixtures-rs/tree/main/fixtures) [[fixtures](https://crates.io/crates/fixtures)] - globパターンでフィクスチャからテストを生成するproc macro
  * [fake-rs](https://github.com/cksac/fake-rs) - フェイクデータ生成ライブラリ
  * [goldenfile](https://github.com/calder/rust-goldenfile) [[goldenfile](https://crates.io/crates/goldenfile)] - goldenfileテスト向けのシンプルなAPIを提供するライブラリ。
  * [httpmock](https://github.com/httpmock/httpmock) - HTTPモック [![Build](https://github.com/httpmock/httpmock/actions/workflows/build.yml/badge.svg)](https://github.com/httpmock/httpmock/actions/workflows/build.yml)
  * [mockiato](https://crates.io/crates/mockiato) - 不安定なRust 2018向けの厳格ながら使いやすいモックライブラリ
  * [mockito](https://crates.io/crates/mockito) - HTTPモック
  * [mocktail](https://github.com/IBM/mocktail) [![mocktail](https://img.shields.io/crates/v/mocktail)](https://crates.io/crates/mocktail) - Rust向けHTTP／gRPCサーバーモック ![build](https://github.com/IBM/mocktail/actions/workflows/build.yml/badge.svg)
  * [nrxus/faux](https://github.com/nrxus/faux/) [![Latest Version](https://img.shields.io/crates/v/faux.svg)](https://crates.io/crates/faux) - 構造体からモックを作成するライブラリ。 ![build](https://github.com/nrxus/faux/workflows/test/badge.svg?branch=master)
  * [synth](https://github.com/shuttle-hq/synth/) - データベースデータを宣言的に生成。 [![build](https://github.com/shuttle-hq/synth/actions/workflows/synth-test.yml/badge.svg)](https://github.com/shuttle-hq/synth)
* Mutation Testing
  * [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) [[cargo-mutants](https://crates.io/crates/cargo-mutants)] - ソースを変更せずにミューテーションを注入し、テスト不足のコードを検出。 [![build badge](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml/badge.svg?branch=main&event=push)](https://github.com/sourcefrog/cargo-mutants/actions/workflows/tests.yml?query=branch%3Amain)
  * [mutagen](https://github.com/llogiq/mutagen) [[mutagen](https://crates.io/crates/mutagen)] - ソースレベルのミューテーションテストフレームワーク（nightlyのみ）
* Property Testing and Fuzzing
  * [Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident) - 手動誘導テスト、フローシーケンス、プロパティベース検証に対応するSolanaスマートコントラクト向けファジングフレームワーク
  * [proptest](https://crates.io/crates/proptest) - Pythonの[Hypothesis](https://hypothesis.works/)に着想を得たプロパティテストフレームワーク
  * [quickcheck](https://crates.io/crates/quickcheck) - [QuickCheck](https://wiki.haskell.org/Introduction_to_QuickCheck1)のRust実装
  * [rust-fuzz/afl.rs](https://github.com/rust-fuzz/afl.rs) - [AFL](https://lcamtuf.coredump.cx/afl/)を使用するRustファザー

### トランスパイル

* [aleph-lang/aleph_ollama](https://github.com/aleph-lang/aleph_ollama) [[aleph_ollama](https://crates.io/crates/aleph_ollama)] - ローカルOllama APIを使用したAI搭載ソースコード翻訳ツール。
* [BayesWitnesses/m2cgen](https://github.com/BayesWitnesses/m2cgen) - 学習済みの従来型機械学習モデルを依存関係ゼロのネイティブRustコードへ変換するCLIツール。
* [immunant/c2rust](https://github.com/immunant/c2rust) - Clang／LLVMを基盤とするCからRustへの変換／クロスチェックツール。
* [jameysharp/corrode](https://github.com/jameysharp/corrode) - Haskellで記述されたCからRustへの変換ツール。

### トンネル

* [ekzhang/bore](https://github.com/ekzhang/bore) [[bore-cli](https://crates.io/crates/bore-cli)] - NATファイアウォールを迂回し、ローカルポートをリモートサーバーへ公開するシンプルなTCPトンネル [![Build status](https://img.shields.io/github/actions/workflow/status/ekzhang/bore/ci.yml)](https://github.com/ekzhang/bore/actions)
* [joaoh82/rustunnel](https://github.com/joaoh82/rustunnel) - セルフホスト型の安全なトンネルサーバー。yamux多重化によるTLS暗号化WebSocket経由で、ローカルHTTP／HTTPS／TCP／UDPサービスを公開。マルチリージョン、Prometheusメトリクス、AIエージェント向けMCPサーバーに対応。
* [ngrok/ngrok-rust](https://github.com/ngrok/ngrok-rust) [[ngrok-rust](https://crates.io/crates/ngrok)] - ngrokはローカルアプリを安全にインターネットへ公開する開発者向けツールです。
* [rathole-org/rathole](https://github.com/rathole-org/rathole) - Noise Protocol／TLS暗号化とホットリロード設定に対応する、安全で高性能なNATトラバーサル向けリバースプロキシ ![CI](https://img.shields.io/github/actions/workflow/status/rathole-org/rathole/rust.yml?branch=main)

## ライブラリ

* [perf-monitor-rs](https://github.com/larksuite/perf-monitor-rs) - アプリケーションのパフォーマンス監視を基礎から支援するツールキット。 [![crates.io](https://img.shields.io/crates/v/perf_monitor.svg)](https://crates.io/crates/perf_monitor)

### 人工知能

#### Genetic algorithms

* [innoave/genevo](https://github.com/innoave/genevo) - カスタマイズ／拡張可能な方法で遺伝的アルゴリズム（GA）シミュレーションを実行。
* [m-decoster/RsGenetic](https://github.com/m-decoster/RsGenetic) - 遺伝的アルゴリズムライブラリ。メンテナンスモード。
* [Martin1887/oxigen](https://github.com/Martin1887/oxigen) - 高速、並列、拡張可能で適応性のある遺伝的アルゴリズムライブラリ。このライブラリを使った例では、N=255のNクイーン問題を数秒、1 MB未満のRAMで解きます。
* [pkalivas/radiate](https://github.com/pkalivas/radiate) - 教師あり／教師なし／強化学習の問題に対する解を進化させる、カスタマイズ可能な並列遺伝的プログラミングエンジン。NEATとEvtreeの完全かつカスタマイズ可能な実装を備えます。![Crates.io](https://img.shields.io/crates/v/radiate)
* [willi-kappler/darwin-rs](https://github.com/willi-kappler/darwin-rs) - 進化的アルゴリズム

#### Google Gemini

* [gemini-client-api](https://crates.io/crates/gemini-client-api) - Google Gemini APIを利用するライブラリ。自動コンテキスト管理、スキーマ生成、関数呼び出しなどに対応。

#### Machine learning

[[機械学習](https://crates.io/keywords/machine-learning)]も参照してください。

[Rustの機械学習コミュニティについて](https://medium.com/@autumn_eng/about-rust-s-machine-learning-community-4cda5ec8a790#.hvkp56j3f)と[Are we learning yet?](https://www.arewelearningyet.com)も参照してください。

* [autumnai/leaf](https://github.com/autumnai/leaf) - オープンな機械知能フレームワーク。開発終了。最も更新されているフォークは[juice](https://github.com/fff-rs/juice)です。
* [ave-sergeev/tictonix](https://github.com/Ave-Sergeev/Tictonix) [[tictonix](https://crates.io/crates/tictonix)] - トークンを埋め込みに変換し、その位置を符号化する機能を提供するライブラリ。
* [blackportal-ai/delta](https://github.com/blackportal-ai/delta) - Δ Rust製オープンソース機械学習フレームワーク。 ![crates.io](https://img.shields.io/crates/v/deltaml.svg) ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/delta/core.yml?branch=master)
* [blackportal-ai/nebula](https://github.com/blackportal-ai/nebula) - 機械学習データセットとモデル向けパッケージマネージャー。 ![build](https://img.shields.io/github/actions/workflow/status/blackportal-ai/nebula/core.yml?branch=master)
* [burn](https://github.com/tracel-ai/burn) - 柔軟で包括的な深層学習フレームワーク。
* [chelsea0x3b/dfdx](https://github.com/chelsea0x3b/dfdx) - Rust独自の多くの機能を活用するCUDAアクセラレーション対応機械学習フレームワーク。 ![Crates.io](https://img.shields.io/crates/v/dfdx)
* [EricLBuehler/mistral.rs](https://github.com/EricLBuehler/mistral.rs) [[mistralrs](https://crates.io/crates/mistralrs)] - マルチモーダルモデル、量子化（GGUF／GPTQ／ISQ）、OpenAI互換APIに対応する高速で柔軟なLLM推論エンジン
* [guillaume-be/rust-bert](https://github.com/guillaume-be/rust-bert) [[rust_bert](https://crates.io/crates/rust_bert)] - すぐに使えるNLPパイプラインと言語モデル
* [huggingface/candle](https://github.com/huggingface/candle) [[candle-core](https://crates.io/crates/candle-core)] - 使いやすさと性能（GPU対応を含む）を重視したミニマルなMLフレームワーク
* [huggingface/tokenizers](https://github.com/huggingface/tokenizers) - Pythonバインディングを備えた、最新NLPパイプライン向けHugging Face tokenizersのオリジナル実装。 [![Build Status](https://github.com/huggingface/tokenizers/workflows/Rust/badge.svg?branch=master)](https://github.com/huggingface/tokenizers/actions)
* [katanemo/plano](https://github.com/katanemo/plano) - エージェント型アプリ向けのAIネイティブなプロキシサーバー兼データプレーン。
* [LaurentMazare/tch-rs](https://github.com/LaurentMazare/tch-rs) - PyTorch向けバインディング。
* [luminal-ai/luminal](https://github.com/luminal-ai/luminal) [[luminal](https://crates.io/crates/luminal)] - RISC風アーキテクチャ、探索ベース最適化、ネイティブCUDA／Metalバックエンドを備えた高性能汎用推論コンパイラー。Transformer、ConvNet、自動微分に対応。 [![CI Status](https://img.shields.io/github/actions/workflow/status/luminal-ai/luminal/test-core.yml?style=for-the-badge&logo=github-actions&logoColor=white&branch=main)](https://github.com/luminal-ai/luminal/actions)
* [maciejkula/rustlearn](https://github.com/maciejkula/rustlearn) - 機械学習ライブラリ。 [![Circle CI](https://circleci.com/gh/maciejkula/rustlearn.svg?style=svg)](https://app.circleci.com/pipelines/github/maciejkula/rustlearn)
* [Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy) [[shimmy](https://crates.io/crates/shimmy)] - OpenAI互換APIとネイティブGGUF対応を備えた純Rust製WebGPU推論エンジン。
* [Michael-A-Kuykendall/shimmytok](https://github.com/Michael-A-Kuykendall/shimmytok) [[shimmytok](https://crates.io/crates/shimmytok)] - llama.cppのトークナイズと互換性のある、GGUFモデル向け純Rust製トークナイザー
* [Mottl/lightgb3-rs](https://github.com/Mottl/lightgbm3-rs) - LightGBM向けバインディング [![Crates.io](https://img.shields.io/crates/v/lightgbm3.svg)](https://crates.io/crates/lightgbm3) [![build](https://github.com/Mottl/lightgbm3-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/Mottl/lightgbm3-rs/actions)
* [nobodywho-ooo/nobodywho](https://github.com/nobodywho-ooo/nobodywho) - ゲームやアプリに直接組み込めるオンデバイスLLM推論エンジン。サーバーもAPIキーも不要。ストリーミング生成、埋め込み、GBNF文法制約付き構造化出力、Whisper音声文字起こしに対応し、Godot、Flutter、React Native、Swiftのバインディングを提供。
* [openinfer-project/openinfer](https://github.com/openinfer-project/openinfer) - PyTorchやPythonランタイムを使わない純Rust + CUDA製LLM推論エンジン。OpenAI互換API、ページングKVキャッシュ、CUDA Graphに対応し、Qwen3から1兆パラメーターのKimi-K2まで配信。
* [perpetual-ml/perpetual](https://github.com/perpetual-ml/perpetual) [[perpetual](https://crates.io/crates/perpetual)] - ハイパーパラメーター最適化を必要としない自己一般化型勾配ブースティングマシン。
* [ramsyana/RustTensor](https://github.com/ramsyana/RustTensor) - 自動微分とCPU／CUDAバックエンドを備え、Rustでゼロから構築された学習重視の高性能テンソル計算ライブラリ。
* [raphaelmansuy/edgequake](https://github.com/raphaelmansuy/edgequake) - ドキュメントをインテリジェントなナレッジグラフへ変換する高性能Graph-RAGフレームワーク。
* [rust-ml/linfa](https://github.com/rust-ml/linfa) - 機械学習フレームワーク。
* [sipemu/anofox-regression](https://github.com/sipemu/anofox-regression) [[anofox-regression](https://crates.io/crates/anofox-regression)] - R風の推論（p値、信頼区間、予測区間）とWasmに対応する統計回帰モデル（OLS、Elastic Net、GLM、分位点、単調回帰）。
* [smartcorelib/smartcore](https://github.com/smartcorelib/smartcore) - 機械学習ライブラリ [![Build Status](https://img.shields.io/circleci/build/github/smartcorelib/smartcore)]
* [tag1consulting/feste](https://github.com/tag1consulting/feste) - 教育目的でRustを使ってゼロから実装したGPT-2風Transformer言語モデル。
* [tensorflow/rust](https://github.com/tensorflow/rust) - TensorFlow向けバインディング。

#### OpenAI

* [0xplaygrounds/rig](https://github.com/0xplaygrounds/rig) - エージェントとモジュール式でスケーラブルなLLM搭載アプリケーションを作るライブラリ
* [64bit/async-openai](https://github.com/64bit/async-openai) [[async-openai](https://crates.io/crates/async-openai)] - OpenAPI仕様に基づく、OpenAI API向けの使いやすいRustバインディング。
* [awakenworks/awaken](https://github.com/awakenworks/awaken) [[awaken](https://crates.io/crates/awaken)] - Rust向けAIエージェントランタイム。型安全な状態管理、複数プロトコルでのサービス提供、プラグイン拡張に対応。
* [bigduu/Bamboo-agent](https://github.com/bigduu/Bamboo-agent) [[bamboo-agent](https://crates.io/crates/bamboo-agent)] - ローカルファーストのAIエージェント用ハーネス／ランタイム。永続記憶、組み込みツール、スキル、MCP、サブエージェント、ワークフロー、スケジュールを単一HTTP + WebSocket APIから利用できます。クレートとして組み込み、またはサーバーとして実行可能。
* [liquidos-ai/AutoAgents](https://github.com/liquidos-ai/AutoAgents) [[AutoAgents](https://crates.io/crates/autoagents)] - ネイティブエッジ対応のAIエージェント構築用マルチエージェントフレームワーク。
* [openai/codex](https://github.com/openai/codex) - Codex CLIはOpenAI製のローカル実行型コーディングエージェントです。
* [openai/harmony](https://github.com/openai/harmony) [[openai-harmony](https://crates.io/crates/openai-harmony/0.0.3)] - gpt-ossで使うHarmony応答形式のレンダラー。
* [xberg-io/liter-llm](https://github.com/xberg-io/liter-llm) [[liter-llm](https://crates.io/crates/liter-llm)] - 142以上のプロバイダーに対応し、統一インターフェース、ストリーミング、11言語のネイティブバインディングを備えた汎用LLM APIクライアント。
* [zurawiki/tiktoken-rs](https://github.com/zurawiki/tiktoken-rs) [[tiktoken-rs](https://crates.io/crates/tiktoken-rs)] - tiktokenを使ってOpenAIモデル向けにテキストをトークン化するライブラリ。 [![CI](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/zurawiki/tiktoken-rs/actions/workflows/ci.yml)

#### Tooling

* [BAML](https://github.com/BoundaryML/baml) - 信頼性の高いAIワークフローとエージェントを構築するシンプルなプロンプト言語。BAMLのコンパイラーはRust製！
* [Cortex Memory](https://github.com/sopaco/cortex-mem) - 抽出やベクトル検索から自動最適化、すぐ使える分析ダッシュボードまでを備えた、エージェント記憶の完全なソリューション。
* [juyterman1000/entroly](https://github.com/juyterman1000/entroly) - 強化学習を用いて最適なRAG断片をインテリジェントに選択／枝刈りする、情報理論ベースのコンテキストエンジニアリングエンジン。
* [memvid/memvid](https://github.com/memvid/memvid) [[memvid-core](https://crates.io/crates/memvid-core)] - ベクトル検索、全文検索、長期想起を単一の`.mv2`ファイルに収めた、AIエージェント向けの単一ファイル・ポータブル記憶レイヤー
* [pydantic/monty](https://github.com/pydantic/monty) - マイクロ秒で起動し、厳格なサンドボックス化とスナップショットに対応した、AIエージェント内でLLM生成コードを実行するための軽量で安全なPythonインタープリター [![CI](https://github.com/pydantic/monty/actions/workflows/ci.yml/badge.svg)](https://github.com/pydantic/monty/actions/workflows/ci.yml)
* [tenequm/pond](https://github.com/tenequm/pond) [[pond-db](https://crates.io/crates/pond-db)] - 12種類のコーディングエージェントクライアントにまたがるAIエージェントセッションを、ローカルディレクトリまたはS3バケット上のLanceにロスレス保存して検索。BM25と任意のベクトル検索をCLI、HTTP、MCP、読み取り専用SQLで提供。 [![build badge](https://github.com/tenequm/pond/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenequm/pond/actions/workflows/ci.yml)

### 天文学

[[astronomy](https://crates.io/keywords/astronomy)]

* [cds-astro/aladin-lite](https://github.com/cds-astro/aladin-lite) - さまざまな投影法で空間／惑星画像サーベイを可視化するWebアプリケーション
* [fitsio](https://crates.io/crates/fitsio) - cfitsioをラップするFITSインターフェースライブラリ
* [flosse/rust-sun](https://github.com/flosse/rust-sun) [[sun](https://crates.io/crates/sun)] - JSライブラリsuncalcのRust移植
* [saurvs/astro-rust](https://github.com/saurvs/astro-rust) - 天文学

### 非同期

* [async-std](https://async.rs/) [[async-std](https://crates.io/crates/async-std)] - Rust標準ライブラリの非同期版 [![CI](https://github.com/async-rs/async-std/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/async-rs/async-std/actions/workflows/ci.yml)
* [dagrs](https://github.com/dagrs-dev/dagrs) - フローベースプログラミングの概念に従う、高性能な非同期タスクプログラミングフレームワーク。
* [dpc/mioco](https://github.com/dpc/mioco) - スケーラブルなコルーチンベースの非同期I/O処理ライブラリ
* [igumnoff/gabriel2](https://github.com/igumnoff/gabriel2) [[gabriel2](https://crates.io/crates/gabriel2)] - Gabriel2：Tokioを基盤とするアクターモデルライブラリ
* [iii-hq/iii](https://github.com/iii-hq/iii) [[iii-sdk](https://crates.io/crates/iii-sdk)] - Worker／Function／Triggerプリミティブを通じてサービスを構成する分散ランタイム。リアルタイムカタログ、追跡可能な関数呼び出し、Rust／Node.js／Python SDKを備えます。エンジンはRust製（ELv2）、SDKはApache 2.0。
* [mio](https://github.com/tokio-rs/mio) - OS抽象化レイヤーへのオーバーヘッドを最小限に抑えることを重視した軽量I/OライブラリMIO
* [nextest-rs/future-queue](https://github.com/nextest-rs/future-queue) [[future-queue](https://crates.io/crates/future-queue)] - 重み付き並行実行制限と任意のグループ別制限を備え、futureを同時実行するストリームアダプター。
* [rust-lang/futures-rs](https://github.com/rust-lang/futures-rs) - ゼロコストfuture
* [t3hmrman/async-dropper](https://github.com/t3hmrman/async-dropper) [[async-dropper](https://crates.io/crates/async-dropper)] - `AsyncDrop`の実装
* [TeaEntityLab/fpRust](https://github.com/TeaEntityLab/fpRust) - Rust向けMonad／MonadIO、Handler、Coroutine／doNotation、関数型プログラミング機能
* [tokio-rs/tokio](https://github.com/tokio-rs/tokio) - Rustで信頼性が高く非同期かつ軽量なアプリケーションを書くためのランタイム。
* [tqwewe/kameo](https://github.com/tqwewe/kameo) - Tokio上に構築された障害耐性のある非同期アクター
* [Xudong-Huang/may](https://github.com/Xudong-Huang/may) - スタックフルコルーチンライブラリ
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - work-stealingスケジューラーを備えたコルーチンI/Oライブラリ

### 音声・音楽

[[audio](https://crates.io/keywords/audio)]

* [aschey/stream-download-rs](https://github.com/aschey/stream-download-rs) [[stream-download](https://crates.io/crates/stream-download)] - 音声、動画、その他のメディアをストリーミングするライブラリ [![build badge](https://github.com/aschey/stream-download-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/aschey/stream-download-rs/actions)
* [hound](https://crates.io/crates/hound) - WAVエンコード／デコードライブラリ
* [insomnimus/nodi](https://github.com/insomnimus/nodi) [[nodi](https://crates.io/crates/nodi)] - MIDIファイルの再生と抽象化を行うライブラリ。 [![build badge](https://github.com/insomnimus/nodi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/nodi/actions)
* [jhasse/ears](https://github.com/jhasse/ears) - OpenALとlibsndfile上に構築された、音声や音楽を再生するシンプルなライブラリ
* [musitdev/portmidi-rs](https://github.com/musitdev/portmidi-rs) - [PortMidi](https://portmedia.sourceforge.net/portmidi/)バインディング
* [ozankasikci/rust-music-theory](https://github.com/ozankasikci/rust-music-theory) - 音楽理論ライブラリ
* [pdeljanov/Symphonia](https://github.com/pdeljanov/Symphonia) - AAC、FLAC、MP3、MP4、OGG、Vorbis、WAVに対応する音声デコード／メディア多重化解除ライブラリ。
* [RustAudio](https://github.com/RustAudio)
  * [RustAudio/cpal](https://github.com/RustAudio/cpal) - 低レベルのクロスプラットフォーム音声I/Oライブラリ。 [![Actions Status](https://github.com/RustAudio/cpal/workflows/cpal/badge.svg?branch=master)](https://github.com/RustAudio/cpal/actions)
  * [RustAudio/rodio](https://github.com/RustAudio/rodio) - 音声再生ライブラリ
  * [RustAudio/rust-portaudio](https://github.com/RustAudio/rust-portaudio) - PortAudioバインディング
* [Serial-ATA/lofty-rs](https://github.com/Serial-ATA/lofty-rs) [[lofty](https://crates.io/crates/lofty)] - さまざまな音声形式のメタデータを読み取り／編集するライブラリ [![build badge](https://github.com/Serial-ATA/lofty-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Serial-ATA/lofty-rs/actions)

### 認証

* [constantoine/totp-rs](https://github.com/constantoine/totp-rs) [[totp-rs](https://crates.io/crates/totp-rs)] - TOTPベースのトークンを生成／検証する2FAライブラリ ![Build Status](https://github.com/constantoine/totp-rs/workflows/Rust/badge.svg)
* [GunduLabs/gaze](https://github.com/GunduLabs/gaze) - オンデバイス顔認識とPAM統合を備え、ログイン、画面ロック、sudo、デスクトップ管理を行うLinux向け顔認証。 [![CI](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GunduLabs/gaze/actions/workflows/ci.yml)
* [Keats/jsonwebtoken](https://github.com/Keats/jsonwebtoken) - [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)ライブラリ
* [oauth2](https://github.com/ramosbugs/oauth2-rs) - 拡張可能で強い型付けを備えたOAuth2クライアントライブラリ
* [oxide-auth](https://github.com/197g/oxide-auth) - actixなどのフロントエンドと組み合わせて使うOAuth2サーバーライブラリ。設定可能でプラグイン式のバックエンドを備えます。 [![CI](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/HeroicKatora/oxide-auth/actions/workflows/ci.yml)
* [sgrust01/jwtvault](https://github.com/sgrust01/jwtvault) - JWTワークフローを管理／オーケストレーションする非同期ライブラリ
* [tenuo-ai/tenuo](https://github.com/tenuo-ai/tenuo) [[tenuo](https://crates.io/crates/tenuo)] - AIエージェント向けのケイパビリティベース認可。署名済みwarrantでツール呼び出しと引数を制限し、委任時には権限を狭めます。 [![CI](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tenuo-ai/tenuo/actions/workflows/ci.yml)
* [yup-oauth2](https://github.com/dermesser/yup-oauth2) - Device、Installed、Service Accountフローを提供するOAuth2クライアント実装

### 自動車

* [idletea/tokio-socketcan](https://github.com/idletea/tokio-socketcan) [[tokio-socketcan](https://crates.io/crates/tokio-socketcan)] - socketcanクレートを基盤とするTokio向けLinux SocketCANサポート
* [marcelbuesing/tokio-socketcan-bcm](https://github.com/marcelbuesing/tokio-socketcan-bcm) [[tokio-socketcan-bcm](https://crates.io/crates/tokio-socketcan-bcm)] - Tokio向けLinux SocketCAN BCMサポート
* [mbr/socketcan](https://github.com/socketcan-rs/socketcan-rs) [[socketcan](https://crates.io/crates/socketcan)] - Linux SocketCANライブラリ
* [oxibus/can-dbc](https://github.com/oxibus/can-dbc) [[can-dbc](https://crates.io/crates/can-dbc)] - DBC形式のパーサー
* [Sensirion/lin-bus](https://github.com/Sensirion/lin-bus-rs) [[lin-bus](https://crates.io/crates/lin-bus)] - LINバスドライバーのトレイトとプロトコル実装 [![build badge](https://circleci.com/gh/Sensirion/lin-bus-rs.svg?style=svg)](https://app.circleci.com/pipelines/github/Sensirion/lin-bus-rs)

### バイオインフォマティクス

* [polars-bio](https://github.com/biodatageeks/polars-bio) - Python DataFrame向けの超高速バイオインフォマティクス処理 ![PyPI - Version](https://img.shields.io/pypi/v/polars-bio)
* [Rust-Bio](https://github.com/rust-bio) - バイオインフォマティクスライブラリ。

### キャッシュ

* [06chaynes/http-cache](https://github.com/06chaynes/http-cache) [[http-cache](https://crates.io/crates/http-cache)] - HTTPキャッシュ規則に従うキャッシュミドルウェア [![build badge](https://github.com/06chaynes/http-cache/workflows/http-cache/badge.svg)](https://github.com/06chaynes/http-cache/actions/workflows/http-cache.yml)
* [aisk/rust-memcache](https://github.com/aisk/rust-memcache) - Memcachedクライアントライブラリ
* [al8n/stretto](https://github.com/al8n/stretto) - 高性能でスレッドセーフなメモリー制約型キャッシュ [![build badge](https://github.com/al8n/stretto/actions/workflows/ci.yml/badge.svg)](https://github.com/al8n/stretto/actions/workflows/ci.yml)
* [hit-box/hitbox](https://github.com/hit-box/hitbox) - HTTPミドルウェアと多層バックエンドを備えた宣言的キャッシュオーケストレーションフレームワーク [![CI](https://github.com/hit-box/hitbox/actions/workflows/CI.yml/badge.svg)](https://github.com/hit-box/hitbox/actions/workflows/CI.yml)
* [jaemk/cached](https://github.com/jaemk/cached) - シンプルな関数キャッシュ／メモ化
* [kunobi-ninja/kache](https://github.com/kunobi-ninja/kache) [[kache](https://crates.io/crates/kache)] - RustおよびC／C++向けのコンテンツアドレス型コンパイラーキャッシュ（[Webサイト](https://ninja.kunobi.com/kache)） [![CI](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/kunobi-ninja/kache/actions/workflows/ci.yml)
* [moka-rs/moka](https://github.com/moka-rs/moka) - JavaのCaffeineライブラリに着想を得た、高性能な並行キャッシュライブラリ [![build badge](https://github.com/moka-rs/moka/workflows/CI/badge.svg)](https://github.com/moka-rs/moka/actions/workflows/CI.yml)
* [mozilla/sccache](https://github.com/mozilla/sccache/) - 共有コンパイルキャッシュ。コンパイルを高速化。
* [salsa-rs/salsa](https://github.com/salsa-rs/salsa) [[salsa](https://crates.io/crates/salsa)] - メモ化クエリを備えた、オンデマンドで増分計算を行う汎用フレームワーク。rustcのクエリシステムに着想を得ています。 [![Test](https://github.com/salsa-rs/salsa/workflows/Test/badge.svg)](https://github.com/salsa-rs/salsa/actions?query=workflow%3ATest)
* [zkat/cacache-rs](https://github.com/zkat/cacache-rs) - 非同期API向けに最適化された高性能で並行処理対応のコンテンツアドレス型ディスクキャッシュ [![build badge](https://github.com/zkat/cacache-rs/workflows/CI/badge.svg)](https://github.com/zkat/cacache-rs/actions/workflows/ci.yml)

### クラウド

* AWS [[aws](https://crates.io/keywords/aws)]
  * [aws/aws-lambda-rust-runtime](https://github.com/aws/aws-lambda-rust-runtime) [[lambda_runtime](https://crates.io/crates/lambda_runtime)] - AWS Lambda向けランタイム [![build badge](https://github.com/aws/aws-lambda-rust-runtime/workflows/Rust/badge.svg)](https://github.com/aws/aws-lambda-rust-runtime/actions)
  * [awslabs/aws-sdk-rust](https://github.com/awslabs/aws-sdk-rust) - 新しいAWS SDK
  * [faiscadev/fakecloud](https://github.com/faiscadev/fakecloud) [[fakecloud](https://crates.io/crates/fakecloud)] - 開発／テスト向けローカルAWSクラウドエミュレーター。 [![CI](https://github.com/faiscadev/fakecloud/workflows/CI/badge.svg?branch=main)](https://github.com/faiscadev/fakecloud/actions)
  * [rusoto/rusoto](https://github.com/rusoto/rusoto) - Rust向けAWS SDK
* Azure
  * [Azure/azure-sdk-for-rust](https://github.com/Azure/azure-sdk-for-rust) - 公式Azure SDK for Rust
* Load Balancer
  * [Convey](https://github.com/bparli/convey) - 動的設定読み込みに対応するレイヤー4ロードバランサー。
* Multi Cloud
  * [Qovery/engine](https://github.com/Qovery/engine) - クラウドプロバイダーへのアプリケーションデプロイを数分で簡単に行う抽象化レイヤーライブラリ

### コマンドライン

* Argument parsing
  * [aisk/rust-fire](https://github.com/aisk/rust-fire) [[fire](https://crates.io/crates/fire)] - 1行のコードで関数をコマンドラインアプリに変換 [![CI](https://github.com/aisk/rust-fire/actions/workflows/ci.yml/badge.svg)](https://github.com/aisk/rust-fire/actions/workflows/ci.yml)
  * [clap-rs](https://github.com/clap-rs/clap) [[clap](https://crates.io/crates/clap)] - シンプルで使いやすく、多機能なコマンドライン引数パーサー
  * [cliparser](https://crates.io/crates/cliparser) - シンプルなコマンドラインパーサー。 [![build badge](https://github.com/sagiegurari/cliparser/actions/workflows/ci.yml/badge.svg)](https://github.com/sagiegurari/cliparser/actions)
  * [docopt/docopt.rs](https://github.com/docopt/docopt.rs) [[docopt](https://crates.io/crates/docopt)] - DocOptの実装
  * [google/argh](https://github.com/google/argh) [[argh](https://crates.io/crates/argh)] - コードサイズを最適化した、独自の方針を持つDeriveベースの引数パーサー [![build badge](https://github.com/google/argh/workflows/Argh/badge.svg?branch=master)](https://github.com/google/argh/actions)
  * [killercup/quicli](https://github.com/killercup/quicli) [[quicli](https://crates.io/crates/quicli)] - クールなCLIアプリをすばやく構築
  * [ksk001100/seahorse](https://github.com/ksk001100/seahorse) [[seahorse](https://crates.io/crates/seahorse)] - 最小構成のCLIフレームワーク [![Build status](https://github.com/ksk001100/seahorse/workflows/CI/badge.svg?branch=master)](https://github.com/ksk001100/seahorse/actions)
  * [TeXitoi/structopt](https://github.com/TeXitoi/structopt) [[structopt](https://crates.io/crates/structopt)] - 構造体を定義してコマンドライン引数を解析
* Data visualization
  * [nukesor/comfy-table](https://github.com/nukesor/comfy-table) [[comfy-table](https://crates.io/crates/comfy-table)] - CLIツール向けの美しい動的テーブル。 [![Build status](https://github.com/Nukesor/comfy-table/workflows/Tests/badge.svg?branch=master)](https://github.com/nukesor/comfy-table/actions)
  * [zhiburt/tabled](https://github.com/zhiburt/tabled) [[tabled](https://crates.io/crates/tabled)] - 構造体や列挙型のテーブルをきれいに表示する、使いやすいライブラリ。 [![Build Status](https://github.com/zhiburt/tabled/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/tabled/actions)
* Human-centered design
  * [rust-cli/human-panic](https://github.com/rust-cli/human-panic) [[human-panic](https://crates.io/crates/human-panic)] - 人間にわかりやすいパニックメッセージ
* Line editor
  * [kkawakam/rustyline](https://github.com/kkawakam/rustyline) [[rustyline](https://crates.io/crates/rustyline)] - readlineの実装
  * [MovingtoMars/liner](https://github.com/MovingtoMars/liner) [[liner](https://crates.io/crates/liner)] - readline風機能を提供するライブラリ
  * [murarth/linefeed](https://github.com/murarth/linefeed) [[linefeed](https://crates.io/crates/linefeed)] - 設定可能で拡張可能な対話型行リーダー
  * [nushell/reedline](https://github.com/nushell/reedline) [[reedline](https://crates.io/crates/reedline)] - Nushellを支える多機能な行エディター。構文強調表示、タブ補完、複数行入力、履歴、vi／emacsキーバインド、Unicodeに対応。 [![Crates.io](https://img.shields.io/crates/v/reedline)](https://crates.io/crates/reedline)
  * [srijs/rust-copperline](https://github.com/srijs/rust-copperline) [[copperline](https://crates.io/crates/copperline)] - コマンドライン編集ライブラリ
* Other
  * [mgrachev/update-informer](https://github.com/mgrachev/update-informer) [[update-informer](https://crates.io/crates/update-informer)] - CLIアプリ向け更新通知ツール。Crates.ioとGitHubで新バージョンを確認します。 [![build badge](https://github.com/mgrachev/update-informer/workflows/CI/badge.svg)](https://github.com/mgrachev/update-informer/actions)
* Pipeline
  * [hniksic/rust-subprocess](https://github.com/hniksic/rust-subprocess) [[subprocess](https://crates.io/crates/subprocess)] - 外部パイプラインとのやりとりを支援
  * [imp/pager-rs](https://gitlab.com/imp/pager-rs) [[pager](https://crates.io/crates/pager)] - 出力を外部ページャーにパイプ
  * [oconnor663/duct.rs](https://github.com/oconnor663/duct.rs) [[duct](https://crates.io/crates/duct)] - サブプロセスパイプラインとI/Oリダイレクトのビルダー
  * [rust-cli/rexpect](https://github.com/rust-cli/rexpect) [[rexpect](https://crates.io/crates/rexpect)] - ssh、ftp、passwdなどの対話型アプリケーションを自動化 [![CI](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml/badge.svg)](https://github.com/rust-cli/rexpect/actions/workflows/ci.yml)
  * [zhiburt/expectrl](https://github.com/zhiburt/expectrl) [[expectrl](https://crates.io/crates/expectrl)] - 疑似端末内の対話型プログラムを制御するライブラリ [![build badge](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiburt/expectrl/actions/workflows/ci.yml)
* Progress
  * [a8m/pb](https://github.com/a8m/pb) [[pbr](https://crates.io/crates/pbr)] - コンソール進捗バー
  * [clitic/kdam](https://github.com/clitic/kdam) [[kdam](https://crates.io/crates/kdam)] - tqdmとrich.progressに着想を得たコンソール進捗バーライブラリ [![CI](https://github.com/clitic/kdam/actions/workflows/tests.yml/badge.svg)](https://github.com/clitic/kdam/actions/workflows/tests.yml)
  * [console-rs/indicatif](https://github.com/console-rs/indicatif) [[indicatif](https://crates.io/crates/indicatif)] - ユーザーに進捗状況を表示
  * [etienne-napoleone/spinach](https://github.com/etienne-napoleone/spinach) [[spinach](https://crates.io/crates/spinach)] - 実用的なスピナー。 [![CI](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml/badge.svg)](https://github.com/etienne-napoleone/spinach/actions/workflows/ci.yml)
  * [FGRibreau/spinners](https://github.com/FGRibreau/spinners) [[spinners](https://crates.io/crates/spinners)] - 60種類以上の洗練されたターミナルスピナー
  * [vyfor/rattles](https://github.com/vyfor/rattles) [[rattles](https://crates.io/crates/rattles)] - 最小構成で依存関係不要のターミナルスピナーライブラリ。
* Prompt
  * [hashmismatch/terminal_cli.rs](https://github.com/hashmismatch/terminal_cli.rs) [[terminal_cli](https://crates.io/crates/terminal_cli)] - 対話型コマンドプロンプトを構築
  * [mikaelmello/inquire](https://github.com/mikaelmello/inquire) [[inquire](https://crates.io/crates/inquire)] - ターミナル上の対話型プロンプトを作成するライブラリ。 [![Build status](https://github.com/mikaelmello/inquire/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/mikaelmello/inquire/actions)
  * [starship/starship](https://starship.rs/) [[starship](https://crates.io/crates/starship)] - あらゆるシェル向けの、最小構成で超高速かつ非常にカスタマイズ可能なプロンプト [![Build status](https://github.com/starship/starship/actions/workflows/workflow.yml/badge.svg)](https://github.com/starship/starship/actions)
  * [ynqa/promkit](https://github.com/ynqa/promkit) [[promkit](https://crates.io/crates/promkit)] - 対話型コマンドラインツールを構築するツールキット [![ci](https://github.com/ynqa/promkit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ynqa/promkit/actions/workflows/ci.yml)
* Style
  * [colored](https://github.com/colored-rs/colored) [[colored](https://crates.io/crates/colored)] - ターミナルの色付けはとても簡単。もう使い方を知っているはず！
  * [console-rs/dialoguer](https://github.com/console-rs/dialoguer) [[dialoguer](https://crates.io/crates/dialoguer)] - コマンドラインプロンプトなどのためのライブラリ。
  * [LukasKalbertodt/bunt](https://github.com/LukasKalbertodt/bunt) [[bunt](https://crates.io/crates/bunt)] - マクロでクロスプラットフォームのターミナル色付けとスタイル設定 [![Build status](https://github.com/LukasKalbertodt/bunt/actions/workflows/ci.yml/badge.svg)](https://github.com/LukasKalbertodt/bunt/actions?query=workflow%3ACI+branch%3Amaster)
  * [LukasKalbertodt/term-painter](https://github.com/LukasKalbertodt/term-painter) [[term-painter](https://crates.io/crates/term-painter)] - クロスプラットフォームのスタイル付きターミナル出力
  * [ogham/rust-ansi-term](https://github.com/ogham/rust-ansi-term) [[ansi_term](https://crates.io/crates/ansi_term)] - ANSIターミナルの色と書式を制御
  * [SergioBenitez/yansi](https://github.com/SergioBenitez/yansi) [[yansi](https://crates.io/crates/yansi)] - 非常にシンプルなANSIターミナル色付けライブラリ
* TUI
  * [AppCUI](https://github.com/gdt050579/AppCUI-rs) [[appcui](https://crates.io/crates/appcui)] - 組み込みウィジェット、レイアウト制御、アニメーション、Unicode、テーマ設定を備えた、Rust製のフル機能クロスプラットフォームTUI／CUIフレームワーク。
  * BearLibTerminal
    * [cfyzium/bearlibterminal](https://github.com/nabijaczleweli/BearLibTerminal.rs) [[bear-lib-terminal](https://crates.io/crates/bear-lib-terminal)] - [BearLibTerminal](https://github.com/tommyettinger/BearLibTerminal)バインディング
  * [ccbrown/iocraft](https://github.com/ccbrown/iocraft) [[iocraft](https://crates.io/crates/iocraft)] - 美しく丁寧に作られたCLI、TUI、テキストベースI/O向けのクレート。 [![Build status](https://github.com/ccbrown/iocraft/actions/workflows/commit.yaml/badge.svg?branch=main)](https://github.com/ccbrown/iocraft/actions) [![docs.rs](https://img.shields.io/docsrs/iocraft)](https://docs.rs/iocraft/)
  * [gyscos/Cursive](https://github.com/gyscos/Cursive) [[cursive](https://crates.io/crates/cursive)] - リッチなTUIアプリケーションを構築
  * [ivanceras/titik](https://github.com/ivanceras/titik) - 対話型ウィジェットの提供を目指すクロスプラットフォームTUIウィジェットライブラリ
  * ncurses
    * [ihalila/pancurses](https://github.com/ihalila/pancurses) [[pancurses](https://crates.io/crates/pancurses)] - LinuxとWindowsをサポートするcursesライブラリ
    * [jeaye/ncurses-rs](https://github.com/jeaye/ncurses-rs) [[ncurses](https://crates.io/crates/ncurses)] - [ncurses](https://invisible-island.net/ncurses/ncurses.html)バインディング
  * [ogham/rust-term-grid](https://github.com/ogham/rust-term-grid) [[term_grid](https://crates.io/crates/term_grid)] - グリッド上に要素を配置するライブラリ
  * [ratatui-org/ratatui](https://github.com/ratatui/ratatui) [[ratatui](https://crates.io/crates/ratatui)] - ターミナルUI（TUI）を作るためのライブラリ
  * [redox-os/termion](https://github.com/redox-os/termion) [[termion](https://crates.io/crates/termion)] - TTYを制御するためのバインディング不要ライブラリ
  * [ruterm](https://crates.io/crates/ruterm) - TTY操作向けの小型でシンプルなライブラリ
  * [subinium/SuperLightTUI](https://github.com/subinium/SuperLightTUI) [[superlighttui](https://crates.io/crates/superlighttui)] - 50以上のウィジェット、Flexboxレイアウト、アニメーションシステムを備えた即時モードTUIライブラリ [![CI](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml/badge.svg)](https://github.com/subinium/SuperLightTUI/actions/workflows/ci.yml)
  * Termbox
    * [gchp/rustbox](https://github.com/gchp/rustbox) [[rustbox](https://crates.io/crates/rustbox)] - [Termbox](https://github.com/nsf/termbox)へのバインディング
  * [TimonPost/crossterm](https://github.com/crossterm-rs/crossterm) [[crossterm](https://crates.io/crates/crossterm)] - クロスプラットフォームのターミナルライブラリ

### 圧縮

* [7z](https://7-zip.org/7z.html)
  * [hasenbanck/sevenz-rust2](https://github.com/hasenbanck/sevenz-rust2) [[sevenz-rust2](https://crates.io/crates/sevenz-rust2)] - 純Rust製の7z圧縮／展開ツール [![Rust](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/hasenbanck/sevenz-rust2/actions/workflows/rust.yml)
* [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html)
  * [dropbox/rust-brotli](https://github.com/dropbox/rust-brotli) - 標準ライブラリを使わない構成も可能なBrotli展開ツール
  * [ende76/brotli-rs](https://github.com/ende76/brotli-rs) - Brotli圧縮の実装
* bzip2
  * [trifectatechfoundation/bzip2-rs](https://github.com/trifectatechfoundation/bzip2-rs) - [libbz2](https://www.sourceware.org/bzip2/)バインディング
* gzip
  * [zopfli](https://github.com/zopfli-rs/zopfli) [[zopfli](https://crates.io/crates/zopfli)] - より高品質なdeflate／zlib圧縮を実現するZopfli圧縮アルゴリズムの実装
* gzp
  * [sstadick/gzp](https://github.com/sstadick/gzp/) - deflate形式とSnappyのマルチスレッドエンコード／デコード
* LZMA
  * [hasenbanck/lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [[lzma-rust2](https://crates.io/crates/lzma-rust2)] - [tukaani xz for java](https://tukaani.org/xz/java.html)から移植されたLZMA／LZMA2／LZIP／XZ圧縮 [![Rust](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/hasenbanck/lzma-rust2/actions/workflows/rust.yml)
* miniz
  * [rust-lang/flate2-rs](https://github.com/rust-lang/flate2-rs) - [miniz](https://code.google.com/archive/p/miniz)バインディング [![build badge](https://github.com/rust-lang/flate2-rs/workflows/CI/badge.svg?branch=master)](https://github.com/rust-lang/flate2-rs/actions)
* [paxit](https://github.com/roquess/paxit) [[paxit](https://crates.io/crates/paxit)] - zip、tar、gzip、xz、zstなど複数アルゴリズムでファイルを圧縮／展開する柔軟なライブラリ。拡張しやすいモジュール設計。
* tar
  * [alexcrichton/tar-rs](https://github.com/alexcrichton/tar-rs) - tarアーカイブの読み書き
* zip
  * [zip-rs/zip2](https://github.com/zip-rs/zip2) [[zip](https://crates.io/crates/zip)] - ZIPアーカイブの読み書き
* zstd
  * [gyscos/zstd-rs](https://github.com/gyscos/zstd-rs) - zstd圧縮ライブラリのRustバインディング

### 計算

* [alphaville/optimization-engine](https://github.com/alphaville/optimization-engine) [[optimization-engine](https://crates.io/crates/optimization_engine)] - OpEn（Optimization Engine）は制約付き非凸最適化問題のソルバーです。 [![Continuous integration](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/alphaville/optimization-engine/actions/workflows/ci.yml)
* [argmin-rs/argmin](https://github.com/argmin-rs/argmin) [[argmin](https://crates.io/crates/argmin)] - 最適化ライブラリ
* [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) [[blas](https://crates.io/keywords/blas)]
  * [mikkyang/rust-blas](https://github.com/mikkyang/rust-blas) - BLASバインディング
* [calebwin/emu](https://github.com/calebwin/emu) - GPGPU数値計算向け言語
* [dimforge/nalgebra](https://github.com/dimforge/nalgebra) - 低次元線形代数ライブラリ
* [faer-rs](https://github.com/sarah-quinones/faer-rs) [[faer](https://crates.io/crates/faer)] - Rust向け線形代数基盤
* [fastnum](https://github.com/neogenie/fastnum) [fastnum](https://crates.io/crates/fastnum) - 純Rustで実装された高速かつ高精度の10進数。金融、暗号資産、その他の固定精度計算に適しています。
* [GSL](http://www.gnu.org/software/gsl/)
  * [GuillaumeGomez/rust-GSL](https://github.com/GuillaumeGomez/rust-GSL) - GSLバインディング
* [jolars/basin](https://github.com/jolars/basin) [[basin](https://crates.io/crates/basin)] - 一次法、微分不要法、非線形最小二乗、進化的、制約付きソルバーを備え、線形代数バックエンドを汎用化した数値最適化ライブラリ [![CI](https://github.com/jolars/basin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jolars/basin/actions/workflows/ci.yml)
* [LAPACK](https://en.wikipedia.org/wiki/LAPACK)
  * [stainless-steel/lapack](https://github.com/blas-lapack-rs/lapack) - LAPACKバインディング
* [ml-rust/numr](https://github.com/ml-rust/numr) [[numr](https://crates.io/crates/numr)] - NumPyに着想を得たRust向け数値計算ライブラリ。テンソル、線形代数、FFT、統計、自動微分、GPUアクセラレーションを備えます。 [![CI](https://github.com/ml-rust/numr/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ml-rust/numr/actions/workflows/ci.yml)
* Parallel
  * [arrayfire/arrayfire-rust](https://github.com/arrayfire/arrayfire-rust) - [Arrayfire](https://github.com/arrayfire)バインディング
  * [autumnai/collenchyma](https://github.com/autumnai/collenchyma) - CUDA、OpenCL、一般的なホストCPU上の並列高性能計算向け、拡張可能でプラグイン式、バックエンド非依存のフレームワーク。
  * [luqmana/rust-opencl](https://github.com/luqmana/rust-opencl) - [OpenCL](https://www.khronos.org/opencl/)バインディング
* Science
  * [Axect/Peroxide](https://github.com/Axect/Peroxide) - 線形代数、数値解析、統計、機械学習ツールを純Rustで提供するRust数値計算ライブラリ
  * [cool-japan/scirs](https://github.com/cool-japan/scirs) - 線形代数、最適化、統計、ニューラルネットワークなどを含む本番対応の純Rust科学計算ライブラリ。Python SciPyに着想を得たAPI。
  * [cpmech/russell](https://github.com/cpmech/russell) - 数値数学、常微分方程式、特殊関数、高性能（疎）線形代数向けRust科学ライブラリ
  * [Nonanti/mathcore](https://github.com/Nonanti/mathcore) - 微分、積分、方程式解法、任意精度演算に対応するCAS機能付き数式処理ライブラリ [![crates.io](https://img.shields.io/crates/v/mathcore.svg)](https://crates.io/crates/mathcore)
  * [Ryan-D-Gast/differential-equations](https://github.com/Ryan-D-Gast/differential-equations) - 微分方程式を数値的に解く高性能ライブラリ
* Statrs
  * [statrs-dev/statrs](https://github.com/statrs-dev/statrs) - 堅牢な統計計算ライブラリ

### 並行処理

* [crossbeam-rs/crossbeam](https://github.com/crossbeam-rs/crossbeam) - 並列処理と低レベル並行処理のサポート
* [NikitaSmithTheOne/rate-limiters-rs](https://github.com/NikitaSmithTheOne/rate-limiters-rs) [[rate-limiters](https://crates.io/crates/rate_limiters)] - レート制限用Rustライブラリ（リーキーバケット、トークンバケット、固定／スライディングウィンドウ）
* [orium/archery](https://github.com/orium/archery) [[archery](https://crates.io/crates/archery)] - `Rc`／`Arc`ポインター型を抽象化するライブラリ。 [![build badge](https://github.com/orium/archery/workflows/CI/badge.svg)](https://github.com/orium/archery/actions?query=workflow%3ACI)
* [orx-parallel](https://crates.io/crates/orx-parallel) - 高性能で設定可能、表現力豊かな並列計算ライブラリ。
* [Rayon](https://github.com/rayon-rs/rayon) - データ並列処理ライブラリ
* [rustcc/coroutine-rs](https://github.com/rustcc/coroutine-rs) - コルーチンライブラリ
* [zonyitoo/coio-rs](https://github.com/zonyitoo/coio-rs) - コルーチンI/O

### 設定

* [andoriyu/uclicious](https://github.com/andoriyu/uclicious) [[uclicious](https://crates.io/crates/uclicious)] - [libUCL](https://github.com/vstakhov/libucl)を基盤とする多機能設定ライブラリ。 [![CircleCI](https://circleci.com/gh/vstakhov/libucl.svg?style=svg)](https://app.circleci.com/pipelines/github/vstakhov/libucl)
* [Kixunil/configure_me](https://github.com/Kixunil/configure_me) [[configure_me](https://crates.io/crates/configure_me)] - アプリケーション設定を簡単に処理するライブラリ
* [leptonyu/cfg-rs](https://github.com/leptonyu/cfg-rs) [[cfg-rs](https://crates.io/crates/cfg-rs)] - Rustアプリケーション向け設定ライブラリ。
* [rust-cli/config-rs](https://github.com/rust-cli/config-rs) [[config](https://crates.io/crates/config)] - レイヤー型設定システム（12-factorアプリケーションを強力にサポート）。
* [SergioBenitez/Figment](https://github.com/SergioBenitez/Figment) [[figment](https://crates.io/crates/figment)] - 「設定地獄」がまるで嘘のような設定ライブラリ。
* [softprops/envy](https://github.com/softprops/envy) - 環境変数を型安全な構造体にデシリアライズ [![Main](https://github.com/softprops/envy/actions/workflows/main.yml/badge.svg)](https://github.com/softprops/envy/actions/workflows/main.yml)

### 暗号

[[crypto](https://crates.io/keywords/crypto), [cryptography](https://crates.io/keywords/cryptography)]

* [arkworks-rs/circom-compat](https://github.com/arkworks-rs/circom-compat) - Groth16証明とWitness生成向けの、Circom R1CSに対するArkworksバインディング。
* [briansmith/ring](https://github.com/briansmith/ring) - RustとBoringSSLの暗号プリミティブを用いた、安全で高速かつ小型の暗号ライブラリ。
* [briansmith/webpki](https://github.com/briansmith/webpki) - Web PKI TLS X.509証明書検証。
* [conradkleinespel/rooster](https://github.com/conradkleinespel/rooster) [[rooster](https://crates.io/crates/rooster)] - ターミナルで使えるシンプルなパスワードマネージャー
* [cossacklabs/themis](https://github.com/cossacklabs/themis) [[themis](https://crates.io/crates/themis)] - 一般的なデータセキュリティ課題を解決する高水準暗号ライブラリ。マルチプラットフォームアプリに最適。 [![build badge](https://circleci.com/gh/cossacklabs/themis/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/cossacklabs/themis)
* [DaGenix/rust-crypto](https://github.com/DaGenix/rust-crypto) - 暗号アルゴリズム
* [dalek-cryptography/curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek) - Curve25519操作
* [debris/tiny-keccak](https://github.com/debris/tiny-keccak) - Keccakファミリー（SHA3）
* [dusk-network/bls12-381](https://github.com/dusk-network/bls12_381) - zk性能を高める機能を備えたRustネイティブBLS12-381。最適化された多重スカラー乗算、カスタムハッシュ、serde対応を備え、プライバシー重視プロトコルやゼロ知識アプリに最適。 ![Build Status](https://github.com/dusk-network/bls12_381/workflows/Continuous%20integration/badge.svg) [[dusk-bls12_381](https://crates.io/crates/dusk-bls12_381)]
* [dusk-network/plonk](https://github.com/dusk-network/plonk/) - BLS12-381上のPLONK zk-SNARKをRustネイティブで高性能に実装。効率的なゼロ知識証明向けにカスタムゲートとKZG10多項式コミットメントで最適化。 ![Build Status](https://github.com/dusk-network/plonk/workflows/Continuous%20integration/badge.svg) [[PLONK](https://crates.io/crates/dusk-plonk)]
* [dusk-network/poseidon252](https://github.com/dusk-network/Poseidon252) - RustネイティブのBLS12-381 Poseidonハッシュ。Poseidon252はzk-SNARKの効率向けに構築され、プライバシー重視プロトコルやゼロ知識アプリに最適。 ![Build Status](https://github.com/dusk-network/Poseidon252/workflows/Continuous%20integration/badge.svg) [[Poseidon](https://crates.io/crates/dusk-poseidon)]
* [exonum/exonum](https://github.com/exonum/exonum) [[exonum](https://crates.io/crates/exonum)] - ブロックチェーンプロジェクト向け拡張可能なフレームワーク
* [facebook/opaque-ke](https://github.com/facebook/opaque-ke) - 新しい[OPAQUE](https://datatracker.ietf.org/doc/draft-krawczyk-cfrg-opaque/)パスワード認証鍵交換の実装。 [![build badge](https://github.com/facebook/opaque-ke/workflows/Rust%20CI/badge.svg?branch=master)](https://github.com/facebook/opaque-ke)
* [iddm/randomorg](https://github.com/iddm/randomorg) - random.orgクライアントライブラリ。 [![Crates badge](https://img.shields.io/crates/v/randomorg.svg)](https://crates.io/crates/randomorg)
* [klutzy/suruga](https://github.com/klutzy/suruga) - [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246)の実装
* [kn0sys/ecc-rs](https://github.com/kn0sys/ecc-rs) - 楕円曲線暗号のチュートリアル向け直感的なライブラリ [![Crates.io Version](https://img.shields.io/crates/v/kn0syseccrs)](https://crates.io/crates/kn0syseccrs)
* [kornelski/rust-security-framework](https://github.com/kornelski/rust-security-framework) - Security Framework（OSXネイティブ）へのバインディング
* [libOctavo/octavo](https://github.com/libOctavo/octavo) - モジュール式ハッシュ／暗号ライブラリ
* [orion-rs/orion](https://github.com/orion-rs/orion) - 簡単で実用的な暗号を提供することを目指すライブラリ。「実用的」とは、使いやすく誤用しにくい高水準APIを公開することです。 [![Tests](https://github.com/orion-rs/orion/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/orion-rs/orion/actions/workflows/test.yml)
* [racum/rust-djangohashers](https://github.com/racum/rust-djangohashers) [[djangohashers](https://crates.io/crates/djangohashers)] - Djangoプロジェクトで使用されるパスワードプリミティブの移植版。Djangoは不要で、Django流の方法でパスワードをハッシュ化／検証します。
* [rust-native-tls/rust-native-tls](https://github.com/rust-native-tls/rust-native-tls) - ネイティブTLSライブラリ向けバインディング
* [rust-openssl](https://github.com/rust-openssl/rust-openssl) - [OpenSSL](https://www.openssl.org/)バインディング
* [rust-random/rand](https://github.com/rust-random/rand) [[rand](https://crates.io/crates/rand)] - 強力／小型PRNG、乱数値のサンプリング、分布、確率過程に対応する包括的な乱数生成ライブラリ。 [![Test Status](https://github.com/rust-random/rand/actions/workflows/test.yml/badge.svg?event=push)](https://github.com/rust-random/rand/actions)
* [RustCrypto/hashes](https://github.com/RustCrypto/hashes) - 暗号学的ハッシュ関数集
* [rustls/rustls](https://github.com/rustls/rustls) - TLSの実装
* [schnorrkel](https://github.com/paritytech/schnorrkel) - Ristretto群上のSchnorr VRFと署名
* [sorairolake/abcrypt](https://github.com/sorairolake/abcrypt) [[abcrypt](https://crates.io/crates/abcrypt)] - シンプルでモダン、安全なファイル暗号化ライブラリ。 [![CI](https://github.com/sorairolake/abcrypt/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/abcrypt/actions?query=workflow%3ACI)
* [sorairolake/scryptenc-rs](https://github.com/sorairolake/scryptenc-rs) [[scryptenc](https://crates.io/crates/scryptenc)] - scrypt暗号化データ形式の実装。 [![CI](https://github.com/sorairolake/scryptenc-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/scryptenc-rs/actions?query=workflow%3ACI)
* [suradet-ps/encryptman](https://github.com/suradet-ps/encryptman) [[encryptman](https://crates.io/crates/encryptman)] - HKDF鍵導出を使ったアプリケーション設定向けAES-256-GCM暗号化 [![CI](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suradet-ps/encryptman/actions/workflows/ci.yml)
* [verifyfetch](https://github.com/hamzaydia/verifyfetch) - Rust／WASM SHA-256ハッシュによる、一定メモリー使用量のストリーミングファイル完全性検証。ブラウザーで大容量ファイルの再開可能ダウンロードに対応。

### データ処理

* [amv-dev/yata](https://github.com/amv-dev/yata) - 高性能なテクニカル分析ライブラリ [![Build Status](https://img.shields.io/github/workflow/status/amv-dev/yata/Rust?branch=master)](https://github.com/amv-dev/yata/actions?query=workflow%3ARust)
* [AndreaBozzo/dataprof](https://github.com/AndreaBozzo/dataprof) [[dataprof](https://crates.io/crates/dataprof)] - Pythonバインディングを備えた、CSV、JSON、Parquet、Arrow向けデータプロファイリング／品質ゲート [![CI](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/AndreaBozzo/dataprof/actions/workflows/ci.yml)
* [bluss/ndarray](https://github.com/rust-ndarray/ndarray) - 配列ビュー、多次元スライス、効率的な演算を備えたN次元配列
* [DataBora/elusion](https://github.com/DataBora/elusion) [[elusion](https://crates.io/crates/elusion)] - DataFusionを基盤とするエンドツーエンドのデータエンジニアリングDataFrameライブラリ。Microsoft Fabric、Azure、SharePoint、FTP、Postgres、MySQL、REST API向けコネクターを備えます。
* [datafusion](https://github.com/apache/datafusion) - DataFusionはApache Arrowインメモリー形式を使ってRustで高品質なデータ中心システムを構築する、非常に高速で拡張可能なクエリエンジンです。
* [GoPlasmatic/datalogic-rs](https://github.com/GoPlasmatic/datalogic-rs) [[datalogic-rs](https://crates.io/crates/datalogic-rs)] - Node、WASM、Python、Go、Java、.NET、PHP向け公式バインディングを備える、業務ルール／動的フィルタリング向け高性能で型安全なJSONLogic評価エンジン [![CI](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/GoPlasmatic/datalogic-rs/actions/workflows/ci.yml)
* [ironcalc/IronCalc](https://github.com/ironcalc/IronCalc) [[ironcalc](https://crates.io/crates/ironcalc)] - 新しいモダンな開発中のスプレッドシートエンジン。
* [kernelmachine/utah](https://github.com/kernelmachine/utah) - DataFrame構造と演算
* [lakehq/sail](https://github.com/lakehq/sail) - バッチ処理、ストリーム処理、計算負荷の高いAIワークロードを統合する、Rust製Apache Sparkドロップイン代替製品。
* [logisky/LogiSheets](https://github.com/logisky/LogiSheets) [[logisheets-rs](https://crates.io/crates/logisheets-rs)] - 実際の製品を支える新しいモダンなスプレッドシートエンジン。
* [openooxml/betteroffice](https://github.com/openooxml/betteroffice) - DOCX、XLSX、PPTX向けネイティブOOXMLエンジン。編集、レイアウト、描画、CRDT共同編集、エージェント編集に対応し、WebAssemblyへコンパイル可能。
* [pathwaycom/pathway](https://github.com/pathwaycom/pathway) - Rustランタイムを備え、300以上のデータソースをサポートする高性能オープンソースPython ETLフレームワーク
* [pg_analytics](https://github.com/paradedb/paradedb/tree/dev/pg_analytics) - Postgres内の分析クエリ処理を高速化し、専用OLAPデータベースに匹敵する性能を実現するPostgreSQL拡張
* [pg_lakehouse](https://github.com/paradedb/paradedb/tree/dev/pg_lakehouse) - AWS S3／GCSなどのオブジェクトストアやDelta Lake／Icebergなどのテーブル形式に対する分析クエリエンジンへPostgresを変換するPostgreSQL拡張
* [pola-rs/polars](https://github.com/pola-rs/polars) - 高速で機能が充実したDataFrameライブラリ [![Lint Rust](https://github.com/pola-rs/polars/actions/workflows/lint-rust.yml/badge.svg)](https://github.com/pola-rs/polars/actions)
* [PSU3D0/formualizer](https://github.com/PSU3D0/formualizer) [[formualizer](https://crates.io/crates/formualizer)] - Excelブックを解析、評価、変更する組み込み可能なスプレッドシートエンジン。400以上の関数、Arrowバックのストレージ、増分再計算、Python／WASMバインディングを備えます。 [![CI](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/PSU3D0/formualizer/actions/workflows/ci.yml)
* [weld-project/weld](https://github.com/weld-project/weld) - データ分析アプリケーション向けの高性能ランタイム

### データストリーミング

* [arkflow-rs/arkflow](https://github.com/arkflow-rs/arkflow) - 高性能Rust製ストリーム処理エンジン [![CI](https://github.com/arkflow-rs/arkflow/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/arkflow-rs/arkflow/actions)
* [ArroyoSystems/arroyo](https://github.com/ArroyoSystems/arroyo) - RustとSQLによる高性能リアルタイム分析 [![CI](https://github.com/ArroyoSystems/arroyo/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ArroyoSystems/arroyo/actions)
* [beava-dev/beava](https://github.com/beava-dev/beava) - 単一バイナリのフィーチャーサーバー。HTTP／TCPでイベントを送信し、ブローカーを介さずエンティティ別の最新カウンターと集計値をその場で照会。詐欺対策、レコメンデーション、LLMガードレール、製品内分析向け。 [![CI](https://github.com/beava-dev/beava/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/beava-dev/beava/actions)
* [fluvio](https://github.com/fluvio-community/fluvio) - プログラム可能なデータストリーミングプラットフォーム [![CI](https://github.com/fluvio-community/fluvio/actions/workflows/ci.yml/badge.svg)](https://github.com/fluvio-community/fluvio/actions)
* [iggy](https://github.com/apache/iggy) [[iggy](https://crates.io/crates/iggy)] - QUIC、TCP、HTTP転送プロトコルをサポートする永続メッセージストリーミングプラットフォーム [![CI](https://github.com/apache/iggy/actions/workflows/test.yml/badge.svg)](https://github.com/apache/iggy/actions/workflows/test.yml)
* [wingfoil](https://github.com/wingfoil-io/wingfoil) - グラフベースのストリーム処理フレームワーク [![CI](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml/badge.svg)](https://github.com/wingfoil-io/wingfoil/actions/workflows/rust.yml)

### データ構造

* [alrevuelta/rs-merkle-tree](https://github.com/alrevuelta/rs-merkle-tree) - 設定可能なストレージバックエンドとハッシュ関数を備えたRust製Merkleツリー。固定深度で増分処理のみ対応。証明の高速生成向けに最適化。
* [ashvardanian/NumKong](https://github.com/ashvardanian/NumKong) - x86 AVX2／AVX-512およびArm NEON向けのSIMDアクセラレーション対応ベクトル距離／類似度関数 [![crates.io](https://img.shields.io/crates/v/simsimd.svg)](https://crates.io/crates/simsimd)
* [becheran/grid](https://github.com/becheran/grid) [[grid](https://crates.io/crates/grid)] - 使いやすく高速な2次元データ構造を提供。 [![build status](https://github.com/becheran/grid/actions/workflows/rust.yml/badge.svg)](https://github.com/becheran/grid/actions)
* [billyevans/tst](https://github.com/billyevans/tst) [[tst](https://crates.io/crates/tst)] - 三分探索木コレクション
* [contain-rs](https://github.com/contain-rs) - Rustのstd::collectionsを拡張
* [danielpclark/array_tool](https://github.com/danielpclark/array_tool) - 配列ヘルパー。配列でよく使うメソッドをベクターでも使えるようにします。ほとんどの用途に対応する多相実装。
* [enum-map](https://codeberg.org/sugar700/enum-map) [[enum-map](https://crates.io/crates/enum-map)] - 配列に値を格納する、列挙型向け最適化マップ実装。
* [fizyk20/generic-array](https://github.com/fizyk20/generic-array) - typenumで配列サイズを指定できるようにするハック
* [garro95/priority-queue](https://github.com/garro95/priority-queue)[[priority-queue](https://crates.io/crates/priority-queue)] - 優先度変更に対応する優先度キュー。
* [greyblake/nutype](https://github.com/greyblake/nutype) [[nutype](https://crates.io/crates/nutype)] - 検証制約付きのnewtype構造体を定義。 [![build status](https://github.com/greyblake/nutype/actions/workflows/ci.yml/badge.svg)](https://github.com/greyblake/nutype/actions)
* [jeromefroe/lru-rs](https://github.com/jeromefroe/lru-rs) [[lru](https://crates.io/crates/lru)] - `put`、`get`、`get_mut`、`pop`をO(1)で実行するLRUキャッシュ実装。 [![crates.io](https://img.shields.io/crates/v/lru.svg)](https://crates.io/crates/lru)
* [mikwielgus/undoredo](https://github.com/mikwielgus/undoredo) [[undoredo](https://crates.io/crates/undoredo)] - 任意のデータ構造向けUndo／Redoパターンの実装。カスタム型向けderiveマクロを備え、差分（疎diff）、スナップショット、コマンドベースのUndo／Redoに対応。no_stdとserde互換。 [![Crates.io](https://img.shields.io/crates/v/undoredo.svg)](https://crates.io/crates/undoredo)
* [mrhooray/kdtree-rs](https://github.com/mrhooray/kdtree-rs) - 高速な地理空間インデックス作成と最近傍検索向けK次元木
* [orium/rpds](https://github.com/orium/rpds) [[rpds](https://crates.io/crates/rpds)] - 永続データ構造。 [![build badge](https://github.com/orium/rpds/workflows/CI/badge.svg)](https://github.com/orium/rpds/actions?query=workflow%3ACI)
* [RoaringBitmap/roaring-rs](https://github.com/RoaringBitmap/roaring-rs) - Roaring Bitmap
* [rust-itertools/itertools](https://github.com/rust-itertools/itertools) - 追加のイテレーターアダプター、関数、マクロ
* [sorairolake/bit-int](https://github.com/sorairolake/bit-int) [[bit-int](https://crates.io/crates/bit-int)] - 任意の固定ビット幅整数ライブラリ [![CI](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/bit-int/actions/workflows/CI.yaml)
* [tnballo/scapegoat](https://github.com/tnballo/scapegoat) [[scapegoat](https://crates.io/crates/scapegoat)] - `BTreeSet`／`BTreeMap`に代わる、安全で失敗可能、スタックのみを使う代替型。 [![GitHub Actions](https://github.com/tnballo/scapegoat/workflows/test/badge.svg?branch=master)](https://github.com/tnballo/scapegoat/actions)
* [yamafaktory/hypergraph](https://github.com/yamafaktory/hypergraph) [[hypergraph](https://crates.io/crates/hypergraph)] - 有向ハイパーグラフを生成するデータ構造ライブラリ。 [![ci](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yamafaktory/hypergraph/actions/workflows/ci.yml)

### データ可視化

* [blitzarx1/egui_graphs](https://github.com/blitzarx1/egui_graphs) [[egui_graphs](https://crates.io/crates/egui_graphs)] - eguiとpetgraphを利用した対話型グラフ可視化ウィジェット。 [![Crates.io](https://img.shields.io/crates/v/egui_graphs)](https://crates.io/crates/egui_graphs) [![docs.rs](https://img.shields.io/docsrs/egui_graphs)](https://docs.rs/egui_graphs)
* [djduque/pgfplots](https://github.com/djduque/pgfplots) [[pgfplots](https://crates.io/crates/pgfplots)] - 出版品質の図表を生成するライブラリ。 [![build](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml/badge.svg)](https://github.com/DJDuque/pgfplots/actions/workflows/rust.yml)
* [mazznoer/colorgrad-rs](https://github.com/mazznoer/colorgrad-rs) [[colorgrad](https://crates.io/crates/colorgrad)] - データ可視化、チャート、ゲーム、地図、ジェネラティブアートなど向けのカラースケールライブラリ。
* [milliams/plotlib](https://github.com/milliams/plotlib) - Rust向けデータプロットライブラリ
* [plotly](https://github.com/plotly/plotly.rs) - Rust向けPlotly
* [plotpy](https://github.com/cpmech/plotpy) [[plotpy](https://crates.io/crates/plotpy)] - Python（Matplotlib）を使うRustプロットライブラリ
* [plotters](https://github.com/plotters-rs/plotters) - [![build badge](https://github.com/plotters-rs/plotters/workflows/CI/badge.svg)](https://github.com/plotters-rs/plotters/actions)
* [rerun](https://github.com/rerun-io/rerun) - [[rerun](https://crates.io/crates/rerun)] - コンピュータービジョンやロボティクスのデータ（テンソル、点群など）を記録するSDKと、時間軸で探索するビジュアライザー。
* [saresend/gust](https://github.com/saresend/Gust) - 小型のチャート／可視化ツール。Vegaを部分的に実装。
* [shergin/malevich](https://github.com/shergin/malevich) [[malevich](https://crates.io/crates/malevich)] - 自動軸対応のターミナルプロット（折れ線、散布図、棒、ヒストグラム、ヒートマップ、箱ひげ図、バイオリンプロットなど）
* [wangjiawen2013/charton](https://github.com/wangjiawen2013/charton) - Rust製のレイヤー型Grammar of Graphicsライブラリ。 [![Documentation](https://img.shields.io/docsrs/charton/latest)](https://docs.rs/charton) [![Build Status](https://github.com/wangjiawen2013/charton/actions/workflows/ci.yml/badge.svg)](https://github.com/wangjiawen2013/charton/actions)

### データベース

[[database](https://crates.io/keywords/database)]

* NoSQL [[nosql](https://crates.io/keywords/nosql)]

  * [ArangoDB](https://arangodb.com)
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 軽量なArangoDBオブジェクト／ドキュメント／リレーショナル／グラフマッパー [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
    * [Arangors](https://github.com/fMeow/arangors) [[arangors](https://crates.io/crates/arangors)] - ArangoDBドライバー
  * [Cassandra](https://cassandra.apache.org/_/index.html) [[cassandra](https://crates.io/keywords/cassandra), [cql](https://crates.io/keywords/cql)]
    * [AlexPikalov/cdrs](https://github.com/AlexPikalov/cdrs) [[cdrs](https://crates.io/crates/cdrs)] - ネイティブクライアント
    * [cassandra-rs](https://github.com/cassandra-rs/cassandra-rs) - DataStax C／C++向けバインディング
    * [krojew/cdrs-tokio](https://github.com/krojew/cdrs-tokio) - 100% Rustで記述された高水準の非同期Cassandraクライアント。 [![build badge](https://github.com/krojew/cdrs-tokio/actions/workflows/rust.yml/badge.svg)](https://github.com/krojew/cdrs-tokio/actions)
      * [[cassandra-protocol](https://crates.io/crates/cassandra-protocol)] - Cassandraプロトコルの実装。
      * [[cdrs-tokio](https://crates.io/crates/cdrs-tokio)] - 本番運用可能な非同期Apache Cassandraドライバー／クライアント
  * CouchDB [[couchdb](https://crates.io/keywords/couchdb)]
    * [chill-rs/chill](https://github.com/chill-rs/chill) [[couchdb](https://crates.io/crates/chill)] - CouchDB REST API向けクライアント
  * [DynamoDB](https://aws.amazon.com/dynamodb/) [[dynamodb](https://crates.io/keywords/dynamodb)]
    * [softprops/dynomite](https://github.com/softprops/dynomite) - `rusoto_dynamodb`と型安全かつ便利に連携するライブラリ [![build badge](https://github.com/softprops/dynomite/workflows/Main/badge.svg?branch=master)](https://github.com/softprops/dynomite/actions)
  * Elasticsearch [[elasticsearch](https://crates.io/keywords/elasticsearch)]
    * [benashford/rs-es](https://github.com/benashford/rs-es) [[rs-es](https://crates.io/crates/rs-es)] - [Elastic](https://www.elastic.co/) REST API向けクライアント
    * [elastic-rs/elastic](https://github.com/elastic-rs/elastic) [[elastic](https://crates.io/crates/elastic)] - Rustで記述された効率的でモジュール式のElasticsearch APIクライアント [![build badge](https://ci.appveyor.com/api/projects/status/csa78tcumdpnbur2?svg=true)](https://ci.appveyor.com/project/KodrAus/elastic)
  * etcd
    * [jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd) [[etcd](https://crates.io/crates/etcd)] - CoreOS etcd向けクライアントライブラリ。
  * [InfluxDB](https://www.influxdata.com/)
    * [driftluo/InfluxDBClient-rs](https://github.com/driftluo/InfluxDBClient-rs) - 同期インターフェース
  * LevelDB
    * [skade/leveldb](https://github.com/skade/leveldb) - [LevelDB](https://github.com/google/leveldb)バインディング
  * [LMDB](https://www.symas.com/lmdb.php) [[lmdb](https://crates.io/keywords/lmdb)]
    * [meilisearch/heed](https://github.com/meilisearch/heed) [[heed](https://crates.io/crates/heed)] - 最小限のオーバーヘッドで完全に型付けされたLMDBラッパー
    * [vhbit/lmdb-rs](https://github.com/vhbit/lmdb-rs) [[lmdb-rs](https://crates.io/crates/lmdb-rs)] - LMDB向けRustバインディング
  * MongoDB [[mongodb](https://crates.io/keywords/mongodb)]
    * [mongodb/mongo-rust-driver](https://github.com/mongodb/mongo-rust-driver) [[mongodb](https://crates.io/crates/mongodb)] - [MongoDB](https://www.mongodb.com/)バインディング
  * [MongrelDB](https://www.mongreldb.com)
    * [visorcraft/MongrelDB](https://github.com/visorcraft/MongrelDB) [[mongreldb-core](https://crates.io/crates/mongreldb-core)] - SQL、ベクトル検索、全文検索、AIネイティブ検索に対応する組み込み型列指向データベースエンジン [![build badge](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/visorcraft/MongrelDB/actions/workflows/ci.yml)
  * [PickleDB](https://pythonhosted.org/pickleDB/)
    * [seladb/pickledb-rs](https://github.com/seladb/pickledb-rs) - PythonのPickleDBに強く着想を得た、軽量でシンプルなキーバリューストア。
  * [PoloDB](https://www.polodb.org/)
    * [PoloDB](https://github.com/PoloDB/PoloDB) - MongoDBに似たAPIを持つ組み込みJSONデータベース。 ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/PoloDB/PoloDB/rust.yml)
  * [Redb](https://www.redb.org/)
    * [Redb](https://github.com/cberner/redb) - rocksdbやlmdbなど、他の組み込みキーバリューストアに似たインターフェースを提供する組み込みキーバリューデータベース。 ![GitHub Workflow Status](https://github.com/cberner/redb/actions/workflows/ci.yml/badge.svg)
  * Redis [[redis](https://crates.io/keywords/redis)]
    * [aembke/fred](https://github.com/aembke/fred.rs) [[fred](https://crates.io/crates/fred)] - Tokioを使うRust向け高水準非同期[Redis](https://redis.io/)クライアント [![CircleCI](https://circleci.com/gh/aembke/fred.rs/tree/main.svg?style=svg)]([https://circleci.com/gh/aembke/fred.rs/tree/main](https://app.circleci.com/pipelines/github/aembke/fred.rs?branch=main))
    * [redis-rs](https://github.com/redis-rs/redis-rs) - [Redis](https://redis.io/)ライブラリ [![Rust](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/redis-rs/redis-rs/actions/workflows/rust.yml)
  * [RocksDB](https://rocksdb.org/)
    * [rust-rocksdb/rust-rocksdb](https://github.com/rust-rocksdb/rust-rocksdb) - RocksDBバインディング [![RocksDB CI](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/rust-rocksdb/rust-rocksdb/actions/workflows/rust.yml)
  * [SurrealDB](https://surrealdb.com/)
    * [surrealdb/surrealdb](https://github.com/surrealdb/surrealdb) - 組み込み型SurrealDBドキュメント・グラフデータベース
  * [UnQLite](https://github.com/symisc/unqlite)
    * [zitsen/unqlite.rs](https://github.com/zitsen/unqlite.rs) - UnQLiteバインディング
  * [ZooKeeper](https://zookeeper.apache.org/)
    * [bonifaido/rust-zookeeper](https://github.com/bonifaido/rust-zookeeper) [[zookeeper](https://crates.io/crates/zookeeper)] - Apache ZooKeeper向けクライアントライブラリ。
    * [krojew/rust-zookeeper](https://github.com/krojew/rust-zookeeper) [[zookeeper-async](https://crates.io/crates/zookeeper-async)] - Tokioベースの非同期ZooKeeperクライアント。  ![build status](https://github.com/krojew/rust-zookeeper/actions/workflows/rust.yml/badge.svg)
* OGM [[ogm](https://crates.io/keywords/ogm)]
    * [Aragog](https://gitlab.com/qonfucius/aragog) [[aragog](https://crates.io/crates/aragog)] - 軽量なArangoDBオブジェクト／ドキュメント／リレーショナル／グラフマッパー [![pipeline status](https://gitlab.com/qonfucius/aragog/badges/master/pipeline.svg)](https://gitlab.com/qonfucius/aragog/-/commits/master)
* ORM [[orm](https://crates.io/keywords/orm)]
  * [ayarotsky/diesel-guard](https://github.com/ayarotsky/diesel-guard) - 危険なPostgreSQLマイグレーション（テーブルロック、書き換え、ブロッキング操作）を検出し、安全な代替案を提示するDiesel／SQLx向けリンター [![crate](https://img.shields.io/crates/v/diesel-guard.svg)](https://crates.io/crates/diesel-guard)
  * [diesel-rs/diesel](https://github.com/diesel-rs/diesel) - ORM兼クエリービルダー
  * [ivanceras/rustorm](https://github.com/ivanceras/rustorm) - ORM
  * [njord](https://github.com/njord-rs/njord) - ⛵ 多機能で汎用性の高いRust ORM [![build status](https://github.com/njord-rs/njord/actions/workflows/core.yml/badge.svg)](https://github.com/njord-rs/njord/actions/workflows/core.yml) ![crates.io](https://img.shields.io/crates/v/njord.svg)
  * [rbatis/rbatis](https://github.com/rbatis/rbatis) - 高性能なJSONベースORMフレームワーク
  * [SeaQL/sea-orm](https://github.com/SeaQL/sea-orm) - 🐚 非同期かつ動的なORM  [![crate](https://img.shields.io/crates/v/sea-orm.svg)](https://crates.io/crates/sea-orm) [![docs](https://img.shields.io/docsrs/sea-orm/latest)](https://docs.rs/sea-orm) [![build status](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-orm/actions/workflows/rust.yml)
  * [SeaQL/seaography](https://github.com/SeaQL/seaography) - SeaORM向けGraphQLフレームワーク [![crate](https://img.shields.io/crates/v/seaography.svg)](https://crates.io/crates/seaography) [![docs](https://img.shields.io/docsrs/seaography/latest)](https://docs.rs/seaography) [![build status](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml/badge.svg)](https://github.com/SeaQL/seaography/actions/workflows/tests.yaml)
  * [thegenius/taitan-orm](https://github.com/thegenius/taitan-orm) - Rust向け最先端ORM。非同期対応、コンパイル時生成。
* [sfackler/r2d2](https://github.com/sfackler/r2d2) - 汎用接続プール
* SQL [[sql](https://crates.io/keywords/sql)]
  * Generic
    * [launchbadge/sqlx](https://github.com/launchbadge/sqlx) - 強い型付けに対応する非同期PostgreSQL／MySQL／SQLite接続プール [![build badge](https://img.shields.io/github/workflow/status/launchbadge/sqlx/Rust/master?style=flat-square)](https://github.com/launchbadge/sqlx)
    * [SeaQL/sea-query](https://github.com/SeaQL/sea-query) - 🔱 MySQL、Postgres、SQLite向け動的SQLクエリービルダー [![crate](https://img.shields.io/crates/v/sea-query.svg)](https://crates.io/crates/sea-query) [![docs](https://img.shields.io/docsrs/sea-query/latest)](https://docs.rs/sea-query) [![build status](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-query/actions/workflows/rust.yml)
    * [SeaQL/sea-schema](https://github.com/SeaQL/sea-schema) - 🌿 SQLスキーマ定義と検出 [![crate](https://img.shields.io/crates/v/sea-schema.svg)](https://crates.io/crates/sea-schema) [![docs](https://img.shields.io/docsrs/sea-schema/latest)](https://docs.rs/sea-schema) [![build status](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml/badge.svg)](https://github.com/SeaQL/sea-schema/actions/workflows/rust.yml)
  * Microsoft SQL
    * [prisma/tiberius](https://github.com/prisma/tiberius) - [![Cargo tests](https://github.com/prisma/tiberius/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/prisma/tiberius/actions/workflows/test.yml)
  * MySql [[mysql](https://crates.io/keywords/mysql)]
    * [AgilData/mysql-proxy-rs](https://github.com/AgilData/mysql-proxy-rs) - MySQLプロキシ [![CircleCI](https://circleci.com/gh/AgilData/mysql-proxy-rs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/AgilData/mysql-proxy-rs?branch=master)
    * [blackbeam/mysql_async](https://github.com/blackbeam/mysql_async) [[mysql_async](https://crates.io/crates/mysql_async)] - Tokioベースの非同期MySQLドライバー。 [![CircleCI](https://circleci.com/gh/blackbeam/mysql_async/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/blackbeam/mysql_async?branch=master)
    * [blackbeam/rust-mysql-simple](https://github.com/blackbeam/rust-mysql-simple) [[mysql](https://crates.io/crates/mysql)] - ネイティブMySQLクライアント
  * Oracle
    * [kubo/rust-oracle](https://github.com/kubo/rust-oracle) [[oracle](https://crates.io/crates/oracle)] - Oracleドライバー [![build badge](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml/badge.svg?branch=master)](https://github.com/kubo/rust-oracle/actions/workflows/run-tests.yml)
  * PostgreSql [[postgres](https://crates.io/keywords/postgres), [postgresql](https://crates.io/keywords/postgresql)]
    * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 外部依存が少ない高速な実装。
    * [isdaniel/pg-walstream](https://github.com/isdaniel/pg-walstream) - PostgreSQLの論理／物理レプリケーションストリーミング向け高性能非同期CDC（Change Data Capture）ライブラリ。 [![Crates.io Version](https://img.shields.io/crates/v/pg_walstream)](https://crates.io/crates/pg_walstream)
    * [rust-postgres](https://github.com/rust-postgres/rust-postgres) [[postgres](https://crates.io/crates/postgres)] - ネイティブ[PostgreSQL](https://www.postgresql.org/)クライアント
  * Sqlite [[sqlite](https://crates.io/keywords/sqlite)]
    * [rusqlite](https://github.com/rusqlite/rusqlite) - [Sqlite3](https://sqlite.org/index.html)バインディング
* [VennDB](https://venndb.plabayo.tech/) [[venndb](https://github.com/plabayo/venndb)] - ビット（フラグ）列で検索する行向けの、Rust製追記専用インメモリデータベース

### 日付と時刻

[[date](https://crates.io/keywords/date), [time](https://crates.io/keywords/time)]

* [arthurhenrique/rusti-cal](https://github.com/arthurhenrique/rusti-cal) [[rusti-cal](https://crates.io/crates/rusti-cal)] - Rustで記述されたcal(1)クローン。非常に高速で、9999年以上を扱えます。
* [burntSushi/jiff](https://github.com/BurntSushi/jiff) - 成功しやすい道を選ぶよう促すRust向け日時ライブラリ。 [![Build status](https://github.com/BurntSushi/jiff/workflows/ci/badge.svg)](https://github.com/BurntSushi/jiff/actions)
* [chronotope/chrono](https://github.com/chronotope/chrono) - 日付／時刻ライブラリ
* [Mnwa/ms](https://github.com/Mnwa/ms) [[ms-converter](https://crates.io/crates/ms-converter)] - 人間が使う時刻表現をミリ秒に変換するライブラリ [![build badge](https://github.com/Mnwa/ms/workflows/build/badge.svg?branch=master)](https://github.com/Mnwa/ms/actions?query=workflow%3Abuild)
* [sorairolake/dos-date-time](https://github.com/sorairolake/dos-date-time) [[dos-date-time](https://crates.io/crates/dos-date-time)] - MS-DOSの日付／時刻ライブラリ [![CI](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml/badge.svg?branch=develop)](https://github.com/sorairolake/dos-date-time/actions/workflows/CI.yaml)
* [sorairolake/nt-time](https://github.com/sorairolake/nt-time) [[nt-time](https://crates.io/crates/nt-time)] - Windowsファイル時刻ライブラリ。 [![CI](https://github.com/sorairolake/nt-time/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/nt-time/actions?query=workflow%3ACI)
* [time-rs/time](https://github.com/time-rs/time) - [![build badge](https://github.com/time-rs/time/workflows/Build/badge.svg)](https://github.com/time-rs/time/actions)

### 分散システム

* Antimony
  * [antimonyproject/antimony](https://github.com/antimonyproject/antimony) [[antimony](https://crates.io/crates/antimony)] - ストリーム処理／分散計算プラットフォーム
* Apache Kafka
  * [fede1024/rust-rdkafka](https://github.com/fede1024/rust-rdkafka) [[rdkafka](https://crates.io/crates/rdkafka)] - [librdkafka](https://github.com/confluentinc/librdkafka)バインディング
  * [gklijs/schema_registry_converter](https://github.com/gklijs/schema_registry_converter) [[schema_registry_converter](https://crates.io/crates/schema_registry_converter)] - [Confluent Schema Registry](https://www.confluent.io/product/confluent-platform/data-compatibility/)との統合
  * [kafka-rust/kafka-rust](https://github.com/kafka-rust/kafka-rust) - Apache Kafka向けRustクライアント
* HDFS
  * [hyunsik/hdfs-rs](https://github.com/hyunsik/hdfs-rs) [[hdfs](https://crates.io/crates/hdfs)] - libhdfsバインディング
* Other
  * [build-trust/ockam](https://github.com/build-trust/ockam) [[ockam](https://crates.io/crates/ockam)] - 分散アプリケーション向けエンドツーエンド暗号化、相互認証、ABAC [![build badge](https://github.com/build-trust/ockam/workflows/Rust/badge.svg)](https://github.com/build-trust/ockam)
  * [zannis/shove](https://github.com/zannis/shove) [[shove](https://crates.io/crates/shove)] - RabbitMQ、Kafka、NATS JetStream、AWS SNS／SQS、Redis Streamsを単一APIで型安全に非同期Pub/Sub。再試行、DLQルーティング、自動スケーリングするコンシューマーグループを備えます。 [![CI](https://github.com/zannis/shove/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/zannis/shove/actions/workflows/ci.yml)

### ドメイン駆動設計

  * [serverlesstechnology/cqrs](https://github.com/serverlesstechnology/cqrs) [[cqrs-es](https://crates.io/crates/cqrs-es)] - [ユーザーガイド](https://doc.rust-cqrs.org/)付きCQRS／イベントソーシングフレームワーク

### eBPF

* [aya/aya-rs](https://github.com/aya-rs/aya) - 開発者体験と運用性を重視して構築。
* [libbpf/libbpf-rs](https://github.com/libbpf/libbpf-rs) - 最小構成で独自の方針を持つeBPFツール。

### メール

[[email](https://crates.io/keywords/email), [imap](https://crates.io/keywords/imap), [smtp](https://crates.io/keywords/smtp)]

* [duesee/imap-codec](https://github.com/duesee/imap-codec) [[imap-codec](https://crates.io/crates/imap-codec)] - 堅牢で完全なIMAPコーデック [![Build & Test](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/duesee/imap-codec/actions/workflows/build_and_test.yml)
* [gsquire/sendgrid-rs](https://github.com/gsquire/sendgrid-rs) - SendGrid API向けライブラリ
* [jdrouet/catapulte](https://github.com/jdrouet/catapulte) - [MRML](https://github.com/jdrouet/mrml)テンプレートを使ってメールを送信するマイクロサービス。
* [jdrouet/jolimail](https://github.com/jdrouet/jolimail) - [MRML](https://github.com/jdrouet/mrml)テンプレートを作成するWebアプリケーション。
* [jdrouet/mrml](https://github.com/jdrouet/mrml) - あらゆるメールクライアントで動作する美しいメールテンプレートを生成するライブラリ。
* [lettre/lettre](https://github.com/lettre/lettre) - SMTPライブラリ [![CI](https://github.com/lettre/lettre/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/lettre/lettre/actions/workflows/test.yml)
* [mailtutan/mailtutan](https://github.com/mailtutan/mailtutan) - テスト／開発環境向けSMTPサーバー。
* [meli/meli](https://github.com/meli/meli) - 🐝 ターミナルメールクライアント
* [reacherhq/check-if-email-exists](https://github.com/reacherhq/check-if-email-exists) [[check-if-email-exists](https://crates.io/crates/check-if-email-exists)] - SMTP検証、使い捨てアドレス検出、catch-all確認により、メールを送信せずにアドレスの有効性を確認 [![Actions Status](https://github.com/reacherhq/check-if-email-exists/workflows/pr/badge.svg)](https://github.com/reacherhq/check-if-email-exists/actions)
* [rustmailer/bichon](https://github.com/rustmailer/bichon) - 全文検索とWeb UIを備えた軽量で高性能なメールアーカイバー。
* [staktrace/mailparse](https://github.com/staktrace/mailparse) [[mailparse](https://crates.io/crates/mailparse)] - 実際のメールファイルを解析するライブラリ
* [stalwartlabs/mail-auth](https://github.com/stalwartlabs/mail-auth) [[mail-auth](https://crates.io/crates/mail-auth)] - DKIM、ARC、SPF、DMARCによるメッセージ認証ライブラリ [![build badge](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-auth/actions/workflows/rust.yml)
* [stalwartlabs/mail-parser](https://github.com/stalwartlabs/mail-parser) [[mail-parser](https://crates.io/crates/mail-parser)] - 完全なMIMEサポートを備えた高速で堅牢なメール解析ライブラリ [![build badge](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-parser/actions/workflows/rust.yml)
* [stalwartlabs/mail-send](https://github.com/stalwartlabs/mail-send) [[mail-send](https://crates.io/crates/mail-send)] - DKIMに対応したメール作成／SMTPクライアントライブラリ [![build badge](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml/badge.svg)](https://github.com/stalwartlabs/mail-send/actions/workflows/rust.yml)
* [tweedegolf/mailcrab](https://github.com/tweedegolf/mailcrab) - 開発向けメールテストサーバー。

### エンコーディング

[[encoding](https://crates.io/keywords/encoding)]

* ASN.1
  * [alex/rust-asn1](https://github.com/alex/rust-asn1) - ASN.1（DER）シリアライザー
* Barcode
  * [rxing-core/rxing](https://github.com/rxing-core/rxing) [[rxing](https://crates.io/crates/rxing)] - zxingバーコードライブラリのRust移植版。 [![Rust](https://github.com/rxing-core/rxing/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/rxing-core/rxing/actions/workflows/rust.yml)
* Binary
  * [bincode](https://crates.io/crates/bincode) - バイナリエンコーダー／デコーダー
  * [bincode-next](https://crates.io/crates/bincode-next) - 現在メンテナンスされていないbincodeの後継となるバイナリエンコーダー／デコーダー
  * [jamesmunns/postcard](https://github.com/jamesmunns/postcard) [[postcard](https://crates.io/crates/postcard)] - Postcardは`#![no_std]`に重点を置いたSerde用シリアライザー／デシリアライザーです。
  * [m4b/goblin](https://github.com/m4b/goblin) [[goblin](https://crates.io/crates/goblin)] - クロスプラットフォーム、ゼロコピー、エンディアン対応のバイナリー解析
* BSON
  * [mongodb/bson-rust](https://github.com/mongodb/bson-rust) - BSONのエンコード／デコードをサポート
* Byte swapping
  * [BurntSushi/byteorder](https://github.com/BurntSushi/byteorder) - ビッグエンディアン、リトルエンディアン、ネイティブのバイト順をサポート
* Cap'n Proto
  * [capnproto/capnproto-rust](https://github.com/capnproto/capnproto-rust) - Cap’n Protoは分散システム向けの型システムです。
* CBOR
  * [serde_cbor](https://crates.io/crates/serde_cbor) - Serde向けCBORサポート
* Character Encoding
  * [hsivonen/encoding_rs](https://github.com/hsivonen/encoding_rs) [[encoding_rs](https://crates.io/crates/encoding_rs)] - Gecko向けEncoding Standard実装
  * [lifthrasiir/rust-encoding](https://github.com/lifthrasiir/rust-encoding) - Rust向け文字エンコーディングサポート（rust-encodingとも呼ばれる）。WHATWG Encoding Standardに基づき、エラー検出／復旧向けの高度なインターフェースも提供。
* CRC
  * [mrhooray/crc-rs](https://github.com/mrhooray/crc-rs) - 各種規格に対応するCRC（16／32／64）のRust実装
* CSV
  * [BurntSushi/rust-csv](https://github.com/BurntSushi/rust-csv) - Serdeに対応する高速で柔軟なCSV読み書きライブラリ
* Data Matrix
  * [jannschu/datamatrix-rs](https://github.com/jannschu/datamatrix-rs) [[datamatrix](https://crates.io/crates/datamatrix)] - 最適化エンコーダーを備えたData Matrix（ECC 200）のデコード／エンコード [![CI](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannschu/datamatrix-rs/actions/workflows/ci.yml)
* EDN
  * [edn-rs](https://github.com/naomijub/edn-rs) [[edn-rs](https://crates.io/crates/edn-rs)] - EDN形式をRust型に解析／出力するクレート。
* [FlatBuffers](https://flatbuffers.dev/)
  * [frol/flatc-rust](https://github.com/frol/flatc-rust) - Cargoビルドスクリプト向けFlatBuffersコンパイラー（flatc）統合
* HAR
  * [mandrean/har-rs](https://github.com/mandrean/har-rs) [[har](https://crates.io/crates/har)] - HTTP Archive Format（HAR）のシリアライズ／デシリアライズライブラリ
* HTML
  * [servo/html5ever](https://github.com/servo/html5ever) - 高性能でブラウザー品質のHTML5パーサー
* JSON
  * [cloudwego/sonic-rs](https://github.com/cloudwego/sonic-rs) [[sonic-rs](https://crates.io/crates/sonic-rs)] - SIMDを基盤とする高速なRust JSONライブラリ。
  * [importcjj/rust-ajson](https://github.com/importcjj/rust-ajson) [[ajson](https://crates.io/crates/ajson)] - JSON値をすばやく取得
  * [rustadopt/jzon-rs](https://github.com/rustadopt/jzon-rs/) [[jzon](https://crates.io/crates/jzon)] - JSON実装
  * [serde-rs/json](https://github.com/serde-rs/json) [[serde\_json](https://crates.io/crates/serde_json)] - [Serde](https://github.com/serde-rs/serde)フレームワーク向けJSONサポート
  * [simd-lite/simd-json](https://github.com/simd-lite/simd-json) [[simd-json](https://crates.io/crates/simd-json)] - simdjson移植版を基盤とする高性能JSONパーサー
  * [vcschapp/bufjson](https://github.com/vcschapp/bufjson) [[bufjson](https://crates.io/crates/bufjson)] - コピー／割り当て不要のストリーミングJSONパーサー兼レキサー。任意でストリーミングJSON Pointer評価に対応。
* MsgPack
  * [3Hren/msgpack-rust](https://github.com/3Hren/msgpack-rust) - 中／低水準MessagePack実装
* NetCDF
  * [georust/netcdf](https://github.com/georust/netcdf) [[netcdf](https://crates.io/crates/netcdf)] - ファイル内の配列風構造を簡単に読み書きできる中水準netCDFバインディング。
* PEM
  * [jcreekmore/pem-rs](https://github.com/jcreekmore/pem-rs) [[pem](https://crates.io/crates/pem)] - PEMエンコードデータを解析／エンコード
* ProtocolBuffers
  * [stepancheg/rust-protobuf](https://github.com/stepancheg/rust-protobuf) - Google Protocol BuffersのRust実装
  * [tokio-rs/prost](https://github.com/tokio-rs/prost) - [![continuous integration](https://github.com/tokio-rs/prost/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/tokio-rs/prost/actions)
* QR code
  * [magiclen/qrcode-generator](https://github.com/magiclen/qrcode-generator) [[qrcode-generator](https://crates.io/crates/qrcode-generator)] - ISO/IEC 18004 QRコード／Micro QRコードとISO/IEC 23941 rMQRコードを純Rustで生成し、グレースケール、PNG、SVG画像として描画。 [![CI](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/magiclen/qrcode-generator/actions/workflows/ci.yml)
  * [sorairolake/qrcode-rust2](https://github.com/sorairolake/qrcode-rust2) [[qrcode2](https://crates.io/crates/qrcode2)] - QRコードエンコードライブラリ [![CI](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml/badge.svg?branch=main)](https://github.com/sorairolake/qrcode-rust2/actions/workflows/CI.yaml)
  * [WanzenBug/rqrr](https://github.com/WanzenBug/rqrr) [[rqrr](https://crates.io/crates/rqrr)] - 任意の画像ソースからQRコードを検出／読み取り [![CI](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml/badge.svg?branch=master)](https://github.com/WanzenBug/rqrr/actions/workflows/CI.yaml)
* rkyv
  * [rkyv/rkyv](https://github.com/rkyv/rkyv) [[rkyv](https://crates.io/crates/rkyv)] - rkyv（archive）はゼロコピー・デシリアライズフレームワークです。
* RON (Rusty Object Notation)
  * [https://github.com/ron-rs/ron](https://github.com/ron-rs/ron) - Rusty Object Notation
* Serde
  * [iddm/serde-aux](https://github.com/iddm/serde-aux/) - Serdeライブラリとともに使う追加ツール。 [![CI](https://github.com/iddm/serde-aux/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/serde-aux/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/serde-aux.svg)](https://crates.io/crates/serde-aux)
* TOML
  * [tamasfe/taplo](https://github.com/tamasfe/taplo) [[taplo](https://crates.io/crates/taplo)] - TOMLツールキット [![CI](https://github.com/tamasfe/taplo/workflows/Continuous%20integration/badge.svg)](https://github.com/tamasfe/taplo/actions?query=workflow%3A%22Continuous+integration%22)
  * [toml-rs/toml](https://github.com/toml-rs/toml) - [![CI](https://github.com/toml-rs/toml/actions/workflows/ci.yml/badge.svg)](https://github.com/toml-rs/toml/actions/workflows/ci.yml)
* [vitiral/stfu8](https://github.com/vitiral/stfu8) [[stfu8](https://crates.io/crates/stfu8)] - Sorta Text Format in UTF-8
* XML
  * [Florob/RustyXML](https://github.com/Florob/RustyXML) - XMLパーサー
  * [netvl/xml-rs](https://github.com/netvl/xml-rs) - ストリーミングXMLライブラリ
  * [shepmaster/sxd-document](https://github.com/shepmaster/sxd-document) - XMLライブラリ
  * [shepmaster/sxd-xpath](https://github.com/shepmaster/sxd-xpath) - XPathライブラリ
  * [tafia/quick-xml](https://github.com/tafia/quick-xml) - 高性能XMLプルリーダー／ライター
  * [yaserde](https://github.com/luminvent/yaserde) - XMLに特化したもう一つのシリアライザー／デシリアライザー
* YAML
  * [chyh1990/yaml-rust](https://github.com/chyh1990/yaml-rust) - 不足していたYAML 1.2実装。
  * [saphyr](https://github.com/saphyr-rs/saphyr) - YAML解析専用のクレート集。
  * [serde-saphyr](https://github.com/bourumir-wyngs/serde-saphyr) - パニックしない解析とわかりやすいエラー報告を重視した、Serde用YAMLシリアライザー／デシリアライザー [![crates.io](https://img.shields.io/crates/d/serde-saphyr.svg)](https://crates.io/crates/serde-saphyr)

### ファイルシステム

[[filesystem](https://crates.io/keywords/filesystem)]
* Operations
  * [Camino](https://github.com/camino-rs/camino) [[camino](https://crates.io/crates/camino)] - Rustの`std::path::Path`に似ていますが、UTF-8に対応。
  * [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) [[fff-search](https://crates.io/crates/fff-search)] - frecency順位付け、Git対応注釈、バックグラウンド監視、軽量なインメモリコンテンツ索引を備えた、入力ミスに強いファイル／コンテンツ検索ライブラリ。MCPサーバー、Node／Bun SDK、Cライブラリ、Neovimプラグインを提供。
  * [dnbln/dir-structure](https://github.com/dnbln/dir-structure) [[dir-structure](https://crates.io/crates/dir-structure)] - Rustの単純な構造体でファイルシステムツリーをモデル化。 [![Tests](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml/badge.svg?branch=trunk)](https://github.com/dnbln/dir-structure/actions/workflows/test-dir-structure.yml)
  * [OpenDAL](https://github.com/apache/opendal) [[opendal](https://crates.io/crates/opendal)] - 多様なストレージサービスからデータをシームレスかつ効率的に取得できる統合データアクセスレイヤー。 [![build](https://img.shields.io/github/actions/workflow/status/apache/opendal/ci_core.yml?branch=main)](https://github.com/apache/opendal/actions?query=branch%3Amain)
  * [ParthJadhav/Rust_Search](https://github.com/ParthJadhav/Rust_Search) [[rust_search](https://crates.io/crates/rust_search)] - 超高速ファイル検索ライブラリ。
  * [pop-os/dbus-udisks2](https://github.com/pop-os/dbus-udisks2) [[dbus-udisks2](https://crates.io/crates/dbus-udisks2)] - UDisks2 D-Bus API
  * [pop-os/sys-mount](https://github.com/pop-os/sys-mount) [[sys-mount](https://crates.io/crates/sys-mount)] - `mount`／`umount2`システムコールの高水準抽象化。
  * [vitiral/path_abs](https://github.com/vitiral/path_abs) [[path_abs](https://crates.io/crates/path_abs)] - シリアライズ可能な絶対パス型と関連メソッド。
  * [webdesus/fs_extra](https://github.com/webdesus/fs_extra) - 標準ライブラリstd::fsとstd::ioの機能を拡張
* Temporary Files
  * [Stebalien/tempfile](https://github.com/Stebalien/tempfile) - 一時ファイルライブラリ
  * [Stebalien/xattr](https://github.com/Stebalien/xattr) [[xattr](https://crates.io/crates/xattr)] - Unix拡張ファイル属性の一覧表示／操作
  * [zboxfs/zbox](https://github.com/zboxfs/zbox) [[zbox](https://crates.io/crates/zbox)] - 詳細設定不要でプライバシーを重視した組み込み可能ファイルシステム。

### 金融

* [avhz/RustQuant](https://github.com/avhz/RustQuant) [[RustQuant](https://crates.io/crates/RustQuant)] - 数理ファイナンスライブラリ。 ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/avhz/RustQuant/build.yml)
* [d-e-s-o/apca](https://github.com/d-e-s-o/apca) [[apca](https://crates.io/crates/apca)] - 株式取引など向けの[Alpaca API](https://alpaca.markets/)に対する、独自方針を持つ包括的なバインディング。 ![GitHub Workflow Status](https://github.com/d-e-s-o/apca/actions/workflows/test.yml/badge.svg?branch=main)
* [kand-ta/kand](https://github.com/kand-ta/kand) [[kand](https://crates.io/crates/kand)] - Rust、Python、JS／TS（WASM）で使えるモダンで高性能なテクニカル分析ライブラリ。 [![image](https://img.shields.io/crates/v/kand.svg)](https://crates.io/crates/kand)
* [rust-dd/stochastic-rs](https://github.com/rust-dd/stochastic-rs) [[stochastic-rs](https://crates.io/crates/stochastic-rs)] - 数理ファイナンス向け。130以上の確率過程、オプション価格付け／較正、ボラティリティ曲面、コピュラを備え、Pythonバインディング付きでSIMD／GPUアクセラレーションに対応。 ![GitHub Workflow Status](https://github.com/rust-dd/stochastic-rs/actions/workflows/rust.yml/badge.svg?branch=main)
* [wickra-lib/wickra](https://github.com/wickra-lib/wickra) [[wickra](https://crates.io/crates/wickra)] - ストリーミング優先のテクニカル分析。Rustコアで514指標をティックごとにO(1)更新し、Python、Node.js、WASMのネイティブバインディングに加え、C、C++、C#、Go、Java、R向けC ABIハブを提供。 [![CI](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wickra-lib/wickra/actions/workflows/ci.yml)

### 関数型プログラミング

[[functional programming](https://crates.io/keywords/fp)]
* Prelude
  * [JasonShin/fp-core.rs](https://github.com/JasonShin/fp-core.rs) - 関数型プログラミング向けライブラリ
  * [myrrlyn/tap](https://github.com/myrrlyn/tap) - サフィックス位置におけるパイプライン動作

### ゲーム開発

[Are we game yet?](https://arewegameyet.rs)も参照してください。
* Allegro
  * [SiegeLord/RustAllegro](https://github.com/SiegeLord/RustAllegro) - [Allegro 5](https://liballeg.org/)バインディング
* [Awesome Quads](https://github.com/ozkriff/awesome-quads) - miniquad／macroquad関連のコードとリソースへのリンクを厳選した一覧
* [Awesome wgpu](https://github.com/rofrol/awesome-wgpu) - wgpuのコードとリソースを厳選した一覧
* bracket-lib (previously RLTK)
  * [bracket-lib](https://github.com/amethyst/bracket-lib) [[bracket-lib](https://crates.io/crates/bracket-lib)] - ローグライクツールキット（RLTK）。 [![Rust](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml/badge.svg)](https://github.com/amethyst/bracket-lib/actions/workflows/rust.yml)
* Challonge
  * [iddm/challonge-rs](https://github.com/iddm/challonge-rs) [[challonge](https://crates.io/crates/challonge)] - Challonge REST API向けクライアントライブラリ。トーナメント運営を支援します。 [![CI](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/challonge-rs/actions/workflows/ci.yml)
* Entity-Component Systems (ECS)
  * [amethyst/specs](https://github.com/amethyst/specs) - Specs Parallel ECS
  * [legion](https://github.com/amethyst/legion) - ボイラープレートを最小限に抑えた、多機能で高性能なECSライブラリ [![build badge](https://github.com/amethyst/legion/workflows/CI/badge.svg?branch=master)](https://github.com/amethyst/legion/actions)
* Game Engines
  * [AscendingCreations/AscendingGraphics](https://github.com/AscendingCreations/AscendingGraphics) - WGPUとWinitを使った2Dレンダリングフレームワーク。 [![Crates.io](https://img.shields.io/crates/v/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics) [![license](https://img.shields.io/crates/l/ascending_graphics.svg)](https://github.com/AscendingCreations/AscendingGraphics/blob/main/LICENSE.MIT) [![Crates.io](https://img.shields.io/crates/d/ascending_graphics.svg)](https://crates.io/crates/ascending_graphics)
  * [Balaur](https://github.com/balaurengine/balaur) - Runeスクリプト、Rapier物理演算、組み込みエディターを備えた決定論的2D／3Dゲームエンジン [![Test](https://github.com/balaurengine/balaur/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/balaurengine/balaur/actions/workflows/test.yml)
  * [Bevy](https://github.com/bevyengine/bevy) - 爽やかなほどシンプルなデータ駆動型ゲームエンジン。 [![Crates.io](https://img.shields.io/crates/v/bevy.svg)](https://crates.io/crates/bevy) [![Crates.io](https://img.shields.io/crates/d/bevy.svg)](https://crates.io/crates/bevy)
  * [Fyrox](https://fyrox.rs/) - 3Dゲームエンジン [![Crates.io](https://img.shields.io/crates/v/fyrox.svg)](https://crates.io/crates/fyrox) [![license](https://img.shields.io/crates/l/fyrox.svg)](https://github.com/FyroxEngine/Fyrox/blob/master/LICENSE.md) [![Crates.io](https://img.shields.io/crates/d/fyrox.svg)](https://crates.io/crates/fyrox)
  * [ggez](https://github.com/ggez/ggez) - 最小限の手間で2Dゲームを作れる軽量ゲームフレームワーク [![Crates.io](https://img.shields.io/crates/v/ggez.svg)](https://crates.io/crates/ggez) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ggez/ggez/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/ggez.svg)](https://crates.io/crates/ggez)
  * [Kiss3d](https://github.com/dimforge/kiss3d) - 「Keep It Simple, Stupid」を掲げる3Dグラフィックスエンジン [![Crates.io](https://img.shields.io/crates/d/kiss3d.svg)](https://crates.io/crates/kiss3d)
  * [oxidator](https://github.com/Ruddle/oxidator) - WebGPU対応のリアルタイムストラテジーゲーム／エンジン
  * [Piston](https://www.piston.rs/) - [![Crates.io](https://img.shields.io/crates/v/piston.svg?style=flat-square)](https://crates.io/crates/piston) [![Crates.io](https://img.shields.io/crates/l/piston.svg)](https://github.com/PistonDevelopers/piston/blob/master/LICENSE) [![Crates.io](https://img.shields.io/crates/d/piston.svg)](https://crates.io/crates/piston)
  * [Unrust](https://github.com/unrust/unrust) - WebGL 2.0／ネイティブゲームエンジン
* Game Servers
  * [gamedig/rust-gamedig](https://github.com/gamedig/rust-gamedig) [[gamedig](https://crates.io/crates/gamedig)] - ゲームサーバーの名称、オンラインプレイヤー数、最大プレイヤー数などの情報を照会 [![Crates.io](https://img.shields.io/crates/v/gamedig.svg)](https://crates.io/crates/gamedig) [![Crates.io](https://img.shields.io/crates/d/gamedig.svg)](https://crates.io/crates/gamedig)
* [Godot](https://godotengine.org/)
  * [adalinesimonian/gdvm](https://github.com/adalinesimonian/gdvm) - CLI向けGodotバージョンマネージャー [![CI](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/adalinesimonian/gdvm/actions/workflows/build-and-test.yml)
  * [godot-rust/gdext](https://github.com/godot-rust/gdext) [[gdext](https://crates.io/crates/gdext)] - Godot 4以降へのバインディング [![CI](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdext/actions/workflows/full-ci.yml)
  * [godot-rust/gdnative](https://github.com/godot-rust/gdnative) [[gdnative](https://crates.io/crates/gdnative)] - Godot 3以降へのバインディング [![CI](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml/badge.svg)](https://github.com/godot-rust/gdnative/actions/workflows/full-ci.yml)
* Minecraft
  * [bedrock-crustaceans/bedrock-rs](https://github.com/bedrock-crustaceans/bedrock-rs) - Minecraft Bedrock Edition開発向けの汎用ツールキット（Rust製）。 [![GitHub stars](https://img.shields.io/github/stars/bedrock-crustaceans/bedrock-rs)](https://github.com/bedrock-crustaceans/bedrock-rs) [![CI](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/bedrock-crustaceans/bedrock-rs/actions/workflows/ci.yml)
  * [FerrumC](https://github.com/ferrumc-rs/ferrumc) - オリジナルMinecraftサーバーをRustでアップグレード [![build badge](https://github.com/ferrumc-rs/ferrumc/actions/workflows/rust.yml/badge.svg)]
  * [Pumpkin](https://github.com/pumpkin-mc/pumpkin) - 完全にRustで記述された高性能Minecraftサーバーソフトウェア
  * [SteelMC](https://github.com/Steel-Foundation/SteelMC) - 性能と互換性を重視して構築されたRust製Minecraftサーバー
* [Raylib](https://www.raylib.com/)
  * [deltaphc/raylib-rs](https://github.com/deltaphc/raylib-rs) [[raylib](https://crates.io/crates/raylib)] - raylib向けバインディング
* [SDL](https://www.libsdl.org/) [[sdl](https://crates.io/keywords/sdl)]
  * [brson/rust-sdl](https://github.com/brson/rust-sdl) - SDL1バインディング
  * [Rust-SDL2/rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) - SDL2バインディング
* SFML
  * [jeremyletang/rust-sfml](https://github.com/jeremyletang/rust-sfml) - [SFML](https://www.sfml-dev.org/)バインディング
* Skillratings
  * [atomflunder/skillratings](https://github.com/atomflunder/skillratings) [[skillratings](https://crates.io/crates/skillratings)] - Elo、Glicko-2、TrueSkillなど、マルチプレイヤーゲーム向けスキル評価アルゴリズム集。 [![crates.io badge](https://img.shields.io/crates/v/skillratings)](https://crates.io/crates/skillratings) [![CI](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml/badge.svg)](https://github.com/atomflunder/skillratings/actions/workflows/ci.yml)
* Tatami
  * [giraffekey/tatami](https://github.com/giraffekey/tatami) [[tatami](https://crates.io/crates/tatami-dungeon)] - ローグライクのダンジョン生成アルゴリズム。
* Toornament-rs
  * [iddm/toornament-rs](https://github.com/iddm/toornament-rs) - Toornament.com APIバインディング。 [![CI](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/toornament-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/toornament.svg)](https://crates.io/crates/toornament)
* Victorem
  * [VictoremWinbringer/Victorem](https://github.com/VictoremWinbringer/Victorem) [[Victorem](https://crates.io/crates/Victorem)] - シンプルな2D／3Dオンラインゲームのプロトタイプを作成する、使いやすいUDPゲームサーバー／クライアントフレームワーク

### 地理空間

[[geo](https://crates.io/keywords/geo), [gis](https://crates.io/keywords/gis)]

* [apache/sedona-db](https://github.com/apache/sedona-db) - SedonaDBはRust製の地理空間DataFrameライブラリです。
* [DaveKram/coord_transforms](https://github.com/DaveKram/coord_transforms) [[coord_transforms](https://crates.io/crates/coord_transforms)] - 座標変換（2D、3D、地理空間）
* [Georust](https://github.com/georust) - 地理空間ツールとライブラリ
* [georust/geojson](https://github.com/georust/geojson) [[geojson](https://crates.io/crates/geojson)] - GeoJSONベクターGISファイル形式をシリアライズ／デシリアライズするライブラリ。
* [MapLibre/Martin](https://github.com/maplibre/martin) - PostGIS、MBTiles、PMTiles、スプライトに対応するマップタイルサーバー。 [![CI build](https://github.com/maplibre/martin/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/martin/actions)[![crates.io version](https://img.shields.io/crates/v/martin.svg)](https://crates.io/crates/martin)[![Book](https://img.shields.io/badge/docs-Book-informational)](https://maplibre.org/martin/)
* [rust-reverse-geocoder](https://github.com/gx0r/rrgeo) - [thampiman/reverse-geocoder](https://github.com/thampiman/reverse-geocoder)に着想を得た高速なオフライン逆ジオコーダー
* [vlopes11/geomorph](https://github.com/vlopes11/geomorph) [[geomorph](https://crates.io/crates/geomorph)] - UTM、緯度／経度、MGRS座標間の変換

### グラフアルゴリズム

* [neo4j-labs/graph](https://github.com/neo4j-labs/graph) - 高性能グラフアルゴリズム向けライブラリ [![graph CI status](https://img.shields.io/github/workflow/status/neo4j-labs/graph/CI/main?label=CI)](https://github.com/neo4j-labs/graph/actions/workflows/rust.yml)
* [petgraph/petgraph](https://github.com/petgraph/petgraph) - グラフデータ構造ライブラリ。 [![graph CI status](https://github.com/petgraph/petgraph/workflows/Continuous%20integration/badge.svg?branch=master)](https://github.com/petgraph/petgraph/actions/workflows/ci.yml)

### グラフィックス

[[graphics](https://crates.io/keywords/graphics)]

* Fonts
  * [redox-os/rusttype](https://github.com/redox-os/rusttype) - FreeTypeなどに代わるライブラリ
  * [rustybuzz](https://github.com/harfbuzz/rustybuzz) - harfbuzzの増分移植版
* [gfx-rs/gfx](https://github.com/gfx-rs/gfx) - 高性能なバインドレスグラフィックスAPI。
* [gfx-rs/wgpu](https://github.com/gfx-rs/wgpu) - gfx-halを基盤とするネイティブWebGPU実装。 [![build badge](https://github.com/gfx-rs/wgpu/workflows/CI/badge.svg?branch=master)](https://github.com/gfx-rs/wgpu/actions)
* OpenGL [[opengl](https://crates.io/keywords/opengl)]
  * [gl-rs](https://github.com/rust-windowing/gl-rs) - OpenGL関数ポインターローダー
  * [glium/glium](https://github.com/glium/glium) - 安全なOpenGLラッパー。
  * [glutin](https://crates.io/crates/glutin) - [GLFW](https://www.glfw.org/)の代替製品
  * [PistonDevelopers/glfw-rs](https://github.com/PistonDevelopers/glfw-rs) - GLFW3バインディングとRustらしいラッパー
* PDF
  * [bastibense/libharu_ng](https://github.com/bastibense/libharu_ng) [[libharu_ng](https://crates.io/crates/libharu_ng)] - Rustアプリから簡単にPDFを生成。
  * [fschutt/printpdf](https://github.com/fschutt/printpdf) - PDF書き込みライブラリ
  * [fullbleed-engine/fullbleed-official](https://github.com/fullbleed-engine/fullbleed-official) [[fullbleed](https://crates.io/crates/fullbleed)] - 再利用可能なテンプレート、可変データ生成、Pythonバインディングを備えた、印刷重視のHTML／CSSからPDFへのエンジン。 [![CI](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fullbleed-engine/fullbleed-official/actions/workflows/ci.yml)
  * [gastongouron/ironpress](https://github.com/gastongouron/ironpress) [[ironpress](https://crates.io/crates/ironpress)] - 組み込みレイアウトエンジンを備え、ブラウザーやシステム依存関係を必要としない純Rust製HTML／CSS／MarkdownからPDFへの変換ツール。 [![CI](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/gastongouron/ironpress/actions/workflows/ci.yml)
  * [hayro](https://github.com/LaurenzV/hayro) - 純Rust製PDFインタープリター兼レンダラー
  * [J-F-Liu/lopdf](https://github.com/J-F-Liu/lopdf) - PDFドキュメント操作
  * [kaj/rust-pdf](https://github.com/kaj/rust-pdf) - 純RustでPDFファイルを生成
  * [yfedoseev/pdf_oxide](https://github.com/yfedoseev/pdf_oxide) [[pdf_oxide](https://crates.io/crates/pdf_oxide)] - Pythonバインディングを備えた高速PDFテキスト抽出／作成／編集
* [Vulkan](https://www.vulkan.org/) [[vulkan](https://crates.io/keywords/vulkan)]
  * [erupt](https://gitlab.com/Friz64/erupt) [[erupt](https://crates.io/crates/erupt)] - [![build badge](https://gitlab.com/Friz64/erupt/badges/main/pipeline.svg)](https://gitlab.com/Friz64/erupt/-/pipelines)
  * [vulkano](https://github.com/vulkano-rs/vulkano) [[vulkano](https://crates.io/crates/vulkano)] - Vulkan APIを安全かつ豊富な機能でラップするRustライブラリ

### GUI

[[gui](https://crates.io/keywords/gui)]

* [autopilot-rs/autopilot-rs](https://github.com/autopilot-rs/autopilot-rs) - シンプルなクロスプラットフォームGUI自動化ライブラリ。
* Cocoa
  * [servo/core-foundation-rs](https://github.com/servo/core-foundation-rs) - Mac OS X／iOS向けCore Foundationなど低レベルライブラリのRustバインディング
* [DioxusLabs/dioxus](https://github.com/dioxuslabs/dioxus) - RustでクロスプラットフォームUIを構築するための、移植性と性能に優れ使いやすいフレームワーク。 ![rust ci](https://github.com/dioxuslabs/dioxus/actions/workflows/main.yml/badge.svg)
* [emilk/egui](https://github.com/emilk/egui) - シンプルで高速、移植性の高い即時モードGUIライブラリ。eguiはWeb、ネイティブ、好みのゲームエンジン上で動作します。 [![Build Status](https://github.com/emilk/egui/workflows/CI/badge.svg)](https://github.com/emilk/egui/actions?workflow=CI)
* [emoon/rust_minifb](https://github.com/emoon/rust_minifb) - minifbはオプションのビットマップ描画機能を備えたクロスプラットフォームのウィンドウ環境です。簡単なマウス／キーボード入力も備え、主にプロトタイピング向け。
* [euv-dev/euv](https://github.com/euv-dev/euv) [[euv](https://crates.io/crates/euv)] - 仮想DOM、リアクティブシグナル、WebAssembly向けHTMLマクロを備えた、Rust用宣言的クロスプラットフォームUIフレームワーク。 [![CI](https://github.com/euv-dev/euv/actions/workflows/rust.yml/badge.svg)](https://github.com/euv-dev/euv/actions)
* [FerrisMind/shadcn-rs](https://github.com/FerrisMind/shadcn-rs) [[iced-shadcn](https://crates.io/crates/iced-shadcn)] - shadcn/uiの美学を取り入れたiced／eguiコンポーネント集。[egui-shadcn](https://crates.io/crates/egui-shadcn)を含みます。
* [FLTK](https://www.fltk.org/)
  * [fltk-rs](https://github.com/fltk-rs/fltk-rs) - FLTKバインディング [![Build](https://github.com/fltk-rs/fltk-rs/workflows/Build/badge.svg?branch=master)](https://github.com/fltk-rs/fltk-rs/actions)
* [Flutter](https://flutter.dev/)
  * [cunarist/rinf](https://github.com/cunarist/rinf) - FlutterのバックエンドをRustで、RustのフロントエンドをFlutterで [![Build Test](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml/badge.svg)](https://github.com/cunarist/rinf/actions/workflows/build_test.yaml?query=branch%3Amain)
  * [flutter-rs](https://github.com/flutter-rs/flutter-rs) - DartとRustでFlutterデスクトップアプリを構築。
  * [fzyzcjy/flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge) - Flutter／DartとRust間の高水準でメモリー安全なバインディングジェネレーター
* [fschutt/azul](https://github.com/fschutt/azul) - Mozilla WebRenderレンダリングエンジンを採用した、Rust製デスクトップアプリの迅速な開発向け無料GUIフレームワーク。機能的でIMGUI指向。
* [GTK+](https://www.gtk.org/) [[gtk](https://crates.io/keywords/gtk)]
  * [gtk-rs/gtk4-rs](https://github.com/gtk-rs/gtk4-rs) - GTK4バインディング ![CI](https://github.com/gtk-rs/gtk4-rs/workflows/CI/badge.svg)
  * [relm](https://github.com/antoyo/relm) - Elmに着想を得た非同期GTK+ベースGUIライブラリ
* [iced-rs/iced](https://github.com/iced-rs/iced) [[iced](https://crates.io/crates/iced)] - シンプルさと型安全性に重点を置いたクロスプラットフォームGUIライブラリ。Elmに着想を得ています。
* [ImGui](https://github.com/ocornut/imgui)
  * [imgui-rs](https://github.com/imgui-rs/imgui-rs) - ImGuiバインディング [![Build Status](https://github.com/imgui-rs/imgui-rs/workflows/ci/badge.svg?branch=master)](https://github.com/imgui-rs/imgui-rs/actions)
* [IUP](http://webserver2.tecgraf.puc-rio.br/iup/)
  * [Kiss-ui](https://github.com/KISS-UI/kiss-ui) - IUPを基盤とするシンプルなUIフレームワーク
* [ivanceras/sauron-native](https://github.com/ivanceras/sauron-native) - 真にネイティブでクロスプラットフォームなGUIライブラリ。1つのコードでネイティブGUI、HTML Web、TUIとして実行できます。
* [libui](https://github.com/andlabs/libui)
  * [rust-native-ui/libui-rs](https://github.com/rust-native-ui/libui-rs) - libuiバインディング。
* [linebender/xilem](https://github.com/linebender/xilem) [[xilem](https://crates.io/crates/xilem)] - React、SwiftUI、Elmに着想を得たRust向け実験的リアクティブUIフレームワーク。Masonry、Vello／wgpu、Parley、AccessKitを基盤とし、Web／ネイティブバックエンドに対応。 [![CI](https://img.shields.io/github/actions/workflow/status/linebender/xilem/ci.yml?logo=github&label=CI)](https://github.com/linebender/xilem/actions)
* [longbridge/gpui-component](https://github.com/longbridge/gpui-component) [[gpui-component](https://crates.io/crates/gpui-component)] - GPUIで高品質なデスクトップアプリを構築するUIコンポーネント。
* [makepad/makepad](https://github.com/makepad/makepad) [[makepad-widgets](https://crates.io/crates/makepad-widgets)] - WASM／WebGL、macOS／Metal、Windows／DX11、Linux／OpenGLへコンパイルできるクリエイティブソフトウェア開発プラットフォーム。
* [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear)
  * [nuklear-rust](https://github.com/snuk182/nuklear-rust) - Nuklearバインディング
* [OrbTk](https://github.com/redox-os/orbtk) - Orbital Widget ToolkitはSDL2を使うマルチプラットフォーム（G）UIツールキットです。 [![Build and test](https://github.com/redox-os/orbtk/workflows/build/badge.svg?branch=develop)](https://github.com/redox-os/orbtk/actions)
* [PistonDevelopers/conrod](https://github.com/PistonDevelopers/conrod/) - 使いやすい即時モード2D GUIライブラリ
* [project-blinc/Blinc](https://github.com/project-blinc/Blinc) [[blinc_app](https://crates.io/crates/blinc_app)] - GPUIに着想を得たビルダーAPI、グラスモーフィズム効果、スプリング物理アニメーション、デスクトップ／Android／iOS向けネイティブ描画を備えた、GPUアクセラレーション対応クロスプラットフォームUIフレームワーク。
* [Qt](https://doc.qt.io)
  * [cyndis/qmlrs](https://github.com/cyndis/qmlrs) - QtQuickバインディング
  * [rust-qt](https://github.com/rust-qt) - Rust向けQtバインディング
  * [woboq/qmetaobject-rs](https://github.com/woboq/qmetaobject-rs) - コンパイル時にQMetaObjectを構築してQmlとRustを統合。
* [Ribir](https://github.com/RibirX/Ribir) - 単一コードベースから美しくネイティブなマルチプラットフォームアプリを構築するRust GUIフレームワーク。
* [rise-ui](https://github.com/rise-ui/rise) - 美しく使いやすいインターフェースを開発するための、シンプルなコンポーネントベースのクロスプラットフォームGUIツールキット。
* [saurvs/nfd-rs](https://github.com/saurvs/nfd-rs) - [nativefiledialog](https://github.com/mlabbe/nativefiledialog)バインディング
* [Sciter](https://sciter.com/)
  * [sciter-sdk/rust-sciter](https://github.com/sciter-sdk/rust-sciter) - Sciterバインディング [![build badge](https://ci.appveyor.com/api/projects/status/github/sciter-sdk/rust-sciter?svg=true)](https://ci.appveyor.com/project/sciter-sdk/rust-sciter)
* [slint-ui/slint](https://github.com/slint-ui/slint) [slint](https://crates.io/crates/slint) - [Slint](https://slint.dev/)は組み込みデバイスやデスクトップアプリ向けの流麗なGUIを効率的に開発するツールキットです。 [![Build Status](https://github.com/slint-ui/slint/workflows/CI/badge.svg?branch=master)](https://github.com/slint-ui/slint/actions?query=workflow%3ACI)
* [smithay](https://github.com/Smithay/smithay) - [smithay](https://crates.io/crates/smithay)はWaylandコンポジターを構築する部品を提供する、安全で十分に文書化されたライブラリです。
* [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - [WRY](https://github.com/tauri-apps/wry)を基盤にWebフロントエンドを備えた、より小さく高速で安全なデスクトップアプリを構築。 [![test library](https://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](https://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)
* [tauri-apps/wry](https://github.com/tauri-apps/wry) - Webviewレンダリングライブラリ。
* [xilem](https://github.com/linebender/xilem) - データファーストUI設計ツールキット[druid](https://github.com/linebender/druid)の後継。

### 画像処理

* [abonander/img_hash](https://github.com/abonander/img_hash) - 知覚的画像ハッシュと同一性／類似性比較。
* [Enet4/dicom-rs](https://github.com/Enet4/dicom-rs) - 純Rust製のDICOM規格実装。高速、安全、直感的な操作を目指し、DICOMオブジェクトの操作とDICOMアプリとの連携を可能にします。
* [image-rs/image](https://github.com/image-rs/image) - 画像形式の変換に使う基本的な画像処理関数とメソッド
* [image-rs/imageproc](https://github.com/image-rs/imageproc) - `image`ライブラリを基盤とする画像処理ライブラリ。
* [marekm4/dominant_color](https://github.com/marekm4/dominant_color) [[dominant_color](https://crates.io/crates/dominant_color)] - 主要色の抽出 ![build badge](https://github.com/marekm4/dominant_color/actions/workflows/rust.yml/badge.svg?branch=master)
* [rust-cv/cv](https://github.com/rust-cv/cv) - コンピュータービジョンのアルゴリズム、抽象化、システムを実装。可能な場合は`#[no_std]`をサポート。 ![build badge](https://github.com/rust-cv/cv/workflows/tests/badge.svg)
* [teovoinea/steganography](https://github.com/teovoinea/steganography) [[steganography](https://crates.io/crates/steganography)] - シンプルなステガノグラフィーライブラリ
* [twistedfall/opencv-rust](https://github.com/twistedfall/opencv-rust) - OpenCVバインディング

### 言語仕様

* [shnewto/bnf](https://github.com/shnewto/bnf) - Backus–Naur形式の文脈自由文法を解析するライブラリ。

### ライセンス

* [WyvernIXTL/license-fetcher](https://github.com/WyvernIXTL/license-fetcher) [[license-fetcher](https://crates.io/crates/license-fetcher)] - ビルド時に依存関係のライセンスを取得し、プログラムに埋め込みます。

### ロギング

[[log](https://crates.io/keywords/log)]

* [donnie4w/tklog](https://github.com/donnie4w/tklog "donnie4w/tklog") - ログレベル、ファイル分割、圧縮アーカイブに対応する軽量で効率的なRust構造化ログライブラリ
* [estk/log4rs](https://github.com/estk/log4rs) - JavaのLogback／log4jライブラリをモデルとした、高度に設定可能なログフレームワーク [![CircleCI](https://circleci.com/gh/estk/log4rs.svg?style=shield)](https://app.circleci.com/pipelines/github/estk/log4rs)
* [fast/logforth](https://github.com/fast/logforth) - Rustアプリ向けの汎用的で拡張可能、使いやすいログフレームワーク。複数のdispatch、フィルター、アペンダーを設定し、要件に応じたログ構成を実現します。
* [rbatis/fast_log](https://github.com/rbatis/fast_log) - 高性能な非同期ログ記録
* [rust-lang/log](https://github.com/rust-lang/log) - ロギング実装
* [seanmonstar/pretty-env-logger](https://github.com/seanmonstar/pretty-env-logger) - 見やすく使いやすいロガー。
* [slog-rs/slog](https://github.com/slog-rs/slog) - 構造化され、合成可能なロギング
* [tokio-rs/tracing](https://github.com/tokio-rs/tracing) - 非同期対応の構造化ログ、エラー処理、メトリクスなどを提供するアプリケーションレベルのトレーシングフレームワーク [![Build Status](https://github.com/tokio-rs/tracing/workflows/CI/badge.svg?branch=master)](https://github.com/tokio-rs/tracing/actions?query=workflow%3ACI)

### マクロ

* cute
  * [mattgathu/cute](https://github.com/mattgathu/cute) - Python風リスト内包表記のマクロ。
* [elastio/bon](https://github.com/elastio/bon) [[bon](https://crates.io/crates/bon)] - 構造体／関数向けのコンパイル時検査済みビルダーを生成し、関数／メソッドに部分適用、オプション引数、名前付き引数を提供。 [![build status](https://github.com/elastio/bon/actions/workflows/ci.yml/badge.svg)](https://github.com/elastio/bon/actions)
* [Linq-in-Rust](https://github.com/StardustDL/Linq-in-Rust) - C# LINQ風式のマクロとメソッド。 [![CI](https://github.com/StardustDL/Linq-in-Rust/workflows/CI/badge.svg?branch=master)](https://github.com/StardustDL/Linq-in-Rust/actions?query=workflow%3ACI)

### マークアップ言語

* [bruits/satteri](https://github.com/bruits/satteri) [[satteri](https://crates.io/crates/satteri)] - 高性能Markdown／MDX処理。Rustで解析／コンパイルし、JavaScriptプラグインを実行。MDX拡張CommonMarkパーサー、MDAST／HASTツリー操作、JavaScript相互運用のNAPIバインディングを備えます。
* CommonMark
  * [pulldown-cmark/pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark) - [CommonMark](https://commonmark.org/)パーサー
* [insomnimus/tidier](https://github.com/insomnimus/tidier) [[tidier](https://crates.io/crates/tidier)] - HTML、XHTML、XML文書を整形するライブラリ。 [![build badge](https://github.com/insomnimus/tidier/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/insomnimus/tidier/actions)

### モバイル

* Android / iOS
  * [ivnsch/rust_android_ios](https://github.com/ivnsch/rust_android_ios) - rust-swigとcbindgenをそれぞれ使い、AndroidとiOSで共有ライブラリを利用する例。
* Generic
  * [Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile) - iOS CocoaPods／Android JNI
  * [redbadger/crux](https://github.com/redbadger/crux) [[crux_core](https://crates.io/crates/crux_core)] - クロスプラットフォームアプリ開発。Cruxを使うと、モバイル（iOS／Android）とWebでアプリのビジネスロジックや動作を、再利用可能な単一コアとして共有できます。 [![Build status](https://img.shields.io/github/actions/workflow/status/redbadger/crux/build.yaml)](https://github.com/redbadger/crux/actions)
* iOS
  * [TimNN/cargo-lipo](https://github.com/TimNN/cargo-lipo) - iOSアプリで使うユニバーサルライブラリを自動作成するcargo lipoサブコマンド。

### ネットワークプログラミング

* Bluetooth
  * [bluez/bluer](https://github.com/bluez/bluer) [[bluer](https://crates.io/crates/bluer)] - 公式BlueZバインディング。 [![build badge](https://github.com/bluez/bluer/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/bluez/bluer/actions/workflows/rust.yml)
* CoAP
  * [Covertness/coap-rs](https://github.com/Covertness/coap-rs) - [Constrained Application Protocol（CoAP）](https://datatracker.ietf.org/doc/html/rfc7252)ライブラリ。
* DNS
  * [kweonminsung/bind9_rndc_rust](https://github.com/kweonminsung/bind9_rndc_rust) [[rndc](https://crates.io/crates/rndc)] - Rust向けBIND9 RNDCプロトコル実装 [![CI](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml/badge.svg)](https://github.com/kweonminsung/bind9_rndc_rust/actions/workflows/ci.yml)
* Docker
  * [fussybeaver/bollard](https://github.com/fussybeaver/bollard) - DockerデーモンAPI
* FTP
  * [mattnenterprise/rust-ftp](https://github.com/mattnenterprise/rust-ftp) - [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol)クライアント
* gRPC
  * [hyperium/tonic](https://github.com/hyperium/tonic) - async／awaitに対応するネイティブgRPCクライアント／サーバー実装 [![Crates.io](https://img.shields.io/crates/v/tonic)](https://crates.io/crates/tonic)
  * [tikv/grpc-rs](https://github.com/tikv/grpc-rs) - C Coreライブラリとfuturesを基盤とするgRPCライブラリ
* HTTP
  * [deboa](https://crates.io/crates/deboa) - 複数の追加機能、シリアライズ形式、マクロを備えた、hyperベースの使いやすいHTTPクライアント。 [![Crates.io](https://img.shields.io/crates/v/deboa)]
  * [Hurl](https://github.com/Orange-OpenSource/hurl) - プレーンテキストとlibcurlを使ってHTTPリクエストを実行／テスト [![CI](https://github.com/Orange-OpenSource/hurl/workflows/CI/badge.svg)](https://github.com/Orange-OpenSource/hurl/actions)
* IPNetwork
  * [achanda/ipnetwork](https://github.com/achanda/ipnetwork) - IPネットワークを扱うライブラリ
  * [candrew/netsim](https://github.com/canndrew/netsim) - ネットワークシミュレーション／テスト向けライブラリ
* Low level
  * [actix/actix](https://github.com/actix/actix) - アクターライブラリ
  * [dylanmckay/protocol](https://github.com/dylanmckay/protocol) - カスタムTCP／UDPプロトコル定義
  * [libpnet/libpnet](https://github.com/libpnet/libpnet) - クロスプラットフォーム対応の低レベルネットワークライブラリ
  * [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) - ベアメタルのリアルタイムシステム向けに設計された、スタンドアロンのイベント駆動型TCP／IPスタック
* message-io
  * [lemunozm/message-io](https://github.com/lemunozm/message-io) - ネットワークアプリを簡単かつ高速に構築するイベント駆動型メッセージライブラリ。TCP、UDP、WebSocketをサポート。 [![build badge](https://img.shields.io/github/workflow/status/lemunozm/message-io/message-io%20ci)](https://github.com/lemunozm/message-io/actions?query=workflow%3A%22message-io+ci%22)
* MQTT
  * [bytebeamio/rumqtt](https://github.com/bytebeamio/rumqtt) - TLSの有無を選択でき、TCPとWebSocket経由で[MQTTプロトコル](https://mqtt.org)を使うアプリケーションを構築する開発者向けライブラリ。 [![Build and Test](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml/badge.svg)](https://github.com/bytebeamio/rumqtt/actions/workflows/build.yml)
  * [rmqtt/rmqtt](https://github.com/rmqtt/rmqtt) - MQTTサーバー／ブローカー。5G時代のIoT向けスケーラブルな分散MQTTメッセージブローカー
* NanoMsg
  * [thehydroimpulse/nanomsg.rs](https://github.com/thehydroimpulse/nanomsg.rs) - [nanomsg](https://nanomsg.org/)バインディング
* NATS
  * [nats-io/nats.rs](https://github.com/nats-io/nats.rs) - クラウドネイティブメッセージングシステムNATS向けクライアント。 [![Build Status](https://github.com/nats-io/nats.rs/workflows/Rust/badge.svg?branch=master)](https://github.com/nats-io/nats.rs/actions)
* Nng
  * [neachdainn/nng-rs](https://gitlab.com/neachdainn/nng-rs) [[Nng](https://crates.io/crates/nng)] - [Nng（nanomsg v2）](https://nng.nanomsg.org/index.html)バインディング [![build badge](https://gitlab.com/neachdainn/nng-rs/badges/master/pipeline.svg)](https://gitlab.com/neachdainn/nng-rs/-/pipelines)
* NNTP
  * [mattnenterprise/rust-nntp](https://github.com/mattnenterprise/rust-nntp) [[nntp](https://crates.io/crates/nntp)] - [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol)クライアント
* P2P
  * [libp2p/rust-libp2p](https://github.com/libp2p/rust-libp2p) - libp2pネットワークスタックの実装。 [![Circle CI](https://circleci.com/gh/libp2p/rust-libp2p.svg?style=svg)](https://app.circleci.com/pipelines/github/libp2p/rust-libp2p)
  * [n0-computer/iroh](https://github.com/n0-computer/iroh) [[iroh](https://crates.io/crates/iroh)] - デバイス間の直接接続を基盤にするクレート [![CI](https://github.com/n0-computer/iroh/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)
* POP3
  * [mattnenterprise/rust-pop3](https://github.com/mattnenterprise/rust-pop3) [[pop3](https://crates.io/crates/pop3)] - [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol)クライアント
* QUIC
  * [aws/s2n-quic](https://github.com/aws/s2n-quic) - IETF QUICプロトコルの実装 ![ci](https://img.shields.io/github/actions/workflow/status/aws/s2n-quic/ci.yml?branch=main)
  * [cloudflare/quiche](https://github.com/cloudflare/quiche) - CloudflareによるQUICトランスポートプロトコルとHTTP/3の実装 ![build](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)
  * [mozilla/neqo](https://github.com/mozilla/neqo) - QUICの実装
  * [quinn-rs/quinn](https://github.com/quinn-rs/quinn) - FuturesベースのQUIC実装 [![build badge](https://dev.azure.com/dochtman/Projects/_apis/build/status/Quinn?branchName=master)](https://dev.azure.com/dochtman/Projects/_build)
  * [tencent/tquic](https://github.com/Tencent/tquic) - 高性能で軽量なクロスプラットフォームQUICライブラリ [![Build Status](https://img.shields.io/github/actions/workflow/status/tencent/tquic/rust.yml)](https://github.com/Tencent/tquic/actions/workflows/rust.yml)
* Raknet
  * [b23r0/rust-raknet](https://github.com/b23r0/rust-raknet) - RakNetプロトコル実装 [![Build Status](https://img.shields.io/github/workflow/status/b23r0/rust-raknet/Rust)](https://github.com/b23r0/rust-raknet/actions/workflows/rust.yml)
* RPC
  * [remoc-rs/remoc](https://github.com/remoc-rs/remoc) [[remoc](https://crates.io/crates/remoc)] - RemocはTokioに似たチャネル（broadcast、mpsc、oneshot、watch）と、任意のリモートトランスポート上でのトレイト呼び出しを提供します。 [![build badge](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/remoc-rs/remoc/actions/workflows/rust.yml)
  * [smallnest/rpcx-rs](https://github.com/smallnest/rpcx-rs) - マイクロサービスを簡単に開発できるRPCライブラリ。
* SIP
  * [restsend/rsipstack](https://github.com/restsend/rsipstack) - RFC 3261準拠のSIPスタック
* Socket.io
  * [1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio) [[rust_socketio](https://crates.io/crates/rust_socketio)] - Rustで記述された[socket.io](https://socket.io)クライアント実装。
* SSH
  * [alexcrichton/ssh2-rs](https://github.com/alexcrichton/ssh2-rs) - [libssh2](https://libssh2.org/)バインディング
  * [Thrussh](https://pijul.org/thrussh) [[thrussh](https://crates.io/crates/thrussh)] - [libsodium](https://doc.libsodium.org/)を基盤とするSSHライブラリ
* Stomp
  * [zslayton/stomp-rs](https://github.com/zslayton/stomp-rs) - [STOMP 1.2](http://stomp.github.io/stomp-specification-1.2.html)クライアント実装
* VPN
  * [defguard/wireguard-rs](https://github.com/DefGuard/wireguard-rs) - ネイティブOSカーネルとユーザー空間のWireGuardプロトコル実装を用いてWireGuardインターフェースを管理する、統一された高水準APIを備えたマルチプラットフォームライブラリ
* Zenoh
  * [eclipse-zenoh-flow/zenoh-flow](https://github.com/eclipse-zenoh-flow/zenoh-flow) - *クラウド*から*モノ*までをまたぐ計算向け宣言的フレームワーク
  * [eclipse-zenoh/zenoh](https://github.com/eclipse-zenoh/zenoh) - オーバーヘッドゼロのネットワークプロトコル
* ZeroMQ
  * [erickt/rust-zmq](https://github.com/erickt/rust-zmq) - [ZeroMQ](https://zeromq.org/)バインディング

### 解析

  * [0xlane/pe-sign](https://github.com/0xlane/pe-sign) [[pe-sign]](https://crates.io/crates/pe-sign) - PEファイルから署名情報を検証／抽出するクロスプラットフォームRust no_stdライブラリ。 [![crates.io](https://img.shields.io/crates/v/pe-sign)](https://crates.io/crates/pe-sign) [![build](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml/badge.svg)](https://github.com/0xlane/pe-sign/actions/workflows/rust.yml)
  * [cchexcode/wavefront_rs](https://github.com/cchexcode/wavefront_rs) - Wavefront OBJ形式のパーサー。 [![crates.io](https://img.shields.io/crates/v/wavefront_rs.svg)](https://crates.io/crates/wavefront_rs) [![crates.io](https://img.shields.io/crates/d/wavefront_rs?label=crates.io%20downloads)](https://crates.io/crates/wavefront_rs) [![build badge](https://github.com/cchexcode/wavefront_rs/workflows/pipeline/badge.svg?branch=master)](https://github.com/cchexcode/wavefront_rs/actions)
  * [comex/rust-shlex](https://github.com/comex/rust-shlex) [[shlex](https://crates.io/crates/shlex)] - Pythonのshlexのように、文字列をシェル単語に分割。 [![build badge](https://github.com/comex/rust-shlex/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/comex/rust-shlex/actions/workflows/test.yml)
  * [Eliah-Lakhin/lady-deirdre](https://github.com/Eliah-Lakhin/lady-deirdre) - 新しいプログラミング言語とLSPサーバー向けのフレームワーク。
  * [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) - PDF分類とテキスト抽出のための高速Rustライブラリ。
  * [Folyd/robotstxt](https://github.com/Folyd/robotstxt) - Googleのrobots.txtパーサー／マッチャーC++ライブラリの移植版
  * [freestrings/jsonpath](https://github.com/freestrings/jsonpath) - [JsonPath](https://goessner.net/articles/JsonPath/)エンジン。WebAssemblyとJavaScriptもサポート。
  * [hmeyer/stl_io](https://crates.io/crates/stl_io) - STL（STereoLithography）ファイルのパーサー
  * [igumnoff/shiva](https://github.com/igumnoff/shiva) - Shivaライブラリ：プレーンテキスト、Markdown、HTML、PDFなどあらゆる種類のドキュメントのパーサー／ジェネレーターをRustで実装
  * [kevinmehall/rust-peg](https://github.com/kevinmehall/rust-peg) - Parsing Expression Grammar（PEG）パーサージェネレーター
  * [lalrpop/lalrpop](https://github.com/lalrpop/lalrpop) - LR(1)パーサージェネレーター
  * [m4rw3r/chomp](https://github.com/m4rw3r/chomp) - 高速なモナディックスタイルのパーサーコンビネーター
  * [Marwes/combine](https://github.com/Marwes/combine) - パーサーコンビネーターライブラリ
  * [mazznoer/csscolorparser-rs](https://github.com/mazznoer/csscolorparser-rs) [[csscolorparser](https://crates.io/crates/csscolorparser)] - CSSカラー解析ライブラリ [![CI](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml/badge.svg?branch=master)](https://github.com/mazznoer/csscolorparser-rs/actions/workflows/rust.yml)
  * [mohamadzoh/phonelib](https://github.com/mohamadzoh/phonelib) [[phonelib](https://crates.io/crates/phonelib)] - 国際電話番号の解析、検証、書式設定、正規化を行う、依存関係不要のRustライブラリ。
  * [nrc/zero](https://github.com/nrc/zero) [[zero](https://crates.io/crates/zero/)] - ゼロアロケーションのバイナリデータ解析
  * [ophi-dev/antlr-rust-runtime](https://github.com/ophi-dev/antlr-rust-runtime) [[antlr-rust-runtime](https://crates.io/crates/antlr-rust-runtime)] - 純Rust製パーサージェネレーターを備えたANTLR v4ランタイム。`.g4`文法からJava不要で直接パーサーを生成し、公式ANTLR適合性テストスイートで検証済み。 [![build badge](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ophi-dev/antlr-rust-runtime/actions/workflows/ci.yml)
  * [oxc-project/oxc](https://github.com/oxc-project/oxc) [[oxc](https://crates.io/crates/oxc)] - Rolldown、Nuxt、Novaなどを支えるRust製の高性能JavaScript／TypeScriptパーサー、変換器、ミニファイアー、リゾルバー。 [![Build Status](https://github.com/oxc-project/oxc/actions/workflows/ci.yml/badge.svg?event=push&branch=main)](https://github.com/oxc-project/oxc/actions/workflows/ci.yml)
  * [pest-parser/pest](https://github.com/pest-parser/pest) - 優雅なパーサー
  * [ptal/oak](https://github.com/ptal/oak) - 型付きPEGパーサージェネレーター（コンパイラープラグイン）
  * [run-llama/liteparse](https://github.com/run-llama/liteparse) [[liteparse](https://crates.io/crates/liteparse)] - 空間テキスト抽出、バウンディングボックス、柔軟なOCR（Tesseract／HTTPサーバー）、Rust／Node.js／Python／WASMバインディングを備えた、高速で軽量なPDF解析ライブラリ。PDFiumを基盤とし、CLIツール`lit`を提供。 [![CI](https://github.com/run-llama/liteparse/actions/workflows/ci.yml/badge.svg)](https://github.com/run-llama/liteparse/actions/workflows/ci.yml)
  * [rust-bakery/nom](https://github.com/rust-bakery/nom) - パーサーコンビネーターライブラリ
  * [s-panferov/queryst](https://github.com/s-panferov/queryst) - [gs](https://github.com/ljharb/qs#readme)に着想を得たクエリ文字列解析ライブラリ
  * [slimreaper35/dockerfile-parser-rs](https://github.com/slimreaper35/dockerfile-parser-rs) [[dockerfile-parser-rs](https://crates.io/crates/dockerfile-parser-rs)] - Dockerfile解析ライブラリ兼CLIツール
  * [softdevteam/grmtools](https://github.com/softdevteam/grmtools/) - エラー訂正を強化したLRパーサー
  * [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) - プログラミングツール向けのパーサージェネレーター兼増分解析ライブラリ
  * [winnow-rs/winnow](https://github.com/winnow-rs/winnow) [[winnow](https://crates.io/crates/winnow)] - バイト指向でゼロコピーのパーサーコンビネーターライブラリ。 [![Build status](https://github.com/winnow-rs/winnow/workflows/CI/badge.svg)](https://github.com/winnow-rs/winnow/actions)
  * [xberg-io/tree-sitter-language-pack](https://github.com/xberg-io/tree-sitter-language-pack) [[tree-sitter-language-pack](https://crates.io/crates/tree-sitter-language-pack)] - 14言語向けバインディングと統一パーサーAPIを備えた、300以上の言語用ビルド済みtree-sitter文法。

### 周辺機器

* [AprilNEA/OpenLogi/crates/openlogi-hidpp](https://github.com/AprilNEA/OpenLogi/tree/main/crates/openlogi-hidpp) [[openlogi-hidpp](https://crates.io/crates/openlogi-hidpp)] - Logitech HID++プロトコルをサポートするhidppクレートの、OpenLogi管理フォーク。
* [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) [[esp-hal](https://crates.io/crates/esp-hal)] - Espressif ESP32デバイス（ESP32、ESP32-C2/C3/C5/C6/C61、ESP32-H2、ESP32-P4、ESP32-S2/S3）向けベアメタル`no_std`ハードウェア抽象化レイヤー。GPIO、I2C、SPI、UART、タイマー、DMAなどの安全なRust APIを提供。 [![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/esp-rs/esp-hal/ci.yml?labelColor=1C2C2E&label=CI&logo=github&style=flat-square)](https://github.com/esp-rs/esp-hal/actions/workflows/ci.yml)
* Fingerprint reader
  * [alvaroparker/libfprint-rs](https://github.com/alvaroparker/libfprint-rs) [[libfprint-rs](https://crates.io/crates/libfprint-rs)] - Libfprint-rsはLinux libfprintライブラリのラッパーを提供します。
* [Michael-A-Kuykendall/crabcamera](https://github.com/Michael-A-Kuykendall/crabcamera) [[crabcamera](https://crates.io/crates/crabcamera)] - 品質の自動検証とハードウェア制御を備え、デスクトップカメラへのアクセスを提供するTauriプラグイン。
* Serial Port
  * [serialport/serialport-rs](https://github.com/serialport/serialport-rs) [[serialport](https://crates.io/crates/serialport)] - シリアルポートにアクセスするクロスプラットフォームライブラリ

### プラットフォーム固有

* Cross-platform
  * [iddm/thread-priority](https://github.com/iddm/thread-priority/) - シンプルなクロスプラットフォームスレッド優先度管理。 [![CI](https://github.com/iddm/thread-priority/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/thread-priority/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/thread-priority.svg)](https://crates.io/crates/thread-priority)
  * [svartalf/rust-battery](https://crates.io/crates/battery) - ノートPCのバッテリーに関するクロスプラットフォーム情報
* FreeBSD
  * [fubarnetes/libjail-rs](https://github.com/fubarnetes/libjail-rs/) [[jail](https://crates.io/crates/jail)] - FreeBSD jailライブラリ
* Linux
  * [hannobraun/inotify-rs](https://github.com/hannobraun/inotify-rs) - [inotify](https://en.wikipedia.org/wiki/Inotify)バインディング [![Rust](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml/badge.svg)](https://github.com/hannobraun/inotify-rs/actions/workflows/rust.yml)
  * [pop-os/distinst](https://github.com/pop-os/distinst/) - Linuxディストリビューションインストーラー
  * [yaa110/rust-iptables](https://github.com/yaa110/rust-iptables) [[iptables](https://crates.io/crates/iptables)] - [iptables](https://www.netfilter.org/projects/iptables/index.html)バインディング
* Unix-like
  * [nix-rust/nix](https://github.com/nix-rust/nix) - Unix系APIバインディング [![CI](https://github.com/nix-rust/nix/actions/workflows/ci.yml/badge.svg)](https://github.com/nix-rust/nix/actions/workflows/ci.yml)
  * [rustix](https://github.com/bytecodealliance/rustix) - POSIX／Unix／Linux／Winsock2システムコール向け安全なバインディング [![Actions Status](https://github.com/bytecodealliance/rustix/workflows/CI/badge.svg)](https://github.com/bytecodealliance/rustix/actions?query=workflow%3ACI)
  * [zargony/fuse-rs](https://github.com/zargony/fuse-rs) - [FUSE](https://github.com/libfuse/libfuse)バインディング
* Windows
  * [microsoft/windows-rs](https://github.com/microsoft/windows-rs) - Rust for Windows [![Actions Status](https://github.com/microsoft/windows-rs/workflows/CI/badge.svg)](https://github.com/microsoft/windows-rs/actions)
  * [retep998/winapi-rs](https://github.com/retep998/winapi-rs) - Windows APIバインディング [![Rust](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml/badge.svg?branch=dev)](https://github.com/retep998/winapi-rs/actions/workflows/rust.yml)

### リバースエンジニアリング

* [binlex](https://github.com/c3rb3ru5d3d53c/binlex) - 関数フィンガープリンティングと類似性照合を備えるバイナリ解析／リバースエンジニアリングフレームワーク。
* [idalib](https://github.com/idalib-rs/idalib) [[idalib](https://crates.io/crates/idalib)] - IDA v9.0のidalibを使ったスタンドアロン解析ツールの開発を可能にするIDA SDK向けRustバインディング
* [objdiff](https://github.com/encounter/objdiff) - デコンパイルプロジェクト向けローカル差分ツール
* [wakaru](https://github.com/pionxzh/wakaru) [[wakaru](https://crates.io/crates/wakaru)] - JavaScriptデコンパイラー。webpack／esbuild／Metro／Browserifyのバンドルをモジュールへ展開し、ミニファイアーやBabel／TypeScriptの出力を読みやすいコードに戻します。 [![CI](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml/badge.svg?branch=main)](https://github.com/pionxzh/wakaru/actions/workflows/rust-ci.yml)

### スクリプティング

[[scripting](https://crates.io/keywords/scripting)]

* [3body-lang](https://github.com/rustq/3body-lang) - 三体言語
* [boa-dev/boa](https://github.com/boa-dev/boa) [[boa_engine](https://crates.io/crates/boa_engine)] - Rustで記述された実験的JavaScriptレキサー、パーサー、インタープリター。
* [cel-rust](https://github.com/cel-rust/cel-rust) [[cel-interpreter](https://crates.io/crates/cel-interpreter)] - 共通式言語のパーサー兼インタープリター
* [duckscript](https://crates.io/crates/duckscript) - [シンプルで拡張可能、埋め込み可能なスクリプト言語。](https://github.com/sagiegurari/duckscript) [![build badge](https://github.com/sagiegurari/duckscript/workflows/CI/badge.svg?branch=master)](https://github.com/sagiegurari/duckscript/actions)
* [facebook/starlark-rust](https://github.com/facebook/starlark-rust) - Python構文を持つ、小型で決定論的、スレッドセーフな言語
* [fleabitdev/gamelisp](https://github.com/fleabitdev/glsp) - ゲーム開発向けLisp風スクリプト言語
* [giraffekey/xylo](https://github.com/giraffekey/xylo) [[xylo-lang](https://crates.io/crates/xylo-lang)] - プロシージャルアート向け関数型プログラミング言語。 [![build badge](https://github.com/giraffekey/xylo/actions/workflows/rust.yml/badge.svg)](https://github.com/giraffekey/xylo/actions)
* [gluon-lang/gluon](https://github.com/gluon-lang/gluon) - 小型で静的型付けの関数型プログラミング言語
* [kcl](https://github.com/kcl-lang/kcl) - 主に設定／ポリシー用途で使われる、制約ベースのレコード／関数型言語。
* [kyren/piccolo](https://github.com/kyren/piccolo) [[piccolo](https://crates.io/crates/piccolo)] - 純Rustで実装された実験的なスタックレスLua VM。循環検出型増分GC、サンドボックス機能、安全なRust／Luaバインディングを備えます。 [![crates.io](https://img.shields.io/crates/v/piccolo)](https://crates.io/crates/piccolo)
* [metacall/core](https://github.com/metacall/core) [[metacall](https://crates.io/crates/metacall)] - NodeJS、JavaScript、TypeScript、Python、Ruby、C#、Wasm、Java、Cobolなどをサポートするクロスプラットフォーム多言語ランタイム。 [![build badge](https://gitlab.com/metacall/core/badges/master/pipeline.svg)](https://gitlab.com/metacall/core)
* [mun](https://github.com/mun-lang/mun) - ホットリロードを第一級機能として備えるコンパイル型静的型付けスクリプト言語
* [murarth/ketos](https://github.com/murarth/ketos) - Rustのスクリプト／拡張言語として使えるLisp方言の関数型プログラミング言語
* [PistonDevelopers/dyon](https://github.com/PistonDevelopers/dyon) - Rust風の動的型付けスクリプト言語
* [rhaiscript/rhai](https://github.com/rhaiscript/rhai) - JavaScriptとRustを組み合わせたような、小型で高速な組み込みスクリプト言語 [![build badge](https://github.com/rhaiscript/rhai/workflows/Build/badge.svg)](https://github.com/rhaiscript/rhai/actions)
* [rune-rs/rune](https://github.com/rune-rs/rune) - 埋め込み可能な動的プログラミング言語
* [trynova/nova](https://github.com/trynova/nova) - 完全にRustで記述されたJavaScriptエンジン

### シミュレーション

[[simulation](https://crates.io/keywords/simulation)]

* [nyx-space](https://crates.io/crates/nyx-space) - 宇宙機ミッション設計や軌道決定で使用される、高精度、高速、信頼性が高く検証済みの天体力学ツールキットライブラリ [![Build Status](https://gitlab.com/nyx-space/nyx/badges/master/pipeline.svg)](https://gitlab.com/nyx-space/nyx/-/pipelines)
* [rsasaki0109/rust_robotics](https://github.com/rsasaki0109/rust_robotics) [[rust_robotics](https://crates.io/crates/rust_robotics)] - PythonRoboticsに着想を得たロボティクスアルゴリズムのRust実装。経路計画、自己位置推定、SLAM、制御を網羅し、no_stdとROS 2の例に対応。 [![CI](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rsasaki0109/rust_robotics/actions/workflows/ci.yml)

### ソーシャルネットワーク

* Telegram
  * [tdilb-rs](https://github.com/FedericoBruzzone/tdlib-rs) [[tdilb-rs](https://crates.io/crates/tdlib-rs)] - Telegram Database Library（TDLib）のクロスプラットフォームRustラッパー [![CI Linux](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-linux.yml) [![CI macOS](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-macos.yml) [![CI Windows](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml/badge.svg)](https://github.com/FedericoBruzzone/tdlib-rs/actions/workflows/ci-windows.yml)

### システム

* [ardaku/whoami](https://github.com/ardaku/whoami) [[whoami](https://crates.io/crates/whoami)] - 現在のユーザーと環境を取得するクレート。 [![build badge](https://github.com/ardaku/whoami/actions/workflows/ci.yml/badge.svg?branch=stable)](https://github.com/ardaku/whoami/actions/workflows/ci.yml)
* [GuillaumeGomez/sysinfo](https://github.com/GuillaumeGomez/sysinfo) [[sysinfo](https://crates.io/crates/sysinfo)] - システム情報を取得するクロスプラットフォームライブラリ [![build badge](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/GuillaumeGomez/sysinfo/actions/workflows/CI.yml)
* [navidys/procsys](https://github.com/navidys/procsys) [[procsys](https://crates.io/crates/procsys)] - 仮想ファイルシステム`/proc`と`/sys`からシステム、カーネル、プロセスのメトリクスを取得するライブラリ。
* [Phate6660/nixinfo](https://github.com/Phate6660/nixinfo) [[nixinfo](https://crates.io/crates/nixinfo)] - CPU、ディストリビューション、環境、カーネルなどのシステム情報を収集するライブラリクレート。
* [sorairolake/sysexits-rs](https://github.com/sorairolake/sysexits-rs) [[sysexits](https://crates.io/crates/sysexits)] - [`<sysexits.h>`](https://man.openbsd.org/sysexits)で定義されたシステム終了コード [![CI](https://github.com/sorairolake/sysexits-rs/workflows/CI/badge.svg?branch=develop)](https://github.com/sorairolake/sysexits-rs/actions?query=workflow%3ACI)

### タスクスケジューリング

* [delay-timer](https://github.com/BinChengZhao/delay-timer) - 遅延タスクの時間管理。crontabに似ていますが、非同期タスクも実行可能。 [![Build](https://github.com/BinChengZhao/delay-timer/actions/workflows/rust.yml/badge.svg)]( https://github.com/BinChengZhao/delay-timer/actions)
* [persistent-scheduler](https://github.com/rustmailer/persistent-scheduler) [[persistent-scheduler](https://crates.io/crates/persistent-scheduler)] - Tokioで構築された高性能タスクスケジューリングシステム。タスクの永続化、繰り返し実行、Cronベースのスケジューリングにより、信頼性の高い時間ベース処理を提供。

### テンプレートエンジン

* Handlebars
  * [sunng87/handlebars-rust](https://github.com/sunng87/handlebars-rust) - 継承とカスタムヘルパーに対応するHandlebarsテンプレートエンジン。
  * [zzau13/yarte](https://github.com/zzau13/yarte) - Yarteは**Y**et **A**nother **R**ust **T**emplate **E**ngineの略で、最速のテンプレートエンジンです。
* HTML
  * [askama](https://github.com/askama-rs/askama) - Jinjaベースのテンプレート描画エンジン
  * [kaj/ructe](https://github.com/kaj/ructe) - HTMLテンプレートシステム
  * [Keats/tera](https://github.com/Keats/tera) - Jinja2とDjangoテンプレート言語を基盤とするテンプレートエンジン。 [![Actions Status](https://github.com/Keats/tera/workflows/ci/badge.svg?branch=master)](https://github.com/Keats/tera/actions)
  * [lambda-fairy/maud](https://github.com/lambda-fairy/maud) - コンパイル時HTMLテンプレート
  * [mitsuhiko/minijinja](https://github.com/mitsuhiko/minijinja) [[minijinja](https://crates.io/crates/minijinja)] - Jinja2ベースの最小依存テンプレートエンジン。 [![Tests](https://img.shields.io/github/actions/workflow/status/mitsuhiko/minijinja/tests.yml?branch=main&logo=github)](https://github.com/mitsuhiko/minijinja/actions/workflows/tests.yml)
  * [rshtml/rshtml](https://github.com/rshtml/rshtml) [[rshtml](https://crates.io/crates/rshtml)] - RsHtml：HTML内にRust、Rust内にHTMLを埋め込む、コンパイル時型安全な軽量テンプレートエンジン。
  * [Stebalien/horrorshow-rs](https://github.com/Stebalien/horrorshow-rs) - コンパイル時HTMLテンプレート
* Mustache
  * [rustache/rustache](https://github.com/rustache/rustache) - Mustache仕様のRust実装

### テキスト処理

* [becheran/wildmatch](https://github.com/becheran/wildmatch) [[wildmatch](https://crates.io/crates/wildmatch)] - 疑問符／アスタリスクのワイルドカード演算子によるシンプルな文字列マッチング [![Actions Status](https://github.com/becheran/wildmatch/workflows/Build/badge.svg?branch=master)](https://github.com/becheran/wildmatch/actions)
* [BurntSushi/suffix](https://github.com/BurntSushi/suffix) - 線形時間の接尾辞配列構築（Unicode対応）
* [BurntSushi/tabwriter](https://github.com/BurntSushi/tabwriter) - Elastic tab stop（テキスト列の整列）
* [cpc](https://github.com/probablykasper/cpc) - 単位と単位変換に対応し、`1+2`から`1% of round(1 lightyear / 14!s to km/h)`まで、数式文字列を解析して計算します。
* [Daniel-Liu-c0deb0t/triple_accel](https://github.com/Daniel-Liu-c0deb0t/triple_accel) [[triple_accel](https://crates.io/crates/triple_accel)] - SIMDアクセラレーション対応Rust編集距離ルーチン。Hamming、Levenshtein、制限付きDamerau-Levenshteinなどの高速距離計算と文字列検索に対応。 [![build badge](https://github.com/Daniel-Liu-c0deb0t/triple_accel/workflows/Test/badge.svg?branch=master)](https://github.com/Daniel-Liu-c0deb0t/triple_accel/actions)
* [fancy-regex/fancy-regex](https://github.com/fancy-regex/fancy-regex) [[fancy-regex](https://crates.io/crates/fancy-regex)] - 先読みやバックトラッキングなど、比較的豊富な機能をサポートするよう設計された正規表現実装。 [![crates](https://img.shields.io/crates/v/fancy-regex.svg)](https://crates.io/crates/fancy-regex) [![build badge](https://github.com/fancy-regex/fancy-regex/workflows/ci/badge.svg)](https://github.com/fancy-regex/fancy-regex/actions/workflows/ci.yml)
* [greyblake/whatlang-rs](https://github.com/greyblake/whatlang-rs) - トライグラムを基盤とする自然言語検出ライブラリ
* [Lucretiel/joinery](https://github.com/Lucretiel/joinery) [[joinery](https://crates.io/crates/joinery)] - 文字列と反復可能要素を汎用的に結合
* [mgeisler/textwrap](https://github.com/mgeisler/textwrap) [[textwrap](https://crates.io/crates/textwrap)] - ハイフネーションに対応するテキストの折り返し
* [null8626/decancer](https://github.com/null8626/decancer) [[decancer](https://crates.io/crates/decancer)] - 文字列から一般的なUnicodeの紛らわしい文字／同形異字を除去する小型パッケージ。 [![crates](https://img.shields.io/crates/v/decancer.svg)](https://crates.io/crates/decancer) [![build badge](https://github.com/null8626/decancer/workflows/CI/badge.svg)](https://github.com/null8626/decancer/actions/workflows/CI.yml)
* [ps1dr3x/easy_reader](https://github.com/ps1dr3x/easy_reader) - イテレーターを消費せずに巨大ファイルの行を前後／ランダムに移動できるリーダー
* [pwoolcoc/ngrams](https://github.com/pwoolcoc/ngrams) [[ngrams](https://crates.io/crates/ngrams)] - 任意のイテレーターから[n-gram](https://en.wikipedia.org/wiki/N-gram)を構築
* [rust-lang/regex](https://github.com/rust-lang/regex) - 正規表現（RE2形式）
* [strsim-rs](https://crates.io/crates/strsim) - 文字列類似度メトリクス
* [xberg-io/html-to-markdown](https://github.com/xberg-io/html-to-markdown) [[html-to-markdown-rs](https://crates.io/crates/html-to-markdown-rs)] - Rustコアと12言語向けバインディングを備えた、高速でCommonMark準拠のHTMLからMarkdownへの変換ツール。
* [xberg-io/xberg](https://github.com/xberg-io/xberg) [[xberg](https://crates.io/crates/xberg)] - 97種類以上（PDF、Office、OCR付き画像、HTML、メール、アーカイブ）の形式からテキスト、表、メタデータを抽出し、11言語向けバインディングを備えるドキュメントインテリジェンスライブラリ。
* [yaa110/rake-rs](https://github.com/yaa110/rake-rs) [[rake](https://crates.io/crates/rake)] - Rust向けRAKEアルゴリズムの多言語実装

### テキスト検索

* [andylokandy/simsearch](https://github.com/andylokandy/simsearch) [[simsearch](https://crates.io/crates/simsearch)] - メモリー内で類似文字列を検索するシンプルで軽量なファジー検索エンジン
* [BurntSushi/fst](https://github.com/BurntSushi/fst) [[fst](https://crates.io/crates/fst)] - 有限状態機械を使った高速な順序付きセット／マップ実装
* [CurrySoftware/perlin](https://github.com/CurrySoftware/perlin) [[perlin](https://crates.io/crates/perlin)] - 遅延評価、ゼロアロケーション、データ非依存の情報検索ライブラリ
* [meilisearch/MeiliSearch](https://github.com/meilisearch/MeiliSearch) - 高精度で即時、タイプミスにも強い全文検索API。 [![Build Status](https://github.com/meilisearch/MeiliSearch/workflows/Cargo%20test/badge.svg?branch=master)](https://github.com/meilisearch/MeiliSearch/actions)
* [pg_search](https://github.com/paradedb/paradedb/tree/dev/pg_search) - 全文検索向け最先端ランキング関数BM25を使い、SQLテーブルの全文検索を可能にするPostgreSQL拡張。
* [SeekStorm](https://github.com/SeekStorm/SeekStorm) [[SeekStorm](https://crates.io/crates/seekstorm)] - ミリ秒未満の全文検索ライブラリ兼マルチテナントサーバー（Rust製）
* [tantivy](https://github.com/quickwit-oss/tantivy) [[tantivy](https://crates.io/crates/tantivy)] - 馬のように速いRust製全文検索エンジンライブラリ。 [![Build Status](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)

### Unsafe

* [zerocopy](https://crates.io/crates/zerocopy) - 「Zerocopyはゼロコストのメモリー操作を簡単にします。`unsafe`を書く必要はありません。」

### 動画

* [ffmpeg-sidecar](https://github.com/nathanbabcock/ffmpeg-sidecar) - 単独のFFmpegバイナリを直感的なIteratorインターフェースでラップ。 [![Build Status](https://github.com/nathanbabcock/ffmpeg-sidecar/actions/workflows/ci.yml/badge.svg)](https://github.com/nathanbabcock/ffmpeg-sidecar/actions)
* [screencapturekit-rs](https://github.com/doom-fish/screencapturekit-rs) [[screencapturekit](https://crates.io/crates/screencapturekit)] - macOSの画面／音声キャプチャ向けApple ScreenCaptureKitの安全なRustバインディング [![Build Status](https://github.com/doom-fish/screencapturekit-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/doom-fish/screencapturekit-rs/actions)

### 仮想化

* [beneills/quantum](https://github.com/beneills/quantum) - 高度な量子コンピューターシミュレーター
* [bytecodealliance/wasmtime](https://github.com/bytecodealliance/wasmtime) - スタンドアロンWebAssemblyランタイム [![Build Status](https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg)](https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI)
* [capsule](https://github.com/capsulerun/capsule) - 信頼できないコードを実行するためのWebAssemblyサンドボックスランタイム
* [chromium/chromiumos/platform/crosvm](https://chromium.googlesource.com/chromiumos/platform/crosvm/) - CrOSVMによりChrome OS上でLinuxアプリを高速かつ安全な仮想環境内で実行
* [oxidecomputer/propolis](https://github.com/oxidecomputer/propolis) - illumos bhyveカーネルモジュール向けユーザー空間プログラム
* [saurvs/hypervisor-rs](https://github.com/saurvs/hypervisor-rs) - OS X上のハードウェアアクセラレーション対応仮想化
* [smol-machines/smolvm](https://github.com/smol-machines/smolvm) - 実行中VMのCopy-on-Writeフォークに対応する、libkrun上のポータブルmicroVMサンドボックス
* [wasmi-labs/wasmi](https://github.com/wasmi-labs/wasmi) - 軽量WebAssemblyランタイム

### Webプログラミング

[Are we web yet?](https://www.arewewebyet.org)と[Rust Webフレームワークの比較](https://github.com/flosse/rust-web-framework-comparison)も参照してください。
* Backend
  * [actix/actix-web](https://github.com/actix/actix-web) - WebSocket対応の軽量非同期Webフレームワーク
  * [Anansi](https://github.com/saru-tora/anansi) - シンプルなフルスタックWebフレームワーク
  * [loco-rs/loco](https://github.com/loco-rs/loco) [[loco-rs](https://crates.io/crates/loco-rs)] - Railsに着想を得た、個人開発者やスタートアップ向けRustフレームワーク [![Build](https://github.com/loco-rs/loco/actions/workflows/ci.yml/badge.svg)](https://github.com/loco-rs/loco/actions)
  * [Rocket](https://github.com/rwf2/Rocket) - Rocketは使いやすさ、表現力、高速性を重視するWebフレームワークです。
  * [RustAPI](https://github.com/Tuntii/RustAPI) [[rustapi-rs](https://crates.io/crates/rustapi-rs)] - コンパイル時OpenAPIとネイティブMCPを備えた使いやすいWebフレームワーク
  * [summer-rs](https://github.com/summer-rs/summer-rs) - summer-rsはJavaのSpring Bootに着想を得たRust製アプリケーションフレームワークです。
  * [tako](https://github.com/rust-dd/tako) [[tako-rs](https://crates.io/crates/tako-rs)] - HTTP/1.1、HTTP/2、HTTP/3、WebSocket、SSE、gRPC、TCP／UDP、Unixソケットを単一ルーターで扱うマルチトランスポートWebフレームワーク。Tokio／Compio上で動作。 [![CI](https://github.com/rust-dd/tako/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rust-dd/tako/actions/workflows/ci.yml)
  * [tokio-rs/axum](https://github.com/tokio-rs/axum) - Tokio、Tower、Hyperで構築された使いやすくモジュール式のWebフレームワーク [![Build badge](https://github.com/tokio-rs/axum/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/tokio-rs/axum/actions/workflows/CI.yml)
  * [tokio-rs/topcoat](https://github.com/tokio-rs/topcoat) [[topcoat](https://crates.io/crates/topcoat)] - サーバーサイド描画、WASM不要のクライアントリアクティビティ、モジュール式ルーティング、Tailwind／アセットの組み込みバンドル機能を備えた、モジュール式で機能一式を含むRustフルスタックWebフレームワーク。 [![Build Status](https://img.shields.io/github/actions/workflow/status/tokio-rs/topcoat/ci.yml?branch=main&style=flat-square)](https://github.com/tokio-rs/topcoat/actions)
  * [trillium](https://github.com/trillium-rs/trillium) [[trillium](https://crates.io/crates/trillium)] - 非同期Rustでインターネットアプリケーションを構築する合成可能なツールキット。
* Client-side / WASM
  * [cargo-web](https://crates.io/crates/cargo-web) - クライアントサイドWeb向けCargoサブコマンド
  * [leptos](https://github.com/leptos-rs/leptos) - 細粒度のリアクティビティを活用して宣言的UIを構築するLeptosは、フルスタックのisomorphic Webフレームワークです。[![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/leptos)
  * [sauron](https://github.com/ivanceras/sauron) - The Elm Architectureに忠実なクライアントサイドWebフレームワーク。
  * [seed](https://github.com/seed-rs/seed) - Webアプリを作成するフレームワーク
  * [stdweb](https://crates.io/crates/stdweb) - クライアントサイドWeb向け標準ライブラリ
  * [synphonyte/leptos-use](https://github.com/synphonyte/leptos-use) [[leptos-use](https://crates.io/crates/leptos-use)] - React-UseとVueUseに着想を得たLeptos用必須ユーティリティ集。SSR対応。 [![Build Status](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml/badge.svg)](https://github.com/synphonyte/leptos-use/actions/workflows/cd.yml)
  * [thaw-ui/thaw](https://github.com/thaw-ui/thaw) [[thaw](https://crates.io/crates/thaw)] - Fluent Designを基盤とする使いやすいLeptosコンポーネントライブラリ
  * [tinyweb](https://github.com/LiveDuo/tinyweb) - 800行のコードで実装された、WASM向け最小構成Rust Webフレームワーク
  * [yew](https://crates.io/crates/yew) - クライアントWebアプリを作成するフレームワーク
* HTTP Client
  * [0x676e67/wreq](https://github.com/0x676e67/wreq) - TLSフィンガープリント機能を備えた、使いやすいRust HTTPクライアント。 [![CI](https://github.com/0x676e67/wreq/actions/workflows/ci.yml/badge.svg)](https://github.com/0x676e67/wreq/actions/workflows/ci.yml) [![crates.io](https://img.shields.io/crates/v/wreq.svg?logo=rust)](https://crates.io/crates/wreq)
  * [alexcrichton/curl-rust](https://github.com/alexcrichton/curl-rust) - [libcurl](https://curl.se/libcurl/)バインディング
  * [async-graphql](https://github.com/async-graphql/async-graphql) - GraphQLサーバーライブラリ [![Build Status](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_apis/build/status/graphql-rust.juniper)](https://dev.azure.com/graphql-rust/GraphQL%20Rust/_build/latest?definitionId=1)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - HTTP/2クライアントフレームワーク
  * [DoumanAsh/yukikaze](https://gitlab.com/Douman/yukikaze) [[yukikaze](https://crates.io/crates/yukikaze)] - 美しく優雅なYukikazeは、hyperを基盤とする小型HTTPクライアントライブラリです。 [![build badge](https://gitlab.com/Douman/yukikaze/badges/master/pipeline.svg)](https://gitlab.com/Douman/yukikaze)
  * [ducaale/xh](https://github.com/ducaale/xh) - HTTPリクエストを送信する使いやすく高速なツール [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/xh) [![GitHub actions Status](https://github.com/ducaale/xh/workflows/CI/badge.svg?branch=master)](https://github.com/ducaale/xh/actions)
  * [graphql-client](https://github.com/graphql-rust/graphql-client) - 型安全で正確なGraphQLリクエスト／レスポンス。 [![GitHub actions Status](https://github.com/graphql-rust/graphql-client/workflows/CI/badge.svg?branch=master)](https://github.com/graphql-rust/graphql-client/actions)
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP実装 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [plabayo/rama](https://github.com/plabayo/rama) - ネットワークパケットを移動／変換するモジュール式サービスフレームワーク。TLS、JA3／JA4、H2、QUIC／H3のフィンガープリント偽装を伴うクライアント構築などにも利用できます。
  * [seanmonstar/reqwest](https://github.com/seanmonstar/reqwest) - 使いやすいHTTPクライアント。
* HTTP Server
  * [branca](https://crates.io/crates/branca) - 認証済み暗号化APIトークン向けBranca実装。
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 低／高水準HTTP/2サーバー
  * [carllerche/tower-web](https://github.com/carllerche/tower-web) [[tower-web](https://crates.io/crates/tower-web)] - 高速でボイラープレート不要のWebフレームワーク
  * [Cot](https://github.com/cot-rs/cot) - 怠け者の開発者向けRust Webフレームワーク。
  * [GildedHonour/frank_jwt](https://github.com/GildedHonour/frank_jwt) - JSON Web Token実装。
  * [Gotham](https://github.com/gotham-rs/gotham) - 安全性、セキュリティ、高速性を犠牲にしない柔軟なWebフレームワーク。
  * [Graphul](https://github.com/graphul-rs/graphul) - Expressに着想を得たWebフレームワーク。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/graphul)
  * [handlebars-rust](https://github.com/sunng87/handlebars-rust) - Iron Webフレームワーク用ミドルウェア。
  * [hyperium/hyper](https://github.com/hyperium/hyper) - HTTP実装 [![CI](https://github.com/hyperium/hyper/workflows/CI/badge.svg?branch=master)](https://github.com/hyperium/hyper/actions?query=workflow%3ACI)
  * [Iron](https://github.com/iron/iron) - ミドルウェアベースのサーバーフレームワーク
  * [Juniper](https://github.com/graphql-rust/juniper) - GraphQLサーバーライブラリ
  * [miketang84/sapper](https://github.com/miketang84/sapper) - 非同期hyperを基盤とする軽量Webフレームワーク。
  * [Nickel](https://github.com/nickel-org/nickel.rs/) - [Express](https://expressjs.com/)に着想を得ています。
  * [plabayo/rama](https://github.com/plabayo/rama) - ネットワークパケットの移動／変換を行うモジュール式サービスフレームワーク。受信クライアントのフィンガープリント識別にも使用できます。
  * [poem-web/poem](https://github.com/poem-web/poem) - フル機能で使いやすいWebフレームワーク。 [![CI](https://github.com/poem-web/poem/actions/workflows/ci.yml/badge.svg)](https://github.com/poem-web/poem/actions/workflows/ci.yml)
  * [Rustless](https://github.com/rustless/rustless) - [Grape](https://github.com/ruby-grape/grape)と[Hyper](https://github.com/hyperium/hyper)に着想を得たREST風APIマイクロフレームワーク
  * [Salvo](https://github.com/salvo-rs/salvo) - hyperとtokioを基盤とする使いやすいWebフレームワーク。 [![build build](https://github.com/salvo-rs/salvo/actions/workflows/release.yml/badge.svg)](https://github.com/salvo-rs/salvo/actions)
  * [Saphir](https://github.com/richerarc/saphir) - 低レベル制御を備え、苦労せずに使えるプログレッシブWebフレームワーク。
  * [seanmonstar/warp](https://github.com/seanmonstar/warp) - warp並みの速度を実現する、非常に使いやすく合成可能なWebサーバーフレームワーク。 [![crate](https://img.shields.io/crates/v/create-rust-app.svg)](https://crates.io/crates/warp)
  * [tiny-http](https://github.com/tiny-http/tiny-http) - 低レベルHTTPサーバーライブラリ
  * [tomaka/rouille](https://github.com/tomaka/rouille) - Webフレームワーク
  * [Zino](https://github.com/zino-rs/zino) - 合成可能なアプリケーション向け次世代フレームワーク
* Miscellaneous
  * [cargonauts](https://github.com/cargonauts-rs/cargonauts) - 保守しやすく適切に分割されたWebアプリを構築するためのWebフレームワーク。
  * [edezhic/prest](https://github.com/edezhic/prest) [[prest](https://crates.io/crates/prest)] - フルスタック開発の簡素化を目指すプログレッシブRESTfulフレームワーク
  * [Goldziher/spikard](https://github.com/Goldziher/spikard) [[spikard](https://crates.io/crates/spikard)] - RustコアとPython、TypeScript、Ruby、PHP向けバインディングを備えた多言語Webツールキット。
  * [hominee/dyer](https://github.com/hominee/dyer) [[dyer](https://crates.io/crates/dyer)] - dyerはデータ処理やWebクローリングなど、信頼性、柔軟性、高速性を備えたリクエスト／レスポンス型サービス向けに設計され、速度を損なわず使いやすく柔軟で包括的な機能を提供します。
  * [osohq/oso](https://github.com/osohq/oso) [[oso](https://crates.io/crates/oso)] - アプリケーションに組み込む認可ポリシーエンジン。 [![Build Status](https://github.com/osohq/oso/workflows/Development/badge.svg?branch=main)](https://github.com/osohq/oso/actions?query=branch%3Amain+workflow%3ADevelopment)
  * [pwoolcoc/soup](https://gitlab.com/pwoolcoc/soup) [[soup](https://crates.io/crates/soup)] - PythonのBeautifulSoupに似ており、HTML文書をすばやく簡単に操作／検索するライブラリ。 [![Build Status](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)](https://gitlab.com/pwoolcoc/soup/badges/master/pipeline.svg)
  * [pyrossh/rust-embed](https://git.sr.ht/~pyrossh/rust-embed) [[rust-embed](https://crates.io/crates/rust-embed)] - 静的アセットをRustバイナリに埋め込むマクロ
  * [rookie](https://github.com/thewh1teagle/rookie) - あらゆるプラットフォーム上のブラウザーからCookieを読み込み。 ![crates.io](https://img.shields.io/crates/v/rookie.svg)
  * [rust-scraper/scraper](https://github.com/rust-scraper/scraper) [[scraper](https://crates.io/crates/scraper)] - CSSセレクターによるHTMLの解析と検索。 [![Build Status](https://github.com/rust-scraper/scraper/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rust-scraper/scraper/actions)
  * [serenity-rs/serenity](https://github.com/serenity-rs/serenity) [[serenity](https://crates.io/crates/serenity)] - Discord API向けライブラリ
  * [softprops/openapi](https://github.com/softprops/openapi) - OpenAPI仕様ファイルを処理するライブラリ
  * [svix/svix-webhooks](https://github.com/svix/svix-webhooks) [[svix](https://crates.io/crates/svix)] - Webhook送信と署名検証を行うライブラリ。
  * [tbot](https://gitlab.com/SnejUgal/tbot) [[tbot](https://crates.io/crates/tbot)] - Telegramボットを簡単に作成 [![pipeline status](https://gitlab.com/SnejUgal/tbot/badges/master/pipeline.svg)](https://gitlab.com/SnejUgal/tbot/-/commits/master)
  * [teloxide/teloxide](https://github.com/teloxide/teloxide/) - 洗練されたTelegramボットフレームワーク [![Build Status](https://github.com/teloxide/teloxide/actions/workflows/ci.yml/badge.svg)](https://github.com/teloxide/teloxide/actions)
  * [tu6ge/valitron](https://github.com/tu6ge/valitron) [[valitron](https://crates.io/crates/valitron)] - 使いやすく、関数型で設定可能なバリデーター
  * [utkarshkukreti/select.rs](https://github.com/utkarshkukreti/select.rs) [[select](https://crates.io/crates/select)] - Webスクレイピング向けにHTML文書から有用なデータを抽出するライブラリ。
  * [Utoipa](https://github.com/juhaku/utoipa) - シンプル、高速、コードファーストで、コンパイル時に生成されるOpenAPIドキュメント [![crates.io](https://img.shields.io/crates/v/utoipa.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipa) [![Utoipa build](https://github.com/juhaku/utoipa/actions/workflows/build.yaml/badge.svg)](https://github.com/juhaku/utoipa/actions/workflows/build.yaml)
  * [Utoipauto](https://github.com/ProbablyClem/utoipauto) - UtoipaへのPath／Schema追加を自動化するRustマクロ [![crates.io](https://img.shields.io/crates/v/utoipauto.svg?label=crates.io&color=orange&logo=rust)](https://crates.io/crates/utoipauto)
  * [xberg-io/crawlberg](https://github.com/xberg-io/crawlberg) [[crawlberg](https://crates.io/crates/crawlberg)] - HTMLからMarkdownへの変換、ヘッドレスChromeフォールバック、11言語向けバインディングを備えた高性能Webクローリング／スクレイピングエンジン。
* Reverse Proxy
  * [sozu-proxy/sozu](https://github.com/sozu-proxy/sozu) [[sozu](https://crates.io/crates/sozu)] - HTTPリバースプロキシ。 [![CI](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sozu-proxy/sozu/actions/workflows/ci.yml)
* Static Site Generators
  * [cobalt-org/cobalt.rs](https://github.com/cobalt-org/cobalt.rs) - 静的サイトジェネレーター [![Build Status](https://dev.azure.com/cobalt-org/cobalt-org/_apis/build/status/cobalt.rs?branchName=master)](https://dev.azure.com/cobalt-org/cobalt-org/_build?definitionId=2)
  * [FuGangqiang/mdblog.rs](https://github.com/FuGangqiang/mdblog.rs) [[mdblog](https://crates.io/crates/mdblog)] - Markdownファイルから静的サイトを生成。
  * [getzola/zola](https://github.com/getzola/zola) [[zola](https://www.getzola.org/)] - 必要な機能をすべて組み込んだ、独自の方針を持つ静的サイトジェネレーター。 [![Build Status](https://dev.azure.com/getzola/zola/_apis/build/status/getzola.zola?branchName=master)](https://dev.azure.com/getzola/zola/_build)
  * [grego/blades](https://github.com/grego/blades) [[blades](https://www.getblades.org/)] - 超高速で非常にシンプルな静的サイトジェネレーター。
  * [leven-the-blog/leven](https://github.com/leven-the-blog/leven) [[leven](https://crates.io/crates/leven)] - シンプルな並列ブログジェネレーター。
  * [rochacbruno/marmite](https://github.com/rochacbruno/marmite/) [[Marmite](https://marmite.blog/)] - 設定不要のブログジェネレーター
  * [zensical/zensical](https://github.com/zensical/zensical) - Material for MkDocsチームによるモダンな静的サイトジェネレーター [![Build](https://github.com/zensical/zensical/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/zensical/zensical/actions/workflows/build.yml)
* [WebSocket](https://datatracker.ietf.org/doc/rfc6455/)
  * [c410-f3r/wtx](https://github.com/c410-f3r/wtx) - 暗号化に対応したクライアント／サーバー。
  * [housleyjk/ws-rs](https://github.com/housleyjk/ws-rs) - 軽量なイベント駆動型WebSocket
  * [iddm/urlshortener-rs](https://github.com/iddm/urlshortener-rs) - 非常にシンプルなURL短縮ライブラリ。 [![CI](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml/badge.svg)](https://github.com/iddm/urlshortener-rs/actions/workflows/ci.yml) [![Crates badge](https://img.shields.io/crates/v/urlshortener.svg)](https://crates.io/crates/urlshortener)
  * [ratchet](https://github.com/graphform/ratchet) [[ratchet_rs](https://crates.io/crates/ratchet_rs)] - Ratchetは拡張機能とDeflateをサポートする、高速で軽量、完全非同期なWebSocketプロトコル実装です。
  * [rerun-io/ewebsock](https://github.com/rerun-io/ewebsock) [[ewebsock](https://crates.io/crates/ewebsock)] - ネイティブとWeb（WASM）の両方にコンパイルできるRust用シンプルなWebSocketライブラリ。非同期に適したAPIでテキスト／バイナリメッセージの送受信をサポート。 [![unsafe forbidden](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
  * [rust-websocket](https://github.com/websockets-rs/rust-websocket) - WebSocket接続（クライアントとサーバーの両方）を扱うフレームワーク
  * [snapview/tungstenite-rs](https://github.com/snapview/tungstenite-rs) - 軽量なストリームベースWebSocket実装。
  * [vi/websocat](https://github.com/vi/websocat) - Netcat、Curl、Socatの機能を備えたWebSocket操作用CLI。

## レジストリ

レジストリを使うと、Rustライブラリをクレートパッケージとして公開し、他者と公開／非公開で共有できます。

* [cenotelie/cratery](https://github.com/cenotelie/cratery) - [docs.rs](https://docs.rs)や[deps.rs](https://deps.rs)に似た機能を備え、組織向けに構築された、機能一式を備える軽量なプライベートCargoレジストリ。 [![CI](https://github.com/cenotelie/cratery/actions/workflows/ci.yml/badge.svg)](https://github.com/cenotelie/cratery/actions/workflows/ci.yml)
* [Cloudsmith :heavy_dollar_sign:](https://cloudsmith.com/product/formats/cargo-registry) - パブリック／プライベートCargo／Rustレジストリ（ほか多数）を第一級にサポートするフルマネージド型パッケージ管理SaaS。オープンソースプロジェクトは無料。
* [Crates](https://crates.io) - Rust／Cargoの公式パブリックレジストリ。
* [getnora-io/nora](https://github.com/getnora-io/nora) - Docker、Maven、npm、PyPI、Cargo、Go、汎用形式をサポートする軽量な単一バイナリアーティファクトレジストリ。キャッシュ付き上流プロキシとエアギャップモードに対応。
* [RepoFlow :heavy_dollar_sign:](https://www.repoflow.io) - Rustクレートリポジトリをホストし、crates.ioのプロキシにもなるモダンでシンプルなリポジトリプラットフォーム。Docker、PyPI、Maven、npm、RubyGemsなどにも対応。クラウドまたはセルフホストで利用できます。
* [w4/chartered](https://github.com/w4/chartered) - プライベートで認証／権限管理に対応するCargoレジストリ [![CI](https://github.com/w4/chartered/actions/workflows/ci.yml/badge.svg)](https://github.com/w4/chartered/actions/workflows/ci.yml)

## リソース

* [A Brief History of Rust. Part 1](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-1-805459c60c6b) - ソフトウェアの安定を求める開発者の探求から、作者自身を危うく不安定にしかけたプロジェクトまで。[第2部](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-981d61451aa5)。[第3部](https://medium.com/rustaceans/make-it-mandatory-a-brief-history-of-rust-part-2-b8c0f7a7e781?sk=c0e7fe5fde11a62edc23f284f125aa18)。
* [ANSSI-FR/rust-guide](https://github.com/ANSSI-FR/rust-guide) - Rustを使った安全なアプリケーション開発に関するフランス国家情報システムセキュリティ庁（ANSSI）の推奨事項と、自動生成されるチェックリスト
* Arts
  * [🦀 Free Ferris Pack 🦀](https://github.com/MariaLetta/free-ferris-pack) - さまざまな感情、ポーズ、状況を表現したFerrisの無料イラスト50点以上（PNG／SVG、CC0ライセンス）
* Benchmarks
  * [c410-f3r/wtx-bench](https://github.com/c410-f3r/wtx-bench) - Webベンチマーク
  * [TeXitoi/benchmarksgame-rs](https://github.com/TeXitoi/benchmarksgame-rs) - [The Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/)の実装
* Decks & Presentations
   * [Learning systems programming with Rust](https://speakerdeck.com/jvns/learning-systems-programming-with-rust) - [Julia Evans](https://x.com/b0rk)がRustconf 2016で発表。
   * [Rust: Hack Without Fear!](https://www.youtube.com/watch?v=lO1z-7cuRYI) - [Nicholas Matsakis](https://github.com/nikomatsakis)がC++Now 2018で発表
   * [Shipping a Solid Rust Crate](https://www.youtube.com/watch?v=t4CyEKb-ywA) - [Michael Gattozzi](https://github.com/mgattozzi)がRustConf 2017で発表
* Learning
  * [100 Exercises To Learn Rust](https://rust-exercises.com) - 構文、型などを扱う実践的な演習100問を通じてRustを学ぶ
  * [An Introduction to Programming using entity-component-systems and existence-based processing in Rust](https://root-11.github.io/intro-book/) - Bjorn Madsenによる書籍
  * [Aquascope](https://github.com/cognitive-engineering-lab/aquascope) - コンパイル時と実行時のRustを対話型で可視化
  * [Awesome Rust Streaming](https://github.com/jamesmunns/awesome-rust-streaming) - コミュニティが選定したライブ配信一覧。
  * [awesome-rust-mentors](https://rustbeginners.github.io/awesome-rust-mentors/) - Rustやプログラミングを教えるメンティーを募集する、親切なメンターの一覧。
  * [CIS 198: Rust Programming](http://cis198-2016s.github.io/schedule/) - ペンシルベニア大学の計算機科学Rustプログラミング講座
  * [CodeCrafters.io](https://app.codecrafters.io/tracks/rust) - Redis、Git、Docker、SQLiteを自作
  * [Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/) - Rust基礎の3日間コースと、Android、ベアメタルRust、並行処理の各1日コース。英語、[ブラジルポルトガル語](https://google.github.io/comprehensive-rust/pt-BR/)、[韓国語](https://google.github.io/comprehensive-rust/ko/)で利用できます。
  * [Easy Rust](https://github.com/Dhghomon/easy_rust) - やさしい英語でRustを学ぶ。
  * [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - C／C++で記述された従来の組み込みソフトウェアより高速、効率的で、はるかに安全なファームウェアを構築する実践的入門。
  * [exercism.org](https://exercism.org/tracks/rust) - Rustの新しい概念を学ぶためのプログラミング演習。
  * [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) - ゲームを作りながらRustを学ぶ実践ガイド。[Herbert Wolverson](https://github.com/thebracket/)著（有料）
  * [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker) - Rustの借用の仕組みと借用エラーの防ぎ方を解説する[Qouteall](https://github.com/qouteall)のガイド
  * [Idiomatic Rust](https://github.com/mre/idiomatic-rust) - 慣用的なRustを教える、査読済み記事／講演／リポジトリ集。
  * [LabEx Rust Skill Tree](https://labex.io/skilltrees/rust) - 初心者がRustを段階的に習得できるよう、実習ラボを備えた体系的な学習パス。
  * [Learn Rust 101](https://rust-lang.guide/) - Rustacean（Rust開発者）を目指す道のりを支援するガイド
  * [Learn Rust by 500 lines code](https://github.com/cuppar/rtd) - 500行のコードでRustを学び、Todo CLIアプリを一から構築。
  * [Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - 複数種類のリスト構造を実装しながら、Rustのメモリー管理規則を詳しく探究。
  * [Little Book of Rust Books](https://lborb.github.io/book/) - Rustの書籍とハウツーの厳選リスト。
  * [Programming Community Curated Resources for Learning Rust](https://hackr.io/tutorials/learn-rust) - プログラミングコミュニティの投票で選ばれたおすすめリソース一覧。
  * [Refactoring to Rust](https://www.manning.com/books/refactoring-to-rust) - Rust言語を紹介する書籍。
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - Rustのさまざまな概念と標準ライブラリを説明する、実行可能なサンプル集。
  * [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) - Rustエコシステムのクレートを使い、一般的なプログラミング課題を適切に解決する簡単なサンプル集。
  * [Rust Flashcards](https://github.com/ad-si/Rust-Flashcards) - Rustを基礎から学ぶためのフラッシュカード550枚以上。
  * [Rust for professionals](https://overexact.com/rust-for-professionals/) - 経験豊富なソフトウェア開発者向けRustクイック入門。
  * [Rust Gym](https://github.com/warycat/rustgym) - Rustで解いたコーディング面接問題の大規模コレクション。
  * [Rust in Action](https://www.manning.com/books/rust-in-action) - [Tim McNamara](https://github.com/timClicks)によるRustシステムプログラミングの実践ガイド（有料）
  * [Rust in Motion](https://www.manning.com/livevideo/rust-in-motion?a_aid=cnichols&a_bid=6a993c2e) - [Carol Nichols](https://github.com/carols10cents)と[Jake Goulding](https://github.com/shepmaster)による動画シリーズ（有料）
  * [Rust Language Cheat Sheet](https://cheats.rs/) - Rust言語チートシート
  * [Rust Tiếng Việt](https://rust-tieng-viet.github.io/) - ベトナム語でRustを学ぶ。
  * [rust-how-do-i-start](https://github.com/jondot/rust-how-do-i-start) - 「Rustを始めるには？」という問いに答えるためのリポジトリ。初心者向けに厳選したリソースと学習コース。
  * [rust-learning](https://github.com/ctjhoa/rust-learning) - Rust学習に役立つリソース集
  * [Rustfinity](https://www.rustfinity.com) - 実践的な演習と課題を通じてRustを練習する対話型プラットフォーム
  * [Rustlings](https://github.com/rust-lang/rustlings) - Rustコードの読み書きに慣れるための小さな演習
  * [Rusty CS](https://github.com/AbdesamedBendjeddou/Rusty-CS) - Rustで習得した学術知識を実践するための計算機科学カリキュラム
  * [stdx](https://github.com/brson/stdx) - stdの拡張として、まずこれらのクレートを学ぶ
  * [Tour of Rust](https://tourofrust.com) - Rustプログラミング言語の機能を段階的に学ぶ対話型ガイド。
* Performance
  * [How to avoid bounds checks in Rust (without unsafe!)](https://shnatsel.medium.com/how-to-avoid-bounds-checks-in-rust-without-unsafe-f65e618b4c1e) - 境界チェックの最適化について知っておくべきすべて
  * [Performance of Rust language](https://raw.githubusercontent.com/yugr/rust-slides/main/EN.pdf) - Rustの性能重視な言語機能の概要
  * [The Rust Performance Book](https://nnethercote.github.io/perf-book/) - Rustプログラムを最適化するヒント
* Podcasts
  * [New Rustacean](https://newrustacean.com) - Rust学習に関するポッドキャスト
  * [Rustacean Station](https://rustacean-station.org/) - Rustのポッドキャストコンテンツを制作するコミュニティプロジェクト
* [Rust Design Patterns](https://github.com/rust-unofficial/patterns) - Rustのデザインパターン、アンチパターン、慣用表現のカタログ
* [Rust Guidelines](http://aturon.github.io/) - Rustに関するAaron Turonのブログ記事
* [Rust Security Handbook](https://github.com/yevh/rust-security-handbook) - 型安全性、パニック対策など、真に安全なRustを書くための10章のハンドブック。
* [Rust Servers, Services and Apps - MEAP](https://www.manning.com/books/rust-servers-services-and-apps) - 高速で信頼性が高く保守しやすいアプリケーションを実現するため、Rustでバックエンドサーバー、サービス、フロントエンドを構築。
* [Rust Subreddit](https://www.reddit.com/r/rust/) - Rust関連の質問、記事、リソースを投稿／議論するサブレディット（フォーラム）
* [RustBooks](https://github.com/sger/RustBooks) - RustBooks一覧
* [RustCamp 2015 Talks](https://www.youtube.com/playlist?list=PLE7tQUdRKcybdIw61JpCoo89i4pWU5f_t) - RustCamp 2015の録画講演
* [RustViz](https://github.com/rustviz/rustviz) - Rustのライフタイムと借用の仕組みを理解しやすくするため、簡単なRustプログラムから可視化を生成。
* [Watch Jon Gjengset Implement BitTorrent in Rust](https://www.youtube.com/watch?v=jf_ddGnum_4) - RustでBitTorrentクライアントの一部を実装

## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
