<h2 align="center">很棒的快速工程 \ \ \ \</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  " 快速工程和背景工程 " 的手工资源库,包括论文、工具、模型、API、基准、课程和与大语言模型合作的社区。
</p>

<p align="center">
https://promptslab.github.io
  </p>
 <h4 align="center">
  
  ```
     Master Prompt Engineering. Join the Course at https://promptslab.github.io
  ```
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://github.com/promptslab/Awesome-Prompt-Engineering/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License" /></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://discord.gg/m88xfYMbK6"><img src="https://img.shields.io/badge/Discord-Community-orange" alt="Community" /></a>
  <img src="https://img.shields.io/badge/Last%20Updated-February%202026-brightgreen" alt="Last Updated" />
</p>

---

## 开始于这里

新到启动工程? 沿着这条路径 :

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **学习基础** → [ChatGPT 开发者的快速工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (免费,~90分钟)
2. **阅读指南** → [(原始内容存档于2018-03-21). Fournal Engineering Guide by DAIR. 大赦国际](https://www.promptingguide.ai/) (公开来源,综合)
3. **研究提供者文件** → [OpenAI 即时工程指南](https://platform.openai.com/docs/guides/prompt-engineering) · [Anthropic 快速工程指南](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **了解球场的方向** → [Anthropic:AI代理的有效背景工程](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **阅读研究** → [即时报告](https://arxiv.org/abs/2406.06608) ——58+分类法,1500+论文的激发技术.

---

## 目录

- [论文](#papers)
  - [主要调查](#major-surveys)
  - [快速优化和自动提示](#prompt-optimization-and-automatic-prompting)
  - [快速压缩](#prompt-compression)
  - [预付款](#reasoning-advances)
  - [内容内学习](#in-context-learning)
  - [代理提示和多代理系统](#agentic-prompting-and-multi-agent-systems)
  - [多式联运促进](#multimodal-prompting)
  - [结构化输出和格式控制](#structured-output-and-format-control)
  - [快速注射和安全](#prompt-injection-and-security)
  - [即时工程的应用](#applications-of-prompt-engineering)
  - [文本到图像生成](#text-to-image-generation)
  - [文字对音乐/音频生成](#text-to-musicaudio-generation)
  - [基础文件(2024年前)](#foundational-papers-pre-2024)
- [工具和代码](#tools-and-code)
  - [快速管理和测试](#prompt-management-and-testing)
  - [LLM 评价工具](#llm-evaluation-tools)
  - [代理框架](#agent-frameworks)
  - [快速优化工具](#prompt-optimization-tools)
  - [红队和快速安保](#red-teaming-and-prompt-security)
  - [MCP(示范背景议定书)](#mcp-model-context-protocol)
  - [Vibe 编码和AI 编码助理](#vibe-coding-and-ai-coding-assistants)
    - [基于CLI的编码代理商](#cli-based-coding-agents)
    - [AI 代码编辑器/IDEs](#ai-code-editors--ides)
    - [IDE 扩展/ 插件](#ide-extensions--plugins)
    - [AI 编码平台/ 云代理](#ai-coding-platforms--cloud-agents)
    - [开源编码代理框架](#open-source-coding-agent-frameworks)
  - [其他重要仓库](#other-notable-repositories)
- [APIs 图像](#apis)
- [数据集和基准](#datasets-and-benchmarks)
- [模型](#models)
- [AI 内容检测器](#ai-content-detectors)
- [书籍](#books)
- [课程](#courses)
- [教学和指南](#tutorials-and-guides)
- [视频](#videos)
- [社区](#communities)
- [自主研究和自我改进代理人](#autonomous-research--self-improving-agents)
- [如何贡献](#how-to-contribute)

---

## 论文
📄

### 主要调查

- [即时报告:对即时技术的系统调查](https://arxiv.org/abs/2406.06608) [2024] ——最全面的调查:从1500+论文中推导出58个文本和40个多式联运技术的分类. 与OpenAI,微软,谷歌,斯坦福共同创作.
- [大语文模型的即时工程系统调查:技术和应用](https://arxiv.org/abs/2402.07927) [2024] (中文(简体) ). ). . . . . .
- [用于不同NLP任务的LLMs快速工程方法调查](https://arxiv.org/abs/2407.12994) [2024] (中文(中国大陆) ). ). 39 激励方法贯穿29个NLP任务.
- [自动快速工程调查:优化视角](https://arxiv.org/abs/2502.11560) [2025] ——将自动PE方法正规化为离散/连续/hybrid优化问题.
- [大语文模型的有效快速方法:调查](https://arxiv.org/abs/2404.01077) [2024] ——调查以效率为导向的催化(压缩,优化,APE)以减少计算和延迟.
- [通过谜幻迷宫进行导航:思想理性链调查](https://arxiv.org/abs/2309.15402) [2023, ACL 2024]——系统化CoT调查.
- [解密链条、树条和思维图](https://arxiv.org/abs/2401.14295) [2024] ——多时推理地形统一框架.
- [面向目标的大语文模式快速工程:调查](https://arxiv.org/abs/2401.14043) [2024] ——注重围绕明确任务目标设计的提示.
- [走向理性时代:关于理性法学硕士长期思考链的调查](https://arxiv.org/abs/2503.09567) [2025] ——在o1/R1时代的模型中区分长CoT与短CoT.

### 快速优化和自动提示

- [OPRO: 大语言模型作为优化器](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] ——通过元时速将LLMs用作优化器;优化的提示在BBH上以高达50%的优于人类设计.
- [DSPy: 编译宣言语言模型调用自改进管道](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — 编程框架(不提示) LLMs 自动快速优化.
- [MIPRO:优化多层次语言模式方案的说明和示范](https://arxiv.org/abs/2406.11695) [2024,EMNLP 2024]——贝叶斯优化多阶段LM程序;最高精度增益13%.
- [文本宽度: 通过文本自动“ 差异”](https://arxiv.org/abs/2406.07496) [2024] ——将复合AI系统作为计算图,以文字反馈作为梯度. 发表于"自然".
- [启动](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] — 自动优化离散提示的演化算法方法.
- [AI 系统的元提示](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 Working]——实例-不可知结构模板使用类理论正式化.
- [即时工程(PE2)](https://arxiv.org/abs/2311.05661) [2024,ACL Resign] — 使用LLMs进行元时速自身,用分步模板精炼提示,以显著改进推理.
- [大型语言模型是人级快速工程师](https://arxiv.org/abs/2211.01910) [2022] – 通过APE自动迅速生成.
- [硬提示易制:基于渐变的优化以快速调试](https://arxiv.org/abs/2302.03668) [2023]
- [SPO:自我监督的快速优化](https://arxiv.org/abs/2502.06855) [2025] ——以先前方法成本的1-6%进行竞争业绩.

### 快速压缩

- [LLMLingua-2:高效和忠实任务的数据扭曲-不可知速压](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] – 3x–6x 使用GPT-4数据蒸馏比LLMLingua快.
- [龙LongLLMLINGUA](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] – 长语境下的问觉压缩;21.4%的性能助推,4x更少的代币.
- [大语文模型的快速压缩:调查](https://arxiv.org/abs/2410.12388) [2024] ——全面调查硬软快速压缩方法.

### 预付款

- [优化 LLM 测试-时间计算](https://arxiv.org/abs/2408.03314) [2024] – 显示最佳测试时间计算分配可以超过14x更大的模型.
- [DeepSeek-R1:通过强化学习激励LLMs的理性能力](https://arxiv.org/abs/2501.12948) [2025]——纯RL训练推理模型匹配o1;开源与蒸馏变体.
- [s1: 简单测试时间缩放](https://arxiv.org/abs/2501.19393) [2025] ——仅1000例的SFT通过"预算强迫"创造了竞争推理模式.
- [语言模式:蓝图](https://arxiv.org/abs/2501.11223) [2025] ——系统框架组织推理LM方法.
- [解密长期思考链](https://arxiv.org/abs/2502.03373) [2025] ——分析现代推理模型中的长COT行为.
- [思想图:解决LLMS的详细问题](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024]——模型思维作为任意的图表;在排序上比ToT的质量提高62%.
- [思想之树:用LLMS有意解决问题](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] — 树在推理路径之上的搜索.
- [所有的思想](https://arxiv.org/abs/2311.04254) [2023] –通过MCTS整合COT,TOT和外部解析器.
- [思维的摇摆](https://arxiv.org/abs/2307.15337) [2023] ——通过答题骨架生成进行平行解码,最高可达2.69x加速.
- [大型语言模型中的思想催化推理链](https://arxiv.org/abs/2201.11903) [2022] ——基建煤矿论文.
- [提高思想理性链](https://arxiv.org/abs/2203.11171) [2022] ——综合多种CoT输出可靠性.
- [大型语言模型是零同步理性](https://arxiv.org/abs/2205.11916) [2022] ——"让我们一步步思考"作为零镜头推理触发器.
- [ReAct:在语言模型中协同理性和行为](https://arxiv.org/abs/2210.03629) [2022] (中文(简体) ). Interleaving 推理与工具使用.

### 内容内学习

- [内容中的多热学习](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight]——重大收益将ICL规模提升到成百上千例;引入强化和不受监督的ICL.
- [多式联运基础模型中的许多热门内容学习](https://arxiv.org/abs/2405.09798) [2024] – 将多式联运ICL规模为~2,000个实例,跨越14个数据集.
- [反思示范的作用:什么使内容学习奏效?](https://arxiv.org/abs/2202.12837) [2022]
- [惊人的有序提示和在哪里找到他们](https://arxiv.org/abs/2104.08786) [2021] ——克服少数镜头的即时订单敏感性.
- [使用前校准: 改进语言模型的少热性能](https://arxiv.org/abs/2102.09690) [2021]

### 代理提示和多代理系统

- [代理大语言模型:调查](https://arxiv.org/abs/2503.23037) [2025] ——通过推理,行为,互动能力进行综合调查组织代理LLMS.
- [基于大语言模型的多代理人:进展和挑战调查](https://arxiv.org/abs/2402.01680) [2024] ——涵盖剖析,沟通,增长机制.
- [多机构协作机制:对有限责任妇女的调查](https://arxiv.org/abs/2501.06322) [2025] ——审查基于LLM的多代理系统的辩论与合作战略.
- [AutoGen: 通过多代理对话启用下Gen LLM 应用程序](https://arxiv.org/abs/2308.08155) [2023] ——微软基础多代理框架文件.
- [ToolLLM:向主 16,000+ Real-World API 推广大语言模型](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024]——列车LLMs使用大规模真实世界API收藏.
- [SWE-bench:语言模型能否解决现实世界的GitHub问题?.](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] (英语). – 基准驱动代理编码进展.
- [Bench探员:评价作为代理人的LLMS](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024]——跨越8个环境的基准.
- [PAL: 方案辅助语言模型](https://arxiv.org/abs/2211.10435) [2023] ——向代码口译员卸载计算.

### 多式联运促进

- [多种大语文模式的视觉提示:调查](https://arxiv.org/abs/2409.15310) [2024] – 关于MLLMs中视觉提示方法的第一次全面调查.
- [在 TPT-4V 中设定 Mark 启动 unleashes 特殊视觉定位](https://arxiv.org/abs/2310.11441) [2023] ——视觉标志显著改善视觉地面.
- [远景-语言任务中多式联运大语文模式的综合调查和指南](https://arxiv.org/abs/2411.06284) [2024] ——封面文字,图像,视频,音频MLLMs.
- [语文模式中思维理由的多式联运链](https://arxiv.org/abs/2302.00923) [2023]
- [从快速工程到快速工艺](https://arxiv.org/abs/2411.13422) [2024] (中文(中国大陆) ). —— 设计-研究观点 即时"工艺"用于传播模型.

### 结构化输出和格式控制

- [让我自由说话? 关于格式限制对法学硕士成绩的影响的研究](https://arxiv.org/abs/2408.02442) [2024] – 审视产出对结构化格式的制约如何影响推理性能.
- [批量提示:与 LLM API 的有效推论](https://arxiv.org/abs/2301.08721) [2023]
- [结构化提示:将内容内学习扩大到1,000个实例](https://arxiv.org/abs/2212.06713) [2022]

### 快速注射和安全

- [将迅速注射攻击和防御正规化并设定基准](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024]——对10个LLMs的5次攻击和10次防御进行系统评价的正式框架.
- [指令等级:对专有指令进行优先排序的培训](https://arxiv.org/abs/2404.13208) [2024] (中文(简体) ). OpenAI注射防守重点等级训练.
- [Agent Dojo:评估快速注射攻击和防御的动态环境](https://arxiv.org/abs/2406.13352) [2024] (中文(中国大陆) ). —— 现实主义代理人假设基准.
- [InjecAgent:工具综合LLM代理中间接快速注射的基准](https://arxiv.org/abs/2403.02691) [2024]
- [密钥: 防急注射与优化优惠](https://arxiv.org/abs/2410.05451) [2024] (中文(简体) ). —— DPO基于国防.
- [WASP:针对迅速注射的网络代理安全基准](https://arxiv.org/abs/2504.18575) [2025] ——网络/计算机使用代理的安全基准.
- [多热破狱](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] — 扩大长文本窗口中的有害例子,使越狱成为可能(Anthropic Technical Report)。
- [《宪法》AI:大赦国际反馈的无助](https://arxiv.org/abs/2212.08073) [2022]
- [忽略上一个提示: 语言模型攻击技术](https://arxiv.org/abs/2211.09527) [2022]
- [人工情报和网络安全:2024-2025年有记录的风险、企业护卫和新出现的威胁](https://www.ijfmr.com/research-paper.php?id=62200) [2025] ——以实际治理即时模式调查真实的即时注射事件.

### 即时工程的应用

- [重写和回应:让大语言模型为自己提出更好的问题](https://arxiv.org/abs/2311.04205) [2023]
- [多语种法律判决快速工程](https://arxiv.org/abs/2212.02199) [2023]
- [与副驾驶商谈:探索快速工程解决 CS1 问题](https://arxiv.org/abs/2210.15157) [2022]
- [常识- 提醒可控安乐对话生成](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES:促进社会对话的语言模式综合](https://arxiv.org/abs/2302.03269) [2023]
- [使用变形器编码器和即时学习的医学图像分割:系统审查](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: 异质文档检索增强生成框架](https://arxiv.org/abs/2506.10380) [2025] ——基于SQL的界面维护多跳查询的表格结构.

### 文本到图像生成

- [文本到图像生成的快速修改器分类](https://arxiv.org/abs/2204.13988) [2022]
- [快速工程文本到图像生成模型设计指南](https://arxiv.org/abs/2109.06977) [2021]
- [带有Latent扩散模型的高分辨率图像合成](https://arxiv.org/abs/2112.10752) [2021]
- [DALL- E: 从文本创建图像](https://arxiv.org/abs/2102.12092) [2021]
- [扩散模型中的即时工程调查](https://arxiv.org/abs/2211.15462) [2022]

### 文字对音乐/音频生成

- [MusicLM: 从文本生成音乐](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music:带散射模型的文字到文字音乐生成](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: 音频生成语言建模方法](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio:带有快速增强扩散模型的文本到Audio生成](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### 基础文件(2024年前)

这些文件确立了现代迅速工程所基于的核心概念:

- [语言模型是少有热学习者(GPT-3)](https://arxiv.org/abs/2005.14165) [2020] — 以规模显示的几枪提示.
- [前缀图解:优化连续提示生成](https://arxiv.org/abs/2101.00190) [2021]
- [参数有效快速调试的尺度功率](https://arxiv.org/abs/2104.08691) [2021]
- [大型语言模型的快速编程: 超越极少数语域](https://arxiv.org/abs/2102.07350) [2021]
- [显示您的工作 : 用语言模型进行中间计算 。](https://arxiv.org/abs/2112.00114) [2021]
- [创造知识促进常识理性](https://arxiv.org/abs/2110.08387) [2021]
- [让预训语言模式更好少拍学习者](https://aclanthology.org/2021.acl-long.295) [2021]
- [自动Prompt: 自动生成提示的语文模型中以 Eliening Knows](https://arxiv.org/abs/2010.15980) [2020]
- [我们怎么知道什么语言模型知道?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [用 ChatGPT 增强快速工程的快速模式目录](https://arxiv.org/abs/2302.11382) [2023]
- [合成提示:为LLMS创建思维链演示](https://arxiv.org/abs/2302.00618) [2023]
- [进步提示:语言模型的继续学习](https://arxiv.org/abs/2301.12314) [2023]
- [连续催促解决复杂问题](https://arxiv.org/abs/2212.04092) [2022]
- [分解提示: 解决复杂任务的模块方法](https://arxiv.org/abs/2210.02406) [2022]
- [ExpointChainer:通过视觉编程将大语言模型连接到链路](https://arxiv.org/abs/2203.06566) [2022]
- [Ask me anything: 提示语言模型的简单策略](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [将 GPT-3 提示为可靠](https://arxiv.org/abs/2210.09150) [2022]
- [第二个想法,让我们不要思索一步! 零发热原因中的偏差和毒性](https://arxiv.org/abs/2212.08061) [2022]

---

## 工具和代码
🔧

### 快速管理和测试

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **Promptfoo** | 用于测试,评价的开源CLI,以及红色的LLM提示. YAML 配置, CI/CD 集成,对抗性测试. ~9K+ → QQ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | 解决 NLP LLM 和 易生成不同的 NLP 任务提示的问题, 用于流行的基因模型, 如 GPT, PaLM , 以及更多与 Superify 相关的 | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | 开源LLM开发者平台,用于及时管理,评价,人反馈,部署. | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | 版本,测试,并监控每个快速和具有强力电压的剂,追踪,回归集. | [Website](https://promptlayer.com/) |
| **Helicone** | 生产及时监测优化平台. | [Website](https://helicone.ai/) |
| **LangGPT** | 结构化和元即时设计的框架。 10K+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | 用于构建,测试,和比较LLM的视觉工具包在没有代码的情况下迅速响应. | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | 用于 LLMS 的查询语言, 使复杂的快速逻辑可编程 。 | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | 开发、测试和管理结构化LLM提示的平台。 | [Website](https://www.promptotype.io) |
| **PromptPanda** | AI动力的即时管理系统,用于精简即时工作流程. | [Website](https://promptpanda.io) |
| **Promptimize AI** | 浏览器扩展以自动改进任何AI模型的用户提示. | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | 基于网络的"Prompt Engine IDE"用于迭代创建和运行的提示. | [Website](https://promptmetheus.com) |
| **Better Prompt** | LLM的测试套件在推动生产前会提示. | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | 即时学习研究的开源框架. | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | 用于创建、分享和使用自然语言的工具包提示。 | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | 用于创建和维护LLMS(微软)提示的国家预防机制工具库。 | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | 关于LLM稳健性与对抗性即时攻击的定量分析框架。 | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | 管理AI IDE配置文件的自宿平台(.cursorrules,CLAUDE.md,副驾驶指令.md). Web UI, REST API, CLI, 以及30+AI编码助理的联邦蓝图市场. | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Visual AI 快速构建器能分解导出12个语义块(作用,上下文,约束,实例等),并将其编译为优化的XML. ChatGPT/Claude/Gemini的浏览器扩展,以及克劳德代码代理商的MCP服务器. 自由开源. | [Website](https://flompt.dev) |

### LLM 评价工具

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **DeepEval** | 开放源代码评价框架,涵盖RAG、代理商和与CI/CD集成的对话。 | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | RAG评价采用基于知识的测试集生成和30+ 度量衡. ~8K+ ~QQ | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | LangChain的平台用于调试,测试,评价,以及监测LLM应用. | [Website](https://smith.langchain.com/) |
| **Langfuse** | 开源LLM的可观察性,有追踪性,即时管理性,以及人类注释性. ~7K+ + ⭐. | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | 端对端AI评价平台,SOC2型II认证. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | 实时LLM监测与漂流探测和追踪. | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | 评价和解释LLM应用;跟踪幻觉,相关性,立足性. | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | 参照基准评估代理人的目的(联合王国AISI)。 | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | 评估、测试和船舶的LLM应用,跨越dev和生产生命周期。 | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | 用于测试带有YAML测试案例的多步骤AI剂,回归检测,以及生产监测的CLI工具. |[GitHub](https://github.com/hidai25/eval-view) |

### 代理框架

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | 最广泛采用的LLM App框架;LangGraph增加了基于图表的多步代理工作流程. ~100K+ /~10K+ + ⭐ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | 角色扮演AI代理管弦乐与700+集成. ~44K+QQ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | 微软多代理对话框架. ~40K+ + + ⭐ | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | 斯坦福的LLMs编程框架带有自动即时/重量优化. ~22K+ + + ⭐ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | 官方代理框架,功能调用,护栏和交割. ~ 10K+ + + ⭐ | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | 微软的AI框架为M365副驾驶提供动力;C#,Python,Java. ~24K+QQ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | RAG和代理能力的数据框架。 ~40K+ + + ⭐ | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | 开源NLP框架,具有RAG和代理的管道架构. ~20K+ + + ⭐ | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | Python代理框架带有微秒即时. ~20K+ + + ⭐ | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | Hugging Face的最小化代码中心代理框架(~1000 LOC). ~15K+ ~~ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | 使用 Pydantic 进行结构化验证的型式安全剂框架 。 ~ 8K+ QQ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | TypeScript AI代理框架与助手,RAG,和可观察性. ~20K+ + + ⭐ | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | Agent Development Kit与双子座和谷歌云深度融合. | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | 具有深度AWS集成的模型-不可知性框架. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | 基于节点的视觉代理构建器,带有拖放功能. ~50K+ QQ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | 具有AI代理能力和400+集成功能的工作流自动化. ~60K+ + + ⭐ | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | 具有工具使用代理和RAG的代理工作流程全能后端. | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | 多AI级 具有100+LLM支持的代理框架,MCP集成,以及内置内存. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | 多供应商AI代理框架将12+供应商与工作流程协调统一起来. | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | 用零设置连接100+工具到AI代理. | [GitHub](https://github.com/composiohq/composio) |

### 快速优化工具

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **DSPy** | 多个优化器(MIPROv2,BootstrapFewShot,COPRO)用于自动即时调频. ~22K+ + + ⭐. | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | 通过文本自动区分( Stanford). ~2K+ QQ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | Google DeepMind通过提示优化. | [GitHub](https://github.com/google-deepmind/opro) |

### 红队和快速安保

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | LLM脆弱性扫描仪用于幻觉、注射和越狱——“LLMs的地图”。 | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | 用于自动红调的 Python 风险识别工具 。 ~ 3K+ QQ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+脆弱性,10+攻击方法,OWASP Top 10支持. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | LLM I/O验证的安全工具包。 ~2K+ + QQ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | 对话系统可编程的护栏。 ~ 5K+ QQ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | 定义严格的输出格式(JSON schemas)以确保系统可靠性. | [Website](https://www.guardrailsai.com) |
| **Lakera** | AI安全平台实时即时注射检测. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | 开源LLM安全评价包括CyberSecEval. | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | 自动越狱模板生成,成功率大于90%。 | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | 用于检测和预防迅速注射的开源工具。 | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "开源扫描仪 运行150个攻击探测器 测试AI剂 快速注射和提取弱点". | [GitHub](https://github.com/agentseal/agentseal) |

### MCP(示范背景议定书)

MCP是Anthropic(Nov 2024,捐赠给Linux Foundation Dec 2025)开发的开放标准,用于通过标准化接口连接AI助手与外部数据源和工具. 它已经 **97M+月度SDK下载** 并被GitHub,Google,以及大多数主要的AI供应商采用.

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **MCP Specification** | 核心协议规格和 SDK. ~15K+ + → | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | 官方执行:获取,文件系统,GitHub,Slack,Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | 用于构建 MCP 服务器的高级 Pythonic 框架. ~ 5K+ → QQ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | GitHub的官方MCP服务器用于repo,发行,PR,和Actions交互. ~ 15K+ + + + 个 | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | 10000+社区MCP服务器解析列表. ~30K+ + + ⭐ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | MCP服务器提供特定版本文档以减少代码幻觉. | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | 通过更改域为任何 GitHub repo 创建远程 MCP 服务器 。 | [Website](https://gitmcp.io/) |
| **MCP Inspector** | MCP服务器开发的视觉测试工具. | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Vibe 编码和AI 编码助理

> 🟢 = 开源 · 🔵 = 商业版 · 🟣 = 开源 + 商业版（开放核心，付费云端/API）

#### 基于CLI的编码代理商

终端本地代理工具,可以理解您的代码库并执行多步任务.

| 名称 | 说明 | 类型 | 链接 |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Anthropic的代理编码CLI;通过自然语言理解完整的代码库并执行复杂的多步骤任务. | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | OpenAI的开源终端编码代理;轻量级,本地第一,带有沙箱代码执行. ~68K+ + + + ⭐ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | Google的开源终端AI代理,带有1M-token上下文窗口和Google搜索地面. ~96K+ + + ⭐ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | 开源终端AI代理优化了Qwen3-Coder;多protocol支持(OpenAI/Anthropic/Gemini API),1000个免费请求/天. ~21K+ QQ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | AI配对编程在终端中带有深Git集成;映射整个代码库和自动承诺变化. ~42K+ QQ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | 强大的开源AI编码代理与美丽的TUI;支持几乎所有的AI模型提供者. ~120K+ + + ⭐ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Block(Square/Cash App)的可扩展开源AI代理;安装,执行,编辑,并使用任何LLM进行测试. ~29K+ QQ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | 来自Charmbracelet的Glamoroous代理编码代理,多模式支持,LSP集成,以及美丽的终端UI. ~9K+ QQ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | 从AWS到终端的代理聊天体验;向Kiro CLI过渡. | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | sourcegraph的代理编码工具(Cody second);作品跨越CLI和IDE. | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains的LLM-不可知编码代理CLI(β 2026);支持所有主要的模型提供者. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | 自演自主终端编码代理,多提供LLM支持,40+工具,模块化技能系统. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### AI 代码编辑器/IDEs

独立编辑器或具有深度AI集成的IDE叉.

| 名称 | 说明 | 类型 | 链接 |
|:-----|:-----------|:----:|:----:|
| **Cursor** | 主导AI-native代码编辑器(VS Code fork); 编曲器从自然语言生成整个应用程序,代理多文件编辑. | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | AI动力的IDE(VS代码叉),拥有专有的Cascade代理和SWE-1.5型号;被认知AI收购. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | Rust中具有本地AI特性的高性能编辑器,Zeta编辑预测,代理客户端协议支持. ~77K+ QQ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | 由ByteDance("真AI工程师")提供自由AI动力的IDE,具有Builder Mode;为克劳德,GPT-4o和DeepSeek提供免费访问. | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | Google的代理-第一IDE(VS Code Fork),管理器视图,用于并行地协调多个代理;由双子座供电. | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | AWS的光谱驱动代理 AI IDE (VS Code fork); 将导句变为光谱,然后是工作码,docs,和测试. | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | 开源AI代码编辑器(VS Code fork),带有基于Creep的聊天和完成. ~40K+ + + ⭐ | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | 开源光标替代(VS Code fork);任何模式或具有变化可视化的本地托管. ~28K+ + + ⭐ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | 开源聊天-第一AI代码编辑器,多文件编辑和深度Git集成. ~7K+QQ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | 开源代理dev环境(YC W26),用于在孤立的Git工作树平行运行多个编码代理. | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### IDE 扩展/ 插件

VS代码,JetBrains,Neovim等编辑器的插件.

| 名称 | 说明 | 类型 | 链接 |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | 最广泛采用的AI编码助手;内置完成,聊天,以及代理编码代理,跨越VS代码,JetBrains,Neovim. | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | VS代码中具有自主编码代理,并经过人入Loop审批;文件编辑,终端命令,浏览器使用. ~59K+ + + + ⭐ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | 开源 VS 代码和 JetBrains 扩展用于创建自定义,模块化的 AI dev 系统;任何模型. ~32K+ ~ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | Sourcegraph-power 的AI助手,从本地和远程代码库中调取上下文; VS代码, JetBrains, Visual Studio. | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | 免费AI编码扩展40+IDE,完成,聊天,并搜索70+语言. | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | AWS的AI编码助手有完成,内置聊天,代理模式;深AWS集成. | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | Google的IDE扩展由双子座供电,并附有完成,下版预测,以及内置diff;个人免费. | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | 以隐私为重点的人工智能助理接受了关于允许性许可开放源码软件的培训;支持所有主要的IDE部署。 | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | 企业AI编码助理,拥有200K-token背景引擎,用于深层代码库的理解. | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | AI代码审查与具有多代理架构的质量平台;测试生成,代码审查,CI/CD执行. | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | 开源多语种代码生成模型支持20+语言有VS代码和JetBrains扩展. ~11K+QQ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | 自备的开源AI编码助理(Copilot Proference);运行完全在您的基础设施上. ~25K+ + + ⭐ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### AI 编码平台/ 云代理

基于浏览器或云托管的自动构建、测试和部署的代理。

| 名称 | 说明 | 类型 | 链接 |
|:-----|:-----------|:----:|:----:|
| **Devin** | 第一个完全自主的基于云的AI软件工程师;计划,代码,测试,并独立打开PR. | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | 云内人工智能代理,可自主构建,测试,并部署全层的应用浏览器;50+语言. | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | AI-powerweb dev代理;通过WebContainers在浏览器中直接启动,运行,编辑和部署全存储应用程序. ~ 15K+ + + + 个 | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | 社区叉螺栓. new 具有扩展的特性和更广泛的LLM灵活性. ~12K+ QQ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | 来自自然语言的全斯塔克应用软件有内置的Supabase,auth,和一击部署;最快的欧洲启动到20M ARR. | 🔵 | [Website](https://lovable.dev) |
| **v0** | Vercel的AI平台用于生成高质量的React/Next. js 来自自然语言的UI组件。 | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | 云基编码环境与计划,脑暴,维修代理;包含付费的副驾驶计划. | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | 谷歌代理云开发环境. | 🔵 | [Website](https://firebase.google.com/studio) |

#### 开源编码代理框架

构建自主编码代理的框架和研究项目.

| 名称 | 说明 | 类型 | 链接 |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | 领导云码代理的开源平台;始终在SWE-bench上. 原为 OpenDevin. ~69K+ +⭐ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | 取一个 GitHub 问题,然后使用自定义代理-计算机接口自动修正. [NeurIPS 2024]~19K+ + ⭐ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | LangChain的Aync云托管编码代理框架在LangGraph上建有Slack/Linear集成. ~8K+ + + ⭐ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | 开源代理软件工程师;破解指令,研究,写代码. Devin 选项。 ~ 18K+ + QQ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | 自主程序改进结合LLMS和故障本地化,用于GitHub问题解析. ~2.8K+ + + ⭐ | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | 解决软件开发问题的简单三阶段办法(局部化 修理 验证). ~2K+ ~. | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | 开源配对程序员SWE代理,具有代码编写,规划,和研究功能;支持克劳德,GPT-4,Llama,Ollama. ~3.5K+ + + ⭐ | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### 其他重要仓库

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | 确定开源指南与资源枢纽. 3M+学习者. ~55K+ → QQ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | 世界最大的开源快速库. 所有主要模型的1000个提示。 | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | 建造生产级LLM动力软件的原则。 | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 手操作 Jupyter 笔记本教程。 ~ 3K+ + QQ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | 超越即时工程到背景设计的第一原则手册. | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | 收集来自生产AI编码剂(Claude Code,双子座CLI,Cline,Aider,Roo Code)的系统提示. | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | 245+通过自然语言构建软件的工具和资源的解析列表. | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | 用于提示、工具、RAG和评价的官方方法。 | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | 在您的数据集上创建 ChatGPT 类似 bots 的框架 。 | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | 机器思维科学框架. | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | 包含符号计数的 AI 提示的摘录和格式代码上下文 。 | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | 比较200+模型的LLM API定价. | [Website](https://pricepertoken.com/) |
| **OpenPaw** | CLI 工具 (`npx pawmode`),通过生成带有个性,内存,以及38个技能路由器的系统提示(CLAUDE.md + SOUL.md),将Claude Code变成个人助理. | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | 永久注入10个结构化决策框架(MECE, Issues Trees,Pre-Mortems)和12个认知偏差检测器的开源CLI输入AI助手提示. 去吧,麻省理工学院。 | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## APIs 图像
💻

### 开放AI

| 型号 | 背景情况 | 价格(每100兆令牌的输入/产出) | 关键特性 |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K 车次 | $1.75 / $14 | 最新旗舰,缓存折价90%,可配置推理 |
| GPT-5.1 | 400K 车次 | $1.25 / $10 | 上一代旗舰 |
| GPT-4.1 / 4.1 mini / nano | 1门 | $2 / $8 | 最佳非理性模型,比GPT-4o快40%,便宜80% |
| o3 / o3-pro | 200K 车次 | 变数 | 使用本地工具的理由模型 |
| o4-mini | 200K 车次 | 成本效益 | 快速推理,最好在AIME 成本类 |
| GPT-OSS-120B / 20B | 128K (英语). | $0.03 / $0.30 | 第一个开放量级模型, Apache 2.0 |

主要功能: 响应API,代理SDK,结构化输出,函数调用,即时缓存(90%折扣),批量API(50%折扣),MCP支持. [平台文档](https://platform.openai.com/docs/models)

### 安东尼( 克洛德)

| 型号 | 背景情况 | 价格(每100兆令牌的输入/产出) | 关键特性 |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1米(百达) | $5 / $25 | 最有力、最先进的编码和代理任务 |
| Claude Sonnet 4.5 | 200K 车次 | $3 / $15 | 最佳编码模式,61.4% OSWorld(计算机使用) |
| Claude Haiku 4.5 | 200K 车次 | 快速级 | 近境,最快的模范类 |
| Claude Opus 4 / Sonnet 4 | 200K 车次 | 15美元/75美元(奥普斯) | Opus: 72.5% SWE-bench, Sonnet 4 功率 GitHub 副驾驶 |

关键特性: 扩展思维与工具使用, 计算机使用, MCP(由这里产生), 即时缓存, Claude Code CLI, 可在 AWS Bedrock 和 Google Vertex AI上查阅. [API 文档](https://docs.anthropic.com/)

### 谷歌( 格米尼 )

| 型号 | 背景情况 | 价格(每100兆令牌的输入/产出) | 关键特性 |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1门 | $2 / $12 | 最聪明的谷歌模型,部署到2B+ 搜索用户 |
| Gemini 2.5 Pro | 1门 | $1.25 / $10 | 最适合编码/代理任务、思维模式 |
| Gemini 2.5 Flash / Flash-Lite | 1门 | $0.30/$1.50 · $0.10/$0.40 | 价格业绩领导者 |

主要功能:思考(所有2.5+模型),Google搜索定位,代码执行,Live API(实时音频/视频),上下文缓存. [谷歌 AI 工作室](https://ai.google.dev/)

### 梅塔 (拉玛语)

| 型号 | 建筑 | 背景情况 | 关键特性 |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B 教育部/17B 活动 | 10分钟 | 适合单一的H100型、多式、开放式 |
| Llama 4 Maverick | 400B 教育部 / 17B 活跃,128名专家 | 1门 | 比GPT-4o, 开放重量 |
| Llama 3.3 70B | 语气 | 128K (英语). | 装配Llama 3.1 405B |

可在25+云伙伴,Hugging Face和推断API上找到. [拉玛](https://ai.meta.com/llama/)

### 其他知名供应商

| 供应商 | 说明 | 链接 |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral Lige 3 (675B MOE), Devstral 2, Ministry 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2(671B MOE),R1(理由,麻省理工学院许可证). 每1M个令牌0.15美元/0.75美元. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 Fast: 2M上下文,每1M令牌0.20美元0.50美元. | [Website](https://x.ai) |
| **Cohere** | 指令A(111B,256K上下文),Embed v4,Rerank 4.0. (原始内容存档于2018-09-21). Excels at RAG. | [Website](https://cohere.com) |
| **Together AI** | 200+开放型号,具有子100ms的耐用性. | [Website](https://together.ai) |
| **Groq** | LPU硬件带有~300+令牌/sec推论. | [Website](https://groq.com) |
| **Fireworks AI** | 快速推论HIPAA+SOC2合规. | [Website](https://fireworks.ai) |
| **OpenRouter** | 统一 API 用于所有提供者的300+模型. | [Website](https://openrouter.ai) |
| **Cerebras** | 具有最佳总响应时间的瓦弗级芯片. | [Website](https://cerebras.ai) |
| **Perplexity AI** | 以引用方式搜索获得的 API 。 | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | 与克劳德,拉玛,米斯特拉尔,科赫尔管理多型服务. | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | 通过API访问开放模型. | [Website](https://huggingface.co/docs/api-inference/index) |

---

## 数据集和基准
💾

### 主要基准(2024-2026年)

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | 6M+用户对Elo级配对LLM比较的投票. 人类偏好的实际标准。 | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | 12,000+研究生问题,涉及14个领域。 NeurIPS 2024 Spotlight. (原始内容存档于2018-09-29). | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448"Google防守"STEM问题;非专家验证器只实现34%. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | 人类验证500任务子集 现实世界GitHub问题解析. | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1,865项任务遍及41个专业复赛;最佳模式得分只有~23%. | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2500个经专家审查的问题;AI最高分只有~10–30%. | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 1,140项编码任务跨越7个领域;AI实现~35.5%对97%的人类成功率. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | 耐污染,并经常更新问题。 | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | 研究级数学;AI只解决~2%的问题. | 研究 |
| **ARC-AGI v2** | 抽象推理测量流体智能. | 研究 |
| **IFEval** | 附有格式/内容限制的说明式评价。 | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | OpenAI通过Kaggle风格的任务进行ML工程评价. | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | 评价AI从零开始复制20篇ICML 2024论文的能力. | [GitHub](https://github.com/openai/preparedness) |

### 领导板和元基准

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | 在MMLU-Pro,GPQA,IFEval,MATH上评价开放模型. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | 总计10项评价。 | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | 主办SWE-bench Pro和代理评价. | [Leaderboard](https://scale.com/leaderboard) |

### 快速和指令数据集

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | 用于训练T0和类似模型的270+NLP任务的快速模板. | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944 代理工作流程的系统快速模板(由丹尼尔·罗斯希尔著,2025年8月). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161,443条留言使用35种语言,获得461,292个质量评分. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | 用于对齐训练的大型合成教学和偏好数据集. | 拥抱脸 |
| **SoftAge Prompt Engineering Dataset** | 在10个类别中,有1 000个不同的激励因素,以制定快速业绩的基准。 | 拥抱脸 |
| **Text Transformation Prompt Library** | 综合收集文本转换提示(2025年5月). | 拥抱脸 |
| **Writing Prompts** | ~300K人文故事配对 r/WritingPrompts的提示. | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | 文本提示和图像 URL 从MidJourney的公开Discord中刮去. | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 2万个编程指令输出对. | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | 用于快速优化RAG工作流程的数据集. | 拥抱脸 |
| **NanoBanana Trending Prompts** | 1000+曲解的AI图像提示来自X/Twitter,按照约定排名. | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### 红色组合和逆向数据集

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **HarmBench** | 510 跨越标准、背景、版权和多式联运类别的有害行为。 | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | 打开100个速率的越狱标准 | 研究 |
| **AgentHarm** | 110个恶意代理任务跨11个伤害类别. | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243 877 促使从8个角度评价可信度。 | 研究 |
| **SafetyPrompts.com** | 聚合物跟踪50+安全/红组数据集. | [Website](https://safetyprompts.com/) |

---

## 模型
🧠

### 边疆模式(2025-2026)

| 型号 | 供应商 | 背景情况 | 键强 |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | 开放AI | 400K 车次 | 一般情报,100% AIME 2025 |
| **Claude Opus 4.6** | 人类 | 1米(百达) | 编码、代理任务、扩展思维 |
| **Gemini 3 Pro** | 谷歌 | 1门 | #1 LMArena(~1500 Elo),多式联运 |
| **Grok 4.1** | 页:1 大赦国际 | 2分钟 | #2 LMARENA(1483 Elo),低幻觉 |
| **Mistral Large 3** | 迷雾AI | 256K (韩语) | 最佳露天重量(675B MoE/41B 活动), Apache 2.0 |
| **DeepSeek-V3.2** | 深层搜索 | 128K (英语). | 最佳值(671B MoE/37B 活动),麻省理工学院许可证 |
| **Llama 4 Maverick** | 元数据 | 1门 | 比GPT-4o(400B MOE/17B 活动),开放重量 |

### 理由模型

| 型号 | 密钥细节 |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87.7%的GPQA钻石. 原始工具的使用。 |
| **OpenAI o4-mini** | 最佳的AIME成本课 与视觉推理。 |
| **DeepSeek-R1 / R1-0528** | 开放量产,RL训练. AIME 2025上87.5%. 麻省理工学院执照 |
| **QwQ (Qwen with Questions)** | 32B推理模型. 阿帕奇2.0 (英语). 与R1相当. |
| **Gemini 2.5 Pro/Flash (Thinking)** | 内设推理与可塑思维预算. |
| **Claude Extended Thinking** | 有可见的思想链和工具使用的混合模式. |
| **Phi-4 Reasoning / Plus** | 14B推理模型与更大的模型相对应. 开放量级. |
| **GPT-OSS-120B** | OpenAI的开放量级与CoT. 近等量级与o4-mini. 阿帕奇2.0 (英语). |

### 显著的开源模型

| 型号 | 供应商 | 密钥细节 |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | 阿里巴巴 | 旗舰MOE. 强推理/代码/多种语言. 阿帕奇2.0 (英语). 大部分下载的家庭在HuggingFace. |
| **Gemma 3** | 谷歌 | 270M至27B. 多式联运. 128K语境. 140+语言. |
| **OLMo 2/3** | 艾伦·艾尔 | 完全开放(数据、代码、重量、日志)。 OLMo 2 32B超越GPT-3.5. Apache 2.0. |
| **SmolLM3-3B** | 拥抱的脸 | 超过Llama-3.2-3B. 双模式推理. 128K语境. |
| **Kimi K2** | 月光摄影AI | 32B活动. 开放量级. 适合编码/代理使用。 |
| **Llama 4 Scout** | 元数据 | 109B MOE/17B 活跃. 10M令牌上下文. 符合单H100. |

### 代码专用模式

| 型号 | 密钥细节 |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69.6% SWE-bench——开源编码的里程碑. 256K 语境. 阿帕奇2.0 (英语). |
| **Devstral 2 (123B)** | 72.2% SWE-bench 验证. 7x比克劳德·索内更具有成本效益. |
| **Codestral 25.01** | 米斯特尔的代码模型. 80+语言. 满中供养. |
| **DeepSeek-Coder-V2** | 236B MOE / 21B 活动. 338编程语言. |
| **Qwen 2.5-Coder** | 7B/32B. 92编程语言. 88.4% HumanEval. Apache 2.0. |

### 基础模型(历史参考)

这些模式确立了关键概念,但基本上被取代,以供实际使用:

| 型号 | 供应商 | 意义 |
|:------|:---------|:-------------|
| GLM-130B | 清华 | 开放式双语英语/中文LLM(2023) |
| Falcon 180B | 暂定 | 大型开放基因模型(2023) |
| Mixtral 8x7B | 迷雾AI | 开放型号的首选MOE架构(2023) |
| GPT-NeoX-20B | 埃留特里亚 | 早期打开自旋LLM |
| GPT-J-6B | 埃留特里亚 | 早期开放因果语言模型 |

---

## AI 内容检测器
🔎

### 主要商业探测器

| 名称 | 准确性 | 关键特性 | 链接 |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99%的索赔 | 10M+用户,G2上#1 (2025). 探测到GPT-4/5,双子座,克劳德,拉玛. 免费等级。 | [Website](https://gptzero.me) |
| **Originality.ai** | 98-100%(经同行审查) | 一贯评分最准确. 结合AI检测+盗版+事实检查. 从14.95美元/月。 | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 关于未修改的AI文本的98%+ | 学术界的主导地位。 AI通过通行证/人造探测器启动(2025年8月)。 机构许可. | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99%+索赔 | 企业工具检测30+语言的AI. LMS整合. | [Website](https://copyleaks.com) |
| **Winston AI** | 99.98%的索赔 | 扫描文件的OCR,AI图像/深假检测. 11种语言. | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99.3%(2025年) | 在COLLING 2025共享任务中得分最高. 100%TPR在"人性化"文本上. 97.7%的对抗力强. | [Website](https://www.pangram.com) |

### 自由与研究探测器

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **Binoculars** | 开源研究探测器使用两个LLMs之间的交叉复杂度. | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | 统计方法比较原始文本与扰动的对数概率. | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | 表示 AI 书面文本的 AI 分类器( OpenAI 探测器 Python 包装器)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | 基于浏览器的自由检测器(最多2000个字符). 一些研究的准确度为97%. | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | 免费,不需要注册。 | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | 带有颜色编码结果的自由工具 。 | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | 在多个学术研究中评价了大众自由探测器. | [Website](https://www.zerogpt.com/) |

### 水标记办法

| 名称 | 说明 | 链接 |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | 通过统计标志样本为AI文本、图像和音频进行水印。 在谷歌产品中部署. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | 截至2025年已开发但仍属实验性. 研究表明存在脆弱性问题。 | 实验 |

**重要说明:** 没有探测器声称100%准确. 人类/AI混合文本仍然最难检测(50-70%的准确性)。 反常稳健程度差异很大. 预计到2035年AI检测市场将从~2.3B(2025年)增长到15B.

---

## 书籍
📖

### 即时工程

| 标题 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | 约翰·贝里曼和阿尔伯特·齐格勒 | 奥赖利 | 2024 |
| **Prompt Engineering for Generative AI** | 詹姆斯·菲尼克斯和迈克·泰勒 | 奥赖利 | 2024 |
| **Prompt Engineering for LLMs** | 托马斯·卡尔德韦尔(Thomas R. | 独立 | 2025 |

### LLM 应用程序开发

| 标题 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | 齐普·阮 | 奥赖利 | 2025 |
| **Build a Large Language Model (From Scratch)** | 塞巴斯蒂安·拉斯奇卡 | 人员配置 | 2024 |
| **Building LLMs for Production** | 路易-弗朗索瓦·布沙尔德和路易·彼得斯 | 奥赖利 | 2024 |
| **LLM Engineer's Handbook** | 保罗·伊乌什廷和马克西姆·拉邦 | 包装 | 2024 |
| **The Hundred-Page Language Models Book** | 安德里·布尔科夫 | 自写 | 2025 |

### AI 代理人

| 标题 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | 迈克尔·阿尔巴达 | 奥赖利 | 2025 |
| **AI Agents and Applications** | 罗伯托·伊凡特 | 人员配置 | 2025 |
| **AI Agents in Action** | 迈克尔·兰汉姆 | 人员配置 | 2025 |

### 生产、可靠性和安全

| 标题 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | 克里斯托弗·布鲁梭和马修·夏普 | 人员配置 | 2025 |
| **Building Reliable AI Systems** | 拉什·沙哈尼 | 人员配置 | 2025 |
| **The Developer's Playbook for LLM Security** | 史蒂夫·威尔逊 | 奥赖利 | 2024 |

---

## 课程
👩‍🏫

### 免费短期课程

- [ChatGPT 开发者的快速工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) ——由安德鲁·恩格和OpenAI的伊莎·富尔福共同执教. 基础起点. (深学. (大赦国际)
- [用 ChatGPT API 构建系统](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) ——生产多步LLM系统设计. (深学. (大赦国际)
- [LangGraph的AI探员](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) ——具有工具使用和研究代理的代理数据流. (深学. (大赦国际)
- [用 LlamaIndex 建造代理RAG](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) ——RAG研究代理建设. (深学. (大赦国际)
- [LangChain 的函数、工具和代理人](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) - 职能呼叫和代理大楼。 (深学. (大赦国际)
- [视觉模型快速工程](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) ——视觉提示技术. (深学. (大赦国际)

### 大学和平台课程

- [快速工程专业(范德比尔特)](https://www.coursera.org/specializations/prompt-engineering) - 儒勒博士的三期系列课程 白色覆盖到高级PE(Coursera)
- [带有LLMs的基因AI(深入学习.AI + AWS)](https://www.coursera.org/learn/generative-ai-with-llms) ——LLM生命周期,变压器,RLHF,部署. (科塞拉语)
- [斯坦福 CS336: 从Scratch进行语言建模](https://cs336.stanford.edu/) ——构建LLM端对端. (斯坦福, 2024–2026).
- [MIT 6.S191:深入学习介绍](https://introtodeeplearning.com/) 年度课程,包括法学硕士和遗传学硕士(麻省理工学院,2024-2026年)
- [AI Bootcamp的完整快速工程](https://www.udemy.com/course/prompt-engineering-for-ai/) ——覆盖GPT-5,DSPy,LangGraph,代理架构. 58K+收视率. (Udemy,2026年2月更新)

### 免费平台课程

- [谷歌提示要点](https://grow.google/prompting-essentials/) ——5步快速设计,元速成,双子座. 不到6小时
- [微软 Azure AI 基本原理:基因AI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) ——覆盖LLMS的自由学习路径,提示,代理,Azure OpenAI.
- [拥抱面部LLM课程](https://huggingface.co/learn/llm-course/chapter1/1) ——社区驱动课程覆盖变压器,微调,建设推理模型.
- [抱面AI代理课程](https://huggingface.co/learn) ——代理理论到实践. 100K+注册学生.

### 学习快速课程

- [为每个人服务的 ChatGPT](https://learnprompting.org/courses/chatgpt-for-everyone)
- [即时工程简介](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [高级快速工程](https://learnprompting.org/courses/advanced-prompt-engineering)
- [即时打包介绍](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [高级快速锁定](https://learnprompting.org/courses/advanced-prompt-hacking)
- [商业专业人员Generative AI代理介绍](https://learnprompting.org/courses/introduction-to-agents)
- [AI 安全](https://learnprompting.org/courses/ai-safety)

---

## 教学和指南
📚

### 官方提供者指南

- [OpenAI 即时工程指南](https://platform.openai.com/docs/guides/prompt-engineering) ——全面,涵盖GPT-4.1/5提示,推理模型,结构化输出,代理工作流程. 不断更新。
- [OpenAI GPT-4.1 提示指南](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] — 结构化代理式的即时设计:目标持续,工具集成,长文本处理.
- [Anthropic 快速工程概览](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) ——迭代即时设计,XML标记,思维链,角色分配. 包括即时发生器。
- [Claude 4 最佳做法](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025–2026] — 并行工具执行,思维能力,图像处理.
- [Anthropic:AI代理的有效背景工程](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] ——从即时工程向上下文工程的演变:代理状态,内存,工具,MCP.
- [Google 双子座加速策略](https://ai.google.dev/docs/prompt_best_practices) ——多模式通过Vertex AI和AI Studio催化双子座.
- [Azure AI工作室的微软快速工程](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) ——工具调用,功能设计,几发提示,即时连锁.

### 社区和独立指南

- [即时工程指南(DAIR.AI/即时指南.ai)](https://www.promptingguide.ai/) ——最全面的开源指南. 18+ 技术,模型特定指南,研究论文. 3M+学习者. 现在包括上下文工程.
- [学习提示( learnprompting. org)](https://learnprompting.org/) ——结构化自由平台. 开始进入高级PE,AI安全,HackAPrompt竞技.
- [IBM 2026 快速工程指南](https://www.ibm.com/think/prompt-engineering) [2026] – 被破解的工具,教程,带有Python代码的现实世界实例.
- [Anthropic 交互式教学](https://github.com/anthropics/prompt-eng-interactive-tutorial) 9章的Jupyter笔记本课程,并进行实际练习。
- [Lilian Weng的快速工程指南](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] (中文(简体) ). OpenAI研究者高敬重技术博客.
- [谷歌快速工程指南(68页PDF)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] (中文(中国大陆) ). – 内部风格双子座最佳实践指南 具体模式.
- [数字海洋:即时工程最佳做法](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] ——更新指南总结技术:少拍,连环思考,角色提示等.
- [Aakash Gupta: 2025年快速工程](https://news.aakashg.com) [2025] ——智慧地从OpenAI, Shopify,和Google的航运AI提供实用指南.
- [与 OpenAI API 同步工程的最佳做法](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) ——OpenAI介绍性最佳做法.
- [OpenAI 烹饪本](https://github.com/openai/openai-cookbook) ——函数调用,RAG,评价,和复杂工作流程的官方配方.
- [微软提示工程文档](https://microsoft.github.io/prompt-engineering) ——微软开放即时工程资源.
- [DALLE 提示书](https://dallery.gallery/the-dalle-2-prompt-book) ——文字对图像提示的视觉指南.
- [最佳100+稳定扩散提示](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) ——社区定制图像生成提示.
- [维贝工程(曼宁)](https://www.manning.com/books/vibe-engineering) ——Tomasz Lelek & Artur Skowronski关于通过自然语言提示构建软件的书.

---

## 视频
🎥

- [Andrej Karopathy:"深潜入LLMs"和"我如何使用LLMs"](https://www.youtube.com/@AndrejKarpathy) [2024–2025] — 2024–2025年最有影响力的AI视频中的两部. 综合技术深度潜水,然后是实际使用模式。
- [Karopathy:"AI时代的软件"(YC AI创业学校)](https://karpathy.ai/) [2025] – Coined"vibe Coding"(2025年2月),并卫冕"context工程"(2025年6月).
- [Karpathy:神经网络:0对英雄.](https://www.youtube.com/@AndrejKarpathy) [2023–2024] (中文(中国大陆) ). – 从反传播到GPT的完整讲座系列建筑.
- [3 Blue1Brown:神经网络系列](https://www.youtube.com/@3blue1brown) [更新2024]——对变压器和注意力机制的图标动画视觉解释. 7M+订户.
- [大赦国际解释](https://www.youtube.com/@aiexplained-official) [2024–2025]——长式分析破解论文,模型能力,以及PE发展.
- [萨姆·维特维温](https://www.youtube.com/@samwitteveen) [2024–2025]——关于即时工程的实用辅导,LangChain,RAG,和代理.
- [马修·伯曼](https://www.youtube.com/@matthew_berman) [2024–2025] (中文(简体) ). – 覆盖模型发布和实用LLM使用的大众频道. 600K+订户.
- [深层学习. AI YouTube](https://www.youtube.com/@Deeplearningai) [2024–2026] — 结构化课程,课程预览,以及安德鲁·恩格关于特工和AI职业的演讲.
- [莱克斯·弗里德曼·波德卡斯(英语:Lex Fridman Podcast)(AI Episodes).](https://www.youtube.com/@lexfridman) [2024–2025]——与阿尔特曼,欣顿,阿莫代在LLMS上的长式访谈,提示,和安全.
- [ICSE 2025: AIware 即时工程教学](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] ——会议教程,涵盖即时模式,脆弱性,反标,优化DSL.
- [CMU 高级 NLP 2022: 提示](https://youtube.com/watch?v=5ef83Wljm-M) ——关于激励方法的基础学术讲座.
- [ChatGPT: 初学者的5个快速工程秘诀](https://www.youtube.com/watch?v=2zg3V66-Fzs) ——初学者可访问的介绍.

---

## 社区
🤝

### Discord 服务器

- [学习提示](https://learnprompting.org/discord) ——4万人以上成员. 最大的PEDiscord有课程,黑客座,HackAPrompt比赛.
- [提示解析器](https://discord.gg/m88xfYMbK6)  - 社区
- [中途岛](https://discord.gg/midjourney) 1M+成员。 文字对图像快速共享的主中枢.
- [OpenAI 磁盘](https://discord.gg/openai) 官方社区有GPTs、Sora、DALL-E和API的渠道。
- [Anthropic Discord (英语)](https://discord.gg/anthropic) ——官方克劳德社区开展AI发展协作.
- [拖动面部装饰](https://discord.gg/huggingface) ——示范讨论,图书馆支持,社区活动.
- [流动GPT](https://flowgpt.com/) ——33K+成员. 100K+提示横跨ChatGPT,DALL-E,稳定扩散,克劳德.

### 编辑

- [r/Prompt工程设计](https://reddit.com/r/PromptEngineering) 专门用于迅速制作技巧和讨论。
- [r/乍得](https://reddit.com/r/ChatGPT) -10M+成员。 ChatGPT用户和即时共享的主要中枢.
- [r/ 当地LLAMA](https://reddit.com/r/LocalLLaMA) ——高技术界在当地运行开源有限责任公司。
- [r/克劳代艾](https://reddit.com/r/ClaudeAI) ——Anthropic's Claude社区:即时分享,API提示,模型比较.
- [r/机械学习](https://reddit.com/r/MachineLearning) ——面向学术的ML研究讨论.
- [r/开放AI](https://reddit.com/r/OpenAI) ——OpenAI产品与API讨论.
- [r/稳定分配](https://reddit.com/r/StableDiffusion) ——450K+成员进行AI艺术提示和工作流程.
- [r/ChatGPTPromptGenius (英语).](https://reddit.com/r/ChatGPTPromptGenius) ——35K+成员共享和提炼提示.


### 论坛和平台

- [OpenAI 开发者社区](https://community.openai.com/) ——API帮助官方论坛,最佳做法,项目共享.
- [拥抱面部社区](https://huggingface.co/) ——开源AI协作枢纽.
- [Deplearning.AI社区](https://community.deeplearning.ai/) - 为学习者举办论坛,讨论课程和AI职业。
- [减错](https://www.lesswrong.com/) 关于AI能力和安全的深入技术职位。
- [AI 对齐论坛](https://www.alignmentforum.org/) ——专项调整研究讨论.
- [锡维泰](https://civitai.com/) ——Generative AI创建者平台,用于共享模型,LORAS,和提示.

### GitHub 组织

- [兰彩](https://github.com/langchain-ai) ——开源LLM应用框架. 100K+恒星. 星报.
- [提示板](https://github.com/promptslab)  - 基因模型 − 快速工程 → LLMS 
- [拥抱的脸](https://github.com/huggingface) ——中央枢纽:变形器,迪夫用户,数据集,TRL.
- [DSPY (斯坦福 NLP) (德语).](https://github.com/stanfordnlp/dspy) ——壮大社区,实现系统即时优化.
- [开放AI](https://github.com/openai) ——开源模型,基准,工具.

---

<!-- AUTORESEARCH-START -->
## 自主研究和自我改进代理人
> 自定义 [真棒的自动研究](https://github.com/alvinunreal/awesome-autoresearch) · 最后同步:2026-10-03

### 一般目的后裔

- [Kayba-ai/再矫正改进](https://github.com/kayba-ai/recursive-improve) ——递归自我改进框架 特工捕捉执行痕迹,分析故障模式,并应用目标固定的保存或回转评价.
- [vukrosic/自动研究](https://github.com/vukrosic/auto-research) ——只用于开放自主AI研究实验室的Docs控制平面——基于文件的人类方向和代理执行操作模型.
- [研究/自动研究](https://github.com/uditgoenka/autoresearch) ——克劳德代码技能,将自动研究归纳为软件,文件,安全,运输,调试等可测量目标的可重复使用的循环.
- [leo-lilinxiao/代码自动研究](https://github.com/leo-lilinxiao/codex-autoresearch) ——代码本地自动研究技能,具有恢复支持,课跨运行,可选的平行实验,以及特定模式的工作流程.
- [Junjunjunbong/研究-开发](https://github.com/junjunjunbong/research-loop) ——自动研究风格的Codex和Claude Code的Agent Skill,具有决定力的跑者,计划-hash批准,孤立的Git工作树,权威的度量评价,以及仅附图的实验分类账.
- [谢玉来/斯特尔](https://github.com/xieyulai/steer) ——治理实验框架,其中编码代理编辑训练代码并运行回合,同时任务,计分员,证据保持不变.
- [种子AI/Thoth(美国)](https://github.com/SeeleAI/Thoth) ——Dashboard-First Claude Code和Codex运行时间用于自动研究,有耐用运行,锁定的工作项目,可见的分类账,以及可复审的判决.
- [超小型/超小型自动研究](https://github.com/supratikpm/gemini-autoresearch) - 双子体CLI技能,将自动研究普及到任何可衡量的目标。 双子座本地化:将Google搜索定位作为环内部的现场验证源,真实的无头夜模式通过-yolo-prompt,和1M令牌上下文. 通过.代理/技能/在反重力IDE工作。
- [davebcn87/皮-自动研究](https://github.com/davebcn87/pi-autoresearch) — `pi` 扩展加仪表板,用于持续的实验循环,活度度度量,信心跟踪,以及可重复的自动研究会话.
- [驱动线研究/自动研究-密码](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude 代码插件/技能端口 `pi-autoresearch`,具有清洁实验-loop工作流程和混凝土生物力学案例研究.
- [灰色黑发/自动折叠文本](https://github.com/greyhaven-ai/autocontext) ——闭路控制平面,用于重复的剂检改进,具有评价,持续的知识,舞台验证,可选蒸馏到更便宜的本地运行时间.
- [Necmttn/ 轴](https://github.com/Necmttn/ax) —— AI编码剂的局部回转循环:捕捉会话痕迹,将反复的摩擦变成建议,并跟踪被接受的修补作为实验.
- [日米利诺维奇/目标-md](https://github.com/jmilinovich/goal-md) ——将自动研究归纳为 `GOAL.md` 用于重置的图案,其中制剂必须首先构建可测量的健身功能,然后才能优化。
- [James-s-tayler/懒惰-开发者](https://github.com/james-s-tayler/lazy-developer) ——克劳德代码技巧,以GOAL.md为引擎,对优化目标(覆盖,测试速度,构建速度,复杂性,LOC,性能)的先后顺序进行自动研究. 支持独立和拉尔夫模式的多事件执行.
- [可变状态/自动研究](https://github.com/mutable-state-inc/autoresearch-at-home) ——上游自动研究的合作叉,增加了实验要求,共享最佳配置同步,假说交换,以及许多单GPU代理体的群态协调.
- [zkarimi22/自动研究-任何东西](https://github.com/zkarimi22/autoresearch-anything) ——普及自动研究 **任何可衡量的衡量标准** ——系统提示,API性能,登陆页,测试套件,配置调谐,SQL查询. "如果能测量,可以优化".
- [Entrpi/自动研究- 各地](https://github.com/Entrpi/autoresearch-everywhere) ——跨平台扩展自动检测硬件配置并启动循环. 自动研究的"格鲁和概括"一半.
- [申兰湖/ADS](https://github.com/ShengranHu/ADAS) — **代理系统自动化设计** ——ICLR 2025 (英语). Meta -agents通过代码编程来发明小说代理架构.
- [马克西姆·罗贝恩斯/自己_改进_编码_代理人](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **中美洲一体化体系**:自我改进编码 编辑自己密码库的特工 ICLR 2025讲习班论文,演示脚手架水平自我改进编码基准.
- [Peterskoett/自我改进代理人](https://github.com/peterskoett/self-improving-agent) ——具有反思和元学习周期的替代性自我改进代理架构.
- [元发/高棉](https://github.com/metauto-ai/HGM) — **赫克斯利-格德尔机器** 为编码代理——通过元级优化对SWE-bench性能进行自我改进.
- [热巴艾/热巴](https://github.com/gepa-ai/gepa) — **GEPA(遗传-帕雷托)** ——ICLR 2026口述. 反映迅速演变,在基准上超过RL(GPRO)。 利用自然语言反射来优化任何文本参数与任何度量参数。
- [气象/气象技术](https://github.com/sentient-agi/EvoSkill) ——编码代理的自动技能发现:根据基准,从故障的轨迹发展出可重复使用的技能和提示,支持Claude Code,Codex CLI,OpenCode,OpenHands,和Goose.
- [塞帕先生/自动演变](https://github.com/MrTsepa/autoevolve) ——GEPA启发自玩的自动研究:突变代码策略,评价头对头,率与Elo/Bradley-Terry,来自Pareto前线的分支. 特工读取了目标突变的痕迹 克洛德密码技术
- [HKUDS/法律小组](https://github.com/HKUDS/ClawTeam) ——自动研究的特工群情报——产出平行的GPU研究方向,在物剂间分配工作,汇总结果.
- [管弦乐研究/AI-研究-SKILLS](https://github.com/Orchestra-Research/AI-Research-SKILLs) ——综合技能库,包括自动研究管弦乐与双室架构(内优化+外合成).
- [韦科AI/Aideml](https://github.com/WecoAI/aideml) — **AIDE 数据交换系统**:树搜索ML工程代理,通过迭代代码生成和评价,自主改进模型性能.
- [韦科.艾](https://weco.ai) — **韦可**: 具有可观察性,实验跟踪,以及管理运行的AIDE的云平台——将自动搜索循环带入生产.

### 研究代理系统

- [瞄准板/自动研究法](https://github.com/aiming-lab/AutoResearchClaw) ——端到端的研究管道,将一个话题转化为文献审查,实验,分析,同行评审,以及纸质草稿;范围比自动研究要广,但显然属于同一分支.
- [露天/律师](https://github.com/OpenLAIR/dr-claw) ——开源研究工作空间,设有相继的构想对纸管和集成自动研究工具包.
- [OpenRaiser/ 纳诺研究](https://github.com/OpenRaiser/NanoResearch) ——端对端自主研究引擎,负责计划实验,生成代码,在当地或SLURM上运行工作,分析真实结果,并以这些产出为基础撰写论文.
- [高山公园/韩国](https://github.com/kaust-ark/ARK) — **ARK(自动研究包)**: 想法+会场 → 纸质管道 管弦乐 6个代理 – 提案分析,文献搜索,Slurm实验,LaTeX起草,迭代同行评审. 通过CLI,网络仪表板或Telegram控制.
- [Wanshuiyin/Auto-claude-code-研究-睡眠](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) ——Claude Code和其他代理商的Markdown-first研究工作流程,以自主文献审查,实验,纸质迭代,跨模型批判为中心.
- [天狼星/自动科学](https://github.com/skyllwt/AutoSci) ——维基百科中以克洛德代码为主的全生命周期研究平台,实现卡纳西的LLM-维基愿景. 20+技能覆盖全循环:摄入 想法 新颖检查 实验设计/运行/eval 写纸. 研究状态生活在结构化的知识wiki中,并带有互动图.
- [西比尔-研究小组/自动研究-西比尔系统](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) ——完全自主的AI科学家基于克劳德代码,具有明确的自动研究线条,多代理研究迭代,GPU实验执行,以及自演的外环.
- [wjc2830/Easy-AutoResearch- for-Deeplearning (中文(简体) ).](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) ——Claude Code技巧 操作一种自动研究风格的,人性化的深层学习循环,跨越六个角色,版本化实验,以及证据检查完成.
- [Deimehmdt/自动研究员](https://github.com/eimenhmdt/autoresearcher) ——早期用于科学工作流程自动化的开源软件包,目前以文献审查生成为中心,追求更广泛的自主研究.
- [超空间ai/agi](https://github.com/hyperspaceai/agi) ——分布式,对等研究网络,由自主代理进行实验,八卦发现,维护CRDT领导板,并将结果存档给GitHub,跨越多个研究领域.
- [人类 -- -- 机构 -- -- 协会](https://github.com/Human-Agent-Society/CORAL) — **科拉尔**: 自主的多剂演化,用于无限制的发现([arXiv:2604.01658 (中文(简体) ).](https://arxiv.org/abs/2604.01658)) (中文(简体) ). 具有共享持续内存,同步执行,以及基于心跳的干预功能的长期运行代理; SOTA 执行10项数学/算术/系统任务.
- [萨卡纳艾/AI-科学家](https://github.com/SakanaAI/AI-Scientist) — **AI科学家**:第一个全自动科学发现综合系统. 从思想一代到纸质写作,人类监督很少.
- [萨卡纳艾/AI-科学家v2](https://github.com/SakanaAI/AI-Scientist-v2) ——通过代理树搜索,在讲习班一级自动科学发现. 从 v1 中删除模板依赖性, 将整个研究领域概括化 。
- [AweAI-团队/科学家](https://github.com/AweAI-Team/AiScientist) — **科学家**: 具有分级管弦和File-as-Bus协调的长视ML研究实验室——工作空间文件充当持久的记录系统. 在固定计算/时间预算下驱动自主的纸张复制(Paper Bench)和竞争风格的MLE-Bench迭代循环. ().[rXiv 2604.13018 (韩语)](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI-研究员](https://github.com/HKUDS/AI-Researcher) ——新IPS2025论文. 完全端对端研究自动化:假说 实验 手稿 同行评审. 生产版本 [科学](https://novix.science/chat).
- [openags/自动研究](https://github.com/openags/Auto-Research) — **打开AGS**: Orchestrates a team of AI agents 贯穿整个研究生命周期——点燃评论,假说生成,实验,手稿编写,同行评审.
- [塞缪尔·施米德格尔/代理实验室](https://github.com/SamuelSchmidgall/AgentLaboratory) ——端对端自主研究工作流程:思想 文献评论 实验 报告. 支持自主模式和副驾驶模式。
- [探员Rxiv](https://agentrxiv.github.io/) ——合作自主研究框架 代理实验室共享一个预印服务器,以迭代地借鉴对方的工作.
- [Jinheon Baek/研究员](https://github.com/JinheonBaek/ResearchAgent) ——与LLMs相比,迭代研究思想产生. 多代理审查与反馈循环.
- [du-nlp-lab/MLR-副驾驶](https://github.com/du-nlp-lab/MLR-Copilot) ——自主的ML研究框架——产生思想,实施实验,分析结果.
- [MAS Works/ML-代理服务器](https://github.com/MASWorks/ML-Agent) ——强化自主ML工程的LLM剂. 从试验和错误中学习提高模型性能.
- [Pouria Rouzrokh/Latte审查](https://github.com/PouriaRouzrokh/LatteReview) —低码 Python 软件包 **自动系统文献审查** 通过人工智能的代理。
- [液态LM/液态LM](https://github.com/LitLLM/LitLLM) ——AI动力文学评论助理使用RAG进行学术写作中准确,结构完善的相关工作科.
- [代理实验室](https://agentlaboratory.github.io/) ——三阶段研究管道:文学评论 ——实验 ——报告撰写,每个阶段都有专门的代理.
- [快乐的君/写驱动的自动研究](https://github.com/happyhappy-jun/writing-driven-autoresearch) - 自动研究式的拉带,从第一分钟起保留一份提交文件,并驱动草案中各项主张的每一个试验,循环修改 措施 核实 修订。 排名第1位 [拉尔夫松@ ICML 2026](https://luma.com/hjuo7auc) (原始内容存档于2018-09-21). automatic-research hackathon.
- [自动研究- 事实/ 边](https://github.com/AutoResearch-Factory/Agon) ——端对端研究管弦乐器基于一个基石原则,即"即时经济"(可重复使用环路,而非一次性提示),加上五个支持规则;运行科学家/编码/审计环路,跨越10+学科,与自动研究相同的可重复使用-loop线条,但缩放为完整的研究程序.

### 平台端口和硬件叉

- [甘弗朗科皮亚纳/openclaw-自动研究](https://github.com/gianfrancopiana/openclaw-autoresearch) – OpenClaw port of pi-autoresche; 任意优化目标的自主实验循环,并带有统计自信评分.
- [miolini/自动研究-macos](https://github.com/miolini/autoresearch-macos) ——广泛采用macOS叉,为苹果硅 / MPS 调整上游自动研究,同时保留原环形.
- [计算/自动研究-mlx](https://github.com/trevin-creator/autoresearch-mlx) ——保持上游固定预算的MLX-内置苹果硅端口 `val_bpb` 循环,同时完全删除 PyTorch/CUDA 依赖。
- [jsegov/自动研究-win-rtx](https://github.com/jsegov/autoresearch-win-rtx) ——Windows-native RTX叉专注于消费的NVIDIA GPU,有明确的VRAM地板和实用的桌面设置路径.
- [iii-hq/n-自动研究](https://github.com/iii-hq/n-autoresearch) ——多GPU自动研究基础设施,有结构化的实验跟踪,适应性搜索策略,碰撞恢复,以及围绕经典的可查询编组. `train.py` 循环。
- [lucasgelfond/自动研究-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) ——浏览器/WebGPU端口允许代理生成训练代码,在浏览器中运行实验,并在没有Python设置的情况下将结果反馈回循环.
- [土豆/自动研究图](https://github.com/tonitangpotato/autoresearch-engram) - 叉带 **持续的认知记忆** ——频率加权检索跨会场知识,提高实验连续性.
- [Colab/ Kaggle T4 端口](https://github.com/karpathy/autoresearch/issues/208) ——适应免费T4 GPU(Google Colab / Kaggle)的自动研究,成本为零,本地设置为零. 密钥更改:闪光注意3 → PyTorch SDPA,去除H100只内核依赖.
- [ArmanJR-Lab/自动自动研究](https://github.com/ArmanJR-Lab/autoautoresearch) - Jetson AGX Orin港口,装有 **导演** ——作为"创造导演"的Go二进制,将新颖性(arxiv papers + DeepSeek Reasoner)注入循环,以逃避本地迷你. 包括多实验比较(基线与导演制导),并附有详细的停顿分析.

### 特定领域适应

- [马特普鲁萨克/自动研究-遗传学](https://github.com/mattprusak/autoresearch-genealogy) ——将自动研究模式应用于家族学,利用结构化的提示,存档指南,源码检查,以及金库工作流程来迭代扩展和验证家族史研究.
- [Archishman Sengupta/自动语音](https://github.com/ArchishmanSengupta/autovoiceevals) ——使用对抗性调用器加上保持或反转的即时编辑,使Vapi,Smallest AI,和11Labs的语音AI代理更加硬化.
- [chrisworsey55/atlas-gic (英语).](https://github.com/chrisworsey55/atlas-gic) ——对交易代理商应用自动研究保持或回转循环,优化提示和组合组合配合滚动的夏普比而不是模型丢失.
- [右-AI/自动内核](https://github.com/RightNow-AI/autokernel) ——将自动搜索循环应用于GPU内核优化:配置瓶颈,编辑一个内核,基准,保存或还原,重复.
- [埃利奥特谢/自动手枪](https://github.com/ElliotXie/autozyme) ——对CPU侧科学软件应用自动研究保存或反转循环的多代理框架:剖析一个目标函数,生成一个优化候选,在保留原始输出的同时以速度为基准,保持或还原,重复.
- [代理分析/自动研究-增长](https://github.com/Agent-Analytics/autoresearch-growth) ——将自动研究应用于登陆页定位和A/B测试候选者,使用分析快照和测量实验结果来播种后续各轮.
- [Rkcr7/ 自动研究库](https://github.com/Rkcr7/autoresearch-sudoku) ——增强自动研究工作流程 AI代理迭代重写和基准 Rust sudoku 解析器,最终在硬基准集上击败领先的人造解析器.
- [jeongph/自动扫描](https://github.com/jeongph/autospec) ——阅读自然语业务规则,自主搭建春靴服务,通过保持-或回转循环进行测试. 用 Gradle 构建 + J Unit XML. 119 线骨架到 950 线在 5 个周期内进行评估.
- [vlasenkoalexey/tpu (法语)_业绩_自动研究_维基百科](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) ——在v6e硬件上对TPU模型性能(MFU / acids-per-sec)应用自动研究保存或反转循环:配置文件每个通过XProf MCP服务器运行,每个实验都进行一个模型码的更改,并相对于测量的MFU保持或返回. 将循环与Karopathy风格的LLM wiki对齐,用于域内知识和每个实验优化痕迹;包括Llama3-8B和Qune3-8B的案例研究,跨越JAX和火炬轴道.

### 评价与基准

- [snap-stanford/ML 代理奔驰](https://github.com/snap-stanford/MLAgentBench) 用于评估人工智能代理人的ML实验任务的基准套件。 从CIFAR-10到BabyLM的13项任务.
- [OpenAI/mle-bench 系统](https://github.com/openai/mle-bench) ——OpenAI衡量AI代理在ML工程中表现如何的基准.
- [chchenhui/mlrbench (英语).](https://github.com/chchenhui/mlrbench) ——MLR-Bench:评价人工智能代理人进行开放式的ML研究. 来自NeurIPS/ICLR/ICML讲习班的201项任务.
- [格施泰因拉布/ML-奔驰](https://github.com/gersteinlab/ML-Bench) 在存储器一级代码上评价LLM和代理执行ML任务.
- [THUDM/Bench代理公司](https://github.com/THUDM/AgentBench) ——8个不同环境中的LLM-as-Agent评价综合基准. ICLR 2024 (英语).

### 相关资源

- [ai-agents - 2030/asome - 深度研究 - agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) ——深层研究代理论文及系统解析清单.
- [年轻的DubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) 关于LLM剂优化方法的论文。
- [伏尔特代理人/出色的代理人文件](https://github.com/VoltAgent/awesome-ai-agent-papers) ——2026年的Curated AI代理论文——代理工程,内存,评价,工作流程,以及自主系统.
- [Masamasa59/ai-ai-agent-papers纸](https://github.com/masamasa59/ai-agent-papers) ——AI代理研究论文每两周通过自动arxiv搜索更新一次,并进行精选.
- [tmgthb/自动代理](https://github.com/tmgthb/Autonomous-Agents) ——自主代理研究论文,每日更新.
- [HKUST - 知识Comp/优异LLM - 科学-发现](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) ——EMNLP 2025关于科学发现中的LLMs的调查.
- [开源软件国际化之简体中文组](https://github.com/openags/Awesome-AI-Scientist-Papers) ——AI科学家/机器人科学家论文集.
- [(原始内容存档于2018-06-28). activicscience.github.io](https://agenticscience.github.io/) ——调查:"从科学AI到代理科学:自主科学发现调查".
- [dspy.ai/GEPA (英语).](https://dspy.ai/api/optimizers/GEPA/overview/) ——GEPA的DSPy集成反应快速优化复合AI系统.
- [OpenAI Cookbook:自演代理人](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) ——用GEPA风格的反射演进为自主代理再培训的厨师手册.
- [WecoAI/ 令人惊叹的自动研究](https://github.com/WecoAI/awesome-autoresearch) ——可验证痕迹和进度图的AutoResearch使用案例解析列表,按域(LLM训练,GPU内核,语音代理,交易等)组织.

<!-- AUTORESEARCH-END -->

---

## 如何贡献

我们欢迎为这份名单作出贡献! 在发言之前,请花点时间回顾一下 [捐款准则](contributing.md)这些准则将有助于确保你们的贡献符合我们的目标,并达到我们的质量和相关性标准。

**我们要找的是:**
- 新的高质量文件、工具或资源,简要说明其重要性
- 现有条目的更新(断开链接,过时信息)
- 对星数、定价或模型细节的更正
- 翻译和无障碍性改进

**质量标准:**
- 应积极维护所有工具(在过去6个月内更新)
- 论文应来自同行评审场所或有大量社区通过
- 数据集应向公众开放
- 请列入一行说明,说明资源为何宝贵

谢谢你对这个项目的关心!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>维护者 <a href="https://promptslab.github.io">提示标签</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">开始重播</a> 如果你觉得有用的话!</sub>
</p>
