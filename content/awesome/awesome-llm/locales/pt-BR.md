
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 Os modelos de linguagem de grande porte (LLMs) conquistaram ~~a comunidade de PLN~~ ~~a comunidade de IA~~ **o mundo inteiro**. Aqui está uma lista selecionada de artigos sobre modelos de linguagem de grande porte, especialmente os relacionados ao ChatGPT. Ela também inclui estruturas para treinamento de LLMs, ferramentas para implantá-los, cursos e tutoriais sobre LLMs, além de todos os checkpoints e APIs de LLMs disponíveis publicamente.

## Projetos de LLMs em alta

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - Reprodução limpa, minimalista e acessível do DeepSeek R1-Zero
- [open-r1](https://github.com/huggingface/open-r1) - Reprodução totalmente aberta do DeepSeek-R1
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - Modelos de raciocínio de primeira geração da DeepSeek.
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - Explorando a inteligência de um modelo MoE de grande escala.
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - Ampliando os limites do raciocínio com boa relação custo-benefício.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - Primeiro modelo de nível GPT-4o disponibilizado como código aberto.
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - Modelo de linguagem MoE com 32B de parâmetros ativos e 1T de parâmetros no total.


## Sumário
- [Awesome-LLM ](#awesome-llm-)
  - [Artigos marcantes](#milestone-papers)
  - [Outros artigos](#other-papers)
  - [Classificações de LLMs](#llm-leaderboard)
  - [LLMs de código aberto](#open-llm)
  - [Dados para LLMs](#llm-data)
  - [Avaliação de LLMs](#llm-evaluation)
  - [Estruturas de treinamento de LLMs](#llm-training-frameworks)
  - [Inferência de LLMs](#llm-inference)
  - [Aplicações de LLMs](#llm-applications)
  - [Tutoriais e cursos sobre LLMs](#llm-tutorials-and-courses)
  - [Livros sobre LLMs](#llm-books)
  - [Grandes reflexões sobre LLMs](#great-thoughts-about-llm)
  - [Diversos](#miscellaneous)

## Artigos marcantes

<details>

<summary> artigos marcantes </summary>
  
|   Data  |    palavras-chave    |      Instituição     |                                                                                                        Artigo                                                                                                       |
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

## Outros artigos
> [!NOTE]
> Se você tem interesse na área de LLMs, a lista acima de artigos marcantes pode ajudar a explorar sua história e o estado da arte. No entanto, cada linha de pesquisa em LLMs oferece perspectivas e contribuições únicas, essenciais para compreender a área como um todo. Para uma lista detalhada de artigos de vários subcampos, consulte o link a seguir:

<details>
  <summary> outros artigos </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - Lista de artigos sobre alucinações em LLMs.
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - Lista de artigos sobre detecção de alucinações em LLMs.
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - Uma seleção de recursos práticos sobre LLMs.
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - Uma coleção de exemplos de prompts para usar com o modelo ChatGPT.
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - Uma coleção chinesa de exemplos de prompts para usar com o modelo ChatGPT.
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Seleção de recursos sobre ChatGPT e GPT-3 da OpenAI.
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) - Uma tendência que começou com “Chain of Thought Prompting Elicits Reasoning in Large Language Models”.
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - Como solicitar que LLMs produzam raciocínios confiáveis e tomem decisões responsivas ao raciocínio.
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - Uma tendência que começou com `Natrural-Instruction` (ACL 2022), `FLAN` (ICLR 2022) e `T0` (ICLR 2022).
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - Lista de artigos e recursos sobre modelos de linguagem de grande porte.
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - Coleção de artigos e recursos sobre raciocínio com modelos de linguagem.
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - Medição do desempenho de raciocínio de LLMs.
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - Uma seleção de projetos e recursos incríveis relacionados a GPT, ChatGPT, OpenAI, LLMs e muito mais.
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - Uma coleção de demonstrações e artigos sobre a [API GPT-3 da OpenAI](https://openai.com/blog/openai-api/).
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - Uma coleção de conjuntos de dados de preferências humanas para ajuste de instruções de LLMs, RLHF e avaliação.
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - Materiais e tutoriais possivelmente úteis para aprender RWKV.
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - Lista de artigos e recursos sobre edição de modelos para modelos de linguagem de grande porte.
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - Seleção de ferramentas, documentos e projetos incríveis sobre segurança de LLMs.
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - Coleção de artigos e recursos sobre o alinhamento de modelos de linguagem de grande porte (LLMs) com pessoas.
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - Uma lista selecionada dos melhores LLMs de código para pesquisa.
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - Artigos de pesquisa e ferramentas incríveis sobre compressão de LLMs.
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - Artigos de pesquisa incríveis sobre sistemas de LLMs.
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - Coleção de aplicações Web de código aberto e ativamente mantidas para LLMs.
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - Compilação de LLMs em japonês — visão geral dos LLMs japoneses.
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - Lista de artigos da revisão sobre LLMs na medicina.
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - Uma seleção de artigos incríveis sobre inferência de LLMs, com código.
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - Uma seleção de modelos de linguagem multimodais de grande porte no mundo 3D, incluindo compreensão, raciocínio e geração 3D, além de agentes incorporados.
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - Uma coleção selecionada de conjuntos de dados desenvolvidos especificamente para treinamento de chatbots, incluindo links, tamanho, idioma, uso e uma breve descrição de cada conjunto de dados.
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - Organiza modelos de linguagem chineses de código aberto, com foco principalmente em modelos menores, que podem ser implantados de forma privada e têm custos de treinamento mais baixos. Inclui modelos-base, ajustes finos e aplicações de domínios verticais, conjuntos de dados, tutoriais e outros recursos.

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - Aplicar modelos de linguagem de grande porte (LLMs) a diversas tarefas de otimização (Opt) é uma área de pesquisa emergente. Esta é uma coleção de referências e artigos sobre LLM4Opt.

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - Esta lista de artigos se concentra em análises teóricas ou empíricas de modelos de linguagem, por exemplo, dinâmica de aprendizado, capacidade expressiva, interpretabilidade, generalização e outros tópicos interessantes.
  
</details>

## Classificações de LLMs
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - uma plataforma de avaliação comparativa para modelos de linguagem de grande porte (LLMs), com disputas anônimas e aleatórias organizadas de forma colaborativa.
- [LiveBench](https://livebench.ai/#/) - Uma avaliação comparativa desafiadora e livre de contaminação.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - tem como objetivo acompanhar, classificar e avaliar LLMs e chatbots à medida que são lançados.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - Um avaliador automático de modelos de linguagem que seguem instruções, usando o conjunto de avaliações Nous.
<details>
  <summary> outras classificações </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - uma avaliação comparativa voltada à compreensão da língua chinesa antiga.
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - Uma avaliação comparativa pioneira, criada especificamente para avaliar de forma abrangente a honestidade de LLMs.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - avalia a capacidade dos LLMs de chamar funções/ferramentas externas.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - uma avaliação comparativa de LLMs chineses conduzida por especialistas.
- [CompassRank](https://rank.opencompass.org.cn) - A CompassRank se dedica a explorar os modelos de linguagem e de visão mais avançados, oferecendo à indústria e à pesquisa uma referência de avaliação abrangente, objetiva e neutra.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - uma avaliação comparativa de métodos de perguntas e respostas que operam com uma combinação de fontes de entrada heterogêneas (bases de conhecimento, texto, tabelas e infocaixas).
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - uma avaliação comparativa do desempenho de modelos de linguagem de grande porte (LLMs) em várias tarefas relacionadas à imaginação textual e visual.
- [FELM](https://hkust-nlp.github.io/felm) - uma meta-avaliação comparativa que mede a qualidade com que avaliadores de factualidade avaliam as respostas de modelos de linguagem de grande porte (LLMs).
- [InfiBench](https://infi-coder.github.io/infibench) - uma avaliação comparativa criada para avaliar especificamente a capacidade de modelos de linguagem de grande porte (LLMs) de responder a perguntas de programação do mundo real.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - uma avaliação comparativa criada para avaliar modelos de linguagem de grande porte no domínio jurídico.
- [LLMEval](http://llmeval.com) - tem como foco entender o desempenho desses modelos em vários cenários e analisar os resultados sob a perspectiva da interpretabilidade.
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - uma avaliação comparativa que testa modelos de linguagem de grande porte em diversas tarefas de raciocínio multimodal, incluindo linguagem, ciências naturais e sociais, senso comum físico e social, raciocínio temporal, álgebra e geometria.
- [MathEval](https://matheval.ai) - uma plataforma abrangente de avaliação comparativa criada para avaliar as habilidades matemáticas de modelos de grande porte em 20 áreas e quase 30 mil problemas de matemática.
- [MixEval](https://mixeval.github.io/#leaderboard) - uma avaliação comparativa dinâmica baseada em resultados de referência reais e derivada de combinações prontas de avaliações comparativas. Ela avalia LLMs com uma classificação de modelos altamente competente (correlação de 0,96 com o Chatbot Arena), com execução local e rápida (apenas 6% do tempo e do custo de execução do MMLU).
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - uma avaliação comparativa que mede a capacidade de modelos de linguagem de grande porte de responder a perguntas médicas em vários idiomas.
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - uma avaliação comparativa multimodal de perguntas e respostas criada para avaliar a capacidade cognitiva de modelos de IA de compreender crenças e objetivos humanos.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - uma avaliação comparativa para avaliar modelos de IA em várias disciplinas acadêmicas, como matemática, física, química, biologia e outras.
- [PubMedQA](https://pubmedqa.github.io) - uma avaliação biomédica comparativa de perguntas e respostas, criada para responder a perguntas de pesquisa usando resumos do PubMed.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) - uma avaliação comparativa criada para avaliar modelos de linguagem de grande porte (LLMs) na resolução de problemas científicos complexos, de nível universitário, em áreas como química, física e matemática.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - uma plataforma de avaliação comparativa criada para avaliar modelos de linguagem de grande porte (LLMs) em uma série de tarefas, com foco especial em aspectos como compreensão de linguagem natural, raciocínio e generalização.
- [SuperLim](https://lab.kb.se/leaderboard/results) - uma avaliação comparativa de compreensão da língua sueca que avalia modelos de processamento de linguagem natural (PLN) em várias tarefas, como análise de argumentação, similaridade semântica e inferência textual.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - um conjunto de dados de perguntas e respostas visuais sobre documentos em grande escala, criado para a compreensão de documentos complexos, especialmente relatórios financeiros.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - uma avaliação comparativa de perguntas e respostas em grande escala, voltada a dados financeiros do mundo real e que combina informações tabulares e textuais.
- [VisualWebArena](https://jykoh.com/vwa) - uma avaliação comparativa criada para medir o desempenho de agentes Web multimodais em tarefas realistas fundamentadas visualmente.
- [We-Math](https://we-math.github.io/#leaderboard) - uma avaliação comparativa que mede a capacidade de grandes modelos multimodais (LMMs) de realizar raciocínio matemático semelhante ao humano.
- [WHOOPS!](https://whoops-benchmark.github.io) - um conjunto de dados de avaliação comparativa que testa a capacidade da IA de raciocinar sobre senso comum visual por meio de imagens que desafiam as expectativas normais.

</details>


## LLMs de código aberto
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


## Dados para LLMs
> Referência: [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - Kit de ferramentas de código aberto para processamento eficiente de dados não estruturados, com módulos pré-configurados e escalabilidade do ambiente local ao cluster.
- [Datatrove](https://github.com/huggingface/datatrove) - Elimina o caos de scripts no processamento de dados, oferecendo blocos personalizáveis e independentes de plataforma para criar pipelines.
- [Dingo](https://github.com/DataEval/dingo) - Uma ferramenta abrangente de avaliação da qualidade de dados.
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - Uma ferramenta poderosa para criar conjuntos de dados de treinamento de alta qualidade para modelos de linguagem de grande porte.

## Avaliação de LLMs:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - Uma estrutura para avaliação de modelos de linguagem com poucos exemplos.
- [lighteval](https://github.com/huggingface/lighteval) - um conjunto leve de ferramentas de avaliação de LLMs usado internamente pela Hugging Face.
- [simple-evals](https://github.com/openai/simple-evals) - Ferramentas de avaliação da OpenAI.

<details>
<summary>outras estruturas de avaliação</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - um repositório para avaliar modelos de linguagem abertos.
- [MixEval](https://github.com/Psycoy/MixEval) - Um conjunto de avaliação confiável, pronto para uso e compatível com modelos de código aberto e proprietários, com suporte a MixEval e outras avaliações comparativas.
- [HELM](https://github.com/stanford-crfm/helm) - Holistic Evaluation of Language Models (HELM), uma estrutura para aumentar a transparência dos modelos de linguagem.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - Este repositório contém código para avaliar quantitativamente modelos ajustados para seguir instruções, como Alpaca e Flan-T5, em tarefas reservadas para teste.
- [Giskard](https://github.com/Giskard-AI/giskard) - Biblioteca de testes e avaliação para aplicações de LLMs, especialmente RAGs.
- [LangSmith](https://www.langchain.com/langsmith) - uma plataforma unificada do framework LangChain para avaliação, colaboração HITL (Human In The Loop), registro e monitoramento de aplicações de LLM.
- [Ragas](https://github.com/explodinggradients/ragas) - uma estrutura que ajuda a avaliar seus pipelines de geração aumentada por recuperação (RAG).

</details>



## Estruturas de treinamento de LLMs

- [Meta Lingua](https://github.com/facebookresearch/lingua) - uma base de código enxuta, eficiente e fácil de modificar para pesquisar LLMs.
- [Litgpt](https://github.com/Lightning-AI/litgpt) - Mais de 20 LLMs de alto desempenho, com receitas para pré-treinamento, ajuste fino e implantação em escala.
- [nanotron](https://github.com/huggingface/nanotron) - Treinamento minimalista de modelos de linguagem de grande porte com paralelismo 3D.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - Uma biblioteca de otimização de deep learning que torna o treinamento e a inferência distribuídos simples, eficientes e eficazes.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - Pesquisa contínua sobre o treinamento de modelos Transformer em escala.
- [torchtitan](https://github.com/pytorch/torchtitan) - Uma biblioteca nativa do PyTorch para treinamento de modelos de grande porte.

<details>
<summary>outras estruturas</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - Versão do DeepSpeed do Megatron-LM da NVIDIA, que acrescenta suporte a vários recursos, como treinamento de modelos MoE, aprendizado curricular, paralelismo 3D e outros.
  - [torchtune](https://github.com/pytorch/torchtune) - Uma biblioteca nativa do PyTorch para ajuste fino de LLMs.
  - [ROLL](https://github.com/alibaba/ROLL) - Uma biblioteca eficiente e fácil de usar para escalar o aprendizado por reforço com modelos de linguagem de grande porte.
  - [veRL](https://github.com/volcengine/verl) - O veRL é uma estrutura de aprendizado por reforço flexível e eficiente para LLMs.
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - Estrutura de IA generativa para pesquisadores e desenvolvedores PyTorch que trabalham com modelos de linguagem de grande porte (LLMs), modelos multimodais (MMs), reconhecimento automático de fala (ASR), conversão de texto em fala (TTS) e visão computacional (CV).
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - Tornando modelos de IA de grande porte mais baratos, rápidos e acessíveis.
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - Treinamento eficiente de modelos de grande porte.
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow: paralelismo de modelos simplificado.
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - Um LLM simples, eficiente e escalável em JAX!
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - Uma implementação de Transformers autorregressivos com paralelismo de modelos em GPUs, baseada na biblioteca DeepSpeed.
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - Uma biblioteca para acelerar o treinamento de modelos Transformer em GPUs NVIDIA.
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - Uma estrutura de RLHF fácil de usar, escalável e de alto desempenho (ajuste completo de PPO para 70B+, DPO iterativo, LoRA, RingAttention e RFT).
  - [TRL](https://huggingface.co/docs/trl/en/index) - TRL é uma biblioteca completa que oferece um conjunto de ferramentas para treinar modelos de linguagem Transformer com aprendizado por reforço, desde o ajuste fino supervisionado (SFT) e a modelagem de recompensas (RM) até a otimização de política proximal (PPO).
  - [unslothai](https://github.com/unslothai/unsloth) - Uma estrutura especializada em ajuste fino eficiente. Na página do GitHub, você encontra modelos de ajuste fino prontos para vários LLMs, que facilitam o treinamento gratuito com seus próprios dados na nuvem do Google Colab.
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - Estrutura de código aberto para ajuste fino e avaliação de LLMs. Simplifica experimentos com diferentes configurações de treinamento e facilita reproduzir e compartilhar resultados. Oferece suporte a recursos como LoRA, QLoRA, DeepSpeed, PEFT e configurações com várias GPUs.

</details>


## Inferência de LLMs

> Referência: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - O SGLang é uma estrutura rápida para disponibilizar modelos de linguagem de grande porte e modelos de linguagem visual.
- [vLLM](https://github.com/vllm-project/vllm) - Um mecanismo de inferência e disponibilização de LLMs com alto throughput e uso eficiente de memória.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - Inferência de LLMs em C/C++.
- [ollama](https://github.com/ollama/ollama) - Comece a usar Llama 3, Mistral, Gemma e outros modelos de linguagem de grande porte.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - um conjunto de ferramentas para implantar e disponibilizar modelos de linguagem de grande porte (LLMs).
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Framework da Nvidia para inferência de LLMs.
<details>
<summary>outras ferramentas de implantação</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - Estrutura da NVIDIA para inferência de LLMs (migrada para TensorRT-LLM).
- [MInference](https://github.com/microsoft/MInference) - Para acelerar a inferência de LLMs com contexto longo, calcula a atenção esparsa de forma aproximada e dinâmica, reduzindo em até 10 vezes a latência de inferência durante o pré-preenchimento em uma A100, sem perder precisão.
- [exllama](https://github.com/turboderp/exllama) - Uma reimplementação dos Transformers da HF para Llama, com uso mais eficiente da memória e compatível com pesos quantizados.
- [FastChat](https://github.com/lm-sys/FastChat) - Um sistema distribuído para disponibilizar vários modelos de LLM, com interface Web e APIs RESTful compatíveis com OpenAI.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Inferência de LLM extremamente rápida.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Execute LLMs e tarefas em lote em qualquer nuvem. Tenha a máxima economia de custos, maior disponibilidade de GPUs e execução gerenciada — tudo em uma interface simples.
- [Haystack](https://haystack.deepset.ai/) - uma estrutura de PLN de código aberto que permite usar LLMs e modelos baseados em Transformer da Hugging Face, OpenAI e Cohere para interagir com seus próprios dados.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Ajuste fino, disponibilize, implante e monitore qualquer LLM de código aberto em produção. Usado em produção na [BentoML](https://bentoml.com/) para aplicações baseadas em LLMs.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) - O MII possibilita inferência com baixa latência e alto throughput, semelhante ao vLLM, com tecnologia DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inferência de embeddings de texto em Rust, licença HFOIL.
- [Infinity](https://github.com/michaelfeil/infinity) - Inferência de embeddings de texto em Python.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - Uma estrutura de inferência e disponibilização de LLMs e VLs com alto throughput e baixa latência.
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - Kernels Triton eficientes para treinamento de LLMs.
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - Uma implementação distribuída do llama.cpp que permite executar LLMs de nível 70B em dispositivos do dia a dia.
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - Implante facilmente qualquer LLM em uma máquina virtual com configuração mínima, usando Ansible.

</details>


## Aplicações de LLMs
> Reference: [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy: a estrutura para programar — não criar prompts para — modelos fundamentais.
- [LangChain](https://github.com/hwchase17/langchain) — Uma biblioteca popular de Python/JavaScript para encadear sequências de prompts de modelos de linguagem.
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — Uma biblioteca Python para ampliar aplicações de LLMs com dados.

<details>
<summary>mais aplicações</summary>


- [MLflow](https://mlflow.org/) - MLflow: uma estrutura de código aberto para todo o ciclo de vida do aprendizado de máquina, que ajuda desenvolvedores a acompanhar experimentos, avaliar modelos/prompts, implantar modelos e adicionar observabilidade com rastreamento.
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Um conjunto abrangente de ferramentas para trabalhar com LLMs locais em várias tarefas.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Alternativa leve ao LangChain para compor LLMs.
- [magentic](https://github.com/jackmpcollins/magentic) - Integre LLMs a funções Python sem complicações.
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - Use ChatGPT no WeChat por meio do wechaty.
- [promptfoo](https://github.com/typpo/promptfoo) - Teste seus prompts. Avalie e compare as respostas de LLMs, detecte regressões e melhore a qualidade dos prompts.
- [Agenta](https://github.com/agenta-ai/agenta) - Crie, versione, avalie e implante facilmente suas aplicações com tecnologia de LLMs.
- [Serge](https://github.com/serge-chat/serge) - uma interface de chat criada com llama.cpp para executar modelos Alpaca. Sem chaves de API e totalmente auto-hospedada!
- [Langroid](https://github.com/langroid/langroid) - Use LLMs com programação multiagente.
- [Embedchain](https://github.com/embedchain/embedchain) - Estrutura para criar bots semelhantes ao ChatGPT com base em seu conjunto de dados.
- [Opik](https://github.com/comet-ml/opik) - Avalie, teste e lance aplicações de LLM com confiança usando um conjunto de ferramentas de observabilidade que calibra as respostas de modelos de linguagem ao longo de todo o ciclo de desenvolvimento e produção.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - simplifica a avaliação de LLMs ao oferecer um microsserviço unificado para acessar e testar vários modelos de IA.
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Anteriormente langchain-ChatGLM; aplicação local de perguntas e respostas com base em conhecimento usando LLMs como ChatGLM e LangChain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Crie seu próprio mecanismo de busca conversacional com menos de 500 linhas de código usando a [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Crie, implante e opere Actions usando Python em qualquer lugar para aprimorar seus agentes e assistentes de IA. Inclui um amplo conjunto de bibliotecas, auxiliares e recursos de registro.
- [Tune Studio](https://studio.tune.app/) - Ambiente de experimentação para desenvolvedores ajustarem e implantarem LLMs.
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Pesquisa na Web executada localmente usando cadeias de LLMs.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — O Gateway simplifica as solicitações a mais de 100 modelos de código aberto e fechado por meio de uma API unificada. Também está pronto para produção, com suporte a cache, alternativas, novas tentativas, timeouts, balanceamento de carga e implantação na borda para latência mínima.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - API simples para implantar qualquer RAG ou LLM desejado, com adição de plugins.
- [Wllama](https://github.com/ngxson/wllama) - Vínculo WebAssembly para llama.cpp, que permite executar inferência de LLMs no navegador.
- [GPUStack](https://github.com/gpustack/gpustack) - Um gerenciador de clusters de GPU de código aberto para executar LLMs.
- [MNN-LLM](https://github.com/alibaba/MNN) -- Uma estrutura de inferência em dispositivos, incluindo inferência de LLMs em dispositivos (celulares/PCs/IoT).
- [CAMEL](https://www.camel-ai.org/) - A primeira estrutura multiagente de LLMs.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - Um projeto de chat interativo que usa LLMs do Ollama/OpenAI/MistralAI para compreender e navegar rapidamente por repositórios de código do GitHub ou recursos em arquivos compactados.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interaja com LLMs usando modelos do Ollama (ou OpenAI, MistralAI) por meio de scripts shell puros no Linux (ou MacOS), aprimorando o gerenciamento inteligente do sistema sem dependências.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - Um pacote Python para conversão de texto em SQL com recursos de hospedagem própria e APIs RESTful compatíveis tanto com LLMs proprietários quanto de código aberto.
- [Langfuse](https://github.com/langfuse/langfuse) - Plataforma de engenharia de LLMs de código aberto 🪢 com rastreamento, avaliações, gerenciamento de prompts, avaliação e ambiente de experimentação.
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - AdalFlow: a biblioteca para criar e otimizar automaticamente aplicações de LLMs.
- [Guidance](https://github.com/microsoft/guidance) — Uma biblioteca Python útil, desenvolvida pela Microsoft, que usa templates Handlebars para intercalar geração, criação de prompts e controle lógico.
- [Evidently](https://github.com/evidentlyai/evidently) — Uma estrutura de código aberto para avaliar, testar e monitorar sistemas com tecnologia de ML e LLMs.
- [Chainlit](https://docs.chainlit.io/overview) — Uma biblioteca Python para criar interfaces de chatbot.
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — Uma biblioteca Python para validar respostas e repetir tentativas em caso de falhas. Ainda está em alfa, então espere algumas arestas e erros.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — Uma biblioteca Python/C#/Java da Microsoft que oferece templates de prompts, encadeamento de funções, memória vetorizada e planejamento inteligente.
- [Prompttools](https://github.com/hegelai/prompttools) — Ferramentas Python de código aberto para testar e avaliar modelos, bancos de dados vetoriais e prompts.
- [Outlines](https://github.com/normal-computing/outlines) — Uma biblioteca Python que oferece uma linguagem específica de domínio para simplificar a criação de prompts e restringir a geração.
- [Promptify](https://github.com/promptslab/Promptify) — Uma pequena biblioteca Python para usar modelos de linguagem em tarefas de PLN.
- [Scale Spellbook](https://scale.com/spellbook) — Produto pago para criar, comparar e lançar aplicações com modelos de linguagem.
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — Produto pago para testar e aprimorar prompts.
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — Produto pago para acompanhar experimentos de treinamento de modelos e engenharia de prompts.
- [OpenAI Evals](https://github.com/openai/evals) — Biblioteca de código aberto para avaliar o desempenho de tarefas de modelos de linguagem e prompts.

- [Arthur Shield](https://www.arthur.ai/get-started) — Produto pago para detectar toxicidade, alucinações, injeção de prompt etc.
- [LMQL](https://lmql.ai) — Uma linguagem de programação para interagir com LLMs, com suporte a prompts tipados, fluxo de controle, restrições e ferramentas.
- [ModelFusion](https://github.com/lgrammel/modelfusion) - Uma biblioteca TypeScript para criar aplicações com LLMs e outros modelos de ML (conversão de fala em texto, conversão de texto em fala e geração de imagens).
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — Um modelo bilíngue chinês-inglês de extração de conhecimento que usa grafos de conhecimento e tecnologias de processamento de linguagem natural.
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - Uma biblioteca React para criar interfaces de usuário para LLMs.
- [Wordware](https://www.wordware.ai) - Um ambiente de desenvolvimento integrado hospedado na Web, onde especialistas de domínio sem conhecimentos técnicos trabalham com engenheiros de IA para criar agentes de IA específicos para tarefas. Abordamos a criação de prompts como uma nova linguagem de programação, em vez de blocos low-code/no-code.
- [Wallaroo.AI](https://github.com/WallarooLabs) - Implante, gerencie e otimize qualquer modelo em escala, em qualquer ambiente, da nuvem à borda. Passe de um notebook Python à inferência em minutos.
- [Dify](https://github.com/langgenius/dify) - Uma plataforma de desenvolvimento de aplicações de LLMs de código aberto, com uma interface intuitiva que simplifica fluxos de trabalho de IA, gerenciamento de modelos e implantação em produção.
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - Uma aplicação de LLM de código aberto para criar aplicações multiagente de LLMs de forma simples e descomplicada, com suporte à implantação e ao ajuste fino de modelos.
- [MemFree](https://github.com/memfreeme/memfree) - Mecanismo de busca híbrido com IA e de código aberto. Obtenha instantaneamente respostas precisas da Internet, dos favoritos, das anotações e dos documentos. Oferece implantação com um clique.
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - Ferramenta AutoML de código aberto para RAG. Otimiza automaticamente a qualidade das respostas de RAG, da avaliação do conjunto de dados à implantação do pipeline otimizado.
- [Epsilla](https://github.com/epsilla-cloud) - Uma plataforma completa de agentes de LLM com seus dados e conhecimentos privados, que entrega agentes de IA prontos para produção desde o primeiro dia.
- [Arize-Phoenix](https://phoenix.arize.com/) - Ferramenta de código aberto para observabilidade de ML, executada no ambiente do seu notebook. Monitore e ajuste modelos de LLM, visão computacional e tabulares.
- [LLM]([https://github.com/simonw/llm) - Um utilitário de linha de comando e uma biblioteca Python para interagir com modelos de linguagem de grande porte, tanto por APIs remotas quanto com modelos instalados e executados na sua máquina.
- [Just-Chat](https://github.com/longevity-genie/just-chat) - Crie seu agente de LLM e converse com ele de forma simples e rápida!
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - Scanner de segurança de código aberto para fluxos de trabalho agênticos. Analisa o código-fonte do fluxo, detecta vulnerabilidades e gera uma visualização interativa com um relatório de segurança detalhado. Oferece suporte a LangGraph, CrewAI, n8n, OpenAI Agents e outros.
- [LangWatch](https://github.com/langwatch/langwatch) - Plataforma de código aberto para observabilidade de LLMs, avaliação de prompts e otimização de prompts.
- [TensorZero](https://www.tensorzero.com/) - O TensorZero é uma estrutura de código aberto para criar aplicações de LLM prontas para produção. Unifica gateway de LLMs, observabilidade, otimização, avaliações e experimentação.

</details>

## Tutoriais e cursos sobre LLMs
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - Meu favorito!
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - vídeos educativos e de alta qualidade que você não pode perder.
- [Alexander Rush Series](https://rush-nlp.com/projects/) - materiais educativos e de alta qualidade que você não pode perder.
- [llm-course](https://github.com/mlabonne/llm-course) - Curso introdutório sobre modelos de linguagem de grande porte (LLMs), com roteiros de aprendizagem e notebooks do Colab.
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - Avanços recentes em modelos fundamentais.
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - Código minimalista e limpo para o algoritmo Byte Pair Encoding (BPE), comumente usado na tokenização de LLMs.
- [femtoGPT](https://github.com/keyvank/femtoGPT) - Implementação pura em Rust de um Transformer generativo pré-treinado minimalista.
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - Mais de 100 mapas de algoritmos de LLM/RL 📚.


## Livros sobre LLMs
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - Inclui um [repositório no GitHub](https://github.com/benman1/generative_ai_with_langchain) que demonstra muitas das funcionalidades.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Um guia para criar seu próprio LLM funcional.
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - Explica como programar do zero um Transformer generativo pré-treinado, ou GPT.
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - Explore o universo dos modelos de linguagem de grande porte com mais de 275 ilustrações originais neste guia ilustrado!
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - Um livro introdutório sobre LLMs baseado em [*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## Grandes reflexões sobre LLMs
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

## Diversos


- [Emergent Mind](https://www.emergentmind.com) - As últimas notícias sobre IA, selecionadas e explicadas pelo GPT-4.
- [ShareGPT](https://sharegpt.com) - Compartilhe suas conversas mais incríveis do ChatGPT com um clique.
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - Apresentando o Cohere Summarize Beta: um novo endpoint para sumarização de texto.
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - Um wrapper de código aberto e não oficial do ChatGPT, com API Python e CLI para interagir com o ChatGPT.
- [Cursor](https://www.cursor.so) - Escreva, edite e converse sobre seu código com uma IA poderosa.
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - uma aplicação experimental de código aberto que demonstra os recursos do modelo de linguagem GPT-4.
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - Quando LLMs encontram especialistas de domínio.
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - Uma estrutura fácil de usar para editar modelos de linguagem de grande porte.
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - Uma extensão do Chrome para o ChatGPT da OpenAI que aprimora a privacidade, permitindo ocultar e reexibir facilmente o histórico de conversas. Ideal para proteger a privacidade durante o compartilhamento de tela.
- [AI For Developers](https://aifordevelopers.org) - Lista de ferramentas e agentes de IA para desenvolvedores.

## Como contribuir

Este repositório está ativo e suas contribuições são sempre bem-vindas!

Vou manter algumas pull requests abertas quando não tiver certeza se são incríveis para LLMs; você pode votar nelas adicionando 👍.

---

Se tiver alguma dúvida sobre esta lista selecionada, entre em contato comigo pelo e-mail chengxin1998@stu.pku.edu.cn.

[^1]: Isto não é aconselhamento jurídico. Entre em contato com os autores originais dos modelos para obter mais informações.
