<h2 align="center">出色的快速工程</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  包括文件、工具、模型、API、基准、課程、社群等,
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

## 從這裡開始

新的啟動工程? 遵循此路徑 :

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **學習基本** → [ChatGPT 開發者的快速工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (自由,~90分鐘)
2. **讀取指南** → [DAIR的快速工程指南。 阿爾及利亞](https://www.promptingguide.ai/) (開源,全面)
3. **研究提供者文件** → [OpenAI 即時工程指南](https://platform.openai.com/docs/guides/prompt-engineering) · [Anthropic 快速工程指南](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **了解球場的方向** → [Anthropic: 人工智能代理的有效背景工程](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **看研究** → [即時報告](https://arxiv.org/abs/2406.06608) ——58+的分类法,1500+论文的提示技术.

---

## 表格

- [文件](#papers)
  - [主要調查](#major-surveys)
  - [快速优化與自動提示](#prompt-optimization-and-automatic-prompting)
  - [快速壓縮](#prompt-compression)
  - [预付款](#reasoning-advances)
  - [內文学习](#in-context-learning)
  - [代理提示和多代理系統](#agentic-prompting-and-multi-agent-systems)
  - [多式联运提示](#multimodal-prompting)
  - [结构化的輸出和格式控制](#structured-output-and-format-control)
  - [快速注射和安全](#prompt-injection-and-security)
  - [即時工程的應用程式](#applications-of-prompt-engineering)
  - [文字到影像產生](#text-to-image-generation)
  - [文字對音樂/音效世代](#text-to-musicaudio-generation)
  - [基本文件(2024年前)](#foundational-papers-pre-2024)
- [工具和代碼](#tools-and-code)
  - [快速管理和測試](#prompt-management-and-testing)
  - [LLM 評估工具](#llm-evaluation-tools)
  - [代理框架](#agent-frameworks)
  - [快速优化工具](#prompt-optimization-tools)
  - [紅色隊伍和快速安全](#red-teaming-and-prompt-security)
  - [MCP( 模式背景协议)](#mcp-model-context-protocol)
  - [Vibe 編碼與 AI 編碼助理](#vibe-coding-and-ai-coding-assistants)
    - [基于 CLI 的編碼代理程式](#cli-based-coding-agents)
    - [AI 碼編輯器/IDE](#ai-code-editors--ides)
    - [IDE 延伸/ 插件](#ide-extensions--plugins)
    - [AI 編碼平台/ 云代理](#ai-coding-platforms--cloud-agents)
    - [開源碼代理框架](#open-source-coding-agent-frameworks)
  - [其他显著的仓库](#other-notable-repositories)
- [API( API )](#apis)
- [数据集和基准](#datasets-and-benchmarks)
- [模型](#models)
- [AI 內容偵測器](#ai-content-detectors)
- [书籍](#books)
- [课程](#courses)
- [教學和指南](#tutorials-and-guides)
- [影片](#videos)
- [社群](#communities)
- [自主研究和自我改善代理](#autonomous-research--self-improving-agents)
- [如何捐款](#how-to-contribute)

---

## 文件
📄

### 主要調查

- [即時報告: 即時技術的系统性調查](https://arxiv.org/abs/2406.06608) [2024] — 最全面的調查:58份文字和40份多式联运的分类法, 与OpenAI,微软,谷歌,斯坦福共同撰稿.
- [大語言模型的即時工程:技术和應用性](https://arxiv.org/abs/2402.07927) [2024]——44种跨應用區域的技術,并附有每任务性能概要.
- [不同 NLP 工作的快速工程方法調查](https://arxiv.org/abs/2407.12994) [2024] — 39 催化方法,
- [自動即時工程測試:优化视角](https://arxiv.org/abs/2502.11560) [2025] ——正式化自動PE方法為离散/连续/hybrid优化問題.
- [大語模式的高效快速方法:](https://arxiv.org/abs/2404.01077) [2024] —— 以效率為导向的促進(壓縮,优化,APE)的調查,以降低计算和耐力.
- [經過奇幻迷宮的導航:思維理性的鏈索調查](https://arxiv.org/abs/2309.15402) [2023, ACL 2024]——系统化CoT測試.
- [解密鏈子、樹和思想圖](https://arxiv.org/abs/2401.14295) [2024] ——多速率推理地形的统一框架.
- [以目標為目的的大語模式快速工程:調查](https://arxiv.org/abs/2401.14043) [2024] — 聚焦於围绕明确任務目標设计的提示.
- [走向理性年代:](https://arxiv.org/abs/2503.09567) [2025] ——在o1/R1时代的模型中,区分了Short CoT中的Long CoT.

### 快速优化與自動提示

- [OPRO: 以大語模式為优化者](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] —— 使用 LLMs , 通过 meta- primts 做為优化器; 优化的 point , 在 BBH 上以 高达 50% 的 perform 超過 人類 設計 。
- [DSPY: 編譯宣傳語言模型 呼叫自我改善管道](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — 自動即時优化的 LLMs 编程框架( 不提示) 。
- [MIPRO: 优化多樣語言模擬程式的指令與演示](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] —— 拜仁优化多階段 LM 程序;最高13%的精度增益.
- [文字格度: 透過文字自動「 分別 」](https://arxiv.org/abs/2406.07496) [2024] ——把复合AI系統當做有文字回應的計算圖,當作梯度. 出版于"自然".
- [宣告](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] — 演化算法方法, 用于自動优化离散的提示 。
- [AI 系統的元提示](https://arxiv.org/abs/2311.11482) [2023, ICLR 2024 Worker]——使用類別理論正式化的示例不可知識结构模板.
- [即時工程( PE2)](https://arxiv.org/abs/2311.05661) [2024, ACL Results] —— 使用LLMs來發表自己,
- [大型語言模型是人級即時工程師](https://arxiv.org/abs/2211.01910) [2022] – 自動透過APE快速產生.
- [硬提示易制:基于梯度的視窗优化以快速調整](https://arxiv.org/abs/2302.03668) [2023]
- [SPO:自我監控的快速优化](https://arxiv.org/abs/2502.06855) [2025] — 以先前方法成本的1-6%的竞争力。

### 快速壓縮

- [LLMLingua-2: 高效和忠誠的數據分解](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] — 3x–6x 速度比 LLMLingua 更快, 使用GPT-4 資料蒸馏.
- [朗姆林瓜](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] – 長環境的問題感應壓縮; 21.4% 的性能助推, 代碼减少 4x 。
- [大語言模型的快速壓縮: 測試](https://arxiv.org/abs/2410.12388) [2024] ——全面調查硬軟即時壓縮方法.

### 预付款

- [优化 LLM 測試時間計算](https://arxiv.org/abs/2408.03314) [2024] —— 顯示最佳測試時間計算分配可以超越14x大模型.
- [DeepSeek-R1: 通过強化學習刺激LLMS的理性能力](https://arxiv.org/abs/2501.12948) [2025]——纯RL訓練推理模型匹配o1;開源與蒸馏變體.
- [s1: 簡單的測試時間縮放](https://arxiv.org/abs/2501.19393) 透過「預算強迫」,
- [理由語言模型:藍圖](https://arxiv.org/abs/2501.11223) [2025]——系统框架整理推理LM方法.
- [解密 LLMs 中的長思考鏈](https://arxiv.org/abs/2502.03373) [2025] ——分析现代推理模型中的長篇COT行為.
- [思考圖: 解析 LLMS 的問題](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] — Models thoughts as 任意圖; 在排序上比 ToT 提高 62% 。
- [思考之樹:有意用 LLMS 解決問題](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023]——樹林搜索超越推理路径.
- [所有的想法](https://arxiv.org/abs/2311.04254) [2023] ——通过MCTS整合COT,TOT和外部解析器.
- [思潮的滑石](https://arxiv.org/abs/2307.15337) [2023] – 通过答案骨架產生并行解碼,可達2.69x加速.
- [大語言模式中引發思想的引力](https://arxiv.org/abs/2201.11903) [2022] ——奠基煤公司论文.
- [自我一致性](https://arxiv.org/abs/2203.11171) [2022] ——综合多种COT输出可靠性.
- [大型語言模型是零熱理性器](https://arxiv.org/abs/2205.11916) [2022]——"讓我們一步一步想一想"是零拍推理扳機.
- [React: 在語言模型中协同理性與演員](https://arxiv.org/abs/2210.03629) [2022] ——互离推理与工具使用.

### 內文学习

- [多點文學](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight] —— 重大收益 将ICL放大到成百上千例;引入强化和無監控的ICL.
- [在多模式基底模型中學習多熱的內文](https://arxiv.org/abs/2405.09798) [2024] — 在14個數據集中把多式ICL放大到~2,000例.
- [重新思考示威的作用:什麼讓內文學習有效?](https://arxiv.org/abs/2202.12837) [2022]
- [非常有序的提示和找到他們的地方](https://arxiv.org/abs/2104.08786) [2021] ——克服少數射擊即時命令敏感.
- [使用前校准: 提高語言模型的少點熱性能](https://arxiv.org/abs/2102.09690) [2021]

### 代理提示和多代理系統

- [代理大語言模型: 調查](https://arxiv.org/abs/2503.23037) [2025] ——以推理,演技,互动能力來全面調查組織代理LLMS.
- [基于大語言模型的多代理:進步與挑戰調查](https://arxiv.org/abs/2402.01680) [2024]——涵盖剖面分析,交流,以及生长机制.
- [多方代理合作机制:](https://arxiv.org/abs/2501.06322) [2025] ——回顾基于LLM的多代理系統的辯論与合作策略.
- [自動Gen: 通过多代理對話開啟下Gen LLM 應用程式](https://arxiv.org/abs/2308.08155) [2023] ——微软基础多代理框架文件.
- [ToolLLM: 促进大語模組到 16,000+ Real- World API](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] — Trains LLMs使用大型的真實世界API收藏.
- [SWE-bench:語言模型能解決真實世界的GitHub問題嗎?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] - 基准驅動代理編碼進度 。
- [Bench探員: 評估LLMS為代理](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024]——跨越8個環境的基准.
- [PAL: 程序辅助語言模型](https://arxiv.org/abs/2211.10435) [2023] — 卸载到編碼解譯器。

### 多式联运提示

- [在多式大語言模型中視覺提示:](https://arxiv.org/abs/2409.15310) [2024] — MLLMs 的影像提示方法第一次全面調查.
- [在 TPT-4V 中設定 Mark 啟動 unleashes 特殊視覺定位](https://arxiv.org/abs/2310.11441) [2023]——視覺標記大幅提升視覺地面.
- [愿景-語言中多种大型語言模式的综合调查和指南](https://arxiv.org/abs/2411.06284) [2024]——封面文字,影像,影像,音效MLLM.
- [語言模型中的多式串引](https://arxiv.org/abs/2302.00923) [2023]
- [從即時工程到即時工艺](https://arxiv.org/abs/2411.13422) [2024] — 即時"手術"的設計-研究视角,用于傳播模型.

### 结构化的輸出和格式控制

- [讓我自由說話? 研究格式限制对LLMS性能的影响](https://arxiv.org/abs/2408.02442) [2024] ——考察把产出限制在结构化格式上如何影響推理性能.
- [批次提示: 用 LLM API 高效推測](https://arxiv.org/abs/2301.08721) [2023]
- [結構提示: 放大連結中學到1000例](https://arxiv.org/abs/2212.06713) [2022]

### 快速注射和安全

- [使快速注射和防守正规化并设定基准](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024] — 正式框架,
- [指令分級: 訓練專業指令排序](https://arxiv.org/abs/2404.13208) [2024] (中文(简体) ). OpenAI的注射防守優先訓練.
- [Dojo探員: 快速注射攻擊與防守的动态環境](https://arxiv.org/abs/2406.13352) [2024] – 實際代理設計基准.
- [InjecAgent: 工具集成 LLM 代理中间接快速注射的基准](https://arxiv.org/abs/2403.02691) [2024]
- [區分( S) : 防急注射與優待优化](https://arxiv.org/abs/2410.05451) [2024] (中文(简体) ). —— DPO 基于防守.
- [WASP: 建立網絡代理安全防急注射基准](https://arxiv.org/abs/2504.18575) [2025] ——网络/電腦使用代理的安全基准.
- [好熱的監獄破案](https://www.anthropic.com/research/many-shot-jailbreaking) 根據創用CC授權使用
- [《憲法AI》:AI回馈的無害性](https://arxiv.org/abs/2212.08073) [2022]
- [忽略前一個提示: 語言模型的攻擊技術](https://arxiv.org/abs/2211.09527) [2022]
- [人造情報及網路安全:2024-2025年有記錄的風險、企業護衛和新兴威脅](https://www.ijfmr.com/research-paper.php?id=62200) [2025] ——以实际治理即時模式调查真正的即時注射事件.

### 即時工程的應用程式

- [重寫及回應:讓大語模組為自己問更好的問題](https://arxiv.org/abs/2311.04205) [2023]
- [多語法律判决的快速法律工程](https://arxiv.org/abs/2212.02199) [2023]
- [與副駕駛對話:探索解決 CS1 問題的即時工程](https://arxiv.org/abs/2210.15157) [2022]
- [通用感知提示可控安裝對話框產生](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES: 啟動語言模型, 用于社會對話](https://arxiv.org/abs/2302.03269) [2023]
- [使用變形器編碼器與即時學習的醫學影像分類:系統審查](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: 不同文件的检索增生框架](https://arxiv.org/abs/2506.10380) [2025]——基于SQL的界面保留多跳查的表格結構.

### 文字到影像產生

- [文字到圖像產生的快速變更器的分类](https://arxiv.org/abs/2204.13988) [2022]
- [快速工程文字到圖像模組的設計指南](https://arxiv.org/abs/2109.06977) [2021]
- [使用 Latent 扩散模型的高分辨率影像合成](https://arxiv.org/abs/2112.10752) [2021]
- [DALL- E: 從文字建立影像](https://arxiv.org/abs/2102.12092) [2021]
- [研究扩散模型中的即時工程](https://arxiv.org/abs/2211.15462) [2022]

### 文字對音樂/音效世代

- [音樂LM: 從文字產生音樂](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music: 以分散模式產生文字到文字的音樂](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: 音效產生的語言建模方法](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio: 以快速增強的傳染模式生成文字至Audio](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### 基本文件(2024年前)

這些文件确立了現代即時工程所基于的核心概念:

- [語言模型是少數熱學者( GPT-3)](https://arxiv.org/abs/2005.14165) [2020年] — 顯示有數次射擊,
- [前置突擊: 最佳化 :](https://arxiv.org/abs/2101.00190) [2021]
- [參數效速成調整的調整力](https://arxiv.org/abs/2104.08691) [2021]
- [大型語言模型的快速編程: 超越少數Shot范式](https://arxiv.org/abs/2102.07350) [2021]
- [顯示您的工作 : 用語言模型計算的中途程式](https://arxiv.org/abs/2112.00114) [2021]
- [產生常識的刺激](https://arxiv.org/abs/2110.08387) [2021]
- [使預訓的語言模式更好 少拍的學者](https://aclanthology.org/2021.acl-long.295) [2021]
- [自動Prompt: 用自動產生提示從語言模型中啟動知識](https://arxiv.org/abs/2010.15980) [2020]
- [我們怎麼知道什麼語言模型知道?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [用 ChatGPT 增强快速工程的快速樣式表](https://arxiv.org/abs/2302.11382) [2023]
- [合成提示:為 LLMS 產生思緒串列演示](https://arxiv.org/abs/2302.00618) [2023]
- [進步提示: 語言模型的繼續学习](https://arxiv.org/abs/2301.12314) [2023]
- [接連啟示去除複雜的問題](https://arxiv.org/abs/2212.04092) [2022]
- [分解的提示: 解決複雜工作的方法](https://arxiv.org/abs/2210.02406) [2022]
- [ExpointChainer: 通过視覺編程串連大語言模型](https://arxiv.org/abs/2203.06566) [2022]
- [Ask me anything: 提示語言模型的簡單策略](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [提示 GPT-3 可靠](https://arxiv.org/abs/2210.09150) [2022]
- [第二,我們不要一步一步想! 零灼傷性](https://arxiv.org/abs/2212.08061) [2022]

---

## 工具和代碼
🔧

### 快速管理和測試

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **Promptfoo** | 開源的 CLI 用于測試、評估和紅色的 LLM 提示 。 YAML 設定、 CI/ CD 整合、 對戰測試 。 ~ 9K+ + QQ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | 解析 NLP LLM 很容易產生不同 NLP 工作提示的問題, 例如 GBT、 PaLM , 以及更多與 Superify 相關的 。 | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | 開源 LLM 發展者平台, | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | 版本 測試 監控每一個 快速和代理 強固的 evals 、 追蹤 和 回歸 集 | [Website](https://promptlayer.com/) |
| **Helicone** | 生产即時監控和优化平台. | [Website](https://helicone.ai/) |
| **LangGPT** | 结构化和元即時設計的框架。 10K+ + + + + | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | 建立、測試和比對LLM的視覺工具箱, | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | LLMs 的查詢語言, 使 複雜的即時邏輯可以編程 。 | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | 建立、測試和管理结构化 LLM 提示的平台。 | [Website](https://www.promptotype.io) |
| **PromptPanda** | 人工智能快速管理系统,以精简快速工作流程。 | [Website](https://promptpanda.io) |
| **Promptimize AI** | 瀏覽器延伸區以自動改善任何 AI 模型的使用者提示 。 | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | 基于 Web 的“ Prompt Engineering IDE ” , 用于迭代建立和運行提示 。 | [Website](https://promptmetheus.com) |
| **Better Prompt** | LLM 提示的測試套件 。 | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | 即時學習研究的開源框架。 | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | 建立、分享和使用自然語言提示的工具箱。 | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | 建立和维护 LLMS (微軟) 的 NPA 工具函式庫。 | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | 數量分析LLM強度的框架 | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | 管理 AI IDE 設定檔的自宿平台(. cursorrules, CLAUDE. md, 副駕駛指令. md) 。 Web UI, REST API, CLI, 以及30+ AI 編碼助理的聯合藍圖市場。 | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Visual AI 即時建構器會分解為12個語言區塊(作用、上下文、限制、示例等), ChatGPT/Claude/Gemini的瀏覽器延伸, 以及克勞德代碼代理的 MCP 伺服器 。 自由,開源。 | [Website](https://flompt.dev) |

### LLM 評估工具

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **DeepEval** | 包括RAG、代理和CI/CD集成的對話。 | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | 以知識圖為基礎的測試集產生器和 30+ 公尺的 RAG 評估 。 | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | LangChain的平台, | [Website](https://smith.langchain.com/) |
| **Langfuse** | 開源 LLM 的可觀性, 有追蹤性, 即時管理性, 以及人類的註解性 。 ~ 7K+ QQ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | 端到端AI評估平台,SOC2型II认证. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | 实时 LLM 監控漂流測試和追蹤。 | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | 評估及解釋LLM應用程式; | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | 依據基准評估代理商的目的(UK AISI)。 | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | 透過 dev 和產品生命周期來評估、測試和運送 LLM 應用程式 | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | 以YAML測試案例、回溯測試和產品監控等測試多步AI代理的CLI工具。 |[GitHub](https://github.com/hidai25/eval-view) |

### 代理框架

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | 最廣泛采用的 LLM 應用程式框架; LangGraph 新增基于圖的多步代理工作流程 。 ~100K+ /~10K+ + ⭐ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | 角色扮演 AI 代理管弦樂與 700+ 集成。 ~ 44K+ QQ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | 微软多代理對話框架. ~40K+ + + → | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | Stanford 的 LLMs 程序框架, 自動即時/ 重力优化 。 ~22K+ + ~ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | 官方代理框架 功能呼叫、看守和交換 ~10K+ + + + + + + + | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | 微軟的 AI 框架提供 M365 副駕駛的電源; C#, Python, Java. ~ 24K+ QQ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | RAG和代理能力的資料框架 。 ~40K+ + + → | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | 開源的 NLP 框架, 包含 RAG 和代理的管道架构 。 ~20K+ + + → | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | Python 代理框架與微秒即時 ~20K+ + + → | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | Hugging Face的最小化代碼中心代理框架(~1000 LOC). ~15K+ → QQ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | 使用 Pydantic 做結構驗證的型態安全代理框架 。 | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | TypeScript AI 代理框架 配有助手, RAG, 以及可觀察性 。 ~20K+ + + → | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | 和雙子星和谷歌云深度融合 | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | 具有深AWS集成的模型不可知框架. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | 基于節點的視覺代理建構器, 有拖放。 ~ 50K+ QQ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | 具有AI代理能力和400+集成功能的工作流程自动化. ~60K+ + → | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | 用工具使用的代理和RAG的代理工作流程全在一個後端。 | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | 多AI 具有100+LLM支持的代理框架,MCP集成,以及內置內存. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | 多提供者 AI 代理框架 | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | 將 100+ 工具連接到零設置的 AI 代理 。 | [GitHub](https://github.com/composiohq/composio) |

### 快速优化工具

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **DSPy** | 多重优化器( MIPROv2, Bootstrap FewShot, COPRO) , 用于自動即時調整 。 ~ 22K+ QQ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | 自動透過文字區分( Stanford) 。 ~ 2K+ QQ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | Google DeepMind 通过提示优化。 | [GitHub](https://github.com/google-deepmind/opro) |

### 紅色隊伍和快速安全

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | LLM 弱點掃瞄器, | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | Python 風險辨識工具, 用于自動紅色隊列 。 ~ 3K+ QQ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+脆弱性,10+攻击方法,OWASP Top 10支持. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | LLM I/ O 驗證的安全工具箱 。 ~ 2K+ QQ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | 用于對話系統的可編程監控器 。 ~ 5K+ QQ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | 定義严格的輸出格式( JSON schemas)以确保系統的可靠性 。 | [Website](https://www.guardrailsai.com) |
| **Lakera** | AI安全平台实时即時注射检测. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | 開源LLM安全評估,包括CyberSecEval. | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | 自動越獄樣本產生, 成功率大于90% 。 | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | 開源工具,用于检测和预防即時注射. | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "開源掃瞄器 運行150個攻擊探測器 試驗AI的特效 | [GitHub](https://github.com/agentseal/agentseal) |

### MCP( 模式背景协议)

MCP是由Anthropic(Nov 2024, 捐給Linux Foundation Dec 2025)開發的開放標準, 是的 **97M+月度 SDK 下載** 並被GitHub、Google及大部分主要AI提供商采用。

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **MCP Specification** | 核心协议规格與 SDK 。 ~ 15K+ QQ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | 官方實施: 抓取, 檔案系統, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | 建構 MCP 伺服器的高級 Pythonic 框架 。 ~ 5K+ QQ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | GitHub 的官方 MCP 伺服器, 用于 repo, 發行, PR, 以及 Action 互動 。 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | 10000+群組MCP伺服器解禁清單. ~30K+ + ~ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | MCP 伺服器提供特定版本的文件以减少密碼幻覺 。 | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | 變更域名以建立任何 GitHub repo 的遠端 MCP 伺服器 。 | [Website](https://gitmcp.io/) |
| **MCP Inspector** | MCP 伺服器發展的視覺測試工具 。 | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Vibe 編碼與 AI 編碼助理

> 🟢 = 開源 · 🔵 = 商業版 · 🟣 = 開源 + 商業版（開放核心，付費雲端/API）

#### 基于 CLI 的編碼代理程式

解析您的編碼庫并执行多步工作的終端本地代理工具 。

| 姓名 | 描述 | 類型 | 連結 |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Anthropic 的代理編碼 CLI; 理解完整的編碼基, 并通过自然語言執行複雜的多步工作 。 | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | OpenAI 的開源端碼編碼代理; 輕量级, 本地第一, 有沙盒代碼執行 。 ~68K+ + + + → | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | Google的開源端端機 AI 代理機, 擁有 1M-token 上下文視窗和 Google Search 定位 。 ~96K+ + → | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | 開源端機 AI 代理 优化了 Qwen3- Coder; 多 protocol 支援( OpenAI/ Anthropic/ Gemini APIS) , 1000 免費要求/ 天 。 ~ 21K+ QQ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | 端口的 AI 配對編程 深 Git 集成; 映射整個編碼基和自動承諾的變更 。 ~ 42K+ QQ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | 強大的開源 AI 編碼代理, 配有美麗的 TUI; 支持几乎所有的 AI 模型提供者 。 ~120K+ + → | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Block( Square/ Cash App) 的廣泛開源的 AI 代理; 安裝、 執行、 編輯、 用任何 LLM 做測試。 ~ 29K+ + QQ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | Charmbracelet 的光彩代理編碼代理, 支持多樣型, LSP 集成, 以及美麗的終端 UI. ~9K+ QQ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | 從 AWS 轉移到 Kiro CLI 的終端聊天經驗 。 | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | sourcegraph的代理編碼工具( Cody 繼承者); 工作跨越 CLI 和 IDE 。 | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains的 LLM 不可知編碼代理商 CLI(beta 2026);支持所有主要的模型提供者. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | 自動自動端口編碼代理,多提供LLM支持,40+工具,以及模組技能系統. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### AI 碼編輯器/IDE

獨立編輯器或有深度 AI 集成的 IDE 叉 。

| 姓名 | 描述 | 類型 | 連結 |
|:-----|:-----------|:----:|:----:|
| **Cursor** | 領導的 AI- 內生代碼編輯器( VS Code fork); 作曲家從自然語言, 代理多檔案編輯中產生整個應用程式 。 | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | AI-power IDE(VS Code fork),配有专有的Cascade代理和SWE-1.5型號;由Condition AI收购. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | Rust 有本地 AI 功能的高性能編輯器、 Zeta 編輯預測、 代理客戶端协议支援 。 ~ 77K+ QQ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | 從字节Dance(「真正的AI工程師」)提供自由的AI動力IDE, | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | Google 的代理- 第一 IDE( VS 代碼叉) , 管理器視窗, 用于并行地安排多個代理; 由雙子座發電 。 | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | AWS 的 spec- 驅動代理 AI IDE (VS 碼叉); 轉引為 specs, 然后是工作代碼, Docs, 以及測試 。 | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | 開源的 AI 碼編輯器( VS code fork) , 包含基于 continue 的聊天與完成 。 ~40K+ + + → | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | 開源光碟替代程式( VS Code fork); 任何有變更可視化的模型或本地主機 。 ~28K+ + + + + | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | 開源聊天- 第一個 AI 碼編輯器, 包含多檔案編輯與深度 Git 集成 。 ~ 7K+ QQ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | 開源代理 dev 環境 (YC W26) , 用于在孤立的 Git 工作樹中平行執行多個編碼代理 。 | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### IDE 延伸/ 插件

VS 代碼、 JetBrains、 Neovim 和其他編輯器的插件 。

| 姓名 | 描述 | 類型 | 連結 |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | 最廣泛采用的 AI 編碼助手; 內置完成, 聊天, 以及代理編碼代理, | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | VS 碼中的自動編碼代理程式, 並且有 人行的 批准; 檔案編輯、 終端指令及瀏覽器使用 。 ~59K+ + → | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | 開源 VS 碼與 JetBrains 延伸, 用于建立自訂, 模組化的 AI dev 系統; 任何型號 。 ~ 32K+ QQ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | 從本地與遠端的編碼基礎中調取上下文的源碼 AI 助理; VS 代碼, JetBrains, Visual Studio 。 | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | 自由 AI 編碼扩展名為 40+ IDE , 包含完成, 聊天, 并搜尋70+ 語言 。 | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | AWS 的 AI 編碼助手, 包括完成、 內置聊天、 代理模式; 深度 AWS 集成 。 | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | Google 的 IDE 延伸功能由雙子座提供 : 完成、 下一個編輯預覽、 內置 diff ; 給個人自由 。 | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | 專注於隱私的人工智能助理, | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | 企業 AI 編碼助理, 配有 200K 托肯背景引擎, 用于深密的編碼基解析 。 | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | AI 程式碼審查與質量平台, | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | 使用 VS 碼與 JetBrains 延伸支援 20+ 語言的開源多語種代碼產生模型 。 ~ 11K+ QQ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | 自訂的開源 AI 編碼助手( 副駕駛選項); 完全运行在您的基礎上 。 ~25K+ + ~ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### AI 編碼平台/ 云代理

瀏覽器或云宿代理,

| 姓名 | 描述 | 類型 | 連結 |
|:-----|:-----------|:----:|:----:|
| **Devin** | 第一個完全自主的基于雲端的AI軟體工程師; 規劃、代碼、測試, | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | 自動建立、測試和部署全速套用程式的雲族AI代理; 50+語言。 | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | AI 動力的 Web dev 代理; 透過 WebContainers 直接在瀏覽器中啟動、執行、編輯和部署全裝入應用程式 。 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | 群組之叉 螺栓 。 新的, 具有延伸的功能和更大的 LLM 灵活性 。 ~ 12K+ QQ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | 由自然語言發出全斯塔克應用程式, | 🔵 | [Website](https://lovable.dev) |
| **v0** | Vercel的 AI 平台產生高質量的 React/Next 。 js 自然語言的 UI 元件。 | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | 以雲為基礎的編碼環境, | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | 谷歌代理云基發展環境. | 🔵 | [Website](https://firebase.google.com/studio) |

#### 開源碼代理框架

建立自主編碼代理的框架和研究项目。

| 姓名 | 描述 | 類型 | 連結 |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | 云碼代理主動開源平台; 之前的 OpenDevin. ~ 69K+ + ~ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | 用 GitHub 發表, 用自訂的代理電腦介面自動修正 。 ~19K+ ~~ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | LangChain在LangGraph上搭建的 星雲主辦的編碼代理框架 ~8K+ ~ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | 開源代理軟體工程師; 破解指令、 研究、 寫入碼 。 偏差替代 。 ~ 18K+ + QQ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | GitHub 發表解析度的自動程式改善與錯誤本地化相關。 ~2.8K+ + + + + + | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | 簡單的三相方法( 本地化 + 修補 → 驗證 ) 解決軟體發展問題 。 ~ 2K+ + + + 。 | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | 開源配對程序員 SWE 代理, 具有密碼寫作、 計劃和研究功能; 支援 Claude, GPT-4, Llama, Ollama 。 ~3.5K+ + → | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### 其他显著的仓库

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | 確定的開源指南與資源中枢 。 3M+ 學者 ~ 55K+ ~ ~ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | 世界最大的開源即時圖書館. 所有主要模型的1000秒 | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | 建構產品級 LLM 動力軟體的原則。 ~ 17K+ QQ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 手操作 Jupyter Notebook 教程 ~ 3K+ + + → | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | 第一原理手册, | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | 收集產品AI編碼代理的系統提示(Claude Code,雙子座CLI,Cline,Aider,Roo Code). | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | 使用自然語言建立軟體的工具與資源。 | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | 官方的食譜 提示 工具 RAG 和評估 | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | 在您的數據集上建立 ChatGPT 類型 bots 的框架 。 | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | 机器思考的科學框架 | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | 以符號計數的 AI 提示的提取與格式碼上下文 。 | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | 比較200+模型的 LLM API 定价 。 | [Website](https://pricepertoken.com/) |
| **OpenPaw** | CLI 工具 (`npx pawmode`以產生系統提示(CLAUDE.md + SOUL.md)來將克勞德代碼變成個人助理, | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | 開源CLI, 永久地將10個結構的決定框架(MECE, 發行樹, Pre- Mortems)和12個认知偏差測試器注入AI助理提示中。 走吧,麻省理工 | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## API( API )
💻

### OpenAI 檔案

| 模型 | 背景 | 价格(每100兆令牌的輸入/輸出) | 金鑰特性 |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K | $1.75 / $14 | 最新旗舰, 90%的缓存折扣, |
| GPT-5.1 | 400K | $1.25 / $10 | 前一代旗舰 |
| GPT-4.1 / 4.1 mini / nano | 1百万 | $2 / $8 | 比GPT-4o快40%, |
| o3 / o3-pro | 200K | 變數 | 使用本地工具的理由模型 |
| o4-mini | 200K | 成本效益 | 快速推理, 最佳於 AIME 成本級 |
| GPT-OSS-120B / 20B | 128K | $0.03 / $0.30 | 第一個開放量级模型, Apache 2.0 |

主要功能: 反應 API, Agents SDK, 結構輸出, 函數呼叫, 即時缓存( 90% 折扣), Batch API( 50% 折扣), MCP 支援 。 [平台文件](https://platform.openai.com/docs/models)

### 麻醉( 克勞德 )

| 模型 | 背景 | 价格(每100兆令牌的輸入/輸出) | 金鑰特性 |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1米(β) | $5 / $25 | 最有力、最先进的編碼和代理工作 |
| Claude Sonnet 4.5 | 200K | $3 / $15 | 最佳編碼模型, 61.4% OSWorld (電腦使用) |
| Claude Haiku 4.5 | 200K | 快速 | 越近越快的模范班 |
| Claude Opus 4 / Sonnet 4 | 200K | 15美元/75美元(Opus) | Opus: 72.5% SWE-bench, Sonnet 4 功率 GitHub 副駕駛 |

Claude Code CLI, 可在AWS Bedrock和Google Vertex AI上找到。 [API 文件](https://docs.anthropic.com/)

### 谷歌 (格米尼)

| 模型 | 背景 | 价格(每100兆令牌的輸入/輸出) | 金鑰特性 |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1百万 | $2 / $12 | 最聰明的谷歌模型,部署在 2B+ 搜尋使用者 |
| Gemini 2.5 Pro | 1百万 | $1.25 / $10 | 最好的編碼/ 代理工作, 思考模型 |
| Gemini 2.5 Flash / Flash-Lite | 1百万 | $0.30/$1.50 · $0.10/$0.40 | 物价业绩 |

主要功能:思考(所有2.5+型號),Google搜索定位,代码執行,Live API(实时音效/視頻),上下文缓存. [谷歌 AI 工作室](https://ai.google.dev/)

### 梅塔 (Llama)

| 模型 | 建筑 | 背景 | 金鑰特性 |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MOE / 17B 作用中 | 1 000米 | 符合单一的 H100, 多式, 開重 |
| Llama 4 Maverick | 400B MOE / 17B 正在使用,128名專家 | 1百万 | 比GPT-4o, 露天重量 |
| Llama 3.3 70B | 強度 | 128K | 匹配 Llama 3.1 405B |

可以在25+云的合作伙伴, Hugging Face 和推測 APIs 上找到. [拉瑪](https://ai.meta.com/llama/)

### 其他知名提供者

| 提供者 | 描述 | 連結 |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral Lige 3(675B MOE), Devstral 2, Ministry 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2(671B MOE),R1(理由,MIT授權). 每1M令牌0.15美元/0.75美元. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 Fast: 2M上下文,每1M令牌0.20美元/0.50美元. | [Website](https://x.ai) |
| **Cohere** | 指令 A (111B, 256K上下文), Embed v4, Rerank 4. 0. 在RAG。 | [Website](https://cohere.com) |
| **Together AI** | 200+開放型號,具有子100ms耐用性. | [Website](https://together.ai) |
| **Groq** | LPU 硬件有 ~300+ 符號/ sec 推论 。 | [Website](https://groq.com) |
| **Fireworks AI** | 快速推斷 HIPAA + SOC2 符合 。 | [Website](https://fireworks.ai) |
| **OpenRouter** | 所有提供者的300+型號的 API 统一 。 | [Website](https://openrouter.ai) |
| **Cerebras** | 具有最佳總反應時間的 Wafer 階段芯片 。 | [Website](https://cerebras.ai) |
| **Perplexity AI** | 以引號搜尋到的 API 。 | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | 和克勞德、拉瑪、米斯特拉爾、科赫爾管理多型服務 | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | 透過 API 存取開啟的模型 。 | [Website](https://huggingface.co/docs/api-inference/index) |

---

## 数据集和基准
💾

### 主要基准(2024-2026)

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | 6M+用戶投票, 人類偏好的實際標準 | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | 12,000+ 分14個領域的研究生問題。 NeurIPS 2024 聚光燈. | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448"Google防守"STEM問題;非專家驗證者只達到34%. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | 人類驗證的500個任務子集 實際世界 GitHub 發表解析。 | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1,865項任務, | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2500個專家審查的問題; | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 7個域的1,140個編碼工作;AI取得~35.5%對97%的人類成功. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | 抗污染, | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | 研究階級數學;AI只解決~2%的問題. | 研究 |
| **ARC-AGI v2** | 抽象推理测量流体智能. | 研究 |
| **IFEval** | 遵循格式/内容限制的指令性評估 。 | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | OpenAI 透過 Kaggle 樣式的 ML 工程評估 。 | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | 估計AI從零開始复制20份ICML 2024文件的能力。 | [GitHub](https://github.com/openai/preparedness) |

### 領導板與 Meta- Benchmarks

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | 在MMLU-Pro,GPQA,IFEval,MATH上評估開放的模型. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | 共10次评估。 | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | 主持SWE-bench Pro和代理评估. | [Leaderboard](https://scale.com/leaderboard) |

### 提示與指令数据集

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | 用于訓練 T0 及類似模型的 270+ NLP 工作的快速樣本 。 | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944套代理工作流程的系統即時樣本(由Daniel Rosehill著,2025年8月). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161,443條訊息用35種語言,收視率461,292分. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | 大型合成授權與偏好數據集, | 抱面 |
| **SoftAge Prompt Engineering Dataset** | 1 000個不同的提示, | 抱面 |
| **Text Transformation Prompt Library** | 全面收集文本轉換提示(2025年5月). | 抱面 |
| **Writing Prompts** | 由 r/WritingPrompts 的提示配對。 | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | 從MidJourney的公開Discord上刮去的文字提示和影像網址 。 | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 2萬個程式指令-输出對對 | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | RAG 工作流程中快速优化的數據集 。 | 抱面 |
| **NanoBanana Trending Prompts** | 1000+ 編譯的 AI 影像提示來自 X/ Twitter, 按訂約排序 。 | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### 紅色配對與相對數據集

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **HarmBench** | 包括標準、背景、著作權、多模式等, | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | 開放強烈的監獄基准, | 研究 |
| **AgentHarm** | 110次惡性特工任務 共11次 | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243,877 促使評估信得過8個角度 | 研究 |
| **SafetyPrompts.com** | 聚合器追蹤50+安全/重排数据集。 | [Website](https://safetyprompts.com/) |

---

## 模型
🧠

### 邊界模型(2025-2026)

| 模型 | 提供者 | 背景 | 按鍵強度 |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | OpenAI 檔案 | 400K | 通用智能,100% AIME 2025 |
| **Claude Opus 4.6** | 麻醉 | 1米(β) | 編碼、代理工作、延伸思考 |
| **Gemini 3 Pro** | 谷歌 | 1百万 | # 1 LMArena (~ 1500 Elo), 多式联运 |
| **Grok 4.1** | 十 阿爾及利亞 | 2米 | #2 LMArena(1483 Elo),低幻覺 |
| **Mistral Large 3** | 星光AI | 256K | 最佳開放量( 675B MOE/41B 啟用), Apache 2.0 |
| **DeepSeek-V3.2** | 深搜索 | 128K | 最大值( 671B MOE/ 37B 作用中), MIT 授權 |
| **Llama 4 Maverick** | 梅塔 | 1百万 | 比 GBT-4o (400B MoE/17B 啟用), 開放量 |

### 理由模型

| 模型 | 金鑰詳情 |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 80.7%的GPQA鑽石. 原始工具的使用 。 |
| **OpenAI o4-mini** | 最佳的AIME成本級 和視覺推理。 |
| **DeepSeek-R1 / R1-0528** | 開放重量,RL訓練 87.5%在AIME 2025。 麻省理工的執照 |
| **QwQ (Qwen with Questions)** | 32B 推理模型。 阿帕奇2.0。 和R1差不多 |
| **Gemini 2.5 Pro/Flash (Thinking)** | 內在的推理 和可想象的思考預算。 |
| **Claude Extended Thinking** | 混合模式,可見的思想鏈和工具使用。 |
| **Phi-4 Reasoning / Plus** | 14B推理模型和更大的模型對抗. 露天體重 |
| **GPT-OSS-120B** | OpenAI的開放量 和CoT. 阿帕奇2.0。 |

### 显著的開源模型

| 模型 | 提供者 | 金鑰詳情 |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | 阿里巴巴 | 國際機構, 阿帕奇2.0。 在HuggingFace上, |
| **Gemma 3** | 谷歌 | 270M至27B. 多式联运. 128K 上下文。 140+語言. |
| **OLMo 2/3** | 艾倫·艾爾 | 完全開啟( 數據、 代碼、 重量、 紀錄) 。 OLMo 2 32B 超過 GBT 3.5. Apache 2.0. |
| **SmolLM3-3B** | 擁抱的臉 | 优于Llama-3.2-3B. 雙模式推理。 128K 上下文。 |
| **Kimi K2** | 月光照片AI | 32B 啟動 。 露天體重 适合编码/代理用途。 |
| **Llama 4 Scout** | 梅塔 | 109B MOE/17B 正在使用。 10M 令牌上下文 。 單身H100 |

### 专用代碼模型

| 模型 | 金鑰詳情 |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69.6% SWE-bench——開源碼的里程碑. 256K背景。 阿帕奇2.0。 |
| **Devstral 2 (123B)** | 7x比克勞德·索內特更省錢 |
| **Codestral 25.01** | 米斯特爾的密碼模型 80+語言. 充中供养. |
| **DeepSeek-Coder-V2** | 236B MOE / 21B 作用中. 338 編程語言。 |
| **Qwen 2.5-Coder** | 7B/32B. 92 編程語言.88.4%的HumanEval. 阿帕奇2.0. |

### 基礎模型( 歷史參考)

這些模式确立了主要概念,但大多被取代,以供实际使用:

| 模型 | 提供者 | 重要性 |
|:------|:---------|:-------------|
| GLM-130B | 清華 | (2023年) |
| Falcon 180B | 二 | 大型開放基因模型( 2023) |
| Mixtral 8x7B | 星光AI | 開放型號的先進MOE架构 (2023) |
| GPT-NeoX-20B | 埃留泰雷 | 早期開啟自旋 LLM |
| GPT-J-6B | 埃留泰雷 | 早期開放因果語言模型 |

---

## AI 內容偵測器
🔎

### 主要商用探测器

| 姓名 | 精确度 | 金鑰特性 | 連結 |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99%的索赔 | 10M+使用者,G2上的#1 (2025). 發現GPT-4/5,雙子座,克勞德,拉瑪 免費階段可用 。 | [Website](https://gptzero.me) |
| **Originality.ai** | 98-100%(经过同行审查) | 一致的評分最准确 结合AI偵測+盜竊+事實檢查. 從14.95美元/月。 | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 未修改的 AI 文本 | 在學界居多。 於2025年8月啟動了人工智能的通訊/人造探測。 机构授權 | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99%+ | 企業工具測試30+語言的AI. LMS集成. | [Website](https://copyleaks.com) |
| **Winston AI** | 99.98%的索赔 | 掃描文件的 OCR, AI 影像/ 隱形偵測 。 11种语言。 | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99.3%(2025年) | 在 COLLING 2025 共同任務中得分最高。 在"人性化"的文字上100%的TPR. 97.7%的對抗力 | [Website](https://www.pangram.com) |

### 自由研究探测器

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **Binoculars** | 開源研究探測器, 使用兩個 LLMs 的交叉複雜性 。 | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | 原始文字与扰動的對數概率的比對 | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | 表示 AI 寫作文字的 AI 分類器( OpenAI Detectionor Python 包裝器)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | 以瀏覽器为基础的自由檢測器( 最多 2000 個字符 ) 。 一些研究的精度是97% | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | 免費的,不用申請 | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | 有色碼結果的自由工具 。 | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | 在多項學術研究中, | [Website](https://www.zerogpt.com/) |

### 水印方法

| 姓名 | 描述 | 連結 |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | 透過統計符號樣本, 部署在谷歌產品中. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | 截至2025年, 研究顯示, | 實驗 |

**重要注意:** 沒有探測器要求100%的精度。 人文/AI混合文本仍然最難检测(50-70%的精度)。 反差很大 AI探測市場預計從~2.3B(2025年)增至15B,

---

## 书籍
📖

### 即時工程

| 篇 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | 約翰·貝里曼與艾伯特·齊格勒 | 奧萊利 | 2024 |
| **Prompt Engineering for Generative AI** | 詹姆斯·菲尼克斯和麥克·泰勒 | 奧萊利 | 2024 |
| **Prompt Engineering for LLMs** | 托馬斯·卡德威爾 | 獨立 | 2025 |

### LLM 應用程式發展

| 篇 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | 奇普·阮 | 奧萊利 | 2025 |
| **Build a Large Language Model (From Scratch)** | 塞巴斯蒂安·拉斯奇卡 | 人事 | 2024 |
| **Building LLMs for Production** | 路易-弗朗索瓦·布沙德和路易·彼得斯 | 奧萊利 | 2024 |
| **LLM Engineer's Handbook** | Paul Iusztin & Maxime Labonne | 包裝 | 2024 |
| **The Hundred-Page Language Models Book** | 安德裡·布爾科夫 | 自製 | 2025 |

### AI 特工

| 篇 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | 邁克爾·阿爾巴達 | 奧萊利 | 2025 |
| **AI Agents and Applications** | 羅伯托·伊凡特 | 人事 | 2025 |
| **AI Agents in Action** | 米歇爾·蘭漢姆 | 人事 | 2025 |

### 生产、可靠性和安全

| 篇 | 作者 | 出版商 | 年份 |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | 克里斯托弗·布魯梭和馬修·夏普 | 人事 | 2025 |
| **Building Reliable AI Systems** | 拉什·沙哈尼 | 人事 | 2025 |
| **The Developer's Playbook for LLM Security** | 史蒂夫·威爾遜 | 奧萊利 | 2024 |

---

## 课程
👩‍🏫

### 自由短途

- [ChatGPT 開發者的快速工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) 由安德魯·恩格和OpenAI的Isa Fulford共同教訓. 基底起點 (深悟. AI).
- [使用 ChatGPT API 建立系統](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) ——生产多步LLM系統設計. (深悟. AI).
- [在LangGraph的AI特工](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) ——有工具使用和研究代理的代理數據流. (深悟. AI).
- [用 LlamaIndex 建立代理RAG](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) ——RAG研究代理建设. (深悟. AI).
- [LangChain 的函式、 工具和代理人](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) - 功能呼叫和代理建築。 (深悟. AI).
- [影像模型的即時工程](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) 視覺感應技巧 (深悟. AI).

### 大學和平台课程

- [即時工程專攻(范德比爾特)](https://www.coursera.org/specializations/prompt-engineering) Jules博士的三期系列 白色封面基礎到高级 PE. (Coursera)
- [使用 LLMs (Deplearning.](https://www.coursera.org/learn/generative-ai-with-llms) ——LLM生命周期,变速器,RLHF,部署. (卡塞拉)
- [Stanford CS336: Scratch 的語言建模](https://cs336.stanford.edu/) 建立LLM端到端。 (斯坦福, 2024–2026)
- [MIT 6.S191: 深度学习引言](https://introtodeeplearning.com/) 年度课程,包括LLMS和Generative AI.(麻省理工,2024-2026年)
- [AI Bootcamp 的完整快速工程](https://www.udemy.com/course/prompt-engineering-for-ai/) ——覆盖GPT-5,DSPy,LangGraph,代理架构. 58K+收視率. (Udemy,2026年2月更新)

### 自由平台課程

- [谷歌提示要点](https://grow.google/prompting-essentials/) 5步即時設計 元速成 雙子座 不到6小時
- [微软 Azure AI 基本原理:基因化 AI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) Azure OpenAI。
- [抱面 LLM 課程](https://huggingface.co/learn/llm-course/chapter1/1) ——由社區引導的課程,涵盖变速器,微調,建設推理模型.
- [抱面AI代理課](https://huggingface.co/learn) - 特工理論到實驗 100K+ 注册學生。

### 學習啟動課程

- [人人聊天GPT](https://learnprompting.org/courses/chatgpt-for-everyone)
- [即時工程引言](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [高级提示工程](https://learnprompting.org/courses/advanced-prompt-engineering)
- [即時打包引言](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [高级快速套用](https://learnprompting.org/courses/advanced-prompt-hacking)
- [企業專家的Generative AI代理人介紹](https://learnprompting.org/courses/introduction-to-agents)
- [AI 安全](https://learnprompting.org/courses/ai-safety)

---

## 教學和指南
📚

### 官方提供者指南

- [OpenAI 即時工程指南](https://platform.openai.com/docs/guides/prompt-engineering) ——全面,涵盖GPT-4.5/5提示,推理模型,结构化输出,代理工作流程. 不断更新。
- [OpenAI GPT-4.1 提示指南](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] ——结构代理式的即時設計:目標恒定,工具集成,長文處理.
- [Anthropic 快速工程概述](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) —— 迭代即時設計, XML 標籤, 串式思考, 角色分配 。 包括即時產生器 。
- [Claude 4 最佳做法](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025–2026] – 并行工具執行,思维能力,影像處理.
- [Anthropic: 人工智能代理的有效背景工程](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] ——從即時工程到背景工程的演化:代理狀態,內存,工具,MCP.
- [谷歌雙子體啟動策略](https://ai.google.dev/docs/prompt_best_practices) 透過Vertex AI與AI Studio,
- [Azure AI Studio 的微软快速工程](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) ——工具呼叫,功能設計,少拍提示,即時連結.

### 社区和獨立指南

- [即時工程指南(DAIR.AI/即時指南.ai)](https://www.promptingguide.ai/) ——最全面的開源指南. 18+ 技術,模式特有指南,研究论文. 3M+學者. 現在包括背景工程
- [學習提示( learnprompting.](https://learnprompting.org/) ——结构化自由平台. 開始進步的PE,AI安全,HackAPrompt競爭。
- [IBM 2026 提示工程指南](https://www.ibm.com/think/prompt-engineering) [2026] — Curated 工具,教學,有Python碼的現實世界例子.
- [Anthropic 互動教程](https://github.com/anthropics/prompt-eng-interactive-tutorial) - 9章的Jupyter手術課程
- [Lilian Weng的快速工程指南](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] ——OpenAI研究者高雅的技術博客.
- [Google 即時工程指南(68頁PDF)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] – 雙子座內式最佳做法指南,有混凝土模式.
- [DigitalOcean:快速工程最佳做法](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] ——更新指南概述技術:少拍,串想,角色提示等.
- [Aakash Gupta:2025年即時工程](https://news.aakashg.com) 在OpenAI、Shofify、Google等地,
- [用 OpenAI API 快速工程的最佳做法](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) ——OpenAI介绍性最佳做法.
- [OpenAI 烹饪本](https://github.com/openai/openai-cookbook) ——功能呼叫,RAG,評估,以及複雜的工作流程的官方食譜.
- [微软提示工程文件](https://microsoft.github.io/prompt-engineering) ——微软開放即時工程資源.
- [DALLE 提示書](https://dallery.gallery/the-dalle-2-prompt-book) ——文字到影像提示的視覺指南.
- [最佳100+ 稳定扩散提示](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) – 社区定制影像生成提示.
- [維比工程( Manning)](https://www.manning.com/books/vibe-engineering) 透過自然語言提示建立軟體。

---

## 影片
🎥

- [Andrej Karpathy:"深入LLM"和"我如何使用LLM"](https://www.youtube.com/@AndrejKarpathy) [2024–2025] — 2024–2025年最有影響力的AI影片中的兩部. 全面技術深度潛水 接著是實際使用模式
- [」(YC AI創始學校)](https://karpathy.ai/) [2025] ——Coined"vibe coding"(2025年2月),并冠軍"context engineering"(2025年6月).
- [Karopathy: 神经網路:0呼叫英雄](https://www.youtube.com/@AndrejKarpathy) [2023–2024] — 從反傳播到GPT的完整教程系列建築.
- [3 藍色1 棕色: 神经網路系列](https://www.youtube.com/@3blue1brown) [United 2024]——圖像化動畫對轉變器和注意力机制的視覺解釋. 7M+ 訂户.
- [AI 解釋](https://www.youtube.com/@aiexplained-official) [2024–2025] — 長形分析分解文件,模型能力,以及PE發展.
- [山姆·維特文](https://www.youtube.com/@samwitteveen) 校對:Soup
- [馬修·伯曼](https://www.youtube.com/@matthew_berman) [2024–2025] — 涵盖模型发布和LLM实用的流行頻道. 600K+ 訂户.
- [深度学习. AI YouTube](https://www.youtube.com/@Deeplearningai) 安德魯·恩格(Andrew Ng)談論代理人與AI的職業。
- [雷克斯·弗里德曼·波德卡斯特(AI Episodes)](https://www.youtube.com/@lexfridman) 在LLMs上,
- [ICSE 2025: AIware 即時工程教程](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] ——會議教程,涵盖即時模式,脆弱性,反派特爾,以及优化DSL.
- [CMU 高级 NLP 2022 : 提示](https://youtube.com/watch?v=5ef83Wljm-M) ——关于促進方法的奠基學說.
- [ChatGPT: 初学者的5 快速工程秘诀](https://www.youtube.com/watch?v=2zg3V66-Fzs) - 初学者可以上場

---

## 社群
🤝

### Discord 伺服器

- [學習提示](https://learnprompting.org/discord) ——4万余人. 最大的PEDiscord有課程,黑客座,HackAPrompt比賽。
- [提示解析器](https://discord.gg/m88xfYMbK6)  - 社區
- [中途](https://discord.gg/midjourney) 1M+成員。 文字對影像快速分享的主中枢 。
- [OpenAI 磁碟](https://discord.gg/openai) 官方社群提供GPTs、Sora、DALL-E及API的幫助。
- [Anthropic 迪斯科](https://discord.gg/anthropic) 官方Claude社群的AI發展合作。
- [拖動面部混亂](https://discord.gg/huggingface) ——模式討論,圖書館支持,社區活動.
- [流程GPT](https://flowgpt.com/) ——33K+理事. 100K+傳單 穿過ChatGPT,DALL-E, 穩定分散,克勞德。

### 重編輯

- [r/Prompt 工程](https://reddit.com/r/PromptEngineering) - 專門的副手 即時的技術和討論
- [r/ChatGPT](https://reddit.com/r/ChatGPT) ——10M+成員. ChatGPT 使用者與即時分享的主要中枢 。
- [r/ 本地LLAMA](https://reddit.com/r/LocalLLaMA) 高科技社群在本地操作開源LLMS。
- [r/克洛代艾](https://reddit.com/r/ClaudeAI) Anthropic的克勞德社區:即時分享,API提示,模型比對.
- [r/ 机械學](https://reddit.com/r/MachineLearning) ——以学术為主的ML研究討論.
- [r/ 開啟AI](https://reddit.com/r/OpenAI) OpenAI產品與API討論。
- [r/稳定分配](https://reddit.com/r/StableDiffusion) - 450K+的成員,
- [r/ 查特GPTPromptGenius](https://reddit.com/r/ChatGPTPromptGenius) ——35K+成員分享和提炼提示.


### 论坛和平台

- [OpenAI 發展者群組](https://community.openai.com/) —— API幫助官方論壇,
- [抱面社](https://huggingface.co/) ——開源AI合作枢纽.
- [深度学习。](https://community.deeplearning.ai/) 學者討論課程與AI生涯的論壇。
- [小錯](https://www.lesswrong.com/) 人工智能能力与安全的深度技術文章。
- [AI 對齊論壇](https://www.alignmentforum.org/) ——專門配合研究討論.
- [西維蒂亞](https://civitai.com/) ——Generative AI創作人平台,用于分享模型,LORAS,以及提示.

### GitHub 組織

- [朗仔](https://github.com/langchain-ai) ——開源 LLM app框架. 100K+恒星.
- [提示板](https://github.com/promptslab)  - 基因模型 * * * 快速工程 * * LLMS 
- [擁抱的臉](https://github.com/huggingface) ——中央枢纽:變形器,Diffuses,Dataset,TRL.
- [DSPY (斯坦福 NLP)](https://github.com/stanfordnlp/dspy) ——種植群體,有系統的即時优化.
- [OpenAI 檔案](https://github.com/openai) ——開源模型,基准,工具.

---

<!-- AUTORESEARCH-START -->
## 自主研究和自我改善代理商
> 自動音效 [真棒的自動研究](https://github.com/alvinunreal/awesome-autoresearch) 最新同步:2026-10-03

### 普通后代

- [Kayba-ai/ 復古修正](https://github.com/kayba-ai/recursive-improve) 以保持或反轉評估的方式,
- [vukrosic/ 自動研究](https://github.com/vukrosic/auto-research) – Docs- Olyly control 平面供開放自主的AI研究實驗室使用 – 基于檔案的操作模型用于人類方向和代理執行.
- [研究/自動研究](https://github.com/uditgoenka/autoresearch) Claude Code技術將自動研究概括為軟體、docs、安全、運輸、除錯和其他可測目標的可重用環路。
- [leo-lilinxiao/ codex- 自動研究](https://github.com/leo-lilinxiao/codex-autoresearch) —— 編碼本地自動研究技巧, 具有恢復支援, 課程贯穿, 可選擇的平行實驗, 以及特定模式的工作流程 。
- [Junjunbong/ 研究](https://github.com/junjunjunbong/research-loop) 經過自動研究的Codex和Claude代碼的Skill探員 具有決定性跑者 計劃 -hash批准 孤立的Git 工作樹 权威的度量評估 以及唯一的實驗賬本
- [Xieyulai / 史蒂夫](https://github.com/xieyulai/steer) 由編碼器編輯訓練代碼,
- [种子AI/thoth](https://github.com/SeeleAI/Thoth) - Dashboard - First Claude Code and Codex runtime for autorear research, 有耐久的跑步, 鎖定的工作項目, 可见的賬本, 以及可審判的判斷。
- [substikpm/ 基因自動研究](https://github.com/supratikpm/gemini-autoresearch) 雙子座的CLI技術 能讓任何可測的目標 都能自我研究 雙子體:用Google Search定位為回路內的實際驗證來源, 也透過.
- [davebcn87/ 自動研究](https://github.com/davebcn87/pi-autoresearch) — `pi` 實驗環路 活度測量 信心追蹤 以及可復用自動研究會議
- [磁碟線研究/自動研究- 密碼](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude 代碼插件/ kill port of `pi-autoresearch`和混凝土生物力學案例研究
- [灰港/ 自動文字](https://github.com/greyhaven-ai/autocontext) ——闭路控制平面,用于重复的代理改进,有評估,持續的知識,舞台認證,以及可選擇的蒸馏到更便宜的本地跑步時間.
- [Necmtn/ 最大值](https://github.com/Necmttn/ax) —— AI編碼器的本地回路:捕捉會議追蹤,
- [日米利诺维奇/目標-md](https://github.com/jmilinovich/goal-md) 一般化自動研究 `GOAL.md` 重新置放的樣式 。
- [詹姆斯-斯-泰勒/](https://github.com/james-s-tayler/lazy-developer) 以GOAL.md為引擎。 支持獨立與Ralph Mode多處刑。
- [可變狀態/自動研究](https://github.com/mutable-state-inc/autoresearch-at-home) 包括實驗、分享最佳配置同步、假設交換、群組式協調等。
- [zkarimi22/任何研究](https://github.com/zkarimi22/autoresearch-anything) —— 一般化自動研究 **任何可衡量尺度** ——系統提示,API性能,登陸頁面,測試套件,設定調調,SQL查询. "如果你能量度,你可以优化它。"
- [Entrpi/ 自動研究- 各地](https://github.com/Entrpi/autoresearch-everywhere) ——跨平台擴大自動偵察硬件配置并啟動環路. 自我研究的"光滑和泛化"
- [申然湖/ADS](https://github.com/ShengranHu/ADAS) — **代理系統的自動設計** ——ICLR 2025. Meta -agents 通过編程用代碼創作小說代理架构。
- [Maxime Robeyns/ 自己_改善_編碼_代理](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **中美洲**:自我改进編碼 編輯自己的密碼庫的特工 ICLR 2025工作室文件,
- [Peterskoett/自我改进代理人](https://github.com/peterskoett/self-improving-agent) 具有反射和元學習周期的替代性自我改进代理架构。
- [元相/高棉](https://github.com/metauto-ai/HGM) — **Huxley- Gödel 機器** SWE-bench的性能,
- [格帕艾/格帕](https://github.com/gepa-ai/gepa) — **GEPA( 基因- 帕雷托)** ——ICLR 2026口述. 反射即時演化, 用自然語言反射來优化任何文字參數。
- [哨兵/精靈](https://github.com/sentient-agi/EvoSkill) 由Claude Code、Codex CLI、OpenCode、OpenHands和Goose 支援,
- [切帕先生/自動](https://github.com/MrTsepa/autoevolve) ——GEPA-啟動自動遊戲自動研究:突變代碼策略,評估頭對頭,率與Elo/Bradley-Terry,從帕雷托前方的分支. 特工讀取了對方的痕跡 克勞德的密碼
- [HKUDS/法律小组](https://github.com/HKUDS/ClawTeam) ——自动研究的特工群智能——培育平行的GPU研究方向,在特工群間分配工作,集合结果.
- [管弦樂研究/AI-研究-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) ——综合技術文庫,包括自動研究管弦與二流架构(內置优化+外置合成).
- [維科AI/Aideml](https://github.com/WecoAI/aideml) — **AIDE (AID) :**: Tree-search ML 工程代理商,通过迭代代碼產生和评价,自主改善模型性能.
- [网易.](https://weco.ai) — **韋可**: 具有可觀性、實驗追蹤和經管運輸的AIDE云平台,

### 研究代理系统

- [瞄准板/自动研究法](https://github.com/aiming-lab/AutoResearchClaw) —— 端到端的研究管道 把一個主題變成文學評論、實驗、分析、同级評論、以及紙稿; 比自動研究更寬广,
- [露天/博士](https://github.com/OpenLAIR/dr-claw) ——開源研究工作區,有相继的思想對紙管道和集成自動研究工具包.
- [OpenRaiser/ Nano 研究](https://github.com/OpenRaiser/NanoResearch) 設計實驗、產生代碼、在本地或SLURM上執行工作、分析實際結果、寫作以這些產品為基礎的論文。
- [高空/ ARK](https://github.com/kaust-ark/ARK) — **ARK( 自动研究套件)**: 想法+會址 → 紙管管管管 6個代理商 – 提案分析,文献搜索, Slurm 實驗, LaTeX 起草,迭代同行審查. 經過CLI、網絡儀表或Telegram控制
- [Wanshuiyin/Auto-claude-code-研究睡眠](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) 以自動文學評論、實驗、紙面複雜以及跨型態批評為中心。
- [天元/ 天元Sci](https://github.com/skyllwt/AutoSci) ——维基百科中以克勞德碼為主的全生命周期研究平台,实现卡納西的LLM-Wiki愿景. 20+技術覆盖全圈:摄入 想法 新奇檢查 實驗設計/跑/eval 紙寫. 研究狀態生活在一個具有互動性圖表的结构化知識wiki中.
- [西比爾研究隊/自动研究隊](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) 完全自主的 AI 科學家建在克勞德碼上, 具有明確的自動研究排程, 多代理研究迭代, GPU 實驗執行, 以及自動的外環 。
- [wjc2830/ 簡單的自動研究](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) Claude Code技術經營著一個自動研究式的 人性化的深度學習圈 跨越六個角色 版本化的實驗 和證物檢查完成
- [Deimenhmdt/ 自動研究者](https://github.com/eimenhmdt/autoresearcher) 早期的開源套件,
- [超空格/ agi](https://github.com/hyperspaceai/agi) 包括自動代理經營實驗、八卦發現、維持CRDT領導板、將結果歸檔到GitHub,
- [人社/CORAL](https://github.com/Human-Agent-Society/CORAL) — **哥拉**:自主的多代理演化[arXiv:2604.01658](https://arxiv.org/abs/2604.01658)). SOTA 的10個數學/數理/系統任務。
- [SakanaAI/AI 科學家](https://github.com/SakanaAI/AI-Scientist) — **AI 科學家**: 第一套全自動科學發現全面系統. 從思想代代到文字寫作 很少人監督
- [SakanaAI/AI-科學家v2](https://github.com/SakanaAI/AI-Scientist-v2) 工作坊的自動科學發現 通过代理樹搜尋 從 v1 移除樣本依賴性, 泛指研究域 。
- [AweAI-团队/科学家](https://github.com/AweAI-Team/AiScientist) — **科学家**: 長距 ML 研究實驗室, 分級管弦和 File-as-Bus 协调 —— 工作空間檔案扮演著持久的記錄系統. 在固定的計算/時間預算下,驱动自動的紙复制(Paper Bench)和競爭式的MLE-Bench迭代環路。 ([rXiv 2604.13018](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI研究者](https://github.com/HKUDS/AI-Researcher) ——新IPS2025论文. 完全端到端的研究自动化:假設 假設 實驗 手稿 同行評論 制作版本 [科學](https://novix.science/chat).
- [開啟/ 自动研究](https://github.com/openags/Auto-Research) — **開啟AGS**校對:Soup
- [塞缪爾·施米德加爾/助理](https://github.com/SamuelSchmidgall/AgentLaboratory) ——端到端自主研究工作流程:思想 ——文學評論 ——實驗 ——報告. 支持自主模式和副駕駛模式。
- [代理Rxiv](https://agentrxiv.github.io/) ——合作自主研究框架 代理實驗室共享一個預印伺服器,互相依賴工作迭代.
- [Jinheon Baek/ 研究人员](https://github.com/JinheonBaek/ResearchAgent) ——与LLMS合作, 多代理审查与反馈回路.
- [du- nlp- lab/ MLR- 副駕駛](https://github.com/du-nlp-lab/MLR-Copilot) ——自主的ML研究框架 ——产生思想,實驗,分析結果.
- [MAS 工作/ ML 代理](https://github.com/MASWorks/ML-Agent) ——强化自動ML工程的LLM代理. 從試驗和錯誤中學習提高模型性能.
- [Pouria Rouzrokh/Latte审查](https://github.com/PouriaRouzrokh/LatteReview) 低碼 Python 套件 **自動文學評論** 透過人工智能
- [升/升](https://github.com/LitLLM/LitLLM) 使用RAG來進行精確,
- [實驗室探員](https://agentlaboratory.github.io/) ——三期研究管道:文學評論 ——實驗 ——報告寫作,每期都有專門代理.
- [快樂- 君/ 寫- 驅動- 自動研究](https://github.com/happyhappy-jun/writing-driven-autoresearch) 自動研究式的帶子從第一刻起就保留著一份呈文, 位居第一 [拉爾夫松@ ICML 2026](https://luma.com/hjuo7auc) 自主研究黑客。
- [自動研究- Factory/ Agon](https://github.com/AutoResearch-Factory/Agon) ——端到端研究管弦樂團建基于一個基石原理,即即即時經濟(可重用回路,而不是一次性回路),加上五項支持性規則;經營科學家/編碼/稽核回路,跨過10+学科,與自動研究相同的可重用回路線,但缩放到完全的研究程序.

### 平台端口( H)

- [根法蘭科皮亞娜/openclaw-自動研究](https://github.com/gianfrancopiana/openclaw-autoresearch) – OpenClaw 端口 pi- 自動研究; 任意最优化目標的自動實驗環路, 以及數據自信分數 。
- [米奧利尼/自動研究-macos](https://github.com/miolini/autoresearch-macos) —— 廣泛採用 macOS 叉, 在保持原環形的同时, 調整 Apple Silicon / MPS 的上游自動研究 。
- [trevin-creator/ 自動研究- mlx](https://github.com/trevin-creator/autoresearch-mlx) ——保持上游固定預算的 MLX 本地蘋果硅埠 `val_bpb` 旋轉, 完全移除 PyTorch/ CUDA 依赖性 。
- [jsegov/自動研究-win-rtx](https://github.com/jsegov/autoresearch-win-rtx) ——Windows-native RTXfork 專注於消費者 NVIDIA GPU,有明确的VRAM地板和实用的桌面設定路徑.
- [iii-hq/n-自動研究](https://github.com/iii-hq/n-autoresearch) 多GPU自動研究基礎, `train.py` 循环。
- [lucasgelfond/自動研究-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) ——瀏覽器/WebGPU連接埠讓代理商產生訓練碼,在瀏覽器中執行實驗,並在沒有 Python 設定的情况下將結果反馈回環路 。
- [土豆/自動研究](https://github.com/tonitangpotato/autoresearch-engram) - 用叉子 **持久认知記憶** ——频率加权检索跨會議知識,提高實驗连续性.
- [Colab/ Kaggle T4 端口](https://github.com/karpathy/autoresearch/issues/208) —— 調整自動研究自由 T4 GPU( Google Colab / Kaggle) , 零成本和零本地設定 。 關鍵變更 : Flash 注意 3 → PyTorch SDPA, 移除 H100 唯一的內核依赖性 。
- [ArmanJR-Lab/自動自動研究](https://github.com/ArmanJR-Lab/autoautoresearch) - Jetson AGX Orin港有一台 **導演** Go二進制, 包括多實驗比對( 底線對導演- 導演) , 以及詳細的暫停分析 。

### 特定域的調整

- [mattprusak/ 自動研究基因學](https://github.com/mattprusak/autoresearch-genealogy) 使用結構的提示、歸檔指南、源碼檢查與金庫工作流程,
- [阿奇什曼·森古普塔/自動發聲器](https://github.com/ArchishmanSengupta/autovoiceevals) 使用對戰的呼叫者加上保持或回復的即時編輯,
- [Chrisworsey55/阿特拉斯-吉里](https://github.com/chrisworsey55/atlas-gic) 使用自動研究的持續或反轉環路,
- [右- AI/ 自動內核](https://github.com/RightNow-AI/autokernel) ——對 GPU 內核最优化套用自動搜尋環路 : profile 瓶颈, 編輯一個內核, 基准, 保持或回傳, 重复 。
- [艾略特·谢/自動](https://github.com/ElliotXie/autozyme) ——多代理框架 用於自動研究保持或反轉環路對 CPU 侧面的科學軟體: 剖析一個目標函數, 產生一個优化候選人, 在保留原始輸出時以速度為基准, 保持或回傳, 重复 。
- [分析/自動研究-增长](https://github.com/Agent-Analytics/autoresearch-growth) 使用分析快照和測量實驗結果,
- [Rkcr7/ 自動研究](https://github.com/Rkcr7/autoresearch-sudoku) ——增强自動研究工作流程 AI 代理 迭代重寫和基准 Rust sudoku 解析器, 最终在硬基准集上擊敗主要的人造解析器 。
- [jeongph/ 自動](https://github.com/jeongph/autospec) 讀取自然語言商業規則, 用 Gradle 建設 + J Unit XML 計算 119 線骨架到 950 線的 5 個周期 。
- [vlasenkoalexey/ tpu_性能_自動研究_維基](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) 在 v6e 硬件上對 TPU 模型性能( MFU / sords- per- sec) 使用自動研究的 keep- 或反轉環路 : 設定檔每一個都經過 XProf MCP 伺服器, 每一個實驗都做一個模型碼變更, 并保持或反轉與被測量的 MFU 。 以 Karopathy 樣式 LLM wiki 表示網域知識與每次實驗优化痕跡;

### 评估与基准

- [snak-stanford/ ML 代理奔驰](https://github.com/snap-stanford/MLAgentBench) - 用于评估人工智能代理的ML實驗工作的基准套件。 從CIFAR-10到BabyLM的13項任務.
- [OpenAI/ mle- bench 檔案](https://github.com/openai/mle-bench) OpenAI衡量人工智能在ML工程中表现如何的基准。
- [chchenhui/ mlrbench 中](https://github.com/chchenhui/mlrbench) MLR-Bench:在不限期的ML研究上評估AI代理. NourIPS/ICLR/ICML 工作坊的201項工作 。
- [格爾斯坦拉布/ ML- Bench](https://github.com/gersteinlab/ML-Bench) ─ 在寄存器層碼上評估 ML 工作的 LLM 和代理 。
- [THUDM/代理Bench](https://github.com/THUDM/AgentBench) 在8個不同的環境中, 2024. ICLR.

### 相關資源

- [AI - Agents - 2030/AWSO - 深度研究 - Agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) ——深度研究代理文件及系統的簡介列表.
- [年輕的DubbyDu/ LLM- 代理化](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) ——LLM代理优化方法的论文.
- [伏特特工/出色的特工文件](https://github.com/VoltAgent/awesome-ai-agent-papers) ——2026年的Curated AI代理文件——代理工程,內存,評估,工作流程,以及自主系統.
- [Masamasa59/ai-ai-agent-papers](https://github.com/masamasa59/ai-agent-papers) 人工智能代理研究文件每两周更新一次,
- [tmgthb/自主代理](https://github.com/tmgthb/Autonomous-Agents) ——自主代理研究论文,每日更新.
- [HKUST - 知識comp/ 出色的 LLM - 科學探索](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) ——EMNLP 2025 科學發現中的LLMs調查.
- [Openags/ Aweosome-AI- 科學家- Papers](https://github.com/openags/Awesome-AI-Scientist-Papers) - 收集AI科学家/机器人科学家论文。
- [代理科學. github.io](https://agenticscience.github.io/) ——調查:"從科學AI到代理科學:自主科學發現調查".
- [dspy.ai/GEPA](https://dspy.ai/api/optimizers/GEPA/overview/) GEPA 的 DSPy 集成,
- [OpenAI 烹饪本: 自動代理](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) 使用GEPA式反射演化法,
- [WecoAI/ 很棒的自動研究](https://github.com/WecoAI/awesome-autoresearch) —— AutomaResearch 使用的可核查的痕跡和進度圖( LLM 訓練、 GPU 內核、 聲效代理、 交易等) 。

<!-- AUTORESEARCH-END -->

---

## 如何捐款

我們歡迎為這份名單捐款! 在投稿前 請稍等一下 [捐款指南](contributing.md)這些指引有助于确保你們的贡献符合我們的目標 也符合我們的質量和關切性

**我們要找的是:**
- 新的高质量文件、工具或資源,
- 更新已存在的項目( 斷裂的連結, 已过时的資訊)
- 修正星數、定价或模型細節
- 翻譯和存取改善

**品質標準 :**
- 所有工具都要积极保持(在过去6個月內更新)
- 文章應該來自同行審查地點,
- 數據集應該可以公開存取
- 請加入一行描述, 解釋資源有價值的原因 。

謝謝你對這項工程的熱衷

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>由 <a href="https://promptslab.github.io">提示Lab</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">播放此 repo</a> 如果你覺得有用的話!</sub>
</p>
