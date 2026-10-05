# Awesome 隐私资源合集
<p align="center"><img width="500" src="misc/logo.png"> </img></p>
<p align="center">
	<img src="https://awesome.re/badge.svg" alt="Awesome">
	<a href="https://codeberg.org/pluja/awesome-privacy"><img alt="Mirror" src="https://img.shields.io/badge/Mirror-Codeberg-blue"></img></a>
</p>
<p align="center">免费、开源且尊重隐私的服务及其对专有服务的替代方案列表。</p>
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
	- [健身追踪器](#fitness-追踪器)
	- [饮食](#food)
	- [月经周期追踪器](#menstrual-cycle-追踪器)
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
 	- [投资组合追踪器](#portfolio-追踪器)
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
- Evernote Web Clipper -  [糟糕的隐私政策](https://tosdr.org/en/service/207). [应用包含许多追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.evernote/latest/) and require too many permissions.

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
- **DropBox** - [糟糕的隐私政策](https://tosdr.org/en/service/270). 该应用has [various 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/) and requires many permissions.
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
- [Pocketbase](https://pocketbase.io/) - Open Source backend in 1 file written in Go.
- [TrailBase](https://trailbase.io/) - Open source, single-executable Firebase alternative built on Rust and SQLite, with type-safe REST and realtime APIs, auth, and an admin UI. OSL-3.0 licensed.
- [Baserow](https://baserow.io/) - Self-hosted no-code database and spreadsheet that works as an open source Airtable alternative. MIT licensed core.

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

**Adobe** 在设计工具领域的主导地位限制了设计师的选择并损害其隐私。Adobe[lack of Linux support](https://helpx.adobe.com/in/download-install/kb/operating-system-guidelines.html)，使设计师只能使用 Windows 或 macOS。此外，Adobe 通过 Creative Cloud[data collection via Creative Cloud](https://tosdr.org/en/service/417) and [追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.adobe.psmobile/latest/)进一步加剧了隐私问题。他们还可能[使用用户的作品训练其 AI](https://mastodon.art/@Krita/109632425661190494)，这可能引发知识产权问题。因此，设计师可以考虑使用开源且尊重隐私的替代方案，规避大部分此类问题。

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
- **WeTransfer** - [糟糕的隐私政策](https://tosdr.org/en/service/214). Files are not e2e encrypted. Website has many analytics and 追踪器.
- **SendAnywhere** - No e2e encryption. Website has loads of analytics and 追踪器 from Facebook, Google, Cloudflare...

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

### Fitness 追踪器

- [🤖](#icons) [Fitotrack](https://codeberg.org/jannis/FitoTrack) - 注重隐私的安卓健身追踪器。
- [🤖](#icons) [OpenTracks](https://codeberg.org/OpenTracksApp/OpenTracks) - OpenTracks 是一款充分尊重隐私的运动追踪应用。
- [🤖](#icons) [Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge) - 可替代设备厂商闭源安卓应用的免费、无云端服务方案。
- [FitTrackee](https://codeberg.org/FitTrackee/FitTrackee) - 自托管网页应用，可通过 GPS 文件记录并分析户外活动，是 Strava 的替代品（AGPL-3.0）。

### 训练计划工具

- [wger](https://wger.de/en/software/features) - 免费、开源、自托管的网页应用，用于管理锻炼、训练计划和营养。

### 食品
- [OpenFoodFacts](https://world.openfoodfacts.org/) - Open Food Facts 是一个由所有人共同建立、服务于所有人的食品数据库，可帮助你做出更好的饮食选择。
    - [OFF Apps](https://world.openfoodfacts.org/open-food-facts-mobile-app) - 开源的安卓和 iOS 应用，可扫描食品条形码并查看成分、添加剂和营养数据。

### Menstrual cycle 追踪器
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

该游戏归 Microsoft 所有。此外，自 2022 年 3 月 11 日起，游玩 Minecraft 还需要 Microsoft 帐户。Microsoft 会在帐户创建后不久锁定部分帐户，并[forces the user](https://github.com/MultiMC/Launcher/issues/4093) [to provide](https://www.reddit.com/r/privacy/comments/e6x27o/microsoft_forcing_me_to_give_then_my_phone_number/) 提供一个**电话号码**。参见：[Minecraft FAQ](https://help.minecraft.net/hc/en-us/articles/360050865492-Minecraft-Java-Edition-Account-Migration-FAQ), [1](https://www.reddit.com/r/Minecraft/comments/sl8pkv/how_can_my_friend_migrate_her_account_to/hvq2sv6/), [2](https://www.reddit.com/r/privacy/comments/spcuj4/microsoft_is_going_to_attempt_to_move_everyone_on/)

自 v21w38a 起，游戏内置了[telemetry embeded in it since v21w38a which you can't opt-out](https://bugs.mojang.com/browse/MC-237493)。此外，[游戏还受制于](https://www.minecraft.net/en-us/terms) 所列的[Microsoft privacy terms](https://privacy.microsoft.com/en-us/privacystatement)，其隐私条款令人担忧。

✅  **请改用**
- [Luanti](https://www.luanti.org/) - An open source voxel game engine with many features.
    - [Mineclonia](https://content.luanti.org/packages/ryvnf/mineclonia/) - Survival sandbox game inspired by Minecraft. Fork of MineClone2 with focus on stability, multiplayer performance and features. 

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
No single point of control或failure. A decentralized network operated by different servers from different volunteers around the globe. You choose where your data stays或you can self-host your own server. Somewhat more complex protocols (because of federation between servers) and some extra metadata is added 所列的messages (without compromising privacy).

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
No servers involved. Everything goes directly from one peer 所列的other peer. No point of failure或control. The features are reduced because of the lack of server, messaging can be slower. Best option for critical chats.

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
- [Nextcloud Phonetrack](https://apps.nextcloud.com/apps/phonetrack) - Nextcloud app to track location history with an [Android app](https://gitlab.com/eneiluj/phonetrack-android) ([other apps also supported](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)). Supports caching positions offline and sending them 所列的server in batches. The first-party app has good battery saving options.
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
- **Amazon Prime** - [糟糕的隐私政策](https://tosdr.org/en/service/2444). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Many permissions are required for a streaming app.
- **Netflix** - [糟糕的隐私政策](https://tosdr.org/en/service/185). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Many permissions are required for a streaming app.
- **Disney Plus** - [Very bad privacy policy](https://tosdr.org/en/service/2745). Apps have [various 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Many permissions are required for a streaming app.
- **Plex** - [Dubitous privacy policy](https://tosdr.org/en/service/1567). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/). Way too many permissions are required for a streaming app.
- **Spotify** - [Very bad privacy policy](https://tosdr.org/en/service/225). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/). Way too many permissions are required for a streaming app.
- **Deezer** - [糟糕的隐私政策](https://tosdr.org/en/service/2516). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Way too many permissions are required for a streaming app.
- **SoundCloud** - [Dubitous priavcy policy](https://tosdr.org/en/service/276). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/). Way too many permissions are required for a streaming app.

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
- [SimpMusic](https://github.com/Maxrave-Dev/SimpMusic) - Open source, actively maintained YouTube Music client for Android (successor 所列的discontinued ViMusic and RiMusic).

**Deezer 替代客户端**
- [dzr](https://github.com/yne/dzr) - 适用于 Linux、BSD、Android+Termux 的命令行 Deezer 播放器。

#### 播客

⛔ **请避免** 

- **Spotify** - [Very bad](https://tosdr.org/en/service/225) privacy policy. They collect tons of data about you: mood, free time, likes, dislikes, friends..。此外，their apps have [way too many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/).
- **iVoox** - Their apps are [filled with 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/). Their website has 追踪器.
- **Audible** - [Very bad](https://tosdr.org/en/service/190) privacy policy. Their app has [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.audible.application/latest/).
- **Deezer** - [糟糕的隐私政策](https://tosdr.org/en/service/2516). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Way too many permissions are required for a streaming app.

✅  **请改用**

- [Antennapod](https://antennapod.org) - 完全开放的播客播放器，可订阅任意 RSS 订阅源。 
- [Castopod](https://castopod.org) - 轻松自行托管播客，掌控自己的创作，并直接与听众交流，无需中间方。播客及其听众只属于你。 
- [Funkwhale](https://funkwhale.audio/) - 享受和分享音频的社交平台。

[返回顶部 🔝](#contents)

## 笔记与任务
⛔ **请避免** 

These providers offer apps and services filled with data 追踪器。此外，most of them store your notes on their servers and do not offer any kind of encryption.

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
- [Obsidian](https://obsidian.md) - Obsidian is the private and flexible note‑taking app. Closed source but has no 追踪器 (website / apps) and E2EE sync. 
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
> 自定义 ROM 既可能提升隐私，也可能降低安卓安全性；务必使用支持验证启动和加密、且**默认未启用** root 的 ROM。尽可能不要使用 userdebug 构建版本。如果你的威胁模型要求高度安全，请购买 Google Pixel 并安装 GrapheneOS。[Read more on PrivacyGuides](https://www.privacyguides.org/android/overview).

#### 安卓-Based

**GrapheneOS** 高度重视安全和隐私。它采用多种技术缓解漏洞，并大幅增加漏洞利用难度，从而提升操作系统及其上运行的应用的安全性。

- [GrapheneOS](https://grapheneos.org/) - GrapheneOS 是一款注重隐私和安全、兼容安卓应用的开源移动操作系统。仅支持 **Google Pixel** 手机。

这些 ROM 同样注重隐私，和/或支持更多设备。请注意，它们也可能降低安全性，扩大操作系统的攻击面。

- [CalyxOS](https://calyxos.org/) - 隐私保护设计的 ROM。安全性优于 LineageOS 或 Replicant。
- [LineageOS](https://lineageos.org/) - 基于安卓移动平台、适用于多种设备的免费开源操作系统。
- [/e/OS](https://e.foundation/e-os) - Murena 推出的去 Google 化安卓 ROM，内置 microG 和可选云服务。开源，采用 GPL-3.0 许可。
- [iodéOS](https://iode.tech/iodeos) - Degoogled Android ROM with a built-in network firewall that blocks ads and 追踪器. Open source, GPL-3.0 licensed.

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

GNU/Linux is a family of free (as in freedom and as in free beer) and open source Operating Systems mostly developed by the community. If you don't know where to start these are good options for begginers:

- [Fedora](https://fedoraproject.org/) - Community Linux distribution sponsored by Red Hat, shipping recent open source software on a six-month cycle.
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) is a beginner friendly distribution.
- [Qubes OS](https://qubes-os.org/) is a security-oriented operating system that isolates various workspaces into separate virtual machines to enhance privacy and security.
- [Tails](https://tails.net/) is a portable operating system that protects against surveillance and censorship. It always starts from the same clean state and everything you do disappears automatically when you shut down Tails.
- [Whonix](https://www.whonix.org/) is an operating system that runs inside virtual machines and forces every connection through Tor.
- [Kicksecure](https://www.kicksecure.com/) is a hardened Debian-based distribution from the Whonix developers, secure by default.
- [secureblue](https://secureblue.dev/) is a hardened image built on Fedora Atomic Desktops, with security-focused defaults and a hardened browser.

> [!TIP]
>  If you want to try it out without installing it to your computer, you can use a [Live USB Stick](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm). You can also investigate [Ventoy](https://www.ventoy.net) to easily download and test linux distros with a USB stick.

> [!TIP]
> If you want to install Linux but keep your current operating System, you can set up [dual boot](https://averagelinuxuser.com/dualboot-linux-windows/).

> [!NOTE]
> Not all Linux distributions are free (as in freedom), free (as in free beer)或respect user privacy. There are tons of GNU/Linux distributions and you should investigate a bit before jumping into one of them!

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

These tools are useful when sharing secrets, code snippets或any other kind of text with others in a private way.

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
> [Bitcoin](https://bitcoin.org)既不匿名也不私密。比特币可追踪、透明且使用假名。入门介绍请看[see aantonop' 的视频](https://yewtu.be/watch?v=JN1Bowgcle8).。进阶用户可以观看这部[比特币隐私系列](https://yewtu.be/watch?v=QEnL5k0R08w).

### Wallets

- [Sparrow Wallet](https://www.sparrowwallet.com/) - 开源跨平台桌面钱包，提供多种保护隐私的支付工具。
- [Wasabi Wallet](https://www.wasabiwallet.io/) - 适用于桌面的开源、非托管、注重隐私的比特币钱包。
- [Cake Wallet](https://cakewallet.com) - 适用于移动端和桌面的开源非托管钱包，支持 Monero、Bitcoin 等加密货币。采用 MIT 许可。
- [Feather Wallet](https://featherwallet.org/) - 轻量级开源 Monero 桌面钱包，内置 Tor 和币种控制功能。采用 BSD-3 许可。

### Payment Processors

- [BTCPay Server](https://btcpayserver.org) - Self-hosted, non-custodial cryptocurrency payment processor for merchants, as an alternative to PayPal或BitPay. MIT licensed.

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

- Tricount - App size is massive (~200MB) and contains many 追踪器 from Facebook, Google and Huawei.
- Splitwise - App contains 追踪器 from Google and Amazon.

✅  **请改用**

- [Spliit](https://github.com/spliit-app/spliit#readme) - 与朋友和家人分摊开支。无广告、无需帐户、开源且永久免费。
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [网站](https://splitpro.app) - 免费与朋友分摊开支的开源 SplitWise 替代方案。
- [IHateMoney](https://ihatemoney.org/) - 轻松管理共同开支。不支持不均等分摊。
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Nextcloud Cospend 和 IHateMoney 服务器的安卓客户端。
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - 受优秀项目 IHateMoney 启发的群组/共同预算管理器。
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Nextcloud Cospend 和 IHateMoney 服务器的安卓客户端。

### 其他 

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - With Debitum you can track all kinds of IOUs, be it money或lent items.

### Portfolio 追踪器

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
- [Nextcloud](https://nextcloud.com/) - 开源的自托管效率平台，让你掌控自己的数据。 It has a [*Photos*](https://github.com/nextcloud/photos) plugin to help you organize and visualize your photos.
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
- [MAT2](https://github.com/jvoisin/mat2) - Removes metadata from images, documents, audio and other files. Command line tool with file manager integrations.
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - Simple desktop app to view and remove file metadata, built on MAT2.
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Forensic tool from Amnesty International that checks Android and iOS devices for traces of spyware such as Pegasus.

### 安卓

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - The privacy audit platform for Android applications. Find how many 追踪器 your apps have.
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Checks apk(s) for known 追踪器 (provided by Exodus) +other warnings and specs. 
- [Plexus](https://plexus.techlore.tech/) - Remove the fear of Android app compatibility on de-Googled devices. Find if an app will work on a De-Googled device.
- [Netguard](https://netguard.me/) - A simple way to block access 所列的internet per application.
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - An open-source, no-root firewall and DNS changer, with anti-censorship capabilities for Android 6+.
- [🤖](#icons) [Orbot](https://orbot.app/) - Routes app traffic through the Tor network, system-wide as a VPN或per app. Made by the Guardian Project.

[返回顶部 🔝](#contents)

## Remote Access and Control
⛔ **请避免**
- TeamViewer
- AnyDesk

✅  **请改用**
- [RustDesk](https://rustdesk.com/) - Open-source remote desktop client software, written in Rust. Works out of the box, full control of your data, with no concerns about security.
- [screego](https://screego.net/) - Screen sharing for developers.
- [Remmina](https://remmina.org/) - Remote access screen and file sharing to your desktop (RDP).
- [UltraVNC](https://www.uvnc.com/) - UltraVNC is a powerful, easy to use and free - remote pc access softwares - that can display the screen of another computer (via internet或network) on your own screen.
- [MeshCentral](https://meshcentral.com/) - The open source, multi-platform, self-hosted, feature packed web site for remote device management.
- [Apache Guacamole](https://guacamole.apache.org) - Clientless self-hosted remote desktop gateway that gives RDP, VNC, and SSH access from a browser. Apache-2.0 licensed.
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - Self-hosted desktop and game streaming host (Sunshine) with matching clients (Moonlight). Open source, GPL-3.0 licensed.

[返回顶部 🔝](#contents)

## Routers
⛔ **请避免**
- Stock ISP routers and vendor firmware: closed source, slow或missing security updates, and often phone home 所列的vendor或ISP.

✅  **请改用**
- [OpenWrt](https://openwrt.org/) - Open source Linux firmware that replaces the stock software on hundreds of consumer routers, with years of security updates.
- [OPNsense](https://opnsense.org/) - Open source firewall and routing platform based on FreeBSD, for dedicated hardware或a spare PC.
- [IPFire](https://www.ipfire.org/) - Hardened open source Linux firewall distribution with intrusion prevention and a web interface.

[返回顶部 🔝](#contents)

## RSS Readers
⛔ **请避免**
- Feedly
- Inoreader
- Google News

These services build a profile from everything you read. A local或self-hosted reader fetches feeds directly, so nobody sees your reading list.

✅  **请改用**
- [FreshRSS](https://freshrss.org/) - Self-hosted feed aggregator with a web interface, multi-user support and an API for mobile apps.
- [Miniflux](https://miniflux.app/) - Minimalist self-hosted feed reader with no tracking, written in Go.
- [NetNewsWire](https://netnewswire.com/) - Open source RSS reader for macOS and iOS that works locally或syncs with self-hosted services.
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - Open source desktop RSS reader for Windows, macOS and Linux.
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - Open source RSS reader for Linux that works locally或with self-hosted services such as Miniflux and FreshRSS.
- [Newsboat](https://newsboat.org/) - RSS reader for the terminal.
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - Open source RSS reader for Android that fetches feeds directly on your device, with no account.
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - Open source Material You RSS reader for Android, local或synced with self-hosted services.
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - Open source RSS reader for Android, local或synced with Miniflux and FreshRSS.

[返回顶部 🔝](#contents)

## Search Engines

⛔ **请避免**
- Google [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Yahoo! [![](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- Bing
- Yandex [![](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- Ecosia [![](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

✅  **请改用**
- [librengine](https://github.com/liameno/librengine) [💀](#icons) - Privacy Web Search Engine 
- [SearxNG](https://github.com/searxng/searxng) - Free internet metasearch engine which aggregates results from various search services and databases.  
- [DuckDuckGo](https://duckduckgo.com) - A privacy respecting search engine.
- [Brave Search](https://search.brave.com) - A privacy respecting search engine with [its own independent index](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - A zero tracking search engine made and hosted in France, EU.
- [Marginalia](https://marginalia-search.com/) - Independent search engine with its own crawler and index that favors text-heavy, non-commercial pages. Self-hostable, AGPL-3.0 licensed.
- [YaCy](https://yacy.net/) - Peer-to-peer decentralized search engine where every user runs a node and shares the index. Open source, GPL-2.0 licensed.

[返回顶部 🔝](#contents)

## Social Networks and Platforms

> [!NOTE]
> **The fediverse**
>
> The fediverse is a "**fed**erated" "un**iverse**" of social network platforms that are able to talk to one another through a standard and open protocol. This means that you can consume content on any network from any of these networks. You are not locked to a single provider, you are free to choose. Please [watch thi 的视频](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) by FramaSoft that illustrates the concept very good.
>
> Ideally, we should all move 所列的fediverse and abandon the centralized and monopolized social networks that are now the most popular (Twitter, Reddit, Instagram...).
>
> All the apps compatible with the Fediverse (ActivityPub) are marked with a [🧩](#icons)

> [!NOTE]
> **Alternative frontends and clients**
>
> Alternative frontends are good to protect your individual privacy. You can still consume the contents of privative and privacy-harmful services with protection over your privacy and some anonymity. Even using most these alternative frontends, still, the privative services will receive requests about the content you are consuming (even not knowing it is you). This sitll harms the collective privacy and adds data to their algorithms in some ways. Only the alternative frontends (or clients) that act as a proxy will hide your real IP from the content provider. 
>
> You can use these browser extensions and apps to automatically redirect any links to privacy-respecting alternative frontends:
> - [LibRedirect](https://github.com/libredirect/browser_extension#get) - A web extension that redirects YouTube, Twitter... requests to alternative privacy friendly frontends and backends.
> - [UntrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - Transform Youtube, Twitter & other links to their free and open source alternatives.



### Blogging platforms (Medium)

⛔ **请避免**:
- **Medium** - website has Google 追踪器 and ads.
- **Blogger** - Google owned, has google 追踪器 and ads.

✅ **Alternatives:**
- [Plume](https://github.com/Plume-org/Plume) [🧩](#icons) - Federated blogging application, thanks to ActivityPub.
- [WriteFreely](https://writefreely.org/) [🧩](#icons) - An open source platform for building a writing space on the web.

✅ **Alternative Medium frontends:**
- [Scribe](https://git.sr.ht/~edwardloveall/scribe/) - Medium alternative forntend inspired by Invidious.

### Instagram

[![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

⛔ Don't use Instagram (or at least the official client). Instagram is a very privacy-invasive app with biased results and feeds based on user profiles, it is also used as a manipulation tool and has a lot of censorship going against free speech. Lastly, it has an addictive and toxic UI design.

✅ **请改用**

**Alternatives to Instagram**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Decentralized, federated and Open Source alternative to Instagram with posts, videos, stories, tags, etc.

### Quora

⛔ Quora's website has ads and 追踪器 that are used to get your data which is then sold/shared to third parties. Their [privacy policy](https://tosdr.org/en/service/314) is bad.

✅ **Quora alternative frontends (web-based):**
- [Quetre](https://github.com/zyachel/quetre) - Quetre is an alternative front-end to Quora. It enables you to see answers without ads, 追踪器, and other such bloat.


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ Don't use YouTube (or at least the official client). YouTube is very privacy invasive, it generates a very accurate profile based on your interests. Also it is a [radicalization tool](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization) which shows [biased content to users](https://arxiv.org/pdf/1908.08313.pdf) in order to get more engagement and to get them to watch more and more content creating an [addiction](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883). It never shows you [alternative opinions](https://arxiv.org/pdf/1908.08313.pdf) to your ideology/bias. YouTube censors a lot. YouTube collects a LOT of your data: interests, free time, ideology, likes, dislikes, music taste, etc.

✅ **请改用**
- [Peertube](https://joinpeertube.org/en/) [🧩](#icons) - A free, open and decentralized alternative to video platforms.
- [Odysee](https://odysee.com/) - Odysee is a video platform backed by the creators of lbry and uses the lbry blockchain protocol.
- [DTube](https://github.com/dtube/dtube) - A full-featured video sharing website, decentralized.

✅ **YouTube alternative frontends (web-based):**
- [Invidious](https://github.com/iv-org/invidious) - Alternative and privacy respecting YouTube frontend.
- [Piped](https://github.com/TeamPiped/Piped) - An alternative privacy-friendly YouTube frontend which is efficient by design.
- [ViewTube](https://github.com/ViewTube/viewtube) - ViewTube is an alternative privacy-friendly YouTube frontend written in Vue.js
- [Youtube-Local](https://github.com/user234683/youtube-local) - browser-based client for watching Youtube anonymously and with greater page performance.

✅ **YouTube alternative clients (apps):**
- [🤖](#icons) [NewPipe](https://newpipe.net/) - Alternative Android YouTube app. No account needed, privacy respecting, no ads.
- [🤖](#icons) [SkyTube](https://github.com/SkyTubeTeam/SkyTube) - Alternative Android YouTube app. No account needed, privacy respecting, no ads.
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - FreeTube is an open source desktop YouTube player built with privacy in mind. (Uses Local RSS API或Invidious for backend).
- [🤖](#icons) [LibreTube](https://github.com/Libre-tube/LibreTube) - An alternative frontend for YouTube, for Android using Piped.
- [Yattee](https://github.com/yattee/yattee) - Alternative YouTube frontend for iOS, tvOS and macOS built with Invidious and Piped.
- [🤖](#icons) [Clipious](https://github.com/lamarios/clipious) [💀](#icons) Invidious client for android

### TikTok

[![](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

⛔ Avoid using TikTok, it is a toxic-designed application that harms not only the user privacy but also user integrity. You can take a read on [these several posts](https://www.reddit.com/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all).

✅ **TikTok alternative frontends (web-based):**
- [ProxiTok](https://github.com/pablouser1/ProxiTok) - Open source alternative frontend for TikTok

### Twitter

[![](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

⛔ Avoid using Twitter official app / website. It tracks users and creates user profiles based on what they follow, retweet and like. Twitter harms and violates user privacy with their policies [by default](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings). 

#### 自行托管

- [Memos](https://github.com/usememos/memos) - An open-source, self-hosted memo hub with knowledge management and socialization.

#### 去中心化

- [Nostr](https://nostr.com/) - Open protocol that is able to create a censorship-resistant global "social" network. It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on P2P techniques, therefore it works. **Note**: Nostr is a protocol, so it is capable of offering much more than a Twitter alternative.

> [!NOTE]
> **Federated social networks**: A federated social network isn't a single website like Twitter或Facebook, it's a network of thousands of communities operated by different organizations and individuals that provide a seamless social media experience.

- [Mastodon](https://joinmastodon.org/) [🧩](#icons) - Free, federated microblogging social network built on open protocols.
  - [Mastodon Apps](https://joinmastodon.org/apps) - List of Mastodon apps for Android, iOS, Web and Desktop.
- [Pleroma](https://pleroma.social/) [🧩](#icons) - Pleroma is a free, federated social networking server built on open protocols.
  - [Soapbox](https://gitlab.com/soapbox-pub/soapbox-fe) - A frontend for Pleroma with a focus on custom branding and ease of use.

#### Alternative Frontends
- [Nitter](https://github.com/zedeus/nitter/wiki/Instances) [💀](#icons) - Nitter is a free and open source alternative Twitter front-end focused on privacy.
- [Squawker](https://github.com/j-fbriere/squawker) - Open source Twitter client for Android, the maintained fork of Fritter.
- [Feetter](https://codeberg.org/pluja/Feetter) [💀](#icons) - Create, sync and manage Nitter feeds without registration from any device.

### Reddit

[![](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

⛔ Try to avoid using Reddit或at least avoid their official clients as they are plenty of 追踪器, ads and share unnecessary user data with their servers.

✅ **Reddit alternatives:**
- [Aether](https://getaether.net/) - Peer-to-peer ephemeral public communities.
- [Mbin](https://github.com/MbinOrg/mbin) [🧩](#icons) - A reddit-like content aggregator and micro-blogging platform for the fediverse; the community-maintained continuation of kbin.
- [Lemmy](https://join-lemmy.org/) [🧩](#icons) - A federated and open alternative to Reddit in Rust.

✅ **Privacy respecting Reddit clients:**
- [Redlib](https://github.com/redlib-org/redlib) - An alternative private front-end to Reddit, with its origins in Libreddit.

### Streaming Platforms (Twitch)

[![](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

⛔  Avoid using platforms as Twitch, Patreon, YouTube as they are very privacy-invasive with your viewers (and you!). Instead, you can try using some self-hosted platforms that do take care of everyone's privacy.

✅ **Alternatives:**
- [Owncast](https://github.com/owncast/owncast) - Take control over your live stream video by running it yourself. Streaming + chat out of the box.

✅ **Privacy respecting Twitch clients:**
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - Open source, ad-free Twitch browser and stream player，适用于安卓。

[返回顶部 🔝](#contents)

### Imgur

[![](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

⛔ Imgur website is plenty of bloat, gifs, cookies, javascript and 追踪器.

✅ **Alternatives:**
- [rimgo](https://codeberg.org/video-prize-ranch/rimgo#instances) - An alternative frontend for Imgur. Read-only, no-js, Based on rimgu and rewritten in Go.

[返回顶部 🔝](#contents)

### IMDb

⛔ IMDb is owned by Amazon and its website is loaded with ads and third-party 追踪器.

✅ **IMDb alternative frontends:**
- [libremdb](https://libremdb.iket.me/) - Alternative privacy-respecting frontend for IMDb that removes ads and 追踪器. Open source and self-hostable (AGPL-3.0).

[返回顶部 🔝](#contents)

### Fandom

⛔ Fandom wikis (formerly Wikia) are overloaded with ads, autoplaying video, and 追踪器.

✅ **Fandom alternative frontends:**
- [BreezeWiki](https://breezewiki.com/) - Alternative frontend for Fandom wikis that strips ads, video, and clutter. Open source and self-hostable.

[返回顶部 🔝](#contents)

## Teamworking Tools
⛔ **请避免**
- [![](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

✅  **请改用**
- [Zulip](https://zulip.com/) - Chat for distributed teams.
- [Stoat](https://stoat.chat/) (formerly Revolt) - User-first chat platform built with modern web technologies.
- [Twake](https://twake.app/) - Work in a team faster. Twake covers all of your organizational needs through a single platform.
- [RocketChat](https://rocket.chat/) - Control your communication, manage your data, and have your own collaboration platform to improve team productivity.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Keep conversations private with Nextcloud Talk.
- [Mattermost](https://mattermost.com/) - Open-source Slack alternative.

> [!WARNING]
> **Alternative clients/modifications of Discord:**
> Your IP and messages will still be shared and belong to Discord and they are not encrypted.\
> Also using any of these modifications/clients [violates](https://x.com/discord/status/1006178587731550208) the [Discord ToS](https://discord.com/terms) so, we are not responsible of any suspension或termination of your account **but**, this should [not happen **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).

- [See this section for Discord mods and alternative clients](https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[返回顶部 🔝](#contents)

## Screen recording

- [Screenity](https://screenity.io/) - A powerful privacy-friendly screen recorder and annotation tool to make better videos for work, education, and more.
- [OBS](https://obsproject.com/) - 免费开源的视频录制与直播软件。

[返回顶部 🔝](#contents)

## Translation
⛔ **请避免**
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

✅ **Text translation**
- [Mozilla Translate](https://mozilla.github.io/translate/) - Open Source, runs model locally in your browser.
- [Libretranslate](https://libretranslate.com/) - Open Source Machine Translation - 100% Self-Hosted. No Limits. No Ties to Proprietary Services.
- [Apertium](https://apertium.org/) - A free/open-source machine translation platform, runs offline on your computer
- [Softcatala](https://www.softcatala.org/traductor/) - Open Source Translation tool - Only Catalan/Spanish/English/French (uses apertium)
- [TranslateLocally](https://github.com/XapaJIaMnu/translateLocally) – Free/open-source neural MT, runs offline on your computer
- [Linguist](https://linguister.io) - A free and Open Source full-featured translation solution in-browser with embedded offline translator and [custom translators](https://linguister.io/docs/CustomTranslator). Full-page translation, TTS, dictionary, translation for user input and selected text on page.

✅ **Alternative Google Translate frontends**
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) [💀](#icons) - Alternative front-end for Google Translate. [Demo](https://lingva.ml/).
- [Simplytranslate](https://codeberg.org/ManeraKai/simplytranslate) - Alternative front-end for Google Translate and LibreTranslate. [Demo](https://simplytranslate.org/)
- [Mozhi](https://codeberg.org/aryak/mozhi) - Alternative frontend that aggregates Google Translate, DeepL, Yandex, and other engines behind one private UI. Self-hostable, AGPL-3.0 licensed.

[返回顶部 🔝](#contents)

## Uncategorized
- [Skymap](https://skymaponline.net/) - Open online planetarium program.
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - An open-source, modernized and collaborative fail2ban.
- [Hetty](https://github.com/dstotijn/hetty) - Hetty is an HTTP toolkit for security research. It aims to be an open-source alternative to Burp Suite Pro.
- [Visited](https://github.com/didvc/visited) - Locally collect browsing history over browsers.

[返回顶部 🔝](#contents)

## Utilities
- [Deskreen](https://github.com/pavlobu/deskreen) - Turn any device into a secondary screen for your computer.

[返回顶部 🔝](#contents)

## Version Control
⛔ **请避免**

- **Github** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297), although the privacy policy is not 很糟糕, it is owned by Microsoft, and it's common knowledge that it uses the code it hosts to train AI models.

✅  **请改用**
- [Codeberg](https://codeberg.org/) -  Codeberg is a collaboration platform providing Git hosting and services for free and open source software, content and projects. 
- [Forgejo](https://forgejo.org/) - Forgejo is a self-hosted lightweight software forge.
- [GitLab](https://about.gitlab.com/) - GitLab a DevOps software package that can develop, secure, and operate software.
- [Radicle](https://radicle.dev/) - An open source, peer-to-peer code collaboration stack built on Git. Unlike centralized code hosting platforms, there is no single entity controlling the network. Repositories are replicated across peers in a decentralized manner, and users are in full control of their data and workflow.
- [Gitea](https://gitea.com) - Lightweight self-hosted Git forge and the project Forgejo was forked from. Open source, MIT licensed.

[返回顶部 🔝](#contents)

## Video and Audio Conferencing
⛔ **请避免**

- **Zoom** - [Very bad privacy policy](https://tosdr.org/en/service/2198). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videomeetings/latest/). Many permissions required.
- **Skype** - [Very bad privacy policy](https://tosdr.org/en/service/244). Apps have [Google and Microsoft 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/). Way too many permissions required.
- **Google Meet** - [Very bad privacy policy](https://tosdr.org/en/service/217). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/) embeded (as it is a Google app). Way too many permissions required.
- **Whatsapp** - [糟糕的隐私政策](https://tosdr.org/en/service/198). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/) and most probably Facebook 追踪器 embeded (as it is a Facebook app). Way too many permissions required.
- **Instagram** - [Very bad privacy policy](https://tosdr.org/en/service/219). Apps have [Facebook 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/). Way too many permissions required.
- **Discord** - [Very bad privacy policy.](https://tosdr.org/en/service/536). Apps have [various 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/). Many permissions required.
- Clubhouse

✅  **请改用**
- [BigBlueButton](https://bigbluebutton.org/) - BigBlueButton is a web conferencing system designed for online learning.
- [Briefing](https://github.com/holtwick/briefing/) - Secure direct video group chat. Only open technologies (such as WebRTC) are used, which work with all modern browsers.
- [Chitchatter](https://chitchatter.im/) - Secure P2P chat that is serverless, decentralized, and ephemeral. Supports text, audio, video, screen, and file sharing.
- [Jam](https://github.com/jam-systems/jam) [💀](#icons) - Jam is your own open source Clubhouse for mini conferences, friends, communities.
- [Jami](https://jami.net/) - P2P audio and video conferences.
- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - More secure, more flexible, and completely free video conferencing. If you use the official instance, you will need to login. Self-hosting is recommended.
- [Mirotalk P2P](https://p2p.mirotalk.com/) - Free WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms.
- [Mumble](https://www.mumble.info/) - Mumble is an open source voice communication application with advanced features.
- [PeerCalls](https://github.com/peer-calls/peer-calls) - Group peer to peer video calls for everyone written in Go and TypeScript.
- [Nextcloud Talk](https://nextcloud.com/talk/) - Self-hosted video calls and chat that run inside your own Nextcloud server over WebRTC (AGPL-3.0).


##### Alternative clients/modifications of Discord:
> [!WARNING]
> Your IP and messages will still be shared and belong to Discord and they are not encrypted.\
> Also using any of these modifications/clients [violates](https://x.com/discord/status/1006178587731550208) the [Discord ToS](https://discord.com/terms) so, we are not responsible of any suspension或termination of your account **but**, this should [not happen **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).
- [OpenAsar](https://openasar.dev/) - An open-source alternative of Discord desktop's app.asar that comes with a [No Tracking](https://github.com/GooseMod/OpenAsar#readme) option that disables Discord's crash and error reporting.
- [Vencord](https://github.com/Vendicated/Vencord) - A Discord client mod that does things differently.
- [BetterDiscord](https://betterdiscord.app/) - A client modification for Discord, also you need to install a [DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) plugin to block 追踪器.
- [Kernel](https://github.com/kernel-mod/electron) [💀](#icons) - A super small and fast Electron client mod with the most capability, also you need to install a [Discord Utilities](https://github.com/slow/discord-utilities) package to block 追踪器.
- [Replugged](https://replugged.dev/) - A continuation of the deprecated client mod [Powercord](https://powercord.dev).
- [WebCord](https://github.com/SpacingBat3/WebCord) - A Discord and Fosscord API-less client made with the Electron.
- [🤖](#icons) [Aliucord](https://github.com/Aliucord/Aliucord) - A modification for the Android Discord app that fully [disables the Discord Tracking](https://github.com/Aliucord/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).
- [Vesktop](https://vesktop.dev/) - Standalone desktop client for Discord that blocks its telemetry and ships with Vencord built in. Open source, GPL-3.0 licensed.

[返回顶部 🔝](#contents)

## Video Editing
⛔ **请避免**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolve

Such programs come filled with 追踪器 and telemetry. You can get a full list of reasons of why you should **not** use Adobe [here](https://www.gnu.org/proprietary/malware-adobe.html). Almost the same apply for many privative editors.

✅  **请改用**

- [kdenlive](https://kdenlive.org/) - Open source video editor. Free and easy to use for any purpose, forever.
- [LosslessCut](https://github.com/mifi/lossless-cut) - LosslessCut aims to be the ultimate cross platform FFmpeg GUI for extremely fast and lossless operations on video, audio, subtitle and other related media files.
- [Olive Video Editor](https://olivevideoeditor.org/) - Free open-source advanced non-linear video editor currently in Alpha state.
- [OpenCut](https://github.com/OpenCut-app/OpenCut) - [beta] A free, open-source video editor for web, desktop, and mobile.
- [Shotcut](https://www.shotcut.org/) - Shotcut is a free, open source and simple cross-platform video editor.

[返回顶部 🔝](#contents)

## VPNs

⛔ **请避免**

- [Free VPNs](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) from Google Play或any appstore. These services are not free as they will suck your connections' data, keep logs and profile you to [sell your data to advertisers](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties). If a government wants to track someone, such apps will be the first ones to fall.

- Closed source VPN apps such as Surfshark或NordVPN may be less trustworthy as nobody can be sure how they handle your data。此外，paying with Credit Card will get you identified on the payment. Furthermore, if you need to give your email it will also identify you if this same email has been used in other services.


✅  **请改用**

Here are some open source and truly private (no personal data and/or credit card needed) options:

- [IVPN](https://ivpn.net) - No-logs VPN with open source apps, no-email signup, and cash, Monero,或Bitcoin payment.
- [nadanada](https://nadanada.me) (formerly LNVPN) - Pay-per-use WireGuard VPN with no account, paid by Lightning Network或other cryptocurrency.
- [Mullvad VPN](https://mullvad.net) - No-logs VPN with open source apps, anonymous numbered accounts, and cash或cryptocurrency payment.
- [Proton VPN](https://protonvpn.com) - Swiss no-logs VPN with open source, 经过审计 apps on every platform and a no-data-cap free tier.
- [SPN](https://safing.io/) - Open source, system-wide network that routes each app connection through its own path across multiple nodes, giving per-connection IP separation instead of a single shared exit. Built in所列的Safing Portmaster firewall for Windows and Linux.
- [Amnezia VPN](https://amnezia.org) - Self-hosted, censorship-resistant VPN that you deploy on your own server, with 经过审计 open source apps (GPL-3.0).
- [Find more at kycnot.me (VPN Category)](https://kycnot.me/?categories=vpn) - KYC-free VPN providers.

[返回顶部 🔝](#contents)

## Web Browser

⛔ **请避免**

- **Google Chrome** - Owned by google and built upon the open-source Chromium project (also Google-owned). It comes with many privacy-invasive features, it is connected to your Google account most times. It is under [Google's privacy policy](https://tosdr.org/en/service/217) which is known to be 很糟糕. Google is willing to enforce the [Manifest v3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) which is outright harmful to privacy efforts.
- **Microsoft Edge** - It's a Microsoft-themed version of Chromium with Microsoft 追踪器 instead of Google ones. Under [Microsoft's privacy policy](https://tosdr.org/en/service/244), which is also 很糟糕. If you still want to use it, you can [follow this guide](https://anonymousplanet.net/guide/#hardening-edge) to harden it a bit.
- **Opera** - Opera was [acquired by a consortium of Chinese investors](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). 该应用has [many 追踪器](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **请改用**

#### 安卓 / iOS
- [Brave](https://brave.com/) - Android/iOS. Brave offers a pretty good out-of-the-box set of privacy and tracker protections.
- [Firefox](https://www.firefox.com/en-US/mobile/) - Android/iOS
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Mull browser fork. A hardened fork of Firefox for Android, with proprietary blobs removed.
- [🤖](#icons) [Vanadium](https://vanadium.app/) - Privacy and security enhanced releases of Chromium by GrapheneOS.
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/)
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Defend yourself against tracking and surveillance and circumvent censorship.
- [Cromite](https://github.com/uazo/cromite) - Cromite is a Chromium fork based on Bromite with built-in support for ad blocking and an eye for privacy.

#### 桌面端
- [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) - A lightweight approach to removing Google web service dependency. Ungoogled-chromium is Google Chromium, sans dependency on Google web services.
- [Brave](https://brave.com/) - Brave offers a pretty good out-of-the-box set of privacy and tracker protections.
- [Firefox](https://www.firefox.com/en-US/) - Open Source, independent browser. It needs some [hardening and tweaking](https://anonymousplanet.net/guide/#hardening-firefox) to achieve great privacy.
  - [LibreWolf](https://librewolf.net/) - Privacy-focused Firefox fork.
- [Tor Browser](https://www.torproject.org/) - Hardened Firefox that routes traffic through the Tor network to resist tracking, surveillance, and censorship.
- [Mullvad Browser](https://mullvad.net/en/browser/) - Browser with the privacy and security implications of the Tor Browser, without the use of the Tor network.
- [Zen Browser](https://zen-browser.app/) - Firefox-based browser with enhanced tracking protection on by default and a focus on calm, uncluttered browsing. MPL-2.0 licensed.
- [Floorp](https://floorp.app/) - Firefox fork with telemetry disabled and extra customization, built with privacy in mind. Open source, MPL-2.0 licensed.

> [!TIP]
> It may be interesting to learn what you can do to harden your browser. You can follow this [Hitchhiker’s Guide to Online Anonymity](https://anonymousplanet.net/guide/#hardening-browsers) section to do it. Please, if you don't understand what you are doing, don't do it as you may be causing more harm than good to your privacy.

[返回顶部 🔝](#contents)

### Browser Addons

#### Anti-tracking
Please read about what the addon does before installing. If you don't understand what you are doing you could end up damaging your privacy。此外，too many addons can slow down your browsing experience.

- [uBlock Origin](https://ublockorigin.com/) - Free, open-source ad content blocker. Easy on CPU and memory.
	- [Read the extension docs](https://github.com/gorhill/uBlock/wiki/Blocking-mode) and pick one of the recommended modes to increase your privacy.
	- Go to settings > filters list > annoyances, turn on easylist-cookies. This will avoid you the annoying Cookie popups.
- [LibRedirect](https://github.com/libredirect/browser_extension) - A simple web extension that redirects Twitter, YouTube, Google Maps and many more requests to privacy friendly alternatives. Former Privacy Redirect is no longer maintained, LibRedirect is a maintained fork.
- [Privacy Badger](https://privacybadger.org/) - Browser extension from the EFF that learns to block 追踪器 as you browse. Open source, GPL-3.0 licensed.
- [ClearURLs](https://clearurls.xyz/) - Browser extension that automatically strips tracking parameters from links and URLs. Open source, LGPL-3.0 licensed.

#### Useful Tools
- [Single File](https://github.com/gildas-lormeau/SingleFile) - Save a faithful copy of an entire web page in a single HTML file so you can use it offline.

### Browser Sync
- [xBrowserSync](https://www.xbrowsersync.org/) - Browser syncing as it should be: secure, anonymous and free!

[返回顶部 🔝](#contents)

## Whistleblowing

✅  **请改用**
- [GlobaLeaks](https://www.globaleaks.org/) - Self-hostable whistleblowing platform for organisations, newsrooms and activists, replacing hosted reporting portals. Open source (AGPL-3.0).
- [SecureDrop](https://securedrop.org/) - Self-hosted submission system that lets newsrooms receive documents from anonymous sources over Tor, replacing email and cloud uploads. Open source (AGPL-3.0).

[返回顶部 🔝](#contents)

## Privacy vs Security vs Anonymity

Anonymity, Privacy, and Security are often used interchangeably, but they actually represent distinct concepts. It is important to understand the differences between them.

- Privacy is about regulating who has access to your personal information, being aware of the data that is being collected about you, and having the ability to decide who can access it and how. In short, privacy involves controlling your personal information.

- Security refers to safeguarding your personal information from unauthorized access或theft. It involves ensuring that your data is protected and stored in a secure manner, making it difficult for malicious actors to access it.

- Anonymity is about ensuring that your actions cannot be traced back to you. This means that even if someone discovers what you are doing, they will not be able to identify you as the source.

It is important to note that privacy and security are not necessarily interdependent. For instance, Google systems are secure and unlikely to be hacked, but Google still has access to your personal data and makes use of it. 

Privacy and anonymity are also not necessarily linked, services like Signal offer high levels of privacy since they do not collect any data about what you say, who you talk to或how you use the app, but they may not be anonymous since you still need to register using your phone number (which is in many cases linked to your identity).

Finally, there are services that may offer all three: anonymity, privacy, and security. The primary focus of this list is to provide alternatives that prioritize privacy. These alternatives give you control over your data and do not collect或sell it.

[返回顶部 🔝](#contents)

## Icons

| Icon | Meaning |
|-------|---------|
| 💀    | Caution: The development of this service seems to be inactive for a long time. Maybe the project is abandoned. Investigate before use. |
| ♻️    | The software is a fork: someone has made a copy of the original project (a fork) and started developing it further。 |
| 🧩    | The software uses ActivityPub, a decentralized social networking protocol. |
| 🤖    | Android Only. |

[返回顶部 🔝](#contents)
