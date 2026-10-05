<h2 align="center">Awesome Prompt Engineering ♂ ️</h2>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/main/_source/prompt.png">
</p>

<p align="center">
  Una colección de recursos comprobada a mano para Prompt Engineering and Context Engineering — que abarca documentos, herramientas, modelos, APIs, parámetros, cursos y comunidades para trabajar con modelos de lenguajes grandes.
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

## 🚀 Comenzar aquí

¿Nuevo para pedir ingeniería? Siga este camino:

<p align="center">
  <img width="1000" src="https://raw.githubusercontent.com/promptslab/Awesome-Prompt-Engineering/refs/heads/main/_source/main.jpg">
</p>

1. **Aprende lo básico** → [ChatGPT Prompt Engineering para desarrolladores](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) (gratuito, ~90 min)
2. **Lea el guía** → [Prompt Engineering Guide por DAIR. AI](https://www.promptingguide.ai/) (fuente abierto, amplio)
3. **Docs del proveedor de estudio** → [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) · [Antropopic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
4. **Comprende dónde se dirige el campo** → [Antrópico: Ingeniería de Contexto Efectiva para Agentes AI](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
5. **Leer la investigación** → [The Prompt Report](https://arxiv.org/abs/2406.06608) — taxonomía de 58+ técnicas de impulso de 1.500+ papeles

---

## Cuadro de contenidos

- [Documentos](#papers)
  - [Principales encuestas](#major-surveys)
  - [Optimización de prontitud y prontitud automática](#prompt-optimization-and-automatic-prompting)
  - [Compresión precipitada](#prompt-compression)
  - [Reasoning Advances](#reasoning-advances)
  - [Aprendizaje en contexto](#in-context-learning)
  - [Prompting Agentic y Multi-Agent Systems](#agentic-prompting-and-multi-agent-systems)
  - [Multimodal Prompting](#multimodal-prompting)
  - [Control de salida y formato estructurado](#structured-output-and-format-control)
  - [Prompt Injection and Security](#prompt-injection-and-security)
  - [Aplicaciones de Ingeniería Prompt](#applications-of-prompt-engineering)
  - [Generación de texto a imagen](#text-to-image-generation)
  - [Generación de texto a música y audio](#text-to-musicaudio-generation)
  - [Documentos de la Fundación (Pre-2024)](#foundational-papers-pre-2024)
- [Herramientas y código](#tools-and-code)
  - [Prompt Management and Testing](#prompt-management-and-testing)
  - [LLM Evaluation Tools](#llm-evaluation-tools)
  - [Agente Frameworks](#agent-frameworks)
  - [Herramientas de optimización rápida](#prompt-optimization-tools)
  - [Red Teaming y Prompt Security](#red-teaming-and-prompt-security)
  - [MCP (Protocolo de Contexto Modelo)](#mcp-model-context-protocol)
  - [Vibe Coding and AI Coding Assistants](#vibe-coding-and-ai-coding-assistants)
    - [CLI-Based Coding Agents](#cli-based-coding-agents)
    - [AI Code Editors / IDEs](#ai-code-editors--ides)
    - [Extensiones de IDE / Plugins](#ide-extensions--plugins)
    - [Plataformas de codificación AI / Agentes de nube](#ai-coding-platforms--cloud-agents)
    - [Marco de Agente de Codificación Open-Source](#open-source-coding-agent-frameworks)
  - [Otros depósitos portátiles](#other-notable-repositories)
- [API](#apis)
- [Datasets and Benchmarks](#datasets-and-benchmarks)
- [Modelos](#models)
- [Detectores de contenidos AI](#ai-content-detectors)
- [Libros](#books)
- [Cursos](#courses)
- [Tutoriales y Guías](#tutorials-and-guides)
- [Videos](#videos)
- [Comunidades](#communities)
- [Autónomo de Investigación &quot; Agentes de autoimproducción &quot;](#autonomous-research--self-improving-agents)
- [Cómo contribuir](#how-to-contribute)

---

## Documentos
📄

### Principales encuestas

- [The Prompt Report: A Systematic Survey of Prompting Techniques](https://arxiv.org/abs/2406.06608) [2024] — Estudio más amplio: taxonomía de 58 textos y 40 técnicas de impulso multimodal de 1.500 documentos más. Coautora de OpenAI, Microsoft, Google, Stanford.
- [Una Encuesta Sistemática de Ingeniería Prompt en Modelos de Lenguas Grandes: Técnicas y Aplicaciones](https://arxiv.org/abs/2402.07927) [2024] — 44 técnicas a través de áreas de aplicación con resúmenes de rendimiento por sesión.
- [A Survey of Prompt Engineering Methods in LLMs for Different NLP Tasks](https://arxiv.org/abs/2407.12994) [2024] — 39 métodos de impulso a través de 29 tareas NLP.
- [Una encuesta de ingeniería automática de promptas: una perspectiva de optimización](https://arxiv.org/abs/2502.11560) [2025] — Formaliza los métodos auto-PE como problemas de optimización discreta/continua/hibrida.
- [Métodos de pronóstico eficientes para los modelos de lenguajes grandes: una encuesta](https://arxiv.org/abs/2404.01077) [2024] — Encuesta de impulsos orientados a la eficiencia (compresión, optimización, APE) para reducir la computación y latencia.
- [Navegar a través del laberinto enigmático: una encuesta de la cadena de la razón del pensamiento](https://arxiv.org/abs/2309.15402) [2023, ACL 2024] — Encuesta sistemática de TC.
- [Cadenas desmitificantes, árboles y gráficos de pensamientos](https://arxiv.org/abs/2401.14295) [2024] — Marco unificado para topologías de razonamiento múltiple.
- [Hacia la ingeniería de prontitud orientada hacia objetivos para los modelos de lenguajes grandes: una encuesta](https://arxiv.org/abs/2401.14043) [2024] — Se centra en los impulsos diseñados en torno a objetivos de tarea explícitos.
- [Hacia la era de la razón: una encuesta de la cadena larga de pensamiento para la racionalización de las tierras](https://arxiv.org/abs/2503.09567) [2025] — Distinguishes Long CoT from Short CoT in o1/R1-era models.

### Optimización de prontitud y prontitud automática

- [OPRO: Grandes modelos de lenguaje como optimizadores](https://arxiv.org/abs/2309.03409) [2023, NeurIPS 2024] — Utiliza LLMs como optimizadores a través de meta-prompts; optimización de los impulsos desvalorizados humanos en hasta un 50% en BBH.
- [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) [2023, ICLR 2024] — Framework for programming (not prompting) LLMs with automatic prompt optimization.
- [MIPRO: Optimizar las instrucciones y demostraciones para los programas de modelos de lenguaje multietapa](https://arxiv.org/abs/2406.11695) [2024, EMNLP 2024] — Optimización bayesiana para programas LM multietapa; hasta un 13% de ganancia de precisión.
- [TextGrad: "Diferenciación" automática a través de texto](https://arxiv.org/abs/2406.07496) [2024] — Treats compound AI systems as computation graphs with textual feedback as gradients. Publicado en Nature.
- [EvoPrompt](https://arxiv.org/abs/2309.08532) [2023, ACL 2024] — Enfoque del algoritmo evolutivo para optimizar automáticamente las indicaciones discretas.
- [Meta Prompting for AI Systems](https://arxiv.org/abs/2311.11482) [2023, Taller ICLR 2024] — Plantillas estructurales Ejemplo-agnósticas formalizadas usando la teoría de la categoría.
- [Prompt Engineering a Prompt Engineer (PE2)](https://arxiv.org/abs/2311.05661) [2024, ACL Findings] — Utiliza LLMs para metapromptarse, refinando los impulsos con plantillas paso a paso para mejorar significativamente el razonamiento.
- [Los grandes modelos de lenguaje son los ingenieros avanzados de nivel humano](https://arxiv.org/abs/2211.01910) [2022] — Generación rápida automática a través de APE.
- [Prompts duros hechos fácil: Optimización discreta basada en ingredientes para el ajuste rápido](https://arxiv.org/abs/2302.03668) [2023]
- [SPO: Optimización de imprevistos autosuperada](https://arxiv.org/abs/2502.06855) [2025] — Rendimiento competitivo al 1–6% del costo de métodos anteriores.

### Compresión precipitada

- [LLMLingua-2: Destilación de datos para la Compresión de Problemas Eficientes y Fieles](https://arxiv.org/abs/2403.12968) [2024, ACL 2024] — 3x-6x más rápido que LLMLingua con destilación de datos GPT-4.
- [LongLLMLingua](https://arxiv.org/abs/2310.06839) [2023, ACL 2024] — Compresión consciente de preguntas para contextos largos; aumento del rendimiento del 21,4% con 4x menos fichas.
- [Compresión pronta para los modelos de lenguaje grande: una encuesta](https://arxiv.org/abs/2410.12388) [2024] — Estudio completo de los métodos de compresión rápida dura y suave.

### Reasoning Advances

- [Escalar LLM Compute de tiempo de prueba óptimamente](https://arxiv.org/abs/2408.03314) [2024] — Muestra una óptima asignación de cálculo de tiempo de prueba puede superar 14 modelos más grandes.
- [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) [2025] — Modelo de razonamiento pura RL que coincide con o1; código abierto con variantes destiladas.
- [s1: Escalada de tiempo de prueba simple](https://arxiv.org/abs/2501.19393) [2025] — SFT en solo 1.000 ejemplos crea un modelo competitivo de razonamiento a través de "forzamiento presupuestario".
- [Modelos de lenguaje de resonancia: un plano](https://arxiv.org/abs/2501.11223) [2025] — Marco sistemático organizando enfoques de razonamiento de LM.
- [Demystifying Long Chain-of-Thought Reasoning in LLMs](https://arxiv.org/abs/2502.03373) [2025] — Analiza el comportamiento largo de la TC en modelos modernos de razonamiento.
- [Gráfico de Pensamientos: Solving Elaborate Problems with LLMs](https://arxiv.org/abs/2308.09687) [2023, AAAI 2024] — Modelos de pensamiento como gráficos arbitrarios; mejora de calidad del 62% sobre la clasificación.
- [Árbol de Pensamientos: Problema Deliberado Resolver con LLMs](https://arxiv.org/abs/2305.10601) [2023, NeurIPS 2023] — Búsqueda de árboles sobre caminos de razonamiento.
- [Todo de los pensamientos](https://arxiv.org/abs/2311.04254) [2023] — Integra CoT, ToT y solvers externos a través de MCTS.
- [Esqueleto de pensamiento](https://arxiv.org/abs/2307.15337) [2023] — Descodificación paralela mediante generación de respuesta esqueleto para una aceleración de hasta 2.69x.
- [Cadena de pensamiento que provoca la razón en los modelos de lenguaje grande](https://arxiv.org/abs/2201.11903) [2022] — El papel fundamental de la TC.
- [La autoconsistencia mejora la cadena de la resonancia del pensamiento](https://arxiv.org/abs/2203.11171) [2022] — Aggregating multiple CoT outputs for reliability.
- [Los grandes modelos de lenguaje son Razones Cero-Shot](https://arxiv.org/abs/2205.11916) [2022] — "Vamos a pensar paso a paso" como un disparador de razonamiento de cero disparo.
- [Acta: Sinergización de la razón y actuación en los modelos de lenguaje](https://arxiv.org/abs/2210.03629) [2022] — Interleaving reasoning and tool use.

### Aprendizaje en contexto

- [Many-Shot In-Context Learning](https://arxiv.org/abs/2404.11018) [2024, NeurIPS 2024 Spotlight] — Ganancias significativas escalando ICL a cientos/miles de ejemplos; introduce ICL reforzado y no supervisado.
- [Many-Shot In-Context Learning in Multimodal Foundation Models](https://arxiv.org/abs/2405.09798) [2024] — Scales multimodal ICL a ~2,000 ejemplos en 14 conjuntos de datos.
- [Repensar el papel de las manifestaciones: ¿Qué hace el trabajo de aprendizaje en contexto?](https://arxiv.org/abs/2202.12837) [2022]
- [Promptas ordenadas fantásticamente y dónde encontrarlos](https://arxiv.org/abs/2104.08786) [2021] — La superación de la sensibilidad de orden rápido.
- [Calibrar antes de usar: Mejorar el rendimiento corto de los modelos de lenguaje](https://arxiv.org/abs/2102.09690) [2021]

### Prompting Agentic y Multi-Agent Systems

- [Modelos de lenguaje grande: una encuesta](https://arxiv.org/abs/2503.23037) [2025] — Encuesta completa organizando LLMs agentes mediante el razonamiento, la actuación y la interacción de capacidades.
- [Multiagentes basados en el modelo de lenguaje grande: una encuesta de progreso y desafíos](https://arxiv.org/abs/2402.01680) [2024] — Cubre los mecanismos de elaboración, comunicación y crecimiento.
- [Mecanismos de colaboración de múltiples agentes: un estudio de las LM](https://arxiv.org/abs/2501.06322) [2025] — Examina las estrategias de debate y cooperación en los sistemas multiagentes basados en la LLM.
- [AutoGen: Cómo habilitar aplicaciones LLM de Next-Gen a través de Conversación Multi-Agent](https://arxiv.org/abs/2308.08155) [2023] — El papel marco multiagente fundamental de Microsoft.
- [ToolLLM: Facilitando los modelos de lenguajes grandes a las APIs de 16000+ en el mundo real](https://arxiv.org/abs/2307.16789) [2023, ICLR 2024] — Entrena LLMs para utilizar colecciones masivas de API de mundo real.
- [SWE-bench: ¿Pueden los modelos de lenguaje resolver problemas GitHub en el mundo real?](https://arxiv.org/abs/2310.06770) [2023, ICLR 2024] — El progreso de codificación de parámetros de referencia.
- [AgentBench: Evaluating LLMs as Agents](https://arxiv.org/abs/2308.03688) [2023, ICLR 2024] — Benchmark en 8 ambientes.
- [PAL: Modelos de lenguaje programado](https://arxiv.org/abs/2211.10435) [2023] — Descarga de computación a los intérpretes de código.

### Multimodal Prompting

- [Visual Prompting in Multimodal Large Language Models: A Survey](https://arxiv.org/abs/2409.15310) [2024] — Primera encuesta exhaustiva sobre los métodos de inducción visual en MLLMs.
- [Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V](https://arxiv.org/abs/2310.11441) [2023] — Los marcadores visuales mejoran dramáticamente las bases visuales.
- [A Comprehensive Survey and Guide to Multimodal Large Language Models in Vision-Language Tasks](https://arxiv.org/abs/2411.06284) [2024] — Cubre texto, imagen, vídeo, MLLMs de audio.
- [Multimodal Chain-of-Thought Reasoning in Language Models](https://arxiv.org/abs/2302.00923) [2023]
- [Desde Prompt Engineering hasta Prompt Craft](https://arxiv.org/abs/2411.13422) [2024] — Vista de diseño-investigación de la " nave" rápida para los modelos de difusión.

### Control de salida y formato estructurado

- [¿Me dejas hablar gratis? A Study on the Impact of Format Restrictions on Performance of LLMs](https://arxiv.org/abs/2408.02442) [2024] — Examina cómo limitar los productos a formatos estructurados impacta el rendimiento del razonamiento.
- [Batch Prompting: Inferencia eficiente con API LLM](https://arxiv.org/abs/2301.08721) [2023]
- [Prompting estructurado: escalar el aprendizaje en contexto a 1.000 ejemplos](https://arxiv.org/abs/2212.06713) [2022]

### Prompt Injection and Security

- [Formalizing and Benchmarking Prompt Injection Attacks and Defenses](https://arxiv.org/abs/2310.12815) [2023, USENIX Security 2024] — Marco formal con evaluación sistemática de 5 ataques y 10 defensas en 10 LLMs.
- [The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions](https://arxiv.org/abs/2404.13208) [2024] — Formación prioritaria de OpenAI para la defensa de la inyección.
- [AgentDojo: Un entorno dinámico para valorar los ataques de inyección y defensas impredecibles](https://arxiv.org/abs/2406.13352) [2024] — Punto de referencia de escenario de agente realista.
- [InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated LLM Agents](https://arxiv.org/abs/2403.02691) [2024]
- [SecAlign: Defending Against Prompt Injection with Preference Optimization](https://arxiv.org/abs/2410.05451) [2024] — Defensa basada en DPO.
- [WASP: Benchmarking Web Agent Security Against Prompt Injection](https://arxiv.org/abs/2504.18575) [2025] — Punto de referencia de seguridad para agentes de uso web/computer.
- [Jailbreak de muchos disparos](https://www.anthropic.com/research/many-shot-jailbreaking) [2024] — La escalada de ejemplos dañinos en ventanas de largo contexto permite la ruptura de la cárcel (Informe Técnico Antrópico).
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073) [2022]
- [Ignora el pronóstico anterior: Técnicas de ataque para modelos de lenguaje](https://arxiv.org/abs/2211.09527) [2022]
- [Inteligencia Artificial y Ciberseguridad: Riesgos documentados, Guardias Empresariales y Amenazas Emergentes en 2024-2025](https://www.ijfmr.com/research-paper.php?id=62200) [2025] — Estudio de incidentes reales de inyección rápida con pautas rápidas prácticas de gobernanza.

### Aplicaciones de Ingeniería Prompt

- [Rephrase y Responder: Deje que los modelos de lenguaje grande Hacer mejores preguntas para ellos](https://arxiv.org/abs/2311.04205) [2023]
- [Legal Prompt Engineering for Multilingual Legal Judgement Prediction](https://arxiv.org/abs/2212.02199) [2023]
- [Conversing with Copilot: Exploring Prompt Engineering for Solving CS1 Problems](https://arxiv.org/abs/2210.15157) [2022]
- [Commonsense-Aware Prompting for Controllable Empathetic Dialogue Generation](https://arxiv.org/abs/2302.01441) [2023]
- [PLACES: Modelos de Lengua Prompting para la Síntesis de Conversación Social](https://arxiv.org/abs/2302.03269) [2023]
- [Segmentación de imágenes médicas usando encoderes transformadores y aprendizaje basado en propensos: una revisión sistemática](https://ieeexplore.ieee.org/document/11313186/) [2025]
- [TableRAG: A Retrieval Augmented Generation Framework for Heterogeneous Document Reasoning](https://arxiv.org/abs/2506.10380) [2025] — La interfaz basada en SQL preserva la estructura tabular para consultas multihop.

### Generación de texto a imagen

- [Una taxonomía de los modificadores de prompta para la generación de texto a imagen](https://arxiv.org/abs/2204.13988) [2022]
- [Directrices de diseño para modelos generadores de textos a imágenes](https://arxiv.org/abs/2109.06977) [2021]
- [Sintesis de imagen de alta resolución con modelos de difusión latente](https://arxiv.org/abs/2112.10752) [2021]
- [DALL·E: Creación de imágenes de texto](https://arxiv.org/abs/2102.12092) [2021]
- [Investigación de Ingeniería de Prompt en Modelos de Difusión](https://arxiv.org/abs/2211.15462) [2022]

### Generación de texto a música y audio

- [MusicLM: Generando música de texto](https://arxiv.org/abs/2301.11325) [2023]
- [ERNIE-Music: Generación de música de texto a formato con modelos de difusión](https://arxiv.org/pdf/2302.04456) [2023]
- [AudioLM: A Language Modeling Approach to Audio Generation](https://arxiv.org/pdf/2209.03143) [2023]
- [Make-An-Audio: Generación de texto a audio con modelos de difusión mejorados](https://arxiv.org/pdf/2301.12661.pdf) [2023]

### Documentos de la Fundación (Pre-2024)

Estos documentos establecieron los conceptos básicos que la ingeniería moderna rápida se basa en:

- [Los modelos de lenguaje son unos pocos estudiantes de instantáneas (GPT-3)](https://arxiv.org/abs/2005.14165) [2020] — Se demuestraron pocos disparos a escala.
- [Prefix-Tuning: Optimización de los obstáculos continuos para la generación](https://arxiv.org/abs/2101.00190) [2021]
- [El poder de la escala para el ajuste de prontitud eficiente del parámetro](https://arxiv.org/abs/2104.08691) [2021]
- [Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350) [2021]
- [Show Your Work: Scratchpads for Intermediate Computation with Language Models](https://arxiv.org/abs/2112.00114) [2021]
- [Prompting de conocimiento generado para la razón de sentido común](https://arxiv.org/abs/2110.08387) [2021]
- [Cómo hacer modelos de lenguaje pre-entrenados mejor aprendices](https://aclanthology.org/2021.acl-long.295) [2021]
- [AutoPrompt: Elegir el conocimiento de los modelos de lenguaje con problemas de generación automática](https://arxiv.org/abs/2010.15980) [2020]
- [¿Cómo podemos saber qué modelos de lenguaje saben?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/) [2020]
- [Un Prompt Pattern Catalog para Mejorar la Ingeniería Prompt con ChatGPT](https://arxiv.org/abs/2302.11382) [2023]
- [Sintético: Generación de demostraciones de cadena de pensamiento para las LM](https://arxiv.org/abs/2302.00618) [2023]
- [Problemas progresivos: aprendizaje continuo para modelos de lenguaje](https://arxiv.org/abs/2301.12314) [2023]
- [Problemas exitosos para completar preguntas complejas](https://arxiv.org/abs/2212.04092) [2022]
- [Decomposed Prompting: A Modular Approach for Solving Complex Tasks](https://arxiv.org/abs/2210.02406) [2022]
- [PromptChainer: Chaining Large Language Model Prompts through Visual Programming](https://arxiv.org/abs/2203.06566) [2022]
- [Pregúntame cualquier cosa: Una estrategia simple para impulsar modelos de lenguaje](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) [2022]
- [Próxima GPT-3 para ser confiable](https://arxiv.org/abs/2210.09150) [2022]
- [En el Segundo Pensamiento, no vamos a pensar paso a paso! Bias y Toxicity en Zero-Shot Reasoning](https://arxiv.org/abs/2212.08061) [2022]

---

## Herramientas y código
🔧

### Prompt Management and Testing

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **Promptfoo** | CLI de código abierto para probar, evaluar y dirigir las indicaciones LLM. Configs YAML, integración CI/CD, pruebas adversarias. ~9K+ ⭐ | [GitHub](https://github.com/promptfoo/promptfoo) |
| **Promptify** | Solve NLP Problemas con LLM's &quot; Genera fácilmente diferentes impulsos de tareas NLP para modelos generativos populares como GPT, PaLM, y más con Promptify | [[Github]](https://github.com/promptslab/Promptify) |
| **Agenta** | Plataforma de desarrollo de LLM de código abierto para una gestión rápida, evaluación, retroalimentación humana y despliegue. | [GitHub](https://github.com/Agenta-AI/agenta) |
| **PromptLayer** | Versión, prueba y monitorea cada impulso y agente con sólidos evals, rastreo y conjuntos de regresión. | [Website](https://promptlayer.com/) |
| **Helicone** | Plataforma de monitoreo y optimización rápida de producción. | [Website](https://helicone.ai/) |
| **LangGPT** | Marco para el diseño estructurado y meta-prompto. 10K+ ⭐ | [GitHub](https://github.com/langgpt/LangGPT) |
| **ChainForge** | Herramienta visual para construir, probar y comparar respuestas rápidas LLM sin código. | [GitHub](https://github.com/ianarawjo/ChainForge) |
| **LMQL** | Un lenguaje de consulta para LLMs haciendo compleja lógica rápida programable. | [GitHub](https://github.com/eth-sri/lmql) |
| **Promptotype** | Plataforma para desarrollar, probar y gestionar los impulsos estructurados de LLM. | [Website](https://www.promptotype.io) |
| **PromptPanda** | Sistema de gestión rápida impulsado por AI para racionalizar los flujos de trabajo rápidos. | [Website](https://promptpanda.io) |
| **Promptimize AI** | Extensión del navegador para mejorar automáticamente las indicaciones del usuario para cualquier modelo AI. | [Website](https://promptimize.ai) |
| **PROMPTMETHEUS** | Web basado en "Prompt Engineering IDE" para crear y ejecutar impulsos iterativamente. | [Website](https://promptmetheus.com) |
| **Better Prompt** | Suite de prueba para las indicaciones LLM antes de empujar a la producción. | [GitHub](https://github.com/krrishdholakia/betterprompt) |
| **OpenPrompt** | Marco de código abierto para la investigación de aprendizaje rápido. | [GitHub](https://github.com/thunlp/OpenPrompt) |
| **Prompt Source** | Herramienta para crear, compartir y utilizar impulsos de lenguaje natural. | [GitHub](https://github.com/bigscience-workshop/promptsource) |
| **Prompt Engine** | Biblioteca de utilidades NPM para crear y mantener los impulsos para LLMs (Microsoft). | [GitHub](https://github.com/microsoft/prompt-engine) |
| **PromptInject** | Marco para el análisis cuantitativo de la robustez de la LLM a ataques rápidos contradictorios. | [GitHub](https://github.com/agencyenterprise/PromptInject) |
| **LynxPrompt** | Plataforma autoanfitriona para la gestión de archivos de configuración IDE AI (.cursorrules, CLAUDE.md, copilot-instructions.md). Web UI, REST API, CLI y mercado de planos federados para 30+ auxiliares de codificación AI. | [GitHub](https://github.com/GeiserX/LynxPrompt) |
| **flompt** | Generador de impulsos Visual AI que se descompone en 12 bloques semánticos (role, context, constraints, examples, etc.) y los compila en XML optimizado. Extensión del navegador para ChatGPT/Claude/Gemini, y servidor MCP para agentes de Claude Code. Libre, de código abierto. | [Website](https://flompt.dev) |

### LLM Evaluation Tools

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **DeepEval** | Marco de evaluación de código abierto que abarca RAG, agentes y conversaciones con la integración CI/CD. ~7K+ ⭐ | [GitHub](https://github.com/confident-ai/deepeval) |
| **Ragas** | Evaluación RAG con generación de conjuntos basados en gráficos de conocimiento y 30 métricas. ~8K+ ⭐ | [GitHub](https://github.com/explodinggradients/ragas) |
| **LangSmith** | Plataforma de LangChain para depurar, probar, evaluar y monitorear aplicaciones LLM. | [Website](https://smith.langchain.com/) |
| **Langfuse** | Observatorio LLM de código abierto con localización, gestión rápida y anotación humana. ~7K+ ⭐ | [GitHub](https://github.com/langfuse/langfuse) |
| **Braintrust** | Plataforma de evaluación de IA final a extremo, certificada por SOC2 Tipo II. | [Website](https://www.braintrust.dev/) |
| **Arize AI / Phoenix** | Monitoreo de LLM en tiempo real con detección y rastreo de deriva. | [GitHub](https://github.com/Arize-ai/phoenix) |
| **TruLens** | Evaluar y explicar las aplicaciones de LLM; rastrea alucinaciones, relevancia, terreno. | [GitHub](https://github.com/truera/trulens) |
| **InspectAI** | Construido para evaluar agentes contra puntos de referencia (UK AISI). | [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| **Opik** | Evaluar, probar y enviar aplicaciones LLM a través de ciclos de vida de devolución y producción. | [GitHub](https://github.com/comet-ml/opik) |
| **EvalView** | Herramienta CLI para pruebas de agentes de IA de varios pasos con casos de prueba YAML, detección de regresión y monitoreo de producción. |[GitHub](https://github.com/hidai25/eval-view) |

### Agente Frameworks

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **LangChain / LangGraph** | El marco de aplicación LLM más adoptado ampliamente; LangGraph añade flujos de trabajo multi-pasos basados en gráficos. ~100K+ / ~10K+ ⭐ | [GitHub](https://github.com/langchain-ai/langchain) · [LangGraph](https://github.com/langchain-ai/langgraph) |
| **CrewAI** | Orquestación de agentes de IA con 700+ integraciones. ~44K+ ⭐ | [GitHub](https://github.com/crewAIInc/crewAI) |
| **AutoGen (AG2)** | El marco de conversación multiagente de Microsoft. ~40K+ ⭐ | [GitHub](https://github.com/microsoft/autogen) |
| **DSPy** | Marco de Stanford para la programación de LLMs con optimización automática de velocidad/peso. ~22K+ ⭐ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **OpenAI Agents SDK** | Marco oficial de agente con llamadas de función, guardias y entregas. ~10K+ ⭐ | [GitHub](https://github.com/openai/openai-agents-python) |
| **Semantic Kernel** | Marco AI de Microsoft que alimenta M365 Copilot; C#, Python, Java. ~24K+ ⭐ | [GitHub](https://github.com/microsoft/semantic-kernel) |
| **LlamaIndex** | Marco de datos para las capacidades de RAG y agente. ~40K+ ⭐ | [GitHub](https://github.com/run-llama/llama_index) |
| **Haystack** | Open-source NLP framework with pipeline architecture for RAG and agents. ~20K+ ⭐ | [GitHub](https://github.com/deepset-ai/haystack) |
| **Agno (formerly Phidata)** | Marco de agente Python con microsegundo instantánea. ~20K+ ⭐ | [GitHub](https://github.com/agno-agi/agno) |
| **Smolagents** | Hugging Face's minimalist code-centric agent framework (~1000 LOC). ~15K+ ⭐ | [GitHub](https://github.com/huggingface/smolagents) |
| **Pydantic AI** | Marco de agente seguro tipo utilizando Pydantic para validación estructurada. ~8K+ ⭐ | [GitHub](https://github.com/pydantic/pydantic-ai) |
| **Mastra** | Marco de agente de TypeScript AI con asistentes, RAG y observabilidad. ~20K+ ⭐ | [GitHub](https://github.com/mastra-ai/mastra) |
| **Google ADK** | Agent Development Kit profundamente integrado con Gemini y Google Cloud. | [GitHub](https://github.com/google/adk-python) |
| **Strands Agents (AWS)** | Model-agnostic framework with deep AWS integrations. | [GitHub](https://github.com/strands-agents/sdk-python) |
| **Langflow** | Constructor de agente visual basado en nodos con arrastrar y soltar. ~50K+ ⭐ | [GitHub](https://github.com/langflow-ai/langflow) |
| **n8n** | Automatización de flujo de trabajo con capacidades de agente AI e integraciones 400+. ~60K+ ⭐ | [GitHub](https://github.com/n8n-io/n8n) |
| **Dify** | All-in-one backend for agentic workflows with tool-using agents and RAG. | [GitHub](https://github.com/langgenius/dify) |
| **PraisonAI** | Multi-AI Marco de agentes con soporte 100+ LLM, integración MCP y memoria incorporada. | [GitHub](https://github.com/MervinPraison/PraisonAI) |
| **Neurolink** | Multi-provider Marco de agente AI unificar 12+ proveedores con orquestación de flujo de trabajo. | [GitHub](https://github.com/juspay/neurolink) |
| **Composio** | Conectar 100+ herramientas a agentes de IA con cero configuración. | [GitHub](https://github.com/composiohq/composio) |

### Herramientas de optimización rápida

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **DSPy** | Múltiples optimizadores (MIPROv2, BootstrapFewShot, COPRO) para el ajuste automático rápido. ~22K+ ⭐ | [GitHub](https://github.com/stanfordnlp/dspy) |
| **TextGrad** | Diferenciación automática vía texto (Stanford). ~2K+ ⭐ | [GitHub](https://github.com/zou-group/textgrad) |
| **OPRO** | Optimización de Google DeepMind al incitar. | [GitHub](https://github.com/google-deepmind/opro) |

### Red Teaming y Prompt Security

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **Garak (NVIDIA)** | Escáner de vulnerabilidad de LLM para alucinaciones, inyecciones y cortes de cárcel: la "nmap for LLMs." ~3K+ ⭐ | [GitHub](https://github.com/NVIDIA/garak) |
| **PyRIT (Microsoft)** | Herramienta de identificación del riesgo de pitón para el tratamiento automático en rojo. ~3K+ ⭐ | [GitHub](https://github.com/Azure/PyRIT) |
| **DeepTeam** | 40+ vulnerabilidades, 10+ métodos de ataque, OWASP Top 10 soporte. | [GitHub](https://github.com/confident-ai/deepteam) |
| **LLM Guard** | Kit de herramientas de seguridad para validación LLM I/O. ~2K+ ⭐ | [GitHub](https://github.com/protectai/llm-guard) |
| **NeMo Guardrails (NVIDIA)** | Guardias programables para sistemas de conversación. ~5K+ ⭐ | [GitHub](https://github.com/NVIDIA/NeMo-Guardrails) |
| **Guardrails AI** | Defina formatos de salida estrictos (Schemas JSON) para garantizar la fiabilidad del sistema. | [Website](https://www.guardrailsai.com) |
| **Lakera** | Plataforma de seguridad AI para detección de inyección rápida en tiempo real. | [Website](https://lakera.ai/) |
| **Purple Llama (Meta)** | Evaluación de seguridad LLM de código abierto incluyendo CyberSecEval. | [GitHub](https://github.com/meta-llama/PurpleLlama) |
| **GPTFuzz** | Generación automatizada de plantillas de corte de la cárcel consiguiendo tasas de éxito de 09%. | [GitHub](https://github.com/sherdencooper/GPTFuzz) |
| **Rebuff** | Herramienta de código abierto para la detección y prevención de la inyección rápida. | [GitHub](https://github.com/protectai/rebuff) |
| **AgentSeal** | "Escáner de código abierto que ejecuta 150 sondas de ataque para probar agentes de IA para la inyección rápida y vulnerabilidades de extracción". | [GitHub](https://github.com/agentseal/agentseal) |

### MCP (Protocolo de Contexto Modelo)

MCP es un estándar abierto desarrollado por Anthropic (Nov 2024, donado a la Fundación Linux Dec 2025) para conectar auxiliares de IA a fuentes e instrumentos de datos externos a través de una interfaz estandarizada. Tiene **97M+ descargas mensuales de SDK** y ha sido adoptado por GitHub, Google, y la mayoría de los principales proveedores de IA.

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **MCP Specification** | La especificación del protocolo central y SDKs. ~15K+ ⭐ | [GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol) |
| **MCP Reference Servers** | Implementaciones oficiales: embrague, sistema de archivos, GitHub, Slack, Postgres. | [GitHub](https://github.com/modelcontextprotocol/servers) |
| **FastMCP (Python)** | Marco pitónico de alto nivel para construir servidores MCP. ~5K+ ⭐ | [GitHub](https://github.com/jlowin/fastmcp) |
| **GitHub MCP Server** | El servidor oficial de GitHub para la interacción de reposo, emisión, PR y Acciones. ~15K+ ⭐ | [GitHub](https://github.com/github/github-mcp-server) |
| **Awesome MCP Servers** | Lista curada de 10.000 servidores comunitarios MCP. ~30K+ ⭐ | [GitHub](https://github.com/punkpeye/awesome-mcp-servers) |
| **Context7** | Servidor MCP que proporciona documentación específica para reducir alucinaciones de código. | [GitHub](https://github.com/upstash/context7) |
| **GitMCP** | Crea servidores remotos MCP para cualquier repo GitHub cambiando el dominio. | [Website](https://gitmcp.io/) |
| **MCP Inspector** | Herramienta de prueba visual para el desarrollo del servidor MCP. | [GitHub](https://github.com/modelcontextprotocol/inspector) |

### Vibe Coding and AI Coding Assistants

> 🟢 = Código abierto · 🔵 = Comercial · 🟣 = Código abierto + comercial (núcleo abierto con nube/API de pago)

#### CLI-Based Coding Agents

Herramientas terminal-native agenteic que entienden su base de código y ejecutar tareas multi-paso.

| Nombre | Descripción | Tipo | Enlace |
|:-----|:-----------|:----:|:----:|
| **Claude Code** | Antropopic coding agenteic CLI; entiende las bases de código completas y ejecuta tareas complejas de varios pasos a través del lenguaje natural. | 🔵 | [Docs](https://docs.anthropic.com/en/docs/claude-code) |
| **OpenAI Codex CLI** | Agente de codificación de terminales de código abierto de OpenAI; ligero, local-primer, con ejecución de código en caja de arena. ~68K+ ⭐ | 🟣 | [GitHub](https://github.com/openai/codex) |
| **Gemini CLI** | Agente de IA terminal de código abierto de Google con ventana contextual de 1M y Google Search grounding. ~96K+ ⭐ | 🟣 | [GitHub](https://github.com/google-gemini/gemini-cli) |
| **Qwen Code** | Agente AI de código abierto optimizado para Qwen3-Coder; soporte multiprotocolo (OpenAI/Anthropic/Gemini APIs), 1.000 solicitudes gratuitas/día. ~21K+ ⭐ | 🟢 | [GitHub](https://github.com/QwenLM/qwen-code) |
| **Aider** | Programación de par AI en terminal con profunda integración Git; mapas completos bases de códigos y cambios de autocompromiso. ~42K+ ⭐ | 🟢 | [GitHub](https://github.com/Aider-AI/aider) |
| **OpenCode** | Powerful open-source AI coding agent with beautiful TUI; soporta casi todos los proveedores de modelos AI. ~120K+ ⭐ | 🟢 | [GitHub](https://github.com/opencode-ai/opencode) |
| **Goose** | Extensible agente AI de código abierto de Block (Square/Cash App); instala, ejecuta, edita y prueba con cualquier LLM. ~29K+ ⭐ | 🟢 | [GitHub](https://github.com/block/goose) |
| **Crush** | Glamorous agente de codificación agente de Charmbracelet con soporte multimodelo, integración LSP y terminal hermosa UI. ~9K+ ⭐ | 🟢 | [GitHub](https://github.com/charmbracelet/crush) |
| **Amazon Q Developer CLI** | Experiencia de chat en terminal desde AWS; transición a Kiro CLI. | 🟣 | [GitHub](https://github.com/aws/amazon-q-developer-cli) |
| **Amp** | La herramienta de codificación del agente de Sourcegraph (Su sucesor del Cody); trabaja en CLI e IDE. | 🔵 | [Website](https://ampcode.com) |
| **Junie CLI** | JetBrains' LLM-agnostic coding agent CLI (beta 2026); apoya a todos los principales proveedores de modelos. | 🔵 | [Website](https://www.jetbrains.com/junie/) |
| **Autohand Code CLI** | Agente autónomo de codificación terminal con soporte LLM multiprovidente, herramientas 40+ y sistema de habilidades modulares. | 🟢 | [GitHub](https://github.com/autohandai/code-cli) |

#### AI Code Editors / IDEs

Editores independientes o tenedores IDE con profunda integración de IDE.

| Nombre | Descripción | Tipo | Enlace |
|:-----|:-----------|:----:|:----:|
| **Cursor** | Dirigiendo editor de códigos nativos de AI (VS Code fork); Composer genera aplicaciones enteras de lenguaje natural, ediciones de varios ficheros. | 🔵 | [Website](https://cursor.com) |
| **Windsurf** | IDE impulsado por IDE (VS Code fork) con agente propietario de Cascade y modelo SWE-1.5; adquirido por Cognition AI. | 🔵 | [Website](https://windsurf.com) |
| **Zed** | Editor de alto rendimiento en Rust con características nativas de IA, predicción de Zeta y soporte del Protocolo del Cliente. ~77K+ ⭐ | 🟢 | [GitHub](https://github.com/zed-industries/zed) |
| **Trae** | IDE libre a IDE de ByteDance ("El verdadero ingeniero de IA") con el modo Builder; proporciona acceso gratuito a Claude, GPT-4o y DeepSeek. | 🔵 | [Website](https://www.trae.ai) |
| **Google Antigravity** | El primer IDE de agente de Google (Fork de código VS) con vista de administrador para orquestar múltiples agentes en paralelo; impulsado por Gemini. | 🔵 | [Website](https://antigravity.google) |
| **Kiro** | IDE de IDE de AWS (VS Code fork); convierte los impulsos en especificaciones, luego código de trabajo, docs y pruebas. | 🔵 | [Website](https://kiro.dev) |
| **PearAI** | Editor de códigos AI de código abierto (VS Code fork) con chat continuo y concluciones. ~40K+ ⭐ | 🟢 | [GitHub](https://github.com/trypear/pearai-app) |
| **Void** | Open-source Cursor alternative (VS Code fork); cualquier modelo o alojamiento local con cambio de visualización. ~28K+ ⭐ | 🟢 | [GitHub](https://github.com/voideditor/void) |
| **Melty** | Editor de códigos AI de código abierto con edición de archivos múltiples e integración de Git profunda. ~7K+ ⭐ | 🟢 | [GitHub](https://github.com/meltylabs/melty) |
| **Emdash** | Medio ambiente devoto agente de código abierto (YC W26) para ejecutar múltiples agentes de codificación en paralelo en árboles de trabajo aislados de Git. | 🟢 | [GitHub](https://github.com/generalaction/emdash) |

#### Extensiones de IDE / Plugins

Plugins para VS Code, JetBrains, Neovim y otros editores.

| Nombre | Descripción | Tipo | Enlace |
|:-----|:-----------|:----:|:----:|
| **GitHub Copilot** | Más ampliamente adoptado asistente de codificación de IA; concluciones en línea, chat y agente de codificación en el código VS, JetBrains, Neovim. | 🔵 | [Website](https://github.com/features/copilot) |
| **Cline** | Agente de codificación autónomo en Código VS con aprobaciones humanas en el bucle; edición de archivos, comandos terminales y uso del navegador. -59K+ | 🟢 | [GitHub](https://github.com/cline/cline) |
| **Continue** | Código VS de código abierto y extensión JetBrains para crear sistemas de dev AI modulares personalizados; cualquier modelo. ~32K+ ⭐ | 🟢 | [GitHub](https://github.com/continuedev/continue) |
| **Cody** | Asistente de IA propulsado por Sourcegraph que saca contexto de bases de código locales y remotas; Código VS, JetBrains, Visual Studio. | 🔵 | [Website](https://sourcegraph.com/cody) |
| **Codeium** | Extensión de codificación AI gratuita para 40+ IDEs con concluciones, chat y búsqueda en más de 70 idiomas. | 🟣 | [Website](https://codeium.com) |
| **Amazon Q Developer** | Asistente de codificación AI de AWS con terminaciones, chat en línea y modo agente; integración profunda de AWS. | 🟣 | [Website](https://aws.amazon.com/q/developer/) |
| **Gemini Code Assist** | La extensión IDE de Google propulsada por Gemini con las terminaciones, Siguiente Editar Predicciones y diffs inline; libre para los individuos. | 🟣 | [Website](https://codeassist.google) |
| **Tabnine** | Auxiliar de IA centrado en la privacidad capacitado en OSS permisivo-licenciado; apoya a todos los IDE principales con despliegue en locales. | 🔵 | [Website](https://www.tabnine.com) |
| **Augment Code** | Asistente de codificación Enterprise AI con motor Contexto de 200K para una comprensión profunda de base de código. | 🔵 | [Website](https://www.augmentcode.com) |
| **Qodo** | AI code review and quality platform with multi-agent architecture; test generation, code review, CI/CD enforcement. | 🟣 | [Website](https://www.qodo.ai) |
| **CodeGeeX** | Modelo de generación de código multilingüe de código abierto que admite 20 idiomas con extensiones de código VS y JetBrains. ~11K+ ⭐ | 🟢 | [GitHub](https://github.com/zai-org/CodeGeeX) |
| **Tabby** | Asistente de codificación de IA de código abierto (o alternativa del piloto); funciona completamente en su infraestructura. ~25K+ ⭐ | 🟢 | [GitHub](https://github.com/TabbyML/tabby) |

#### Plataformas de codificación AI / Agentes de nube

Agentes basados en navegadores o anfitriones en la nube que construyen, prueban e implementan de forma autónoma.

| Nombre | Descripción | Tipo | Enlace |
|:-----|:-----------|:----:|:----:|
| **Devin** | Primer ingeniero de software AI basado en la nube totalmente autónomo; planes, códigos, pruebas y abre PRs de forma independiente. | 🔵 | [Website](https://devin.ai) |
| **Replit Agent** | Agente AI nativo de la nube que construye, prueba e implementa aplicaciones completas en el navegador; 50 idiomas más. | 🔵 | [Website](https://replit.com/products/agent) |
| **bolt.new** | Agente web dev impulsado por AI; rápido, ejecutar, editar e implementar aplicaciones de personal completo directamente en el navegador a través de WebContainers. ~15K+ ⭐ | 🟢 | [GitHub](https://github.com/stackblitz/bolt.new) |
| **bolt.diy** | Fork comunitario de bolt.new con características extendidas y flexibilidad LLM más amplia. ~12K+ ⭐ | 🟢 | [GitHub](https://github.com/stackblitz-labs/bolt.diy) |
| **Lovable** | Aplicaciones completas desde el lenguaje natural con Supabase incorporado, auth y un solo clic de despliegue; inicio europeo más rápido a 20M ARR. | 🔵 | [Website](https://lovable.dev) |
| **v0** | Plataforma AI de Vercel para generar React/Siguiente de alta calidad. js UI componentes de lenguaje natural. | 🔵 | [Website](https://v0.dev) |
| **GitHub Copilot Workspace** | Entorno de codificación basado en la nube con agentes de planificación, tormenta de cerebros y reparación; incluido con planes de Copiloto pagados. | 🔵 | [Website](https://githubnext.com/projects/copilot-workspace) |
| **Firebase Studio** | El entorno de desarrollo basado en la nube de Google. | 🔵 | [Website](https://firebase.google.com/studio) |

#### Marco de Agente de Codificación Open-Source

Marcos y proyectos de investigación para la construcción de agentes de codificación autónomos.

| Nombre | Descripción | Tipo | Enlace |
|:-----|:-----------|:----:|:----:|
| **OpenHands** | Plataforma de código abierto líder para agentes de codificación de nubes; sistemáticamente superior en SWE-bench. Antes OpenDevin. ~69K+ ⭐ | 🟢 | [GitHub](https://github.com/OpenHands/OpenHands) |
| **SWE-agent** | Toma un problema GitHub y lo fija automáticamente usando una interfaz de agente-computer personalizado. [NeurIPS 2024] ~19K+ ⭐ | 🟢 | [GitHub](https://github.com/SWE-agent/SWE-agent) |
| **Open SWE** | El marco de código de codificación anfitriona de LangChain construido en LangGraph con la integración de Slack/Linear. ~8K+ ⭐ | 🟢 | [GitHub](https://github.com/langchain-ai/open-swe) |
| **Devika** | Ingeniero de software de código abierto; descompone instrucciones, investigaciones y escribe código. Devin alternativa. ~18K+ ⭐ | 🟢 | [GitHub](https://github.com/stitionai/devika) |
| **AutoCodeRover** | Mejora del programa autónomo que combina LLMs con localización de fallas para la resolución de problemas GitHub. ~2.8K+ ⭐ | 🟢 | [GitHub](https://github.com/nus-apr/auto-code-rover) |
| **Agentless** | Enfoque simple de tres fases (localizar → reparación → validar) para resolver problemas de desarrollo de software. ~2K+ ⭐ | 🟢 | [GitHub](https://github.com/OpenAutoCoder/Agentless) |
| **Devon** | Programador de pares de código abierto agente SWE con escritura de código, planificación e investigación; admite Claude, GPT-4, Llama, Ollama. ~3.5K+ ⭐ | 🟢 | [GitHub](https://github.com/entropy-research/Devon) |

### Otros depósitos portátiles

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **Prompt Engineering Guide (DAIR.AI)** | La guía definitiva de código abierto y el centro de recursos. 3M+ estudiantes. ~55K+ ⭐ | [GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide) |
| **Awesome ChatGPT Prompts / Prompts.chat** | La biblioteca de código abierto más grande del mundo. 1000 de impulsos para todos los modelos principales. | [GitHub](https://github.com/f/awesome-chatgpt-prompts) |
| **12-Factor Agents** | Principios para la construcción de software LLM de grado de producción. ~17K+ ⭐ | [GitHub](https://github.com/humanlayer/12-factor-agents) |
| **NirDiamant/Prompt_Engineering** | 22 tutoriales de Jupyter Notebook. ~3K+ ⭐ | [GitHub](https://github.com/NirDiamant/Prompt_Engineering) |
| **Context Engineering Repository** | Manual de primeros principios para ir más allá de la ingeniería rápida al diseño de contexto. | [GitHub](https://github.com/davidkimai/Context-Engineering) |
| **AI Agent System Prompts Library** | Recogida de los impulsos del sistema de agentes de codificación AI de producción (Código de Claude, Gemini CLI, Cline, Aider, Roo Code). | [GitHub](https://github.com/tallesborges/agentic-system-prompts) |
| **Awesome Vibe Coding** | Lista curada de 245+ herramientas y recursos para construir software a través de impulsos de lenguaje natural. | [GitHub](https://github.com/taskade/awesome-vibe-coding) |
| **OpenAI Cookbook** | Recetas oficiales para avisos, herramientas, RAG y evaluaciones. | [GitHub](https://github.com/openai/openai-cookbook) |
| **Embedchain** | Marco para crear bots tipo ChatGPT sobre tu conjunto de datos. | [GitHub](https://github.com/embedchain/embedchain) |
| **ThoughtSource** | Marco para la ciencia del pensamiento de la máquina. | [GitHub](https://github.com/OpenBioLink/ThoughtSource) |
| **Promptext** | Extractos y formatos contexto de código para los impulsos de IA con cuenta de fichas. | [GitHub](https://github.com/1broseidon/promptext) |
| **Price Per Token** | Compare los precios de LLM API entre 200 modelos. | [Website](https://pricepertoken.com/) |
| **OpenPaw** | Herramienta CLI`npx pawmode`) que convierte el Código Claude en un asistente personal generando impulsos del sistema (CLAUDE.md + SOUL.md) con personalidad, memoria y 38 routers de habilidad. | [GitHub](https://github.com/daxaur/openpaw) |
| **Think Better** | CLI de código abierto que inyecta permanentemente 10 marcos de decisión estructurados (MECE, Árboles de Edición, Pre-Mortems) y 12 detectores de sesgos cognitivos en impulsos auxiliares de IA. Vamos, MIT. | [GitHub](https://github.com/HoangTheQuyen/think-better) |

---

## API
💻

### OpenAI

| Modelo | Contexto | Precio (Input/Output per 1M tokens) | Característica clave |
|:------|:--------|:-----------------------------------|:------------|
| GPT-5.2 / 5.2 Thinking | 400K | $1.75 / $14 | Última insignia, 90% de descuento en caché, razonamiento configurable |
| GPT-5.1 | 400K | $1.25 / $10 | Generación anterior buque insignia |
| GPT-4.1 / 4.1 mini / nano | 1M | $2 / $8 | Mejor modelo no racional, 40% más rápido y 80% más barato que GPT-4o |
| o3 / o3-pro | 200K | Variaciones | Modelos de resonancia con uso de herramientas nativas |
| o4-mini | 200K | Costo eficiente | Razonamiento rápido, mejor en AIME en su clase de costo |
| GPT-OSS-120B / 20B | 128K | $0.03 / $0.30 | Primeros modelos de peso abierto, Apache 2.0 |

Características clave: Respuestas API, Agentes SDK, Salidas estructuradas, función llamando, caché rápido (90% de descuento), Batch API (50% de descuento), soporte MCP. [Platform Docs](https://platform.openai.com/docs/models)

### Antrópico (Claude)

| Modelo | Contexto | Precio (Input/Output per 1M tokens) | Característica clave |
|:------|:--------|:-----------------------------------|:------------|
| Claude Opus 4.6 | 1M (beta) | $5 / $25 | Tareas más poderosas, de última generación y de vanguardia |
| Claude Sonnet 4.5 | 200K | $3 / $15 | Mejor modelo de codificación, 61,4% OSWorld (uso de ordenador) |
| Claude Haiku 4.5 | 200K | Nivel rápido | Clase modelo más cercana y más rápida |
| Claude Opus 4 / Sonnet 4 | 200K | 15 dólares/75 dólares (Opus) | Opus: 72,5% SWE-bench, Sonnet 4 potencias GitHub Copilot |

Características clave: Pensamiento extendido con uso de herramientas, Uso de ordenadores, MCP (originado aquí), caché rápido, Código Claude CLI, disponible en AWS Bedrock y Google Vertex AI. [API Docs](https://docs.anthropic.com/)

### Google (Gemini)

| Modelo | Contexto | Precio (Input/Output per 1M tokens) | Característica clave |
|:------|:--------|:-----------------------------------|:------------|
| Gemini 3 Pro Preview | 1M | $2 / $12 | Más inteligente modelo de Google, desplegado en 2B+ Usuarios de búsqueda |
| Gemini 2.5 Pro | 1M | $1.25 / $10 | Mejor para tareas de codificación/agenéticas, modelo de pensamiento |
| Gemini 2.5 Flash / Flash-Lite | 1M | $0.30/$1.50 · $0.10/$0.40 | Líderes de rendimiento de precios |

Características clave: Pensamiento (todos los modelos 2.5+), Google Search grounding, code execution, Live API (real-time audio/video), context caching. [Google AI Studio](https://ai.google.dev/)

### Meta (Llama)

| Modelo | Arquitectura | Contexto | Característica clave |
|:------|:------------|:--------|:------------|
| Llama 4 Scout | 109B MoE / 17B activos | 10M | Fits single H100, multimodal, open-weight |
| Llama 4 Maverick | 400B MoE / 17B activos, 128 expertos | 1M | Golpea GPT-4o, peso abierto |
| Llama 3.3 70B | Dense | 128K | Matches Llama 3.1 405B |

Disponible en 25+ socios en la nube, Hugging Face y API de inferencia. [Llama](https://ai.meta.com/llama/)

### Otros proveedores notables

| Proveedor | Descripción | Enlace |
|:---------|:-----------|:----:|
| **Mistral AI** | Mistral Large 3 (675B MoE), Devstral 2, Ministral 3. Apache 2.0. | [Website](https://mistral.ai) |
| **DeepSeek** | V3.2 (671B MoE), R1 (reasoning, MIT license). $0.15/$0.75 por tokens 1M. | [Website](https://deepseek.com) |
| **xAI (Grok)** | Grok 4.1 Fast: 2M context, $0.20/$0.50 per 1M tokens. | [Website](https://x.ai) |
| **Cohere** | Comando A (111B, contexto 256K), Embed v4, Rerank 4.0. Excels en RAG. | [Website](https://cohere.com) |
| **Together AI** | 200+ modelos abiertos con sub-100ms de latencia. | [Website](https://together.ai) |
| **Groq** | Herraje LPU con ~300+ fichas/sec inference. | [Website](https://groq.com) |
| **Fireworks AI** | Inferencia rápida con el cumplimiento de HIPAA + SOC2. | [Website](https://fireworks.ai) |
| **OpenRouter** | API unificada para 300+ modelos de todos los proveedores. | [Website](https://openrouter.ai) |
| **Cerebras** | chips a escala de ola con el mejor tiempo total de respuesta. | [Website](https://cerebras.ai) |
| **Perplexity AI** | API aumentada con citas. | [Website](https://perplexity.ai) |
| **Amazon Bedrock** | Servicio multimodelo gestionado con Claude, Llama, Mistral, Cohere. | [Website](https://aws.amazon.com/bedrock/) |
| **Hugging Face Inference** | Acceso a los modelos abiertos a través de API. | [Website](https://huggingface.co/docs/api-inference/index) |

---

## Datasets and Benchmarks
💾

### Principales parámetros (2024–2026)

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **Chatbot Arena / LM Arena** | votos de usuario de 6M+ para comparaciones de LLM pares con Elo. Estándar de facto para la preferencia humana. | [Website](https://lmarena.ai/) |
| **MMLU-Pro** | 12,000+ preguntas de nivel de posgrado en 14 dominios. NeurIPS 2024 Spotlight. | [GitHub](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| **GPQA** | 448 preguntas de STEM "a prueba de Google", los validadores no expertos alcanzan sólo el 34%. | [arXiv](https://arxiv.org/abs/2311.12022) |
| **SWE-bench Verified** | Subconjunto de 500-task validado por humanos para la resolución de problemas GitHub del mundo real. | [Website](https://www.swebench.com/) |
| **SWE-bench Pro** | 1,865 tareas a través de 41 repos profesionales; los mejores modelos puntuación sólo ~23%. | [Leaderboard](https://scale.com/leaderboard/swe_bench_pro_public) |
| **Humanity's Last Exam (HLE)** | 2.500 preguntas de expertos; la IA superior sólo marca ~10-30%. | [Website](https://agi.safe.ai/) |
| **BigCodeBench** | 1.140 tareas de codificación en 7 dominios; AI logra ~35,5% vs. 97% de éxito humano. | [Leaderboard](https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard) |
| **LiveBench** | Resistente a la contaminación con preguntas frecuentes actualizadas. | [Paper](https://openreview.net/forum?id=sKYHBTAxVa) |
| **FrontierMath** | Matemáticas de nivel de investigación; AI resuelve sólo el ~2% de los problemas. | Research |
| **ARC-AGI v2** | Resumen de razonamiento de medición de inteligencia de fluidos. | Research |
| **IFEval** | Evaluación de seguimiento de instrucciones con limitaciones de formato/contenido. | [arXiv](https://arxiv.org/abs/2311.07911) |
| **MLE-bench** | Evaluación de ingeniería ML de OpenAI a través de tareas de estilo Kaggle. | [GitHub](https://github.com/openai/mle-bench) |
| **PaperBench** | Evalua la capacidad de AI para replicar 20 documentos ICML 2024 desde cero. | [GitHub](https://github.com/openai/preparedness) |

### Líderes y Meta-Benchmarks

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **Hugging Face Open LLM Leaderboard v2** | Evalua los modelos abiertos en MMLU-Pro, GPQA, IFEval, MATH. | [Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| **Artificial Analysis Intelligence Index v3** | Agrega 10 evaluaciones. | [Website](https://artificialanalysis.ai/) |
| **SEAL by Scale AI** | Hosts SWE-bench Pro y evaluaciones de agentes. | [Leaderboard](https://scale.com/leaderboard) |

### Prompt and Instruction Datasets

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **P3 (Public Pool of Prompts)** | Prompt templates for 270+ NLP tasks used to train T0 and similar models. | [HuggingFace](https://huggingface.co/datasets/bigscience/P3) |
| **System Prompts Dataset** | 944 plantillas rápidas del sistema para flujos de trabajo de agente (por Daniel Rosehill, Ago 2025). | [HuggingFace](https://huggingface.co/datasets/danielrosehill/system_prompts) |
| **OpenAssistant Conversations (OASST)** | 161,443 mensajes en 35 idiomas con 461,292 valoraciones de calidad. | [HuggingFace](https://huggingface.co/datasets/OpenAssistant/oasst1) |
| **UltraChat / UltraFeedback** | Conjuntos de datos de instrucciones y preferencias sintéticas a gran escala para la formación de alineación. | HuggingFace |
| **SoftAge Prompt Engineering Dataset** | 1,000 diversos impulsos de 10 categorías para la evaluación de resultados rápidos. | HuggingFace |
| **Text Transformation Prompt Library** | Recopilación completa de los impulsos de transformación de texto (mayo 2025). | HuggingFace |
| **Writing Prompts** | ~300K historias escritas en humanos emparejadas con indicaciones de r/WritingPrompts. | [Kaggle](https://www.kaggle.com/datasets/ratthachat/writing-prompts) |
| **Midjourney Prompts** | Los avisos de texto y las URL de la imagen se raspan de la discordia pública de MidJourney. | [HuggingFace](https://huggingface.co/datasets/succinctly/midjourney-prompts) |
| **CodeAlpaca-20k** | 20.000 pares de instrucción de programación. | [HuggingFace](https://huggingface.co/datasets/sahil2801/CodeAlpaca-20k) |
| **ProPEX-RAG** | Dataset for prompt optimization in RAG workflows. | HuggingFace |
| **NanoBanana Trending Prompts** | 1000+ impulsos de imagen AI curados de X/Twitter, clasificados por compromiso. | [GitHub](https://github.com/jau123/nanobanana-trending-prompts) |

### Red Teaming and Adversarial Datasets

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **HarmBench** | 510 comportamientos dañinos a través de categorías estándar, contextuales, copyright y multimodal. | [Website](https://safetyprompts.com/) |
| **JailbreakBench** | Punto de referencia de robustez abierta para irrumpir con 100 impulsos. | Research |
| **AgentHarm** | 110 tareas de agentes maliciosos en 11 categorías de daños. | [arXiv](https://arxiv.org/abs/2410.09024) |
| **DecodingTrust** | 243,877 impulsa la evaluación de la confianza en 8 perspectivas. | Research |
| **SafetyPrompts.com** | Aggregator tracking 50+ Safety/red-teaming datasets. | [Website](https://safetyprompts.com/) |

---

## Modelos
🧠

### Modelos fronterizos (2025–2026)

| Modelo | Proveedor | Contexto | Fuerza clave |
|:------|:---------|:--------|:-------------|
| **GPT-5.2** | OpenAI | 400K | Inteligencia general, 100% AIME 2025 |
| **Claude Opus 4.6** | Antrópico | 1M (beta) | Codificación, tareas de agente, pensamiento extendido |
| **Gemini 3 Pro** | Google | 1M | #1 LMArena (~1500 Elo), multimodal |
| **Grok 4.1** | x AI | 2M | #2 LMArena (1483 Elo), baja alucinación |
| **Mistral Large 3** | Mistral AI | 256K | El mejor peso abierto (675B MoE/41B activo), Apache 2.0 |
| **DeepSeek-V3.2** | DeepSeek | 128K | Mejor valor (671B MoE/37B activo), licencia MIT |
| **Llama 4 Maverick** | Meta | 1M | Beats GPT-4o (400B MoE/17B activo), peso abierto |

### Modelos de resonancia

| Modelo | Detalle clave |
|:------|:-----------|
| **OpenAI o3 / o3-pro** | 87,7% GPQA Diamond. Uso de herramientas nativas. |
| **OpenAI o4-mini** | Mejor AIME en su clase de costes con razonamiento visual. |
| **DeepSeek-R1 / R1-0528** | Peso abierto, RL-entrenado. 87,5% en AIME 2025. Licencia MIT. |
| **QwQ (Qwen with Questions)** | Modelo de razonamiento 32B. Apache 2.0. Comparable a R1. |
| **Gemini 2.5 Pro/Flash (Thinking)** | Razonamiento incorporado con presupuesto de pensamiento configurable. |
| **Claude Extended Thinking** | Modo híbrido con cadena de pensamiento visible y uso de herramientas. |
| **Phi-4 Reasoning / Plus** | Los modelos de razonamiento 14B rivalizan con modelos mucho más grandes. Peso abierto. |
| **GPT-OSS-120B** | OpenAI tiene peso abierto con CoT. Cerca de paridad con o4-mini. Apache 2.0. |

### Modelos de Open-Source Notables

| Modelo | Proveedor | Detalle clave |
|:------|:---------|:-----------|
| **Qwen3-235B-A22B** | Alibababa | Flagship MoE. Strong reasoning/code/multilingual. Apache 2.0. La mayoría de la familia descargada en HuggingFace. |
| **Gemma 3** | Google | 270M a 27B. Multimodal. Contexto 128K. 140 idiomas. |
| **OLMo 2/3** | Allen AI | Fully open (data, code, weights, logs). OLMo 2 32B supera GPT-3.5. Apache 2.0. |
| **SmolLM3-3B** | Hugging Face | Outperforms Llama-3.2-3B. El razonamiento de doble movimiento. Contexto 128K. |
| **Kimi K2** | Moonshot AI | 32B activa. Peso abierto. Adaptado para uso de codificación/agentic. |
| **Llama 4 Scout** | Meta | 109B MoE/17B activo. Contexto de token 10M. Fits single H100. |

### Modelos especializados en código

| Modelo | Detalle clave |
|:------|:-----------|
| **Qwen3-Coder (480B-A35B)** | 69.6% SWE-bench - hito para la codificación de código abierto. Contexto 256K. Apache 2.0. |
| **Devstral 2 (123B)** | 72.2% SWE-bench Verified. 7x más rentable que Claude Sonnet. |
| **Codestral 25.01** | Modelo de código de Mistral. Más de 80 idiomas. Soporte completo. |
| **DeepSeek-Coder-V2** | 236B MoE / 21B activo. 338 idiomas de programación. |
| **Qwen 2.5-Coder** | 7B/32B. 92 idiomas de programación. 88.4% HumanEval. Apache 2.0. |

### Modelos fundacionales (Referencia histórica)

These models established key concepts but are largely supersed for practical use:

| Modelo | Proveedor | Significado |
|:------|:---------|:-------------|
| GLM-130B | Tsinghua | Abierto bilingüe inglés / chino LLM (2023) |
| Falcon 180B | TII | Modelo generativo abierto (2023) |
| Mixtral 8x7B | Mistral AI | Arquitectura Pioneered MoE para modelos abiertos (2023) |
| GPT-NeoX-20B | EleutherAI | LLM autoregresiva abierta temprana |
| GPT-J-6B | EleutherAI | Modelo de lenguaje causal abierto temprano |

---

## Detectores de contenidos AI
🔎

### Principales Detectores Comerciales

| Nombre | Precisión | Característica clave | Enlace |
|:-----|:---------|:------------|:----:|
| **GPTZero** | 99% reclamado | 10M+ usuarios, #1 en G2 (2025). Detecta GPT-4/5, Gemini, Claude, Llama. Tier gratis disponible. | [Website](https://gptzero.me) |
| **Originality.ai** | 98-100% (revisado por pares) | Consistentemente calificado más preciso. Combina detección de IA + plagio + comprobación de hechos. De $14.95/mes. | [Website](https://originality.ai) |
| **Turnitin AI Detection** | 98%+ en texto AI no modificado | Dominante en el mundo académico. Lanzamiento de la detección de desprendimiento/humanizador de IA (Ago 2025). Licencias institucionales. | [Website](https://www.turnitin.com/solutions/topics/ai-writing/) |
| **Copyleaks** | 99%+ reclamado | Herramienta empresarial que detecta IA en 30 idiomas. Integraciones de LMS. | [Website](https://copyleaks.com) |
| **Winston AI** | 99,98% reclamado | OCR para la detección de documentos escaneados, imagen AI/deepfake. 11 idiomas. | [Website](https://gowinston.ai) |
| **Pangram Labs** | 99,3% (COLING 2025) | La puntuación más alta en COLING 2025 Shared Task. TPR 100% sobre texto "humanizado". 97,7% de robustez adversaria. | [Website](https://www.pangram.com) |

### Detectores de Investigación y Libres

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **Binoculars** | Detector de investigación de código abierto con perplejidad cruzada entre dos LLMs. | [arXiv](https://arxiv.org/abs/2401.12070) |
| **DetectGPT / Fast-DetectGPT** | Método estadístico que compara las probabilidades de registro del texto original vs. perturbaciones. | [arXiv](https://arxiv.org/abs/2301.11305) |
| **Openai Detector** | Clasificador de AI para indicar el texto escrito por IA (envoltura Python Detector de IA)  | [[GitHub]](https://github.com/promptslab/openai-detector) |
| **Sapling AI Detector** | Detector basado en el navegador libre (hasta 2.000 chars). 97% de exactitud en algunos estudios. | [Website](https://sapling.ai/) |
| **QuillBot AI Detector** | Libre, sin necesidad de registro. | [Website](https://quillbot.com/ai-content-detector) |
| **Writer AI Content Detector** | Herramienta gratuita con resultados codificados en color. | [Website](https://writer.com/ai-content-detector/) |
| **ZeroGPT** | Detector libre popular evaluado en múltiples estudios académicos. | [Website](https://www.zerogpt.com/) |

### Criterios de observación del agua

| Nombre | Descripción | Enlace |
|:-----|:-----------|:----:|
| **SynthID (Google DeepMind)** | Watermarking for AI text, images, and audio via estadística token sampling. Deplorado en productos de Google. | [Website](https://deepmind.google/technologies/synthid/) |
| **OpenAI Text Watermarking** | Desarrollado pero aún experimental a partir de 2025. La investigación muestra preocupaciones de fragilidad. | Experimental |

**Importante caveat:** Ningún detector reclama una precisión del 100%. El texto mixto humano/AI sigue siendo más difícil de detectar (50–70% de precisión). La robustez adversarial varía ampliamente. Se prevé que el mercado de detección de IA crezca de ~$2.3B (2025) a $15B para 2035.

---

## Libros
📖

### Prompt Engineering

| Título | Autor(s) | Editorial | Año |
|:------|:----------|:---------|:-----|
| **Prompt Engineering for LLMs** | John Berryman &quot; Albert Ziegler | O'Reilly | 2024 |
| **Prompt Engineering for Generative AI** | James Phoenix &quot; Mike Taylor | O'Reilly | 2024 |
| **Prompt Engineering for LLMs** | Thomas R. Caldwell | Independiente | 2025 |

### LLM Application Development

| Título | Autor(s) | Editorial | Año |
|:------|:----------|:---------|:-----|
| **AI Engineering: Building Applications with Foundation Models** | Chip Huyen | O'Reilly | 2025 |
| **Build a Large Language Model (From Scratch)** | Sebastian Raschka | Manning | 2024 |
| **Building LLMs for Production** | Louis-François Bouchard &quot; Louie Peters | O'Reilly | 2024 |
| **LLM Engineer's Handbook** | Paul Iusztin &amp; Maxime Labonne | Packt | 2024 |
| **The Hundred-Page Language Models Book** | Andriy Burkov | Autopublicado | 2025 |

### Agentes AI

| Título | Autor(s) | Editorial | Año |
|:------|:----------|:---------|:-----|
| **Building Applications with AI Agents** | Michael Albada | O'Reilly | 2025 |
| **AI Agents and Applications** | Roberto Infante | Manning | 2025 |
| **AI Agents in Action** | Micheal Lanham | Manning | 2025 |

### Producción, fiabilidad y seguridad

| Título | Autor(s) | Editorial | Año |
|:------|:----------|:---------|:-----|
| **LLMs in Production** | Christopher Brousseau &quot; Matthew Sharp | Manning | 2025 |
| **Building Reliable AI Systems** | Rush Shahani | Manning | 2025 |
| **The Developer's Playbook for LLM Security** | Steve Wilson | O'Reilly | 2024 |

---

## Cursos
👩‍🏫

### Cursos cortos gratis

- [ChatGPT Prompt Engineering para desarrolladores](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — Co-traído por Andrew Ng e Isa Fulford de OpenAI. El punto de partida fundamental. (DeepLearning. AI)
- [Sistemas de construcción con la API de ChatGPT](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — Diseño de sistema LLM multipaso para la producción. (DeepLearning. AI)
- [Agentes AI en LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/) — Flujos de datos de uso de herramientas y agentes de investigación. (DeepLearning. AI)
- [Building Agentic RAG with LlamaIndex](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — Construcción de agentes de investigación RAG. (DeepLearning. AI)
- [Funciones, Herramientas y Agentes con LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) — Llamada de funciones y construcción de agentes. (DeepLearning. AI)
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Técnicas de incitación visual. (DeepLearning. AI)

### Cursos de Universidad y Plataforma

- [Prompt Engineering Specialization (Vanderbilt)](https://www.coursera.org/specializations/prompt-engineering) — Serie de 3 cursos del Dr. Jules Blanco cubriendo fundacional a avanzada PE. (Coursera)
- [Generative AI with LLMs (DeepLearning.AI + AWS)](https://www.coursera.org/learn/generative-ai-with-llms) — Ciclo de vida LLM, transformadores, RLHF, despliegue. (Coursera)
- [Stanford CS336: Modelo de lenguaje de Scratch](https://cs336.stanford.edu/) — Construir un LLM final a extremo. (Stanford, 2024–2026)
- [MIT 6.S191: Introducción al aprendizaje profundo](https://introtodeeplearning.com/) — Curso anual con LLM y IA generativa. (MIT, 2024–2026)
- [The Complete Prompt Engineering for AI Bootcamp](https://www.udemy.com/course/prompt-engineering-for-ai/) — Cubre GPT-5, DSPy, LangGraph, arquitecturas de agentes. 58K+ calificaciones. (Udemía, actualizada Febrero 2026)

### Cursos de Plataforma Libre

- [Google Prompting Essentials](https://grow.google/prompting-essentials/) — Diseño rápido de 5 pasos, meta-prompting, Gemini. Menos de 6 horas.
- [Microsoft Azure AI Fundamentos: Generative AI](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/) — Vía de aprendizaje gratuita que cubre LLMs, impulsos, agentes, Azure OpenAI.
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) — Curso impulsado por la comunidad que cubre transformadores, ajuste fino, construcción de modelos de razonamiento.
- [Hugging Face Agentes de AI Curso](https://huggingface.co/learn) - Teoría del agente para practicar. 100K+ estudiantes registrados.

### Cursos de promoción

- [ChatGPT para todos](https://learnprompting.org/courses/chatgpt-for-everyone)
- [Introducción a la Ingeniería Prompt](https://learnprompting.org/courses/introduction_to_prompt_engineering)
- [Ingeniería avanzada](https://learnprompting.org/courses/advanced-prompt-engineering)
- [Introducción a la prontitud Hacking](https://learnprompting.org/courses/intro-to-prompt-hacking)
- [Prompt Hacking avanzado](https://learnprompting.org/courses/advanced-prompt-hacking)
- [Introducción a agentes de IA generadores para profesionales de negocios](https://learnprompting.org/courses/introduction-to-agents)
- [AI Safety](https://learnprompting.org/courses/ai-safety)

---

## Tutoriales y Guías
📚

### Guías oficiales de proveedores

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — Amplio, que abarca GPT-4.1/5, impulso, modelos de razonamiento, productos estructurados, flujos de trabajo agentes. Actualizado continuamente.
- [OpenAI GPT-4.1](https://cookbook.openai.com/articles/gpt-4-1-prompting-guide) [2025] — Diseño rápido estructurado como agente: persistencia de objetivos, integración de herramientas, procesamiento de largo contexto.
- [Antrópico Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Diseño de impulso iterativo, etiquetas XML, cadena de pensamiento, asignación de roles. Incluye generador rápido.
- [Antrópico Claude 4 Mejores Prácticas](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices) [2025–2026] — Ejecución de herramientas paralelas, capacidades de pensamiento, procesamiento de imágenes.
- [Antrópico: Ingeniería de Contexto Efectiva para Agentes AI](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) [2025] — La evolución de la ingeniería rápida a la ingeniería contextual: estado de agente, memoria, herramientas, MCP.
- [Google Gemini Prompting Strategies](https://ai.google.dev/docs/prompt_best_practices) — Multimodal prompting for Gemini via Vertex AI y AI Studio.
- [Microsoft Prompt Engineering en Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) — Llamada de herramientas, diseño de funciones, impulso de poca instantánea, encadenamiento rápido.

### Guías comunitarias e independientes

- [Prompt Engineering Guide (DAIR.AI / promptingguide.ai)](https://www.promptingguide.ai/) - Guía de código abierto más completa. 18+ técnicas, guías específicas para modelos, documentos de investigación. 3M+ alumnos. Ahora incluye ingeniería contextual.
- [Aprender Prompting (learnprompting.org)](https://learnprompting.org/) — Plataforma libre estructurada. Principiante a avanzada PE, seguridad AI, competencia HackAPrompt.
- [IBM 2026 Guía para la Ingeniería Prompt](https://www.ibm.com/think/prompt-engineering) [2026] — Herramientas curadas, tutoriales, ejemplos del mundo real con código Python.
- [Tutorial interactivo antropópico](https://github.com/anthropics/prompt-eng-interactive-tutorial) — Curso de libreta Jupyter de 9 canales con ejercicios prácticos.
- [Guía de ingeniería de Lilian Weng](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) [2023] — Blog técnico altamente respetado del investigador de OpenAI.
- [Google Prompt Engineering Guide ( PDF de 68 páginas)](https://www.reddit.com/r/PromptEngineering/comments/1kggmh0/google_dropped_a_68page_prompt_engineering_guide/) [2025] — Guía de mejor práctica interna para Gemini con patrones concretos.
- [DigitalOcean: Prompt Engineering Best Practices](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices) [2025] — Guía actualizada que resume las técnicas: pocas imágenes, cadena de pensamiento, impulso de roles, etc.
- [Aakash Gupta: Prompt Engineering en 2025](https://news.aakashg.com) [2025] — Guía práctica con sabiduría del envío de AI en OpenAI, Shopify y Google.
- [Las mejores prácticas para la ingeniería rápida con OpenAI API](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) - Las mejores prácticas introductorias de OpenAI.
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) — Recetas oficiales para llamar funciones, RAG, evaluación y flujos de trabajo complejos.
- [Microsoft Prompt Engineering Docs](https://microsoft.github.io/prompt-engineering) — Microsoft abre recursos de ingeniería rápida.
- [DALLE Prompt Book](https://dallery.gallery/the-dalle-2-prompt-book) — Guía visual para el mensaje de texto a imagen.
- [Los mejores 100+ Prompts de Difusión Estable](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts) — La generación de imagen curada por la comunidad exige.
- [Vibe Engineering (Manning)](https://www.manning.com/books/vibe-engineering) — Libro de Tomasz Lelek &amp; Artur Skowronski sobre la construcción de software a través de impulsos de lenguaje natural.

---

## Videos
🎥

- [Andrej Karpathy: "Deep Dive into LLMs" "How I Use LLMs"](https://www.youtube.com/@AndrejKarpathy) [2024–2025] — Dos de los vídeos AI más influyentes de 2024–2025. Buceo completo técnico profundo seguido de patrones prácticos de uso.
- [Karpathy: "Software in the Era of AI" (YC AI Startup School)](https://karpathy.ai/) [2025] — Coined "vibe coding" (Feb 2025) y promovió la "ingeniería de texto" (Jun 2025).
- [Karpathy: Neural Networks: Zero to Hero](https://www.youtube.com/@AndrejKarpathy) [2023–2024] — Construcción de series de conferencias completas de la retropropagación al GPT.
- [3Blue1Brown: Neural Networks Series](https://www.youtube.com/@3blue1brown) [Updated 2024] — Iconic animated visual explanations of transformers and attention mechanisms. 7M+ suscriptores.
- [AI Explained](https://www.youtube.com/@aiexplained-official) [2024–2025] — Análisis de larga duración derribando documentos, capacidades modelo y desarrollos de PE.
- [Sam Witteveen](https://www.youtube.com/@samwitteveen) [2024–2025] — tutoriales prácticos sobre ingeniería rápida, LangChain, RAG y agentes.
- [Matthew Berman](https://www.youtube.com/@matthew_berman) [2024–2025] — Canal popular que cubre las versiones de modelos y el uso práctico de LLM. Suscriptores 600K+.
- [DeepLearning.AI YouTube](https://www.youtube.com/@Deeplearningai) [2024–2026] — Lecciones estructuradas, vistas previas del curso, y Andrew Ng habla sobre agentes y carreras de IA.
- [Lex Fridman Podcast (AI Episodios)](https://www.youtube.com/@lexfridman) [2024–2025] — Entrevistas de larga duración con Altman, Hinton, Amodei sobre LLMs, impulso y seguridad.
- [ICSE 2025: AIware Prompt Engineering Tutorial](https://conf.researchr.org/details/icse-2025/icse-2025-tutorials/) [2025] — Tutorial de conferencias que cubre patrones rápidos, fragilidad, antipatterns y optimización DSLs.
- [CMU Advanced NLP 2022: Prompting](https://youtube.com/watch?v=5ef83Wljm-M) — Conferencia académica fundacional sobre los métodos de impulso.
- [ChatGPT: 5 Prompt Engineering Secrets For Beginners](https://www.youtube.com/watch?v=2zg3V66-Fzs) - Introducción accesible para principiantes.

---

## Comunidades
🤝

### Servidores de disco

- [Aprender Prompting](https://learnprompting.org/discord) - 40.000 miembros más. Discordia PE más grande con cursos, hackathons, concursos HackAPrompt.
- [PromptsLab Discord](https://discord.gg/m88xfYMbK6)  - Comunidad
- [Midjourney](https://discord.gg/midjourney) - Miembros de 1M+. Centro primario para el intercambio rápido de texto a imagen.
- [OpenAI Discord](https://discord.gg/openai) — Comunidad oficial con canales de ayuda para GPTs, Sora, DALL-E y API.
- [Discos antropópicos](https://discord.gg/anthropic) - Colaboración oficial para el desarrollo de la comunidad Claude.
- [Hugging Face Discord](https://discord.gg/huggingface) — Discusiones modelo, soporte bibliotecario, eventos comunitarios.
- [FlowGPT](https://flowgpt.com/) - 33K+ miembros. 100K+ se dirige a través de ChatGPT, DALL-E, Stable Diffusion, Claude.

### Reddit

- [r/PromptEngineering](https://reddit.com/r/PromptEngineering) - Subreddit dedicado a la elaboración rápida de técnicas y debates.
- [r/ChatGPT](https://reddit.com/r/ChatGPT) - 10M+ miembros. Centro primario para usuarios de ChatGPT y rápido intercambio.
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA) - Una comunidad altamente técnica para ejecutar LLMs de código abierto localmente.
- [r/ClaudeAI](https://reddit.com/r/ClaudeAI) — La comunidad Claude de Antrópico: intercambio rápido, consejos de API, comparaciones de modelos.
- [r/MachineLearning](https://reddit.com/r/MachineLearning) - Debates de investigación ML orientados a la formación académica.
- [r/OpenAI](https://reddit.com/r/OpenAI) — OpenAI discusiones de productos y API.
- [r/StableDiffusion](https://reddit.com/r/StableDiffusion) — 450K+ miembros para los impulsos y flujos de trabajo de arte AI.
- [r/ChatGPTPromptGenius](https://reddit.com/r/ChatGPTPromptGenius) — 35K+ miembros compartiendo y refinando las indicaciones.


### Foros y Plataformas

- [OpenAI Developer Community](https://community.openai.com/) — Foro oficial para la ayuda de API, mejores prácticas, compartir proyectos.
- [Hugging Face Community](https://huggingface.co/) - Centro para la colaboración de código abierto de IA.
- [DeepLearning.AI Community](https://community.deeplearning.ai/) — Foro para estudiantes que discuten cursos y carreras de IA.
- [MenosWrong](https://www.lesswrong.com/) — Puestos técnicos detallados sobre las capacidades y la seguridad de las IA.
- [AI Alignment Forum](https://www.alignmentforum.org/) - Debates especializados de investigación sobre alineación.
- [CivitAI](https://civitai.com/) — Plataforma Generativa de creadores de IA para compartir modelos, LoRAs y avisos.

### GitHub Organizations

- [LangChain](https://github.com/langchain-ai) - Marco de aplicación LLM de código abierto. 100K+ estrellas.
- [Promptslab](https://github.com/promptslab)  — Modelos Generativos ← Prompt-Engineering 
- [Hugging Face](https://github.com/huggingface) — Centro central: Transformers, Diffusers, Datasets, TRL.
- [DSPy (Stanford NLP)](https://github.com/stanfordnlp/dspy) - Crecer comunidad para una optimización rápida sistemática.
- [OpenAI](https://github.com/openai) — Modelos de código abierto, parámetros de referencia y herramientas.

---

<!-- AUTORESEARCH-START -->
## 🔬 Investigación autónoma &quot; Agentes de autoimproducción
> Auto-synced de [impresionante-autoresearch](https://github.com/alvinunreal/awesome-autoresearch) · Última sincronización: 2026-10-03

### General-Purpose Descendants

- [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) — Marco de auto-mejoramiento Recursivo donde los agentes capturan rastros de ejecución, analizan patrones de falla y aplican correcciones específicas con evaluación de mantenimiento o devolución.
- [vukrosic/auto-research](https://github.com/vukrosic/auto-research) — Plan de control solo para un laboratorio de investigación AI autónomo abierto — modelo operativo basado en archivos para dirección humana y ejecución de agentes.
- [uditgoenka/autoresearch](https://github.com/uditgoenka/autoresearch) — Claude Code habilidad que generaliza la investigación automática en un bucle reutilizable para software, docs, seguridad, envío, depuración y otros objetivos mensurables.
- [leo-lilinxiao/codex-autoresearch](https://github.com/leo-lilinxiao/codex-autoresearch) — Habilidad de investigación autóctona de Codex con soporte de reanudación de la actividad, lecciones a través de las carreras, experimentos paralelos opcionales y flujos de trabajo específicos para el modo.
- [junjunbong/research-loop](https://github.com/junjunjunbong/research-loop) — Habilidad de Agente de Autobúsqueda para Codex y Claude Code con un corredor determinista, aprobación de plan-hash, árboles de trabajo aislados de Git, evaluación métrica autorizada, y un libro de experimentos sólo de apéndice.
- [xieyulai/steer](https://github.com/xieyulai/steer) — Marco de experimentos mejorado donde los agentes de codificación editan código de entrenamiento y ejecutan rondas mientras la tarea, marcador y evidencia permanecen fijos.
- [SeeleAI/Thoth](https://github.com/SeeleAI/Thoth) — Dashboard-first Claude Code and Codex runtime for autoresearch, with durable runs, locked work items, visible ledgers, and reviewable verdicts.
- [supratikpm/gemini-autoresearch](https://github.com/supratikpm/gemini-autoresearch) — Gemini CLI habilidad que generaliza la auto investigación a cualquier meta mensurable. Gemini-native: utiliza Google Search grounding como una fuente de verificación en vivo dentro del bucle, verdadero modo sin cabeza a través de --yolo --prompt, y 1M token context. También trabaja en Antigravity IDE vía .agents/skills/.
- [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) — `pi` extension plus dashboard for persistent experiment loops, live metrics, confidence tracking, and resumable autoresearch sessions.
- [drivelineresearch/autoresearch-claude-code](https://github.com/drivelineresearch/autoresearch-claude-code) — Claude Code plugin/skill port of `pi-autoresearch`, con un flujo de trabajo de laboratorio limpio y un estudio de caso biomecánico concreto.
- [grishaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) — Plano de control cerrado para la mejora reiterada del agente, con evaluación, conocimiento persistente, validación escalonada y destilación opcional en tiempos de ejecución locales más baratos.
- [Necmtn/ax](https://github.com/Necmttn/ax) — Loop retro local para agentes de codificación AI: captura trazas de sesión, convierte la fricción repetida en propuestas, y pistas aceptadas fijaciones como experimentos.
- [jmilinovich/goal-md](https://github.com/jmilinovich/goal-md) — Generaliza la investigación automática en un `GOAL.md` patrón para repos donde el agente debe construir primero una función de fitness medible antes de que pueda optimizar.
- [james-s-tayler/lazy-developer](https://github.com/james-s-tayler/lazy-developer) — Claude Code habilidad que orquesta autobúsqueda a través de una secuencia priorizada de objetivos de optimización (cubrimiento, velocidad de prueba, velocidad de construcción, complejidad, LOC, rendimiento) utilizando GOAL.md como motor. Soporta la ejecución independiente y la multi-instance Ralph Mode.
- [mutable-state-inc/autoresearch-at-home](https://github.com/mutable-state-inc/autoresearch-at-home) — Tinta colaborativa de autoescuchación aguas arriba que añade experimentos reclamando, sincronización compartida de los mejores contactos, intercambio de hipótesis y coordinación de estilo enano entre muchos agentes de una sola GPU.
- [zkarimi22/autoresearch-anything](https://github.com/zkarimi22/autoresearch-anything) - Generaliza la investigación automática **cualquier métrica mensurable** — avisos de sistema, rendimiento de API, landing pages, test suites, configuración de configuración, consultas SQL. "Si puedes medirlo, puedes optimizarlo".
- [Entrpi/autoresearch-everywhere](https://github.com/Entrpi/autoresearch-everywhere) — Ampliación multiplataforma que auto-detectos config hardware y comienza el bucle. La mitad de la investigación "glutina y generalización".
- [ShengranHu/ADAS](https://github.com/ShengranHu/ADAS) — **Diseño Automatizado de Sistemas Agentes** - ICLR 2025. Meta-agentes que inventan arquitecturas de agentes novedosos mediante la programación de ellos en código.
- [MaximeRobeyns/self_mejora_codificación_Agente](https://github.com/MaximeRobeyns/self_improving_coding_agent) — **SICA**: Codificación de autoimproducción Agente que edita su propia base de código. ICLR 2025 Workshop paper demonstrating scaffold-level self-improvement on coding benchmarks.
- [peterskoett/self-improving-agent](https://github.com/peterskoett/self-improving-agent) — Arquitectura alternativa de autoproducción de agentes con ciclos de reflexión y meta-aprendizaje.
- [metauto-ai/HGM](https://github.com/metauto-ai/HGM) — **Máquina Huxley-Gödel** para los agentes de codificación - aplica auto-mejoramiento al rendimiento SWE-bench a través de la optimización meta-nivel.
- [gepa-ai/gepa](https://github.com/gepa-ai/gepa) — **GEPA (Genetic-Pareto)** - ICLR 2026 Oral. Evolución rápida reflectante que supera RL (GRPO) en parámetros de referencia. Optimiza cualquier parámetro textual contra cualquier métrica utilizando la reflexión del lenguaje natural.
- [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) — Automatizado descubrimiento de habilidades para los agentes de codificación: evoluciona habilidades reutilizables y los impulsos de trayectorias fallidas contra puntos de referencia, con el apoyo de Claude Code, Codex CLI, OpenCode, OpenHands y Goose.
- [MrTsepa/autoevolve](https://github.com/MrTsepa/autoevolve) — Autobús de auto-jugación inspirado en GEPA: mutar estrategias de código, evaluar cabeza a cabeza, velocidad con Elo/Bradley-Terry, rama del frente de Pareto. El agente lee rastros de coincidencias para apuntar mutaciones. Funciona como una habilidad del Código de Claude.
- [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) — Inteligencia enjambre del agente para la investigación de automóviles — genera direcciones de investigación paralelas de GPU, distribuye trabajo a través de agentes, resultados agregados.
- [Orchestra-Research/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) — Biblioteca completa de habilidades que incluye orquestación de autobuses con arquitectura de dos opciones ( optimización interna + síntesis externa).
- [WecoAI/aideml](https://github.com/WecoAI/aideml) — **AIDE**: Tree-search ML engineering agent que mejora autónomamente el rendimiento del modelo a través de la generación y evaluación de códigos iterativos.
- [weco.ai](https://weco.ai) — **Weco**: Plataforma Nube para AIDE con observabilidad, seguimiento de experimentos y carreras gestionadas, trae el bucle de autobúsqueda a la producción.

### Research-Agent Systems

- [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) — Fin a fin de tubería de investigación que convierte un tema en revisión de la literatura, experimentos, análisis, revisión por pares y borradores de papel; más amplio que la investigación automática, pero claramente en el mismo linaje.
- [OpenLAIR/dr-claw](https://github.com/OpenLAIR/dr-claw) — Espacio de trabajo de investigación de código abierto con tuberías secuenciales de ideas a papel y paquetes de herramientas de investigación integrada.
- [OpenRaiser/NanoInvestigación](https://github.com/OpenRaiser/NanoResearch) — Motor de investigación autónomo de fin a fin que planifica experimentos, genera código, ejecuta trabajos localmente o en SLURM, analiza resultados reales, y escribe documentos basados en esos productos.
- [kaust-ark/ARK](https://github.com/kaust-ark/ARK) — **ARK (Kit de investigación automática)**: idea + lugar → oleoducto de papel orquestando 6 agentes — análisis de propuestas, búsqueda de literatura, experimentos de Slurm, redacción de LaTeX, revisión iterativa de pares. Controlado a través de CLI, panel web o Telegram.
- [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) — Primeros flujos de trabajo de investigación para Claude Code y otros agentes, centrados en revisión bibliográfica autónoma, experimentos, iteración de papel y crítica cruzada.
- [skyllwt/AutoSci](https://github.com/skyllwt/AutoSci) — Plataforma de investigación de ciclo completo centrada en Wiki construida en el Código de Claude, realizando la visión LLM-Wiki de Karpathy. 20+ habilidades cubren el bucle completo: ingert → ideate → novedoso cheque → diseño del experimento / run / eval → escritura de papel. El estado de investigación vive en un wiki de conocimiento estructurado con un gráfico interactivo.
- [Sibyl-Research-Team/AutoResearch-SibylSystem](https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem) — Plenamente autónomo científico de IA construido en el Código Claude, con lineamiento explícito de AutoResearch, iteración de investigación multiagente, ejecución de experimentos GPU y un bucle exterior autoevolucionante.
- [wjc2830/Easy-AutoResearch-for-DeepLearning](https://github.com/wjc2830/Easy-AutoResearch-for-DeepLearning) — Claude Code habilidad que dirige un bucle de aprendizaje profundo de estilo autoescuchado y humano a través de seis roles, experimentos versionados y finalización comprobada por pruebas.
- [eimenhmdt/autoresearcher](https://github.com/eimenhmdt/autoresearcher) — Paquete de código abierto temprano para automatizar los flujos de trabajo científicos, actualmente centrado en la generación de revisión de la literatura con una ambición hacia una investigación autónoma más amplia.
- [hiperespacioai/agi](https://github.com/hyperspaceai/agi) — Red de investigación distribuida, entre pares, donde agentes autónomos ejecutan experimentos, hallazgos de chismes, mantienen las tablas directivas de CRDT y resultados de archivo a GitHub en múltiples ámbitos de investigación.
- [Human-Agent-Society/CORAL](https://github.com/Human-Agent-Society/CORAL) — **CORAL**: Evolución multiagente autónoma para el descubrimiento abierto ([arXiv:2604.01658](https://arxiv.org/abs/2604.01658)). Agentes de larga duración con memoria persistente compartida, ejecución asincrónica y intervenciones basadas en latidos cardíacos; SOTA en 10 tareas de matemáticas/algorítmica/sistemas.
- [SakanaAI/AI-Scientist](https://github.com/SakanaAI/AI-Scientist) — **The AI Scientist**: Primer sistema completo para el descubrimiento científico totalmente automático. De generación de ideas a escritura de papel con mínima supervisión humana.
- [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) — Taller de descubrimiento científico automatizado a través de la búsqueda de árboles. Elimina la dependencia de plantilla de v1, generaliza a través de dominios de investigación.
- [AweAI-Team/AiScientist](https://github.com/AweAI-Team/AiScientist) — **AiScientist**: laboratorio de investigación ML de larga duración con orquestación jerárquica y coordinación File-as-Bus — los archivos del espacio de trabajo actúan como el sistema duradero de registro. Conduce la reproducción autónoma del papel (PaperBench) y los bucles de iteración MLE-Bench estilo competencia bajo presupuestos fijos de computación/tiempo. ([arXiv 2604.13018](https://arxiv.org/abs/2604.13018))
- [HKUDS/AI-Researcher](https://github.com/HKUDS/AI-Researcher) - Papel NeurIPS 2025. Automatización completa de investigación de extremo a extremo: hipótesis → experimentos → manuscrito → revisión de pares. Versión de producción en [novix.ciencia](https://novix.science/chat).
- [openags/Auto-Research](https://github.com/openags/Auto-Research) — **OpenAGS**: Orquesta un equipo de agentes de IA en todo el ciclo de vida de investigación — revisión encendida, generación de hipótesis, experimentos, escritura de manuscritos y revisión de pares.
- [SamuelSchmidgall/AgentLaboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) — Flujo de trabajo de investigación autónomo final a fin: idea → revisión de la literatura → experimentos → informe. Soporta modos autónomos y copilotos.
- [Agente Rxiv](https://agentrxiv.github.io/) — Marco de investigación autónomo colaborativo donde los laboratorios de agentes comparten un servidor de preimpresión para construirse en forma iterativa.
- [JinheonBaek/ResearchAgent](https://github.com/JinheonBaek/ResearchAgent) — Generación de ideas de investigación iterativa sobre literatura científica con LLMs. Exámenes de revisión y retroalimentación múltiples.
- [du-nlp-lab/MLR-Copilot](https://github.com/du-nlp-lab/MLR-Copilot) — Marco de investigación autónomo de ML — genera ideas, implementa experimentos, analiza resultados.
- [MASWorks/ML-Agent](https://github.com/MASWorks/ML-Agent) — Reforzando agentes de LLM para la ingeniería ML autónoma. Aprende de prueba y error para mejorar el rendimiento del modelo.
- [PouriaRouzrokh/LatteReview](https://github.com/PouriaRouzrokh/LatteReview) — Paquete de pitón de código bajo para **revisiones sistemáticas automatizadas de la literatura** a través de agentes de IA.
- [LitLLM/LitLLM](https://github.com/LitLLM/LitLLM) — Asistente de revisión de la literatura impulsada por AI utilizando RAG para secciones de trabajo relacionados precisas y bien estructuradas en escritura académica.
- [Agente Laboratorio](https://agentlaboratory.github.io/) — Oleoducto de investigación en tres fases: Revisión de literatura → Experimentación → Redacción de informes, con agentes especializados para cada fase.
- [Happyhappy-jun/write-driven-autoresearch](https://github.com/happyhappy-jun/writing-driven-autoresearch) — Arnés de estilo autobús de búsqueda que mantiene un papel presentado desde el primer minuto y conduce cada experimento de las afirmaciones en ese borrador, bucle modifica → medida → verificar → revisión. Primer lugar en el [Ralphthon@ICML 2026](https://luma.com/hjuo7auc) hackathon de investigación autónoma.
- [AutoResearch-Factory/Agon](https://github.com/AutoResearch-Factory/Agon) — Orquestador de investigación final a extremo construido sobre un principio de piedra angular, Prompt Economy (lazos reutilizables, no la única salida), más cinco reglas de apoyo; corre círculos científicos/codificadores/audidores a través de 10+ disciplinas, el mismo linaje reutilizable-laop como autoescucha pero escalado a programas de investigación completos.

### Plataforma Puertos &amp; Hardware Forks

- [gianfrancopiana/openclaw-autoresearch](https://github.com/gianfrancopiana/openclaw-autoresearch) — Puerto OpenClaw de pi-autoresearch; bucle de experimento autónomo para cualquier objetivo de optimización con puntuación de confianza estadística.
- [miolini/autoresearch-macos](https://github.com/miolini/autoresearch-macos) — Tinta macOS ampliamente adoptada que adapta la investigación preliminar de automóviles para Apple Silicon / MPS mientras preserva la forma original del lazo.
- [trevin-creator/autoresearch-mlx](https://github.com/trevin-creator/autoresearch-mlx) — Puerto de silicona MLX nativo de Apple que mantiene el presupuesto fijo `val_bpb` bucle mientras elimina la dependencia PyTorch/CUDA por completo.
- [jsegov/autoresearch-win-rtx](https://github.com/jsegov/autoresearch-win-rtx) — Tinta RTX nativa de Windows centrada en las GPUs NVIDIA de consumo, con suelos VRAM explícitos y una ruta práctica de configuración de escritorio.
- [iii-hq/n-autoresearch](https://github.com/iii-hq/n-autoresearch) — Multi-GPU infraestructura de autobuses con seguimiento de experimentos estructurados, estrategia de búsqueda adaptativa, recuperación de fallos y orquestación deseable en torno al clásico `train.py` bucle.
- [lucasgelfond/autoresearch-webgpu](https://github.com/lucasgelfond/autoresearch-webgpu) — Puerto Navegador/WebGPU que permite a los agentes generar código de entrenamiento, ejecutar experimentos en-browser y alimentar resultados de nuevo en el bucle sin una configuración de Python.
- [tonitangpotato/autoresearch-engram](https://github.com/tonitangpotato/autoresearch-engram) - Fork with **memoria cognitiva persistente** — recuperación ponderada con frecuencia de conocimientos cruzados para mejorar la continuidad del experimento.
- [Puerto Colab/Kaggle T4](https://github.com/karpathy/autoresearch/issues/208) — Adapta la búsqueda automática de GPUs T4 gratuitos (Google Colab / Kaggle) con cero costo y cero configuración local. Cambios clave: Atención Flash 3 → PyTorch SDPA, elimina la dependencia del núcleo sólo H100.
- [ArmanJR-Lab/autoautoresearch](https://github.com/ArmanJR-Lab/autoautoresearch) — puerto Jetson AGX Orin con **director** — un binario Go que actúa como un "director creativo" inyectando novedad (arxiv papers + DeepSeek Reasoner) en el bucle para escapar de la minima local. Incluye la comparación multiexperiment (baseline vs director-guía) con el análisis detallado de los puestos.

### Adaptaciones de dominio-específico

- [mattprusak/autoresearch-genealogy](https://github.com/mattprusak/autoresearch-genealogy) — Aplica el patrón de autobuses a la genealogía, utilizando indicaciones estructuradas, guías de archivos, cheques de fuentes y flujos de trabajo de bóveda para expandir y verificar iterativamente la investigación de historia familiar.
- [ArchishmanSengupta/autovoiceevals](https://github.com/ArchishmanSengupta/autovoiceevals) — Usa calentadores adversarios y ediciones rápidas para endurecer los agentes de voz AI a través de Vapi, AI más pequeña y ElevenLabs.
- [chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) — Aplica el bucle de retención de autoescritura o revertir a los agentes comerciales, optimizando los impulsos y orquestación de portafolios contra la relación de cuerda en lugar de pérdida de modelos.
- [RightNow-AI/autokernel](https://github.com/RightNow-AI/autokernel) — Aplica el bucle de autoescucha a la optimización del núcleo GPU: cuellos de perfil, edición de un núcleo, parámetro de referencia, mantenimiento o reversión, repetición.
- [ElliotXie/autozyme](https://github.com/ElliotXie/autozyme) — Marco multiagente que aplica el bucle de retención o revertir de autobuses al software científico de CPU: perfilar una función de destino, generar un candidato de optimización, punto de referencia para la velocidad preservando al mismo tiempo los productos originales, mantener o revertir, repetir.
- [Agente-Analytics/autoresearch-growth](https://github.com/Agent-Analytics/autoresearch-growth) — Aplica autoescucha para posicionamiento de landing-page y candidatos de prueba A/B, usando instantáneas analíticas y resultados de experimentos medidos para semillas posteriores.
- [Rkcr7/autoresearch-sudoku](https://github.com/Rkcr7/autoresearch-sudoku) — Aumenta el flujo de trabajo de autoescuchas donde un agente de IA reescribe iterativamente y hace referencias a un solucionador de sudoku de Rust, golpeando finalmente a los principales solvers humanos construidos en conjuntos de puntos de referencia duros.
- [jeongph/autospec](https://github.com/jeongph/autospec) — Lee las reglas del negocio en lengua natural y construye autónomamente un servicio de arranque de primavera con pruebas a través del bucle de mantenimiento o devolución. Evalua con Gradle build + JUnit XML. Esqueleto de 119 líneas a 950 líneas en 5 ciclos.
- [vlasenkoalexey/tpu_rendimiento_autobús_wiki](https://github.com/vlasenkoalexey/tpu_performance_autoresearch_wiki) — Aplica el bucle de retención o devolución de autobuses para el rendimiento del modelo TPU (MFU / tokens-per-sec) en el hardware v6e: perfiles cada uno corre a través de un servidor XProf MCP, hace un cambio de código de modelo por experimento, y mantiene o revierte contra MFU medida. Combina el bucle con un wiki LLM de estilo Karpathy para conocimientos de dominio y rastros de optimización de experiencia; incluye estudios de casos Llama3-8B y Qwen3-8B en JAX y carriles de antorcha.

### Evaluación &quot;

- [snap-stanford/MLAgentBench](https://github.com/snap-stanford/MLAgentBench) — Benchmark suite para evaluar agentes de IA en tareas de experimentación de ML. 13 tareas de CIFAR-10 a BabyLM.
- [OpenAI/mle-bench](https://github.com/openai/mle-bench) — Punto de referencia de OpenAI para medir lo bien que los agentes de IA realizan en la ingeniería ML.
- [chchenhui/mlrbench](https://github.com/chchenhui/mlrbench) — MLR-Bench: Evaluando agentes de IA en investigación de ML de composición abierta. 201 tareas de los talleres NeurIPS/ICLR/ICML.
- [gersteinlab/ML-Bench](https://github.com/gersteinlab/ML-Bench) — Evalua los LLMs y los agentes para las tareas de ML en el código de nivel de depósito.
- [THUDM/AgentBench](https://github.com/THUDM/AgentBench) - Punto de referencia completo para la evaluación LLM-as-Agent en 8 entornos distintos. ICLR 2024.

### Recursos relacionados

- [ai-agents-2030/awesome-deep-research-agent](https://github.com/ai-agents-2030/awesome-deep-research-agent) - Lista curada de documentos y sistemas de agentes de investigación profundos.
- [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) — Documentos sobre métodos de optimización de agentes de LLM.
- [VoltAgent/awesome-ai-agent-papers](https://github.com/VoltAgent/awesome-ai-agent-papers) — Documentos de agentes de IA curados de 2026 — ingeniería de agentes, memoria, evaluación, flujos de trabajo y sistemas autónomos.
- [masamasa59/ai-agent-papers](https://github.com/masamasa59/ai-agent-papers) — Documentos de investigación de agentes de inteligencia artificial actualizados bisemanalmente mediante búsqueda automatizada de arxiv con selección curada.
- [tmgthb/Autonomous-Agents](https://github.com/tmgthb/Autonomous-Agents) — Documentos de investigación de agentes autónomos, actualizados diariamente.
- [HKUST-KnowComp/Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) — Encuesta EMNLP 2025 sobre LLMs en descubrimiento científico.
- [openags/Awesome-AI-Scientist-Papers](https://github.com/openags/Awesome-AI-Scientist-Papers) — Colección de documentos científicos de AI / Robot.
- [agenteicscience.github.io](https://agenticscience.github.io/) — Encuesta: "De la AI para la Ciencia a la Ciencia Agentic: Una encuesta sobre el descubrimiento científico autónomo".
- [dspy.ai/GEPA](https://dspy.ai/api/optimizers/GEPA/overview/) — DSPy integration of GEPA reflective prompt optimizer for compound AI systems.
- [OpenAI Cookbook: Agentes autónomos](https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining) — Cookbook para la reeducación de agentes autónomos utilizando la evolución reflexiva de estilo GEPA.
- [WecoAI/awesome-autoresearch](https://github.com/WecoAI/awesome-autoresearch) — Lista curada de casos de AutoResearch utilizan trazas verificables y gráficos de progreso, organizados por dominio (entrenamiento LLM, núcleos GPU, agentes de voz, comercio, etc.).

<!-- AUTORESEARCH-END -->

---

## Cómo contribuir

¡Agradecemos las contribuciones a esta lista! Antes de contribuir, por favor tome un momento para revisar nuestro [Directrices de contribución](contributing.md)Estas directrices ayudarán a asegurar que sus contribuciones se ajusten a nuestros objetivos y cumplan con nuestros estándares de calidad y relevancia.

**Lo que estamos buscando:**
- Nuevos documentos de alta calidad, herramientas o recursos con una breve descripción de por qué importan
- Actualizaciones a las entradas existentes (enlaces rotos, información obsoleta)
- Corrección a cuenta de estrellas, precios o detalles del modelo
- Traducciones y mejoras de accesibilidad

**Normas de calidad:**
- Todos los instrumentos deben mantenerse activamente (actualizados en los últimos 6 meses)
- Los documentos deben provenir de lugares examinados por pares o tener una adopción comunitaria significativa
- Los conjuntos de datos deben ser accesibles públicamente
- Por favor incluya una descripción de una sola línea que explica por qué el recurso es valioso

¡Gracias por su interés en contribuir a este proyecto!

<a href="https://github.com/promptslab/Awesome-Prompt-Engineering/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=promptslab/Awesome-Prompt-Engineering" />
</a>

---

<p align="center">
  <sub>Mantenido por <a href="https://promptslab.github.io">PromptsLab</a> · <a href="https://github.com/promptslab/Awesome-Prompt-Engineering">Star this repo</a> si lo encuentras útil!</sub>
</p>
