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
- **DropBox** - [糟糕的隐私政策](https://tosdr.org/en/service/270). The app has [various 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/) and requires many permissions.
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

✅ **Instead use**

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

✅ **Instead use**
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

#### Plugins for Minecraft

If you still want to play Minecraft, you can add some plugins that can help you preserve a bit your privacy. But still consider that you are supporting Microsoft this way.

✅  **请改用**
- [No-Chat-Reports](https://github.com/Aizistral-Studios/No-Chat-Reports) - A spigot plugin strips cryptographic signatures from player messages, but it breaks any chat plugin by design.
- [FreedomChat](https://github.com/ocelotpotpie/FreedomChat) - A great alternative to No-Chat-Reports, since it does not break any chat plugin by design.
- [No-Telemetry](https://github.com/kb-1000/no-telemetry) - Mod that disables the usage data collection, aka telemetry, introduced in Minecraft 1.18 (snapshot 21w38a).

### Pokemon

Nintendo [会收集用户数据](https://www.reddit.com/r/privacy/comments/qtj9xt/til_nintendo_collects_data_from_switch_owners/)；即使你将其关闭，他们也可以[重新开启](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretly-turns-on-user-data-sharing-adSyV7t35NPg)。此外，该服务有付费方案，并非所有人都负担得起。

✅  **请改用**

- [Pokete](https://github.com/lxgr-linux/pokete) - A small terminal based game in the style of a very popular and old game by Gamefreak.

### Sonic the Hedgehog

- [Sonic Robo Blast 2](https://www.srb2.org/) - Sonic Robo Blast 2 is a 3D open-source Sonic the Hedgehog fangame built using a modified version of the Doom Legacy port of Doom.

[返回顶部 🔝](#contents)

## Home Assistants

Don't use Google Home or Alexa. Please don't. Don't gift them to anyone. They open the homes doors to surveillance. They can turn these auto-updating devices into surveillance devices at will.

Interesting articles: [1](https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistants), [2](https://www.theregister.com/2020/08/08/ai_in_brief/), [3](https://www.networkworld.com/article/3190176/virtual-assistants-hear-everything-so-watch-what-you-say-i-m-not-kidding.html), [4](https://www.democracynow.org/2017/1/4/privacy_advocates_warn_of_potential_surveillance), [5](https://www.mirror.co.uk/news/weird-news/woman-finds-amazon-thousands-recordings-25240984), [6](https://www.seattletimes.com/business/locked-down-lawyers-warned-alexa-is-hearing-confidential-calls/), [7](https://hide.me/en/blog/assistant-devices-are-a-privacy-nightmare/).

- Google Home [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Alexa [![](https://shields.tosdr.org/en_190.svg)](https://tosdr.org/en/service/190)
- Cortana [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Siri [![](https://shields.tosdr.org/en_158.svg)](https://tosdr.org/en/service/158)

✅  **请改用**
- [OpenVoiceOS](https://openvoiceos.org) - Open source voice assistant and the maintained successor to Mycroft, running fully offline on your own hardware. Apache-2.0 licensed.
- [Home Assistant](https://www.home-assistant.io/) - Open source home automation that puts local control and privacy first.

[返回顶部 🔝](#contents)

## Instant Messaging
**Check out [this site](https://www.securemessagingapps.com/) for comparisons*.

⛔ **请避免**
- WhatsApp | [![](https://shields.tosdr.org/en_198.svg)](https://tosdr.org/en/service/198)
- Instagram DM | [![](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)
- Facebook Messenger | [![](https://shields.tosdr.org/en_182.svg)](https://tosdr.org/en/service/182)
- Skype | [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Zoom | [![](https://shields.tosdr.org/en_2198.svg)](https://tosdr.org/en/service/2198)
- Google Hangouts / Chat | [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**

### Decentralized
No single point of control or failure. A decentralized network operated by different servers from different volunteers around the globe. You choose where your data stays or you can self-host your own server. Somewhat more complex protocols (because of federation between servers) and some extra metadata is added 所列的messages (without compromising privacy).

- [Matrix (Protocol)](https://matrix.org/) - An open network for secure, decentralized communication.
   - [Element](https://element.io/) - All-in-one secure chat app for teams, friends and organisations. Keeps conversations in your control, safe from data-mining and ads. End-to-end encryption.
   - [Cinny](https://cinny.in/) - A Matrix client focusing primarily on simple, elegant and secure interface. 
- [Jabber / XMPP (Protocol)](https://xmpp.org/) - The universal and open messaging standard. Tried and tested. Independent. Privacy-focused. E2E encrypted.
  - [🤖](#icons) [Conversations](https://conversations.im/) - Jabber/XMPP client for Android 4.0+ smartphones that has been optimized to provide a unique mobile experience.
  - [AstraChat](https://astrachat.com/) - Another XMPP client.
  - [Dino](https://dino.im/) - Modern XMPP desktop client for Linux with OMEMO and OpenPGP end-to-end encryption. Open source, GPL-3.0 licensed.
  - [Gajim](https://gajim.org/) - Cross-platform XMPP client with OMEMO encryption, running on Linux, Windows, and macOS. Open source, GPL-3.0 licensed.
  - [Snikket](https://snikket.org/) - One-command self-hosted XMPP service that bundles a server with matching mobile and desktop clients. Open source and Docker-based.
- [DeltaChat](https://delta.chat/) - Chat over encrypted e-mail.
- [Session](https://getsession.org/) - Extreme focus on privacy and anonymity. Blockchain technology.
- [SimpleX Chat](https://simplex.chat/) - The first chat platform that is 100% private by design - it has no access to your connection graph
- [Status](https://status.app/) - Status is a secure messaging app, crypto wallet, and Web3 browser built with state of the art technology.

### Centralized
The service is in charge of running the servers that allow users to communicate. Single point of failure and control, but still 100% safe and trustworthy if the protocols and code are open and audited.

- [Threema](https://threema.com/en) - The messenger that puts security and privacy first. Pay once, chat forever. No collection of user data. Open Source client.
- [Signal](https://signal.org/) - Extreme focus on privacy, combined with all of the features you expect. Strong encryption by design. 100% Open Source.
  - [🤖](#icons) [Molly](https://github.com/mollyim/mollyim-android) - Signal-compatible fork client with some security enhancements.

### P2P
No servers involved. Everything goes directly from one peer 所列的other peer. No point of failure or control. The features are reduced because of the lack of server, messaging can be slower. Best option for critical chats.

- [Tox](https://tox.chat/) - Tox is easy-to-use software that connects you with friends and family without anyone else listening in.
- [Briar](https://briarproject.org/) - Peer-to-peer encrypted messaging and forums.
- [Tinfoil Chat](https://github.com/maqp/tfc) - Onion-routed, endpoint secure messaging system.
- [Berty](https://berty.tech/) - The privacy-first messaging app that works with or without internet access, cellular data or trust in the network.

[返回顶部 🔝](#contents)

## Link in Bio Tools

- [Keyoxide](https://keyoxide.org/) - A modern, secure and privacy-friendly platform to establish your decentralized online identity.
- [LinkStack](https://linkstack.org/) - Self-hosted open-source Linktree alternative.

[返回顶部 🔝](#contents)

## Link Shorteners

⛔ **请避免**

- Bit.ly

✅  **请改用**

- [MagLit](https://maglit.me) - An encrypted and privacy respecting Link Shortener service that also supports Magnet Links.
- [Dub](https://github.com/dubinc/dub) - You can self-host Dub.co for greater control over your data and design.
- [Yourls](https://yourls.org/) -  Self hosted URL shortener in PHP.
- [tnyr.me](https://tnyr.me) - A zero-trust URL shortener with paswordless end-to-end encryption.
- [Kutt](https://kutt.it/) - Self-hosted URL shortener with custom domains and password-protected links. Open source, MIT licensed.
- [Shlink](https://shlink.io/) - Self-hosted URL shortener that keeps its own click analytics on your server. Open source, MIT licensed.

[返回顶部 🔝](#contents)

## Location tracking

⛔ **请避免**

- Google location history [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Google FindMyDevice [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**

### Tracking
- [Nextcloud Phonetrack](https://apps.nextcloud.com/apps/phonetrack) - Nextcloud app to track location history with an [Android app](https://gitlab.com/eneiluj/phonetrack-android) ([other apps also supported](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)). Supports caching positions offline and sending them 所列的server in batches. The first-party app has good battery saving options.
- [OwnTracks](https://owntracks.org/) - Location tracking for displaying the current location only (limited location history functionality).
- [Traccar](https://www.traccar.org/) - Location tracking software made for dedicated GPS logging devices.
- [Dawarich](https://github.com/Freika/dawarich) - Self-hosted alternative to Google Location History.

### Find My Device
- [Find My Device](https://gitlab.com/Nulide/findmydevice) - Find your Android Device via SMS.
- [GPSlogger](https://github.com/mendhak/gpslogger) - Lightweight GPS Logging Application For Android. No servers, no internet. Saved to a simple file to local storage.

[返回顶部 🔝](#contents)

## Mail Services
⛔ **请避免**
- Gmail
- Outlook
- Yandex Mail
- Yahoo! Mail

✅ **Instead use**

### Third-Party owned
- [Forward Email](https://forwardemail.net) - the 100% open-source and privacy-focused email service.
- [ProtonMail](https://proton.me/mail) - Secure Email. Based in Switzerland. [阅读这篇关于气候活动人士被捕的文章](https://proton.me/blog/climate-activist-arrest).
- [Tuta](https://tuta.com/) - Secure email for everybody. Open Source.
- [mailbox.org](https://mailbox.org/) - Paid email, calendar and office suite based in Germany, with built-in PGP encryption and no ads.
- [Riseup](https://riseup.net/en/about-us) - Online communication tools for people and groups working on liberatory social change.
- [Mailfence](https://mailfence.com) - Secure and private email.

### Self-Hosted
- [Docker mail server](https://github.com/docker-mailserver/docker-mailserver) - A fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) using Docker.
- [Mailcow: dockerized](https://github.com/mailcow/mailcow-dockerized) - The mailserver suite with the 'moo'.
- [Mail-in-a-box](https://github.com/mail-in-a-box/mailinabox) - Mail-in-a-Box helps individuals take back control of their email by defining a one-click, easy-to-deploy SMTP+everything else server: a mail server in a box.
- [Mox](https://github.com/mjl-/mox) - Modern full-featured open source secure mail server for low-maintenance self-hosted email.
- [Stalwart](https://stalw.art/) - All-in-one mail server written in Rust that covers SMTP, IMAP, and JMAP, with two independent security audits (AGPL-3.0).

### Clients

#### Android / iOS
- [🤖](#icons) [FairEmail](https://github.com/M66B/FairEmail) - Fully featured, open source, privacy friendly email app for Android.
- [🤖](#icons) [K9](https://k9mail.app/) - Open Source Email App for Android.

#### Desktop
- [Thunderbird](https://www.thunderbird.net) - A free customizable open source email client.

### Email Alias Services (Anonymous Forwarding)

With email aliases, you can finally create a different identity for each website. Defend against spams, phishing and data breach. You can choose self-hosting any of the following options or you can also use their own platform as a service.

- [SimpleLogin](https://github.com/simple-login/app) - Open source, self-hostable email aliasing service now owned by Proton (AGPL-3.0).
- [AnonAddy](https://github.com/anonaddy/anonaddy) - Open source, self-hostable email aliasing and forwarding service, now named addy.io (AGPL-3.0).

[返回顶部 🔝](#contents)

## Maps and Navigation
⛔ **请避免**
- Google Maps
- Apple Maps
- Yandex Maps
- Bing Maps
- Waze
- Sygic
- HERE WeGo
- Petal Maps

✅ **Instead use**
- [Open Street Map (OSM)](https://www.openstreetmap.org/) - OpenStreetMap is built by a community of mappers that contribute and maintain data about roads, trails, cafés, railway stations, and much more, all over the world.
  - [OSMAnd](https://osmand.net/) - Android/iOS Navigation app using OSM. It is a feature-rich app with all you expect.
- [Organic Maps](https://organicmaps.app/) - Great offline maps for hikers and cyclists.
- [CoMaps](https://www.comaps.app/) - A community-led free & open source maps app based on OSM

[返回顶部 🔝](#contents)

## Media Streaming Platforms
⛔ **请避免**
- **Amazon Prime** - [糟糕的隐私政策](https://tosdr.org/en/service/2444). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Many permissions are required for a streaming app.
- **Netflix** - [糟糕的隐私政策](https://tosdr.org/en/service/185). Apps have [Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Many permissions are required for a streaming app.
- **Disney Plus** - [Very bad privacy policy](https://tosdr.org/en/service/2745). Apps have [various 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Many permissions are required for a streaming app.
- **Plex** - [Dubitous privacy policy](https://tosdr.org/en/service/1567). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/). Way too many permissions are required for a streaming app.
- **Spotify** - [Very bad privacy policy](https://tosdr.org/en/service/225). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/). Way too many permissions are required for a streaming app.
- **Deezer** - [糟糕的隐私政策](https://tosdr.org/en/service/2516). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Way too many permissions are required for a streaming app.
- **SoundCloud** - [Dubitous priavcy policy](https://tosdr.org/en/service/276). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/). Way too many permissions are required for a streaming app.

✅  **请改用**
#### Video and Audio
- [Jellyfin](https://jellyfin.org/) - Jellyfin is the volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached.
- [Dim](https://github.com/Dusk-Labs/dim) - Dim is a self-hosted media manager. With minimal setup, Dim will organize and beautify your media collections, letting you access and play them anytime from anywhere.
- [Stremio](https://www.stremio.com/) - Stremio is a modern media center that's a one-stop solution for your video entertainment.

#### Audio
- [Funkwhale](https://funkwhale.audio/) - A social platform to enjoy and share music (SoundCloud alternative).
- [Subsonic](https://www.subsonic.org/pages/index.jsp) - Your complete, personal music streamer.
- [Ampache](https://ampache.org/) - A web based audio/video streaming application and file manager.
- [Koel](https://koel.dev/) - a personal music streaming server that works.
- [Nuclear](https://nuclearplayer.com/) - Modern music player focused on streaming from free sources.
- [Navidrome](https://navidrome.org/) - Lightweight, fast and self-contained personal music streamer.
- [🤖](#icons) [mucke](https://github.com/moritz-weber/mucke) - A music player for local files with unique custom playback options.

**Spotify alternative clients**
 > These clients, although will have less tracking, still DO NOT protect your privacy at all as you will still be streaming from Spotify servers from you own **premium (paid, identified)** account.

\* Premium required.

- [Spot*](https://github.com/xou816/spot) - Native Spotify client built in GTK and Rust.
- [psst*](https://github.com/jpochyla/psst) - Fast and multi-platform Spotify client with native GUI.
- [ncspot*](https://github.com/hrkfdn/ncspot) - Cross-platform ncurses Spotify client written in Rust, inspired by ncmpc and the likes.

No premium required:

- [Spotube](https://github.com/team-spotube/spotube) - A lightweight free Spotify crossplatform-client.

**Youtube Music alternative clients**
- [Beatbump](https://github.com/snuffyDev/Beatbump) [💀](#icons) - Alternative frontend for YouTube Music; no ads and custom API wrapper.
- [SimpMusic](https://github.com/Maxrave-Dev/SimpMusic) - Open source, actively maintained YouTube Music client for Android (successor 所列的discontinued ViMusic and RiMusic).

**Deezer alternative clients**
- [dzr](https://github.com/yne/dzr) - Command line Deezer player for Linux, BSD, Android+Termux

#### Podcasts

⛔ **请避免** 

- **Spotify** - [Very bad](https://tosdr.org/en/service/225) privacy policy. They collect tons of data about you: mood, free time, likes, dislikes, friends..。此外，their apps have [way too many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/).
- **iVoox** - Their apps are [filled with 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/). Their website has 追踪器.
- **Audible** - [Very bad](https://tosdr.org/en/service/190) privacy policy. Their app has [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.audible.application/latest/).
- **Deezer** - [糟糕的隐私政策](https://tosdr.org/en/service/2516). Apps have [many 追踪器](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Way too many permissions are required for a streaming app.

✅  **请改用**

- [Antennapod](https://antennapod.org) - A podcast player that is completely open. Subscribe to any RSS feed. 
- [Castopod](https://castopod.org) - Self-host your podcasts with ease, keep control over what you create and talk to your audience without any middleman. Your podcast and your audience belong to you and you only. 
- [Funkwhale](https://funkwhale.audio/) - A social platform to enjoy and share audio.

[返回顶部 🔝](#contents)

## Notes and Tasks
⛔ **请避免** 

These providers offer apps and services filled with data 追踪器。此外，most of them store your notes on their servers and do not offer any kind of encryption.

- Google Keep
    - [Keep To Markdown](https://github.com/erikelisath/keep-to-markdown) - Convert your Google Keep notes into a standard markdown + YAML header format.
- Evernote
- Squid
- Notion
- OneNote

✅  **请改用**

- [Anytype](https://www.anytype.io/) - An open-source Notion alternative. E2EE, cloud and local network sync, can be self-hosted.
- [AppFlowy](https://appflowy.com/) - Open Source Notion Alternative. You are in charge of your data and customizations.
- [HedgeDoc](https://hedgedoc.org/) - Formerly CodiMD (community). An awesome platform to write and share markdown.
- [Joplin](https://github.com/laurent22/joplin) - Note taking and to-do application with synchronisation and encryption capabilities.
- [Logseq](https://logseq.com/) - A privacy-first alternative to WorkFlowy.
- [Memos](https://github.com/usememos/memos) - An open-source, self-hosted memo hub with knowledge management and socialization. 
- [Nextcloud Notes](https://github.com/nextcloud/notes/) - The Notes app is a distraction free notes taking app for Nextcloud.
	- [Nextcloud Notes app](https://github.com/nextcloud/notes-android) - An android client for Nextcloud Notes.
- [Notally](https://github.com/OmGodse/Notally) - A beautiful notes app (local only, no sync).
- [Notesnook](https://notesnook.com/) - Open source zero knowledge private note taking.
- [Obsidian](https://obsidian.md) - Obsidian is the private and flexible note‑taking app. Closed source but has no 追踪器 (website / apps) and E2EE sync. 
- [Quillpad](https://quillpad.github.io/) - Take beautiful markdown notes and stay organized with task lists. Fork of Quillnote.
- [SiYuan](https://github.com/siyuan-note/siyuan) - A local-first personal knowledge management system.
- [Standard Notes](https://standardnotes.com/) - A free, open-source, and completely encrypted notes app.
- [TinyList](https://tinylist.app/) - Create and share notes and checklists, without sacrificing your privacy.
- [Trilium Notes](https://github.com/TriliumNext/Trilium) - Build your personal knowledge base with Trilium Notes 
- [Vikunja](https://vikunja.io) - The open-source to-do app to organize your life.
- [YankNote](https://github.com/purocean/yn) - A Hackable Markdown Note Application for Programmers.
- [🤖](#icons) [Tasks.org](https://tasks.org) - Open source to-do and task manager for Android with CalDAV sync and offline use. GPL-3.0 licensed.

[返回顶部 🔝](#contents)

## Music Recognition

⛔ **请避免**

- Shazam - It's under [Apple's privacy policy](https://tosdr.org/en/service/158). The android app [has a few Google 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - Has way too many [追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) for a music recognition app.
- Musicxmatch - The app [has 追踪器](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/) and requires a dangerous amount of permissions.

✅  **请改用**

**Shazam alternative clients**

- [SongRec](https://github.com/marin-m/SongRec) - An open-source Shazam client for Linux, written in Rust.
- [SongID Telegram Bot](https://github.com/smcclennon/SongID) - A Telegram bot that can identify music in audio/video files you send it. 

[返回顶部 🔝](#contents)

## Office

⛔ **请避免**
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

✅  **请改用**
- [LibreOffice](https://www.libreoffice.org/) - Free and open source offline office.
- [OnlyOffice](https://www.onlyoffice.com/) - Free and open source online office for collaboration.
- [Cryptpad](https://cryptpad.fr/) - Collaboration suite, encrypted and open-source.
- [Etherpad](https://etherpad.org/) - Highly customizable open source online editor providing collaborative editing in really real-time.
- [Fileverse](https://fileverse.io) - Fileverse is building healthier alternatives with self-sovereignty, privacy by design, and standards compliance at its core.
	- [Ddocs](https://ddocs.new): privacy-enhancing alternative to google docs: onchain, end-to-end encrypted, and decentralized. 
 	- [dSheets](https://sheets.fileverse.io): decentralized alternative to Excel and Google Sheets.
- [Grist](https://www.getgrist.com) - Self-hostable spreadsheet and database hybrid for organizing data, as an open source Airtable alternative. Apache-2.0 licensed.

[返回顶部 🔝](#contents)

## Online Phone Providers

Many websites require phone number verification. These services offer a way to receive (and sometimes send) SMS messages in a privacy-focused manner.

### No email verification, accepting monero
- [Crypton](https://crypton.sh/) - Secure SMS Sim Card in the cloud. (Based in Iceland)
- [Virtualsim](https://virtualsim.net/) - Virtualsim provides physical SIM cards leasing for SMS verifications. (Based in Ukraine)
- [MoneroSMS](https://monerosms.com/) - Virtual numbers for SMS/MMS messaging and verifications. CLI and web app. (Based in United States)

### Email verification required, accepting monero
- [Onlinesim](https://onlinesim.io/) - Receive SMS online to virtual phone number. (Based in Russia)

### Email verification required, accepting crypto
- [SmsPVA](https://smspva.com/) - SmsPVA is a service providing a phone number you can send any SMS on and get a text of it. (Based in France)

## Operating Systems
### Android
⛔ Try to avoid using Google Android or any Android that has been modified and tuned by any manufacturer such as Xiaomi, Huawei, Samsung, etc. Android is an Open Source project - [AOSP - Android Open Source Project](https://source.android.com/) - and it has many versions that will respect the user privacy and data and won't share it with private servers from manufacturers or service providers.

✅ **Instead use**

> [!NOTE]
> **Android app compatibility**:
> Although all of these Operating Systems are Android, app compatibility may not be perfect due to a lack of GMS (Google Mobile Services) which some apps require. You can check how well apps work with microg (a free and open source alternative to GMS) or no GMS at all with [Plexus](https://plexus.techlore.tech/) where the community can report how well android apps perform in those environments.

> [!NOTE]
> **Android security**: Custom ROMs can improve your privacy the same as they can decrease the Android security, always use ROMs that support verified boot and encryption and **DO NOT** have root enabled by default. If possible, don't use userdebug builds. If your threat model requires security, buy a Google Pixel and install GrapheneOS on it. [Read more on PrivacyGuides](https://www.privacyguides.org/android/overview).

#### Android-Based

**GrapheneOS** has a strong focus on security and privacy. It deploys technologies to mitigate many vulnerabilities and makes exploiting of vulnerabilities substantially more difficult. It improves the security of both the OS and the apps running on it.

- [GrapheneOS](https://grapheneos.org/) - GrapheneOS is an open source privacy and security focused mobile OS with Android app compatibility. Only **Google Pixel** phones are supported.

These ROMs also offer good priavcy and/or extended support for a wider range of devices. Note that these may also reduce security, increasing the attack surface of the operating system.

- [CalyxOS](https://calyxos.org/) - Privacy by Design ROM. Offers better security than LineageOS or Replicant.
- [LineageOS](https://lineageos.org/) - A free and open-source operating system for various devices, based on the Android mobile platform.
- [/e/OS](https://e.foundation/e-os) - Degoogled Android ROM by Murena that bundles microG and optional cloud services. Open source, GPL-3.0 licensed.
- [iodéOS](https://iode.tech/iodeos) - Degoogled Android ROM with a built-in network firewall that blocks ads and 追踪器. Open source, GPL-3.0 licensed.

#### Based on Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch is the touch-friendly mobile version of Ubuntu.
- [Nura](https://nura.eco/) (formerly postmarketOS) - Touch optimised and pre-configured version of Alpine Linux.
- [PureOS](https://www.pureos.net/) - Operating system developed by purism for the Librem 5.
- [Plasma Mobile](https://www.plasma-mobile.org/) - Plasma, in your pocket. Privacy-respecting, open source and secure phone ecosystem.
- [mobian](https://mobian-project.org/) - Debian for mobile.
### Smart TV
⛔ Don't use Google's Android TV, LG WebOS or any other privacy-invasive common TV OS that comes preinstalled with your TV.

✅ **Instead use**

Currently I am not aware of any privacy-respecting smartTV software. If you are aware of any, please open a Pull Request or an issue.

The following software is not an **Operating System** but comprises apps that can be used on almost any OS. These apps respect your privacy and offer features similar to those of a Smart TV. A recommended setup involves connecting a [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) running a GNU/Linux operating system to your TV, installing tools like [KDE Connect](https://kdeconnect.kde.org/) to control media from your phone, and then adding the apps listed below:

- [Kodi](https://kodi.tv/) - It is an entertainment hub that brings all your digital media together into a beautiful and user friendly package. It is 100% free and open source, very customisable and runs on a wide variety of devices.
- [OSMC](https://osmc.tv/) - OSMC is a free and open source media center built for the people, by the people.

You can also check out [Media Streaming Platforms](https://github.com/pluja/awesome-privacy#media-streaming-platforms) section.

### PC / MacOS
⛔ **请避免**
- MS Windows - Owned by Microsoft it is known for collecting many user data and tricking users to own a Microsoft account. If you still want and happen to use Windows 10 or 11, you can use [Win11Debloat](https://github.com/Raphire/Win11Debloat), or [this other tool](https://www.w10privacy.de/english-home/) to see and disable the tons of privacy-invasive settings of MS Windows.
- MacOS.

✅ **Instead use**
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
> Not all Linux distributions are free (as in freedom), free (as in free beer) or respect user privacy. There are tons of GNU/Linux distributions and you should investigate a bit before jumping into one of them!

#### Other OS:

- [AtlasOS](https://atlasos.net/) - An open-source modification of Windows 10, designed to optimize performance, and latency. Atlas removes all types of tracking embedded within Windows and implements numerous group policies to minimize data collection.
- [ReactOS](https://reactos.org/) - ReactOS is an operating system able to run Windows software, Windows drivers that looks-like Windows and is free and open source.
- [RedoxOS](https://www.redox-os.org/) - A WIP project aiming to provide a Unix-like Operating System written in Rust.

[返回顶部 🔝](#contents)

## Password Managers
⛔ **请避免**
- LastPass
- Dashlane

✅  **请改用**
- [AliasVault](https://www.aliasvault.com) - An open source E2EE password & alias manager with a built-in email alias server
- [Bitwarden](https://bitwarden.com) - An open source cloud based password manager.
  - [vaultwarden](https://github.com/dani-garcia/vaultwarden/) - Unofficial Bitwarden compatible self-hosted server, formerly known as bitwarden_rs.
- [CarryPass](https://carrypass.net) - Zero-knowledge PWA password manager with deterministic generation, encrypted vaults, and team collaboration. ([Source](https://github.com/racz-zoltan/racz-zoltan.github.io)) `MIT`
- [KeepassXC](https://keepassxc.org/) - Securely store passwords using industry standard encryption, no sync just storage.
  - [KeepassDX](https://www.keepassdx.com/) for Android.
  - [Strongbox](https://strongboxsafe.com/) for iOS.
  - [KeeWeb](https://keeweb.info/) for Web and other platforms.
- [LessPass](https://www.lesspass.com) - Stateless password manager. Remember one master password to access your passwords. No sync needed.
- [Padloc](https://padloc.app/) - The last password manager you'll ever want to use.
- [Passbolt](https://www.passbolt.com) - An open source password manager designed for team collaboration.
- [Passky](https://passky.org) - Simple, modern, lightweight, open-source and secure password manager.
- [Proton Pass](https://proton.me/pass) - Open-source and encrypted password manager by Proton.

## Pastebin and Secret Sharing

These tools are useful when sharing secrets, code snippets or any other kind of text with others in a private way.

- [crypt.fyi](https://www.crypt.fyi) - Ephemeral zero-knowledge sensitive data sharing platform with web, cli, and chrome-extension clients
- [NoPaste](https://github.com/bokub/nopaste) - Open Source pastebin alternative that works with no database, and no back-end code. Instead, the data is compressed and stored entirely in the link that you share, nowhere else.
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - A minimalist, open source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.
- [Yopass](https://github.com/jhaals/yopass) - 安全共享机密、密码和文件。
- [scrt.link](https://scrt.link) - Share a secret. End-to-end encrypted. Ephemeral. Open-source.
- [dele-to](https://dele.to) - Open Source. Modern app to share sensitive credentials and secrets securely with client-side AES-256 encryption, zero-knowledge architecture, and automatic self-destruction.

[返回顶部 🔝](#contents)

## Payments
⛔ **请避免**
- Visa / Mastercard
- PayPal [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- WeChat
- _insertBigTechHere_Pay
- Bank payments (wire, SEPA, etc)

✅  **请改用**
- [Monero](https://www.getmonero.org/) - Monero is cash for a connected world. It's fast, private, untraceable and secure.
- Cash - Use person-to-person payments using physical notes and coins.

> [!WARNING]
> [Bitcoin](https://bitcoin.org) is not anonymous nor private. Bitcoin is traceable, transparent and pseudonymous. For a basic introduction, [see aantonop's video](https://yewtu.be/watch?v=JN1Bowgcle8). More advanced users can watch this [Bitcoin privacy series](https://yewtu.be/watch?v=QEnL5k0R08w).

### Wallets

- [Sparrow Wallet](https://www.sparrowwallet.com/) - An open source, cross-platform desktop wallet that gives you many privacy-preserving spending tools.
- [Wasabi Wallet](https://www.wasabiwallet.io/) - An open source, non-custodial, privacy-focused Bitcoin wallet available on Desktop.
- [Cake Wallet](https://cakewallet.com) - Open source, non-custodial wallet for Monero, Bitcoin, and other coins on mobile and desktop. MIT licensed.
- [Feather Wallet](https://featherwallet.org/) - Lightweight open source Monero desktop wallet with built-in Tor and coin control. BSD-3 licensed.

### Payment Processors

- [BTCPay Server](https://btcpayserver.org) - Self-hosted, non-custodial cryptocurrency payment processor for merchants, as an alternative to PayPal or BitPay. MIT licensed.

### Where to use Monero and Bitcoin

- [kycnot.me](https://kycnot.me/) - Directory of KYC-free exchanges, payment processors, and other privacy services.

[返回顶部 🔝](#contents)

## Personal Finances

### Full Featured Financial Management

- [Actual](https://actualbudget.org) - Super fast and privacy-focused app for managing your finances.
- [Firefly III](https://www.firefly-iii.org/) - A free and open source personal finance manager.
- [GnuCash](https://gnucash.org/) - GnuCash is personal and small-business financial-accounting software, freely licensed under the GNU GPL and available for GNU/Linux, BSD, Solaris, Mac OS X and Microsoft Windows.
- [Sure](https://github.com/we-promise/sure) - Open Source and secure OS for your personal finances. Community maintained fork of the archived [Maybe](https://github.com/maybe-finance/maybe) project.
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - A lightweight, self-hosted personal finance app with a user-friendly interface and powerful bookkeeping features.

### Budget Management
- [ProExpense](https://github.com/arduia/ProExpense/) - A simple free finance note to safely record daily expenses.
- [My Expenses](https://github.com/mtotschnig/MyExpenses) - Featureful GPL licenced Android Expense Tracking App.
- [Wallos](https://wallosapp.com) - Self-hosted tracker for subscriptions and recurring expenses, with reminders and spending statistics. Open source, GPL-3.0 licensed.

### Shared Expenses

⛔ **请避免**

- Tricount - App size is massive (~200MB) and contains many 追踪器 from Facebook, Google and Huawei.
- Splitwise - App contains 追踪器 from Google and Amazon.

✅  **请改用**

- [Spliit](https://github.com/spliit-app/spliit#readme) - Share Expenses with Friends & Family. No ads. No account. Open Source. Forever Free.
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [Website](https://splitpro.app) - Split Expenses with your friends for free. An open source alternative to SplitWise.
- [IHateMoney](https://ihatemoney.org/) - Manage your shared expenses, easily. Lacks unequal splitting.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Android client for Nextcloud Cospend and IHateMoney servers.
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - A group/shared budget manager inspired by the great IHateMoney.
  - [MoneyBuster](https://gitlab.com/eneiluj/moneybuster/) - Android client for Nextcloud Cospend and IHateMoney servers.

### Others 

- [Debitum](https://github.com/Marmo/debitum) [💀](#icons) - With Debitum you can track all kinds of IOUs, be it money or lent items.

### Portfolio 追踪器

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - open source wealth management software built with web technology.
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) - An open source tool to calculate the overall performance of an investment portfolio-
- [Rotki](https://github.com/rotki/rotki) - An awesome portfolio tracking, analytics, accounting and tax reporting application that protects your privacy.

## Photo Editing and Management
⛔ **请避免**
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

✅  **请改用**
#### Web
- [miniPaint](https://github.com/viliusle/miniPaint) - Open Source alternative to Photopea. miniPaint operates directly in the browser. Nothing will be sent to any server. Everything stays in your browser.

#### Desktop
- [GIMP](https://www.gimp.org/) - The Free & Open Source Image Editor.
- [Krita](https://github.com/KDE/krita) - Krita is a free and open source digital painting application
- [Czkawka](https://github.com/qarmin/czkawka) - Multi functional app to find duplicates and similar images etc.
- [DigiKam](https://www.digikam.org/) - Awesome Professional Photo Management with the Power of Open Source.
- [Inkscape](https://inkscape.org/) - Inkscape is a free and open-source vector graphics editor used to create vector images.
- [ImageGlass](https://imageglass.org/) - ImageGlass is a lightweight software application whose purpose is to help you view images in a clean and intuitive working environment.
- [darktable](https://www.darktable.org/) - darktable is an open source photography workflow application and raw developer
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) - A beautiful, non-destructive and GPU-accelerated RAW image editor built with performance in mind. Lightweight (<20MB) cross-platform alternative to Adobe Lightroom. AGPL-3.0 licensed.
- [RawTherapee](https://rawtherapee.com) - Offline open source RAW photo developer that pairs well with darktable as a Lightroom alternative. GPL-3.0 licensed.

#### Android
- [Pocket Paint](https://github.com/Catrobat/Paintroid) - The standard image manipulation app for Catroid.
- [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif) - Remove Exif data from pictures before sharing them.
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - Reduces image size and removes exif-tags when sharing images on android devices.

[返回顶部 🔝](#contents)

## Photo Storage
⛔ **请避免**
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
    - [Google Photos Takeout Helper](https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) [💀](#icons) - Script that organizes the Google Takeout messy archive into one big chronological folder. Use this script to get out of Google Photos :).
- Amazon Photos

✅  **请改用**

### Self-hosted
- [Immich](https://github.com/immich-app/immich) - Self-hosted photo and video backup solution directly from your mobile phone.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Active [OwnPhotos](https://github.com/hooram/ownphotos) fork. Self hosted alternative to Google Photos.
- [Nextcloud](https://nextcloud.com/) - 开源的自托管效率平台，让你掌控自己的数据。 It has a [*Photos*](https://github.com/nextcloud/photos) plugin to help you organize and visualize your photos.
- [Photoprism](https://photoprism.app) - Feature rich server-based application for browsing, organizing and sharing your personal photo collection. The most similar to Google Photos.
- [Pigallery2](http://bpatrik.github.io/pigallery2/) - A self-hosted directory-first photo gallery website.
- [Photoview](https://photoview.github.io/) - Photo gallery for self-hosted personal servers with Facial Recognition.
- [Photostructure](https://photostructure.com/) - Self-hosted photo library that makes browsing and sharing a lifetime of memories delightful.
- [Stingle Photos](https://stingle.org/) - Open source solution that provides strong security, privacy and encryption to backup your photos.
- [Ente](https://ente.com/) - End-to-end encrypted storage for photos and videos. Open source, [audited](https://ente.com/blog/cryptography-audit/) independently.

### Third-party
- [Crypt.ee](https://crypt.ee/) - A private and encrypted place for all your photos, documents, notes and more.
- [Ente](https://ente.com/) - End-to-end encrypted storage for photos and videos. Open source, [audited](https://ente.com/blog/cryptography-audit/) independently.
- [Stingle Photos](https://stingle.org/) - Open source solution that provides strong security, privacy and encryption to backup your photos.

### Local
- [DigiKam](https://www.digikam.org/) - Awesome Professional Photo Management with the Power of Open Source.
- [Photok](https://github.com/leonlatsch/Photok) - Photok is a free Photo-Safe. It stores your photos encrypted on your device and hides them from others.
- [ImageGlass](https://imageglass.org/) - ImageGlass is a lightweight software application whose purpose is to help you view images in a clean and intuitive working environment. 

[返回顶部 🔝](#contents)

## Privacy Tools

This section is dedicated to some tools that may help users analyze the privacy status on their devices.

### Desktop

- [Whoami Project](https://github.com/owerdogan/whoami-project) [💀](#icons) - Whoami provides enhanced privacy, anonymity for Debian and Arch based linux distributions.
- [BusKill](https://www.buskill.in/) - BusKill is a Dead Man Switch triggered when a magnetic breakaway is tripped, severing a USB connection.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Interactive application firewall for GNU/Linux that helps users detect, monitor, and block unwanted outbound connections.
- [MAT2](https://github.com/jvoisin/mat2) - Removes metadata from images, documents, audio and other files. Command line tool with file manager integrations.
- [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) - Simple desktop app to view and remove file metadata, built on MAT2.
- [Mobile Verification Toolkit](https://github.com/mvt-project/mvt) - Forensic tool from Amnesty International that checks Android and iOS devices for traces of spyware such as Pegasus.

### Android

- [εxodus](https://reports.exodus-privacy.eu.org/en/) - The privacy audit platform for Android applications. Find how many 追踪器 your apps have.
	- [ClassyShark3xodus](https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Checks apk(s) for known 追踪器 (provided by Exodus) +other warnings and specs. 
- [Plexus](https://plexus.techlore.tech/) - Remove the fear of Android app compatibility on de-Googled devices. Find if an app will work on a De-Googled device.
- [Netguard](https://netguard.me/) - A simple way to block access 所列的internet per application.
- [RethinkDNS + Firewall](https://github.com/celzero/rethink-app) - An open-source, no-root firewall and DNS changer, with anti-censorship capabilities for Android 6+.
- [🤖](#icons) [Orbot](https://orbot.app/) - Routes app traffic through the Tor network, system-wide as a VPN or per app. Made by the Guardian Project.

[返回顶部 🔝](#contents)

## Remote Access and Control
⛔ **请避免**
- TeamViewer
- AnyDesk

✅  **请改用**
- [RustDesk](https://rustdesk.com/) - Open-source remote desktop client software, written in Rust. Works out of the box, full control of your data, with no concerns about security.
- [screego](https://screego.net/) - Screen sharing for developers.
- [Remmina](https://remmina.org/) - Remote access screen and file sharing to your desktop (RDP).
- [UltraVNC](https://www.uvnc.com/) - UltraVNC is a powerful, easy to use and free - remote pc access softwares - that can display the screen of another computer (via internet or network) on your own screen.
- [MeshCentral](https://meshcentral.com/) - The open source, multi-platform, self-hosted, feature packed web site for remote device management.
- [Apache Guacamole](https://guacamole.apache.org) - Clientless self-hosted remote desktop gateway that gives RDP, VNC, and SSH access from a browser. Apache-2.0 licensed.
- [Sunshine + Moonlight](https://app.lizardbyte.dev/Sunshine) - Self-hosted desktop and game streaming host (Sunshine) with matching clients (Moonlight). Open source, GPL-3.0 licensed.

[返回顶部 🔝](#contents)

## Routers
⛔ **请避免**
- Stock ISP routers and vendor firmware: closed source, slow or missing security updates, and often phone home 所列的vendor or ISP.

✅  **请改用**
- [OpenWrt](https://openwrt.org/) - Open source Linux firmware that replaces the stock software on hundreds of consumer routers, with years of security updates.
- [OPNsense](https://opnsense.org/) - Open source firewall and routing platform based on FreeBSD, for dedicated hardware or a spare PC.
- [IPFire](https://www.ipfire.org/) - Hardened open source Linux firewall distribution with intrusion prevention and a web interface.

[返回顶部 🔝](#contents)

## RSS Readers
⛔ **请避免**
- Feedly
- Inoreader
- Google News

These services build a profile from everything you read. A local or self-hosted reader fetches feeds directly, so nobody sees your reading list.

✅  **请改用**
- [FreshRSS](https://freshrss.org/) - Self-hosted feed aggregator with a web interface, multi-user support and an API for mobile apps.
- [Miniflux](https://miniflux.app/) - Minimalist self-hosted feed reader with no tracking, written in Go.
- [NetNewsWire](https://netnewswire.com/) - Open source RSS reader for macOS and iOS that works locally or syncs with self-hosted services.
- [Fluent Reader](https://github.com/yang991178/fluent-reader) - Open source desktop RSS reader for Windows, macOS and Linux.
- [NewsFlash](https://gitlab.com/news-flash/news_flash_gtk) - Open source RSS reader for Linux that works locally or with self-hosted services such as Miniflux and FreshRSS.
- [Newsboat](https://newsboat.org/) - RSS reader for the terminal.
- [🤖](#icons) [Feeder](https://github.com/spacecowboy/Feeder) - Open source RSS reader for Android that fetches feeds directly on your device, with no account.
- [🤖](#icons) [Read You](https://github.com/ReadYouApp/ReadYou) - Open source Material You RSS reader for Android, local or synced with self-hosted services.
- [🤖](#icons) [Capy Reader](https://github.com/jocmp/capyreader) - Open source RSS reader for Android, local or synced with Miniflux and FreshRSS.

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
> The fediverse is a "**fed**erated" "un**iverse**" of social network platforms that are able to talk to one another through a standard and open protocol. This means that you can consume content on any network from any of these networks. You are not locked to a single provider, you are free to choose. Please [watch this video](https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) by FramaSoft that illustrates the concept very good.
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

✅ **Instead use**

**Alternatives to Instagram**
- [Pixelfed](https://pixelfed.org/) [🧩](#icons) - Decentralized, federated and Open Source alternative to Instagram with posts, videos, stories, tags, etc.

### Quora

⛔ Quora's website has ads and 追踪器 that are used to get your data which is then sold/shared to third parties. Their [privacy policy](https://tosdr.org/en/service/314) is bad.

✅ **Quora alternative frontends (web-based):**
- [Quetre](https://github.com/zyachel/quetre) - Quetre is an alternative front-end to Quora. It enables you to see answers without ads, 追踪器, and other such bloat.


### YouTube

[![](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

⛔ Don't use YouTube (or at least the official client). YouTube is very privacy invasive, it generates a very accurate profile based on your interests. Also it is a [radicalization tool](https://www.pcmag.com/news/does-youtubes-algorithm-lead-to-radicalization) which shows [biased content to users](https://arxiv.org/pdf/1908.08313.pdf) in order to get more engagement and to get them to watch more and more content creating an [addiction](https://medium.com/dataseries/how-youtube-is-addictive-259d5c575883). It never shows you [alternative opinions](https://arxiv.org/pdf/1908.08313.pdf) to your ideology/bias. YouTube censors a lot. YouTube collects a LOT of your data: interests, free time, ideology, likes, dislikes, music taste, etc.

✅ **Instead use**
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
- [FreeTube](https://github.com/FreeTubeApp/FreeTube) - FreeTube is an open source desktop YouTube player built with privacy in mind. (Uses Local RSS API or Invidious for backend).
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

#### Self-hosted

- [Memos](https://github.com/usememos/memos) - An open-source, self-hosted memo hub with knowledge management and socialization.

#### Decentralized

- [Nostr](https://nostr.com/) - Open protocol that is able to create a censorship-resistant global "social" network. It doesn't rely on any trusted central server, hence it is resilient; it is based on cryptographic keys and signatures, so it is tamperproof; it does not rely on P2P techniques, therefore it works. **Note**: Nostr is a protocol, so it is capable of offering much more than a Twitter alternative.

> [!NOTE]
> **Federated social networks**: A federated social network isn't a single website like Twitter or Facebook, it's a network of thousands of communities operated by different organizations and individuals that provide a seamless social media experience.

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

⛔ Try to avoid using Reddit or at least avoid their official clients as they are plenty of 追踪器, ads and share unnecessary user data with their servers.

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
- [🤖](#icons) [Twire](https://github.com/twireapp/Twire) - Open source, ad-free Twitch browser and stream player for Android.

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
> Also using any of these modifications/clients [violates](https://x.com/discord/status/1006178587731550208) the [Discord ToS](https://discord.com/terms) so, we are not responsible of any suspension or termination of your account **but**, this should [not happen **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).

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
> Also using any of these modifications/clients [violates](https://x.com/discord/status/1006178587731550208) the [Discord ToS](https://discord.com/terms) so, we are not responsible of any suspension or termination of your account **but**, this should [not happen **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-against-discord-tos).
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

- [Free VPNs](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) from Google Play or any appstore. These services are not free as they will suck your connections' data, keep logs and profile you to [sell your data to advertisers](https://thenextweb.com/news/be-cautious-free-vpns-are-selling-your-data-to-3rd-parties). If a government wants to track someone, such apps will be the first ones to fall.

- Closed source VPN apps such as Surfshark or NordVPN may be less trustworthy as nobody can be sure how they handle your data。此外，paying with Credit Card will get you identified on the payment. Furthermore, if you need to give your email it will also identify you if this same email has been used in other services.


✅  **请改用**

Here are some open source and truly private (no personal data and/or credit card needed) options:

- [IVPN](https://ivpn.net) - No-logs VPN with open source apps, no-email signup, and cash, Monero, or Bitcoin payment.
- [nadanada](https://nadanada.me) (formerly LNVPN) - Pay-per-use WireGuard VPN with no account, paid by Lightning Network or other cryptocurrency.
- [Mullvad VPN](https://mullvad.net) - No-logs VPN with open source apps, anonymous numbered accounts, and cash or cryptocurrency payment.
- [Proton VPN](https://protonvpn.com) - Swiss no-logs VPN with open source, audited apps on every platform and a no-data-cap free tier.
- [SPN](https://safing.io/) - Open source, system-wide network that routes each app connection through its own path across multiple nodes, giving per-connection IP separation instead of a single shared exit. Built in所列的Safing Portmaster firewall for Windows and Linux.
- [Amnezia VPN](https://amnezia.org) - Self-hosted, censorship-resistant VPN that you deploy on your own server, with audited open source apps (GPL-3.0).
- [Find more at kycnot.me (VPN Category)](https://kycnot.me/?categories=vpn) - KYC-free VPN providers.

[返回顶部 🔝](#contents)

## Web Browser

⛔ **请避免**

- **Google Chrome** - Owned by google and built upon the open-source Chromium project (also Google-owned). It comes with many privacy-invasive features, it is connected to your Google account most times. It is under [Google's privacy policy](https://tosdr.org/en/service/217) which is known to be 很糟糕. Google is willing to enforce the [Manifest v3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) which is outright harmful to privacy efforts.
- **Microsoft Edge** - It's a Microsoft-themed version of Chromium with Microsoft 追踪器 instead of Google ones. Under [Microsoft's privacy policy](https://tosdr.org/en/service/244), which is also 很糟糕. If you still want to use it, you can [follow this guide](https://anonymousplanet.net/guide/#hardening-edge) to harden it a bit.
- **Opera** - Opera was [acquired by a consortium of Chinese investors](https://en.wikipedia.org/wiki/Opera_(web_browser)#Acquisition_by_Chinese_consortium). The app has [many 追踪器](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

✅  **请改用**

#### Android / iOS
- [Brave](https://brave.com/) - Android/iOS. Brave offers a pretty good out-of-the-box set of privacy and tracker protections.
- [Firefox](https://www.firefox.com/en-US/mobile/) - Android/iOS
    - [🤖](#icons) [IronFox](https://gitlab.com/ironfox-oss/IronFox) - Mull browser fork. A hardened fork of Firefox for Android, with proprietary blobs removed.
- [🤖](#icons) [Vanadium](https://vanadium.app/) - Privacy and security enhanced releases of Chromium by GrapheneOS.
- [🤖](#icons) [Privacy Browser](https://www.stoutner.com/privacy-browser/)
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Defend yourself against tracking and surveillance and circumvent censorship.
- [Cromite](https://github.com/uazo/cromite) - Cromite is a Chromium fork based on Bromite with built-in support for ad blocking and an eye for privacy.

#### Desktop
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

- Security refers to safeguarding your personal information from unauthorized access or theft. It involves ensuring that your data is protected and stored in a secure manner, making it difficult for malicious actors to access it.

- Anonymity is about ensuring that your actions cannot be traced back to you. This means that even if someone discovers what you are doing, they will not be able to identify you as the source.

It is important to note that privacy and security are not necessarily interdependent. For instance, Google systems are secure and unlikely to be hacked, but Google still has access to your personal data and makes use of it. 

Privacy and anonymity are also not necessarily linked, services like Signal offer high levels of privacy since they do not collect any data about what you say, who you talk to or how you use the app, but they may not be anonymous since you still need to register using your phone number (which is in many cases linked to your identity).

Finally, there are services that may offer all three: anonymity, privacy, and security. The primary focus of this list is to provide alternatives that prioritize privacy. These alternatives give you control over your data and do not collect or sell it.

[返回顶部 🔝](#contents)

## Icons

| Icon | Meaning |
|-------|---------|
| 💀    | Caution: The development of this service seems to be inactive for a long time. Maybe the project is abandoned. Investigate before use. |
| ♻️    | The software is a fork: someone has made a copy of the original project (a fork) and started developing it further independently. |
| 🧩    | The software uses ActivityPub, a decentralized social networking protocol. |
| 🤖    | Android Only. |

[返回顶部 🔝](#contents)
