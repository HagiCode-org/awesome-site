
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 Большие языковые модели (LLM) произвели фурор во ~~всем сообществе NLP~~ ~~всем сообществе AI~~ **во всём мире**. Здесь собрана подборка статей о больших языковых моделях, особенно связанных с ChatGPT. Также здесь представлены фреймворки для обучения LLM, инструменты для развёртывания LLM, курсы и учебные материалы по LLM, а также все общедоступные контрольные точки моделей LLM и API.

## Популярные проекты LLM

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) — чистая, минималистичная и доступная для изучения реализация DeepSeek R1-Zero
- [open-r1](https://github.com/huggingface/open-r1) — полностью открытая реализация DeepSeek-R1
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) — модели рассуждений первого поколения от DeepSeek.
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) — исследование возможностей крупномасштабной MoE-модели.
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) — продвижение границ экономически эффективного рассуждения.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) — первая модель уровня GPT-4o с открытым исходным кодом.
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) — языковая MoE-модель с 32B активных и 1T общих параметров.


## Содержание
- [Awesome-LLM ](#awesome-llm-)
  - [Основополагающие статьи](#milestone-papers)
  - [Другие статьи](#other-papers)
  - [Рейтинги LLM](#llm-leaderboard)
  - [Открытые LLM](#open-llm)
  - [Данные для LLM](#llm-data)
  - [Оценка LLM](#llm-evaluation)
  - [Фреймворки для обучения LLM](#llm-training-frameworks)
  - [Инференс LLM](#llm-inference)
  - [Приложения на основе LLM](#llm-applications)
  - [Учебные материалы и курсы по LLM](#llm-tutorials-and-courses)
  - [Книги о LLM](#llm-books)
  - [Важные мысли о LLM](#great-thoughts-about-llm)
  - [Разное](#miscellaneous)

## Основополагающие статьи

<details>

<summary> основные статьи </summary>
  
|   Дата  |       ключевые слова |      Организация   |                                                                                                        Статья                                                                                                      |
|:-------:|:--------------------:|:------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-06 |     Трансформеры     |       Google       | [Attention Is All You Need](https://arxiv.org/pdf/1706.03762.pdf)                                                                                                                                                  |
| 2018-06 |        GPT 1.0       |       OpenAI       | [Improving Language Understanding by Generative Pre-Training](https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf)                                                                             |
| 2018-10 |         BERT         |       Google       | [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423.pdf)                                                                                          |
| 2019-02 |        GPT 2.0       |       OpenAI       | [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)                                          |
| 2019-09 |      Megatron-LM     |       NVIDIA       | [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/pdf/1909.08053.pdf)                                                                                      |
| 2019-10 |          T5          |       Google       | [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://jmlr.org/papers/v21/20-074.html)                                                                                       |
| 2019-10 |         ZeRO         |      Microsoft     | [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/pdf/1910.02054.pdf)                                                                                                       |
| 2020-01 |  Законы масштабирования |       OpenAI       | [Scaling Laws for Neural Language Models](https://arxiv.org/pdf/2001.08361.pdf)                                                                                                                                    |
| 2020-05 |        GPT 3.0       |       OpenAI       | [Language models are few-shot learners](https://papers.nips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf)                                                                                         |
| 2021-01 |  Switch Transformers |       Google       | [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity](https://arxiv.org/pdf/2101.03961.pdf)                                                                               |
| 2021-08 |         Codex        |       OpenAI       | [Evaluating Large Language Models Trained on Code](https://arxiv.org/pdf/2107.03374.pdf)                                                                                                                           |
| 2021-08 |    Базовые модели    |      Stanford      | [On the Opportunities and Risks of Foundation Models](https://arxiv.org/pdf/2108.07258.pdf)                                                                                                                        |
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
| 2022-06 | Эмерджентные способности |       Google       | [Emergent Abilities of Large Language Models](https://openreview.net/pdf?id=yzkSU5zdwD)                                                                                                                            |
| 2022-06 |       BIG-bench      |       Google       | [Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models](https://github.com/google/BIG-bench)                                                                                |
| 2022-06 |        METALM        |      Microsoft     | [Language Models are General-Purpose Interfaces](https://arxiv.org/pdf/2206.06336.pdf)                                                                                                                             |
| 2022-09 |        Sparrow       |      DeepMind      | [Improving alignment of dialogue agents via targeted human judgements](https://arxiv.org/pdf/2209.14375.pdf)                                                                                                       |
| 2022-10 |     Flan-T5/PaLM     |       Google       | [Scaling Instruction-Finetuned Language Models](https://arxiv.org/pdf/2210.11416.pdf)                                                                                                                              |
| 2022-10 |       GLM-130B       |      Tsinghua      | [GLM-130B: An Open Bilingual Pre-trained Model](https://arxiv.org/pdf/2210.02414.pdf)                                                                                                                              |
| 2022-11 |         HELM         |      Stanford      | [Holistic Evaluation of Language Models](https://arxiv.org/pdf/2211.09110.pdf)                                                                                                                                     |
| 2022-11 |         BLOOM        |     BigScience     | [BLOOM: A 176B-Parameter Open-Access Multilingual Language Model](https://arxiv.org/pdf/2211.05100.pdf)                                                                                                            |
| 2022-11 |       Galactica      |        Meta        | [Galactica: A Large Language Model for Science](https://arxiv.org/pdf/2211.09085.pdf)                                                                                                                              |
| 2022-12 |        OPT-IML       |        Meta        | [OPT-IML: Scaling Language Model Instruction Meta Learning through the Lens of Generalization](https://arxiv.org/pdf/2212.12017)                                                                                   |
| 2023-01 | Коллекция Flan 2022 |       Google       | [The Flan Collection: Designing Data and Methods for Effective Instruction Tuning](https://arxiv.org/pdf/2301.13688.pdf)                                                                                           |
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

## Другие статьи
> [!NOTE]
> Если вас интересует область LLM, приведённый выше список основополагающих статей поможет изучить её историю и современное состояние. Однако каждое направление LLM предлагает уникальные идеи и результаты, важные для понимания всей области. Подробный список статей по различным подразделам см. по ссылке ниже:

<details>
  <summary> другие статьи </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) — список статей о галлюцинациях LLM.
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) — список статей об обнаружении галлюцинаций в LLM.
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) — подборка практических руководств по LLM.
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) — коллекция примеров промптов для модели ChatGPT.
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) — китайская коллекция примеров промптов для модели ChatGPT.
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) — подборка ресурсов по ChatGPT и GPT-3 от OpenAI.
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) — подборка, начавшаяся с работы «Промптинг с цепочкой рассуждений вызывает способность к рассуждению у больших языковых моделей».
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) — как просить LLM надёжно рассуждать и принимать решения с учётом доводов.
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) — подборка, начавшаяся с `Natrural-Instruction` (ACL 2022), `FLAN` (ICLR 2022) и `T0` (ICLR 2022).
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) — список статей и ресурсов о больших языковых моделях.
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) — коллекция статей и ресурсов о рассуждениях с помощью языковых моделей.
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) — измерение способности LLM к рассуждению.
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) — подборка интересных проектов и ресурсов, связанных с GPT, ChatGPT, OpenAI, LLM и другими темами.
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) — коллекция демонстраций и статей об [API OpenAI GPT-3](https://openai.com/blog/openai-api/).
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) — коллекция наборов данных о человеческих предпочтениях для настройки LLM на инструкции, RLHF и оценки.
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) — возможно, полезные материалы и руководство по изучению RWKV.
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) — список статей и ресурсов по редактированию больших языковых моделей.
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) — подборка полезных инструментов, документов и проектов по безопасности LLM.
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) — коллекция статей и ресурсов о согласовании больших языковых моделей (LLM) с человеком.
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) — тщательно составленный список лучших LLM для кода и исследований.
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) — интересные исследовательские статьи и инструменты по сжатию LLM.
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) — интересные исследовательские статьи о системах LLM.
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) — коллекция приложений для LLM с открытым исходным кодом, которые активно поддерживаются.
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) — 日本語LLMまとめ — обзор японских LLM.
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) — список статей для обзора LLM в медицине.
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) — подборка статей об инференсе LLM с кодом.
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) — подборка мультимодальных больших языковых моделей для трёхмерного мира, включая понимание 3D, рассуждение, генерацию и воплощённых агентов.
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) — подборка наборов данных для обучения чат-ботов со ссылками, размером, языком, областью применения и кратким описанием каждого набора.
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) — подборка китайских больших языковых моделей с открытым исходным кодом, преимущественно небольших, пригодных для локального развёртывания и недорогого обучения; включает базовые модели, дообучение и приложения для отдельных областей, наборы данных, учебные материалы и многое другое.

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) — применение больших языковых моделей (LLM) для различных задач оптимизации (Opt) — развивающееся направление исследований. Здесь собраны ссылки и статьи по LLM4Opt.

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) — список статей о теоретическом и эмпирическом анализе языковых моделей, включая динамику обучения, выразительные возможности, интерпретируемость, обобщение и другие интересные темы.
  
</details>

## Рейтинги LLM
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) — платформа тестирования больших языковых моделей (LLM) с анонимными случайными состязаниями, результаты которых собираются от сообщества.
- [LiveBench](https://livebench.ai/#/) — сложный бенчмарк LLM, устойчивый к загрязнению данными.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) — отслеживает, ранжирует и оценивает выпускаемые LLM и чат-боты.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) — автоматическая оценка моделей языка, следующих инструкциям, с использованием набора бенчмарков Nous.
<details>
  <summary> другие рейтинги </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) — бенчмарк для оценки понимания древнекитайского языка.
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) — новаторский бенчмарк, созданный для всесторонней оценки честности LLM.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) — оценивает способность LLM вызывать внешние функции и инструменты.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) — экспертный бенчмарк для китайских LLM.
- [CompassRank](https://rank.opencompass.org.cn) — исследует самые передовые языковые и визуальные модели и предлагает отрасли и исследователям всесторонний, объективный и нейтральный ориентир для оценки.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) — бенчмарк для оценки методов QA, работающих со смесью разнородных источников данных (баз знаний, текста, таблиц и инфоблоков).
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) — бенчмарк для оценки больших языковых моделей (LLM) в различных задачах, связанных с воображением в тексте и изображениях.
- [FELM](https://hkust-nlp.github.io/felm) — метабенчмарк, оценивающий, насколько хорошо средства проверки фактичности анализируют результаты больших языковых моделей (LLM).
- [InfiBench](https://infi-coder.github.io/infibench) — бенчмарк для оценки способности больших языковых моделей (LLM) отвечать на практические вопросы, связанные с программированием.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) — бенчмарк для оценки больших языковых моделей в юридической области.
- [LLMEval](http://llmeval.com) — помогает понять, как эти модели работают в различных сценариях, и анализировать результаты с точки зрения интерпретируемости.
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) — бенчмарк для оценки больших языковых моделей в различных мультимодальных задачах рассуждения, включая язык, естественные и социальные науки, физические и социальные знания здравого смысла, временное рассуждение, алгебру и геометрию.
- [MathEval](https://matheval.ai) — комплексная платформа для оценки математических способностей больших моделей в 20 областях на почти 30 000 математических задачах.
- [MixEval](https://mixeval.github.io/#leaderboard) — динамический бенчмарк на основе эталонных ответов, составленный из готовых наборов тестов. Он оценивает LLM с высокой точностью ранжирования (корреляция с Chatbot Arena — 0,96), работая локально и быстро (время и стоимость составляют 6% от запуска MMLU).
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) — бенчмарк для оценки способности больших языковых моделей отвечать на медицинские вопросы на разных языках.
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) — мультимодальный бенчмарк вопросов и ответов для оценки способности моделей ИИ понимать убеждения и цели людей.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) — бенчмарк для оценки моделей ИИ в различных академических дисциплинах, включая математику, физику, химию, биологию и другие.
- [PubMedQA](https://pubmedqa.github.io) — биомедицинский бенчмарк вопросов и ответов, предназначенный для ответов на исследовательские вопросы с использованием аннотаций PubMed.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) — бенчмарк для оценки больших языковых моделей (LLM) при решении сложных научных задач университетского уровня, например по химии, физике и математике.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) — платформа для оценки больших языковых моделей (LLM) в различных задачах, особенно в понимании естественного языка, рассуждении и обобщении.
- [SuperLim](https://lab.kb.se/leaderboard/results) — бенчмарк понимания шведского языка, оценивающий модели обработки естественного языка (NLP) в таких задачах, как анализ аргументации, семантическое сходство и текстовое следование.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) — крупномасштабный набор данных визуальных вопросов и ответов по документам (VQA), предназначенный для сложного понимания документов, в частности финансовых отчётов.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) — крупномасштабный бенчмарк вопросов и ответов на основе реальных финансовых данных, объединяющий табличную и текстовую информацию.
- [VisualWebArena](https://jykoh.com/vwa) — бенчмарк для оценки мультимодальных веб-агентов на реалистичных задачах, основанных на визуальном контексте.
- [We-Math](https://we-math.github.io/#leaderboard) — бенчмарк для оценки способности больших мультимодальных моделей (LMM) выполнять математические рассуждения на уровне человека.
- [WHOOPS!](https://whoops-benchmark.github.io) — набор данных для проверки способности ИИ рассуждать о визуальном здравом смысле на изображениях, противоречащих привычным ожиданиям.

</details>


## Открытые LLM
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


## Данные для LLM
> Источник: [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) — набор инструментов с открытым исходным кодом для эффективной обработки неструктурированных данных: готовые модули масштабируются от локального запуска до кластера.
- [Datatrove](https://github.com/huggingface/datatrove) — упрощает обработку данных благодаря набору настраиваемых, не зависящих от платформы блоков конвейера, избавляя от необходимости писать множество скриптов.
- [Dingo](https://github.com/DataEval/dingo) — комплексный инструмент оценки качества данных.
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) — мощный инструмент для создания высококачественных обучающих наборов данных для больших языковых моделей.

## Оценка LLM:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) — фреймворк для оценки языковых моделей в режиме few-shot.
- [lighteval](https://github.com/huggingface/lighteval) — лёгкий набор инструментов для оценки LLM, который Hugging Face использует внутри компании.
- [simple-evals](https://github.com/openai/simple-evals) — инструменты оценки от OpenAI.

<details>
<summary>другие фреймворки для оценки</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) — репозиторий для оценки открытых языковых моделей.
- [MixEval](https://github.com/Psycoy/MixEval) — надёжный набор инструментов для оценки в один клик, совместимый как с моделями с открытым исходным кодом, так и с проприетарными моделями; поддерживает MixEval и другие бенчмарки.
- [HELM](https://github.com/stanford-crfm/helm) — комплексная оценка языковых моделей (HELM), фреймворк для повышения их прозрачности.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) — репозиторий содержит код для количественной оценки моделей, настроенных на следование инструкциям, таких как Alpaca и Flan-T5, на отложенных задачах.
- [Giskard](https://github.com/Giskard-AI/giskard) — библиотека тестирования и оценки приложений на основе LLM, особенно RAG-систем.
- [LangSmith](https://www.langchain.com/langsmith) — единая платформа на базе фреймворка LangChain для оценки, совместной работы с участием человека (HITL), ведения журналов и мониторинга приложений на основе LLM.
- [Ragas](https://github.com/explodinggradients/ragas) — фреймворк для оценки конвейеров генерации с дополнением извлечённой информацией (RAG).

</details>



## Фреймворки для обучения LLM

- [Meta Lingua](https://github.com/facebookresearch/lingua) — компактная, эффективная и легко модифицируемая кодовая база для исследований LLM.
- [Litgpt](https://github.com/Lightning-AI/litgpt) — более 20 высокопроизводительных LLM и рецепты для предварительного обучения, дообучения и масштабного развёртывания.
- [nanotron](https://github.com/huggingface/nanotron) — минималистичный инструмент для обучения больших языковых моделей с 3D-параллелизмом.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) — библиотека оптимизации глубокого обучения, упрощающая распределённое обучение и инференс и повышающая их эффективность.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) — текущие исследования масштабного обучения моделей Transformer.
- [torchtitan](https://github.com/pytorch/torchtitan) — библиотека PyTorch для обучения больших моделей.

<details>
<summary>другие фреймворки</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) — версия Megatron-LM от NVIDIA на базе DeepSpeed с дополнительной поддержкой обучения MoE-моделей, Curriculum Learning, 3D-параллелизма и других функций.
  - [torchtune](https://github.com/pytorch/torchtune) — библиотека на базе PyTorch для дообучения LLM.
  - [ROLL](https://github.com/alibaba/ROLL) — эффективная и удобная библиотека масштабирования обучения с подкреплением для больших языковых моделей.
  - [veRL](https://github.com/volcengine/verl) — гибкий и эффективный фреймворк RL для LLM.
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) — фреймворк генеративного ИИ для исследователей и разработчиков PyTorch, работающих с большими языковыми моделями (LLM), мультимодальными моделями (MM), автоматическим распознаванием речи (ASR), синтезом речи (TTS) и компьютерным зрением (CV).
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) — делает большие модели ИИ дешевле, быстрее и доступнее.
  - [BMTrain](https://github.com/OpenBMB/BMTrain) — эффективное обучение больших моделей.
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) — Mesh TensorFlow: упрощённое распараллеливание моделей.
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) — простая, производительная и масштабируемая LLM на Jax!
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) — реализация авторегрессионных трансформеров с параллелизмом моделей на GPU на основе библиотеки DeepSpeed.
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) — библиотека для ускорения обучения моделей Transformer на GPU NVIDIA.
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) — простой в использовании, масштабируемый и высокопроизводительный фреймворк RLHF (полное дообучение PPO для моделей 70B+, итеративный DPO, LoRA, RingAttention и RFT).
  - [TRL](https://huggingface.co/docs/trl/en/index) — полнофункциональная библиотека с набором инструментов для обучения языковых моделей Transformer с помощью обучения с подкреплением: от контролируемого дообучения (SFT) и моделирования вознаграждения (RM) до проксимальной оптимизации политики (PPO).
  - [unslothai](https://github.com/unslothai/unsloth) — фреймворк для эффективного дообучения. На странице GitHub доступны готовые шаблоны для дообучения различных LLM, позволяющие бесплатно обучать собственные данные в облаке Google Colab.
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) — фреймворк с открытым исходным кодом для дообучения и оценки LLM. Он упрощает эксперименты с различными конфигурациями обучения, воспроизведение и публикацию результатов и поддерживает LoRA, QLoRA, DeepSpeed, PEFT и конфигурации с несколькими GPU.

</details>


## Инференс LLM

> Источник: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) — быстрый фреймворк обслуживания больших языковых и визуально-языковых моделей.
- [vLLM](https://github.com/vllm-project/vllm) — высокопроизводительный и экономичный по памяти механизм инференса и обслуживания LLM.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) — инференс LLM на C/C++.
- [ollama](https://github.com/ollama/ollama) — быстро начните работу с Llama 3, Mistral, Gemma и другими большими языковыми моделями.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) — набор инструментов для развёртывания и обслуживания больших языковых моделей (LLM).
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) — фреймворк NVIDIA для инференса LLM.
<details>
<summary>другие инструменты развёртывания</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) — фреймворк NVIDIA для инференса LLM (перешёл на TensorRT-LLM).
- [MInference](https://github.com/microsoft/MInference) — ускоряет инференс LLM с длинным контекстом с помощью приближённого динамического разреженного вычисления внимания, снижая задержку предварительного заполнения до 10 раз на A100 без потери точности.
- [exllama](https://github.com/turboderp/exllama) — более экономичная по памяти переработанная реализация Llama из HF transformers для квантованных весов.
- [FastChat](https://github.com/lm-sys/FastChat) — распределённая система обслуживания нескольких LLM с веб-интерфейсом и RESTful API, совместимыми с OpenAI.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) — молниеносно быстрый инференс LLM.
- [SkyPilot](https://github.com/skypilot-org/skypilot) — запускайте LLM и пакетные задания в любом облаке. Экономьте на затратах, получайте максимум доступности GPU и управляемое выполнение — всё через простой интерфейс.
- [Haystack](https://haystack.deepset.ai/) — фреймворк NLP с открытым исходным кодом, позволяющий использовать LLM и модели на базе Transformer от Hugging Face, OpenAI и Cohere для работы с собственными данными.
- [OpenLLM](https://github.com/bentoml/OpenLLM) — дообучайте, обслуживайте, развёртывайте и отслеживайте любые LLM с открытым исходным кодом в промышленной среде. Используется в [BentoML](https://bentoml.com/) для приложений на основе LLM.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) — MII обеспечивает низкую задержку и высокую пропускную способность инференса, как vLLM на базе DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) — инференс текстовых эмбеддингов на Rust, лицензия HFOIL.
- [Infinity](https://github.com/michaelfeil/infinity) — инференс текстовых эмбеддингов на Python.
- [LMDeploy](https://github.com/InternLM/lmdeploy) — высокопроизводительный фреймворк с низкой задержкой для инференса и обслуживания LLM и VL.
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) — эффективные ядра Triton для обучения LLM.
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) — распределённая реализация llama.cpp, позволяющая запускать LLM уровня 70B на обычных устройствах.
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) — легко развёртывайте любую LLM на виртуальной машине с минимальной настройкой с помощью Ansible.

</details>


## Приложения на основе LLM
> Источник: [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) — DSPy: фреймворк для программирования базовых моделей, а не составления промптов.
- [LangChain](https://github.com/hwchase17/langchain) — популярная библиотека Python/JavaScript для объединения последовательностей промптов языковой модели.
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — библиотека Python для дополнения приложений на основе LLM данными.

<details>
<summary>другие приложения</summary>


- [MLflow](https://mlflow.org/) — MLflow: фреймворк с открытым исходным кодом для полного жизненного цикла машинного обучения, помогающий разработчикам отслеживать эксперименты, оценивать модели и промпты, развёртывать модели и обеспечивать наблюдаемость с помощью трассировки.
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) — полный набор инструментов для решения различных задач с локальными LLM.
- [LiteChain](https://github.com/rogeriochaves/litechain) — облегчённая альтернатива LangChain для объединения LLM.
- [magentic](https://github.com/jackmpcollins/magentic) — бесшовная интеграция LLM в виде функций Python.
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) — использование ChatGPT в WeChat через wechaty.
- [promptfoo](https://github.com/typpo/promptfoo) — тестируйте промпты, оценивайте и сравнивайте результаты LLM, обнаруживайте регрессии и улучшайте качество промптов.
- [Agenta](https://github.com/agenta-ai/agenta) — легко создавайте, версионируйте, оценивайте и развёртывайте приложения на основе LLM.
- [Serge](https://github.com/serge-chat/serge) — интерфейс чата на базе llama.cpp для запуска моделей Alpaca. Без ключей API и полностью на собственном хостинге!
- [Langroid](https://github.com/langroid/langroid) — работа с LLM посредством мультиагентного программирования.
- [Embedchain](https://github.com/embedchain/embedchain) — фреймворк для создания ботов наподобие ChatGPT на основе вашего набора данных.
- [Opik](https://github.com/comet-ml/opik) — уверенно оценивайте, тестируйте и выпускайте приложения на основе LLM с помощью набора инструментов наблюдаемости, настраивая результаты языковых моделей на протяжении всего цикла разработки и эксплуатации.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) — упрощает оценку LLM, предоставляя единый микросервис для доступа к нескольким моделям ИИ и их тестирования.
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) — ранее langchain-ChatGLM; приложение вопросов и ответов с LangChain на основе локальной базы знаний и LLM (например, ChatGLM).
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) — создайте собственную поисковую систему с диалоговым интерфейсом менее чем за 500 строк кода с помощью [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) — создавайте, развёртывайте и запускайте Actions на Python где угодно, расширяя возможности ИИ-агентов и ассистентов. В комплекте — обширные библиотеки, вспомогательные средства и журналирование.
- [Tune Studio](https://studio.tune.app/) — среда для разработчиков, позволяющая дообучать и развёртывать LLM.
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) — локальный веб-поиск с помощью цепочек LLM.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — шлюз упрощает запросы к более чем 100 открытым и закрытым моделям с помощью единого API. Готов к промышленной эксплуатации: поддерживает кэширование, резервные варианты, повторные попытки, тайм-ауты, балансировку нагрузки и развёртывание на периферии для минимальной задержки.
- [talkd.ai dialog](https://github.com/talkdai/dialog) — простой API для развёртывания любой нужной RAG-системы или LLM с добавлением плагинов.
- [Wllama](https://github.com/ngxson/wllama) — привязка WebAssembly для llama.cpp, позволяющая выполнять инференс LLM в браузере.
- [GPUStack](https://github.com/gpustack/gpustack) — менеджер кластеров GPU с открытым исходным кодом для запуска LLM.
- [MNN-LLM](https://github.com/alibaba/MNN) — фреймворк инференса на устройстве, включая инференс LLM на телефонах, ПК и устройствах IoT.
- [CAMEL](https://www.camel-ai.org/) — первый мультиагентный фреймворк для LLM.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) — интерактивный чат, использующий LLM Ollama/OpenAI/MistralAI для быстрого анализа и навигации по репозиториям кода GitHub или архивам файлов.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) — взаимодействуйте с LLM через модели Ollama (или openAI, mistralAI), используя только shell-скрипты в Linux (или MacOS), чтобы интеллектуально управлять системой без зависимостей.
- [MindSQL](https://github.com/Mindinventory/MindSQL) — пакет Python для преобразования текста в SQL с возможностью самостоятельного хостинга и RESTful API, совместимыми как с проприетарными, так и с открытыми LLM.
- [Langfuse](https://github.com/langfuse/langfuse) — платформа инженерии LLM с открытым исходным кодом 🪢: трассировка, оценки, управление промптами и интерактивная среда.
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) — библиотека для создания и автоматической оптимизации приложений на основе LLM.
- [Guidance](https://github.com/microsoft/guidance) — удобная на вид библиотека Python от Microsoft, использующая шаблоны Handlebars для объединения генерации, промптов и логического управления.
- [Evidently](https://github.com/evidentlyai/evidently) — фреймворк с открытым исходным кодом для оценки, тестирования и мониторинга систем на базе ML и LLM.
- [Chainlit](https://docs.chainlit.io/overview) — библиотека Python для создания интерфейсов чат-ботов.
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — библиотека Python для проверки результатов и повторных попыток при сбоях. Пока находится в альфа-версии, поэтому возможны шероховатости и ошибки.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — библиотека Python/C#/Java от Microsoft с поддержкой шаблонов промптов, цепочек функций, векторизованной памяти и интеллектуального планирования.
- [Prompttools](https://github.com/hegelai/prompttools) — инструменты Python с открытым исходным кодом для тестирования и оценки моделей, векторных БД и промптов.
- [Outlines](https://github.com/normal-computing/outlines) — библиотека Python с предметно-ориентированным языком для упрощения промптинга и ограничения генерации.
- [Promptify](https://github.com/promptslab/Promptify) — небольшая библиотека Python для решения задач NLP с помощью языковых моделей.
- [Scale Spellbook](https://scale.com/spellbook) — платный продукт для создания, сравнения и выпуска приложений на основе языковых моделей.
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — платный продукт для тестирования и улучшения промптов.
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — платный продукт для отслеживания экспериментов по обучению моделей и разработке промптов.
- [OpenAI Evals](https://github.com/openai/evals) — библиотека с открытым исходным кодом для оценки выполнения задач языковыми моделями и промптами.

- [Arthur Shield](https://www.arthur.ai/get-started) — платный продукт для обнаружения токсичности, галлюцинаций, инъекций промптов и других проблем.
- [LMQL](https://lmql.ai) — язык программирования для взаимодействия с LLM с поддержкой типизированных промптов, управления потоком выполнения, ограничений и инструментов.
- [ModelFusion](https://github.com/lgrammel/modelfusion) — библиотека TypeScript для создания приложений на основе LLM и других моделей ML (преобразование речи в текст и текста в речь, генерация изображений).
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — двуязычная китайско-английская модель извлечения знаний с использованием графов знаний и технологий обработки естественного языка.
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) — библиотека React для создания пользовательских интерфейсов LLM.
- [Wordware](https://www.wordware.ai) — размещённая в интернете IDE, где специалисты без технического образования совместно с инженерами ИИ создают специализированных ИИ-агентов. Промптинг рассматривается как новый язык программирования, а не как блоки no-code/low-code.
- [Wallaroo.AI](https://github.com/WallarooLabs) — развёртывайте, управляйте и оптимизируйте любые модели в любом масштабе и среде — от облака до периферии. Переход от ноутбука Python к инференсу занимает минуты.
- [Dify](https://github.com/langgenius/dify) — платформа разработки приложений на основе LLM с открытым исходным кодом и интуитивно понятным интерфейсом, упрощающая рабочие процессы ИИ, управление моделями и промышленное развёртывание.
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) — приложение на основе LLM с открытым исходным кодом для простого создания мультиагентных приложений LLM; поддерживает развёртывание и дообучение моделей.
- [MemFree](https://github.com/memfreeme/memfree) — гибридная поисковая система ИИ с открытым исходным кодом: мгновенно получайте точные ответы из интернета, закладок, заметок и документов. Поддерживается развёртывание в один клик.
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) — инструмент AutoML с открытым исходным кодом для RAG. Автоматически повышает качество ответов RAG: от создания набора данных для оценки генерации до развёртывания оптимизированного конвейера RAG.
- [Epsilla](https://github.com/epsilla-cloud) — универсальная платформа ИИ-агентов на основе ваших закрытых данных и знаний, предоставляющая готовых к эксплуатации ИИ-агентов с первого дня.
- [Arize-Phoenix](https://phoenix.arize.com/) — инструмент наблюдаемости ML с открытым исходным кодом, работающий в среде ноутбука. Позволяет отслеживать и дообучать LLM, модели CV и табличные модели.
- [LLM]([https://github.com/simonw/llm) — утилита CLI и библиотека Python для взаимодействия с большими языковыми моделями через удалённые API, а также с моделями, которые можно установить и запускать на собственном компьютере.
- [Just-Chat](https://github.com/longevity-genie/just-chat) — создавайте ИИ-агента на основе LLM и общайтесь с ним просто и быстро!
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) — сканер безопасности CLI с открытым исходным кодом для агентных рабочих процессов. Анализирует исходный код рабочего процесса, обнаруживает уязвимости и создаёт интерактивную визуализацию с подробным отчётом о безопасности. Поддерживает LangGraph, CrewAI, n8n, OpenAI Agents и другие инструменты.
- [LangWatch](https://github.com/langwatch/langwatch) — платформа с открытым исходным кодом для наблюдаемости LLM, оценки и оптимизации промптов.
- [TensorZero](https://www.tensorzero.com/) — фреймворк с открытым исходным кодом для создания готовых к эксплуатации приложений на основе LLM. Объединяет шлюз LLM, наблюдаемость, оптимизацию, оценку и экспериментирование.

</details>

## Учебные материалы и курсы по LLM
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) — мой фаворит!
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) — высококачественные обучающие видео, которые нельзя пропустить.
- [Alexander Rush Series](https://rush-nlp.com/projects/) — высококачественные учебные материалы, которые нельзя пропустить.
- [llm-course](https://github.com/mlabonne/llm-course) — курс по большим языковым моделям (LLM) с дорожными картами и блокнотами Colab.
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) — последние достижения в области базовых моделей.
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) — минималистичная и чистая реализация алгоритма кодирования пар байтов (BPE), широко используемого для токенизации LLM.
- [femtoGPT](https://github.com/keyvank/femtoGPT) — минималистичная реализация Generative Pretrained Transformer на чистом Rust.
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) — более 100 схем алгоритмов LLM / RL📚.


## Книги о LLM
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) — к книге прилагается [репозиторий GitHub](https://github.com/benman1/generative_ai_with_langchain), демонстрирующий множество её возможностей.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) — руководство по созданию собственной работающей LLM.
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) — объясняет, как с нуля написать генеративный предварительно обученный трансформер, или GPT.
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) — изучите мир больших языковых моделей с помощью более 275 оригинальных иллюстраций в этом наглядном руководстве!
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) — вводный учебник по LLM, основанный на работе [*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## Важные мысли о LLM
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

## Разное


- [Emergent Mind](https://www.emergentmind.com) — последние новости ИИ, отобранные и объяснённые GPT-4.
- [ShareGPT](https://sharegpt.com) — делитесь самыми необычными диалогами ChatGPT одним нажатием.
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) — представляем бета-версию Cohere Summarize: новую конечную точку для суммаризации текста.
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) — неофициальные API Python и CLI с открытым исходным кодом для взаимодействия с ChatGPT.
- [Cursor](https://www.cursor.so) — пишите, редактируйте код и обсуждайте его с помощью мощного ИИ.
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) — экспериментальное приложение с открытым исходным кодом, демонстрирующее возможности языковой модели GPT-4.
- [OpenAGI](https://github.com/agiresearch/OpenAGI) — когда LLM встречается с экспертами в предметной области.
- [EasyEdit](https://github.com/zjunlp/EasyEdit) — простой в использовании фреймворк для редактирования больших языковых моделей.
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) — расширение Chrome для ChatGPT от OpenAI, повышающее конфиденциальность: оно позволяет легко скрывать и показывать историю чатов. Подходит для защиты приватности при демонстрации экрана.
- [AI For Developers](https://aifordevelopers.org) — список инструментов и агентов ИИ для разработчиков.

## Участие в проекте

Работа над этим репозиторием продолжается, и мы всегда рады вашему вкладу!

Если я не уверен, подходят ли некоторые pull request для LLM, я оставлю их открытыми — вы можете проголосовать за них, поставив 👍.

---

Если у вас есть вопросы об этом субъективно составленном списке, не стесняйтесь написать мне: chengxin1998@stu.pku.edu.cn.

[^1]: Это не юридическая консультация. За дополнительной информацией обращайтесь к первоначальным авторам моделей.
