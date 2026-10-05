<div align="center"><img src="./assets/head.jpg"></div>

# AWESOME DATA SCIENCE

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Se aceptan contribuciones; consulta [`CONTRIBUTING.md`](CONTRIBUTING.md).

**Un repositorio de código abierto sobre ciencia de datos para aprender y aplicar conceptos a la resolución de problemas del mundo real.**

Esta es una ruta rápida para empezar a estudiar **ciencia de datos**. Sigue los pasos para responder a las preguntas: «¿Qué es la ciencia de datos y qué debo estudiar para aprenderla?».

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## Sponsors

[![Creavit Studio: recording, editing, and motion in one app](https://raw.githubusercontent.com/creavit-studio/files/refs/heads/main/static/crvt-banner.png)](https://creavit.studio/?utm_source=github&utm_medium=sponsorship&utm_campaign=creavit_founding_alpha&utm_content=crvt_banner)

[![Graphyn: visualize specialized agent workflows](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)



¡Conviértete en patrocinador! `github@academic.io`



## Table of Contents

- [¿Qué es la ciencia de datos?](#what-is-data-science)
- [¿Por dónde empiezo?](#where-do-i-start)
- [Agentes](#agents)
- [Proyectos](#projects)
- [Recursos de formación](#training-resources)
  - [Tutoriales](#tutorials)
  - [Cursos gratuitos](#free-courses)
  - [Cursos masivos abiertos en línea (MOOC)](#moocs)
  - [Programas intensivos](#intensive-programs)
  - [Universidades](#colleges)
- [El conjunto de herramientas de ciencia de datos](#the-data-science-toolbox)

  - [Algoritmos](#algorithms)
    - [Aprendizaje supervisado](#supervised-learning)
    - [Aprendizaje no supervisado](#unsupervised-learning)
    - [Aprendizaje semisupervisado](#semi-supervised-learning)
    - [Aprendizaje por refuerzo](#reinforcement-learning)
    - [Algoritmos de minería de datos](#data-mining-algorithms)
    - [Arquitecturas de aprendizaje profundo](#deep-learning-architectures)
  - [Paquetes generales de aprendizaje automático](#general-machine-learning-packages)
  - [Paquetes de aprendizaje profundo](#deep-learning-packages)
    - [Ecosistema PyTorch](#pytorch-ecosystem)
    - [Ecosistema TensorFlow](#tensorflow-ecosystem)
    - [Ecosistema Keras](#keras-ecosystem)
  - [Herramientas de visualización](#visualization-tools)
  - [Herramientas variadas](#miscellaneous-tools)
- [Literatura y medios](#literature-and-media)
  - [Libros](#books)
    - [Ofertas de libros (afiliadas)](#book-deals-affiliated)
  - [Revistas, publicaciones y magazines](#journals-publications-and-magazines)
  - [Boletines](#newsletters)
  - [Blogueros](#bloggers)
  - [Presentaciones](#presentations)
  - [Podcasts](#podcasts)
  - [Vídeos y canales de YouTube](#youtube-videos--channels)
- [Comunidad](#socialize)
  - [Cuentas de Facebook](#facebook-accounts)
  - [Cuentas de Twitter](#twitter-accounts)
  - [Canales de Telegram](#telegram-channels)
  - [Comunidades de Slack](#slack-communities)
  - [Grupos de GitHub](#github-groups)
  - [Competiciones de ciencia de datos](#data-science-competitions)
- [Entretenimiento](#fun)
  - [Infografías](#infographics)
  - [Conjuntos de datos](#datasets)
  - [Cómics](#comics)
- [Otras listas increíbles](#other-awesome-lists)
  - [Aficiones](#hobby)

## What is Data Science?
**[`^        back to top        ^`](#awesome-data-science)**

La ciencia de datos es hoy uno de los temas más candentes en el ámbito de la informática e Internet. Hasta ahora, las personas han recopilado datos de aplicaciones y sistemas; ha llegado el momento de analizarlos. Los siguientes pasos consisten en obtener recomendaciones a partir de los datos y realizar predicciones sobre el futuro. [Aquí](https://www.quora.com/Data-Science/What-is-data-science) encontrarás la gran pregunta sobre **ciencia de datos** y cientos de respuestas de expertos.


| Enlace | Vista previa |
| --- | --- |
| [Ciencia de datos para principiantes](https://github.com/microsoft/Data-Science-For-Beginners) | Microsoft ofrece con orgullo un plan de estudios de 10 semanas y 20 lecciones dedicado a la ciencia de datos. |
| [Qué es la ciencia de datos @ O’Reilly](https://www.oreilly.com/ideas/what-is-data-science) | _Los científicos de datos combinan el espíritu emprendedor con la paciencia, la disposición a desarrollar productos de datos de forma incremental, la capacidad de explorar y la habilidad de iterar sobre una solución. Son intrínsecamente interdisciplinarios. Pueden abordar todos los aspectos de un problema, desde recopilar y acondicionar los datos inicialmente hasta extraer conclusiones. Saben pensar de forma innovadora para encontrar nuevas maneras de ver un problema o abordar cuestiones muy abiertas: «aquí tienes muchos datos, ¿qué puedes hacer con ellos?»_ |
| [Qué es la ciencia de datos @ Quora](https://www.quora.com/Data-Science/What-is-data-science) | La ciencia de datos combina varios aspectos relacionados con los datos, como la tecnología, el desarrollo de algoritmos y la inferencia, para estudiarlos, analizarlos y encontrar soluciones innovadoras a problemas difíciles. En esencia, consiste en analizar datos e impulsar el crecimiento empresarial mediante ideas creativas. |
| [El empleo más atractivo del siglo XXI](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _Hoy los científicos de datos se parecen a los «quants» de Wall Street de las décadas de 1980 y 1990. En aquellos años, personas con formación en física y matemáticas acudían en masa a bancos de inversión y fondos de cobertura, donde podían idear algoritmos y estrategias de datos completamente nuevos. Después, varias universidades desarrollaron programas de máster en ingeniería financiera, que formaron a una segunda generación de profesionales más accesible para las empresas convencionales. El patrón se repitió a finales de los noventa con los ingenieros de búsqueda, cuyas habilidades especializadas pronto empezaron a enseñarse en programas de informática._ |
| [Wikipedia](https://en.wikipedia.org/wiki/Data_science) | _La ciencia de datos es un campo interdisciplinario que utiliza métodos, procesos, algoritmos y sistemas científicos para extraer conocimiento e información de numerosos datos estructurados y no estructurados. Está relacionada con la minería de datos, el aprendizaje automático y los macrodatos._ |
| [Cómo convertirse en científico de datos](https://www.mastersindatascience.org/careers/data-scientist/) | _Los científicos de datos se encargan de recopilar y analizar grandes conjuntos de datos estructurados y no estructurados. Su trabajo combina informática, estadística y matemáticas. Analizan, procesan y modelan los datos, y luego interpretan los resultados para crear planes prácticos para empresas y otras organizaciones._ |
| [Breve historia de la #cienciadedatos](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _La historia de cómo los científicos de datos se volvieron atractivos es, en gran medida, la historia de la unión de una disciplina madura —la estadística— con otra muy joven: la informática. El término «ciencia de datos» surgió hace poco para designar específicamente una nueva profesión encargada de dar sentido a las enormes reservas de macrodatos. Sin embargo, interpretar datos tiene una larga historia y científicos, estadísticos, bibliotecarios, informáticos y otras personas llevan años debatiendo sobre ello. La siguiente cronología sigue la evolución del término «ciencia de datos» y sus usos, los intentos de definirlo y otros términos relacionados._ |
|[Recursos de desarrollo de software para científicos de datos](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)|_Los científicos de datos se centran en comprender los datos mediante análisis exploratorio, estadística y modelos. Los desarrolladores de software aplican un conjunto distinto de conocimientos y herramientas. Aunque sus objetivos parezcan diferentes, los equipos de ciencia de datos pueden beneficiarse de adoptar buenas prácticas de desarrollo de software. El control de versiones, las pruebas automatizadas y otras habilidades de desarrollo ayudan a crear código y herramientas reproducibles y listos para producción._|
|[Hoja de ruta para científicos de datos](https://www.scaler.com/blog/how-to-become-a-data-scientist/)|_La ciencia de datos es una excelente opción profesional en el mundo actual, impulsado por los datos, donde se generan aproximadamente 328,77 millones de terabytes de datos cada día. Esta cifra no deja de aumentar y, con ella, crece la demanda de científicos de datos cualificados que puedan aprovechar esos datos para impulsar el crecimiento empresarial._|
|[Cómo recorrer el camino para convertirse en científico de datos](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)|_La ciencia de datos es hoy una de las profesiones más demandadas. Como las empresas dependen cada vez más de los datos para tomar decisiones, la necesidad de profesionales cualificados ha crecido rápidamente. Los científicos de datos desempeñan un papel fundamental en empresas tecnológicas, organizaciones sanitarias e incluso instituciones públicas: convierten datos sin procesar en información valiosa. Pero ¿cómo puedes convertirte en científico de datos, sobre todo si acabas de empezar? _|

## Where do I Start?
**[`^        back to top        ^`](#awesome-data-science)**

Aunque no es estrictamente imprescindible, conocer un lenguaje de programación es una habilidad esencial para trabajar eficazmente como científico de datos. Actualmente, el lenguaje más popular es _Python_, seguido de cerca por _R_. Python es un lenguaje de scripting de propósito general que se utiliza en una gran variedad de campos. R es un lenguaje específico para estadística que incluye de serie muchas herramientas estadísticas habituales.

[Python](https://python.org/) es, con diferencia, el lenguaje más popular en ciencia, en gran medida por su facilidad de uso y el dinámico ecosistema de paquetes creados por sus usuarios. Hay dos métodos principales para instalar paquetes: Pip (se ejecuta como `pip install`), el gestor de paquetes que viene incluido con Python, y [Anaconda](https://www.anaconda.com) (se ejecuta como `conda install`), un potente gestor que puede instalar paquetes para Python y R, así como descargar ejecutables como Git.

A diferencia de R, Python no se diseñó desde cero pensando en la ciencia de datos, pero cuenta con numerosas bibliotecas de terceros que compensan esta carencia. Más adelante encontrarás una lista mucho más exhaustiva de paquetes; para comenzar tu recorrido en ciencia de datos, estos cuatro son una buena selección: [Scikit-Learn](https://scikit-learn.org/stable/index.html) es un paquete de propósito general que implementa los algoritmos más populares e incluye documentación detallada, tutoriales y ejemplos de los modelos que ofrece. Incluso si prefieres escribir tus propias implementaciones, Scikit-Learn es una referencia valiosa para comprender los fundamentos de muchos algoritmos habituales. Con [Pandas](https://pandas.pydata.org/) puedes recopilar y analizar datos en un cómodo formato tabular. [Numpy](https://numpy.org/) proporciona herramientas muy rápidas para operaciones matemáticas, con especial atención a vectores y matrices. [Seaborn](https://seaborn.pydata.org/), basado a su vez en el paquete [Matplotlib](https://matplotlib.org/), permite generar rápidamente visualizaciones atractivas de los datos, con muchas opciones predeterminadas útiles y una galería que muestra cómo crear numerosas visualizaciones habituales.

Al comenzar tu camino para convertirte en científico de datos, la elección del lenguaje no es especialmente importante: tanto Python como R tienen ventajas e inconvenientes. Elige el que prefieras y consulta alguno de los [cursos gratuitos](#free-courses) que aparecen a continuación.

### Beginner Roadmap
Si acabas de empezar, este es un itinerario sencillo que te recomendamos:

1. **Aprende Python** – Empieza por lo básico: variables, bucles y funciones.
2. **Aprende las bibliotecas principales** – Pandas, NumPy, Matplotlib y Scikit-Learn.
3. **Practica con proyectos para principiantes** – Prueba a predecir la supervivencia del Titanic o los precios de la vivienda en Kaggle.
4. **Aprende los fundamentos matemáticos** – Estadística, álgebra lineal y probabilidad.
5. **Adéntrate en el aprendizaje automático** – Aprendizaje supervisado → no supervisado → aprendizaje profundo.

## Agents

Esta sección contiene marcos de agentes y herramientas útiles para los flujos de trabajo de ciencia de datos.

### Frameworks
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - Kit de desarrollo de agentes de IA para Rust listo para producción, con diseño independiente del modelo (Gemini, OpenAI, Anthropic), varios tipos de agentes (LLM, grafos y flujos de trabajo), compatibilidad con MCP y telemetría integrada.
- [Lumen](https://github.com/holoviz/lumen) - Marco de agentes para conversar con datos y convertir lenguaje natural en SQL, canalizaciones de transformación y visualizaciones. Genera especificaciones declarativas que se pueden inspeccionar, editar, volver a abrir en un cuaderno o combinar en un panel.

### Tools
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - Servidor MCP que ofrece 13 herramientas de datos para agentes de IA: precios de criptomonedas en tiempo real, geolocalización IP, consultas DNS, extracción web a Markdown, ejecución de código y capturas de pantalla. Una clave API para más de 40 servicios.
- [Arch Tools](https://archtools.dev) - 61 herramientas de API de IA listas para producción para flujos de ciencia de datos: análisis de código, extracción web, PLN, generación de imágenes, datos de criptomonedas y búsqueda. Compatible con API REST y protocolo MCP. [GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - Motor de búsqueda para agentes de IA que indexa más de 9000 herramientas y API de IA y evalúa su preparación para agentes (llms.txt, OpenAPI, MCP, ai-plugin.json). Ofrece API REST y servidor MCP para descubrir herramientas mediante programación. [GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - Marco de trading de criptomonedas con IA que combina LightGBM y XGBoost, con 72 características de aprendizaje automático. Precisión del 70,9 % validada con walk-forward en datos fuera de muestra. Compatible con Bybit y Binance. Licencia MIT; disponible en [PyPI](https://pypi.org/project/deepalpha-bot/).
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - Agente local de IA que genera artículos científicos listos para publicación, con citas reales de arXiv, estructura IMRyD y puntuación por panel. Funciona completamente sin conexión mediante Ollama con modelos de 4B a 9B. Licencia MIT. [HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - Marco de código abierto para evaluar LLM y agentes, con más de 50 métricas, ampliación mediante LLM como juez y analizadores de barreras de seguridad (jailbreak, PII e inyección de prompts). Útil para puntuar resultados de RAG, trayectorias de agentes y llamadas a funciones en flujos de ciencia de datos.
- [Kitaru](https://github.com/zenml-io/kitaru) - Plataforma de código abierto que registra ejecuciones reales de agentes de IA, las reproduce frente a cambios y evalúa los resultados antes de la implementación.
- [Jev Social](https://github.com/socai-io/jev-social) - Agente de investigación social de solo lectura que permite a Jev elegir operaciones acotadas en Instagram, TikTok y LinkedIn, las ejecuta mediante la CLI local de socai en Chrome y conserva pruebas vinculadas a sus fuentes junto a un informe con citas.
- [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark) - Ejecutor de experimentos de código abierto en un host de confianza para tareas históricas de agentes, prompts de programación proporcionados y flujos de trabajo. Ejecuta intentos independientes y conserva sus resultados; posteriormente compara modelos, entornos y configuraciones con distintas comprobaciones o evaluadores. Licencia MIT.
- [YYLO](https://github.com/yylo-dev/yylo) - Orquestador de línea de comandos de código abierto para agentes de programación y flujos repetibles, con límites tipados para tareas, validación, integración y preparación de versiones, además de cambios en el repositorio respaldados por recibos. Licencia MIT; instalable mediante npm.
- [YYLO Ledger](https://github.com/yylo-dev/yylo-ledger) - Registro de tareas y flujos de trabajo por línea de comandos para proyectos con agentes de programación: guarda el tablero Kanban y el estado de las tareas como Markdown encadenado por hashes dentro del repositorio, realiza el seguimiento de recibos y archivos históricos, y dirige flujos tipados de integración y publicación entre árboles de trabajo de agentes. Licencia MIT.

### Research & Knowledge Retrieval
- [BGPT MCP](https://bgpt.pro/mcp) - Servidor MCP que permite a los agentes de IA acceder a una base de artículos científicos creada a partir de datos experimentales sin procesar extraídos de estudios completos. Devuelve más de 25 campos estructurados por artículo, incluidos métodos, resultados, tamaños de muestra y puntuaciones de calidad. [GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - Biblioteca de Python y servidor MCP de código abierto para comparar estrategias de fragmentación de documentos para RAG, puntuar la calidad de recuperación y recomendar configuraciones para un corpus.
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - Habilidad y CLI que se actualizan a diario para recuperar información de forma determinista de arXiv, PubMed/PMC y corpus de políticas estadounidenses compatibles.
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - Pasarela de pago x402 con 23 endpoints de investigación y referencia para agentes de IA: Wikipedia, arXiv, PubMed, Wikidata, búsquedas de citas académicas, extracción de entidades y más. Pago por llamada en USDC en Base y Solana; sin claves API ni suscripciones. También ofrece más de 150 endpoints de 39 categorías, entre ellas geoespacial, inferencia de IA, DeFi y computación. [GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - Búsqueda bibliográfica con IA, traducción de documentos y espacio de trabajo de investigación profunda para investigadores.

### Workflow
**[`^        back to top        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - La interfaz de Sim Studio es ligera e intuitiva y permite crear e implementar rápidamente LLM conectados con tus herramientas favoritas.

## Projects
**[`^        back to top        ^`](#awesome-data-science)**

- [Synthetic Hospital](https://github.com/sparkcpark/synthetic_hospital) - Plataforma de simulación de historias clínicas electrónicas y evaluación comparativa médica.

## Training Resources
**[`^        back to top        ^`](#awesome-data-science)**

¿Cómo se aprende ciencia de datos? ¡Practicándola, por supuesto! De acuerdo, quizá eso no ayude mucho cuando estás empezando. En esta sección hemos reunido recursos de aprendizaje, ordenados aproximadamente de menor a mayor nivel de compromiso: [tutoriales](#tutorials), [cursos masivos abiertos en línea (MOOC)](#moocs), [programas intensivos](#intensive-programs) y [universidades](#colleges).


### Tutorials
**[`^        back to top        ^`](#awesome-data-science)**

- [1000 Data Science Projects](https://cloud.blobcity.com/#/ps/explore) que puedes ejecutar en el navegador con IPython.
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - Proyecto semanal de datos dirigido al ecosistema R.
- [Ciencia de datos a tu manera](https://github.com/jadianes/data-science-your-way)
- [DataCamp Cheatsheets](https://www.datacamp.com/cheat-sheet) Hojas de referencia para ciencia de datos.
- [PySpark Cheatsheet](https://github.com/kevinschaich/pyspark-cheatsheet)
- [Aprendizaje automático, ciencia de datos y aprendizaje profundo con Python](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - Motor de búsqueda multiplataforma gratuito que indexa más de 50 000 tutoriales de Udemy, Skillshare, Pluralsight y otras grandes plataformas educativas, en más de 45 categorías.
- [Guía del análisis de asignación latente de Dirichlet](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Tutoriales del código fuente del libro Algoritmos genéticos con Python, de Clinton Sheppard](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [Tutoriales para iniciarse en el procesamiento de señales para aprendizaje automático](https://github.com/jinglescode/python-signal-processing)
- [Realtime deployment](https://www.microprediction.com/python-1) Tutorial sobre la implementación de modelos de series temporales en Python.
- [Python para ciencia de datos: guía para principiantes](https://learntocodewith.me/posts/python-for-data-science/)
- [Plan de estudio mínimo viable para entrevistas de aprendizaje automático](https://github.com/khangich/machine-learning-interview)
- [Comprende y aprende ingeniería de aprendizaje automático mediante proyectos sólidos](https://mlzoomcamp.com/)
- [12 proyectos gratuitos de ciencia de datos para practicar Python y Pandas](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [El mejor CV para principiantes en ciencia de datos](https://enhancv.com/resume-examples/data-scientist/)
- [Comprende el curso de ciencia de datos en Java](https://www.alter-solutions.com/articles/java-data-science)
- [Preguntas de entrevista sobre analítica de datos (de principiante a avanzado)](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [Más de 100 preguntas y respuestas para entrevistas de ciencia de datos](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven: preguntas de entrevista sobre SQL, Python y modelado de datos](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - Calculadora interactiva que visualiza paso a paso las matemáticas manuales que hay detrás de los algoritmos de aprendizaje automático, para preparar exámenes.
- [How to Build Optimal AI Agents That Actually Work](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - Manual para desarrolladores sobre el diseño y la creación de agentes de IA eficaces.
- [Train LLM From Scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) - Método sencillo para entrenar tu LLM, desde la descarga de datos hasta la generación de texto.

### Free Courses
**[`^        back to top        ^`](#awesome-data-science)**

- [Ciencia de datos](https://github.com/ossu/data-science) - Universidad de la Sociedad de Código Abierto.
- [Científico de datos con R](https://www.datacamp.com/tracks/data-scientist-with-r)
- [Científico de datos con Python](https://www.datacamp.com/tracks/data-scientist-with-python)
- [Curso OCW de algoritmos genéticos](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [Hoja de ruta para especialistas en IA](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - Hoja de ruta para convertirse en especialista en inteligencia artificial.
- [Optimización convexa](https://www.edx.org/course/convex-optimization) - Optimización convexa (fundamentos del análisis convexo; mínimos cuadrados, programas lineales y cuadráticos, programación semidefinida, minimax, volumen extremo y otros problemas; condiciones de optimalidad, teoría de la dualidad...).
- [Aprendizaje a partir de datos](https://home.work.caltech.edu/telecourse.html) - Introducción al aprendizaje automático que abarca teoría básica, algoritmos y aplicaciones.
- [Kaggle](https://www.kaggle.com/learn) - Aprende sobre ciencia de datos, aprendizaje automático, Python, etc.
- [Fundamentos de observabilidad de aprendizaje automático](https://arize.com/ml-observability-fundamentals/) - Aprende a supervisar y encontrar la causa raíz de problemas de aprendizaje automático en producción.
- [MLOps eficaz de Weights & Biases: desarrollo de modelos](https://www.wandb.courses/courses/effective-mlops-model-development) - Curso y certificación gratuitos para crear una solución integral con W&B.
- [Python para ciencia de datos de Scaler](https://www.scaler.com/topics/course/python-for-data-science/) - Este curso está diseñado para que principiantes adquieran las habilidades esenciales para destacar en el mundo actual, impulsado por los datos. El completo plan de estudios proporciona una base sólida en estadística, programación, visualización de datos y aprendizaje automático.
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - Diapositivas, scripts y materiales del curso de aprendizaje automático en finanzas de NYU Tandon de 2022.
- [Entrenamiento e implementación práctica de aprendizaje automático](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - Curso práctico para entrenar e implementar una API sin servidor que predice los precios de las criptomonedas.
- [LLMOps: creación de aplicaciones reales con modelos de lenguaje grandes](https://www.comet.com/site/llm-course/) - Aprende a crear software moderno con LLM utilizando las herramientas y técnicas más recientes del sector.
- [Ingeniería de prompts para modelos de visión](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Aprende a dar instrucciones a modelos de visión artificial de última generación mediante lenguaje natural, puntos de coordenadas, cuadros delimitadores, máscaras de segmentación e incluso otras imágenes, en este curso gratuito de DeepLearning.AI.
- [Curso de ciencia de datos de IBM](https://skillsbuild.org/students/course-catalog/data-science) - Recursos gratuitos para aprender qué es la ciencia de datos y cómo se utiliza en distintas industrias.
- [Redes neuronales: de cero a héroe](https://karpathy.ai/zero-to-hero.html) - Serie gratuita de vídeos de Andrej Karpathy que explica las redes neuronales desde cero: retropropagación, makemore, GPT y mucho más.



### MOOC's
**[`^        back to top        ^`](#awesome-data-science)**

- [Introducción a la ciencia de datos de Coursera](https://www.coursera.org/specializations/data-science)
- [Ciencia de datos: especialización de 9 cursos en Coursera](https://www.coursera.org/specializations/jhu-data-science)
- [Minería de datos: especialización de 5 cursos en Coursera](https://www.coursera.org/specializations/data-mining)
- [Aprendizaje automático: especialización de 5 cursos en Coursera](https://www.coursera.org/specializations/machine-learning)
- [CS 109 Data Science](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 Visualization](https://www.cs171.org/#!index.md)
- [Minería de procesos: ciencia de datos en acción](https://www.coursera.org/learn/process-mining)
- [Aprendizaje profundo de Oxford](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [Aprendizaje profundo de Oxford: vídeos](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [Aprendizaje automático de Oxford](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [Aprendizaje automático de UBC: vídeos](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [Especialización en ciencia de datos](https://github.com/DataScienceSpecialization/courses)
- [Especialización en macrodatos de Coursera](https://www.coursera.org/specializations/big-data)
- [Pensamiento estadístico para ciencia de datos y analítica de edX](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI de IBM](https://cognitiveclass.ai/)
- [Aprendizaje profundo de Udacity](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras en acción](https://www.manning.com/livevideo/keras-in-motion)
- [Programa profesional de Microsoft en ciencia de datos](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246: tecnologías de aprendizaje automático](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231: redes neuronales convolucionales para reconocimiento visual](https://cs231n.github.io/)
- [TensorFlow en la práctica de Coursera](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Especialización en aprendizaje profundo de Coursera](https://www.coursera.org/specializations/deep-learning)
- [Curso de 365 Data Science](https://365datascience.com/)
- [Especialización en procesamiento del lenguaje natural de Coursera](https://www.coursera.org/specializations/natural-language-processing)
- [Especialización en GAN de Coursera](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Ciencia de datos de Codecademy](https://www.codecademy.com/learn/paths/data-science)
- [Álgebra lineal](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - Curso de álgebra lineal de Gilbert Strang.
- [Una visión del álgebra lineal en 2020 (G. Strang)](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Curso básico de Python para ciencia de datos](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [Ciencia de datos: estadística y aprendizaje automático](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [Ingeniería de aprendizaje automático para producción (MLOps)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [Especialización en sistemas de recomendación de la Universidad de Minnesota](https://www.coursera.org/specializations/recommender-systems) es una especialización de nivel intermedio/avanzado sobre sistemas de recomendación en la plataforma Coursera.
- [Programa profesional de inteligencia artificial de Stanford](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [Científico de datos con Python](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Programación con Julia](https://www.udemy.com/course/programming-with-julia/)
- [Programa de ciencia de datos y aprendizaje automático de Scaler](https://www.scaler.com/data-science-course/)
- [Árbol de habilidades de ciencia de datos](https://labex.io/skilltrees/data-science)
- [Ciencia de datos para principiantes: aprende con un tutor de IA](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [Aprendizaje automático para principiantes: aprende con un tutor de IA](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [Introducción a la ciencia de datos](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[Primeros pasos con Python para ciencia de datos](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Certificado avanzado de analítica de datos de Google](https://grow.google/data-analytics/) – Cursos profesionales de análisis de datos, estadística y fundamentos del aprendizaje automático.
- [Maschinelle Sprachgebrauchsanalyse - Grundlagen der Korpuslinguistik](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - Material didáctico sobre minería de texto y lingüística de corpus *en alemán*, financiado por el estado federado de Renania del Norte-Westfalia.
- [Programmieren für Germanist*innen](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - Material didáctico de programación en Python *en alemán* para humanidades digitales, financiado por el estado federado de Renania del Norte-Westfalia.
- [QuiddityML](https://quiddityml.com/?utm_source=github&utm_medium=awesome&utm_campaign=awesome-datascience) - Lecciones breves con ejercicios prácticos de programación y repetición espaciada sobre Python, PyTorch, matemáticas para aprendizaje automático, fundamentos de aprendizaje automático, PLN y visión artificial.

### Intensive Programs
**[`^        back to top        ^`](#awesome-data-science)**
- [Great Learning Data Science Programs](https://www.mygreatlearning.com/data-science/courses) - Colección de programas en línea de certificados, posgrados y titulaciones en ciencia de datos y analítica.
- [S2DS](https://www.s2ds.org/)
- [WorldQuant University Applied Data Science Lab](https://www.wqu.edu/adsl)


### Colleges
**[`^        back to top        ^`](#awesome-data-science)**

- [Lista de universidades que ofrecen titulaciones en ciencia de datos](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [Grado en ciencia de datos de Berkeley](https://ischoolonline.berkeley.edu/data-science/)
- [Grado en ciencia de datos de UVA](https://datascience.virginia.edu/)
- [Grado en ciencia de datos de Wisconsin](https://datasciencedegree.wisconsin.edu/)
- [Grado en ciencia de datos y aplicaciones](https://study.iitm.ac.in/ds/)
- [Máster en sistemas de información informática de la Universidad de Boston](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [Máster en analítica empresarial de ASU Online](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [Máster en ciencia de datos aplicada de Syracuse](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [Máster en gestión y ciencia de datos de Leuphana](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [Máster en ciencia de datos de la Universidad de Melbourne](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [Máster en ciencia de datos de la Universidad de Edimburgo](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Máster en analítica de gestión de Queen’s University](https://smith.queensu.ca/grad_studies/mma/index.php)
- [Máster en ciencia de datos del Illinois Institute of Technology](https://www.iit.edu/academics/programs/data-science-mas)
- [Máster en ciencia de datos aplicada de la Universidad de Michigan](https://www.si.umich.edu/programs/master-applied-data-science)
- [Máster en ciencia de datos e inteligencia artificial de Eindhoven University of Technology](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [Máster en ciencia de datos e ingeniería informática de la Universidad de Granada](https://masteres.ugr.es/datcom/)

## The Data Science Toolbox
**[`^        back to top        ^`](#awesome-data-science)**

Esta sección reúne paquetes, herramientas, algoritmos y otros recursos útiles del ámbito de la ciencia de datos.

### Algorithms
**[`^        back to top        ^`](#awesome-data-science)**

Estos algoritmos y modelos de aprendizaje automático y minería de datos te ayudarán a comprender tus datos y extraer significado de ellos.

#### Three kinds of Machine Learning Systems

- Basados en entrenamiento con supervisión humana
- Basados en aprendizaje incremental sobre la marcha
- Basados en la comparación de puntos de datos y la detección de patrones

### Comparison
- [datacompy](https://github.com/capitalone/datacompy) - Paquete DataComPy para comparar dos DataFrames de Pandas.

#### Supervised Learning

- [Regresión](https://en.wikipedia.org/wiki/Regression)
- [Regresión lineal](https://en.wikipedia.org/wiki/Linear_regression)
- [Mínimos cuadrados ordinarios](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [Regresión logística](https://en.wikipedia.org/wiki/Logistic_regression)
- [Regresión por pasos](https://en.wikipedia.org/wiki/Stepwise_regression)
- [Splines de regresión adaptativa multivariante](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [Regresión Softmax](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [Suavizado de dispersión estimado localmente](https://en.wikipedia.org/wiki/Local_regression)
- Clasificación
  - [k vecinos más cercanos](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [Máquinas de vectores de soporte](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [Árboles de decisión](https://en.wikipedia.org/wiki/Decision_tree)
  - [Algoritmo ID3](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [Algoritmo C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [Aprendizaje por conjuntos](https://scikit-learn.org/stable/modules/ensemble.html)
  - [Potenciación](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [Apilamiento](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [Agregación bootstrap](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [Bosque aleatorio](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### Unsupervised Learning
- [Agrupamiento](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [Agrupamiento jerárquico](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-medias](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [Agrupamiento basado en densidad](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [Agrupamiento difuso](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [Modelos de mezcla](https://en.wikipedia.org/wiki/Mixture_model)
- [Reducción de dimensionalidad](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [Análisis de componentes principales (PCA)](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE: incrustación de vecinos estocástica distribuida en t](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [Análisis factorial](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [Asignación latente de Dirichlet (LDA)](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [Redes neuronales](https://en.wikipedia.org/wiki/Neural_network)
- [Mapa autoorganizado](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Teoría de resonancia adaptativa](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [Modelos ocultos de Markov (HMM)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### Semi-Supervised Learning

- S3VM
- [Agrupamiento](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [Modelos generativos](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [Separación de baja densidad](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [Regularización laplaciana](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [Enfoques heurísticos](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### Reinforcement Learning

- [Aprendizaje Q](https://en.wikipedia.org/wiki/Q-learning)
- [Algoritmo SARSA (estado-acción-recompensa-estado-acción)](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [Aprendizaje por diferencias temporales](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### Data Mining Algorithms

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-medias](https://en.wikipedia.org/wiki/K-means_clustering)
- [MVS (máquina de vectores de soporte)](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM (esperanza-maximización)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN (k vecinos más cercanos)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [Bayes ingenuo](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART (árboles de clasificación y regresión)](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### Modern Data Mining Algorithms

- [XGBoost (potenciación extrema del gradiente)](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM (máquina de potenciación ligera del gradiente)](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN (agrupamiento espacial jerárquico basado en densidad con ruido)](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth (algoritmo de crecimiento de patrones frecuentes)](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [Bosque de aislamiento](https://en.wikipedia.org/wiki/Isolation_forest)
- [Agrupamiento profundo integrado (DEC)](https://arxiv.org/abs/1511.06335)
- [TPU (patrones periódicos y de alta utilidad top-k)](https://arxiv.org/abs/2509.15732)
- [Minería de reglas con reconocimiento del contexto (marco basado en transformadores)](https://arxiv.org/abs/2503.11125)


#### Deep Learning architectures

- [Perceptrón multicapa](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [Red neuronal convolucional (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [Red neuronal recurrente (RNN)](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [Máquinas de Boltzmann](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [Codificador automático](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [Red generativa antagónica (GAN)](https://developers.google.com/machine-learning/gan/gan_structure)
- [Mapas autoorganizados](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformador](https://www.tensorflow.org/text/tutorials/transformer)
- [Campo aleatorio condicional (CRF)](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [Diseños de sistemas de aprendizaje automático](https://www.evidentlyai.com/ml-system-design)

### General Machine Learning Packages
**[`^        back to top        ^`](#awesome-data-science)**

* [scikit-learn](https://scikit-learn.org/)
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)
* [scikit-feature](https://github.com/jundongl/scikit-feature)
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate)
* [seqlearn](https://github.com/larsmans/seqlearn)
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes)
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite)
* [sklearn-deap](https://github.com/rsteca/sklearn-deap)
* [sigopt_sklearn](https://github.com/sigopt/sigopt-sklearn)
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation)
* [scikit-image](https://github.com/scikit-image/scikit-image)
* [scikit-opt](https://github.com/guofei9987/scikit-opt)
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs)
* [feature-engine](https://feature-engine.trainindata.com/)
* [me_fasttext](https://github.com/initial-d/me_fasttext) - Variante de FastText eficiente en memoria, con identificadores n-gram exactos basados en trie, compartición de filas consciente de la estructura y servicio mediante mmap para PLN con vocabularios grandes.
* [pystruct](https://github.com/pystruct/pystruct)
* [Shogun](https://www.shogun-toolbox.org/)
* [xLearn](https://github.com/aksnzhy/xlearn)
* [cuML](https://github.com/rapidsai/cuml)
* [causalml](https://github.com/uber/causalml)
* [mlpack](https://github.com/mlpack/mlpack)
* [MLxtend](https://github.com/rasbt/mlxtend)
* [modAL](https://github.com/modAL-python/modAL)
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn)
* [hyperlearn](https://github.com/danielhanchen/hyperlearn)
* [dlib](https://github.com/davisking/dlib)
* [imodels](https://github.com/csinva/imodels)
* [jSciPy](https://github.com/hissain/jscipy) - Adaptación a Java del módulo de procesamiento de señales de SciPy, con filtros, transformaciones y otras utilidades de computación científica.
* [RuleFit](https://github.com/christophM/rulefit)
* [pyGAM](https://github.com/dswah/pyGAM)
* [Deepchecks](https://github.com/deepchecks/deepchecks)
* [scikit-survival](https://scikit-survival.readthedocs.io/en/stable)
* [interpretable](https://pypi.org/project/interpretable)
* [XGBoost](https://github.com/dmlc/xgboost)
* [LightGBM](https://github.com/microsoft/LightGBM)
* [CatBoost](https://github.com/catboost/catboost)
* [PerpetualBooster](https://github.com/perpetual-ml/perpetual)
* [JAX](https://github.com/google/jax)
* [PhilanthroPy](https://github.com/PhilanthroPy-Project/PhilanthroPy) - Kit de herramientas nativo de Scikit-learn para analizar la recaudación de fondos de organizaciones sin ánimo de lucro: estimadores resistentes a filtraciones para propensión y abandono de donantes, donaciones planificadas, evaluación patrimonial y previsión de ingresos.



### Deep Learning Packages

#### PyTorch Ecosystem
* [PyTorch](https://github.com/pytorch/pytorch)
* [TorchDR](https://github.com/TorchDR/TorchDR) - Reducción de dimensionalidad en GPU y varias GPU, con una API compatible con scikit-learn.
* [torchvision](https://github.com/pytorch/vision)
* [torchtext](https://github.com/pytorch/text)
* [torchaudio](https://github.com/pytorch/audio)
* [ignite](https://github.com/pytorch/ignite)
* [PyTorchNet](https://github.com/pytorch/tnt)
* [PyToune](https://github.com/GRAAL-Research/poutyne)
* [skorch](https://github.com/skorch-dev/skorch)
* [PyVarInf](https://github.com/ctallec/pyvarinf)
* [pytorch_geometric](https://github.com/pyg-team/pytorch_geometric)
* [GPyTorch](https://github.com/cornellius-gp/gpytorch)
* [pyro](https://github.com/pyro-ppl/pyro)
* [Catalyst](https://github.com/catalyst-team/catalyst)
* [pytorch_tabular](https://github.com/manujosephv/pytorch_tabular)
* [Yolov3](https://github.com/ultralytics/yolov3)
* [Yolov5](https://github.com/ultralytics/yolov5)
* [Yolov8](https://github.com/ultralytics/ultralytics)
* [OpenLanguageModel](https://github.com/openlanguagemodel/openlanguagemodel) - Biblioteca nativa de PyTorch para crear, entrenar y enseñar modelos de lenguaje basados en transformadores, con arquitecturas escritas como nn.Modules ordinarios.

#### TensorFlow Ecosystem
* [TensorFlow](https://github.com/tensorflow/tensorflow)
* [TensorLayer](https://github.com/tensorlayer/TensorLayer)
* [TFLearn](https://github.com/tflearn/tflearn)
* [Sonnet](https://github.com/deepmind/sonnet)
* [tensorpack](https://github.com/tensorpack/tensorpack)
* [TRFL](https://github.com/deepmind/trfl)
* [Polyaxon](https://github.com/polyaxon/polyaxon)
* [NeuPy](https://github.com/itdxer/neupy)
* [tfdeploy](https://github.com/riga/tfdeploy)
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
* [TensorFlow Fold](https://github.com/tensorflow/fold)
* [tensorlm](https://github.com/batzner/tensorlm)
* [TensorLight](https://github.com/bsautermeister/tensorlight)
* [Mesh TensorFlow](https://github.com/tensorflow/mesh)
* [Ludwig](https://github.com/ludwig-ai/ludwig)
* [TF-Agents](https://github.com/tensorflow/agents)
* [TensorForce](https://github.com/tensorforce/tensorforce)

#### Keras Ecosystem

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### Visualization Tools
**[`^        back to top        ^`](#awesome-data-science)**

- [altair](https://altair-viz.github.io/)
- [amcharts](https://www.amcharts.com/)
- [anychart](https://www.anychart.com/)
- [bokeh](https://bokeh.org/)
- [Comet](https://www.comet.com/site/products/ml-experiment-tracking/?utm_source=awesome-datascience)
- [slemma](https://slemma.com/)
- [cartodb](https://cartodb.github.io/odyssey.js/)
- [Cube](https://square.github.io/cube/)
- [d3plus](https://d3plus.org/)
- [Data-Driven Documents(D3js)](https://d3js.org/)
- [dygraphs](https://dygraphs.com/)
- [exhibit](https://www.simile-widgets.org/exhibit/)
- [gephi](https://gephi.org/)
- [ggplot2](https://ggplot2.tidyverse.org/)
- [Glue](https://docs.glueviz.org/en/latest/index.html)
- [Google Chart Gallery](https://developers.google.com/chart/interactive/docs/gallery)
- [Highcharts](https://www.highcharts.com/)
- [import.io](https://www.import.io/)
- [Matplotlib](https://matplotlib.org/)
- [nvd3](https://nvd3.org/)
- [Netron](https://github.com/lutzroeder/netron)
- [Openrefine](https://openrefine.org/)
- [plot.ly](https://plot.ly/)
- [raw](https://rawgraphs.io)
- [Resseract Lite](https://github.com/abistarun/resseract-lite)
- [Seaborn](https://seaborn.pydata.org/)
- [techanjs](https://techanjs.org/)
- [Timeline](https://timeline.knightlab.com/)
- [variancecharts](https://variancecharts.com/index.html)
- [vida](https://vida.io/)
- [vizzu](https://github.com/vizzuhq/vizzu-lib)
- [Wrangler](https://vis.stanford.edu/wrangler/)
- [r2d3](https://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
- [NetworkX](https://networkx.org/)
- [Redash](https://redash.io/)
- [Metabase](https://www.metabase.com/)
- [C3](https://c3js.org/)
- [TensorWatch](https://github.com/microsoft/tensorwatch)
- [geomap](https://pypi.org/project/geomap/)
- [Dash](https://plotly.com/dash/)
- [MetaReview](https://metareview-8c1.pages.dev/) - Plataforma gratuita en línea para metaanálisis, con 11 gráficos estadísticos interactivos de D3.js (diagrama de bosque, gráfico de embudo, Galbraith, L'Abbé, Baujat, etc.), 5 medidas del tamaño del efecto, cribado bibliográfico con IA y exportación de informes listos para publicación. [github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - Herramienta interactiva basada en cuadernos para visualizar la pasada hacia delante de cualquier modelo de PyTorch.
- [FlexViz](https://github.com/flex-analytics/flexviz) - Biblioteca de Python para paneles interactivos con filtros cruzados que siguen respondiendo con más de 100 millones de filas gracias a la agregación con Polars en el servidor.

### Miscellaneous Tools
**[`^        back to top        ^`](#awesome-data-science)**

| Enlace | Descripción |
| --- | --- |
| [The Data Science Lifecycle Process](https://github.com/dslp/dslp) | Proceso para que los equipos de ciencia de datos pasen de la idea al valor de forma reiterada y sostenible. El proceso está documentado en este repositorio. |
| [Data Science Lifecycle Template Repo](https://github.com/dslp/dslp-repo-template) | Repositorio de plantillas para proyectos del ciclo de vida de ciencia de datos. |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | Generación de datos tabulares sintéticos mediante GAN, modelos de difusión y LLM, con filtrado adversarial y métricas de privacidad. |
| [RexMex](https://github.com/AstraZeneca/rexmex) | Biblioteca de métricas de recomendación de propósito general para una evaluación imparcial. |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | Biblioteca de aprendizaje profundo basada en PyTorch para puntuar pares de fármacos. |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | Intercambio seguro de archivos cifrados con conocimiento cero (AES-256-GCM en el navegador). No requiere cuenta, tiene licencia MIT, se puede alojar por cuenta propia y permite que los enlaces caduquen. |
| [CorpusExplorer](https://corpusexplorer.de/) | Software para lingüistas de corpus y aficionados a la minería de texto y datos. Crea tus propios corpus en más de 60 idiomas y utiliza más de 50 herramientas y visualizaciones. |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | Aprendizaje de representaciones en grafos dinámicos. |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | Biblioteca de muestreo de grafos para NetworkX con una API similar a la de Scikit-Learn. |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | Biblioteca de extensiones de aprendizaje automático no supervisado para NetworkX, con una API similar a la de Scikit-Learn. |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | Entorno de desarrollo integrado web todo en uno para aprendizaje automático y ciencia de datos. Se ejecuta en un contenedor Docker e incluye varias bibliotecas populares de ciencia de datos (como TensorFlow y PyTorch) y herramientas de desarrollo (como Jupyter y VS Code). |
| [xonsh shell](https://github.com/xonsh/xonsh) | Shell basada en Python que permite integrar, gestionar y orquestar bibliotecas de ciencia de datos —principalmente escritas en Python— y crear canalizaciones y flujos de trabajo basados en código y comandos. También se puede usar como kernel de Jupyter Notebook. |
| [Neptune.ai](https://neptune.ai) | Plataforma orientada a la comunidad que ayuda a los científicos de datos a crear y compartir modelos de aprendizaje automático. Neptune facilita el trabajo en equipo, la gestión de infraestructura, la comparación de modelos y la reproducibilidad. |
| [steppy](https://github.com/minerva-ml/steppy) | Biblioteca ligera de Python para experimentar con aprendizaje automático de forma rápida y reproducible. Ofrece una interfaz muy sencilla que permite diseñar canalizaciones de aprendizaje automático claras. |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | Colección seleccionada de redes neuronales, transformadores y modelos para agilizar y mejorar el trabajo de aprendizaje automático. |
| [Datalab from Google](https://cloud.google.com/datalab/docs/) | Explora, visualiza, analiza y transforma datos de forma interactiva con lenguajes conocidos, como Python y SQL. |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | Entorno personal y portátil de Hadoop que incluye una docena de tutoriales interactivos. |
| [R](https://www.r-project.org/) | Entorno de software gratuito para computación estadística y gráficos. |
| [Tidyverse](https://www.tidyverse.org/) | Colección de paquetes de R con una filosofía definida, diseñada para la ciencia de datos. Todos comparten una misma filosofía de diseño, gramática y estructuras de datos. |
| [RStudio](https://www.rstudio.com) | Entorno de desarrollo integrado: potente interfaz de usuario para R, gratuita, de código abierto y compatible con Windows, Mac y Linux. |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | Distribución de Python totalmente gratuita y lista para empresas, para procesamiento de datos a gran escala, analítica predictiva y computación científica. |
| [Pandas GUI](https://github.com/adrotog/PandasGUI) | Interfaz gráfica para Pandas. |
| [NuriStat](https://github.com/baramgay/stat) | Alternativa gratuita y de código abierto a SPSS: aplicación de escritorio de estadística controlada por menús (pruebas t, ANOVA, regresión, análisis de supervivencia y ROC), con importación y exportación de archivos .sav de SPSS. |
| [Polars](https://github.com/pola-rs/polars) | Biblioteca rápida de DataFrame para Rust y Python, diseñada como alternativa más veloz a Pandas. |
| [CiteMe](https://citeme.app) | Generador gratuito de citas académicas con un verificador integrado que señala referencias inventadas o alucinadas. Busca en más de 11 bases de datos académicas (OpenAlex, PubMed, Semantic Scholar, CrossRef, SciELO), ofrece más de 40 estilos de cita y una API pública. No requiere registro; disponible en inglés, español, portugués, francés y alemán.|
| [Scikit-Learn](https://scikit-learn.org/stable/) | Aprendizaje automático en Python. |
| [NumPy](https://numpy.org/) | NumPy es fundamental para la computación científica con Python. Admite matrices y arreglos multidimensionales de gran tamaño e incluye numerosas funciones matemáticas de alto nivel para operar con ellos. |
| [Vaex](https://vaex.io/) | Biblioteca de Python que permite visualizar conjuntos de datos grandes y calcular estadísticas a gran velocidad. |
| [SciPy](https://scipy.org/) | SciPy trabaja con arreglos de NumPy y proporciona rutinas eficientes para integración numérica y optimización. |
| [Data Science Toolbox](https://www.coursera.org/learn/data-scientists-tools) | Curso de Coursera. |
| [Data Science Toolbox](https://datasciencetoolbox.org/) | Blog. |
| [Wolfram Data Science Platform](https://www.wolfram.com/data-science-platform/) | Aplica el enfoque de Wolfram a datos numéricos, textuales, de imágenes, SIG y otros: realiza análisis y visualizaciones de ciencia de datos de todo tipo y genera automáticamente informes interactivos y completos, todo ello con el revolucionario lenguaje Wolfram, basado en conocimiento. |
| [Datadog](https://www.datadoghq.com/) | Soluciones, código y DevOps para ciencia de datos a gran escala. |
| [Variance](https://variancecharts.com/) | Crea potentes visualizaciones de datos web sin escribir JavaScript. |
| [Kite Development Kit](https://kitesdk.org/docs/current/index.html) | El kit de desarrollo de software Kite (licencia Apache, versión 2.0) es un conjunto de bibliotecas, herramientas, ejemplos y documentación que facilita la creación de sistemas sobre el ecosistema Hadoop. |
| [Domino Data Labs](https://www.dominodatalab.com) | Ejecuta, escala, comparte e implementa tus modelos sin infraestructura ni configuración. |
| [Apache Flink](https://flink.apache.org/) | Plataforma eficiente y distribuida para el procesamiento de datos de propósito general. |
| [Apache Hama](https://hama.apache.org/) | Proyecto de código abierto de alto nivel de Apache que permite realizar análisis avanzados más allá de MapReduce. |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Colección de algoritmos de aprendizaje automático para tareas de minería de datos. |
| [Octave](https://www.gnu.org/software/octave/) | Lenguaje interpretado de alto nivel de GNU, destinado principalmente a cálculos numéricos (alternativa gratuita a Matlab). |
| [Apache Spark](https://spark.apache.org/) | Computación en clúster ultrarrápida. |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | Servicio para exponer trabajos de análisis de Apache Spark y modelos de aprendizaje automático como servicios web en tiempo real, por lotes o reactivos. |
| [Data Mechanics](https://www.datamechanics.co) | Plataforma de ciencia e ingeniería de datos que hace que Apache Spark sea más fácil de usar y rentable para desarrolladores. |
| [Caffe](https://caffe.berkeleyvision.org/) | Marco de aprendizaje profundo. |
| [Torch](https://torch.ch/) | Marco de computación científica para LuaJIT. |
| [Nervana's python based Deep Learning Framework](https://github.com/NervanaSystems/neon) | Marco de aprendizaje profundo de referencia de Intel® Nervana™, diseñado para ofrecer el máximo rendimiento en todo tipo de hardware. |
| [Skale](https://github.com/skale-me/skale) | Procesamiento de datos distribuido de alto rendimiento en Node.js. |
| [Aerosolve](https://airbnb.io/aerosolve/) | Paquete de aprendizaje automático creado para las personas. |
| [Intel framework](https://github.com/intel/idlf) | Marco de aprendizaje profundo de Intel®. |
| [Datawrapper](https://www.datawrapper.de/) | Plataforma de código abierto para que todo el mundo pueda crear gráficos sencillos, correctos e incrustables. También está en [github.com](https://github.com/datawrapper/datawrapper). |
| [Tensor Flow](https://www.tensorflow.org/) | TensorFlow es una biblioteca de software de código abierto para inteligencia artificial. |
| [Natural Language Toolkit](https://www.nltk.org/) | Kit de herramientas introductorio, pero potente, para procesamiento del lenguaje natural y clasificación. |
| [FunASR](https://github.com/modelscope/FunASR) | Kit de reconocimiento de voz de nivel industrial compatible con más de 50 idiomas, con VAD, puntuación, diarización de hablantes y detección de emociones integrados. Incluye un servidor API compatible con OpenAI. |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | Plataforma gratuita integral y sin código para anotación de texto y entrenamiento y ajuste de modelos de aprendizaje profundo. Admite de serie modelos Spark NLP de reconocimiento de entidades nombradas, clasificación, extracción de relaciones y estado de aserción. Sin límites de usuarios, equipos, proyectos ni documentos. |
| [nlp-toolkit for node.js](https://www.npmjs.com/package/nlp-toolkit) | Este módulo cubre algunos principios e implementaciones básicos de PLN y se centra principalmente en el rendimiento. Al trabajar con datos de muestra o de entrenamiento en PLN, la memoria se agota rápidamente. Por eso, todas las implementaciones usan flujos y solo mantienen en memoria los datos que se están procesando en cada momento. |
| [Julia](https://julialang.org) | Lenguaje de programación dinámico de alto nivel y alto rendimiento para computación técnica. |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | Backend del lenguaje Julia integrado con el entorno interactivo Jupyter. |
| [Apache Zeppelin](https://zeppelin.apache.org/) | Cuaderno web para realizar análisis de datos interactivos y basados en datos y crear documentos colaborativos con SQL, Scala y más. |
| [Featuretools](https://github.com/alteryx/featuretools) | Marco de código abierto escrito en Python para la ingeniería automatizada de características. |
| [Optimus](https://github.com/hi-primus/optimus) | Limpieza, preprocesamiento, ingeniería de características y análisis exploratorio de datos, además de aprendizaje automático sencillo con backend PySpark. |
| [Albumentations](https://github.com/albumentations-team/albumentations) | Biblioteca rápida de aumento de imágenes, independiente de marcos, que implementa diversas técnicas de aumento. Admite de serie clasificación, segmentación y detección. Se ha utilizado para ganar varias competiciones de aprendizaje profundo en Kaggle, Topcoder y talleres de CVPR. |
| [DVC](https://github.com/iterative/dvc) | Sistema de control de versiones de código abierto para ciencia de datos. Ayuda a realizar el seguimiento y organizar proyectos, y a hacerlos reproducibles. En su forma más básica, permite versionar y compartir archivos grandes de datos y modelos. |
| [Lambdo](https://github.com/asavinov/lambdo) | Motor de flujos de trabajo que simplifica notablemente el análisis de datos al combinar en una sola canalización (i) ingeniería de características y aprendizaje automático, (ii) entrenamiento y predicción de modelos y (iii) población de tablas y evaluación de columnas. |
| [Feast](https://github.com/feast-dev/feast) | Almacén de características para gestionar, descubrir y acceder a características de aprendizaje automático. Feast ofrece una vista coherente de los datos de características tanto para entrenar como para servir modelos. |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | Plataforma para aprendizaje automático y profundo reproducible y escalable. |
| [UBIAI](https://ubiai.tools) | Herramienta de anotación de texto fácil de usar para equipos, con funciones de autoanotación muy completas. Admite reconocimiento de entidades, relaciones y clasificación de documentos, así como anotación OCR para etiquetar facturas. |
| [Trains](https://github.com/allegroai/clearml) | Gestor de experimentos automático, control de versiones y DevOps para IA. |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | Plataforma de código abierto de aprendizaje automático intensivo en datos con almacén de características. Ingiere y gestiona características para acceso en línea (MySQL Cluster) y sin conexión (Apache Hive), y permite entrenar y servir modelos a escala. |
| [MindsDB](https://github.com/mindsdb/mindsdb) | Marco AutoML explicable para desarrolladores. Con MindsDB puedes crear, entrenar y usar modelos de aprendizaje automático de última generación con una sola línea de código. |
| [Lightwood](https://github.com/mindsdb/lightwood) | Marco basado en PyTorch que divide los problemas de aprendizaje automático en bloques pequeños que se pueden combinar fácilmente para crear modelos predictivos con una sola línea de código. |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | Paquete de Python de código abierto que amplía Pandas a AWS y conecta DataFrames con servicios de datos de AWS (Amazon Redshift, AWS Glue, Amazon Athena, Amazon EMR, etc.). |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | Servicio de AWS que permite a los desarrolladores que trabajan con Amazon Web Services añadir análisis de imágenes a sus aplicaciones. Cataloga recursos, automatiza flujos de trabajo y extrae información de contenido multimedia y aplicaciones.|
| [Amazon Textract](https://aws.amazon.com/textract/) | Extrae automáticamente texto impreso, escritura a mano y datos de cualquier documento. |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | Detecta defectos en productos mediante visión artificial para automatizar la inspección de calidad. Identifica componentes ausentes, daños en vehículos y estructuras e irregularidades para un control de calidad exhaustivo.|
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | Automatiza revisiones de código y optimiza el rendimiento de las aplicaciones con recomendaciones basadas en aprendizaje automático.|
| [CML](https://github.com/iterative/cml) | Kit de herramientas de código abierto para integrar la integración continua en proyectos de ciencia de datos. Entrena y prueba modelos automáticamente en entornos similares a producción con GitHub Actions y GitLab CI, y genera informes visuales para solicitudes de cambios y de incorporación. |
| [Dask](https://dask.org/) | Biblioteca de Python de código abierto que facilita la transición del código analítico a sistemas de computación distribuida (macrodatos). |
| [DuckDB](https://github.com/duckdb/duckdb) | Sistema de gestión de bases de datos SQL OLAP integrado en el proceso. |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | Marco basado en Python para estadística inferencial, pruebas de hipótesis y regresión. |
| [Gensim](https://radimrehurek.com/gensim/) | Biblioteca de código abierto para modelar temas en texto de lenguaje natural. |
| [spaCy](https://spacy.io/) | Kit de herramientas de procesamiento del lenguaje natural de alto rendimiento. |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | Aplicación de hojas de cálculo web con integración completa del lenguaje de programación Python. |
|[Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook)|Manual de ciencia de datos con Python: texto completo en cuadernos Jupyter.|
| [Shapley](https://github.com/benedekrozemberczki/shapley) | Marco basado en datos para cuantificar el valor de clasificadores en un conjunto de modelos de aprendizaje automático. |
| [DAGsHub](https://dagshub.com) | Plataforma basada en herramientas de código abierto para gestionar datos, modelos y canalizaciones. |
| [Deepnote](https://deepnote.com) | Nuevo tipo de cuaderno de ciencia de datos, compatible con Jupyter, con colaboración en tiempo real y ejecución en la nube. |
| [Valohai](https://valohai.com) | Plataforma MLOps que gestiona la orquestación de máquinas, la reproducibilidad automática y la implementación. |
| [PyMC3](https://docs.pymc.io/) | Biblioteca de Python para programación probabilística (inferencia bayesiana y aprendizaje automático). |
| [PyStan](https://pypi.org/project/pystan/) | Interfaz de Python para Stan (inferencia y modelado bayesianos). |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | Aprendizaje no supervisado e inferencia de modelos ocultos de Markov. |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | Motor de análisis basado en aprendizaje automático para detectar valores atípicos y anomalías, y encontrar sus causas raíz. |
| [PySAD](https://github.com/selimfirat/pysad) | Biblioteca de Python para detectar anomalías en datos en flujo. |
| [Nimblebox](https://nimblebox.ai/) | Plataforma MLOps integral diseñada para que científicos de datos y profesionales del aprendizaje automático de todo el mundo descubran, creen y lancen aplicaciones multinube desde el navegador. |
| [Towhee](https://github.com/towhee-io/towhee) | Biblioteca de Python que facilita la codificación de datos no estructurados en incrustaciones vectoriales. |
| [LineaPy](https://github.com/LineaLabs/lineapy) | ¿Te frustra limpiar cuadernos Jupyter largos y desordenados? Con LineaPy, una biblioteca de Python de código abierto, bastan dos líneas de código para convertir código de desarrollo desordenado en canalizaciones de producción. |
| [envd](https://github.com/tensorchord/envd) | 🏕️ Entorno de desarrollo de aprendizaje automático para equipos de ciencia de datos e ingeniería de IA/ML. |
| [Explore Data Science Libraries](https://kandi.openweaver.com/explore/data-science) | Herramienta de búsqueda 🔎 para descubrir bibliotecas populares y nuevas, autores destacados, kits de proyectos en tendencia, debates, tutoriales y recursos de aprendizaje seleccionados. |
| [MLEM](https://github.com/iterative/mlem) | 🐶 Versiona e implementa tus modelos de aprendizaje automático siguiendo los principios de GitOps. |
| [MLflow](https://mlflow.org/) | Marco MLOps para gestionar modelos de aprendizaje automático durante todo su ciclo de vida. |
| [cleanlab](https://github.com/cleanlab/cleanlab) | Biblioteca de Python para IA centrada en los datos y detección automática de diversos problemas en conjuntos de datos de aprendizaje automático. |
| [AutoGluon](https://github.com/awslabs/autogluon) | AutoML para generar fácilmente predicciones precisas con datos de imágenes, texto, tablas, series temporales y multimodales. |
| [Arize AI](https://arize.com/) | Herramienta de observabilidad del plan comunitario de Arize AI para supervisar modelos de aprendizaje automático en producción y encontrar la causa raíz de problemas como la calidad de datos y la deriva del rendimiento. |
| [Aureo.io](https://aureo.io) | Plataforma de bajo código dedicada a crear inteligencia artificial. Permite diseñar canalizaciones y automatizaciones e integrarlas con modelos de inteligencia artificial a partir de los datos básicos del usuario. |
| [ERD Lab](https://www.erdlab.io/) | Herramienta gratuita en la nube para crear diagramas entidad-relación (ERD), diseñada para desarrolladores.
| [Arize-Phoenix](https://docs.arize.com/phoenix) | MLOps en un cuaderno: descubre información, detecta problemas, supervisa y ajusta tus modelos. |
| [Comet](https://github.com/comet-ml/comet-examples) | Plataforma MLOps con seguimiento de experimentos, gestión de modelos en producción, registro de modelos y linaje completo de datos, para respaldar el flujo de trabajo de aprendizaje automático desde el entrenamiento hasta producción. |
| [Opik](https://github.com/comet-ml/opik) | Evalúa, prueba y publica aplicaciones LLM durante todo su ciclo de desarrollo y producción. |
| [Synthical](https://synthical.com) | Entorno colaborativo de investigación impulsado por IA. Encuentra artículos pertinentes, crea colecciones para gestionar bibliografías y resume contenido, todo en un mismo lugar. |
| [teeplot](https://github.com/mmore500/teeplot) | Herramienta de flujo de trabajo para organizar automáticamente resultados de visualización de datos. |
| [Streamlit](https://github.com/streamlit/streamlit) | Marco de aplicaciones para proyectos de aprendizaje automático y ciencia de datos. |
| [Gradio](https://github.com/gradio-app/gradio) | Crea componentes de interfaz de usuario personalizables para modelos de aprendizaje automático. |
| [Weights & Biases](https://github.com/wandb/wandb) | Seguimiento de experimentos, control de versiones de conjuntos de datos y gestión de modelos. |
| [DVC](https://github.com/iterative/dvc) | Sistema de control de versiones de código abierto para proyectos de aprendizaje automático. |
| [Optuna](https://github.com/optuna/optuna) | Marco de software para optimizar hiperparámetros automáticamente. |
| [Ray Tune](https://github.com/ray-project/ray) | Biblioteca escalable para ajustar hiperparámetros. |
| [Apache Airflow](https://github.com/apache/airflow) | Plataforma para crear, programar y supervisar flujos de trabajo mediante programación. |
| [Prefect](https://github.com/PrefectHQ/prefect) | Sistema de gestión de flujos de trabajo para pilas de datos modernas. |
| [Kedro](https://github.com/kedro-org/kedro) | Marco de Python de código abierto para crear código de ciencia de datos reproducible y fácil de mantener. |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | Biblioteca ligera para crear y gestionar transformaciones de datos fiables. |
| [SHAP](https://github.com/slundberg/shap) | Enfoque de teoría de juegos para explicar los resultados de cualquier modelo de aprendizaje automático. |
| [InterpretML](https://github.com/interpretml/interpret) | Implementa la máquina de potenciación explicable (EBM), un modelo moderno de aprendizaje automático totalmente interpretable basado en modelos aditivos generalizados (GAM). Este paquete de código abierto también ofrece herramientas de visualización para EBM, otros modelos de caja transparente y explicaciones de modelos de caja negra. |
| [LIME](https://github.com/marcotcr/lime) | Explica las predicciones de cualquier clasificador de aprendizaje automático. |
| [flyte](https://github.com/flyteorg/flyte) | Plataforma de automatización de flujos de trabajo para aprendizaje automático. |
| [dbt](https://github.com/dbt-labs/dbt-core) | Herramienta de compilación de datos. |
| [zasper](https://github.com/zasper-io/zasper) | Entorno de desarrollo integrado superpotente para ciencia de datos. |
| [skrub](https://github.com/skrub-data/skrub/) | Biblioteca de Python que facilita el preprocesamiento y la ingeniería de características para el aprendizaje automático con datos tabulares. |
| [Glyph](https://github.com/Koda-OSS/Glyph) | Biblioteca TypeScript independiente del marco para generar, buscar y comparar huellas MinHash y acelerar la similitud de texto, la deduplicación y la recuperación. |
| [Codeflash](https://www.codeflash.ai/) | Publica código Python ultrarrápido, siempre. |
| [Hugging Face](https://huggingface.co/) | Popular plataforma abierta para compartir modelos de aprendizaje automático y conjuntos de datos, y colaborar en proyectos de PLN e IA generativa. |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | Proyecto de código abierto que crea mapas de redes de relaciones automáticamente al analizar datos públicos con LLM y los visualiza como grafos interactivos. |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | Perfilador de datos de código abierto centrado en descubrir y validar patrones complejos, como [reglas de asociación numéricas](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb), [dependencias diferenciales](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb), [restricciones de denegación](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb) y más. |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | Kit personal para analizar genomas, con scripts de Python que analizan datos de ADN sin procesar en 17 categorías (riesgos para la salud, ascendencia, farmacogenómica, nutrición, psicología y más) y generan una visualización HTML de una sola página con estilo de terminal. |
| [RunMat](https://github.com/runmat-org/runmat) | Entorno de ejecución rápido con sintaxis MATLAB, ejecución automática en CPU/GPU y kernels de arreglos fusionados. |
| [Turbostream](https://github.com/turboline-ai/turbostream) | Interfaz de terminal para experimentar con motores de reglas personalizados y análisis LLM selectivo en flujos de datos en tiempo real, sin preocuparse por la infraestructura de streaming ni el control de contrapresión. |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | «Atlas de fallos» de código abierto con 16 problemas recurrentes en canalizaciones LLM y RAG, síntomas observables y soluciones sugeridas para equipos de ciencia de datos. |
| [Deploybase](https://deploybase.ai/) | Consulta en tiempo real los precios de GPU y LLM de todos los proveedores de nube e inferencia. |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | LLM agéntico para ciencia de datos autónoma, capaz de completar por sí solo una amplia variedad de tareas de ciencia de datos sin intervención humana. |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | Análisis exploratorio de datos sobrehumano. Encuentra interacciones entre características y efectos de subgrupos en datos tabulares que los LLM y la exploración manual pasan por alto, con valores p, tamaños del efecto y citas bibliográficas. Gratis para datos públicos. |
| [AI for Database](https://aifordatabase.com) | Habla con tu base de datos en lenguaje natural, sin necesidad de SQL. Obtén información al instante, crea paneles que se actualizan solos y activa flujos de trabajo automáticos cuando cambien los datos. |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | Bot de trading de criptomonedas con IA y red neuronal LSTM (84,6 % de precisión). Detecta subidas repentinas en tiempo real, utiliza modelos validados con evaluación walk-forward y admite varios exchanges (Bybit, Binance, OKX y Gate.io). De código abierto. |
| [Future AGI](https://github.com/future-agi/future-agi) | Plataforma de código abierto para simular, evaluar, rastrear, proteger, enrutar y optimizar aplicaciones LLM y de agentes de IA mediante un único ciclo de retroalimentación: los agentes no solo se supervisan, sino que también mejoran por sí mismos. Se puede alojar por cuenta propia. Apache-2.0. |
| [ipynbtopdf](https://ipynbtopdf.xyz/) | Visor y exportador de cuadernos Jupyter basado en navegador que convierte cuadernos `.ipynb` a PDF, HTML y Python sin instalar Python ni TeX. |



## Literature and Media
**[`^        back to top        ^`](#awesome-data-science)**

Esta sección incluye más lecturas, canales para ver y charlas para escuchar.

### Books
**[`^        back to top        ^`](#awesome-data-science)**

- [Ciencia de datos desde cero: primeros principios con Python](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [Inteligencia artificial con Python - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [Aprendizaje automático desde cero](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [Aprendizaje automático probabilístico: introducción](https://probml.github.io/pml-book/book1.html)
- [Cómo liderar en ciencia de datos](https://www.manning.com/books/how-to-lead-in-data-science) - Acceso anticipado.
- [Combatir la pérdida de clientes con datos](https://www.manning.com/books/fighting-churn-with-data)
- [Ciencia de datos a escala con Python y Dask](https://www.manning.com/books/data-science-with-python-and-dask)
- [Manual de ciencia de datos con Python](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [El manual de ciencia de datos: consejos e ideas de 25 científicos de datos excepcionales](https://www.thedatasciencehandbook.com/)
- [Piensa como un científico de datos](https://www.manning.com/books/think-like-a-data-scientist)
- [Introducción a la ciencia de datos](https://www.manning.com/books/introducing-data-science)
- [Ciencia de datos práctica con R](https://www.manning.com/books/practical-data-science-with-r)
- [Ciencia de datos para todos los días](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(cheaper PDF version)](https://gum.co/everydaydata)
- [Explorando la ciencia de datos](https://www.manning.com/books/exploring-data-science) - Extracto gratuito del libro electrónico.
- [Explorando la jungla de los datos](https://www.manning.com/books/exploring-the-data-jungle) - Extracto gratuito del libro electrónico.
- [Problemas clásicos de informática con Python](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [Matemáticas para programadores](https://www.manning.com/books/math-for-programmers) Acceso anticipado.
- [R en acción, tercera edición](https://www.manning.com/books/r-in-action-third-edition) Acceso anticipado.
- [Campamento intensivo de ciencia de datos](https://www.manning.com/books/data-science-bookcamp) Acceso anticipado.
- [Pensamiento en ciencia de datos: la próxima revolución científica, tecnológica y económica](https://www.springer.com/gp/book/9783319950914)
- [Ciencia de datos aplicada: lecciones aprendidas para la empresa basada en datos](https://www.springer.com/gp/book/9783030118204)
- [El manual de ciencia de datos](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [Procesamiento esencial del lenguaje natural](https://www.manning.com/books/getting-started-with-natural-language-processing) - Acceso anticipado.
- [Minería de conjuntos de datos masivos](https://www.mmds.org/) - Libro electrónico gratuito, complementado por un curso en línea.
- [Pandas en acción](https://www.manning.com/books/pandas-in-action) - Acceso anticipado.
- [Algoritmos genéticos y programación genética](https://www.taylorfrancis.com/books/9780429141973)
- [Avances en algoritmos evolutivos](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - Descarga gratuita.
- [Programación genética: nuevos enfoques y aplicaciones exitosas](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - Descarga gratuita.
- [Algoritmos evolutivos](https://www.intechopen.com/books/evolutionary-algorithms) - Descarga gratuita.
- [Avances en programación genética, vol. 3](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - Descarga gratuita.
- [Algoritmos genéticos y computación evolutiva](https://www.talkorigins.org/faqs/genalg/genalg.html) - Descarga gratuita.
- [Optimización convexa](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - Libro de optimización convexa de Stephen Boyd; descarga gratuita.
- [Análisis de datos con Python y PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - Acceso anticipado.
- [Ciencia de datos con R](https://r4ds.had.co.nz/)
- [Desarrolla una carrera en ciencia de datos](https://www.manning.com/books/build-a-career-in-data-science)
- [Campamento de aprendizaje automático](https://mlbookcamp.com/) - Acceso anticipado.
- [Aprendizaje automático práctico con Scikit-Learn, Keras y TensorFlow, 2.ª edición](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [Infraestructura eficaz para ciencia de datos](https://www.manning.com/books/effective-data-science-infrastructure)
- [MLOps práctico: cómo preparar modelos para producción](https://valohai.com/mlops-ebook/)
- [Análisis de datos con Python y PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [Regresión: una guía sencilla](https://www.manning.com/books/regression-a-friendly-guide) - Acceso anticipado.
- [Sistemas de streaming: qué, dónde, cuándo y cómo del procesamiento de datos a gran escala](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [Ciencia de datos en la línea de comandos: afrontar el futuro con herramientas probadas](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [Aprendizaje automático con Python - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [Aprendizaje profundo](https://www.deeplearningbook.org/)
- [Diseño de plataformas de datos en la nube](https://www.manning.com/books/designing-cloud-data-platforms) - Acceso anticipado.
- [Introducción al aprendizaje estadístico con aplicaciones en R](https://www.statlearning.com/)
- [Los elementos del aprendizaje estadístico: minería de datos, inferencia y predicción](https://hastie.su.domains/ElemStatLearn/)
- [Aprendizaje profundo con PyTorch](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [Redes neuronales y aprendizaje profundo](https://neuralnetworksanddeeplearning.com)
- [Recetario de aprendizaje profundo](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [Introducción al aprendizaje automático con Python](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [Inteligencia artificial: fundamentos de agentes computacionales, 2.ª edición](https://artint.info/index.html) - Versión HTML gratuita.
- [La búsqueda de la inteligencia artificial: historia de ideas y logros](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - Descarga gratuita.
- [Algoritmos de grafos para ciencia de datos](https://www.manning.com/books/graph-algorithms-for-data-science) - Acceso anticipado.
- [Malla de datos en acción](https://www.manning.com/books/data-mesh-in-action) - Acceso anticipado.
- [Julia para análisis de datos](https://www.manning.com/books/julia-for-data-analysis) - Acceso anticipado.
- [Inferencia causal para ciencia de datos](https://www.manning.com/books/julia-for-data-analysis) - Acceso anticipado.
- [Acertijos de expresiones regulares y asistentes de programación con IA](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants) by David Mertz
- [Sumérgete en el aprendizaje profundo](https://d2l.ai/)
- [Datos para todos](https://www.manning.com/books/data-for-all)
- [Aprendizaje automático interpretable: guía para explicar modelos de caja negra](https://christophm.github.io/interpretable-ml-book/) - Versión gratuita en GitHub.
- [Fundamentos de ciencia de datos](https://www.cs.cornell.edu/jeh/book.pdf) Descarga gratuita.
- [Comet para ciencia de datos: mejora tu capacidad para gestionar y optimizar el ciclo de vida de tus proyectos de ciencia de datos](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [Ingeniería de software para científicos de datos](https://www.manning.com/books/software-engineering-for-data-scientists) - Acceso anticipado.
- [Julia para ciencia de datos](https://www.manning.com/books/julia-for-data-science) - Acceso anticipado.
- [Introducción al aprendizaje estadístico](https://www.statlearning.com/) - Página de descarga.
- [Aprendizaje automático para principiantes absolutos](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [Unificar empresa, datos y código: diseñar productos de datos con JSON Schema](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [Comprender Bayes](https://www.manning.com/books/grokking-bayes)
- [Aprendizaje automático y preguntas sobre IA](https://sebastianraschka.com/books/ml-q-and-ai)
- [JavaScript para ciencia de datos](https://third-bit.com/js4ds/) - Página HTML gratuita.
- [Ciencia de datos aplicada](https://angewandtedatascience.de/) - Libro en alemán sobre ciencia de datos aplicada.
- [Las matemáticas detrás de la inteligencia artificial](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book): Libro gratuito de FreeCodeCamp que enseña las matemáticas que sustentan la IA con un lenguaje sencillo y desde una perspectiva de ingeniería.
- [Ciencia de datos para directivos](https://leanpub.com/eds): Guía de alto nivel sobre la gestión de equipos y proyectos de ciencia de datos.
- [Introducción a la estadística moderna](https://leanpub.com/imstat): Manual moderno y de acceso abierto sobre estadística, centrado especialmente en sus aplicaciones a la ciencia de datos.
- [El arte de la ciencia de datos](https://bookdown.org/rdpeng/artofdatascience/): Se centra en el «arte» del análisis de datos, en cómo plantear las preguntas adecuadas y perfeccionarlas.

#### Book Deals (Affiliated)

- [Oferta de libros electrónicos: ¡ahorra hasta un 45 %!](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [Aprendizaje automático causal](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b
)
- [Gestión de proyectos de aprendizaje automático](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [Inferencia causal para ciencia de datos](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [Datos para todos](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### Journals, Publications and Magazines
**[`^        back to top        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - Conferencia Internacional sobre Aprendizaje Automático.
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - Conferencia sobre Computación Genética y Evolutiva (GECCO).
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [Journal of Data Science](https://jds-online.org/journal/JDS) - Revista internacional dedicada a las aplicaciones de métodos estadísticos a gran escala.
- [Big Data Research](https://www.journals.elsevier.com/big-data-research)
- [Journal of Big Data](https://journalofbigdata.springeropen.com/)
- [Big Data & Society](https://journals.sagepub.com/home/bds)
- [Data Science Journal](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - Como Hacker News, pero sobre datos.
- [Data Science Trello Board](https://trello.com/b/rbpEfMld/data-science)
- [Medium Data Science Topic](https://medium.com/tag/data-science) - Publicaciones sobre ciencia de datos en Medium.
- [Towards Data Science Genetic Algorithm Topic](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) - Publicaciones sobre algoritmos genéticos en Towards Data Science.
- [Maxim AI](https://getmaxim.ai). Herramienta para simular, evaluar y observar agentes de IA.
- [8bitconcepts](https://8bitconcepts.com/) - Investigación y análisis del sector de la IA, con artículos sobre precios de IA, adopción empresarial y marcos de evaluación.

### Newsletters
**[`^        back to top        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - Boletín seleccionado de noticias e información sobre IA, elaborado por líderes del sector y dedicado a modelos, financiación, políticas y aplicaciones. Se publica tres veces por semana desde 2017 y tiene más de 40 000 suscriptores.
- [DataTalks.Club](https://datatalks.club). Boletín semanal sobre temas relacionados con los datos. [Archivo](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa).
- [The Analytics Engineering Roundup](https://roundup.getdbt.com/about). Boletín sobre ciencia de datos. [Archivo](https://roundup.getdbt.com/archive).
- [Techpresso](https://dupple.com/techpresso). Boletín diario gratuito sobre los avances más importantes en IA, aprendizaje automático y tecnología. [Archivo](https://dupple.com/techpresso).
- [DiamantAI](https://diamantai.substack.com). Ingeniería práctica de IA e IA generativa explicadas con sencillez: RAG, agentes y patrones para crear aplicaciones con LLM.
- [Bamboo Weekly](https://www.bambooweekly.com) - Ejercicios semanales de pandas basados en la actualidad y datos públicos del mundo real, con soluciones completas. Los números con más de dos años son gratuitos, al igual que las dos primeras preguntas y respuestas de los números actuales. [Archivo](https://www.bambooweekly.com/archive/).

### Mailing lists
**[`^        back to top        ^`](#awesome-data-science)**
- [Working Group - Research Software Engineering in the Digital Humanities](https://www.listserv.dfn.de/sympa/info/ag-dhrse). Lista de correo del grupo de trabajo de ingeniería de software de investigación en humanidades digitales (DH-RSE).

### Bloggers
**[`^        back to top        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - Archivo de Wes McKinney.
- [Matthew Russell](https://miningthesocialweb.com/) - Minería de la web social.
- [Greg Reda](https://www.gregreda.com/) - Blog personal de Greg Reda.
- [Julia Evans](https://jvns.ca/) - Antigua alumna del Recurse Center.
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - Página web personal.
- [Sean J. Taylor](https://seanjtaylor.com/) - Página web personal.
- [Drew Conway](https://drewconway.com/) - Página web personal.
- [Hilary Mason](https://hilarymason.com/) - Página web personal.
- [Noah Iliinsky](https://complexdiagrams.com/) - Blog personal.
- [Matt Harrison](https://hairysun.com/) - Blog personal.
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Science.
- [Prash Chan](https://www.mdmgeek.com/) - Blog tecnológico sobre gestión de datos maestros y todo lo relacionado con ella.
- [Clare Corthell](https://datasciencemasters.org/) - Máster de ciencia de datos de código abierto.
- [Datawrangling](https://www.datawrangling.org) de Peter Skomoroch. Aprendizaje automático, minería de datos y más.
- [Quora Data Science](https://www.quora.com/topic/Data-Science) - Preguntas y respuestas de expertos sobre ciencia de datos.
- [Siah](https://openresearch.wordpress.com/) Estudiante de doctorado en Berkeley.
- [Louis Dorard](https://www.ownml.co/blog/) Tecnólogo apasionado por la web y por los datos, grandes y pequeños.
- [Machine Learning Mastery](https://machinelearningmastery.com/) Ayuda a programadores profesionales a aplicar con confianza algoritmos de aprendizaje automático para resolver problemas complejos.
- [Daniel Forsyth](https://www.danielforsyth.me/) - Blog personal.
- [Data Science Weekly](https://www.datascienceweekly.org/) - Blog semanal de noticias.
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - Blog sobre ciencia de datos.
- [R Bloggers](https://www.r-bloggers.com/) - R Bloggers
- [The Practical Quant](https://practicalquant.blogspot.com/) Macrodatos.
- [Yet Another Data Blog](https://yet-another-data-blog.blogspot.com/) Otro blog sobre datos más.
- [KD Nuggets](https://www.kdnuggets.com/) Minería de datos, analítica, macrodatos y ciencia de datos; no es un blog, sino un portal.
- [Meta Brown](https://www.metabrown.com/blog/) - Blog personal.
- [Data Scientist](https://datascientists.com/) Contribuye a crear una cultura de ciencia de datos.
- [WhatSTheBigData](https://whatsthebigdata.com/) Aborda algunos o todos los temas anteriores, y explora su impacto en la tecnología de la información, el mundo empresarial, los organismos públicos y nuestras vidas.
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - Magnus Notitia
- [New Data Scientist](https://newdatascientist.blogspot.com/) Cómo una científica social se adentra en el mundo de los macrodatos.
- [Harvard Data Science](https://harvarddatascience.com/) - Reflexiones sobre computación estadística y visualización.
- [Data Science 101](https://ryanswanstrom.com/datascience101/) - Aprende a convertirte en científico de datos.
- [Kaggle Past Solutions](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [NYC Taxi Visualization Blog](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [Digital transformation](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Data Mania Blog](https://www.data-mania.com/blog/) - [The File Drawer](https://chris-said.io/) - Blog científico de Chris Said.
- [Emilio Ferrara's web page](https://www.emilio.ferrara.name/)
- [DataNews](https://datanews.tumblr.com/)
- [Reddit TextMining](https://www.reddit.com/r/textdatamining/)
- [Periscopic](https://periscopic.com/#!/news)
- [Hilary Parker](https://hilaryparker.com/)
- [Data Stories](https://datastori.es/)
- [Data Science Lab](https://datasciencelab.wordpress.com/)
- [Meaning of](https://www.kennybastani.com/)
- [Adventures in Data Land](https://blog.smola.org)
- [Dataclysm](https://theblog.okcupid.com/)
- [FlowingData](https://flowingdata.com/) - Visualización y estadística.
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O'reilly Learning Blog](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - Blog sobre la artesanía del aprendizaje automático.
- [Vademecum of Practical Data Science](https://datasciencevademecum.wordpress.com/) - Manual y recetas para crear soluciones de problemas reales basadas en datos.
- [Dataconomy](https://dataconomy.com/) - Blog sobre la nueva economía de los datos.
- [Springboard](https://www.springboard.com/blog/) - Blog con recursos para quienes aprenden ciencia de datos.
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - Sitio web completo con material de estudio de ciencia de datos y analítica.
- [Occam's Razor](https://www.kaushik.net/avinash/) - Centrado en analítica web.
- [Data School](https://www.dataschool.io/) - ¡Tutoriales de ciencia de datos para principiantes!
- [Colah's Blog](https://colah.github.io) - ¡Blog para comprender las redes neuronales!
- [Sebastian's Blog](https://ruder.io/#open) - ¡Blog sobre PLN y aprendizaje por transferencia!
- [Distill](https://distill.pub) - ¡Dedicado a explicar el aprendizaje automático con claridad!
- [Chris Albon's Website](https://chrisalbon.com/) - Apuntes de ciencia de datos e IA.
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - Ciencia de datos con lenguajes de programación esotéricos.
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - Blog sobre algoritmos evolutivos.
- [Jingles](https://jinglescode.github.io/) - Reseñas y conceptos clave de artículos académicos.
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - Cuadernos de ciencia de datos.
- [Loic Tetrel](https://ltetrel.github.io/) - Blog de ciencia de datos.
- [Chip Huyen's Blog](https://huyenchip.com/blog/) - Ingeniería de aprendizaje automático, MLOps y uso del aprendizaje automático en empresas emergentes.
- [Maria Khalusova](https://www.mariakhalusova.com/) - Blog de ciencia de datos.
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - Blog sobre aprendizaje automático, aprendizaje profundo y ciencia de datos.
- [Santiago Basulto](https://medium.com/@santiagobasulto) - Ciencia de datos con Python.
- [Akhil Soni](https://medium.com/@akhil0435) - Aprendizaje automático, aprendizaje profundo y ciencia de datos.
- [Akhil Soni](https://akhilworld.hashnode.dev/) - Aprendizaje automático, aprendizaje profundo y ciencia de datos.
- [Applied AI Blogs](https://www.appliedaicourse.com/blog/) - Artículos detallados sobre conceptos de IA, aprendizaje automático y ciencia de datos, con aplicaciones prácticas.
- [Scaler Blogs](https://www.scaler.com/blog/) - Contenido educativo sobre desarrollo de software, IA y crecimiento profesional en tecnología.
- [Mlu github](https://mlu-explain.github.io/) - MLU, desarrollado por Amazon, ayuda a quienes trabajan en aprendizaje automático a aprender desde los fundamentos mediante diagramas interactivos.
- [Jan Oliver Rüdiger](https://notesjor.de/) - Aprendizaje automático, aprendizaje profundo y ciencia de datos, con especial atención a la minería de texto y datos.

### Presentations
**[`^        back to top        ^`](#awesome-data-science)**

- [Cómo convertirse en científico de datos](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [Introducción a la ciencia de datos](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [Introducción a los macrodatos empresariales para empresas](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [Cómo entrevistar a un científico de datos](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [Cómo compartir datos con un estadístico](https://github.com/jtleek/datasharing)
- [La ciencia de una gran carrera en ciencia de datos](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [¿A qué se dedica un científico de datos?](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [Creación de empresas emergentes de datos: rápida, grande y centrada](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [Cómo ganar competiciones de ciencia de datos con aprendizaje profundo](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [Científico de datos de pila completa](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### Podcasts
**[`^        back to top        ^`](#awesome-data-science)**

- [AI at Home](https://podcasts.apple.com/us/podcast/data-science-at-home/id1069871378)
- [AI Today](https://www.cognilytica.com/aitoday/)
- [Adversarial Learning](https://adversariallearning.com/)
- [Chai time Data Science](https://www.youtube.com/playlist?list=PLLvvXm0q8zUbiNdoIazGzlENMXvZ9bd3x)
- [Chain of Thought](https://www.chainofthought.show/)
- [Data Engineering Podcast](https://www.dataengineeringpodcast.com/)
- [Data Science at Home](https://datascienceathome.com/)
- [Data Science Mixer](https://community.alteryx.com/t5/Data-Science-Mixer/bg-p/mixer)
- [Data Skeptic](https://dataskeptic.com/)
- [Data Stories](https://datastori.es/)
- [Datacast](https://jameskle.com/writes/category/Datacast)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [DataTalks.Club](https://anchor.fm/datatalksclub)
- [Gradient Descent](https://wandb.ai/fully-connected/gradient-descent)
- [Learning Machines 101](https://www.learningmachines101.com/)
- [Let's Data (Brazil)](https://www.youtube.com/playlist?list=PLn_z5E4dh_Lj5eogejMxfOiNX3nOhmhmM)
- [Linear Digressions](https://lineardigressions.com/)
- [Not So Standard Deviations](https://nssdeviations.com/)
- [O'Reilly Data Show Podcast](https://www.oreilly.com/radar/topics/oreilly-data-show-podcast/)
- [Partially Derivative](https://partiallyderivative.com/)
- [Superdatascience](https://www.superdatascience.com/podcast/)
- [The Data Engineering Show](https://www.dataengineeringshow.com/)
- [The Radical AI Podcast](https://www.radicalai.org/)
- [What's The Point](https://fivethirtyeight.com/tag/whats-the-point/)
- [The Analytics Engineering Podcast](https://roundup.getdbt.com/s/the-analytics-engineering-podcast)

### YouTube Videos & Channels
**[`^        back to top        ^`](#awesome-data-science)**

- [¿Qué es el aprendizaje automático?](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng: aprendizaje profundo, aprendizaje autodidacta y aprendizaje de características no supervisado](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36: ciencia de datos para principiantes, por Tomi Mester](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [Aprendizaje profundo: inteligencia a partir de macrodatos](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [Entrevista con Geoffrey Hinton, «padrino» de la IA y el aprendizaje profundo de Google](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [Introducción al aprendizaje profundo con Python](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [¿Qué es el aprendizaje automático y cómo funciona?](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School - Formación en ciencia de datos](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - Data Science Education
- [Redes neuronales para principiantes, por Melanie Warrick (mayo de 2015)](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Serie de vídeos sobre redes neuronales, por Hugo Larochelle](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Shane Legg, cofundador de Google DeepMind: superinteligencia artificial](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [Introducción a la ciencia de datos](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [Ciencia de datos con algoritmos genéticos](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [Ciencia de datos para principiantes](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted: tutoriales sobre temas intermedios de aprendizaje automático y profundo](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community: entrevistas a expertos del sector sobre aprendizaje automático en producción](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk: contenido técnico sin filtros y sin fines comerciales; no escucharás argumentos de venta molestos](https://www.youtube.com/c/machinelearningstreettalk)
- [Redes neuronales, de 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Redes neuronales desde cero, de Sentdex](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Manning Publications YouTube channel](https://www.youtube.com/c/ManningPublications/featured)
- [Pregunta al Dr. Chong: cómo liderar en ciencia de datos - Parte 1](https://youtu.be/JYuQZii5o58)
- [Pregunta al Dr. Chong: cómo liderar en ciencia de datos - Parte 2](https://youtu.be/SzqIXV-O-ko)
- [Pregunta al Dr. Chong: cómo liderar en ciencia de datos - Parte 3](https://youtu.be/Ogwm7k_smTA)
- [Pregunta al Dr. Chong: cómo liderar en ciencia de datos - Parte 4](https://youtu.be/a9usjdzTxTU)
- [Pregunta al Dr. Chong: cómo liderar en ciencia de datos - Parte 5](https://youtu.be/MYdQq-F3Ws0)
- [Pregunta al Dr. Chong: cómo liderar en ciencia de datos - Parte 6](https://youtu.be/LOOt4OVC3hY)
- [Modelos de regresión: aplicación de la regresión de Poisson simple](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [Arquitecturas de aprendizaje profundo](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [Modelado y análisis de series temporales](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [Lista de reproducción integral de ciencia de datos](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [Introducción a la ciencia de datos - LinkedIn](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)
- [AI Talks](https://aietalks.com/) - Resúmenes consultables e índice temático de charlas prácticas de ingeniería de IA y vídeos de conferencias.

## Socialize
**[`^        back to top        ^`](#awesome-data-science)**

A continuación encontrarás enlaces a redes sociales. ¡Conecta con otros científicos de datos!

- [Cuentas de Facebook](#facebook-accounts)
- [Cuentas de Twitter](#twitter-accounts)
- [Canales de Telegram](#telegram-channels)
- [Comunidades de Slack](#slack-communities)
- [Grupos de GitHub](#github-groups)
- [Competiciones de ciencia de datos](#data-science-competitions)


### Facebook Accounts
**[`^        back to top        ^`](#awesome-data-science)**

- [Data](https://www.facebook.com/data)
- [Big Data Scientist](https://www.facebook.com/Bigdatascientist)
- [Data Science Day](https://www.facebook.com/datascienceday/)
- [Data Science Academy](https://www.facebook.com/nycdatascience)
- [Facebook Data Science Page](https://www.facebook.com/pages/Data-science/431299473579193?ref=br_rs)
- [Data Science London](https://www.facebook.com/pages/Data-Science-London/226174337471513)
- [Data Science Technology and Corporation](https://www.facebook.com/DataScienceTechnologyCorporation?ref=br_rs)
- [Data Science - Closed Group](https://www.facebook.com/groups/1394010454157077/?ref=br_rs)
- [Center for Data Science](https://www.facebook.com/centerdatasciences?ref=br_rs)
- [Big data hadoop NOSQL Hive Hbase](https://www.facebook.com/groups/bigdatahadoop/)
- [Analytics, Data Mining, Predictive Modeling, Artificial Intelligence](https://www.facebook.com/groups/data.analytics/)
- [Big Data Analytics using R](https://www.facebook.com/groups/434352233255448/)
- [Big Data Analytics with R and Hadoop](https://www.facebook.com/groups/rhadoop/)
- [Big Data Learnings](https://www.facebook.com/groups/bigdatalearnings/)
- [Big Data, Data Science, Data Mining & Statistics](https://www.facebook.com/groups/bigdatastatistics/)
- [BigData/Hadoop Expert](https://www.facebook.com/groups/BigDataExpert/)
- [Data Mining / Machine Learning / AI](https://www.facebook.com/groups/machinelearningforum/)
- [Data Mining/Big Data - Social Network Ana](https://www.facebook.com/groups/dataminingsocialnetworks/)
- [Vademecum of Practical Data Science](https://www.facebook.com/datasciencevademecum)
- [Veri Bilimi Istanbul](https://www.facebook.com/groups/veribilimiistanbul/)
- [The Data Science Blog](https://www.facebook.com/theDataScienceBlog/)


### Twitter Accounts
**[`^        back to top        ^`](#awesome-data-science)**

| Twitter | Descripción |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | Pruebas en directo y a gran velocidad para científicos de datos que quieren monetizar sus modelos como estrategias de trading. |
| Big Data Mania | Experto en visualización de datos, periodista de datos, especialista en crecimiento y autor de Data Science for Dummies (2015). |
| [Big Data Science](https://twitter.com/analyticbridge) | Macrodatos, ciencia de datos, modelado predictivo, analítica empresarial, Hadoop, investigación operativa y sobre decisiones. |
| Charlie Greenbacker | Director de ciencia de datos en @ExploreAltamira. |
| [Chris Said](https://twitter.com/Chris_Said) | Científico de datos en Twitter. |
| [Clare Corthell](https://twitter.com/clarecorthell) | Desarrollo, diseño y ciencia de datos en @mattermark #hackerei. |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | #datascientist en @Ekimetrics. #machinelearning #dataviz #DynamicCharts #Hadoop #R #Python #NLP #Bitcoin #dataenthousiast |
| [Data Science Central](https://twitter.com/DataScienceCtrl) | Recurso único del sector para profesionales de los macrodatos. |
| [Data Science London](https://twitter.com/ds_ldn)  | Ciencia de datos. Macrodatos. Trucos con datos. Aficionados a los datos. Empresas emergentes de datos. Datos abiertos. |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | Documenta mi camino desde analista de datos SQL hasta científica de datos, mientras curso un máster de ingeniería. |
| [Data Science Report](https://twitter.com/TedOBrien93) | Su misión es orientar y promover carreras profesionales en ciencia de datos y analítica. |
| [Data Science Tips](https://twitter.com/datasciencetips) | ¡Consejos y trucos para científicos de datos de todo el mundo! #datascience #bigdata |
| [Data Vizzard](https://twitter.com/DataVisualizati) | Visualización de datos, seguridad y ámbito militar. |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j | |
| [DJ Patil](https://twitter.com/dpatil) | Responsable de datos de la Casa Blanca; vicepresidente en @ RelateIQ. |
| [Domino Data Lab](https://twitter.com/DominoDataLab) | |
| [Drew Conway](https://twitter.com/drewconway) | Aficionado de los datos, hacker y estudiante de conflictos. |
| Emilio Ferrara | #Networks, #MachineLearning y #DataScience. Trabajo en #Social Media. Investigador posdoctoral en @IndianaUniv. |
| [Erin Bartolo](https://twitter.com/erinbartolo) | Trabajo con #BigData y mantengo una relación de amor y odio con todo el bombo que lo rodea. Responsable del programa de #DataScience en @iSchoolSU. |
| [Greg Reda](https://twitter.com/gjreda)  | Trabajo en _GrubHub_ con datos y pandas. |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) | Presidente de KDnuggets y experto en analítica, macrodatos, minería de datos y ciencia de datos; cofundador de KDD y SIGKDD; fue científico jefe de dos empresas emergentes y filósofo a tiempo parcial. |
| [Hadley Wickham](https://twitter.com/hadleywickham) | Científico jefe en RStudio y profesor adjunto de estadística en la Universidad de Auckland, la Universidad de Stanford y la Universidad Rice. |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | Científico de datos. |
| [Hilary Mason](https://twitter.com/hmason) | Científica de datos residente en @accel. |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | Retuitea publicaciones sobre ciencia de datos. |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Científico en Facebook y desarrollador de Julia. Autor de Machine Learning for Hackers y Bandit Algorithms for Website Optimization. Sus tuits solo reflejan sus opiniones. |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Científico de datos principal en el equipo de ciencia de datos de Microsoft. |
| [Julia Evans](https://twitter.com/b0rk) | Hacker, Pandas y análisis de datos. |
| [Kenneth Cukier](https://twitter.com/kncukier) | Editor de datos de The Economist y coautor de Big Data (https://www.big-data-book.com/). |
| Kevin Davenport | Organizador de https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/ |
| [Kevin Markham](https://twitter.com/justmarkham) | Instructor de ciencia de datos y fundador de [Data School](https://www.dataschool.io/). |
| [Kim Rees](https://twitter.com/krees) | Herramientas y visualización de datos interactiva. Flâneuse de datos. |
| [Kirk Borne](https://twitter.com/KirkDBorne) | Científico de datos, doctor en astrofísica e importante referente de #BigData. |
| Linda Regber | Narración y visualización de datos. |
| [Luis Rei](https://twitter.com/lmrei) | Estudiante de doctorado. Programación, móviles y web; inteligencia artificial, robótica inteligente, aprendizaje automático, minería de datos, procesamiento del lenguaje natural y ciencia de datos. |
| Mark Stevenson | Especialista en selección de personal para analítica de datos en Salt (@SaltJobs). Analítica, perspectivas, macrodatos y ciencia de datos. |
| [Matt Harrison](https://twitter.com/__mharrison__) | Opiniones de un desarrollador de Python de pila completa, autor e instructor que ahora trabaja como científico de datos. De vez en cuando, padre, esposo y aficionado a la jardinería orgánica. |
| [Matthew Russell](https://twitter.com/ptwobrussell) | Minería de la web social. |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu)  | Científico de datos en BizQualify y desarrollador. |
| [Monica Rogati](https://twitter.com/mrogati) | Datos en Jawbone. Convirtió datos en historias y productos en LinkedIn. Minería de texto, aprendizaje automático aplicado y sistemas de recomendación. Exjugadora, excodificadora y creadora de nombres. |
| [Noah Iliinsky](https://twitter.com/noahi) | Diseñador de visualización e interacción. Ciclista práctico. Autor de libros sobre visualización: https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | Analista y consultor de computación en la nube, macrodatos y datos abiertos. Escritor, ponente y moderador. Analista de investigación en Gigaom. |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | Crea sistemas inteligentes para automatizar tareas y mejorar decisiones. Emprendedor y antiguo científico de datos principal en @LinkedIn. Aprendizaje automático, productos y redes. |
| [Prash Chan](https://twitter.com/MDMGeek) | Arquitecto de soluciones en IBM y bloguero sobre gestión de datos maestros, calidad y gobernanza de datos. Ciencia de datos, Hadoop, macrodatos y nube. |
| [Quora Data Science](https://twitter.com/q_datascience)  | Tema de ciencia de datos de Quora. |
| [R-Bloggers](https://twitter.com/Rbloggers) | Publica entradas de blogs de la comunidad de R, conferencias de ciencia de datos y (¡también!) ofertas de empleo para científicos de datos. |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | Informático que investiga la inteligencia artificial. Entusiasta de los datos y líder comunitario de @DataIsBeautiful. Defensor de #OpenScience. |
| [Recep Erol](https://twitter.com/EROLRecep) | Entusiasta de la ciencia de datos en UALR. |
| [Ryan Orban](https://twitter.com/ryanorban) | Científico de datos, origamista genético y aficionado al hardware. |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | Científico social. Hacker. Equipo de ciencia de datos de Facebook. Temas: experimentos, inferencia causal, estadística, aprendizaje automático y economía. |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | #DataScience en Cisco. |
| [Harsh B. Gupta](https://twitter.com/harshbg) | Científico de datos en BBVA Compass. |
| [Spencer Nelson](https://twitter.com/spenczar_n) | Aficionado a los datos. |
| [Talha Oz](https://twitter.com/tozCSS) | Le interesan ABM, SNA, DM, ML, PLN, HI, Python y Java. Kaggler y científico de datos en percentiles superiores. |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | Procesamiento de eventos complejos, macrodatos, inteligencia artificial y aprendizaje automático. Apasionado de la programación y el código abierto. |
| [Terry Timko](https://twitter.com/Terry_Timko) | Gobernanza de la información; macrodatos; datos como servicio; ciencia de datos; convergencia de datos abiertos, sociales y empresariales. |
| [Tony Baer](https://twitter.com/TonyBaer) | Analista de TI en Ovum, especializado en macrodatos y gestión de datos, con algo de ingeniería de sistemas. |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | Científico de datos, autor y emprendedor. Cofundador de @DataCommunityDC. Fundador de @DistrictDataLab. #DataScience #BigData #DataDC |
| [Vamshi Ambati](https://twitter.com/vambati) | Ciencia de datos en PayPal. #NLP, #machinelearning; doctorado y antiguo alumno de Carnegie Mellon (blog: https://allthingsds.wordpress.com ). |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas (biblioteca de análisis de datos de Python). |
| [WileyEd](https://twitter.com/WileyEd) | Director sénior de analítica de macrodatos en @Seagate y antiguo empleado de @McKinsey. Promotor de #BigData y #Analytics; entusiasta de #Hadoop, #Cloud, #Digital y #R. |
| [WNYC Data News Team](https://twitter.com/datanews) | Equipo de noticias de datos de @WNYC: practica periodismo basado en datos, lo hace visual y muestra su trabajo. |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | Autor sobre ciencia de datos. |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | Autor sobre ciencia de datos; publica principalmente sobre programación en Julia. |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | Empresa emergente de IA y ciencia de datos con sede en Inglaterra, Reino Unido. |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | Aprendizaje automático, aprendizaje profundo y ciencia de datos, con especial atención a la minería de texto y datos. |

### Telegram Channels
**[`^        back to top        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – Primer canal de Telegram sobre ciencia de datos. Trata temas técnicos y divulgativos relacionados con la ciencia de datos: IA, macrodatos, aprendizaje automático, estadística, matemáticas en general y sus aplicaciones.
- [Loss function porn](https://t.me/loss_function_porn) — Publicaciones atractivas sobre ciencia de datos y aprendizaje automático, con vídeos y visualizaciones gráficas.
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – Noticias diarias sobre aprendizaje automático.


### Slack Communities
[top](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### GitHub Groups
- [Berkeley Institute for Data Science](https://github.com/BIDS)

### Data Science Competitions

Algunas plataformas de competiciones de minería de datos.

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## Fun

- [Infografías](#infographics)
- [Conjuntos de datos](#datasets)
- [Cómics](#comics)


### Infographics
**[`^        back to top        ^`](#awesome-data-science)**

| Vista previa                                                                                                                                                                                                                                     | Descripción                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png)                                                                                                                                                | [Diferencias clave entre un científico de datos y un ingeniero de datos](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer)                                                                                         |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                    | Guía visual de DataCamp para convertirse en científico de datos en 8 pasos: [DataCamp](https://www.datacamp.com) [(imagen)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                                                              |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png)                                                                                                                                                | Mapa mental de las habilidades necesarias ([imagen](https://i.imgur.com/FxsL3b8.png))                                                                                                                                                                                          |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png)                                                                                              | Swami Chandrasekaran creó un [plan de estudios en forma de mapa de metro](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/).                                                                                                                                            |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png)                                                                                                                                                | por [@kzawadz](https://twitter.com/kzawadz) en [Twitter](https://twitter.com/MktngDistillery/status/538671811991715840)                                                                                                                                      |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg)                                                                                                                                                | Por [Data Science Central](https://www.datasciencecentral.com/)                                                                                                                                                                                                |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png)                                                                                                                                                | La batalla de la ciencia de datos: R frente a Python                                                                                                                                                                                                                               |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png)                                                                                                                                                | Cómo elegir técnicas estadísticas o de aprendizaje automático                                                                                                                                                                                                     |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg)                                                                                                           | [Choosing the Right Estimator](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator)                                                                                                                                                                                                                                 |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png)                                                                                                                                                | El sector de la ciencia de datos: quién hace qué                                                                                                                                                                                                                     |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png)                                                                                                                                                | Diagrama de Euler de ciencia de datos (no de ~~Venn~~)                                                                                                                                                                                                                          |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | Distintas habilidades y funciones en ciencia de datos, de [Springboard](https://www.springboard.com)                                                                                       |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="Errores con los datos que hay que evitar" />](https://data-literacy.geckoboard.com/poster/)                                                 | Una forma sencilla y amena de enseñar a tus colegas que no son científicos de datos ni estadísticos [a evitar errores con los datos](https://data-literacy.geckoboard.com/poster/). De las [lecciones de alfabetización de datos](https://data-literacy.geckoboard.com/) de Geckoboard. |

### Datasets
**[`^        back to top        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - Conjuntos de datos específicos de aeronaves y fuentes de vigilancia dependiente automática por radiodifusión (ADS-B).
- [Chinese Tea Dataset](https://chinatea.house/dataset/) - Conjunto de datos abierto y seleccionado de más de 100 tés chinos, con categoría, origen, nivel de cafeína, notas de sabor, oxidación y parámetros de preparación. Disponible en JSON y CSV.
- [College ROI Dataset](https://github.com/thomasthinks/college-roi-data) - Estimaciones del rendimiento de la inversión a lo largo de la vida para unos 30 000 programas universitarios de grado de EE. UU. en 1775 instituciones, elaboradas con datos de FREOPP, IPEDS y precios regionales de BEA. Incluye 5 archivos CSV con diccionario de datos, licencia CC BY 4.0 y DOI de Zenodo.
- [AI Displacement Tracker](https://github.com/noahaust2/ai-displacement-tracker) - Conjunto de datos estructurado que registra 92 casos de reducción de plantilla atribuidos a la IA y que afectaron a 453 748 trabajadores en 12 países y 11 sectores. Formatos JSON y CSV. Licencia CC BY 4.0.
- [Packrift Packaging Optimization Benchmark Corpus](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - Conjunto público de productos de embalaje generado a partir de 1000 registros SKU de especificaciones exactas, con archivos CSV y JSON descargables para análisis de logística de comercio electrónico y almacenes.
- [Pokemon Card Centering Measurements](https://github.com/rrh1441/pokemon-card-centering-measurements) - 320 anotaciones medidas de centrado al estilo PSA (porcentajes de los bordes izquierdo/derecho y superior/inferior, e inclinación) de 302 cartas Pokémon reales anunciadas en eBay. CSV, CC BY 4.0 y DOI de Zenodo.
- [Pokemon Card Sold-Price Reference by Grade](https://github.com/rrh1441/pokemon-card-sold-price-reference) - Precio de venta mediano por grado (sin certificar, PSA 9 y PSA 10) para 486 cartas Pokémon, con tamaño de muestra e indicador de confianza para cada carta. CSV, CC BY 4.0 y DOI de Zenodo.
- [Evidaxis Momentum Snapshots](https://evidaxis.org) - Instantáneas semanales de la actividad pública de desarrollo y citas de sistemas de IA de código abierto y orientados a la investigación, direccionadas por contenido y reproducibles byte a byte a partir de datos públicos. JSON y CSV para cada fecha; CC0; DOI 10.5281/zenodo.21076011.
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - Portal de datos abiertos del Gobierno de EE. UU.
- [United States Census Bureau](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - Explora el mundo de los datos públicos: busca y analiza rápidamente miles de millones de registros publicados por gobiernos, empresas y organizaciones.
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [The official portal for European data](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Link, fuente de referencia de conjuntos de datos financieros, económicos y alternativos.
- [Congressional Stock Brain](https://congressionalstockbrain.com) - Herramienta gratuita con IA que puntúa según su importancia las declaraciones de operaciones bursátiles de miembros del Congreso de EE. UU. conforme a la STOCK Act. Señales evaluadas automáticamente a partir de declaraciones públicas de 537 legisladores.
- [figshare.com](https://figshare.com/)
- [GeoLite Legacy Downloadable Databases](https://dev.maxmind.com/geoip)
- [Hugging Face Datasets](https://huggingface.co/datasets)
- [Japan Neighborhoods](https://japanneighborhoods.com) - Conjunto de datos en inglés con estadísticas delictivas de Tokio en 5078 barrios durante 7 años (36 222 registros, 2018-2024), a partir de datos abiertos de la Policía Metropolitana de Tokio. Incluye mapa interactivo de delitos, clasificación de seguridad e índice del coste de vida. Licencia CC BY.
- [The Quiet-Broke Index](https://jeevesagency.github.io/quiet-broke-index/) - Clasificación compuesta de 30 áreas metropolitanas que muestra qué proporción de los ingresos familiares de 400 000 dólares se destina a vivienda, impuestos, cuidado infantil, sanidad y transporte. Metodología abierta, gratuito y sin registro por correo.
- [Crime Brasil](https://crimebrasil.com.br) - Plataforma de datos abiertos sobre estadísticas delictivas de Brasil. Incluye datos por barrio en Rio Grande do Sul (2,99 millones de incidentes en 79 024 barrios, 2022–2025), por municipio en MG y RJ, además de datos nacionales de carreteras de PRF y violencia interpersonal de DATASUS. API REST gratuita, CSV/Parquet, actualizaciones diarias y licencia CC BY 4.0.
- [US Truck-Involved Fatal Crashes (FARS) 2018-2024](https://doi.org/10.5281/zenodo.20487070) - Subconjunto filtrado del Sistema de Informes de Análisis de Fatalidades de NHTSA que abarca 33 898 accidentes mortales con camiones comerciales medianos y pesados en los 50 estados de EE. UU., entre 2018 y 2024. Incluye el [boletín interactivo Vision Zero](https://accidentlawyerreview.com/research/vision-zero-report-card/) que compara 19 ciudades, una canalización reproducible de Python en [GitHub](https://github.com/MarvinBregiosa/vision-zero-fars) y un espejo en HuggingFace. DOI permanente, CC BY 4.0.
- [State of Peptides 2026](https://peptahub.com/state-of-peptides-2026) - Conjunto de referencia estructurado de 156 compuestos peptídicos y relacionados, cada uno con categoría de estado regulatorio, clase, vía, semivida, peso molecular, número CAS, cantidad de referencias e identificadores de PubChem/DrugBank/Wikidata. CSV y JSON, sin inicio de sesión, CC BY 4.0.
- [Quora's Big Datasets Answer](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [Public Big Data Sets](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [A Deep Catalog of Human Genetic Variation](https://www.internationalgenome.org/data)
- [A community-curated database of well-known people, places, and things](https://developers.google.com/freebase/)
- [Google Public Data](https://www.google.com/publicdata/directory)
- [World Bank Data](https://data.worldbank.org/)
- [NYC Taxi data](https://chriswhong.github.io/nyctaxi/)
- [Open Data Philly](https://www.opendataphilly.org/) Conecta a las personas con los datos de Filadelfia.
- [grouplens.org](https://grouplens.org/datasets/) Conjuntos de datos de películas (con valoraciones), libros y wikis.
- [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/ml/) - Contiene conjuntos de datos adecuados para el aprendizaje automático.
- [Conjuntos de datos de calidad investigadora](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1) de [Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)
- [National Centers for Environmental Information](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/) (relacionado: [Kit de herramientas de resiliencia climática de EE. UU.](https://toolkit.climate.gov/))
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - Ofrece gratuitamente distintos datos para usos disponibles al público general. Haz clic en un conjunto de datos para obtener más información.
- [GHDx](https://ghdx.healthdata.org/) - Instituto de Métricas y Evaluación de la Salud; catálogo de conjuntos de datos demográficos y sanitarios de todo el mundo, incluidos los resultados de IHME.
- [St. Louis Federal Reserve Economic Data - FRED](https://fred.stlouisfed.org/)
- [New Zealand Institute of Economic Research – Data1850](https://data1850.nz/)
- [Open Data Sources](https://github.com/datasciencemasters/data)
- [UNICEF Data](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [NASA SocioEconomic Data and Applications Center - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [The GDELT Project](https://www.gdeltproject.org/)
- [Sweden, Statistics](https://www.scb.se/en/)
- [StackExchange Data Explorer](https://data.stackexchange.com) - Herramienta de código abierto para ejecutar consultas arbitrarias sobre datos públicos de la red Stack Exchange.
- [San Fransisco Government Open Data](https://datasf.org/opendata/)
- [IBM Asset Dataset](https://developer.ibm.com/exchanges/data/)
- [Open data Index](https://index.okfn.org/)
- [Public Git Archive](https://github.com/src-d/datasets/tree/master/PublicGitArchive)
- [GHTorrent](https://ghtorrent.org/)
- [Microsoft Research Open Data](https://msropendata.com/)
- [Open Government Data Platform India](https://data.gov.in/)
- [Google Dataset Search (beta)](https://datasetsearch.research.google.com/)
- [NAYN.CO Turkish News with categories](https://github.com/naynco/nayn.data)
- [Covid-19](https://github.com/datasets/covid-19)
- [Covid-19 Google](https://github.com/google-research/open-covid-19-data)
- [Enron Email Dataset](https://www.cs.cmu.edu/~./enron/)
- [5000 Images of Clothes](https://github.com/alexeygrigorev/clothing-dataset)
- [IBB Open Portal](https://data.ibb.gov.tr/en/)
- [The Humanitarian Data Exchange](https://data.humdata.org/)
- [250k+ Job Postings](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - Conjunto de datos en expansión con ofertas de empleo históricas de Luxemburgo desde 2020 hasta hoy. Gratuito, con más de 250 000 ofertas alojadas en AWS Data Exchange.
- [FinancialData.Net](https://financialdata.net/documentation) - Conjuntos de datos financieros: mercado bursátil, estados financieros, sostenibilidad y más.
- [HDD Price Index](https://github.com/AdamDudley/hddhunt-price-index) - Conjunto de datos abiertos diarios del precio más bajo de discos duros SATA internos nuevos de 3,5 pulgadas por terabyte (USD/TB), según capacidad en Amazon EE. UU., con series históricas. CSV, JSON y JSONL, sin inicio de sesión, CC BY 4.0.
- [BDE Score](https://github.com/hbhqq9/bde-score) - Análisis bursátil multimercado con IA y puntuación BDE transparente para 73 valores (EE. UU./Hong Kong/A-shares). Cumple el artículo 50 de la Ley de IA de la UE. Licencia MIT.
- [Google Dataset Search](https://datasetsearch.research.google.com/) – Encuentra conjuntos de datos en la web.
- [notesjor corpus-collection](https://notes.jan-oliver-ruediger.de/korpora/) - Corpus gratuitos (más de 6000 millones de tokens), principalmente en alemán histórico y contemporáneo.
- [CLARIN-Repository](https://lindat.mff.cuni.cz/repository/home) - CLARIN es un repositorio europeo de conjuntos de datos científicos.
- [GBIF](https://www.gbif.org/) - Infraestructura Mundial de Información en Biodiversidad: más de 2400 millones de registros de presencia de especies. API abierta y gratuita para modelado ecológico e investigación de aprendizaje automático.
- [FAOSTAT](https://www.fao.org/faostat/en/) - Estadísticas de la FAO de las Naciones Unidas sobre producción y comercio de alimentos, uso de la tierra y emisiones en más de 245 países. API gratuita y descarga masiva.
- [Movebank](https://www.movebank.org/) - Plataforma gratuita que archiva más de 6000 millones de registros de movimientos de animales procedentes de GPS y telemetría por satélite. API REST abierta, útil para modelado espaciotemporal y aprendizaje automático de trayectorias.
- [Encyclopedia of Life](https://eol.org/) - Datos estructurados abiertos de más de 1,9 millones de especies, con rasgos, clasificación y contenido multimedia. API gratuita y descargas masivas para tareas de biodiversidad y clasificación de especies.
- [FirstData](https://github.com/MLT-OSS/FirstData) - Base de conocimiento de fuentes de datos autorizadas de gran cobertura mundial. Más de 210 fuentes seleccionadas de gobiernos, organizaciones internacionales e instituciones de investigación. Integración MCP para agentes de IA. Licencia MIT.
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - Paquete de Python para acceder con una sola línea a 38 conjuntos de datos de investigación abiertos de América Latina (salud, neurociencia, salud mental y economía). Instálalo con `pip install latamdata-py`.
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - Datos gratuitos de seguridad medioambiental por código postal para más de 42 000 códigos postales de EE. UU.: calidad del agua y del aire, contaminación por PFAS, radón, plomo, riesgo de inundaciones y otros 11 ámbitos. API REST pública, paquetes npm/PyPI y licencia CC BY 4.0.
- [Helium](https://heliumtrades.com/mcp-page/) - Corpus de noticias en tiempo real con características estructuradas de sesgo en más de 15 dimensiones (más de 3,2 millones de artículos y 5000 fuentes), datos bursátiles en directo (acciones, ETF y criptomonedas) con análisis generado por IA, valoración de opciones con métricas de probabilidad y griegas completas, e históricos de cadenas de opciones para investigación cuantitativa. Disponible mediante servidor MCP o API REST.
- [Verified Supplement Evidence](https://github.com/erinheit451/verified-supplement-evidence) - Conjunto de datos sobre complementos alimenticios clasificado por nivel de evidencia, que cubre dosis, biodisponibilidad según la forma, interacciones entre fármacos y nutrientes, prevalencia de carencias de NHANES, señales de reacciones adversas de FDA FAERS y coste por dosis eficaz. Cada afirmación clínica cita un PMID de PubMed. CC BY 4.0, DOI 10.57967/hf/9356.
- [US Provider Industry Payments](https://github.com/npiwho/us-provider-payments) - 1,65 millones de profesionales sanitarios estadounidenses vinculados mediante NPI a pagos de empresas farmacéuticas y de dispositivos declarados en CMS Open Payments (2019-2025): totales, cantidad de pagos, principal pagador y tipo de pago, con desgloses por estado y especialidad. CSV comprimido con gzip, sin inicio de sesión, CC0, DOI de Zenodo 10.5281/zenodo.23098004.
- [WhatFontIs-Bench](https://github.com/whatfontis/WhatFontIs-Bench) - Referencia sintética para identificar familias tipográficas, con 11 995 imágenes de palabras escritas en 600 fuentes conocidas y anotaciones de recuadros para cada palabra y letra.
- [US Tariff Data](https://github.com/checkdutyrates/us-tariff-data) - Arancel armonizado de EE. UU. (unas 30 000 líneas con tipos), derechos adicionales del capítulo 99 por país (secciones 301, 232 y otras) y aranceles de importación de la UE por subpartida SA y origen; se actualiza con cada revisión del HTS. CSV y JSON, sin inicio de sesión, CC0 (datos de EE. UU.) y OGL v3 (datos de la UE), DOI de Zenodo 10.5281/zenodo.23093989.


### Comics
**[`^        back to top        ^`](#awesome-data-science)**

- [Comic compilation](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [Cartoons](https://www.kdnuggets.com/websites/cartoons.html)
- [Data Science Cartoons](https://www.cartoonstock.com/directory/d/data_science.asp)
- [Data Science: The XKCD Edition](https://davidlindelof.com/data-science-the-xkcd-edition/)

## Other Awesome Lists

- Other amazingly awesome lists can be found in the [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
- [Awesome Machine Learning](https://github.com/josephmisiti/awesome-machine-learning)
- [lists](https://github.com/jnv/lists)
- [awesome-dataviz](https://github.com/javierluraschi/awesome-dataviz)
- [awesome-python](https://github.com/vinta/awesome-python)
- [Data Science IPython Notebooks.](https://github.com/donnemartin/data-science-ipython-notebooks)
- [awesome-r](https://github.com/qinwf/awesome-R)
- [awesome-datasets](https://github.com/awesomedata/awesome-public-datasets)
- [awesome-Machine Learning & Deep Learning Tutorials](https://github.com/ujjwalkarn/Machine-Learning-Tutorials/blob/master/README.md)
- [Awesome Data Science Ideas](https://github.com/JosPolfliet/awesome-ai-usecases)
- [Machine Learning for Software Engineers](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- [Community Curated Data Science Resources](https://hackr.io/tutorials/learn-data-science)
- [Awesome Machine Learning On Source Code](https://github.com/src-d/awesome-machine-learning-on-source-code)
- [Awesome Community Detection](https://github.com/benedekrozemberczki/awesome-community-detection)
- [Awesome Graph Classification](https://github.com/benedekrozemberczki/awesome-graph-classification)
- [Awesome Decision Tree Papers](https://github.com/benedekrozemberczki/awesome-decision-tree-papers)
- [Awesome Fraud Detection Papers](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers)
- [Awesome Gradient Boosting Papers](https://github.com/benedekrozemberczki/awesome-gradient-boosting-papers)
- [Awesome Computer Vision Models](https://github.com/nerox8664/awesome-computer-vision-models)
- [Awesome Monte Carlo Tree Search](https://github.com/benedekrozemberczki/awesome-monte-carlo-tree-search-papers)
- [Glossary of common statistics and ML terms](https://www.analyticsvidhya.com/glossary-of-common-statistics-and-machine-learning-terms/)
- [100 NLP Papers](https://github.com/mhagiwara/100-nlp-papers)
- [Awesome Game Datasets](https://github.com/leomaurodesenv/game-datasets#readme)
- [ML/AI Interview Prep](https://github.com/aasimansari1/ml-interview-prep) - Más de 500 preguntas y respuestas sobre aprendizaje automático e IA con código ejecutable; abarca fundamentos de aprendizaje automático, aprendizaje profundo, PLN, PyTorch, canalizaciones de scikit-learn y diseño de sistemas.
- [Data Science Interviews Questions](https://github.com/alexeygrigorev/data-science-interviews)
- [Awesome Explainable Graph Reasoning](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
- [Top Data Science Interview Questions](https://www.interviewbit.com/data-science-interview-questions/)
- [Awesome Drug Synergy, Interaction and Polypharmacy Prediction](https://github.com/AstraZeneca/awesome-drug-pair-scoring)
- [Deep Learning Interview Questions](https://www.adaface.com/blog/deep-learning-interview-questions/)
- [Top Future Trends in Data Science in 2023](https://medium.com/the-modern-scientist/top-future-trends-in-data-science-in-2023-3e616c8998b8)
- [How Generative AI Is Changing Creative Work](https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work)
- [What is generative AI?](https://www.techtarget.com/searchenterpriseai/definition/generative-AI)
- [Top 100+ Machine Learning Interview Questions (Beginner to Advanced)](https://www.appliedaicourse.com/blog/machine-learning-interview-questions/)
- [Data Science Projects](https://github.com/veb-101/Data-Science-Projects)
- [Is Data Science a Good Career?](https://www.scaler.com/blog/is-data-science-a-good-career/)
- [The Future of Data Science: Predictions and Trends](https://www.appliedaicourse.com/blog/future-of-data-science/)
- [Data Science and Machine Learning: What’s The Difference?](https://www.appliedaicourse.com/blog/data-science-and-machine-learning-whats-the-difference/)
- [AI in Data Science: Uses, Roles, and Tools](https://www.scaler.com/blog/ai-in-data-science/)
- [Top 13 Data Science Programming Languages](https://www.appliedaicourse.com/blog/data-science-programming-languages/)
- [40+ Data Analytics Projects Ideas](https://www.appliedaicourse.com/blog/data-analytics-projects-ideas/)
- [Best Data Science Courses with Certificates](https://www.appliedaicourse.com/blog/best-data-science-courses/)
- [Generative AI Models](https://www.appliedaicourse.com/blog/generative-ai-models/)
- [Awesome Data Analysis](https://github.com/PavelGrigoryevDS/awesome-data-analysis) - Lista seleccionada de herramientas, bibliotecas y recursos para análisis de datos.
- [Awesome Evidence Synthesis](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - Lista seleccionada de herramientas de código abierto para revisiones sistemáticas, metaanálisis y síntesis de evidencia.
- [Awesome Python Math Packages](https://github.com/VascoSch92/awesome_python_math_packages) - Lista seleccionada de paquetes matemáticos de Python, desde álgebra lineal y optimización hasta estadística y topología.
- [AI Dev Jobs](https://aidevboard.com/) - Bolsa de empleo especializada en puestos de ingeniería de IA y aprendizaje automático, con más de 5400 ofertas y una API REST gratuita.


### Hobby
- [Awesome Music Production](https://github.com/ad-si/awesome-music-production)
