
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 Les grands modèles de langage (LLM) ont bouleversé le ~~monde du TAL~~ ~~la communauté de l’IA~~ **le monde entier**. Voici une sélection d’articles sur les grands modèles de langage, notamment ceux liés à ChatGPT. Elle comprend également des cadres d’entraînement des LLM, des outils de déploiement, des cours et tutoriels sur les LLM, ainsi que tous les points de contrôle et API de LLM accessibles au public.

## Projets LLM tendance

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - Reproduction épurée, minimale et accessible de DeepSeek R1-Zero
- [open-r1](https://github.com/huggingface/open-r1) - Reproduction entièrement ouverte de DeepSeek-R1
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - Modèles de raisonnement de première génération de DeepSeek.
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - Explorer les capacités des grands modèles MoE.
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - Repousser les limites du raisonnement à coût maîtrisé.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - Premier modèle de niveau GPT-4o publié en open source.
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - Modèle de langage MoE avec 32B de paramètres actifs et 1T au total.


## Table des matières
- [Awesome-LLM ](#awesome-llm-)
  - [Articles marquants](#milestone-papers)
  - [Autres articles](#other-papers)
  - [Classements des LLM](#llm-leaderboard)
  - [LLM ouverts](#open-llm)
  - [Données pour les LLM](#llm-data)
  - [Évaluation des LLM](#llm-evaluation)
  - [Cadres d’entraînement des LLM](#llm-training-frameworks)
  - [Inférence des LLM](#llm-inference)
  - [Applications des LLM](#llm-applications)
  - [Tutoriels et cours sur les LLM](#llm-tutorials-and-courses)
  - [Livres sur les LLM](#llm-books)
  - [Réflexions marquantes sur les LLM](#great-thoughts-about-llm)
  - [Divers](#miscellaneous)

## Articles marquants

<details>

<summary> articles marquants </summary>
  
|   Date  |       mots-clés       |      Institut     |                                                                                                        Article                                                                                                       |
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

## Autres articles
> [!NOTE]
> Si le domaine des LLM vous intéresse, la liste ci-dessus d’articles marquants peut vous aider à en explorer l’histoire et l’état de l’art. Toutefois, chaque axe des LLM apporte des perspectives et contributions uniques, essentielles à la compréhension globale du domaine. Pour consulter une liste détaillée d’articles dans différents sous-domaines, veuillez suivre le lien suivant :

<details>
  <summary> autres articles </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - Liste d’articles sur les hallucinations des LLM.
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - Liste d’articles sur la détection des hallucinations dans les LLM.
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - Une sélection de ressources pratiques pour les LLM.
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - Un recueil d’exemples de prompts à utiliser avec le modèle ChatGPT.
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - Un recueil chinois d’exemples de prompts à utiliser avec le modèle ChatGPT.
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Sélection de ressources sur ChatGPT et GPT-3 d’OpenAI.
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) - Une tendance lancée par « Chain of Thought Prompting Elicits Reasoning in Large Language Models ».
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - Comment demander aux LLM de produire un raisonnement fiable et de prendre des décisions éclairées par le raisonnement.
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - Une tendance lancée par `Natrural-Instruction` (ACL 2022), `FLAN` (ICLR 2022) et `T0` (ICLR 2022).
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - Une liste d’articles et de ressources sur les grands modèles de langage.
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - Recueil d’articles et de ressources sur le raisonnement à l’aide des modèles de langage.
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - Mesure des performances de raisonnement des LLM.
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - Une sélection de projets et de ressources remarquables liés à GPT, ChatGPT, OpenAI, aux LLM et bien plus encore.
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - Un recueil de démonstrations et d’articles sur l’API GPT-3 d’[OpenAI](https://openai.com/blog/openai-api/).
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - Un recueil de jeux de données de préférences humaines pour l’ajustement des instructions des LLM, le RLHF et l’évaluation.
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - Ressources et tutoriel potentiellement utiles pour découvrir RWKV.
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - Une liste d’articles et de ressources sur l’édition des grands modèles de langage.
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - Une sélection d’outils, de documents et de projets remarquables sur la sécurité des LLM.
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - Un recueil d’articles et de ressources sur l’alignement des grands modèles de langage (LLM) avec les humains.
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - Une sélection des meilleurs code-LLM pour la recherche.
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - Articles et outils de recherche remarquables sur la compression des LLM.
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - Articles de recherche remarquables sur les systèmes LLM.
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - Un recueil d’applications Web open source et activement maintenues pour les applications LLM.
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - Compilation des LLM japonais — présentation des LLM japonais.
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - Liste d’articles de la revue sur les LLM en médecine.
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - Une sélection d’articles remarquables sur l’inférence des LLM, accompagnés de leur code.
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - Une sélection de grands modèles de langage multimodaux dans le monde 3D, couvrant la compréhension et le raisonnement 3D, la génération et les agents incarnés.
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - Un recueil sélectionné de jeux de données conçus spécifiquement pour l’entraînement de chatbots, avec les liens, la taille, la langue, l’utilisation et une brève description de chaque jeu de données.
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - Recense des grands modèles de langage chinois open source, principalement des modèles compacts, déployables en privé et peu coûteux à entraîner, ainsi que des modèles de base, des ajustements fins et applications spécialisés, des jeux de données et des tutoriels.

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - L’application des grands modèles de langage (LLM) à diverses tâches d’optimisation (Opt) constitue un domaine de recherche émergent. Voici un recueil de références et d’articles sur LLM4Opt.

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - Cette liste d’articles porte sur l’analyse théorique ou empirique des modèles de langage : dynamique d’apprentissage, capacité d’expression, interprétabilité, généralisation et autres sujets intéressants.
  
</details>

## Classements des LLM
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - Une plateforme de benchmark pour les grands modèles de langage (LLM), proposant des duels anonymes et aléatoires organisés selon une approche participative.
- [LiveBench](https://livebench.ai/#/) - Un benchmark exigeant et exempt de contamination.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - Vise à suivre, classer et évaluer les LLM et les chatbots au fur et à mesure de leur publication.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - Un évaluateur automatique des modèles de langage suivant des instructions, utilisant la suite de benchmarks Nous.
<details>
  <summary> autres classements </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - Un benchmark d’évaluation axé sur la compréhension du chinois ancien.
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - Un benchmark novateur spécialement conçu pour évaluer de manière exhaustive l’honnêteté des LLM.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - Évalue la capacité des LLM à appeler des fonctions ou outils externes.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - Un benchmark piloté par des experts pour les LLM chinois.
- [CompassRank](https://rank.opencompass.org.cn) - CompassRank vise à explorer les modèles linguistiques et visuels les plus avancés, en proposant à l’industrie et à la recherche une référence d’évaluation complète, objective et neutre.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - Un benchmark qui évalue les méthodes de questions-réponses opérant sur un mélange de sources d’entrée hétérogènes (bases de connaissances, textes, tableaux et infoboxes).
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - Un benchmark qui évalue les performances des grands modèles de langage (LLM) sur diverses tâches liées à l’imagination textuelle et visuelle.
- [FELM](https://hkust-nlp.github.io/felm) - Un méta-benchmark qui évalue la qualité avec laquelle les évaluateurs de factualité évaluent les résultats des grands modèles de langage (LLM).
- [InfiBench](https://infi-coder.github.io/infibench) - Un benchmark conçu pour évaluer les grands modèles de langage (LLM), en particulier leur capacité à répondre à des questions de programmation liées au monde réel.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - Un benchmark conçu pour évaluer les grands modèles de langage dans le domaine juridique.
- [LLMEval](http://llmeval.com) - S’intéresse aux performances de ces modèles dans divers scénarios et à l’analyse des résultats sous l’angle de l’interprétabilité.
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - Un benchmark qui évalue les grands modèles de langage sur diverses tâches de raisonnement multimodal : langue, sciences naturelles et sociales, bon sens physique et social, raisonnement temporel, algèbre et géométrie.
- [MathEval](https://matheval.ai) - Une plateforme complète de benchmarking conçue pour évaluer les capacités mathématiques des grands modèles dans 20 domaines et près de 30 000 problèmes mathématiques.
- [MixEval](https://mixeval.github.io/#leaderboard) - Un benchmark dynamique fondé sur la vérité terrain et dérivé de mélanges de benchmarks existants. Il évalue les LLM avec un classement de modèles très performant (corrélation de 0,96 avec Chatbot Arena), tout en fonctionnant rapidement et localement (6 % du temps et du coût de MMLU).
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - Un benchmark qui évalue la capacité des grands modèles de langage à répondre à des questions médicales dans plusieurs langues.
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - Un benchmark multimodal de questions-réponses conçu pour évaluer la capacité cognitive des modèles d’IA à comprendre les croyances et les objectifs humains.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - Un benchmark qui évalue les modèles d’IA dans plusieurs disciplines universitaires, notamment les mathématiques, la physique, la chimie et la biologie.
- [PubMedQA](https://pubmedqa.github.io) - Un benchmark biomédical de questions-réponses conçu pour répondre à des questions de recherche à partir de résumés PubMed.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) - Un benchmark conçu pour évaluer les grands modèles de langage (LLM) sur la résolution de problèmes scientifiques complexes de niveau universitaire, notamment en chimie, en physique et en mathématiques.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - Une plateforme de benchmark conçue pour évaluer les grands modèles de langage (LLM) sur un éventail de tâches, en particulier la compréhension du langage naturel, le raisonnement et la généralisation.
- [SuperLim](https://lab.kb.se/leaderboard/results) - Un benchmark suédois de compréhension du langage qui évalue les modèles de traitement automatique des langues (NLP) sur différentes tâches, telles que l’analyse argumentative, la similarité sémantique et l’implication textuelle.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - Un jeu de données à grande échelle de questions-réponses visuelles sur des documents (VQA), conçu pour la compréhension de documents complexes, notamment les rapports financiers.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - Un benchmark de questions-réponses à grande échelle axé sur les données financières du monde réel, combinant des informations tabulaires et textuelles.
- [VisualWebArena](https://jykoh.com/vwa) - Un benchmark conçu pour évaluer les performances des agents Web multimodaux sur des tâches réalistes ancrées visuellement.
- [We-Math](https://we-math.github.io/#leaderboard) - Un benchmark qui évalue la capacité des grands modèles multimodaux (LMM) à effectuer un raisonnement mathématique comparable à celui des humains.
- [WHOOPS!](https://whoops-benchmark.github.io) - Un jeu de données de benchmark qui teste la capacité de l’IA à raisonner sur le bon sens visuel à partir d’images défiant les attentes habituelles.

</details>


## LLM ouverts
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


## Données pour les LLM
> Référence : [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - Boîte à outils open source pour le traitement efficace de données non structurées, dotée de modules prêts à l’emploi et d’une évolutivité du poste local au cluster.
- [Datatrove](https://github.com/huggingface/datatrove) - Libère le traitement des données de la folie des scripts en proposant des blocs de traitement en pipeline personnalisables et indépendants des plateformes.
- [Dingo](https://github.com/DataEval/dingo) - Dingo : un outil complet d’évaluation de la qualité des données.
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - Un outil puissant pour créer des jeux de données d’entraînement de haute qualité pour les grands modèles de langage.

## Évaluation des LLM :
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - Un cadre d’évaluation des modèles de langage en few-shot.
- [lighteval](https://github.com/huggingface/lighteval) - Une suite légère d’évaluation des LLM utilisée en interne par Hugging Face.
- [simple-evals](https://github.com/openai/simple-evals) - Outils d’évaluation par OpenAI.

<details>
<summary>autres cadres d’évaluation</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - Un dépôt consacré à l’évaluation des modèles de langage ouverts.
- [MixEval](https://github.com/Psycoy/MixEval) - Une suite d’évaluation fiable, utilisable immédiatement et compatible avec les modèles open source comme propriétaires, prenant en charge MixEval et d’autres benchmarks.
- [HELM](https://github.com/stanford-crfm/helm) - Holistic Evaluation of Language Models (HELM), un cadre visant à accroître la transparence des modèles de langage.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - Ce dépôt contient du code permettant d’évaluer quantitativement, sur des tâches réservées, des modèles ajustés pour suivre des instructions tels qu’Alpaca et Flan-T5.
- [Giskard](https://github.com/Giskard-AI/giskard) - Bibliothèque de tests et d’évaluation pour les applications LLM, en particulier les systèmes RAG.
- [LangSmith](https://www.langchain.com/langsmith) - Une plateforme unifiée du cadre LangChain pour l’évaluation, la collaboration HITL (Human In The Loop), la journalisation et la surveillance des applications LLM.
- [Ragas](https://github.com/explodinggradients/ragas) - Un cadre qui vous aide à évaluer vos pipelines de génération augmentée par récupération (RAG).

</details>



## Cadres d’entraînement des LLM

- [Meta Lingua](https://github.com/facebookresearch/lingua) - Une base de code légère, efficace et facile à modifier pour la recherche sur les LLM.
- [Litgpt](https://github.com/Lightning-AI/litgpt) - Plus de 20 LLM haute performance, avec des recettes pour le préentraînement, l’ajustement fin et le déploiement à grande échelle.
- [nanotron](https://github.com/huggingface/nanotron) - Entraînement minimaliste de grands modèles de langage avec parallélisme 3D.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed est une bibliothèque d’optimisation de l’apprentissage profond qui simplifie et améliore l’efficacité de l’entraînement et de l’inférence distribués.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - Recherche en cours sur l’entraînement de modèles Transformer à grande échelle.
- [torchtitan](https://github.com/pytorch/torchtitan) - Une bibliothèque PyTorch native pour l’entraînement de grands modèles.

<details>
<summary>autres cadres</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - Version DeepSpeed de Megatron-LM de NVIDIA, qui ajoute la prise en charge de fonctions telles que l’entraînement de modèles MoE, l’apprentissage par curriculum, le parallélisme 3D et d’autres.
  - [torchtune](https://github.com/pytorch/torchtune) - Une bibliothèque native PyTorch pour l’ajustement fin des LLM.
  - [ROLL](https://github.com/alibaba/ROLL) - Une bibliothèque efficace et conviviale pour faire évoluer l’apprentissage par renforcement avec les grands modèles de langage.
  - [veRL](https://github.com/volcengine/verl) - veRL est un cadre d’apprentissage par renforcement flexible et efficace pour les LLM.
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - Cadre d’IA générative destiné aux chercheurs et développeurs PyTorch qui travaillent sur les grands modèles de langage (LLM), les modèles multimodaux (MM), la reconnaissance automatique de la parole (ASR), la synthèse vocale (TTS) et la vision par ordinateur (CV).
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - Rendre les grands modèles d’IA moins coûteux et plus rapides, et les rendre plus accessibles.
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - Entraînement efficace des grands modèles.
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow : le parallélisme de modèles simplifié.
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - Un LLM JAX simple, performant et évolutif !
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - Une implémentation de Transformers autorégressifs parallélisés sur GPU, basée sur la bibliothèque DeepSpeed.
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - Une bibliothèque pour accélérer l’entraînement de modèles Transformer sur les GPU NVIDIA.
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - Un cadre RLHF évolutif, performant et facile à utiliser (réglage complet PPO 70B+, DPO itératif, LoRA, RingAttention et RFT).
  - [TRL](https://huggingface.co/docs/trl/en/index) - TRL est une bibliothèque complète qui fournit des outils pour entraîner des modèles de langage Transformer par apprentissage par renforcement, de l’ajustement fin supervisé (SFT) à la modélisation de récompense (RM), puis à l’optimisation de politique proximale (PPO).
  - [unslothai](https://github.com/unslothai/unsloth) - Un cadre spécialisé dans l’ajustement fin efficace. Sa page GitHub propose des modèles prêts à l’emploi pour ajuster divers LLM, afin d’entraîner facilement vos propres données gratuitement dans le cloud Google Colab.
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - Cadre open source pour l’ajustement fin et l’évaluation des LLM. Il simplifie l’expérimentation avec différentes configurations d’entraînement ainsi que la reproduction et le partage des résultats, avec la prise en charge de LoRA, QLoRA, DeepSpeed, PEFT et de configurations multi-GPU.

</details>


## Inférence des LLM

> Référence : [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - SGLang est un cadre de service rapide pour les grands modèles de langage et les modèles de langage visuel.
- [vLLM](https://github.com/vllm-project/vllm) - Un moteur d’inférence et de service pour les LLM, offrant un débit élevé et une utilisation efficace de la mémoire.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - Inférence de LLM en C/C++.
- [ollama](https://github.com/ollama/ollama) - Lancez-vous avec Llama 3, Mistral, Gemma et d’autres grands modèles de langage.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - Une boîte à outils pour déployer et servir des grands modèles de langage (LLM).
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Cadre NVIDIA pour l’inférence des LLM.
<details>
<summary>autres outils de déploiement</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - Cadre NVIDIA pour l’inférence des LLM (migré vers TensorRT-LLM).
- [MInference](https://github.com/microsoft/MInference) - Pour accélérer l’inférence des LLM à long contexte, calcule l’attention de façon creuse, dynamique et approchée, ce qui réduit jusqu’à 10 fois la latence de préremplissage sur un A100 tout en maintenant la précision.
- [exllama](https://github.com/turboderp/exllama) - Réécriture plus économe en mémoire de l’implémentation Llama de HF Transformers, conçue pour utiliser des poids quantifiés.
- [FastChat](https://github.com/lm-sys/FastChat) - Un système distribué de service multi-modèle pour les LLM, doté d’une interface Web et d’API REST compatibles avec OpenAI.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Inférence de LLM à une vitesse fulgurante.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Exécutez des LLM et des traitements par lots sur n’importe quel cloud. Réduisez les coûts au maximum, profitez d’une disponibilité optimale des GPU et d’une exécution gérée, le tout via une interface simple.
- [Haystack](https://haystack.deepset.ai/) - Un cadre NLP open source qui permet d’utiliser les LLM et les modèles fondés sur Transformer de Hugging Face, OpenAI et Cohere pour interagir avec vos propres données.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Ajustez, servez, déployez et surveillez en production tous les LLM open source. Utilisé en production chez [BentoML](https://bentoml.com/) pour des applications fondées sur les LLM.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) - MII permet une inférence à faible latence et à haut débit, similaire à vLLM et optimisée par DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inférence de représentations vectorielles de texte en Rust, licence HFOIL.
- [Infinity](https://github.com/michaelfeil/infinity) - Inférence de représentations vectorielles de texte en Python.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - Un cadre d’inférence et de service pour les LLM et les modèles de langage visuel (VL), à haut débit et faible latence.
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - Noyaux Triton efficaces pour l’entraînement des LLM.
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - Une implémentation distribuée de llama.cpp qui permet d’exécuter des LLM de niveau 70B sur des appareils courants.
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - Déployez facilement n’importe quel LLM sur une machine virtuelle avec une configuration minimale, à l’aide d’Ansible.

</details>


## Applications des LLM
> Référence : [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy : le cadre pour programmer les modèles de fondation, plutôt que de leur soumettre des prompts.
- [LangChain](https://github.com/hwchase17/langchain) — Une bibliothèque Python/JavaScript populaire pour chaîner des séquences de prompts de modèles de langage.
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — Une bibliothèque Python qui enrichit les applications LLM avec des données.

<details>
<summary>autres applications</summary>


- [MLflow](https://mlflow.org/) - MLflow : un cadre open source couvrant tout le cycle de vie de l’apprentissage automatique, qui aide les développeurs à suivre les expériences, évaluer les modèles et prompts, déployer des modèles et ajouter de l’observabilité avec le traçage.
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Un ensemble complet d’outils pour travailler avec des LLM locaux et réaliser diverses tâches.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Une alternative légère à LangChain pour composer des LLM.
- [magentic](https://github.com/jackmpcollins/magentic) - Intégrez facilement les LLM sous forme de fonctions Python.
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - Utilisez ChatGPT sur WeChat via wechaty.
- [promptfoo](https://github.com/typpo/promptfoo) - Testez vos prompts. Évaluez et comparez les résultats des LLM, détectez les régressions et améliorez la qualité des prompts.
- [Agenta](https://github.com/agenta-ai/agenta) - Créez, versionnez, évaluez et déployez facilement vos applications reposant sur les LLM.
- [Serge](https://github.com/serge-chat/serge) - Une interface de discussion conçue avec llama.cpp pour exécuter des modèles Alpaca. Sans clé API, entièrement auto-hébergée !
- [Langroid](https://github.com/langroid/langroid) - Pilotez les LLM grâce à la programmation multi-agents.
- [Embedchain](https://github.com/embedchain/embedchain) - Cadre permettant de créer des bots de type ChatGPT à partir de vos jeux de données.
- [Opik](https://github.com/comet-ml/opik) - Évaluez, testez et déployez vos applications LLM en toute confiance grâce à une suite d’outils d’observabilité qui calibre les résultats des modèles de langage tout au long du cycle de développement et de production.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - Simplifie l’évaluation des LLM en fournissant un microservice unifié pour accéder à plusieurs modèles d’IA et les tester.
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Anciennement langchain-ChatGLM, une application locale de questions-réponses fondée sur les connaissances et les LLM (comme ChatGLM), avec LangChain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Créez votre propre moteur de recherche conversationnel en moins de 500 lignes de code avec [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Créez, déployez et exécutez des Actions en Python où que vous soyez pour améliorer vos agents et assistants d’IA. Tout est inclus : vaste ensemble de bibliothèques, d’outils auxiliaires et de journalisation.
- [Tune Studio](https://studio.tune.app/) - Environnement de test pour les développeurs, pour ajuster et déployer des LLM.
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Recherche Web exécutée localement à l’aide de chaînes LLM.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — La passerelle simplifie les requêtes vers plus de 100 modèles open source et propriétaires avec une API unifiée. Prête pour la production, elle prend en charge la mise en cache, les solutions de repli, les nouvelles tentatives, les délais d’expiration et l’équilibrage de charge, et peut être déployée en périphérie pour réduire la latence.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - API simple pour déployer le système RAG ou le LLM de votre choix avec des plugins.
- [Wllama](https://github.com/ngxson/wllama) - Liaison WebAssembly pour llama.cpp, permettant l’inférence des LLM dans le navigateur.
- [GPUStack](https://github.com/gpustack/gpustack) - Un gestionnaire de clusters GPU open source pour exécuter des LLM.
- [MNN-LLM](https://github.com/alibaba/MNN) -- Un cadre d’inférence sur appareil, comprenant l’inférence des LLM sur appareils (téléphones mobiles, PC, objets connectés).
- [CAMEL](https://www.camel-ai.org/) - Premier cadre multi-agents pour LLM.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - Projet de conversation interactive qui utilise les LLM d’Ollama, OpenAI ou MistralAI pour explorer rapidement un dépôt de code GitHub ou des ressources de fichiers compressées.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interagissez avec des LLM via les modèles Ollama (ou OpenAI, MistralAI) au moyen de simples scripts shell sur Linux (ou macOS), pour gérer votre système intelligemment sans aucune dépendance.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - Un paquet Python pour convertir du texte en SQL, avec des fonctions d’auto-hébergement et des API REST compatibles avec les LLM propriétaires et open source.
- [Langfuse](https://github.com/langfuse/langfuse) - Plateforme open source d’ingénierie des LLM 🪢 : traçage, évaluations, gestion des prompts, évaluations et environnement de test.
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - AdalFlow : la bibliothèque pour créer et optimiser automatiquement des applications LLM.
- [Guidance](https://github.com/microsoft/guidance) — Une bibliothèque Python pratique de Microsoft qui utilise les modèles Handlebars pour entrelacer génération, prompting et contrôle logique.
- [Evidently](https://github.com/evidentlyai/evidently) — Un cadre open source pour évaluer, tester et surveiller les systèmes ML et ceux reposant sur des LLM.
- [Chainlit](https://docs.chainlit.io/overview) — Une bibliothèque Python pour créer des interfaces de chatbot.
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — Une bibliothèque Python pour valider les résultats et réessayer en cas d’échec. Encore en version alpha, elle peut donc présenter des défauts et des bugs.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — Une bibliothèque Python/C#/Java de Microsoft qui prend en charge la création de modèles de prompts, l’enchaînement de fonctions, la mémoire vectorisée et la planification intelligente.
- [Prompttools](https://github.com/hegelai/prompttools) — Outils Python open source pour tester et évaluer les modèles, les bases de données vectorielles et les prompts.
- [Outlines](https://github.com/normal-computing/outlines) — Une bibliothèque Python qui fournit un langage spécifique à un domaine pour simplifier les prompts et contraindre la génération.
- [Promptify](https://github.com/promptslab/Promptify) — Une petite bibliothèque Python pour utiliser les modèles de langage dans des tâches de NLP.
- [Scale Spellbook](https://scale.com/spellbook) — Produit payant pour créer, comparer et lancer des applications à base de modèles de langage.
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — Produit payant pour tester et améliorer les prompts.
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — Produit payant pour suivre les expériences d’entraînement de modèles et d’ingénierie des prompts.
- [OpenAI Evals](https://github.com/openai/evals) — Bibliothèque open source pour évaluer les performances des modèles de langage et des prompts sur des tâches.

- [Arthur Shield](https://www.arthur.ai/get-started) — Produit payant qui détecte la toxicité, les hallucinations, les injections de prompts, etc.
- [LMQL](https://lmql.ai) — Langage de programmation pour interagir avec les LLM, avec prise en charge des prompts typés, du flux de contrôle, des contraintes et des outils.
- [ModelFusion](https://github.com/lgrammel/modelfusion) - Bibliothèque TypeScript pour créer des applications avec des LLM et d’autres modèles d’apprentissage automatique (synthèse vocale vers texte, texte vers parole, génération d’images).
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — Modèle bilingue chinois-anglais d’extraction de connaissances, combinant graphes de connaissances et technologies de traitement du langage naturel.
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - Une bibliothèque React pour créer des interfaces utilisateur pour LLM.
- [Wordware](https://www.wordware.ai) - Un environnement de développement intégré hébergé sur le Web où des spécialistes métier non techniques collaborent avec des ingénieurs en IA pour créer des agents spécialisés. Le prompting y est abordé comme un nouveau langage de programmation plutôt que comme des blocs low-code ou no-code.
- [Wallaroo.AI](https://github.com/WallarooLabs) - Déployez, gérez et optimisez n’importe quel modèle à grande échelle, dans tout environnement du cloud à la périphérie. Permet de passer d’un notebook Python à l’inférence en quelques minutes.
- [Dify](https://github.com/langgenius/dify) - Une plateforme open source de développement d’applications LLM dotée d’une interface intuitive qui simplifie les flux de travail d’IA, la gestion des modèles et le déploiement en production.
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - Application LLM open source permettant de créer facilement des applications LLM multi-agents ; prend en charge le déploiement et l’ajustement fin des modèles.
- [MemFree](https://github.com/memfreeme/memfree) - Moteur de recherche hybride d’IA open source qui fournit instantanément des réponses précises depuis Internet, les favoris, les notes et les documents. Déploiement en un clic.
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - Outil AutoML open source pour RAG. Optimise automatiquement la qualité des réponses RAG, de l’évaluation du jeu de données de génération au déploiement du pipeline RAG optimisé.
- [Epsilla](https://github.com/epsilla-cloud) - Plateforme tout-en-un d’agents LLM utilisant vos données et connaissances privées, qui fournit des agents d’IA prêts pour la production dès le premier jour.
- [Arize-Phoenix](https://phoenix.arize.com/) - Outil open source d’observabilité du ML qui s’exécute dans votre environnement de notebook. Surveille et ajuste finement les LLM, les modèles de vision par ordinateur et les modèles tabulaires.
- [LLM]([https://github.com/simonw/llm) - Utilitaire CLI et bibliothèque Python pour interagir avec les grands modèles de langage, via des API distantes ou des modèles installables et exécutables sur votre propre machine.
- [Just-Chat](https://github.com/longevity-genie/just-chat) - Créez votre agent LLM et discutez avec lui simplement et rapidement !
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - Analyseur de sécurité CLI open source pour les flux de travail agentiques. Analyse le code source du workflow, détecte les vulnérabilités et génère une visualisation interactive ainsi qu’un rapport détaillé. Prend en charge LangGraph, CrewAI, n8n, OpenAI Agents et bien d’autres.
- [LangWatch](https://github.com/langwatch/langwatch) - Plateforme open source d’observabilité des LLM, d’évaluation des prompts et d’optimisation des prompts.
- [TensorZero](https://www.tensorzero.com/) - TensorZero est un cadre open source pour créer des applications LLM de qualité production. Il unifie une passerelle LLM, l’observabilité, l’optimisation, les évaluations et l’expérimentation.

</details>

## Tutoriels et cours sur les LLM
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - Ma série préférée !
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - Des vidéos de grande qualité et pédagogiques à ne pas manquer.
- [Alexander Rush Series](https://rush-nlp.com/projects/) - Des ressources pédagogiques de grande qualité à ne pas manquer.
- [llm-course](https://github.com/mlabonne/llm-course) - Cours pour découvrir les grands modèles de langage (LLM), avec feuilles de route et notebooks Colab.
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - Progrès récents sur les modèles de fondation.
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - Code minimal et épuré pour l’algorithme Byte Pair Encoding (BPE), couramment utilisé pour la tokenisation des LLM.
- [femtoGPT](https://github.com/keyvank/femtoGPT) - Implémentation entièrement en Rust d’un Transformer génératif pré-entraîné minimal.
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - Plus de 100 schémas d’algorithmes LLM et RL 📚.


## Livres sur les LLM
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - accompagné d’un [dépôt GitHub](https://github.com/benman1/generative_ai_with_langchain) qui présente une grande partie des fonctionnalités
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Un guide pour créer votre propre LLM fonctionnel.
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - explique comment coder de zéro un Transformer génératif pré-entraîné (GPT).
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - Découvrez l’univers des grands modèles de langage grâce à plus de 275 illustrations originales dans ce guide illustré !
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - Un manuel d’introduction aux LLM fondé sur [*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## Réflexions marquantes sur les LLM
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

## Divers


- [Emergent Mind](https://www.emergentmind.com) - Les dernières nouvelles de l’IA, sélectionnées et expliquées par GPT-4.
- [ShareGPT](https://sharegpt.com) - Partagez en un clic vos conversations ChatGPT les plus folles.
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - Présentation de Cohere Summarize Beta : un nouveau point de terminaison pour le résumé de texte.
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPT Wrapper est une API Python et un outil CLI open source non officiel qui permet d’interagir avec ChatGPT.
- [Cursor](https://www.cursor.so) - Écrivez, modifiez et discutez de votre code avec une IA puissante.
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - Application expérimentale open source qui met en évidence les capacités du modèle de langage GPT-4.
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - Quand les LLM rencontrent les experts du domaine.
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - Un cadre facile à utiliser pour modifier les grands modèles de langage.
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - Extension Chrome pour ChatGPT d’OpenAI qui améliore la confidentialité en permettant de masquer et d’afficher facilement l’historique des conversations. Idéale pour préserver la confidentialité lors du partage d’écran.
- [AI For Developers](https://aifordevelopers.org) - Liste d’outils et d’agents d’IA pour les développeurs.

## Contributions

Ce dépôt est actif et vos contributions sont toujours les bienvenues !

Je laisserai ouvertes certaines pull requests si je ne suis pas sûr qu’elles soient remarquables pour les LLM ; vous pouvez voter pour elles en ajoutant 👍.

---

Pour toute question sur cette liste sélective, n’hésitez pas à me contacter à l’adresse chengxin1998@stu.pku.edu.cn.

[^1]: Ceci ne constitue pas un avis juridique. Veuillez contacter les auteurs originaux des modèles pour plus d’informations.
