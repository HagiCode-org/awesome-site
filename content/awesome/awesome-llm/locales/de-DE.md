
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 Large Language Models (LLM) haben die ~~NLP-Gemeinschaft~~ ~~KI-Gemeinschaft~~ **ganze Welt** im Sturm erobert. Hier ist eine kuratierte Liste von Arbeiten zu Large Language Models, insbesondere mit Bezug zu ChatGPT. Sie enthält außerdem Frameworks für das Training von LLMs, Tools zur Bereitstellung von LLMs, Kurse und Tutorials zu LLMs sowie alle öffentlich verfügbaren LLM-Checkpoints und APIs.

## Aktuelle LLM-Projekte

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - Saubere, minimale und leicht zugängliche Reproduktion von DeepSeek R1-Zero
- [open-r1](https://github.com/huggingface/open-r1) - Vollständig offene Reproduktion von DeepSeek-R1
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - Reasoning-Modelle der ersten Generation von DeepSeek.
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - Erkundung der Intelligenz eines groß angelegten MoE-Modells.
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - Die Grenzen kosteneffizienten Reasonings verschieben.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - Das erste als Open Source veröffentlichte Modell auf dem Niveau von GPT-4o.
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - MoE-Sprachmodell mit 32B aktiven und insgesamt 1T Parametern.


## Inhaltsverzeichnis
- [Awesome-LLM ](#awesome-llm-)
  - [Meilenstein-Arbeiten](#milestone-papers)
  - [Weitere Arbeiten](#other-papers)
  - [LLM-Bestenliste](#llm-leaderboard)
  - [Offene LLMs](#open-llm)
  - [LLM-Daten](#llm-data)
  - [LLM-Evaluierung](#llm-evaluation)
  - [LLM-Trainings-Frameworks](#llm-training-frameworks)
  - [LLM-Inferenz](#llm-inference)
  - [LLM-Anwendungen](#llm-applications)
  - [LLM-Tutorials und -Kurse](#llm-tutorials-and-courses)
  - [LLM-Bücher](#llm-books)
  - [Interessante Gedanken zu LLMs](#great-thoughts-about-llm)
  - [Verschiedenes](#miscellaneous)

## Meilenstein-Arbeiten

<details>

<summary> Meilenstein-Arbeiten </summary>
  
|   Datum  |       Stichwörter       |      Institut     |                                                                                                        Arbeit                                                                                                       |
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

## Weitere Arbeiten
> [!NOTE]
> Wenn Sie sich für das Gebiet der LLMs interessieren, kann Ihnen die obige Liste der Meilenstein-Arbeiten dabei helfen, seine Geschichte und den aktuellen Stand der Technik zu erkunden. Jeder Teilbereich der LLM-Forschung bietet jedoch eigene Erkenntnisse und Beiträge, die für das Verständnis des Gesamtgebiets wesentlich sind. Eine detaillierte Liste von Arbeiten aus verschiedenen Teilgebieten finden Sie unter folgendem Link:

<details>
  <summary> weitere Arbeiten </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - Liste von Arbeiten zu LLM-Halluzinationen.
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - Liste von Arbeiten zur Erkennung von Halluzinationen in LLMs.
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - Eine kuratierte Liste praktischer Ressourcen zu LLMs.
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - Eine Sammlung von Prompt-Beispielen für das ChatGPT-Modell.
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - Eine chinesische Sammlung von Prompt-Beispielen für das ChatGPT-Modell.
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Kuratierte Sammlung von Ressourcen zu ChatGPT und GPT-3 von OpenAI.
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) - Ein Trend, der mit „Chain of Thought Prompting Elicits Reasoning in Large Language Models“ begann.
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - So lassen sich LLMs zu verlässlichem Reasoning und begründungsabhängigen Entscheidungen anleiten.
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - Ein Trend, der mit `Natrural-Instruction` (ACL 2022), `FLAN` (ICLR 2022) und `T0` (ICLR 2022) begann.
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - Eine Liste von Arbeiten und Ressourcen zu Large Language Models.
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - Sammlung von Arbeiten und Ressourcen zum Reasoning mit Language Models.
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - Messung der Reasoning-Leistung von LLMs.
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - Eine kuratierte Liste hervorragender Projekte und Ressourcen zu GPT, ChatGPT, OpenAI, LLMs und mehr.
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - Eine Sammlung von Demos und Artikeln zur [OpenAI GPT-3 API](https://openai.com/blog/openai-api/).
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - Eine Sammlung menschlicher Präferenzdatensätze für das Instruction-Tuning, RLHF und die Evaluierung von LLMs.
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - Möglicherweise nützliche Materialien und Tutorials zum Erlernen von RWKV.
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - Eine Liste von Arbeiten und Ressourcen zum Model Editing für Large Language Models.
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - Eine kuratierte Sammlung hervorragender Tools, Dokumente und Projekte zur LLM-Sicherheit.
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - Eine Sammlung von Arbeiten und Ressourcen zur Ausrichtung von Large Language Models (LLMs) an menschlichen Präferenzen.
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - Eine kuratierte Liste der besten Code-LLMs für die Forschung.
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - Hervorragende Forschungsarbeiten und Tools zur LLM-Komprimierung.
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - Hervorragende Forschungsarbeiten zu LLM-Systemen.
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - Eine Sammlung quelloffener, aktiv gepflegter Web-Apps für LLM-Anwendungen.
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - Überblick über japanische LLMs.
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - Die Liste der Arbeiten aus der Übersichtsarbeit zu LLMs in der Medizin.
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - Eine kuratierte Liste hervorragender Arbeiten zur LLM-Inferenz samt Code.
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - Eine kuratierte Liste multimodaler Large Language Models in der 3D-Welt, einschließlich 3D-Verständnis, Reasoning, Generierung und verkörperter Agenten.
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - Eine kuratierte Sammlung von Datensätzen speziell für das Chatbot-Training, einschließlich Links, Größe, Sprache, Nutzung und Kurzbeschreibung jedes Datensatzes.
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - Zusammenstellung quelloffener chinesischer Large Language Models, vorwiegend kleinerer Modelle, die sich privat bereitstellen lassen und geringe Trainingskosten haben; darunter Basismodelle, Feinabstimmungen und Anwendungen für bestimmte Fachgebiete sowie Datensätze und Tutorials.

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - Die Anwendung von Large Language Models (LLMs) auf verschiedene Optimierungsaufgaben (Opt) ist ein aufstrebendes Forschungsgebiet. Dies ist eine Sammlung von Referenzen und Arbeiten zu LLM4Opt.

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - Diese Arbeitsliste konzentriert sich auf die theoretische oder empirische Analyse von Language Models, etwa Lerndynamik, Ausdrucksfähigkeit, Interpretierbarkeit, Verallgemeinerung und weitere interessante Themen.
  
</details>

## LLM-Bestenliste
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - Eine Benchmark-Plattform für Large Language Models (LLMs) mit anonymen, zufällig zusammengestellten Duellen im Crowdsourcing-Verfahren.
- [LiveBench](https://livebench.ai/#/) - Ein anspruchsvoller, kontaminationsfreier LLM-Benchmark.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - Zielt darauf ab, LLMs und Chatbots nach ihrer Veröffentlichung zu verfolgen, einzuordnen und zu evaluieren.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - Ein automatischer Evaluator für Language Models, die Anweisungen befolgen, auf Basis der Benchmark-Suite von Nous.
<details>
  <summary> weitere Bestenlisten </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - Ein Evaluierungsbenchmark mit Schwerpunkt auf dem Verständnis der altchinesischen Sprache.
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - Ein wegweisender Benchmark, der speziell für die umfassende Beurteilung der Ehrlichkeit von LLMs entwickelt wurde.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - Bewertet die Fähigkeit von LLMs, externe Funktionen und Tools aufzurufen.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - Ein von Experten entwickelter Benchmark für chinesische LLMs.
- [CompassRank](https://rank.opencompass.org.cn) - CompassRank widmet sich der Erforschung der fortschrittlichsten Sprach- und Bildmodelle und bietet der Industrie und Forschung eine umfassende, objektive und neutrale Bewertungsgrundlage.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - Ein Benchmark zur Bewertung von QA-Methoden, die mit einer Mischung heterogener Eingabequellen arbeiten (KB, Text, Tabellen, Infoboxen).
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - Ein Benchmark zur Bewertung der Leistung von Large Language Models (LLMs) bei Aufgaben zur textuellen und visuellen Vorstellungskraft.
- [FELM](https://hkust-nlp.github.io/felm) - Ein Meta-Benchmark, der bewertet, wie gut Evaluatoren für Faktentreue die Ausgaben von Large Language Models (LLMs) beurteilen.
- [InfiBench](https://infi-coder.github.io/infibench) - Ein Benchmark zur gezielten Bewertung von Large Language Models anhand ihrer Fähigkeit, reale Fragen zum Programmieren zu beantworten.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - Ein Benchmark zur Evaluierung von Large Language Models im Rechtsbereich.
- [LLMEval](http://llmeval.com) - Befasst sich damit, wie diese Modelle in verschiedenen Szenarien abschneiden, und analysiert die Ergebnisse aus der Perspektive der Interpretierbarkeit.
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - Ein Benchmark zur Bewertung von Large Language Models bei verschiedenen multimodalen Reasoning-Aufgaben, darunter Sprache, Natur- und Sozialwissenschaften, physikalischer und sozialer Alltagsverstand, zeitliches Reasoning, Algebra und Geometrie.
- [MathEval](https://matheval.ai) - Eine umfassende Benchmark-Plattform zur Bewertung der mathematischen Fähigkeiten großer Modelle in 20 Fachgebieten anhand von fast 30.000 Mathematikaufgaben.
- [MixEval](https://mixeval.github.io/#leaderboard) - Ein dynamischer, auf Ground Truth basierender Benchmark, der aus frei verfügbaren Benchmark-Mischungen abgeleitet wurde. Er bewertet LLMs mit einem leistungsfähigen Modellranking (d. h. einer Korrelation von 0,96 mit Chatbot Arena) und läuft dabei lokal und schnell (bei 6 % der Laufzeit und Kosten von MMLU).
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - Ein Benchmark zur Bewertung der Fähigkeit von Large Language Models, medizinische Fragen in mehreren Sprachen zu beantworten.
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - Ein multimodaler Frage-Antwort-Benchmark zur Bewertung der kognitiven Fähigkeit von KI-Modellen, menschliche Überzeugungen und Ziele zu verstehen.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - Ein Benchmark zur Bewertung von KI-Modellen in mehreren akademischen Disziplinen wie Mathematik, Physik, Chemie, Biologie und mehr.
- [PubMedQA](https://pubmedqa.github.io) - Ein biomedizinischer Frage-Antwort-Benchmark, der Forschungsfragen anhand von PubMed-Abstracts beantwortet.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) - Ein Benchmark zur Bewertung von Large Language Models (LLMs) beim Lösen komplexer wissenschaftlicher Aufgaben auf Hochschulniveau, etwa aus Chemie, Physik und Mathematik.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - Eine Benchmark-Plattform zur Evaluierung von Large Language Models (LLMs) für eine Reihe von Aufgaben, insbesondere hinsichtlich natürlichem Sprachverständnis, Reasoning und Verallgemeinerung.
- [SuperLim](https://lab.kb.se/leaderboard/results) - Ein Benchmark zum Verständnis der schwedischen Sprache, der NLP-Modelle anhand verschiedener Aufgaben wie Argumentationsanalyse, semantischer Ähnlichkeit und Textimplikation bewertet.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - Ein umfangreicher Datensatz für Document Visual Question Answering (VQA), der komplexes Dokumentenverständnis insbesondere anhand von Finanzberichten untersucht.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - Ein umfangreicher Frage-Antwort-Benchmark zu realen Finanzdaten, der tabellarische und textuelle Informationen zusammenführt.
- [VisualWebArena](https://jykoh.com/vwa) - Ein Benchmark zur Beurteilung der Leistung multimodaler Web-Agenten bei realistischen, visuell fundierten Aufgaben.
- [We-Math](https://we-math.github.io/#leaderboard) - Ein Benchmark, der große multimodale Modelle (LMMs) danach bewertet, wie gut sie menschenähnliches mathematisches Reasoning leisten.
- [WHOOPS!](https://whoops-benchmark.github.io) - Ein Benchmark-Datensatz, der anhand von Bildern, die normalen Erwartungen widersprechen, die Fähigkeit von KI zum visuellen Alltagsverstand testet.

</details>


## Offene LLMs
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


## LLM-Daten
> Referenz: [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - Open-Source-Toolkit für die effiziente Verarbeitung unstrukturierter Daten mit vorgefertigten Modulen und Skalierung vom lokalen Rechner bis zum Cluster.
- [Datatrove](https://github.com/huggingface/datatrove) - Befreit die Datenverarbeitung vom Skriptchaos und stellt dafür eine Reihe plattformunabhängiger, anpassbarer Pipeline-Bausteine bereit.
- [Dingo](https://github.com/DataEval/dingo) - Ein umfassendes Tool zur Bewertung der Datenqualität.
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - Ein leistungsstarkes Tool zur Erstellung hochwertiger Trainingsdatensätze für Large Language Models.

## LLM-Evaluierung:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - Ein Framework zur Few-Shot-Evaluierung von Language Models.
- [lighteval](https://github.com/huggingface/lighteval) - Eine schlanke Evaluierungs-Suite für LLMs, die Hugging Face intern verwendet.
- [simple-evals](https://github.com/openai/simple-evals) - Evaluierungstools von OpenAI.

<details>
<summary>weitere Evaluierungs-Frameworks</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - Ein Repository zur Evaluierung offener Language Models.
- [MixEval](https://github.com/Psycoy/MixEval) - Eine zuverlässige Evaluierungs-Suite, die sofort einsatzbereit und sowohl mit Open-Source- als auch proprietären Modellen kompatibel ist und MixEval sowie weitere Benchmarks unterstützt.
- [HELM](https://github.com/stanford-crfm/helm) - Holistic Evaluation of Language Models (HELM), ein Framework zur Verbesserung der Transparenz von Language Models.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - Dieses Repository enthält Code zur quantitativen Evaluierung von instruction-getunten Modellen wie Alpaca und Flan-T5 anhand zurückgehaltener Aufgaben.
- [Giskard](https://github.com/Giskard-AI/giskard) - Test- und Evaluierungsbibliothek für LLM-Anwendungen, insbesondere RAG-Systeme.
- [LangSmith](https://www.langchain.com/langsmith) - Eine einheitliche Plattform des LangChain-Frameworks für Evaluierung, Zusammenarbeit mit Menschen in der Schleife (HITL), Protokollierung und Überwachung von LLM-Anwendungen.
- [Ragas](https://github.com/explodinggradients/ragas) - Ein Framework zur Evaluierung von Retrieval-Augmented-Generation-Pipelines (RAG).

</details>



## LLM-Trainings-Frameworks

- [Meta Lingua](https://github.com/facebookresearch/lingua) - Eine schlanke, effiziente und leicht anpassbare Codebasis für die LLM-Forschung.
- [Litgpt](https://github.com/Lightning-AI/litgpt) - Über 20 leistungsstarke LLMs mit Anleitungen für Vortraining, Feinabstimmung und Bereitstellung im großen Maßstab.
- [nanotron](https://github.com/huggingface/nanotron) - Minimalistisches Training großer Language Models mit 3D-Parallelisierung.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed ist eine Bibliothek zur Optimierung von Deep Learning, die verteiltes Training und Inferenz einfach, effizient und leistungsfähig macht.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - Laufende Forschung zum Training von Transformer-Modellen im großen Maßstab.
- [torchtitan](https://github.com/pytorch/torchtitan) - Eine native PyTorch-Bibliothek für das Training großer Modelle.

<details>
<summary>weitere Frameworks</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - Die DeepSpeed-Version von NVIDIA Megatron-LM, die zusätzliche Unterstützung für Funktionen wie MoE-Modelltraining, Curriculum Learning, 3D-Parallelisierung und weitere bietet.
  - [torchtune](https://github.com/pytorch/torchtune) - Eine native PyTorch-Bibliothek zur Feinabstimmung von LLMs.
  - [ROLL](https://github.com/alibaba/ROLL) - Eine effiziente und benutzerfreundliche Skalierungsbibliothek für Reinforcement Learning mit Large Language Models.
  - [veRL](https://github.com/volcengine/verl) - veRL ist ein flexibles und effizientes RL-Framework für LLMs.
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - Generatives KI-Framework für Forschende und PyTorch-Entwickler, die mit Large Language Models (LLMs), multimodalen Modellen (MMs), automatischer Spracherkennung (ASR), Text-to-Speech (TTS) und Computer Vision (CV) arbeiten.
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - Macht große KI-Modelle kostengünstiger, schneller und zugänglicher.
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - Effizientes Training großer Modelle.
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow: Modellparallelisierung leicht gemacht.
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - Ein einfaches, leistungsstarkes und skalierbares Jax-LLM!
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - Eine Implementierung modellparalleler autoregressiver Transformer auf GPUs auf Basis der DeepSpeed-Bibliothek.
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - Eine Bibliothek zur Beschleunigung des Trainings von Transformer-Modellen auf NVIDIA-GPUs.
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - Ein benutzerfreundliches, skalierbares und leistungsstarkes RLHF-Framework (70B+ PPO Full Tuning, iteratives DPO, LoRA, RingAttention und RFT).
  - [TRL](https://huggingface.co/docs/trl/en/index) - TRL ist eine umfassende Bibliothek mit Tools zum Training von Transformer-Sprachmodellen mittels Reinforcement Learning – vom überwachten Feinabstimmungsschritt (SFT) über Reward Modeling (RM) bis zur Proximal Policy Optimization (PPO).
  - [unslothai](https://github.com/unslothai/unsloth) - Ein Framework mit Schwerpunkt auf effizienter Feinabstimmung. Auf der GitHub-Seite finden Sie sofort nutzbare Fine-Tuning-Vorlagen für verschiedene LLMs, mit denen Sie Ihre eigenen Daten kostenlos in der Google-​​Colab-Cloud trainieren können.
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - Open-Source-Framework zur Feinabstimmung und Evaluierung von LLMs. Es vereinfacht das Experimentieren mit verschiedenen Trainingskonfigurationen und die Reproduktion und Weitergabe von Ergebnissen. Unterstützt werden unter anderem LoRA, QLoRA, DeepSpeed, PEFT und Multi-GPU-Setups.

</details>


## LLM-Inferenz

> Referenz: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - Schnelles Serving-Framework für Large Language Models und Vision-Language-Modelle.
- [vLLM](https://github.com/vllm-project/vllm) - Eine Inferenz- und Serving-Engine für LLMs mit hohem Durchsatz und effizientem Speicherverbrauch.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - LLM-Inferenz in C/C++.
- [ollama](https://github.com/ollama/ollama) - Legen Sie mit Llama 3, Mistral, Gemma und weiteren Large Language Models sofort los.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - Ein Toolkit zur Bereitstellung und zum Serving von Large Language Models (LLMs).
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - NVIDIA-Framework für LLM-Inferenz.
<details>
<summary>weitere Bereitstellungstools</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA-Framework für LLM-Inferenz (zu TensorRT-LLM übergegangen).
- [MInference](https://github.com/microsoft/MInference) - Beschleunigt die Inferenz von LLMs mit langem Kontext durch näherungsweise dynamische Sparse-Berechnung der Attention. Dadurch sinkt die Inferenzlatenz beim Prefill auf einer A100 um bis zu das Zehnfache, bei gleichbleibender Genauigkeit.
- [exllama](https://github.com/turboderp/exllama) - Eine speichereffizientere Neufassung der HF-Transformers-Implementierung von Llama zur Verwendung mit quantisierten Gewichten.
- [FastChat](https://github.com/lm-sys/FastChat) - Ein verteiltes Serving-System für mehrere LLMs mit Web-UI und OpenAI-kompatiblen REST-APIs.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Blitzschnelle LLM-Inferenz.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Führen Sie LLMs und Batch-Jobs in jeder Cloud aus. Profitieren Sie von maximalen Kosteneinsparungen, höchster GPU-Verfügbarkeit und verwalteter Ausführung – alles über eine einfache Schnittstelle.
- [Haystack](https://haystack.deepset.ai/) - Ein quelloffenes NLP-Framework, mit dem Sie LLMs und Transformer-Modelle von Hugging Face, OpenAI und Cohere nutzen können, um mit Ihren eigenen Daten zu arbeiten.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Feinabstimmung, Serving, Bereitstellung und Überwachung beliebiger Open-Source-LLMs im Produktivbetrieb. Wird bei [BentoML](https://bentoml.com/) für LLM-basierte Anwendungen produktiv eingesetzt.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) - MII ermöglicht latenzarme Inferenz mit hohem Durchsatz, ähnlich wie vLLM, unterstützt von DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inferenz für Text-Embeddings in Rust; HFOIL-Lizenz.
- [Infinity](https://github.com/michaelfeil/infinity) - Inferenz für Text-Embeddings in Python.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - Ein Inferenz- und Serving-Framework mit hohem Durchsatz und niedriger Latenz für LLMs und VLs.
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - Effiziente Triton-Kernels für das Training von LLMs.
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - Eine verteilte Implementierung von llama.cpp, mit der sich LLMs der 70B-Klasse auf Alltagsgeräten ausführen lassen.
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - Stellen Sie beliebige LLMs mit Ansible und minimaler Konfiguration einfach auf einer VM bereit.

</details>


## LLM-Anwendungen
> Referenz: [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy: Das Framework zum Programmieren – nicht Prompten – von Basismodellen.
- [LangChain](https://github.com/hwchase17/langchain) — Eine beliebte Python-/JavaScript-Bibliothek zum Verketten von Sequenzen von Prompts für Language Models.
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — Eine Python-Bibliothek zur Erweiterung von LLM-Anwendungen um Daten.

<details>
<summary>weitere Anwendungen</summary>


- [MLflow](https://mlflow.org/) - MLflow: Ein Open-Source-Framework für den gesamten Lebenszyklus des maschinellen Lernens. Es unterstützt Entwickler dabei, Experimente zu verfolgen, Modelle und Prompts zu evaluieren, Modelle bereitzustellen und durch Tracing Einblick in den Betrieb zu erhalten.
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Ein umfassendes Toolset für verschiedene Aufgaben mit lokalen LLMs.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Eine leichtgewichtige Alternative zu LangChain zum Zusammenstellen von LLMs.
- [magentic](https://github.com/jackmpcollins/magentic) - Nahtlose Integration von LLMs als Python-Funktionen.
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - ChatGPT über wechaty in WeChat verwenden.
- [promptfoo](https://github.com/typpo/promptfoo) - Testen Sie Ihre Prompts. Evaluieren und vergleichen Sie LLM-Ausgaben, erkennen Sie Regressionen und verbessern Sie die Prompt-Qualität.
- [Agenta](https://github.com/agenta-ai/agenta) - Erstellen, versionieren, evaluieren und veröffentlichen Sie mühelos LLM-gestützte Anwendungen.
- [Serge](https://github.com/serge-chat/serge) - Eine mit llama.cpp entwickelte Chat-Oberfläche zum Ausführen von Alpaca-Modellen. Keine API-Schlüssel, vollständig selbst gehostet!
- [Langroid](https://github.com/langroid/langroid) - Nutzen Sie LLMs mit Multi-Agent-Programmierung.
- [Embedchain](https://github.com/embedchain/embedchain) - Framework zum Erstellen von ChatGPT-ähnlichen Bots auf Basis Ihres Datensatzes.
- [Opik](https://github.com/comet-ml/opik) - Evaluieren, testen und veröffentlichen Sie LLM-Anwendungen zuverlässig – mit einer Suite von Observability-Tools, die Ausgaben von Language Models während Entwicklung und Produktion abstimmt.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - Vereinfacht die Evaluierung von LLMs durch einen einheitlichen Microservice für den Zugriff auf und das Testen mehrerer KI-Modelle.
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Früher langchain-ChatGLM: eine lokale, wissensbasierte QA-Anwendung mit LLMs wie ChatGLM und LangChain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Erstellen Sie mit weniger als 500 Codezeilen Ihre eigene dialogbasierte Suchmaschine mit [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Erstellen, veröffentlichen und betreiben Sie mit Python überall Actions, um Ihre KI-Agenten und Assistenten zu verbessern. Mit einer umfangreichen Auswahl an Bibliotheken, Hilfsfunktionen und Protokollierung ist alles enthalten.
- [Tune Studio](https://studio.tune.app/) - Spielwiese für Entwickler, um LLMs feinabzustimmen und bereitzustellen.
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Lokal ausgeführte Websuche mit LLM-Ketten.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Das Gateway optimiert Anfragen an über 100 offene und proprietäre Modelle über eine einheitliche API. Es ist produktionsreif und unterstützt Caching, Fallbacks, Wiederholungen, Timeouts und Lastverteilung; außerdem lässt es sich für minimale Latenz am Edge bereitstellen.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - Einfache API zur Bereitstellung beliebiger RAG- oder LLM-Lösungen mit Plugins.
- [Wllama](https://github.com/ngxson/wllama) - WebAssembly-Bindung für llama.cpp – ermöglicht LLM-Inferenz direkt im Browser.
- [GPUStack](https://github.com/gpustack/gpustack) - Ein quelloffener GPU-Cluster-Manager zum Ausführen von LLMs.
- [MNN-LLM](https://github.com/alibaba/MNN) -- Ein Inferenz-Framework für Geräte, einschließlich LLM-Inferenz direkt auf Geräten (Mobiltelefon/PC/IoT).
- [CAMEL](https://www.camel-ai.org/) - Das erste LLM-Multi-Agent-Framework.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - Ein interaktives Chat-Projekt, das Ollama-/OpenAI-/MistralAI-LLMs nutzt, um GitHub-Code-Repositories oder komprimierte Dateien schnell zu verstehen und zu durchsuchen.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interagieren Sie unter Linux oder macOS über reine Shell-Skripte mit LLMs mithilfe von Ollama-Modellen (oder OpenAI, MistralAI) und verbessern Sie so die intelligente Systemverwaltung ganz ohne Abhängigkeiten.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - Ein Python-Paket für Text-zu-SQL mit Self-Hosting-Funktionen und REST-APIs, kompatibel mit proprietären und quelloffenen LLMs.
- [Langfuse](https://github.com/langfuse/langfuse) - Open-Source-Plattform für LLM-Engineering 🪢: Tracing, Evaluierungen, Prompt-Verwaltung und Playground.
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - AdalFlow: Die Bibliothek zum Erstellen und automatischen Optimieren von LLM-Anwendungen.
- [Guidance](https://github.com/microsoft/guidance) — Eine praktische Python-Bibliothek von Microsoft, die Handlebars-Templates nutzt, um Generierung, Prompting und logische Steuerung zu verknüpfen.
- [Evidently](https://github.com/evidentlyai/evidently) — Ein Open-Source-Framework zur Evaluierung, zum Testen und zur Überwachung ML- und LLM-gestützter Systeme.
- [Chainlit](https://docs.chainlit.io/overview) — Eine Python-Bibliothek zum Erstellen von Chatbot-Oberflächen.
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — Eine Python-Bibliothek zur Validierung von Ausgaben und Wiederholung fehlgeschlagener Vorgänge. Sie befindet sich noch in der Alpha-Phase; rechnen Sie daher mit Ecken, Kanten und Fehlern.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — Eine Python-/C#-/Java-Bibliothek von Microsoft mit Unterstützung für Prompt-Templates, Funktionsverkettung, vektorisiertes Gedächtnis und intelligente Planung.
- [Prompttools](https://github.com/hegelai/prompttools) — Open-Source-Python-Tools zum Testen und Evaluieren von Modellen, Vektordatenbanken und Prompts.
- [Outlines](https://github.com/normal-computing/outlines) — Eine Python-Bibliothek mit einer domänenspezifischen Sprache, die Prompting vereinfacht und die Generierung einschränkt.
- [Promptify](https://github.com/promptslab/Promptify) — Eine kleine Python-Bibliothek, mit der sich Language Models für NLP-Aufgaben einsetzen lassen.
- [Scale Spellbook](https://scale.com/spellbook) — Ein kostenpflichtiges Produkt zum Erstellen, Vergleichen und Veröffentlichen von Language-Model-Anwendungen.
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — Ein kostenpflichtiges Produkt zum Testen und Verbessern von Prompts.
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — Ein kostenpflichtiges Produkt zur Nachverfolgung von Modelltraining und Prompt-Engineering-Experimenten.
- [OpenAI Evals](https://github.com/openai/evals) — Eine Open-Source-Bibliothek zur Evaluierung der Aufgabenleistung von Language Models und Prompts.

- [Arthur Shield](https://www.arthur.ai/get-started) — Ein kostenpflichtiges Produkt zur Erkennung von toxischen Inhalten, Halluzinationen, Prompt Injection usw.
- [LMQL](https://lmql.ai) — Eine Programmiersprache für die Interaktion mit LLMs, mit Unterstützung für typisiertes Prompting, Kontrollfluss, Einschränkungen und Tools.
- [ModelFusion](https://github.com/lgrammel/modelfusion) - Eine TypeScript-Bibliothek zum Erstellen von Anwendungen mit LLMs und anderen ML-Modellen (Sprache-zu-Text, Text-zu-Sprache, Bildgenerierung).
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — Ein zweisprachiges chinesisch-englisches Modell zur Wissensextraktion mit Wissensgraphen und Technologien zur Verarbeitung natürlicher Sprache.
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - Eine React-Bibliothek zum Erstellen von LLM-Oberflächen.
- [Wordware](https://www.wordware.ai) - Eine webbasierte IDE, in der Fachleute ohne technischen Hintergrund gemeinsam mit KI-Entwicklern aufgabenspezifische KI-Agenten erstellen. Prompting wird dabei als neue Programmiersprache statt als Baukasten aus No-Code-/Low-Code-Blöcken betrachtet.
- [Wallaroo.AI](https://github.com/WallarooLabs) - Stellen Sie beliebige Modelle in jeder Umgebung – von der Cloud bis zum Edge – bereit, verwalten und optimieren Sie sie. So gelangen Sie in wenigen Minuten vom Python-Notebook zur Inferenz.
- [Dify](https://github.com/langgenius/dify) - Eine Open-Source-Plattform zur Entwicklung von LLM-Anwendungen mit einer intuitiven Oberfläche, die KI-Workflows, Modellverwaltung und Bereitstellung in der Produktion vereinfacht.
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - Eine Open-Source-LLM-App zum einfachen und unkomplizierten Erstellen von Multi-Agent-LLM-Anwendungen; unterstützt Modellbereitstellung und Feinabstimmung.
- [MemFree](https://github.com/memfreeme/memfree) - Quelloffene hybride KI-Suchmaschine: Erhalten Sie sofort präzise Antworten aus dem Internet, Lesezeichen, Notizen und Dokumenten. Unterstützt die Bereitstellung mit einem Klick.
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - Open-Source-AutoML-Tool für RAG. Optimiert die Qualität von RAG-Antworten automatisch – von der Erstellung eines Generierungs-Evaluierungsdatensatzes bis zur Bereitstellung einer optimierten RAG-Pipeline.
- [Epsilla](https://github.com/epsilla-cloud) - Eine All-in-one-Plattform für LLM-Agenten mit Ihren privaten Daten und Ihrem Wissen, die vom ersten Tag an produktionsreife KI-Agenten bereitstellt.
- [Arize-Phoenix](https://phoenix.arize.com/) - Ein Open-Source-Tool für ML-Observability, das in Ihrer Notebook-Umgebung läuft. Überwachen und optimieren Sie LLMs, CV- und Tabular-Modelle.
- [LLM]([https://github.com/simonw/llm) - Ein CLI-Tool und eine Python-Bibliothek zur Interaktion mit Large Language Models – sowohl über Remote-APIs als auch mit Modellen, die auf dem eigenen Rechner installiert und ausgeführt werden können.
- [Just-Chat](https://github.com/longevity-genie/just-chat) - Erstellen Sie Ihren LLM-Agenten und chatten Sie einfach und schnell mit ihm!
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - Open-Source-CLI-Sicherheitsscanner für agentische Workflows. Analysiert den Quellcode Ihres Workflows, erkennt Schwachstellen und erstellt eine interaktive Visualisierung samt ausführlichem Sicherheitsbericht. Unterstützt LangGraph, CrewAI, n8n, OpenAI Agents und mehr.
- [LangWatch](https://github.com/langwatch/langwatch) - Open-Source-Plattform für LLM-Observability, Prompt-Evaluierung und Prompt-Optimierung.
- [TensorZero](https://www.tensorzero.com/) - TensorZero ist ein Open-Source-Framework zum Erstellen produktionsreifer LLM-Anwendungen. Es vereint ein LLM-Gateway, Observability, Optimierung, Evaluierungen und Experimente.

</details>

## LLM-Tutorials und -Kurse
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - Mein Favorit!
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - Hochwertige und lehrreiche Videos, die Sie nicht verpassen sollten.
- [Alexander Rush Series](https://rush-nlp.com/projects/) - Hochwertige und lehrreiche Materialien, die Sie nicht verpassen sollten.
- [llm-course](https://github.com/mlabonne/llm-course) - Kurs zum Einstieg in Large Language Models (LLMs) mit Roadmaps und Colab-Notebooks.
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - Neueste Entwicklungen bei Basismodellen.
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - Minimalistischer, sauberer Code für den Byte-Pair-Encoding- (BPE-)Algorithmus, der häufig bei der Tokenisierung von LLMs verwendet wird.
- [femtoGPT](https://github.com/keyvank/femtoGPT) - Eine reine Rust-Implementierung eines minimalistischen Generative Pretrained Transformers.
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - Über 100 Übersichten zu LLM- und RL-Algorithmen📚.


## LLM-Bücher
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - Enthält ein [GitHub-Repository](https://github.com/benman1/generative_ai_with_langchain), das viele der Funktionen veranschaulicht.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Eine Anleitung zum Bau eines eigenen funktionsfähigen LLM.
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - Erklärt, wie man einen Generative Pre-trained Transformer (GPT) von Grund auf programmiert.
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - Entdecken Sie die Welt der Large Language Models anhand von über 275 eigens erstellten Abbildungen in diesem illustrierten Leitfaden!
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - Ein einführendes LLM-Lehrbuch auf Grundlage von [*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## Interessante Gedanken zu LLMs
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

## Verschiedenes


- [Emergent Mind](https://www.emergentmind.com) - Die neuesten KI-Nachrichten, von GPT-4 kuratiert und erläutert.
- [ShareGPT](https://sharegpt.com) - Teilen Sie Ihre unterhaltsamsten ChatGPT-Unterhaltungen mit nur einem Klick.
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - Cohere Summarize Beta wird vorgestellt: ein neuer Endpunkt für Textzusammenfassungen.
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPT Wrapper ist eine inoffizielle Open-Source-Python-API und ein CLI-Tool für die Interaktion mit ChatGPT.
- [Cursor](https://www.cursor.so) - Schreiben, bearbeiten und besprechen Sie Ihren Code mit einer leistungsstarken KI.
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - Eine experimentelle Open-Source-Anwendung, die die Fähigkeiten des Sprachmodells GPT-4 demonstriert.
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - Wenn LLM auf Fachexperten trifft.
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - Ein benutzerfreundliches Framework zum Bearbeiten großer Language Models.
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - Eine Chrome-Erweiterung für OpenAI ChatGPT, die den Datenschutz verbessert, indem sie das einfache Ein- und Ausblenden des Chatverlaufs ermöglicht. Ideal zum Schutz der Privatsphäre bei Bildschirmfreigaben.
- [AI For Developers](https://aifordevelopers.org) - Liste von KI-Tools und Agenten für Entwickler.

## Mitwirken

Dies ist ein aktives Repository, und Ihre Beiträge sind jederzeit willkommen!

Ich lasse einige Pull Requests offen, wenn ich mir nicht sicher bin, ob sie für LLMs großartig sind. Sie können darüber abstimmen, indem Sie ihnen ein 👍 hinzufügen.

---

Wenn Sie Fragen zu dieser kuratierten Liste haben, wenden Sie sich gerne an mich unter chengxin1998@stu.pku.edu.cn.

[^1]: Dies ist keine Rechtsberatung. Weitere Informationen erhalten Sie von den ursprünglichen Autoren der Modelle.
