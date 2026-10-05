# Awesome 隐私资源合集
<p align="center"><img width="500" src="misc/logo.png"> </img></p>
<p align="center">
	<img src="https://awesome.re/badge.svg" alt="Awesome">
	<a href="https://codeberg.org/pluja/awesome-privacy"><img alt="Mirror" src="https://img.shields.io/badge/Mirror-Codeberg-blue"></img></a>
</p>
<p align="center">免费、开源且尊重隐私的服务及其对专有服务的替代方案列表。</p>
<p align="center">
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/ABOUT.md"> 关于 </a> |
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/Contributing.md"> 参与贡献 </a> |
	<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/QUOTES.md"> 引言 </a> |
	<a href="https://github.com/pluja/awesome-privacy/discussions"> 讨论 </a>
</p>

> [!IMPORTANT]
> 匿名性、隐私和安全常被混为一谈，但它们实际上代表不同的概念。了解它们之间的区别很重要。[在下文此处了解更多](#privacy-vs-security-vs-anonymity)。
>
> 本列表主要提供优先考虑隐私的替代方案。这些方案让你掌控自己的数据，且不会收集或出售数据。

## 目录
- [双重身份验证（2FA）](#2fa)
- [分析](#analytics)
- [安卓](#android)
  - [安卓应用商店](#android-app-store)
  - [安卓去臃肿工具](#android-debloat-tools)
  - [安卓拨号器](#android-dialer)
  - [安卓文件管理器](#android-file-manager)
  - [安卓图库](#android-gallery)
  - [安卓键盘](#android-keyboard)
  - [安卓启动器](#android-launcher)
- [人工智能](#artificial-intelligence)
	- [ChatGPT](#chatgpt)
	- [AI 编程](#ai-coding)
	- [文本转语音](#text-to-speech)
 	- [语音转文本](#speech-to-text)
	- [图像生成](#image-generation)
- [书签管理](#bookmarking)
    - [书籍和网页批注/高亮管理](#book-and-web-annotationshighlights-management)
- [验证码](#captchas)
- [日历](#calendar)
- [评论系统（Disqus）](#commenting-engines)
- [伪装访问](#cloaking)
- [云存储](#cloud-storage)
- [创作者工具](#creator-tools)
- [数据库](#databases)
- [约会应用](#dating-apps)
- [设计工具](#design-tools)
- [开发者工具](#developer-tools)
    - [集成开发环境（IDE）](#ides)
- [域名与托管](#domains--hosting)
- [下载管理器](#download-manager)
- [电子书](#ebooks)
- [加密](#encryption)
- [文件管理与共享](#file-management-and-sharing)
- [健身与健康](#fitness-and-health)
	- [健身追踪器](#fitness-trackers)
	- [饮食](#food)
	- [月经周期追踪器](#menstrual-cycle-trackers)
	- [医疗健康](#medical-health)
- [字体](#fonts)
- [表单](#forms)
- [游戏](#games)
    - [马力欧赛车](#mario-kart)
    - [Minecraft](#minecraft)
    - [宝可梦](#pokemon)
    - [刺猬索尼克](#sonic-the-hedgehog)
- [家庭助手](#home-assistants)
- [即时通讯](#instant-messaging)
- [个人简介链接工具](#link-in-bio-tools)
- [短链接服务](#link-shorteners)
- [位置追踪](#location-tracking)
- [邮件服务](#mail-services)
- [地图与导航](#maps-and-navigation)
- [媒体流媒体平台](#media-streaming-platforms)
    - [视频与音频](#video-and-audio)
    - [音频](#audio)
    - [播客](#podcasts)
- [音乐识别（类似 Shazam）](#music-recognition)
- [笔记与任务](#notes-and-tasks)
- [办公软件](#office)
- [在线电话服务商（短信）](#online-phone-providers)
- [操作系统](#operating-systems)
    - [安卓](#android)
    - [PC / macOS](#pc--macos)
    - [智能电视](#smart-tv)
- [密码管理器](#password-managers)
- [Pastebin 与机密共享](#pastebin-and-secret-sharing)
- [支付](#payments)
- [个人财务](#personal-finances)
	- [全功能财务管理](#full-featured-financial-management)
 	- [预算管理](#budget-management)
  	- [共同开支](#shared-expenses)
	- [其他](#others)
	- [投资组合追踪器](#portfolio-trackers)
- [照片编辑与管理](#photo-editing-and-management)
- [照片存储](#photo-storage)
- [隐私工具](#privacy-tools)
- [远程访问与控制](#remote-access-and-control)
- [路由器](#routers)
- [RSS 阅读器](#rss-readers)
- [搜索引擎](#search-engines)
- [社交网络与平台](#social-networks-and-platforms)
    - [博客平台（Medium / Blogger）](#blogging-platforms-medium)
    - [Fandom](#fandom)
    - [IMDb](#imdb)
    - [Imgur](#imgur)
    - [Instagram](#instagram)
    - [Quora](#quora)
    - [Reddit](#reddit)
    - [直播平台（Twitch）](#streaming-platforms-twitch)
    - [TikTok](#tiktok)
    - [Twitter](#twitter)
    - [YouTube](#youtube)
- [屏幕录制](#screen-recording)
- [团队协作工具](#teamworking-tools)
- [翻译](#translation)
- [未分类](#uncategorized)
- [实用工具](#utilities)
- [版本控制](#version-control)
- [视频与音频会议](#video-and-audio-conferencing)
- [视频编辑](#video-editing)
- [虚拟专用网络（VPN）](#vpns)
- [网页浏览器](#web-browser)
    - [浏览器扩展](#browser-addons)
    - [浏览器同步](#browser-sync)
- [举报平台](#whistleblowing)

## 双重身份验证（2FA）
⛔ 请避免使用无法**轻松**导出密钥的应用。
- Authy
- Google Authenticator [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅ 请改用
- [🤖](#icons) [Aegis](https://getaegis.app/) - 一款免费、安全、开源的安卓双重验证令牌管理应用。支持从多种其他应用（如 Google Authenticator、Authy 等）导入、保险库加密以及导出密钥（明文或加密）。
- [ente Auth](https://ente.com/auth/) - 一款免费、跨平台、端到端加密的开源双重验证令牌管理应用。由 [ente Photos](https://ente.com) 的开发团队打造，采用同样经受充分考验的基础设施。需要 ente.io 帐户。
- [Owky](https://github.com/charlietango/owky) [💀](#icons) - 面向 iOS 用户的免费开源双重身份验证器。
- [🤖](#icons) [FreeOTPPlus](https://github.com/helloworld1/FreeOTPPlus) - FreeOTP-Android 的增强分支，提供功能丰富的 2FA 身份验证器。
- [🤖](#icons) [Stratum](https://github.com/stratumauth/app) - 适用于安卓和 Wear OS 的双重身份验证（2FA）客户端。
- [Proton Authenticator](https://proton.me/authenticator) - Proton Authenticator 是一款[开源](https://proton.me/community/open-source#apps)、[端到端加密](https://proton.me/blog/password-encryption)且简单易用的免费 2FA 应用。
- [2FAS Auth](https://2fas.com/auth) - 适用于 iOS 和安卓的开源 TOTP 身份验证器，配有浏览器扩展，无需帐户。采用 GPL-3.0 许可。

[返回顶部 🔝](#contents)

## 分析
⛔ 请避免使用来自 Google、Facebook、Microsoft 或其他私营公司的分析服务。这类分析会损害用户隐私。

✅ **请改用**
- [Ackee](https://ackee.electerious.com/) - 可自行托管的网站分析工具。
- [Aptabase](https://aptabase.com) - 面向移动端和桌面应用的开源、隐私优先且简单易用的分析工具。
- [Cabin](https://withcabin.com) - 注重隐私与碳足迹的网站分析工具。
- [GoatCounter](https://www.goatcounter.com/) - 注重隐私、轻量且开源的网站分析平台。
- [Matomo](https://matomo.org/) - 保护你和客户数据隐私的 Google Analytics 替代方案。
- [Nullitics](https://nullitics.com/) - 无需费心、低成本的开源分析工具。
- [Pirsch](https://pirsch.io/) - 简单、尊重隐私的开源 Google Analytics 替代方案；轻量、无 Cookie，且易于集成到任何网站或后端。
- [Plausible](https://plausible.io/) - 简单且尊重隐私的 Google Analytics 替代方案。
- [Shynet](https://github.com/milesmcc/shynet) - 现代、尊重隐私且详细的网站分析工具，无需 Cookie 或 JavaScript 即可运行。
- [Swetrix](https://swetrix.com) - 注重隐私、完全无 Cookie、开源（且可自行托管）的网站分析服务。
- [Umami](https://umami.is/) - 简单、快速的 Google Analytics 网站分析替代方案。
- [Unidentified Analytics](https://unidentifiedanalytics.web.app/) - 基于 IP 的简易追踪工具，适用于各种场景（网页、命令行、电子邮件等）。无需帐户，方便开发者使用。
- [Rybbit](https://rybbit.com) - 开源且尊重隐私的 Google Analytics 替代方案，直观性提升 10 倍。

[返回顶部 🔝](#contents)

## 安卓

### 安卓应用商店
⛔ **请避免**
- Google Play Store [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅ **请改用**
- [F-Droid](https://f-droid.org/) - F-Droid 是一个可安装的目录，收录适用于安卓平台的 FOSS（自由及开源软件）应用。
	- [Droid-ify](https://github.com/Droid-ify/client) - 轻量级 F-Droid 客户端，采用 Material UI。
	- [Aurora Droid](https://github.com/whyorean/AuroraDroid) [💀](#icons) - 面向 F-Droid 的现代 FOSS 客户端。
	- [Foxy Droid](https://github.com/kitsunyan/foxy-droid) [💀](#icons) - 非官方 F-Droid 客户端，采用经典客户端的风格。
- [FossDroid](https://fossdroid.com/) - Fossdroid 致力于推广安卓平台上的自由开源应用：最新、热门且最受欢迎的应用。
- [SkyDroid](https://github.com/redsolver/skydroid) [💀](#icons) - 安卓去中心化应用商店。
- [Obtainium](https://github.com/ImranR98/Obtainium) - 直接从来源获取应用更新。
- [Accrescent](https://github.com/accrescent/accrescent) - 一款专注于安全、隐私和易用性的新型安卓应用商店。

### Google Play 商店的替代客户端
- [Aurora Store](https://auroraoss.com/download/#aurora-store) - 一款开源的 Google Play 商店替代前端客户端，注重隐私和现代化设计。

### 安卓去臃肿工具
⛔ **请避免**
- ADB AppControl - 一个简单的 ADB 封装工具，却有着[糟糕的隐私政策](https://adbappcontrol.com/en/terms/)，会收集设备信息、已安装/卸载的应用等数据。

✅ **请改用**
- [Universal Android Debloater Next Generation](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/) - 使用 ADB 为未 Root 安卓设备去臃肿的跨平台图形界面工具，以 Rust 编写。改善设备的隐私、安全性和电池续航。

### 安卓拨号器
⛔ **请避免**

从 Play 商店下载的第三方拨号器可能包含广告/追踪器，也可能要求不必要的权限。

✅ **请改用**
- [Fossify Phone](https://github.com/FossifyOrg/Phone) - 实用的通话管理器，支持电话簿、号码拦截和多 SIM 卡。

### 安卓文件管理器
⛔ **请避免**

预装文件管理器以及从 Play 商店下载的第三方文件管理器可能包含广告/追踪器，也可能要求不必要的权限。

✅ **请改用**

- [Amaze File Manager](https://github.com/TeamAmaze/AmazeFileManager) - 简洁美观、采用 Material Design 的安卓文件管理器。
- [Material Files](https://github.com/zhanghai/MaterialFiles) - 适用于安卓 5.0 及以上版本的开源 Material Design 文件管理器。
- [Ghost Commander](https://f-droid.org/packages/com.ghostsq.commander/) - 双面板文件管理器。
- [🤖](#icons) [Fossify File Manager](https://github.com/FossifyOrg/File-Manager) - 适用于安卓的开源文件管理器，无广告、无追踪且无需互联网权限。采用 GPL-3.0 许可。

### 安卓键盘
⛔ **请避免**
- GBoard (Google) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- SwiftKey [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **请改用**
- [AnySoftKeyboard](https://anysoftkeyboard.github.io/) - 你唯一需要的安卓键盘。自由如言论，也免费如啤酒。
- [FlorisBoard](https://github.com/florisboard/florisboard) - 适用于安卓 6.0 及以上设备的免费开源键盘。它力求现代、易用、可定制，同时充分尊重隐私。目前仍处于早期 Beta 阶段。
- [Futo Keyboard](https://keyboard.futo.tech/) - 现代化键盘，尊重隐私和安全，提供离线语音输入、滑行输入和智能自动纠错等功能。
- [Heliboard](https://github.com/HeliBorg/HeliBoard) - 注重隐私、可自定义的开源键盘，基于 AOSP / OpenBoard，并增加了许多功能和改进，包括自定义词典、主题和滑行输入支持。
- [Indic Keyboard](https://gitlab.com/indicproject/indic-keyboard) - 面向安卓用户的多用途键盘，适合使用印度语和其他印度本土语言输入消息、撰写电子邮件，也适合在手机上使用这些语言与英语并用。
- [OpenBoard](https://github.com/openboard-team/openboard) [💀](#icons) - 这是一款基于 AOSP 的 100% FOSS 键盘，不依赖 Google 二进制文件并尊重隐私。它已停止更新，但仍可使用。
- [Simple Keyboard](https://github.com/rkkr/simple-keyboard) - 纯粹的键盘，仅此而已。

### 安卓图库

手机图库是你生活中极为私密的一部分，其中可能包含记录亲密时刻、地点以及重要人物的照片和视频。保护图库隐私至关重要，既能防止这些信息被滥用，也能维护照片中亲友的隐私，因为他们可能并不同意分享自己的影像。

> [!NOTE]
> 如需私密地存储和备份照片，请参见[照片存储](#photo-storage)章节。

⛔ **请避免**
- **Google Photos** 存在隐私问题。它会收集大量关于你的数据，可在其[隐私政策](https://policies.google.com/privacy?hl=en-US#infocollect)中查看。Google 能扫描你的照片，并可能因各种原因将其标记，正如这起[事件](https://petapixel.com/2022/08/22/google-flags-photos-of-fathers-sick-son-as-child-abuse-informs-police/)所示。Google 还会利用你的照片改进其 AI 技术。
- **Amazon Photos** 也存在类似的隐私问题。和 Google Photos 一样，它会从你的照片图库收集大量信息。你可以在其[**示例**列表](https://www.amazon.com/gp/help/customer/display.html?nodeId=468496&ref_=footer_privacy#GUID-8966E75F-9B92-4A2B-BFD5-967D57513A40__SECTION_87C837F9CCD84769B4AE2BEB14AF4F01)中了解其收集的数据类型。
- **Samsung、Huawei、Xiaomi 等**图库应用。

✅ **请改用**
- [Aves](https://github.com/deckerst/aves) - 基于 Flutter 为安卓打造的精美图库和元数据浏览应用。
- [Fossify Gallery](https://github.com/FossifyOrg/Gallery) - Simple Gallery 的分支。使用这款照片和视频图库浏览回忆，不受干扰。

### 安卓启动器
⛔ **请避免**

从 Play 商店下载的第三方启动器可能包含广告/追踪器，也可能要求不必要的权限。

✅ **请改用**
- [Lawnchair](https://lawnchair.app/) - 无需花哨标语。
- [OpenLauncher](https://github.com/OpenLauncherTeam/openlauncher) [💀](#icons) - 可自定义的安卓开源启动器。
- [KISS](https://kisslauncher.com/) - 闪电般快速、开源且小于 200 KB 的安卓启动器。
- [Olauncher](https://github.com/tanujnotes/Olauncher) - 极简无广告的安卓启动器应用。
- [Pie Launcher](https://github.com/markusfisch/PieLauncher) - 安卓主屏幕启动器，使用动态饼状菜单取代固定位置的图标。
- [Bliss Launcher](https://gitlab.e.foundation/e/os/BlissLauncher3) - /e/ 安卓系统的默认启动器。
它让用户轻松创建和浏览应用分组，并在应用图标上显示通知角标。

[返回顶部 🔝](#contents)

## 人工智能

使用云端 AI 服务时，你输入的数据通常会被服务提供商收集和存储。这不仅可能包括请求内容，还包括时间戳或 IP 地址等元数据。根据隐私政策，第三方服务器可能允许其员工、合作伙伴甚至其他用户访问你的数据。数据可能被用于模型训练、研究乃至营销等各种用途。你向第三方 AI 服务发送的请求可能与用户信息和付款详情关联，从而将数据与你的身份联系起来。

#### ChatGPT

- [Jan](https://github.com/janhq/jan) - Jan 是 ChatGPT 的开源替代品，可完全离线运行于你的电脑上。
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - 使用纯 C/C++ 对 Facebook 的 LLaMA 模型进行推理，使其能够在本地 CPU 上运行。
- [LocalAI](https://github.com/mudler/LocalAI) - 可自行托管、由社区驱动的简单本地 OpenAI 兼容 API，使用 Go 编写。可作为 OpenAI 的直接替代品，在消费级硬件的 CPU 上运行。
- [ollama](https://github.com/ollama/ollama) - 在本地快速运行 Llama 2 和其他大型语言模型。
- [PasteGuard](https://github.com/sgasser/pasteguard) - 面向 LLM API 的隐私代理，在个人身份信息和机密数据到达云服务商之前将其屏蔽。可自行托管、兼容 OpenAI，并在响应中还原原始数据。
- [Shimmy](https://github.com/Michael-A-Kuykendall/shimmy) - 注重隐私的 AI 推理服务器，兼容 OpenAI API，不依赖云服务，并在本地处理模型。
- [Tinfoil](https://tinfoil.sh/) - 可验证隐私性的云端 AI 聊天和 OpenAI 兼容推理服务。采用 NVIDIA 机密计算，并将开源代码固定记录在透明日志中，以实现端到端可验证性。
- [Open WebUI](https://openwebui.com) - 面向 Ollama 和其他本地模型的自托管网页界面，为你提供私密的 ChatGPT 式聊天体验。采用 BSD-3 许可。
- [LibreChat](https://librechat.ai) - 自托管聊天界面，可通过一个由你掌控的私密 UI 连接多种 AI 模型。开源，采用 MIT 许可。

#### AI 编程

- [Continue](https://github.com/continuedev/continue) - 面向 VS Code 和 JetBrains 的开源自动编程助手——使用任意 LLM 编程的最简单方式。
- [Cline](https://cline.bot/) - 面向 VS Code 的开源 AI 编程工具。查看每项决策并使用自己的模型。
	- [Zoo Code](https://github.com/Zoo-Code-Org/Zoo-Code) - Cline 的改进分支；作为已停止维护的 Roo Code 的社区接替项目。
- [OpenCode](https://github.com/anomalyco/opencode/) - 开源编程智能体，可连接本地模型或你选择的任意服务提供商。
- [Aider](https://aider.chat) - 终端 AI 结对编程助手，使用你自己的 API 密钥编辑本地 Git 仓库中的代码。采用 Apache-2.0 许可。
- [Tabby](https://tabby.tabbyml.com) - 可在自有硬件上运行的自托管代码补全助手，是 GitHub Copilot 的替代品。采用 Apache-2.0 许可。

#### 文本转语音

- [Kokoro FastAPI](https://github.com/remsky/Kokoro-FastAPI) - 用于 [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)  文本转语音模型的 Docker 化 FastAPI 封装，支持 CPU、ONNX 和 NVIDIA GPU，并提供处理及自动拼接功能。
- [Piper](https://github.com/OHF-Voice/piper1-gpl) - 快速的本地神经文本转语音系统，语音效果出色，并针对 Raspberry Pi 4 进行了优化。
- [Espeak](https://github.com/espeak-ng/espeak-ng) - eSpeak NG 是一款开源语音合成器，支持一百多种语言和口音。合成的声音会比较机械。
- [Chatterbox](https://github.com/resemble-ai/chatterbox) - 完全在本机运行的本地文本转语音模型，支持声音克隆。开源，采用 MIT 许可。

#### 语音转文本

- **Models**
	- [Moonshine](https://github.com/moonshine-ai/moonshine) - 面向边缘设备的快速、准确自动语音识别（ASR）。
	- [OpenAI Whisper](https://github.com/openai/whisper) - Whisper 是可在本地离线运行的通用语音识别模型，能够转录多种语言之间的音频。
		- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - 高性能运行 OpenAI Whisper 自动语音识别（ASR）模型。
		- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) - 使用 CTranslate2 重新实现的 Whisper，可在本地实现最高四倍速转录。采用 MIT 许可。
	- [ParakeetTDT](https://parakeettdt.com/) - 高效音频转录工具，使用 NVIDIA 的先进 AI 语音识别模型，以前所未有的速度和准确度将语音转换为文本。

- **Apps and services**
	- [OpenWhispr](https://github.com/OpenWhispr/openwhispr) - 语音转文字听写与效率应用，提供 AI 智能体、会议转录、笔记以及本地/云端语音识别。隐私优先，支持跨平台，是 wisprflow 的开源替代品。
	- [Sasayaki](https://github.com/pluja/sasayaki) - 小巧的安卓听写应用，可将语音转化为清晰的文字。
	- [Speaches](https://github.com/speaches-ai/speaches) - 兼容 OpenAI API 的服务器，支持流式转录、翻译和语音生成。

#### 图像生成

- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) - ComfyUI 提供先进的界面，用于执行复杂的图像生成管线。适用于 Windows、Linux 和 macOS。
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) - 在本地使用最新的 AI 技术生成并创作令人惊艳的视觉媒体。
- [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) - 基于 ComfyUI 后端构建的 Stable Diffusion 和其他扩散模型本地网页界面。采用 MIT 许可。

[返回顶部 🔝](#contents)

## 书签管理
⛔ **请避免**
- Evernote Web Clipper - [隐私政策糟糕](https://tosdr.org/en/service/207)。[应用包含许多追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.evernote/latest/)，且要求过多权限。

✅  **请改用**
- [42links](https://42links.tuxproject.de) - 开源、自托管的极简书签存储服务。
- [Floccus](https://floccus.org/) - 在浏览器和设备之间私密地同步书签。
- [Grimoire](https://github.com/goniszewski/grimoire) - 现代化、开源且可自行托管的书签管理器。
- [Karakeep](https://karakeep.app/) - （原名 Hoarder）开源的“收藏一切”应用，使用 AI 自动为你保存的内容添加标签。
- [LinkAce](https://github.com/Kovah/LinkAce) - 开源、自托管的书签归档工具，可监控并整理已保存的链接（GPL-3.0）。
- [LinkDing](https://github.com/sissbruecker/linkding) - 开源、自托管的书签管理器，设计简洁、运行快速，并可通过 Docker 轻松部署（MIT）。
- [Shiori](https://github.com/go-shiori/shiori) - 使用 Go 编写的开源、自托管书签管理器，可作为命令行工具或网页应用使用（MIT）。
- [Wallabag](https://wallabag.org/) - 开源、可选自行托管的稍后阅读服务器；也提供注重隐私的付费托管服务。
- [Linkwarden](https://linkwarden.app) - 自托管书签管理器，可保存并归档你收藏网页的完整副本（AGPL-3.0）。
- [Readeck](https://readeck.org) - 单二进制文件的自托管稍后阅读应用，可保存并归档文章以供离线阅读（AGPL-3.0）。

### 书籍和网页批注/高亮管理

- [Blasta](https://git.xmpp-it.net/sch/Blasta) - 用于整理在线内容的协作式书签管理器。
- [Hypothesis](https://github.com/hypothesis/h/) - 随时随地与任何人一起为网页添加批注。
- [Kobuddy](https://github.com/karlicoss/kobuddy) - 将 Kobo 电子阅读器中的书签和批注导出为 .txt 文件。

[返回顶部 🔝](#contents)

## 验证码
⛔ **请避免**

Google 验证码使用 Cookie 追踪用户并对其 IP 地址进行评级。

- Google reCAPTCHA [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- hCaptcha [![](https://shields.tosdr.org/en_2207.svg)](https://tosdr.org/en/service/2207)

✅  **请改用**
- [Altcha.org](https://altcha.org) - 采用工作量证明机制的免费、开源且可自行托管的 CAPTCHA 替代方案。
- [mCaptcha](http://mcaptcha.org/) ([repo](https://github.com/mCaptcha/mCaptcha)) - 提供流畅用户体验的开源 CAPTCHA 系统。mCaptcha 使用基于 SHA256 的工作量证明（PoW）对用户进行速率限制。
- [Private Captcha](https://github.com/PrivateCaptcha/PrivateCaptcha) - 在欧盟开发、隐私优先且可自行托管的工作量证明 CAPTCHA 替代方案。

[返回顶部 🔝](#contents)

## 日历

⛔ **请避免**

- **Google Calendar** - 追踪你的日程，接入 Google 广告生态系统，并将数据存储在 Google 服务器上，且不提供端到端加密。

✅  **请改用**

- [🤖](#icons) [Etar](https://github.com/Etar-Group/Etar-Calendar) - 适用于安卓的开源日历应用，可与任何 CalDAV 服务器配合使用。
- [🤖](#icons) [Fossify Calendar](https://github.com/FossifyOrg/Calendar) - 简单的安卓离线日历应用，支持小组件。
- [🤖](#icons) [KashCal](https://github.com/KashCal/KashCal) - 离线优先的安卓日历，支持 iCloud/CalDAV 同步、全文搜索、重复事件和主屏幕小组件。采用 Apache 2.0 许可。
- [Nextcloud Calendar](https://apps.nextcloud.com/apps/calendar) - 适用于 Nextcloud、支持 CalDAV 的日历应用，可自行托管。
- [Proton Calendar](https://proton.me/calendar) - Proton 提供的端到端加密日历，是 Proton 隐私生态系统的一部分。

[返回顶部 🔝](#contents)

## 评论系统

⛔ **请避免**

- **Disqus** - 这些网站中包含大量追踪器。根据 Disqus 的隐私政策，它会收集 IP 地址、唯一 Cookie ID、设备 ID、登录数据、浏览器类型和版本、时区设置及位置、浏览器插件类型和版本、操作系统和平台，以及你用于访问该服务的设备上的其他技术信息。

✅  **请改用**

- [Comentario](https://comentario.app) - 轻巧、注重隐私的开源网页评论引擎，可为普通网页增添讨论功能。
- [Disgus](https://github.com/carlitoplatanito/disgus) - 由 Nostr 提供支持、可嵌入网站的评论系统。类似 Disqus，但基于 Nostr。
- [Isso](https://github.com/isso-comments/isso) - 使用 Python 和 JavaScript 编写的轻量级自托管评论服务器，旨在直接替代 Disqus。
- [Remark42](https://remark42.com) - 自托管、轻量、简单（但功能齐全）的评论引擎，不会监视用户。
- [Giscus](https://giscus.app) - 将讨论存储在 GitHub Discussions 中的评论系统，不需要数据库，也没有广告或追踪。开源，采用 MIT 许可。

[返回顶部 🔝](#contents)

## 伪装
### 图像
- [Fawkes](https://github.com/Shawn-Shan/fawkes) [💀](#icons) - 防范人脸识别系统、保护隐私的工具。
  - [CloakMe](https://github.com/pluja/CloakMe) [💀](#icons) - Fawkes 算法的网页界面。
- [ImageScrubber](https://github.com/everestpipkin/image-scrubber) [💀](#icons) - 用于匿名化抗议活动照片的易用浏览器工具 ([hosted version provided by everestpipkin](https://everestpipkin.github.io/image-scrubber/)).

### 文本
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - 使用密码和不可见字符，在纯文本中安全地隐藏机密信息 ([repo](https://github.com/kurolabs/stegcloak)).

[返回顶部 🔝](#contents)

## 云存储
⛔ **请避免**
- **Google Drive** - 由 Google 所有，因此其隐私政策[很糟糕](https://tosdr.org/en/service/217)。数据存储在其远程服务器上，你将失去对数据的控制权。该服务使用追踪器，且不提供加密。
- **DropBox** - [隐私政策糟糕](https://tosdr.org/en/service/270)。该应用包含[各种追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/)，且要求许多权限。
- **OneDrive** - 由 Microsoft 所有，其隐私政策[很糟糕](https://tosdr.org/en/service/244)。数据存储在其远程服务器上，你将失去对数据的控制权。该服务使用追踪器，且不提供加密。

✅  **请改用**
- [Nextcloud](https://nextcloud.com/) - 开源的自托管效率平台，让你掌控自己的数据。
- [Seafile](https://www.seafile.com/en/home/) - 高性能文件同步与共享工具，还包含 Wiki、所见即所得编辑及其他知识管理功能。
- [Peergos](https://peergos.org/) - 安全、私密的在线空间，可用于存储、共享和查看照片、视频、音乐及文档。还包含日历、新闻订阅、任务列表、聊天和电子邮件客户端。开源且可自行托管。
- [Proton Drive](https://proton.me/drive) - 为文件提供保护数据的瑞士端到端加密保险库。[阅读这篇关于气候活动人士被捕的文章](https://proton.me/blog/climate-activist-arrest).
- [PrivateStorage](https://private.storage/) - 无需帐户、注重隐私的云存储和文件夹同步服务，采用客户端加密。

**其他实用工具**
- [Cryptomator](https://cryptomator.org) - Cryptomator 能快速、轻松地加密数据。随后你可以将加密后的数据上传到常用云服务。
- [Syncthing](https://syncthing.net/) - 持续文件同步程序，可在两台或多台计算机之间实时同步文件，防止数据被窥探。
- [Rclone](https://rclone.org/) - Rclone 是用于管理云存储文件的命令行程序，是云服务商网页存储界面的功能丰富的替代品；与上面列出的工具一样，它还能加密云端文件。
- [Restic](https://restic.net/) - Restic 同样是用于管理各类云存储服务商文件的命令行程序，默认启用加密。其亮点包括以类似 Git 快照的方式浏览存储内容且不增加存储成本、重复数据删除，以及通过压缩大幅节省空间。

[返回顶部 🔝](#contents)

## 创作者工具

相比 Riverside.fm、Restream 和 Camtasia 等主流工具，优先选择注重数据隐私、消除第三方干预且功能透明并由社区支持的开源及 P2P 替代方案。

- [vdo.ninja](https://vdo.ninja/) - 功能强大的工具，可通过 WebRTC 将远程视频流接入 OBS 或其他工作室软件。
	- [socialstream.ninja](https://github.com/steveseguin/social_stream#readme) - 汇集社交平台的实时消息流，功能远不止于此。
- [OBS Studio](https://obsproject.com/) - 免费开源的视频录制与直播软件。
- [Screenity](https://screenity.io/) - 免费、私密且易用的屏幕录制工具。

[返回顶部 🔝](#contents)

## 数据库
[![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
⛔ 避免使用自己无法掌控的专有数据库，例如 Google Firebase。

✅ 请改用
- [Appwrite](https://appwrite.io/) - 面向 Web、移动端和 Flutter 开发者的安全开源后端服务器。
- [Supabase](https://supabase.com/) - 开源的 Firebase 替代方案（[Limited](https://github.com/supabase/supabase/issues/4934) [self-hosting](https://github.com/supabase/supabase/issues/4440#issuecomment-992108832))
- [Pocketbase](https://pocketbase.io/) - 使用 Go 编写、仅由单个文件构成的开源后端。
- [TrailBase](https://trailbase.io/) - 基于 Rust 和 SQLite 构建的开源单可执行文件 Firebase 替代方案，提供类型安全的 REST 和实时 API、身份验证及管理界面。采用 OSL-3.0 许可。
- [Baserow](https://baserow.io/) - 自托管的无代码数据库和电子表格，是开源 Airtable 替代方案。核心版本采用 MIT 许可。

[返回顶部 🔝](#contents)

## 开发者工具
- [Beekeeper Studio](https://www.beekeeperstudio.io) - 开源 SQL 编辑器和数据库管理器，其使命宣言明确承诺保护隐私。

### 集成开发环境（IDE）
⛔ 避免使用充斥追踪器和遥测功能的专有 IDE。

✅ 请改用
- [Neovim](https://neovim.io/) - 高度可扩展的 Vim 文本编辑器。
- [VSCodium](https://vscodium.com/) - VS Code 的自由开源软件二进制发行版。VS Code 源代码是开源的（MIT 许可），但可供下载的产品（Visual Studio Code）采用[这份非自由开源软件许可](https://code.visualstudio.com/license)，并包含遥测/追踪功能。

[返回顶部 🔝](#contents)

## 约会应用

Tinder 等应用会收集并出售你的个人隐私信息。研究发现，Tinder 尤其会[对同一服务向不同用户收取最高相差五倍的费用](https://www.mozillafoundation.org/en/blog/new-research-tinders-opaque-unfair-pricing-algorithm-can-charge-users-up-to-five-times-more-for-same-service/), [推算你的智力和其他心理测量数据，并将其出售给第三方](https://www.reddit.com/r/privacy/comments/k7x4s7/tinder_extrapolates_estimations_on_your/), [它可能比你自己更了解你](https://www.theguardian.com/technology/2017/sep/26/tinder-personal-data-dating-app-messages-hacked-sold)，此外还有许多你可以在网上查到的问题。

⛔ **请避免**
- [![](https://shields.tosdr.org/en_462.svg)](https://tosdr.org/en/service/462)
- Grindr
- Badoo
- Lovoo

✅  **请改用**
- [Alovoa](https://alovoa.com/) - 尊重隐私的免费开源约会平台。

[返回顶部 🔝](#contents)

## 设计工具

**Adobe** 在设计工具领域的主导地位限制了设计师的选择并损害其隐私。Adobe [不支持 Linux](https://helpx.adobe.com/in/download-install/kb/operating-system-guidelines.html)，这使设计师只能使用 Windows 或 macOS。此外，Adobe 通过 [Creative Cloud 收集数据](https://tosdr.org/en/service/417)和[追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.adobe.psmobile/latest/)进一步加剧隐私问题。他们还可能[使用用户的作品训练 AI](https://mastodon.art/@Krita/109632425661190494)，这可能引发知识产权问题。因此，设计师可以考虑使用开源且尊重隐私的替代方案，规避大部分此类问题。

### InDesign

✅  **请改用**
- [Scribus](https://www.scribus.net/) - 一款免费开源的桌面出版（DTP）软件，适用于大多数桌面操作系统。它用于页面布局、排版以及为专业级图像输出设备准备文件。Scribus 还可创建动画和交互式 PDF 演示文稿及表单。

### Photoshop / Illustrator

✅  **请改用**
- [GIMP](https://www.gimp.org/) - 免费开源的光栅图形编辑器，可用于图像处理（修饰）和编辑、自由绘图、不同图像文件格式间的转换及其他专业任务。它并非为绘图而设计，但一些艺术家和创作者也会这样使用。
- [Inkscape](https://inkscape.org/) - 适用于 GNU/Linux、Windows 和 macOS 的免费开源矢量图形编辑器。它功能丰富，广泛用于创作和技术插图，例如漫画、剪贴画、徽标、字体排印、图表和流程图。
- [Krita](https://krita.org/) - 免费开源的光栅图形编辑器，主要面向数字艺术和 2D 动画创作。
- [Excalidraw](https://github.com/excalidraw/excalidraw) - 用于绘制手绘风格图表的虚拟白板。

### Figma

✅  **请改用**
- [Penpot](https://penpot.app/) - Penpot 是面向产品团队的开源设计与原型制作平台。

[返回顶部 🔝](#contents)

## 域名与托管
⛔ 避免使用侵犯隐私的域名注册商。

✅ 请改用
- [OrangeWebsite](https://www.orangewebsite.com/) - 位于冰岛、支持言论自由的网页托管服务，可匿名注册并使用加密货币或现金付款。
- [1984 Hosting](https://1984.hosting/) - 位于冰岛、关注公民权利的托管和域名注册服务，支持 Monero 和匿名注册。
- [Find more at kycnot.me (VPS Category)](https://kycnot.me/?categories=vps) - 无需 KYC 的 VPS 和托管服务商。

[返回顶部 🔝](#contents)

## 下载管理器

- [Persepolis Download Manager](https://github.com/persepolisdm/persepolis) - Persepolis 是下载管理器，也是 Aria2 的图形界面。它使用 Python 编写，是自由开源软件的典范，适用于 GNU/Linux 发行版、BSD、macOS 和 Microsoft Windows。
- [Motrix](https://github.com/agalwood/Motrix) - 功能齐全的下载管理器。
- [Xtreme Download Manager](https://github.com/subhra74/xdm) - Xtreme Download Manager（XDM）是一款强大工具，可将下载速度提升至 5 倍，保存来自 YouTube、DailyMotion、Facebook、Vimeo、Google Video 等 1000 多个网站的流媒体视频，续传中断/失效的下载，并可安排和转换下载任务。
- [axel](https://github.com/axel-download-accelerator/axel) - 轻量级命令行下载加速器，支持 HTTP、HTTPS、FTP 和 FTPS 协议。

[返回顶部 🔝](#contents)

## 电子书

⛔ **请避免**

商业电子书平台会追踪你的阅读习惯，将购买内容绑定到可能被封禁的帐户，并要求持续在线激活。

- **Amazon Kindle** - 会追踪阅读活动，要求使用 Amazon 帐户，且有记录在案的[远程删除](https://www.nytimes.com/2009/07/18/technology/18kindle.html).
- **Google Play 图书** - 绑定 Google 帐户、追踪阅读数据，且不提供纯离线模式。
- **Kobo / Apple Books** - 要求注册帐户，且默认将阅读数据同步到公司服务器。

✅ **请改用**

- [Calibre](https://calibre-ebook.com/) - 适用于 Linux、Windows 和 macOS 的开源电子书管理器，支持格式转换、元数据编辑并内置阅读器（GPL-3.0）。
- [Kavita](https://github.com/Kareadita/Kavita) - 跨平台自托管数字图书馆，支持电子书和漫画，并内置网页阅读器（GPL-3.0）。
- [Komga](https://github.com/gotson/komga) - 自托管的漫画、杂志和电子书媒体服务器，提供响应式网页界面并支持 OPDS（MIT）。

[返回顶部 🔝](#contents)

## 加密
请记住：缺乏强加密时，许多人都可能系统性地监视你。

- [Veracrypt](https://www.veracrypt.fr/en/Home.html) - VeraCrypt 是适用于 Windows、macOS 和 Linux 的免费开源磁盘加密软件。
- [Shufflecake](https://shufflecake.net/index.html) - 免费开源工具，可在 Linux 上创建多个隐藏文件系统并提供合理否认能力。
- [Hat.sh](https://hat.sh/) - 免费、快速、安全且无需服务器的文件加密工具。
- [Cryptomator](https://cryptomator.org/) - Cryptomator 能快速、轻松地加密数据。随后你可以将加密后的数据上传到常用云服务。.
- [Stegcloak](https://stegcloak.surge.sh/) [💀](#icons) - 使用密码和不可见字符，在纯文本中安全地隐藏机密信息。
- [Photok](https://github.com/leonlatsch/Photok) - Photok 是免费的照片保险箱。它会在设备上加密存储照片，并将其隐藏起来。
- [age](https://age-encryption.org) - 现代化命令行文件加密工具，密钥短小，无需管理配置或密钥环。开源，采用 BSD-3 许可。
- [Tomb](https://dyne.org/software/tomb/) - 用于在 GNU/Linux 上创建和管理加密存储文件夹的命令行工具，基于标准 LUKS 和 cryptsetup 构建。

### 操作系统加密

- [Cryptsetup](https://gitlab.com/cryptsetup/cryptsetup) - 适用于 Linux 的全盘加密。Cryptsetup 是一款实用工具，可便捷地设置基于
DMCrypt 内核模块的磁盘加密。

[返回顶部 🔝](#contents)

## 文件管理与共享
⛔ **请避免**
- **WeTransfer** - [隐私政策糟糕](https://tosdr.org/en/service/214)。文件未进行端到端加密。网站包含大量分析工具和追踪器。
- **SendAnywhere** - 没有端到端加密。网站包含来自 Facebook、Google、Cloudflare 等的大量分析工具和追踪器。

✅ **请改用**
- [Blaze](https://blaze.vercel.app/) - 快速、P2P 且截然不同的文件传输方式。
- [Blindsend](https://github.com/blindnet-io/blindsend) [💀](#icons) - 用于私密、端到端加密文件交换的开源工具。
- [Croc](https://github.com/schollz/croc) - 轻松、安全地在计算机之间发送内容。
- [Dat-cp](https://github.com/tom-james-watson/dat-cp) [💀](#icons) - 使用点对点 Dat 网络在网络中的主机之间复制文件。
- [Destiny](https://leastauthority.com/community-matters/destiny/) - 实时将文件直接发送给接收方。与人道主义救援组织（HRO）共同开发，作为免费的隐私增强技术替代方案。
- [Gokapi](https://github.com/Forceu/Gokapi) - 轻量级自托管 Firefox Send 替代品，不公开上传文件。支持 AWS S3。
- [Lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - “让我们上传那个文件”——文件共享软件。
- [Localsend](https://localsend.org/) - 向附近设备共享文件。免费、开源且跨平台。
- [Magic Wormhole](https://github.com/magic-wormhole/magic-wormhole) - 安全地在计算机之间传输内容。
- [OnionShare](https://github.com/onionshare/onionshare) - 开源工具，可让你通过 Tor 网络安全、匿名地共享文件、托管网站并与朋友聊天。
- [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) - 基于 paperless-ng、由社区支持的增强版 paperless。
- [PairDrop](https://github.com/schlagmichdoch/PairDrop) - Snapdrop 的改进版本，还支持配对设备并在网络之外共享文件。
- [QRcp](https://github.com/claudiodangelis/qrcp) - 无需离开终端，只需扫描二维码即可通过 Wi-Fi 将文件从电脑传输到移动设备。
- [Send](https://gitlab.com/timvisee/send) - 简单、私密的文件共享工具。（Mozilla Send 分支）
- [Sharik](https://github.com/marchellodev/sharik) [💀](#icons) - Sharik 可通过 Wi-Fi 连接或网络共享（Wi-Fi 热点）工作，无需互联网连接。适用于 Android、iOS、Linux、macOS 和 Windows。
- [Snapdrop](https://github.com/RobinLinus/snapdrop) - 受 Apple AirDrop 启发、用于本地文件共享的渐进式网页应用。
- [Winden](https://winden.app/) - 可在浏览器中使用的便捷版 Magic Wormhole，无需安装应用。
- [Yopass](https://github.com/jhaals/yopass) - 安全共享机密、密码和文件。
- [scrt.link](https://scrt.link/file) - 端到端加密文件传输，最多支持 100 GB 文件并保留 30 天。数据存储在瑞士。

[返回顶部 🔝](#contents)

## 健身与健康
⛔ 健康是你**私人数据**中**极其**重要的一部分，你应当**高度重视**。此外，健康数据也是最受觊觎的数据之一。请勿使用 Google、Fitbit、Huawei、Xiaomi 或任何试图收集你个人数据的公司的应用。

如果你需要**月经周期追踪**应用，请不要使用 Clue、Period Tracker 等应用。那些可爱的粉色应用会贪婪地收集你的经期和私密生活数据，并肯定会将其出售。请保护好个人隐私。查看下方列表即可找到不错的替代方案。

✅  **请改用**

### 健身追踪器

- [🤖](#icons) [Fitotrack](https://codeberg.org/jannis/FitoTrack) - 注重隐私的安卓健身追踪器。
- [🤖](#icons) [OpenTracks](https://codeberg.org/OpenTracksApp/OpenTracks) - OpenTracks 是一款充分尊重隐私的运动追踪应用。
- [🤖](#icons) [Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge) - 可替代设备厂商闭源安卓应用的免费、无云端服务方案。
- [FitTrackee](https://codeberg.org/FitTrackee/FitTrackee) - 自托管网页应用，可通过 GPS 文件记录并分析户外活动，是 Strava 的替代品（AGPL-3.0）。

### 训练计划工具

- [wger](https://wger.de/en/software/features) - 免费、开源、自托管的网页应用，用于管理锻炼、训练计划和营养。

### 食品
- [OpenFoodFacts](https://world.openfoodfacts.org/) - Open Food Facts 是一个由所有人共同建立、服务于所有人的食品数据库，可帮助你做出更好的饮食选择。
    - [OFF Apps](https://world.openfoodfacts.org/open-food-facts-mobile-app) - 开源的安卓和 iOS 应用，可扫描食品条形码并查看成分、添加剂和营养数据。

### 月经周期追踪器
- [🤖](#icons) [Bluemoon](https://gitlab.com/ngrob/bluemoon-android) - 开源、尊重隐私的月经追踪应用。你的经期，你的数据！
- [🤖](#icons) [Drip](https://dripapp.org/) - 月经周期和生育力追踪。你输入的所有内容都保留在设备上。
- [Euki](https://eukiapp.org/) - 不会追踪你的经期追踪器。
- [🤖](#icons) [Periodical](https://codeberg.org/askaaron/periodical) - 用于追踪月经并计算可能受孕日期的日历。
- [Poppy](https://poppy.usenostr.org) - Poppy 是一款在浏览器中运行的私密经期追踪器。数据保存在本地，也可通过 Nostr 中继同步和备份，无需 Poppy 服务器或帐户，所有数据均经过端到端加密。

### 医疗健康
- [Fasten](https://github.com/fastenhealth/fasten-onprem) [💀](#icons) - Fasten 是开源、自托管的个人/家庭电子病历聚合工具，旨在整合数千家保险机构、医院和诊所的数据。

[返回顶部 🔝](#contents)

## 字体
⛔ **请避免**
- Google Fonts (no selfhosted) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**
### Google Fonts 替代方案
- [coolLabs Fonts](https://fonts.coollabs.io/) - 尊重隐私、可直接替代 Google Fonts 的方案。
- [Bunny Fonts](https://fonts.bunny.net/) - Bunny Fonts 是开源、隐私优先的网页字体平台，旨在让互联网重新重视隐私。

### 字体铸造厂
- [Velvetyne](https://www.velvetyne.fr/) - 法国字体铸造厂，发布自由开源字体，可免费用于个人和商业用途。
- [OpenFoundry](https://open-foundry.com/) - 精选平台，展示可免费使用和修改的开源字体。

[返回顶部 🔝](#contents)

## 表单
⛔ **请避免**
- Google Forms [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**
- [TypeBot](https://typebot.com) - 开源对话式表单。
- [CryptPad Forms](https://cryptpad.fr/form/) - 属于 CryptPad 端到端加密开源协作套件的一部分。
- [FramaForms](https://framaforms.org/) - 轻松设计在线问卷，同时尊重受访者。
- [Formbricks](https://formbricks.com) - 自托管的调查问卷和表单构建工具，可在不将数据交给第三方的情况下收集回复（AGPL-3.0）。

[返回顶部 🔝](#contents)

## 游戏

### 马力欧赛车

Nintendo [会收集用户数据](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/)；即使你将其关闭，他们也可以[重新开启](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg)。此外，该服务有付费方案，并非所有人都负担得起。

✅  **请改用**

- [SuperTuxKart](https://supertuxkart.net/Main_Page) - 3D 开源街机竞速游戏，包含多种角色、赛道和玩法模式。
- [Sonic Robo Blast 2 Kart](https://mb.srb2.org/addons/srb2kart.2435/) - SRB2Kart 是一款经典风格的卡丁车竞速游戏，拥有精美赛道和古怪道具。

### Minecraft

[![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

该游戏归 Microsoft 所有。此外，自 2022 年 3 月 11 日起，游玩 Minecraft 还需要 Microsoft 帐户。Microsoft 会在帐户创建后不久锁定部分帐户，并[强迫用户](https://github.com/MultiMC/Launcher/issues/4093)[提供](https://www.reddit.com/r/privacy/comments/e6x27o/microsoft_forcing_me_to_give_then_my_phone_number/)一个**电话号码**。参见：[Minecraft FAQ](https://help.minecraft.net/hc/en-us/articles/360050865492-Minecraft-Java-Edition-Account-Migration-FAQ)、[1](https://www.reddit.com/r/Minecraft/comments/sl8pkv/how_can_my_friend_migrate_her_account_to/hvq2sv6/)、[2](https://www.reddit.com/r/privacy/comments/spcuj4/microsoft_is_going_to_attempt_to_move_everyone_on/)

自 v21w38a 起，游戏内置了[无法选择退出的遥测功能](https://bugs.mojang.com/browse/MC-237493)。此外，[游戏还受制于](https://www.minecraft.net/en-us/terms)[Microsoft 隐私条款](https://privacy.microsoft.com/en-us/privacystatement)，其隐私条款令人担忧。

✅  **请改用**
- [Luanti](https://www.luanti.org/) - 功能丰富的开源体素游戏引擎。
    - [Mineclonia](https://content.luanti.org/packages/ryvnf/mineclonia/) - 受 Minecraft 启发的生存沙盒游戏，是 MineClone2 的分支，注重稳定性、多人游戏性能和功能。

#### Minecraft 插件

如果你仍想玩 Minecraft，可以添加一些插件来稍微保护隐私。不过请记住，这样做仍是在支持 Microsoft。

✅  **请改用**
- [No-Chat-Reports](https://github.com/Aizistral-Studios/No-Chat-Reports) - Spigot 插件，可从玩家消息中移除加密签名，但其设计会导致任何聊天插件无法使用。
- [FreedomChat](https://github.com/ocelotpotpie/FreedomChat) - No-Chat-Reports 的优秀替代品，其设计不会导致任何聊天插件无法使用。
- [No-Telemetry](https://github.com/kb-1000/no-telemetry) - 用于禁用 Minecraft 1.18（快照 21w38a）引入的使用数据收集（即遥测）的模组。

### 宝可梦

Nintendo [会收集用户数据](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/)；即使你将其关闭，他们也可以[重新开启](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg)。此外，该服务有付费方案，并非所有人都负担得起。

✅  **请改用**

- [Pokete](https://github.com/lxgr-linux/pokete) - 一款小型终端游戏，风格仿照 Gamefreak 制作的一款非常受欢迎的经典游戏。

### 刺猬索尼克

- [Sonic Robo Blast 2](https://www.srb2.org/) - Sonic Robo Blast 2 是一款 3D 开源《刺猬索尼克》同人游戏，使用经过修改的 Doom 移植版 Doom Legacy 构建。

[返回顶部 🔝](#contents)

## 家庭助手

不要使用 Google Home 或 Alexa。真的不要，也不要把它们送给任何人。它们会为监控打开家门，还能随时将这些自动更新的设备变成监控设备。

相关文章： [1](https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistants), [2](https://www.theregister.com/2020/08/08/ai_in_brief/), [3](https://www.networkworld.com/article/3190176/virtual-assistants-hear-everything-so-watch-what-you-say-i-m-not-kidding.html), [4](https://www.democracynow.org/2017/1/4/privacy_advocates_warn_of_potential_surveillance), [5](https://www.mirror.co.uk/news/weird-news/woman-finds-amazon-thousands-recordings-25240984), [6](https://www.seattletimes.com/business/locked-down-lawyers-warned-alexa-is-hearing-confidential-calls/), [7](https://hide.me/en/blog/assistant-devices-are-a-privacy-nightmare/).

- Google Home [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Alexa [![](https://shields.tosdr.org/en_190.svg)](https://tosdr.org/en/service/190)
- Cortana [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Siri [![](https://shields.tosdr.org/en_158.svg)](https://tosdr.org/en/service/158)

✅  **请改用**
- [OpenVoiceOS](https://openvoiceos.org) - 开源语音助手，也是仍在维护的 Mycroft 后继项目，可完全离线运行于自有硬件。采用 Apache-2.0 许可。
- [Home Assistant](https://www.home-assistant.io/) - 开源智能家居自动化平台，将本地控制和隐私放在首位。

[返回顶部 🔝](#contents)

## 即时通讯
**请查看[此网站](https://www.securemessagingapps.com/)进行比较。*

⛔ **请避免**
- WhatsApp | [![](https://shields.tosdr.org/en_198.svg)](https://tosdr.org/en/service/198)
- Instagram DM | [![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)
- Facebook Messenger | [![](https://shields.tosdr.org/en_182.svg)](https://tosdr.org/en/service/182)
- Skype | [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Zoom | [![](https://shields.tosdr.org/en_2198.svg)](https://tosdr.org/en/service/2198)
- Google Hangouts / Chat | [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**

### 去中心化
没有单一的控制或故障点。去中心化网络由全球各地不同志愿者运营的服务器组成。你可以选择数据的存储位置，也可以自行托管服务器。协议会稍复杂一些（因为服务器之间需要联邦互通），消息也会附带一些额外元数据（但不会损害隐私）。

- [Matrix (Protocol)](https://matrix.org/) - 用于安全、去中心化通信的开放网络。
   - [Element](https://element.io/) - 面向团队、朋友和组织的一体化安全聊天应用。让你掌控对话，远离数据挖掘和广告，并采用端到端加密。
   - [Cinny](https://cinny.in/) - 主打简洁、优雅、安全界面的 Matrix 客户端。
- [Jabber / XMPP (Protocol)](https://xmpp.org/) - 通用开放的消息标准。经过实践检验，独立自主，注重隐私并采用端到端加密。
  - [🤖](#icons) [Conversations](https://conversations.im/) - 面向安卓 4.0 及以上智能手机的 Jabber/XMPP 客户端，经过优化以提供独特的移动体验。
  - [AstraChat](https://astrachat.com/) - 另一款 XMPP 客户端。
  - [Dino](https://dino.im/) - 适用于 Linux 的现代 XMPP 桌面客户端，支持 OMEMO 和 OpenPGP 端到端加密。开源，采用 GPL-3.0 许可。
  - [Gajim](https://gajim.org/) - 跨平台 XMPP 客户端，支持 OMEMO 加密，可在 Linux、Windows 和 macOS 上运行。开源，采用 GPL-3.0 许可。
  - [Snikket](https://snikket.org/) - 一键式自托管 XMPP 服务，整合服务器以及配套的移动端和桌面客户端。开源，基于 Docker。
- [DeltaChat](https://delta.chat/) - 通过加密电子邮件聊天。
- [Session](https://getsession.org/) - 极度注重隐私与匿名性，采用区块链技术。
- [SimpleX Chat](https://simplex.chat/) - 首个设计上完全私密的聊天平台——它无法访问你的社交关系图谱。
- [Status](https://status.app/) - Status 是一款安全的消息应用、加密货币钱包和 Web3 浏览器，采用最先进的技术构建。

### 中心化
服务提供商负责运行供用户通信的服务器。这会形成单一故障点和控制点；不过，如果协议和代码均开源并经过审计，仍然可以完全安全可信。

- [Threema](https://threema.com/en) - 将安全与隐私置于首位的即时通讯工具。一次付费，永久聊天。不收集用户数据。客户端开源。
- [Signal](https://signal.org/) - 极度注重隐私，同时具备你期待的所有功能。设计上采用强加密。100% 开源。
  - [🤖](#icons) [Molly](https://github.com/mollyim/mollyim-android) - 兼容 Signal 的分支客户端，并进行了一些安全性改进。

### 点对点（P2P）
不涉及服务器，所有通信都在对等方之间直接进行，没有故障点或控制点。由于没有服务器，功能较少，消息传递也可能更慢。适用于关键对话的最佳选择。

- [Tox](https://tox.chat/) - Tox 是一款易于使用的软件，让你与朋友和家人联系，而无需担心他人窃听。
- [Briar](https://briarproject.org/) - 点对点加密消息和论坛。
- [Tinfoil Chat](https://github.com/maqp/tfc) - 通过洋葱路由的端点安全消息系统。
- [Berty](https://berty.tech/) - 隐私优先的消息应用，无论是否有互联网、蜂窝数据或是否信任网络，都能使用。

[返回顶部 🔝](#contents)

## 个人简介链接工具

- [Keyoxide](https://keyoxide.org/) - 用于建立去中心化在线身份的现代、安全且尊重隐私的平台。
- [LinkStack](https://linkstack.org/) - 开源、自托管的 Linktree 替代方案。

[返回顶部 🔝](#contents)

## 短链接服务

⛔ **请避免**

- Bit.ly

✅  **请改用**

- [MagLit](https://maglit.me) - 加密且尊重隐私的短链接服务，还支持 Magnet 链接。
- [Dub](https://github.com/dubinc/dub) - 你可以自行托管 Dub.co，以更好地掌控数据和设计。
- [Yourls](https://yourls.org/) -  使用 PHP 构建的自托管 URL 缩短器。
- [tnyr.me](https://tnyr.me) - 零信任 URL 缩短器，采用无密码端到端加密。
- [Kutt](https://kutt.it/) - 自托管 URL 缩短器，支持自定义域名和密码保护链接。开源，采用 MIT 许可。
- [Shlink](https://shlink.io/) - 自托管 URL 缩短器，在你的服务器上记录点击分析数据。开源，采用 MIT 许可。

[返回顶部 🔝](#contents)

## 位置追踪

⛔ **请避免**

- Google location history [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Google FindMyDevice [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**

### 追踪
- [Nextcloud Phonetrack](https://apps.nextcloud.com/apps/phonetrack) - 用于追踪位置历史的 Nextcloud 应用，配有[安卓应用](https://gitlab.com/eneiluj/phonetrack-android)（也[支持其他应用](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)）。支持离线缓存位置并批量发送到服务器。官方应用具有出色的省电选项。
- [OwnTracks](https://owntracks.org/) - 用于显示当前位置的追踪工具（位置历史记录功能有限）。
- [Traccar](https://www.traccar.org/) - 专为 GPS 记录设备打造的位置追踪软件。
- [Dawarich](https://github.com/Freika/dawarich) - Google 位置记录的自托管替代方案。

### 查找我的设备
- [Find My Device](https://gitlab.com/Nulide/findmydevice) - 通过短信查找你的安卓设备。
- [GPSlogger](https://github.com/mendhak/gpslogger) - 轻量级安卓 GPS 记录应用。无需服务器和互联网。记录保存为本地存储中的简单文件。

[返回顶部 🔝](#contents)

## 邮件服务
⛔ **请避免**
- Gmail
- Outlook
- Yandex Mail
- Yahoo! Mail

✅ **请改用**

### 第三方服务
- [Forward Email](https://forwardemail.net) - 100% 开源且注重隐私的电子邮件服务。
- [ProtonMail](https://proton.me/mail) - 安全的电子邮件服务，总部位于瑞士。[阅读这篇关于气候活动人士被捕的文章](https://proton.me/blog/climate-activist-arrest).
- [Tuta](https://tuta.com/) - 人人皆可使用的安全电子邮件服务。开源。
- [mailbox.org](https://mailbox.org/) - 位于德国的付费电子邮件、日历和办公套件，内置 PGP 加密且无广告。
- [Riseup](https://riseup.net/en/about-us) - 为致力于推动解放性社会变革的个人和团体提供在线通信工具。
- [Mailfence](https://mailfence.com) - 安全且私密的电子邮件服务。

### 自行托管
- [Docker mail server](https://github.com/docker-mailserver/docker-mailserver) - 使用 Docker 的完整但简单的邮件服务器（SMTP、IMAP、LDAP、反垃圾邮件、杀毒等）。
- [Mailcow: dockerized](https://github.com/mailcow/mailcow-dockerized) - 带有“哞”特色的邮件服务器套件。
- [Mail-in-a-box](https://github.com/mail-in-a-box/mailinabox) - Mail-in-a-Box 通过提供一键式、易于部署的 SMTP 及其他服务一体化服务器，帮助个人重新掌控电子邮件。
- [Mox](https://github.com/mjl-/mox) - 现代化、功能齐全的开源安全邮件服务器，可低维护运行自托管邮件服务。
- [Stalwart](https://stalw.art/) - 使用 Rust 编写的一体化邮件服务器，涵盖 SMTP、IMAP 和 JMAP，并经过两次独立安全审计（AGPL-3.0）。

### 客户端

#### 安卓 / iOS
- [🤖](#icons) [FairEmail](https://github.com/M66B/FairEmail) - 功能完备、开源且尊重隐私的安卓电子邮件应用。
- [🤖](#icons) [K9](https://k9mail.app/) - 安卓开源电子邮件应用。

#### 桌面端
- [Thunderbird](https://www.thunderbird.net) - 免费、可自定义的开源电子邮件客户端。

### 邮箱别名服务（匿名转发）

使用邮箱别名，你终于可以为每个网站创建不同的身份。抵御垃圾邮件、网络钓鱼和数据泄露。你可以选择自行托管下列任一方案，也可以使用它们提供的平台服务。

- [SimpleLogin](https://github.com/simple-login/app) - 开源、可自行托管的邮箱别名服务，现归 Proton 所有（AGPL-3.0）。
- [AnonAddy](https://github.com/anonaddy/anonaddy) - 开源、可自行托管的邮箱别名与转发服务，现名为 addy.io（AGPL-3.0）。

[返回顶部 🔝](#contents)

## 地图与导航
⛔ **请避免**
- Google Maps
- Apple Maps
- Yandex Maps
- Bing Maps
- Waze
- Sygic
- HERE WeGo
- Petal Maps

✅ **请改用**
- [Open Street Map (OSM)](https://www.openstreetmap.org/) - OpenStreetMap 由地图绘制者社区共同建设，成员贡献并维护世界各地的道路、步道、咖啡馆、火车站等数据。
  - [OSMAnd](https://osmand.net/) - 使用 OSM 的安卓/iOS 导航应用，功能丰富，具备你期待的一切。
- [Organic Maps](https://organicmaps.app/) - 适合徒步者和骑行者的出色离线地图。
- [CoMaps](https://www.comaps.app/) - 基于 OSM、由社区主导开发的免费开源地图应用。

[返回顶部 🔝](#contents)

## 媒体流媒体平台
⛔ **请避免**
- **Amazon Prime** - [隐私政策糟糕](https://tosdr.org/en/service/2444)。应用包含 [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/)。作为流媒体应用，却要求许多权限。
- **Netflix** - [隐私政策糟糕](https://tosdr.org/en/service/185)。应用包含 [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/)。作为流媒体应用，却要求许多权限。
- **Disney Plus** - [隐私政策极差](https://tosdr.org/en/service/2745)。应用包含[各种追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/)。作为流媒体应用，却要求许多权限。
- **Plex** - [隐私政策可疑](https://tosdr.org/en/service/1567)。应用包含[大量追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/)。作为流媒体应用，却要求的权限实在太多。
- **Spotify** - [隐私政策极差](https://tosdr.org/en/service/225)。应用包含[大量追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/)。作为流媒体应用，却要求的权限实在太多。
- **Deezer** - [隐私政策糟糕](https://tosdr.org/en/service/2516)。应用包含[大量追踪器](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/)。作为流媒体应用，却要求的权限实在太多。
- **SoundCloud** - [隐私政策可疑](https://tosdr.org/en/service/276)。应用包含[大量追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/)。作为流媒体应用，却要求的权限实在太多。

✅  **请改用**
#### 视频与音频
- [Jellyfin](https://jellyfin.org/) - Jellyfin 是由志愿者打造的媒体解决方案，让你掌控自己的媒体。从自有服务器向任意设备流媒体播放，不受限制。
- [Dim](https://github.com/Dusk-Labs/dim) - Dim 是一款自托管媒体管理器，只需简单配置即可整理和美化媒体收藏，让你随时随地访问和播放。
- [Stremio](https://www.stremio.com/) - Stremio 是现代化媒体中心，为视频娱乐提供一站式解决方案。

#### 音频
- [Funkwhale](https://funkwhale.audio/) - 享受和分享音乐的社交平台（SoundCloud 替代品）。
- [Subsonic](https://www.subsonic.org/pages/index.jsp) - 完整的个人音乐流媒体服务。
- [Ampache](https://ampache.org/) - 基于网页的音频/视频流媒体应用和文件管理器。
- [Koel](https://koel.dev/) - 实用的个人音乐流媒体服务器。
- [Nuclear](https://nuclearplayer.com/) - 专注于免费来源流媒体播放的现代音乐播放器。
- [Navidrome](https://navidrome.org/) - 轻量、快速且独立运行的个人音乐流媒体服务。
- [🤖](#icons) [mucke](https://github.com/moritz-weber/mucke) - 用于播放本地文件、提供独特自定义播放选项的音乐播放器。

**Spotify 替代客户端**
 > 尽管这些客户端的追踪较少，但它们仍然完全无法保护你的隐私，因为你依然会使用自己的**高级版（付费、实名）**帐户从 Spotify 服务器进行流媒体播放。

\* 需要高级版订阅。

- [Spot*](https://github.com/xou816/spot) - 使用 GTK 和 Rust 构建的原生 Spotify 客户端。
- [psst*](https://github.com/jpochyla/psst) - 快速、多平台且具有原生图形界面的 Spotify 客户端。
- [ncspot*](https://github.com/hrkfdn/ncspot) - 使用 Rust 编写的跨平台 ncurses Spotify 客户端，灵感来自 ncmpc 等项目。

无需高级版订阅：

- [Spotube](https://github.com/team-spotube/spotube) - 轻量级的免费 Spotify 跨平台客户端。

**YouTube Music 替代客户端**
- [Beatbump](https://github.com/snuffyDev/Beatbump) [💀](#icons) - YouTube Music 的替代前端；无广告，并采用自定义 API 封装。
- [SimpMusic](https://github.com/Maxrave-Dev/SimpMusic) - 开源且积极维护的安卓 YouTube Music 客户端（已停止维护的 ViMusic 和 RiMusic 的后继项目）。

**Deezer 替代客户端**
- [dzr](https://github.com/yne/dzr) - 适用于 Linux、BSD、Android+Termux 的命令行 Deezer 播放器。

#### 播客

⛔ **请避免**

- **Spotify** - [隐私政策极差](https://tosdr.org/en/service/225)。它会收集大量关于你的数据：情绪、空闲时间、喜好、厌恶、朋友等……此外，其应用包含[过多追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/)。
- **iVoox** - 其应用[布满追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/)，网站也有追踪器。
- **Audible** - [隐私政策极差](https://tosdr.org/en/service/190)，其应用含有[大量追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.audible.application/latest/)。
- **Deezer** - [隐私政策糟糕](https://tosdr.org/en/service/2516)。应用包含[大量追踪器](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/)。作为流媒体应用，却要求的权限实在太多。

✅  **请改用**

- [Antennapod](https://antennapod.org) - 完全开放的播客播放器，可订阅任意 RSS 订阅源。
- [Castopod](https://castopod.org) - 轻松自行托管播客，掌控自己的创作，并直接与听众交流，无需中间方。播客及其听众只属于你。
- [Funkwhale](https://funkwhale.audio/) - 享受和分享音频的社交平台。

[返回顶部 🔝](#contents)

## 笔记与任务
⛔ **请避免**

这些服务商提供的应用和服务布满数据追踪器。此外，它们大多会将笔记存储在自己的服务器上，且不提供任何加密。

- Google Keep
    - [Keep To Markdown](https://github.com/erikelisath/keep-to-markdown) - 将 Google Keep 笔记转换为标准 Markdown + YAML 页眉格式。
- Evernote
- Squid
- Notion
- OneNote

✅  **请改用**

- [Anytype](https://www.anytype.io/) - 开源的 Notion 替代品，支持端到端加密、云端和局域网同步，也可自行托管。
- [AppFlowy](https://appflowy.com/) - 开源的 Notion 替代品。你可以掌控自己的数据和自定义设置。
- [HedgeDoc](https://hedgedoc.org/) - 原名 CodiMD（社区版），是编写和分享 Markdown 的优秀平台。
- [Joplin](https://github.com/laurent22/joplin) - 支持同步和加密的笔记与待办事项应用。
- [Logseq](https://logseq.com/) - 隐私优先的 WorkFlowy 替代品。
- [Memos](https://github.com/usememos/memos) - 开源、自托管的备忘录中心，具备知识管理和社交功能。
- [Nextcloud Notes](https://github.com/nextcloud/notes/) - 这款笔记应用是 Nextcloud 的无干扰笔记工具。
	- [Nextcloud Notes app](https://github.com/nextcloud/notes-android) - Nextcloud Notes 的安卓客户端。
- [Notally](https://github.com/OmGodse/Notally) - 精美的笔记应用（仅本地存储，不支持同步）。
- [Notesnook](https://notesnook.com/) - 开源、零知识、私密的笔记应用。
- [Obsidian](https://obsidian.md) - Obsidian 是私密且灵活的笔记应用。虽然闭源，但（网站/应用）没有追踪器，并支持端到端加密同步。
- [Quillpad](https://quillpad.github.io/) - 记录精美的 Markdown 笔记，并通过任务列表保持井然有序。Quillnote 的分支。
- [SiYuan](https://github.com/siyuan-note/siyuan) - 本地优先的个人知识管理系统。
- [Standard Notes](https://standardnotes.com/) - 免费、开源且完全加密的笔记应用。
- [TinyList](https://tinylist.app/) - 创建和分享笔记及检查清单，同时不牺牲隐私。
- [Trilium Notes](https://github.com/TriliumNext/Trilium) - 使用 Trilium Notes 构建个人知识库
- [Vikunja](https://vikunja.io) - 帮助你安排生活的开源待办应用。
- [YankNote](https://github.com/purocean/yn) - 面向程序员的可扩展 Markdown 笔记应用。
- [🤖](#icons) [Tasks.org](https://tasks.org) - 适用于安卓的开源待办事项和任务管理器，支持 CalDAV 同步及离线使用。采用 GPL-3.0 许可。

[返回顶部 🔝](#contents)

## 音乐识别

⛔ **请避免**

- Shazam - 受[Apple 隐私政策](https://tosdr.org/en/service/158). 安卓应用[has a few Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - 包含太多[追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) ，作为音乐识别应用实在过分。
- Musicxmatch - 该应用[has 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/)，并要求大量危险权限。

✅  **请改用**

**Shazam 替代客户端**

- [SongRec](https://github.com/marin-m/SongRec) - 使用 Rust 编写的 Linux 开源 Shazam 客户端。
- [SongID Telegram Bot](https://github.com/smcclennon/SongID) - Telegram 机器人，可识别你发送的音频/视频文件中的音乐。

[返回顶部 🔝](#contents)

## 办公软件

⛔ **请避免**
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**
- [LibreOffice](https://www.libreoffice.org/) - 免费开源的离线办公套件。
- [OnlyOffice](https://www.onlyoffice.com/) - 免费开源的在线协作办公套件。
- [Cryptpad](https://cryptpad.fr/) - 加密的开源协作套件。
- [Etherpad](https://etherpad.org/) - 高度可定制的开源在线编辑器，支持真正实时的协作编辑。
- [Fileverse](https://fileverse.io) - Fileverse 致力于打造更健康的替代方案，以自主掌控、隐私保护设计和标准合规为核心。
	- [Ddocs](https://ddocs.new): 注重隐私的 Google Docs 替代品：基于链上技术、端到端加密且去中心化。
 	- [dSheets](https://sheets.fileverse.io): Excel 和 Google Sheets 的去中心化替代品。
- [Grist](https://www.getgrist.com) - 可自行托管的电子表格和数据库混合工具，用于整理数据，是开源 Airtable 替代品。采用 Apache-2.0 许可。

[返回顶部 🔝](#contents)

## 在线电话服务商

许多网站要求验证电话号码。这些服务提供注重隐私的短信接收（有时也可发送）方式。

### 无需电子邮件验证，接受 Monero
- [Crypton](https://crypton.sh/) - 安全的云端短信 SIM 卡。（位于冰岛）
- [Virtualsim](https://virtualsim.net/) - Virtualsim 提供用于短信验证的实体 SIM 卡租赁。（位于乌克兰）
- [MoneroSMS](https://monerosms.com/) - 用于短信/彩信及验证的虚拟号码。提供命令行和网页应用。（位于美国）

### 需要电子邮件验证，接受 Monero
- [Onlinesim](https://onlinesim.io/) - 在线接收发送到虚拟电话号码的短信。（位于俄罗斯）

### 需要电子邮件验证，接受加密货币
- [SmsPVA](https://smspva.com/) - SmsPVA 提供电话号码，你可以向该号码发送短信并收到其文本内容。（位于法国）

## 操作系统
### 安卓
⛔ 尽量避免使用 Google Android，或 Xiaomi、Huawei、Samsung 等厂商修改和定制的安卓系统。Android 是一个开源项目——[AOSP - Android Open Source Project](https://source.android.com/)，并有许多版本尊重用户隐私和数据，不会与制造商或服务提供商的私有服务器共享数据。

✅ **请改用**

> [!NOTE]
> **安卓应用兼容性**：
> 尽管这些操作系统都基于安卓，但由于缺少部分应用所需的 GMS（Google 移动服务），应用兼容性可能不够完善。你可以通过[Plexus](https://plexus.techlore.tech/)查看社区报告的安卓应用在这些环境中的运行情况，其中涵盖 microg（免费的开源 GMS 替代品）和完全不使用 GMS 的情形。

> [!NOTE]
> 自定义 ROM 既可能提升隐私，也可能降低安卓安全性；务必使用支持验证启动和加密、且**默认未启用** root 的 ROM。尽可能不要使用 userdebug 构建版本。如果你的威胁模型要求高度安全，请购买 Google Pixel 并安装 GrapheneOS。[在 PrivacyGuides 上了解更多](https://www.privacyguides.org/android/overview)。

#### 基于安卓的系统

**GrapheneOS** 高度重视安全和隐私。它采用多种技术缓解漏洞，并大幅增加漏洞利用难度，从而提升操作系统及其上运行的应用的安全性。

- [GrapheneOS](https://grapheneos.org/) - GrapheneOS 是一款注重隐私和安全、兼容安卓应用的开源移动操作系统。仅支持 **Google Pixel** 手机。

这些 ROM 同样注重隐私，和/或支持更多设备。请注意，它们也可能降低安全性，扩大操作系统的攻击面。

- [CalyxOS](https://calyxos.org/) - 隐私保护设计的 ROM。安全性优于 LineageOS 或 Replicant。
- [LineageOS](https://lineageos.org/) - 基于安卓移动平台、适用于多种设备的免费开源操作系统。
- [/e/OS](https://e.foundation/e-os) - Murena 推出的去 Google 化安卓 ROM，内置 microG 和可选云服务。开源，采用 GPL-3.0 许可。
- [iodéOS](https://iode.tech/iodeos) - 去 Google 化安卓 ROM，内置网络防火墙以屏蔽广告和追踪器。开源，采用 GPL-3.0 许可。

#### 基于 Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch 是适合触屏操作的 Ubuntu 移动版本。
- [Nura](https://nura.eco/) （原名 postmarketOS）- 针对触屏优化并预先配置的 Alpine Linux 版本。
- [PureOS](https://www.pureos.net/) - Purism 为 Librem 5 开发的操作系统。
- [Plasma Mobile](https://www.plasma-mobile.org/) - 将 Plasma 装进口袋。尊重隐私、开源且安全的手机生态系统。
- [mobian](https://mobian-project.org/) - 面向移动设备的 Debian。
### 智能电视
⛔ 不要使用 Google Android TV、LG WebOS 或电视预装的其他常见侵犯隐私的电视操作系统。

✅ **请改用**

目前我尚不了解任何尊重隐私的智能电视软件。如果你知道此类软件，请提交 Pull Request 或 Issue。

以下软件并非**操作系统**，而是几乎可在任何系统上使用的应用。这些应用尊重隐私，并提供类似智能电视的功能。推荐的配置是将[Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)连接到电视，运行 GNU/Linux 操作系统，并安装[KDE Connect](https://kdeconnect.kde.org/)等工具以便用手机控制媒体，然后安装下列应用：

- [Kodi](https://kodi.tv/) - 这是一个娱乐中心，可将所有数字媒体整合到精美易用的软件包中。它完全免费且开源，高度可定制，并能在各种设备上运行。
- [OSMC](https://osmc.tv/) - OSMC 是由大众为大众打造的免费开源媒体中心。

你也可以查看[Media Streaming Platforms](https://github.com/pluja/awesome-privacy#media-streaming-platforms)章节。

### PC / macOS
⛔ **请避免**
- MS Windows - 由 Microsoft 所有，以收集大量用户数据并诱导用户注册 Microsoft 帐户而闻名。如果你仍打算使用 Windows 10 或 11，可以使用[Win11Debloat](https://github.com/Raphire/Win11Debloat),或[this other tool](https://www.w10privacy.de/english-home/)查看并禁用 MS Windows 中大量侵犯隐私的设置。
- macOS。

✅ **请改用**
#### [GNU/Linux](https://www.linux.com/what-is-linux/)

GNU/Linux 是自由（既指自由权利，也指免费）开源操作系统家族，主要由社区开发。如果你不知道从哪里开始，下面是一些适合初学者的选择：

- [Fedora](https://fedoraproject.org/) - 由 Red Hat 赞助的社区 Linux 发行版，每六个月发布一次最新开源软件。
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) 是一款适合初学者的发行版。
- [Qubes OS](https://qubes-os.org/) 是一款注重安全的操作系统，通过将不同工作空间隔离到独立虚拟机中来增强隐私和安全性。
- [Tails](https://tails.net/) 是一款便携式操作系统，可防范监控和审查。每次启动都会回到相同的干净状态，关闭 Tails 后，你所做的一切都会自动消失。
- [Whonix](https://www.whonix.org/) 是在虚拟机中运行的操作系统，会强制所有连接通过 Tor。
- [Kicksecure](https://www.kicksecure.com/) 是 Whonix 开发者推出的、基于 Debian 并经过安全加固的发行版，默认安全。
- [secureblue](https://secureblue.dev/) 是基于 Fedora Atomic Desktops 构建的加固镜像，默认采用注重安全的配置并配备加固浏览器。

> [!TIP]
> 如果你想在不安装到电脑上的情况下试用，可以使用 [Live USB](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm)。你也可以了解 [Ventoy](https://www.ventoy.net)，轻松通过 U 盘下载并测试 Linux 发行版。

> [!TIP]
> 如果你想安装 Linux，同时保留当前操作系统，可以设置[双系统启动](https://averagelinuxuser.com/dualboot-linux-windows/)。

> [!NOTE]
> 并非所有 Linux 发行版都自由（自由权利意义上的自由）、免费（免费如啤酒）或尊重用户隐私。GNU/Linux 发行版数量众多，选择前请先做些调查！

#### 其他操作系统：

- [AtlasOS](https://atlasos.net/) - Windows 10 的开源修改版，旨在优化性能和延迟。Atlas 移除了 Windows 中所有形式的追踪，并实施大量组策略以尽量减少数据收集。
- [ReactOS](https://reactos.org/) - ReactOS 是一款外观类似 Windows 的免费开源操作系统，能够运行 Windows 软件和驱动程序。
- [RedoxOS](https://www.redox-os.org/) - 一项正在开发中的项目，旨在提供使用 Rust 编写的类 Unix 操作系统。

[返回顶部 🔝](#contents)

## 密码管理器
⛔ **请避免**
- LastPass
- Dashlane

✅  **请改用**
- [AliasVault](https://www.aliasvault.com) - 开源的端到端加密密码和别名管理器，内置邮箱别名服务器。
- [Bitwarden](https://bitwarden.com) - 开源的云端密码管理器。
  - [vaultwarden](https://github.com/dani-garcia/vaultwarden/) - 兼容 Bitwarden 的非官方自托管服务器，原名 bitwarden_rs。
- [CarryPass](https://carrypass.net) - 零知识 PWA 密码管理器，支持确定性生成、加密保险库和团队协作。 ([Source](https://github.com/racz-zoltan/racz-zoltan.github.io)) `MIT`
- [KeepassXC](https://keepassxc.org/) - 使用行业标准加密安全地存储密码，不提供同步，仅用于存储。
  - [KeepassDX](https://www.keepassdx.com/)，适用于安卓。
  - [Strongbox](https://strongboxsafe.com/)，适用于 iOS。
  - [KeeWeb](https://keeweb.info/)，适用于网页和其他平台。
- [LessPass](https://www.lesspass.com) - 无状态密码管理器。只需记住一个主密码即可访问所有密码，无需同步。
- [Padloc](https://padloc.app/) - 你最后会想使用的密码管理器。
- [Passbolt](https://www.passbolt.com) - 专为团队协作设计的开源密码管理器。
- [Passky](https://passky.org) - 简单、现代、轻量、开源且安全的密码管理器。
- [Proton Pass](https://proton.me/pass) - Proton 提供的开源加密密码管理器。

## Pastebin 与机密共享

分享机密、代码片段或其他文本时，这些工具能帮助你以私密方式与他人共享。

- [crypt.fyi](https://www.crypt.fyi) - 零知识、阅后即焚的敏感数据共享平台，提供网页、命令行和 Chrome 扩展客户端。
- [NoPaste](https://github.com/bokub/nopaste) - 开源 Pastebin 替代方案，无需数据库和后端代码。数据经过压缩后完全储存在你分享的链接中，不会存放在其他地方。
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - 极简开源在线 Pastebin，服务器完全无法获知粘贴的数据。数据在浏览器中使用 256 位 AES 加密/解密。
- [Yopass](https://github.com/jhaals/yopass) - 安全共享机密、密码和文件。
- [scrt.link](https://scrt.link) - 分享机密。端到端加密。阅后即焚。开源。
- [dele-to](https://dele.to) - 开源现代化应用，通过客户端 AES-256 加密、零知识架构和自动销毁功能，安全共享敏感凭据和机密。

[返回顶部 🔝](#contents)

## 支付
⛔ **请避免**
- Visa / Mastercard
- PayPal [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- 微信
- _insertBigTechHere_Pay
- 银行转账（电汇、SEPA 等）

✅  **请改用**
- [Monero](https://www.getmonero.org/) - Monero 是互联世界的现金。它快速、私密、不可追踪且安全。
- Cash - 使用纸币和硬币进行点对点支付。

> [!WARNING]
> [Bitcoin](https://bitcoin.org)既不匿名也不私密。比特币可追踪、透明且使用假名。入门介绍请观看 [aantonop 的视频](https://yewtu.be/watch?v=JN1Bowgcle8)。进阶用户可以观看这部[比特币隐私系列](https://yewtu.be/watch?v=QEnL5k0R08w)。

### 钱包

- [Sparrow Wallet](https://www.sparrowwallet.com/) - 开源跨平台桌面钱包，提供多种保护隐私的支付工具。
- [Wasabi Wallet](https://www.wasabiwallet.io/) - 适用于桌面的开源、非托管、注重隐私的比特币钱包。
- [Cake Wallet](https://cakewallet.com) - 适用于移动端和桌面的开源非托管钱包，支持 Monero、Bitcoin 等加密货币。采用 MIT 许可。
- [Feather Wallet](https://featherwallet.org/) - 轻量级开源 Monero 桌面钱包，内置 Tor 和币种控制功能。采用 BSD-3 许可。

### 支付处理器

- [BTCPay Server](https://btcpayserver.org) - 面向商家的自托管非托管加密货币支付处理器，可替代 PayPal 或 BitPay。采用 MIT 许可。

### Monero 和 Bitcoin 的使用场景

- [kycnot.me](https://kycnot.me/) - 无需 KYC 的交易所、支付处理器和其他隐私服务目录。

[返回顶部 🔝](#contents)

## 个人财务

### 全功能财务管理

- [Actual](https://actualbudget.org) - 快速且注重隐私的财务管理应用。
- [Firefly III](https://www.firefly-iii.org/) - 免费开源的个人财务管理器。
- [GnuCash](https://gnucash.org/) - GnuCash 是面向个人和小型企业的财务会计软件，采用 GNU GPL 自由许可，适用于 GNU/Linux、BSD、Solaris、Mac OS X 和 Microsoft Windows。
- [Sure](https://github.com/we-promise/sure) - 个人财务开源安全管理系统，是由社区维护的已归档项目[Maybe](https://github.com/maybe-finance/maybe)的分支。
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - 轻量级自托管个人财务应用，界面友好且记账功能强大。

### 预算管理
- [ProExpense](https://github.com/arduia/ProExpense/) - 简单免费的财务记录工具，可安全记录日常开支。
- [My Expenses](https://github.com/mtotschnig/MyExpenses) - 功能丰富、采用 GPL 许可的安卓支出追踪应用。
- [Wallos](https://wallosapp.com) - 自托管的订阅和定期支出追踪器，提供提醒和支出统计。开源，采用 GPL-3.0 许可。

### 共同开支

⛔ **请避免**

- Tricount - 应用体积巨大（约 200 MB），并包含来自 Facebook、Google 和 Huawei 的许多追踪器。
- Splitwise - 应用包含来自 Google 和 Amazon 的追踪器。

✅  **请改用**

- [Spliit](https://github.com/spliit-app/spliit#readme) - 与朋友和家人分摊开支。无广告、无需帐户、开源且永久免费。
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [网站](https://splitpro.app) - 免费与朋友分摊开支的开源 SplitWise 替代方案。
- [IHateMoney](https://ihatemoney.org/) - 轻松管理共同开支。不支持不均等分摊。
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Nextcloud Cospend 和 IHateMoney 服务器的安卓客户端。
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - 受优秀项目 IHateMoney 启发的群组/共同预算管理器。
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Nextcloud Cospend 和 IHateMoney 服务器的安卓客户端。

### 其他

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - 使用 Debitum 可追踪各种欠条，无论是欠款还是借出的物品。

### 投资组合追踪器

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - 使用网页技术构建的开源财富管理软件。
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) - 用于计算投资组合整体表现的开源工具。
- [Rotki](https://github.com/rotki/rotki) - 出色的投资组合追踪、分析、会计和税务申报应用，保护你的隐私。

## 照片编辑与管理
⛔ **请避免**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

✅  **请改用**
#### 网页
- [miniPaint](https://github.com/viliusle/miniPaint) - 开源的 Photopea 替代品。miniPaint 直接在浏览器中运行，不会向任何服务器发送数据，所有内容都留在浏览器内。

#### 桌面端
- [GIMP](https://www.gimp.org/) - 免费开源的图像编辑器。
- [Krita](https://github.com/KDE/krita) - Krita 是一款免费开源的数字绘画应用。
- [Czkawka](https://github.com/qarmin/czkawka) - 用于查找重复和相似图像等的多功能应用。
- [DigiKam](https://www.digikam.org/) - 借助开源力量实现出色的专业照片管理。
- [Inkscape](https://inkscape.org/) - Inkscape 是一款免费开源的矢量图形编辑器，用于创建矢量图像。
- [ImageGlass](https://imageglass.org/) - ImageGlass 是一款轻量级软件，旨在为你提供清爽直观的图像浏览环境。
- [darktable](https://www.darktable.org/) - darktable 是一款开源摄影工作流应用和 RAW 文件处理器。
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) - 精美、非破坏性且支持 GPU 加速的 RAW 图像编辑器，注重性能。轻量级（小于 20 MB）的跨平台 Adobe Lightroom 替代品。采用 AGPL-3.0 许可。
- [RawTherapee](https://rawtherapee.com) - 离线开源 RAW 照片处理器，可与 darktable 搭配作为 Lightroom 替代方案。采用 GPL-3.0 许可。

#### 安卓
- [Pocket Paint](https://github.com/Catrobat/Paintroid) - Catroid 的标准图像处理应用。
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - 分享图片前移除其中的 Exif 数据。
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - 在安卓设备上分享图像时缩小图像尺寸并移除 Exif 标签。

[返回顶部 🔝](#contents)

## 照片存储
⛔ **请避免**
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
    - [Google Photos Takeout Helper](https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) [💀](#icons) - 整理 Google Takeout 混乱归档、将其归入一个大型时间顺序文件夹的脚本。用它脱离 Google Photos 吧 :)。
- Amazon Photos

✅  **请改用**

### 自行托管
- [Immich](https://github.com/immich-app/immich) - 可直接从手机备份照片和视频的自托管解决方案。
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - 积极维护的[OwnPhotos](https://github.com/hooram/ownphotos)分支。Google Photos 的自托管替代方案。
- [Nextcloud](https://nextcloud.com/) - 开源的自托管效率平台，让你掌控自己的数据。它还提供 [*Photos*](https://github.com/nextcloud/photos) 插件，帮助你整理和浏览照片。
- [Photoprism](https://photoprism.app) - 功能丰富的服务器端应用，用于浏览、整理和分享个人照片集。它与 Google Photos 最为相似。
- [Pigallery2](http://bpatrik.github.io/pigallery2/) - 目录优先的自托管照片图库网站。
- [Photoview](https://photoview.github.io/) - 适用于个人自托管服务器、带有人脸识别功能的照片图库。
- [Photostructure](https://photostructure.com/) - 自托管照片库，让浏览和分享一生的回忆成为愉悦体验。
- [Stingle Photos](https://stingle.org/) - 提供强大安全性、隐私保护和加密功能的开源照片备份方案。
- [Ente](https://ente.com/) - 照片和视频的端到端加密存储服务。开源，[经过审计](https://ente.com/blog/cryptography-audit/)。

### 第三方服务
- [Crypt.ee](https://crypt.ee/) - 私密加密的空间，可存放所有照片、文档、笔记等内容。
- [Ente](https://ente.com/) - 照片和视频的端到端加密存储服务。开源，[经过审计](https://ente.com/blog/cryptography-audit/)。
- [Stingle Photos](https://stingle.org/) - 提供强大安全性、隐私保护和加密功能的开源照片备份方案。

### 本地
- [DigiKam](https://www.digikam.org/) - 借助开源力量实现出色的专业照片管理。
- [Photok](https://github.com/leonlatsch/Photok) - Photok 是免费的照片保险箱。它会在设备上加密存储照片，并将其隐藏起来。
- [ImageGlass](https://imageglass.org/) - ImageGlass 是一款轻量级软件，旨在为你提供清爽直观的图像浏览环境。

[返回顶部 🔝](#contents)

## 隐私工具

本节介绍一些可帮助用户分析设备隐私状况的工具。

### 桌面端

- [Whoami Project](https://github.com/owerdogan/whoami-project) [💀](#icons) - Whoami 为基于 Debian 和 Arch 的 Linux 发行版提供增强的隐私保护和匿名性。
- [BusKill](https://www.buskill.in/) - BusKill 是一种“死人开关”，磁性脱离装置触发、USB 连接断开时便会启动。
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - 适用于 GNU/Linux 的交互式应用防火墙，帮助用户检测、监控并阻止不需要的出站连接。
- [MAT2](https://github.com/jvoisin/mat2) - 移除图像、文档、音频和其他文件中的元数据。提供命令行工具并可集成文件管理器。
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - 基于 MAT2 构建的简单桌面应用，可查看和移除文件元数据。
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Amnesty International 的取证工具，可检查安卓和 iOS 设备中是否存在 Pegasus 等间谍软件的痕迹。

### 安卓

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - 安卓应用隐私审计平台，可查看应用包含多少追踪器。
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - 检查 APK 中已知的追踪器（由 Exodus 提供）以及其他警告和规格。
- [Plexus](https://plexus.techlore.tech/) - 消除在去 Google 化设备上使用安卓应用的兼容性顾虑。检查应用能否在去 Google 化设备上运行。
- [Netguard](https://netguard.me/) - 按应用阻止其访问互联网的简单方法。
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - 适用于安卓 6 及以上版本的开源无 Root 防火墙和 DNS 切换工具，具备反审查功能。
- [🤖](#icons) [Orbot](https://orbot.app/) - 通过 Tor 网络路由应用流量，可作为系统级 VPN 或按应用单独设置。由 Guardian Project 开发。

[返回顶部 🔝](#contents)

## 远程访问与控制
⛔ **请避免**
- TeamViewer
- AnyDesk

✅  **请改用**
- [RustDesk](https://rustdesk.com/) - 使用 Rust 编写的开源远程桌面客户端软件。开箱即用，让你完全掌控数据，无需担忧安全问题。
- [screego](https://screego.net/) - 面向开发者的屏幕共享工具。
- [Remmina](https://remmina.org/) - 通过 RDP 远程访问桌面并共享文件。
- [UltraVNC](https://www.uvnc.com/) - UltraVNC 是一款强大、易用且免费的远程电脑访问软件，可通过互联网或网络将另一台电脑的屏幕显示在你的屏幕上。
- [MeshCentral](https://meshcentral.com/) - 开源、跨平台、自托管且功能丰富的远程设备管理网页平台。
- [Apache Guacamole](https://guacamole.apache.org) - 无需客户端的自托管远程桌面网关，可通过浏览器访问 RDP、VNC 和 SSH。采用 Apache-2.0 许可。
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - 自托管桌面和游戏流媒体主机（Sunshine）及配套客户端（Moonlight）。开源，采用 GPL-3.0 许可。

[返回顶部 🔝](#contents)

## 路由器
⛔ **请避免**
- ISP 提供的原厂路由器和厂商固件：闭源、安全更新缓慢或缺失，而且经常向厂商或 ISP 回传数据。

✅  **请改用**
- [OpenWrt](https://openwrt.org/) - 开源 Linux 固件，可替换数百种消费级路由器的原厂软件，并提供多年的安全更新。
- [OPNsense](https://opnsense.org/) - 基于 FreeBSD 的开源防火墙和路由平台，可运行于专用硬件或闲置电脑。
- [IPFire](https://www.ipfire.org/) - 经过安全加固的开源 Linux 防火墙发行版，提供入侵防护和网页界面。

[返回顶部 🔝](#contents)

## RSS 阅读器
⛔ **请避免**
- Feedly
- Inoreader
- Google News

这些服务会根据你的所有阅读内容建立个人档案。本地或自托管阅读器直接获取订阅源，因此无人能看到你的阅读列表。

✅  **请改用**
- [FreshRSS](https://freshrss.org/) - 自托管订阅源聚合器，提供网页界面、多用户支持和供移动应用使用的 API。
- [Miniflux](https://miniflux.app/) - 使用 Go 编写的极简自托管订阅阅读器，不含追踪。
- [NetNewsWire](https://netnewswire.com/) - 适用于 macOS 和 iOS 的开源 RSS 阅读器，可本地使用或与自托管服务同步。
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - 适用于 Windows、macOS 和 Linux 的开源桌面 RSS 阅读器。
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - 适用于 Linux 的开源 RSS 阅读器，可本地使用或连接 Miniflux、FreshRSS 等自托管服务。
- [Newsboat](https://newsboat.org/) - 终端 RSS 阅读器。
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - 安卓开源 RSS 阅读器，可直接在设备上获取订阅源，无需帐户。
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - 安卓开源 Material You RSS 阅读器，可本地使用或与自托管服务同步。
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - 安卓开源 RSS 阅读器，可本地使用或与 Miniflux 和 FreshRSS 同步。

[返回顶部 🔝](#contents)

## 搜索引擎

⛔ **请避免**
- Google [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Yahoo! [![](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- Bing
- Yandex [![](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- Ecosia [![](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

✅  **请改用**
- [librengine](https://github.com/liameno/librengine) [💀](#icons) - 注重隐私的网页搜索引擎
- [SearxNG](https://github.com/searxng/searxng) - 免费互联网元搜索引擎，可聚合多个搜索服务和数据库的结果。
- [DuckDuckGo](https://duckduckgo.com) - 尊重隐私的搜索引擎。
- [Brave Search](https://search.brave.com) - 尊重隐私的搜索引擎，拥有[独立的自有索引](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - 在欧盟法国开发和托管的零追踪搜索引擎。
- [Marginalia](https://marginalia-search.com/) - 拥有自有爬虫和索引的独立搜索引擎，优先展示文本丰富的非商业页面。可自行托管，采用 AGPL-3.0 许可。
- [YaCy](https://yacy.net/) - 点对点去中心化搜索引擎，每位用户都运行节点并共享索引。开源，采用 GPL-2.0 许可。

[返回顶部 🔝](#contents)

## 社交网络与平台

> [!NOTE]
 > **联邦宇宙（Fediverse）**
>
> 联邦宇宙（Fediverse）是由社交网络平台组成的“联邦化（federated）宇宙（universe）”，这些平台可以通过标准开放协议相互通信。这意味着你可以在任意一个网络中浏览其他网络的内容。你不会被某个服务提供商绑定，可以自由选择。请观看 FramaSoft 制作的[这段视频](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s)，它很好地说明了这一概念。
>
> 理想情况下，我们都应该转向联邦宇宙，放弃目前最流行的中心化、垄断式社交网络（Twitter、Reddit、Instagram 等）。
>
> 所有兼容联邦宇宙（ActivityPub）的应用均以[🧩](#icons)

> [!NOTE]
 > **替代前端与客户端**
>
> 替代前端有助于保护个人隐私。你仍可通过这些工具浏览专有且损害隐私的服务内容，同时获得隐私保护和一定程度的匿名性。即使使用大多数替代前端，专有服务仍会收到有关你所浏览内容的请求（尽管不知道请求来自你）。这仍会损害整体隐私，并以某种方式为其算法提供数据。只有充当代理的替代前端（或客户端）才能向内容提供商隐藏你的真实 IP。
>
> 你可以使用以下浏览器扩展和应用，自动将链接重定向到尊重隐私的替代前端：
> - [LibRedirect](https://github.com/libredirect/browser_extension#get) - 将 YouTube、Twitter 等请求重定向到尊重隐私的替代前端和后端的网页扩展。
> - [UntrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - 将 YouTube、Twitter 等链接转换为对应的免费开源替代服务。



### 博客平台（Medium）

⛔ **请避免**:
- **Medium** - 网站包含 Google 追踪器和广告。
- **Blogger** - 由 Google 所有，包含 Google 追踪器和广告。

✅ **替代方案：**
- [Plume](https://github.com/Plume-org/Plume) [🧩](#icons) - 借助 ActivityPub 实现联邦化的博客应用。
- [WriteFreely](https://writefreely.org/) [🧩](#icons) - 用于在网络上建立写作空间的开源平台。

✅ **Medium 替代前端：**
- [Scribe](https://git.sr.ht/~edwardloveall/scribe/) - 受 Invidious 启发的 Medium 替代前端。

### Instagram

[![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

⛔ 不要使用 Instagram（至少不要使用官方客户端）。Instagram 是一款严重侵犯隐私的应用，根据用户画像提供有偏见的搜索结果和信息流，也被用作操纵工具，并存在大量损害言论自由的审查。最后，它的界面设计容易令人上瘾且具有毒性。

✅ **请改用**

**Instagram 替代方案**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Instagram 的去中心化、联邦化开源替代品，支持帖子、视频、快拍、标签等。

### Quora

⛔ Quora 网站包含广告和追踪器，用于收集你的数据并将其出售/分享给第三方。其[隐私政策](https://tosdr.org/en/service/314)很糟糕。

✅ **Quora 网页替代前端：**
- [Quetre](https://github.com/zyachel/quetre) - Quetre 是 Quora 的替代前端，让你无需广告、追踪器和其他臃肿内容即可查看答案。


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ 不要使用 YouTube（至少不要使用官方客户端）。YouTube 严重侵犯隐私，会根据你的兴趣建立非常精准的个人画像。此外，它还是一种[激进化工具](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization)，会向用户展示[有偏见的内容](https://arxiv.org/pdf/1908.08313.pdf)，以获取更多互动并让用户不断观看更多内容，从而造成[成瘾](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883)，它从不向你展示与你的意识形态/偏见不同的[其他观点](https://arxiv.org/pdf/1908.08313.pdf)。YouTube 审查内容严重，还会收集你大量数据：兴趣、空闲时间、意识形态、喜好、厌恶、音乐品味等。

✅ **请改用**
- [Peertube](https://joinpeertube.org/en/) [🧩](#icons) - 免费、开放且去中心化的视频平台替代方案。
- [Odysee](https://odysee.com/) - Odysee 是由 lbry 的创建者支持的视频平台，采用 lbry 区块链协议。
- [DTube](https://github.com/dtube/dtube) - 功能齐全的去中心化视频分享网站。

✅ **YouTube 网页替代前端：**
- [Invidious](https://github.com/iv-org/invidious) - 尊重隐私的 YouTube 替代前端。
- [Piped](https://github.com/TeamPiped/Piped) - 注重隐私且设计高效的 YouTube 替代前端。
- [ViewTube](https://github.com/ViewTube/viewtube) - ViewTube 是使用 Vue.js 编写、尊重隐私的 YouTube 替代前端。
- [Youtube-Local](https://github.com/user234683/youtube-local) - 基于浏览器的客户端，可匿名观看 YouTube，页面性能也更佳。

✅ **YouTube 替代客户端（应用）：**
- [🤖](#icons) [NewPipe](https://newpipe.net/) - 安卓 YouTube 替代应用。无需帐户、尊重隐私且无广告。
- [🤖](#icons) [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - 安卓 YouTube 替代应用。无需帐户、尊重隐私且无广告。
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - FreeTube 是一款注重隐私的开源桌面 YouTube 播放器。（使用本地 RSS API 或 Invidious 作为后端。）
- [🤖](#icons) [LibreTube](https://github.com/Libre-tube/LibreTube) - 使用 Piped 的安卓 YouTube 替代前端。
- [Yattee](https://github.com/yattee/yattee) - 基于 Invidious 和 Piped 构建、适用于 iOS、tvOS 和 macOS 的 YouTube 替代前端。
- [🤖](#icons) [Clipious](https://github.com/lamarios/clipious) [💀](#icons) 安卓 Invidious 客户端

### TikTok

[![](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

⛔ 避免使用 TikTok。这款设计具有毒性的应用不仅损害用户隐私，也伤害用户身心健康。你可以阅读[这些帖子](https://www.reddit.com/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all)。

✅ **TikTok 网页替代前端：**
- [ProxiTok](https://github.com/pablouser1/ProxiTok) - TikTok 的开源替代前端

### Twitter

[![](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

⛔ 避免使用 Twitter 官方应用/网站。它会追踪用户，并根据关注、转推和点赞内容建立用户画像。Twitter 的政策[默认情况下](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings)就会损害并侵犯用户隐私。

#### 自行托管

- [Memos](https://github.com/usememos/memos) - 开源、自托管的备忘录中心，具备知识管理和社交功能。

#### 去中心化

- [Nostr](https://nostr.com/) - 可构建全球抗审查“社交”网络的开放协议。它不依赖任何可信中央服务器，因此具有韧性；基于加密密钥和签名，因此无法篡改；它不依赖 P2P 技术，因此能够正常工作。**注意**：Nostr 是一种协议，所能提供的远不止 Twitter 替代方案。

> [!NOTE]
> **联邦式社交网络**：联邦式社交网络并非 Twitter 或 Facebook 那样的单一网站，而是由不同组织和个人运营的数千个社区组成的网络，可提供无缝的社交媒体体验。

- [Mastodon](https://joinmastodon.org/) [🧩](#icons) - 基于开放协议构建的免费联邦式微博社交网络。
  - [Mastodon Apps](https://joinmastodon.org/apps) - 适用于安卓、iOS、网页和桌面的 Mastodon 应用列表。
- [Pleroma](https://pleroma.social/) [🧩](#icons) - Pleroma 是基于开放协议构建的免费联邦式社交网络服务器。
  - [Soapbox](https://gitlab.com/soapbox-pub/soapbox-fe) - Pleroma 的前端，注重自定义品牌和易用性。

#### 替代前端
- [Nitter](https://github.com/zedeus/nitter/wiki/Instances) [💀](#icons) - Nitter 是注重隐私的免费开源 Twitter 替代前端。
- [Squawker](https://github.com/j-fbriere/squawker) - 安卓开源 Twitter 客户端，是仍在维护的 Fritter 分支。
- [Feetter](https://codeberg.org/pluja/Feetter) [💀](#icons) - 无需注册，即可在任何设备上创建、同步和管理 Nitter 订阅源。

### Reddit

[![](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

⛔ 尽量避免使用 Reddit，至少不要使用其官方客户端，因为其中布满追踪器和广告，并会向服务器分享不必要的用户数据。

✅ **Reddit 替代方案：**
- [Aether](https://getaether.net/) - 点对点阅后即焚式公共社区。
- [Mbin](https://github.com/MbinOrg/mbin) [🧩](#icons) - 联邦宇宙中的 Reddit 式内容聚合和微博平台；由社区维护的 kbin 后继项目。
- [Lemmy](https://join-lemmy.org/) [🧩](#icons) - 使用 Rust 编写的联邦式 Reddit 开放替代品。

✅ **尊重隐私的 Reddit 客户端：**
- [Redlib](https://github.com/redlib-org/redlib) - 源自 Libreddit 的 Reddit 私密替代前端。

### 直播平台（Twitch）

[![](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

⛔ 避免使用 Twitch、Patreon、YouTube 等平台，它们会严重侵犯你和观众的隐私。你可以尝试使用关注所有人隐私的自托管平台。

✅ **替代方案：**
- [Owncast](https://github.com/owncast/owncast) - 自行运行直播视频，掌控一切。开箱即用地提供直播和聊天功能。

✅ **尊重隐私的 Twitch 客户端：**
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - 适用于安卓的开源无广告 Twitch 浏览器和流媒体播放器。

[返回顶部 🔝](#contents)

### Imgur

[![](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

⛔ Imgur 网站充斥臃肿内容、GIF、Cookie、JavaScript 和追踪器。

✅ **替代方案：**
- [rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances) - Imgur 的替代前端。只读、无 JavaScript，基于 rimgu 并使用 Go 重写。

[返回顶部 🔝](#contents)

### IMDb

⛔ IMDb 归 Amazon 所有，其网站充斥广告和第三方追踪器。

✅ **IMDb 替代前端：**
- [libremdb](https://libremdb.iket.me/) - 尊重隐私的 IMDb 替代前端，可移除广告和追踪器。开源且可自行托管（AGPL-3.0）。

[返回顶部 🔝](#contents)

### Fandom

⛔ Fandom Wiki（原名 Wikia）充斥广告、自动播放视频和追踪器。

✅ **Fandom 替代前端：**
- [BreezeWiki](https://breezewiki.com/) - Fandom Wiki 的替代前端，可去除广告、视频和杂乱内容。开源且可自行托管。

[返回顶部 🔝](#contents)

## 团队协作工具
⛔ **请避免**
- [![](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

✅  **请改用**
- [Zulip](https://zulip.com/) - 分布式团队聊天工具。
- [Stoat](https://stoat.chat/) （原名 Revolt）- 采用现代网页技术构建、以用户为先的聊天平台。
- [Twake](https://twake.app/) - 提升团队协作效率。Twake 通过单一平台满足组织的各类需求。
- [RocketChat](https://rocket.chat/) - 掌控通信、管理数据，并拥有自己的协作平台以提升团队效率。
- [Nextcloud Talk](https://nextcloud.com/talk/) - 使用 Nextcloud Talk 保持对话私密。
- [Mattermost](https://mattermost.com/) - 开源的 Slack 替代品。

> [!WARNING]
 > **Discord 的替代客户端/修改版：**
> 你的 IP 和消息仍会被分享给 Discord 并归 Discord 所有，而且不会加密。\
> 此外，使用这些修改版/客户端中的任何一个都[违反](https://x.com/discord/status/1006178587731550208)[Discord 服务条款](https://discord.com/terms)，因此我们不对你的帐户被暂停或终止负责；**不过**，目前应该[还不会发生](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos)。

- [请参阅此处了解 Discord 修改版和替代客户端](https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[返回顶部 🔝](#contents)

## 屏幕录制

- [Screenity](https://screenity.io/) - 功能强大且尊重隐私的屏幕录制和批注工具，帮助制作更好的工作、教育等视频。
- [OBS](https://obsproject.com/) - 免费开源的视频录制与直播软件。

[返回顶部 🔝](#contents)

## 翻译
⛔ **请避免**
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **文本翻译**
- [Mozilla Translate](https://mozilla.github.io/translate/) - 开源，可在浏览器本地运行模型。
- [Libretranslate](https://libretranslate.com/) - 开源机器翻译——100% 自行托管、没有限制、不依赖专有服务。
- [Apertium](https://apertium.org/) - 免费开源的机器翻译平台，可在电脑上离线运行。
- [Softcatala](https://www.softcatala.org/traductor/) - 开源翻译工具——仅支持加泰罗尼亚语/西班牙语/英语/法语（使用 apertium）。
- [TranslateLocally](https://github.com/XapaJIaMnu/translateLocally) – 免费开源的神经机器翻译工具，可在电脑上离线运行。
- [Linguist](https://linguister.io) - 免费开源、功能齐全的浏览器翻译方案，内置离线翻译器及[自定义翻译器](https://linguister.io/docs/CustomTranslator)。支持整页翻译、文本转语音、词典，以及用户输入和网页所选文本翻译。

✅ **Google Translate 替代前端**
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) [💀](#icons) - Google Translate 的替代前端。[Demo](https://lingva.ml/).
- [Simplytranslate](https://codeberg.org/ManeraKai/simplytranslate) - Google Translate 和 LibreTranslate 的替代前端。[Demo](https://simplytranslate.org/)
- [Mozhi](https://codeberg.org/aryak/mozhi) - 替代前端，在一个私密界面中聚合 Google Translate、DeepL、Yandex 等翻译引擎。可自行托管，采用 AGPL-3.0 许可。

[返回顶部 🔝](#contents)

## 未分类
- [Skymap](https://skymaponline.net/) - 开放的在线天文馆程序。
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - 开源、现代化且支持协作的 fail2ban。
- [Hetty](https://github.com/dstotijn/hetty) - Hetty 是用于安全研究的 HTTP 工具包，旨在成为 Burp Suite Pro 的开源替代品。
- [Visited](https://github.com/didvc/visited) - 在本地收集浏览器的浏览历史。

[返回顶部 🔝](#contents)

## 实用工具
- [Deskreen](https://github.com/pavlobu/deskreen) - 将任意设备变成电脑的扩展屏幕。

[返回顶部 🔝](#contents)

## 版本控制
⛔ **请避免**

- **GitHub** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297)，虽然其隐私政策不算太差，但它归 Microsoft 所有，而且众所周知，它会使用托管的代码训练 AI 模型。

✅  **请改用**
- [Codeberg](https://codeberg.org/) -  Codeberg 是一个协作平台，为自由开源软件、内容和项目提供 Git 托管及相关服务。
- [Forgejo](https://forgejo.org/) - Forgejo 是轻量级的自托管代码协作平台。
- [GitLab](https://about.gitlab.com/) - GitLab 是一套 DevOps 软件，可用于开发、保障安全并运维软件。
- [Radicle](https://radicle.dev/) - 基于 Git 构建的开源点对点代码协作技术栈。不同于中心化代码托管平台，网络不受任何单一实体控制。仓库以去中心化方式在各节点间复制，用户完全掌控自己的数据和工作流。
- [Gitea](https://gitea.com) - 轻量级自托管 Git 代码协作平台，也是 Forgejo 的源项目。开源，采用 MIT 许可。

[返回顶部 🔝](#contents)

## 视频与音频会议
⛔ **请避免**

- **Zoom** - [隐私政策极差](https://tosdr.org/en/service/2198)。应用包含 [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videomeetings/latest/)，并要求许多权限。
- **Skype** - [隐私政策极差](https://tosdr.org/en/service/244)。应用包含 [Google 和 Microsoft 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/)，并要求过多权限。
- **Google Meet** - [隐私政策极差](https://tosdr.org/en/service/217)。应用内置 [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/)（毕竟这是 Google 应用），并要求过多权限。
- **WhatsApp** - [隐私政策糟糕](https://tosdr.org/en/service/198)。应用包含 [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/)且很可能内置 Facebook 追踪器（毕竟这是 Facebook 应用），并要求过多权限。
- **Instagram** - [隐私政策极差](https://tosdr.org/en/service/219)。应用包含 [Facebook 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/)，并要求过多权限。
- **Discord** - [隐私政策极差](https://tosdr.org/en/service/536)。应用包含[各种追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/)，并要求许多权限。
- Clubhouse

✅  **请改用**
- [BigBlueButton](https://bigbluebutton.org/) - BigBlueButton 是为在线学习设计的网页会议系统。
- [Briefing](https://github.com/holtwick/briefing/) - 安全的直接视频群聊。仅使用 WebRTC 等开放技术，兼容所有现代浏览器。
- [Chitchatter](https://chitchatter.im/) - 安全的 P2P 聊天工具，无服务器、去中心化且阅后即焚。支持文本、音频、视频、屏幕和文件共享。
- [Jam](https://github.com/jam-systems/jam) [💀](#icons) - Jam 是你自己的开源 Clubhouse，适用于小型会议、朋友和社群。
- [Jami](https://jami.net/) - 点对点音频和视频会议。
- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - 更安全、更灵活且完全免费的视频会议。如果使用官方实例，你需要登录。建议自行托管。
- [Mirotalk P2P](https://p2p.mirotalk.com/) - 免费 WebRTC 点对点工具——简单、安全、快速的实时视频会议，最高支持 4K 和 60fps，兼容所有浏览器和平台。
- [Mumble](https://www.mumble.info/) - Mumble 是一款功能先进的开源语音通信应用。
- [PeerCalls](https://github.com/peer-calls/peer-calls) - 使用 Go 和 TypeScript 编写、面向所有人的群组点对点视频通话应用。
- [Nextcloud Talk](https://nextcloud.com/talk/) - 在自有 Nextcloud 服务器内通过 WebRTC 运行的自托管视频通话和聊天服务（AGPL-3.0）。


##### Discord 的替代客户端/修改版：
> [!WARNING]
> 你的 IP 和消息仍会被分享给 Discord 并归 Discord 所有，而且不会加密。\
> 此外，使用这些修改版/客户端中的任何一个都[违反](https://x.com/discord/status/1006178587731550208)[Discord 服务条款](https://discord.com/terms)，因此我们不对你的帐户被暂停或终止负责；**不过**，目前应该[还不会发生](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos)。
- [OpenAsar](https://openasar.dev/) - Discord 桌面端 app.asar 的开源替代品，附带[无追踪](https://github.com/GooseMod/OpenAsar#readme)选项，可关闭 Discord 的崩溃和错误报告。
- [Vencord](https://github.com/Vendicated/Vencord) - 采用不同方式实现功能的 Discord 客户端修改版。
- [BetterDiscord](https://betterdiscord.app/) - Discord 的客户端修改版，你还需要安装[DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) plugin to block 追踪器.
- [Kernel](https://github.com/kernel-mod/electron) [💀](#icons) - 体积极小、速度极快且功能强大的 Electron 客户端修改版，你还需要安装[Discord Utilities](https://github.com/slow/discord-utilities) package to block 追踪器.
- [Replugged](https://replugged.dev/) - 已弃用客户端修改版[Powercord](https://powercord.dev).
- [WebCord](https://github.com/SpacingBat3/WebCord) - 使用 Electron 构建、不依赖 Discord 和 Fosscord API 的客户端。
- [🤖](#icons) [Aliucord](https://github.com/Aliucord/Aliucord) - 安卓 Discord 应用的修改版，可完全[禁用 Discord 追踪](https://github.com/Aliucord/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).
- [Vesktop](https://vesktop.dev/) - 独立的 Discord 桌面客户端，可屏蔽遥测并内置 Vencord。开源，采用 GPL-3.0 许可。

[返回顶部 🔝](#contents)

## 视频编辑
⛔ **请避免**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolve

此类程序充斥追踪器和遥测功能。你可以在[此处](https://www.gnu.org/proprietary/malware-adobe.html)查看**不应**使用 Adobe 的完整理由。许多专有编辑器也存在类似问题。

✅  **请改用**

- [kdenlive](https://kdenlive.org/) - 开源视频编辑器。永久免费，可轻松用于任何用途。
- [LosslessCut](https://github.com/mifi/lossless-cut) - LosslessCut 致力于成为终极跨平台 FFmpeg 图形界面，可对视频、音频、字幕及其他相关媒体文件进行极快且无损的操作。
- [Olive Video Editor](https://olivevideoeditor.org/) - 免费开源的高级非线性视频编辑器，目前处于 Alpha 阶段。
- [OpenCut](https://github.com/OpenCut-app/OpenCut) - [Beta] 适用于网页、桌面和移动设备的免费开源视频编辑器。
- [Shotcut](https://www.shotcut.org/) - Shotcut 是一款免费、开源、简单易用的跨平台视频编辑器。

[返回顶部 🔝](#contents)

## VPN

⛔ **请避免**

- [免费 VPN](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/)（来自 Google Play 或任何应用商店）。这些服务并非真正免费：它们会窃取连接数据、保留日志并建立用户画像，进而[将数据出售给广告商](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties)。如果政府要追踪某人，这类应用会最先屈服。

- Surfshark 或 NordVPN 等闭源 VPN 应用可能不太可信，因为没人能确定它们如何处理你的数据。此外，使用信用卡付款会暴露你的身份。如果还需要提供电子邮件地址，而该地址也用于其他服务，同样会泄露身份。


✅  **请改用**

以下是一些开源且真正私密的选择（无需个人数据和/或信用卡）：

- [IVPN](https://ivpn.net) - 无日志 VPN，应用开源、注册无需邮箱，支持现金、Monero 或 Bitcoin 付款。
- [nadanada](https://nadanada.me)（原名 LNVPN）- 按使用量付费的 WireGuard VPN，无需帐户，可通过闪电网络或其他加密货币付款。
- [Mullvad VPN](https://mullvad.net) - 无日志 VPN，应用开源，使用匿名编号帐户，支持现金或加密货币付款。
- [Proton VPN](https://protonvpn.com) - 瑞士无日志 VPN，各平台应用均开源并经过审计，免费套餐无流量上限。
- [SPN](https://safing.io/) - 开源系统级网络，通过多个节点为每个应用连接单独路由，实现逐连接 IP 隔离，而非共用一个出口。内置于适用于 Windows 和 Linux 的 Safing Portmaster 防火墙。
- [Amnezia VPN](https://amnezia.org) - 自行部署在个人服务器上的抗审查 VPN，应用开源并经过审计（GPL-3.0）。
- [Find more at kycnot.me (VPN Category)](https://kycnot.me/?categories=vpn) - KYC-free VPN providers.

[返回顶部 🔝](#contents)

## 网页浏览器

⛔ **请避免**

- **Google Chrome** - 归 Google 所有，基于同样由 Google 所有的开源 Chromium 项目构建。它包含许多侵犯隐私的功能，通常会与你的 Google 帐户关联。其受[隐私政策](https://tosdr.org/en/service/217)管辖，众所周知该政策极差。Google 还打算强制推行 [Manifest V3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening)，这会直接损害隐私保护工作。
- **Microsoft Edge** - 这是采用 Microsoft 品牌的 Chromium 版本，其中是 Microsoft 追踪器而非 Google 追踪器。其受[Microsoft 隐私政策](https://tosdr.org/en/service/244)管辖，该政策同样很糟糕。如果你仍想使用它，可以[参考此指南](https://anonymousplanet.net/guide/#hardening-edge)以稍作加固。
- **Opera** - Opera 曾被[一家中国投资者财团收购](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). 该应用has [many 追踪器](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **请改用**

#### 安卓 / iOS
- [Brave](https://brave.com/) - 安卓/iOS 版。Brave 开箱即提供相当不错的隐私和追踪器防护。
- [Firefox](https://www.firefox.com/en-US/mobile/) - 适用于安卓/iOS
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Mull 浏览器的分支。经过加固的安卓 Firefox 分支，移除了专有二进制组件。
- [🤖](#icons) [Vanadium](https://vanadium.app/) - GrapheneOS 发布的增强隐私和安全性的 Chromium 版本。
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/)
- [Tor Browser](https://www.torproject.org/) - iOS/安卓版。保护自己免受追踪和监控，并绕过审查。
- [Cromite](https://github.com/uazo/cromite) - 基于 Bromite 的 Chromium 分支，内置广告拦截功能并注重隐私。

#### 桌面端
- [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) - 以轻量方式移除对 Google 网页服务的依赖。Ungoogled Chromium 是不依赖 Google 网页服务的 Google Chromium。
- [Brave](https://brave.com/) - Brave 开箱即提供相当不错的隐私和追踪器防护。
- [Firefox](https://www.firefox.com/en-US/) - 开源、独立的浏览器。需要进行一些[加固和调整](https://anonymousplanet.net/guide/#hardening-firefox)以实现更好的隐私保护。
  - [LibreWolf](https://librewolf.net/) - Privacy-focused Firefox fork.
- [Tor Browser](https://www.torproject.org/) - 经过加固的 Firefox，通过 Tor 网络路由流量，以抵御追踪、监控和审查。
- [Mullvad Browser](https://mullvad.net/en/browser/) - 具备 Tor Browser 隐私与安全特性、但不使用 Tor 网络的浏览器。
- [Zen Browser](https://zen-browser.app/) - 基于 Firefox 的浏览器，默认启用增强追踪保护，专注于宁静、清爽的浏览体验。采用 MPL-2.0 许可。
- [Floorp](https://floorp.app/) - 注重隐私的 Firefox 分支，禁用遥测并提供额外的自定义功能。开源，采用 MPL-2.0 许可。

> [!TIP]
> 了解如何加固浏览器可能会很有帮助。你可以参阅这份[《网络匿名漫游指南》](https://anonymousplanet.net/guide/#hardening-browsers)章节进行操作。如果你不明白自己在做什么，请不要尝试，否则可能弊大于利，反而损害隐私。

[返回顶部 🔝](#contents)

### 浏览器扩展

#### 反追踪
安装前请先了解扩展的功能。如果不明白自己在做什么，可能反而会损害隐私。此外，扩展过多也会拖慢浏览体验。

- [uBlock Origin](https://ublockorigin.com/) - 免费开源的广告和内容拦截器，占用 CPU 和内存少。
	- [阅读扩展文档](https://github.com/gorhill/uBlock/wiki/Blocking-mode)，并选择一种推荐模式以增强隐私保护。
	- 进入“设置 > 过滤器列表 > 烦人内容”，启用 easylist-cookies，即可屏蔽烦人的 Cookie 弹窗。
- [LibRedirect](https://github.com/libredirect/browser_extension) - 简单的网页扩展，可将 Twitter、YouTube、Google Maps 等请求重定向到尊重隐私的替代服务。原 Privacy Redirect 已停止维护，LibRedirect 是仍在维护的分支。
- [Privacy Badger](https://privacybadger.org/) - EFF 推出的浏览器扩展，会在你浏览时学习拦截追踪器。开源，采用 GPL-3.0 许可。
- [ClearURLs](https://clearurls.xyz/) - 浏览器扩展，可自动从链接和 URL 中剥除追踪参数。开源，采用 LGPL-3.0 许可。

#### 实用工具
- [Single File](https://github.com/gildas-lormeau/SingleFile) - 将整个网页完整保存为单个 HTML 文件，以便离线使用。

### 浏览器同步
- [xBrowserSync](https://www.xbrowsersync.org/) - 理想的浏览器同步：安全、匿名且免费！

[返回顶部 🔝](#contents)

## 举报平台

✅  **请改用**
- [GlobaLeaks](https://www.globaleaks.org/) - 可自行托管的举报平台，面向组织、新闻编辑部和活动人士，可替代托管式举报门户。开源（AGPL-3.0）。
- [SecureDrop](https://securedrop.org/) - 自托管投稿系统，让新闻编辑部通过 Tor 接收匿名来源提交的文件，取代电子邮件和云端上传。开源（AGPL-3.0）。

[返回顶部 🔝](#contents)

## 隐私、安全与匿名性之别

匿名性、隐私和安全常被混为一谈，但它们实际上代表不同的概念。了解它们之间的区别很重要。

- 隐私关乎控制谁能访问你的个人信息、了解有哪些数据正在被收集，以及决定谁能以何种方式访问这些数据。简言之，隐私意味着掌控个人信息。

- 安全指保护个人信息免受未经授权的访问或窃取。它意味着确保数据得到妥善保护和安全存储，令恶意行为者难以访问。

- 匿名性指确保你的行为无法追溯到你本人。也就是说，即使有人发现你在做什么，也无法确定你就是信息来源。

需要注意的是，隐私和安全并非必然相互依存。例如，Google 系统很安全，不太可能被黑客入侵，但 Google 仍然能够访问并使用你的个人数据。

隐私和匿名性也不一定相关。Signal 等服务具有很高的隐私保护水平，因为它们不会收集你说了什么、与谁交谈或如何使用应用的数据；但它们未必匿名，因为你仍需使用电话号码注册（而电话号码通常与你的身份关联）。

最后，也有一些服务可能同时提供匿名性、隐私和安全。本列表主要提供优先考虑隐私的替代方案。这些方案让你掌控自己的数据，且不会收集或出售数据。

[返回顶部 🔝](#contents)

## 图标

| 图标 | 含义 |
|-------|---------|
| 💀    | 注意：该服务似乎已长期停止开发，项目可能已被放弃。使用前请先调查。 |
| ♻️    | 该软件是一个分支：有人复制了原项目，并开始独立继续开发。 |
| 🧩    | 该软件使用 ActivityPub，一种去中心化社交网络协议。 |
| 🤖    | 仅限安卓。 |

[返回顶部 🔝](#contents)
