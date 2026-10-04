# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **Patrocinado por [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp)**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **Plataforma de agregación de API de IA con un endpoint LLM compatible con OpenAI** para tareas de PLN como traducción, resumen, generación multilingüe y extracción estructurada.

---

Una selección de recursos dedicados al procesamiento del lenguaje natural.

_Lee las [directrices de contribución](contributing.md) antes de colaborar. Añade tus recursos de PLN favoritos mediante una [solicitud de cambios](https://github.com/keonkim/awesome-nlp/pulls)._

## Alcance

Esta lista abarca el procesamiento del lenguaje natural: análisis lingüístico, herramientas multilingües, métodos clásicos y neuronales, conjuntos de datos y evaluación. Los modelos de lenguaje grandes solo se incluyen cuando impulsan o evalúan una tarea o capacidad básica de PLN (tokenización, multilingüismo, traducción automática, resumen, reconocimiento de entidades, preguntas y respuestas, factualidad, sondeo y destilación). Los chatbots de propósito general, los marcos de agentes, los repositorios de plantillas de prompts, las herramientas de generación de código y los kits de inicio para aplicaciones RAG aparecen en otras listas; consulta [Véase también](#see-also).

## Índice

* [Resúmenes y tendencias de investigación](#research-summaries-and-trends)
* [Laboratorios destacados de investigación en PLN](#prominent-nlp-research-labs)
* [Tutoriales](#tutorials)
  * [Lecturas](#reading-content)
  * [Vídeos y cursos en línea](#videos-and-online-courses)
  * [Libros](#books)
* [Bibliotecas](#libraries)
  * [Node.js](#node-js)
  * [Python](#python)
  * [C++](#c++)
  * [Java](#java)
  * [Kotlin](#kotlin)
  * [Scala](#scala)
  * [R](#R)
  * [Clojure](#clojure)
  * [Go](#go)
  * [Ruby](#ruby)
  * [Rust](#rust)
  * [NLP++](#NLP++)
  * [Julia](#julia)
* [Servicios](#services)
* [Herramientas de anotación](#annotation-tools)
* [Tareas y métodos](#tasks-and-methods)
  * [Representaciones vectoriales de texto](#text-embeddings)
  * [Tokenización, morfología y segmentación](#tokenization-morphology-and-segmentation)
  * [Etiquetado gramatical y análisis de dependencias](#pos-tagging-and-dependency-parsing)
  * [Reconocimiento de entidades nombradas y extracción de información](#named-entity-recognition-and-information-extraction)
  * [Resolución de correferencias](#coreference-resolution)
  * [Clasificación de texto y análisis de sentimientos](#text-classification-and-sentiment-analysis)
  * [Modelado de temas](#topic-modeling)
  * [Resumen automático](#summarization)
  * [Traducción automática](#machine-translation)
  * [Preguntas y respuestas y comprensión lectora](#question-answering-and-reading-comprehension)
  * [Extracción de información más allá del reconocimiento de entidades](#information-extraction-beyond-ner)
  * [Recuperación y representaciones vectoriales](#retrieval-and-embeddings)
  * [Voz y texto](#speech-and-text)
* [Conjuntos de datos](#datasets)
* [Marcos de PLN multilingües](#multilingual-nlp-frameworks)
* [Modelos de lenguaje para PLN](#language-models-for-nlp)
  * [Preentrenamiento y adaptación](#pretraining-and-adaptation)
  * [Modelos multilingües e interlingüísticos](#multilingual-and-cross-lingual-models)
  * [Evaluación y pruebas de referencia](#evaluation-and-benchmarks)
  * [Razonamiento y cómputo en tiempo de inferencia](#reasoning-and-test-time-compute)
  * [Contexto largo y arquitecturas alternativas](#long-context-and-alternative-architectures)
  * [Factualidad, alucinaciones y calibración](#factuality-hallucination-calibration)
  * [Sondeo e interpretabilidad](#probing-and-interpretability)
  * [Modelos de lenguaje pequeños y eficientes](#efficient-and-small-language-models)
  * [Ajuste por instrucciones y optimización de preferencias](#instruction-tuning-and-preference-optimization)
  * [Sesgo, equidad y seguridad en PLN](#bias-fairness-safety-in-nlp)
* [PLN por idioma](#nlp-per-language)
  * [PLN en árabe](#nlp-in-arabic)
  * [PLN en chino](#nlp-in-chinese)
  * [PLN en danés](#nlp-in-danish)
  * [PLN en neerlandés](#nlp-in-dutch)
  * [PLN en alemán](#nlp-in-german)
  * [PLN en húngaro](#nlp-in-hungarian)
  * [PLN en idiomas índicos](#nlp-in-indic-languages)
  * [PLN en indonesio](#nlp-in-indonesian)
  * [PLN en coreano](#nlp-in-korean)
  * [PLN en persa](#nlp-in-persian)
  * [PLN en polaco](#nlp-in-polish)
  * [PLN en portugués](#nlp-in-portuguese)
  * [PLN en español](#nlp-in-spanish)
  * [PLN en tailandés](#nlp-in-thai)
  * [PLN en ucraniano](#nlp-in-ukrainian)
  * [PLN en urdu](#nlp-in-urdu)
  * [PLN en uzbeko](#nlp-in-uzbek)
  * [PLN en vietnamita](#nlp-in-vietnamese)
  * [Otros idiomas](#other-languages)
* [Véase también](#see-also)
* [Cita](#citation)

## Resúmenes y tendencias de investigación

Dónde seguir la investigación actual sobre PLN:

* [ACL Anthology](https://aclanthology.org/) - archivo canónico de artículos de ACL, EMNLP, NAACL, EACL, COLING y eventos relacionados.
* [NLP-Progress](https://nlpprogress.com/) - recopila los resultados de vanguardia en tareas y conjuntos de datos habituales de PLN.
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) - artículos, pruebas de referencia y tablas de clasificación para tareas de PLN.
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) - recopilaciones periódicas de investigaciones y tendencias de PLN.
* [ACL Rolling Review](https://aclrollingreview.org/) - proceso de revisión continua que nutre las publicaciones asociadas con ACL.
* [The Gradient](https://thegradient.pub/) - ensayos extensos sobre aprendizaje automático e investigación en PLN.
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) - resúmenes ilustrados de artículos recientes.

### Hitos históricos

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - ensayo de 2018 sobre el auge de los modelos de lenguaje preentrenados.
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) - revisión de 2017 sobre generación de lenguaje natural (NLG).
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) y [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) - explicaciones visuales de referencia.

## Laboratorios destacados de investigación en PLN
[Volver arriba](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) - Entre sus contribuciones destacadas hay una herramienta para reconstruir idiomas extintos hace mucho tiempo, mencionada [aquí](https://www.bbc.com/news/science-environment-21427896), que toma corpus de 637 idiomas hablados actualmente en Asia y el Pacífico y reconstruye sus lenguas descendientes.
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) - Entre sus proyectos destacados está [Avenue Project](http://www.cs.cmu.edu/~avenue/), un sistema de traducción automática basada en sintaxis para idiomas en peligro como el quechua y el aimara; anteriormente, [Noah's Ark](http://www.cs.cmu.edu/~ark/) creó [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/) para mejorar las herramientas de PLN para el árabe.
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) - Responsable de crear BOLT (gestión interactiva de errores en sistemas de traducción del habla) y un proyecto sin nombre para caracterizar la risa en el diálogo.
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) - Recientemente, fue noticia por desarrollar un programa de reconocimiento del habla para crear una prueba diagnóstica de la enfermedad de Parkinson; [más información](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU).
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) - Entre sus contribuciones destacadas se encuentran [Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666) y el modelado del desarrollo de representaciones fonéticas.
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) - conocida por crear [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) y [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/).
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/) - Uno de los principales laboratorios de investigación de PLN del mundo, conocido por crear [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) y su [sistema de resolución de correferencias](https://nlp.stanford.edu/software/dcoref.shtml).


## Tutoriales
[Volver arriba](#contents)

### Lecturas

Aprendizaje automático general

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) El ingeniero creativo sénior de Google explica el aprendizaje automático tanto a ingenieros como a directivos.
* [AI Playbook](https://aiplaybook.a16z.com/) - el manual de IA de a16z es un excelente recurso para compartir con tus responsables o incluir en tus presentaciones.
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) comentarios sobre lo mejor de la investigación en PLN.
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) guía para gestionar proyectos de anotación lingüística de mayor envergadura.
* [Depends on the Definition](https://www.depends-on-the-definition.com/) recopilación de entradas de blog que aborda una amplia variedad de temas de PLN con implementaciones detalladas.

Introducciones y guías de PLN

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) - Colección de cuadernos de GitHub.
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) - Oxford.
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) - Tutoriales de NLTK y cuadernos de Jupyter.
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) - Libro en línea e impreso que presenta conceptos de PLN mediante NLTK. Sus autores también escribieron la biblioteca NLTK.
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) - Hugging Face 🤗
* [Advanced NLP with spaCy](https://course.spacy.io/en/) - Curso gratuito en línea sobre procesamiento de texto, análisis de datos a gran escala, canalizaciones de procesamiento y entrenamiento de modelos de redes neuronales para tareas de PLN personalizadas.
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) - Tutoriales para principiantes que incluyen guías introductorias, aprendizaje profundo para PLN y explicaciones visuales de técnicas como BERT, GloVe y TF-IDF.

Blogs y boletines

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) y [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) de Hal Daumé III
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### Vídeos y cursos en línea
[Volver arriba](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - CS 685, Informática de UMass Amherst.
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) - Serie de conferencias de Oxford.
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) - Curso de Stanford impartido por Richard Socher y Christopher Manning.
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) - Instituto de Tecnología del Lenguaje de Carnegie Mellon.
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) de Yandex Data School; aborda ideas importantes, desde las representaciones vectoriales de texto hasta la traducción automática, incluidos el modelado de secuencias, los modelos de lenguaje y otros temas.
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) - Aborda una combinación de temas tradicionales de PLN (como expresiones regulares, SVD, Bayes ingenuo y tokenización) y enfoques recientes de redes neuronales (como RNN, seq2seq, GRU y Transformer), además de tratar cuestiones éticas urgentes, como el sesgo y la desinformación. Encuentra los cuadernos de Jupyter [aquí](https://github.com/fastai/course-nlp).
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) - Las conferencias van desde una introducción al PLN y al procesamiento de texto hasta las redes neuronales recurrentes y los Transformers.
El material está disponible [aquí](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp).
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp)- Serie de conferencias del IIT Madras que va desde los fundamentos hasta los autocodificadores y otros temas. Los cuadernos de GitHub del curso también están disponibles [aquí](https://github.com/Ramaseshanr/anlp).
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) - Programa de cuatro cursos que abarca análisis de sentimientos, representaciones vectoriales de palabras, RNN, LSTM, mecanismos de atención y modelos Transformer como BERT y T5 para tareas como la traducción automática y el resumen.
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) - Curso integral sobre la creación de modelos de lenguaje, que incluye datos, tokenización, entrenamiento y evaluación.
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) - Serie de seminarios con conferencias invitadas de autores de investigaciones recientes sobre Transformers y PLN.
* [Cohere LLM University](https://cohere.com/llmu) - Curso gratuito sobre LLM, representaciones vectoriales, búsqueda semántica y aplicaciones de PLN.
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) - Curso práctico de PLN con las bibliotecas Transformers, Datasets y Tokenizers.
* [NLP Demystified](https://www.nlpdemystified.org/) - Curso gratuito y accesible para principiantes que abarca los fundamentos de PLN hasta los Transformers, con cuadernos de Python/Jupyter.


### Libros

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - gratuito, del profesor Dan Jurafsky.
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) - apuntes gratuitos de PLN del Dr. Jacob Eisenstein, de Georgia Tech.
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) - de Brian y Delip Rao.
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) de Stephan Raaijmakers.
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) - de Masato Hagiwara.
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) - de Hobson Lane y Maria Dyshel.
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) - de Nicole Koenigstein.
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - de Tiago Monteiro | Libro gratuito de FreeCodeCamp que enseña las matemáticas que sustentan la IA en un lenguaje claro, desde la perspectiva de la ingeniería. Abarca álgebra lineal, cálculo, probabilidad y estadística, y teoría de la optimización, con analogías, aplicaciones reales y ejemplos de código en Python.
  
## Bibliotecas

[Volver arriba](#contents)

* <a id="node-js">**Node.js y JavaScript** - Bibliotecas de PLN para Node.js</a> | [Volver arriba](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) - Implementación en JavaScript de la biblioteca de procesamiento de texto de Twitter.
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) - Procesador de lenguaje natural en JS.
  * [Retext](https://github.com/retextjs/retext) - Sistema extensible para analizar y manipular el lenguaje natural.
  * [NLP Compromise](https://github.com/spencermountain/compromise) - Procesamiento del lenguaje natural en el navegador.
  * [Natural](https://github.com/NaturalNode/natural) - Funciones generales de lenguaje natural para Node.js.
  * [Poplar](https://github.com/synyi/poplar) - Herramienta web de anotación para el procesamiento del lenguaje natural (PLN).
  * [NLP.js](https://github.com/axa-group/nlp.js) - Biblioteca de PLN para crear bots.
  * [node-question-answering](https://github.com/huggingface/node-question-answering) - Sistema de preguntas y respuestas rápido y listo para producción con DistilBERT en Node.js.

* <a id="python"> **Python** - Bibliotecas de PLN para Python</a> | [Volver arriba](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) Modelos de análisis de sentimientos para spaCy mediante ONNX.
  - [TextAttack](https://github.com/QData/TextAttack) - Ataques adversariales, entrenamiento adversarial y aumento de datos en PLN.
  - [TextBlob](http://textblob.readthedocs.org/) - Proporciona una API coherente para explorar tareas comunes de procesamiento del lenguaje natural (PLN). Se apoya en [Natural Language Toolkit (NLTK)](https://www.nltk.org/) y [Pattern](https://github.com/clips/pattern), y funciona bien con ambas :+1:
  - [spaCy](https://github.com/explosion/spaCy) - PLN de nivel industrial con Python y Cython :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) - PLN de alto nivel basado en spaCy.
  - [gensim](https://radimrehurek.com/gensim/index.html) - Biblioteca de Python para realizar modelado semántico no supervisado a partir de texto sin formato :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) - Biblioteca de Python para generar visualizaciones d3 de las diferencias lingüísticas entre corpus.
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) Kit de herramientas de aprendizaje profundo para PLN, basado en MXNet/Gluon.
  - [AllenNLP](https://github.com/allenai/allennlp) Biblioteca de investigación de PLN basada en PyTorch para desarrollar modelos de aprendizaje profundo de vanguardia en una amplia variedad de tareas lingüísticas.
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) - Kit de herramientas de investigación de PLN diseñado para facilitar la creación rápida de prototipos, con cargadores mejorados de datos y vectores de palabras, representaciones de capas de redes neuronales y métricas comunes de PLN como BLEU.
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) - Herramientas de procesamiento de texto y envoltorios (p. ej., Vowpal Wabbit).
  - [PyNLPl](https://github.com/proycon/pynlpl) - Biblioteca de procesamiento del lenguaje natural para Python. Es de propósito general y admite algunos formatos específicos, como modelos de lenguaje ARPA, tablas de frases de Moses y alineaciones de GIZA++.
  - [foliapy](https://github.com/proycon/foliapy) - Biblioteca de Python para trabajar con [FoLiA](https://proycon.github.io/folia/), un formato XML para anotación lingüística.
  - [PySS3](https://github.com/sergioburdisso/pyss3) - Paquete de Python que implementa el clasificador de texto de caja blanca SS3; incluye herramientas de visualización interactiva que explican las predicciones.
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) - Kit de herramientas para el etiquetado gramatical (POS) y el análisis de dependencias conjuntos. jPTDP ofrece modelos preentrenados para más de 40 idiomas.
  - [BigARTM](https://github.com/bigartm/bigartm) - Biblioteca rápida para el modelado de temas.
  - [Snips NLU](https://github.com/snipsco/snips-nlu) - Biblioteca lista para producción para analizar intenciones.
  - [Chazutsu](https://github.com/chakki-works/chazutsu) - Biblioteca para descargar y analizar conjuntos de datos de investigación estándar de PLN.
  - [Word Forms](https://github.com/gutfeeling/word_forms) - Permite generar con precisión todas las formas posibles de una palabra inglesa.
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) - Canalización multilingüe y extensible para agrupar documentos.
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) - Biblioteca con una amplia variedad de funciones de PLN que admite más de 50 corpus.
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) - Biblioteca para explorar arquitecturas y técnicas de aprendizaje profundo de vanguardia para PLN y comprensión del lenguaje natural (NLU).
  - [Flair](https://github.com/zalandoresearch/flair) - Marco muy sencillo para PLN multilingüe de vanguardia, basado en PyTorch. Incluye representaciones vectoriales de BERT, ELMo y Flair.
  - [Kashgari](https://github.com/BrikerMan/Kashgari) - Marco sencillo de PLN multilingüe basado en Keras que permite crear modelos en 5 minutos para tareas de reconocimiento de entidades nombradas (NER), etiquetado gramatical (PoS) y clasificación de texto. Incluye representaciones vectoriales de BERT y word2vec.
  - [FARM](https://github.com/deepset-ai/FARM) - Transferencia de aprendizaje rápida y sencilla para PLN. Proporciona modelos de lenguaje para el sector industrial y se centra en preguntas y respuestas.
  - [Haystack](https://github.com/deepset-ai/haystack) - Marco integral de Python para crear interfaces de búsqueda en lenguaje natural sobre datos. Aprovecha Transformers y los avances más recientes de PLN. Admite DPR, Elasticsearch, Modelhub de Hugging Face y mucho más.
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) - DSL basado libremente en [RUTA de Apache UIMA](https://uima.apache.org/ruta.html). Permite definir patrones lingüísticos (PLN basado en reglas) que luego se traducen a [spaCy](https://spacy.io/) o, si se prefiere una solución más ligera con menos funciones, a patrones de expresiones regulares.
  - [Transformers](https://github.com/huggingface/transformers) - Procesamiento del lenguaje natural para TensorFlow 2.0 y PyTorch.
  - [Tokenizers](https://github.com/huggingface/tokenizers) - Tokenizadores optimizados para la investigación y la producción.
  - [fairSeq](https://github.com/pytorch/fairseq) Implementaciones de Facebook AI Research de modelos seq2seq de vanguardia en PyTorch.
  - [corex_topic](https://github.com/gregversteeg/corex_topic) - Modelado jerárquico de temas con un conocimiento mínimo del dominio.
  - [Sockeye](https://github.com/awslabs/sockeye) - Kit de herramientas de traducción automática neuronal (NMT) que impulsa Amazon Translate.
  - [DL Translate](https://github.com/xhlulu/dl-translate) - Biblioteca de traducción basada en aprendizaje profundo para 50 idiomas, construida sobre `transformers` y mBART Large de Facebook.
  - [Jury](https://github.com/obss/jury) - Evaluación de resultados de modelos de PLN mediante diversas métricas automatizadas.
  - [python-ucto](https://github.com/proycon/python-ucto) - Tokenizador basado en expresiones regulares, compatible con Unicode y varios idiomas. Enlace de Python a una biblioteca de C++; admite el [formato FoLiA](https://proycon.github.io/folia).
  - [Pearmut](https://github.com/zouharvi/pearmut) - Herramienta de anotación humana para tareas de PLN multilingües, como la traducción automática.
  - [Stanza](https://github.com/stanfordnlp/stanza) - Kit de herramientas de Python de Stanford NLP para tokenización, etiquetado gramatical (POS), lematización, análisis de dependencias y reconocimiento de entidades nombradas (NER) en más de 70 idiomas.
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) - Representaciones vectoriales de oraciones/documentos, búsqueda semántica y reordenamiento; estándar actual para PLN orientado a la recuperación.
  - [Argilla](https://github.com/argilla-io/argilla) - Plataforma de código abierto para anotación de datos y recopilación de comentarios sobre conjuntos de datos de LLM y PLN.
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) - Cargadores y procesamiento estandarizados para miles de conjuntos de datos de PLN.
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) - Implementaciones de referencia de métricas de PLN.
  - [sacrebleu](https://github.com/mjpost/sacrebleu) - Puntuación reproducible de BLEU/chrF/TER para traducción automática.
  - [COMET](https://github.com/Unbabel/COMET) - Métricas de traducción automática aprendidas, el estándar de facto actual.
  - [LangTest](https://github.com/JohnSnowLabs/langtest) - Más de 60 tipos de pruebas de robustez, sesgo e imparcialidad de modelos de PLN.
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) - Detector de límites de oraciones (SBD) de alta precisión basado en reglas. Adaptador directo de pysbd, API de transmisión, CLI y componente de spaCy para más de 39 idiomas.

- <a id="c++">**C++** - Bibliotecas de C++</a> | [Volver arriba](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) - Biblioteca de redes neuronales para crear modelos de PLN dependientes de instancias con procesamiento por lotes dinámico sin relleno.
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) - Herramientas en C, C++ y Python para el reconocimiento de entidades nombradas y la extracción de relaciones.
  - [CRF++](https://taku910.github.io/crfpp/) - Implementación de código abierto de campos aleatorios condicionales (CRF) para segmentar/etiquetar datos secuenciales y otras tareas de procesamiento del lenguaje natural.
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) - CRFsuite implementa campos aleatorios condicionales (CRF) para etiquetar datos secuenciales.
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) - Analizador de lenguaje natural BLLIP (también conocido como analizador Charniak-Johnson).
  - [colibri-core](https://github.com/proycon/colibri-core) - Biblioteca de C++, herramientas de línea de comandos y enlace para Python para extraer y procesar construcciones lingüísticas básicas, como n-gramas y skip-grams, de forma rápida y eficiente en memoria.
  - [ucto](https://github.com/LanguageMachines/ucto) - Tokenizador basado en expresiones regulares, compatible con Unicode y varios idiomas. Herramienta y biblioteca de C++; admite el formato FoLiA.
  - [libfolia](https://github.com/LanguageMachines/libfolia) - Biblioteca de C++ para el [formato FoLiA](https://proycon.github.io/folia/).
  - [frog](https://github.com/LanguageMachines/frog) - Conjunto de herramientas de PLN basado en memoria, desarrollado para neerlandés: etiquetador PoS, lematizador, analizador de dependencias, NER, analizador superficial y analizador morfológico.
  - [MeTA](https://github.com/meta-toolkit/meta) - ModErn Text Analysis: kit de herramientas de ciencia de datos en C++ para extraer información de grandes volúmenes de texto.
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) - Biblioteca de Facebook para crear representaciones vectoriales de palabras, párrafos y documentos, y para clasificar texto.
  - [QSMM](http://qsmm.org) - Analizadores probabilísticos adaptativos, descendentes y ascendentes.

- <a id="java">**Java** - Bibliotecas de PLN para Java</a> | [Volver arriba](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) Extracción abierta de información a escala web.
  - [OpenRegex](https://github.com/knowitall/openregex) Lenguaje y motor eficientes y flexibles de expresiones regulares basadas en tokens.
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) - Bibliotecas centrales desarrolladas por el Grupo de Computación Cognitiva de la Universidad de Illinois.
  - [MALLET](http://mallet.cs.umass.edu/) - MAchine Learning for LanguagE Toolkit: paquete para procesamiento estadístico del lenguaje natural, clasificación y agrupación de documentos, modelado de temas, extracción de información y otras aplicaciones de aprendizaje automático sobre texto.
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) - Kit robusto de etiquetado gramatical (POS) para Java y Python, junto con modelos preentrenados para más de 40 idiomas.

- <a id="kotlin">**Kotlin** - Bibliotecas de PLN para Kotlin</a> | [Volver arriba](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) Biblioteca de detección de idiomas para Kotlin y Java, adecuada tanto para textos largos como cortos.
  - [Kotidgy](https://github.com/meiblorn/kotidgy) Generador de datos de texto basado en índices, escrito en Kotlin.

- <a id="scala">**Scala** - Bibliotecas de PLN para Scala</a> | [Volver arriba](#contents)
  - [Saul](https://github.com/CogComp/saul) - Biblioteca para desarrollar sistemas de PLN, con módulos integrados como SRL, POS, etc.
  - [ATR4S](https://github.com/ispras/atr4s) - Kit de herramientas con métodos de vanguardia para el [reconocimiento automático de términos](https://en.wikipedia.org/wiki/Terminology_extraction).
  - [tm](https://github.com/ispras/tm) - Implementación de modelado de temas basada en [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis) multilingüe regularizada.
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) - Interfaz de Scala para modelos word2vec; incluye operaciones con vectores, como distancia entre palabras y analogías.
  - [Epic](https://github.com/dlwh/epic) - Epic es un analizador estadístico de alto rendimiento escrito en Scala, junto con un marco para crear modelos complejos de predicción estructurada.
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) - Spark NLP es una biblioteca de procesamiento del lenguaje natural basada en Apache Spark ML. Ofrece anotaciones de PLN sencillas, eficientes y precisas para canalizaciones de aprendizaje automático que escalan fácilmente en entornos distribuidos.

- <a id="R">**R** - Bibliotecas de PLN para R</a> | [Volver arriba](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) - Vectorización rápida, modelado de temas, distancias y representaciones vectoriales de palabras GloVe en R.
  - [wordVectors](https://github.com/bmschmidt/wordVectors) - Paquete de R para crear y explorar word2vec y otros modelos de representaciones vectoriales de palabras.
  - [RMallet](https://github.com/mimno/RMallet) - Paquete de R para interactuar con la herramienta de aprendizaje automático MALLET para Java.
  - [dfr-browser](https://github.com/agoldst/dfr-browser) - Crea visualizaciones d3 para explorar modelos de temas de texto en un navegador web.
  - [dfrtopics](https://github.com/agoldst/dfrtopics) - Paquete de R para explorar modelos de temas de texto.
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) - Clasificación de sentimientos mediante desambiguación del sentido de las palabras y el lector de WordNet.
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) - Bibliotecas de PLN en japonés con clasificación de sentimientos en japonés.
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) - Paquete de R para explorar dinámicamente colecciones de texto.
  - [tidytext](https://github.com/juliasilge/tidytext) - Minería de texto con herramientas tidy.
  - [spacyr](https://github.com/quanteda/spacyr) - Interfaz de R para el PLN de spaCy.
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [Volver arriba](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) - Procesamiento del lenguaje natural en Clojure (opennlp).
  - [Infections-clj](https://github.com/r0man/inflections-clj) - Biblioteca de flexión morfológica para Clojure y ClojureScript, similar a Rails.
  - [postagga](https://github.com/fekr/postagga) - Biblioteca para analizar lenguaje natural en Clojure y ClojureScript.

- <a id="go">**Go**</a> | [Volver arriba](#contents)
  - [prose](https://github.com/jdkato/prose) - Biblioteca de procesamiento de texto compatible con tokenización, etiquetado gramatical y extracción de entidades nombradas.
  - [gojieba](https://github.com/yanyiwu/gojieba) - Implementación en Go del algoritmo de segmentación de palabras chinas jieba.
  - [kagome](https://github.com/ikawaha/kagome) - Analizador morfológico de japonés escrito íntegramente en Go.
  - [go-propisyu](https://github.com/rekurt/go-propisyu) - Convierte números a palabras rusas con género gramatical y declinación nominal correctos.

- <a id="ruby">**Ruby**</a> | [Volver arriba](#contents)
  - Kevin Dias's [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp)
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby)

- <a id="rust">**Rust**</a> | [Volver arriba](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) Biblioteca de reconocimiento de lenguaje natural basada en trigramas.
  - [rust-bert](https://github.com/guillaume-be/rust-bert) - Canalizaciones de PLN listas para usar y modelos basados en Transformers.
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) Biblioteca de análisis de intenciones lista para producción.

- <a id="NLP++">**NLP++** - NLP++ Language</a> | [Volver arriba](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) - Extensión de lenguaje NLP++ para VSCode.
  - [nlp-engine](https://github.com/VisualText/nlp-engine) - Motor NLP++ para ejecutar código NLP++ en Linux, incluido un analizador completo de inglés.
  - [VisualText](http://visualtext.org) - Página principal del lenguaje NLP++.
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) - Entrada wiki sobre el lenguaje NLP++.

- <a id="julia">**Julia**</a> | [Volver arriba](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) - Variedad de cargadores para distintos corpus de PLN.
  - [Languages](https://github.com/JuliaText/Languages.jl) - Paquete para trabajar con idiomas humanos.
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) - Paquete de Julia para análisis de texto.
  - [TextModels](https://github.com/JuliaText/TextModels.jl) - Modelos de redes neuronales para el procesamiento del lenguaje natural.
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) - Tokenizadores de alto rendimiento para procesamiento del lenguaje natural y tareas relacionadas.
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) - Interfaz de Julia para word2vec.

### Servicios

PLN como API con funciones de nivel superior, como reconocimiento de entidades nombradas, etiquetado de temas y otras | [Volver arriba](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) - Interfaz de lenguaje natural para aplicaciones y dispositivos.
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) - API y demostración en GitHub.
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) - Conjunto de herramientas de PLN y aprendizaje automático que cubre la mayoría de las tareas habituales, como NER, etiquetado y análisis de sentimientos.
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - Análisis sintáctico, NER, análisis de sentimientos y etiquetado de contenido en al menos 9 idiomas, incluidos inglés y chino (simplificado y tradicional).
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) - Servicio API de análisis de texto de alto nivel, desde el análisis de sentimientos hasta el análisis de intenciones.
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) - Procesamiento del lenguaje natural en el navegador, con análisis de sentimientos, extracción de entidades nombradas, etiquetado gramatical, frecuencias de palabras, modelado de temas, nubes de palabras y más.
- [NLP Cloud](https://nlpcloud.io) - Modelos de PLN de spaCy, personalizados y preentrenados, ofrecidos mediante una API RESTful para reconocimiento de entidades nombradas (NER), etiquetado gramatical y más.
- [Cloudmersive](https://cloudmersive.com/nlp-api) - API de PLN unificadas y gratuitas para etiquetado del habla, reformulación de texto, traducción/detección de idiomas, análisis de oraciones y otras acciones.

### Herramientas de anotación

- [GATE](https://gate.ac.uk/overview.html) - Arquitectura general e ingeniería de texto: más de 15 años de trayectoria, gratuita y de código abierto.
- [Anafora](https://github.com/weitechen/anafora) es una herramienta web gratuita y de código abierto para anotar texto sin procesar.
- [brat](https://brat.nlplab.org/) - brat es un entorno en línea de anotación rápida y colaborativa de texto.
- [doccano](https://github.com/chakki-works/doccano) - doccano es gratuito y de código abierto, y ofrece funciones de anotación para clasificación de texto, etiquetado de secuencias y tareas de secuencia a secuencia.
- [INCEpTION](https://inception-project.github.io) - Plataforma de anotación semántica que ofrece asistencia inteligente y gestión del conocimiento.
- [prodigy](https://prodi.gy/) es una herramienta de anotación basada en aprendizaje activo; tiene un coste.
- [LightTag](https://lighttag.io) - Herramienta de anotación de texto alojada y gestionada para equipos; tiene un coste.
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) - Herramienta local o en línea de código abierto para anotaciones de árboles discursivos.
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) - Herramienta de anotación de servidor de código abierto con control de versiones de GitHub y validación de datos XML y cuadrículas de hojas de cálculo colaborativas.
- [Datasaur](https://datasaur.ai/) Admite diversas tareas de PLN para personas o equipos y ofrece un plan freemium.
- [Konfuzio](https://konfuzio.com/en/) - Herramienta de anotación de texto, imágenes y PDF, alojada o local, pensada para equipos y basada en aprendizaje activo; ofrece un plan freemium y tiene un coste.
- [UBIAI](https://ubiai.tools/) - Herramienta de anotación de texto fácil de usar para equipos, con funciones integrales de anotación automática. Admite NER, relaciones y clasificación de documentos, así como anotación OCR para etiquetar facturas; tiene un coste.
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) - Shoonya es una plataforma gratuita y de código abierto para anotación de datos, con diversas opciones de gestión a nivel de organización y espacio de trabajo. No depende del tipo de datos y permite a los equipos anotar datos a escala con varios niveles de verificación.
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) - Plataforma integral gratuita y sin código para anotar texto y entrenar/ajustar modelos de aprendizaje profundo. Admite de forma inmediata modelos Spark NLP para reconocimiento de entidades nombradas, clasificación, extracción de relaciones y estado de afirmaciones. Usuarios, equipos, proyectos y documentos ilimitados. No es software libre de código abierto.
- [FLAT](https://github.com/proycon/flat) - FLAT es un entorno web de anotación lingüística basado en el [formato FoLiA](http://proycon.github.io/folia), un formato enriquecido basado en XML para anotación lingüística. Gratuito y de código abierto.
- [Argilla](https://github.com/argilla-io/argilla) - Plataforma de código abierto para recopilar comentarios de personas, crear conjuntos de datos de PLN y LLM, y seleccionar datos de preferencias.
- [Label Studio](https://github.com/HumanSignal/label-studio) - Plataforma multimodal de etiquetado con núcleo abierto, muy utilizada para etiquetar datos de PLN.
- [Potato](https://github.com/davidjurgens/potato) - Herramienta de anotación gratuita y de código abierto que cubre más de 21 tipos de tareas (clasificación, segmentos, correferencia, vinculación de entidades y evaluación de trazas de agentes), con control de calidad MACE integrado, comprobaciones de atención, etiquetado asistido por IA y más de 300 tareas de ejemplo.


## Tareas y métodos

Tareas de PLN organizadas por problema lingüístico. Cada subsección presenta primero trabajos fundacionales/clásicos, después enfoques neuronales y, cuando corresponde, métodos basados en LLM. Para investigaciones modernas específicas de modelos de lenguaje (preentrenamiento, evaluación, recuperación, razonamiento, etc.), consulta [Modelos de lenguaje para PLN](#language-models-for-nlp).

### Representaciones vectoriales de texto

[Volver arriba](#contents)

Representaciones vectoriales estáticas de palabras (fundacionales):

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [implementación](https://code.google.com/archive/p/word2vec/) - [artículo explicativo](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [artículo explicativo](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) - [implementación](https://github.com/facebookresearch/fastText); los n-gramas de subpalabras gestionan bien las palabras fuera del vocabulario (OOV) y siguen siendo útiles para idiomas con pocos recursos.
- [sense2vec](https://arxiv.org/abs/1511.06388) - desambiguación del sentido de las palabras.
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

Representaciones vectoriales contextualizadas:

- [ELMo](https://arxiv.org/abs/1802.05365) - representaciones de palabras profundamente contextualizadas.
- [CoVe](https://arxiv.org/abs/1708.00107) - representaciones vectoriales contextualizadas aprendidas mediante traducción automática.
- [ULMFiT](https://arxiv.org/abs/1801.06146) - ajuste fino de modelos de lenguaje para clasificación de texto.
- [InferSent](https://arxiv.org/abs/1705.02364) - representaciones de oraciones obtenidas a partir de inferencia en lenguaje natural (NLI).

Representaciones vectoriales modernas de oraciones y documentos: consulta [Recuperación para PLN](#retrieval-for-nlp) (Sentence-Transformers, E5, BGE-M3, Nomic y GritLM) y [MTEB](https://github.com/embeddings-benchmark/mteb) para ver las tablas de clasificación actuales.

### Tokenización, morfología y segmentación

[Volver arriba](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) - tokenización de subpalabras independiente del idioma.
- [BPE](https://arxiv.org/abs/1508.07909) y [Unigram LM](https://arxiv.org/abs/1804.10959) - los dos esquemas de subpalabras dominantes.
- [Stanza](https://github.com/stanfordnlp/stanza) - tokenización, lematización y morfología para más de 70 idiomas.
- [UDPipe](https://github.com/ufal/udpipe) - tokenización, etiquetado y lematización, y análisis sintáctico para Universal Dependencies.
- [Morfessor](https://github.com/aalto-speech/morfessor) - segmentación morfológica no supervisada.
Investigación y arquitectura de tokenizadores (consulta también [Modelos de lenguaje](#language-models-for-nlp)):

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) - unidades de subpalabras para la traducción automática neuronal; base de los tokenizadores modernos.
- [SentencePiece](https://github.com/google/sentencepiece) - tokenización de subpalabras independiente del idioma (BPE y Unigram).
- [Tokenizers](https://github.com/huggingface/tokenizers) - implementaciones rápidas en Rust de BPE, WordPiece y Unigram.
- [ByT5](https://arxiv.org/abs/2105.13626) - modelo a nivel de bytes sin tokenizador.
- [CANINE](https://arxiv.org/abs/2103.06874) - codificador sin tokenización que procesa caracteres Unicode.
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) - equidad de los tokenizadores entre idiomas.
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) - fragmentación dinámica a nivel de bytes que iguala a los modelos tokenizados con BPE a gran escala; retoma el enfoque sin tokenizador.
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) - tokenización de superpalabras que mejora BPE en tareas posteriores.
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) - desacopla los vocabularios de entrada y salida; muestra una relación log-lineal entre el tamaño del vocabulario de entrada y la pérdida de entrenamiento, y permite escalar el vocabulario independientemente del tamaño del modelo.
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) - primer marco unificado formal para modelos de tokenizadores que utiliza teoría de categorías con aplicaciones estocásticas; establece condiciones para la consistencia estadística.
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) - cuantifica cómo la fertilidad de la tokenización predice la precisión del modelo entre idiomas, y revela penalizaciones estructurales de coste para idiomas morfológicamente complejos y con pocos recursos.
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) - añade vocabulario a posteriori para agrupar secuencias de caracteres de varios tokens en idiomas con pocos recursos, reduciendo el coste de inferencia sin reentrenamiento.

### Etiquetado gramatical y análisis de dependencias

[Volver arriba](#contents)

- [Universal Dependencies](https://universaldependencies.org/) - bancos de árboles coherentes entre idiomas, en más de 100 idiomas.
- [spaCy](https://spacy.io/) y [Stanza](https://github.com/stanfordnlp/stanza) - alizadores listos para producción para muchos idiomas.
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) - arquitectura fundacional de análisis neuronal.
- [Trankit](https://github.com/nlp-uoregon/trankit) - kit ligero de herramientas multilingües de PLN basado en Transformers.
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) - analizador neuronal de constituyentes de alto rendimiento.

### Reconocimiento de entidades nombradas y extracción de información

[Volver arriba](#contents)

Fundacionales y neuronales:

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) - prueba de referencia canónica de NER en inglés.
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) - BiLSTM-CRF, arquitectura de referencia de larga trayectoria para NER.
- [Flair](https://github.com/flairNLP/flair) - representaciones vectoriales contextuales de cadenas, con un rendimiento sólido de NER en varios idiomas.
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) - lista para producción.

Extracción de información abierta y guiada por instrucciones:

- [Universal NER](https://arxiv.org/abs/2308.03279) - modelo de lenguaje ajustado por instrucciones para NER de conjunto abierto en varios idiomas.
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) - modelo NER pequeño y generalista que gestiona tipos de entidades arbitrarios durante la inferencia.
- [GoLLIE](https://arxiv.org/abs/2310.03668) - extracción de información con modelos de lenguaje que siguen directrices.
- [REBEL](https://github.com/Babelscape/rebel) - extracción de relaciones integral como seq2seq.

Basados en LLM:

- [GPT-NER](https://arxiv.org/abs/2304.10428) - LLM para reconocimiento de entidades nombradas.
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) - equilibrio entre coste y calidad.
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) - ocho LLM abiertos en cuatro pruebas de referencia de NER; PEFT con salidas estructuradas iguala el rendimiento de NER basado en codificadores.

### Resolución de correferencias

[Volver arriba](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) - base de la correferencia neuronal moderna.
- [SpanBERT](https://arxiv.org/abs/1907.10529) - preentrenamiento basado en segmentos; sólida línea de base para la correferencia.
- [coref-hoi](https://github.com/lxucs/coref-hoi) - correferencia con inferencia de orden superior.
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) - correferencia eficiente que iguala a los mejores sistemas de mayor tamaño.
- [LingMess](https://arxiv.org/abs/2205.12644) - puntuación de correferencia por categorías con motivación lingüística.
Basados en LLM:

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) - uso de prompts y ajuste fino para la correferencia.
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) - nueve sistemas, cuatro basados en LLM y cinco enfoques tradicionales; los métodos tradicionales siguen liderando, pero los LLM están reduciendo la brecha.

### Clasificación de texto y análisis de sentimientos

[Volver arriba](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) - línea de base lineal sólida y rápida.
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) - conjunto de datos canónico de análisis de sentimientos de grano fino.
- [SetFit](https://github.com/huggingface/setfit) - clasificación de texto con pocos ejemplos y sin prompts.
- [FastFit](https://github.com/IBM/fastfit) - clasificación rápida con pocos ejemplos en escenarios con muchas clases.
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) - línea de base actual de ajuste fino de codificadores.
- [PySS3](https://github.com/sergioburdisso/pyss3) - clasificador de texto interpretable de caja blanca.
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) - uso de LLM para etiquetar datos de clasificación de texto, con salvedades.

### Modelado de temas

[Volver arriba](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) - modelo fundacional de temas.
- [gensim](https://radimrehurek.com/gensim/) - LDA, LSI y HDP en Python.
- [BigARTM](https://github.com/bigartm/bigartm) - modelado rápido y regularizado de temas.
- [BERTopic](https://github.com/MaartenGr/BERTopic) - modelado de temas mediante agrupación sobre representaciones vectoriales contextualizadas; opción predeterminada común en la actualidad.
- [Top2Vec](https://github.com/ddangelov/Top2Vec) - aprende conjuntamente vectores de temas y documentos.
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) - modelado jerárquico de temas con palabras ancla.

### Resumen automático

[Volver arriba](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) - resumen extractivo basado en grafos.
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) - resumen neuronal abstractivo fundacional.
- [PEGASUS](https://arxiv.org/abs/1912.08777) - preentrenamiento con oraciones omitidas para resumir.
- [BART](https://arxiv.org/abs/1910.13461) - línea de base seq2seq de eliminación de ruido ampliamente utilizada.
- [BookSum](https://arxiv.org/abs/2105.08209) y [SCROLLS](https://arxiv.org/abs/2201.03533) - pruebas de referencia para resumir documentos largos.
Basados en LLM:

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) - LLM frente a modelos de resumen ajustados finamente.
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) - prompts estructurados para resumir.
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) - el razonamiento explícito mejora la fluidez, pero perjudica el anclaje factual; los presupuestos de razonamiento más largos pueden reducir la fidelidad.

### Traducción automática

[Volver arriba](#contents)

Estadística y redes neuronales fundacionales:

- [Moses](http://statmt.org/moses/) - sistema estadístico de traducción automática de referencia.
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Transformer; transformó el campo.
- [Marian NMT](https://github.com/marian-nmt/marian) - marco eficiente de traducción automática neuronal en C++.
- [Fairseq](https://github.com/facebookresearch/fairseq) - kit de herramientas de modelado de secuencias para PyTorch.

Traducción automática a gran escala:

- [NLLB-200](https://arxiv.org/abs/2207.04672) - traducción automática para 200 idiomas.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - traducción automática para más de 400 idiomas.
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) - traducción automática de voz y texto para más de 100 idiomas.

Evaluación:

- [COMET](https://github.com/Unbabel/COMET) - métrica de traducción automática aprendida; estándar de facto actual junto con chrF.
- [sacrebleu](https://github.com/mjpost/sacrebleu) - puntuación reproducible de BLEU/chrF/TER.
- [BERTScore](https://github.com/Tiiiger/bert_score) - métrica de generación basada en similitud.

Basados en LLM:

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) - LLM como sistemas de traducción automática.
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) - LLM para traducción contextual.
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) - comparación de calidad en traducción automática profesional.
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) - evalúa LLM abiertos de menos de 10.000 millones de parámetros en traducción automática a 28 idiomas; iguala a GPT-4-turbo y Google Translate.
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) - revisión de cómo el seguimiento de instrucciones, el aprendizaje en contexto y la alineación de preferencias han reestructurado la metodología de traducción automática.

### Preguntas y respuestas y comprensión lectora

[Volver arriba](#contents)

Conjuntos de datos y sistemas fundacionales:

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) - comprensión lectora extractiva.
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) - preguntas de usuarios reales sobre Wikipedia.
- [HotpotQA](https://hotpotqa.github.io/) - razonamiento de varios pasos.
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) - preguntas y respuestas supervisadas a distancia.
- [DrQA](https://github.com/facebookresearch/DrQA) - preguntas y respuestas de dominio abierto sobre Wikipedia.
- [Document-QA](https://github.com/allenai/document-qa) - comprensión lectora de varios párrafos.

Preguntas y respuestas de dominio abierto modernas:

- [DPR](https://arxiv.org/abs/2004.04906) y [FiD](https://arxiv.org/abs/2007.01282) - recuperación y lectura; canalización estándar de preguntas y respuestas de dominio abierto anterior a los LLM.
- [Atlas](https://arxiv.org/abs/2208.03299) - modelo de lenguaje aumentado con recuperación para preguntas y respuestas con pocos ejemplos.
- Consulta también [Recuperación para PLN](#retrieval-for-nlp).

En la era de los LLM:

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) - recuperación, generación y autocrítica.
- [GAIA](https://arxiv.org/abs/2311.12983) - prueba de referencia de asistentes de IA generales que incluye preguntas y respuestas de varios pasos.

### Extracción de información más allá del reconocimiento de entidades

[Volver arriba](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) - extracción abierta de información sin esquemas.
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) - extracción de relaciones de extremo a extremo.
- [DocRED](https://github.com/thunlp/DocRED) - prueba de referencia para extracción de relaciones a nivel de documento.
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) - los LLM generativos con RAG y autocorrección superan a los modelos de estilo BERT de codificador-decodificador en etiquetado semántico de roles (SRL) en inglés y chino.
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) - los LLM de solo decodificador, con un novedoso programa de adaptación de la tasa de errores, establecen un nuevo estado del arte en la corrección gramatical del inglés en BEA-test.

### Recuperación y representaciones vectoriales

[Volver arriba](#contents)

Recuperación densa y de interacción tardía, cada vez más base de las tareas de preguntas y respuestas y recuperación de información:

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) - línea de base de recuperación con codificador dual.
- [ColBERT](https://arxiv.org/abs/2004.12832) y [ColBERTv2](https://arxiv.org/abs/2112.01488) - recuperación de interacción tardía; sólido rendimiento fuera de dominio.
- [E5](https://arxiv.org/abs/2212.03533) y [E5-Mistral](https://arxiv.org/abs/2401.00368) - familias de representaciones vectoriales densas ampliamente utilizadas.
- [BGE](https://github.com/FlagOpen/FlagEmbedding) y [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) - representaciones vectoriales multilingües y multifuncionales; entre las mejores de MTEB en varios idiomas.
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) - modelo de representaciones vectoriales completamente abierto y reproducible.
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) - representaciones vectoriales anidadas que permiten variar la dimensionalidad durante la inferencia.
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) - generación y representaciones vectoriales unificadas con un solo modelo.
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) - marco original de generación aumentada por recuperación; base de las canalizaciones modernas de preguntas y respuestas.
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) - representaciones vectoriales densas derivadas de Gemini; estado del arte en MMTEB en más de 250 idiomas y en recuperación interlingüística (XOR-Retrieve, XTREME-UP).
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) - serie de representaciones vectoriales basadas en decodificador (0,6-8 mil millones de parámetros) construida sobre Qwen3; número uno en MTEB Multilingual y MTEB Code, por delante de modelos propietarios anteriores.
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) - primer modelo de reordenamiento entrenado con cómputo durante la inferencia mediante destilación de trazas de razonamiento de DeepSeek-R1; estado del arte en seguimiento de instrucciones y recuperación fuera de distribución.
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) - modelo de representaciones vectoriales para recuperación intensiva en razonamiento, con síntesis de datos ReMixer y entrenamiento adaptativo Redapter; récord de nDCG@10 de 38,1 en BRIGHT.
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) - amplía la recuperación de interacción tardía al integrar los pesos de atención de consultas y documentos en la puntuación de ColBERT; mejora la exhaustividad en MS-MARCO, BEIR y LoTTE.
Pruebas de referencia de representaciones vectoriales y recuperación:

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) - ampliación comunitaria de MTEB a más de 500 tareas en más de 250 idiomas.

### Voz y texto

[Volver arriba](#contents)

Una breve selección, ya que este tema limita con campos adyacentes:

- [Whisper](https://github.com/openai/whisper) - reconocimiento automático del habla (ASR) multilingüe; opción abierta moderna predeterminada.
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) - traducción unificada de voz y texto.
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) - mejor modelo abierto de ASR multilingüe.
- [FunASR](https://github.com/modelscope/FunASR) - kit de herramientas de ASR de nivel industrial; 170× en tiempo real en GPU, más de 50 idiomas, detección de actividad de voz, puntuación, diarización de hablantes y detección de emociones integradas. Incluye SenseVoice no autorregresivo y los modelos Fun-ASR-Nano basados en LLM.
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) - preentrenamiento autosupervisado fundacional del habla.
- [Coqui TTS](https://github.com/coqui-ai/TTS) y [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - síntesis de voz abierta.

## Conjuntos de datos

[Volver arriba](#contents)

Centros y listas de conjuntos de datos:

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) - índice central de conjuntos de datos modernos de PLN, con cargadores versionados y compatibles con transmisión.
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) - amplia colección de conjuntos de datos de PLN.
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) - repositorio de datos para modelos de PLN preentrenados y corpus de PLN.

Pretraining-scale corpora (open):

- [The Pile](https://pile.eleuther.ai/) - corpus de texto diverso de 825 GiB.
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023-2024) - reproducciones de los datos de preentrenamiento de LLaMA; V2 contiene 30 billones de tokens con señales de calidad.
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023-2024) - corpus abierto de preentrenamiento de 3 billones de tokens con canalización de filtrado documentada.
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) - corpus web depurado de 15 billones de tokens; FineWeb-Edu filtra por calidad educativa.
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - 6,3 billones de tokens en 167 idiomas.
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) - corpus multilingüe con licencias abiertas de 2 billones de tokens.

Conjuntos de datos de tareas e instrucciones:

- [Universal Dependencies](https://universaldependencies.org/) - anotación de bancos de árboles coherente entre idiomas, en más de 100 idiomas.
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) - datos abiertos de ajuste por instrucciones que sustentan Tülu 3.
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) - pequeños conjuntos de datos multilingües de preguntas y respuestas de PLN y biblioteca para generar copias sintéticas propias.

## Marcos de PLN multilingües

[Volver arriba](#contents)

- [UDPipe](https://github.com/ufal/udpipe) es una canalización entrenable para tokenizar, etiquetar, lematizar y analizar Universal Treebanks y otros archivos CoNLL-U. Está escrita principalmente en C++ y ofrece una solución rápida y fiable para el procesamiento multilingüe del PLN.
- [NLP-Cube](https://github.com/adobe/NLP-Cube) : Canalización de procesamiento del lenguaje natural: segmentación de oraciones, tokenización, lematización, etiquetado gramatical y análisis de dependencias. Plataforma nueva, escrita en Python con Dynet 2.0. Ofrece funcionalidad independiente (enlaces CLI/Python) y de servidor (API REST).
- [UralicNLP](https://github.com/mikahama/uralicNLP) es una biblioteca de PLN destinada principalmente a numerosas lenguas urálicas en peligro, como las sami, mordvinas, mari y komi. También admite lenguas no amenazadas, como el finés, y lenguas no urálicas, como el sueco y el árabe. UralicNLP permite realizar análisis morfológico, generación, lematización y desambiguación.

## Modelos de lenguaje para PLN

[Volver arriba](#contents)

Modelos de lenguaje preentrenados y su investigación, centrados en tareas de PLN y fenómenos lingüísticos. Para herramientas de LLM de propósito general, agentes o kits de aplicaciones RAG, consulta [Véase también](#see-also).

### Preentrenamiento y adaptación

Codificadores (aún son el caballo de batalla de las tareas clásicas de PLN):

- [BERT](https://arxiv.org/abs/1810.04805) - preentrenamiento con Transformer bidireccional; base de la mayoría del trabajo de PLN basado en codificadores desde 2018. [Leer en línea](https://webeditions.page/works/bert-pre-training/) con navegación por secciones y el artículo de ACL adjunto.
- [RoBERTa](https://arxiv.org/abs/1907.11692) - preentrenamiento BERT optimizado de forma robusta; línea de base habitual para codificadores.
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) - atención disociada; sólido en clasificación, NER y NLI.
- [ELECTRA](https://arxiv.org/abs/2003.10555) - preentrenamiento con detección de tokens reemplazados, eficiente en muestras.
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) - codificador modernizado con representaciones rotatorias, FlashAttention y contexto de 8K; opción actual de referencia para clasificación, NER y recuperación.
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) - codificador de 250 millones de parámetros que integra mejoras de arquitectura modernas (RoPE, contexto de 4K y profundidad/anchura optimizadas); estado del arte en MTEB, por delante de ModernBERT y RoBERTa-large con el mismo ajuste fino.

Codificador-decodificador y seq2seq:

- [T5](https://arxiv.org/abs/1910.10683) y [FLAN-T5](https://arxiv.org/abs/2210.11416) - enfoque de texto a texto para tareas de PLN; sólidas líneas de base de codificador-decodificador ajustadas por instrucciones.
- [BART](https://arxiv.org/abs/1910.13461) - preentrenamiento seq2seq de eliminación de ruido; ampliamente utilizado para resumir y generar.

LLM abiertos de solo decodificador (usados como base para tareas de PLN):

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024-2025) - familia de pesos abiertos ampliamente adoptada; base predeterminada para el ajuste fino en tareas de PLN.
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024-2025) - amplia cobertura multilingüe, especialmente del chino; suele ser el mejor modelo abierto en pruebas de referencia multilingües.
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) - preentrenamiento MoE eficiente; modelo base abierto competitivo.
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) - totalmente abierto: pesos, datos de entrenamiento y código; prueba de referencia de reproducibilidad.
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024-2025) - modelos abiertos pequeños y medianos con gran rendimiento en tareas de PLN.
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) - modelos abiertos densos y MoE dispersos eficientes.
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) - comparación de codificadores, decodificadores y codificadores-decodificadores para transferencia en PLN.

### Modelos multilingües e interlingüísticos

- [XLM-R](https://arxiv.org/abs/1911.02116) - modelo de lenguaje enmascarado interlingüístico entrenado con CommonCrawl, en 100 idiomas.
- [mT5](https://arxiv.org/abs/2010.11934) - T5 multilingüe que cubre 101 idiomas.
- [BLOOM](https://arxiv.org/abs/2211.05100) - LLM abierto de 176.000 millones de parámetros y 46 idiomas naturales.
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) - modelos ajustados por instrucciones de gran cobertura multilingüe, con 23-101 idiomas.
- [Glot500](https://arxiv.org/abs/2305.12182) - codificador para más de 500 idiomas, centrado en idiomas con pocos recursos.
- [NLLB-200](https://arxiv.org/abs/2207.04672) - No Language Left Behind: traducción automática para 200 idiomas.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) - modelo de traducción automática para más de 400 idiomas y corpus multilingüe de 3 billones de tokens.
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023-2024) - traducción multimodal de voz y texto en más de 100 idiomas.
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024-2025) - LLM dirigidos a idiomas del sudeste asiático.
- [Babel](https://arxiv.org/abs/2503.00865) (2025) - LLM multilingües abiertos (9.000 y 83.000 millones de parámetros) que cubren los 25 idiomas con más hablantes (~90 % de los hablantes del mundo); superan a modelos abiertos multilingües de tamaño comparable en XCOPA, XNLI, MGSM y FLORES-200.
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) - Llama-3.1-8B adaptado a idiomas africanos con pocos recursos mediante el corpus WURA seleccionado; resultados de vanguardia de código abierto en IrokoBench y AfriQA.
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) - conjunto de LLM abiertos (4.000-14.000 millones de parámetros) con preentrenamiento continuo sobre 26.000 millones de tokens en 20 idiomas africanos y un estudio empírico exhaustivo de la mezcla de datos.
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) - modelos abiertos especializados en traducción, basados en Gemma 3, que cubren 55 pares de idiomas mediante SFT y aprendizaje por refuerzo con modelos de recompensa de calidad.
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) - traducción automática multilingüe abierta ampliada a 46 idiomas, a la par de sistemas comerciales como Google Translate y Gemini 3 Pro.

### Evaluación y pruebas de referencia

Comprensión del lenguaje natural (NLU) e interlingüístico:

- [GLUE](https://gluebenchmark.com/) y [SuperGLUE](https://super.gluebenchmark.com/) - pruebas de referencia de NLU en inglés.
- [XTREME](https://sites.research.google/xtreme) y [XGLUE](https://microsoft.github.io/XGLUE/) - NLU interlingüística.
- [XNLI](https://github.com/facebookresearch/XNLI) - inferencia en lenguaje natural interlingüística en 15 idiomas.
- [FLORES-200](https://github.com/facebookresearch/flores) - evaluación de traducción automática en 200 idiomas.
- [MTEB](https://github.com/embeddings-benchmark/mteb) - prueba de referencia masiva de representaciones vectoriales de texto; estándar para codificadores de oraciones/documentos.
- [BEIR](https://github.com/beir-cellar/beir) - prueba de referencia heterogénea de recuperación de información para modelos de recuperación.

Evaluación moderna de LLM (2023-2026):

- [HELM](https://crfm.stanford.edu/helm/) - evaluación integral de tareas de PLN, precisión y otros aspectos.
- [BIG-bench](https://github.com/google/BIG-bench) - más de 200 tareas que examinan las capacidades de los modelos de lenguaje.
- [MMLU](https://github.com/hendrycks/test) - evaluación de conocimientos multitarea en 57 materias.
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) - sucesor más difícil y discriminativo de MMLU.
- [GPQA](https://arxiv.org/abs/2311.12022) - preguntas y respuestas de nivel de posgrado; evaluación del razonamiento «a prueba de Google».
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) - prueba de referencia de razonamiento científico para crítica basada en evidencia, detección de afirmaciones exageradas, rechazo por falta de evidencia y calibración.
- [IFEval](https://arxiv.org/abs/2311.07911) - evaluación verificable del seguimiento de instrucciones.
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) - tabla de clasificación ELO de preferencias humanas para modelos de chat.
- [LiveBench](https://livebench.ai/) (2024) - prueba de referencia resistente a la contaminación con actualización mensual.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - marco unificado para evaluar pruebas de referencia de modelos de lenguaje.
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) - ampliación multilingüe de MMLU-Pro a 29 idiomas tipológicamente diversos; revela una brecha de rendimiento de hasta el 24,3 % entre idiomas con muchos y pocos recursos.
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) - prueba de referencia conversacional de varios turnos que expone fallos simultáneos en el seguimiento de instrucciones y el razonamiento en contexto; todos los modelos de vanguardia evaluados obtienen menos del 50 %.
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) - evaluación unificada de RAG: 824 preguntas de varios pasos que requieren conjuntamente factualidad, precisión de recuperación y razonamiento entre documentos.

Evaluación de contexto largo:

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) - prueba de recuperación para ventanas de contexto largo.
- [RULER](https://arxiv.org/abs/2404.06654) (2024) - tareas sintéticas de contexto largo que van más allá de la recuperación simple.
- [LongBench](https://github.com/THUDM/LongBench) - prueba de referencia bilingüe de contexto largo en tareas de PLN.
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) - 503 preguntas de opción múltiple elaboradas por expertos, con contextos de 8.000 a 2 millones de palabras y razonamiento profundo de varios pasos; las personas obtienen un 53,7 % bajo presión de tiempo.
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) - amplía la prueba de aguja en un pajar con configuraciones de varias agujas y anidadas; muestra que RAG mitiga la pérdida de información intermedia en LLM pequeños, pero deteriora el razonamiento de los modelos.

### Razonamiento y cómputo en tiempo de inferencia

Una tendencia que definió el período 2024-2026: modelos que generan trazas explícitas de razonamiento y se benefician de más cómputo durante la inferencia.

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) - resultado fundacional: los pasos intermedios de razonamiento mejoran el rendimiento.
- [Self-Consistency](https://arxiv.org/abs/2203.11171) - votación mayoritaria entre cadenas de CoT muestreadas.
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) - búsqueda en árboles de razonamiento.
- [Self-Refine](https://arxiv.org/abs/2303.17651) y [Reflexion](https://arxiv.org/abs/2303.11366) - utocorrección durante la inferencia.
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) - cadena de pensamiento para tareas de razonamiento en PLN.
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) - modelos de recompensa supervisados por proceso para razonamiento.
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) - modelo de razonamiento abierto entrenado exclusivamente con RL; reprodujo en abierto el comportamiento de estilo o1.
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024-2025) - sistemas de razonamiento con cómputo en tiempo de prueba.
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) - estudio sistemático de las compensaciones del cómputo durante la inferencia.
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) - receta de razonamiento abierto pequeño mediante imposición de límites de presupuesto.
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) - aprendizaje por refuerzo de contexto largo con optimización de políticas (sin MCTS ni PRM) que alcanza un rendimiento de nivel o1; introduce destilación de CoT largo en modelos de CoT corto.
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) - modelo de políticas pequeño emparejado con un modelo de preferencias de proceso entrenado mediante ejecuciones de MCTS; permite a los LLM pequeños iniciar el razonamiento sin destilar modelos mayores.
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) - sistema abierto de entrenamiento por RL basado en GRPO con cuatro mejoras clave (recorte desacoplado, muestreo dinámico, pérdida por token y bonificación de entropía); reproduce y supera el razonamiento de nivel DeepSeek-R1-Zero.
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) - RL basado en modelos de valor, con GAE adaptativo a la longitud y recorte por token; supera a los métodos GRPO sin valor en AIME 2024 con entrenamiento estable.
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) - modelos generativos de recompensa de proceso que generan verificación de cadena de pensamiento en cada paso e igualan a los PRM discriminativos con el 1 % de las etiquetas de supervisión.
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) - más de 1000 experimentos controlados sobre recetas de datos para modelos de razonamiento abiertos; estado del arte en AIME 2025, a la par de las líneas de base de destilación cerradas.

### Contexto largo y arquitecturas alternativas

- [Mamba](https://arxiv.org/abs/2312.00752) y [Mamba-2](https://arxiv.org/abs/2405.21060) - modelos selectivos de espacio de estados, alternativa de contexto largo a la atención con complejidad lineal.
- [RWKV](https://arxiv.org/abs/2305.13048) - híbrido de RNN y Transformer que escala a gran cantidad de parámetros.
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) - arquitectura híbrida de Mamba, Transformer y MoE.
- [RoPE](https://arxiv.org/abs/2104.09864) y [YaRN](https://arxiv.org/abs/2309.00071) - representaciones rotatorias de posición y ampliación de la longitud de contexto.
- [Position Interpolation](https://arxiv.org/abs/2306.15595) - ampliación de ventanas de contexto con un ajuste fino mínimo.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) - patrones de degradación en tareas de PLN con contexto largo.
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) - compensaciones en preguntas y respuestas sobre entradas largas.
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) - módulo de memoria neuronal a largo plazo que aprende a memorizar el contexto histórico en tiempo de prueba; escala a más de 2 millones de tokens y supera a Transformers y modelos recurrentes lineales modernos en modelado del lenguaje y razonamiento.
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) - híbrido de 456.000 millones de parámetros que combina atención lightning (lineal) con atención softmax dispersa; iguala el rendimiento de PLN de GPT-4o con contextos de inferencia de hasta 4 millones de tokens.
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) - atención dispersa entrenable que combina compresión de grano grueso con selección de grano fino; acelera notablemente el procesamiento a 64K sin degradar las pruebas de referencia de PLN.
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) - detecta el subentrenamiento de dimensiones RoPE de alta frecuencia y aplica reescalado por búsqueda evolutiva; amplía LLaMA3-8B a 128K con 80 veces menos tokens de entrenamiento que la receta de Meta.
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) - primer análisis exhaustivo de memoria y velocidad de Transformers, SSM e híbridos hasta 220K tokens; los SSM son hasta 4 veces más rápidos y los híbridos equilibran recuperación y eficiencia.

### Factualidad, alucinaciones y calibración

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) - taxonomía y estrategias de mitigación.
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) - prueba de referencia de veracidad en preguntas y respuestas.
- [FActScore](https://github.com/shmsw25/FActScore) - precisión factual de grano fino en generación extensa.
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) - prueba de referencia de factualidad extensa y evaluador aumentado con búsqueda.
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) - detección de alucinaciones basada en muestreo.
- [RAGAS](https://github.com/explodinggradients/ragas) - evaluación sin referencia para canalizaciones de RAG y preguntas y respuestas.
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) - detección de alucinaciones basada en patrones de atención en generación con contexto largo.
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) - análisis de calibración ante efectos de formato.
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) - prueba de referencia de alucinaciones con taxonomía extrínseca/intrínseca y regeneración dinámica del conjunto de prueba para resistir fugas de datos.
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) - análisis de calibración a nivel de afirmación para generación extensa; los modelos están mucho peor calibrados en respuestas largas que en afirmaciones individuales.
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) - cuantificación de incertidumbre consciente de la fidelidad para verificar datos en RAG; distingue formalmente fidelidad y factualidad.
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) - prueba multilingüe de alucinaciones en afirmaciones en inglés, francés, español y alemán, con logits por token publicados para una evaluación rigurosa de la cuantificación de incertidumbre.
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) - prueba de referencia difícil, de varios turnos, para alucinaciones en respuestas que requieren citas; persisten tasas de alucinación de alrededor del 30 % incluso con búsqueda web.
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) - entrena modelos para razonar sobre la incertidumbre a nivel de afirmación antes de generar; mejora sustancialmente la factualidad biográfica y el AUROC de FactBench.

### Sondeo e interpretabilidad

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) - qué aprende BERT sobre el lenguaje.
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) - metodología, limitaciones y alternativas.
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) - rastreo causal de la recuperación de datos factuales.
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) - sondeo estructural del conocimiento lingüístico.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) - base de la perspectiva de características dispersas de las representaciones de Transformers.
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) - autocodificadores dispersos que extraen características interpretables de LLM a escala de producción.
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) - metodología de SAE para interpretabilidad de modelos de lenguaje.
- [Neuronpedia](https://www.neuronpedia.org/) - plataforma abierta para explorar características SAE en distintos modelos.
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) - identificación de ejemplos de entrenamiento que impulsan el comportamiento del modelo.
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) - introduce transcodificadores entre capas y grafos de atribución para construir un modelo sustituto interpretable; permite rastrear circuitos causales entre características a nivel de prompt.
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) - aplica grafos de atribución a Claude 3.5 Haiku en estudios de razonamiento de varios pasos, planificación de rimas y jailbreaks.
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) - muestra que los transcodificadores (que reconstruyen las salidas de capa a partir de las entradas) producen características más interpretables que los SAE; introduce transcodificadores de salto.
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) - revisión de referencia sobre arquitecturas SAE, estrategias de entrenamiento, explicación de características y evaluación.
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) - identifica circuitos por prompt (en lugar de por tarea); revela agrupaciones de mecanismos por familia de prompts.

### Modelos de lenguaje pequeños y eficientes

Destilación y modelos pequeños:

- [DistilBERT](https://arxiv.org/abs/1910.01108) y [MiniLM](https://arxiv.org/abs/2002.10957) - codificadores destilados para PLN en producción.
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) - modelos pequeños entrenados con datos seleccionados que compiten con otros mucho mayores en pruebas de referencia de PLN.
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) - familia de modelos de lenguaje pequeños, totalmente abierta y con datos de entrenamiento reproducibles.
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) - decodificador de 3.000 millones de parámetros totalmente abierto, preentrenado con 11,2 billones de tokens, NoPE y YaRN para un contexto de 128K; competitivo con modelos de 4.000 millones de parámetros.
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) - modelos abiertos de 1.000 a 27.000 millones de parámetros con una alta proporción de atención local a global para mantener manejable la caché KV en contexto de 128K.
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) - modelos densos y MoE de 0,6 a 235 mil millones de parámetros con modos unificados de razonamiento y no razonamiento; el MoE 30B-A3B iguala a modelos densos mayores activando solo 3.000 millones de parámetros.
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) - modelo de 3.000 millones de parámetros para dispositivos, con uso compartido de caché KV y QAT de 2 bits que reduce un 37,5 % la memoria de caché sin pérdida de precisión.
- [Sentence-Transformers](https://www.sbert.net/) - representaciones vectoriales de oraciones y párrafos mediante BERT siamés.
- [SetFit](https://github.com/huggingface/setfit) - clasificación de texto con pocos ejemplos y sin prompts.
- [FastFit](https://github.com/IBM/fastfit) - clasificación rápida con pocos ejemplos en escenarios con muchas clases.
- [GTE](https://huggingface.co/thenlper/gte-base), [BGE](https://github.com/FlagOpen/FlagEmbedding) y [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) - modelos compactos de representaciones vectoriales de texto entre los mejores de MTEB.

Cuantización, inferencia y servicio:

- [GPTQ](https://arxiv.org/abs/2210.17323) - cuantización posterior al entrenamiento para Transformers.
- [AWQ](https://arxiv.org/abs/2306.00978) - cuantización de pesos consciente de las activaciones.
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) - cuantización de caché KV mixta por capas y consciente de la sensibilidad; mejora el rendimiento hasta un 21 % frente a KV8 uniforme.
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) - inferencia cuantizada portátil.
- [vLLM](https://github.com/vllm-project/vllm) - servicio de modelos de lenguaje de alto rendimiento basado en PagedAttention.
- [SGLang](https://github.com/sgl-project/sglang) - generación estructurada y servicio eficiente.
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) - servicio de producción de modelos de lenguaje de HF.

Ajuste fino eficiente en parámetros:

- [LoRA](https://arxiv.org/abs/2106.09685) y [QLoRA](https://arxiv.org/abs/2305.14314) - daptadores de bajo rango y ajuste fino cuantizado; estándar para adaptar LLM a tareas de PLN con hardware modesto.
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) - adaptación de bajo rango con descomposición de pesos.
- [PEFT](https://github.com/huggingface/peft) - biblioteca de Hugging Face que agrupa LoRA, ajuste de prefijos, IA3 y otros.

### Ajuste por instrucciones y optimización de preferencias

- [FLAN](https://arxiv.org/abs/2109.01652) - modelos de lenguaje ajustados finamente como aprendices de cero ejemplos.
- [InstructGPT](https://arxiv.org/abs/2203.02155) - entrenamiento de LLM para seguir instrucciones con comentarios humanos.
- [Self-Instruct](https://github.com/yizhongw/self-instruct) - generación de datos de instrucciones a partir de modelos de lenguaje.
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) - más de 1600 tareas de PLN con instrucciones.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) - entrenamiento de LLM con comentarios generados por IA según una constitución escrita.
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) - alternativa más sencilla a RLHF, ampliamente adoptada.
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) - receta de posentrenamiento totalmente abierta con resultados de vanguardia entre modelos abiertos.
- [LIMA](https://arxiv.org/abs/2305.11206) - «menos es más para la alineación»; pocos datos SFT de alta calidad pueden lograr mucho.
- [TRL](https://github.com/huggingface/trl) - biblioteca de referencia para SFT, DPO, GRPO y RLHF.
- [Magpie](https://arxiv.org/abs/2406.08464) (2024-2025) - sintetiza pares de instrucciones y respuestas de alta calidad mediante prompts sin ejemplos a LLM alineados; el ajuste fino supervisado del subconjunto filtrado iguala a Llama-3-Instruct oficial.

### Sesgo, equidad y seguridad en PLN

- [StereoSet](https://github.com/moinnadeem/StereoSet) - medición del sesgo estereotípico en LLM preentrenados.
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) - medición del sesgo social en LLM enmascarados.
- [WinoBias](https://github.com/uclanlp/corefBias) - sesgo de género en la resolución de correferencias.
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) - medición del sesgo en numerosos ejes demográficos.
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) - toxicidad en la generación de modelos de lenguaje.
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) - modelos que adaptan respuestas a las creencias de los usuarios.
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) - modelos que cumplen estratégicamente durante el entrenamiento.
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) - modelo abierto de moderación de seguridad y prueba de referencia.
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) - el ajuste fino en una tarea restringida (código inseguro) provoca inesperadamente fallos generales de alineación en ámbitos no relacionados.
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) - prueba de seguridad multilingüe (chino e inglés) con más de 4000 diálogos de varios turnos, 22 escenarios y 7 estrategias de jailbreak.
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) - marco modular de evaluación de jailbreaks que integra 19 ataques, 29 defensas y 19 métodos de evaluación en 14 modelos y 12 categorías de riesgo.
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) - prueba de seguridad multilingüe en 12 idiomas índicos; revela un acuerdo interlingüístico del 12,8 % y un exceso de rechazos en escrituras de pocos recursos.
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) - la simulación de alineación aparece en modelos de tan solo 7B en el 37 % de los casos cuando la política entra en conflicto con valores internalizados; la mitigación con vectores de dirección la reduce un 94 %.

## PLN por idioma

[Volver arriba](#contents)

Recursos organizados por idioma. Haz clic en una sección para desplegarla.

<details>
<summary>

### PLN en árabe

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) - Kit de herramientas de Python para PLN en árabe, que incluye identificación de dialectos, morfología y NER.
- [goarabic](https://github.com/01walid/goarabic) - Paquete de Go para procesar texto árabe.
- [jsastem](https://github.com/ejtaal/jsastem) - Stemmer de árabe en JavaScript.
- [PyArabic](https://pypi.org/project/PyArabic/) - Biblioteca de Python para árabe.
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) - Segmentador entrenable para árabe, hebreo y copto.
- [Farasa](https://farasa.qcri.org/) - Segmentación, etiquetado gramatical y NER para árabe de QCRI.

### Modelos y representaciones vectoriales

- [AraBERT](https://github.com/aub-mind/arabert) - Familia BERT para árabe.
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) - Modelos BERT para árabe estándar moderno, dialectal y clásico.
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) - preentrenamiento árabe eficiente (publicado junto con [AraBERT](https://github.com/aub-mind/arabert)).
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023-2024) - familia bilingüe de modelos de lenguaje abiertos para árabe e inglés.
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) - modelos fundacionales centrados en el árabe.

### Conjuntos de datos

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) - los mayores recursos disponibles de análisis de sentimientos árabe en varios dominios.
- [LABR](https://github.com/mohamedadaly/labr) - amplio conjunto de reseñas de libros en árabe.
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) - lista agregada de palabras vacías en árabe.
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) - prueba de referencia MMLU para árabe.

</details>

<details>
<summary>

### PLN en chino

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [jieba](https://github.com/fxsjy/jieba#jieba-1) - Paquete de Python para segmentar palabras chinas.
- [SnowNLP](https://github.com/isnowfy/snownlp) - Paquete de Python para PLN en chino.
- [FudanNLP](https://github.com/FudanNLP/fnlp) - Biblioteca de Java para procesar texto chino.
- [HanLP](https://github.com/hankcs/HanLP) - Biblioteca multilingüe de PLN con buen soporte para chino.
- [LTP](https://github.com/HIT-SCIR/ltp) - HIT Language Technology Platform: segmentación, etiquetado gramatical, NER y análisis sintáctico.

### Modelos y representaciones vectoriales

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) - BERT con máscara de palabras completas para chino.
- [MacBERT](https://github.com/ymcui/MacBERT) - BERT chino mejorado con preentrenamiento MLM como corrección.
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) - familia de modelos de lenguaje abiertos de Alibaba, sólidos en chino.
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) - modelos bilingües chino-inglés de Tsinghua.
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) - modelo de lenguaje abierto para chino.
- [Yi](https://github.com/01-ai/Yi) - modelos de lenguaje abiertos bilingües de 01.AI.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) - modelo MoE abierto y eficiente con gran rendimiento en chino.

### Antología

- [funNLP](https://github.com/fighting41love/funNLP) - amplia colección de herramientas y recursos de PLN para chino.

</details>

<details>
<summary>

### PLN en danés

</summary>

[Volver arriba](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) - Recursos de PLN en danés.
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) - lista seleccionada de recursos de tecnología lingüística danesa.

</details>

<details>
<summary>

### PLN en neerlandés

</summary>

[Volver arriba](#contents)

- [python-frog](https://github.com/proycon/python-frog) - Enlace de Python a Frog, conjunto de PLN para neerlandés (etiquetado gramatical, lematización, análisis de dependencias y NER).
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) - Realizador superficial de neerlandés para generación de lenguaje natural, basado en la implementación de SimpleNLG.
- [Alpino](https://github.com/rug-compling/alpino) - Analizador de dependencias para neerlandés (también realiza etiquetado gramatical y lematización).
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) - Modelos de reconocimiento del habla en neerlandés basados en [Kaldi](http://kaldi-asr.org/).
- [spaCy Dutch model](https://spacy.io/models/nl) - PLN de nivel industrial con una canalización en neerlandés.

</details>

<details>
<summary>

### PLN en alemán

</summary>

[Volver arriba](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) - lista seleccionada de recursos y herramientas de acceso abierto, código abierto y disponibles comercialmente, desarrollados con un enfoque en alemán.

</details>

<details>
<summary>

### PLN en húngaro

</summary>

[Volver arriba](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) - lista seleccionada de recursos gratuitos para PLN en húngaro.

</details>

<details>
<summary>

### PLN en idiomas índicos

</summary>

[Volver arriba](#contents)

### Datos, corpus y bancos de árboles

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) - Banco de árboles con múltiples representaciones y capas para hindi y urdu.
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) - Subconjunto más pequeño del banco de árboles mencionado.
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) 60.000 palabras etiquetadas con POS, en bengalí, hindi, maratí y telugu.
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) Aproximadamente 1000 muestras, 3 clases de polaridad.
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) 4300 muestras, 14 clases.
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) 5400 muestras, 12 dominios, 4000 términos de aspecto y polaridad de términos de aspecto y oraciones en 4 clases.
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) 5500 muestras, 2 dominios y 10 términos de aspecto.
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) 2000 muestras y 3 etiquetas de polaridad.

#### El acceso a corpus/conjuntos de datos que requieren inicio de sesión se puede solicitar por correo electrónico

- [SAIL 2015](http://amitavadas.com/SAIL/) Muestras de sentimientos etiquetadas de Twitter y Facebook en hindi, bengalí, tamil y telugu.
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) - SentiWordNet, corpus paralelos etiquetados, corpus anotados con sentidos y corpus maratí etiquetado por polaridad.
- [TDIL-IC agrega muchos recursos útiles y ofrece acceso a conjuntos de datos normalmente restringidos](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### Modelos de lenguaje y representaciones vectoriales de palabras

- [Hindi2Vec](https://nirantk.com/hindi2vec/) y [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) Modelo de lenguaje de estilo ULMFiT.
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext word embeddings in a whole bunch of languages, trained on Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html)
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) Entrenado con Wikipedia en sánscrito y el corpus OSCAR.

### Bibliotecas y herramientas

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) - analizador morfológico profundo para hindi y urdu.
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) - herramientas de tokenización, transliteración y traducción automática para 18 idiomas índicos.
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) - análisis de dependencias y etiquetado gramatical para canarés, hindi y telugu.
- [iNLTK](https://github.com/goru001/inltk) - kit de herramientas de PLN para idiomas índicos basado en PyTorch/Fastai.
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) - herramientas, conjuntos de datos y modelos para 22 idiomas índicos.

### Modelos y representaciones vectoriales

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022-2024) - BERT multilingüe para 23 idiomas índicos.
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023-2024) - traducción automática de alta calidad para 22 idiomas índicos.
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) - continuación bilingüe hindi-inglés de LLaMA.
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) - LLM en hindi ajustado por instrucciones.
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) - modelo de lenguaje multilingüe entrenado desde cero en 10 idiomas índicos.
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) - modelos fundacionales centrados en idiomas índicos.

</details>

<details>
<summary>

### PLN en indonesio

</summary>

[Volver arriba](#contents)

### Bibliotecas y representaciones vectoriales

- [bahasa](https://github.com/kangfend/bahasa) - kit de herramientas de lenguaje natural para indonesio.
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) trained on Wikipedia.
- [PySastrawi](https://github.com/har07/PySastrawi) - Stemmer de Python para bahasa indonesio, basado en el algoritmo de derivación Sastrawi.

### Modelos

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) - modelo de lenguaje indonesio preentrenado con el conjunto de pruebas de referencia IndoNLU.
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) - alternativa a IndoBERT con la prueba de referencia IndoLEM.
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023-2024) - conjuntos de datos comunitarios a gran escala y LLM Cendol ajustados por instrucciones para indonesio e idiomas regionales.
- [Sailor](https://github.com/sail-sg/sailor-llm) - LLM abiertos del sudeste asiático que cubren el indonesio.
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) - LLM abierto de Singapore AI para el sudeste asiático, con gran rendimiento en indonesio.

### Conjuntos de datos

- Colecciones de Kompas y Tempo en [ILPS](http://ilps.science.uva.nl/resources/bahasa/).
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip) 39.000 oraciones y 900.000 tokens de palabras.
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus) 10.000 oraciones y 250.000 tokens de palabras.
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) y [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) - resumen y clasificación de texto.
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) - diccionario semántico amplio y gratuito.
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) - Centro de datos multilingüe y multimodal que ofrece conjuntos de datos y pruebas de referencia estandarizados para el PLN del sudeste asiático (EMNLP 2024).

</details>

<details>
<summary>

### PLN en coreano

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [KoNLPy](http://konlpy.org) - Paquete de Python para procesamiento del lenguaje natural en coreano.
- [Mecab (Korean)](https://eunjeon.blogspot.com/) - Biblioteca de C++ para PLN en coreano.
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) - Biblioteca de Scala para PLN en coreano.
- [KoNLP](https://cran.r-project.org/package=KoNLP) - Paquete de R para PLN en coreano.
- [kss](https://github.com/hyunwoongko/kss) - Segmentador de oraciones en coreano.
- [Kiwi](https://github.com/bab2min/Kiwi) - Analizador morfológico rápido de coreano.
- [Garu](https://github.com/ongjin/garu) - Analizador morfológico de coreano nativo del navegador, ejecutado íntegramente en el cliente mediante WebAssembly (modelo de 1 MB, sin conexión, licencia MIT).

### Modelos y representaciones vectoriales

- [KoBERT](https://github.com/SKTBrain/KoBERT) - BERT en coreano de SKT.
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) - modelos entrenados con la prueba de referencia KLUE.
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) - modelos de lenguaje abiertos en coreano.
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) - familia bilingüe de modelos de lenguaje abiertos en coreano e inglés.
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) - modelo fundacional en coreano de Naver.

### Blogs y tutoriales

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### Conjuntos de datos

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) - corpus en coreano del Instituto Avanzado de Ciencia y Tecnología de Corea.
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) - conjunto de datos en coreano de un importante periódico surcoreano.
- [Chat data](https://github.com/songys/Chatbot_data) - datos de chatbot en coreano.
- [Petitions](https://github.com/akngs/petitions) - datos de peticiones vencidas del sitio de peticiones ciudadanas de la Casa Azul.
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) - conjunto de datos de traducción automática neuronal del coreano al francés y al inglés.
- [KorQuAD](https://korquad.github.io/) - conjunto de datos SQuAD en coreano (v1.0 y v2.1) con el código fuente HTML de Wikipedia.

</details>

<details>
<summary>

### PLN en persa

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [Hazm](https://github.com/roshan-research/hazm) - Kit de herramientas de PLN para persa.
- [Parsivar](https://github.com/ICTRC/Parsivar) - Kit de herramientas de procesamiento del idioma persa.
- [Perke](https://github.com/AlirezaTheH/perke) - Extracción de frases clave en persa.
- [Perstem](https://github.com/jonsafari/perstem) - Stemmer, analizador morfológico y etiquetador POS parcial para persa.
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) - Analizador de persa para Elasticsearch.
- [virastar](https://github.com/aziz/virastar) - Limpieza de texto persa.

### Modelos

- [ParsBERT](https://github.com/hooshvare/parsbert) - BERT en persa.
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023-2024) - Modelo de lenguaje en persa ajustado por instrucciones.
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) - Modelo de instrucciones en persa basado en Llama 3.

### Conjuntos de datos

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) - corpus etiquetado apto para investigación de PLN en persa (farsi), con unos 2,6 millones de palabras etiquetadas manualmente en 40 etiquetas POS.
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) - amplio corpus persa de libre acceso: 2,7 millones de tokens anotados con 31 etiquetas POS.
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) - LSCP: 120 millones de oraciones de 27 millones de tuits coloquiales en persa, con anotaciones de dependencias, POS y sentimientos.
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) - 250.000 tokens y 7682 oraciones con etiquetas NER en formato IOB.
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) - unos 25 millones de tokens y 1 millón de oraciones en persa del [corpus de Wikipedia en persa](https://github.com/Text-Mining/Persian-Wikipedia-Corpus).
- [PERLEX](http://farsbase.net/PERLEX.html) - primer conjunto de datos persa para extracción de relaciones (traducción de SemEval-2010 Task 8).
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) - 29.982 oraciones anotadas que cubren la mayoría de los verbos del léxico de valencia persa.
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) - corpus anotado sintácticamente mediante dependencias.
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) - colección fiable y estándar de textos persas utilizada en CLEF 2008-2009.

</details>

<details>
<summary>

### PLN en polaco

</summary>

[Volver arriba](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) - lista seleccionada de recursos dedicados al PLN en polaco: modelos, herramientas y conjuntos de datos.

</details>

<details>
<summary>

### PLN en portugués

</summary>

[Volver arriba](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) - lista seleccionada de recursos y herramientas de PLN en portugués.

### Modelos

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) - BERT para portugués brasileño.
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023-2024) - modelos de lenguaje abiertos centrados en el portugués.
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023-2024) - modelos de lenguaje de solo codificador para portugués europeo y brasileño.

</details>

<details>
<summary>

### PLN en español

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [spanlp](https://github.com/jfreddypuentes/spanlp) - Biblioteca de Python para detectar, censurar y limpiar obscenidades, discursos de odio y acoso en español, con datos de 21 países hispanohablantes.

### Datos

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### Modelos y representaciones vectoriales

- [BETO](https://github.com/dccuchile/beto) - BERT para español.
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) - RoBERTa en español entrenado con el corpus de la Biblioteca Nacional de España.
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) - modelo de lenguaje fundacional abierto para euskera, que también cubre el español.
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) - modelo de lenguaje multilingüe con amplia cobertura del español del Barcelona Supercomputing Center.
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) - modelo abierto en español ajustado por instrucciones.
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### PLN en tailandés

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) - PLN en tailandés con Python.
- [JTCC](https://github.com/wittawatj/jtcc) - Biblioteca de agrupación de caracteres en Java.
- [CutKum](https://github.com/pucktada/cutkum) - Segmentación de palabras mediante aprendizaje profundo en TensorFlow.
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) - Tokenización y etiquetado gramatical.
- [SynThai](https://github.com/KenjiroAI/SynThai) - Segmentación de palabras y etiquetado gramatical mediante aprendizaje profundo.

### Modelos

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) - modelo de lenguaje tailandés preentrenado.
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) - familia de LLM tailandeses abiertos.
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023-2024) - modelos tailandeses abiertos ajustados por instrucciones.
- [Sailor](https://github.com/sail-sg/sailor-llm) - familia abierta de modelos de lenguaje del sudeste asiático que cubre el tailandés.

### Datos

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) - corpus de texto con 5 millones de palabras y segmentación de palabras.
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) - conjunto de datos de discursos del actual primer ministro de Tailandia.

</details>

<details>
<summary>

### PLN en ucraniano

</summary>

[Volver arriba](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) - lista seleccionada de conjuntos de datos, modelos y otros recursos de PLN en ucraniano.
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) - lista seleccionada centrada en traducción automática y procesamiento del habla.

</details>

<details>
<summary>

### PLN en urdu

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [urduhack](https://github.com/urduhack/urduhack) - Biblioteca de PLN para urdu.

### Conjuntos de datos

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) - Tareas de POS, NER y otras tareas de PLN.

</details>

<details>
<summary>

### PLN en uzbeko

</summary>

[Volver arriba](#contents)

### Conjuntos de datos

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) - Prueba de referencia bilingüe para evaluar la recuperación en RAG con fundamento cultural. 400 filas, EN+UZ, MIT/CC-BY-4.0.

</details>

<details>
<summary>

### PLN en vietnamita

</summary>

[Volver arriba](#contents)

### Bibliotecas

- [underthesea](https://github.com/undertheseanlp/underthesea) - Kit de herramientas de PLN en vietnamita.
- [vn.vitk](https://github.com/phuonglh/vn.vitk) - Kit de herramientas para procesar texto vietnamita.
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) - Kit de herramientas de PLN en vietnamita.
- [pyvi](https://github.com/trungtv/pyvi) - Kit básico de herramientas de PLN en vietnamita para Python.
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) - Síntesis de voz vietnamita en el dispositivo con clonación de voz.

### Modelos y representaciones vectoriales

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) - modelo de lenguaje preentrenado para vietnamita.
- [BARTpho](https://github.com/VinAIResearch/BARTpho) - modelo preentrenado secuencia a secuencia para vietnamita.
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023-2024) - modelo generativo abierto de lenguaje para vietnamita.
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) - modelo de chat vietnamita basado en Mistral.
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) - familia de modelos de lenguaje multilingües abiertos que cubre vietnamita, tailandés, indonesio y otros idiomas del sudeste asiático.

### Datos

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) - 10.000 oraciones para la tarea de análisis de constituyentes.
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) - Banco de árboles de dependencias en vietnamita.
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) - Banco de árboles de dependencias universales en vietnamita.
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) - corpus gratuito de habla vietnamita, con 15 horas de grabaciones (HCMUS AILab).
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) - 1,75 millones de oraciones de noticias.
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) - conjunto de datos de análisis semántico de vietnamita a SQL (EMNLP-2020 Findings).
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) - 20 millones de palabras en 15 libros bilingües, 100 textos paralelos inglés-vietnamita, 250 textos jurídicos paralelos, 5000 artículos periodísticos y 2000 subtítulos de películas.

</details>

### Otros idiomas

- Ruso: [pymorphy2](https://github.com/kmike/pymorphy2) - un buen etiquetador POS para ruso.
- Idiomas asiáticos: tailandés, lao, chino, japonés y coreano: [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html), implementación en ElasticSearch.
- Idiomas antiguos: [CLTK](https://github.com/cltk/cltk) The Classical Language Toolkit es una biblioteca de Python y una colección de textos para hacer PLN en idiomas antiguos.
- Hebreo: [NLPH_Resources](https://github.com/NLPH/NLPH_Resources) - Colección de artículos, corpus y recursos lingüísticos para PLN en hebreo.

[Volver arriba](#contents)

## Véase también

Selecciones relacionadas sobre temas fuera de este ámbito:

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) - recursos generales sobre modelos de lenguaje grandes.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) - IA generativa en distintas modalidades.
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) - sistemas y herramientas de generación aumentada por recuperación.
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) - técnicas de prompting y bibliotecas de plantillas.
- [awesome-mlops](https://github.com/visenger/awesome-mlops) - aprendizaje automático en producción, incluido el servicio de LLM.

## Cita

Si este repositorio te resulta útil, considera citar esta lista:

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## Licencia
[Licencia](./LICENSE) - CC0
