# Awesome Generative AI [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Una lista curada de proyectos y servicios modernos de Inteligencia Artificial Generativa.

Generative Artificial La inteligencia es una tecnología que crea contenido original como imágenes, sonidos y textos utilizando algoritmos de aprendizaje automático que se entrenan en grandes cantidades de datos. A diferencia de otras formas de AI, es capaz de crear salidas únicas y previamente invisibles como imágenes fotorrealistas, arte digital, música y escritura. Estas salidas a menudo tienen su propio estilo único e incluso pueden ser difíciles de distinguir de las obras creadas por el ser humano. Generative AI tiene una amplia gama de aplicaciones en campos tales como arte, entretenimiento, marketing, academia y informática.

Las contribuciones a esta lista son bienvenidas. Antes de presentar sus sugerencias, por favor revise el [Contribution Guidelines](CONTRIBUTING.md) para asegurar que sus entradas cumplan los criterios. Agregar enlaces a través [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) o crear un [issue](https://github.com/steven2358/awesome-generative-ai/issues) para empezar una discusión. Más proyectos se pueden encontrar en [Discoveries List](DISCOVERIES.md), donde mostramos una amplia gama de proyectos de IA Generativa.

## Índice

- [Lecturas recomendadas](#recommended-reading)
- [Texto](#text)
- [Codificación](#coding)
- [Agentes](#agents)
- [Imagen](#image)
- [Video](#video)
- [Audio](#audio)
- [Otros](#other)
- [Recursos didácticos](#learning-resources)
- [Más listas](#more-lists)

## Lecturas recomendadas

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - Artículo que resume las capacidades y limitaciones del modelo GPT-3 y su posible impacto en la sociedad. Por Alex Tamkin y Deep Ganguli, 5 de febrero de 2021.
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - Un examen amplio de la industria generativa de IA, que ofrece una perspectiva histórica y un análisis profundo del ecosistema de la industria. Por Sonya Huang, Pat Grady y GPT-3, 19 de septiembre de 2022.
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - Artículo sobre el aumento de la IA generativa, en particular el éxito del generador de imagen Stable Diffusion, y las controversias asociadas. New York Times, 21 de octubre de 2022.
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - Artículo sobre la creciente hipa e inversión en startups generativas de IA, con diversas industrias explorando sus posibles aplicaciones. Wired, 27 de octubre de 2022.
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - Una operación de Henry Kissinger, Eric Schmidt y Daniel Huttenlocher. Wall Street Journal, 24 de febrero de 2023.

### Hitos

- [OpenAI API](https://openai.com/blog/openai-api/) - Anuncio de la API de OpenAI para modelos AI de texto a texto basados en GPT-3. blog de OpenAI, 11 de junio de 2020.
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - Anuncio de Copilot, un nuevo programador de pares AI que le ayuda a escribir mejor código. GitHub blog, 29 de junio de 2021.
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - Anuncio de la liberación de DALL·E 2, un sistema avanzado de generación de imágenes con mayor resolución, capacidades de creación de imágenes ampliadas y diversas mitigación de seguridad. OpenAI blog, abril 6, 2022.
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - Anuncio de la liberación pública de Stable Diffusion, un modelo de generación de imágenes basado en AI entrenado en una amplia chatarra de Internet y licenciado bajo una licencia Creative ML OpenRAIL-M. Stable Diffusion blog, 22 agosto, 2022.
- [ChatGPT](https://openai.com/blog/chatgpt/) - Anuncio de ChatGPT, un modelo de conversación entrenado para responder preguntas de seguimiento, admitir errores, desafiar locales incorrectos y rechazar solicitudes inapropiadas. OpenAI blog, 30 de noviembre de 2022.
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - Microsoft anuncia una nueva versión de su buscador Bing, impulsado por un modelo OpenAI de próxima generación. Microsoft blog, 7 de febrero de 2023.
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM, un modelo de lenguaje de gran tamaño de 65 billones por Meta. Meta, 23 de febrero, 2023. #opensource
- [GPT-4](https://openai.com/research/gpt-4) - Anuncio del GPT-4, un gran modelo multimodal. OpenAI blog, 14 de marzo de 2023.
- [DALL·E 3](https://openai.com/index/dall-e-3/) - Anuncio del generador de imagen DALL·E 3. OpenAI blog, 20 de septiembre de 2023.
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - Presentación de Sora, un gran modelo de generación de vídeo. OpenAI, 15 de febrero de 2024.

## Texto

### Modelos

- [OpenAI API](https://openai.com/api/) - La API de OpenAI proporciona acceso a modelos GPT para lenguaje natural, codificación, generación de imágenes, audio y desarrollo de agentes.
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - Gopher by DeepMind es un modelo de lenguaje de 280 mil millones de metros.
- [OPT](https://huggingface.co/facebook/opt-350m) - Open Pretrained Transformers (OPT) by Facebook es un conjunto de transformadores pre-entrenados sólo decodificadores. [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - BLOOM by Hugging Face es un modelo similar al GPT-3 que ha sido entrenado en 46 idiomas diferentes y 13 idiomas de programación. #opensource
- [Llama](https://www.llama.com/) - Meta es un modelo de lenguaje de código abierto. #opensource
- [Claude](https://claude.ai/) - Habla con Claude, un asistente de IA de Antrópico.
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - Un chatbot de código abierto entrenado por LLaMA de ajuste fino en conversaciones compartidas por el usuario recolectadas de ShareGPT. #opensource
- [Mistral](https://mistral.ai/en/models) - LLMs de peso abierto por Mistral AI. #opensource
- [Grok](https://grok.x.ai/) - Un LLM por xAI con [open source](https://github.com/xai-org/grok-1) y pesos abiertos. #opensource
- [Qwen](https://qwenlm.github.io/) - Una serie de LLMs desarrolladas independientemente por Alibaba Cloud. [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - Una serie de LLM de código abierto por DeepSeek AI. [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - Modelos de fundación multimodal para el texto, el discurso, el vídeo y la generación de música
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Una serie de modelos de lenguaje MoE de código abierto por Moonshot AI para tareas de agente. #opensource
- [GLM](https://github.com/zai-org/GLM-5) - Una serie de modelos de lenguaje MoE de código abierto por Z.ai para tareas de agente. #opensource

### Chatbots

- [ChatGPT](https://chatgpt.com/) - ChatGPT by OpenAI es un modelo de lenguaje grande que interactúa de una manera conversacional.
- [Copilot](https://copilot.microsoft.com/) - Un compañero diario de AI de Microsoft.
- [Gemini](https://gemini.google.com/) - Una familia de modelo multimodal de lenguaje grande desarrollado por Google Deepmind.
- [Meta AI](https://www.meta.ai/) - Meta ayudante de IA para hacer las cosas, crear imágenes generadas por IA, obtener respuestas. Construido en Llama LLM.
- [DeepSeek](https://www.deepseek.com/) - Una interfaz de chatbot alimentada por los modelos de lenguaje de código abierto de DeepSeek. #opensource
- [Character.AI](https://character.ai/) - Caracter. AI te permite crear personajes y chatear con ellos.
- [Pi](https://pi.ai) - Una plataforma AI personalizada disponible como asistente digital.
- [Qwen](https://chat.qwenlm.ai/) - Qwen chatbot con generación de imágenes, procesamiento de documentos, integración de búsqueda web, comprensión de vídeo, etc.
- [Le Chat](https://chat.mistral.ai/) - Una interfaz de chat para los modelos de lenguaje de Mistral AI.
- [Kimi](https://www.kimi.com/) - Un asistente de IA de Moonshot AI con chat, investigación profunda, codificación y capacidades multiagentes.
- [Z.ai](https://chat.z.ai/) - Una plataforma de chatbot y agente AI de Z.ai alimentada por la familia modelo GLM.

### Interfaz personalizada

- [LibreChat](https://librechat.ai/) - LibreChat es una interfaz de chat gratuita y de código abierto para las IAs asistentes. [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - Una fuente abierta ChatGPT UI. [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### Motores de búsqueda

- [Perplexity AI](https://www.perplexity.ai/) - Herramientas de búsqueda propulsadas por AI.
- [Exa](https://exa.ai/) - Búsqueda impulsada por el modelo de lenguaje.
- [Phind](https://phind.com/) - Motor de búsqueda basado en IA.
- [You.com](https://you.com/) - Un motor de búsqueda construido en AI que proporciona a los usuarios una experiencia de búsqueda personalizada manteniendo sus datos 100% privados.
- [Komo](https://komo.ai/) - Un motor de búsqueda impulsado por AI.

### Motores de búsqueda locales

- [privateGPT](https://github.com/zylon-ai/private-gpt) - Haga preguntas a sus documentos sin conexión a Internet, utilizando el poder de LLMs.
- [quivr](https://github.com/QuivrHQ/quivr) - Bombear todos tus archivos y chatear con él usando tu segundo cerebro generativo de IA usando las incrustaciones de LLMs.

### Asistentes de escritura

- [Jasper](https://www.jasper.ai/) - Cree contenido más rápido con inteligencia artificial.
- [Compose AI](https://www.compose.ai/) - Compose AI es una extensión gratuita de Chrome que corta su tiempo de escritura en 40% con la autocompleción impulsada por AI.
- [Rytr](https://rytr.me/) - Rytr es un asistente de escritura de AI que te ayuda a crear contenido de alta calidad.
- [wordtune](https://www.wordtune.com/) - Asistente de escritura personal.
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite te ayuda a escribir con confianza y hacer tu trabajo más rápido de la idea al borrador final.
- [Moonbeam](https://www.gomoonbeam.com/) - Mejores blogs en una fracción del tiempo.
- [copy.ai](https://www.copy.ai/) - Escribe mejor copia de marketing y contenido con AI.
- [ChatSonic](https://writesonic.com/chat) - Un asistente de IA que permite la creación de texto y imagen.
- [Anyword](https://anyword.com/) - El asistente de escritura AI de cualquier palabra genera una copia efectiva para cualquiera.
- [Hypotenuse AI](https://www.hypotenuse.ai/) - Convertir algunas palabras clave en artículos originales, perspicaces, descripciones de productos y copia de redes sociales.
- [Lavender](https://www.lavender.ai/) - Asistente de correo electrónico de Lavender le ayuda a obtener más respuestas en menos tiempo.
- [Lex](https://lex.page/) - Un procesador de palabras con inteligencia artificial horneado en, para que pueda escribir más rápido.
- [Jenni](https://jenni.ai/) - Jenni es el asistente final de escritura que te ahorra horas de ideación y tiempo de escritura.
- [QuillBot](https://quillbot.com) - Herramienta parafraseadora impulsada por AI.
- [Postwise](https://postwise.ai/) - Escribe tuits, programa publicaciones y crece tus siguientes mensajes usando AI.
- [Copysmith](https://copysmith.ai/) - Solución de creación de contenidos AI para Enterprise &amp; eCommerce.
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - humanizador de texto AI con un oleoducto de reescritura multilingüe y ejemplos paso a paso. #opensource

### Extensiones de ChatGPT

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - Aumenta tus indicaciones de ChatGPT con resultados relevantes de la web.
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - Extensión ChatGPT para Google Sheets y Google Docs.
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - Utilice ChatGPT para resumir videos de YouTube.
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - Descubre, comparte, importa y utiliza las mejores indicaciones para ChatGPT &amp; Guarda tu historial de chat localmente.
- [ShareGPT](https://sharegpt.com/) - Comparte tus conversaciones de ChatGPT y explora conversaciones compartidas por otros.
- [Merlin](https://www.getmerlin.in/) - ChatGPT Más extensión en todos los sitios web.
- [Jetwriter](https://jetwriter.ai/) - Asistente de escritura AI para Chrome, escritorio y móvil.
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - Añadir varias funciones de ayuda en Jupyter Notebooks y Jupyter Lab, alimentado por ChatGPT.
- [editGPT](https://www.editgpt.app/) - Prueba fácilmente, edita y rastrea los cambios en tu contenido en chatGPT.
- [Forefront](https://www.forefront.ai/) - Una mejor experiencia de ChatGPT.
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - Extensión ChatGPT para Google Sheets, Google Docs, Google Slides, Google Forms.
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Asistente de correo electrónico AI para Gmail.

### Productividad

- [ChatPDF](https://www.chatpdf.com/) - Charla con cualquier PDF.
- [Mem](https://mem.ai/) - Mem es el primer espacio de trabajo impulsado por AI que es personalizado para usted. Amplifica tu creatividad, automatiza al mundano y mantente organizado automáticamente.
- [Taskade](https://www.taskade.com/) - Tareas, notas, listas estructuradas generadas y mapas mentales con Taskade AI.
- [Notion AI](https://www.notion.so/product/ai) - Escribe notas y documentos mejor, más eficientes.
- [Nekton AI](https://nekton.ai) - Automatiza tus flujos de trabajo con AI. Describa sus flujos de trabajo paso a paso en lenguaje llano.
- [Limitless](https://www.limitless.ai/) - Un asistente de memoria de AI para grabar conversaciones y reuniones, generar resúmenes y buscar interacciones pasadas a través de aplicaciones y una opcional usable.
- [NotebookLM](https://notebooklm.google/) - Una herramienta online de investigación y toma de notas para interactuar con documentos, impulsado por Google Gemini.
- [Open Notebook](https://www.open-notebook.ai) - Aplicación de código abierto de NotebookLM con más flexibilidad y características. [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - Una herramienta de código abierto para grabar la pantalla y la actividad de audio con búsqueda, automatizaciones y soporte de LLM locales. #opensource

### Auxiliares de reuniones

- [Otter.ai](https://otter.ai/) - Un asistente de reunión que graba audio, escribe notas, captura automáticamente diapositivas y genera resúmenes.
- [Cogram](https://www.cogram.com/) - Cogram toma notas automáticas en reuniones virtuales e identifica elementos de acción.
- [Sybill](https://www.sybill.ai/) - Sybill genera resúmenes de llamadas de ventas, incluyendo próximos pasos, puntos de dolor y áreas de interés, combinando transcripciones y ideas basadas en emociones.
- [Loopin AI](https://www.loopinhq.com/) - Loopin es un espacio de trabajo de reunión colaborativo que no sólo le permite grabar, transcribir &quot; reuniones de resúmenes usando AI, sino que también le permite autoorganizar las notas de reunión en la parte superior de su calendario.
- [Read AI](https://www.read.ai/) - Un copiloto AI para donde trabajes, haciendo tus reuniones, correos electrónicos y mensajes más productivos con resúmenes, descubrimiento de contenidos y recomendaciones.
- [Fireflies.ai](https://fireflies.ai) - Transcribe, resume, busca y analiza todas las conversaciones de tu equipo.

### Academia

- [Elicit](https://elicit.org/) - Elicit utiliza modelos de lenguaje para ayudarle a automatizar los flujos de trabajo de investigación, como partes de revisión de la literatura.
- [genei](https://www.genei.io/) - Sumar artículos académicos en segundos y ahorrar un 80% en sus tiempos de investigación.
- [Explainpaper](https://www.explainpaper.com/) - Una mejor manera de leer los documentos académicos. Subir un papel, resaltar texto confuso, obtener una explicación.
- [Consensus](https://consensus.app/search/) - El consenso es un motor de búsqueda que utiliza AI para encontrar respuestas en investigación científica.
- [scite](https://scite.ai/) - Una plataforma para descubrir y evaluar artículos científicos.
- [SciSpace](https://scispace.com/) - Un asistente de investigación de AI para entender la literatura científica.
- [STORM](https://storm.genie.stanford.edu/) - Un sistema de curación de conocimientos impulsado por LLM que investiga un tema y genera un informe completo con citas. [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - Discutir, descubrir y leer documentos arXiv.
- [ASReview](https://asreview.nl/) - Herramienta impulsada por IA de código abierto para exámenes sistemáticos, ayudando a los investigadores a proyectar grandes volúmenes de literatura académica eficientemente. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - Una herramienta de investigación profunda para buscar fuentes académicas, la web y documentos privados con LLM locales o nublados. [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - Una plataforma impulsada por AI para gestionar revisiones sistemáticas de la literatura con herramientas colaborativas de detección y gestión de datos.
- [Paper2Agent](https://paper2agent.ai/) - Convierte documentos de investigación y bases de código asociadas en servidores MCP probados y agentes de IA interactivos. [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - Un asistente de investigación académica para encontrar papeles, generar reportes de literatura citados y analizar datos de investigación.

### Líderes

- [Arena](https://arena.ai/) - Una plataforma abierta para el benchmarking AI de crowdsourced, auspiciada por investigadores de UC Berkeley SkyLab.
- [Artificial Analysis](https://artificialanalysis.ai/) - Artificial Analysis proporciona puntos de referencia objetivos e información para ayudar a elegir modelos AI y proveedores de alojamiento.
- [imgsys](https://imgsys.org/rankings) - Un modelo de imagen generativa arena por fal.ai.
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - Modelos de lenguaje clasificados y analizados por el uso a través de aplicaciones.
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - Puntos de referencia basados en expertos en LLM y tablas de modelos AI actualizadas.
- [LLM Stats](https://llm-stats.com/) - Compare modelos de IA a través de puntos de referencia, precios, velocidad y ventana contextual.

### Otros generadores de texto

- [EmailTriager](https://www.emailtriager.com/) - Utilice AI para redactar automáticamente las respuestas de correo electrónico en el fondo.
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poem Generator escribe un hermoso poema de rima para ti sobre cualquier tema, dado un mensaje de texto.

## Codificación

### Auxiliares de codificación

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilot utiliza el código OpenAI para sugerir código y funciones completas en tiempo real, directamente desde su editor.
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - Un sistema AI por OpenAI que traduce el lenguaje natural al código.
- [Ghostwriter](https://blog.replit.com/ai) - Un programador de pares impulsado por AI por replit.
- [Amazon Q](https://aws.amazon.com/q/) - El asistente generador de AWS que ayuda a responder preguntas, escribir código y automatizar tareas.
- [tabnine](https://www.tabnine.com/) - Código más rápido con las completas del código de funcionamiento completo.
- [Stenography](https://stenography.dev/) - Documentación de código automático.
- [Mintlify](https://mintlify.com/) - Escritor de documentación propulsada por AI.
- [AI2sql](https://www.ai2sql.io/) - Con AI2sql, los ingenieros y no ingenieros pueden escribir fácilmente consultas SQL eficientes sin errores sin conocer SQL.
- [Qodo](https://www.qodo.ai/) - Herramienta de revisión de código AI con flujos de trabajo agentes para IDEs, solicitudes de pull y seguridad.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - Herramienta impulsada por AI para el análisis automatizado de PR, comentarios, sugerencias y más.
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - Un clon de copiloto auto hospedado que utiliza la biblioteca detrás de llama.cpp para ejecutar el modelo de Códgen de 6 mil millones de parámetro Salesforce en 4 GB de RAM.
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - Aplicación de código abierto del intérprete de código ChatGPT de OpenAI. #opensource
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - Intérprete Código de OpenAI en tu terminal, corriendo localmente.
- [Continue](https://www.continue.dev/) - Asistente de código AI de código abierto. Conecta cualquier modelo y cualquier contexto para crear experiencias personalizadas de autocompleto y chat dentro del IDE. [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - Un agente de codificación autónomo de IA integrado directamente en el código VS. [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - An AI-native IDE that combine code editing with advanced AI assistance throughout the development process.
- [Plandex](https://github.com/plandex-ai/plandex) - Motor de programación de IA de código abierto para tareas complejas. [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Un asistente de IA configurable de código abierto en Jupyter Notebook y JupyterLab que soporta 100+ LLMs, incluyendo modelos locales de Ollama y GPT4All. #opensource
- [DataLine](https://dataline.app) - Una herramienta de análisis y visualización de datos impulsada por AI. [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - Generación de IU impulsada por impulso para React y Next.js, creando componentes listos para la producción.
- [Lovable](https://lovable.dev) - Generación de aplicaciones de nivel completo, convirtiendo las ideas en código implementable.
- [aider](https://aider.chat/) - Programación de pares de IA en su terminal, soportando múltiples proveedores de LLM. [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - Asistente de codificación AI de código abierto para el código VS, JetBrains y el CLI. [#opensource](https://github.com/Kilo-Org/kilocode)

### Herramientas para desarrolladores

- [Cohere](https://cohere.com/) - Cohere proporciona acceso a modelos avanzados de lenguaje grande y herramientas NLP.
- [Haystack](https://haystack.deepset.ai/) - Un marco para la construcción de aplicaciones NLP (por ejemplo, agentes, búsqueda semántica, respuesta a preguntas) con modelos de lenguaje.
- [LangChain](https://langchain.com/) - Marco para desarrollar aplicaciones impulsadas por modelos de lenguaje.
- [gpt4all](https://github.com/nomic-ai/gpt4all) - Un chatbot entrenó en una colección masiva de datos de asistentes limpios incluyendo código, historias y diálogo.
- [LLM App](https://github.com/pathwaycom/llm-app) - Biblioteca Python de código abierto para construir un oleoducto de datos habilitado para LLM en tiempo real.
- [LMQL](https://lmql.ai/) - LMQL es un lenguaje de consulta para modelos de lenguaje grande.
- [LlamaIndex](https://www.llamaindex.ai/) - A data framework for building LLM applications over external data.
- [Phoenix](https://phoenix.arize.com/) - Herramienta de código abierto para la observabilidad ML que funciona en su entorno de cuaderno, por Arize. Supervisar y ajustar modelos LLM, CV y tabular.
- [Cursor](https://cursor.com/) - Cursor es el IDE del futuro, construido para programar pares con Powerful AI.
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - Un marco neuro-simbólico para aplicaciones de construcción con LLMs en el núcleo.
- [Vanna.ai](https://vanna.ai/) - Un marco Python RAG de código abierto para generación SQL y funcionalidad relacionada. [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - Una plataforma LLMOps de personal completo para monitoreo, caché y gestión de LLM.
- [agenta](https://github.com/agenta-ai/agenta) - Una plataforma LLMOps de gama abierta para ingeniería, evaluación y despliegue rápidos. #opensource
- [Together AI](https://www.together.ai/) - Tren, inferencia fina y ejecutada en los modelos de IA acelerando, a bajo costo, y a escala de producción.
- [Gitingest](https://gitingest.com/) - Convierta cualquier repositorio Git en un simple digerir texto de su base de código para que pueda ser introducido en cualquier LLM. [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - Empaque su base de código en formatos compatibles con AI. [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inferencia del modelo LLaMA de Meta (y otros) en puro C/C+++. #opensource
- [bitnet.cpp](https://github.com/microsoft/BitNet) - Marco oficial de referencia para LLMs de 1 bit, por Microsoft. [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - Una interfaz unificada para LLMs. [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - Un marco de código bajo para la construcción de modelos AI personalizados como LLMs y otras redes neuronales profundas. [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - Una biblioteca de Python para los LLM de ajuste fino [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - Plataforma de observabilidad GenAI y LLM de código abierto nativa de OpenTelemetry con trazas y métricas. #opensource
- [Helicone AI](https://helicone.ai/) - Plataforma de observabilidad LLM de código abierto para aplicaciones de registro, monitoreo y depuración de IA. [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - Un agente de IB de código abierto a SQL y generativo con una capa semántica. [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - Una API para detectar y anotar alucinaciones en salidas LLM.
- [Opik](https://github.com/comet-ml/opik) - Una plataforma de código abierto para localizar, evaluar y supervisar aplicaciones de LLM. [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - Una plataforma de ingeniería LLM de código abierto para rastreo, evaluación, gestión rápida y métricas. [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - Una plataforma de código abierto para el seguimiento de experimentos ML, la evaluación de modelos y impulsos, el despliegue de modelos y la adición de observabilidad LLM. [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - Un SDK de confianza cero para anonimato PII localmente antes de enviar los avisos a LLMs y rehidratar la respuesta sin problemas.
- [Agentset](https://agentset.ai/) - Plataforma de código abierto para la construcción y evaluación de aplicaciones RAG y agentes. [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - Un router LLM de código abierto que dirige el agente solicita al modelo más rentable, con límites de uso y parámetros de referencia modelo. [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - A GitHub Action that uses LLMs (Claude, GPT, Ollama) to automatically translate i18n localization files. #opensource
- [Groq](https://groq.com/) - Una API de inferencia en la nube para ejecutar LLMs de código abierto, alimentado por hardware LPU personalizado.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Un estándar abierto para conectar modelos AI a herramientas externas y fuentes de datos. [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Una caja de arena del navegador de código abierto e infraestructura de automatización para agentes de IA, con gestión de sesión, capturas de pantalla, PDFs, proxies y herramientas anti-bot. #opensource
- [Bifrost](https://github.com/maximhq/bifrost) - Una puerta de entrada LLM de código abierto con enrutamiento, equilibrio de carga, correderas y observabilidad para modelos 1000+. #opensource
- [fal](https://fal.ai/) - Una plataforma de desarrolladores para acceder y desplegar modelos de imagen, vídeo, audio y generación 3D.

### Playgrounds

- [OpenAI Playground](https://platform.openai.com/playground) - Explore recursos, tutoriales, docs de API y ejemplos dinámicos.
- [Google AI Studio](https://aistudio.google.com/) - Una herramienta web para prototipo con Gemini y modelos experimentales.
- [GitHub Models](https://github.com/marketplace/models) - Encuentre y experimente con modelos de IA para desarrollar una aplicación de IA generativa.

### Local LLM Deployment

- [Ollama](https://github.com/ollama/ollama) - Levántate y corre con grandes modelos de idiomas localmente.
- [Open WebUI](https://github.com/open-webui/open-webui) - Una plataforma AI extensible, rica en funciones y fácil de usar diseñada para funcionar completamente fuera de línea. #opensource
- [Jan](https://jan.ai/) - Ejecute LLMs como Mistral o Llama2 local y offline en su computadora, o conéctese a API remotas de IA. [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - Una interfaz sencilla y potente para los modelos de IA locales y en línea.
- [PyGPT](https://pygpt.net/) - Personal de escritorio asistente de inteligencia artificial con chat, visión, agentes, generación de imágenes, herramientas y comandos, control de voz y más. #opensource
- [LLM](https://llm.datasette.io/) - Una biblioteca de utilidad CLI y Python para interactuar con modelos de lenguaje grande, remoto y local. [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - Descargue y ejecute LLMs locales en su computadora.
- [RunThisLLM](https://runthisllm.com) - Vea qué LLM puede ejecutar en su hardware.
- [Harbor](https://github.com/av/harbor) - Un kit de herramientas containerizzato para ejecutar backends locales LLM, UIs y servicios de apoyo con un comando. #opensource
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - React Aplicación nativa para ejecutar LLMs, modelos de visión y Stable Diffusion on-device en iOS y Android sin acceso a Internet. #opensource
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - Servidor de inferencia LLM local compatible con OpenAI optimizado para Apple Silicon, con llamada de herramientas, razonamiento, visión y soporte de salida estructurado. #opensource

## Agentes

### Agentes autónomos

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - Un intento experimental de código abierto para hacer GPT-4 plenamente autónomo.
- [babyagi](https://github.com/yoheinakajima/babyagi) - Un sistema de gestión de tareas impulsado por AI.
- [AgentGPT](https://github.com/reworkd/AgentGPT) - Assemble, configure e implemente Agentes AI autónomos en su navegador.
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - Especifica lo que quieres que construya, la AI pide aclaraciones y luego la construye.
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - Ingeniería rápida automatizada. Genera, prueba y clasifica los impulsos para encontrar los mejores.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - El Marco Multi-Agent: Dado un requisito de línea, devuelve PRD, diseño, tareas, repo.
- [AutoGen](https://github.com/microsoft/autogen) - AutoGen es un marco que permite el desarrollo de aplicaciones LLM usando múltiples agentes que pueden conversar entre sí para resolver tareas.
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - Herramienta Dev que escribe aplicaciones escalables desde cero mientras el desarrollador supervisa la implementación.
- [Devin](https://devin.ai/) - Un ingeniero autónomo de software AI por Cognition Labs.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Un agente autónomo diseñado para navegar por las complejidades de la ingeniería de software. #opensource
- [Davika](https://github.com/stitionai/devika) - Un ingeniero de software de AI. #opensource
- [n8n](https://n8n.io/) - Una plataforma de automatización de flujos de trabajo que combina las capacidades de IA con la automatización de procesos empresariales.
- [Sauna](https://www.sauna.ai) - Un asistente de inteligencia artificial construido para agravar el contexto. Aprende tu gusto, detecta patrones ocultos, aumenta tu contexto cerebral y funciona proactivamente.
- [Claude Code](https://code.claude.com) - La herramienta antropópica de codificación que vive en su terminal y le ayuda a convertir las ideas en código.
- [Gemini CLI](https://geminicli.com) - Un agente de IA de código abierto que trae el poder de Gemini directamente a su terminal. [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - El agente de codificación AI de código abierto. [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - Un marco TipoScript para la construcción de agentes de IA, flujos de trabajo y aplicaciones. [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - Un asistente personal de inteligencia artificial que ejecuta en sus propios dispositivos. [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - Una red social para agentes de IA.
- [AgentMail](https://www.agentmail.to) - Cajas de correo electrónico para agentes de IA.
- [Openwork](https://openwork.bot) - Los agentes de IA se contratan, trabajan completos, verifican los resultados y ganan fichas.
- [Agent Skills](https://agentskills.io) - Open format and reference SDK for packaging reusable capabilities and expertise for AI agents. [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - Un marco para la construcción de sistemas de IA multiagentes con flujos de trabajo, integraciones de herramientas y memoria. #opensource
- [Hermes Agent](https://hermes-agent.nousresearch.com) - Un agente personal de autoproducción con memoria, integraciones de mensajería, y ejecución de herramientas de sandboxed. [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - Plataforma de código abierto para construir redes de agentes AI con soporte multiprotocolo (WebSocket, gRPC, HTTP, MCP, A2A). #opensource
- [Dorothy](https://github.com/Charlie85270/Dorothy) - Una aplicación de escritorio de código abierto para orquestar múltiples agentes AI CLI simultáneamente con automatización y gestión Kanban. #opensource
- [Hive](https://github.com/aden-hive/hive) - Un marco multiagente de código abierto con gráficos autogenerados, bucles de evolución y integración MCP. #opensource

### Auxiliares aduaneros

- [Poe](https://poe.com/) - Poe da acceso a una variedad de bots.
- [GPT Builder](https://chatgpt.com/gpts/editor) - Assistant for creating GPT-based assistants.

## Imagen

### Modelos

- [DALL·E 2](https://openai.com/dall-e-2/) - DALL·E 2 by OpenAI es un nuevo sistema AI que puede crear imágenes y arte realistas desde una descripción en lenguaje natural.
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Difusión estable por Estabilidad AI es un modelo de texto a imagen que genera imágenes del texto. #opensource
- [Midjourney](https://www.midjourney.com/) - Midjourney es un laboratorio de investigación independiente que explora nuevos medios de pensamiento y amplía los poderes imaginativos de la especie humana.
- [Imagen](https://imagen.research.google/) - Imagen de Google es un modelo de difusión de texto a imagen con un grado sin precedentes de fotorealismo y un profundo nivel de comprensión del lenguaje.
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - Make-A-Scene by Meta es un método multimodal generativo de AI pone el control creativo en las manos de las personas que lo usan permitiéndoles describir e ilustrar su visión a través de descripciones de texto y bocetos freeform.
- [DragGAN](https://github.com/XingangPan/DragGAN) - Arrastre su GAN: Manipulación basada en puntos interactivos en el Manifold de imagen generativa.
- [Flux](https://github.com/black-forest-labs/flux) - Modelos de texto a imagen de laboratorios forestales negros con salida fotorrealista de alta calidad. #opensource

### Servicios

- [Craiyon](https://www.craiyon.com/) - Craiyon, anteriormente DALL-E mini, es un modelo AI que puede dibujar imágenes de cualquier mensaje de texto.
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudio es una interfaz fácil de usar para crear imágenes usando el modelo de generación de imágenes Stable Diffusion.
- [Artbreeder](https://www.artbreeder.com/) - Artbreeder es un nuevo tipo de herramienta creativa que potencia la creatividad de los usuarios haciendo más fácil colaborar y explorar.
- [Magic Eraser](https://magicstudio.com/magiceraser/) - Eliminar las cosas no deseadas de las imágenes en segundos.
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - Una herramienta de Magic Studio que te expresás solo describiendo lo que tienes en mente.
- [Alpaca](https://www.getalpaca.io/) - Stable Diffusion plugin de Photoshop.
- [Patience.ai](https://www.patience.ai/) - Patience.ai es una aplicación para crear imágenes con Stable Diffusion, un vanguardia AI desarrollado por Stability. AI.
- [GenShare](https://www.genshare.io/) - Generar arte en segundos gratis. Propio y compartir lo que creas. Un estudio generativo multimedia, democratizando diseño y creatividad.
- [Playground](https://playground.com/) - Playground es un creador de imagen AI en línea libre de usar. Úsalo para crear artículos de arte, redes sociales, presentaciones, carteles, vídeos, logos y más.
- [modyfi](https://www.modyfi.com/) - Una plataforma de diseño basada en el navegador con generación de imágenes impulsada por AI, animación y colaboración en tiempo real.
- [PhotoRoom](https://www.photoroom.com/) - Cree imágenes de producto y retrato usando sólo su teléfono. Quitar fondo, cambiar de fondo y productos de escaparate.
- [Photo AI](https://photoai.com/ai-avatars) - Cree sus propios avatares generados por AI.
- [ClipDrop](https://clipdrop.co/) - Crear visuales profesionales sin un estudio de fotos, impulsado por [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - Una aplicación de edición de imágenes que incluye la generación de avatares personalizados utilizando Stable Diffusion.
- [RunDiffusion](https://rundiffusion.com/) - Espacio de trabajo basado en la nube para crear arte generado por AI.
- [Ideogram](https://ideogram.ai/) - Una plataforma de texto a imagen para hacer más accesible la expresión creativa.
- [Bing Image Creator](https://www.bing.com/images/create) - Generador basado en texto a imagen DALLE·3 con características de seguridad.
- [KREA](https://www.krea.ai/) - Genera visuales de alta calidad con una IA que conoce tus estilos, conceptos o productos.
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creator es una aplicación AI Art Generator con múltiples métodos de generación de arte AI.
- [Leonardo AI](https://leonardo.ai/) - Cree activos visuales de calidad de producción para sus proyectos con calidad, velocidad y estilo sin precedentes.
- [Recraft](https://www.recraft.ai/) - Una herramienta AI que permite a los creadores generar fácilmente e iterar imágenes originales, arte vectorial, ilustraciones, iconos y gráficos 3D.
- [Reve Image](https://reve.com/) - Un modelo entrenado desde el suelo hasta sobresalir en rápida adherencia, estética y tipografía.
- [Magnific](https://www.magnific.com/) - Herramientas de diseño impulsadas por AI, incluyendo generación de imágenes, extracción de fondos y plantillas creativas.
- [FigureLabs](https://www.figurelabs.ai/) - Una herramienta AI para generar figuras científicas de publicación en formato vectorial de descripciones de texto o bocetos.

### Diseño gráfico

- [Brandmark](https://brandmark.io/) - Herramienta de diseño de logotipos basada en AI.
- [Gamma](https://gamma.app/) - Crear hermosas presentaciones y páginas web con ninguno de los trabajos de formato y diseño.
- [Microsoft Designer](https://designer.microsoft.com/) - Diseños impresionantes en un flash.
- [Napkin](https://www.napkin.ai/) - Herramienta AI para generar diagramas, gráficos e infografías del texto.

### Bibliotecas de imágenes

- [Lexica](https://lexica.art/) - Motor de búsqueda Stable Diffusion.
- [OpenArt](https://openart.ai/) - Buscar 10M+ de los impulsos, y generar arte AI a través de la Difusión Estable, DALL·E 2.
- [PromptHero](https://prompthero.com/) - Búsqueda de modelos como Stable Diffusion, ChatGPT, Midjourney, etc.
- [PromptBase](https://promptbase.com/) - Los avisos de búsqueda de los ingenieros más rápidos. Vender sus propios avisos.

### Bibliotecas modelo

- [Civitai](https://civitai.com/) - Herramienta de intercambio de modelos AI impulsado por la comunidad.
- [Stable Diffusion Models](https://rentry.org/sdmodels) - Una lista completa de los puestos de control Stable Diffusion en rentry.org.

### Recursos de difusión estable

- [Stable Horde](https://stablehorde.net/) - A crowdsourced distributed cluster of Stable Diffusion workers.
- [DiffusionDB](https://diffusiondb.com/) - Una lista de todas las aplicaciones públicas, herramientas de desarrollador, guías y plugins para la Difusión Estable. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - Una colección de indicaciones gratuitas para la Difusión Estable.
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - Python materials for the online course on diffusion models by [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - Una interfaz basada en nodos para construir y ejecutar flujos de trabajo Stable Diffusion. [#opensource](https://github.com/comfyanonymous/ComfyUI)

## Video

- [Runway](https://runwayml.com/) - Herramientas de IA mágicas, colaboración en tiempo real, edición de precisión y más. Su suite de creación de contenido de próxima generación.
- [Synthesia](https://www.synthesia.io/) - Cree videos de texto plano en minutos.
- [Colossyan](https://www.colossyan.com/) - Aprendizaje &amp; Desarrollo creador de vídeo centrado. Utilice los avatares AI para crear vídeos educativos en varios idiomas.
- [Fliki](https://fliki.ai/) - Crear texto a vídeo y texto para hablar contenido con voces ai alimentadas en minutos.
- [Pictory](https://pictory.ai/) - El potente AI de Pictory le permite crear y editar videos de calidad profesional utilizando texto.
- [Pika](https://pika.art/) - Una plataforma de idea a vídeo que lleva a tu creatividad al movimiento.
- [HeyGen](https://app.heygen.com/) - Convierte scripts en vídeos de conversación con avatares AI personalizables en minutos.
- [Luma Dream Machine](https://lumalabs.ai/app) - Un modelo AI que hace videos realistas y de alta calidad rápidos de texto e imágenes.
- [KLING AI](https://kling.ai/) - Herramientas para crear imágenes y vídeos imaginativos.
- [Hailuo AI](https://hailuoai.video/) - Generador de texto a vídeo impulsado por AI.
- [Google Flow](https://labs.google/fx/tools/flow) - Una herramienta de cine AI de Google, alimentada por Veo.
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Un modelo de imagen a vídeo y texto a vídeo desarrollado por Niobotics ByteDance.
- [MaxVideoAI](https://maxvideoai.com/examples) - Un espacio de trabajo para generar y comparar videos a través de múltiples modelos de vídeo AI.
- [HyperFrames](https://hyperframes.heygen.com/) - Un marco para que los agentes de IA hagan vídeos escribiendo HTML, CSS y JavaScript. [#opensource](https://github.com/heygen-com/hyperframes)

### Avatares

- [D-ID](https://www.d-id.com/) - Cree e interactúe con los avatares hablando al tacto de un botón.
- [HeyGen](https://app.heygen.com/) - Convierte scripts en vídeos de conversación con avatares AI personalizables en minutos.
- [Affogato](https://affogato.ai/) - Cree anuncios de vídeo de productos generados por AI para TikTok, Reels y Shorts.

### Animación

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - Herramienta impulsada por AI para animar y componer personajes CG en imágenes de acción en vivo.

## Audio

### Texto a palabra

- [Eleven Labs](https://elevenlabs.io/) - Generador de voz AI.
- [Resemble AI](https://www.resemble.ai/) - Generador de voz AI y clonación de voz para texto a discurso.
- [WellSaid](https://www.wellsaid.io/) - Convertir texto en voz en tiempo real.
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - Un sistema multivoces de texto a voz formado con énfasis en la calidad. #opensource
- [Bark](https://github.com/suno-ai/bark) - Un modelo de texto a audio basado en transformadores. #opensource
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - Web UI para ejecutar múltiples herramientas de texto a voz, generación de música y audio. #opensource

### Discurso a texto

- [Whisper](https://openai.com/index/whisper/) - Robusto reconocimiento de discurso a través de una supervisión débil a gran escala. [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flow hace que la escritura sea rápida con dictado de voz sin costura para cualquier aplicación en su computadora.
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - Solución completa para la transcripción de audio y vídeo sin esfuerzo. [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - El modelo Whisper de Puerto de OpenAI en C/C++. #opensource
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - Un cliente Whisper CLI compatible con el cliente original OpenAI, utilizando CTranslate2 para una inferencia más rápida. [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - Un marco de código abierto de NVIDIA para la construcción de sistemas AI de discurso, incluyendo el reconocimiento automático del habla y el texto a voz. #opensource
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - Una familia de modelos de reconocimiento de discursos abiertos por NVIDIA, incluyendo streaming y variantes multilingües. #opensource

### Música

- [Harmonai](https://www.harmonai.org/) - Somos una organización impulsada por la comunidad que libera herramientas de audio generativas de código abierto para hacer la producción de música más accesible y divertido para todos.
- [Mubert](https://mubert.com/) - Un ecosistema de música libre de regalías para creadores de contenidos, marcas y desarrolladores.
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - Un modelo de Google Research para generar música de alta fidelidad de descripciones de texto.
- [AudioCraft](https://audiocraft.metademolab.com/) - Una base de código única para necesidades de audio generativas, por Meta. Incluye MusicGen para música y AudioGen para sonidos. #opensource
- [Stable Audio](https://stability.ai/stable-audio) - El audio estable es la estabilidad El primer producto de AI para la generación de efectos de música y sonido.
- [AIVA](https://www.aiva.ai/) - Asistente de generación de música con base en AI. Elige entre 250 estilos.
- [Suno AI](https://suno.com/) - Cualquiera puede hacer música genial. Ningún instrumento necesario, sólo imaginación. De tu mente a la música.
- [Udio](https://www.udio.com/) - Descubre, crea y comparte música con el mundo.

## Otros

- [PromptBase](https://promptbase.com/) - Un mercado para comprar y vender productos de calidad para DALL·E, GPT-3, Midjourney, Stable Diffusion.
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - Prueba tu habilidad para saber si una imagen es humana o generada por ordenador.
- [Have I Been Trained?](https://haveibeentrained.com/) - Compruebe si su imagen ha sido utilizada para entrenar modelos de arte AI populares.
- [AI Dungeon](https://aidungeon.io/) - Un juego de aventura basado en texto que dirige (y estrella en) mientras que la AI lo trae a la vida.
- [Clickable](https://www.clickable.so/) - Genera anuncios en segundos con AI. Hermoso, de marca consistente, y altamente convertido anuncios para todos los canales de marketing.
- [Scale Spellbook](https://scale.com/genai-platform) - Construir, comparar y desplegar aplicaciones de modelos de lenguaje grandes con Scale Spellbook.
- [Scenario](https://www.scenario.com/) - Activos de juego generados por AI.
- [Teleprompter](https://github.com/danielgross/teleprompter) - Una AI en el dispositivo para tus reuniones que te escuchan y hace sugerencias carismáticas de citas.
- [FinChat](https://finchat.io/) - Utilizando AI, FinChat genera respuestas a preguntas sobre empresas públicas e inversores.
- [Morpher AI](https://morpher.com/ai) - Morpher AI ofrece información y análisis en tiempo real para cualquier mercado.
- [Whimsical AI](https://whimsical.com/ai) - GPT-powered mind mapping, flowcharts, and visual tools for rapid idea development and process organization.
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - ¡Toma una foto con un multimillonario de la vida real!

## Recursos didácticos

- [Learn Prompting](https://learnprompting.org/) - Un curso libre de código abierto sobre la comunicación con inteligencia artificial.
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - Guía y recursos para la ingeniería rápida.
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Un breve curso de Isa Fulford (OpenAI) y Andrew Ng (DeepLearning.AI).
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Ejemplos y guías para usar la API OpenAI.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Estrategias y tácticas para obtener mejores resultados de modelos de lenguaje grande.
- [PromptPerfect](https://promptperfect.jina.ai/) - Herramienta para la ingeniería rápida.
- [Anthropic courses](https://github.com/anthropics/courses) - Cursos educativos de Antrópico.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Un guía para construir su propio LLM trabajador, por Sebastian Raschka.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Un aprendizaje profundo gratis. Curso corto AI sobre cómo impulsar modelos de visión computarizada con lenguaje natural, cajas atados, máscaras de segmentación, puntos de coordinación y otras imágenes.
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - Un guía para construir un modelo de razonamiento de trabajo desde el suelo, por Sebastian Raschka.
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - Un libro sobre la construcción de agentes de IA con herramientas, memoria, planificación y sistemas multiagentes.
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - Un libro sobre la implementación de arquitectura, entrenamiento y métodos destilación de estilo DeepSeek.
- [AI Governance](https://www.manning.com/books/ai-governance) - Un libro sobre gobernanza, riesgo, cumplimiento, seguridad, privacidad y supervisión de sistemas de IA generativos.
- [AnimatedLLM](https://animatedllm.github.io/) - Visualizaciones interactivas explicando cómo funcionan los modelos de idiomas grandes. [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - Visualización interactiva de cómo funcionan los LLM basados en transformadores, ejecutando un modelo GPT-2 en vivo en el navegador. [#opensource](https://github.com/poloclub/transformer-explainer)

## Más listas

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - Una gran lista de Google Colab cuadernos para la IA generativa, por [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - Una infografía que mapea el ecosistema generativo de IA, por [Sonya Huang](https://twitter.com/sonyatweetybird) de Sequoia Capital.
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - Una lista de Airtable [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - Una lista de Airtable [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - Un mapa de mercado de empresas que trabajan en Generative AI para juegos, por [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - Una lista curada de herramientas generativas de aprendizaje profundo, obras, modelos, etc. para usos artísticos, por [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - Funda con ejemplos GPT-3, demos, aplicaciones, escaparate y maletas de uso NLP.
- [GPT-4 Demo](https://gpt4demo.com/) - Aplicaciones GPT-4 y maletas de uso.
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - Una colección de aplicaciones de IA generativas impresionantes.
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - Lista de diseño molecular utilizando IA Generativa y Aprendizaje Profundo.
- [Open LLMs](https://github.com/eugeneyan/open-llms) - Una lista de LLMs abiertas disponibles para uso comercial.
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - Una lista curada de herramientas AI para la composición, generación y análisis de música.
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - Una lista curada de mapas de mercado AI de 2026, 2025 y 2024, por [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - Una lista curada de herramientas y recursos para construir sistemas RAG de producción.

### Listas en ChatGPT

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Una lista curada de herramientas impresionantes, demos, docs para ChatGPT y GPT-3, por [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - Una colección de ejemplos rápidos que se utilizarán con el modelo ChatGPT.
- [FlowGPT](https://flowgpt.com/) - Amplifica tu flujo de trabajo con las mejores indicaciones.
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - Un repositorio de indicaciones útiles de ciencia de datos para ChatGPT.
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - Otra lista impresionante para ChatGPT.
