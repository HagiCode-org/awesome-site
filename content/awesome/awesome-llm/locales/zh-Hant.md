
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 大型語言模型（LLM）席捲了~~NLP 社群~~ ~~AI 社群~~ **全世界**。這裡精選了大型語言模型相關論文，尤其是與 ChatGPT 有關的內容。此清單也包含 LLM 訓練框架、LLM 部署工具、LLM 課程與教學，以及所有公開可用的 LLM 檢查點與 API。

## 熱門 LLM 專案

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - 對 DeepSeek R1-Zero 乾淨、精簡且易於理解的重現實作。
- [open-r1](https://github.com/huggingface/open-r1) - 完全開放的 DeepSeek-R1 重現實作。
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - DeepSeek 第一代推理模型。
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - 探索大型 MoE 模型的智慧能力。
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - 推進高成本效益推理的前沿。
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - 首個開放原始碼、達到 GPT-4o 等級的模型。
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - MoE 語言模型，具備 32B 活躍參數與 1T 總參數。


## 目錄
- [Awesome-LLM ](#awesome-llm-)
  - [里程碑論文](#milestone-papers)
  - [其他論文](#other-papers)
  - [LLM 排行榜](#llm-leaderboard)
  - [開放式 LLM](#open-llm)
  - [LLM 資料](#llm-data)
  - [LLM 評估](#llm-evaluation)
  - [LLM 訓練框架](#llm-training-frameworks)
  - [LLM 推論](#llm-inference)
  - [LLM 應用程式](#llm-applications)
  - [LLM 教學與課程](#llm-tutorials-and-courses)
  - [LLM 書籍](#llm-books)
  - [關於 LLM 的精彩觀點](#great-thoughts-about-llm)
  - [其他資源](#miscellaneous)

## 里程碑論文

<details>

<summary> 里程碑論文 </summary>
  
|   日期  |       關鍵字       |      機構     |                                                                                                        論文                                                                                                       |
|:-------:|:--------------------:|:------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-06 |     Transformers     |       Google       | [Attention Is All You Need](https://arxiv.org/pdf/1706.03762.pdf)                                                                                                                                                  |
| 2018-06 |        GPT 1.0       |       OpenAI       | [Improving Language Understanding by Generative Pre-Training](https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf)                                                                             |
| 2018-10 |         BERT         |       Google       | [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423.pdf)                                                                                          |
| 2019-02 |        GPT 2.0       |       OpenAI       | [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)                                          |
| 2019-09 |      Megatron-LM     |       NVIDIA       | [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/pdf/1909.08053.pdf)                                                                                      |
| 2019-10 |          T5          |       Google       | [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://jmlr.org/papers/v21/20-074.html)                                                                                       |
| 2019-10 |         ZeRO         |      Microsoft     | [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/pdf/1910.02054.pdf)                                                                                                       |
| 2020-01 |      Scaling Law     |       OpenAI       | [Scaling Laws for Neural Language Models](https://arxiv.org/pdf/2001.08361.pdf)                                                                                                                                    |
| 2020-05 |        GPT 3.0       |       OpenAI       | [Language models are few-shot learners](https://papers.nips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf)                                                                                         |
| 2021-01 |  Switch Transformers |       Google       | [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity](https://arxiv.org/pdf/2101.03961.pdf)                                                                               |
| 2021-08 |         Codex        |       OpenAI       | [Evaluating Large Language Models Trained on Code](https://arxiv.org/pdf/2107.03374.pdf)                                                                                                                           |
| 2021-08 |   Foundation Models  |      Stanford      | [On the Opportunities and Risks of Foundation Models](https://arxiv.org/pdf/2108.07258.pdf)                                                                                                                        |
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
| 2022-06 |  Emergent Abilities  |       Google       | [Emergent Abilities of Large Language Models](https://openreview.net/pdf?id=yzkSU5zdwD)                                                                                                                            |
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

## 其他論文
> [!NOTE]
> 如果你對 LLM 領域有興趣，上方的里程碑論文清單或許能幫助你了解其歷史與最新進展。不過，LLM 的各個研究方向都提供了獨特的見解與貢獻，這些內容對全面理解此領域至關重要。各子領域的詳細論文清單請參閱以下連結：

<details>
  <summary> 其他論文 </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - LLM 幻覺相關論文清單。
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - LLM 幻覺偵測相關論文清單。
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - 精選的 LLM 實用指南資源清單。
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - ChatGPT 模型可用的提示範例集。
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - ChatGPT 模型可用的中文提示範例集。
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - 精選的 OpenAI ChatGPT 與 GPT-3 資源清單。
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) -  此研究趨勢始於〈Chain of Thought Prompting Elicits Reasoning in Large Language Models〉。
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - 如何引導 LLM 產生可靠的推理並做出能依據理由調整的決策。
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - 此研究趨勢始於 `Natrural-Instruction`（ACL 2022）、`FLAN`（ICLR 2022）與 `T0`（ICLR 2022）。
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - 大型語言模型的論文與資源清單。
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - 以語言模型進行推理的論文與資源集。
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - 衡量 LLM 的推理效能
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - 精選與 GPT、ChatGPT、OpenAI、LLM 等相關的優質專案與資源。
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - 關於下列項目的示範與文章集：[OpenAI GPT-3 API](https://openai.com/blog/openai-api/).
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - 供 LLM 指令微調、RLHF 與評估使用的人類偏好資料集。
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - 可能有助於學習 RWKV 的教材與教學。
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - 大型語言模型編輯相關論文與資源清單。
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - 精選的 LLM 安全工具、文件與專案。
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - 大型語言模型（LLM）與人類對齊相關論文與資源集。
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - 精選的研究用最佳程式碼 LLM 清單。
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - 優質 LLM 壓縮研究論文與工具。
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - 優質 LLM 系統研究論文。
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - 開放原始碼且持續維護的 LLM 應用網頁程式集。
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - 日本語 LLM 總覽。
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - 醫療領域 LLM 綜述的論文清單。
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - 精選的優質 LLM 推論論文及其程式碼清單。
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - 精選的 3D 世界多模態大型語言模型清單，涵蓋 3D 理解、推理、生成與具身代理。
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - 專為聊天機器人訓練設計的精選資料集，包含連結、大小、語言、用途及各資料集簡介。
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - 整理開源的中文大型語言模型，以規模較小、可私有化部署、訓練成本較低的模型為主，包括基礎模型、垂直領域微調及應用、資料集與教學等。

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - 將大型語言模型（LLM）應用於各種最佳化任務（Opt）是新興研究領域。此處收集了 LLM4Opt 相關參考資料與論文。

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - 此論文清單聚焦於語言模型的理論或實證分析，例如學習動態、表達能力、可解釋性、泛化能力及其他有趣主題。
  
</details>

## LLM 排行榜
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - 大型語言模型（LLM）的基準測試平台，採用群眾外包方式進行匿名隨機對戰。
- [LiveBench](https://livebench.ai/#/) - 具挑戰性且無資料污染的 LLM 基準測試。
- [開放式 LLM 排行榜](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - 旨在追蹤、排名並評估新發布的 LLM 與聊天機器人。
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - 使用 Nous 基準測試套件評估遵循指令的語言模型之自動化評估器。
<details>
  <summary> 其他排行榜 </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - 專注於古漢語理解能力的評估基準。 
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - 專為全面評估 LLM 誠實度而設計的開創性基準測試。 
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - 評估 LLM 呼叫外部函式／工具的能力。
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - 由專家主導的中文 LLM 基準測試。
- [CompassRank](https://rank.opencompass.org.cn) - CompassRank 致力於探索最先進的語言與視覺模型，為產業與研究提供全面、客觀且中立的評估參考。
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - 用於評估在異質輸入來源（知識庫、文字、表格、資訊框）混合資料上運作的 QA 方法之基準測試。
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - 用於評估大型語言模型（LLM）在文字與視覺想像相關多種任務中表現的基準測試。
- [FELM](https://hkust-nlp.github.io/felm) - 評估事實性評估器判斷大型語言模型（LLM）輸出品質的元基準測試。 
- [InfiBench](https://infi-coder.github.io/infibench) - 專門評估大型語言模型（LLM）回答真實世界程式設計相關問題能力的基準測試。
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - 用於評估大型語言模型法律領域能力的基準測試。
- [LLMEval](http://llmeval.com) - 著重了解這些模型在各種情境下的表現，並從可解釋性角度分析結果。 
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - 評估大型語言模型多種多模態推理任務的基準測試，涵蓋語言、自然與社會科學、物理與社會常識、時間推理、代數及幾何。
- [MathEval](https://matheval.ai) - 全面的基準測試平台，用於評估大型模型在 20 個領域、近 30,000 道數學題中的數學能力。
- [MixEval](https://mixeval.github.io/#leaderboard) - 以正確答案為基礎、由現成基準測試混合集衍生的動態基準測試。它能評估 LLM 並提供高度可信的模型排名（與 Chatbot Arena 的相關性為 0.96），同時可在本機快速執行（時間與成本僅為執行 MMLU 的 6%）。
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - 評估大型語言模型以多種語言回答醫療問題能力的基準測試。 
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - 用於評估 AI 模型理解人類信念與目標之認知能力的多模態問答基準測試。
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - 用於評估 AI 模型在數學、物理、化學、生物等多個學術領域表現的基準測試。
- [PubMedQA](https://pubmedqa.github.io) - 生物醫學問答基準測試，旨在利用 PubMed 摘要回答研究相關問題。
- [SciBench](https://scibench-ucla.github.io/#leaderboard) -  用於評估大型語言模型（LLM）解決化學、物理、數學等領域複雜大學程度科學問題能力的基準測試。
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - 用於評估大型語言模型（LLM）多種任務表現的基準測試平台，尤其關注自然語言理解、推理與泛化等方面。 
- [SuperLim](https://lab.kb.se/leaderboard/results) - 瑞典語理解基準測試，評估自然語言處理（NLP）模型在論證分析、語意相似度與文字蘊含等多種任務上的表現。
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - 大型文件視覺問答（VQA）資料集，專為複雜文件理解而設計，尤其適用於財務報告。
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - 大型問答基準測試，聚焦真實世界財務資料，整合表格與文字資訊。
- [VisualWebArena](https://jykoh.com/vwa) - 用於評估多模態網頁代理在真實視覺化任務中表現的基準測試。
- [We-Math](https://we-math.github.io/#leaderboard) - 評估大型多模態模型（LMM）進行類人數學推理能力的基準測試。
- [WHOOPS!](https://whoops-benchmark.github.io) - 透過違反常理的圖像，測試 AI 視覺常識推理能力的基準資料集。

</details>


## 開放式 LLM
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


## LLM 資料
> 參考資料：[LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - 開放原始碼工具組，透過預建模組高效處理非結構化資料，並可從本機擴展至叢集。
- [Datatrove](https://github.com/huggingface/datatrove) - 提供一組與平台無關且可自訂的管線處理元件，讓資料處理不再受繁複腳本所困。
- [Dingo](https://github.com/DataEval/dingo) - Dingo：全面的資料品質評估工具
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - 建立高品質大型語言模型訓練資料集的強大工具。

## LLM 評估：
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - 用於少樣本語言模型評估的框架。
- [lighteval](https://github.com/huggingface/lighteval) - Hugging Face 內部使用的輕量級 LLM 評估套件。
- [simple-evals](https://github.com/openai/simple-evals) - OpenAI 提供的評估工具。

<details>
<summary>其他評估框架</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - 用於評估開放語言模型的儲存庫。
- [MixEval](https://github.com/Psycoy/MixEval) - 可靠、開箱即用的評估套件，支援開放原始碼與專有模型，以及 MixEval 和其他基準測試。
- [HELM](https://github.com/stanford-crfm/helm) - 語言模型整體評估（HELM）框架，旨在提升語言模型的透明度。
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - 此儲存庫包含程式碼，可在保留任務上定量評估 Alpaca 與 Flan-T5 等指令微調模型。
- [Giskard](https://github.com/Giskard-AI/giskard) - LLM 應用程式，尤其是 RAG 的測試與評估函式庫。
- [LangSmith](https://www.langchain.com/langsmith) - LangChain 框架提供的統一平台，涵蓋 LLM 應用程式的評估、人機迴圈（HITL）協作、記錄與監控。  
- [Ragas](https://github.com/explodinggradients/ragas) - 協助你評估檢索增強生成（RAG）管線的框架。

</details>



## LLM 訓練框架

- [Meta Lingua](https://github.com/facebookresearch/lingua) - 精簡、高效且易於修改的 LLM 研究程式碼庫。
- [Litgpt](https://github.com/Lightning-AI/litgpt) - 提供 20 多種高效能 LLM，以及用於預訓練、微調與大規模部署的配方。
- [nanotron](https://github.com/huggingface/nanotron) - 極簡的大型語言模型 3D 平行訓練框架。
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed 是深度學習最佳化函式庫，讓分散式訓練與推論更簡單、高效且有效。
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - 持續進行的大規模 Transformer 模型訓練研究。
- [torchtitan](https://github.com/pytorch/torchtitan) - 原生 PyTorch 大型模型訓練函式庫。

<details>
<summary>其他框架</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - NVIDIA Megatron-LM 的 DeepSpeed 版本，額外支援 MoE 模型訓練、課程學習、3D 平行化等功能。 
  - [torchtune](https://github.com/pytorch/torchtune) - 原生 PyTorch LLM 微調函式庫。
  - [ROLL](https://github.com/alibaba/ROLL) - 高效且易於使用的大型語言模型強化學習擴展函式庫。
  - [veRL](https://github.com/volcengine/verl) - veRL 是靈活且高效的 LLM 強化學習框架。
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - 為大型語言模型（LLM）、多模態模型（MM）、自動語音辨識（ASR）、文字轉語音（TTS）及電腦視覺（CV）領域的研究人員與 PyTorch 開發者打造的生成式 AI 框架。
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - 讓大型 AI 模型更便宜、更快速且更容易使用。
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - 大型模型的高效訓練。
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow：讓模型平行化更簡單。
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - 簡單、高效能且可擴展的 Jax LLM！
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - 以 DeepSpeed 函式庫為基礎，在 GPU 上實作模型平行自迴歸 Transformer。
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - 用於加速 NVIDIA GPU 上 Transformer 模型訓練的函式庫。
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - 易於使用、可擴展且高效能的 RLHF 框架（支援 70B+ PPO 全量微調、迭代式 DPO、LoRA、RingAttention 與 RFT）。
  - [TRL](https://huggingface.co/docs/trl/en/index) - TRL 是完整的函式庫，提供一組以強化學習訓練 Transformer 語言模型的工具，涵蓋監督式微調（SFT）、獎勵建模（RM）及近端策略最佳化（PPO）。
  - [unslothai](https://github.com/unslothai/unsloth) - 專精於高效微調的框架。其 GitHub 頁面提供多種 LLM 的即用型微調範本，讓你能在 Google Colab 雲端免費使用自己的資料輕鬆訓練。
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - 開放原始碼的 LLM 微調與評估框架。它簡化不同訓練設定的實驗流程，並讓結果更容易重現與分享，支援 LoRA、QLoRA、DeepSpeed、PEFT 及多 GPU 設定等功能。

</details>


## LLM 推論

> 參考資料：[llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - SGLang 是大型語言模型與視覺語言模型的快速服務框架。
- [vLLM](https://github.com/vllm-project/vllm) - 高吞吐量且具記憶體效率的 LLM 推論與服務引擎。
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - 以 C/C++ 執行 LLM 推論。
- [ollama](https://github.com/ollama/ollama) - 快速開始使用 Llama 3、Mistral、Gemma 及其他大型語言模型。
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - 用於部署及提供大型語言模型（LLM）服務的工具組。
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Nvidia 的 LLM 推論框架
<details>
<summary>其他部署工具</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA 的 LLM 推論框架（已轉移至 TensorRT-LLM）
- [MInference](https://github.com/microsoft/MInference) - 為加速長上下文 LLM 推論，透過近似且動態的稀疏注意力計算，在維持準確度的同時，於 A100 上可將預填充階段的推論延遲降低最多 10 倍。
- [exllama](https://github.com/turboderp/exllama) - 為搭配量化權重使用，重新撰寫 HF transformers 中 Llama 實作的版本，記憶體效率更高。
- [FastChat](https://github.com/lm-sys/FastChat) - 分散式多模型 LLM 服務系統，提供網頁 UI 與相容於 OpenAI 的 RESTful API。
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - 極高速的 LLM 推論。
- [SkyPilot](https://github.com/skypilot-org/skypilot) - 在任何雲端執行 LLM 與批次工作。透過簡單介面取得最大成本節省、最高 GPU 可用性及代管執行。
- [Haystack](https://haystack.deepset.ai/) - 開放原始碼的 NLP 框架，可讓你使用 Hugging Face、OpenAI 與 Cohere 的 LLM 及 Transformer 模型與自己的資料互動。 
- [OpenLLM](https://github.com/bentoml/OpenLLM) - 在正式環境微調、提供服務、部署及監控任何開放原始碼 LLM。已在以下環境正式用於 LLM 應用：[BentoML](https://bentoml.com/) 的 LLM 應用程式。
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) -  MII 以 DeepSpeed 驅動，提供類似 vLLM 的低延遲、高吞吐量推論。
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - 以 Rust 執行文字嵌入推論，採用 HFOIL 授權。
- [Infinity](https://github.com/michaelfeil/infinity) - 以 Python 執行文字嵌入推論。
- [LMDeploy](https://github.com/InternLM/lmdeploy) - 高吞吐量、低延遲的 LLM 與 VL 推論及服務框架。
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - 用於 LLM 訓練的高效 Triton 核心。
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - llama.cpp 的分散式實作，讓你能在日常裝置上執行 70B 等級的 LLM。
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - 使用 Ansible，只需最少設定即可輕鬆在 VM 上部署任何 LLM。

</details>


## LLM 應用程式
> 參考資料：[awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy：用程式設計而非提示詞來操作基礎模型的框架。
- [LangChain](https://github.com/hwchase17/langchain) — 廣受歡迎的 Python／JavaScript 函式庫，可串接語言模型提示序列。
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — 用於以資料擴充 LLM 應用程式的 Python 函式庫。

<details>
<summary>更多應用程式</summary>


- [MLflow](https://mlflow.org/) - MLflow：涵蓋機器學習完整生命週期的開放原始碼框架，協助開發者追蹤實驗、評估模型／提示詞、部署模型，並透過追蹤功能加入可觀測性。
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - 用於各種本機 LLM 工作的完整工具組。
- [LiteChain](https://github.com/rogeriochaves/litechain) - 用於組合 LLM 的輕量級 LangChain 替代方案。
- [magentic](https://github.com/jackmpcollins/magentic) - 將 LLM 無縫整合為 Python 函式。
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - 透過 wechaty 在 Wechat 上使用 ChatGPT。
- [promptfoo](https://github.com/typpo/promptfoo) - 測試提示詞、評估並比較 LLM 輸出、找出退化問題，並改善提示詞品質。
- [Agenta](https://github.com/agenta-ai/agenta) - 輕鬆建置、管理版本、評估並部署由 LLM 驅動的應用程式。
- [Serge](https://github.com/serge-chat/serge) - 以 llama.cpp 打造、用於執行 Alpaca 模型的聊天介面。不需要 API 金鑰，完全自行託管！
- [Langroid](https://github.com/langroid/langroid) - 透過多代理程式設計善用 LLM。
- [Embedchain](https://github.com/embedchain/embedchain) - 以你的資料集建立類似 ChatGPT 機器人的框架。
- [Opik](https://github.com/comet-ml/opik) - 運用一套可觀測性工具，自信地評估、測試並發布 LLM 應用程式，並在開發與正式環境生命週期中校準語言模型輸出。
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - 透過提供存取及測試多個 AI 模型的統一微服務，簡化 LLM 評估流程。
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - 前身為 langchain-ChatGLM，是以 langchain 建置的本機知識型 LLM（如 ChatGLM）問答應用程式。
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - 只需不到 500 行程式碼，即可建置自己的對話式搜尋引擎：[LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - 使用 Python 在任何地方建立、部署及操作 Actions，以強化 AI 代理與助理。內含豐富的函式庫、輔助工具與記錄功能。
- [Tune Studio](https://studio.tune.app/) - 供開發者微調及部署 LLM 的遊樂場。
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - 使用 LLM 鏈在本機執行網頁搜尋。
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Gateway 透過統一 API 簡化對 100 多種開放與封閉原始碼模型的請求。它亦適用於正式環境，支援快取、備援、重試、逾時、負載平衡，並可部署於邊緣以將延遲降至最低。
- [talkd.ai dialog](https://github.com/talkdai/dialog) - 簡易 API，可透過新增外掛程式部署任何 RAG 或 LLM。
- [Wllama](https://github.com/ngxson/wllama) - llama.cpp 的 WebAssembly 繫結，讓瀏覽器內可執行 LLM 推論。
- [GPUStack](https://github.com/gpustack/gpustack) - 用於執行 LLM 的開放原始碼 GPU 叢集管理器。
- [MNN-LLM](https://github.com/alibaba/MNN) -- 裝置端推論框架，包含在裝置（手機／PC／IoT）上執行 LLM 推論。
- [CAMEL](https://www.camel-ai.org/) - 首個 LLM 多代理框架。 
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - 互動式聊天專案，運用 Ollama／OpenAI／MistralAI LLM，快速理解及瀏覽 GitHub 程式碼儲存庫或壓縮檔案資源。
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - 在 Linux（或 MacOS）系統上透過純 shell 腳本使用 Ollama（或 openAI、mistralAI）模型與 LLM 互動，無需任何相依套件即可提升智慧化系統管理。
- [MindSQL](https://github.com/Mindinventory/MindSQL) - 提供自行託管功能的 Python 套件，可用於文字轉 SQL，並透過 RESTful API 相容於專有及開放原始碼 LLM。
- [Langfuse](https://github.com/langfuse/langfuse) -  開放原始碼 LLM 工程平台 🪢 追蹤、評估、提示詞管理與遊樂場。 
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - AdalFlow：用於建置並自動最佳化 LLM 應用程式的函式庫。
- [Guidance](https://github.com/microsoft/guidance) — Microsoft 推出的實用 Python 函式庫，使用 Handlebars 範本交錯處理生成、提示詞與邏輯控制。
- [Evidently](https://github.com/evidentlyai/evidently) — 用於評估、測試及監控 ML 與 LLM 驅動系統的開放原始碼框架。
- [Chainlit](https://docs.chainlit.io/overview) — 用於製作聊天機器人介面的 Python 函式庫。
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — 用於驗證輸出並在失敗時重試的 Python 函式庫。目前仍處於 alpha 階段，可能有尚未完善之處與錯誤。
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — Microsoft 推出的 Python／C#／Java 函式庫，支援提示詞範本、函式串接、向量化記憶體及智慧規劃。
- [Prompttools](https://github.com/hegelai/prompttools) — 用於測試與評估模型、向量資料庫及提示詞的開放原始碼 Python 工具。
- [Outlines](https://github.com/normal-computing/outlines) — 提供領域專屬語言的 Python 函式庫，可簡化提示詞設計並限制生成內容。
- [Promptify](https://github.com/promptslab/Promptify) — 使用語言模型執行 NLP 任務的小型 Python 函式庫。
- [Scale Spellbook](https://scale.com/spellbook) — 付費產品，可用於建置、比較及發布語言模型應用程式。
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — 用於測試及改善提示詞的付費產品。
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — 用於追蹤模型訓練與提示工程實驗的付費產品。
- [OpenAI Evals](https://github.com/openai/evals) — 用於評估語言模型與提示詞任務表現的開放原始碼函式庫。

- [Arthur Shield](https://www.arthur.ai/get-started) — 用於偵測有害內容、幻覺、提示注入等問題的付費產品。
- [LMQL](https://lmql.ai) — 用於與 LLM 互動的程式語言，支援具型別提示詞、控制流程、限制條件及工具。
- [ModelFusion](https://github.com/lgrammel/modelfusion) - 用於以 LLM 及其他 ML 模型（語音轉文字、文字轉語音、圖像生成）建置應用程式的 TypeScript 函式庫。
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — 結合知識圖譜與自然語言處理技術的中英雙語知識擷取模型。
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - 用於建置 LLM UI 的 React 函式庫。
- [Wordware](https://www.wordware.ai) - 以網頁託管的 IDE，讓非技術領域專家與 AI 工程師合作建置特定任務的 AI 代理。我們將提示詞視為一種新程式語言，而非低程式碼／無程式碼積木。
- [Wallaroo.AI](https://github.com/WallarooLabs) - 在從雲端到邊緣的任何環境中，大規模部署、管理及最佳化模型。讓你在幾分鐘內從 Python Notebook 進入推論階段。
- [Dify](https://github.com/langgenius/dify) - 開放原始碼的 LLM 應用程式開發平台，具備直覺介面，可簡化 AI 工作流程、模型管理及正式環境部署。
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - 開放原始碼的 LLM 應用程式，可輕鬆快速地建置多代理 LLM 應用，並支援模型部署與微調。
- [MemFree](https://github.com/memfreeme/memfree) - 開放原始碼混合式 AI 搜尋引擎，可即時從網際網路、書籤、筆記及文件取得精確答案，支援一鍵部署。
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - RAG 開放原始碼 AutoML 工具，可自動最佳化 RAG 回答品質，涵蓋生成評估資料集到部署最佳化 RAG 管線。
- [Epsilla](https://github.com/epsilla-cloud) - 整合私人資料與知識的一站式 LLM 代理平台，第一天即可提供可投入正式環境的 AI 代理。
- [Arize-Phoenix](https://phoenix.arize.com/) - 可在 Notebook 環境執行的開放原始碼 ML 可觀測性工具。監控並微調 LLM、CV 與表格模型。
- [LLM]([https://github.com/simonw/llm) - CLI 工具與 Python 函式庫，可透過遠端 API 或安裝並在本機執行的模型與大型語言模型互動。
- [Just-Chat](https://github.com/longevity-genie/just-chat) - 輕鬆快速地建立 LLM 代理並與之聊天！
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - 代理工作流程的開放原始碼 CLI 安全掃描器。掃描工作流程原始碼、偵測漏洞，並產生互動式視覺化圖表及詳細安全報告。支援 LangGraph、CrewAI、n8n、OpenAI Agents 等。
- [LangWatch](https://github.com/langwatch/langwatch) - 開放原始碼的 LLM 可觀測性、提示詞評估與提示詞最佳化平台。
- [TensorZero](https://www.tensorzero.com/) - TensorZero 是用於建置正式級 LLM 應用程式的開放原始碼框架，整合 LLM 閘道、可觀測性、最佳化、評估與實驗功能。

</details>

## LLM 教學與課程
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - 我最喜歡的！
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - 高品質且富有教育意義、不容錯過的影片。
- [Alexander Rush Series](https://rush-nlp.com/projects/) - 高品質且富有教育意義、不容錯過的教材。
- [llm-course](https://github.com/mlabonne/llm-course) - 大型語言模型（LLM）入門課程，附有學習路線圖與 Colab Notebook。
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - 基礎模型的最新進展。
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT 提示工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton：理解大型語言模型](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - 大型語言模型](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [Mamba 與狀態空間模型視覺指南](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [一起從頭開始，用程式碼逐步打造 GPT。](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - 常用於 LLM 分詞的位元組對編碼（BPE）演算法之極簡、精簡程式碼。
- [femtoGPT](https://github.com/keyvank/femtoGPT) - 極簡生成式預訓練 Transformer 的純 Rust 實作。
- [Neurips2022-基礎模型的根本穩健性](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-歡迎來到「大模型」時代：訓練與服務更大型模型的技術與系統](https://icml.cc/virtual/2022/tutorial/18440)
- [用 60 行 NumPy 程式碼實作 GPT](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - 100 多張 LLM／RL 演算法圖譜📚。


## LLM 書籍
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - 隨書附有 [GitHub 儲存庫](https://github.com/benman1/generative_ai_with_langchain)，展示許多功能。
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - 打造可運作的自有 LLM 指南。
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - 說明如何從頭編寫生成式預訓練 Transformer（GPT）。
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - 透過這本附有 275 多張客製插圖的指南，探索大型語言模型的世界！
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - 以此為基礎編寫的 LLM 入門教科書：[*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## 關於 LLM 的精彩觀點
- [為什麼所有公開重現 GPT-3 的嘗試都失敗了？](https://jingfengyang.github.io/gpt)
- [指令微調的階段性回顧](https://yaofu.notion.site/June-2023-A-Stage-Review-of-Instruction-Tuning-f59dbfc36e2d4e12a33443bd6b2012c2)
- [由 LLM 驅動的自主代理](https://lilianweng.github.io/posts/2023-06-23-agent/)
- [為什麼你應該投入 AI AGENTS！](https://www.youtube.com/watch?v=fqVLjtvWgq8)
- [Google "We Have No Moat, And Neither Does OpenAI"](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)
- [AI 競爭聲明](https://petergabriel.com/news/ai-competition-statement/)
- [提示工程](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
- [Noam Chomsky：ChatGPT 的虛假承諾](https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html)
- [ChatGPT 有 1,750 億個參數嗎？技術分析](https://orenleung.super.site/is-chatgpt-175-billion-parameters-technical-analysis)
- [下一代大型語言模型 ](https://www.notion.so/Awesome-LLM-40c8aa3f2b444ecc82b79ae8bbd2696b)
- [2023 年大型語言模型訓練](https://research.aimultiple.com/large-language-model-training/)
- [GPT 如何獲得其能力？追溯語言模型湧現能力的來源](https://yaofu.notion.site/How-does-GPT-Obtain-its-Ability-Tracing-Emergent-Abilities-of-Language-Models-to-their-Sources-b9a57ac0fcf74f30a1ab9e3e36fa1dc1)
- [Open Pretrained Transformers](https://www.youtube.com/watch?v=p9IxoSkvZ-M&t=4s)
- [大型語言模型的規模化、湧現與推理](https://docs.google.com/presentation/d/1EUV7W7X_w0BDrscDhPg7lMGzJCkeaPkGCJ3bN8dluXc/edit?pli=1&resourcekey=0-7Nz5A7y8JozyVrnDtcEKJA#slide=id.g16197112905_0_0)

## 其他資源


- [Emergent Mind](https://www.emergentmind.com) - 由 GPT-4 精選並解說的最新 AI 新聞。
- [ShareGPT](https://sharegpt.com) - 只需按一下，即可分享最精彩的 ChatGPT 對話。
- [主要 LLM 與資料可用性](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500 多種最佳 AI 工具](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - 推出 Cohere Summarize Beta：全新的文字摘要端點
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPT Wrapper 是非官方的開放原始碼 Python API 與 CLI，可讓你與 ChatGPT 互動。
- [Cursor](https://www.cursor.so) - 運用強大的 AI 撰寫、編輯程式碼並討論程式。
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - 展示 GPT-4 語言模型能力的實驗性開放原始碼應用程式。 
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - 當 LLM 遇上領域專家。
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - 易於使用的大型語言模型編輯框架。
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - OpenAI ChatGPT 的 Chrome 擴充功能，可輕鬆隱藏及顯示聊天記錄以提升使用者隱私。非常適合螢幕分享時保護隱私。
- [AI For Developers](https://aifordevelopers.org) - 開發者適用的 AI 工具與代理清單

## 貢獻

本儲存庫持續更新，隨時歡迎貢獻！

若我不確定某些 Pull Request 是否適合納入 LLM 優選清單，會先讓它們保持開啟；你可以在其中新增 👍 來投票。

---

若你對這份帶有主觀篩選的清單有任何疑問，歡迎聯絡我：chengxin1998@stu.pku.edu.cn。

[^1]: 本文不構成法律建議。詳情請聯絡模型的原作者。
