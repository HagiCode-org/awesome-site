# 伟大的基因AI [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> 现代基因人工智能项目和服务目录.

遗传人工 智能(Intelligence)是一种通过使用接受大量数据培训的机器学习算法来创建图像,声音,文本等原始内容的技术. 与其他形式的AI不同,它能够创造出独特的和以前不见的输出,如摄影现实主义的图像,数字艺术,音乐,以及写作. 这些产出往往具有自己独特的风格,甚至可能难以与人类创作的作品区分开来. Generative AI在艺术,娱乐,营销,学术,计算机科学等领域有着广泛的应用.

欢迎对这份名单作出贡献。 在提交建议之前,请审查 [Contribution Guidelines](CONTRIBUTING.md) 以确保您的条目符合标准。 通过添加链接 [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) 或创建 [issue](https://github.com/steven2358/awesome-generative-ai/issues) 开始讨论。 可在 [Discoveries List](DISCOVERIES.md)在那里,我们展示了广泛的 上进和即将出现的Generative AI项目。

## 目录

- [建议阅读](#recommended-reading)
- [文本](#text)
- [编码](#coding)
- [探员](#agents)
- [图像](#image)
- [视频](#video)
- [音频](#audio)
- [其他人员](#other)
- [学习资源](#learning-resources)
- [更多列表](#more-lists)

## 建议阅读

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - 概述GPT-3模式的能力和局限性及其对社会的潜在影响的文章。 由Alex Tamkin和Deep Ganguli著,2021年2月5日.
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - 全面审查基因AI产业,提供历史视角,深入分析产业生态系统. by Sonya Huang, Pat Grady and GPT-3, 2022年9月19日 (英语).
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - 关于基因AI的崛起,特别是稳定扩散图像生成器的成功,以及相关的争议的文章. 纽约时报,2022年10月21日.
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - 文章讲述了不断增长的杂音和对基因AI创业的投资,各行业探索其潜在应用. 有线,2022年10月27日.
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - 由亨利·基辛格(英语:Henry Kissinger),埃里克·施密特(英语:Eric Schmidt)和丹尼尔·胡滕洛彻(英语:Daniel Huttenlocher)主编的专辑. 华尔街日报,2023年2月24日.

### 里程碑

- [OpenAI API](https://openai.com/blog/openai-api/) - 公告OpenAI API基于GBT-3的文本对文本通用AI模型. OpenAI博客,2020年6月11日.
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - 宣布"副驾驶",一个新的AI配对程序员,帮助你写出更好的代码. GitHub博客,2021年6月29日.
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - 宣布发布DALL E 2,这是先进的图像生成系统,具有更好的分辨率,扩展图像生成能力,以及各种安全减缓. OpenAI博客,2022年4月6日.
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - 宣布公开发布《稳定传播》,这是一个基于AI的图像生成模型,在广泛的互联网碎片上接受培训,并获得Creative ML OpenRail-M许可。 稳定传播博客,2022年8月22日.
- [ChatGPT](https://openai.com/blog/chatgpt/) - ChatGPT的宣布,是一个训练有素的对话模式,旨在回答后续问题,承认错误,挑战不正确的前提,并拒绝不适当的请求. OpenAI博客,2022年11月30日.
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - 微软宣布其搜索引擎Bing的新版本,由下一代OpenAI模式提供动力. 微软博客,2023年2月7日.
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM,由Meta公司制作,是一个基础型,65亿参数的大型语言模型. Meta,2023年2月23日 (英语). #开源
- [GPT-4](https://openai.com/research/gpt-4) - 宣布GPT-4,一种大型多式联运模式. OpenAI博客,2023年3月14日.
- [DALL·E 3](https://openai.com/index/dall-e-3/) - 宣布 DALL-E 3 图像生成器。 OpenAI博客,2023年9月20日.
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - 介绍索拉,大型视频生成模型. OpenAI,2024年2月15日 (英语).

## 文本

### 模型

- [OpenAI API](https://openai.com/api/) - OpenAI的API为自然语言,编码,图像生成,音频,代理开发提供了GPT模型的接入.
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - DeepMind的Gopher是一个2800亿参数语言模型.
- [OPT](https://huggingface.co/facebook/opt-350m) - Facebook上的Open Pretrained Transformers(OPT)是一套只有解码器的预训变压器. [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - BLOOM by Hugging Face是一个类似于GPT-3的模型,已经接受了46种不同语言和13种编程语言的培训. #开源
- [Llama](https://www.llama.com/) - Meta的开源大语言模型. #开源
- [Claude](https://claude.ai/) - 和克劳德谈谈 来自Anthropic的AI助手
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - 通过微调LLaMA对从ShareGPT收集的用户共享对话进行开源聊天器培训. #开源
- [Mistral](https://mistral.ai/en/models) - Mistral AI的开放量级LLMs. #开源
- [Grok](https://grok.x.ai/) - XAI 的 LLM 显示 [open source](https://github.com/xai-org/grok-1) 和开放的重量。 #开源
- [Qwen](https://qwenlm.github.io/) - 阿里巴巴云独立开发的系列LLMS. [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - 由DeepSeek AI制作的一系列开源LLMs. [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - 文本、语音、视频和音乐生成的多式联运基础模型
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - 月光AI为代理任务制作的一系列开源MOE语言模型. #开源
- [GLM](https://github.com/zai-org/GLM-5) - Z.ai为代理任务制作的一系列开源的MOE语言模型. #开源

### 聊天机器人

- [ChatGPT](https://chatgpt.com/) - OpenAI的ChatGPT是一个大型语言模型,以对话方式相互作用.
- [Copilot](https://copilot.microsoft.com/) - 微软每天的AI同伴.
- [Gemini](https://gemini.google.com/) - 一个由Google Deepmind开发的多式联运大型语言模型家族.
- [Meta AI](https://www.meta.ai/) - Meta AI助手来完成事务,创建AI生成的图像,获得答案. 建于Llama LLM之上.
- [DeepSeek](https://www.deepseek.com/) - 一个由DeepSeek开源语言模型驱动的聊天机接口. #开源
- [Character.AI](https://character.ai/) - 个性. AI让你创造角色,和他们聊天.
- [Pi](https://pi.ai) - 一个个性化的AI平台,作为数字助理提供.
- [Qwen](https://chat.qwenlm.ai/) - 拥有图像生成,文档处理,网络搜索集成,视频理解等功能的Quen聊天器.
- [Le Chat](https://chat.mistral.ai/) - Mistral AI语言模型的聊天界面.
- [Kimi](https://www.kimi.com/) - 由Moonshot AI担任AI助理,拥有聊天,深度研究,编码,以及多代理能力.
- [Z.ai](https://chat.z.ai/) - Z.ai的AI聊天机和代理平台由GLM模型家族提供动力.

### 自定义接口

- [LibreChat](https://librechat.ai/) - LibreChat是助理AI的自由和开源聊天界面. [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - 一个开源的ChatGPT UI. [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### 搜索引擎

- [Perplexity AI](https://www.perplexity.ai/) - AI为搜索工具提供动力.
- [Exa](https://exa.ai/) - 语言模型动力搜索.
- [Phind](https://phind.com/) - 基于AI的搜索引擎.
- [You.com](https://you.com/) - 一个基于AI的搜索引擎,为用户提供定制的搜索体验,同时将其数据100%保密.
- [Komo](https://komo.ai/) - AI动力搜索引擎.

### 本地搜索引擎

- [privateGPT](https://github.com/zylon-ai/private-gpt) - 使用 LLMs 的电源向您的文档询问问题, 而无需连接 。
- [quivr](https://github.com/QuivrHQ/quivr) - 丢弃您的全部文件, 用您的基因AI第二脑使用 LLMs 和嵌入式进行聊天 。

### 写作助理

- [Jasper](https://www.jasper.ai/) - 以人工智能快速创建内容.
- [Compose AI](https://www.compose.ai/) - 编译AI是一个免费的Chrome扩展,它用AI动力自动补全将您的写作时间缩短了40%.
- [Rytr](https://rytr.me/) - Rytr是一个AI写作助手,帮助你创造高质量的内容.
- [wordtune](https://www.wordtune.com/) - 个人写作助理.
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite 帮助您自信地写作,并更快地完成您从想法到最终草稿的工作.
- [Moonbeam](https://www.gomoonbeam.com/) - 更适合写博客。
- [copy.ai](https://www.copy.ai/) - 与AI一起写更好的营销副本和内容.
- [ChatSonic](https://writesonic.com/chat) - 一个能实现文本和图像创建的AI动力助手.
- [Anyword](https://anyword.com/) - Anyword的AI写作助手为任何人生成有效的副本.
- [Hypotenuse AI](https://www.hypotenuse.ai/) - 将一些关键词变成原创,有见地的文章,产品描述和社交媒体副本.
- [Lavender](https://www.lavender.ai/) - Lavender 电子邮件助手帮助您在更少的时间内获得更多的回复.
- [Lex](https://lex.page/) - 人工智能的文字处理器被烘烤,这样你就可以更快地写作.
- [Jenni](https://jenni.ai/) - Jenni是最终的写作助手,可以节省你几小时的想法和写作时间.
- [QuillBot](https://quillbot.com) - AI-动力拓扑工具.
- [Postwise](https://postwise.ai/) - 撰写推特、发布帖子,
- [Copysmith](https://copysmith.ai/) - AI内容创建解决方案面向企业与电子商务.
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - AI文本人文化器,带有多语言重写管道和一步步的示例. #开源

### ChatGPT 扩展

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - 增强您的 ChatGPT 提示, 并附带来自网络的相关结果 。
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - ChatGPT扩展用于Google Sheets和Google Docs.
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - 使用ChatGPT来总结YouTube视频.
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - 发现、 分享、 导入并使用 ChatGPT 的最佳提示, 在本地保存您的聊天历史 。
- [ShareGPT](https://sharegpt.com/) - 分享您的 ChatGPT 对话并探索其他人共享的对话 。
- [Merlin](https://www.getmerlin.in/) - 聊天游戏 加上所有网站的扩展.
- [Jetwriter](https://jetwriter.ai/) - 用于Chrome,桌面,和移动的AI编写助手.
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - 在Jupyter Notebooks和Jupyter Lab中添加各种帮助器功能,由ChatGPT提供动力.
- [editGPT](https://www.editgpt.app/) - 方便的校对、编辑和跟踪ChockGPT中您内容的更改。
- [Forefront](https://www.forefront.ai/) - 更好的ChatGPT体验.
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - ChatGPT扩展用于Google Sheets,Google Docs,Google幻灯片,Google表格.
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Gmail的AI电子邮件助手.

### 生产力

- [ChatPDF](https://www.chatpdf.com/) - 与任意 PDF 聊天 。
- [Mem](https://mem.ai/) - Mem是世界上第一个对你有个性化的AI动力工作空间. 丰富你的创造力, 自动化的普通, 并自动地保持组织。
- [Taskade](https://www.taskade.com/) - 提纲任务,笔记,生成结构化列表和心智地图与Taskade AI.
- [Notion AI](https://www.notion.so/product/ai) - 写得更好,更有效率的笔记和文档.
- [Nekton AI](https://nekton.ai) - 用人工智能自动操作工作流程 。 用简单的语言逐级描述工作流程。
- [Limitless](https://www.limitless.ai/) - 一个AI内存助手,负责记录谈话和会议,生成摘要,并搜索过去跨应用程序的交互和可选穿戴.
- [NotebookLM](https://notebooklm.google/) - 由Google双子座提供动力,
- [Open Notebook](https://www.open-notebook.ai) - NotebookLM的开源执行具有更大的灵活性和特性. [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - 一个用AI动力搜索,自动化,支持本地LLMs来记录屏幕和音频活动的开源工具. #开源

### 会议助理

- [Otter.ai](https://otter.ai/) - 一个记录音频,写笔记,自动抓取幻灯片,生成摘要的会议助理.
- [Cogram](https://www.cogram.com/) - Cogram在虚拟会议中自动记录并识别动作项目.
- [Sybill](https://www.sybill.ai/) - Sybill通过将笔录和基于情感的洞察力相结合,生成销售呼吁摘要,包括下一步,疼痛点和感兴趣的领域.
- [Loopin AI](https://www.loopinhq.com/) - Loopin是一个协作会议工作区,不仅可以使用AI记录,转录和总结会议,还可以在日历上自动组织会议笔记.
- [Read AI](https://www.read.ai/) - 一个AI的副驾驶,你在哪里工作, 使你的会议,电子邮件,和信息 更有成果与摘要,内容发现和建议。
- [Fireflies.ai](https://fireflies.ai) - 翻译、总结、搜索和分析你们团队的谈话

### 学术界

- [Elicit](https://elicit.org/) - Elict使用语言模型来帮助您实现研究工作流程的自动化,比如文学评论的部分内容.
- [genei](https://www.genei.io/) - 以秒计总结学术文章,节省研究时间的80%.
- [Explainpaper](https://www.explainpaper.com/) - 一个更好的阅读学术论文的方法. 上传一纸,突出混淆文字,得到解释.
- [Consensus](https://consensus.app/search/) - 共识是使用AI在科学研究中寻找答案的搜索引擎.
- [scite](https://scite.ai/) - 一个发现和评价科学文章的平台。
- [SciSpace](https://scispace.com/) - AI研究助理,负责理解科学文献.
- [STORM](https://storm.genie.stanford.edu/) - 由LLM驱动的知识研究系统,该系统研究一个专题并产生附有引文的完整报告。 [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - 讨论、发现和阅读ArXiv文件。
- [ASReview](https://asreview.nl/) - 系统审查的开源AI动力工具,帮助研究人员高效地筛选大量学术文献. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - 用于搜索学术来源,网络,以及带有本地或云端LLMs的私人文件的深入研究工具. [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - 利用协作筛选和数据管理工具管理系统文献审查的AI动力平台。
- [Paper2Agent](https://paper2agent.ai/) - 将研究论文和相关代码库转换为经过测试的MCP服务器和交互式AI代理. [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - 一名学术研究助理,负责查找论文、编写文献报告和分析研究数据。

### 领导板

- [Arena](https://arena.ai/) - 由UC Berkeley SkyLab的研究人员主持,为众包化AI基准的开放平台.
- [Artificial Analysis](https://artificialanalysis.ai/) - 人工分析提供客观的基准和信息,帮助选择AI模型和托管提供者.
- [imgsys](https://imgsys.org/rankings) - 由Fal.ai制作的基因影像模型竞技场.
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - 语言模型按照应用软件的使用情况进行排名和分析。
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - 由专家驱动的LLM基准和更新的AI模型领导板.
- [LLM Stats](https://llm-stats.com/) - 比较跨基准、定价、速度和上下文窗口的AI模型。

### 其他文本生成器

- [EmailTriager](https://www.emailtriager.com/) - 使用 AI 在背景中自动起草电子邮件回复 。
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poem Generator在任何题材上为你写了一首优美的韵律诗,给一个文字提示.

## 编码

### 编码助理

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilot使用OpenAI Codex实时建议代码和全部功能,直接来自您的编辑器.
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - OpenAI的AI系统将自然语言翻译为代码.
- [Ghostwriter](https://blog.replit.com/ai) - 由AI驱动的配对程序员通过重写.
- [Amazon Q](https://aws.amazon.com/q/) - AWS 基因化 AI - 动力助手, 帮助回答问题, 写代码, 并自动任务 。
- [tabnine](https://www.tabnine.com/) - 全线全功能代码完成后代码更快.
- [Stenography](https://stenography.dev/) - 自动代码文档.
- [Mintlify](https://mintlify.com/) - AI为文档作者提供动力.
- [AI2sql](https://www.ai2sql.io/) - 有了AI2sql,工程师和非工程师可以轻松地写出高效,无错误的SQL查询,而不知道SQL.
- [Qodo](https://www.qodo.ai/) - AI代码审查工具,包含IDE的代理工作流程,牵引请求,以及安全性.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - AI驱动的工具用于自动化的PR分析,反馈,建议等等.
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - 一个自控的副驾驶克隆,它利用Lama.cpp后面的库来运行RAM的4GB中的60亿参数 Salesforce Codegen模型.
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - OpenAI的ChatGPT代码解释器的开源执行. #开源
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - OpenAI的代码解释器在您的终端, 本地运行。
- [Continue](https://www.continue.dev/) - 开源AI代码助手. 连接任何模式和任何上下文,以创建自定义自动完成和IDE内部的聊天体验. [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - 一个AI驱动的自主编码代理直接融入VS代码. [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - 将代码编辑与整个开发过程中高级AI援助相结合的AI-native IDE.
- [Plandex](https://github.com/plandex-ai/plandex) - 开源,基于终端的AI编程引擎,用于复杂的任务. [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - 在Jupyter Notebook和JupyterLab中是一个开源,可配置的AI助手,支持100+LLM,包括来自Ollama和GPT4All的本地托管模型. #开源
- [DataLine](https://dataline.app) - AI驱动的数据分析和可视化工具. [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - React and Next.js的快速驱动UI生成,创建生产准备组件.
- [Lovable](https://lovable.dev) - 对话式全装应用程序生成,将想法转化为可部署代码.
- [aider](https://aider.chat/) - AI配对程序在您的终端中,支持多个LLM提供者. [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - VS代码,JetBrains,以及CLI的开源AI编码助手. [#opensource](https://github.com/Kilo-Org/kilocode)

### 开发工具

- [Cohere](https://cohere.com/) - CoHere提供高级大语言模型和NLP工具的接入.
- [Haystack](https://haystack.deepset.ai/) - 用语言模型构建NLP应用程序的框架(如代理,语义搜索,问答).
- [LangChain](https://langchain.com/) - 语言模型驱动的应用程序开发框架.
- [gpt4all](https://github.com/nomic-ai/gpt4all) - 一个聊天员接受了包括代码、故事和对话在内的大量清洁助理数据的收集培训。
- [LLM App](https://github.com/pathwaycom/llm-app) - 开源Python库建设实时LLM辅助数据管道.
- [LMQL](https://lmql.ai/) - LMQL是大型语言模型的查询语言.
- [LlamaIndex](https://www.llamaindex.ai/) - 一个在外部数据之上构建LLM应用的数据框架.
- [Phoenix](https://phoenix.arize.com/) - 在笔记本环境中运行的ML可观察性开源工具, 作者 Arize. 监控和微调LLM,CV和表型.
- [Cursor](https://cursor.com/) - Cursor是未来的IDE,为与Powerful AI对齐编程而建造.
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - 用于构建以LLMs为核心的应用的神经协同框架.
- [Vanna.ai](https://vanna.ai/) - 一个用于SQL生成和相关功能的开源Python RAG框架. [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - 用于LLM监测、缓存和管理的全层LLMOps平台。
- [agenta](https://github.com/agenta-ai/agenta) - 一个开源端对端LLMOps平台,用于即时工程,评价和部署. #开源
- [Together AI](https://www.together.ai/) - 列车,微调和运行推论AI型号快速闪烁,成本低廉,生产规模大.
- [Gitingest](https://gitingest.com/) - 将任意的Git寄存器转换成其代码库的简单文本摘要,以便输入任何LLM. [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - 把你的代码库装入易懂的AI格式. [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - 在纯C/C++中推断Meta的LLaMA模型(及其他). #开源
- [bitnet.cpp](https://github.com/microsoft/BitNet) - 1位 LLMs 的官方推论框架, 由 Microsoft 编写. [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - LLMs 的统一接口. [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - 用于构建LLMs等自定义AI模型和其他深层神经网络的低码框架. [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - 微调 LLMS 的 Python 库 [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - 开源GenAI和LLM可观察性平台原生于OpenTeleometry,带有痕迹和度量衡. #开源
- [Helicone AI](https://helicone.ai/) - 用于日志,监控,以及调试AI应用的开源LLM可观察性平台. [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - 开源文本对SQL和基因BI剂,带有语义层. [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - 在LLM输出中检测和评分幻觉的API.
- [Opik](https://github.com/comet-ml/opik) - 一个用于追踪、评价和监测LLM应用程序的开源平台。 [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - 一个开源LLM工程平台,用于追踪,评价,即时管理和度量衡. [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - 一个开源平台,用于跟踪ML实验,评价模型和提示,部署模型,并添加LLM可观察性. [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - 一个零信任的SDK,用于本地匿名PII,然后向LLMs发送提示并无缝补水反应.
- [Agentset](https://agentset.ai/) - 一个用于建设和评价RAG和代理应用的开源平台. [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - 一个开源LLM路由器,使代理商请求到最符合成本效益的模型,并有使用限制和模型基准. [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - 一个使用LLMs(Claude,GPT,Ollama)自动翻译i18n本地化文件的GitHub Action. #开源
- [Groq](https://groq.com/) - 一个用于运行开源LLM的云推断API,由自定义的LPU硬件提供动力.
- [Model Context Protocol](https://modelcontextprotocol.io/) - 一个将AI模型连接到外部工具和数据源的开放标准. [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - 一个用于AI代理的开源浏览器沙盒和自动化基础设施,有会话管理,截图,PDF,代理,以及反机器人工具. #开源
- [Bifrost](https://github.com/maximhq/bifrost) - 一个开源LLM网关,具有1000+型号的路由,负载平衡,护栏,可观察性. #开源
- [fal](https://fal.ai/) - 一个用于访问和部署图像,视频,音频,和3D生成模型的开发者平台.

### 游戏场

- [OpenAI Playground](https://platform.openai.com/playground) - 探索资源,教程,API docs,以及动态实例.
- [Google AI Studio](https://aistudio.google.com/) - 用双子座模型和实验模型进行原型的网络工具.
- [GitHub Models](https://github.com/marketplace/models) - 寻找并实验AI模型以开发基因AI应用.

### 当地 LLM 部署

- [Ollama](https://github.com/ollama/ollama) - 在当地与大型语言模型一起起来运行.
- [Open WebUI](https://github.com/open-webui/open-webui) - 一个可扩展,功能丰富,用户友好的自主托管AI平台,旨在完全离线运行. #开源
- [Jan](https://jan.ai/) - 在您的计算机上运行像Mistral或Llama2这样的LLMs本地和离线,或者连接到远程AI API. [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - 本地和在线AI模型的直截了当和强大的界面.
- [PyGPT](https://pygpt.net/) - 个人桌面AI助手拥有聊天,视觉,代理,图像生成,工具和命令,语音控制等功能. #开源
- [LLM](https://llm.datasette.io/) - 一个CLI工具库和Python库,用于与远程和本地的大语言模型交互. [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - 在您的计算机上下载和运行本地 LLMS 。
- [RunThisLLM](https://runthisllm.com) - 看看你的硬件能运行哪些LLMs.
- [Harbor](https://github.com/av/harbor) - 一个用于运行本地LLM后端,UI的集装箱化工具包,以及一个指令的辅助服务. #开源
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - 对运行LLMs的原生应用程序、视觉模型以及iOS和Android上无互联网功能的稳定传播。 #开源
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - OpenAI-兼容本地LLM推论服务器为Apple Silicon优化,有工具调用,推理,视觉,以及结构化输出支持. #开源

## 探员

### 自主代理人

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - 实验性开源尝试使GPT-4完全自主.
- [babyagi](https://github.com/yoheinakajima/babyagi) - 人工智能任务管理系统。
- [AgentGPT](https://github.com/reworkd/AgentGPT) - 集成、配置和在您的浏览器中部署自动 AI 代理 。
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - 指定要它构建什么,AI要求澄清,然后构建它.
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - 自动即时工程. 它产生,测试,并排位 激励寻找最好的。
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - 多代理框架:考虑到一行要求,返回PRD,设计,任务,重播.
- [AutoGen](https://github.com/microsoft/autogen) - AutoGen是一个框架,它能够使用多种代理来开发LLM应用程序,这些代理可以相互交汇来解决任务.
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - 在开发者监督执行时从头写出可缩放应用程序的Dev工具.
- [Devin](https://devin.ai/) - Cognition Labs的自主AI软件工程师.
- [OpenHands](https://github.com/OpenHands/OpenHands) - 一个自主的代理,旨在导航软件工程的复杂性. #开源
- [Davika](https://github.com/stitionai/devika) - 代理AI软件工程师. #开源
- [n8n](https://n8n.io/) - 一个将AI能力与业务流程自动化相结合的工作流程自动化平台.
- [Sauna](https://www.sauna.ai) - 为复合环境而建的AI助手. 它学习你的品味,检测隐藏的规律,增强你的大脑环境,并主动工作.
- [Claude Code](https://code.claude.com) - Anthropic的代理编码工具,它生活在你的终端,帮助你将想法变成代码.
- [Gemini CLI](https://geminicli.com) - 一个开源AI代理 直接将双子座的力量带入您的终端. [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - 开源AI编码代理. [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - 一个用于构建AI代理,工作流程,以及应用程序的TypeScript框架. [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - 一个个人AI助手 你运行在自己的设备。 [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - AI代理的社交网络.
- [AgentMail](https://www.agentmail.to) - AI代理的电子邮件信箱.
- [Openwork](https://openwork.bot) - AI代理互相雇佣,完成工作,核实结果,并赚取代币.
- [Agent Skills](https://agentskills.io) - 用于AI剂的包装可重复使用的能力和专门知识的开放格式和参考SDK. [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - 构建具有工作流程,工具集成,内存的多代理AI系统的框架. #开源
- [Hermes Agent](https://hermes-agent.nousresearch.com) - 一个自我改进的个人代理 内存,消息集成, 和沙盒工具执行。 [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - 用于构建AI代理网络的开源平台,多protocol支持(WebSocket,gRPC,HTTP,MCP,A2A). #开源
- [Dorothy](https://github.com/Charlie85270/Dorothy) - 一个开源桌面应用程序,用于同时协调多个AI CLI代理与自动化和Kanban管理. #开源
- [Hive](https://github.com/aden-hive/hive) - 一个开源多代理框架,具有自动生成的图表,演化循环,以及MCP集成. #开源

### 自定义助手

- [Poe](https://poe.com/) - Poe提供各种bot的准入.
- [GPT Builder](https://chatgpt.com/gpts/editor) - 助理创建基于GPT的助理.

## 图像

### 模型

- [DALL·E 2](https://openai.com/dall-e-2/) - OpenAI的DALL-E 2是一个新的AI系统,能够从自然语言的描述中产生现实的图像和艺术.
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Stable Difusion by Stable AI 是从文本中生成图像的艺术文本对图像模型的一种状态. #开源
- [Midjourney](https://www.midjourney.com/) - Midjourney是一个独立的研究实验室,探索新的思维媒介,拓展人类的想象力.
- [Imagen](https://imagen.research.google/) - 由Google制作的图像是一个文本到图像的传播模型,具有前所未有的光现实主义程度和深层次的语言理解.
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - Make-A-Scene by Meta是一种多模式的基因AI方法,通过允许使用它的人通过文本描述和自由形式草图来描述和说明他们的视觉,将创造性控制置于使用它的人手中.
- [DragGAN](https://github.com/XingangPan/DragGAN) - 拖曳你的GAN:基于Generative Image Manifold上的互动点操纵.
- [Flux](https://github.com/black-forest-labs/flux) - 黑森林实验室的文字对图像模型,具有高质量的光现实主义输出. #开源

### 服务

- [Craiyon](https://www.craiyon.com/) - Craiyon,原为DALL-E迷你,是一种AI模型,可以从任意文本提示中绘制图像.
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudio是使用稳定扩散图像生成模型创建图像的易用界面.
- [Artbreeder](https://www.artbreeder.com/) - Artbreeder是新型的创造性工具,通过方便合作和探索来增强用户的创造力.
- [Magic Eraser](https://magicstudio.com/magiceraser/) - 以秒计从图像中删除不想要的东西 。
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - 一个魔法工作室的工具,让我们来表达自己 通过描述你在想什么。
- [Alpaca](https://www.getalpaca.io/) - 稳定扩散相机插件 。
- [Patience.ai](https://www.patience.ai/) - Patient.ai是用稳定扩散(Stable Difusion)制作图像的应用程序,由稳定开发的尖端AI. 大赦国际。
- [GenShare](https://www.genshare.io/) - 以秒为单位免费生成艺术. 拥有和分享你创造的东西。 一个多媒体基因工作室,实现设计和创造力的民主化.
- [Playground](https://playground.com/) - Playground是一个免费使用在线AI图像创建者. 利用它来创建艺术,社交媒体帖子,演示,海报,视频,标志等等.
- [modyfi](https://www.modyfi.com/) - 一个基于浏览器的设计平台,拥有AI驱动的图像生成,动画,以及实时协作.
- [PhotoRoom](https://www.photoroom.com/) - 仅使用您的手机创建产品和肖像图片 。 删除背景, 更改背景和显示产品 。
- [Photo AI](https://photoai.com/ai-avatars) - 创建你自己的 AI 生成的化身 。
- [ClipDrop](https://clipdrop.co/) - 创建没有照片工作室的专业视觉,由 [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - 一个全能的图像编辑应用,包括使用Stable Difusion生成个性化的造型.
- [RunDiffusion](https://rundiffusion.com/) - 基于云的工作空间用于创建AI生成的艺术.
- [Ideogram](https://ideogram.ai/) - 一个文本到图像的平台,使创意表达更加无障碍.
- [Bing Image Creator](https://www.bing.com/images/create) - DALLE 3 基于带有安全特性的文本对图像生成器 。
- [KREA](https://www.krea.ai/) - 用一个了解你风格,概念或产品的AI来生成高质量的视觉.
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creator是AI艺术生成的应用程序,具有AI艺术生成的多种方法.
- [Leonardo AI](https://leonardo.ai/) - 以前所未有的质量、速度和风格为您的项目创建生产质量的视觉资产。
- [Recraft](https://www.recraft.ai/) - 一个AI工具,可以让创建者轻松生成并去除原始图像,矢量艺术,插图,图标,以及3D图形.
- [Reve Image](https://reve.com/) - 一个从地面训练出来的模特儿 擅长迅速的坚持、美学和打字
- [Magnific](https://www.magnific.com/) - AI动力设计工具包括图像生成,背景清除,以及创意模板.
- [FigureLabs](https://www.figurelabs.ai/) - 一个AI工具,用来从文本描述或草图中以矢量格式生成可供出版的科学数字.

### 图形设计

- [Brandmark](https://brandmark.io/) - 基于AI的标志设计工具.
- [Gamma](https://gamma.app/) - 创建美丽的演示文稿和网页,没有格式化和设计工作.
- [Microsoft Designer](https://designer.microsoft.com/) - 闪闪发亮的设计。
- [Napkin](https://www.napkin.ai/) - 用于从文本生成图表、图表和图形的AI工具。

### 图像库

- [Lexica](https://lexica.art/) - 稳定扩散搜索引擎.
- [OpenArt](https://openart.ai/) - 搜索 10M+ 的提示,并通过 Stable Difusion, DALL E 2. 生成AI艺术.
- [PromptHero](https://prompthero.com/) - 对稳定扩散,ChatGPT,Midjourney等模型的搜索提示.
- [PromptBase](https://promptbase.com/) - 搜索来自顶级快速工程师的提示 。 卖你自己的提示。

### 示范图书馆

- [Civitai](https://civitai.com/) - 社区驱动AI模式共享工具.
- [Stable Diffusion Models](https://rentry.org/sdmodels) - 互联网档案馆的存檔,存档日期2013-03-02. 互联网档案馆的存檔,存档日期2013-07-02. 互联网档案馆的存檔,存档日期2014-09-02. 互联网档案馆的存檔,存档日期2014-09-02. 互联网档案馆的存檔,存档日期2014-12-27. 互联网档案馆的存檔,存档日期2014-07-22. .

### 稳定的传播资源

- [Stable Horde](https://stablehorde.net/) - 一个众源分布的分布式组群 稳定扩散工人。
- [DiffusionDB](https://diffusiondb.com/) - 稳定扩散的所有公共应用程序,开发工具,指南和插件的列表. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - 稳定扩散免费提示集.
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - 用于在线传播模型课程的Python材料 [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - 用于构建和运行稳定扩散工作流程的节点界面. [#opensource](https://github.com/comfyanonymous/ComfyUI)

## 视频

- [Runway](https://runwayml.com/) - 魔法AI工具,实时协作,精密编辑,等等. 你的下一代内容创建套房。
- [Synthesia](https://www.synthesia.io/) - 分钟内从纯文本创建视频 。
- [Colossyan](https://www.colossyan.com/) - 学习与发展焦点视频创建者. 使用AI阿凡达语制作多种语言的教育视频.
- [Fliki](https://fliki.ai/) - 创建视频的文本和语音内容的文本,并在几分钟内使用 AI 给声音提供动力。
- [Pictory](https://pictory.ai/) - Pictory强大的AI使您能够使用文本创建和编辑专业质量的视频.
- [Pika](https://pika.art/) - 一个从想法到视频的平台 让你的创造力开始运动
- [HeyGen](https://app.heygen.com/) - 在几分钟内将剧本转换成与自定义的AI阿凡达对话的视频.
- [Luma Dream Machine](https://lumalabs.ai/app) - 一个AI模型,从文本和图像中使高质量,现实的视频快速化.
- [KLING AI](https://kling.ai/) - 创建富有想象力的图像和视频的工具.
- [Hailuo AI](https://hailuoai.video/) - AI动力文本到视频生成器.
- [Google Flow](https://labs.google/fx/tools/flow) - 一个来自Google的AI电影制作工具,由Veo提供动力.
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - 一个由Niobotics ByteDance开发的图像到视频和文本到视频模型.
- [MaxVideoAI](https://maxvideoai.com/examples) - 一个在多个AI视频模型中生成和比较视频的工作空间.
- [HyperFrames](https://hyperframes.heygen.com/) - 一个用于AI代理通过写入HTML,CSS,和JavaScript来制作视频的框架. [#opensource](https://github.com/heygen-com/hyperframes)

### 阿凡达人

- [D-ID](https://www.d-id.com/) - 在按钮触碰时创建并和说话的阿凡达人互动.
- [HeyGen](https://app.heygen.com/) - 在几分钟内将剧本转换成与自定义的AI阿凡达对话的视频.
- [Affogato](https://affogato.ai/) - 为TikTok,Reels和Shorts创建AI生成的产品视频广告.

### 动画

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - AI动力工具,用于动画和将CG字符编成现场动作镜头.

## 音频

### 文字对语音

- [Eleven Labs](https://elevenlabs.io/) - AI语音生成器.
- [Resemble AI](https://www.resemble.ai/) - AI语音生成器和语音克隆用于文本到语音.
- [WellSaid](https://www.wellsaid.io/) - 将文本实时转换为语音 。
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - 多语音文本对语音系统的培训重点是质量。 #开源
- [Bark](https://github.com/suno-ai/bark) - 基于变压器的文字对音模型. #开源
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - Web UI用于运行多个文本对语音,音乐生成,以及音频工具. #开源

### 语音对文本

- [Whisper](https://openai.com/index/whisper/) - 通过大规模薄弱监管,有力语音识别. [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flow 使您的计算机上的任何应用程序都能够用无缝语音拼写快速写入.
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - 无劳录音录像抄录全方位解决方案. [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - C/C++中的OpenAI的Whiper模式. #开源
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - 一个Whisper CLI客户端与原OpenAI客户端兼容,使用CTranslate2进行更快的推论. [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - NVIDIA用于构建语音AI系统的开源框架,包括自动语音识别和文本对语音. #开源
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - NVIDIA的开放语音识别模型家族,包括流派和多语言变体. #开源

### 音乐

- [Harmonai](https://www.harmonai.org/) - 我们是一个由社区推动的组织,它释放了开放源码的音频工具,使音乐制作更容易为所有人所利用和乐趣。
- [Mubert](https://mubert.com/) - 面向内容创建者,品牌和开发者的免使用费音乐生态系统.
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - 由Google Research制作的从文本描述中生成高真实性音乐的模型.
- [AudioCraft](https://audiocraft.metademolab.com/) - 基因音频需求的单站代码基础,由Meta编写. 包括用于音乐的MusicGen和用于声音的AudioGen. #开源
- [Stable Audio](https://stability.ai/stable-audio) - 稳定音频是稳定 AI为音乐和音效生成的首款产品.
- [AIVA](https://www.aiva.ai/) - 基于AI的音乐生成助手. 从250+样式中选择 。
- [Suno AI](https://suno.com/) - 任何人都能做伟大的音乐。 不需要乐器,只是想象 从心至乐.
- [Udio](https://www.udio.com/) - 发现,创造,并与世界分享音乐.

## 其他人员

- [PromptBase](https://promptbase.com/) - DALL-E、GPT-3、Midjourney、Stable Difusion的买卖质量提示市场。
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - 测试您判断图像是人类还是计算机生成的能力.
- [Have I Been Trained?](https://haveibeentrained.com/) - 请检查access-date=中的日期值 (帮助) 您的图像是否被用于训练流行的AI艺术模型.
- [AI Dungeon](https://aidungeon.io/) - 一个基于文字的冒险故事游戏,你执导(并主演),而AI则让它复活.
- [Clickable](https://www.clickable.so/) - 与AI在几秒钟内生成广告. 美丽,品牌一致,并高度转换的广告面向所有营销渠道.
- [Scale Spellbook](https://scale.com/genai-platform) - 与Scale Spellbook构建,比较,并部署大型语言模型应用.
- [Scenario](https://www.scenario.com/) - AI生成的游戏资产.
- [Teleprompter](https://github.com/danielgross/teleprompter) - 一个专为你们开会的专栏AI,它倾听你们的声音,并给出有魅力的引用建议.
- [FinChat](https://finchat.io/) - FinChat使用AI生成关于公共公司和投资者问题的答案.
- [Morpher AI](https://morpher.com/ai) - Morpher AI为任何市场提供实时的见解和分析.
- [Whimsical AI](https://whimsical.com/ai) - GPT驱动的心灵映射,流程图,以及用于快速思想发展和过程组织的视觉工具.
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - 与现实生活中的亿万富翁合影!

## 学习资源

- [Learn Prompting](https://learnprompting.org/) - 自由开放源代码与人工智能交流课程.
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - 快速工程的指南和资源.
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - 伊莎·富尔福德(OpenAI)和安德鲁·恩格(DeepLearning.AI)的短训班.
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - 使用OpenAI API的例子和指南.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - 从大型语言模型中获得更好成果的战略和策略.
- [PromptPerfect](https://promptperfect.jina.ai/) - 即时工程工具.
- [Anthropic courses](https://github.com/anthropics/courses) - Anthropic的教育课程.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - 由塞巴斯蒂安·拉斯奇卡(英语:Sebastian Raschka)执导的建立你自己工作LLM的指南.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - 免费深渊学习. AI关于如何用自然语言,边框,分块口罩,坐标点等图像来推动计算机视觉模型的短训.
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - 由塞巴斯蒂安·拉斯奇卡(英语:Sebastian Raschka)主演,从头开始构建工作推理模型的指南.
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - 一本关于用工具,内存,规划,和多代理系统来构建AI代理的书.
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - 一本关于实施DeepSeek风格LLM架构,培训和蒸馏方法的书.
- [AI Governance](https://www.manning.com/books/ai-governance) - 一本关于治理,风险,合规,安全,隐私,以及基因AI系统的监督的书.
- [AnimatedLLM](https://animatedllm.github.io/) - 互动可视化解释大语言模型如何工作. [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - 互动可视化变压器基于LLM如何工作,在浏览器中运行一个活的GPT-2模型. [#opensource](https://github.com/poloclub/transformer-explainer)

## 更多列表

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - Google Colab 用于基因AI的大量笔记本, [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - 一张图画了基因的人工智能生态系统, [Sonya Huang](https://twitter.com/sonyatweetybird) 塞夸亚首都
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - 表格列表 [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - 表格列表 [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - 游戏Generative AI公司市场图,作者: [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - 用于艺术用途的遗传性深层学习工具、作品、模型等目录 [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - 以 GPT-3 实例、 演示、 应用、 展示和 NLP 使用大小写显示 。
- [GPT-4 Demo](https://gpt4demo.com/) - GPT-4 应用与用例.
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - A College of Super Generative AI applications. (原始内容存档于2018-09-09). 星洲网.
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - 使用Generative AI和Deep Learning的分子设计列表.
- [Open LLMs](https://github.com/eugeneyan/open-llms) - 供商业用途的开放式有限责任公司清单。
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - 音乐组成,生成,分析的AI工具目录.
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - 2026年、2025年和2024年AI市场地图的目录 [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - 建设生产RAG系统的工具和资源目录.

### ChatGPT 上的列表

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - ChatGPT 和 GPT-3 的优秀工具、演示、文件目录 [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - 一组快速实例,与ChatGPT模型一起使用.
- [FlowGPT](https://flowgpt.com/) - 用最好的提示来扩展工作流程 。
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - ChatGPT的有用数据科学提示库.
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - 查特GPT的另一张很棒的名单
