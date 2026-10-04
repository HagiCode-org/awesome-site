# awesome-nlp

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

> **При поддержке [Atlas Cloud](https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp)**
>
> <a href="https://www.atlascloud.ai/?utm_source=github&utm_medium=link&utm_campaign=awesome-nlp"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/atlas-cloud-dark.png"><img src="assets/atlas-cloud-light.png" alt="Atlas Cloud" width="220" /></picture></a>
>
> **Платформа агрегации API искусственного интеллекта с совместимым с OpenAI интерфейсом LLM** для задач NLP, таких как перевод, суммаризация, генерация на нескольких языках и структурированное извлечение.

---

Подборка ресурсов, посвящённых обработке естественного языка.

_Перед внесением изменений ознакомьтесь с [правилами участия](contributing.md). Добавьте понравившийся ресурс по NLP, создав [pull request](https://github.com/keonkim/awesome-nlp/pulls)._

## Область охвата

Список посвящён обработке естественного языка: лингвистическому анализу, многоязычным инструментам, классическим и нейросетевым методам, наборам данных и оценке. Большие языковые модели включены только в тех случаях, когда они развивают или оценивают ключевые задачи и возможности NLP (токенизацию, поддержку языков, машинный перевод, суммаризацию, распознавание сущностей, ответы на вопросы, фактичность, зондирование и дистилляцию). Универсальные чат-боты, агентные фреймворки, репозитории шаблонов промптов, инструменты генерации кода и стартовые наборы RAG-приложений собраны в других списках — см. [См. также](#see-also).

## Содержание

* [Обзоры исследований и тенденции](#research-summaries-and-trends)
* [Известные лаборатории исследований NLP](#prominent-nlp-research-labs)
* [Руководства](#tutorials)
  * [Материалы для чтения](#reading-content)
  * [Видео и курсы](#videos-and-online-courses)
  * [Книги](#books)
* [Библиотеки](#libraries)
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
* [Сервисы](#services)
* [Инструменты аннотирования](#annotation-tools)
* [Задачи и методы](#tasks-and-methods)
  * [Текстовые эмбеддинги](#text-embeddings)
  * [Токенизация, морфология и сегментация](#tokenization-morphology-and-segmentation)
  * [Разметка частей речи и синтаксический анализ зависимостей](#pos-tagging-and-dependency-parsing)
  * [Распознавание именованных сущностей и извлечение информации](#named-entity-recognition-and-information-extraction)
  * [Разрешение кореференции](#coreference-resolution)
  * [Классификация текста и анализ тональности](#text-classification-and-sentiment-analysis)
  * [Тематическое моделирование](#topic-modeling)
  * [Суммаризация](#summarization)
  * [Машинный перевод](#machine-translation)
  * [Ответы на вопросы и понимание прочитанного](#question-answering-and-reading-comprehension)
  * [Извлечение информации за пределами распознавания сущностей](#information-extraction-beyond-ner)
  * [Поиск и эмбеддинги](#retrieval-and-embeddings)
  * [Речь и текст](#speech-and-text)
* [Наборы данных](#datasets)
* [Многоязычные NLP-фреймворки](#multilingual-nlp-frameworks)
* [Языковые модели для NLP](#language-models-for-nlp)
  * [Предварительное обучение и адаптация](#pretraining-and-adaptation)
  * [Многоязычные и межъязыковые модели](#multilingual-and-cross-lingual-models)
  * [Оценка и бенчмарки](#evaluation-and-benchmarks)
  * [Рассуждение и вычисления во время тестирования](#reasoning-and-test-time-compute)
  * [Длинный контекст и альтернативные архитектуры](#long-context-and-alternative-architectures)
  * [Фактичность, галлюцинации и калибровка](#factuality-hallucination-calibration)
  * [Зондирование и интерпретируемость](#probing-and-interpretability)
  * [Эффективные малые языковые модели](#efficient-and-small-language-models)
  * [Настройка инструкций и оптимизация предпочтений](#instruction-tuning-and-preference-optimization)
  * [Предвзятость, справедливость и безопасность в NLP](#bias-fairness-safety-in-nlp)
* [NLP по языкам](#nlp-per-language)
  * [NLP для арабского языка](#nlp-in-arabic)
  * [NLP для китайского языка](#nlp-in-chinese)
  * [NLP для датского языка](#nlp-in-danish)
  * [NLP для нидерландского языка](#nlp-in-dutch)
  * [NLP для немецкого языка](#nlp-in-german)
  * [NLP для венгерского языка](#nlp-in-hungarian)
  * [NLP для индийских языков](#nlp-in-indic-languages)
  * [NLP для индонезийского языка](#nlp-in-indonesian)
  * [NLP для корейского языка](#nlp-in-korean)
  * [NLP для персидского языка](#nlp-in-persian)
  * [NLP для польского языка](#nlp-in-polish)
  * [NLP для португальского языка](#nlp-in-portuguese)
  * [NLP для испанского языка](#nlp-in-spanish)
  * [NLP для тайского языка](#nlp-in-thai)
  * [NLP для украинского языка](#nlp-in-ukrainian)
  * [NLP для урду](#nlp-in-urdu)
  * [NLP для узбекского языка](#nlp-in-uzbek)
  * [NLP для вьетнамского языка](#nlp-in-vietnamese)
  * [Другие языки](#other-languages)
* [См. также](#see-also)
* [Цитирование](#citation)

## Обзоры исследований и тенденции

Где следить за актуальными исследованиями NLP:

* [ACL Anthology](https://aclanthology.org/) — основной архив статей ACL, EMNLP, NAACL, EACL, COLING и других профильных конференций.
* [NLP-Progress](https://nlpprogress.com/) — отслеживает лучшие результаты по распространённым задачам и наборам данных NLP.
* [Papers With Code: NLP](https://paperswithcode.com/area/natural-language-processing) — статьи, бенчмарки и рейтинги для задач NLP.
* [Sebastian Ruder's newsletter](https://newsletter.ruder.io/) — регулярные обзоры исследований и тенденций в NLP.
* [ACL Rolling Review](https://aclrollingreview.org/) — процесс рецензирования статей для конференций, связанных с ACL.
* [The Gradient](https://thegradient.pub/) — подробные эссе об исследованиях в области машинного обучения и NLP.
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp) — иллюстрированные обзоры недавних научных статей.

### Исторические вехи

* [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) — эссе 2018 года о развитии предварительно обученных языковых моделей.
* [Survey of the State of the Art in Natural Language Generation](https://arxiv.org/abs/1703.09902) — обзор достижений в генерации естественного языка за 2017 год.
* [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) и [The Illustrated BERT, ELMo, and co.](https://jalammar.github.io/illustrated-bert/) — классические наглядные объяснения.

## Известные лаборатории исследований NLP
[Наверх](#contents)

* [The Berkeley NLP Group](http://nlp.cs.berkeley.edu/index.shtml) — среди заметных достижений — инструмент для реконструкции давно исчезнувших языков, о котором писали [здесь](https://www.bbc.com/news/science-environment-21427896). Он использует корпусы 637 языков, на которых сегодня говорят в Азии и Тихоокеанском регионе, чтобы восстановить их языки-предки.
* [Language Technologies Institute, Carnegie Mellon University](http://www.cs.cmu.edu/~nasmith/nlp-cl.html) — среди заметных проектов [Avenue Project](http://www.cs.cmu.edu/~avenue/), система машинного перевода на основе синтаксиса для исчезающих языков, таких как кечуа и аймара, а также более ранний [Noah's Ark](http://www.cs.cmu.edu/~ark/), в рамках которого создали [AQMAR](http://www.cs.cmu.edu/~ark/AQMAR/) для совершенствования инструментов NLP для арабского языка.
* [NLP research group, Columbia University](http://www1.cs.columbia.edu/nlp/index.cgi) — создала BOLT (интерактивную обработку ошибок в системах речевого перевода) и неназванный проект по анализу смеха в диалогах.
* [The Center or Language and Speech Processing, John Hopkins University](http://clsp.jhu.edu/) — недавно центр упоминали в новостях в связи с разработкой ПО распознавания речи для создания диагностического теста на болезнь Паркинсона; см. [здесь](https://www.clsp.jhu.edu/2019/03/27/speech-recognition-software-and-machine-learning-tools-are-being-used-to-create-diagnostic-test-for-parkinsons-disease/#.XNFqrIkzYdU).
* [Computational Linguistics and Information Processing Group, University of Maryland](https://wiki.umiacs.umd.edu/clip/index.php/Main_Page) — среди заметных достижений — [Human-Computer Cooperation or Word-by-Word Question Answering](http://www.umiacs.umd.edu/~jbg/projects/IIS-1652666) и моделирование развития фонетических представлений.
* [Penn Natural Language Processing, University of Pennsylvania](https://nlp.cis.upenn.edu/) — группа известна созданием [Penn Treebank](https://catalog.ldc.upenn.edu/LDC99T42) и [Penn Discourse Treebank](https://www.cis.upenn.edu/~pdtb/).
* [The Stanford Nautral Language Processing Group](https://nlp.stanford.edu/) — одна из ведущих в мире исследовательских лабораторий NLP, известная созданием [Stanford CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) и своей [системы разрешения кореференции](https://nlp.stanford.edu/software/dcoref.shtml).


## Руководства
[Наверх](#contents)

### Материалы для чтения

Общее машинное обучение

* [Machine Learning 101](https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit?usp=sharing) — старший креативный инженер Google объясняет машинное обучение инженерам и руководителям.
* [AI Playbook](https://aiplaybook.a16z.com/) — отличное руководство a16z по ИИ, которым можно поделиться с руководителями или воспользоваться при подготовке презентации.
* [Sebastian Ruder's Newsletter](https://newsletter.ruder.io/) — комментарии о самых интересных исследованиях в области NLP.
* [How To Label Data](https://www.lighttag.io/how-to-label-data/) — руководство по управлению крупными проектами лингвистической разметки.
* [Depends on the Definition](https://www.depends-on-the-definition.com/) — подборка подробных статей о широком круге тем NLP с примерами реализации.

Введение в NLP и руководства

* [Understand & Implement Natural Language Processing](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)
* [NLP in Python](http://github.com/NirantK/nlp-python-deep-learning) — коллекция блокнотов GitHub.
* [Natural Language Processing: An Introduction](https://academic.oup.com/jamia/article/18/5/544/829676) — Оксфорд.
* [NLP from Scratch with PyTorch](https://pytorch.org/tutorials/intermediate/nlp_from_scratch_index.html)
* [Hands-On NLTK Tutorial](https://github.com/hb20007/hands-on-nltk-tutorial) — учебные материалы по NLTK в блокнотах Jupyter.
* [Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit](https://www.nltk.org/book/) — электронная и печатная книга, знакомящая с концепциями NLP на примере NLTK. Её авторы также создали библиотеку NLTK.
* [Train a new language model from scratch](https://huggingface.co/blog/how-to-train) — Hugging Face 🤗
* [Advanced NLP with spaCy](https://course.spacy.io/en/) — бесплатный онлайн-курс по обработке текста, масштабному анализу данных, конвейерам обработки и обучению нейросетевых моделей для специализированных задач NLP.
* [Kaggle NLP Learning Guide](https://www.kaggle.com/learn-guide/natural-language-processing) — понятные начинающим уроки, включая введение, глубокое обучение для NLP и наглядные объяснения таких методов, как BERT, GloVe и TF-IDF.

Блоги и рассылки

* [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
* [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) and [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [Natural Language Processing](https://nlpers.blogspot.com/) — автор Hal Daumé III.
* [arXiv: Natural Language Processing (Almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)
* [Karpathy's The Unreasonable Effectiveness of Recurrent Neural Networks](https://karpathy.github.io/2015/05/21/rnn-effectiveness)
* [Machine Learning Mastery: Deep Learning for Natural Language Processing](https://machinelearningmastery.com/category/natural-language-processing)
* [Visual NLP Paper Summaries](https://amitness.com/categories/#nlp)

### Видео и онлайн-курсы
[Наверх](#contents)

* [Advanced Natural Language Processing](https://people.cs.umass.edu/~miyyer/cs685_f20/) - CS 685, UMass Amherst CS
* [Deep Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures) — цикл лекций Оксфордского университета.
* [Deep Learning for Natural Language Processing (cs224-n)](https://web.stanford.edu/class/cs224n/) — курс Стэнфордского университета Ричарда Сочера и Кристофера Мэннинга.
* [Neural Networks for NLP](http://phontron.com/class/nn4nlp2017/) — курс Института языковых технологий Университета Карнеги-Меллона.
* [Deep NLP Course](https://github.com/yandexdataschool/nlp_course) — курс Yandex Data School, охватывающий основные темы от текстовых эмбеддингов до машинного перевода, включая моделирование последовательностей и языковые модели.
* [fast.ai Code-First Intro to Natural Language Processing](https://www.fast.ai/2019/07/08/fastai-nlp/) — сочетает традиционные темы NLP (регулярные выражения, SVD, наивный байесовский классификатор, токенизация) с современными нейросетевыми подходами (RNN, seq2seq, GRU и Transformer), а также рассматривает актуальные этические проблемы, например предвзятость и дезинформацию. Блокноты Jupyter доступны [здесь](https://github.com/fastai/course-nlp).
* [Machine Learning University - Accelerated Natural Language Processing](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw) — лекции охватывают путь от введения в NLP и обработки текста до рекуррентных нейронных сетей и Transformer.
Материалы доступны [здесь](https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp).
* [Applied Natural Language Processing](https://www.youtube.com/playlist?list=PLH-xYrxjfO2WyR3pOAB006CYMhNt4wTqp) — цикл лекций IIT Madras, начиная с основ и заканчивая автоэнкодерами и другими продвинутыми темами. Блокноты GitHub к курсу доступны [здесь](https://github.com/Ramaseshanr/anlp).
* [DeepLearning.AI Natural Language Processing Specialization](https://www.deeplearning.ai/courses/natural-language-processing-specialization/) — программа из четырёх курсов по анализу тональности, векторным представлениям слов, RNN, LSTM, механизмам внимания и моделям Transformer, таким как BERT и T5, для машинного перевода, суммаризации и других задач.
* [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/) — полный курс по созданию языковых моделей: данные, токенизация, обучение и оценка.
* [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/) — серия семинаров с лекциями авторов недавних исследований в области Transformer и NLP.
* [Cohere LLM University](https://cohere.com/llmu) — бесплатный курс по большим языковым моделям, эмбеддингам, семантическому поиску и приложениям NLP.
* [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) — практический курс по NLP с библиотеками Transformers, Datasets и Tokenizers.
* [NLP Demystified](https://www.nlpdemystified.org/) — бесплатный курс для начинающих, охватывающий основы NLP и модели Transformer; включает блокноты Python/Jupyter.


### Книги

* [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) — бесплатная книга профессора Дэна Джурафски.
* [Natural Language Processing](https://github.com/jacobeisenstein/gt-nlp-class) — бесплатные конспекты по NLP доктора Джейкоба Эйзенштейна из Georgia Tech.
* [NLP with PyTorch](https://github.com/joosthub/PyTorchNLPBook) — Брайан и Делип Рао.
* [Text Mining in R](https://www.tidytextmining.com)
* [Natural Language Processing with Python](https://www.nltk.org/book/)
* [Practical Natural Language Processing](https://www.oreilly.com/library/view/practical-natural-language/9781492054047/)
* [Natural Language Processing with Spark NLP](https://www.oreilly.com/library/view/natural-language-processing/9781492047759/)
* [Deep Learning for Natural Language Processing](https://www.manning.com/books/deep-learning-for-natural-language-processing) — автор Стефан Раймайкерс.
* [Real-World Natural Language Processing](https://www.manning.com/books/real-world-natural-language-processing) — автор Масато Хагивара.
* [Natural Language Processing in Action, Second Edition](https://www.manning.com/books/natural-language-processing-in-action-second-edition) — авторы Хобсон Лейн и Мария Дышель.
* [Transformers in Action](https://www.manning.com/books/transformers-in-action) — автор Николь Кёнигштайн.
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) — автор Тьяго Монтейру. Бесплатная книга FreeCodeCamp простым языком с инженерной точки зрения объясняет математику, лежащую в основе ИИ. В ней рассматриваются линейная алгебра, математический анализ, теория вероятностей и статистика, а также теория оптимизации с использованием аналогий, примеров из жизни и кода на Python.
  
## Библиотеки

[Наверх](#contents)

* <a id="node-js">**Node.js и JavaScript** — библиотеки NLP для Node.js</a> | [Наверх](#contents)
  * [Twitter-text](https://github.com/twitter/twitter-text) — реализация библиотеки обработки текста Twitter на JavaScript.
  * [Knwl.js](https://github.com/benhmoore/Knwl.js) — процессор естественного языка на JavaScript.
  * [Retext](https://github.com/retextjs/retext) — расширяемая система для анализа и преобразования естественного языка.
  * [NLP Compromise](https://github.com/spencermountain/compromise) — обработка естественного языка в браузере.
  * [Natural](https://github.com/NaturalNode/natural) — универсальные средства обработки естественного языка для Node.js.
  * [Poplar](https://github.com/synyi/poplar) — веб-инструмент для разметки данных в задачах обработки естественного языка (NLP).
  * [NLP.js](https://github.com/axa-group/nlp.js) — библиотека NLP для создания ботов.
  * [node-question-answering](https://github.com/huggingface/node-question-answering) — быстрые и готовые к эксплуатации системы ответов на вопросы с DistilBERT для Node.js.

* <a id="python"> **Python** — библиотеки NLP для Python</a> | [Наверх](#contents)
  - [sentimental-onix](https://github.com/sloev/sentimental-onix) — модели анализа тональности для spaCy с использованием ONNX.
  - [TextAttack](https://github.com/QData/TextAttack) — состязательные атаки, состязательное обучение и аугментация данных для NLP.
  - [TextBlob](http://textblob.readthedocs.org/) — единообразный API для решения распространённых задач обработки естественного языка (NLP). Основан на [Natural Language Toolkit (NLTK)](https://www.nltk.org/) и [Pattern](https://github.com/clips/pattern) и хорошо работает с обеими библиотеками :+1:
  - [spaCy](https://github.com/explosion/spaCy) — промышленная обработка естественного языка на Python и Cython :+1:
    - [textacy](https://github.com/chartbeat-labs/textacy) — высокоуровневый NLP на базе spaCy.
  - [gensim](https://radimrehurek.com/gensim/index.html) — библиотека Python для обучения моделей семантики без учителя на обычном тексте :+1:
  - [scattertext](https://github.com/JasonKessler/scattertext) — библиотека Python для создания визуализаций d3, показывающих различия между языком корпусов.
  - [GluonNLP](https://github.com/dmlc/gluon-nlp) *(архив)* — набор инструментов глубокого обучения для NLP на базе MXNet/Gluon.
  - [AllenNLP](https://github.com/allenai/allennlp) *(архив)* — исследовательская библиотека NLP на базе PyTorch для разработки передовых моделей глубокого обучения для широкого круга лингвистических задач.
  - [PyTorch-NLP](https://github.com/PetrochukM/PyTorch-NLP) — исследовательский набор инструментов NLP для быстрого прототипирования: улучшенные загрузчики данных и векторов слов, представления слоёв нейросетей и распространённые метрики NLP, например BLEU.
  - [Rosetta](https://github.com/columbia-applied-data-science/rosetta) — инструменты обработки текста и обёртки, например для Vowpal Wabbit.
  - [PyNLPl](https://github.com/proycon/pynlpl) — универсальная библиотека обработки естественного языка на Python, поддерживающая некоторые специальные форматы, такие как языковые модели ARPA, таблицы фраз Moses и выравнивания GIZA++.
  - [foliapy](https://github.com/proycon/foliapy) — библиотека Python для работы с [FoLiA](https://proycon.github.io/folia/), форматом XML для лингвистической разметки.
  - [PySS3](https://github.com/sergioburdisso/pyss3) — пакет Python с интерпретируемым текстовым классификатором SS3 и интерактивными визуализациями, объясняющими предсказания.
  - [jPTDP](https://github.com/datquocnguyen/jPTDP) — набор инструментов для совместной разметки частей речи (POS) и синтаксического анализа зависимостей. jPTDP включает предварительно обученные модели для более чем 40 языков.
  - [BigARTM](https://github.com/bigartm/bigartm) — быстрая библиотека тематического моделирования.
  - [Snips NLU](https://github.com/snipsco/snips-nlu) — готовая к эксплуатации библиотека для разбора намерений.
  - [Chazutsu](https://github.com/chakki-works/chazutsu) — библиотека для загрузки и разбора стандартных исследовательских наборов данных NLP.
  - [Word Forms](https://github.com/gutfeeling/word_forms) — точная генерация всех возможных форм английского слова.
  - [Multilingual Latent Dirichlet Allocation (LDA)](https://github.com/ArtificiAI/Multilingual-Latent-Dirichlet-Allocation-LDA) — расширяемый конвейер кластеризации документов для нескольких языков.
  - [Natural Language Toolkit (NLTK)](https://www.nltk.org/) — библиотека с широким набором функций NLP и поддержкой более 50 корпусов.
  - [NLP Architect](https://github.com/NervanaSystems/nlp-architect) — библиотека для изучения современных архитектур глубокого обучения и методов NLP и NLU.
  - [Flair](https://github.com/zalandoresearch/flair) — простой фреймворк мультиязычного NLP на базе PyTorch с эмбеддингами BERT, ELMo и Flair.
  - [Kashgari](https://github.com/BrikerMan/Kashgari) — простой мультиязычный фреймворк NLP на базе Keras; позволяет за пять минут создавать модели для распознавания именованных сущностей (NER), разметки частей речи (PoS) и классификации текста. Включает эмбеддинги BERT и word2vec.
  - [FARM](https://github.com/deepset-ai/FARM) — быстрый и простой трансфер обучения для NLP. Адаптация языковых моделей для промышленного применения с акцентом на ответы на вопросы.
  - [Haystack](https://github.com/deepset-ai/haystack) — полный фреймворк Python для создания интерфейсов поиска по данным на естественном языке. Использует Transformers и современные достижения NLP; поддерживает DPR, Elasticsearch, Model Hub Hugging Face и многое другое.
  - [Rita DSL](https://github.com/zaibacu/rita-dsl) — предметно-ориентированный язык, частично основанный на [RUTA в Apache UIMA](https://uima.apache.org/ruta.html). Позволяет задавать языковые шаблоны для правил NLP и преобразовывать их в код [spaCy](https://spacy.io/) либо, если нужны более компактные средства, в шаблоны регулярных выражений.
  - [Transformers](https://github.com/huggingface/transformers) — обработка естественного языка для TensorFlow 2.0 и PyTorch.
  - [Tokenizers](https://github.com/huggingface/tokenizers) — токенизаторы, оптимизированные для исследований и промышленного применения.
  - [fairSeq](https://github.com/pytorch/fairseq) — реализации современных моделей seq2seq от Facebook AI Research на PyTorch.
  - [corex_topic](https://github.com/gregversteeg/corex_topic) — иерархическое тематическое моделирование с минимальными знаниями предметной области.
  - [Sockeye](https://github.com/awslabs/sockeye) — набор инструментов нейронного машинного перевода (NMT), используемый в Amazon Translate.
  - [DL Translate](https://github.com/xhlulu/dl-translate) — библиотека перевода на основе глубокого обучения для 50 языков, построенная на `transformers` и mBART Large от Facebook.
  - [Jury](https://github.com/obss/jury) — оценка выходных данных моделей NLP с помощью различных автоматических метрик.
  - [python-ucto](https://github.com/proycon/python-ucto) — токенизатор на основе регулярных выражений с поддержкой Unicode для разных языков. Привязка Python к библиотеке C++; поддерживает [формат FoLiA](https://proycon.github.io/folia).
  - [Pearmut](https://github.com/zouharvi/pearmut) — инструмент ручной разметки для мультиязычных задач NLP, например машинного перевода.
  - [Stanza](https://github.com/stanfordnlp/stanza) — набор инструментов Python от Stanford NLP для токенизации, разметки частей речи, лемматизации, синтаксического анализа зависимостей и NER более чем для 70 языков.
  - [Sentence-Transformers](https://github.com/UKPLab/sentence-transformers) — эмбеддинги предложений и документов, семантический поиск и повторное ранжирование; современный стандарт для NLP-задач поиска.
  - [Argilla](https://github.com/argilla-io/argilla) — платформа с открытым исходным кодом для разметки данных и сбора отзывов для наборов данных LLM и NLP.
  - [HuggingFace Datasets](https://github.com/huggingface/datasets) — стандартизированные средства загрузки и обработки тысяч наборов данных NLP.
  - [HuggingFace Evaluate](https://github.com/huggingface/evaluate) — эталонные реализации метрик NLP.
  - [sacrebleu](https://github.com/mjpost/sacrebleu) — воспроизводимый расчёт BLEU/chrF/TER для машинного перевода.
  - [COMET](https://github.com/Unbabel/COMET) — обучаемые метрики машинного перевода, ставшие фактическим стандартом.
  - [LangTest](https://github.com/JohnSnowLabs/langtest) — более 60 типов проверок устойчивости моделей NLP, предвзятости и справедливости.
   - [yasbd-lib](https://github.com/speedyk-005/yasbd-lib) — высокоточный детектор границ предложений (SBD) на основе правил. Совместимый адаптер pysbd, потоковые API, интерфейс командной строки и компонент spaCy для более чем 39 языков.

- <a id="c++">**C++** — библиотеки NLP для C++</a> | [Наверх](#contents)
  - [InsNet](https://github.com/chncwang/InsNet) — библиотека нейронных сетей для построения зависящих от экземпляров моделей NLP с динамической пакетной обработкой без дополнения последовательностей.
  - [MIT Information Extraction Toolkit](https://github.com/mit-nlp/MITIE) — инструменты на C, C++ и Python для распознавания именованных сущностей и извлечения отношений.
  - [CRF++](https://taku910.github.io/crfpp/) — реализация условных случайных полей (CRF) с открытым исходным кодом для сегментации и разметки последовательностей и других задач NLP.
  - [CRFsuite](http://www.chokkan.org/software/crfsuite/) — реализация условных случайных полей (CRF) для разметки последовательных данных.
  - [BLLIP Parser](https://github.com/BLLIP/bllip-parser) — синтаксический анализатор естественного языка BLLIP, также известный как анализатор Charniak-Johnson.
  - [colibri-core](https://github.com/proycon/colibri-core) — библиотека C++, инструменты командной строки и привязка Python для быстрого и экономного по памяти извлечения и обработки базовых лингвистических конструкций, таких как n-граммы и пропускаемые n-граммы.
  - [ucto](https://github.com/LanguageMachines/ucto) — токенизатор на основе регулярных выражений с поддержкой Unicode для разных языков. Инструмент и библиотека C++, поддерживающие формат FoLiA.
  - [libfolia](https://github.com/LanguageMachines/libfolia) — библиотека C++ для [формата FoLiA](https://proycon.github.io/folia/).
  - [frog](https://github.com/LanguageMachines/frog) — набор инструментов NLP для нидерландского языка на основе памяти: разметка частей речи, лемматизация, синтаксический анализ зависимостей, NER, поверхностный синтаксический анализ и морфологический анализ.
  - [MeTA](https://github.com/meta-toolkit/meta) — ModErn Text Analysis: набор инструментов науки о данных на C++ для интеллектуального анализа больших текстовых данных.
  - [Mecab (Japanese)](https://taku910.github.io/mecab/)
  - [Moses](http://statmt.org/moses/)
  - [StarSpace](https://github.com/facebookresearch/StarSpace) — библиотека Facebook для создания эмбеддингов слов, абзацев и документов, а также для классификации текста.
  - [QSMM](http://qsmm.org) — адаптивные вероятностные анализаторы с нисходящим и восходящим разбором.

- <a id="java">**Java** — библиотеки NLP для Java</a> | [Наверх](#contents)
  - [Stanford NLP](https://nlp.stanford.edu/software/index.shtml)
  - [OpenNLP](https://opennlp.apache.org/)
  - [NLP4J](https://emorynlp.github.io/nlp4j/)
  - [Word2vec in Java](https://deeplearning4j.org/docs/latest/deeplearning4j-nlp-word2vec)
  - [ReVerb](https://github.com/knowitall/reverb/) — извлечение открытой информации в масштабах веба.
  - [OpenRegex](https://github.com/knowitall/openregex) — эффективный и гибкий язык регулярных выражений и движок, работающие на основе токенов.
  - [CogcompNLP](https://github.com/CogComp/cogcomp-nlp) — основные библиотеки, разработанные группой когнитивных вычислений Иллинойсского университета.
  - [MALLET](http://mallet.cs.umass.edu/) — пакет MAchine Learning for LanguagE Toolkit для статистической обработки естественного языка, классификации и кластеризации документов, тематического моделирования, извлечения информации и других приложений машинного обучения к тексту.
  - [RDRPOSTagger](https://github.com/datquocnguyen/RDRPOSTagger) — надёжный набор инструментов разметки частей речи на Java и Python с предварительно обученными моделями для более чем 40 языков.

- <a id="kotlin">**Kotlin** — библиотеки NLP для Kotlin</a> | [Наверх](#contents)
  - [Lingua](https://github.com/pemistahl/lingua/) — библиотека определения языка для Kotlin и Java, подходящая как для коротких, так и для длинных текстов.
  - [Kotidgy](https://github.com/meiblorn/kotidgy) — генератор текстовых данных на основе индексов, написанный на Kotlin.

- <a id="scala">**Scala** — библиотеки NLP для Scala</a> | [Наверх](#contents)
  - [Saul](https://github.com/CogComp/saul) — библиотека для разработки систем NLP со встроенными модулями, например SRL и POS.
  - [ATR4S](https://github.com/ispras/atr4s) — набор инструментов с современными методами [автоматического извлечения терминов](https://en.wikipedia.org/wiki/Terminology_extraction).
  - [tm](https://github.com/ispras/tm) — реализация тематического моделирования на основе регуляризованного мультиязычного метода [PLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis).
  - [word2vec-scala](https://github.com/Refefer/word2vec-scala) — интерфейс Scala к модели word2vec; включает операции над векторами, например вычисление расстояния между словами и поиск словесных аналогий.
  - [Epic](https://github.com/dlwh/epic) — высокопроизводительный статистический синтаксический анализатор на Scala и фреймворк для построения сложных моделей структурированного предсказания.
  - [Spark NLP](https://github.com/JohnSnowLabs/spark-nlp) — библиотека обработки естественного языка на базе Apache Spark ML, предоставляющая простую, производительную и точную NLP-разметку для масштабируемых распределённых конвейеров машинного обучения.

- <a id="R">**R** — библиотеки NLP для R</a> | [Наверх](#contents)
  - [text2vec](https://github.com/dselivanov/text2vec) — быстрое векторное представление, тематическое моделирование, вычисление расстояний и эмбеддинги GloVe на R.
  - [wordVectors](https://github.com/bmschmidt/wordVectors) — пакет R для создания и изучения моделей word2vec и других моделей векторных представлений слов.
  - [RMallet](https://github.com/mimno/RMallet) — пакет R для взаимодействия с инструментом машинного обучения MALLET для Java.
  - [dfr-browser](https://github.com/agoldst/dfr-browser) — создаёт визуализации d3 для просмотра тематических моделей текста в браузере.
  - [dfrtopics](https://github.com/agoldst/dfrtopics) — пакет R для изучения тематических моделей текста.
  - [sentiment_classifier](https://github.com/kevincobain2000/sentiment_classifier) — классификация тональности с помощью снятия лексической неоднозначности и средства чтения WordNet.
  - [jProcessing](https://github.com/kevincobain2000/jProcessing) — библиотеки обработки японского языка, включая классификацию тональности японского текста.
  - [corporaexplorer](https://kgjerde.github.io/corporaexplorer/) — пакет R для динамического изучения коллекций текстов.
  - [tidytext](https://github.com/juliasilge/tidytext) — интеллектуальный анализ текста с помощью инструментов tidy.
  - [spacyr](https://github.com/quanteda/spacyr) — обёртка R для NLP spaCy.
  - [CRAN Task View: Natural Language Processing](https://github.com/cran-task-views/NaturalLanguageProcessing/)

- <a id="clojure">**Clojure**</a> | [Back to Top](#contents)
  - [Clojure-openNLP](https://github.com/dakrone/clojure-opennlp) — обработка естественного языка в Clojure (opennlp).
  - [Infections-clj](https://github.com/r0man/inflections-clj) — библиотека словоизменения для Clojure и ClojureScript, похожая на Rails.
  - [postagga](https://github.com/fekr/postagga) — библиотека синтаксического анализа естественного языка для Clojure и ClojureScript.

- <a id="go">**Go**</a> | [Back to Top](#contents)
  - [prose](https://github.com/jdkato/prose) — библиотека обработки текста с токенизацией, разметкой частей речи и извлечением именованных сущностей.
  - [gojieba](https://github.com/yanyiwu/gojieba) — реализация алгоритма сегментации китайских слов jieba на Go.
  - [kagome](https://github.com/ikawaha/kagome) — анализатор морфологии японского языка, написанный на чистом Go.
  - [go-propisyu](https://github.com/rekurt/go-propisyu) — преобразует числа в русские слова с правильным грамматическим родом и склонением существительных.

- <a id="ruby">**Ruby**</a> | [Back to Top](#contents)
  - [A collection of Natural Language Processing (NLP) Ruby libraries, tools and software](https://github.com/diasks2/ruby-nlp) Кевина Диаса.
  - [Practical Natural Language Processing done in Ruby](https://github.com/arbox/nlp-with-ruby)

- <a id="rust">**Rust**</a> | [Back to Top](#contents)
  - [whatlang](https://github.com/greyblake/whatlang-rs) — библиотека распознавания естественного языка на основе триграмм.
  - [rust-bert](https://github.com/guillaume-be/rust-bert) — готовые конвейеры NLP и модели на основе Transformer.
  - [snips-nlu-rs](https://github.com/snipsco/snips-nlu-rs) *(архив — проект Snips закрыт)* — готовая к эксплуатации библиотека для разбора намерений.

- <a id="NLP++">**NLP++** — язык NLP++</a> | [Наверх](#contents)
  - [VSCode Language Extension](https://marketplace.visualstudio.com/items?itemName=dehilster.nlp) — расширение языка NLP++ для VSCode.
  - [nlp-engine](https://github.com/VisualText/nlp-engine) — движок для запуска кода NLP++ в Linux, включая полноценный анализатор английского языка.
  - [VisualText](http://visualtext.org) — главная страница языка NLP++.
  - [NLP++ Wiki](http://wiki.naturalphilosophy.org/index.php?title=NLP%2B%2B) — статья о языке NLP++ в Wiki.

- <a id="julia">**Julia**</a> | [Back to Top](#contents)
  - [CorpusLoaders](https://github.com/JuliaText/CorpusLoaders.jl) — разнообразные загрузчики различных корпусов NLP.
  - [Languages](https://github.com/JuliaText/Languages.jl) — пакет для работы с естественными языками.
  - [TextAnalysis](https://github.com/JuliaText/TextAnalysis.jl) — пакет Julia для анализа текста.
  - [TextModels](https://github.com/JuliaText/TextModels.jl) — модели обработки естественного языка на базе нейронных сетей.
  - [WordTokenizers](https://github.com/JuliaText/WordTokenizers.jl) — высокопроизводительные токенизаторы для обработки естественного языка и смежных задач.
  - [Word2Vec](https://github.com/JuliaText/Word2Vec.jl) — интерфейс Julia к word2vec.

### Сервисы

NLP в виде API с функциями высокого уровня, такими как NER, тематическая разметка и т. п. | [Наверх](#contents)

- [Wit-ai](https://github.com/wit-ai/wit) — интерфейс естественного языка для приложений и устройств.
- [IBM Watson's Natural Language Understanding](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs) — API и демонстрация на GitHub.
- [Amazon Comprehend](https://aws.amazon.com/comprehend/) — набор средств NLP и машинного обучения для наиболее распространённых задач, таких как NER, разметка и анализ тональности.
- [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) — синтаксический анализ, NER, анализ тональности и разметка содержимого как минимум на девяти языках, включая английский и китайский (упрощённый и традиционный).
- [ParallelDots](https://www.paralleldots.com/text-analysis-apis) — API-сервис высокоуровневого анализа текста для задач от анализа тональности до распознавания намерений.
- [Microsoft Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/)
- [TextRazor](https://www.textrazor.com/)
- [Rosette](https://www.rosette.com/)
- [Textalytic](https://www.textalytic.com) — обработка естественного языка в браузере: анализ тональности, извлечение именованных сущностей, разметка частей речи, частотность слов, тематическое моделирование, облака слов и многое другое.
- [NLP Cloud](https://nlpcloud.io) — пользовательские и предварительно обученные NLP-модели spaCy через REST API для распознавания именованных сущностей (NER), разметки частей речи и других задач.
- [Cloudmersive](https://cloudmersive.com/nlp-api) — единый бесплатный набор API NLP для разметки речи, перефразирования текста, перевода и определения языка, синтаксического анализа предложений и других задач.

### Инструменты аннотирования

- [GATE](https://gate.ac.uk/overview.html) — General Architecture and Text Engineering: свободная платформа с открытым исходным кодом, развиваемая более 15 лет.
- [Anafora](https://github.com/weitechen/anafora) — бесплатный веб-инструмент с открытым исходным кодом для разметки необработанного текста.
- [brat](https://brat.nlplab.org/) — среда для совместной разметки текста с помощью инструмента brat rapid annotation.
- [doccano](https://github.com/chakki-works/doccano) — бесплатный инструмент с открытым исходным кодом для разметки данных при классификации текста, разметке последовательностей и преобразовании последовательностей.
- [INCEpTION](https://inception-project.github.io) — платформа семантической разметки с интеллектуальными помощниками и управлением знаниями.
- [prodigy](https://prodi.gy/) — инструмент разметки с активным обучением; платный.
- [LightTag](https://lighttag.io) — размещаемый и управляемый инструмент разметки текста для команд; платный.
- [rstWeb](https://corpling.uis.georgetown.edu/rstweb/info/) — локальный или онлайн-инструмент с открытым исходным кодом для разметки деревьев дискурса.
- [GitDox](https://corpling.uis.georgetown.edu/gitdox/) — серверный инструмент разметки с открытым исходным кодом, контролем версий GitHub и проверкой XML-данных и совместных электронных таблиц.
- [Datasaur](https://datasaur.ai/) — поддерживает различные задачи NLP для отдельных пользователей и команд; доступна бесплатная версия.
- [Konfuzio](https://konfuzio.com/en/) — ориентированный на команды облачный и локальный инструмент разметки текста, изображений и PDF с активным обучением; доступна бесплатная версия, платные тарифы.
- [UBIAI](https://ubiai.tools/) — простой в использовании командный инструмент разметки текста с широкими возможностями автоматической разметки. Поддерживает NER, отношения, классификацию документов и разметку счетов с помощью OCR; платный.
- [Shoonya](https://github.com/AI4Bharat/Shoonya-Backend) — бесплатная платформа разметки данных с открытым исходным кодом и широкими возможностями управления организациями и рабочими пространствами. Не зависит от типа данных и позволяет командам масштабно размечать данные с различными этапами проверки.
- [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) — бесплатная сквозная платформа без кода для разметки текста и обучения/настройки моделей глубокого обучения. Из коробки поддерживает модели Spark NLP для распознавания именованных сущностей, классификации, извлечения отношений и определения статуса утверждений. Без ограничений по числу пользователей, команд, проектов и документов. Не является свободным ПО с открытым исходным кодом.
- [FLAT](https://github.com/proycon/flat) — веб-среда лингвистической разметки на основе [формата FoLiA](http://proycon.github.io/folia), расширенного формата XML для лингвистической разметки. Бесплатная и с открытым исходным кодом.
- [Argilla](https://github.com/argilla-io/argilla) — платформа с открытым исходным кодом для сбора отзывов людей, создания наборов данных NLP и LLM и отбора данных о предпочтениях.
- [Label Studio](https://github.com/HumanSignal/label-studio) — мультимодальная платформа разметки с открытой основной частью, широко используемая для разметки NLP.
- [Potato](https://github.com/davidjurgens/potato) — бесплатный инструмент разметки с открытым исходным кодом для более чем 21 типа задач (классификация, выделение фрагментов, кореференция, связывание сущностей, оценка трассировки агентов). Включает контроль качества MACE, проверки внимания, разметку с помощью ИИ и более 300 примеров задач.


## Задачи и методы

Задачи NLP сгруппированы по лингвистическим проблемам. В каждом подразделе сначала перечислены фундаментальные и классические работы, затем нейросетевые подходы и, где уместно, методы на основе LLM. Современные исследования языковых моделей (предварительное обучение, оценка, поиск, рассуждение и т. д.) см. в разделе [Языковые модели для NLP](#language-models-for-nlp).

### Текстовые эмбеддинги

[Наверх](#contents)

Статические эмбеддинги слов (основополагающие работы):

- [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) - [implementation](https://code.google.com/archive/p/word2vec/) - [explainer blog](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [GloVe](https://nlp.stanford.edu/pubs/glove.pdf) - [explainer blog](https://blog.acolyer.org/2016/04/22/glove-global-vectors-for-word-representation/)
- [fastText](https://arxiv.org/abs/1607.04606) — [реализация](https://github.com/facebookresearch/fastText); подсловные n-граммы хорошо обрабатывают неизвестные слова и по-прежнему полезны для языков с ограниченными ресурсами.
- [sense2vec](https://arxiv.org/abs/1511.06388) — снятие лексической неоднозначности.
- [Paragraph Vectors / doc2vec](https://cs.stanford.edu/~quocle/paragraph_vector.pdf)

Контекстные эмбеддинги:

- [ELMo](https://arxiv.org/abs/1802.05365) — глубокие контекстные представления слов.
- [CoVe](https://arxiv.org/abs/1708.00107) — контекстные векторы, обученные на машинном переводе.
- [ULMFiT](https://arxiv.org/abs/1801.06146) — дообучение языковой модели для классификации текста.
- [InferSent](https://arxiv.org/abs/1705.02364) — представления предложений на основе логического вывода по естественному языку (NLI).

Современные эмбеддинги предложений и документов см. в разделе [Поиск для NLP](#retrieval-for-nlp) (Sentence-Transformers, E5, BGE-M3, Nomic, GritLM), а текущие рейтинги — в [MTEB](https://github.com/embeddings-benchmark/mteb).

### Токенизация, морфология и сегментация

[Наверх](#contents)

- [SentencePiece](https://github.com/google/sentencepiece) — языконезависимая подсловная токенизация.
- [BPE](https://arxiv.org/abs/1508.07909) и [Unigram LM](https://arxiv.org/abs/1804.10959) — два наиболее распространённых метода подсловной токенизации.
- [Stanza](https://github.com/stanfordnlp/stanza) — токенизация, лемматизация и морфологический анализ для более чем 70 языков.
- [UDPipe](https://github.com/ufal/udpipe) — токенизация, разметка, лемматизация и синтаксический анализ для Universal Dependencies.
- [Morfessor](https://github.com/aalto-speech/morfessor) — морфологическая сегментация без учителя.
Исследования токенизаторов и архитектур (см. также раздел [Языковые модели](#language-models-for-nlp)):

- [Byte-Pair Encoding (Sennrich et al.)](https://arxiv.org/abs/1508.07909) — подсловные единицы для нейронного машинного перевода; основа современных токенизаторов.
- [SentencePiece](https://github.com/google/sentencepiece) — языконезависимая подсловная токенизация (BPE и Unigram).
- [Tokenizers](https://github.com/huggingface/tokenizers) — быстрые реализации BPE, WordPiece и Unigram на Rust.
- [ByT5](https://arxiv.org/abs/2105.13626) — байтовая модель без токенизатора.
- [CANINE](https://arxiv.org/abs/2103.06874) — энкодер без токенизации, работающий с символами Unicode.
- [How Good is Your Tokenizer?](https://arxiv.org/abs/2012.15613) — справедливость токенизаторов для разных языков.
- [Byte Latent Transformer (BLT)](https://arxiv.org/abs/2412.09871) (Meta, 2024) — динамическое разбиение на байтовые фрагменты, сопоставимое по масштабу с моделями на токенах BPE; возрождает подходы без токенизаторов.
- [SuperBPE](https://arxiv.org/abs/2503.13423) (2025) — токенизация сверхслов, превосходящая BPE в последующих задачах.
- [Over-Tokenized Transformer](https://arxiv.org/abs/2501.16975) (ICML 2025) — разделяет словари входных и выходных данных; выявляет лог-линейную связь между размером входного словаря и ошибкой обучения, позволяя изменять размер словаря независимо от размера модели.
- [Foundations of Tokenization](https://arxiv.org/abs/2407.11606) (ICLR 2025) — первая формальная единая основа для моделей токенизаторов с использованием теории категорий стохастических отображений; устанавливает условия статистической состоятельности.
- [The Token Tax: Systematic Bias in Multilingual Tokenization](https://arxiv.org/abs/2509.05486) (2025) — количественно оценивает, как дробность токенизации предсказывает точность моделей для разных языков, выявляя структурное увеличение стоимости для морфологически сложных языков и языков с ограниченными ресурсами.
- [Reducing Tokenization Premiums for Low-Resource Languages](https://arxiv.org/abs/2601.13328) (2026) — постфактум расширяет словарь, объединяя последовательности символов, разбитые на несколько токенов, для языков с ограниченными ресурсами и снижая стоимость вывода без переобучения.

### Разметка частей речи и синтаксический анализ зависимостей

[Наверх](#contents)

- [Universal Dependencies](https://universaldependencies.org/) — согласованные между языками банки синтаксических деревьев для более чем 100 языков.
- [spaCy](https://spacy.io/) и [Stanza](https://github.com/stanfordnlp/stanza) — готовые к промышленному использованию анализаторы для множества языков.
- [Deep Biaffine Attention for Neural Dependency Parsing](https://arxiv.org/abs/1611.01734) — основополагающая нейросетевая архитектура синтаксического анализа.
- [Trankit](https://github.com/nlp-uoregon/trankit) — лёгкий мультиязычный набор инструментов NLP на базе Transformer.
- [Self-Attentive Constituency Parsing (Kitaev & Klein)](https://arxiv.org/abs/1805.01052) — эффективный нейросетевой анализатор составляющих.

### Распознавание именованных сущностей и извлечение информации

[Наверх](#contents)

Основополагающие и нейросетевые подходы:

- [CoNLL-2003 NER](https://www.aclweb.org/anthology/W03-0419/) — классический бенчмарк NER для английского языка.
- [Neural Architectures for NER (Lample et al.)](https://arxiv.org/abs/1603.01360) — BiLSTM-CRF, долгое время являвшаяся стандартной архитектурой NER.
- [Flair](https://github.com/flairNLP/flair) — контекстные символьные эмбеддинги и эффективный NER для разных языков.
- [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) — готовое к промышленному использованию решение.

Открытое извлечение информации и выполнение инструкций:

- [Universal NER](https://arxiv.org/abs/2308.03279) — языковая модель, настроенная на выполнение инструкций для NER с открытым набором типов сущностей на разных языках.
- [GLiNER](https://arxiv.org/abs/2311.08526) (2023) — компактная универсальная модель NER, способная распознавать произвольные типы сущностей во время вывода.
- [GoLLIE](https://arxiv.org/abs/2310.03668) — извлечение информации с помощью языковых моделей, следующих инструкциям.
- [REBEL](https://github.com/Babelscape/rebel) — сквозное извлечение отношений как задача seq2seq.

На основе LLM:

- [GPT-NER](https://arxiv.org/abs/2304.10428) — большие языковые модели для распознавания именованных сущностей.
- [Can LLMs Replace Sentence-Level NER?](https://arxiv.org/abs/2402.10573) (2024) — компромиссы между стоимостью и качеством.
- [Generative NER in the Era of LLMs](https://arxiv.org/abs/2601.17898) (2026) — сравнение восьми открытых LLM на четырёх бенчмарках NER; PEFT со структурированными выходными данными достигает качества NER на основе энкодеров.

### Разрешение кореференции

[Наверх](#contents)

- [End-to-End Neural Coreference (Lee et al.)](https://arxiv.org/abs/1707.07045) — основа современных нейросетевых методов разрешения кореференции.
- [SpanBERT](https://arxiv.org/abs/1907.10529) — предварительное обучение на фрагментах текста; эффективная базовая модель для разрешения кореференции.
- [coref-hoi](https://github.com/lxucs/coref-hoi) — разрешение кореференции с выводом высших порядков.
- [maverick-coref](https://github.com/SapienzaNLP/maverick-coref) (2024) — эффективное разрешение кореференции на уровне лучших более крупных систем.
- [LingMess](https://arxiv.org/abs/2205.12644) — оценка кореференции по категориям с учётом лингвистических особенностей.
На основе LLM:

- [LLMs for Coreference Resolution](https://arxiv.org/abs/2310.05884) — применение промптов и дообучения для разрешения кореференции.
- [Multilingual Coreference Shared Task: Can LLMs Dethrone Traditional Approaches?](https://arxiv.org/abs/2509.17796) (2025) — сравнение девяти систем: четырёх на основе LLM и пяти традиционных; традиционные методы пока лидируют, но LLM сокращают отставание.

### Классификация текста и анализ тональности

[Наверх](#contents)

- [fastText classifier](https://arxiv.org/abs/1607.01759) — эффективная и быстрая линейная базовая модель.
- [Sentiment Treebank (SST)](https://nlp.stanford.edu/sentiment/) — классический набор данных для тонкого анализа тональности.
- [SetFit](https://github.com/huggingface/setfit) — классификация текста в режиме few-shot без промптов.
- [FastFit](https://github.com/IBM/fastfit) — быстрый few-shot для задач со множеством классов.
- [SST / IMDB / AG News with DeBERTa-v3](https://arxiv.org/abs/2111.09543) — современная базовая модель для дообучения энкодеров.
- [PySS3](https://github.com/sergioburdisso/pyss3) — интерпретируемый текстовый классификатор с прозрачной логикой.
- [LLMs as Annotators](https://arxiv.org/abs/2305.13734) — использование LLM для разметки текстов при классификации с учётом связанных с этим ограничений.

### Тематическое моделирование

[Наверх](#contents)

- [Latent Dirichlet Allocation (Blei et al.)](https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) — основополагающая модель тематического моделирования.
- [gensim](https://radimrehurek.com/gensim/) — LDA, LSI и HDP на Python.
- [BigARTM](https://github.com/bigartm/bigartm) — быстрое регуляризованное тематическое моделирование.
- [BERTopic](https://github.com/MaartenGr/BERTopic) — тематическое моделирование на основе кластеризации контекстных эмбеддингов; распространённый современный вариант по умолчанию.
- [Top2Vec](https://github.com/ddangelov/Top2Vec) — совместное обучение векторов тем и документов.
- [CorEx Topic](https://github.com/gregversteeg/corex_topic) — иерархическое тематическое моделирование с опорными словами.

### Суммаризация

[Наверх](#contents)

- [TextRank](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf) — экстрактивная суммаризация на основе графов.
- [Pointer-Generator Networks (See et al.)](https://arxiv.org/abs/1704.04368) — основополагающий нейросетевой подход к абстрактивной суммаризации.
- [PEGASUS](https://arxiv.org/abs/1912.08777) — предварительное обучение для суммаризации с пропущенными предложениями.
- [BART](https://arxiv.org/abs/1910.13461) — широко используемая базовая модель seq2seq с устранением шума.
- [BookSum](https://arxiv.org/abs/2105.08209) и [SCROLLS](https://arxiv.org/abs/2201.03533) — бенчмарки суммаризации длинных документов.
На основе LLM:

- [Benchmarking LLMs for News Summarization](https://arxiv.org/abs/2301.13848) — сравнение LLM с дообученными моделями суммаризации.
- [Element-Aware Summarization with LLMs](https://arxiv.org/abs/2305.13412) — структурированные промпты для суммаризации.
- [Understanding LLM Reasoning for Abstractive Summarization](https://arxiv.org/abs/2512.03503) (2025) — явное рассуждение улучшает беглость, но ухудшает фактическую обоснованность; увеличение бюджета рассуждений может снижать точность передачи исходного содержания.

### Машинный перевод

[Наверх](#contents)

Статистические и основополагающие нейросетевые подходы:

- [Moses](http://statmt.org/moses/) — эталонная система статистического машинного перевода.
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Transformer, изменивший всю область.
- [Marian NMT](https://github.com/marian-nmt/marian) — эффективный фреймворк NMT на C++.
- [Fairseq](https://github.com/facebookresearch/fairseq) — набор инструментов PyTorch для моделирования последовательностей.

Масштабные мультиязычные модели:

- [NLLB-200](https://arxiv.org/abs/2207.04672) — машинный перевод для 200 языков.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) — машинный перевод для более чем 400 языков.
- [SeamlessM4T](https://arxiv.org/abs/2312.05187) — перевод речи и текста более чем на 100 языков.

Оценка:

- [COMET](https://github.com/Unbabel/COMET) — обучаемая метрика машинного перевода; фактический стандарт наряду с chrF.
- [sacrebleu](https://github.com/mjpost/sacrebleu) — воспроизводимый расчёт BLEU/chrF/TER.
- [BERTScore](https://github.com/Tiiiger/bert_score) — метрика генерации на основе сходства.

На основе LLM:

- [Is ChatGPT a Good Translator?](https://arxiv.org/abs/2301.08745) — большие языковые модели как системы машинного перевода.
- [Adapting LLMs for Document-Level MT](https://arxiv.org/abs/2401.06468) (2024) — использование LLM для контекстно-зависимого перевода.
- [GPT-4 vs Human Translators](https://arxiv.org/abs/2308.03245) — сравнение качества профессионального машинного перевода.
- [Multilingual MT with Open LLMs at Practical Scale](https://arxiv.org/abs/2502.02481) (2025) — бенчмарк открытых LLM размером менее 10 млрд параметров для перевода на 28 языков; качество сопоставимо с GPT-4-turbo и Google Translate.
- [Bridging the Linguistic Divide: Survey on LLMs for MT](https://arxiv.org/abs/2504.01919) (2025) — обзор того, как следование инструкциям, обучение в контексте и выравнивание предпочтений изменили методологию машинного перевода.

### Ответы на вопросы и понимание прочитанного

[Наверх](#contents)

Наборы данных и основополагающие системы:

- [SQuAD / SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/) — экстрактивное понимание прочитанного.
- [Natural Questions](https://ai.google.com/research/NaturalQuestions/) — вопросы реальных пользователей по содержимому Wikipedia.
- [HotpotQA](https://hotpotqa.github.io/) — рассуждения в несколько шагов.
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) — ответы на вопросы с удалённым наблюдением.
- [DrQA](https://github.com/facebookresearch/DrQA) — ответы на вопросы по открытым источникам Wikipedia.
- [Document-QA](https://github.com/allenai/document-qa) — понимание текста из нескольких абзацев.

Современные системы ответов на вопросы по открытым источникам:

- [DPR](https://arxiv.org/abs/2004.04906) и [FiD](https://arxiv.org/abs/2007.01282) — подход «сначала поиск, затем чтение», стандартный конвейер ответов на вопросы по открытым источникам до появления LLM.
- [Atlas](https://arxiv.org/abs/2208.03299) — языковая модель с поисковым дополнением для few-shot ответов на вопросы.
- См. также раздел [Поиск для NLP](#retrieval-for-nlp).

Эпоха LLM:

- [GPT-4 with retrieval on TriviaQA / NQ](https://arxiv.org/abs/2305.06983)
- [Self-RAG](https://arxiv.org/abs/2310.11511) (2023) — поиск, генерация и самокритика.
- [GAIA](https://arxiv.org/abs/2311.12983) — бенчмарк универсальных ИИ-ассистентов, включающий многошаговые ответы на вопросы.

### Извлечение информации за пределами распознавания сущностей

[Наверх](#contents)

- [OpenIE 6](https://github.com/dair-iitd/openie6) — извлечение открытой информации без заданной схемы.
- [Template-Based Information Extraction without the Templates](https://www.usna.edu/Users/cs/nchamber/pubs/acl2011-chambers-templates.pdf)
- [Privee: An Architecture for Automatically Analyzing Web Privacy Policies](https://www.sebastianzimmeck.de/zimmeckAndBellovin2014Privee.pdf)
- [REBEL](https://github.com/Babelscape/rebel) — сквозное извлечение отношений.
- [DocRED](https://github.com/thunlp/DocRED) — бенчмарк извлечения отношений на уровне документов.
- [LLMs for Semantic Role Labeling](https://arxiv.org/abs/2506.05385) (2025) — генеративные LLM с RAG и самокоррекцией превосходят модели BERT типа encoder-decoder в семантической разметке ролей (SRL) для английского и китайского языков.
- [Adapting LLMs for Minimal-edit GEC](https://arxiv.org/abs/2506.13148) (2025) — LLM типа decoder-only с новым графиком адаптации по частоте ошибок устанавливают новый лучший результат в исправлении грамматических ошибок на BEA-test с минимальным редактированием.

### Поиск и эмбеддинги

[Наверх](#contents)

Плотный поиск и поиск с отложенным взаимодействием — всё более распространённая основа систем ответов на вопросы и информационного поиска:

- [DPR (Dense Passage Retrieval)](https://arxiv.org/abs/2004.04906) — базовая система поиска с двумя энкодерами.
- [ColBERT](https://arxiv.org/abs/2004.12832) и [ColBERTv2](https://arxiv.org/abs/2112.01488) — поиск с отложенным взаимодействием; эффективен в предметных областях, отличных от обучающей.
- [E5](https://arxiv.org/abs/2212.03533) и [E5-Mistral](https://arxiv.org/abs/2401.00368) — широко используемые семейства плотных эмбеддингов.
- [BGE](https://github.com/FlagOpen/FlagEmbedding) и [BGE-M3](https://arxiv.org/abs/2402.03216) (2024) — мультиязычные многофункциональные эмбеддинги, лидирующие в MTEB для разных языков.
- [Nomic Embed](https://arxiv.org/abs/2402.01613) (2024) — полностью открытая и воспроизводимая модель эмбеддингов.
- [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) — вложенные эмбеддинги с переменной размерностью при выводе.
- [GritLM](https://arxiv.org/abs/2402.09906) (2024) — объединяет генерацию и создание эмбеддингов в одной модели.
- [RAG (Retrieval-Augmented Generation)](https://arxiv.org/abs/2005.11401) — исходный фреймворк генерации с поисковым дополнением, основа современных конвейеров ответов на вопросы.
- [Gemini Embedding](https://arxiv.org/abs/2503.07891) (2025) — плотные эмбеддинги на основе Gemini; лучшие результаты в MMTEB для более чем 250 языков и в межъязыковом поиске (XOR-Retrieve, XTREME-UP).
- [Qwen3-Embedding](https://arxiv.org/abs/2506.05176) (2025) — серия эмбеддингов на основе декодера (0,6–8 млрд параметров) на базе Qwen3; первое место в MTEB Multilingual и MTEB Code, превосходит прежние проприетарные модели.
- [Rank1](https://arxiv.org/abs/2502.18418) (2025) — первая модель повторного ранжирования, обученная с вычислениями во время тестирования посредством дистилляции трасс рассуждений DeepSeek-R1; лучшие результаты в следовании инструкциям и поиске вне обучающего распределения.
- [ReasonEmbed](https://arxiv.org/abs/2510.08252) (2025) — модель эмбеддингов для поиска, требующего рассуждений, с синтезом данных ReMixer и адаптивным обучением Redapter; рекордный nDCG@10 — 38,1 на BRIGHT.
- [ColBERT-Att](https://arxiv.org/abs/2603.25248) (2026) — расширяет поиск с отложенным взаимодействием, интегрируя веса внимания запроса и документа в оценку ColBERT; повышает полноту на MS-MARCO, BEIR и LoTTE.
Бенчмарки эмбеддингов и поиска:

- [MMTEB](https://arxiv.org/abs/2502.13595) (2025) — расширенная сообществом версия MTEB: более 500 задач для более чем 250 языков.

### Речь и текст

[Наверх](#contents)

Краткий список ресурсов, поскольку эта тема соприкасается со смежными областями:

- [Whisper](https://github.com/openai/whisper) — мультиязычное автоматическое распознавание речи (ASR), современное открытое решение по умолчанию.
- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) — единая система перевода речи и текста.
- [Canary](https://huggingface.co/nvidia/canary-1b) (NVIDIA, 2024) — ведущая открытая мультиязычная модель ASR.
- [FunASR](https://github.com/modelscope/FunASR) — промышленный набор инструментов ASR; на GPU работает в 170 раз быстрее реального времени, поддерживает более 50 языков, включает VAD, пунктуацию, диаризацию говорящих и распознавание эмоций. Включает нерекуррентную модель SenseVoice и модель на основе LLM Fun-ASR-Nano.
- [Wav2Vec 2.0](https://arxiv.org/abs/2006.11477) — основополагающее самоконтролируемое предварительное обучение для речи.
- [Coqui TTS](https://github.com/coqui-ai/TTS) и [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) — открытые системы синтеза речи (TTS).

## Наборы данных

[Наверх](#contents)

Каталоги и списки наборов данных:

- [HuggingFace Datasets Hub](https://huggingface.co/datasets) — центральный каталог современных наборов данных NLP с версионированными загрузчиками, поддерживающими потоковую передачу.
- [nlp-datasets](https://github.com/niderhoff/nlp-datasets) — большая коллекция наборов данных NLP.
- [gensim-data](https://github.com/RaRe-Technologies/gensim-data) — репозиторий данных для предварительно обученных моделей NLP и корпусов.

Открытые корпуса масштаба предварительного обучения:

- [The Pile](https://pile.eleuther.ai/) — разнообразный текстовый корпус объёмом 825 ГиБ.
- [RedPajama / RedPajama-V2](https://github.com/togethercomputer/RedPajama-Data) (2023–2024) — воспроизведение данных предварительного обучения LLaMA; версия V2 содержит 30 трлн токенов и метаданные о качестве.
- [Dolma](https://github.com/allenai/dolma) (AI2, 2023–2024) — открытый корпус для предварительного обучения объёмом 3 трлн токенов с документированным конвейером фильтрации.
- [FineWeb / FineWeb-Edu](https://huggingface.co/datasets/HuggingFaceFW/fineweb) (2024) — очищенный веб-корпус объёмом 15 трлн токенов; FineWeb-Edu отбирает данные по образовательной ценности.
- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) — 6,3 трлн токенов на 167 языках.
- [Common Corpus](https://huggingface.co/datasets/PleIAs/common_corpus) (2024) — мультиязычный корпус с открытой лицензией объёмом 2 трлн токенов.

Наборы данных для задач и инструкций:

- [Universal Dependencies](https://universaldependencies.org/) — согласованная между языками разметка синтаксических деревьев для более чем 100 языков.
- [Tülu 3 SFT Mixture](https://huggingface.co/datasets/allenai/tulu-3-sft-mixture) (2024) — открытый набор данных для настройки инструкций, использованный при создании Tülu 3.
- [tiny_qa_benchmark_pp](https://github.com/vincentkoc/tiny_qa_benchmark_pp/) — небольшие мультиязычные наборы данных NLP для ответов на вопросы и библиотека для генерации собственных синтетических копий.

## Многоязычные NLP-фреймворки

[Наверх](#contents)

- [UDPipe](https://github.com/ufal/udpipe) — обучаемый конвейер для токенизации, разметки, лемматизации и синтаксического анализа Universal Treebanks и других файлов CoNLL-U. Написан главным образом на C++ и обеспечивает быструю и надёжную мультиязычную обработку NLP.
- [NLP-Cube](https://github.com/adobe/NLP-Cube) — конвейер обработки естественного языка: разделение предложений, токенизация, лемматизация, разметка частей речи и синтаксический анализ зависимостей. Новая платформа написана на Python с Dynet 2.0; предлагает автономное использование (CLI/привязки Python) и серверный режим (REST API).
- [UralicNLP](https://github.com/mikahama/uralicNLP) — библиотека NLP преимущественно для многих исчезающих уральских языков, например саамских, мордовских, марийских и коми. Поддерживает и языки, которым исчезновение не угрожает, например финский, а также неуральские языки — шведский и арабский. UralicNLP выполняет морфологический анализ, генерацию словоформ, лемматизацию и снятие неоднозначности.

## Языковые модели для NLP

[Наверх](#contents)

Предварительно обученные языковые модели и исследования, связанные с ними, в контексте задач NLP и лингвистических явлений. Универсальные инструменты для LLM, агентные системы и наборы для создания приложений RAG перечислены в разделе [См. также](#see-also).

### Предварительное обучение и адаптация

Энкодеры (по-прежнему основное средство для классических задач NLP):

- [BERT](https://arxiv.org/abs/1810.04805) — двунаправленное предварительное обучение Transformer; с 2018 года служит основой большинства работ по NLP на основе энкодеров. [Читать онлайн](https://webeditions.page/works/bert-pre-training/) с навигацией по разделам и приложенным оригиналом ACL.
- [RoBERTa](https://arxiv.org/abs/1907.11692) — оптимизированное для устойчивости предварительное обучение BERT; распространённая базовая модель-энкодер.
- [DeBERTa / DeBERTa-v3](https://arxiv.org/abs/2111.09543) — раздельное внимание; эффективна для классификации, NER и NLI.
- [ELECTRA](https://arxiv.org/abs/2003.10555) — экономное по числу примеров предварительное обучение с обнаружением заменённых токенов.
- [ModernBERT](https://arxiv.org/abs/2412.13663) (2024) — модернизированный энкодер с вращательными эмбеддингами, FlashAttention и контекстом 8K; современный основной энкодер для классификации, NER и поиска.
- [NeoBERT](https://arxiv.org/abs/2502.19587) (2025) — энкодер с 250 млн параметров, включающий современные архитектурные улучшения (RoPE, контекст 4K, оптимизированное соотношение глубины и ширины); достигает передовых результатов в MTEB и превосходит ModernBERT и RoBERTa-large при одинаковом дообучении.

Модели encoder-decoder и seq2seq:

- [T5](https://arxiv.org/abs/1910.10683) и [FLAN-T5](https://arxiv.org/abs/2210.11416) — представление задач NLP в формате «текст на входе — текст на выходе»; эффективные базовые модели encoder-decoder, настроенные на выполнение инструкций.
- [BART](https://arxiv.org/abs/1910.13461) — предварительное обучение seq2seq с устранением шума; широко используется для суммаризации и генерации.

Открытые LLM типа decoder-only (основа для задач NLP):

- [Llama 3 / 3.1 / 3.3](https://arxiv.org/abs/2407.21783) (Meta, 2024–2025) — широко используемое семейство моделей с открытыми весами; стандартная основа для дообучения под задачи NLP.
- [Qwen 2.5 / Qwen 3](https://qwenlm.github.io/) (Alibaba, 2024–2025) — широкая мультиязычная поддержка, особенно китайского языка; часто занимает первые места среди открытых моделей в мультиязычных бенчмарках.
- [DeepSeek-V3](https://arxiv.org/abs/2412.19437) (2024) — эффективное предварительное обучение MoE; конкурентоспособная открытая базовая модель.
- [OLMo 2](https://arxiv.org/abs/2501.00656) (AI2, 2025) — полностью открытая модель: веса, обучающие данные и код; эталон воспроизводимости.
- [Gemma 2 / Gemma 3](https://arxiv.org/abs/2408.00118) (Google, 2024–2025) — открытые модели малого и среднего размера с высокой эффективностью в задачах NLP.
- [Mistral / Mixtral](https://arxiv.org/abs/2401.04088) — эффективные открытые плотные модели и модели MoE с разреженной активацией.
- [What Language Model Architecture and Pretraining Objective Work Best for Zero-Shot Generalization?](https://arxiv.org/abs/2204.05832) — сравнение encoder, decoder и encoder-decoder для переноса обучения в NLP.

### Многоязычные и межъязыковые модели

- [XLM-R](https://arxiv.org/abs/1911.02116) — межъязыковая маскированная языковая модель, обученная на CommonCrawl и охватывающая 100 языков.
- [mT5](https://arxiv.org/abs/2010.11934) — мультиязычная T5 для 101 языка.
- [BLOOM](https://arxiv.org/abs/2211.05100) — открытая мультиязычная языковая модель с 176 млрд параметров для 46 естественных языков.
- [Aya 23 / Aya Expanse](https://arxiv.org/abs/2412.04261) (Cohere For AI, 2024) — масштабные мультиязычные модели, настроенные на выполнение инструкций и поддерживающие от 23 до 101 языка.
- [Glot500](https://arxiv.org/abs/2305.12182) — энкодер для более чем 500 языков с акцентом на языки с ограниченными ресурсами.
- [NLLB-200](https://arxiv.org/abs/2207.04672) — No Language Left Behind: машинный перевод для 200 языков.
- [MADLAD-400](https://arxiv.org/abs/2309.04662) — модель машинного перевода для более чем 400 языков и мультиязычный корпус объёмом 3 трлн токенов.
- [SeamlessM4T / Seamless](https://arxiv.org/abs/2312.05187) (Meta, 2023–2024) — мультиязычный мультимодальный перевод речи и текста более чем на 100 языков.
- [SEA-LION / SeaLLM](https://arxiv.org/abs/2312.00738) (2024–2025) — языковые модели, ориентированные на языки Юго-Восточной Азии.
- [Babel](https://arxiv.org/abs/2503.00865) (2025) — открытые мультиязычные LLM (9 и 83 млрд параметров) для 25 языков с наибольшим числом носителей (около 90% говорящих в мире); превосходят сопоставимые по размеру открытые мультиязычные модели на XCOPA, XNLI, MGSM и FLORES-200.
- [Lugha-Llama](https://arxiv.org/abs/2504.06536) (Princeton/Mila, 2025) — Llama-3.1-8B, адаптированная для африканских языков с ограниченными ресурсами на основе отобранного корпуса WURA; лучшие результаты среди открытых моделей на IrokoBench и AfriQA.
- [AfriqueLLM](https://arxiv.org/abs/2601.06395) (McGill, 2026) — набор открытых LLM (4–14 млрд параметров), дополнительно обученных на 26 млрд токенов для 20 африканских языков, с комплексным эмпирическим исследованием смешивания данных.
- [TranslateGemma](https://arxiv.org/abs/2601.09012) (Google, 2026) — открытые модели перевода на базе Gemma 3, охватывающие 55 языковых пар и обученные с помощью SFT и RL с моделями вознаграждения за качество.
- [MiLMMT-46](https://arxiv.org/abs/2602.11961) (Xiaomi, 2026) — открытая мультиязычная система машинного перевода для 46 языков, сопоставимая с коммерческими системами Google Translate и Gemini 3 Pro.

### Оценка и бенчмарки

Понимание естественного языка (NLU) и межъязыковая оценка:

- [GLUE](https://gluebenchmark.com/) и [SuperGLUE](https://super.gluebenchmark.com/) — бенчмарки NLU для английского языка.
- [XTREME](https://sites.research.google/xtreme) и [XGLUE](https://microsoft.github.io/XGLUE/) — межъязыковое понимание естественного языка.
- [XNLI](https://github.com/facebookresearch/XNLI) — межъязыковой логический вывод по естественному языку для 15 языков.
- [FLORES-200](https://github.com/facebookresearch/flores) — оценка машинного перевода для 200 языков.
- [MTEB](https://github.com/embeddings-benchmark/mteb) — Massive Text Embedding Benchmark, стандарт оценки энкодеров предложений и документов.
- [BEIR](https://github.com/beir-cellar/beir) — разнородный бенчмарк информационного поиска для моделей поиска.

Современная оценка языковых моделей (2023–2026):

- [HELM](https://crfm.stanford.edu/helm/) — комплексная оценка задач NLP, точности и других характеристик.
- [BIG-bench](https://github.com/google/BIG-bench) — более 200 задач для исследования возможностей языковых моделей.
- [MMLU](https://github.com/hendrycks/test) — многофункциональная оценка знаний по 57 предметным областям.
- [MMLU-Pro](https://arxiv.org/abs/2406.01574) (2024) — более сложный и точный преемник MMLU.
- [GPQA](https://arxiv.org/abs/2311.12022) — вопросы и ответы на уровне аспирантуры, оценка рассуждений, «неподвластная Google».
- [REFUTE](https://huggingface.co/datasets/BGPT-OFFICIAL/refute) (2026) — бенчмарк научного рассуждения: критика на основе доказательств, выявление чрезмерных утверждений, отказ при нехватке свидетельств и калибровка.
- [IFEval](https://arxiv.org/abs/2311.07911) — проверяемая оценка следования инструкциям.
- [Chatbot Arena (LMSYS)](https://lmarena.ai/) — рейтинг ELO чат-моделей по предпочтениям людей.
- [LiveBench](https://livebench.ai/) (2024) — устойчивый к загрязнению бенчмарк с ежемесячным обновлением.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) — единый фреймворк для оценки языковых моделей на бенчмарках.
- [MMLU-ProX](https://arxiv.org/abs/2503.10497) (2025) — мультиязычное расширение MMLU-Pro на 29 типологически разнообразных языков; выявляет разрыв качества до 24,3% между языками с большим и ограниченным объёмом ресурсов.
- [MultiChallenge](https://arxiv.org/abs/2501.17399) (2025) — бенчмарк многоходовых диалогов, выявляющий одновременные сбои в следовании инструкциям и рассуждениях в контексте; все проверенные передовые модели набирают менее 50%.
- [FRAMES](https://arxiv.org/abs/2409.12941) (2025) — единая оценка RAG: 824 многошаговых вопроса, требующих совместной проверки фактичности, точности поиска и рассуждений по нескольким документам.

Оценка длинного контекста:

- [Needle in a Haystack](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) — проверка поиска информации в длинных контекстах.
- [RULER](https://arxiv.org/abs/2404.06654) (2024) — синтетические задачи с длинным контекстом, выходящие за рамки простого поиска.
- [LongBench](https://github.com/THUDM/LongBench) — двуязычный бенчмарк длинного контекста для задач NLP.
- [LongBench v2](https://arxiv.org/abs/2412.15204) (2025) — 503 подготовленных экспертами вопроса с выбором ответа по контекстам от 8 тысяч до 2 миллионов слов, требующих глубоких многошаговых рассуждений; люди под ограничением по времени набирают 53,7%.
- [U-NIAH](https://arxiv.org/abs/2503.00353) (2025) — расширяет Needle-in-a-Haystack конфигурациями с несколькими и вложенными «иголками»; показывает, что RAG смягчает проблему потери информации в середине контекста у небольших LLM, но ухудшает качество рассуждающих моделей.

### Рассуждение и вычисления во время тестирования

Ключевое направление 2024–2026 годов: модели, формирующие явные трассы рассуждений и выигрывающие от дополнительных вычислений при выводе.

- [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) — основополагающий результат: промежуточные шаги рассуждений улучшают качество.
- [Self-Consistency](https://arxiv.org/abs/2203.11171) — голосование большинством по сгенерированным цепочкам рассуждений CoT.
- [Tree of Thoughts](https://arxiv.org/abs/2305.10601) — поиск по деревьям рассуждений.
- [Self-Refine](https://arxiv.org/abs/2303.17651) и [Reflexion](https://arxiv.org/abs/2303.11366) — самокоррекция на этапе вывода.
- [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) — цепочка рассуждений для задач логического вывода в NLP.
- [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) — модели вознаграждения с контролем процесса для рассуждений.
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) (2025) — открытая модель рассуждений, обученная исключительно с помощью RL; воспроизводит поведение моделей типа o1 в открытой среде.
- [OpenAI o1 / o3](https://openai.com/index/learning-to-reason-with-llms/) (2024–2025) — системы рассуждений с дополнительными вычислениями во время тестирования.
- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) (2024) — систематическое исследование компромиссов вычислений на этапе вывода.
- [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) (2025) — компактный открытый рецепт рассуждений с принудительным соблюдением бюджета вычислений.
- [Kimi k1.5](https://arxiv.org/abs/2501.12599) (2025) — RL с оптимизацией политики и длинным контекстом (без MCTS и PRM), достигающий уровня o1; предлагает дистилляцию длинных цепочек рассуждений в модели с короткими цепочками.
- [rStar-Math](https://arxiv.org/abs/2501.04519) (2025) — небольшая модель политики в паре с моделью предпочтений процесса, обученной на развёртках MCTS; позволяет небольшим языковым моделям развивать рассуждения без дистилляции из более крупных моделей.
- [DAPO](https://arxiv.org/abs/2503.14476) (2025) — открытая система RL на основе GRPO с четырьмя ключевыми улучшениями (разделённое отсечение, динамическая выборка, потери на уровне токенов, бонус энтропии); воспроизводит и превосходит уровень рассуждений DeepSeek-R1-Zero.
- [VAPO](https://arxiv.org/abs/2504.05118) (2025) — RL на основе ценностной модели с адаптивным по длине GAE и отсечением на уровне токенов; при стабильном обучении превосходит методы GRPO без ценностной функции на AIME 2024.
- [ThinkPRM](https://arxiv.org/abs/2504.16828) (2025) — генеративные модели вознаграждения за процесс, проверяющие каждый шаг цепочки рассуждений; сопоставимы с дискриминативными PRM, используя лишь 1% обучающих меток.
- [OpenThoughts](https://arxiv.org/abs/2506.04178) (2025) — более 1000 контролируемых экспериментов с методиками подготовки данных для открытых моделей рассуждений; лучшие результаты на AIME 2025, сопоставимые с закрытыми базовыми моделями дистилляции.

### Длинный контекст и альтернативные архитектуры

- [Mamba](https://arxiv.org/abs/2312.00752) и [Mamba-2](https://arxiv.org/abs/2405.21060) — селективные модели пространства состояний, альтернатива вниманию с линейной сложностью для длинного контекста.
- [RWKV](https://arxiv.org/abs/2305.13048) — гибрид RNN и Transformer, масштабируемый до большого числа параметров.
- [Jamba](https://arxiv.org/abs/2403.19887) (2024) — гибридная архитектура Mamba-Transformer-MoE.
- [RoPE](https://arxiv.org/abs/2104.09864) и [YaRN](https://arxiv.org/abs/2309.00071) — вращательные позиционные эмбеддинги и расширение длины контекста.
- [Position Interpolation](https://arxiv.org/abs/2306.15595) — расширение контекстных окон с минимальным дообучением.
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) — закономерности ухудшения результатов задач NLP при длинном контексте.
- [RAG vs Long-Context LLMs](https://arxiv.org/abs/2407.16833) (2024) — компромиссы при ответах на вопросы по длинным входным данным.
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663) (2025) — нейросетевой модуль долговременной памяти, обучающийся запоминать предыдущий контекст во время тестирования; масштабируется более чем до 2 млн токенов и превосходит Transformer и современные линейно-рекуррентные модели в языковом моделировании и рассуждениях.
- [MiniMax-01](https://arxiv.org/abs/2501.08313) (2025) — гибридная модель с 456 млрд параметров, объединяющая молниеносное (линейное) внимание с разреженным softmax-вниманием; достигает уровня GPT-4o в задачах NLP при выводе с контекстом до 4 млн токенов.
- [Native Sparse Attention (NSA)](https://arxiv.org/abs/2502.11089) (2025) — обучаемое разреженное внимание, сочетающее сжатие крупных фрагментов с точечным отбором; значительно ускоряет обработку контекста 64K без ухудшения результатов бенчмарков NLP.
- [LongRoPE2](https://arxiv.org/abs/2502.20082) (2025) — выявляет недостаточное обучение высокочастотных измерений RoPE и применяет масштабирование с помощью эволюционного поиска; расширяет LLaMA3-8B до 128K, используя в 80 раз меньше обучающих токенов, чем методика Meta.
- [Characterizing SSM and Hybrid LM Long-Context Performance](https://arxiv.org/abs/2507.12442) (2025) — первый комплексный анализ памяти и скорости Transformer, SSM и гибридных моделей с контекстом до 220K токенов; SSM работают до четырёх раз быстрее, а гибриды обеспечивают баланс полноты и эффективности.

### Фактичность, галлюцинации и калибровка

- [Survey of Hallucination in Natural Language Generation](https://arxiv.org/abs/2202.03629) — таксономия галлюцинаций и стратегии их снижения.
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) — бенчмарк правдивости ответов на вопросы.
- [FActScore](https://github.com/shmsw25/FActScore) — детальная оценка фактической точности длинных текстов.
- [LongFact / SAFE](https://arxiv.org/abs/2403.18802) (2024) — бенчмарк фактичности длинных текстов и оценщик с поисковым дополнением.
- [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt) — обнаружение галлюцинаций на основе выборки.
- [RAGAS](https://github.com/explodinggradients/ragas) — оценка конвейеров RAG и ответов на вопросы без эталонных ответов.
- [Lookback Lens](https://arxiv.org/abs/2407.07071) (2024) — обнаружение галлюцинаций при генерации с длинным контекстом на основе шаблонов внимания.
- [Calibration of LLMs on Multiple Choice](https://arxiv.org/abs/2402.13887) (2024) — анализ калибровки с учётом влияния формата.
- [HalluLens](https://arxiv.org/abs/2504.17550) (2025) — бенчмарк галлюцинаций с таксономией внешних и внутренних ошибок и динамической генерацией тестовых данных для защиты от утечки.
- [Atomic Calibration](https://arxiv.org/abs/2410.13246) (2025) — анализ калибровки отдельных утверждений в длинных текстах; калибровка моделей для развёрнутых ответов значительно хуже, чем для отдельных утверждений.
- [FRANQ](https://arxiv.org/abs/2505.21072) (2025) — оценка неопределённости для проверки фактов в RAG с учётом достоверности; формально различает достоверность передачи источника и фактическую точность.
- [MUCH](https://arxiv.org/abs/2511.17081) (2025) — мультиязычный бенчмарк галлюцинаций в утверждениях на английском, французском, испанском и немецком языках; опубликованы логиты на уровне токенов для обоснованной оценки количественной неопределённости (UQ).
- [HalluHard](https://arxiv.org/abs/2602.01031) (2026) — сложный многоходовый бенчмарк галлюцинаций для ответов с обязательными цитатами; около 30% галлюцинаций сохраняются даже при поиске в интернете.
- [CURE: Think Through Uncertainty](https://arxiv.org/abs/2604.12046) (2026) — обучает модели рассуждать о неопределённости каждого утверждения перед генерацией; значительно повышает фактическую точность биографий и AUROC на FactBench.

### Зондирование и интерпретируемость

- [A Primer in BERTology](https://arxiv.org/abs/2002.12327) — что BERT усваивает о языке.
- [Probing Classifiers (Belinkov)](https://arxiv.org/abs/2102.12452) — методология, ограничения и альтернативы.
- [Locating and Editing Factual Associations in GPT (ROME)](https://rome.baulab.info/) — причинно-следственное отслеживание воспроизведения фактов.
- [The Pyramid of NLP Probes](https://arxiv.org/abs/2104.07885) — структурное зондирование лингвистических знаний.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/) — основа представления о репрезентациях Transformer как о разреженных признаках.
- [Towards Monosemanticity / Scaling Monosemanticity](https://transformer-circuits.pub/2024/scaling-monosemanticity/) (Anthropic, 2024) — разреженные автоэнкодеры извлекают интерпретируемые признаки из промышленных языковых моделей.
- [Sparse Autoencoders Find Highly Interpretable Features](https://arxiv.org/abs/2309.08600) — методология SAE для интерпретации языковых моделей.
- [Neuronpedia](https://www.neuronpedia.org/) — открытая платформа для изучения признаков SAE в разных моделях.
- [Influence Functions Scale to LLMs](https://arxiv.org/abs/2308.03296) (2023) — определение примеров обучения, влияющих на поведение модели.
- [Circuit Tracing: Revealing Computational Graphs in Language Models](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) (Anthropic, 2025) — вводит межслойные транскодеры и графы атрибуции для создания интерпретируемой замещающей модели; позволяет отслеживать на уровне промпта причинные связи между признаками.
- [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) (Anthropic, 2025) — применяет графы атрибуции к Claude 3.5 Haiku для анализа многошаговых рассуждений, планирования рифм и примеров обхода ограничений.
- [Transcoders Beat Sparse Autoencoders for Interpretability](https://arxiv.org/abs/2501.18823) (2025) — показывает, что транскодеры (восстанавливающие выходы слоя по входам) обеспечивают более интерпретируемые признаки, чем SAE; вводит транскодеры с пропусками.
- [Survey on Sparse Autoencoders for LLM Interpretability](https://arxiv.org/abs/2503.05613) (EMNLP 2025) — обзор архитектур SAE, стратегий обучения, объяснения признаков и оценки.
- [Finding Highly Interpretable Prompt-Specific Circuits](https://arxiv.org/abs/2602.13483) (2026) — выявляет схемы для отдельных промптов, а не задач, и показывает группировку механизмов по семействам промптов.

### Эффективные малые языковые модели

Дистилляция и компактные модели:

- [DistilBERT](https://arxiv.org/abs/1910.01108) и [MiniLM](https://arxiv.org/abs/2002.10957) — дистиллированные энкодеры для промышленного NLP.
- [Phi-3 / Phi-4](https://arxiv.org/abs/2412.08905) (Microsoft, 2024) — небольшие модели, обученные на отобранных данных и конкурирующие с намного более крупными моделями в бенчмарках NLP.
- [SmolLM2](https://arxiv.org/abs/2502.02737) (HuggingFace, 2025) — полностью открытое семейство компактных языковых моделей с воспроизводимыми обучающими данными.
- [SmolLM3](https://huggingface.co/blog/smollm3) (HuggingFace, 2025) — полностью открытый декодер с 3 млрд параметров, предварительно обученный на 11,2 трлн токенов с NoPE и YaRN для контекста 128K; конкурирует с моделями класса 4 млрд параметров.
- [Gemma 3 Technical Report](https://arxiv.org/abs/2503.19786) (Google, 2025) — открытые модели с 1–27 млрд параметров и высоким отношением локального внимания к глобальному, позволяющим использовать KV-кэш для контекста 128K.
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) (Alibaba, 2025) — плотные модели и модели MoE с 0,6–235 млрд параметров и едиными режимами рассуждения и обычного ответа; модель MoE 30B-A3B сравнима с более крупными плотными моделями, активируя лишь 3 млрд параметров.
- [Apple Intelligence Foundation Language Models](https://arxiv.org/abs/2507.13575) (Apple, 2025) — модель с 3 млрд параметров для работы на устройстве; совместное использование KV-кэша и 2-битное QAT сокращают объём памяти кэша на 37,5% без потери точности.
- [Sentence-Transformers](https://www.sbert.net/) — эмбеддинги предложений и абзацев с помощью сиамской BERT.
- [SetFit](https://github.com/huggingface/setfit) — классификация текста в режиме few-shot без промптов.
- [FastFit](https://github.com/IBM/fastfit) — быстрая классификация few-shot для задач со множеством классов.
- [GTE](https://huggingface.co/thenlper/gte-base), [BGE](https://github.com/FlagOpen/FlagEmbedding) и [Stella](https://huggingface.co/dunzhang/stella_en_1.5B_v5) — компактные модели текстовых эмбеддингов, занимающие высокие места в MTEB.

Квантование и обслуживание моделей (важно при масштабном развёртывании NLP-моделей):

- [GPTQ](https://arxiv.org/abs/2210.17323) — квантование Transformer после обучения.
- [AWQ](https://arxiv.org/abs/2306.00978) — квантование весов с учётом активаций.
- [KVTuner](https://arxiv.org/abs/2502.04420) (ICML 2025) — послойное квантование KV-кэша с разной точностью и учётом чувствительности; повышает пропускную способность до 21% по сравнению с единообразным KV8.
- [GGUF / llama.cpp](https://github.com/ggerganov/llama.cpp) — переносимый вывод квантованных моделей.
- [vLLM](https://github.com/vllm-project/vllm) — высокопроизводительное обслуживание языковых моделей на основе PagedAttention.
- [SGLang](https://github.com/sgl-project/sglang) — структурированная генерация и эффективное обслуживание моделей.
- [Text Generation Inference (TGI)](https://github.com/huggingface/text-generation-inference) — промышленное обслуживание языковых моделей от Hugging Face.

Параметрически эффективное дообучение:

- [LoRA](https://arxiv.org/abs/2106.09685) и [QLoRA](https://arxiv.org/abs/2305.14314) — низкоранговые адаптеры и квантованное дообучение; стандарт адаптации языковых моделей для задач NLP на умеренных аппаратных ресурсах.
- [DoRA](https://arxiv.org/abs/2402.09353) (2024) — низкоранговая адаптация с разложением весов.
- [PEFT](https://github.com/huggingface/peft) — библиотека Hugging Face, объединяющая LoRA, настройку префиксов, IA3 и другие методы.

### Настройка инструкций и оптимизация предпочтений

- [FLAN](https://arxiv.org/abs/2109.01652) — дообученные языковые модели в качестве систем zero-shot-обучения.
- [InstructGPT](https://arxiv.org/abs/2203.02155) — обучение языковых моделей следованию инструкциям с помощью отзывов людей.
- [Self-Instruct](https://github.com/yizhongw/self-instruct) — автоматическое создание наборов инструкций с помощью языковых моделей.
- [Super-NaturalInstructions](https://github.com/allenai/natural-instructions) — более 1600 задач NLP с инструкциями.
- [Constitutional AI](https://arxiv.org/abs/2212.08073) — обучение языковых моделей на обратной связи, сгенерированной ИИ, в соответствии с письменной конституцией.
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) — более простая альтернатива RLHF, получившая широкое распространение.
- [Tülu 3](https://arxiv.org/abs/2411.15124) (AI2, 2024) — полностью открытая методика постобучения с передовыми результатами среди открытых моделей.
- [LIMA](https://arxiv.org/abs/2305.11206) — «для выравнивания достаточно малого количества данных»: небольшой высококачественный набор SFT даёт значительный эффект.
- [TRL](https://github.com/huggingface/trl) — эталонная библиотека для SFT, DPO, GRPO и RLHF.
- [Magpie](https://arxiv.org/abs/2406.08464) (2024–2025) — синтезирует высококачественные пары «инструкция — ответ», подавая согласованным языковым моделям пустой промпт; SFT на отфильтрованном подмножестве достигает качества официальной Llama-3-Instruct.

### Предвзятость, справедливость и безопасность в NLP

- [StereoSet](https://github.com/moinnadeem/StereoSet) — измерение стереотипной предвзятости предварительно обученных языковых моделей.
- [CrowS-Pairs](https://github.com/nyu-mll/crows-pairs) — измерение социальной предвзятости в маскированных языковых моделях.
- [WinoBias](https://github.com/uclanlp/corefBias) — гендерная предвзятость при разрешении кореференции.
- [HolisticBias](https://github.com/facebookresearch/ResponsibleNLP) — измерение предвзятости по многим демографическим признакам.
- [RealToxicityPrompts](https://github.com/allenai/real-toxicity-prompts) — токсичность в генерации языковых моделей.
- [Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) — подстройка моделей под убеждения пользователей.
- [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) (Anthropic, 2024) — стратегическое соблюдение правил моделями во время обучения.
- [WildGuard](https://arxiv.org/abs/2406.18495) (2024) — открытая модель и бенчмарк модерации безопасности.
- [Emergent Misalignment](https://arxiv.org/abs/2502.17424) (2025) — дообучение на узкой задаче (небезопасный код) неожиданно приводит к широким сбоям согласования в несвязанных областях.
- [SafeDialBench](https://arxiv.org/abs/2502.11090) (2025) — мультиязычный бенчмарк безопасности (китайский и английский) с более чем 4000 многоходовых диалогов в 22 сценариях и семью стратегиями обхода ограничений.
- [TeleAI-Safety](https://arxiv.org/abs/2512.05485) (2025) — модульный фреймворк оценки обхода ограничений, объединяющий 19 атак, 29 защитных мер и 19 методов оценки для 14 моделей и 12 категорий риска.
- [IndicSafe](https://arxiv.org/abs/2603.17915) (2026) — мультиязычный бенчмарк безопасности для 12 индийских языков; выявляет согласованность между языками на уровне 12,8% и чрезмерные отказы для письменностей языков с ограниченными ресурсами.
- [VLAF: Value-Conflict Alignment Faking](https://arxiv.org/abs/2604.20995) (2026) — модели с 7 млрд параметров имитируют согласованность в 37% случаев, если политика противоречит усвоенным ценностям; смягчение с помощью векторов управления снижает этот показатель на 94%.

## NLP по языкам

[Наверх](#contents)

Ресурсы сгруппированы по естественным языкам. Нажмите на раздел, чтобы развернуть его.

<details>
<summary>

### NLP для арабского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [CAMeL Tools](https://github.com/CAMeL-Lab/camel_tools) — набор инструментов Python для NLP на арабском языке: определение диалекта, морфология и NER.
- [goarabic](https://github.com/01walid/goarabic) — пакет Go для обработки арабского текста.
- [jsastem](https://github.com/ejtaal/jsastem) — стеммер арабского языка на JavaScript.
- [PyArabic](https://pypi.org/project/PyArabic/) — библиотека Python для арабского языка.
- [RFTokenizer](https://github.com/amir-zeldes/RFTokenizer) — обучаемый сегментатор арабского, иврита и коптского языка.
- [Farasa](https://farasa.qcri.org/) — сегментация, разметка частей речи и NER для арабского языка от QCRI.

### Модели и эмбеддинги

- [AraBERT](https://github.com/aub-mind/arabert) — семейство BERT-моделей для арабского языка.
- [CAMeLBERT](https://github.com/CAMeL-Lab/CAMeLBERT) — модели BERT для современного стандартного, диалектного и классического арабского языка.
- [AraELECTRA](https://aclanthology.org/2021.wanlp-1.20/) — эффективное предварительное обучение для арабского языка (выпущена вместе с [AraBERT](https://github.com/aub-mind/arabert)).
- [Jais](https://huggingface.co/inceptionai/jais-13b) (2023–2024) — открытое семейство двуязычных арабско-английских языковых моделей.
- [ALLaM](https://arxiv.org/abs/2407.15390) (SDAIA, 2024) — базовые модели, в первую очередь ориентированные на арабский язык.

### Наборы данных

- [Multidomain Datasets](https://github.com/hadyelsahar/large-arabic-sentiment-analysis-resouces) — крупнейший доступный набор ресурсов для многоаспектного анализа тональности арабского языка.
- [LABR](https://github.com/mohamedadaly/labr) — большой набор данных с рецензиями на арабские книги.
- [Arabic Stopwords](https://github.com/mohataher/arabic-stop-words) — сводный список стоп-слов арабского языка.
- [ArabicMMLU](https://huggingface.co/datasets/MBZUAI/ArabicMMLU) (2024) — бенчмарк MMLU для арабского языка.

</details>

<details>
<summary>

### NLP для китайского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [jieba](https://github.com/fxsjy/jieba#jieba-1) — пакет Python для сегментации китайских слов.
- [SnowNLP](https://github.com/isnowfy/snownlp) — пакет Python для NLP на китайском языке.
- [FudanNLP](https://github.com/FudanNLP/fnlp) — библиотека Java для обработки китайского текста.
- [HanLP](https://github.com/hankcs/HanLP) — мультиязычная библиотека NLP с широкой поддержкой китайского языка.
- [LTP](https://github.com/HIT-SCIR/ltp) — HIT Language Technology Platform: сегментация, разметка частей речи, NER и синтаксический анализ.

### Модели и эмбеддинги

- [Chinese-BERT-wwm](https://github.com/ymcui/Chinese-BERT-wwm) — BERT для китайского языка с маскированием целых слов.
- [MacBERT](https://github.com/ymcui/MacBERT) — улучшенная модель BERT для китайского языка с предварительным обучением MLM в режиме исправления.
- [Qwen 2.5 / Qwen 3](https://github.com/QwenLM/Qwen3) — открытое семейство языковых моделей Alibaba с сильной поддержкой китайского языка.
- [ChatGLM3 / GLM-4](https://github.com/THUDM/ChatGLM3) — двуязычные китайско-английские языковые модели университета Цинхуа.
- [Baichuan 2](https://github.com/baichuan-inc/Baichuan2) — открытая языковая модель для китайского языка.
- [Yi](https://github.com/01-ai/Yi) — открытые двуязычные языковые модели 01.AI.
- [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) — эффективная открытая модель MoE с хорошей поддержкой китайского языка.

### Антология

- [funNLP](https://github.com/fighting41love/funNLP) — большая коллекция инструментов и ресурсов NLP для китайского языка.

</details>

<details>
<summary>

### NLP для датского языка

</summary>

[Наверх](#contents)

- [Named Entity Recognition for Danish](https://github.com/ITUnlp/daner)
- [DaNLP](https://github.com/alexandrainst/danlp) — ресурсы NLP для датского языка.
- [Awesome Danish](https://github.com/fnielsen/awesome-danish) — подборка ресурсов по технологиям датского языка.

</details>

<details>
<summary>

### NLP для нидерландского языка

</summary>

[Наверх](#contents)

- [python-frog](https://github.com/proycon/python-frog) — привязка Python к Frog, набору инструментов NLP для нидерландского языка (разметка частей речи, лемматизация, синтаксический анализ зависимостей, NER).
- [SimpleNLG_NL](https://github.com/rfdj/SimpleNLG-NL) — генератор поверхностных форм на нидерландском языке для генерации естественного языка, основанный на реализации SimpleNLG.
- [Alpino](https://github.com/rug-compling/alpino) — анализатор зависимостей для нидерландского языка (также выполняет разметку частей речи и лемматизацию).
- [Kaldi NL](https://github.com/opensource-spraakherkenning-nl/Kaldi_NL) — модели распознавания речи на нидерландском языке на основе [Kaldi](http://kaldi-asr.org/).
- [spaCy Dutch model](https://spacy.io/models/nl) — промышленная обработка NLP с конвейером для нидерландского языка.

</details>

<details>
<summary>

### NLP для немецкого языка

</summary>

[Наверх](#contents)

- [German-NLP](https://github.com/adbar/German-NLP) — подборка общедоступных, открытых и готовых к использованию ресурсов и инструментов, ориентированных на немецкий язык.

</details>

<details>
<summary>

### NLP для венгерского языка

</summary>

[Наверх](#contents)

- [awesome-hungarian-nlp](https://github.com/oroszgy/awesome-hungarian-nlp) — подборка бесплатных ресурсов NLP для венгерского языка.

</details>

<details>
<summary>

### NLP для индийских языков

</summary>

[Наверх](#contents)

### Данные, корпусы и синтаксические деревья

- [Hindi Dependency Treebank](https://ltrc.iiit.ac.in/treebank_H2014/) — многослойный банк синтаксических деревьев с несколькими системами представления для хинди и урду.
- [Universal Dependencies Treebank in Hindi](https://universaldependencies.org/treebanks/hi_hdtb/index.html)
  - [Parallel Universal Dependencies Treebank in Hindi](http://universaldependencies.org/treebanks/hi_pud/index.html) — небольшая часть упомянутого выше банка.
- [ISI FIRE Stopwords List (Hindi and Bangla)](https://www.isical.ac.in/~fire/data/)
- [Peter Graham's Stopwords List](https://github.com/6/stopwords-json)
- [NLTK Corpus](https://www.nltk.org/book/ch02.html) — 60 тыс. слов с разметкой частей речи на бенгальском, хинди, маратхи и телугу.
- [Hindi Movie Reviews Dataset](https://github.com/goru001/nlp-for-hindi) — около 1 тыс. примеров, 3 класса тональности.
- [BBC News Hindi Dataset](https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1) — 4,3 тыс. примеров, 14 классов.
- [IIT Patna Hindi ABSA Dataset](https://github.com/pnisarg/ABSA) — 5,4 тыс. примеров, 12 областей, 4 тыс. аспектных терминов, полярность аспектов и предложений в 4 классах.
- [Bangla ABSA](https://github.com/AtikRahman/Bangla_Datasets_ABSA) — 5,5 тыс. примеров, 2 области, 10 аспектных терминов.
- [IIT Patna Movie Review Sentiment Dataset](https://www.iitp.ac.in/~ai-nlp-ml/resources.html) — 2 тыс. примеров, 3 метки тональности.

#### Доступ к корпусам/наборам данных с авторизацией можно запросить по электронной почте

- [SAIL 2015](http://amitavadas.com/SAIL/) — размеченные примеры тональности из Twitter и Facebook на хинди, бенгальском, тамильском и телугу.
- [IIT Bombay CFILT Resources](https://www.cfilt.iitb.ac.in/) — Sentiwordnet, параллельные размеченные корпуса, корпуса с разметкой значений слов и корпус маратхи с разметкой полярности.
- [TDIL-IC собирает множество полезных ресурсов и предоставляет доступ к закрытым наборам данных](https://tdil-dc.in/index.php?option=com_catalogue&task=viewTools&id=83&lang=en)

### Языковые модели и векторные представления слов

- [Hindi2Vec](https://nirantk.com/hindi2vec/) и [nlp-for-hindi](https://github.com/goru001/nlp-for-hindi) — языковая модель в стиле ULMFiT.
- [IIT Patna Bilingual Word Embeddings Hi-En](https://www.iitp.ac.in/~ai-nlp-ml/resources.html)
- [Fasttext word embeddings in a whole bunch of languages, trained on Common Crawl](https://fasttext.cc/docs/en/crawl-vectors.html) — векторные представления слов для множества языков, обученные на Common Crawl.
- [Hindi and Bengali Word2Vec](https://github.com/Kyubyong/wordvectors)
- [Hindi and Urdu Elmo Model](https://github.com/HIT-SCIR/ELMoForManyLangs)
- [Sanskrit Albert](https://huggingface.co/surajp/albert-base-sanskrit) — обучена на Wikipedia на санскрите и корпусе OSCAR.

### Библиотеки и инструменты

- [Multi-Task Deep Morphological Analyzer](https://github.com/Saurav0074/mt-dma) — глубокий морфологический анализатор для хинди и урду.
- [Indic NLP Library](https://github.com/anoopkunchukuttan/indic_nlp_library) — токенизация, транслитерация и инструменты машинного перевода для 18 индийских языков.
- [SivaReddy's Dependency Parser (Python3 port)](https://github.com/CalmDownKarm/sivareddydependencyparser) — синтаксический анализ зависимостей и разметка частей речи для каннада, хинди и телугу.
- [iNLTK](https://github.com/goru001/inltk) — набор инструментов NLP для индийских языков на PyTorch/Fastai.
- [AI4Bharat IndicNLP Suite](https://ai4bharat.iitm.ac.in/) — инструменты, наборы данных и модели для 22 индийских языков.

### Модели и эмбеддинги

- [IndicBERT v2](https://github.com/AI4Bharat/IndicBERT) (2022–2024) — мультиязычная BERT для 23 индийских языков.
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) (2023–2024) — высококачественный машинный перевод для 22 индийских языков.
- [OpenHathi](https://huggingface.co/sarvamai/OpenHathi-7B-Hi-v0.1-Base) (Sarvam AI, 2023) — продолжение обучения LLaMA на хинди и английском языках.
- [Airavata](https://huggingface.co/ai4bharat/Airavata) (2024) — LLM на хинди, настроенная на выполнение инструкций.
- [Sarvam-1](https://www.sarvam.ai/blogs/sarvam-1) (2024) — мультиязычная языковая модель, обученная с нуля на 10 индийских языках.
- [BharatGPT / Krutrim](https://www.olakrutrim.com/) (2024) — базовые модели, ориентированные на индийские языки.

</details>

<details>
<summary>

### NLP для индонезийского языка

</summary>

[Наверх](#contents)

### Библиотеки и эмбеддинги

- [bahasa](https://github.com/kangfend/bahasa) — набор инструментов обработки естественного языка для индонезийского.
- [Indonesian Word Embedding](https://github.com/galuhsahid/indonesian-word-embedding)
- [Indonesian fastText](https://s3-us-west-1.amazonaws.com/fasttext-vectors/wiki.id.zip) — обучен на Wikipedia.
- [PySastrawi](https://github.com/har07/PySastrawi) — стеммер для индонезийского языка на Python, основанный на алгоритме Sastrawi.

### Модели

- [IndoBERT (IndoNLU)](https://github.com/indobenchmark/indonlu) — предварительно обученная языковая модель для индонезийского языка с набором бенчмарков IndoNLU.
- [IndoBERT (IndoLEM)](https://github.com/indolem/indolem) — альтернативная IndoBERT с бенчмарком IndoLEM.
- [NusaCrowd / Cendol](https://github.com/IndoNLP/nusa-crowd) (2023–2024) — масштабные наборы данных от сообщества и языковые модели Cendol, настроенные на выполнение инструкций на индонезийском и региональных языках.
- [Sailor](https://github.com/sail-sg/sailor-llm) — открытые языковые модели для Юго-Восточной Азии, включая индонезийский.
- [SEA-LION](https://github.com/aisingapore/sealion) (2024) — открытая языковая модель Singapore AI для Юго-Восточной Азии с хорошей поддержкой индонезийского.

### Наборы данных

- Коллекции Kompas и Tempo на [ILPS](http://ilps.science.uva.nl/resources/bahasa/).
- [PANL10N for PoS tagging](http://www.panl10n.net/english/outputs/Indonesia/UI/0802/UI-1M-tagged.zip): 39 тыс. предложений и 900 тыс. словоупотреблений.
- [IDN for PoS tagging](https://github.com/famrashel/idn-tagged-corpus): 10 тыс. предложений и 250 тыс. словоупотреблений.
- [Indonesian Treebank](https://github.com/famrashel/idn-treebank) and [Universal Dependencies-Indonesian](https://github.com/UniversalDependencies/UD_Indonesian-GSD)
- [IndoSum](https://github.com/kata-ai/indosum) — суммаризация и классификация текста.
- [Wordnet-Bahasa](http://wn-msa.sourceforge.net/) — большой бесплатный семантический словарь.
- [SEACrowd](https://github.com/SEACrowd/seacrowd-datahub) — мультиязычный мультимодальный каталог стандартизированных наборов данных и бенчмарков для NLP Юго-Восточной Азии (EMNLP 2024).

</details>

<details>
<summary>

### NLP для корейского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [KoNLPy](http://konlpy.org) — пакет Python для обработки естественного языка на корейском.
- [Mecab (Korean)](https://eunjeon.blogspot.com/) — библиотека C++ для NLP на корейском языке.
- [KoalaNLP](https://koalanlp.github.io/koalanlp/) — библиотека Scala для NLP на корейском языке.
- [KoNLP](https://cran.r-project.org/package=KoNLP) — пакет R для NLP на корейском языке.
- [kss](https://github.com/hyunwoongko/kss) — средство разделения корейского текста на предложения.
- [Kiwi](https://github.com/bab2min/Kiwi) — быстрый морфологический анализатор корейского языка.
- [Garu](https://github.com/ongjin/garu) — встроенный в браузер морфологический анализатор корейского языка, полностью работающий на стороне клиента через WebAssembly (модель 1 МБ, автономный режим, лицензия MIT).

### Модели и эмбеддинги

- [KoBERT](https://github.com/SKTBrain/KoBERT) — корейская модель BERT от SKT.
- [KLUE-RoBERTa](https://github.com/KLUE-benchmark/KLUE) — модели, обученные на бенчмарке KLUE.
- [Polyglot-Ko](https://github.com/EleutherAI/polyglot) — открытые языковые модели для корейского языка.
- [EXAONE 3.5](https://github.com/LG-AI-EXAONE) (LG, 2024) — семейство открытых двуязычных языковых моделей для корейского и английского языков.
- [HyperCLOVA X](https://www.ncloud.com/product/aiService/clovaStudio) — базовая модель корейского языка от Naver.

### Блоги и руководства

- [dsindex's blog](https://dsindex.github.io/)
- [Kangwon University's NLP course in Korean](http://cs.kangwon.ac.kr/~leeck/NLP/)

### Наборы данных

- [KAIST Corpus](http://semanticweb.kaist.ac.kr/home/index.php/KAIST_Corpus) — корпус корейского языка Корейского института передовых технологий.
- [Naver Sentiment Movie Corpus in Korean](https://github.com/e9t/nsmc/)
- [Chosun Ilbo archive](http://srchdb1.chosun.com/pdf/i_archive/) — набор данных на корейском языке из крупной южнокорейской газеты.
- [Chat data](https://github.com/songys/Chatbot_data) — данные для чат-ботов на корейском языке.
- [Petitions](https://github.com/akngs/petitions) — архив петиций с сайта национальных петиций Blue House.
- [Korean Parallel corpora](https://github.com/j-min/korean-parallel-corpora) — набор данных NMT для перевода с корейского на французский и английский.
- [KorQuAD](https://korquad.github.io/) — набор данных SQuAD на корейском языке (версии 1.0 и 2.1) с исходным HTML-кодом Wiki.

</details>

<details>
<summary>

### NLP для персидского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [Hazm](https://github.com/roshan-research/hazm) — набор инструментов NLP для персидского языка.
- [Parsivar](https://github.com/ICTRC/Parsivar) — набор средств обработки персидского языка.
- [Perke](https://github.com/AlirezaTheH/perke) — извлечение ключевых фраз на персидском языке.
- [Perstem](https://github.com/jonsafari/perstem) — стеммер, морфологический анализатор и частичный разметчик частей речи для персидского языка.
- [ParsiAnalyzer](https://github.com/NarimanN2/ParsiAnalyzer) — анализатор персидского языка для Elasticsearch.
- [virastar](https://github.com/aziz/virastar) — очистка текста на персидском языке.

### Модели

- [ParsBERT](https://github.com/hooshvare/parsbert) — BERT для персидского языка.
- [PersianMind](https://huggingface.co/universitytehran/PersianMind-v1.0) (2023–2024) — языковая модель для персидского языка, настроенная на выполнение инструкций.
- [Dorna](https://huggingface.co/PartAI/Dorna-Llama3-8B-Instruct) (Part AI, 2024) — модель инструкций на персидском языке на базе Llama 3.

### Наборы данных

- [Bijankhan Corpus](https://dbrg.ut.ac.ir/بیژن%E2%80%8Cخان/) — размеченный корпус для исследований NLP на персидском (фарси): около 2,6 млн размеченных вручную слов с 40 метками частей речи.
- [Uppsala Persian Corpus (UPC)](https://sites.google.com/site/mojganserajicom/home/upc) — большой общедоступный корпус персидского языка: 2,7 млн токенов с разметкой по 31 части речи.
- [Large-Scale Colloquial Persian](http://hdl.handle.net/11234/1-3195) — LSCP: 120 млн предложений из 27 млн неформальных твитов на персидском с разметкой зависимостей, частей речи и тональности.
- [ArmanPersoNERCorpus](https://github.com/HaniehP/PersianNER) — 250 тыс. токенов и 7682 предложения с метками NER в формате IOB.
- [FarsiYar PersianNER](https://github.com/Text-Mining/Persian-NER) — около 25 млн токенов и 1 млн предложений на персидском из [корпуса Wikipedia на персидском языке](https://github.com/Text-Mining/Persian-Wikipedia-Corpus).
- [PERLEX](http://farsbase.net/PERLEX.html) — первый персидский набор данных для извлечения отношений (перевод SemEval-2010 Task 8).
- [Persian Syntactic Dependency Treebank](http://dadegan.ir/catalog/perdt) — 29 982 размеченных предложения, охватывающих большинство глаголов словаря валентности персидского языка.
- [Uppsala Persian Dependency Treebank (UPDT)](http://stp.lingfil.uu.se/~mojgan/UPDT.html) — корпус с синтаксической разметкой на основе зависимостей.
- [Hamshahri](https://dbrg.ut.ac.ir/hamshahri/) — стандартная надёжная коллекция персидских текстов, использовавшаяся в CLEF 2008–2009.

</details>

<details>
<summary>

### NLP для польского языка

</summary>

[Наверх](#contents)

- [Polish-NLP](https://github.com/ksopyla/awesome-nlp-polish) — подборка ресурсов NLP для польского языка: модели, инструменты и наборы данных.

</details>

<details>
<summary>

### NLP для португальского языка

</summary>

[Наверх](#contents)

- [Portuguese-nlp](https://github.com/ajdavidl/Portuguese-NLP) — подборка ресурсов и инструментов NLP для португальского языка.

### Модели

- [BERTimbau](https://github.com/neuralmind-ai/portuguese-bert) — BERT для бразильского португальского.
- [Sabiá](https://huggingface.co/maritaca-ai) (Maritaca AI, 2023–2024) — открытые языковые модели, ориентированные на португальский язык.
- [Albertina](https://huggingface.co/PORTULAN) (PORTULAN, 2023–2024) — языковые модели типа encoder-only для европейского и бразильского португальского.

</details>

<details>
<summary>

### NLP для испанского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [spanlp](https://github.com/jfreddypuentes/spanlp) — библиотека Python для выявления, сокрытия и удаления ненормативной лексики, языка ненависти и травли на испанском; использует данные из 21 испаноязычной страны.

### Данные

- [Columbian Political Speeches](https://github.com/dav009/LatinamericanTextResources)
- [Copenhagen Treebank](https://mbkromann.github.io/copenhagen-dependency-treebank/)
- [Spanish Billion Words Corpus with Word2Vec embeddings](https://github.com/crscardellino/sbwce)
- [Compilation of Spanish Unannotated Corpora](https://github.com/josecannete/spanish-unannotated-corpora)

### Модели и эмбеддинги

- [BETO](https://github.com/dccuchile/beto) — BERT для испанского языка.
- [RoBERTa-bne](https://huggingface.co/PlanTL-GOB-ES/roberta-base-bne) — RoBERTa для испанского языка, обученная на корпусе Национальной библиотеки Испании.
- [Latxa](https://github.com/hitz-zentroa/latxa) (2024) — открытая базовая языковая модель для баскского языка, также поддерживающая испанский.
- [Salamandra](https://huggingface.co/BSC-LT/salamandra-7b) (BSC, 2024) — мультиязычная языковая модель с широкой поддержкой испанского от Барселонского суперкомпьютерного центра.
- [RigoChat](https://huggingface.co/IIC/RigoChat-7b-v2) (2024) — открытая модель, настроенная на выполнение инструкций на испанском языке.
- [Spanish Word Embeddings (multiple methods/corpora)](https://github.com/dccuchile/spanish-word-embeddings)
- [Spanish fastText Embeddings](https://github.com/BotCenter/spanishWordEmbeddings)
- [Spanish sent2vec Sentence Embeddings](https://github.com/BotCenter/spanishSent2Vec)

</details>

<details>
<summary>

### NLP для тайского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [PyThaiNLP](https://github.com/PyThaiNLP/pythainlp) — NLP на тайском языке в Python.
- [JTCC](https://github.com/wittawatj/jtcc) — библиотека кластеризации символов на Java.
- [CutKum](https://github.com/pucktada/cutkum) — сегментация слов с помощью глубокого обучения в TensorFlow.
- [Thai Language Toolkit](https://pypi.python.org/pypi/tltk/) — токенизация и разметка частей речи.
- [SynThai](https://github.com/KenjiroAI/SynThai) — сегментация слов и разметка частей речи с помощью глубокого обучения.

### Модели

- [WangchanBERTa](https://github.com/vistec-AI/thai2transformers) — предварительно обученная языковая модель для тайского языка.
- [Typhoon](https://huggingface.co/scb10x) (SCB 10X, 2024) — семейство открытых LLM для тайского языка.
- [OpenThaiGPT](https://huggingface.co/openthaigpt) (2023–2024) — открытые модели для тайского языка, настроенные на выполнение инструкций.
- [Sailor](https://github.com/sail-sg/sailor-llm) — семейство открытых языковых моделей для Юго-Восточной Азии, включая тайский.

### Данные

- [Inter-BEST](https://www.nectec.or.th/corpus/index.php?league=pm) — текстовый корпус из 5 млн слов с сегментацией.
- [Prime Minister 29](https://github.com/PyThaiNLP/lexicon-thai/tree/master/thai-corpus/Prime%20Minister%2029) — набор данных с речами действующего премьер-министра Таиланда.

</details>

<details>
<summary>

### NLP для украинского языка

</summary>

[Наверх](#contents)

- [awesome-ukrainian-nlp](https://github.com/asivokon/awesome-ukrainian-nlp) — подборка наборов данных, моделей и других ресурсов NLP для украинского языка.
- [UkrainianLT](https://github.com/Helsinki-NLP/UkrainianLT) — подборка ресурсов по машинному переводу и обработке речи.

</details>

<details>
<summary>

### NLP для урду

</summary>

[Наверх](#contents)

### Библиотеки

- [urduhack](https://github.com/urduhack/urduhack) — библиотека NLP для урду.

### Наборы данных

- [Collection of Urdu datasets](https://github.com/mirfan899/Urdu) — разметка частей речи, NER и другие задачи NLP.

</details>

<details>
<summary>

### NLP для узбекского языка

</summary>

[Наверх](#contents)

### Наборы данных

- [SOAS English-Uzbek RAG Evaluation](https://github.com/rajantripathi/soas-rag-evaluation) — двуязычный бенчмарк оценки поиска для RAG с культурной привязкой. 400 строк, английский и узбекский языки, лицензия MIT/CC-BY-4.0.

</details>

<details>
<summary>

### NLP для вьетнамского языка

</summary>

[Наверх](#contents)

### Библиотеки

- [underthesea](https://github.com/undertheseanlp/underthesea) — набор инструментов NLP для вьетнамского языка.
- [vn.vitk](https://github.com/phuonglh/vn.vitk) — набор инструментов обработки вьетнамского текста.
- [VnCoreNLP](https://github.com/vncorenlp/VnCoreNLP) — набор инструментов NLP для вьетнамского языка.
- [pyvi](https://github.com/trungtv/pyvi) — основной набор инструментов NLP для вьетнамского языка на Python.
- [VieNeu-TTS](https://github.com/pnnbao97/VieNeu-TTS) — синтез речи на вьетнамском языке непосредственно на устройстве с клонированием голоса.

### Модели и эмбеддинги

- [PhoBERT](https://github.com/VinAIResearch/PhoBERT) — предварительно обученная языковая модель для вьетнамского языка.
- [BARTpho](https://github.com/VinAIResearch/BARTpho) — предварительно обученная модель sequence-to-sequence для вьетнамского языка.
- [PhoGPT](https://github.com/VinAIResearch/PhoGPT) (VinAI, 2023–2024) — открытая генеративная языковая модель для вьетнамского языка.
- [Vistral](https://huggingface.co/Viet-Mistral/Vistral-7B-Chat) (2024) — чат-модель на вьетнамском языке на основе Mistral.
- [Sailor](https://github.com/sail-sg/sailor-llm) (2024) — семейство открытых мультиязычных языковых моделей для вьетнамского, тайского, индонезийского и других языков Юго-Восточной Азии.

### Данные

- [Vietnamese Treebank](https://vlsp.hpda.vn/demo/?page=resources&lang=en) — 10 тыс. предложений для синтаксического анализа составляющих.
- [BKTreeBank](https://arxiv.org/pdf/1710.05519.pdf) — банк синтаксических деревьев зависимостей для вьетнамского языка.
- [UD_Vietnamese](https://github.com/UniversalDependencies/UD_Vietnamese-VTB) — банк Universal Dependencies для вьетнамского языка.
- [VIVOS](https://ailab.hcmus.edu.vn/vivos/) — бесплатный корпус речи на вьетнамском языке с 15 часами записей (HCMUS AILab).
- [VNTQcorpus(big).txt](http://viet.jnlp.org/download-du-lieu-tu-vung-corpus) — 1,75 млн предложений из новостей.
- [ViText2SQL](https://github.com/VinAIResearch/ViText2SQL) — набор данных семантического анализа для преобразования вьетнамского текста в SQL (EMNLP-2020 Findings).
- [EVB Corpus](https://github.com/qhungngo/EVBCorpus) — 20 млн слов из 15 двуязычных книг, 100 параллельных англо-вьетнамских текстов, 250 параллельных юридических текстов, 5 тыс. новостных статей и 2 тыс. субтитров к фильмам.

</details>

### Другие языки

- Русский: [pymorphy2](https://github.com/kmike/pymorphy2) — хороший разметчик частей речи для русского языка.
- Языки Азии: [ICU Tokenizer](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu-tokenizer.html) в ElasticSearch для тайского, лаосского, китайского, японского и корейского языков.
- Древние языки: [CLTK](https://github.com/cltk/cltk) — Classical Language Toolkit, библиотека Python и коллекция текстов для NLP на древних языках.
- Иврит: [NLPH_Resources](https://github.com/NLPH/NLPH_Resources) — подборка статей, корпусов и лингвистических ресурсов для NLP на иврите.

[Наверх](#contents)

## См. также

Связанные подборки по темам вне этого списка:

- [awesome-llm](https://github.com/Hannibal046/Awesome-LLM) — ресурсы по универсальным большим языковым моделям.
- [awesome-generative-ai](https://github.com/steven2358/awesome-generative-ai) — генеративный ИИ для разных модальностей.
- [awesome-rag](https://github.com/Danielskry/Awesome-RAG) — системы и инструменты генерации с поисковым дополнением.
- [awesome-prompt-engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) — методы составления промптов и библиотеки шаблонов.
- [awesome-mlops](https://github.com/visenger/awesome-mlops) — промышленное машинное обучение, включая обслуживание LLM.

## Цитирование

Если этот репозиторий оказался полезен, укажите ссылку на список в цитировании:

```bibtex
@misc{awesome-nlp,
  title  = {Awesome NLP},
  author = {Kim, Keon Woo},
  year   = {2018},
  url    = {https://github.com/keon/awesome-nlp},
  note   = {GitHub repository}
}
```

## Лицензия
[Лицензия](./LICENSE) — CC0
