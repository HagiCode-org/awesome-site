# Awesome Go

<a href="https://awesome-go.com/"><img align="right" src="https://github.com/avelino/awesome-go/raw/main/tmpl/assets/logo.png" alt="awesome-go" title="awesome-go" /></a>

[![Build Status](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml/badge.svg?branch=main)](https://github.com/avelino/awesome-go/actions/workflows/tests.yaml?query=branch%3Amain)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Slack Widget](https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red)](https://gophers.slack.com/messages/awesome)
[![Netlify Status](https://api.netlify.com/api/v1/badges/83a6dcbe-0da6-433e-b586-f68109286bd5/deploy-status)](https://app.netlify.com/sites/awesome-go/deploys)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/avelino/awesome-go/)
[![Last Commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go/commits/main)

我们使用 _[Golang Bridge](https://github.com/gobridge/about-us/blob/master/README.md)_ 社区的 Slack 进行即时交流，请通过[此表单加入](https://invite.slack.golangbridge.org/)。

<a href="https://www.producthunt.com/posts/awesome-go?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awesome-go" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291535&theme=light" alt="awesome-go - Curated list of awesome Go frameworks, libraries and software | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

**赞助：**

_特别鸣谢_

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

**Awesome Go 不收取任何月费**_，但我们有员工在**努力工作**以维持它的运转。有了筹集到的资金，我们就能回报每一位参与者的付出！我们如何计算账单和分配对整个社区公开，你可以随时查看。想成为本项目的支持者，请点击[这里](mailto:avelinorun+oss@gmail.com?subject=awesome-go%3A%20project%20support)。_

> 精选的优秀 Go 框架、库和软件列表。灵感来自 [awesome-python](https://github.com/vinta/awesome-python)。

**参与贡献：**

请先快速浏览一下[贡献指南](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)。感谢所有[贡献者](https://github.com/avelino/awesome-go/graphs/contributors)，你们太棒了！

> _如果你发现这里的某个包或项目已不再维护或不太合适，请提交拉取请求来改进此文件。谢谢！_

## 目录

<details>
<summary>展开目录</summary>

- [Awesome Go](#awesome-go)
  - [目录](#contents)
  - [Actor 模型](#actor-model)
  - [人工智能](#artificial-intelligence)
  - [音频与音乐](#audio-and-music)
  - [身份验证与授权](#authentication-and-authorization)
  - [区块链](#blockchain)
  - [机器人构建](#bot-building)
  - [构建自动化](#build-automation)
  - [命令行](#command-line)
    - [高级控制台界面](#advanced-console-uis)
    - [标准 CLI](#standard-cli)
  - [配置](#configuration)
  - [持续集成](#continuous-integration)
  - [CSS 预处理器](#css-preprocessors)
  - [数据集成框架](#data-integration-frameworks)
  - [数据结构与算法](#data-structures-and-algorithms)
    - [位打包与压缩](#bit-packing-and-compression)
    - [位集](#bit-sets)
    - [布隆过滤器与布谷鸟过滤器](#bloom-and-cuckoo-filters)
    - [数据结构与算法合集](#data-structure-and-algorithm-collections)
    - [迭代器](#iterators)
    - [映射](#maps)
    - [其他数据结构与算法](#miscellaneous-data-structures-and-algorithms)
    - [可空类型](#nullable-types)
    - [队列](#queues)
    - [集合](#sets)
    - [文本分析](#text-analysis)
    - [树](#trees)
    - [管道](#pipes)
  - [数据库](#database)
    - [缓存](#caches)
    - [用 Go 实现的数据库](#databases-implemented-in-go)
    - [数据库模式迁移](#database-schema-migration)
    - [数据库工具](#database-tools)
    - [SQL 查询构建器](#sql-query-builders)
  - [数据库驱动](#database-drivers)
    - [多后端接口](#interfaces-to-multiple-backends)
    - [关系型数据库驱动](#relational-database-drivers)
    - [NoSQL 数据库驱动](#nosql-database-drivers)
    - [搜索与分析型数据库](#search-and-analytic-databases)
  - [日期与时间](#date-and-time)
  - [分布式系统](#distributed-systems)
  - [动态 DNS](#dynamic-dns)
  - [电子邮件](#email)
  - [可嵌入脚本语言](#embeddable-scripting-languages)
  - [错误处理](#error-handling)
  - [文件处理](#file-handling)
  - [金融](#financial)
  - [表单](#forms)
  - [函数式编程](#functional)
  - [游戏开发](#game-development)
  - [生成器](#generators)
  - [地理信息](#geographic)
  - [Go 编译器](#go-compilers)
  - [Goroutine](#goroutines)
  - [图形用户界面（GUI）](#gui)
  - [硬件](#hardware)
  - [图像](#images)
  - [物联网（IoT）](#iot-internet-of-things)
  - [作业调度器](#job-scheduler)
  - [JSON](#json)
  - [日志](#logging)
  - [机器学习](#machine-learning)
  - [消息传递](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [杂项](#miscellaneous)
    - [依赖注入](#dependency-injection)
    - [项目布局](#project-layout)
    - [字符串](#strings)
    - [未分类](#uncategorized)
  - [自然语言处理](#natural-language-processing)
    - [语言检测](#language-detection)
    - [形态分析器](#morphological-analyzers)
    - [Slug 生成器](#slugifiers)
    - [分词器](#tokenizers)
    - [翻译](#translation)
    - [音译](#transliteration)
  - [网络](#networking)
    - [HTTP 客户端](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [包管理](#package-management)
  - [性能](#performance)
  - [查询语言](#query-language)
  - [反射](#reflection)
  - [资源嵌入](#resource-embedding)
  - [科学计算与数据分析](#science-and-data-analysis)
  - [安全](#security)
  - [序列化](#serialization)
  - [服务器应用](#server-applications)
  - [流处理](#stream-processing)
  - [模板引擎](#template-engines)
  - [测试](#testing)
    - [测试框架](#testing-frameworks)
    - [模拟（Mock）](#mock)
    - [模糊测试与增量调试/精简/收缩](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium 与浏览器控制工具](#selenium-and-browser-control-tools)
    - [故障注入](#fail-injection)
  - [文本处理](#text-processing)
    - [格式化工具](#formatters)
    - [标记语言](#markup-languages)
    - [解析器/编码器/解码器](#parsersencodersdecoders)
    - [正则表达式](#regular-expressions)
    - [内容净化](#sanitation)
    - [爬虫](#scrapers)
    - [RSS](#rss)
    - [实用工具/杂项](#utilitymiscellaneous)
  - [第三方 API](#third-party-apis)
  - [实用工具](#utilities)
  - [UUID](#uuid)
  - [验证](#validation)
  - [版本控制](#version-control)
  - [视频](#video)
  - [Web 框架](#web-frameworks)
    - [中间件](#middlewares)
      - [实际中间件](#actual-middlewares)
      - [用于创建 HTTP 中间件的库](#libraries-for-creating-http-middlewares)
    - [路由器](#routers)
  - [WebAssembly](#webassembly)
  - [Webhook 服务器](#webhooks-server)
  - [Windows](#windows)
  - [工作流框架](#workflow-frameworks)
  - [XML](#xml)
  - [零信任](#zero-trust)
  - [代码分析](#code-analysis)
  - [编辑器插件](#editor-plugins)
  - [Go Generate 工具](#go-generate-tools)
  - [Go 工具](#go-tools)
  - [软件包](#software-packages)
    - [DevOps 工具](#devops-tools)
    - [其他软件](#other-software)
- [资源](#resources)
  - [基准测试](#benchmarks)
  - [会议](#conferences)
  - [电子书](#e-books)
    - [付费电子书](#e-books-for-purchase)
    - [免费电子书](#free-e-books)
  - [Gopher 形象](#gophers)
  - [技术聚会](#meetups)
  - [风格指南](#style-guides)
  - [社交媒体](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [网站](#websites)
    - [教程](#tutorials)
    - [引导式学习](#guided-learning)
  - [贡献](#contribution)
  - [许可证](#license)

**[⬆ 返回顶部](#contents)**



</details>

## Actor 模型

_用于构建基于 Actor 模型的程序的库。_

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - 图控制流库（AOP、Actor、状态机）。
- [Ergo](https://github.com/ergo-services/ergo) - 基于 Actor 的框架，具备网络透明性，用于在 Golang 中创建事件驱动架构。灵感来自 Erlang。
- [Goakt](https://github.com/Tochemey/goakt) - 快速的分布式 Actor 框架，使用 Protocol Buffers 作为 Golang 的消息格式。
- [Hollywood](https://github.com/anthdm/hollywood) - 用 Golang 编写的极速、轻量级 Actor 引擎。
- [ProtoActor](https://github.com/asynkron/protoactor-go) - 适用于 Go、C# 和 Java/Kotlin 的分布式 Actor。

**[⬆ 返回顶部](#contents)**

## 人工智能

_用于构建利用人工智能的程序的库。_

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - AI 网关，用于在 10 多家提供商之间路由、保护和监控 LLM 流量。提供兼容 OpenAI 的 API、WASM 策略插件、金丝雀发布和实时仪表盘。
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - AI 智能体执行运行时，支持事件溯源、检查点恢复和“至多一次”（At-Most-Once）执行保证。使用 Go 编写。
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - 用于在 Go 中构建有状态 AI 智能体的框架。
- [agy-mcp](https://github.com/tphakala/agy-mcp) - 封装 Antigravity CLI 的模型上下文协议（MCP）服务器，用于运行提示词和同行评审。
- [ai](https://github.com/joakimcarlsson/ai) - 用于跨多家提供商构建 AI 智能体和应用的 Go 工具包，提供统一的 LLM、嵌入、工具调用和 MCP 集成。
- [ai-gateway](https://github.com/ferro-labs/ai-gateway) - 兼容 OpenAI 的 LLM 网关，可在 30 家提供商之间路由请求，支持回退、限流、预算、护栏和可观测性。
- [chromem-go](https://github.com/philippgille/chromem-go) - 适用于 Go 的可嵌入向量数据库，接口类似 Chroma，零第三方依赖。基于内存，可选持久化。
- [claude-code-go](https://github.com/lancekrogers/claude-code-go) - 用于在 Go 程序中驱动 Claude Code CLI 非交互式提示接口的 Go 库。
- [crewai-go](https://github.com/rhgs/crewai-go) - CrewAI（多智能体编排）的地道 Go 移植版。零依赖，仅使用标准库。
- [Cynative](https://github.com/cynative/cynative) - 用于在 Go 中构建安全工程 AI 智能体的框架。从设计上即为只读，内置沙箱，提供 45 个智能体蓝图，可对 AWS、GCP、Azure、K8s、GitHub 和 GitLab 进行深度研究。
- [dakera-go](https://github.com/dakera-ai/dakera-go) - Dakera 自托管智能体记忆服务器的官方 Go 客户端 SDK，为记忆存储/召回、会话管理、命名空间操作和衰减配置提供类型化接口。
- [fun](https://gitlab.com/tozd/go/fun) - 在 Go 中使用大语言模型（LLM）的最简单而又强大的方式。
- [goai](https://github.com/zendev-sh/goai) - 用于构建 AI 应用的 Go SDK。一个 SDK，支持 20 多家提供商。灵感来自 Vercel AI SDK。
- [GoModel](https://github.com/ENTERPILOT/GoModel) - AI 网关，为 OpenAI、Anthropic、Gemini、Groq、xAI、Ollama 等提供商提供统一的、兼容 OpenAI 的 API，支持路由、用量跟踪、速率限制和护栏。
- [hotplex](https://github.com/hrygo/hotplex) - AI 智能体运行时引擎，为 Claude Code、OpenCode、pi-mono 等 CLI AI 工具提供长生命周期会话。提供全双工流式传输、多平台集成和安全沙箱。
- [jargo](https://github.com/gojargo/jargo) - 基于 WebRTC 构建实时语音 AI 智能体的框架，将语音转文本、LLM 和文本转语音串联成流式管道。
- [keen-code](https://github.com/mochow13/keen-code) - 高效利用上下文的终端 AI 编程智能体。与提供商无关，支持 MCP、Agent Skills、子智能体等。附带简洁直观的 TUI。
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGo 是一个用于开发由语言模型驱动的应用程序的框架。
- [langgraphgo](https://github.com/smallnest/langgraphgo) - 用于基于 LLM 构建有状态、多参与者应用的 Go 库，基于 LangGraph 的理念构建，并内置大量智能体架构。
- [llm-box](https://github.com/alib8b8/llm-box) - 基于终端的 AI 工作流引擎，提供 YAML 驱动的管道、20 多家 LLM 提供商（DeepSeek、Qwen、GLM、Mistral 等）以及用于工作流管理的 TUI。
- [LocalAI](https://github.com/mudler/LocalAI) - 开源的 OpenAI 替代品，可自托管 AI 模型。
- [localaik](https://github.com/harshaneel/localaik) - LocalStack 风格的 OpenAI 和 Gemini API 本地模拟；单个 Docker 容器，后端为 llama.cpp + Gemma 3。
- [mcp-go](https://github.com/mark3labs/mcp-go) - 模型上下文协议的 Go 实现，用于在 Go 中构建 MCP 服务器和客户端。
- [Ollama](https://github.com/jmorganca/ollama) - 在本地运行大语言模型。
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - 管理多组 Ollama 实例，并为其提供负载均衡和故障转移。
- [otellix](https://github.com/oluwajubelo1/otellix) - 原生支持 OpenTelemetry 的 LLM 可观测性与预算护栏，适用于成本受限的生产环境。
- [routex](https://github.com/Ad3bay0c/routex) - 适用于 Go 的 YAML 驱动多智能体 AI 运行时，具备 Erlang 风格的监督机制、MCP 工具服务器支持和 CLI。
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - 对 PDF、Markdown、DOCX、源代码等文件类型进行基于语义的搜索，使用生成式 AI 嵌入模型将文件向量化并存入向量数据库。
- [skillreaper](https://github.com/thousandflowers/skillreaper) - 扫描 AI 智能体会话记录的 CLI，用于识别并安全隔离 Claude Code、Codex CLI、Hermes、OpenCode、Cursor 和 OpenClaw 中未使用的技能、MCP 服务器和智能体。
- [Smeldr](https://github.com/Smeldr/core) - AI 原生的内容后端，提供类型化生命周期管理，为每种内容类型提供原生 MCP 工具，且零运行时依赖。
- [snip](https://github.com/edouard-claude/snip) - 通过声明式 YAML 过滤器将 LLM token 用量降低 60-90% 的 CLI 代理。可直接用于 Claude Code、Cursor、Copilot 和 Gemini。是 rtk 的 Go 替代品。
- [thermal](https://github.com/jadmadi/thermal) - 面向 AI 编程助手的终端贡献热力图、连续打卡追踪器和 token 排行榜。
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - 用于构建基于 LLM 的多智能体系统的框架。
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - 为 AI 助手提供网页搜索、内容提取和多源研究能力的 MCP 服务器。单个二进制文件，支持 5 个搜索提供商及熔断式故障转移，并具备 4 层抓取管道。
- [zenflow](https://github.com/zendev-sh/zenflow) - 多智能体编排与工作流引擎。声明式 YAML 工作流，带有中心辐射式邮箱的 LLM 协调器，以及无竞态的消息投递。一个 YAML 文件，一个 Go 二进制文件。可在任何 goai 支持的提供商上运行。

**[⬆ 返回顶部](#contents)**

## 音频与音乐

_用于处理音频和音乐的库。_

- [beep](https://github.com/gopxl/beep) - 用于播放和处理音频的简单库。
- [flac](https://github.com/mewkiz/flac) - 原生 Go FLAC 编码器/解码器，支持 FLAC 流。
- [gaad](https://github.com/Comcast/gaad) - 原生 Go AAC 比特流解析器。
- [go-aac](https://github.com/tphakala/go-aac) - 从 FFmpeg 移植的纯 Go AAC-LC 编码器和解码器。
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - 纯 Go 的高质量音频重采样器，支持 SIMD 加速。
- [go-flac](https://github.com/tphakala/go-flac) - 原生 Go FLAC 编码器和解码器，支持 SIMD 加速。
- [go-mpris](https://github.com/leberKleber/go-mpris) - mpris dbus 接口的客户端。
- [go-opus](https://github.com/tphakala/go-opus) - Opus 音频编解码器（RFC 6716）的原生 Go 实现，带有符合 RFC 的解码器。
- [go-resample](https://github.com/gojargo/go-resample) - 纯 Go（无 cgo）的音频采样率转换器，提供 sinc、线性和零阶保持转换器。
- [go-wav](https://github.com/tphakala/go-wav) - 纯 Go 的 WAV/RIFF 读写器，支持 RF64 和 BW64，可处理大于 4 GiB 的文件。
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - 原生 Go 音频处理库。
- [gocue](https://github.com/iSerganov/gocue) - 音频分析 CLI，可检测切入点、切出点和叠加点，并测量 EBU R128 响度，输出供 Liquidsoap 使用的 JSON。
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - libsamplerate 的 Go 绑定。
- [id3v2](https://github.com/bogem/id3v2) - 适用于 Go 的 ID3 解码与编码库。
- [malgo](https://github.com/gen2brain/malgo) - 迷你音频库。
- [minimp3](https://github.com/tosone/minimp3) - 轻量级 MP3 解码库。
- [music-theory](https://github.com/go-music-theory/music-theory) - 用 Go 实现的乐理模型。
- [Oto](https://github.com/hajimehoshi/oto) - 在多个平台上播放声音的底层库。
- [PortAudio](https://github.com/gordonklaus/portaudio) - PortAudio 音频 I/O 库的 Go 绑定。
- [voxrai-ai](https://github.com/Voxray-AI/Voxray) - 通过 JSON 配置的 AI 语音智能体，基于 WebSocket 和 WebRTC 运行 STT → LLM → TTS 管道。

**[⬆ 返回顶部](#contents)**

## 身份验证与授权

_用于实现身份验证和授权的库。_

- [authboss](https://github.com/volatiletech/authboss) - 模块化的 Web 身份验证系统。它力求尽可能消除样板代码和“棘手的事情”，让你每次用 Go 开始新的 Web 项目时，只需接入、配置即可开始构建应用，而无需每次都重新构建身份验证系统。
- [authgate](https://github.com/go-authgate/authgate) - 轻量级 OAuth 2.0 授权服务器，支持设备授权许可（[RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)）、带 PKCE 的授权码流程（[RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)），以及用于机器间身份验证的客户端凭据许可。
- [branca](https://github.com/essentialkaos/branca) - 适用于 Golang 1.15+ 的 branca 令牌[规范实现](https://github.com/tuupola/branca-spec)。
- [casbin](https://github.com/hsluoyz/casbin) - 支持 ACL、RBAC 和 ABAC 等访问控制模型的授权库。
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - 提供 cookies.txt 文件格式的解析器。
- [go-githubauth](https://github.com/jferrl/go-githubauth) - GitHub 身份验证实用工具：生成并使用 GitHub 应用令牌和安装令牌。
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardian 是一个 Golang 库，以简单、清晰且符合语言习惯的方式创建强大的现代 API 和 Web 身份验证，支持 LDAP、Basic、Bearer 令牌和基于证书的身份验证。
- [go-iam](https://github.com/melvinodsa/go-iam) - 开发者优先的身份与访问管理系统，提供简洁的用户界面。
- [go-jose](https://github.com/go-jose/go-jose) - 相当完整地实现了 JOSE 工作组的 JSON Web Token、JSON Web Signature 和 JSON Web Encryption 规范。
- [go-jwt](https://github.com/deatil/go-jwt) - 适用于 Go 的 JWT（JSON Web Token）库。
- [go-jwt](https://github.com/pardnchiu/go-jwt) - JWT 身份验证包，提供访问令牌和刷新令牌，并支持指纹识别、Redis 存储和自动刷新。
- [goiabada](https://github.com/leodip/goiabada) - 支持 OAuth2 和 OpenID Connect 的开源身份验证与授权服务器。
- [gologin](https://github.com/dghubble/gologin) - 可链式组合的处理器，用于通过 OAuth1 和 OAuth2 身份验证提供商登录。
- [gorbac](https://github.com/mikespook/gorbac) - 在 Golang 中提供轻量级的基于角色的访问控制（RBAC）实现。
- [gosession](https://github.com/Kwynto/gosession) - 这是适用于 GoLang net/http 的快速会话库。这个包或许是会话机制的最佳实现，至少它正努力成为最佳实现。
- [goth](https://github.com/markbates/goth) - 以简单、清晰且符合语言习惯的方式使用 OAuth 和 OAuth2。开箱即用地支持多个提供商。
- [jeff](https://github.com/abraithwaite/jeff) - 简单、灵活、安全且符合语言习惯的 Web 会话管理，支持可插拔后端。
- [jwt](https://github.com/pascaldekloe/jwt) - 轻量级 JSON Web Token（JWT）库。
- [jwt](https://github.com/cristalhq/jwt) - 适用于 Go 的安全、简单、快速的 JSON Web Token 库。
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - 适用于 Golang HTTP 服务器的 JWT 中间件，提供大量配置选项。
- [jwt-go](https://github.com/golang-jwt/jwt) - 功能完备的 JSON Web Token（JWT）实现。该库支持 JWT 的解析与验证，以及生成与签名。
- [jwx](https://github.com/lestrrat-go/jwx) - 实现各种 JWx（JWA/JWE/JWK/JWS/JWT，又称 JOSE）技术的 Go 模块。
- [keto](https://github.com/ory/keto) - “Zanzibar: Google's Consistent, Global Authorization System”的开源（Go）实现。提供 gRPC、REST API、newSQL，以及简单且细粒度的权限语言。支持 ACL、RBAC 及其他访问模型。
- [loginsrv](https://github.com/tarent/loginsrv) - JWT 登录微服务，支持 OAuth2（Github）、htpasswd、osiam 等可插拔后端。
- [melange](https://github.com/pthm/melange) - 将 OpenFGA 授权模式编译为 PL/pgSQL 函数，在 PostgreSQL 内部执行细粒度的基于关系的访问控制检查。
- [oauth2](https://github.com/golang/oauth2) - goauth2 的后继者。通用 OAuth 2.0 包，支持 JWT、Google API、Compute Engine 和 App Engine。
- [oidc](https://github.com/zitadel/oidc) - 易于使用的 OpenID Connect 客户端和服务器库，专为 Go 编写，并通过 OpenID 基金会认证。
- [openfga](https://github.com/openfga/openfga) - 基于“Zanzibar: Google's Consistent, Global Authorization System”论文的细粒度授权实现。由 [CNCF](https://www.cncf.io/) 支持。
- [osin](https://github.com/openshift/osin) - Golang OAuth2 服务器库。
- [otpgen](https://github.com/grijul/otpgen) - 生成 TOTP/HOTP 验证码的库。
- [otpgo](https://github.com/jltorresm/otpgo) - 适用于 Go 的基于时间的一次性密码（TOTP）和基于 HMAC 的一次性密码（HOTP）库。
- [paseto](https://github.com/o1egl/paseto) - 平台无关安全令牌（PASETO）的 Golang 实现。
- [permissions](https://github.com/xyproto/permissions) - 用于跟踪用户、登录状态和权限的库。使用安全 Cookie 和 bcrypt。
- [scope](https://github.com/SonicRoshan/scope) - 在 Go 中轻松管理 OAuth2 作用域。
- [scs](https://github.com/alexedwards/scs) - 适用于 HTTP 服务器的会话管理器。
- [securecookie](https://github.com/chmike/securecookie) - 高效的安全 Cookie 编码/解码。
- [session](https://github.com/icza/session) - 适用于 Web 服务器的 Go 会话管理（包括对 Google App Engine - GAE 的支持）。
- [sessions](https://github.com/adam-hanna/sessions) - 极其简单、高性能、高度可定制的会话服务，适用于 Go HTTP 服务器。
- [sessionup](https://github.com/swithek/sessionup) - 简单而有效的 HTTP 会话管理与识别包。
- [sjwt](https://github.com/brianvoe/sjwt) - 简单的 JWT 生成器和解析器。
- [spicedb](https://github.com/authzed/spicedb) - 受 Zanzibar 启发的数据库，支持细粒度授权。
- [x509proxy](https://github.com/vkuznet/x509proxy) - 处理 X509 代理证书的库。

**[⬆ 返回顶部](#contents)**

## 区块链

_用于构建区块链的工具。_

- [cometbft](https://github.com/cometbft/cometbft) - 分布式、拜占庭容错、确定性的状态机复制引擎。它是 Tendermint Core 的分支，实现了 Tendermint 共识算法。
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - 用于在 Cosmos 生态系统中构建公有区块链的框架。
- [gno](https://github.com/gnolang/gno) - 使用 Golang 和 Gnolang 构建的全面智能合约套件；Gnolang 是专为区块链打造的确定性 Go 变体。
- [go-ethereum](https://github.com/ethereum/go-ethereum) - 以太坊协议的官方 Go 实现。
- [gosemble](https://github.com/LimeChain/gosemble) - 基于 Go 的框架，用于构建兼容 Polkadot/Substrate 的运行时。
- [gossamer](https://github.com/ChainSafe/gossamer) - Polkadot Host 的 Go 实现。
- [kubo](https://github.com/ipfs/kubo) - IPFS 的 Go 实现。它提供内容寻址存储，可用于 DApp 中的去中心化存储。它基于 IPFS 协议。
- [lnd](https://github.com/lightningnetwork/lnd) - 闪电网络节点的完整实现。
- [nview](https://github.com/blinklabs-io/nview) - Cardano 节点的本地监控工具。它是一个 TUI（终端用户界面），可适配大多数屏幕。
- [pactus](https://github.com/pactus-project/pactus) - Pactus 区块链的 Go 全节点实现。
- [solana-go](https://github.com/gagliardetto/solana-go) - 用于对接 Solana JSON RPC 和 WebSocket 接口的 Go 库。
- [tendermint](https://github.com/tendermint/tendermint) - 高性能中间件，借助 Tendermint 共识和区块链协议，将以任意编程语言编写的状态机转换为拜占庭容错的复制状态机。
- [tronlib](https://github.com/kslamph/tronlib) - 全面且可用于生产环境的 Go SDK，用于与 TRON 区块链交互，支持 TRC20 代币。

**[⬆ 返回顶部](#contents)**

## 机器人构建

_用于构建和使用机器人的库。_

- [arikawa](https://github.com/diamondburned/arikawa) - 用于 Discord API 的库和框架。
- [bot](https://github.com/go-telegram/bot) - 零依赖的 Telegram Bot 库，附带额外的 UI 组件。
- [echotron](https://github.com/NicoNex/echotron) - 优雅且支持并发的 Go 版 Telegram Bot 库。
- [go-joe](https://joe-bot.net) - 受 Hubot 启发、用 Go 编写的通用机器人库。
- [go-sarah](https://github.com/oklahomer/go-sarah) - 为 LINE、Slack、Gitter 等所需聊天服务构建机器人的框架。
- [go-tg](https://github.com/mr-linch/go-tg) - 根据官方文档生成的 Go 客户端库，用于访问 Telegram Bot API，并内置构建复杂机器人所需的全套工具。
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - 为 twitch.tv 聊天编写机器人的库
- [micha](https://github.com/onrik/micha) - 用于 Telegram Bot API 的 Go 库。
- [slack-bot](https://github.com/innogames/slack-bot) - 为“懒惰”开发者准备的开箱即用 Slack 机器人：自定义命令、Jenkins、Jira、Bitbucket、Github……
- [slacker](https://github.com/slack-io/slacker) - 易于使用的 Slack 机器人创建框架。
- [telebot](https://github.com/tucnak/telebot) - 用 Go 编写的 Telegram 机器人框架。
- [teleflow](https://github.com/kslamph/teleflow) - 简单、类型安全的 Telegram 机器人框架，支持流畅的流程编排和自动状态管理。
- [telego](https://github.com/mymmrac/telego) - 适用于 Golang 的 Telegram Bot API 库，与 API 完全一一对应实现。
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - 简单清晰的 Telegram 机器人客户端。
- [TG](https://github.com/enetx/tg) - 适用于 Go 的 Telegram 机器人框架。
- [wayback](https://github.com/wabarc/wayback) - 用于 Telegram、Mastodon、Slack 等消息平台的网页存档机器人。
- [ymsdk](https://github.com/rekurt/ymsdk) - Yandex Messenger Bot API 的 Go SDK，提供类型安全的模型、自动重试和速率限制处理。
   - [Wisp](https://github.com/wisp-trading/wisp) - 适用于 Go 的事件驱动交易框架。支持现货、永续合约和预测市场。支持多交易所（Bybit、Hyperliquid、Polymarket）。

**[⬆ 返回顶部](#contents)**

## 构建自动化

_帮助实现构建自动化的库和工具。_

- [1build](https://github.com/gopinath-langote/1build) - 顺畅管理项目专属命令的命令行工具。
- [air](https://github.com/cosmtrek/air) - Air - Go 应用的实时重载工具。
- [anko](https://github.com/GuilhermeCaruso/anko) - 适用于多种编程语言的简单应用监视器。
- [gaper](https://github.com/maxclaus/gaper) - 在 Go 项目崩溃或被监视的文件发生变化时，重新构建并重启该项目。
- [gilbert](https://go-gilbert.github.io) - 面向 Go 项目的构建系统和任务运行器。
- [gob](https://github.com/kcmvp/gob) - 面向 Go 项目的类 [Gradle](https://docs.gradle.org/)/[Maven](https://maven.apache.org/) 构建工具。
- [goyek](https://github.com/goyek/goyek) - 用 Go 创建构建流水线。
- [mage](https://github.com/magefile/mage) - Mage 是使用 Go 的类 make/rake 构建工具。
- [mmake](https://github.com/tj/mmake) - 现代化的 Make。
- [realize](https://github.com/tockins/realize) - Go 构建系统，带有文件监视器和实时重载功能。可按自定义路径运行、构建并监视文件变化。
- [rex](https://github.com/rexrun-dev/rex) - 零配置的通用项目运行器。自动检测你的技术栈（Go、Node、Python、Rust、PHP、Zig、Elixir）并运行正确的命令。
- [Task](https://github.com/go-task/task) - 简单的“Make”替代品。
- [taskctl](https://github.com/taskctl/taskctl) - 并发任务运行器。
- [xc](https://github.com/joerdav/xc) - 以 README.md 定义任务的任务运行器，可执行的 Markdown。

**[⬆ 返回顶部](#contents)**

## 命令行

### 高级控制台界面

_用于构建控制台应用程序和控制台用户界面的库。_

- [asciigraph](https://github.com/guptarohit/asciigraph) - 在命令行应用中绘制轻量级 ASCII 折线图 ╭┈╯ 的 Go 包，无其他依赖。
- [aurora](https://github.com/logrusorgru/aurora) - 支持 fmt.Printf/Sprintf 的 ANSI 终端颜色。
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - 在终端中渲染高度可定制的方框。
- [bubble-table](https://github.com/Evertras/bubble-table) - 适用于 bubbletea 的交互式表格组件。
- [bubbles](https://github.com/charmbracelet/bubbles) - 适用于 bubbletea 的 TUI 组件。
- [bubbletea](https://github.com/charmbracelet/bubbletea) - 基于 Elm 架构构建终端应用的 Go 框架。
- [chroma16](https://github.com/arceus-7/chroma16) - 根据单个种子颜色或字符串生成和谐的 16 色终端调色板。
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - 用于 Kubernetes 清单或通用配置文件的动态配置文件模板工具。
- [ctc](https://github.com/wzshiming/ctc) - 非侵入式的跨平台终端颜色库，无需修改 Print 方法。
- [fx](https://github.com/antonmedv/fx) - 终端 JSON 查看器和处理器。
- [go-ataman](https://github.com/workanator/go-ataman) - 在终端中渲染 ANSI 彩色文本模板的 Go 库。
- [go-colorable](https://github.com/mattn/go-colorable) - 适用于 Windows 的彩色输出写入器。
- [go-colortext](https://github.com/daviddengcn/go-colortext) - 在终端中输出彩色文本的 Go 库。
- [go-isatty](https://github.com/mattn/go-isatty) - Golang 版 isatty。
- [go-palette](https://github.com/abusomani/go-palette) - 使用 ANSI 颜色提供优雅便捷的样式定义的 Go 库。完全兼容并封装了 [fmt 库](https://pkg.go.dev/fmt)，可实现美观的终端布局。
- [go-prompt](https://github.com/c-bata/go-prompt) - 用于构建强大交互式提示符的库，灵感来自 [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit)。
- [go-tui](https://github.com/grindlemire/go-tui) - 声明式终端 UI 框架，提供类似 templ 的模板、flexbox 布局，以及支持编辑器的语言服务器。
- [gocui](https://github.com/jroimartin/gocui) - 旨在创建控制台用户界面的极简 Go 库。
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - 为终端文本设置样式。
- [gookit/color](https://github.com/gookit/color) - 终端颜色渲染工具库，支持 16 色、256 色和 RGB 颜色渲染输出，兼容 Windows。
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscaf 通过交互式 CLI 生成遵循固定约定、达到生产质量的 Go 项目样板。不必再在项目之间复制粘贴骨架代码。
- [lazyenv](https://github.com/lazynop/lazyenv) - 用于浏览、比较和编辑 .env 文件的 TUI。
- [lazyteams](https://github.com/agmonetti/lazyteams) - 键盘驱动的 Microsoft Teams 终端用户界面。
- [lipgloss](https://github.com/charmbracelet/lipgloss) - 以声明方式定义终端中的颜色、格式和布局样式。
- [loom](https://github.com/loom-go/loom) - 基于信号的响应式组件框架，用于构建 TUI。
- [marker](https://github.com/cyucelen/marker) - 匹配并标记字符串以实现彩色终端输出的最简单方式。
- [mpb](https://github.com/vbauerster/mpb) - 适用于终端应用的多进度条。
- [phoenix](https://github.com/phoenix-tui/phoenix) - 高性能 TUI 框架，采用受 Elm 启发的架构，具备完美的 Unicode 渲染和零分配事件系统。
- [progressbar](https://github.com/schollz/progressbar) - 适用于所有操作系统的基础线程安全进度条。
- [pterm](https://github.com/pterm/pterm) - 借助大量可组合组件，在所有平台上美化控制台输出的库。
- [simpletable](https://github.com/alexeyco/simpletable) - 用 Go 在终端中绘制简单表格。
- [spinner](https://github.com/briandowns/spinner) - 轻松提供可配置终端加载动画（spinner）的 Go 包。
- [tabby](https://github.com/cheynewallace/tabby) - 用于创建超简单 Golang 表格的小型库。
- [table](https://github.com/tomlazar/table) - 用于基于终端颜色的表格的小型库。
- [termbox-go](https://github.com/nsf/termbox-go) - Termbox 是用于创建跨平台文本界面的库。
- [termdash](https://github.com/mum4k/termdash) - 基于 **termbox-go**、受 [termui](https://github.com/gizak/termui) 启发的 Go 终端仪表盘。
- [termenv](https://github.com/muesli/termenv) - 为终端应用提供高级 ANSI 样式和颜色支持。
- [termui](https://github.com/gizak/termui) - 基于 **termbox-go**、受 [blessed-contrib](https://github.com/yaronn/blessed-contrib) 启发的 Go 终端仪表盘。
- [uilive](https://github.com/gosuri/uilive) - 实时更新终端输出的库。
- [uiprogress](https://github.com/gosuri/uiprogress) - 在终端应用中渲染进度条的灵活库。
- [uitable](https://github.com/gosuri/uitable) - 使用表格数据提升终端应用可读性的库。
- [vhs](https://github.com/charmbracelet/vhs) - 你的 CLI 家庭录像机——通过代码生成终端 GIF，用于文档和教程。
- [yacspin](https://github.com/theckman/yacspin) - 又一个 CLI 加载动画（spinner）包，用于处理终端加载动画。

**[⬆ 返回顶部](#contents)**

### 标准 CLI

_用于构建标准或基础命令行应用程序的库。_

- [acmd](https://github.com/cristalhq/acmd) - 简单、实用且遵循固定约定的 Go CLI 包。
- [argparse](https://github.com/akamensky/argparse) - 受 Python argparse 模块启发的命令行参数解析器。
- [argv](https://github.com/cosiner/argv) - 使用 bash 语法将命令行字符串拆分为参数数组的 Go 库。
- [boa](https://github.com/GiGurra/boa) - 通过结构体标签声明式地定义标志、环境变量、验证和配置文件。基于 cobra 构建。
- [carapace](https://github.com/rsteube/carapace) - 适用于 spf13/cobra 的命令参数补全生成器。
- [carapace-bin](https://github.com/rsteube/carapace-bin) - 支持多种 shell、多种命令的参数补全工具。
- [carapace-spec](https://github.com/rsteube/carapace-spec) - 使用规范文件定义简单的补全。
- [climax](https://github.com/tucnak/climax) - 具有“人性化外观”的替代 CLI，秉承 Go 命令的精神。
- [clîr](https://github.com/leaanthony/clir) - 简单清晰的 CLI 库。无依赖。
- [cmd](https://github.com/posener/cmd) - 以符合语言习惯的方式扩展标准 `flag` 包，支持子命令等功能。
- [cmdr](https://github.com/hedzr/cmdr) - POSIX/GNU 风格、类 getopt 的命令行 UI Go 库。
- [cobra](https://github.com/spf13/cobra) - 用于现代 Go CLI 交互的命令器。
- [command-chain](https://github.com/rainu/go-command-chain) - 用于配置和运行命令链（例如 Unix shell 中的管道）的 Go 库。
- [commandeer](https://github.com/jaffee/commandeer) - 对开发者友好的 CLI 应用：根据结构体字段和标签设置标志、默认值和用法说明。
- [complete](https://github.com/posener/complete) - 用 Go 编写 bash 补全 + Go 命令的 bash 补全。
- [console](https://github.com/reeflective/console) 适用于 Cobra 命令的闭环应用库，支持 oh-my-posh 提示符等功能。
- [Dnote](https://github.com/dnote/dnote) - 支持多设备同步的简单命令行笔记本。
- [elvish](https://github.com/elves/elvish) - 一门富有表现力的编程语言，也是一个多功能交互式 shell。
- [env](https://github.com/codingconcepts/env) - 基于标签的结构体环境配置。
- [flaggy](https://github.com/integrii/flaggy) - 健壮且符合语言习惯的标志包，对子命令有出色支持。
- [flagvar](https://github.com/sgreben/flagvar) - 适用于 Go 标准 `flag` 包的标志参数类型集合。
- [flash-flags](https://github.com/agilira/flash-flags) - 极速、零依赖、符合 POSIX 的标志解析库，可直接替换标准库，并经过安全加固。
- [Fling-CLI](https://github.com/SatyamKumarCS/Fling-CLI) - 基于终端的点对点文件和消息传输工具，运行在自定义的可靠 UDP 之上。
- [getopt](https://github.com/jon-codes/getopt) - 精确的 Go 版 `getopt`，已对照 GNU libc 实现进行验证。
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - 用于搭建 Go 应用脚手架的 CLI 工具，支持极简、标准和六边形架构模式。
- [go-arg](https://github.com/alexflint/go-arg) - Go 中基于结构体的参数解析。
- [go-flags](https://github.com/jessevdk/go-flags) - Go 命令行选项解析器。
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - 受 Perl 的 GetOpt::Long 灵活性启发的 Go 选项解析器。
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - 可定制的行编辑库，支持 Emacs 键绑定、Unicode、补全和语法高亮。用于 NYAGOS shell。
- [gocmd](https://github.com/devfacet/gocmd) - 用于构建命令行应用程序的 Go 库。
- [goopt](https://github.com/napalu/goopt) - 声明式、基于结构体标签的 Go CLI 框架，功能丰富，支持分层命令/标志、国际化、shell 补全和验证等。
- [GoPOSIX](https://github.com/ramayac/GoPOSIX) - Go 原生的单二进制多调用程序，包含 77 个 POSIX 工具，BusyBox 测试兼容率超过 97%。
- [hashicorp/cli](https://github.com/hashicorp/cli) - 用于实现命令行界面的 Go 库。
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - 支持自动配置和依赖注入的 CLI 应用框架。
- [job](https://github.com/liujianping/job) - JOB，将你的短期命令变成长期作业。
- [kingpin](https://github.com/alecthomas/kingpin) - 支持子命令的命令行和标志解析器（已被 `kong` 取代；见下文）。
- [liner](https://github.com/peterh/liner) - 用于命令行界面的类 readline Go 库。
- [mcli](https://github.com/jxskiss/mcli) - 精简但非常强大的 Go CLI 库。
- [memsh](https://github.com/amjadjibon/memsh) - 用 Go 实现的虚拟 bash shell：在内存文件系统（afero）上执行 shell 命令，支持 WASM 插件，并提供可嵌入的 HTTP 服务器。
- [mkideal/cli](https://github.com/mkideal/cli) - 基于 Golang 结构体标签、功能丰富且易于使用的命令行包。
- [mow.cli](https://github.com/jawher/mow.cli) - 用于构建 CLI 应用的 Go 库，具备完善的标志与参数解析和验证功能。
- [neuron-cli](https://github.com/steevin/neuron-cli) - 本地优先、兼容 Obsidian 的终端知识管理器。
- [OpenCLI](https://github.com/bcdxn/opencli) - OpenAPI 风格的 CLI 规范；在与语言无关的文档中定义接口，即可生成文档和框架样板代码。
- [ops](https://github.com/nanovms/ops) - Unikernel 构建器/编排器。
- [orpheus](https://github.com/agilira/orpheus) - 具备安全加固、插件存储系统和生产级可观测性功能的 CLI 框架。
- [pflag](https://github.com/spf13/pflag) - Go flag 包的直接替代品，实现 POSIX/GNU 风格的 --flags。
- [readline](https://github.com/reeflective/readline) - 具有现代且易用 UI 功能的 shell 库。
- [sflags](https://github.com/octago/sflags) - 基于结构体的标志生成器，适用于 flag、urfave/cli、pflag、cobra、kingpin 等库。
- [structcli](https://github.com/leodido/structcli) - 消除 Cobra 样板代码：从 Go 结构体以声明方式构建强大且功能丰富的 CLI。
- [strumt](https://github.com/antham/strumt) - 用于创建提示链的库。
- [subcmd](https://github.com/bobg/subcmd) - 解析和运行子命令的另一种方法。可与标准 `flag` 包配合使用。
- [teris-io/cli](https://github.com/teris-io/cli) - 在 Go 中构建命令行界面的简单而完整的 API。
- [urfave/cli](https://github.com/urfave/cli) - 在 Go 中构建命令行应用的简单、快速且有趣的包（前身为 codegangsta/cli）。
- [version](https://github.com/mszostok/version) - 以多种格式收集并显示 CLI 版本信息，并附带升级提示。
- [wlog](https://github.com/dixonwille/wlog) - 支持跨平台颜色和并发的简单日志接口。
- [wmenu](https://github.com/dixonwille/wmenu) - 易于使用的菜单结构，适用于提示用户做出选择的 CLI 应用。

**[⬆ 返回顶部](#contents)**

## 配置

_用于解析配置的库。_

- [aconfig](https://github.com/cristalhq/aconfig) - 简单、实用且遵循固定约定的配置加载器。
- [argus](https://github.com/agilira/argus) - 文件监视与配置管理，采用 MPSC 环形缓冲区、自适应批处理策略和通用格式解析（JSON、YAML、TOML、INI、HCL、Properties）。
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - 配置提供程序，用于在 Go 应用中使用 Azure App Configuration 中的数据。
- [bcl](https://github.com/wkhere/bcl) - BCL 是一种类似 HCL 的配置语言。
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - 极简的配置读取器（可从文件、ENV 以及任何你想要的地方读取）。
- [config](https://github.com/JeremyLoy/config) - 云原生应用配置。只需两行代码即可将 ENV 绑定到结构体。
- [config](https://github.com/num30/config) - 用两行代码通过文件、环境变量或标志配置你的应用。
- [config](https://github.com/andreiavrammsd/config) - 基于结构体的配置加载器，带有专用的配置文件解析器，支持环境变量、标志、默认值和验证。
- [configuration](https://github.com/BoRuDar/configuration) - 通过环境变量、文件、标志和 'default' 标签初始化配置结构体的库。
- [configuro](https://github.com/sherifabdlnaby/configuro) - 遵循固定约定的配置加载与验证框架，从 ENV 和文件加载配置，面向符合 12-Factor 的应用。
- [confiq](https://github.com/greencoda/confiq) - 将结构化数据格式解码为配置结构体的 Go 库，支持多种数据格式。
- [confita](https://github.com/heetch/confita) - 从多个后端级联加载配置到结构体中。
- [conflate](https://github.com/the4thamigo-uk/conflate) - 用于合并来自任意 URL 的多个 JSON/YAML/TOML 文件、根据 JSON Schema 进行验证并应用 Schema 中定义的默认值的库/工具。
- [enflag](https://github.com/atelpis/enflag) - 面向容器、零依赖的配置库，统一了环境变量和标志的解析。使用泛型实现类型安全，无需反射或结构体标签。
- [env](https://github.com/caarlos0/env) - 将环境变量解析到 Go 结构体（支持默认值）。
- [env](https://github.com/junk1tm/env) - 将环境变量加载到结构体中的轻量级包。
- [env](https://github.com/syntaqx/env) - 环境变量实用工具包，支持反序列化到结构体。
- [envconfig](https://github.com/vrischmann/envconfig) - 从环境变量读取配置。
- [envh](https://github.com/antham/envh) - 管理环境变量的辅助工具。
- [envyaml](https://github.com/yuseferi/envyaml) - 支持环境变量的 Yaml 读取器。它让你可以将机密信息保存为环境变量，同时以结构化 Yaml 形式加载配置。
- [fig](https://github.com/kkyr/fig) - 从文件和环境变量读取配置的小型库（支持验证和默认值）。
- [genv](https://github.com/sakirsensoy/genv) - 轻松读取环境变量，支持 dotenv。
- [go-array](https://github.com/deatil/go-array) - 从 map、切片或 JSON 读取或设置数据的 Go 包。
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - 从 AWS System Manager - Parameter Store 获取参数的 Go 包。
- [go-cfg](https://github.com/dsbasko/go-cfg) - 该库提供统一的方式，从环境变量、标志和配置文件（.json、.yaml、.toml、.env）等各种来源将配置数据读取到结构体中。
- [go-conf](https://github.com/ThomasObenaus/go-conf) - 基于带注解结构体的简单应用配置库。支持从环境变量、配置文件和命令行参数读取配置。
- [go-config](https://github.com/MordaTeam/go-config) - 处理应用配置的简单便捷库。
- [go-external-config](https://github.com/go-external-config/go) - 受 Spring 启发的 Go 配置管理库。
- [go-external-config/aws](https://github.com/go-external-config/aws) - 为 go-external-config 提供 AWS 属性源支持。
- [go-external-config/consul](https://github.com/go-external-config/consul) - 为 go-external-config 提供 Consul 属性源支持。
- [go-external-config/vault](https://github.com/go-external-config/vault) - 为 go-external-config 提供 Vault 属性源支持。
- [go-ini](https://github.com/subpop/go-ini) - 对 INI 文件进行序列化和反序列化的 Go 包。
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - 从 AWS SSM（Parameter Store）加载配置参数的 Go 实用工具。
- [go-up](https://github.com/ufoscout/go-up) - 简单的配置库，支持递归占位符解析，没有任何“魔法”。
- [go-yamlvalidator](https://github.com/Yakwilik/go-yamlvalidator) - 感知源位置的 YAML 验证，支持原生 Go 模式和 JSON Schema。
- [GoCfg](https://github.com/Jagerente/gocfg) - 配置管理器，支持基于结构体标签的契约、自定义值提供程序、解析器和文档生成。可定制且简单。
- [goconfig](https://github.com/fulldump/goconfig) - 按确定的优先级从标志、环境变量、config.json 和默认值填充 Go 结构体。无额外依赖。
- [godotenv](https://github.com/joho/godotenv) - Ruby dotenv 库的 Go 移植版（从 `.env` 加载环境变量）。
- [goenv](https://github.com/psyb0t/goenv) - 读取 ENV 环境变量，并报告进程运行在生产环境还是开发环境。
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Config 是一个适用于 Go 编程语言的轻量而强大的配置管理器。
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - 模块化 JSON 配置。让配置结构体与其所配置的代码放在一起，并将解析委托给子模块，同时不牺牲完整的配置序列化。
- [gonfig](https://github.com/milad-abbasi/gonfig) - 基于标签的配置解析器，可将来自不同提供程序的值加载到类型安全的结构体中。
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - 通过反射将环境变量中的配置加载到结构体中，支持结构体标签默认值和必填字段。
- [gookit/config](https://github.com/gookit/config) - 应用配置管理（加载、获取、设置）。支持 JSON、YAML、TOML、INI、HCL。支持多文件加载和数据覆盖合并。
- [harvester](https://github.com/beatlabs/harvester) - Harvester 是一个易于使用的静态与动态配置包，支持种子值、环境变量和 Consul 集成。
- [hedzr/store](https://github.com/hedzr/store) - 可扩展的高性能配置管理库，针对分层数据进行了优化。
- [hjson](https://github.com/hjson/hjson-go) - Human JSON，一种为人类设计的配置文件格式。语法宽松，错误更少，注释更多。
- [hocon](https://github.com/gurkankaymak/hocon) - 处理 HOCON（一种对人类友好的 JSON 超集）格式的配置库，支持环境变量、引用其他值、注释和多文件等功能。
- [ini](https://github.com/go-ini/ini) - 读写 INI 文件的 Go 包。
- [ini](https://github.com/wlevene/ini) - INI 解析与写入库，支持反序列化到结构体、序列化为 JSON、写入文件和监视文件。
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - 管理来自环境变量的配置数据的 Go 库。
- [koanf](https://github.com/knadh/koanf) - 在 Go 应用中读取配置的轻量级可扩展库。内置支持 JSON、TOML、YAML、环境变量和命令行。
- [konf](https://github.com/nil-go/konf) - 从文件、环境变量、标志和云（例如 AWS、Azure、GCP）读取/监视配置的最简单 API。
- [konfig](https://github.com/lalamove/konfig) - 面向分布式处理时代、可组合、可观测且高性能的 Go 配置处理库。
- [kong](https://github.com/alecthomas/kong) - 命令行解析器，支持任意复杂的命令行结构，以及 YAML、JSON、TOML 等额外配置来源（`kingpin` 的后继者）。
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - 读取环境变量的简单实用包。
- [nfigure](https://github.com/muir/nfigure) - 按库划分、基于结构体标签的配置，来源包括命令行（Posix 和 Go 风格）、环境变量、JSON、YAML
- [onion](https://github.com/goraz/onion) - 基于分层的 Go 配置，支持 JSON、TOML、YAML、properties、etcd、环境变量以及 PGP 加密。
- [piper](https://github.com/Yiling-J/piper) - Viper 封装，支持配置继承和键生成。
- [sonic](https://github.com/bytedance/sonic) - 极速的 JSON 序列化与反序列化库。
- [swap](https://github.com/oblq/swap) - 根据构建环境递归地实例化/配置结构体。（YAML、TOML、JSON 和环境变量）。
- [typenv](https://github.com/diegomarangoni/typenv) - 极简、零依赖、带类型的环境变量库。
- [uConfig](https://github.com/omeid/uconfig) - 轻量级、零依赖且可扩展的配置管理。
- [viper](https://github.com/spf13/viper) - 功能强悍的 Go 配置库。
- [xdg](https://github.com/adrg/xdg) - [XDG 基础目录规范](https://specifications.freedesktop.org/basedir-spec/latest/)和 [XDG 用户目录](https://wiki.archlinux.org/index.php/XDG_user_directories)的 Go 实现。
- [yamagiconf](https://github.com/romshark/yamagiconf) - 用于 Go 配置的 YAML“安全子集”。
- [zerocfg](https://github.com/chaindead/zerocfg) - 零成本、简洁的配置管理，避免样板代码和重复代码，支持多个来源并可按优先级覆盖。

**[⬆ 返回顶部](#contents)**

## 持续集成

_辅助持续集成的工具。_

- [abstruse](https://github.com/bleenco/abstruse) - Abstruse 是一个分布式 CI 平台。
- [Bencher](https://bencher.dev/) - 一套持续基准测试工具，旨在于 CI 中捕获性能回退。
- [CDS](https://github.com/ovh/cds) - 企业级 CI/CD 与 DevOps 自动化开源平台。
- [dot](https://github.com/opnlabs/dot) - 精简、本地优先的持续集成系统，使用 Docker 分阶段并发运行作业。
- [drone](https://github.com/drone/drone) - Drone 是一个基于 Docker 构建、用 Go 编写的持续集成平台。
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - 免费的 GitHub Action，可在拉取请求中跟踪代码覆盖率，并提供美观的 HTML 预览。
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - 在 GitHub Actions 中使用 Go 1.18 内置的模糊测试。
- [go-semver-release](https://github.com/s0ders/go-semver-release) - 自动化 Git 仓库的语义化版本管理。
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - 当测试覆盖率低于设定阈值时报告问题的 GitHub Action。
- [gomason](https://github.com/nikogura/gomason) - 在干净的工作区中测试、构建、签名并发布你的 Go 二进制文件。
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - 让 go test 的输出更适合人类阅读。
- [goveralls](https://github.com/mattn/goveralls) - Coveralls.io 持续代码覆盖率跟踪系统的 Go 集成。
- [muffet](https://github.com/raviqqe/muffet) - 用 Go 编写的快速网站链接检查器，另请参阅[替代方案](https://github.com/lycheeverse/lychee#features)。
- [overalls](https://github.com/go-playground/overalls) - 为 goveralls 等工具生成多包 Go 项目的 coverprofile。
- [PikoCI](https://github.com/pikoci/pikoci) - 受 Concourse 启发的自托管 CI/CD。单个二进制文件，支持任意数据库和任意队列。HCL 流水线，可插拔的资源类型和运行器。
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - 递归覆盖率测试工具。
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - Woodpecker 是 Drone CI 系统的社区分支。

**[⬆ 返回顶部](#contents)**

## CSS 预处理器

_用于预处理 CSS 文件的库。_

- [go-css](https://github.com/napsy/go-css) - 用 Go 编写的非常简单的 CSS 解析器。
- [go-libsass](https://github.com/wellington/go-libsass) - 100% 兼容 Sass 的 libsass 项目的 Go 封装。

**[⬆ 返回顶部](#contents)**

## 数据集成框架

_用于执行 ELT / ETL 的框架_

- [Benthos](https://github.com/benthosdev/benthos) - 在多种协议之间进行消息流传输的桥梁。
- [CloudQuery](http://github.com/cloudquery/cloudquery) - 采用可插拔架构的高性能 ELT 数据集成框架。
- [confluence2md](https://github.com/gkoos/confluence2md) - Confluence 转 Markdown 的爬虫和转换器。
- [omniparser](https://github.com/jf-tech/omniparser) - 多功能 ETL 库，以流式方式解析文本输入（CSV/txt/JSON/XML/EDI/X12/EDIFACT 等），并使用数据驱动的模式将数据转换为 JSON 输出。

**[⬆ 返回顶部](#contents)**

## 数据结构与算法

### 位打包与压缩

- [bingo](https://github.com/iancmcc/bingo) - 快速、零分配、保持字典序地将原生类型打包为字节。
- [binpacker](https://github.com/zhuangsirui/binpacker) - 二进制打包器和解包器，帮助用户构建自定义二进制流。
- [bit](https://github.com/yourbasic/bit) - Golang 集合数据结构，并附赠位操作函数。
- [crunch](https://github.com/superwhiskers/crunch) - 实现缓冲区以便轻松处理各种数据类型的 Go 包。
- [go-ef](https://github.com/amallia/go-ef) - Elias-Fano 编码的 Go 实现。
- [roaring](https://github.com/RoaringBitmap/roaring) - 实现压缩位集的 Go 包。

### 位集

- [bitmap](https://github.com/kelindar/bitmap) - 用 Go 实现的稠密、零分配、支持 SIMD 的位图/位集。
- [bitset](https://github.com/bits-and-blooms/bitset) - 实现位集的 Go 包。

### 布隆过滤器与布谷鸟过滤器

- [bloom](https://github.com/bits-and-blooms/bloom) - 实现布隆过滤器的 Go 包。
- [bloom](https://github.com/zhenjl/bloom) - 用 Go 实现的布隆过滤器。
- [bloom](https://github.com/yourbasic/bloom) - Golang 布隆过滤器实现。
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - 又一个 Go 布隆过滤器实现，与 Java 的 Guava 库兼容。
- [boomfilters](https://github.com/tylertreat/BoomFilters) - 用于处理连续、无界数据流的概率数据结构。
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - 布谷鸟过滤器：功能全面的布谷鸟过滤器，与其他实现相比可配置且空间更优化，并提供原始论文中提到的全部特性。
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - 布谷鸟过滤器：用 Go 实现的计数布隆过滤器的良好替代品。
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - 首个纯 Go 实现的 Ribbon 过滤器（实际体积小于 Bloom 和 Xor 过滤器），用于节省空间的近似集合成员查询。
- [ring](https://github.com/TheTannerRyan/ring) - 高性能、线程安全的布隆过滤器的 Go 实现。

### 数据结构与算法合集

- [algorithms](https://github.com/shady831213/algorithms) - 算法与数据结构。CLRS（《算法导论》）学习。
- [go-datastructures](https://github.com/Workiva/go-datastructures) - 实用、高性能且线程安全的数据结构集合。
- [gods](https://github.com/emirpasic/gods) - Go 数据结构。容器、集合、列表、栈、映射、双向映射、树、HashSet 等。
- [gostl](https://github.com/liyue201/gostl) - Go 数据结构与算法库，旨在提供类似 C++ STL 的功能。

### 迭代器

- [glinq](https://github.com/CreateLab/glinq) - 类 LINQ 的惰性求值库，具备类型安全的泛型、性能优化且零依赖。
- [gloop](https://github.com/alvii147/gloop) - 利用 Go 的 range-over-func 特性进行便捷循环。
- [goterator](https://github.com/yaa110/goterator) - 提供 map 和 reduce 功能的迭代器实现。
- [iter](https://github.com/disksing/iter) - C++ STL 迭代器和算法的 Go 实现。

### 映射

另请参阅[数据库](#database)和[树](#trees)：前者包含更复杂的键值存储，
后者包含更多有序映射实现。

- [cmap](https://github.com/lrita/cmap) - 适用于 Go 的线程安全并发映射，支持使用 `interface{}` 作为键，并可自动扩展分片。
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - 基于 Swiss Map 的高性能、线程安全的泛型并发哈希映射实现。
- [dict](https://github.com/srfrog/dict) - 适用于 Go 的类 Python 字典（dict）。
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - `sync.Map` 的类型安全泛型封装，方法完全对等，零依赖。
- [go-shelve](https://github.com/lucmq/go-shelve) - 适用于 Go 编程语言的持久化类映射对象。支持多种嵌入式键值存储。
- [goradd/maps](https://github.com/goradd/maps) - 适用于 Go 1.18+ 的泛型映射接口，涵盖普通映射、安全映射、有序映射、有序安全映射等。
- [hmap](https://github.com/lyonnee/hmap) - HMap 是一个支持并发、安全和泛型的映射实现，旨在提供易于使用的 API。

### 其他数据结构与算法

- [combo](https://github.com/bobg/combo) - 组合运算，包括排列、组合和可重复组合。
- [concurrent-writer](https://github.com/free/concurrent-writer) - `bufio.Writer` 的高并发直接替代品。
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Count-Min-Log 草图的 Go 实现：使用近似计数器进行近似计数（类似 Count-Min 草图，但占用内存更少）。
- [FSM](https://github.com/enetx/fsm) - 适用于 Go 的有限状态机（FSM）。
- [fsm](https://github.com/cocoonspace/fsm) - 有限状态机包。
- [genfuncs](https://github.com/nwillc/genfuncs) - 受 Kotlin 的 Sequence 和 Map 启发的 Go 1.18+ 泛型包。
- [go-generics](https://github.com/bobg/go-generics) - 泛型切片、映射、集合、迭代器和 goroutine 实用工具。
- [go-geoindex](https://github.com/hailocab/go-geoindex) - 内存地理索引。
- [go-rampart](https://github.com/francesconi/go-rampart) - 判断区间之间的相互关系。
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - 区域四叉树，支持高效的点定位和邻居查找。
- [go-tuple](https://github.com/barweiss/go-tuple) - 适用于 Go 1.18+ 的泛型元组实现。
- [go18ds](https://github.com/daichi-m/go18ds) - 使用 Go 1.18 泛型的 Go 数据结构。
- [gofal](https://github.com/xxjwxc/gofal) - 适用于 Go 的分数 API。
- [gogu](https://github.com/esimov/gogu) - 全面、可复用且高效的并发安全泛型工具函数与数据结构库。
- [gota](https://github.com/kniren/gota) - 适用于 Go 的数据框（dataframe）、序列（series）及数据整理方法的实现。
- [hide](https://github.com/emvi/hide) - 可与哈希相互序列化的 ID 类型，避免将 ID 发送给客户端。
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - HyperLogLog 实现，支持稀疏表示、LogLog-Beta 偏差校正和 TailCut 空间缩减。
- [quadtree](https://github.com/s0rg/quadtree) - 泛型、零分配、100% 测试覆盖的四叉树。
- [slices](https://github.com/twharmon/slices) - 用于切片的纯泛型函数。
- [xsync](https://github.com/puzpuzpuz/xsync) - 并发可扩展的数据结构，例如并发泛型哈希表 `xsync.Map`。

### 可空类型

- [nan](https://github.com/kak-tus/nan) - 将零分配的可空结构集于一个库中，并提供便捷的转换函数、序列化器和反序列化器。
- [null](https://github.com/emvi/null) - 可与 JSON 相互序列化/反序列化的可空 Go 类型。
- [typ](https://github.com/gurukami/typ) - 空值类型、安全的基本类型转换，以及从复杂结构中获取值。

### 队列

- [deheap](https://github.com/aalpar/deheap) - 双端堆（最小-最大堆），可在 O(log n) 时间内访问最小和最大元素。
- [deque](https://github.com/edwingeng/deque) - 高度优化的双端队列。
- [deque](https://github.com/gammazero/deque) - 基于环形缓冲区的快速 deque（双端队列）。
- [dqueue](https://github.com/vodolaz095/dqueue) - 简单、基于内存、零依赖、久经实战检验的线程安全延迟队列。
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - 并发 FIFO 队列。
- [hatchet](https://github.com/hatchet-dev/hatchet) - 分布式、容错的任务队列。
- [list](https://github.com/koss-null/list) - 泛型、线程安全的双向链表，完全支持迭代器，还提供用于嵌入场景的侵入式单向链表；是 container/list 的功能丰富的替代品。
- [memlog](https://github.com/embano1/memlog) - 受 Apache Kafka 启发的内存数据结构，易用、轻量、线程安全且仅追加。
- [queue](https://github.com/adrianbrad/queue) - 多种线程安全的 Go 泛型队列实现。

### 集合

- [dsu](https://github.com/ihebu/dsu) - 并查集（不相交集）数据结构的 Go 实现。
- [golang-set](https://github.com/deckarep/golang-set) - 适用于 Go 的线程安全与非线程安全高性能集合。
- [goset](https://github.com/zoumo/goset) - 实用的 Go 集合（Set）实现。
- [set](https://github.com/StudioSol/set) - 使用 LinkedHashMap 的简单 Go 集合数据结构实现。

### 文本分析

- [bleve](https://github.com/blevesearch/bleve) - 适用于 Go 的现代文本索引库。
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - 自适应基数树的 Go 实现。
- [go-edlib](https://github.com/hbollon/go-edlib) - 兼容 Unicode 的 Go 字符串比较与编辑距离算法库（Levenshtein、LCS、Hamming、Damerau levenshtein、Jaro-Winkler 等）。
- [levenshtein](https://github.com/agext/levenshtein) - Levenshtein 距离与相似度度量，支持自定义编辑代价，并为公共前缀提供类似 Winkler 的加分。
- [levenshtein](https://github.com/agnivade/levenshtein) - 在 Go 中计算 Levenshtein 距离的实现。
- [mspm](https://github.com/BlackRabbitt/mspm) - 用于信息检索的多字符串模式匹配算法。
- [parsefields](https://github.com/MonaxGT/parsefields) - 解析类 JSON 日志以收集唯一字段和事件的工具。
- [ptrie](https://github.com/viant/ptrie) - 前缀树的一种实现。
- [radixtree](https://github.com/gammazero/radixtree) - 自适应基数树（前缀树或压缩字典树）。
- [trie](https://github.com/derekparker/trie) - 用 Go 实现的字典树（Trie）。

### 树

- [graphlib](https://github.com/aio-arch/graphlib) - 拓扑排序库，对 DAG 图进行排序和剪枝。
- [hashsplit](http://github.com/bobg/hashsplit) - 将字节流切分成块并把块组织成树，块边界由内容而非位置决定。
- [merkle](https://github.com/bobg/merkle) - 节省空间地计算默克尔根哈希和包含证明。
- [skiplist](https://github.com/MauriceGit/skiplist) - 非常快速的 Go 跳表实现。
- [skiplist](https://github.com/gansidui/skiplist) - 用 Go 实现的跳表。
- [skiplist](https://github.com/huandu/skiplist) - 快速且易用的 Go 跳表。
- [treemap](https://github.com/igrmk/treemap) - 底层使用红黑树、按键排序的泛型映射。

### 管道

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - 并发处理任务并按输入顺序通过 channel 返回输出的 Go 模块。
- [parapipe](https://github.com/nazar256/parapipe) - FIFO 管道，在每个阶段并行执行，同时保持消息和结果的顺序。
- [pipeline](https://github.com/hyfather/pipeline) - 支持扇入和扇出的管道实现。
- [pipelines](https://github.com/nxdir-s/pipelines) - 用于并发处理的泛型管道函数。

**[⬆ 返回顶部](#contents)**

## 数据库

### 缓存

_带有过期记录的数据存储、内存分布式数据存储，或基于文件的数据库的内存子集。_

- [bcache](https://github.com/iwanbk/bcache) - 最终一致的分布式内存缓存 Go 库。
- [BigCache](https://github.com/allegro/bigcache) - 适用于 GB 级数据的高效键/值缓存。
- [cache2go](https://github.com/muesli/cache2go) - 内存键值缓存，支持基于超时的自动失效。
- [cachego](https://github.com/faabiosr/cachego) - 支持多种驱动的 Golang 缓存组件。
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - 支持集群和单项过期的 BigCache。
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - 面向 Go 应用的 Oracle Coherence 缓存 API 完整实现，使用 gRPC 作为网络传输。
- [couchcache](https://github.com/codingsince1985/couchcache) - 以 Couchbase 服务器为后端的 RESTful 缓存微服务。
- [easycache](https://github.com/hugocarreira/easycache) - 在 Golang 中使用内存缓存的简单方式（TTL/FIFO/LRU/LFU）。
- [EchoVault](https://github.com/EchoVault/EchoVault) - 可嵌入的分布式内存数据存储，兼容 Redis 客户端。
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - 面向大量条目的快速、线程安全内存缓存。将 GC 开销降至最低。
- [GCache](https://github.com/bluele/gcache) - 缓存库，支持可过期缓存、LFU、LRU 和 ARC。
- [gdcache](https://github.com/ulovecode/gdcache) - 用 Golang 实现的纯非侵入式缓存库，可用于实现你自己的分布式缓存。
- [go-cache](https://github.com/viney-shih/go-cache) - 灵活的多层 Go 缓存库，采用旁路缓存（Cache-Aside）模式处理内存缓存和共享缓存。
- [go-freelru](https://github.com/elastic/go-freelru) 无 GC 负担、快速的泛型 LRU 哈希映射库，可选加锁、分片、淘汰和过期。
- [go-gcache](https://github.com/szyhf/go-gcache) - `GCache` 的泛型版本，支持可过期缓存、LFU、LRU 和 ARC。
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - 快速的内存键值存储/缓存库。指针缓存。
- [gocache](https://github.com/eko/gocache) - 完整的 Go 缓存库，支持多种存储（memory、memcache、redis 等），提供链式、可加载、指标缓存等功能。
- [gocache](https://github.com/yuseferi/gocache) - 无数据竞争的高性能 Go 缓存库，具有自动清理功能
- [groupcache](https://github.com/golang/groupcache) - Groupcache 是一个缓存及缓存填充库，旨在许多场景下替代 memcached。
- [icache](https://github.com/mdaliyan/icache) - 高性能、泛型、线程安全、零依赖的缓存包。
- [imcache](https://github.com/erni27/imcache) - 泛型内存缓存 Go 库。支持过期、滑动过期、最大条目数限制、淘汰回调和分片。
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - 支持多级缓存的统一 Go 缓存库。
- [nscache](https://github.com/no-src/nscache) - 支持多种数据源驱动的 Go 缓存框架。
- [otter](https://github.com/maypok86/otter) - 适用于 Go 的高性能无锁缓存。比 Ristretto 等同类库快很多倍。
- [pocache](https://github.com/naughtygopher/pocache) - Pocache 是一个精简的缓存包，专注于抢占式乐观缓存策略。
- [ristretto](https://github.com/dgraph-io/ristretto) - 高性能、受内存上限约束的 Go 缓存。
- [sturdyc](https://github.com/viccon/sturdyc) - 具备高级并发特性的缓存库，旨在让 I/O 密集型应用更加健壮且高性能。
- [theine](https://github.com/Yiling-J/theine-go) - 高性能、接近最优的内存缓存，支持主动 TTL 过期和泛型。
- [timedmap](https://github.com/zekroTJA/timedmap) - 键值对可过期的映射。
- [ttlcache](https://github.com/jellydator/ttlcache) - 支持条目过期和泛型的内存缓存。
- [ttlcache](https://github.com/cheshir/ttlcache) - 每条记录都带 TTL 的内存键值存储。

### 用 Go 实现的数据库

- [badger](https://github.com/dgraph-io/badger) - 用 Go 编写的快速键值存储。
- [bbolt](https://github.com/etcd-io/bbolt) - 适用于 Go 的嵌入式键/值数据库。
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcask 是一个用纯 Go 编写的可嵌入、持久化的快速键值（KV）数据库，得益于 bitcask 磁盘布局（LSM+WAL），具有可预测的读写性能、低延迟和高吞吐量。
- [buntdb](https://github.com/tidwall/buntdb) - 适用于 Go 的快速、可嵌入的内存键/值数据库，支持自定义索引和空间数据。
- [clover](https://github.com/ostafen/clover) - 用纯 Golang 编写的轻量级面向文档的 NoSQL 数据库。
- [cockroach](https://github.com/cockroachdb/cockroach) - 可扩展、支持地理复制的事务型数据存储。
- [Coffer](https://github.com/claygod/coffer) - 支持事务的简单 ACID 键值数据库。
- [column](https://github.com/kelindar/column) - 高性能、列式、可嵌入的内存存储，支持位图索引和事务。
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQL 是一个运行在区块链上的 SQL 数据库。
- [Databunker](https://github.com/paranoidguy/databunker) - 为符合 GDPR 和 CCPA 而构建的个人身份信息（PII）存储服务。
- [dgraph](https://github.com/dgraph-io/dgraph) - 可扩展、分布式、低延迟、高吞吐量的图数据库。
- [DiceDB](https://github.com/DiceDB/dice) - 针对现代硬件优化的开源、快速、响应式内存数据库。吞吐量更高、中位延迟更低，非常适合现代工作负载。
- [diskv](https://github.com/peterbourgon/diskv) - 自研的磁盘键值存储。
- [dolt](https://github.com/dolthub/dolt) - Dolt——数据界的 Git。
- [eliasdb](https://github.com/krotik/eliasdb) - 无依赖的事务型图数据库，提供 REST API、短语搜索和类 SQL 查询语言。
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - 用纯 Go 编写的类 MongoDB 嵌入式数据库。支持索引和复杂查询。
- [go-sqlite](https://github.com/glebarez/go-sqlite) – 纯 Golang 实现、无需 CGO 的 SQLite 驱动。
- [godis](https://github.com/hdt3213/godis) - 用 Golang 实现的高性能 Redis 服务器和集群。
- [goleveldb](https://github.com/syndtr/goleveldb) - [LevelDB](https://github.com/google/leveldb) 键/值数据库的 Go 实现。
- [hare](https://github.com/jameycribbs/hare) - 简单的数据库管理系统，将每张表存储为按行分隔的 JSON 文本文件。
- [immudb](https://github.com/codenotary/immudb) - immudb 是一个面向系统和应用的轻量级高速不可变数据库，使用 Go 编写。
- [influxdb](https://github.com/influxdb/influxdb) - 用于指标、事件和实时分析的可扩展数据存储。
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdb 是一个基于 LevelDB、类似 Redis 的高性能 NoSQL 数据库。
- [levigo](https://github.com/jmhodges/levigo) - Levigo 是 LevelDB 的 Go 封装。
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDB 是一个代码不足 1000 行、用于学习的简单数据库。
- [LinDB](https://github.com/lindb/lindb) - LinDB 是一个可扩展、高性能、高可用的分布式时间序列数据库。
- [lotusdb](https://github.com/flower-corp/lotusdb) - 兼容 LSM 和 B+ 树的快速键值数据库。
- [lynxdb](https://github.com/lynxbase/lynxdb) - 轻量级列式日志分析数据库，带有受 SPL 启发的管道式查询语言。
- [MemHop](https://github.com/qyiun666/MemHop) - 面向 AI 智能体的嵌入式认知记忆数据库。六层架构（L0-L5）、Dream 整合管道、三通道 RRF 检索（BM25 + f16 向量 + 实体）、单个 .meh 文件、纯 Go、零基础设施。
- [Milvus](https://github.com/milvus-io/milvus) - Milvus 是一个用于嵌入向量管理、分析和搜索的向量数据库。
- [minisql](https://github.com/RichardKnop/minisql) - 嵌入式单文件 SQL 数据库。
- [moss](https://github.com/couchbase/moss) - Moss 是一个 100% 用 Go 编写的简单 LSM 键值存储引擎。
- [nanotdb](https://github.com/aymanhs/nanotdb) - 针对低功耗硬件优化的轻量级、零依赖、仅追加的时间序列数据库和仪表盘。
- [NoKV](https://github.com/feichai0017/NoKV) - 面向分布式文件系统、对象存储和 AI 数据集工作负载的原生元数据服务。
- [NornicDB](https://github.com/orneryd/NornicDB) - 高性能图 + 向量数据库（兼容 Neo4j 和 qDrant），专注于为 AI 系统提供低延迟的 Graph-RAG 检索。
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdb 是一个用纯 Go 编写的简单、快速、可嵌入的持久化键/值存储。它支持完全可串行化的事务以及列表、集合、有序集合等多种数据结构。
- [objectbox-go](https://github.com/objectbox/objectbox-go) - 提供 Go API 的高性能嵌入式对象数据库（NoSQL）。
- [pebble](https://github.com/cockroachdb/pebble) - 受 RocksDB/LevelDB 启发、用 Go 编写的键值数据库。
- [piladb](https://github.com/fern4lvarez/piladb) - 基于栈数据结构的轻量级 RESTful 数据库引擎。
- [pogreb](https://github.com/akrylysov/pogreb) - 面向读密集型工作负载的嵌入式键值存储。
- [prometheus](https://github.com/prometheus/prometheus) - 监控系统和时间序列数据库。
- [pudge](https://github.com/recoilme/pudge) - 使用 Go 标准库编写的快速简单的键/值存储。
- [redka](https://github.com/nalgeon/redka) - 用 SQLite 重新实现的 Redis。
- [rosedb](https://github.com/roseduan/rosedb) - 基于 LSM+WAL 的嵌入式键值数据库，支持 string、list、hash、set、zset。
- [rotom](https://github.com/xgzlucario/rotom) - 用 Golang 构建的小型 Redis 服务器，兼容 RESP 协议。
- [rqlite](https://github.com/rqlite/rqlite) - 基于 SQLite 构建的轻量级分布式关系型数据库。
- [tempdb](https://github.com/rafaeljesus/tempdb) - 用于临时条目的键值存储。
- [tidb](https://github.com/pingcap/tidb) - TiDB 是一个分布式 SQL 数据库。灵感来自 Google F1 的设计。
- [tiedot](https://github.com/HouzuoGuo/tiedot) - 由 Golang 驱动的 NoSQL 数据库。
- [unitdb](https://github.com/unit-io/unitdb) - 面向物联网和实时消息应用的快速时间序列数据库。可使用 github.com/unit-io/unitd 应用，通过 TCP 或 WebSocket 以发布/订阅方式访问 unitdb。
- [Vasto](https://github.com/chrislusf/vasto) - 分布式高性能键值存储。基于磁盘。最终一致。高可用。可在不中断服务的情况下扩容或缩容。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 快速、节省资源且可扩展的开源时间序列数据库。可用作 Prometheus 的长期远程存储。支持 PromQL。
- 
### 数据库模式迁移

- [atlas](https://github.com/ariga/atlas) - 数据库工具包。一个旨在帮助公司更好地处理数据的 CLI。
- [avro](https://github.com/khezen/avro) - 发现 SQL 模式并将其转换为 AVRO 模式。将 SQL 记录查询为 AVRO 字节。
- [bytebase](https://github.com/bytebase/bytebase) - 面向 DevOps 团队的安全数据库模式变更与版本控制。
- [darwin](https://github.com/GuiaBolso/darwin) - 适用于 Go 的数据库模式演进库。
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - 用于版本化数据库模式迁移的 CLI，支持 PostgreSQL、MySQL、ClickHouse、Tarantool 和 Apache Iceberg。
- [dbmate](https://github.com/amacneil/dbmate) - 轻量级、与框架无关的数据库迁移工具。
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - 为 Golang 出色的内置 database/sql 库提供 Django 风格的测试数据（fixtures）。
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - 对 CLI 友好的 go-pg 迁移管理包。
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - 帮助使用 go-pg/pg 编写迁移的 Go 包。
- [goavro](https://github.com/linkedin/goavro) - 编码和解码 Avro 数据的 Go 包。
- [godfish](https://github.com/rafaelespinoza/godfish) - 数据库迁移管理器，使用原生查询语言。支持 cassandra、mysql、postgres、sqlite3。
- [goose](https://github.com/pressly/goose) - 数据库迁移工具。你可以通过创建增量 SQL 或 Go 脚本来管理数据库的演进。
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - 适用于 Gorm ORM 的简单数据库种子数据填充工具。
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - 适用于 Gorm ORM 的数据库模式迁移辅助工具。
- [libschema](https://github.com/muir/libschema) - 在每个库中分别定义迁移。面向开源库的迁移。支持 MySQL 和 PostgreSQL。
- [migrate](https://github.com/golang-migrate/migrate) - 数据库迁移。提供 CLI 和 Golang 库。
- [migrator](https://github.com/lopezator/migrator) - 极其简单的 Go 数据库迁移库。
- [migrator](https://github.com/larapulse/migrator) - MySQL 数据库迁移器，旨在为你的功能运行迁移，并用直观的 Go 代码管理数据库模式更新。
- [schema](https://github.com/adlio/schema) - 将兼容 database/sql 的数据库的模式迁移嵌入到 Go 二进制文件中的库。
- [skeema](https://github.com/skeema/skeema) - 面向 MySQL 的纯 SQL 模式管理系统，支持分片和外部在线模式变更工具。
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - 面向 MySQL、PostgreSQL 和 SQLite 的数据库迁移、创建、ORM 等功能……
- [sql-migrate](https://github.com/rubenv/sql-migrate) - 数据库迁移工具。支持使用 go-bindata 将迁移嵌入到应用中。
- [sqlize](https://github.com/sunary/sqlize) - 数据库迁移生成器。通过比较模型与现有 SQL 的差异来生成 SQL 迁移。

### 数据库工具

- [chproxy](https://github.com/Vertamedia/chproxy) - ClickHouse 数据库的 HTTP 代理。
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - 收集小批量插入并以大请求发送到 ClickHouse 服务器。
- [clickhouse-sql-parser](https://github.com/AfterShip/clickhouse-sql-parser) - ClickHouse 方言 SQL 的解析器，生成类型化 AST，并提供遍历辅助工具、往返格式化和 CLI。
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - 在生产环境中运行 SQL，支持 ACL、日志和共享链接。
- [dbbench](https://github.com/sj14/dbbench) - 数据库基准测试工具，支持多种数据库和脚本。
- [dg](https://github.com/codingconcepts/dg) - 快速数据生成器，根据生成的关系数据输出 CSV 文件。
- [filesql](https://github.com/nao1215/filesql) - 通过 database/sql API 用 SQL 查询 CSV、TSV、LTSV、JSON、JSONL、Parquet、Excel、ACH 和 Fedwire 文件，底层使用内存 SQLite。
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - 云原生数据库网关和用于构建数据驱动应用的框架。就像 API 网关，只不过面向的是数据库。
- [go-mysql](https://github.com/siddontang/go-mysql) - 处理 MySQL 协议和复制的 Go 工具集。
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - 使用 AWS Lambda 将 PostgreSQL 以无服务器方式备份到 S3，支持按日、按月和按年轮换。
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - 为 GORM 管理的数据库提供多租户支持。
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - 高性能 SQL 解析器、格式化器、代码检查工具和安全扫描器，支持多种方言并提供 WASM 在线演练场。
- [hasql](https://golang.yandex/hasql) - 用于访问多主机 SQL 数据库部署的库。
- [octillery](https://github.com/knocknote/octillery) - 用于数据库分片的 Go 包（支持所有 ORM 或原生 SQL）。
- [onedump](https://github.com/liweiyi88/onedump) - 用一条命令和一份配置，将不同驱动的数据库备份到不同的目的地。
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 的高级调度。
- [pgrwl](https://github.com/pgrwl/pgrwl) - PostgreSQL 的云原生持续备份。
- [pgwd](https://github.com/hrodrig/pgwd) - 监控 PostgreSQL 连接数（总数、活动、空闲、陈旧）的 CLI，超过阈值时通过 Slack 和/或 Loki 发送通知。支持 Kubernetes（kubectl port-forward），并可在通知中附带运行上下文。
- [pgweb](https://github.com/sosedoff/pgweb) - 基于 Web 的 PostgreSQL 数据库浏览器。
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - 用 Go 编写的 PostgreSQL CLI 客户端，灵感来自 pgcli。
- [prep](https://github.com/hexdigest/prep) - 无需修改代码即可使用预处理 SQL 语句。
- [pREST](https://github.com/prest/prest) - 简化并加速开发，⚡ 为任何现有或全新的 Postgres 应用提供即时、实时、高性能的能力。
- [rdb](https://github.com/HDT3213/rdb) - Redis RDB 文件解析器，可用于二次开发和内存分析。
- [rwdb](https://github.com/andizzle/rwdb) - rwdb 为多数据库服务器部署提供只读副本能力。
- [sqly](https://github.com/nao1215/sqly) - 在交互式 shell 中对 CSV、TSV、LTSV、JSON、Parquet 和 Excel 文件执行 SQL，底层使用内存 SQLite。
- [vitess](https://github.com/youtube/vitess) - vitess 提供服务器和工具，便于为大规模 Web 服务扩展 MySQL 数据库。
- [wescale](https://github.com/wesql/wescale) - WeScale 是一个数据库代理，旨在增强应用的可扩展性、性能、安全性和弹性。
- [xsql](https://github.com/zx06/xsql) - AI 优先的跨数据库 CLI 工具，具备只读保护和结构化 JSON 输出。

### SQL 查询构建器

_用于构建和使用 SQL 的库。_

- [bqb](https://github.com/nullism/bqb) - 轻量级且易于学习的查询构建器。
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - 面向 PostgreSQL 的 Go 数据库查询构建器库。
- [builq](https://github.com/cristalhq/builq) - 在 Go 中轻松构建 SQL 查询。
- [dba](https://github.com/kran/dba) - 面向手写 SQL 的查询构建器，可添加动态条件、感知方言的占位符和不可变链式调用。
- [dbq](https://github.com/rocketlaunchr/dbq) - 零样板代码的 Go 数据库操作。
- [Dotsql](https://github.com/gchaincl/dotsql) - 帮助你将 SQL 文件集中存放并轻松使用的 Go 库。
- [gendry](https://github.com/didi/gendry) - 非侵入式 SQL 构建器和强大的数据绑定器。
- [godbal](https://github.com/xujiajun/godbal) - 适用于 Go 的数据库抽象层（dbal）。支持 SQL 构建器，并可轻松获取结果。
- [goqu](https://github.com/doug-martin/goqu) - 符合语言习惯的 SQL 构建器和查询库。
- [gosql](https://github.com/twharmon/gosql) - 对空值支持更好的 SQL 查询构建器。
- [Hotcoal](https://github.com/motrboat/hotcoal) - 保护你手写的 SQL 免受注入攻击。
- [igor](https://github.com/galeone/igor) - PostgreSQL 抽象层，支持高级功能并使用类 gorm 语法。
- [jet](https://github.com/go-jet/jet) - 在 Go 中编写类型安全 SQL 查询的框架，可轻松将数据库查询结果转换为所需的任意对象结构。
- [obreron](https://github.com/profe-ajedrez/obreron) - 快速且低开销的 SQL 构建器，只做一件事：构建 SQL。
- [ormlite](https://github.com/pupizoid/ormlite) - 轻量级包，为 sqlite 数据库提供一些类 ORM 功能和辅助工具。
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - 强大的数据检索方法，以及与数据库无关的查询构建能力。
- [patcher](https://github.com/Jacobbrewer1/patcher) - 强大的 SQL 查询构建器，可根据结构体自动生成 SQL 查询。
- [qrafter](https://github.com/SennovE/qrafter) - 类型安全的 SQL 查询构建器，支持感知方言的渲染、模式自省和迁移生成。
- [qry](https://github.com/HnH/qry) - 根据包含原生 SQL 查询的文件生成常量的工具。
- [relica](https://github.com/coregx/relica) - 类型安全的数据库查询构建器，零生产依赖，提供 LRU 语句缓存和批量操作，并支持 JOIN、子查询、CTE 和窗口函数。
- [sg](https://github.com/go-the-way/sg) - 用 Go 编写的 SQL 生成器，用于生成标准 SQL（支持 CRUD）。
- [sq](https://github.com/bokwoon95/go-structured-query) - 适用于 Go 的类型安全 SQL 构建器和结构体映射器。
- [sqlc](https://github.com/kyleconroy/sqlc) - 根据 SQL 生成类型安全的代码。
- [sqlcredo](https://github.com/Klojer/sqlcredo) - 用于类型安全的泛型 SQL CRUD 操作的包，支持分页、事务、调试和自定义原生 SQL 扩展。
- [sqlf](https://github.com/leporo/sqlf) - 快速的 SQL 查询构建器。
- [sqlh](https://github.com/kirill-scherba/sqlh) - 零样板代码的 SQL 辅助库，基于结构体标签和 Go 泛型（CRUD、UPSERT、JOIN、基准测试）。
- [sqlingo](https://github.com/lqs/sqlingo) - 在 Go 中构建 SQL 的轻量级 DSL。
- [sqrl](https://github.com/elgris/sqrl) - SQL 查询构建器，Squirrel 的分支，性能有所提升。
- [Squalus](https://gitlab.com/qosenergy/squalus) - 基于 Go SQL 包的薄封装层，让执行查询更加容易。
- [Squirrel](https://github.com/Masterminds/squirrel) - 帮助你构建 SQL 查询的 Go 库。
- [xo](https://github.com/knq/xo) - 根据现有模式定义或自定义查询为数据库生成符合语言习惯的 Go 代码，支持 PostgreSQL、MySQL、SQLite、Oracle 和 Microsoft SQL Server。

**[⬆ 返回顶部](#contents)**

## 数据库驱动

### 多后端接口

- [cayley](https://github.com/google/cayley) - 支持多种后端的图数据库。
- [dsc](https://github.com/viant/dsc) - 面向 SQL、NoSQL 和结构化文件的数据存储连接。
- [dynamo](https://github.com/fogfish/dynamo) - 简单的键值抽象，用于在 AWS 存储服务（AWS DynamoDB 和 AWS S3）中存储代数数据类型和关联数据类型。
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - 带有多种适配器（sql、sqlx、gorm、mongo 等）的事务管理器，用于控制事务边界。
- [gokv](https://github.com/philippgille/gokv) - 适用于 Go 的简单键值存储抽象及实现（Redis、Consul、etcd、bbolt、BadgerDB、LevelDB、Memcached、DynamoDB、S3、PostgreSQL、MongoDB、CockroachDB 等）。
- [transactor](https://github.com/metalfm/transactor) - 类型安全的事务边界抽象，提供 database/sql、sqlx 和 pgx 适配器。

### 关系型数据库驱动

- [avatica](https://github.com/apache/calcite-avatica-go) - 适用于 database/sql 的 Apache Avatica/Phoenix SQL 驱动。
- [bgc](https://github.com/viant/bgc) - 适用于 Go 的 BigQuery 数据存储连接。
- [firebirdsql](https://github.com/nakagami/firebirdsql) - 适用于 Go 的 Firebird RDBMS SQL 驱动。
- [go-adodb](https://github.com/mattn/go-adodb) - 使用 database/sql 的 Microsoft ActiveX Object DataBase Go 驱动。
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - 适用于 Go 的 Microsoft MSSQL 驱动。
- [go-mssqldb](https://github.com/microsoft/go-mssqldb) - Microsoft 官方的 Go 驱动，适用于 SQL Server、Azure SQL、Azure Synapse、Fabric 中的 SQL 数据库以及 Fabric Data Warehouse。支持 Azure AD、Always Encrypted 和批量操作。
- [go-oci8](https://github.com/mattn/go-oci8) - 使用 database/sql 的 Oracle Go 驱动。
- [go-rqlite](https://github.com/rqlite/gorqlite) - rqlite 的 Go 客户端，为使用 rqlite API 提供易用的抽象。
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - 适用于 Go 的 MySQL 驱动。
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - 使用 database/sql 的 SQLite3 Go 驱动。
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - 该 Go 模块兼容 database/sql 驱动。它可将 SQLite 嵌入你的应用，提供对其 C API 的直接访问，支持 SQLite VFS，并且还包含一个 GORM 驱动。
- [godror](https://github.com/godror/godror) - 适用于 Go 的 Oracle 驱动，使用 ODPI-C 驱动。
- [gofreetds](https://github.com/minus5/gofreetds) - Microsoft MSSQL 驱动。基于 [FreeTDS](https://www.freetds.org) 的 Go 封装。
- [KSQL](https://github.com/VinGarcia/ksql) - 简单而强大的 Golang SQL 库。
- [pgx](https://github.com/jackc/pgx) - PostgreSQL 驱动，支持超出 database/sql 所提供范围的功能。
- [pig](https://github.com/alexeyco/pig) - 简单的 [pgx](https://github.com/jackc/pgx) 封装，可轻松执行查询并[扫描](https://github.com/georgysavva/scany)查询结果。
- [pq](https://github.com/lib/pq) - 适用于 database/sql 的纯 Go Postgres 驱动。
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - 纯 Go 的 SQLite。
- [sqlhooks](https://github.com/qustavo/sqlhooks) - 为任意 database/sql 驱动附加钩子。
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - sqlite 包是一个 sql/database 驱动，使用 C SQLite3 库的无 CGo 移植版。
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - 适用于 Go 的 SurrealDB 驱动。
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - YDB（Yandex Database）的原生驱动和 database/sql 驱动。

### NoSQL 数据库驱动

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Go 语言版 Aerospike 客户端。
- [arangolite](https://github.com/solher/arangolite) - 适用于 ArangoDB 的轻量级 Golang 驱动。
- [asc](https://github.com/viant/asc) - 适用于 Go 的 Aerospike 数据存储连接。
- [forestdb](https://github.com/couchbase/goforestdb) - ForestDB 的 Go 绑定。
- [go-couchbase](https://github.com/couchbase/go-couchbase) - 用 Go 编写的 Couchbase 客户端。
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - 基于官方驱动的 Go Mongo 库，提供精简的文档操作、结构体与集合的泛型绑定、内置 CRUD、聚合、字段自动更新、结构体验证、钩子以及基于插件的编程。
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Pilosa 的 Go 客户端库。
- [go-rejson](https://github.com/nitishm/go-rejson) - 基于 Redigo Golang 客户端的 redislabs ReJSON 模块 Golang 客户端。可轻松在 Redis 中将结构体作为 JSON 对象存储和操作。
- [gocb](https://github.com/couchbase/gocb) - Couchbase 官方 Go SDK。
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Azure Cosmos DB 的 REST 客户端和标准 `database/sql` 驱动。
- [gocql](https://gocql.github.io) - Apache Cassandra 的 Go 语言驱动。
- [godis](https://github.com/piaohao/godis) - 用 Golang 实现的 Redis 客户端，灵感来自 jedis。
- [godscache](https://github.com/defcronyke/godscache) - Google Cloud Platform Go Datastore 包的封装，使用 memcached 添加缓存。
- [gomemcache](https://github.com/bradfitz/gomemcache/) - 适用于 Go 编程语言的 memcache 客户端库。
- [gomemcached](https://github.com/aliexpressru/gomemcached) - 适用于 Go 的二进制协议 Memcached 客户端，支持基于一致性哈希的分片以及 SASL。
- [gorethink](https://github.com/dancannon/gorethink) - RethinkDB 的 Go 语言驱动。
- [goriak](https://github.com/zegl/goriak) - Riak KV 的 Go 语言驱动。
- [Kivik](https://github.com/go-kivik/kivik) - Kivik 为 CouchDB、PouchDB 及类似数据库提供通用的 Go 和 GopherJS 客户端库。
- [mgm](https://github.com/kamva/mgm) - 适用于 Go 的基于模型的 MongoDB ODM（基于官方 MongoDB 驱动）。
- [mgo](https://github.com/globalsign/mgo) - （已不再维护）Go 语言的 MongoDB 驱动，在遵循标准 Go 惯例的极简 API 下实现了丰富且经过充分测试的功能。
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - Go 语言的官方 MongoDB 驱动。
- [neo4j](https://github.com/cihangir/neo4j) - Neo4j REST API 的 Golang 绑定。
- [neoism](https://github.com/jmcvetta/neoism) - 适用于 Golang 的 Neo4j 客户端。
- [qmgo](https://github.com/qiniu/qmgo) - 适用于 Go 的 MongoDB 驱动。它基于官方 MongoDB 驱动，但像 Mgo 一样更易于使用。
- [redeo](https://github.com/bsm/redeo) - 兼容 Redis 协议的 TCP 服务器/服务。
- [redigo](https://github.com/gomodule/redigo) - Redigo 是 Redis 数据库的 Go 客户端。
- [redis](https://github.com/redis/go-redis) - 适用于 Golang 的 Redis 客户端。
- [rueidis](http://github.com/rueian/rueidis) - 快速的 Redis RESP3 客户端，支持自动管道化和服务器辅助的客户端缓存。
- [xredis](https://github.com/shomali11/xredis) - 类型安全、可定制、简洁易用的 Redis 客户端。

### 搜索与分析型数据库

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - 适用于 Go 的 ClickHouse SQL 客户端，兼容 `database/sql`。
- [effdsl](https://github.com/sdqri/effdsl) - 适用于 Go 的 Elasticsearch 查询构建器。
- [elastic](https://github.com/olivere/elastic) - 适用于 Go 的 Elasticsearch 客户端。
- [elasticsql](https://github.com/cch123/elasticsql) - 在 Go 中将 SQL 转换为 Elasticsearch DSL。
- [elastigo](https://github.com/mattbaird/elastigo) - Elasticsearch 客户端库。
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - 官方的 Go 版 Elasticsearch 客户端。
- [goes](https://github.com/OwnLocal/goes) - 与 Elasticsearch 交互的库。
- [skizze](https://github.com/skizzehq/skizze) - 概率数据结构服务与存储。
- [zoekt](https://github.com/sourcegraph/zoekt) - 基于三元组（trigram）的快速代码搜索。

**[⬆ 返回顶部](#contents)**

## 日期与时间

_用于处理日期和时间的库。_

- [approx](https://github.com/goschtalt/approx) - Duration 扩展，支持以天、周和年为单位解析/打印时长。
- [carbon](https://github.com/dromara/carbon) - 简单、语义化且对开发者友好的 Golang 时间包。
- [carbon](https://github.com/uniplaces/carbon) - 简单的 Time 扩展，提供大量实用方法，移植自 PHP Carbon 库。
- [cronrange](https://github.com/1set/cronrange) - 解析 Cron 风格的时间范围表达式，检查给定时间是否位于任一范围内。
- [date](https://github.com/rickb777/date) - 增强 Time，用于处理日期、日期范围、时间跨度、时间段和一天中的时刻。
- [dateparse](https://github.com/araddon/dateparse) - 无需预先知道格式即可解析日期。
- [durafmt](https://github.com/hako/durafmt) - 适用于 Go 的时长格式化库。
- [feiertage](https://github.com/wlbr/feiertage) - 用于计算德国公共假日的一组函数，包括针对德国各联邦州（Bundesländer）的专门处理。例如复活节、圣灵降临节、感恩节……
- [go-anytime](https://github.com/ijt/go-anytime) - 无需预先知道格式即可解析“next dec 22nd at 3pm”这类日期/时间，以及“from today until next thursday”这类范围。
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - 受 date-fns 启发的全面 Go 日期工具库，包含 140 多个纯函数和不可变函数。
- [go-datebin](https://github.com/deatil/go-datebin) - 简单的日期时间解析包。
- [go-faketime](https://github.com/harkaitz/go-faketime) - 遵循 faketime(1) 工具的简单 `time.Now()`。
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - 波斯历（太阳回历）的 Go（golang）实现。
- [go-str2duration](https://github.com/xhit/go-str2duration) - 将字符串转换为时长。支持 time.Duration 返回的字符串等格式。
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - 计算指定地点的日出和日落时间。
- [go-week](https://github.com/stoewer/go-week) - 处理 ISO8601 周日期的高效包。
- [gostradamus](https://github.com/bykof/gostradamus) - 处理日期的 Go 包。
- [iso8601](https://github.com/relvacode/iso8601) - 无需正则表达式即可高效解析 ISO8601 日期时间。
- [kair](https://github.com/GuilhermeCaruso/kair) - 日期与时间——Golang 格式化库。
- [now](https://github.com/jinzhu/now) - Now 是一个 Golang 时间工具包。
- [strftime](https://github.com/awoodbeck/strftime) - 兼容 C99 的 strftime 格式化器。
- [timespan](https://github.com/SaidinWoT/timespan) - 用于处理由开始时间和时长定义的时间区间。
- [timeutil](https://github.com/leekchan/timeutil) - 对 Golang time 包的实用扩展（Timedelta、Strftime 等）。
- [tuesday](https://github.com/osteele/tuesday) - 兼容 Ruby 的 Strftime 函数。

**[⬆ 返回顶部](#contents)**

## 分布式系统

_帮助构建分布式系统的包。_

- [arpc](https://github.com/lesismal/arpc) - 更高效的网络通信，支持双向调用、通知和广播。
- [bedrock](https://github.com/z5labs/bedrock) - 提供精简、模块化且可组合的基础，用于在 Go 中快速开发服务以及更贴合具体用例的框架。
- [capillaries](https://github.com/capillariesio/capillaries) - 分布式批量数据处理框架。
- [circuit](https://github.com/schigh/circuit) - 通过概率限流实现逐步恢复的熔断器。
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - 适用于 Go 的高性能分布式命令模式库。
- [committer](https://github.com/vadiminshakov/committer) - 分布式事务管理系统（2PC/3PC 实现）。
- [consistent](https://github.com/buraksezer/consistent) - 有界负载的一致性哈希。
- [consistenthash](https://github.com/mbrostami/consistenthash) - 可配置副本数的一致性哈希。
- [dht](https://github.com/anacrolix/dht) - BitTorrent Kademlia DHT 实现。
- [digota](https://github.com/digota/digota) - 基于 gRPC 的电子商务微服务。
- [dot](https://github.com/dotchain/dot/) - 使用操作转换（OT）的分布式同步。
- [doublejump](https://github.com/edwingeng/doublejump) - 改进版的 Google Jump 一致性哈希。
- [dragonboat](https://github.com/lni/dragonboat) - 功能完备的高性能 Go 多组 Raft 库。
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - 基于 P2P 技术提供高效、稳定、安全的文件分发和镜像加速，致力于成为云原生架构中的最佳实践和标准解决方案。
- [drmaa](https://github.com/dgruber/drmaa) - 基于 DRMAA 标准、面向集群调度器的作业提交库。
- [dynamolock](https://cirello.io/dynamolock) - 基于 DynamoDB 的分布式锁实现。
- [dynatomic](https://github.com/tylfin/dynatomic) - 将 DynamoDB 用作原子计数器的库。
- [emitter-io](https://github.com/emitter-io/emitter) - 用 MQTT、Websockets 和爱构建的高性能、分布式、安全、低延迟的发布-订阅平台。
- [evans](https://github.com/ktr0731/evans) - Evans：更具表现力的通用 gRPC 客户端。
- [failured](https://github.com/andy2046/failured) - 面向分布式系统的自适应累积故障检测器。
- [flowgraph](https://github.com/vectaport/flowgraph) - 基于流的编程包。
- [gleam](https://github.com/chrislusf/gleam) - 用纯 Go 和 Luajit 编写的快速可扩展分布式 map/reduce 系统，结合了 Go 的高并发和 Luajit 的高性能，可单机或分布式运行。
- [glow](https://github.com/chrislusf/glow) - 易于使用的可扩展分布式大数据处理、Map-Reduce、DAG 执行，全部用纯 Go 实现。
- [gmsec](https://github.com/gmsec/micro) - Go 分布式系统开发框架。
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - 基于 gossip 协议和 OpenAPI 3.0 规范的去中心化微服务框架。内置专注于低代码和快速开发的 go-doudou CLI，可大幅提升你的生产力。
- [go-eagle](https://github.com/go-eagle/eagle) - 用于 API 或微服务的 Go 框架，附带便捷的脚手架工具。
- [go-jump](https://github.com/dgryski/go-jump) - Google“Jump”一致性哈希函数的移植版。
- [go-kit](https://github.com/go-kit/kit) - 微服务工具包，支持服务发现、负载均衡、可插拔传输、请求跟踪等。
- [go-micro](https://github.com/micro/go-micro) - 分布式系统开发框架。
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - 基于 MySQL 的分布式锁。
- [go-pdu](https://github.com/pdupub/go-pdu) - 基于身份的去中心化社交网络。
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - 为 Golang 服务定义异步服务健康检查提供支持的库。
- [go-zero](https://github.com/tal-tech/go-zero) - Web 和 RPC 框架。它生来就是为了通过弹性设计确保高流量站点的稳定性。内置的 goctl 可大幅提升开发效率。
- [gorpc](https://github.com/valyala/gorpc) - 面向高负载的简单、快速且可扩展的 RPC 库。
- [grpc-go](https://github.com/grpc/grpc-go) - gRPC 的 Go 语言实现。基于 HTTP/2 的 RPC。
- [health](https://github.com/schigh/health) - 适用于 Go 服务的健康检查器，支持 Kubernetes 探针。
- [hprose](https://github.com/hprose/hprose-golang) - 非常“牛”的 RPC 库，目前支持 25 种以上语言。
- [jsonrpc](https://github.com/osamingo/jsonrpc) - jsonrpc 包帮助实现 JSON-RPC 2.0。
- [jsonrpc](https://github.com/ybbus/jsonrpc) - JSON-RPC 2.0 HTTP 客户端实现。
- [K8gb](https://github.com/k8gb-io/k8gb) - 云原生的 Kubernetes 全局负载均衡器。
- [Kitex](https://github.com/cloudwego/kitex) - 高性能、强扩展性的 Golang RPC 框架，帮助开发者构建微服务。如果你在开发微服务时主要关注性能和可扩展性，Kitex 会是一个不错的选择。
- [Kratos](https://github.com/go-kratos/kratos) - 采用模块化设计、易于使用的 Go 微服务框架。
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - 适用于 NATS 的轻量级、容错消息流。
- [lock](https://github.com/ubgo/lock) - 分布式锁家族，提供一个 Go 接口和五种后端（filelock、flock、Redis、Postgres、etcd）——所有后端均支持隔离令牌（fencing token）、信号量模式和可观测性钩子。
- [lura](https://github.com/luraproject/lura) - 带中间件的超高性能 API 网关框架。
- [mochi mqtt](https://github.com/mochi-co/mqtt) - 完全符合规范、可嵌入的高性能 MQTT v5/v3 代理，适用于物联网、智能家居和发布/订阅场景。
- [NATS](https://github.com/nats-io/nats-server) - NATS 是一个面向数字系统、服务和设备的简单、安全、高性能的通信系统。
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - 适用于 Golang 的 OpenTelemetry 编译期插桩。
- [oras](https://github.com/oras-project/oras) - 用于处理容器镜像仓库中 OCI 制品的 CLI 和库。
- [outbox](https://github.com/oagudo/outbox) - 用于在 Go 中实现事务性发件箱模式的轻量级库，不绑定任何特定的关系型数据库或消息代理。
- [outboxer](https://github.com/italolelis/outboxer) - Outboxer 是一个实现发件箱模式的 Go 库。
- [pglock](https://cirello.io/pglock) - 基于 PostgreSQL 的分布式锁实现。
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - 采用 Protobuf 规范的 Golang JSON-RPC 服务器-客户端。
- [raft](https://github.com/hashicorp/raft) - 由 HashiCorp 开发的 Raft 共识协议 Golang 实现。
- [raft](https://github.com/etcd-io/raft) - 由 CoreOS 开发的 Raft 共识协议 Go 实现。
- [rain](https://github.com/cenkalti/rain) - BitTorrent 客户端和库。
- [redis-lock](https://github.com/bsm/redislock) - 使用 Redis 的简化分布式锁实现。
- [resgate](https://resgate.io/) - 实时 API 网关，用于构建 REST、实时和 RPC API，所有客户端都能无缝同步。
- [rpcplatform](https://github.com/nexcode/rpcplatform) - 微服务框架，提供服务发现、负载均衡及相关功能。
- [rpcx](https://github.com/smallnest/rpcx) - 类似阿里巴巴 Dubbo 的分布式可插拔 RPC 服务框架。
- [Semaphore](https://github.com/jexia/semaphore) - 简单直接的（微）服务编排器。
- [servicepack](https://github.com/psyb0t/servicepack) - 在单个二进制文件中并发运行多个服务的框架，可在本地运行或跨多台机器分布式运行。
- [sleuth](https://github.com/ursiform/sleuth) - 用于 HTTP 服务之间无主节点 P2P 自动发现和 RPC 的库（使用 [ZeroMQ](https://github.com/zeromq/libzmq)）。
- [sponge](https://github.com/zhufuyi/sponge) - 集成了自动代码生成、gin 和 grpc 框架以及基础开发框架的分布式开发框架。
- [Tarmac](https://github.com/tarmac-project/tarmac) - 使用 WebAssembly 编写函数、微服务或单体应用的框架
- [Temporal](https://github.com/temporalio/sdk-go) - 持久化执行系统，让代码具备容错能力且保持简单。
- [torrent](https://github.com/anacrolix/torrent) - BitTorrent 客户端包。
- [trpc-go](https://github.com/trpc-group/trpc-go) - tRPC 的 Go 语言实现，tRPC 是一个可插拔的高性能 RPC 框架。

**[⬆ 返回顶部](#contents)**

## 动态 DNS

_用于更新动态 DNS 记录的工具。_

- [DDNS](https://github.com/skibish/ddns) - 以 Digital Ocean Networking DNS 为后端的个人 DDNS 客户端。
- [dyndns](https://gitlab.com/alcastle/dyndns) - 后台运行的 Go 进程，定期自动检查你的 IP 地址，并在地址变化时更新 Google 域名的（一条或多条）动态 DNS 记录。
- [GoDNS](https://github.com/timothyye/godns) - 用 Go 编写的动态 DNS 客户端工具，支持 DNSPod 和 HE.net。

**[⬆ 返回顶部](#contents)**

## 电子邮件

_实现电子邮件创建和发送的库和工具。_

- [chasquid](https://blitiri.com.ar/p/chasquid) - 用 Go 编写的 SMTP 服务器。
- [douceur](https://github.com/aymerick/douceur) - 为 HTML 邮件内联 CSS 的工具。
- [email](https://github.com/jordan-wright/email) - 健壮且灵活的 Go 电子邮件库。
- [email-verifier](https://github.com/AfterShip/email-verifier) - 无需发送任何邮件即可验证电子邮件地址的 Go 库。
- [go-dkim](https://github.com/toorop/go-dkim) - DKIM 库，用于签名和验证电子邮件。
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - 提供电子邮件地址规范化表示的 Golang 库。
- [go-imap](https://github.com/BrianLeishman/go-imap) - 功能齐全的 IMAP 客户端，支持自动重连、OAuth2、IDLE，并内置 MIME 解析。
- [go-imap](https://github.com/emersion/go-imap) - 适用于客户端和服务器的 IMAP 库。
- [go-mail](https://github.com/wneessen/go-mail) - 在 Go 中发送邮件的简单 Go 库。
- [go-message](https://github.com/emersion/go-message) - 用于互联网消息格式和邮件消息的流式处理库。
- [go-premailer](https://github.com/vanng822/go-premailer) - 在 Go 中为 HTML 邮件内联样式。
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - 非常简单的邮件发送包，支持 SMTP Keep Alive 和两种超时：连接超时和发送超时。
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - Postmark SpamCheck API 的客户端，可根据 SpamAssassin 规则为原始邮件打分。
- [Hectane](https://github.com/hectane/hectane) - 提供 HTTP API 的轻量级 SMTP 客户端。
- [hermes](https://github.com/matcornic/hermes) - 生成简洁、响应式 HTML 邮件的 Golang 包。
- [Maddy](https://github.com/foxcpp/maddy) - 一体化（SMTP、IMAP、DKIM、DMARC、MTA-STS、DANE）电子邮件服务器
- [mailchain](https://github.com/mailchain/mailchain) - 用 Go 编写，可向区块链地址发送加密邮件。
- [mailgun-go](https://github.com/mailgun/mailgun-go) - 使用 Mailgun API 发送邮件的 Go 库。
- [MailHog](https://github.com/mailhog/MailHog) - 电子邮件和 SMTP 测试工具，提供 Web 和 API 接口。
- [Mailpit](https://github.com/axllent/mailpit) - 面向开发者的电子邮件和 SMTP 测试工具。
- [mailx](https://github.com/valord577/mailx) - Mailx 是一个让通过 SMTP 发送邮件更加容易的库。它是对 Golang 标准库 `net/smtp` 的增强。
- [mox](https://github.com/mjl-/mox) - 现代、功能完整且安全的邮件服务器，适合低维护成本的自托管邮件。
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - SendGrid 用于发送电子邮件的 Go 库。
- [smtp](https://github.com/mailhog/smtp) - SMTP 服务器协议状态机。
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - 轻量级、可配置的多线程伪 SMTP 服务器。可为测试环境模拟任何 SMTP 行为。
- [tickstem/verify](https://github.com/tickstem/verify) - 在电子邮件地址进入数据库之前对其进行验证：语法、MX 查询、一次性域名和基于角色的收件箱。
- [truemail-go](https://github.com/truemail-rb/truemail-go) - 可配置的 Golang 电子邮件验证器。可通过正则表达式、DNS、SMTP 等方式验证邮箱。

**[⬆ 返回顶部](#contents)**

## 可嵌入脚本语言

_在 Go 代码中嵌入其他语言。_

- [anko](https://github.com/mattn/anko) - 用 Go 编写的可脚本化解释器。
- [binder](https://github.com/alexeyco/binder) - 基于 [gopher-lua](https://github.com/yuin/gopher-lua) 的 Go 到 Lua 绑定库。
- [cel-go](https://github.com/google/cel-go) - 快速、可移植、非图灵完备的表达式求值，支持渐进类型。
- [ecal](https://github.com/krotik/ecal) - 支持并发事件处理的简单可嵌入脚本语言。
- [expr](https://github.com/antonmedv/expr) - 适用于 Go 的表达式求值引擎：快速、非图灵完备，支持动态类型和静态类型。
- [FrankenPHP](https://github.com/dunglas/frankenphp) - 嵌入在 Go 中的 PHP，提供 `net/http` 处理器。
- [gentee](https://github.com/gentee/gentee) - 可嵌入的脚本编程语言。
- [gisp](https://github.com/jcla1/gisp) - 用 Go 实现的简单 LISP。
- [go-lua](https://github.com/Shopify/go-lua) - 将 Lua 5.2 虚拟机移植到纯 Go。
- [go-lua](https://github.com/speedata/go-lua) - 用纯 Go 实现的 Lua 5.4 虚拟机。
- [go-php](https://github.com/deuill/go-php) - 适用于 Go 的 PHP 绑定。
- [goal](https://codeberg.org/anaseto/goal) - 可嵌入的脚本数组语言。
- [goja](https://github.com/dop251/goja) - 用 Go 实现的 ECMAScript 5.1(+)。
- [golua](https://github.com/aarzilli/golua) - Lua C API 的 Go 绑定。
- [gopher-lua](https://github.com/yuin/gopher-lua) - 用 Go 编写的 Lua 5.1 虚拟机和编译器。
- [gval](https://github.com/PaesslerAG/gval) - 用 Go 编写的高度可定制的表达式语言。
- [metacall](https://github.com/metacall/core) - 跨平台多语言运行时，支持 NodeJS、JavaScript、TypeScript、Python、Ruby、C#、WebAssembly、Java、Cobol 等。
- [ngaro](https://github.com/db47h/ngaro) - 可嵌入的 Ngaro 虚拟机实现，支持使用 Retro 编写脚本。
- [prolog](https://github.com/ichiban/prolog) - 可嵌入的 Prolog。
- [purl](https://github.com/ian-kent/purl) - 嵌入在 Go 中的 Perl 5.18.2。
- [starlark-go](https://github.com/google/starlark-go) - Starlark 的 Go 实现：一种类 Python 语言，具备确定性求值和封闭式执行。
- [starlet](https://github.com/1set/starlet) - [starlark-go](https://github.com/google/starlark-go) 的 Go 封装，可简化脚本执行，提供数据转换以及实用的 Starlark 库和扩展。
- [tengo](https://github.com/d5/tengo) - 适用于 Go 的字节码编译型脚本语言。
- [Wa/凹语言](https://github.com/wa-lang/wa) - 嵌入在 Go 中的凹（Wa）编程语言。

**[⬆ 返回顶部](#contents)**

## 错误处理

_用于处理错误的库。_

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - 用每个调用点的文件、行号和函数名包装错误。
- [emperror](https://github.com/emperror/emperror) - 面向 Go 库和应用的错误处理工具与最佳实践。
- [eris](https://github.com/rotisserie/eris) - 在 Go 中处理、追踪和记录错误的更好方式。兼容标准错误库和 github.com/pkg/errors。
- [errlog](https://github.com/snwfdhmp/errlog) - 可深度定制的包，能确定导致错误的源代码（并提供其他一些快速调试功能）。可直接接入任意日志记录器。
- [errors](https://github.com/emperror/errors) - 标准库 errors 包和 github.com/pkg/errors 的直接替代品。提供各种错误处理原语。
- [errors](https://github.com/neuronlabs/errors) - 带有分类原语的简单 Golang 错误处理。
- [errors](https://github.com/PumpkinSeed/errors) - 最简单的错误包装器，性能出色且内存开销极小。
- [errors](https://gitlab.com/tozd/go/errors) - 提供带堆栈跟踪和可选结构化详情的错误。兼容 github.com/pkg/errors API，但内部并不使用它。
- [errors](https://github.com/naughtygopher/errors) - Go 内置错误的直接替代品。这是一个精简的错误处理包，提供自定义错误类型、用户友好的消息以及 Unwrap 和 Is，并附带非常易用且直观的辅助函数。
- [errors](https://github.com/cockroachdb/errors) - 支持错误跨网络传递的 Go 错误库。
- [errorx](https://github.com/joomcode/errorx) - 功能丰富的错误包，支持堆栈跟踪、错误组合等。
- [exception](https://github.com/rbrahul/exception) - 在 Golang 中用 try-catch 处理异常的简单实用工具包。
- [Falcon](https://github.com/SonicRoshan/falcon) - 简单却非常强大的错误处理包。
- [Fault](https://github.com/Southclaws/fault) - 符合人体工程学的错误包装机制，便于为错误值附加结构化元数据和上下文。
- [go-errr](https://github.com/go-errr/go) - 适用于 Go 的错误处理库，提供 Catch/Recover 语义、包装错误链和堆栈跟踪。
- [go-multierror](https://github.com/hashicorp/go-multierror) - 将错误列表表示为单个错误的 Go（golang）包。
- [metaerr](https://github.com/quantumcycle/metaerr) - 用于创建自定义错误构建器的库，可生成带有多来源元数据和可选堆栈跟踪的结构化错误。
- [multierr](https://github.com/uber-go/multierr) - 将错误列表表示为单个错误的包。
- [oops](https://github.com/samber/oops) - 带上下文、堆栈跟踪和源代码片段的错误处理。
- [tracerr](https://github.com/ztrue/tracerr) - 带堆栈跟踪和源代码片段的 Golang 错误。

**[⬆ 返回顶部](#contents)**

## 文件处理

_用于处理文件和文件系统的库。_

- [afero](https://github.com/spf13/afero) - 适用于 Go 的文件系统抽象系统。
- [afs](https://github.com/viant/afs) - 适用于 Go 的抽象文件存储（mem、scp、zip、tar、云：s3、gs）。
- [baraka](https://github.com/xis/baraka) - 轻松处理 HTTP 文件上传的库。
- [checksum](https://github.com/codingsince1985/checksum) - 为大文件计算 MD5、SHA256、SHA1、CRC 或 BLAKE2s 等消息摘要。
- [copy](https://github.com/otiai10/copy) - 递归复制目录。
- [fastwalk](https://github.com/charlievieth/fastwalk) - 快速并行目录遍历库（被 [fzf](https://github.com/junegunn/fzf) 使用）。
- [flop](https://github.com/homedepot/flop) - 文件操作库，旨在实现与 [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) 对等的功能。
- [gdu](https://github.com/dundee/gdu) - 带控制台界面的磁盘使用分析器。
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - 使用标签加载 CSV 文件。
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - 为人类设计的文件复制工具。
- [go-exiftool](https://github.com/barasher/go-exiftool) - ExifTool 的 Go 绑定；ExifTool 是一个知名库，用于从文件（图片、PDF、Office 文档等）中尽可能多地提取元数据（EXIF、IPTC 等）。
- [go-gtfs](https://github.com/artonge/go-gtfs) - 在 Go 中加载 GTFS 文件。
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - 将 HTML 模板转换为 PDF 文件的包。
- [goflat](https://github.com/lzambarda/goflat) - 感知上下文的泛型平面文件序列化/反序列化器。
- [gofs](https://github.com/no-src/gofs) - 开箱即用的跨平台实时文件同步工具。
- [gopdfrab](https://github.com/voidrab/gopdfrab) - 适用于 Go 的 PDF/A 处理。
- [gulter](https://github.com/adelowo/gulter) - 自动满足所有文件上传需求的简单 HTTP 中间件
- [gut/yos](https://github.com/1set/gut) - 简单可靠的文件操作包，可对文件、目录和符号链接执行复制/移动/比较/列出等操作。
- [gxpdf](https://github.com/coregx/gxpdf) - 现代的全生命周期 Go PDF 库——解析文档、提取表格、生成并签署文档，零 CGO 依赖。
- [higgs](https://github.com/dastoori/higgs) - 用于隐藏/取消隐藏文件和目录的小型跨平台 Go 库。
- [iso9660](https://github.com/kdomanski/iso9660) - 读取和创建 ISO9660 磁盘镜像的包
- [notify](https://github.com/rjeczalik/notify) - 文件系统事件通知库，API 简单，类似 os/signal。
- [opc](https://github.com/qmuntal/opc) - 在 Go 中加载开放打包约定（OPC）文件。
- [parquet](https://github.com/parsyl/parquet) - 读写 [parquet](https://parquet.apache.org) 文件。
- [pathtype](https://github.com/jonchun/pathtype) - 将路径视为独立类型，而不是使用字符串。
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - PDF 处理器。
- [skywalker](https://github.com/dixonwille/skywalker) - 让你轻松并发遍历文件系统的包。
- [todotxt](https://github.com/1set/todotxt) - 用于处理 Gina Trapani 的 [_todo.txt_](http://todotxt.org/) 文件的 Go 库，支持解析和操作 [_todo.txt_ 格式](https://github.com/todotxt/todo.txt)的任务列表。
- [vfs](https://github.com/C2FO/vfs) - 一套可插拔、可扩展且遵循固定约定的 Go 文件系统功能，支持 os、S3 和 GCS 等多种文件系统类型。

**[⬆ 返回顶部](#contents)**

## 金融

_用于会计和金融的包。_

- [accounting](https://github.com/leekchan/accounting) - 适用于 Golang 的金额和货币格式化。
- [ach](https://github.com/moov-io/ach) - 自动清算所（ACH）文件的读取器、写入器和验证器。
- [bbgo](https://github.com/c9s/bbgo) - 用 Go 编写的加密货币交易机器人框架。包括常用加密货币交易所 API、标准指标、回测以及许多内置策略。
- [bingx-go](https://github.com/tigusigalpa/bingx-go) - BingX API v3 的 Go 客户端，提供 260 多个方法，支持 USDT-M/Coin-M 合约、现货、TradFi、WebSocket 流和跟单交易。
- [bitget-go](https://github.com/tigusigalpa/bitget-go) - Bitget UTA API v3 的 Go 客户端，提供类型化模型、基于字符串的价格、自动重连的 WebSocket 和模拟交易。
- [bybit-go](https://github.com/tigusigalpa/bybit-go) - Bybit V5 API 的 Go 客户端，支持 HMAC/RSA 身份验证、WebSocket 流、模拟交易和 TradFi 金融工具。
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - CNN 恐惧与贪婪指数的客户端，提供七项成分指标以及大约一年的每日历史数据。
- [currency](https://github.com/bojanz/currency) - 处理货币金额，提供货币信息和格式化。
- [currency](https://github.com/naughtygopher/currency) - 高性能且精确的货币计算包。
- [dec128](https://github.com/jokruger/dec128) - 高性能 128 位定点十进制数。
- [decimal](https://github.com/shopspring/decimal) - 任意精度的定点十进制数。
- [decimal](https://github.com/aytechnet/decimal) - 高性能 64 位十进制数，部分兼容 [shopspring/decimal](https://github.com/shopspring/decimal) 和 int64，包含 Weight 和 Length。
- [decimal](https://github.com/govalues/decimal) - 不可变的十进制数，算术运算不会引发 panic。
- [decimal](https://github.com/klokare/decimal) - 固定大小、无内存分配的十进制类型，适用于不需要任意精度的场景。
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - 45 个欧洲国家的增值税税率和增值税号格式，在编译时嵌入，并每天从欧盟委员会 TEDB 更新。
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - 小型定点十进制数的快速精确序列化与算术运算
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - 快速简单的 ISO4217 定点十进制货币。
- [glassnode-go](https://github.com/tigusigalpa/glassnode-go) - Glassnode Basic API 的 Go 客户端，涵盖 25 个指标类别，提供类型化结构体、批量端点和时点（Point-in-Time）数据，零依赖。
- [go-finance](https://github.com/alpeb/go-finance) - 金融函数库，可用于货币时间价值（年金）、现金流、利率换算、债券和折旧计算。
- [go-finance](https://github.com/pieterclaerhout/go-finance) - 用于获取汇率、通过 VIES 校验增值税号以及校验 IBAN 银行账号的模块。
- [go-money](https://github.com/rhymond/go-money) - Fowler 货币（Money）模式的实现。
- [go-nowpayments](https://github.com/matm/go-nowpayments) - 加密货币 NOWPayments API 的库。
- [gobl](https://github.com/invopop/gobl) - 发票和账单文档框架。基于 JSON Schema。可自动进行税费计算和验证，并提供转换为全球各种格式的工具。
- [indicator](https://github.com/cinar/indicator) - 技术分析库，提供金融指标、策略和回测框架。
- [kucoin-go](https://github.com/tigusigalpa/kucoin-go) - KuCoin UTA 和经典 REST 与 WebSocket API 的 Go 客户端，支持 HMAC-SHA256 身份验证、字符串类型价格和类型化错误层次结构。
- [ledger](https://github.com/formancehq/ledger) - 可编程的金融账本，为资金流转类应用提供基础。
- [money](https://github.com/govalues/money) - 不可变的货币金额和汇率，算术运算不会引发 panic。
- [ofxgo](https://github.com/aclindsa/ofxgo) - 查询 OFX 服务器和/或解析响应（附带示例命令行客户端）。
- [okx-go](https://github.com/tigusigalpa/okx-go) - OKX v5 API 的 Go 客户端，提供 335 个 REST 端点和 53 个 WebSocket 频道，支持泛型和自动重连。
- [orderbook](https://github.com/i25959341/orderbook) - 用 Golang 编写的限价订单簿撮合引擎。
- [orderbook](https://github.com/intrepidkarthi/orderbook) - 可嵌入的限价订单簿和撮合引擎，采用整数精确定价、单写入者核心，并支持基于预写日志的崩溃恢复。
- [payme](https://github.com/jovandeginste/payme) - 用于 SEPA 支付的二维码生成器（ASCII 和 PNG）。
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - 全面、零依赖且完全类型化的 Paystack API Go SDK。
- [swift](https://code.pfad.fr/swift/) - 离线校验 IBAN（国际银行账号）的有效性，并检索 BIC（适用于部分国家）。
- [techan](https://github.com/sdcoffey/techan) - 技术分析库，提供高级市场分析和交易策略。
- [telegram-wallet-go](https://github.com/tigusigalpa/telegram-wallet-go) - Telegram Wallet Pay API 的 Go 客户端，支持 HMAC-SHA256 Webhook 验证，并提供适用于 net/http、Gin 和 Echo 的中间件。
- [ticker](https://github.com/achannarasappa/ticker) - 终端股票行情查看器和持仓跟踪器。
- [transaction](https://github.com/claygod/transaction) - 嵌入式账户事务数据库，以多线程模式运行。
- [udecimal](https://github.com/quagmt/udecimal) - 面向金融应用的高性能、高精度、零分配定点十进制库。
- [vat](https://github.com/dannyvankooten/vat) - 增值税号验证和欧盟增值税税率。

**[⬆ 返回顶部](#contents)**

## 表单

_用于处理表单的库。_

- [bind](https://github.com/robfig/bind) - 将表单数据绑定到任意 Go 值。
- [conform](https://github.com/leebenson/conform) - 管控用户输入。根据结构体标签修剪、净化和清洗数据。
- [form](https://github.com/go-playground/form) - 将 url.Values 解码为 Go 值，并将 Go 值编码为 url.Values。支持双重数组和完整映射。
- [formam](https://github.com/monoculum/formam) - 将表单值解码到结构体中。
- [forms](https://github.com/albrow/forms) - 与框架无关的表单/JSON 数据解析与验证库，支持 multipart 表单和文件。
- [gbind](https://github.com/bdjimmy/gbind) - 将数据绑定到任意 Go 值。可使用内置和自定义的表达式绑定功能；支持数据验证
- [gorilla/csrf](https://github.com/gorilla/csrf) - 适用于 Go Web 应用和服务的 CSRF 防护。
- [httpin](https://github.com/ggicci/httpin) - 将 HTTP 请求解码到自定义结构体中，包括查询字符串、表单、HTTP 头等。
- [nosurf](https://github.com/justinas/nosurf) - 适用于 Go 的 CSRF 防护中间件。
- [qs](https://github.com/sonh/qs) - 将结构体编码为 URL 查询参数的 Go 模块。
- [queryparam](https://github.com/tomwright/queryparam) - 将 `url.Values` 解码为标准类型或自定义类型的可用结构体值。
- [roamer](https://github.com/slipros/roamer) - 通过简单的标签将 Cookie、请求头、查询参数、路径参数、请求体等绑定到结构体，消除解析 HTTP 请求的样板代码。

**[⬆ 返回顶部](#contents)**

## 函数式编程

_在 Go 中支持函数式编程的包。_

- [fp-go](https://github.com/repeale/fp-go) - 由 Golang 1.18+ 泛型驱动的函数式编程辅助函数集合。
- [fpGo](https://github.com/TeaEntityLab/fpGo) - 为 Golang 提供 Monad 等函数式编程特性。
- [fuego](https://github.com/seborama/fuego) - Go 中的函数式实验。
- [FuncFrog](https://github.com/koss-null/FuncFrog) - 函数式辅助库，在 Go1.18+ 泛型切片上提供 Map、Filter、Reduce 等流操作，具备惰性求值和错误处理机制。
- [g](https://github.com/enetx/g) - 适用于 Go 的函数式编程框架。
- [go-functional](https://github.com/BooleanCat/go-functional) - 使用泛型在 Go 中进行函数式编程
- [go-underscore](https://github.com/tobyhede/go-underscore) - 实用的函数式 Go 集合工具合集。
- [gofp](https://github.com/rbrahul/gofp) - 类似 lodash 的强大 Golang 工具库。
- [mo](https://github.com/samber/mo) - 基于 Go 1.18+ 泛型的 Monad 和常用函数式编程抽象（Option、Result、Either 等）。
- [underscore](https://github.com/rjNemo/underscore) - 适用于 Go 1.18 及更高版本的函数式编程辅助工具。
- [valor](https://github.com/phelmkamp/valor) - 可选择性包含值的泛型 Option 和 Result 类型。

**[⬆ 返回顶部](#contents)**

## 游戏开发

_出色的游戏开发库。_

- [Ark](https://github.com/mlange-42/ark) - 适用于 Go 的基于原型（Archetype）的实体组件系统（ECS）。
- [due](https://github.com/dobyte/due) - 采用模块化组件设计的分布式游戏服务器框架，提供 tcp、kcp、ws 和 quic 网关。
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - 极其简单的 Go 2D 游戏引擎。
- [ecs](https://github.com/andygeiss/ecs) - 在 Golang 中基于实体组件系统概念构建你自己的游戏引擎。
- [engo](https://github.com/EngoEngine/engo) - Engo 是一个用 Go 编写的开源 2D 游戏引擎。它遵循实体-组件-系统范式。
- [fantasyname](https://github.com/s0rg/fantasyname) - 奇幻名称生成器。
- [g3n](https://github.com/g3n/engine) - Go 3D 游戏引擎。
- [go-astar](https://github.com/beefsack/go-astar) - A\* 寻路算法的 Go 实现。
- [go-sdl2](https://github.com/veandco/go-sdl2) - [Simple DirectMedia Layer](https://www.libsdl.org/) 的 Go 绑定。
- [go3d](https://github.com/ungerik/go3d) - 面向性能的 Go 2D/3D 数学包。
- [gogpu](https://github.com/gogpu/gogpu) - 基于 WebGPU 构建的 GPU 应用框架，提供窗口、输入和渲染功能——将 480 多行 GPU 代码精简到约 20 行，零 CGO（GoGPU 生态系统：[gg](https://github.com/gogpu/gg)、[ui](https://github.com/gogpu/ui)、[wgpu](https://github.com/gogpu/wgpu)、[naga](https://github.com/gogpu/naga)）。
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - 纯 Go 的 WebGPU 实现，支持 Vulkan、DX12 和 Metal 后端，零 CGO（[GoGPU](https://github.com/gogpu) 生态系统的一部分）。
- [GOKe](https://github.com/kjkrol/goke) - 面向数据（DOD）、基于原型的 ECS 引擎，采用与 L1 缓存对齐的分块 SoA 布局，实现可预测的无级内存增长和零分配执行路径。
- [gonet](https://github.com/xtaci/gonet) - 用 Golang 实现的游戏服务器骨架。
- [goworld](https://github.com/xiaonanln/goworld) - 可扩展的游戏服务器引擎，具备空间-实体框架和热替换功能。
- [grid](https://github.com/s0rg/grid) - 泛型 2D 网格，支持光线投射、阴影投射和寻路。
- [Leaf](https://github.com/name5566/leaf) - 轻量级游戏服务器框架。
- [nano](https://github.com/lonng/nano) - 轻量、便捷、高性能的 Golang 游戏服务器框架。
- [Oak](https://github.com/oakmound/oak) - 纯 Go 游戏引擎。
- [Pi](https://github.com/elgopher/pi) - 为现代计算机创作复古游戏的游戏引擎。灵感来自 Pico-8，由 Ebitengine 驱动。
- [Pitaya](https://github.com/topfreegames/pitaya) - 可扩展的游戏服务器框架，支持集群，并通过 C SDK 提供 iOS、Android、Unity 等平台的客户端库。
- [Pixel](https://github.com/gopxl/pixel) - 用 Go 精心打造的 2D 游戏库。
- [prototype](https://github.com/gonutz/prototype) - 使用极简 API 创建桌面游戏的跨平台（Windows/Linux/Mac）库。
- [raylib-go](https://github.com/gen2brain/raylib-go) - [raylib](https://www.raylib.com/) 的 Go 绑定；raylib 是一个用于学习电子游戏编程的简单易用的库。
- [sceneCamera](https://github.com/donomii/sceneCamera) - 适用于博物馆、FPS、RTS 和立体渲染模式的相机移动及视图/投影矩阵。
- [termloop](https://github.com/JoelOtter/termloop) - 基于 Termbox 构建的 Go 终端游戏引擎。
- [tile](https://github.com/kelindar/tile) - 面向数据且缓存友好的 2D 网格库（TileMap），包含寻路、观察者以及导入/导出功能。

**[⬆ 返回顶部](#contents)**

## 生成器

_生成 Go 代码的工具。_

- [apispec](https://github.com/ehabterra/apispec) - 无需注解即可从 Go 代码生成 OpenAPI 3.1 规范，并提供浏览器 UI 用于配置、预览和探索调用图。
- [convergen](https://github.com/reedom/convergen) - 功能丰富的类型间复制代码生成器。
- [copygen](https://github.com/switchupcb/copygen) - 基于 Go 类型生成任意代码，包括类型间转换器（复制代码），默认不使用反射。
- [generis](https://github.com/senselogic/GENERIS) - 代码生成工具，提供泛型、自由格式宏、条件编译和 HTML 模板功能。
- [go-apispec](https://github.com/antst/go-apispec) - 通过静态分析从 Go 源代码生成 OpenAPI 3.1 规范，并自动检测所用框架。
- [go-enum](https://github.com/abice/go-enum) - 根据代码注释生成枚举代码。
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - 根据代码注释生成枚举编码代码。
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - 适用于 Go 的类 .NET LINQ 查询方法。
- [goderive](https://github.com/awalterschulze/goderive) - 根据输入类型派生函数
- [goverter](https://github.com/jmattheis/goverter) - 通过定义接口生成转换器。
- [GoWrap](https://github.com/hexdigest/gowrap) - 使用简单模板为 Go 接口生成装饰器。
- [interfaces](https://github.com/rjeczalik/interfaces) - 生成接口定义的命令行工具。
- [jennifer](https://github.com/dave/jennifer) - 无需模板即可生成任意 Go 代码。
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - 该包包含一组实用工具，可根据 OpenAPI 3.0 API 定义为服务生成 Go 样板代码。
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - 根据 protobuf 生成 HTTP 服务器和客户端。
- [protoc-gen-mcp](https://github.com/easyp-tech/protoc-gen-mcp) - 根据 Protocol Buffers 生成类型化的 MCP 工具、提示词和资源。
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - 动态创建类型的库。

**[⬆ 返回顶部](#contents)**

## 地理信息

_地理信息工具和服务器_

- [borders](https://github.com/kpfaulkner/borders) - 检测图像边界并转换为 GeoJSON，以用于 GIS 操作。
* [geo-engine-go](https://github.com/AlexG695/geo-engine-go) - GeoEngine 的官方 Go SDK，提供延迟仅为个位数毫秒的高性能地理空间数据摄取。
- [geoos](https://github.com/spatial-go/geoos) - 提供空间数据和几何算法的库。
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserver 是一个通过 GeoServer REST API 操作 GeoServer 实例的 Go 包。
- [gismanager](https://github.com/hishamkaram/gismanager) - 将你的 GIS 数据（矢量数据）发布到 PostGIS 和 Geoserver。
- [godal](https://github.com/airbusgeo/godal) - GDAL 的 Go 封装。
- [H3](https://github.com/uber/h3-go) - H3 的 Go 绑定；H3 是一个分层六边形地理空间索引系统。
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - H3 索引与 GeoJSON 之间的转换工具。
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - 按虚拟节点分配 Uber H3geo 单元格。
- [mbtileserver](https://github.com/consbio/mbtileserver) - 基于 Go 的简单服务器，用于提供以 mbtiles 格式存储的地图瓦片。
- [osm](https://github.com/paulmach/osm) - 用于读取、写入和处理 OpenStreetMap 数据及 API 的库。
- [pbf](https://github.com/maguro/pbf) - OpenStreetMap PBF 的 Golang 编码器/解码器。
- [S2 geojson](https://github.com/pantrif/s2-geojson) - 将 geojson 转换为 s2 单元格，并在地图上演示一些 S2 几何特性。
- [S2 geometry](https://github.com/golang/geo) - 用 Go 编写的 S2 几何库。
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeatures 是一个 2D 几何库，提供对几何图形建模的 Go 类型以及操作这些图形的算法。
- [Tile38](https://github.com/tidwall/tile38) - 带空间索引和实时地理围栏的地理位置数据库。
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) 使用 Web 墨卡托投影，轻松使用和转换经纬度、点和瓦片，以便在地图中显示信息、标记等。
- [WGS84](https://github.com/wroge/wgs84) - 坐标转换与变换库（ETRS89、OSGB36、NAD83、RGF93、Web Mercator、UTM）。

**[⬆ 返回顶部](#contents)**

## Go 编译器

_将 Go 编译为其他语言（以及反向编译）的工具。_

- [bunster](https://github.com/yassinebenaid/bunster) - 将 shell 脚本编译为 Go。
- [c4go](https://github.com/Konstantin8105/c4go) - 将 C 代码转译为 Go 代码。
- [cxgo](https://github.com/gotranspile/cxgo) - 将 C 代码转译为 Go 代码。
- [esp32](https://github.com/andygeiss/esp32-transpiler) - 将 Go 转译为 Arduino 代码。
- [f4go](https://github.com/Konstantin8105/f4go) - 将 FORTRAN 77 代码转译为 Go 代码。
- [go2hx](https://github.com/go2hx/go2hx) - 从 Go 编译到 Haxe，再到 Javascript/C++/Java/C# 的编译器。
- [gopherjs](https://github.com/gopherjs/gopherjs) - 从 Go 到 JavaScript 的编译器。

**[⬆ 返回顶部](#contents)**

## Goroutine

_用于管理和使用 Goroutine 的工具。_

- [anchor](https://github.com/kyuff/anchor) - 在微服务架构中管理组件生命周期的库。
- [ants](https://github.com/panjf2000/ants) - 高性能、低开销的 Go goroutine 池。
- [artifex](https://github.com/borderstech/artifex) - 基于 worker 分发的简单 Golang 内存作业队列。
- [async](https://github.com/yaitoo/async) - 适用于 Go 的 async/await 风格异步任务包。
- [async](https://github.com/reugn/async) - Go 的另一种同步库（Future、Promise、锁）。
- [async](https://github.com/studiosol/async) - 安全地异步执行函数，并在发生 panic 时进行恢复。
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJob 是一个异步队列作业管理器，代码轻量、清晰且快速。
- [autopool](https://github.com/AshvinBambhaniya/autopool) - 零配置、自动伸缩的 Go worker 池，支持感知优先级的调度。
- [breaker](https://github.com/kamilsk/breaker) - 让执行流可被中断的灵活机制。
- [channelify](https://github.com/ddelizia/channelify) - 将函数转换为返回 channel 的形式，实现简单而强大的并行处理。
- [conc](https://github.com/sourcegraph/conc) - `conc` 是你在 Go 中进行结构化并发的工具集，让常见任务更简单、更安全。
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - 并发限制器，支持超时、动态优先级以及 goroutine 的上下文取消。
- [conexec](https://github.com/ITcathyh/conexec) - 帮助以高效、安全的方式并发执行函数的并发工具包。支持指定整体超时以避免阻塞，并使用 goroutine 池提高效率。
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - Golang 版 CyclicBarrier。
- [execpool](https://github.com/hexdigest/execpool) - 围绕 exec.Cmd 构建的进程池，预先启动指定数量的进程，并在需要时为其连接 stdin 和 stdout。与 FastCGI 或 Apache Prefork MPM 非常相似，但适用于任何命令。
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - 让结构化并发变得简单。
- [go-accumulator](https://github.com/nar10z/go-accumulator) - 用于累积事件并在之后进行处理的解决方案。
- [go-actor](https://github.com/vladopajic/go-actor) - 使用 Actor 模型编写并发程序的小型库。
- [go-floc](https://github.com/workanator/go-floc) - 轻松编排 goroutine。
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - 控制 goroutine 的执行顺序。
- [go-future](https://github.com/jizhuozhi/go-future) - Future/Promise 库，提供泛型组合器和 DAG 执行引擎。
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - 使用这个 API 简单的轻量级库管理 goroutine 池。
- [go-trylock](https://github.com/subchen/go-trylock) - 为 Golang 读写锁提供 TryLock 支持。
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - 类似 `sync.WaitGroup`，并支持错误处理和并发控制。
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - 受 Java 线程池启发，Go WorkerPool 旨在控制繁重的 goroutine。
- [goccm](https://github.com/zenthangplus/goccm) - Go 并发管理器包，限制允许并发运行的 goroutine 数量。
- [gohive](https://github.com/loveleshsharma/gohive) - 高性能且易于使用的 Go goroutine 池。
- [gollback](https://github.com/vardius/gollback) - 简单的异步函数工具，用于管理闭包和回调的执行。
- [goscade](https://github.com/ognick/goscade) - 极简的 Go 组件生命周期编排器，支持依赖图、启动排序、就绪协调和优雅关闭。
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowl 同时是进程管理和进程监控工具。无限 worker 池让你能够控制池和进程，并监控其状态。
- [goworker](https://github.com/benmanns/goworker) - goworker 是一个基于 Go 的后台 worker。
- [gowp](https://github.com/xxjwxc/gowp) - gowp 是一个限制并发的 goroutine 池。
- [gpool](https://github.com/Sherifabdlnaby/gpool) - 管理一个可调整大小、感知上下文的 goroutine 池，以限制并发度。
- [grpool](https://github.com/ivpusic/grpool) - 轻量级 goroutine 池。
- [hands](https://github.com/duanckham/hands) - 用于控制多个 goroutine 执行和返回策略的流程控制器。
- [Hunch](https://github.com/AaronJan/Hunch) - Hunch 提供 `All`、`First`、`Retry`、`Waterfall` 等函数，让异步流程控制更加直观。
- [kyoo](https://github.com/dirkaholic/kyoo) - 提供无限作业队列和并发 worker 池。
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - `sync/errgroup` 的直接替代品，限制为 N 个 worker goroutine 组成的池。
- [nursery](https://github.com/arunsworld/nursery) - Go 中的结构化并发。
- [oversight](https://pkg.go.dev/cirello.io/oversight) - Oversight 是 Erlang 监督树的完整实现。
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - 并行运行函数。
- [pond](https://github.com/alitto/pond) - 用 Go 编写的极简高性能 goroutine worker 池。
- [pool](https://github.com/go-playground/pool) - 有限消费者 goroutine 池或无限 goroutine 池，便于处理和取消 goroutine。
- [powerlock](https://github.com/donomii/powerlock) - 具名 FIFO 互斥锁，支持上下文取消、有界等待队列、看门狗诊断、pprof 性能分析和 Prometheus 指标。
- [rill](https://github.com/destel/rill) - 用于实现简洁、可组合、基于 channel 的并发的 Go 工具包。
- [routine](https://github.com/timandy/routine) - `routine` 是一个 Go 版的 `ThreadLocal` 库。它封装并提供了一些易于使用、无竞争、高性能的 `goroutine` 上下文访问接口，帮助你更优雅地访问协程上下文信息。
- [routine](https://github.com/x-mod/routine) - 基于上下文的 goroutine 控制，支持 Main、Go、Pool 以及一些实用的执行器。
- [semaphore](https://github.com/kamilsk/semaphore) - 基于 channel 和上下文的信号量模式实现，支持加锁/解锁操作超时。
- [semaphore](https://github.com/marusama/semaphore) - 基于 CAS 的快速可调整大小信号量实现（比基于 channel 的信号量实现更快）。
- [stl](https://github.com/ssgreg/stl) - 基于软件事务内存（STM）并发控制机制的软件事务锁。
- [threadpool](https://github.com/shettyh/threadpool) - Golang 线程池实现。
- [tunny](https://github.com/Jeffail/tunny) - 适用于 Golang 的 goroutine 池。
- [worker-pool](https://github.com/vardius/worker-pool) - goworker 是一个简单的 Go 异步 worker 池。
- [workerpool](https://github.com/gammazero/workerpool) - 限制任务执行并发度（而非排队任务数量）的 goroutine 池。

**[⬆ 返回顶部](#contents)**

## 图形用户界面（GUI）

_用于构建 GUI 应用程序的库。_

_工具包_

- [app](https://github.com/murlokswarm/app) - 使用 GO、HTML 和 CSS 创建应用的包。支持：MacOS，Windows 支持正在开发中。
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - 通过 [cimgui](https://github.com/cimgui/cimgui) 自动生成的 [Dear ImGui](https://github.com/ocornut/imgui) Go 封装。
- [Cogent Core](https://github.com/cogentcore/core) - 用于构建可在 macOS、Windows、Linux、iOS、Android 和 Web 上运行的 2D 和 3D 应用的框架。
- [DarwinKit](https://github.com/progrium/darwinkit) - 使用 Go 构建原生 macOS 应用。
- [energy](https://github.com/energye/energy) - 基于 LCL（原生系统 UI 控件库）和 CEF（Chromium Embedded Framework）的跨平台框架（Windows/ macOS / Linux）
- [fyne](https://github.com/fyne-io/fyne) - 为 Go 设计、基于 Material Design 的跨平台原生 GUI。支持：Linux、macOS、Windows、BSD、iOS 和 Android。
- [gio](https://gioui.org) - Gio 是一个用 Go 编写跨平台即时模式 GUI 的库。Gio 支持所有主流平台：Linux、macOS、Windows、Android、iOS、FreeBSD、OpenBSD 和 WebAssembly。
- [go-gtk](https://mattn.github.io/go-gtk/) - GTK 的 Go 绑定。
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - Sciter 的 Go 绑定：用于现代桌面 UI 开发的可嵌入 HTML/CSS/脚本引擎。跨平台。
- [Goey](https://bitbucket.org/rj/goey/src/master/) - 适用于 Windows / Linux / Mac 的跨平台 UI 工具包聚合器。支持 GTK、Cocoa、Windows API
- [gogpu/ui](https://github.com/gogpu/ui) - GPU 加速的 GUI 工具包，提供 22 个控件、3 套设计系统（Material、Fluent、Cupertino）和响应式信号，零 CGO（[GoGPU](https://github.com/gogpu) 生态系统的一部分）。
- [goradd/html5tag](https://github.com/goradd/html5tag) - 输出 HTML5 标签的库。
- [gotk3](https://github.com/gotk3/gotk3) - GTK3 的 Go 绑定。
- [gowd](https://github.com/dtylman/gowd) - 使用 GO、HTML、CSS 和 NW.js 快速简单地开发桌面 UI。跨平台。
- [proton](https://github.com/CzaxStudio/proton) - 基于 Gio 构建的纯 Go 即时模式 GUI 框架，零 Cgo 依赖。
- [qt](https://github.com/therecipe/qt) - Qt 的 Go 绑定（支持 Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi）。
- [Spot](https://github.com/roblillack/spot) - 响应式跨平台桌面 GUI 工具包。
- [ui](https://github.com/andlabs/ui) - 适用于 Go 的平台原生 GUI 库。跨平台。
- [unison](https://github.com/richardwilkes/unison) - 面向 Go 桌面应用的统一图形用户体验工具包。支持 macOS、Windows 和 Linux。
- [Wails](https://wails.io) - 使用操作系统内置 HTML 渲染器、以 HTML 作为 UI 的 Mac、Windows、Linux 桌面应用。
- [walk](https://github.com/lxn/walk) - 适用于 Go 的 Windows 应用程序库工具包。
- [webview](https://github.com/zserge/webview) - 跨平台 webview 窗口，提供简单的 JavaScript 双向绑定（Windows / macOS / Linux）。

_交互_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - libappindicator3 C 库的 Go 绑定。
- [gogpu/systray](https://github.com/gogpu/systray) - 适用于 Windows、macOS 和 Linux 的纯 Go 系统托盘库，零 CGO（[GoGPU](https://github.com/gogpu) 生态系统的一部分）。
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - 适用于 Go 的 OSX 桌面通知库。
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - 在你的机器上发生任何（可插拔的）活动时发出通知的 OSX 库。
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - 用 Golang 实现的 OSX 睡眠/唤醒通知。
- [robotgo](https://github.com/go-vgo/robotgo) - Go 原生的跨平台 GUI 系统自动化。可控制鼠标、键盘等。
- [systray](https://github.com/getlantern/systray) - 在通知区域放置图标和菜单的跨平台 Go 库。
- [trayhost](https://github.com/shurcooL/trayhost) - 在宿主操作系统任务栏中放置图标的跨平台 Go 库。
- [zenity](https://github.com/ncruces/zenity) - 跨平台 Go 库和 CLI，用于创建与用户进行图形化交互的简单对话框。

**[⬆ 返回顶部](#contents)**

## 硬件

_用于与硬件交互的库、工具和教程。_

- [arduino-cli](https://github.com/arduino/arduino-cli) - 官方 Arduino CLI 和库。可独立运行，也可集成到更大的 Go 项目中。
- [emgo](https://github.com/ziutek/emgo) - 用于嵌入式系统编程（例如 STM32 MCU）的类 Go 语言。
- [ghw](https://github.com/jaypipes/ghw) - Golang 硬件发现/检查库。
- [go-osc](https://github.com/hypebeast/go-osc) - 适用于 Go 的开放声音控制（OSC）绑定。
- [go-rpio](https://github.com/stianeikeland/go-rpio) - 适用于 Go 的 GPIO 库，不需要 cgo。
- [goroslib](https://github.com/aler9/goroslib) - 适用于 Go 的机器人操作系统（ROS）库。
- [joystick](https://github.com/0xcafed00d/joystick) - 基于轮询的 API，用于读取已连接操纵杆的状态。
- [moody](https://github.com/dinakars777/moody) - 适用于 macOS 的硬件事件“个性”守护进程。监控 USB、充电器、屏幕合盖等硬件事件，并以可自定义的个性作出响应。
- [sysinfo](https://github.com/zcalusic/sysinfo) - 提供 Linux 操作系统/内核/硬件系统信息的纯 Go 库。

**[⬆ 返回顶部](#contents)**

## 图像

_用于处理图像的库。_

- [bild](https://github.com/anthonynsimon/bild) - 纯 Go 实现的图像处理算法集合。
- [bimg](https://github.com/h2non/bimg) - 使用 libvips 进行快速高效图像处理的小型包。
- [cameron](https://github.com/aofei/cameron) - 适用于 Go 的头像生成器。
- [canvas](https://github.com/tdewolff/canvas) - 将矢量图形转换为 PDF、SVG 或栅格图像。
- [color-extractor](https://github.com/marekm4/color-extractor) - 无外部依赖的主色提取器。
- [darkroom](https://github.com/gojek/darkroom) - 图像代理，可更换存储后端和图像处理引擎，注重速度和弹性。
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - 使用 libvips 的图像优化与转换 API，可部署到 AWS Lambda 和 CloudFront。
- [geopattern](https://github.com/pravj/geopattern) - 根据字符串生成精美的图像图案。
- [gg](https://github.com/fogleman/gg) - 纯 Go 实现的 2D 渲染。
- [gift](https://github.com/disintegration/gift) - 图像处理滤镜包。
- [gltf](https://github.com/qmuntal/gltf) - 高效且健壮的 glTF 2.0 读取器、写入器和验证器。
- [go-cairo](https://github.com/ungerik/go-cairo) - cairo 图形库的 Go 绑定。
- [go-gd](https://github.com/bolknote/go-gd) - GD 库的 Go 绑定。
- [go-nude](https://github.com/koyachi/go-nude) - 用 Go 实现的裸露内容检测。
- [go-qrcode](https://github.com/yeqown/go-qrcode) - 生成具有个性化样式的二维码，可调整颜色、块大小、形状和图标。
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - 将 webcolors 库从 Python 移植到 Go。
- [go-webp](https://github.com/kolesa-team/go-webp) - 使用 libwebp 编码和解码 webp 图片的库。
- [gocv](https://github.com/hybridgroup/gocv) - 使用 OpenCV 3.3+ 进行计算机视觉处理的 Go 包。
- [gogpu/gg](https://github.com/gogpu/gg) - GPU 加速的 2D 渲染，提供类 Canvas 的 API，零 CGO（[GoGPU](https://github.com/gogpu) 纯 Go 图形生态系统的一部分）。
- [goimagehash](https://github.com/corona10/goimagehash) - Go 感知图像哈希包。
- [goimghdr](https://github.com/corona10/goimghdr) - Go 版 imghdr 模块，用于判断文件中所含图像的类型。
- [govatar](https://github.com/o1egl/govatar) - 生成有趣头像的库和命令行工具。
- [govips](https://github.com/davidbyttow/govips) - 适用于 Go 的极速图像处理和缩放库。
- [gowitness](https://github.com/sensepost/gowitness) - 在命令行中使用 Go 和无头 Chrome 截取网页截图。
- [gridder](https://github.com/shomali11/gridder) - 基于网格的 2D 图形库。
- [image2ascii](https://github.com/qeesung/image2ascii) - 将图像转换为 ASCII。
- [imagick](https://github.com/gographics/imagick) - ImageMagick 的 MagickWand C API 的 Go 绑定。
- [imaginary](https://github.com/h2non/imaginary) - 快速简单的图像缩放 HTTP 微服务。
- [imaging](https://github.com/disintegration/imaging) - 简单的 Go 图像处理包。
- [imagor](https://github.com/cshum/imagor) - 使用 libvips 的快速、安全的图像处理服务器和 Go 库。
- [img](https://github.com/hawx/img) - 一组精选的图像处理工具。
- [ln](https://github.com/fogleman/ln) - 用 Go 实现的 3D 线条艺术渲染。
- [mergi](https://github.com/noelyahan/mergi) - 用于图像处理（合并、裁剪、缩放、水印、动画）的工具和 Go 库。
- [mort](https://github.com/aldor007/mort) - 用 Go 编写的存储与图像处理服务器。
- [mpo](https://github.com/donatj/mpo) - MPO 3D 照片的解码器和转换工具。
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - Go 原生 WebP 编码器，零外部依赖。
- [picfit](https://github.com/thoas/picfit) - 用 Go 编写的图像缩放服务器。
- [pt](https://github.com/fogleman/pt) - 用 Go 编写的路径追踪引擎。
- [scout](https://github.com/jonoton/scout) - Scout 是一个用于 DIY 视频安防的独立开源软件解决方案。
- [smartcrop](https://github.com/muesli/smartcrop) - 为任意图像和裁剪尺寸找到合适的裁剪区域。
- [steganography](https://github.com/auyer/steganography) - 用于 LSB 隐写的纯 Go 库。
- [stegify](https://github.com/DimitarPetrov/stegify) - 用于 LSB 隐写的 Go 工具，可将任意文件隐藏在图像中。
- [svgo](https://github.com/ajstarks/svgo) - 用于生成 SVG 的 Go 语言库。
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgs 使用新一代格式为 Web 缩放和优化图像。
- [webp-server](https://github.com/mehdipourfar/webp-server) - 简单精简的图像服务器，可存储、缩放、转换和缓存图像。

**[⬆ 返回顶部](#contents)**

## 物联网（IoT）

_用于为物联网设备编程的库。_

- [connectordb](https://github.com/connectordb/connectordb) - 面向量化自我和物联网的开源平台。
- [devices](https://github.com/goiot/devices) - 面向物联网设备的一套库，用于 x/exp/io 的实验。
- [ekuiper](https://github.com/lf-edge/ekuiper) - 面向物联网边缘的轻量级数据流处理引擎。
- [eywa](https://github.com/xcodersun/eywa) - Eywa 项目本质上是一个跟踪已连接设备的连接管理器。
- [flogo](https://github.com/tibcosoftware/flogo) - Flogo 项目是一个面向物联网边缘应用与集成的开源框架。
- [gatt](https://github.com/paypal/gatt) - Gatt 是一个用于构建低功耗蓝牙外设的 Go 包。
- [gobot](https://github.com/hybridgroup/gobot/) - Gobot 是一个面向机器人、物理计算和物联网的框架。
- [huego](https://github.com/amimof/huego) - 功能全面的 Go 版 Philips Hue 客户端库。
- [iot](https://github.com/vaelen/iot/) - IoT 是一个用于实现 Google IoT Core 设备的简单框架。
- [periph](https://periph.io/) - 用于与底层板载设施交互的外设 I/O。
- [rulego](https://github.com/rulego/rulego) - RuleGo 是一个面向物联网边缘的轻量级、高性能、可嵌入、可编排的组件化规则引擎。
- [sensorbee](https://github.com/sensorbee/sensorbee) - 面向物联网的轻量级流处理引擎。
- [shifu](https://github.com/Edgenesis/shifu) - Kubernetes 原生的物联网开发框架。
- [smart-home](https://github.com/e154/smart-home) - 用于物联网自动化的软件包。

**[⬆ 返回顶部](#contents)**

## 作业调度器

_用于调度作业的库。_

- [cdule](https://github.com/deepaksinghvi/cdule) - 支持数据库的作业调度库
- [cheek](https://github.com/bart6114/cheek) - 类似 crontab 的简单调度器，旨在以 KISS 方式进行作业调度。
- [clockwerk](https://github.com/onatm/clockwerk) - 使用简单流畅的语法调度周期性作业的 Go 包。
- [cronticker](https://github.com/krayzpipes/cronticker) - 支持 cron 调度的 ticker 实现。
- [go-cron](https://github.com/rk/go-cron) - 简单的 Go Cron 库，可按不同时间间隔执行闭包或函数，间隔从每秒一次到每年在特定日期和时间执行一次不等。主要用于 Web 应用和长时间运行的守护进程。
- [go-cron](https://github.com/netresearch/go-cron) - Cron 作业调度器，支持运行时更新调度、每个条目独立的上下文、弹性中间件（重试、熔断、限流）和可观测性钩子；是 robfig/cron 的后继者。
- [go-job](https://github.com/cybergarage/go-job) - 灵活且可扩展的 Go 作业调度与执行库。
- [go-quartz](https://github.com/reugn/go-quartz) - 简单、零依赖的 Go 调度库。
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - 作业调度器，支持标准 cron 表达式、自定义描述符、时间间隔和任务依赖。
- [gocron](https://github.com/go-co-op/gocron) - 简单流畅的 Go 作业调度。这是 [jasonlvhit/gocron](https://github.com/jasonlvhit/gocron) 的一个积极维护的分支。
- [goflow](https://github.com/fieldryand/goflow) - 简单而强大的 DAG 调度器和仪表盘。
- [gron](https://github.com/roylee0704/gron) - 使用简单的 Go API 定义基于时间的任务，Gron 的调度器会按计划运行它们。
- [gronx](https://github.com/adhocore/gronx) - Cron 表达式解析器、任务运行器和守护进程，可处理类 crontab 的任务列表。
- [JobRunner](https://github.com/bamzi/jobrunner) - 智能且功能丰富的 cron 作业调度器，内置作业排队和实时监控。
- [leprechaun](https://github.com/kilgaloon/leprechaun) - 支持 Webhook、cron 和传统调度方式的作业调度器。
- [ofelia](https://github.com/netresearch/ofelia) - Docker 作业调度器（Docker 版 crontab）；mcuadros/ofelia 的分支，增加了 Web UI、作业依赖、重试和作业持久化。
- [pending](https://github.com/kahoon/pending) - 基于 ID 的防抖任务调度器，用于延迟任务，支持取消、优雅关闭和可选的并发限制。
- [sched](https://github.com/romshark/sched) - 能够快进时间的作业调度器。
- [scheduler](https://github.com/carlescere/scheduler) - 让 Cron 作业调度变得简单。
- [scheduler](https://github.com/yuseferi/scheduler) - Go 原生的分布式作业调度器，支持延迟任务、批量 Redis 协调、重试、基于租约的恢复和带版本的队列分区。
- [tasks](https://github.com/madflojo/tasks) - 易于使用的 Go 进程内周期任务调度器。
- [tickstem/cron](https://github.com/tickstem/cron) - 用于调度 HTTP cron 作业的 Go 客户端，提供执行历史和失败告警，并附带 tsk-local，可在没有真实凭据的情况下测试处理器。
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - 用于“死人开关”心跳监控的 Go 客户端：每次作业运行后 ping 一个 URL，如果 ping 停止到达，就会通过电子邮件收到告警。

**[⬆ 返回顶部](#contents)**

## JSON

_用于处理 JSON 的库。_

- [ajson](https://github.com/spyzhov/ajson) - 适用于 Golang 的抽象 JSON，支持 JSONPath。
- [ask](https://github.com/simonnilsson/ask) - 轻松访问映射和切片中的嵌套值。可与 encoding/json 以及其他将任意数据“反序列化”为 Go 数据类型的包配合使用。
- [dynjson](https://github.com/cocoonspace/dynjson) - 面向动态 API、可由客户端定制的 JSON 格式。
- [ej](https://github.com/lucassscaravelli/ej) - 简洁地从不同来源读写 JSON。
- [epoch](https://github.com/vtopc/epoch) - 包含在 JSON 中实现 Unix 时间戳/纪元与内置 time.Time 类型之间序列化/反序列化的原语。
- [fastjson](https://github.com/valyala/fastjson) - 适用于 Go 的快速 JSON 解析器和验证器。无需自定义结构体，无需代码生成，无需反射。
- [gabs](https://github.com/Jeffail/gabs) - 用于在 Go 中解析、创建和编辑未知或动态 JSON。
- [gjo](https://github.com/skanehira/gjo) - 创建 JSON 对象的小工具。
- [GJSON](https://github.com/tidwall/gjson) - 用一行代码获取 JSON 值。
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonError 旨在让我们轻松创建遵循 JsonApi 规范的 JSON 响应错误。
- [go-respond](https://github.com/nicklaw5/go-respond) - 处理常见 HTTP JSON 响应的 Go 包。
- [gojmapr](https://github.com/limiu82214/gojmapr) - 通过 JSON 路径从复杂 JSON 中获取简单结构体。
- [gojq](https://github.com/elgs/gojq) - Golang 中的 JSON 查询。
- [gojson](https://github.com/ChimeraCoder/gojson) - 根据示例 JSON 自动生成 Go（golang）结构体定义。
- [htmljson](https://github.com/nikolaydubina/htmljson) - 在 Go 中将 JSON 富渲染为 HTML。
- [JayDiff](https://github.com/yazgazan/jaydiff) - 用 Go 编写的 JSON 差异比较工具。
- [jettison](https://github.com/wI2L/jettison) - 适用于 Go 的快速灵活的 JSON 编码器。
- [jscan](https://github.com/romshark/jscan) - 高性能、零分配的 JSON 迭代器。
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - 将 JSON 转换为 Go 结构体。
- [JSON-to-Proto](https://json-to-proto.github.io/) - 在线将 JSON 转换为 Protobuf。
- [json2go](https://github.com/m-zajac/json2go) - 高级的 JSON 到 Go 结构体转换。提供一个可解析多个 JSON 文档并创建适配所有文档的结构体的包。
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - 基于 JSON API 错误参考的 Go 绑定。
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - `encoding/json` 的直接替代品，可输出彩色 JSON。
- [jsondiff](https://github.com/wI2L/jsondiff) - 基于 RFC6902（JSON Patch）的 Go JSON 差异比较库。
- [jsonf](https://github.com/miolini/jsonf) - 控制台工具，可对 JSON 进行高亮格式化，并通过结构查询提取 JSON。
- [jsongo](https://github.com/ricardolonga/jsongo) - 流畅的 API，让创建 JSON 对象更加容易。
- [jsonhal](https://github.com/RichardKnop/jsonhal) - 简单的 Go 包，可将自定义结构体序列化为兼容 HAL 的 JSON 响应。
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - 提供简单处理器的 JSON 库，让你轻松地从各种来源读写 JSON。
- [jsonic](https://github.com/sinhashubham95/jsonic) - 无需定义结构体即可以类型安全的方式处理和查询 JSON 的工具。
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - 处理非结构化 JSON 数据的快速便捷库，可替代 `encoding/json`。
- [jzon](https://github.com/zerosnake0/jzon) - API/行为与标准库兼容的 JSON 库。
- [kazaam](https://github.com/Qntfy/kazaam) - 对 JSON 文档进行任意转换的 API。
- [mapslice-json](https://github.com/mickep76/mapslice-json) - Go MapSlice，用于在 JSON 中对映射进行有序的序列化/反序列化。
- [marshmallow](https://github.com/PerimeterX/marshmallow) - 面向灵活用例的高性能 JSON 反序列化。
- [mp](https://github.com/sanbornm/mp) - 简单的命令行电子邮件解析器。目前从 stdin 读取输入并输出 JSON。
- [OjG](https://github.com/ohler55/ojg) - Optimized JSON for Go 是一个高性能解析器，附带包括 JSONPath 在内的多种 JSON 工具。
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - 简单的 JSON 解析器，可通过 Golang 结构体字段标签按条件进行验证。
- [silentjson](https://github.com/GenshIv/silentjson) - 利用 AVX2 SIMD 指令的零分配 JSON 边界扫描器和分割器。
- [SJSON](https://github.com/tidwall/sjson) - 用一行代码设置 JSON 值。
- [ujson](https://github.com/olvrng/ujson) - 快速精简的 JSON 解析器和转换器，适用于非结构化 JSON。
- [vjson](https://github.com/miladibra10/vjson) - 通过流畅的 API 声明 JSON Schema 来验证 JSON 对象的 Go 包。

**[⬆ 返回顶部](#contents)**

## 日志

_用于生成和处理日志文件的库。_

- [caarlos0/log](https://github.com/caarlos0/log) - 彩色 CLI 日志记录器。
- [distillog](https://github.com/amoghe/distillog) - 精炼的分级日志（可以将其视为标准库 + 日志级别）。
- [glg](https://github.com/kpango/glg) - glg 是一个简单快速的 Go 分级日志库。
- [glo](https://github.com/lajosbencz/glo) - 受 PHP Monolog 启发的日志工具，具有相同的严重级别。
- [glog](https://github.com/golang/glog) - 适用于 Go 的分级执行日志。
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - 简单的写入器，可像 cronolog 一样根据当前日期和时间自动轮转日志文件。
- [go-log](https://github.com/pieterclaerhout/go-log) - 支持堆栈跟踪、对象转储和可选时间戳的日志库。
- [go-log](https://github.com/subchen/go-log) - 简单且可配置的 Go 日志，支持级别、格式化器和写入器。
- [go-log](https://github.com/siddontang/go-log) - 支持级别和多处理器的日志库。
- [go-log](https://github.com/ian-kent/go-log) - 用 Go 实现的 Log4j。
- [go-log4g](https://github.com/go-log4g/core) - Log4g 为 Go 标准的 log/slog 日志门面提供 Log4j 风格的配置和模式布局。
- [go-logger](https://github.com/apsdehal/go-logger) - 适用于 Go 程序的简单日志记录器，带有级别处理器。
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - 仅追加、哈希链式、可选 Ed25519 签名的 slog 处理器，支持离线验证篡改。
- [gone/log](https://github.com/One-com/gone/tree/master/log) - 快速、可扩展、功能齐全且与标准库源码兼容的日志库。
- [gslog](https://github.com/maguro/gslog) - 适用于 log/slog 的 Google Cloud Logging 处理器，支持 OpenTelemetry 追踪和 baggage，以及 Kubernetes podinfo 标签。
- [httpretty](https://github.com/henvic/httpretty) - 在终端上美观地打印常规 HTTP 请求以便调试（类似 http.DumpRequest）。
- [journald](https://github.com/ssgreg/journald) - systemd Journal 原生日志 API 的 Go 实现。
- [kemba](https://github.com/clok/kemba) - 受 [debug](https://github.com/visionmedia/debug) 启发的小型调试日志工具，非常适合 CLI 工具和应用。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - 用于读取和过滤来自 journalctl、文件系统、Docker 和 Podman 容器以及 Kubernetes Pod 日志的 TUI。
- [log](https://github.com/aerogo/log) - O(1) 日志系统，可将一个日志连接到多个写入器（例如 stdout、文件和 TCP 连接）。
- [log](https://github.com/apex/log) - 适用于 Go 的结构化日志包。
- [log](https://github.com/go-playground/log) - 简单、可配置且可扩展的 Go 结构化日志。
- [log](https://github.com/teris-io/log) - Go 结构化日志接口，将日志门面与其实现清晰分离。
- [log](https://github.com/heartwilltell/log) - 基于标准 log 包的简单分级日志封装。
- [log](https://github.com/no-src/log) - 开箱即用的简单日志框架。
- [log15](https://github.com/inconshreveable/log15) - 适用于 Go 的简单而强大的日志库。
- [logdump](https://github.com/ewwwwwqm/logdump) - 多级日志包。
- [logex](https://github.com/chzyer/logex) - Golang 日志库，支持跟踪和级别，基于标准日志库封装。
- [logger](https://github.com/azer/logger) - 极简的 Go 日志库。
- [logo](https://github.com/mbndr/logo) - 可输出到多个可配置写入器的 Golang 日志记录器。
- [logrus](https://github.com/Sirupsen/logrus) - 适用于 Go 的结构化日志记录器。
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - 使用 [logrus](https://github.com/sirupsen/logrus) 日志记录器的 `io.Writer` 实现。
- [logrusly](https://github.com/sebest/logrusly) - 将错误发送到 [Loggly](https://www.loggly.com/) 的 [logrus](https://github.com/sirupsen/logrus) 插件。
- [logutils](https://github.com/hashicorp/logutils) - 扩展标准日志记录器、让 Go（Golang）日志稍微更好用的实用工具。
- [logxi](https://github.com/mgutz/logxi) - 面向 12-factor 应用的日志记录器，速度快，让你用得开心。
- [lumberjack](https://github.com/natefinch/lumberjack) - 简单的滚动日志记录器，实现了 io.WriteCloser。
- [mlog](https://github.com/jbrodriguez/mlog) - 简单的 Go 日志模块，提供 5 个级别、可选的日志文件轮转功能以及 stdout/stderr 输出。
- [noodlog](https://github.com/gyozatech/noodlog) - 参数化的 JSON 日志库，可对敏感数据进行混淆，并序列化任何类型的内容。不再打印指针而不是值，也不再为 JSON 字符串输出转义字符。
- [onelog](https://github.com/francoispqt/onelog) - Onelog 是一个极其简单却非常高效的 JSON 日志记录器。它在所有场景下都是最快的 JSON 日志记录器，也是内存分配最少的日志记录器之一。
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - 高性能日志库，支持日志严重级别、分类和过滤。可将过滤后的日志消息发送到各种目标（例如控制台、网络、邮件）。
- [phuslu/log](https://github.com/phuslu/log) - 高性能结构化日志。
- [pp](https://github.com/k0kubun/pp) - Go 语言的彩色美化打印器。
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriter 是一个自动轮转的 `io.Writer` 实现，提供多种策略来实现日志文件轮转。
- [seelog](https://github.com/cihub/seelog) - 具备灵活分发、过滤和格式化能力的日志功能。
- [sentry-go](https://github.com/getsentry/sentry-go) - 适用于 Go 的 Sentry SDK。通过实时告警和性能监控帮助你监视和跟踪错误。
- [slf4g](https://github.com/echocat/slf4g) - Golang 简单日志门面：简单的结构化日志，同时强大、可扩展、可定制，汲取了过去几十年日志框架的大量经验。
- [slog](https://github.com/gookit/slog) - 轻量级、可配置、可扩展的 Go 日志记录器。
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - 通过环境变量配置标准库 log/slog 日志记录器：级别、格式、源代码位置以及 stdout/stderr 分流。
- [slog-datadog](https://github.com/samber/slog-datadog) - 适用于 Datadog 的 slog 处理器。
- [slog-formatter](https://github.com/samber/slog-formatter) - slog 的常用格式化器，以及用于构建自定义格式化器的辅助工具。
- [slog-logrus](https://github.com/samber/slog-logrus) - 适用于 Logrus 的 slog 处理器。
- [slog-loki](https://github.com/samber/slog-loki) - 适用于 Grafana Loki 的 slog 处理器。
- [slog-multi](https://github.com/samber/slog-multi) - slog.Handler 链（管道、扇出等）。
- [slog-sentry](https://github.com/samber/slog-sentry) - 适用于 Sentry 的 slog 处理器。
- [slog-slack](https://github.com/samber/slog-slack) - 适用于 Slack 的 slog 处理器。
- [slog-zap](https://github.com/samber/slog-zap) - 适用于 Zap 的 slog 处理器。
- [slog-zerolog](https://github.com/samber/slog-zerolog) - 适用于 Zerolog 的 slog 处理器。
- [slogor](https://gitlab.com/greyxor/slogor) - 彩色的 slog 处理器。
- [spew](https://github.com/davecgh/go-spew) - 为 Go 数据结构实现深度美化打印，以辅助调试。
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Go SQL 数据库驱动的日志记录器，无需修改现有的 \*sql.DB 标准库用法。
- [stdlog](https://github.com/alexcesaro/log) - Stdlog 是一个提供分级日志的面向对象库。它对 cron 作业非常有用。
- [structy/log](https://github.com/structy/log) - 简单易用的日志系统，极简但具备调试和区分消息的功能。
- [tail](https://github.com/hpcloud/tail) - 力求模拟 BSD tail 程序功能的 Go 包。
- [timberjack](https://github.com/DeRuina/timberjack) - 滚动日志记录器，支持按大小、按时间和按计划时钟轮转，并支持压缩和清理。
- [tint](https://github.com/lmittmann/tint) - 输出彩色日志的 slog.Handler。
- [xlog](https://github.com/xfxdev/xlog) - 采用插件架构的灵活 Go 日志系统，支持级别控制、多日志目标和自定义日志格式。
- [xlog](https://github.com/rs/xlog) - 面向感知 `net/context` 的 HTTP 处理器的结构化日志记录器，支持灵活分发。
- [xylog](https://github.com/xybor-x/xylog) - 分级结构化日志，支持动态字段、高性能、区域管理、简单配置和易读的语法。
- [yell](https://github.com/jfcg/yell) - 又一个极简日志库。
- [zap](https://github.com/uber-go/zap) - 快速、结构化、分级的 Go 日志库。
- [zax](https://github.com/yuseferi/zax) - 将 Context 与 Zap 日志记录器集成，让 Go 日志更加灵活。
- [zerolog](https://github.com/rs/zerolog) - 零分配的 JSON 日志记录器。
- [zkits-logger](https://github.com/edoger/zkits-logger) - 强大的零依赖 JSON 日志记录器。
- [zl](https://github.com/nkmr-jp/zl) - 基于 zap、开发者体验出色的日志记录器。功能丰富，同时易于配置。

**[⬆ 返回顶部](#contents)**

## 机器学习

_用于机器学习的库。_

- [Anneal](https://github.com/georgebuilds/anneal) - 用 Go 编写的机器学习编译器，从零开始移植的 tinygrad，带有 WebGPU 后端。
- [bayesian](https://github.com/jbrukh/bayesian) - 适用于 Golang 的朴素贝叶斯分类。
- [born](https://github.com/born-ml/born) - 受 Burn（Rust）启发的深度学习框架，具备自动求导、类型安全张量和零 CGO 的 GPU 加速。
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - 快速、可扩展、高性能的决策树梯度提升库。Golang 通过 Cgo 实现极速的 CatBoost 模型推理。
- [CloudForest](https://github.com/ryanbressler/CloudForest) - 纯 Go 实现的快速、灵活、多线程决策树集成，用于机器学习。
- [datatrax](https://github.com/rbmuller/datatrax) - 数据工程与经典机器学习工具包，提供批处理、类型强制转换和 7 种算法，纯 Go 实现，零依赖。
- [ddt](https://github.com/sgrodriguez/ddt) - 动态决策树，可通过定义可自定义的规则创建树。
- [eaopt](https://github.com/MaxHalford/eaopt) - 进化优化库。
- [evoli](https://github.com/khezen/evoli) - 遗传算法和粒子群优化库。
- [fonet](https://github.com/Fontinalis/fonet) - 用 Go 编写的深度神经网络库。
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - k-modes 和 k-prototypes 聚类算法的 Go 实现。
- [go-deep](https://github.com/patrikeh/go-deep) - 功能丰富的 Go 神经网络库。
- [go-fann](https://github.com/white-pony/go-fann) - 快速人工神经网络（FANN）库的 Go 绑定。
- [go-galib](https://github.com/thoj/go-galib) - 用 Go / golang 编写的遗传算法库。
- [go-pr](https://github.com/daviddengcn/go-pr) - Go 语言模式识别包。
- [gobrain](https://github.com/goml/gobrain) - 用 Go 编写的神经网络。
- [godist](https://github.com/e-dard/godist) - 各种概率分布及相关方法。
- [goga](https://github.com/tomcraven/goga) - 适用于 Go 的遗传算法库。
- [GoLearn](https://github.com/sjwhitworth/golearn) - 适用于 Go 的通用机器学习库。
- [GoMind](https://github.com/surenderthakran/gomind) - 用 Go 编写的简易神经网络库。
- [goml](https://github.com/cdipaolo/goml) - 用 Go 实现的在线机器学习。
- [GoMLX](https://github.com/gomlx/gomlx) - 适用于 Go 的加速机器学习框架。
- [gonet](https://github.com/dathoangnd/gonet) - 适用于 Go 的神经网络。
- [Goptuna](https://github.com/c-bata/goptuna) - 用 Go 编写的黑盒函数贝叶斯优化框架。一切皆可优化。
- [goRecommend](https://github.com/timkaye11/goRecommend) - 用 Go 编写的推荐算法库。
- [gorgonia](https://github.com/gorgonia/gorgonia) - 类似 Theano 的 Go 图计算库，提供构建各种机器学习和神经网络算法的原语。
- [gorse](https://github.com/zhenghaoz/gorse) - 用 Go 编写的基于协同过滤的离线推荐系统后端。
- [goscore](https://github.com/asafschers/goscore) - 适用于 PMML 的 Go 评分 API。
- [gosseract](https://github.com/otiai10/gosseract) - 使用 Tesseract C++ 库进行 OCR（光学字符识别）的 Go 包。
- [hugot](https://github.com/knights-analytics/hugot) - 基于 onnxruntime 的 Golang 版 Huggingface transformer 管道。
- [libsvm](https://github.com/datastream/libsvm) - 基于 LIBSVM 3.14 衍生的 Golang 版 libsvm。
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 将训练好的经典机器学习模型转译为零依赖原生 Go 代码的 CLI 工具，用 Python 编写，支持 Go 语言。
- [neural-go](https://github.com/schuyler/neural-go) - 用 Go 实现的多层感知机网络，通过反向传播进行训练。
- [ocrserver](https://github.com/otiai10/ocrserver) - 简单的 OCR API 服务器，使用 Docker 和 Heroku 部署非常容易。
- [onnx-go](https://github.com/owulveryck/onnx-go) - 开放神经网络交换（ONNX）的 Go 接口。
- [probab](https://github.com/ThePaw/probab) - 概率分布函数。贝叶斯推断。用纯 Go 编写。
- [randomforest](https://github.com/malaschitz/randomForest) - 易于使用的 Go 随机森林库。
- [regommend](https://github.com/muesli/regommend) - 推荐与协同过滤引擎。
- [shield](https://github.com/eaigner/shield) - 适用于 Go 的贝叶斯文本分类器，支持灵活的分词器和存储后端。
- [tfgo](https://github.com/galeone/tfgo) - 易于使用的 Tensorflow 绑定：简化官方 Tensorflow Go 绑定的使用。可在 Go 中定义计算图，加载并执行用 Python 训练的模型。
- [Varis](https://github.com/Xamber/Varis) - Golang 神经网络。

**[⬆ 返回顶部](#contents)**

## 消息传递

_实现消息系统的库。_

- [ami](https://github.com/kak-tus/ami) - 基于 Redis Cluster Streams 的可靠队列 Go 客户端。
- [amqp](https://github.com/rabbitmq/amqp091-go) - Go RabbitMQ 客户端库。
- [APNs2](https://github.com/sideshow/apns2) - 适用于 Go 的 HTTP/2 Apple 推送通知提供程序——向 iOS、tvOS、Safari 和 OSX 应用发送推送通知。
- [Asynq](https://github.com/hibiken/asynq) - 基于 Redis 构建的简单、可靠、高效的 Go 分布式任务队列。
- [backlite](https://github.com/mikestefanello/backlite) - 基于 SQLite 的类型安全、持久化、嵌入式任务队列和后台作业运行器。
- [Beaver](https://github.com/Clivern/Beaver) - 实时消息服务器，用于在 Web 和移动应用中构建可扩展的应用内通知、多人游戏和聊天应用。
- [broker](https://github.com/qvcloud/broker) - 生产级消息抽象，为各种消息代理提供统一 API，并内置 OpenTelemetry 集成。
- [Bus](https://github.com/mustafaturan/bus) - 用于内部通信的极简消息总线实现。
- [Centrifugo](https://github.com/centrifugal/centrifugo) - 用 Go 编写的实时消息（Websockets 或 SockJS）服务器。
- [Chanify](https://github.com/chanify/chanify) - 向你的 iOS 设备发送消息的推送通知服务器。
- [Commander](https://github.com/jeroenrinzema/commander) - 高级事件驱动的消费者/生产者，支持 Apache Kafka 等多种“方言”。
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-go 是 Confluent 为 Apache Kafka 和 Confluent Platform 提供的 Golang 客户端。
- [dbus](https://github.com/godbus/dbus) - D-Bus 的原生 Go 绑定。
- [drone-line](https://github.com/appleboy/drone-line) - 使用二进制文件、docker 或 Drone CI 发送 [Line](https://at.line.me/en) 通知。
- [emitter](https://github.com/olebedev/emitter) - 以 Go 的方式发出事件，支持通配符、谓词、取消以及许多其他优点。
- [event](https://github.com/agoalofalife/event) - 观察者模式的实现。
- [EventBus](https://github.com/asaskevich/EventBus) - 兼容异步的轻量级事件总线。
- [gaurun-client](https://github.com/osamingo/gaurun-client) - 用 Go 编写的 Gaurun 客户端。
- [Glue](https://github.com/desertbit/glue) - 健壮的 Go 和 Javascript Socket 库（Socket.io 的替代品）。
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - 适用于 Go 的简单事件总线包。
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - 在事件驱动架构中处理中介者模式和简化 CQRS 模式的库，受 C# MediatR 库启发。
- [go-mq](https://github.com/cheshir/go-mq) - 支持声明式配置的 RabbitMQ 客户端。
- [go-notify](https://github.com/TheCreeper/go-notify) - freedesktop 通知规范的原生实现。
- [go-nsq](https://github.com/nsqio/go-nsq) - NSQ 的官方 Go 包。
- [go-res](https://github.com/jirenius/go-res) - 使用 NATS 和 Resgate 构建 REST/实时服务的包，客户端可无缝同步。
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Viessmann Vitotrol Web 服务的客户端库。
- [GoEventBus](https://github.com/Raezil/GoEventBus) - 极速、基于内存、无锁的事件总线库
- [Gollum](https://github.com/trivago/gollum) - n:m 多路复用器，从不同来源收集消息并广播到一组目的地。
- [golongpoll](https://github.com/jcuga/golongpoll) - 让 Web 发布/订阅变得简单的 HTTP 长轮询服务器库。
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-cluster 是一个 Go 推送服务器集群。
- [gorush](https://github.com/appleboy/gorush) - 使用 [APNs2](https://github.com/sideshow/apns2) 和 Google [GCM](https://github.com/google/go-gcm) 的推送通知服务器。
- [gosd](https://github.com/alexsniffin/gosd) - 用于调度何时将消息分发到 channel 的库。
- [guble](https://github.com/smancke/guble) - 消息服务器，支持推送通知（Google Firebase Cloud Messaging、Apple 推送通知服务、短信）以及 websocket 和 REST API，具备分布式运行和消息持久化能力。
- [hare](https://github.com/leozz37/hare) - 用于发送消息和监听 TCP 套接字的用户友好库。
- [hub](https://github.com/leandro-lugaresi/hub) - 面向 Go 应用的消息/事件中心，采用发布/订阅模式，支持类似 rabbitMQ exchange 的别名。
- [hypermatch](https://github.com/SchwarzDigits/hypermatch) - 将事件与大量规则进行匹配，规则可用 Go 或 JSON 编写。
- [jazz](https://github.com/socifi/jazz) - 简单的 RabbitMQ 抽象层，用于队列管理以及消息的发布与消费。
- [kiln](https://github.com/rafaelaugustos/kiln) - 基于 PostgreSQL、MySQL 或 SQLite 的持久化后台作业，支持重试、工作流、周期性作业和仪表盘。
- [machinery](https://github.com/RichardKnop/machinery) - 基于分布式消息传递的异步任务队列/作业队列。
- [mangos](https://github.com/nanomsg/mangos) - Nanomsg（“可扩展性协议”）的纯 Go 实现，具备传输层互操作性。
- [melody](https://github.com/olahol/melody) - 处理 websocket 会话的极简框架，包括广播和自动 ping/pong 处理。
- [Mercure](https://github.com/dunglas/mercure) - 使用 Mercure 协议（基于 Server-Sent Events 构建）分发服务器推送更新的服务器和库。
- [messagebus](https://github.com/vardius/message-bus) - messagebus 是一个简单的 Go 异步消息总线，非常适合在进行事件溯源、CQRS、DDD 时用作事件总线。
- [NATS Go Client](https://github.com/nats-io/nats.go) - 适用于 NATS
  消息系统的 Go 客户端。
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - 对 NSQ topic 和 channel 的小型封装。
- [oplog](https://github.com/dailymotion/oplog) - 面向 REST API 的通用 oplog/复制系统。
- [pubsub](https://github.com/tuxychandru/pubsub) - 适用于 Go 的简单发布/订阅包。
- [Quamina](https://github.com/timbray/quamina) - 用于过滤消息和事件的快速模式匹配。
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - 处理 RabbitMQ 自动重连和发布重试的轻量级库。该库考虑到了重连后需要在 RabbitMQ 中重新声明实体的情况。
- [rabbus](https://github.com/rafaeljesus/rabbus) - 对 amqp exchange 和队列的小型封装。
- [rabtap](https://github.com/jandelgado/rabtap) - RabbitMQ 瑞士军刀式命令行应用。
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQ 是一个用于管理本地消息队列的轻量级可靠库。
- [Ratus](https://github.com/hyperonym/ratus) - Ratus 是一个 RESTful 异步任务队列服务器。
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueue 提供使用 Redis streams 的队列生产者和消费者。
- [rmqconn](https://github.com/sbabiv/rmqconn) - RabbitMQ 重连。对 amqp.Connection 和 amqp.Dial 的封装。允许在连接断开时进行重连，直到强制调用 Close () 方法将其关闭为止。
- [sarama](https://github.com/Shopify/sarama) - 适用于 Apache Kafka 的 Go 库。
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - 以 Redis 为后端的统一推送服务，用于从服务器端向移动设备发送通知。
- [varmq](https://github.com/goptics/varmq) - 面向并发 Go 程序、与存储无关的消息队列和 worker 池。
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - 高效处理消息流。用于构建事件驱动应用，支持事件溯源、基于消息的 RPC 和 saga。既可使用 Kafka 或 RabbitMQ 等传统发布/订阅实现，也可使用 HTTP 或 MySQL binlog。
- [zmq4](https://github.com/pebbe/zmq4) - ZeroMQ 第 4 版的 Go 接口。也提供[第 3 版](https://github.com/pebbe/zmq3)和[第 2 版](https://github.com/pebbe/zmq2)。

**[⬆ 返回顶部](#contents)**

## Microsoft Office

- [unioffice](https://github.com/unidoc/unioffice) - 用于创建和处理 Office Word（.docx）、Excel（.xlsx）和 Powerpoint（.pptx）文档的纯 Go 库。

### Microsoft Excel

_用于处理 Microsoft Excel 的库。_

- [cellwalker](https://github.com/chonla/cellwalker) - 按单元格名称虚拟遍历 Excel 单元格。
- [excelize](https://github.com/xuri/excelize) - 用于读写 Microsoft Excel&trade;（XLSX）文件的 Golang 库。
- [exl](https://github.com/go-the-way/exl) - 用 Go 编写的 Excel 与结构体绑定库。（仅支持 Go1.18+）
- [go-excel](https://github.com/szyhf/go-excel) - 简单轻量的读取器，可将类似关系数据库的 Excel 作为表格读取。
- [xlsx](https://github.com/tealeg/xlsx) - 在 Go 程序中简化读取新版 Microsoft Excel 所用 XML 格式的库。
- [xlsx](https://github.com/plandem/xlsx) - 在 Go 程序中快速、安全地读取/更新现有 Microsoft Excel 文件的方式。

### Microsoft Word

_用于处理 Microsoft Word 的库。_

- [godocx](https://github.com/gomutex/godocx) - 用于读写 Microsoft Word（Docx）文件的库。

**[⬆ 返回顶部](#contents)**

## 杂项

### 依赖注入

_用于实现依赖注入的库。_

- [alice](https://github.com/magic003/alice) - 适用于 Golang 的累加式依赖注入容器。
- [autowire](https://github.com/tiendc/autowire) - 使用泛型和反射的依赖注入。
- [boot-go](http://github.com/boot-go/boot) - 面向 Go 开发者的基于组件的开发方式，借助反射实现依赖注入。
- [componego](https://github.com/componego/componego) - 基于组件的依赖注入框架，允许动态替换依赖，而无需在测试中重复代码。
- [cosban/di](https://gitlab.com/cosban/di) - 基于代码生成的依赖注入装配工具。
- [dig](https://github.com/uber-go/dig) - 基于反射的 Go 依赖注入工具包。
- [dingo](https://github.com/i-love-flamingo/dingo) - 基于 Guice 的 Go 依赖注入工具包。
- [do](https://github.com/samber/do) - 基于泛型的依赖注入框架。
- [floatdrop/di](https://github.com/floatdrop/di) - 基于泛型方法构建的依赖注入容器，支持子作用域、生命周期钩子，并会在构建任何对象之前验证依赖图。
- [fx](https://github.com/uber-go/fx) - 基于依赖注入的 Go 应用框架（构建于 dig 之上）。
- [go-beans](https://github.com/go-beans/go) - 受 Spring 启发的 Go 依赖注入与应用生命周期框架。
- [Go-Spring](https://github.com/go-spring/spring-core) - 受 Spring Boot 启发的高性能 Go 框架，提供依赖注入、自动配置和生命周期管理，同时保持 Go 的简洁与高效。
- [gocontainer](https://github.com/vardius/gocontainer) - 简单的依赖注入容器。
- [godi](https://github.com/junioryono/godi) - 适用于 Go 的 Microsoft 风格依赖注入，支持作用域生命周期和泛型。
- [goioc/di](https://github.com/goioc/di) - 受 Spring 启发的依赖注入容器。
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Container 是一个适用于 Go 编程语言的轻量而强大的 IoC 依赖注入容器。
- [gontainer](https://github.com/NVIDIA/gontainer) - 面向 Go 项目的依赖注入服务容器。
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - 基于 YAML 的 GO 依赖注入容器。支持依赖作用域和循环依赖自动检测。Gontainer 是并发安全的。
- [HnH/di](https://github.com/HnH/di) - 注重简洁 API 和灵活性的依赖注入容器库。
- [kinit](https://github.com/go-kata/kinit) - 可定制的依赖注入容器，支持全局模式、级联初始化和防 panic 的终结处理。
- [kod](https://github.com/go-kod/kod) - 基于泛型的 Go 依赖注入框架。
- [linker](https://github.com/logrange/linker) - 基于反射的依赖注入与控制反转库，支持组件生命周期。
- [nject](https://github.com/muir/nject) - 类型安全的反射式框架，适用于库、测试、HTTP 端点和服务启动。
- [ore](https://github.com/firasdarwish/ore) - 轻量、泛型且简单的依赖注入（DI）容器。
- [parsley](https://github.com/matzefriedrich/parsley) - 灵活、模块化的基于反射的依赖注入库，具备作用域上下文和代理生成等高级功能，专为大型 Go 应用设计。
- [wire](https://github.com/Fs02/wire) - 适用于 Golang 的严格运行时依赖注入。
- [yama](https://github.com/livetribe/yama) - 编译期依赖注入与生命周期框架，可为 Google Wire 依赖图生成启动、静默和停止代码。

**[⬆ 返回顶部](#contents)**

### 项目布局

_**非官方**的项目结构模式集合。_

- [ardanlabs/service](https://github.com/ardanlabs/service) - 用于构建生产级可扩展 Web 服务应用的[入门套件](https://github.com/ardanlabs/service/wiki)。
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - 遵循生产最佳实践、用于快速启动项目的 Go 应用样板模板。
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - 让用户使用流行框架快速搭建 Go 项目。
- [go-ddd](https://github.com/sklinkert/go-ddd) - 领域驱动设计模板，包含 CQRS、值对象、幂等命令和事务性发件箱。
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - 使用 Bazel、grpc-gateway、OpenAPI 和 Kubernetes 的 Go gRPC 微服务单体仓库示例。
- [go-module](https://github.com/octomation/go-module) - 用 Go 编写的典型模块模板。
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - 对 AI 友好、可用于生产环境的 Go REST API 样板，包含整洁架构、JWT 身份验证、RBAC、PostgreSQL、Docker 热重载和 Swagger 文档。
- [go-sample](https://github.com/zitryss/go-sample) - 包含真实代码的 Go 应用项目示例布局。
- [go-starter](https://github.com/allaboutapps/go-starter) - 遵循固定约定、可用于生产环境的 RESTful JSON 后端模板，与 VSCode DevContainers 高度集成。
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - 采用模块化项目布局实现产品微服务的 Go Todo 后端示例。
- [goapp](https://github.com/naughtygopher/goapp) - 关于构建和开发 Go Web 应用/服务的固定约定式指南。
- [gobase](https://github.com/wajox/gobase) - 简单的 Golang 应用骨架，包含真实 Golang 应用所需的基本配置。
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Go 生态系统中常见的历史和新兴项目布局模式集合。注意：尽管组织名称如此，它们并不代表官方的 Golang 标准，更多信息请参阅[此 issue](https://github.com/golang-standards/project-layout/issues/117)。尽管如此，有些人可能仍会觉得这种布局很有用。
- [golang-templates/seed](https://github.com/golang-templates/seed) - Go 应用的 GitHub 仓库模板。
- [goxygen](https://github.com/shpota/goxygen) - 几秒钟内生成基于 Go 与 Angular、React 或 Vue 的现代 Web 项目。
- [insidieux/inizio](https://github.com/insidieux/inizio) - 支持插件的 Golang 项目布局生成器。
- [kickstart.go](https://github.com/raeperd/kickstart.go) - 无第三方依赖的极简单文件 Go HTTP 服务器模板。
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - 应用现代实践的 Go 应用样板和示例。
- [nunu](https://github.com/go-nunu/nunu) - Nunu 是一个用于构建 Go 应用的脚手架工具。
- [pagoda](https://github.com/mikestefanello/pagoda) - 用 Go 构建的快速、简便的全栈 Web 开发入门套件。
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold 生成入门级 Go 项目布局。让你专注于实现业务逻辑。
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - 关于如何组织 Go 项目布局的一系列实践和讨论。

**[⬆ 返回顶部](#contents)**

### 字符串

_用于处理字符串的库。_

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - 花括号展开机制的 Go 实现，用于生成任意字符串。
- [caps](https://github.com/chanced/caps) - 大小写转换库。
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - 实现带有以花括号 `{}` 包围的**替换字段**的格式化字符串。
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - 字符串处理库，可将字符串转换为驼峰式、蛇形、短横线式 / slug 等形式。
- [str](https://github.com/schigh/str) - 以管道为先的字符串工具包，用于组合各种转换。
- [strcase](https://github.com/charlievieth/strcase) - 标准库 strings/bytes 包的不区分大小写实现。
- [stringFormatter](https://github.com/Wissance/stringFormatter) - 以 Python 或 C# 的方式进行字符串格式化，并提供额外的文本格式化功能。
- [strutil](https://github.com/ozgio/strutil) - 字符串实用工具。
- [sttr](https://github.com/abhimanyu003/sttr) - 跨平台的命令行应用，可对字符串执行各种操作。
- [xstrings](https://github.com/huandu/xstrings) - 从其他语言移植而来的实用字符串函数集合。

**[⬆ 返回顶部](#contents)**

### 未分类

_这些库之所以放在这里，是因为其他分类似乎都不合适。_

- [anagent](https://github.com/mudler/anagent) - 极简、可插拔的 Golang 事件循环/定时器处理器，支持依赖注入。
- [antch](https://github.com/antchfx/antch) - 快速、强大且可扩展的网页爬取与抓取框架。
- [archives](https://github.com/mholt/archives) - 跨平台、多格式的 Go 库，以统一 API 处理归档和压缩格式，并可作为兼容 io/fs 的虚拟文件系统使用。
- [autoflags](https://github.com/artyom/autoflags) - 根据结构体字段自动定义命令行标志的 Go 包。
- [avgRating](https://github.com/kirillDanshin/avgRating) - 基于威尔逊得分公式计算平均分和评级。
- [banner](https://github.com/dimiro1/banner) - 为你的 Go 应用添加漂亮的横幅。
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch 支持数字、号码、字母、算术、音频以及数字字母混合验证码。
- [basexx](https://github.com/bobg/basexx) - 在各种进制的数字字符串之间进行相互转换。
- [battery](https://github.com/distatus/battery) - 跨平台、规范化的电池信息库。
- [bitio](https://github.com/icza/bitio) - 高度优化的 Go 位级读取器和写入器。
- [browscap_go](https://github.com/digitalcrab/browscap_go) - 适用于 [Browser Capabilities Project](https://browscap.org/) 的 GoLang 库。
- [captcha](https://github.com/steambap/captcha) - captcha 包为验证码生成提供易于使用、不预设约定的 API。
- [common](https://github.com/kubeservice-stack/common) - 服务器框架库。
- [conv](https://github.com/cstockton/go-conv) - conv 包提供 Go 类型之间快速直观的转换。
- [datacounter](https://github.com/miolini/datacounter) - 适用于 reader/writer/http.ResponseWriter 的 Go 计数器。
- [fake-useragent](https://github.com/lib4u/fake-useragent) - 用 Golang 编写的简单 User-Agent 伪造工具，使用最新的真实数据库
- [faker](https://github.com/pioz/faker) - 适用于 Go 的随机假数据和结构体生成器。
- [ffmt](https://github.com/go-ffmt/ffmt) - 为人类美化数据显示。
- [gatus](https://github.com/TwinProduction/gatus) - 自动化服务健康仪表盘。
- [go-commandbus](https://github.com/lana/go-commandbus) - 适用于 Go 的轻量、可插拔命令总线。
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - 适用于 Golang 的通用对象池。
- [go-openapi](https://github.com/go-openapi) - 用于解析和使用 open-api 模式的包集合。
- [go-resiliency](https://github.com/eapache/go-resiliency) - 适用于 Golang 的弹性模式。
- [go-unarr](https://github.com/gen2brain/go-unarr) - 适用于 RAR、TAR、ZIP 和 7z 归档的解压库。
- [gofakeit](https://github.com/brianvoe/gofakeit) - 用 Go 编写的随机数据生成器。
- [goffi](https://github.com/go-webgpu/goffi) - 纯 Go FFI，提供 libffi 风格的类型化调用接口和结构化错误处理，无需 CGO 即可调用 C 库。
- [gommit](https://github.com/antham/gommit) - 分析 git 提交信息，确保其遵循既定模式。
- [gopsutil](https://github.com/shirou/gopsutil) - 跨平台库，用于获取进程和系统资源使用情况（CPU、内存、磁盘等）。
- [gosh](https://github.com/osamingo/gosh) - 提供 Go 统计处理器、结构体和度量方法。
- [gosms](https://github.com/haxpax/gosms) - 用 Go 编写、属于你自己的本地短信网关，可用于发送短信。
- [gotoprom](https://github.com/cabify/gotoprom) - 官方 Prometheus 客户端的类型安全指标构建器封装库。
- [gountries](https://github.com/pariz/gountries) - 提供国家和行政区划数据的包。
- [gtree](https://github.com/ddddddO/gtree) - 提供 CLI、包和 Web 界面，可根据 Markdown 或以编程方式输出树形结构并创建目录。
- [health](https://github.com/alexliesenfeld/health) - 简单灵活的 Go 健康检查库。
- [health](https://github.com/dimiro1/health) - 易于使用、可扩展的健康检查库。
- [healthcheck](https://github.com/etherlabsio/healthcheck) - 面向 RESTful 服务、遵循固定约定的并发健康检查 HTTP 处理器。
- [hostutils](https://github.com/Wing924/hostutils) - 用于打包和解包 FQDN 列表的 Golang 库。
- [indigo](https://github.com/osamingo/indigo) - 使用 Sonyflake 并以 Base58 编码的分布式唯一 ID 生成器。
- [lk](https://github.com/hyperboloide/lk) - 简单的 Golang 许可证库。
- [llvm](https://github.com/llir/llvm) - 用纯 Go 与 LLVM IR 交互的库。
- [metrics](https://github.com/pascaldekloe/metrics) - 用于指标埋点和 Prometheus 暴露的库。
- [morse](https://github.com/alwindoss/morse) - 摩尔斯电码互相转换的库。
- [numa](https://github.com/lrita/numa) - NUMA 是一个用 Go 编写的实用工具库。它帮助我们编写感知 NUMA 的代码。
- [pdfgen](https://github.com/hyperboloide/pdfgen) - 根据 JSON 请求生成 PDF 的 HTTP 服务。
- [persian](https://github.com/mavihq/persian) - 一些用于处理波斯语的 Go 实用工具。
- [purego](https://github.com/ebitengine/purego) - 无需 Cgo 即可从 Go 调用 C 函数的库。
- [sandid](https://github.com/aofei/sandid) - 地球上的每一粒沙子都有自己的 ID。
- [shellwords](https://github.com/Wing924/shellwords) - 按照 UNIX Bourne shell 的单词解析规则处理字符串的 Golang 库。
- [shortid](https://github.com/teris-io/shortid) - 分布式生成超短、唯一、非连续且对 URL 友好的 ID。
- [shoutrrr](https://github.com/containrrr/shoutrrr) - 通知库，可轻松接入 slack、mattermost、gotify 和 smtp 等各种消息服务。
- [sitemap-format](https://github.com/mingard/sitemap-format) - 带一点语法糖的简单站点地图生成器。
- [stateless](https://github.com/qmuntal/stateless) - 用于创建状态机的流式库。
- [stats](https://github.com/go-playground/stats) - 监控 Go MemStats 以及内存、交换空间和 CPU 等系统统计信息，并通过 UDP 发送到任何你想要的地方以便记录等……
- [turtle](https://github.com/hackebrot/turtle) - 适用于 Go 的表情符号。
- [url-shortener](https://github.com/pantrif/url-shortener) - 现代、强大且健壮的短网址微服务，支持 mysql。
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - 生成 HTTP 输入输出处理的样板代码。
- [varint](https://github.com/chmike/varint) - 比标准库提供的更快的变长整数编码器/解码器。
- [xdg](https://github.com/rkoesters/xdg) - 用 Go 实现的 FreeDesktop.org（xdg）规范。
- [xkg](https://github.com/go-xkg/xkg) - X 键盘捕获器。
- [xz](https://github.com/ulikunitz/xz) - 用于读写 xz 压缩文件的纯 Golang 包。
**[⬆ 返回顶部](#contents)**

## 自然语言处理

_用于处理人类语言的库。_

另请参阅[文本处理](#text-processing)和[文本分析](#text-analysis)。

### 语言检测

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - 语言检测 API 的 Go 客户端。支持批量请求以及短语或单个单词的语言检测。
- [getlang](https://github.com/rylans/getlang) - 快速的自然语言检测包。
- [guesslanguage](https://github.com/endeveit/guesslanguage) - 用于判断 Unicode 文本所属自然语言的函数。
- [lingua-go](https://github.com/pemistahl/lingua-go) - 准确的自然语言检测库，同样适用于长文本和短文本。支持检测混合语言文本中的多种语言。
- [whatlanggo](https://github.com/abadojack/whatlanggo) - 适用于 Go 的自然语言检测包。支持 84 种语言和 24 种文字（书写系统，例如拉丁字母、西里尔字母等）。

### 形态分析器

- [go-propisyu](https://github.com/rekurt/go-propisyu) - 将数字转换为俄语单词，并正确处理语法性别和名词变格。
- [go-stem](https://github.com/agonopol/go-stem) - Porter 词干提取算法的实现。
- [go2vec](https://github.com/danieldk/go2vec) - word2vec 词嵌入的读取器和实用函数。
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - snowball libstemmer 库（包括 porter 2）的 Go 绑定。
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - 使用 sentiwordnet 词库的 Go 情感分析器。
- [govader](https://github.com/jonreiter/govader) - [VADER 情感分析](https://github.com/cjhutto/vaderSentiment)的 Go 实现。
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - [GoVader](https://github.com/jonreiter/govader) 的微服务实现。
- [kagome](https://github.com/ikawaha/kagome) - 用纯 Go 编写的日语形态分析器。
- [libtextcat](https://github.com/goodsign/libtextcat) - libtextcat C 库的 Cgo 绑定。保证与 2.2 版本兼容。
- [nlp](https://github.com/james-bowman/nlp) - 支持 LSA（潜在语义分析）的 Go 自然语言处理库。
- [paicehusk](https://github.com/rookii/paicehusk) - Paice/Husk 词干提取算法的 Golang 实现。
- [porter](https://github.com/a2800276/porter) - 这是对 Martin Porter 的 Porter 词干提取算法 C 实现的一个相当直接的移植。
- [porter2](https://github.com/zhenjl/porter2) - 非常快速的 Porter 2 词干提取器。
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - 快速自动关键词提取算法（RAKE）的 Go 移植版。
- [snowball](https://github.com/goodsign/snowball) - 适用于 Go 的 Snowball 词干提取器移植版（cgo 封装）。提供 [Snowball 原生](http://snowball.tartarus.org/)的词干提取功能。
- [spaGO](https://github.com/nlpodyssey/spago) - 用 Go 编写的自包含机器学习与自然语言处理库。
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - 西班牙语拼写纠正器，也可用于创建你自己的纠正器。

### Slug 生成器

- [go-slugify](https://github.com/mozillazg/go-slugify) - 生成美观的 slug，支持多种语言。
- [slug](https://github.com/gosimple/slug) - 对 URL 友好的 slug 生成，支持多种语言。
- [Slugify](https://github.com/avelino/slugify) - 处理字符串的 Go slug 生成应用。

### 分词器

- [gojieba](https://github.com/yanyiwu/gojieba) - 这是 [jieba](https://github.com/fxsjy/jieba)（一种中文分词算法）的 Go 实现。
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - 基于词典和 Bigram 语言模型的 Golang 分词器。（目前仅支持中文分词）
- [gse](https://github.com/go-ego/gse) - 高效的 Go 文本分词；支持英文、中文、日文等。
- [MMSEGO](https://github.com/awsong/MMSEGO) - 这是 [MMSEG](http://technology.chtsai.org/mmseg/)（一种中文分词算法）的 GO 实现。
- [segment](https://github.com/blevesearch/segment) - 按照 [Unicode 标准附录 #29](https://www.unicode.org/reports/tr29/) 执行 Unicode 文本分段的 Go 库
- [sentences](https://github.com/neurosnap/sentences) - 句子切分器：将文本转换为句子列表。
- [shamoji](https://github.com/osamingo/shamoji) - shamoji 是一个用 Go 编写的词语过滤包。
- [stemmer](https://github.com/dchest/stemmer) - 适用于 Go 编程语言的词干提取包。包括英语和德语词干提取器。
- [textcat](https://github.com/pebbe/textcat) - 基于 n-gram 的文本分类 Go 包，支持 utf-8 和原始文本。

### 翻译

- [ctxi18n](https://github.com/invopop/ctxi18n/) - 感知上下文的国际化库，API 简短精炼，支持复数形式、插值和 `fs.FS`。YAML 语言区域定义基于 [Rails i18n](https://guides.rubyonrails.org/i18n.html)。
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - 处理本地化文本的包及配套工具。
- [go-mystem](https://github.com/dveselov/mystem) - Yandex.Mystem（俄语形态分析器）的 CGo 绑定。
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - 中文汉字转汉语拼音转换器。
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - 面向 Golang 项目的词表和文本资源库。
- [gotext](https://github.com/leonelquinteros/gotext) - 适用于 Go 的 GNU gettext 工具。
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - 以各种可能的方式进行西里尔字母 → 拉丁字母的音译。
- [spreak](https://github.com/vorlif/spreak) - 基于 gettext 理念的灵活 Go 翻译与人性化库。
- [t](https://github.com/youthlin/t) - 另一个 Golang 国际化包，遵循 GNU gettext 风格并支持 .po/.mo 文件：`t.T (gettext)`、`t.N (ngettext)` 等。它还包含一个命令行工具 [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate)，可从 text/html 模板中提取消息并生成 pot 文件。

### 音译

- [enca](https://github.com/endeveit/enca) - [libenca](https://cihar.com/software/enca/) 的精简 cgo 绑定，用于检测字符编码。
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - Unicode 文本的 ASCII 音译。
- [gounidecode](https://github.com/fiam/gounidecode) - 适用于 Go 的 Unicode 音译器（也称 unidecode）。
- [transliterator](https://github.com/alexsergivan/transliterator) - 提供单向字符串音译，支持特定语言的音译规则。

**[⬆ 返回顶部](#contents)**

## 网络

_用于处理网络各个层次的库。_

- [arp](https://github.com/mdlayher/arp) - arp 包实现了 RFC 826 中描述的 ARP 协议。
- [bart](https://github.com/gaissmai/bart) - bart 包提供平衡路由表（BART），可实现极快的 IP 到 CIDR 查找等功能。
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - 让通过 TCP 流式传输 protocolbuffer 数据变得简单。
- [canopus](https://github.com/zubairhamed/canopus) - CoAP 客户端/服务器实现（RFC 7252）。
- [cdns](https://github.com/junevm/cdns) - 通过终端轻松更换 DNS 服务器。
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - 零配置的 TCP/UDP 端口代理，支持自启动、基于 IP 的访问控制和操作系统级网络栈调优。
- [cidranger](https://github.com/yl2chen/cidranger) - 适用于 Go 的快速 IP 到 CIDR 查找。
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare Tunnel 客户端（前身为 Argo Tunnel）。
- [corsproxy](https://github.com/melihbirim/corsproxy) - CORS 代理服务器，具备 SSRF 防护、主机允许/阻止列表和可选的 API 密钥身份验证。
- [dhcp6](https://github.com/mdlayher/dhcp6) - dhcp6 包实现了 RFC 3315 中描述的 DHCPv6 服务器。
- [dns](https://github.com/miekg/dns) - 处理 DNS 的 Go 库。
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - 被动 DNS 捕获/监控框架。
- [drainwatch](https://github.com/jaynirmal15/drainwatch) - 测量 Kubernetes Pod 终止时已建立的 TCP 和 UDP 连接实际发生了什么。
- [easytcp](https://github.com/DarthPestilane/easytcp) - 用 Go（Golang）编写的轻量级 TCP 框架，内置消息路由器。EasyTCP 帮助你轻松、快速、少费力地构建 TCP 服务器。
- [ether](https://github.com/songgao/ether) - 用于收发以太网帧的跨平台 Go 包。
- [ethernet](https://github.com/mdlayher/ethernet) - ethernet 包实现了 IEEE 802.3 Ethernet II 帧和 IEEE 802.1Q VLAN 标签的序列化与反序列化。
- [event](https://github.com/cheng-zhongliang/event) - 用 Golang 编写的简单 I/O 事件通知库。
- [expose](https://github.com/kernelshard/expose) - 轻量级开源安全隧道工具，可将本地服务器暴露到互联网。
- [fasthttp](https://github.com/valyala/fasthttp) - fasthttp 包是一个快速的 Go HTTP 实现，速度比 net/http 快达 10 倍。
- [fibersse](https://github.com/vinod-morya/fibersse) - 适用于 Fiber v3 的生产级服务器推送事件（SSE），支持事件合并、优先级通道、主题通配符、自适应限流和内置身份验证。
- [fortio](https://github.com/fortio/fortio) - 负载测试库和命令行工具，以及高级回显服务器和 Web UI。可指定固定的每秒查询负载，记录延迟直方图等实用统计数据并绘制图表。支持 Tcp、Http、gRPC。
- [ftp](https://github.com/jlaffaye/ftp) - ftp 包实现了 [RFC 959](https://tools.ietf.org/html/rfc959) 中描述的 FTP 客户端。
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - 功能完备的 FTP 服务器库。
- [fullproxy](https://github.com/shoriwe/fullproxy) - 功能完备、可脚本化、可通过守护进程配置的代理与跳板工具包，支持 SOCKS5、HTTP、原始端口和反向代理协议。
- [fwdctl](https://github.com/alegrey91/fwdctl) - 简单直观的 CLI，用于管理 Linux 服务器中的 IPTables 转发。
- [gaio](https://github.com/xtaci/gaio) - 采用 proactor 模式的高性能 Golang 异步 I/O 网络库。
- [gev](https://github.com/Allenxuxu/gev) - gev 是一个基于 Reactor 模式的轻量级、快速非阻塞 TCP 网络库。
- [gldap](https://github.com/jimlambrt/gldap) - gldap 提供 LDAP 服务器实现，由你为其 LDAP 操作提供处理器。
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqtt 是一个灵活、高性能的 MQTT 代理库，完整实现了 MQTT 协议 V3.1.1。
- [gnet](https://github.com/panjf2000/gnet) - `gnet` 是一个用纯 Go 编写的高性能、轻量级、非阻塞、事件驱动的网络框架。
- [gnet](https://github.com/fish-tennis/gnet) - `gnet` 是一个高性能网络框架，尤其适用于游戏服务器。
- [gNxI](https://github.com/google/gnxi) - 使用 gNMI 和 gNOI 协议的网络管理工具集合。
- [go-getter](https://github.com/hashicorp/go-getter) - 使用 URL 从各种来源下载文件或目录的 Go 库。
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - 通过代理池发送 HTTP 请求的库，提供容错、负载均衡、自动重试、Cookie 管理等功能，可替换 http.Get/Post，或作为 http.Client 的 RoundTripper 直接接入
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - 轻量级实时抓包库，支持提取 HTTPS SNI。
- [go-powerdns](https://github.com/joeig/go-powerdns) - 适用于 Golang 的 PowerDNS API 绑定。
- [go-sse](https://github.com/lampctl/go-sse) - HTML 服务器推送事件的 Go 客户端和服务器实现。
- [go-stun](https://github.com/ccding/go-stun) - STUN 客户端的 Go 实现（RFC 3489 和 RFC 5389）。
- [gobgp](https://github.com/osrg/gobgp) - 用 Go 编程语言实现的 BGP。
- [gopacket](https://github.com/google/gopacket) - 带 libpcap 绑定的 Go 数据包处理库。
- [gopcap](https://github.com/akrennmair/gopcap) - libpcap 的 Go 封装。
- [GoProxy](https://github.com/elazarl/goproxy) - 使用 Go 创建自定义 HTTP/HTTPS 代理服务器的库。
- [goshark](https://github.com/sunwxg/goshark) - goshark 包使用 tshark 解码 IP 数据包，并创建用于分析数据包的数据结构。
- [gosnmp](https://github.com/soniah/gosnmp) - 执行 SNMP 操作的原生 Go 库。
- [gotcp](https://github.com/gansidui/gotcp) - 用于快速编写 TCP 应用的 Go 包。
- [grab](https://github.com/cavaliercoder/grab) - 管理文件下载的 Go 包。
- [graval](https://github.com/koofr/graval) - 实验性 FTP 服务器框架。
- [gws](https://github.com/lxzan/gws) - 支持异步 I/O 的高性能 WebSocket 服务器和客户端。
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabs 让你检查 HTTP 请求并伪造响应。
- [httpproxy](https://github.com/wzshiming/httpproxy) - HTTP 代理处理器和拨号器。
- [iplib](https://github.com/c-robinson/iplib) - 处理 IP 地址（net.IP、net.IPNet）的库，灵感来自 Python 的 [ipaddress](https://docs.python.org/3/library/ipaddress.html) 和 Ruby 的 [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html)
- [jazigo](https://github.com/udhos/jazigo) - Jazigo 是一个用 Go 编写的工具，用于获取多个网络设备的配置。
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP——快速可靠的 ARQ 协议。
- [lhttp](https://github.com/fanux/lhttp) - 强大的 websocket 框架，让你更轻松地构建即时通讯服务器。
- [linkio](https://github.com/ian-kent/linkio) - 为 Reader/Writer 接口模拟网络链路速度。
- [llb](https://github.com/kirillDanshin/llb) - 一个非常简单但快速的代理服务器后端。可用于以零内存分配和快速响应重定向到预定义的域名。
- [macwifi](https://github.com/jaisonerick/macwifi) - 适用于 macOS 13+ 的 Wi-Fi 扫描和钥匙串密码获取。
- [mdns](https://github.com/hashicorp/mdns) - 用 Golang 编写的简单 mDNS（多播 DNS）客户端/服务器库。
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Paho Go 客户端提供一个 MQTT 客户端库，可通过 TCP、TLS 或 WebSockets 连接到 MQTT 代理。
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - 极其简单、无内存分配的底层 MQTT 实现，非常适合嵌入式系统。
- [nbio](https://github.com/lesismal/nbio) - 纯 Go 的百万级以上连接解决方案，支持 tls/http1.x/websocket 并基本兼容 net/http，高性能、低内存开销、非阻塞、事件驱动、易于使用。
- [net](https://golang.org/x/net) - 该仓库包含补充性的 Go 网络库。
- [netchan](https://github.com/matveynator/netchan) - 适用于 Golang 的网络通道（netchan）：安全、可直接用于集群，支持嵌套通道和任意数据类型。灵感来自 Rob Pike。
- [nethawk](https://github.com/Flowtriq/nethawk) - 用于实时网络流量捕获、分析和攻击检测的终端 UI，支持 JSON 输出模式。
- [netpoll](https://github.com/cloudwego/netpoll) - 由字节跳动开发的高性能非阻塞 I/O 网络框架，专注于 RPC 场景。
- [NFF-Go](https://github.com/intel-go/nff-go) - 用于快速开发面向云和裸金属的高性能网络功能的框架（前身为 YANFF）。
- [nodepass](https://github.com/NodePassProject/nodepass) - 安全高效的 TCP/UDP 隧道解决方案，利用预先建立的 TCP/QUIC/WebSocket 或 HTTP/2 连接，跨越网络限制提供快速可靠的访问。
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - 使用 UDP 多播进行跨平台本地对等节点发现的纯 Go 库。
- [portproxy](https://github.com/aybabtme/portproxy) - 简单的 TCP 代理，可为不支持 CORS 的 API 添加 CORS 支持。
- [proxq](https://github.com/psyb0t/docker-proxq) - 异步反向代理，将每个请求排入 Redis 队列并返回作业 ID 以便轮询响应，支持路径前缀路由、重试和缓存。
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - PostgreSQL 服务器线路协议。构建你自己的服务器并开始提供连接服务。
- [publicip](https://github.com/polera/publicip) - publicip 包返回你的公网 IPv4 地址（互联网出口）。
- [quic-go](https://github.com/lucas-clemente/quic-go) - 用纯 Go 实现的 QUIC 协议。
- [roamr](https://github.com/sourabh-khot65/roamr) - 为附近已保存的 WiFi 网络打分的 CLI，告诉你应该使用哪个以及原因。
- [sdns](https://github.com/semihalev/sdns) - 高性能递归 DNS 解析服务器，支持 DNSSEC，专注于保护隐私。
- [sftp](https://github.com/pkg/sftp) - sftp 包实现了 <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt> 中描述的 SSH 文件传输协议。
- [ssh](https://github.com/gliderlabs/ssh) - 用于构建 SSH 服务器的高级 API（封装 crypto/ssh）。
- [sslb](https://github.com/eduardonunesp/sslb) - 这是一个超级简单的负载均衡器，只是一个旨在获得一定性能的小项目。
- [stun](https://github.com/go-rtc/stun) - RFC 5389 STUN 协议的 Go 实现。
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpack 是一个基于 TCP 的应用协议，用于在 Go 程序中打包和解包字节流。
- [tspool](https://github.com/two/tspool) - 使用 worker 池来提升性能并保护服务器的 TCP 库。
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - 由 [gVisor](https://gvisor.dev/) TCP/IP 协议栈驱动的纯 Go tun2socks 实现。
- [utp](https://github.com/anacrolix/utp) - Go uTP 微传输协议实现。
- [vssh](https://github.com/yahoo/vssh) - 基于 SSH 协议构建网络和服务器自动化的 Go 库。
- [water](https://github.com/songgao/water) - 简单的 TUN/TAP 库。
- [webrtc](https://github.com/pions/webrtc) - WebRTC API 的纯 Go 实现。
- [winrm](https://github.com/masterzen/winrm) - 在 Windows 机器上远程执行命令的 Go WinRM 客户端。
- [ws-reconnect](https://github.com/sing198/ws-reconnect) - 具有弹性的 WebSocket 客户端，支持自动重连、指数退避和心跳管理。
- [xtcp](https://github.com/xfxdev/xtcp) - TCP 服务器框架，支持同时全双工通信、优雅关闭和自定义协议。

**[⬆ 返回顶部](#contents)**

### HTTP 客户端

_用于发送 HTTP 请求的库。_

- [axios4go](https://github.com/rezmoss/axios4go) - 受 Axios 启发的 Go HTTP 客户端库，提供简单直观的 API 来发送 HTTP 请求。
- [azuretls-client](https://github.com/Noooste/azuretls-client) - 100% 用 Go 编写的易用 HTTP 客户端，可伪装 TLS/JA3 和 HTTP2 指纹。
- [fast-shot](https://github.com/opus-domini/fast-shot) - 使用 Go 最快速且简单的 HTTP 客户端，以连发般的精度命中你的 API 目标。
- [gentleman](https://github.com/h2non/gentleman) - 功能齐全、插件驱动的 HTTP 客户端库。
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - 轻松获取不与其他客户端共享任何状态的标准库 HTTP 客户端。
- [go-http-client](https://github.com/bozd4g/go-http-client) - 简单轻松地发起 HTTP 调用。
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - 基于多个源 IP 对 HTTP 请求进行多路复用的库。
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - 为 HTTP 请求发出 OpenTelemetry 指标的 Go http.RoundTripper。
- [go-req](https://github.com/wenerme/go-req) - 声明式的 Golang HTTP 客户端。
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - 用 Go 编写的可重试 HTTP 客户端。
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - 受 Web Fetch API 启发的强大、轻量、易用的 HTTP 客户端。
- [Grequest](https://github.com/lib4u/grequest)  - 用于发送 HTTP 请求的简单轻量的 Golang 包。基于强大的 net/http
- [grequests](https://github.com/levigross/grequests) - 著名的 Requests 库的 Go“克隆版”。
- [hedge](https://github.com/bhope/hedge) - 适用于 Go 的自适应对冲请求。基于 Google 的论文《The Tail at Scale》，零配置即可降低 p99 延迟。
- [heimdall](https://github.com/gojektech/heimdall) - 具备重试和 hystrix 能力的增强型 HTTP 客户端。
- [httpretry](https://github.com/ybbus/httpretry) - 为默认 Go HTTP 客户端增加重试功能。
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - 可直接替换的 net/http.Client，具备与浏览器逐字节一致的 TLS（JA3/JA4）和 HTTP/2（Akamai）指纹。
- [pester](https://github.com/sethgrid/pester) - 支持重试、退避和并发的 Go HTTP 客户端调用。
- [req](https://github.com/imroc/req) - 带有“黑魔法”的简单 Go HTTP 客户端（代码更少，效率更高）。
- [request](https://github.com/monaco-io/request) - 适用于 Golang 的 HTTP 客户端。如果你用过 axios 或 requests，你会爱上它。无第三方依赖。
- [requests](https://github.com/carlmjohnson/requests) - 为 Gopher 准备的 HTTP 请求库。使用 context.Context，且不隐藏底层的 net/http.Client，因此与标准 Go API 兼容。还包括测试工具。
- [resty](https://github.com/go-resty/resty) - 受 Ruby rest-client 启发的简单 Go HTTP 和 REST 客户端。
- [rq](https://github.com/ddo/rq) - 为 Golang 标准库 HTTP 客户端提供更友好的接口。
- [sling](https://github.com/dghubble/sling) - Sling 是一个用于创建和发送 API 请求的 Go HTTP 客户端库。
- [surf](https://github.com/enetx/surf) - 高级 HTTP 客户端，支持 HTTP/1.1、HTTP/2、HTTP/3（QUIC）、SOCKS5 代理和浏览器级 TLS 指纹。
- [tls-client](https://github.com/bogdanfinn/tls-client) - 类似 net/http.Client 的 HTTP 客户端，可选择请求时使用的特定客户端 TLS 指纹。

**[⬆ 返回顶部](#contents)**

## OpenGL

_在 Go 中使用 OpenGL 的库。_

- [gl](https://github.com/go-gl/gl) - OpenGL 的 Go 绑定（通过 glow 生成）。
- [glfw](https://github.com/go-gl/glfw) - GLFW 3 的 Go 绑定。
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - [glMatrix](https://glmatrix.net/) 库的 Go 移植版。
- [goxjs/gl](https://github.com/goxjs/gl) - Go 跨平台 OpenGL 绑定（OS X、Linux、Windows、浏览器、iOS、Android）。
- [goxjs/glfw](https://github.com/goxjs/glfw) - 用于创建 OpenGL 上下文和接收事件的 Go 跨平台 glfw 库。
- [mathgl](https://github.com/go-gl/mathgl) - 专用于 3D 数学的纯 Go 数学包，灵感来自 GLM。

**[⬆ 返回顶部](#contents)**

## ORM

_实现对象关系映射或数据映射技术的库。_

- [bob](https://github.com/stephenafamo/bob) - 适用于 Go 的 SQL 查询构建器和 ORM/工厂生成器。SQLBoiler 的后继者。
- [bun](https://github.com/uptrace/bun) - SQL 优先的 Golang ORM。go-pg 的后继者。
- [cacheme](https://github.com/Yiling-J/cacheme-go) - 基于模式、带类型的 Go Redis 缓存/记忆化框架。
- [CQL](https://github.com/FrancoLiberali/cql) - 构建于 GORM 之上，基于自动生成的代码增加编译期验证的查询。
- [ent](https://github.com/facebook/ent) - 适用于 Go 的实体框架。简单而强大的 ORM，用于数据建模和查询。
- [go-dbw](https://github.com/hashicorp/go-dbw) - 封装数据库操作的简单包。
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - 适用于 Google/Firebase Cloud Firestore 的简单 ORM。
- [go-sql](https://github.com/rushteam/gosql) - 简单易用的 mysql ORM。
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - 灵活强大的 SQL 字符串构建库，外加零配置 ORM。
- [go-store](https://github.com/gosuri/go-store) - 以 Redis 为后端、简单快速的 Go 键值存储库。
- [golobby/orm](https://github.com/golobby/orm) - 简单、快速、类型安全的泛型 ORM，让开发者心情愉快。
- [GoooQo](https://github.com/doytowin/goooqo) - 基于声明式查询模型的数据库访问框架。
- [GORM](https://github.com/go-gorm/gorm) - 出色的 Golang ORM 库，致力于对开发者友好。
- [gormt](https://github.com/xxjwxc/gormt) - 将 Mysql 数据库转换为 Golang gorm 结构体。
- [gorp](https://github.com/go-gorp/gorp) - Go 关系持久化，适用于 Go 的类 ORM 库。
- [grimoire](https://github.com/Fs02/grimoire) - Grimoire 是适用于 Golang 的数据库访问层和验证库。（支持：MySQL、PostgreSQL 和 SQLite3）。
- [lore](https://github.com/abrahambotros/lore) - 简单轻量的 Go 伪 ORM/伪结构体映射环境。
- [marlow](https://github.com/marlow/marlow) - 根据项目结构体生成 ORM，提供编译期安全保证。
- [pop/soda](https://github.com/gobuffalo/pop) - 面向 MySQL、PostgreSQL 和 SQLite 的数据库迁移、创建、ORM 等功能……
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go，适用于 Go 的类型安全数据库访问。
- [reform](https://github.com/go-reform/reform) - 基于非空接口和代码生成的更好的 Go ORM。
- [rel](https://github.com/go-rel/rel) - 现代的 Golang 数据库访问层——可测试、可扩展，并打磨成简洁优雅的 API。
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - ORM 生成器。根据你的数据库模式生成功能丰富且极速的 ORM。
- [upper.io/db](https://github.com/upper/db) - 通过封装成熟数据库驱动的适配器，以单一接口与不同数据源交互。
- [XORM](https://gitea.com/xorm/xorm) - 简单而强大的 Go ORM。（支持：MySQL、MyMysql、PostgreSQL、Tidb、SQLite3、MsSql 和 Oracle）。
- [Zoom](https://github.com/albrow/zoom) - 基于 Redis 构建的极速数据存储和查询引擎。

**[⬆ 返回顶部](#contents)**

## 包管理

_官方的依赖与包管理工具_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - 模块是源代码交换和版本控制的单位。go 命令直接支持使用模块，包括记录和解析对其他模块的依赖。

_非官方的包与依赖管理库。_

- [gup](https://github.com/nao1215/gup) - 更新通过“go install”安装的二进制文件。
- [modup](https://github.com/chaindead/modup) - 用于更新 Go 依赖的终端 UI，支持检测过时模块和选择性升级。
- [syft](https://github.com/anchore/syft) - 从容器镜像和文件系统生成软件物料清单（SBOM）的 CLI 工具和 Go 库。

**[⬆ 返回顶部](#contents)**

## 性能

- [ebpf-go](https://github.com/cilium/ebpf) - 提供用于加载、编译和调试 eBPF 程序的实用工具。
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - 自动为所有方法和函数添加 span。
- [go-perfstat](https://github.com/go-perfstat/go) - 适用于 Go 的轻量级性能统计和执行时间汇总。
- [jaeger](https://github.com/jaegertracing/jaeger) - 分布式追踪系统。
- [mm-go](https://github.com/joetifa2003/mm-go) - 适用于 Golang 的泛型手动内存管理。
- [otelinji](https://github.com/hedhyw/otelinji) - OpenTelemetry 自动插桩工具，用于为函数添加 span。
- [pixie](https://github.com/pixie-labs/pixie) - 借助 eBPF 对 Golang 应用进行无需插桩的追踪。
- [profile](https://github.com/pkg/profile) - 适用于 Go 的简单性能分析支持包。
- [statsviz](https://github.com/arl/statsviz) - 实时可视化 Go 应用的运行时统计信息。
- [tracer](https://github.com/kamilsk/tracer) - 简单、轻量的追踪。

**[⬆ 返回顶部](#contents)**

## 查询语言

- [api-fu](https://github.com/ccbrown/api-fu) - 全面的 GraphQL 实现。
- [dasel](https://github.com/tomwright/dasel) - 在命令行中使用选择器查询和更新数据结构。与 jq/yq 类似，但支持 JSON、YAML、TOML 和 XML，且零运行时依赖。
- [gnata](https://github.com/RecoLabs/gnata) - JSONata 2.x 查询与转换语言的纯 Go 实现。
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - 查询 JSON 数据的简单 Go 包。
- [goven](https://github.com/SeldonIO/goven) - 可直接用于任何数据库模式的查询语言。
- [gqlgen](https://github.com/99designs/gqlgen) - 基于 go generate 的 GraphQL 服务器库。
- [grapher](https://github.com/reaganiwadha/grapher) - 利用 Go 泛型的 GraphQL 字段构建器，附带额外的实用工具和功能。
- [graphql](https://github.com/neelance/graphql-go) - 注重易用性的 GraphQL 服务器。
- [graphql-go](https://github.com/graphql-go/graphql) - 适用于 Go 的 GraphQL 实现。
- [gws](https://github.com/Zaba505/gws) - Apollo“GraphQL over Websocket”协议的客户端和服务器实现。
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - 基于 JSONPath 语法获取部分 JSON 的查询库。
- [jsonql](https://github.com/elgs/jsonql) - Golang 中的 JSON 查询表达式库。
- [jsonslice](https://github.com/bhmj/jsonslice) - 支持高级过滤器的 Jsonpath 查询。
- [mql](https://github.com/hashicorp/mql) - 模型查询语言（mql）是一种用于数据库模型的查询语言。
- [play](https://github.com/paololazzari/play) - 一个 TUI 演练场，用于试验 grep、sed、awk、jq 和 yq 等你喜爱的程序。
- [rql](https://github.com/a8m/rql) - 适用于 REST API 的资源查询语言。
- [rqp](https://github.com/timsolov/rest-query-parser) - 适用于 REST API 的查询解析器。可在查询中直接进行过滤和验证，并支持 `AND`、`OR` 运算。
- [straf](https://github.com/SonicRoshan/straf) - 轻松将 Golang 结构体转换为 GraphQL 对象。

**[⬆ 返回顶部](#contents)**

## 反射

- [copy](https://github.com/gotidy/copy) - 快速复制不同类型结构体的包。
- [Deepcopier](https://github.com/ulule/deepcopier) - 适用于 Go 的简单结构体复制。
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - 快速的深拷贝库。
- [goenum](https://github.com/lvyahui8/goenum) - 基于泛型和反射的通用枚举结构体，让你快速定义枚举并使用一组实用的默认方法。
- [gotype](https://github.com/wzshiming/gotype) - Golang 源代码解析，用法类似 reflect 包。
- [gpath](https://github.com/tenntenn/gpath) - 在反射中使用 Go 表达式简化结构体字段访问的库。
- [objwalker](https://github.com/rekby/objwalker) - 通过反射遍历 Go 对象。
- [reflectpro](https://github.com/gontainer/reflectpro) - 适用于 Go 的调用器、复制器、getter 和 setter。
- [reflectutils](https://github.com/muir/reflectutils) - 反射辅助工具：结构体标签解析、递归遍历、根据字符串填充值。

**[⬆ 返回顶部](#contents)**

## 资源嵌入

- [debme](https://github.com/leaanthony/debme) - 基于现有 `embed.FS` 的子目录创建一个 `embed.FS`。
- [embed](https://pkg.go.dev/embed) - embed 包提供对运行中 Go 程序内嵌文件的访问。
- [rebed](https://github.com/soypat/rebed) - 根据 Go 1.16 的 `embed.FS` 类型重建文件夹结构和文件
- [vfsgen](https://github.com/shurcooL/vfsgen) - 生成一个静态实现指定虚拟文件系统的 vfsdata.go 文件。

**[⬆ 返回顶部](#contents)**

## 科学计算与数据分析

_用于科学计算和数据分析的库。_

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - 提供用于成对比较的 Bradley-Terry 模型。
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - 受 Github 贡献活动启发、用纯 Go 实现的日历热力图。
- [chart](https://github.com/vdobler/chart) - 简单的 Go 图表绘制库。支持多种图表类型。
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - 面向机器学习和统计的数据框（类似 pandas）。
- [decimal](https://github.com/db47h/decimal) - decimal 包实现了任意精度的十进制浮点运算。
- [entitydebs](https://github.com/ndabAP/entitydebs) - 一个社会科学工具，内置依存句法分析器，可通过编程方式分析非虚构文本中的实体。
- [evaler](https://github.com/soniah/evaler) - 简单的浮点算术表达式求值器。
- [ewma](https://github.com/VividCortex/ewma) - 指数加权移动平均。
- [geom](https://github.com/skelterjohn/geom) - 适用于 Golang 的 2D 几何库。
- [go-dsp](https://github.com/mjibson/go-dsp) - 适用于 Go 的数字信号处理。
- [go-estimate](https://github.com/milosgajdos/go-estimate) - 用 Go 实现的状态估计与滤波算法。
- [go-gt](https://github.com/ThePaw/go-gt) - 用“Go”语言编写的图论算法。
- [go-hep](https://github.com/go-hep/hep) - 一组可轻松进行高能物理分析的库和工具。
- [godesim](https://github.com/soypat/godesim) - 用于基于事件的仿真的扩展/多变量 ODE 求解器框架，API 简单。
- [goent](https://github.com/kzahedi/goent) - 熵度量的 GO 实现。
- [gograph](https://github.com/hmdsefi/gograph) - 提供数学图论和算法的 Golang 泛型图库。
- [gonum](https://github.com/gonum/gonum) - Gonum 是一组适用于 Go 编程语言的数值计算库，包含矩阵、统计、优化等方面的库。
- [gonum/plot](https://github.com/gonum/plot) - gonum/plot 提供在 Go 中构建和绘制图表的 API。
- [goraph](https://github.com/gyuho/goraph) - 纯 Go 图论库（数据结构、算法可视化）。
- [gosl](https://github.com/cpmech/gosl) - Go 科学计算库，涵盖线性代数、FFT、几何、NURBS、数值方法、概率、优化、微分方程等。
- [GoStats](https://github.com/OGFris/GoStats) - GoStats 是一个开源的 GoLang 数学统计库，主要用于机器学习领域，涵盖了大部分统计度量函数。
- [graph](https://github.com/yourbasic/graph) - 基础图算法库。
- [hdf5](https://github.com/scigolib/hdf5) - 用于科学数据存储和交换的 HDF5 文件格式纯 Go 实现。
- [insyra](https://github.com/HazelnutParadise/insyra) - 数据分析库，提供统计、可视化、Parquet 支持和 Python 集成。
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - 处理 JSONL 图的工具，支持 graphviz。
- [matlab](https://github.com/scigolib/matlab) - 无需 CGO 即可读写 MATLAB .mat 文件（v5-v7.3）的纯 Go 库。
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.go 是一个开源包，用于在 Go 中定义数学规划（例如凸优化问题）。
- [matrix](https://github.com/Arceus-7/matrix) - 简洁、泛型、零依赖的 Go 矩阵数学包，支持算术运算、矩阵分解和线性方程组求解。
- [ode](https://github.com/ChristopherRabotin/ode) - 常微分方程（ODE）求解器，支持扩展状态和基于 channel 的迭代停止条件。
- [orb](https://github.com/paulmach/orb) - 2D 几何类型，支持裁剪、GeoJSON 和 Mapbox 矢量瓦片。
- [pagerank](https://github.com/alixaxel/pagerank) - 用 Go 实现的加权 PageRank 算法。
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - 小型线性插值库。
- [PiHex](https://github.com/claygod/PiHex) - 用于计算十六进制圆周率的“Bailey-Borwein-Plouffe”算法实现。
- [Poly](https://github.com/bebop/poly) - 用于生物体工程的 Go 包。
- [rootfinding](https://github.com/khezen/rootfinding) - 用于求解二次函数根的求根算法库。
- [simd](https://github.com/tphakala/simd) - 原生 Go 切片向量和 SIMD 运算，支持多架构汇编加速。
- [sparse](https://github.com/james-bowman/sparse) - 用于线性代数的 Go 稀疏矩阵格式，支持科学计算和机器学习应用，兼容 gonum 矩阵库。
- [stats](https://github.com/montanaflynn/stats) - 统计包，提供 Golang 标准库中缺少的常用函数。
- [streamtools](https://github.com/nytlabs/streamtools) - 处理数据流的通用图形化工具。
- [taxonkit](https://github.com/shenwei356/taxonkit) - 实用高效的 NCBI 分类学工具包；支持查询谱系、重新格式化、过滤以及创建自定义 taxdump 文件。
- [TextRank](https://github.com/DavidBelicza/TextRank) - 用 Golang 实现的 TextRank，具备可扩展功能（摘要、加权、短语提取）并支持多线程（goroutine）。
- [topk](https://github.com/keilerkonzept/topk) - 基于 HeavyKeeper 算法的滑动窗口和常规 top-K 草图。
- [triangolatte](https://github.com/tchayen/triangolatte) - 2D 三角剖分库。可将线和多边形（均基于点）转换为 GPU 能理解的语言。

**[⬆ 返回顶部](#contents)**

## 安全

_帮助提升应用安全性的库。_

- [acme-proxy](https://github.com/esnet/acme-proxy) - 无需向互联网开放 80 端口即可完成 ACME http-01 质询，并从外部证书颁发机构获取证书。
- [acmetool](https://github.com/hlandau/acme) - 支持自动续期的 ACME（Let's Encrypt）客户端工具。
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - 小型的 Go 密码学安全密码生成器包。
- [acra](https://github.com/cossacklabs/acra) - 网络加密代理，保护基于数据库的应用免遭数据泄露：强选择性加密、SQL 注入防护、入侵检测系统。
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - 符合 NIST SP 800-90A 规范、基于计数器模式 AES 的确定性随机比特生成器（AES-CTR-DRBG）。
- [age](https://github.com/FiloSottile/age) - 简单、现代且安全的加密工具（及 Go 库），密钥小而明确，无配置选项，具备 UNIX 风格的可组合性。
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Go argon2 包的轻量封装，与 Go 标准库 Bcrypt 和 simple-scrypt 包的用法高度一致。
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - 自动签发 Let's Encrypt 证书并启动 TLS 服务器。
- [BadActor](https://github.com/jaredfolkins/badactor) - 秉承 fail2ban 精神构建的基于内存、由应用驱动的封禁工具。
- [beelzebub](https://github.com/mariocandela/beelzebub) - 安全的低代码蜜罐框架，利用 AI 实现系统虚拟化。
- [booster](https://github.com/anatol/booster) - 支持全盘加密的快速 initramfs 生成器。
- [caddy-waf](https://github.com/fabriziosalmi/caddy-waf) - Caddy 服务器的 Web 应用防火墙中间件，具备正则规则引擎、异常评分、IP/DNS/ASN/国家黑名单和限流功能。
- [Cameradar](https://github.com/Ullaakut/cameradar) - 远程入侵监控摄像头 RTSP 流的工具和库。
- [canery](https://github.com/rluders/canery) - 精简的无状态授权引擎，采用可插拔的评估模型。
- [certificates](https://github.com/mvmaasakkers/certificates) - 遵循固定约定的 TLS 证书生成工具。
- [CertMagic](https://github.com/caddyserver/certmagic) - 成熟、健壮且强大的 ACME 客户端集成，用于全托管的 TLS 证书签发和续期。
- [Coraza](https://github.com/corazawaf/coraza) - 企业级 WAF 库，兼容 modsecurity 和 OWASP CRS。
- [coraza-rule-validator](https://github.com/stardothosting/coraza-rule-validator) - 独立的 CLI 工具，用于在生产部署前验证 ModSecurity 和 Coraza SecLang WAF 规则。
- [Crenox](https://github.com/crenoxhq/crenox) - 零依赖的预提交机密扫描器，使用 Aho-Corasick 算法实现高性能凭据泄露检测。
- [deidentify](https://github.com/aliengiraffe/deidentify) - 以确定性、保留格式的方式从文本和结构化数据中移除个人身份信息。
- [dongle](https://github.com/golang-module/dongle) - 简单、语义化且对开发者友好的 Golang 编解码和加解密包。
- [dotlock](https://github.com/ahmadraza100/dotlock) - 加密的 .env 保险库管理器，带有交互式 TUI，可跨多个环境和配置文件管理机密信息。
- [encid](https://github.com/bobg/encid) - 编码和解码加密的整数 ID。
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - 熵密码生成器，提供丰富的命令行参数，可安全地生成随机字符串，包括数字、密码，以及由生僻词典单词混合符号和数字构成的密码。
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - 在 Linux 服务器上动态更新 firewalld 规则的 REST 应用。
- [fort](https://github.com/djadmin/fort) - 通过 16 项检查审计 macOS 安全设置，给出评分，并在可安全修复时修复问题。单个二进制文件，可通过 Homebrew 安装。
- [go-generate-password](https://github.com/m1/go-generate-password) - 可在命令行使用或作为库使用的密码生成器。
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - 适用于 Go 的 Apache htpasswd 解析器。
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - 基于原始密码学熵值的密码验证器。
- [go-peer](https://github.com/number571/go-peer) - 用于创建安全、匿名的去中心化系统的软件库。
- [go-yara](https://github.com/hillu/go-yara) - [YARA](https://github.com/plusvic/yara) 的 Go 绑定；YARA 是“恶意软件研究人员（以及其他所有人）的模式匹配瑞士军刀”。
- [goArgonPass](https://github.com/dwin/goArgonPass) - Argon2 密码哈希与验证，旨在与现有的 Python 和 PHP 实现兼容。
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - 一个可能有点“偏执”的包，用于安全地哈希和加密密码。
- [gost-crypto](https://github.com/rekurt/gost-crypto) - 基于 OpenSSL gost-engine 的俄罗斯 GOST 密码标准 Go 库（数字签名、Streebog 哈希、Kuznechik 密码、MGM AEAD）。
- [grim](https://github.com/ijin82/grim) - 快速、安全的 CLI 工具，用于在易失性内存中管理加密的 Markdown 笔记库。
- [gspy](https://github.com/Mutasem-mk4/gspy) - 面向运行中 Go 进程的取证工具，可检查从 goroutine 到系统调用的映射。
- [Interpol](https://github.com/avahidi/interpol) - 用于模糊测试和渗透测试的基于规则的数据生成器。
- [leakhound](https://github.com/nilpoona/leakhound) - 静态分析工具，用于检测意外记录敏感结构体字段的情况，防止日志中的数据泄露。
- [lego](https://github.com/go-acme/lego) - 纯 Go 的 ACME 客户端库和 CLI 工具（用于 Let's Encrypt）。
- [luks.go](https://github.com/anatol/luks.go) - 管理 LUKS 分区的纯 Golang 库。
- [mcprobe](https://github.com/tamish560/mcprobe) - MCP 服务器安全扫描器，支持提示词注入检测、工具遮蔽检测和 SARIF 输出。
- [memguard](https://github.com/awnumar/memguard) - 在内存中处理敏感值的纯 Go 库。
- [mist](https://github.com/iSerganov/mist) - 非对称密钥音频隐写库，使用 X25519 和 ChaCha20-Poly1305 将加密消息隐藏在压缩音频中。
- [multikey](https://github.com/adrianosela/multikey) - 基于 Shamir 秘密共享算法的 N 选 n 密钥加密/解密框架。
- [nacl](https://github.com/kevinburke/nacl) - NaCL API 集的 Go 实现。
- [nurago/pkg/redact](https://github.com/tecnickcom/nurago/tree/main/pkg/redact) - 一次性从日志行和 HTTP 转储中移除机密信息，涵盖请求头、JSON、XML、URL 编码数据、JWT、PEM 密钥和供应商令牌。
- [optimus-go](https://github.com/pjebs/optimus-go) - 使用 Knuth 算法进行 ID 哈希和混淆。
- [osv-scanner](https://github.com/google/osv-scanner) - 用 Go 编写的漏洞扫描器，使用 OSV 提供的数据。
- [passlib](https://github.com/hlandau/passlib) - 面向未来的密码哈希库。
- [passwap](https://github.com/zitadel/passwap) - 为不同的密码哈希算法提供统一实现
- [pii-shield](https://github.com/pii-shield/pii-shield) - 适用于 Kubernetes 的零代码日志脱敏边车，可从日志中删除个人身份信息。
- [pm](https://github.com/nicola-strappazzon/password-manager) - 用 Go 编写的 Unix 风格密码管理器，使用 OpenPGP 加密保存你的数据。
- [procscope](https://github.com/Mutasem-mk4/procscope) - 进程级运行时调查工具，使用 eBPF 追踪进程生命周期、文件活动和网络连接。
- [qrand](https://github.com/bitfield/qrand) - ANU 量子随机数（AQN）API 的客户端，提供基于量子力学的安全随机数据。
- [Razify](https://github.com/Hossiy21/razify) - 扫描、验证和审计 .env 文件的 CLI，用于发现泄露的机密和环境漂移。
- [redact](https://github.com/alesr/redact) - 使用可配置的管道对基于 slog 的日志中的敏感信息进行脱敏。
- [SafeDep/vet](https://github.com/safedep/vet) - 防范恶意开源包。
- [secret](https://github.com/rsjethani/secret) - 防止你的机密信息泄露到日志、std\* 等位置。
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - 基于 CSPRNG 的凭据生成器，为密码、口令短语、机密、API 密钥和 PIN 提供带版本的 JSON 模式。
- [secure](https://github.com/unrolled/secure) - 适用于 Go 的 HTTP 中间件，可帮助快速提升安全性。
- [secureio](https://github.com/xaionaro-go/secureio) - 基于 XChaCha20-poly1305、ECDH 和 ED25519，为 `io.ReadWriteCloser` 提供密钥交换+身份验证+加密的封装器和多路复用器。
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - Scrypt 包，API 简单明了，并内置自动成本校准。
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - 使用 SSH 密钥加密/解密。
- [sslmgr](https://github.com/adrianosela/sslmgr) - 借助对 acme/autocert 的高级封装，让 SSL 证书变得简单。
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-waf 是一个 Go HTTP 中间件，提供 teler IDS 功能，可防御基于 Web 的攻击并提升 Go Web 应用的安全性。它高度可配置，且易于集成到现有 Go 应用中。
- [themis](https://github.com/cossacklabs/themis) - 高级密码学库，用于解决典型的数据安全任务（安全数据存储、安全消息传递、零知识证明身份验证），支持 14 种语言，最适合多平台应用。
- [urusai](https://github.com/calpa/urusai) - Urusai（日语中意为“吵闹”）是一个随机 HTTP/DNS 流量噪声生成器的 Go 实现，可在浏览时制造数字烟幕以帮助保护隐私。
- [veil](https://github.com/getveil/veil) - 本地 HTTPS 代理，可对 AI 编程智能体隐藏 API 凭据。集成操作系统钥匙串，提供感知格式的占位符和 SQLite 审计日志。
- [y509](https://github.com/kanywst/y509) - 用于 X.509 证书链的 TUI，可报告证书链是否通过验证，并单独报告服务器是否正确提供了证书链。


**[⬆ 返回顶部](#contents)**

## 序列化

_用于二进制序列化的库和工具。_

- [bambam](https://github.com/glycerine/bambam) - 从 Go 生成 Cap'n Proto 模式的生成器。
- [bel](https://github.com/32leaves/bel) - 根据 Go 结构体/接口生成 TypeScript 接口。适用于 JSON RPC。
- [binstruct](https://github.com/ghostiam/binstruct) - 将数据映射到结构体中的 Golang 二进制解码器。
- [cbor](https://github.com/fxamacker/cbor) - 小巧、安全且易用的 CBOR 编解码库。
- [colfer](https://github.com/pascaldekloe/colfer) - Colfer 二进制格式的代码生成。
- [csvutil](https://github.com/jszwec/csvutil) - 高性能、符合语言习惯的 CSV 记录编解码，可映射到原生 Go 结构。
- [elastic](https://github.com/epiclabs-io/elastic) - 在运行时将切片、映射或任何其他未知值转换为不同类型，无论是什么。
- [fixedwidth](https://github.com/huydang284/fixedwidth) - 固定宽度文本格式化（支持 UTF-8）。
- [fwencoder](https://github.com/o1egl/fwencoder) - 适用于 Go 的固定宽度文件解析器（编解码库）。
- [go-capnproto](https://github.com/glycerine/go-capnproto) - 适用于 Go 的 Cap'n Proto 库和解析器。
- [go-codec](https://github.com/ugorji/go) - 面向 msgpack、cbor 和 json 的高性能、功能丰富、符合语言习惯的编码、解码和 RPC 库，支持基于运行时或代码生成的方式。
- [go-csvlib](https://github.com/tiendc/go-csvlib) - 高级且功能丰富的 CSV 序列化/反序列化库。
- [goprotobuf](https://github.com/golang/protobuf) - 以库和协议编译器插件形式为 Google 的 protocol buffers 提供 Go 支持。
- [gotiny](https://github.com/raszia/gotiny) - 高效的 Go 序列化库，gotiny 的速度几乎与生成代码的序列化库一样快。
- [jsoniter](https://github.com/json-iterator/go) - “encoding/json”的高性能、100% 兼容的直接替代品。
- [mus-go](https://github.com/mus-format/mus-go) - 适用于 Go 的 MUS 格式序列化器。
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - 处理 PHP 会话格式和 PHP Serialize/Unserialize 函数的 GoLang 库。
- [pletter](https://github.com/vimeda/pletter) - 为消息代理封装 proto 消息的标准方式。
- [proto](https://github.com/emicklei/proto) - Google ProtocolBuffers .proto 文件的解析器和写入器。
- [structomap](https://github.com/tuvistavie/structomap) - 根据静态结构轻松动态生成映射的库。
- [unitpacking](https://github.com/recolude/unitpacking) - 将单位向量打包成尽可能少的字节的库。

**[⬆ 返回顶部](#contents)**

## 服务器应用

- [algernon](https://github.com/xyproto/algernon) - HTTP/2 Web 服务器，内置支持 Lua、Markdown、GCSS 和 Amber。
- [Caddy](https://github.com/caddyserver/caddy) - Caddy 是一个易于配置和使用的 HTTP/2 Web 服务器替代方案。
- [Casdoor](https://github.com/casdoor/casdoor) - 带 Web UI 的身份与访问管理（IAM）和单点登录（SSO）服务器，支持 OAuth 2.0、OIDC、SAML、CAS 和 LDAP。
- [consul](https://www.consul.io/) - Consul 是一个用于服务发现、监控和配置的工具。
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - Prometheus 远程写入代理，可根据指标标签添加 Cortex 租户 ID 头。
- [devd](https://github.com/cortesi/devd) - 面向开发者的本地 Web 服务器。
- [discovery](https://github.com/Bilibili/discovery) - 用于弹性中间层负载均衡和故障转移的注册中心。
- [dudeldu](https://github.com/krotik/dudeldu) - 简单的 SHOUTcast 服务器。
- [Easegress](https://github.com/megaease/easegress) - 云原生的高可用/高性能流量编排系统，具备可观测性和可扩展性。
- [Engity's Bifröst](https://bifroest.engity.org/) - 高度可定制的 SSH 服务器，提供多种方式授权用户如何执行其会话（本地或容器中）。
- [etcd](https://github.com/etcd-io/etcd) - 用于共享配置和服务发现的高可用键值存储。
- [Euterpe](https://github.com/ironsmile/euterpe) - 自托管音乐流媒体服务器，内置 Web UI 和 REST API。
- [Fider](https://github.com/getfider/fider) - Fider 是一个用于收集和整理客户反馈的开放平台。
- [Flagr](https://github.com/checkr/flagr) - Flagr 是一个开源的功能开关和 A/B 测试服务。
- [flipt](https://github.com/markphelps/flipt) - 用 Go 和 Vue.js 编写的自包含功能开关解决方案
- [flue](https://github.com/karnstack/flue) - 自托管守护进程，将终端会话提供给浏览器标签页。关闭标签页后会话仍会继续运行。
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - 简单、完整、轻量的自托管功能开关解决方案，100% 开源。
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - 用 Go 编写、使用 Redis 的带缓存简单反向代理。
- [gondola](https://github.com/bmf-san/gondola) - 基于 YAML 的 Golang 反向代理。
- [goshs](https://github.com/patrickhener/goshs) - SimpleHTTPServer 的替代品，支持文件上传/下载、WebDAV、SFTP、SMB、TLS、身份验证和分享链接。
- [Kono](https://github.com/starwalkn/kono) - 用 Go 编写的轻量级可扩展 API 网关——并行扇出、灵活聚合，没有任何配置“魔法”。
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - 处理 HTTPS 的反向代理，可即时从 lets-encrypt 签发证书。
- [minio](https://github.com/pgsty/minio) - minio（对象存储服务）的社区维护分支。
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxy 是一个简单的模拟与代理应用服务器，你可以创建模拟端点，并在端点不存在模拟时代理请求。
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Nginx 日志解析器和 Prometheus 导出器。
- [nsq](https://nsq.io/) - 实时分布式消息平台。
- [OpenRun](https://github.com/openrundev/openrun) - Google Cloud Run 和 AWS App Runner 的开源替代品。可在团队中轻松部署内部工具。
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBase 是一个单文件实时后端，包含支持实时订阅的嵌入式数据库（SQLite）、内置身份验证管理等众多功能。
- [protoxy](https://github.com/camgraff/protoxy) - 将 JSON 请求体转换为 Protocol Buffers 的代理服务器。
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - 将数据库事件从 PostgreSQL 流式传输到 Kafka。
- [relay](https://github.com/valtors/relay) - 为 AI 智能体提供 40 多种工具的 MCP 服务器。支持文件操作、网页搜索、截图和多智能体协作。单个 Go 二进制文件。
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - 对 Riemann 事件进行负载均衡和/或将其转换为 Carbon 格式的中继。
- [RoadRunner](https://github.com/spiral/roadrunner) - 高性能 PHP 应用服务器、负载均衡器和进程管理器。
- [SFTPGo](https://github.com/drakkan/sftpgo) - 功能齐全、高度可配置的 SFTP 服务器，可选支持 FTP/S 和 WebDAV。可提供本地文件系统以及 S3 和 Google Cloud Storage 等云存储后端。
- [simpleconf](https://github.com/shaunlee/simpleconf) - 保存单个 JSON 文档的配置服务器，可通过 HTTP 和 TCP 按键路径读写，并可选 Raft 集群。
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTP 反向代理缓存和时间序列加速器。
- [wd-41](https://github.com/baalimago/wd-41) - 一个 Web 开发（(w)eb (d)evelopment）服务器，文件变化时自动实时重载。
- [whois](https://github.com/KincaidYang/whois) - 自托管的 WHOIS/RDAP 查询服务和 MCP 服务器，适用于域名、IPv4/IPv6 地址、CIDR 和 ASN。
- [Wish](https://github.com/charmbracelet/wish) - 轻松制作 SSH 应用，就这么简单！

**[⬆ 返回顶部](#contents)**

## 流处理

_用于流处理和响应式编程的库和工具。_

- [go-etl](https://github.com/Breeze0806/go-etl) - 用于数据源提取、转换和加载（ETL）的轻量级工具包。
- [go-streams](https://github.com/reugn/go-streams) - Go 流处理库。
- [goio](https://github.com/primetalk/goio) - Golang 版 IO、Stream、Fiber 实现，灵感来自出色的 Scala 库 cats 和 fs2。
- [gostream](https://github.com/mariomac/gostream) - 受 Java Streams API 启发的类型安全流处理库。
- [machine](https://github.com/whitaker-io/machine) - 用于编写和生成流处理 worker 的 Go 库，内置指标和可追溯性。
- [nibbler](https://github.com/naughtygopher/nibbler) - 用于微批处理的轻量级包。
- [ro](https://github.com/samber/ro) - 响应式编程：面向事件驱动应用的声明式、可组合 API。
- [signals](https://github.com/coregx/signals) - 受 Angular Signals 启发的类型安全响应式状态管理，支持计算值、副作用和依赖跟踪。
- [stream](https://github.com/youthlin/stream) - Go Stream，类似 Java 8 Stream：Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce……
- [StreamSQL](https://github.com/rulego/streamsql) - 用于实时数据处理的轻量级流式 SQL 引擎。

**[⬆ 返回顶部](#contents)**

## 模板引擎

_用于模板和词法分析的库和工具。_

- [bagme](https://github.com/boxesandglue/bagme) - 纯 Go 实现的 HTML/CSS 到 PDF 渲染，具备 TeX 级排版质量。
- [ego](https://github.com/benbjohnson/ego) - 轻量级模板语言，让你用 Go 编写模板。模板会被翻译成 Go 代码并编译。
- [fasttemplate](https://github.com/valyala/fasttemplate) - 简单快速的模板引擎。替换模板占位符的速度比 [text/template](https://golang.org/pkg/text/template/) 快达 10 倍。
- [gomponents](https://www.gomponents.com) - 纯 Go 编写的 HTML 5 组件，看起来大致如下：`func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`。
- [got](https://github.com/goradd/got) - 受 Hero 和 Fasttemplate 启发的 Go 代码生成器。支持包含文件、自定义标签定义、注入 Go 代码、语言翻译等。
- [goview](https://github.com/foolin/goview) - Goview 是一个基于 Golang html/template 的轻量、极简且符合语言习惯的模板库，用于构建 Go Web 应用。
- [gox](https://github.com/doors-dev/gox) - 将 HTML 模板作为一等 Go 表达式，并提供无缝的编辑器支持。
- [htmgo](https://htmgo.dev) - 使用 go + htmx 构建简单且可扩展的系统
- [jet](https://github.com/CloudyKit/jet) - Jet 模板引擎。
- [liquid](https://github.com/osteele/liquid) - Shopify Liquid 模板的 Go 实现。
- [liquidgo](https://github.com/Notifuse/liquidgo) - Shopify Liquid 模板引擎的完整 Go 实现。
- [maroto](https://github.com/johnfercher/maroto) - 一种“maroto”式的 PDF 创建方式。Maroto 受 Bootstrap 启发，使用 gofpdf。快速而简单。
- [pongo2](https://github.com/flosch/pongo2) - 适用于 Go 的类 Django 模板引擎。
- [quicktemplate](https://github.com/valyala/quicktemplate) - 快速、强大且易用的模板引擎。将模板转换为 Go 代码，然后进行编译。
- [Razor](https://github.com/sipin/gorazor) - 适用于 Golang 的 Razor 视图引擎。
- [Soy](https://github.com/robfig/soy) - 适用于 Go 的 Closure 模板（又称 Soy 模板），遵循[官方规范](https://developers.google.com/closure/templates/)。
- [sprout](https://github.com/go-sprout/sprout) - 适用于 Go 模板的实用模板函数。
- [tbd](https://github.com/lucasepe/tbd) - 创建带占位符文本模板的一种非常简单的方式——额外暴露内置的 Git 仓库元数据。
- [templ](https://github.com/a-h/templ) - 拥有出色开发者工具的 HTML 模板语言。
- [templator](https://github.com/alesr/templator) - 适用于 Go 的类型安全 HTML 模板渲染引擎。

**[⬆ 返回顶部](#contents)**

## 测试

_用于测试代码库和生成测试数据的库。_

### 测试框架

- [apitest](https://apitest.dev) - 简单且可扩展的行为测试库，适用于基于 REST 的服务或 HTTP 处理器，支持模拟外部 HTTP 调用和渲染时序图。
- [arch-go](https://github.com/arch-go/arch-go) - 面向 Go 项目的架构测试工具。
- [assay](https://github.com/tushariitr-19/assay) - 与框架无关的评估库，用于测试 Go 智能体和 MCP 服务器，提供确定性检查、可直接用于 CI 的退出码以及基于 YAML 的零代码测试。
- [assert](https://github.com/go-playground/assert) - 与原生 Go 测试配合使用的基础断言库，提供用于自定义断言的构建块。
- [axiom](https://github.com/Nikita-Filonov/axiom) - 可组合的 Go 测试框架，支持测试夹具、钩子、重试、元数据、插件和并行执行。
- [baloo](https://github.com/h2non/baloo) - 让富有表现力且多功能的端到端 HTTP API 测试变得简单。
- [be](https://github.com/carlmjohnson/be) - 极简的泛型测试断言库。
- [biff](https://github.com/fulldump/biff) - 分叉测试框架，兼容 BDD。
- [charlatan](https://github.com/percolate/charlatan) - 为测试生成伪接口实现的工具。
- [commander](https://github.com/SimonBaeumer/commander) - 在 windows、linux 和 osx 上测试 CLI 应用的工具。
- [coverage](https://github.com/jbunds/coverage) - Go 测试覆盖率的简单 Web UI，以及可复用的 GitHub Action [go-test-coverage-html-report](https://github.com/marketplace/actions/go-test-coverage-html-report)。
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - 为你的测试框架提供的简单快照测试插件。
- [dbcleaner](https://github.com/khaiql/dbcleaner) - 为测试目的清理数据库，灵感来自 Ruby 中的 `database_cleaner`。
- [dft](https://github.com/abecodes/dft) - 用于测试（或更多用途）的轻量级、零依赖 Docker 容器。
- [dsunit](https://github.com/viant/dsunit) - 面向 SQL、NoSQL 和结构化文件的数据存储测试。
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - 在 Linux、OSX 或 Windows 上本地运行真实的 Postgres 数据库，作为另一个 Go 应用或测试的一部分。
- [endly](https://github.com/viant/endly) - 声明式端到端功能测试。
- [envite](https://github.com/PerimeterX/envite) - 开发和测试环境管理框架。
- [fixenv](https://github.com/rekby/fixenv) - 受 pytest fixtures 启发的测试夹具管理引擎。
- [flute](https://github.com/suzuki-shunsuke/flute) - HTTP 客户端测试框架。
- [frisby](https://github.com/verdverm/frisby) - REST API 测试框架。
- [gherkingen](https://github.com/hedhyw/gherkingen) - BDD 样板生成器和框架。
- [ginkgo](https://onsi.github.io/ginkgo/) - 适用于 Go 的 BDD 测试框架。
- [gnomock](https://github.com/orlangure/gnomock) - 使用在 Docker 中运行的真实依赖（数据库、缓存，甚至 Kubernetes 或 AWS）进行集成测试，无需模拟。
- [go-carpet](https://github.com/msoap/go-carpet) - 在终端中查看测试覆盖率的工具。
- [go-cmp](https://github.com/google/go-cmp) - 在测试中比较 Go 值的包。
- [go-hit](https://github.com/Eun/go-hit) - Hit 是一个用 Golang 编写的 HTTP 集成测试框架。
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - HTTP 测试和调试工具，提供各种用于客户端测试的端点。
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - 适用于 Go 的变异测试，支持 CI 质量门禁、感知覆盖率的 MSI、基线跟踪和 git-diff 过滤。
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - 用于辅助 MySQL 集成测试的 Golang MySQL testcontainer。
- [go-snaps](http://github.com/gkampitakis/go-snaps) - Golang 中类似 Jest 的快照测试。
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - 报告覆盖率低于设定阈值的文件的工具。
- [go-testdeep](https://github.com/maxatome/go-testdeep) - 极其灵活的 Golang 深度比较，扩展了 Go testing 包。
- [go-testing](https://github.com/tkrop/go-testing) - Go 测试扩展，可轻松搭建强隔离的单元测试、组件测试和集成测试，并在 gomock 和 gock 基础上提供高级模拟支持。
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - 谓词风格的测试断言库，提供详尽的诊断输出。
- [go-vcr](https://github.com/dnaeon/go-vcr) - 录制并回放 HTTP 交互，实现快速、确定且准确的测试。
- [goblin](https://github.com/franela/goblin) - 类似 Mocha 的 Go 测试框架。
- [goc](https://github.com/qiniu/goc) - Goc 是一个面向 Go 编程语言的全面覆盖率测试系统。
- [gocheck](https://labix.org/gocheck) - 比 gotest 更高级的替代测试框架。
- [GoConvey](https://github.com/smartystreets/goconvey/) - 带有 Web UI 和实时重载的 BDD 风格框架。
- [gocrest](https://github.com/corbym/gocrest) - 用于 Go 断言的可组合类 hamcrest 匹配器。
- [godog](https://github.com/cucumber/godog) - 适用于 Go 的 Cucumber BDD 框架。
- [gofight](https://github.com/appleboy/gofight) - 面向 Golang 路由框架的 API 处理器测试。
- [gogiven](https://github.com/corbym/gogiven) - 适用于 Go 的类 YATSPEC BDD 测试框架。
- [gomatch](https://github.com/jfilipczyk/gomatch) - 用于根据模式测试 JSON 的库。
- [gomega](https://onsi.github.io/gomega/) - 类 Rspec 的匹配器/断言库。
- [gospecify](https://github.com/stesla/gospecify) - 为测试 Go 代码提供 BDD 语法。用过 rspec 等库的人应该都会觉得熟悉。
- [gosuite](https://github.com/pavlo/gosuite) - 利用 Go1.7 的子测试，为 `testing` 带来具备 setup/teardown 功能的轻量级测试套件。
- [got](https://github.com/ysmood/got) - 令人愉快的 Golang 测试框架。
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - 一组用于增强 Go testing 包并支持常见模式的包。
- [Hamcrest](https://github.com/rdrdr/hamcrest) - 用于声明式 Matcher 对象的流式框架，将其应用于输入值时会产生自描述的结果。
- [httper](https://github.com/gustofarbi/httper) - JetBrains .http 文件的 CLI 运行器，支持脚本、断言、gRPC 和负载测试。
- [httpexpect](https://github.com/gavv/httpexpect) - 简洁、声明式且易用的端到端 HTTP 和 REST API 测试。
- [is](https://github.com/matryer/is) - 专业的轻量级 Go 测试迷你框架。
- [jsonassert](https://github.com/kinbiko/jsonassert) - 用于验证 JSON 负载是否正确序列化的包。
- [keploy](https://github.com/keploy/keploy) - 根据 API 调用自动生成测试用例和数据模拟。
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - 用于在测试中修改私有字段值的简单库。
- [restit](https://github.com/yookoala/restit) - 帮助编写 RESTful API 集成测试的 Go 微框架。
- [schema](https://github.com/jgroeneveld/schema) - 对请求和响应中使用的 JSON 模式进行快速简便的表达式匹配。
- [should](https://github.com/Kairum-Labs/should) - 零依赖的测试库，提供详细的结构体差异和易读的错误消息。
- [stop-and-go](https://github.com/elgohr/stop-and-go) - 用于并发测试的辅助工具。
- [testcase](https://github.com/adamluzsi/testcase) - 符合语言习惯的行为驱动开发测试框架。
- [testcerts](https://github.com/madflojo/testcerts) - 在测试函数中动态生成自签名证书和证书颁发机构。
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - 一个 Go 包，可轻松为自动化集成/冒烟测试创建和清理基于容器的依赖。其简洁易用的 API 让开发者能够以编程方式定义作为测试一部分运行的容器，并在测试完成后清理这些资源。
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - 类 Rails 测试夹具的辅助工具，用于测试数据库应用。
- [Testify](https://github.com/stretchr/testify) - 对标准 Go testing 包的“神圣”扩展。
- [Testo](https://github.com/ozontech/testo) - 基于插件的测试框架，支持测试套件、并行测试、钩子和参数化。灵感来自 Pytest。
- [testsql](https://github.com/zhulongcheng/testsql) - 在测试前根据 SQL 文件生成测试数据，并在完成后清除。
- [testza](https://github.com/MarvinJWendt/testza) - 功能齐全的测试框架，带有美观的彩色输出。
- [tparse](https://github.com/mfridman/tparse) - 汇总 go test 输出的 CLI 工具。便于管道使用。兼容 go test 标志。
- [trial](https://github.com/jgroeneveld/trial) - 快速简便、可扩展的断言，不会引入太多样板代码。
- [Tt](https://github.com/vcaesar/tt) - 简单而多彩的测试工具。
- [wstest](https://github.com/posener/wstest) - 用于对 websocket http.Handler 进行单元测试的 Websocket 客户端。

### 模拟（Mock）

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - 生成自包含模拟对象的工具。
- [fabricator](https://github.com/Goldziher/fabricator) - 在 Go 中生成模拟数据和假数据的类型安全工厂，灵感来自 factory_boy 和 interface-forge。
- [genmock](https://gitlab.com/so_literate/genmock) - Go 模拟系统，带有用于构建接口方法调用的代码生成器。
- [go-localstack](https://github.com/elgohr/go-localstack) - 在 AWS 测试中使用 localstack 的工具。
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - 用于测试数据库交互的模拟 SQL 驱动。
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - 基于单事务的数据库驱动，主要用于测试。
- [gomock](https://github.com/uber-go/mock) - 适用于 Go 编程语言的模拟框架。
- [gomock](https://github.com/vibridi/gomock) - 生成带类型、与框架无关的接口模拟的 CLI 工具，支持泛型。
- [govcr](https://github.com/seborama/govcr) - 适用于 Golang 的 HTTP 模拟：录制并回放 HTTP 交互，用于离线测试。
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - 用于录制和模拟 REST/SOAP API 的 HTTP(S) 代理，具备可扩展的中间件和易用的 CLI。
- [httpmock](https://github.com/jarcoal/httpmock) - 轻松模拟来自外部资源的 HTTP 响应。
- [minimock](https://github.com/gojuno/minimock) - Go 接口的模拟生成器。
- [mockery](https://github.com/vektra/mockery) - 生成 Go 接口的工具。
- [mockfs](https://github.com/balinomad/go-mockfs) - 用于 Go 测试的模拟文件系统，支持错误注入和延迟模拟，基于 `testing/fstest.MapFS` 构建。
- [mockhttp](https://github.com/tv42/mockhttp) - Go http.ResponseWriter 的模拟对象。
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - 为多种用途生成模拟的简单方式。
- [moq](https://github.com/matryer/moq) - 根据任意接口生成结构体的工具。该结构体可在测试代码中用作该接口的模拟。
- [moxie](https://lesiw.io/moxie) - 在嵌入结构体上生成模拟方法。
- [pgxmock](https://github.com/pashagolub/pgxmock) - 实现 [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/) 的模拟库。
- [timex](https://github.com/cabify/timex) - 原生 `time` 包的测试友好替代品。
- [wsmock](https://github.com/sing198/wsmock) - 富有表现力、零样板代码的 WebSocket 模拟服务器，用于测试，支持故障注入和断言。
- [xgo](https://github.com/xhd2015/xgo) - 通用的函数模拟库。

### 模糊测试与增量调试/精简/收缩

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - 随机化测试系统。
- [Tavor](https://github.com/zimmski/tavor) - 通用的模糊测试和增量调试框架。

### Selenium 与浏览器控制工具

- [bonk](https://github.com/joakimcarlsson/bonk) - 快速、隐蔽优先的浏览器自动化库，通过 WebSocket 使用 Chrome DevTools 协议，无外部依赖。
- [cdp](https://github.com/mafredri/cdp) - Chrome 调试协议的类型安全绑定，可用于实现了该协议的浏览器或其他调试目标。
- [chromedp](https://github.com/knq/chromedp) - 驱动/测试 Chrome、Safari、Edge、Android Webview 以及其他支持 Chrome 调试协议的浏览器的一种方式。
- [playwright-go](https://github.com/mxschmitt/playwright-go) - 用单一 API 控制 Chromium、Firefox 和 WebKit 的浏览器自动化库。
- [rod](https://github.com/go-rod/rod) - 让 Web 自动化和抓取变得简单的 Devtools 驱动。
- [selenosis](https://github.com/alcounit/selenosis) - 无状态的 Kubernetes 原生中心，通过自定义资源将 Selenium、Playwright 和 MCP 会话路由到按需创建的浏览器 Pod。

### 故障注入

- [failpoint](https://github.com/pingcap/failpoint) - 适用于 Golang 的 [failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail) 实现。

**[⬆ 返回顶部](#contents)**

## 文本处理

_用于解析和处理文本的库。_

另请参阅[自然语言处理](#natural-language-processing)和[文本分析](#text-analysis)。

### 格式化工具

- [address](https://github.com/bojanz/address) - 处理地址的表示、验证和格式化。
- [align](https://github.com/Guitarbum722/align) - 对齐文本的通用应用。
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - 格式化和解析数值字节大小（10K、2M、3G 等）。
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - 固定宽度文本格式化（基于反射的编码器/解码器）。
- [go-humanize](https://github.com/dustin/go-humanize) - 将时间、数字和内存大小格式化为人类可读形式的格式化工具。
- [gotabulate](https://github.com/bndr/gotabulate) - 用 Go 轻松美化打印表格数据。
- [sq](https://github.com/neilotoole/sq) - 将来自 SQL 数据库或 CSV、Excel 等文档格式的数据转换为 JSON、Excel、CSV、HTML、Markdown、XML 和 YAML 等格式。
- [textwrap](https://github.com/isbm/textwrap) - 在行尾对文本进行换行。Python `textwrap` 模块的实现。

### 标记语言

- [bafi](https://github.com/mmalcek/bafi) - 通用的 JSON、BSON、YAML、XML 转换器，可借助模板转换为任意格式。
- [bbConvert](https://github.com/CalebQ42/bbConvert) - 将 bbCode 转换为 HTML，并允许你添加对自定义 bbCode 标签的支持。
- [blackfriday](https://github.com/russross/blackfriday) - 用 Go 编写的 Markdown 处理器。
- [go-output-format](https://github.com/drewstinnett/go-output-format) - 在命令行应用中将 Go 结构输出为多种格式（YAML/JSON 等）。
- [go-toml](https://github.com/pelletier/go-toml) - TOML 格式的 Go 库，支持查询并提供便捷的命令行工具。
- [goldmark](https://github.com/yuin/goldmark) - 用 Go 编写的 Markdown 解析器。易于扩展，符合标准（CommonMark），结构良好。
- [goq](https://github.com/andrewstuart/goq) - 使用带 jQuery 语法的结构体标签以声明方式反序列化 HTML（使用 GoQuery）。
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - 将 HTML 转换为 Markdown。甚至适用于整个网站，并可通过规则进行扩展。
- [htmlquery](https://github.com/antchfx/htmlquery) - 面向 HTML 的 XPath 查询包，可通过 XPath 表达式从 HTML 文档中提取数据或进行求值。
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - 在 Go 中将 YAML 富渲染为 HTML。
- [htree](https://github.com/bobg/htree) - 遍历、导航、过滤以及以其他方式处理 [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node) 对象树。
- [markdown](https://github.com/nao1215/markdown) - 通过方法链生成 GitHub Flavored Markdown 和 mermaid 图表的 Markdown 构建器。
- [mdsmith](https://github.com/jeduden/mdsmith) - 快速、可自动修复的 Markdown 代码检查与格式化工具。检查风格、可读性、结构和跨文件完整性。
- [mxj](https://github.com/clbanning/mxj) - 将 XML 编码/解码为 JSON 或 map[string]interface{}；使用点号路径和通配符提取值。替代 x2j 和 j2x 包。
- [picoloom](https://github.com/alnah/picoloom) - Markdown 转 PDF 转换器，提供 CLI 和 Go 库 API。
- [toml](https://github.com/BurntSushi/toml) - TOML 配置格式（基于反射的编码器/解码器）。

### 解析器/编码器/解码器

- [allot](https://github.com/sbstjn/allot) - 面向 CLI 工具和机器人的占位符与通配符文本解析。
- [codetree](https://github.com/aerogo/codetree) - 解析缩进式代码（python、pixy、scarlet 等）并返回树结构。
- [commonregex](https://github.com/mingrammer/commonregex) - 适用于 Go 的常用正则表达式集合。
- [did](https://github.com/ockam-network/did) - 用 Go 编写的 DID（去中心化标识符）解析器和字符串化工具。
- [doi](https://github.com/hscells/doi) - 用 Go 编写的文档对象标识符（doi）解析器。
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - 适用于 Go 的 Editorconfig 文件解析器和操作工具。
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - 高性能的有效顶级域名（eTLD）提取模块。
- [go-nmea](https://github.com/adrianmo/go-nmea) - 适用于 Go 语言的 NMEA 解析库。
- [go-querystring](https://github.com/google/go-querystring) - 将结构体编码为 URL 查询参数的 Go 库。
- [go-vcard](https://github.com/emersion/go-vcard) - 解析和格式化 vCard。
- [godump](https://github.com/yassinebenaid/godump) - 轻松美化打印任何 GO 变量，可替代 Go 的 `fmt.Printf("%#v")`。
- [godump (goforj)](https://github.com/goforj/godump) - 以 Laravel/Symfony 风格的转储美化打印 Go 结构体，提供完整的类型信息、彩色 CLI 输出、循环检测和私有字段访问。
- [gofeed](https://github.com/mmcdole/gofeed) - 在 Go 中解析 RSS 和 Atom 订阅源。
- [gographviz](https://github.com/awalterschulze/gographviz) - 解析 Graphviz DOT 语言。
- [gonameparts](https://github.com/polera/gonameparts) - 将人名解析为各个组成部分。
- [ltsv](https://github.com/Wing924/ltsv) - 适用于 Go 的高性能 [LTSV（带标签的制表符分隔值）](http://ltsv.org/)读取器。
- [normalize](https://github.com/avito-tech/normalize) - 净化、规范化并比较模糊文本。
- [parseargs-go](https://github.com/nproc/parseargs-go) - 能够理解引号和反斜杠的字符串参数解析器。
- [prattle](https://github.com/askeladdk/prattle) - 简单高效地扫描和解析 LL(1) 文法。
- [sh](https://github.com/mvdan/sh) - Shell 解析器和格式化器。
- [tokenizer](https://github.com/bzick/tokenizer) - 将任意字符串、切片或无限缓冲区解析为任意词法单元。
- [vdf](https://github.com/andygrunwald/vdf) - 用 Go 编写的 Valve 数据格式（即 vdf）词法分析器和解析器。
- [when](https://github.com/olebedev/when) - 英语和俄语自然语言日期/时间解析器，支持可插拔规则。
- [xj2go](https://github.com/stackerzzq/xj2go) - 将 xml 或 json 转换为 Go 结构体。

### 正则表达式

- [coregex](https://github.com/coregx/coregex) - 生产级正则引擎，采用 Rust regex crate 的架构：多引擎 DFA/NFA、SIMD 预过滤，可直接替换标准库。
- [genex](https://github.com/alixaxel/genex) - 计算正则表达式的匹配数量，并将其展开为所有匹配的字符串。
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - 简单轻量的通配符模式匹配。
- [goregen](https://github.com/zach-klippenstein/goregen) - 根据正则表达式生成随机字符串的库。
- [regroup](https://github.com/oriser/regroup) - 使用结构体标签和自动解析，将正则表达式命名分组匹配到 Go 结构体中。
- [rex](https://github.com/hedhyw/rex) - 正则表达式构建器。

### 内容净化

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTML 净化器。
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - 基于净化的 Go 脏话过滤器。

### 爬虫

- [colly](https://github.com/asciimoo/colly) - 为 Gopher 打造的快速优雅的抓取框架。
- [dataflowkit](https://github.com/slotix/dataflowkit) - 将网站转换为结构化数据的网页抓取框架。
- [doc-scraper](https://github.com/Sriram-PR/doc-scraper) - 将文档网站转换为干净的 Markdown 和 JSONL 的网络爬虫，供 LLM 摄取（RAG、训练数据）。
- [go-recipe](https://github.com/kkyr/go-recipe) - 从网站抓取食谱的包。
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - 解析站点地图的 Go 语言库。
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery 为 Go 语言带来了类似 jQuery 的语法和一系列功能。
- [pagser](https://github.com/foolin/pagser) - Pagser 是一个简单、可扩展、可配置的工具，基于 goquery 和结构体标签将 HTML 页面解析并反序列化为结构体，适用于 Golang 爬虫。
- [Tagify](https://github.com/zoomio/tagify) - 根据给定来源生成一组标签。
- [walker](https://github.com/cyucelen/walker) - 从任意来源无缝获取分页数据。还包含简单且高性能的 API 抓取功能。
- [xurls](https://github.com/mvdan/xurls) - 从文本中提取 URL。

### RSS

- [podcast](https://github.com/eduncan911/podcast) - 用 Golang 编写、兼容 iTunes 和 RSS 2.0 的播客生成器

### 实用工具/杂项

- [ahocorasick](https://github.com/coregx/ahocorasick) - 高性能 Aho-Corasick 多模式字符串匹配，支持 DFA 编译和 SIMD 预过滤，吞吐量高达 7 GB/s（[coregx](https://github.com/coregx) 生态系统的一部分）。
- [go-runewidth](https://github.com/mattn/go-runewidth) - 获取字符或字符串固定宽度的函数。
- [kace](https://github.com/codemodus/kace) - 涵盖常见首字母缩略词的常用大小写转换。
- [lancet](https://github.com/duke-git/lancet) - 全面的、类似 Lodash 的 Go 工具库
- [petrovich](https://github.com/striker2000/petrovich) - Petrovich 是一个将俄语人名变格为指定语法格的库。
- [radix](https://github.com/yourbasic/radix) - 快速的字符串排序算法。
- [TySug](https://github.com/Dynom/TySug) - 根据键盘布局提供替代建议。
- [uniwidth](https://github.com/unilibs/uniwidth) - 高性能 Unicode 字符宽度计算，采用 SWAR 优化和 O(1) 查找表，并支持 ZWJ 表情符号。
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - 使用词嵌入查找语义相似匹配的语义 grep 工具。例如，搜索“death”会找到“dead”“killing”“murder”。

**[⬆ 返回顶部](#contents)**

## 第三方 API

_用于访问第三方 API 的库。_

- [airtable](https://github.com/mehanizm/airtable) - [Airtable API](https://airtable.com/api) 的 Go 客户端库。
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Twitter 1.1 API 的 Go 客户端库。
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - AppStore Connect API 的非官方 Golang SDK。
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html) 的非官方 Go SDK 实现。
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - 适用于 Go 编程语言的官方 AWS SDK。
- [birdeye-go](https://github.com/tigusigalpa/birdeye-go) - Birdeye DeFi API 的 Go 客户端，提供类型化的现货价格、OHLCV K 线、历史数据，以及发送原始请求的后备通道。
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - 以高吞吐量向 [Google BigQuery](https://cloud.google.com/bigquery) 写入数据的高级 Go 库。
- [brewerydb](https://github.com/naegelejd/brewerydb) - 访问 BreweryDB API 的 Go 库。
- [cachet](https://github.com/andygrunwald/cachet) - [Cachet（开源状态页系统）](https://cachethq.io/)的 Go 客户端库。
- [circleci](https://github.com/jszwedko/go-circleci) - 与 CircleCI API 交互的 Go 客户端库。
- [codeship-go](https://github.com/codeship/codeship-go) - 与 Codeship API v2 交互的 Go 客户端库。
- [coinglass-go](https://github.com/tigusigalpa/coinglass-go) - Coinglass API v4 的 Go 客户端，零依赖，支持 WebSocket 流，并为合约、现货、期权、ETF 和指标提供类型化端点。
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - 与 Coinpaprika API 交互的 Go 客户端库。
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - [The Colony](https://thecolony.cc) 的 Go 客户端库——一个用户均为 AI 智能体的公共社交网络。
- [device-check-go](https://github.com/rinchsan/device-check-go) - 与 [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1 交互的 Go 客户端库。
- [discordgo](https://github.com/bwmarrin/discordgo) - Discord 聊天 API 的 Go 绑定。
- [disgo](https://github.com/switchupcb/disgo) - Discord API 的 Go 封装。
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - 非官方的 Dusupay 支付网关 API Go 客户端
- [ethrpc](https://github.com/onrik/ethrpc) - 以太坊 JSON RPC API 的 Go 绑定。
- [facebook](https://github.com/huandu/facebook) - 支持 Facebook Graph API 的 Go 库。
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - 非官方的 Fasapay 支付网关 XML API Golang 客户端。
- [fcm](https://github.com/maddevsio/fcm) - 适用于 Firebase Cloud Messaging 的 Go 库。
- [featureflip-go](https://github.com/canopy-labs/featureflip-go) - [Featureflip](https://featureflip.io/) 功能开关的 Go SDK，支持本地评估和流式更新。
- [gads](https://github.com/emiddleton/gads) - 非官方的 Google Adwords API。
- [gcm](https://github.com/Aorioli/gcm) - 适用于 Google Cloud Messaging 的 Go 库。
- [geo-golang](https://github.com/codingsince1985/geo-golang) - 用于访问 [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro)、[MapQuest](https://developer.mapquest.com/documentation/api/geocoding/)、[Nominatim](https://nominatim.org/release-docs/latest/api/Overview/)、[OpenCage](https://opencagedata.com/api)、[Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx)、[Mapbox](https://www.mapbox.com/developers/api/geocoding/) 和 [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim) 地理编码/反向地理编码 API 的 Go 库。
- [github](https://github.com/google/go-github) - 访问 GitHub REST API v3 的 Go 库。
- [githubql](https://github.com/shurcooL/githubql) - 访问 GitHub GraphQL API v4 的 Go 库。
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - 访问 [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) 服务（Jira、Jira Service Management、Jira Agile、Confluence、Admin Cloud）的 Go 库
- [go-aws-news](https://github.com/circa10a/go-aws-news) - 获取 AWS 最新动态的 Go 应用和库。
- [go-chronos](https://github.com/axelspringer/go-chronos) - 与 [Chronos](https://mesos.github.io/chronos/) 作业调度器交互的 Go 库
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - [Gerrit Code Review](https://www.gerritcodereview.com/) 的 Go 客户端库。
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - HackerNews API 的小型 Go 客户端。
- [go-here](https://github.com/abdullahselek/go-here) - 围绕 HERE 位置服务 API 的 Go 客户端库。
- [go-hibp](https://github.com/wneessen/go-hibp) - “Have I Been Pwned”API 的简单 Go 绑定。
- [go-imgur](https://github.com/koffeinsource/go-imgur) - [imgur](https://imgur.com) 的 Go 客户端库
- [go-jira](https://github.com/andygrunwald/go-jira) - [Atlassian JIRA](https://www.atlassian.com/software/jira) 的 Go 客户端库
- [go-lark](https://github.com/go-lark/lark) - 易于使用的[飞书](https://open.feishu.cn/)和 [Lark](https://open.larksuite.com/) 开放平台非官方 SDK。
- [go-marathon](https://github.com/gambol99/go-marathon) - 与 Mesosphere 的 Marathon PAAS 交互的 Go 库。
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - 访问 [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2) 的 Go 客户端库。
- [go-openai](https://github.com/sashabaranov/go-openai) - 适用于 Go 的 OpenAI ChatGPT、DALL·E、Whisper API 库。
- [go-openproject](https://github.com/manuelbcd/go-openproject) - 与 [OpenProject](https://docs.openproject.org/api/) API 交互的 Go 客户端库。
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - 处理 [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) 的 Go 模块（兼容 Insomnia）。
- [go-redoc](https://github.com/mvrilo/go-redoc) - 使用 [ReDoc](https://redocly.com/) 的 Go 嵌入式 OpenAPI/Swagger 文档 UI。
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - [REST Countries API](https://countrylayer.com/) 的 Go 库。
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - 与 [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm) 交互的 Go 客户端库。
- [go-sophos](https://github.com/esurdam/go-sophos) - [Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) 的 Go 客户端库，零依赖。
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - 包含预编译 [Swagger UI](https://swagger.io/tools/swagger-ui/) 的 Go 库，用于提供 swagger json 服务。
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Telegraph 发布平台的 API 客户端。
- [go-trending](https://github.com/andygrunwald/go-trending) - 访问 Github 上[热门仓库](https://github.com/trending)和[热门开发者](https://github.com/trending/developers)的 Go 库。
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - [Unsplash.com](https://unsplash.com) API 的 Go 客户端库。
- [go-xkcd](https://github.com/nishanths/go-xkcd) - xkcd API 的 Go 客户端。
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Yapla v2.0 API 的 Go 客户端库。
- [goagi](https://github.com/staskobzar/goagi) - 构建 Asterisk PBX agi/fastagi 应用的 Go 库。
- [goami2](https://github.com/staskobzar/goami2) - 适用于 Asterisk PBX 的 AMI v2 库。
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - 在 Google Sheets 之上提供常用简单数据库抽象的 Golang 库。
- [gogtrends](https://github.com/groovili/gogtrends) - 非官方的 Google Trends API。
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - The Movie Database API v3 的 Golang 封装。
- [golyrics](https://github.com/mamal72/golyrics) - Golyrics 是一个从 Wikia 网站获取歌词数据的 Go 库。
- [gomalshare](https://github.com/MonaxGT/gomalshare) - MalShare API（[malshare.com](https://www.malshare.com/)）的 Go 库
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Go MusicBrainz WS2 客户端库。
- [google](https://github.com/google/google-api-go-client) - 为 Go 自动生成的 Google API。
- [google-analytics](https://github.com/chonthu/go-google-analytics) - 便于生成 Google Analytics 报告的简单封装。
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Google Cloud API 的 Go 客户端库。
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/) 的 Go 客户端库。
- [gopensky](https://github.com/navidys/gopensky) - [OpenSKY Network](https://opensky-network.org/) 实时 API（空域 ADS-B 和 S 模式数据）的 Go 客户端实现。
- [gosip](https://github.com/koltyakov/gosip) - SharePoint 客户端库。
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStorm 是一个 Go 库，实现了用 Go 编写与 Storm shell 通信的 Storm spout 和 Bolt 所需的通信协议。
- [hipchat](https://github.com/andybons/hipchat) - 该项目实现了 Hipchat API 的 Golang 客户端库。
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - 通过 XMPP 与 HipChat 通信的 Golang 包。
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - httpSMS API 的 Go 客户端。
- [igdb](https://github.com/Henry-Sarabia/igdb) - [互联网游戏数据库 API](https://api.igdb.com/) 的 Go 客户端。
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - IP2Location.io API（[IP2Location.io](https://www.ip2location.io/)）的 Go 封装。
- [jokeapi-go](https://github.com/icelain/jokeapi) - [JokeAPI](https://sv443.net/jokeapi/v2/) 的 Go 客户端。
- [lark](https://github.com/chyroc/lark) - [飞书](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/) 开放 API Go SDK，支持全部开放 API 和事件回调。
- [lastpass-go](https://github.com/ansd/lastpass-go) - [LastPass](https://www.lastpass.com/) API 的 Go 客户端库。
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - Lemon Squeezy API 的 Go 客户端。
- [libgoffi](https://github.com/clevabit/libgoffi) - 用于原生 [libffi](https://sourceware.org/libffi/) 集成的库适配器工具箱
- [libopenapi](https://github.com/pb33f/libopenapi) - 解析、验证和处理 OpenAPI、Swagger、Overlays 和 Arazzo 规范。
- [manus-ai-go](https://github.com/tigusigalpa/manus-ai-go) - Manus AI API v2 的 Go 客户端，支持任务自动化、文件管理、Webhook 和类型安全的模型。
- [Medium](https://github.com/Medium/medium-sdk-go) - Medium OAuth2 API 的 Golang SDK。
- [megos](https://github.com/andygrunwald/megos) - 访问 [Apache Mesos](https://mesos.apache.org/) 集群的客户端库。
- [minio-go](https://github.com/minio/minio-go) - 用于兼容 Amazon S3 的云存储的 Minio Go 库。
- [mixpanel](https://github.com/dukex/mixpanel) - Mixpanel 是一个从 Go 应用中跟踪事件并向 Mixpanel 发送用户档案更新的库。
- [nansen-go](https://github.com/tigusigalpa/nansen-go) - Nansen AI API 的 Go 客户端，支持聪明钱分析、代币筛选器和画像分析，零依赖。
- [newsapi-go](https://github.com/jellydator/newsapi-go) - [NewsAPI](https://newsapi.org/) 的 Go 客户端。
- [openaigo](https://github.com/otiai10/openaigo) - 适用于 Go 的 OpenAI GPT3/GPT3.5 ChatGPT API 客户端库。
- [patreon-go](https://github.com/mxpv/patreon-go) - Patreon API 的 Go 库。
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - PayPal 支付 API 的封装。
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Playlyfe REST API 的 Go SDK。
- [pushover](https://github.com/gregdel/pushover) - Pushover API 的 Go 封装。
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - [RAWG 电子游戏数据库](https://rawg.io/) API 的 Go 库
- [shopify](https://github.com/rapito/go-shopify) - 向 Shopify API 发送 CRUD 请求的 Go 库。
- [simples3](https://github.com/rhnvrm/simples3) - 用 Go 编写的简单朴素的 AWS S3 库，使用带 V4 签名的 REST。
- [slack](https://github.com/slack-go/slack) - 用 Go 实现的 Slack API。
- [smite](https://github.com/sergiotapia/smitego) - 封装 Smite 游戏 API 访问的 Go 包。
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - SonarQube Web API 的 Go 客户端库和命令行客户端。
- [spec](https://github.com/oaswrap/spec) - 轻量级 OpenAPI 3.x 构建器，支持静态生成以及 chi、echo、gin、fiber、mux 等流行框架。
- [spotify](https://github.com/rapito/go-spotify) - 访问 Spotify WEB API 的 Go 库。
- [steam](https://github.com/sostronk/go-steam) - 与 Steam 游戏服务器交互的 Go 库。
- [stripe](https://github.com/stripe/stripe-go) - Stripe API 的 Go 客户端。
- [swag](https://github.com/zc2638/swag) - 无需注释，用于创建兼容 swagger 2.0 的 API 的简单 Go 封装。支持大多数路由框架，例如内置路由、gin、chi、mux、echo、httprouter、fasthttp 等。
- [textbelt](https://github.com/dietsche/textbelt) - textbelt.com 短信 API 的 Go 客户端。
- [threads-go](https://github.com/tirthpatell/threads-go) - Meta Threads API 的 Go 客户端库，支持 OAuth 2.0、速率限制和类型安全的错误处理。
- [Trello](https://github.com/adlio/trello) - Trello API 的 Go 封装。
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - TripAdvisor API 的 Go 封装。
- [tumblr](https://github.com/mattcunningham/gumblr) - Tumblr v2 API 的 Go 封装。
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Uptime Robot v2 API 的 Go 封装和命令行客户端。
- [vl-go](https://github.com/verifid/vl-go) - 围绕 VerifID 身份验证层 API 的 Go 客户端库。
- [webhooks](https://github.com/go-playground/webhooks) - 适用于 GitHub 和 Bitbucket 的 Webhook 接收器。
- [wit-go](https://github.com/wit-ai/wit-go) - wit.ai HTTP API 的 Go 客户端。
- [ynab](https://github.com/brunomvsouza/ynab.go) - YNAB API 的 Go 封装。
- [zooz](https://github.com/gojuno/go-zooz) - Zooz API 的 Go 客户端。

**[⬆ 返回顶部](#contents)**

## 实用工具

_让生活更轻松的通用实用工具。_

- [abstract](https://github.com/maxbolgarin/abstract) - 用于消除业务逻辑中样板代码的抽象和实用工具。
- [apm](https://github.com/topfreegames/apm) - 带 HTTP API 的 Golang 应用进程管理器。
- [backscanner](https://github.com/icza/backscanner) - 类似 bufio.Scanner 的扫描器，但它从给定位置开始向后，以逆序读取并返回行。
- [bed](https://github.com/itchyny/bed) - 用 Go 编写的类 Vim 二进制编辑器。
- [blank](https://github.com/Henry-Sarabia/blank) - 验证或移除字符串中的空白和空格。
- [bleep](https://github.com/sinhashubham95/bleep) - 在 Go 中针对任意一组操作系统信号执行任意数量的操作。
- [boilr](https://github.com/tmrts/boilr) - 根据样板模板创建项目的极速 CLI 工具。
- [boring](https://github.com/alebeck/boring) - 简单的命令行 SSH 隧道管理器。
- [changie](https://github.com/miniscruff/changie) - 用于准备发布的自动化变更日志工具，提供大量自定义选项。
- [chyle](https://github.com/antham/chyle) - 基于 git 仓库的变更日志生成器，提供多种配置方式。
- [circuit](https://github.com/cep21/circuit) - 高效且功能完备的类 Hystrix 熔断器模式 Go 实现。
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - 用 Go 实现的熔断器。
- [clipboard](https://github.com/golang-design/clipboard) - 📋 用 Go 编写的跨平台剪贴板包。
- [clockwork](https://github.com/jonboulle/clockwork) - 适用于 Golang 的简单伪时钟。
- [cmd](https://github.com/SimonBaeumer/cmd) - 在 osx、windows 和 linux 上执行 shell 命令的库。
- [config-file-validator](https://github.com/Boeing/config-file-validator) - 验证配置文件的跨平台工具。
- [contem](https://github.com/maxbolgarin/contem) - context.Context 的直接替代品，用于优雅关闭 Go 应用。
- [cookie](https://github.com/syntaqx/cookie) - Cookie 结构体解析和辅助包。
- [copy-pasta](https://github.com/jutkko/copy-pasta) - 通用的多工作站剪贴板，使用类 S3 后端进行存储。
- [countries](https://github.com/biter777/countries) - 完整实现了 ISO-3166-1、ISO-4217、ITU-T E.164、Unicode CLDR 和 IANA ccTLD 标准。
- [countries](https://github.com/pioz/countries) - 在 Go 中处理国家相关数据时所需的一切。
- [create-go-app](https://github.com/create-go-app/cli) - 强大的 CLI，只需运行一条命令即可创建一个包含后端（Golang）、前端（JavaScript、TypeScript）和部署自动化（Ansible、Docker）、可用于生产环境的新项目。
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgo 是一个完全用 Go 编写的 TUI 应用，可实时监控和观察加密货币价格！
- [ctop](https://github.com/bcicen/ctop) - 用于查看容器指标的[类 top](https://ctop.sh) 界面（例如 htop）。
- [ctxutil](https://github.com/posener/ctxutil) - 用于上下文（context）的实用函数集合。
- [cvt](https://github.com/shockerli/cvt) - 简单安全地将任意值转换为其他类型。
- [dbt](https://github.com/nikogura/dbt) - 从中央可信仓库运行可自我更新的签名二进制文件的框架。
- [Death](https://github.com/vrecan/death) - 使用信号管理 Go 应用的关闭。
- [debounce](https://github.com/floatdrop/debounce) - 用 Go 编写的零分配防抖器。
- [delve](https://github.com/derekparker/delve) - Go 调试器。
- [dive](https://github.com/wagoodman/dive) - 用于探索 Docker 镜像中每一层的工具。
- [dlog](https://github.com/kirillDanshin/dlog) - 由编译期控制的日志记录器，无需删除调试调用即可让发布版本更小。
- [EaseProbe](https://github.com/megaease/easeprobe) - 简单、独立且轻量的健康/状态检查守护工具，支持 HTTP/TCP/SSH/Shell/Client/... 探针，以及 Slack/Discord/Telegram/SMS... 通知。
- [equalizer](https://github.com/reugn/equalizer) - 适用于 Go 的配额管理器和限流器集合。
- [ergo](https://github.com/cristianoliveira/ergo) - 让管理运行在不同端口上的多个本地服务变得简单。
- [evaluator](https://github.com/nullne/evaluator) - 基于 S 表达式动态求值表达式。简单且易于扩展。
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - 适用于 Go 的容错与弹性模式。
- [filetype](https://github.com/h2non/filetype) - 通过检查魔数签名推断文件类型的小型包。
- [filler](https://github.com/yaronsumel/filler) - 使用“fill”标签填充结构体的小工具。
- [filter](https://github.com/gookit/filter) - 提供 Go 数据的过滤、净化和转换。
- [fzf](https://github.com/junegunn/fzf) - 用 Go 编写的命令行模糊查找工具。
- [generate](https://github.com/go-playground/generate) - 在指定路径或环境变量上递归运行 go generate，并可按正则表达式过滤。
- [gh-image](https://github.com/drogers0/gh-image) - 一个 gh CLI 扩展，可从命令行将图片上传到 GitHub issue、PR 和 README，生成遵循仓库可见性的 user-attachments URL。
- [ghokin](https://github.com/antham/ghokin) - 无外部依赖的并行 gherkin（cucumber、behat 等）格式化工具。
- [git-time-metric](https://github.com/git-time-metric/gtm) - 简单、无缝、轻量的 Git 时间跟踪。
- [git-tools](https://github.com/kazhuravlev/git-tools) - 帮助管理 git 标签的工具。
- [gitbatch](https://github.com/isacikgoz/gitbatch) - 在一个地方管理你的 git 仓库。
- [gitcs](https://github.com/knbr13/gitcs/) - Git 提交可视化工具，一个在本地机器上可视化 Git 提交的 CLI 工具。
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - 为基于 Go 的 Web 框架提供生产就绪的功能。
- [go-astitodo](https://github.com/asticode/go-astitodo) - 解析 GO 代码中的 TODO。
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - 封装 Golang 插件导出符号的 go:generate 工具（仅限 1.8）。
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - 纯 Go 的 bsdiff 和 bspatch 库及 CLI 工具。
- [go-clip](https://github.com/prashantgupta24/go-clip) - 适用于 Mac 的极简剪贴板管理器。
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - 泛型类型化常量集，支持安全的字符串解析，弥补 Go 缺少的枚举类型。
- [go-convert](https://github.com/Eun/go-convert) - go-convert 包让你可以将值转换为另一种类型。
- [go-countries](https://github.com/mikekonan/go-countries) - 轻量级的 ISO-3166 代码查询。
- [go-dry](https://github.com/ungerik/go-dry) - 适用于 Go 的 DRY（不要重复你自己）包。
- [go-events](https://github.com/deatil/go-events) - Go 事件与事件订阅包，类似 wordpress 的钩子函数。
- [go-funk](https://github.com/thoas/go-funk) - 现代 Go 工具库，提供各种辅助函数（map、find、contains、filter、chunk、reverse 等）。
- [go-health](https://github.com/Talento90/go-health) - Health 包简化了为服务添加健康检查的方式。
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - 将结构体编码为请求头字段的 Go 库。
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - 用于删除未使用或旧版本 AWS Lambda 的 CLI。
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock 是一个锁库，实现了无饥饿的读写互斥锁和读写 trylock。
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - 受 ts-pattern 启发的模式匹配库。
- [go-pkg](https://github.com/chenquan/go-pkg) - 一个 Go 工具包。
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - 处理 Problem Details 的 Go 包。
- [go-qr](https://github.com/piglig/go-qr) - 原生、高质量且极简的二维码生成器。
- [go-rate](https://github.com/beefsack/go-rate) - 适用于 Go 的定时限流器。
- [go-safecast](https://github.com/ccoVeille/go-safecast) - 安全的数值类型转换库，可防止整数上溢和下溢（解决 gosec G115 和 CWE-190 问题）。
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - 用 Go 编写的 XML 站点地图生成器。
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - 用于切片、映射、字符串、错误、JSON、HTTP 和容器的类型安全泛型辅助函数，以可独立采用的小型包形式组织。
- [go-trigger](https://github.com/sadlil/go-trigger) - Go 语言全局事件触发器，用 ID 注册事件，即可在项目中的任何位置触发该事件。
- [go-tripper](https://github.com/rajnandan1/go-tripper) - Tripper 是一个 Go 熔断器包，让你可以设置熔断并控制熔断状态。
- [go-type](https://github.com/mikekonan/go-types) - 提供用于存储/验证和传输 ISO-4217、ISO-3166 等类型的 Go 类型库。
- [go-utils](https://github.com/Goldziher/go-utils) - 受 JavaScript 和 Python 启发的简单、高性能 Go 泛型工具（map、filter、reduce 等）。
- [goback](https://github.com/carlescere/goback) - 简单的 Go 指数退避包。
- [goctx](https://github.com/zerosnake0/goctx) - 高性能地获取上下文值。
- [godaemon](https://github.com/VividCortex/godaemon) - 编写守护进程的工具。
- [godoclive](https://github.com/syst3mctl/godoclive) - 通过对 chi、gin 和 net/http 路由器进行静态分析，从 Go HTTP 处理器生成交互式 API 文档。
- [godropbox](https://github.com/dropbox/godropbox) - Dropbox 出品的用于编写 Go 服务/应用的通用库。
- [gofn](https://github.com/tiendc/gofn) - 使用泛型为 Go 1.18+ 编写的高性能工具函数。
- [golarm](https://github.com/msempere/golarm) - 根据系统事件触发告警。
- [golog](https://github.com/mlimaloureiro/golog) - 简单轻量的 CLI 工具，用于跟踪任务耗时。
- [gopencils](https://github.com/bndr/gopencils) - 轻松调用 REST API 的小巧简单的包。
- [goplaceholder](https://github.com/michiwend/goplaceholder) - 生成占位图片的小型 Golang 库。
- [goreadability](https://github.com/philipjkim/goreadability) - 使用 Facebook Open Graph 和 arc90 readability 的网页摘要提取器。
- [goreleaser](https://github.com/goreleaser/goreleaser) - 尽可能快速、轻松地交付 Go 二进制文件。
- [goreporter](https://github.com/wgliang/goreporter) - 执行静态分析、单元测试、代码审查并生成代码质量报告的 Golang 工具。
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - 功能近乎完整的 SeaweedFS 客户端库。
- [gostrutils](https://github.com/ik5/gostrutils) - 字符串处理和转换函数集合。
- [gotenv](https://github.com/subosito/gotenv) - 在 Go 中从 `.env` 或任意 `io.Reader` 加载环境变量。
- [goval](https://github.com/maja42/goval) - 在 Go 中对任意表达式求值。
- [graterm](https://github.com/skovtunenko/graterm) - 提供在 Go 应用中执行有序（顺序/并发）优雅终止（GRAceful TERMination，即关闭）的原语。
- [grofer](https://github.com/pesos/grofer) - 用 Golang 编写的系统和资源监控工具！
- [gubrak](https://github.com/novalagung/gubrak) - 带语法糖的 Golang 工具库。它就像 lodash，只不过面向 Golang。
- [handy](https://github.com/miguelpragier/handy) - 大量实用工具和辅助函数，例如字符串处理器/格式化器和验证器。
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - 简单而强大的 Kubernetes 就绪性检测。
- [hostctl](https://github.com/guumaster/hostctl) - 用简单命令管理 /etc/hosts 的 CLI 工具。
- [htcat](https://github.com/htcat/htcat) - 并行、流水线化的 HTTP GET 工具。
- [hub](https://github.com/github/hub) - 封装 git 命令并附加额外功能，以便从终端与 github 交互。
- [immortal](https://github.com/immortal/immortal) - \*nix 跨平台（与操作系统无关）的进程监管器。
- [jet](https://github.com/NicoNex/jet) - Just Edit Text：使用正则表达式查找和替换文件内容及文件名的快速强大工具。
- [jsend](https://github.com/clevergo/jsend) - 用 Go 编写的 JSend 实现。
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - JSON 日志交互式查看器。
- [jump](https://github.com/gsamokovarov/jump) - Jump 通过学习你的习惯帮助你更快地导航。
- [just](https://github.com/kazhuravlev/just) - 只是一组用于处理泛型数据结构的实用函数。
- [koazee](https://github.com/wesovilabs/koazee) - 受惰性求值和函数式编程启发的库，让处理数组不再麻烦。
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - 网络设备发现与清点工具，支持持久化标记、多网络扫描和 Tailscale 集成。
- [lang](https://github.com/maxbolgarin/lang) - 无需样板代码即可处理变量、切片和映射的泛型单行函数。
- [lets-go](https://github.com/aplescia-chwy/lets-go) - 为云原生 REST API 开发提供常用工具的 Go 模块。还包含 AWS 专用工具。
- [limiters](https://github.com/mennanov/limiters) - 适用于 Golang 分布式应用的限流器，支持可配置的后端和分布式锁。
- [lo](https://github.com/samber/lo) - 基于 Go 1.18+ 泛型、类似 Lodash 的 Go 库（map、filter、contains、find 等）
- [loncha](https://github.com/kazu/loncha) - 高性能的切片工具。
- [lrserver](https://github.com/jaschaephraim/lrserver) - 适用于 Go 的 LiveReload 服务器。
- [mani](https://github.com/alajmo/mani) - 帮助你管理多个仓库的 CLI 工具。
- [mc](https://github.com/minio/mc) - Minio Client 提供用于处理兼容 Amazon S3 的云存储和文件系统的精简工具。
- [mergo](https://github.com/imdario/mergo) - 在 Golang 中合并结构体和映射的辅助工具。适用于设置配置默认值，避免杂乱的 if 语句。
- [mimemagic](https://github.com/zRedShift/mimemagic) - 纯 Go 的超高性能 MIME 嗅探库/工具。
- [mimetype](https://github.com/gabriel-vasile/mimetype) - 基于魔数检测 MIME 类型的包。
- [minify](https://github.com/tdewolff/minify) - 适用于 HTML、CSS、JS、XML、JSON 和 SVG 文件格式的快速压缩工具。
- [minquery](https://github.com/icza/minquery) - 支持高效分页的 MongoDB / mgo.v2 查询（使用游标从上次中断处继续列出文档）。
- [moldova](https://github.com/StabbyCutyou/moldova) - 根据输入模板生成随机数据的工具。
- [mole](https://github.com/davrodpin/mole) - 轻松创建 SSH 隧道的命令行应用。
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - 适用于官方 mongodb/mongo-go-driver 包的 Mongodb 分页，同时支持普通查询和聚合管道。
- [mssqlx](https://github.com/linxGnu/mssqlx) - 数据库客户端库，可代理任意主从、主主结构。以轻量和自动均衡为设计目标。
- [multitick](https://github.com/VividCortex/multitick) - 对齐 ticker 的多路复用器。
- [netbug](https://github.com/e-dard/netbug) - 轻松对服务进行远程性能分析。
- [nfdump](https://github.com/chrispassas/nfdump) - 读取 nfdump netflow 文件。
- [nostromo](https://github.com/pokanop/nostromo) - 用于构建强大别名的 CLI。
- [okrun](https://github.com/xta/okrun) - go run 错误“压路机”。
- [olaf](https://github.com/btnguyen2k/olaf) - 用 Go 实现的 Twitter Snowflake。
- [onecache](https://github.com/adelowo/onecache) - 支持多种后端存储（Redis、Memcached、文件系统等）的缓存库。
- [optional](https://github.com/kazhuravlev/optional) - 可选的结构体字段和变量。
- [panicparse](https://github.com/maruel/panicparse) - 将相似的 goroutine 分组，并为堆栈转储着色。
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - 模式匹配库。
- [peco](https://github.com/peco/peco) - 简单的交互式过滤工具。
- [pgo](https://github.com/arthurkushman/pgo) - 为 PHP 社区提供的便捷函数。
- [pm](https://github.com/VividCortex/pm) - 带 HTTP API 的进程（即 goroutine）管理器。
- [pointer](https://github.com/xorcare/pointer) - pointer 包包含辅助例程，可简化基本类型可选字段的创建。
- [ptr](https://github.com/gotidy/ptr) - 提供函数以简化根据基本类型常量创建指针的包。
- [rate](https://github.com/webriots/rate) - 高性能限流库，支持令牌桶和 AIMD 策略。
- [rclient](https://github.com/zpatrick/rclient) - 可读性好、灵活、易用的 REST API 客户端。
- [release](https://github.com/tomodian/release) - 用于 Keep-a-changelog 格式变更日志的 CLI。
- [relimpact](https://github.com/hashmap-kz/relimpact) - 面向 Go 项目的快速 API 兼容性报告。
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - 通过智能手机控制鼠标和键盘。
- [repeat](https://github.com/ssgreg/repeat) - 多种退避策略的 Go 实现，适用于重试操作和心跳。
- [request](https://github.com/mozillazg/request) - 面向人类的 Go HTTP 请求库™。
- [rerun](https://github.com/ivpusic/rerun) - 在源代码变化时重新编译并重新运行 Go 应用。
- [rest-go](https://github.com/edermanoel94/rest-go) - 提供许多处理 REST API 的实用方法的包。
- [retro](https://github.com/goioc/retro) - 便捷的出错重试库，具有很大的灵活性（退避策略、上限等）。
- [retry](https://github.com/kamilsk/retry) - 最先进的函数式机制，可重复执行操作直到成功。
- [retry](https://github.com/percolate/retry) - 简单但高度可配置的 Go 重试包。
- [retry](https://github.com/thedevsaddam/retry) - 简单易用的 Go 重试机制包。
- [retry](https://github.com/shafreeck/retry) - 一个相当简单的库，确保你的工作得以完成。
- [retry-go](https://github.com/avast/retry-go) - 简单的重试机制库。
- [retry-go](https://github.com/rafaeljesus/retry-go) - 让 Golang 中的重试变得简单容易。
- [robustly](https://github.com/VividCortex/robustly) - 以弹性方式运行函数，捕获 panic 并重新启动。
- [rospo](https://github.com/ferama/rospo) - 用 Golang 实现的简单可靠的 SSH 隧道，内嵌 SSH 服务器。
- [scan](https://github.com/blockloop/scan) - 将 Golang `sql.Rows` 直接扫描到结构体、切片或基本类型中。
- [scan](https://github.com/wroge/scan) - 借助泛型将 SQL 行扫描到任意类型中。
- [scany](https://github.com/georgysavva/scany) - 将数据库中的数据扫描到 Go 结构体等对象中的库。
- [serve](https://github.com/syntaqx/serve) - 随时随地可用的静态 HTTP 服务器。
- [sesh](https://github.com/joshmedeski/sesh) - Sesh 是一个 CLI，借助 zoxide 帮助你快速轻松地创建和管理 tmux 会话。
- [set](https://github.com/nofeaturesonlybugs/set) - 高性能、灵活的结构体映射和宽松类型转换。
- [shutdown](https://github.com/ztrue/shutdown) - 用于处理 `os.Signal` 的应用关闭钩子。
- [silk](https://github.com/chrispassas/silk) - 读取 silk netflow 文件。
- [slice](https://github.com/psampaz/slice) - 用于常见 Go 切片操作的类型安全函数。
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - 基本类型之间的切片转换。
- [slicer](https://github.com/leaanthony/slicer) - 让处理切片更容易。
- [sorty](https://github.com/jfcg/sorty) - 快速的并发/并行排序。
- [sqlex](https://github.com/go-sqlex/sqlex) - jmoiron/sqlx 的现代化直接替代品，修复了 SQL 词法分析器缺陷，支持 IN 子句自动展开、可插拔钩子和统一的 DB/Tx/Conn 接口。
- [sqlx](https://github.com/jmoiron/sqlx) - 在出色的内置 database/sql 包之上提供一组扩展。
- [sqlz](https://github.com/rfberaldo/sqlz) - database/sql 包的扩展，增加了命名查询、结构体扫描和批量操作。
- [sshman](https://github.com/shoobyban/sshman) - 管理多台远程服务器上 authorized_keys 文件的 SSH 管理器。
- [stacktower](https://github.com/stacktower-io/stacktower) - 将依赖图可视化为实体塔结构，灵感来自 XKCD #2347。
- [statiks](https://github.com/janiltonmaciel/statiks) - 快速、零配置的静态 HTTP 文件服务器。
- [Storm](https://github.com/asdine/storm) - 简单而强大的 BoltDB 工具包。
- [structs](https://github.com/PumpkinSeed/structs) - 实现操作结构体的简单函数。
- [throttle](https://github.com/yudppp/throttle) - Throttle 是一个在每个时间段内只执行一次操作的对象。
- [tik](https://github.com/andy2046/tik) - 简单易用的 Go 时间轮包。
- [tome](https://github.com/cyruzin/tome) - Tome 专为对简单 RESTful API 进行分页而设计。
- [toolbox](https://github.com/viant/toolbox) - 切片、映射、多重映射、结构体、函数和数据转换工具。服务路由器、宏求值器、分词器。
- [UNIS](https://github.com/esemplastic/unis) - Go 字符串工具的通用架构（Common Architecture™）。
- [upterm](https://github.com/owenthereal/upterm) - 供开发者通过 Web 安全共享终端/tmux 会话的工具。非常适合远程结对编程、访问位于 NAT/防火墙后的计算机、远程调试等。
- [usql](https://github.com/knq/usql) - usql 是一个通用的 SQL 数据库命令行界面。
- [util](https://github.com/shomali11/util) - 实用工具函数集合。（字符串、并发、各种操作等）。
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - 定期运行命令，并将最新的 STDOUT 或其丰富的差异内容作为 HTTP 端点暴露。
- [wifiqr](https://github.com/reugn/wifiqr) - Wi-Fi 二维码生成器。
- [wuzz](https://github.com/asciimoo/wuzz) - 用于 HTTP 检查的交互式命令行工具。
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdy 提供 Golang 二进制差异与补丁库。
- [xpool](https://github.com/peczenyj/xpool) - 又一个使用泛型的 Golang 类型安全对象池。
- [yogo](https://github.com/antham/yogo) - 从命令行查看 yopmail 邮件。

**[⬆ 返回顶部](#contents)**

## UUID

_用于处理 UUID 的库。_

- [fastuuid](https://github.com/rekby/fastuuid) - 快速生成字符串或字节形式的 UUIDv4。
- [goid](https://github.com/jakehl/goid) - 生成和解析符合 RFC4122 的 V4 UUID。
- [gouid](https://github.com/twharmon/gouid) - 只需一次内存分配即可生成密码学安全的随机字符串 ID。
- [guid](https://github.com/sdrapkin/guid) - 适用于 Go 的快速、密码学安全的 Guid 生成器（比 `uuid` 快约 10 倍）。
- [nanoid](https://github.com/aidarkhanov/nanoid) - 小巧高效的 Go 唯一字符串 ID 生成器。
- [nanoid](https://github.com/sixafter/nanoid) - 高效、密码学安全的生成器，可快速并发地创建 NanoID 和 UUID。
- [sno](https://github.com/muyo/sno) - 紧凑、可排序、快速且内嵌元数据的唯一 ID。
- [ulid](https://github.com/oklog/ulid) - ULID（通用唯一字典序可排序标识符）的 Go 实现。
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - 省心、安全、快速的唯一标识符，附带命令行工具。
- [uuid](https://github.com/agext/uuid) - 生成、编码和解码 UUID v1，可使用快速或密码学级别的随机节点标识符。
- [uuid](https://github.com/gofrs/uuid) - 通用唯一标识符（UUID）的实现。支持 UUID 的创建和解析。是 satori uuid 的积极维护分支。
- [uuid](https://github.com/google/uuid) - 基于 RFC 4122 和 DCE 1.1：身份验证与安全服务的 Go UUID 包。
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - 小巧、无依赖的 Go 库，可按照标准 RFC 4122 格式验证 UUID，并将 UUIDv7() 转换为 UTC 时间戳。
- [wuid](https://github.com/edwingeng/wuid) - 极快的全局唯一数字生成器。
- [xid](https://github.com/rs/xid) - Xid 是一个全局唯一 ID 生成器库，可直接在服务器代码中安全使用。

**[⬆ 返回顶部](#contents)**

## 验证

_用于验证的库。_

- [checkdigit](https://github.com/osamingo/checkdigit) - 提供校验位算法（Luhn、Verhoeff、Damm）和计算器（ISBN、EAN、JAN、UPC 等）。
- [checker](https://github.com/cinar/checker) - 零依赖的输入验证和原地规范化，支持结构体标签、23 种语言区域和 JSON Schema 生成。
- [go-validator](https://github.com/tiendc/go-validator) - 使用泛型的验证库。
- [gody](https://github.com/guiferpa/gody) - :balloon: 轻量级的 Go 结构体验证器。
- [govalid](https://github.com/twharmon/govalid) - 快速的、基于标签的结构体验证。
- [govalidator](https://github.com/asaskevich/govalidator) - 用于字符串、数值、切片和结构体的验证器和净化器。
- [govalidator](https://github.com/thedevsaddam/govalidator) - 使用简单规则验证 Golang 请求数据。深受 Laravel 请求验证的启发。
- [govy](https://github.com/nobl9/govy) - 基于函数式接口的强类型验证规则，由泛型驱动且不使用反射，着重于生成清晰且信息丰富的错误消息。
- [hvalid](https://github.com/lyonnee/hvalid) hvalid 是一个用 Go 语言编写的轻量级验证库。它提供自定义验证器接口和一系列常用验证函数，帮助开发者快速实现数据验证。
- [jio](https://github.com/faceair/jio) - jio 是一个类似 [joi](https://github.com/hapijs/joi) 的 JSON Schema 验证器。
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - 支持验证各种数据类型（结构体、字符串、映射、切片等），验证规则可配置、可扩展，并以常规代码结构而非结构体标签来指定。
- [validate](https://github.com/gookit/validate) - 用于数据验证和过滤的 Go 包。支持验证 Map、Struct、Request（Form、JSON、url.Values、上传的文件）数据等功能。
- [validate](https://github.com/gobuffalo/validate) - 该包提供了为 Go 应用编写验证逻辑的框架。
- [validator](https://github.com/go-playground/validator) - Go 结构体和字段验证，包括跨字段、跨结构体以及对 Map、Slice 和 Array 的深入验证。
- [Validator](https://github.com/go-the-way/validator) - 用 Go 编写的轻量级模型验证器。包含以下验证函数：Min、Max、MinLength、MaxLength、Length、Enum、Regex。
- [valix](https://github.com/marrow16/valix) 用于验证请求的 Go 包
- [vx](https://github.com/sevlyar/vx) - 由小型可组合检查构建的验证库，零依赖，并提供可重建的错误路径。
- [Zog](https://github.com/Oudwins/zog) - 受 [Zod](https://github.com/colinhacks/zod) 启发的模式构建器，用于运行时值的解析和验证。
  **[⬆ 返回顶部](#contents)**

## 版本控制

_用于版本控制的库。_

- [cli](https://gitlab.com/gitlab-org/cli) - 开源的 GitLab 命令行工具，将 GitLab 的酷炫功能带到你的命令行中。
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Go 是一个 Go 库，可在 VCS 提供商上执行操作。
- [ggc](https://github.com/bmf-san/ggc) - 一个 Git CLI 工具，同时提供传统命令行和交互式增量搜索 UI，支持工作流和可配置的键绑定。
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - 用于 Git 操作的本地 MCP 服务器，使用 Ollama 节省 token 并防止机密泄露。
- [git2go](https://github.com/libgit2/git2go) - libgit2 的 Go 绑定。
- [githooks](https://github.com/gabyx/githooks) - 按仓库和共享的 Git 钩子，支持版本控制和自动更新。
- [gitty](https://github.com/Omibranch/gitty) - 单二进制的 Git/GitHub CLI，用一条命令替代 add→commit→push；语法易读，无外部依赖。
- [go-git](https://github.com/go-git/go-git) - 纯 Go 编写的高度可扩展 Git 实现。
- [go-vcs](https://github.com/sourcegraph/go-vcs) - 在 Go 中操作和检查 VCS 仓库。
- [hercules](https://github.com/src-d/hercules) - 从 Git 仓库历史中获得深入洞察。
- [hgo](https://github.com/beyang/hgo) - Hgo 是一组 Go 包，提供对本地 Mercurial 仓库的读取访问。

**[⬆ 返回顶部](#contents)**

## 视频

_用于处理视频的库。_

- [gmf](https://github.com/3d0c/gmf) - FFmpeg av\* 系列库的 Go 绑定。
- [go-astiav](https://github.com/asticode/go-astiav) - GO 中更好的 ffmpeg C 绑定。
- [go-astisub](https://github.com/asticode/go-astisub) - 在 GO 中处理字幕（.srt、.stl、.ttml、.webvtt、.ssa/.ass、teletext、.smi 等）。
- [go-astits](https://github.com/asticode/go-astits) - 在 GO 中原生解析和解复用 MPEG 传输流（.ts）。
- [go-mpd](https://github.com/unki2aut/go-mpd) - MPEG-DASH 清单文件的解析器和生成器库。
- [goav](https://github.com/giorgisio/goav) - 全面的 FFmpeg Go 绑定。
- [gortsplib](https://github.com/aler9/gortsplib) - 纯 Go 的 RTSP 服务器和客户端库。
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - HLS（M3U8）播放列表的解析器和生成器；与规范保持同步更新。
- [libvlc-go](https://github.com/adrg/libvlc-go) - libvlc 2.X/3.X/4.X（VLC 媒体播放器使用的库）的 Go 绑定。
- [manifestor](https://github.com/alanzng/manifestor) - 用于解析、过滤、转换和构建 HLS 与 DASH 清单的零依赖库。
* [mosaic](https://github.com/farshidrezaei/mosaic) - 适用于 Go 的可预测、可用于生产环境的自适应码率（ABR）视频打包（HLS 和 DASH CMAF）。
- [mp4ff](https://github.com/Eyevinn/mp4ff) - 用于处理包含视频、音频、字幕或元数据的 MP4 文件的库和工具。
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - MPEG-2 传输流分析器，可检查 PCR 时序合规性，并转储底层 TS、PSI 和 PES 结构。
- [v4l](https://github.com/korandiz/v4l) - 用 Go 编写的 Linux 视频采集库。

**[⬆ 返回顶部](#contents)**

## Web 框架

_全栈 Web 框架。_

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - 功能齐全的 HTTP 服务器库，提供路由器、中间件栈、WebSocket 中心、文件上传和 OpenAPI 验证。
- [Andurel](https://github.com/mbvlabs/andurel) - 受 Rails 启发的全栈 Go Web 框架，提供脚手架、数据库工具，以及服务端渲染或 Inertia 前端。
- [Atreugo](https://github.com/savsgio/atreugo) - 高性能、可扩展的微型 Web 框架，热路径零内存分配。
- [Barf](https://github.com/opensaucerer/barf) - Basically, A Remarkable Framework（简而言之，一个出色的框架），用于构建基于 JSON 的 Web API。它完全不具侵入性，也不重复造轮子。它的设计让入门简单快捷，同时又足够灵活，能应对更复杂的用例。
- [Beego](https://github.com/beego/beego) - beego 是一个适用于 Go 编程语言的开源高性能 Web 框架。
- [Confetti Framework](https://confetti-framework.github.io/docs/) - Confetti 是一个语法富有表现力且优雅的 Go Web 应用框架。Confetti 结合了 Laravel 的优雅和 Go 的简洁。
- [Don](https://github.com/abemedia/go-don) - 高性能且易于使用的 API 框架。
- [doors](https://github.com/doors-dev/doors) - 服务端驱动的框架，可完全用 Go 构建有状态的响应式 Web 应用。
- [Echo](https://github.com/labstack/echo) - 高性能、极简的 Go Web 框架。
- [Fastschema](https://github.com/fastschema/fastschema) - 灵活的 Go Web 框架和无头 CMS。
- [Fiber](https://github.com/gofiber/fiber) - 受 Express.js 启发、基于 Fasthttp 构建的 Web 框架。
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - 用于可插拔 Web 项目的框架。包含模块概念，并提供依赖注入、Configareas、国际化、模板引擎、graphql、可观测性、安全、事件、路由与反向路由等功能。
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - 采用 DDD、端口与适配器等整洁架构提供电子商务功能，可用于构建灵活的电子商务应用。
- [Fuego](https://github.com/go-fuego/fuego) - 为忙碌的 Go 开发者打造的框架！可从源代码生成 OpenAPI 3 规范的 Web 框架。
- [Gin](https://github.com/gin-gonic/gin) - Gin 是一个用 Go 编写的 Web 框架！它拥有类似 martini 的 API，但性能要好得多，速度快达 40 倍。如果你需要性能和良好的生产力，它是不错的选择。
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Gin 参数自动绑定工具，gin rpc 工具。
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - gRpc 优先的微服务框架。功能包括 Mongo ODM 支持、云资源支持（AWS/Azure/Google），以及专为 gRpc 定制的流式依赖注入。此外还直接支持 grpc-web，使浏览器无需代理即可访问所有 gRpc API。
- [Goa](https://github.com/goadesign/goa) - Goa 为在 Go 中开发远程 API 和微服务提供了一套整体方案。
- [GoFr](https://github.com/gofr-dev/gofr) - Gofr 是一个遵循固定约定的微服务开发框架。
- [GoFrame](https://github.com/gogf/gf) - GoFrame 是一个模块化、功能强大、高性能的企业级 Golang 应用开发框架。
- [Gone](https://github.com/gone-io/gone) - 受 Spring 启发的轻量级依赖注入和 Web 框架。
- [goravel](https://github.com/goravel/goravel) - 受 Laravel 启发的 Web 框架，内置 ORM、身份验证、队列、任务调度等功能。
- [Goshtoso](https://github.com/araihu/goshtoso) - 面向 Go 应用的服务端渲染 UI 组件，使用 templ、Tailwind CSS、HTMX 和 Alpine.js 构建。
- [Goyave](https://github.com/go-goyave/goyave) - 功能完备的 REST API 框架，旨在实现整洁代码和快速开发，内置强大的功能。
- [Hertz](https://github.com/cloudwego/hertz) - 高性能、强扩展性的 Go HTTP 框架，帮助开发者构建微服务。
- [hiboot](https://github.com/hidevopsio/hiboot) - hiboot 是一个高性能 Web 应用框架，支持自动配置和依赖注入。
- [httpsuite](https://github.com/rluders/httpsuite) - 适用于 Go 的 HTTP 请求解析和 RFC 9457 问题响应，核心仅依赖标准库，并可选验证。
- [Huma](https://github.com/danielgtaylor/huma/) - 用于现代 REST/GraphQL API 的框架，内置 OpenAPI 3、自动生成的文档和 CLI。
- [iWF](https://github.com/indeedeng/iwf) - iWF 是一个用于开发长时间运行业务流程的一体化平台。它通过简洁、简单且用户友好的接口，为使用数据库、ElasticSearch、消息队列、持久定时器等提供了便捷的抽象。
- [Lit](https://github.com/jvcoutinho/lit) - 高性能的声明式 Golang Web 框架，追求简单和良好的开发体验。
- [Microservice](https://github.com/claygod/microservice) - 用 Golang 编写的微服务创建框架。
- [NotNet](https://github.com/nottechdm/notnet) - 轻量级 Go 框架，用于构建快速且符合人体工程学的 RESTful API，支持中间件和灵活路由。
- [patron](https://github.com/beatlabs/patron) - Patron 是一个遵循云最佳实践、注重生产力的微服务框架。
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmux 是一个强大的 Go Web 框架，使用正则表达式匹配和处理 HTTP 请求。它提供 CORS 处理、结构化日志、URL 参数提取、中间件和并发限制等功能。
- [Revel](https://github.com/revel/revel) - 适用于 Go 语言的高生产力 Web 框架。
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - 一个引导库，可使用 Gin 和 gRPC 快速轻松地构建企业级 Go 微服务。
- [Ronykit](https://github.com/clubpay/ronykit) - 采用可插拔架构、性能非常出色的 Web 框架。
- [rux](https://github.com/gookit/rux) - 用于构建 Golang HTTP 应用的简单快速的 Web 框架。
- [shadcn-templ](https://github.com/axadrn/shadcn-templ) - 非官方的 shadcn/ui Go 与 templ 移植版：提供无障碍 UI 组件，附带 CLI 和组件注册表。
- [togo](https://github.com/togo-framework/togo) - 全栈框架，将你的 Go 后端和 React 前端打包为单个二进制文件发布；提供媲美 Laravel artisan 的 CLI。
- [uAdmin](https://github.com/uadmin/uadmin) - 受 Django 启发、功能齐全的 Golang Web 框架。
- [WebGo](https://github.com/naughtygopher/webgo) - 用于构建 Web 应用的微框架，支持处理器链、中间件和上下文注入。使用符合标准库的 HTTP 处理器（即 `http.HandlerFunc`）。
- [Xun](https://github.com/yaitoo/xun) - 基于 Go 内置 html/template 和 net/http 包路由器构建的 Web 框架。它的设计轻量、快速且易于使用，同时提供简单直观的 API，用于构建具备中间件、路由和模板渲染等高级功能的 Web 应用。
- [Yokai](https://github.com/ankorstore/yokai) - 面向后端应用的简单、模块化且可观测的 Go 框架。

**[⬆ 返回顶部](#contents)**

### 中间件

#### 实际中间件

- [client-timing](https://github.com/posener/client-timing) - 用于 Server-Timing 头的 HTTP 客户端。
- [CORS](https://github.com/rs/cors) - 轻松为你的 API 添加 CORS 能力。
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - 适用于 Echo 框架的中间件，提供日志和指标功能。
- [formjson](https://github.com/rs/formjson) - 将 JSON 输入透明地当作标准表单 POST 处理。
- [go-fault](https://github.com/github/go-fault) - 适用于 Go 的故障注入中间件。
- [Limiter](https://github.com/ulule/limiter) - 极其简单的 Go 限流中间件。
- [ln-paywall](https://github.com/philippgille/ln-paywall) - 借助闪电网络（比特币）按请求对 API 进行收费的 Go 中间件。
- [mid](https://github.com/bobg/mid) - 各种 HTTP 中间件功能：以符合语言习惯的方式从处理器返回错误；使用 JSON 数据接收/响应；请求追踪等。
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - 适用于 Gin 框架的中间件，提供日志、指标、身份验证、追踪等功能。
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - 适用于 gRPC 的中间件，提供日志、指标、身份验证、追踪等功能。
- [Tollbooth](https://github.com/didip/tollbooth) - 对 HTTP 请求进行限流的处理器。
- [XFF](https://github.com/sebest/xff) - 处理 `X-Forwarded-For` 头及其他相关头。

#### 用于创建 HTTP 中间件的库

- [alice](https://github.com/justinas/alice) - 轻松实现 Go 中间件链。
- [catena](https://github.com/codemodus/catena) - http.Handler 包装器串联（API 与“chain”相同）。
- [chain](https://github.com/codemodus/chain) - 带作用域数据的处理器包装链（基于 net/context 的“中间件”）。
- [gores](https://github.com/alioygur/gores) - 处理 HTML、JSON、XML 等响应的 Go 包。适用于 RESTful API。
- [interpose](https://github.com/carbocation/interpose) - 适用于 Golang 的极简 net/http 中间件。
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - 为 `http.Client` 添加拦截器，以便对请求/响应进行转储/整形/追踪等。
- [muxchain](https://github.com/stephens2424/muxchain) - 适用于 net/http 的轻量级中间件。
- [negroni](https://github.com/urfave/negroni) - 符合语言习惯的 Golang HTTP 中间件。
- [render](https://github.com/unrolled/render) - 轻松渲染 JSON、XML 和 HTML 模板响应的 Go 包。
- [renderer](https://github.com/thedevsaddam/renderer) - 简单、轻量且更快的 Go 响应（JSON、JSONP、XML、YAML、HTML、文件）渲染包。
- [stats](https://github.com/thoas/stats) - 存储 Web 应用各种信息的 Go 中间件。

**[⬆ 返回顶部](#contents)**

### 路由器

- [alien](https://github.com/gernest/alien) - 来自外太空的轻量快速 HTTP 路由器。
- [bellt](https://github.com/GuilhermeCaruso/bellt) - 简单的 Go HTTP 路由器。
- [Bone](https://github.com/go-zoo/bone) - 闪电般快速的 HTTP 多路复用器。
- [Bxog](https://github.com/claygod/Bxog) - 简单快速的 Go HTTP 路由器。它能处理不同复杂度、长度和嵌套层级的路由，还能根据接收到的参数创建 URL。
- [chi](https://github.com/go-chi/chi) - 基于 net/context 构建的小巧、快速且富有表现力的 HTTP 路由器。
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - 从 `httprouter` 派生的高性能路由器。首个适用于 `fasthttp` 的路由器。
- [FastRouter](https://github.com/razonyang/fastrouter) - 用 Go 编写的快速灵活的 HTTP 路由器。
- [Fox](https://github.com/fox-toolkit/fox) - 用于构建反向代理和 API 网关的高性能 HTTP 路由器，对运行时修改路由提供一流支持。
- [fursy](https://github.com/coregx/fursy) - HTTP 路由器，支持类型安全的泛型处理器、根据代码自动生成 OpenAPI 3.1 以及 RFC 9457 错误响应。
- [goblin](https://github.com/bmf-san/goblin) - 基于字典树（trie）的 Golang HTTP 路由器。
- [gocraft/web](https://github.com/gocraft/web) - 用 Go 编写的多路复用器和中间件包。
- [Goji](https://github.com/goji/goji) - Goji 是一个极简灵活的 HTTP 请求多路复用器，支持 `net/context`。
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Router 是一个适用于 Go 编程语言的轻量而强大的 HTTP 路由器。
- [goroute](https://github.com/goroute/route) - 简单而强大的 HTTP 请求多路复用器。
- [GoRouter](https://github.com/vardius/gorouter) - GoRouter 是一个服务器/API 微框架、HTTP 请求路由器和多路复用器（mux），提供支持 `net/context` 中间件的请求路由器。
- [gowww/router](https://github.com/gowww/router) - 闪电般快速的 HTTP 路由器，完全兼容 net/http.Handler 接口。
- [httprouter](https://github.com/julienschmidt/httprouter) - 高性能路由器。将其与标准 HTTP 处理器结合使用，即可构成性能极高的 Web 框架。
- [httptreemux](https://github.com/dimfeld/httptreemux) - 适用于 Go 的高速、灵活的基于树的 HTTP 路由器。灵感来自 httprouter。
- [lars](https://github.com/go-playground/lars) - 一个轻量、快速、可扩展的零分配 Go HTTP 路由器，用于创建可定制的框架。
- [mux](https://github.com/gorilla/mux) - 强大的 Golang URL 路由器和分发器。
- [nchi](https://github.com/muir/nchi) - 基于 httprouter 构建的类 chi 路由器，提供基于依赖注入的中间件包装器
- [ngamux](https://github.com/ngamux/ngamux) - 简单的 Go HTTP 路由器。
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - 极其快速的 Go（golang）HTTP 路由器，支持正则表达式路由匹配。全面支持构建 RESTful API。
- [pure](https://github.com/go-playground/pure) - 一个坚持使用标准库“net/http”实现的轻量级 HTTP 路由器。
- [Siesta](https://github.com/VividCortex/siesta) - 用于编写中间件和处理器的可组合框架。
- [vestigo](https://github.com/husobee/vestigo) - 适用于 Go Web 应用的高性能、独立且符合 HTTP 规范的 URL 路由器。
- [violetear](https://github.com/nbari/violetear) - Go HTTP 路由器。
- [xmux](https://github.com/rs/xmux) - 基于 `httprouter` 的高性能多路复用器，支持 `net/context`。
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - 简单快速的 Go HTTP 路由器。

**[⬆ 返回顶部](#contents)**

## WebAssembly

- [dom](https://github.com/dennwc/dom) - DOM 库。
- [Extism Go SDK](https://github.com/extism/go-sdk) - 通用的跨语言 WebAssembly 框架，用于构建插件系统和多语言应用。
- [go-canvas](https://github.com/markfarnan/go-canvas) - 使用 HTML5 Canvas 的库，所有绘图都在 Go 代码中完成。
- [tinygo](https://github.com/tinygo-org/tinygo) - 面向小型环境的 Go 编译器。适用于微控制器、WebAssembly 和命令行工具。基于 LLVM。
- [vert](https://github.com/norunners/vert) - Go 与 JS 值之间的互操作。
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - 在浏览器中运行 Go WASM 测试。
- [wasmtime-go](https://github.com/bytecodealliance/wasmtime-go) - Wasmtime WebAssembly 运行时的 Go 绑定（支持 WASI、JIT/AOT，可安全快速地嵌入）。
- [webapi](https://github.com/gowebapi/webapi) - 根据 WebIDL 生成的 DOM 和 HTML 绑定。

**[⬆ 返回顶部](#contents)**

## Webhook 服务器

- [HookRun](https://github.com/bluvenr/hookrun) - 轻量级 Webhook 动作引擎（约 3MB 的单个二进制文件，零依赖），根据 YAML 规则执行命令和脚本，支持令牌/HMAC/IP 身份验证和热重载。
- [webhook](https://github.com/adnanh/webhook) - 允许用户创建在服务器上执行命令的 HTTP 端点（钩子）的工具。
- [webhooked](https://github.com/42Atomys/webhooked) - 超强版 Webhook 接收器：处理、保护、格式化和存储 Webhook 负载从未如此简单。
- [WebhookX](https://github.com/webhookx-io/webhookx) - 用于消息接收、处理和可靠投递的 Webhook 网关。

**[⬆ 返回顶部](#contents)**

## Windows

- [d3d9](https://github.com/gonutz/d3d9) - Direct3D9 的 Go 绑定。
- [go-ole](https://github.com/go-ole/go-ole) - 适用于 Golang 的 Win32 OLE 实现。
- [gosddl](https://github.com/MonaxGT/gosddl) - 将 SDDL 字符串转换为用户友好 JSON 的转换器。SDDL 由四部分组成：所有者、主组、DACL、SACL。
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - 使用 go-ole 的 Windows Update Agent API Golang 绑定。

**[⬆ 返回顶部](#contents)**

## 工作流框架

_用于创建工作流的库。_

- [Cadence-client](https://github.com/uber-go/cadence-client) - 用于编写在 Uber 开发的 Cadence 编排引擎上运行的工作流和活动的框架。
- [Dagu](https://github.com/dagu-go/dagu) - 无代码工作流执行器。它执行以简单 YAML 格式定义的 DAG。
- [durable-go](https://github.com/agenticenv/durable-go) - 面向单进程 Go 应用和 AI 智能体的持久化执行引擎，零依赖。
- [Flowbaker](https://github.com/flowbaker/flowbaker) - 自托管执行引擎，用于构建、连接和自动化无代码工作流。
- [go-dag](https://github.com/rhosocial/go-dag) - 用 Go 开发的框架，管理由有向无环图描述的工作流的执行。
- [go-taskflow](https://github.com/noneback/go-taskflow) - 类似 taskflow 的通用任务并行编程框架，集成了可视化工具和性能分析器。
- [GopherFlow](https://github.com/RealZimboGuy/gopherflow) - 持久化工作流引擎，内置 Web 控制台，以 Postgres、MySQL 或 SQLite 为后端。
- [workflow](https://github.com/luno/workflow) - 与技术栈无关的事件驱动工作流框架。

**[⬆ 返回顶部](#contents)**

## XML

_用于处理 XML 的库和工具。_

- [XML-Comp](https://github.com/xml-comp/xml-comp) - 简单的命令行 XML 比较工具，可生成文件夹、文件和标签的差异。
- [xml2map](https://github.com/sbabiv/xml2map) - 用 Golang 编写的 XML 转 MAP 转换器。
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlquery 是一个用于 XML 查询的 Golang XPath 包。
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - 基于 libxml2 xmlwriter 模块的过程式 XML 生成 API。
- [xpath](https://github.com/antchfx/xpath) - 适用于 Go 的 XPath 包。
- [zek](https://github.com/miku/zek) - 根据 XML 生成 Go 结构体。

## 零信任

_用于实现零信任架构的库和工具。_

- [Cosign](https://github.com/sigstore/cosign) - 在 OCI 镜像仓库中对容器进行签名、验证和存储。
- [in-toto](https://github.com/in-toto/in-toto-golang) - in-toto（提供保护软件供应链完整性的框架）Python 参考实现的 Go 版本。
- [OpenZiti](https://github.com/openziti/ziti) - 完整的开源零信任覆盖网络。包括面向 [golang](https://github.com/openziti/sdk-golang) 等多种语言的众多 SDK，让你可以将零信任原则直接嵌入到应用中。[OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) 提供了大量可供借鉴的示例，其中包括一个[零信任 SSH 客户端 - zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - 将 Spiffe JWT 身份验证与 Hashicorp Vault 结合，实现无密钥身份验证。
- [Spire](https://github.com/spiffe/spire) - SPIRE（SPIFFE 运行时环境）是一套 API 工具链，用于在各种托管平台上的软件系统之间建立信任。

## 代码分析

_源代码分析工具，也称为静态应用安全测试（SAST）工具。_

- [apicompat](https://github.com/bradleyfalzon/apicompat) - 检查 Go 项目近期的变更中是否存在向后不兼容的改动。
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - 适用于 Go 及其他语言的静态代码分析器：提供复杂度、耦合度、内聚度和可维护性指标，并输出 HTML、JSON、Markdown 和 SARIF 报告。
- [asty](https://github.com/asty-org/asty) - 将 Golang AST 转换为 JSON，以及将 JSON 转换为 AST。
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - blanket 是一个帮助你找出 Go 包中没有直接单元测试的函数的工具。
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - 找出你的 Go 语言直接 GitHub 依赖中哪些容易受到 ChainJacking 攻击。
- [Chronos](https://github.com/amit-davidson/Chronos) - 静态检测竞态条件
- [deadmono](https://github.com/arxeiss/deadmono) - deadcode 的封装，用于检测 Go 单体仓库中的死代码。
- [dupl](https://github.com/mibk/dupl) - 代码克隆检测工具。
- [errcheck](https://github.com/kisielk/errcheck) - Errcheck 是一个检查 Go 程序中未检查错误的程序。
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - Fatcontext 检测循环或函数字面量中的嵌套上下文。
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyle 是一个类似 java checkstyle 的风格检查工具。该工具受 java checkstyle 和 golint 启发，风格规则参考了 Go Code Review Comments 中的一些要点。
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarch 用于验证 Go 项目中的整洁架构规则，例如依赖规则以及包之间的交互。
- [go-critic](https://github.com/go-critic/go-critic) - 源代码检查工具，提供其他 linter 目前尚未实现的检查。
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - 找出 Go 项目中过时依赖的简便方法。
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - 基于 Web 的 Golang AST 可视化工具。
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - 自动修复（添加、删除）Go 导入的工具。
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - iFood API 的 SDK。
- [golangci-lint](https://github.com/golangci/golangci-lint) – 快速的 Go 代码检查工具运行器。它并行运行各个 linter、使用缓存、支持 `yaml` 配置、与所有主流 IDE 集成，并内置数十个 linter。
- [golines](https://github.com/segmentio/golines) - 自动缩短 Go 代码中长行的格式化工具。
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - 内置 HTTP 链接验证的 Markdown 检查工具，单个二进制文件，无需 Node.js。
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - 生成文本形式 PlantUML 类图的库和 CLI，图中包含结构体和接口的信息及其之间的关系。
- [goreturns](https://github.com/sqs/goreturns) - 添加零值 return 语句以匹配函数的返回类型。
- [gostatus](https://github.com/shurcooL/gostatus) - 命令行工具，显示包含 Go 包的仓库的状态。
- [lint](https://github.com/surullabs/lint) - 在 go test 中运行代码检查工具。
- [php-parser](https://github.com/z7zmey/php-parser) - 用 Go 编写的 PHP 解析器。
- [revive](https://github.com/mgechev/revive) – `golint` 的直接替代品，速度快约 6 倍，更严格、可配置、可扩展且美观。
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheck 是加强版的 `go vet`，应用了大量你可能在 C# 的 ReSharper 等工具中习惯使用的静态分析检查。
- [structalign](https://github.com/peczenyj/structalign) - 展示如何重新排列结构体字段以减少内存占用，输出差异而不是直接改写文件。
- [stto](https://github.com/mainak55512/stto) - 用纯 Go 编写的轻量级超快代码行数统计工具。
- [testifylint](https://github.com/Antonboom/testifylint) – 检查 [github.com/stretchr/testify](https://github.com/stretchr/testify) 用法的 linter。
- [tickgit](https://github.com/augmentable-dev/tickgit) - 用于找出代码注释中的 TODO（任何语言）并通过 `git blame` 识别作者的 CLI 和 Go 包。
- [todocheck](https://github.com/preslavmihaylov/todocheck) - 静态代码分析器，将代码中的 TODO 注释与问题跟踪器中的 issue 关联起来。
- [unconvert](https://github.com/mdempsky/unconvert) - 移除 Go 源代码中不必要的类型转换。
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - 检测可改用 Go 标准库中变量/常量之处的 linter。
- [vacuum](https://github.com/daveshanley/vacuum) - 超级快速、轻量级的 OpenAPI 检查和质量检测工具。
- [validate](https://github.com/mccoyst/validate) - 通过标签自动验证结构体字段。
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - 检查来自外部包的错误是否已被包装的 linter。

**[⬆ 返回顶部](#contents)**

## 编辑器插件

_文本编辑器和 IDE 插件。_

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - 该插件为 Vim/Neovim 添加 [gopls](https://github.com/golang/tools/blob/master/gopls/README.md) 功能。
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - 在输出中显示定义并生成 go doc 的 Visual Studio Code 扩展。
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - 适用于 JetBrains IDE 的 Go 插件。
- [go-mode](https://github.com/dominikh/go-mode.el) - 适用于 GNU/Emacs 的 Go 模式。
- [gocode](https://github.com/nsf/gocode) - Go 编程语言的自动补全守护进程。
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - 导入语句的格式化工具。
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - 该扩展为 VS Code 添加 Go 语言的基准测试性能分析支持。
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - 面向文本编辑器 SublimeText 3 的 Golang 插件集合，提供代码补全等类 IDE 功能。
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - 根据函数或方法签名生成 Go 测试的 Vim 插件。
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - 保存时高亮语法错误的 Vim 插件。
- [vim-go](https://github.com/fatih/vim-go) - 适用于 Vim 的 Go 开发插件。
- [vscode-go](https://github.com/golang/vscode-go) - 为 Visual Studio Code（VS Code）提供 Go 语言支持的扩展。
- [Watch](https://github.com/eaburns/Watch) - 在文件变化时于 acme 窗口中运行命令。

**[⬆ 返回顶部](#contents)**

## Go Generate 工具

- [envdoc](https://github.com/g4s8/envdoc) - 根据 Go 源文件为环境变量生成文档。
- [generic](https://github.com/usk81/generic) - 适用于 Go 的灵活数据类型。
- [gocontracts](https://github.com/Parquery/gocontracts) - 通过让代码与文档保持同步，为 Go 带来契约式设计。
- [godal](https://github.com/mafulong/godal) - 通过指定 SQL DDL 文件生成对应的 Golang ORM 模型，可供 gorm 使用。
- [gonerics](https://github.com/bouk/gonerics) - Go 中符合语言习惯的泛型。
- [gotests](https://github.com/cweill/gotests) - 根据源代码生成 Go 测试。
- [gounit](https://github.com/hexdigest/gounit) - 使用你自己的模板生成 Go 测试。
- [hasgo](https://github.com/DylanMeeus/hasgo) - 为切片生成受 Haskell 启发的函数。
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - 根据 OpenAPI 规范的 x-constants 扩展生成带类型的 Go 常量。
- [options-gen](https://github.com/kazhuravlev/options-gen) - 实现 Dave Cheney 在文章《Functional options for friendly APIs》中所描述的函数式选项。
- [re2dfa](https://gitlab.com/opennota/re2dfa) - 将正则表达式转换为有限状态机，并输出 Go 源代码。
- [sqlgen](https://github.com/anqiansong/sqlgen) - 根据 SQL 文件或 DSN 生成 gorm、xorm、sqlx、bun、sql 代码。
- [TOML-to-Go](https://xuri.me/toml-to-go) - 在浏览器中即时将 TOML 转换为 Go 类型。
- [xgen](https://github.com/xuri/xgen) - XSD（XML 模式定义）解析器和 Go/C/Java/Rust/TypeScript 代码生成器。

**[⬆ 返回顶部](#contents)**

## Go 工具

- [decouple](https://github.com/bobg/decouple) - 找出可用接口类型泛化的“过度指定”函数参数。
- [docs](https://github.com/go-oas/docs) - 为 GO 项目自动生成 RESTful API 文档——遵循 Open API 规范标准。
- [go-callvis](https://github.com/TrueFurby/go-callvis) - 使用 dot 格式可视化 Go 程序的调用图。
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - 分析并可视化已编译 Golang 二进制文件中各依赖的体积，帮助了解它们对最终构建产物的影响。
- [go-swagger](https://github.com/go-swagger/go-swagger) - 适用于 Go 的 Swagger 2.0 实现。Swagger 是一种简单而强大的 RESTful API 表示方式。
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - 创建和测试 Go 模板的交互式环境。
- [godbg](https://github.com/tylerwince/godbg) - Rust `dbg!` 宏的实现，便于在开发过程中快速轻松地调试。
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - 在整个代码库中找出实现给定 Go 接口的所有结构体。
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - 执行并缓存 go.mod 文件中包含的二进制工具的 Go 工具。
- [gotemplate.io](https://gotemplate.io/) - 实时预览 `text/template` 模板的在线工具。
- [gotestdox](https://github.com/bitfield/gotestdox) - 以易读的句子形式显示 Go 测试结果。
- [gothanks](https://github.com/psampaz/gothanks) - GoThanks 自动为你的 go.mod 中的 github 依赖点星，以此向其维护者表达一份爱意。
- [gotutor](https://github.com/ahmedakef/gotutor) - 在线 Go 调试器和可视化工具。
- [govisual](https://github.com/doganarif/govisual) - 零配置、纯 Go 的 HTTP 请求可视化与调试工具，用于本地 Go Web 开发。
- [igo](https://github.com/rocketlaunchr/igo) - igo 到 go 的转译器（为 Go 语言带来新的语言特性！）
- [lensm](https://github.com/loov/lensm) - Go 汇编和源代码查看器。
- [modver](https://github.com/bobg/modver) - 比较 Go 模块的两个版本，根据 [semver](https://semver.org/) 规则检查所需的版本号变更（主版本、次版本或补丁级别）。
- [MoniGO](https://github.com/iyashjayesh/monigo) - 面向 Go 应用的性能监控库。它可实时洞察应用性能！🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - 借助 GitHub 的 OctoLinker 浏览器扩展高效浏览 Go 文件。
- [richgo](https://github.com/kyoh86/richgo) - 用文本装饰丰富 `go test` 的输出。
- [roumon](https://github.com/becheran/roumon) - 通过命令行界面监控所有活动 goroutine 的当前状态。
- [rts](https://github.com/galeone/rts) - RTS：response to struct（响应转结构体）。根据服务器响应生成 Go 结构体。
- [textra](https://github.com/ravsii/textra) - 提取 Go 结构体的字段名、类型和标签，以便过滤和导出。
- [typex](https://github.com/dtgorski/typex) - 检查 Go 类型及其传递依赖，也可将结果导出为 TypeScript 值对象（或类型）声明。

**[⬆ 返回顶部](#contents)**

## 软件包

_用 Go 编写的软件。_

**[⬆ 返回顶部](#contents)**

### DevOps 工具

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviate 是一个使用可配置分隔符将长字符串缩短的工具，例如可用于将分支名嵌入部署栈 ID 中。
- [alaz](https://github.com/ddosify/alaz) - 轻松、低开销、基于 eBPF 的 Kubernetes 监控。
- [aptly](https://github.com/aptly-dev/aptly) - aptly 是一个 Debian 软件仓库管理工具。
- [aurora](https://github.com/xuri/aurora) - 跨平台、基于 Web 的 Beanstalkd 队列服务器控制台。
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - 直接在终端中诊断 AWS 成本、检测闲置资源并优化云支出 🩺 ☁️。
- [awsenv](https://github.com/soniah/awsenv) - 为指定配置文件加载 Amazon（AWS）环境变量的小型二进制程序。
- [Balerter](https://github.com/balerter/balerter) - 自托管、基于脚本的告警管理器。
- [Blast](https://github.com/dave/blast) - 用于 API 负载测试和批处理作业的简单工具。
- [bombardier](https://github.com/codesenberg/bombardier) - 快速的跨平台 HTTP 基准测试工具。
- [cassowary](https://github.com/rogerwelin/cassowary) - 用 Go 编写的现代跨平台 HTTP 负载测试工具。
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - 帮助应用容忍随机实例故障的弹性工具。
- [colima](https://github.com/abiosoft/colima) - 只需极少配置即可在 macOS（及 Linux）上使用的容器运行时。
- [Ddosify](https://github.com/ddosify/ddosify) - 用 Golang 编写的高性能负载测试工具。
- [decompose](https://github.com/s0rg/decompose) - 生成和处理 Docker 容器连接图的工具。
- [Den](https://github.com/us/den) - 面向 AI 智能体的自托管沙箱运行时。开源的 E2B 替代品。
- [DepCharge](https://github.com/centerorbit/depcharge) - 帮助在大型项目的众多依赖之间编排命令的执行。
- [dish](https://github.com/thevxn/dish) - 轻量级、可远程配置的监控服务。
- [Docker](https://www.docker.com/) - 面向开发者和系统管理员的分布式应用开放平台。
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - 使用 MinGW 工具链为 Windows 构建 Go 二进制文件的 Docker 镜像。
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - 将 Docker 卷备份到本地，或备份到任何兼容 S3、WebDAV、Azure Blob Storage、Dropbox 或 SSH 的存储。
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - 通过各种输入渠道生成有效 Dockerfile 的 Go 库和可执行程序。
- [docklite](https://github.com/benzjeremy/docklite) - 轻量级的 Portainer 替代品，用于 Docker 容器管理，提供基于 SSE 的实时指标。
- [dogo](https://github.com/liudng/dogo) - 监控源文件的变化，并自动编译和运行（重启）。
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - 使用二进制文件、docker 或 Drone CI 触发下游 Jenkins 作业。
- [drone-scp](https://github.com/appleboy/drone-scp) - 使用二进制文件、docker 或 Drone CI 通过 SSH 复制文件和构建产物。
- [Dropship](https://github.com/chrismckenzie/dropship) - 通过 CDN 部署代码的工具。
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - 通过 `ProxyCommand` 轻松进行 SSH 远程执行和 SCP 下载的 Golang 包。
- [fac](https://github.com/mkchoi212/fac) - 用于解决 git 合并冲突的命令行用户界面。
- [Flannel](https://github.com/flannel-io/flannel) - Flannel 是一个为 Kubernetes 设计的容器网络结构。
- [Fleet device management](https://github.com/fleetdm/fleet) - 面向服务器和工作站的轻量级可编程遥测。
- [gaia](https://github.com/gaia-pipeline/gaia) - 用任何编程语言构建强大的流水线。
- [ghorg](https://github.com/gabrie30/ghorg) - 将整个组织/用户的仓库快速克隆到一个目录中——支持 GitHub、GitLab、Gitea 和 Bitbucket。
- [Gitea](https://github.com/go-gitea/gitea) - Gogs 的分支，完全由社区驱动。
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - 将你所有的 GitHub 仓库、issue、里程碑和标签迁移到你的 Gitea 实例。
- [gitl](https://github.com/akomyagin/gitl) - 对 git 提交范围进行 AI 审查，提供风险评分（低/中/高）、变更日志生成和多仓库活动摘要。附带 GitHub Action。
- [go-furnace](https://github.com/go-furnace/go-furnace) - 用 Go 编写的托管解决方案。轻松将你的应用部署到 AWS、GCP 或 DigitalOcean。
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - 制作可自我更新的 Go 应用的简单方法——支持 Github 和 Gitlab。
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - 让你的 Go 应用能够自我更新。
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrew 让你轻松在多个 Go 版本之间切换。
- [gobrew](https://github.com/kevincobain2000/gobrew) - Go 版本管理器。安装和管理 Go 版本的超简单工具。无需 root 即可安装 Go。Gobrew 不需要 shell rehash。
- [godbg](https://github.com/sirnewton01/godbg) - 基于 Web 的 gdb 前端应用。
- [Gogs](https://gogs.io/) - 用 Go 编程语言编写的自托管 Git 服务。
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - 轻量级 API 网关和反向代理，支持声明式配置和健壮的中间件，并支持 REST、GraphQL、TCP、UDP 和 gRPC。
- [gonative](https://github.com/inconshreveable/gonative) - 创建可交叉编译到所有平台的 Go 构建，同时仍使用启用 Cgo 的标准库包版本的工具。
- [govvv](https://github.com/ahmetalpbalkan/govvv) - “go build”的封装，可轻松将版本信息添加到 Go 二进制文件中。
- [grapes](https://github.com/yaronsumel/grapes) - 轻松通过 SSH 分发命令的轻量级工具。
- [GVM](https://github.com/moovweb/gvm) - GVM 提供了管理 Go 版本的界面。
- [Hey](https://github.com/rakyll/hey) - Hey 是一个向 Web 应用施加负载的小程序。
- [httpref](https://github.com/dnnrly/httpref) - httpref 是一个便捷的 CLI 参考工具，涵盖 HTTP 方法、状态码、请求头以及 TCP 和 UDP 端口。
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLI 让你以简单的方式管理 Jenkins。
- [k0s](https://github.com/k0sproject/k0s) - 零摩擦的 Kubernetes 发行版。
- [k3d](https://github.com/k3d-io/k3d) - 在 Docker 中运行 CNCF k3s 的小助手。
- [k3s](https://github.com/k3s-io/k3s) - 轻量级 Kubernetes。
- [k6](https://github.com/grafana/k6) - 使用 Go 和 JavaScript 的现代负载测试工具。
- [k9s](https://github.com/derailed/k9s) - 以时尚方式管理集群的 Kubernetes CLI。
- [kala](https://github.com/ajvb/kala) - 简单、现代且高性能的作业调度器。
- [kcli](https://github.com/cswank/kcli) - 检查 kafka 主题/分区/消息的命令行工具。
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker——用于测试 Kubernetes 的本地集群。
- [ko](https://github.com/google/ko) - 在 Kubernetes 上构建和部署 Go 应用的命令行工具
- [kool](https://github.com/kool-dev/kool) - 以简单方式管理 Docker 环境的命令行工具。
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks 是一个开源控制平面，可在 K8s 上运行和管理数据库、消息队列及其他数据基础设施。
- [kubefwd](https://github.com/txn2/kubefwd) - 面向本地开发的批量 Kubernetes 端口转发，为每个服务分配独立 IP。
- [kubernetes](https://github.com/kubernetes/kubernetes) - 来自 Google 的容器集群管理器。
- [kubeshark](https://github.com/kubeshark/kubeshark) - 受 Wireshark 启发、专为 Kubernetes 打造的 API 流量分析器。
- [KubeVela](https://github.com/kubevela/kubevela) - 云原生应用交付。
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN 提供可无缝连接到 Kubernetes 集群网络的云原生开发环境。
- [KusionStack](https://github.com/KusionStack/kusion) - 统一的可编程配置技术栈，以“平台即代码”和“基础设施即代码”的方式交付现代应用。
- [kwatch](https://github.com/abahmed/kwatch) - 即时监控并检测 Kubernetes（K8s）集群中的崩溃。
- [lstags](https://github.com/ivanilves/lstags) - 在不同镜像仓库之间同步 Docker 镜像的工具和 API。
- [lwc](https://github.com/timdp/lwc) - 实时更新版的 UNIX wc 命令。
- [manssh](https://github.com/xwjdsh/manssh) - manssh 是一个轻松管理 SSH 别名配置的命令行工具。
- [Mantil](https://github.com/mantil-io/mantil) - 专为 Go 打造、用于在 AWS 上构建无服务器应用的框架，让你专注于纯 Go 代码，基础设施则由 Mantil 负责。
- [minikube](https://github.com/kubernetes/minikube) - 在本地运行 Kubernetes。
- [Moby](https://github.com/moby/moby) - 面向容器生态系统的协作项目，用于组装基于容器的系统。
- [Mora](https://github.com/emicklei/mora) - 用于访问 MongoDB 文档和元数据的 REST 服务器。
- [mq-studio](https://github.com/amigoer/mq-studio) - 跨平台桌面客户端，用于管理和监控 RocketMQ、RabbitMQ、Kafka、Pulsar、Redis Stream、MQTT、NATS 和 ActiveMQ 集群。
- [ostent](https://github.com/ostrost/ostent) - 收集并显示系统指标，并可选择转发到 Graphite 和/或 InfluxDB。
- [Packer](https://github.com/mitchellh/packer) - Packer 是一个根据单一源配置为多个平台创建相同机器镜像的工具。
- [Pewpew](https://github.com/bengadbois/pewpew) - 灵活的 HTTP 命令行压力测试工具。
- [pingtower](https://github.com/crleonard/pingtower) - 面向网站和 API 的轻量级自托管在线状态监控工具。
- [PipeCD](https://github.com/pipe-cd/pipecd) - GitOps 风格的持续交付平台，为任何应用提供一致的部署和运维体验。
- [podinfo](https://github.com/stefanprodan/podinfo) - Podinfo 是一个用 Go 编写的小型 Web 应用，展示了在 Kubernetes 中运行微服务的最佳实践。Flux 和 Flagger 等 CNCF 项目使用 Podinfo 进行端到端测试和研讨会。
- [podman-tui](https://github.com/containers/podman-tui) - 用于管理 Podman 的终端 UI。
- [Pomerium](https://github.com/pomerium/pomerium) - Pomerium 是一个身份感知的访问代理。
- [Rodent](https://github.com/alouche/rodent) - Rodent 帮助你管理 Go 版本和项目，并跟踪依赖。
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - 支持 GET、PUT 和 DELETE 方法以及身份验证（OpenID Connect 和 Basic Auth）的 S3 代理。
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - 针对大对象高速传入和传出 Amazon S3 进行优化的小型工具/库。
- [s5cmd](https://github.com/peak/s5cmd) - 极速的 S3 和本地文件系统操作工具。
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - 从命令行管理裸金属服务器（像使用 Docker 一样简单）。
- [script](https://github.com/bitfield/script) - 让你轻松用 Go 编写类似 shell 的脚本，以完成 DevOps 和系统管理任务。
- [sg](https://github.com/ChristopherRabotin/sg) - 对一组 HTTP 端点进行基准测试（类似 ab），可在每次调用之间使用响应码和数据，根据先前的响应对服务器施加特定压力。
- [sigma](https://github.com/go-sigma/sigma) - OCI 原生的容器镜像仓库，支持 OCI 原生制品、制品扫描、镜像构建等。
- [skm](https://github.com/TimothyYe/skm) - SKM 是一个简单而强大的 SSH 密钥管理器，帮助你轻松管理多个 SSH 密钥！
- [sortie](https://github.com/sortie-ai/sortie) - 将跟踪系统中的工单转换为自主编程智能体会话。
- [StatusOK](https://github.com/sanathp/statusok) - 监控你的网站和 REST API。当服务器宕机或响应时间超出预期时，通过 Slack、电子邮件接收通知。
- [tau](https://github.com/taubyte/tau) - 轻松构建云计算平台，具备无服务器 WebAssembly 函数、前端托管、CI/CD、对象存储、键值数据库和发布-订阅消息等功能。
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - Terraform provider 插件，可在运行时根据包含所暴露 API 定义的 OpenAPI 文档（以前称为 swagger 文件）动态配置自身。
- [tf-profile](https://github.com/datarootsio/tf-profile) - Terraform 运行的性能分析器。可生成全局统计、资源级统计或可视化图表。
- [tickstem/uptime](https://github.com/tickstem/uptime) - 用于 HTTP 在线状态监控的 Go 客户端，支持 SSL 过期告警和可配置的响应断言。
- [tlm](https://github.com/yusufcanb/tlm) - 由 CodeLLaMa 驱动的本地命令行 Copilot
- [traefik](https://github.com/containous/traefik) - 支持多种后端的反向代理和负载均衡器。
- [trubka](https://github.com/xitonix/trubka) - 管理 Apache Kafka 集群并排查其问题的 CLI 工具，能够以通用方式向 Kafka 发布或从 Kafka 消费 protocol buffer 和纯文本事件。
- [Updatecli](https://github.com/updatecli/updatecli) - 通用的声明式更新策略引擎。
- [uTask](https://github.com/ovh/utask) - 对以 yaml 声明的业务流程进行建模和执行的自动化引擎。
- [Vegeta](https://github.com/tsenart/vegeta) - HTTP 负载测试工具和库。它的战斗力超过 9000！
- [wait-for](https://github.com/dnnrly/wait-for) - （从命令行）等待某件事发生后再继续。轻松编排 Docker 服务等。
- [Wide](https://wide.b3log.org/login) - 面向使用 Golang 的团队的 Web IDE。
- [winrm-cli](https://github.com/masterzen/winrm-cli) - 在 Windows 机器上远程执行命令的命令行工具。
- [zerohand](https://github.com/nilpoona/zerohand) - 简单高效的 Web API 负载测试工具。

**[⬆ 返回顶部](#contents)**

### 其他软件

- [Backrest](https://github.com/garethgeorge/backrest) - restic 备份的 Web UI 和编排器。
- [Better Go Playground](https://goplay.tools) - 带语法高亮、代码补全等功能的 Go 在线演练场。
- [blocky](https://github.com/0xERR0R/blocky) - 快速轻量的 DNS 代理，可作为本地网络的广告拦截器，功能丰富。
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - 适用于 Linux 的 TUI 蓝牙管理器。
- [borg](https://github.com/crufter/borg) - 基于终端的 bash 代码片段搜索引擎。
- [boxed](https://github.com/tejo/boxed) - 基于 Dropbox 的博客引擎。
- [Chapar](https://github.com/chapar-rest/chapar) - Chapar 是一个用 Go 构建的跨平台 Postman 替代品，旨在帮助开发者测试 API 端点。它支持 http 和 grpc 协议。
- [Cherry](https://github.com/rafael-santiago/cherry) - 用 Go 编写的小型网页聊天服务器。
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - 自托管的公共辐射地图，用于导入、分析和可视化测量轨迹。
- [Circuit](https://github.com/gocircuit/circuit) - Circuit 是一个可编程的平台即服务（PaaS）和/或基础设施即服务（IaaS），用于管理、发现、同步和编排构成云应用的服务和主机。
- [claude-grep](https://github.com/evoleinik/claude-grep) - 使用正则表达式和语义（向量）搜索来检索 Claude Code 会话历史。
- [Comcast](https://github.com/tylertreat/Comcast) - 模拟糟糕的网络连接。
- [confd](https://github.com/kelseyhightower/confd) - 使用模板以及来自 etcd 或 consul 的数据管理本地应用配置文件。
- [crawley](https://github.com/s0rg/crawley) - 命令行网页抓取器/爬虫。
- [croc](https://github.com/schollz/croc) - 轻松安全地将文件或文件夹从一台计算机发送到另一台计算机。
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - 适用于 Windows 和 Linux 的轻量级软件缓存清理工具。
- [dispositio](https://github.com/tsraveling/dispositio) - 用简单 Markdown 规划大型项目的终端工具。
- [Documize](https://github.com/documize/community) - 集成 SaaS 工具数据的现代 Wiki 软件。
- [dp](https://github.com/scryinfo/dp) - 通过与区块链进行数据交换的 SDK，开发者可以轻松开展 DAPP 开发。
- [drive](https://github.com/odeke-em/drive) - 命令行版 Google Drive 客户端。
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - 基于无锁去重理念的跨平台网络与云备份工具。
- [fjira](https://github.com/mk-5/fjira) - 基于模糊搜索的 Atlassian Jira 终端 UI 应用
- [Gebug](https://github.com/moshebe/gebug) - 无缝启用调试器和热重载功能，让调试 Docker 化 Go 应用变得超级简单的工具。
- [gfile](https://github.com/Antonito/gfile) - 通过 WebRTC 在两台计算机之间安全传输文件，无需任何第三方。
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - 显示 GOPATH 中 Go 包更新的应用。
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - 视频流式播放种子客户端。
- [goblin](https://goblin.run) - 用于用 Go 语言编写的 CLI 的云构建器
- [GoBoy](https://github.com/Humpheh/goboy) - 用 Go 编写的任天堂 Game Boy Color 模拟器。
- [gocc](https://github.com/goccmack/gocc) - Gocc 是一个用 Go 编写、面向 Go 的编译器工具包。
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - 适用于 Go Doc 网站的 Chrome 扩展，可在函数列表中以工具提示形式显示函数说明。
- [Gokapi](https://github.com/Forceu/gokapi) - 轻量级文件分享服务器，文件在达到设定的下载次数或天数后过期。类似 Firefox Send，但不允许公开上传。
- [GoLand](https://jetbrains.com/go) - 功能齐全的跨平台 Go IDE。
- [GoNB](https://github.com/janpfeifer/gonb) - 使用 Jupyter Notebook 进行交互式 Go 编程（也适用于 VSCode、Binder 和 Google 的 Colab）。
- [GooseForum](https://github.com/leancodebox/GooseForum) - 使用 Go、Vue 和 Tailwind CSS 构建的自托管论坛平台。
- [Gor](https://github.com/buger/gor) - HTTP 流量复制工具，用于将生产环境的流量实时回放到预发布/开发环境。
- [Guora](https://github.com/meloalright/guora) - 用 Go 编写的自托管类 Quora Web 应用。
- [GURL](https://github.com/matveynator/gurl) - 当 CURL 说你的 SSL 库太旧时——请使用 GURL。一个文件。零 SSL 依赖。
- [hoofli](https://github.com/dnnrly/hoofli) - 根据 Chrome 或 Firefox 的网络检查结果生成 PlantUML 图。
- [hotswap](https://github.com/edwingeng/hotswap) - 完整的解决方案，无需重启服务器、也不会中断或阻塞任何正在进行的过程即可重新加载 Go 代码。
- [hugo](https://gohugo.io/) - 快速、现代的静态网站引擎。
- [ide](https://github.com/thestrukture/ide) - 可通过浏览器访问的 IDE。用 Go 为 Go 而设计。
- [joincap](https://github.com/assafmo/joincap) - 将多个 pcap 文件合并在一起的命令行工具。
- [JuiceFS](https://github.com/juicedata/juicefs) - 基于 Redis 和 AWS S3 构建的分布式 POSIX 文件系统。
- [Juju](https://jujucharms.com/) - 与云无关的服务部署和编排——支持 EC2、Azure、Openstack、MAAS 等。
- [KeibiDrop](https://github.com/KeibiSoft/KeibiDrop) - 按需的点对点文件系统，可挂载远程文件夹并通过预读隐藏链路延迟，采用 X25519 与 ML-KEM-1024 混合方案进行端到端加密。
- [Layli](https://layli.app) - 以代码形式绘制漂亮的布局图。
- [Leaps](https://github.com/jeffail/leaps) - 使用操作转换的结对编程服务。
- [lgo](https://github.com/yunabe/lgo) - 使用 Jupyter 进行交互式 Go 编程。支持代码补全、代码检查，并 100% 兼容 Go。
- [LightCMS](https://github.com/jonradoff/lightcms) - 自托管内容管理系统，支持静态页面生成、基于角色的访问控制，并提供用于智能体驱动内容操作的 MCP 服务器。
- [limetext](https://limetext.github.io) - Lime Text 是一个主要用 Go 开发的强大而优雅的文本编辑器，旨在成为 Sublime Text 的自由开源后继者。
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDE 是一个简单、开源、跨平台的 Go IDE。
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - 预览优先的 TUI，用于清理 macOS 缓存、日志和临时文件。
- [mdv](https://github.com/Allra-Fintech/mdv) - 在浏览器中渲染 Markdown 文件的 CLI 工具，支持实时重载、GFM、语法高亮、Mermaid 图表和 PDF 导出。
- [mockingjay](https://github.com/quii/mockingjay-server) - 通过一个配置文件实现伪 HTTP 服务器和消费者驱动契约。你还可以让服务器随机出现异常行为，以便进行更真实的性能测试。
- [myLG](https://github.com/mehrdadrad/mylg) - 用 Go 编写的命令行网络诊断工具。
- [naclpipe](https://github.com/unix4fun/naclpipe) - 用 Go 编写、基于 NaCL EC25519 的简单加密管道工具。
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsay 重生了，为新时代而来。
- [nes](https://github.com/fogleman/nes) - 用 Go 编写的任天堂红白机（NES）模拟器。
- [onWatch](https://github.com/onllm-dev/onWatch) - 在本地监控各提供商的 AI API 配额，提供历史跟踪、告警和 Web 仪表盘，避免意外限流和预算超支。
- [Orbit](https://github.com/gulien/orbit) - 运行命令并根据模板生成文件的简单工具。
- [peg](https://github.com/pointlander/peg) - Peg（解析表达式文法）是一个 Packrat 解析器生成器的实现。
- [Plakar](https://github.com/PlakarKorp/plakar) - 加密、去重、可验证且可扩展的备份引擎，无供应商锁定。
- [Plik](https://github.com/root-gg/plik) - Plik 是一个用 Go 编写的临时文件上传系统（类似 Wetransfer）。
- [portal](https://github.com/SpatiumPortae/portal) - Portal 是一个快速简便的命令行文件传输工具，可在任意两台计算机之间传输文件。
- [restic](https://github.com/restic/restic) - 支持去重的备份程序。
- [sake](https://github.com/alajmo/sake) - sake 是一个面向本地和远程主机的命令运行器。
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Code，一个非常快速且准确的代码统计工具，支持复杂度计算和 COCOMO 估算。
- [ScheduleGate](https://github.com/gjunqueira-sys/ScheduleGate) - 针对 MS Project Excel/CSV 导出文件的 DCMA 14 点进度评估 CLI。
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - 快速、简单且可扩展的分布式文件系统，磁盘寻址为 O(1)。
- [shell2http](https://github.com/msoap/shell2http) - 通过 HTTP 服务器执行 shell 命令（用于原型设计或远程控制）。
- [Snitch](https://github.com/lucasgomide/snitch) - 当有人通过 Tsuru 部署任何应用时，通知你的团队和许多工具的简单方式。
- [sonic](https://github.com/go-sonic/sonic) - Sonic 是一个 Go 博客平台。简单而强大。
- [spotify-screensaver](https://github.com/benzjeremy/spotify-screensaver) - Spotify 桌面屏保，带有数字 OLED 时钟、canvas 音频可视化和 MPRIS 控制。
- [Stack Up](https://github.com/pressly/sup) - Stack Up，一个超级简单的部署工具——纯 Unix 风格——可以把它看作面向服务器网络的“make”。
- [stew](https://github.com/marwanhawari/stew) - 面向已编译二进制文件的独立包管理器。
- [syncthing](https://syncthing.net/) - 开放、去中心化的文件同步工具和协议。
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - 基于 eBPF 的 TCP 可观测性。
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - 小型终端应用，显示过去 24 小时和一周的 git 提交、当前天气、一些自我关怀建议、一则笑话以及你当前的待办事项。
- [tldx](https://github.com/brandonyoungdev/tldx) - 批量域名可用性检查工具，使用 RDAP、DNS 并以 WHOIS 作为后备，支持关键词排列组合生成。
- [toxiproxy](https://github.com/shopify/toxiproxy) - 为自动化测试模拟网络和系统状况的代理。
- [tsuru](https://tsuru.io/) - 可扩展的开源平台即服务（PaaS）软件。
- [untis-go](https://github.com/benzjeremy/untis-go) - 面向学生和教师的快速原生 WebUntis 桌面客户端。提供侧边栏导航、课程表、作业、缺勤和消息功能。凭据采用 AES-256-GCM 加密，SQLite 缓存优先，并通过随机端口保障安全。
- [vaku](https://github.com/lingrino/vaku) - 为 Vault 提供基于文件夹的功能（如复制、移动和搜索）的 CLI 和 API。
- [vFlow](https://github.com/VerizonDigital/vflow) - 高性能、可扩展且可靠的 IPFIX、sFlow 和 Netflow 收集器。
- [Wave Terminal](https://waveterm.dev) - Wave 是一个开源的 AI 原生终端，专为流畅的开发者工作流打造，支持内联渲染、现代 UI 和持久会话。
- [wellington](https://github.com/wellington/wellington) - Sass 项目管理工具，用精灵图函数扩展了该语言（类似 Compass）。
- [woke](https://github.com/get-woke/woke) - 检测源代码中的非包容性语言。
- [yai](https://github.com/ekkinox/yai) - AI 驱动的终端助手。
- [zs](https://git.mills.io/prologic/zs) - 极其精简的静态网站生成器。

**[⬆ 返回顶部](#contents)**

# 资源

_在哪里发现新的 Go 库。_

**[⬆ 返回顶部](#contents)**

## 基准测试

- [autobench](https://github.com/davecheney/autobench) - 比较不同 Go 版本性能的框架。
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - 融合了 Аb、Wrk、Siege 等工具的强大 HTTP 基准测试工具。收集基准测试的统计数据和各种参数，并提供对比结果。
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - 一些杂项 Go 微基准测试。将某些语言特性与替代方法进行比较。
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - Go HTTP 请求路由器的基准测试和比较。
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - Go JSON 基准测试。
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Go 中机器学习推理的基准测试。
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Go Web 框架基准测试。
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Go 序列化方法的基准测试。
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Go 语言常见基本操作的基准测试。
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - Golang 基准测试集合。
- [gospeed](https://github.com/feyeleanor/GoSpeed) - 用于计算语言结构速度的 Go 微基准测试。
- [kvbench](https://github.com/jimrobinson/kvbench) - 键/值数据库基准测试。
- [skynet](https://github.com/atemerev/skynet) - Skynet 百万线程微基准测试。
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - 比较 Go 语言的各种图像缩放算法。
- [vizb](https://github.com/goptics/vizb) - 以 4D 方式可视化 Go 基准测试数据的 CLI 工具。

**[⬆ 返回顶部](#contents)**

## 会议

- [GoCon](https://gocon.connpass.com/) - 日本东京。
- [GoDays](https://www.godays.io/) - 德国柏林。
- [GoLab](https://golab.io/) - 意大利佛罗伦萨。
- [GopherCon](https://www.gophercon.com/) - 美国，每年地点不同。
- [GopherCon Africa](https://gophercon.africa/) - 肯尼亚内罗毕。
- [GopherCon Australia](https://gophercon.com.au/) - 澳大利亚悉尼。
- [GopherCon Brazil](https://gopherconbr.org) - 巴西弗洛里亚诺波利斯。
- [GopherCon China](https://gophercon.com.cn) - 中国上海。
- [GopherCon Europe](https://gophercon.eu/) - 德国柏林。
- [GopherCon India](https://gopherconindia.org/) - 印度浦那。
- [GopherCon Israel](https://www.gophercon.org.il/) - 以色列特拉维夫。
- [GopherCon Russia](https://www.gophercon-russia.ru) - 俄罗斯莫斯科。
- [GopherCon Singapore](https://gophercon.sg) - 新加坡丰树商业城（Mapletree Business City）。
- [GopherCon UK](https://www.gophercon.co.uk/) - 英国伦敦。
- [GopherCon Vietnam](https://gophercon.vn/) - 越南胡志明市。
- [GoWest Conference](https://www.gowestconf.com/) - 美国莱海（Lehi）。

**[⬆ 返回顶部](#contents)**

## 电子书

### 付费电子书

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - 面向黑客和渗透测试人员的 Go 编程。
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - 这本关于持续交付的实用指南将向你展示如何快速建立自动化流水线，从而改进你的测试、代码质量和最终产品。
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - TinyGo 编译器入门，包含涉及 Arduino 和 WebAssembly 的项目。
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - 领会 Go 在程序设计上的独特视角，开始编写简单、可维护且可测试的 Go 代码。
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - 面向 Go 初学者的入门书籍。
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - 关于 Go 开发方方面面的实用指南，涵盖标准库以及 Go 强大生态系统中最重要的工具。
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - 理解和使用 Go 泛型的指南。
- [Lets-Go](https://lets-go.alexedwards.net) - 使用 Go 创建快速、安全且可维护的 Web 应用的分步指南。
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - 用 Go 构建 API 和 Web 应用的高级模式。
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Go 测试指南。
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - 用 Go 编写命令行工具的指南。
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - 一本介绍数十种技巧的书，教你编写符合语言习惯、富有表现力且高效的 Go 代码，并避开常见陷阱。

### 免费电子书

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - 一本兼具基础性和实用性的指南，帮助你高效学习并使用 Go 和 gRPC 从零开始逐步构建区块链。
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - 一本专注于 Go 语法/语义及各种细节的书。
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - 一本专注于 Go `go/*` 包的书。
- [Go Faster](https://leanpub.com/gofaster) - 本书旨在缩短你的学习曲线，帮助你更快地成为熟练的 Go 程序员。
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - 波斯语版。
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - 一本通过实际重构展示如何应用 DDD、整洁架构和 CQRS 的书。
- [GoBooks](https://github.com/dariubs/GoBooks) - 精选的 Go 书籍列表。
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - 一本 600 页、面向首次接触编程的开发者的 Go 入门书。
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ 返回顶部](#contents)**

## Gopher 形象

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - 由 Maria Letta 创作的 Gopher 图形包，包含矢量和栅格格式的插图和表情丰富的角色。
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Go gopher 矢量数据 [.ai, .svg]。
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - 可爱的 gopher 标志。
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - 把你自己变成 Gopher。
- [gophers](https://github.com/ashleymcnamara/gophers) - Ashley McNamara 创作的 Gopher 艺术作品。
- [gophers](https://github.com/egonelbre/gophers) - 免费的 gopher 图片。
- [gophers](https://github.com/rogeralsing/gophers) - 随机的 gopher 图形。
- [gophers](https://github.com/sillecelik/go-gopher) - Gopher 钩针玩偶（amigurumi）图样。
- [gophers](https://github.com/scraly/gophers) - Aurélie Vache 创作的 Gopher 图片。

**[⬆ 返回顶部](#contents)**

## 技术聚会

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

_在此添加你所在城市/国家的技术聚会（发送 **PR**）_

**[⬆ 返回顶部](#contents)**

## 风格指南

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ 返回顶部](#contents)**

## 社交媒体

### Twitter

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ 返回顶部](#contents)**

### Reddit

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ 返回顶部](#contents)**

## 网站

- [Awesome Go @LibHunt](https://go.libhunt.com) - 你首选的 Go 工具箱。
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - 精选的优秀 Golang 研讨会列表。
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - 精选的优秀远程工作列表。其中很多职位都在寻找 Go 开发者。
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - 收录其他出色 awesome 列表的列表。
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - 解析 awesome-go 的 README 文件，并生成包含仓库信息的新 README 文件。
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - 软件工程师及其博客 @ codewithmukesh.com。
- [Coding Mystery](https://codingmystery.com) - 使用 Go 解决受密室逃脱启发的精彩编程挑战。
- [CodinGame](https://www.codingame.com/) - 以小游戏为实例，通过解决交互式任务学习 Go。
- [Go Blog](https://blog.golang.org) - Go 官方博客。
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - 一群 Gopher 每周阅读并讨论一个不同的 Go 项目。
- [Go Community on Hashnode](https://hashnode.com/n/go) - Hashnode 上的 Gopher 社区。
- [Go Forum](https://forum.golangbridge.org) - 讨论 Go 的论坛。
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Go 社区 Wiki 上的项目列表。
- [Go Proverbs](https://go-proverbs.github.io/) - Rob Pike 的 Go 箴言。
- [Go Report Card](https://goreportcard.com) - 你的 Go 包的成绩单。
- [go.dev](https://go.dev/) - Go 开发者的中心。
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - 需要帮助的 Go 项目集合。是开启你的 Go 开源之路的好地方。
- [Golang Developer Jobs](https://golangjob.xyz) - 专门面向 Golang 相关职位的开发者招聘。
- [Golang News](https://golangnews.com) - 关于 Go 编程的链接和新闻。
- [Golang Nugget](https://golangnugget.com) - 每周精选最佳 Go 内容，每周一发送到你的收件箱。
- [Golang Weekly](https://discu.eu/weekly/golang/) - 每周一推送关于 Go 的项目、教程和文章。
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Go 邮件列表。
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - 加入我们为 Gopher 打造的全新 Slack 社区（[了解它的由来](https://blog.gopheracademy.com/gophers-slack-community/)）。
- [Gophercises](https://gophercises.com/) - 面向新手 Gopher 的免费编程练习。
- [json2go](https://m-zajac.github.io/json2go) - 高级的 JSON 到 Go 结构体转换——在线工具。
- [justforfunc](https://www.youtube.com/c/justforfunc) - 专注于 Go 编程语言技巧与窍门的 Youtube 频道，由 Francesc Campoy [@francesc](https://twitter.com/francesc) 主持。
- [Learn Go Programming](https://blog.learngoprogramming.com) - 通过插图学习 Go 概念。
- [Libs.tech](https://libs.tech/go) – 出色的 Go 库和鲜为人知的宝藏
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - 开源 Go 包的文档。
- [studygolang](https://studygolang.com) - 中国的 studygolang 社区。
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - 发现新 Go 库的好地方。
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ 返回顶部](#contents)**

### 教程

- [50 Shades of Go](https://golang50shades.github.io/) - Golang 新手开发者的陷阱、易错点和常见错误。
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - 深入探索 Go 中的结构化日志，重点介绍最近被接受的 slog 提案，该提案旨在为标准库带来高性能的分级结构化日志。
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - 构建 Golang 电子商务网站（附演示）。
- [A Tour of Go](https://tour.golang.org/) - Go 交互式教程。
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - 用 1000 行代码从零构建 NoSQL 数据库。
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - 介绍如何用 Golang 构建 Web 应用的 Golang 电子书。
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - 我们将借助强大的 Gorilla Mux 编写一个 API。
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - 熟悉 Gin，了解它如何帮助你减少样板代码并构建请求处理管道。
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - 如何缓存缓慢的数据库查询。
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - 如何取消 MySQL 查询。
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - 通过构建你自己的 Redis、Docker、Git 和 SQLite 来精通高级 Go。内容涵盖 goroutine、系统编程、文件 I/O 等。
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - 用 Go 实现的编程设计模式集合。
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - 讲授编程和游戏开发的视频系列。
- [Go By Example](https://gobyexample.com/) - 通过带注释的示例程序上手学习 Go。
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Go 速查卡。
- [Go database/sql tutorial](http://go-database-sql.org/) - database/sql 入门。
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - 7 天学会 Go 的一切（来自一位 Nodejs 开发者）。
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Go 语言学习教程。
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - 学习 Go 编程。
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - 用于 Golang 服务的整洁架构模板。
- [go-patterns](https://github.com/tmrts/go-patterns) - 精选的 Go 设计模式、实用方案和惯用法列表。
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - 将 Golang 与 Node.js 对照学习的示例。
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - 学习 Go 编程语言的免费课程列表。
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - 大量学习 Golang 的示例。
- [Golangbot](https://golangbot.com/learn-golang-series/) - 帮助你入门 Go 编程的教程。
- [GopherCoding](https://gophercoding.com/) - 帮助解决日常问题的代码片段和教程集合。
- [GopherSnippets](https://gophersnippets.com/) - 适用于 Go 编程语言的代码片段，附带测试和可测试示例。
- [Gosamples](https://gosamples.dev/) - 帮你解决日常编码问题的代码片段集合。
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - 学习如何通过代码生成创建 Go GraphQL 服务器和客户端。还包括创建 REST 端点。
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - 通过由 Golang 编程社区提交和投票选出的最佳在线 Golang 教程学习 Go。
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - 使用六边形架构编写可维护代码的入门指南。
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - 学习如何在 Go 中进行基准测试。作为案例研究，我们将对 dbq、sqlx 和 GORM 进行基准测试。
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - 学习如何将 Docker 用于 Go 开发，以及如何构建生产环境 Docker 镜像。
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - 在 Golang 中实现基于角色的访问控制（RBAC）的指南，包含代码示例，涵盖使用基于角色的授权保护应用端点的各种方法。
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - 开始使用 Godog——一个用于构建和测试 Go 应用的行为驱动开发框架。
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - 通过数千个示例、练习和测验学习 Go。
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - 通过测试驱动开发学习 Go。
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - 以具体应用为例学习 Golang 语言的系列文章。
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - 深入学习使用 Go（包括 gRPC）构建微服务。
- [package main](https://www.youtube.com/packagemain) - 关于 Go 编程的 YouTube 频道。
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - 从零开始学习 Go 的 Coursera 专项课程。
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - 关于在生产环境中构建、部署和扩展 Go 应用的一切。
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - 以可视化方式学习 Go
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3Basic 提供深入的教程和组织良好的内容，帮助你学习 Golang 编程。
- [Your basic Go](https://yourbasic.org/golang) - 海量教程和操作指南合集。

**[⬆ 返回顶部](#contents)**

### 引导式学习

- [The Go Developer Roadmap](https://roadmap.sh/golang) - 一份可视化路线图，新的 Go 开发者可以按图索骥地学习 Go。
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - 提供编程挑战、帮助准备 Go 技术面试的 GitHub 仓库。
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - 包含免费和付费资源的引导式学习路径。
- [The Go Skill Tree](https://labex.io/skilltrees/go) - 结合免费和付费资源的结构化学习路径。

**[⬆ 返回顶部](#contents)**

## 贡献

欢迎贡献！相关指南请参阅我们的 [CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)。

## 许可证

本项目采用 [MIT 许可证](https://github.com/avelino/awesome-go/blob/main/LICENSE)授权——详情请参阅 LICENSE 文件。
