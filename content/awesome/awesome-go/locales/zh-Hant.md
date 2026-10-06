# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

我們使用 _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ 社群的 Slack 進行即時交流，請透過[這份表單加入](https://invite.slack.golangbridge.org/)。

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**贊助：**

_特別感謝_

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

**Awesome Go 不收取月費**_，但我們有成員**努力付出**來維持它的運作。透過募得的資金，我們能夠回報每一位參與者的付出！你可以查看我們如何計算帳務與分配，因為這些資訊對整個社群公開。想成為本專案的支持者，請點擊[這裡](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)。_

> 精選的優秀 Go 框架、函式庫與軟體清單。靈感來自 [awesome-python](https://github.com/vinta/awesome-python)。

**貢獻：**

請先快速瀏覽一下[貢獻指南](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)。感謝所有[貢獻者](https://github.com/avelino/awesome-go/graphs/contributors)，你們最棒了！

> _如果你發現這裡有不再維護或不適合的套件或專案，請提交 pull request 來改善此檔案。謝謝！_

## 目錄

<details>
<summary>展開目錄</summary>

- [Awesome Go](#awesome-go)
  - [目錄](#contents)
  - [Actor 模型](#actor-model)
  - [人工智慧](#artificial-intelligence)
  - [音訊與音樂](#audio-and-music)
  - [身分驗證與授權](#authentication-and-authorization)
  - [區塊鏈](#blockchain)
  - [機器人建構](#bot-building)
  - [建置自動化](#build-automation)
  - [命令列](#command-line)
    - [進階主控台介面](#advanced-console-uis)
    - [標準 CLI](#standard-cli)
  - [設定](#configuration)
  - [持續整合](#continuous-integration)
  - [CSS 前置處理器](#css-preprocessors)
  - [資料整合框架](#data-integration-frameworks)
  - [資料結構與演算法](#data-structures-and-algorithms)
    - [位元封裝與壓縮](#bit-packing-and-compression)
    - [位元集合](#bit-sets)
    - [布隆過濾器與布穀鳥過濾器](#bloom-and-cuckoo-filters)
    - [資料結構與演算法合集](#data-structure-and-algorithm-collections)
    - [迭代器](#iterators)
    - [映射](#maps)
    - [其他資料結構與演算法](#miscellaneous-data-structures-and-algorithms)
    - [可為空型別](#nullable-types)
    - [佇列](#queues)
    - [集合](#sets)
    - [文字分析](#text-analysis)
    - [樹](#trees)
    - [管道](#pipes)
  - [資料庫](#database)
    - [快取](#caches)
    - [以 Go 實作的資料庫](#databases-implemented-in-go)
    - [資料庫結構遷移](#database-schema-migration)
    - [資料庫工具](#database-tools)
    - [SQL 查詢建構器](#sql-query-builders)
  - [資料庫驅動程式](#database-drivers)
    - [多後端介面](#interfaces-to-multiple-backends)
    - [關聯式資料庫驅動程式](#relational-database-drivers)
    - [NoSQL 資料庫驅動程式](#nosql-database-drivers)
    - [搜尋與分析資料庫](#search-and-analytic-databases)
  - [日期與時間](#date-and-time)
  - [分散式系統](#distributed-systems)
  - [動態 DNS](#dynamic-dns)
  - [電子郵件](#email)
  - [可嵌入的腳本語言](#embeddable-scripting-languages)
  - [錯誤處理](#error-handling)
  - [檔案處理](#file-handling)
  - [金融](#financial)
  - [表單](#forms)
  - [函數式程式設計](#functional)
  - [遊戲開發](#game-development)
  - [產生器](#generators)
  - [地理資訊](#geographic)
  - [Go 編譯器](#go-compilers)
  - [Goroutine](#goroutines)
  - [圖形使用者介面](#gui)
  - [硬體](#hardware)
  - [影像](#images)
  - [IoT（物聯網）](#iot-internet-of-things)
  - [作業排程器](#job-scheduler)
  - [JSON](#json)
  - [日誌記錄](#logging)
  - [機器學習](#machine-learning)
  - [訊息傳遞](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [其他](#miscellaneous)
    - [相依性注入](#dependency-injection)
    - [專案結構](#project-layout)
    - [字串](#strings)
    - [未分類](#uncategorized)
  - [自然語言處理](#natural-language-processing)
    - [語言偵測](#language-detection)
    - [形態分析器](#morphological-analyzers)
    - [Slug 產生器](#slugifiers)
    - [分詞器](#tokenizers)
    - [翻譯](#translation)
    - [音譯](#transliteration)
  - [網路](#networking)
    - [HTTP 用戶端](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [套件管理](#package-management)
  - [效能](#performance)
  - [查詢語言](#query-language)
  - [反射](#reflection)
  - [資源嵌入](#resource-embedding)
  - [科學與資料分析](#science-and-data-analysis)
  - [安全性](#security)
  - [序列化](#serialization)
  - [伺服器應用程式](#server-applications)
  - [串流處理](#stream-processing)
  - [範本引擎](#template-engines)
  - [測試](#testing)
    - [測試框架](#testing-frameworks)
    - [模擬物件](#mock)
    - [模糊測試與差異除錯/縮減/精簡](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium 與瀏覽器控制工具](#selenium-and-browser-control-tools)
    - [故障注入](#fail-injection)
  - [文字處理](#text-processing)
    - [格式化工具](#formatters)
    - [標記語言](#markup-languages)
    - [解析器/編碼器/解碼器](#parsersencodersdecoders)
    - [正規表示式](#regular-expressions)
    - [清理淨化](#sanitation)
    - [網頁爬蟲](#scrapers)
    - [RSS](#rss)
    - [工具/其他](#utilitymiscellaneous)
  - [第三方 API](#third-party-apis)
  - [實用工具](#utilities)
  - [UUID](#uuid)
  - [驗證](#validation)
  - [版本控制](#version-control)
  - [影片](#video)
  - [Web 框架](#web-frameworks)
    - [中介軟體](#middlewares)
      - [實際的中介軟體](#actual-middlewares)
      - [用於建立 HTTP 中介軟體的函式庫](#libraries-for-creating-http-middlewares)
    - [路由器](#routers)
  - [WebAssembly](#webassembly)
  - [Webhook 伺服器](#webhooks-server)
  - [Windows](#windows)
  - [工作流程框架](#workflow-frameworks)
  - [XML](#xml)
  - [零信任](#zero-trust)
  - [程式碼分析](#code-analysis)
  - [編輯器外掛](#editor-plugins)
  - [Go Generate 工具](#go-generate-tools)
  - [Go 工具](#go-tools)
  - [軟體套件](#software-packages)
    - [DevOps 工具](#devops-tools)
    - [其他軟體](#other-software)
- [資源](#resources)
  - [基準測試](#benchmarks)
  - [研討會](#conferences)
  - [電子書](#e-books)
    - [付費電子書](#e-books-for-purchase)
    - [免費電子書](#free-e-books)
  - [Gopher 吉祥物](#gophers)
  - [聚會](#meetups)
  - [風格指南](#style-guides)
  - [社群媒體](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [網站](#websites)
    - [教學](#tutorials)
    - [引導式學習](#guided-learning)
  - [貢獻](#contribution)
  - [授權條款](#license)

**[⬆ 回到頂部](#contents)**



</details>

## Actor 模型

_用於建構以 Actor 為基礎之程式的函式庫。_

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - 圖形控制流程函式庫（AOP、Actor、狀態機）。
- [Ergo](https://github.com/ergo-services/ergo) - 以 Actor 為基礎、具備網路透明性的框架，用於在 Golang 中建立事件驅動架構。靈感來自 Erlang。
- [Goakt](https://github.com/Tochemey/goakt) - 快速的分散式 Golang Actor 框架，使用 Protocol Buffers 作為訊息格式。
- [Hollywood](https://github.com/anthdm/hollywood) - 以 Golang 撰寫、極速且輕量的 Actor 引擎。
- [ProtoActor](https://github.com/asynkron/protoactor-go) - 適用於 Go、C# 與 Java/Kotlin 的分散式 Actor。

**[⬆ 回到頂部](#contents)**

## 人工智慧

_用於建構運用 AI 之程式的函式庫。_

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - AI 閘道，可跨 10 個以上供應商路由、保護並監控 LLM 流量。提供相容 OpenAI 的 API、WASM 政策外掛、金絲雀發布與即時儀表板。
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - AI Agent 執行環境，具備事件溯源、檢查點復原與「至多一次」（At-Most-Once）執行保證。以 Go 撰寫。
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - 用 Go 建構有狀態 AI 代理的框架。
- [agy-mcp](https://github.com/tphakala/agy-mcp) - 包裝 Antigravity CLI 的 Model Context Protocol（MCP）伺服器，可執行提示詞與同儕審查。
- [ai](https://github.com/joakimcarlsson/ai) - 用於跨多家供應商建構 AI 代理與應用程式的 Go 工具組，提供統一的 LLM、嵌入向量、工具呼叫與 MCP 整合。
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - 相容 OpenAI 的 LLM 閘道，可在 30 家供應商之間路由請求，並提供備援、速率限制、預算控管、防護機制與可觀測性。
- [chromem-go](https://github.com/philippgille/chromem-go) - 可嵌入的 Go 向量資料庫，提供類似 Chroma 的介面，且沒有任何第三方相依套件。資料存放於記憶體中，可選擇持久化。
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - 讓 Go 程式驅動 Claude Code CLI 非互動式提示介面的 Go 函式庫。
- [crewai-go](https://github.com/rhgs/crewai-go) - 符合 Go 慣用風格的 CrewAI（多代理協作編排）移植版本。零相依，僅使用標準函式庫。
- [Cynative](https://github.com/cynative/cynative) - 用 Go 建構資安工程 AI 代理的框架。設計上即為唯讀、內建沙箱，並提供 45 種代理藍圖，可針對 AWS、GCP、Azure、K8s、GitHub 與 GitLab 進行深度研究。
- [dakera-go](https://github.com/dakera-ai/dakera-go) - Dakera 自架代理記憶伺服器的官方 Go 用戶端 SDK，為記憶儲存/召回、工作階段管理、命名空間操作與衰減設定提供型別化介面。
- [fun](https://gitlab.com/tozd/go/fun) - 在 Go 中使用大型語言模型（LLM）最簡單卻又強大的方式。
- [goai](https://github.com/zendev-sh/goai) - 用於建構 AI 應用程式的 Go SDK。一個 SDK，支援 20 多家供應商。靈感來自 Vercel AI SDK。
- [GoModel](https://github.com/ENTERPILOT/GoModel) - AI 閘道，為 OpenAI、Anthropic、Gemini、Groq、xAI、Ollama 等供應商提供統一且相容 OpenAI 的 API，並具備路由、用量追蹤、速率限制與防護機制。
- [hotplex](https://github.com/hrygo/hotplex) - AI Agent 執行引擎，為 Claude Code、OpenCode、pi-mono 及其他 CLI AI 工具提供長效工作階段。支援全雙工串流、多平台整合與安全沙箱。
- [jargo](https://github.com/gojargo/jargo) - 透過 WebRTC 建構即時語音 AI 代理的框架，將語音轉文字、LLM 與文字轉語音串接成串流管線。
- [keen-code](https://github.com/mochow13/keen-code) - 節省上下文、以終端機為基礎的 AI 程式設計代理。不綁定特定供應商，支援 MCP、Agent Skills、子代理等功能。附有簡潔直觀的 TUI。
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo 是一套用於開發語言模型驅動應用程式的框架。
- [langgraphgo](https://github.com/smallnest/langgraphgo) - 以 LangGraph 概念為基礎、用 LLM 建構有狀態多參與者應用程式的 Go 函式庫，內建多種 Agent 架構。
- [llm-box](https://github.com/alib8b8/llm-box) - 以終端機為基礎的 AI 工作流程引擎，具備 YAML 驅動的管線、20 多家 LLM 供應商（DeepSeek、Qwen、GLM、Mistral 等），以及用於管理工作流程的 TUI。
- [LocalAI](https://github.com/mudler/LocalAI) - 開源的 OpenAI 替代方案，可自行架設 AI 模型。
- [localaik](https://github.com/harshaneel/localaik) - LocalStack 風格的 OpenAI 與 Gemini API 本機模擬工具；單一 Docker 容器，後端採用 llama.cpp + Gemma 3。
- [mcp-go](https://github.com/mark3labs/mcp-go) - Model Context Protocol 的 Go 實作，用於以 Go 建構 MCP 伺服器與用戶端。
- [Ollama](https://github.com/jmorganca/ollama) - 在本機執行大型語言模型。
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - 管理多組 Ollama 實例，並提供負載平衡與容錯移轉。
- [otellix](https://github.com/oluwajubelo1/otellix) - 原生支援 OpenTelemetry 的 LLM 可觀測性與預算防護工具，適用於成本受限的正式環境。
- [routex](https://github.com/Ad3bay0c/routex) - 以 YAML 驅動的 Go 多代理 AI 執行環境，具備 Erlang 風格的監督機制、MCP 工具伺服器支援與 CLI。
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - 針對 PDF、Markdown、DOCX、原始碼等檔案類型進行語意搜尋，使用生成式 AI 嵌入模型將檔案向量化並存入向量資料庫。
- [skillreaper](https://github.com/thousandflowers/skillreaper) - 掃描 AI 代理工作階段記錄的 CLI，可在 Claude Code、Codex CLI、Hermes、OpenCode、Cursor 與 OpenClaw 中找出未使用的技能、MCP 伺服器與代理，並安全地加以隔離。
- [Smeldr](https://github.com/Smeldr/core) - AI 原生的內容後端，具備型別化生命週期管理、為每種內容類型提供原生 MCP 工具，且沒有任何執行期相依套件。
- [snip](https://github.com/edouard-claude/snip) - 透過宣告式 YAML 過濾器將 LLM token 用量減少 60-90% 的 CLI 代理。可直接套用於 Claude Code、Cursor、Copilot 與 Gemini。以 Go 撰寫的 rtk 替代方案。
- [thermal](https://github.com/jadmadi/thermal) - 適用於 AI 程式設計助理的終端機貢獻熱度圖、連續紀錄追蹤器與 token 排行榜。
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - 用於建構以 LLM 為基礎之多代理系統的框架。
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - 為 AI 助理提供網頁搜尋、內容擷取與多來源研究能力的 MCP 伺服器。單一執行檔，支援 5 家搜尋供應商並具備斷路器容錯移轉，以及 4 層爬取管線。
- [zenflow](https://github.com/zendev-sh/zenflow) - 多代理協作編排與工作流程引擎。提供宣告式 YAML 工作流程、採用中樞輻射式信箱的 LLM 協調器，以及無競態的訊息傳遞。一個 YAML 檔、一個 Go 執行檔。可在任何 goai 支援的供應商上執行。

**[⬆ 回到頂部](#contents)**

## 音訊與音樂

_用於處理音訊與音樂的函式庫。_

- [beep](https://github.com/gopxl/beep) - 用於播放與處理音訊的簡單函式庫。
- [flac](https://github.com/mewkiz/flac) - 原生 Go FLAC 編碼器/解碼器，支援 FLAC 串流。
- [gaad](https://github.com/Comcast/gaad) - 原生 Go AAC 位元串流解析器。
- [go-aac](https://github.com/tphakala/go-aac) - 從 FFmpeg 移植的純 Go AAC-LC 編碼器與解碼器。
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - 純 Go、高品質的音訊重新取樣器，支援 SIMD 加速。
- [go-flac](https://github.com/tphakala/go-flac) - 原生 Go FLAC 編碼器與解碼器，支援 SIMD 加速。
- [go-mpris](https://github.com/leberKleber/go-mpris) - mpris dbus 介面的用戶端。
- [go-opus](https://github.com/tphakala/go-opus) - Opus 音訊編解碼器（RFC 6716）的原生 Go 實作，附符合 RFC 規範的解碼器。
- [go-resample](https://github.com/gojargo/go-resample) - 純 Go（不使用 cgo）音訊取樣率轉換器，提供 sinc、線性與零階保持轉換器。
- [go-wav](https://github.com/tphakala/go-wav) - 純 Go WAV/RIFF 讀寫器，支援 RF64 與 BW64，可處理大於 4 GiB 的檔案。
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - 原生 Go 音訊處理函式庫。
- [gocue](https://github.com/iSerganov/gocue) - 音訊分析 CLI，可偵測切入點、切出點與疊接點，並測量 EBU R128 響度，輸出供 Liquidsoap 使用的 JSON。
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Go 的 libsamplerate 繫結。
- [id3v2](https://github.com/bogem/id3v2) - Go 的 ID3 解碼與編碼函式庫。
- [malgo](https://github.com/gen2brain/malgo) - 迷你音訊函式庫。
- [minimp3](https://github.com/tosone/minimp3) - 輕量級 MP3 解碼器函式庫。
- [music-theory](https://github.com/go-music-theory/music-theory) - 以 Go 實作的樂理模型。
- [Oto](https://github.com/hajimehoshi/oto) - 在多個平台上播放聲音的低階函式庫。
- [PortAudio](https://github.com/gordonklaus/portaudio) - PortAudio 音訊 I/O 函式庫的 Go 繫結。
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - 以 JSON 設定的 AI 語音代理，透過 WebSocket 與 WebRTC 執行 STT → LLM → TTS 管線。

**[⬆ 回到頂部](#contents)**

## 身分驗證與授權

_用於實作身分驗證與授權的函式庫。_

- [authboss](https://github.com/volatiletech/authboss) - 模組化的 Web 身分驗證系統。它盡可能移除樣板程式碼與「困難的部分」，讓你每次用 Go 開始新的 Web 專案時，都能直接接上、完成設定並開始建構應用程式，而不必每次都重新打造身分驗證系統。
- [authgate](https://github.com/go-authgate/authgate) - 輕量級 OAuth 2.0 授權伺服器，支援裝置授權許可（[RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)）、搭配 PKCE 的授權碼流程（[RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)），以及用於機器對機器身分驗證的用戶端憑證許可。
- [branca](https://github.com/essentialkaos/branca) - 適用於 Golang 1.15+ 的 branca token [規格實作](https://github.com/tuupola/branca-spec)。
- [casbin](https://github.com/hsluoyz/casbin) - 支援 ACL、RBAC 與 ABAC 等存取控制模型的授權函式庫。
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - 提供 cookies.txt 檔案格式的解析器。
- [go-githubauth](https://github.com/jferrl/go-githubauth) - GitHub 身分驗證工具：產生並使用 GitHub 應用程式權杖與安裝權杖。
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian 是一個 Golang 函式庫，以簡單、簡潔且符合慣用風格的方式建立強大的現代 API 與 Web 身分驗證，支援 LDAP、Basic、Bearer token 與憑證式身分驗證。
- [go-iam](https://github.com/melvinodsa/go-iam) - 以開發者為優先的身分與存取管理系統，附簡單的使用者介面。
- [go-jose](https://github.com/go-jose/go-jose) - 相當完整地實作 JOSE 工作小組的 JSON Web Token、JSON Web Signatures 與 JSON Web Encryption 規格。
- [go-jwt](https://github.com/deatil/go-jwt) - Go 的 JWT（JSON Web Token）函式庫。
- [go-jwt](https://github.com/pardnchiu/go-jwt) - JWT 身分驗證套件，提供存取權杖與更新權杖，具備指紋識別、Redis 儲存與自動更新功能。
- [goiabada](https://github.com/leodip/goiabada) - 支援 OAuth2 與 OpenID Connect 的開源身分驗證與授權伺服器。
- [gologin](https://github.com/dghubble/gologin) - 可串接的處理常式，用於透過 OAuth1 與 OAuth2 身分驗證供應商登入。
- [gorbac](https://github.com/mikespook/gorbac) - 提供以 Golang 實作的輕量級角色型存取控制（RBAC）。
- [gosession](https://github.com/Kwynto/gosession) - 這是 GoLang 中適用於 net/http 的快速工作階段（session）套件。這個套件或許是工作階段機制的最佳實作，至少它正努力成為最佳實作。
- [goth](https://github.com/markbates/goth) - 提供簡單、簡潔且符合慣用風格的方式來使用 OAuth 與 OAuth2。開箱即可支援多個供應商。
- [jeff](https://github.com/abraithwaite/jeff) - 簡單、彈性、安全且符合慣用風格的 Web 工作階段管理，支援可插拔後端。
- [jwt](https://github.com/pascaldekloe/jwt) - 輕量級 JSON Web Token（JWT）函式庫。
- [jwt](https://github.com/cristalhq/jwt) - 安全、簡單且快速的 Go JSON Web Token 函式庫。
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - 適用於 Golang HTTP 伺服器的 JWT 中介軟體，提供大量設定選項。
- [jwt-go](https://github.com/golang-jwt/jwt) - 功能完整的 JSON Web Token（JWT）實作。此函式庫支援 JWT 的解析與驗證，以及產生與簽署。
- [jwx](https://github.com/lestrrat-go/jwx) - 實作各種 JWx（JWA/JWE/JWK/JWS/JWT，又稱 JOSE）技術的 Go 模組。
- [keto](https://github.com/ory/keto) - 「Zanzibar: Google's Consistent, Global Authorization System」的開源（Go）實作。提供 gRPC、REST API、newSQL，以及簡單又細緻的權限語言。支援 ACL、RBAC 及其他存取模型。
- [loginsrv](https://github.com/tarent/loginsrv) - JWT 登入微服務，支援 OAuth2（Github）、htpasswd、osiam 等可插拔後端。
- [melange](https://github.com/pthm/melange) - 將 OpenFGA 授權結構描述編譯成 PL/pgSQL 函式，在 PostgreSQL 內執行細粒度的關係型存取控制檢查。
- [oauth2](https://github.com/golang/oauth2) - goauth2 的後繼者。通用的 OAuth 2.0 套件，支援 JWT、Google API、Compute Engine 與 App Engine。
- [oidc](https://github.com/zitadel/oidc) - 易於使用的 OpenID Connect 用戶端與伺服器函式庫，專為 Go 撰寫並通過 OpenID 基金會認證。
- [openfga](https://github.com/openfga/openfga) - 依據「Zanzibar: Google's Consistent, Global Authorization System」論文實作的細粒度授權系統。由 [CNCF](https://www.cncf.io/) 支持。
- [osin](https://github.com/openshift/osin) - Golang OAuth2 伺服器函式庫。
- [otpgen](https://github.com/grijul/otpgen) - 產生 TOTP/HOTP 驗證碼的函式庫。
- [otpgo](https://github.com/jltorresm/otpgo) - Go 的基於時間之一次性密碼（TOTP）與基於 HMAC 之一次性密碼（HOTP）函式庫。
- [paseto](https://github.com/o1egl/paseto) - 平台無關安全權杖（PASETO）的 Golang 實作。
- [permissions](https://github.com/xyproto/permissions) - 用於追蹤使用者、登入狀態與權限的函式庫。使用安全 Cookie 與 bcrypt。
- [scope](https://github.com/SonicRoshan/scope) - 在 Go 中輕鬆管理 OAuth2 範圍（scope）。
- [scs](https://github.com/alexedwards/scs) - HTTP 伺服器的工作階段管理器。
- [securecookie](https://github.com/chmike/securecookie) - 高效率的安全 Cookie 編碼/解碼。
- [session](https://github.com/icza/session) - 適用於 Web 伺服器的 Go 工作階段管理（包含對 Google App Engine - GAE 的支援）。
- [sessions](https://github.com/adam-hanna/sessions) - 適用於 Go HTTP 伺服器的工作階段服務，極其簡單、效能極高且高度可自訂。
- [sessionup](https://github.com/swithek/sessionup) - 簡單卻有效的 HTTP 工作階段管理與識別套件。
- [sjwt](https://github.com/brianvoe/sjwt) - 簡單的 JWT 產生器與解析器。
- [spicedb](https://github.com/authzed/spicedb) - 受 Zanzibar 啟發、支援細粒度授權的資料庫。
- [x509proxy](https://github.com/vkuznet/x509proxy) - 處理 X509 代理憑證的函式庫。

**[⬆ 回到頂部](#contents)**

## 區塊鏈

_用於建構區塊鏈的工具。_

- [cometbft](https://github.com/cometbft/cometbft) - 分散式、具拜占庭容錯能力的確定性狀態機複寫引擎。它是 Tendermint Core 的分支，實作了 Tendermint 共識演算法。
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - 在 Cosmos 生態系中建構公有區塊鏈的框架。
- [gno](https://github.com/gnolang/gno) - 以 Golang 與 Gnolang 打造的完整智慧合約套件；Gnolang 是專為區塊鏈打造的確定性 Go 變體。
- [go-ethereum](https://github.com/ethereum/go-ethereum) - 以太坊協定的官方 Go 實作。
- [gosemble](https://github.com/LimeChain/gosemble) - 以 Go 為基礎、用於建構相容 Polkadot/Substrate 之執行環境的框架。
- [gossamer](https://github.com/ChainSafe/gossamer) - Polkadot Host 的 Go 實作。
- [kubo](https://github.com/ipfs/kubo) - 以 Go 實作的 IPFS。提供內容定址儲存，可用於 DApp 中的去中心化儲存。以 IPFS 協定為基礎。
- [lnd](https://github.com/lightningnetwork/lnd) - 閃電網路（Lightning Network）節點的完整實作。
- [nview](https://github.com/blinklabs-io/nview) - Cardano 節點的本機監控工具。這是一個 TUI（終端機使用者介面），設計上可適應大多數螢幕。
- [pactus](https://github.com/pactus-project/pactus) - 以 Go 實作的 Pactus 區塊鏈全節點。
- [solana-go](https://github.com/gagliardetto/solana-go) - 與 Solana JSON RPC 及 WebSocket 介面互動的 Go 函式庫。
- [tendermint](https://github.com/tendermint/tendermint) - 高效能中介軟體，可利用 Tendermint 共識與區塊鏈協定，將以任何程式語言撰寫的狀態機轉換為具拜占庭容錯能力的複寫狀態機。
- [tronlib](https://github.com/kslamph/tronlib) - 全面且可用於正式環境的 Go SDK，用於與 TRON 區塊鏈互動，並支援 TRC20 代幣。

**[⬆ 回到頂部](#contents)**

## 機器人建構

_用於建構與操作機器人的函式庫。_

- [arikawa](https://github.com/diamondburned/arikawa) - Discord API 的函式庫與框架。
- [bot](https://github.com/go-telegram/bot) - 零相依的 Telegram Bot 函式庫，並附加額外的 UI 元件。
- [echotron](https://github.com/NicoNex/echotron) - 優雅且支援並行的 Go Telegram Bot 函式庫。
- [go-joe](https://joe-bot.net) - 受 Hubot 啟發、以 Go 撰寫的通用機器人函式庫。
- [go-sarah](https://github.com/oklahomer/go-sarah) - 為 LINE、Slack、Gitter 等聊天服務建構機器人的框架。
- [go-tg](https://github.com/mr-linch/go-tg) - 依據官方文件產生的 Go 用戶端函式庫，用於存取 Telegram Bot API，並內建建構複雜機器人所需的各種工具。
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - 為 twitch.tv 聊天室撰寫機器人的函式庫。
- [micha](https://github.com/onrik/micha) - Telegram Bot API 的 Go 函式庫。
- [slack-bot](https://github.com/innogames/slack-bot) - 為懶惰開發者準備、開箱即用的 Slack Bot：自訂指令、Jenkins、Jira、Bitbucket、Github……
- [slacker](https://github.com/slack-io/slacker) - 易於使用的 Slack 機器人建立框架。
- [telebot](https://github.com/tucnak/telebot) - 以 Go 撰寫的 Telegram 機器人框架。
- [teleflow](https://github.com/kslamph/teleflow) - 簡單且型別安全的 Telegram 機器人框架，具備流暢的對話流程與自動狀態管理。
- [telego](https://github.com/mymmrac/telego) - Golang 的 Telegram Bot API 函式庫，一對一完整實作所有 API。
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - 簡單且簡潔的 Telegram 機器人用戶端。
- [TG](https://github.com/enetx/tg) - Go 的 Telegram 機器人框架。
- [wayback](https://github.com/wabarc/wayback) - 適用於 Telegram、Mastodon、Slack 及其他訊息平台的網頁封存機器人。
- [ymsdk](https://github.com/rekurt/ymsdk) - Yandex Messenger Bot API 的 Go SDK，具備型別安全的模型、自動重試與速率限制處理。
   - [Wisp](https://github.com/wisp-trading/wisp) - Go 的事件驅動交易框架。支援現貨、永續合約與預測市場。支援多家交易所（Bybit、Hyperliquid、Polymarket）。

**[⬆ 回到頂部](#contents)**

## 建置自動化

_協助建置自動化的函式庫與工具。_

- [1build](https://github.com/gopinath-langote/1build) - 順暢管理專案專屬指令的命令列工具。
- [air](https://github.com/cosmtrek/air) - Air：Go 應用程式的即時重新載入工具。
- [anko](https://github.com/GuilhermeCaruso/anko) - 適用於多種程式語言的簡單應用程式監看器。
- [gaper](https://github.com/maxclaus/gaper) - 在 Go 專案崩潰或受監看的檔案變更時，自動建置並重新啟動專案。
- [gilbert](https://go-gilbert.github.io) - Go 專案的建置系統與任務執行器。
- [gob](https://github.com/kcmvp/gob) - 類似 [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) 的 Go 專案建置工具。
- [goyek](https://github.com/goyek/goyek) - 用 Go 建立建置管線。
- [mage](https://github.com/magefile/mage) - Mage 是使用 Go 的 make/rake 風格建置工具。
- [mmake](https://github.com/tj/mmake) - 現代化的 Make。
- [realize](https://github.com/tockins/realize) - 具備檔案監看與即時重新載入功能的 Go 建置系統。可透過自訂路徑執行、建置並監看檔案變更。
- [rex](https://github.com/rexrun-dev/rex) - 零設定的通用專案執行器。自動偵測你的技術堆疊（Go、Node、Python、Rust、PHP、Zig、Elixir）並執行正確的指令。
- [Task](https://github.com/go-task/task) - 簡單的「Make」替代方案。
- [taskctl](https://github.com/taskctl/taskctl) - 並行任務執行器。
- [xc](https://github.com/joerdav/xc) - 以 README.md 定義任務的任務執行器，讓 Markdown 可以執行。

**[⬆ 回到頂部](#contents)**

## 命令列

### 進階主控台介面

_用於建構主控台應用程式與主控台使用者介面的函式庫。_

- [asciigraph](https://github.com/guptarohit/asciigraph) - 在命令列應用程式中繪製輕量 ASCII 折線圖 ╭┈╯ 的 Go 套件，沒有其他相依套件。
- [aurora](https://github.com/logrusorgru/aurora) - 支援 fmt.Printf/Sprintf 的 ANSI 終端機色彩。
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - 在終端機中繪製高度可自訂的方框。
- [bubble-table](https://github.com/Evertras/bubble-table) - bubbletea 的互動式表格元件。
- [bubbles](https://github.com/charmbracelet/bubbles) - bubbletea 的 TUI 元件。
- [bubbletea](https://github.com/charmbracelet/bubbletea) - 以 The Elm Architecture 為基礎、用於建構終端機應用程式的 Go 框架。
- [chroma16](https://github.com/arceus-7/chroma16) - 從單一種子顏色或字串產生和諧的 16 色終端機調色盤。
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - 適用於 Kubernetes 資訊清單或一般設定檔的動態設定檔範本工具。
- [ctc](https://github.com/wzshiming/ctc) - 非侵入式的跨平台終端機色彩函式庫，無需修改 Print 方法。
- [fx](https://github.com/antonmedv/fx) - 終端機 JSON 檢視器與處理器。
- [go-ataman](https://github.com/workanator/go-ataman) - 在終端機中渲染 ANSI 彩色文字範本的 Go 函式庫。
- [go-colorable](https://github.com/mattn/go-colorable) - 適用於 Windows 的彩色輸出寫入器。
- [go-colortext](https://github.com/daviddengcn/go-colortext) - 在終端機中輸出彩色文字的 Go 函式庫。
- [go-isatty](https://github.com/mattn/go-isatty) - Golang 的 isatty。
- [go-palette](https://github.com/abusomani/go-palette) - 使用 ANSI 色彩提供優雅且便利之樣式定義的 Go 函式庫。完全相容並包裝 [fmt 函式庫](https://pkg.go.dev/fmt)，打造美觀的終端機版面。
- [go-prompt](https://github.com/c-bata/go-prompt) - 用於建構強大互動式提示的函式庫，靈感來自 [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit)。
- [go-tui](https://github.com/grindlemire/go-tui) - 宣告式終端機 UI 框架，提供類似 templ 的範本、flexbox 版面配置，以及支援編輯器的語言伺服器。
- [gocui](https://github.com/jroimartin/gocui) - 用於建立主控台使用者介面的極簡 Go 函式庫。
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - 為終端機文字套用樣式。
- [gookit/color](https://github.com/gookit/color) - 終端機色彩渲染工具函式庫，支援 16 色、256 色與 RGB 色彩輸出，相容於 Windows。
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf 透過互動式 CLI 產生帶有既定慣例、具正式環境品質的 Go 專案樣板。別再於專案之間複製貼上骨架程式碼了。
- [lazyenv](https://github.com/lazynop/lazyenv) - 用於瀏覽、比較與編輯 .env 檔案的 TUI。
- [lazyteams](https://github.com/agmonetti/lazyteams) - 以鍵盤操作的 Microsoft Teams 終端機使用者介面。
- [lipgloss](https://github.com/charmbracelet/lipgloss) - 以宣告方式定義終端機中的色彩、格式與版面配置樣式。
- [loom](https://github.com/loom-go/loom) - 以 Signal 為基礎、用於建構 TUI 的響應式元件框架。
- [marker](https://github.com/cyucelen/marker) - 比對並標記字串、產生彩色終端機輸出的最簡單方式。
- [mpb](https://github.com/vbauerster/mpb) - 適用於終端機應用程式的多重進度條。
- [phoenix](https://github.com/phoenix-tui/phoenix) - 高效能 TUI 框架，採用受 Elm 啟發的架構，具備完美的 Unicode 渲染與零記憶體配置的事件系統。
- [progressbar](https://github.com/schollz/progressbar) - 可在所有作業系統上運作的基本執行緒安全進度條。
- [pterm](https://github.com/pterm/pterm) - 透過眾多可組合的元件，在各平台上美化主控台輸出的函式庫。
- [simpletable](https://github.com/alexeyco/simpletable) - 用 Go 在終端機中繪製簡單表格。
- [spinner](https://github.com/briandowns/spinner) - 輕鬆提供可設定之終端機旋轉指示器的 Go 套件。
- [tabby](https://github.com/cheynewallace/tabby) - 用於製作超簡單 Golang 表格的小型函式庫。
- [table](https://github.com/tomlazar/table) - 用於製作終端機彩色表格的小型函式庫。
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox 是用於建立跨平台文字介面的函式庫。
- [termdash](https://github.com/mum4k/termdash) - 以 **termbox-go** 為基礎、靈感來自 [termui](https://github.com/gizak/termui) 的 Go 終端機儀表板。
- [termenv](https://github.com/muesli/termenv) - 為你的終端機應用程式提供進階的 ANSI 樣式與色彩支援。
- [termui](https://github.com/gizak/termui) - 以 **termbox-go** 為基礎、靈感來自 [blessed-contrib](https://github.com/yaronn/blessed-contrib) 的 Go 終端機儀表板。
- [uilive](https://github.com/gosuri/uilive) - 即時更新終端機輸出的函式庫。
- [uiprogress](https://github.com/gosuri/uiprogress) - 在終端機應用程式中渲染進度條的彈性函式庫。
- [uitable](https://github.com/gosuri/uitable) - 透過表格資料提升終端機應用程式可讀性的函式庫。
- [vhs](https://github.com/charmbracelet/vhs) - 你的 CLI 家用錄影機：用程式碼產生終端機 GIF，供文件與教學使用。
- [yacspin](https://github.com/theckman/yacspin) - 又一個 CLI 旋轉指示器套件（Yet Another CLi Spinner），用於處理終端機旋轉指示器。

**[⬆ 回到頂部](#contents)**

### 標準 CLI

_用於建構標準或基本命令列應用程式的函式庫。_

- [acmd](https://github.com/cristalhq/acmd) - 簡單、實用且帶有既定設計理念的 Go CLI 套件。
- [argparse](https://github.com/akamensky/argparse) - 受 Python argparse 模組啟發的命令列參數解析器。
- [argv](https://github.com/cosiner/argv) - 使用 bash 語法將命令列字串分割為參數陣列的 Go 函式庫。
- [boa](https://github.com/GiGurra/boa) - 從結構標籤以宣告方式定義旗標、環境變數、驗證與設定檔。以 cobra 為基礎打造。
- [carapace](https://github.com/rsteube/carapace) - spf13/cobra 的命令參數補全產生器。
- [carapace-bin](https://github.com/rsteube/carapace-bin) - 支援多種 shell 與多個指令的參數補全工具。
- [carapace-spec](https://github.com/rsteube/carapace-spec) - 使用規格檔定義簡單的補全。
- [climax](https://github.com/tucnak/climax) - 秉持 Go 指令精神、具備「人性化面貌」的替代 CLI。
- [clîr](https://github.com/leaanthony/clir) - 簡單清晰的 CLI 函式庫。無相依套件。
- [cmd](https://github.com/posener/cmd) - 擴充標準 `flag` 套件，以符合慣用風格的方式支援子指令等功能。
- [cmdr](https://github.com/hedzr/cmdr) - POSIX/GNU 風格、類似 getopt 的命令列 UI Go 函式庫。
- [cobra](https://github.com/spf13/cobra) - 用於現代 Go CLI 互動的指令工具。
- [command-chain](https://github.com/rainu/go-command-chain) - 用於設定並執行指令鏈（例如 Unix shell 中的管線）的 Go 函式庫。
- [commandeer](https://github.com/jaffee/commandeer) - 對開發者友善的 CLI 應用程式：依據結構欄位與標籤設定旗標、預設值與用法說明。
- [complete](https://github.com/posener/complete) - 用 Go 撰寫 bash 補全，並提供 Go 指令的 bash 補全。
- [console](https://github.com/reeflective/console) 適用於 Cobra 指令的閉環應用程式函式庫，提供 oh-my-posh 提示字元等功能。
- [Dnote](https://github.com/dnote/dnote) - 簡單的命令列筆記本，支援多裝置同步。
- [elvish](https://github.com/elves/elvish) - 一種表達力豐富的程式語言，也是多功能的互動式 shell。
- [env](https://github.com/codingconcepts/env) - 以標籤為基礎的結構環境變數設定。
- [flaggy](https://github.com/integrii/flaggy) - 穩健且符合慣用風格的旗標套件，對子指令有出色的支援。
- [flagvar](https://github.com/sgreben/flagvar) - 適用於 Go 標準 `flag` 套件的旗標參數型別集合。
- [flash-flags](https://github.com/agilira/flash-flags) - 超快速、零相依、符合 POSIX 的旗標解析函式庫，可直接替換標準函式庫，並經過安全強化。
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - 以終端機為基礎的點對點檔案與訊息傳輸工具，採用自訂的可靠 UDP。
- [getopt](https://github.com/jon-codes/getopt) - 精確的 Go `getopt`，已對照 GNU libc 實作進行驗證。
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - 以極簡、標準與六角形架構模式建立 Go 應用程式骨架的 CLI 工具。
- [go-arg](https://github.com/alexflint/go-arg) - Go 中以結構為基礎的參數解析。
- [go-flags](https://github.com/jessevdk/go-flags) - Go 命令列選項解析器。
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - 受 Perl GetOpt::Long 彈性啟發的 Go 選項解析器。
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - 可自訂的行編輯函式庫，支援 Emacs 按鍵綁定、Unicode、自動補全與語法突顯。用於 NYAGOS shell。
- [gocmd](https://github.com/devfacet/gocmd) - 用於建構命令列應用程式的 Go 函式庫。
- [goopt](https://github.com/napalu/goopt) - 宣告式、以結構標籤為基礎的 Go CLI 框架，功能豐富，包括階層式指令/旗標、國際化（i18n）、shell 補全與驗證。
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Go 原生的單一執行檔多工具程式（multicall），內含 77 個 POSIX 工具，BusyBox 測試相容度超過 97%。
- [hashicorp/cli](https://github.com/hashicorp/cli) - 用於實作命令列介面的 Go 函式庫。
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - 具備自動設定與相依性注入的 CLI 應用程式框架。
- [job](https://github.com/liujianping/job) - JOB，將你的短期指令變成長期作業。
- [kingpin](https://github.com/alecthomas/kingpin) - 支援子指令的命令列與旗標解析器（已由 `kong` 取代；見下方）。
- [liner](https://github.com/peterh/liner) - 適用於命令列介面、類似 readline 的 Go 函式庫。
- [mcli](https://github.com/jxskiss/mcli) - 精簡卻非常強大的 Go CLI 函式庫。
- [memsh](https://github.com/amjadjibon/memsh) - 以 Go 實作的虛擬 bash shell：在記憶體內檔案系統（afero）上執行 shell 指令，支援 WASM 外掛並提供可嵌入的 HTTP 伺服器。
- [mkideal/cli](https://github.com/mkideal/cli) - 以 Golang 結構標籤為基礎、功能豐富且易於使用的命令列套件。
- [mow.cli](https://github.com/jawher/mow.cli) - 用於建構 CLI 應用程式的 Go 函式庫，具備精密的旗標與參數解析及驗證。
- [neuron-cli](https://github.com/steevin/neuron-cli) - 本機優先、相容 Obsidian 的終端機知識管理工具。
- [OpenCLI](https://github.com/bcdxn/opencli) - OpenAPI 風格的 CLI 規格；在與語言無關的文件中定義介面，即可產生文件與框架樣板程式碼。
- [ops](https://github.com/nanovms/ops) - Unikernel 建置/編排工具。
- [orpheus](https://github.com/agilira/orpheus) - 具備安全強化、外掛儲存系統與正式環境可觀測性功能的 CLI 框架。
- [pflag](https://github.com/spf13/pflag) - Go flag 套件的直接替代品，實作 POSIX/GNU 風格的 --flags。
- [readline](https://github.com/reeflective/readline) - 具備現代化且易用 UI 功能的 shell 函式庫。
- [sflags](https://github.com/octago/sflags) - 以結構為基礎的旗標產生器，支援 flag、urfave/cli、pflag、cobra、kingpin 等函式庫。
- [structcli](https://github.com/leodido/structcli) - 消除 Cobra 樣板程式碼：從 Go 結構以宣告方式建構強大且功能豐富的 CLI。
- [strumt](https://github.com/antham/strumt) - 建立提示鏈的函式庫。
- [subcmd](https://github.com/bobg/subcmd) - 解析與執行子指令的另一種方式。可與標準 `flag` 套件搭配使用。
- [teris-io/cli](https://github.com/teris-io/cli) - 在 Go 中建構命令列介面的簡單而完整的 API。
- [urfave/cli](https://github.com/urfave/cli) - 用 Go 建構命令列應用程式的簡單、快速又有趣的套件（前身為 codegangsta/cli）。
- [version](https://github.com/mszostok/version) - 以多種格式收集並顯示 CLI 版本資訊，並附帶升級通知。
- [wlog](https://github.com/dixonwille/wlog) - 支援跨平台色彩與並行的簡單日誌介面。
- [wmenu](https://github.com/dixonwille/wmenu) - 易於使用的選單結構，適用於提示使用者進行選擇的 CLI 應用程式。

**[⬆ 回到頂部](#contents)**

## 設定

_用於解析設定的函式庫。_

- [aconfig](https://github.com/cristalhq/aconfig) - 簡單、實用且帶有既定設計理念的設定載入器。
- [argus](https://github.com/agilira/argus) - 檔案監看與設定管理工具，具備 MPSC 環形緩衝區、自適應批次策略，以及通用格式解析（JSON、YAML、TOML、INI、HCL、Properties）。
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - 讓 Go 應用程式取用 Azure App Configuration 資料的設定提供者。
- [bcl](https://github.com/wkhere/bcl) - BCL 是一種類似 HCL 的設定語言。
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - 極簡的設定讀取器（可從檔案、環境變數及任何你想要的地方讀取）。
- [config](https://github.com/JeremyLoy/config) - 雲端原生應用程式設定。只需兩行就能將環境變數繫結至結構。
- [config](https://github.com/num30/config) - 只需兩行程式碼，即可使用檔案、環境變數或旗標設定你的應用程式。
- [config](https://github.com/andreiavrammsd/config) - 以結構為基礎的設定載入器，具備專用的設定檔解析器，支援環境變數、旗標、預設值與驗證。
- [configuration](https://github.com/BoRuDar/configuration) - 從環境變數、檔案、旗標與「default」標籤初始化設定結構的函式庫。
- [configuro](https://github.com/sherifabdlnaby/configuro) - 帶有既定設計理念的設定載入與驗證框架，從環境變數與檔案讀取設定，專注於符合 12-Factor 的應用程式。
- [confiq](https://github.com/greencoda/confiq) - 將結構化資料格式解碼為設定結構的 Go 函式庫，支援多種資料格式。
- [confita](https://github.com/heetch/confita) - 從多個後端以層疊方式將設定載入結構。
- [conflate](https://github.com/the4thamigo-uk/conflate) - 從任意 URL 合併多個 JSON/YAML/TOML 檔案的函式庫/工具，可依 JSON Schema 進行驗證，並套用 Schema 中定義的預設值。
- [enflag](https://github.com/atelpis/enflag) - 以容器為導向、零相依的設定函式庫，統一環境變數與旗標的解析。使用泛型確保型別安全，不需反射或結構標籤。
- [env](https://github.com/caarlos0/env) - 將環境變數解析為 Go 結構（支援預設值）。
- [env](https://github.com/junk1tm/env) - 將環境變數載入結構的輕量級套件。
- [env](https://github.com/syntaqx/env) - 支援反序列化至結構的環境變數工具套件。
- [envconfig](https://github.com/vrischmann/envconfig) - 從環境變數讀取你的設定。
- [envh](https://github.com/antham/envh) - 管理環境變數的輔助工具。
- [envyaml](https://github.com/yuseferi/envyaml) - 支援環境變數的 YAML 讀取器。讓你能將機密資訊放在環境變數中，同時以結構化 YAML 載入設定。
- [fig](https://github.com/kkyr/fig) - 從檔案與環境變數讀取設定的小型函式庫（支援驗證與預設值）。
- [genv](https://github.com/sakirsensoy/genv) - 輕鬆讀取環境變數，並支援 dotenv。
- [go-array](https://github.com/deatil/go-array) - 從 map、slice 或 JSON 讀取或設定資料的 Go 套件。
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - 從 AWS System Manager - Parameter Store 擷取參數的 Go 套件。
- [go-cfg](https://github.com/dsbasko/go-cfg) - 此函式庫提供統一的方式，從環境變數、旗標與設定檔（.json、.yaml、.toml、.env）等各種來源將設定資料讀入結構。
- [go-conf](https://github.com/ThomasObenaus/go-conf) - 以加上註記之結構為基礎的簡單應用程式設定函式庫。支援從環境變數、設定檔與命令列參數讀取設定。
- [go-config](https://github.com/MordaTeam/go-config) - 處理應用程式設定的簡單便利函式庫。
- [go-external-config](https://github.com/go-external-config/go) - 受 Spring 啟發的 Go 設定管理函式庫。
- [go-external-config/aws](https://github.com/go-external-config/aws) - 為 go-external-config 提供 AWS 屬性來源支援。
- [go-external-config/consul](https://github.com/go-external-config/consul) - 為 go-external-config 提供 Consul 屬性來源支援。
- [go-external-config/vault](https://github.com/go-external-config/vault) - 為 go-external-config 提供 Vault 屬性來源支援。
- [go-ini](https://github.com/subpop/go-ini) - 序列化與反序列化 INI 檔案的 Go 套件。
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - 從 AWS SSM（Parameter Store）載入設定參數的 Go 工具。
- [go-up](https://github.com/ufoscout/go-up) - 簡單的設定函式庫，支援遞迴解析預留位置，沒有任何魔法。
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - 能感知來源位置的 YAML 驗證工具，支援原生 Go 結構描述與 JSON Schema。
- [GoCfg](https://github.com/Jagerente/gocfg) - 設定管理器，提供以結構標籤為基礎的契約、自訂值提供者、解析器與文件產生功能。可自訂又不失簡單。
- [goconfig](https://github.com/fulldump/goconfig) - 以明確的優先順序，從旗標、環境變數、config.json 與預設值填入 Go 結構。無額外相依套件。
- [godotenv](https://github.com/joho/godotenv) - Ruby dotenv 函式庫的 Go 移植版本（從 `.env` 載入環境變數）。
- [goenv](https://github.com/psyb0t/goenv) - 讀取 ENV 環境變數，並回報程序是在正式環境還是開發環境中執行。
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config 是適用於 Go 程式語言、輕量卻強大的設定管理器。
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - 模組化的 JSON 設定。讓設定結構與其所設定的程式碼放在一起，並將解析工作委派給子模組，同時不犧牲完整的設定序列化。
- [gonfig](https://github.com/milad-abbasi/gonfig) - 以標籤為基礎的設定解析器，可從不同提供者將值載入型別安全的結構。
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - 透過反射將環境變數中的設定載入結構，支援以結構標籤設定預設值與必填欄位。
- [gookit/config](https://github.com/gookit/config) - 應用程式設定管理（載入、取得、設定）。支援 JSON、YAML、TOML、INI、HCL。可載入多個檔案，並覆寫合併資料。
- [harvester](https://github.com/beatlabs/harvester) - Harvester 是易於使用的靜態與動態設定套件，支援初始值植入、環境變數與 Consul 整合。
- [hedzr/store](https://github.com/hedzr/store) - 可擴充的高效能設定管理函式庫，針對階層式資料進行最佳化。
- [hjson](https://github.com/hjson/hjson-go) - Human JSON，一種為人類設計的設定檔格式。語法寬鬆、錯誤更少、註解更多。
- [hocon](https://github.com/gurkankaymak/hocon) - 處理 HOCON（一種對人類友善的 JSON 超集）格式的設定函式庫，支援環境變數、參照其他值、註解與多檔案等功能。
- [ini](https://github.com/go-ini/ini) - 讀寫 INI 檔案的 Go 套件。
- [ini](https://github.com/wlevene/ini) - INI 解析與寫入函式庫，可反序列化至結構、序列化為 JSON、寫入檔案並監看檔案。
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - 管理來自環境變數之設定資料的 Go 函式庫。
- [koanf](https://github.com/knadh/koanf) - 在 Go 應用程式中讀取設定的輕量可擴充函式庫。內建支援 JSON、TOML、YAML、環境變數與命令列。
- [konf](https://github.com/nil-go/konf) - 從檔案、環境變數、旗標與雲端（如 AWS、Azure、GCP）讀取/監看設定的最簡單 API。
- [konfig](https://github.com/lalamove/konfig) - 為分散式處理時代打造、可組合、可觀測且高效能的 Go 設定處理工具。
- [kong](https://github.com/alecthomas/kong) - 命令列解析器，支援任意複雜的命令列結構，以及 YAML、JSON、TOML 等額外設定來源（`kingpin` 的後繼者）。
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - 讀取環境變數的簡單實用套件。
- [nfigure](https://github.com/muir/nfigure) - 以各函式庫結構標籤為基礎的設定，來源包括命令列（POSIX 與 Go 風格）、環境變數、JSON、YAML。
- [onion](https://github.com/goraz/onion) - Go 的分層式設定，支援 JSON、TOML、YAML、properties、etcd、環境變數，以及使用 PGP 加密。
- [piper](https://github.com/Yiling-J/piper) - Viper 的包裝器，支援設定繼承與鍵產生。
- [sonic](https://github.com/bytedance/sonic) - 極速的 JSON 序列化與反序列化函式庫。
- [swap](https://github.com/oblq/swap) - 依據建置環境遞迴地實例化/設定結構（YAML、TOML、JSON 與環境變數）。
- [typenv](https://github.com/diegomarangoni/typenv) - 極簡、零相依、具型別的環境變數函式庫。
- [uConfig](https://github.com/omeid/uconfig) - 輕量、零相依且可擴充的設定管理。
- [viper](https://github.com/spf13/viper) - 長著毒牙的 Go 設定工具。
- [xdg](https://github.com/adrg/xdg) - [XDG 基礎目錄規範](https://specifications.freedesktop.org/basedir-spec/latest/)與 [XDG 使用者目錄](https://wiki.archlinux.org/index.php/XDG_user_directories)的 Go 實作。
- [yamagiconf](https://github.com/romshark/yamagiconf) - 用於 Go 設定的 YAML「安全子集」。
- [zerocfg](https://github.com/chaindead/zerocfg) - 毫不費力、簡潔的設定管理，避免樣板與重複程式碼，支援多個來源並可依優先順序覆寫。

**[⬆ 回到頂部](#contents)**

## 持續整合

_協助持續整合的工具。_

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse 是一個分散式 CI 平台。
- [Bencher](https://bencher.dev/) - 一套持續基準測試工具，旨在 CI 中及早發現效能退化。
- [CDS](https://github.com/ovh/cds) - 企業級 CI/CD 與 DevOps 自動化開源平台。
- [dot](https://github.com/opnlabs/dot) - 極簡、本機優先的持續整合系統，使用 Docker 分階段並行執行作業。
- [drone](https://github.com/drone/drone) - Drone 是建構於 Docker 之上、以 Go 撰寫的持續整合平台。
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - 免費追蹤 pull request 程式碼覆蓋率的 GitHub Action，附有美觀的 HTML 預覽。
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - 在 GitHub Actions 中使用 Go 1.18 內建的模糊測試。
- [go-semver-release](https://github.com/s0ders/go-semver-release) - 自動化 Git 儲存庫的語意化版本管理。
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - 當測試覆蓋率低於設定門檻時回報問題的 GitHub Action。
- [gomason](https://github.com/nikogura/gomason) - 從乾淨的工作區測試、建置、簽署並發布你的 Go 執行檔。
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - 給人類閱讀的 go test 輸出。
- [goveralls](https://github.com/mattn/goveralls) - Coveralls.io 持續程式碼覆蓋率追蹤系統的 Go 整合。
- [muffet](https://github.com/raviqqe/muffet) - 以 Go 撰寫的快速網站連結檢查工具，另請參閱[替代方案](https://github.com/lycheeverse/lychee#features)。
- [overalls](https://github.com/go-playground/overalls) - 為 goveralls 等工具產生多套件 Go 專案的 coverprofile。
- [PikoCI](https://github.com/pikoci/pikoci) - 受 Concourse 啟發的自架 CI/CD。單一執行檔，可搭配任何資料庫與任何佇列。支援 HCL 管線、可插拔的資源類型與執行器。
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - 遞迴覆蓋率測試工具。
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker 是 Drone CI 系統的社群分支。

**[⬆ 回到頂部](#contents)**

## CSS 前置處理器

_用於前置處理 CSS 檔案的函式庫。_

- [go-css](https://github.com/napsy/go-css) - 以 Go 撰寫的非常簡單的 CSS 解析器。
- [go-libsass](https://github.com/wellington/go-libsass) - 100% 相容 Sass 的 libsass 專案之 Go 包裝器。

**[⬆ 回到頂部](#contents)**

## 資料整合框架

_用於執行 ELT / ETL 的框架_

- [Benthos](https://github.com/benthosdev/benthos) - 在多種協定之間串流訊息的橋接器。
- [CloudQuery](http://github.com/cloudquery/cloudquery) - 採用可插拔架構的高效能 ELT 資料整合框架。
- [confluence2md](https://github.com/gkoos/confluence2md) - 將 Confluence 轉為 Markdown 的爬取與轉換工具。
- [omniparser](https://github.com/jf-tech/omniparser) - 多功能 ETL 函式庫，以串流方式解析文字輸入（CSV/txt/JSON/XML/EDI/X12/EDIFACT 等），並使用資料驅動的結構描述將資料轉換為 JSON 輸出。

**[⬆ 回到頂部](#contents)**

## 資料結構與演算法

### 位元封裝與壓縮

- [bingo](https://github.com/iancmcc/bingo) - 快速、零記憶體配置、保留字典序地將原生型別封裝為位元組。
- [binpacker](https://github.com/zhuangsirui/binpacker) - 二進位封裝與解封裝工具，協助使用者建構自訂的二進位串流。
- [bit](https://github.com/yourbasic/bit) - Golang 集合資料結構，額外附贈位元操作函式。
- [crunch](https://github.com/superwhiskers/crunch) - 實作緩衝區、可輕鬆處理各種資料型別的 Go 套件。
- [go-ef](https://github.com/amallia/go-ef) - Elias-Fano 編碼的 Go 實作。
- [roaring](https://github.com/RoaringBitmap/roaring) - 實作壓縮位元集合的 Go 套件。

### 位元集合

- [bitmap](https://github.com/kelindar/bitmap) - 以 Go 實作的密集、零記憶體配置、支援 SIMD 的點陣圖/位元集合。
- [bitset](https://github.com/bits-and-blooms/bitset) - 實作位元集合的 Go 套件。

### 布隆過濾器與布穀鳥過濾器

- [bloom](https://github.com/bits-and-blooms/bloom) - 實作布隆過濾器的 Go 套件。
- [bloom](https://github.com/zhenjl/bloom) - 以 Go 實作的布隆過濾器。
- [bloom](https://github.com/yourbasic/bloom) - Golang 布隆過濾器實作。
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - 又一個以 Go 實作的布隆過濾器，相容於 Java 的 Guava 函式庫。
- [boomfilters](https://github.com/tylertreat/BoomFilters) - 用於處理連續、無界串流的機率型資料結構。
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - 布穀鳥過濾器：功能完整的布穀鳥過濾器，與其他實作相比可設定且空間經過最佳化，並提供原始論文中提及的所有功能。
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - 布穀鳥過濾器：以 Go 實作，可良好取代計數布隆過濾器的方案。
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - 首個純 Go 的 Ribbon 過濾器實作（實務上比 Bloom 與 Xor 過濾器更小），用於節省空間的近似集合成員查詢。
- [ring](https://github.com/TheTannerRyan/ring) - 高效能、執行緒安全之布隆過濾器的 Go 實作。

### 資料結構與演算法合集

- [algorithms](https://github.com/shady831213/algorithms) - 演算法與資料結構。CLRS 研讀。
- [go-datastructures](https://github.com/Workiva/go-datastructures) - 實用、高效能且執行緒安全的資料結構集合。
- [gods](https://github.com/emirpasic/gods) - Go 資料結構。容器、集合、串列、堆疊、映射、雙向映射、樹、HashSet 等。
- [gostl](https://github.com/liyue201/gostl) - Go 的資料結構與演算法函式庫，旨在提供類似 C++ STL 的功能。

### 迭代器

- [glinq](https://github.com/CreateLab/glinq) - 類似 LINQ 的惰性求值函式庫，具備型別安全的泛型、效能最佳化且零相依。
- [gloop](https://github.com/alvii147/gloop) - 利用 Go 的 range-over-func 功能便利地進行迴圈。
- [goterator](https://github.com/yaa110/goterator) - 提供 map 與 reduce 功能的迭代器實作。
- [iter](https://github.com/disksing/iter) - C++ STL 迭代器與演算法的 Go 實作。

### 映射

更複雜的鍵值儲存請另見[資料庫](#database)；其他有序映射實作請另見[樹](#trees)
一節。

- [cmap](https://github.com/lrita/cmap) - 執行緒安全的 Go 並行映射，支援使用 `interface{}` 作為鍵，並可自動擴增分片。
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - 以 Swiss Map 實作的高效能、執行緒安全泛型並行雜湊映射。
- [dict](https://github.com/srfrog/dict) - 適用於 Go、類似 Python 的字典（dict）。
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - `sync.Map` 的型別安全泛型包裝器，方法完全對應且零相依。
- [go-shelve](https://github.com/lucmq/go-shelve) - 適用於 Go 程式語言、類似 map 的持久化物件。支援多種嵌入式鍵值儲存。
- [goradd/maps](https://github.com/goradd/maps) - Go 1.18+ 的泛型 map 介面，涵蓋一般映射、安全映射、有序映射、有序安全映射等。
- [hmap](https://github.com/lyonnee/hmap) - HMap 是支援泛型、並行且安全的 Map 實作，旨在提供易於使用的 API。

### 其他資料結構與演算法

- [combo](https://github.com/bobg/combo) - 組合運算，包括排列、組合與可重複組合。
- [concurrent-writer](https://github.com/free/concurrent-writer) - 高度並行、可直接替換 `bufio.Writer` 的實作。
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Count-Min-Log sketch 的 Go 實作：使用近似計數器進行近似計數（類似 Count-Min sketch，但使用更少記憶體）。
- [FSM](https://github.com/enetx/fsm) - Go 的有限狀態機（FSM）。
- [fsm](https://github.com/cocoonspace/fsm) - 有限狀態機套件。
- [genfuncs](https://github.com/nwillc/genfuncs) - 受 Kotlin Sequence 與 Map 啟發的 Go 1.18+ 泛型套件。
- [go-generics](https://github.com/bobg/go-generics) - 泛型的 slice、map、set、迭代器與 goroutine 工具。
- [go-geoindex](https://github.com/hailocab/go-geoindex) - 記憶體內的地理索引。
- [go-rampart](https://github.com/francesconi/go-rampart) - 判斷區間之間的關係。
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - 區域四元樹，可高效進行點定位與鄰居搜尋。
- [go-tuple](https://github.com/barweiss/go-tuple) - 適用於 Go 1.18+ 的泛型元組（tuple）實作。
- [go18ds](https://github.com/daichi-m/go18ds) - 使用 Go 1.18 泛型的 Go 資料結構。
- [gofal](https://github.com/xxjwxc/gofal) - Go 的分數 API。
- [gogu](https://github.com/esimov/gogu) - 全面、可重複使用且高效的並行安全泛型工具函式與資料結構函式庫。
- [gota](https://github.com/kniren/gota) - 為 Go 實作的 DataFrame、Series 與資料整理方法。
- [hide](https://github.com/emvi/hide) - 可與雜湊值相互序列化的 ID 型別，避免將原始 ID 傳送給用戶端。
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - HyperLogLog 實作，具備稀疏表示、LogLog-Beta 偏差修正與 TailCut 空間縮減。
- [quadtree](https://github.com/s0rg/quadtree) - 泛型、零記憶體配置、測試覆蓋率 100% 的四元樹。
- [slices](https://github.com/twharmon/slices) - 用於 slice 的純泛型函式。
- [xsync](https://github.com/puzpuzpuz/xsync) - 可擴展的並行資料結構，例如並行泛型雜湊表 `xsync.Map`。

### 可為空型別

- [nan](https://github.com/kak-tus/nan) - 將零記憶體配置的可為空結構集中於單一函式庫，並提供便利的轉換函式、序列化器與反序列化器。
- [null](https://github.com/emvi/null) - 可與 JSON 相互序列化/反序列化的可為空 Go 型別。
- [typ](https://github.com/gurukami/typ) - Null 型別、安全的基本型別轉換，以及從複雜結構中取值。

### 佇列

- [deheap](https://github.com/aalpar/deheap) - 雙端堆積（最小-最大堆積），能以 O(log n) 存取最小與最大元素。
- [deque](https://github.com/edwingeng/deque) - 高度最佳化的雙端佇列。
- [deque](https://github.com/gammazero/deque) - 快速的環形緩衝區雙端佇列（deque）。
- [dqueue](https://github.com/vodolaz095/dqueue) - 簡單、記憶體內、零相依且久經實戰考驗的執行緒安全延遲佇列。
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - 並行 FIFO 佇列。
- [hatchet](https://github.com/hatchet-dev/hatchet) - 分散式、具容錯能力的任務佇列。
- [list](https://github.com/koss-null/list) - 泛型、執行緒安全的雙向鏈結串列，完整支援迭代器，另提供供嵌入使用的侵入式單向鏈結串列；是功能豐富的 container/list 替代品。
- [memlog](https://github.com/embano1/memlog) - 受 Apache Kafka 啟發、易於使用、輕量、執行緒安全且僅可附加的記憶體內資料結構。
- [queue](https://github.com/adrianbrad/queue) - 多種執行緒安全的 Go 泛型佇列實作。

### 集合

- [dsu](https://github.com/ihebu/dsu) - 以 Go 實作的互斥集合（Disjoint Set）資料結構。
- [golang-set](https://github.com/deckarep/golang-set) - 適用於 Go 的執行緒安全與非執行緒安全高效能集合。
- [goset](https://github.com/zoumo/goset) - 實用的 Go 集合（Set）實作。
- [set](https://github.com/StudioSol/set) - 以 Go 搭配 LinkedHashMap 實作的簡單集合資料結構。

### 文字分析

- [bleve](https://github.com/blevesearch/bleve) - 現代化的 Go 文字索引函式庫。
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - 自適應基數樹（Adaptive Radix Tree）的 Go 實作。
- [go-edlib](https://github.com/hbollon/go-edlib) - 相容 Unicode 的 Go 字串比較與編輯距離演算法函式庫（Levenshtein、LCS、Hamming、Damerau levenshtein、Jaro-Winkler 等）。
- [levenshtein](https://github.com/agext/levenshtein) - Levenshtein 距離與相似度指標，支援自訂編輯成本，以及針對共同前綴、類似 Winkler 的加分機制。
- [levenshtein](https://github.com/agnivade/levenshtein) - 以 Go 計算 Levenshtein 距離的實作。
- [mspm](https://github.com/BlackRabbitt/mspm) - 用於資訊檢索的多字串模式比對演算法。
- [parsefields](https://github.com/MonaxGT/parsefields) - 解析類 JSON 日誌、收集唯一欄位與事件的工具。
- [ptrie](https://github.com/viant/ptrie) - 前綴樹的實作。
- [radixtree](https://github.com/gammazero/radixtree) - 自適應基數樹（前綴樹或壓縮字典樹）。
- [trie](https://github.com/derekparker/trie) - 以 Go 實作的字典樹（Trie）。

### 樹

- [graphlib](https://github.com/aio-arch/graphlib) - 拓撲排序函式庫，可對 DAG 圖進行排序與剪枝。
- [hashsplit](http://github.com/bobg/hashsplit) - 將位元組串流切分為區塊，並將區塊組織成樹，區塊邊界由內容而非位置決定。
- [merkle](https://github.com/bobg/merkle) - 以節省空間的方式計算 Merkle 根雜湊與包含證明。
- [skiplist](https://github.com/MauriceGit/skiplist) - 非常快速的 Go 跳躍串列實作。
- [skiplist](https://github.com/gansidui/skiplist) - 以 Go 實作的跳躍串列。
- [skiplist](https://github.com/huandu/skiplist) - 快速且易於使用的 Go 跳躍串列。
- [treemap](https://github.com/igrmk/treemap) - 底層使用紅黑樹、依鍵排序的泛型映射。

### 管道

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - 並行處理工作、並依輸入順序透過通道回傳輸出的 Go 模組。
- [parapipe](https://github.com/nazar256/parapipe) - FIFO 管線，在每個階段平行執行，同時維持訊息與結果的順序。
- [pipeline](https://github.com/hyfather/pipeline) - 支援扇入與扇出的管線實作。
- [pipelines](https://github.com/nxdir-s/pipelines) - 用於並行處理的泛型管線函式。

**[⬆ 回到頂部](#contents)**

## 資料庫

### 快取

_具有過期記錄的資料儲存、記憶體內分散式資料儲存，或檔案型資料庫的記憶體內子集。_

- [bcache](https://github.com/iwanbk/bcache) - 最終一致的分散式記憶體內快取 Go 函式庫。
- [BigCache](https://github.com/allegro/bigcache) - 適用於 GB 級資料的高效鍵值快取。
- [cache2go](https://github.com/muesli/cache2go) - 記憶體內鍵值快取，支援依逾時自動失效。
- [cachego](https://github.com/faabiosr/cachego) - 支援多種驅動程式的 Golang 快取元件。
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - 支援叢集與單一項目過期的 BigCache。
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - 為 Go 應用程式完整實作 Oracle Coherence 快取 API，使用 gRPC 作為網路傳輸。
- [couchcache](https://github.com/codingsince1985/couchcache) - 以 Couchbase 伺服器為後端的 RESTful 快取微服務。
- [easycache](https://github.com/hugocarreira/easycache) - 在 Golang 中使用記憶體內快取的簡單方式（TTL/FIFO/LRU/LFU）。
- [EchoVault](https://github.com/EchoVault/EchoVault) - 可嵌入的分散式記憶體內資料儲存，相容 Redis 用戶端。
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - 適用於大量項目的快速執行緒安全記憶體內快取。可將 GC 負擔降到最低。
- [GCache](https://github.com/bluele/gcache) - 快取函式庫，支援可過期快取、LFU、LRU 與 ARC。
- [gdcache](https://github.com/ulovecode/gdcache) - 以 Golang 實作的純非侵入式快取函式庫，可用來實作你自己的分散式快取。
- [go-cache](https://github.com/viney-shih/go-cache) - 彈性的多層 Go 快取函式庫，採用 Cache-Aside 模式處理記憶體內快取與共享快取。
- [go-freelru](https://github.com/elastic/go-freelru) 無 GC 負擔、快速的泛型 LRU 雜湊映射函式庫，可選擇加鎖、分片、淘汰與過期機制。
- [go-gcache](https://github.com/szyhf/go-gcache) - `GCache` 的泛型版本，支援可過期快取、LFU、LRU 與 ARC。
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - 快速的記憶體內鍵值儲存/快取函式庫。指標快取。
- [gocache](https://github.com/eko/gocache) - 完整的 Go 快取函式庫，支援多種儲存（memory、memcache、redis……），提供可串接、可載入、指標快取等功能。
- [gocache](https://github.com/yuseferi/gocache) - 無資料競爭的高效能 Go 快取函式庫，具備自動清除功能。
- [groupcache](https://github.com/golang/groupcache) - Groupcache 是快取與快取填充函式庫，旨在許多情況下取代 memcached。
- [icache](https://github.com/mdaliyan/icache) - 高效能、泛型、執行緒安全且零相依的快取套件。
- [imcache](https://github.com/erni27/imcache) - 泛型的記憶體內快取 Go 函式庫。支援過期、滑動過期、最大項目數限制、淘汰回呼與分片。
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - 支援多層快取的統一 Go 快取函式庫。
- [nscache](https://github.com/no-src/nscache) - 支援多種資料來源驅動程式的 Go 快取框架。
- [otter](https://github.com/maypok86/otter) - 高效能的 Go 無鎖快取。比 Ristretto 等同類工具快上許多倍。
- [pocache](https://github.com/naughtygopher/pocache) - Pocache 是專注於搶先式樂觀快取策略的極簡快取套件。
- [ristretto](https://github.com/dgraph-io/ristretto) - 高效能、受記憶體限制的 Go 快取。
- [sturdyc](https://github.com/viccon/sturdyc) - 具備進階並行功能的快取函式庫，旨在讓 I/O 密集型應用程式穩健且高效能。
- [theine](https://github.com/Yiling-J/theine-go) - 高效能、近乎最佳的記憶體內快取，支援主動 TTL 過期與泛型。
- [timedmap](https://github.com/zekroTJA/timedmap) - 具有會過期之鍵值對的映射。
- [ttlcache](https://github.com/jellydator/ttlcache) - 支援項目過期與泛型的記憶體內快取。
- [ttlcache](https://github.com/cheshir/ttlcache) - 每筆記錄都有 TTL 的記憶體內鍵值儲存。

### 以 Go 實作的資料庫

- [badger](https://github.com/dgraph-io/badger) - 以 Go 實作的快速鍵值儲存。
- [bbolt](https://github.com/etcd-io/bbolt) - Go 的嵌入式鍵值資料庫。
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask 是以純 Go 撰寫、可嵌入、持久化且快速的鍵值（KV）資料庫，得益於 bitcask 的磁碟配置（LSM+WAL），具備可預測的讀寫效能、低延遲與高吞吐量。
- [buntdb](https://github.com/tidwall/buntdb) - 快速、可嵌入的 Go 記憶體內鍵值資料庫，支援自訂索引與空間資料。
- [clover](https://github.com/ostafen/clover) - 以純 Golang 撰寫的輕量級文件導向 NoSQL 資料庫。
- [cockroach](https://github.com/cockroachdb/cockroach) - 可擴展、支援異地複寫且具交易能力的資料儲存。
- [Coffer](https://github.com/claygod/coffer) - 支援交易的簡單 ACID 鍵值資料庫。
- [column](https://github.com/kelindar/column) - 高效能、欄式、可嵌入的記憶體內儲存，支援點陣圖索引與交易。
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL 是建構在區塊鏈上的 SQL 資料庫。
- [Databunker](https://github.com/paranoidguy/databunker) - 為符合 GDPR 與 CCPA 而打造的個人可識別資訊（PII）儲存服務。
- [dgraph](https://github.com/dgraph-io/dgraph) - 可擴展、分散式、低延遲、高吞吐量的圖形資料庫。
- [DiceDB](https://github.com/DiceDB/dice) - 開源、快速、響應式的記憶體內資料庫，針對現代硬體最佳化。具備更高的吞吐量與更低的中位延遲，非常適合現代工作負載。
- [diskv](https://github.com/peterbourgon/diskv) - 自行開發、以磁碟為後端的鍵值儲存。
- [dolt](https://github.com/dolthub/dolt) - Dolt：資料界的 Git。
- [eliasdb](https://github.com/krotik/eliasdb) - 無相依、具交易能力的圖形資料庫，提供 REST API、片語搜尋與類 SQL 查詢語言。
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - 以純 Go 撰寫、類似 MongoDB 的嵌入式資料庫。支援索引與複雜查詢。
- [go-sqlite](https://github.com/glebarez/go-sqlite) – 以純 Golang 實作、無需 CGO 的 SQLite 驅動程式。
- [godis](https://github.com/hdt3213/godis) - 以 Golang 實作的高效能 Redis 伺服器與叢集。
- [goleveldb](https://github.com/syndtr/goleveldb) - [LevelDB](https://github.com/google/leveldb) 鍵值資料庫的 Go 實作。
- [hare](https://github.com/jameycribbs/hare) - 簡單的資料庫管理系統，將每個資料表儲存為以行分隔之 JSON 的文字檔。
- [immudb](https://github.com/codenotary/immudb) - immudb 是以 Go 撰寫、適用於系統與應用程式的輕量高速不可變資料庫。
- [influxdb](https://github.com/influxdb/influxdb) - 用於指標、事件與即時分析的可擴展資料儲存。
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb 是以 LevelDB 為基礎、類似 Redis 的高效能 NoSQL 資料庫。
- [levigo](https://github.com/jmhodges/levigo) - Levigo 是 LevelDB 的 Go 包裝器。
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB 是一個不到 1000 行程式碼、供學習用的簡單資料庫。
- [LinDB](https://github.com/lindb/lindb) - LinDB 是可擴展、高效能、高可用性的分散式時間序列資料庫。
- [lotusdb](https://github.com/flower-corp/lotusdb) - 相容 LSM 與 B+ 樹的快速鍵值資料庫。
- [lynxdb](https://github.com/lynxbase/lynxdb) - 輕量級欄式日誌分析資料庫，提供受 SPL 啟發的管道式查詢語言。
- [MemHop](https://github.com/qyiun666/MemHop) - 為 AI 代理打造的嵌入式認知記憶資料庫。採用六層架構（L0-L5）、Dream 整合管線、三通道 RRF 檢索（BM25 + f16 向量 + 實體）、單一 .meh 檔案、純 Go，且無需任何基礎設施。
- [Milvus](https://github.com/milvus-io/milvus) - Milvus 是用於嵌入向量管理、分析與搜尋的向量資料庫。
- [minisql](https://github.com/RichardKnop/minisql) - 嵌入式單一檔案 SQL 資料庫。
- [moss](https://github.com/couchbase/moss) - Moss 是以 100% Go 撰寫的簡單 LSM 鍵值儲存引擎。
- [nanotdb](https://github.com/aymanhs/nanotdb) - 輕量、零相依、僅可附加的時間序列資料庫與儀表板，針對低功耗硬體最佳化。
- [NoKV](https://github.com/feichai0017/NoKV) - 適用於分散式檔案系統、物件儲存與 AI 資料集工作負載的原生中繼資料服務。
- [NornicDB](https://github.com/orneryd/NornicDB) - 高效能圖形 + 向量資料庫（相容 Neo4j 與 qDrant），專注於為 AI 系統提供低延遲的 Graph RAG 檢索。
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb 是以純 Go 撰寫的簡單、快速、可嵌入且持久化的鍵值儲存。支援完全可序列化的交易，以及 list、set、sorted set 等多種資料結構。
- [objectbox-go](https://github.com/objectbox/objectbox-go) - 提供 Go API 的高效能嵌入式物件資料庫（NoSQL）。
- [pebble](https://github.com/cockroachdb/pebble) - 受 RocksDB/LevelDB 啟發、以 Go 實作的鍵值資料庫。
- [piladb](https://github.com/fern4lvarez/piladb) - 以堆疊資料結構為基礎的輕量級 RESTful 資料庫引擎。
- [pogreb](https://github.com/akrylysov/pogreb) - 適用於讀取密集型工作負載的嵌入式鍵值儲存。
- [prometheus](https://github.com/prometheus/prometheus) - 監控系統與時間序列資料庫。
- [pudge](https://github.com/recoilme/pudge) - 使用 Go 標準函式庫撰寫的快速簡單鍵值儲存。
- [redka](https://github.com/nalgeon/redka) - 以 SQLite 重新實作的 Redis。
- [rosedb](https://github.com/roseduan/rosedb) - 以 LSM+WAL 為基礎的嵌入式鍵值資料庫，支援 string、list、hash、set、zset。
- [rotom](https://github.com/xgzlucario/rotom) - 以 Golang 打造的小型 Redis 伺服器，相容 RESP 協定。
- [rqlite](https://github.com/rqlite/rqlite) - 建構於 SQLite 之上的輕量級分散式關聯式資料庫。
- [tempdb](https://github.com/rafaeljesus/tempdb) - 用於暫存項目的鍵值儲存。
- [tidb](https://github.com/pingcap/tidb) - TiDB 是分散式 SQL 資料庫。設計靈感來自 Google F1。
- [tiedot](https://github.com/HouzuoGuo/tiedot) - 由 Golang 驅動的 NoSQL 資料庫。
- [unitdb](https://github.com/unit-io/unitdb) - 適用於物聯網與即時訊息應用程式的快速時間序列資料庫。可透過 github.com/unit-io/unitd 應用程式，經由 TCP 或 WebSocket 以發布/訂閱方式存取 unitdb。
- [Vasto](https://github.com/chrislusf/vasto) - 分散式高效能鍵值儲存。資料存於磁碟、最終一致、高可用，並可在不中斷服務的情況下擴充或縮減。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 快速、節省資源且可擴展的開源時間序列資料庫。可用作 Prometheus 的長期遠端儲存。支援 PromQL。
- 
### 資料庫結構遷移

- [atlas](https://github.com/ariga/atlas) - 資料庫工具組。一套協助企業更有效運用資料的 CLI。
- [avro](https://github.com/khezen/avro) - 探索 SQL 結構描述並轉換為 AVRO 結構描述。將 SQL 記錄查詢為 AVRO 位元組。
- [bytebase](https://github.com/bytebase/bytebase) - 為 DevOps 團隊提供安全的資料庫結構變更與版本控制。
- [darwin](https://github.com/GuiaBolso/darwin) - Go 的資料庫結構演進函式庫。
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - 用於版本化資料庫結構遷移的 CLI，支援 PostgreSQL、MySQL、ClickHouse、Tarantool 與 Apache Iceberg。
- [dbmate](https://github.com/amacneil/dbmate) - 輕量級、不依賴特定框架的資料庫遷移工具。
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - 為 Golang 優秀的內建 database/sql 函式庫提供 Django 風格的測試資料（fixtures）。
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - 對 CLI 友善、用於管理 go-pg 遷移的套件。
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - 協助使用 go-pg/pg 撰寫遷移的 Go 套件。
- [goavro](https://github.com/linkedin/goavro) - 編碼與解碼 Avro 資料的 Go 套件。
- [godfish](https://github.com/rafaelespinoza/godfish) - 資料庫遷移管理器，使用原生查詢語言運作。支援 cassandra、mysql、postgres、sqlite3。
- [goose](https://github.com/pressly/goose) - 資料庫遷移工具。你可以透過建立增量 SQL 或 Go 腳本來管理資料庫的演進。
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - 適用於 Gorm ORM 的簡單資料庫種子資料工具。
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - 適用於 Gorm ORM 的資料庫結構遷移輔助工具。
- [libschema](https://github.com/muir/libschema) - 在各個函式庫中分別定義遷移。適用於開源函式庫的遷移。支援 MySQL 與 PostgreSQL。
- [migrate](https://github.com/golang-migrate/migrate) - 資料庫遷移。提供 CLI 與 Golang 函式庫。
- [migrator](https://github.com/lopezator/migrator) - 極其簡單的 Go 資料庫遷移函式庫。
- [migrator](https://github.com/larapulse/migrator) - MySQL 資料庫遷移工具，可針對你的功能執行遷移，並以直觀的 Go 程式碼管理資料庫結構更新。
- [schema](https://github.com/adlio/schema) - 將相容 database/sql 之資料庫的結構遷移嵌入 Go 執行檔的函式庫。
- [skeema](https://github.com/skeema/skeema) - 適用於 MySQL 的純 SQL 結構管理系統，支援分片與外部線上結構變更工具。
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - 適用於 MySQL、PostgreSQL 與 SQLite 的資料庫遷移、建立、ORM 等功能。
- [sql-migrate](https://github.com/rubenv/sql-migrate) - 資料庫遷移工具。可使用 go-bindata 將遷移嵌入應用程式。
- [sqlize](https://github.com/sunary/sqlize) - 資料庫遷移產生器。可透過比對模型與既有 SQL 的差異來產生 SQL 遷移。

### 資料庫工具

- [chproxy](https://github.com/Vertamedia/chproxy) - ClickHouse 資料庫的 HTTP 代理。
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - 收集小型插入操作，並以大型請求傳送至 ClickHouse 伺服器。
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - ClickHouse 方言 SQL 的解析器，可產生具型別的 AST，並提供走訪輔助工具、往返格式化與 CLI。
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - 在正式環境中執行 SQL，並提供 ACL、日誌與共享連結。
- [dbbench](https://github.com/sj14/dbbench) - 支援多種資料庫與腳本的資料庫基準測試工具。
- [dg](https://github.com/codingconcepts/dg) - 快速的資料產生器，可從產生的關聯式資料輸出 CSV 檔案。
- [filesql](https://github.com/nao1215/filesql) - 透過 database/sql API，以 SQL 查詢 CSV、TSV、LTSV、JSON、JSONL、Parquet、Excel、ACH 與 Fedwire 檔案，底層採用記憶體內 SQLite。
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - 雲端原生的資料庫閘道與框架，用於建構資料驅動的應用程式。就像 API 閘道，只是對象換成資料庫。
- [go-mysql](https://github.com/siddontang/go-mysql) - 處理 MySQL 協定與複寫的 Go 工具集。
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - 使用 AWS Lambda 將 PostgreSQL 以無伺服器方式備份至 S3，並提供每日、每月與每年輪替。
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - 為 GORM 管理的資料庫提供多租戶支援。
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - 高效能的 SQL 解析器、格式化工具、程式碼檢查工具與安全掃描器，支援多種方言並提供 WASM 線上試用環境。
- [hasql](https://golang.yandex/hasql) - 存取多主機 SQL 資料庫部署的函式庫。
- [octillery](https://github.com/knocknote/octillery) - 用於資料庫分片的 Go 套件（支援所有 ORM 或原生 SQL）。
- [onedump](https://github.com/liweiyi88/onedump) - 只需一個指令與一份設定，即可將不同驅動程式的資料庫備份到不同目的地。
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 的進階排程工具。
- [pgrwl](https://github.com/pgrwl/pgrwl) - PostgreSQL 的雲端原生持續備份。
- [pgwd](https://github.com/hrodrig/pgwd) - 監控 PostgreSQL 連線數（總數、作用中、閒置、過時）的 CLI，超過門檻時會透過 Slack 和/或 Loki 發出通知。支援 Kubernetes（kubectl port-forward），並可選擇在通知中附上執行情境。
- [pgweb](https://github.com/sosedoff/pgweb) - 網頁版 PostgreSQL 資料庫瀏覽器。
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - 以 Go 撰寫、受 pgcli 啟發的 PostgreSQL CLI 用戶端。
- [prep](https://github.com/hexdigest/prep) - 無需修改程式碼即可使用預備 SQL 陳述式。
- [pREST](https://github.com/prest/prest) - 簡化並加速開發，⚡ 為任何既有或全新的 Postgres 應用程式提供即時、高效能的服務。
- [rdb](https://github.com/HDT3213/rdb) - 用於二次開發與記憶體分析的 Redis RDB 檔案解析器。
- [rwdb](https://github.com/andizzle/rwdb) - rwdb 為多資料庫伺服器架構提供讀取副本功能。
- [sqly](https://github.com/nao1215/sqly) - 在互動式 shell 中對 CSV、TSV、LTSV、JSON、Parquet 與 Excel 檔案執行 SQL，底層採用記憶體內 SQLite。
- [vitess](https://github.com/youtube/vitess) - vitess 提供伺服器與工具，協助大規模 Web 服務擴展 MySQL 資料庫。
- [wescale](https://github.com/wesql/wescale) - WeScale 是一個資料庫代理，旨在提升應用程式的擴展性、效能、安全性與韌性。
- [xsql](https://github.com/zx06/xsql) - AI 優先的跨資料庫 CLI 工具，具備唯讀保護與結構化 JSON 輸出。

### SQL 查詢建構器

_用於建構與使用 SQL 的函式庫。_

- [bqb](https://github.com/nullism/bqb) - 輕量且易學的查詢建構器。
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - 適用於 PostgreSQL 的 Go 資料庫查詢建構函式庫。
- [builq](https://github.com/cristalhq/builq) - 在 Go 中輕鬆建構 SQL 查詢。
- [dba](https://github.com/kran/dba) - 針對手寫 SQL 的查詢建構器，可加入動態條件、感知方言的預留位置與不可變的鏈式呼叫。
- [dbq](https://github.com/rocketlaunchr/dbq) - 零樣板程式碼的 Go 資料庫操作。
- [Dotsql](https://github.com/gchaincl/dotsql) - 協助你將 SQL 檔案集中管理並輕鬆使用的 Go 函式庫。
- [gendry](https://github.com/didi/gendry) - 非侵入式的 SQL 建構器與強大的資料繫結器。
- [godbal](https://github.com/xujiajun/godbal) - Go 的資料庫抽象層（dbal）。支援 SQL 建構器，並能輕鬆取得結果。
- [goqu](https://github.com/doug-martin/goqu) - 符合慣用風格的 SQL 建構器與查詢函式庫。
- [gosql](https://github.com/twharmon/gosql) - 對 null 值有更佳支援的 SQL 查詢建構器。
- [Hotcoal](https://github.com/motrboat/hotcoal) - 保護你手寫的 SQL 免於注入攻擊。
- [igor](https://github.com/galeone/igor) - PostgreSQL 的抽象層，支援進階功能並使用類似 gorm 的語法。
- [jet](https://github.com/go-jet/jet) - 在 Go 中撰寫型別安全 SQL 查詢的框架，可輕鬆將資料庫查詢結果轉換為任意所需的物件結構。
- [obreron](https://github.com/profe-ajedrez/obreron) - 快速且輕巧的 SQL 建構器，只專注做一件事：建構 SQL。
- [ormlite](https://github.com/pupizoid/ormlite) - 輕量級套件，為 SQLite 資料庫提供部分類 ORM 功能與輔助工具。
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - 強大的資料擷取方法，以及與資料庫無關的查詢建構能力。
- [patcher](https://github.com/Jacobbrewer1/patcher) - 能從結構自動產生 SQL 查詢的強大 SQL 查詢建構器。
- [qrafter](https://github.com/SennovE/qrafter) - 型別安全的 SQL 查詢建構器，具備感知方言的 SQL 產生、結構描述內省與遷移產生功能。
- [qry](https://github.com/HnH/qry) - 從含有原生 SQL 查詢的檔案產生常數的工具。
- [relica](https://github.com/coregx/relica) - 型別安全的資料庫查詢建構器，正式環境零相依，具備 LRU 陳述式快取與批次操作，並支援 JOIN、子查詢、CTE 與視窗函式。
- [sg](https://github.com/go-the-way/sg) - 以 Go 撰寫、用於產生標準 SQL（支援 CRUD）的 SQL 產生器。
- [sq](https://github.com/bokwoon95/go-structured-query) - Go 的型別安全 SQL 建構器與結構映射器。
- [sqlc](https://github.com/kyleconroy/sqlc) - 從 SQL 產生型別安全的程式碼。
- [sqlcredo](https://github.com/Klojer/sqlcredo) - 用於型別安全泛型 SQL CRUD 操作的套件，支援分頁、交易、除錯與自訂原生 SQL 擴充。
- [sqlf](https://github.com/leporo/sqlf) - 快速的 SQL 查詢建構器。
- [sqlh](https://github.com/kirill-scherba/sqlh) - 零樣板程式碼的 SQL 輔助工具，使用結構標籤與 Go 泛型（CRUD、UPSERT、JOIN、基準測試）。
- [sqlingo](https://github.com/lqs/sqlingo) - 在 Go 中建構 SQL 的輕量級 DSL。
- [sqrl](https://github.com/elgris/sqrl) - SQL 查詢建構器，為 Squirrel 的分支，效能經過改善。
- [Squalus](https://gitlab.com/qosenergy/squalus) - 建構於 Go SQL 套件之上的薄層，讓查詢更容易執行。
- [Squirrel](https://github.com/Masterminds/squirrel) - 協助你建構 SQL 查詢的 Go 函式庫。
- [xo](https://github.com/knq/xo) - 依據既有結構描述定義或自訂查詢，為資料庫產生符合慣用風格的 Go 程式碼，支援 PostgreSQL、MySQL、SQLite、Oracle 與 Microsoft SQL Server。

**[⬆ 回到頂部](#contents)**

## 資料庫驅動程式

### 多後端介面

- [cayley](https://github.com/google/cayley) - 支援多種後端的圖形資料庫。
- [dsc](https://github.com/viant/dsc) - 適用於 SQL、NoSQL 與結構化檔案的資料儲存連線工具。
- [dynamo](https://github.com/fogfish/dynamo) - 簡單的鍵值抽象層，可將代數資料型別與連結資料型別儲存於 AWS 儲存服務：AWS DynamoDB 與 AWS S3。
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - 具備多種轉接器（sql、sqlx、gorm、mongo……）的交易管理器，可控制交易邊界。
- [gokv](https://github.com/philippgille/gokv) - Go 的簡單鍵值儲存抽象層與實作（Redis、Consul、etcd、bbolt、BadgerDB、LevelDB、Memcached、DynamoDB、S3、PostgreSQL、MongoDB、CockroachDB 等等）。
- [transactor](https://github.com/metalfm/transactor) - 型別安全的交易邊界抽象層，提供 database/sql、sqlx 與 pgx 的轉接器。

### 關聯式資料庫驅動程式

- [avatica](https://github.com/apache/calcite-avatica-go) - 適用於 database/sql 的 Apache Avatica/Phoenix SQL 驅動程式。
- [bgc](https://github.com/viant/bgc) - Go 的 BigQuery 資料儲存連線工具。
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Go 的 Firebird RDBMS SQL 驅動程式。
- [go-adodb](https://github.com/mattn/go-adodb) - 使用 database/sql 的 Go Microsoft ActiveX Object DataBase 驅動程式。
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Go 的 Microsoft MSSQL 驅動程式。
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Microsoft 官方的 Go 驅動程式，適用於 SQL Server、Azure SQL、Azure Synapse、Fabric 中的 SQL 資料庫與 Fabric Data Warehouse。支援 Azure AD、Always Encrypted 與大量操作。
- [go-oci8](https://github.com/mattn/go-oci8) - 使用 database/sql 的 Go Oracle 驅動程式。
- [go-rqlite](https://github.com/rqlite/gorqlite) - rqlite 的 Go 用戶端，為 rqlite API 提供易於使用的抽象層。
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Go 的 MySQL 驅動程式。
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - 使用 database/sql 的 Go SQLite3 驅動程式。
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - 這個 Go 模組相容於 database/sql 驅動程式。可將 SQLite 嵌入你的應用程式、直接存取其 C API、支援 SQLite VFS，並附帶 GORM 驅動程式。
- [godror](https://github.com/godror/godror) - 使用 ODPI-C 驅動程式的 Go Oracle 驅動程式。
- [gofreetds](https://github.com/minus5/gofreetds) - Microsoft MSSQL 驅動程式。[FreeTDS](https://www.freetds.org) 的 Go 包裝器。
- [KSQL](https://github.com/VinGarcia/ksql) - 簡單而強大的 Golang SQL 函式庫。
- [pgx](https://github.com/jackc/pgx) - PostgreSQL 驅動程式，支援 database/sql 所提供功能以外的特性。
- [pig](https://github.com/alexeyco/pig) - 簡單的 [pgx](https://github.com/jackc/pgx) 包裝器，可輕鬆執行查詢並[掃描](https://github.com/georgysavva/scany)查詢結果。
- [pq](https://github.com/lib/pq) - 適用於 database/sql 的純 Go Postgres 驅動程式。
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - 以純 Go 使用 SQLite。
- [sqlhooks](https://github.com/qustavo/sqlhooks) - 為任何 database/sql 驅動程式附加掛鉤（hook）。
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - sqlite 套件是一個 sql/database 驅動程式，使用不需 CGo 的 C SQLite3 函式庫移植版本。
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Go 的 SurrealDB 驅動程式。
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - YDB（Yandex Database）的原生與 database/sql 驅動程式。

### NoSQL 資料庫驅動程式

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - 以 Go 語言撰寫的 Aerospike 用戶端。
- [arangolite](https://github.com/solher/arangolite) - ArangoDB 的輕量級 Golang 驅動程式。
- [asc](https://github.com/viant/asc) - Go 的 Aerospike 資料儲存連線工具。
- [forestdb](https://github.com/couchbase/goforestdb) - ForestDB 的 Go 繫結。
- [go-couchbase](https://github.com/couchbase/go-couchbase) - 以 Go 撰寫的 Couchbase 用戶端。
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - 以官方驅動程式為基礎的 Go Mongo 函式庫，特色包括精簡的文件操作、將結構泛型繫結至集合、內建 CRUD、聚合、自動欄位更新、結構驗證、掛鉤，以及以外掛為基礎的程式設計。
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Pilosa 的 Go 用戶端函式庫。
- [go-rejson](https://github.com/nitishm/go-rejson) - 使用 Redigo Golang 用戶端、適用於 redislabs ReJSON 模組的 Golang 用戶端。可輕鬆在 Redis 中將結構以 JSON 物件儲存與操作。
- [gocb](https://github.com/couchbase/gocb) - 官方 Couchbase Go SDK。
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Azure Cosmos DB 的 REST 用戶端與標準 `database/sql` 驅動程式。
- [gocql](https://gocql.github.io) - Apache Cassandra 的 Go 語言驅動程式。
- [godis](https://github.com/piaohao/godis) - 以 Golang 實作、受 jedis 啟發的 Redis 用戶端。
- [godscache](https://github.com/defcronyke/godscache) - Google Cloud Platform Go Datastore 套件的包裝器，加入以 memcached 實作的快取。
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Go 程式語言的 memcache 用戶端函式庫。
- [gomemcached](https://github.com/aliexpressru/gomemcached) - Go 的二進位協定 Memcached 用戶端，支援使用一致性雜湊進行分片，以及 SASL。
- [gorethink](https://github.com/dancannon/gorethink) - RethinkDB 的 Go 語言驅動程式。
- [goriak](https://github.com/zegl/goriak) - Riak KV 的 Go 語言驅動程式。
- [Kivik](https://github.com/go-kivik/kivik) - Kivik 為 CouchDB、PouchDB 及類似資料庫提供通用的 Go 與 GopherJS 用戶端函式庫。
- [mgm](https://github.com/kamva/mgm) - Go 的模型式 MongoDB ODM（以官方 MongoDB 驅動程式為基礎）。
- [mgo](https://github.com/globalsign/mgo) - （已停止維護）Go 語言的 MongoDB 驅動程式，以遵循標準 Go 慣例的極簡 API，實作豐富且經過充分測試的功能。
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Go 語言的官方 MongoDB 驅動程式。
- [neo4j](https://github.com/cihangir/neo4j) - Golang 的 Neo4j REST API 繫結。
- [neoism](https://github.com/jmcvetta/neoism) - Golang 的 Neo4j 用戶端。
- [qmgo](https://github.com/qiniu/qmgo) - Go 的 MongoDB 驅動程式。以官方 MongoDB 驅動程式為基礎，但像 Mgo 一樣更容易使用。
- [redeo](https://github.com/bsm/redeo) - 相容 Redis 協定的 TCP 伺服器/服務。
- [redigo](https://github.com/gomodule/redigo) - Redigo 是 Redis 資料庫的 Go 用戶端。
- [redis](https://github.com/redis/go-redis) - Golang 的 Redis 用戶端。
- [rueidis](http://github.com/rueian/rueidis) - 快速的 Redis RESP3 用戶端，支援自動管線化與伺服器輔助的用戶端快取。
- [xredis](https://github.com/shomali11/xredis) - 型別安全、可自訂、簡潔且易於使用的 Redis 用戶端。

### 搜尋與分析資料庫

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - 相容 `database/sql` 的 Go ClickHouse SQL 用戶端。
- [effdsl](https://github.com/sdqri/effdsl) - Go 的 Elasticsearch 查詢建構器。
- [elastic](https://github.com/olivere/elastic) - Go 的 Elasticsearch 用戶端。
- [elasticsql](https://github.com/cch123/elasticsql) - 在 Go 中將 SQL 轉換為 Elasticsearch DSL。
- [elastigo](https://github.com/mattbaird/elastigo) - Elasticsearch 用戶端函式庫。
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Go 的官方 Elasticsearch 用戶端。
- [goes](https://github.com/OwnLocal/goes) - 與 Elasticsearch 互動的函式庫。
- [skizze](https://github.com/skizzehq/skizze) - 機率型資料結構的服務與儲存。
- [zoekt](https://github.com/sourcegraph/zoekt) - 以三元組（trigram）為基礎的快速程式碼搜尋。

**[⬆ 回到頂部](#contents)**

## 日期與時間

_用於處理日期與時間的函式庫。_

- [approx](https://github.com/goschtalt/approx) - Duration 擴充套件，支援以天、週與年為單位解析/輸出時間長度。
- [carbon](https://github.com/dromara/carbon) - 簡單、語意化且對開發者友善的 Golang 時間套件。
- [carbon](https://github.com/uniplaces/carbon) - 從 PHP Carbon 函式庫移植、擁有大量工具方法的簡單 Time 擴充套件。
- [cronrange](https://github.com/1set/cronrange) - 解析 Cron 風格的時間範圍運算式，並檢查指定時間是否落在任一範圍內。
- [date](https://github.com/rickb777/date) - 擴充 Time，以處理日期、日期範圍、時間跨度、期間與一天中的時刻。
- [dateparse](https://github.com/araddon/dateparse) - 無需事先知道格式即可解析日期。
- [durafmt](https://github.com/hako/durafmt) - Go 的時間長度格式化函式庫。
- [feiertage](https://github.com/wlbr/feiertage) - 計算德國國定假日的函式集合，包括針對德國各邦（Bundesländer）的特殊假日，例如復活節、五旬節、感恩節……
- [go-anytime](https://github.com/ijt/go-anytime) - 無需事先知道格式，即可解析像「next dec 22nd at 3pm」這樣的日期/時間，以及像「from today until next thursday」這樣的範圍。
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - 受 date-fns 啟發的全面 Go 日期工具函式庫，提供 140 多個純粹且不可變的函式。
- [go-datebin](https://github.com/deatil/go-datebin) - 簡單的日期時間解析套件。
- [go-faketime](https://github.com/harkaitz/go-faketime) - 遵循 faketime(1) 工具的簡單 `time.Now()`。
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - 以 Go（golang）實作的波斯曆（伊朗太陽曆）。
- [go-str2duration](https://github.com/xhit/go-str2duration) - 將字串轉換為時間長度。支援 time.Duration 回傳的字串等格式。
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - 計算指定地點的日出與日落時間。
- [go-week](https://github.com/stoewer/go-week) - 處理 ISO8601 週日期的高效套件。
- [gostradamus](https://github.com/bykof/gostradamus) - 處理日期的 Go 套件。
- [iso8601](https://github.com/relvacode/iso8601) - 不使用正規表示式即可高效解析 ISO8601 日期時間。
- [kair](https://github.com/GuilhermeCaruso/kair) - 日期與時間：Golang 格式化函式庫。
- [now](https://github.com/jinzhu/now) - Now 是 Golang 的時間工具組。
- [strftime](https://github.com/awoodbeck/strftime) - 相容 C99 的 strftime 格式化工具。
- [timespan](https://github.com/SaidinWoT/timespan) - 用於處理以起始時間與持續時間定義的時間區間。
- [timeutil](https://github.com/leekchan/timeutil) - Golang time 套件的實用擴充（Timedelta、Strftime……）。
- [tuesday](https://github.com/osteele/tuesday) - 相容 Ruby 的 Strftime 函式。

**[⬆ 回到頂部](#contents)**

## 分散式系統

_協助建構分散式系統的套件。_

- [arpc](https://github.com/lesismal/arpc) - 更有效率的網路通訊，支援雙向呼叫、通知與廣播。
- [bedrock](https://github.com/z5labs/bedrock) - 提供精簡、模組化且可組合的基礎，以便在 Go 中快速開發服務與更貼近特定使用情境的框架。
- [capillaries](https://github.com/capillariesio/capillaries) - 分散式批次資料處理框架。
- [circuit](https://github.com/schigh/circuit) - 透過機率式節流逐步恢復的斷路器。
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - 高效能的 Go 分散式命令模式函式庫。
- [committer](https://github.com/vadiminshakov/committer) - 分散式交易管理系統（2PC/3PC 實作）。
- [consistent](https://github.com/buraksezer/consistent) - 具有負載上限的一致性雜湊。
- [consistenthash](https://github.com/mbrostami/consistenthash) - 可設定副本數的一致性雜湊。
- [dht](https://github.com/anacrolix/dht) - BitTorrent Kademlia DHT 實作。
- [digota](https://github.com/digota/digota) - gRPC 電子商務微服務。
- [dot](https://github.com/dotchain/dot/) - 使用操作轉換（OT）的分散式同步。
- [doublejump](https://github.com/edwingeng/doublejump) - 改良版的 Google jump 一致性雜湊。
- [dragonboat](https://github.com/lni/dragonboat) - 以 Go 撰寫、功能完整且高效能的多群組 Raft 函式庫。
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - 以 P2P 技術提供高效、穩定且安全的檔案分發與映像加速，致力成為雲端原生架構中的最佳實務與標準解決方案。
- [drmaa](https://github.com/dgruber/drmaa) - 以 DRMAA 標準為基礎、用於叢集排程器的作業提交函式庫。
- [dynamolock](https://cirello.io/dynamolock) - 以 DynamoDB 為後端的分散式鎖實作。
- [dynatomic](https://github.com/tylfin/dynatomic) - 將 DynamoDB 用作原子計數器的函式庫。
- [emitter-io](https://github.com/emitter-io/emitter) - 以 MQTT、WebSocket 與愛打造的高效能、分散式、安全且低延遲的發布/訂閱平台。
- [evans](https://github.com/ktr0731/evans) - Evans：更具表達力的通用 gRPC 用戶端。
- [failured](https://github.com/andy2046/failured) - 適用於分散式系統的自適應累積式故障偵測器。
- [flowgraph](https://github.com/vectaport/flowgraph) - 流程式程式設計（flow-based programming）套件。
- [gleam](https://github.com/chrislusf/gleam) - 以純 Go 與 Luajit 撰寫的快速可擴展分散式 map/reduce 系統，結合 Go 的高並行性與 Luajit 的高效能，可獨立或分散式執行。
- [glow](https://github.com/chrislusf/glow) - 易於使用、可擴展的分散式大數據處理、Map-Reduce 與 DAG 執行，全部以純 Go 實作。
- [gmsec](https://github.com/gmsec/micro) - Go 分散式系統開發框架。
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - 以 Gossip 協定與 OpenAPI 3.0 規格為基礎的去中心化微服務框架。內建專注於低程式碼與快速開發的 go-doudou CLI，能大幅提升你的生產力。
- [go-eagle](https://github.com/go-eagle/eagle) - 用於 API 或微服務的 Go 框架，附有便利的鷹架工具。
- [go-jump](https://github.com/dgryski/go-jump) - Google「Jump」一致性雜湊函式的移植版本。
- [go-kit](https://github.com/go-kit/kit) - 微服務工具組，支援服務探索、負載平衡、可插拔傳輸層、請求追蹤等。
- [go-micro](https://github.com/micro/go-micro) - 分散式系統開發框架。
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - 以 MySQL 為基礎的分散式鎖。
- [go-pdu](https://github.com/pdupub/go-pdu) - 以身分為基礎的去中心化社群網路。
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - 為 Golang 服務提供非同步服務健康檢查定義支援的函式庫。
- [go-zero](https://github.com/tal-tech/go-zero) - Web 與 RPC 框架。以韌性設計確保高流量網站的穩定性。內建的 goctl 能大幅提升開發效率。
- [gorpc](https://github.com/valyala/gorpc) - 適用於高負載的簡單、快速且可擴展的 RPC 函式庫。
- [grpc-go](https://github.com/grpc/grpc-go) - gRPC 的 Go 語言實作。以 HTTP/2 為基礎的 RPC。
- [health](https://github.com/schigh/health) - 支援 Kubernetes 探針的 Go 服務健康檢查工具。
- [hprose](https://github.com/hprose/hprose-golang) - 非常厲害的 RPC 函式庫，目前支援超過 25 種語言。
- [jsonrpc](https://github.com/osamingo/jsonrpc) - jsonrpc 套件協助實作 JSON-RPC 2.0。
- [jsonrpc](https://github.com/ybbus/jsonrpc) - JSON-RPC 2.0 HTTP 用戶端實作。
- [K8gb](https://github.com/k8gb-io/k8gb) - 雲端原生的 Kubernetes 全域負載平衡器。
- [Kitex](https://github.com/cloudwego/kitex) - 高效能且擴充性強的 Golang RPC 框架，協助開發者建構微服務。如果你開發微服務時主要考量效能與擴充性，Kitex 會是不錯的選擇。
- [Kratos](https://github.com/go-kratos/kratos) - 以 Go 撰寫、模組化設計且易於使用的微服務框架。
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - 適用於 NATS 的輕量級、具容錯能力的訊息串流。
- [lock](https://github.com/ubgo/lock) - 分散式鎖系列，提供單一 Go 介面與五種後端（filelock、flock、Redis、Postgres、etcd），所有後端皆支援防護權杖（fencing token）、號誌模式與可觀測性掛鉤。
- [lura](https://github.com/luraproject/lura) - 具備中介軟體、效能極高的 API 閘道框架。
- [mochi mqtt](https://github.com/mochi-co/mqtt) - 完全符合規格、可嵌入的高效能 MQTT v5/v3 代理伺服器，適用於物聯網、智慧家庭與發布/訂閱。
- [NATS](https://github.com/nats-io/nats-server) - NATS 是適用於數位系統、服務與裝置的簡單、安全且高效能的通訊系統。
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Golang 的 OpenTelemetry 編譯期檢測工具。
- [oras](https://github.com/oras-project/oras) - 用於容器登錄庫中 OCI Artifacts 的 CLI 與函式庫。
- [outbox](https://github.com/oagudo/outbox) - 用於 Go 交易式寄件匣（transactional outbox）模式的輕量級函式庫，不綁定任何特定的關聯式資料庫或訊息代理。
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer 是實作寄件匣（outbox）模式的 Go 函式庫。
- [pglock](https://cirello.io/pglock) - 以 PostgreSQL 為後端的分散式鎖實作。
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - 採用 Protobuf 規格的 Golang JSON-RPC 伺服器與用戶端。
- [raft](https://github.com/hashicorp/raft) - HashiCorp 出品的 Raft 共識協定 Golang 實作。
- [raft](https://github.com/etcd-io/raft) - CoreOS 出品的 Raft 共識協定 Go 實作。
- [rain](https://github.com/cenkalti/rain) - BitTorrent 用戶端與函式庫。
- [redis-lock](https://github.com/bsm/redislock) - 使用 Redis 的簡化分散式鎖實作。
- [resgate](https://resgate.io/) - 即時 API 閘道，用於建構 REST、即時與 RPC API，讓所有用戶端無縫同步。
- [rpcplatform](https://github.com/nexcode/rpcplatform) - 具備服務探索、負載平衡等相關功能的微服務框架。
- [rpcx](https://github.com/smallnest/rpcx) - 類似阿里巴巴 Dubbo 的分散式可插拔 RPC 服務框架。
- [Semaphore](https://github.com/jexia/semaphore) - 簡單直接的（微）服務編排器。
- [servicepack](https://github.com/psyb0t/servicepack) - 在單一執行檔中並行執行多個服務的框架，可在本機執行或分散到多台機器上。
- [sleuth](https://github.com/ursiform/sleuth) - 用於 HTTP 服務之間無主節點 P2P 自動探索與 RPC 的函式庫（使用 [ZeroMQ](https://github.com/zeromq/libzmq)）。
- [sponge](https://github.com/zhufuyi/sponge) - 分散式開發框架，整合了自動程式碼產生、gin 與 gRPC 框架，以及基礎開發框架。
- [Tarmac](https://github.com/tarmac-project/tarmac) - 使用 WebAssembly 撰寫函式、微服務或單體應用程式的框架。
- [Temporal](https://github.com/temporalio/sdk-go) - 持久執行系統，讓程式碼具備容錯能力且保持簡單。
- [torrent](https://github.com/anacrolix/torrent) - BitTorrent 用戶端套件。
- [trpc-go](https://github.com/trpc-group/trpc-go) - tRPC 的 Go 語言實作；tRPC 是可插拔的高效能 RPC 框架。

**[⬆ 回到頂部](#contents)**

## 動態 DNS

_用於更新動態 DNS 記錄的工具。_

- [DDNS](https://github.com/skibish/ddns) - 以 Digital Ocean Networking DNS 為後端的個人 DDNS 用戶端。
- [dyndns](https://gitlab.com/alcastle/dyndns) - 在背景執行的 Go 程序，定期自動檢查你的 IP 位址，並在位址變更時更新 Google 網域的（一或多筆）動態 DNS 記錄。
- [GoDNS](https://github.com/timothyye/godns) - 以 Go 撰寫的動態 DNS 用戶端工具，支援 DNSPod 與 HE.net。

**[⬆ 回到頂部](#contents)**

## 電子郵件

_實作電子郵件建立與寄送的函式庫與工具。_

- [chasquid](https://blitiri.com.ar/p/chasquid) - 以 Go 撰寫的 SMTP 伺服器。
- [douceur](https://github.com/aymerick/douceur) - 為 HTML 電子郵件內嵌 CSS 的工具。
- [email](https://github.com/jordan-wright/email) - 穩健且彈性的 Go 電子郵件函式庫。
- [email-verifier](https://github.com/AfterShip/email-verifier) - 無需寄送任何郵件即可驗證電子郵件的 Go 函式庫。
- [go-dkim](https://github.com/toorop/go-dkim) - 用於簽署與驗證電子郵件的 DKIM 函式庫。
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - 提供電子郵件地址標準表示形式的 Golang 函式庫。
- [go-imap](https://github.com/BrianLeishman/go-imap) - 功能齊全的 IMAP 用戶端，支援自動重新連線、OAuth2、IDLE，並內建 MIME 解析。
- [go-imap](https://github.com/emersion/go-imap) - 適用於用戶端與伺服器的 IMAP 函式庫。
- [go-mail](https://github.com/wneessen/go-mail) - 在 Go 中寄送郵件的簡單 Go 函式庫。
- [go-message](https://github.com/emersion/go-message) - 用於網際網路訊息格式與郵件訊息的串流函式庫。
- [go-premailer](https://github.com/vanng822/go-premailer) - 在 Go 中為 HTML 郵件內嵌樣式。
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - 非常簡單的郵件寄送套件，支援 SMTP Keep Alive 與兩種逾時設定：連線與寄送。
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Postmark SpamCheck API 的用戶端，依據 SpamAssassin 規則為原始郵件評分。
- [Hectane](https://github.com/hectane/hectane) - 提供 HTTP API 的輕量級 SMTP 用戶端。
- [hermes](https://github.com/matcornic/hermes) - 產生簡潔、響應式 HTML 電子郵件的 Golang 套件。
- [Maddy](https://github.com/foxcpp/maddy) - 一體化（SMTP、IMAP、DKIM、DMARC、MTA-STS、DANE）電子郵件伺服器。
- [mailchain](https://github.com/mailchain/mailchain) - 以 Go 撰寫，可將加密電子郵件寄送至區塊鏈地址。
- [mailgun-go](https://github.com/mailgun/mailgun-go) - 使用 Mailgun API 寄送郵件的 Go 函式庫。
- [MailHog](https://github.com/mailhog/MailHog) - 具備網頁與 API 介面的電子郵件與 SMTP 測試工具。
- [Mailpit](https://github.com/axllent/mailpit) - 給開發者使用的電子郵件與 SMTP 測試工具。
- [mailx](https://github.com/valord577/mailx) - Mailx 是讓透過 SMTP 寄送電子郵件更加容易的函式庫。它是 Golang 標準函式庫 `net/smtp` 的強化版。
- [mox](https://github.com/mjl-/mox) - 現代化、功能完整的安全郵件伺服器，適合低維護成本的自架電子郵件。
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - SendGrid 用於寄送電子郵件的 Go 函式庫。
- [smtp](https://github.com/mailhog/smtp) - SMTP 伺服器協定狀態機。
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - 輕量、可設定的多執行緒假 SMTP 伺服器。可在測試環境中模擬任何 SMTP 行為。
- [tickstem/verify](https://github.com/tickstem/verify) - 在電子郵件地址寫入資料庫前先行驗證：語法、MX 查詢、拋棄式網域與角色型信箱。
- [truemail-go](https://github.com/truemail-rb/truemail-go) - 可設定的 Golang 電子郵件驗證器。可透過正規表示式、DNS、SMTP 等方式驗證電子郵件。

**[⬆ 回到頂部](#contents)**

## 可嵌入的腳本語言

_在你的 Go 程式碼中嵌入其他語言。_

- [anko](https://github.com/mattn/anko) - 以 Go 撰寫的可腳本化直譯器。
- [binder](https://github.com/alexeyco/binder) - 以 [gopher-lua](https://github.com/yuin/gopher-lua) 為基礎的 Go 至 Lua 繫結函式庫。
- [cel-go](https://github.com/google/cel-go) - 快速、可攜、非圖靈完備且支援漸進式型別的運算式求值。
- [ecal](https://github.com/krotik/ecal) - 支援並行事件處理的簡單可嵌入腳本語言。
- [expr](https://github.com/antonmedv/expr) - Go 的運算式求值引擎：快速、非圖靈完備，支援動態型別與靜態型別。
- [FrankenPHP](https://github.com/dunglas/frankenphp) - 嵌入 Go 的 PHP，並提供 `net/http` 處理常式。
- [gentee](https://github.com/gentee/gentee) - 可嵌入的腳本程式語言。
- [gisp](https://github.com/jcla1/gisp) - 以 Go 實作的簡單 LISP。
- [go-lua](https://github.com/Shopify/go-lua) - 將 Lua 5.2 VM 移植至純 Go。
- [go-lua](https://github.com/speedata/go-lua) - 以純 Go 實作的 Lua 5.4 VM。
- [go-php](https://github.com/deuill/go-php) - Go 的 PHP 繫結。
- [goal](https://codeberg.org/anaseto/goal) - 可嵌入的腳本陣列語言。
- [goja](https://github.com/dop251/goja) - 以 Go 實作的 ECMAScript 5.1(+)。
- [golua](https://github.com/aarzilli/golua) - Lua C API 的 Go 繫結。
- [gopher-lua](https://github.com/yuin/gopher-lua) - 以 Go 撰寫的 Lua 5.1 VM 與編譯器。
- [gval](https://github.com/PaesslerAG/gval) - 以 Go 撰寫、高度可自訂的運算式語言。
- [metacall](https://github.com/metacall/core) - 跨平台多語言執行環境，支援 NodeJS、JavaScript、TypeScript、Python、Ruby、C#、WebAssembly、Java、Cobol 等。
- [ngaro](https://github.com/db47h/ngaro) - 可嵌入的 Ngaro VM 實作，可使用 Retro 撰寫腳本。
- [prolog](https://github.com/ichiban/prolog) - 可嵌入的 Prolog。
- [purl](https://github.com/ian-kent/purl) - 嵌入 Go 的 Perl 5.18.2。
- [starlark-go](https://github.com/google/starlark-go) - Starlark 的 Go 實作：一種類似 Python 的語言，具備確定性求值與封閉式執行。
- [starlet](https://github.com/1set/starlet) - [starlark-go](https://github.com/google/starlark-go) 的 Go 包裝器，可簡化腳本執行、提供資料轉換，以及實用的 Starlark 函式庫與擴充。
- [tengo](https://github.com/d5/tengo) - Go 的位元組碼編譯腳本語言。
- [Wa/凹语言](https://github.com/wa-lang/wa) - 嵌入 Go 的凹（Wa）程式語言。

**[⬆ 回到頂部](#contents)**

## 錯誤處理

_用於處理錯誤的函式庫。_

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - 以每個呼叫位置的檔案、行號與函式名稱包裝錯誤。
- [emperror](https://github.com/emperror/emperror) - 適用於 Go 函式庫與應用程式的錯誤處理工具與最佳實務。
- [eris](https://github.com/rotisserie/eris) - 在 Go 中處理、追蹤與記錄錯誤的更好方式。相容於標準錯誤函式庫與 github.com/pkg/errors。
- [errlog](https://github.com/snwfdhmp/errlog) - 可自由修改的套件，能找出造成錯誤的原始碼（並提供其他快速除錯功能）。可直接接入任何日誌記錄器。
- [errors](https://github.com/emperror/errors) - 標準函式庫 errors 套件與 github.com/pkg/errors 的直接替代品。提供各種錯誤處理基本元件。
- [errors](https://github.com/neuronlabs/errors) - 具備分類基本元件的簡單 Golang 錯誤處理。
- [errors](https://github.com/PumpkinSeed/errors) - 最簡單的錯誤包裝器，效能出色且記憶體負擔極低。
- [errors](https://gitlab.com/tozd/go/errors) - 提供附帶堆疊追蹤與可選結構化細節的錯誤。相容於 github.com/pkg/errors API，但內部並未使用它。
- [errors](https://github.com/naughtygopher/errors) - 內建 Go errors 的直接替代品。這是一個極簡的錯誤處理套件，提供自訂錯誤型別、使用者友善的訊息、Unwrap 與 Is，以及非常易用且直觀的輔助函式。
- [errors](https://github.com/cockroachdb/errors) - 可讓錯誤透過網路傳遞的 Go 錯誤函式庫。
- [errorx](https://github.com/joomcode/errorx) - 功能豐富的錯誤套件，提供堆疊追蹤、錯誤組合等功能。
- [exception](https://github.com/rbrahul/exception) - 在 Golang 中以 try-catch 處理例外的簡單工具套件。
- [Falcon](https://github.com/SonicRoshan/falcon) - 簡單卻非常強大的錯誤處理套件。
- [Fault](https://github.com/Southclaws/fault) - 符合人體工學的錯誤包裝機制，便於為錯誤值附加結構化中繼資料與上下文。
- [go-errr](https://github.com/go-errr/go) - 具備 Catch/Recover 語意、包裝錯誤鏈與堆疊追蹤的 Go 錯誤處理函式庫。
- [go-multierror](https://github.com/hashicorp/go-multierror) - 將錯誤清單表示為單一錯誤的 Go（golang）套件。
- [metaerr](https://github.com/quantumcycle/metaerr) - 用於建立自訂錯誤建構器的函式庫，可產生帶有來自不同來源之中繼資料與可選堆疊追蹤的結構化錯誤。
- [multierr](https://github.com/uber-go/multierr) - 將錯誤清單表示為單一錯誤的套件。
- [oops](https://github.com/samber/oops) - 附帶上下文、堆疊追蹤與原始碼片段的錯誤處理。
- [tracerr](https://github.com/ztrue/tracerr) - 附帶堆疊追蹤與原始碼片段的 Golang 錯誤。

**[⬆ 回到頂部](#contents)**

## 檔案處理

_用於處理檔案與檔案系統的函式庫。_

- [afero](https://github.com/spf13/afero) - Go 的檔案系統抽象化系統。
- [afs](https://github.com/viant/afs) - Go 的抽象檔案儲存（mem、scp、zip、tar、雲端：s3、gs）。
- [baraka](https://github.com/xis/baraka) - 輕鬆處理 HTTP 檔案上傳的函式庫。
- [checksum](https://github.com/codingsince1985/checksum) - 為大型檔案計算訊息摘要，例如 MD5、SHA256、SHA1、CRC 或 BLAKE2s。
- [copy](https://github.com/otiai10/copy) - 遞迴複製目錄。
- [fastwalk](https://github.com/charlievieth/fastwalk) - 快速的平行目錄走訪函式庫（被 [fzf](https://github.com/junegunn/fzf) 採用）。
- [flop](https://github.com/homedepot/flop) - 檔案操作函式庫，目標是在功能上與 [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) 對等。
- [gdu](https://github.com/dundee/gdu) - 具備主控台介面的磁碟使用量分析工具。
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - 使用標籤載入 CSV 檔案。
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - 為人類設計的檔案複製工具。
- [go-exiftool](https://github.com/barasher/go-exiftool) - ExifTool 的 Go 繫結；ExifTool 是知名的函式庫，可從檔案（圖片、PDF、Office 文件……）中擷取盡可能多的中繼資料（EXIF、IPTC……）。
- [go-gtfs](https://github.com/artonge/go-gtfs) - 在 Go 中載入 GTFS 檔案。
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - 將 HTML 範本轉換為 PDF 檔案的套件。
- [goflat](https://github.com/lzambarda/goflat) - 能感知 context 的泛型平面檔序列化/反序列化工具。
- [gofs](https://github.com/no-src/gofs) - 開箱即用的跨平台即時檔案同步工具。
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Go 的 PDF/A 處理工具。
- [gulter](https://github.com/adelowo/gulter) - 自動處理所有檔案上傳需求的簡單 HTTP 中介軟體。
- [gut/yos](https://github.com/1set/gut) - 簡單可靠的套件，可對檔案、目錄與符號連結執行複製/移動/比較/列出等操作。
- [gxpdf](https://github.com/coregx/gxpdf) - 現代化、涵蓋完整生命週期的 Go PDF 函式庫：可解析、擷取表格、產生與簽署文件，且不依賴 CGO。
- [higgs](https://github.com/dastoori/higgs) - 用於隱藏/取消隱藏檔案與目錄的小型跨平台 Go 函式庫。
- [iso9660](https://github.com/kdomanski/iso9660) - 讀取與建立 ISO9660 磁碟映像的套件。
- [notify](https://github.com/rjeczalik/notify) - 檔案系統事件通知函式庫，API 簡單，類似 os/signal。
- [opc](https://github.com/qmuntal/opc) - 在 Go 中載入 Open Packaging Conventions（OPC）檔案。
- [parquet](https://github.com/parsyl/parquet) - 讀寫 [parquet](https://parquet.apache.org) 檔案。
- [pathtype](https://github.com/jonchun/pathtype) - 將路徑視為獨立型別，而非使用字串。
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - PDF 處理器。
- [skywalker](https://github.com/dixonwille/skywalker) - 讓你輕鬆並行走訪檔案系統的套件。
- [todotxt](https://github.com/1set/todotxt) - 適用於 Gina Trapani 的 [_todo.txt_](http://todotxt.org/) 檔案的 Go 函式庫，支援解析與操作 [_todo.txt_ 格式](https://github.com/todotxt/todo.txt)的任務清單。
- [vfs](https://github.com/C2FO/vfs) - 可插拔、可擴充且帶有既定設計理念的 Go 檔案系統功能集，支援 os、S3 與 GCS 等多種檔案系統類型。

**[⬆ 回到頂部](#contents)**

## 金融

_用於會計與金融的套件。_

- [accounting](https://github.com/leekchan/accounting) - Golang 的金額與貨幣格式化工具。
- [ach](https://github.com/moov-io/ach) - 自動清算所（ACH）檔案的讀取器、寫入器與驗證器。
- [bbgo](https://github.com/c9s/bbgo) - 以 Go 撰寫的加密貨幣交易機器人框架。包含常見的加密貨幣交易所 API、標準指標、回測與許多內建策略。
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - BingX API v3 的 Go 用戶端，提供 260 多個方法，支援 USDT 本位/幣本位期貨、現貨、傳統金融（TradFi）、WebSocket 串流與跟單交易。
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Bitget UTA API v3 的 Go 用戶端，具備型別化模型、以字串表示的價格、自動重新連線的 WebSocket 與模擬交易。
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Bybit V5 API 的 Go 用戶端，支援 HMAC/RSA 身分驗證、WebSocket 串流、模擬交易與傳統金融（TradFi）商品。
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - CNN 恐懼與貪婪指數的用戶端，包含七項組成指標與約一年的每日歷史資料。
- [currency](https://github.com/bojanz/currency) - 處理貨幣金額，並提供貨幣資訊與格式化功能。
- [currency](https://github.com/naughtygopher/currency) - 高效能且精確的貨幣計算套件。
- [dec128](https://github.com/jokruger/dec128) - 高效能的 128 位元定點十進位數。
- [decimal](https://github.com/shopspring/decimal) - 任意精度的定點十進位數。
- [decimal](https://github.com/aytechnet/decimal) - 高效能的 64 位元十進位數，部分相容於 [shopspring/decimal](https://github.com/shopspring/decimal) 與 int64，並包含重量與長度型別。
- [decimal](https://github.com/govalues/decimal) - 不可變的十進位數，運算不會引發 panic。
- [decimal](https://github.com/klokare/decimal) - 固定大小、無記憶體配置的十進位型別，適用於不需要任意精度的情況。
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - 45 個歐洲國家的加值稅（VAT）稅率與 VAT 編號格式，於編譯時嵌入，並每日從歐盟執委會 TEDB 更新。
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - 小型定點十進位數的快速精確序列化與運算。
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - 快速簡單的 ISO4217 定點十進位金額。
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Glassnode Basic API 的 Go 用戶端，提供 25 個指標類別、型別化結構、批次端點、時間點（Point-in-Time）資料，且零相依。
- [go-finance](https://github.com/alpeb/go-finance) - 金融函式庫，涵蓋貨幣時間價值（年金）、現金流量、利率換算、債券與折舊計算。
- [go-finance](https://github.com/pieterclaerhout/go-finance) - 擷取匯率、透過 VIES 檢查 VAT 編號，以及檢查 IBAN 銀行帳號的模組。
- [go-money](https://github.com/rhymond/go-money) - Fowler 的 Money 模式實作。
- [go-nowpayments](https://github.com/matm/go-nowpayments) - 加密貨幣 NOWPayments API 的函式庫。
- [gobl](https://github.com/invopop/gobl) - 發票與帳單文件框架。以 JSON Schema 為基礎。可自動計算與驗證稅額，並提供轉換為全球各種格式的工具。
- [indicator](https://github.com/cinar/indicator) - 技術分析函式庫，提供金融指標、策略與回測框架。
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - KuCoin UTA 與傳統版 REST 及 WebSocket API 的 Go 用戶端，支援 HMAC-SHA256 驗證、以字串型別表示的價格，以及型別化錯誤階層。
- [ledger](https://github.com/formancehq/ledger) - 可程式化的金融分類帳，為資金流轉應用程式提供基礎。
- [money](https://github.com/govalues/money) - 不可變的貨幣金額與匯率，運算不會引發 panic。
- [ofxgo](https://github.com/aclindsa/ofxgo) - 查詢 OFX 伺服器和/或解析其回應（附範例命令列用戶端）。
- [okx-go](https://github.com/tigusigalpa/okx-go) - OKX v5 API 的 Go 用戶端，提供 335 個 REST 端點、53 個 WebSocket 頻道，支援泛型與自動重新連線。
- [orderbook](https://github.com/i25959341/orderbook) - 以 Golang 撰寫的限價委託簿撮合引擎。
- [orderbook](https://github.com/intrepidkarthi/orderbook) - 可嵌入的限價委託簿與撮合引擎，採用整數精確定價、單一寫入者核心，以及預寫日誌（WAL）當機復原。
- [payme](https://github.com/jovandeginste/payme) - 適用於 SEPA 付款的 QR 碼產生器（ASCII 與 PNG）。
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - 全面、零相依且完全型別化的 Paystack API Go SDK。
- [swift](https://code.pfad.fr/swift/) - 離線檢查 IBAN（國際銀行帳號）的有效性，並擷取 BIC（適用於部分國家）。
- [techan](https://github.com/sdcoffey/techan) - 具備進階市場分析與交易策略的技術分析函式庫。
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Telegram Wallet Pay API 的 Go 用戶端，支援 HMAC-SHA256 Webhook 驗證，並提供適用於 net/http、Gin 與 Echo 的中介軟體。
- [ticker](https://github.com/achannarasappa/ticker) - 終端機股票看盤與持股追蹤工具。
- [transaction](https://github.com/claygod/transaction) - 以多執行緒模式運作的嵌入式帳戶交易資料庫。
- [udecimal](https://github.com/quagmt/udecimal) - 適用於金融應用程式的高效能、高精度、零記憶體配置定點十進位函式庫。
- [vat](https://github.com/dannyvankooten/vat) - VAT 編號驗證與歐盟 VAT 稅率。

**[⬆ 回到頂部](#contents)**

## 表單

_用於處理表單的函式庫。_

- [bind](https://github.com/robfig/bind) - 將表單資料繫結至任何 Go 值。
- [conform](https://github.com/leebenson/conform) - 管控使用者輸入。依據結構標籤修剪、清理並淨化資料。
- [form](https://github.com/go-playground/form) - 將 url.Values 解碼為 Go 值，並將 Go 值編碼為 url.Values。支援雙重陣列與完整 map。
- [formam](https://github.com/monoculum/formam) - 將表單的值解碼至結構。
- [forms](https://github.com/albrow/forms) - 不依賴特定框架的函式庫，用於解析與驗證表單/JSON 資料，支援 multipart 表單與檔案。
- [gbind](https://github.com/bdjimmy/gbind) - 將資料繫結至任何 Go 值。可使用內建與自訂的運算式繫結功能；支援資料驗證。
- [gorilla/csrf](https://github.com/gorilla/csrf) - Go Web 應用程式與服務的 CSRF 防護。
- [httpin](https://github.com/ggicci/httpin) - 將 HTTP 請求解碼至自訂結構，包括查詢字串、表單、HTTP 標頭等。
- [nosurf](https://github.com/justinas/nosurf) - Go 的 CSRF 防護中介軟體。
- [qs](https://github.com/sonh/qs) - 將結構編碼為 URL 查詢參數的 Go 模組。
- [queryparam](https://github.com/tomwright/queryparam) - 將 `url.Values` 解碼為標準或自訂型別的可用結構值。
- [roamer](https://github.com/slipros/roamer) - 透過簡單的標籤將 Cookie、標頭、查詢參數、路徑參數、本文等繫結至結構，消除解析 HTTP 請求的樣板程式碼。

**[⬆ 回到頂部](#contents)**

## 函數式程式設計

_在 Go 中支援函數式程式設計的套件。_

- [fp-go](https://github.com/repeale/fp-go) - 由 Golang 1.18+ 泛型驅動的函數式程式設計輔助工具集合。
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Golang 的 Monad 與函數式程式設計功能。
- [fuego](https://github.com/seborama/fuego) - Go 的函數式實驗。
- [FuncFrog](https://github.com/koss-null/FuncFrog) - 函數式輔助函式庫，針對 Go1.18+ 泛型 slice 提供 Map、Filter、Reduce 等串流操作，並具備惰性求值與錯誤處理機制。
- [g](https://github.com/enetx/g) - Go 的函數式程式設計框架。
- [go-functional](https://github.com/BooleanCat/go-functional) - 使用泛型在 Go 中進行函數式程式設計。
- [go-underscore](https://github.com/tobyhede/go-underscore) - 實用的函數式 Go 集合工具合集。
- [gofp](https://github.com/rbrahul/gofp) - 類似 lodash 的強大 Golang 工具函式庫。
- [mo](https://github.com/samber/mo) - 以 Go 1.18+ 泛型為基礎的 Monad 與常見函數式程式設計抽象（Option、Result、Either……）。
- [underscore](https://github.com/rjNemo/underscore) - 適用於 Go 1.18 及以上版本的函數式程式設計輔助工具。
- [valor](https://github.com/phelmkamp/valor) - 可選擇性包含值的泛型 Option 與 Result 型別。

**[⬆ 回到頂部](#contents)**

## 遊戲開發

_優秀的遊戲開發函式庫。_

- [Ark](https://github.com/mlange-42/ark) - 以原型（Archetype）為基礎的 Go 實體元件系統（ECS）。
- [due](https://github.com/dobyte/due) - 採用模組化元件設計的分散式遊戲伺服器框架，提供 TCP、KCP、WS 與 QUIC 閘道。
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - 以 Go 撰寫、極其簡單的 2D 遊戲引擎。
- [ecs](https://github.com/andygeiss/ecs) - 以實體元件系統概念在 Golang 中打造你自己的遊戲引擎。
- [engo](https://github.com/EngoEngine/engo) - Engo 是以 Go 撰寫的開源 2D 遊戲引擎，遵循實體-元件-系統（ECS）範式。
- [fantasyname](https://github.com/s0rg/fantasyname) - 奇幻名稱產生器。
- [g3n](https://github.com/g3n/engine) - Go 3D 遊戲引擎。
- [go-astar](https://github.com/beefsack/go-astar) - A\* 路徑搜尋演算法的 Go 實作。
- [go-sdl2](https://github.com/veandco/go-sdl2) - [Simple DirectMedia Layer](https://www.libsdl.org/) 的 Go 繫結。
- [go3d](https://github.com/ungerik/go3d) - 以效能為導向的 Go 2D/3D 數學套件。
- [gogpu](https://github.com/gogpu/gogpu) - 以 WebGPU 為基礎、具備視窗、輸入與渲染功能的 GPU 應用程式框架，可將 480 多行 GPU 程式碼縮減至約 20 行，且不依賴 CGO（GoGPU 生態系：[gg](https://github.com/gogpu/gg)、[ui](https://github.com/gogpu/ui)、[wgpu](https://github.com/gogpu/wgpu)、[naga](https://github.com/gogpu/naga)）。
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - 純 Go 的 WebGPU 實作，支援 Vulkan、DX12 與 Metal 後端，不依賴 CGO（屬於 [GoGPU](https://github.com/gogpu) 生態系）。
- [GOKe](https://github.com/kjkrol/goke) - 資料導向（DOD）、以原型為基礎的 ECS 引擎，採用與 L1 快取對齊的分塊 SoA 配置，實現可預測、平滑的記憶體成長與零記憶體配置的執行路徑。
- [gonet](https://github.com/xtaci/gonet) - 以 Golang 實作的遊戲伺服器骨架。
- [goworld](https://github.com/xiaonanln/goworld) - 可擴展的遊戲伺服器引擎，具備空間-實體框架與熱抽換功能。
- [grid](https://github.com/s0rg/grid) - 泛型 2D 網格，支援光線投射、陰影投射與路徑搜尋。
- [Leaf](https://github.com/name5566/leaf) - 輕量級遊戲伺服器框架。
- [nano](https://github.com/lonng/nano) - 輕量、便利、高效能、以 Golang 為基礎的遊戲伺服器框架。
- [Oak](https://github.com/oakmound/oak) - 純 Go 遊戲引擎。
- [Pi](https://github.com/elgopher/pi) - 為現代電腦打造復古遊戲的遊戲引擎。靈感來自 Pico-8，由 Ebitengine 驅動。
- [Pitaya](https://github.com/topfreegames/pitaya) - 可擴展的遊戲伺服器框架，支援叢集，並透過 C SDK 提供 iOS、Android、Unity 等平台的用戶端函式庫。
- [Pixel](https://github.com/gopxl/pixel) - 以 Go 精心打造的 2D 遊戲函式庫。
- [prototype](https://github.com/gonutz/prototype) - 使用極簡 API 建立桌面遊戲的跨平台（Windows/Linux/Mac）函式庫。
- [raylib-go](https://github.com/gen2brain/raylib-go) - [raylib](https://www.raylib.com/) 的 Go 繫結；raylib 是用於學習電玩遊戲程式設計的簡單易用函式庫。
- [sceneCamera](https://github.com/donomii/sceneCamera) - 適用於博物館、FPS、RTS 與立體渲染模式的攝影機移動與檢視/投影矩陣。
- [termloop](https://github.com/JoelOtter/termloop) - 建構於 Termbox 之上、以終端機為基礎的 Go 遊戲引擎。
- [tile](https://github.com/kelindar/tile) - 資料導向且對快取友善的 2D 網格函式庫（TileMap），包含路徑搜尋、觀察者與匯入/匯出功能。

**[⬆ 回到頂部](#contents)**

## 產生器

_產生 Go 程式碼的工具。_

- [apispec](https://github.com/ehabterra/apispec) - 無需註解即可從 Go 程式碼產生 OpenAPI 3.1 規格，並提供瀏覽器 UI 來設定、預覽與探索呼叫圖。
- [convergen](https://github.com/reedom/convergen) - 功能豐富的型別間複製程式碼產生器。
- [copygen](https://github.com/switchupcb/copygen) - 依據 Go 型別產生任何程式碼，包括型別間轉換器（複製程式碼），預設不使用反射。
- [generis](https://github.com/senselogic/GENERIS) - 提供泛型、自由格式巨集、條件編譯與 HTML 範本的程式碼產生工具。
- [go-apispec](https://github.com/antst/go-apispec) - 透過靜態分析從 Go 原始碼產生 OpenAPI 3.1 規格，並能自動偵測框架。
- [go-enum](https://github.com/abice/go-enum) - 從程式碼註解產生列舉（enum）程式碼。
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - 從程式碼註解產生列舉編碼程式碼。
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - 適用於 Go、類似 .NET LINQ 的查詢方法。
- [goderive](https://github.com/awalterschulze/goderive) - 從輸入型別推導出函式。
- [goverter](https://github.com/jmattheis/goverter) - 透過定義介面產生轉換器。
- [GoWrap](https://github.com/hexdigest/gowrap) - 使用簡單範本為 Go 介面產生裝飾器。
- [interfaces](https://github.com/rjeczalik/interfaces) - 產生介面定義的命令列工具。
- [jennifer](https://github.com/dave/jennifer) - 無需範本即可產生任意 Go 程式碼。
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - 此套件包含一組工具，可依據 OpenAPI 3.0 API 定義為服務產生 Go 樣板程式碼。
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - 從 protobuf 產生 HTTP 伺服器與用戶端。
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - 從 Protocol Buffers 產生具型別的 MCP 工具、提示詞與資源。
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - 動態建立型別的函式庫。

**[⬆ 回到頂部](#contents)**

## 地理資訊

_地理工具與伺服器_

- [borders](https://github.com/kpfaulkner/borders) - 偵測影像邊界並轉換為 GeoJSON，以供 GIS 操作使用。
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - GeoEngine 的官方 Go SDK，提供延遲僅數毫秒的高效能地理空間資料匯入。
- [geoos](https://github.com/spatial-go/geoos) - 提供空間資料與幾何演算法的函式庫。
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver 是透過 GeoServer REST API 操作 GeoServer 執行個體的 Go 套件。
- [gismanager](https://github.com/hishamkaram/gismanager) - 將你的 GIS 資料（向量資料）發布到 PostGIS 與 Geoserver。
- [godal](https://github.com/airbusgeo/godal) - GDAL 的 Go 包裝器。
- [H3](https://github.com/uber/h3-go) - H3 的 Go 繫結；H3 是階層式六角形地理空間索引系統。
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - H3 索引與 GeoJSON 之間的轉換工具。
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - 依虛擬節點分配 Uber H3geo 網格單元。
- [mbtileserver](https://github.com/consbio/mbtileserver) - 以 Go 為基礎的簡單伺服器，提供以 mbtiles 格式儲存的地圖圖磚。
- [osm](https://github.com/paulmach/osm) - 用於讀取、寫入與處理 OpenStreetMap 資料與 API 的函式庫。
- [pbf](https://github.com/maguro/pbf) - OpenStreetMap PBF 的 Golang 編碼器/解碼器。
- [S2 geojson](https://github.com/pantrif/s2-geojson) - 將 GeoJSON 轉換為 S2 網格單元，並在地圖上展示部分 S2 幾何功能。
- [S2 geometry](https://github.com/golang/geo) - 以 Go 實作的 S2 幾何函式庫。
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures 是一個 2D 幾何函式庫，提供用來建模幾何圖形的 Go 型別，以及操作這些圖形的演算法。
- [Tile38](https://github.com/tidwall/tile38) - 具備空間索引與即時地理圍欄的地理位置資料庫。
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) 可輕鬆使用與轉換經緯度、點與圖磚的專案，以便使用 Web 麥卡托投影在地圖上顯示資訊、標記等。
- [WGS84](https://github.com/wroge/wgs84) - 座標轉換與變換函式庫（ETRS89、OSGB36、NAD83、RGF93、Web Mercator、UTM）。

**[⬆ 回到頂部](#contents)**

## Go 編譯器

_將 Go 編譯為其他語言（或反向編譯）的工具。_

- [bunster](https://github.com/yassinebenaid/bunster) - 將 shell 腳本編譯為 Go。
- [c4go](https://github.com/Konstantin8105/c4go) - 將 C 程式碼轉譯為 Go 程式碼。
- [cxgo](https://github.com/gotranspile/cxgo) - 將 C 程式碼轉譯為 Go 程式碼。
- [esp32](https://github.com/andygeiss/esp32-transpiler) - 將 Go 轉譯為 Arduino 程式碼。
- [f4go](https://github.com/Konstantin8105/f4go) - 將 FORTRAN 77 程式碼轉譯為 Go 程式碼。
- [go2hx](https://github.com/go2hx/go2hx) - 將 Go 編譯為 Haxe，再轉為 Javascript/C++/Java/C# 的編譯器。
- [gopherjs](https://github.com/gopherjs/gopherjs) - 將 Go 編譯為 JavaScript 的編譯器。

**[⬆ 回到頂部](#contents)**

## Goroutine

_用於管理與操作 Goroutine 的工具。_

- [anchor](https://github.com/kyuff/anchor) - 在微服務架構中管理元件生命週期的函式庫。
- [ants](https://github.com/panjf2000/ants) - 以 Go 撰寫的高效能、低成本 goroutine 池。
- [artifex](https://github.com/borderstech/artifex) - 採用工作者分派機制的簡單 Golang 記憶體內作業佇列。
- [async](https://github.com/yaitoo/async) - 具備 async/await 風格的 Go 非同步任務套件。
- [async](https://github.com/reugn/async) - Go 的替代同步函式庫（Future、Promise、鎖）。
- [async](https://github.com/studiosol/async) - 以安全方式非同步執行函式，並在發生 panic 時加以復原。
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob 是一個非同步佇列作業管理器，程式碼輕量、清晰且快速。
- [autopool](https://github.com/AshvinBambhaniya/autopool) - 零設定、自動擴縮的 Go 工作者池，支援優先順序感知排程。
- [breaker](https://github.com/kamilsk/breaker) - 讓執行流程可被中斷的彈性機制。
- [channelify](https://github.com/ddelizia/channelify) - 將你的函式轉換為回傳通道，輕鬆實現強大的平行處理。
- [conc](https://github.com/sourcegraph/conc) - `conc` 是你在 Go 中進行結構化並行的工具帶，讓常見任務更簡單、更安全。
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - 並行限制器，支援逾時、動態優先順序，以及透過 context 取消 goroutine。
- [conexec](https://github.com/ITcathyh/conexec) - 並行工具組，協助以高效且安全的方式並行執行函式。支援指定整體逾時以避免阻塞，並使用 goroutine 池提升效率。
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - Golang 的 CyclicBarrier。
- [execpool](https://github.com/hexdigest/execpool) - 圍繞 exec.Cmd 打造的程序池，會預先啟動指定數量的程序，並在需要時連接其 stdin 與 stdout。與 FastCGI 或 Apache Prefork MPM 非常相似，但適用於任何指令。
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - 讓結構化並行變得簡單。
- [go-accumulator](https://github.com/nar10z/go-accumulator) - 累積事件並進行後續處理的解決方案。
- [go-actor](https://github.com/vladopajic/go-actor) - 使用 Actor 模型撰寫並行程式的小型函式庫。
- [go-floc](https://github.com/workanator/go-floc) - 輕鬆編排 goroutine。
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - 控制 goroutine 的執行順序。
- [go-future](https://github.com/jizhuozhi/go-future) - 具備泛型組合子與 DAG 執行引擎的 Future/Promise 函式庫。
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - 使用這個 API 簡單的輕量級函式庫管理 goroutine 池。
- [go-trylock](https://github.com/subchen/go-trylock) - 為 Golang 讀寫鎖提供 TryLock 支援。
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - 類似 `sync.WaitGroup`，但具備錯誤處理與並行控制。
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - 受 Java 執行緒池啟發，Go WorkerPool 旨在控制大量的 Go Routine。
- [goccm](https://github.com/zenthangplus/goccm) - Go 並行管理套件，可限制允許同時執行的 goroutine 數量。
- [gohive](https://github.com/loveleshsharma/gohive) - 高效能且易於使用的 Go Goroutine 池。
- [gollback](https://github.com/vardius/gollback) - 非同步簡單函式工具，用於管理閉包與回呼的執行。
- [goscade](https://github.com/ognick/goscade) - 極簡的 Go 元件生命週期編排器，支援相依圖、啟動順序、就緒協調與優雅關閉。
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl 同時是程序管理與程序監控工具。無限工作者池讓你能控制池與程序，並監控其狀態。
- [goworker](https://github.com/benmanns/goworker) - goworker 是以 Go 為基礎的背景工作者。
- [gowp](https://github.com/xxjwxc/gowp) - gowp 是限制並行數的 goroutine 池。
- [gpool](https://github.com/Sherifabdlnaby/gpool) - 管理可調整大小、能感知 context 的 goroutine 池，以限制並行數。
- [grpool](https://github.com/ivpusic/grpool) - 輕量級 Goroutine 池。
- [hands](https://github.com/duanckham/hands) - 用於控制多個 goroutine 執行與返回策略的流程控制器。
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch 提供 `All`、`First`、`Retry`、`Waterfall` 等函式，讓非同步流程控制更直觀。
- [kyoo](https://github.com/dirkaholic/kyoo) - 提供無上限的作業佇列與並行工作者池。
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - `sync/errgroup` 的直接替代品，限制為 N 個工作者 goroutine 的池。
- [nursery](https://github.com/arunsworld/nursery) - Go 中的結構化並行。
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight 是 Erlang 監督樹的完整實作。
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - 平行執行函式。
- [pond](https://github.com/alitto/pond) - 以 Go 撰寫的極簡高效能 goroutine 工作者池。
- [pool](https://github.com/go-playground/pool) - 有限消費者 goroutine 或無限 goroutine 池，讓 goroutine 的處理與取消更簡單。
- [powerlock](https://github.com/donomii/powerlock) - 具名 FIFO 互斥鎖，支援 context 取消、有界等待佇列、看門狗診斷、pprof 效能剖析與 Prometheus 指標。
- [rill](https://github.com/destel/rill) - 用於簡潔、可組合、以通道為基礎之並行的 Go 工具組。
- [routine](https://github.com/timandy/routine) - `routine` 是 Go 的 `ThreadLocal` 函式庫。它封裝並提供一些易於使用、無競爭、高效能的 `goroutine` 上下文存取介面，協助你更優雅地存取協程上下文資訊。
- [routine](https://github.com/x-mod/routine) - 搭配 context 控制 goroutine，支援 Main、Go、Pool 及一些實用的執行器。
- [semaphore](https://github.com/kamilsk/semaphore) - 以通道與 context 為基礎的號誌模式實作，鎖定/解鎖操作支援逾時。
- [semaphore](https://github.com/marusama/semaphore) - 以 CAS 為基礎、可調整大小的快速號誌實作（比以通道為基礎的號誌實作更快）。
- [stl](https://github.com/ssgreg/stl) - 以軟體交易記憶體（STM）並行控制機制為基礎的軟體交易鎖。
- [threadpool](https://github.com/shettyh/threadpool) - Golang 執行緒池實作。
- [tunny](https://github.com/Jeffail/tunny) - Golang 的 Goroutine 池。
- [worker-pool](https://github.com/vardius/worker-pool) - goworker 是一個簡單的 Go 非同步工作者池。
- [workerpool](https://github.com/gammazero/workerpool) - 限制任務執行並行數（而非排隊任務數量）的 Goroutine 池。

**[⬆ 回到頂部](#contents)**

## 圖形使用者介面

_用於建構 GUI 應用程式的函式庫。_

_工具組_

- [app](https://github.com/murlokswarm/app) - 使用 Go、HTML 與 CSS 建立應用程式的套件。支援：MacOS，Windows 支援開發中。
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - 透過 [cimgui](https://github.com/cimgui/cimgui) 自動產生的 [Dear ImGui](https://github.com/ocornut/imgui) Go 包裝器。
- [Cogent Core](https://github.com/cogentcore/core) - 用於建構 2D 與 3D 應用程式的框架，可在 macOS、Windows、Linux、iOS、Android 與網頁上執行。
- [DarwinKit](https://github.com/progrium/darwinkit) - 使用 Go 建構原生 macOS 應用程式。
- [energy](https://github.com/energye/energy) - 以 LCL（原生系統 UI 控制項函式庫）與 CEF（Chromium Embedded Framework）為基礎的跨平台框架（Windows/ macOS / Linux）。
- [fyne](https://github.com/fyne-io/fyne) - 以 Material Design 為基礎、專為 Go 設計的跨平台原生 GUI。支援：Linux、macOS、Windows、BSD、iOS 與 Android。
- [gio](https://gioui.org) - Gio 是用 Go 撰寫跨平台即時模式 GUI 的函式庫。Gio 支援所有主要平台：Linux、macOS、Windows、Android、iOS、FreeBSD、OpenBSD 與 WebAssembly。
- [go-gtk](https://mattn.github.io/go-gtk/) - GTK 的 Go 繫結。
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Sciter 的 Go 繫結；Sciter 是用於現代桌面 UI 開發的可嵌入 HTML/CSS/腳本引擎。跨平台。
- [Goey](https://bitbucket.org/rj/goey/src/master/) - 適用於 Windows / Linux / Mac 的跨平台 UI 工具組彙整器。支援 GTK、Cocoa、Windows API。
- [gogpu/ui](https://github.com/gogpu/ui) - GPU 加速的 GUI 工具組，提供 22 個元件、3 套設計系統（Material、Fluent、Cupertino）、響應式 signal，且不依賴 CGO（屬於 [GoGPU](https://github.com/gogpu) 生態系）。
- [goradd/html5tag](https://github.com/goradd/html5tag) - 輸出 HTML5 標籤的函式庫。
- [gotk3](https://github.com/gotk3/gotk3) - GTK3 的 Go 繫結。
- [gowd](https://github.com/dtylman/gowd) - 使用 Go、HTML、CSS 與 NW.js 快速簡單地開發桌面 UI。跨平台。
- [proton](https://github.com/CzaxStudio/proton) - 建構於 Gio 之上的純 Go 即時模式 GUI 框架，不依賴 Cgo。
- [qt](https://github.com/therecipe/qt) - Go 的 Qt 繫結（支援 Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi）。
- [Spot](https://github.com/roblillack/spot) - 響應式、跨平台的桌面 GUI 工具組。
- [ui](https://github.com/andlabs/ui) - Go 的平台原生 GUI 函式庫。跨平台。
- [unison](https://github.com/richardwilkes/unison) - 適用於 Go 桌面應用程式的統一圖形使用者體驗工具組。支援 macOS、Windows 與 Linux。
- [Wails](https://wails.io) - 使用作業系統內建的 HTML 渲染器，以 HTML UI 打造 Mac、Windows、Linux 桌面應用程式。
- [walk](https://github.com/lxn/walk) - Go 的 Windows 應用程式函式庫工具組。
- [webview](https://github.com/zserge/webview) - 跨平台的 webview 視窗，具備簡單的雙向 JavaScript 繫結（Windows / macOS / Linux）。

_互動_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - libappindicator3 C 函式庫的 Go 繫結。
- [gogpu/systray](https://github.com/gogpu/systray) - 適用於 Windows、macOS 與 Linux 的純 Go 系統匣函式庫，不依賴 CGO（屬於 [GoGPU](https://github.com/gogpu) 生態系）。
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Go 的 OSX 桌面通知函式庫。
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - 針對你機器上任何（可插拔的）活動發出通知的 OSX 函式庫。
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - 以 Golang 實作的 OSX 睡眠/喚醒通知。
- [robotgo](https://github.com/go-vgo/robotgo) - Go 原生的跨平台 GUI 系統自動化。可控制滑鼠、鍵盤等。
- [systray](https://github.com/getlantern/systray) - 在通知區域放置圖示與選單的跨平台 Go 函式庫。
- [trayhost](https://github.com/shurcooL/trayhost) - 在主機作業系統工作列放置圖示的跨平台 Go 函式庫。
- [zenity](https://github.com/ncruces/zenity) - 跨平台的 Go 函式庫與 CLI，用於建立以圖形方式與使用者互動的簡單對話框。

**[⬆ 回到頂部](#contents)**

## 硬體

_用於與硬體互動的函式庫、工具與教學。_

- [arduino-cli](https://github.com/arduino/arduino-cli) - 官方 Arduino CLI 與函式庫。可獨立執行，也能整合進大型 Go 專案。
- [emgo](https://github.com/ziutek/emgo) - 用於嵌入式系統程式設計（例如 STM32 MCU）的類 Go 語言。
- [ghw](https://github.com/jaypipes/ghw) - Golang 硬體探索/檢測函式庫。
- [go-osc](https://github.com/hypebeast/go-osc) - Go 的 Open Sound Control（OSC）繫結。
- [go-rpio](https://github.com/stianeikeland/go-rpio) - Go 的 GPIO 函式庫，不需要 cgo。
- [goroslib](https://github.com/aler9/goroslib) - Go 的機器人作業系統（ROS）函式庫。
- [joystick](https://github.com/0xcafed00d/joystick) - 以輪詢方式讀取已連接搖桿狀態的 API。
- [moody](https://github.com/dinakars777/moody) - macOS 的硬體事件「個性」常駐程式。監控 USB、充電器、上蓋等硬體事件，並以可自訂的個性做出回應。
- [sysinfo](https://github.com/zcalusic/sysinfo) - 提供 Linux 作業系統/核心/硬體系統資訊的純 Go 函式庫。

**[⬆ 回到頂部](#contents)**

## 影像

_用於處理影像的函式庫。_

- [bild](https://github.com/anthonynsimon/bild) - 以純 Go 實作的影像處理演算法集合。
- [bimg](https://github.com/h2non/bimg) - 使用 libvips 進行快速高效影像處理的小型套件。
- [cameron](https://github.com/aofei/cameron) - Go 的頭像產生器。
- [canvas](https://github.com/tdewolff/canvas) - 將向量圖形輸出為 PDF、SVG 或點陣影像。
- [color-extractor](https://github.com/marekm4/color-extractor) - 無外部相依套件的主色擷取工具。
- [darkroom](https://github.com/gojek/darkroom) - 影像代理伺服器，可更換儲存後端與影像處理引擎，著重速度與韌性。
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - 使用 libvips 的影像最佳化與轉換 API，可部署至 AWS Lambda 與 CloudFront。
- [geopattern](https://github.com/pravj/geopattern) - 從字串建立美觀的生成式影像圖樣。
- [gg](https://github.com/fogleman/gg) - 以純 Go 實作的 2D 渲染。
- [gift](https://github.com/disintegration/gift) - 影像處理濾鏡套件。
- [gltf](https://github.com/qmuntal/gltf) - 高效且穩健的 glTF 2.0 讀取器、寫入器與驗證器。
- [go-cairo](https://github.com/ungerik/go-cairo) - cairo 圖形函式庫的 Go 繫結。
- [go-gd](https://github.com/bolknote/go-gd) - GD 函式庫的 Go 繫結。
- [go-nude](https://github.com/koyachi/go-nude) - 以 Go 實作的裸露內容偵測。
- [go-qrcode](https://github.com/yeqown/go-qrcode) - 產生具個人化樣式的 QR 碼，可調整顏色、區塊大小、形狀與圖示。
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - 將 Python 的 webcolors 函式庫移植到 Go。
- [go-webp](https://github.com/kolesa-team/go-webp) - 使用 libwebp 編碼與解碼 WebP 圖片的函式庫。
- [gocv](https://github.com/hybridgroup/gocv) - 使用 OpenCV 3.3+ 進行電腦視覺處理的 Go 套件。
- [gogpu/gg](https://github.com/gogpu/gg) - GPU 加速的 2D 渲染，提供類似 Canvas 的 API，不依賴 CGO（屬於 [GoGPU](https://github.com/gogpu) 純 Go 圖形生態系）。
- [goimagehash](https://github.com/corona10/goimagehash) - Go 感知影像雜湊套件。
- [goimghdr](https://github.com/corona10/goimghdr) - Go 版的 imghdr 模組，可判斷檔案中所含影像的類型。
- [govatar](https://github.com/o1egl/govatar) - 產生有趣頭像的函式庫與命令列工具。
- [govips](https://github.com/davidbyttow/govips) - 速度飛快的 Go 影像處理與縮放函式庫。
- [gowitness](https://github.com/sensepost/gowitness) - 在命令列中使用 Go 與無頭 Chrome 擷取網頁截圖。
- [gridder](https://github.com/shomali11/gridder) - 以網格為基礎的 2D 圖形函式庫。
- [image2ascii](https://github.com/qeesung/image2ascii) - 將影像轉換為 ASCII。
- [imagick](https://github.com/gographics/imagick) - ImageMagick MagickWand C API 的 Go 繫結。
- [imaginary](https://github.com/h2non/imaginary) - 快速簡單的影像縮放 HTTP 微服務。
- [imaging](https://github.com/disintegration/imaging) - 簡單的 Go 影像處理套件。
- [imagor](https://github.com/cshum/imagor) - 使用 libvips 的快速、安全影像處理伺服器與 Go 函式庫。
- [img](https://github.com/hawx/img) - 精選的影像處理工具。
- [ln](https://github.com/fogleman/ln) - 以 Go 實作的 3D 線條藝術渲染。
- [mergi](https://github.com/noelyahan/mergi) - 影像處理工具與 Go 函式庫（合併、裁切、縮放、浮水印、動畫）。
- [mort](https://github.com/aldor007/mort) - 以 Go 撰寫的儲存與影像處理伺服器。
- [mpo](https://github.com/donatj/mpo) - MPO 3D 相片的解碼器與轉換工具。
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - 無外部相依的 Go 原生 WebP 編碼器。
- [picfit](https://github.com/thoas/picfit) - 以 Go 撰寫的影像縮放伺服器。
- [pt](https://github.com/fogleman/pt) - 以 Go 撰寫的路徑追蹤引擎。
- [scout](https://github.com/jonoton/scout) - Scout 是一套獨立的開源軟體解決方案，用於自行打造影像監控系統。
- [smartcrop](https://github.com/muesli/smartcrop) - 為任意影像與裁切尺寸找出理想的裁切範圍。
- [steganography](https://github.com/auyer/steganography) - 用於 LSB 隱寫術的純 Go 函式庫。
- [stegify](https://github.com/DimitarPetrov/stegify) - 用於 LSB 隱寫術的 Go 工具，能將任何檔案隱藏在影像中。
- [svgo](https://github.com/ajstarks/svgo) - 產生 SVG 的 Go 語言函式庫。
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs 使用新一代格式為網頁縮放並最佳化影像。
- [webp-server](https://github.com/mehdipourfar/webp-server) - 簡單精簡的影像伺服器，能儲存、縮放、轉換與快取影像。

**[⬆ 回到頂部](#contents)**

## IoT（物聯網）

_用於物聯網裝置程式設計的函式庫。_

- [connectordb](https://github.com/connectordb/connectordb) - 適用於量化自我與物聯網的開源平台。
- [devices](https://github.com/goiot/devices) - 物聯網裝置函式庫套組，為 x/exp/io 的實驗性項目。
- [ekuiper](https://github.com/lf-edge/ekuiper) - 適用於物聯網邊緣的輕量級資料串流處理引擎。
- [eywa](https://github.com/xcodersun/eywa) - Eywa 專案本質上是一個追蹤已連線裝置的連線管理器。
- [flogo](https://github.com/tibcosoftware/flogo) - Flogo 專案是用於物聯網邊緣應用程式與整合的開源框架。
- [gatt](https://github.com/paypal/gatt) - Gatt 是用於建構藍牙低功耗周邊裝置的 Go 套件。
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot 是適用於機器人、實體運算與物聯網的框架。
- [huego](https://github.com/amimof/huego) - 功能廣泛的 Go Philips Hue 用戶端函式庫。
- [iot](https://github.com/vaelen/iot/) - IoT 是用於實作 Google IoT Core 裝置的簡單框架。
- [periph](https://periph.io/) - 與底層電路板設施互動的周邊 I/O。
- [rulego](https://github.com/rulego/rulego) - RuleGo 是適用於物聯網邊緣的輕量、高效能、嵌入式、可編排之元件式規則引擎。
- [sensorbee](https://github.com/sensorbee/sensorbee) - 適用於物聯網的輕量級串流處理引擎。
- [shifu](https://github.com/Edgenesis/shifu) - Kubernetes 原生的物聯網開發框架。
- [smart-home](https://github.com/e154/smart-home) - 物聯網自動化軟體套件。

**[⬆ 回到頂部](#contents)**

## 作業排程器

_用於排程作業的函式庫。_

- [cdule](https://github.com/deepaksinghvi/cdule) - 支援資料庫的作業排程函式庫。
- [cheek](https://github.com/bart6114/cheek) - 類似 crontab 的簡單排程器，旨在以 KISS 原則進行作業排程。
- [clockwerk](https://github.com/onatm/clockwerk) - 以簡單流暢的語法排程週期性作業的 Go 套件。
- [cronticker](https://github.com/krayzpipes/cronticker) - 支援 cron 排程的 ticker 實作。
- [go-cron](https://github.com/rk/go-cron) - 簡單的 Go Cron 函式庫，可依不同間隔執行閉包或函式，從每秒一次到每年在特定日期時間執行一次。主要用於 Web 應用程式與長時間執行的常駐程式。
- [go-cron](https://github.com/netresearch/go-cron) - Cron 作業排程器，支援執行期更新排程、每個項目專屬的 context、韌性中介軟體（重試、斷路器、速率限制）與可觀測性掛鉤；為 robfig/cron 的後繼者。
- [go-job](https://github.com/cybergarage/go-job) - 彈性且可擴充的 Go 作業排程與執行函式庫。
- [go-quartz](https://github.com/reugn/go-quartz) - 簡單、零相依的 Go 排程函式庫。
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - 作業排程器，支援標準 cron 運算式、自訂描述符、間隔與任務相依性。
- [gocron](https://github.com/go-co-op/gocron) - 簡單流暢的 Go 作業排程。這是 [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron) 積極維護中的分支。
- [goflow](https://github.com/fieldryand/goflow) - 簡單卻強大的 DAG 排程器與儀表板。
- [gron](https://github.com/roylee0704/gron) - 使用簡單的 Go API 定義以時間為基礎的任務，Gron 的排程器會據此執行。
- [gronx](https://github.com/adhocore/gronx) - Cron 運算式解析器、任務執行器，以及讀取類 crontab 任務清單的常駐程式。
- [JobRunner](https://github.com/bamzi/jobrunner) - 聰明且功能豐富的 cron 作業排程器，內建作業佇列與即時監控。
- [leprechaun](https://github.com/kilgaloon/leprechaun) - 支援 Webhook、cron 與傳統排程的作業排程器。
- [ofelia](https://github.com/netresearch/ofelia) - Docker 作業排程器（Docker 版的 crontab）；mcuadros/ofelia 的分支，新增網頁 UI、作業相依性、重試與作業持久化。
- [pending](https://github.com/kahoon/pending) - 以 ID 為基礎、具防抖動功能的延遲任務排程器，支援取消、優雅關閉與可選的並行限制。
- [sched](https://github.com/romshark/sched) - 能快轉時間的作業排程器。
- [scheduler](https://github.com/carlescere/scheduler) - 讓 Cron 作業排程變得簡單。
- [scheduler](https://github.com/yuseferi/scheduler) - Go 原生的分散式作業排程器，支援延遲任務、批次 Redis 協調、重試、以租約為基礎的復原，以及版本化佇列分區。
- [tasks](https://github.com/madflojo/tasks) - 易於使用的 Go 行程內週期任務排程器。
- [tickstem/cron](https://github.com/tickstem/cron) - 排程 HTTP cron 作業的 Go 用戶端，提供執行歷史、失敗警示，以及無需正式憑證即可測試處理常式的 tsk-local。
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - 用於「失效開關」心跳監控的 Go 用戶端：每次作業執行後 ping 一個 URL，若 ping 停止傳來，便會以電子郵件發出警示。

**[⬆ 回到頂部](#contents)**

## JSON

_用於處理 JSON 的函式庫。_

- [ajson](https://github.com/spyzhov/ajson) - 支援 JSONPath 的 Golang 抽象 JSON。
- [ask](https://github.com/simonnilsson/ask) - 輕鬆存取 map 與 slice 中的巢狀值。可搭配 encoding/json 及其他將任意資料「Unmarshal」為 Go 資料型別的套件使用。
- [dynjson](https://github.com/cocoonspace/dynjson) - 適用於動態 API、可由用戶端自訂的 JSON 格式。
- [ej](https://github.com/lucassscaravelli/ej) - 簡潔地從不同來源讀寫 JSON。
- [epoch](https://github.com/vtopc/epoch) - 包含在 JSON 中將 Unix 時間戳記/epoch 與內建 time.Time 型別相互序列化/反序列化的基本元件。
- [fastjson](https://github.com/valyala/fastjson) - 快速的 Go JSON 解析器與驗證器。無需自訂結構、無需程式碼產生、無需反射。
- [gabs](https://github.com/Jeffail/gabs) - 用於在 Go 中解析、建立與編輯未知或動態的 JSON。
- [gjo](https://github.com/skanehira/gjo) - 建立 JSON 物件的小工具。
- [GJSON](https://github.com/tidwall/gjson) - 一行程式碼就能取得 JSON 值。
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError 讓我們能輕鬆建立遵循 JsonApi 規格的 JSON 錯誤回應。
- [go-respond](https://github.com/nicklaw5/go-respond) - 處理常見 HTTP JSON 回應的 Go 套件。
- [gojmapr](https://github.com/limiu82214/gojmapr) - 透過 JSON 路徑從複雜的 JSON 中取得簡單結構。
- [gojq](https://github.com/elgs/gojq) - 以 Golang 實作的 JSON 查詢。
- [gojson](https://github.com/ChimeraCoder/gojson) - 從範例 JSON 自動產生 Go（golang）結構定義。
- [htmljson](https://github.com/nikolaydubina/htmljson) - 在 Go 中將 JSON 豐富地渲染為 HTML。
- [JayDiff](https://github.com/yazgazan/jaydiff) - 以 Go 撰寫的 JSON 差異比較工具。
- [jettison](https://github.com/wI2L/jettison) - 快速且彈性的 Go JSON 編碼器。
- [jscan](https://github.com/romshark/jscan) - 高效能、零記憶體配置的 JSON 迭代器。
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - 將 JSON 轉換為 Go 結構。
- [JSON-to-Proto](https://json-to-proto.github.io/) - 線上將 JSON 轉換為 Protobuf。
- [json2go](https://github.com/m-zajac/json2go) - 進階的 JSON 至 Go 結構轉換。提供可解析多份 JSON 文件並建立能容納所有文件之結構的套件。
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - 以 JSON API 錯誤參考為基礎的 Go 繫結。
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - `encoding/json` 的直接替代品，可輸出彩色 JSON。
- [jsondiff](https://github.com/wI2L/jsondiff) - 以 RFC6902（JSON Patch）為基礎的 Go JSON 差異比較函式庫。
- [jsonf](https://github.com/miolini/jsonf) - 主控台工具，可將 JSON 突顯格式化並以結構查詢擷取內容。
- [jsongo](https://github.com/ricardolonga/jsongo) - 讓建立 JSON 物件更容易的流暢 API。
- [jsonhal](https://github.com/RichardKnop/jsonhal) - 讓自訂結構序列化為 HAL 相容 JSON 回應的簡單 Go 套件。
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - 提供簡單處理常式的 JSON 函式庫，讓你輕鬆從各種來源讀寫 JSON。
- [jsonic](https://github.com/sinhashubham95/jsonic) - 無需定義結構，即可以型別安全的方式處理與查詢 JSON 的工具。
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - 處理非結構化 JSON 資料的快速便利函式庫，可取代 `encoding/json`。
- [jzon](https://github.com/zerosnake0/jzon) - API 與行為皆相容標準函式庫的 JSON 函式庫。
- [kazaam](https://github.com/Qntfy/kazaam) - 對 JSON 文件進行任意轉換的 API。
- [mapslice-json](https://github.com/mickep76/mapslice-json) - Go MapSlice，可在 JSON 中依序序列化/反序列化 map。
- [marshmallow](https://github.com/PerimeterX/marshmallow) - 適用於彈性使用情境的高效能 JSON 反序列化。
- [mp](https://github.com/sanbornm/mp) - 簡單的 CLI 電子郵件解析器。目前從標準輸入讀取並輸出 JSON。
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go 是高效能解析器，並附帶包括 JSONPath 在內的多種 JSON 工具。
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - 簡單的 JSON 解析器，可透過 Golang 結構欄位標籤依條件進行驗證。
- [silentjson](https://github.com/GenshIv/silentjson) - 利用 AVX2 SIMD 指令、零記憶體配置的 JSON 邊界掃描與分割工具。
- [SJSON](https://github.com/tidwall/sjson) - 一行程式碼就能設定 JSON 值。
- [ujson](https://github.com/olvrng/ujson) - 處理非結構化 JSON 的快速精簡解析器與轉換器。
- [vjson](https://github.com/miladibra10/vjson) - 以流暢 API 宣告 JSON 結構描述來驗證 JSON 物件的 Go 套件。

**[⬆ 回到頂部](#contents)**

## 日誌記錄

_用於產生與處理日誌檔的函式庫。_

- [caarlos0/log](https://github.com/caarlos0/log) - 色彩繽紛的 CLI 日誌記錄器。
- [distillog](https://github.com/amoghe/distillog) - 精煉的分級日誌（可想成標準函式庫 + 日誌等級）。
- [glg](https://github.com/kpango/glg) - glg 是簡單快速的 Go 分級日誌函式庫。
- [glo](https://github.com/lajosbencz/glo) - 受 PHP Monolog 啟發的日誌工具，具有相同的嚴重性等級。
- [glog](https://github.com/golang/glog) - Go 的分級執行日誌。
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - 依目前日期時間自動輪替日誌檔的簡單寫入器，類似 cronolog。
- [go-log](https://github.com/pieterclaerhout/go-log) - 支援堆疊追蹤、物件傾印與可選時間戳記的日誌函式庫。
- [go-log](https://github.com/subchen/go-log) - 簡單且可設定的 Go 日誌記錄，支援等級、格式化器與寫入器。
- [go-log](https://github.com/siddontang/go-log) - 支援等級與多重處理器的日誌函式庫。
- [go-log](https://github.com/ian-kent/go-log) - 以 Go 實作的 Log4j。
- [go-log4g](https://github.com/go-log4g/core) - Log4g 為 Go 標準的 log/slog 日誌門面提供 Log4j 風格的設定與樣式版面。
- [go-logger](https://github.com/apsdehal/go-logger) - 適用於 Go 程式的簡單日誌記錄器，具備等級處理器。
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - 僅可附加、以雜湊鏈結、可選用 Ed25519 簽章的 slog 處理器，支援離線驗證是否遭竄改。
- [gone/log](https://github.com/One-com/gone/tree/master/log) - 快速、可擴充、功能完整且與標準函式庫原始碼相容的日誌函式庫。
- [gslog](https://github.com/maguro/gslog) - 適用於 log/slog 的 Google Cloud Logging 處理器，支援 OpenTelemetry trace 與 baggage，以及 Kubernetes podinfo 標籤。
- [httpretty](https://github.com/henvic/httpretty) - 在終端機中美化輸出一般 HTTP 請求以便除錯（類似 http.DumpRequest）。
- [journald](https://github.com/ssgreg/journald) - systemd Journal 原生日誌 API 的 Go 實作。
- [kemba](https://github.com/clok/kemba) - 受 [debug](https://github.com/visionmedia/debug) 啟發的小型除錯日誌工具，非常適合 CLI 工具與應用程式。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - 用於讀取與篩選 journalctl、檔案系統、Docker 與 Podman 容器，以及 Kubernetes Pod 日誌的 TUI。
- [log](https://github.com/aerogo/log) - O(1) 日誌系統，可將一個日誌連接到多個寫入器（例如 stdout、檔案與 TCP 連線）。
- [log](https://github.com/apex/log) - Go 的結構化日誌套件。
- [log](https://github.com/go-playground/log) - 簡單、可設定且可擴展的 Go 結構化日誌。
- [log](https://github.com/teris-io/log) - Go 的結構化日誌介面，將日誌門面與其實作清楚分離。
- [log](https://github.com/heartwilltell/log) - 包裝標準 log 套件的簡單分級日誌包裝器。
- [log](https://github.com/no-src/log) - 開箱即用的簡單日誌框架。
- [log15](https://github.com/inconshreveable/log15) - 簡單而強大的 Go 日誌記錄。
- [logdump](https://github.com/ewwwwwqm/logdump) - 多等級日誌套件。
- [logex](https://github.com/chzyer/logex) - Golang 日誌函式庫，支援追蹤與等級，包裝自標準 log 函式庫。
- [logger](https://github.com/azer/logger) - 極簡的 Go 日誌函式庫。
- [logo](https://github.com/mbndr/logo) - 可輸出至不同可設定寫入器的 Golang 日誌記錄器。
- [logrus](https://github.com/Sirupsen/logrus) - Go 的結構化日誌記錄器。
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - 使用 [logrus](https://github.com/sirupsen/logrus) 日誌記錄器的 `io.Writer` 實作。
- [logrusly](https://github.com/sebest/logrusly) - 將錯誤傳送至 [Loggly](https://www.loggly.com/) 的 [logrus](https://github.com/sirupsen/logrus) 外掛。
- [logutils](https://github.com/hashicorp/logutils) - 擴充標準日誌記錄器、讓 Go（Golang）日誌稍微更好用的工具。
- [logxi](https://github.com/mgutz/logxi) - 適用於 12-factor 應用程式、快速又令人愉快的日誌記錄器。
- [lumberjack](https://github.com/natefinch/lumberjack) - 簡單的滾動式日誌記錄器，實作 io.WriteCloser。
- [mlog](https://github.com/jbrodriguez/mlog) - 簡單的 Go 日誌模組，具備 5 個等級、可選的日誌檔輪替功能，以及 stdout/stderr 輸出。
- [noodlog](https://github.com/gyozatech/noodlog) - 參數化的 JSON 日誌函式庫，可遮蔽敏感資料並序列化任何類型的內容。不再出現印出指標而非值的情況，JSON 字串中也不再有跳脫字元。
- [onelog](https://github.com/francoispqt/onelog) - Onelog 是極其簡單卻非常高效的 JSON 日誌記錄器。它在所有情境下都是目前最快的 JSON 日誌記錄器，也是記憶體配置最少的日誌記錄器之一。
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - 高效能日誌記錄，支援日誌嚴重性、分類與篩選。可將篩選後的日誌訊息傳送至各種目標（例如主控台、網路、郵件）。
- [phuslu/log](https://github.com/phuslu/log) - 高效能結構化日誌。
- [pp](https://github.com/k0kubun/pp) - Go 語言的彩色美化輸出工具。
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter 是可自動輪替的 `io.Writer` 實作，提供多種策略來輪替日誌檔。
- [seelog](https://github.com/cihub/seelog) - 具備彈性分派、篩選與格式化的日誌功能。
- [sentry-go](https://github.com/getsentry/sentry-go) - Go 的 Sentry SDK。透過即時警示與效能監控，協助監控與追蹤錯誤。
- [slf4g](https://github.com/echocat/slf4g) - Golang 的簡單日誌門面：簡單的結構化日誌，同時強大、可擴充且可自訂，汲取了過去數十年日誌框架的大量經驗。
- [slog](https://github.com/gookit/slog) - 輕量、可設定、可擴充的 Go 日誌記錄器。
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - 從環境變數設定標準函式庫的 log/slog 日誌記錄器：等級、格式、原始碼位置，以及 stdout/stderr 分流。
- [slog-datadog](https://github.com/samber/slog-datadog) - Datadog 的 slog 處理器。
- [slog-formatter](https://github.com/samber/slog-formatter) - slog 的常用格式化器，以及協助你自行打造格式化器的輔助工具。
- [slog-logrus](https://github.com/samber/slog-logrus) - Logrus 的 slog 處理器。
- [slog-loki](https://github.com/samber/slog-loki) - Grafana Loki 的 slog 處理器。
- [slog-multi](https://github.com/samber/slog-multi) - slog.Handler 鏈（管線、扇出……）。
- [slog-sentry](https://github.com/samber/slog-sentry) - Sentry 的 slog 處理器。
- [slog-slack](https://github.com/samber/slog-slack) - Slack 的 slog 處理器。
- [slog-zap](https://github.com/samber/slog-zap) - Zap 的 slog 處理器。
- [slog-zerolog](https://github.com/samber/slog-zerolog) - Zerolog 的 slog 處理器。
- [slogor](https://gitlab.com/greyxor/slogor) - 色彩繽紛的 slog 處理器。
- [spew](https://github.com/davecgh/go-spew) - 為 Go 資料結構實作深層美化輸出，以協助除錯。
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Go SQL 資料庫驅動程式的日誌記錄器，無需修改既有的 \*sql.DB 標準函式庫用法。
- [stdlog](https://github.com/alexcesaro/log) - Stdlog 是提供分級日誌的物件導向函式庫，非常適合用於 cron 作業。
- [structy/log](https://github.com/structy/log) - 簡單易用的日誌系統，極簡但具備除錯與區分訊息的功能。
- [tail](https://github.com/hpcloud/tail) - 致力模擬 BSD tail 程式功能的 Go 套件。
- [timberjack](https://github.com/DeRuina/timberjack) - 滾動式日誌記錄器，支援依大小、依時間與依排定時鐘輪替，並支援壓縮與清理。
- [tint](https://github.com/lmittmann/tint) - 寫入彩色日誌的 slog.Handler。
- [xlog](https://github.com/xfxdev/xlog) - 採用外掛架構的彈性 Go 日誌系統，具備等級控制、多重日誌目標與自訂日誌格式。
- [xlog](https://github.com/rs/xlog) - 適用於感知 `net/context` 之 HTTP 處理常式的結構化日誌記錄器，具備彈性分派。
- [xylog](https://github.com/xybor-x/xylog) - 分級與結構化日誌，具備動態欄位、高效能、區域管理、簡單設定與易讀語法。
- [yell](https://github.com/jfcg/yell) - 又一個極簡日誌函式庫。
- [zap](https://github.com/uber-go/zap) - 快速、結構化、分級的 Go 日誌。
- [zax](https://github.com/yuseferi/zax) - 將 Context 與 Zap 日誌記錄器整合，讓 Go 日誌記錄更具彈性。
- [zerolog](https://github.com/rs/zerolog) - 零記憶體配置的 JSON 日誌記錄器。
- [zkits-logger](https://github.com/edoger/zkits-logger) - 強大的零相依 JSON 日誌記錄器。
- [zl](https://github.com/nkmr-jp/zl) - 以 zap 為基礎、開發者體驗極佳的日誌記錄器。功能豐富，同時易於設定。

**[⬆ 回到頂部](#contents)**

## 機器學習

_機器學習函式庫。_

- [Anneal](https://github.com/georgebuilds/anneal) - 以 Go 撰寫的機器學習編譯器，是從零開始移植的 tinygrad，具備 WebGPU 後端。
- [bayesian](https://github.com/jbrukh/bayesian) - Golang 的單純貝氏分類。
- [born](https://github.com/born-ml/born) - 受 Burn（Rust）啟發的深度學習框架，具備自動微分、型別安全的張量，以及不依賴 CGO 的 GPU 加速。
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - 快速、可擴展、高效能的決策樹梯度提升函式庫。Golang 使用 Cgo 以極快速度推論 CatBoost 模型。
- [CloudForest](https://github.com/ryanbressler/CloudForest) - 以純 Go 實作、快速、彈性且多執行緒的機器學習決策樹集成。
- [datatrax](https://github.com/rbmuller/datatrax) - 資料工程與經典機器學習工具組，具備批次處理、型別強制轉換與 7 種演算法，以純 Go 撰寫且零相依。
- [ddt](https://github.com/sgrodriguez/ddt) - 動態決策樹，可透過定義可自訂的規則來建立樹。
- [eaopt](https://github.com/MaxHalford/eaopt) - 演化最佳化函式庫。
- [evoli](https://github.com/khezen/evoli) - 遺傳演算法與粒子群最佳化函式庫。
- [fonet](https://github.com/Fontinalis/fonet) - 以 Go 撰寫的深度神經網路函式庫。
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - k-modes 與 k-prototypes 分群演算法的 Go 實作。
- [go-deep](https://github.com/patrikeh/go-deep) - 功能豐富的 Go 神經網路函式庫。
- [go-fann](https://github.com/white-pony/go-fann) - Fast Artificial Neural Networks（FANN）函式庫的 Go 繫結。
- [go-galib](https://github.com/thoj/go-galib) - 以 Go / golang 撰寫的遺傳演算法函式庫。
- [go-pr](https://github.com/daviddengcn/go-pr) - 以 Go 語言撰寫的模式辨識套件。
- [gobrain](https://github.com/goml/gobrain) - 以 Go 撰寫的神經網路。
- [godist](https://github.com/e-dard/godist) - 各種機率分布及相關方法。
- [goga](https://github.com/tomcraven/goga) - Go 的遺傳演算法函式庫。
- [GoLearn](https://github.com/sjwhitworth/golearn) - Go 的通用機器學習函式庫。
- [GoMind](https://github.com/surenderthakran/gomind) - 以 Go 撰寫的精簡神經網路函式庫。
- [goml](https://github.com/cdipaolo/goml) - 以 Go 實作的線上機器學習。
- [GoMLX](https://github.com/gomlx/gomlx) - Go 的加速機器學習框架。
- [gonet](https://github.com/dathoangnd/gonet) - Go 的神經網路。
- [Goptuna](https://github.com/c-bata/goptuna) - 以 Go 撰寫、針對黑箱函式的貝氏最佳化框架。一切都將被最佳化。
- [goRecommend](https://github.com/timkaye11/goRecommend) - 以 Go 撰寫的推薦演算法函式庫。
- [gorgonia](https://github.com/gorgonia/gorgonia) - 類似 Theano、以圖為基礎的 Go 計算函式庫，提供建構各種機器學習與神經網路演算法的基本元件。
- [gorse](https://github.com/zhenghaoz/gorse) - 以 Go 撰寫、基於協同過濾的離線推薦系統後端。
- [goscore](https://github.com/asafschers/goscore) - PMML 的 Go 評分 API。
- [gosseract](https://github.com/otiai10/gosseract) - 使用 Tesseract C++ 函式庫進行 OCR（光學字元辨識）的 Go 套件。
- [hugot](https://github.com/knights-analytics/hugot) - 搭配 onnxruntime、適用於 Golang 的 Huggingface Transformer 管線。
- [libsvm](https://github.com/datastream/libsvm) - 以 LIBSVM 3.14 為基礎衍生的 libsvm Golang 版本。
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 將訓練完成的經典機器學習模型轉譯為零相依原生 Go 程式碼的 CLI 工具，以 Python 撰寫並支援 Go 語言。
- [neural-go](https://github.com/schuyler/neural-go) - 以 Go 實作的多層感知器網路，透過反向傳播進行訓練。
- [ocrserver](https://github.com/otiai10/ocrserver) - 簡單的 OCR API 伺服器，能以 Docker 與 Heroku 極其輕鬆地部署。
- [onnx-go](https://github.com/owulveryck/onnx-go) - Open Neural Network Exchange（ONNX）的 Go 介面。
- [probab](https://github.com/ThePaw/probab) - 機率分布函式與貝氏推論。以純 Go 撰寫。
- [randomforest](https://github.com/malaschitz/randomForest) - 易於使用的 Go 隨機森林函式庫。
- [regommend](https://github.com/muesli/regommend) - 推薦與協同過濾引擎。
- [shield](https://github.com/eaigner/shield) - Go 的貝氏文字分類器，具備彈性的分詞器與儲存後端。
- [tfgo](https://github.com/galeone/tfgo) - 易於使用的 Tensorflow 繫結：簡化官方 Tensorflow Go 繫結的使用方式。可在 Go 中定義計算圖，並載入與執行以 Python 訓練的模型。
- [Varis](https://github.com/Xamber/Varis) - Golang 神經網路。

**[⬆ 回到頂部](#contents)**

## 訊息傳遞

_實作訊息傳遞系統的函式庫。_

- [ami](https://github.com/kak-tus/ami) - 以 Redis Cluster Streams 為基礎之可靠佇列的 Go 用戶端。
- [amqp](https://github.com/rabbitmq/amqp091-go) - Go RabbitMQ 用戶端函式庫。
- [APNs2](https://github.com/sideshow/apns2) - Go 的 HTTP/2 Apple 推播通知提供者，可傳送推播通知至 iOS、tvOS、Safari 與 OSX 應用程式。
- [Asynq](https://github.com/hibiken/asynq) - 建構於 Redis 之上、簡單可靠且高效的 Go 分散式任務佇列。
- [backlite](https://github.com/mikestefanello/backlite) - 使用 SQLite 的型別安全、持久化嵌入式任務佇列與背景作業執行器。
- [Beaver](https://github.com/Clivern/Beaver) - 即時訊息伺服器，用於在網頁與行動應用程式中打造可擴展的應用程式內通知、多人遊戲與聊天應用程式。
- [broker](https://github.com/qvcloud/broker) - 正式環境等級的訊息傳遞抽象層，為各種訊息代理提供統一 API，並內建 OpenTelemetry 整合。
- [Bus](https://github.com/mustafaturan/bus) - 用於內部通訊的極簡訊息匯流排實作。
- [Centrifugo](https://github.com/centrifugal/centrifugo) - 以 Go 撰寫的即時訊息（WebSocket 或 SockJS）伺服器。
- [Chanify](https://github.com/chanify/chanify) - 傳送訊息至你的 iOS 裝置的推播通知伺服器。
- [Commander](https://github.com/jeroenrinzema/commander) - 高階的事件驅動消費者/生產者，支援 Apache Kafka 等多種「方言」。
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go 是 Confluent 針對 Apache Kafka 與 Confluent Platform 推出的 Golang 用戶端。
- [dbus](https://github.com/godbus/dbus) - D-Bus 的原生 Go 繫結。
- [drone-line](https://github.com/appleboy/drone-line) - 使用執行檔、Docker 或 Drone CI 傳送 [Line](https://at.line.me/en) 通知。
- [emitter](https://github.com/olebedev/emitter) - 以 Go 的方式發出事件，支援萬用字元、條件判斷、取消功能等諸多優點。
- [event](https://github.com/agoalofalife/event) - 觀察者模式的實作。
- [EventBus](https://github.com/asaskevich/EventBus) - 支援非同步的輕量級事件匯流排。
- [gaurun-client](https://github.com/osamingo/gaurun-client) - 以 Go 撰寫的 Gaurun 用戶端。
- [Glue](https://github.com/desertbit/glue) - 穩健的 Go 與 Javascript Socket 函式庫（Socket.io 的替代方案）。
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - 簡單的 Go 事件匯流排套件。
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - 在事件驅動架構中處理中介者模式與簡化 CQRS 模式的函式庫，靈感來自 C# 的 MediatR 函式庫。
- [go-mq](https://github.com/cheshir/go-mq) - 支援宣告式設定的 RabbitMQ 用戶端。
- [go-notify](https://github.com/TheCreeper/go-notify) - freedesktop 通知規格的原生實作。
- [go-nsq](https://github.com/nsqio/go-nsq) - NSQ 的官方 Go 套件。
- [go-res](https://github.com/jirenius/go-res) - 使用 NATS 與 Resgate 建構 REST/即時服務的套件，讓用戶端無縫同步。
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Viessmann Vitotrol Web 服務的用戶端函式庫。
- [GoEventBus](https://github.com/Raezil/GoEventBus) - 極速、記憶體內、無鎖的事件匯流排函式庫。
- [Gollum](https://github.com/trivago/gollum) - n:m 多工器，從不同來源收集訊息並廣播至一組目的地。
- [golongpoll](https://github.com/jcuga/golongpoll) - 讓 Web 發布/訂閱變得簡單的 HTTP 長輪詢伺服器函式庫。
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster 是 Go 推播伺服器叢集。
- [gorush](https://github.com/appleboy/gorush) - 使用 [APNs2](https://github.com/sideshow/apns2) 與 Google [GCM](https://github.com/google/go-gcm) 的推播通知伺服器。
- [gosd](https://github.com/alexsniffin/gosd) - 排程何時將訊息分派至通道的函式庫。
- [guble](https://github.com/smancke/guble) - 使用推播通知（Google Firebase Cloud Messaging、Apple 推播通知服務、SMS）以及 WebSocket 與 REST API 的訊息伺服器，具備分散式運作與訊息持久化。
- [hare](https://github.com/leozz37/hare) - 用於傳送訊息與監聽 TCP socket 的易用函式庫。
- [hub](https://github.com/leandro-lugaresi/hub) - 適用於 Go 應用程式的訊息/事件中樞，採用發布/訂閱模式，並支援類似 RabbitMQ exchange 的別名。
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - 將事件與大量規則進行比對，規則可用 Go 或 JSON 撰寫。
- [jazz](https://github.com/socifi/jazz) - 簡單的 RabbitMQ 抽象層，用於佇列管理以及訊息的發布與消費。
- [kiln](https://github.com/rafaelaugustos/kiln) - 儲存在 PostgreSQL、MySQL 或 SQLite 中的持久化背景作業，支援重試、工作流程、週期性作業與儀表板。
- [machinery](https://github.com/RichardKnop/machinery) - 以分散式訊息傳遞為基礎的非同步任務佇列/作業佇列。
- [mangos](https://github.com/nanomsg/mangos) - Nanomsg（「Scalability Protocols」）的純 Go 實作，具備傳輸層互通性。
- [melody](https://github.com/olahol/melody) - 處理 WebSocket 工作階段的極簡框架，包含廣播與自動 ping/pong 處理。
- [Mercure](https://github.com/dunglas/mercure) - 使用 Mercure 協定（建構於 Server-Sent Events 之上）分派伺服器推送更新的伺服器與函式庫。
- [messagebus](https://github.com/vardius/message-bus) - messagebus 是簡單的 Go 非同步訊息匯流排，非常適合在進行事件溯源、CQRS、DDD 時作為事件匯流排使用。
- [NATS Go Client](https://github.com/nats-io/nats.go) - 適用於 NATS
  訊息系統的 Go 用戶端。
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - NSQ topic 與 channel 的小型包裝器。
- [oplog](https://github.com/dailymotion/oplog) - 適用於 REST API 的通用 oplog/複寫系統。
- [pubsub](https://github.com/tuxychandru/pubsub) - 簡單的 Go 發布/訂閱套件。
- [Quamina](https://github.com/timbray/quamina) - 用於篩選訊息與事件的快速模式比對。
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - 處理 RabbitMQ 自動重新連線與發布重試的輕量級函式庫。此函式庫考量到重新連線後需要在 RabbitMQ 中重新宣告實體的需求。
- [rabbus](https://github.com/rafaeljesus/rabbus) - amqp exchange 與佇列的小型包裝器。
- [rabtap](https://github.com/jandelgado/rabtap) - RabbitMQ 的瑞士刀 CLI 應用程式。
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ 是管理本機訊息佇列的輕量可靠函式庫。
- [Ratus](https://github.com/hyperonym/ratus) - Ratus 是 RESTful 非同步任務佇列伺服器。
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue 提供使用 Redis streams 之佇列的生產者與消費者。
- [rmqconn](https://github.com/sbabiv/rmqconn) - RabbitMQ 重新連線工具。包裝 amqp.Connection 與 amqp.Dial，可在連線中斷時重新連線，直到強制呼叫 Close () 方法關閉為止。
- [sarama](https://github.com/Shopify/sarama) - Apache Kafka 的 Go 函式庫。
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - 以 Redis 為後端的統一推播服務，用於從伺服器端向行動裝置傳送通知。
- [varmq](https://github.com/goptics/varmq) - 適用於並行 Go 程式、與儲存無關的訊息佇列與工作者池。
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - 高效處理訊息串流。可建構事件驅動應用程式，實現事件溯源、透過訊息進行 RPC 與 Saga。可使用 Kafka 或 RabbitMQ 等傳統發布/訂閱實作，也能使用 HTTP 或 MySQL binlog。
- [zmq4](https://github.com/pebbe/zmq4) - ZeroMQ 第 4 版的 Go 介面。也提供[第 3 版](https://github.com/pebbe/zmq3)與[第 2 版](https://github.com/pebbe/zmq2)。

**[⬆ 回到頂部](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - 用於建立與處理 Office Word（.docx）、Excel（.xlsx）與 Powerpoint（.pptx）文件的純 Go 函式庫。

### Microsoft Excel

_用於處理 Microsoft Excel 的函式庫。_

- [cellwalker](https://github.com/chonla/cellwalker) - 依儲存格名稱虛擬走訪 Excel 儲存格。
- [excelize](https://github.com/xuri/excelize) - 讀寫 Microsoft Excel&trade;（XLSX）檔案的 Golang 函式庫。
- [exl](https://github.com/go-the-way/exl) - 以 Go 撰寫、將 Excel 繫結至結構的工具（僅支援 Go1.18+）。
- [go-excel](https://github.com/szyhf/go-excel) - 簡單輕量的讀取器，可將類似關聯式資料庫的 Excel 當作資料表讀取。
- [xlsx](https://github.com/tealeg/xlsx) - 簡化在 Go 程式中讀取新版 Microsoft Excel 所用 XML 格式的函式庫。
- [xlsx](https://github.com/plandem/xlsx) - 在 Go 程式中快速、安全地讀取/更新既有 Microsoft Excel 檔案的方式。

### Microsoft Word

_用於處理 Microsoft Word 的函式庫。_

- [godocx](https://github.com/gomutex/godocx) - 讀寫 Microsoft Word（Docx）檔案的函式庫。

**[⬆ 回到頂部](#contents)**

## 其他

### 相依性注入

_用於相依性注入的函式庫。_

- [alice](https://github.com/magic003/alice) - Golang 的累加式相依性注入容器。
- [autowire](https://github.com/tiendc/autowire) - 使用泛型與反射的相依性注入。
- [boot-go](http://github.com/boot-go/boot) - 為 Go 開發者提供以元件為基礎的開發方式，並使用反射進行相依性注入。
- [componego](https://github.com/componego/componego) - 以元件為基礎的相依性注入框架，可動態替換相依項，測試時無需重複程式碼。
- [cosban/di](https://gitlab.com/cosban/di) - 以程式碼產生為基礎的相依性注入連接工具。
- [dig](https://github.com/uber-go/dig) - 以反射為基礎的 Go 相依性注入工具組。
- [dingo](https://github.com/i-love-flamingo/dingo) - 以 Guice 為基礎的 Go 相依性注入工具組。
- [do](https://github.com/samber/do) - 以泛型為基礎的相依性注入框架。
- [floatdrop/di](https://github.com/floatdrop/di) - 以泛型方法打造的相依性注入容器，支援子範圍、生命週期掛鉤，並在建構任何物件前驗證相依圖。
- [fx](https://github.com/uber-go/fx) - 以相依性注入為基礎的 Go 應用程式框架（建構於 dig 之上）。
- [go-beans](https://github.com/go-beans/go) - 受 Spring 啟發的 Go 相依性注入與應用程式生命週期框架。
- [Go-Spring](https://github.com/go-spring/spring-core) - 受 Spring Boot 啟發的高效能 Go 框架，提供相依性注入、自動設定與生命週期管理，同時保有 Go 的簡潔與效率。
- [gocontainer](https://github.com/vardius/gocontainer) - 簡單的相依性注入容器。
- [godi](https://github.com/junioryono/godi) - 微軟風格的 Go 相依性注入，支援範圍生命週期與泛型。
- [goioc/di](https://github.com/goioc/di) - 受 Spring 啟發的相依性注入容器。
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container 是適用於 Go 程式語言、輕量卻強大的 IoC 相依性注入容器。
- [gontainer](https://github.com/NVIDIA/gontainer) - 適用於 Go 專案的相依性注入服務容器。
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - 以 YAML 為基礎的 Go 相依性注入容器。支援相依項範圍，並能自動偵測循環相依。Gontainer 是並行安全的。
- [HnH/di](https://github.com/HnH/di) - 專注於簡潔 API 與彈性的相依性注入容器函式庫。
- [kinit](https://github.com/go-kata/kinit) - 可自訂的相依性注入容器，具備全域模式、層疊初始化與不受 panic 影響的終結處理。
- [kod](https://github.com/go-kod/kod) - 以泛型為基礎的 Go 相依性注入框架。
- [linker](https://github.com/logrange/linker) - 以反射為基礎的相依性注入與控制反轉函式庫，支援元件生命週期。
- [nject](https://github.com/muir/nject) - 型別安全、以反射為基礎的框架，適用於函式庫、測試、HTTP 端點與服務啟動。
- [ore](https://github.com/firasdarwish/ore) - 輕量、泛型且簡單的相依性注入（DI）容器。
- [parsley](https://github.com/matzefriedrich/parsley) - 彈性且模組化、以反射為基礎的 DI 函式庫，具備範圍化上下文與代理產生等進階功能，專為大型 Go 應用程式設計。
- [wire](https://github.com/Fs02/wire) - Golang 的嚴格執行期相依性注入。
- [yama](https://github.com/livetribe/yama) - 編譯期相依性注入與生命週期框架，可為 Google Wire 相依圖產生啟動、靜止與停止程式碼。

**[⬆ 回到頂部](#contents)**

### 專案結構

_**非官方**的專案結構模式集合。_

- [ardanlabs/service](https://github.com/ardanlabs/service) - 用於建構正式環境等級可擴展 Web 服務應用程式的[入門套件](https://github.com/ardanlabs/service/wiki)。
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - 遵循正式環境最佳實務、可快速啟動專案的 Go 應用程式樣板範本。
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - 讓使用者能使用熱門框架快速建立 Go 專案。
- [go-ddd](https://github.com/sklinkert/go-ddd) - 領域驅動設計範本，包含 CQRS、值物件、冪等命令與交易式寄件匣。
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Go gRPC 微服務的範例 monorepo，使用 Bazel、grpc-gateway、OpenAPI 與 Kubernetes。
- [go-module](https://github.com/octomation/go-module) - 以 Go 撰寫之典型模組的範本。
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - 對 AI 友善、可用於正式環境的 Go REST API 樣板，具備整潔架構、JWT 身分驗證、RBAC、PostgreSQL、Docker 熱重載與 Swagger 文件。
- [go-sample](https://github.com/zitryss/go-sample) - 附有實際程式碼的 Go 應用程式專案結構範例。
- [go-starter](https://github.com/allaboutapps/go-starter) - 帶有既定設計理念、可用於正式環境的 RESTful JSON 後端範本，與 VSCode DevContainers 高度整合。
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - 使用模組化專案結構打造產品微服務的 Go Todo 後端範例。
- [goapp](https://github.com/naughtygopher/goapp) - 帶有既定設計理念的指南，說明如何組織與開發 Go Web 應用程式/服務。
- [gobase](https://github.com/wajox/gobase) - 簡單的 Golang 應用程式骨架，包含實際 Golang 應用程式所需的基本設定。
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Go 生態系中常見的歷史與新興專案結構模式集合。注意：儘管組織名稱如此，它們並不代表官方的 Golang 標準，詳情請參閱[此 issue](https://github.com/golang-standards/project-layout/issues/117)。儘管如此，有些人可能仍會覺得這種結構很有用。
- [golang-templates/seed](https://github.com/golang-templates/seed) - Go 應用程式的 GitHub 儲存庫範本。
- [goxygen](https://github.com/shpota/goxygen) - 幾秒內即可產生使用 Go 與 Angular、React 或 Vue 的現代 Web 專案。
- [insidieux/inizio](https://github.com/insidieux/inizio) - 支援外掛的 Golang 專案結構產生器。
- [kickstart.go](https://github.com/raeperd/kickstart.go) - 極簡的單檔 Go HTTP 伺服器範本，無第三方相依套件。
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - 應用現代實務的 Go 應用程式樣板與範例。
- [nunu](https://github.com/go-nunu/nunu) - Nunu 是用於建構 Go 應用程式的鷹架工具。
- [pagoda](https://github.com/mikestefanello/pagoda) - 以 Go 打造、快速簡單的全端 Web 開發入門套件。
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold 可產生入門用的 Go 專案結構，讓你專注於實作商業邏輯。
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - 關於如何組織 Go 專案結構的實務與討論集合。

**[⬆ 回到頂部](#contents)**

### 字串

_用於處理字串的函式庫。_

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - 大括號展開機制的 Go 實作，可產生任意字串。
- [caps](https://github.com/chanced/caps) - 大小寫轉換函式庫。
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - 實作以大括號 `{}` 包圍 **替換欄位** 的格式字串。
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - 字串處理函式庫，可將字串轉換為駝峰式、蛇形、烤肉串式 / slug 等格式。
- [str](https://github.com/schigh/str) - 以管線為優先、用於組合轉換的字串工具組。
- [strcase](https://github.com/charlievieth/strcase) - 標準函式庫 strings/bytes 套件的不分大小寫實作。
- [stringFormatter](https://github.com/Wissance/stringFormatter) - 以 Python 或 C# 的方式格式化字串，並提供額外的文字格式化功能。
- [strutil](https://github.com/ozgio/strutil) - 字串工具。
- [sttr](https://github.com/abhimanyu003/sttr) - 跨平台的 CLI 應用程式，可對字串執行各種操作。
- [xstrings](https://github.com/huandu/xstrings) - 從其他語言移植而來的實用字串函式集合。

**[⬆ 回到頂部](#contents)**

### 未分類

_這些函式庫之所以放在這裡，是因為其他分類似乎都不適合。_

- [anagent](https://github.com/mudler/anagent) - 極簡、可插拔、支援相依性注入的 Golang 事件迴圈/計時器處理器。
- [antch](https://github.com/antchfx/antch) - 快速、強大且可擴充的網頁爬取與擷取框架。
- [archives](https://github.com/mholt/archives) - 跨平台、支援多種格式的 Go 函式庫，以統一 API 處理封存與壓縮格式，並可作為相容 io/fs 的虛擬檔案系統使用。
- [autoflags](https://github.com/artyom/autoflags) - 從結構欄位自動定義命令列旗標的 Go 套件。
- [avgRating](https://github.com/kirillDanshin/avgRating) - 依據 Wilson 分數公式計算平均分數與評等。
- [banner](https://github.com/dimiro1/banner) - 為你的 Go 應用程式加入美觀的橫幅。
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch 支援數字、數值、字母、算術、音訊與數字字母混合的驗證碼。
- [basexx](https://github.com/bobg/basexx) - 在各種進位制的數字字串之間進行轉換。
- [battery](https://github.com/distatus/battery) - 跨平台、標準化的電池資訊函式庫。
- [bitio](https://github.com/icza/bitio) - 高度最佳化的 Go 位元層級讀取器與寫入器。
- [browscap_go](https://github.com/digitalcrab/browscap_go) - [Browser Capabilities Project](https://browscap.org/) 的 GoLang 函式庫。
- [captcha](https://github.com/steambap/captcha) - captcha 套件提供易於使用、不預設立場的驗證碼產生 API。
- [common](https://github.com/kubeservice-stack/common) - 伺服器框架函式庫。
- [conv](https://github.com/cstockton/go-conv) - conv 套件提供快速且直觀的 Go 型別間轉換。
- [datacounter](https://github.com/miolini/datacounter) - 適用於 reader/writer/http.ResponseWriter 的 Go 計數器。
- [fake-useragent](https://github.com/lib4u/fake-useragent) - 以 Golang 撰寫、資料保持最新的簡單 User-Agent 偽造工具，使用真實世界的資料庫。
- [faker](https://github.com/pioz/faker) - Go 的隨機假資料與結構產生器。
- [ffmt](https://github.com/go-ffmt/ffmt) - 為人類美化資料顯示。
- [gatus](https://github.com/TwinProduction/gatus) - 自動化的服務健康狀態儀表板。
- [go-commandbus](https://github.com/lana/go-commandbus) - 輕巧且可插拔的 Go 命令匯流排。
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Golang 的泛型物件池。
- [go-openapi](https://github.com/go-openapi) - 解析與運用 OpenAPI 結構描述的套件集合。
- [go-resiliency](https://github.com/eapache/go-resiliency) - Golang 的韌性模式。
- [go-unarr](https://github.com/gen2brain/go-unarr) - 適用於 RAR、TAR、ZIP 與 7z 封存檔的解壓縮函式庫。
- [gofakeit](https://github.com/brianvoe/gofakeit) - 以 Go 撰寫的隨機資料產生器。
- [goffi](https://github.com/go-webgpu/goffi) - 純 Go 的 FFI，提供 libffi 風格的型別化呼叫介面與結構化錯誤處理，可在不使用 CGO 的情況下呼叫 C 函式庫。
- [gommit](https://github.com/antham/gommit) - 分析 Git 提交訊息，確保其遵循既定模式。
- [gopsutil](https://github.com/shirou/gopsutil) - 跨平台函式庫，用於擷取程序與系統使用率（CPU、記憶體、磁碟等）。
- [gosh](https://github.com/osamingo/gosh) - 提供 Go 統計處理器、結構與測量方法。
- [gosms](https://github.com/haxpax/gosms) - 以 Go 打造、屬於你自己的本機簡訊閘道，可用來傳送簡訊。
- [gotoprom](https://github.com/cabify/gotoprom) - 官方 Prometheus 用戶端的型別安全指標建構包裝函式庫。
- [gountries](https://github.com/pariz/gountries) - 提供國家與行政區資料的套件。
- [gtree](https://github.com/ddddddO/gtree) - 提供 CLI、套件與網頁介面，可從 Markdown 或以程式方式輸出樹狀結構並建立目錄。
- [health](https://github.com/alexliesenfeld/health) - 簡單且彈性的 Go 健康檢查函式庫。
- [health](https://github.com/dimiro1/health) - 易於使用、可擴充的健康檢查函式庫。
- [healthcheck](https://github.com/etherlabsio/healthcheck) - 適用於 RESTful 服務、帶有既定設計理念且支援並行的健康檢查 HTTP 處理常式。
- [hostutils](https://github.com/Wing924/hostutils) - 封裝與解封裝 FQDN 清單的 Golang 函式庫。
- [indigo](https://github.com/osamingo/indigo) - 使用 Sonyflake 並以 Base58 編碼的分散式唯一 ID 產生器。
- [lk](https://github.com/hyperboloide/lk) - 簡單的 Golang 授權管理函式庫。
- [llvm](https://github.com/llir/llvm) - 以純 Go 與 LLVM IR 互動的函式庫。
- [metrics](https://github.com/pascaldekloe/metrics) - 用於指標檢測與 Prometheus 指標公開的函式庫。
- [morse](https://github.com/alwindoss/morse) - 與摩斯電碼相互轉換的函式庫。
- [numa](https://github.com/lrita/numa) - NUMA 是以 Go 撰寫的工具函式庫，可協助我們撰寫感知 NUMA 的程式碼。
- [pdfgen](https://github.com/hyperboloide/pdfgen) - 從 JSON 請求產生 PDF 的 HTTP 服務。
- [persian](https://github.com/mavihq/persian) - Go 中適用於波斯語的一些工具。
- [purego](https://github.com/ebitengine/purego) - 無需 Cgo 即可從 Go 呼叫 C 函式的函式庫。
- [sandid](https://github.com/aofei/sandid) - 地球上的每一粒沙都有自己的 ID。
- [shellwords](https://github.com/Wing924/shellwords) - 依照 UNIX Bourne shell 的單字解析規則處理字串的 Golang 函式庫。
- [shortid](https://github.com/teris-io/shortid) - 以分散式方式產生超短、唯一、非連續且對 URL 友善的 ID。
- [shoutrrr](https://github.com/containrrr/shoutrrr) - 通知函式庫，可輕鬆存取 slack、mattermost、gotify 與 smtp 等各種訊息服務。
- [sitemap-format](https://github.com/mingard/sitemap-format) - 帶有些許語法糖的簡單 Sitemap 產生器。
- [stateless](https://github.com/qmuntal/stateless) - 用於建立狀態機的流暢函式庫。
- [stats](https://github.com/go-playground/stats) - 監控 Go MemStats 與記憶體、Swap、CPU 等系統統計資料，並透過 UDP 傳送到任何你想要的地方以供記錄等用途……
- [turtle](https://github.com/hackebrot/turtle) - Go 的表情符號。
- [url-shortener](https://github.com/pantrif/url-shortener) - 現代、強大且穩健的短網址微服務，支援 MySQL。
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - 產生處理 HTTP 輸入與輸出的樣板程式碼。
- [varint](https://github.com/chmike/varint) - 比標準函式庫所提供的更快速的變長整數編碼器/解碼器。
- [xdg](https://github.com/rkoesters/xdg) - 以 Go 實作的 FreeDesktop.org（xdg）規格。
- [xkg](https://github.com/go-xkg/xkg) - X 鍵盤擷取器（X Keyboard Grabber）。
- [xz](https://github.com/ulikunitz/xz) - 讀寫 xz 壓縮檔的純 Golang 套件。
**[⬆ 回到頂部](#contents)**

## 自然語言處理

_用於處理人類語言的函式庫。_

另請參閱[文字處理](#text-processing)與[文字分析](#text-analysis)。

### 語言偵測

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - 語言偵測 API 的 Go 用戶端。支援批次請求，以及短語或單字的語言偵測。
- [getlang](https://github.com/rylans/getlang) - 快速的自然語言偵測套件。
- [guesslanguage](https://github.com/endeveit/guesslanguage) - 判斷 Unicode 文字所屬自然語言的函式。
- [lingua-go](https://github.com/pemistahl/lingua-go) - 準確的自然語言偵測函式庫，長短文字皆適用。支援在混合語言文字中偵測多種語言。
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Go 的自然語言偵測套件。支援 84 種語言與 24 種文字系統（例如拉丁字母、西里爾字母等）。

### 形態分析器

- [go-propisyu](https://github.com/rekurt/go-propisyu) - 將數字轉換為俄文單字，並具備正確的語法性別與名詞變格。
- [go-stem](https://github.com/agonopol/go-stem) - Porter 詞幹提取演算法的實作。
- [go2vec](https://github.com/danieldk/go2vec) - word2vec 嵌入向量的讀取器與工具函式。
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - snowball libstemmer 函式庫（含 porter 2）的 Go 繫結。
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - 以 Go 撰寫、使用 sentiwordnet 詞典的情感分析器。
- [govader](https://github.com/jonreiter/govader) - [VADER 情感分析](https://github.com/cjhutto/vaderSentiment)的 Go 實作。
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - [GoVader](https://github.com/jonreiter/govader) 的微服務實作。
- [kagome](https://github.com/ikawaha/kagome) - 以純 Go 撰寫的日文形態分析器。
- [libtextcat](https://github.com/goodsign/libtextcat) - libtextcat C 函式庫的 Cgo 繫結。保證相容於 2.2 版。
- [nlp](https://github.com/james-bowman/nlp) - 支援 LSA（潛在語意分析）的 Go 自然語言處理函式庫。
- [paicehusk](https://github.com/rookii/paicehusk) - Paice/Husk 詞幹提取演算法的 Golang 實作。
- [porter](https://github.com/a2800276/porter) - 這是將 Martin Porter 以 C 實作的 Porter 詞幹提取演算法相當直接地移植過來的版本。
- [porter2](https://github.com/zhenjl/porter2) - 非常快速的 Porter 2 詞幹提取器。
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - 快速自動關鍵字擷取演算法（RAKE）的 Go 移植版本。
- [snowball](https://github.com/goodsign/snowball) - Go 的 Snowball 詞幹提取器移植版本（cgo 包裝器）。提供 [Snowball 原生](http://snowball.tartarus.org/)的詞幹擷取功能。
- [spaGO](https://github.com/nlpodyssey/spago) - 以 Go 撰寫、自成一體的機器學習與自然語言處理函式庫。
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - 西班牙文拼字校正器，也可以建立你自己的校正器。

### Slug 產生器

- [go-slugify](https://github.com/mozillazg/go-slugify) - 產生美觀的 slug，支援多種語言。
- [slug](https://github.com/gosimple/slug) - 對 URL 友善的 slug 產生工具，支援多種語言。
- [Slugify](https://github.com/avelino/slugify) - 處理字串的 Go slug 產生應用程式。

### 分詞器

- [gojieba](https://github.com/yanyiwu/gojieba) - 這是 [jieba](https://github.com/fxsjy/jieba)（結巴）中文分詞演算法的 Go 實作。
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - 以字典與 Bigram 語言模型為基礎的 Golang 分詞器。（目前僅支援中文分詞）
- [gse](https://github.com/go-ego/gse) - Go 的高效文字分詞；支援英文、中文、日文等語言。
- [MMSEGO](https://github.com/awsong/MMSEGO) - 這是 [MMSEG](http://technology.chtsai.org/mmseg/) 中文分詞演算法的 Go 實作。
- [segment](https://github.com/blevesearch/segment) - 依照 [Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/) 所述執行 Unicode 文字分段的 Go 函式庫。
- [sentences](https://github.com/neurosnap/sentences) - 句子分詞器：將文字轉換為句子清單。
- [shamoji](https://github.com/osamingo/shamoji) - shamoji 是以 Go 撰寫的詞語過濾套件。
- [stemmer](https://github.com/dchest/stemmer) - Go 程式語言的詞幹提取套件。包含英文與德文詞幹提取器。
- [textcat](https://github.com/pebbe/textcat) - 以 n-gram 為基礎進行文字分類的 Go 套件，支援 UTF-8 與原始文字。

### 翻譯

- [ctxi18n](https://github.com/invopop/ctxi18n/) - 能感知 context 的 i18n，提供簡短精練的 API、複數形式、插值與 `fs.FS` 支援。YAML 語系定義以 [Rails i18n](https://guides.rubyonrails.org/i18n.html) 為基礎。
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - 處理在地化文字的套件與配套工具。
- [go-mystem](https://github.com/dveselov/mystem) - Yandex.Mystem（俄文形態分析器）的 CGo 繫結。
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - 中文漢字轉漢語拼音轉換器。
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - 適用於 Golang 專案的詞彙表與文字資源函式庫。
- [gotext](https://github.com/leonelquinteros/gotext) - Go 的 GNU gettext 工具。
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - 以各種可能的方式將西里爾字母音譯為拉丁字母（Cyrillic → Latin）。
- [spreak](https://github.com/vorlif/spreak) - 以 gettext 背後概念為基礎、彈性的 Go 翻譯與人性化函式庫。
- [t](https://github.com/youthlin/t) - 另一個 Golang i18n 套件，遵循 GNU gettext 風格並支援 .po/.mo 檔案：`t.T (gettext)`、`t.N (ngettext)` 等。並包含命令列工具 [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate)，可從 text/html 範本中將訊息擷取為 pot 檔案。

### 音譯

- [enca](https://github.com/endeveit/enca) - [libenca](https://cihar.com/software/enca/) 的精簡 cgo 繫結，可偵測字元編碼。
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - 將 Unicode 文字音譯為 ASCII。
- [gounidecode](https://github.com/fiam/gounidecode) - Go 的 Unicode 音譯器（又稱 unidecode）。
- [transliterator](https://github.com/alexsergivan/transliterator) - 提供單向字串音譯，並支援特定語言的音譯規則。

**[⬆ 回到頂部](#contents)**

## 網路

_用於處理網路各層的函式庫。_

- [arp](https://github.com/mdlayher/arp) - arp 套件依照 RFC 826 實作 ARP 協定。
- [bart](https://github.com/gaissmai/bart) - bart 套件提供平衡路由表（BART），可進行極快速的 IP 至 CIDR 查詢等操作。
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - 讓透過 TCP 串流 Protocol Buffers 資料變得簡單。
- [canopus](https://github.com/zubairhamed/canopus) - CoAP 用戶端/伺服器實作（RFC 7252）。
- [cdns](https://github.com/junevm/cdns) - 透過終端機輕鬆變更 DNS 伺服器。
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - 零設定的 TCP/UDP 連接埠代理，支援自動啟動、以 IP 為基礎的存取控制，以及作業系統層級的網路堆疊調校。
- [cidranger](https://github.com/yl2chen/cidranger) - Go 的快速 IP 至 CIDR 查詢。
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare Tunnel 用戶端（前身為 Argo Tunnel）。
- [corsproxy](https://github.com/melihbirim/corsproxy) - CORS 代理伺服器，具備 SSRF 防護、主機允許/封鎖清單，以及可選的 API 金鑰驗證。
- [dhcp6](https://github.com/mdlayher/dhcp6) - dhcp6 套件依照 RFC 3315 實作 DHCPv6 伺服器。
- [dns](https://github.com/miekg/dns) - 處理 DNS 的 Go 函式庫。
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - 被動式 DNS 擷取/監控框架。
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - 測量 Kubernetes Pod 終止時，已建立的 TCP 與 UDP 連線實際上會發生什麼事。
- [easytcp](https://github.com/DarthPestilane/easytcp) - 以 Go（Golang）撰寫、內建訊息路由器的輕量級 TCP 框架。EasyTCP 協助你輕鬆、快速且不費力地建構 TCP 伺服器。
- [ether](https://github.com/songgao/ether) - 傳送與接收乙太網路訊框的跨平台 Go 套件。
- [ethernet](https://github.com/mdlayher/ethernet) - ethernet 套件實作 IEEE 802.3 Ethernet II 訊框與 IEEE 802.1Q VLAN 標籤的序列化與反序列化。
- [event](https://github.com/cheng-zhongliang/event) - 以 Golang 撰寫的簡單 I/O 事件通知函式庫。
- [expose](https://github.com/kernelshard/expose) - 輕量級的開源安全通道工具，可將本機伺服器公開至網際網路。
- [fasthttp](https://github.com/valyala/fasthttp) - fasthttp 套件是 Go 的快速 HTTP 實作，速度最高可達 net/http 的 10 倍。
- [fibersse](https://github.com/vinod-morya/fibersse) - 適用於 Fiber v3 的正式環境等級 Server-Sent Events（SSE），具備事件合併、優先通道、主題萬用字元、自適應節流與內建驗證。
- [fortio](https://github.com/fortio/fortio) - 負載測試函式庫與命令列工具，附進階 echo 伺服器與網頁 UI。可指定固定的每秒查詢數負載，記錄延遲直方圖與其他實用統計資料並繪製成圖表。支援 TCP、HTTP、gRPC。
- [ftp](https://github.com/jlaffaye/ftp) - ftp 套件依照 [RFC 959](https://tools.ietf.org/html/rfc959) 實作 FTP 用戶端。
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - 功能完整的 FTP 伺服器函式庫。
- [fullproxy](https://github.com/shoriwe/fullproxy) - 功能完整、可腳本化並可以常駐程式方式設定的代理與跳板工具組，支援 SOCKS5、HTTP、原始連接埠與反向代理協定。
- [fwdctl](https://github.com/alegrey91/fwdctl) - 管理 Linux 伺服器上 IPTables 轉送規則的簡單直觀 CLI。
- [gaio](https://github.com/xtaci/gaio) - 採用 proactor 模式的高效能 Golang 非同步 I/O 網路函式庫。
- [gev](https://github.com/Allenxuxu/gev) - gev 是以 Reactor 模式為基礎的輕量、快速非阻塞 TCP 網路函式庫。
- [gldap](https://github.com/jimlambrt/gldap) - gldap 提供 LDAP 伺服器實作，你只需為其 LDAP 操作提供處理常式。
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt 是彈性、高效能的 MQTT 代理伺服器函式庫，完整實作 MQTT 協定 V3.1.1。
- [gnet](https://github.com/panjf2000/gnet) - `gnet` 是以純 Go 撰寫的高效能、輕量、非阻塞、事件驅動網路框架。
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` 是高效能網路框架，特別適用於遊戲伺服器。
- [gNxI](https://github.com/google/gnxi) - 使用 gNMI 與 gNOI 協定的網路管理工具集合。
- [go-getter](https://github.com/hashicorp/go-getter) - 使用 URL 從各種來源下載檔案或目錄的 Go 函式庫。
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - 透過代理池發送 HTTP 請求的函式庫，提供容錯、負載平衡、自動重試、Cookie 管理等功能，可替換 http.Get/Post，或作為 http.Client RoundTripper 直接套用。
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - 輕量級即時封包擷取函式庫，支援擷取 HTTPS SNI。
- [go-powerdns](https://github.com/joeig/go-powerdns) - Golang 的 PowerDNS API 繫結。
- [go-sse](https://github.com/lampctl/go-sse) - HTML Server-Sent Events 的 Go 用戶端與伺服器實作。
- [go-stun](https://github.com/ccding/go-stun) - STUN 用戶端（RFC 3489 與 RFC 5389）的 Go 實作。
- [gobgp](https://github.com/osrg/gobgp) - 以 Go 程式語言實作的 BGP。
- [gopacket](https://github.com/google/gopacket) - 具備 libpcap 繫結的 Go 封包處理函式庫。
- [gopcap](https://github.com/akrennmair/gopcap) - libpcap 的 Go 包裝器。
- [GoProxy](https://github.com/elazarl/goproxy) - 使用 Go 建立自訂 HTTP/HTTPS 代理伺服器的函式庫。
- [goshark](https://github.com/sunwxg/goshark) - goshark 套件使用 tshark 解碼 IP 封包，並建立用於分析封包的資料結構。
- [gosnmp](https://github.com/soniah/gosnmp) - 執行 SNMP 操作的原生 Go 函式庫。
- [gotcp](https://github.com/gansidui/gotcp) - 快速撰寫 TCP 應用程式的 Go 套件。
- [grab](https://github.com/cavaliercoder/grab) - 管理檔案下載的 Go 套件。
- [graval](https://github.com/koofr/graval) - 實驗性的 FTP 伺服器框架。
- [gws](https://github.com/lxzan/gws) - 支援 AsyncIO 的高效能 WebSocket 伺服器與用戶端。
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs 讓你檢視 HTTP 請求並偽造回應。
- [httpproxy](https://github.com/wzshiming/httpproxy) - HTTP 代理處理常式與撥號器。
- [iplib](https://github.com/c-robinson/iplib) - 處理 IP 位址（net.IP、net.IPNet）的函式庫，靈感來自 Python 的 [ipaddress](https://docs.python.org/3/library/ipaddress.html) 與 Ruby 的 [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html)。
- [jazigo](https://github.com/udhos/jazigo) - Jazigo 是以 Go 撰寫、用於擷取多台網路裝置設定的工具。
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP：快速可靠的 ARQ 協定。
- [lhttp](https://github.com/fanux/lhttp) - 強大的 WebSocket 框架，讓你更輕鬆地建構即時通訊伺服器。
- [linkio](https://github.com/ian-kent/linkio) - 為 Reader/Writer 介面模擬網路連線速度。
- [llb](https://github.com/kirillDanshin/llb) - 這是一個非常簡單卻快速的代理伺服器後端。可用於以零記憶體配置與快速回應的方式，迅速重新導向至預先定義的網域。
- [macwifi](https://github.com/jaisonerick/macwifi) - 適用於 macOS 13+ 的 Wi-Fi 掃描與鑰匙圈密碼擷取。
- [mdns](https://github.com/hashicorp/mdns) - 以 Golang 撰寫的簡單 mDNS（多播 DNS）用戶端/伺服器函式庫。
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Paho Go Client 提供 MQTT 用戶端函式庫，可透過 TCP、TLS 或 WebSocket 連線至 MQTT 代理伺服器。
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - 極其簡單、不配置記憶體的低階 MQTT 實作，非常適合嵌入式系統。
- [nbio](https://github.com/lesismal/nbio) - 純 Go 的百萬級以上連線解決方案，支援 tls/http1.x/websocket，且基本相容於 net/http；高效能、低記憶體成本、非阻塞、事件驅動且易於使用。
- [net](https://golang.org/x/net) - 此儲存庫收錄 Go 的補充網路函式庫。
- [netchan](https://github.com/matveynator/netchan) - Golang 的網路通道（netchan）：安全、支援叢集，支援巢狀通道與任何資料型別。靈感來自 Rob Pike。
- [nethawk](https://github.com/Flowtriq/nethawk) - 用於即時網路流量擷取、分析與攻擊偵測的終端機 UI，支援 JSON 輸出模式。
- [netpoll](https://github.com/cloudwego/netpoll) - 由字節跳動（ByteDance）開發、專注於 RPC 情境的高效能非阻塞 I/O 網路框架。
- [NFF-Go](https://github.com/intel-go/nff-go) - 為雲端與裸機快速開發高效能網路功能的框架（前身為 YANFF）。
- [nodepass](https://github.com/NodePassProject/nodepass) - 安全、高效的 TCP/UDP 通道解決方案，利用預先建立的 TCP/QUIC/WebSocket 或 HTTP/2 連線，跨越網路限制提供快速可靠的存取。
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - 使用 UDP 多播進行跨平台區域網路節點探索的純 Go 函式庫。
- [portproxy](https://github.com/aybabtme/portproxy) - 簡單的 TCP 代理，可為不支援 CORS 的 API 加上 CORS 支援。
- [proxq](https://github.com/psyb0t/docker-proxq) - 非同步反向代理，會將每個請求排入 Redis 佇列，並回傳可輪詢回應的作業 ID，支援路徑前綴路由、重試與快取。
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - PostgreSQL 伺服器線路協定。打造你自己的伺服器並開始提供連線服務。
- [publicip](https://github.com/polera/publicip) - publicip 套件會回傳你對外的公開 IPv4 位址（網際網路出口）。
- [quic-go](https://github.com/lucas-clemente/quic-go) - 以純 Go 實作的 QUIC 協定。
- [roamr](https://github.com/sourabh-khot65/roamr) - 為附近已儲存的 WiFi 網路評分的 CLI，告訴你該使用哪一個以及原因。
- [sdns](https://github.com/semihalev/sdns) - 高效能的遞迴 DNS 解析伺服器，支援 DNSSEC，並著重保護隱私。
- [sftp](https://github.com/pkg/sftp) - sftp 套件依照 <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt> 所述實作 SSH 檔案傳輸協定。
- [ssh](https://github.com/gliderlabs/ssh) - 用於建構 SSH 伺服器的高階 API（包裝 crypto/ssh）。
- [sslb](https://github.com/eduardonunesp/sslb) - 這是一個超級簡單的負載平衡器（Super Simples Load Balancer），只是一個追求一定效能的小專案。
- [stun](https://github.com/go-rtc/stun) - RFC 5389 STUN 協定的 Go 實作。
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack 是以 TCP 為基礎的應用層協定，可在 Go 程式中封裝與解封裝位元組串流。
- [tspool](https://github.com/two/tspool) - 使用工作者池提升效能並保護伺服器的 TCP 函式庫。
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - 由 [gVisor](https://gvisor.dev/) TCP/IP 堆疊驅動、以純 Go 實作的 tun2socks。
- [utp](https://github.com/anacrolix/utp) - uTP 微傳輸協定的 Go 實作。
- [vssh](https://github.com/yahoo/vssh) - 透過 SSH 協定建構網路與伺服器自動化的 Go 函式庫。
- [water](https://github.com/songgao/water) - 簡單的 TUN/TAP 函式庫。
- [webrtc](https://github.com/pions/webrtc) - WebRTC API 的純 Go 實作。
- [winrm](https://github.com/masterzen/winrm) - 在 Windows 機器上遠端執行指令的 Go WinRM 用戶端。
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - 具韌性的 WebSocket 用戶端，支援自動重新連線、指數退避與心跳管理。
- [xtcp](https://github.com/xfxdev/xtcp) - TCP 伺服器框架，支援同步全雙工通訊、優雅關閉與自訂協定。

**[⬆ 回到頂部](#contents)**

### HTTP 用戶端

_用於發送 HTTP 請求的函式庫。_

- [axios4go](https://github.com/rezmoss/axios4go) - 受 Axios 啟發的 Go HTTP 用戶端函式庫，提供簡單直觀的 API 來發送 HTTP 請求。
- [azuretls-client](https://github.com/Noooste/azuretls-client) - 100% 以 Go 撰寫、易於使用的 HTTP 用戶端，可偽造 TLS/JA3 與 HTTP2 指紋。
- [fast-shot](https://github.com/opus-domini/fast-shot) - 使用 Go 最快速且簡單的 HTTP 用戶端，以連發般的精準度命中你的 API 目標。
- [gentleman](https://github.com/h2non/gentleman) - 功能完整、以外掛驅動的 HTTP 用戶端函式庫。
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - 輕鬆取得不與其他用戶端共享任何狀態的標準函式庫 HTTP 用戶端。
- [go-http-client](https://github.com/bozd4g/go-http-client) - 簡單輕鬆地發出 HTTP 呼叫。
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - 依據多個來源 IP 多工處理 HTTP 請求的函式庫。
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - 為 HTTP 請求發出 OpenTelemetry 指標的 Go http.RoundTripper。
- [go-req](https://github.com/wenerme/go-req) - 宣告式 Golang HTTP 用戶端。
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - 以 Go 撰寫、可重試的 HTTP 用戶端。
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - 受 Web Fetch API 啟發、強大輕量又易用的 HTTP 用戶端。
- [Grequest](https://github.com/lib4u/grequest)  - 簡單輕量的 Golang HTTP 請求套件，以強大的 net/http 為基礎。
- [grequests](https://github.com/levigross/grequests) - 偉大而知名的 Requests 函式庫的 Go「複製品」。
- [hedge](https://github.com/bhope/hedge) - Go 的自適應對沖請求（hedged requests）。以 Google 的「The Tail at Scale」論文為基礎，零設定即可降低 p99 延遲。
- [heimdall](https://github.com/gojektech/heimdall) - 具備重試與 hystrix 功能的增強型 HTTP 用戶端。
- [httpretry](https://github.com/ybbus/httpretry) - 為預設的 Go HTTP 用戶端加入重試功能。
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - 可直接替換的 net/http.Client，具備與瀏覽器逐位元組一致的 TLS（JA3/JA4）與 HTTP/2（Akamai）指紋。
- [pester](https://github.com/sethgrid/pester) - 具備重試、退避與並行功能的 Go HTTP 用戶端呼叫。
- [req](https://github.com/imroc/req) - 帶有黑魔法的簡單 Go HTTP 用戶端（更少程式碼、更高效率）。
- [request](https://github.com/monaco-io/request) - Golang 的 HTTP 用戶端。如果你用過 axios 或 requests，一定會喜歡它。無第三方相依套件。
- [requests](https://github.com/carlmjohnson/requests) - 給 Gopher 的 HTTP 請求工具。使用 context.Context，且不隱藏底層的 net/http.Client，因此相容於標準 Go API。另附測試工具。
- [resty](https://github.com/go-resty/resty) - 受 Ruby rest-client 啟發的簡單 Go HTTP 與 REST 用戶端。
- [rq](https://github.com/ddo/rq) - 為 Golang 標準函式庫 HTTP 用戶端提供更好用的介面。
- [sling](https://github.com/dghubble/sling) - Sling 是用於建立與傳送 API 請求的 Go HTTP 用戶端函式庫。
- [surf](https://github.com/enetx/surf) - 進階 HTTP 用戶端，支援 HTTP/1.1、HTTP/2、HTTP/3（QUIC）、SOCKS5 代理，以及瀏覽器等級的 TLS 指紋。
- [tls-client](https://github.com/bogdanfinn/tls-client) - 類似 net/http.Client 的 HTTP 用戶端，可選擇請求時要使用的特定用戶端 TLS 指紋。

**[⬆ 回到頂部](#contents)**

## OpenGL

_在 Go 中使用 OpenGL 的函式庫。_

- [gl](https://github.com/go-gl/gl) - OpenGL 的 Go 繫結（透過 glow 產生）。
- [glfw](https://github.com/go-gl/glfw) - GLFW 3 的 Go 繫結。
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - [glMatrix](https://glmatrix.net/) 函式庫的 Go 移植版本。
- [goxjs/gl](https://github.com/goxjs/gl) - Go 跨平台 OpenGL 繫結（OS X、Linux、Windows、瀏覽器、iOS、Android）。
- [goxjs/glfw](https://github.com/goxjs/glfw) - 用於建立 OpenGL 上下文並接收事件的 Go 跨平台 glfw 函式庫。
- [mathgl](https://github.com/go-gl/mathgl) - 受 GLM 啟發、專精 3D 數學的純 Go 數學套件。

**[⬆ 回到頂部](#contents)**

## ORM

_實作物件關聯對映（ORM）或資料對映技術的函式庫。_

- [bob](https://github.com/stephenafamo/bob) - Go 的 SQL 查詢建構器與 ORM/Factory 產生器。SQLBoiler 的後繼者。
- [bun](https://github.com/uptrace/bun) - 以 SQL 為優先的 Golang ORM。go-pg 的後繼者。
- [cacheme](https://github.com/Yiling-J/cacheme-go) - 以結構描述為基礎、具型別的 Go Redis 快取/記憶化框架。
- [CQL](https://github.com/FrancoLiberali/cql) - 建構於 GORM 之上，透過自動產生的程式碼加入編譯期驗證的查詢。
- [ent](https://github.com/facebook/ent) - Go 的實體框架。簡單卻強大的 ORM，用於資料建模與查詢。
- [go-dbw](https://github.com/hashicorp/go-dbw) - 封裝資料庫操作的簡單套件。
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - 適用於 Google/Firebase Cloud Firestore 的簡單 ORM。
- [go-sql](https://github.com/rushteam/gosql) - 簡單易用的 MySQL ORM。
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - 彈性而強大的 SQL 字串建構函式庫，另附零設定的 ORM。
- [go-store](https://github.com/gosuri/go-store) - 以 Redis 為後端、簡單快速的 Go 鍵值儲存函式庫。
- [golobby/orm](https://github.com/golobby/orm) - 簡單、快速、型別安全的泛型 ORM，讓開發者更快樂。
- [GoooQo](https://github.com/doytowin/goooqo) - 以宣告式查詢模型為基礎的資料庫存取框架。
- [GORM](https://github.com/go-gorm/gorm) - 出色的 Golang ORM 函式庫，致力於對開發者友善。
- [gormt](https://github.com/xxjwxc/gormt) - 將 MySQL 資料庫轉換為 Golang gorm 結構。
- [gorp](https://github.com/go-gorp/gorp) - Go Relational Persistence，Go 的類 ORM 函式庫。
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire 是 Golang 的資料庫存取層與驗證工具（支援：MySQL、PostgreSQL 與 SQLite3）。
- [lore](https://github.com/abrahambotros/lore) - 簡單輕量的 Go 偽 ORM/偽結構對映環境。
- [marlow](https://github.com/marlow/marlow) - 從專案結構產生的 ORM，提供編譯期安全保證。
- [pop/soda](https://github.com/gobuffalo/pop) - 適用於 MySQL、PostgreSQL 與 SQLite 的資料庫遷移、建立、ORM 等功能。
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go，為 Go 提供型別安全的資料庫存取。
- [reform](https://github.com/go-reform/reform) - 以非空介面與程式碼產生為基礎、更好的 Go ORM。
- [rel](https://github.com/go-rel/rel) - 現代化的 Golang 資料庫存取層：可測試、可擴充，並打造成簡潔優雅的 API。
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - ORM 產生器。依據你的資料庫結構描述量身產生功能豐富且極速的 ORM。
- [upper.io/db](https://github.com/upper/db) - 透過包裝成熟資料庫驅動程式的轉接器，以單一介面與不同資料來源互動。
- [XORM](https://gitea.com/xorm/xorm) - 簡單而強大的 Go ORM（支援：MySQL、MyMysql、PostgreSQL、Tidb、SQLite3、MsSql 與 Oracle）。
- [Zoom](https://github.com/albrow/zoom) - 建構於 Redis 之上的極速資料儲存與查詢引擎。

**[⬆ 回到頂部](#contents)**

## 套件管理

_官方的相依性與套件管理工具_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - 模組是原始碼交換與版本管理的單位。go 指令直接支援模組操作，包括記錄與解析對其他模組的相依性。

_非官方的套件與相依性管理函式庫。_

- [gup](https://github.com/nao1215/gup) - 更新透過「go install」安裝的執行檔。
- [modup](https://github.com/chaindead/modup) - 用於更新 Go 相依套件的終端機 UI，可偵測過時模組並選擇性升級。
- [syft](https://github.com/anchore/syft) - 從容器映像與檔案系統產生軟體物料清單（SBOM）的 CLI 工具與 Go 函式庫。

**[⬆ 回到頂部](#contents)**

## 效能

- [ebpf-go](https://github.com/cilium/ebpf) - 提供載入、編譯與除錯 eBPF 程式的工具。
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - 自動為所有方法與函式加入 span。
- [go-perfstat](https://github.com/go-perfstat/go) - Go 的輕量級效能統計與執行時間彙總工具。
- [jaeger](https://github.com/jaegertracing/jaeger) - 分散式追蹤系統。
- [mm-go](https://github.com/joetifa2003/mm-go) - Golang 的泛型手動記憶體管理。
- [otelinji](https://github.com/hedhyw/otelinji) - 為函式加入 span 的 OpenTelemetry 自動檢測工具。
- [pixie](https://github.com/pixie-labs/pixie) - 透過 eBPF 為 Golang 應用程式提供免檢測的追蹤。
- [profile](https://github.com/pkg/profile) - Go 的簡單效能剖析支援套件。
- [statsviz](https://github.com/arl/statsviz) - 即時視覺化你的 Go 應用程式執行期統計資料。
- [tracer](https://github.com/kamilsk/tracer) - 簡單、輕量的追蹤工具。

**[⬆ 回到頂部](#contents)**

## 查詢語言

- [api-fu](https://github.com/ccbrown/api-fu) - 全面的 GraphQL 實作。
- [dasel](https://github.com/tomwright/dasel) - 在命令列中使用選擇器查詢與更新資料結構。與 jq/yq 類似，但支援 JSON、YAML、TOML 與 XML，且沒有任何執行期相依套件。
- [gnata](https://github.com/RecoLabs/gnata) - JSONata 2.x 查詢與轉換語言的純 Go 實作。
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - 查詢 JSON 資料的簡單 Go 套件。
- [goven](https://github.com/SeldonIO/goven) - 可直接套用於任何資料庫結構描述的查詢語言。
- [gqlgen](https://github.com/99designs/gqlgen) - 以 go generate 為基礎的 GraphQL 伺服器函式庫。
- [grapher](https://github.com/reaganiwadha/grapher) - 利用 Go 泛型的 GraphQL 欄位建構器，並附帶額外的工具與功能。
- [graphql](https://github.com/neelance/graphql-go) - 著重易用性的 GraphQL 伺服器。
- [graphql-go](https://github.com/graphql-go/graphql) - GraphQL 的 Go 實作。
- [gws](https://github.com/Zaba505/gws) - Apollo「GraphQL over Websocket」的用戶端與伺服器實作。
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - 依據 JSONPath 語法擷取部分 JSON 的查詢函式庫。
- [jsonql](https://github.com/elgs/jsonql) - 以 Golang 撰寫的 JSON 查詢運算式函式庫。
- [jsonslice](https://github.com/bhmj/jsonslice) - 具備進階篩選功能的 JSONPath 查詢。
- [mql](https://github.com/hashicorp/mql) - 模型查詢語言（mql）是適用於資料庫模型的查詢語言。
- [play](https://github.com/paololazzari/play) - 一個 TUI 練習場，可用來試驗你喜愛的程式，例如 grep、sed、awk、jq 與 yq。
- [rql](https://github.com/a8m/rql) - REST API 的資源查詢語言。
- [rqp](https://github.com/timsolov/rest-query-parser) - REST API 的查詢解析器。可直接在查詢中使用篩選、驗證，以及 `AND`、`OR` 運算。
- [straf](https://github.com/SonicRoshan/straf) - 輕鬆將 Golang 結構轉換為 GraphQL 物件。

**[⬆ 回到頂部](#contents)**

## 反射

- [copy](https://github.com/gotidy/copy) - 快速複製不同型別結構的套件。
- [Deepcopier](https://github.com/ulule/deepcopier) - Go 的簡單結構複製工具。
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - 快速的深層複製函式庫。
- [goenum](https://github.com/lvyahui8/goenum) - 以泛型與反射為基礎的通用列舉結構，可讓你快速定義列舉並使用一組實用的預設方法。
- [gotype](https://github.com/wzshiming/gotype) - Golang 原始碼解析，用法類似 reflect 套件。
- [gpath](https://github.com/tenntenn/gpath) - 以 Go 運算式透過反射簡化結構欄位存取的函式庫。
- [objwalker](https://github.com/rekby/objwalker) - 透過反射走訪 Go 物件。
- [reflectpro](https://github.com/gontainer/reflectpro) - Go 的呼叫器、複製器、getter 與 setter。
- [reflectutils](https://github.com/muir/reflectutils) - 處理反射的輔助工具：結構標籤解析、遞迴走訪、從字串填入值。

**[⬆ 回到頂部](#contents)**

## 資源嵌入

- [debme](https://github.com/leaanthony/debme) - 從既有 `embed.FS` 的子目錄建立 `embed.FS`。
- [embed](https://pkg.go.dev/embed) - embed 套件提供存取嵌入在執行中 Go 程式內之檔案的功能。
- [rebed](https://github.com/soypat/rebed) - 從 Go 1.16 的 `embed.FS` 型別重建資料夾結構與檔案。
- [vfsgen](https://github.com/shurcooL/vfsgen) - 產生以靜態方式實作指定虛擬檔案系統的 vfsdata.go 檔案。

**[⬆ 回到頂部](#contents)**

## 科學與資料分析

_用於科學運算與資料分析的函式庫。_

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - 提供用於成對比較的 Bradley-Terry 模型。
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - 受 Github 貢獻活動啟發、以純 Go 實作的日曆熱度圖。
- [chart](https://github.com/vdobler/chart) - 簡單的 Go 圖表繪製函式庫。支援多種圖表類型。
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - 適用於機器學習與統計的 DataFrame（類似 pandas）。
- [decimal](https://github.com/db47h/decimal) - decimal 套件實作任意精度的十進位浮點數運算。
- [entitydebs](https://github.com/ndabAP/entitydebs) - 社會科學工具，內建相依句法剖析器，可透過程式分析非虛構文本中的實體。
- [evaler](https://github.com/soniah/evaler) - 簡單的浮點數算術運算式求值器。
- [ewma](https://github.com/VividCortex/ewma) - 指數加權移動平均。
- [geom](https://github.com/skelterjohn/geom) - Golang 的 2D 幾何。
- [go-dsp](https://github.com/mjibson/go-dsp) - Go 的數位訊號處理。
- [go-estimate](https://github.com/milosgajdos/go-estimate) - 以 Go 實作的狀態估計與濾波演算法。
- [go-gt](https://github.com/ThePaw/go-gt) - 以「Go」語言撰寫的圖論演算法。
- [go-hep](https://github.com/go-hep/hep) - 一組可輕鬆進行高能物理分析的函式庫與工具。
- [godesim](https://github.com/soypat/godesim) - 用於事件式模擬的擴充/多變數 ODE 求解框架，API 簡單。
- [goent](https://github.com/kzahedi/goent) - 熵度量的 Go 實作。
- [gograph](https://github.com/hmdsefi/gograph) - 提供數學圖論與演算法的 Golang 泛型圖形函式庫。
- [gonum](https://github.com/gonum/gonum) - Gonum 是 Go 程式語言的一組數值函式庫，包含矩陣、統計、最佳化等函式庫。
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot 提供在 Go 中建立與繪製圖表的 API。
- [goraph](https://github.com/gyuho/goraph) - 純 Go 的圖論函式庫（資料結構、演算法視覺化）。
- [gosl](https://github.com/cpmech/gosl) - Go 科學運算函式庫，涵蓋線性代數、FFT、幾何、NURBS、數值方法、機率、最佳化、微分方程等。
- [GoStats](https://github.com/OGFris/GoStats) - GoStats 是開源的 GoLang 數學統計函式庫，主要用於機器學習領域，涵蓋大多數統計量數函式。
- [graph](https://github.com/yourbasic/graph) - 基本圖形演算法函式庫。
- [hdf5](https://github.com/scigolib/hdf5) - 用於科學資料儲存與交換的 HDF5 檔案格式之純 Go 實作。
- [insyra](https://github.com/HazelnutParadise/insyra) - 資料分析函式庫，具備統計、視覺化、Parquet 支援與 Python 整合。
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - 操作 JSONL 圖形的工具，支援 graphviz。
- [matlab](https://github.com/scigolib/matlab) - 無需 CGO 即可讀寫 MATLAB .mat 檔案（v5-v7.3）的純 Go 函式庫。
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go 是在 Go 中定義數學規劃問題（例如凸最佳化問題）的開源套件。
- [matrix](https://github.com/Arceus-7/matrix) - 簡潔、泛型、零相依的 Go 矩陣數學套件，支援算術運算、矩陣分解與線性方程組求解。
- [ode](https://github.com/ChristopherRabotin/ode) - 常微分方程（ODE）求解器，支援擴充狀態與以通道為基礎的迭代停止條件。
- [orb](https://github.com/paulmach/orb) - 2D 幾何型別，支援裁剪、GeoJSON 與 Mapbox 向量圖磚。
- [pagerank](https://github.com/alixaxel/pagerank) - 以 Go 實作的加權 PageRank 演算法。
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - 小型線性內插函式庫。
- [PiHex](https://github.com/claygod/PiHex) - 計算十六進位圓周率的「Bailey-Borwein-Plouffe」演算法實作。
- [Poly](https://github.com/bebop/poly) - 用於生物工程的 Go 套件。
- [rootfinding](https://github.com/khezen/rootfinding) - 用於求二次函數根的求根演算法函式庫。
- [simd](https://github.com/tphakala/simd) - 針對 slice 的原生 Go 向量與 SIMD 運算，具備多架構組合語言加速。
- [sparse](https://github.com/james-bowman/sparse) - 用於線性代數的 Go 稀疏矩陣格式，支援科學與機器學習應用，相容於 gonum 矩陣函式庫。
- [stats](https://github.com/montanaflynn/stats) - 統計套件，提供 Golang 標準函式庫中缺少的常用函式。
- [streamtools](https://github.com/nytlabs/streamtools) - 用於處理資料串流的通用圖形化工具。
- [taxonkit](https://github.com/shenwei356/taxonkit) - 實用高效的 NCBI 分類學工具組；支援查詢譜系、重新格式化、篩選，以及建立自訂 taxdump 檔案。
- [TextRank](https://github.com/DavidBelicza/TextRank) - 以 Golang 實作的 TextRank，具備可擴充的功能（摘要、加權、片語擷取），並支援多執行緒（goroutine）。
- [topk](https://github.com/keilerkonzept/topk) - 以 HeavyKeeper 演算法為基礎的滑動視窗與一般 Top-K sketch。
- [triangolatte](https://github.com/tchayen/triangolatte) - 2D 三角剖分函式庫。可將線條與多邊形（皆以點為基礎）轉換為 GPU 能理解的語言。

**[⬆ 回到頂部](#contents)**

## 安全性

_協助提升應用程式安全性的函式庫。_

- [acme-proxy](https://github.com/esnet/acme-proxy) - 無需對網際網路開放 80 連接埠即可解決 ACME http-01 挑戰，並從外部憑證授權單位取得憑證。
- [acmetool](https://github.com/hlandau/acme) - 具備自動續期功能的 ACME（Let's Encrypt）用戶端工具。
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - 小型、密碼學安全的 Go 密碼產生器套件。
- [acra](https://github.com/cossacklabs/acra) - 網路加密代理，保護以資料庫為基礎的應用程式免於資料外洩：強大的選擇性加密、SQL 注入防護與入侵偵測系統。
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - 依照 NIST SP 800-90A 規範、以計數器模式 AES 為基礎的確定性隨機位元產生器（AES-CTR-DRBG）。
- [age](https://github.com/FiloSottile/age) - 簡單、現代且安全的加密工具（與 Go 函式庫），使用簡短明確的金鑰、沒有設定選項，並具備 UNIX 風格的可組合性。
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Go argon2 套件的輕量包裝器，其設計與 Go 標準函式庫的 Bcrypt 及 simple-scrypt 套件非常相似。
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - 自動佈建 Let's Encrypt 憑證並啟動 TLS 伺服器。
- [BadActor](https://github.com/jaredfolkins/badactor) - 秉持 fail2ban 精神打造、記憶體內、由應用程式驅動的封鎖工具。
- [beelzebub](https://github.com/mariocandela/beelzebub) - 安全的低程式碼誘捕系統（honeypot）框架，利用 AI 進行系統虛擬化。
- [booster](https://github.com/anatol/booster) - 支援全磁碟加密的快速 initramfs 產生器。
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Caddy 伺服器的 Web 應用程式防火牆中介軟體，具備正規表示式規則引擎、異常評分、IP/DNS/ASN/國家黑名單與速率限制。
- [Cameradar](https://github.com/Ullaakut/cameradar) - 遠端入侵監視攝影機 RTSP 串流的工具與函式庫。
- [canery](https://github.com/rluders/canery) - 精簡、無狀態的授權引擎，具備可插拔的評估模型。
- [certificates](https://github.com/mvmaasakkers/certificates) - 帶有既定設計理念的 TLS 憑證產生工具。
- [CertMagic](https://github.com/caddyserver/certmagic) - 成熟、穩健且強大的 ACME 用戶端整合，提供全受管的 TLS 憑證核發與續期。
- [Coraza](https://github.com/corazawaf/coraza) - 企業級、相容 modsecurity 與 OWASP CRS 的 WAF 函式庫。
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - 獨立的 CLI 工具，可在部署至正式環境前驗證 ModSecurity 與 Coraza SecLang WAF 規則。
- [Crenox](https://github.com/crenoxhq/crenox) - 零相依的 pre-commit 機密掃描器，使用 Aho-Corasick 演算法進行高效能的憑證外洩偵測。
- [deidentify](https://github.com/aliengiraffe/deidentify) - 以確定性且保留格式的方式，從文字與結構化資料中移除個人可識別資訊。
- [dongle](https://github.com/golang-module/dongle) - 簡單、語意化且對開發者友善的 Golang 編碼/解碼與加密/解密套件。
- [dotlock](https://github.com/ahmadraza100/dotlock) - 加密的 .env 保險庫管理器，提供互動式 TUI，可跨多個環境與設定檔管理機密。
- [encid](https://github.com/bobg/encid) - 編碼與解碼加密的整數 ID。
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - 熵密碼產生器，提供豐富的命令列參數，可安全地產生隨機字串，包括數字、密碼，以及由冷門字典單字混合符號與數字組成的密碼。
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - 在 Linux 伺服器上動態更新 firewalld 規則的 REST 應用程式。
- [fort](https://github.com/djadmin/fort) - 透過 16 項檢查稽核 macOS 安全設定、回報分數，並在可安全處理時修正問題。單一執行檔，可透過 Homebrew 安裝。
- [go-generate-password](https://github.com/m1/go-generate-password) - 可在 CLI 中使用或作為函式庫使用的密碼產生器。
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Go 的 Apache htpasswd 解析器。
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - 以原始密碼學熵值為基礎的密碼驗證器。
- [go-peer](https://github.com/number571/go-peer) - 用於建立安全且匿名之去中心化系統的軟體函式庫。
- [go-yara](https://github.com/hillu/go-yara) - [YARA](https://github.com/plusvic/yara) 的 Go 繫結；YARA 是「惡意軟體研究人員（以及其他所有人）的模式比對瑞士刀」。
- [goArgonPass](https://github.com/dwin/goArgonPass) - Argon2 密碼雜湊與驗證，設計上相容於既有的 Python 與 PHP 實作。
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - 一個可能有點偏執、用於安全雜湊與加密密碼的套件。
- [gost-crypto](https://github.com/rekurt/gost-crypto) - 俄羅斯 GOST 密碼學標準（數位簽章、Streebog 雜湊、Kuznechik 加密、MGM AEAD）的 Go 函式庫，底層採用 OpenSSL gost-engine。
- [grim](https://github.com/ijin82/grim) - 在揮發性記憶體中管理加密 Markdown 筆記保險庫的快速安全 CLI 工具。
- [gspy](https://github.com/Mutasem-mk4/gspy) - 針對執行中 Go 程序、從 goroutine 追查到系統呼叫的鑑識檢查工具。
- [Interpol](https://github.com/avahidi/interpol) - 用於模糊測試與滲透測試、以規則為基礎的資料產生器。
- [leakhound](https://github.com/nilpoona/leakhound) - 偵測意外記錄敏感結構欄位的靜態分析工具，防止資料透過日誌外洩。
- [lego](https://github.com/go-acme/lego) - 純 Go 的 ACME 用戶端函式庫與 CLI 工具（搭配 Let's Encrypt 使用）。
- [luks.go](https://github.com/anatol/luks.go) - 管理 LUKS 分割區的純 Golang 函式庫。
- [mcprobe](https://github.com/tamish560/mcprobe) - MCP 伺服器的安全掃描器，可偵測提示詞注入與工具遮蔽（tool shadowing），並支援 SARIF 輸出。
- [memguard](https://github.com/awnumar/memguard) - 在記憶體中處理敏感值的純 Go 函式庫。
- [mist](https://github.com/iSerganov/mist) - 非對稱金鑰音訊隱寫函式庫，使用 X25519 與 ChaCha20-Poly1305 將加密訊息隱藏在壓縮音訊中。
- [multikey](https://github.com/adrianosela/multikey) - 以 Shamir 秘密分享演算法為基礎的 N 取 n 金鑰加密/解密框架。
- [nacl](https://github.com/kevinburke/nacl) - NaCL API 集的 Go 實作。
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - 一次掃描即可從日誌行與 HTTP 傾印中移除機密，涵蓋標頭、JSON、XML、URL 編碼資料、JWT、PEM 金鑰與廠商權杖。
- [optimus-go](https://github.com/pjebs/optimus-go) - 使用 Knuth 演算法進行 ID 雜湊與混淆。
- [osv-scanner](https://github.com/google/osv-scanner) - 以 Go 撰寫、使用 OSV 所提供資料的漏洞掃描器。
- [passlib](https://github.com/hlandau/passlib) - 面向未來的密碼雜湊函式庫。
- [passwap](https://github.com/zitadel/passwap) - 為不同的密碼雜湊演算法提供統一的實作。
- [pii-shield](https://github.com/pii-shield/pii-shield) - 適用於 Kubernetes、無需撰寫程式碼的日誌清理 sidecar，可從日誌中遮蔽個人可識別資訊（PII）。
- [pm](https://github.com/nicola-strappazzon/password-manager) - 以 Go 撰寫的 Unix 風格密碼管理器，使用 OpenPGP 加密儲存你的資料。
- [procscope](https://github.com/Mutasem-mk4/procscope) - 以程序為範圍的執行期調查工具，使用 eBPF 追蹤程序生命週期、檔案活動與網路連線。
- [qrand](https://github.com/bitfield/qrand) - ANU Quantum Numbers（AQN）API 的用戶端，提供以量子力學保障安全的隨機資料。
- [Razify](https://github.com/Hossiy21/razify) - 掃描、驗證與稽核 .env 檔案中外洩機密與環境漂移的 CLI。
- [redact](https://github.com/alesr/redact) - 使用可設定的管線，從以 slog 為基礎的日誌中遮蔽敏感資訊。
- [SafeDep/vet](https://github.com/safedep/vet) - 防範惡意的開源套件。
- [secret](https://github.com/rsjethani/secret) - 防止你的機密外洩到日誌、std\* 等處。
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - 以 CSPRNG 為基礎的憑證產生器，具備版本化 JSON 結構描述，可產生密碼、密語、機密、API 金鑰與 PIN 碼。
- [secure](https://github.com/unrolled/secure) - 協助快速提升安全性的 Go HTTP 中介軟體。
- [secureio](https://github.com/xaionaro-go/secureio) - 以 XChaCha20-poly1305、ECDH 與 ED25519 為基礎，為 `io.ReadWriteCloser` 提供金鑰交換 + 身分驗證 + 加密的包裝器與多工器。
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - 具備簡單明瞭 API 並內建自動成本校準的 Scrypt 套件。
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - 使用 SSH 金鑰加密/解密。
- [sslmgr](https://github.com/adrianosela/sslmgr) - 透過 acme/autocert 的高階包裝器，讓 SSL 憑證變得簡單。
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf 是提供 teler IDS 功能的 Go HTTP 中介軟體，可防範網頁攻擊並提升以 Go 為基礎之 Web 應用程式的安全性。它高度可設定，且易於整合至既有的 Go 應用程式。
- [themis](https://github.com/cossacklabs/themis) - 高階密碼學函式庫，用於解決典型的資料安全任務（安全資料儲存、安全訊息傳遞、零知識證明驗證），提供 14 種語言版本，最適合多平台應用程式。
- [urusai](https://github.com/calpa/urusai) - Urusai（日文「吵雜」之意）是以 Go 實作的隨機 HTTP/DNS 流量雜訊產生器，在瀏覽時製造數位煙幕以協助保護隱私。
- [veil](https://github.com/getveil/veil) - 本機 HTTPS 代理，可向 AI 程式設計代理隱藏 API 憑證。整合作業系統鑰匙圈，提供能感知格式的預留位置與 SQLite 稽核日誌。
- [y509](https://github.com/kanywst/y509) - 用於 X.509 憑證鏈的 TUI，分別回報憑證鏈是否通過驗證，以及伺服器是否正確提供該憑證鏈。


**[⬆ 回到頂部](#contents)**

## 序列化

_用於二進位序列化的函式庫與工具。_

- [bambam](https://github.com/glycerine/bambam) - 從 Go 產生 Cap'n Proto 結構描述的產生器。
- [bel](https://github.com/32leaves/bel) - 從 Go 結構/介面產生 TypeScript 介面。適用於 JSON RPC。
- [binstruct](https://github.com/ghostiam/binstruct) - 將資料對映至結構的 Golang 二進位解碼器。
- [cbor](https://github.com/fxamacker/cbor) - 小巧、安全且簡單的 CBOR 編碼與解碼函式庫。
- [colfer](https://github.com/pascaldekloe/colfer) - Colfer 二進位格式的程式碼產生工具。
- [csvutil](https://github.com/jszwec/csvutil) - 高效能、符合慣用風格的 CSV 記錄與原生 Go 結構之間的編碼與解碼。
- [elastic](https://github.com/epiclabs-io/elastic) - 在執行期將 slice、map 或任何其他未知值轉換為不同型別，無論是什麼都行。
- [fixedwidth](https://github.com/huydang284/fixedwidth) - 固定寬度文字格式化（支援 UTF-8）。
- [fwencoder](https://github.com/o1egl/fwencoder) - Go 的固定寬度檔案解析器（編碼與解碼函式庫）。
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Go 的 Cap'n Proto 函式庫與解析器。
- [go-codec](https://github.com/ugorji/go) - 高效能、功能豐富且符合慣用風格的 msgpack、cbor 與 json 編碼、解碼及 RPC 函式庫，支援執行期處理或程式碼產生。
- [go-csvlib](https://github.com/tiendc/go-csvlib) - 高階且功能豐富的 CSV 序列化/反序列化函式庫。
- [goprotobuf](https://github.com/golang/protobuf) - 以函式庫與協定編譯器外掛形式，為 Google 的 Protocol Buffers 提供 Go 支援。
- [gotiny](https://github.com/raszia/gotiny) - 高效的 Go 序列化函式庫，gotiny 的速度幾乎與產生程式碼的序列化函式庫一樣快。
- [jsoniter](https://github.com/json-iterator/go) - 高效能、100% 相容、可直接替換「encoding/json」的套件。
- [mus-go](https://github.com/mus-format/mus-go) - Go 的 MUS 格式序列化器。
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - 處理 PHP 工作階段格式與 PHP Serialize/Unserialize 函式的 GoLang 函式庫。
- [pletter](https://github.com/vimeda/pletter) - 為訊息代理包裝 proto 訊息的標準方式。
- [proto](https://github.com/emicklei/proto) - Google ProtocolBuffers .proto 檔案的解析器與寫入器。
- [structomap](https://github.com/tuvistavie/structomap) - 從靜態結構輕鬆動態產生 map 的函式庫。
- [unitpacking](https://github.com/recolude/unitpacking) - 將單位向量封裝成盡可能少位元組的函式庫。

**[⬆ 回到頂部](#contents)**

## 伺服器應用程式

- [algernon](https://github.com/xyproto/algernon) - 內建支援 Lua、Markdown、GCSS 與 Amber 的 HTTP/2 網頁伺服器。
- [Caddy](https://github.com/caddyserver/caddy) - Caddy 是易於設定與使用的另類 HTTP/2 網頁伺服器。
- [Casdoor](https://github.com/casdoor/casdoor) - 具備網頁 UI 的身分與存取管理（IAM）及單一登入（SSO）伺服器，支援 OAuth 2.0、OIDC、SAML、CAS 與 LDAP。
- [consul](https://www.consul.io/) - Consul 是用於服務探索、監控與設定的工具。
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Prometheus 遠端寫入代理，會依據指標標籤加入 Cortex 租戶 ID 標頭。
- [devd](https://github.com/cortesi/devd) - 給開發者使用的本機網頁伺服器。
- [discovery](https://github.com/Bilibili/discovery) - 用於具韌性之中間層負載平衡與容錯移轉的註冊中心。
- [dudeldu](https://github.com/krotik/dudeldu) - 簡單的 SHOUTcast 伺服器。
- [Easegress](https://github.com/megaease/easegress) - 雲端原生的高可用/高效能流量編排系統，具備可觀測性與擴充性。
- [Engity's Bifröst](https://bifroest.engity.org/) - 高度可自訂的 SSH 伺服器，提供多種方式授權使用者執行其工作階段（在本機或容器中）。
- [etcd](https://github.com/etcd-io/etcd) - 用於共享設定與服務探索的高可用鍵值儲存。
- [Euterpe](https://github.com/ironsmile/euterpe) - 自架的音樂串流伺服器，內建網頁 UI 與 REST API。
- [Fider](https://github.com/getfider/fider) - Fider 是收集與整理客戶意見回饋的開放平台。
- [Flagr](https://github.com/checkr/flagr) - Flagr 是開源的功能旗標與 A/B 測試服務。
- [flipt](https://github.com/markphelps/flipt) - 以 Go 與 Vue.js 撰寫、自成一體的功能旗標解決方案。
- [flue](https://github.com/karnstack/flue) - 自架的常駐程式，可將終端機工作階段提供給瀏覽器分頁使用。關閉分頁後工作階段仍會繼續執行。
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - 簡單、完整且輕量的自架功能旗標解決方案，100% 開源。
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - 以 Go 撰寫、使用 Redis 的簡單快取反向代理。
- [gondola](https://github.com/bmf-san/gondola) - 以 YAML 為基礎的 Golang 反向代理。
- [goshs](https://github.com/patrickhener/goshs) - SimpleHTTPServer 的替代品，支援檔案上傳/下載、WebDAV、SFTP、SMB、TLS、身分驗證與分享連結。
- [Kono](https://github.com/starwalkn/kono) - 以 Go 撰寫的輕量可擴充 API 閘道：平行扇出、彈性聚合，零設定魔法。
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - 處理 HTTPS 的反向代理，可即時從 Let's Encrypt 核發憑證。
- [minio](https://github.com/pgsty/minio) - minio（物件儲存服務）的社群維護分支。
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy 是簡單的模擬與代理應用程式伺服器，你可以建立模擬端點，並在端點沒有對應模擬時代理請求。
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Nginx 日誌解析器，並可匯出至 Prometheus。
- [nsq](https://nsq.io/) - 即時分散式訊息平台。
- [OpenRun](https://github.com/openrundev/openrun) - Google Cloud Run 與 AWS App Runner 的開源替代方案。可在團隊中輕鬆部署內部工具。
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase 是一個單檔即時後端，包含具即時訂閱功能的嵌入式資料庫（SQLite）、內建身分驗證管理等諸多功能。
- [protoxy](https://github.com/camgraff/protoxy) - 將 JSON 請求本文轉換為 Protocol Buffers 的代理伺服器。
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - 將資料庫事件從 PostgreSQL 串流至 Kafka。
- [relay](https://github.com/valtors/relay) - 為 AI 代理提供 40 多種工具的 MCP 伺服器。支援檔案操作、網頁搜尋、螢幕截圖與多代理協調。單一 Go 執行檔。
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - 對 Riemann 事件進行負載平衡和/或將其轉換為 Carbon 的轉送器。
- [RoadRunner](https://github.com/spiral/roadrunner) - 高效能的 PHP 應用程式伺服器、負載平衡器與程序管理器。
- [SFTPGo](https://github.com/drakkan/sftpgo) - 功能完整且高度可設定的 SFTP 伺服器，可選擇支援 FTP/S 與 WebDAV。可提供本機檔案系統，以及 S3 與 Google Cloud Storage 等雲端儲存後端。
- [simpleconf](https://github.com/shaunlee/simpleconf) - 存放單一 JSON 文件的設定伺服器，可透過 HTTP 與 TCP 依鍵路徑讀寫，並可選用 Raft 叢集。
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTP 反向代理快取與時間序列加速器。
- [wd-41](https://github.com/baalimago/wd-41) - 網頁開發（(w)eb (d)evelopment）伺服器，檔案變更時會自動即時重新載入。
- [whois](https://github.com/KincaidYang/whois) - 自架的 WHOIS/RDAP 查詢服務與 MCP 伺服器，適用於網域、IPv4/IPv6 位址、CIDR 與 ASN。
- [Wish](https://github.com/charmbracelet/wish) - 輕輕鬆鬆打造 SSH 應用程式！

**[⬆ 回到頂部](#contents)**

## 串流處理

_用於串流處理與響應式程式設計的函式庫與工具。_

- [go-etl](https://github.com/Breeze0806/go-etl) - 用於資料來源擷取、轉換與載入（ETL）的輕量級工具組。
- [go-streams](https://github.com/reugn/go-streams) - Go 串流處理函式庫。
- [goio](https://github.com/primetalk/goio) - 受優秀 Scala 函式庫 cats 與 fs2 啟發，為 Golang 實作的 IO、Stream 與 Fiber。
- [gostream](https://github.com/mariomac/gostream) - 受 Java Streams API 啟發的型別安全串流處理函式庫。
- [machine](https://github.com/whitaker-io/machine) - 撰寫與產生串流工作者的 Go 函式庫，內建指標與可追蹤性。
- [nibbler](https://github.com/naughtygopher/nibbler) - 用於微批次處理的輕量級套件。
- [ro](https://github.com/samber/ro) - 響應式程式設計：適用於事件驅動應用程式的宣告式、可組合 API。
- [signals](https://github.com/coregx/signals) - 受 Angular Signals 啟發的型別安全響應式狀態管理，支援計算值、副作用與相依追蹤。
- [stream](https://github.com/youthlin/stream) - 類似 Java 8 Stream 的 Go Stream：Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce……
- [StreamSQL](https://github.com/rulego/streamsql) - 用於即時資料處理的輕量級串流 SQL 引擎。

**[⬆ 回到頂部](#contents)**

## 範本引擎

_用於範本與詞法分析的函式庫與工具。_

- [bagme](https://github.com/boxesandglue/bagme) - 以純 Go 將 HTML/CSS 渲染為 PDF，具備 TeX 等級的排版品質。
- [ego](https://github.com/benbjohnson/ego) - 讓你用 Go 撰寫範本的輕量級範本語言。範本會被轉譯為 Go 並進行編譯。
- [fasttemplate](https://github.com/valyala/fasttemplate) - 簡單快速的範本引擎。替換範本預留位置的速度最高可比 [text/template](https://golang.org/pkg/text/template/) 快 10 倍。
- [gomponents](https://www.gomponents.com) - 以純 Go 實作的 HTML 5 元件，看起來大致像這樣：`func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`。
- [got](https://github.com/goradd/got) - 受 Hero 與 Fasttemplate 啟發的 Go 程式碼產生器。支援引入檔案、自訂標籤定義、注入 Go 程式碼、語言翻譯等功能。
- [goview](https://github.com/foolin/goview) - Goview 是以 Golang html/template 為基礎、輕量極簡且符合慣用風格的範本函式庫，用於建構 Go Web 應用程式。
- [gox](https://github.com/doors-dev/gox) - 將 HTML 範本作為一級 Go 運算式，並提供無縫的編輯器支援。
- [htmgo](https://htmgo.dev) - 使用 Go + htmx 建構簡單且可擴展的系統。
- [jet](https://github.com/CloudyKit/jet) - Jet 範本引擎。
- [liquid](https://github.com/osteele/liquid) - Shopify Liquid 範本的 Go 實作。
- [liquidgo](https://github.com/Notifuse/liquidgo) - Shopify Liquid 範本引擎的完整 Go 實作。
- [maroto](https://github.com/johnfercher/maroto) - 以 maroto 的方式建立 PDF。Maroto 受 Bootstrap 啟發並使用 gofpdf。快速又簡單。
- [pongo2](https://github.com/flosch/pongo2) - 類似 Django 的 Go 範本引擎。
- [quicktemplate](https://github.com/valyala/quicktemplate) - 快速、強大又易於使用的範本引擎。會將範本轉換為 Go 程式碼後再編譯。
- [Razor](https://github.com/sipin/gorazor) - Golang 的 Razor 檢視引擎。
- [Soy](https://github.com/robfig/soy) - 遵循[官方規格](https://developers.google.com/closure/templates/)的 Go 版 Closure 範本（又稱 Soy 範本）。
- [sprout](https://github.com/go-sprout/sprout) - 適用於 Go 範本的實用範本函式。
- [tbd](https://github.com/lucasepe/tbd) - 以預留位置建立文字範本的超簡單方式，並額外提供內建的 Git 儲存庫中繼資料。
- [templ](https://github.com/a-h/templ) - 擁有優秀開發者工具的 HTML 範本語言。
- [templator](https://github.com/alesr/templator) - 型別安全的 Go HTML 範本渲染引擎。

**[⬆ 回到頂部](#contents)**

## 測試

_用於測試程式碼庫與產生測試資料的函式庫。_

### 測試框架

- [apitest](https://apitest.dev) - 簡單且可擴充的行為測試函式庫，適用於 REST 服務或 HTTP 處理常式，支援模擬外部 HTTP 呼叫並繪製循序圖。
- [arch-go](https://github.com/arch-go/arch-go) - Go 專案的架構測試工具。
- [assay](https://github.com/tushariitr-19/assay) - 不依賴特定框架的評估函式庫，用於測試 Go 代理與 MCP 伺服器，提供確定性檢查、適用 CI 的結束代碼，以及無需撰寫程式碼、以 YAML 為基礎的測試。
- [assert](https://github.com/go-playground/assert) - 搭配原生 Go 測試使用的基本斷言函式庫，並提供建構自訂斷言的基本元件。
- [axiom](https://github.com/Nikita-Filonov/axiom) - 可組合的 Go 測試框架，支援 fixture、掛鉤、重試、中繼資料、外掛與平行執行。
- [baloo](https://github.com/h2non/baloo) - 讓富表達力且多用途的端對端 HTTP API 測試變得簡單。
- [be](https://github.com/carlmjohnson/be) - 極簡的泛型測試斷言函式庫。
- [biff](https://github.com/fulldump/biff) - 分支測試框架，相容 BDD。
- [charlatan](https://github.com/percolate/charlatan) - 為測試產生假介面實作的工具。
- [commander](https://github.com/SimonBaeumer/commander) - 在 Windows、Linux 與 OSX 上測試 CLI 應用程式的工具。
- [coverage](https://github.com/jbunds/coverage) - Go 測試覆蓋率的簡單網頁 UI，以及可重複使用的 GitHub Action [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report)。
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - 為你的測試框架提供簡單快照測試的附加元件。
- [dbcleaner](https://github.com/khaiql/dbcleaner) - 為測試目的清理資料庫，靈感來自 Ruby 的 `database_cleaner`。
- [dft](https://github.com/abecodes/dft) - 輕量、零相依、用於測試（或其他用途）的 Docker 容器。
- [dsunit](https://github.com/viant/dsunit) - 適用於 SQL、NoSQL 與結構化檔案的資料儲存測試。
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - 在 Linux、OSX 或 Windows 本機上執行真正的 Postgres 資料庫，作為其他 Go 應用程式或測試的一部分。
- [endly](https://github.com/viant/endly) - 宣告式端對端功能測試。
- [envite](https://github.com/PerimeterX/envite) - 開發與測試環境管理框架。
- [fixenv](https://github.com/rekby/fixenv) - 受 pytest fixtures 啟發的 fixture 管理引擎。
- [flute](https://github.com/suzuki-shunsuke/flute) - HTTP 用戶端測試框架。
- [frisby](https://github.com/verdverm/frisby) - REST API 測試框架。
- [gherkingen](https://github.com/hedhyw/gherkingen) - BDD 樣板產生器與框架。
- [ginkgo](https://onsi.github.io/ginkgo/) - Go 的 BDD 測試框架。
- [gnomock](https://github.com/orlangure/gnomock) - 使用在 Docker 中執行的真實相依項（資料庫、快取，甚至 Kubernetes 或 AWS）進行整合測試，無需模擬。
- [go-carpet](https://github.com/msoap/go-carpet) - 在終端機中檢視測試覆蓋率的工具。
- [go-cmp](https://github.com/google/go-cmp) - 在測試中比較 Go 值的套件。
- [go-hit](https://github.com/Eun/go-hit) - Hit 是以 Golang 撰寫的 HTTP 整合測試框架。
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - HTTP 測試與除錯工具，提供多種用於測試用戶端的端點。
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - Go 的變異測試工具，支援 CI 品質關卡、考量覆蓋率的 MSI、基準追蹤與 git-diff 篩選。
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - 協助進行 MySQL 整合測試的 Golang MySQL testcontainer。
- [go-snaps](http://github.com/gkampitakis/go-snaps) - 以 Golang 實作、類似 Jest 的快照測試。
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - 回報覆蓋率低於設定門檻之檔案的工具。
- [go-testdeep](https://github.com/maxatome/go-testdeep) - 極具彈性的 Golang 深度比較工具，擴充 Go testing 套件。
- [go-testing](https://github.com/tkrop/go-testing) - Go 測試擴充，可簡單設定高度隔離的單元、元件與整合測試，並擴充 gomock 與 gock 提供進階模擬支援。
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - 測試述詞風格的斷言函式庫，提供詳盡的診斷輸出。
- [go-vcr](https://github.com/dnaeon/go-vcr) - 錄製並重播 HTTP 互動，實現快速、確定且準確的測試。
- [goblin](https://github.com/franela/goblin) - 類似 Mocha 的 Go 測試框架。
- [goc](https://github.com/qiniu/goc) - Goc 是 Go 程式語言的全面覆蓋率測試系統。
- [gocheck](https://labix.org/gocheck) - 比 gotest 更進階的替代測試框架。
- [GoConvey](https://github.com/smartystreets/goconvey/) - BDD 風格的框架，具備網頁 UI 與即時重新載入。
- [gocrest](https://github.com/corbym/gocrest) - 用於 Go 斷言、可組合的類 hamcrest 比對器。
- [godog](https://github.com/cucumber/godog) - Go 的 Cucumber BDD 框架。
- [gofight](https://github.com/appleboy/gofight) - 適用於 Golang 路由框架的 API 處理常式測試。
- [gogiven](https://github.com/corbym/gogiven) - 類似 YATSPEC 的 Go BDD 測試框架。
- [gomatch](https://github.com/jfilipczyk/gomatch) - 用於依模式測試 JSON 的函式庫。
- [gomega](https://onsi.github.io/gomega/) - 類似 Rspec 的比對器/斷言函式庫。
- [gospecify](https://github.com/stesla/gospecify) - 為測試 Go 程式碼提供 BDD 語法。用過 rspec 等函式庫的人應該都會覺得很熟悉。
- [gosuite](https://github.com/pavlo/gosuite) - 利用 Go1.7 的子測試（Subtests），為 `testing` 帶來具備 setup/teardown 功能的輕量級測試套組。
- [got](https://github.com/ysmood/got) - 令人愉快的 Golang 測試框架。
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - 一組增強 Go testing 套件並支援常見模式的套件。
- [Hamcrest](https://github.com/rdrdr/hamcrest) - 宣告式 Matcher 物件的流暢框架，套用到輸入值時會產生自我描述的結果。
- [httper](https://github.com/gustofarbi/httper) - JetBrains .http 檔案的 CLI 執行器，支援腳本、斷言、gRPC 與負載測試。
- [httpexpect](https://github.com/gavv/httpexpect) - 簡潔、宣告式且易於使用的端對端 HTTP 與 REST API 測試。
- [is](https://github.com/matryer/is) - 專業的輕量級 Go 迷你測試框架。
- [jsonassert](https://github.com/kinbiko/jsonassert) - 驗證 JSON 酬載是否正確序列化的套件。
- [keploy](https://github.com/keploy/keploy) - 從 API 呼叫自動產生測試案例與資料模擬。
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - 為測試而變更私有欄位值的簡單函式庫。
- [restit](https://github.com/yookoala/restit) - 協助撰寫 RESTful API 整合測試的 Go 微框架。
- [schema](https://github.com/jgroeneveld/schema) - 針對請求與回應中使用之 JSON 結構描述的快速簡易運算式比對。
- [should](https://github.com/Kairum-Labs/should) - 零相依的測試函式庫，提供詳細的結構差異與人類易讀的錯誤訊息。
- [stop-and-go](https://github.com/elgohr/stop-and-go) - 並行測試輔助工具。
- [testcase](https://github.com/adamluzsi/testcase) - 符合慣用風格的行為驅動開發（BDD）測試框架。
- [testcerts](https://github.com/madflojo/testcerts) - 在測試函式中動態產生自簽憑證與憑證授權單位。
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - 讓自動化整合/冒煙測試能簡單建立與清理容器型相依項的 Go 套件。簡潔易用的 API 讓開發者能以程式方式定義測試中要執行的容器，並在測試完成後清理這些資源。
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - 類似 Rails 測試 fixtures 的輔助工具，用於測試資料庫應用程式。
- [Testify](https://github.com/stretchr/testify) - 標準 Go testing 套件的神聖擴充。
- [Testo](https://github.com/ozontech/testo) - 以外掛為基礎的測試框架，支援測試套組、平行測試、掛鉤與參數化。靈感來自 Pytest。
- [testsql](https://github.com/zhulongcheng/testsql) - 測試前從 SQL 檔案產生測試資料，並在完成後清除。
- [testza](https://github.com/MarvinJWendt/testza) - 功能完整的測試框架，具備美觀的彩色輸出。
- [tparse](https://github.com/mfridman/tparse) - 彙整 go test 輸出的 CLI 工具。適合搭配管線使用，並相容 go test 旗標。
- [trial](https://github.com/jgroeneveld/trial) - 快速簡單、可擴充的斷言，不會引入太多樣板程式碼。
- [Tt](https://github.com/vcaesar/tt) - 簡單又多彩的測試工具。
- [wstest](https://github.com/posener/wstest) - 用於對 WebSocket http.Handler 進行單元測試的 WebSocket 用戶端。

### 模擬物件

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - 產生自成一體之模擬物件的工具。
- [fabricator](https://github.com/Goldziher/fabricator) - 受 factory_boy 與 interface-forge 啟發，在 Go 中產生模擬與假資料的型別安全工廠。
- [genmock](https://gitlab.com/so_literate/genmock) - Go 模擬系統，具備用於建構介面方法呼叫的程式碼產生器。
- [go-localstack](https://github.com/elgohr/go-localstack) - 在 AWS 測試中使用 localstack 的工具。
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - 用於測試資料庫互動的模擬 SQL 驅動程式。
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - 以單一交易為基礎的資料庫驅動程式，主要供測試使用。
- [gomock](https://github.com/uber-go/mock) - Go 程式語言的模擬框架。
- [gomock](https://github.com/vibridi/gomock) - 產生具型別、不依賴特定框架之介面模擬的 CLI 工具，支援泛型。
- [govcr](https://github.com/seborama/govcr) - Golang 的 HTTP 模擬工具：錄製並重播 HTTP 互動以進行離線測試。
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - 用於錄製與模擬 REST/SOAP API 的 HTTP(S) 代理，具備可擴充的中介軟體與易用的 CLI。
- [httpmock](https://github.com/jarcoal/httpmock) - 輕鬆模擬來自外部資源的 HTTP 回應。
- [minimock](https://github.com/gojuno/minimock) - Go 介面的模擬產生器。
- [mockery](https://github.com/vektra/mockery) - 產生 Go 介面的工具。
- [mockfs](https://github.com/balinomad/go-mockfs) - 以 `testing/fstest.MapFS` 為基礎、用於 Go 測試的模擬檔案系統，支援錯誤注入與延遲模擬。
- [mockhttp](https://github.com/tv42/mockhttp) - Go http.ResponseWriter 的模擬物件。
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - 為多種用途產生模擬物件的簡單方式。
- [moq](https://github.com/matryer/moq) - 從任何介面產生結構的工具。該結構可在測試程式碼中作為介面的模擬使用。
- [moxie](https://lesiw.io/moxie) - 在內嵌結構上產生模擬方法。
- [pgxmock](https://github.com/pashagolub/pgxmock) - 實作 [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/) 的模擬函式庫。
- [timex](https://github.com/cabify/timex) - 原生 `time` 套件的測試友善替代品。
- [wsmock](https://github.com/sing198/wsmock) - 富表達力、零樣板程式碼的測試用 WebSocket 模擬伺服器，支援故障注入與斷言。
- [xgo](https://github.com/xhd2015/xgo) - 通用的函式模擬函式庫。

### 模糊測試與差異除錯/縮減/精簡

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - 隨機化測試系統。
- [Tavor](https://github.com/zimmski/tavor) - 通用的模糊測試與差異除錯框架。

### Selenium 與瀏覽器控制工具

- [bonk](https://github.com/joakimcarlsson/bonk) - 快速、以隱匿為優先的瀏覽器自動化函式庫，透過 WebSocket 使用 Chrome DevTools Protocol，無外部相依套件。
- [cdp](https://github.com/mafredri/cdp) - Chrome Debugging Protocol 的型別安全繫結，可用於實作該協定的瀏覽器或其他除錯目標。
- [chromedp](https://github.com/knq/chromedp) - 驅動/測試 Chrome、Safari、Edge、Android Webview 及其他支援 Chrome Debugging Protocol 之瀏覽器的方式。
- [playwright-go](https://github.com/mxschmitt/playwright-go) - 以單一 API 控制 Chromium、Firefox 與 WebKit 的瀏覽器自動化函式庫。
- [rod](https://github.com/go-rod/rod) - 讓網頁自動化與爬取變得簡單的 Devtools 驅動程式。
- [selenosis](https://github.com/alcounit/selenosis) - 無狀態的 Kubernetes 原生中樞，透過自訂資源將 Selenium、Playwright 與 MCP 工作階段路由至隨需建立的瀏覽器 Pod。

### 故障注入

- [failpoint](https://github.com/pingcap/failpoint) - [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) 的 Golang 實作。

**[⬆ 回到頂部](#contents)**

## 文字處理

_用於解析與處理文字的函式庫。_

另請參閱[自然語言處理](#natural-language-processing)與[文字分析](#text-analysis)。

### 格式化工具

- [address](https://github.com/bojanz/address) - 處理地址的表示、驗證與格式化。
- [align](https://github.com/Guitarbum722/align) - 對齊文字的通用應用程式。
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - 格式化與解析位元組數值（10K、2M、3G 等）。
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - 固定寬度文字格式化（使用反射的編碼器/解碼器）。
- [go-humanize](https://github.com/dustin/go-humanize) - 將時間、數字與記憶體大小格式化為人類易讀格式的工具。
- [gotabulate](https://github.com/bndr/gotabulate) - 使用 Go 輕鬆美化輸出表格資料。
- [sq](https://github.com/neilotoole/sq) - 將 SQL 資料庫或 CSV、Excel 等文件格式的資料轉換為 JSON、Excel、CSV、HTML、Markdown、XML 與 YAML 等格式。
- [textwrap](https://github.com/isbm/textwrap) - 在行尾自動換行文字。Python `textwrap` 模組的實作。

### 標記語言

- [bafi](https://github.com/mmalcek/bafi) - 使用範本將 JSON、BSON、YAML、XML 轉換為任何格式的通用轉換器。
- [bbConvert](https://github.com/CalebQ42/bbConvert) - 將 bbCode 轉換為 HTML，並可加入自訂 bbCode 標籤支援。
- [blackfriday](https://github.com/russross/blackfriday) - 以 Go 撰寫的 Markdown 處理器。
- [go-output-format](https://github.com/drewstinnett/go-output-format) - 在命令列應用程式中將 Go 結構輸出為多種格式（YAML/JSON 等）。
- [go-toml](https://github.com/pelletier/go-toml) - TOML 格式的 Go 函式庫，支援查詢並附有便利的 CLI 工具。
- [goldmark](https://github.com/yuin/goldmark) - 以 Go 撰寫的 Markdown 解析器。易於擴充、符合標準（CommonMark）且結構良好。
- [goq](https://github.com/andrewstuart/goq) - 使用結構標籤搭配 jQuery 語法，以宣告方式反序列化 HTML（使用 GoQuery）。
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - 將 HTML 轉換為 Markdown。甚至適用於整個網站，並可透過規則擴充。
- [htmlquery](https://github.com/antchfx/htmlquery) - HTML 的 XPath 查詢套件，可透過 XPath 運算式從 HTML 文件擷取資料或進行求值。
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - 在 Go 中將 YAML 豐富地渲染為 HTML。
- [htree](https://github.com/bobg/htree) - 走訪、瀏覽、篩選及以其他方式處理 [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node) 物件樹。
- [markdown](https://github.com/nao1215/markdown) - 透過方法鏈產生 GitHub Flavored Markdown 與 mermaid 圖表的 Markdown 建構器。
- [mdsmith](https://github.com/jeduden/mdsmith) - 快速且可自動修正的 Markdown 程式碼檢查與格式化工具。檢查風格、可讀性、結構與跨檔案完整性。
- [mxj](https://github.com/clbanning/mxj) - 將 XML 編碼/解碼為 JSON 或 map[string]interface{}；可使用點記法路徑與萬用字元擷取值。取代 x2j 與 j2x 套件。
- [picoloom](https://github.com/alnah/picoloom) - Markdown 轉 PDF 轉換器，提供 CLI 與 Go 函式庫 API。
- [toml](https://github.com/BurntSushi/toml) - TOML 設定格式（使用反射的編碼器/解碼器）。

### 解析器/編碼器/解碼器

- [allot](https://github.com/sbstjn/allot) - 適用於 CLI 工具與機器人的預留位置與萬用字元文字解析。
- [codetree](https://github.com/aerogo/codetree) - 解析縮排式程式碼（python、pixy、scarlet 等）並回傳樹狀結構。
- [commonregex](https://github.com/mingrammer/commonregex) - Go 的常用正規表示式集合。
- [did](https://github.com/ockam-network/did) - 以 Go 撰寫的 DID（去中心化識別碼）解析器與字串化工具。
- [doi](https://github.com/hscells/doi) - 以 Go 撰寫的數位物件識別碼（DOI）解析器。
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Go 的 Editorconfig 檔案解析與操作工具。
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - 高效能的有效頂級網域（eTLD）擷取模組。
- [go-nmea](https://github.com/adrianmo/go-nmea) - Go 語言的 NMEA 解析函式庫。
- [go-querystring](https://github.com/google/go-querystring) - 將結構編碼為 URL 查詢參數的 Go 函式庫。
- [go-vcard](https://github.com/emersion/go-vcard) - 解析與格式化 vCard。
- [godump](https://github.com/yassinebenaid/godump) - 輕鬆美化輸出任何 Go 變數，可替代 Go 的 `fmt.Printf("%#v")`。
- [godump (goforj)](https://github.com/goforj/godump) - 以 Laravel/Symfony 風格的傾印美化輸出 Go 結構，提供完整型別資訊、彩色 CLI 輸出、循環偵測與私有欄位存取。
- [gofeed](https://github.com/mmcdole/gofeed) - 在 Go 中解析 RSS 與 Atom 摘要。
- [gographviz](https://github.com/awalterschulze/gographviz) - 解析 Graphviz DOT 語言。
- [gonameparts](https://github.com/polera/gonameparts) - 將人名解析為個別的姓名組成部分。
- [ltsv](https://github.com/Wing924/ltsv) - 高效能的 Go [LTSV (Labeled Tab Separated Value)](http://ltsv.org/) 讀取器。
- [normalize](https://github.com/avito-tech/normalize) - 清理、正規化與比較模糊文字。
- [parseargs-go](https://github.com/nproc/parseargs-go) - 能理解引號與反斜線的字串參數解析器。
- [prattle](https://github.com/askeladdk/prattle) - 簡單高效地掃描與解析 LL(1) 文法。
- [sh](https://github.com/mvdan/sh) - Shell 解析器與格式化工具。
- [tokenizer](https://github.com/bzick/tokenizer) - 將任何字串、slice 或無限緩衝區解析為任意 token。
- [vdf](https://github.com/andygrunwald/vdf) - 以 Go 撰寫的 Valve 資料格式（即 vdf）詞法分析器與解析器。
- [when](https://github.com/olebedev/when) - 支援可插拔規則的英文與俄文自然語言日期/時間解析器。
- [xj2go](https://github.com/stackerzzq/xj2go) - 將 XML 或 JSON 轉換為 Go 結構。

### 正規表示式

- [coregex](https://github.com/coregx/coregex) - 採用 Rust regex crate 架構、可用於正式環境的正規表示式引擎：多引擎 DFA/NFA、SIMD 預篩選器，可直接替換標準函式庫。
- [genex](https://github.com/alixaxel/genex) - 計算正規表示式並展開為所有符合的字串。
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - 簡單輕量的萬用字元模式比對。
- [goregen](https://github.com/zach-klippenstein/goregen) - 從正規表示式產生隨機字串的函式庫。
- [regroup](https://github.com/oriser/regroup) - 使用結構標籤與自動解析，將正規表示式的具名群組對應至 Go 結構。
- [rex](https://github.com/hedhyw/rex) - 正規表示式建構器。

### 清理淨化

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTML 清理工具。
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - 以清理為基礎的 Go 髒話過濾器。

### 網頁爬蟲

- [colly](https://github.com/asciimoo/colly) - 給 Gopher 使用、快速而優雅的爬蟲框架。
- [dataflowkit](https://github.com/slotix/dataflowkit) - 將網站轉換為結構化資料的網頁爬取框架。
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - 將文件網站轉換為乾淨 Markdown 與 JSONL 的網頁爬蟲，供 LLM 匯入使用（RAG、訓練資料）。
- [go-recipe](https://github.com/kkyr/go-recipe) - 從網站擷取食譜的套件。
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - 解析 Sitemap 的 Go 語言函式庫。
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery 為 Go 語言帶來類似 jQuery 的語法與一組功能。
- [pagser](https://github.com/foolin/pagser) - Pagser 是以 goquery 與結構標籤為基礎、簡單、可擴充且可設定的工具，可為 Golang 爬蟲將 HTML 頁面解析並反序列化為結構。
- [Tagify](https://github.com/zoomio/tagify) - 從指定來源產生一組標籤。
- [walker](https://github.com/cyucelen/walker) - 從任何來源無縫擷取分頁資料。內含簡單且高效能的 API 爬取功能。
- [xurls](https://github.com/mvdan/xurls) - 從文字中擷取 URL。

### RSS

- [podcast](https://github.com/eduncan911/podcast) - 以 Golang 撰寫、符合 iTunes 規範的 RSS 2.0 Podcast 產生器。

### 工具/其他

- [ahocorasick](https://github.com/coregx/ahocorasick) - 高效能的 Aho-Corasick 多模式字串比對，具備 DFA 編譯與 SIMD 預篩選，吞吐量最高可達 7 GB/s（屬於 [coregx](https://github.com/coregx) 生態系）。
- [go-runewidth](https://github.com/mattn/go-runewidth) - 取得字元或字串固定寬度的函式。
- [kace](https://github.com/codemodus/kace) - 涵蓋常見縮寫詞的常用大小寫轉換。
- [lancet](https://github.com/duke-git/lancet) - 全面、類似 Lodash 的 Go 工具函式庫。
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich 是將俄文姓名變格為指定語法格的函式庫。
- [radix](https://github.com/yourbasic/radix) - 快速的字串排序演算法。
- [TySug](https://github.com/Dynom/TySug) - 依據鍵盤配置提供替代建議。
- [uniwidth](https://github.com/unilibs/uniwidth) - 高效能的 Unicode 字元寬度計算，具備 SWAR 最佳化、O(1) 查詢表，並支援 ZWJ 表情符號。
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - 使用詞嵌入尋找語意相近結果的語意 grep 工具。例如搜尋「death」會找到「dead」、「killing」、「murder」。

**[⬆ 回到頂部](#contents)**

## 第三方 API

_用於存取第三方 API 的函式庫。_

- [airtable](https://github.com/mehanizm/airtable) - [Airtable API](https://airtable.com/api) 的 Go 用戶端函式庫。
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Twitter 1.1 API 的 Go 用戶端函式庫。
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - AppStore Connect API 的非官方 Golang SDK。
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html) 的非官方 Go SDK 實作。
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Go 程式語言的官方 AWS SDK。
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Birdeye DeFi API 的 Go 用戶端，提供具型別的現貨價格、OHLCV K 線、歷史資料，以及可直接發送原始請求的備用途徑。
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - 以高吞吐量將資料寫入 [Google BigQuery](https://cloud.google.com/bigquery) 的高階 Go 函式庫。
- [brewerydb](https://github.com/naegelejd/brewerydb) - 存取 BreweryDB API 的 Go 函式庫。
- [cachet](https://github.com/andygrunwald/cachet) - [Cachet（開源狀態頁面系統）](https://cachethq.io/)的 Go 用戶端函式庫。
- [circleci](https://github.com/jszwedko/go-circleci) - 與 CircleCI API 互動的 Go 用戶端函式庫。
- [codeship-go](https://github.com/codeship/codeship-go) - 與 Codeship API v2 互動的 Go 用戶端函式庫。
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Coinglass API v4 的 Go 用戶端，零相依，支援 WebSocket 串流，並為期貨、現貨、選擇權、ETF 與指標提供具型別的端點。
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - 與 Coinpaprika API 互動的 Go 用戶端函式庫。
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - [The Colony](https://thecolony.cc) 的 Go 用戶端函式庫；The Colony 是一個使用者皆為 AI 代理的公開社群網路。
- [device-check-go](https://github.com/rinchsan/device-check-go) - 與 [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1 互動的 Go 用戶端函式庫。
- [discordgo](https://github.com/bwmarrin/discordgo) - Discord Chat API 的 Go 繫結。
- [disgo](https://github.com/switchupcb/disgo) - Discord API 的 Go API 包裝器。
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Dusupay 金流閘道 API 的非官方 Go 用戶端。
- [ethrpc](https://github.com/onrik/ethrpc) - 以太坊 JSON RPC API 的 Go 繫結。
- [facebook](https://github.com/huandu/facebook) - 支援 Facebook Graph API 的 Go 函式庫。
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Fasapay 金流閘道 XML API 的非官方 Golang 用戶端。
- [fcm](https://github.com/maddevsio/fcm) - Firebase Cloud Messaging 的 Go 函式庫。
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - [Featureflip](https://featureflip.io/) 功能旗標的 Go SDK，支援本機評估與串流更新。
- [gads](https://github.com/emiddleton/gads) - Google Adwords 非官方 API。
- [gcm](https://github.com/Aorioli/gcm) - Google Cloud Messaging 的 Go 函式庫。
- [geo-golang](https://github.com/codingsince1985/geo-golang) - 存取 [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro)、[MapQuest](https://developer.mapquest.com/documentation/api/geocoding/)、[Nominatim](https://nominatim.org/release-docs/latest/api/Overview/)、[OpenCage](https://opencagedata.com/api)、[Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx)、[Mapbox](https://www.mapbox.com/developers/api/geocoding/) 與 [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim) 地理編碼/反向地理編碼 API 的 Go 函式庫。
- [github](https://github.com/google/go-github) - 存取 GitHub REST API v3 的 Go 函式庫。
- [githubql](https://github.com/shurcooL/githubql) - 存取 GitHub GraphQL API v4 的 Go 函式庫。
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - 存取 [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) 服務（Jira、Jira Service Management、Jira Agile、Confluence、Admin Cloud）的 Go 函式庫。
- [go-aws-news](https://github.com/circa10a/go-aws-news) - 擷取 AWS 最新消息的 Go 應用程式與函式庫。
- [go-chronos](https://github.com/axelspringer/go-chronos) - 與 [Chronos](https://mesos.github.io/chronos/) 作業排程器互動的 Go 函式庫。
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - [Gerrit Code Review](https://www.gerritcodereview.com/) 的 Go 用戶端函式庫。
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - HackerNews API 的小型 Go 用戶端。
- [go-here](https://github.com/abdullahselek/go-here) - 圍繞 HERE 定位 API 打造的 Go 用戶端函式庫。
- [go-hibp](https://github.com/wneessen/go-hibp) - 「Have I Been Pwned」API 的簡單 Go 繫結。
- [go-imgur](https://github.com/koffeinsource/go-imgur) - [imgur](https://imgur.com) 的 Go 用戶端函式庫。
- [go-jira](https://github.com/andygrunwald/go-jira) - [Atlassian JIRA](https://www.atlassian.com/software/jira) 的 Go 用戶端函式庫。
- [go-lark](https://github.com/go-lark/lark) - [Feishu](https://open.feishu.cn/) 與 [Lark](https://open.larksuite.com/) 開放平台的易用非官方 SDK。
- [go-marathon](https://github.com/gambol99/go-marathon) - 與 Mesosphere Marathon PAAS 互動的 Go 函式庫。
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - 存取 [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2) 的 Go 用戶端函式庫。
- [go-openai](https://github.com/sashabaranov/go-openai) - Go 的 OpenAI ChatGPT、DALL·E、Whisper API 函式庫。
- [go-openproject](https://github.com/manuelbcd/go-openproject) - 與 [OpenProject](https://docs.openproject.org/api/) API 互動的 Go 用戶端函式庫。
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - 處理 [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) 的 Go 模組（相容 Insomnia）。
- [go-redoc](https://github.com/mvrilo/go-redoc) - 使用 [ReDoc](https://redocly.com/) 的 Go 嵌入式 OpenAPI/Swagger 文件 UI。
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - [REST Countries API](https://countrylayer.com/) 的 Go 函式庫。
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - 與 [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm) 互動的 Go 用戶端函式庫。
- [go-sophos](https://github.com/esurdam/go-sophos) - [Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) 的零相依 Go 用戶端函式庫。
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - 內含預先編譯之 [Swagger UI](https://swagger.io/tools/swagger-ui/) 的 Go 函式庫，用於提供 Swagger JSON。
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Telegraph 發布平台的 API 用戶端。
- [go-trending](https://github.com/andygrunwald/go-trending) - 存取 Github 上[熱門儲存庫](https://github.com/trending)與[開發者](https://github.com/trending/developers)的 Go 函式庫。
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - [Unsplash.com](https://unsplash.com) API 的 Go 用戶端函式庫。
- [go-xkcd](https://github.com/nishanths/go-xkcd) - xkcd API 的 Go 用戶端。
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Yapla v2.0 API 的 Go 用戶端函式庫。
- [goagi](https://github.com/staskobzar/goagi) - 建構 Asterisk PBX agi/fastagi 應用程式的 Go 函式庫。
- [goami2](https://github.com/staskobzar/goami2) - Asterisk PBX 的 AMI v2 函式庫。
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - 在 Google Sheets 之上提供常用且簡單之資料庫抽象層的 Golang 函式庫。
- [gogtrends](https://github.com/groovili/gogtrends) - Google Trends 非官方 API。
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - The Movie Database API v3 的 Golang 包裝器。
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics 是從 Wikia 網站擷取歌詞資料的 Go 函式庫。
- [gomalshare](https://github.com/MonaxGT/gomalshare) - MalShare API 的 Go 函式庫 [malshare.com](https://www.malshare.com/)。
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Go 的 MusicBrainz WS2 用戶端函式庫。
- [google](https://github.com/google/google-api-go-client) - 為 Go 自動產生的 Google API。
- [google-analytics](https://github.com/chonthu/go-google-analytics) - 讓 Google Analytics 報表更容易使用的簡單包裝器。
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Google Cloud API 的 Go 用戶端函式庫。
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/) 的 Go 用戶端函式庫。
- [gopensky](https://github.com/navidys/gopensky) - [OpenSKY Network](https://opensky-network.org/) 即時 API 的 Go 用戶端實作（空域 ADS-B 與 Mode S 資料）。
- [gosip](https://github.com/koltyakov/gosip) - SharePoint 的用戶端函式庫。
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm 是實作所需通訊協定的 Go 函式庫，讓你能用 Go 撰寫與 Storm shell 通訊的 Storm spout 與 Bolt。
- [hipchat](https://github.com/andybons/hipchat) - 此專案實作了 Hipchat API 的 Golang 用戶端函式庫。
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - 透過 XMPP 與 HipChat 通訊的 Golang 套件。
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - httpSMS API 的 Go 用戶端。
- [igdb](https://github.com/Henry-Sarabia/igdb) - [Internet Game Database API](https://api.igdb.com/) 的 Go 用戶端。
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - IP2Location.io API 的 Go 包裝器 [IP2Location.io](https://www.ip2location.io/)。
- [jokeapi-go](https://github.com/icelain/jokeapi) - [JokeAPI](https://sv443.net/jokeapi/v2/) 的 Go 用戶端。
- [lark](https://github.com/chyroc/lark) - [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/) 開放 API 的 Go SDK，支援所有開放 API 與事件回呼。
- [lastpass-go](https://github.com/ansd/lastpass-go) - [LastPass](https://www.lastpass.com/) API 的 Go 用戶端函式庫。
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Lemon Squeezy API 的 Go 用戶端。
- [libgoffi](https://github.com/clevabit/libgoffi) - 用於原生 [libffi](https://sourceware.org/libffi/) 整合的函式庫轉接工具箱。
- [libopenapi](https://github.com/pb33f/libopenapi) - 解析、驗證與處理 OpenAPI、Swagger、Overlays 與 Arazzo 規格。
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Manus AI API v2 的 Go 用戶端，支援任務自動化、檔案管理、Webhook 與型別安全的模型。
- [Medium](https://github.com/Medium/medium-sdk-go) - Medium OAuth2 API 的 Golang SDK。
- [megos](https://github.com/andygrunwald/megos) - 存取 [Apache Mesos](https://mesos.apache.org/) 叢集的用戶端函式庫。
- [minio-go](https://github.com/minio/minio-go) - 適用於 Amazon S3 相容雲端儲存的 Minio Go 函式庫。
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel 是從 Go 應用程式追蹤事件並向 Mixpanel 傳送使用者檔案更新的函式庫。
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Nansen AI API 的 Go 用戶端，提供聰明錢（Smart Money）分析、代幣篩選器與分析器，且零相依。
- [newsapi-go](https://github.com/jellydator/newsapi-go) - [NewsAPI](https://newsapi.org/) 的 Go 用戶端。
- [openaigo](https://github.com/otiai10/openaigo) - Go 的 OpenAI GPT3/GPT3.5 ChatGPT API 用戶端函式庫。
- [patreon-go](https://github.com/mxpv/patreon-go) - Patreon API 的 Go 函式庫。
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - PayPal 付款 API 的包裝器。
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Playlyfe REST API 的 Go SDK。
- [pushover](https://github.com/gregdel/pushover) - Pushover API 的 Go 包裝器。
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - [RAWG Video Games Database](https://rawg.io/) API 的 Go 函式庫。
- [shopify](https://github.com/rapito/go-shopify) - 向 Shopify API 發送 CRUD 請求的 Go 函式庫。
- [simples3](https://github.com/rhnvrm/simples3) - 以 Go 撰寫、使用 REST 與 V4 簽章的簡單精簡 AWS S3 函式庫。
- [slack](https://github.com/slack-go/slack) - 以 Go 實作的 Slack API。
- [smite](https://github.com/sergiotapia/smitego) - 包裝 Smite 遊戲 API 存取的 Go 套件。
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - SonarQube Web API 的 Go 用戶端函式庫與命令列用戶端。
- [spec](https://github.com/oaswrap/spec) - 輕量級 OpenAPI 3.x 建構器，支援靜態產生，以及 chi、echo、gin、fiber、mux 等熱門框架。
- [spotify](https://github.com/rapito/go-spotify) - 存取 Spotify Web API 的 Go 函式庫。
- [steam](https://github.com/sostronk/go-steam) - 與 Steam 遊戲伺服器互動的 Go 函式庫。
- [stripe](https://github.com/stripe/stripe-go) - Stripe API 的 Go 用戶端。
- [swag](https://github.com/zc2638/swag) - 無需註解，用於建立 Swagger 2.0 相容 API 的簡單 Go 包裝器。支援大多數路由框架，例如內建路由、gin、chi、mux、echo、httprouter、fasthttp 等。
- [textbelt](https://github.com/dietsche/textbelt) - textbelt.com 簡訊 API 的 Go 用戶端。
- [threads-go](https://github.com/tirthpatell/threads-go) - Meta Threads API 的 Go 用戶端函式庫，支援 OAuth 2.0、速率限制與型別安全的錯誤處理。
- [Trello](https://github.com/adlio/trello) - Trello API 的 Go 包裝器。
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - TripAdvisor API 的 Go 包裝器。
- [tumblr](https://github.com/mattcunningham/gumblr) - Tumblr v2 API 的 Go 包裝器。
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Uptime Robot v2 API 的 Go 包裝器與命令列用戶端。
- [vl-go](https://github.com/verifid/vl-go) - 圍繞 VerifID 身分驗證層 API 打造的 Go 用戶端函式庫。
- [webhooks](https://github.com/go-playground/webhooks) - GitHub 與 Bitbucket 的 Webhook 接收器。
- [wit-go](https://github.com/wit-ai/wit-go) - wit.ai HTTP API 的 Go 用戶端。
- [ynab](https://github.com/brunomvsouza/ynab.go) - YNAB API 的 Go 包裝器。
- [zooz](https://github.com/gojuno/go-zooz) - Zooz API 的 Go 用戶端。

**[⬆ 回到頂部](#contents)**

## 實用工具

_讓生活更輕鬆的通用公用程式與工具。_

- [abstract](https://github.com/maxbolgarin/abstract) - 消除商業邏輯中樣板程式碼的抽象層與工具。
- [apm](https://github.com/topfreegames/apm) - 具備 HTTP API 的 Golang 應用程式程序管理器。
- [backscanner](https://github.com/icza/backscanner) - 類似 bufio.Scanner 的掃描器，但會從指定位置開始反向讀取並回傳各行。
- [bed](https://github.com/itchyny/bed) - 以 Go 撰寫、類似 Vim 的二進位編輯器。
- [blank](https://github.com/Henry-Sarabia/blank) - 驗證或移除字串中的空白與空白字元。
- [bleep](https://github.com/sinhashubham95/bleep) - 在 Go 中針對任意一組作業系統訊號執行任意數量的動作。
- [boilr](https://github.com/tmrts/boilr) - 從樣板範本建立專案的極速 CLI 工具。
- [boring](https://github.com/alebeck/boring) - 簡單的命令列 SSH 通道管理器。
- [changie](https://github.com/miniscruff/changie) - 用於準備發布版本的自動化變更日誌工具，具備大量自訂選項。
- [chyle](https://github.com/antham/chyle) - 使用 Git 儲存庫的變更日誌產生器，提供多種設定方式。
- [circuit](https://github.com/cep21/circuit) - 斷路器模式的高效且功能完整、類似 Hystrix 的 Go 實作。
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - 以 Go 實作的斷路器。
- [clipboard](https://github.com/golang-design/clipboard) - 📋 以 Go 撰寫的跨平台剪貼簿套件。
- [clockwork](https://github.com/jonboulle/clockwork) - 簡單的 Golang 假時鐘。
- [cmd](https://github.com/SimonBaeumer/cmd) - 在 OSX、Windows 與 Linux 上執行 shell 指令的函式庫。
- [config-file-validator](https://github.com/Boeing/config-file-validator) - 驗證設定檔的跨平台工具。
- [contem](https://github.com/maxbolgarin/contem) - 可直接替換 context.Context、用於優雅關閉 Go 應用程式的工具。
- [cookie](https://github.com/syntaqx/cookie) - Cookie 結構解析與輔助套件。
- [copy-pasta](https://github.com/jutkko/copy-pasta) - 通用的多工作站剪貼簿，使用類似 S3 的後端進行儲存。
- [countries](https://github.com/biter777/countries) - 完整實作 ISO-3166-1、ISO-4217、ITU-T E.164、Unicode CLDR 與 IANA ccTLD 標準。
- [countries](https://github.com/pioz/countries) - 在 Go 中處理國家資料時所需的一切。
- [create-go-app](https://github.com/create-go-app/cli) - 強大的 CLI，只需執行一個指令，即可建立包含後端（Golang）、前端（JavaScript、TypeScript）與部署自動化（Ansible、Docker）、可用於正式環境的新專案。
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo 是完全以 Go 撰寫、以 TUI 為基礎的應用程式，可即時監控與觀察加密貨幣價格！
- [ctop](https://github.com/bcicen/ctop) - 用於容器指標、[類似 Top](https://ctop.sh) 的介面（例如 htop）。
- [ctxutil](https://github.com/posener/ctxutil) - 處理 context 的工具函式集合。
- [cvt](https://github.com/shockerli/cvt) - 輕鬆安全地將任何值轉換為另一種型別。
- [dbt](https://github.com/nikogura/dbt) - 從中央可信儲存庫執行可自我更新之已簽署執行檔的框架。
- [Death](https://github.com/vrecan/death) - 使用訊號管理 Go 應用程式的關閉。
- [debounce](https://github.com/floatdrop/debounce) - 以 Go 撰寫、零記憶體配置的防抖動工具。
- [delve](https://github.com/derekparker/delve) - Go 除錯器。
- [dive](https://github.com/wagoodman/dive) - 探索 Docker 映像中每一層的工具。
- [dlog](https://github.com/kirillDanshin/dlog) - 在編譯期控制的日誌記錄器，無需移除除錯呼叫即可讓發布版本更小。
- [EaseProbe](https://github.com/megaease/easeprobe) - 簡單、獨立且輕量的工具，可作為健康/狀態檢查常駐程式，支援 HTTP/TCP/SSH/Shell/Client/……探測，以及 Slack/Discord/Telegram/SMS……通知。
- [equalizer](https://github.com/reugn/equalizer) - Go 的配額管理器與速率限制器集合。
- [ergo](https://github.com/cristianoliveira/ergo) - 讓管理在不同連接埠上執行的多個本機服務變得簡單。
- [evaluator](https://github.com/nullne/evaluator) - 以 S 運算式為基礎動態求值運算式。簡單且易於擴充。
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Go 的容錯與韌性模式。
- [filetype](https://github.com/h2non/filetype) - 透過檢查魔術數字簽章推斷檔案類型的小型套件。
- [filler](https://github.com/yaronsumel/filler) - 使用「fill」標籤填入結構的小工具。
- [filter](https://github.com/gookit/filter) - 提供 Go 資料的篩選、清理與轉換。
- [fzf](https://github.com/junegunn/fzf) - 以 Go 撰寫的命令列模糊搜尋工具。
- [generate](https://github.com/go-playground/generate) - 在指定路徑或環境變數上遞迴執行 go generate，並可依正規表示式篩選。
- [gh-image](https://github.com/drogers0/gh-image) - gh CLI 擴充功能，可從命令列將圖片上傳至 GitHub issue、PR 與 README，並產生遵循儲存庫可見性設定的 user-attachments URL。
- [ghokin](https://github.com/antham/ghokin) - 適用於 gherkin（cucumber、behat……）、無外部相依的平行化格式化工具。
- [git-time-metric](https://github.com/git-time-metric/gtm) - 簡單、無縫、輕量的 Git 時間追蹤工具。
- [git-tools](https://github.com/kazhuravlev/git-tools) - 協助管理 Git 標籤的工具。
- [gitbatch](https://github.com/isacikgoz/gitbatch) - 在同一處管理你的 Git 儲存庫。
- [gitcs](https://github.com/knbr13/gitcs/) - Git 提交視覺化工具，在本機上將你的 Git 提交視覺化的 CLI 工具。
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - 為以 Go 為基礎的 Web 框架提供可用於正式環境的功能。
- [go-astitodo](https://github.com/asticode/go-astitodo) - 解析 Go 程式碼中的 TODO。
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - 用於包裝 Golang 外掛匯出符號的 go:generate 工具（僅限 1.8）。
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - 純 Go 的 bsdiff 與 bspatch 函式庫及 CLI 工具。
- [go-clip](https://github.com/prashantgupta24/go-clip) - 適用於 Mac 的極簡剪貼簿管理器。
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - 泛型的具型別常數集合，支援安全的字串解析，彌補 Go 缺少的列舉型別。
- [go-convert](https://github.com/Eun/go-convert) - go-convert 套件可將值轉換為另一種型別。
- [go-countries](https://github.com/mikekonan/go-countries) - 輕量級的 ISO-3166 代碼查詢。
- [go-dry](https://github.com/ungerik/go-dry) - Go 的 DRY（不要重複自己）套件。
- [go-events](https://github.com/deatil/go-events) - Go 的事件與事件訂閱套件，類似 WordPress 的 hook 函式。
- [go-funk](https://github.com/thoas/go-funk) - 現代化的 Go 工具函式庫，提供各種輔助函式（map、find、contains、filter、chunk、reverse……）。
- [go-health](https://github.com/Talento90/go-health) - Health 套件簡化為服務加入健康檢查的方式。
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - 將結構編碼為標頭欄位的 Go 函式庫。
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - 移除未使用或舊版本 AWS Lambda 的 CLI。
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock 是實作無飢餓讀寫互斥鎖與讀寫 trylock 的鎖函式庫。
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - 受 ts-pattern 啟發的模式比對函式庫。
- [go-pkg](https://github.com/chenquan/go-pkg) - Go 工具組。
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - 處理 Problem Details 的 Go 套件。
- [go-qr](https://github.com/piglig/go-qr) - 原生、高品質且極簡的 QR 碼產生器。
- [go-rate](https://github.com/beefsack/go-rate) - Go 的定時速率限制器。
- [go-safecast](https://github.com/ccoVeille/go-safecast) - 安全的數值型別轉換函式庫，可防止整數溢位與下溢（解決 gosec G115 與 CWE-190 問題）。
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - 以 Go 撰寫的 XML Sitemap 產生器。
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - 適用於 slice、map、字串、錯誤、JSON、HTTP 與容器的型別安全泛型輔助工具，組織為可獨立採用的小型套件。
- [go-trigger](https://github.com/sadlil/go-trigger) - Go 語言的全域事件觸發器，以 ID 註冊事件，並可從專案中的任何地方觸發該事件。
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper 是 Go 的斷路器套件，可讓你建立斷路並控制其狀態。
- [go-type](https://github.com/mikekonan/go-types) - 提供 Go 型別的函式庫，用於 ISO-4217、ISO-3166 等型別的儲存/驗證與傳輸。
- [go-utils](https://github.com/Goldziher/go-utils) - 受 JavaScript 與 Python 啟發、簡單且高效的 Go 泛型工具（map、filter、reduce 等）。
- [goback](https://github.com/carlescere/goback) - Go 的簡單指數退避套件。
- [goctx](https://github.com/zerosnake0/goctx) - 高效能地取得 context 值。
- [godaemon](https://github.com/VividCortex/godaemon) - 撰寫常駐程式的工具。
- [godoclive](https://github.com/syst3mctl/godoclive) - 透過靜態分析 chi、gin 與 net/http 路由器，從 Go HTTP 處理常式產生互動式 API 文件。
- [godropbox](https://github.com/dropbox/godropbox) - 來自 Dropbox、用於撰寫 Go 服務/應用程式的常用函式庫。
- [gofn](https://github.com/tiendc/gofn) - 使用泛型撰寫、適用於 Go 1.18+ 的高效能工具函式。
- [golarm](https://github.com/msempere/golarm) - 依系統事件觸發警報。
- [golog](https://github.com/mlimaloureiro/golog) - 追蹤任務時間的簡單輕量 CLI 工具。
- [gopencils](https://github.com/bndr/gopencils) - 輕鬆使用 REST API 的小巧簡單套件。
- [goplaceholder](https://github.com/michiwend/goplaceholder) - 產生預留位置圖片的小型 Golang 函式庫。
- [goreadability](https://github.com/philipjkim/goreadability) - 使用 Facebook Open Graph 與 arc90 readability 的網頁摘要擷取工具。
- [goreleaser](https://github.com/goreleaser/goreleaser) - 盡可能快速輕鬆地交付 Go 執行檔。
- [goreporter](https://github.com/wgliang/goreporter) - 執行靜態分析、單元測試、程式碼審查並產生程式碼品質報告的 Golang 工具。
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - 幾乎具備完整功能的 SeaweedFS 用戶端函式庫。
- [gostrutils](https://github.com/ik5/gostrutils) - 字串處理與轉換函式的集合。
- [gotenv](https://github.com/subosito/gotenv) - 在 Go 中從 `.env` 或任何 `io.Reader` 載入環境變數。
- [goval](https://github.com/maja42/goval) - 在 Go 中求值任意運算式。
- [graterm](https://github.com/skovtunenko/graterm) - 提供基本元件，可在 Go 應用程式中執行有序（循序/並行）的優雅終止（GRAceful TERMination，即關閉）。
- [grofer](https://github.com/pesos/grofer) - 以 Golang 撰寫的系統與資源監控工具！
- [gubrak](https://github.com/novalagung/gubrak) - 帶有語法糖的 Golang 工具函式庫。就像 lodash，但適用於 Golang。
- [handy](https://github.com/miguelpragier/handy) - 許多工具與輔助函式，例如字串處理器/格式化器與驗證器。
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - 簡單卻強大的 Kubernetes 就緒測試。
- [hostctl](https://github.com/guumaster/hostctl) - 以簡單指令管理 /etc/hosts 的 CLI 工具。
- [htcat](https://github.com/htcat/htcat) - 平行且管線化的 HTTP GET 工具。
- [hub](https://github.com/github/hub) - 包裝 Git 指令並加入額外功能，讓你從終端機與 GitHub 互動。
- [immortal](https://github.com/immortal/immortal) - \*nix 跨平台（與作業系統無關）的監督程式。
- [jet](https://github.com/NicoNex/jet) - Just Edit Text：使用正規表示式尋找與取代檔案內容及名稱的快速強大工具。
- [jsend](https://github.com/clevergo/jsend) - 以 Go 撰寫的 JSend 實作。
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - JSON 日誌的互動式檢視器。
- [jump](https://github.com/gsamokovarov/jump) - Jump 會學習你的習慣，協助你更快速地切換目錄。
- [just](https://github.com/kazhuravlev/just) - 處理泛型資料結構的實用函式集合。
- [koazee](https://github.com/wesovilabs/koazee) - 受惰性求值與函數式程式設計啟發的函式庫，讓處理陣列不再麻煩。
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - 網路裝置探索與盤點工具，支援持久化標記、多網路掃描與 Tailscale 整合。
- [lang](https://github.com/maxbolgarin/lang) - 處理變數、slice 與 map 的泛型單行函式，免除樣板程式碼。
- [lets-go](https://github.com/aplescia-chwy/lets-go) - 為雲端原生 REST API 開發提供常用工具的 Go 模組。另包含 AWS 專用工具。
- [limiters](https://github.com/mennanov/limiters) - 適用於 Golang 分散式應用程式的速率限制器，具備可設定的後端與分散式鎖。
- [lo](https://github.com/samber/lo) - 以 Go 1.18+ 泛型為基礎、類似 Lodash 的 Go 函式庫（map、filter、contains、find……）。
- [loncha](https://github.com/kazu/loncha) - 高效能的 slice 工具。
- [lrserver](https://github.com/jaschaephraim/lrserver) - Go 的 LiveReload 伺服器。
- [mani](https://github.com/alajmo/mani) - 協助你管理多個儲存庫的 CLI 工具。
- [mc](https://github.com/minio/mc) - Minio Client 提供處理 Amazon S3 相容雲端儲存與檔案系統的精簡工具。
- [mergo](https://github.com/imdario/mergo) - 在 Golang 中合併結構與 map 的輔助工具。適合用於設定預設值，避免雜亂的 if 陳述式。
- [mimemagic](https://github.com/zRedShift/mimemagic) - 純 Go、效能極高的 MIME 類型嗅探函式庫/工具。
- [mimetype](https://github.com/gabriel-vasile/mimetype) - 以魔術數字為基礎偵測 MIME 類型的套件。
- [minify](https://github.com/tdewolff/minify) - 適用於 HTML、CSS、JS、XML、JSON 與 SVG 檔案格式的快速壓縮工具。
- [minquery](https://github.com/icza/minquery) - 支援高效分頁的 MongoDB / mgo.v2 查詢（使用游標從上次中斷處繼續列出文件）。
- [moldova](https://github.com/StabbyCutyou/moldova) - 依據輸入範本產生隨機資料的工具。
- [mole](https://github.com/davrodpin/mole) - 輕鬆建立 SSH 通道的 CLI 應用程式。
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - 適用於官方 mongodb/mongo-go-driver 套件的 MongoDB 分頁工具，同時支援一般查詢與聚合管線。
- [mssqlx](https://github.com/linxGnu/mssqlx) - 資料庫用戶端函式庫，可作為任何主從、主主架構的代理。以輕量與自動平衡為設計考量。
- [multitick](https://github.com/VividCortex/multitick) - 對齊 ticker 的多工器。
- [netbug](https://github.com/e-dard/netbug) - 輕鬆對你的服務進行遠端效能剖析。
- [nfdump](https://github.com/chrispassas/nfdump) - 讀取 nfdump netflow 檔案。
- [nostromo](https://github.com/pokanop/nostromo) - 建立強大別名的 CLI。
- [okrun](https://github.com/xta/okrun) - go run 錯誤壓路機。
- [olaf](https://github.com/btnguyen2k/olaf) - 以 Go 實作的 Twitter Snowflake。
- [onecache](https://github.com/adelowo/onecache) - 支援多種後端儲存（Redis、Memcached、檔案系統等）的快取函式庫。
- [optional](https://github.com/kazhuravlev/optional) - 可選的結構欄位與變數。
- [panicparse](https://github.com/maruel/panicparse) - 將相似的 goroutine 分組，並為堆疊傾印加上色彩。
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - 模式比對函式庫。
- [peco](https://github.com/peco/peco) - 精簡的互動式篩選工具。
- [pgo](https://github.com/arthurkushman/pgo) - 為 PHP 社群提供的便利函式。
- [pm](https://github.com/VividCortex/pm) - 具備 HTTP API 的程序（即 goroutine）管理器。
- [pointer](https://github.com/xorcare/pointer) - pointer 套件包含輔助常式，可簡化建立基本型別的可選欄位。
- [ptr](https://github.com/gotidy/ptr) - 提供函式以簡化從基本型別常數建立指標的套件。
- [rate](https://github.com/webriots/rate) - 高效能速率限制函式庫，支援權杖桶與 AIMD 策略。
- [rclient](https://github.com/zpatrick/rclient) - 易讀、彈性且易於使用的 REST API 用戶端。
- [release](https://github.com/tomodian/release) - 用於 Keep-a-changelog 格式變更日誌的 CLI。
- [relimpact](https://github.com/hashmap-kz/relimpact) - 為 Go 專案快速產生 API 相容性報告。
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - 從智慧型手機控制滑鼠與鍵盤。
- [repeat](https://github.com/ssgreg/repeat) - 各種退避策略的 Go 實作，適用於重試操作與心跳。
- [request](https://github.com/mozillazg/request) - 為人類設計的 Go HTTP 請求™。
- [rerun](https://github.com/ivpusic/rerun) - 原始碼變更時重新編譯並重新執行 Go 應用程式。
- [rest-go](https://github.com/edermanoel94/rest-go) - 提供許多實用方法來處理 REST API 的套件。
- [retro](https://github.com/goioc/retro) - 方便的錯誤重試函式庫，具備高度彈性（退避策略、上限等）。
- [retry](https://github.com/kamilsk/retry) - 最先進的函數式機制，可重複執行動作直到成功為止。
- [retry](https://github.com/percolate/retry) - 簡單卻高度可設定的 Go 重試套件。
- [retry](https://github.com/thedevsaddam/retry) - 簡單易用的 Go 重試機制套件。
- [retry](https://github.com/shafreeck/retry) - 確保你的工作能夠完成的超簡單函式庫。
- [retry-go](https://github.com/avast/retry-go) - 簡單的重試機制函式庫。
- [retry-go](https://github.com/rafaeljesus/retry-go) - 讓 Golang 的重試變得簡單容易。
- [robustly](https://github.com/VividCortex/robustly) - 以具韌性的方式執行函式，攔截 panic 並重新啟動。
- [rospo](https://github.com/ferama/rospo) - 以 Golang 實作、內嵌 SSH 伺服器的簡單可靠 SSH 通道。
- [scan](https://github.com/blockloop/scan) - 將 Golang 的 `sql.Rows` 直接掃描至結構、slice 或基本型別。
- [scan](https://github.com/wroge/scan) - 藉由泛型將 SQL 資料列掃描至任何型別。
- [scany](https://github.com/georgysavva/scany) - 將資料庫中的資料掃描至 Go 結構等目標的函式庫。
- [serve](https://github.com/syntaqx/serve) - 隨處可用的靜態 HTTP 伺服器。
- [sesh](https://github.com/joshmedeski/sesh) - Sesh 是一個 CLI，可使用 zoxide 快速輕鬆地建立與管理 tmux 工作階段。
- [set](https://github.com/nofeaturesonlybugs/set) - 高效且彈性的結構對映與寬鬆型別轉換。
- [shutdown](https://github.com/ztrue/shutdown) - 處理 `os.Signal` 的應用程式關閉掛鉤。
- [silk](https://github.com/chrispassas/silk) - 讀取 silk netflow 檔案。
- [slice](https://github.com/psampaz/slice) - 用於常見 Go slice 操作的型別安全函式。
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - 基本型別之間的 slice 轉換。
- [slicer](https://github.com/leaanthony/slicer) - 讓處理 slice 更容易。
- [sorty](https://github.com/jfcg/sorty) - 快速的並行/平行排序。
- [sqlex](https://github.com/go-sqlex/sqlex) - jmoiron/sqlx 的現代化直接替代品，修正了 SQL 詞法分析器的錯誤，並提供自動 IN 子句展開、可插拔掛鉤與統一的 DB/Tx/Conn 介面。
- [sqlx](https://github.com/jmoiron/sqlx) - 在優秀的內建 database/sql 套件之上提供一組擴充功能。
- [sqlz](https://github.com/rfberaldo/sqlz) - database/sql 套件的擴充，加入具名查詢、結構掃描與批次操作。
- [sshman](https://github.com/shoobyban/sshman) - 管理多台遠端伺服器上 authorized_keys 檔案的 SSH 管理器。
- [stacktower](https://github.com/stacktower-io/stacktower) - 將相依圖視覺化為實體高塔結構，靈感來自 XKCD #2347。
- [statiks](https://github.com/janiltonmaciel/statiks) - 快速、零設定的靜態 HTTP 檔案伺服器。
- [Storm](https://github.com/asdine/storm) - 簡單而強大的 BoltDB 工具組。
- [structs](https://github.com/PumpkinSeed/structs) - 實作操作結構的簡單函式。
- [throttle](https://github.com/yudppp/throttle) - Throttle 是在每段時間內只執行一次動作的物件。
- [tik](https://github.com/andy2046/tik) - 簡單易用的 Go 時間輪套件。
- [tome](https://github.com/cyruzin/tome) - Tome 專為簡單 RESTful API 的分頁而設計。
- [toolbox](https://github.com/viant/toolbox) - slice、map、multimap、結構、函式與資料轉換工具。另有服務路由器、巨集求值器與分詞器。
- [UNIS](https://github.com/esemplastic/unis) - Go 字串工具的通用架構™（Common Architecture™）。
- [upterm](https://github.com/owenthereal/upterm) - 讓開發者透過網路安全分享終端機/tmux 工作階段的工具。非常適合遠端結對程式設計、存取位於 NAT/防火牆後方的電腦、遠端除錯等用途。
- [usql](https://github.com/knq/usql) - usql 是適用於 SQL 資料庫的通用命令列介面。
- [util](https://github.com/shomali11/util) - 實用工具函式集合（字串、並行、各種操作……）。
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - 定期執行指令，並將最新的 STDOUT 或其豐富的差異內容以 HTTP 端點公開。
- [wifiqr](https://github.com/reugn/wifiqr) - Wi-Fi QR 碼產生器。
- [wuzz](https://github.com/asciimoo/wuzz) - 用於檢視 HTTP 的互動式 CLI 工具。
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy 提供以 Golang 撰寫的二進位差異比對與修補函式庫。
- [xpool](https://github.com/peczenyj/xpool) - 又一個使用泛型的 Golang 型別安全物件池。
- [yogo](https://github.com/antham/yogo) - 從命令列查看 yopmail 郵件。

**[⬆ 回到頂部](#contents)**

## UUID

_用於處理 UUID 的函式庫。_

- [fastuuid](https://github.com/rekby/fastuuid) - 快速產生字串或位元組形式的 UUIDv4。
- [goid](https://github.com/jakehl/goid) - 產生與解析符合 RFC4122 的 V4 UUID。
- [gouid](https://github.com/twharmon/gouid) - 只需一次記憶體配置即可產生密碼學安全的隨機字串 ID。
- [guid](https://github.com/sdrapkin/guid) - 快速且密碼學安全的 Go Guid 產生器（比 `uuid` 快約 10 倍）。
- [nanoid](https://github.com/aidarkhanov/nanoid) - 小巧高效的 Go 唯一字串 ID 產生器。
- [nanoid](https://github.com/sixafter/nanoid) - 高效且密碼學安全的產生器，可快速並行建立 NanoID 與 UUID。
- [sno](https://github.com/muyo/sno) - 內嵌中繼資料、精簡、可排序且快速的唯一 ID。
- [ulid](https://github.com/oklog/ulid) - ULID（全域唯一且可依字典序排序的識別碼）的 Go 實作。
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - 透過指令產生安全、快速且毫不麻煩的唯一識別碼。
- [uuid](https://github.com/agext/uuid) - 產生、編碼與解碼 UUID v1，可使用快速或密碼學等級的隨機節點識別碼。
- [uuid](https://github.com/gofrs/uuid) - 通用唯一識別碼（UUID）的實作。同時支援 UUID 的建立與解析。為 satori uuid 積極維護中的分支。
- [uuid](https://github.com/google/uuid) - 以 RFC 4122 與 DCE 1.1：Authentication and Security Services 為基礎的 Go UUID 套件。
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - 小巧、無相依的 Go 函式庫，可依標準 RFC 4122 格式驗證 UUID，並將 UUIDv7() 轉換為 UTC 時間戳記。
- [wuid](https://github.com/edwingeng/wuid) - 極快速的全域唯一數字產生器。
- [xid](https://github.com/rs/xid) - Xid 是全域唯一 ID 產生函式庫，可直接安全地用於你的伺服器程式碼中。

**[⬆ 回到頂部](#contents)**

## 驗證

_用於驗證的函式庫。_

- [checkdigit](https://github.com/osamingo/checkdigit) - 提供檢查碼演算法（Luhn、Verhoeff、Damm）與計算器（ISBN、EAN、JAN、UPC 等）。
- [checker](https://github.com/cinar/checker) - 零相依的輸入驗證與就地正規化，支援結構標籤、23 種語系與 JSON Schema 產生。
- [go-validator](https://github.com/tiendc/go-validator) - 使用泛型的驗證函式庫。
- [gody](https://github.com/guiferpa/gody) - :balloon: 輕量級的 Go 結構驗證器。
- [govalid](https://github.com/twharmon/govalid) - 快速、以標籤為基礎的結構驗證。
- [govalidator](https://github.com/asaskevich/govalidator) - 適用於字串、數值、slice 與結構的驗證器與清理器。
- [govalidator](https://github.com/thedevsaddam/govalidator) - 以簡單規則驗證 Golang 請求資料。深受 Laravel 請求驗證啟發。
- [govy](https://github.com/nobl9/govy) - 基於函數式介面的強型別驗證規則，由泛型驅動且不使用反射，著重於產生清晰且資訊豐富的錯誤訊息。
- [hvalid](https://github.com/lyonnee/hvalid) hvalid 是以 Go 語言撰寫的輕量級驗證函式庫。它提供自訂驗證器介面與一系列常用驗證函式，協助開發者快速實作資料驗證。
- [jio](https://github.com/faceair/jio) - jio 是類似 [joi](https://github.com/hapijs/joi) 的 JSON 結構描述驗證器。
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - 支援驗證各種資料型別（結構、字串、map、slice 等），驗證規則可設定、可擴充，並以一般程式碼結構而非結構標籤來指定。
- [validate](https://github.com/gookit/validate) - 用於資料驗證與篩選的 Go 套件。支援驗證 Map、Struct、Request（表單、JSON、url.Values、上傳檔案）資料等功能。
- [validate](https://github.com/gobuffalo/validate) - 此套件提供為 Go 應用程式撰寫驗證的框架。
- [validator](https://github.com/go-playground/validator) - Go 結構與欄位驗證，包括跨欄位、跨結構，以及深入 Map、Slice 與陣列的驗證。
- [Validator](https://github.com/go-the-way/validator) - 以 Go 撰寫的輕量級模型驗證器。內含驗證函式：Min、Max、MinLength、MaxLength、Length、Enum、Regex。
- [valix](https://github.com/marrow16/valix) 驗證請求的 Go 套件。
- [vx](https://github.com/sevlyar/vx) - 由小型、可組合的檢查構成的驗證機制，零相依，並具備可重建的錯誤路徑。
- [Zog](https://github.com/Oudwins/zog) - 受 [Zod](https://github.com/colinhacks/zod) 啟發的結構描述建構器，用於執行期的值解析與驗證。
  **[⬆ 回到頂部](#contents)**

## 版本控制

_用於版本控制的函式庫。_

- [cli](https://gitlab.com/gitlab-org/cli) - 開源的 GitLab 命令列工具，將 GitLab 的酷炫功能帶到你的命令列。
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go 是一個 Go 函式庫，可在 VCS 供應商上執行操作。
- [ggc](https://github.com/bmf-san/ggc) - 兼具傳統命令列與互動式增量搜尋 UI 的 Git CLI 工具，支援工作流程與可自訂的按鍵綁定。
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - 用於 Git 操作的本機 MCP 伺服器，使用 Ollama 節省 token 並防止機密外洩。
- [git2go](https://github.com/libgit2/git2go) - libgit2 的 Go 繫結。
- [githooks](https://github.com/gabyx/githooks) - 各儲存庫專屬與共享的 Git 掛鉤，支援版本控制與自動更新。
- [gitty](https://github.com/Omibranch/gitty) - 單一執行檔的 Git/GitHub CLI，以一個指令取代 add→commit→push；語法易讀，無外部相依套件。
- [go-git](https://github.com/go-git/go-git) - 以純 Go 實作、高度可擴充的 Git。
- [go-vcs](https://github.com/sourcegraph/go-vcs) - 在 Go 中操作與檢視 VCS 儲存庫。
- [hercules](https://github.com/src-d/hercules) - 從 Git 儲存庫歷史中獲得進階洞察。
- [hgo](https://github.com/beyang/hgo) - Hgo 是一組 Go 套件，提供對本機 Mercurial 儲存庫的讀取存取。

**[⬆ 回到頂部](#contents)**

## 影片

_用於處理影片的函式庫。_

- [gmf](https://github.com/3d0c/gmf) - FFmpeg av\* 函式庫的 Go 繫結。
- [go-astiav](https://github.com/asticode/go-astiav) - 在 Go 中更好用的 ffmpeg C 繫結。
- [go-astisub](https://github.com/asticode/go-astisub) - 在 Go 中處理字幕（.srt、.stl、.ttml、.webvtt、.ssa/.ass、teletext、.smi 等）。
- [go-astits](https://github.com/asticode/go-astits) - 在 Go 中原生解析與解多工 MPEG 傳輸串流（.ts）。
- [go-mpd](https://github.com/unki2aut/go-mpd) - MPEG-DASH 資訊清單檔案的解析與產生函式庫。
- [goav](https://github.com/giorgisio/goav) - FFmpeg 的全面 Go 繫結。
- [gortsplib](https://github.com/aler9/gortsplib) - 純 Go 的 RTSP 伺服器與用戶端函式庫。
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - HLS（M3U8）播放清單的解析器與產生器；與規格保持同步更新。
- [libvlc-go](https://github.com/adrg/libvlc-go) - libvlc 2.X/3.X/4.X（VLC 媒體播放器所使用）的 Go 繫結。
- [manifestor](https://github.com/alanzng/manifestor) - 零相依的函式庫，用於解析、篩選、轉換與建構 HLS 及 DASH 資訊清單。
* [mosaic](https://github.com/farshidrezaei/mosaic) - 可預測、可用於正式環境的 Go 自適應位元率（ABR）影片封裝（HLS 與 DASH CMAF）。
- [mp4ff](https://github.com/Eyevinn/mp4ff) - 處理包含影片、音訊、字幕或中繼資料之 MP4 檔案的函式庫與工具。
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - MPEG-2 傳輸串流分析器，可檢查 PCR 時序合規性，並傾印低階 TS、PSI 與 PES 結構。
- [v4l](https://github.com/korandiz/v4l) - 以 Go 撰寫的 Linux 影像擷取函式庫。

**[⬆ 回到頂部](#contents)**

## Web 框架

_全端 Web 框架。_

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - 功能齊全的 HTTP 伺服器函式庫，具備路由器、中介軟體堆疊、WebSocket 中樞、檔案上傳與 OpenAPI 驗證。
- [Andurel](https://github.com/mbvlabs/andurel) - 受 Rails 啟發的全端 Go Web 框架，具備鷹架、資料庫工具，以及伺服器端渲染或 Inertia 前端。
- [Atreugo](https://github.com/savsgio/atreugo) - 高效能且可擴充的微型 Web 框架，在熱路徑上零記憶體配置。
- [Barf](https://github.com/opensaucerer/barf) - 基本上，這是一個用於建構以 JSON 為基礎之 Web API 的卓越框架（Basically, A Remarkable Framework）。它完全不具侵入性，也不重新發明輪子。其設計讓入門簡單快速，同時也具備足夠彈性來應付更複雜的使用情境。
- [Beego](https://github.com/beego/beego) - beego 是適用於 Go 程式語言的開源高效能 Web 框架。
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti 是語法富表達力且優雅的 Go Web 應用程式框架。Confetti 結合了 Laravel 的優雅與 Go 的簡潔。
- [Don](https://github.com/abemedia/go-don) - 高效能且易於使用的 API 框架。
- [doors](https://github.com/doors-dev/doors) - 伺服器驅動的框架，可完全以 Go 建構有狀態、響應式的 Web 應用程式。
- [Echo](https://github.com/labstack/echo) - 高效能、極簡的 Go Web 框架。
- [Fastschema](https://github.com/fastschema/fastschema) - 彈性的 Go Web 框架與無頭 CMS。
- [Fiber](https://github.com/gofiber/fiber) - 受 Express.js 啟發、建構於 Fasthttp 之上的 Web 框架。
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - 適用於可插拔 Web 專案的框架。包含模組概念，並提供相依性注入、Configareas、國際化、範本引擎、GraphQL、可觀測性、安全性、事件、路由與反向路由等功能。
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - 採用 DDD 與埠與轉接器等整潔架構提供電子商務功能，可用於建構彈性的電子商務應用程式。
- [Fuego](https://github.com/go-fuego/fuego) - 為忙碌的 Go 開發者打造的框架！能從原始碼產生 OpenAPI 3 規格的 Web 框架。
- [Gin](https://github.com/gin-gonic/gin) - Gin 是以 Go 撰寫的 Web 框架！它擁有類似 martini 的 API，但效能好得多，最高可快 40 倍。適合需要效能與良好生產力的你。
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Gin 參數自動繫結工具，gin RPC 工具。
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - 以 gRPC 為優先的微服務框架。功能包括對 Mongo 的 ODM 支援、雲端資源支援（AWS/Azure/Google），以及為 gRPC 量身打造的流暢相依性注入。此外，它直接支援 grpc-web，讓瀏覽器無需代理即可存取所有 gRPC API。
- [Goa](https://github.com/goadesign/goa) - Goa 為在 Go 中開發遠端 API 與微服務提供全方位的方法。
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr 是帶有既定設計理念的微服務開發框架。
- [GoFrame](https://github.com/gogf/gf) - GoFrame 是模組化、強大、高效能的企業級 Golang 應用程式開發框架。
- [Gone](https://github.com/gone-io/gone) - 受 Spring 啟發的輕量級相依性注入與 Web 框架。
- [goravel](https://github.com/goravel/goravel) - 受 Laravel 啟發的 Web 框架，內建 ORM、身分驗證、佇列、任務排程等功能。
- [Goshtoso](https://github.com/araihu/goshtoso) - 為 Go 應用程式打造的伺服器端渲染 UI 元件，使用 templ、Tailwind CSS、HTMX 與 Alpine.js 建構。
- [Goyave](https://github.com/go-goyave/goyave) - 功能完整的 REST API 框架，以整潔程式碼與快速開發為目標，並內建強大功能。
- [Hertz](https://github.com/cloudwego/hertz) - 高效能且擴充性強的 Go HTTP 框架，協助開發者建構微服務。
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot 是高效能的 Web 應用程式框架，支援自動設定與相依性注入。
- [httpsuite](https://github.com/rluders/httpsuite) - Go 的 HTTP 請求解析與 RFC 9457 問題回應，核心僅使用標準函式庫，並可選用驗證功能。
- [Huma](https://github.com/danielgtaylor/huma/) - 用於現代 REST/GraphQL API 的框架，內建 OpenAPI 3、自動產生的文件與 CLI。
- [iWF](https://github.com/indeedeng/iwf) - iWF 是用於開發長時間執行之業務流程的一體化平台。它以簡潔、簡單且易用的介面，為資料庫、ElasticSearch、訊息佇列、持久計時器等提供便利的抽象層。
- [Lit](https://github.com/jvcoutinho/lit) - 高效能的宣告式 Golang Web 框架，追求簡潔與良好的開發體驗。
- [Microservice](https://github.com/claygod/microservice) - 以 Golang 撰寫、用於建立微服務的框架。
- [NotNet](https://github.com/nottechdm/notnet) - 輕量級 Go 框架，用於建構快速且符合人體工學的 RESTful API，支援中介軟體與彈性路由。
- [patron](https://github.com/beatlabs/patron) - Patron 是遵循雲端最佳實務、著重生產力的微服務框架。
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux 是強大的 Go Web 框架，使用正規表示式比對與處理 HTTP 請求。提供 CORS 處理、結構化日誌、URL 參數擷取、中介軟體與並行限制等功能。
- [Revel](https://github.com/revel/revel) - Go 語言的高生產力 Web 框架。
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - 使用 Gin 與 gRPC 快速輕鬆建構企業級 Go 微服務的啟動函式庫。
- [Ronykit](https://github.com/clubpay/ronykit) - 採用可插拔架構且效能極佳的 Web 框架。
- [rux](https://github.com/gookit/rux) - 用於建構 Golang HTTP 應用程式的簡單快速 Web 框架。
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - 適用於 Go 與 templ 的非官方 shadcn/ui 移植版本：提供無障礙 UI 元件，並附 CLI 與元件登錄庫。
- [togo](https://github.com/togo-framework/togo) - 將 Go 後端與 React 前端打包成單一執行檔的全端框架；提供 Laravel artisan 等級的 CLI。
- [uAdmin](https://github.com/uadmin/uadmin) - 受 Django 啟發、功能完整的 Golang Web 框架。
- [WebGo](https://github.com/naughtygopher/webgo) - 用於建構 Web 應用程式的微框架，支援處理常式串接、中介軟體與上下文注入。HTTP 處理常式符合標準函式庫規範（即 `http.HandlerFunc`）。
- [Xun](https://github.com/yaitoo/xun) - 建構於 Go 內建 html/template 與 net/http 套件路由器之上的 Web 框架。其設計輕量、快速且易於使用，同時提供簡單直觀的 API，用於建構具備中介軟體、路由與範本渲染等進階功能的 Web 應用程式。
- [Yokai](https://github.com/ankorstore/yokai) - 簡單、模組化且可觀測的 Go 後端應用程式框架。

**[⬆ 回到頂部](#contents)**

### 中介軟體

#### 實際的中介軟體

- [client-timing](https://github.com/posener/client-timing) - 處理 Server-Timing 標頭的 HTTP 用戶端。
- [CORS](https://github.com/rs/cors) - 輕鬆為你的 API 加入 CORS 功能。
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Echo 框架的中介軟體，提供日誌記錄與指標。
- [formjson](https://github.com/rs/formjson) - 將 JSON 輸入透明地當作標準表單 POST 處理。
- [go-fault](https://github.com/github/go-fault) - Go 的故障注入中介軟體。
- [Limiter](https://github.com/ulule/limiter) - 極其簡單的 Go 速率限制中介軟體。
- [ln-paywall](https://github.com/philippgille/ln-paywall) - 透過閃電網路（比特幣）以每次請求為單位將 API 變現的 Go 中介軟體。
- [mid](https://github.com/bobg/mid) - 各式 HTTP 中介軟體功能：符合慣用風格的處理常式錯誤回傳、以 JSON 資料接收/回應、請求追蹤等。
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Gin 框架的中介軟體，提供日誌記錄、指標、驗證、追蹤等功能。
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - gRPC 的中介軟體，提供日誌記錄、指標、驗證、追蹤等功能。
- [Tollbooth](https://github.com/didip/tollbooth) - 速率限制 HTTP 請求處理常式。
- [XFF](https://github.com/sebest/xff) - 處理 `X-Forwarded-For` 標頭及相關標頭。

#### 用於建立 HTTP 中介軟體的函式庫

- [alice](https://github.com/justinas/alice) - 無痛的 Go 中介軟體串接。
- [catena](https://github.com/codemodus/catena) - http.Handler 包裝器串接（API 與「chain」相同）。
- [chain](https://github.com/codemodus/chain) - 具備範圍資料的處理常式包裝器串接（以 net/context 為基礎的「中介軟體」）。
- [gores](https://github.com/alioygur/gores) - 處理 HTML、JSON、XML 等回應的 Go 套件。適用於 RESTful API。
- [interpose](https://github.com/carbocation/interpose) - Golang 的極簡 net/http 中介軟體。
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - 為 `http.Client` 加入攔截器，以便傾印/調整/追蹤……請求與回應。
- [muxchain](https://github.com/stephens2424/muxchain) - net/http 的輕量級中介軟體。
- [negroni](https://github.com/urfave/negroni) - 符合慣用風格的 Golang HTTP 中介軟體。
- [render](https://github.com/unrolled/render) - 輕鬆渲染 JSON、XML 與 HTML 範本回應的 Go 套件。
- [renderer](https://github.com/thedevsaddam/renderer) - 簡單、輕量且更快速的 Go 回應（JSON、JSONP、XML、YAML、HTML、檔案）渲染套件。
- [stats](https://github.com/thoas/stats) - 儲存 Web 應用程式各種資訊的 Go 中介軟體。

**[⬆ 回到頂部](#contents)**

### 路由器

- [alien](https://github.com/gernest/alien) - 來自外太空的輕量快速 HTTP 路由器。
- [bellt](https://github.com/GuilhermeCaruso/bellt) - 簡單的 Go HTTP 路由器。
- [Bone](https://github.com/go-zoo/bone) - 閃電般快速的 HTTP 多工器。
- [Bxog](https://github.com/claygod/Bxog) - 簡單快速的 Go HTTP 路由器。可處理不同複雜度、長度與巢狀層級的路由，還能從接收到的參數建立 URL。
- [chi](https://github.com/go-chi/chi) - 建構於 net/context 之上、小巧快速且富表達力的 HTTP 路由器。
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - 從 `httprouter` 分支出來的高效能路由器。第一個適用於 `fasthttp` 的路由器。
- [FastRouter](https://github.com/razonyang/fastrouter) - 以 Go 撰寫的快速彈性 HTTP 路由器。
- [Fox](https://github.com/fox-toolkit/fox) - 用於建構反向代理與 API 閘道的高效能 HTTP 路由器，一流地支援在執行期變更路由。
- [fursy](https://github.com/coregx/fursy) - HTTP 路由器，具備型別安全的泛型處理常式、從程式碼自動產生 OpenAPI 3.1，以及 RFC 9457 錯誤回應。
- [goblin](https://github.com/bmf-san/goblin) - 以字典樹為基礎的 Golang HTTP 路由器。
- [gocraft/web](https://github.com/gocraft/web) - 以 Go 撰寫的多工器與中介軟體套件。
- [Goji](https://github.com/goji/goji) - Goji 是極簡且彈性的 HTTP 請求多工器，支援 `net/context`。
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router 是適用於 Go 程式語言、輕量卻強大的 HTTP 路由器。
- [goroute](https://github.com/goroute/route) - 簡單卻強大的 HTTP 請求多工器。
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter 是伺服器/API 微框架、HTTP 請求路由器與多工器（mux），提供支援 `net/context` 中介軟體的請求路由器。
- [gowww/router](https://github.com/gowww/router) - 閃電般快速的 HTTP 路由器，完全相容 net/http.Handler 介面。
- [httprouter](https://github.com/julienschmidt/httprouter) - 高效能路由器。搭配標準 HTTP 處理常式，即可組成效能極高的 Web 框架。
- [httptreemux](https://github.com/dimfeld/httptreemux) - 高速、彈性、以樹為基礎的 Go HTTP 路由器。靈感來自 httprouter。
- [lars](https://github.com/go-playground/lars) - 輕量、快速、可擴充且零記憶體配置的 Go HTTP 路由器，可用來建立可自訂的框架。
- [mux](https://github.com/gorilla/mux) - 強大的 Golang URL 路由器與分派器。
- [nchi](https://github.com/muir/nchi) - 建構於 httprouter 之上、類似 chi 的路由器，提供以相依性注入為基礎的中介軟體包裝器。
- [ngamux](https://github.com/ngamux/ngamux) - 簡單的 Go HTTP 路由器。
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - 極快速的 Go（golang）HTTP 路由器，支援正規表示式路由比對，並完整支援建構 RESTful API。
- [pure](https://github.com/go-playground/pure) - 輕量級 HTTP 路由器，堅守標準「net/http」實作。
- [Siesta](https://github.com/VividCortex/siesta) - 撰寫中介軟體與處理常式的可組合框架。
- [vestigo](https://github.com/husobee/vestigo) - 適用於 Go Web 應用程式的高效能、獨立且符合 HTTP 規範的 URL 路由器。
- [violetear](https://github.com/nbari/violetear) - Go HTTP 路由器。
- [xmux](https://github.com/rs/xmux) - 以 `httprouter` 為基礎、支援 `net/context` 的高效能多工器。
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - 簡單快速的 Go HTTP 路由器。

**[⬆ 回到頂部](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - DOM 函式庫。
- [Extism Go SDK](https://github.com/extism/go-sdk) - 通用、跨語言的 WebAssembly 框架，用於建構外掛系統與多語言應用程式。
- [go-canvas](https://github.com/markfarnan/go-canvas) - 使用 HTML5 Canvas 的函式庫，所有繪圖皆在 Go 程式碼中完成。
- [tinygo](https://github.com/tinygo-org/tinygo) - 適用於小型環境的 Go 編譯器。支援微控制器、WebAssembly 與命令列工具。以 LLVM 為基礎。
- [vert](https://github.com/norunners/vert) - Go 與 JS 值之間的互通。
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - 在瀏覽器中執行 Go WASM 測試。
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Wasmtime WebAssembly 執行環境的 Go 繫結（支援 WASI、JIT/AOT，安全且快速的嵌入）。
- [webapi](https://github.com/gowebapi/webapi) - 由 WebIDL 產生的 DOM 與 HTML 繫結。

**[⬆ 回到頂部](#contents)**

## Webhook 伺服器

- [HookRun](https://github.com/bluvenr/hookrun) - 輕量級 Webhook 動作引擎（約 3MB 的單一執行檔，零相依），依 YAML 規則執行指令與腳本，支援 token/HMAC/IP 驗證與熱重載。
- [webhook](https://github.com/adnanh/webhook) - 讓使用者建立可在伺服器上執行指令之 HTTP 端點（hook）的工具。
- [webhooked](https://github.com/42Atomys/webhooked) - 超強化版的 Webhook 接收器：處理、保護、格式化與儲存 Webhook 酬載從未如此簡單。
- [WebhookX](https://github.com/webhookx-io/webhookx) - 用於接收、處理與可靠傳遞訊息的 Webhook 閘道。

**[⬆ 回到頂部](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Direct3D9 的 Go 繫結。
- [go-ole](https://github.com/go-ole/go-ole) - Golang 的 Win32 OLE 實作。
- [gosddl](https://github.com/MonaxGT/gosddl) - 將 SDDL 字串轉換為易讀 JSON 的轉換器。SDDL 由四個部分組成：Owner、Primary Group、DACL、SACL。
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - 使用 go-ole 的 Windows Update Agent API Golang 繫結。

**[⬆ 回到頂部](#contents)**

## 工作流程框架

_用於建立工作流程的函式庫。_

- [Cadence-client](https://github.com/uber-go/cadence-client) - 用於撰寫在 Uber 開發之 Cadence 編排引擎上執行的工作流程與活動的框架。
- [Dagu](https://github.com/dagu-go/dagu) - 無程式碼的工作流程執行器。可執行以簡單 YAML 格式定義的 DAG。
- [durable-go](https://github.com/agenticenv/durable-go) - 適用於單一程序 Go 應用程式與 AI 代理的持久執行引擎，零相依。
- [Flowbaker](https://github.com/flowbaker/flowbaker) - 自架的執行引擎，用於建構、串接與自動化無程式碼工作流程。
- [go-dag](https://github.com/rhosocial/go-dag) - 以 Go 開發的框架，用於管理以有向無環圖描述之工作流程的執行。
- [go-taskflow](https://github.com/noneback/go-taskflow) - 類似 taskflow 的通用任務平行程式設計框架，整合了視覺化工具與效能剖析器。
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - 內建網頁主控台的持久工作流程引擎，以 Postgres、MySQL 或 SQLite 為後端。
- [workflow](https://github.com/luno/workflow) - 不依賴特定技術堆疊的事件驅動工作流程框架。

**[⬆ 回到頂部](#contents)**

## XML

_用於處理 XML 的函式庫與工具。_

- [XML-Comp](https://github.com/xml-comp/xml-comp) - 簡單的命令列 XML 比較工具，可產生資料夾、檔案與標籤的差異。
- [xml2map](https://github.com/sbabiv/xml2map) - 以 Golang 撰寫的 XML 轉 MAP 轉換器。
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery 是用於 XML 查詢的 Golang XPath 套件。
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - 以 libxml2 的 xmlwriter 模組為基礎的程序式 XML 產生 API。
- [xpath](https://github.com/antchfx/xpath) - Go 的 XPath 套件。
- [zek](https://github.com/miku/zek) - 從 XML 產生 Go 結構。

## 零信任

_用於實作零信任架構的函式庫與工具。_

- [Cosign](https://github.com/sigstore/cosign) - 在 OCI 登錄庫中簽署、驗證與儲存容器。
- [in-toto](https://github.com/in-toto/in-toto-golang) - in-toto Python 參考實作的 Go 版本（in-toto 提供保護軟體供應鏈完整性的框架）。
- [OpenZiti](https://github.com/openziti/ziti) - 完整的開源零信任覆蓋網路。包含適用於 [golang](https://github.com/openziti/sdk-golang) 等多種語言的眾多 SDK，讓你能將零信任原則直接嵌入應用程式中。[OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) 提供許多可作為靈感來源的範例，包括[零信任 SSH 用戶端 - zssh](https://github.com/openziti-test-kitchen/zssh)。
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - 結合 Spiffe JWT 驗證與 Hashicorp Vault，實現無需機密的身分驗證。
- [Spire](https://github.com/spiffe/spire) - SPIRE（SPIFFE 執行環境）是一套 API 工具鏈，用於在各種託管平台的軟體系統之間建立信任。

## 程式碼分析

_原始碼分析工具，又稱靜態應用程式安全測試（SAST）工具。_

- [apicompat](https://github.com/bradleyfalzon/apicompat) - 檢查 Go 專案近期的變更中是否有破壞向下相容性的改動。
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - 適用於 Go 及其他語言的靜態程式碼分析器：提供複雜度、耦合度、內聚度與可維護性指標，並輸出 HTML、JSON、Markdown 與 SARIF 報告。
- [asty](https://github.com/asty-org/asty) - 在 Golang AST 與 JSON 之間相互轉換。
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket 是協助你找出 Go 套件中沒有直接單元測試之函式的工具。
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - 找出你的 Go 語言直接 GitHub 相依項中，哪些容易遭受 ChainJacking 攻擊。
- [Chronos](https://github.com/amit-davidson/Chronos) - 以靜態方式偵測競態條件。
- [deadmono](https://github.com/arxeiss/deadmono) - deadcode 的包裝器，用於偵測 Go monorepo 中的無用程式碼。
- [dupl](https://github.com/mibk/dupl) - 偵測重複程式碼的工具。
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck 是檢查 Go 程式中未檢查錯誤的程式。
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext 可偵測迴圈或函式字面值中的巢狀 context。
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle 是類似 Java checkstyle 的風格檢查工具。此工具受 Java checkstyle 與 golint 啟發，風格規範參考了 Go Code Review Comments 中的部分要點。
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch 用於驗證 Go 專案中的整潔架構規則，例如相依性規則（The Dependency Rule）與套件之間的互動。
- [go-critic](https://github.com/go-critic/go-critic) - 原始碼檢查工具，提供目前其他 Linter 尚未實作的檢查項目。
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - 輕鬆找出 Go 專案中過時相依套件的方式。
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - 網頁版 Golang AST 視覺化工具。
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - 自動修正（新增、移除）Go import 的工具。
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - iFood API 的 SDK。
- [golangci-lint](https://github.com/golangci/golangci-lint) – 快速的 Go Linter 執行器。可平行執行 Linter、使用快取、支援 `yaml` 設定、整合所有主流 IDE，並內含數十種 Linter。
- [golines](https://github.com/segmentio/golines) - 自動縮短 Go 程式碼中過長行的格式化工具。
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - 內建 HTTP 連結驗證的 Markdown 檢查工具，單一執行檔，無需 Node.js。
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - 產生文字形式 PlantUML 類別圖的函式庫與 CLI，內容包含結構與介面的資訊及其相互關係。
- [goreturns](https://github.com/sqs/goreturns) - 加入零值 return 陳述式，以符合函式的回傳型別。
- [gostatus](https://github.com/shurcooL/gostatus) - 命令列工具，可顯示包含 Go 套件之儲存庫的狀態。
- [lint](https://github.com/surullabs/lint) - 將 Linter 作為 go test 的一部分執行。
- [php-parser](https://github.com/z7zmey/php-parser) - 以 Go 撰寫的 PHP 解析器。
- [revive](https://github.com/mgechev/revive) – `golint` 的直接替代品，速度快約 6 倍，更嚴格、可設定、可擴充且美觀。
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck 是超強化版的 `go vet`，套用大量你可能在 C# 的 ReSharper 等工具中熟悉的靜態分析檢查。
- [structalign](https://github.com/peczenyj/structalign) - 顯示如何重新排列結構欄位以減少記憶體用量，並輸出差異而非直接改寫檔案。
- [stto](https://github.com/mainak55512/stto) - 以純 Go 撰寫、輕量且超快速的程式碼行數計算工具。
- [testifylint](https://github.com/Antonboom/testifylint) – 檢查 [github.com/stretchr/testify](https://github.com/stretchr/testify) 使用方式的 Linter。
- [tickgit](https://github.com/augmentable-dev/tickgit) - 找出程式碼註解中的 TODO（任何語言皆可）並套用 `git blame` 以識別作者的 CLI 與 Go 套件。
- [todocheck](https://github.com/preslavmihaylov/todocheck) - 靜態程式碼分析器，可將程式碼中的 TODO 註解與議題追蹤系統中的 issue 連結起來。
- [unconvert](https://github.com/mdempsky/unconvert) - 移除 Go 原始碼中不必要的型別轉換。
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - 偵測可改用 Go 標準函式庫中變數/常數之處的 Linter。
- [vacuum](https://github.com/daveshanley/vacuum) - 超級快速、輕量的 OpenAPI 程式碼檢查與品質檢查工具。
- [validate](https://github.com/mccoyst/validate) - 使用標籤自動驗證結構欄位。
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - 檢查來自外部套件的錯誤是否已被包裝的 Linter。

**[⬆ 回到頂部](#contents)**

## 編輯器外掛

_文字編輯器與 IDE 的外掛。_

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - 此外掛為 Vim/Neovim 加入 [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) 功能。
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - Visual Studio Code 擴充功能，可在輸出中顯示定義並產生 go doc。
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - 適用於 JetBrains IDE 的 Go 外掛。
- [go-mode](https://github.com/dominikh/go-mode.el) - GNU/Emacs 的 Go 模式。
- [gocode](https://github.com/nsf/gocode) - Go 程式語言的自動完成常駐程式。
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - import 的格式化工具。
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - 此擴充功能為 VS Code 加入 Go 語言的基準測試效能剖析支援。
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - 適用於文字編輯器 SublimeText 3 的 Golang 外掛集合，提供程式碼自動完成與其他類 IDE 功能。
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - 依據函式或方法簽章產生 Go 測試的 Vim 外掛。
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - 在儲存時突顯語法錯誤的 Vim 外掛。
- [vim-go](https://github.com/fatih/vim-go) - Vim 的 Go 開發外掛。
- [vscode-go](https://github.com/golang/vscode-go) - 為 Visual Studio Code（VS Code）提供 Go 語言支援的擴充功能。
- [Watch](https://github.com/eaburns/Watch) - 在檔案變更時於 acme 視窗中執行指令。

**[⬆ 回到頂部](#contents)**

## Go Generate 工具

- [envdoc](https://github.com/g4s8/envdoc) - 從 Go 原始檔產生環境變數文件。
- [generic](https://github.com/usk81/generic) - Go 的彈性資料型別。
- [gocontracts](https://github.com/Parquery/gocontracts) - 透過同步程式碼與文件，為 Go 帶來契約式設計。
- [godal](https://github.com/mafulong/godal) - 透過指定 SQL DDL 檔案產生對應的 Golang ORM 模型，可供 gorm 使用。
- [gonerics](https://github.com/bouk/gonerics) - Go 中符合慣用風格的泛型。
- [gotests](https://github.com/cweill/gotests) - 從原始碼產生 Go 測試。
- [gounit](https://github.com/hexdigest/gounit) - 使用自己的範本產生 Go 測試。
- [hasgo](https://github.com/DylanMeeus/hasgo) - 為你的 slice 產生受 Haskell 啟發的函式。
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - 從 OpenAPI 規格的 x-constants 擴充產生具型別的 Go 常數。
- [options-gen](https://github.com/kazhuravlev/options-gen) - 實作 Dave Cheney 文章〈Functional options for friendly APIs〉中所描述的函數式選項。
- [re2dfa](https://gitlab.com/opennota/re2dfa) - 將正規表示式轉換為有限狀態機並輸出 Go 原始碼。
- [sqlgen](https://github.com/anqiansong/sqlgen) - 從 SQL 檔案或 DSN 產生 gorm、xorm、sqlx、bun、sql 程式碼。
- [TOML-to-Go](https://xuri.me/toml-to-go) - 在瀏覽器中即時將 TOML 轉換為 Go 型別。
- [xgen](https://github.com/xuri/xgen) - XSD（XML Schema Definition）解析器與 Go/C/Java/Rust/TypeScript 程式碼產生器。

**[⬆ 回到頂部](#contents)**

## Go 工具

- [decouple](https://github.com/bobg/decouple) - 找出可用介面型別一般化的「過度指定」函式參數。
- [docs](https://github.com/go-oas/docs) - 為 Go 專案自動產生 RESTful API 文件，符合 Open API 規格標準。
- [go-callvis](https://github.com/TrueFurby/go-callvis) - 使用 dot 格式視覺化 Go 程式的呼叫圖。
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - 分析並視覺化已編譯 Golang 執行檔中各相依項的大小，深入了解它們對最終建置的影響。
- [go-swagger](https://github.com/go-swagger/go-swagger) - Go 的 Swagger 2.0 實作。Swagger 是一種簡單卻強大的 RESTful API 描述方式。
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - 建立與測試 Go 範本的互動式環境。
- [godbg](https://github.com/tylerwince/godbg) - Rust `dbg!` 巨集的實作，可在開發期間快速輕鬆地除錯。
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - 在整個程式碼庫中找出實作指定 Go 介面的所有結構。
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - 執行並快取 go.mod 檔案中所含執行檔的 Go 工具。
- [gotemplate.io](https://gotemplate.io/) - 即時預覽 `text/template` 範本的線上工具。
- [gotestdox](https://github.com/bitfield/gotestdox) - 將 Go 測試結果顯示為易讀的句子。
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks 會自動為你 go.mod 中的 GitHub 相依項加上星號，藉此向維護者表達支持。
- [gotutor](https://github.com/ahmedakef/gotutor) - 線上 Go 除錯器與視覺化工具。
- [govisual](https://github.com/doganarif/govisual) - 零設定、純 Go 的 HTTP 請求視覺化與除錯工具，適用於本機 Go Web 開發。
- [igo](https://github.com/rocketlaunchr/igo) - igo 至 Go 的轉譯器（為 Go 語言帶來新的語言功能！）
- [lensm](https://github.com/loov/lensm) - Go 組合語言與原始碼檢視器。
- [modver](https://github.com/bobg/modver) - 比較 Go 模組的兩個版本，依據 [semver](https://semver.org/) 規則檢查所需的版本號變更（主要、次要或修補層級）。
- [MoniGO](https://github.com/iyashjayesh/monigo) - Go 應用程式的效能監控函式庫。提供應用程式效能的即時洞察！🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - 透過 GitHub 的 OctoLinker 瀏覽器擴充功能，高效瀏覽 Go 檔案。
- [richgo](https://github.com/kyoh86/richgo) - 以文字裝飾豐富 `go test` 的輸出。
- [roumon](https://github.com/becheran/roumon) - 透過命令列介面監控所有作用中 goroutine 的目前狀態。
- [rts](https://github.com/galeone/rts) - RTS：response to struct。從伺服器回應產生 Go 結構。
- [textra](https://github.com/ravsii/textra) - 擷取 Go 結構的欄位名稱、型別與標籤，以便篩選與匯出。
- [typex](https://github.com/dtgorski/typex) - 檢視 Go 型別及其遞移相依項，也可將結果匯出為 TypeScript 值物件（或型別）宣告。

**[⬆ 回到頂部](#contents)**

## 軟體套件

_以 Go 撰寫的軟體。_

**[⬆ 回到頂部](#contents)**

### DevOps 工具

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate 是以可設定的分隔符號將長字串縮短的工具，例如可將分支名稱嵌入部署堆疊 ID 中。
- [alaz](https://github.com/ddosify/alaz) - 輕鬆、低負擔、以 eBPF 為基礎的 Kubernetes 監控。
- [aptly](https://github.com/aptly-dev/aptly) - aptly 是 Debian 套件庫管理工具。
- [aurora](https://github.com/xuri/aurora) - 跨平台、網頁版的 Beanstalkd 佇列伺服器主控台。
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - 直接在終端機中診斷 AWS 成本、偵測閒置資源並最佳化雲端支出 🩺 ☁️。
- [awsenv](https://github.com/soniah/awsenv) - 為設定檔載入 Amazon（AWS）環境變數的小型執行檔。
- [Balerter](https://github.com/balerter/balerter) - 自架、以腳本為基礎的警示管理器。
- [Blast](https://github.com/dave/blast) - 用於 API 負載測試與批次作業的簡單工具。
- [bombardier](https://github.com/codesenberg/bombardier) - 快速的跨平台 HTTP 基準測試工具。
- [cassowary](https://github.com/rogerwelin/cassowary) - 以 Go 撰寫的現代跨平台 HTTP 負載測試工具。
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - 協助應用程式承受隨機執行個體故障的韌性工具。
- [colima](https://github.com/abiosoft/colima) - 只需最少設定即可在 macOS（與 Linux）上使用的容器執行環境。
- [Ddosify](https://github.com/ddosify/ddosify) - 以 Golang 撰寫的高效能負載測試工具。
- [decompose](https://github.com/s0rg/decompose) - 產生與處理 Docker 容器連線圖的工具。
- [Den](https://github.com/us/den) - 為 AI 代理打造的自架沙箱執行環境。E2B 的開源替代方案。
- [DepCharge](https://github.com/centerorbit/depcharge) - 協助在大型專案的眾多相依項之間編排指令的執行。
- [dish](https://github.com/thevxn/dish) - 輕量、可遠端設定的監控服務。
- [Docker](https://www.docker.com/) - 為開發者與系統管理員打造的分散式應用程式開放平台。
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - 使用 MinGW 工具鏈為 Windows 建置 Go 執行檔的 Docker 映像。
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - 將 Docker 磁碟區備份至本機，或任何相容 S3、WebDAV、Azure Blob Storage、Dropbox 或 SSH 的儲存空間。
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - 透過各種輸入管道產生有效 Dockerfile 的 Go 函式庫與執行檔。
- [docklite](https://github.com/benzjeremy/docklite) - 輕量級的 Portainer 替代方案，用於管理 Docker 容器，並提供即時 SSE 指標。
- [dogo](https://github.com/liudng/dogo) - 監控原始檔變更，並自動編譯與執行（重新啟動）。
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - 使用執行檔、Docker 或 Drone CI 觸發下游 Jenkins 作業。
- [drone-scp](https://github.com/appleboy/drone-scp) - 使用執行檔、Docker 或 Drone CI 透過 SSH 複製檔案與建置產物。
- [Dropship](https://github.com/chrismckenzie/dropship) - 透過 CDN 部署程式碼的工具。
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - 透過 SSH 輕鬆遠端執行，並經由 `ProxyCommand` 以 SCP 下載的 Golang 套件。
- [fac](https://github.com/mkchoi212/fac) - 修正 Git 合併衝突的命令列使用者介面。
- [Flannel](https://github.com/flannel-io/flannel) - Flannel 是專為 Kubernetes 設計的容器網路架構。
- [Fleet device management](https://github.com/fleetdm/fleet) - 適用於伺服器與工作站的輕量、可程式化遙測。
- [gaia](https://github.com/gaia-pipeline/gaia) - 以任何程式語言建構強大的管線。
- [ghorg](https://github.com/gabrie30/ghorg) - 快速將整個組織/使用者的儲存庫複製到同一個目錄中，支援 GitHub、GitLab、Gitea 與 Bitbucket。
- [Gitea](https://github.com/go-gitea/gitea) - Gogs 的分支，完全由社群驅動。
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - 將你所有的 GitHub 儲存庫、issue、里程碑與標籤遷移至你的 Gitea 執行個體。
- [gitl](https://github.com/akomyagin/gitl) - 以 AI 審查 Git 提交範圍，提供風險評分（低/中/高）、變更日誌產生與多儲存庫活動摘要。附 GitHub Action。
- [go-furnace](https://github.com/go-furnace/go-furnace) - 以 Go 撰寫的託管解決方案。輕鬆將應用程式部署至 AWS、GCP 或 DigitalOcean。
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - 打造可自我更新之 Go 應用程式的簡單方式，支援 Github 與 Gitlab。
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - 讓你的 Go 應用程式能夠自我更新。
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew 讓你輕鬆在多個 Go 版本之間切換。
- [gobrew](https://github.com/kevincobain2000/gobrew) - Go 版本管理器。安裝與管理 Go 版本的超簡單工具。無需 root 即可安裝 Go。Gobrew 不需要 shell rehash。
- [godbg](https://github.com/sirnewton01/godbg) - 網頁版 gdb 前端應用程式。
- [Gogs](https://gogs.io/) - 以 Go 程式語言撰寫的自架 Git 服務。
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - 輕量級 API 閘道與反向代理，具備宣告式設定、穩健的中介軟體，並支援 REST、GraphQL、TCP、UDP 與 gRPC。
- [gonative](https://github.com/inconshreveable/gonative) - 建立可交叉編譯至所有平台之 Go 建置的工具，同時仍可使用啟用 Cgo 的標準函式庫套件版本。
- [govvv](https://github.com/ahmetalpbalkan/govvv) - 「go build」的包裝器，可輕鬆將版本資訊加入 Go 執行檔。
- [grapes](https://github.com/yaronsumel/grapes) - 輕鬆透過 SSH 分發指令的輕量級工具。
- [GVM](https://github.com/moovweb/gvm) - GVM 提供管理 Go 版本的介面。
- [Hey](https://github.com/rakyll/hey) - Hey 是向 Web 應用程式施加負載的小程式。
- [httpref](https://github.com/dnnrly/httpref) - httpref 是便利的 CLI 參考工具，涵蓋 HTTP 方法、狀態碼、標頭，以及 TCP 與 UDP 連接埠。
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI 讓你輕鬆管理 Jenkins。
- [k0s](https://github.com/k0sproject/k0s) - 零摩擦的 Kubernetes 發行版。
- [k3d](https://github.com/k3d-io/k3d) - 在 Docker 中執行 CNCF k3s 的小幫手。
- [k3s](https://github.com/k3s-io/k3s) - 輕量級 Kubernetes。
- [k6](https://github.com/grafana/k6) - 使用 Go 與 JavaScript 的現代負載測試工具。
- [k9s](https://github.com/derailed/k9s) - 時尚地管理叢集的 Kubernetes CLI。
- [kala](https://github.com/ajvb/kala) - 精簡、現代且高效能的作業排程器。
- [kcli](https://github.com/cswank/kcli) - 檢視 Kafka topic/分區/訊息的命令列工具。
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker：用於測試 Kubernetes 的本機叢集。
- [ko](https://github.com/google/ko) - 在 Kubernetes 上建置與部署 Go 應用程式的命令列工具。
- [kool](https://github.com/kool-dev/kool) - 輕鬆管理 Docker 環境的命令列工具。
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks 是開源控制平面，可在 K8s 上執行與管理資料庫、訊息佇列及其他資料基礎設施。
- [kubefwd](https://github.com/txn2/kubefwd) - 批次進行 Kubernetes 連接埠轉送，為每個服務提供獨立 IP，以利本機開發。
- [kubernetes](https://github.com/kubernetes/kubernetes) - Google 出品的容器叢集管理器。
- [kubeshark](https://github.com/kubeshark/kubeshark) - 受 Wireshark 啟發、專為 Kubernetes 打造的 API 流量分析器。
- [KubeVela](https://github.com/kubevela/kubevela) - 雲端原生應用程式交付。
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN 提供雲端原生開發環境，可無縫連接至你的 Kubernetes 叢集網路。
- [KusionStack](https://github.com/KusionStack/kusion) - 統一的可程式化設定技術堆疊，以「平台即程式碼」與「基礎設施即程式碼」的方式交付現代應用程式。
- [kwatch](https://github.com/abahmed/kwatch) - 即時監控並偵測 Kubernetes（K8s）叢集中的當機。
- [lstags](https://github.com/ivanilves/lstags) - 在不同登錄庫之間同步 Docker 映像的工具與 API。
- [lwc](https://github.com/timdp/lwc) - 會即時更新的 UNIX wc 指令版本。
- [manssh](https://github.com/xwjdsh/manssh) - manssh 是輕鬆管理 SSH 別名設定的命令列工具。
- [Mantil](https://github.com/mantil-io/mantil) - 專為 Go 設計、用於在 AWS 上建構無伺服器應用程式的框架，讓你專注於純 Go 程式碼，基礎設施則交由 Mantil 處理。
- [minikube](https://github.com/kubernetes/minikube) - 在本機執行 Kubernetes。
- [Moby](https://github.com/moby/moby) - 容器生態系的協作專案，用於組裝以容器為基礎的系統。
- [Mora](https://github.com/emicklei/mora) - 存取 MongoDB 文件與中繼資料的 REST 伺服器。
- [mq-studio](https://github.com/amigoer/mq-studio) - 跨平台桌面用戶端，用於管理與監控 RocketMQ、RabbitMQ、Kafka、Pulsar、Redis Stream、MQTT、NATS 與 ActiveMQ 叢集。
- [ostent](https://github.com/ostrost/ostent) - 收集並顯示系統指標，並可選擇轉送至 Graphite 和/或 InfluxDB。
- [Packer](https://github.com/mitchellh/packer) - Packer 是從單一來源設定為多個平台建立相同機器映像的工具。
- [Pewpew](https://github.com/bengadbois/pewpew) - 彈性的 HTTP 命令列壓力測試工具。
- [pingtower](https://github.com/crleonard/pingtower) - 適用於網站與 API 的輕量級自架運作時間監控工具。
- [PipeCD](https://github.com/pipe-cd/pipecd) - GitOps 風格的持續交付平台，為任何應用程式提供一致的部署與維運體驗。
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo 是以 Go 製作的小型 Web 應用程式，展示在 Kubernetes 中執行微服務的最佳實務。Flux 與 Flagger 等 CNCF 專案使用 Podinfo 進行端對端測試與工作坊。
- [podman-tui](https://github.com/containers/podman-tui) - 用於管理 Podman 的終端機 UI。
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium 是具身分感知能力的存取代理。
- [Rodent](https://github.com/alouche/rodent) - Rodent 協助你管理 Go 版本與專案，並追蹤相依套件。
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - 支援 GET、PUT 與 DELETE 方法及身分驗證（OpenID Connect 與 Basic Auth）的 S3 代理。
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - 針對與 Amazon S3 之間高速傳輸大型物件而最佳化的小型工具/函式庫。
- [s5cmd](https://github.com/peak/s5cmd) - 極速的 S3 與本機檔案系統執行工具。
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - 從命令列管理裸機伺服器（像使用 Docker 一樣簡單）。
- [script](https://github.com/bitfield/script) - 讓你輕鬆以 Go 撰寫類似 shell 的腳本，處理 DevOps 與系統管理任務。
- [sg](https://github.com/ChristopherRabotin/sg) - 對一組 HTTP 端點進行基準測試（類似 ab），並可在每次呼叫之間利用回應碼與資料，依據前一次回應對伺服器施加特定壓力。
- [sigma](https://github.com/go-sigma/sigma) - OCI 原生的容器映像登錄庫，支援 OCI 原生成品、成品掃描、映像建置等。
- [skm](https://github.com/TimothyYe/skm) - SKM 是簡單而強大的 SSH 金鑰管理器，協助你輕鬆管理多組 SSH 金鑰！
- [sortie](https://github.com/sortie-ai/sortie) - 將追蹤系統中的工單轉換為自主程式設計代理的工作階段。
- [StatusOK](https://github.com/sanathp/statusok) - 監控你的網站與 REST API。當伺服器停機或回應時間超出預期時，透過 Slack、電子郵件接收通知。
- [tau](https://github.com/taubyte/tau) - 輕鬆建構雲端運算平台，提供無伺服器 WebAssembly 函式、前端託管、CI/CD、物件儲存、鍵值資料庫與發布/訂閱訊息等功能。
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - Terraform 提供者外掛，可在執行期依據包含所公開 API 定義的 OpenAPI 文件（前身為 swagger 檔案）動態完成自身設定。
- [tf-profile](https://github.com/datarootsio/tf-profile) - Terraform 執行的效能剖析工具。可產生全域統計、資源層級統計或視覺化圖表。
- [tickstem/uptime](https://github.com/tickstem/uptime) - HTTP 運作時間監控的 Go 用戶端，提供 SSL 到期警示與可設定的回應斷言。
- [tlm](https://github.com/yusufcanb/tlm) - 由 CodeLLaMa 驅動的本機 CLI 副駕駛。
- [traefik](https://github.com/containous/traefik) - 支援多種後端的反向代理與負載平衡器。
- [trubka](https://github.com/xitonix/trubka) - 管理 Apache Kafka 叢集並排除故障的 CLI 工具，能以通用方式向 Kafka 發布/從 Kafka 消費 Protocol Buffers 與純文字事件。
- [Updatecli](https://github.com/updatecli/updatecli) - 通用的宣告式更新策略引擎。
- [uTask](https://github.com/ovh/utask) - 對以 YAML 宣告的業務流程進行建模並執行的自動化引擎。
- [Vegeta](https://github.com/tsenart/vegeta) - HTTP 負載測試工具與函式庫。戰鬥力超過 9000！
- [wait-for](https://github.com/dnnrly/wait-for) - （從命令列）等待某件事發生後再繼續。輕鬆編排 Docker 服務及其他事物。
- [Wide](https://wide.b3log.org/login) - 供使用 Golang 的團隊使用的網頁版 IDE。
- [winrm-cli](https://github.com/masterzen/winrm-cli) - 在 Windows 機器上遠端執行指令的 CLI 工具。
- [zerohand](https://github.com/nilpoona/zerohand) - 簡單高效的 Web API 負載測試工具。

**[⬆ 回到頂部](#contents)**

### 其他軟體

- [Backrest](https://github.com/garethgeorge/backrest) - restic 備份的網頁版 UI 與編排工具。
- [Better Go Playground](https://goplay.tools) - 具備語法突顯、程式碼自動完成等功能的 Go Playground。
- [blocky](https://github.com/0xERR0R/blocky) - 快速輕量的 DNS 代理，可作為區域網路的廣告封鎖器，功能豐富。
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - 適用於 Linux 的 TUI 藍牙管理器。
- [borg](https://github.com/crufter/borg) - 以終端機為基礎的 bash 程式碼片段搜尋引擎。
- [boxed](https://github.com/tejo/boxed) - 以 Dropbox 為基礎的部落格引擎。
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar 是以 Go 打造的跨平台 Postman 替代方案，旨在協助開發者測試 API 端點，支援 HTTP 與 gRPC 協定。
- [Cherry](https://github.com/rafael-santiago/cherry) - 以 Go 撰寫的小型網頁聊天伺服器。
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - 自架的公開輻射地圖，用於匯入、分析與視覺化量測軌跡。
- [Circuit](https://github.com/gocircuit/circuit) - Circuit 是可程式化的平台即服務（PaaS）和/或基礎設施即服務（IaaS），用於管理、探索、同步與編排構成雲端應用程式的服務與主機。
- [claude-grep](https://github.com/evoleinik/claude-grep) - 以正規表示式與語意（向量）搜尋查找 Claude Code 工作階段歷史。
- [Comcast](https://github.com/tylertreat/Comcast) - 模擬不良的網路連線。
- [confd](https://github.com/kelseyhightower/confd) - 使用範本以及來自 etcd 或 consul 的資料管理本機應用程式設定檔。
- [crawley](https://github.com/s0rg/crawley) - 適用於 CLI 的網頁擷取/爬蟲工具。
- [croc](https://github.com/schollz/croc) - 輕鬆安全地將檔案或資料夾從一台電腦傳送到另一台電腦。
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - 適用於 Windows 與 Linux 的輕量級軟體快取清理工具。
- [dispositio](https://github.com/tsraveling/dispositio) - 以簡單 Markdown 規劃大型專案的終端機工具。
- [Documize](https://github.com/documize/community) - 整合 SaaS 工具資料的現代 Wiki 軟體。
- [dp](https://github.com/scryinfo/dp) - 透過與區塊鏈交換資料的 SDK，開發者可以輕鬆投入 DApp 開發。
- [drive](https://github.com/odeke-em/drive) - 命令列版的 Google Drive 用戶端。
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - 以無鎖去重複化概念為基礎的跨平台網路與雲端備份工具。
- [fjira](https://github.com/mk-5/fjira) - 以模糊搜尋為基礎、適用於 Attlasian Jira 的終端機 UI 應用程式。
- [Gebug](https://github.com/moshebe/gebug) - 無縫啟用除錯器與熱重載功能，讓 Docker 化 Go 應用程式的除錯變得超級簡單的工具。
- [gfile](https://github.com/Antonito/gfile) - 透過 WebRTC 在兩台電腦之間安全傳輸檔案，無需任何第三方。
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - 顯示 GOPATH 中 Go 套件更新的應用程式。
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - 影片串流 BT 用戶端。
- [goblin](https://goblin.run) - 以 Go 語言撰寫之 CLI 的雲端建置工具。
- [GoBoy](https://github.com/Humpheh/goboy) - 以 Go 撰寫的任天堂 Game Boy Color 模擬器。
- [gocc](https://github.com/goccmack/gocc) - Gocc 是以 Go 撰寫的 Go 編譯器工具組。
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - 適用於 Go Doc 網站的 Chrome 擴充功能，可在函式清單中以工具提示顯示函式說明。
- [Gokapi](https://github.com/Forceu/gokapi) - 輕量級檔案分享伺服器，檔案會在達到設定的下載次數或天數後過期。類似 Firefox Send，但不開放公開上傳。
- [GoLand](https://jetbrains.com/go) - 功能完整的跨平台 Go IDE。
- [GoNB](https://github.com/janpfeifer/gonb) - 在 Jupyter Notebooks 中進行互動式 Go 程式設計（也可在 VSCode、Binder 與 Google Colab 中使用）。
- [GooseForum](https://github.com/leancodebox/GooseForum) - 以 Go、Vue 與 Tailwind CSS 打造的自架論壇平台。
- [Gor](https://github.com/buger/gor) - HTTP 流量複製工具，可即時將正式環境的流量重播到預備/開發環境。
- [Guora](https://github.com/meloalright/guora) - 以 Go 撰寫、類似 Quora 的自架 Web 應用程式。
- [GURL](https://github.com/matveynator/gurl) - 當 CURL 說你的 SSL 函式庫太舊時，就用 GURL。單一檔案，零 SSL 相依。
- [hoofli](https://github.com/dnnrly/hoofli) - 從 Chrome 或 Firefox 的網路檢查結果產生 PlantUML 圖表。
- [hotswap](https://github.com/edwingeng/hotswap) - 無需重新啟動伺服器即可重新載入 Go 程式碼的完整解決方案，不會中斷或阻塞任何進行中的程序。
- [hugo](https://gohugo.io/) - 快速且現代化的靜態網站引擎。
- [ide](https://github.com/thestrukture/ide) - 可透過瀏覽器存取的 IDE。以 Go 為 Go 打造。
- [joincap](https://github.com/assafmo/joincap) - 合併多個 pcap 檔案的命令列工具。
- [JuiceFS](https://github.com/juicedata/juicefs) - 建構於 Redis 與 AWS S3 之上的分散式 POSIX 檔案系統。
- [Juju](https://jujucharms.com/) - 不依賴特定雲端的服務部署與編排，支援 EC2、Azure、Openstack、MAAS 等。
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - 隨需點對點檔案系統，可掛載遠端資料夾並以預讀隱藏連線延遲，採用 X25519 與 ML-KEM-1024 混合加密進行端對端加密。
- [Layli](https://layli.app) - 以程式碼繪製漂亮的版面配置圖。
- [Leaps](https://github.com/jeffail/leaps) - 使用操作轉換（Operational Transforms）的結對程式設計服務。
- [lgo](https://github.com/yunabe/lgo) - 搭配 Jupyter 進行互動式 Go 程式設計。支援程式碼自動完成、程式碼檢查，並 100% 相容 Go。
- [LightCMS](https://github.com/jonradoff/lightcms) - 自架的內容管理系統，具備靜態頁面產生、角色型存取控制，以及用於代理驅動內容作業的 MCP 伺服器。
- [limetext](https://limetext.github.io) - Lime Text 是主要以 Go 開發、強大而優雅的文字編輯器，目標是成為 Sublime Text 的自由開源後繼者。
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE 是簡單、開源、跨平台的 Go IDE。
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - 以預覽為優先、用於清理 macOS 快取、日誌與暫存檔的 TUI。
- [mdv](https://github.com/Allra-Fintech/mdv) - 在瀏覽器中渲染 Markdown 檔案的 CLI 工具，支援即時重新載入、GFM、語法突顯、Mermaid 圖表與 PDF 匯出。
- [mockingjay](https://github.com/quii/mockingjay-server) - 從單一設定檔建立假 HTTP 伺服器與消費者驅動契約。也能讓伺服器隨機出錯，以協助進行更貼近真實的效能測試。
- [myLG](https://github.com/mehrdadrad/mylg) - 以 Go 撰寫的命令列網路診斷工具。
- [naclpipe](https://github.com/unix4fun/naclpipe) - 以 Go 撰寫、以 NaCL EC25519 為基礎的簡單加密管道工具。
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay 重生，迎向新時代。
- [nes](https://github.com/fogleman/nes) - 以 Go 撰寫的任天堂紅白機（NES）模擬器。
- [onWatch](https://github.com/onllm-dev/onWatch) - 在本機監控各供應商的 AI API 配額，提供歷史追蹤、警示與網頁儀表板，避免意外遭到節流或超出預算。
- [Orbit](https://github.com/gulien/orbit) - 執行指令並從範本產生檔案的簡單工具。
- [peg](https://github.com/pointlander/peg) - Peg（解析表達文法，Parsing Expression Grammar）是 Packrat 解析器產生器的實作。
- [Plakar](https://github.com/PlakarKorp/plakar) - 加密、去重複化、可驗證且可擴展的備份引擎，無廠商鎖定。
- [Plik](https://github.com/root-gg/plik) - Plik 是以 Go 撰寫的臨時檔案上傳系統（類似 Wetransfer）。
- [portal](https://github.com/SpatiumPortae/portal) - Portal 是快速簡便的命令列檔案傳輸工具，可在任意兩台電腦之間傳輸。
- [restic](https://github.com/restic/restic) - 具去重複化功能的備份程式。
- [sake](https://github.com/alajmo/sake) - sake 是適用於本機與遠端主機的指令執行器。
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code，非常快速且精確的程式碼計數工具，並提供複雜度計算與 COCOMO 估算。
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - 針對 MS Project 匯出之 Excel/CSV 進行 DCMA 14 點時程評估的 CLI。
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - 快速、簡單且可擴展的分散式檔案系統，磁碟搜尋為 O(1)。
- [shell2http](https://github.com/msoap/shell2http) - 透過 HTTP 伺服器執行 shell 指令（適用於原型開發或遠端控制）。
- [Snitch](https://github.com/lucasgomide/snitch) - 當有人透過 Tsuru 部署任何應用程式時，通知團隊與多種工具的簡單方式。
- [sonic](https://github.com/go-sonic/sonic) - Sonic 是以 Go 撰寫的部落格平台。簡單而強大。
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Spotify 的桌面螢幕保護程式，具備數位 OLED 時鐘、canvas 音訊視覺化與 MPRIS 控制。
- [Stack Up](https://github.com/pressly/sup) - Stack Up 是超簡單的部署工具，只用 Unix，可以把它想成用於伺服器網路的「make」。
- [stew](https://github.com/marwanhawari/stew) - 獨立的已編譯執行檔套件管理器。
- [syncthing](https://syncthing.net/) - 開放、去中心化的檔案同步工具與協定。
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - 以 eBPF 為基礎的 TCP 可觀測性。
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - 小型終端機應用程式，顯示過去 24 小時與一週內的 Git 提交、目前天氣、一些自我照顧建議、一則笑話，以及你目前的待辦事項。
- [tldx](https://github.com/brandonyoungdev/tldx) - 批次檢查網域是否可註冊的工具，使用 RDAP、DNS 並以 WHOIS 作為備援，還能產生關鍵字排列組合。
- [toxiproxy](https://github.com/shopify/toxiproxy) - 為自動化測試模擬網路與系統狀況的代理。
- [tsuru](https://tsuru.io/) - 可擴充的開源平台即服務（PaaS）軟體。
- [untis-go](https://github.com/benzjeremy/untis-go) - 給學生與教師使用的快速原生 WebUntis 桌面用戶端。提供側邊欄導覽、課表、作業、缺席紀錄與訊息。以 AES-256-GCM 加密憑證、SQLite 快取優先，並以隨機連接埠提升安全性。
- [vaku](https://github.com/lingrino/vaku) - 為 Vault 提供以資料夾為基礎之功能（如複製、移動與搜尋）的 CLI 與 API。
- [vFlow](https://github.com/VerizonDigital/vflow) - 高效能、可擴展且可靠的 IPFIX、sFlow 與 Netflow 收集器。
- [Wave Terminal](https://waveterm.dev) - Wave 是開源、AI 原生的終端機，專為流暢的開發者工作流程打造，具備行內渲染、現代化 UI 與持久化工作階段。
- [wellington](https://github.com/wellington/wellington) - Sass 專案管理工具，以 sprite 函式擴充該語言（類似 Compass）。
- [woke](https://github.com/get-woke/woke) - 偵測原始碼中不具包容性的用語。
- [yai](https://github.com/ekkinox/yai) - AI 驅動的終端機助理。
- [zs](https://git.mills.io/prologic/zs) - 極度精簡的靜態網站產生器。

**[⬆ 回到頂部](#contents)**

# 資源

_探索新 Go 函式庫的去處。_

**[⬆ 回到頂部](#contents)**

## 基準測試

- [autobench](https://github.com/davecheney/autobench) - 比較不同 Go 版本之間效能的框架。
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - 結合 Аb、Wrk、Siege 等工具的強大 HTTP 基準測試工具。可收集基準測試的統計資料與各項參數，並比較結果。
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - 一些雜項 Go 微基準測試。將部分語言功能與替代做法進行比較。
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Go HTTP 請求路由器的基準測試與比較。
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Go JSON 基準測試。
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Go 機器學習推論的基準測試。
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Go Web 框架基準測試。
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Go 序列化方法的基準測試。
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Go 語言常見基本操作的基準測試。
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - Golang 基準測試合集。
- [gospeed](https://github.com/feyeleanor/GoSpeed) - 計算語言結構速度的 Go 微基準測試。
- [kvbench](https://github.com/jimrobinson/kvbench) - 鍵值資料庫基準測試。
- [skynet](https://github.com/atemerev/skynet) - Skynet 百萬執行緒微基準測試。
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - 比較 Go 語言的各種影像縮放演算法。
- [vizb](https://github.com/goptics/vizb) - 以 4D 視覺化 Go 基準測試資料的 CLI 工具。

**[⬆ 回到頂部](#contents)**

## 研討會

- [GoCon](https://gocon.connpass.com/) - 日本東京。
- [GoDays](https://www.godays.io/) - 德國柏林。
- [GoLab](https://golab.io/) - 義大利佛羅倫斯。
- [GopherCon](https://www.gophercon.com/) - 美國，每年地點不同。
- [GopherCon Africa](https://gophercon.africa/) - 肯亞奈洛比。
- [GopherCon Australia](https://gophercon.com.au/) - 澳洲雪梨。
- [GopherCon Brazil](https://gopherconbr.org) - 巴西弗洛里亞諾波利斯。
- [GopherCon China](https://gophercon.com.cn) - 中國上海。
- [GopherCon Europe](https://gophercon.eu/) - 德國柏林。
- [GopherCon India](https://gopherconindia.org/) - 印度浦那。
- [GopherCon Israel](https://www.gophercon.org.il/) - 以色列特拉維夫。
- [GopherCon Russia](https://www.gophercon-russia.ru) - 俄羅斯莫斯科。
- [GopherCon Singapore](https://gophercon.sg) - 新加坡豐樹商業城（Mapletree Business City）。
- [GopherCon UK](https://www.gophercon.co.uk/) - 英國倫敦。
- [GopherCon Vietnam](https://gophercon.vn/) - 越南胡志明市。
- [GoWest Conference](https://www.gowestconf.com/) - 美國利哈伊（Lehi）。

**[⬆ 回到頂部](#contents)**

## 電子書

### 付費電子書

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - 寫給駭客與滲透測試人員的 Go 程式設計。
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - 這本持續交付實務指南會教你如何快速建立自動化管線，以改善測試、程式碼品質與最終產品。
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - TinyGo 編譯器入門，並包含涉及 Arduino 與 WebAssembly 的專案。
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - 掌握 Go 對程式設計的獨特觀點，開始撰寫簡單、可維護且可測試的 Go 程式碼。
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - 給 Go 初學者的入門書。
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Go 開發的全方位實務指南，涵蓋標準函式庫以及 Go 強大生態系中最重要的工具。
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - 理解與使用 Go 泛型的指南。
- [Lets-Go](https://lets-go.alexedwards.net) - 一步步教你使用 Go 建立快速、安全且可維護之 Web 應用程式的指南。
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - 以 Go 建構 API 與 Web 應用程式的進階模式。
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Go 測試指南。
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - 以 Go 撰寫命令列工具的指南。
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - 介紹數十種技巧的書籍，教你撰寫符合慣用風格、富表達力且高效的 Go 程式碼，並避開常見陷阱。

### 免費電子書

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - 兼具基礎與實務的指南，帶你有效學習，並以 Go 與 gRPC 從零開始逐步打造區塊鏈。
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - 聚焦於 Go 語法/語意與各種細節的書籍。
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - 聚焦於 Go `go/*` 套件的書籍。
- [Go Faster](https://leanpub.com/gofaster) - 本書旨在縮短你的學習曲線，幫助你更快成為熟練的 Go 程式設計師。
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - 波斯文版。
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - 透過實際重構展示如何應用 DDD、整潔架構與 CQRS 的書籍。
- [GoBooks](https://github.com/dariubs/GoBooks) - 精選的 Go 書籍清單。
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - 一本 600 頁、為初次接觸程式開發者撰寫的 Go 入門書。
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ 回到頂部](#contents)**

## Gopher 吉祥物

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Maria Letta 創作的 Gopher 圖像包，包含插圖與富有情感的角色，提供向量與點陣格式。
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Go gopher 向量資料 [.ai, .svg]。
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - 可愛的 gopher 標誌。
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - 把自己 Gopher 化。
- [gophers](https://github.com/ashleymcnamara/gophers) - Ashley McNamara 創作的 Gopher 藝術作品。
- [gophers](https://github.com/egonelbre/gophers) - 免費的 gopher 圖像。
- [gophers](https://github.com/rogeralsing/gophers) - 各式各樣的 gopher 圖像。
- [gophers](https://github.com/sillecelik/go-gopher) - Gopher 鉤織玩偶（amigurumi）圖樣。
- [gophers](https://github.com/scraly/gophers) - Aurélie Vache 創作的 Gopher。

**[⬆ 回到頂部](#contents)**

## 聚會

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

_在此新增你所在城市/國家的社群（請送出 **PR**）_

**[⬆ 回到頂部](#contents)**

## 風格指南

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ 回到頂部](#contents)**

## 社群媒體

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ 回到頂部](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ 回到頂部](#contents)**

## 網站

- [Awesome Go @LibHunt](https://go.libhunt.com) - 你的首選 Go 工具箱。
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - 精選的優秀 Golang 工作坊清單。
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - 精選的優秀遠端工作清單。其中許多職缺正在尋找 Go 高手。
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - 收錄其他超棒 awesome 清單的清單。
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - 解析 awesome-go README 檔案，並產生附帶儲存庫資訊的新 README 檔案。
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - 軟體工程師，並在 codewithmukesh.com 撰寫部落格。
- [Coding Mystery](https://codingmystery.com) - 使用 Go 解決受密室逃脫啟發、令人興奮的程式設計挑戰。
- [CodinGame](https://www.codingame.com/) - 透過以小遊戲為實例的互動式任務學習 Go。
- [Go Blog](https://blog.golang.org) - 官方 Go 部落格。
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - 一群 Gopher 每週閱讀並討論一個不同的 Go 專案。
- [Go Community on Hashnode](https://hashnode.com/n/go) - Hashnode 上的 Gopher 社群。
- [Go Forum](https://forum.golangbridge.org) - 討論 Go 的論壇。
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Go 社群 Wiki 上的專案清單。
- [Go Proverbs](https://go-proverbs.github.io/) - Rob Pike 的 Go 箴言。
- [Go Report Card](https://goreportcard.com) - 你的 Go 套件成績單。
- [go.dev](https://go.dev/) - Go 開發者的中心。
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - 需要協助的 Go 專案集合。是開始你的 Go 開源之路的好地方。
- [Golang Developer Jobs](https://golangjob.xyz) - 專門提供 Golang 相關職位的開發者工作。
- [Golang News](https://golangnews.com) - Go 程式設計相關的連結與新聞。
- [Golang Nugget](https://golangnugget.com) - 每週精選最佳 Go 內容，於每週一寄送到你的信箱。
- [Golang Weekly](https://discu.eu/weekly/golang/) - 每週一提供 Go 相關的專案、教學與文章。
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Go 郵件論壇。
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - 加入我們專為 Gopher 打造的全新 Slack 社群（[了解它的由來](https://blog.gopheracademy.com/gophers-slack-community/)）。
- [Gophercises](https://gophercises.com/) - 給新手 Gopher 的免費程式練習。
- [json2go](https://m-zajac.github.io/json2go) - 進階的 JSON 至 Go 結構轉換線上工具。
- [justforfunc](https://www.youtube.com/c/justforfunc) - 專門介紹 Go 程式語言技巧與訣竅的 Youtube 頻道，由 Francesc Campoy [@francesc](https://twitter.com/francesc) 主持。
- [Learn Go Programming](https://blog.learngoprogramming.com) - 透過插圖學習 Go 概念。
- [Libs.tech](https://libs.tech/go) – 優秀的 Go 函式庫與遺珠之作。
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - 開源 Go 套件的文件。
- [studygolang](https://studygolang.com) - 中國的 studygolang 社群。
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - 尋找新 Go 函式庫的好地方。
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ 回到頂部](#contents)**

### 教學

- [50 Shades of Go](https://golang50shades.github.io/) - Golang 新手開發者常見的陷阱、易錯之處與常見錯誤。
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - 深入探索 Go 的結構化日誌世界，特別聚焦於近期通過的 slog 提案，該提案旨在為標準函式庫帶來具等級的高效能結構化日誌。
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - 以 Golang 建置電子商務網站（含示範）。
- [A Tour of Go](https://tour.golang.org/) - Go 的互動式導覽。
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - 以 1000 行程式碼從零打造 NoSQL 資料庫。
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - 介紹如何用 Golang 建構 Web 應用程式的 Golang 電子書。
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - 我們將藉助強大的 Gorilla Mux 撰寫 API。
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - 熟悉 Gin，並了解它如何協助你減少樣板程式碼並建構請求處理管線。
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - 如何快取緩慢的資料庫查詢。
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - 如何取消 MySQL 查詢。
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - 透過親手打造 Redis、Docker、Git 與 SQLite 精通進階 Go。內容涵蓋 goroutine、系統程式設計、檔案 I/O 等。
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - 以 Go 實作的程式設計模式合集。
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - 教授程式設計與遊戲開發的影片系列。
- [Go By Example](https://gobyexample.com/) - 透過附註解的範例程式，動手學習 Go 入門。
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Go 的速查卡。
- [Go database/sql tutorial](http://go-database-sql.org/) - database/sql 入門。
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - 7 天學會 Go 的一切（由一位 Nodejs 開發者撰寫）。
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Go 語言學習教學。
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - 學習 Go 程式設計。
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - 適用於 Golang 服務的整潔架構範本。
- [go-patterns](https://github.com/tmrts/go-patterns) - 精選的 Go 設計模式、做法與慣用寫法清單。
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - 透過與 Node.js 比較的 Golang 範例來學習。
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - 學習 Go 程式語言的免費課程清單。
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - 大量學習 Golang 的範例。
- [Golangbot](https://golangbot.com/learn-golang-series/) - 帶你入門 Go 程式設計的教學。
- [GopherCoding](https://gophercoding.com/) - 協助解決日常問題的程式碼片段與教學合集。
- [GopherSnippets](https://gophersnippets.com/) - 附有測試與可測試範例的 Go 程式語言程式碼片段。
- [Gosamples](https://gosamples.dev/) - 讓你解決日常程式問題的程式碼片段合集。
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - 學習如何透過程式碼產生建立 Go GraphQL 伺服器與用戶端。也包含建立 REST 端點。
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - 從 Golang 程式設計社群提交並票選的最佳線上 Golang 教學中學習 Go。
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - 使用六角形架構撰寫可維護程式碼的入門指南。
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - 學習如何在 Go 中進行基準測試。我們將以 dbq、sqlx 與 GORM 的基準測試作為案例研究。
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - 學習如何使用 Docker 進行 Go 開發，以及如何建置正式環境的 Docker 映像。
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - 在 Golang 中實作角色型存取控制（RBAC）的指南，附程式碼範例，涵蓋以角色型授權保護應用程式端點的各種方法。
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - 開始使用 Godog：用於建構與測試 Go 應用程式的行為驅動開發框架。
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - 透過數千個範例、練習與測驗學習 Go。
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - 透過測試驅動開發學習 Go。
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - 以具體應用程式為範例學習 Golang 語言的系列文章。
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - 深入探討如何使用 Go 建構微服務，包含 gRPC。
- [package main](https://www.youtube.com/packagemain) - 關於 Go 程式設計的 YouTube 頻道。
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - 從零開始學習 Go 的 Coursera 專項課程。
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - 關於在正式環境中建置、部署與擴展 Go 應用程式的一切。
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - 以視覺化方式學習 Go。
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic 提供深入的教學與條理分明的內容，助你學習 Golang 程式設計。
- [Your basic Go](https://yourbasic.org/golang) - 大量教學與操作指南合集。

**[⬆ 回到頂部](#contents)**

### 引導式學習

- [The Go Developer Roadmap](https://roadmap.sh/golang) - 視覺化路線圖，新手 Go 開發者可依循學習 Go。
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - 提供程式設計挑戰、協助準備 Go 技術面試的 GitHub 儲存庫。
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - 結合免費與付費資源的引導式學習路徑。
- [The Go Skill Tree](https://labex.io/skilltrees/go) - 結合免費與付費資源的結構化學習路徑。

**[⬆ 回到頂部](#contents)**

## 貢獻

歡迎貢獻！相關準則請參閱我們的 [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)。

## 授權條款

本專案採用 [MIT 授權條款](https://github.com/avelino/awesome-go/blob/main/LICENSE)授權，詳情請參閱 LICENSE 檔案。
