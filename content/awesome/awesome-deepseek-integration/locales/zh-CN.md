<div align="center">

<p align="center">
<img width="1000px" alt="Awesome DeepSeek Integrations" src="docs/Awesome DeepSeek Integrations.png">
</p>

# Awesome DeepSeek Integrations ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

将DeepSeek API整合到流行软件中. 访问 [DeepSeek Open Platform](https://platform.deepseek.com/) 获取 API 密钥。

英文/英文 [简体中文](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_cn.md) 页:1 [繁體中文](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_zh_tw.md) 页:1 [日本語](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_ja.md) 页:1 [Español](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_es.md)

<a href="https://trendshift.io/repositories/12798" target="_blank"><img src="https://trendshift.io/api/badge/repositories/12798" alt="deepseek-ai%2Fawesome-deepseek-integration | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</div>

## <span id="table-of-contents">目录</span>

- [Awesome DeepSeek Integrations](#awesome-deepseek-integrations-)
  - [目录](#table-of-contents)
  - [项目列表](#project-list)
    - [应用程序](#applications)
    - [AI 智能体框架](#ai-agent-frameworks)
    - [数据与 AI 应用框架](#data-ai-applications-frameworks)
    - [RAG 框架](#rag-frameworks)
    - [FHE（全同态加密）框架](#fhe-fully-homomorphic-encryption-frameworks)
    - [Solana 框架](#solana-frameworks)
    - [合成数据整理](#synthetic-data-curation)
    - [即时通讯应用插件](#im-application-plugins)
    - [Office 加载项](#office-addin)
    - [浏览器扩展](#browser-extensions)
    - [VS Code 扩展](#vs-code-extensions)
    - [Visual Studio 扩展](#visual-studio-extensions)
    - [Neovim 扩展](#neovim-extensions)
    - [JetBrains 扩展](#jetbrains-extensions)
    - [Discord 机器人](#discord-bots)
    - [原生 AI 代码编辑器](#native-ai-code-editor)
    - [Emacs](#emacs)
    - [安全](#security)
    - [服务提供商](#providers)
    - [其他](#others)
    - [星标历史](#star-history)

## <span id="project-list">项目列表</span>

###  <span id="applications">应用程序</span>

<table>
    <tr>
        <td><img src="docs/ETOS-LLM-Studio/assets/logo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="docs/ETOS-LLM-Studio/README.md">ETOS LLM Studio</a></td>
        <td>ETOS LLM Studio (ELS)是一个旗舰AI客户端,明确为WatchOS和iOS定制. 它的特点是表第一设计,美学UI,设备之间的无缝同步,以及深层系统集成. 支持包括DeepSeek在内的多个模型,重新定义手腕上的AI交互.</td>
    </tr>
    <tr>
        <td><img src="docs/operit/assets/logo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/AAswordman/Operit">Operit AI</a></td>
        <td>一个Android平台的开源系统集成AI助手,支持几乎完整的mcp使用,并与Android系统高度兼容. 该软件既具有高定制性,也具有低学习门槛,内置工具用于文件操作,搜索,自动点击,格式转换,以及集成的DeepSeek API网页.</td>
    </tr>
    <tr>
        <td><img src="docs/openEuler Intelligence/intelligence_icon.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://www.openeuler.org/en/projects/intelligence/">openEuler Intelligence</a></td>
        <td>智能大型模型平台建立在开放的Euler上,深度融合了包括DeepSeek在内的主流大型语言模型,并具有当地知识库建设能力. 该平台提供语义界面注册,MCP服务管理,智能代理(Agent)开发,自动工作流程管弦乐等核心功能. 它支持网络和桌面客户端访问,大大提高了开发效率和企业级应用经验!</td>
    </tr>
    <tr>
        <td><img src="docs/hh-wserver/wserver.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/hzmosi/ai-wechat">WeChat RPA Intelligent Customer Service</a></td>
        <td>内建的DeepSeek官方API和Ali Bailian DeepSeek API,在AI服务不可用时可以无缝自动切换,确保24/7的稳定运行! 该工具通过RPA自动化执行,不访问私人接口.</td>
    </tr>
    <tr>
        <td><img src="docs/OpenXLab/migo/logo.svg" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://migo.intern-ai.org.cn/">Migo</a></td>
        <td>免费AI创新加速器提供智能QQA,深度纸张理解,前沿AI工具,个人学术知识库. 作为你的探索伙伴,Migo帮助你发现并实现杰出的想法!</td>
    </tr>
    <tr>
        <td><img src="docs/eechat/assets/logo.svg" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/Lucassssss/eechat">eechat</a></td>
        <td>一个方便用户的简单工具,用于本地部署大型语言模型,支持本地私人部署DeepSeek-R1,DLlama 3,Phi-4,Mistral,Gemma 3等开源模型,同时也支持远程LLM API调用.</td>
    </tr>
    <tr>
        <td><img src="https://openrouter.ai/brand/logo-grey.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://openrouter.ai/">OpenRouter</a></td>
        <td>OpenRouter 提供统一的API,通过一个单一的端点使你能够访问数百个AI模型,同时自动处理倒计时并选择最具成本效益的选项. 用你喜欢的 SDK 或框架 开始几行代码</td>
    </tr>
    <tr>
        <td><img src="docs/aingdesk/assets/logo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/aingdesk/AingDesk">AingDesk</a></td>
        <td>用视觉界面一击在您的计算机上部署AI模型,以优雅的聊天UI为特色. 它允许在线共享供协作使用,支持DeepSeek等各种模型,并实现网络搜索和第三方API集成.</td>
    </tr>
    <tr>
        <td><img src="docs/dingtalk/assets/dingtalk_icon.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://www.dingtalk.com/">DingTalk</a></td>
        <td>DingTalk AI Assistance 整合了来自该软件的多个AI产品特性. DingTalk 平台,以智慧支持企业的日常工作流程。 它拥有各种智能能力,包括但不限于智能通信、智能协作和智能管理。
通过这些功能,AI助理可以总结一个组织内的要点,生成会议记录,并向用户提供有关的任务通知和时间表提醒. 此外, DingTalk 大赦国际助理利用其知识库,明智地回答雇员关于公司行政程序、人力资源政策和其他相关专题的共同询问。</td>
    </tr>
    <tr>
        <td><img src="https://chatdoc.com/chatdoc/chatdoc.webp" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://chatdoc.com">ChatDOC</a></td>
        <td>ChatDOC 是一个AI驱动的文档读取工具,配备了强大的可追溯性功能,确保每条信息的源头都是清晰,可核查的,帮助您高效,准确地掌握文档的核心.</td>
    </tr>
    <tr>
        <td> <img src="./docs/SwiftChat/assets/favicon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/SwiftChat/README.md">SwiftChat</a></td>
        <td> <a href="https://github.com/aws-samples/swift-chat">SwiftChat</a> 是一个闪电快,跨平台的 AI 聊天应用程序,由 React Natural 构建. 它在Android,iOS和macOS上提供本土表演. 功能包括实时流畅聊天,丰富的Markdown支持,AI图像生成,自定义系统提示,快速模型选择和多式联运能力. 支持多个AI供应商,包括DeepSeek,Amazon Bedrock,Ollama和OpenAI兼容Modles,具有干净的UI和高性能.</td>
    </tr>
    </tr>
    <tr>
        <td><img src="https://4everlogo.4everland.store/logo/logo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/4EVERChat/README.md">4EVERChat</a></td>
        <td><a href="https://chat.4everland.org/">4EVERChat</a> 是集成数百个LLM的智能模型选择平台,能够实时比较模型性能. 杠杆 <a href="https://www.4everland.org/">4EVERLAND</a> AI RPC的统一API端点,实现了免费模式切换,并自动选择带有快速响应和低成本的组合.</td>
    </tr>
    <tr>
        <td><img src="./docs/xhai_browser/assets/logo_512.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="./docs/xhai_browser/README.md">xhai Browser</a></td>
        <td>xhai浏览器是一个Android桌面管理和AI浏览器,DeepSeek是默认的AI对话框引擎. 它具有终极性能(0.2秒开始),瘦小的大小(apk 3M),没有广告,超快的广告屏蔽,多屏幕分类,屏幕导航,多搜索盒,一个盒子多搜索!</td>
    </tr>
    <tr>
        <td><img src="https://i.imgur.com/FkbmMVG.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://intellibar.app/">IntelliBar</a></td>
        <td>IntelliBar 是 Mac 的漂亮助手, 它允许您使用像 DeepSeek R1 这样的高级模型, 并带有您的 Mac 上的任何应用程序 —— 例如: 在您的邮件应用程序中编辑邮件或在浏览器中总结文章 。</td>
    </tr>
    <tr>
        <td><img src="./docs/gptbots/gptbots.png" alt="Icon" width="64" height="auto" /> </td>
        <td><a href="https://www.gptbots.ai/docs">GPTBots</a></td>
        <td><a href="https://www.gptbots.ai/">GPTBots</a> 是一个没有代码的AI代理构建平台,整合了包括Deepseek在内的主要国际LLMs. 它为基于RAG的知识存储/检索、工具定制/调用和工作流程协调提供了模块。 此外,它允许代理商融入多个主流平台(如WhatsApp,Telegram等),为企业提供端到端的AI解决方案,并帮助他们在AI时代突出.</td>
    </tr>
    <tr>
        <td><img src="https://github.com/ThinkInAIXYZ/deepchat/blob/main/build/icon.png?raw=true" alt="Icon" width="64" height="auto" style="border-radius: 10px" /></td>
        <td><a href="https://github.com/ThinkInAIXYZ/deepchat/blob/main/README.md">DeepChat</a></td>
        <td>DeepChat 是一个完全免费的桌面智能助手,拥有强大的DeepSeek大模型,支持多轮对话,互联网搜索,文件上传,知识库等等.</td>
    </tr>
    <tr>
        <td width=80> <img src="https://avatars.githubusercontent.com/u/171659527?s=400&u=39906ab3b6e2066f83046096a66a77fb3f8bb836&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/quantalogic/quantalogic">Quantalogic</a> </td>
        <td> QuantaLogic是建设高级AI代理的Reaction(Reasoning & Action)框架. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/13600976/224d547a-6fbc-47c8-859f-aa14813e2b0f" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/chatbox/README.md">Chatbox</a> </td>
        <td> Chatbox是一个用于多个尖端LLM模型的桌面客户端,可以在Windows,Mac和Linux上找到. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/59196087/bb65404c-f867-42d8-ae2b-281fe953ab54" alt="Icon" width="64" height="auto"/> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/chatgpt_next_web/README.md"> ChatGPT-Next-Web </a> </td>
        <td> ChatGPT Next Web是一个跨平台的ChatGPT网络UI,有GPT3,GPT4和双子座Pro支持. </td>
    </tr>
    <tr>
        <td> <img src="docs/Casibase/assets/casibase.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://casibase.org/docs/category/beginner-guide/">Casibase</a></td>
        <td> <a href="https://casibase.org">Casibase</a> 是一个开放源代码AI知识库和对话系统,结合了最新的RAG技术,SSO功能,支持广泛的主流AI模型. Casibase旨在为企业和开发商提供强大,灵活,易于使用的知识管理和智能对话平台. </td>
    </tr>
    <tr>
        <td> <img src="./docs/Coco AI/assets/favicon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/Coco AI/README.md">Coco AI</a></td>
        <td> <a href="https://coco.rs">Coco AI</a> 是一个完全开源,跨平台的统一搜索和生产率工具,可以连接和搜索各种数据源,包括应用程序,文件,Google Drive,Notion,Yuque,Hugo,以及更多,本地和云源. 和DeepSeek这样的大型模型结合 Coco AI 能够进行智能的个人知识管理,强调隐私和支持私人部署,帮助用户迅速和智能地获取信息。 </td>
    </tr>
    <tr>
        <td> <img src="./docs/liubai/assets/liubai-logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/liubai/README.md">Liubai</a> </td>
        <td> 刘拜允许DeepSeek手脚操纵你的笔记,任务,日历,还有WeChat上的待办列表! </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/59196087/1ac9791b-87f7-41d9-9282-a70698344e1d" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/pal/README.md"> Pal - AI Chat Client<br/>(iOS, ipadOS) </a> </td>
        <td> Pal是iOS上的定制聊天游乐场. </td>
    </tr>
    <tr>
        <td> <img src="https://www.librechat.ai/librechat.svg" alt="LibreChat" width="64" height="auto" /> </td>
        <td> <a href="https://www.librechat.ai/docs/configuration/librechat_yaml/ai_endpoints/deepseek">LibreChat</a> </td>
        <td> LibreChat 是自定义的开源应用程序,无缝集成DeepSeek,用于增强AI交互. </td>
    </tr>
     <tr>
        <td> <img src="https://raw.githubusercontent.com/longevity-genie/chat-ui/11c6647c83f9d2de21180b552474ac5ffcf53980/static/geneticsgenie/icon-128x128.png" alt="Icon" width="64" height="auto"/> </td>
        <td> <a href="https://github.com/longevity-genie/just-chat">Just-Chat</a> </td>
        <td> 让你的LLM代理 和它说话简单快!</td>
     </tr>
    <tr>
        <td> <img src="https://www.papersgpt.com/images/logo/favicon.ico" alt="PapersGPT" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/papersgpt/papersgpt-for-zotero">PapersGPT</a> </td>
        <td> PapersGPT 是一个Zotero插件,与Deep Seek和其他多个AI模型无缝,用于在Zotero中快速阅读论文. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/rss-translator/RSS-Translator/main/core/static/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/rss_translator/README.md"> RSS Translator </a> </td>
        <td> 把 RSS 输入到您的语言中! </td>
    </tr>
    <tr>
        <td> <img src="https://relingo.net/assets/images/relingo-logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://relingo.net"> Relingo </a> </td>
        <td> 在浏览网站和观看Youtube时构建并掌握词汇! </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/ysnows/enconvo_media/main/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/enconvo/README.md"> Enconvo </a> </td>
        <td> Enconvo是AI时代的发起者,是所有AI功能的切入点,也是深思熟虑的智能助手.</td>
    </tr>
    <tr>
        <td><img src="https://github.com/kangfenmao/cherry-studio/blob/main/src/renderer/src/assets/images/logo.png?raw=true" alt="Icon" width="64" height="auto" style="border-radius: 10px" /></td>
        <td><a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/cherrystudio/README.md">Cherry Studio</a></td>
        <td>制作人的强大的桌面 AI 助手</td>
    </tr>
    <tr>
        <td> <img src="https://tomemo.top/images/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/tomemo/README.md"> ToMemo (iOS, ipadOS) </a> </td>
        <td> 一个词典本+剪贴板历史+键盘 iOS app,配有集成的AI宏模型,用于键盘中的快速输出使用.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/buxuku/video-subtitle-master/refs/heads/main/resources/icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/buxuku/video-subtitle-master">Video Subtitle Master</a></td>
        <td> 批次生成视频字幕,能够将字幕翻译成其他语言. 这是一个客户端工具,既支持Mac平台,也支持Windows平台,并与Baidu,Volcengine,DeepLx,OpenAI,DeepSeek,Ollama等多个翻译服务集成.</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/UnknownEnergy/chatgpt-api/blob/master/dist/assets/chatworm-72x72.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/UnknownEnergy/chatgpt-api/blob/master/README.md">Chatworm</a> </td>
        <td> Chatdroble是多种尖端LLM模型的网络应用,开源,也可以在Android上找到. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/icon_512x512@2x.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/tisfeng/Easydict">Easydict</a></td>
        <td> Easydict是一个简洁易用的翻译词典macOS App,它允许您轻松而优雅地浏览单词或翻译文本. 支持调用大型语言模型API进行翻译.</td>
    </tr>
    <tr>
        <td> <img src="https://www.raycast.com/favicon-production.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/raycast/README.md">Raycast</a></td>
        <td> <a href="https://raycast.com/?via=ViGeng">Raycast</a> 是一个用于macOS的生产力工具,可以让您用一些键盘来控制您的工具. 它支持包括DeepSeek AI在内的各种扩展.</td>
    </tr>
    <tr>
        <td> <img src="./docs/chatpdflocal/assets/chatpdflocal-icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.chatpdflocal.com">ChatPDFLocal</a> </td>
        <td> ChatPDFLocal 是帮助聊天的AI Mac OS App,它与DeepSeek和其他多个AI模型无缝工作以提高您的阅读效率. </td>
    </tr>
    <tr>
        <td> <img src="https://niceprompt.app/favicon.ico" alt="Icon" width="64" height="auto" /> </td> <td> <a href="https://niceprompt.app">Nice Prompt</a></td> <td> <a href="https://niceprompt.app">Nice Prompt</a> 在代码编辑器中组织、共享和使用您的提示, 带有 Cursor 和 VSCode 。</td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/193405629?s=200&v=4" alt="PHP Client" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-php/deepseek-php-client/blob/master/README.md">PHP Client</a> </td>
        <td> 深层搜索 PHP Client 是一个强有力的、由社区驱动的 PHP client 用于与 Deepseek API 无缝集成的库。 </td>
    </tr>
        <tr>
  <td>
    <img
      src="https://github.com/tornikegomareli/DeepSwiftSeek/blob/main/logo.webp"
      alt="DeepSwiftSeek Logo"
      width="64"
      height="auto"
    />
  </td>
  <td>
    <a href="https://github.com/tornikegomareli/DeepSwiftSeek/blob/main/README.md">DeepSwiftSeek</a>
  </td>
  <td>
    DeepSwiftSeek 是一个轻量级但强大的Swift客户端库,与DeepSeek API的整合相当不错.
    它为聊天,流线,FIM(Fill-in-the-Middle)的完成提供了方便的Swift货币,等等.
  </td>
</tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/958072?s=200&v=4" alt="Laravel Integration" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-php/deepseek-laravel/blob/master/README.md">Laravel Integration</a> </td>
        <td> 深层包装 PHP client,用于无缝的深层Seek API集成与laravel应用.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/cohesion-org/deepseek-go/refs/heads/main/internal/images/deepseek-go.png" alt="Go Client" width="64" height="auto"> </td>
        <td> <a href="https://github.com/cohesion-org/deepseek-go/blob/main/README.md">Deepseek Go</a> </td>
        <td>  一个Deepseek客户端为Go写了支持聊天和理性模型. 还支持阿祖尔等外部供应商, OpenRouter 还有其他人。 </td>
    </tr>
    <tr>
        <td> <img src="./docs/zotero/assets/zotero-icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/zotero/README_cn.md">Zotero</a></td>
        <td> <a href="https://www.zotero.org">Zotero</a> 是一种自由、容易使用的工具,可以帮助您收集、组织、注释、引用和分享研究。 它可以使用Deepseek作为翻译服务.</td>
    </tr>
    <tr>
        <td> <img src="https://b3log.org/images/brand/siyuan-128.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/SiYuan/README.md">SiYuan</a> </td>
        <td> SiYuan 是一个隐私第一的个人知识管理系统,支持完全的离线使用,以及端到端加密数据同步.</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/ArvinLovegood/go-stock/raw/master/build/appicon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/ArvinLovegood/go-stock/blob/master/README.md">go-stock</a> </td>
        <td>go-stock 是Wails公司建造的中国股票数据查看器,带有NationalUI,由LLM公司供电.</td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/102771702?s=200&v=4" alt="Wordware" width="64" height="auto" /> </td>
        <td> <a href="docs/wordware/README.md">Wordware</a> </td>
        <td><a href="https://www.wordware.ai/">Wordware</a> 这是一个工具箱,可以让任何人 建立,提拉,并部署他们的AI堆 与公正的自然语言。</td>
    </tr>
    <tr>
        <td> <img src="https://framerusercontent.com/images/xRJ6vNo9mUYeVNxt0KITXCXEuSk.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/langgenius/dify/">Dify</a> </td>
        <td> <a href="https://dify.ai/">Dify</a> 是一个LLM应用程序开发平台,支持DeepSeek模型用于创建助手,工作流程,文本生成器等. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/enricoros/big-AGI/refs/heads/v2-dev/public/favicon.ico" alt="Big-AGI" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/enricoros/big-AGI/blob/v2-dev/README.md">Big-AGI</a> </td>
        <td><a href="https://big-agi.com/">Big-AGI</a> 是一个开创性的人工智能套件,旨在实现人人获得先进人工智能的民主化。</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/LiberSonora/LiberSonora/blob/main/assets/avatar.jpeg?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/LiberSonora/LiberSonora/blob/main/README_en.md">LiberSonora</a> </td>
        <td> LiberSonora,意为"自由之声",是一种AI动力,强力,开源的音书工具包,包含智能字幕提取,AI标题生成,多语种翻译等功能,支持GPU加速和批量下线处理.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/ripperhe/Bob/master/docs/_media/icon_128.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://bobtranslate.com/">Bob</a></td>
        <td> <a href="https://bobtranslate.com/">Bob</a> 是一个 macOS 翻译 & OCR 工具, 可以用于任何应用程序 。 rig从盒子里出来!</td>
    </tr>
    <tr>
        <td> <img src="https://agenticflow.ai/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://agenticflow.ai/">AgenticFlow</a> </td>
        <td> <a href="https://agenticflow.ai/">AgenticFlow</a> 是一个没有代码的平台,市场营销者为上市自动化构建代理AI工作流程,由数百个日常应用软件作为你的AI代理的工具.</td>
    </tr>
    <tr>
        <td> <img src="https://agentomat.com/static/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://agentomat.com/">AGENTOMAT</a> </td>
        <td> <a href="https://agentomat.com/">AGENTOMAT</a> AI Agents for Everyone - 创建,共享和监督AI Agents的平台.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/obot-platform/obot/refs/heads/main/docs/static/img/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/obot-platform/obot">Obot</a> </td>
        <td> Obot是用于构建和部署AI助手的代理平台,内置RAG,工作流程自动化,并与流行工具和服务无缝融合,由DeepSeek等LLMs提供动力. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/STranslate/STranslate/refs/heads/main/images/favicon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://stranslate.zggsong.com/">STranslate</a></td>
        <td> <a href="https://stranslate.zggsong.com/">STranslate</a>(Windows)是由WPF开发的即时翻译 OCR 工具 </td>
    </tr>
    <tr>
        <td> <img src="https://devinci.onicai.com/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://devinci.onicai.com/">DeVinci</a></td>
        <td> <a href="https://devinci.onicai.com/">DeVinci</a> 是一个端到端分散的 AI 聊天应用, 可以私下与开源 LLM 聊天 。</td>
    </tr>
     <tr>
        <td> <img src="https://github.com/user-attachments/assets/5e16beb0-993e-47bf-807e-7c8804b313a2" alt="Asp Client" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Anwar-alhitar/Deepseek.Asp.Client/blob/master/README.md">ASP Client</a> </td>
        <td><a href="https://github.com/Anwar-alhitar/Deepseek.Asp.Client/blob/master/README.md">Deepseek.ASPClient</a>  是Deepseek AI API的一种轻量级的ASP.NET包装器,旨在简化.NET应用程序中的AI驱动文本处理. </td>
    </tr>
    <tr>
        <td> <img src="https://www.gptaiflow.tech/logo.png" alt="gpt-ai-flow-logo" width="64" height="auto" /> </td>
        <td> <a href="https://www.gptaiflow.tech/docs/product/api-keys-setup#setup-deepseek-api-keys">GPT AI Flow</a></td>
        <td>
            由工程师为效率爱好者建造的最终生产力武器(他们自己): <a href="https://www.gptaiflow.tech/">GPT AI Flow</a>
            <ul>
                <li>`Shift+Alt+Space` 醒来桌面智能中枢</li>
                <li>本地加密存储</li>
                <li>自定义指令引擎</li>
                <li>不订阅的点播电话</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/b09f17a8-936d-4dac-8b24-1682d52c9a3c" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/alecm20/story-flicks">Story-Flicks</a></td>
        <td>只要用一句话,就可以快速生成高清晰度的故事短视频,支持DeepSeek等模型.</td>
    </tr>
    <tr>
        <td> <img src="https://prompt.16x.engineer/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/16x_prompt/README.md">16x Prompt</a> </td>
        <td> <a href="https://prompt.16x.engineer/">16x Prompt</a> 是一个带有上下文管理的 AI 编码工具。 它帮助开发人员管理源代码上下文和手动提示,在现有代码库上执行复杂的编码任务.</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/Alpha派/assets/favicon1.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/Alpha派/README.md"> Alpha Pai </a> </td>
        <td> AI研究助理 / AI驱动的"下一代金融信息门户".<br>代理投资者参加会议并作笔记,以及提供搜索和QQA服务,为投资研究提供财务信息和定量分析.</td>
    </tr>
        <td> <img src="https://docs.xark-argo.com/img/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.xark-argo.com">argo</a> </td>
        <td>在Mac/Windows/Linux上使用RAG本地下载并运行Ollama和Huggingface模型. 也支持LLM API.</td>
    </tr>
    <tr>
        <td> <img src="https://www.petercat.ai/images/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.petercat.ai">PeterCat</a> </td>
        <td> 一个对话的QQA代理配置系统,自我托管的部署解决方案,以及一个方便的全机应用程序SDK,允许您为您的GitHub寄存器创建智能QQA bots.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/labring/FastGPT/refs/heads/main/.github/imgs/logo.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://fastgpt.cn/en">FastGPT</a> </td>
        <td>
            FastGPT 是一个基于大语言模型(LLM)的开源AI知识库平台,支持包括DeepSeek和OpenAI在内的各种模型. 我们为数据处理、模型引用、RAG检索和视觉AI工作流程安排提供外部能力,使你能够不费力地建立复杂的AI应用程序。
        </td>
   </tr>
   <tr>
        <td> <img src="./docs/ruzhiai_note/assets/play_store_512.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/ruzhiai_note/README.md">RuZhi AI Notes</a> </td>
        <td>RuZhi AI Notes 是一个智能知识管理工具,由AI提供动力,提供一站式知识管理和应用服务,包括AI搜索和探索,AI结果用于注释转换,注释管理和组织,知识展示和分享. 与DeepSeek模式相结合,提供更稳定和更高质量的产出.</td>
    </tr>
    <tr>
        <td> <img src="https://cdn.link-ai.tech/doc/CoW%20logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/zhayujie/chatgpt-on-wechat">Chatgpt-on-Wechat</a> </td>
        <td> Chatgpt-on-Wechat(CoW)是一个灵活的聊天员框架,支持将DeepSeek,OpenAI,Claude,Quen等多个LLMs无缝整合到常用的平台或办公软件中,如WeChat Official Account,WeCom,Feishu,WeC. DingTalk,以及网站。 它也支持广泛的自定义插件. </td>
    </tr>
    <tr>
        <td> <img src="https://athenalab.ai/assets/favicon/favicon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://athenalab.ai/">Athena</a> </td>
        <td>世界上第一个自主的通用AI,拥有先进的认知架构和人型推理能力,旨在应对复杂的现实世界挑战.</td>
    </tr>
    <tr>
        <td> <img src="https://maxkb.cn/images/favicon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/1Panel-dev/MaxKB">MaxKB</a> </td>
        <td> <a href="https://maxkb.cn/">MaxKB</a> 是一个随时可以使用,灵活的RAG Chatbot。 </td>
    </tr>
    <tr>
        <td> <img src="./docs/TigerGPT/assets/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://ttm.financial/gpt">TigerGPT</a> </td>
        <td>TigerGPT 是首个基于OpenAI的金融AI类投资助手,由虎集团开发. TigerGPT 目的是为投资者提供明智的投资决策支持。 2025年2月18日 (英语). TigerGPT 正式整合DeepSeek-R1模式,为用户提供在线QQA服务,支持深度推理. </td>
    </tr>
    <tr>
        <td> <img src="./docs/HIX.AI/assets/logo.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://hix.ai">HIX.AI</a> </td>
        <td>免费尝试 DeepSeek 并享受无限的 AI 聊天 HIX.AI。使用 DeepSeek R1 进行AI聊天、写入、编码和更多。 体验下一代AI聊天!</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/sharmt1411/askanywhere/blob/main/icon/Depth_8,_Frame_0explore-%E8%A7%92%E6%A0%87.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/sharmt1411/askanywhere">Askanywhere</a> </td>
        <td>选择任何地方的文本并开始与 Deepseek 的对话</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/OJZen/1chat/raw/refs/heads/main/doc/assets/icon.ico?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/OJZen/1chat">1chat</a> </td>
        <td>一个iOS应用程序,可以让你在本地与DeepSeek-R1模型聊天.</td>
    </tr>
    <tr>
        <td> <img src="https://chatlabsai.com/assets/logo/logo.png" alt="iOS AI Chatbot" width="64" height="auto" /> </td>
        <td> <a href="https://chatlabsai.com">Access 250+ text, image LLMs in one app</a> </td>
        <td> 1AI iOS Chatbot集成了250+文本,图像,语音模型,允许用户与包括Deepseek R1和Deepseek V3模型在内的世界上任何模型聊天.</td>
    </tr>
    <tr>
        <td> <img src="./docs/PopAi/assets/logo.svg" alt="PopAi" width="64" height="auto" /> </td>
        <td> <a href="https://popai.pro">PopAi</a> </td>
        <td>PopAi 发射DeepSeek R1! 享受无滞后、闪电快的表演 PopAi。无缝切换在线搜索打开/关闭。</td>
    </tr>
    <tr>
        <td> <img src="https://pot-app.com/logo/icon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://pot-app.com/">Pot</a></td>
        <td> <a href="https://pot-app.com/">Pot</a> 一个用于文本翻译和识别的跨平台软件. </td>
    </tr>
    <tr>
        <td><img src="https://github.com/Byaidu/PDFMathTranslate/raw/main/docs/images/banner.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/Byaidu/PDFMathTranslate">PDFMathTranslate</a></td>
        <td>PDF Math Translate是一个基于AI的全文本双语翻译工具,完全保留了PDF文档的布局.</td>
    </tr>
    <tr>
        <td><img src="https://github.com/Richasy/Bili.Copilot/raw/master/assets/StoreLogo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/Richasy/Bili.Copilot">Bili.Copilot</a></td>
        <td>Bilibili第三方Windows桌面客户端,是使用Windows App SDK建造的本土应用程序.</td>
    </tr>
    <tr>
        <td><img src="https://www.tensorbounce.com/logo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://www.tensorbounce.com/">LawAgent</a></td>
        <td>LawAgent 是由Tensorbounce团队开发的法律AI产品,整合了具有AI代理能力的知识库. 它拥有几千万官方法律相关数据点的庞大储存库,还允许定制知识库配置。 专业模式利用DeepSeek-R1的推理能力,协助用户进行法律分析,合同审查,文件生成,文件翻译等法律设想.</td>
    </tr>
    <tr>
        <td width=80> <img src="docs/AlphaBot/assets/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://alphabot.x-pai.com/">AlphaBot</a> </td>
        <td> AlphaBot 是一个智能股票分析助理,将多源数据与AI分析技术整合,提供技术分析,预测和风险评估,帮助投资者做出数据驱动的交易决定. 它支持一击部署,轻松操作,支持Windows/Linux/MacOS和其他平台</td>
    </tr>
    <tr>
        <td><img src="https://h1.appinn.me/file/1741929316827_21.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/jiqi136/DS-AI">Real-time Web-Access AI Assistant</a></td>
        <td>AI助手支持直接API通过DeepSeek-V3.1接口访问最强的Claude代码模型,允许不用网络中继使用(成本斜拉90%). 它支持图像和PDF文件以免费图像生成能力解析,允许自定义整合其他AI模型,并且通过连接到本地浏览器以进行广泛的在线内容检索而实现实时网页搜索. 或者,免费模式在线内容检索。 或者,也可以使用R1这样的免费模型.
</td>
    </tr>
    <tr>
    <td><img src="docs/remio/assets/remio_icon.png" alt="Icon" width="64" height="auto" /></td>
    <td><a href="https://www.remio.ai/">remio</a></td>
    <td>remio是一个AI驱动的个人知识中心,通过自动捕捉浏览过的网页内容,解析本地文件,整合个人笔记来建立个性化的知识库. 它允许在您的个人知识库中搜索和自然语言QQA, 以即时的见识, 同时提供智能的写作协助—— 适应您的风格来简化起草、精炼和轻松地完成内容。 采用本地第一存储方式设计,remio优先处理数据隐私,同时集中零散信息以达到最大生产力.</td>
    </tr> 
    <tr>
    <td><img src="docs/DocKit/assets/dockit.png" alt="Icon" width="64" height="auto" /></td>
    <td><a href="https://dockit.geekfun.club/">DocKit</a></td>
    <td>DocKit 是AI为NoSQL数据库设计的桌面GUI客户端,支持Elasticsearch和OpenSearch横跨Mac,窗口和Linux. 和DeepSeek这样的大型模型结合 DocKit 可以帮助开发者编写复杂的DSL查询,并为数据管理和分析提供更好的经验. </td>
    </tr> 
    <tr>
        <td> <img src="docs/zenfeed/assets/icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/glidea/zenfeed">zenfeed</a> </td>
        <td> 通过AI增强RSS的能力,自动过滤,总结,并推进重要信息以克服信息超载. </td>
    </tr>
    <tr>
        <td> <img src="docs/NoteGen/NoteGen.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/codexu/note-gen">NoteGen</a> </td>
        <td> NoteGen 是一个跨平台的 Markdown 记录器的应用程序 专门使用 AI 连接记录和写作, 组织零散的知识 一个可读的注释。 </td>
    </tr>
    <tr>
        <td> </td>
        <td> <a href="https://github.com/SamYuan1990/i18n-agent-action">i18n-agent-action</a> </td>
        <td> i18n Agent是一个AI动力工具,旨在精简和自动化国际化(i18n)和本地化(l10n)工作流程. 通过利用先进的自然语言处理(NLP)和机器学习,它帮助开发者、翻译和产品团队有效管理多语种内容——消除人工错误并加快全球部署。 </td>
    </tr>
    <tr>
        <td> <img src="https://mindpal.space/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://mindpal.io">MindPal</a> </td>
        <td> <a href="https://mindpal.io">MindPal</a> 是构建AI代理和多代理系统实现任何业务流程自动化的平台 </td>
    </tr>
    <tr>
        <td> <img src="https://3min.top/imgs/logo.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://3min.top/en">3mintop</a> </td>
        <td> 一个强大的AI动力工具,帮助你在短短3分钟内快速总结和理解任何内容,支持DeepSeek模型增强理解. </td>
    </tr>
    <tr>
        <td> <img src="https://5ire.app/favicon.ico" alt="5ire-logo" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/nanbingxyz/5ire">5ire</a> </td>
        <td> <a href="https://github.com/nanbingxyz/5ire">5ire</a> 是一个方便用户,跨平台的开源桌面AI助手,兼容主流LLM,支持MCP服务器,本地RAG,即时库,以及各种实用功能.</td>
    </tr>
    <tr>
        <td> <img src="https://prompt.16x.engineer/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/16x_prompt/README.md">16x Prompt</a> </td>
        <td> <a href="https://prompt.16x.engineer/">16x Prompt</a> 是一个带有上下文管理的 AI 编码工具。 它帮助开发人员管理源代码上下文和手动提示,在现有代码库上执行复杂的编码任务.</td>
    </tr>
    <tr>
        <td> <img src="https://cantian.ai/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://cantian.ai/">Cantian AI</a></td>
        <td>独家AI-native Bazi 算命服务,拥有深厚,结构化的东方传统文化知识库.</td>
    </tr>
    <tr>
        <td> <img src="https://obsidian.md/favicon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/TarsLab/obsidian-tars">Obsidian Tars</a></td>
        <td> 将 LLM 对话整合到 Obsidian 的便条编辑中,其中深 Seek- reasoner 的 CoT 输出以 callout 格式进行. </td>
    </tr>
    <tr>
        <td> <img src="https://www.chatbotbuilder.dev/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/bobbylkchao/chatbotBuilder">AI Chatbot Builder</a> </td>
        <td> <a href="www.chatbotbuilder.dev/">Chatbot Builder</a> 是由DeepSeek和OpenAI提供动力的开源聊天平台,可以进行各种情景的智能对话.</td>
    </tr>
    <tr>
        <td> <img src="https://bibigpt.co/icons/lucid/icon_32x32@2x.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="http://bibigpt.co">BibiGPT</a> </td>
        <td> <a href="http://bibigpt.co">BibiGPT</a> 是AI音频/视频助理,支持Bilibili,YouTube,小洪修,播客等主要平台的内容分析和总结,使音频/视频内容更快消耗,更容易找到,更好使用. 特征包括内容总结,互动QQA,以及文章生成. 支持视频文件上传,注意记录应用集成,以及DeepSeek R1和V3模型. </td>
    </tr>
    <tr>
        <td> <img src="https://lobehub.com/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://lobehub.com/docs/usage/providers/deepseek">LobeChat</a> </td>
        <td> <a href="https://lobehub.com">LobeChat</a> - 一个开源,现代设计AI聊天框架. 支持DeepSeek R1,知识库(文件上传/知识管理/RAG),多模式(Vision/TTS/Plugins/Artifacts). 一击 FREE 部署您的私人 DeepSeek 应用程序 </td>
    </tr>
    <tr>
        <td> <img src="./docs/ruzhiai_note/assets/play_store_512.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/ruzhiai_note/README.md">RuZhi AI Notes</a> </td>
        <td>RuZhi AI Notes 是一个智能知识管理工具,由AI提供动力,提供一站式知识管理和应用服务,包括AI搜索和探索,AI结果用于注释转换,注释管理和组织,知识展示和分享. 与DeepSeek模式相结合,提供更稳定和更高质量的产出.</td>
    </tr>
    <tr>
        <td> <img src="https://cdn.link-ai.tech/doc/CoW%20logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/zhayujie/chatgpt-on-wechat">Chatgpt-on-Wechat</a> </td>
        <td> Chatgpt-on-Wechat(CoW)是一个灵活的聊天员框架,支持将DeepSeek,OpenAI,Claude,Quen等多个LLMs无缝整合到常用的平台或办公软件中,如WeChat Official Account,WeCom,Feishu,WeC. DingTalk,以及网站。 它也支持广泛的自定义插件. </td>
    </tr>
    <tr>
        <td> <img src="https://www.weiyuai.cn/logo.png" alt="AI Customer Service" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Bytedesk/bytedesk">Bytedesk</a> </td>
        <td> Entertainment IM Solution with AI powered live talk, 电子邮件支持, omni-channel客户服务与团队 im, 可替代松动+zendesk/intercom.</td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/rockbenben/subtitle-translator/main/public/logo.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/rockbenben/subtitle-translator">Subtitle Translator</a></td>
        <td>一个支持SRT/ASS/VTT/LRC格式的批次字幕翻译器,兼容DeepSeek和其他各种LLM和机器翻译接口.</td>
    </tr>
    <tr>
        <td width=80> <img src="docs/turtlenoir/assets/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://turtlenoir.com/"> Turtle Noir </a> </td>
        <td> <a href="https://turtlenoir.com/"> Turtle Noir </a> AI主持由DeepSeek提供动力的横向思维益智游戏(情况谜题/"Turtle Soup"),支持单玩和多人模式. AI主持人管理游戏流程,并提供机智的评论,通过标准"是/否/与游戏无关"的QQA来指导扣除过程. 特征包括沉浸式游戏玩法模式,智能提示,拼图解析,以及内容节制. 完全适合临时的大脑培训和在线社交游戏. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/songquanpeng/one-api/main/web/default/public/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/songquanpeng/one-api">One API</a> </td>
        <td> One API 是一个 LLM API 管理和密钥再分配系统,将多个提供者统一在一个 API 下. 单二进制,Docker-ready,带有英语UI.</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="agent">AI 智能体框架</span>

<table>
    <tr>
        <td width=80> <img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/smolagents/mascot_smol.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/huggingface/smolagents/tree/main"> smolagents </a> </td>
        <td> 最简单的方法 建立伟大的代理人。 特工们写着蟒蛇代码来调用工具并指挥其他特工. Depseek-R1等开放模式优先支持!  </td>
    </tr>
    <tr>
        <td><img src="https://github.com/user-attachments/assets/865634cb-1383-4317-a895-dfcb15f11375" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/yomo/README.md">YoMo</a></td>
        <td>具有强类型语言支持的状态服务器无 LLM 函数调用框架</td>
     </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/182288589?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/DMontgomery40/deepseek-mcp-server/blob/main/README.md">DeepSeek MCP Server</a> </td>
        <td> DeepSeek高级语言模型的模型背景协议服务器.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/superagentxai/superagentX/refs/heads/master/docs/logo/icononly_transparent_nobuffer.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/superagentx/README.md">SuperAgentX</a> </td>
        <td>SuperAgentX:一个轻量级开源AI框架,用于具有人工一般智能(AGI)能力的自主多代理应用.</td>
    </tr>
    <tr>
        <td> <img src="https://panda.fans/_assets/favicons/apple-touch-icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/anda/README.md">Anda</a> </td>
        <td>AI代理开发的Rust框架,旨在建立一个高度可调和,自主,永远记忆的AI代理网络.</td>
    </tr>
    <tr>
        <td> <img src="https://www.dreams.fun/favicon.ico" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/daydreamsai/daydreams">Daydreams</a> </td>
        <td>Daydreams是一个基因跨链剂框架,用于执行链上的任何内容. 自主性强,容易在扶持下一代代理的基础上发展.</td>
    </tr>
    <tr>
        <td> <img src="https://rig.rs/assets/favicon.png" alt="Icon" width="64" height="auto" alt="Rig (Rust)" /> </td>
        <td> <a href="https://rig.rs">RIG</a> </td>
        <td>在 Rust 中构建模块化和可缩放的 LLM 应用程序.</td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/longevity-genie/chat-ui/11c6647c83f9d2de21180b552474ac5ffcf53980/static/geneticsgenie/icon-128x128.png" alt="Icon" width="64" height="auto"/> </td>
        <td> <a href="https://github.com/longevity-genie/just-agents">Just-Agents</a> </td>
        <td>一个轻量级,LLM代理的直截了当的库 - 没有过度工程,只是简单!</td>
    </tr>
    <tr>
        <td> <img src="https://alice.fun/alice-logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/bob-robert-ai/bob/blob/main/alice/readme.md">Alice</a> </td>
        <td>利用DeepSeek等LLMs进行链上决策。 爱丽丝将实时数据分析与玩耍的个性结合起来,管理符,矿BOB,并治理生态系统.</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/Upsonic/Upsonic/blob/9d2e6d43b44defc6744817330625661ca3a2184e/Upsonic%20pp.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Upsonic/Upsonic">Upsonic</a> </td>
        <td>Upsonic提供了一个先进的企业准备代理框架,你可以在这里协调LLM的电话,代理,以及计算机的使用,以成本效益的方式完成任务.</td>
    </tr>

<tr>
        <td> <img src="https://github.com/guyoung/AIMatrices/raw/main/docs/assets/logo/ai-matrices1.png" alt="AIMatrices 图标" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/guyoung/AIMatrices/blob/main/README.md">AIMatrices</a> </td>
        <td>AIMatrices 是一个轻量级,高性能,可扩展,和开源AI应用程序快速建设平台,旨在为开发者提供高效和方便的AI应用程序开发体验. 它集成多种先进的技术和工具,帮助用户快速构建,部署,并维护AI应用程序,而无需从零开始写复杂的代码.</td>
    </tr>
</table>

### RAG 框架

<table>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/173022229" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/APRO-com">ATTPs</a> </td>
        <td>特工之间信任通信的基础协议框架. 任何基于DeepSeek的代理商,通过整合 <a href="https://docs.apro.com/attps">ATTPs</a> SDK,可以访问代理注册,发送可核查数据,检索可核查数据等特性. 这样它就可以与其他平台的特工进行可信的交流. </td>
    </tr>
    <tr>
        <td> <img src="docs/translate.js/assets/icon.png" alt="图标" width="64" height="auto" /> </td>
        <td> <a href="docs/translate.js/README.md">translate.js</a> </td>
        <td> 前端开发者AI i18n. 它只需JavaScript两行就可以实现完全自动的HTML翻译. 您可以在几十种语言之间进行一次性的切换。 不需要修改页面,不需要语言配置文件,它支持数十个微调扩展指令. 这是SEO友好的。 此外,它打开了标准的文本翻译API接口.  </td>
    </tr>
    <tr>
        <td width=80> <img src="docs/agentUniverse/assets/agentUniverse_logo_s.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/antgroup/agentUniverse"> agentUniverse </a> </td>
        <td> agentUniverse 是一个针对复杂业务情景的多代理合作框架。 它为LLM代理应用提供了快速和方便用户的开发能力,重点是代理协作调度,自主决策,动态反馈等机制. 框架 orig源自Ant Group在金融业中真实世界的商业实践. 2024年6月,任,县知县. agentUniverse 实现了对DeepSeek系列模型的全面整合支持.  </td>
    </tr>
        <tr>
            <td width=80> <img src="docs/BotSharp/assets/logo.png" alt="Icon" width="64" height="auto" /> </td>
            <td> <a href="https://github.com/SciSharp/BotSharp"> BotSharp </a> </td>
            <td> BotSharp 是一个开源多代理应用程序开发框架。 从简单的聊天员到多代理协作和复杂的任务,如Text To SQL框架,它提供箱外解决方案,以快速将大型模型能力整合到现有的业务系统中. 它还包括内置知识库和会议管理功能。 这个框架已经用DeepSeek V3模型进行了彻底的测试,由于DeepSeek V3的性能,这个框架的性能与其他专有模型相当. </td>
        </tr>
           <tr>
            <td width=80> <img src="docs/eino/assets/logo.png" alt="Icon" width="64" height="auto" /> </td>
            <td> <a href="https://github.com/cloudwego/eino"> Eino </a> </td>
            <td> Eino(发音为"I know")旨在成为Go语言中最好的LLM应用开发框架. 它借鉴了LangChain和LlamaIndex等开源社区优秀LLM框架的设计概念,同时吸收了尖端研究成果和实际应用经验,提供了更符合Go编程惯例的LLM应用开发框架,强调简单,可扩展性,可靠性和效率. </td>
        </tr>
    </tr>
    <tr>
        <td width=80> <img src="https://raw.githubusercontent.com/Tencent/Youtu-agent/924aeeb6c49ee524b8bb4de2642a3dc84b7b86b9/docs/assets/mascot.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Tencent/Youtu-agent/"> Youtu-Agent </a> </td>
        <td> <a href="https://github.com/Tencent/Youtu-agent/"> Youtu-Agent </a> 是一个灵活、高性能的框架,用于建立、运行和评价自主代理人。 除了达到基准外,这一框架还提供强大的代理能力,例如数据分析、文件处理和深入研究,所有这一切都采用开源模型。 </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="data">数据与 AI 应用框架</span>

<table>
    <tr>
        <td width="80"> <img src="https://github.com/user-attachments/assets/a327d72f-755f-4256-8a37-32a518a55df3" alt="Icon" width="64" height="auto" /> </td>
        <td width="120"> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/dbgpt/README.md"> DB-GPT </a> </td>
        <td> 🤖 DB-GPT 是一个开源的 AI 本地数据应用开发框架, 包含 AWEL( 代理工作流程表达语言) 和代理 。
目的是通过开发多模型管理(SMMF),Text2SQL效果优化,RAG框架和优化,多代理框架协作,AWEL(代理工作流程管弦乐)等多种技术能力,在大型模型领域建设基础设施. 这使得具有数据的大型模型应用更加简单和方便.

 </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="rag">RAG 框架</span>

<table>
    <tr>
        <td width="80"> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/33142505/77093e84-9f7c-4716-9168-bac962fa1372" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/ragflow/README.md"> RAGFlow </a> </td>
        <td> 基于深层文档理解的开源RAG(检索-增强生成)引擎. 它为任何规模的企业提供了简化的RAG工作流程,结合LLM(Large Language Models),提供真实的问答能力,辅以各种复杂格式化数据的有根据的引用. </td>
    </tr>
    <tr>
        <td width="80"> <img src="https://raw.githubusercontent.com/pingcap/autoflow/refs/heads/main/docs/public/icon-dark.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/autoflow/README.md"> Autoflow </a> </td>
        <td> <a href="https://github.com/pingcap/autoflow">AutoFlow</a> 是一个基于 Graph 的开源知识库工具(基于 Graph 的 Retrival-Augmented Generation),基于 <a href="https://www.pingcap.com/ai?utm_source=tidb.ai&utm_medium=community">TiDB</a> 向量,LlamaIndex,和DSPy。 它提供类似Percusity的搜索界面,并允许方便的集成 AutoFlow通过嵌入一个简单的 JavaScript 片段来将对话搜索窗口插入您的网站 。 </td>
    </tr>
    <tr>
        <td width="80"> <img src="https://assets.zilliz.com/Zilliz_Logo_Mark_White_20230223_041013_86057436cc.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/zilliztech/deep-searcher"> DeepSearcher </a> </td>
        <td> DeepSearcher 结合强大的LLMS(DeepSeek,OpenAI等)和矢量数据库(Milvus等),根据私人数据进行搜索,评价和推理,提供高度准确的答案和全面报告.  </td>
    </tr>
    <tr>
        <td width="80"> <img src="https://raw.githubusercontent.com/OpenSPG/openspg/089188f3e7b0392221f5a8e8f1a3629b6352a6f9/LOGO.png" alt="Icon" width="64" height="auto"/> </td>
        <td> <a href="https://github.com/OpenSPG/KAG/blob/master/README.md"> KAG </a> </td>
        <td> KAG 是一个逻辑推理和基于 <a href="https://github.com/OpenSPG/openspg">OpenSPG</a> 引擎和大语言模型,用于为垂直域知识库构建逻辑推理和QQA解决方案. KAG 可以有效克服传统RAG向量相似性计算和OpenIE引入的GraphRAG噪声问题的模糊性. KAG 支持逻辑推理和多跳事实 QQA 等。</td>
    </tr>
    <tr>
        <td width="80"> <img src="https://raw.githubusercontent.com/TencentCloudADP/youtu-graphrag/refs/heads/main/assets/logo.png" alt="Youtu-GraphRAG icon" width="64" height="auto"/> </td>
        <td> <a href="https://github.com/TencentCloudADP/Youtu-GraphRAG"> Youtu-GraphRAG </a> </td>
        <td>Youtu-GraphRAG 提出一个新的图检索-增强生成模式,通过计划垂直统一图构建、索引和检索。 它将GraphRAG推进到企业层面的应用上,允许在最低限度的人类干预下无缝的跨域调整,其方法是:(一) 动态的、带约束的提取;(二) 全面的社区检测算法;(三) 用于迭代反射和推理的、由系统指导的查询分解。</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="fhe">FHE（全同态加密）框架</span>

<table>
    <tr>
        <td> <img src="./docs/fhe.mind-network/mind-network-log.png" alt="Icon" width="200" height="auto" /> </td>
        <td> <a href="https://github.com/mind-network/mind-sdk-deepseek-rust"> Mind FHE Rust SDK </a> </td>
        <td> <p>一个开源的SDK,用于用全同构加密(FHE)加密AI,并与Mind Network集成以达成代理共识. FHE被认为是 <b>密码学圣杯</b>,可以直接对加密数据进行计算,而无需解密。 通过FHE,代理商可以在使用Deepseek的同时保护隐私,既确保模型完整性,也确保结果共识.<b> 全部不暴露他们的数据 </b>- 通过连接到心灵网络。 SDK这个 <a href="https://github.com/mind-network/mind-sdk-deepseek-rust"> source code </a> 纯执行 <b>锈</b>> 和弹簧kage 也可上网查阅。 <a href="https://crates.io/crates/mind_sdk_deepseek"> crates.io </a>。 。 。 。 </p> </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="solana">Solana 框架</span>

<table>
    <tr>
        <td> <img src="./docs/solana-agent-kit/assets/sendai-logo.png" alt="Icon" width="128" height="auto" /> </td>
        <td> <a href="https://github.com/sendaifun/solana-agent-kit"> Solana Agent Kit </a> </td>
        <td>连接AI代理与索拉纳协议的开源工具包. 现在,任何代理,使用任何 Deepseek LLM,可以自主执行60+ 索拉纳行动: </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="sythetic">合成数据整理</span>

<table>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/bespokelabsai/curator/main/docs/Bespoke-Labs-Logomark-Red-crop.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/curator/README.md"> Curator </a> </td>
        <td> 用于管理培训后LLMs大型数据集的开源工具. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/8455694b-c52e-40ec-847e-adf6a5ac064f" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Kiln-AI/Kiln"> Kiln </a> </td>
        <td>生成合成数据集,将R1模型蒸馏成定制微调. </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/192579850?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/DataEval/dingo"> Dingo </a> </td>
        <td>丁戈:综合数据质量评价工具. </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="im">即时通讯应用插件</span>

<table>
    <tr>
        <td> <img src="https://github.com/InternLM/HuixiangDou/releases/download/v0.1.0rc1/huixiangdou.jpg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/huixiangdou/README_cn.md">HuixiangDou<br/>(wechat,lark)</a> </td>
        <td>个人WeChat和Feishu的域知识助理,专注于回答问题.</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/RockChinQ/LangBot/blob/master/res/logo.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/RockChinQ/LangBot">LangBot<br/>（QQ, Lark, WeCom）</a> </td>
        <td> 基于LLM的IM bots框架,支持QQ,Lark,WeCom,以及更多的平台.</td>
    </tr>
    <tr>
        <td> <img src="https://nonebot.dev/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/KomoriDev/nonebot-plugin-deepseek">NoneBot<br/>（QQ, Lark, Discord, TG, etc.）</a> </td>
        <td> 基于NoneBot框架,提供智能聊天和深思功能,支持QQ,Lark,Discord,TG等更多平台.</td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/197911947?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/AstrBotDevs/AstrBot/">AstrBot<br/>（QQ, WeChat, WeCom, Lark, TG, etc.）</a> </td>
        <td> 方便用户的LLM基于WebUI的多平台聊天器,支持长期记忆,RAG,LLM代理,以及插件集成.</td>
    </tr>
    <tr>
        <td> <img src="https://oss.nekro.ai/nekro_agent_logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/KroMiose/nekro-agent">NekroAgent<br/>(QQ, Discord, BiliBiliLive, Minecraft etc.)</a> </td>
        <td> Nekro Agent是一个聪明而优雅的AI代理执行框架. 它的核心是利用一个强大而灵活的即时工程系统来指导AI生成代码并在安全的沙盒内执行. 它通过本土的多平台适配器架构提供强大的跨平台事件流处理,无缝支持OneBot v11(QQ),Discord,Minecraft,和Bilibili Live(Powering V-Tuber的表演)等主要平台. 该项目还吹嘘了一个非常可扩展的插件系统,即个人和插件的共享生态系统,并支持在复杂、多用户群体聊天中的有效互动。 它的目标是为用户和开发者提供一种极为高效,高度灵活,易于使用的开发者友好智能枢纽. </td>
    </tr>
    <tr>
        <td> <img src="https://www.lanyingim.com/img/header/dock_lanying.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.lanyingim.com">蓝莺IM<br/></a> </td>
        <td> <b>AI Chatbot SDK 与 IM 云服务</b>, (中文). <br/> 跨平台(iOS、Android、Web、PC、Linux) <a href="https://github.com/maxim-top/maxim-bistro">chat SDK</a> 和AI代理平台。 <br/> 轻松融入应用,支持WeChat和官方账号. <br/> 本地 DeepSeek 支持, 不需要 API- Key 。</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="office">Office 加载项</span>

<table>
    <tr>
        <td> <img src="https://www.44886.com/view/img/bukeng.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.bukenghezi.com/">BKOffice</a> </td>
        <td>一个支持Word,Excel和PPT套件的办公室插件(也支持WPS套件),为Office增加了300多个功能.</td>
    </tr>
      <tr>
        <td> <img src="https://www.aippt.cn/_nuxt/logo_cn.eYEokZzA.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.aippt.cn/">AiPPT</a> </td>
        <td>AiPPT.com,由超过2000万用户选择,1句1分,1点击生成PPT.</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/office-sec/OfficeAI/blob/main/logo/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/office-sec/OfficeAI">OfficeAI Assistant</a> </td>
        <td>OfficeAI Assistant 是一个免费的办公插件,在Office内部提供AI QQA,AI校对,AI排版,AI创建,AI数据处理等功能. 它可以提高办公室效率,并与微软办公室和WPS办公室兼容。</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="browser">浏览器扩展</span>

<table>
    <tr>
        <td><img src="./docs/SelectTranslate/assets/icon.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://selecttranslate.com/">SelectTranslate</a></td>
        <td>免费开放AI翻译扩展,具有双语网页翻译,AI选译(翻譯),输入翻译,PDF翻译等创新实用翻译功能.
        </td>
    </tr>
    <tr>
        <td><img src="./docs/deepshare/assets/logo_200.png" alt="Icon" width="64" height="auto" /></td>
        <td><a href="./docs/deepshare/README.md">Tiny AI Bee</a></td>
        <td> Tiny AI Bee 是一个免费登录的一次性点击油脂猴子插件,用于共享 AI 聊天,
            专攻解决将"AIQQA"数千字发往朋友,导致他们的手机被刷,或长截图被压缩和打开模糊,不易阅读的问题.
            满意的用户需要与其他人分享其结晶智慧
        </td>
    </tr>
    <tr>
        <td><img src="docs/OpenXLab/migo/logo.svg" alt="Icon" width="64" height="auto" /></td>
        <td><a href="https://chromewebstore.google.com/detail/cjapgnecnkblehipjghhegiccobeloka?utm_source=item-share-cb">Migo</a></td>
        <td> Migo提供全面的文本处理,信息搜索,以及知识QQA功能,适应各种在线工作和研究情景(如Feishu,arXiv,Overleaf等).</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/59196087/9d3f42b8-fcd0-47ab-8b06-1dd0554dd80e" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/immersive_translate/README.md"> Immersive Translate </a> </td>
        <td> Immersive Translate是一个双语网页翻译插件. </td>
    </tr>
    <tr>
        <td> <img src="https://lh3.googleusercontent.com/K9i0qJb8phasC5wWf5tU68rhnfvX4swsE0hrhJP-WB3WV7MwE5KpMUIJvHKNHHRE6GKNIvIdTNSWoDMl_NggrmUsaw=s120" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/immersive_reading_guide/README.md"> Immersive Reading Guide </a> </td>
        <td> 没有侧边栏! Immersive AI 网络总结,问问题...... </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/59196087/8a301619-a3de-489b-81fd-69aaa7c1c561" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/chatgpt_box/README.md"> ChatGPT Box </a> </td>
        <td> ChatGPT Box 是浏览器中的 ChatGPT 集成,完全免费. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/59196087/c3d9d100-247a-41cc-97c1-10b01ed25e70" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/hcfy/README.md"> hcfy (划词翻译) </a> </td>
        <td> hcfy(QQ)是一个整合多个翻译服务的网页浏览器扩展. </td>
    </tr>
    <tr>
        <td> <img src="https://static.eudic.net/web/trans/en_trans.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/Lulu Translate/README.md"> Lulu Translate </a> </td>
        <td> 插件提供了鼠标选择翻译,段落比较翻译,以及PDF文档翻译功能. 它可以使用各种翻译引擎,如DeepSeek AI,Bing,GPT,Google等. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/Bistutu/FluentRead/blob/main/public/icon/128.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://fluent.thinkstu.com/"> FluentRead </a> </td>
        <td> 一个革命性的开源浏览器翻译插件,可以让每个人都有类似本地的阅读体验 </td>
    </tr>
    <tr>
        <td> <img src="https://www.ncurator.com/_next/image?url=%2Ffavicon.ico&w=96&q=75" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.ncurator.com/"> Ncurator </a> </td>
        <td> 知识库 AI QQA助理 - 让AI帮助你组织和分析知识</td>
    </tr>
    <tr>
        <td> <img src="https://github.com/oinzen/RSSFlow-doc/blob/main/docs/images/en/icon64.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://rssflow.oinchain.com"> RssFlow </a> </td>
        <td>一个智能的RSS阅读器扩展,带有AI动力的RSSsummarization和多维的feed视图. 支持DeepSeek模型配置,以增强内容理解. </td>
    </tr>
    <tr>
<td> <img src="./docs/refinereader/assets/refinereader-128.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://refinereader.cuihuaer.com"> Refine Reader </a> </td>
        <td> 一个使用AI(DeepSeek,OpenAI等)的Chrome扩展帮助您快速理解和总结文章. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/Hedwi/deepchat/refs/heads/main/images/logo.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://chromewebstore.google.com/detail/deepchat-power-of-deepsee/femhcibnncinlabdboehojdhfcihpkpl?hl=en"> DeepChat </a> </td>
        <td>通过在任何网站上打开侧边栏,使用户能够与DeepSeek聊天的 Chrome扩展名. 此外,它还在任何网站的任何选定文本下提供浮动菜单,允许用户生成文本摘要,检查语法问题,并翻译内容.</td>
    </tr>
     <tr>
        <td> <img src="https://www.typral.com/_next/image?url=%2Ffavicon.ico&w=96&q=75" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.typral.com/"> Typral </a> </td>
        <td> 快AI编剧助理 - 让AI帮助你快速改进文章,纸张,文本...</td>
    </tr>
    <tr>
        <td> <img src="https://static.trancy.org/assets/trancy_logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.trancy.org/"> Trancy </a> </td>
        <td>Immersive双语翻译,视频双语字幕,句/词选择翻译扩展</td>
    </tr>
    <tr>
        <td> <img src="https://ziziyi.com/svg/anything_copilot.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/baotlake/anything-copilot"> Anything Copilot </a> </td>
        <td> Anything Copilot是一个浏览器扩展,可以直接从侧边栏无缝地访问主流AI工具. </td>
    </tr>
    <tr>
        <td> <img src="https://cliprun.com/apple-touch-icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://cliprun.com/"> Cliprun </a> </td>
        <td> Python 代码跑步游戏( M). Right点击DeepSeek上的 Python 代码即可在浏览器中即时运行. </td>
    </tr>
    <tr>
        <td> <img src="http://cdn.docky.ai/assets/logo.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/docky-ai/README.md"> Docky AI </a> </td>
        <td>Docky AI 是一个强大的浏览器扩展,允许您通过侧边栏与多个AI模型进行实时对话. 它支持与多个模型同时通信,并可以帮助您阅读网页,编写,翻译和创建图像</td>
    </tr>
    <tr>
        <td> <img src="https://readfrog.mengxi.work/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://readfrog.mengxi.work"> 🐸 Read Frog </a> </td>
        <td> 在大赦国际的协助下翻译并深入了解任何网页。 </td>
    </tr>
    <tr>
        <td> <img src="https://chathub.gg/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://chathub.gg"> ChatHub </a> </td>
        <td> 全能AI客户端 </td>
    </tr>
    <tr>
        <td> <img src="./docs/Rearview/assets/favicon.webp" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="./docs/Rearview/README.md"> RearView </a> </td>
        <td>Rearview 是一个浏览器历史管理扩展,支持对历史浏览内容的全文搜索,并将浏览历史转换为可交谈的知识库.</td>
    </tr>
    <tr>
        <td> <img src="https://www.chatgot.io/chat/assets/imgs/logo@2x.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.chatgot.io/"> ChatGOT </a> </td>
        <td> 提高生产力的免费 AI 聊天员助理 </td>
    </tr>
</table>


<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="vscode">VS Code 扩展</span>

<table>
    <tr>
        <td> <img src="https://mintlify.s3.us-west-1.amazonaws.com/continue-docs/logo/light.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/continue/README.md"> Continue </a> </td>
        <td> 继续是IDE中的开源自动驾驶. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/cline/assets/favicon.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/cline/README.md"> Cline </a> </td>
        <td> 满足 Cline,一个可以使用您的 CLI aNd 编辑器的AI 助手. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/Sitoi/ai-commit/refs/heads/main/images/logo.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Sitoi/ai-commit/blob/main/README.md"> AI Commit </a> </td>
        <td> 使用 AI 生成 VS 代码中的 git 承诺消息 。 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/titusTong/seekCodeCopilot/blob/main/assets/SeekCodeCopilotLogo.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/titusTong/seekCodeCopilot/blob/main/README.md"> SeekCode Copilot </a> </td>
        <td> vscode 智能编码助理支持本地部署的 DeepSeek 模型配置 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/intellism/vscode-comment-translate/blob/master/doc/image/icon.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/intellism/vscode-comment-translate/blob/master/README.md"> Comment Translation </a> </td>
        <td> 此扩展帮助开发者翻译其代码中的评论,字符串,代码提示,错误消息,以及变量名称. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/AITK/assets/AIToolkit.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://code.visualstudio.com/docs/intelligentapps/overview"> AI Toolkit </a> </td>
        <td> AI Toolkit 为Visual Studio Code,是一个全面的扩展,授权开发者和AI工程师使用基因AI模型构建,测试和部署智能应用. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/joygqz/commit-genie/refs/heads/main/images/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://marketplace.visualstudio.com/items?itemName=joygqz.commit-genie"> Commit Genie </a> </td>
        <td> AI动力代码审查,并承付VS代码的信息生成器. 自动审查您的代码更改并生成有意义的标准承诺消息 。 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/JohnnyZ93/oai-compatible-copilot/blob/main/assets/logo.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/oai-compatible-copilot/README.md"> OAI Compatible Provider for Copilot </a> </td>
        <td> 一个开源的VS代码扩展,在GitHub Copilot中使用Openai兼容推论提供者. </td>
    </tr>
    <tr>
        <td> <img src="https://littlecareless.gallerycdn.vsassets.io/extensions/littlecareless/dish-ai-commit/0.56.1/1766035023782/Microsoft.VisualStudio.Services.Icons.Default" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/littleCareless/dish-ai-commit"> Dish AI Commit </a> </td>
        <td> 一个AI驱动的VS代码扩展,自动生成标准化的Git/SVN,使用DeepSeek和其他AI提供商传输消息,PR摘要,以及每周报告. </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="vs">Visual Studio 扩展</span>

<table>
    <tr>
        <td> <img src="https://merryyellow.gallerycdn.vsassets.io/extensions/merryyellow/comment2gpt/2.0.5/1739475434185/Microsoft.VisualStudio.Services.Icons.Default" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://marketplace.visualstudio.com/items?itemName=MerryYellow.Comment2GPT"> Comment2GPT </a> </td>
        <td> 通过您的评论使用 OpenAI ChatGPT、Google 双子座、Anthropic Claude、DeepSeek 和 Ollama </td>
    </tr>
    <tr>
        <td> <img src="https://merryyellow.gallerycdn.vsassets.io/extensions/merryyellow/codelens2gpt/2.0.5/1739475875714/Microsoft.VisualStudio.Services.Icons.Default" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://marketplace.visualstudio.com/items?itemName=MerryYellow.CodeLens2GPT"> CodeLens2GPT </a> </td>
        <td> 使用 OpenAI ChatGPT, Google 双子座, Anthropic Claude, DeepSeek 和 Ollama 通过代码Lens </td>
    </tr>
    <tr>
        <td> <img src="https://merryyellow.gallerycdn.vsassets.io/extensions/merryyellow/uca-lite/1.4.2/1739392928984/Microsoft.VisualStudio.Services.Icons.Default" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://marketplace.visualstudio.com/items?itemName=MerryYellow.UCA-Lite"> Unity Code Assist Lite </a> </td>
        <td> 团结脚本的代码协助 </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="neovim">Neovim 扩展</span>

<table>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/c316f70a-0a3c-4a32-b148-4df15e609acc" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/avante.nvim/README.md"> avante.nvim </a> </td>
        <td> avante.nvim 在 IDE 中是开源自动驾驶。 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/d66dfc62-8e69-4b00-8549-d0158e48e2e0" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/llm.nvim/README.md"> llm.nvim </a> </td>
        <td> 一个自由的大语言模型(LLM)插件,允许您在Neovim中与LLM交互. 支持任何LLM,例如Deepseek,GPT,GLM,Kimi或本地LLM(如ollama). </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/d66dfc62-8e69-4b00-8549-d0158e48e2e0" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/codecompanion.nvim/README.md"> codecompanion.nvim </a> </td>
        <td> AI动力编码,在Neovim中无缝. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/d66dfc62-8e69-4b00-8549-d0158e48e2e0" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/minuet-ai.nvim/README.md"> minuet-ai.nvim </a> </td>
        <td> Minuet提供来自流行的LLMs的代码完成为you类型,包括Deepseek,OpenAI,双子座,克劳德,Ollama,Codestral等等. </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="jetbrains">JetBrains 扩展</span>

<table>
    <tr>
        <td> <img src="https://ide.unitmesh.cc/img/logo.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://ide.unitmesh.cc/quick-start"> AutoDev </a> </td>
        <td>‍AutoDev 是JetBrain的IDE中的开源AI编码助手. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/84a0175f-39a6-41b0-83e5-2ea15a4ac771" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://plugins.jetbrains.com/plugin/21410-onegai-copilot"> Onegai Copilot </a> </td>
        <td>Onegai Copilot是JetBrain IDE中的AI编码助理. </td>
    </tr>
    <tr>
        <td> <img src="https://mintlify.s3.us-west-1.amazonaws.com/continue-docs/logo/light.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/continue/README.md"> Continue </a> </td>
        <td> 继续是IDE中的开源自动驾驶. </td>
    </tr>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/a18792721831/studyplugin/535b9cab69da0f97b42dcaebb00bb0d4ed15c8a6/translate/src/main/resources/META-INF/pluginIcon.svg" alt="Icon" width="64" height="auto"/> </td>
        <td> <a href="https://plugins.jetbrains.com/plugin/18336-chinese-english-translate">Chinese-English Translate</a> </td>
        <td> Chinese-English Translate 是在JetBrain的IDE中的一种多种翻译服务. </td>
    </tr>
    <tr>
        <td> <img src="https://ai-commit.com/git-commit-logo.svg" alt="Icon" width="64" height="auto"/> </td>
        <td> <a href="https://plugins.jetbrains.com/plugin/24851-ai-git-commit">AI Git Commit</a> </td>
        <td> 此插件使用AI根据代码的更改自动生成承诺消息 。 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/YiiGuxing/TranslationPlugin/blob/master/pluginIcon.svg?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://intellij-translation.yiiguxing.top/#/en/">IntelliJ Translation Plugin</a> </td>
        <td> 基于IntelliJ的IDEs的翻译插件整合了多个翻译服务,包括OpenAI翻译(与DeepSeek,Doubao,Ollama等兼容),允许随时直接翻译IDE内部的评论和文件等代码文本. </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="discord">Discord 机器人</span>

<table>
    <tr>
        <td> <img src="https://geneplore.com/img/geneplore_color_logo_circular.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/Geneplore AI/README.md"> Geneplore AI </a> </td>
        <td> Geneplore AI 运行着最大的AI Discord bots之一,现在与Deepseek v3和R1. </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="codeeditor">原生 AI 代码编辑器</span>

<table>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/126759922?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.cursor.com/"> Cursor </a> </td>
        <td>基于 VS 代码的 AI 代码编辑器</td>
    </tr>
    <tr>
        <td> <img src="https://exafunction.github.io/public/images/windsurf/windsurf-app-icon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://codeium.com/windsurf"> WindSurf </a> </td>
        <td>另一个基于 VS 代码的 AI 代码编辑器</td>
    </tr>
    <tr>
        <td> <img src="docs/wusigram/assets/logo-512.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/wusigram/README.md"> 无思微程序 </a> </td>
        <td>一个移动AI代码编写和运行工具. 深搜索编程伴奏</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="emacs">Emacs</span>

<table>
    <tr>
        <td> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/karthink/gptel"> gptel </a> </td>
        <td>Emacs 的简单 LLM 客户端</td>
    </tr>
    <tr>
        <td> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/milanglacier/minuet-ai.el"> Minuet AI </a> </td>
        <td>在您的代码中与智能跳舞 QQ</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="security">安全</span>

<table>
    <tr>
        <td> <img src="https://github.com/lukehinds/awesome-deepseek-integration/blob/codegate/docs/codegate/assets/codegate.png"  alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/stacklok/codegate/"> CodeGate </a> </td>
        <td> CodeGate: 安全 AI 代码生成</td>
    </tr>
    <tr>
        <td> <img src="./docs/tencent/hunyuan.png"  alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/tencent/AI-Infra-Guard"> AI-Infra-Guard </a> </td>
        <td> Tencent's Hunyuan Security Team - AI基础设施安全评估工具,旨在发现和检测AI系统中的潜在安全风险.</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="providers">服务提供商</span>

<table>
    <tr>
        <td> <img src="./docs/aimlapi/aimlapi_logo.png"  alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://docs.aimlapi.com/api-references/text-models-llm?utm_source=awesome-deepseek-integrations&utm_medium=github&utm_campaign=integration"> AI/ML API </a> </td>
        <td> AI/ML API 为用户提供200+模式的企业级访问权限 one API。这包括Deepseek R1和V3以及封闭型和开源型。 百分之九十九的休息时间 需要全天候人力支援</td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

###  <span id="others">其他</span>

<table>
    <tr>
        <td> <img src="https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/icon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://mlflow.org/docs/latest/tracing/integrations/deepseek"> MLflow </a></td>
        <td> 开源 MLOPS / LLMOps 平台,用于与 DeepSeek 一起构建,测试,部署,并监控AI应用. </td>
    </tr>
    <tr>
        <td style="font-size: 64px">🤖</td>
        <td> <a href="https://github.com/wangrongding/wechat-bot/blob/main/README.md"> Wechat-Bot </a></td>
        <td> 一个基于WeChaty的wechat机器人与DeepSeek和其他Ai服务结合. </td>
    </tr>
    <tr>
        <td style="font-size: 64px">&#128032;</td>
        <td> <a href="https://github.com/lunary-ai/abso/blob/main/README.md"> Abso </a></td>
        <td> TypeScript SDK 可以使用 OpenAI 格式与任何 LLM 提供者交互. </td>
    </tr>
    <tr>
        <td> <img src="https://i.imgur.com/IsQYInJ.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/djcopley/ShellOracle/"> ShellOracle </a> </td>
        <td> 一个用于智能 shell 命令生成的终端工具. </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/178783630?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/bolna-ai/bolna/"> Bolna </a> </td>
        <td> 使用 DeepSeek 作为对话语音 AI 代理的 LLM</td>
    </tr>
    <tr>
        <td> <img src="https://pics.fatwang2.com/56912e614b35093426c515860f9f2234.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/fatwang2/siri-ultra"> Siri Ultra </a> </td>
        <td> 一个拥有1000颗恒星的GitHub项目,支持互联网连接,多回合对话,以及DeepSeek系列模型 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/deepseek-ai/awesome-deepseek-integration/assets/59196087/c1e47b01-1766-4f7e-bfe6-ab3cb3991c30" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/deepseek-ai/awesome-deepseek-integration/tree/main/docs/siri_deepseek_shortcut"> siri_deepseek_shortcut </a> </td>
        <td> Siri装备了深搜索API </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/n8n-io/n8n/blob/master/assets/n8n-logo.png?raw=true" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/rubickecho/n8n-deepseek"> n8n-nodes-deepseek </a> </td>
        <td> 一个N8N社区节点,支持与DeepSeek API直接融合到工作流程中. </td>
    </tr>
    <tr>
        <td> <img src="https://framerusercontent.com/images/TSKshn2UFdTyvUi85EDMIXrXgs.png?scale-down-to=512" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Portkey-AI/gateway"> Portkey AI </a> </td>
        <td> Portkey 是一个用于与 1600+ 以上的相互作用的统一 API LLM模型,在您的 DeepSeek 应用程序中提供先进的控制工具,能见度和安全性. Python & 节点 SDK 可用 。 </td>
    </tr>
    <tr>
        <td> <img src="https://framerusercontent.com/images/8rF2JOaZ8l9AvM4H6ezliw44aI.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/BerriAI/litellm"> LiteLLM </a> </td>
        <td> Python SDK,代理服务器(LLM Gateway)以OpenAI格式调用100+LLM API. 支持DeepSeek AI同时进行成本跟踪. </td>
    </tr>
    <tr>
        <td> <img src="https://i.postimg.cc/k5Z4YWjt/Screenshot-2025-01-23-at-6-08-01-PM.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/mem0ai/mem0"> Mem0 </a> </td>
        <td> Mem0 用智能记忆层增强AI助手,允许个性化互动,并随时间而不断学习. </td>
    </tr>
    <tr>
        <td> <img src="https://simplismart-public-assets.s3.ap-south-1.amazonaws.com/logos/Logo+Icon+Light.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://simplismart.ai/"> Simplismart AI </a> </td>
        <td> Simplismart使GenAI能够无缝地进行部署,对LLMS、扩散和语音模型的推论最快。 在星云上或者用自己的星云 毫无顾忌地部署深层探测器 </td>
    </tr>
    <tr>
        <td> <img src="https://www.promptfoo.dev/img/logo-panda.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="docs/promptfoo/README.md"> promptfoo </a> </td>
        <td> 测试和评价LLM提示,包括DeepSeek模型. 比较不同的LLM提供者,捕捉回归,并评价响应. </td>
    </tr>
    <tr>
        <td>  </td>
        <td> <a href="https://github.com/AndersonBY/deepseek-tokenizer"> deepseek-tokenizer </a> </td>
        <td> 用于 DeepSeek 模型的高效和轻量级符号化库,仅依靠 `tokenizers` 库中不重的依赖性 `transformers`。 。 。 。 </td>
    </tr>
    <tr>
        <td> <img src="https://langfuse.com/icon.svg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://langfuse.com/docs/integrations/deepseek"> Langfuse </a> </td>
        <td> 开放源代码LLM可观察性平台,帮助团队合作调试,分析,并在其DeepSeek应用上进行脚踏实地. </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/8226202?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/comet-ml/opik"> Opik </a> </td>
        <td> LLM可观察性,评价性的开源平台,以及DeepSeek应用程序的即时优化. </td>
    </tr>
    <tr>
        <td> 捷克 </td>
        <td> <a href="https://github.com/hustcer/deepseek-review"> deepseek-review </a> </td>
        <td> 以Deepseek代码评论来提升你的工作流量。 </td>
    </tr>
    <tr>
        <td> <img src="http://gptlocalhost.com/wp-content/uploads/2025/01/icon_1024.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://youtu.be/T1my2gqi-7Q"> GPTLocalost </a> </td>
        <td> 在 Microsoft Word Locally 中使用 DeepSeek-R1 。 没有推论费用。 </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/suqicloud/wp-ai-chat/raw/main/ic_logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/suqicloud/wp-ai-chat"> WordPress ai助手 </a> </td>
        <td> Docking Deepseek api for WordPress site ai 对话助手,邮件生成,邮件摘要插件. </td>
    </tr>
    <tr>
        <td> <img src="docs/ComfyUI-Copilot/assets/logo 2.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/AIDC-AI/ComfyUI-Copilot"> ComfyUI-Copilot </a> </td>
        <td> 一个智能助手基于Comfy-UI框架,通过自然语言互动来简化和增强AI算法调试和部署过程. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/Optima-CityU/llm4ad/blob/main/assets/figs/logo_short.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Optima-CityU/llm4ad">LLM4AD</a> </td>
        <td> <a href="https://github.com/Optima-CityU/llm4ad">LLM4AD</a> 是一个使用大语言模型(LLM)用于自动算法设计(AD)的统一开源Python平台.</td>
    </tr>
    <tr>
        <td>  </td>
        <td> <a href="https://github.com/JiauZhang/chatchat"> chatchat </a> </td>
        <td> 大型语言模型Python API. </td>
    </tr>
    <tr>
        <td> <img src="https://i.imgur.com/zDgW8wB.png" width="64" alt="Icon" height="auto" /> </td>
        <td> <a href="https://github.com/skypilot-org/skypilot">SkyPilot</a> </td>
        <td> <a href="https://github.com/skypilot-org/skypilot/tree/master/llm/deepseek-r1">Serve DeepSeek models</a> 在任何云基础设施(库伯涅茨、AWS、Azure、GCP或GPU云)中。 自动升级为多区域,多集群,多云.</td>
    </tr>
    <tr>
        <td></td>
        <td> <a href="https://serpapi.com/blog/connect-deepseek-api-with-the-internet-google-search-and-more/#connect-deepseek-with-google-search-result"> SerpApi </a> </td>
        <td> 用谷歌等搜索结果连接DeepSeek API. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/yincongcyincong/telegram-deepseek-bot/blob/main/static/logo.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/yincongcyincong/telegram-deepseek-bot">telegram-deepseek-bot</a> </td>
        <td> <a href="https://github.com/yincongcyincong/telegram-deepseek-bot">telegram-deepseek-bot</a> 是一个与DeepSeek AI能力整合的Telegram机器人. </td>
    </tr>
    <tr>
        <td>  </td>
        <td> <a href="https://github.com/eqld/nlsh">nlsh</a> </td>
        <td> <a href="https://github.com/eqld/nlsh">nlsh</a> 是一个AI驱动的CLI工具,在多后端LLM支持下生成上下文感知 shell命令. 支持 shell 特定语法,只读系统工具,以及自定义推断端点.</td>
    </tr>
    <tr>
        <td> <img src="https://www.godtierprompts.com/logo.jpg" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://www.godtierprompts.com">God Tier Prompts</a> </td>
        <td> <a href="https://www.godtierprompts.com">God Tier Prompts</a> 是一个由社区驱动的领导板 最好的导火索升到顶端</td>
    </tr>
    <tr>
<td> <img src="https://avatars.githubusercontent.com/u/89342560?s=200&v=4" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/Jeff2Ma/AlfredWorkflow-DeepSeek">DeepSeek Alfred WorkFlow</a> </td>
        <td> 德克赛克在阿尔弗雷德的融合. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/user-attachments/assets/cbf6193b-fd66-4b88-bcf7-98699becf046" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/sally-suite/open-office-copilot">Open Office Copilot</a> </td>
        <td> OpenOffice Copilot是支持微软Office和Google工作空间的开源Office Copilot,基于AI-Agent. 它可以帮助您在Word中写入,在PowerPoint中生成幻灯片,在Excel中分析数据,在Outlook中生成电子邮件等等任务. 现已与DeepSeek合并. </td>
    </tr>
    <tr>
        <td> <img src="https://github.com/LSTM-Kirigaya/openmcp-client/raw/main/icons/openmcp.png" alt="Icon" width="64" height="auto" /> </td>
        <td> <a href="https://github.com/LSTM-Kirigaya/openmcp-client"> OpenMCP </a> </td>
        <td> 一个用于MCP服务器开发和调试的全进VS代码/Trae/Cursor插件. 使用DeepSeek作为默认的LLM测试MCP服务器. </td>
    </tr>
    <tr>
<td></td>
        <td> <a href="https://github.com/informatico-madrid/blackwell-linux-infra-optimizer"> Blackwell Linux Infra Optimizer </a> </td>
        <td> NVIDIA Blackwell (SM) 优化的 vLLM 堆栈_120)和Linux Kernel 6.14 (英语). 在DeepSeek-R1-32B上使用本土FlashInfer后端实现59.0 t/s. </td>
    </tr>
</table>

<p style="text-align: right;"><a href="#table-of-contents">^ Back to Contents ^</a></p>

### <span id="star-history">星标历史</span>

[![Star History Chart](https://api.star-history.com/svg?repos=deepseek-ai/awesome-deepseek-integration&type=Date)](https://star-history.com/#deepseek-ai/awesome-deepseek-integration&Date)
