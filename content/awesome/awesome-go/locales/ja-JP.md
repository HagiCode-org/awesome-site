# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

インスタントなやり取りには _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ コミュニティの Slack を使用しています。[こちらのフォームから参加](https://invite.slack.golangbridge.org/)してください。

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**スポンサーシップ：**

_スペシャルサンクス_

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

**Awesome Go に月額料金はありません**_が、運営を維持するために**懸命に働いている**スタッフがいます。集まった資金によって、関わるすべての人の努力に報いることができます！請求と分配の計算方法はコミュニティ全体に公開されているので、誰でも確認できます。プロジェクトのサポーターになりたい方は[こちら](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)をクリックしてください。_

> 素晴らしい Go のフレームワーク、ライブラリ、ソフトウェアを厳選したリストです。[awesome-python](https://github.com/vinta/awesome-python) にインスパイアされています。

**コントリビューション：**

まずは[コントリビューションガイドライン](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)にざっと目を通してください。すべての[コントリビューター](https://github.com/avelino/awesome-go/graphs/contributors)に感謝します。皆さんは最高です！

> _ここに掲載されているパッケージやプロジェクトで、もうメンテナンスされていないものや適切でないものを見つけたら、このファイルを改善するプルリクエストを送ってください。よろしくお願いします！_

## 目次

<details>
<summary>目次を展開</summary>

- [Awesome Go](#awesome-go)
  - [目次](#contents)
  - [アクターモデル](#actor-model)
  - [人工知能](#artificial-intelligence)
  - [オーディオと音楽](#audio-and-music)
  - [認証と認可](#authentication-and-authorization)
  - [ブロックチェーン](#blockchain)
  - [ボット構築](#bot-building)
  - [ビルド自動化](#build-automation)
  - [コマンドライン](#command-line)
    - [高度なコンソール UI](#advanced-console-uis)
    - [標準 CLI](#standard-cli)
  - [設定](#configuration)
  - [継続的インテグレーション](#continuous-integration)
  - [CSS プリプロセッサー](#css-preprocessors)
  - [データ統合フレームワーク](#data-integration-frameworks)
  - [データ構造とアルゴリズム](#data-structures-and-algorithms)
    - [ビットパッキングと圧縮](#bit-packing-and-compression)
    - [ビットセット](#bit-sets)
    - [ブルームフィルターとカッコウフィルター](#bloom-and-cuckoo-filters)
    - [データ構造とアルゴリズムのコレクション](#data-structure-and-algorithm-collections)
    - [イテレーター](#iterators)
    - [マップ](#maps)
    - [その他のデータ構造とアルゴリズム](#miscellaneous-data-structures-and-algorithms)
    - [Nullable 型](#nullable-types)
    - [キュー](#queues)
    - [セット](#sets)
    - [テキスト解析](#text-analysis)
    - [ツリー](#trees)
    - [パイプ](#pipes)
  - [データベース](#database)
    - [キャッシュ](#caches)
    - [Go で実装されたデータベース](#databases-implemented-in-go)
    - [データベーススキーマのマイグレーション](#database-schema-migration)
    - [データベースツール](#database-tools)
    - [SQL クエリビルダー](#sql-query-builders)
  - [データベースドライバー](#database-drivers)
    - [複数バックエンド向けインターフェース](#interfaces-to-multiple-backends)
    - [リレーショナルデータベースドライバー](#relational-database-drivers)
    - [NoSQL データベースドライバー](#nosql-database-drivers)
    - [検索・分析データベース](#search-and-analytic-databases)
  - [日付と時刻](#date-and-time)
  - [分散システム](#distributed-systems)
  - [ダイナミック DNS](#dynamic-dns)
  - [メール](#email)
  - [組み込み可能なスクリプト言語](#embeddable-scripting-languages)
  - [エラー処理](#error-handling)
  - [ファイル操作](#file-handling)
  - [金融](#financial)
  - [フォーム](#forms)
  - [関数型](#functional)
  - [ゲーム開発](#game-development)
  - [ジェネレーター](#generators)
  - [地理情報](#geographic)
  - [Go コンパイラー](#go-compilers)
  - [ゴルーチン](#goroutines)
  - [GUI](#gui)
  - [ハードウェア](#hardware)
  - [画像](#images)
  - [IoT（モノのインターネット）](#iot-internet-of-things)
  - [ジョブスケジューラー](#job-scheduler)
  - [JSON](#json)
  - [ロギング](#logging)
  - [機械学習](#machine-learning)
  - [メッセージング](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [その他](#miscellaneous)
    - [依存性注入](#dependency-injection)
    - [プロジェクト構成](#project-layout)
    - [文字列](#strings)
    - [未分類](#uncategorized)
  - [自然言語処理](#natural-language-processing)
    - [言語検出](#language-detection)
    - [形態素解析器](#morphological-analyzers)
    - [スラッグ化](#slugifiers)
    - [トークナイザー](#tokenizers)
    - [翻訳](#translation)
    - [翻字](#transliteration)
  - [ネットワーク](#networking)
    - [HTTP クライアント](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [パッケージ管理](#package-management)
  - [パフォーマンス](#performance)
  - [クエリ言語](#query-language)
  - [リフレクション](#reflection)
  - [リソースの埋め込み](#resource-embedding)
  - [科学計算とデータ分析](#science-and-data-analysis)
  - [セキュリティ](#security)
  - [シリアライズ](#serialization)
  - [サーバーアプリケーション](#server-applications)
  - [ストリーム処理](#stream-processing)
  - [テンプレートエンジン](#template-engines)
  - [テスト](#testing)
    - [テストフレームワーク](#testing-frameworks)
    - [モック](#mock)
    - [ファジングとデルタデバッグ/リデュース/シュリンク](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium とブラウザー制御ツール](#selenium-and-browser-control-tools)
    - [障害注入](#fail-injection)
  - [テキスト処理](#text-processing)
    - [フォーマッター](#formatters)
    - [マークアップ言語](#markup-languages)
    - [パーサー/エンコーダー/デコーダー](#parsersencodersdecoders)
    - [正規表現](#regular-expressions)
    - [サニタイズ](#sanitation)
    - [スクレイパー](#scrapers)
    - [RSS](#rss)
    - [ユーティリティ/その他](#utilitymiscellaneous)
  - [サードパーティ API](#third-party-apis)
  - [ユーティリティ](#utilities)
  - [UUID](#uuid)
  - [バリデーション](#validation)
  - [バージョン管理](#version-control)
  - [動画](#video)
  - [Web フレームワーク](#web-frameworks)
    - [ミドルウェア](#middlewares)
      - [ミドルウェア本体](#actual-middlewares)
      - [HTTP ミドルウェア作成用ライブラリ](#libraries-for-creating-http-middlewares)
    - [ルーター](#routers)
  - [WebAssembly](#webassembly)
  - [Webhook サーバー](#webhooks-server)
  - [Windows](#windows)
  - [ワークフローフレームワーク](#workflow-frameworks)
  - [XML](#xml)
  - [ゼロトラスト](#zero-trust)
  - [コード解析](#code-analysis)
  - [エディタープラグイン](#editor-plugins)
  - [Go Generate ツール](#go-generate-tools)
  - [Go ツール](#go-tools)
  - [ソフトウェアパッケージ](#software-packages)
    - [DevOps ツール](#devops-tools)
    - [その他のソフトウェア](#other-software)
- [リソース](#resources)
  - [ベンチマーク](#benchmarks)
  - [カンファレンス](#conferences)
  - [電子書籍](#e-books)
    - [購入可能な電子書籍](#e-books-for-purchase)
    - [無料の電子書籍](#free-e-books)
  - [Gopher](#gophers)
  - [ミートアップ](#meetups)
  - [スタイルガイド](#style-guides)
  - [ソーシャルメディア](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Web サイト](#websites)
    - [チュートリアル](#tutorials)
    - [ガイド付き学習](#guided-learning)
  - [コントリビューション](#contribution)
  - [ライセンス](#license)

**[⬆ トップに戻る](#contents)**



</details>

## アクターモデル

_アクターベースのプログラムを構築するためのライブラリ。_

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - グラフ制御フローライブラリ（AOP、アクター、ステートマシン）。
- [Ergo](https://github.com/ergo-services/ergo) - Golang でイベント駆動アーキテクチャを構築するための、ネットワーク透過性を備えたアクターベースのフレームワーク。Erlang にインスパイアされています。
- [Goakt](https://github.com/Tochemey/goakt) - メッセージに Protocol Buffers を使用する、Golang 向けの高速な分散アクターフレームワーク。
- [Hollywood](https://github.com/anthdm/hollywood) - Golang で書かれた、非常に高速で軽量なアクターエンジン。
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Go、C#、Java/Kotlin 向けの分散アクター。

**[⬆ トップに戻る](#contents)**

## 人工知能

_AI を活用するプログラムを構築するためのライブラリ。_

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - 10 以上のプロバイダーにまたがる LLM トラフィックのルーティング、保護、監視を行う AI ゲートウェイ。OpenAI 互換 API、WASM ポリシープラグイン、カナリアリリース、リアルタイムダッシュボードを備えています。
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - イベントソーシング、チェックポイントからの復旧、At-Most-Once 実行保証を備えた AI エージェント実行ランタイム。Go で書かれています。
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Go でステートフルな AI エージェントを構築するためのフレームワーク。
- [agy-mcp](https://github.com/tphakala/agy-mcp) - Antigravity CLI をラップし、プロンプトやピアレビューを実行する Model Context Protocol（MCP）サーバー。
- [ai](https://github.com/joakimcarlsson/ai) - 統一された LLM、埋め込み、ツール呼び出し、MCP 連携により、複数のプロバイダーにまたがって AI エージェントやアプリケーションを構築するための Go ツールキット。
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - フォールバック、レート制限、予算管理、ガードレール、可観測性を備え、30 のプロバイダーにリクエストをルーティングする OpenAI 互換の LLM ゲートウェイ。
- [chromem-go](https://github.com/philippgille/chromem-go) - Chroma ライクなインターフェースを持ち、サードパーティへの依存関係がゼロの、Go 向け組み込み可能なベクトルデータベース。インメモリで動作し、オプションで永続化も可能です。
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - Go プログラムから Claude Code CLI の非対話型プロンプト機能を操作するための Go ライブラリ。
- [crewai-go](https://github.com/rhgs/crewai-go) - CrewAI（マルチエージェントオーケストレーション）のイディオマティックな Go 移植版。依存関係ゼロで、標準ライブラリのみを使用しています。
- [Cynative](https://github.com/cynative/cynative) - Go でセキュリティエンジニアリング向け AI エージェントを構築するためのフレームワーク。設計上読み取り専用で、サンドボックスを内蔵し、AWS、GCP、Azure、K8s、GitHub & GitLab を深く調査するための 45 種類のエージェントブループリントを備えています。
- [dakera-go](https://github.com/dakera-ai/dakera-go) - セルフホスト型エージェントメモリサーバー Dakera の公式 Go クライアント SDK。メモリの保存/想起、セッション管理、名前空間操作、減衰設定のための型付きインターフェースを提供します。
- [fun](https://gitlab.com/tozd/go/fun) - Go で大規模言語モデル（LLM）を使うための、最もシンプルでありながら強力な方法。
- [goai](https://github.com/zendev-sh/goai) - AI アプリケーションを構築するための Go SDK。1 つの SDK で 20 以上のプロバイダーに対応。Vercel AI SDK にインスパイアされています。
- [GoModel](https://github.com/ENTERPILOT/GoModel) - OpenAI、Anthropic、Gemini、Groq、xAI、Ollama などのプロバイダーにまたがる統一された OpenAI 互換 API を公開する AI ゲートウェイ。ルーティング、使用量の追跡、レート制限、ガードレールを備えています。
- [hotplex](https://github.com/hrygo/hotplex) - Claude Code、OpenCode、pi-mono などの CLI AI ツール向けに長時間持続するセッションを提供する AI エージェントランタイムエンジン。全二重ストリーミング、マルチプラットフォーム連携、安全なサンドボックスを提供します。
- [jargo](https://github.com/gojargo/jargo) - 音声認識、LLM、音声合成をストリーミングパイプラインとして接続し、WebRTC 上でリアルタイム音声 AI エージェントを構築するためのフレームワーク。
- [keen-code](https://github.com/mochow13/keen-code) - コンテキスト効率に優れたターミナルベースの AI コーディングエージェント。プロバイダーに依存せず、MCP、Agent Skills、サブエージェントなどをサポートします。シンプルでわかりやすい TUI を備えています。
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo は、言語モデルを活用したアプリケーションを開発するためのフレームワークです。
- [langgraphgo](https://github.com/smallnest/langgraphgo) - LangGraph のコンセプトに基づき、LLM を使ったステートフルなマルチアクターアプリケーションを構築するための Go ライブラリ。多数のエージェントアーキテクチャを組み込みで備えています。
- [llm-box](https://github.com/alib8b8/llm-box) - YAML 駆動のパイプライン、20 以上の LLM プロバイダー（DeepSeek、Qwen、GLM、Mistral など）、ワークフロー管理用の TUI を備えたターミナルベースの AI ワークフローエンジン。
- [LocalAI](https://github.com/mudler/LocalAI) - オープンソースの OpenAI 代替。AI モデルをセルフホストできます。
- [localaik](https://github.com/harshaneel/localaik) - OpenAI と Gemini の API を LocalStack 風にローカルでエミュレートします。単一の Docker コンテナで動作し、バックエンドは llama.cpp + Gemma 3 です。
- [mcp-go](https://github.com/mark3labs/mcp-go) - Go で MCP サーバーとクライアントを構築するための、Model Context Protocol の Go 実装。
- [Ollama](https://github.com/jmorganca/ollama) - 大規模言語モデルをローカルで実行。
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - 複数の Ollama をまとめて管理し、負荷分散とフェイルオーバーを行います。
- [otellix](https://github.com/oluwajubelo1/otellix) - コスト制約のある本番環境向けの、OpenTelemetry ネイティブな LLM 可観測性と予算ガードレール。
- [routex](https://github.com/Ad3bay0c/routex) - Erlang スタイルのスーパービジョン、MCP ツールサーバーのサポート、CLI を備えた、YAML 駆動の Go 向けマルチエージェント AI ランタイム。
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - 生成 AI の埋め込みモデルでファイルをベクトル化してベクトルデータベースに格納し、PDF、Markdown、DOCX、ソースコードなどのファイルを意味ベースで検索します。
- [skillreaper](https://github.com/thousandflowers/skillreaper) - AI エージェントのセッション記録をスキャンし、Claude Code、Codex CLI、Hermes、OpenCode、Cursor、OpenClaw にまたがって未使用のスキル、MCP サーバー、エージェントを特定して安全に隔離する CLI。
- [Smeldr](https://github.com/Smeldr/core) - 型付きのライフサイクル管理と、すべてのコンテンツタイプに対応するネイティブ MCP ツールを備え、ランタイム依存関係ゼロの AI ネイティブなコンテンツバックエンド。
- [snip](https://github.com/edouard-claude/snip) - 宣言的な YAML フィルターで LLM のトークン使用量を 60〜90% 削減する CLI プロキシ。Claude Code、Cursor、Copilot、Gemini にそのまま導入できます。Go 製の rtk 代替。
- [thermal](https://github.com/jadmadi/thermal) - AI コーディングアシスタント向けの、ターミナル上のコントリビューションヒートマップ、連続記録トラッカー、トークンリーダーボード。
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - LLM ベースのマルチエージェントシステムを構築するためのフレームワーク。
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - AI アシスタントに Web 検索、コンテンツ抽出、複数ソースからのリサーチ機能を提供する MCP サーバー。単一バイナリで、サーキットブレーカーによるフェイルオーバーに対応した 5 つの検索プロバイダーと 4 段階のスクレイピングパイプラインを備えています。
- [zenflow](https://github.com/zendev-sh/zenflow) - マルチエージェントのオーケストレーション＆ワークフローエンジン。宣言的な YAML ワークフロー、ハブ＆スポーク型メールボックスを備えた LLM コーディネーター、競合に安全な配信を提供します。YAML ファイル 1 つと Go バイナリ 1 つで動作し、goai がサポートする任意のプロバイダーで実行できます。

**[⬆ トップに戻る](#contents)**

## オーディオと音楽

_オーディオや音楽を操作するためのライブラリ。_

- [beep](https://github.com/gopxl/beep) - 再生とオーディオ操作のためのシンプルなライブラリ。
- [flac](https://github.com/mewkiz/flac) - FLAC ストリームをサポートする、ネイティブ Go の FLAC エンコーダー/デコーダー。
- [gaad](https://github.com/Comcast/gaad) - ネイティブ Go の AAC ビットストリームパーサー。
- [go-aac](https://github.com/tphakala/go-aac) - FFmpeg から移植された、Pure Go の AAC-LC エンコーダーおよびデコーダー。
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - SIMD による高速化を備えた、Pure Go の高品質オーディオリサンプラー。
- [go-flac](https://github.com/tphakala/go-flac) - SIMD による高速化を備えた、ネイティブ Go の FLAC エンコーダーおよびデコーダー。
- [go-mpris](https://github.com/leberKleber/go-mpris) - mpris の dbus インターフェース用クライアント。
- [go-opus](https://github.com/tphakala/go-opus) - RFC 準拠のデコーダーを備えた、Opus オーディオコーデック（RFC 6716）のネイティブ Go 実装。
- [go-resample](https://github.com/gojargo/go-resample) - sinc、線形、ゼロ次ホールドの各変換器を備えた、Pure Go（cgo 不要）のオーディオサンプルレート変換器。
- [go-wav](https://github.com/tphakala/go-wav) - 4 GiB を超えるファイル向けに RF64 と BW64 をサポートする、Pure Go の WAV/RIFF リーダーおよびライター。
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - ネイティブ Go のオーディオ処理ライブラリ。
- [gocue](https://github.com/iSerganov/gocue) - キューイン、キューアウト、オーバーレイの各ポイントを検出して EBU R128 ラウドネスを測定し、Liquidsoap 向けに JSON を出力するオーディオ解析 CLI。
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Go 向けの libsamplerate バインディング。
- [id3v2](https://github.com/bogem/id3v2) - Go 向けの ID3 デコード・エンコードライブラリ。
- [malgo](https://github.com/gen2brain/malgo) - ミニオーディオライブラリ。
- [minimp3](https://github.com/tosone/minimp3) - 軽量な MP3 デコーダーライブラリ。
- [music-theory](https://github.com/go-music-theory/music-theory) - Go による音楽理論モデル。
- [Oto](https://github.com/hajimehoshi/oto) - 複数のプラットフォームでサウンドを再生するための低レベルライブラリ。
- [PortAudio](https://github.com/gordonklaus/portaudio) - PortAudio オーディオ I/O ライブラリの Go バインディング。
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - JSON で設定できる AI 音声エージェント。WebSocket と WebRTC 上で STT → LLM → TTS パイプラインを実行します。

**[⬆ トップに戻る](#contents)**

## 認証と認可

_認証と認可を実装するためのライブラリ。_

- [authboss](https://github.com/volatiletech/authboss) - Web 向けのモジュール式認証システム。ボイラープレートや「難しいこと」をできる限り取り除くことを目指しており、Go で新しい Web プロジェクトを始めるたびに認証システムを一から作ることなく、組み込んで設定するだけでアプリの構築を始められます。
- [authgate](https://github.com/go-authgate/authgate) - Device Authorization Grant（[RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)）、PKCE 付き Authorization Code Flow（[RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)）、およびマシン間認証向けの Client Credentials Grant をサポートする軽量な OAuth 2.0 認可サーバー。
- [branca](https://github.com/essentialkaos/branca) - Golang 1.15 以降向けの branca トークン[仕様の実装](https://github.com/tuupola/branca-spec)。
- [casbin](https://github.com/hsluoyz/casbin) - ACL、RBAC、ABAC などのアクセス制御モデルをサポートする認可ライブラリ。
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - cookies.txt ファイル形式のパーサーを提供します。
- [go-githubauth](https://github.com/jferrl/go-githubauth) - GitHub 認証用のユーティリティ。GitHub App のトークンとインストールトークンを生成して利用できます。
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian は、LDAP、Basic、Bearer トークン、証明書ベースの認証をサポートする強力でモダンな API・Web 認証を、シンプルかつクリーンでイディオマティックな方法で構築できる Golang ライブラリです。
- [go-iam](https://github.com/melvinodsa/go-iam) - シンプルな UI を備えた、開発者ファーストの ID およびアクセス管理システム。
- [go-jose](https://github.com/go-jose/go-jose) - JOSE ワーキンググループによる JSON Web Token、JSON Web Signatures、JSON Web Encryption 仕様のかなり完全な実装。
- [go-jwt](https://github.com/deatil/go-jwt) - Go 向けの JWT（JSON Web Token）ライブラリ。
- [go-jwt](https://github.com/pardnchiu/go-jwt) - フィンガープリント、Redis ストレージ、自動リフレッシュ機能を備え、アクセストークンとリフレッシュトークンを提供する JWT 認証パッケージ。
- [goiabada](https://github.com/leodip/goiabada) - OAuth2 と OpenID Connect をサポートするオープンソースの認証・認可サーバー。
- [gologin](https://github.com/dghubble/gologin) - OAuth1 および OAuth2 認証プロバイダーでログインするためのチェーン可能なハンドラー。
- [gorbac](https://github.com/mikespook/gorbac) - Golang による軽量なロールベースアクセス制御（RBAC）の実装を提供します。
- [gosession](https://github.com/Kwynto/gosession) - GoLang の net/http 向けの手軽なセッション。このパッケージはおそらくセッション機構の最良の実装であり、少なくともそうなることを目指しています。
- [goth](https://github.com/markbates/goth) - OAuth と OAuth2 をシンプルかつクリーンでイディオマティックに利用する方法を提供します。複数のプロバイダーに標準で対応しています。
- [jeff](https://github.com/abraithwaite/jeff) - プラガブルなバックエンドを備えた、シンプルで柔軟、安全かつイディオマティックな Web セッション管理。
- [jwt](https://github.com/pascaldekloe/jwt) - 軽量な JSON Web Token（JWT）ライブラリ。
- [jwt](https://github.com/cristalhq/jwt) - Go 向けの安全でシンプルかつ高速な JSON Web Token。
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - 多数の設定オプションを備えた、Golang の HTTP サーバー向け JWT ミドルウェア。
- [jwt-go](https://github.com/golang-jwt/jwt) - JSON Web Token（JWT）のフル機能の実装。JWT の解析と検証に加え、生成と署名もサポートしています。
- [jwx](https://github.com/lestrrat-go/jwx) - さまざまな JWx（JWA/JWE/JWK/JWS/JWT、別名 JOSE）技術を実装した Go モジュール。
- [keto](https://github.com/ory/keto) - 「Zanzibar: Google's Consistent, Global Authorization System」のオープンソース（Go）実装。gRPC、REST API、newSQL、そして簡単できめ細かな権限記述言語を備えています。ACL、RBAC などのアクセスモデルをサポートします。
- [loginsrv](https://github.com/tarent/loginsrv) - OAuth2（Github）、htpasswd、osiam などのプラガブルなバックエンドを備えた JWT ログインマイクロサービス。
- [melange](https://github.com/pthm/melange) - OpenFGA の認可スキーマを、PostgreSQL 内できめ細かな関係ベースのアクセス制御チェックを実行する PL/pgSQL 関数にコンパイルします。
- [oauth2](https://github.com/golang/oauth2) - goauth2 の後継。JWT、Google API、Compute Engine、App Engine のサポートを備えた汎用 OAuth 2.0 パッケージ。
- [oidc](https://github.com/zitadel/oidc) - Go 向けに書かれ、OpenID Foundation の認定を受けた、使いやすい OpenID Connect クライアント・サーバーライブラリ。
- [openfga](https://github.com/openfga/openfga) - 論文「Zanzibar: Google's Consistent, Global Authorization System」に基づくきめ細かな認可の実装。[CNCF](https://www.cncf.io/) の支援を受けています。
- [osin](https://github.com/openshift/osin) - Golang の OAuth2 サーバーライブラリ。
- [otpgen](https://github.com/grijul/otpgen) - TOTP/HOTP コードを生成するライブラリ。
- [otpgo](https://github.com/jltorresm/otpgo) - Go 向けの時間ベースのワンタイムパスワード（TOTP）および HMAC ベースのワンタイムパスワード（HOTP）ライブラリ。
- [paseto](https://github.com/o1egl/paseto) - Platform-Agnostic Security Tokens（PASETO）の Golang 実装。
- [permissions](https://github.com/xyproto/permissions) - ユーザー、ログイン状態、権限を追跡するためのライブラリ。セキュアな Cookie と bcrypt を使用します。
- [scope](https://github.com/SonicRoshan/scope) - Go で OAuth2 スコープを簡単に管理。
- [scs](https://github.com/alexedwards/scs) - HTTP サーバー向けのセッションマネージャー。
- [securecookie](https://github.com/chmike/securecookie) - 効率的なセキュア Cookie のエンコード/デコード。
- [session](https://github.com/icza/session) - Web サーバー向けの Go セッション管理（Google App Engine - GAE のサポートを含む）。
- [sessions](https://github.com/adam-hanna/sessions) - Go の HTTP サーバー向けの、非常にシンプルで高性能、かつ高度にカスタマイズ可能なセッションサービス。
- [sessionup](https://github.com/swithek/sessionup) - シンプルでありながら効果的な HTTP セッション管理・識別パッケージ。
- [sjwt](https://github.com/brianvoe/sjwt) - シンプルな JWT ジェネレーター兼パーサー。
- [spicedb](https://github.com/authzed/spicedb) - きめ細かな認可を可能にする、Zanzibar にインスパイアされたデータベース。
- [x509proxy](https://github.com/vkuznet/x509proxy) - X509 プロキシ証明書を扱うためのライブラリ。

**[⬆ トップに戻る](#contents)**

## ブロックチェーン

_ブロックチェーンを構築するためのツール。_

- [cometbft](https://github.com/cometbft/cometbft) - 分散型でビザンチン障害耐性を持つ、決定論的なステートマシンレプリケーションエンジン。Tendermint Core のフォークであり、Tendermint コンセンサスアルゴリズムを実装しています。
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Cosmos エコシステムでパブリックブロックチェーンを構築するためのフレームワーク。
- [gno](https://github.com/gnolang/gno) - Golang と、ブロックチェーン向けに専用設計された決定論的な Go の派生言語 Gnolang で構築された、包括的なスマートコントラクトスイート。
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Ethereum プロトコルの公式 Go 実装。
- [gosemble](https://github.com/LimeChain/gosemble) - Polkadot/Substrate 互換のランタイムを構築するための Go ベースのフレームワーク。
- [gossamer](https://github.com/ChainSafe/gossamer) - Polkadot Host の Go 実装。
- [kubo](https://github.com/ipfs/kubo) - Go による IPFS 実装。DApps の分散ストレージとして利用できるコンテンツアドレス可能なストレージを提供します。IPFS プロトコルに基づいています。
- [lnd](https://github.com/lightningnetwork/lnd) - Lightning Network ノードの完全な実装。
- [nview](https://github.com/blinklabs-io/nview) - Cardano ノード用のローカル監視ツール。ほとんどの画面に収まるように設計された TUI（ターミナルユーザーインターフェース）です。
- [pactus](https://github.com/pactus-project/pactus) - Go による Pactus ブロックチェーンのフルノード実装。
- [solana-go](https://github.com/gagliardetto/solana-go) - Solana の JSON RPC および WebSocket インターフェースとやり取りするための Go ライブラリ。
- [tendermint](https://github.com/tendermint/tendermint) - 任意のプログラミング言語で書かれたステートマシンを、Tendermint のコンセンサスおよびブロックチェーンプロトコルを使ってビザンチン障害耐性を持つ複製ステートマシンに変換する高性能ミドルウェア。
- [tronlib](https://github.com/kslamph/tronlib) - TRC20 トークンをサポートし、TRON ブロックチェーンとやり取りするための包括的で本番環境対応の Go SDK。

**[⬆ トップに戻る](#contents)**

## ボット構築

_ボットを構築・操作するためのライブラリ。_

- [arikawa](https://github.com/diamondburned/arikawa) - Discord API 用のライブラリ兼フレームワーク。
- [bot](https://github.com/go-telegram/bot) - 追加の UI コンポーネントを備えた、依存関係ゼロの Telegram Bot ライブラリ。
- [echotron](https://github.com/NicoNex/echotron) - Go で Telegram Bot を作るための、エレガントで並行処理に対応したライブラリ。
- [go-joe](https://joe-bot.net) - Hubot にインスパイアされ、Go で書かれた汎用ボットライブラリ。
- [go-sarah](https://github.com/oklahomer/go-sarah) - LINE、Slack、Gitter など、任意のチャットサービス向けのボットを構築するためのフレームワーク。
- [go-tg](https://github.com/mr-linch/go-tg) - 公式ドキュメントから生成された、Telegram Bot API にアクセスするための Go クライアントライブラリ。複雑なボットを構築するための機能が一通り揃っています。
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - twitch.tv チャット用のボットを書くためのライブラリ
- [micha](https://github.com/onrik/micha) - Telegram Bot API 用の Go ライブラリ。
- [slack-bot](https://github.com/innogames/slack-bot) - 面倒くさがりな開発者のための、すぐに使える Slack Bot：カスタムコマンド、Jenkins、Jira、Bitbucket、Github…
- [slacker](https://github.com/slack-io/slacker) - Slack ボットを作成するための使いやすいフレームワーク。
- [telebot](https://github.com/tucnak/telebot) - Go で書かれた Telegram ボットフレームワーク。
- [teleflow](https://github.com/kslamph/teleflow) - 流れるようなフロー定義と自動状態管理を備えた、シンプルで型安全な Telegram ボットフレームワーク。
- [telego](https://github.com/mymmrac/telego) - API を 1 対 1 で完全に実装した、Golang 向けの Telegram Bot API ライブラリ。
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - シンプルでクリーンな Telegram ボットクライアント。
- [TG](https://github.com/enetx/tg) - Go 向けの Telegram ボットフレームワーク。
- [wayback](https://github.com/wabarc/wayback) - Telegram、Mastodon、Slack などのメッセージングプラットフォーム向けの、Web ページをアーカイブするボット。
- [ymsdk](https://github.com/rekurt/ymsdk) - 型安全なモデル、自動リトライ、レート制限処理を備えた、Yandex Messenger Bot API 用の Go SDK。
   - [Wisp](https://github.com/wisp-trading/wisp) - Go 向けのイベント駆動型トレーディングフレームワーク。現物、無期限先物、予測市場に対応し、複数の取引所（Bybit、Hyperliquid、Polymarket）をサポートしています。

**[⬆ トップに戻る](#contents)**

## ビルド自動化

_ビルド自動化に役立つライブラリとツール。_

- [1build](https://github.com/gopinath-langote/1build) - プロジェクト固有のコマンドを手間なく管理するためのコマンドラインツール。
- [air](https://github.com/cosmtrek/air) - Air - Go アプリのためのライブリロード。
- [anko](https://github.com/GuilhermeCaruso/anko) - 複数のプログラミング言語に対応したシンプルなアプリケーションウォッチャー。
- [gaper](https://github.com/maxclaus/gaper) - クラッシュ時や監視対象のファイルが変更されたときに、Go プロジェクトをビルドして再起動します。
- [gilbert](https://go-gilbert.github.io) - Go プロジェクト向けのビルドシステム兼タスクランナー。
- [gob](https://github.com/kcmvp/gob) - Go プロジェクト向けの [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) ライクなビルドツール。
- [goyek](https://github.com/goyek/goyek) - Go でビルドパイプラインを作成。
- [mage](https://github.com/magefile/mage) - Mage は Go を使った make/rake ライクなビルドツールです。
- [mmake](https://github.com/tj/mmake) - モダンな Make。
- [realize](https://github.com/tockins/realize) - ファイルウォッチャーとライブリロードを備えた Go のビルドシステム。カスタムパスで実行、ビルド、ファイル変更の監視ができます。
- [rex](https://github.com/rexrun-dev/rex) - 設定不要の汎用プロジェクトランナー。スタック（Go、Node、Python、Rust、PHP、Zig、Elixir）を検出し、適切なコマンドを実行します。
- [Task](https://github.com/go-task/task) - シンプルな「Make」の代替。
- [taskctl](https://github.com/taskctl/taskctl) - 並行タスクランナー。
- [xc](https://github.com/joerdav/xc) - README.md で定義したタスクを実行するタスクランナー。実行可能な Markdown です。

**[⬆ トップに戻る](#contents)**

## コマンドライン

### 高度なコンソール UI

_コンソールアプリケーションとコンソールユーザーインターフェースを構築するためのライブラリ。_

- [asciigraph](https://github.com/guptarohit/asciigraph) - 他の依存関係なしに、コマンドラインアプリで軽量な ASCII 折れ線グラフ ╭┈╯ を作成する Go パッケージ。
- [aurora](https://github.com/logrusorgru/aurora) - fmt.Printf/Sprintf をサポートする ANSI ターミナルカラー。
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - 高度にカスタマイズ可能なボックスをターミナルに描画します。
- [bubble-table](https://github.com/Evertras/bubble-table) - bubbletea 用のインタラクティブなテーブルコンポーネント。
- [bubbles](https://github.com/charmbracelet/bubbles) - bubbletea 用の TUI コンポーネント。
- [bubbletea](https://github.com/charmbracelet/bubbletea) - The Elm Architecture に基づく、ターミナルアプリを構築するための Go フレームワーク。
- [chroma16](https://github.com/arceus-7/chroma16) - 1 つのシードカラーまたは文字列から、調和のとれた 16 色のターミナルパレットを生成します。
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Kubernetes マニフェストや一般的な設定ファイル向けの、動的な設定ファイルテンプレートツール。
- [ctc](https://github.com/wzshiming/ctc) - Print メソッドを変更する必要のない、非侵襲的なクロスプラットフォームのターミナルカラーライブラリ。
- [fx](https://github.com/antonmedv/fx) - ターミナル用の JSON ビューアー＆プロセッサー。
- [go-ataman](https://github.com/workanator/go-ataman) - ターミナルで ANSI カラーのテキストテンプレートを描画するための Go ライブラリ。
- [go-colorable](https://github.com/mattn/go-colorable) - Windows 向けのカラー対応ライター。
- [go-colortext](https://github.com/daviddengcn/go-colortext) - ターミナルでカラー出力するための Go ライブラリ。
- [go-isatty](https://github.com/mattn/go-isatty) - Golang 向けの isatty。
- [go-palette](https://github.com/abusomani/go-palette) - ANSI カラーを使ったエレガントで便利なスタイル定義を提供する Go ライブラリ。[fmt ライブラリ](https://pkg.go.dev/fmt)と完全互換で、それをラップして美しいターミナルレイアウトを実現します。
- [go-prompt](https://github.com/c-bata/go-prompt) - [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit) にインスパイアされた、強力なインタラクティブプロンプトを構築するためのライブラリ。
- [go-tui](https://github.com/grindlemire/go-tui) - templ ライクなテンプレート、Flexbox レイアウト、エディターサポート用の言語サーバーを備えた宣言的なターミナル UI フレームワーク。
- [gocui](https://github.com/jroimartin/gocui) - コンソールユーザーインターフェースの作成を目的とした、ミニマルな Go ライブラリ。
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - ターミナルのテキストにスタイルを適用します。
- [gookit/color](https://github.com/gookit/color) - ターミナルのカラー描画ツールライブラリ。16 色、256 色、RGB カラーでの描画出力をサポートし、Windows にも対応しています。
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf は、対話型 CLI を通じて、設計思想が明確で本番品質の Go プロジェクトのボイラープレートを生成します。プロジェクト間でスケルトンコードをコピー＆ペーストするのはもうやめましょう。
- [lazyenv](https://github.com/lazynop/lazyenv) - .env ファイルの閲覧、比較、編集のための TUI。
- [lazyteams](https://github.com/agmonetti/lazyteams) - Microsoft Teams 用のキーボード操作型ターミナルユーザーインターフェース。
- [lipgloss](https://github.com/charmbracelet/lipgloss) - ターミナルでの色、書式、レイアウトのスタイルを宣言的に定義します。
- [loom](https://github.com/loom-go/loom) - TUI を構築するための、シグナルベースのリアクティブコンポーネントフレームワーク。
- [marker](https://github.com/cyucelen/marker) - カラフルなターミナル出力のために文字列をマッチしてマークする最も簡単な方法。
- [mpb](https://github.com/vbauerster/mpb) - ターミナルアプリケーション向けのマルチプログレスバー。
- [phoenix](https://github.com/phoenix-tui/phoenix) - Elm にインスパイアされたアーキテクチャ、完璧な Unicode 描画、ゼロアロケーションのイベントシステムを備えた高性能 TUI フレームワーク。
- [progressbar](https://github.com/schollz/progressbar) - あらゆる OS で動作する、基本的なスレッドセーフのプログレスバー。
- [pterm](https://github.com/pterm/pterm) - 組み合わせ可能な多数のコンポーネントで、あらゆるプラットフォームのコンソール出力を美しくするライブラリ。
- [simpletable](https://github.com/alexeyco/simpletable) - Go でターミナルにシンプルなテーブルを表示。
- [spinner](https://github.com/briandowns/spinner) - オプション付きのターミナルスピナーを簡単に提供する Go パッケージ。
- [tabby](https://github.com/cheynewallace/tabby) - 超シンプルな Golang テーブルのための小さなライブラリ。
- [table](https://github.com/tomlazar/table) - ターミナルのカラーベースのテーブル用の小さなライブラリ。
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox は、クロスプラットフォームのテキストベースインターフェースを作成するためのライブラリです。
- [termdash](https://github.com/mum4k/termdash) - **termbox-go** をベースとし、[termui](https://github.com/gizak/termui) にインスパイアされた Go のターミナルダッシュボード。
- [termenv](https://github.com/muesli/termenv) - ターミナルアプリケーションのための高度な ANSI スタイル＆カラーのサポート。
- [termui](https://github.com/gizak/termui) - **termbox-go** をベースとし、[blessed-contrib](https://github.com/yaronn/blessed-contrib) にインスパイアされた Go のターミナルダッシュボード。
- [uilive](https://github.com/gosuri/uilive) - ターミナル出力をリアルタイムに更新するためのライブラリ。
- [uiprogress](https://github.com/gosuri/uiprogress) - ターミナルアプリケーションでプログレスバーを描画するための柔軟なライブラリ。
- [uitable](https://github.com/gosuri/uitable) - 表形式データを使ってターミナルアプリの可読性を向上させるライブラリ。
- [vhs](https://github.com/charmbracelet/vhs) - CLI のためのホームビデオレコーダー。ドキュメントやチュートリアル用に、コードからターミナルの GIF を生成します。
- [yacspin](https://github.com/theckman/yacspin) - ターミナルスピナーを扱うための、もう一つの CLI スピナーパッケージ（Yet Another CLi Spinner）。

**[⬆ トップに戻る](#contents)**

### 標準 CLI

_標準的または基本的なコマンドラインアプリケーションを構築するためのライブラリ。_

- [acmd](https://github.com/cristalhq/acmd) - シンプルで便利、かつ設計思想が明確な Go 製 CLI パッケージ。
- [argparse](https://github.com/akamensky/argparse) - Python の argparse モジュールにインスパイアされたコマンドライン引数パーサー。
- [argv](https://github.com/cosiner/argv) - bash の構文を使ってコマンドライン文字列を引数配列に分割する Go ライブラリ。
- [boa](https://github.com/GiGurra/boa) - 構造体タグから宣言的にフラグ、環境変数、バリデーション、設定ファイルを扱えます。cobra 上に構築されています。
- [carapace](https://github.com/rsteube/carapace) - spf13/cobra 用のコマンド引数補完ジェネレーター。
- [carapace-bin](https://github.com/rsteube/carapace-bin) - 複数のシェルと複数のコマンドに対応した引数補完ツール。
- [carapace-spec](https://github.com/rsteube/carapace-spec) - spec ファイルを使ってシンプルな補完を定義します。
- [climax](https://github.com/tucnak/climax) - Go コマンドの精神に則った、「人間らしい顔」を持つ代替 CLI。
- [clîr](https://github.com/leaanthony/clir) - シンプルで明快な CLI ライブラリ。依存関係はありません。
- [cmd](https://github.com/posener/cmd) - 標準の `flag` パッケージを拡張し、サブコマンドなどをイディオマティックな方法でサポートします。
- [cmdr](https://github.com/hedzr/cmdr) - POSIX/GNU スタイルで getopt ライクなコマンドライン UI 用の Go ライブラリ。
- [cobra](https://github.com/spf13/cobra) - モダンな Go CLI インタラクションのためのコマンダー。
- [command-chain](https://github.com/rainu/go-command-chain) - Unix シェルのパイプラインのようなコマンドチェーンを構成して実行するための Go ライブラリ。
- [commandeer](https://github.com/jaffee/commandeer) - 開発者に優しい CLI アプリ：構造体のフィールドとタグに基づいて、フラグ、デフォルト値、使用方法を設定します。
- [complete](https://github.com/posener/complete) - Go で bash 補完を記述 + Go コマンドの bash 補完。
- [console](https://github.com/reeflective/console) oh-my-posh のプロンプトなどを備えた、Cobra コマンド用のクローズドループアプリケーションライブラリ。
- [Dnote](https://github.com/dnote/dnote) - 複数デバイス間の同期に対応したシンプルなコマンドラインノートブック。
- [elvish](https://github.com/elves/elvish) - 表現力豊かなプログラミング言語であり、多用途な対話型シェル。
- [env](https://github.com/codingconcepts/env) - 構造体のためのタグベースの環境設定。
- [flaggy](https://github.com/integrii/flaggy) - 優れたサブコマンドサポートを備えた、堅牢でイディオマティックなフラグパッケージ。
- [flagvar](https://github.com/sgreben/flagvar) - Go の標準 `flag` パッケージ用のフラグ引数型のコレクション。
- [flash-flags](https://github.com/agilira/flash-flags) - 標準ライブラリのドロップイン置き換えとして使用でき、セキュリティも強化された、超高速で依存関係ゼロの POSIX 準拠フラグ解析ライブラリ。
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - 独自の高信頼 UDP 上で動作する、ターミナルベースのピアツーピアのファイル・メッセージ転送ツール。
- [getopt](https://github.com/jon-codes/getopt) - GNU libc の実装に対して検証された、正確な Go 版 `getopt`。
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - ミニマル、標準、ヘキサゴナルの各アーキテクチャパターンで Go アプリケーションの雛形を生成する CLI ツール。
- [go-arg](https://github.com/alexflint/go-arg) - Go での構造体ベースの引数解析。
- [go-flags](https://github.com/jessevdk/go-flags) - Go のコマンドラインオプションパーサー。
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Perl の GetOpt::Long の柔軟性にインスパイアされた Go のオプションパーサー。
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - Emacs キーバインド、Unicode サポート、補完、シンタックスハイライトを備えたカスタマイズ可能な行編集ライブラリ。NYAGOS シェルで使用されています。
- [gocmd](https://github.com/devfacet/gocmd) - コマンドラインアプリケーションを構築するための Go ライブラリ。
- [goopt](https://github.com/napalu/goopt) - 階層的なコマンド/フラグ、i18n、シェル補完、バリデーションなど幅広い機能を備えた、宣言的で構造体タグベースの Go 向け CLI フレームワーク。
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - 77 の POSIX ツールを含み、BusyBox のテストとの互換性が 97% を超える、Go ネイティブなシングルバイナリのマルチコールツール。
- [hashicorp/cli](https://github.com/hashicorp/cli) - コマンドラインインターフェースを実装するための Go ライブラリ。
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - 自動設定と依存性注入を備えた CLI アプリケーションフレームワーク。
- [job](https://github.com/liujianping/job) - JOB：短期的なコマンドを長期的なジョブにします。
- [kingpin](https://github.com/alecthomas/kingpin) - サブコマンドをサポートするコマンドライン・フラグパーサー（`kong` に置き換えられました。下記を参照）。
- [liner](https://github.com/peterh/liner) - コマンドラインインターフェース向けの readline ライクな Go ライブラリ。
- [mcli](https://github.com/jxskiss/mcli) - 最小限ながら非常に強力な Go 向け CLI ライブラリ。
- [memsh](https://github.com/amjadjibon/memsh) - Go による仮想 bash シェル：インメモリファイルシステム（afero）に対してシェルコマンドを実行し、WASM プラグインのサポートと組み込み可能な HTTP サーバーを備えています。
- [mkideal/cli](https://github.com/mkideal/cli) - Golang の構造体タグに基づく、多機能で使いやすいコマンドラインパッケージ。
- [mow.cli](https://github.com/jawher/mow.cli) - 高度なフラグと引数の解析およびバリデーションを備えた CLI アプリケーションを構築するための Go ライブラリ。
- [neuron-cli](https://github.com/steevin/neuron-cli) - ローカルファーストで Obsidian 互換のターミナル用ナレッジマネージャー。
- [OpenCLI](https://github.com/bcdxn/opencli) - CLI 向けの OpenAPI スタイルの仕様。言語に依存しないドキュメントでインターフェースを定義し、ドキュメントやフレームワークのボイラープレートコードを生成します。
- [ops](https://github.com/nanovms/ops) - ユニカーネルのビルダー/オーケストレーター。
- [orpheus](https://github.com/agilira/orpheus) - セキュリティ強化、プラグインストレージシステム、本番環境向けの可観測性機能を備えた CLI フレームワーク。
- [pflag](https://github.com/spf13/pflag) - POSIX/GNU スタイルの --flags を実装した、Go の flag パッケージのドロップイン置き換え。
- [readline](https://github.com/reeflective/readline) - モダンで使いやすい UI 機能を備えたシェルライブラリ。
- [sflags](https://github.com/octago/sflags) - flag、urfave/cli、pflag、cobra、kingpin などのライブラリ向けの、構造体ベースのフラグジェネレーター。
- [structcli](https://github.com/leodido/structcli) - Cobra のボイラープレートを排除：Go の構造体から、強力で多機能な CLI を宣言的に構築します。
- [strumt](https://github.com/antham/strumt) - プロンプトチェーンを作成するためのライブラリ。
- [subcmd](https://github.com/bobg/subcmd) - サブコマンドの解析と実行に対する別のアプローチ。標準の `flag` パッケージと併用できます。
- [teris-io/cli](https://github.com/teris-io/cli) - Go でコマンドラインインターフェースを構築するための、シンプルかつ完全な API。
- [urfave/cli](https://github.com/urfave/cli) - Go でコマンドラインアプリを構築するための、シンプルで高速かつ楽しいパッケージ（旧 codegangsta/cli）。
- [version](https://github.com/mszostok/version) - CLI のバージョン情報を収集し、アップグレード通知とともに複数の形式で表示します。
- [wlog](https://github.com/dixonwille/wlog) - クロスプラットフォームのカラー表示と並行処理をサポートするシンプルなロギングインターフェース。
- [wmenu](https://github.com/dixonwille/wmenu) - ユーザーに選択を促す CLI アプリケーション向けの、使いやすいメニュー構造。

**[⬆ トップに戻る](#contents)**

## 設定

_設定を解析するためのライブラリ。_

- [aconfig](https://github.com/cristalhq/aconfig) - シンプルで便利、かつ設計思想が明確な設定ローダー。
- [argus](https://github.com/agilira/argus) - MPSC リングバッファ、適応型バッチ処理戦略、汎用フォーマット解析（JSON、YAML、TOML、INI、HCL、Properties）を備えた、ファイル監視と設定管理。
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - Go アプリケーションから Azure App Configuration のデータを利用するための設定プロバイダー。
- [bcl](https://github.com/wkhere/bcl) - BCL は HCL に似た設定言語です。
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - ミニマルな設定リーダー（ファイル、環境変数、その他好きな場所から読み込み）。
- [config](https://github.com/JeremyLoy/config) - クラウドネイティブなアプリケーション設定。わずか 2 行で環境変数を構造体にバインドできます。
- [config](https://github.com/num30/config) - わずか 2 行のコードで、ファイル、環境変数、フラグを使ってアプリを設定できます。
- [config](https://github.com/andreiavrammsd/config) - 専用の設定ファイルパーサーを備えた構造体ベースの設定ローダー。環境変数、フラグ、デフォルト値、バリデーションをサポートします。
- [configuration](https://github.com/BoRuDar/configuration) - 環境変数、ファイル、フラグ、'default' タグから設定用の構造体を初期化するためのライブラリ。
- [configuro](https://github.com/sherifabdlnaby/configuro) - 12-Factor 準拠のアプリケーションに焦点を当てた、環境変数やファイルから設定を読み込み＆バリデーションするための、設計思想が明確なフレームワーク。
- [confiq](https://github.com/greencoda/confiq) - 構造化データ形式を設定用構造体にデコードする Go ライブラリ。複数のデータ形式をサポートしています。
- [confita](https://github.com/heetch/confita) - 複数のバックエンドから設定をカスケード方式で構造体に読み込みます。
- [conflate](https://github.com/the4thamigo-uk/conflate) - 任意の URL から取得した複数の JSON/YAML/TOML ファイルのマージ、JSON スキーマに対するバリデーション、スキーマで定義されたデフォルト値の適用を行うライブラリ/ツール。
- [enflag](https://github.com/atelpis/enflag) - 環境変数とフラグの解析を統合した、コンテナ指向で依存関係ゼロの設定ライブラリ。リフレクションや構造体タグを使わず、ジェネリクスで型安全性を確保しています。
- [env](https://github.com/caarlos0/env) - 環境変数を Go の構造体に解析します（デフォルト値付き）。
- [env](https://github.com/junk1tm/env) - 環境変数を構造体に読み込むための軽量パッケージ。
- [env](https://github.com/syntaqx/env) - 構造体へのアンマーシャルをサポートする環境変数ユーティリティパッケージ。
- [envconfig](https://github.com/vrischmann/envconfig) - 環境変数から設定を読み込みます。
- [envh](https://github.com/antham/envh) - 環境変数を管理するためのヘルパー。
- [envyaml](https://github.com/yuseferi/envyaml) - 環境変数を含む YAML のリーダー。シークレットは環境変数として保持しつつ、設定は構造化された YAML として読み込めます。
- [fig](https://github.com/kkyr/fig) - ファイルや環境変数から設定を読み込むための小さなライブラリ（バリデーション＆デフォルト値付き）。
- [genv](https://github.com/sakirsensoy/genv) - dotenv をサポートし、環境変数を簡単に読み込めます。
- [go-array](https://github.com/deatil/go-array) - マップ、スライス、JSON からデータを読み取ったり設定したりする Go パッケージ。
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - AWS System Manager - Parameter Store からパラメーターを取得する Go パッケージ。
- [go-cfg](https://github.com/dsbasko/go-cfg) - 環境変数、フラグ、設定ファイル（.json、.yaml、.toml、.env）など、さまざまなソースから設定データを構造体に読み込む統一的な方法を提供するライブラリ。
- [go-conf](https://github.com/ThomasObenaus/go-conf) - アノテーション付き構造体に基づくアプリケーション設定のためのシンプルなライブラリ。環境変数、設定ファイル、コマンドラインパラメーターからの設定読み込みをサポートしています。
- [go-config](https://github.com/MordaTeam/go-config) - アプリの設定を扱うためのシンプルで便利なライブラリ。
- [go-external-config](https://github.com/go-external-config/go) - Spring にインスパイアされた Go 向けの設定管理ライブラリ。
- [go-external-config/aws](https://github.com/go-external-config/aws) - go-external-config 向けの AWS プロパティソースのサポート。
- [go-external-config/consul](https://github.com/go-external-config/consul) - go-external-config 向けの Consul プロパティソースのサポート。
- [go-external-config/vault](https://github.com/go-external-config/vault) - go-external-config 向けの Vault プロパティソースのサポート。
- [go-ini](https://github.com/subpop/go-ini) - INI ファイルをマーシャル/アンマーシャルする Go パッケージ。
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - AWS SSM（Parameter Store）から設定パラメーターを読み込むための Go ユーティリティ。
- [go-up](https://github.com/ufoscout/go-up) - 再帰的なプレースホルダー解決を備え、魔法のような仕掛けのないシンプルな設定ライブラリ。
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - ネイティブな Go スキーマと JSON Schema をサポートする、ソースを認識した YAML バリデーション。
- [GoCfg](https://github.com/Jagerente/gocfg) - 構造体タグベースのコントラクト、カスタム値プロバイダー、パーサー、ドキュメント生成を備えた設定マネージャー。カスタマイズ可能でありながらシンプルです。
- [goconfig](https://github.com/fulldump/goconfig) - フラグ、環境変数、config.json、デフォルト値から、決定的な優先順位で Go の構造体に値を設定します。追加の依存関係はありません。
- [godotenv](https://github.com/joho/godotenv) - Ruby の dotenv ライブラリの Go 移植版（`.env` から環境変数を読み込みます）。
- [goenv](https://github.com/psyb0t/goenv) - ENV 環境変数を読み取り、プロセスが本番環境と開発環境のどちらで実行されているかを報告します。
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config は、Go プログラミング言語向けの軽量かつ強力な設定マネージャーです。
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - モジュール式の JSON 設定。設定用構造体をそれが設定するコードとともに保持し、設定全体のシリアライズを犠牲にすることなく解析をサブモジュールに委譲できます。
- [gonfig](https://github.com/milad-abbasi/gonfig) - さまざまなプロバイダーから型安全な構造体に値を読み込む、タグベースの設定パーサー。
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - 構造体タグによるデフォルト値と必須フィールドに対応し、リフレクションを使って環境変数から構造体に設定を読み込みます。
- [gookit/config](https://github.com/gookit/config) - アプリケーション設定の管理（読み込み、取得、設定）。JSON、YAML、TOML、INI、HCL をサポートし、複数ファイルの読み込みやデータの上書きマージが可能です。
- [harvester](https://github.com/beatlabs/harvester) - Harvester は、シード、環境変数、Consul 連携をサポートする、使いやすい静的・動的設定パッケージです。
- [hedzr/store](https://github.com/hedzr/store) - 階層型データ向けに最適化された、拡張可能で高性能な設定管理ライブラリ。
- [hjson](https://github.com/hjson/hjson-go) - Human JSON は人間のための設定ファイル形式です。緩やかな構文で間違いが少なく、コメントを多く書けます。
- [hocon](https://github.com/gurkankaymak/hocon) - HOCON（人間に優しい JSON のスーパーセット）形式を扱うための設定ライブラリ。環境変数、他の値の参照、コメント、複数ファイルなどの機能をサポートしています。
- [ini](https://github.com/go-ini/ini) - INI ファイルを読み書きするための Go パッケージ。
- [ini](https://github.com/wlevene/ini) - INI のパーサー＆書き込みライブラリ。構造体へのアンマーシャル、JSON へのマーシャル、ファイルの書き込み、ファイルの監視に対応しています。
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - 環境変数から設定データを管理するための Go ライブラリ。
- [koanf](https://github.com/knadh/koanf) - Go アプリケーションで設定を読み込むための軽量で拡張可能なライブラリ。JSON、TOML、YAML、環境変数、コマンドラインを標準でサポートしています。
- [konf](https://github.com/nil-go/konf) - ファイル、環境変数、フラグ、クラウド（AWS、Azure、GCP など）から設定を読み込み/監視するための最もシンプルな API。
- [konfig](https://github.com/lalamove/konfig) - 分散処理の時代に向けた、Go のための組み合わせ可能で監視可能、かつ高性能な設定処理。
- [kong](https://github.com/alecthomas/kong) - 任意の複雑なコマンドライン構造や、YAML、JSON、TOML などの追加の設定ソースをサポートするコマンドラインパーサー（`kingpin` の後継）。
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - 環境変数を読み込むためのシンプルで便利なパッケージ。
- [nfigure](https://github.com/muir/nfigure) - コマンドライン（Posix および Go スタイル）、環境変数、JSON、YAML からの、ライブラリごとの構造体タグベースの設定
- [onion](https://github.com/goraz/onion) - Go 向けのレイヤーベースの設定。JSON、TOML、YAML、properties、etcd、環境変数、PGP による暗号化をサポートしています。
- [piper](https://github.com/Yiling-J/piper) - 設定の継承とキー生成を備えた Viper のラッパー。
- [sonic](https://github.com/bytedance/sonic) - 非常に高速な JSON シリアライズ＆デシリアライズライブラリ。
- [swap](https://github.com/oblq/swap) - ビルド環境に基づいて、構造体を再帰的にインスタンス化/設定します（YAML、TOML、JSON、環境変数）。
- [typenv](https://github.com/diegomarangoni/typenv) - ミニマルで依存関係ゼロの、型付き環境変数ライブラリ。
- [uConfig](https://github.com/omeid/uconfig) - 軽量で依存関係ゼロ、拡張可能な設定管理。
- [viper](https://github.com/spf13/viper) - 牙を持つ Go の設定ライブラリ。
- [xdg](https://github.com/adrg/xdg) - [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) と [XDG user directories](https://wiki.archlinux.org/index.php/XDG_user_directories) の Go 実装。
- [yamagiconf](https://github.com/romshark/yamagiconf) - Go の設定向けの、YAML の「安全なサブセット」。
- [zerocfg](https://github.com/chaindead/zerocfg) - ボイラープレートや繰り返しのコードを避けた、手間いらずで簡潔な設定管理。優先順位による上書きを伴う複数のソースをサポートします。

**[⬆ トップに戻る](#contents)**

## 継続的インテグレーション

_継続的インテグレーションに役立つツール。_

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse は分散型の CI プラットフォームです。
- [Bencher](https://bencher.dev/) - CI でパフォーマンスの低下を検出するために設計された、継続的ベンチマークツールのスイート。
- [CDS](https://github.com/ovh/cds) - エンタープライズグレードの CI/CD および DevOps 自動化のためのオープンソースプラットフォーム。
- [dot](https://github.com/opnlabs/dot) - Docker を使ってジョブをステージごとに並行実行する、ミニマルでローカルファーストな継続的インテグレーションシステム。
- [drone](https://github.com/drone/drone) - Drone は Docker 上に構築され、Go で書かれた継続的インテグレーションプラットフォームです。
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - 美しい HTML プレビュー付きで、プルリクエストのコードカバレッジを無料で追跡できる GitHub Action。
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - Go 1.18 の組み込みファズテストを GitHub Actions で使用します。
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Git リポジトリのセマンティックバージョニングを自動化します。
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - テストカバレッジが設定したしきい値を下回ったときに問題を報告する GitHub Action。
- [gomason](https://github.com/nikogura/gomason) - クリーンなワークスペースから Go バイナリのテスト、ビルド、署名、公開を行います。
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - 人間のための go test 出力。
- [goveralls](https://github.com/mattn/goveralls) - 継続的コードカバレッジ追跡システム Coveralls.io との Go 連携。
- [muffet](https://github.com/raviqqe/muffet) - Go で書かれた高速な Web サイトのリンクチェッカー。[代替ツール](https://github.com/lycheeverse/lychee#features)も参照してください。
- [overalls](https://github.com/go-playground/overalls) - goveralls などのツール向けの、複数パッケージの Go プロジェクト用 coverprofile。
- [PikoCI](https://github.com/pikoci/pikoci) - Concourse にインスパイアされたセルフホスト型 CI/CD。単一バイナリで、任意のデータベースとキューを利用できます。HCL パイプライン、プラガブルなリソースタイプとランナーを備えています。
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - 再帰的なカバレッジテストツール。
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker は Drone CI システムのコミュニティフォークです。

**[⬆ トップに戻る](#contents)**

## CSS プリプロセッサー

_CSS ファイルを前処理するためのライブラリ。_

- [go-css](https://github.com/napsy/go-css) - Go で書かれた非常にシンプルな CSS パーサー。
- [go-libsass](https://github.com/wellington/go-libsass) - Sass と 100% 互換の libsass プロジェクトの Go ラッパー。

**[⬆ トップに戻る](#contents)**

## データ統合フレームワーク

_ELT / ETL を実行するためのフレームワーク_

- [Benthos](https://github.com/benthosdev/benthos) - さまざまなプロトコル間のメッセージストリーミングブリッジ。
- [CloudQuery](http://github.com/cloudquery/cloudquery) - プラガブルなアーキテクチャを備えた高性能な ELT データ統合フレームワーク。
- [confluence2md](https://github.com/gkoos/confluence2md) - Confluence から Markdown へのクローラー兼コンバーター。
- [omniparser](https://github.com/jf-tech/omniparser) - テキスト入力（CSV/txt/JSON/XML/EDI/X12/EDIFACT など）をストリーミング方式で解析し、データ駆動型スキーマを使って JSON 出力に変換する多用途な ETL ライブラリ。

**[⬆ トップに戻る](#contents)**

## データ構造とアルゴリズム

### ビットパッキングと圧縮

- [bingo](https://github.com/iancmcc/bingo) - ネイティブ型を辞書順を保ったままバイト列にパッキングする、高速でゼロアロケーションのライブラリ。
- [binpacker](https://github.com/zhuangsirui/binpacker) - カスタムバイナリストリームの構築を支援するバイナリパッカー/アンパッカー。
- [bit](https://github.com/yourbasic/bit) - おまけのビット操作関数を備えた Golang のセットデータ構造。
- [crunch](https://github.com/superwhiskers/crunch) - さまざまなデータ型を簡単に扱うためのバッファを実装した Go パッケージ。
- [go-ef](https://github.com/amallia/go-ef) - Elias-Fano 符号化の Go 実装。
- [roaring](https://github.com/RoaringBitmap/roaring) - 圧縮ビットセットを実装した Go パッケージ。

### ビットセット

- [bitmap](https://github.com/kelindar/bitmap) - Go による高密度でゼロアロケーション、SIMD 対応のビットマップ/ビットセット。
- [bitset](https://github.com/bits-and-blooms/bitset) - ビットセットを実装した Go パッケージ。

### ブルームフィルターとカッコウフィルター

- [bloom](https://github.com/bits-and-blooms/bloom) - ブルームフィルターを実装した Go パッケージ。
- [bloom](https://github.com/zhenjl/bloom) - Go で実装されたブルームフィルター。
- [bloom](https://github.com/yourbasic/bloom) - Golang によるブルームフィルターの実装。
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - Java の Guava ライブラリと互換性のある、Go によるもう一つのブルームフィルター実装。
- [boomfilters](https://github.com/tylertreat/BoomFilters) - 連続的で無制限のストリームを処理するための確率的データ構造。
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - カッコウフィルター：他の実装と比べて設定可能で空間効率に優れた包括的なカッコウフィルターであり、原論文で述べられているすべての機能を利用できます。
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - カッコウフィルター：Go で実装された、カウンティングブルームフィルターの優れた代替。
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - 空間効率の高い近似的な集合メンバーシップクエリのための、Ribbon フィルター（実用上ブルームフィルターや Xor フィルターより小さい）の初の Pure Go 実装。
- [ring](https://github.com/TheTannerRyan/ring) - 高性能でスレッドセーフなブルームフィルターの Go 実装。

### データ構造とアルゴリズムのコレクション

- [algorithms](https://github.com/shady831213/algorithms) - アルゴリズムとデータ構造。CLRS の学習用。
- [go-datastructures](https://github.com/Workiva/go-datastructures) - 便利で高性能かつスレッドセーフなデータ構造のコレクション。
- [gods](https://github.com/emirpasic/gods) - Go のデータ構造。コンテナ、セット、リスト、スタック、マップ、双方向マップ、ツリー、HashSet など。
- [gostl](https://github.com/liyue201/gostl) - C++ の STL に似た機能を提供するように設計された、Go 向けのデータ構造とアルゴリズムのライブラリ。

### イテレーター

- [glinq](https://github.com/CreateLab/glinq) - 型安全なジェネリクスとパフォーマンス最適化を備え、依存関係ゼロの LINQ ライクな遅延評価ライブラリ。
- [gloop](https://github.com/alvii147/gloop) - Go の range-over-func 機能を使った便利なループ処理。
- [goterator](https://github.com/yaa110/goterator) - map と reduce の機能を提供するイテレーターの実装。
- [iter](https://github.com/disksing/iter) - C++ STL のイテレーターとアルゴリズムの Go 実装。

### マップ

より複雑なキーバリューストアについては[データベース](#database)を、追加の順序付きマップの実装については[ツリー](#trees)を
参照してください。

- [cmap](https://github.com/lrita/cmap) - Go 向けのスレッドセーフな並行マップ。キーとして `interface{}` を使用でき、シャードを自動的にスケールアップします。
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - Swiss Map を使った、高性能でスレッドセーフなジェネリック並行ハッシュマップの実装。
- [dict](https://github.com/srfrog/dict) - Go 向けの Python ライクな辞書（dict）。
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - すべてのメソッドを網羅し、依存関係ゼロの、`sync.Map` 用の型安全なジェネリックラッパー。
- [go-shelve](https://github.com/lucmq/go-shelve) - Go プログラミング言語向けの、永続的なマップ風オブジェクト。複数の組み込みキーバリューストアをサポートしています。
- [goradd/maps](https://github.com/goradd/maps) - Go 1.18 以降向けのジェネリックなマップインターフェース。マップ、安全なマップ、順序付きマップ、順序付きで安全なマップなどに対応しています。
- [hmap](https://github.com/lyonnee/hmap) - HMap は、使いやすい API を提供するように設計された、並行処理に対応した安全でジェネリクス対応の Map 実装です。

### その他のデータ構造とアルゴリズム

- [combo](https://github.com/bobg/combo) - 順列、組み合わせ、重複組み合わせなどの組み合わせ演算。
- [concurrent-writer](https://github.com/free/concurrent-writer) - `bufio.Writer` の、高い並行性を持つドロップイン置き換え。
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Count-Min-Log スケッチの Go 実装：近似カウンターによる近似カウント（Count-Min スケッチに似ていますが、使用メモリがより少ない）。
- [FSM](https://github.com/enetx/fsm) - Go 向けの FSM。
- [fsm](https://github.com/cocoonspace/fsm) - 有限状態機械パッケージ。
- [genfuncs](https://github.com/nwillc/genfuncs) - Kotlin の Sequence と Map にインスパイアされた、Go 1.18 以降向けのジェネリクスパッケージ。
- [go-generics](https://github.com/bobg/go-generics) - ジェネリックなスライス、マップ、セット、イテレーター、ゴルーチンのユーティリティ。
- [go-geoindex](https://github.com/hailocab/go-geoindex) - インメモリの地理インデックス。
- [go-rampart](https://github.com/francesconi/go-rampart) - 区間同士がどのように関係しているかを判定します。
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - 効率的な点の位置特定と近傍探索を備えた領域四分木。
- [go-tuple](https://github.com/barweiss/go-tuple) - Go 1.18 以降向けのジェネリックなタプル実装。
- [go18ds](https://github.com/daichi-m/go18ds) - Go 1.18 のジェネリクスを使った Go のデータ構造。
- [gofal](https://github.com/xxjwxc/gofal) - Go 向けの分数 API。
- [gogu](https://github.com/esimov/gogu) - 包括的で再利用可能かつ効率的な、並行処理に安全なジェネリクスのユーティリティ関数とデータ構造のライブラリ。
- [gota](https://github.com/kniren/gota) - Go 向けのデータフレーム、シリーズ、データ整形手法の実装。
- [hide](https://github.com/emvi/hide) - クライアントに ID を送信しないよう、ハッシュとの相互マーシャリングを行う ID 型。
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Sparse 表現、LogLog-Beta バイアス補正、TailCut による空間削減を備えた HyperLogLog の実装。
- [quadtree](https://github.com/s0rg/quadtree) - ジェネリックでゼロアロケーション、テストカバレッジ 100% の四分木。
- [slices](https://github.com/twharmon/slices) - スライス用の純粋なジェネリック関数。
- [xsync](https://github.com/puzpuzpuz/xsync) - 並行ジェネリックハッシュテーブルである `xsync.Map` などの、並行処理向けのスケーラブルなデータ構造。

### Nullable 型

- [nan](https://github.com/kak-tus/nan) - 便利な変換関数、マーシャラー、アンマーシャラーを備えた、ゼロアロケーションの Nullable 構造体を 1 つにまとめたライブラリ。
- [null](https://github.com/emvi/null) - JSON との間でマーシャル/アンマーシャルできる Nullable な Go の型。
- [typ](https://github.com/gurukami/typ) - Null 型、安全なプリミティブ型変換、複雑な構造体からの値の取得。

### キュー

- [deheap](https://github.com/aalpar/deheap) - 最小要素と最大要素の両方に O(log n) でアクセスできる両端ヒープ（min-max ヒープ）。
- [deque](https://github.com/edwingeng/deque) - 高度に最適化された両端キュー。
- [deque](https://github.com/gammazero/deque) - 高速なリングバッファ方式の deque（両端キュー）。
- [dqueue](https://github.com/vodolaz095/dqueue) - シンプルでインメモリ、依存関係ゼロで実績のある、スレッドセーフな遅延キュー。
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - 並行 FIFO キュー。
- [hatchet](https://github.com/hatchet-dev/hatchet) - 分散型でフォールトトレラントなタスクキュー。
- [list](https://github.com/koss-null/list) - 完全なイテレーターサポートを備えたジェネリックでスレッドセーフな双方向連結リストと、埋め込み用途向けの侵入型単方向連結リスト。container/list の多機能な代替です。
- [memlog](https://github.com/embano1/memlog) - Apache Kafka にインスパイアされた、使いやすく軽量でスレッドセーフな追記専用のインメモリデータ構造。
- [queue](https://github.com/adrianbrad/queue) - Go 向けの、スレッドセーフでジェネリックな複数のキュー実装。

### セット

- [dsu](https://github.com/ihebu/dsu) - Go による素集合データ構造の実装。
- [golang-set](https://github.com/deckarep/golang-set) - Go 向けの、スレッドセーフおよび非スレッドセーフな高性能セット。
- [goset](https://github.com/zoumo/goset) - Go 向けの便利なセットコレクションの実装。
- [set](https://github.com/StudioSol/set) - LinkedHashMap を使った、Go によるシンプルなセットデータ構造の実装。

### テキスト解析

- [bleve](https://github.com/blevesearch/bleve) - Go 向けのモダンなテキストインデックスライブラリ。
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Adaptive Radix Tree の Go 実装。
- [go-edlib](https://github.com/hbollon/go-edlib) - Unicode に対応した、Go の文字列比較・編集距離アルゴリズムライブラリ（Levenshtein、LCS、Hamming、Damerau levenshtein、Jaro-Winkler など）。
- [levenshtein](https://github.com/agext/levenshtein) - 編集コストをカスタマイズでき、共通接頭辞に Winkler 風のボーナスを付与する、レーベンシュタイン距離と類似度指標。
- [levenshtein](https://github.com/agnivade/levenshtein) - Go でレーベンシュタイン距離を計算するための実装。
- [mspm](https://github.com/BlackRabbitt/mspm) - 情報検索のための複数文字列パターンマッチングアルゴリズム。
- [parsefields](https://github.com/MonaxGT/parsefields) - JSON 風のログを解析し、一意のフィールドやイベントを収集するためのツール。
- [ptrie](https://github.com/viant/ptrie) - プレフィックスツリーの実装。
- [radixtree](https://github.com/gammazero/radixtree) - 適応型基数木（プレフィックスツリーまたはコンパクトトライ）。
- [trie](https://github.com/derekparker/trie) - Go によるトライ木の実装。

### ツリー

- [graphlib](https://github.com/aio-arch/graphlib) - トポロジカルソートライブラリ。DAG グラフのソートと枝刈りを行います。
- [hashsplit](http://github.com/bobg/hashsplit) - 位置ではなく内容によって境界を決定し、バイトストリームをチャンクに分割してツリー状に配置します。
- [merkle](https://github.com/bobg/merkle) - Merkle ルートハッシュと包含証明の、空間効率に優れた計算。
- [skiplist](https://github.com/MauriceGit/skiplist) - 非常に高速な Go のスキップリスト実装。
- [skiplist](https://github.com/gansidui/skiplist) - Go によるスキップリストの実装。
- [skiplist](https://github.com/huandu/skiplist) - Go 向けの高速で使いやすいスキップリスト。
- [treemap](https://github.com/igrmk/treemap) - 内部で赤黒木を使用した、キーでソートされるジェネリックなマップ。

### パイプ

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - 処理を並行して実行し、入力順に出力をチャネルで返す Go モジュール。
- [parapipe](https://github.com/nazar256/parapipe) - メッセージと結果の順序を維持しながら、各ステージで並列実行する FIFO パイプライン。
- [pipeline](https://github.com/hyfather/pipeline) - ファンインとファンアウトを備えたパイプラインの実装。
- [pipelines](https://github.com/nxdir-s/pipelines) - 並行処理のためのジェネリックなパイプライン関数。

**[⬆ トップに戻る](#contents)**

## データベース

### キャッシュ

_有効期限付きのレコードを持つデータストア、インメモリ分散データストア、またはファイルベースのデータベースのインメモリサブセット。_

- [bcache](https://github.com/iwanbk/bcache) - 結果整合性を持つ分散インメモリキャッシュの Go ライブラリ。
- [BigCache](https://github.com/allegro/bigcache) - ギガバイト単位のデータに対応する効率的なキー/バリューキャッシュ。
- [cache2go](https://github.com/muesli/cache2go) - タイムアウトに基づく自動無効化をサポートする、インメモリの key:value キャッシュ。
- [cachego](https://github.com/faabiosr/cachego) - 複数のドライバーに対応した Golang のキャッシュコンポーネント。
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - クラスタリングのサポートと項目ごとの有効期限を備えた BigCache。
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - ネットワークトランスポートに gRPC を使用する、Go アプリケーション向けの Oracle Coherence キャッシュ API の完全な実装。
- [couchcache](https://github.com/codingsince1985/couchcache) - Couchbase サーバーをバックエンドとする RESTful なキャッシュマイクロサービス。
- [easycache](https://github.com/hugocarreira/easycache) - Golang でインメモリキャッシュを使うためのシンプルな方法（TTL/FIFO/LRU/LFU）。
- [EchoVault](https://github.com/EchoVault/EchoVault) - Redis クライアントと互換性のある、組み込み可能な分散インメモリデータストア。
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - 大量のエントリーに対応する、高速でスレッドセーフなインメモリキャッシュ。GC のオーバーヘッドを最小限に抑えます。
- [GCache](https://github.com/bluele/gcache) - 有効期限付きキャッシュ、LFU、LRU、ARC をサポートするキャッシュライブラリ。
- [gdcache](https://github.com/ulovecode/gdcache) - Golang で実装された純粋で非侵襲的なキャッシュライブラリ。独自の分散キャッシュの実装に利用できます。
- [go-cache](https://github.com/viney-shih/go-cache) - Cache-Aside パターンを採用し、インメモリキャッシュと共有キャッシュを扱う、柔軟な多層 Go キャッシュライブラリ。
- [go-freelru](https://github.com/elastic/go-freelru) オプションのロック、シャーディング、追い出し、有効期限を備えた、GC フリーで高速なジェネリック LRU ハッシュマップライブラリ。
- [go-gcache](https://github.com/szyhf/go-gcache) - `GCache` のジェネリック版。有効期限付きキャッシュ、LFU、LRU、ARC をサポートします。
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - 高速なインメモリの key:value ストア/キャッシュライブラリ。ポインターをキャッシュします。
- [gocache](https://github.com/eko/gocache) - 複数のストア（memory、memcache、redis など）に対応し、チェーン可能なキャッシュ、ロード可能なキャッシュ、メトリクスキャッシュなどを備えた完全な Go キャッシュライブラリ。
- [gocache](https://github.com/yuseferi/gocache) - 高性能で自動パージ機能を備えた、データ競合のない Go キャッシュライブラリ
- [groupcache](https://github.com/golang/groupcache) - Groupcache はキャッシュとキャッシュ充填のためのライブラリで、多くの場合 memcached の代替となることを意図しています。
- [icache](https://github.com/mdaliyan/icache) - 高性能でジェネリック、スレッドセーフかつ依存関係ゼロのキャッシュパッケージ。
- [imcache](https://github.com/erni27/imcache) - ジェネリックなインメモリキャッシュの Go ライブラリ。有効期限、スライディング有効期限、最大エントリー数の制限、追い出しコールバック、シャーディングをサポートしています。
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - マルチレベルキャッシュをサポートする統合 Go キャッシュライブラリ。
- [nscache](https://github.com/no-src/nscache) - 複数のデータソースドライバーをサポートする Go のキャッシュフレームワーク。
- [otter](https://github.com/maypok86/otter) - Go 向けの高性能なロックレスキャッシュ。Ristretto などと比べて何倍も高速です。
- [pocache](https://github.com/naughtygopher/pocache) - Pocache は、先制的かつ楽観的なキャッシュ戦略に重点を置いた最小限のキャッシュパッケージです。
- [ristretto](https://github.com/dgraph-io/ristretto) - メモリ使用量に上限を設けられる高性能な Go キャッシュ。
- [sturdyc](https://github.com/viccon/sturdyc) - I/O の多いアプリケーションを堅牢かつ高性能にするために設計された、高度な並行処理機能を備えたキャッシュライブラリ。
- [theine](https://github.com/Yiling-J/theine-go) - 積極的な TTL 期限切れ処理とジェネリクスを備えた、高性能でほぼ最適なインメモリキャッシュ。
- [timedmap](https://github.com/zekroTJA/timedmap) - 有効期限付きのキーと値のペアを持つマップ。
- [ttlcache](https://github.com/jellydator/ttlcache) - 項目の有効期限とジェネリクスを備えたインメモリキャッシュ。
- [ttlcache](https://github.com/cheshir/ttlcache) - レコードごとに TTL を設定できるインメモリのキーバリューストレージ。

### Go で実装されたデータベース

- [badger](https://github.com/dgraph-io/badger) - Go による高速なキーバリューストア。
- [bbolt](https://github.com/etcd-io/bbolt) - Go 向けの組み込みキー/バリューデータベース。
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask は、Pure Go で書かれた組み込み可能で永続的かつ高速なキーバリュー（KV）データベースです。bitcask のオンディスクレイアウト（LSM+WAL）により、予測可能な読み書き性能、低レイテンシ、高スループットを実現しています。
- [buntdb](https://github.com/tidwall/buntdb) - カスタムインデックスと空間データをサポートする、Go 向けの高速で組み込み可能なインメモリキー/バリューデータベース。
- [clover](https://github.com/ostafen/clover) - Pure Golang で書かれた、軽量なドキュメント指向 NoSQL データベース。
- [cockroach](https://github.com/cockroachdb/cockroach) - スケーラブルで地理的にレプリケートされる、トランザクション対応のデータストア。
- [Coffer](https://github.com/claygod/coffer) - トランザクションをサポートする、シンプルな ACID キーバリューデータベース。
- [column](https://github.com/kelindar/column) - ビットマップインデックスとトランザクションを備えた、高性能でカラム指向、組み込み可能なインメモリストア。
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL はブロックチェーン上の SQL データベースです。
- [Databunker](https://github.com/paranoidguy/databunker) - GDPR と CCPA に準拠するよう構築された、個人を特定できる情報（PII）のストレージサービス。
- [dgraph](https://github.com/dgraph-io/dgraph) - スケーラブルで分散型、低レイテンシかつ高スループットのグラフデータベース。
- [DiceDB](https://github.com/DiceDB/dice) - 最新のハードウェア向けに最適化された、オープンソースで高速かつリアクティブなインメモリデータベース。高いスループットと低いレイテンシ中央値により、最新のワークロードに最適です。
- [diskv](https://github.com/peterbourgon/diskv) - 自家製のディスクベースのキーバリューストア。
- [dolt](https://github.com/dolthub/dolt) - Dolt – データのための Git。
- [eliasdb](https://github.com/krotik/eliasdb) - REST API、フレーズ検索、SQL ライクなクエリ言語を備えた、依存関係のないトランザクション対応グラフデータベース。
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - Pure Go で書かれた MongoDB ライクな組み込みデータベース。インデックスと複雑なクエリをサポートしています。
- [go-sqlite](https://github.com/glebarez/go-sqlite) – CGO を使わずに Pure Golang で実装された SQLite ドライバー。
- [godis](https://github.com/hdt3213/godis) - Golang で実装された高性能な Redis サーバーおよびクラスター。
- [goleveldb](https://github.com/syndtr/goleveldb) - [LevelDB](https://github.com/google/leveldb) キー/バリューデータベースの Go 実装。
- [hare](https://github.com/jameycribbs/hare) - 各テーブルを行区切り JSON のテキストファイルとして保存する、シンプルなデータベース管理システム。
- [immudb](https://github.com/codenotary/immudb) - immudb は、システムやアプリケーション向けの軽量で高速なイミュータブルデータベースで、Go で書かれています。
- [influxdb](https://github.com/influxdb/influxdb) - メトリクス、イベント、リアルタイム分析のためのスケーラブルなデータストア。
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb は、LevelDB をベースにした Redis のような高性能 NoSQL です。
- [levigo](https://github.com/jmhodges/levigo) - Levigo は LevelDB の Go ラッパーです。
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB は、学習用に 1000 行未満のコードで書かれたシンプルなデータベースです。
- [LinDB](https://github.com/lindb/lindb) - LinDB は、スケーラブルで高性能、高可用性の分散時系列データベースです。
- [lotusdb](https://github.com/flower-corp/lotusdb) - LSM と B+ ツリーに対応した高速な K/V データベース。
- [lynxdb](https://github.com/lynxbase/lynxdb) - SPL にインスパイアされたパイプ形式のクエリ言語を備えた、軽量なカラム指向のログ分析データベース。
- [MemHop](https://github.com/qyiun666/MemHop) - AI エージェント向けの組み込み型認知メモリデータベース。6 層アーキテクチャ（L0〜L5）、Dream 統合パイプライン、3 チャネルの RRF 検索（BM25 + f16 ベクトル + エンティティ）を備え、単一の .meh ファイルで動作します。Pure Go で、インフラは不要です。
- [Milvus](https://github.com/milvus-io/milvus) - Milvus は、埋め込みの管理、分析、検索のためのベクトルデータベースです。
- [minisql](https://github.com/RichardKnop/minisql) - 単一ファイルの組み込み SQL データベース。
- [moss](https://github.com/couchbase/moss) - Moss は、100% Go で書かれたシンプルな LSM キーバリューストレージエンジンです。
- [nanotdb](https://github.com/aymanhs/nanotdb) - 低消費電力ハードウェア向けに最適化された、軽量で依存関係ゼロの追記専用時系列データベース兼ダッシュボード。
- [NoKV](https://github.com/feichai0017/NoKV) - 分散ファイルシステム、オブジェクトストレージ、AI データセットのワークロード向けのネイティブなメタデータサービス。
- [NornicDB](https://github.com/orneryd/NornicDB) - AI システム向けの低レイテンシな Graph RAG 検索に重点を置いた、高性能なグラフ + ベクトルデータベース（Neo4j および qDrant 互換）。 
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb は、Pure Go で書かれたシンプルで高速、組み込み可能で永続的なキー/バリューストアです。完全にシリアライズ可能なトランザクションと、リスト、セット、ソート済みセットなどの多くのデータ構造をサポートしています。
- [objectbox-go](https://github.com/objectbox/objectbox-go) - Go API を備えた、高性能な組み込みオブジェクトデータベース（NoSQL）。
- [pebble](https://github.com/cockroachdb/pebble) - RocksDB/LevelDB にインスパイアされた、Go のキーバリューデータベース。
- [piladb](https://github.com/fern4lvarez/piladb) - スタックデータ構造に基づく軽量な RESTful データベースエンジン。
- [pogreb](https://github.com/akrylysov/pogreb) - 読み取りの多いワークロード向けの組み込みキーバリューストア。
- [prometheus](https://github.com/prometheus/prometheus) - 監視システム兼時系列データベース。
- [pudge](https://github.com/recoilme/pudge) - Go の標準ライブラリを使って書かれた、高速でシンプルなキー/バリューストア。
- [redka](https://github.com/nalgeon/redka) - SQLite で再実装された Redis。
- [rosedb](https://github.com/roseduan/rosedb) - LSM+WAL に基づく組み込み K-V データベース。string、list、hash、set、zset をサポートしています。
- [rotom](https://github.com/xgzlucario/rotom) - RESP プロトコルと互換性のある、Golang で構築された小さな Redis サーバー。
- [rqlite](https://github.com/rqlite/rqlite) - SQLite 上に構築された、軽量な分散リレーショナルデータベース。
- [tempdb](https://github.com/rafaeljesus/tempdb) - 一時的な項目のためのキーバリューストア。
- [tidb](https://github.com/pingcap/tidb) - TiDB は分散 SQL データベースです。Google F1 の設計にインスパイアされています。
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Golang で動く、あなたのための NoSQL データベース。
- [unitdb](https://github.com/unit-io/unitdb) - IoT やリアルタイムメッセージングアプリケーション向けの高速な時系列データベース。github.com/unit-io/unitd アプリケーションを使い、TCP または WebSocket 上の Pub/Sub で unitdb にアクセスできます。
- [Vasto](https://github.com/chrislusf/vasto) - 分散型の高性能キーバリューストア。ディスクベースで結果整合性を持ち、高可用性（HA）を備えています。サービスを中断せずに拡張・縮小できます。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 高速でリソース効率が高く、スケーラブルなオープンソースの時系列データベース。Prometheus の長期リモートストレージとして使用できます。PromQL をサポートしています。
- 
### データベーススキーマのマイグレーション

- [atlas](https://github.com/ariga/atlas) - データベースツールキット。企業がデータをより上手に扱えるよう支援するために設計された CLI。
- [avro](https://github.com/khezen/avro) - SQL スキーマを検出して AVRO スキーマに変換します。SQL レコードを AVRO バイト列としてクエリできます。
- [bytebase](https://github.com/bytebase/bytebase) - DevOps チーム向けの、安全なデータベーススキーマ変更とバージョン管理。
- [darwin](https://github.com/GuiaBolso/darwin) - Go 向けのデータベーススキーマ進化ライブラリ。
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - PostgreSQL、MySQL、ClickHouse、Tarantool、Apache Iceberg をサポートする、バージョン管理されたデータベーススキーマのマイグレーション用 CLI。
- [dbmate](https://github.com/amacneil/dbmate) - 軽量でフレームワークに依存しないデータベースマイグレーションツール。
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Golang の優れた組み込み database/sql ライブラリ向けの、Django スタイルのフィクスチャ。
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - go-pg のマイグレーション管理のための、CLI と相性の良いパッケージ。
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - go-pg/pg でマイグレーションを書くのを支援する Go パッケージ。
- [goavro](https://github.com/linkedin/goavro) - Avro データをエンコード・デコードする Go パッケージ。
- [godfish](https://github.com/rafaelespinoza/godfish) - ネイティブのクエリ言語で動作するデータベースマイグレーションマネージャー。cassandra、mysql、postgres、sqlite3 をサポートしています。
- [goose](https://github.com/pressly/goose) - データベースマイグレーションツール。段階的な SQL または Go のスクリプトを作成して、データベースの進化を管理できます。
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Gorm ORM 向けのシンプルなデータベースシーダー。
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Gorm ORM 向けのデータベーススキーママイグレーションヘルパー。
- [libschema](https://github.com/muir/libschema) - ライブラリごとに個別にマイグレーションを定義できます。オープンソースライブラリのためのマイグレーションで、MySQL と PostgreSQL に対応しています。
- [migrate](https://github.com/golang-migrate/migrate) - データベースマイグレーション。CLI と Golang ライブラリ。
- [migrator](https://github.com/lopezator/migrator) - 非常にシンプルな Go のデータベースマイグレーションライブラリ。
- [migrator](https://github.com/larapulse/migrator) - 機能に合わせてマイグレーションを実行し、直感的な Go コードでデータベーススキーマの更新を管理するように設計された MySQL データベースマイグレーター。
- [schema](https://github.com/adlio/schema) - database/sql 互換データベース向けのスキーママイグレーションを Go バイナリに埋め込むためのライブラリ。
- [skeema](https://github.com/skeema/skeema) - シャーディングと外部のオンラインスキーマ変更ツールをサポートする、MySQL 向けの Pure SQL スキーマ管理システム。
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - MySQL、PostgreSQL、SQLite 向けのデータベースのマイグレーション、作成、ORM など。
- [sql-migrate](https://github.com/rubenv/sql-migrate) - データベースマイグレーションツール。go-bindata を使ってマイグレーションをアプリケーションに埋め込めます。
- [sqlize](https://github.com/sunary/sqlize) - データベースマイグレーションジェネレーター。モデルと既存の SQL の差分を取って SQL マイグレーションを生成できます。

### データベースツール

- [chproxy](https://github.com/Vertamedia/chproxy) - ClickHouse データベース用の HTTP プロキシ。
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - 小さな INSERT を集約し、大きなリクエストとして ClickHouse サーバーに送信します。
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - 型付き AST を生成する ClickHouse 方言 SQL 用のパーサー。走査ヘルパー、ラウンドトリップ可能なフォーマット、CLI を備えています。
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - ACL、ログ、共有リンクを使って本番環境で SQL を実行します。
- [dbbench](https://github.com/sj14/dbbench) - 複数のデータベースとスクリプトをサポートするデータベースベンチマークツール。
- [dg](https://github.com/codingconcepts/dg) - 生成したリレーショナルデータから CSV ファイルを作成する高速なデータジェネレーター。
- [filesql](https://github.com/nao1215/filesql) - インメモリ SQLite を基盤として、database/sql API を通じて CSV、TSV、LTSV、JSON、JSONL、Parquet、Excel、ACH、Fedwire の各ファイルに SQL でクエリを実行します。
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - データ駆動型アプリケーションを構築するための、クラウドネイティブなデータベースゲートウェイ兼フレームワーク。データベース版の API ゲートウェイのようなものです。
- [go-mysql](https://github.com/siddontang/go-mysql) - MySQL プロトコルとレプリケーションを扱うための Go ツールセット。
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - AWS Lambda を使った、PostgreSQL から S3 へのサーバーレスバックアップ。日次、月次、年次のローテーションに対応しています。
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - GORM で管理されるデータベースのマルチテナンシーサポート。
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - 複数の方言のサポートと WASM プレイグラウンドを備えた、高性能な SQL パーサー、フォーマッター、リンター、セキュリティスキャナー。
- [hasql](https://golang.yandex/hasql) - マルチホスト構成の SQL データベースにアクセスするためのライブラリ。
- [octillery](https://github.com/knocknote/octillery) - データベースをシャーディングするための Go パッケージ（あらゆる ORM や生の SQL をサポート）。
- [onedump](https://github.com/liweiyi88/onedump) - 1 つのコマンドと設定で、さまざまなドライバーからさまざまな保存先へデータベースをバックアップします。
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 向けの高度なスケジューリング。
- [pgrwl](https://github.com/pgrwl/pgrwl) - PostgreSQL 向けのクラウドネイティブな継続的バックアップ。
- [pgwd](https://github.com/hrodrig/pgwd) - PostgreSQL の接続数（合計、アクティブ、アイドル、ステール）を監視し、しきい値を超えると Slack や Loki で通知する CLI。Kubernetes（kubectl port-forward）と、通知へのオプションの実行コンテキストの付与をサポートしています。
- [pgweb](https://github.com/sosedoff/pgweb) - Web ベースの PostgreSQL データベースブラウザー。
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - pgcli にインスパイアされた、Go で書かれた PostgreSQL の CLI クライアント。
- [prep](https://github.com/hexdigest/prep) - コードを変更せずにプリペアドステートメントを使用できます。
- [pREST](https://github.com/prest/prest) - 開発をシンプルにし、加速させます。既存・新規を問わず、あらゆる Postgres アプリケーションで ⚡ 即座に、リアルタイムかつ高性能に動作します。
- [rdb](https://github.com/HDT3213/rdb) - 二次開発やメモリ分析のための Redis RDB ファイルパーサー。
- [rwdb](https://github.com/andizzle/rwdb) - rwdb は、複数のデータベースサーバー構成にリードレプリカ機能を提供します。
- [sqly](https://github.com/nao1215/sqly) - インメモリ SQLite を基盤として、対話型シェルで CSV、TSV、LTSV、JSON、Parquet、Excel の各ファイルに対して SQL を実行します。
- [vitess](https://github.com/youtube/vitess) - vitess は、大規模 Web サービス向けに MySQL データベースのスケーリングを容易にするサーバーとツールを提供します。
- [wescale](https://github.com/wesql/wescale) - WeScale は、アプリケーションのスケーラビリティ、パフォーマンス、セキュリティ、レジリエンスを高めるために設計されたデータベースプロキシです。
- [xsql](https://github.com/zx06/xsql) - 読み取り専用の保護と構造化された JSON 出力を備えた、AI ファーストのクロスデータベース CLI ツール。

### SQL クエリビルダー

_SQL を構築・利用するためのライブラリ。_

- [bqb](https://github.com/nullism/bqb) - 軽量で習得しやすいクエリビルダー。
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - PostgreSQL 向けの Go データベースクエリビルダーライブラリ。
- [builq](https://github.com/cristalhq/builq) - Go で SQL クエリを簡単に構築します。
- [dba](https://github.com/kran/dba) - 手書きの SQL 向けの SQL クエリビルダー。動的な条件、方言を考慮したプレースホルダー、イミュータブルなチェーンを追加します。
- [dbq](https://github.com/rocketlaunchr/dbq) - Go 向けの、ボイラープレート不要のデータベース操作。
- [Dotsql](https://github.com/gchaincl/dotsql) - SQL ファイルを 1 か所にまとめて簡単に使えるようにする Go ライブラリ。
- [gendry](https://github.com/didi/gendry) - 非侵襲的な SQL ビルダーと強力なデータバインダー。
- [godbal](https://github.com/xujiajun/godbal) - Go 向けのデータベース抽象化レイヤー（dbal）。SQL ビルダーをサポートし、結果を簡単に取得できます。
- [goqu](https://github.com/doug-martin/goqu) - イディオマティックな SQL ビルダー兼クエリライブラリ。
- [gosql](https://github.com/twharmon/gosql) - null 値のサポートを強化した SQL クエリビルダー。
- [Hotcoal](https://github.com/motrboat/hotcoal) - 手書きの SQL をインジェクションから守ります。
- [igor](https://github.com/galeone/igor) - 高度な機能をサポートし、gorm ライクな構文を使う PostgreSQL 向けの抽象化レイヤー。
- [jet](https://github.com/go-jet/jet) - Go で型安全な SQL クエリを書くためのフレームワーク。データベースのクエリ結果を任意のオブジェクト構造に簡単に変換できます。
- [obreron](https://github.com/profe-ajedrez/obreron) - SQL の構築という 1 つのことだけを行う、高速で軽量な SQL ビルダー。
- [ormlite](https://github.com/pupizoid/ormlite) - SQLite データベース向けの ORM 風の機能とヘルパーを含む軽量パッケージ。
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - 強力なデータ取得メソッドと、DB に依存しないクエリ構築機能。
- [patcher](https://github.com/Jacobbrewer1/patcher) - 構造体から SQL クエリを自動生成する強力な SQL クエリビルダー。
- [qrafter](https://github.com/SennovE/qrafter) - 方言を考慮したレンダリング、スキーマのイントロスペクション、マイグレーション生成を備えた型安全な SQL クエリビルダー。
- [qry](https://github.com/HnH/qry) - 生の SQL クエリを含むファイルから定数を生成するツール。
- [relica](https://github.com/coregx/relica) - 本番依存関係ゼロ、LRU ステートメントキャッシュ、バッチ操作を備え、JOIN、サブクエリ、CTE、ウィンドウ関数をサポートする型安全なデータベースクエリビルダー。
- [sg](https://github.com/go-the-way/sg) - Go で書かれた、標準的な SQL（CRUD に対応）を生成する SQL ジェネレーター。
- [sq](https://github.com/bokwoon95/go-structured-query) - Go 向けの型安全な SQL ビルダー兼構造体マッパー。
- [sqlc](https://github.com/kyleconroy/sqlc) - SQL から型安全なコードを生成します。
- [sqlcredo](https://github.com/Klojer/sqlcredo) - ページネーション、トランザクション、デバッグ、カスタムの生 SQL 拡張を備えた、型安全でジェネリックな SQL CRUD 操作のためのパッケージ。
- [sqlf](https://github.com/leporo/sqlf) - 高速な SQL クエリビルダー。
- [sqlh](https://github.com/kirill-scherba/sqlh) - 構造体タグと Go のジェネリクスを使った、ボイラープレート不要の SQL ヘルパー（CRUD、UPSERT、JOIN、ベンチマーク）。
- [sqlingo](https://github.com/lqs/sqlingo) - Go で SQL を構築するための軽量な DSL。
- [sqrl](https://github.com/elgris/sqrl) - パフォーマンスを改善した Squirrel のフォークである SQL クエリビルダー。
- [Squalus](https://gitlab.com/qosenergy/squalus) - クエリの実行を容易にする、Go の SQL パッケージ上の薄いレイヤー。
- [Squirrel](https://github.com/Masterminds/squirrel) - SQL クエリの構築を支援する Go ライブラリ。
- [xo](https://github.com/knq/xo) - 既存のスキーマ定義やカスタムクエリに基づいて、データベース向けのイディオマティックな Go コードを生成します。PostgreSQL、MySQL、SQLite、Oracle、Microsoft SQL Server をサポートしています。

**[⬆ トップに戻る](#contents)**

## データベースドライバー

### 複数バックエンド向けインターフェース

- [cayley](https://github.com/google/cayley) - 複数のバックエンドをサポートするグラフデータベース。
- [dsc](https://github.com/viant/dsc) - SQL、NoSQL、構造化ファイル向けのデータストア接続。
- [dynamo](https://github.com/fogfish/dynamo) - 代数的データ型やリンクトデータのデータ型を AWS のストレージサービス（AWS DynamoDB と AWS S3）に保存するための、シンプルなキーバリュー抽象化。
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - 複数のアダプター（sql、sqlx、gorm、mongo など）を備え、トランザクション境界を制御するトランザクションマネージャー。
- [gokv](https://github.com/philippgille/gokv) - Go 向けのシンプルなキーバリューストアの抽象化と実装（Redis、Consul、etcd、bbolt、BadgerDB、LevelDB、Memcached、DynamoDB、S3、PostgreSQL、MongoDB、CockroachDB など多数）。
- [transactor](https://github.com/metalfm/transactor) - database/sql、sqlx、pgx 用のアダプターを備えた、型安全なトランザクション境界の抽象化。

### リレーショナルデータベースドライバー

- [avatica](https://github.com/apache/calcite-avatica-go) - database/sql 用の Apache Avatica/Phoenix SQL ドライバー。
- [bgc](https://github.com/viant/bgc) - Go 向けの BigQuery 用データストア接続。
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Go 向けの Firebird RDBMS SQL ドライバー。
- [go-adodb](https://github.com/mattn/go-adodb) - database/sql を使用する、Go 向けの Microsoft ActiveX Object DataBase ドライバー。
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Go 向けの Microsoft MSSQL ドライバー。
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - SQL Server、Azure SQL、Azure Synapse、SQL database in Fabric、Fabric Data Warehouse 向けの Microsoft 公式 Go ドライバー。Azure AD、Always Encrypted、一括操作をサポートしています。
- [go-oci8](https://github.com/mattn/go-oci8) - database/sql を使用する、Go 向けの Oracle ドライバー。
- [go-rqlite](https://github.com/rqlite/gorqlite) - rqlite API を扱うための使いやすい抽象化を提供する、rqlite 用の Go クライアント。
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Go 向けの MySQL ドライバー。
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - database/sql を使用する、Go 向けの SQLite3 ドライバー。
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - この Go モジュールは database/sql ドライバーと互換性があります。SQLite をアプリケーションに組み込むことができ、C API への直接アクセスを提供し、SQLite VFS をサポートし、GORM ドライバーも含んでいます。
- [godror](https://github.com/godror/godror) - ODPI-C ドライバーを使用する、Go 向けの Oracle ドライバー。
- [gofreetds](https://github.com/minus5/gofreetds) - Microsoft MSSQL ドライバー。[FreeTDS](https://www.freetds.org) の Go ラッパーです。
- [KSQL](https://github.com/VinGarcia/ksql) - シンプルで強力な Golang の SQL ライブラリ。
- [pgx](https://github.com/jackc/pgx) - database/sql が公開する機能を超える機能をサポートする PostgreSQL ドライバー。
- [pig](https://github.com/alexeyco/pig) - クエリを実行し、その結果を簡単に[スキャン](https://github.com/georgysavva/scany)するためのシンプルな [pgx](https://github.com/jackc/pgx) ラッパー。
- [pq](https://github.com/lib/pq) - database/sql 用の Pure Go の Postgres ドライバー。
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - Pure Go で使う SQLite。
- [sqlhooks](https://github.com/qustavo/sqlhooks) - 任意の database/sql ドライバーにフックを追加します。
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - sqlite パッケージは、C の SQLite3 ライブラリを CGo なしで移植したものを使う sql/database ドライバーです。
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Go 向けの SurrealDB ドライバー。
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - YDB（Yandex Database）用のネイティブドライバーおよび database/sql ドライバー。

### NoSQL データベースドライバー

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Go 言語による Aerospike クライアント。
- [arangolite](https://github.com/solher/arangolite) - ArangoDB 用の軽量な Golang ドライバー。
- [asc](https://github.com/viant/asc) - Go 向けの Aerospike 用データストア接続。
- [forestdb](https://github.com/couchbase/goforestdb) - ForestDB の Go バインディング。
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Go による Couchbase クライアント。
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - 公式ドライバーをベースにした Go の Mongo ライブラリ。効率化されたドキュメント操作、構造体とコレクションのジェネリックなバインディング、組み込みの CRUD、集計、フィールドの自動更新、構造体のバリデーション、フック、プラグインベースのプログラミングを特徴としています。
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Pilosa 用の Go クライアントライブラリ。
- [go-rejson](https://github.com/nitishm/go-rejson) - Redigo Golang クライアントを使用した、redislabs の ReJSON モジュール用の Golang クライアント。構造体を JSON オブジェクトとして Redis に簡単に保存・操作できます。
- [gocb](https://github.com/couchbase/gocb) - 公式の Couchbase Go SDK。
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Azure Cosmos DB 用の REST クライアントおよび標準 `database/sql` ドライバー。
- [gocql](https://gocql.github.io) - Apache Cassandra 用の Go 言語ドライバー。
- [godis](https://github.com/piaohao/godis) - jedis にインスパイアされた、Golang で実装された Redis クライアント。
- [godscache](https://github.com/defcronyke/godscache) - memcached を使ったキャッシュを追加する、Google Cloud Platform の Go Datastore パッケージのラッパー。
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Go プログラミング言語向けの memcache クライアントライブラリ。
- [gomemcached](https://github.com/aliexpressru/gomemcached) - コンシステントハッシュによるシャーディングと SASL をサポートする、Go 向けのバイナリ Memcached クライアント。
- [gorethink](https://github.com/dancannon/gorethink) - RethinkDB 用の Go 言語ドライバー。
- [goriak](https://github.com/zegl/goriak) - Riak KV 用の Go 言語ドライバー。
- [Kivik](https://github.com/go-kivik/kivik) - Kivik は、CouchDB、PouchDB、および類似のデータベース向けに、Go と GopherJS 共通のクライアントライブラリを提供します。
- [mgm](https://github.com/kamva/mgm) - Go 向けの MongoDB モデルベース ODM（公式 MongoDB ドライバーがベース）。
- [mgo](https://github.com/globalsign/mgo) - （メンテナンス終了）標準的な Go のイディオムに従った非常にシンプルな API で、豊富かつ十分にテストされた機能群を実装した Go 言語向けの MongoDB ドライバー。
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Go 言語向けの公式 MongoDB ドライバー。
- [neo4j](https://github.com/cihangir/neo4j) - Golang 向けの Neo4j REST API バインディング。
- [neoism](https://github.com/jmcvetta/neoism) - Golang 向けの Neo4j クライアント。
- [qmgo](https://github.com/qiniu/qmgo) - Go 向けの MongoDB ドライバー。公式 MongoDB ドライバーをベースにしていますが、Mgo のように使いやすくなっています。
- [redeo](https://github.com/bsm/redeo) - Redis プロトコル互換の TCP サーバー/サービス。
- [redigo](https://github.com/gomodule/redigo) - Redigo は Redis データベース用の Go クライアントです。
- [redis](https://github.com/redis/go-redis) - Golang 向けの Redis クライアント。
- [rueidis](http://github.com/rueian/rueidis) - 自動パイプライン化とサーバー支援型のクライアントサイドキャッシュを備えた、高速な Redis RESP3 クライアント。
- [xredis](https://github.com/shomali11/xredis) - 型安全でカスタマイズ可能、クリーンで使いやすい Redis クライアント。

### 検索・分析データベース

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - `database/sql` 互換の、Go 向け ClickHouse SQL クライアント。
- [effdsl](https://github.com/sdqri/effdsl) - Go 向けの Elasticsearch クエリビルダー。
- [elastic](https://github.com/olivere/elastic) - Go 向けの Elasticsearch クライアント。
- [elasticsql](https://github.com/cch123/elasticsql) - Go で SQL を Elasticsearch DSL に変換します。
- [elastigo](https://github.com/mattbaird/elastigo) - Elasticsearch クライアントライブラリ。
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Go 向けの公式 Elasticsearch クライアント。
- [goes](https://github.com/OwnLocal/goes) - Elasticsearch とやり取りするためのライブラリ。
- [skizze](https://github.com/skizzehq/skizze) - 確率的データ構造のサービスおよびストレージ。
- [zoekt](https://github.com/sourcegraph/zoekt) - トライグラムベースの高速なコード検索。

**[⬆ トップに戻る](#contents)**

## 日付と時刻

_日付と時刻を扱うためのライブラリ。_

- [approx](https://github.com/goschtalt/approx) - 日、週、年単位での期間の解析/出力をサポートする Duration の拡張。
- [carbon](https://github.com/dromara/carbon) - Golang 向けの、シンプルでセマンティックかつ開発者に優しい時間パッケージ。
- [carbon](https://github.com/uniplaces/carbon) - PHP の Carbon ライブラリから移植された、多数のユーティリティメソッドを備えたシンプルな Time の拡張。
- [cronrange](https://github.com/1set/cronrange) - Cron 形式の時間範囲式を解析し、指定された時刻がいずれかの範囲内にあるかを確認します。
- [date](https://github.com/rickb777/date) - 日付、日付範囲、時間の長さ、期間、時刻を扱えるように Time を拡張します。
- [dateparse](https://github.com/araddon/dateparse) - 事前にフォーマットを知らなくても日付を解析できます。
- [durafmt](https://github.com/hako/durafmt) - Go 向けの時間の長さのフォーマットライブラリ。
- [feiertage](https://github.com/wlbr/feiertage) - ドイツの州（Bundesländer）ごとの特例を含め、ドイツの祝日を計算するための関数群。イースター、聖霊降臨祭、収穫感謝祭など…
- [go-anytime](https://github.com/ijt/go-anytime) - 「next dec 22nd at 3pm」のような日付/時刻や「from today until next thursday」のような範囲を、事前にフォーマットを知らなくても解析できます。
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - date-fns にインスパイアされた、140 以上の純粋でイミュータブルな関数を備えた Go 向けの包括的な日付ユーティリティライブラリ。
- [go-datebin](https://github.com/deatil/go-datebin) - シンプルな日時解析パッケージ。
- [go-faketime](https://github.com/harkaitz/go-faketime) - faketime(1) ユーティリティに従うシンプルな `time.Now()`。
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - Go（golang）によるペルシャ暦（太陽ヒジュラ暦）の実装。
- [go-str2duration](https://github.com/xhit/go-str2duration) - 文字列を Duration に変換します。time.Duration が返す文字列などをサポートしています。
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - 指定した場所の日の出と日の入りの時刻を計算します。
- [go-week](https://github.com/stoewer/go-week) - ISO8601 の週日付を扱うための効率的なパッケージ。
- [gostradamus](https://github.com/bykof/gostradamus) - 日付を扱うための Go パッケージ。
- [iso8601](https://github.com/relvacode/iso8601) - 正規表現を使わずに ISO8601 の日時を効率的に解析します。
- [kair](https://github.com/GuilhermeCaruso/kair) - 日付と時刻 - Golang のフォーマットライブラリ。
- [now](https://github.com/jinzhu/now) - Now は Golang 向けの時間ツールキットです。
- [strftime](https://github.com/awoodbeck/strftime) - C99 互換の strftime フォーマッター。
- [timespan](https://github.com/SaidinWoT/timespan) - 開始時刻と長さで定義される時間間隔を扱うためのライブラリ。
- [timeutil](https://github.com/leekchan/timeutil) - Golang の time パッケージに対する便利な拡張（Timedelta、Strftime など）。
- [tuesday](https://github.com/osteele/tuesday) - Ruby 互換の Strftime 関数。

**[⬆ トップに戻る](#contents)**

## 分散システム

_分散システムの構築に役立つパッケージ。_

- [arpc](https://github.com/lesismal/arpc) - より効率的なネットワーク通信。双方向呼び出し、通知、ブロードキャストをサポートしています。
- [bedrock](https://github.com/z5labs/bedrock) - Go でサービスやより用途に特化したフレームワークを素早く開発するための、最小限でモジュール式、かつ組み合わせ可能な基盤を提供します。
- [capillaries](https://github.com/capillariesio/capillaries) - 分散バッチデータ処理フレームワーク。
- [circuit](https://github.com/schigh/circuit) - 確率的スロットリングによって段階的に回復するサーキットブレーカー。
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Go 向けの高性能な分散コマンドパターンライブラリ。
- [committer](https://github.com/vadiminshakov/committer) - 分散トランザクション管理システム（2PC/3PC の実装）。
- [consistent](https://github.com/buraksezer/consistent) - 負荷の上限付きコンシステントハッシュ。
- [consistenthash](https://github.com/mbrostami/consistenthash) - レプリカ数を設定可能なコンシステントハッシュ。
- [dht](https://github.com/anacrolix/dht) - BitTorrent の Kademlia DHT 実装。
- [digota](https://github.com/digota/digota) - gRPC による EC マイクロサービス。
- [dot](https://github.com/dotchain/dot/) - 操作変換（OT）を用いた分散同期。
- [doublejump](https://github.com/edwingeng/doublejump) - Google の Jump コンシステントハッシュの改良版。
- [dragonboat](https://github.com/lni/dragonboat) - Go による、機能が完備された高性能なマルチグループ Raft ライブラリ。
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - P2P 技術に基づく効率的で安定した安全なファイル配布とイメージ高速化を提供し、クラウドネイティブアーキテクチャにおけるベストプラクティスかつ標準ソリューションとなることを目指しています。
- [drmaa](https://github.com/dgruber/drmaa) - DRMAA 標準に基づく、クラスタースケジューラー向けのジョブ投入ライブラリ。
- [dynamolock](https://cirello.io/dynamolock) - DynamoDB をバックエンドとする分散ロックの実装。
- [dynatomic](https://github.com/tylfin/dynatomic) - DynamoDB をアトミックカウンターとして使用するためのライブラリ。
- [emitter-io](https://github.com/emitter-io/emitter) - MQTT、WebSocket、そして愛で構築された、高性能で分散型、安全かつ低レイテンシな Pub/Sub プラットフォーム。
- [evans](https://github.com/ktr0731/evans) - Evans：より表現力豊かな汎用 gRPC クライアント。
- [failured](https://github.com/andy2046/failured) - 分散システム向けの適応型累積障害検出器。
- [flowgraph](https://github.com/vectaport/flowgraph) - フローベースプログラミングのパッケージ。
- [gleam](https://github.com/chrislusf/gleam) - Pure Go と Luajit で書かれた、高速でスケーラブルな分散 map/reduce システム。Go の高い並行性と Luajit の高いパフォーマンスを組み合わせ、スタンドアロンでも分散環境でも動作します。
- [glow](https://github.com/chrislusf/glow) - 使いやすくスケーラブルな分散ビッグデータ処理、Map-Reduce、DAG 実行をすべて Pure Go で実現します。
- [gmsec](https://github.com/gmsec/micro) - Go の分散システム開発フレームワーク。
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - ゴシッププロトコルと OpenAPI 3.0 仕様に基づく分散型マイクロサービスフレームワーク。ローコードと迅速な開発に重点を置いた組み込みの go-doudou CLI により、生産性を高めることができます。
- [go-eagle](https://github.com/go-eagle/eagle) - 便利なスキャフォールディングツールを備えた、API やマイクロサービス向けの Go フレームワーク。
- [go-jump](https://github.com/dgryski/go-jump) - Google の「Jump」コンシステントハッシュ関数の移植版。
- [go-kit](https://github.com/go-kit/kit) - サービスディスカバリー、負荷分散、プラガブルなトランスポート、リクエストの追跡などをサポートするマイクロサービスツールキット。
- [go-micro](https://github.com/micro/go-micro) - 分散システム開発フレームワーク。
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - MySQL ベースの分散ロック。
- [go-pdu](https://github.com/pdupub/go-pdu) - 分散型の ID ベースのソーシャルネットワーク。
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Golang サービス向けに、非同期のサービスヘルスチェックの定義をサポートするために作られたライブラリ。
- [go-zero](https://github.com/tal-tech/go-zero) - Web および RPC フレームワーク。レジリエントな設計で、高負荷なサイトの安定性を確保するために生まれました。組み込みの goctl により開発の生産性が大幅に向上します。
- [gorpc](https://github.com/valyala/gorpc) - 高負荷向けの、シンプルで高速かつスケーラブルな RPC ライブラリ。
- [grpc-go](https://github.com/grpc/grpc-go) - gRPC の Go 言語実装。HTTP/2 ベースの RPC です。
- [health](https://github.com/schigh/health) - Kubernetes のプローブをサポートする、Go サービス向けのヘルスチェッカー。
- [hprose](https://github.com/hprose/hprose-golang) - 非常に革新的な RPC ライブラリ。現在 25 以上の言語をサポートしています。
- [jsonrpc](https://github.com/osamingo/jsonrpc) - jsonrpc パッケージは JSON-RPC 2.0 の実装を支援します。
- [jsonrpc](https://github.com/ybbus/jsonrpc) - JSON-RPC 2.0 の HTTP クライアント実装。
- [K8gb](https://github.com/k8gb-io/k8gb) - クラウドネイティブな Kubernetes グローバルバランサー。
- [Kitex](https://github.com/cloudwego/kitex) - 開発者がマイクロサービスを構築するのを支援する、高性能で拡張性に優れた Golang の RPC フレームワーク。マイクロサービス開発においてパフォーマンスと拡張性が主な関心事であれば、Kitex は良い選択肢となるでしょう。
- [Kratos](https://github.com/go-kratos/kratos) - Go によるモジュール設計で使いやすいマイクロサービスフレームワーク。
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - NATS のための軽量でフォールトトレラントなメッセージストリーム。
- [lock](https://github.com/ubgo/lock) - 1 つの Go インターフェースと 5 つのバックエンド（filelock、flock、Redis、Postgres、etcd）を持つ分散ロックファミリー。すべてのバックエンドでフェンシングトークン、セマフォモード、可観測性フックを利用できます。
- [lura](https://github.com/luraproject/lura) - ミドルウェアを備えた超高性能な API ゲートウェイフレームワーク。
- [mochi mqtt](https://github.com/mochi-co/mqtt) - IoT、スマートホーム、Pub/Sub 向けの、仕様に完全準拠した組み込み可能な高性能 MQTT v5/v3 ブローカー。
- [NATS](https://github.com/nats-io/nats-server) - NATS は、デジタルシステム、サービス、デバイスのための、シンプルで安全かつ高性能な通信システムです。
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Golang 向けの OpenTelemetry コンパイル時インストルメンテーション。
- [oras](https://github.com/oras-project/oras) - コンテナレジストリ内の OCI アーティファクトを扱うための CLI とライブラリ。
- [outbox](https://github.com/oagudo/outbox) - 特定のリレーショナルデータベースやブローカーに依存しない、Go でトランザクショナルアウトボックスパターンを実現するための軽量ライブラリ。
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer は、アウトボックスパターンを実装した Go ライブラリです。
- [pglock](https://cirello.io/pglock) - PostgreSQL をバックエンドとする分散ロックの実装。
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - Protobuf による仕様定義を備えた Golang の JSON-RPC サーバー・クライアント。
- [raft](https://github.com/hashicorp/raft) - HashiCorp による、Raft コンセンサスプロトコルの Golang 実装。
- [raft](https://github.com/etcd-io/raft) - CoreOS による、Raft コンセンサスプロトコルの Go 実装。
- [rain](https://github.com/cenkalti/rain) - BitTorrent クライアントおよびライブラリ。
- [redis-lock](https://github.com/bsm/redislock) - Redis を使ったシンプルな分散ロックの実装。
- [resgate](https://resgate.io/) - すべてのクライアントがシームレスに同期される REST、リアルタイム、RPC API を構築するための、リアルタイム API ゲートウェイ。
- [rpcplatform](https://github.com/nexcode/rpcplatform) - サービスディスカバリー、負荷分散、関連機能を備えたマイクロサービス向けフレームワーク。
- [rpcx](https://github.com/smallnest/rpcx) - Alibaba の Dubbo のような、分散型でプラガブルな RPC サービスフレームワーク。
- [Semaphore](https://github.com/jexia/semaphore) - わかりやすい（マイクロ）サービスオーケストレーター。
- [servicepack](https://github.com/psyb0t/servicepack) - 単一バイナリで複数のサービスを並行して実行するためのフレームワーク。ローカルでも、複数のマシンに分散しても実行できます。
- [sleuth](https://github.com/ursiform/sleuth) - HTTP サービス間でのマスターレスな P2P 自動検出と RPC のためのライブラリ（[ZeroMQ](https://github.com/zeromq/libzmq) を使用）。
- [sponge](https://github.com/zhufuyi/sponge) - 自動コード生成、gin と gRPC のフレームワーク、基本的な開発フレームワークを統合した分散開発フレームワーク。
- [Tarmac](https://github.com/tarmac-project/tarmac) - WebAssembly で関数、マイクロサービス、モノリスを書くためのフレームワーク
- [Temporal](https://github.com/temporalio/sdk-go) - コードをフォールトトレラントかつシンプルにするための永続的実行システム。
- [torrent](https://github.com/anacrolix/torrent) - BitTorrent クライアントパッケージ。
- [trpc-go](https://github.com/trpc-group/trpc-go) - プラガブルで高性能な RPC フレームワークである tRPC の Go 言語実装。

**[⬆ トップに戻る](#contents)**

## ダイナミック DNS

_ダイナミック DNS レコードを更新するためのツール。_

- [DDNS](https://github.com/skibish/ddns) - Digital Ocean Networking の DNS をバックエンドとする個人用 DDNS クライアント。
- [dyndns](https://gitlab.com/alcastle/dyndns) - IP アドレスを定期的かつ自動的にチェックし、アドレスが変わるたびに Google Domains の（1 つまたは複数の）ダイナミック DNS レコードを更新する、バックグラウンドで動作する Go プロセス。
- [GoDNS](https://github.com/timothyye/godns) - Go で書かれた、DNSPod と HE.net をサポートするダイナミック DNS クライアントツール。

**[⬆ トップに戻る](#contents)**

## メール

_メールの作成と送信を実装するライブラリとツール。_

- [chasquid](https://blitiri.com.ar/p/chasquid) - Go で書かれた SMTP サーバー。
- [douceur](https://github.com/aymerick/douceur) - HTML メール用の CSS インライナー。
- [email](https://github.com/jordan-wright/email) - Go 向けの堅牢で柔軟なメールライブラリ。
- [email-verifier](https://github.com/AfterShip/email-verifier) - メールを一切送信せずにメールアドレスを検証するための Go ライブラリ。
- [go-dkim](https://github.com/toorop/go-dkim) - メールの署名と検証のための DKIM ライブラリ。
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - メールアドレスの正規化された表現を提供するための Golang ライブラリ。
- [go-imap](https://github.com/BrianLeishman/go-imap) - 自動再接続、OAuth2、IDLE のサポート、組み込みの MIME 解析を備えた、必要な機能がすべて揃った IMAP クライアント。
- [go-imap](https://github.com/emersion/go-imap) - クライアントとサーバー向けの IMAP ライブラリ。
- [go-mail](https://github.com/wneessen/go-mail) - Go でメールを送信するためのシンプルな Go ライブラリ。
- [go-message](https://github.com/emersion/go-message) - インターネットメッセージ形式とメールメッセージのためのストリーミングライブラリ。
- [go-premailer](https://github.com/vanng822/go-premailer) - Go で HTML メールのスタイルをインライン化します。
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - SMTP Keep Alive と 2 種類のタイムアウト（接続と送信）でメールを送信するための、非常にシンプルなパッケージ。
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - 生のメールを SpamAssassin のルールに照らしてスコアリングする、Postmark の SpamCheck API 用クライアント。
- [Hectane](https://github.com/hectane/hectane) - HTTP API を提供する軽量な SMTP クライアント。
- [hermes](https://github.com/matcornic/hermes) - クリーンでレスポンシブな HTML メールを生成する Golang パッケージ。
- [Maddy](https://github.com/foxcpp/maddy) - オールインワン（SMTP、IMAP、DKIM、DMARC、MTA-STS、DANE）のメールサーバー
- [mailchain](https://github.com/mailchain/mailchain) - ブロックチェーンのアドレスに暗号化メールを送信します。Go で書かれています。
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Mailgun API でメールを送信するための Go ライブラリ。
- [MailHog](https://github.com/mailhog/MailHog) - Web と API のインターフェースを備えた、メールと SMTP のテストツール。
- [Mailpit](https://github.com/axllent/mailpit) - 開発者向けのメールと SMTP のテストツール。
- [mailx](https://github.com/valord577/mailx) - Mailx は SMTP 経由でのメール送信を容易にするライブラリです。Golang 標準ライブラリの `net/smtp` を強化したものです。
- [mox](https://github.com/mjl-/mox) - 手間のかからないセルフホスト型メールのための、モダンでフル機能の安全なメールサーバー。
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - メール送信のための SendGrid の Go ライブラリ。
- [smtp](https://github.com/mailhog/smtp) - SMTP サーバープロトコルのステートマシン。
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - 軽量で設定可能なマルチスレッドの偽 SMTP サーバー。テスト環境向けに任意の SMTP の挙動を模倣できます。
- [tickstem/verify](https://github.com/tickstem/verify) - データベースに登録される前にメールアドレスを検証します：構文、MX ルックアップ、使い捨てドメイン、ロールベースの受信箱をチェックします。
- [truemail-go](https://github.com/truemail-rb/truemail-go) - 設定可能な Golang のメールバリデーター/検証ツール。正規表現、DNS、SMTP などでメールアドレスを検証します。

**[⬆ トップに戻る](#contents)**

## 組み込み可能なスクリプト言語

_Go のコードの中に他の言語を埋め込みます。_

- [anko](https://github.com/mattn/anko) - Go で書かれたスクリプト可能なインタープリター。
- [binder](https://github.com/alexeyco/binder) - [gopher-lua](https://github.com/yuin/gopher-lua) をベースにした、Go から Lua へのバインディングライブラリ。
- [cel-go](https://github.com/google/cel-go) - 漸進的型付けを備えた、高速でポータブルな非チューリング完全の式評価。
- [ecal](https://github.com/krotik/ecal) - 並行イベント処理をサポートする、シンプルな組み込み可能スクリプト言語。
- [expr](https://github.com/antonmedv/expr) - Go 向けの式評価エンジン：高速、非チューリング完全で、動的型付けと静的型付けに対応しています。
- [FrankenPHP](https://github.com/dunglas/frankenphp) - `net/http` ハンドラーを備えた、Go に埋め込まれた PHP。
- [gentee](https://github.com/gentee/gentee) - 組み込み可能なスクリプトプログラミング言語。
- [gisp](https://github.com/jcla1/gisp) - Go によるシンプルな LISP。
- [go-lua](https://github.com/Shopify/go-lua) - Lua 5.2 VM の Pure Go への移植版。
- [go-lua](https://github.com/speedata/go-lua) - Pure Go で実装された Lua 5.4 VM。
- [go-php](https://github.com/deuill/go-php) - Go 向けの PHP バインディング。
- [goal](https://codeberg.org/anaseto/goal) - 組み込み可能なスクリプト型の配列言語。
- [goja](https://github.com/dop251/goja) - Go による ECMAScript 5.1(+) の実装。
- [golua](https://github.com/aarzilli/golua) - Lua C API の Go バインディング。
- [gopher-lua](https://github.com/yuin/gopher-lua) - Go で書かれた Lua 5.1 VM とコンパイラー。
- [gval](https://github.com/PaesslerAG/gval) - Go で書かれた、高度にカスタマイズ可能な式言語。
- [metacall](https://github.com/metacall/core) - NodeJS、JavaScript、TypeScript、Python、Ruby、C#、WebAssembly、Java、Cobol などをサポートするクロスプラットフォームのポリグロットランタイム。
- [ngaro](https://github.com/db47h/ngaro) - Retro でのスクリプティングを可能にする、組み込み可能な Ngaro VM の実装。
- [prolog](https://github.com/ichiban/prolog) - 組み込み可能な Prolog。
- [purl](https://github.com/ian-kent/purl) - Go に埋め込まれた Perl 5.18.2。
- [starlark-go](https://github.com/google/starlark-go) - Starlark の Go 実装：決定論的な評価と密閉された実行を特徴とする Python ライクな言語です。
- [starlet](https://github.com/1set/starlet) - スクリプトの実行を簡素化し、データ変換や便利な Starlark ライブラリと拡張機能を提供する、[starlark-go](https://github.com/google/starlark-go) の Go ラッパー。
- [tengo](https://github.com/d5/tengo) - Go 向けのバイトコードコンパイル型スクリプト言語。
- [Wa/凹语言](https://github.com/wa-lang/wa) - Go に埋め込まれた Wa プログラミング言語。

**[⬆ トップに戻る](#contents)**

## エラー処理

_エラーを処理するためのライブラリ。_

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - 各呼び出し元のファイル、行、関数名でエラーをラップします。
- [emperror](https://github.com/emperror/emperror) - Go のライブラリとアプリケーションのためのエラー処理ツールとベストプラクティス。
- [eris](https://github.com/rotisserie/eris) - Go でエラーを処理、トレース、ログ出力するためのより良い方法。標準のエラーライブラリおよび github.com/pkg/errors と互換性があります。
- [errlog](https://github.com/snwfdhmp/errlog) - エラーの原因となったソースコードを特定する（その他の高速デバッグ機能も備えた）ハック可能なパッケージ。任意のロガーにその場で組み込めます。
- [errors](https://github.com/emperror/errors) - 標準ライブラリの errors パッケージおよび github.com/pkg/errors のドロップイン置き換え。さまざまなエラー処理のプリミティブを提供します。
- [errors](https://github.com/neuronlabs/errors) - 分類のためのプリミティブを備えた、シンプルな Golang のエラー処理。
- [errors](https://github.com/PumpkinSeed/errors) - 優れたパフォーマンスと最小限のメモリオーバーヘッドを備えた、最もシンプルなエラーラッパー。
- [errors](https://gitlab.com/tozd/go/errors) - スタックトレースとオプションの構造化された詳細情報を持つエラーを提供します。github.com/pkg/errors の API と互換性がありますが、内部ではそれを使用していません。
- [errors](https://github.com/naughtygopher/errors) - Go の組み込みエラーのドロップイン置き換え。カスタムエラー型、ユーザーフレンドリーなメッセージ、Unwrap と Is を備えた最小限のエラー処理パッケージです。非常に使いやすくわかりやすいヘルパー関数を備えています。
- [errors](https://github.com/cockroachdb/errors) - ネットワーク越しにエラーを持ち運べる Go のエラーライブラリ。
- [errorx](https://github.com/joomcode/errorx) - スタックトレース、エラーの合成などを備えた多機能なエラーパッケージ。
- [exception](https://github.com/rbrahul/exception) - Golang で try-catch による例外処理を行うためのシンプルなユーティリティパッケージ。
- [Falcon](https://github.com/SonicRoshan/falcon) - シンプルでありながら非常に強力なエラー処理パッケージ。
- [Fault](https://github.com/Southclaws/fault) - エラー値に構造化されたメタデータとコンテキストを付与しやすくするための、エラーをラップする使い勝手の良い仕組み。
- [go-errr](https://github.com/go-errr/go) - Catch/Recover のセマンティクス、ラップされたエラーチェーン、スタックトレースを備えた Go 向けのエラー処理ライブラリ。
- [go-multierror](https://github.com/hashicorp/go-multierror) - エラーのリストを単一のエラーとして表現するための Go（golang）パッケージ。
- [metaerr](https://github.com/quantumcycle/metaerr) - さまざまなソースからのメタデータとオプションのスタックトレースを含む構造化されたエラーを生成する、独自のエラービルダーを作成するためのライブラリ。
- [multierr](https://github.com/uber-go/multierr) - エラーのリストを単一のエラーとして表現するためのパッケージ。
- [oops](https://github.com/samber/oops) - コンテキスト、スタックトレース、ソースコードの断片を伴うエラー処理。
- [tracerr](https://github.com/ztrue/tracerr) - スタックトレースとソースコードの断片を伴う Golang のエラー。

**[⬆ トップに戻る](#contents)**

## ファイル操作

_ファイルとファイルシステムを扱うためのライブラリ。_

- [afero](https://github.com/spf13/afero) - Go 向けのファイルシステム抽象化システム。
- [afs](https://github.com/viant/afs) - Go 向けの抽象ファイルストレージ（mem、scp、zip、tar、クラウド：s3、gs）。
- [baraka](https://github.com/xis/baraka) - HTTP のファイルアップロードを簡単に処理するためのライブラリ。
- [checksum](https://github.com/codingsince1985/checksum) - 大きなファイルの MD5、SHA256、SHA1、CRC、BLAKE2s などのメッセージダイジェストを計算します。
- [copy](https://github.com/otiai10/copy) - ディレクトリを再帰的にコピーします。
- [fastwalk](https://github.com/charlievieth/fastwalk) - 高速な並列ディレクトリ走査ライブラリ（[fzf](https://github.com/junegunn/fzf) で使用されています）。
- [flop](https://github.com/homedepot/flop) - [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) と同等の機能を目指したファイル操作ライブラリ。
- [gdu](https://github.com/dundee/gdu) - コンソールインターフェースを備えたディスク使用量アナライザー。
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - タグを使って CSV ファイルを読み込みます。
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - 人間のためのファイルコピー。
- [go-exiftool](https://github.com/barasher/go-exiftool) - ファイル（画像、PDF、Office など）からできる限り多くのメタデータ（EXIF、IPTC など）を抽出するために使われる有名なライブラリ ExifTool の Go バインディング。
- [go-gtfs](https://github.com/artonge/go-gtfs) - Go で GTFS ファイルを読み込みます。
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - HTML テンプレートを PDF ファイルに変換するパッケージ。
- [goflat](https://github.com/lzambarda/goflat) - コンテキストを考慮したジェネリックなフラットファイルのマーシャラー/アンマーシャラー。
- [gofs](https://github.com/no-src/gofs) - すぐに使えるクロスプラットフォームのリアルタイムファイル同期ツール。
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Go 向けの PDF/A 処理。
- [gulter](https://github.com/adelowo/gulter) - ファイルアップロードに関するあらゆるニーズを自動的に処理するシンプルな HTTP ミドルウェア
- [gut/yos](https://github.com/1set/gut) - ファイル、ディレクトリ、シンボリックリンクのコピー/移動/差分/一覧などのファイル操作のための、シンプルで信頼性の高いパッケージ。
- [gxpdf](https://github.com/coregx/gxpdf) - Go 向けのモダンなフルライフサイクル PDF ライブラリ。CGO への依存なしに、ドキュメントの解析、表の抽出、生成、署名を行えます。
- [higgs](https://github.com/dastoori/higgs) - ファイルやディレクトリを隠したり再表示したりするための、小さなクロスプラットフォームの Go ライブラリ。
- [iso9660](https://github.com/kdomanski/iso9660) - ISO9660 ディスクイメージを読み込み・作成するためのパッケージ
- [notify](https://github.com/rjeczalik/notify) - os/signal に似たシンプルな API を持つ、ファイルシステムイベント通知ライブラリ。
- [opc](https://github.com/qmuntal/opc) - Go 向けに Open Packaging Conventions（OPC）ファイルを読み込みます。
- [parquet](https://github.com/parsyl/parquet) - [parquet](https://parquet.apache.org) ファイルを読み書きします。
- [pathtype](https://github.com/jonchun/pathtype) - パスを文字列ではなく独自の型として扱います。
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - PDF プロセッサー。
- [skywalker](https://github.com/dixonwille/skywalker) - ファイルシステムを並行して簡単に走査できるようにするパッケージ。
- [todotxt](https://github.com/1set/todotxt) - Gina Trapani の [_todo.txt_](http://todotxt.org/) ファイル用の Go ライブラリ。[_todo.txt_ 形式](https://github.com/todotxt/todo.txt)のタスクリストの解析と操作をサポートしています。
- [vfs](https://github.com/C2FO/vfs) - os、S3、GCS などの多数のファイルシステムタイプにまたがる、Go 向けのプラガブルで拡張可能、かつ設計思想が明確なファイルシステム機能のセット。

**[⬆ トップに戻る](#contents)**

## 金融

_会計と金融のためのパッケージ。_

- [accounting](https://github.com/leekchan/accounting) - Golang 向けの金額と通貨のフォーマット。
- [ach](https://github.com/moov-io/ach) - Automated Clearing House（ACH）ファイルのリーダー、ライター、バリデーター。
- [bbgo](https://github.com/c9s/bbgo) - Go で書かれた暗号資産トレーディングボットのフレームワーク。一般的な暗号資産取引所の API、標準的な指標、バックテスト、多数の組み込み戦略を含んでいます。
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - 260 以上のメソッド、USDT-M/Coin-M 先物、現物、TradFi、WebSocket ストリーム、コピートレードに対応した BingX API v3 用の Go クライアント。
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - 型付きモデル、文字列ベースの価格、自動再接続する WebSocket、デモトレードを備えた Bitget UTA API v3 用の Go クライアント。
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - HMAC/RSA 認証、WebSocket ストリーム、デモトレード、TradFi 商品に対応した Bybit V5 API 用の Go クライアント。
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - 7 つの構成指標と約 1 年分の日次履歴を含む、CNN の Fear & Greed Index 用クライアント。
- [currency](https://github.com/bojanz/currency) - 通貨金額を扱い、通貨情報とフォーマットを提供します。
- [currency](https://github.com/naughtygopher/currency) - 高性能かつ正確な通貨計算パッケージ。
- [dec128](https://github.com/jokruger/dec128) - 高性能な 128 ビット固定小数点の 10 進数。
- [decimal](https://github.com/shopspring/decimal) - 任意精度の固定小数点 10 進数。
- [decimal](https://github.com/aytechnet/decimal) - [shopspring/decimal](https://github.com/shopspring/decimal) および int64 と部分的に互換性のある、高性能な 64 ビット 10 進数。Weight と Length を含みます。
- [decimal](https://github.com/govalues/decimal) - パニックを起こさない算術演算を備えた、イミュータブルな 10 進数。
- [decimal](https://github.com/klokare/decimal) - 任意精度が不要な場合のための、固定サイズでアロケーションなしの 10 進数型。
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - 欧州 45 か国の VAT 税率と VAT 番号の形式。コンパイル時に埋め込まれ、欧州委員会の TEDB から毎日更新されます。
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - 小さな固定小数点 10 進数のための、高速かつ正確なシリアライズと算術演算
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - 高速でシンプルな、ISO4217 準拠の固定小数点 10 進数による金額。
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - 25 のメトリクスカテゴリー、型付き構造体、一括取得エンドポイント、Point-in-Time データに対応し、依存関係ゼロの Glassnode Basic API 用 Go クライアント。
- [go-finance](https://github.com/alpeb/go-finance) - 貨幣の時間価値（年金）、キャッシュフロー、金利換算、債券、減価償却の計算のための金融関数ライブラリ。
- [go-finance](https://github.com/pieterclaerhout/go-finance) - 為替レートの取得、VIES による VAT 番号の確認、IBAN 銀行口座番号の確認を行うモジュール。
- [go-money](https://github.com/rhymond/go-money) - Fowler の Money パターンの実装。
- [go-nowpayments](https://github.com/matm/go-nowpayments) - 暗号資産決済の NOWPayments API 用ライブラリ。
- [gobl](https://github.com/invopop/gobl) - 請求書・請求関連文書のフレームワーク。JSON Schema ベースで、税計算とバリデーションを自動化し、グローバルな形式に変換するためのツールを備えています。
- [indicator](https://github.com/cinar/indicator) - 金融指標、戦略、バックテストフレームワークを提供するテクニカル分析ライブラリ。
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - HMAC-SHA256 認証、文字列型の価格、型付きのエラー階層を備えた、KuCoin UTA および Classic の REST と WebSocket API 用の Go クライアント。
- [ledger](https://github.com/formancehq/ledger) - 資金移動を伴うアプリケーションの基盤となる、プログラム可能な金融台帳。
- [money](https://github.com/govalues/money) - パニックを起こさない算術演算を備えた、イミュータブルな金額と為替レート。
- [ofxgo](https://github.com/aclindsa/ofxgo) - OFX サーバーへのクエリやレスポンスの解析を行います（コマンドラインクライアントの例付き）。
- [okx-go](https://github.com/tigusigalpa/okx-go) - 335 の REST エンドポイント、53 の WebSocket チャネル、ジェネリクスのサポート、自動再接続を備えた OKX v5 API 用の Go クライアント。
- [orderbook](https://github.com/i25959341/orderbook) - Golang による指値注文板のマッチングエンジン。
- [orderbook](https://github.com/intrepidkarthi/orderbook) - 整数による正確な価格計算、シングルライターのコア、先行書き込みログによるクラッシュリカバリーを備えた、組み込み可能な指値注文板とマッチングエンジン。
- [payme](https://github.com/jovandeginste/payme) - SEPA 決済用の QR コードジェネレーター（ASCII と PNG）。
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - Paystack API 用の、包括的で依存関係ゼロ、完全に型付けされた Go SDK。
- [swift](https://code.pfad.fr/swift/) - IBAN（国際銀行口座番号）のオフライン有効性チェックと BIC の取得（一部の国のみ）。
- [techan](https://github.com/sdcoffey/techan) - 高度な市場分析とトレーディング戦略を備えたテクニカル分析ライブラリ。
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - HMAC-SHA256 による Webhook 検証と、net/http、Gin、Echo 用のミドルウェアを備えた Telegram Wallet Pay API 用の Go クライアント。
- [ticker](https://github.com/achannarasappa/ticker) - ターミナル用の株価ウォッチャー兼保有株式トラッカー。
- [transaction](https://github.com/claygod/transaction) - マルチスレッドモードで動作する、口座の組み込み型トランザクションデータベース。
- [udecimal](https://github.com/quagmt/udecimal) - 金融アプリケーション向けの、高性能・高精度でゼロアロケーションの固定小数点 10 進数ライブラリ。
- [vat](https://github.com/dannyvankooten/vat) - VAT 番号のバリデーションと EU の VAT 税率。

**[⬆ トップに戻る](#contents)**

## フォーム

_フォームを扱うためのライブラリ。_

- [bind](https://github.com/robfig/bind) - フォームデータを任意の Go の値にバインドします。
- [conform](https://github.com/leebenson/conform) - ユーザー入力を適切に管理します。構造体タグに基づいてデータのトリム、サニタイズ、クリーニングを行います。
- [form](https://github.com/go-playground/form) - url.Values を Go の値にデコードし、Go の値を url.Values にエンコードします。二重配列と完全なマップをサポートしています。
- [formam](https://github.com/monoculum/formam) - フォームの値を構造体にデコードします。
- [forms](https://github.com/albrow/forms) - マルチパートフォームとファイルをサポートする、フォーム/JSON データの解析とバリデーションのための、フレームワークに依存しないライブラリ。
- [gbind](https://github.com/bdjimmy/gbind) - データを任意の Go の値にバインドします。組み込みおよびカスタムの式バインディング機能を使用でき、データのバリデーションもサポートしています
- [gorilla/csrf](https://github.com/gorilla/csrf) - Go の Web アプリケーションとサービスのための CSRF 保護。
- [httpin](https://github.com/ggicci/httpin) - クエリ文字列、フォーム、HTTP ヘッダーなどを含む HTTP リクエストをカスタム構造体にデコードします。
- [nosurf](https://github.com/justinas/nosurf) - Go 向けの CSRF 保護ミドルウェア。
- [qs](https://github.com/sonh/qs) - 構造体を URL クエリパラメーターにエンコードするための Go モジュール。
- [queryparam](https://github.com/tomwright/queryparam) - `url.Values` を標準型またはカスタム型の使いやすい構造体の値にデコードします。
- [roamer](https://github.com/slipros/roamer) - シンプルなタグを使って Cookie、ヘッダー、クエリパラメーター、パスパラメーター、ボディなどを構造体にバインドし、HTTP リクエストを解析するためのボイラープレートコードを排除します。

**[⬆ トップに戻る](#contents)**

## 関数型

_Go での関数型プログラミングをサポートするパッケージ。_

- [fp-go](https://github.com/repeale/fp-go) - Golang 1.18 以降のジェネリクスを活用した関数型プログラミングのヘルパー集。
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Golang 向けのモナドと関数型プログラミングの機能。
- [fuego](https://github.com/seborama/fuego) - Go による関数型の実験。
- [FuncFrog](https://github.com/koss-null/FuncFrog) - 遅延評価とエラー処理の仕組みを備え、Go1.18 以降のジェネリックなスライスに対して Map、Filter、Reduce などのストリーム操作を提供する関数型ヘルパーライブラリ。
- [g](https://github.com/enetx/g) - Go 向けの関数型プログラミングフレームワーク。
- [go-functional](https://github.com/BooleanCat/go-functional) - ジェネリクスを使った Go での関数型プログラミング
- [go-underscore](https://github.com/tobyhede/go-underscore) - 役に立つ関数型の Go コレクションユーティリティを集めた便利なコレクション。
- [gofp](https://github.com/rbrahul/gofp) - Golang 向けの lodash ライクな強力なユーティリティライブラリ。
- [mo](https://github.com/samber/mo) - Go 1.18 以降のジェネリクスに基づくモナドと人気の FP 抽象化（Option、Result、Either など）。
- [underscore](https://github.com/rjNemo/underscore) - Go 1.18 以降向けの関数型プログラミングヘルパー。
- [valor](https://github.com/phelmkamp/valor) - 値を持つ場合も持たない場合もある、ジェネリックな Option 型と Result 型。

**[⬆ トップに戻る](#contents)**

## ゲーム開発

_素晴らしいゲーム開発ライブラリ。_

- [Ark](https://github.com/mlange-42/ark) - Go 向けのアーキタイプベースのエンティティ・コンポーネント・システム（ECS）。
- [due](https://github.com/dobyte/due) - モジュール式のコンポーネント設計を採用し、TCP、KCP、WS、QUIC のゲートウェイを提供する分散ゲームサーバーフレームワーク。
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Go による非常にシンプルな 2D ゲームエンジン。
- [ecs](https://github.com/andygeiss/ecs) - Golang でエンティティ・コンポーネント・システムのコンセプトに基づく独自のゲームエンジンを構築します。
- [engo](https://github.com/EngoEngine/engo) - Engo は Go で書かれたオープンソースの 2D ゲームエンジンです。エンティティ・コンポーネント・システムのパラダイムに従っています。
- [fantasyname](https://github.com/s0rg/fantasyname) - ファンタジー風の名前ジェネレーター。
- [g3n](https://github.com/g3n/engine) - Go の 3D ゲームエンジン。
- [go-astar](https://github.com/beefsack/go-astar) - A\* 経路探索アルゴリズムの Go 実装。
- [go-sdl2](https://github.com/veandco/go-sdl2) - [Simple DirectMedia Layer](https://www.libsdl.org/) の Go バインディング。
- [go3d](https://github.com/ungerik/go3d) - Go 向けのパフォーマンス重視の 2D/3D 数学パッケージ。
- [gogpu](https://github.com/gogpu/gogpu) - WebGPU 上に構築された、ウィンドウ管理、入力、レンダリングを備えた GPU アプリケーションフレームワーク。480 行以上の GPU コードを約 20 行に削減し、CGO は不要です（GoGPU エコシステム：[gg](https://github.com/gogpu/gg)、[ui](https://github.com/gogpu/ui)、[wgpu](https://github.com/gogpu/wgpu)、[naga](https://github.com/gogpu/naga)）。
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Vulkan、DX12、Metal のバックエンドを備え、CGO 不要の Pure Go による WebGPU 実装（[GoGPU](https://github.com/gogpu) エコシステムの一部）。
- [GOKe](https://github.com/kjkrol/goke) - 予測可能で段階のないメモリ増加とゼロアロケーションの実行パスを実現するため、L1 キャッシュにアラインされたチャンク化 SoA レイアウトを採用した、データ指向（DOD）でアーキタイプベースの ECS エンジン。
- [gonet](https://github.com/xtaci/gonet) - Golang で実装されたゲームサーバーのスケルトン。
- [goworld](https://github.com/xiaonanln/goworld) - 空間・エンティティフレームワークとホットスワップを特徴とする、スケーラブルなゲームサーバーエンジン。
- [grid](https://github.com/s0rg/grid) - レイキャスティング、シャドウキャスティング、経路探索を備えたジェネリックな 2D グリッド。
- [Leaf](https://github.com/name5566/leaf) - 軽量なゲームサーバーフレームワーク。
- [nano](https://github.com/lonng/nano) - 軽量で便利、高性能な Golang ベースのゲームサーバーフレームワーク。
- [Oak](https://github.com/oakmound/oak) - Pure Go のゲームエンジン。
- [Pi](https://github.com/elgopher/pi) - 現代のコンピューター向けにレトロゲームを作成するためのゲームエンジン。Pico-8 にインスパイアされ、Ebitengine で動作します。
- [Pitaya](https://github.com/topfreegames/pitaya) - クラスタリングをサポートし、C SDK を通じて iOS、Android、Unity などのクライアントライブラリを提供する、スケーラブルなゲームサーバーフレームワーク。
- [Pixel](https://github.com/gopxl/pixel) - Go による手作りの 2D ゲームライブラリ。
- [prototype](https://github.com/gonutz/prototype) - 最小限の API でデスクトップゲームを作成するための、クロスプラットフォーム（Windows/Linux/Mac）ライブラリ。
- [raylib-go](https://github.com/gen2brain/raylib-go) - ビデオゲームプログラミングを学ぶためのシンプルで使いやすいライブラリ [raylib](https://www.raylib.com/) の Go バインディング。
- [sceneCamera](https://github.com/donomii/sceneCamera) - ミュージアム、FPS、RTS、ステレオの各レンダリングモード向けのカメラ移動とビュー/プロジェクション行列。
- [termloop](https://github.com/JoelOtter/termloop) - Termbox 上に構築された、Go 向けのターミナルベースのゲームエンジン。
- [tile](https://github.com/kelindar/tile) - データ指向でキャッシュフレンドリーな 2D グリッドライブラリ（TileMap）。経路探索、オブザーバー、インポート/エクスポートを含みます。

**[⬆ トップに戻る](#contents)**

## ジェネレーター

_Go コードを生成するツール。_

- [apispec](https://github.com/ehabterra/apispec) - アノテーションなしで Go コードから OpenAPI 3.1 仕様を生成します。さらに、設定、プレビュー、コールグラフの探索ができるブラウザー UI も備えています。
- [convergen](https://github.com/reedom/convergen) - 多機能な型間コピーのコードジェネレーター。
- [copygen](https://github.com/switchupcb/copygen) - 型間コンバーター（コピーコード）を含め、Go の型に基づいて任意のコードを生成します。デフォルトではリフレクションを使用しません。
- [generis](https://github.com/senselogic/GENERIS) - ジェネリクス、自由形式のマクロ、条件付きコンパイル、HTML テンプレートを提供するコード生成ツール。
- [go-apispec](https://github.com/antst/go-apispec) - フレームワークの自動検出を伴う静的解析によって、Go のソースコードから OpenAPI 3.1 仕様を生成します。
- [go-enum](https://github.com/abice/go-enum) - コードコメントから列挙型のコードを生成します。
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - コードコメントから列挙型のエンコーディング用コードを生成します。
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Go 向けの .NET LINQ ライクなクエリメソッド。
- [goderive](https://github.com/awalterschulze/goderive) - 入力された型から関数を導出します
- [goverter](https://github.com/jmattheis/goverter) - インターフェースを定義してコンバーターを生成します。
- [GoWrap](https://github.com/hexdigest/gowrap) - シンプルなテンプレートを使って Go のインターフェース用のデコレーターを生成します。
- [interfaces](https://github.com/rjeczalik/interfaces) - インターフェース定義を生成するためのコマンドラインツール。
- [jennifer](https://github.com/dave/jennifer) - テンプレートなしで任意の Go コードを生成します。
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - このパッケージには、OpenAPI 3.0 の API 定義に基づいてサービス用の Go ボイラープレートコードを生成するためのユーティリティ群が含まれています。
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - protobuf から HTTP サーバーとクライアントを生成します。
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - Protocol Buffers から型付きの MCP ツール、プロンプト、リソースを生成します。
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - 型を動的に作成するためのライブラリ。

**[⬆ トップに戻る](#contents)**

## 地理情報

_地理情報のツールとサーバー_

- [borders](https://github.com/kpfaulkner/borders) - 画像の境界を検出し、GIS 操作のために GeoJSON に変換します。
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - 1 桁ミリ秒のレイテンシで高性能な地理空間データの取り込みを実現する、GeoEngine の公式 Go SDK。
- [geoos](https://github.com/spatial-go/geoos) - 空間データと幾何アルゴリズムを提供するライブラリ。
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver は、GeoServer REST API を介して GeoServer インスタンスを操作するための Go パッケージです。
- [gismanager](https://github.com/hishamkaram/gismanager) - GIS データ（ベクターデータ）を PostGIS と Geoserver に公開します。
- [godal](https://github.com/airbusgeo/godal) - GDAL の Go ラッパー。
- [H3](https://github.com/uber/h3-go) - 階層型六角形地理空間インデックスシステムである H3 の Go バインディング。
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - H3 インデックスと GeoJSON の間の変換ユーティリティ。
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - 仮想ノードによる Uber H3geo セルの分散。
- [mbtileserver](https://github.com/consbio/mbtileserver) - mbtiles 形式で保存された地図タイル用の、シンプルな Go ベースのサーバー。
- [osm](https://github.com/paulmach/osm) - OpenStreetMap のデータと API を読み書きし、操作するためのライブラリ。
- [pbf](https://github.com/maguro/pbf) - OpenStreetMap PBF 用の Golang エンコーダー/デコーダー。
- [S2 geojson](https://github.com/pantrif/s2-geojson) - GeoJSON を S2 セルに変換し、地図上で S2 ジオメトリのいくつかの機能をデモします。
- [S2 geometry](https://github.com/golang/geo) - Go による S2 ジオメトリライブラリ。
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures は、ジオメトリをモデル化する Go の型と、それらを操作するアルゴリズムを提供する 2D ジオメトリライブラリです。
- [Tile38](https://github.com/tidwall/tile38) - 空間インデックスとリアルタイムのジオフェンシングを備えた位置情報データベース。
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) Web メルカトル図法を使った地図上に情報やマーカーなどを表示するために、LonLat、Point、Tile を簡単に利用・変換できるようにするプロジェクト。
- [WGS84](https://github.com/wroge/wgs84) - 座標の変換と変形のためのライブラリ（ETRS89、OSGB36、NAD83、RGF93、Web Mercator、UTM）。

**[⬆ トップに戻る](#contents)**

## Go コンパイラー

_Go を他の言語にコンパイルしたり、その逆を行ったりするためのツール。_

- [bunster](https://github.com/yassinebenaid/bunster) - シェルスクリプトを Go にコンパイルします。
- [c4go](https://github.com/Konstantin8105/c4go) - C のコードを Go のコードにトランスパイルします。
- [cxgo](https://github.com/gotranspile/cxgo) - C のコードを Go のコードにトランスパイルします。
- [esp32](https://github.com/andygeiss/esp32-transpiler) - Go を Arduino のコードにトランスパイルします。
- [f4go](https://github.com/Konstantin8105/f4go) - FORTRAN 77 のコードを Go のコードにトランスパイルします。
- [go2hx](https://github.com/go2hx/go2hx) - Go から Haxe を経由して Javascript/C++/Java/C# へ変換するコンパイラー。
- [gopherjs](https://github.com/gopherjs/gopherjs) - Go から JavaScript へのコンパイラー。

**[⬆ トップに戻る](#contents)**

## ゴルーチン

_ゴルーチンを管理・操作するためのツール。_

- [anchor](https://github.com/kyuff/anchor) - マイクロサービスアーキテクチャにおけるコンポーネントのライフサイクルを管理するためのライブラリ。
- [ants](https://github.com/panjf2000/ants) - Go による高性能かつ低コストなゴルーチンプール。
- [artifex](https://github.com/borderstech/artifex) - ワーカーベースのディスパッチを使った、Golang 向けのシンプルなインメモリジョブキュー。
- [async](https://github.com/yaitoo/async) - Go 向けの async/await スタイルの非同期タスクパッケージ。
- [async](https://github.com/reugn/async) - Go 向けの代替 sync ライブラリ（Future、Promise、ロック）。
- [async](https://github.com/studiosol/async) - パニック時にはリカバリーしつつ、関数を非同期に安全に実行する方法。
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob は、軽量なコードで明快かつ高速な非同期キューのジョブマネージャーです。
- [autopool](https://github.com/AshvinBambhaniya/autopool) - 優先度を考慮したスケジューリングを備えた、Go 向けの設定不要で自動スケールするワーカープール。
- [breaker](https://github.com/kamilsk/breaker) - 実行フローを中断可能にするための柔軟な仕組み。
- [channelify](https://github.com/ddelizia/channelify) - 関数をチャネルを返すように変換し、簡単かつ強力な並列処理を実現します。
- [conc](https://github.com/sourcegraph/conc) - `conc` は Go で構造化された並行処理を行うためのツールベルトで、一般的なタスクをより簡単かつ安全にします。
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - タイムアウト、動的な優先度、ゴルーチンのコンテキストキャンセルをサポートする並行数リミッター。
- [conexec](https://github.com/ITcathyh/conexec) - 関数を効率的かつ安全に並行実行するのを支援する並行処理ツールキット。ブロッキングを避けるための全体のタイムアウト指定をサポートし、効率を高めるためにゴルーチンプールを使用します。
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - Golang 向けの CyclicBarrier。
- [execpool](https://github.com/hexdigest/execpool) - exec.Cmd を中心に構築されたプールで、指定した数のプロセスを事前に起動しておき、必要に応じて stdin と stdout をアタッチします。FastCGI や Apache Prefork MPM に非常によく似ていますが、任意のコマンドで動作します。
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - 構造化された並行処理を簡単に。
- [go-accumulator](https://github.com/nar10z/go-accumulator) - イベントの蓄積とその後の処理のためのソリューション。
- [go-actor](https://github.com/vladopajic/go-actor) - アクターモデルを使って並行プログラムを書くための小さなライブラリ。
- [go-floc](https://github.com/workanator/go-floc) - ゴルーチンを簡単にオーケストレーションします。
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - ゴルーチンの実行順序を制御します。
- [go-future](https://github.com/jizhuozhi/go-future) - ジェネリックなコンビネーターと DAG 実行エンジンを備えた Future/Promise ライブラリ。
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - シンプルな API を持つこの軽量ライブラリで、ゴルーチンのプールを管理します。
- [go-trylock](https://github.com/subchen/go-trylock) - Golang の読み書きロックで TryLock をサポートします。
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - エラー処理と並行数の制御を備えた `sync.WaitGroup` のようなもの。
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Java のスレッドプールにインスパイアされた Go WorkerPool は、重いゴルーチンの制御を目的としています。
- [goccm](https://github.com/zenthangplus/goccm) - Go Concurrency Manager パッケージは、同時に実行できるゴルーチンの数を制限します。
- [gohive](https://github.com/loveleshsharma/gohive) - Go 向けの高性能で使いやすいゴルーチンプール。
- [gollback](https://github.com/vardius/gollback) - クロージャーとコールバックの実行を管理するための、シンプルな非同期関数ユーティリティ。
- [goscade](https://github.com/ognick/goscade) - 依存関係グラフ、起動順序の制御、準備状態の調整、グレースフルシャットダウンを備えた、Go コンポーネント向けのミニマルなライフサイクルオーケストレーター。
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl は、プロセス管理とプロセス監視を兼ね備えたツールです。無限のワーカープールにより、プールとプロセスを制御し、その状態を監視できます。
- [goworker](https://github.com/benmanns/goworker) - goworker は Go ベースのバックグラウンドワーカーです。
- [gowp](https://github.com/xxjwxc/gowp) - gowp は並行数を制限するゴルーチンプールです。
- [gpool](https://github.com/Sherifabdlnaby/gpool) - コンテキストを考慮したゴルーチンのサイズ変更可能なプールを管理し、並行数を制限します。
- [grpool](https://github.com/ivpusic/grpool) - 軽量なゴルーチンプール。
- [hands](https://github.com/duanckham/hands) - 複数のゴルーチンの実行と結果の返却戦略を制御するためのプロセスコントローラー。
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch は `All`、`First`、`Retry`、`Waterfall` などの関数を提供し、非同期のフロー制御をより直感的にします。
- [kyoo](https://github.com/dirkaholic/kyoo) - 無制限のジョブキューと並行ワーカープールを提供します。
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - N 個のワーカーゴルーチンのプールに制限された、`sync/errgroup` のドロップイン代替。
- [nursery](https://github.com/arunsworld/nursery) - Go における構造化された並行処理。
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight は Erlang のスーパービジョンツリーの完全な実装です。
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - 関数を並列に実行します。
- [pond](https://github.com/alitto/pond) - Go で書かれた、ミニマルで高性能なゴルーチンワーカープール。
- [pool](https://github.com/go-playground/pool) - ゴルーチンの扱いとキャンセルを容易にする、制限付きのコンシューマーゴルーチンまたは無制限のゴルーチンプール。
- [powerlock](https://github.com/donomii/powerlock) - コンテキストによるキャンセル、上限付きの待機キュー、ウォッチドッグ診断、pprof プロファイル、Prometheus メトリクスを備えた名前付き FIFO ミューテックス。
- [rill](https://github.com/destel/rill) - クリーンで組み合わせ可能な、チャネルベースの並行処理のための Go ツールキット。
- [routine](https://github.com/timandy/routine) - `routine` は Go 向けの `ThreadLocal` ライブラリです。使いやすく、競合が発生しない高性能な `goroutine` コンテキストへのアクセスインターフェースをカプセル化して提供し、コルーチンのコンテキスト情報によりスマートにアクセスできるようにします。
- [routine](https://github.com/x-mod/routine) - コンテキストによるゴルーチンの制御。Main、Go、Pool といくつかの便利な Executor をサポートしています。
- [semaphore](https://github.com/kamilsk/semaphore) - チャネルとコンテキストに基づく、ロック/アンロック操作のタイムアウトを備えたセマフォパターンの実装。
- [semaphore](https://github.com/marusama/semaphore) - CAS に基づく、高速でサイズ変更可能なセマフォの実装（チャネルベースのセマフォ実装より高速）。
- [stl](https://github.com/ssgreg/stl) - ソフトウェアトランザクショナルメモリ（STM）の並行制御メカニズムに基づくソフトウェアトランザクショナルロック。
- [threadpool](https://github.com/shettyh/threadpool) - Golang によるスレッドプールの実装。
- [tunny](https://github.com/Jeffail/tunny) - Golang 向けのゴルーチンプール。
- [worker-pool](https://github.com/vardius/worker-pool) - goworker は、Go のシンプルな非同期ワーカープールです。
- [workerpool](https://github.com/gammazero/workerpool) - キューに入れられたタスクの数ではなく、タスク実行の並行数を制限するゴルーチンプール。

**[⬆ トップに戻る](#contents)**

## GUI

_GUI アプリケーションを構築するためのライブラリ。_

_ツールキット_

- [app](https://github.com/murlokswarm/app) - GO、HTML、CSS でアプリを作成するためのパッケージ。MacOS に対応しており、Windows は対応中です。
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - [cimgui](https://github.com/cimgui/cimgui) を介して自動生成された [Dear ImGui](https://github.com/ocornut/imgui) の Go ラッパー。
- [Cogent Core](https://github.com/cogentcore/core) - macOS、Windows、Linux、iOS、Android、Web で動作する 2D および 3D アプリを構築するためのフレームワーク。
- [DarwinKit](https://github.com/progrium/darwinkit) - Go を使ってネイティブな macOS アプリケーションを構築します。
- [energy](https://github.com/energye/energy) - LCL（ネイティブシステム UI コントロールライブラリ）と CEF（Chromium Embedded Framework）に基づくクロスプラットフォーム（Windows/ macOS / Linux）
- [fyne](https://github.com/fyne-io/fyne) - Material Design に基づいて Go 向けに設計された、クロスプラットフォームのネイティブ GUI。Linux、macOS、Windows、BSD、iOS、Android をサポートしています。
- [gio](https://gioui.org) - Gio は、Go でクロスプラットフォームのイミディエイトモード GUI を書くためのライブラリです。Linux、macOS、Windows、Android、iOS、FreeBSD、OpenBSD、WebAssembly といった主要なプラットフォームをすべてサポートしています。
- [go-gtk](https://mattn.github.io/go-gtk/) - GTK の Go バインディング。
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - モダンなデスクトップ UI 開発のための組み込み可能な HTML/CSS/スクリプトエンジン Sciter の Go バインディング。クロスプラットフォームです。
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Windows / Linux / Mac 向けのクロスプラットフォーム UI ツールキットアグリゲーター。GTK、Cocoa、Windows API に対応
- [gogpu/ui](https://github.com/gogpu/ui) - 22 のウィジェット、3 つのデザインシステム（Material、Fluent、Cupertino）、リアクティブシグナルを備え、CGO 不要の GPU アクセラレーション対応 GUI ツールキット（[GoGPU](https://github.com/gogpu) エコシステムの一部）。
- [goradd/html5tag](https://github.com/goradd/html5tag) - HTML5 タグを出力するためのライブラリ。
- [gotk3](https://github.com/gotk3/gotk3) - GTK3 の Go バインディング。
- [gowd](https://github.com/dtylman/gowd) - GO、HTML、CSS、NW.js による迅速でシンプルなデスクトップ UI 開発。クロスプラットフォームです。
- [proton](https://github.com/CzaxStudio/proton) - Gio 上に構築され、Cgo への依存がない Pure Go のイミディエイトモード GUI フレームワーク。
- [qt](https://github.com/therecipe/qt) - Go 向けの Qt バインディング（Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi をサポート）。
- [Spot](https://github.com/roblillack/spot) - リアクティブなクロスプラットフォームのデスクトップ GUI ツールキット。
- [ui](https://github.com/andlabs/ui) - Go 向けのプラットフォームネイティブな GUI ライブラリ。クロスプラットフォームです。
- [unison](https://github.com/richardwilkes/unison) - Go のデスクトップアプリケーションのための統一されたグラフィカルユーザー体験ツールキット。macOS、Windows、Linux をサポートしています。
- [Wails](https://wails.io) - OS 組み込みの HTML レンダラーを使った HTML UI による、Mac、Windows、Linux のデスクトップアプリ。
- [walk](https://github.com/lxn/walk) - Go 向けの Windows アプリケーションライブラリキット。
- [webview](https://github.com/zserge/webview) - シンプルな双方向 JavaScript バインディングを備えた、クロスプラットフォームの WebView ウィンドウ（Windows / macOS / Linux）。

_インタラクション_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - libappindicator3 C ライブラリの Go バインディング。
- [gogpu/systray](https://github.com/gogpu/systray) - CGO 不要の、Windows、macOS、Linux 向けの Pure Go システムトレイライブラリ（[GoGPU](https://github.com/gogpu) エコシステムの一部）。
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Go 向けの OSX デスクトップ通知ライブラリ。
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - マシン上のあらゆる（プラガブルな）アクティビティを通知する OSX ライブラリ。
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - Golang での OSX のスリープ/ウェイク通知。
- [robotgo](https://github.com/go-vgo/robotgo) - Go ネイティブなクロスプラットフォームの GUI システム自動化。マウス、キーボードなどを制御します。
- [systray](https://github.com/getlantern/systray) - 通知領域にアイコンとメニューを配置するためのクロスプラットフォームの Go ライブラリ。
- [trayhost](https://github.com/shurcooL/trayhost) - ホスト OS のタスクバーにアイコンを配置するためのクロスプラットフォームの Go ライブラリ。
- [zenity](https://github.com/ncruces/zenity) - ユーザーとグラフィカルにやり取りするシンプルなダイアログを作成するための、クロスプラットフォームの Go ライブラリおよび CLI。

**[⬆ トップに戻る](#contents)**

## ハードウェア

_ハードウェアとやり取りするためのライブラリ、ツール、チュートリアル。_

- [arduino-cli](https://github.com/arduino/arduino-cli) - 公式の Arduino CLI およびライブラリ。単体で実行することも、より大きな Go プロジェクトに組み込むこともできます。
- [emgo](https://github.com/ziutek/emgo) - 組み込みシステム（STM32 MCU など）をプログラミングするための Go ライクな言語。
- [ghw](https://github.com/jaypipes/ghw) - Golang のハードウェア検出/調査ライブラリ。
- [go-osc](https://github.com/hypebeast/go-osc) - Go 向けの Open Sound Control（OSC）バインディング。
- [go-rpio](https://github.com/stianeikeland/go-rpio) - cgo を必要としない、Go 向けの GPIO。
- [goroslib](https://github.com/aler9/goroslib) - Go 向けの Robot Operating System（ROS）ライブラリ。
- [joystick](https://github.com/0xcafed00d/joystick) - 接続されたジョイスティックの状態を読み取るための、ポーリング型 API。
- [moody](https://github.com/dinakars777/moody) - macOS 向けのハードウェアイベント・パーソナリティデーモン。USB、充電器、蓋の開閉などのハードウェアイベントを監視し、カスタマイズ可能なパーソナリティで反応します。
- [sysinfo](https://github.com/zcalusic/sysinfo) - Linux の OS / カーネル / ハードウェアのシステム情報を提供する Pure Go ライブラリ。

**[⬆ トップに戻る](#contents)**

## 画像

_画像を操作するためのライブラリ。_

- [bild](https://github.com/anthonynsimon/bild) - Pure Go による画像処理アルゴリズムのコレクション。
- [bimg](https://github.com/h2non/bimg) - libvips を使った高速で効率的な画像処理のための小さなパッケージ。
- [cameron](https://github.com/aofei/cameron) - Go 向けのアバタージェネレーター。
- [canvas](https://github.com/tdewolff/canvas) - ベクターグラフィックスを PDF、SVG、ラスター画像に出力します。
- [color-extractor](https://github.com/marekm4/color-extractor) - 外部依存関係のない、主要色の抽出ツール。
- [darkroom](https://github.com/gojek/darkroom) - 速度とレジリエンスに重点を置いた、ストレージバックエンドと画像処理エンジンを変更可能な画像プロキシ。
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - AWS Lambda と CloudFront にデプロイ可能な、libvips を使った画像最適化・変換 API。
- [geopattern](https://github.com/pravj/geopattern) - 文字列から美しいジェネレーティブな画像パターンを作成します。
- [gg](https://github.com/fogleman/gg) - Pure Go による 2D レンダリング。
- [gift](https://github.com/disintegration/gift) - 画像処理フィルターのパッケージ。
- [gltf](https://github.com/qmuntal/gltf) - 効率的で堅牢な glTF 2.0 のリーダー、ライター、バリデーター。
- [go-cairo](https://github.com/ungerik/go-cairo) - cairo グラフィックスライブラリの Go バインディング。
- [go-gd](https://github.com/bolknote/go-gd) - GD ライブラリの Go バインディング。
- [go-nude](https://github.com/koyachi/go-nude) - Go によるヌード検出。
- [go-qrcode](https://github.com/yeqown/go-qrcode) - 色、ブロックサイズ、形状、アイコンを調整できる、個性的なスタイルの QR コードを生成します。
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - webcolors ライブラリの Python から Go への移植版。
- [go-webp](https://github.com/kolesa-team/go-webp) - libwebp を使って WebP 画像をエンコード・デコードするためのライブラリ。
- [gocv](https://github.com/hybridgroup/gocv) - OpenCV 3.3 以降を使ったコンピュータービジョンのための Go パッケージ。
- [gogpu/gg](https://github.com/gogpu/gg) - Canvas ライクな API を備えた GPU アクセラレーション対応の 2D レンダリング。CGO は不要です（Pure Go のグラフィックスエコシステム [GoGPU](https://github.com/gogpu) の一部）。
- [goimagehash](https://github.com/corona10/goimagehash) - Go の知覚的画像ハッシュパッケージ。
- [goimghdr](https://github.com/corona10/goimghdr) - imghdr モジュールは、ファイルに含まれる画像の種類を判定します（Go 向け）。
- [govatar](https://github.com/o1egl/govatar) - 面白いアバターを生成するためのライブラリおよびコマンドツール。
- [govips](https://github.com/davidbyttow/govips) - Go 向けの超高速な画像処理・リサイズライブラリ。
- [gowitness](https://github.com/sensepost/gowitness) - Go とヘッドレス Chrome を使って、コマンドラインで Web ページのスクリーンショットを撮影します。
- [gridder](https://github.com/shomali11/gridder) - グリッドベースの 2D グラフィックスライブラリ。
- [image2ascii](https://github.com/qeesung/image2ascii) - 画像を ASCII に変換します。
- [imagick](https://github.com/gographics/imagick) - ImageMagick の MagickWand C API の Go バインディング。
- [imaginary](https://github.com/h2non/imaginary) - 画像リサイズのための、高速でシンプルな HTTP マイクロサービス。
- [imaging](https://github.com/disintegration/imaging) - シンプルな Go の画像処理パッケージ。
- [imagor](https://github.com/cshum/imagor) - libvips を使った、高速で安全な画像処理サーバーおよび Go ライブラリ。
- [img](https://github.com/hawx/img) - 画像操作ツールのセレクション。
- [ln](https://github.com/fogleman/ln) - Go による 3D 線画のレンダリング。
- [mergi](https://github.com/noelyahan/mergi) - 画像操作（結合、切り抜き、リサイズ、透かし、アニメーション）のためのツールおよび Go ライブラリ。
- [mort](https://github.com/aldor007/mort) - Go で書かれたストレージ兼画像処理サーバー。
- [mpo](https://github.com/donatj/mpo) - MPO 3D 写真のデコーダーおよび変換ツール。
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - 外部依存関係ゼロの、Go ネイティブな WebP エンコーダー。
- [picfit](https://github.com/thoas/picfit) - Go で書かれた画像リサイズサーバー。
- [pt](https://github.com/fogleman/pt) - Go で書かれたパストレーシングエンジン。
- [scout](https://github.com/jonoton/scout) - Scout は、DIY のビデオセキュリティのためのスタンドアロンなオープンソースソフトウェアソリューションです。
- [smartcrop](https://github.com/muesli/smartcrop) - 任意の画像と切り抜きサイズに対して、適切な切り抜き位置を見つけます。
- [steganography](https://github.com/auyer/steganography) - LSB ステガノグラフィーのための Pure Go ライブラリ。
- [stegify](https://github.com/DimitarPetrov/stegify) - 任意のファイルを画像内に隠すことができる、LSB ステガノグラフィーのための Go ツール。
- [svgo](https://github.com/ajstarks/svgo) - SVG を生成するための Go 言語ライブラリ。
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs は、次世代フォーマットを使って Web 向けに画像をリサイズ・最適化します。
- [webp-server](https://github.com/mehdipourfar/webp-server) - 画像の保存、リサイズ、変換、キャッシュが可能な、シンプルで最小限の画像サーバー。

**[⬆ トップに戻る](#contents)**

## IoT（モノのインターネット）

_IoT デバイスをプログラミングするためのライブラリ。_

- [connectordb](https://github.com/connectordb/connectordb) - Quantified Self と IoT のためのオープンソースプラットフォーム。
- [devices](https://github.com/goiot/devices) - IoT デバイス向けのライブラリスイート。x/exp/io 向けの実験的なものです。
- [ekuiper](https://github.com/lf-edge/ekuiper) - IoT エッジ向けの軽量なデータストリーム処理エンジン。
- [eywa](https://github.com/xcodersun/eywa) - Project Eywa は、本質的には接続されたデバイスを追跡する接続マネージャーです。
- [flogo](https://github.com/tibcosoftware/flogo) - Project Flogo は、IoT エッジアプリと統合のためのオープンソースフレームワークです。
- [gatt](https://github.com/paypal/gatt) - Gatt は、Bluetooth Low Energy ペリフェラルを構築するための Go パッケージです。
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot は、ロボティクス、フィジカルコンピューティング、モノのインターネットのためのフレームワークです。
- [huego](https://github.com/amimof/huego) - Go 向けの充実した Philips Hue クライアントライブラリ。
- [iot](https://github.com/vaelen/iot/) - IoT は、Google IoT Core デバイスを実装するためのシンプルなフレームワークです。
- [periph](https://periph.io/) - 低レベルなボードの機能とやり取りするための周辺機器 I/O。
- [rulego](https://github.com/rulego/rulego) - RuleGo は、IoT エッジ向けの軽量・高性能な組み込み型で、オーケストレーション可能なコンポーネントベースのルールエンジンです。
- [sensorbee](https://github.com/sensorbee/sensorbee) - IoT 向けの軽量なストリーム処理エンジン。
- [shifu](https://github.com/Edgenesis/shifu) - Kubernetes ネイティブな IoT 開発フレームワーク。
- [smart-home](https://github.com/e154/smart-home) - IoT 自動化のためのソフトウェアパッケージ。

**[⬆ トップに戻る](#contents)**

## ジョブスケジューラー

_ジョブをスケジューリングするためのライブラリ。_

- [cdule](https://github.com/deepaksinghvi/cdule) - データベースをサポートするジョブスケジューラーライブラリ
- [cheek](https://github.com/bart6114/cheek) - ジョブスケジューリングに KISS なアプローチを提供することを目指した、crontab ライクなシンプルなスケジューラー。
- [clockwerk](https://github.com/onatm/clockwerk) - シンプルで流れるような構文で定期的なジョブをスケジュールするための Go パッケージ。
- [cronticker](https://github.com/krayzpipes/cronticker) - cron スケジュールをサポートするティッカーの実装。
- [go-cron](https://github.com/rk/go-cron) - 1 秒に 1 回から、特定の日時に年 1 回まで、さまざまな間隔でクロージャーや関数を実行できる、Go 向けのシンプルな Cron ライブラリ。主に Web アプリケーションや長時間実行されるデーモン向けです。
- [go-cron](https://github.com/netresearch/go-cron) - 実行時のスケジュール更新、エントリーごとのコンテキスト、レジリエンスミドルウェア（リトライ、サーキットブレーカー、レート制限）、可観測性フックを備えた Cron ジョブスケジューラー。robfig/cron の後継です。
- [go-job](https://github.com/cybergarage/go-job) - Go 向けの柔軟で拡張可能なジョブスケジューリング・実行ライブラリ。
- [go-quartz](https://github.com/reugn/go-quartz) - Go 向けのシンプルで依存関係ゼロのスケジューリングライブラリ。
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - 標準的な cron 式、カスタム記述子、インターバル、タスクの依存関係をサポートするジョブスケジューラー。
- [gocron](https://github.com/go-co-op/gocron) - 簡単で流れるような Go のジョブスケジューリング。[jasonlvhit/gocron](https://github.com/jasonlvhit/gocron) の、活発にメンテナンスされているフォークです。
- [goflow](https://github.com/fieldryand/goflow) - シンプルでありながら強力な DAG スケジューラーとダッシュボード。
- [gron](https://github.com/roylee0704/gron) - シンプルな Go API で時間ベースのタスクを定義すると、Gron のスケジューラーがそれに従って実行します。
- [gronx](https://github.com/adhocore/gronx) - Cron 式パーサー、タスクランナー、そして crontab ライクなタスクリストを処理するデーモン。
- [JobRunner](https://github.com/bamzi/jobrunner) - ジョブのキューイングとライブ監視を組み込んだ、スマートで多機能な cron ジョブスケジューラー。
- [leprechaun](https://github.com/kilgaloon/leprechaun) - Webhook、cron、従来型のスケジューリングをサポートするジョブスケジューラー。
- [ofelia](https://github.com/netresearch/ofelia) - Docker 用のジョブスケジューラー（Docker のための crontab）。Web UI、ジョブの依存関係、リトライ、ジョブの永続化を追加した mcuadros/ofelia のフォークです。
- [pending](https://github.com/kahoon/pending) - キャンセル、グレースフルシャットダウン、オプションの並行数制限を備えた、遅延タスク向けの ID ベースのデバウンス付きタスクスケジューラー。
- [sched](https://github.com/romshark/sched) - 時間を早送りする機能を備えたジョブスケジューラー。
- [scheduler](https://github.com/carlescere/scheduler) - Cron ジョブのスケジューリングを簡単に。
- [scheduler](https://github.com/yuseferi/scheduler) - 遅延タスク、バッチ化された Redis による協調、リトライ、リースベースのリカバリー、バージョン管理されたキューのパーティショニングを備えた、Go ネイティブな分散ジョブスケジューラー。
- [tasks](https://github.com/madflojo/tasks) - Go で繰り返しタスクを実行するための、使いやすいインプロセススケジューラー。
- [tickstem/cron](https://github.com/tickstem/cron) - HTTP の cron ジョブをスケジュールするための Go クライアント。実行履歴、失敗アラート、本番の認証情報なしでハンドラーをテストするための tsk-local を備えています。
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - デッドマンスイッチ方式のハートビート監視のための Go クライアント：各ジョブの実行後に URL に ping を送り、ping が届かなくなるとメールでアラートを受け取れます。

**[⬆ トップに戻る](#contents)**

## JSON

_JSON を扱うためのライブラリ。_

- [ajson](https://github.com/spyzhov/ajson) - JSONPath をサポートする、Golang 向けの抽象 JSON。
- [ask](https://github.com/simonnilsson/ask) - マップやスライス内のネストされた値に簡単にアクセスできます。encoding/json や、任意のデータを Go のデータ型に「アンマーシャル」する他のパッケージと組み合わせて動作します。
- [dynjson](https://github.com/cocoonspace/dynjson) - 動的な API のための、クライアント側でカスタマイズ可能な JSON フォーマット。
- [ej](https://github.com/lucassscaravelli/ej) - さまざまなソースの JSON を簡潔に読み書きします。
- [epoch](https://github.com/vtopc/epoch) - JSON において、Unix タイムスタンプ/エポックと組み込みの time.Time 型を相互にマーシャル/アンマーシャルするためのプリミティブを含みます。
- [fastjson](https://github.com/valyala/fastjson) - Go 向けの高速な JSON パーサー兼バリデーター。カスタム構造体、コード生成、リフレクションは不要です。
- [gabs](https://github.com/Jeffail/gabs) - Go で未知または動的な JSON を解析、作成、編集するためのライブラリ。
- [gjo](https://github.com/skanehira/gjo) - JSON オブジェクトを作成するための小さなユーティリティ。
- [GJSON](https://github.com/tidwall/gjson) - 1 行のコードで JSON の値を取得します。
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError は、JsonApi 仕様に従った JSON レスポンスのエラーを簡単に作成できるようにするためのものです。
- [go-respond](https://github.com/nicklaw5/go-respond) - 一般的な HTTP JSON レスポンスを扱うための Go パッケージ。
- [gojmapr](https://github.com/limiu82214/gojmapr) - JSON パスを使って、複雑な JSON からシンプルな構造体を取得します。
- [gojq](https://github.com/elgs/gojq) - Golang による JSON クエリ。
- [gojson](https://github.com/ChimeraCoder/gojson) - サンプルの JSON から Go（golang）の構造体定義を自動生成します。
- [htmljson](https://github.com/nikolaydubina/htmljson) - Go で JSON を HTML としてリッチにレンダリングします。
- [JayDiff](https://github.com/yazgazan/jaydiff) - Go で書かれた JSON の差分ユーティリティ。
- [jettison](https://github.com/wI2L/jettison) - Go 向けの高速で柔軟な JSON エンコーダー。
- [jscan](https://github.com/romshark/jscan) - 高性能でゼロアロケーションの JSON イテレーター。
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - JSON を Go の構造体に変換します。
- [JSON-to-Proto](https://json-to-proto.github.io/) - JSON をオンラインで Protobuf に変換します。
- [json2go](https://github.com/m-zajac/json2go) - JSON から Go 構造体への高度な変換。複数の JSON ドキュメントを解析し、そのすべてに適合する構造体を作成できるパッケージを提供します。
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - JSON API のエラーリファレンスに基づく Go バインディング。
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - 色付きの JSON を出力する、`encoding/json` のドロップイン置き換え。
- [jsondiff](https://github.com/wI2L/jsondiff) - RFC6902（JSON Patch）に基づく、Go 向けの JSON 差分ライブラリ。
- [jsonf](https://github.com/miolini/jsonf) - JSON のハイライト付き整形と、構造体クエリによる取得のためのコンソールツール。
- [jsongo](https://github.com/ricardolonga/jsongo) - JSON オブジェクトをより簡単に作成するための流れるような API。
- [jsonhal](https://github.com/RichardKnop/jsonhal) - カスタム構造体を HAL 互換の JSON レスポンスにマーシャルするためのシンプルな Go パッケージ。
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - さまざまなソースの JSON を簡単に読み書きできるシンプルなハンドラーを提供する JSON ライブラリ。
- [jsonic](https://github.com/sinhashubham95/jsonic) - 構造体を定義せずに、型安全な方法で JSON を扱いクエリするためのユーティリティ。
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - `encoding/json` に代わる、非構造化 JSON データのための高速で便利なライブラリ。
- [jzon](https://github.com/zerosnake0/jzon) - 標準と互換性のある API/挙動を持つ JSON ライブラリ。
- [kazaam](https://github.com/Qntfy/kazaam) - JSON ドキュメントを任意に変換するための API。
- [mapslice-json](https://github.com/mickep76/mapslice-json) - JSON でマップを順序付きでマーシャル/アンマーシャルするための Go の MapSlice。
- [marshmallow](https://github.com/PerimeterX/marshmallow) - 柔軟なユースケースに対応する高性能な JSON アンマーシャリング。
- [mp](https://github.com/sanbornm/mp) - シンプルな CLI のメールパーサー。現在は標準入力を受け取り、JSON を出力します。
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go は、JSONPath を含むさまざまな追加の JSON ツールを備えた高性能なパーサーです。
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - Golang の構造体フィールドタグによる条件付きバリデーションを備えた、シンプルな JSON パーサー。
- [silentjson](https://github.com/GenshIv/silentjson) - AVX2 SIMD 命令を活用した、ゼロアロケーションの JSON 境界スキャナー兼スプリッター。
- [SJSON](https://github.com/tidwall/sjson) - 1 行のコードで JSON の値を設定します。  
- [ujson](https://github.com/olvrng/ujson) - 非構造化 JSON を扱う、高速で最小限の JSON パーサー兼トランスフォーマー。
- [vjson](https://github.com/miladibra10/vjson) - 流れるような API で JSON スキーマを宣言して JSON オブジェクトを検証するための Go パッケージ。

**[⬆ トップに戻る](#contents)**

## ロギング

_ログファイルを生成・操作するためのライブラリ。_

- [caarlos0/log](https://github.com/caarlos0/log) - カラフルな CLI ロガー。
- [distillog](https://github.com/amoghe/distillog) - 洗練されたレベル付きロギング（標準ライブラリ + ログレベルと考えてください）。
- [glg](https://github.com/kpango/glg) - glg は、Go 向けのシンプルで高速なレベル付きロギングライブラリです。
- [glo](https://github.com/lajosbencz/glo) - PHP の Monolog にインスパイアされた、同一の重大度レベルを持つロギング機能。
- [glog](https://github.com/golang/glog) - Go 向けのレベル付き実行ログ。
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - cronolog のように、現在の日時に基づいてログファイルを自動的にローテーションするシンプルなライター。
- [go-log](https://github.com/pieterclaerhout/go-log) - スタックトレース、オブジェクトのダンプ、オプションのタイムスタンプを備えたロギングライブラリ。
- [go-log](https://github.com/subchen/go-log) - レベル、フォーマッター、ライターを備えた、Go でのシンプルで設定可能なロギング。
- [go-log](https://github.com/siddontang/go-log) - レベルと複数のハンドラーをサポートするログライブラリ。
- [go-log](https://github.com/ian-kent/go-log) - Go による Log4j の実装。
- [go-log4g](https://github.com/go-log4g/core) - Log4g は、Go 標準の log/slog ロギングファサードに Log4j スタイルの設定とパターンレイアウトを提供します。
- [go-logger](https://github.com/apsdehal/go-logger) - レベルハンドラーを備えた、Go プログラム用のシンプルなロガー。
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - 改ざんをオフラインで検証できる、追記専用でハッシュチェーン化され、オプションで Ed25519 署名される slog ハンドラー。
- [gone/log](https://github.com/One-com/gone/tree/master/log) - 高速で拡張可能、フル機能で、標準ライブラリとソース互換性のあるログライブラリ。
- [gslog](https://github.com/maguro/gslog) - OpenTelemetry のトレースとバゲージ、Kubernetes の podinfo ラベルに対応した、log/slog 用の Google Cloud Logging ハンドラー。
- [httpretty](https://github.com/henvic/httpretty) - デバッグ用に、通常の HTTP リクエストをターミナルに整形して表示します（http.DumpRequest に似ています）。
- [journald](https://github.com/ssgreg/journald) - ロギングのための systemd Journal のネイティブ API の Go 実装。
- [kemba](https://github.com/clok/kemba) - [debug](https://github.com/visionmedia/debug) にインスパイアされた小さなデバッグロギングツール。CLI ツールやアプリケーションに最適です。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - journalctl、ファイルシステム、Docker や Podman のコンテナ、Kubernetes の Pod からのログを閲覧・フィルタリングするための TUI。
- [log](https://github.com/aerogo/log) - 1 つのログを複数のライター（標準出力、ファイル、TCP 接続など）に接続できる O(1) のロギングシステム。
- [log](https://github.com/apex/log) - Go 向けの構造化ロギングパッケージ。
- [log](https://github.com/go-playground/log) - Go 向けの、シンプルで設定可能かつスケーラブルな構造化ロギング。
- [log](https://github.com/teris-io/log) - ロギングのファサードとその実装をきれいに分離した、Go 向けの構造化ログインターフェース。
- [log](https://github.com/heartwilltell/log) - 標準の log パッケージをラップした、シンプルなレベル付きロギング。
- [log](https://github.com/no-src/log) - すぐに使えるシンプルなロギングフレームワーク。
- [log15](https://github.com/inconshreveable/log15) - Go 向けのシンプルで強力なロギング。
- [logdump](https://github.com/ewwwwwqm/logdump) - マルチレベルロギングのためのパッケージ。
- [logex](https://github.com/chzyer/logex) - 追跡とレベルをサポートする Golang のログライブラリ。標準のログライブラリをラップしています。
- [logger](https://github.com/azer/logger) - Go 向けのミニマルなロギングライブラリ。
- [logo](https://github.com/mbndr/logo) - 設定可能なさまざまなライターに出力する Golang のロガー。
- [logrus](https://github.com/Sirupsen/logrus) - Go 向けの構造化ロガー。
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - [logrus](https://github.com/sirupsen/logrus) ロガーを使った `io.Writer` の実装。
- [logrusly](https://github.com/sebest/logrusly) - エラーを [Loggly](https://www.loggly.com/) に送信する [logrus](https://github.com/sirupsen/logrus) プラグイン。
- [logutils](https://github.com/hashicorp/logutils) - 標準のロガーを拡張し、Go（Golang）のロギングを少し改善するためのユーティリティ。
- [logxi](https://github.com/mgutz/logxi) - 高速で使って幸せになれる、12-factor アプリ向けのロガー。
- [lumberjack](https://github.com/natefinch/lumberjack) - io.WriteCloser を実装したシンプルなローリングロガー。
- [mlog](https://github.com/jbrodriguez/mlog) - 5 つのレベル、オプションのログファイルローテーション機能、stdout/stderr への出力を備えた、Go 向けのシンプルなロギングモジュール。
- [noodlog](https://github.com/gyozatech/noodlog) - 機密データを難読化し、あらゆる種類のコンテンツをマーシャルできる、パラメーター化された JSON ロギングライブラリ。値の代わりにポインターが出力されたり、JSON 文字列にエスケープ文字が入ったりすることはもうありません。
- [onelog](https://github.com/francoispqt/onelog) - Onelog は、非常にシンプルでありながらとても効率的な JSON ロガーです。あらゆるシナリオにおいて最速の JSON ロガーであり、アロケーションが最も少ないロガーの 1 つでもあります。
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - ログの重大度、分類、フィルタリングをサポートする高性能なロギング。フィルタリングしたログメッセージをさまざまな出力先（コンソール、ネットワーク、メールなど）に送信できます。
- [phuslu/log](https://github.com/phuslu/log) - 高性能な構造化ロギング。
- [pp](https://github.com/k0kubun/pp) - Go 言語向けの色付きプリティプリンター。
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter は、複数のポリシーでログファイルのローテーションを提供する、自動ローテーション機能付きの `io.Writer` 実装です。
- [seelog](https://github.com/cihub/seelog) - 柔軟なディスパッチ、フィルタリング、フォーマットを備えたロギング機能。
- [sentry-go](https://github.com/getsentry/sentry-go) - Go 向けの Sentry SDK。リアルタイムアラートとパフォーマンス監視により、エラーの監視と追跡を支援します。
- [slf4g](https://github.com/echocat/slf4g) - Simple Logging Facade for Golang：シンプルな構造化ロギングでありながら、過去数十年のロギングフレームワークから得た膨大な知見を活かし、強力で拡張・カスタマイズが可能です。
- [slog](https://github.com/gookit/slog) - Go 向けの軽量で設定可能、拡張可能なロガー。
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - 環境変数から標準ライブラリの log/slog ロガーを設定します。レベル、フォーマット、ソースの位置、stdout/stderr の振り分けに対応しています。
- [slog-datadog](https://github.com/samber/slog-datadog) - Datadog 用の slog ハンドラー。
- [slog-formatter](https://github.com/samber/slog-formatter) - slog 用の一般的なフォーマッターと、独自のフォーマッターを作るためのヘルパー。
- [slog-logrus](https://github.com/samber/slog-logrus) - Logrus 用の slog ハンドラー。
- [slog-loki](https://github.com/samber/slog-loki) - Grafana Loki 用の slog ハンドラー。
- [slog-multi](https://github.com/samber/slog-multi) - slog.Handler のチェーン（パイプライン、ファンアウトなど）。
- [slog-sentry](https://github.com/samber/slog-sentry) - Sentry 用の slog ハンドラー。
- [slog-slack](https://github.com/samber/slog-slack) - Slack 用の slog ハンドラー。
- [slog-zap](https://github.com/samber/slog-zap) - Zap 用の slog ハンドラー。
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Zerolog 用の slog ハンドラー。
- [slogor](https://gitlab.com/greyxor/slogor) - カラフルな slog ハンドラー。
- [spew](https://github.com/davecgh/go-spew) - デバッグを支援するため、Go のデータ構造を深く整形表示するプリティプリンターを実装しています。
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - 既存の標準ライブラリ \*sql.DB の使い方を変更せずに使える、Go の SQL データベースドライバー用ロガー。
- [stdlog](https://github.com/alexcesaro/log) - Stdlog は、レベル付きロギングを提供するオブジェクト指向のライブラリです。cron ジョブにとても便利です。
- [structy/log](https://github.com/structy/log) - 使いやすいログシステム。ミニマルながら、デバッグやメッセージの区別のための機能を備えています。
- [tail](https://github.com/hpcloud/tail) - BSD の tail プログラムの機能を再現することを目指した Go パッケージ。
- [timberjack](https://github.com/DeRuina/timberjack) - サイズベース、時間ベース、時刻指定によるスケジュールベースのローテーションを備え、圧縮とクリーンアップをサポートするローリングロガー。
- [tint](https://github.com/lmittmann/tint) - 色付きのログを書き出す slog.Handler。
- [xlog](https://github.com/xfxdev/xlog) - レベル制御、複数のログ出力先、カスタムログフォーマットを備えた、Go 向けのプラグインアーキテクチャと柔軟なログシステム。
- [xlog](https://github.com/rs/xlog) - 柔軟なディスパッチを備えた、`net/context` 対応の HTTP ハンドラー向け構造化ロガー。
- [xylog](https://github.com/xybor-x/xylog) - レベル付きの構造化ロギング、動的フィールド、高いパフォーマンス、ゾーン管理、シンプルな設定、読みやすい構文。
- [yell](https://github.com/jfcg/yell) - もう一つのミニマルなロギングライブラリ。
- [zap](https://github.com/uber-go/zap) - Go による高速で構造化されたレベル付きロギング。
- [zax](https://github.com/yuseferi/zax) - Context を Zap ロガーと統合し、Go のロギングをより柔軟にします。
- [zerolog](https://github.com/rs/zerolog) - ゼロアロケーションの JSON ロガー。
- [zkits-logger](https://github.com/edoger/zkits-logger) - 強力で依存関係ゼロの JSON ロガー。
- [zl](https://github.com/nkmr-jp/zl) - 優れた開発者体験を提供する、zap ベースのロガー。豊富な機能を備えながら、設定は簡単です。

**[⬆ トップに戻る](#contents)**

## 機械学習

_機械学習のためのライブラリ。_

- [Anneal](https://github.com/georgebuilds/anneal) - Go による機械学習コンパイラー。WebGPU バックエンドを備えた、tinygrad のゼロからの移植版です。
- [bayesian](https://github.com/jbrukh/bayesian) - Golang 向けのナイーブベイズ分類。
- [born](https://github.com/born-ml/born) - Burn（Rust）にインスパイアされた深層学習フレームワーク。自動微分、型安全なテンソル、CGO 不要の GPU アクセラレーションを備えています。
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - 高速でスケーラブル、高性能な決定木の勾配ブースティングライブラリ。Cgo を使って CatBoost モデルの非常に高速な推論を Golang で行います。
- [CloudForest](https://github.com/ryanbressler/CloudForest) - Pure Go による、機械学習のための高速で柔軟なマルチスレッドの決定木アンサンブル。
- [datatrax](https://github.com/rbmuller/datatrax) - バッチ処理、型強制、7 つのアルゴリズムを備えた、依存関係ゼロの Pure Go によるデータエンジニアリングと古典的 ML のツールキット。
- [ddt](https://github.com/sgrodriguez/ddt) - 動的決定木。カスタマイズ可能なルールを定義してツリーを作成します。
- [eaopt](https://github.com/MaxHalford/eaopt) - 進化的最適化ライブラリ。
- [evoli](https://github.com/khezen/evoli) - 遺伝的アルゴリズムと粒子群最適化のライブラリ。
- [fonet](https://github.com/Fontinalis/fonet) - Go で書かれたディープニューラルネットワークライブラリ。
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - k-modes および k-prototypes クラスタリングアルゴリズムの Go 実装。
- [go-deep](https://github.com/patrikeh/go-deep) - Go による多機能なニューラルネットワークライブラリ。
- [go-fann](https://github.com/white-pony/go-fann) - Fast Artificial Neural Networks（FANN）ライブラリの Go バインディング。
- [go-galib](https://github.com/thoj/go-galib) - Go / golang で書かれた遺伝的アルゴリズムライブラリ。
- [go-pr](https://github.com/daviddengcn/go-pr) - Go 言語によるパターン認識パッケージ。
- [gobrain](https://github.com/goml/gobrain) - Go で書かれたニューラルネットワーク。
- [godist](https://github.com/e-dard/godist) - さまざまな確率分布と、関連するメソッド。
- [goga](https://github.com/tomcraven/goga) - Go 向けの遺伝的アルゴリズムライブラリ。
- [GoLearn](https://github.com/sjwhitworth/golearn) - Go 向けの汎用機械学習ライブラリ。
- [GoMind](https://github.com/surenderthakran/gomind) - Go による簡素なニューラルネットワークライブラリ。
- [goml](https://github.com/cdipaolo/goml) - Go によるオンライン機械学習。
- [GoMLX](https://github.com/gomlx/gomlx) - Go 向けの高速化された機械学習フレームワーク。
- [gonet](https://github.com/dathoangnd/gonet) - Go 向けのニューラルネットワーク。
- [Goptuna](https://github.com/c-bata/goptuna) - Go で書かれた、ブラックボックス関数のためのベイズ最適化フレームワーク。あらゆるものが最適化されます。
- [goRecommend](https://github.com/timkaye11/goRecommend) - Go で書かれたレコメンデーションアルゴリズムのライブラリ。
- [gorgonia](https://github.com/gorgonia/gorgonia) - さまざまな機械学習やニューラルネットワークのアルゴリズムを構築するためのプリミティブを提供する、Go 向けの Theano のようなグラフベースの計算ライブラリ。
- [gorse](https://github.com/zhenghaoz/gorse) - Go で書かれた、協調フィルタリングに基づくオフラインのレコメンダーシステムのバックエンド。
- [goscore](https://github.com/asafschers/goscore) - PMML 用の Go スコアリング API。
- [gosseract](https://github.com/otiai10/gosseract) - Tesseract C++ ライブラリを使った、OCR（光学文字認識）のための Go パッケージ。
- [hugot](https://github.com/knights-analytics/hugot) - onnxruntime を使った、Golang 向けの Huggingface Transformer パイプライン。
- [libsvm](https://github.com/datastream/libsvm) - LIBSVM 3.14 に基づく libsvm の Golang 版派生物。
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 学習済みの古典的 ML モデルを、依存関係ゼロのネイティブ Go コードにトランスパイルする CLI ツール。Python で書かれており、Go 言語をサポートしています。
- [neural-go](https://github.com/schuyler/neural-go) - 誤差逆伝播法による学習を備えた、Go で実装された多層パーセプトロンネットワーク。
- [ocrserver](https://github.com/otiai10/ocrserver) - Docker や Heroku で本当に簡単にデプロイできる、シンプルな OCR API サーバー。
- [onnx-go](https://github.com/owulveryck/onnx-go) - Open Neural Network Exchange（ONNX）への Go インターフェース。
- [probab](https://github.com/ThePaw/probab) - 確率分布関数とベイズ推論。Pure Go で書かれています。
- [randomforest](https://github.com/malaschitz/randomForest) - Go 向けの使いやすいランダムフォレストライブラリ。
- [regommend](https://github.com/muesli/regommend) - レコメンデーションと協調フィルタリングのエンジン。
- [shield](https://github.com/eaigner/shield) - 柔軟なトークナイザーとストレージバックエンドを備えた、Go 向けのベイズテキスト分類器。
- [tfgo](https://github.com/galeone/tfgo) - 使いやすい Tensorflow バインディング：公式の Tensorflow Go バインディングの使い方を簡素化します。Go で計算グラフを定義し、Python で学習したモデルを読み込んで実行できます。
- [Varis](https://github.com/Xamber/Varis) - Golang のニューラルネットワーク。

**[⬆ トップに戻る](#contents)**

## メッセージング

_メッセージングシステムを実装するライブラリ。_

- [ami](https://github.com/kak-tus/ami) - Redis Cluster Streams に基づく信頼性の高いキューのための Go クライアント。
- [amqp](https://github.com/rabbitmq/amqp091-go) - Go の RabbitMQ クライアントライブラリ。
- [APNs2](https://github.com/sideshow/apns2) - Go 向けの HTTP/2 Apple Push Notification プロバイダー。iOS、tvOS、Safari、OSX のアプリにプッシュ通知を送信します。
- [Asynq](https://github.com/hibiken/asynq) - Redis 上に構築された、Go 向けのシンプルで信頼性が高く効率的な分散タスクキュー。
- [backlite](https://github.com/mikestefanello/backlite) - SQLite を使った、型安全で永続的な組み込みタスクキューとバックグラウンドジョブランナー。
- [Beaver](https://github.com/Clivern/Beaver) - Web やモバイルアプリで、スケーラブルなアプリ内通知、マルチプレイヤーゲーム、チャットアプリを構築するためのリアルタイムメッセージングサーバー。
- [broker](https://github.com/qvcloud/broker) - さまざまなブローカーに対応する統一 API と、組み込みの OpenTelemetry 連携を備えた、本番環境グレードのメッセージング抽象化。
- [Bus](https://github.com/mustafaturan/bus) - 内部通信のためのミニマルなメッセージバスの実装。
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Go によるリアルタイムメッセージング（WebSocket または SockJS）サーバー。
- [Chanify](https://github.com/chanify/chanify) - iOS デバイスにメッセージを送信するプッシュ通知サーバー。
- [Commander](https://github.com/jeroenrinzema/commander) - Apache Kafka などのさまざまな「方言」をサポートする、高レベルなイベント駆動型のコンシューマー/プロデューサー。
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go は、Apache Kafka および Confluent Platform 用の Confluent 製 Golang クライアントです。
- [dbus](https://github.com/godbus/dbus) - D-Bus のネイティブ Go バインディング。
- [drone-line](https://github.com/appleboy/drone-line) - バイナリ、Docker、Drone CI を使って [Line](https://at.line.me/en) の通知を送信します。
- [emitter](https://github.com/olebedev/emitter) - ワイルドカード、述語、キャンセル機能など多くの利点を備え、Go らしい方法でイベントを発行します。
- [event](https://github.com/agoalofalife/event) - オブザーバーパターンの実装。
- [EventBus](https://github.com/asaskevich/EventBus) - 非同期にも対応した軽量なイベントバス。
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Go で書かれた Gaurun クライアント。
- [Glue](https://github.com/desertbit/glue) - 堅牢な Go と Javascript のソケットライブラリ（Socket.io の代替）。
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Go 向けのシンプルなイベントバスパッケージ。
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - C# の MediatR ライブラリにインスパイアされた、イベント駆動アーキテクチャにおけるメディエーターパターンと簡略化された CQRS パターンを扱うためのライブラリ。
- [go-mq](https://github.com/cheshir/go-mq) - 宣言的な設定を備えた RabbitMQ クライアント。
- [go-notify](https://github.com/TheCreeper/go-notify) - freedesktop 通知仕様のネイティブ実装。
- [go-nsq](https://github.com/nsqio/go-nsq) - NSQ 用の公式 Go パッケージ。
- [go-res](https://github.com/jirenius/go-res) - NATS と Resgate を使い、クライアントがシームレスに同期される REST/リアルタイムサービスを構築するためのパッケージ。
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Viessmann Vitotrol Web サービス用のクライアントライブラリ。
- [GoEventBus](https://github.com/Raezil/GoEventBus) - 非常に高速でインメモリ、ロックフリーなイベントバスライブラリ
- [Gollum](https://github.com/trivago/gollum) - さまざまなソースからメッセージを集め、一連の宛先にブロードキャストする n:m マルチプレクサー。
- [golongpoll](https://github.com/jcuga/golongpoll) - Web の Pub/Sub をシンプルにする HTTP ロングポーリングサーバーライブラリ。
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster は Go のプッシュサーバークラスターです。
- [gorush](https://github.com/appleboy/gorush) - [APNs2](https://github.com/sideshow/apns2) と Google の [GCM](https://github.com/google/go-gcm) を使ったプッシュ通知サーバー。
- [gosd](https://github.com/alexsniffin/gosd) - メッセージをチャネルに送信するタイミングをスケジュールするためのライブラリ。
- [guble](https://github.com/smancke/guble) - プッシュ通知（Google Firebase Cloud Messaging、Apple Push Notification サービス、SMS）に加え、WebSocket や REST API を使用するメッセージングサーバー。分散動作とメッセージの永続化を特徴としています。
- [hare](https://github.com/leozz37/hare) - メッセージの送信と TCP ソケットの待ち受けのための、使いやすいライブラリ。
- [hub](https://github.com/leandro-lugaresi/hub) - rabbitMQ の exchange のようなエイリアスをサポートする Pub/Sub パターンを用いた、Go アプリケーション向けのメッセージ/イベントハブ。
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - Go または JSON で記述された大量のルールに対してイベントをマッチングします。
- [jazz](https://github.com/socifi/jazz) - キューの管理とメッセージの発行・消費のための、シンプルな RabbitMQ 抽象化レイヤー。
- [kiln](https://github.com/rafaelaugustos/kiln) - リトライ、ワークフロー、定期ジョブ、ダッシュボードを備えた、PostgreSQL、MySQL、SQLite 上の永続的なバックグラウンドジョブ。
- [machinery](https://github.com/RichardKnop/machinery) - 分散メッセージパッシングに基づく非同期タスクキュー/ジョブキュー。
- [mangos](https://github.com/nanomsg/mangos) - トランスポートの相互運用性を備えた、Nanomsg（「Scalability Protocols」）の Pure Go 実装。
- [melody](https://github.com/olahol/melody) - WebSocket セッションを扱うためのミニマルなフレームワーク。ブロードキャストと ping/pong の自動処理を含みます。
- [Mercure](https://github.com/dunglas/mercure) - Mercure プロトコル（Server-Sent Events 上に構築）を使ってサーバー送信の更新を配信するためのサーバーとライブラリ。
- [messagebus](https://github.com/vardius/message-bus) - messagebus は Go のシンプルな非同期メッセージバスで、イベントソーシング、CQRS、DDD を行う際のイベントバスとして最適です。
- [NATS Go Client](https://github.com/nats-io/nats.go) - NATS メッセージングシステム用の
  Go クライアント。
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - NSQ のトピックとチャネルの小さなラッパー。
- [oplog](https://github.com/dailymotion/oplog) - REST API 向けの汎用的な oplog/レプリケーションシステム。
- [pubsub](https://github.com/tuxychandru/pubsub) - Go 向けのシンプルな Pub/Sub パッケージ。
- [Quamina](https://github.com/timbray/quamina) - メッセージやイベントをフィルタリングするための高速なパターンマッチング。
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - RabbitMQ の自動再接続と発行のリトライを処理する軽量ライブラリ。再接続後に RabbitMQ のエンティティを再宣言する必要性も考慮しています。
- [rabbus](https://github.com/rafaeljesus/rabbus) - AMQP の exchange とキューの小さなラッパー。
- [rabtap](https://github.com/jandelgado/rabtap) - RabbitMQ 用の万能ナイフのような CLI アプリ。
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ は、ローカルのメッセージキューを管理するための軽量で信頼性の高いライブラリです。
- [Ratus](https://github.com/hyperonym/ratus) - Ratus は RESTful な非同期タスクキューサーバーです。
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue は、Redis Streams を使ったキューのプロデューサーとコンシューマーを提供します。
- [rmqconn](https://github.com/sbabiv/rmqconn) - RabbitMQ の再接続。amqp.Connection と amqp.Dial のラッパーです。Close () メソッドが呼び出されて強制的に閉じられるまでの間、接続が切れた場合に再接続を行えます。
- [sarama](https://github.com/Shopify/sarama) - Apache Kafka 用の Go ライブラリ。
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - モバイルデバイスへのサーバーサイド通知のための、Redis をバックエンドとする統合プッシュサービス。
- [varmq](https://github.com/goptics/varmq) - 並行 Go プログラム向けの、ストレージに依存しないメッセージキューとワーカープール。
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - メッセージストリームを効率的に扱います。イベント駆動型アプリケーションの構築、イベントソーシング、メッセージ上の RPC、サーガを実現します。Kafka や RabbitMQ のような従来の Pub/Sub 実装だけでなく、HTTP や MySQL の binlog も使用できます。
- [zmq4](https://github.com/pebbe/zmq4) - ZeroMQ バージョン 4 への Go インターフェース。[バージョン 3](https://github.com/pebbe/zmq3) と [バージョン 2](https://github.com/pebbe/zmq2) 向けも利用できます。

**[⬆ トップに戻る](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - Office の Word（.docx）、Excel（.xlsx）、Powerpoint（.pptx）ドキュメントを作成・処理するための Pure Go ライブラリ。

### Microsoft Excel

_Microsoft Excel を扱うためのライブラリ。_

- [cellwalker](https://github.com/chonla/cellwalker) - セル名を使って Excel のセルを仮想的に走査します。
- [excelize](https://github.com/xuri/excelize) - Microsoft Excel&trade;（XLSX）ファイルを読み書きするための Golang ライブラリ。
- [exl](https://github.com/go-the-way/exl) - Go で書かれた、Excel を構造体にバインドするライブラリ（Go1.18 以降のみ対応）。
- [go-excel](https://github.com/szyhf/go-excel) - リレーショナル DB のような Excel をテーブルとして読み込むための、シンプルで軽量なリーダー。
- [xlsx](https://github.com/tealeg/xlsx) - Go プログラムで、最近のバージョンの Microsoft Excel が使用する XML 形式の読み込みを簡単にするライブラリ。
- [xlsx](https://github.com/plandem/xlsx) - Go プログラムで既存の Microsoft Excel ファイルを高速かつ安全に読み込み/更新する方法。

### Microsoft Word

_Microsoft Word を扱うためのライブラリ。_

- [godocx](https://github.com/gomutex/godocx) - Microsoft Word（Docx）ファイルを読み書きするためのライブラリ。

**[⬆ トップに戻る](#contents)**

## その他

### 依存性注入

_依存性注入を扱うためのライブラリ。_

- [alice](https://github.com/magic003/alice) - Golang 向けの加算的な依存性注入コンテナ。
- [autowire](https://github.com/tiendc/autowire) - ジェネリクスとリフレクションを使った依存性注入。
- [boot-go](http://github.com/boot-go/boot) - Go 開発者のための、リフレクションを使った依存性注入によるコンポーネントベース開発。
- [componego](https://github.com/componego/componego) - テストでコードを重複させずに依存関係を動的に置き換えられる、コンポーネントベースの依存性注入フレームワーク。
- [cosban/di](https://gitlab.com/cosban/di) - コード生成ベースの依存性注入の配線ツール。
- [dig](https://github.com/uber-go/dig) - Go 向けのリフレクションベースの依存性注入ツールキット。
- [dingo](https://github.com/i-love-flamingo/dingo) - Guice をベースにした、Go 向けの依存性注入ツールキット。
- [do](https://github.com/samber/do) - ジェネリクスに基づく依存性注入フレームワーク。
- [floatdrop/di](https://github.com/floatdrop/di) - ジェネリックメソッド上に構築された依存性注入コンテナ。子スコープ、ライフサイクルフック、構築前のグラフ検証を備えています。
- [fx](https://github.com/uber-go/fx) - Go 向けの依存性注入ベースのアプリケーションフレームワーク（dig 上に構築）。
- [go-beans](https://github.com/go-beans/go) - Spring にインスパイアされた、Go 向けの依存性注入とアプリケーションライフサイクルのフレームワーク。
- [Go-Spring](https://github.com/go-spring/spring-core) - Spring Boot にインスパイアされた高性能な Go フレームワーク。Go のシンプルさと効率性を維持しつつ、DI、自動設定、ライフサイクル管理を提供します。
- [gocontainer](https://github.com/vardius/gocontainer) - シンプルな依存性注入コンテナ。
- [godi](https://github.com/junioryono/godi) - スコープ付きのライフタイムとジェネリクスを備えた、Go 向けの Microsoft スタイルの依存性注入。
- [goioc/di](https://github.com/goioc/di) - Spring にインスパイアされた依存性注入コンテナ。
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container は、Go プログラミング言語向けの軽量かつ強力な IoC 依存性注入コンテナです。
- [gontainer](https://github.com/NVIDIA/gontainer) - Go プロジェクト向けの依存性注入サービスコンテナ。
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - GO 向けの YAML ベースの依存性注入コンテナ。依存関係のスコープと循環依存の自動検出をサポートしています。Gontainer は並行処理に対して安全です。
- [HnH/di](https://github.com/HnH/di) - クリーンな API と柔軟性に重点を置いた DI コンテナライブラリ。
- [kinit](https://github.com/go-kata/kinit) - グローバルモード、カスケード初期化、パニックセーフな終了処理を備えた、カスタマイズ可能な依存性注入コンテナ。
- [kod](https://github.com/go-kod/kod) - Go 向けのジェネリクスベースの依存性注入フレームワーク。
- [linker](https://github.com/logrange/linker) - コンポーネントのライフサイクルをサポートする、リフレクションベースの依存性注入および制御の反転（IoC）ライブラリ。
- [nject](https://github.com/muir/nject) - ライブラリ、テスト、HTTP エンドポイント、サービスの起動のための、型安全でリフレクションを用いるフレームワーク。
- [ore](https://github.com/firasdarwish/ore) - 軽量でジェネリック、シンプルな依存性注入（DI）コンテナ。
- [parsley](https://github.com/matzefriedrich/parsley) - 大規模な Go アプリケーション向けに設計された、スコープ付きコンテキストやプロキシ生成などの高度な機能を備えた、柔軟でモジュール式のリフレクションベース DI ライブラリ。
- [wire](https://github.com/Fs02/wire) - Golang 向けの厳格な実行時依存性注入。
- [yama](https://github.com/livetribe/yama) - Google Wire のグラフ向けに開始、休止、停止のコードを生成する、コンパイル時の依存性注入とライフサイクルのフレームワーク。

**[⬆ トップに戻る](#contents)**

### プロジェクト構成

_プロジェクトを構成するための**非公式**なパターン集。_

- [ardanlabs/service](https://github.com/ardanlabs/service) - 本番グレードのスケーラブルな Web サービスアプリケーションを構築するための[スターターキット](https://github.com/ardanlabs/service/wiki)。
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - 本番環境のベストプラクティスに従ったプロジェクトを素早く始めるための、Go アプリケーションのボイラープレートテンプレート。
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - 人気のフレームワークを使って Go プロジェクトを素早く立ち上げられます。
- [go-ddd](https://github.com/sklinkert/go-ddd) - CQRS、値オブジェクト、冪等なコマンド、トランザクショナルアウトボックスを備えたドメイン駆動設計のテンプレート。
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Bazel、grpc-gateway、OpenAPI、Kubernetes を使った、Go の gRPC マイクロサービスのモノレポの例。
- [go-module](https://github.com/octomation/go-module) - Go で書かれた典型的なモジュールのテンプレート。
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - クリーンアーキテクチャ、JWT 認証、RBAC、PostgreSQL、Docker でのホットリロード、Swagger ドキュメントを備えた、AI フレンドリーで本番環境対応の Go REST API ボイラープレート。
- [go-sample](https://github.com/zitryss/go-sample) - 実際のコードを含む、Go アプリケーションプロジェクトのサンプルレイアウト。
- [go-starter](https://github.com/allaboutapps/go-starter) - VSCode DevContainers と高度に統合された、設計思想が明確で本番環境対応の RESTful JSON バックエンドテンプレート。
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - プロダクトのマイクロサービス向けにモジュール式のプロジェクト構成を用いた、Go の Todo バックエンドの例。
- [goapp](https://github.com/naughtygopher/goapp) - Go の Web アプリケーション/サービスを構成・開発するための、設計思想が明確なガイドライン。
- [gobase](https://github.com/wajox/gobase) - 実際の Golang アプリケーション向けの基本的なセットアップを備えた、Golang アプリケーションのシンプルなスケルトン。
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Go エコシステムにおける、歴史的なものから新たなものまで一般的なプロジェクト構成パターンを集めたもの。注意：組織名に反して、これは公式の Golang 標準ではありません。詳しくは[こちらの Issue](https://github.com/golang-standards/project-layout/issues/117) を参照してください。それでも、この構成が役に立つと感じる人もいるでしょう。
- [golang-templates/seed](https://github.com/golang-templates/seed) - Go アプリケーションの GitHub リポジトリテンプレート。
- [goxygen](https://github.com/shpota/goxygen) - Go と Angular、React、Vue のいずれかを使ったモダンな Web プロジェクトを数秒で生成します。
- [insidieux/inizio](https://github.com/insidieux/inizio) - プラグインを備えた Golang のプロジェクト構成ジェネレーター。
- [kickstart.go](https://github.com/raeperd/kickstart.go) - サードパーティの依存関係がない、ミニマルな単一ファイルの Go HTTP サーバーテンプレート。
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - モダンなプラクティスを適用した Go アプリケーションのボイラープレートと例。
- [nunu](https://github.com/go-nunu/nunu) - Nunu は Go アプリケーションを構築するためのスキャフォールディングツールです。
- [pagoda](https://github.com/mikestefanello/pagoda) - Go で構築された、迅速かつ簡単なフルスタック Web 開発のスターターキット。
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold は、スターター用の Go プロジェクト構成を生成します。ビジネスロジックの実装に集中できます。
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Go のプロジェクト構成をどのように組み立てるかについてのプラクティスと議論の集まり。

**[⬆ トップに戻る](#contents)**

### 文字列

_文字列を扱うためのライブラリ。_

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - 任意の文字列を生成するためのブレース展開の仕組みの Go 実装。
- [caps](https://github.com/chanced/caps) - 大文字・小文字などのケース変換ライブラリ。
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - 波かっこ `{}` で囲まれた**置換フィールド**によるフォーマット文字列を実装しています。
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - 文字列をキャメルケース、スネークケース、ケバブケースに変換したり、スラッグ化したりするための文字列操作ライブラリ。
- [str](https://github.com/schigh/str) - 変換を組み合わせるための、パイプライン優先の文字列ツールキット。
- [strcase](https://github.com/charlievieth/strcase) - 標準ライブラリの strings/bytes パッケージの、大文字と小文字を区別しない実装。
- [stringFormatter](https://github.com/Wissance/stringFormatter) - 追加のテキスト書式設定機能を備えた、Python や C# のような文字列フォーマット。
- [strutil](https://github.com/ozgio/strutil) - 文字列ユーティリティ。
- [sttr](https://github.com/abhimanyu003/sttr) - 文字列に対してさまざまな操作を行う、クロスプラットフォームの CLI アプリ。
- [xstrings](https://github.com/huandu/xstrings) - 他の言語から移植された便利な文字列関数のコレクション。

**[⬆ トップに戻る](#contents)**

### 未分類

_これらのライブラリは、他のどのカテゴリーにも当てはまらないと思われたため、ここに置かれています。_

- [anagent](https://github.com/mudler/anagent) - 依存性注入を備えた、ミニマルでプラガブルな Golang のイベントループ/タイマーハンドラー。
- [antch](https://github.com/antchfx/antch) - 高速で強力かつ拡張可能な Web クローリング＆スクレイピングフレームワーク。
- [archives](https://github.com/mholt/archives) - 統一された API で、また io/fs 互換の仮想ファイルシステムとして、アーカイブや圧縮形式を扱うためのクロスプラットフォームかつマルチフォーマットの Go ライブラリ。
- [autoflags](https://github.com/artyom/autoflags) - 構造体のフィールドからコマンドラインフラグを自動的に定義する Go パッケージ。
- [avgRating](https://github.com/kirillDanshin/avgRating) - Wilson スコアの式に基づいて平均スコアと評価を計算します。
- [banner](https://github.com/dimiro1/banner) - Go アプリケーションに美しいバナーを追加します。
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch は、数字、数値、アルファベット、算術、音声、数字とアルファベットの組み合わせの CAPTCHA をサポートしています。
- [basexx](https://github.com/bobg/basexx) - さまざまな基数の数字文字列への変換、数字文字列からの変換、および相互変換を行います。
- [battery](https://github.com/distatus/battery) - クロスプラットフォームで正規化されたバッテリー情報ライブラリ。
- [bitio](https://github.com/icza/bitio) - Go 向けの高度に最適化されたビット単位の Reader と Writer。
- [browscap_go](https://github.com/digitalcrab/browscap_go) - [Browser Capabilities Project](https://browscap.org/) 用の GoLang ライブラリ。
- [captcha](https://github.com/steambap/captcha) - captcha パッケージは、CAPTCHA 生成のための、使いやすく特定の方針を押し付けない API を提供します。
- [common](https://github.com/kubeservice-stack/common) - サーバーフレームワークのためのライブラリ。
- [conv](https://github.com/cstockton/go-conv) - conv パッケージは、Go の型間の高速で直感的な変換を提供します。
- [datacounter](https://github.com/miolini/datacounter) - reader/writer/http.ResponseWriter 用の Go カウンター。
- [fake-useragent](https://github.com/lib4u/fake-useragent) - 実世界のデータベースを使った、常に最新のシンプルな Golang 製ユーザーエージェント偽装ツール
- [faker](https://github.com/pioz/faker) - Go 向けのランダムな偽データおよび構造体のジェネレーター。
- [ffmt](https://github.com/go-ffmt/ffmt) - 人間のためにデータの表示を美しく整えます。
- [gatus](https://github.com/TwinProduction/gatus) - 自動化されたサービスヘルスダッシュボード。
- [go-commandbus](https://github.com/lana/go-commandbus) - Go 向けの軽量でプラガブルなコマンドバス。
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Golang 向けの汎用オブジェクトプール。
- [go-openapi](https://github.com/go-openapi) - OpenAPI スキーマを解析・活用するためのパッケージのコレクション。
- [go-resiliency](https://github.com/eapache/go-resiliency) - Golang 向けのレジリエンスパターン。
- [go-unarr](https://github.com/gen2brain/go-unarr) - RAR、TAR、ZIP、7z アーカイブ用の展開ライブラリ。
- [gofakeit](https://github.com/brianvoe/gofakeit) - Go で書かれたランダムデータジェネレーター。
- [goffi](https://github.com/go-webgpu/goffi) - CGO なしで C ライブラリを呼び出すための、libffi スタイルの型付き呼び出しインターフェースと構造化されたエラー処理を備えた Pure Go の FFI。
- [gommit](https://github.com/antham/gommit) - Git のコミットメッセージを解析し、定義されたパターンに従っていることを確認します。
- [gopsutil](https://github.com/shirou/gopsutil) - プロセスとシステムの使用状況（CPU、メモリ、ディスクなど）を取得するためのクロスプラットフォームライブラリ。
- [gosh](https://github.com/osamingo/gosh) - Go の統計ハンドラー、構造体、計測メソッドを提供します。
- [gosms](https://github.com/haxpax/gosms) - SMS の送信に使える、Go で作るあなた専用のローカル SMS ゲートウェイ。
- [gotoprom](https://github.com/cabify/gotoprom) - 公式 Prometheus クライアント用の、型安全なメトリクスビルダーのラッパーライブラリ。
- [gountries](https://github.com/pariz/gountries) - 国と地域区分のデータを公開するパッケージ。
- [gtree](https://github.com/ddddddO/gtree) - Markdown から、またはプログラムによってツリーの出力やディレクトリの作成を行うための CLI、パッケージ、Web を提供します。
- [health](https://github.com/alexliesenfeld/health) - Go 向けのシンプルで柔軟なヘルスチェックライブラリ。
- [health](https://github.com/dimiro1/health) - 使いやすく拡張可能なヘルスチェックライブラリ。
- [healthcheck](https://github.com/etherlabsio/healthcheck) - RESTful サービス向けの、設計思想が明確で並行処理に対応したヘルスチェック HTTP ハンドラー。
- [hostutils](https://github.com/Wing924/hostutils) - FQDN のリストをパック/アンパックするための Golang ライブラリ。
- [indigo](https://github.com/osamingo/indigo) - Sonyflake を使用し、Base58 でエンコードする分散型の一意な ID ジェネレーター。
- [lk](https://github.com/hyperboloide/lk) - Golang 向けのシンプルなライセンス管理ライブラリ。
- [llvm](https://github.com/llir/llvm) - Pure Go で LLVM IR を扱うためのライブラリ。
- [metrics](https://github.com/pascaldekloe/metrics) - メトリクスの計測と Prometheus 形式での公開のためのライブラリ。
- [morse](https://github.com/alwindoss/morse) - モールス信号との相互変換を行うライブラリ。
- [numa](https://github.com/lrita/numa) - NUMA は Go で書かれたユーティリティライブラリです。NUMA を意識したコードを書くのに役立ちます。
- [pdfgen](https://github.com/hyperboloide/pdfgen) - JSON リクエストから PDF を生成する HTTP サービス。
- [persian](https://github.com/mavihq/persian) - Go でペルシャ語を扱うためのユーティリティ集。
- [purego](https://github.com/ebitengine/purego) - Cgo を使わずに Go から C の関数を呼び出すためのライブラリ。
- [sandid](https://github.com/aofei/sandid) - 地球上のすべての砂粒に、それぞれ固有の ID を。
- [shellwords](https://github.com/Wing924/shellwords) - UNIX の Bourne シェルの単語解析ルールに従って文字列を操作するための Golang ライブラリ。
- [shortid](https://github.com/teris-io/shortid) - 非常に短く、一意で、連番ではない、URL フレンドリーな ID を分散生成します。
- [shoutrrr](https://github.com/containrrr/shoutrrr) - slack、mattermost、gotify、smtp などのさまざまなメッセージングサービスに簡単にアクセスできる通知ライブラリ。
- [sitemap-format](https://github.com/mingard/sitemap-format) - ちょっとしたシンタックスシュガーを備えた、シンプルなサイトマップジェネレーター。
- [stateless](https://github.com/qmuntal/stateless) - ステートマシンを作成するための、流れるような API のライブラリ。
- [stats](https://github.com/go-playground/stats) - Go の MemStats と、メモリ、スワップ、CPU などのシステム統計を監視し、ロギングなどのために UDP で好きな場所へ送信します…
- [turtle](https://github.com/hackebrot/turtle) - Go のための絵文字。
- [url-shortener](https://github.com/pantrif/url-shortener) - MySQL をサポートする、モダンで強力かつ堅牢な URL 短縮マイクロサービス。
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - HTTP の入出力処理のボイラープレートを生成します。
- [varint](https://github.com/chmike/varint) - 標準ライブラリが提供するものより高速な、可変長整数のエンコーダー/デコーダー。
- [xdg](https://github.com/rkoesters/xdg) - Go で実装された FreeDesktop.org（xdg）の仕様。
- [xkg](https://github.com/go-xkg/xkg) - X キーボードグラバー。
- [xz](https://github.com/ulikunitz/xz) - xz 圧縮ファイルを読み書きするための Pure Golang パッケージ。
**[⬆ トップに戻る](#contents)**

## 自然言語処理

_人間の言語を扱うためのライブラリ。_

[テキスト処理](#text-processing)と[テキスト解析](#text-analysis)も参照してください。

### 言語検出

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - 言語検出 API の Go クライアント。バッチリクエストや、短いフレーズまたは単語 1 つの言語検出をサポートしています。
- [getlang](https://github.com/rylans/getlang) - 高速な自然言語検出パッケージ。
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Unicode テキストの自然言語を判定するための関数群。
- [lingua-go](https://github.com/pemistahl/lingua-go) - 長いテキストにも短いテキストにも適した、正確な自然言語検出ライブラリ。複数の言語が混在するテキストでの多言語検出もサポートしています。
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Go 向けの自然言語検出パッケージ。84 の言語と 24 の文字体系（ラテン文字、キリル文字など）をサポートしています。

### 形態素解析器

- [go-propisyu](https://github.com/rekurt/go-propisyu) - 正しい文法上の性と名詞の格変化で、数値をロシア語の単語に変換します。
- [go-stem](https://github.com/agonopol/go-stem) - Porter ステミングアルゴリズムの実装。
- [go2vec](https://github.com/danieldk/go2vec) - word2vec 埋め込みのためのリーダーとユーティリティ関数。
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - porter 2 を含む snowball の libstemmer ライブラリの Go バインディング。
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - sentiwordnet の辞書を使った Go の感情分析器。
- [govader](https://github.com/jonreiter/govader) - [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment) の Go 実装。
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - [GoVader](https://github.com/jonreiter/govader) のマイクロサービス実装。
- [kagome](https://github.com/ikawaha/kagome) - Pure Go で書かれた日本語形態素解析器。
- [libtextcat](https://github.com/goodsign/libtextcat) - libtextcat C ライブラリの Cgo バインディング。バージョン 2.2 との互換性が保証されています。
- [nlp](https://github.com/james-bowman/nlp) - LSA（潜在意味解析）をサポートする Go の自然言語処理ライブラリ。
- [paicehusk](https://github.com/rookii/paicehusk) - Paice/Husk ステミングアルゴリズムの Golang 実装。
- [porter](https://github.com/a2800276/porter) - Martin Porter による Porter ステミングアルゴリズムの C 実装を、かなり忠実に移植したものです。
- [porter2](https://github.com/zhenjl/porter2) - 非常に高速な Porter 2 ステマー。
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Rapid Automatic Keyword Extraction（RAKE）アルゴリズムの Go 移植版。
- [snowball](https://github.com/goodsign/snowball) - Go 向けの Snowball ステマーの移植版（cgo ラッパー）。[Snowball ネイティブ](http://snowball.tartarus.org/)の語幹抽出機能を提供します。
- [spaGO](https://github.com/nlpodyssey/spago) - Go による、自己完結型の機械学習と自然言語処理のライブラリ。
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - スペイン語用のスペル修正ツール。独自のものを作成することもできます。

### スラッグ化

- [go-slugify](https://github.com/mozillazg/go-slugify) - 複数の言語をサポートし、きれいなスラッグを作成します。
- [slug](https://github.com/gosimple/slug) - 複数の言語をサポートする、URL フレンドリーなスラッグ化。
- [Slugify](https://github.com/avelino/slugify) - 文字列を扱う Go のスラッグ化アプリケーション。

### トークナイザー

- [gojieba](https://github.com/yanyiwu/gojieba) - 中国語の単語分割アルゴリズムである [jieba](https://github.com/fxsjy/jieba) の Go 実装です。
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - 辞書と Bigram 言語モデルに基づく Golang 向けのトークナイザー（現在は中国語の分かち書きのみをサポート）
- [gse](https://github.com/go-ego/gse) - Go による効率的なテキスト分割。英語、中国語、日本語などをサポートしています。
- [MMSEGO](https://github.com/awsong/MMSEGO) - 中国語の単語分割アルゴリズムである [MMSEG](http://technology.chtsai.org/mmseg/) の GO 実装です。
- [segment](https://github.com/blevesearch/segment) - [Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/) で説明されている Unicode テキストのセグメンテーションを行うための Go ライブラリ
- [sentences](https://github.com/neurosnap/sentences) - 文のトークナイザー：テキストを文のリストに変換します。
- [shamoji](https://github.com/osamingo/shamoji) - shamoji は、Go で書かれた単語フィルタリングパッケージです。
- [stemmer](https://github.com/dchest/stemmer) - Go プログラミング言語向けのステマーパッケージ。英語とドイツ語のステマーを含みます。
- [textcat](https://github.com/pebbe/textcat) - UTF-8 と生のテキストをサポートする、n-gram ベースのテキスト分類のための Go パッケージ。

### 翻訳

- [ctxi18n](https://github.com/invopop/ctxi18n/) - 短く簡潔な API、複数形の処理、補間、`fs.FS` のサポートを備えた、コンテキストを考慮した i18n。YAML のロケール定義は [Rails i18n](https://guides.rubyonrails.org/i18n.html) に基づいています。
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - ローカライズされたテキストを扱うためのパッケージと付属ツール。
- [go-mystem](https://github.com/dveselov/mystem) - ロシア語の形態素解析器 Yandex.Mystem の CGo バインディング。
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - 中国語の漢字を漢語ピンインに変換するツール。
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Golang プロジェクトのための単語テーブルとテキストリソースのライブラリ。
- [gotext](https://github.com/leonelquinteros/gotext) - Go 向けの GNU gettext ユーティリティ。
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - キリル文字 → ラテン文字の翻字を、考えられるあらゆる方法で行います。
- [spreak](https://github.com/vorlif/spreak) - gettext の背後にある概念に基づく、Go 向けの柔軟な翻訳・ヒューマナイズライブラリ。
- [t](https://github.com/youthlin/t) - GNU gettext スタイルに従い、.po/.mo ファイルをサポートする、Golang 向けのもう一つの i18n パッケージ：`t.T (gettext)`、`t.N (ngettext)` など。text/html テンプレートからメッセージを pot ファイルとして抽出できるコマンドツール [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate) も含まれています。

### 翻字

- [enca](https://github.com/endeveit/enca) - 文字エンコーディングを検出する [libenca](https://cihar.com/software/enca/) の最小限の cgo バインディング。
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - Unicode テキストの ASCII への翻字。
- [gounidecode](https://github.com/fiam/gounidecode) - Go 向けの Unicode 翻字ツール（unidecode とも呼ばれます）。
- [transliterator](https://github.com/alexsergivan/transliterator) - 言語固有の翻字ルールをサポートし、一方向の文字列翻字を提供します。

**[⬆ トップに戻る](#contents)**

## ネットワーク

_ネットワークのさまざまな層を扱うためのライブラリ。_

- [arp](https://github.com/mdlayher/arp) - arp パッケージは、RFC 826 で説明されている ARP プロトコルを実装しています。
- [bart](https://github.com/gaissmai/bart) - bart パッケージは、IP から CIDR への非常に高速なルックアップなどのための Balanced-Routing-Table（BART）を提供します。
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - TCP 上での Protocol Buffers データのストリーミングを簡単に。
- [canopus](https://github.com/zubairhamed/canopus) - CoAP クライアント/サーバーの実装（RFC 7252）。
- [cdns](https://github.com/junevm/cdns) - ターミナルから DNS サーバーを手軽に変更します。
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - 自動起動、IP ベースのアクセス制御、OS レベルのネットワークスタックのチューニングを備えた、設定不要の TCP/UDP ポートプロキシ。
- [cidranger](https://github.com/yl2chen/cidranger) - Go 向けの、IP から CIDR への高速なルックアップ。
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare Tunnel クライアント（旧 Argo Tunnel）。
- [corsproxy](https://github.com/melihbirim/corsproxy) - SSRF 対策、ホストの許可/ブロックリスト、オプションの API キー認証を備えた CORS プロキシサーバー。
- [dhcp6](https://github.com/mdlayher/dhcp6) - dhcp6 パッケージは、RFC 3315 で説明されている DHCPv6 サーバーを実装しています。
- [dns](https://github.com/miekg/dns) - DNS を扱うための Go ライブラリ。
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - パッシブ DNS のキャプチャ/監視フレームワーク。
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - Kubernetes の Pod が終了したときに、確立済みの TCP および UDP 接続に実際に何が起きるかを測定します。
- [easytcp](https://github.com/DarthPestilane/easytcp) - メッセージルーターを備えた、Go（Golang）で書かれた軽量な TCP フレームワーク。EasyTCP を使えば、TCP サーバーを簡単かつ素早く、苦労せずに構築できます。
- [ether](https://github.com/songgao/ether) - イーサネットフレームを送受信するためのクロスプラットフォームの Go パッケージ。
- [ethernet](https://github.com/mdlayher/ethernet) - ethernet パッケージは、IEEE 802.3 Ethernet II フレームと IEEE 802.1Q VLAN タグのマーシャリングとアンマーシャリングを実装しています。
- [event](https://github.com/cheng-zhongliang/event) - Golang で書かれたシンプルな I/O イベント通知ライブラリ。
- [expose](https://github.com/kernelshard/expose) - ローカルサーバーをインターネットに公開するための、軽量でオープンソースの安全なトンネリングツール。
- [fasthttp](https://github.com/valyala/fasthttp) - fasthttp パッケージは、net/http より最大 10 倍高速な Go 向けの高速 HTTP 実装です。
- [fibersse](https://github.com/vinod-morya/fibersse) - イベントの統合、優先レーン、トピックのワイルドカード、適応型スロットリング、組み込みの認証を備えた、Fiber v3 向けの本番環境グレードの Server-Sent Events（SSE）。
- [fortio](https://github.com/fortio/fortio) - 負荷テストのライブラリとコマンドラインツール、高度なエコーサーバーと Web UI。一定の QPS（秒間クエリ数）の負荷を指定し、レイテンシのヒストグラムやその他の有用な統計を記録してグラフ化できます。TCP、HTTP、gRPC に対応しています。
- [ftp](https://github.com/jlaffaye/ftp) - ftp パッケージは、[RFC 959](https://tools.ietf.org/html/rfc959) で説明されている FTP クライアントを実装しています。
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - フル機能の FTP サーバーライブラリ。
- [fullproxy](https://github.com/shoriwe/fullproxy) - SOCKS5、HTTP、生のポート、リバースプロキシの各プロトコルに対応した、スクリプト可能でデーモンとして設定可能なフル機能のプロキシ兼ピボッティングツールキット。
- [fwdctl](https://github.com/alegrey91/fwdctl) - Linux サーバーの IPTables のフォワーディングを管理するための、シンプルで直感的な CLI。
- [gaio](https://github.com/xtaci/gaio) - プロアクターモードによる、Golang 向けの高性能な非同期 I/O ネットワーキング。
- [gev](https://github.com/Allenxuxu/gev) - gev は、リアクターモードに基づく軽量で高速なノンブロッキング TCP ネットワークライブラリです。
- [gldap](https://github.com/jimlambrt/gldap) - gldap は LDAP サーバーの実装を提供し、利用者はその LDAP 操作用のハンドラーを提供します。
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt は、MQTT プロトコル V3.1.1 を完全に実装した、柔軟で高性能な MQTT ブローカーライブラリです。
- [gnet](https://github.com/panjf2000/gnet) - `gnet` は、Pure Go で書かれた高性能・軽量でノンブロッキングなイベント駆動型ネットワーキングフレームワークです。
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` は、特にゲームサーバー向けの高性能なネットワーキングフレームワークです。
- [gNxI](https://github.com/google/gnxi) - gNMI および gNOI プロトコルを使用するネットワーク管理ツールのコレクション。
- [go-getter](https://github.com/hashicorp/go-getter) - URL を使ってさまざまなソースからファイルやディレクトリをダウンロードするための Go ライブラリ。
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - http.Get/Post の置き換えや http.Client の RoundTripper へのドロップインを通じて、フォールトトレランス、負荷分散、自動リトライ、Cookie 管理などを提供するプロキシプール経由で HTTP リクエストを送信するためのライブラリ
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - HTTPS の SNI 抽出機能を備えた軽量なライブパケットキャプチャライブラリ。
- [go-powerdns](https://github.com/joeig/go-powerdns) - Golang 向けの PowerDNS API バインディング。
- [go-sse](https://github.com/lampctl/go-sse) - HTML の Server-Sent Events の Go クライアントおよびサーバー実装。
- [go-stun](https://github.com/ccding/go-stun) - STUN クライアント（RFC 3489 および RFC 5389）の Go 実装。
- [gobgp](https://github.com/osrg/gobgp) - Go プログラミング言語で実装された BGP。
- [gopacket](https://github.com/google/gopacket) - libpcap バインディングを備えた、パケット処理のための Go ライブラリ。
- [gopcap](https://github.com/akrennmair/gopcap) - libpcap の Go ラッパー。
- [GoProxy](https://github.com/elazarl/goproxy) - Go を使ってカスタマイズされた HTTP/HTTPS プロキシサーバーを作成するためのライブラリ。
- [goshark](https://github.com/sunwxg/goshark) - goshark パッケージは、tshark を使って IP パケットをデコードし、パケットを解析するためのデータ構造を作成します。
- [gosnmp](https://github.com/soniah/gosnmp) - SNMP の操作を行うためのネイティブ Go ライブラリ。
- [gotcp](https://github.com/gansidui/gotcp) - TCP アプリケーションを素早く書くための Go パッケージ。
- [grab](https://github.com/cavaliercoder/grab) - ファイルのダウンロードを管理するための Go パッケージ。
- [graval](https://github.com/koofr/graval) - 実験的な FTP サーバーフレームワーク。
- [gws](https://github.com/lxzan/gws) - 非同期 I/O をサポートする高性能な WebSocket サーバー＆クライアント。
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs を使うと、HTTP リクエストを調べたり、レスポンスを偽造したりできます。
- [httpproxy](https://github.com/wzshiming/httpproxy) - HTTP プロキシのハンドラーとダイヤラー。
- [iplib](https://github.com/c-robinson/iplib) - Python の [ipaddress](https://docs.python.org/3/library/ipaddress.html) と Ruby の [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html) にインスパイアされた、IP アドレス（net.IP、net.IPNet）を扱うためのライブラリ
- [jazigo](https://github.com/udhos/jazigo) - Jazigo は、複数のネットワークデバイスの設定を取得するための、Go で書かれたツールです。
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP - 高速で信頼性の高い ARQ プロトコル。
- [lhttp](https://github.com/fanux/lhttp) - 強力な WebSocket フレームワーク。IM サーバーをより簡単に構築できます。
- [linkio](https://github.com/ian-kent/linkio) - Reader/Writer インターフェース向けのネットワークリンク速度のシミュレーション。
- [llb](https://github.com/kirillDanshin/llb) - プロキシサーバー向けの、非常にシンプルながら高速なバックエンド。メモリアロケーションなしの高速なレスポンスで、定義済みのドメインへ素早くリダイレクトするのに役立ちます。
- [macwifi](https://github.com/jaisonerick/macwifi) - macOS 13 以降向けの Wi-Fi スキャンとキーチェーンからのパスワード取得。
- [mdns](https://github.com/hashicorp/mdns) - Golang によるシンプルな mDNS（マルチキャスト DNS）クライアント/サーバーライブラリ。
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Paho Go Client は、TCP、TLS、WebSocket 経由で MQTT ブローカーに接続するための MQTT クライアントライブラリを提供します。
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - 組み込みシステムに適した、非常にシンプルでアロケーションを行わない MQTT の低レベル実装。
- [nbio](https://github.com/lesismal/nbio) - 100 万以上の接続に対応する Pure Go のソリューション。TLS/HTTP1.x/WebSocket をサポートし、基本的に net/http と互換性があります。高性能かつ低メモリコストで、ノンブロッキング、イベント駆動型、使いやすさを特徴としています。
- [net](https://golang.org/x/net) - このリポジトリには、Go の補助的なネットワーキングライブラリが含まれています。
- [netchan](https://github.com/matveynator/netchan) - Golang 向けのネットワークチャネル（netchan）：安全でクラスターに対応し、ネストされたチャネルと任意のデータ型をサポートします。Rob Pike にインスパイアされています。
- [nethawk](https://github.com/Flowtriq/nethawk) - JSON 出力モードを備えた、リアルタイムのネットワークトラフィックのキャプチャ、解析、攻撃検出のためのターミナル UI。
- [netpoll](https://github.com/cloudwego/netpoll) - ByteDance が開発した、RPC シナリオに重点を置いた高性能なノンブロッキング I/O ネットワーキングフレームワーク。
- [NFF-Go](https://github.com/intel-go/nff-go) - クラウドとベアメタル向けの高性能なネットワーク機能を迅速に開発するためのフレームワーク（旧 YANFF）。
- [nodepass](https://github.com/NodePassProject/nodepass) - 事前に確立した TCP/QUIC/WebSocket または HTTP/2 接続を使い、ネットワーク制限を越えて高速で信頼性の高いアクセスを提供する、安全で効率的な TCP/UDP トンネリングソリューション。
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - UDP マルチキャストを使った、クロスプラットフォームのローカルピア検出のための Pure Go ライブラリ。
- [portproxy](https://github.com/aybabtme/portproxy) - CORS をサポートしていない API に CORS サポートを追加する、シンプルな TCP プロキシ。
- [proxq](https://github.com/psyb0t/docker-proxq) - 各リクエストを Redis にキューイングし、レスポンスをポーリングするためのジョブ ID を返す非同期リバースプロキシ。パスプレフィックスによるルーティング、リトライ、キャッシュを備えています。
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - PostgreSQL サーバーのワイヤープロトコル。独自のサーバーを構築して、接続の処理を始めましょう。
- [publicip](https://github.com/polera/publicip) - publicip パッケージは、外部に公開されている IPv4 アドレス（インターネットへの出口）を返します。
- [quic-go](https://github.com/lucas-clemente/quic-go) - Pure Go による QUIC プロトコルの実装。
- [roamr](https://github.com/sourabh-khot65/roamr) - 近くにある保存済みの WiFi ネットワークをスコアリングし、どれを使うべきか、そしてその理由を教えてくれる CLI。
- [sdns](https://github.com/semihalev/sdns) - プライバシーの保護に重点を置いた、DNSSEC をサポートする高性能な再帰 DNS リゾルバーサーバー。
- [sftp](https://github.com/pkg/sftp) - sftp パッケージは、<https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt> で説明されている SSH File Transfer Protocol を実装しています。
- [ssh](https://github.com/gliderlabs/ssh) - SSH サーバーを構築するための高レベル API（crypto/ssh をラップ）。
- [sslb](https://github.com/eduardonunesp/sslb) - 超シンプルなロードバランサー（Super Simples Load Balancer）。ある程度のパフォーマンスを実現するための小さなプロジェクトです。
- [stun](https://github.com/go-rtc/stun) - RFC 5389 STUN プロトコルの Go 実装。
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack は、Go プログラムでバイトストリームをパック/アンパックするための、TCP に基づくアプリケーションプロトコルです。
- [tspool](https://github.com/two/tspool) - ワーカープールを使ってパフォーマンスを向上させ、サーバーを保護する TCP ライブラリ。
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - [gVisor](https://gvisor.dev/) の TCP/IP スタックを利用した、tun2socks の Pure Go 実装。
- [utp](https://github.com/anacrolix/utp) - Go による uTP（マイクロトランスポートプロトコル）の実装。
- [vssh](https://github.com/yahoo/vssh) - SSH プロトコル上でネットワークとサーバーの自動化を構築するための Go ライブラリ。
- [water](https://github.com/songgao/water) - シンプルな TUN/TAP ライブラリ。
- [webrtc](https://github.com/pions/webrtc) - WebRTC API の Pure Go 実装。
- [winrm](https://github.com/masterzen/winrm) - Windows マシン上でリモートからコマンドを実行するための Go 製 WinRM クライアント。
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - 自動再接続、指数バックオフ、ハートビート管理を備えた、レジリエントな WebSocket クライアント。
- [xtcp](https://github.com/xfxdev/xtcp) - 同時全二重通信、グレースフルシャットダウン、カスタムプロトコルを備えた TCP サーバーフレームワーク。

**[⬆ トップに戻る](#contents)**

### HTTP クライアント

_HTTP リクエストを送信するためのライブラリ。_

- [axios4go](https://github.com/rezmoss/axios4go) - Axios にインスパイアされた Go の HTTP クライアントライブラリ。HTTP リクエストを送信するためのシンプルで直感的な API を提供します。
- [azuretls-client](https://github.com/Noooste/azuretls-client) - TLS/JA3 と HTTP2 のフィンガープリントを偽装できる、100% Go 製の使いやすい HTTP クライアント。
- [fast-shot](https://github.com/opus-domini/fast-shot) - Go で最速かつシンプルな HTTP クライアントを使って、速射のような精度で API のターゲットを狙い撃ちします。
- [gentleman](https://github.com/h2non/gentleman) - フル機能でプラグイン駆動型の HTTP クライアントライブラリ。
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - 他のクライアントと状態を一切共有しない、標準ライブラリの HTTP クライアントを簡単に取得できます。
- [go-http-client](https://github.com/bozd4g/go-http-client) - HTTP 呼び出しをシンプルかつ簡単に行います。
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - 複数の送信元 IP に基づいて HTTP リクエストを多重化するためのライブラリ。
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - HTTP リクエストの OpenTelemetry メトリクスを出力する Go の http.RoundTripper。
- [go-req](https://github.com/wenerme/go-req) - 宣言的な Golang の HTTP クライアント。
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - Go によるリトライ可能な HTTP クライアント。
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Web の Fetch API にインスパイアされた、強力で軽量、簡単な HTTP クライアント。
- [Grequest](https://github.com/lib4u/grequest)  - HTTP リクエストのためのシンプルで軽量な Golang パッケージ。強力な net/http をベースにしています
- [grequests](https://github.com/levigross/grequests) - 偉大で有名な Requests ライブラリの Go による「クローン」。
- [hedge](https://github.com/bhope/hedge) - Go 向けの適応型ヘッジリクエスト。Google の論文「The Tail at Scale」に基づき、設定不要で p99 レイテンシを削減します。
- [heimdall](https://github.com/gojektech/heimdall) - リトライと hystrix の機能を備えた強化版 HTTP クライアント。
- [httpretry](https://github.com/ybbus/httpretry) - Go のデフォルトの HTTP クライアントにリトライ機能を追加します。
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - バイト単位で正確なブラウザーの TLS（JA3/JA4）と HTTP/2（Akamai）のフィンガープリントを持つ、net/http.Client のドロップイン置き換え。
- [pester](https://github.com/sethgrid/pester) - リトライ、バックオフ、並行処理を備えた Go の HTTP クライアント呼び出し。
- [req](https://github.com/imroc/req) - 黒魔術を備えたシンプルな Go の HTTP クライアント（より少ないコードで、より高い効率を）。
- [request](https://github.com/monaco-io/request) - Golang 向けの HTTP クライアント。axios や requests を使ったことがあれば、きっと気に入るでしょう。サードパーティへの依存はありません。
- [requests](https://github.com/carlmjohnson/requests) - Gopher のための HTTP リクエスト。context.Context を使用し、基盤となる net/http.Client を隠さないため、標準の Go API と互換性があります。テストツールも含まれています。
- [resty](https://github.com/go-resty/resty) - Ruby の rest-client にインスパイアされた、Go 向けのシンプルな HTTP および REST クライアント。
- [rq](https://github.com/ddo/rq) - Golang 標準ライブラリの HTTP クライアントのための、より使いやすいインターフェース。
- [sling](https://github.com/dghubble/sling) - Sling は、API リクエストを作成・送信するための Go の HTTP クライアントライブラリです。
- [surf](https://github.com/enetx/surf) - HTTP/1.1、HTTP/2、HTTP/3（QUIC）、SOCKS5 プロキシのサポートと、ブラウザー並みの TLS フィンガープリンティングを備えた高度な HTTP クライアント。
- [tls-client](https://github.com/bogdanfinn/tls-client) - リクエストに使用するクライアントの TLS フィンガープリントを選択できるオプションを備えた、net/http.Client ライクな HTTP クライアント。

**[⬆ トップに戻る](#contents)**

## OpenGL

_Go で OpenGL を使用するためのライブラリ。_

- [gl](https://github.com/go-gl/gl) - OpenGL の Go バインディング（glow によって生成）。
- [glfw](https://github.com/go-gl/glfw) - GLFW 3 の Go バインディング。
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - [glMatrix](https://glmatrix.net/) ライブラリの Go 移植版。
- [goxjs/gl](https://github.com/goxjs/gl) - Go のクロスプラットフォーム OpenGL バインディング（OS X、Linux、Windows、ブラウザー、iOS、Android）。
- [goxjs/glfw](https://github.com/goxjs/glfw) - OpenGL コンテキストの作成とイベントの受信のための、Go のクロスプラットフォーム glfw ライブラリ。
- [mathgl](https://github.com/go-gl/mathgl) - GLM にインスパイアされた、3D 数学に特化した Pure Go の数学パッケージ。

**[⬆ トップに戻る](#contents)**

## ORM

_オブジェクトリレーショナルマッピングやデータマッピングの手法を実装したライブラリ。_

- [bob](https://github.com/stephenafamo/bob) - Go 向けの SQL クエリビルダー兼 ORM/ファクトリージェネレーター。SQLBoiler の後継です。
- [bun](https://github.com/uptrace/bun) - SQL ファーストの Golang ORM。go-pg の後継です。
- [cacheme](https://github.com/Yiling-J/cacheme-go) - Go 向けの、スキーマベースで型付きの Redis キャッシュ/メモ化フレームワーク。
- [CQL](https://github.com/FrancoLiberali/cql) - GORM 上に構築され、自動生成されたコードに基づくコンパイル時に検証されるクエリを追加します。
- [ent](https://github.com/facebook/ent) - Go 向けのエンティティフレームワーク。データのモデリングとクエリのための、シンプルでありながら強力な ORM です。
- [go-dbw](https://github.com/hashicorp/go-dbw) - データベース操作をカプセル化するシンプルなパッケージ。
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - Google/Firebase Cloud Firestore 用のシンプルな ORM。
- [go-sql](https://github.com/rushteam/gosql) - MySQL 用の簡単な ORM。
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - 柔軟で強力な SQL 文字列ビルダーライブラリと、設定不要の ORM。
- [go-store](https://github.com/gosuri/go-store) - Go 向けの、Redis をバックエンドとするシンプルで高速なキーバリューストアライブラリ。
- [golobby/orm](https://github.com/golobby/orm) - 開発者の幸せのための、シンプルで高速、型安全なジェネリック ORM。
- [GoooQo](https://github.com/doytowin/goooqo) - 宣言的なクエリモデルに基づくデータベースアクセスフレームワーク。
- [GORM](https://github.com/go-gorm/gorm) - 開発者に優しいことを目指した、Golang 向けの素晴らしい ORM ライブラリ。
- [gormt](https://github.com/xxjwxc/gormt) - MySQL データベースから Golang の gorm 構造体を生成します。
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence。Go 向けの ORM 風ライブラリです。
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire は、Golang 向けのデータベースアクセスレイヤーとバリデーションです（対応：MySQL、PostgreSQL、SQLite3）。
- [lore](https://github.com/abrahambotros/lore) - Go 向けのシンプルで軽量な疑似 ORM/疑似構造体マッピング環境。
- [marlow](https://github.com/marlow/marlow) - コンパイル時の安全性を保証するため、プロジェクトの構造体から生成される ORM。
- [pop/soda](https://github.com/gobuffalo/pop) - MySQL、PostgreSQL、SQLite 向けのデータベースのマイグレーション、作成、ORM など。
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go。Go のための型安全なデータベースアクセスです。
- [reform](https://github.com/go-reform/reform) - 空でないインターフェースとコード生成に基づく、Go 向けのより良い ORM。
- [rel](https://github.com/go-rel/rel) - Golang 向けのモダンなデータベースアクセスレイヤー。テスト可能で拡張可能、クリーンでエレガントな API として作り込まれています。
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - ORM ジェネレーター。データベーススキーマに合わせた、多機能で非常に高速な ORM を生成します。
- [upper.io/db](https://github.com/upper/db) - 成熟したデータベースドライバーをラップするアダプターを使い、さまざまなデータソースとやり取りするための単一のインターフェース。
- [XORM](https://gitea.com/xorm/xorm) - Go 向けのシンプルで強力な ORM（対応：MySQL、MyMysql、PostgreSQL、Tidb、SQLite3、MsSql、Oracle）。
- [Zoom](https://github.com/albrow/zoom) - Redis 上に構築された、非常に高速なデータストア兼クエリエンジン。

**[⬆ トップに戻る](#contents)**

## パッケージ管理

_依存関係とパッケージ管理のための公式ツール_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - モジュールは、ソースコードの交換とバージョン管理の単位です。go コマンドは、他のモジュールへの依存関係の記録や解決を含め、モジュールの操作を直接サポートしています。

_パッケージと依存関係の管理のための非公式ライブラリ。_

- [gup](https://github.com/nao1215/gup) - 「go install」でインストールされたバイナリを更新します。
- [modup](https://github.com/chaindead/modup) - 古いモジュールの検出と選択的なアップグレードを備えた、Go の依存関係更新のためのターミナル UI。
- [syft](https://github.com/anchore/syft) - コンテナイメージやファイルシステムからソフトウェア部品表（SBOM）を生成するための CLI ツールおよび Go ライブラリ。

**[⬆ トップに戻る](#contents)**

## パフォーマンス

- [ebpf-go](https://github.com/cilium/ebpf) - eBPF プログラムの読み込み、コンパイル、デバッグのためのユーティリティを提供します。
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - すべてのメソッドと関数にスパンを自動的に追加します。
- [go-perfstat](https://github.com/go-perfstat/go) - Go 向けの軽量なパフォーマンス統計と実行時間の集計。
- [jaeger](https://github.com/jaegertracing/jaeger) - 分散トレーシングシステム。
- [mm-go](https://github.com/joetifa2003/mm-go) - Golang 向けのジェネリックな手動メモリ管理。
- [otelinji](https://github.com/hedhyw/otelinji) - 関数にスパンを追加するための OpenTelemetry 自動インストルメンテーションツール。
- [pixie](https://github.com/pixie-labs/pixie) - eBPF による、インストルメンテーション不要の Golang アプリケーションのトレーシング。
- [profile](https://github.com/pkg/profile) - Go 向けのシンプルなプロファイリング支援パッケージ。
- [statsviz](https://github.com/arl/statsviz) - Go アプリケーションのランタイム統計をライブで可視化します。
- [tracer](https://github.com/kamilsk/tracer) - シンプルで軽量なトレーシング。

**[⬆ トップに戻る](#contents)**

## クエリ言語

- [api-fu](https://github.com/ccbrown/api-fu) - 包括的な GraphQL の実装。
- [dasel](https://github.com/tomwright/dasel) - コマンドラインからセレクターを使ってデータ構造をクエリ・更新します。jq/yq に匹敵しますが、ランタイム依存関係ゼロで JSON、YAML、TOML、XML をサポートしています。
- [gnata](https://github.com/RecoLabs/gnata) - JSONata 2.x のクエリ・変換言語の Pure Go 実装。
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - JSON データに対してクエリを実行するためのシンプルな Go パッケージ。
- [goven](https://github.com/SeldonIO/goven) - あらゆるデータベーススキーマにそのまま組み込めるクエリ言語。
- [gqlgen](https://github.com/99designs/gqlgen) - go generate ベースの GraphQL サーバーライブラリ。
- [grapher](https://github.com/reaganiwadha/grapher) - 追加のユーティリティと機能を備え、Go のジェネリクスを活用した GraphQL フィールドビルダー。
- [graphql](https://github.com/neelance/graphql-go) - 使いやすさに重点を置いた GraphQL サーバー。
- [graphql-go](https://github.com/graphql-go/graphql) - Go 向けの GraphQL 実装。
- [gws](https://github.com/Zaba505/gws) - Apollo の「GraphQL over Websocket」のクライアントおよびサーバー実装。
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - JSONPath 構文に基づいて JSON の一部を取得するためのクエリライブラリ。
- [jsonql](https://github.com/elgs/jsonql) - Golang による JSON クエリ式ライブラリ。
- [jsonslice](https://github.com/bhmj/jsonslice) - 高度なフィルターを備えた JSONPath クエリ。
- [mql](https://github.com/hashicorp/mql) - Model Query Language（mql）は、データベースモデルのためのクエリ言語です。
- [play](https://github.com/paololazzari/play) - grep、sed、awk、jq、yq などのお気に入りのプログラムを試せる TUI のプレイグラウンド。
- [rql](https://github.com/a8m/rql) - REST API のためのリソースクエリ言語。
- [rqp](https://github.com/timsolov/rest-query-parser) - REST API のためのクエリパーサー。フィルタリング、バリデーション、`AND` と `OR` の両方の演算をクエリ内で直接サポートしています。
- [straf](https://github.com/SonicRoshan/straf) - Golang の構造体を GraphQL オブジェクトに簡単に変換します。

**[⬆ トップに戻る](#contents)**

## リフレクション

- [copy](https://github.com/gotidy/copy) - 異なる型の構造体を高速にコピーするためのパッケージ。
- [Deepcopier](https://github.com/ulule/deepcopier) - Go 向けのシンプルな構造体コピー。
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - 高速なディープコピーライブラリ。
- [goenum](https://github.com/lvyahui8/goenum) - ジェネリクスとリフレクションに基づく共通の列挙型構造体。列挙型を素早く定義し、便利なデフォルトメソッド群を使用できます。
- [gotype](https://github.com/wzshiming/gotype) - reflect パッケージのように使える、Golang のソースコード解析。
- [gpath](https://github.com/tenntenn/gpath) - リフレクションにおいて、Go の式で構造体のフィールドに簡単にアクセスできるようにするライブラリ。
- [objwalker](https://github.com/rekby/objwalker) - リフレクションを使って Go のオブジェクトを走査します。
- [reflectpro](https://github.com/gontainer/reflectpro) - Go 向けのコーラー、コピアー、ゲッター、セッター。
- [reflectutils](https://github.com/muir/reflectutils) - リフレクションを扱うためのヘルパー：構造体タグの解析、再帰的な走査、文字列からの値の設定。

**[⬆ トップに戻る](#contents)**

## リソースの埋め込み

- [debme](https://github.com/leaanthony/debme) - 既存の `embed.FS` のサブディレクトリから `embed.FS` を作成します。
- [embed](https://pkg.go.dev/embed) - embed パッケージは、実行中の Go プログラムに埋め込まれたファイルへのアクセスを提供します。
- [rebed](https://github.com/soypat/rebed) - Go 1.16 の `embed.FS` 型からフォルダー構造とファイルを再作成します
- [vfsgen](https://github.com/shurcooL/vfsgen) - 指定された仮想ファイルシステムを静的に実装する vfsdata.go ファイルを生成します。

**[⬆ トップに戻る](#contents)**

## 科学計算とデータ分析

_科学技術計算とデータ分析のためのライブラリ。_

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - 一対比較のための Bradley-Terry モデルを提供します。
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - Github のコントリビューションアクティビティにインスパイアされた、素の Go によるカレンダーヒートマップ。
- [chart](https://github.com/vdobler/chart) - Go 向けのシンプルなチャート描画ライブラリ。多くの種類のグラフをサポートしています。
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - 機械学習と統計のためのデータフレーム（pandas に類似）。
- [decimal](https://github.com/db47h/decimal) - decimal パッケージは、任意精度の 10 進浮動小数点演算を実装しています。
- [entitydebs](https://github.com/ndabAP/entitydebs) - 組み込みの係り受け解析器を使い、ノンフィクションのテキスト内のエンティティをプログラムで分析する社会科学ツール。
- [evaler](https://github.com/soniah/evaler) - シンプルな浮動小数点の算術式評価器。
- [ewma](https://github.com/VividCortex/ewma) - 指数加重移動平均。
- [geom](https://github.com/skelterjohn/geom) - Golang 向けの 2D ジオメトリ。
- [go-dsp](https://github.com/mjibson/go-dsp) - Go 向けのデジタル信号処理。
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Go による状態推定とフィルタリングのアルゴリズム。
- [go-gt](https://github.com/ThePaw/go-gt) - 「Go」言語で書かれたグラフ理論のアルゴリズム。
- [go-hep](https://github.com/go-hep/hep) - 高エネルギー物理学の解析を簡単に行うためのライブラリとツールのセット。
- [godesim](https://github.com/soypat/godesim) - シンプルな API を備えた、イベントベースのシミュレーションのための拡張/多変数 ODE ソルバーフレームワーク。
- [goent](https://github.com/kzahedi/goent) - エントロピー尺度の GO 実装。
- [gograph](https://github.com/hmdsefi/gograph) - 数学的なグラフ理論とアルゴリズムを提供する、Golang のジェネリックなグラフライブラリ。
- [gonum](https://github.com/gonum/gonum) - Gonum は、Go プログラミング言語向けの数値計算ライブラリのセットです。行列、統計、最適化などのライブラリが含まれています。
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot は、Go でプロットを構築・描画するための API を提供します。
- [goraph](https://github.com/gyuho/goraph) - Pure Go のグラフ理論ライブラリ（データ構造、アルゴリズムの可視化）。
- [gosl](https://github.com/cpmech/gosl) - 線形代数、FFT、幾何学、NURBS、数値解析、確率、最適化、微分方程式などのための Go 科学技術ライブラリ。
- [GoStats](https://github.com/OGFris/GoStats) - GoStats は、主に機械学習の分野で使われる数理統計のためのオープンソースの GoLang ライブラリで、統計的尺度の関数のほとんどを網羅しています。
- [graph](https://github.com/yourbasic/graph) - 基本的なグラフアルゴリズムのライブラリ。
- [hdf5](https://github.com/scigolib/hdf5) - 科学データの保存と交換のための HDF5 ファイル形式の Pure Go 実装。
- [insyra](https://github.com/HazelnutParadise/insyra) - 統計、可視化、Parquet のサポート、Python との連携を備えたデータ分析ライブラリ。
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - graphviz をサポートする、JSONL グラフを操作するためのツール。
- [matlab](https://github.com/scigolib/matlab) - CGO なしで MATLAB の .mat ファイル（v5〜v7.3）を読み書きするための Pure Go ライブラリ。
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go は、Go で数理計画（凸最適化問題など）を定義するためのオープンソースパッケージです。
- [matrix](https://github.com/Arceus-7/matrix) - 算術演算、行列分解、連立一次方程式の求解をサポートする、Go 向けのクリーンでジェネリックかつ依存関係ゼロの行列演算パッケージ。
- [ode](https://github.com/ChristopherRabotin/ode) - 拡張状態とチャネルベースの反復停止条件をサポートする常微分方程式（ODE）ソルバー。
- [orb](https://github.com/paulmach/orb) - クリッピング、GeoJSON、Mapbox Vector Tile をサポートする 2D ジオメトリ型。
- [pagerank](https://github.com/alixaxel/pagerank) - Go で実装された重み付き PageRank アルゴリズム。
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - 小さな線形補間ライブラリ。
- [PiHex](https://github.com/claygod/PiHex) - 円周率の 16 進数表記を求める「Bailey-Borwein-Plouffe」アルゴリズムの実装。
- [Poly](https://github.com/bebop/poly) - 生物をエンジニアリングするための Go パッケージ。
- [rootfinding](https://github.com/khezen/rootfinding) - 二次関数の根を求めるための求根アルゴリズムライブラリ。
- [simd](https://github.com/tphakala/simd) - 複数のアーキテクチャ向けのアセンブリによる高速化を備えた、スライスに対するネイティブ Go のベクトル演算と SIMD 演算。
- [sparse](https://github.com/james-bowman/sparse) - 科学技術計算や機械学習のアプリケーションを支える線形代数のための、Go の疎行列フォーマット。gonum の行列ライブラリと互換性があります。
- [stats](https://github.com/montanaflynn/stats) - Golang の標準ライブラリにない一般的な関数を備えた統計パッケージ。
- [streamtools](https://github.com/nytlabs/streamtools) - データストリームを扱うための汎用的なグラフィカルツール。
- [taxonkit](https://github.com/shenwei356/taxonkit) - 実用的で効率的な NCBI タクソノミーのツールキット。系統の照会、再フォーマット、フィルタリング、カスタム taxdump ファイルの作成をサポートしています。
- [TextRank](https://github.com/DavidBelicza/TextRank) - 拡張可能な機能（要約、重み付け、フレーズ抽出）とマルチスレッド（ゴルーチン）をサポートする、Golang による TextRank の実装。
- [topk](https://github.com/keilerkonzept/topk) - HeavyKeeper アルゴリズムに基づく、スライディングウィンドウ型および通常の Top-K スケッチ。
- [triangolatte](https://github.com/tchayen/triangolatte) - 2D 三角形分割ライブラリ。線やポリゴン（いずれも点に基づく）を GPU の言語に変換できます。

**[⬆ トップに戻る](#contents)**

## セキュリティ

_アプリケーションをより安全にするために使われるライブラリ。_

- [acme-proxy](https://github.com/esnet/acme-proxy) - ポート 80 をインターネットに開放せずに ACME の http-01 チャレンジを解決し、外部の認証局から証明書を取得します。
- [acmetool](https://github.com/hlandau/acme) - 自動更新を備えた ACME（Let's Encrypt）クライアントツール。
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Go 向けの、暗号学的に安全な小さなパスワード生成パッケージ。
- [acra](https://github.com/cossacklabs/acra) - データベースを利用するアプリケーションをデータ漏洩から守るためのネットワーク暗号化プロキシ：強力な選択的暗号化、SQL インジェクションの防止、侵入検知システムを備えています。
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - NIST SP 800-90A で規定された、カウンターモードの AES に基づく決定論的乱数ビット生成器（AES-CTR-DRBG）。
- [age](https://github.com/FiloSottile/age) - 小さく明示的な鍵、設定オプション不要、UNIX スタイルの組み合わせやすさを特徴とする、シンプルでモダンかつ安全な暗号化ツール（および Go ライブラリ）。
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Go の標準ライブラリの Bcrypt や simple-scrypt パッケージによく似た使い方ができる、Go の argon2 パッケージの軽量ラッパー。
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Let's Encrypt の証明書を自動的に取得し、TLS サーバーを起動します。
- [BadActor](https://github.com/jaredfolkins/badactor) - fail2ban の精神で作られた、インメモリでアプリケーション駆動型のジェイラー。
- [beelzebub](https://github.com/mariocandela/beelzebub) - システムの仮想化に AI を活用した、安全なローコードのハニーポットフレームワーク。
- [booster](https://github.com/anatol/booster) - フルディスク暗号化をサポートする高速な initramfs ジェネレーター。
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - 正規表現ルールエンジン、異常スコアリング、IP/DNS/ASN/国のブラックリスト、レート制限を備えた、Caddy サーバー用の Web アプリケーションファイアウォールミドルウェア。
- [Cameradar](https://github.com/Ullaakut/cameradar) - 監視カメラの RTSP ストリームをリモートからハックするためのツールおよびライブラリ。
- [canery](https://github.com/rluders/canery) - プラガブルな評価モデルを備えた、最小限でステートレスな認可エンジン。
- [certificates](https://github.com/mvmaasakkers/certificates) - TLS 証明書を生成するための、設計思想が明確なツール。
- [CertMagic](https://github.com/caddyserver/certmagic) - TLS 証明書の発行と更新を完全に管理するための、成熟した堅牢かつ強力な ACME クライアント統合。
- [Coraza](https://github.com/corazawaf/coraza) - エンタープライズ対応で、modsecurity および OWASP CRS と互換性のある WAF ライブラリ。
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - 本番環境へのデプロイ前に ModSecurity と Coraza の SecLang WAF ルールを検証するための、スタンドアロンの CLI ツール。
- [Crenox](https://github.com/crenoxhq/crenox) - Aho-Corasick 法を使って認証情報の漏洩を高速に検出する、依存関係ゼロのコミット前シークレットスキャナー。
- [deidentify](https://github.com/aliengiraffe/deidentify) - テキストや構造化データから、個人を特定できる情報を決定論的かつ形式を保ったまま除去します。
- [dongle](https://github.com/golang-module/dongle) - エンコード・デコードと暗号化・復号のための、シンプルでセマンティックかつ開発者に優しい Golang パッケージ。
- [dotlock](https://github.com/ahmadraza100/dotlock) - 複数の環境とプロファイルにまたがるシークレットを管理するための対話型 TUI を備えた、暗号化された .env の保管庫マネージャー。
- [encid](https://github.com/bobg/encid) - 暗号化された整数 ID をエンコード・デコードします。
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - 豊富なコマンドライン引数を備えたエントロピーパスワードジェネレーター。数字、パスワード、そしてあまり知られていない辞書の単語に記号や数字を混ぜたパスワードなど、ランダムな文字列を安全に生成します。
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Linux サーバー上の firewalld のルールを動的に更新するための REST アプリケーション。
- [fort](https://github.com/djadmin/fort) - 16 項目のチェックで macOS のセキュリティ設定を監査し、スコアを報告して、安全に修正できる問題は修正します。単一バイナリで、Homebrew からインストールできます。
- [go-generate-password](https://github.com/m1/go-generate-password) - CLI でもライブラリとしても使用できるパスワードジェネレーター。
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Go 向けの Apache htpasswd パーサー。
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - 生の暗号学的エントロピー値に基づくパスワードバリデーター。
- [go-peer](https://github.com/number571/go-peer) - 安全で匿名性の高い分散型システムを作成するためのソフトウェアライブラリ。
- [go-yara](https://github.com/hillu/go-yara) - 「マルウェア研究者（とそれ以外のすべての人）のためのパターンマッチング用万能ナイフ」である [YARA](https://github.com/plusvic/yara) の Go バインディング。
- [goArgonPass](https://github.com/dwin/goArgonPass) - 既存の Python および PHP の実装と互換性を持つように設計された、Argon2 のパスワードハッシュと検証。
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - パスワードを安全にハッシュ化・暗号化するための、おそらく心配性すぎるほど慎重なパッケージ。
- [gost-crypto](https://github.com/rekurt/gost-crypto) - OpenSSL の gost-engine を基盤とした、ロシアの GOST 暗号規格（デジタル署名、Streebog ハッシュ、Kuznechik 暗号、MGM AEAD）のための Go ライブラリ。
- [grim](https://github.com/ijin82/grim) - 揮発性メモリ上で暗号化された Markdown ノートの保管庫を管理するための、高速で安全な CLI ツール。
- [gspy](https://github.com/Mutasem-mk4/gspy) - 実行中の Go プロセスに対する、ゴルーチンからシステムコールまでを調べるフォレンジック用インスペクター。
- [Interpol](https://github.com/avahidi/interpol) - ファジングとペネトレーションテストのためのルールベースのデータジェネレーター。
- [leakhound](https://github.com/nilpoona/leakhound) - 機密性の高い構造体フィールドを誤ってログ出力していないかを検出し、ログからのデータ漏洩を防ぐ静的解析ツール。
- [lego](https://github.com/go-acme/lego) - Pure Go の ACME クライアントライブラリおよび CLI ツール（Let's Encrypt で使用）。
- [luks.go](https://github.com/anatol/luks.go) - LUKS パーティションを管理するための Pure Golang ライブラリ。
- [mcprobe](https://github.com/tamish560/mcprobe) - プロンプトインジェクションの検出、ツールシャドウイング、SARIF 出力を備えた、MCP サーバー向けのセキュリティスキャナー。
- [memguard](https://github.com/awnumar/memguard) - メモリ内の機密性の高い値を扱うための Pure Go ライブラリ。
- [mist](https://github.com/iSerganov/mist) - X25519 と ChaCha20-Poly1305 を使い、圧縮オーディオ内に暗号化メッセージを隠す、非対称鍵によるオーディオステガノグラフィーライブラリ。
- [multikey](https://github.com/adrianosela/multikey) - Shamir の秘密分散アルゴリズムに基づく、N 個中 n 個の鍵による暗号化/復号フレームワーク。
- [nacl](https://github.com/kevinburke/nacl) - NaCL の API 群の Go 実装。
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - ヘッダー、JSON、XML、URL エンコードされたデータ、JWT、PEM 鍵、ベンダーのトークンを対象に、ログ行や HTTP ダンプから 1 回の処理でシークレットを除去します。
- [optimus-go](https://github.com/pjebs/optimus-go) - Knuth のアルゴリズムを使った ID のハッシュ化と難読化。
- [osv-scanner](https://github.com/google/osv-scanner) - OSV が提供するデータを使用する、Go で書かれた脆弱性スキャナー。
- [passlib](https://github.com/hlandau/passlib) - 将来にわたって使えるパスワードハッシュライブラリ。
- [passwap](https://github.com/zitadel/passwap) - 異なるパスワードハッシュアルゴリズム間で統一された実装を提供します
- [pii-shield](https://github.com/pii-shield/pii-shield) - ログから PII を除去する、コード不要の Kubernetes 向けログサニタイズサイドカー。
- [pm](https://github.com/nicola-strappazzon/password-manager) - OpenPGP 暗号化でデータを保存する、Go で書かれた Unix スタイルのパスワードマネージャー。
- [procscope](https://github.com/Mutasem-mk4/procscope) - eBPF を使ってプロセスのライフサイクル、ファイルアクティビティ、ネットワーク接続をトレースする、プロセス単位のランタイム調査ツール。
- [qrand](https://github.com/bitfield/qrand) - 量子力学的に安全な乱数データを提供する、ANU Quantum Numbers（AQN）API 用のクライアント。
- [Razify](https://github.com/Hossiy21/razify) - .env ファイルをスキャン・検証・監査し、シークレットの漏洩や環境の差異を検出する CLI。
- [redact](https://github.com/alesr/redact) - 設定可能なパイプラインを使い、slog ベースのログから機密情報を除去します。
- [SafeDep/vet](https://github.com/safedep/vet) - 悪意のあるオープンソースパッケージから保護します。
- [secret](https://github.com/rsjethani/secret) - シークレットがログや std\* などに漏れるのを防ぎます。
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - パスワード、パスフレーズ、シークレット、API キー、PIN のためのバージョン管理された JSON スキーマを備えた、CSPRNG ベースの認証情報ジェネレーター。
- [secure](https://github.com/unrolled/secure) - 手軽にセキュリティを向上させられる、Go 向けの HTTP ミドルウェア。
- [secureio](https://github.com/xaionaro-go/secureio) - XChaCha20-poly1305、ECDH、ED25519 に基づく、`io.ReadWriteCloser` 向けの鍵交換＋認証＋暗号化ラッパー兼マルチプレクサー。
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - シンプルでわかりやすい API と、組み込みの自動コスト調整を備えた Scrypt パッケージ。
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - SSH 鍵を使って暗号化/復号します。
- [sslmgr](https://github.com/adrianosela/sslmgr) - acme/autocert の高レベルラッパーで SSL 証明書を簡単に。
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf は、Web ベースの攻撃から保護し、Go ベースの Web アプリケーションのセキュリティを向上させるために teler IDS の機能を提供する Go の HTTP ミドルウェアです。高度に設定可能で、既存の Go アプリケーションに簡単に統合できます。
- [themis](https://github.com/cossacklabs/themis) - 典型的なデータセキュリティの課題（安全なデータ保存、安全なメッセージング、ゼロ知識証明による認証）を解決するための高レベル暗号ライブラリ。14 の言語で利用でき、マルチプラットフォームアプリに最適です。
- [urusai](https://github.com/calpa/urusai) - Urusai（日本語の「うるさい」）は、ブラウジング中にデジタルな煙幕を張ることでプライバシーの保護を支援する、ランダムな HTTP/DNS トラフィックノイズジェネレーターの Go 実装です。
- [veil](https://github.com/getveil/veil) - AI コーディングエージェントから API の認証情報を隠すローカル HTTPS プロキシ。OS のキーチェーン連携、形式を考慮したプレースホルダー、SQLite の監査ログを備えています。
- [y509](https://github.com/kanywst/y509) - X.509 証明書チェーン用の TUI。チェーンが検証できるかどうかと、それとは別にサーバーがチェーンを正しく提供したかどうかを報告します。


**[⬆ トップに戻る](#contents)**

## シリアライズ

_バイナリシリアライズのためのライブラリとツール。_

- [bambam](https://github.com/glycerine/bambam) - Go から Cap'n Proto スキーマを生成するジェネレーター。
- [bel](https://github.com/32leaves/bel) - Go の構造体/インターフェースから TypeScript のインターフェースを生成します。JSON RPC に便利です。
- [binstruct](https://github.com/ghostiam/binstruct) - データを構造体にマッピングするための Golang のバイナリデコーダー。
- [cbor](https://github.com/fxamacker/cbor) - 小さく安全で簡単な、CBOR のエンコード・デコードライブラリ。
- [colfer](https://github.com/pascaldekloe/colfer) - Colfer バイナリ形式のためのコード生成。
- [csvutil](https://github.com/jszwec/csvutil) - ネイティブな Go の構造体への、高性能でイディオマティックな CSV レコードのエンコードとデコード。
- [elastic](https://github.com/epiclabs-io/elastic) - スライス、マップ、その他の未知の値を、実行時に何があっても異なる型に変換します。
- [fixedwidth](https://github.com/huydang284/fixedwidth) - 固定幅のテキストフォーマット（UTF-8 対応）。
- [fwencoder](https://github.com/o1egl/fwencoder) - Go 向けの固定幅ファイルパーサー（エンコード・デコードライブラリ）。
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Go 向けの Cap'n Proto ライブラリとパーサー。
- [go-codec](https://github.com/ugorji/go) - msgpack、cbor、json 向けの高性能で多機能、イディオマティックなエンコード、デコード、RPC ライブラリ。ランタイムベースとコード生成のどちらにも対応しています。
- [go-csvlib](https://github.com/tiendc/go-csvlib) - 高レベルで豊富な機能を備えた CSV シリアライズ/デシリアライズライブラリ。
- [goprotobuf](https://github.com/golang/protobuf) - ライブラリとプロトコルコンパイラープラグインの形で提供される、Google の Protocol Buffers の Go サポート。
- [gotiny](https://github.com/raszia/gotiny) - 効率的な Go のシリアライズライブラリ。gotiny は、コードを生成するシリアライズライブラリとほぼ同等の速さです。
- [jsoniter](https://github.com/json-iterator/go) - 「encoding/json」と 100% 互換性のある高性能なドロップイン置き換え。
- [mus-go](https://github.com/mus-format/mus-go) - Go 向けの MUS 形式シリアライザー。
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - PHP のセッション形式と PHP の Serialize/Unserialize 関数を扱うための GoLang ライブラリ。
- [pletter](https://github.com/vimeda/pletter) - メッセージブローカー向けに proto メッセージをラップするための標準的な方法。
- [proto](https://github.com/emicklei/proto) - Google Protocol Buffers の .proto ファイルのパーサー兼ライター。
- [structomap](https://github.com/tuvistavie/structomap) - 静的な構造体からマップを簡単かつ動的に生成するためのライブラリ。
- [unitpacking](https://github.com/recolude/unitpacking) - 単位ベクトルをできるだけ少ないバイト数にパックするためのライブラリ。

**[⬆ トップに戻る](#contents)**

## サーバーアプリケーション

- [algernon](https://github.com/xyproto/algernon) - Lua、Markdown、GCSS、Amber を組み込みでサポートする HTTP/2 Web サーバー。
- [Caddy](https://github.com/caddyserver/caddy) - Caddy は、設定と使用が簡単な代替の HTTP/2 Web サーバーです。
- [Casdoor](https://github.com/casdoor/casdoor) - Web UI を備え、OAuth 2.0、OIDC、SAML、CAS、LDAP をサポートする、ID およびアクセス管理（IAM）とシングルサインオン（SSO）のサーバー。
- [consul](https://www.consul.io/) - Consul は、サービスディスカバリー、監視、設定のためのツールです。
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - メトリクスのラベルに基づいて Cortex のテナント ID ヘッダーを追加する、Prometheus のリモート書き込みプロキシ。
- [devd](https://github.com/cortesi/devd) - 開発者向けのローカル Web サーバー。
- [discovery](https://github.com/Bilibili/discovery) - レジリエントな中間層の負荷分散とフェイルオーバーのためのレジストリ。
- [dudeldu](https://github.com/krotik/dudeldu) - シンプルな SHOUTcast サーバー。
- [Easegress](https://github.com/megaease/easegress) - 可観測性と拡張性を備えた、クラウドネイティブで高可用性/高性能なトラフィックオーケストレーションシステム。
- [Engity's Bifröst](https://bifroest.engity.org/) - ユーザーの認可方法やセッションの実行方法（ローカルまたはコンテナ内）を複数の方法から選べる、高度にカスタマイズ可能な SSH サーバー。
- [etcd](https://github.com/etcd-io/etcd) - 共有設定とサービスディスカバリーのための、高可用性のキーバリューストア。
- [Euterpe](https://github.com/ironsmile/euterpe) - Web UI と REST API を組み込んだ、セルフホスト型の音楽ストリーミングサーバー。
- [Fider](https://github.com/getfider/fider) - Fider は、顧客のフィードバックを収集・整理するためのオープンなプラットフォームです。
- [Flagr](https://github.com/checkr/flagr) - Flagr は、オープンソースのフィーチャーフラグおよび A/B テストサービスです。
- [flipt](https://github.com/markphelps/flipt) - Go と Vue.js で書かれた、自己完結型のフィーチャーフラグソリューション
- [flue](https://github.com/karnstack/flue) - ターミナルセッションをブラウザーのタブに提供するセルフホスト型のデーモン。タブを閉じた後もセッションは実行し続けます。
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - シンプルで完全かつ軽量な、100% オープンソースのセルフホスト型フィーチャーフラグソリューション。
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Redis を使用し、Go で書かれた、キャッシュ機能付きのシンプルなリバースプロキシ。
- [gondola](https://github.com/bmf-san/gondola) - YAML ベースの Golang リバースプロキシ。
- [goshs](https://github.com/patrickhener/goshs) - ファイルのアップロード/ダウンロード、WebDAV、SFTP、SMB、TLS、認証、共有リンクを備えた SimpleHTTPServer の代替。
- [Kono](https://github.com/starwalkn/kono) - Go による軽量で拡張可能な API ゲートウェイ。並列ファンアウト、柔軟な集約、設定不要の手軽さを備えています。
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - lets-encrypt からその場で証明書を発行して HTTPS を処理するリバースプロキシ。
- [minio](https://github.com/pgsty/minio) - コミュニティによってメンテナンスされている minio（オブジェクトストレージサービス）のフォーク。
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy は、シンプルなモック兼プロキシのアプリケーションサーバーです。モックエンドポイントを作成できるほか、エンドポイントにモックが存在しない場合はリクエストをプロキシできます。
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Nginx のログパーサーおよび Prometheus へのエクスポーター。
- [nsq](https://nsq.io/) - リアルタイムの分散メッセージングプラットフォーム。
- [OpenRun](https://github.com/openrundev/openrun) - Google Cloud Run と AWS App Runner のオープンソースの代替。チーム全体に社内ツールを簡単にデプロイできます。
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase は、リアルタイムのサブスクリプション付き組み込みデータベース（SQLite）、組み込みの認証管理などで構成される、1 ファイルのリアルタイムバックエンドです。
- [protoxy](https://github.com/camgraff/protoxy) - JSON のリクエストボディを Protocol Buffers に変換するプロキシサーバー。
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - PostgreSQL から Kafka にデータベースのイベントをストリーミングします。
- [relay](https://github.com/valtors/relay) - AI エージェント向けに 40 以上のツールを備えた MCP サーバー。ファイル操作、Web 検索、スクリーンショット、マルチエージェントの協調に対応しています。単一の Go バイナリです。
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Riemann のイベントを負荷分散したり、Carbon に変換したりするためのリレー。
- [RoadRunner](https://github.com/spiral/roadrunner) - 高性能な PHP アプリケーションサーバー、ロードバランサー、プロセスマネージャー。
- [SFTPGo](https://github.com/drakkan/sftpgo) - オプションで FTP/S と WebDAV をサポートする、フル機能で高度に設定可能な SFTP サーバー。ローカルファイルシステムや、S3、Google Cloud Storage などのクラウドストレージバックエンドを提供できます。
- [simpleconf](https://github.com/shaunlee/simpleconf) - 1 つの JSON ドキュメントを保持し、HTTP と TCP 経由でキーパスによって読み書きされる設定サーバー。オプションで Raft クラスタリングにも対応しています。
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTP リバースプロキシキャッシュと時系列データのアクセラレーター。
- [wd-41](https://github.com/baalimago/wd-41) - ファイルの変更時に自動でライブリロードする Web 開発（(w)eb (d)evelopment）サーバー。
- [whois](https://github.com/KincaidYang/whois) - ドメイン、IPv4/IPv6 アドレス、CIDR、ASN のための、セルフホスト型の WHOIS/RDAP クエリサービス兼 MCP サーバー。
- [Wish](https://github.com/charmbracelet/wish) - SSH アプリを、あっという間に作成できます！

**[⬆ トップに戻る](#contents)**

## ストリーム処理

_ストリーム処理とリアクティブプログラミングのためのライブラリとツール。_

- [go-etl](https://github.com/Breeze0806/go-etl) - データソースの抽出、変換、ロード（ETL）のための軽量なツールキット。
- [go-streams](https://github.com/reugn/go-streams) - Go のストリーム処理ライブラリ。
- [goio](https://github.com/primetalk/goio) - 素晴らしい Scala ライブラリである cats と fs2 にインスパイアされた、Golang 向けの IO、Stream、Fiber の実装。
- [gostream](https://github.com/mariomac/gostream) - Java Streams API にインスパイアされた、型安全なストリーム処理ライブラリ。
- [machine](https://github.com/whitaker-io/machine) - メトリクスとトレーサビリティを組み込んだストリームワーカーを記述・生成するための Go ライブラリ。
- [nibbler](https://github.com/naughtygopher/nibbler) - マイクロバッチ処理のための軽量パッケージ。
- [ro](https://github.com/samber/ro) - リアクティブプログラミング：イベント駆動型アプリケーションのための、宣言的で組み合わせ可能な API。
- [signals](https://github.com/coregx/signals) - Angular Signals にインスパイアされた、算出値、エフェクト、依存関係の追跡を備えた型安全なリアクティブ状態管理。
- [stream](https://github.com/youthlin/stream) - Java 8 の Stream のような Go の Stream：Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce…
- [StreamSQL](https://github.com/rulego/streamsql) - リアルタイムデータ処理のための軽量なストリーミング SQL エンジン。

**[⬆ トップに戻る](#contents)**

## テンプレートエンジン

_テンプレートと字句解析のためのライブラリとツール。_

- [bagme](https://github.com/boxesandglue/bagme) - Pure Go による、TeX 品質の組版で HTML/CSS を PDF にレンダリングします。
- [ego](https://github.com/benbjohnson/ego) - Go でテンプレートを書ける軽量なテンプレート言語。テンプレートは Go に変換されてコンパイルされます。
- [fasttemplate](https://github.com/valyala/fasttemplate) - シンプルで高速なテンプレートエンジン。[text/template](https://golang.org/pkg/text/template/) より最大 10 倍高速にテンプレートのプレースホルダーを置換します。
- [gomponents](https://www.gomponents.com) - Pure Go による HTML 5 コンポーネント。次のような見た目です：`func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`。
- [got](https://github.com/goradd/got) - Hero と Fasttemplate にインスパイアされた Go のコードジェネレーター。インクルードファイル、カスタムタグの定義、注入された Go コード、言語の翻訳などを備えています。
- [goview](https://github.com/foolin/goview) - Goview は、Go の Web アプリケーションを構築するための、Golang の html/template に基づく軽量でミニマル、イディオマティックなテンプレートライブラリです。
- [gox](https://github.com/doors-dev/gox) - シームレスなエディターサポートを備えた、第一級の Go の式としての HTML テンプレート。
- [htmgo](https://htmgo.dev) - Go + htmx でシンプルかつスケーラブルなシステムを構築します
- [jet](https://github.com/CloudyKit/jet) - Jet テンプレートエンジン。
- [liquid](https://github.com/osteele/liquid) - Shopify の Liquid テンプレートの Go 実装。
- [liquidgo](https://github.com/Notifuse/liquidgo) - Shopify の Liquid テンプレートエンジンの完全な Go 実装。
- [maroto](https://github.com/johnfercher/maroto) - maroto 流の PDF 作成方法。Maroto は Bootstrap にインスパイアされており、gofpdf を使用しています。高速でシンプルです。
- [pongo2](https://github.com/flosch/pongo2) - Go 向けの Django ライクなテンプレートエンジン。
- [quicktemplate](https://github.com/valyala/quicktemplate) - 高速で強力でありながら使いやすいテンプレートエンジン。テンプレートを Go のコードに変換してからコンパイルします。
- [Razor](https://github.com/sipin/gorazor) - Golang 向けの Razor ビューエンジン。
- [Soy](https://github.com/robfig/soy) - [公式仕様](https://developers.google.com/closure/templates/)に従った、Go 向けの Closure テンプレート（別名 Soy テンプレート）。
- [sprout](https://github.com/go-sprout/sprout) - Go テンプレートのための便利なテンプレート関数。
- [tbd](https://github.com/lucasepe/tbd) - プレースホルダー付きのテキストテンプレートを作成する、本当にシンプルな方法。Git リポジトリの追加メタデータを組み込みで公開します。
- [templ](https://github.com/a-h/templ) - 優れた開発者向けツールを備えた HTML テンプレート言語。
- [templator](https://github.com/alesr/templator) - Go 向けの型安全な HTML テンプレートレンダリングエンジン。

**[⬆ トップに戻る](#contents)**

## テスト

_コードベースをテストし、テストデータを生成するためのライブラリ。_

### テストフレームワーク

- [apitest](https://apitest.dev) - 外部 HTTP 呼び出しのモックとシーケンス図の描画をサポートする、REST ベースのサービスや HTTP ハンドラー向けのシンプルで拡張可能な振る舞いテストライブラリ。
- [arch-go](https://github.com/arch-go/arch-go) - Go プロジェクト向けのアーキテクチャテストツール。
- [assay](https://github.com/tushariitr-19/assay) - 決定論的なチェック、CI 対応の終了コード、コード不要の YAML ベースのテストにより、Go のエージェントや MCP サーバーをテストするための、フレームワークに依存しない評価ライブラリ。
- [assert](https://github.com/go-playground/assert) - Go ネイティブのテストと併用する基本的なアサーションライブラリ。カスタムアサーションのための構成要素を備えています。
- [axiom](https://github.com/Nikita-Filonov/axiom) - フィクスチャ、フック、リトライ、メタデータ、プラグイン、並列実行を備えた、組み合わせ可能な Go のテストフレームワーク。
- [baloo](https://github.com/h2non/baloo) - 表現力豊かで多用途なエンドツーエンドの HTTP API テストを簡単に。
- [be](https://github.com/carlmjohnson/be) - ミニマルなジェネリックテストアサーションライブラリ。
- [biff](https://github.com/fulldump/biff) - BDD 互換の分岐テストフレームワーク。
- [charlatan](https://github.com/percolate/charlatan) - テスト用にインターフェースの偽の実装を生成するツール。
- [commander](https://github.com/SimonBaeumer/commander) - Windows、Linux、OSX で CLI アプリケーションをテストするためのツール。
- [coverage](https://github.com/jbunds/coverage) - Go のテストカバレッジのためのシンプルな Web UI と、再利用可能な GitHub Action [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report)。
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - テストフレームワーク向けのシンプルなスナップショットテストのアドオン。
- [dbcleaner](https://github.com/khaiql/dbcleaner) - Ruby の `database_cleaner` にインスパイアされた、テスト用にデータベースをクリーンにするツール。
- [dft](https://github.com/abecodes/dft) - テスト（など）のための、軽量で依存関係ゼロの Docker コンテナ。
- [dsunit](https://github.com/viant/dsunit) - SQL、NoSQL、構造化ファイル向けのデータストアテスト。
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - 別の Go アプリケーションやテストの一部として、Linux、OSX、Windows 上で本物の Postgres データベースをローカルで実行します。
- [endly](https://github.com/viant/endly) - 宣言的なエンドツーエンドの機能テスト。
- [envite](https://github.com/PerimeterX/envite) - 開発・テスト環境の管理フレームワーク。
- [fixenv](https://github.com/rekby/fixenv) - pytest のフィクスチャにインスパイアされたフィクスチャ管理エンジン。
- [flute](https://github.com/suzuki-shunsuke/flute) - HTTP クライアントのテストフレームワーク。
- [frisby](https://github.com/verdverm/frisby) - REST API のテストフレームワーク。
- [gherkingen](https://github.com/hedhyw/gherkingen) - BDD のボイラープレートジェネレーター兼フレームワーク。
- [ginkgo](https://onsi.github.io/ginkgo/) - Go 向けの BDD テストフレームワーク。
- [gnomock](https://github.com/orlangure/gnomock) - モックを使わず、Docker 上で動作する本物の依存関係（データベース、キャッシュ、さらには Kubernetes や AWS まで）を使った統合テスト。
- [go-carpet](https://github.com/msoap/go-carpet) - ターミナルでテストカバレッジを表示するためのツール。
- [go-cmp](https://github.com/google/go-cmp) - テストで Go の値を比較するためのパッケージ。
- [go-hit](https://github.com/Eun/go-hit) - Hit は Golang で書かれた HTTP 統合テストフレームワークです。
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - クライアントのテスト用にさまざまなエンドポイントを備えた、HTTP のテスト・デバッグツール。
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - CI の品質ゲート、カバレッジを考慮した MSI、ベースラインの追跡、git diff によるフィルタリングを備えた、Go 向けのミューテーションテスト。
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - MySQL の統合テストを支援する、Golang の MySQL testcontainer。
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Golang での Jest ライクなスナップショットテスト。
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - カバレッジが設定したしきい値を下回るファイルを報告するツール。
- [go-testdeep](https://github.com/maxatome/go-testdeep) - Go の testing パッケージを拡張する、非常に柔軟な Golang のディープ比較。
- [go-testing](https://github.com/tkrop/go-testing) - 強く分離された単体テスト、コンポーネントテスト、統合テストを簡単にセットアップできる Go のテスト拡張。gomock と gock を拡張した高度なモックサポートを提供します。
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - 豊富な診断出力を備えた、テスト述語スタイルのアサーションライブラリ。
- [go-vcr](https://github.com/dnaeon/go-vcr) - 高速で決定論的かつ正確なテストのために、HTTP のやり取りを記録・再生します。
- [goblin](https://github.com/franela/goblin) - Mocha ライクな Go のテストフレームワーク。
- [goc](https://github.com/qiniu/goc) - Goc は、Go プログラミング言語向けの包括的なカバレッジテストシステムです。
- [gocheck](https://labix.org/gocheck) - gotest に代わる、より高度なテストフレームワーク。
- [GoConvey](https://github.com/smartystreets/goconvey/) - Web UI とライブリロードを備えた BDD スタイルのフレームワーク。
- [gocrest](https://github.com/corbym/gocrest) - Go のアサーションのための、組み合わせ可能な hamcrest ライクなマッチャー。
- [godog](https://github.com/cucumber/godog) - Go 向けの Cucumber BDD フレームワーク。
- [gofight](https://github.com/appleboy/gofight) - Golang のルーターフレームワーク向けの API ハンドラーテスト。
- [gogiven](https://github.com/corbym/gogiven) - Go 向けの YATSPEC ライクな BDD テストフレームワーク。
- [gomatch](https://github.com/jfilipczyk/gomatch) - JSON をパターンに照らしてテストするために作られたライブラリ。
- [gomega](https://onsi.github.io/gomega/) - Rspec ライクなマッチャー/アサーションライブラリ。
- [gospecify](https://github.com/stesla/gospecify) - Go のコードをテストするための BDD 構文を提供します。rspec などのライブラリを使ったことがある人なら誰でも馴染みやすいでしょう。
- [gosuite](https://github.com/pavlo/gosuite) - Go1.7 のサブテストを活用し、セットアップ/ティアダウン機能を備えた軽量なテストスイートを `testing` にもたらします。
- [got](https://github.com/ysmood/got) - 楽しく使える Golang のテストフレームワーク。
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Go の testing パッケージを補強し、一般的なパターンをサポートするパッケージのコレクション。
- [Hamcrest](https://github.com/rdrdr/hamcrest) - 入力値に適用すると自己記述的な結果を生成する、宣言的な Matcher オブジェクトのための流れるような API のフレームワーク。
- [httper](https://github.com/gustofarbi/httper) - スクリプティング、アサーション、gRPC、負荷テストに対応した、JetBrains の .http ファイル用の CLI ランナー。
- [httpexpect](https://github.com/gavv/httpexpect) - 簡潔で宣言的、使いやすいエンドツーエンドの HTTP および REST API テスト。
- [is](https://github.com/matryer/is) - Go 向けのプロ仕様の軽量テストミニフレームワーク。
- [jsonassert](https://github.com/kinbiko/jsonassert) - JSON ペイロードが正しくシリアライズされていることを検証するためのパッケージ。
- [keploy](https://github.com/keploy/keploy) - API 呼び出しからテストケースとデータのモックを自動生成します。
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - テストのためにプライベートフィールドの値を変更するシンプルなライブラリ。
- [restit](https://github.com/yookoala/restit) - RESTful API の統合テストを書くのを支援する Go のマイクロフレームワーク。
- [schema](https://github.com/jgroeneveld/schema) - リクエストやレスポンスで使われる JSON スキーマに対する、素早く簡単な式のマッチング。
- [should](https://github.com/Kairum-Labs/should) - 依存関係ゼロで、構造体の詳細な差分と人間が読みやすいエラーメッセージを備えたテストライブラリ。
- [stop-and-go](https://github.com/elgohr/stop-and-go) - 並行処理のためのテストヘルパー。
- [testcase](https://github.com/adamluzsi/testcase) - ビヘイビア駆動開発のためのイディオマティックなテストフレームワーク。
- [testcerts](https://github.com/madflojo/testcerts) - テスト関数内で自己署名証明書と認証局を動的に生成します。
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - 自動化された統合テストやスモークテストのために、コンテナベースの依存関係の作成とクリーンアップを簡単にする Go パッケージ。クリーンで使いやすい API により、テストの一部として実行すべきコンテナをプログラムで定義し、テスト終了時にそれらのリソースをクリーンアップできます。
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - データベースアプリケーションをテストするための、Rails ライクなテストフィクスチャのヘルパー。
- [Testify](https://github.com/stretchr/testify) - Go の標準 testing パッケージに対する神聖な拡張。
- [Testo](https://github.com/ozontech/testo) - スイート、並列テスト、フック、パラメーター化を備えたプラグインベースのテストフレームワーク。Pytest にインスパイアされています。
- [testsql](https://github.com/zhulongcheng/testsql) - テスト前に SQL ファイルからテストデータを生成し、終了後に削除します。
- [testza](https://github.com/MarvinJWendt/testza) - きれいな色付き出力を備えたフル機能のテストフレームワーク。
- [tparse](https://github.com/mfridman/tparse) - go test の出力を要約するための CLI ツール。パイプと相性が良く、go test のフラグと互換性があります。
- [trial](https://github.com/jgroeneveld/trial) - ボイラープレートをあまり増やさずに、素早く簡単に拡張できるアサーション。
- [Tt](https://github.com/vcaesar/tt) - シンプルでカラフルなテストツール。
- [wstest](https://github.com/posener/wstest) - WebSocket の http.Handler を単体テストするための WebSocket クライアント。

### モック

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - 自己完結型のモックオブジェクトを生成するためのツール。
- [fabricator](https://github.com/Goldziher/fabricator) - factory_boy と interface-forge にインスパイアされた、Go でモックや偽のデータを生成するための型安全なファクトリー。
- [genmock](https://gitlab.com/so_literate/genmock) - インターフェースメソッドの呼び出しを構築するコードジェネレーターを備えた Go のモックシステム。
- [go-localstack](https://github.com/elgohr/go-localstack) - AWS のテストで localstack を使用するためのツール。
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - データベースとのやり取りをテストするためのモック SQL ドライバー。
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - 主にテスト用途の、単一トランザクションベースのデータベースドライバー。
- [gomock](https://github.com/uber-go/mock) - Go プログラミング言語向けのモックフレームワーク。
- [gomock](https://github.com/vibridi/gomock) - ジェネリクスをサポートし、型付きでフレームワークに依存しないインターフェースのモックを生成する CLI ツール。
- [govcr](https://github.com/seborama/govcr) - Golang 向けの HTTP モック：オフラインテストのために HTTP のやり取りを記録・再生します。
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - 拡張可能なミドルウェアと使いやすい CLI を備えた、REST/SOAP API を記録・シミュレートするための HTTP(S) プロキシ。
- [httpmock](https://github.com/jarcoal/httpmock) - 外部リソースからの HTTP レスポンスを簡単にモックします。
- [minimock](https://github.com/gojuno/minimock) - Go のインターフェース用のモックジェネレーター。
- [mockery](https://github.com/vektra/mockery) - Go のインターフェースを生成するためのツール。
- [mockfs](https://github.com/balinomad/go-mockfs) - `testing/fstest.MapFS` 上に構築された、エラー注入とレイテンシのシミュレーションを備えた Go のテスト用モックファイルシステム。
- [mockhttp](https://github.com/tv42/mockhttp) - Go の http.ResponseWriter のモックオブジェクト。
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - さまざまな用途のモックを生成するシンプルな方法。
- [moq](https://github.com/matryer/moq) - 任意のインターフェースから構造体を生成するユーティリティ。生成された構造体は、テストコードでそのインターフェースのモックとして使用できます。
- [moxie](https://lesiw.io/moxie) - 埋め込み構造体にモックメソッドを生成します。
- [pgxmock](https://github.com/pashagolub/pgxmock) - [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/) を実装したモックライブラリ。
- [timex](https://github.com/cabify/timex) - ネイティブの `time` パッケージの、テストしやすい代替。
- [wsmock](https://github.com/sing198/wsmock) - 障害注入とアサーションを備えた、テスト用の表現力豊かでボイラープレート不要な WebSocket モックサーバー。
- [xgo](https://github.com/xhd2015/xgo) - 汎用的な関数モックライブラリ。

### ファジングとデルタデバッグ/リデュース/シュリンク

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - ランダム化テストシステム。
- [Tavor](https://github.com/zimmski/tavor) - 汎用的なファジングとデルタデバッグのフレームワーク。

### Selenium とブラウザー制御ツール

- [bonk](https://github.com/joakimcarlsson/bonk) - 外部依存関係なしで WebSocket 上の Chrome DevTools Protocol を使用する、高速でステルス性を重視したブラウザー自動化ライブラリ。
- [cdp](https://github.com/mafredri/cdp) - Chrome Debugging Protocol の型安全なバインディング。このプロトコルを実装したブラウザーやその他のデバッグ対象で使用できます。
- [chromedp](https://github.com/knq/chromedp) - Chrome Debugging Protocol をサポートする Chrome、Safari、Edge、Android の WebView などのブラウザーを操作/テストする方法。
- [playwright-go](https://github.com/mxschmitt/playwright-go) - 単一の API で Chromium、Firefox、WebKit を制御するブラウザー自動化ライブラリ。
- [rod](https://github.com/go-rod/rod) - Web の自動化とスクレイピングを簡単にする DevTools ドライバー。
- [selenosis](https://github.com/alcounit/selenosis) - カスタムリソースを介して、Selenium、Playwright、MCP のセッションをオンデマンドのブラウザー Pod にルーティングする、ステートレスな Kubernetes ネイティブのハブ。

### 障害注入

- [failpoint](https://github.com/pingcap/failpoint) - Golang 向けの [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) の実装。

**[⬆ トップに戻る](#contents)**

## テキスト処理

_テキストを解析・操作するためのライブラリ。_

[自然言語処理](#natural-language-processing)と[テキスト解析](#text-analysis)も参照してください。

### フォーマッター

- [address](https://github.com/bojanz/address) - 住所の表現、検証、フォーマットを扱います。
- [align](https://github.com/Guitarbum722/align) - テキストを整列させる汎用アプリケーション。
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - 数値のバイト値（10K、2M、3G など）をフォーマット・解析します。
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - 固定幅のテキストフォーマット（リフレクションを使ったエンコーダー/デコーダー）。
- [go-humanize](https://github.com/dustin/go-humanize) - 時間、数値、メモリサイズを人間が読みやすい形式にするフォーマッター。
- [gotabulate](https://github.com/bndr/gotabulate) - Go で表形式のデータを簡単に整形表示します。
- [sq](https://github.com/neilotoole/sq) - SQL データベースや、CSV、Excel などのドキュメント形式のデータを、JSON、Excel、CSV、HTML、Markdown、XML、YAML などの形式に変換します。
- [textwrap](https://github.com/isbm/textwrap) - 行末でテキストを折り返します。Python の `textwrap` モジュールの実装です。

### マークアップ言語

- [bafi](https://github.com/mmalcek/bafi) - テンプレートを使って JSON、BSON、YAML、XML をあらゆる形式に変換する汎用トランスレーター。
- [bbConvert](https://github.com/CalebQ42/bbConvert) - bbCode を HTML に変換します。カスタム bbCode タグのサポートを追加できます。
- [blackfriday](https://github.com/russross/blackfriday) - Go による Markdown プロセッサー。
- [go-output-format](https://github.com/drewstinnett/go-output-format) - コマンドラインアプリで、Go の構造体を複数の形式（YAML/JSON など）で出力します。
- [go-toml](https://github.com/pelletier/go-toml) - クエリのサポートと便利な CLI ツールを備えた、TOML 形式用の Go ライブラリ。
- [goldmark](https://github.com/yuin/goldmark) - Go で書かれた Markdown パーサー。拡張が容易で、標準（CommonMark）に準拠し、よく構造化されています。
- [goq](https://github.com/andrewstuart/goq) - jQuery 構文の構造体タグを使った、HTML の宣言的なアンマーシャリング（GoQuery を使用）。
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - HTML を Markdown に変換します。Web サイト全体にも対応し、ルールによって拡張できます。
- [htmlquery](https://github.com/antchfx/htmlquery) - HTML 用の XPath クエリパッケージ。XPath 式によって HTML ドキュメントからデータを抽出したり評価したりできます。
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - Go で YAML を HTML としてリッチにレンダリングします。
- [htree](https://github.com/bobg/htree) - [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node) オブジェクトのツリーを走査、ナビゲート、フィルタリングするなど、さまざまに処理します。
- [markdown](https://github.com/nao1215/markdown) - メソッドチェーンによって GitHub Flavored Markdown と mermaid の図を生成する Markdown ビルダー。
- [mdsmith](https://github.com/jeduden/mdsmith) - 高速で自動修正機能を備えた Markdown のリンター兼フォーマッター。スタイル、可読性、構造、ファイル間の整合性をチェックします。
- [mxj](https://github.com/clbanning/mxj) - XML を JSON や map[string]interface{} としてエンコード/デコードし、ドット記法のパスやワイルドカードで値を抽出します。x2j および j2x パッケージに代わるものです。
- [picoloom](https://github.com/alnah/picoloom) - CLI と Go ライブラリの API を備えた、Markdown から PDF への変換ツール。
- [toml](https://github.com/BurntSushi/toml) - TOML 設定フォーマット（リフレクションを使ったエンコーダー/デコーダー）。

### パーサー/エンコーダー/デコーダー

- [allot](https://github.com/sbstjn/allot) - CLI ツールやボットのための、プレースホルダーとワイルドカードによるテキスト解析。
- [codetree](https://github.com/aerogo/codetree) - インデントされたコード（python、pixy、scarlet など）を解析し、ツリー構造を返します。
- [commonregex](https://github.com/mingrammer/commonregex) - Go 向けの一般的な正規表現のコレクション。
- [did](https://github.com/ockam-network/did) - Go による DID（分散型識別子）のパーサーと Stringer。
- [doi](https://github.com/hscells/doi) - Go によるドキュメントオブジェクト識別子（doi）のパーサー。
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Go 向けの Editorconfig ファイルのパーサー兼操作ツール。
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - 高性能な実効トップレベルドメイン（eTLD）抽出モジュール。
- [go-nmea](https://github.com/adrianmo/go-nmea) - Go 言語向けの NMEA パーサーライブラリ。
- [go-querystring](https://github.com/google/go-querystring) - 構造体を URL クエリパラメーターにエンコードするための Go ライブラリ。
- [go-vcard](https://github.com/emersion/go-vcard) - vCard を解析・フォーマットします。
- [godump](https://github.com/yassinebenaid/godump) - 任意の GO 変数を簡単に整形表示します。Go の `fmt.Printf("%#v")` の代替です。
- [godump (goforj)](https://github.com/goforj/godump) - Laravel/Symfony スタイルのダンプ、完全な型情報、色付きの CLI 出力、循環参照の検出、プライベートフィールドへのアクセスを備え、Go の構造体を整形表示します。
- [gofeed](https://github.com/mmcdole/gofeed) - Go で RSS と Atom のフィードを解析します。
- [gographviz](https://github.com/awalterschulze/gographviz) - Graphviz の DOT 言語を解析します。
- [gonameparts](https://github.com/polera/gonameparts) - 人名を個々の構成要素に分解します。
- [ltsv](https://github.com/Wing924/ltsv) - Go 向けの高性能な [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) リーダー。
- [normalize](https://github.com/avito-tech/normalize) - あいまいなテキストをサニタイズ、正規化、比較します。
- [parseargs-go](https://github.com/nproc/parseargs-go) - 引用符とバックスラッシュを理解する文字列引数パーサー。
- [prattle](https://github.com/askeladdk/prattle) - LL(1) 文法をシンプルかつ効率的にスキャン・解析します。
- [sh](https://github.com/mvdan/sh) - シェルのパーサー兼フォーマッター。
- [tokenizer](https://github.com/bzick/tokenizer) - 任意の文字列、スライス、無限バッファを任意のトークンに解析します。
- [vdf](https://github.com/andygrunwald/vdf) - Go で書かれた、Valve のデータ形式（vdf として知られる）のレキサー兼パーサー。
- [when](https://github.com/olebedev/when) - プラガブルなルールを備えた、英語とロシア語の自然言語による日付/時刻パーサー。
- [xj2go](https://github.com/stackerzzq/xj2go) - XML や JSON を Go の構造体に変換します。

### 正規表現

- [coregex](https://github.com/coregx/coregex) - Rust の regex クレートのアーキテクチャを採用した本番環境向けの正規表現エンジン：マルチエンジンの DFA/NFA、SIMD プリフィルター、標準ライブラリのドロップイン置き換え。
- [genex](https://github.com/alixaxel/genex) - 正規表現にマッチするすべての文字列を数え上げ、展開します。
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - シンプルで軽量なワイルドカードパターンマッチング。
- [goregen](https://github.com/zach-klippenstein/goregen) - 正規表現からランダムな文字列を生成するためのライブラリ。
- [regroup](https://github.com/oriser/regroup) - 構造体タグと自動解析を使い、正規表現の名前付きグループを Go の構造体にマッチさせます。
- [rex](https://github.com/hedhyw/rex) - 正規表現ビルダー。

### サニタイズ

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTML サニタイザー。
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Go 向けの、サニタイズベースの罵倒語フィルター。

### スクレイパー

- [colly](https://github.com/asciimoo/colly) - Gopher のための高速でエレガントなスクレイピングフレームワーク。
- [dataflowkit](https://github.com/slotix/dataflowkit) - Web サイトを構造化データに変換する Web スクレイピングフレームワーク。
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - LLM での取り込み（RAG、学習データ）のために、ドキュメントサイトをクリーンな Markdown と JSONL に変換する Web クローラー。
- [go-recipe](https://github.com/kkyr/go-recipe) - Web サイトからレシピをスクレイピングするためのパッケージ。
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - サイトマップを解析するための Go 言語ライブラリ。
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery は、jQuery に似た構文と機能群を Go 言語にもたらします。
- [pagser](https://github.com/foolin/pagser) - Pagser は、Golang のクローラー向けに、goquery と構造体タグに基づいて HTML ページを構造体に解析・デシリアライズする、シンプルで拡張可能かつ設定可能なツールです。
- [Tagify](https://github.com/zoomio/tagify) - 与えられたソースからタグのセットを生成します。
- [walker](https://github.com/cyucelen/walker) - あらゆるソースからページネーションされたデータをシームレスに取得します。シンプルで高性能な API スクレイピングも含まれています。
- [xurls](https://github.com/mvdan/xurls) - テキストから URL を抽出します。

### RSS

- [podcast](https://github.com/eduncan911/podcast) - Golang による、iTunes 準拠かつ RSS 2.0 のポッドキャストジェネレーター

### ユーティリティ/その他

- [ahocorasick](https://github.com/coregx/ahocorasick) - DFA へのコンパイルと SIMD プリフィルターを備え、最大 7 GB/s のスループットを実現する、高性能な Aho-Corasick 複数パターン文字列マッチング（[coregx](https://github.com/coregx) エコシステムの一部）。
- [go-runewidth](https://github.com/mattn/go-runewidth) - 文字や文字列の固定幅を取得するための関数群。
- [kace](https://github.com/codemodus/kace) - 一般的な頭字語にも対応した、一般的なケース変換。
- [lancet](https://github.com/duke-git/lancet) - Go 向けの包括的な Lodash ライクなユーティリティライブラリ
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich は、ロシア語の名前を指定された文法上の格に語形変化させるライブラリです。
- [radix](https://github.com/yourbasic/radix) - 高速な文字列ソートアルゴリズム。
- [TySug](https://github.com/Dynom/TySug) - キーボードレイアウトを考慮した代替候補の提案。
- [uniwidth](https://github.com/unilibs/uniwidth) - SWAR 最適化、O(1) のルックアップテーブル、ZWJ 絵文字のサポートを備えた、高性能な Unicode 文字幅の計算。
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - 単語埋め込みを使って意味的に類似したマッチを見つけるセマンティック grep ツール。たとえば「death」を検索すると、「dead」「killing」「murder」が見つかります。

**[⬆ トップに戻る](#contents)**

## サードパーティ API

_サードパーティの API にアクセスするためのライブラリ。_

- [airtable](https://github.com/mehanizm/airtable) - [Airtable API](https://airtable.com/api) 用の Go クライアントライブラリ。
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Twitter 1.1 API 用の Go クライアントライブラリ。
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - AppStore Connect API 用の非公式 Golang SDK。
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html) の非公式 Go SDK 実装。
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Go プログラミング言語向けの公式 AWS SDK。
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - 型付きのスポット価格、OHLCV ローソク足、履歴データ、生のリクエストを送るための抜け道を備えた、Birdeye DeFi API 用の Go クライアント。
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - [Google BigQuery](https://cloud.google.com/bigquery) に高スループットでデータを書き込むための高レベル Go ライブラリ。
- [brewerydb](https://github.com/naegelejd/brewerydb) - BreweryDB API にアクセスするための Go ライブラリ。
- [cachet](https://github.com/andygrunwald/cachet) - [Cachet（オープンソースのステータスページシステム）](https://cachethq.io/)用の Go クライアントライブラリ。
- [circleci](https://github.com/jszwedko/go-circleci) - CircleCI の API とやり取りするための Go クライアントライブラリ。
- [codeship-go](https://github.com/codeship/codeship-go) - Codeship の API v2 とやり取りするための Go クライアントライブラリ。
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - 依存関係ゼロで、WebSocket ストリームと、先物、現物、オプション、ETF、指標の型付きエンドポイントを備えた Coinglass API v4 用の Go クライアント。
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - Coinpaprika の API とやり取りするための Go クライアントライブラリ。
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - ユーザーが AI エージェントである公開ソーシャルネットワーク [The Colony](https://thecolony.cc) 用の Go クライアントライブラリ。
- [device-check-go](https://github.com/rinchsan/device-check-go) - [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1 とやり取りするための Go クライアントライブラリ。
- [discordgo](https://github.com/bwmarrin/discordgo) - Discord Chat API の Go バインディング。
- [disgo](https://github.com/switchupcb/disgo) - Discord API の Go 製 API ラッパー。
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Go 向けの非公式 Dusupay 決済ゲートウェイ API クライアント
- [ethrpc](https://github.com/onrik/ethrpc) - Ethereum JSON RPC API の Go バインディング。
- [facebook](https://github.com/huandu/facebook) - Facebook Graph API をサポートする Go ライブラリ。
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Golang 向けの非公式 Fasapay 決済ゲートウェイ XML API クライアント。
- [fcm](https://github.com/maddevsio/fcm) - Firebase Cloud Messaging 用の Go ライブラリ。
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - ローカル評価とストリーミング更新を備えた、[Featureflip](https://featureflip.io/) フィーチャーフラグ用の Go SDK。
- [gads](https://github.com/emiddleton/gads) - Google Adwords の非公式 API。
- [gcm](https://github.com/Aorioli/gcm) - Google Cloud Messaging 用の Go ライブラリ。
- [geo-golang](https://github.com/codingsince1985/geo-golang) - [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro)、[MapQuest](https://developer.mapquest.com/documentation/api/geocoding/)、[Nominatim](https://nominatim.org/release-docs/latest/api/Overview/)、[OpenCage](https://opencagedata.com/api)、[Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx)、[Mapbox](https://www.mapbox.com/developers/api/geocoding/)、[OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim) のジオコーディング/逆ジオコーディング API にアクセスするための Go ライブラリ。
- [github](https://github.com/google/go-github) - GitHub REST API v3 にアクセスするための Go ライブラリ。
- [githubql](https://github.com/shurcooL/githubql) - GitHub GraphQL API v4 にアクセスするための Go ライブラリ。
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) のサービス（Jira、Jira Service Management、Jira Agile、Confluence、Admin Cloud）にアクセスするための Go ライブラリ
- [go-aws-news](https://github.com/circa10a/go-aws-news) - AWS の新着情報を取得するための Go アプリケーションおよびライブラリ。
- [go-chronos](https://github.com/axelspringer/go-chronos) - [Chronos](https://mesos.github.io/chronos/) ジョブスケジューラーとやり取りするための Go ライブラリ
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - [Gerrit Code Review](https://www.gerritcodereview.com/) 用の Go クライアントライブラリ。
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - HackerNews API 用の小さな Go クライアント。
- [go-here](https://github.com/abdullahselek/go-here) - HERE の位置情報ベースの API 用の Go クライアントライブラリ。
- [go-hibp](https://github.com/wneessen/go-hibp) - 「Have I Been Pwned」API へのシンプルな Go バインディング。
- [go-imgur](https://github.com/koffeinsource/go-imgur) - [imgur](https://imgur.com) 用の Go クライアントライブラリ
- [go-jira](https://github.com/andygrunwald/go-jira) - [Atlassian JIRA](https://www.atlassian.com/software/jira) 用の Go クライアントライブラリ
- [go-lark](https://github.com/go-lark/lark) - [Feishu](https://open.feishu.cn/) と [Lark](https://open.larksuite.com/) の Open Platform 用の、使いやすい非公式 SDK。
- [go-marathon](https://github.com/gambol99/go-marathon) - Mesosphere の Marathon PAAS とやり取りするための Go ライブラリ。
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2) にアクセスするための Go クライアントライブラリ。
- [go-openai](https://github.com/sashabaranov/go-openai) - Go 向けの OpenAI ChatGPT、DALL·E、Whisper API ライブラリ。
- [go-openproject](https://github.com/manuelbcd/go-openproject) - [OpenProject](https://docs.openproject.org/api/) の API とやり取りするための Go クライアントライブラリ。
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) を扱うための Go モジュール（Insomnia と互換性あり）。
- [go-redoc](https://github.com/mvrilo/go-redoc) - [ReDoc](https://redocly.com/) を使った、Go 向けの組み込み OpenAPI/Swagger ドキュメント UI。
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - [REST Countries API](https://countrylayer.com/) 用の Go ライブラリ。
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm) とやり取りするための Go クライアントライブラリ。
- [go-sophos](https://github.com/esurdam/go-sophos) - 依存関係ゼロの、[Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) 用の Go クライアントライブラリ。
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - Swagger の JSON を提供するための、プリコンパイル済みの [Swagger UI](https://swagger.io/tools/swagger-ui/) を含む Go ライブラリ。
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Telegraph パブリッシングプラットフォームの API クライアント。
- [go-trending](https://github.com/andygrunwald/go-trending) - Github の[トレンドのリポジトリ](https://github.com/trending)と[開発者](https://github.com/trending/developers)にアクセスするための Go ライブラリ。
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - [Unsplash.com](https://unsplash.com) API 用の Go クライアントライブラリ。
- [go-xkcd](https://github.com/nishanths/go-xkcd) - xkcd API 用の Go クライアント。
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Yapla v2.0 API 用の Go クライアントライブラリ。
- [goagi](https://github.com/staskobzar/goagi) - Asterisk PBX の agi/fastagi アプリケーションを構築するための Go ライブラリ。
- [goami2](https://github.com/staskobzar/goami2) - Asterisk PBX 用の AMI v2 ライブラリ。
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Google スプレッドシート上に、一般的でシンプルなデータベース抽象化を提供する Golang ライブラリ。
- [gogtrends](https://github.com/groovili/gogtrends) - Google トレンドの非公式 API。
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - The Movie Database API v3 の Golang ラッパー。
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics は、Wikia の Web サイトから歌詞データを取得するための Go ライブラリです。
- [gomalshare](https://github.com/MonaxGT/gomalshare) - MalShare API [malshare.com](https://www.malshare.com/) 用の Go ライブラリ
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Go の MusicBrainz WS2 クライアントライブラリ。
- [google](https://github.com/google/google-api-go-client) - Go 向けに自動生成された Google API。
- [google-analytics](https://github.com/chonthu/go-google-analytics) - Google アナリティクスのレポートを簡単に取得するためのシンプルなラッパー。
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Google Cloud API の Go クライアントライブラリ。
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/) 用の Go クライアントライブラリ。
- [gopensky](https://github.com/navidys/gopensky) - [OpenSKY Network](https://opensky-network.org/) のライブ API（空域の ADS-B および Mode S データ）用の Go クライアント実装。
- [gosip](https://github.com/koltyakov/gosip) - SharePoint 用のクライアントライブラリ。
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm は、Storm シェルと通信する Storm の Spout と Bolt を Go で書くために必要な通信プロトコルを実装した Go ライブラリです。
- [hipchat](https://github.com/andybons/hipchat) - このプロジェクトは、Hipchat API 用の Golang クライアントライブラリを実装しています。
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - XMPP を介して HipChat と通信するための Golang パッケージ。
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - httpSMS API 用の Go クライアント。
- [igdb](https://github.com/Henry-Sarabia/igdb) - [Internet Game Database API](https://api.igdb.com/) 用の Go クライアント。
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - IP2Location.io API [IP2Location.io](https://www.ip2location.io/) の Go ラッパー。
- [jokeapi-go](https://github.com/icelain/jokeapi) - [JokeAPI](https://sv443.net/jokeapi/v2/) 用の Go クライアント。
- [lark](https://github.com/chyroc/lark) - [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/) の Open API 用 Go SDK。すべての Open API とイベントコールバックをサポートしています。
- [lastpass-go](https://github.com/ansd/lastpass-go) - [LastPass](https://www.lastpass.com/) API 用の Go クライアントライブラリ。
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Lemon Squeezy API 用の Go クライアント。
- [libgoffi](https://github.com/clevabit/libgoffi) - ネイティブな [libffi](https://sourceware.org/libffi/) との統合のためのライブラリアダプターツールボックス
- [libopenapi](https://github.com/pb33f/libopenapi) - OpenAPI、Swagger、Overlays、Arazzo の仕様を解析、検証、操作します。
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - タスクの自動化、ファイル管理、Webhook、型安全なモデルを備えた Manus AI API v2 用の Go クライアント。
- [Medium](https://github.com/Medium/medium-sdk-go) - Medium の OAuth2 API 用の Golang SDK。
- [megos](https://github.com/andygrunwald/megos) - [Apache Mesos](https://mesos.apache.org/) クラスターにアクセスするためのクライアントライブラリ。
- [minio-go](https://github.com/minio/minio-go) - Amazon S3 互換のクラウドストレージ向けの Minio Go ライブラリ。
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel は、Go アプリケーションからイベントを追跡し、Mixpanel のプロファイル更新を Mixpanel に送信するためのライブラリです。
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Smart Money 分析、トークンスクリーナー、プロファイラーを備え、依存関係ゼロの Nansen AI API 用 Go クライアント。
- [newsapi-go](https://github.com/jellydator/newsapi-go) - [NewsAPI](https://newsapi.org/) 用の Go クライアント。
- [openaigo](https://github.com/otiai10/openaigo) - Go 向けの OpenAI GPT3/GPT3.5 ChatGPT API クライアントライブラリ。
- [patreon-go](https://github.com/mxpv/patreon-go) - Patreon API 用の Go ライブラリ。
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - PayPal 決済 API のラッパー。
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Playlyfe REST API の Go SDK。
- [pushover](https://github.com/gregdel/pushover) - Pushover API の Go ラッパー。
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - [RAWG Video Games Database](https://rawg.io/) API 用の Go ライブラリ
- [shopify](https://github.com/rapito/go-shopify) - Shopify API に CRUD リクエストを送るための Go ライブラリ。
- [simples3](https://github.com/rhnvrm/simples3) - Go で書かれた、V4 署名付きの REST を使用するシンプルで飾り気のない AWS S3 ライブラリ。
- [slack](https://github.com/slack-go/slack) - Go による Slack API。
- [smite](https://github.com/sergiotapia/smitego) - Smite ゲーム API へのアクセスをラップする Go パッケージ。
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - SonarQube Web API 用の Go クライアントライブラリおよびコマンドラインクライアント。
- [spec](https://github.com/oaswrap/spec) - 静的生成と、chi、echo、gin、fiber、mux などの人気フレームワークをサポートする軽量な OpenAPI 3.x ビルダー。
- [spotify](https://github.com/rapito/go-spotify) - Spotify WEB API にアクセスするための Go ライブラリ。
- [steam](https://github.com/sostronk/go-steam) - Steam のゲームサーバーとやり取りするための Go ライブラリ。
- [stripe](https://github.com/stripe/stripe-go) - Stripe API 用の Go クライアント。
- [swag](https://github.com/zc2638/swag) - コメント不要で、Swagger 2.0 互換の API を作成するためのシンプルな Go ラッパー。組み込み、gin、chi、mux、echo、httprouter、fasthttp など、ほとんどのルーティングフレームワークをサポートしています。
- [textbelt](https://github.com/dietsche/textbelt) - textbelt.com のテキストメッセージング API 用の Go クライアント。
- [threads-go](https://github.com/tirthpatell/threads-go) - OAuth 2.0、レート制限、型安全なエラー処理を備えた、Meta Threads API 用の Go クライアントライブラリ。
- [Trello](https://github.com/adlio/trello) - Trello API の Go ラッパー。
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - TripAdvisor API の Go ラッパー。
- [tumblr](https://github.com/mattcunningham/gumblr) - Tumblr v2 API の Go ラッパー。
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Uptime Robot v2 API の Go ラッパーおよびコマンドラインクライアント。
- [vl-go](https://github.com/verifid/vl-go) - VerifID の本人確認レイヤー API 用の Go クライアントライブラリ。
- [webhooks](https://github.com/go-playground/webhooks) - GitHub と Bitbucket 用の Webhook レシーバー。
- [wit-go](https://github.com/wit-ai/wit-go) - wit.ai HTTP API 用の Go クライアント。
- [ynab](https://github.com/brunomvsouza/ynab.go) - YNAB API の Go ラッパー。
- [zooz](https://github.com/gojuno/go-zooz) - Zooz API 用の Go クライアント。

**[⬆ トップに戻る](#contents)**

## ユーティリティ

_日々の作業を楽にする汎用ユーティリティとツール。_

- [abstract](https://github.com/maxbolgarin/abstract) - ビジネスロジックからボイラープレートコードを取り除くための抽象化とユーティリティ。
- [apm](https://github.com/topfreegames/apm) - HTTP API を備えた、Golang アプリケーション向けのプロセスマネージャー。
- [backscanner](https://github.com/icza/backscanner) - bufio.Scanner に似たスキャナーですが、指定した位置から後方に向かって、行を逆順に読み込んで返します。
- [bed](https://github.com/itchyny/bed) - Go で書かれた Vim ライクなバイナリエディター。
- [blank](https://github.com/Henry-Sarabia/blank) - 文字列の空白や空白文字を検証または除去します。
- [bleep](https://github.com/sinhashubham95/bleep) - Go で、任意の OS シグナルの組み合わせに対して任意の数のアクションを実行します。
- [boilr](https://github.com/tmrts/boilr) - ボイラープレートテンプレートからプロジェクトを作成するための、非常に高速な CLI ツール。
- [boring](https://github.com/alebeck/boring) - シンプルなコマンドラインの SSH トンネルマネージャー。
- [changie](https://github.com/miniscruff/changie) - 多くのカスタマイズオプションを備えた、リリース準備のための自動化された変更履歴ツール。
- [chyle](https://github.com/antham/chyle) - 多様な設定が可能な、Git リポジトリを使った変更履歴ジェネレーター。
- [circuit](https://github.com/cep21/circuit) - サーキットブレーカーパターンの、効率的で機能が完備された Hystrix ライクな Go 実装。
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Go によるサーキットブレーカー。
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Go によるクロスプラットフォームのクリップボードパッケージ。
- [clockwork](https://github.com/jonboulle/clockwork) - Golang 向けのシンプルな偽の時計。
- [cmd](https://github.com/SimonBaeumer/cmd) - OSX、Windows、Linux でシェルコマンドを実行するためのライブラリ。
- [config-file-validator](https://github.com/Boeing/config-file-validator) - 設定ファイルを検証するためのクロスプラットフォームツール。
- [contem](https://github.com/maxbolgarin/contem) - Go アプリケーションのグレースフルシャットダウンのための、context.Context のドロップイン置き換え。
- [cookie](https://github.com/syntaqx/cookie) - Cookie 構造体の解析とヘルパーのパッケージ。
- [copy-pasta](https://github.com/jutkko/copy-pasta) - S3 のようなバックエンドをストレージとして使用する、複数のワークステーションで使える汎用クリップボード。
- [countries](https://github.com/biter777/countries) - ISO-3166-1、ISO-4217、ITU-T E.164、Unicode CLDR、IANA ccTLD の各規格の完全な実装。
- [countries](https://github.com/pioz/countries) - Go で国を扱う際に必要なものがすべて揃っています。
- [create-go-app](https://github.com/create-go-app/cli) - コマンド 1 つで、バックエンド（Golang）、フロントエンド（JavaScript、TypeScript）、デプロイ自動化（Ansible、Docker）を備えた本番環境対応の新しいプロジェクトを作成できる強力な CLI。
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo は、暗号資産の価格をリアルタイムで監視・観察するための、純粋に Go で書かれた TUI ベースのアプリケーションです！
- [ctop](https://github.com/bcicen/ctop) - コンテナのメトリクスのための [top ライク](https://ctop.sh)なインターフェース（htop など）。
- [ctxutil](https://github.com/posener/ctxutil) - コンテキストのためのユーティリティ関数のコレクション。
- [cvt](https://github.com/shockerli/cvt) - 任意の値を別の型に簡単かつ安全に変換します。
- [dbt](https://github.com/nikogura/dbt) - 信頼できる中央リポジトリから、自己更新する署名済みバイナリを実行するためのフレームワーク。
- [Death](https://github.com/vrecan/death) - シグナルによる Go アプリケーションのシャットダウンを管理します。
- [debounce](https://github.com/floatdrop/debounce) - Go で書かれたゼロアロケーションのデバウンサー。
- [delve](https://github.com/derekparker/delve) - Go のデバッガー。
- [dive](https://github.com/wagoodman/dive) - Docker イメージの各レイヤーを探索するためのツール。
- [dlog](https://github.com/kirillDanshin/dlog) - デバッグ呼び出しを削除せずにリリースを小さくできる、コンパイル時に制御されるロガー。
- [EaseProbe](https://github.com/megaease/easeprobe) - ヘルス/ステータスチェックのデーモンとして動作できる、シンプルでスタンドアロンかつ軽量なツール。HTTP/TCP/SSH/Shell/Client などのプローブと、Slack/Discord/Telegram/SMS などへの通知をサポートしています。
- [equalizer](https://github.com/reugn/equalizer) - Go 向けのクォータマネージャーとレートリミッターのコレクション。
- [ergo](https://github.com/cristianoliveira/ergo) - 異なるポートで動作する複数のローカルサービスの管理を簡単に。
- [evaluator](https://github.com/nullne/evaluator) - S 式に基づいて式を動的に評価します。シンプルで拡張も簡単です。
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Go 向けのフォールトトレランスとレジリエンスのパターン。
- [filetype](https://github.com/h2non/filetype) - マジックナンバーのシグネチャを確認してファイルの種類を推測する小さなパッケージ。
- [filler](https://github.com/yaronsumel/filler) - 「fill」タグを使って構造体に値を埋める小さなユーティリティ。
- [filter](https://github.com/gookit/filter) - Go のデータのフィルタリング、サニタイズ、変換を提供します。
- [fzf](https://github.com/junegunn/fzf) - Go で書かれたコマンドラインのファジーファインダー。
- [generate](https://github.com/go-playground/generate) - 指定したパスまたは環境変数に対して go generate を再帰的に実行し、正規表現でフィルタリングできます。
- [gh-image](https://github.com/drogers0/gh-image) - コマンドラインから GitHub の Issue、PR、README に画像をアップロードし、リポジトリの公開設定を尊重した user-attachments の URL を生成する gh CLI 拡張機能。
- [ghokin](https://github.com/antham/ghokin) - gherkin（cucumber、behat など）のための、外部依存関係のない並列化されたフォーマッター。
- [git-time-metric](https://github.com/git-time-metric/gtm) - Git のための、シンプルでシームレスかつ軽量な時間トラッキング。
- [git-tools](https://github.com/kazhuravlev/git-tools) - Git のタグ管理を支援するツール。
- [gitbatch](https://github.com/isacikgoz/gitbatch) - Git リポジトリを 1 か所で管理します。
- [gitcs](https://github.com/knbr13/gitcs/) - Git コミットのビジュアライザー。ローカルマシン上の Git コミットを可視化する CLI ツールです。
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Go ベースの Web フレームワークのための本番環境対応の機能。
- [go-astitodo](https://github.com/asticode/go-astitodo) - GO コード内の TODO を解析します。
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - Golang プラグインがエクスポートしたシンボルをラップするための go:generate ツール（1.8 のみ）。
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - Pure Go による bsdiff と bspatch のライブラリおよび CLI ツール。
- [go-clip](https://github.com/prashantgupta24/go-clip) - Mac 向けのミニマルなクリップボードマネージャー。
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Go にない列挙型の代わりとなる、安全な文字列解析を備えたジェネリックな型付き定数セット。
- [go-convert](https://github.com/Eun/go-convert) - go-convert パッケージを使うと、値を別の型に変換できます。
- [go-countries](https://github.com/mikekonan/go-countries) - ISO-3166 コードの軽量なルックアップ。
- [go-dry](https://github.com/ungerik/go-dry) - Go 向けの DRY（Don't Repeat Yourself）パッケージ。
- [go-events](https://github.com/deatil/go-events) - WordPress のフック関数のような、Go のイベントとイベント購読のパッケージ。
- [go-funk](https://github.com/thoas/go-funk) - ヘルパー（map、find、contains、filter、chunk、reverse など）を提供するモダンな Go ユーティリティライブラリ。
- [go-health](https://github.com/Talento90/go-health) - Health パッケージは、サービスにヘルスチェックを追加する方法を簡素化します。
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - 構造体をヘッダーフィールドにエンコードするための Go ライブラリ。
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - 未使用または以前のバージョンの AWS Lambda を削除するための CLI。
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock は、スタベーションのない読み書きミューテックスと読み書き trylock を実装したロックライブラリです。
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - ts-pattern にインスパイアされたパターンマッチングライブラリ。
- [go-pkg](https://github.com/chenquan/go-pkg) - Go のツールキット。
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - Problem Details を扱うための Go パッケージ。
- [go-qr](https://github.com/piglig/go-qr) - ネイティブで高品質かつミニマルな QR コードジェネレーター。
- [go-rate](https://github.com/beefsack/go-rate) - Go 向けの時間ベースのレートリミッター。
- [go-safecast](https://github.com/ccoVeille/go-safecast) - 整数のオーバーフローとアンダーフローを防ぐ、安全な数値型変換ライブラリ（gosec G115 と CWE-190 に対処）。
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Go で書かれた XML サイトマップジェネレーター。
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - スライス、マップ、文字列、エラー、JSON、HTTP、コンテナのための型安全なジェネリックヘルパー。個別に導入できる小さなパッケージとして構成されています。
- [go-trigger](https://github.com/sadlil/go-trigger) - Go 言語のグローバルイベントトリガー。ID でイベントを登録し、プロジェクト内のどこからでもイベントを発火できます。
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper は Go 向けのサーキットブレーカーパッケージで、回路を遮断し、その状態を制御できます。
- [go-type](https://github.com/mikekonan/go-types) - ISO-4217、ISO-3166 などの型の保存/検証と転送のための Go の型を提供するライブラリ。
- [go-utils](https://github.com/Goldziher/go-utils) - JavaScript と Python にインスパイアされた、Go 向けのシンプルで高性能なジェネリックユーティリティ（map、filter、reduce など）。
- [goback](https://github.com/carlescere/goback) - Go のシンプルな指数バックオフパッケージ。
- [goctx](https://github.com/zerosnake0/goctx) - コンテキストの値を高いパフォーマンスで取得します。
- [godaemon](https://github.com/VividCortex/godaemon) - デーモンを書くためのユーティリティ。
- [godoclive](https://github.com/syst3mctl/godoclive) - chi、gin、net/http のルーターを静的解析し、Go の HTTP ハンドラーからインタラクティブな API ドキュメントを生成します。
- [godropbox](https://github.com/dropbox/godropbox) - Dropbox による、Go のサービス/アプリケーションを書くための共通ライブラリ。
- [gofn](https://github.com/tiendc/gofn) - Go 1.18 以降向けにジェネリクスを使って書かれた、高性能なユーティリティ関数。
- [golarm](https://github.com/msempere/golarm) - システムイベントでアラームを発します。
- [golog](https://github.com/mlimaloureiro/golog) - タスクの時間を記録するための、簡単で軽量な CLI ツール。
- [gopencils](https://github.com/bndr/gopencils) - REST API を簡単に利用するための、小さくシンプルなパッケージ。
- [goplaceholder](https://github.com/michiwend/goplaceholder) - プレースホルダー画像を生成するための小さな Golang ライブラリ。
- [goreadability](https://github.com/philipjkim/goreadability) - Facebook Open Graph と arc90 の readability を使った Web ページの要約抽出ツール。
- [goreleaser](https://github.com/goreleaser/goreleaser) - Go のバイナリをできるだけ速く簡単に配布します。
- [goreporter](https://github.com/wgliang/goreporter) - 静的解析、単体テスト、コードレビューを行い、コード品質レポートを生成する Golang のツール。
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - ほぼすべての機能を備えた SeaweedFS クライアントライブラリ。
- [gostrutils](https://github.com/ik5/gostrutils) - 文字列の操作と変換のための関数のコレクション。
- [gotenv](https://github.com/subosito/gotenv) - Go で `.env` や任意の `io.Reader` から環境変数を読み込みます。
- [goval](https://github.com/maja42/goval) - Go で任意の式を評価します。
- [graterm](https://github.com/skovtunenko/graterm) - Go アプリケーションで、順序付けられた（逐次/並行）グレースフルな終了（GRAceful TERMination、別名シャットダウン）を行うためのプリミティブを提供します。
- [grofer](https://github.com/pesos/grofer) - Golang で書かれたシステムとリソースの監視ツールです！
- [gubrak](https://github.com/novalagung/gubrak) - シンタックスシュガーを備えた Golang のユーティリティライブラリ。Golang 版の lodash のようなものです。
- [handy](https://github.com/miguelpragier/handy) - 文字列ハンドラー/フォーマッターやバリデーターなど、多数のユーティリティとヘルパー。
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Kubernetes 向けの、シンプルでありながら強力なレディネステスト。
- [hostctl](https://github.com/guumaster/hostctl) - 簡単なコマンドで /etc/hosts を管理するための CLI ツール。
- [htcat](https://github.com/htcat/htcat) - 並列化・パイプライン化された HTTP GET ユーティリティ。
- [hub](https://github.com/github/hub) - git コマンドをラップし、ターミナルから GitHub とやり取りするための追加機能を提供します。
- [immortal](https://github.com/immortal/immortal) - \*nix 向けのクロスプラットフォーム（OS に依存しない）スーパーバイザー。
- [jet](https://github.com/NicoNex/jet) - Just Edit Text：正規表現を使ってファイルの内容や名前を検索・置換するための、高速で強力なツール。
- [jsend](https://github.com/clevergo/jsend) - Go で書かれた JSend の実装。
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - JSON ログ用のインタラクティブなビューアー。
- [jump](https://github.com/gsamokovarov/jump) - Jump は、あなたの習慣を学習して、より速いナビゲーションを支援します。
- [just](https://github.com/kazhuravlev/just) - ジェネリックなデータ構造を扱うための便利な関数を集めただけのコレクション。
- [koazee](https://github.com/wesovilabs/koazee) - 遅延評価と関数型プログラミングにインスパイアされた、配列の扱いを楽にするライブラリ。
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - 永続的なラベル付け、複数ネットワークのスキャン、Tailscale との連携を備えた、ネットワークデバイスの検出とインベントリ管理。
- [lang](https://github.com/maxbolgarin/lang) - ボイラープレートコードなしで変数、スライス、マップを扱うためのジェネリックなワンライナー集。
- [lets-go](https://github.com/aplescia-chwy/lets-go) - クラウドネイティブな REST API 開発のための共通ユーティリティを提供する Go モジュール。AWS 固有のユーティリティも含まれています。
- [limiters](https://github.com/mennanov/limiters) - 設定可能なバックエンドと分散ロックを備えた、Golang の分散アプリケーション向けレートリミッター。
- [lo](https://github.com/samber/lo) - Go 1.18 以降のジェネリクスに基づく Lodash ライクな Go ライブラリ（map、filter、contains、find など）
- [loncha](https://github.com/kazu/loncha) - 高性能なスライスユーティリティ。
- [lrserver](https://github.com/jaschaephraim/lrserver) - Go 向けの LiveReload サーバー。
- [mani](https://github.com/alajmo/mani) - 複数のリポジトリの管理を支援する CLI ツール。
- [mc](https://github.com/minio/mc) - Minio Client は、Amazon S3 互換のクラウドストレージやファイルシステムを扱うための最小限のツールを提供します。
- [mergo](https://github.com/imdario/mergo) - Golang で構造体やマップをマージするためのヘルパー。設定のデフォルト値に便利で、煩雑な if 文を避けられます。
- [mimemagic](https://github.com/zRedShift/mimemagic) - Pure Go による超高性能な MIME スニッフィングライブラリ/ユーティリティ。
- [mimetype](https://github.com/gabriel-vasile/mimetype) - マジックナンバーに基づいて MIME タイプを検出するためのパッケージ。
- [minify](https://github.com/tdewolff/minify) - HTML、CSS、JS、XML、JSON、SVG の各ファイル形式向けの高速なミニファイアー。
- [minquery](https://github.com/icza/minquery) - 効率的なページネーション（中断した箇所からドキュメントの一覧取得を続けるためのカーソル）をサポートする MongoDB / mgo.v2 のクエリ。
- [moldova](https://github.com/StabbyCutyou/moldova) - 入力テンプレートに基づいてランダムなデータを生成するためのユーティリティ。
- [mole](https://github.com/davrodpin/mole) - SSH トンネルを簡単に作成するための CLI アプリ。
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - 通常のクエリと集計パイプラインの両方をサポートする、公式の mongodb/mongo-go-driver パッケージ向けの Mongodb ページネーション。
- [mssqlx](https://github.com/linxGnu/mssqlx) - データベースクライアントライブラリ。あらゆるマスター/スレーブ構成やマスター/マスター構成のプロキシとして機能します。軽量さと自動バランシングを念頭に置いて設計されています。
- [multitick](https://github.com/VividCortex/multitick) - 同期したティッカーのためのマルチプレクサー。
- [netbug](https://github.com/e-dard/netbug) - サービスのリモートプロファイリングを簡単に。
- [nfdump](https://github.com/chrispassas/nfdump) - nfdump の netflow ファイルを読み込みます。
- [nostromo](https://github.com/pokanop/nostromo) - 強力なエイリアスを構築するための CLI。
- [okrun](https://github.com/xta/okrun) - go run のエラーを強引に押しつぶすツール。
- [olaf](https://github.com/btnguyen2k/olaf) - Go で実装された Twitter Snowflake。
- [onecache](https://github.com/adelowo/onecache) - 複数のバックエンドストア（Redis、Memcached、ファイルシステムなど）をサポートするキャッシュライブラリ。
- [optional](https://github.com/kazhuravlev/optional) - オプショナルな構造体フィールドと変数。
- [panicparse](https://github.com/maruel/panicparse) - 類似したゴルーチンをグループ化し、スタックダンプを色付けします。
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - パターンマッチングライブラリ。
- [peco](https://github.com/peco/peco) - シンプルなインタラクティブフィルタリングツール。
- [pgo](https://github.com/arthurkushman/pgo) - PHP コミュニティのための便利な関数群。
- [pm](https://github.com/VividCortex/pm) - HTTP API を備えたプロセス（つまりゴルーチン）マネージャー。
- [pointer](https://github.com/xorcare/pointer) - pointer パッケージには、基本型のオプショナルなフィールドの作成を簡素化するためのヘルパールーチンが含まれています。
- [ptr](https://github.com/gotidy/ptr) - 基本型の定数からポインターを簡単に作成するための関数を提供するパッケージ。
- [rate](https://github.com/webriots/rate) - トークンバケットと AIMD の戦略を備えた、高性能なレート制限ライブラリ。
- [rclient](https://github.com/zpatrick/rclient) - REST API のための、読みやすく柔軟で使いやすいクライアント。
- [release](https://github.com/tomodian/release) - Keep-a-changelog 形式の変更履歴のための CLI。
- [relimpact](https://github.com/hashmap-kz/relimpact) - Go プロジェクト向けの高速な API 互換性レポート。
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - スマートフォンからマウスとキーボードを操作します。
- [repeat](https://github.com/ssgreg/repeat) - 操作のリトライやハートビートに役立つ、さまざまなバックオフ戦略の Go 実装。
- [request](https://github.com/mozillazg/request) - 人間のための Go HTTP リクエスト™。
- [rerun](https://github.com/ivpusic/rerun) - ソースが変更されたときに Go アプリを再コンパイルして再実行します。
- [rest-go](https://github.com/edermanoel94/rest-go) - REST API を扱うための便利なメソッドを多数提供するパッケージ。
- [retro](https://github.com/goioc/retro) - 高い柔軟性（バックオフ戦略、上限など）を備えた、エラー時にリトライする便利なライブラリ。
- [retry](https://github.com/kamilsk/retry) - 成功するまでアクションを繰り返し実行するための、最も高度な関数型の仕組み。
- [retry](https://github.com/percolate/retry) - Go 向けの、シンプルでありながら高度に設定可能なリトライパッケージ。
- [retry](https://github.com/thedevsaddam/retry) - Go 向けのシンプルで簡単なリトライ機構パッケージ。
- [retry](https://github.com/shafreeck/retry) - 作業を確実に完了させるための、とてもシンプルなライブラリ。
- [retry-go](https://github.com/avast/retry-go) - リトライ機構のためのシンプルなライブラリ。
- [retry-go](https://github.com/rafaeljesus/retry-go) - Golang でのリトライをシンプルかつ簡単に。
- [robustly](https://github.com/VividCortex/robustly) - パニックを捕捉して再起動しながら、関数をレジリエントに実行します。
- [rospo](https://github.com/ferama/rospo) - Golang による、組み込み SSH サーバーを備えたシンプルで信頼性の高い SSH トンネル。
- [scan](https://github.com/blockloop/scan) - Golang の `sql.Rows` を構造体、スライス、プリミティブ型に直接スキャンします。
- [scan](https://github.com/wroge/scan) - ジェネリクスを活用して、SQL の行を任意の型にスキャンします。
- [scany](https://github.com/georgysavva/scany) - データベースのデータを Go の構造体などにスキャンするためのライブラリ。
- [serve](https://github.com/syntaqx/serve) - 必要な場所でどこでも使える静的 HTTP サーバー。
- [sesh](https://github.com/joshmedeski/sesh) - Sesh は、zoxide を使って tmux セッションを素早く簡単に作成・管理できるようにする CLI です。
- [set](https://github.com/nofeaturesonlybugs/set) - 高性能で柔軟な構造体マッピングと緩やかな型変換。
- [shutdown](https://github.com/ztrue/shutdown) - `os.Signal` を処理するためのアプリのシャットダウンフック。
- [silk](https://github.com/chrispassas/silk) - silk の netflow ファイルを読み込みます。
- [slice](https://github.com/psampaz/slice) - 一般的な Go のスライス操作のための型安全な関数群。
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - プリミティブ型間のスライス変換。
- [slicer](https://github.com/leaanthony/slicer) - スライスの扱いを容易にします。
- [sorty](https://github.com/jfcg/sorty) - 高速な並行/並列ソート。
- [sqlex](https://github.com/go-sqlex/sqlex) - SQL レキサーのバグ修正、IN 句の自動展開、プラガブルなフック、統一された DB/Tx/Conn インターフェースを備えた、jmoiron/sqlx をそのまま置き換えられる近代化版。
- [sqlx](https://github.com/jmoiron/sqlx) - 優れた組み込みの database/sql パッケージの上に、一連の拡張機能を提供します。
- [sqlz](https://github.com/rfberaldo/sqlz) - 名前付きクエリ、構造体へのスキャン、バッチ操作を追加する、database/sql パッケージの拡張。
- [sshman](https://github.com/shoobyban/sshman) - 複数のリモートサーバー上の authorized_keys ファイルのための SSH マネージャー。
- [stacktower](https://github.com/stacktower-io/stacktower) - XKCD #2347 にインスパイアされた、依存関係グラフを物理的なタワー構造として可視化するツール。
- [statiks](https://github.com/janiltonmaciel/statiks) - 高速で設定不要の、静的 HTTP ファイルサーバー。
- [Storm](https://github.com/asdine/storm) - BoltDB のためのシンプルで強力なツールキット。
- [structs](https://github.com/PumpkinSeed/structs) - 構造体を操作するためのシンプルな関数を実装しています。
- [throttle](https://github.com/yudppp/throttle) - Throttle は、一定時間ごとにちょうど 1 回のアクションを実行するオブジェクトです。
- [tik](https://github.com/andy2046/tik) - Go 向けのシンプルで簡単なタイミングホイールパッケージ。
- [tome](https://github.com/cyruzin/tome) - Tome は、シンプルな RESTful API をページネーションするために設計されました。
- [toolbox](https://github.com/viant/toolbox) - スライス、マップ、マルチマップ、構造体、関数、データ変換のユーティリティ。サービスルーター、マクロ評価器、トークナイザーも備えています。
- [UNIS](https://github.com/esemplastic/unis) - Go における文字列ユーティリティのための Common Architecture™。
- [upterm](https://github.com/owenthereal/upterm) - 開発者がターミナル/tmux セッションを Web 経由で安全に共有するためのツール。リモートでのペアプログラミング、NAT やファイアウォールの背後にあるコンピューターへのアクセス、リモートデバッグなどに最適です。
- [usql](https://github.com/knq/usql) - usql は、SQL データベースのための汎用コマンドラインインターフェースです。
- [util](https://github.com/shomali11/util) - 便利なユーティリティ関数のコレクション（文字列、並行処理、操作など）。
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - コマンドを定期的に実行し、最新の STDOUT やその詳細な差分を HTTP エンドポイントとして公開します。
- [wifiqr](https://github.com/reugn/wifiqr) - Wi-Fi の QR コードジェネレーター。
- [wuzz](https://github.com/asciimoo/wuzz) - HTTP の調査のためのインタラクティブな CLI ツール。
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy は、Golang によるバイナリの差分とパッチのライブラリを提供します。
- [xpool](https://github.com/peczenyj/xpool) - ジェネリクスを使った、Golang のもう一つの型安全なオブジェクトプール。
- [yogo](https://github.com/antham/yogo) - コマンドラインから yopmail のメールを確認します。

**[⬆ トップに戻る](#contents)**

## UUID

_UUID を扱うためのライブラリ。_

- [fastuuid](https://github.com/rekby/fastuuid) - UUIDv4 を文字列またはバイト列として高速に生成します。
- [goid](https://github.com/jakehl/goid) - RFC4122 に準拠した V4 UUID を生成・解析します。
- [gouid](https://github.com/twharmon/gouid) - わずか 1 回のアロケーションで、暗号学的に安全なランダム文字列 ID を生成します。
- [guid](https://github.com/sdrapkin/guid) - Go 向けの高速で暗号学的に安全な GUID ジェネレーター（`uuid` より約 10 倍高速）。
- [nanoid](https://github.com/aidarkhanov/nanoid) - 小さく効率的な Go の一意文字列 ID ジェネレーター。
- [nanoid](https://github.com/sixafter/nanoid) - NanoID と UUID を高速かつ並行して作成するための、効率的で暗号学的に安全なジェネレーター。
- [sno](https://github.com/muyo/sno) - メタデータを埋め込んだ、コンパクトでソート可能かつ高速な一意 ID。
- [ulid](https://github.com/oklog/ulid) - ULID（Universally Unique Lexicographically Sortable Identifier）の Go 実装。
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - コマンドで手軽に使える、安全で高速な一意識別子。
- [uuid](https://github.com/agext/uuid) - 高速または暗号品質のランダムなノード識別子を使って、UUID v1 を生成、エンコード、デコードします。
- [uuid](https://github.com/gofrs/uuid) - Universally Unique Identifier（UUID）の実装。UUID の作成と解析の両方をサポートしています。satori uuid の、活発にメンテナンスされているフォークです。
- [uuid](https://github.com/google/uuid) - RFC 4122 と DCE 1.1: Authentication and Security Services に基づく UUID のための Go パッケージ。
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - UUID を標準の RFC 4122 形式に照らして検証し、UUIDv7() を UTC タイムスタンプに変換する、小さく依存関係のない Go ライブラリ。
- [wuid](https://github.com/edwingeng/wuid) - 非常に高速な、グローバルに一意な番号のジェネレーター。
- [xid](https://github.com/rs/xid) - Xid は、サーバーコードで直接安全に使用できる、グローバルに一意な ID ジェネレーターライブラリです。

**[⬆ トップに戻る](#contents)**

## バリデーション

_バリデーションのためのライブラリ。_

- [checkdigit](https://github.com/osamingo/checkdigit) - チェックディジットのアルゴリズム（Luhn、Verhoeff、Damm）と計算機（ISBN、EAN、JAN、UPC など）を提供します。
- [checker](https://github.com/cinar/checker) - 構造体タグ、23 のロケール、JSON Schema の生成に対応した、依存関係ゼロの入力バリデーションとインプレースな正規化。
- [go-validator](https://github.com/tiendc/go-validator) - ジェネリクスを使ったバリデーションライブラリ。
- [gody](https://github.com/guiferpa/gody) - :balloon: Go 向けの軽量な構造体バリデーター。
- [govalid](https://github.com/twharmon/govalid) - 構造体のための、高速なタグベースのバリデーション。
- [govalidator](https://github.com/asaskevich/govalidator) - 文字列、数値、スライス、構造体のためのバリデーターとサニタイザー。
- [govalidator](https://github.com/thedevsaddam/govalidator) - シンプルなルールで Golang のリクエストデータを検証します。Laravel のリクエストバリデーションに強くインスパイアされています。
- [govy](https://github.com/nobl9/govy) - 関数型インターフェース上の強く型付けされたバリデーションルール。ジェネリクスを活用し、リフレクションを使わず、明確で情報量の多いエラーメッセージの作成に重点を置いています。
- [hvalid](https://github.com/lyonnee/hvalid) hvalid は、Go 言語で書かれた軽量なバリデーションライブラリです。カスタムバリデーターのインターフェースと一連の一般的なバリデーション関数を提供し、開発者がデータのバリデーションを素早く実装できるよう支援します。
- [jio](https://github.com/faceair/jio) - jio は、[joi](https://github.com/hapijs/joi) に似た JSON スキーマバリデーターです。
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - 構造体タグではなく通常のコード構文で指定する、設定可能で拡張可能なバリデーションルールにより、さまざまなデータ型（構造体、文字列、マップ、スライスなど）のバリデーションをサポートします。
- [validate](https://github.com/gookit/validate) - データのバリデーションとフィルタリングのための Go パッケージ。Map、Struct、Request（Form、JSON、url.Values、アップロードされたファイル）データのバリデーションなど、さまざまな機能をサポートしています。
- [validate](https://github.com/gobuffalo/validate) - このパッケージは、Go アプリケーションのバリデーションを書くためのフレームワークを提供します。
- [validator](https://github.com/go-playground/validator) - クロスフィールド、クロス構造体、マップ、スライス、配列の深い検証を含む、Go の構造体とフィールドのバリデーション。
- [Validator](https://github.com/go-the-way/validator) - Go で書かれた軽量なモデルバリデーター。VF として Min、Max、MinLength、MaxLength、Length、Enum、Regex を含みます。
- [valix](https://github.com/marrow16/valix) リクエストを検証するための Go パッケージ
- [vx](https://github.com/sevlyar/vx) - 依存関係ゼロで、再構築可能なエラーパスを備えた、小さく組み合わせ可能なチェックから構築されるバリデーション。
- [Zog](https://github.com/Oudwins/zog) - 実行時の値の解析とバリデーションのための、[Zod](https://github.com/colinhacks/zod) にインスパイアされたスキーマビルダー。
  **[⬆ トップに戻る](#contents)**

## バージョン管理

_バージョン管理のためのライブラリ。_

- [cli](https://gitlab.com/gitlab-org/cli) - GitLab の便利な機能をコマンドラインにもたらす、オープンソースの GitLab コマンドラインツール。
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go は、VCS プロバイダーに対してアクションを実行できる Go ライブラリです。
- [ggc](https://github.com/bmf-san/ggc) - 従来のコマンドラインと、インタラクティブなインクリメンタルサーチ UI の両方を備え、ワークフローのサポートと設定可能なキーバインドを持つ Git CLI ツール。
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Ollama を使ってトークンを節約し、シークレットの漏洩を防ぐ、Git 操作のためのローカル MCP サーバー。
- [git2go](https://github.com/libgit2/git2go) - libgit2 の Go バインディング。
- [githooks](https://github.com/gabyx/githooks) - バージョン管理と自動更新を備えた、リポジトリごとおよび共有の Git フック。
- [gitty](https://github.com/Omibranch/gitty) - add→commit→push を 1 つのコマンドに置き換える、単一バイナリの Git/GitHub CLI。人間が読みやすい構文で、外部依存関係はありません。
- [go-git](https://github.com/go-git/go-git) - Pure Go による高度に拡張可能な Git 実装。
- [go-vcs](https://github.com/sourcegraph/go-vcs) - Go で VCS リポジトリを操作・調査します。
- [hercules](https://github.com/src-d/hercules) - Git リポジトリの履歴から高度な洞察を得ます。
- [hgo](https://github.com/beyang/hgo) - Hgo は、ローカルの Mercurial リポジトリへの読み取りアクセスを提供する Go パッケージのコレクションです。

**[⬆ トップに戻る](#contents)**

## 動画

_動画を操作するためのライブラリ。_

- [gmf](https://github.com/3d0c/gmf) - FFmpeg の av\* ライブラリの Go バインディング。
- [go-astiav](https://github.com/asticode/go-astiav) - GO における ffmpeg のより良い C バインディング。
- [go-astisub](https://github.com/asticode/go-astisub) - GO で字幕（.srt、.stl、.ttml、.webvtt、.ssa/.ass、teletext、.smi など）を操作します。
- [go-astits](https://github.com/asticode/go-astits) - GO で MPEG トランスポートストリーム（.ts）をネイティブに解析・分離します。
- [go-mpd](https://github.com/unki2aut/go-mpd) - MPEG-DASH のマニフェストファイルのためのパーサー兼ジェネレーターライブラリ。
- [goav](https://github.com/giorgisio/goav) - FFmpeg の包括的な Go バインディング。
- [gortsplib](https://github.com/aler9/gortsplib) - Pure Go の RTSP サーバー・クライアントライブラリ。
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - HLS（M3U8）プレイリストのパーサー兼ジェネレーター。仕様に合わせて常に最新の状態に保たれています。
- [libvlc-go](https://github.com/adrg/libvlc-go) - libvlc 2.X/3.X/4.X（VLC メディアプレーヤーで使用）の Go バインディング。
- [manifestor](https://github.com/alanzng/manifestor) - HLS と DASH のマニフェストを解析、フィルタリング、変換、構築するための、依存関係ゼロのライブラリ。
* [mosaic](https://github.com/farshidrezaei/mosaic) - Go 向けの、予測可能で本番環境対応のアダプティブビットレート（ABR）動画パッケージング（HLS と DASH CMAF）。
- [mp4ff](https://github.com/Eyevinn/mp4ff) - 動画、音声、字幕、メタデータを含む MP4 ファイルを扱うためのライブラリとツール。
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - PCR タイミングの準拠性をチェックし、低レベルの TS、PSI、PES 構造をダンプする、MPEG-2 トランスポートストリームのアナライザー。
- [v4l](https://github.com/korandiz/v4l) - Go で書かれた、Linux 向けの動画キャプチャライブラリ。

**[⬆ トップに戻る](#contents)**

## Web フレームワーク

_フルスタックの Web フレームワーク。_

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - ルーター、ミドルウェアスタック、WebSocket ハブ、ファイルアップロード、OpenAPI バリデーションを備えた、必要な機能がすべて揃った HTTP サーバーライブラリ。
- [Andurel](https://github.com/mbvlabs/andurel) - スキャフォールディング、データベースツール、サーバーレンダリングまたは Inertia のフロントエンドを備えた、Rails にインスパイアされたフルスタックの Go Web フレームワーク。
- [Atreugo](https://github.com/savsgio/atreugo) - ホットパスでのメモリアロケーションがゼロの、高性能で拡張可能なマイクロ Web フレームワーク。
- [Barf](https://github.com/opensaucerer/barf) - JSON ベースの Web API を構築するための、基本的に素晴らしいフレームワーク（Basically, A Remarkable Framework）。完全に控えめで、車輪の再発明はしません。簡単かつ素早く始められる一方で、より複雑なユースケースにも対応できる柔軟性を備えるように作られています。
- [Beego](https://github.com/beego/beego) - beego は、Go プログラミング言語向けのオープンソースで高性能な Web フレームワークです。
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti は、表現力豊かでエレガントな構文を備えた Go の Web アプリケーションフレームワークです。Laravel のエレガントさと Go のシンプルさを兼ね備えています。
- [Don](https://github.com/abemedia/go-don) - 非常に高性能で使いやすい API フレームワーク。
- [doors](https://github.com/doors-dev/doors) - ステートフルでリアクティブな Web アプリケーションをすべて Go で構築するための、サーバー駆動型フレームワーク。
- [Echo](https://github.com/labstack/echo) - 高性能でミニマルな Go の Web フレームワーク。
- [Fastschema](https://github.com/fastschema/fastschema) - 柔軟な Go の Web フレームワーク兼ヘッドレス CMS。
- [Fiber](https://github.com/gofiber/fiber) - Fasthttp 上に構築された、Express.js にインスパイアされた Web フレームワーク。
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - プラガブルな Web プロジェクトのためのフレームワーク。モジュールの概念を含み、DI、Configareas、i18n、テンプレートエンジン、graphql、可観測性、セキュリティ、イベント、ルーティング＆リバースルーティングなどの機能を提供します。
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - DDD やポートとアダプターのようなクリーンアーキテクチャを用いた EC 機能を提供し、柔軟な EC アプリケーションの構築に利用できます。
- [Fuego](https://github.com/go-fuego/fuego) - 忙しい Go 開発者のためのフレームワーク！ソースコードから OpenAPI 3 仕様を生成する Web フレームワークです。
- [Gin](https://github.com/gin-gonic/gin) - Gin は Go で書かれた Web フレームワークです！martini ライクな API を備えながら、パフォーマンスははるかに優れており、最大 40 倍高速です。パフォーマンスと高い生産性が必要な場合に最適です。
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Gin のパラメーター自動バインディングツール。gin の RPC ツールです。
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - gRpc ファーストのマイクロサービスフレームワーク。Mongo 向けの ODM サポート、クラウドリソースのサポート（AWS/Azure/Google）、gRpc 向けにカスタマイズされた流れるような依存性注入などの機能を備えています。さらに grpc-web を直接サポートしており、プロキシなしでブラウザーからすべての gRpc API にアクセスできます。
- [Goa](https://github.com/goadesign/goa) - Goa は、Go でリモート API とマイクロサービスを開発するための総合的なアプローチを提供します。
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr は、設計思想が明確なマイクロサービス開発フレームワークです。
- [GoFrame](https://github.com/gogf/gf) - GoFrame は、モジュール式で強力、高性能なエンタープライズクラスの Golang アプリケーション開発フレームワークです。
- [Gone](https://github.com/gone-io/gone) - Spring にインスパイアされた、軽量な依存性注入兼 Web フレームワーク。
- [goravel](https://github.com/goravel/goravel) - ORM、認証、キュー、タスクスケジューリングなどの機能を組み込んだ、Laravel にインスパイアされた Web フレームワーク。
- [Goshtoso](https://github.com/araihu/goshtoso) - templ、Tailwind CSS、HTMX、Alpine.js で構築された、Go アプリケーション向けのサーバーレンダリング UI コンポーネント。
- [Goyave](https://github.com/go-goyave/goyave) - クリーンなコードと迅速な開発を目指した、強力な組み込み機能を備えたフル機能の REST API フレームワーク。
- [Hertz](https://github.com/cloudwego/hertz) - 開発者がマイクロサービスを構築するのを支援する、高性能で拡張性に優れた Go の HTTP フレームワーク。
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot は、自動設定と依存性注入をサポートする高性能な Web アプリケーションフレームワークです。
- [httpsuite](https://github.com/rluders/httpsuite) - 標準ライブラリのみのコアとオプションのバリデーションを備えた、Go 向けの HTTP リクエスト解析と RFC 9457 の問題レスポンス。
- [Huma](https://github.com/danielgtaylor/huma/) - OpenAPI 3、生成されたドキュメント、CLI を組み込んだ、モダンな REST/GraphQL API のためのフレームワーク。
- [iWF](https://github.com/indeedeng/iwf) - iWF は、長時間実行されるビジネスプロセスを開発するためのオールインワンプラットフォームです。データベース、ElasticSearch、メッセージキュー、永続的なタイマーなどを活用するための便利な抽象化を、クリーンでシンプルかつ使いやすいインターフェースで提供します。
- [Lit](https://github.com/jvcoutinho/lit) - シンプルさと快適さを目指した、Golang 向けの非常に高性能な宣言的 Web フレームワーク。
- [Microservice](https://github.com/claygod/microservice) - Golang で書かれた、マイクロサービスを作成するためのフレームワーク。
- [NotNet](https://github.com/nottechdm/notnet) - ミドルウェアと柔軟なルーティングを備え、高速で使い勝手の良い RESTful API を構築するための軽量な Go フレームワーク。
- [patron](https://github.com/beatlabs/patron) - Patron は、生産性に重点を置き、クラウドのベストプラクティスに従ったマイクロサービスフレームワークです。
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux は、正規表現を使って HTTP リクエストのマッチングと処理を行う強力な Go の Web フレームワークです。CORS の処理、構造化ロギング、URL パラメーターの抽出、ミドルウェア、並行数の制限などの機能を提供します。
- [Revel](https://github.com/revel/revel) - Go 言語向けの高生産性 Web フレームワーク。
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - Gin と gRPC を使ってエンタープライズ向けの Go マイクロサービスを素早く簡単に構築するためのブートストラッパーライブラリ。
- [Ronykit](https://github.com/clubpay/ronykit) - プラガブルなアーキテクチャを備えた、非常に高性能な Web フレームワーク。
- [rux](https://github.com/gookit/rux) - Golang の HTTP アプリケーションを構築するための、シンプルで高速な Web フレームワーク。
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - Go と templ 向けの非公式な shadcn/ui の移植版：CLI とレジストリを備えたアクセシブルな UI コンポーネント。
- [togo](https://github.com/togo-framework/togo) - Go のバックエンドと React のフロントエンドを単一のバイナリとして提供するフルスタックフレームワーク。Laravel の artisan 並みの CLI を備えています。
- [uAdmin](https://github.com/uadmin/uadmin) - Django にインスパイアされた、Golang 向けのフル機能の Web フレームワーク。
- [WebGo](https://github.com/naughtygopher/webgo) - ハンドラーチェーン、ミドルウェア、コンテキストの注入を備えた、Web アプリを構築するためのマイクロフレームワーク。標準ライブラリに準拠した HTTP ハンドラー（つまり `http.HandlerFunc`）を使用します。
- [Xun](https://github.com/yaitoo/xun) - Go の組み込みの html/template と net/http パッケージのルーター上に構築された Web フレームワーク。軽量・高速で使いやすいように設計されており、ミドルウェア、ルーティング、テンプレートレンダリングなどの高度な機能を備えた Web アプリケーションを構築するための、シンプルで直感的な API を提供します。
- [Yokai](https://github.com/ankorstore/yokai) - バックエンドアプリケーションのための、シンプルでモジュール式、かつ可観測性の高い Go フレームワーク。

**[⬆ トップに戻る](#contents)**

### ミドルウェア

#### ミドルウェア本体

- [client-timing](https://github.com/posener/client-timing) - Server-Timing ヘッダーのための HTTP クライアント。
- [CORS](https://github.com/rs/cors) - API に CORS の機能を簡単に追加します。
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - ロギングとメトリクスを備えた、Echo フレームワーク向けのミドルウェア。
- [formjson](https://github.com/rs/formjson) - JSON の入力を標準的なフォームの POST として透過的に処理します。
- [go-fault](https://github.com/github/go-fault) - Go 向けの障害注入ミドルウェア。
- [Limiter](https://github.com/ulule/limiter) - Go 向けの非常にシンプルなレート制限ミドルウェア。
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Lightning Network（Bitcoin）でリクエストごとに API を収益化するための Go ミドルウェア。
- [mid](https://github.com/bobg/mid) - さまざまな HTTP ミドルウェアの機能：ハンドラーからのイディオマティックなエラーの返却、JSON データの受信/応答、リクエストのトレーシングなど。
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - ロギング、メトリクス、認証、トレーシングなどを備えた、Gin フレームワーク向けのミドルウェア。
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - ロギング、メトリクス、認証、トレーシングなどを備えた、gRPC 向けのミドルウェア。
- [Tollbooth](https://github.com/didip/tollbooth) - HTTP リクエストのレート制限ハンドラー。
- [XFF](https://github.com/sebest/xff) - `X-Forwarded-For` ヘッダーとその仲間を処理します。

#### HTTP ミドルウェア作成用ライブラリ

- [alice](https://github.com/justinas/alice) - Go 向けの手間いらずなミドルウェアチェーン。
- [catena](https://github.com/codemodus/catena) - http.Handler ラッパーの連結（「chain」と同じ API）。
- [chain](https://github.com/codemodus/chain) - スコープ付きデータを伴うハンドラーラッパーのチェーン（net/context ベースの「ミドルウェア」）。
- [gores](https://github.com/alioygur/gores) - HTML、JSON、XML などのレスポンスを処理する Go パッケージ。RESTful API に便利です。
- [interpose](https://github.com/carbocation/interpose) - Golang 向けのミニマルな net/http ミドルウェア。
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - `http.Client` にインターセプターを追加し、リクエスト/レスポンスのダンプ/整形/トレーシングなどを可能にします。
- [muxchain](https://github.com/stephens2424/muxchain) - net/http 向けの軽量なミドルウェア。
- [negroni](https://github.com/urfave/negroni) - Golang 向けのイディオマティックな HTTP ミドルウェア。
- [render](https://github.com/unrolled/render) - JSON、XML、HTML テンプレートのレスポンスを簡単にレンダリングするための Go パッケージ。
- [renderer](https://github.com/thedevsaddam/renderer) - Go 向けの、シンプルで軽量かつ高速なレスポンス（JSON、JSONP、XML、YAML、HTML、ファイル）レンダリングパッケージ。
- [stats](https://github.com/thoas/stats) - Web アプリケーションに関するさまざまな情報を保存する Go ミドルウェア。

**[⬆ トップに戻る](#contents)**

### ルーター

- [alien](https://github.com/gernest/alien) - 宇宙からやってきた、軽量で高速な HTTP ルーター。
- [bellt](https://github.com/GuilhermeCaruso/bellt) - シンプルな Go の HTTP ルーター。
- [Bone](https://github.com/go-zoo/bone) - 超高速な HTTP マルチプレクサー。
- [Bxog](https://github.com/claygod/Bxog) - Go 向けのシンプルで高速な HTTP ルーター。さまざまな複雑さ、長さ、ネストのルートに対応しています。また、受け取ったパラメーターから URL を作成することもできます。
- [chi](https://github.com/go-chi/chi) - net/context 上に構築された、小さく高速で表現力豊かな HTTP ルーター。
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - `httprouter` からフォークされた高性能なルーター。`fasthttp` に適合した最初のルーターです。
- [FastRouter](https://github.com/razonyang/fastrouter) - Go で書かれた、高速で柔軟な HTTP ルーター。
- [Fox](https://github.com/fox-toolkit/fox) - 実行時のルート変更を第一級でサポートする、リバースプロキシや API ゲートウェイを構築するための高性能な HTTP ルーター。
- [fursy](https://github.com/coregx/fursy) - 型安全なジェネリックハンドラー、コードからの OpenAPI 3.1 の自動生成、RFC 9457 のエラーレスポンスを備えた HTTP ルーター。
- [goblin](https://github.com/bmf-san/goblin) - トライ木に基づく Golang の HTTP ルーター。
- [gocraft/web](https://github.com/gocraft/web) - Go によるマルチプレクサーとミドルウェアのパッケージ。
- [Goji](https://github.com/goji/goji) - Goji は、`net/context` をサポートする、ミニマルで柔軟な HTTP リクエストマルチプレクサーです。
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router は、Go プログラミング言語向けの軽量かつ強力な HTTP ルーターです。
- [goroute](https://github.com/goroute/route) - シンプルでありながら強力な HTTP リクエストマルチプレクサー。
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter は、サーバー/API のマイクロフレームワーク、HTTP リクエストルーター、マルチプレクサーであり、`net/context` をサポートするミドルウェア付きのリクエストルーターを提供します。
- [gowww/router](https://github.com/gowww/router) - net/http.Handler インターフェースと完全に互換性のある、超高速な HTTP ルーター。
- [httprouter](https://github.com/julienschmidt/httprouter) - 高性能なルーター。これと標準の HTTP ハンドラーを組み合わせることで、非常に高性能な Web フレームワークを構成できます。
- [httptreemux](https://github.com/dimfeld/httptreemux) - Go 向けの高速で柔軟なツリーベースの HTTP ルーター。httprouter にインスパイアされています。
- [lars](https://github.com/go-playground/lars) - カスタマイズ可能なフレームワークを作成するために使われる、Go 向けの軽量・高速で拡張可能なゼロアロケーションの HTTP ルーターです。
- [mux](https://github.com/gorilla/mux) - Golang 向けの強力な URL ルーター兼ディスパッチャー。
- [nchi](https://github.com/muir/nchi) - 依存性注入ベースのミドルウェアラッパーを備え、httprouter 上に構築された chi ライクなルーター
- [ngamux](https://github.com/ngamux/ngamux) - Go 向けのシンプルな HTTP ルーター。
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - 正規表現によるルートマッチングをサポートする、非常に高速な Go（golang）の HTTP ルーター。RESTful API の構築を完全にサポートしています。
- [pure](https://github.com/go-playground/pure) - 標準の「net/http」の実装に忠実な、軽量な HTTP ルーターです。
- [Siesta](https://github.com/VividCortex/siesta) - ミドルウェアとハンドラーを書くための、組み合わせ可能なフレームワーク。
- [vestigo](https://github.com/husobee/vestigo) - Go の Web アプリケーション向けの、高性能でスタンドアロン、HTTP に準拠した URL ルーター。
- [violetear](https://github.com/nbari/violetear) - Go の HTTP ルーター。
- [xmux](https://github.com/rs/xmux) - `net/context` をサポートする、`httprouter` ベースの高性能なマルチプレクサー。
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Go 向けのシンプルで高速な HTTP ルーター。

**[⬆ トップに戻る](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - DOM ライブラリ。
- [Extism Go SDK](https://github.com/extism/go-sdk) - プラグインシステムやポリグロットアプリを構築するための、汎用的で言語を横断する WebAssembly フレームワーク。
- [go-canvas](https://github.com/markfarnan/go-canvas) - すべての描画を Go のコード内で行う、HTML5 Canvas を使うためのライブラリ。
- [tinygo](https://github.com/tinygo-org/tinygo) - 小さな環境のための Go コンパイラー。マイクロコントローラー、WebAssembly、コマンドラインツールに対応しています。LLVM ベースです。
- [vert](https://github.com/norunners/vert) - Go と JS の値の相互運用。
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - ブラウザーで Go の WASM テストを実行します。
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Wasmtime WebAssembly ランタイムの Go バインディング（WASI サポート、JIT/AOT、安全で高速な組み込み）。
- [webapi](https://github.com/gowebapi/webapi) - WebIDL から生成された DOM と HTML のバインディング。

**[⬆ トップに戻る](#contents)**

## Webhook サーバー

- [HookRun](https://github.com/bluvenr/hookrun) - トークン/HMAC/IP 認証とホットリロードを備え、YAML のルールからコマンドやスクリプトを実行する軽量な Webhook アクションエンジン（約 3MB の単一バイナリ、依存関係ゼロ）。
- [webhook](https://github.com/adnanh/webhook) - サーバー上でコマンドを実行する HTTP エンドポイント（フック）を作成できるツール。
- [webhooked](https://github.com/42Atomys/webhooked) - 強化版の Webhook レシーバー：Webhook のペイロードの処理、保護、整形、保存がかつてないほど簡単になります。
- [WebhookX](https://github.com/webhookx-io/webhookx) - メッセージの受信、処理、確実な配信のための Webhook ゲートウェイ。

**[⬆ トップに戻る](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Direct3D9 の Go バインディング。
- [go-ole](https://github.com/go-ole/go-ole) - Golang 向けの Win32 OLE の実装。
- [gosddl](https://github.com/MonaxGT/gosddl) - SDDL 文字列をわかりやすい JSON に変換するツール。SDDL は Owner、Primary Group、DACL、SACL の 4 つの部分で構成されます。
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - go-ole を使った、Windows Update Agent API の Golang バインディング。

**[⬆ トップに戻る](#contents)**

## ワークフローフレームワーク

_ワークフローを作成するためのライブラリ。_

- [Cadence-client](https://github.com/uber-go/cadence-client) - Uber が開発した Cadence オーケストレーションエンジン上で動作するワークフローとアクティビティを作成するためのフレームワーク。
- [Dagu](https://github.com/dagu-go/dagu) - ノーコードのワークフロー実行ツール。シンプルな YAML 形式で定義された DAG を実行します。
- [durable-go](https://github.com/agenticenv/durable-go) - シングルプロセスの Go アプリや AI エージェントのための、依存関係ゼロの永続的実行エンジン。
- [Flowbaker](https://github.com/flowbaker/flowbaker) - ノーコードのワークフローを構築、接続、自動化するためのセルフホスト型の実行エンジン。
- [go-dag](https://github.com/rhosocial/go-dag) - 有向非巡回グラフで記述されたワークフローの実行を管理する、Go で開発されたフレームワーク。
- [go-taskflow](https://github.com/noneback/go-taskflow) - ビジュアライザーとプロファイラーを統合した、taskflow ライクな汎用タスク並列プログラミングフレームワーク。
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - Web コンソールを組み込み、Postgres、MySQL、SQLite をバックエンドとする永続的なワークフローエンジン。
- [workflow](https://github.com/luno/workflow) - 技術スタックに依存しない、イベント駆動型のワークフローフレームワーク。

**[⬆ トップに戻る](#contents)**

## XML

_XML を操作するためのライブラリとツール。_

- [XML-Comp](https://github.com/xml-comp/xml-comp) - フォルダー、ファイル、タグの差分を生成する、シンプルなコマンドラインの XML 比較ツール。
- [xml2map](https://github.com/sbabiv/xml2map) - Golang で書かれた XML から MAP への変換ツール。
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery は、XML をクエリするための Golang の XPath パッケージです。
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - libxml2 の xmlwriter モジュールに基づく、手続き的な XML 生成 API。
- [xpath](https://github.com/antchfx/xpath) - Go 向けの XPath パッケージ。
- [zek](https://github.com/miku/zek) - XML から Go の構造体を生成します。

## ゼロトラスト

_ゼロトラストアーキテクチャを実装するためのライブラリとツール。_

- [Cosign](https://github.com/sigstore/cosign) - OCI レジストリにおけるコンテナの署名、検証、保存。
- [in-toto](https://github.com/in-toto/in-toto-golang) - in-toto（ソフトウェアサプライチェーンの完全性を保護するためのフレームワークを提供）の Python リファレンス実装の Go 実装。
- [OpenZiti](https://github.com/openziti/ziti) - 完全なオープンソースのゼロトラストオーバーレイネットワーク。[golang](https://github.com/openziti/sdk-golang) をはじめとする多数の言語向けの SDK が含まれており、ゼロトラストの原則をアプリケーションに直接組み込めます。[OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) には、[ゼロトラスト SSH クライアント - zssh](https://github.com/openziti-test-kitchen/zssh) など、参考になる例が多数あります
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Spiffe の JWT 認証を Hashicorp Vault と組み合わせて、シークレットレスな認証を実現します。
- [Spire](https://github.com/spiffe/spire) - SPIRE（SPIFFE Runtime Environment）は、さまざまなホスティングプラットフォームにまたがるソフトウェアシステム間で信頼を確立するための API のツールチェーンです。

## コード解析

_ソースコード解析ツール。静的アプリケーションセキュリティテスト（SAST）ツールとも呼ばれます。_

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Go プロジェクトの最近の変更に、後方互換性のない変更がないかをチェックします。
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Go などの言語向けの静的コードアナライザー：複雑度、結合度、凝集度、保守性のメトリクスを、HTML、JSON、Markdown、SARIF のレポートで提供します。
- [asty](https://github.com/asty-org/asty) - Golang の AST を JSON に、JSON を AST に変換します。
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket は、Go パッケージ内で直接の単体テストがない関数を見つけるのに役立つツールです。
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Go 言語プロジェクトの GitHub 上の直接の依存関係のうち、ChainJacking 攻撃を受けやすいものを見つけます。
- [Chronos](https://github.com/amit-davidson/Chronos) - 競合状態を静的に検出します
- [deadmono](https://github.com/arxeiss/deadmono) - Go のモノレポでデッドコードを検出するための deadcode のラッパー。
- [dupl](https://github.com/mibk/dupl) - コードクローン検出のためのツール。
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck は、Go プログラムでチェックされていないエラーを検査するためのプログラムです。
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext は、ループや関数リテラル内のネストされたコンテキストを検出します。
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle は、Java の checkstyle のようなスタイルチェックツールです。Java の checkstyle や golint にインスパイアされており、スタイルは Go Code Review Comments のいくつかのポイントを参考にしています。
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch は、Go プロジェクトにおける依存関係のルールやパッケージ間のやり取りなど、クリーンアーキテクチャのルールを検証するために作られました。
- [go-critic](https://github.com/go-critic/go-critic) - 他のリンターではまだ実装されていないチェックを提供するソースコードリンター。
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Go プロジェクトの古い依存関係を簡単に見つける方法。
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - Web ベースの Golang AST ビジュアライザー。
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Go のインポートを自動的に修正（追加、削除）するツール。
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - iFood API の SDK。
- [golangci-lint](https://github.com/golangci/golangci-lint) – 高速な Go リンターランナー。リンターを並列に実行し、キャッシュを使用し、`yaml` 設定をサポートし、すべての主要な IDE と連携でき、数十のリンターが含まれています。
- [golines](https://github.com/segmentio/golines) - Go コードの長い行を自動的に短くするフォーマッター。
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - HTTP リンクの検証機能を組み込んだ Markdown リンター。単一バイナリで、Node.js は不要です。
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - 構造体やインターフェースとそれらの関係に関する情報を含む、テキスト形式の plantump クラス図を生成するライブラリおよび CLI。
- [goreturns](https://github.com/sqs/goreturns) - 関数の戻り値の型に合わせて、ゼロ値の return 文を追加します。
- [gostatus](https://github.com/shurcooL/gostatus) - Go パッケージを含むリポジトリの状態を表示するコマンドラインツール。
- [lint](https://github.com/surullabs/lint) - go test の一部としてリンターを実行します。
- [php-parser](https://github.com/z7zmey/php-parser) - Go で書かれた PHP 用のパーサー。
- [revive](https://github.com/mgechev/revive) – `golint` の約 6 倍高速で、より厳格かつ設定可能、拡張可能で美しいドロップイン置き換え。
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck は強化版の `go vet` で、C# 向けの ReSharper などのツールでおなじみの大量の静的解析チェックを適用します。
- [structalign](https://github.com/peczenyj/structalign) - 構造体のフィールドをどのように並べ替えればメモリ使用量を減らせるかを示します。ファイルを書き換えるのではなく、差分を出力します。
- [stto](https://github.com/mainak55512/stto) - Pure Go で書かれた、軽量で超高速なコード行数カウンター。
- [testifylint](https://github.com/Antonboom/testifylint) – [github.com/stretchr/testify](https://github.com/stretchr/testify) の使い方をチェックするリンター。
- [tickgit](https://github.com/augmentable-dev/tickgit) - （任意の言語の）コードコメント内の TODO を洗い出し、`git blame` を適用して作成者を特定するための CLI および Go パッケージ。
- [todocheck](https://github.com/preslavmihaylov/todocheck) - コード内の TODO コメントを課題管理システムの Issue と結び付ける静的コードアナライザー。
- [unconvert](https://github.com/mdempsky/unconvert) - Go のソースから不要な型変換を取り除きます。
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Go 標準ライブラリの変数/定数を使用できる箇所を検出するリンター。
- [vacuum](https://github.com/daveshanley/vacuum) - 超高速で軽量な OpenAPI のリンター兼品質チェックツール。
- [validate](https://github.com/mccoyst/validate) - タグを使って構造体のフィールドを自動的に検証します。
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - 外部パッケージからのエラーがラップされていることをチェックするリンター。

**[⬆ トップに戻る](#contents)**

## エディタープラグイン

_テキストエディターと IDE のためのプラグイン。_

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - このプラグインは、Vim/Neovim に [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) の機能を追加します。
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - 定義を出力に表示し、go doc を生成するための Visual Studio Code 拡張機能。
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - JetBrains IDE 向けの Go プラグイン。
- [go-mode](https://github.com/dominikh/go-mode.el) - GNU/Emacs 向けの Go モード。
- [gocode](https://github.com/nsf/gocode) - Go プログラミング言語のための自動補完デーモン。
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - インポートのためのフォーマットツール。
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - この拡張機能は、Go 言語のベンチマークプロファイリングのサポートを VS Code に追加します。
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - コード補完などの IDE のような機能を提供する、テキストエディター SublimeText 3 向けの Golang プラグイン集。
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - 関数やメソッドのシグネチャに基づいて Go のテストを生成するための Vim プラグイン。
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - 保存時に構文エラーをハイライトする Vim プラグイン。
- [vim-go](https://github.com/fatih/vim-go) - Vim 向けの Go 開発プラグイン。
- [vscode-go](https://github.com/golang/vscode-go) - Go 言語のサポートを提供する、Visual Studio Code（VS Code）用の拡張機能。
- [Watch](https://github.com/eaburns/Watch) - ファイルの変更時に acme のウィンドウでコマンドを実行します。

**[⬆ トップに戻る](#contents)**

## Go Generate ツール

- [envdoc](https://github.com/g4s8/envdoc) - Go のソースファイルから環境変数のドキュメントを生成します。
- [generic](https://github.com/usk81/generic) - Go 向けの柔軟なデータ型。
- [gocontracts](https://github.com/Parquery/gocontracts) - コードとドキュメントを同期させることで、Go に契約による設計をもたらします。
- [godal](https://github.com/mafulong/godal) - SQL の DDL ファイルを指定して、gorm で使用できる Golang の ORM モデルを生成します。
- [gonerics](https://github.com/bouk/gonerics) - Go におけるイディオマティックなジェネリクス。
- [gotests](https://github.com/cweill/gotests) - ソースコードから Go のテストを生成します。
- [gounit](https://github.com/hexdigest/gounit) - 独自のテンプレートを使って Go のテストを生成します。
- [hasgo](https://github.com/DylanMeeus/hasgo) - スライス向けに Haskell にインスパイアされた関数を生成します。
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - OpenAPI 仕様の x-constants 拡張から、型付きの Go 定数を生成します。
- [options-gen](https://github.com/kazhuravlev/options-gen) - Dave Cheney の記事「Functional options for friendly APIs」で説明されている Functional Options を生成します。
- [re2dfa](https://gitlab.com/opennota/re2dfa) - 正規表現を有限状態機械に変換し、Go のソースコードを出力します。
- [sqlgen](https://github.com/anqiansong/sqlgen) - SQL ファイルまたは DSN から、gorm、xorm、sqlx、bun、sql のコードを生成します。
- [TOML-to-Go](https://xuri.me/toml-to-go) - ブラウザー上で TOML を即座に Go の型に変換します。
- [xgen](https://github.com/xuri/xgen) - XSD（XML Schema Definition）パーサー兼 Go/C/Java/Rust/TypeScript コードジェネレーター。

**[⬆ トップに戻る](#contents)**

## Go ツール

- [decouple](https://github.com/bobg/decouple) - インターフェース型で一般化できる「過剰に具体的な」関数パラメーターを見つけます。
- [docs](https://github.com/go-oas/docs) - GO プロジェクトの RESTful API ドキュメントを、OpenAPI 仕様の標準に沿って自動生成します。
- [go-callvis](https://github.com/TrueFurby/go-callvis) - dot 形式を使って Go プログラムのコールグラフを可視化します。
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - コンパイルされた Golang バイナリ内の依存関係のサイズを解析・可視化し、最終的なビルドへの影響を把握できるようにします。
- [go-swagger](https://github.com/go-swagger/go-swagger) - Go 向けの Swagger 2.0 実装。Swagger は、RESTful API をシンプルかつ強力に表現するものです。
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Go テンプレートを作成・テストするためのインタラクティブな環境。
- [godbg](https://github.com/tylerwince/godbg) - 開発中に素早く簡単にデバッグするための、Rust の `dbg!` マクロの実装。
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - コードベース全体から、指定した Go インターフェースを実装しているすべての構造体を見つけます。
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - go.mod ファイルに含まれるバイナリを実行・キャッシュする Go ツール。
- [gotemplate.io](https://gotemplate.io/) - `text/template` のテンプレートをライブでプレビューするオンラインツール。
- [gotestdox](https://github.com/bitfield/gotestdox) - Go のテスト結果を読みやすい文章として表示します。
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks は、go.mod にある GitHub 上の依存関係に自動的にスターを付け、メンテナーに感謝の気持ちを届けます。
- [gotutor](https://github.com/ahmedakef/gotutor) - オンラインの Go デバッガー＆ビジュアライザー。
- [govisual](https://github.com/doganarif/govisual) - ローカルでの Go の Web 開発のための、設定不要で Pure Go の HTTP リクエストビジュアライザー＆デバッガー。
- [igo](https://github.com/rocketlaunchr/igo) - igo から Go へのトランスパイラー（Go 言語に新しい言語機能を！）
- [lensm](https://github.com/loov/lensm) - Go のアセンブリとソースのビューアー。
- [modver](https://github.com/bobg/modver) - Go モジュールの 2 つのバージョンを比較し、[semver](https://semver.org/) のルールに従って必要なバージョン番号の変更（メジャー、マイナー、パッチレベル）を確認します。
- [MoniGO](https://github.com/iyashjayesh/monigo) - Go アプリケーション向けのパフォーマンス監視ライブラリ。アプリケーションのパフォーマンスをリアルタイムで把握できます！🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - GitHub 用のブラウザー拡張機能 OctoLinker で、Go のファイルを効率的にナビゲートします。
- [richgo](https://github.com/kyoh86/richgo) - テキストの装飾で `go test` の出力を豊かにします。
- [roumon](https://github.com/becheran/roumon) - コマンドラインインターフェースを通じて、アクティブなすべてのゴルーチンの現在の状態を監視します。
- [rts](https://github.com/galeone/rts) - RTS：response to struct。サーバーのレスポンスから Go の構造体を生成します。
- [textra](https://github.com/ravsii/textra) - フィルタリングやエクスポートのために、Go の構造体のフィールド名、型、タグを抽出します。
- [typex](https://github.com/dtgorski/typex) - Go の型とその推移的な依存関係を調べます。結果を TypeScript の値オブジェクト（または型）の宣言としてエクスポートすることもできます。

**[⬆ トップに戻る](#contents)**

## ソフトウェアパッケージ

_Go で書かれたソフトウェア。_

**[⬆ トップに戻る](#contents)**

### DevOps ツール

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate は、設定可能な区切り文字を使って長い文字列を短い文字列に変換するツールです。たとえば、ブランチ名をデプロイスタックの ID に埋め込む用途に使えます。
- [alaz](https://github.com/ddosify/alaz) - 手間いらずで低オーバーヘッドな、eBPF ベースの Kubernetes 監視。
- [aptly](https://github.com/aptly-dev/aptly) - aptly は Debian リポジトリの管理ツールです。
- [aurora](https://github.com/xuri/aurora) - クロスプラットフォームの、Web ベースの Beanstalkd キューサーバーコンソール。
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - ターミナルから直接、AWS のコストを診断し、アイドル状態のリソースを検出して、クラウドの支出を最適化します 🩺 ☁️。
- [awsenv](https://github.com/soniah/awsenv) - プロファイル用の Amazon（AWS）の環境変数を読み込む小さなバイナリ。
- [Balerter](https://github.com/balerter/balerter) - セルフホスト型のスクリプトベースのアラートマネージャー。
- [Blast](https://github.com/dave/blast) - API の負荷テストとバッチジョブのためのシンプルなツール。
- [bombardier](https://github.com/codesenberg/bombardier) - 高速なクロスプラットフォームの HTTP ベンチマークツール。
- [cassowary](https://github.com/rogerwelin/cassowary) - Go で書かれた、モダンなクロスプラットフォームの HTTP 負荷テストツール。
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - アプリケーションがインスタンスのランダムな障害に耐えられるよう支援するレジリエンスツール。
- [colima](https://github.com/abiosoft/colima) - 最小限のセットアップで使える、macOS（および Linux）上のコンテナランタイム。
- [Ddosify](https://github.com/ddosify/ddosify) - Golang で書かれた高性能な負荷テストツール。
- [decompose](https://github.com/s0rg/decompose) - Docker コンテナの接続グラフを生成・処理するツール。
- [Den](https://github.com/us/den) - AI エージェント向けのセルフホスト型サンドボックスランタイム。オープンソースの E2B 代替です。
- [DepCharge](https://github.com/centerorbit/depcharge) - 大規模プロジェクトの多数の依存関係にまたがるコマンドの実行をオーケストレーションするのに役立ちます。
- [dish](https://github.com/thevxn/dish) - 軽量でリモートから設定可能な監視サービス。
- [Docker](https://www.docker.com/) - 開発者とシステム管理者のための、分散アプリケーション向けのオープンなプラットフォーム。
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - MinGW ツールチェーンを使って Windows 向けの Go バイナリをビルドするための Docker イメージ。
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - Docker ボリュームを、ローカルまたは S3、WebDAV、Azure Blob Storage、Dropbox、SSH 互換の任意のストレージにバックアップします。
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - さまざまな入力チャネルを使って有効な Dockerfile を生成する Go ライブラリおよび実行ファイル。
- [docklite](https://github.com/benzjeremy/docklite) - リアルタイムの SSE メトリクスを備えた、Docker コンテナ管理のための軽量な Portainer の代替。
- [dogo](https://github.com/liudng/dogo) - ソースファイルの変更を監視し、自動的にコンパイルして実行（再起動）します。
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - バイナリ、Docker、Drone CI を使って、下流の Jenkins ジョブをトリガーします。
- [drone-scp](https://github.com/appleboy/drone-scp) - バイナリ、Docker、Drone CI を使って、SSH 経由でファイルや成果物をコピーします。
- [Dropship](https://github.com/chrismckenzie/dropship) - CDN 経由でコードをデプロイするためのツール。
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - `ProxyCommand` を介した SSH による簡単なリモート実行と SCP によるダウンロードのための Golang パッケージ。
- [fac](https://github.com/mkchoi212/fac) - Git のマージコンフリクトを解消するためのコマンドラインユーザーインターフェース。
- [Flannel](https://github.com/flannel-io/flannel) - Flannel は、Kubernetes 向けに設計されたコンテナ用のネットワークファブリックです。
- [Fleet device management](https://github.com/fleetdm/fleet) - サーバーとワークステーションのための、軽量でプログラム可能なテレメトリ。
- [gaia](https://github.com/gaia-pipeline/gaia) - 任意のプログラミング言語で強力なパイプラインを構築します。
- [ghorg](https://github.com/gabrie30/ghorg) - 組織やユーザーのリポジトリ全体を 1 つのディレクトリに素早くクローンします。GitHub、GitLab、Gitea、Bitbucket をサポートしています。
- [Gitea](https://github.com/go-gitea/gitea) - 完全にコミュニティ主導で開発されている Gogs のフォーク。
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - GitHub のリポジトリ、Issue、マイルストーン、ラベルをすべて Gitea インスタンスに移行します。
- [gitl](https://github.com/akomyagin/gitl) - リスクスコアリング（低/中/高）、変更履歴の生成、複数リポジトリのアクティビティダイジェストを備えた、Git のコミット範囲の AI レビュー。GitHub Action も含まれています。
- [go-furnace](https://github.com/go-furnace/go-furnace) - Go で書かれたホスティングソリューション。AWS、GCP、DigitalOcean にアプリケーションを簡単にデプロイできます。
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - 自己更新する Go アプリケーションを作るシンプルな方法。Github と Gitlab をサポートしています。
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Go アプリケーションを自己更新できるようにします。
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew を使うと、複数のバージョンの Go を簡単に切り替えられます。
- [gobrew](https://github.com/kevincobain2000/gobrew) - Go のバージョンマネージャー。Go のバージョンをインストール・管理するための超シンプルなツールです。root 権限なしで Go をインストールでき、シェルの rehash も不要です。
- [godbg](https://github.com/sirnewton01/godbg) - Web ベースの gdb フロントエンドアプリケーション。
- [Gogs](https://gogs.io/) - Go プログラミング言語で書かれたセルフホスト型の Git サービス。
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - 宣言的な設定、堅牢なミドルウェアを備え、REST、GraphQL、TCP、UDP、gRPC をサポートする軽量な API ゲートウェイ兼リバースプロキシ。
- [gonative](https://github.com/inconshreveable/gonative) - Cgo が有効なバージョンの標準ライブラリパッケージを使いながら、すべてのプラットフォームへのクロスコンパイルが可能な Go のビルドを作成するツール。
- [govvv](https://github.com/ahmetalpbalkan/govvv) - Go バイナリにバージョン情報を簡単に追加するための「go build」ラッパー。
- [grapes](https://github.com/yaronsumel/grapes) - SSH 経由でコマンドを簡単に配布するために設計された軽量なツール。
- [GVM](https://github.com/moovweb/gvm) - GVM は、Go のバージョンを管理するためのインターフェースを提供します。
- [Hey](https://github.com/rakyll/hey) - Hey は、Web アプリケーションに負荷をかける小さなプログラムです。
- [httpref](https://github.com/dnnrly/httpref) - httpref は、HTTP メソッド、ステータスコード、ヘッダー、TCP および UDP ポートのための便利な CLI リファレンスです。
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI を使うと、Jenkins を簡単に管理できます。
- [k0s](https://github.com/k0sproject/k0s) - 手間のかからない Kubernetes ディストリビューション。
- [k3d](https://github.com/k3d-io/k3d) - CNCF の k3s を Docker で実行するための小さなヘルパー。
- [k3s](https://github.com/k3s-io/k3s) - 軽量な Kubernetes。
- [k6](https://github.com/grafana/k6) - Go と JavaScript を使ったモダンな負荷テストツール。
- [k9s](https://github.com/derailed/k9s) - クラスターをスタイリッシュに管理するための Kubernetes CLI。
- [kala](https://github.com/ajvb/kala) - シンプルでモダンかつ高性能なジョブスケジューラー。
- [kcli](https://github.com/cswank/kcli) - Kafka のトピック/パーティション/メッセージを調べるためのコマンドラインツール。
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker - Kubernetes をテストするためのローカルクラスター。
- [ko](https://github.com/google/ko) - Kubernetes 上で Go アプリケーションをビルド・デプロイするためのコマンドラインツール
- [kool](https://github.com/kool-dev/kool) - Docker 環境を簡単に管理するためのコマンドラインツール。
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks は、K8s 上でデータベース、メッセージキュー、その他のデータインフラを実行・管理するオープンソースのコントロールプレーンです。
- [kubefwd](https://github.com/txn2/kubefwd) - ローカル開発のために、サービスごとに一意の IP を割り当てて Kubernetes のポートフォワーディングを一括で行います。
- [kubernetes](https://github.com/kubernetes/kubernetes) - Google 発のコンテナクラスターマネージャー。
- [kubeshark](https://github.com/kubeshark/kubeshark) - Wireshark にインスパイアされ、Kubernetes 専用に作られた、Kubernetes 向けの API トラフィックアナライザー。
- [KubeVela](https://github.com/kubevela/kubevela) - クラウドネイティブなアプリケーションデリバリー。
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN は、Kubernetes クラスターのネットワークにシームレスに接続するクラウドネイティブな開発環境を提供します。
- [KusionStack](https://github.com/KusionStack/kusion) - 「platform as code」と「infra as code」のアプローチでモダンなアプリを提供するための、統合されたプログラム可能な設定の技術スタック。
- [kwatch](https://github.com/abahmed/kwatch) - Kubernetes（K8s）クラスター内のクラッシュを即座に監視・検出します。
- [lstags](https://github.com/ivanilves/lstags) - 異なるレジストリ間で Docker イメージを同期するためのツールと API。
- [lwc](https://github.com/timdp/lwc) - UNIX の wc コマンドのライブ更新版。
- [manssh](https://github.com/xwjdsh/manssh) - manssh は、SSH のエイリアス設定を簡単に管理するためのコマンドラインツールです。
- [Mantil](https://github.com/mantil-io/mantil) - AWS 上でサーバーレスアプリケーションを構築するための Go 専用フレームワーク。インフラは Mantil が処理するので、純粋な Go コードに集中できます。
- [minikube](https://github.com/kubernetes/minikube) - Kubernetes をローカルで実行します。
- [Moby](https://github.com/moby/moby) - コンテナベースのシステムを組み立てるための、コンテナエコシステムの共同プロジェクト。
- [Mora](https://github.com/emicklei/mora) - MongoDB のドキュメントとメタデータにアクセスするための REST サーバー。
- [mq-studio](https://github.com/amigoer/mq-studio) - RocketMQ、RabbitMQ、Kafka、Pulsar、Redis Stream、MQTT、NATS、ActiveMQ のクラスターを管理・監視するための、クロスプラットフォームのデスクトップクライアント。
- [ostent](https://github.com/ostrost/ostent) - システムメトリクスを収集・表示し、オプションで Graphite や InfluxDB に中継します。
- [Packer](https://github.com/mitchellh/packer) - Packer は、単一のソース設定から複数のプラットフォーム向けに同一のマシンイメージを作成するためのツールです。
- [Pewpew](https://github.com/bengadbois/pewpew) - 柔軟な HTTP コマンドラインのストレステスター。
- [pingtower](https://github.com/crleonard/pingtower) - Web サイトと API のための、軽量なセルフホスト型の稼働監視ツール。
- [PipeCD](https://github.com/pipe-cd/pipecd) - あらゆるアプリケーションに一貫したデプロイと運用の体験を提供する、GitOps スタイルの継続的デリバリープラットフォーム。
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo は、Kubernetes でマイクロサービスを実行する際のベストプラクティスを示す、Go で作られた小さな Web アプリケーションです。Flux や Flagger などの CNCF プロジェクトで、エンドツーエンドテストやワークショップに使用されています。
- [podman-tui](https://github.com/containers/podman-tui) - Podman を管理するためのターミナル UI。
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium は、ID を認識するアクセスプロキシです。
- [Rodent](https://github.com/alouche/rodent) - Rodent は、Go のバージョンやプロジェクトの管理と、依存関係の追跡を支援します。
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - GET、PUT、DELETE メソッドと認証（OpenID Connect と Basic 認証）を備えた S3 プロキシ。
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - Amazon S3 との間で大きなオブジェクトを高速に転送するために最適化された、小さなユーティリティ/ライブラリ。
- [s5cmd](https://github.com/peak/s5cmd) - S3 とローカルファイルシステムのための非常に高速な実行ツール。
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - コマンドラインからベアメタルサーバーを管理します（Docker と同じくらい簡単に）。
- [script](https://github.com/bitfield/script) - DevOps やシステム管理のタスクのために、Go でシェルのようなスクリプトを簡単に書けるようにします。
- [sg](https://github.com/ChristopherRabotin/sg) - 一連の HTTP エンドポイントのベンチマークを行います（ab のように）。直前のレスポンスに基づいて特定のサーバーに負荷をかけるため、各呼び出しの間でレスポンスコードやデータを利用できます。
- [sigma](https://github.com/go-sigma/sigma) - OCI ネイティブのコンテナイメージレジストリ。OCI ネイティブのアーティファクト、アーティファクトのスキャン、イメージのビルドなどをサポートしています。
- [skm](https://github.com/TimothyYe/skm) - SKM は、シンプルで強力な SSH 鍵マネージャーです。複数の SSH 鍵を簡単に管理できます！
- [sortie](https://github.com/sortie-ai/sortie) - トラッカーのチケットを自律型コーディングエージェントのセッションに変換します。
- [StatusOK](https://github.com/sanathp/statusok) - Web サイトと REST API を監視します。サーバーがダウンしたときや、応答時間が想定より長いときに、Slack やメールで通知を受け取れます。
- [tau](https://github.com/taubyte/tau) - サーバーレスの WebAssembly 関数、フロントエンドのホスティング、CI/CD、オブジェクトストレージ、K/V データベース、Pub/Sub メッセージングなどの機能を備えたクラウドコンピューティングプラットフォームを簡単に構築できます。
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - 公開された API の定義を含む OpenAPI ドキュメント（旧称 swagger ファイル）に基づいて、実行時に自身を動的に設定する Terraform プロバイダープラグイン。
- [tf-profile](https://github.com/datarootsio/tf-profile) - Terraform の実行のためのプロファイラー。全体の統計、リソースレベルの統計、可視化を生成します。
- [tickstem/uptime](https://github.com/tickstem/uptime) - SSL の有効期限アラートと設定可能なレスポンスのアサーションを備えた、HTTP の稼働監視のための Go クライアント。
- [tlm](https://github.com/yusufcanb/tlm) - CodeLLaMa を活用した、ローカルの CLI コパイロット
- [traefik](https://github.com/containous/traefik) - 複数のバックエンドをサポートするリバースプロキシ兼ロードバランサー。
- [trubka](https://github.com/xitonix/trubka) - Apache Kafka クラスターを管理・トラブルシューティングするための CLI ツール。Protocol Buffers やプレーンテキストのイベントを汎用的に Kafka へ発行したり、Kafka から消費したりできます。
- [Updatecli](https://github.com/updatecli/updatecli) - 汎用的な宣言型の更新ポリシーエンジン。
- [uTask](https://github.com/ovh/utask) - YAML で宣言されたビジネスプロセスをモデル化して実行する自動化エンジン。
- [Vegeta](https://github.com/tsenart/vegeta) - HTTP の負荷テストツールおよびライブラリ。9000 以上だ！
- [wait-for](https://github.com/dnnrly/wait-for) - （コマンドラインから）何かが起こるのを待ってから処理を続けます。Docker サービスなどを簡単にオーケストレーションできます。
- [Wide](https://wide.b3log.org/login) - Golang を使うチームのための Web ベースの IDE。
- [winrm-cli](https://github.com/masterzen/winrm-cli) - Windows マシン上でリモートからコマンドを実行するための CLI ツール。
- [zerohand](https://github.com/nilpoona/zerohand) - Web API のためのシンプルで効率的な負荷テストツール。

**[⬆ トップに戻る](#contents)**

### その他のソフトウェア

- [Backrest](https://github.com/garethgeorge/backrest) - restic バックアップのための Web ベースの UI 兼オーケストレーター。
- [Better Go Playground](https://goplay.tools) - シンタックスハイライト、コード補完などの機能を備えた Go Playground。
- [blocky](https://github.com/0xERR0R/blocky) - ローカルネットワーク向けの広告ブロッカーとして機能する、多機能で高速かつ軽量な DNS プロキシ。
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - Linux 向けの TUI の Bluetooth マネージャー。
- [borg](https://github.com/crufter/borg) - bash スニペットのための、ターミナルベースの検索エンジン。
- [boxed](https://github.com/tejo/boxed) - Dropbox ベースのブログエンジン。
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar は、Go で構築されたクロスプラットフォームの Postman 代替で、開発者が API エンドポイントをテストするのを支援することを目指しています。HTTP と gRPC のプロトコルをサポートしています。
- [Cherry](https://github.com/rafael-santiago/cherry) - Go による小さな Web チャットサーバー。
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - 測定トラックのインポート、分析、可視化のための、セルフホスト型の公開放射線マップ。
- [Circuit](https://github.com/gocircuit/circuit) - Circuit は、クラウドアプリケーションを構成するサービスやホストの管理、検出、同期、オーケストレーションのための、プログラム可能な PaaS（Platform as a Service）および/または IaaS（Infrastructure as a Service）です。
- [claude-grep](https://github.com/evoleinik/claude-grep) - 正規表現とセマンティック（ベクトル）検索で Claude Code のセッション履歴を検索します。
- [Comcast](https://github.com/tylertreat/Comcast) - 劣悪なネットワーク接続をシミュレートします。
- [confd](https://github.com/kelseyhightower/confd) - テンプレートと etcd や consul のデータを使って、ローカルのアプリケーション設定ファイルを管理します。
- [crawley](https://github.com/s0rg/crawley) - CLI 向けの Web スクレイパー/クローラー。
- [croc](https://github.com/schollz/croc) - あるコンピューターから別のコンピューターへ、ファイルやフォルダーを簡単かつ安全に送信します。
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - Windows と Linux 向けの、軽量なソフトウェアキャッシュのクリーンアップツール。
- [dispositio](https://github.com/tsraveling/dispositio) - シンプルな Markdown で大規模プロジェクトを計画するためのターミナルツール。
- [Documize](https://github.com/documize/community) - SaaS ツールのデータを統合するモダンな Wiki ソフトウェア。
- [dp](https://github.com/scryinfo/dp) - ブロックチェーンとのデータ交換のための SDK を通じて、開発者は DAPP の開発に簡単に取り組めます。
- [drive](https://github.com/odeke-em/drive) - コマンドライン用の Google ドライブクライアント。
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - ロックフリーな重複排除の考え方に基づく、クロスプラットフォームのネットワーク・クラウドバックアップツール。
- [fjira](https://github.com/mk-5/fjira) - Attlasian Jira 向けの、ファジー検索ベースのターミナル UI アプリケーション
- [Gebug](https://github.com/moshebe/gebug) - デバッガーとホットリロードの機能をシームレスに有効にすることで、Docker 化された Go アプリケーションのデバッグを非常に簡単にするツール。
- [gfile](https://github.com/Antonito/gfile) - 第三者を介さずに、WebRTC 経由で 2 台のコンピューター間でファイルを安全に転送します。
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - GOPATH 内の Go パッケージの更新を表示するアプリ。
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - 動画をストリーミングする torrent クライアント。
- [goblin](https://goblin.run) - Go 言語で書かれた CLI のためのクラウドビルダー
- [GoBoy](https://github.com/Humpheh/goboy) - Go で書かれた任天堂ゲームボーイカラーのエミュレーター。
- [gocc](https://github.com/goccmack/gocc) - Gocc は、Go で書かれた Go 向けのコンパイラーキットです。
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - 関数リストで関数の説明をツールチップとして表示する、Go Doc サイト向けの Chrome 拡張機能。
- [Gokapi](https://github.com/Forceu/gokapi) - 一定のダウンロード回数または日数が経過すると期限切れになる、ファイル共有のための軽量なサーバー。Firefox Send に似ていますが、一般公開のアップロード機能はありません。
- [GoLand](https://jetbrains.com/go) - フル機能のクロスプラットフォーム Go IDE。
- [GoNB](https://github.com/janpfeifer/gonb) - Jupyter Notebook を使ったインタラクティブな Go プログラミング（VSCode、Binder、Google の Colab でも動作）。
- [GooseForum](https://github.com/leancodebox/GooseForum) - Go、Vue、Tailwind CSS で構築された、セルフホスト型のフォーラムプラットフォーム。
- [Gor](https://github.com/buger/gor) - 本番環境のトラフィックをステージング/開発環境にリアルタイムで再生するための、HTTP トラフィック複製ツール。
- [Guora](https://github.com/meloalright/guora) - Go で書かれた、セルフホスト型の Quora ライクな Web アプリケーション。
- [GURL](https://github.com/matveynator/gurl) - CURL に SSL ライブラリが古すぎると言われたら、GURL を使いましょう。ファイル 1 つで、SSL への依存はゼロです。
- [hoofli](https://github.com/dnnrly/hoofli) - Chrome や Firefox のネットワーク調査から PlantUML の図を生成します。
- [hotswap](https://github.com/edwingeng/hotswap) - サーバーを再起動したり、進行中の処理を中断・ブロックしたりすることなく、Go のコードを再読み込みするための完全なソリューション。
- [hugo](https://gohugo.io/) - 高速でモダンな静的 Web サイトエンジン。
- [ide](https://github.com/thestrukture/ide) - ブラウザーからアクセスできる IDE。Go のために Go で設計されています。
- [joincap](https://github.com/assafmo/joincap) - 複数の pcap ファイルを結合するためのコマンドラインユーティリティ。
- [JuiceFS](https://github.com/juicedata/juicefs) - Redis と AWS S3 上に構築された分散 POSIX ファイルシステム。
- [Juju](https://jujucharms.com/) - クラウドに依存しないサービスのデプロイとオーケストレーション。EC2、Azure、Openstack、MAAS などをサポートしています。
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - リモートフォルダーをマウントし、先読みによってリンクのレイテンシを隠蔽する、オンデマンドのピアツーピアファイルシステム。X25519 と ML-KEM-1024 のハイブリッドでエンドツーエンド暗号化されています。
- [Layli](https://layli.app) - きれいなレイアウト図をコードとして描きます。
- [Leaps](https://github.com/jeffail/leaps) - 操作変換（Operational Transforms）を用いたペアプログラミングサービス。
- [lgo](https://github.com/yunabe/lgo) - Jupyter を使ったインタラクティブな Go プログラミング。コード補完、コードの検査、100% の Go 互換性をサポートしています。
- [LightCMS](https://github.com/jonradoff/lightcms) - 静的ページの生成、ロールベースのアクセス制御、エージェント駆動のコンテンツ運用のための MCP サーバーを備えた、セルフホスト型のコンテンツ管理システム。
- [limetext](https://limetext.github.io) - Lime Text は、主に Go で開発された強力でエレガントなテキストエディターで、Sublime Text の後継となる自由でオープンソースのソフトウェアを目指しています。
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE は、シンプルでオープンソースのクロスプラットフォーム Go IDE です。
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - macOS のキャッシュ、ログ、一時ファイルをクリーンアップするための、プレビューを重視した TUI。
- [mdv](https://github.com/Allra-Fintech/mdv) - ライブリロード、GFM、シンタックスハイライト、Mermaid の図、PDF エクスポートに対応し、Markdown ファイルをブラウザーでレンダリングする CLI ツール。
- [mockingjay](https://github.com/quii/mockingjay-server) - 1 つの設定ファイルから偽の HTTP サーバーとコンシューマー駆動契約を作成します。より現実的なパフォーマンステストを行えるよう、サーバーにランダムに異常な動作をさせることもできます。
- [myLG](https://github.com/mehrdadrad/mylg) - Go で書かれたコマンドラインのネットワーク診断ツール。
- [naclpipe](https://github.com/unix4fun/naclpipe) - Go で書かれた、NaCL EC25519 ベースのシンプルな暗号パイプツール。
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay が新時代のために生まれ変わりました。
- [nes](https://github.com/fogleman/nes) - Go で書かれた Nintendo Entertainment System（NES）のエミュレーター。
- [onWatch](https://github.com/onllm-dev/onWatch) - 予期しないスロットリングや予算超過を避けるため、履歴の追跡、アラート、Web ダッシュボードを使って、プロバイダーをまたいだ AI API のクォータをローカルで監視します。
- [Orbit](https://github.com/gulien/orbit) - コマンドを実行したり、テンプレートからファイルを生成したりするためのシンプルなツール。
- [peg](https://github.com/pointlander/peg) - Peg（Parsing Expression Grammar）は、Packrat パーサージェネレーターの実装です。
- [Plakar](https://github.com/PlakarKorp/plakar) - ベンダーロックインのない、暗号化・重複排除・検証が可能でスケーラブルなバックアップエンジン。
- [Plik](https://github.com/root-gg/plik) - Plik は、Go による一時的なファイルアップロードシステム（Wetransfer のようなもの）です。
- [portal](https://github.com/SpatiumPortae/portal) - Portal は、任意のコンピューターから別のコンピューターへ素早く簡単にファイルを転送するコマンドラインユーティリティです。
- [restic](https://github.com/restic/restic) - 重複排除を行うバックアッププログラム。
- [sake](https://github.com/alajmo/sake) - sake は、ローカルホストとリモートホストのためのコマンドランナーです。
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code。複雑度の計算と COCOMO による見積もりを備えた、非常に高速で正確なコードカウンターです。
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - MS Project からエクスポートした Excel/CSV のための、DCMA 14 項目スケジュール評価 CLI。
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - O(1) のディスクシークを備えた、高速でシンプルかつスケーラブルな分散ファイルシステム。
- [shell2http](https://github.com/msoap/shell2http) - HTTP サーバー経由でシェルコマンドを実行します（プロトタイピングやリモート操作向け）。
- [Snitch](https://github.com/lucasgomide/snitch) - 誰かが Tsuru 経由でアプリケーションをデプロイしたときに、チームやさまざまなツールに通知するシンプルな方法。
- [sonic](https://github.com/go-sonic/sonic) - Sonic は Go のブログプラットフォームです。シンプルかつ強力です。
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - デジタル OLED 時計、Canvas によるオーディオビジュアライザー、MPRIS による操作を備えた、Spotify 向けのデスクトップスクリーンセーバー。
- [Stack Up](https://github.com/pressly/sup) - Stack Up は、超シンプルなデプロイツールです。Unix だけで動作し、サーバーネットワークのための「make」のようなものと考えてください。
- [stew](https://github.com/marwanhawari/stew) - コンパイル済みバイナリのための独立したパッケージマネージャー。
- [syncthing](https://syncthing.net/) - オープンで分散型のファイル同期ツールおよびプロトコル。
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - eBPF ベースの TCP の可観測性。
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - 過去 24 時間と 1 週間の Git コミット、現在の天気、セルフケアのアドバイス、ジョーク、現在の ToDo リストのタスクを表示する小さなターミナルアプリ。
- [tldx](https://github.com/brandonyoungdev/tldx) - キーワードの組み合わせ生成機能を備え、RDAP、DNS、WHOIS へのフォールバックを使ってドメインの空き状況を一括でチェックするツール。
- [toxiproxy](https://github.com/shopify/toxiproxy) - 自動テストのためにネットワークやシステムの状態をシミュレートするプロキシ。
- [tsuru](https://tsuru.io/) - 拡張可能でオープンソースの PaaS（Platform as a Service）ソフトウェア。
- [untis-go](https://github.com/benzjeremy/untis-go) - 生徒と教師のための、高速でネイティブな WebUntis デスクトップクライアント。サイドバーのナビゲーション、時間割、宿題、欠席、メッセージに対応しています。AES-256-GCM で暗号化された認証情報、SQLite によるキャッシュファースト、ランダムポートによるセキュリティを備えています。
- [vaku](https://github.com/lingrino/vaku) - Vault でコピー、移動、検索などのフォルダーベースの機能を実現する CLI と API。
- [vFlow](https://github.com/VerizonDigital/vflow) - 高性能でスケーラブルかつ信頼性の高い、IPFIX、sFlow、Netflow のコレクター。
- [Wave Terminal](https://waveterm.dev) - Wave は、インラインレンダリング、モダンな UI、永続的なセッションを備え、シームレスな開発者ワークフローのために作られた、オープンソースで AI ネイティブなターミナルです。
- [wellington](https://github.com/wellington/wellington) - Sass のプロジェクト管理ツール。（Compass のように）スプライト関数で言語を拡張します。
- [woke](https://github.com/get-woke/woke) - ソースコード内のインクルーシブでない表現を検出します。
- [yai](https://github.com/ekkinox/yai) - AI を活用したターミナルアシスタント。
- [zs](https://git.mills.io/prologic/zs) - 極めてミニマルな静的サイトジェネレーター。

**[⬆ トップに戻る](#contents)**

# リソース

_新しい Go ライブラリを見つけるための場所。_

**[⬆ トップに戻る](#contents)**

## ベンチマーク

- [autobench](https://github.com/davecheney/autobench) - 異なる Go のバージョン間でパフォーマンスを比較するためのフレームワーク。
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - Аb、Wrk、Siege の各ツールを組み合わせた強力な HTTP ベンチマークツール。ベンチマークのための統計やさまざまなパラメーター、比較結果を収集します。
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - いくつかの雑多な Go のマイクロベンチマーク。言語機能の一部を代替手法と比較します。
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Go の HTTP リクエストルーターのベンチマークと比較。
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Go の JSON ベンチマーク。
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Go での機械学習の推論のためのベンチマーク。
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Go の Web フレームワークのベンチマーク。
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Go のシリアライズ手法のベンチマーク。
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Go 言語の一般的な基本操作のベンチマーク。
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - Golang のベンチマークのコレクション。
- [gospeed](https://github.com/feyeleanor/GoSpeed) - 言語構文の速度を計測するための Go のマイクロベンチマーク。
- [kvbench](https://github.com/jimrobinson/kvbench) - キー/バリューデータベースのベンチマーク。
- [skynet](https://github.com/atemerev/skynet) - Skynet の 100 万スレッドのマイクロベンチマーク。
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Go 言語向けのさまざまな画像リサイズアルゴリズムを比較します。
- [vizb](https://github.com/goptics/vizb) - Go のベンチマークデータを 4D で可視化する CLI ツール。

**[⬆ トップに戻る](#contents)**

## カンファレンス

- [GoCon](https://gocon.connpass.com/) - 東京、日本。
- [GoDays](https://www.godays.io/) - ベルリン、ドイツ。
- [GoLab](https://golab.io/) - フローレンス、イタリア。
- [GopherCon](https://www.gophercon.com/) - USA の毎年異なる場所。
- [GopherCon Africa](https://gophercon.africa/) - ナイロビ、ケニア。
- [GopherCon Australia](https://gophercon.com.au/) - シドニー、オーストラリア。
- [GopherCon Brazil](https://gopherconbr.org) - フロリアノポリス、ブラジル。
- [GopherCon China](https://gophercon.com.cn) - 上海、中国。
- [GopherCon Europe](https://gophercon.eu/) - ベルリン、ドイツ。
- [GopherCon India](https://gopherconindia.org/) - プネー、インド。
- [GopherCon Israel](https://www.gophercon.org.il/) - テルアビブ、イスラエル。
- [GopherCon Russia](https://www.gophercon-russia.ru) - モスクワ、ロシア。
- [GopherCon Singapore](https://gophercon.sg) - メープルツリービジネスシティ、シンガポール。
- [GopherCon UK](https://www.gophercon.co.uk/) - ロンドン、イギリス。
- [GopherCon Vietnam](https://gophercon.vn/) - ホーチミン市、ベトナム。
- [GoWest Conference](https://www.gowestconf.com/) - Lehi、USA。

**[⬆ トップに戻る](#contents)**

## 電子書籍

### 購入可能な電子書籍

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - ハッカーとペンテスター向けの Go プログラミング。
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - 継続的デリバリーの実践ガイド。テスト、コード品質、最終製品を改善する自動化パイプラインを迅速に確立する方法を紹介します。
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - TinyGo コンパイラーの紹介。Arduino と WebAssembly を含むプロジェクト。
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Go のユニークなプログラム設計アプローチを理解し、シンプルで保守性が高く、テスト可能な Go コードを書き始める。
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Go 初心者向けの入門書。
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Go 開発の詳細な実践ガイド。標準ライブラリと Go の強力なエコシステムから最も重要なツールをカバーしています。
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Go のジェネリクスの理解と使用に関するガイド。
- [Lets-Go](https://lets-go.alexedwards.net) - Go でファスト、セキュア、メインテナンス可能な Web アプリケーションを作成するためのステップバイステップガイド。
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - Go で API と Web アプリケーションを構築するための高度なパターン。
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Go テストのガイド。
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Go でのコマンドラインツール記述ガイド。
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - 慣用的で表現力豊かで効率的な Go コードを書くための数多くの技法を紹介する本。一般的な落とし穴を回避します。

### 無料の電子書籍

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - Go で gRPC を使ったブロックチェーンをゼロから効果的に学習し、段階的に構築するための基礎および実践的なガイド。
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Go の構文、セマンティクス、およびあらゆる種類の詳細に焦点を当てた本。
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Go `go/*` パッケージに焦点を当てた本。
- [Go Faster](https://leanpub.com/gofaster) - この本は学習曲線を短縮し、より速く熟練した Go プログラマーになるのを支援します。
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - ペルシア語。
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - DDD、Clean Architecture、CQRS を実践的なリファクタリングで適用する方法を示す本。
- [GoBooks](https://github.com/dariubs/GoBooks) - Go 本の厳選リスト。
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - 初心者向けの Go への 600 ページの紹介。
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ トップに戻る](#contents)**

## ゴファー

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Maria Letta によるゴファーグラフィックスパック。ベクターおよびラスター形式のイラストと感情的なキャラクター。
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Go ゴファーベクターデータ [.ai, .svg]。
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - 愛らしいゴファーロゴ。
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - ゴファーになろう。
- [gophers](https://github.com/ashleymcnamara/gophers) - Ashley McNamara によるゴファーアートワーク。
- [gophers](https://github.com/egonelbre/gophers) - 無料のゴファー。
- [gophers](https://github.com/rogeralsing/gophers) - ランダムなゴファーグラフィックス。
- [gophers](https://github.com/sillecelik/go-gopher) - ゴファーあみぐるみのおもちゃパターン。
- [gophers](https://github.com/scraly/gophers) - Aurélie Vache によるゴファー。

**[⬆ トップに戻る](#contents)**

## ミートアップ

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

_あなたの都市/国のグループをここに追加してください（**PR** を送信）_

**[⬆ トップに戻る](#contents)**

## スタイルガイド

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ トップに戻る](#contents)**

## ソーシャルメディア

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ トップに戻る](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ トップに戻る](#contents)**

## ウェブサイト

- [Awesome Go @LibHunt](https://go.libhunt.com) - Go のツールボックス。
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - 素晴らしい golang ワークショップの厳選リスト。
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - 素晴らしいリモートジョブの厳選リスト。その多くは Go ハッカーを探しています。
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - その他の素晴らしいリストのリスト。
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - awesome-go README ファイルを解析し、リポジトリ情報を含む新しい README ファイルを生成します。
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - ソフトウェアエンジニア @ codewithmukesh.com のブログ。
- [Coding Mystery](https://codingmystery.com) - Go を使用して刺激的なエスケープルーム風のプログラミングチャレンジを解く。
- [CodinGame](https://www.codingame.com/) - 実践的な例として小さなゲームを使用してインタラクティブなタスクを解くことで Go を学ぶ。
- [Go Blog](https://blog.golang.org) - 公式 Go ブログ。
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - ゴファーのグループが毎週異なる Go プロジェクトを読んで討論します。
- [Go Community on Hashnode](https://hashnode.com/n/go) - Hashnode 上のゴファーコミュニティ。
- [Go Forum](https://forum.golangbridge.org) - Go を議論するためのフォーラム。
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Go コミュニティ wiki のプロジェクトリスト。
- [Go Proverbs](https://go-proverbs.github.io/) - Rob Pike による Go の格言。
- [Go Report Card](https://goreportcard.com) - Go パッケージのレポートカード。
- [go.dev](https://go.dev/) - Go 開発者向けのハブ。
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - ヘルプが必要な Go プロジェクトのコレクション。Go でオープンソースを始めるための良い場所。
- [Golang Developer Jobs](https://golangjob.xyz) - Golang 関連の職務専用の開発者ジョブ。
- [Golang News](https://golangnews.com) - Go プログラミングに関するリンクとニュース。
- [Golang Nugget](https://golangnugget.com) - 毎週月曜日にあなたのインボックスに配信される Go コンテンツの最高の週間ラウンドアップ。
- [Golang Weekly](https://discu.eu/weekly/golang/) - 毎週月曜日に Go に関するプロジェクト、チュートリアル、記事。
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Go メーリングリスト。
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - ゴファーのための新しい Slack コミュニティに参加してください（[それがどのように来たかを理解する](https://blog.gopheracademy.com/gophers-slack-community/)）。
- [Gophercises](https://gophercises.com/) - 新しいゴファーのための無料のコーディング演習。
- [json2go](https://m-zajac.github.io/json2go) - 高度な JSON から Go 構造体への変換 - オンラインツール。
- [justforfunc](https://www.youtube.com/c/justforfunc) - Go プログラミング言語のヒントとコツに専念した YouTube チャンネル。Francesc Campoy [@francesc](https://twitter.com/francesc) がホストしています。
- [Learn Go Programming](https://blog.learngoprogramming.com) - イラストを使用して Go の概念を学ぶ。
- [Libs.tech](https://libs.tech/go) - 素晴らしい Go ライブラリとその隠れた宝石
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - オープンソース Go パッケージのドキュメント。
- [studygolang](https://studygolang.com) - 中国の studygolang コミュニティ。
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - 新しい Go ライブラリを見つけるための良い場所。
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ トップに戻る](#contents)**

### チュートリアル

- [50 Shades of Go](https://golang50shades.github.io/) - 新しい Golang 開発者のためのトラップ、落とし穴、一般的な間違い。
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - Go での構造化ログの世界に深く潜る。最近受け入れられた slog 提案に特に焦点を当てています。この提案は、高性能な構造化ログをレベルと共に標準ライブラリにもたらすことを目的としています。
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - Golang サイトを e コマース用に構築（デモ付き）。
- [A Tour of Go](https://tour.golang.org/) - Go のインタラクティブツアー。
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - 1000 行のコードでゼロから NoSQL データベースを構築します。
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Golang ebook は Go で Web アプリを構築する方法を紹介します。
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - 強力な Gorilla Mux の助けを借りて API を記述します。
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Gin に精通し、ボイラープレートコードを削減し、リクエスト処理パイプラインを構築するのにどのように役立つかを発見してください。
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - 低速なデータベースクエリをキャッシュする方法。
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - MySQL クエリをキャンセルする方法。
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - 独自の Redis、Docker、Git、SQLite を構築することで Go での習得を達成します。ゴルーチン、システムプログラミング、ファイル I/O など。
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Go で実装されたプログラミング設計パターンのコレクション。
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - プログラミングおよびゲーム開発を教える動画シリーズ。
- [Go By Example](https://gobyexample.com/) - 注釈付きの例プログラムを使用した Go への実践的な紹介。
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Go のリファレンスカード。
- [Go database/sql tutorial](http://go-database-sql.org/) - database/sql への紹介。
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - 7 日で Go のすべてを学ぶ（Node.js 開発者から）。
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Go 言語チュートリアルを学ぶ。
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Go プログラミングを学ぶ。
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Golang サービス用のクリーンアーキテクチャテンプレート。
- [go-patterns](https://github.com/tmrts/go-patterns) - Go 設計パターン、レシピ、およびイディオムの厳選リスト。
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - Go と Node.js の比較例。学習用。
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Go プログラミング言語を学ぶための無料コースのリスト。
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - Golang を学ぶための多くの例。
- [Golangbot](https://golangbot.com/learn-golang-series/) - Go でのプログラミングを始めるためのチュートリアル。
- [GopherCoding](https://gophercoding.com/) - 毎日の問題に取り組むのに役立つコードスニペットとチュートリアルのコレクション。
- [GopherSnippets](https://gophersnippets.com/) - Go プログラミング言語のテストとテスト可能な例を含むコードスニペット。
- [Gosamples](https://gosamples.dev/) - 日常のコード問題を解くためのコードスニペットのコレクション。
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - Go GraphQL サーバーおよびクライアントを作成する方法を学びます。コード生成も含まれています。REST エンドポイントの作成も含まれています。
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - golang プログラミングコミュニティから送信および投票された最高のオンライン golang チュートリアルから Go を学びます。
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - 六角形アーキテクチャを使用して保守可能なコードを記述するための入門ガイドライン。
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Go でベンチマークする方法を学びます。ケーススタディとして、dbq、sqlx、GORM をベンチマークします。
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Go 開発に Docker を使用する方法と、本番用 Docker イメージを構築する方法を学びます。
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - Go での役割ベースアクセス制御（RBAC）の実装ガイド。コード例を含み、役割ベースの認可でアプリケーションエンドポイントをセキュアにするための様々な方法をカバーしています。
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Godog の使い方を始める。Go アプリケーションを構築およびテストするための動作駆動開発フレームワーク。
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - 数千の例、演習、クイズで Go を学ぶ。
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - テスト駆動開発で Go を学ぶ。
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - 具体的なアプリケーションを例として Go 言語を学ぶための記事シリーズ。
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - gRPC を含む Go を使用したマイクロサービスの構築に深く潜る。
- [package main](https://www.youtube.com/packagemain) - Go でのプログラミングに関する YouTube チャンネル。
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - Go 言語を学ぶための Coursera スペシャライゼーション。
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - 本番環境で Go アプリケーションを構築、デプロイ、スケーリングすることに関するすべてのこと。
- [The world's easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - 視覚的に Go を学ぶ
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic は、Go プログラミングを学ぶための詳細なチュートリアルと整理されたコンテンツを提供します。
- [Your basic Go](https://yourbasic.org/golang) - チュートリアルと方法の巨大なコレクション。

**[⬆ トップに戻る](#contents)**

### ガイド付き学習

- [The Go Developer Roadmap](https://roadmap.sh/golang) - Go 開発者が Go を学ぶのに役立つビジュアルロードマップ。
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Go 技術面接準備のためのコーディングチャレンジを提供する GitHub リポジトリ。
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - 無料および有料リソースの組み合わせを含むガイド付き学習パス。
- [The Go Skill Tree](https://labex.io/skilltrees/go) - 無料および有料リソースの両方を組み合わせた構造化された学習パス。

**[⬆ トップに戻る](#contents)**

## 貢献

貢献を歓迎します。詳細については、[CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md) をご覧ください。

## ライセンス

このプロジェクトは [MIT ライセンス](https://github.com/avelino/awesome-go/blob/main/LICENSE) の下でライセンスされています。詳細は LICENSE ファイルを参照してください。
