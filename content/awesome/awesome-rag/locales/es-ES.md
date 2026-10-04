# 😎 Recursos imprescindibles sobre generación aumentada por recuperación (RAG)
[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Danielskry/Awesome-RAG) [![Awesome-RAG Agent Plugin](https://img.shields.io/badge/Agent_Plugin-Available-blueviolet)](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin)

Una selección de herramientas, frameworks, técnicas y materiales de aprendizaje para crear sistemas de generación aumentada por recuperación (RAG). Este repositorio recopila el ecosistema RAG y ofrece enlaces a fuentes autorizadas, tutoriales e implementaciones para explorar y crear aplicaciones RAG.

También está [disponible como complemento de agente](https://github.com/Danielskry/Awesome-RAG-Agent-Plugin) para VS Code, GitHub Copilot CLI y Claude Code.

## Descripción general

La **generación aumentada por recuperación (RAG)** es una técnica avanzada de IA generativa que mejora los modelos de lenguaje grandes (LLM) al recuperar e incorporar dinámicamente contexto pertinente de fuentes de conocimiento externas durante la generación. A diferencia de los LLM tradicionales, que dependen únicamente del conocimiento preentrenado, los sistemas RAG permiten acceder a información actualizada, específica de un dominio o propia, lo que mejora notablemente la precisión, reduce las alucinaciones y permite integrar conocimiento en tiempo real.

### Ventajas principales

- **Reducción de alucinaciones**: Fundamenta las respuestas en información factual recuperada
- **Adaptación al dominio**: Permite que los LLM trabajen con conocimientos especializados sin ajuste fino
- **Actualizaciones en tiempo real**: Incorpora información reciente sin volver a entrenar el modelo
- **Eficiencia de costes**: Más económico que el ajuste fino para tareas específicas de un dominio
- **Transparencia**: Proporciona atribución de fuentes para el contenido generado
- **Privacidad y seguridad**: Mantiene los datos sensibles en bases de conocimiento privadas

## Contenido

- [ℹ️ Información general sobre RAG](#ℹ%EF%B8%8F-general-information-on-rag)
- [🏗️ Patrones de arquitectura](#%EF%B8%8F-architecture-patterns)
- [🎯 Enfoques avanzados](#-advanced-approaches)
- [🧰 Frameworks que facilitan RAG](#-frameworks-that-facilitate-rag)
- [🐍 Ecosistema de Python para RAG](#-python-ecosystem-for-rag)
- [🛠️ Técnicas](#-techniques)
- [📊 Métricas y evaluación](#-metrics--evaluation)
- [💾 Bases de datos](#-databases)
- [🔌 Implementaciones de RAG específicas de plataformas](#-platform-specific-rag-implementations)
- [🚀 Consideraciones para producción](#-production-considerations)
- [💡 Buenas prácticas](#-best-practices)

## ℹ️ Información general sobre RAG

RAG aborda una limitación fundamental de los LLM: su fecha de corte de conocimiento estática y su incapacidad para acceder a información externa. Las implementaciones tradicionales de RAG emplean un proceso de recuperación que enriquece los prompts del LLM con documentos pertinentes de una base de conocimiento. Por ejemplo, al preguntar por los materiales de reforma de una casa concreta, el LLM puede conocer aspectos generales de las reformas, pero no los detalles de esa vivienda. Un sistema RAG puede recuperar documentos relevantes (por ejemplo, planos, especificaciones de materiales y normativas locales de construcción) para ofrecer respuestas precisas y contextualizadas.

### Recursos de implementación

#### Tutoriales y ejemplos de Python

- Implementación básica y completa de [RAG en Python](https://github.com/Danielskry/LangChain-Chroma-RAG-demo-2024): ejemplo integral de RAG con LangChain y Chroma
- [Tutorial de RAG de LangChain](https://python.langchain.com/docs/use_cases/question_answering/): guía completa para crear aplicaciones RAG
- [Tutorial de RAG de LlamaIndex](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/): primeros pasos con LlamaIndex para RAG
- [Pipeline RAG de Haystack](https://docs.haystack.deepset.ai/docs/retrieval-augmented-generation): creación de pipelines RAG con Haystack
- [Técnicas de RAG](https://github.com/NirDiamant/RAG_Techniques): colección completa y de código abierto de técnicas avanzadas de generación aumentada por recuperación, en forma de notebooks Jupyter ejecutables.
- [Sistema de entrevistas con RAG](https://github.com/ather-techie/rag-interview-system): sistema de preparación de entrevistas basado en RAG, con 418 pares de preguntas y respuestas seleccionados (de nivel básico a avanzado) que cubren 29 patrones de arquitectura RAG.

- [Búsqueda con Jev y Milvus](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev): nueve notebooks ejecutables de Python que combinan embeddings de Gemini, recuperación con Milvus y evaluaciones de Jev para reordenar resultados, filtrar contexto, detener búsquedas, enrutar, reutilizar cachés, curar, aplicar barreras de seguridad y evaluar.

#### Producción y buenas prácticas

- [Patrones y buenas prácticas de RAG en producción](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): estrategias de optimización de RAG listas para producción
- [Guía de producción de LangChain](https://python.langchain.com/docs/production/): despliegue de aplicaciones de LangChain en producción
- [Buenas prácticas de Python asíncrono](https://docs.python.org/3/library/asyncio-dev.html): escritura de código Python asíncrono eficiente para aplicaciones de IA

## 🏗️ Patrones de arquitectura

Los sistemas RAG pueden diseñarse con distintos patrones según los requisitos:

- **RAG ingenuo**: pipeline básico de recuperación y generación, sin optimización
- **RAG avanzado**: incorpora reformulación de consultas, reordenamiento y compresión del contexto
- **RAG modular**: componentes componibles para recuperación, clasificación y generación
- **RAG agéntico**: agentes dirigidos por LLM que deciden dinámicamente qué recuperar
- **Self-RAG**: modelos que reflexionan sobre la calidad de la recuperación y ajustan sus estrategias
- **Graph RAG**: aprovecha grafos de conocimiento para recuperar información estructurada
- **RAG basado en razonamiento**: utiliza razonamiento de LLM en varios pasos para planificar, navegar y ejecutar la recuperación

## 🎯 Enfoques avanzados

Las implementaciones de RAG varían en complejidad: desde la simple recuperación de documentos hasta técnicas avanzadas con ciclos de retroalimentación iterativos, sistemas multiagente y mejoras específicas de cada dominio. Entre los enfoques modernos se incluyen:

- [Vision-RAG](https://www.youtube.com/watch?v=npkp4mSweEg): incorpora páginas completas como imágenes para que los modelos de visión razonen directamente, sin analizar texto como en el RAG textual.
- [Cache-Augmented Generation (CAG)](https://medium.com/@ronantech/cache-augmented-generation-cag-in-llms-a-step-by-step-tutorial-6ac35d415eec): precarga documentos pertinentes en el contexto del modelo y almacena el estado de inferencia (caché de clave-valor o KV).
- [Agentic RAG](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/): también conocido como agentes de recuperación, puede tomar decisiones sobre los procesos de recuperación.
- [A-RAG](https://github.com/Ayanami0730/arag): RAG agéntico con interfaces de recuperación jerárquicas (por palabras clave, semánticas y nivel de fragmento), que permiten a los agentes LLM buscar y recuperar información de forma autónoma con distintos niveles de granularidad. ([Artículo](https://arxiv.org/abs/2602.03442))
- [Corrective RAG](https://arxiv.org/pdf/2401.15884.pdf) (CRAG): métodos para corregir o refinar la información recuperada antes de integrarla en las respuestas del LLM.
- [Retrieval-Augmented Fine-Tuning](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/raft-a-new-way-to-teach-llms-to-be-better-at-rag/ba-p/4084674) (RAFT): técnicas para ajustar específicamente los LLM y mejorar las tareas de recuperación y generación.
- [Self Reflective RAG](https://selfrag.github.io/): modelos que ajustan dinámicamente las estrategias de recuperación según la retroalimentación sobre el rendimiento del modelo.
- [RAG Fusion](https://arxiv.org/abs/2402.03367): técnicas que combinan varios métodos de recuperación para mejorar la integración del contexto.
- [Temporal Augmented Retrieval](https://adam-rida.medium.com/temporal-augmented-retrieval-tar-dynamic-rag-ad737506dfcc) (TAR): tiene en cuenta los datos sensibles al tiempo durante la recuperación.
- [Plan-then-RAG](https://arxiv.org/abs/2406.12430) (PlanRAG): estrategias que incorporan una fase de planificación antes de ejecutar RAG en tareas complejas.
- [GraphRAG](https://github.com/microsoft/graphrag): enfoque estructurado que utiliza grafos de conocimiento para mejorar la integración del contexto y el razonamiento.
- [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag): sistema RAG con grafos de conocimiento para analizar bases de código multilingües.
- [FLARE](https://medium.com/etoai/better-rag-with-active-retrieval-augmented-generation-flare-3b66646e2a9f): enfoque que incorpora generación aumentada por recuperación activa para mejorar la calidad de las respuestas.
- [GNN-RAG](https://github.com/cmavro/GNN-RAG): recuperación mediante redes neuronales de grafos para el razonamiento de modelos de lenguaje grandes.
- [Multimodal RAG](https://developer.nvidia.com/blog/an-easy-introduction-to-multimodal-retrieval-augmented-generation/): amplía RAG para admitir varias modalidades, como texto, imágenes y audio.
- [VideoRAG](https://arxiv.org/abs/2501.05874): amplía RAG a vídeos mediante grandes modelos de lenguaje de vídeo (LVLM), que recuperan e integran contenido visual y textual para la generación multimodal.
- [REFRAG](https://arxiv.org/pdf/2509.01092): optimiza la decodificación de RAG comprimiendo el contexto recuperado en embeddings antes de generar, lo que reduce la latencia sin perder calidad de salida.
- [InstructRAG](https://github.com/weizhepei/InstructRAG): mejora los sistemas RAG mediante ajuste fino basado en instrucciones y razonamientos sintetizados por el propio modelo, para mejorar la calidad de recuperación y generación.
- [PageIndex](https://github.com/VectifyAI/PageIndex): framework RAG basado en razonamiento y sin vectores que crea árboles jerárquicos de documentos y recupera información mediante búsquedas en árboles guiadas por LLM, en lugar de embeddings y similitud vectorial. Elimina la fragmentación y las bases de datos vectoriales, y ofrece una recuperación explicable y contextualizada para documentos profesionales complejos.

## 🧰 Frameworks que facilitan RAG

- [Haystack](https://github.com/deepset-ai/haystack): framework de orquestación de LLM para crear aplicaciones LLM personalizables y listas para producción.
- [LangChain](https://python.langchain.com/docs/modules/data_connection/): framework de propósito general para trabajar con LLM.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel): SDK de Microsoft para desarrollar aplicaciones de IA generativa.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/): framework para conectar fuentes de datos personalizadas con LLM.
- [Dify](https://github.com/langgenius/dify): plataforma de código abierto para desarrollar aplicaciones con LLM.
- [Verba](https://github.com/weaviate/Verba): aplicación de código abierto para usar RAG de forma inmediata.
- [Mastra](https://github.com/mastra-ai/mastra): framework de TypeScript para crear aplicaciones de IA.
- [Letta](https://github.com/letta-ai/letta): framework de código abierto para crear aplicaciones LLM con estado.
- [Flowise](https://github.com/FlowiseAI/Flowise): interfaz de arrastrar y soltar para crear flujos LLM personalizados.
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg): biblioteca políglota de inteligencia documental (núcleo Rust con enlaces para Python, TypeScript y Go) que extrae texto, tablas y metadatos de más de 62 formatos de documentos para pipelines de ingesta RAG.
- [Swiftide](https://github.com/bosun-ai/swiftide): framework de Rust para crear aplicaciones LLM modulares y de procesamiento en streaming.
- [CocoIndex](https://github.com/cocoindex-io/cocoindex): framework ETL para indexar datos para IA, como RAG, con actualizaciones incrementales en tiempo real.
- [Pathway](https://github.com/pathwaycom/pathway/): framework ETL de Python de código abierto y alto rendimiento, con entorno de ejecución Rust y compatibilidad con más de 300 fuentes de datos.
- [Pathway AI Pipelines](https://github.com/pathwaycom/llm-app/): framework RAG listo para producción que admite indexación, recuperación y seguimiento de cambios en tiempo real en diversas fuentes de datos.
- [LiteLLM](https://docs.litellm.ai/): interfaz unificada para varios proveedores de LLM (OpenAI, Anthropic, Hugging Face y Replicate), con registro, supervisión y seguimiento de costes.
- [Agentset](https://github.com/agentset-ai/agentset): plataforma RAG de código abierto lista para producción, con razonamiento agéntico integrado, búsqueda híbrida y compatibilidad multimodal.
- [OpenAgent](https://github.com/the-open-agent/openagent): plataforma de asistente de IA personal de código abierto que combina LLM, una base de conocimiento RAG y ciclos de agente autónomo con uso del navegador, ejecución de shell y compatibilidad con herramientas MCP.
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research): framework local de investigación profunda agéntica con recuperación de varias fuentes (web, arXiv, PubMed y documentos privados) y más de 20 estrategias de investigación.

## 🐍 Ecosistema de Python para RAG

Python cuenta actualmente con el ecosistema RAG más maduro y ofrece un amplio soporte para
LLM, embeddings, bases de datos vectoriales, evaluación y herramientas de producción.

Consulta la guía completa: [Ecosistema de Python para RAG](docs/python-ecosystem.md)

## 🛠️ Técnicas

### Limpieza de datos

- [Técnicas de limpieza de datos](https://medium.com/intel-tech/four-data-cleaning-techniques-to-improve-large-language-model-llm-performance-77bee9003625): pasos de preprocesamiento para depurar los datos de entrada y mejorar el rendimiento del modelo.

### Diseño de prompts

- **Estrategias**
  - [Etiquetado y marcado](https://python.langchain.com/v0.1/docs/use_cases/tagging/): añade etiquetas semánticas a los datos recuperados para mejorar su relevancia.
  - [Cadena de pensamiento (CoT)](https://www.promptingguide.ai/techniques/cot): anima al modelo a analizar los problemas paso a paso antes de responder.
  - [Cadena de verificación (CoVe)](https://sourajit16-02-93.medium.com/chain-of-verification-cove-understanding-implementation-e7338c7f4cb5): pide al modelo que verifique cada paso de su razonamiento para garantizar su precisión.
  - [Autoconsistencia](https://www.promptingguide.ai/techniques/consistency): genera varias rutas de razonamiento y selecciona la respuesta más coherente.
  - [Prompting de cero ejemplos](https://www.promptingguide.ai/techniques/zeroshot): diseña prompts que guían al modelo sin ejemplos.
  - [Prompting con pocos ejemplos](https://python.langchain.com/docs/how_to/few_shot_examples/): proporciona algunos ejemplos en el prompt para mostrar el formato de respuesta deseado.
  - [Prompting de razonamiento y acción (ReAct)](https://www.promptingguide.ai/techniques/react): combina razonamiento (por ejemplo, CoT) con acción (por ejemplo, llamadas a herramientas).
- **Caché**
  - [Caché de prompts](https://medium.com/@1kg/prompt-cache-what-is-prompt-caching-a-comprehensive-guide-e6cbae48e6a3): optimiza los LLM al almacenar y reutilizar estados de atención precalculados.
- **Estructuración**
  - [Notación de objetos orientada a tokens](https://github.com/toon-format/toon): formato JSON compacto y determinista para prompts de LLM.

### Fragmentación

La estrategia de fragmentación es una de las decisiones más importantes al diseñar sistemas RAG y afecta directamente a la precisión de recuperación y a la calidad del contexto. El enfoque óptimo depende del tipo de documentos, las características del dominio y los patrones de consulta.

- **[Fragmentación de tamaño fijo](https://medium.com/@anuragmishra_27746/five-levels-of-chunking-strategies-in-rag-notes-from-gregs-video-7b735895694d)**
  - **Caso de uso**: documentos sencillos y uniformes cuya estructura es menos importante
  - **Características**: divide el texto en segmentos de tamaño uniforme (normalmente de 256 a 512 tokens) con un solapamiento configurable del 10 al 20 %
  - **Ventajas**: fácil de implementar, tamaños de fragmento predecibles y procesamiento eficiente
  - **Desventajas**: puede dividir frases y párrafos, perder la estructura del documento y fragmentar unidades semánticas
  - **Implementación**: [CharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/character_text_splitter/) (LangChain), [SentenceSplitter](https://docs.llamaindex.ai/en/stable/api_reference/node_parsers/sentence_splitter/) (LlamaIndex)

- **[Fragmentación recursiva](https://medium.com/@AbhiramiVS/chunking-methods-all-to-know-about-it-65c10aa7b24e)**
  - **Caso de uso**: documentos con estructura jerárquica (Markdown, HTML, código)
  - **Características**: divide recursivamente por separadores (párrafos → frases → palabras) hasta alcanzar el tamaño de fragmento deseado
  - **Ventajas**: conserva los límites naturales y la jerarquía del documento, y mejora la coherencia semántica
  - **Desventajas**: es más compleja, produce tamaños de fragmento variables y requiere configurar cuidadosamente los separadores
  - **Implementación**: [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/) (LangChain)

- **[Fragmentación basada en documentos](https://medium.com/@david.richards.tech/document-chunking-for-rag-ai-applications-04363d48fbf7)**
  - **Caso de uso**: documentos estructurados con secciones claras (encabezados Markdown, secciones de PDF, registros de bases de datos)
  - **Características**: segmenta según los metadatos del documento, las señales de formato o los elementos estructurales
  - **Ventajas**: mantiene la estructura del documento, conserva el contexto y permite recuperar información enriquecida con metadatos
  - **Desventajas**: requiere entradas estructuradas y puede crear fragmentos demasiado grandes o pequeños
  - **Implementación**: [MarkdownHeaderTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/markdown_header_metadata/) (LangChain)
  - **Multimodal**: procesa imágenes y texto con modelos como [OpenCLIP](https://github.com/mlfoundations/open_clip)

- **[Fragmentación semántica](https://www.youtube.com/watch?v=8OJC21T2SL4&t=1933s)**
  - **Caso de uso**: documentos en los que la coherencia semántica es fundamental (narraciones, documentación técnica)
  - **Características**: utiliza la similitud entre embeddings para identificar límites semánticos naturales
  - **Ventajas**: conserva unidades semánticas, se adapta al contenido y mejora la relevancia de la recuperación
  - **Desventajas**: es costosa desde el punto de vista computacional, requiere un modelo de embeddings y produce tamaños de fragmento menos predecibles
  - **Ideal para**: recuperación de alta calidad donde la conservación del contexto es primordial

- **[Fragmentación agéntica](https://youtu.be/8OJC21T2SL4?si=8VnYaGUaBmtZhCsg&t=2882)**
  - **Caso de uso**: documentos complejos que requieren decisiones inteligentes de segmentación
  - **Características**: utiliza LLM para analizar el contenido y determinar los límites óptimos de los fragmentos
  - **Ventajas**: es muy adaptable, comprende el contexto y puede aplicar conocimiento del dominio
  - **Desventajas**: tiene un coste elevado, el procesamiento es más lento y requiere acceso a una API de LLM
  - **Ideal para**: dominios especializados en los que falla la fragmentación estándar

- **[Fragmentación adaptativa](https://github.com/ekimetrics/adaptive-chunking)**
  - **Caso de uso**: colecciones mixtas de documentos donde distintos documentos se benefician de distintas estrategias de división
  - **Características**: puntúa varios métodos de fragmentación con métricas intrínsecas y selecciona el mejor para cada documento
  - **Ventajas**: es más flexible que una estrategia única, conserva la estructura y la coherencia semántica, y admite separadores y métricas personalizados
  - **Desventajas**: añade costes de evaluación y complejidad de implementación frente a la fragmentación de tamaño fijo o recursiva

**Buenas prácticas de fragmentación:**
- **Estrategia de solapamiento**: usa un solapamiento del 10 al 20 % para mantener el contexto entre fragmentos
- **Optimización del tamaño**: busca un equilibrio en el tamaño del fragmento (los más grandes aportan más contexto; los más pequeños, mayor precisión)
- **Conservación de metadatos**: conserva la estructura, los encabezados y el formato del documento en los metadatos del fragmento
- **Multigranularidad**: considera enfoques jerárquicos (fragmentos pequeños para recuperar y más grandes para aportar contexto)

### Representaciones vectoriales (embeddings)

Los embeddings son la base de la búsqueda semántica en los sistemas RAG. La elección del modelo de embeddings influye notablemente en la calidad de recuperación.

- **Selección del modelo**
  - **[Clasificación MTEB](https://huggingface.co/spaces/mteb/leaderboard)**: benchmark completo para evaluar modelos de embeddings en varias tareas e idiomas. Considera modelos que rindan bien en las tareas pertinentes para tu caso de uso (recuperación, agrupamiento y clasificación).
  - **Características del modelo**: evalúa los modelos según estos criterios:
    - **Dimensiones**: las dimensiones más altas (768-1024) suelen ofrecer mayor calidad, pero aumentan los costes de almacenamiento y cálculo
    - **Longitud del contexto**: asegúrate de que los modelos admitan el tamaño de los fragmentos de tus documentos
    - **Compatibilidad multilingüe**: necesaria para aplicaciones internacionales
    - **Especialización por dominio**: modelos de propósito general frente a modelos especializados (por ejemplo, científicos, jurídicos o médicos)
  
- **Embeddings personalizados**
  - **Ajuste fino**: adapta modelos preentrenados a tu dominio mediante aprendizaje contrastivo, pérdida triplete o ajuste fino supervisado
  - **Entrenamiento desde cero**: adecuado para dominios muy especializados con suficientes datos etiquetados
  - **Embeddings multimodales**: para aplicaciones que requieren comprender texto, imágenes o audio (por ejemplo, CLIP e ImageBind)
  - **Métodos de conjunto**: combina varios modelos de embeddings para mejorar la robustez

### Recuperación

- **Métodos de búsqueda**
  - [Índice plano de almacén vectorial](https://weaviate.io/developers/academy/py/vector_index/flat)
    - Forma sencilla y eficiente de recuperar información.
    - El contenido se vectoriza y se almacena como vectores de contenido planos.
  - [Recuperación con índice jerárquico](https://pixion.co/blog/rag-strategies-hierarchical-index-retrieval)
    - Reduce jerárquicamente los datos en distintos niveles.
    - Ejecuta las recuperaciones siguiendo un orden jerárquico.
  - [Preguntas hipotéticas](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Se utiliza para aumentar la similitud entre los fragmentos de la base de datos y las consultas (al igual que HyDE).
    - Se usa un LLM para generar preguntas específicas para cada fragmento de texto.
    - Convierte estas preguntas en embeddings vectoriales.
    - Durante la búsqueda, compara las consultas con este índice de vectores de preguntas.
  - [Embeddings de documentos hipotéticos (HyDE)](https://pixion.co/blog/rag-strategies-hypothetical-questions-hyde)
    - Se utiliza para aumentar la similitud entre los fragmentos de la base de datos y las consultas (al igual que las preguntas hipotéticas).
    - Se usa un LLM para generar una respuesta hipotética basada en la consulta.
    - Convierte esta respuesta en un embedding vectorial.
    - Compara el vector de la consulta con el vector de la respuesta hipotética.
  - [Recuperación de pequeño a grande](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/small_to_big_rag/small_to_big_rag.ipynb)
    - Mejora la recuperación al usar fragmentos pequeños para buscar y fragmentos más grandes para aportar contexto.
    - Los fragmentos hijos pequeños hacen referencia a fragmentos padres más grandes.
  - [Recuperación contextual](https://www.anthropic.com/engineering/contextual-retrieval)
    - Mejora la precisión de recuperación de RAG al conservar el contexto del documento que suele perderse durante la fragmentación.
    - Cada fragmento de texto se enriquece con un resumen breve generado por un modelo antes de crear embeddings e indexarlo, lo que produce embeddings contextuales y BM25 contextual.
    - Este enfoque combinado mejora tanto la coincidencia semántica como la léxica, y reduce los fallos de recuperación cuando se combina con el reordenamiento.
  - [Recuperación adaptativa](https://arxiv.org/abs/2403.14403)
    - Decide dinámicamente cuándo y cuánto recuperar durante la generación.
  - [Reformulación y expansión de consultas](https://haystack.deepset.ai/cookbook/query-expansion)
    - Reescribe o amplía automáticamente la consulta antes de recuperar información para aumentar la exhaustividad.
    - Resulta útil para consultas de usuario largas o ambiguas.
- **[Reordenamiento](https://developer.nvidia.com/blog/enhancing-rag-pipelines-with-re-ranking/)**: mejora los resultados de búsqueda en los pipelines RAG reordenando los documentos recuperados inicialmente y dando prioridad a los más pertinentes semánticamente para la consulta.

### Modelos de juicio y decisión

Los modelos de juicio toman decisiones semánticas acotadas sobre el contenido recuperado, las consultas, las respuestas generadas o el estado del proceso. A diferencia de los LLM generativos, pueden usarse como puntos de decisión programables en los pipelines RAG para reordenar, filtrar, enrutar, verificar y evaluar.

- **[Jev](https://typesafe.ai/)**: modelo System One de TypeSafe AI para tomar decisiones tipadas con rapidez. En RAG, puede servir para reordenar, filtrar, enrutar, verificar, aplicar barreras de seguridad y evaluar.
- **[AnyJev](https://github.com/nokia-applied-research/AnyJev)**: convierte LLM abiertos en modelos de decisión tipada al estilo Jev, con corrección del sesgo sin etiquetas y calibración opcional para decisiones basadas en umbrales.

### Calidad y seguridad de las respuestas

Garantizar respuestas de calidad, seguras y fiables es fundamental para los sistemas RAG de producción.

- **Mitigación de alucinaciones**
  - **[Técnicas de detección](https://machinelearningmastery.com/rag-hallucination-detection-techniques/)**: implementa métodos para identificar cuándo los modelos generan información sin fundamento.
  - **Verificación de fundamentación**: contrasta las afirmaciones generadas con el contexto recuperado.
  - **Puntuación de confianza**: asigna puntuaciones de confianza a las respuestas generadas según la calidad de las fuentes.
  - **Atribución de fuentes**: exige citas para todas las afirmaciones factuales.
  - **Calidad de recuperación**: mejora la precisión de recuperación para reducir el riesgo de alucinaciones.

- **Barreras de seguridad y protección**
  - **[Guía de implementación](https://developer.ibm.com/tutorials/awb-how-to-implement-llm-guardrails-for-rag-applications/)**: enfoque integral para implementar mecanismos de seguridad.
  - **Moderación de contenido**: filtra contenido dañino, sesgado o inapropiado tanto en la entrada como en la salida.
  - **Mitigación de sesgos**: detecta y mitiga los sesgos en el contenido recuperado y en las respuestas generadas.
  - **Verificación de datos**: comprueba las afirmaciones con fuentes autorizadas o bases de conocimiento.
  - **Detección de toxicidad**: utiliza clasificadores para identificar y filtrar contenido tóxico.

- **Prevención de inyección de prompts**
  - **[Guía de seguridad](https://hiddenlayer.com/innovation-hub/prompt-injection-attacks-on-llms/)**: comprensión y prevención de ataques de inyección de prompts.
  - **Validación de entradas**: valida y sanea rigurosamente todas las entradas externas mediante listas de permitidos, límites de longitud y comparación de patrones.
  - **Separación de contenido**: utiliza delimitadores claros, sistemas de plantillas y prompts basados en roles para separar las instrucciones de los datos del usuario.
  - **Supervisión de salidas**: supervisa continuamente las respuestas para detectar anomalías, comportamientos inesperados o infracciones de seguridad.
  - **Limitación de frecuencia**: establece límites de frecuencia y detección de abusos para evitar ataques sistemáticos.
  - **Aislamiento en sandbox**: aísla los entornos de ejecución de LLM para limitar los posibles daños de una inyección exitosa.

## 📊 Métricas y evaluación

### Métricas de similitud para embeddings

Estas métricas miden la similitud entre embeddings, algo esencial para evaluar la eficacia con que los sistemas RAG recuperan e integran documentos o fuentes de datos externos. Al elegir las métricas de similitud adecuadas, se puede optimizar el rendimiento y la precisión del sistema RAG. También es posible crear métricas propias para un dominio o nicho concreto que capten sus matices y mejoren la relevancia.

- **[Similitud coseno](https://en.wikipedia.org/wiki/Cosine_similarity)**

  - Mide el coseno del ángulo entre dos vectores en un espacio multidimensional.
  - Es muy eficaz para comparar embeddings de texto, donde la dirección de los vectores representa información semántica.
  - Se usa habitualmente en sistemas RAG para medir la similitud semántica entre embeddings de consultas y de documentos.

- **[Producto escalar](https://en.wikipedia.org/wiki/Dot_product)**

  - Calcula la suma de los productos de las entradas correspondientes de dos secuencias de números.
  - Equivale a la similitud coseno cuando los vectores están normalizados.
  - Es sencillo y eficiente, y suele usarse con aceleración por hardware para cálculos a gran escala.

- **[Distancia euclidiana](https://en.wikipedia.org/wiki/Euclidean_distance)**

  - Calcula la distancia en línea recta entre dos puntos del espacio euclidiano.
  - Puede usarse con embeddings, pero quizá pierda eficacia en espacios de muchas dimensiones debido a la «[maldición de la dimensionalidad](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)».
  - Se usa a menudo en algoritmos de agrupamiento como K-means tras reducir la dimensionalidad.

- **[Similitud de Jaccard](https://en.wikipedia.org/wiki/Jaccard_index)**
  - Mide la similitud entre dos conjuntos finitos como el tamaño de su intersección dividido por el tamaño de su unión.
  - Resulta útil al comparar conjuntos de tokens, por ejemplo, en modelos de bolsa de palabras o comparaciones de n-gramas.
  - Es menos aplicable a embeddings continuos producidos por LLM.

> **Nota:** La similitud coseno y el producto escalar suelen considerarse las métricas más eficaces para medir la similitud entre embeddings de muchas dimensiones.

### Métricas de evaluación de respuestas

La evaluación de respuestas en soluciones RAG consiste en valorar la calidad de las salidas de los modelos de lenguaje mediante diversas métricas. Estos son algunos enfoques estructurados para evaluarlas:

- **Evaluación comparativa automatizada**

  - **[BLEU](https://en.wikipedia.org/wiki/BLEU):** evalúa el solapamiento de n-gramas entre las salidas generadas por máquinas y las de referencia, y aporta información sobre la precisión.
  - **[ROUGE](<https://en.wikipedia.org/wiki/ROUGE_(metric)>):** mide la exhaustividad comparando n-gramas, pares de palabras no contiguas o la subsecuencia común más larga con las salidas de referencia.
  - **[METEOR](https://en.wikipedia.org/wiki/METEOR):** se centra en coincidencias exactas, derivación de palabras, sinónimos y alineación para la traducción automática.

- **Evaluación humana**
  Consiste en que evaluadores humanos valoren las respuestas según:
  - **Relevancia:** correspondencia con las consultas de los usuarios.
  - **Fluidez:** calidad gramatical y estilística.
  - **Precisión factual:** verificación de las afirmaciones con fuentes autorizadas.
  - **Coherencia:** consistencia lógica de las respuestas.
  
  Entre los enfoques se incluyen:
  - **[Colas de anotación](https://docs.langchain.com/langsmith/annotation-queues):** ofrecen a los anotadores humanos una vista guiada y simplificada para adjuntar comentarios a ejecuciones específicas.

- **Evaluación de modelos**
  Aprovecha evaluadores preentrenados para comparar las salidas con diversos criterios:

  - **[TuringBench](https://turingbench.ist.psu.edu/):** ofrece evaluaciones exhaustivas en distintos benchmarks de idiomas.
  - **[Hugging Face Evaluate](https://huggingface.co/docs/evaluate/en/index):** calcula la concordancia con las preferencias humanas.

- **Dimensiones clave de evaluación**
  - **Fundamentación:** evalúa si las respuestas se basan por completo en el contexto proporcionado. Una fundamentación baja puede indicar dependencia de información alucinada o irrelevante.
  - **Integridad:** mide si la respuesta aborda todos los aspectos de una consulta.
  - **Enfoques:** puntuación de recuperación asistida por IA y verificación de intención basada en prompts.
  - **Utilización:** evalúa en qué medida los datos recuperados contribuyen a la respuesta.
  - **Análisis:** utiliza LLM para comprobar que las respuestas incluyan los fragmentos recuperados.

#### Herramientas

Estas herramientas ayudan a evaluar el rendimiento del sistema RAG, desde el seguimiento de los comentarios de los usuarios y el registro de interacciones con consultas hasta la comparación de distintas métricas de evaluación a lo largo del tiempo.

- **[LangFuse](https://github.com/langfuse/langfuse)**: herramienta de código abierto para realizar seguimiento de métricas de LLM, observabilidad y gestión de prompts.
- **[Opik](https://github.com/comet-ml/opik)**: plataforma de código abierto para observabilidad, evaluaciones y optimización de prompts de LLM.
- **[Ragas](https://docs.ragas.io/en/stable/)**: framework que facilita la evaluación de pipelines RAG.
- **[WFGY Problem Map](https://github.com/onestardao/WFGY/tree/main/ProblemMap)**: lista de comprobación de 16 modos para diagnosticar fallos de RAG y LLM.
- **[LangSmith](https://docs.smith.langchain.com/)**: plataforma para crear aplicaciones LLM de nivel de producción que permite supervisar y evaluar de cerca la aplicación.
- **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**: herramienta para calcular métricas como BLEU y ROUGE y evaluar la calidad del texto.
- **[Weights & Biases](https://wandb.ai/wandb-japan/rag-hands-on/reports/Step-for-developing-and-evaluating-RAG-application-with-W-B--Vmlldzo1NzU4OTAx)**: realiza seguimiento de experimentos, registra métricas y visualiza el rendimiento.

## 💾 Bases de datos

Las bases de datos vectoriales son componentes fundamentales de los sistemas RAG, ya que ofrecen almacenamiento eficiente y búsqueda por similitud de embeddings. La elección de una base de datos adecuada depende de factores como la escala, los requisitos de latencia, el modelo de despliegue (nube o local) y las funciones necesarias (búsqueda híbrida, filtros, etc.). La lista siguiente incluye sistemas de bases de datos aptos para aplicaciones RAG:

### Comparativas

- [Elección de una base de datos vectorial](https://benchmark.vectorview.ai/vectordbs.html)

### Motores distribuidos de procesamiento y servicio de datos:

- [Apache Cassandra](https://cassandra.apache.org/doc/latest/cassandra/vector-search/concepts.html): sistema distribuido de gestión de bases de datos NoSQL.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-vector-search): servicio de bases de datos multimodelo distribuido globalmente, con búsqueda vectorial integrada.
- [Vespa](https://vespa.ai/): motor de procesamiento y servicio de macrodatos de código abierto, diseñado para aplicaciones en tiempo real.

### Motores de búsqueda con funciones vectoriales:

- [Elasticsearch](https://www.elastic.co/elasticsearch): ofrece funciones de búsqueda vectorial además de las funcionalidades de búsqueda tradicionales.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch): motor distribuido de búsqueda y análisis, derivado de Elasticsearch.

### Bases de datos vectoriales:

- [Chroma DB](https://github.com/chroma-core/chroma): base de datos de embeddings de código abierto nativa para IA.
- [Milvus](https://github.com/milvus-io/milvus): base de datos vectorial de código abierto para aplicaciones basadas en IA.
- [Pinecone](https://www.pinecone.io/): base de datos vectorial sin servidor, optimizada para flujos de trabajo de aprendizaje automático.
- [Oracle AI Vector Search](https://www.oracle.com/database/ai-vector-search/#retrieval-augmented-generation): integra capacidades de búsqueda vectorial en Oracle Database para realizar consultas semánticas basadas en embeddings vectoriales.

### Extensiones de bases de datos relacionales:

- [Pgvector](https://github.com/pgvector/pgvector): extensión de código abierto para buscar similitudes vectoriales en PostgreSQL.
- [psql_bm25s](https://github.com/Intelligent-Internet/psql_bm25s): extensión de PostgreSQL para recuperación léxica de la familia BM25, útil en pipelines de recuperación por palabras clave e híbrida.

### Otros sistemas de bases de datos:

- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database): servicio de bases de datos multimodelo distribuido globalmente, con búsqueda vectorial integrada.
- [Couchbase](https://www.couchbase.com/products/vector-search/): base de datos en la nube distribuida NoSQL.
- [Lantern](https://lantern.dev/): motor de búsqueda personal que protege la privacidad.
- [LlamaIndex](https://docs.llamaindex.ai/en/stable/module_guides/storing/vector_stores/): utiliza un almacén vectorial en memoria sencillo para realizar experimentos rápidamente.
- [Neo4j](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/): sistema de gestión de bases de datos de grafos.
- [Qdrant](https://github.com/neo4j/neo4j): base de datos vectorial de código abierto diseñada para búsquedas por similitud.
- [Redis Stack](https://redis.io/docs/latest/develop/interact/search-and-query/): almacén de estructuras de datos en memoria que se utiliza como base de datos, caché y agente de mensajes.
- [SurrealDB](https://github.com/surrealdb/surrealdb): base de datos multimodelo escalable, optimizada para datos de series temporales.
- [Weaviate](https://github.com/weaviate/weaviate): motor de búsqueda vectorial nativo de la nube y de código abierto.

### Bibliotecas y herramientas de búsqueda vectorial:

- [FAISS](https://github.com/facebookresearch/faiss): biblioteca para buscar similitudes y agrupar vectores densos de forma eficiente; está diseñada para manejar conjuntos de datos a gran escala y optimizada para recuperar rápidamente los vecinos más cercanos.

## 🚀 Consideraciones para producción

Para crear sistemas RAG de nivel de producción, es necesario abordar varios aspectos críticos además del proceso central de recuperación y generación:

### Escalabilidad y rendimiento

- **Rendimiento de indexación**: diseña pipelines capaces de ingerir grandes volúmenes de documentos con actualizaciones incrementales
- **Latencia de consultas**: optimiza la velocidad de recuperación mediante indexación eficiente (HNSW, IVF), estrategias de caché y procesamiento paralelo
- **Solicitudes simultáneas**: implementa agrupación de conexiones, colas de solicitudes y balanceo de carga para escenarios de mucho tráfico
- **Gestión de recursos**: supervisa el uso de GPU/CPU, el consumo de memoria y los grupos de conexiones a bases de datos

### Fiabilidad y supervisión

- **Observabilidad**: implementa registro, trazas y recopilación de métricas integrales (latencia, rendimiento, tasas de error)
- **Comprobaciones de estado**: supervisa la disponibilidad del servicio de embeddings, la conectividad de la base de datos vectorial y el estado de la API de LLM
- **Gestión de errores**: implementa lógica de reintentos, interruptores de circuito y estrategias de degradación gradual
- **Pruebas A/B**: compara distintas estrategias de recuperación, métodos de fragmentación y plantillas de prompts

### Gestión de datos

- **Actualizaciones incrementales**: admite la indexación de documentos en tiempo real o casi real sin tener que volver a indexarlos por completo
- **Control de versiones**: realiza seguimiento de las versiones de documentos, modelos de embeddings y plantillas de prompts
- **Calidad de los datos**: implementa pipelines de validación para detectar embeddings dañados, metadatos ausentes o contenido desactualizado
- **Copias de seguridad y recuperación**: realiza copias de seguridad periódicas de los índices vectoriales y los almacenes de metadatos

### Seguridad y cumplimiento

- **Control de acceso**: implementa autenticación, autorización y registro de auditoría
- **Privacidad de los datos**: cifra los datos almacenados y en tránsito, y cumple los requisitos de residencia de datos
- **Filtrado de contenido**: aplica moderación de contenido, detección de información de identificación personal (PII) y comprobaciones de cumplimiento
- **Limitación de frecuencia**: protege frente a abusos y garantiza una asignación equitativa de los recursos

### Optimización de costes

- **Caché de embeddings**: almacena en caché los embeddings a los que se accede con frecuencia para reducir los costes de API
- **Recuperación selectiva**: usa el enrutamiento de consultas para evitar operaciones de recuperación innecesarias
- **Selección de modelos**: equilibra los costes y el rendimiento al elegir modelos de embeddings y LLM
- **Ajuste del tamaño de los recursos**: optimiza la infraestructura según los patrones de uso reales

## 🔌 Implementaciones de RAG específicas de plataformas

Para obtener guías de implementación detalladas para plataformas específicas, consulta la documentación:

- [Guía de integración de Supabase](docs/supabase-integration.md): creación de sistemas RAG con Supabase, pgvector y Edge Functions

## 💡 Buenas prácticas

### Estrategia de fragmentación

- **Fragmentación adaptada al dominio**: prioriza la fragmentación semántica o basada en la estructura del documento frente a la de tamaño fijo para conservar mejor el contexto
- **Gestión del solapamiento**: incluye un solapamiento estratégico (10-20 %) para mantener el contexto entre fragmentos
- **Conservación de metadatos**: conserva la estructura del documento, los encabezados y las señales de formato en los metadatos de los fragmentos
- **Multigranularidad**: considera la fragmentación jerárquica (fragmentos pequeños para recuperar información y fragmentos mayores para aportar contexto)

### Selección de embeddings

- **Evaluación de modelos**: utiliza la clasificación MTEB y benchmarks específicos del dominio para elegir los modelos adecuados
- **Optimización de dimensiones**: busca un equilibrio en las dimensiones de los embeddings (más dimensiones = mayor calidad; menos dimensiones = recuperación más rápida)
- **Ajuste fino al dominio**: ajusta los embeddings con datos específicos del dominio cuando sea posible
- **Coherencia**: asegúrate de utilizar el mismo modelo de embeddings para indexar y consultar

### Optimización de la recuperación

- **Búsqueda híbrida**: combina la búsqueda semántica (vectorial) y la léxica (BM25/palabras clave) para mejorar la exhaustividad
- **Reordenamiento**: aplica modelos cross-encoder o de aprendizaje para clasificar y mejorar la precisión
- **Comprensión de consultas**: implementa clasificación de consultas, detección de intención y expansión de consultas
- **Diversificación de resultados**: evita resultados redundantes aplicando restricciones de diversidad

### Ingeniería de prompts

- **Instrucciones claras**: especifica explícitamente cómo usar el contexto recuperado
- **Atribución de fuentes**: solicita citas y exige que las respuestas se fundamenten en el contexto proporcionado
- **Ejemplos de pocos ejemplos**: incluye ejemplos que muestren el formato y la calidad de respuesta deseados
- **Compresión del contexto**: utiliza técnicas como el resumen o la extracción cuando el contexto supera los límites

### Marco de evaluación

- **Métricas multidimensionales**: evalúa la relevancia, la precisión, la integridad y la fundamentación
- **Participación humana**: incorpora comentarios humanos para la mejora continua
- **Evaluación sintética**: genera consultas de prueba y resultados esperados para las pruebas automatizadas
- **Supervisión en producción**: realiza seguimiento de la satisfacción de los usuarios, los patrones de consultas y los modos de fallo

### Mejora iterativa

- **Ciclos de retroalimentación**: recopila comentarios de los usuarios, registros de consultas y métricas de rendimiento
- **Experimentación**: prueba mejoras de forma sistemática (fragmentación, recuperación y prompts) mediante experimentos controlados
- **Actualizaciones de modelos**: planifica las actualizaciones de modelos de embeddings y las estrategias de migración
- **Documentación**: mantén documentación clara sobre la arquitectura, las decisiones y los procedimientos operativos

---

## Contribuir

Este recurso comunitario sigue evolucionando. ¡Se agradecen las contribuciones! Si quieres añadir recursos, corregir errores o mejorar la organización:

1. Crea una bifurcación del repositorio
2. Crea una rama para tus cambios
3. Envía una solicitud de incorporación de cambios con una descripción clara

Para añadir nuevas entradas, comprueba que los enlaces funcionen, que las descripciones sean precisas y concisas y que el contenido encaje en la sección adecuada.

## Licencia

Este proyecto está distribuido bajo la licencia [CC0 1.0 Universal](LICENSE).
