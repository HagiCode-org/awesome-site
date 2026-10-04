
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 大语言模型（LLM）已经席卷了~~NLP 社区~~ ~~AI 社区~~ **整个世界**。这里精选了有关大语言模型的论文，尤其是与 ChatGPT 相关的论文。内容还包括 LLM 训练框架、LLM 部署工具、LLM 课程与教程，以及所有公开可用的 LLM 检查点和 API。

## 热门 LLM 项目

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - 对 DeepSeek R1-Zero 清晰、精简且易于上手的复现
- [open-r1](https://github.com/huggingface/open-r1) - 对 DeepSeek-R1 的完全开放复现
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - DeepSeek 推出的第一代推理模型。
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - 探索大规模 MoE 模型的智能。
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - 推动高性价比推理的前沿。
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - 首个开源的 GPT-4o 级别模型。
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - 采用 MoE 架构的语言模型，激活参数为 32B，总参数量为 1T。


## 目录
- [Awesome-LLM ](#awesome-llm-)
  - [里程碑论文](#milestone-papers)
  - [其他论文](#other-papers)
  - [LLM 排行榜](#llm-leaderboard)
  - [开放式 LLM](#open-llm)
  - [LLM 数据](#llm-data)
  - [LLM 评测](#llm-evaluation)
  - [LLM 训练框架](#llm-training-frameworks)
  - [LLM 推理](#llm-inference)
  - [LLM 应用](#llm-applications)
  - [LLM 教程与课程](#llm-tutorials-and-courses)
  - [LLM 图书](#llm-books)
  - [关于 LLM 的精彩观点](#great-thoughts-about-llm)
  - [其他资源](#miscellaneous)

## 里程碑论文

<details>

<summary> 里程碑论文 </summary>
  
|   日期  |       关键词       |      机构     |                                                                                                        论文                                                                                                       |
|:-------:|:--------------------:|:------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-06 |   Transformer 架构   |       Google       | [Attention Is All You Need](https://arxiv.org/pdf/1706.03762.pdf)                                                                                                                                                  |
| 2018-06 |        GPT 1.0       |       OpenAI       | [Improving Language Understanding by Generative Pre-Training](https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf)                                                                             |
| 2018-10 |         BERT         |       Google       | [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423.pdf)                                                                                          |
| 2019-02 |        GPT 2.0       |       OpenAI       | [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)                                          |
| 2019-09 |      Megatron-LM     |       NVIDIA       | [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/pdf/1909.08053.pdf)                                                                                      |
| 2019-10 |          T5          |       Google       | [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://jmlr.org/papers/v21/20-074.html)                                                                                       |
| 2019-10 |         ZeRO         |      Microsoft     | [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/pdf/1910.02054.pdf)                                                                                                       |
| 2020-01 |      缩放定律     |       OpenAI       | [Scaling Laws for Neural Language Models](https://arxiv.org/pdf/2001.08361.pdf)                                                                                                                                    |
| 2020-05 |        GPT 3.0       |       OpenAI       | [Language models are few-shot learners](https://papers.nips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf)                                                                                         |
| 2021-01 |  Switch Transformers |       Google       | [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity](https://arxiv.org/pdf/2101.03961.pdf)                                                                               |
| 2021-08 |         Codex        |       OpenAI       | [Evaluating Large Language Models Trained on Code](https://arxiv.org/pdf/2107.03374.pdf)                                                                                                                           |
| 2021-08 |       基础模型       |      Stanford      | [On the Opportunities and Risks of Foundation Models](https://arxiv.org/pdf/2108.07258.pdf)                                                                                                                        |
| 2021-09 |         FLAN         |       Google       | [Finetuned Language Models are Zero-Shot Learners](https://openreview.net/forum?id=gEZrGCozdqR)                                                                                                                    |
| 2021-10 |          T0          | HuggingFace et al. | [Multitask Prompted Training Enables Zero-Shot Task Generalization](https://arxiv.org/abs/2110.08207)                                                                                                              |
| 2021-12 |         GLaM         |       Google       | [GLaM: Efficient Scaling of Language Models with Mixture-of-Experts](https://arxiv.org/pdf/2112.06905.pdf)                                                                                                         |
| 2021-12 |        WebGPT        |       OpenAI       | [WebGPT: Browser-assisted question-answering with human feedback](https://www.semanticscholar.org/paper/WebGPT%3A-Browser-assisted-question-answering-with-Nakano-Hilton/2f3efe44083af91cef562c1a3451eee2f8601d22) |
| 2021-12 |         Retro        |      DeepMind      | [Improving language models by retrieving from trillions of tokens](https://www.deepmind.com/publications/improving-language-models-by-retrieving-from-trillions-of-tokens)                                         |
| 2021-12 |        Gopher        |      DeepMind      | [Scaling Language Models: Methods, Analysis & Insights from Training Gopher](https://arxiv.org/pdf/2112.11446.pdf)                                                                                                 |
| 2022-01 |          COT         |       Google       | [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/pdf/2201.11903.pdf)                                                                                                      |
| 2022-01 |         LaMDA        |       Google       | [LaMDA: Language Models for Dialog Applications](https://arxiv.org/pdf/2201.08239.pdf)                                                                                                                             |
| 2022-01 |        Minerva       |       Google       | [Solving Quantitative Reasoning Problems with Language Models](https://arxiv.org/abs/2206.14858)                                                                                                                   |
| 2022-01 |  Megatron-Turing NLG |  Microsoft&NVIDIA  | [Using Deep and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model](https://arxiv.org/pdf/2201.11990.pdf)                                                                         |
| 2022-03 |      InstructGPT     |       OpenAI       | [Training language models to follow instructions with human feedback](https://arxiv.org/pdf/2203.02155.pdf)                                                                                                        |
| 2022-04 |         PaLM         |       Google       | [PaLM: Scaling Language Modeling with Pathways](https://arxiv.org/pdf/2204.02311.pdf)                                                                                                                              |
| 2022-04 |      Chinchilla      |      DeepMind      | [Training Compute-Optimal Large Language Models](https://arxiv.org/pdf/2203.15556)                             |
| 2022-05 |          OPT         |        Meta        | [OPT: Open Pre-trained Transformer Language Models](https://arxiv.org/pdf/2205.01068.pdf)                                                                                                                          |
| 2022-05 |          UL2         |       Google       | [Unifying Language Learning Paradigms](https://arxiv.org/abs/2205.05131v1)                                                                                                                                         |
| 2022-06 |       涌现能力       |       Google       | [Emergent Abilities of Large Language Models](https://openreview.net/pdf?id=yzkSU5zdwD)                                                                                                                            |
| 2022-06 |       BIG-bench      |       Google       | [Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models](https://github.com/google/BIG-bench)                                                                                |
| 2022-06 |        METALM        |      Microsoft     | [Language Models are General-Purpose Interfaces](https://arxiv.org/pdf/2206.06336.pdf)                                                                                                                             |
| 2022-09 |        Sparrow       |      DeepMind      | [Improving alignment of dialogue agents via targeted human judgements](https://arxiv.org/pdf/2209.14375.pdf)                                                                                                       |
| 2022-10 |     Flan-T5/PaLM     |       Google       | [Scaling Instruction-Finetuned Language Models](https://arxiv.org/pdf/2210.11416.pdf)                                                                                                                              |
| 2022-10 |       GLM-130B       |      Tsinghua      | [GLM-130B: An Open Bilingual Pre-trained Model](https://arxiv.org/pdf/2210.02414.pdf)                                                                                                                              |
| 2022-11 |         HELM         |      Stanford      | [Holistic Evaluation of Language Models](https://arxiv.org/pdf/2211.09110.pdf)                                                                                                                                     |
| 2022-11 |         BLOOM        |     BigScience     | [BLOOM: A 176B-Parameter Open-Access Multilingual Language Model](https://arxiv.org/pdf/2211.05100.pdf)                                                                                                            |
| 2022-11 |       Galactica      |        Meta        | [Galactica: A Large Language Model for Science](https://arxiv.org/pdf/2211.09085.pdf)                                                                                                                              |
| 2022-12 |        OPT-IML       |        Meta        | [OPT-IML: Scaling Language Model Instruction Meta Learning through the Lens of Generalization](https://arxiv.org/pdf/2212.12017)                                                                                   |
| 2023-01 | Flan 2022 Collection |       Google       | [The Flan Collection: Designing Data and Methods for Effective Instruction Tuning](https://arxiv.org/pdf/2301.13688.pdf)                                                                                           |
| 2023-02 |         LLaMA        |        Meta        | [LLaMA: Open and Efficient Foundation Language Models](https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/)                                                            |
| 2023-02 |       Kosmos-1       |      Microsoft     | [Language Is Not All You Need: Aligning Perception with Language Models](https://arxiv.org/abs/2302.14045)                                                                                                         |
| 2023-03 |        LRU        |       DeepMind       | [Resurrecting Recurrent Neural Networks for Long Sequences](https://arxiv.org/abs/2303.06349)                                                                                                                                          |
| 2023-03 |        PaLM-E        |       Google       | [PaLM-E: An Embodied Multimodal Language Model](https://palm-e.github.io)                                                                                                                                          |
| 2023-03 |         GPT 4        |       OpenAI       | [GPT-4 Technical Report](https://openai.com/research/gpt-4)                                                                                                                                                        |
| 2023-04 |        LLaVA        | UW–Madison&Microsoft | [Visual Instruction Tuning](https://arxiv.org/abs/2304.08485)                                                                                                |
| 2023-04 |        Pythia        |  EleutherAI et al. | [Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling](https://arxiv.org/abs/2304.01373)                                                                                                |
| 2023-05 |       Dromedary      |     CMU et al.     | [Principle-Driven Self-Alignment of Language Models from Scratch with Minimal Human Supervision](https://arxiv.org/abs/2305.03047)                                                                                 |
| 2023-05 |        PaLM 2        |       Google       | [PaLM 2 Technical Report](https://ai.google/static/documents/palm2techreport.pdf)                                                                                                                                  |
| 2023-05 |         RWKV         |       Bo Peng      | [RWKV: Reinventing RNNs for the Transformer Era](https://arxiv.org/abs/2305.13048)                                                                                                                                 |
| 2023-05 |          DPO         |      Stanford      | [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/pdf/2305.18290.pdf)                                                                                             |
| 2023-05 |          ToT         |  Google&Princeton  | [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/pdf/2305.10601.pdf)                                                                                                    |
| 2023-07 |        LLaMA2       |        Meta        | [Llama 2: Open Foundation and Fine-Tuned Chat Models](https://arxiv.org/pdf/2307.09288.pdf)                                                                                                                        |
| 2023-10 |      Mistral 7B      |       Mistral      | [Mistral 7B](https://arxiv.org/pdf/2310.06825.pdf)                                                                                                                                                                 |
| 2023-12 |         Mamba        |    CMU&Princeton   | [Mamba: Linear-Time Sequence Modeling with Selective State Spaces](https://arxiv.org/pdf/2312.00752)                                                                                                               |
| 2024-01 |         DeepSeek-v2        |      DeepSeek     | [DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model](https://arxiv.org/abs/2405.04434)                                                                                                                          |
| 2024-02 |         OLMo        |      Ai2     | [OLMo: Accelerating the Science of Language Models](https://arxiv.org/abs/2402.00838) |
| 2024-05 |         Mamba2        |      CMU&Princeton     | [Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality](https://arxiv.org/abs/2405.21060)|
| 2024-05 |         Llama3        |      Meta     | [The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783) |
| 2024-06 |         FineWeb         |      HuggingFace     | [The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale](https://arxiv.org/abs/2406.17557) |
| 2024-09 |         OLMoE        |       Ai2     | [OLMoE: Open Mixture-of-Experts Language Models](https://arxiv.org/abs/2409.02060) |
| 2024-12 |         Qwen2.5        |      Alibaba     | [Qwen2.5 Technical Report](https://arxiv.org/abs/2412.15115) |
| 2024-12 |         DeepSeek-V3        |      DeepSeek     | [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437v1) |
| 2025-01 |         DeepSeek-R1        |      DeepSeek     | [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) |

</details>

## 其他论文
> [!NOTE]
> 如果你对 LLM 领域感兴趣，上述里程碑论文列表有助于了解其发展历程和最新进展。不过，LLM 的每个研究方向都有独特的见解和贡献，这些内容对于全面理解该领域至关重要。各个子领域的详细论文列表请参阅以下链接：

<details>
  <summary> 其他论文 </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - LLM 幻觉相关论文列表。
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - LLM 幻觉检测论文列表。
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - 精选的 LLM 实用指南资源列表
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - 供 ChatGPT 模型使用的提示词示例合集。
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - 供 ChatGPT 模型使用的中文提示词示例合集。
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - 精选的 OpenAI ChatGPT 和 GPT-3 相关资源列表。
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) -  这一研究趋势始于《Chain of Thought Prompting Elicits Reasoning in Large Language Models》。
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - 如何让 LLM 生成可靠的推理并做出基于推理的决策。
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - 这一研究趋势始于 `Natrural-Instruction`（ACL 2022）、`FLAN`（ICLR 2022）和 `T0`（ICLR 2022）。
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - 大语言模型论文与资源列表。
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - 关于使用语言模型进行推理的论文与资源合集。
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - 衡量 LLM 的推理表现
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - 精选的 GPT、ChatGPT、OpenAI、LLM 等相关优秀项目和资源列表。
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - 关于 [OpenAI GPT-3 API](https://openai.com/blog/openai-api/) 的演示和文章合集。
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - 用于 LLM 指令微调、RLHF 和评测的人类偏好数据集合集。
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - 学习 RWKV 时可能有用的资料和教程。
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - 大语言模型模型编辑相关的论文与资源列表。
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - 精选的 LLM 安全工具、文档和项目。
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - 关于让大语言模型（LLM）与人类对齐的论文和资源合集。
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - 精选的优秀代码 LLM 研究资源列表。
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - 优秀的 LLM 压缩研究论文和工具。
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - 优秀的 LLM 系统研究论文。
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - 开源且持续维护的 LLM 应用 Web 应用合集。
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - 日语 LLM 汇总——日语 LLM 概览。
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - 医学领域 LLM 综述论文列表。
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - 精选的优秀 LLM 推理论文及其代码列表。
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - 精选的 3D 世界多模态大语言模型列表，涵盖 3D 理解、推理、生成和具身智能体。
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - 专为聊天机器人训练设计的数据集精选合集，包含每个数据集的链接、规模、语言、用途和简要说明。
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - 整理开源的中文大语言模型，以规模较小、可私有化部署、训练成本较低的模型为主，包括底座模型，垂直领域微调及应用，数据集与教程等。

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - 将大语言模型（LLM）用于各种优化任务（Opt）是一个新兴研究领域。这里汇集了 LLM4Opt 相关参考资料和论文。

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - 该论文列表聚焦于语言模型的理论或实证分析，例如学习动态、表达能力、可解释性、泛化能力及其他有趣主题。
  
</details>

## LLM 排行榜
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - 一个大语言模型（LLM）基准测试平台，以众包方式开展匿名、随机的对战。
- [LiveBench](https://livebench.ai/#/) - 一项具有挑战性且无数据污染的 LLM 基准测试。
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - 旨在跟踪、排名和评测新发布的 LLM 与聊天机器人。
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - 使用 Nous 基准套件自动评测指令遵循语言模型。
<details>
  <summary> 其他排行榜 </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - 一个专注于古汉语理解的评测基准。 
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - 一个开创性的基准，专门用于全面评估 LLM 的诚实性。 
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - 评估 LLM 调用外部函数/工具的能力。
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - 一个由专家主导的中文 LLM 基准测试。
- [CompassRank](https://rank.opencompass.org.cn) - CompassRank 致力于探索最先进的语言和视觉模型，为行业和研究提供全面、客观、中立的评测参考。
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - 一个用于评估在异构输入源（知识库、文本、表格、信息框）混合数据上运行的问答方法的基准。
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - 一个用于评估大语言模型（LLM）在文本和视觉想象相关多种任务中表现的基准。
- [FELM](https://hkust-nlp.github.io/felm) - 一个元基准，用于评估事实性评估器衡量大语言模型（LLM）输出的效果。 
- [InfiBench](https://infi-coder.github.io/infibench) - 一个专门用于评估大语言模型（LLM）回答现实编码问题能力的基准。
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - 一个用于评估大语言模型法律领域能力的基准。
- [LLMEval](http://llmeval.com) - 重点了解这些模型在各种场景中的表现，并从可解释性角度分析结果。 
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - 一个用于评估大语言模型在多种多模态推理任务中表现的基准，任务包括语言、自然科学与社会科学、物理与社会常识、时间推理、代数和几何。
- [MathEval](https://matheval.ai) - 一个全面的基准测试平台，旨在通过 20 个领域、近 30,000 道数学题评估大模型的数学能力。
- [MixEval](https://mixeval.github.io/#leaderboard) - 一个基于真实标注、由现成基准混合集构建的动态基准，可对 LLM 进行高效排名（与 Chatbot Arena 的相关性为 0.96），同时支持本地快速运行（耗时和成本仅为运行 MMLU 的 6%）。
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - 一个用于评估大语言模型跨多种语言回答医学问题能力的基准。 
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - 一个多模态问答基准，旨在评估 AI 模型理解人类信念和目标的认知能力。
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - 一个用于评估 AI 模型在数学、物理、化学、生物等多个学科表现的基准。
- [PubMedQA](https://pubmedqa.github.io) - 一个生物医学问答基准，旨在利用 PubMed 摘要回答研究相关问题。
- [SciBench](https://scibench-ucla.github.io/#leaderboard) -  一个用于评估大语言模型（LLM）解决化学、物理和数学等领域复杂大学级科学问题能力的基准。
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - 一个用于评估大语言模型（LLM）多项任务表现的基准平台，尤其关注自然语言理解、推理和泛化等方面。 
- [SuperLim](https://lab.kb.se/leaderboard/results) - 一个瑞典语理解基准，用于评估自然语言处理（NLP）模型在论证分析、语义相似度和文本蕴含等任务中的表现。
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - 一个大规模文档视觉问答（VQA）数据集，旨在支持复杂文档理解，尤其是财务报告理解。
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - 一个聚焦现实金融数据的大规模问答基准，整合表格和文本信息。
- [VisualWebArena](https://jykoh.com/vwa) - 一个用于评估多模态 Web 智能体执行真实视觉 grounding 任务表现的基准。
- [We-Math](https://we-math.github.io/#leaderboard) - 一个用于评估大型多模态模型（LMM）类人数学推理能力的基准。
- [WHOOPS!](https://whoops-benchmark.github.io) - 一个基准数据集，通过违背常规预期的图像测试 AI 进行视觉常识推理的能力。

</details>


## 开放式 LLM
<details>
<summary>DeepSeek</summary>
  
  - [DeepSeek-Math-7B](https://huggingface.co/collections/deepseek-ai/deepseek-math-65f2962739da11599e441681)
  - [DeepSeek-Coder-1.3|6.7|7|33B](https://huggingface.co/collections/deepseek-ai/deepseek-coder-65f295d7d8a0a29fe39b4ec4)
  - [DeepSeek-VL-1.3|7B](https://huggingface.co/collections/deepseek-ai/deepseek-vl-65f295948133d9cf92b706d3)
  - [DeepSeek-MoE-16B](https://huggingface.co/collections/deepseek-ai/deepseek-moe-65f29679f5cf26fe063686bf)
  - [DeepSeek-v2-236B-MoE](https://arxiv.org/abs/2405.04434)
  - [DeepSeek-Coder-v2-16|236B-MOE](https://github.com/deepseek-ai/DeepSeek-Coder-V2)
  - [DeepSeek-V2.5](https://huggingface.co/deepseek-ai/DeepSeek-V2.5)
  - [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)
  - [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)

</details>
<details>
<summary>Alibaba</summary>

  - [Qwen-1.8B|7B|14B|72B](https://huggingface.co/collections/Qwen/qwen-65c0e50c3f1ab89cb8704144)
  - [Qwen1.5-0.5B|1.8B|4B|7B|14B|32B|72B|110B|MoE-A2.7B](https://qwenlm.github.io/blog/qwen1.5/)
  - [Qwen2-0.5B|1.5B|7B|57B-A14B-MoE|72B](https://qwenlm.github.io/blog/qwen2)
  - [Qwen2.5-0.5B|1.5B|3B|7B|14B|32B|72B](https://qwenlm.github.io/blog/qwen2.5/)
  - [CodeQwen1.5-7B](https://qwenlm.github.io/blog/codeqwen1.5/)
  - [Qwen2.5-Coder-1.5B|7B|32B](https://qwenlm.github.io/blog/qwen2.5-coder/)
  - [Qwen2-Math-1.5B|7B|72B](https://qwenlm.github.io/blog/qwen2-math/)
  - [Qwen2.5-Math-1.5B|7B|72B](https://qwenlm.github.io/blog/qwen2.5-math/)
  - [Qwen-VL-7B](https://huggingface.co/Qwen/Qwen-VL)
  - [Qwen2-VL-2B|7B|72B](https://qwenlm.github.io/blog/qwen2-vl/)
  - [Qwen2-Audio-7B](https://qwenlm.github.io/blog/qwen2-audio/)
  - [Qwen2.5-VL-3|7|72B](https://qwenlm.github.io/blog/qwen2.5-vl/)
  - [Qwen2.5-1M-7|14B](https://qwenlm.github.io/blog/qwen2.5-1m/)

</details>

<details>
<summary>Meta</summary>

  - [Llama 3.2-1|3|11|90B](https://llama.meta.com/)
  - [Llama 3.1-8|70|405B](https://llama.meta.com/)
  - [Llama 3-8|70B](https://llama.meta.com/llama3/)
  - [Llama 2-7|13|70B](https://llama.meta.com/llama2/)
  - [Llama 1-7|13|33|65B](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/)
  - [OPT-1.3|6.7|13|30|66B](https://arxiv.org/abs/2205.01068)

</details>

<details>
<summary>Mistral AI</summary>

  - [Codestral-7|22B](https://mistral.ai/news/codestral/)
  - [Mistral-7B](https://mistral.ai/news/announcing-mistral-7b/)
  - [Mixtral-8x7B](https://mistral.ai/news/mixtral-of-experts/)
  - [Mixtral-8x22B](https://mistral.ai/news/mixtral-8x22b/)

</details>
<details>
<summary>Google</summary>

  - [Gemma2-9|27B](https://blog.google/technology/developers/google-gemma-2/)
  - [Gemma-2|7B](https://blog.google/technology/developers/gemma-open-models/)
  - [RecurrentGemma-2B](https://github.com/google-deepmind/recurrentgemma)
  - [T5](https://arxiv.org/abs/1910.10683)

</details>
<details>
<summary>Apple</summary>

  - [OpenELM-1.1|3B](https://huggingface.co/apple/OpenELM)

</details>
<details>
<summary>Microsoft</summary>

  - [Phi1-1.3B](https://huggingface.co/microsoft/phi-1)
  - [Phi2-2.7B](https://huggingface.co/microsoft/phi-2)
  - [Phi3-3.8|7|14B](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct)

</details>
<details>
<summary>AllenAI</summary>

  - [OLMo-7B](https://huggingface.co/collections/allenai/olmo-suite-65aeaae8fe5b6b2122b46778)

</details>
<details>
<summary>xAI</summary>

  - [Grok-1-314B-MoE](https://x.ai/blog/grok-os)

</details>
<details>
<summary>Cohere</summary>

  - [Command R-35B](https://huggingface.co/CohereForAI/c4ai-command-r-v01)

</details>




<details>
<summary>01-ai</summary>

  - [Yi-34B](https://huggingface.co/collections/01-ai/yi-2023-11-663f3f19119ff712e176720f)
  - [Yi1.5-6|9|34B](https://huggingface.co/collections/01-ai/yi-15-2024-05-663f3ecab5f815a3eaca7ca8)
  - [Yi-VL-6B|34B](https://huggingface.co/collections/01-ai/yi-vl-663f557228538eae745769f3)

</details>
 
 
<details>
<summary>Baichuan</summary>

   - [Baichuan-7|13B](https://huggingface.co/baichuan-inc)
   - [Baichuan2-7|13B](https://huggingface.co/baichuan-inc)

</details>

<details>
<summary>Nvidia</summary>

   - [Nemotron-4-340B](https://huggingface.co/nvidia/Nemotron-4-340B-Instruct)

</details>

<details>
<summary>BLOOM</summary>

   - [BLOOMZ&mT0](https://huggingface.co/bigscience/bloomz)

</details>
<details>
<summary>Zhipu AI</summary>

   - [GLM-2|6|10|13|70B](https://huggingface.co/THUDM)
   - [CogVLM2-19B](https://huggingface.co/collections/THUDM/cogvlm2-6645f36a29948b67dc4eef75)

</details>
<details>
<summary>OpenBMB</summary>

  - [MiniCPM-2B](https://huggingface.co/collections/openbmb/minicpm-2b-65d48bf958302b9fd25b698f)
  - [OmniLLM-12B](https://huggingface.co/openbmb/OmniLMM-12B)
  - [VisCPM-10B](https://huggingface.co/openbmb/VisCPM-Chat)
  - [CPM-Bee-1|2|5|10B](https://huggingface.co/collections/openbmb/cpm-bee-65d491cc84fc93350d789361)

</details>
<details>
<summary>RWKV Foundation</summary>

  - [RWKV-v4|5|6](https://huggingface.co/RWKV)minicpm-2b-65d48bf958302b9fd25b698f)

</details>

<details>
<summary>ElutherAI</summary>

  - [Pythia-1|1.4|2.8|6.9|12B](https://github.com/EleutherAI/pythia)

</details>

<details>
<summary>Stability AI</summary>

  - [StableLM-3B](https://huggingface.co/stabilityai/stablelm-3b-4e1t)
  - [StableLM-v2-1.6B](https://huggingface.co/stabilityai/stablelm-2-1_6b)
  - [StableLM-v2-12B](https://huggingface.co/stabilityai/stablelm-2-12b)
  - [StableCode-3B](https://huggingface.co/collections/stabilityai/stable-code-64f9dfb4ebc8a1be0a3f7650)

</details>
<details>
<summary>BigCode</summary>

  - [StarCoder-1|3|7B](https://huggingface.co/collections/bigcode/%E2%AD%90-starcoder-64f9bd5740eb5daaeb81dbec)
  - [StarCoder2-3|7|15B](https://huggingface.co/collections/bigcode/starcoder2-65de6da6e87db3383572be1a)

</details>
<details>
<summary>DataBricks</summary>

  - [MPT-7B](https://www.databricks.com/blog/mpt-7b)
  - [DBRX-132B-MoE](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm)

</details>
<details>
<summary>Shanghai AI Laboratory</summary>
  
  - [InternLM2-1.8|7|20B](https://huggingface.co/collections/internlm/internlm2-65b0ce04970888799707893c)
  - [InternLM-Math-7B|20B](https://huggingface.co/collections/internlm/internlm2-math-65b0ce88bf7d3327d0a5ad9f)
  - [InternLM-XComposer2-1.8|7B](https://huggingface.co/collections/internlm/internlm-xcomposer2-65b3706bf5d76208998e7477)
  - [InternVL-2|6|14|26](https://huggingface.co/collections/OpenGVLab/internvl-65b92d6be81c86166ca0dde4)

    
</details>
<details>
<summary>Moonshot AI</summary>
  
  - [Moonlight-A3B](https://huggingface.co/collections/moonshotai/moonlight-a3b-67f67b029cecfdce34f4dc23)
  - [Kimi-VL-A3B](https://huggingface.co/collections/moonshotai/kimi-vl-a3b-67f67b6ac91d3b03d382dd85)
  - [Kimi-K2](https://huggingface.co/collections/moonshotai/kimi-k2-6871243b990f2af5ba60617d)
    
</details>


## LLM 数据
> 参考： [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - 开源工具包，提供预构建模块以高效处理非结构化数据，并支持从本地扩展到集群。
- [Datatrove](https://github.com/huggingface/datatrove) - 通过提供一组平台无关、可定制的流水线处理模块，让数据处理摆脱繁琐脚本。
- [Dingo](https://github.com/DataEval/dingo) - Dingo：全面的数据质量评估工具
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - 用于创建高质量大语言模型训练数据集的强大工具

## LLM 评测：
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - 用于少样本评测语言模型的框架。
- [lighteval](https://github.com/huggingface/lighteval) - Hugging Face 内部使用的轻量级 LLM 评测套件。
- [simple-evals](https://github.com/openai/simple-evals) - OpenAI 提供的评测工具。

<details>
<summary>其他评测框架</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - 用于评测开放语言模型的代码仓库。
- [MixEval](https://github.com/Psycoy/MixEval) - 一个可靠、开箱即用的评测套件，兼容开源和专有模型，并支持 MixEval 及其他基准。
- [HELM](https://github.com/stanford-crfm/helm) - 语言模型整体评测（HELM）框架，旨在提高语言模型的透明度。
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - 此代码仓库包含用于在留出任务上定量评估 Alpaca 和 Flan-T5 等指令微调模型的代码。
- [Giskard](https://github.com/Giskard-AI/giskard) - 用于 LLM 应用（尤其是 RAG）的测试与评测库
- [LangSmith](https://www.langchain.com/langsmith) - LangChain 框架提供的统一平台，支持 LLM 应用的评测、HITL（人机协同）协作、日志记录和监控。  
- [Ragas](https://github.com/explodinggradients/ragas) - 帮助评估检索增强生成（RAG）流水线的框架。

</details>



## LLM 训练框架

- [Meta Lingua](https://github.com/facebookresearch/lingua) - 用于研究 LLM 的精简、高效且易于修改的代码库。
- [Litgpt](https://github.com/Lightning-AI/litgpt) - 提供 20 多种高性能 LLM，以及用于预训练、微调和大规模部署的方案。
- [nanotron](https://github.com/huggingface/nanotron) - 极简的大语言模型 3D 并行训练方案。
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed 是一个深度学习优化库，让分布式训练和推理更简单、高效且有效。
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - 用于大规模训练 Transformer 模型的持续研究项目。
- [torchtitan](https://github.com/pytorch/torchtitan) - 用于大模型训练的原生 PyTorch 库。

<details>
<summary>其他框架</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - NVIDIA Megatron-LM 的 DeepSpeed 版本，额外支持 MoE 模型训练、课程学习、3D 并行等功能。 
  - [torchtune](https://github.com/pytorch/torchtune) - 用于 LLM 微调的原生 PyTorch 库。
  - [ROLL](https://github.com/alibaba/ROLL) - 用于大语言模型强化学习的高效、易用扩展库。
  - [veRL](https://github.com/volcengine/verl) - veRL 是一个灵活高效的 LLM 强化学习框架。
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - 面向大语言模型（LLM）、多模态模型（MM）、自动语音识别（ASR）、文本转语音（TTS）和计算机视觉（CV）领域研究人员及 PyTorch 开发者打造的生成式 AI 框架。
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - 让大型 AI 模型更便宜、更快、更易于使用。
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - 高效训练大模型。
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow：让模型并行更简单。
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - 简单、高性能且可扩展的 Jax LLM！
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - 基于 DeepSpeed 库，在 GPU 上实现模型并行自回归 Transformer。
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - 用于加速 NVIDIA GPU 上 Transformer 模型训练的库。
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - 易用、可扩展且高性能的 RLHF 框架（支持 70B+ PPO 全量微调、迭代 DPO、LoRA、RingAttention 和 RFT）。
  - [TRL](https://huggingface.co/docs/trl/en/index) - TRL 是一套完整的库，提供使用强化学习训练 Transformer 语言模型的工具，涵盖监督微调（SFT）、奖励建模（RM）到近端策略优化（PPO）等步骤。
  - [unslothai](https://github.com/unslothai/unsloth) - 一个专注于高效微调的框架。其 GitHub 页面提供适用于各种 LLM 的即用型微调模板，让你可以在 Google Colab 云端免费使用自己的数据进行训练。
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - 用于微调和评测 LLM 的开源框架。它简化了不同训练配置的实验流程，便于复现和分享结果，并支持 LoRA、QLoRA、DeepSpeed、PEFT 和多 GPU 配置等功能。

</details>


## LLM 推理

> 参考： [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - SGLang 是一个用于大语言模型和视觉语言模型的快速服务框架。
- [vLLM](https://github.com/vllm-project/vllm) - 面向 LLM 的高吞吐、内存高效推理与服务引擎。
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - 使用 C/C++ 进行 LLM 推理。
- [ollama](https://github.com/ollama/ollama) - 快速运行 Llama 3、Mistral、Gemma 和其他大语言模型。
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - 用于部署和提供大语言模型（LLM）服务的工具包。
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Nvidia 的 LLM 推理框架
<details>
<summary>其他部署工具</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA 的 LLM 推理框架（已转至 TensorRT-LLM）
- [MInference](https://github.com/microsoft/MInference) - 为加速长上下文 LLM 的推理，该工具采用近似动态稀疏计算注意力，在保持准确率的同时，可将 A100 上预填充阶段的推理延迟最多降低 10 倍。
- [exllama](https://github.com/turboderp/exllama) - 针对量化权重使用场景，对 HF transformers 中 Llama 实现进行的内存效率更高的重写。
- [FastChat](https://github.com/lm-sys/FastChat) - 分布式多模型 LLM 服务系统，提供 Web UI 和兼容 OpenAI 的 RESTful API。
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - 极速 LLM 推理。
- [SkyPilot](https://github.com/skypilot-org/skypilot) - 在任意云上运行 LLM 和批处理任务。通过简洁的界面实现最大限度节省成本、最高 GPU 可用性和托管执行。
- [Haystack](https://haystack.deepset.ai/) - 一个开源 NLP 框架，可让你使用 Hugging Face、OpenAI 和 Cohere 提供的 LLM 及基于 Transformer 的模型与自己的数据交互。 
- [OpenLLM](https://github.com/bentoml/OpenLLM) - 在生产环境中微调、提供服务、部署和监控任意开源 LLM。[BentoML](https://bentoml.com/) 已在生产环境中将其用于基于 LLM 的应用。
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) -  MII 基于 DeepSpeed 实现类似 vLLM 的低延迟、高吞吐推理。
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - 使用 Rust 进行文本嵌入推理，采用 HFOIL 许可证。
- [Infinity](https://github.com/michaelfeil/infinity) - 使用 Python 进行文本嵌入推理
- [LMDeploy](https://github.com/InternLM/lmdeploy) - 面向 LLM 和 VL 的高吞吐、低延迟推理与服务框架
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - 用于 LLM 训练的高效 Triton 内核。
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - llama.cpp 的分布式实现，可让你在日常设备上运行 70B 级 LLM。
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - 使用 Ansible，只需最少配置即可轻松在虚拟机上部署任意 LLM。

</details>


## LLM 应用
> 参考： [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy：用于编程而非提示词工程的基础模型框架。
- [LangChain](https://github.com/hwchase17/langchain) — 用于串联语言模型提示词序列的热门 Python/JavaScript 库。
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — 用于为 LLM 应用增强数据能力的 Python 库。

<details>
<summary>更多应用</summary>


- [MLflow](https://mlflow.org/) - MLflow：机器学习端到端生命周期的开源框架，帮助开发者跟踪实验、评测模型/提示词、部署模型，并通过追踪增强可观测性。
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - 用于本地 LLM 多种任务的综合工具集。
- [LiteChain](https://github.com/rogeriochaves/litechain) - 用于组合 LLM 的轻量级 LangChain 替代方案 
- [magentic](https://github.com/jackmpcollins/magentic) - 将 LLM 无缝集成为 Python 函数
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - 通过 wechaty 在微信上使用 ChatGPT
- [promptfoo](https://github.com/typpo/promptfoo) - 测试提示词、评测并比较 LLM 输出、发现回归问题并提升提示词质量。
- [Agenta](https://github.com/agenta-ai/agenta) -  轻松构建、管理版本、评测并部署由 LLM 驱动的应用。
- [Serge](https://github.com/serge-chat/serge) - 基于 llama.cpp 打造的聊天界面，可运行 Alpaca 模型。无需 API 密钥，完全自托管！
- [Langroid](https://github.com/langroid/langroid) - 通过多智能体编程驾驭 LLM
- [Embedchain](https://github.com/embedchain/embedchain) - 基于你的数据集创建类 ChatGPT 机器人的框架。
- [Opik](https://github.com/comet-ml/opik) - 借助一套可观测性工具，自信地评测、测试并交付 LLM 应用，在开发和生产全生命周期中校准语言模型输出。
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - 通过提供统一的微服务来访问和测试多个 AI 模型，简化 LLM 评测。
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - 原名 langchain-ChatGLM，是基于 langchain 的本地知识库 LLM（如 ChatGLM）问答应用。
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - 通过 [LeptonAI](https://github.com/leptonai)，使用不到 500 行代码构建自己的对话式搜索引擎。
- [Robocorp](https://github.com/robocorp/robocorp) - 随时随地使用 Python 创建、部署和运行 Actions，以增强 AI 智能体和助手。内置丰富的库、辅助工具和日志功能。
- [Tune Studio](https://studio.tune.app/) - 供开发者微调和部署 LLM 的试验场
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - 使用 LLM 链在本地运行网页搜索
- [AI Gateway](https://github.com/Portkey-AI/gateway) — 该网关通过统一 API 简化对 100 多种开源和闭源模型的请求。它已适用于生产环境，支持缓存、故障回退、重试、超时、负载均衡，也可部署到边缘以最大限度降低延迟。
- [talkd.ai dialog](https://github.com/talkdai/dialog) - 用于部署任意 RAG 或 LLM 并添加插件的简易 API。
- [Wllama](https://github.com/ngxson/wllama) - llama.cpp 的 WebAssembly 绑定——支持在浏览器中进行 LLM 推理
- [GPUStack](https://github.com/gpustack/gpustack) - 用于运行 LLM 的开源 GPU 集群管理器
- [MNN-LLM](https://github.com/alibaba/MNN) -- 设备端推理框架，包含在设备（手机/PC/IoT）上进行 LLM 推理的功能
- [CAMEL](https://www.camel-ai.org/) - 首个 LLM 多智能体框架。 
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - 一个交互式聊天项目，利用 Ollama/OpenAI/MistralAI 的 LLM，快速理解和浏览 GitHub 代码仓库或压缩文件资源。
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - 在 Linux（或 MacOS）系统上通过纯 Shell 脚本，使用 Ollama（或 OpenAI、MistralAI）模型与 LLM 交互，无需任何依赖即可提升系统管理智能化水平。
- [MindSQL](https://github.com/Mindinventory/MindSQL) - 一个用于文本转 SQL 的 Python 包，支持自托管功能，并通过 RESTful API 兼容专有及开源 LLM。
- [Langfuse](https://github.com/langfuse/langfuse) -  开源 LLM 工程平台 🪢：追踪、评测、提示词管理和 Playground。 
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - AdalFlow：用于构建并自动优化 LLM 应用的库。
- [Guidance](https://github.com/microsoft/guidance) — Microsoft 推出的实用 Python 库，使用 Handlebars 模板交织生成、提示词和逻辑控制。
- [Evidently](https://github.com/evidentlyai/evidently) — 用于评测、测试和监控 ML 及 LLM 驱动系统的开源框架。
- [Chainlit](https://docs.chainlit.io/overview) — 用于构建聊天机器人界面的 Python 库。
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — 用于验证输出并在失败时重试的 Python 库。目前仍处于 alpha 阶段，可能存在不足和错误。
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — Microsoft 推出的 Python/C#/Java 库，支持提示词模板、函数链、向量化记忆和智能规划。
- [Prompttools](https://github.com/hegelai/prompttools) — 用于测试和评测模型、向量数据库及提示词的开源 Python 工具。
- [Outlines](https://github.com/normal-computing/outlines) — 提供领域专用语言以简化提示词编写并约束生成内容的 Python 库。
- [Promptify](https://github.com/promptslab/Promptify) — 用于通过语言模型执行 NLP 任务的小型 Python 库。
- [Scale Spellbook](https://scale.com/spellbook) — 用于构建、比较和交付语言模型应用的付费产品。
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — 用于测试和改进提示词的付费产品。
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — 用于跟踪模型训练和提示词工程实验的付费产品。
- [OpenAI Evals](https://github.com/openai/evals) — 用于评测语言模型和提示词任务表现的开源库。

- [Arthur Shield](https://www.arthur.ai/get-started) — 用于检测毒性、幻觉、提示词注入等问题的付费产品。
- [LMQL](https://lmql.ai) — 用于与 LLM 交互的编程语言，支持类型化提示词、控制流、约束和工具。
- [ModelFusion](https://github.com/lgrammel/modelfusion) - 用于通过 LLM 和其他 ML 模型（语音转文本、文本转语音、图像生成）构建应用的 TypeScript 库。
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — 一个中英双语知识抽取模型，采用知识图谱和自然语言处理技术。
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - 用于构建 LLM 用户界面的 React 库。
- [Wordware](https://www.wordware.ai) - 一个托管于 Web 的 IDE，让非技术领域专家与 AI 工程师合作构建特定任务的 AI 智能体。我们将提示词视为一种新的编程语言，而不是低代码/无代码模块。
- [Wallaroo.AI](https://github.com/WallarooLabs) - 在从云端到边缘的任何环境中大规模部署、管理和优化任意模型。让你在几分钟内从 Python Notebook 迈向推理部署。
- [Dify](https://github.com/langgenius/dify) - 一个开源 LLM 应用开发平台，提供直观界面，简化 AI 工作流、模型管理和生产部署。
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - 一个开源 LLM 应用，可轻松便捷地构建多智能体 LLM 应用，并支持模型部署和微调。
- [MemFree](https://github.com/memfreeme/memfree) - 开源混合式 AI 搜索引擎，可即时从互联网、书签、笔记和文档中获取准确答案。支持一键部署。
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - 面向 RAG 的开源 AutoML 工具，可自动优化 RAG 答案质量，覆盖从生成评测数据集到部署优化后 RAG 流水线的流程。
- [Epsilla](https://github.com/epsilla-cloud) - 一体化 LLM 智能体平台，可结合你的私有数据和知识，第一天即可交付可用于生产环境的 AI 智能体。
- [Arize-Phoenix](https://phoenix.arize.com/) - 在 Notebook 环境中运行的开源 ML 可观测性工具。可监控并微调 LLM、CV 和表格模型。
- [LLM]([https://github.com/simonw/llm) - 一个 CLI 工具和 Python 库，可通过远程 API 或安装并运行在本机上的模型与大语言模型交互。
- [Just-Chat](https://github.com/longevity-genie/just-chat) - 轻松快速地创建 LLM 智能体并与之聊天！
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - 面向智能体工作流的开源 CLI 安全扫描器。扫描工作流源代码、检测漏洞，并生成交互式可视化和详细安全报告。支持 LangGraph、CrewAI、n8n、OpenAI Agents 等。
- [LangWatch](https://github.com/langwatch/langwatch) - 开源 LLM 可观测性、提示词评估和提示词优化平台。
- [TensorZero](https://www.tensorzero.com/) - TensorZero 是一个用于构建生产级 LLM 应用的开源框架，整合了 LLM 网关、可观测性、优化、评测和实验功能。

</details>

## LLM 教程与课程
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - 我最喜欢的系列！
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - 高质量且富有教育意义、不容错过的视频。
- [Alexander Rush Series](https://rush-nlp.com/projects/) - 高质量且富有教育意义、不容错过的资料。
- [llm-course](https://github.com/mlabonne/llm-course) - 大语言模型（LLM）入门课程，附带学习路线图和 Colab Notebook。
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - 基础模型最新进展。
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - 用于 LLM 分词的常见字节对编码（BPE）算法的简洁精炼实现。
- [femtoGPT](https://github.com/keyvank/femtoGPT) - 极简生成式预训练 Transformer 的纯 Rust 实现。
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - 100 多张 LLM/RL 算法图谱📚。


## LLM 图书
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - 随书附带一个 [GitHub 仓库](https://github.com/benman1/generative_ai_with_langchain)，展示了许多功能。
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - 一本指导你构建可运行 LLM 的指南。
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - 讲解如何从零开始编写生成式预训练 Transformer（GPT）。
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - 通过这本配有 275 多幅定制插图的指南，探索大语言模型的世界！
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - 一本基于以下研究的大语言模型入门教材：[*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## 关于 LLM 的精彩观点
- [Why did all of the public reproduction of GPT-3 fail?](https://jingfengyang.github.io/gpt)
- [A Stage Review of Instruction Tuning](https://yaofu.notion.site/June-2023-A-Stage-Review-of-Instruction-Tuning-f59dbfc36e2d4e12a33443bd6b2012c2)
- [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)
- [Why you should work on AI AGENTS!](https://www.youtube.com/watch?v=fqVLjtvWgq8)
- [Google "We Have No Moat, And Neither Does OpenAI"](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)
- [AI competition statement](https://petergabriel.com/news/ai-competition-statement/)
- [Prompt Engineering](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
- [Noam Chomsky: The False Promise of ChatGPT](https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html)
- [Is ChatGPT 175 Billion Parameters? Technical Analysis](https://orenleung.super.site/is-chatgpt-175-billion-parameters-technical-analysis)
- [The Next Generation Of Large Language Models ](https://www.notion.so/Awesome-LLM-40c8aa3f2b444ecc82b79ae8bbd2696b)
- [Large Language Model Training in 2023](https://research.aimultiple.com/large-language-model-training/)
- [How does GPT Obtain its Ability? Tracing Emergent Abilities of Language Models to their Sources](https://yaofu.notion.site/How-does-GPT-Obtain-its-Ability-Tracing-Emergent-Abilities-of-Language-Models-to-their-Sources-b9a57ac0fcf74f30a1ab9e3e36fa1dc1)
- [Open Pretrained Transformers](https://www.youtube.com/watch?v=p9IxoSkvZ-M&t=4s)
- [Scaling, emergence, and reasoning in large language models](https://docs.google.com/presentation/d/1EUV7W7X_w0BDrscDhPg7lMGzJCkeaPkGCJ3bN8dluXc/edit?pli=1&resourcekey=0-7Nz5A7y8JozyVrnDtcEKJA#slide=id.g16197112905_0_0)

## 其他资源


- [Emergent Mind](https://www.emergentmind.com) - 由 GPT-4 精选并解读的最新 AI 新闻。
- [ShareGPT](https://sharegpt.com) - 一键分享你最精彩的 ChatGPT 对话。
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - 推出 Cohere Summarize Beta：全新的文本摘要端点
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPT Wrapper 是一个非官方开源 Python API 和 CLI，可让你与 ChatGPT 交互。
- [Cursor](https://www.cursor.so) - 借助强大的 AI 编写、编辑代码并围绕代码进行交流。
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - 一个展示 GPT-4 语言模型能力的实验性开源应用。 
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - 当 LLM 遇上领域专家。
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - 一个易于使用的大语言模型编辑框架。
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - 一个适用于 OpenAI ChatGPT 的 Chrome 扩展，可轻松隐藏和显示聊天记录，增强用户隐私保护，尤其适合屏幕共享时使用。
- [AI For Developers](https://aifordevelopers.org) - 面向开发者的 AI 工具和智能体列表

## 参与贡献

这是一个持续活跃的代码仓库，始终欢迎你参与贡献！

如果我不确定某些拉取请求是否适合收录在 Awesome-LLM 中，就会暂时保留它们；你可以通过添加 👍 为它们投票。

---

如果你对这份带有个人筛选标准的列表有任何疑问，请随时通过 chengxin1998@stu.pku.edu.cn 联系我。

[^1]: 本文不构成法律建议。更多信息请联系模型的原作者。
