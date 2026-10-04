
# Awesome-LLM [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![](resources/image8.gif)

🔥 Los modelos de lenguaje grandes (LLM) han revolucionado primero a la ~~comunidad de NLP~~, luego a la ~~comunidad de IA~~ y ahora a **todo el mundo**. Aquí encontrarás una selección de artículos sobre modelos de lenguaje grandes, especialmente los relacionados con ChatGPT. También incluye marcos de trabajo para entrenar LLM, herramientas para desplegarlos, cursos y tutoriales sobre LLM, así como todos los puntos de control y API de LLM disponibles públicamente.

## Proyectos de LLM de tendencia

- [TinyZero](https://github.com/Jiayi-Pan/TinyZero) - Reproducción limpia, minimalista y accesible de DeepSeek R1-Zero
- [open-r1](https://github.com/huggingface/open-r1) - Reproducción completamente abierta de DeepSeek-R1
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) - Modelos de razonamiento de primera generación de DeepSeek.
- [Qwen2.5-Max](https://qwenlm.github.io/blog/qwen2.5-max/) - Exploración de la inteligencia de los modelos MoE a gran escala.
- [OpenAI o3-mini](https://openai.com/index/openai-o3-mini/) - Ampliando las posibilidades del razonamiento rentable.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - El primer modelo de nivel GPT-4o con código fuente abierto.
- [Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) - Modelo de lenguaje MoE con 32B de parámetros activos y 1T de parámetros totales.


## Índice
 - [Awesome-LLM ](#awesome-llm-)
   - [Artículos fundamentales](#milestone-papers)
   - [Otros artículos](#other-papers)
   - [Clasificaciones de LLM](#llm-leaderboard)
   - [LLM de código abierto](#open-llm)
   - [Datos de LLM](#llm-data)
   - [Evaluación de LLM](#llm-evaluation)
   - [Marcos de entrenamiento de LLM](#llm-training-frameworks)
   - [Inferencia de LLM](#llm-inference)
   - [Aplicaciones de LLM](#llm-applications)
   - [Tutoriales y cursos sobre LLM](#llm-tutorials-and-courses)
   - [Libros sobre LLM](#llm-books)
   - [Grandes ideas sobre los LLM](#great-thoughts-about-llm)
   - [Miscelánea](#miscellaneous)

## Artículos fundamentales

<details>

<summary> artículos fundamentales </summary>
  
|   Fecha  |       palabras clave       |      Institución     |                                                                                                        Artículo                                                                                                       |
|:-------:|:--------------------:|:------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-06 |     Transformers     |       Google       | [Attention Is All You Need](https://arxiv.org/pdf/1706.03762.pdf)                                                                                                                                                  |
| 2018-06 |        GPT 1.0       |       OpenAI       | [Improving Language Understanding by Generative Pre-Training](https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf)                                                                             |
| 2018-10 |         BERT         |       Google       | [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423.pdf)                                                                                          |
| 2019-02 |        GPT 2.0       |       OpenAI       | [Language Models are Unsupervised Multitask Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)                                          |
| 2019-09 |      Megatron-LM     |       NVIDIA       | [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism](https://arxiv.org/pdf/1909.08053.pdf)                                                                                      |
| 2019-10 |          T5          |       Google       | [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://jmlr.org/papers/v21/20-074.html)                                                                                       |
| 2019-10 |         ZeRO         |      Microsoft     | [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/pdf/1910.02054.pdf)                                                                                                       |
| 2020-01 |      Ley de escalado    |       OpenAI       | [Scaling Laws for Neural Language Models](https://arxiv.org/pdf/2001.08361.pdf)                                                                                                                                    |
| 2020-05 |        GPT 3.0       |       OpenAI       | [Language models are few-shot learners](https://papers.nips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf)                                                                                         |
| 2021-01 |  Switch Transformers |       Google       | [Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity](https://arxiv.org/pdf/2101.03961.pdf)                                                                               |
| 2021-08 |         Codex        |       OpenAI       | [Evaluating Large Language Models Trained on Code](https://arxiv.org/pdf/2107.03374.pdf)                                                                                                                           |
| 2021-08 | Modelos fundacionales |      Stanford      | [On the Opportunities and Risks of Foundation Models](https://arxiv.org/pdf/2108.07258.pdf)                                                                                                                        |
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
| 2022-06 | Capacidades emergentes |       Google       | [Emergent Abilities of Large Language Models](https://openreview.net/pdf?id=yzkSU5zdwD)                                                                                                                            |
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

## Otros artículos
> [!NOTE]
> Si te interesa el campo de los LLM, la lista anterior de artículos fundamentales puede ayudarte a explorar su historia y el estado del arte. Sin embargo, cada área de los LLM ofrece perspectivas y aportaciones únicas, esenciales para comprender el campo en su conjunto. Para consultar una lista detallada de artículos sobre distintas subáreas, visita el siguiente enlace:

<details>
  <summary> otros artículos </summary>

- [Awesome-LLM-hallucination](https://github.com/LuckyyySTA/Awesome-LLM-hallucination) - Lista de artículos sobre alucinaciones en LLM.
- [awesome-hallucination-detection](https://github.com/EdinburghNLP/awesome-hallucination-detection) - Lista de artículos sobre la detección de alucinaciones en LLM.
- [LLMsPracticalGuide](https://github.com/Mooler0410/LLMsPracticalGuide) - Selección de recursos de guías prácticas sobre LLM.
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) - Colección de ejemplos de prompts para usar con el modelo ChatGPT.
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) - Colección china de ejemplos de prompts para usar con el modelo ChatGPT.
- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Selección de recursos para ChatGPT y GPT-3 de OpenAI.
- [Chain-of-Thoughts Papers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers) - Una tendencia que comenzó con «Chain of Thought Prompting Elicits Reasoning in Large Language Models.
- [Awesome Deliberative Prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - Cómo pedir a los LLM que produzcan razonamientos fiables y tomen decisiones sensibles a las razones.
- [Instruction-Tuning-Papers](https://github.com/SinclairCoder/Instruction-Tuning-Papers) - Una tendencia que comenzó con `Natrural-Instruction` (ACL 2022), `FLAN` (ICLR 2022) y `T0` (ICLR 2022).
- [LLM Reading List](https://github.com/crazyofapple/Reading_groups/) - Lista de artículos y recursos sobre modelos de lenguaje grandes.
- [Reasoning using Language Models](https://github.com/atfortes/LM-Reasoning-Papers) - Colección de artículos y recursos sobre el razonamiento mediante modelos de lenguaje.
- [Chain-of-Thought Hub](https://github.com/FranxYao/chain-of-thought-hub) - Medición del rendimiento de razonamiento de los LLM.
- [Awesome GPT](https://github.com/formulahendry/awesome-gpt) - Selección de proyectos y recursos destacados relacionados con GPT, ChatGPT, OpenAI, LLM y más.
- [Awesome GPT-3](https://github.com/elyase/awesome-gpt3) - Colección de demostraciones y artículos sobre la API GPT-3 de [OpenAI](https://openai.com/blog/openai-api/).
- [Awesome LLM Human Preference Datasets](https://github.com/PolisAI/awesome-llm-human-preference-datasets) - Colección de conjuntos de datos de preferencias humanas para el ajuste por instrucciones de LLM, RLHF y evaluación.
- [RWKV-howto](https://github.com/Hannibal046/RWKV-howto) - Materiales y tutoriales que pueden resultar útiles para aprender RWKV.
- [ModelEditingPapers](https://github.com/zjunlp/ModelEditingPapers) - Lista de artículos y recursos sobre edición de modelos para modelos de lenguaje grandes.
- [Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security) - Selección de herramientas, documentos y proyectos destacados sobre la seguridad de los LLM.
- [Awesome-Align-LLM-Human](https://github.com/GaryYufei/AlignLLMHumanSurvey) - Colección de artículos y recursos sobre la alineación de los modelos de lenguaje grandes (LLM) con las personas.
- [Awesome-Code-LLM](https://github.com/huybery/Awesome-Code-LLM) - Selección de los mejores LLM de código para investigación.
- [Awesome-LLM-Compression](https://github.com/HuangOwen/Awesome-LLM-Compression) - Artículos de investigación y herramientas sobre compresión de LLM.
- [Awesome-LLM-Systems](https://github.com/AmberLJC/LLMSys-PaperList) - Artículos de investigación sobre sistemas de LLM.
- [awesome-llm-webapps](https://github.com/snowfort-ai/awesome-llm-webapps) - Colección de aplicaciones web de código abierto y mantenimiento activo para aplicaciones de LLM.
- [awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) - Resumen de los LLM japoneses.
- [Awesome-LLM-Healthcare](https://github.com/mingze-yuan/Awesome-LLM-Healthcare) - Lista de artículos de la revisión sobre LLM en medicina.
- [Awesome-LLM-Inference](https://github.com/DefTruth/Awesome-LLM-Inference) - Selección de artículos destacados sobre inferencia de LLM, con código.
- [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) - Selección de modelos de lenguaje grandes multimodales en entornos 3D, que incluye comprensión y razonamiento 3D, generación y agentes incorporados.
- [LLMDatahub](https://github.com/Zjh-819/LLMDataHub) - Colección seleccionada de conjuntos de datos diseñados específicamente para entrenar chatbots, con enlaces, tamaño, idioma, uso y una breve descripción de cada conjunto.
- [Awesome-Chinese-LLM](https://github.com/HqWu-HITCS/Awesome-Chinese-LLM) - Recopilación de modelos de lenguaje grandes (LLM) de código abierto en chino, principalmente modelos más pequeños, desplegables de forma privada y con menores costes de entrenamiento; incluye modelos base, ajustes y aplicaciones de dominios verticales, conjuntos de datos y tutoriales, entre otros.

- [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) - La aplicación de modelos de lenguaje grandes (LLM) a diversas tareas de optimización (Opt) es un área de investigación emergente. Esta colección reúne referencias y artículos sobre LLM4Opt.

- [awesome-language-model-analysis](https://github.com/Furyton/awesome-language-model-analysis) - Esta lista de artículos se centra en el análisis teórico o empírico de los modelos de lenguaje, por ejemplo, la dinámica del aprendizaje, la capacidad expresiva, la interpretabilidad, la generalización y otros temas de interés.
  
</details>

## Clasificaciones de LLM
- [Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - plataforma de evaluación comparativa para modelos de lenguaje grandes (LLM) con enfrentamientos anónimos y aleatorizados mediante crowdsourcing.
- [LiveBench](https://livebench.ai/#/) - Una evaluación comparativa exigente y libre de contaminación.
- [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) - Tiene como objetivo seguir, clasificar y evaluar los LLM y los chatbots a medida que se publican.
- [AlpacaEval](https://tatsu-lab.github.io/alpaca_eval/) - Evaluador automático de modelos de lenguaje que siguen instrucciones, basado en el conjunto de pruebas de Nous.
<details>
  <summary> otras clasificaciones </summary>

- [ACLUE](https://github.com/isen-zhang/ACLUE) - referencia de evaluación centrada en la comprensión del chino antiguo.
- [BeHonest](https://gair-nlp.github.io/BeHonest/#leaderboard) - Referencia pionera diseñada específicamente para evaluar exhaustivamente la honestidad de los LLM.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html) - evalúa la capacidad de los LLM para llamar a funciones y herramientas externas.
- [Chinese Large Model Leaderboard](https://github.com/jeinlee1991/chinese-llm-benchmark) - referencia de evaluación dirigida por expertos para LLM en chino.
- [CompassRank](https://rank.opencompass.org.cn) - CompassRank se dedica a explorar los modelos de lenguaje y visuales más avanzados y ofrece una referencia de evaluación integral, objetiva y neutral para la industria y la investigación.
- [CompMix](https://qa.mpi-inf.mpg.de/compmix) - referencia que evalúa métodos de preguntas y respuestas que operan con una mezcla de fuentes de entrada heterogéneas (KB, texto, tablas e infoboxes).
- [DreamBench++](https://dreambenchplus.github.io/#leaderboard) - referencia para evaluar el rendimiento de los modelos de lenguaje grandes (LLM) en diversas tareas relacionadas con la imaginación textual y visual.
- [FELM](https://hkust-nlp.github.io/felm) - metaevaluación que mide hasta qué punto los evaluadores de factualidad valoran las respuestas de los modelos de lenguaje grandes (LLM).
- [InfiBench](https://infi-coder.github.io/infibench) - referencia diseñada específicamente para evaluar la capacidad de los modelos de lenguaje grandes (LLM) de responder preguntas de programación del mundo real.
- [LawBench](https://lawbench.opencompass.org.cn/leaderboard) - referencia diseñada para evaluar los modelos de lenguaje grandes en el ámbito jurídico.
- [LLMEval](http://llmeval.com) - se centra en comprender el rendimiento de estos modelos en diversos escenarios y analizar los resultados desde una perspectiva de interpretabilidad.
- [M3CoT](https://lightchen233.github.io/m3cot.github.io/leaderboard.html) - referencia que evalúa los modelos de lenguaje grandes en una variedad de tareas de razonamiento multimodal, como lenguaje, ciencias naturales y sociales, sentido común físico y social, razonamiento temporal, álgebra y geometría.
- [MathEval](https://matheval.ai) - plataforma integral de evaluación comparativa diseñada para evaluar las capacidades matemáticas de modelos grandes en 20 áreas y casi 30 000 problemas matemáticos.
- [MixEval](https://mixeval.github.io/#leaderboard) - referencia dinámica basada en valores de referencia reales y derivada de mezclas de referencias disponibles; evalúa los LLM con una clasificación de modelos muy capaz (correlación de 0,96 con Chatbot Arena) y se ejecuta localmente con rapidez (en el 6 % del tiempo y coste de MMLU).
- [MMedBench](https://henrychur.github.io/MultilingualMedQA) - referencia que evalúa la capacidad de los modelos de lenguaje grandes para responder preguntas médicas en varios idiomas.
- [MMToM-QA](https://chuanyangjin.com/mmtom-qa-leaderboard) - referencia multimodal de preguntas y respuestas diseñada para evaluar la capacidad cognitiva de los modelos de IA para comprender las creencias y los objetivos humanos.
- [OlympicArena](https://gair-nlp.github.io/OlympicArena/#leaderboard) - referencia para evaluar modelos de IA en varias disciplinas académicas, como matemáticas, física, química, biología y otras.
- [PubMedQA](https://pubmedqa.github.io) - referencia biomédica de preguntas y respuestas diseñada para responder preguntas de investigación mediante resúmenes de PubMed.
- [SciBench](https://scibench-ucla.github.io/#leaderboard) - referencia diseñada para evaluar modelos de lenguaje grandes (LLM) resolviendo problemas científicos complejos, de nivel universitario, en áreas como química, física y matemáticas.
- [SuperBench](https://fm.ai.tsinghua.edu.cn/superbench/#/leaderboard) - plataforma de evaluación comparativa diseñada para evaluar modelos de lenguaje grandes (LLM) en diversas tareas, con especial atención a aspectos como la comprensión del lenguaje natural, el razonamiento y la generalización.
- [SuperLim](https://lab.kb.se/leaderboard/results) - referencia sueca de comprensión del lenguaje que evalúa modelos de procesamiento del lenguaje natural (NLP) en tareas como análisis argumentativo, similitud semántica e implicación textual.
- [TAT-DQA](https://nextplusplus.github.io/TAT-DQA) - conjunto de datos de preguntas y respuestas visuales sobre documentos a gran escala, diseñado para comprender documentos complejos, en especial informes financieros.
- [TAT-QA](https://nextplusplus.github.io/TAT-QA) - referencia de preguntas y respuestas a gran escala centrada en datos financieros del mundo real, que integra información tabular y textual.
- [VisualWebArena](https://jykoh.com/vwa) - referencia diseñada para evaluar el rendimiento de agentes web multimodales en tareas realistas fundamentadas visualmente.
- [We-Math](https://we-math.github.io/#leaderboard) - referencia que evalúa la capacidad de los modelos multimodales grandes (LMM) para realizar razonamientos matemáticos similares a los humanos.
- [WHOOPS!](https://whoops-benchmark.github.io) - conjunto de datos de evaluación comparativa que pone a prueba la capacidad de la IA para razonar sobre el sentido común visual mediante imágenes que desafían las expectativas habituales.

</details>


## LLM de código abierto
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


## Datos de LLM
> Referencia: [LLMDataHub](https://github.com/Zjh-819/LLMDataHub)
- [IBM data-prep-kit](https://github.com/IBM/data-prep-kit) - Kit de herramientas de código abierto para procesar datos no estructurados de forma eficiente, con módulos preconstruidos y escalabilidad desde el entorno local hasta clústeres.
- [Datatrove](https://github.com/huggingface/datatrove) - Libera el procesamiento de datos de la locura de los scripts mediante un conjunto de bloques de procesamiento personalizables e independientes de la plataforma.
- [Dingo](https://github.com/DataEval/dingo) - Herramienta integral para evaluar la calidad de los datos.
- [FastDatasets](https://github.com/ZhuLinsen/FastDatasets) - Herramienta potente para crear conjuntos de datos de entrenamiento de alta calidad para modelos de lenguaje grandes.

## Evaluación de LLM:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - Marco para la evaluación con pocos ejemplos de modelos de lenguaje.
- [lighteval](https://github.com/huggingface/lighteval) - Conjunto ligero de herramientas de evaluación de LLM que Hugging Face utiliza internamente.
- [simple-evals](https://github.com/openai/simple-evals) - Herramientas de evaluación de OpenAI.

<details>
<summary>otros marcos de evaluación</summary>

- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - repositorio para evaluar modelos de lenguaje abiertos.
- [MixEval](https://github.com/Psycoy/MixEval) - Conjunto de evaluación fiable, listo para usar y compatible con modelos de código abierto y propietarios; admite MixEval y otras referencias.
- [HELM](https://github.com/stanford-crfm/helm) - Holistic Evaluation of Language Models (HELM), un marco para aumentar la transparencia de los modelos de lenguaje.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - Este repositorio contiene código para evaluar cuantitativamente modelos ajustados por instrucciones, como Alpaca y Flan-T5, en tareas reservadas para evaluación.
- [Giskard](https://github.com/Giskard-AI/giskard) - Biblioteca de pruebas y evaluación para aplicaciones de LLM, en particular RAG.
- [LangSmith](https://www.langchain.com/langsmith) - plataforma unificada del marco LangChain para evaluación, colaboración HITL (Human In The Loop), registro y supervisión de aplicaciones de LLM.
- [Ragas](https://github.com/explodinggradients/ragas) - marco que ayuda a evaluar las canalizaciones de generación aumentada por recuperación (RAG).

</details>



## Marcos de entrenamiento de LLM

- [Meta Lingua](https://github.com/facebookresearch/lingua) - base de código ligera, eficiente y fácil de modificar para investigar los LLM.
- [Litgpt](https://github.com/Lightning-AI/litgpt) - Más de 20 LLM de alto rendimiento con recetas para preentrenar, ajustar y desplegar a escala.
- [nanotron](https://github.com/huggingface/nanotron) - Entrenamiento minimalista de modelos de lenguaje grandes con paralelismo 3D.
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed es una biblioteca de optimización de aprendizaje profundo que facilita el entrenamiento y la inferencia distribuidos, de forma eficiente y eficaz.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - Investigación en curso sobre el entrenamiento de modelos Transformer a gran escala.
- [torchtitan](https://github.com/pytorch/torchtitan) - Biblioteca nativa de PyTorch para entrenar modelos grandes.

<details>
<summary>otros marcos</summary>

  - [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - Versión de NVIDIA Megatron-LM basada en DeepSpeed que añade compatibilidad con varias funciones, como el entrenamiento de modelos MoE, el aprendizaje curricular, el paralelismo 3D y otras.
  - [torchtune](https://github.com/pytorch/torchtune) - Biblioteca nativa de PyTorch para ajustar LLM.
  - [ROLL](https://github.com/alibaba/ROLL) - Biblioteca eficiente y fácil de usar para escalar el aprendizaje por refuerzo con modelos de lenguaje grandes.
  - [veRL](https://github.com/volcengine/verl) - veRL es un marco de aprendizaje por refuerzo flexible y eficiente para LLM.
  - [NeMo Framework](https://github.com/NVIDIA/NeMo) - Marco de IA generativa creado para investigadores y desarrolladores de PyTorch que trabajan con modelos de lenguaje grandes (LLM), modelos multimodales (MM), reconocimiento automático del habla (ASR), conversión de texto a voz (TTS) y visión artificial (CV).
  - [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - Hace que los grandes modelos de IA sean más baratos, rápidos y accesibles.
  - [BMTrain](https://github.com/OpenBMB/BMTrain) - Entrenamiento eficiente de modelos grandes.
  - [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow: paralelismo de modelos más sencillo.
  - [maxtext](https://github.com/AI-Hypercomputer/maxtext) - ¡Un LLM de JAX sencillo, de alto rendimiento y escalable!
  - [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - Implementación de Transformers autorregresivos con paralelismo de modelos en GPU, basada en la biblioteca DeepSpeed.
  - [Transformer Engine](https://github.com/NVIDIA/TransformerEngine) - Biblioteca para acelerar el entrenamiento de modelos Transformer en GPU NVIDIA.
  - [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) - Marco de RLHF fácil de usar, escalable y de alto rendimiento (ajuste PPO completo para más de 70B, DPO iterativo, LoRA, RingAttention y RFT).
  - [TRL](https://huggingface.co/docs/trl/en/index) - TRL es una biblioteca integral que proporciona un conjunto de herramientas para entrenar modelos de lenguaje Transformer mediante aprendizaje por refuerzo, desde el ajuste fino supervisado (SFT) y el modelado de recompensas (RM) hasta la optimización de políticas proximales (PPO).
  - [unslothai](https://github.com/unslothai/unsloth) - Marco especializado en el ajuste fino eficiente. En su página de GitHub hay plantillas listas para usar para ajustar diversos LLM, con las que puedes entrenar fácilmente tus propios datos gratis en la nube de Google Colab.
  - [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - Marco de código abierto para ajustar y evaluar LLM. Simplifica la experimentación con distintas configuraciones de entrenamiento y facilita reproducir y compartir resultados; admite funciones como LoRA, QLoRA, DeepSpeed, PEFT y configuraciones con varias GPU.

</details>


## Inferencia de LLM

> Referencia: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [SGLang](https://github.com/sgl-project/sglang) - Marco rápido de servicio para modelos de lenguaje grandes y modelos de lenguaje visual.
- [vLLM](https://github.com/vllm-project/vllm) - Motor de inferencia y servicio para LLM de alto rendimiento y uso eficiente de memoria.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - Inferencia de LLM en C/C++.
- [ollama](https://github.com/ollama/ollama) - Empieza a usar Llama 3, Mistral, Gemma y otros modelos de lenguaje grandes.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - conjunto de herramientas para desplegar y ofrecer modelos de lenguaje grandes (LLM).
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Marco de Nvidia para la inferencia de LLM.
<details>
<summary>otras herramientas de despliegue</summary>

- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - Marco de NVIDIA para la inferencia de LLM (migrado a TensorRT-LLM).
- [MInference](https://github.com/microsoft/MInference) - Para acelerar la inferencia de LLM con contextos largos, calcula la atención dispersa de forma aproximada y dinámica; reduce hasta 10 veces la latencia de inferencia del prellenado en una A100 sin perder precisión.
- [exllama](https://github.com/turboderp/exllama) - Reescritura de la implementación de Llama de HF transformers con mayor eficiencia de memoria para usar pesos cuantizados.
- [FastChat](https://github.com/lm-sys/FastChat) - Sistema distribuido de servicio de múltiples modelos LLM con interfaz web y API REST compatibles con OpenAI.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Inferencia de LLM extremadamente rápida.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Ejecuta LLM y trabajos por lotes en cualquier nube. Consigue el máximo ahorro de costes, la mayor disponibilidad de GPU y una ejecución gestionada, todo con una interfaz sencilla.
- [Haystack](https://haystack.deepset.ai/) - marco de NLP de código abierto que permite utilizar LLM y modelos basados en Transformer de Hugging Face, OpenAI y Cohere para interactuar con tus propios datos.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Ajusta, ofrece, despliega y supervisa cualquier LLM de código abierto en producción. [BentoML](https://bentoml.com/) lo utiliza en producción para aplicaciones basadas en LLM.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) - MII ofrece inferencia de baja latencia y alto rendimiento, similar a vLLM y con la potencia de DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inferencia de embeddings de texto en Rust, licencia HFOIL.
- [Infinity](https://github.com/michaelfeil/infinity) - Inferencia de embeddings de texto en Python.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - Marco de inferencia y servicio para LLM y VL de alto rendimiento y baja latencia.
- [Liger-Kernel](https://github.com/linkedin/Liger-Kernel) - Kernels de Triton eficientes para el entrenamiento de LLM.
- [prima.cpp](https://github.com/Lizonghang/prima.cpp) - Implementación distribuida de llama.cpp que permite ejecutar LLM de nivel 70B en dispositivos de uso cotidiano.
- [deploy-llms-with-ansible](https://github.com/xamey/deploy-llms-with-ansible) - Despliega fácilmente cualquier LLM en una máquina virtual con una configuración mínima mediante Ansible.

</details>


## Aplicaciones de LLM
> Referencia: [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [dspy](https://github.com/stanfordnlp/dspy) - DSPy: el marco para programar —no para crear prompts para— modelos fundacionales.
- [LangChain](https://github.com/hwchase17/langchain) — Biblioteca popular de Python/JavaScript para encadenar secuencias de prompts de modelos de lenguaje.
- [LlamaIndex](https://github.com/jerryjliu/llama_index) — Biblioteca de Python para ampliar aplicaciones de LLM con datos.

<details>
<summary>más aplicaciones</summary>


- [MLflow](https://mlflow.org/) - MLflow: marco de código abierto para todo el ciclo de vida del aprendizaje automático; ayuda a los desarrolladores a hacer seguimiento de experimentos, evaluar modelos y prompts, desplegar modelos y añadir observabilidad mediante trazas.
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Conjunto integral de herramientas para trabajar con LLM locales en diversas tareas.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Alternativa ligera a LangChain para componer LLM.
- [magentic](https://github.com/jackmpcollins/magentic) - Integra sin problemas los LLM como funciones de Python.
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - Usa ChatGPT en WeChat mediante wechaty.
- [promptfoo](https://github.com/typpo/promptfoo) - Prueba tus prompts. Evalúa y compara resultados de LLM, detecta regresiones y mejora la calidad de los prompts.
- [Agenta](https://github.com/agenta-ai/agenta) - Crea, versiona, evalúa y despliega fácilmente aplicaciones basadas en LLM.
- [Serge](https://github.com/serge-chat/serge) - Interfaz de chat creada con llama.cpp para ejecutar modelos Alpaca. ¡Sin claves de API y completamente autoalojada!
- [Langroid](https://github.com/langroid/langroid) - Aprovecha los LLM mediante programación multiagente.
- [Embedchain](https://github.com/embedchain/embedchain) - Marco para crear bots similares a ChatGPT sobre tus conjuntos de datos.
- [Opik](https://github.com/comet-ml/opik) - Evalúa, prueba y publica aplicaciones de LLM con confianza mediante un conjunto de herramientas de observabilidad para calibrar sus resultados durante todo el ciclo de desarrollo y producción.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - Simplifica la evaluación de LLM al proporcionar un microservicio unificado para acceder a varios modelos de IA y probarlos.
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Antes llamado langchain-ChatGLM; aplicación local de preguntas y respuestas basada en conocimientos con LLM (como ChatGLM) y LangChain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Crea tu propio motor de búsqueda conversacional con menos de 500 líneas de código mediante [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Crea, despliega y opera Actions con Python desde cualquier lugar para mejorar tus agentes y asistentes de IA. Incluye un amplio conjunto de bibliotecas, utilidades y registros.
- [Tune Studio](https://studio.tune.app/) - Entorno de pruebas para que los desarrolladores ajusten y desplieguen LLM.
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Búsqueda web local mediante cadenas de LLM.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — AI Gateway agiliza las solicitudes a más de 100 modelos de código abierto y cerrado mediante una API unificada. Está listo para producción y admite almacenamiento en caché, alternativas, reintentos, tiempos de espera y balanceo de carga; también puede desplegarse en el borde para minimizar la latencia.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - API sencilla para desplegar cualquier RAG o LLM que quieras y añadir complementos.
- [Wllama](https://github.com/ngxson/wllama) - Vinculación de WebAssembly para llama.cpp que permite la inferencia de LLM en el navegador.
- [GPUStack](https://github.com/gpustack/gpustack) - Administrador de clústeres de GPU de código abierto para ejecutar LLM.
- [MNN-LLM](https://github.com/alibaba/MNN) -- Marco de inferencia en dispositivos que incluye inferencia de LLM en dispositivos (teléfonos móviles/PC/IoT).
- [CAMEL](https://www.camel-ai.org/) - Primer marco multiagente de LLM.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - Proyecto de chat interactivo que aprovecha LLM de Ollama/OpenAI/MistralAI para comprender y explorar rápidamente repositorios de código de GitHub o recursos de archivos comprimidos.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interactúa con LLM mediante modelos de Ollama (o OpenAI, MistralAI) usando solo scripts de shell en Linux (o macOS), para mejorar la gestión inteligente del sistema sin dependencias.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - Paquete de Python para convertir texto a SQL, con funciones de autoalojamiento y API REST compatibles con LLM propietarios y de código abierto.
- [Langfuse](https://github.com/langfuse/langfuse) - Plataforma de ingeniería de LLM de código abierto 🪢: trazas, evaluaciones, gestión de prompts y entorno de pruebas.
- [AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) - AdalFlow: biblioteca para crear y optimizar automáticamente aplicaciones de LLM.
- [Guidance](https://github.com/microsoft/guidance) — Práctica biblioteca de Python de Microsoft que usa plantillas Handlebars para intercalar generación, prompts y control lógico.
- [Evidently](https://github.com/evidentlyai/evidently) — Marco de código abierto para evaluar, probar y supervisar sistemas basados en ML y LLM.
- [Chainlit](https://docs.chainlit.io/overview) — Biblioteca de Python para crear interfaces de chatbot.
- [Guardrails.ai](https://www.guardrailsai.com/docs/) — Biblioteca de Python para validar resultados y reintentar operaciones fallidas. Sigue en fase alfa, así que pueden aparecer limitaciones y errores.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) — Biblioteca de Python/C#/Java de Microsoft que admite plantillas de prompts, encadenamiento de funciones, memoria vectorizada y planificación inteligente.
- [Prompttools](https://github.com/hegelai/prompttools) — Herramientas de Python de código abierto para probar y evaluar modelos, bases de datos vectoriales y prompts.
- [Outlines](https://github.com/normal-computing/outlines) — Biblioteca de Python que ofrece un lenguaje específico de dominio para simplificar la creación de prompts y restringir la generación.
- [Promptify](https://github.com/promptslab/Promptify) — Pequeña biblioteca de Python para usar modelos de lenguaje en tareas de NLP.
- [Scale Spellbook](https://scale.com/spellbook) — Producto de pago para crear, comparar y publicar aplicaciones de modelos de lenguaje.
- [PromptPerfect](https://promptperfect.jina.ai/prompts) — Producto de pago para probar y mejorar prompts.
- [Weights & Biases](https://wandb.ai/site/solutions/llmops) — Producto de pago para hacer seguimiento de experimentos de entrenamiento de modelos e ingeniería de prompts.
- [OpenAI Evals](https://github.com/openai/evals) — Biblioteca de código abierto para evaluar el rendimiento de tareas con modelos de lenguaje y prompts.

- [Arthur Shield](https://www.arthur.ai/get-started) — Producto de pago para detectar toxicidad, alucinaciones, inyección de prompts, etc.
- [LMQL](https://lmql.ai) — Lenguaje de programación para interactuar con LLM, compatible con prompts tipados, flujo de control, restricciones y herramientas.
- [ModelFusion](https://github.com/lgrammel/modelfusion) - Biblioteca de TypeScript para crear aplicaciones con LLM y otros modelos de ML (conversión de voz a texto, texto a voz y generación de imágenes).
- [OneKE](https://openspg.yuque.com/ndx6g9/ps5q6b/vfoi61ks3mqwygvy) — Modelo bilingüe chino-inglés de extracción de conocimiento que utiliza grafos de conocimiento y tecnologías de procesamiento del lenguaje natural.
- [llm-ui](https://github.com/llm-ui-kit/llm-ui) - Biblioteca de React para crear interfaces de usuario de LLM.
- [Wordware](https://www.wordware.ai) - IDE alojado en la web donde especialistas de dominio sin conocimientos técnicos colaboran con ingenieros de IA para crear agentes de IA específicos para tareas. Aborda los prompts como un nuevo lenguaje de programación, en lugar de bloques de poco o ningún código.
- [Wallaroo.AI](https://github.com/WallarooLabs) - Despliega, gestiona y optimiza cualquier modelo a escala y en cualquier entorno, desde la nube hasta el borde. Permite pasar de un cuaderno de Python a la inferencia en minutos.
- [Dify](https://github.com/langgenius/dify) - Plataforma de código abierto para desarrollar aplicaciones de LLM, con una interfaz intuitiva que agiliza los flujos de trabajo de IA, la gestión de modelos y el despliegue en producción.
- [LazyLLM](https://github.com/LazyAGI/LazyLLM) - Aplicación de LLM de código abierto para crear fácilmente y sin complicaciones aplicaciones multiagente de LLM; admite el despliegue y el ajuste fino de modelos.
- [MemFree](https://github.com/memfreeme/memfree) - Motor de búsqueda híbrida de IA de código abierto que obtiene al instante respuestas precisas de Internet, marcadores, notas y documentos. Admite el despliegue con un solo clic.
- [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) - Herramienta AutoML de código abierto para RAG. Optimiza automáticamente la calidad de las respuestas RAG, desde los conjuntos de datos de evaluación de generación hasta el despliegue de canalizaciones RAG optimizadas.
- [Epsilla](https://github.com/epsilla-cloud) - Plataforma integral de agentes de LLM con tus datos y conocimientos privados; ofrece agentes de IA listos para producción desde el primer día.
- [Arize-Phoenix](https://phoenix.arize.com/) - Herramienta de código abierto para la observabilidad de ML que se ejecuta en el entorno de tus cuadernos. Supervisa y ajusta modelos de LLM, CV y tabulares.
- [LLM]([https://github.com/simonw/llm) - Utilidad de CLI y biblioteca de Python para interactuar con modelos de lenguaje grandes, tanto mediante API remotas como con modelos que pueden instalarse y ejecutarse en tu propio equipo.
- [Just-Chat](https://github.com/longevity-genie/just-chat) - ¡Crea tu agente de LLM y conversa con él de forma sencilla y rápida!
- [Agentic Radar](https://github.com/splx-ai/agentic-radar) - Analizador de seguridad de CLI de código abierto para flujos de trabajo agénticos. Examina el código fuente, detecta vulnerabilidades y genera una visualización interactiva junto con un informe de seguridad detallado. Admite LangGraph, CrewAI, n8n, OpenAI Agents y más.
- [LangWatch](https://github.com/langwatch/langwatch) - Plataforma de código abierto para la observabilidad de LLM, la evaluación de prompts y su optimización.
- [TensorZero](https://www.tensorzero.com/) - TensorZero es un marco de código abierto para crear aplicaciones de LLM listas para producción. Unifica una pasarela de LLM, observabilidad, optimización, evaluaciones y experimentación.

</details>

## Tutoriales y cursos sobre LLM
- [Andrej Karpathy Series](https://www.youtube.com/@AndrejKarpathy) - ¡Mi favorito!
- [Umar Jamil Series](https://www.youtube.com/@umarjamilai) - vídeos educativos y de gran calidad que no te puedes perder.
- [Alexander Rush Series](https://rush-nlp.com/projects/) - materiales educativos y de gran calidad que no te puedes perder.
- [llm-course](https://github.com/mlabonne/llm-course) - Curso para iniciarse en los modelos de lenguaje grandes (LLM), con itinerarios de aprendizaje y cuadernos de Colab.
- [UWaterloo CS 886](https://cs.uwaterloo.ca/~wenhuche/teaching/cs886/) - Avances recientes en modelos fundacionales.
- [CS25-Transformers United](https://web.stanford.edu/class/cs25/)
- [ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [Princeton: Understanding Large Language Models](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
- [CS324 - Large Language Models](https://stanford-cs324.github.io/winter2022/)
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)
- [A Visual Guide to Mamba and State Space Models](https://maartengrootendorst.substack.com/p/a-visual-guide-to-mamba-and-state?utm_source=multiple-personal-recommendations-email&utm_medium=email&open=false)
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
- [minbpe](https://www.youtube.com/watch?v=zduSFxRajkE&t=1157s) - Código minimalista y limpio para el algoritmo de codificación por pares de bytes (BPE), usado habitualmente en la tokenización de LLM.
- [femtoGPT](https://github.com/keyvank/femtoGPT) - Implementación pura en Rust de un Transformer generativo preentrenado minimalista.
- [Neurips2022-Foundational Robustness of Foundation Models](https://nips.cc/virtual/2022/tutorial/55796)
- [ICML2022-Welcome to the "Big Model" Era: Techniques and Systems to Train and Serve Bigger Models](https://icml.cc/virtual/2022/tutorial/18440)
- [GPT in 60 Lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
- [LLM‑RL‑Visualized (EN)](https://github.com/changyeyu/LLM-RL-Visualized/blob/master/src/README_EN.md) | [LLM‑RL‑Visualized (中文)](https://github.com/changyeyu/LLM-RL-Visualized) - Más de 100 mapas de algoritmos de LLM y RL 📚.


## Libros sobre LLM
- [Generative AI with LangChain: Build large language model (LLM) apps with Python, ChatGPT, and other LLMs](https://amzn.to/3GUlRng) - incluye un [repositorio de GitHub](https://github.com/benman1/generative_ai_with_langchain) que muestra gran parte de su funcionalidad
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Guía para crear tu propio LLM funcional.
- [BUILD GPT: HOW AI WORKS](https://www.amazon.com/dp/9152799727?ref_=cm_sw_r_cp_ud_dp_W3ZHCD6QWM3DPPC0ARTT_1) - explica cómo programar desde cero un Transformer generativo preentrenado, o GPT.
- [Hands-On Large Language Models: Language Understanding and Generation](https://www.llm-book.com/) - Explora el mundo de los modelos de lenguaje grandes con más de 275 ilustraciones originales en esta guía ilustrada.
- [The Chinese Book for Large Language Models](http://aibox.ruc.edu.cn/zws/index.htm) - Libro introductorio sobre LLM basado en [*A Survey of Large Language Models*](https://arxiv.org/abs/2303.18223).

## Grandes ideas sobre los LLM
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

## Miscelánea


- [Emergent Mind](https://www.emergentmind.com) - Las últimas noticias sobre IA, seleccionadas y explicadas por GPT-4.
- [ShareGPT](https://sharegpt.com) - Comparte con un clic tus conversaciones más sorprendentes de ChatGPT.
- [Major LLMs + Data Availability](https://docs.google.com/spreadsheets/d/1bmpDdLZxvTCleLGVPgzoMTQ0iDP2-7v7QziPrzPdHyM/edit#gid=0)
- [500+ Best AI Tools](https://vaulted-polonium-23c.notion.site/500-Best-AI-Tools-e954b36bf688404ababf74a13f98d126)
- [Cohere Summarize Beta](https://txt.cohere.ai/summarize-beta/) - Presentamos Cohere Summarize Beta: un nuevo endpoint para resumir textos.
- [chatgpt-wrapper](https://github.com/mmabrouk/chatgpt-wrapper) - ChatGPT Wrapper es una API y CLI de Python no oficial y de código abierto que permite interactuar con ChatGPT.
- [Cursor](https://www.cursor.so) - Escribe, edita y conversa sobre tu código con una potente IA.
- [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) - aplicación experimental de código abierto que muestra las capacidades del modelo de lenguaje GPT-4.
- [OpenAGI](https://github.com/agiresearch/OpenAGI) - Cuando los LLM se encuentran con expertos de dominio.
- [EasyEdit](https://github.com/zjunlp/EasyEdit) - Marco fácil de usar para editar modelos de lenguaje grandes.
- [chatgpt-shroud](https://github.com/guyShilo/chatgpt-shroud) - Extensión de Chrome para ChatGPT de OpenAI que mejora la privacidad al facilitar ocultar y mostrar el historial de chat. Ideal para proteger la privacidad durante las presentaciones de pantalla.
- [AI For Developers](https://aifordevelopers.org) - Lista de herramientas y agentes de IA para desarrolladores.

## Colaboraciones

Este repositorio está activo y siempre agradecemos tus contribuciones.

Mantendré abiertas algunas solicitudes de incorporación de cambios si no estoy seguro de que sean adecuadas para los LLM; puedes votar por ellas añadiendo 👍.

---

Si tienes alguna pregunta sobre esta lista seleccionada, no dudes en contactarme en chengxin1998@stu.pku.edu.cn.

[^1]: Esto no constituye asesoramiento jurídico. Para obtener más información, ponte en contacto con los autores originales de los modelos.
