
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 大規模言語モデル（LLM）は、~~自然言語処理コミュニティ~~ ~~AIコミュニティ~~ **世界全体**を席巻しました。ここでは、大規模言語モデル、特にChatGPTに関する論文を厳選して紹介します。LLMのトレーニング用フレームワーク、デプロイ用ツール、LLMに関する講座やチュートリアル、公開されているすべてのLLMチェックポイントとAPIも掲載しています。

## 注目のLLMプロジェクト

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - DeepSeek R1-Zeroをクリーンで最小限かつ利用しやすい形で再現。
- [open-r1](https://github.com/huggingface/open-r1) - DeepSeek-R1を完全にオープンな形で再現。
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - DeepSeekによる初代推論モデル。
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - 大規模MoEモデルの知能を探究。
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - 費用対効果の高い推論の最前線を切り拓く。
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - GPT-4o級として初めてオープンソース化されたモデル。
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - アクティブパラメーター数32B、総パラメーター数1TのMoE言語モデル。


## 目次
- [Awesome-LLM ](#awesome-llm-)
  - [主要論文](#milestone-papers)
  - [ほかの論文](#other-papers)
  - [LLMベンチマーク](#llm-leaderboard)
  - [オープンLLM](#open-llm)
  - [LLMデータ](#llm-data)
  - [LLM評価](#llm-evaluation)
  - [LLMトレーニングフレームワーク](#llm-training-frameworks)
  - [LLM推論](#llm-inference)
  - [LLMアプリケーション](#llm-applications)
  - [LLMのチュートリアルと講座](#llm-tutorials-and-courses)
  - [LLM関連書籍](#llm-books)
  - [LLMに関する優れた考察](#great-thoughts-about-llm)
  - [その他](#miscellaneous)

## 主要論文

<details>

<summary> 主要論文 </summary>
  
|   日付  |       キーワード       |      機関     |                                                                                                        論文                                                                                                       |
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

## ほかの論文
> [!NOTE]
> LLM分野に関心がある方は、上記の主要論文一覧から、その歴史や最先端の動向をたどることができます。LLMの各研究方向には独自の知見や貢献があり、分野全体を理解するうえで欠かせません。サブ分野ごとの論文一覧については、以下をご覧ください。

<details>
  <summary> ほかの論文 </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - LLMの幻覚に関する論文一覧。
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - LLMの幻覚検出に関する論文一覧。
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - LLMの実践ガイド資料を厳選した一覧。
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - ChatGPTで使えるプロンプト例集。
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - ChatGPTで使える中国語のプロンプト例集。
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - OpenAIのChatGPTとGPT-3に関する資料一覧。
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) -  「Chain of Thought Prompting Elicits Reasoning in Large Language Models」から始まった潮流。
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - LLMに信頼できる推論をさせ、推論に基づく意思決定を促す方法。
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - 「Natrural-Instruction」（ACL 2022）、「FLAN」（ICLR 2022）、「T0」（ICLR 2022）から始まった潮流。
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - 大規模言語モデルに関する論文・資料一覧。
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - 言語モデルを用いた推論に関する論文・資料集。
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - LLMの推論性能を測定。
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - GPT、ChatGPT、OpenAI、LLMなどに関する優れたプロジェクトや資料の一覧。
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - [OpenAI GPT-3 API](https://openai.com/blog/openai-api/)に関するデモと記事のコレクション。
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - LLMの指示チューニング、RLHF、評価向けの人間の選好データセット集。
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - RWKVを学ぶために役立つ可能性のある資料やチュートリアル。
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - 大規模言語モデルのモデル編集に関する論文・資料一覧。
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - LLMセキュリティ関連の優れたツール、文書、プロジェクト集。
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - 大規模言語モデル（LLM）と人間のアラインメントに関する論文・資料集。
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - 研究向けの優れたコードLLMを厳選した一覧。
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - LLM圧縮に関する優れた研究論文とツール。
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - LLMシステムに関する優れた研究論文。
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - LLMアプリ向けのオープンソースで活発に保守されているWebアプリ集。
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - 日本語LLMまとめ - 日本語LLMの概要。
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - 医療分野のLLMに関するレビュー論文一覧。
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - コード付きの優れたLLM推論論文を厳選した一覧。
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - 3D理解、推論、生成、身体性を備えたエージェントなど、3D世界のマルチモーダル大規模言語モデル集。
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - チャットボット学習向けデータセットを厳選したコレクション。リンク、サイズ、言語、用途、各データセットの概要を掲載。
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - オープンソースの中国語大規模言語モデルを整理した一覧。比較的小規模で、プライベート環境にデプロイしやすく、学習コストの低いモデルを中心に、基盤モデル、特定分野向けのファインチューニングとアプリ、データセット、チュートリアルなどを掲載。

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - 多様な最適化タスク（Opt）への大規模言語モデル（LLM）の適用は、新たな研究分野です。LLM4Optに関する参考資料と論文を集めています。

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - 言語モデルの学習ダイナミクス、表現能力、解釈可能性、汎化など、理論的・実証的な分析に関する論文一覧。
  
</details>

## LLMベンチマーク
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - 匿名・ランダムな対戦をクラウドソーシング方式で行う、大規模言語モデル（LLM）のベンチマークプラットフォーム。
- [LiveBench](https://livebench.ai/#/) - 難易度が高く、データ汚染のないLLMベンチマーク。
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - 公開されたLLMやチャットボットを追跡、順位付け、評価することを目的としています。
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - Nousベンチマークスイートを用いた、指示追従型言語モデルの自動評価器。
<details>
  <summary> ほかのベンチマーク </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - 古代中国語の読解に焦点を当てた評価ベンチマーク。
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - LLMの誠実さを包括的に評価するために設計された先駆的なベンチマーク。
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - LLMが外部関数やツールを呼び出す能力を評価します。
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - 専門家主導の中国語LLM向けベンチマーク。
- [CompassRank](https://rank.opencompass.org.cn) - 最先端の言語・視覚モデルを調査し、業界と研究向けに包括的で客観的かつ中立的な評価基準を提供します。
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - 異種の入力ソース（KB、テキスト、表、インフォボックス）の混在を扱うQA手法の評価ベンチマーク。
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - テキストと視覚の双方に関する想像力を要する各種タスクで、大規模言語モデル（LLM）の性能を評価します。
- [FELM](https://hkust-nlp.github.io/felm) - 大規模言語モデル（LLM）の出力を事実性評価器がどれほど適切に評価できるかを測定するメタベンチマーク。
- [InfiBench](https://infi-coder.github.io/infibench) - 実世界のコーディング関連の質問に答える能力に特化してLLMを評価するベンチマーク。
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - 法律分野の大規模言語モデルを評価するベンチマーク。
- [LLMEval](http://llmeval.com) - さまざまな状況でのモデルの性能を把握し、解釈可能性の観点から結果を分析します。
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - 言語、自然科学・社会科学、物理・社会常識、時間的推論、代数、幾何など、多様なマルチモーダル推論タスクでLLMを評価します。
- [MathEval](https://matheval.ai) - 20分野、約3万問にわたって大規模モデルの数学的能力を評価する包括的なベンチマークプラットフォーム。
- [MixEval](https://mixeval.github.io/#leaderboard) - 既存のベンチマーク混合から作成された正解データ付きの動的ベンチマーク。Chatbot Arenaとの相関係数0.96のモデル順位付けを実現し、ローカルで迅速に実行できます（MMLU実行時の6%の時間とコスト）。
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - 複数言語の医療質問に答えるLLMの能力を評価するベンチマーク。
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - 人間の信念や目標を理解するAIモデルの認知能力を評価するマルチモーダル質問応答ベンチマーク。
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - 数学、物理、化学、生物学など複数の学問分野にわたってAIモデルを評価するベンチマーク。
- [PubMedQA](https://pubmedqa.github.io) - PubMedの抄録を用いて研究関連の質問に回答する生物医学分野の質問応答ベンチマーク。
- [SciBench](https://scibench-ucla.github.io/#leaderboard) -  化学、物理、数学などの大学レベルの複雑な科学問題を解くLLMの能力を評価するベンチマーク。
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - 自然言語理解、推論、汎化など、さまざまな側面の性能を中心にLLMを評価するベンチマークプラットフォーム。
- [SuperLim](https://lab.kb.se/leaderboard/results) - 議論分析、意味的類似性、テキスト含意などのタスクでNLPモデルを評価するスウェーデン語理解ベンチマーク。
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - 特に財務報告書の複雑な文書理解を対象とした、大規模な文書視覚質問応答（VQA）データセット。
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - 表形式とテキスト形式の情報を統合し、実世界の財務データを扱う大規模な質問応答ベンチマーク。
- [VisualWebArena](https://jykoh.com/vwa) - 現実的で視覚に基づくタスクにおいてマルチモーダルWebエージェントの性能を評価するベンチマーク。
- [We-Math](https://we-math.github.io/#leaderboard) - 大規模マルチモーダルモデル（LMM）が人間のような数学的推論を行う能力を評価するベンチマーク。
- [WHOOPS!](https://whoops-benchmark.github.io) - 通常の予想に反する画像を通じて、視覚的常識をAIが推論する能力を検証するベンチマークデータセット。

</details>


## オープンLLM
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


## LLMデータ
> 参考： [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - 事前構築済みモジュールと、ローカルからクラスターまで拡張可能な仕組みを備えた、非構造化データを効率的に処理するオープンソースツールキット。
- [Datatrove](https://github.com/huggingface/datatrove) - プラットフォーム非依存でカスタマイズ可能なパイプライン処理ブロックを提供し、スクリプト作成に追われるデータ処理から解放します。
- [Dingo](https://github.com/DataEval/dingo) - 包括的なデータ品質評価ツール。
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - 大規模言語モデル向けの高品質な学習データセットを作成する強力なツール。

## LLM評価:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - 言語モデルの少数ショット評価用フレームワーク。
- [lighteval](https://github.com/huggingface/lighteval) - Hugging Faceが社内で使用している軽量なLLM評価スイート。
- [simple-evals](https://github.com/openai/simple-evals) - OpenAIによる評価ツール。

<details>
<summary>ほかの評価フレームワーク</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - オープン言語モデルを評価するためのリポジトリ。
- [MixEval](https://github.com/Psycoy/MixEval) - オープンソース・プロプライエタリ双方のモデルに対応し、MixEvalなどをサポートする、簡単に使える信頼性の高い評価スイート。
- [HELM](https://github.com/stanford-crfm/helm) - 言語モデルの透明性向上を目指すフレームワーク、Holistic Evaluation of Language Models（HELM）。
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - AlpacaやFlan-T5などの指示チューニング済みモデルを未使用タスクで定量評価するコードを含むリポジトリ。
- [Giskard](https://github.com/Giskard-AI/giskard) - LLMアプリケーション、特にRAG向けのテスト・評価ライブラリ。
- [LangSmith](https://www.langchain.com/langsmith) - LangChainフレームワークの統合プラットフォーム。評価、Human In The Loop（HITL）での共同作業、LLMアプリのログ記録と監視を提供します。
- [Ragas](https://github.com/explodinggradients/ragas) - 検索拡張生成（RAG）パイプラインの評価を支援するフレームワーク。

</details>



## LLMトレーニングフレームワーク

- [Meta Lingua](https://github.com/facebookresearch/lingua) - LLM研究のための軽量で効率的、かつ改変しやすいコードベース。
- [Litgpt](https://github.com/Lightning-AI/litgpt) - 20種類以上の高性能LLMの事前学習、ファインチューニング、大規模デプロイ用レシピ。
- [nanotron](https://github.com/huggingface/nanotron) - 大規模言語モデルの3D並列学習を行うミニマルなフレームワーク。
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - 分散学習と推論を簡単かつ効率的・効果的にするディープラーニング最適化ライブラリ。
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - 大規模Transformerモデル学習に関する継続的な研究。
- [torchtitan](https://github.com/pytorch/torchtitan) - 大規模モデル学習のためのPyTorchネイティブライブラリ。

<details>
<summary>ほかのフレームワーク</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - MoEモデル学習、カリキュラム学習、3D並列化などを追加サポートする、NVIDIA Megatron-LMのDeepSpeed版。
  - [torchtune](https://github.com/pytorch/torchtune) - LLMファインチューニング向けのPyTorchネイティブライブラリ。
  - [ROLL](https://github.com/alibaba/ROLL) - 大規模言語モデルを用いた強化学習向けの効率的で使いやすいスケーリングライブラリ。
  - [veRL](https://github.com/volcengine/verl) - 柔軟で効率的なLLM向けRLフレームワーク。
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - 大規模言語モデル（LLM）、マルチモーダルモデル（MM）、自動音声認識（ASR）、音声合成（TTS）、コンピュータビジョン（CV）に取り組む研究者やPyTorch開発者向けの生成AIフレームワーク。
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - 大規模AIモデルをより安価に、より高速に、より利用しやすくします。
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - 大規模モデルの効率的な学習。
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - モデル並列化を簡単にするMesh TensorFlow。
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - シンプルで高性能、スケーラブルなJAX製LLM。
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - DeepSpeedを基盤に、GPU上でモデル並列の自己回帰Transformerを実装。
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - NVIDIA GPUでのTransformerモデル学習を高速化するライブラリ。
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - 使いやすくスケーラブルで高性能なRLHFフレームワーク（70B以上のPPOフルチューニング、反復DPO、LoRA、RingAttention、RFTに対応）。
  - [TRL](https://huggingface.co/docs/trl/en/index) - 教師ありファインチューニング（SFT）、報酬モデリング（RM）、近接方策最適化（PPO）まで、強化学習でTransformer言語モデルを学習するツール一式を提供するフルスタックライブラリ。
  - [unslothai](https://github.com/unslothai/unsloth) - 効率的なファインチューニングに特化したフレームワーク。GitHubには各種LLM向けテンプレートがあり、Google Colab上で独自データを無料で簡単に学習できます。
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - LLMのファインチューニングと評価を行うオープンソースフレームワーク。学習設定の実験を簡素化し、結果の再現と共有を容易にします。LoRA、QLoRA、DeepSpeed、PEFT、マルチGPUなどに対応。

</details>


## LLM推論

> 参考： [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - 大規模言語モデルと視覚言語モデル向けの高速なサービングフレームワーク。
- [vLLM](https://github.com/vllm-project/vllm) - LLM向けの高スループットかつメモリ効率に優れた推論・サービングエンジン。
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - C/C++によるLLM推論。
- [ollama](https://github.com/ollama/ollama) - Llama 3、Mistral、Gemmaなどの大規模言語モデルをすぐに実行できます。
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - 大規模言語モデル（LLM）のデプロイとサービング用ツールキット。
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - LLM推論のためのNvidiaフレームワーク。
<details>
<summary>ほかのデプロイツール</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIAのLLM推論フレームワーク（TensorRT-LLMへ移行）。
- [MInference](https://github.com/microsoft/MInference) - 長文脈LLM推論を高速化するため、近似的な動的スパース計算でAttentionを処理します。A100でプレフィル処理のレイテンシを精度を維持しながら最大10倍削減。
- [exllama](https://github.com/turboderp/exllama) - 量子化重み用に、HF transformersのLlama実装をよりメモリ効率よく書き直したもの。
- [FastChat](https://github.com/lm-sys/FastChat) - Web UIとOpenAI互換RESTful APIを備えた分散型マルチモデルLLMサービングシステム。
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - 非常に高速なLLM推論。
- [SkyPilot](https://github.com/skypilot-org/skypilot) - あらゆるクラウドでLLMやバッチジョブを実行。シンプルな操作でコストを抑え、GPUの利用可能性を高め、実行環境を管理します。
- [Haystack](https://haystack.deepset.ai/) - Hugging Face、OpenAI、CohereのLLMやTransformer系モデルを自分のデータと連携できるオープンソースNLPフレームワーク。
- [OpenLLM](https://github.com/bentoml/OpenLLM) - あらゆるオープンソースLLMを本番環境でファインチューニング、サービング、デプロイ、監視できます。[BentoML](https://bentoml.com/)ではLLMアプリに本番利用されています。
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) -  DeepSpeedを基盤に、vLLMに似た低レイテンシ・高スループット推論を実現。
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Rustによるテキスト埋め込み推論。HFOILライセンス。
- [Infinity](https://github.com/michaelfeil/infinity) - Pythonによるテキスト埋め込み推論。
- [LMDeploy](https://github.com/InternLM/lmdeploy) - LLMとVL向けの高スループット・低レイテンシな推論・サービングフレームワーク。
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - LLM学習向けの効率的なTritonカーネル。
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - 一般的なデバイスで70BクラスのLLMを実行できるllama.cppの分散実装。
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - Ansibleを使い、最小限の設定で任意のLLMをVMに簡単にデプロイ。

</details>


## LLMアプリケーション
> 参考： [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy：プロンプトではなくプログラミングで基盤モデルを扱うフレームワーク。
- [LangChain](https://github.com/hwchase17/langchain) — 言語モデルのプロンプトを連鎖させる人気のPython/JavaScriptライブラリ。
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — LLMアプリをデータで拡張するPythonライブラリ。

<details>
<summary>その他のアプリケーション</summary>


- [MLflow](https://mlflow.org/) - エンドツーエンドの機械学習ライフサイクルを支援するオープンソースフレームワーク。実験追跡、モデル／プロンプトの評価、デプロイ、トレーシングによる可観測性を提供。
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - ローカルLLMをさまざまなタスクで扱うための包括的なツール群。
- [LiteChain](https://github.com/rogeriochaves/litechain) - LLMを組み合わせるためのLangChainの軽量な代替。
- [magentic](https://github.com/jackmpcollins/magentic) - LLMをPython関数としてシームレスに統合。
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - wechatyを介してWeChatでChatGPTを利用。
- [promptfoo](https://github.com/typpo/promptfoo) - プロンプトをテストし、LLM出力を評価・比較して、リグレッションを検出し、品質を改善します。
- [Agenta](https://github.com/agenta-ai/agenta) -  LLM搭載アプリを簡単に構築、バージョン管理、評価、デプロイ。
- [Serge](https://github.com/serge-chat/serge) - llama.cppでAlpacaモデルを実行するチャットUI。APIキー不要、完全セルフホスト。
- [Langroid](https://github.com/langroid/langroid) - マルチエージェントプログラミングでLLMを活用。
- [Embedchain](https://github.com/embedchain/embedchain) - データセット上でChatGPT風ボットを作成するフレームワーク。
- [Opik](https://github.com/comet-ml/opik) - 開発から本番運用まで言語モデル出力を調整する可観測性ツール群で、LLMアプリを評価、テスト、リリースできます。
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - 複数のAIモデルにアクセスしてテストする統合マイクロサービスによりLLM評価を簡素化。
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - 旧称langchain-ChatGLM。LangChainを使うChatGLM風のローカル知識ベース型LLM QAアプリ。
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - [LeptonAI](https://github.com/leptonai)を使い、500行未満のコードで対話型検索エンジンを構築。
- [Robocorp](https://github.com/robocorp/robocorp) - Pythonでアクションを作成、デプロイ、運用し、AIエージェントやアシスタントを強化。豊富なライブラリ、ヘルパー、ログ機能を備えています。
- [Tune Studio](https://studio.tune.app/) - 開発者向けのLLMファインチューニング・デプロイ用プレイグラウンド。
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - LLMチェーンを使ったローカル実行型Web検索。
- [AI Gateway](https://github.com/Portkey-AI/gateway) — 100以上のオープン／クローズドソースモデルへの要求を統合APIで効率化。キャッシュ、フォールバック、再試行、タイムアウト、負荷分散を備え、本番利用でき、エッジにもデプロイ可能。
- [talkd.ai dialog](https://github.com/talkdai/dialog) - プラグインを追加し、任意のRAGやLLMをデプロイできるシンプルなAPI。
- [Wllama](https://github.com/ngxson/wllama) - llama.cppのWebAssemblyバインディング。ブラウザー内LLM推論を可能にします。
- [GPUStack](https://github.com/gpustack/gpustack) - LLM実行用のオープンソースGPUクラスター管理ツール。
- [MNN-LLM](https://github.com/alibaba/MNN) -- デバイス上のLLM推論（携帯電話／PC／IoT）を含むデバイス推論フレームワーク。
- [CAMEL](https://www.camel-ai.org/) - 初のLLMマルチエージェントフレームワーク。
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - Ollama/OpenAI/MistralAIのLLMでGitHubのコードリポジトリや圧縮ファイルを素早く理解・探索する対話型チャットプロジェクト。
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - LinuxまたはMacOS上で、純粋なシェルスクリプトからOllama（またはopenAI、mistralAI）のLLMと対話し、依存関係なしでシステム管理を高度化。
- [MindSQL](https://github.com/Mindinventory/MindSQL) - セルフホスト機能とRESTful APIを備え、プロプライエタリとオープンソース双方のLLMに対応するTxt-to-SQL用Pythonパッケージ。
- [Langfuse](https://github.com/langfuse/langfuse) -  オープンソースのLLMエンジニアリングプラットフォーム。トレーシング、評価、プロンプト管理、プレイグラウンドを提供。
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - LLMアプリの構築と自動最適化のためのライブラリ。
- [Guidance](https://github.com/microsoft/guidance) — Microsoft製のPythonライブラリ。Handlebarsテンプレートで生成、プロンプト、論理制御を組み合わせます。
- [Evidently](https://github.com/evidentlyai/evidently) — MLおよびLLM搭載システムを評価、テスト、監視するオープンソースフレームワーク。
- [Chainlit](https://docs.chainlit.io/overview) — チャットボットUIを作成するPythonライブラリ。
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — 出力を検証し、失敗時に再試行するPythonライブラリ。アルファ版のため、未完成の機能やバグにご注意ください。
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — プロンプトテンプレート、関数の連鎖、ベクトル化メモリ、インテリジェントな計画を支援するMicrosoft製Python/C#/Javaライブラリ。
- [Prompttools](https://github.com/hegelai/prompttools) — モデル、ベクトルDB、プロンプトのテスト・評価用オープンソースPythonツール。
- [Outlines](https://github.com/normal-computing/outlines) — プロンプトを簡素化し生成を制約するDSLを提供するPythonライブラリ。
- [Promptify](https://github.com/promptslab/Promptify) — 言語モデルでNLPタスクを実行する小規模Pythonライブラリ。
- [Scale Spellbook](https://scale.com/spellbook) — 言語モデルアプリを構築、比較、リリースする有料製品。
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — プロンプトをテスト・改善する有料製品。
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — モデル学習やプロンプトエンジニアリングの実験を追跡する有料製品。
- [OpenAI Evals](https://github.com/openai/evals) — 言語モデルとプロンプトのタスク性能を評価するオープンソースライブラリ。

- [Arthur Shield](https://www.arthur.ai/get-started) — 有害性、幻覚、プロンプトインジェクションなどを検出する有料製品。
- [LMQL](https://lmql.ai) — 型付きプロンプト、制御フロー、制約、ツールをサポートするLLM対話向けプログラミング言語。
- [ModelFusion](https://github.com/lgrammel/modelfusion) - LLMや音声認識・合成、画像生成などのMLモデルを使うアプリ向けTypeScriptライブラリ。
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — 知識グラフと自然言語処理技術を用いる中国語・英語対応のナレッジ抽出モデル。
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - LLM UI構築用のReactライブラリ。
- [Wordware](https://www.wordware.ai) - 技術者ではない分野の専門家がAIエンジニアとタスク特化型AIエージェントを作るWebホストIDE。プロンプトをローコード／ノーコードのブロックではなく、新しいプログラミング言語として扱います。
- [Wallaroo.AI](https://github.com/WallarooLabs) - クラウドからエッジまで、あらゆる環境でモデルを大規模にデプロイ、管理、最適化。Pythonノートブックから推論まで数分で実現します。
- [Dify](https://github.com/langgenius/dify) - AIワークフロー、モデル管理、本番デプロイを効率化する直感的なオープンソースLLMアプリ開発プラットフォーム。
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - マルチエージェントLLMアプリを簡単に構築できるオープンソースLLMアプリ。モデルのデプロイとファインチューニングに対応。
- [MemFree](https://github.com/memfreeme/memfree) - オープンソースのハイブリッドAI検索エンジン。Web、ブックマーク、メモ、文書からすぐに正確な回答を取得し、ワンクリックでデプロイ。
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - RAG向けオープンソースAutoMLツール。生成評価データセットから最適化済みRAGパイプラインのデプロイまで、回答品質を自動最適化。
- [Epsilla](https://github.com/epsilla-cloud) - 独自データや知識を活用するオールインワンLLMエージェントプラットフォーム。初日から本番利用できるAIエージェントを提供。
- [Arize-Phoenix](https://phoenix.arize.com/) - ノートブック環境で動作するオープンソースML可観測性ツール。LLM、CV、表形式モデルを監視・微調整。
- [LLM]([https://github.com/simonw/llm) - リモートAPI経由でもローカル実行モデルでも、大規模言語モデルと対話するCLIユーティリティ兼Pythonライブラリ。
- [Just-Chat](https://github.com/longevity-genie/just-chat) - LLMエージェントを簡単かつ素早く作成し、対話できます。
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - エージェント型ワークフロー向けオープンソースCLIセキュリティスキャナー。ソースコードから脆弱性を検出し、詳細レポートと対話型可視化を生成。LangGraph、CrewAI、n8n、OpenAI Agentsなどに対応。
- [LangWatch](https://github.com/langwatch/langwatch) - オープンソースのLLM可観測性、プロンプト評価・最適化プラットフォーム。
- [TensorZero](https://www.tensorzero.com/) - 本番品質のLLMアプリ構築用オープンソースフレームワーク。LLMゲートウェイ、可観測性、最適化、評価、実験を統合。

</details>

## LLMのチュートリアルと講座
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - お気に入り！
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - 見逃せない、質の高い教育動画シリーズ。
- [Alexander Rush Series](https://rush-nlp.com/projects/) - 見逃せない、質の高い教育資料。
- [llm-course](https://github.com/mlabonne/llm-course) - ロードマップとColabノートブックでLLMを学ぶ講座。
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - 基盤モデルに関する最新の進展。
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - LLMトークン化で広く使われるByte Pair Encoding（BPE）アルゴリズムの簡潔で読みやすいコード。
- [femtoGPT](https://github.com/keyvank/femtoGPT) - 最小限のGenerative Pretrained Transformerを純粋なRustで実装。
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - LLM／RLアルゴリズムのマップを100件以上収録📚。


## LLM関連書籍
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - 多くの機能を紹介する[GitHubリポジトリ](https://github.com/benman1/generative_ai_with_langchain)が付属。
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - 実際に動作する独自LLMを構築するためのガイド。
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - Generative Pre-trained Transformer（GPT）をゼロからコーディングする方法を解説。
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - 275点以上のオリジナル図版を収録した図解ガイドで、大規模言語モデルの世界を探りましょう。
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - [大規模言語モデルのサーベイ](https://arxiv.org/abs/2303.18223)に基づくLLM入門教科書。

## LLMに関する優れた考察
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

## その他


- [Emergent Mind](https://www.emergentmind.com) - GPT-4が厳選・解説する最新AIニュース。
- [ShareGPT](https://sharegpt.com) - お気に入りのChatGPT会話をワンクリックで共有。
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - テキスト要約向けの新しいエンドポイント、Cohere Summarize Betaを紹介。
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPTと対話するための、非公式なオープンソースPython API兼CLI。
- [Cursor](https://www.cursor.so) - 強力なAIでコードの作成、編集、相談ができます。
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - GPT-4言語モデルの機能を示す実験的なオープンソースアプリケーション。
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - LLMと分野専門家の出会い。
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - 大規模言語モデルを簡単に編集できるフレームワーク。
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - チャット履歴の表示・非表示を簡単に切り替え、画面共有時のプライバシーを守るOpenAI ChatGPT用Chrome拡張機能。
- [AI For Developers](https://aifordevelopers.org) - 開発者向けAIツールとエージェントの一覧。

## 貢献

活発に活動しているリポジトリです。皆さんの貢献を歓迎します！

LLMにふさわしいか判断しかねるプルリクエストは、いくつかオープンのままにします。👍を付けて投票してください。

---

この独自の視点によるリストについて質問があれば、遠慮なくchengxin1998@stu.pku.edu.cnまでご連絡ください。

[^1]: これは法律上の助言ではありません。詳しくは、モデルの原著者にお問い合わせください。
