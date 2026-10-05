<div align="center"><img src="./assets/head.jpg"></div>

# AWESOME DATA SCIENCE

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Приветствуются вклады — см. [`CONTRIBUTING.md`](CONTRIBUTING.md).

**Репозиторий Data Science с открытым исходным кодом, который помогает изучать и применять концепции для решения реальных задач.**

Это краткий маршрут для начала изучения **Data Science**. Следуйте шагам и ответьте на вопросы: «Что такое Data Science и что нужно изучить, чтобы освоить Data Science?»

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## Спонсоры

[![Creavit Studio: recording, editing, and motion in one app](https://raw.githubusercontent.com/creavit-studio/files/refs/heads/main/static/crvt-banner.png)](https://creavit.studio/?utm_source=github&utm_medium=sponsorship&utm_campaign=creavit_founding_alpha&utm_content=crvt_banner)

[![Graphyn: visualize specialized agent workflows](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)



Become a sponsor! `github@academic.io`



## Содержание

- [Что такое Data Science?](#what-is-data-science)
- [С чего начать?](#where-do-i-start)
- [Агенты](#agents)
- [Проекты](#projects)
- [Учебные ресурсы](#training-resources)
  - [Учебные руководства](#tutorials)
  - [Бесплатные курсы](#free-courses)
  - [Массовые открытые онлайн-курсы](#moocs)
  - [Интенсивные программы](#intensive-programs)
  - [Колледжи](#colleges)
- [Инструментарий Data Science](#the-data-science-toolbox)

  - [Алгоритмы](#algorithms)
    - [Обучение с учителем](#supervised-learning)
    - [Обучение без учителя](#unsupervised-learning)
    - [Полуобучение с учителем](#semi-supervised-learning)
    - [Обучение с подкреплением](#reinforcement-learning)
    - [Алгоритмы интеллектуального анализа данных](#data-mining-algorithms)
    - [Архитектуры глубокого обучения](#deep-learning-architectures)
  - [Универсальные пакеты машинного обучения](#general-machine-learning-packages)
  - [Пакеты глубокого обучения](#deep-learning-packages)
    - [Экосистема PyTorch](#pytorch-ecosystem)
    - [Экосистема TensorFlow](#tensorflow-ecosystem)
    - [Экосистема Keras](#keras-ecosystem)
  - [Инструменты визуализации](#visualization-tools)
  - [Разные инструменты](#miscellaneous-tools)
- [Литература и медиа](#literature-and-media)
  - [Книги](#books)
    - [Скидки на книги (по партнёрской ссылке)](#book-deals-affiliated)
  - [Журналы, публикации и периодика](#journals-publications-and-magazines)
  - [Рассылки](#newsletters)
  - [Блогеры](#bloggers)
  - [Презентации](#presentations)
  - [Подкасты](#podcasts)
  - [Видео и каналы YouTube](#youtube-videos--channels)
- [Общение](#socialize)
  - [Аккаунты Facebook](#facebook-accounts)
  - [Аккаунты Twitter](#twitter-accounts)
  - [Каналы Telegram](#telegram-channels)
  - [Сообщества Slack](#slack-communities)
  - [Группы GitHub](#github-groups)
  - [Соревнования по Data Science](#data-science-competitions)
- [Развлечения](#fun)
  - [Инфографика](#infographics)
  - [Наборы данных](#datasets)
  - [Комиксы](#comics)
- [Другие замечательные подборки](#other-awesome-lists)
  - [Хобби](#hobby)

## Что такое Data Science?
**[`^        наверх        ^`](#awesome-data-science)**

Сегодня Data Science — одна из самых актуальных тем в мире компьютеров и интернета. Люди годами собирали данные из приложений и систем, и теперь настало время их анализировать. Следующие шаги — извлекать из данных рекомендации и строить прогнозы о будущем. [Здесь](https://www.quora.com/Data-Science/What-is-data-science) собраны главный вопрос о **Data Science** и сотни ответов экспертов.


| Ссылка | Обзор |
| --- | --- |
| [Наука о данных для начинающих](https://github.com/microsoft/Data-Science-For-Beginners) | Microsoft предлагает учебную программу на 10 недель и 20 занятий, посвящённую Data Science. |
| [Что такое Data Science @ O’Reilly](https://www.oreilly.com/ideas/what-is-data-science) | _Специалисты по данным сочетают предпринимательский подход с терпением, готовностью постепенно создавать продукты на основе данных, умением исследовать и совершенствовать решения. Они работают на стыке дисциплин и охватывают все стороны задачи: от сбора и подготовки данных до выводов. Они умеют нестандартно взглянуть на проблему и работать с широко поставленными задачами: «Вот большой объём данных — что можно из него извлечь?»_ |
| [Что такое Data Science @ Quora](https://www.quora.com/Data-Science/What-is-data-science) | Data Science объединяет технологии, разработку алгоритмов и анализ данных, чтобы изучать данные и находить инновационные решения сложных проблем. Иными словами, это анализ данных и поиск творческих способов стимулировать рост бизнеса. |
| [Самая привлекательная профессия XXI века](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _Специалисты по данным сегодня напоминают биржевых «квантов» 1980-х и 1990-х годов. Тогда люди с физико-математическим образованием приходили в инвестиционные банки и хедж-фонды, где разрабатывали совершенно новые алгоритмы и стратегии работы с данными. Затем университеты создали магистерские программы по финансовой инженерии, подготовившие новое поколение специалистов, более доступных обычным компаниям. В конце 1990-х история повторилась с поисковыми инженерами: их редкие навыки вскоре стали преподавать на программах информатики._ |
| [Wikipedia](https://en.wikipedia.org/wiki/Data_science) | _Наука о данных — междисциплинарная область, использующая научные методы, процессы, алгоритмы и системы для извлечения знаний из структурированных и неструктурированных данных. Она связана с интеллектуальным анализом данных, машинным обучением и большими данными._ |
| [Как стать специалистом по данным](https://www.mastersindatascience.org/careers/data-scientist/) | _Специалисты по данным собирают и анализируют большие массивы структурированных и неструктурированных данных. Их работа объединяет информатику, статистику и математику: они анализируют, обрабатывают и моделируют данные, интерпретируют результаты и разрабатывают планы действий для компаний и организаций._ |
| [Краткая история #datascience](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _История о том, как специалисты по данным стали востребованными, — это прежде всего история соединения зрелой статистики с молодой информатикой. Термин «Data Science» появился сравнительно недавно, обозначив профессию, призванную извлекать смысл из огромных массивов больших данных. Однако осмысление данных имеет долгую историю: его годами обсуждали учёные, статистики, библиотекари, специалисты по информатике и другие. Хронология прослеживает развитие термина «Data Science», попытки его определить и связанные понятия._ |
|[Ресурсы разработки ПО для специалистов по данным](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)| _Специалисты по данным стремятся извлекать смысл из данных с помощью исследовательского анализа, статистики и моделей. Разработчики ПО применяют иной набор знаний и инструментов. Командам Data Science полезны лучшие практики разработки: контроль версий, автоматические тесты и другие навыки помогают создавать воспроизводимый код и инструменты, готовые к эксплуатации._ |
|[Дорожная карта специалиста по данным](https://www.scaler.com/blog/how-to-become-a-data-scientist/)| _Data Science — отличный выбор карьеры в современном мире, основанном на данных: ежедневно генерируется около 328,77 млн терабайт данных. Объём растёт, как и спрос на квалифицированных специалистов, умеющих использовать данные для развития бизнеса._ |
|[Путь к профессии специалиста по данным](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)| _Сегодня Data Science — одна из самых востребованных профессий. По мере того как компании всё больше полагаются на данные при принятии решений, потребность в квалифицированных специалистах растёт. Они играют важную роль в технологических компаниях, здравоохранении и госучреждениях, превращая исходные данные в ценные выводы. Но как стать специалистом по данным, особенно если вы только начинаете?_ |

## С чего начать?
**[`^        наверх        ^`](#awesome-data-science)**

Хотя это и не строгое требование, знание языка программирования — важный навык для эффективной работы специалиста по данным. Сейчас самым популярным языком является _Python_, за ним следует _R_. Python — язык сценариев общего назначения, применяемый во множестве областей. R — предметно-ориентированный язык статистики, который из коробки включает множество распространённых статистических инструментов.

[Python](https://python.org/) — безусловно, самый популярный язык в науке, во многом благодаря простоте использования и развитой экосистеме пользовательских пакетов. Устанавливать пакеты можно двумя основными способами: Pip (команда `pip install`), менеджер пакетов, входящий в состав Python, и [Anaconda](https://www.anaconda.com) (команда `conda install`) — мощный менеджер пакетов, который устанавливает пакеты для Python и R, а также загружает исполняемые файлы, например Git.

В отличие от R, Python изначально не создавался специально для Data Science, но недостаток компенсируют многочисленные сторонние библиотеки. Более полный список пакетов приведён далее; для начала подойдут четыре: [Scikit-Learn](https://scikit-learn.org/stable/index.html) — универсальный пакет Data Science с популярными алгоритмами, подробной документацией, учебными материалами и примерами моделей. Даже если вы предпочитаете писать реализации самостоятельно, Scikit-Learn — полезный справочник по основам распространённых алгоритмов. С помощью [Pandas](https://pandas.pydata.org/) можно собирать и анализировать данные в удобном табличном формате. [Numpy](https://numpy.org/) предоставляет быстрые инструменты для математических операций, особенно с векторами и матрицами. [Seaborn](https://seaborn.pydata.org/), построенный на [Matplotlib](https://matplotlib.org/), позволяет быстро создавать наглядные визуализации с хорошими настройками по умолчанию; в галерее показано, как строить распространённые графики.

В начале пути к профессии специалиста по данным выбор языка не особенно важен: у Python и R есть свои преимущества и недостатки. Выберите язык, который вам нравится, и изучите один из перечисленных ниже [бесплатных курсов](#free-courses)!

### План для начинающих
Если вы только начинаете, вот простой рекомендуемый маршрут:

1. **Learn Python** – Start with basics: variables, loops, functions
2. **Learn core libraries** – Pandas, NumPy, Matplotlib, Scikit-Learn
3. **Practice with beginner projects** – Try Titanic survival or house price prediction on Kaggle
4. **Learn Math basics** – Statistics, Linear Algebra, Probability
5. **Move into ML** – Supervised learning → Unsupervised → Deep Learning

## Агенты

В этом разделе собраны агентские фреймворки и инструменты, полезные в рабочих процессах Data Science.

### Фреймворки
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - Набор средств разработки производственных ИИ-агентов для Rust с поддержкой разных моделей (Gemini, OpenAI, Anthropic), нескольких типов агентов (LLM, граф, рабочий процесс), MCP и встроенной телеметрии.
- [Lumen](https://github.com/holoviz/lumen) - Фреймворк для диалога с данными: преобразует естественный язык в SQL, конвейеры преобразований и визуализации. Создаёт декларативные спецификации для проверки, редактирования, повторного открытия в блокноте или объединения в панели мониторинга.

### Инструменты
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - MCP-сервер предоставляет агентам 13 инструментов: цены криптовалют в реальном времени, геолокация IP, DNS-запросы, преобразование веб-страниц в Markdown, выполнение кода и снимки экрана. Один API-ключ для 40+ сервисов.
- [Arch Tools](https://archtools.dev) - 61 готовый инструмент API для Data Science: анализ кода, веб-скрейпинг, NLP, генерация изображений, криптоданные и поиск. Поддерживает REST API и MCP. [GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - Поисковая система для ИИ-агентов, индексирующая 9 000+ инструментов и API ИИ и оценивающая готовность к агентной работе (llms.txt, OpenAPI, MCP, ai-plugin.json). REST API и MCP-сервер. [GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - Фреймворк торговли криптовалютами на основе ансамбля LightGBM и XGBoost с 72 признаками машинного обучения. Точность 70,9% на отложенных данных при проверке скользящим окном. Поддерживает Bybit и Binance. MIT, доступен на [PyPI](https://pypi.org/project/deepalpha-bot/).
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - Локальный ИИ-агент для подготовки научных статей к публикации с реальными ссылками arXiv, структурой IMRaD и экспертной оценкой. Работает офлайн через Ollama с моделями 4B–9B. MIT. [HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - Фреймворк оценки LLM и агентов с открытым исходным кодом: 50+ метрик, LLM-as-Judge и сканеры защитных механизмов (jailbreak, PII, prompt injection). Подходит для оценки результатов RAG, траекторий агентов и вызова функций.
- [Kitaru](https://github.com/zenml-io/kitaru) - Открытая платформа, записывающая реальные запуски ИИ-агентов, повторно проверяющая их после изменений и оценивающая результаты до развёртывания.
- [Jev Social](https://github.com/socai-io/jev-social) - Агент для исследований соцсетей только с чтением: выбирает ограниченные операции Instagram, TikTok и LinkedIn, запускает их локальной CLI socai в Chrome и сохраняет подтверждения с источниками рядом с отчётом.
- [YYLO Benchmark](https://github.com/yylo-dev/yylo-benchmark) - Открытый инструмент экспериментов на доверенных хостах с историческими задачами агентов, запросами на программирование и рабочими процессами. Выполняет независимые попытки, сохраняет результаты и позволяет позднее сравнивать модели, обвязки и конфигурации. MIT.
- [YYLO](https://github.com/yylo-dev/yylo) - Открытый CLI-оркестратор агентов программирования и воспроизводимых процессов с типизированными границами задач, проверок, слияния и готовности к выпуску; изменения репозитория подтверждаются. MIT, установка через npm.
- [YYLO Ledger](https://github.com/yylo-dev/yylo-ledger) - CLI-журнал задач для проектов с агентами: хранит Kanban и состояние задач в Markdown внутри репозитория, отслеживает подтверждения и архивы, управляет слиянием и выпуском в рабочих деревьях агентов. MIT.

### Исследования и поиск знаний
- [BGPT MCP](https://bgpt.pro/mcp) - MCP-сервер предоставляет агентам доступ к базе научных статей на основе экспериментальных данных полнотекстовых исследований. Возвращает 25+ полей, включая методы, результаты, объём выборки и оценку качества. [GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - Библиотека Python и MCP-сервер для сравнения стратегий разбиения документов на фрагменты RAG, оценки качества поиска и рекомендации настроек корпуса.
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - Ежедневно обновляемые CLI и навыки для детерминированного поиска по arXiv, PubMed/PMC и поддерживаемым корпусам политики США.
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - Платёжный шлюз x402 с 23 конечными точками исследований для ИИ-агентов: Wikipedia, arXiv, PubMed, Wikidata, научные цитаты, извлечение сущностей и другое. Оплата за вызов в USDC на Base и Solana — без ключей и подписок. Ещё 150+ точек в 39 категориях. [GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - Поиск научной литературы на базе ИИ, перевод документов и рабочее пространство для исследований.

### Рабочий процесс
**[`^        наверх        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - Лёгкий и интуитивно понятный интерфейс для быстрого создания и развёртывания LLM, подключённых к выбранным инструментам.

## Проекты
**[`^        наверх        ^`](#awesome-data-science)**

- [Synthetic Hospital](https://github.com/sparkcpark/synthetic_hospital) - Платформа медицинских эталонных тестов и симуляции электронных медицинских карт.

## Учебные ресурсы
**[`^        наверх        ^`](#awesome-data-science)**

Как изучать Data Science? Конечно же, занимаясь Data Science! Возможно, этот совет не слишком полезен тем, кто только начинает. Здесь собраны учебные материалы, расположенные примерно от наименьших затрат времени к наибольшим: [учебные руководства](#tutorials), [массовые открытые онлайн-курсы (MOOC)](#moocs), [интенсивные программы](#intensive-programs) и [колледжи](#colleges).


### Учебные руководства
**[`^        наверх        ^`](#awesome-data-science)**

- [1000 Data Science Projects](https://cloud.blobcity.com/#/ps/explore) 1 000 проектов Data Science, которые можно запускать в браузере с IPython.
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - Еженедельный проект по работе с данными для экосистемы R.
- [Data science your way](https://github.com/jadianes/data-science-your-way)
- [DataCamp Cheatsheets](https://www.datacamp.com/cheat-sheet) Шпаргалки для Data Science.
- [PySpark Cheatsheet](https://github.com/kevinschaich/pyspark-cheatsheet)
- [Machine Learning, Data Science and Deep Learning with Python ](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - Бесплатная кроссплатформенная поисковая система с 50 000+ учебных материалов Udemy, Skillshare, Pluralsight и других платформ по 45+ категориям.
- [Your Guide to Latent Dirichlet Allocation](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Tutorials of source code from the book Genetic Algorithms with Python by Clinton Sheppard](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [Tutorials to get started on signal processing for machine learning](https://github.com/jinglescode/python-signal-processing)
- [Realtime deployment](https://www.microprediction.com/python-1) Учебник по развёртыванию моделей временных рядов на Python.
- [Python for Data Science: A Beginner’s Guide](https://learntocodewith.me/posts/python-for-data-science/)
- [Minimum Viable Study Plan for Machine Learning Interviews](https://github.com/khangich/machine-learning-interview)
- [Understand and Know Machine Learning Engineering by Building Solid Projects](https://mlzoomcamp.com/)
- [12 free Data Science projects to practice Python and Pandas](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [Best CV/Resume for Data Science Freshers](https://enhancv.com/resume-examples/data-scientist/)
- [Understand Data Science Course in Java](https://www.alter-solutions.com/articles/java-data-science)
- [Data Analytics Interview Questions (Beginner to Advanced)](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [Top 100+ Data Science Interview Questions and Answers](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven - SQL, Python, and Data Modeling Interview Questions](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - Интерактивный калькулятор, наглядно показывающий пошаговую математику алгоритмов машинного обучения для подготовки к экзаменам.
- [How to Build Optimal AI Agents That Actually Work](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - Руководство для разработчиков по проектированию и созданию эффективных ИИ-агентов.
- [Train LLM From Scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) - Простой способ обучить LLM с нуля: от загрузки данных до генерации текста.

### Бесплатные курсы
**[`^        наверх        ^`](#awesome-data-science)**

- [Data Science](https://github.com/ossu/data-science) - Университет открытого исходного кода.
- [Data Scientist with R](https://www.datacamp.com/tracks/data-scientist-with-r)
- [Data Scientist with Python](https://www.datacamp.com/tracks/data-scientist-with-python)
- [Genetic Algorithms OCW Course](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [AI Expert Roadmap](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - План подготовки к профессии эксперта по искусственному интеллекту.
- [Convex Optimization](https://www.edx.org/course/convex-optimization) - Основы выпуклого анализа; методы наименьших квадратов, линейное, квадратичное и полуопределённое программирование, минимакс, условия оптимальности и теория двойственности.
- [Learning from Data](https://home.work.caltech.edu/telecourse.html) - Введение в машинное обучение: базовая теория, алгоритмы и приложения.
- [Kaggle](https://www.kaggle.com/learn) - Изучайте Data Science, машинное обучение, Python и другое.
- [ML Observability Fundamentals](https://arize.com/ml-observability-fundamentals/) - Научитесь отслеживать проблемы производственных моделей машинного обучения и находить их первопричины.
- [Weights & Biases Effective MLOps: Model Development](https://www.wandb.courses/courses/effective-mlops-model-development) - Бесплатный курс и сертификат по созданию сквозной системы разработки машинного обучения с W&B.
- [Python for Data Science by Scaler](https://www.scaler.com/topics/course/python-for-data-science/) - Курс для начинающих в мире данных с прочной базой по статистике, программированию, визуализации и машинному обучению.
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - Слайды, скрипты и материалы курса «Машинное обучение в финансах» в NYU Tandon, 2022.
- [Hands-on Train and Deploy ML](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - Практический курс обучения и развёртывания бессерверного API для прогнозирования цен криптовалют.
- [LLMOps: Building Real-World Applications With Large Language Models](https://www.comet.com/site/llm-course/) - Изучайте создание современного ПО с LLM, используя новейшие инструменты и методы.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Научитесь задавать запросы моделям компьютерного зрения с помощью естественного языка, координат, рамок, масок сегментации и изображений в бесплатном курсе DeepLearning.AI.
- [Data Science Course By IBM](https://skillsbuild.org/students/course-catalog/data-science) - Бесплатные материалы о Data Science и её применении в разных отраслях.
- [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) - Бесплатная серия видео Андрея Карпатого о нейронных сетях с нуля: обратное распространение ошибки, makemore, GPT и другое.



### Массовые открытые онлайн-курсы
**[`^        наверх        ^`](#awesome-data-science)**

- [Coursera Introduction to Data Science](https://www.coursera.org/specializations/data-science)
- [Data Science - 9 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/jhu-data-science)
- [Data Mining - 5 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/data-mining)
- [Machine Learning – 5 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/machine-learning)
- [CS 109 Data Science](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 Visualization](https://www.cs171.org/#!index.md)
- [Process Mining: Data science in Action](https://www.coursera.org/learn/process-mining)
- [Oxford Deep Learning](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [Oxford Deep Learning - video](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [Oxford Machine Learning](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [UBC Machine Learning - video](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [Data Science Specialization](https://github.com/DataScienceSpecialization/courses)
- [Coursera Big Data Specialization](https://www.coursera.org/specializations/big-data)
- [Statistical Thinking for Data Science and Analytics by Edx](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI by IBM](https://cognitiveclass.ai/)
- [Udacity - Deep Learning](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras in Motion](https://www.manning.com/livevideo/keras-in-motion)
- [Microsoft Professional Program for Data Science](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246 - Machine Learning Technologies](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231 - Convolutional Neural Networks for Visual Recognition](https://cs231n.github.io/)
- [Coursera Tensorflow in practice](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
- [365 Data Science Course](https://365datascience.com/)
- [Coursera Natural Language Processing Specialization](https://www.coursera.org/specializations/natural-language-processing)
- [Coursera GAN Specialization](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Codecademy's Data Science](https://www.codecademy.com/learn/paths/data-science)
- [Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - Курс линейной алгебры Гилберта Стрэнга.
- [A 2020 Vision of Linear Algebra (G. Strang)](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Python for Data Science Foundation Course](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [Data Science: Statistics & Machine Learning](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [Machine Learning Engineering for Production (MLOps)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [Recommender Systems Specialization from University of Minnesota](https://www.coursera.org/specializations/recommender-systems) is an intermediate/advanced level specialization focused on Recommender System on the Coursera platform.
- [Stanford Artificial Intelligence Professional Program](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [Data Scientist with Python](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Programming with Julia](https://www.udemy.com/course/programming-with-julia/)
- [Scaler Data Science & Machine Learning Program](https://www.scaler.com/data-science-course/)
- [Data Science Skill Tree](https://labex.io/skilltrees/data-science)
- [Data Science for Beginners - Learn with AI tutor](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [Machine Learning for Beginners - Learn with AI tutor](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [Introduction to Data Science](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[Getting Started with Python for Data Science](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Google Advanced Data Analytics Certificate](https://grow.google/data-analytics/) Профессиональные курсы по анализу данных, статистике и основам машинного обучения.
- [Maschinelle Sprachgebrauchsanalyse - Grundlagen der Korpuslinguistik](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - Учебные материалы по интеллектуальному анализу текста и корпусной лингвистике на немецком языке; финансируются землёй Северный Рейн — Вестфалия.
- [Programmieren für Germanist*innen](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - Учебные материалы по программированию на Python на немецком языке для цифровых гуманитарных наук; финансируются землёй Северный Рейн — Вестфалия.
- [QuiddityML](https://quiddityml.com/?utm_source=github&utm_medium=awesome&utm_campaign=awesome-datascience) - Короткие уроки с практическими упражнениями и интервальным повторением: Python, PyTorch, математика для ML, основы машинного обучения, NLP и компьютерное зрение.

### Интенсивные программы
**[`^        наверх        ^`](#awesome-data-science)**
- [Great Learning Data Science Programs](https://www.mygreatlearning.com/data-science/courses) - A collection of online data science and analytics certificate, postgraduate, and degree programs.
- [S2DS](https://www.s2ds.org/)
- [WorldQuant University Applied Data Science Lab](https://www.wqu.edu/adsl)


### Колледжи
**[`^        наверх        ^`](#awesome-data-science)**

- [A list of colleges and universities offering degrees in data science.](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [Data Science Degree @ Berkeley](https://ischoolonline.berkeley.edu/data-science/)
- [Data Science Degree @ UVA](https://datascience.virginia.edu/)
- [Data Science Degree @ Wisconsin](https://datasciencedegree.wisconsin.edu/)
- [BS in Data Science & Applications](https://study.iitm.ac.in/ds/)
- [MS in Computer Information Systems @ Boston University](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [MS in Business Analytics @ ASU Online](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [MS in Applied Data Science @ Syracuse](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [M.S. Management & Data Science @ Leuphana](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [Master of Data Science @ Melbourne University](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [Msc in Data Science @ The University of Edinburgh](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Master of Management Analytics @ Queen's University](https://smith.queensu.ca/grad_studies/mma/index.php)
- [Master of Data Science @ Illinois Institute of Technology](https://www.iit.edu/academics/programs/data-science-mas)
- [Master of Applied Data Science @ The University of Michigan](https://www.si.umich.edu/programs/master-applied-data-science)
- [Master Data Science and Artificial Intelligence @ Eindhoven University of Technology](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [Master's Degree in Data Science and Computer Engineering @ University of Granada](https://masteres.ugr.es/datcom/)

## Инструментарий Data Science
**[`^        наверх        ^`](#awesome-data-science)**

В этом разделе собраны пакеты, инструменты, алгоритмы и другие полезные ресурсы из мира Data Science.

### Алгоритмы
**[`^        наверх        ^`](#awesome-data-science)**

Это некоторые алгоритмы и модели машинного обучения и интеллектуального анализа данных, которые помогают понять данные и извлечь из них смысл.

#### Три вида систем машинного обучения

- Основанные на обучении под контролем человека
- Основанные на постепенном обучении на лету
- Основанные на сравнении точек данных и обнаружении закономерностей

### Сравнение
- [datacompy](https://github.com/capitalone/datacompy) - DataComPy — пакет для сравнения двух объектов DataFrame библиотеки Pandas.

#### Обучение с учителем

- [Regression](https://en.wikipedia.org/wiki/Regression)
- [Linear Regression](https://en.wikipedia.org/wiki/Linear_regression)
- [Ordinary Least Squares](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [Logistic Regression](https://en.wikipedia.org/wiki/Logistic_regression)
- [Stepwise Regression](https://en.wikipedia.org/wiki/Stepwise_regression)
- [Multivariate Adaptive Regression Splines](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [Softmax Regression](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [Locally Estimated Scatterplot Smoothing](https://en.wikipedia.org/wiki/Local_regression)
- Классификация
  - [k-nearest neighbor](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [Support Vector Machines](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [Decision Trees](https://en.wikipedia.org/wiki/Decision_tree)
  - [ID3 algorithm](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [C4.5 algorithm](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [Ensemble Learning](https://scikit-learn.org/stable/modules/ensemble.html)
  - [Boosting](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [Stacking](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [Bagging](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [Random Forest](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### Обучение без учителя
- [Clustering](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [Hierchical clustering](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-means](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [Density-based clustering](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [Fuzzy clustering](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [Mixture models](https://en.wikipedia.org/wiki/Mixture_model)
- [Dimension Reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [Principal Component Analysis (PCA)](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE; t-distributed Stochastic Neighbor Embedding](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [Factor Analysis](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [Latent Dirichlet Allocation (LDA)](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [Neural Networks](https://en.wikipedia.org/wiki/Neural_network)
- [Self-organizing map](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Adaptive resonance theory](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [Hidden Markov Models (HMM)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### Полуобучение с учителем

- S3VM
- [Clustering](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [Generative models](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [Low-density separation](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [Laplacian regularization](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [Heuristic approaches](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### Обучение с подкреплением

- [Q Learning](https://en.wikipedia.org/wiki/Q-learning)
- [SARSA (State-Action-Reward-State-Action) algorithm](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [Temporal difference learning](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### Алгоритмы интеллектуального анализа данных

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-Means](https://en.wikipedia.org/wiki/K-means_clustering)
- [SVM (Support Vector Machine)](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM (Expectation-Maximization)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN (K-Nearest Neighbors)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART (Classification and Regression Trees)](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### Современные алгоритмы интеллектуального анализа данных

- [XGBoost (Extreme Gradient Boosting)](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM (Light Gradient Boosting Machine)](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise)](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth (Frequent Pattern Growth Algorithm)](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [Isolation Forest](https://en.wikipedia.org/wiki/Isolation_forest)
- [Deep Embedded Clustering (DEC)](https://arxiv.org/abs/1511.06335)
- [TPU (Top-k Periodic and High-Utility Patterns)](https://arxiv.org/abs/2509.15732)
- [Context-Aware Rule Mining (Transformer-Based Framework)](https://arxiv.org/abs/2503.11125)


#### Архитектуры глубокого обучения

- [Multilayer Perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [Convolutional Neural Network (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [Recurrent Neural Network (RNN)](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [Boltzmann Machines](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [Autoencoder](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [Generative Adversarial Network (GAN)](https://developers.google.com/machine-learning/gan/gan_structure)
- [Self-Organized Maps](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformer](https://www.tensorflow.org/text/tutorials/transformer)
- [Conditional Random Field (CRF)](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [ML System Designs)](https://www.evidentlyai.com/ml-system-design)

### Универсальные пакеты машинного обучения
**[`^        наверх        ^`](#awesome-data-science)**

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
* [me_fasttext](https://github.com/initial-d/me_fasttext) - Экономичная по памяти версия FastText с точными идентификаторами trie n-грамм, совместным использованием строк и обслуживанием через mmap для NLP со словарями большого размера.
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
* [jSciPy](https://github.com/hissain/jscipy) - A Java port of SciPy's signal processing module, offering filters, transformations, and other scientific computing utilities.
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
* [PhilanthroPy](https://github.com/PhilanthroPy-Project/PhilanthroPy) - Набор инструментов на базе scikit-learn для аналитики сбора средств некоммерческими организациями: оценки склонности доноров, оттока, планируемых пожертвований, благосостояния и прогноза доходов без утечки данных.



### Пакеты глубокого обучения

#### Экосистема PyTorch
* [PyTorch](https://github.com/pytorch/pytorch)
* [TorchDR](https://github.com/TorchDR/TorchDR) - Снижение размерности на GPU и нескольких GPU с API, совместимым со scikit-learn.
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
* [OpenLanguageModel](https://github.com/openlanguagemodel/openlanguagemodel) - Библиотека на базе PyTorch для создания, обучения и преподавания языковых моделей-трансформеров; архитектуры реализованы как обычные nn.Module.

#### Экосистема TensorFlow
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

#### Экосистема Keras

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### Инструменты визуализации
**[`^        наверх        ^`](#awesome-data-science)**

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
- [MetaReview](https://metareview-8c1.pages.dev/) - Бесплатная онлайн-платформа метаанализа с 11 интерактивными статистическими диаграммами D3.js (forest plot, funnel plot, Galbraith, L’Abbé, Baujat и др.), 5 мерами размера эффекта, ИИ-отбором литературы и экспортом готовых к публикации отчётов. [github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - Интерактивный инструмент в блокноте для визуализации прямого прохода любой модели PyTorch.
- [FlexViz](https://github.com/flex-analytics/flexviz) - Библиотека Python для интерактивных панелей с перекрёстной фильтрацией, сохраняющих быстродействие на 100+ млн строк благодаря агрегации Polars на сервере.

### Разные инструменты
**[`^        наверх        ^`](#awesome-data-science)**

| Ссылка | Описание |
| --- | --- |
| [The Data Science Lifecycle Process](https://github.com/dslp/dslp) | Процесс, который помогает командам Data Science устойчиво проходить путь от идеи до результата снова и снова. |
| [Data Science Lifecycle Template Repo](https://github.com/dslp/dslp-repo-template) | Шаблонный репозиторий для проектов, проходящих жизненный цикл Data Science. |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | Генерация синтетических табличных данных с помощью GAN, диффузионных моделей и LLM, с состязательной фильтрацией и метриками приватности. |
| [RexMex](https://github.com/AstraZeneca/rexmex) | Универсальная библиотека метрик рекомендательных систем для объективной оценки. |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | Библиотека глубокого обучения на базе PyTorch для оценки пар лекарственных соединений. |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | Безопасный обмен файлами с шифрованием с нулевым разглашением (AES-256-GCM в браузере). Учётная запись не нужна; лицензия MIT, можно разместить самостоятельно, срок ссылки можно ограничить. |
| [CorpusExplorer](https://corpusexplorer.de/) | Программа для специалистов по корпусной лингвистике и интеллектуальному анализу текста и данных. Создавайте корпуса на более чем 60 языках и используйте свыше 50 инструментов и визуализаций. |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | Обучение представлений на динамических графах. |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | Библиотека выборки графов для NetworkX с API, похожим на Scikit-Learn. |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | Библиотека обучения без учителя для NetworkX с API, похожим на Scikit-Learn. |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | Универсальная веб-среда разработки для машинного обучения и Data Science. Рабочая среда в Docker содержит популярные библиотеки и инструменты, например TensorFlow, PyTorch, Jupyter и VS Code. |
| [xonsh shell](https://github.com/xonsh/xonsh) | Оболочка на Python для интеграции и оркестрации библиотек Data Science и создания конвейеров, кода и командных рабочих процессов. Также может работать как ядро Jupyter Notebook. |
| [Neptune.ai](https://neptune.ai) | Платформа, помогающая специалистам по данным создавать модели машинного обучения и делиться ими. Упрощает командную работу, управление инфраструктурой, сравнение моделей и воспроизводимость. |
| [steppy](https://github.com/minerva-ml/steppy) | Лёгкая библиотека Python для быстрых и воспроизводимых экспериментов с машинным обучением. Простой интерфейс помогает проектировать понятные конвейеры. |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | Подборка нейронных сетей, трансформеров и моделей, ускоряющих работу с машинным обучением. |
| [Datalab from Google](https://cloud.google.com/datalab/docs/) | Интерактивно исследуйте, визуализируйте, анализируйте и преобразуйте данные на привычных языках, например Python и SQL. |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | Персональная переносимая среда Hadoop с дюжиной интерактивных учебных руководств. |
| [R](https://www.r-project.org/) | Бесплатная программная среда для статистических вычислений и графики. |
| [Tidyverse](https://www.tidyverse.org/) | Подборка пакетов R, разработанная специально для Data Science и объединённая общей философией, грамматикой и структурами данных. |
| [RStudio](https://www.rstudio.com) | Мощная среда разработки для R с удобным интерфейсом. Бесплатная, с открытым исходным кодом; работает в Windows, Mac и Linux. |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | Бесплатный дистрибутив Python корпоративного уровня для крупномасштабной обработки данных, предиктивной аналитики и научных вычислений. |
| [Pandas GUI](https://github.com/adrotog/PandasGUI) | Графический интерфейс для Pandas. |
| [NuriStat](https://github.com/baramgay/stat) | Бесплатная открытая альтернатива SPSS: настольная статистика с управлением через меню (t-тесты, ANOVA, регрессия, анализ выживаемости, ROC), импорт и экспорт .sav. |
| [Polars](https://github.com/pola-rs/polars) | Быстрая библиотека DataFrame для Rust и Python, созданная как более производительная альтернатива Pandas. |
| [CiteMe](https://citeme.app) | Бесплатный генератор академических ссылок со встроенной проверкой, выявляющей вымышленные источники. Ищет в 11+ научных базах, поддерживает 40+ стилей цитирования и публичный API. Регистрация не нужна; доступен на английском, испанском, португальском, французском и немецком. |
| [Scikit-Learn](https://scikit-learn.org/stable/) | Машинное обучение на Python. |
| [NumPy](https://numpy.org/) | Фундаментальная библиотека научных вычислений на Python. Поддерживает большие многомерные массивы и матрицы и включает математические функции для работы с ними. |
| [Vaex](https://vaex.io/) | Библиотека Python для визуализации больших наборов данных и быстрого вычисления статистики. |
| [SciPy](https://scipy.org/) | Работает с массивами NumPy и предоставляет эффективные средства численного интегрирования и оптимизации. |
| [Data Science Toolbox](https://www.coursera.org/learn/data-scientists-tools) | Курс Coursera. |
| [Data Science Toolbox](https://datasciencetoolbox.org/) | Блог. |
| [Wolfram Data Science Platform](https://www.wolfram.com/data-science-platform/) | Обрабатывайте числовые, текстовые, графические, геоинформационные и другие данные с помощью Wolfram: проводите анализ и визуализацию Data Science и автоматически создавайте интерактивные отчёты на языке Wolfram Language. |
| [Datadog](https://www.datadoghq.com/) | Решения, код и DevOps для масштабной Data Science. |
| [Variance](https://variancecharts.com/) | Создавайте мощные веб-визуализации данных без JavaScript. |
| [Kite Development Kit](https://kitesdk.org/docs/current/index.html) | Комплект разработки ПО Kite (Apache 2.0) — набор библиотек, инструментов, примеров и документации, упрощающий создание систем на основе Hadoop. |
| [Domino Data Labs](https://www.dominodatalab.com) | Запускайте, масштабируйте, публикуйте и развёртывайте модели без настройки инфраструктуры. |
| [Apache Flink](https://flink.apache.org/) | Платформа эффективной распределённой обработки данных общего назначения. |
| [Apache Hama](https://hama.apache.org/) | Проект Apache верхнего уровня с открытым исходным кодом для расширенной аналитики за пределами MapReduce. |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Набор алгоритмов машинного обучения для задач интеллектуального анализа данных. |
| [Octave](https://www.gnu.org/software/octave/) | Интерпретируемый язык высокого уровня прежде всего для численных вычислений. Бесплатная альтернатива MATLAB. |
| [Apache Spark](https://spark.apache.org/) | Молниеносные кластерные вычисления. |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | Сервис для публикации заданий Apache Spark и моделей машинного обучения как веб-служб реального времени, пакетных или реактивных. |
| [Data Mechanics](https://www.datamechanics.co) | Платформа Data Science и инженерии данных, делающая Apache Spark удобнее для разработчиков и экономичнее. |
| [Caffe](https://caffe.berkeleyvision.org/) | Фреймворк глубокого обучения. |
| [Torch](https://torch.ch/) | Фреймворк научных вычислений для LuaJIT. |
| [Nervana's python based Deep Learning Framework](https://github.com/NervanaSystems/neon) | Эталонный фреймворк глубокого обучения Intel® Nervana™, обеспечивающий высокую производительность на любом оборудовании. |
| [Skale](https://github.com/skale-me/skale) | Высокопроизводительная распределённая обработка данных на Node.js. |
| [Aerosolve](https://airbnb.io/aerosolve/) | Библиотека машинного обучения, созданная для людей. |
| [Intel framework](https://github.com/intel/idlf) | Фреймворк глубокого обучения Intel®. |
| [Datawrapper](https://www.datawrapper.de/) | Платформа визуализации данных с открытым исходным кодом для создания простых, корректных и встраиваемых диаграмм. Также доступна на [GitHub](https://github.com/datawrapper/datawrapper). |
| [Tensor Flow](https://www.tensorflow.org/) | Библиотека ПО с открытым исходным кодом для машинного интеллекта. |
| [Natural Language Toolkit](https://www.nltk.org/) | Доступный начинающим, но мощный инструментарий обработки и классификации естественного языка. |
| [FunASR](https://github.com/modelscope/FunASR) | Промышленный инструментарий распознавания речи с поддержкой 50+ языков, встроенными VAD, пунктуацией, диаризацией говорящих и распознаванием эмоций. Включает API-сервер, совместимый с OpenAI. |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | Бесплатная комплексная платформа без кода для аннотирования текстов и обучения моделей глубокого обучения. Поддерживает NER, классификацию, извлечение отношений и определение статуса утверждений в моделях Spark NLP. Без ограничений на количество пользователей, команд, проектов и документов. |
| [nlp-toolkit for node.js](https://www.npmjs.com/package/nlp-toolkit) | Модуль охватывает основы и реализации NLP с упором на производительность. Поскольку обработка обучающих данных быстро исчерпывает память, реализации используют потоки и хранят только данные текущего шага. |
| [Julia](https://julialang.org) | Динамический язык высокого уровня с высокой производительностью для технических вычислений. |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | Бэкенд на языке Julia, интегрированный с интерактивной средой Jupyter. |
| [Apache Zeppelin](https://zeppelin.apache.org/) | Веб-блокнот для интерактивной аналитики данных и совместной работы с SQL, Scala и другими инструментами. |
| [Featuretools](https://github.com/alteryx/featuretools) | Фреймворк с открытым исходным кодом для автоматизированного конструирования признаков на Python. |
| [Optimus](https://github.com/hi-primus/optimus) | Очистка и подготовка данных, конструирование признаков, исследовательский анализ и упрощённое машинное обучение на базе PySpark. |
| [Albumentations](https://github.com/albumentations-team/albumentations) | Быстрая библиотека аугментации изображений, не привязанная к фреймворку. Поддерживает классификацию, сегментацию и обнаружение и помогла победить в соревнованиях по глубокому обучению на Kaggle, Topcoder и CVPR. |
| [DVC](https://github.com/iterative/dvc) | Система контроля версий для Data Science с открытым исходным кодом. Помогает отслеживать проекты и обеспечивать воспроизводимость; позволяет версионировать и публиковать большие файлы данных и моделей. |
| [Lambdo](https://github.com/asavinov/lambdo) | Движок рабочих процессов, объединяющий в конвейере конструирование признаков, машинное обучение, обучение и прогнозирование, заполнение таблиц и оценку столбцов. |
| [Feast](https://github.com/feast-dev/feast) | Хранилище признаков для управления, поиска и доступа к признакам машинного обучения; обеспечивает единое представление данных при обучении и обслуживании моделей. |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | Платформа воспроизводимого и масштабируемого машинного и глубокого обучения. |
| [UBIAI](https://ubiai.tools) | Удобный инструмент аннотирования текста с широкими функциями автоматической разметки: NER, отношения, классификация документов и OCR-разметка счетов. |
| [Trains](https://github.com/allegroai/clearml) | Автоматический менеджер экспериментов, контроль версий и DevOps для ИИ. |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | Открытая платформа машинного обучения для интенсивной обработки данных со хранилищем признаков. Управляйте признаками для онлайн- (MySQL Cluster) и офлайн-доступа (Apache Hive), обучайте и обслуживайте модели в масштабе. |
| [MindsDB](https://github.com/mindsdb/mindsdb) | Объяснимый фреймворк AutoML для разработчиков: позволяет создавать, обучать и использовать современные модели машинного обучения одной строкой кода. |
| [Lightwood](https://github.com/mindsdb/lightwood) | Фреймворк на базе PyTorch, разбивающий задачи машинного обучения на блоки для создания предиктивных моделей одной строкой кода. |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | Пакет Python с открытым исходным кодом, расширяющий Pandas для подключения DataFrame к сервисам AWS, связанным с данными (Redshift, Glue, Athena, EMR и др.). |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | Сервис AWS для добавления анализа изображений в приложения. Каталогизируйте ресурсы, автоматизируйте процессы и извлекайте смысл из медиаданных. |
| [Amazon Textract](https://aws.amazon.com/textract/) | Автоматически извлекает печатный и рукописный текст и данные из документов. |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | Выявляйте дефекты товаров с помощью компьютерного зрения и автоматизируйте контроль качества: находите отсутствующие компоненты, повреждения и другие отклонения. |
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | Автоматизируйте проверку кода и оптимизируйте производительность приложений с помощью рекомендаций на основе машинного обучения. |
| [CML](https://github.com/iterative/cml) | Набор инструментов с открытым исходным кодом для непрерывной интеграции в Data Science. Обучает и тестирует модели с помощью GitHub Actions и GitLab CI и создаёт визуальные отчёты для pull/merge request. |
| [Dask](https://dask.org/) | Библиотека Python с открытым исходным кодом для простого перехода аналитического кода на распределённые системы (Big Data). |
| [DuckDB](https://github.com/duckdb/duckdb) | Встраиваемая OLAP-СУБД с поддержкой SQL. |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | Среда Python для статистического вывода, проверки гипотез и регрессии. |
| [Gensim](https://radimrehurek.com/gensim/) | Библиотека с открытым исходным кодом для тематического моделирования естественного языка. |
| [spaCy](https://spacy.io/) | Высокопроизводительный инструментарий обработки естественного языка. |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | Веб-таблица с полноценной интеграцией Python. |
|[Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook)| Полный текст руководства по Data Science на Python в блокнотах Jupyter. |
| [Shapley](https://github.com/benedekrozemberczki/shapley) | Фреймворк на основе данных для оценки ценности классификаторов в ансамбле машинного обучения. |
| [DAGsHub](https://dagshub.com) | Платформа на основе открытых инструментов для управления данными, моделями и конвейерами. |
| [Deepnote](https://deepnote.com) | Блокнот для Data Science, совместимый с Jupyter, поддерживающий совместную работу в реальном времени и работу в облаке. |
| [Valohai](https://valohai.com) | Платформа MLOps для оркестрации машин, автоматической воспроизводимости и развёртывания. |
| [PyMC3](https://docs.pymc.io/) | Библиотека Python для вероятностного программирования (байесовского вывода и машинного обучения). |
| [PyStan](https://pypi.org/project/pystan/) | Интерфейс Python для Stan (байесовский вывод и моделирование). |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | Обучение без учителя и вывод для скрытых марковских моделей. |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | Механизм аналитики на базе машинного обучения для обнаружения аномалий и анализа первопричин. |
| [PySAD](https://github.com/selimfirat/pysad) | Библиотека Python для обнаружения аномалий в потоковых данных. |
| [Nimblebox](https://nimblebox.ai/) | Полнофункциональная платформа MLOps, помогающая специалистам по данным находить, создавать и запускать многоклаудные приложения в браузере. |
| [Towhee](https://github.com/towhee-io/towhee) | Библиотека Python для преобразования неструктурированных данных во векторные представления. |
| [LineaPy](https://github.com/LineaLabs/lineapy) | Библиотека Python с открытым исходным кодом, позволяющая двумя строками кода преобразовать неструктурированные блокноты Jupyter в промышленные конвейеры. |
| [envd](https://github.com/tensorchord/envd) | Среда разработки машинного обучения для команд Data Science и инженерии ИИ/МО. |
| [Explore Data Science Libraries](https://kandi.openweaver.com/explore/data-science) | Поисковый инструмент для обнаружения популярных и новых библиотек, ведущих авторов, проектов, обсуждений, учебных материалов и других ресурсов. |
| [MLEM](https://github.com/iterative/mlem) | Версионируйте и развёртывайте модели машинного обучения по принципам GitOps. |
| [MLflow](https://mlflow.org/) | Фреймворк MLOps для управления моделями машинного обучения на всём протяжении жизненного цикла. |
| [cleanlab](https://github.com/cleanlab/cleanlab) | Библиотека Python для ИИ, ориентированного на данные, и автоматического выявления проблем в наборах данных машинного обучения. |
| [AutoGluon](https://github.com/awslabs/autogluon) | AutoML для получения точных прогнозов по изображениям, тексту, таблицам, временным рядам и мультимодальным данным. |
| [Arize AI](https://arize.com/) | Инструмент мониторинга моделей машинного обучения в эксплуатации и анализа проблем качества данных и дрейфа производительности. |
| [Aureo.io](https://aureo.io) | Платформа с небольшим объёмом кода для создания ИИ, конвейеров и автоматизации с интеграцией моделей на основе пользовательских данных. |
| [ERD Lab](https://www.erdlab.io/) | Бесплатный облачный инструмент для создания диаграмм «сущность — связь» (ERD), предназначенный разработчикам. 
| [Arize-Phoenix](https://docs.arize.com/phoenix) | MLOps в блокноте: исследуйте данные, обнаруживайте проблемы, отслеживайте и настраивайте модели. |
| [Comet](https://github.com/comet-ml/comet-examples) | Платформа MLOps с отслеживанием экспериментов, управлением производственными моделями, реестром и полной генеалогией данных от обучения до эксплуатации. |
| [Opik](https://github.com/comet-ml/opik) | Оценивайте, тестируйте и выпускайте приложения на базе LLM в разработке и эксплуатации. |
| [Synthical](https://synthical.com) | Совместная исследовательская среда на базе ИИ: находите статьи, создавайте библиографические подборки и кратко излагайте материалы. |
| [teeplot](https://github.com/mmore500/teeplot) | Инструмент рабочих процессов для автоматической организации результатов визуализации данных. |
| [Streamlit](https://github.com/streamlit/streamlit) | Фреймворк приложений для проектов машинного обучения и Data Science. |
| [Gradio](https://github.com/gradio-app/gradio) | Создавайте настраиваемые компоненты интерфейса для моделей машинного обучения. |
| [Weights & Biases](https://github.com/wandb/wandb) | Отслеживание экспериментов, версионирование наборов данных и управление моделями. |
| [DVC](https://github.com/iterative/dvc) | Система контроля версий с открытым исходным кодом для проектов машинного обучения. |
| [Optuna](https://github.com/optuna/optuna) | Фреймворк автоматической оптимизации гиперпараметров. |
| [Ray Tune](https://github.com/ray-project/ray) | Масштабируемая библиотека настройки гиперпараметров. |
| [Apache Airflow](https://github.com/apache/airflow) | Платформа для программного создания, планирования и мониторинга рабочих процессов. |
| [Prefect](https://github.com/PrefectHQ/prefect) | Система управления рабочими процессами для современных стеков данных. |
| [Kedro](https://github.com/kedro-org/kedro) | Фреймворк Python с открытым исходным кодом для воспроизводимого и удобного в сопровождении кода Data Science. |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | Лёгкая библиотека для создания и управления надёжными преобразованиями данных. |
| [SHAP](https://github.com/slundberg/shap) | Теоретико-игровой подход к объяснению результатов моделей машинного обучения. |
| [InterpretML](https://github.com/interpretml/interpret) | InterpretML реализует Explainable Boosting Machine (EBM) — современную интерпретируемую модель машинного обучения на основе обобщённых аддитивных моделей (GAM). Пакет также предоставляет средства визуализации для EBM, прозрачных моделей и объяснения моделей типа «чёрный ящик». |
| [LIME](https://github.com/marcotcr/lime) | Объяснение предсказаний любого классификатора машинного обучения. |
| [flyte](https://github.com/flyteorg/flyte) | Платформа автоматизации рабочих процессов машинного обучения. |
| [dbt](https://github.com/dbt-labs/dbt-core) | Инструмент сборки данных. |
| [zasper](https://github.com/zasper-io/zasper) | Усовершенствованная среда разработки для Data Science. |
| [skrub](https://github.com/skrub-data/skrub/) | Библиотека Python, упрощающая подготовку данных и конструирование признаков для табличного машинного обучения. |
| [Glyph](https://github.com/Koda-OSS/Glyph) | Независимая от фреймворка библиотека TypeScript для создания и поиска отпечатков MinHash и быстрого выявления текстового сходства, дедупликации и поиска. |
| [Codeflash](https://www.codeflash.ai/) | Создавайте молниеносно быстрый код Python — каждый раз. |
| [Hugging Face](https://huggingface.co/) | Популярная открытая платформа для обмена моделями машинного обучения и наборами данных и совместной работы над NLP и генеративным ИИ. |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | Проект с открытым исходным кодом, который строит сети связей и интерактивные графы, разбирая общедоступные данные с помощью LLM. |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | Профилировщик данных с открытым исходным кодом для обнаружения и проверки сложных закономерностей, включая [числовые правила ассоциаций](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb), [дифференциальные зависимости](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb), [ограничения отрицания](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb) и другие. |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | Инструментарий анализа личного генома с помощью Python-скриптов, обрабатывающих исходную ДНК. |
| [RunMat](https://github.com/runmat-org/runmat) | Среда выполнения с синтаксисом MATLAB, автоматически запускающая вычисления на CPU или GPU и объединяющая операции с массивами. |
| [Turbostream](https://github.com/turboline-ai/turbostream) | Терминальный интерфейс для экспериментов с движками правил и выборочным анализом потоков данных в реальном времени с помощью LLM, без настройки потоковой инфраструктуры и борьбы с обратным давлением. |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | Каталог 16 типичных сбоев в конвейерах LLM и RAG с наблюдаемыми симптомами и предлагаемыми исправлениями для команд Data Science. |
| [Deploybase](https://deploybase.ai/) | Отслеживание цен на GPU и LLM в реальном времени у облачных и инференс-провайдеров. |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | Агентная LLM для автономной Data Science, способная без участия человека выполнять широкий спектр задач этой области. |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | Сверхчеловеческий исследовательский анализ данных: находит взаимодействия признаков и эффекты подгрупп в табличных данных, которые пропускают LLM и ручной анализ, и приводит p-значения, размеры эффектов и ссылки на литературу. Бесплатно для открытых данных. |
| [AI for Database](https://aifordatabase.com) | Общайтесь с базой данных на естественном языке — SQL не нужен. Получайте мгновенные выводы, создавайте автоматически обновляемые панели и запускайте рабочие процессы при изменении базы. |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | Торговый бот для криптовалют на базе ИИ с нейронной сетью LSTM (точность 84,6%). Обнаружение пампов в реальном времени, модели с проверкой на скользящем окне и поддержка Bybit, Binance, OKX и Gate.io. Открытый исходный код. |
| [Future AGI](https://github.com/future-agi/future-agi) | Платформа с открытым исходным кодом для моделирования, оценки, трассировки, защиты, маршрутизации и оптимизации приложений LLM и ИИ-агентов в одном цикле обратной связи, чтобы агенты постоянно улучшались. Можно разместить самостоятельно. Apache-2.0. |
| [ipynbtopdf](https://ipynbtopdf.xyz/) | Браузерный просмотрщик блокнотов Jupyter и экспортер, преобразующий `.ipynb` в PDF, HTML и Python без установки Python или TeX. |



## Литература и медиа
**[`^        наверх        ^`](#awesome-data-science)**

В этом разделе собраны дополнительные материалы для чтения, каналы для просмотра и выступления для прослушивания.

### Книги
**[`^        наверх        ^`](#awesome-data-science)**

- [Data Science From Scratch: First Principles with Python](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [Artificial Intelligence with Python - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [Machine Learning from Scratch](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [Probabilistic Machine Learning: An Introduction](https://probml.github.io/pml-book/book1.html)
- [How to Lead in Data Science](https://www.manning.com/books/how-to-lead-in-data-science) - ранний доступ
- [Fighting Churn With Data](https://www.manning.com/books/fighting-churn-with-data)
- [Data Science at Scale with Python and Dask](https://www.manning.com/books/data-science-with-python-and-dask)
- [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [The Data Science Handbook: Advice and Insights from 25 Amazing Data Scientists](https://www.thedatasciencehandbook.com/)
- [Think Like a Data Scientist](https://www.manning.com/books/think-like-a-data-scientist)
- [Introducing Data Science](https://www.manning.com/books/introducing-data-science)
- [Practical Data Science with R](https://www.manning.com/books/practical-data-science-with-r)
- [Everyday Data Science](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(cheaper PDF version)](https://gum.co/everydaydata)
- [Exploring Data Science](https://www.manning.com/books/exploring-data-science) - бесплатный ознакомительный фрагмент электронной книги
- [Exploring the Data Jungle](https://www.manning.com/books/exploring-the-data-jungle) - бесплатный ознакомительный фрагмент электронной книги
- [Classic Computer Science Problems in Python](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [Math for Programmers](https://www.manning.com/books/math-for-programmers) - ранний доступ
- [R in Action, Third Edition](https://www.manning.com/books/r-in-action-third-edition) - ранний доступ
- [Data Science Bookcamp](https://www.manning.com/books/data-science-bookcamp) - ранний доступ
- [Data Science Thinking: The Next Scientific, Technological and Economic Revolution](https://www.springer.com/gp/book/9783319950914)
- [Applied Data Science: Lessons Learned for the Data-Driven Business](https://www.springer.com/gp/book/9783030118204)
- [The Data Science Handbook](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [Essential Natural Language Processing](https://www.manning.com/books/getting-started-with-natural-language-processing) - ранний доступ
- [Mining Massive Datasets](https://www.mmds.org/) - бесплатная электронная книга, дополняемая онлайн-курсом
- [Pandas in Action](https://www.manning.com/books/pandas-in-action) - ранний доступ
- [Genetic Algorithms and Genetic Programming](https://www.taylorfrancis.com/books/9780429141973)
- [Advances in Evolutionary Algorithms](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - бесплатная загрузка
- [Genetic Programming: New Approaches and Successful Applications](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - бесплатная загрузка
- [Evolutionary Algorithms](https://www.intechopen.com/books/evolutionary-algorithms) - бесплатная загрузка
- [Advances in Genetic Programming, Vol. 3](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - бесплатная загрузка
- [Genetic Algorithms and Evolutionary Computation](https://www.talkorigins.org/faqs/genalg/genalg.html) - бесплатная загрузка
- [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - Книга о выпуклой оптимизации Стивена Бойда — бесплатная загрузка
- [Data Analysis with Python and PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - ранний доступ
- [R for Data Science](https://r4ds.had.co.nz/)
- [Build a Career in Data Science](https://www.manning.com/books/build-a-career-in-data-science)
- [Machine Learning Bookcamp](https://mlbookcamp.com/) - ранний доступ
- [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [Effective Data Science Infrastructure](https://www.manning.com/books/effective-data-science-infrastructure)
- [Practical MLOps: How to Get Ready for Production Models](https://valohai.com/mlops-ebook/)
- [Data Analysis with Python and PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [Regression, a Friendly guide](https://www.manning.com/books/regression-a-friendly-guide) - ранний доступ
- [Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [Data Science at the Command Line: Facing the Future with Time-Tested Tools](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [Machine Learning with Python - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [Deep Learning](https://www.deeplearningbook.org/)
- [Designing Cloud Data Platforms](https://www.manning.com/books/designing-cloud-data-platforms) - ранний доступ
- [An Introduction to Statistical Learning with Applications in R](https://www.statlearning.com/)
- [The Elements of Statistical Learning: Data Mining, Inference, and Prediction](https://hastie.su.domains/ElemStatLearn/)
- [Deep Learning with PyTorch](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [Neural Networks and Deep Learning](https://neuralnetworksanddeeplearning.com)
- [Deep Learning Cookbook](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [Introduction to Machine Learning with Python](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [Artificial Intelligence: Foundations of Computational Agents, 2nd Edition](https://artint.info/index.html) - бесплатная HTML-версия
- [The Quest for Artificial Intelligence: A History of Ideas and Achievements](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - бесплатная загрузка
- [Graph Algorithms for Data Science](https://www.manning.com/books/graph-algorithms-for-data-science) - ранний доступ
- [Data Mesh in Action](https://www.manning.com/books/data-mesh-in-action) - ранний доступ
- [Julia for Data Analysis](https://www.manning.com/books/julia-for-data-analysis) - ранний доступ
- [Casual Inference for Data Science](https://www.manning.com/books/julia-for-data-analysis) - ранний доступ
- [Regular Expression Puzzles and AI Coding Assistants](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants) - автор — Дэвид Мерц
- [Dive into Deep Learning](https://d2l.ai/)
- [Data for All](https://www.manning.com/books/data-for-all)
- [Interpretable Machine Learning: A Guide for Making Black Box Models Explainable](https://christophm.github.io/interpretable-ml-book/) - бесплатная версия на GitHub
- [Foundations of Data Science](https://www.cs.cornell.edu/jeh/book.pdf) - бесплатная загрузка
- [Comet for DataScience: Enhance your ability to manage and optimize the life cycle of your data science project](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [Software Engineering for Data Scientists](https://www.manning.com/books/software-engineering-for-data-scientists) - Early Access
- [Julia for Data Science](https://www.manning.com/books/julia-for-data-science) - Early Access
- [An Introduction to Statistical Learning](https://www.statlearning.com/) - страница загрузки
- [Machine Learning For Absolute Beginners](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [Unifying Business, Data, and Code: Designing Data Products with JSON Schema](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [Grokking Bayes](https://www.manning.com/books/grokking-bayes)
- [Machine Learning Q and AI](https://sebastianraschka.com/books/ml-q-and-ai)
- [JavaScript for Data Science](https://third-bit.com/js4ds/) - бесплатная HTML-страница
- [Angewandte Data Science](https://angewandtedatascience.de/) - книга о прикладной Data Science на немецком языке
- [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - Бесплатная книга FreeCodeCamp, объясняющая математику ИИ простым языком с инженерной точки зрения.
- [Executive Data Science](https://leanpub.com/eds) - Краткое руководство по управлению командами и проектами Data Science.
- [Introduction to Modern Statistics](https://leanpub.com/imstat) - Современный учебник по статистике с упором на применение в Data Science.
- [The Art of Data Science](https://bookdown.org/rdpeng/artofdatascience/) - О «искусстве» анализа данных: как задавать правильные вопросы и уточнять их.

#### Скидки на книги (по партнёрской ссылке)

- [eBook sale - Save up to 45% on eBooks!](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [Causal Machine Learning](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b
)
- [Managing ML Projects](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [Causal Inference for Data Science](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [Data for All](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### Журналы, публикации и периодика
**[`^        наверх        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - Международная конференция по машинному обучению.
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - Конференция по генетическим и эволюционным вычислениям (GECCO).
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [Journal of Data Science](https://jds-online.org/journal/JDS) - Международный журнал, посвящённый широкому применению статистических методов.
- [Big Data Research](https://www.journals.elsevier.com/big-data-research)
- [Journal of Big Data](https://journalofbigdata.springeropen.com/)
- [Big Data & Society](https://journals.sagepub.com/home/bds)
- [Data Science Journal](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - Как Hacker News, но о данных.
- [Data Science Trello Board](https://trello.com/b/rbpEfMld/data-science)
- [Medium Data Science Topic](https://medium.com/tag/data-science) - Публикации на Medium о Data Science.
- [Towards Data Science Genetic Algorithm Topic](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) Публикации о генетических алгоритмах в Towards Data Science.
- [Maxim AI](https://getmaxim.ai). Инструмент симуляции, оценки и наблюдаемости ИИ-агентов.
- [8bitconcepts](https://8bitconcepts.com/) - Исследования индустрии ИИ и аналитика: ценообразование, внедрение в компаниях, фреймворки оценки.

### Рассылки
**[`^        наверх        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - Подборка новостей об ИИ от лидеров отрасли: модели, финансирование, политика и применение. Три выпуска в неделю с 2017 года, более 40 тысяч подписчиков.
- [DataTalks.Club](https://datatalks.club). Еженедельная рассылка о новостях, связанных с данными. [Архив](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa).
- [The Analytics Engineering Roundup](https://roundup.getdbt.com/about). Рассылка о Data Science. [Архив](https://roundup.getdbt.com/archive).
- [Techpresso](https://dupple.com/techpresso). Бесплатная ежедневная рассылка о событиях в ИИ, машинном обучении и технологиях. [Архив](https://dupple.com/techpresso).
- [DiamantAI](https://diamantai.substack.com). Практическая инженерия ИИ и генеративный ИИ простыми словами: RAG, агенты и шаблоны приложений LLM.
- [Bamboo Weekly](https://www.bambooweekly.com) - Еженедельные упражнения по pandas на основе текущих событий и реальных открытых данных с подробными решениями. Выпуски старше двух лет и первые два вопроса с ответами в текущих выпусках бесплатны. [Архив](https://www.bambooweekly.com/archive/).

### Списки рассылки
**[`^        наверх        ^`](#awesome-data-science)**
- [Working Group - Research Software Engineering in the Digital Humanities](https://www.listserv.dfn.de/sympa/info/ag-dhrse). Рассылка рабочей группы по разработке исследовательского ПО в цифровых гуманитарных науках (DH-RSE).

### Блогеры
**[`^        наверх        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - Архив публикаций Уэса Маккинни.
- [Matthew Russell](https://miningthesocialweb.com/) - Интеллектуальный анализ социальных сетей.
- [Greg Reda](https://www.gregreda.com/) - Личный блог Грега Реды.
- [Julia Evans](https://jvns.ca/) - Выпускница Recurse Center.
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - Личная веб-страница.
- [Sean J. Taylor](https://seanjtaylor.com/) - Личная веб-страница.
- [Drew Conway](https://drewconway.com/) - Личная веб-страница.
- [Hilary Mason](https://hilarymason.com/) - Личная веб-страница.
- [Noah Iliinsky](https://complexdiagrams.com/) - Личный блог.
- [Matt Harrison](https://hairysun.com/) - Личный блог.
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Science.
- [Prash Chan](https://www.mdmgeek.com/) - Технологический блог об управлении основными данными и обо всём, что с ним связано.
- [Clare Corthell](https://datasciencemasters.org/) - Магистратура по Data Science с открытым исходным кодом.
- [Datawrangling](https://www.datawrangling.org) - Машинное обучение, интеллектуальный анализ данных и многое другое.
- [Quora Data Science](https://www.quora.com/topic/Data-Science) - Вопросы и ответы по Data Science от экспертов.
- [Siah](https://openresearch.wordpress.com/) - Аспирантка в Беркли.
- [Louis Dorard](https://www.ownml.co/blog/) - Специалист по технологиям, увлечённый вебом и большими и малыми данными.
- [Machine Learning Mastery](https://machinelearningmastery.com/) - Помогает профессиональным программистам уверенно применять алгоритмы машинного обучения для решения сложных задач.
- [Daniel Forsyth](https://www.danielforsyth.me/) - Личный блог.
- [Data Science Weekly](https://www.datascienceweekly.org/) - Еженедельный блог новостей.
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - Блог о Data Science.
- [R Bloggers](https://www.r-bloggers.com/) - Блогеры R.
- [The Practical Quant](https://practicalquant.blogspot.com/) - Большие данные.
- [Yet Another Data Blog](https://yet-another-data-blog.blogspot.com/) - Ещё один блог о данных.
- [KD Nuggets](https://www.kdnuggets.com/) - Интеллектуальный анализ данных, аналитика, большие данные и Data Science: не блог, а портал.
- [Meta Brown](https://www.metabrown.com/blog/) - Личный блог.
- [Data Scientist](https://datascientists.com/) - Создаёт сообщество специалистов по данным.
- [WhatSTheBigData](https://whatsthebigdata.com/) - Блог о влиянии больших данных на информационные технологии, бизнес, государственные учреждения и нашу жизнь.
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - Magnus Notitia.
- [New Data Scientist](https://newdatascientist.blogspot.com/) - Как социальный учёный погружается в мир больших данных.
- [Harvard Data Science](https://harvarddatascience.com/) - Заметки о статистических вычислениях и визуализации.
- [Data Science 101](https://ryanswanstrom.com/datascience101/) - Изучение профессии специалиста по данным.
- [Kaggle Past Solutions](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [NYC Taxi Visualization Blog](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [Digital transformation](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Data Mania Blog](https://www.data-mania.com/blog/) - [The File Drawer](https://chris-said.io/) — научный блог Криса Саида.
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
- [FlowingData](https://flowingdata.com/) - Визуализация и статистика.
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O'reilly Learning Blog](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - Блог о мастерстве машинного обучения.
- [Vademecum of Practical Data Science](https://datasciencevademecum.wordpress.com/) - Справочник и рецепты решений реальных задач на основе данных.
- [Dataconomy](https://dataconomy.com/) - Блог о формирующейся экономике данных.
- [Springboard](https://www.springboard.com/blog/) - Блог с ресурсами для изучающих Data Science.
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - Полноценный сайт с учебными материалами по Data Science и аналитике.
- [Occam's Razor](https://www.kaushik.net/avinash/) - Специализация — веб-аналитика.
- [Data School](https://www.dataschool.io/) - Учебные материалы по Data Science для начинающих!
- [Colah's Blog](https://colah.github.io) - Блог о понимании нейронных сетей!
- [Sebastian's Blog](https://ruder.io/#open) - Блог о NLP и трансферном обучении!
- [Distill](https://distill.pub) - Посвящён понятным объяснениям машинного обучения!
- [Chris Albon's Website](https://chrisalbon.com/) - Заметки о Data Science и ИИ.
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - Data Science на экзотических языках программирования.
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - Блог об эволюционных алгоритмах.
- [Jingles](https://jinglescode.github.io/) - Обзоры научных статей и краткое изложение ключевых идей.
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - Блокноты Data Science.
- [Loic Tetrel](https://ltetrel.github.io/) - Блог о Data Science.
- [Chip Huyen's Blog](https://huyenchip.com/blog/) - Инженерия машинного обучения, MLOps и применение ML в стартапах.
- [Maria Khalusova](https://www.mariakhalusova.com/) - Блог о Data Science.
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - Блог о машинном и глубоком обучении и Data Science.
- [Santiago Basulto](https://medium.com/@santiagobasulto) - Data Science с Python.
- [Akhil Soni](https://medium.com/@akhil0435) - Машинное и глубокое обучение, Data Science.
- [Akhil Soni](https://akhilworld.hashnode.dev/) - Машинное и глубокое обучение, Data Science.
- [Applied AI Blogs](https://www.appliedaicourse.com/blog/) - Подробные статьи об ИИ, машинном обучении и Data Science с практическими примерами.
- [Scaler Blogs](https://www.scaler.com/blog/) - Учебные материалы по разработке ПО, ИИ и карьерному росту в технологиях.
- [Mlu github](https://mlu-explain.github.io/) - MLU создан Amazon для сообщества машинного обучения; здесь можно изучить всё от основ с помощью интерактивных диаграмм.
- [Jan Oliver Rüdiger](https://notesjor.de/) - Машинное и глубокое обучение, Data Science с упором на интеллектуальный анализ текста и данных.

### Презентации
**[`^        наверх        ^`](#awesome-data-science)**

- [How to Become a Data Scientist](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [Introduction to Data Science](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [Intro to Data Science for Enterprise Big Data](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [How to Interview a Data Scientist](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [How to Share Data with a Statistician](https://github.com/jtleek/datasharing)
- [The Science of a Great Career in Data Science](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [What Does a Data Scientist Do?](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [Building Data Start-Ups: Fast, Big, and Focused](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [How to win data science competitions with Deep Learning](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [Full-Stack Data Scientist](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### Подкасты
**[`^        наверх        ^`](#awesome-data-science)**

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

### Видео и каналы YouTube
**[`^        наверх        ^`](#awesome-data-science)**

- [What is machine learning?](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng: Deep Learning, Self-Taught Learning and Unsupervised Feature Learning](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36 - Data Science for Beginners by Tomi Mester](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [Deep Learning: Intelligence from Big Data](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [Interview with Google's AI and Deep Learning 'Godfather' Geoffrey Hinton](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [Introduction to Deep Learning with Python](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [What is machine learning, and how does it work?](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - Образование в области Data Science.
- [Neural Nets for Newbies by Melanie Warrick (May 2015)](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Neural Networks video series by Hugo Larochelle](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Google DeepMind co-founder Shane Legg - Machine Super Intelligence](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [Data Science Primer](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [Data Science with Genetic Algorithms](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [Data Science for Beginners](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted — учебные материалы по ML/DL среднего уровня](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community — интервью с экспертами отрасли о производственном ML](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk — предельно технические и некоммерческие беседы без навязчивой рекламы](https://www.youtube.com/c/machinelearningstreettalk)
- [Neural networks by 3Blue1Brown ](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Neural networks from scratch by Sentdex](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Manning Publications YouTube channel](https://www.youtube.com/c/ManningPublications/featured)
- [Спросите доктора Чонга: как стать лидером в Data Science — часть 1](https://youtu.be/JYuQZii5o58)
- [Спросите доктора Чонга: как стать лидером в Data Science — часть 2](https://youtu.be/SzqIXV-O-ko)
- [Спросите доктора Чонга: как стать лидером в Data Science — часть 3](https://youtu.be/Ogwm7k_smTA)
- [Спросите доктора Чонга: как стать лидером в Data Science — часть 4](https://youtu.be/a9usjdzTxTU)
- [Спросите доктора Чонга: как стать лидером в Data Science — часть 5](https://youtu.be/MYdQq-F3Ws0)
- [Спросите доктора Чонга: как стать лидером в Data Science — часть 6](https://youtu.be/LOOt4OVC3hY)
- [Regression Models: Applying simple Poisson regression](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [Deep Learning Architectures](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [Time Series Modelling and Analysis](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [End to End Data Science Playlist](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [Введение в Data Science — LinkedIn](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)
- [AI Talks](https://aietalks.com/) - Поиск по кратким изложениям и указателю тем для выступлений и конференционных видео о практической инженерии ИИ.

## Общение
**[`^        наверх        ^`](#awesome-data-science)**

Ниже приведены ссылки на социальные сети. Общайтесь с другими специалистами по данным!

- [Facebook Accounts](#facebook-accounts)
- [Twitter Accounts](#twitter-accounts)
- [Telegram Channels](#telegram-channels)
- [Slack Communities](#slack-communities)
- [GitHub Groups](#github-groups)
- [Data Science Competitions](#data-science-competitions)


### Аккаунты Facebook
**[`^        наверх        ^`](#awesome-data-science)**

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


### Аккаунты Twitter
**[`^        наверх        ^`](#awesome-data-science)**

| Twitter | Описание |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | Короткие пробы в реальном времени для специалистов по данным, желающих монетизировать модели как торговые стратегии. |
| Big Data Mania | Специалист по визуализации данных, журналист данных, специалист по росту, автор Data Science for Dummies (2015). |
| [Big Data Science](https://twitter.com/analyticbridge) | Большие данные, Data Science, предиктивное моделирование, бизнес-аналитика, Hadoop, исследование принятия решений и операций. |
| Charlie Greenbacker | Директор по Data Science в @ExploreAltamira. |
| [Chris Said](https://twitter.com/Chris_Said) | Специалист по данным в Twitter. |
| [Clare Corthell](https://twitter.com/clarecorthell) | Разработка, дизайн и Data Science в @mattermark #hackerei. |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | Специалист по данным @Ekimetrics; машинное обучение, визуализация, динамические графики, Hadoop, R, Python, NLP и Bitcoin. |
| [Data Science Central](https://twitter.com/DataScienceCtrl) | Главный отраслевой ресурс для специалистов по большим данным. |
| [Data Science London](https://twitter.com/ds_ldn)  | Data Science, большие данные, хаки данных, энтузиасты данных, стартапы и открытые данные. |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | Рассказываю о пути от SQL-аналитика данных и магистратуры по инженерии до специалиста по данным. |
| [Data Science Report](https://twitter.com/TedOBrien93) | Помогаю строить карьеру и развиваться в Data Science и аналитике. |
| [Data Science Tips](https://twitter.com/datasciencetips) | Советы специалистам по данным со всего мира! #datascience #bigdata |
| [Data Vizzard](https://twitter.com/DataVisualizati) | Визуализация данных, безопасность, военное дело. |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j |  |
| [DJ Patil](https://twitter.com/dpatil) | Руководитель направления данных в Белом доме, вице-президент @RelateIQ. |
| [Domino Data Lab](https://twitter.com/DominoDataLab) |  |
| [Drew Conway](https://twitter.com/drewconway) | Энтузиаст данных, хакер, изучаю конфликты. |
| Emilio Ferrara | Сети, машинное обучение и Data Science. Изучаю социальные сети; постдокторант @IndianaUniv. |
| [Erin Bartolo](https://twitter.com/erinbartolo) | Работаю с большими данными и отношусь к шумихе вокруг них с любовью и ненавистью. Руководитель программы Data Science в @iSchoolSU. |
| [Greg Reda](https://twitter.com/gjreda)  | Работаю с данными и pandas в GrubHub. |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) | Президент KDnuggets, эксперт по аналитике, большим данным, интеллектуальному анализу и Data Science; сооснователь KDD и SIGKDD, бывший главный научный сотрудник стартапов. |
| [Hadley Wickham](https://twitter.com/hadleywickham) | Главный научный сотрудник RStudio и приглашённый профессор статистики в Оклендском университете, Стэнфорде и Университете Райса. |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | Специалист по данным. |
| [Hilary Mason](https://twitter.com/hmason) | Резидент-специалист по данным в @accel. |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | Ретвитит материалы о Data Science. |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Учёный Facebook и разработчик Julia. Автор Machine Learning for Hackers и Bandit Algorithms for Website Optimization. Твиты отражают только моё мнение. |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Ведущий специалист по данным в команде Microsoft Data Science. |
| [Julia Evans](https://twitter.com/b0rk) | Хакер, Pandas, анализ данных. |
| [Kenneth Cukier](https://twitter.com/kncukier) | Редактор данных The Economist и соавтор Big Data (https://www.big-data-book.com/). |
| Kevin Davenport | Организатор https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/. |
| [Kevin Markham](https://twitter.com/justmarkham) | Преподаватель Data Science и основатель [Data School](https://www.dataschool.io/). |
| [Kim Rees](https://twitter.com/krees) | Интерактивная визуализация данных и инструменты; фланёр данных. |
| [Kirk Borne](https://twitter.com/KirkDBorne) | Специалист по данным, астрофизик, влиятельный эксперт по большим данным. |
| Linda Regber | Рассказчик историй о данных, визуализация. |
| [Luis Rei](https://twitter.com/lmrei) | Аспирант. Программирование, мобильные и веб-технологии, ИИ, робототехника, машинное обучение, интеллектуальный анализ данных, NLP и Data Science. |
| Mark Stevenson | Специалист по подбору кадров в аналитике данных в Salt: аналитика, выводы, большие данные и Data Science. |
| [Matt Harrison](https://twitter.com/__mharrison__) | Мнения разработчика Python, автора и преподавателя, ныне специалиста по данным; иногда пишет об отцовстве, супружестве и садоводстве. |
| [Matthew Russell](https://twitter.com/ptwobrussell) | Интеллектуальный анализ социальных сетей. |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu)  | Специалист по данным в BizQualify, разработчик. |
| [Monica Rogati](https://twitter.com/mrogati) | Работает с данными в Jawbone. Превращала данные в истории и продукты в LinkedIn. Интеллектуальный анализ текстов, машинное обучение и рекомендательные системы. |
| [Noah Iliinsky](https://twitter.com/noahi) | Дизайнер визуализации и взаимодействия, велосипедист, автор книг о визуализации: https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | Аналитик и консультант по облакам, большим и открытым данным; писатель, докладчик, модератор и аналитик Gigaom Research. |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | Создаёт интеллектуальные системы для автоматизации и улучшения решений. Предприниматель, ранее главный специалист по данным в LinkedIn. |
| [Prash Chan](https://twitter.com/MDMGeek) | Архитектор решений IBM, эксперт по управлению основными данными, качеству и управлению данными; блогер. Data Science, Hadoop, большие данные и облака. |
| [Quora Data Science](https://twitter.com/q_datascience)  | Тема Data Science на Quora. |
| [R-Bloggers](https://twitter.com/Rbloggers) | Публикации из блогосферы R, конференции Data Science и открытые вакансии для специалистов по данным. |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | Компьютерный учёный, исследующий ИИ; энтузиаст данных и сторонник OpenScience, лидер сообщества @DataIsBeautiful. |
| [Recep Erol](https://twitter.com/EROLRecep) | Энтузиаст Data Science в UALR. |
| [Ryan Orban](https://twitter.com/ryanorban) | Специалист по данным, генетический оригамист и поклонник аппаратного обеспечения. |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | Общественный учёный, хакер, команда Facebook Data Science. Темы: эксперименты, причинный вывод, статистика, машинное обучение и экономика. |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | Data Science в Cisco. |
| [Harsh B. Gupta](https://twitter.com/harshbg) | Специалист по данным в BBVA Compass. |
| [Spencer Nelson](https://twitter.com/spenczar_n) | Энтузиаст данных. |
| [Talha Oz](https://twitter.com/tozCSS) | Интересуется ABM, SNA, DM, ML, NLP, HI, Python и Java; кагглер высокого уровня. |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | Обработка сложных событий, большие данные, ИИ и машинное обучение; увлечён программированием и открытым исходным кодом. |
| [Terry Timko](https://twitter.com/Terry_Timko) | Управление информацией, большие данные, данные как услуга, Data Science и сближение открытых, социальных и бизнес-данных. |
| [Tony Baer](https://twitter.com/TonyBaer) | ИТ-аналитик Ovum по большим данным и управлению данными. |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | Специалист по данным, автор и предприниматель; сооснователь @DataCommunityDC, основатель @DistrictDataLab. |
| [Vamshi Ambati](https://twitter.com/vambati) | Data Science в PayPal. NLP, машинное обучение; доктор философии, выпускник Carnegie Mellon (блог: https://allthingsds.wordpress.com). |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas — библиотека анализа данных для Python. |
| [WileyEd](https://twitter.com/WileyEd) | Старший менеджер аналитики больших данных в @Seagate, ранее McKinsey; евангелист аналитики и больших данных, интересуется Hadoop, облаками, цифровыми технологиями и R. |
| [WNYC Data News Team](https://twitter.com/datanews) | Команда новостей о данных на @WNYC: журналистика на основе данных, визуализация и открытость методов. |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | Автор книг о Data Science. |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | Автор книг о Data Science; в основном пишет о Julia. |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | Стартап в области ИИ и Data Science из Великобритании. |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | Машинное и глубокое обучение, Data Science с упором на интеллектуальный анализ текста и данных. |

### Каналы Telegram
**[`^        наверх        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – First Telegram Data Science channel. Covering all technical and popular staff about anything related to Data Science: AI, Big Data, Machine Learning, Statistics, general Math and the applications of former.
- [Loss function porn](https://t.me/loss_function_porn) — Beautiful posts on DS/ML theme with video or graphic visualization.
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – Daily ML news.


### Сообщества Slack
[top](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### Группы GitHub
- [Berkeley Institute for Data Science](https://github.com/BIDS)

### Соревнования по Data Science

Несколько платформ для соревнований по интеллектуальному анализу данных:

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## Развлечения

- [Infographic](#infographics)
- [Datasets](#datasets)
- [Comics](#comics)


### Инфографика
**[`^        наверх        ^`](#awesome-data-science)**

| Предпросмотр                                                                                                                                                                                                                                     | Описание                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png)                                                                                                                                                | [Ключевые различия между специалистом по данным и инженером данных](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer) |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                    | Наглядное руководство «Как стать специалистом по данным за 8 шагов» от [DataCamp](https://www.datacamp.com) [(изображение)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png) |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png)                                                                                                                                                | Карта необходимых навыков ([изображение](https://i.imgur.com/FxsL3b8.png)) |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png)                                                                                              | Свати Чандрасекар составил [учебную программу в виде схемы метро](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/). |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png)                                                                                                                                                | от [@kzawadz](https://twitter.com/kzawadz) через [Twitter](https://twitter.com/MktngDistillery/status/538671811991715840) |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg)                                                                                                                                                | от [Data Science Central](https://www.datasciencecentral.com/) |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png)                                                                                                                                                | Войны Data Science: R против Python |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png)                                                                                                                                                | Как выбрать статистические методы или методы машинного обучения |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg)                                                                                                           | [Выбор подходящей модели](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator) |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png)                                                                                                                                                | Индустрия Data Science: кто чем занимается |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png)                                                                                                                                                | Диаграмма Эйлера ~~Венна~~ для Data Science |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | Различные навыки и роли в Data Science от [Springboard](https://www.springboard.com) |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="Data Fallacies To Avoid" />](https://data-literacy.geckoboard.com/poster/)                                                 | Простой способ научить коллег, не работающих с данными и статистикой, [избегать ошибок при работе с данными](https://data-literacy.geckoboard.com/poster/). Материал из [уроков Data Literacy](https://data-literacy.geckoboard.com/) Geckoboard. |

### Наборы данных
**[`^        наверх        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - Отдельные наборы данных для авиации и источников Automatic Dependent Surveillance-Broadcast (ADS-B).
- [Chinese Tea Dataset](https://chinatea.house/dataset/) - Подобранный открытый набор данных о 100+ китайских чаях: категория, происхождение, кофеин, вкус, окисление и параметры заваривания. JSON и CSV.
- [College ROI Dataset](https://github.com/thomasthinks/college-roi-data) - Оценки окупаемости за жизнь для примерно 30 тысяч программ бакалавриата в 1 775 учреждениях США на основе данных FREOPP, IPEDS и BEA. Пять CSV со словарём данных, CC BY 4.0, DOI Zenodo.
- [AI Displacement Tracker](https://github.com/noahaust2/ai-displacement-tracker) - Структурированные данные о 92 случаях сокращения штата, приписанных ИИ, затронувших 453 748 работников в 12 странах и 11 отраслях. JSON и CSV, CC-BY-4.0.
- [Packrift Packaging Optimization Benchmark Corpus](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - Общедоступный набор данных об упаковке на основе 1 000 SKU с точными характеристиками; CSV и JSON для анализа электронной торговли и складов.
- [Pokemon Card Centering Measurements](https://github.com/rrh1441/pokemon-card-centering-measurements) - 320 измеренных аннотаций центрирования PSA для 302 настоящих карт Pokémon с eBay: проценты границ и наклон. CSV, CC BY 4.0, DOI Zenodo.
- [Pokemon Card Sold-Price Reference by Grade](https://github.com/rrh1441/pokemon-card-sold-price-reference) - Медианная цена продажи (без оценки, PSA 9, PSA 10) для 486 карт Pokémon; указаны размер выборки и оценка достоверности. CSV, CC BY 4.0, DOI Zenodo.
- [Evidaxis Momentum Snapshots](https://evidaxis.org) - Еженедельные снимки публичной активности разработки и цитирования открытых систем ИИ, воспроизводимые побайтно. JSON и CSV по датам, CC0, DOI Zenodo.
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - Портал открытых данных правительства США.
- [United States Census Bureau](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - Быстрый поиск и анализ миллиардов общедоступных записей правительств, компаний и организаций.
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [The official portal for European data](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Link — источник финансовых, экономических и альтернативных наборов данных.
- [Congressional Stock Brain](https://congressionalstockbrain.com) - Бесплатный инструмент на базе ИИ оценивает значимость сделок членов Конгресса США, раскрытых по закону STOCK Act. Сигналы по публичным сделкам 537 законодателей.
- [figshare.com](https://figshare.com/)
- [GeoLite Legacy Downloadable Databases](https://dev.maxmind.com/geoip)
- [Hugging Face Datasets](https://huggingface.co/datasets)
- [Japan Neighborhoods](https://japanneighborhoods.com) - Набор данных на английском о преступности в Токио по 5 078 районам за 7 лет (36 222 записи, 2018–2024), на основе открытых данных полиции. Интерактивная карта, оценка безопасности и индекс стоимости жизни. CC BY.
- [The Quiet-Broke Index](https://jeevesagency.github.io/quiet-broke-index/) - Сводный рейтинг 30 агломераций по доле дохода домохозяйства в $400 тыс., уходящей на жильё, налоги, уход за детьми, медицину и транспорт. Открытая методология, бесплатно, без регистрации.
- [Crime Brasil](https://crimebrasil.com.br) - Открытые данные о преступности в Бразилии: районы штата Риу-Гранди-ду-Сул (2,99 млн инцидентов, 2022–2025), муниципалитеты MG и RJ, общенациональные данные PRF и DATASUS. REST API, CSV/Parquet, ежедневно, CC BY 4.0.
- [US Truck-Involved Fatal Crashes (FARS) 2018-2024](https://doi.org/10.5281/zenodo.20487070) - Подборка системы NHTSA FARS: 33 898 смертельных аварий с участием коммерческих грузовиков в 50 штатах США, 2018–2024. [Отчёт Vision Zero](https://accidentlawyerreview.com/research/vision-zero-report-card/), конвейер Python на [GitHub](https://github.com/MarvinBregiosa/vision-zero-fars), зеркало HuggingFace, DOI, CC BY 4.0.
- [State of Peptides 2026](https://peptahub.com/state-of-peptides-2026) - Справочник 156 пептидных и смежных соединений: нормативный статус, категория, способ введения, период полувыведения, масса, CAS и идентификаторы PubChem/DrugBank/Wikidata. CSV/JSON, CC BY 4.0.
- [Quora's Big Datasets Answer](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [Public Big Data Sets](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [A Deep Catalog of Human Genetic Variation](https://www.internationalgenome.org/data)
- [A community-curated database of well-known people, places, and things](https://developers.google.com/freebase/)
- [Google Public Data](https://www.google.com/publicdata/directory)
- [World Bank Data](https://data.worldbank.org/)
- [NYC Taxi data](https://chriswhong.github.io/nyctaxi/)
- [Open Data Philly](https://www.opendataphilly.org/) Объединяет людей и данные Филадельфии.
- [grouplens.org](https://grouplens.org/datasets/) Примеры наборов данных о фильмах (с оценками), книгах и вики.
- [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/ml/) - Наборы данных, подходящие для машинного обучения.
- [research-quality data sets](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1) by [Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)
- [National Centers for Environmental Information](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/) (related: [U.S. Climate Resilience Toolkit](https://toolkit.climate.gov/))
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - Бесплатные общедоступные данные. Нажмите на набор, чтобы узнать подробности.
- [GHDx](https://ghdx.healthdata.org/) - Каталог IHME с наборами данных по здравоохранению и демографии со всего мира.
- [St. Louis Federal Reserve Economic Data - FRED](https://fred.stlouisfed.org/)
- [New Zealand Institute of Economic Research – Data1850](https://data1850.nz/)
- [Open Data Sources](https://github.com/datasciencemasters/data)
- [UNICEF Data](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [NASA SocioEconomic Data and Applications Center - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [The GDELT Project](https://www.gdeltproject.org/)
- [Sweden, Statistics](https://www.scb.se/en/)
- [StackExchange Data Explorer](https://data.stackexchange.com) - Инструмент с открытым исходным кодом для выполнения произвольных запросов к общедоступным данным Stack Exchange.
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
- [250k+ Job Postings](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - Расширяющийся набор исторических объявлений о работе в Люксембурге с 2020 года. Более 250 тысяч записей на AWS Data Exchange, доступ бесплатно.
- [FinancialData.Net](https://financialdata.net/documentation) - Финансовые данные: фондовый рынок, финансовая отчётность, устойчивое развитие и другое.
- [HDD Price Index](https://github.com/AdamDudley/hddhunt-price-index) - Ежедневный открытый набор данных о минимальной цене нового внутреннего HDD SATA 3,5 дюйма за терабайт в Amazon US с историей цен. CSV, JSON и JSONL, CC BY 4.0.
- [BDE Score](https://github.com/hbhqq9/bde-score) - Анализ акций на нескольких рынках с помощью ИИ и прозрачной оценки BDE для 73 акций США, Гонконга и Китая. Соответствует статье 50 Закона ЕС об ИИ. MIT.
- [Google Dataset Search](https://datasetsearch.research.google.com/) Поиск наборов данных в интернете.
- [notesjor corpus-collection](https://notes.jan-oliver-ruediger.de/korpora/) - Бесплатные корпуса (более 6 млрд токенов), преимущественно исторического и современного немецкого языка.
- [CLARIN-Repository](https://lindat.mff.cuni.cz/repository/home) - CLARIN — европейский репозиторий научных наборов данных.
- [GBIF](https://www.gbif.org/) - Глобальный центр информации о биоразнообразии: 2,4+ млрд записей о встречах видов. Бесплатный открытый API для экологического моделирования и исследований ML.
- [FAOSTAT](https://www.fao.org/faostat/en/) - Статистика ФАО ООН о производстве продовольствия, торговле, землепользовании и выбросах в 245+ странах. Бесплатный API и загрузка данных.
- [Movebank](https://www.movebank.org/) - Бесплатная платформа с 6+ млрд записей о перемещениях животных по GPS и спутниковой телеметрии. Открытый REST API для пространственно-временного моделирования и ML траекторий.
- [Encyclopedia of Life](https://eol.org/) - Структурированные открытые данные о 1,9+ млн видов: признаки, классификация и мультимедиа. Бесплатный API и загрузка для задач биоразнообразия.
- [FirstData](https://github.com/MLT-OSS/FirstData) - База знаний об авторитетных источниках данных: 210+ отобранных источников правительств, международных организаций и исследовательских учреждений. MCP для ИИ-агентов. MIT.
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - Пакет Python для доступа одной строкой к 38 открытым исследовательским наборам данных Латинской Америки (здравоохранение, нейронауки, психическое здоровье, экономика). pip install latamdata-py.
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - Бесплатные экологические данные по 42 000+ почтовым индексам США: качество воды и воздуха, PFAS, радон, свинец, риск наводнений и ещё 11 показателей. REST API, npm/PyPI, CC BY 4.0.
- [Helium](https://heliumtrades.com/mcp-page/) - Корпус новостей в реальном времени с характеристиками предвзятости по 15+ измерениям (3,2 млн статей, 5 000 источников), финансовые данные с анализом ИИ, оценка опционов ML и исторические опционные цепочки; MCP или REST API.
- [Verified Supplement Evidence](https://github.com/erinheit451/verified-supplement-evidence) - Набор данных о добавках с оценкой доказательств: дозировки, биодоступность, взаимодействия, распространённость дефицитов NHANES, сигналы FDA FAERS и стоимость эффективной дозы. Каждое клиническое утверждение связано с PMID PubMed. CC BY 4.0, DOI.
- [US Provider Industry Payments](https://github.com/npiwho/us-provider-payments) - 1,65 млн медработников США связаны по NPI с выплатами фармацевтических и медицинских компаний CMS Open Payments (2019–2025): сумма, число выплат, плательщик, тип и сводки. Сжатый CSV, CC0, DOI Zenodo.
- [WhatFontIs-Bench](https://github.com/whatfontis/WhatFontIs-Bench) - Синтетический тест определения семейства шрифта: 11 995 изображений слов в 600 известных шрифтах с аннотациями слов и букв.
- [US Tariff Data](https://github.com/checkdutyrates/us-tariff-data) - Гармонизированная тарифная сетка США (около 30 тыс. строк), дополнительные пошлины главы 99 и импортные пошлины ЕС; обновляется с каждой редакцией. CSV/JSON, CC0 для данных США, OGL v3 для ЕС, DOI Zenodo.


### Комиксы
**[`^        наверх        ^`](#awesome-data-science)**

- [Comic compilation](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [Cartoons](https://www.kdnuggets.com/websites/cartoons.html)
- [Data Science Cartoons](https://www.cartoonstock.com/directory/d/data_science.asp)
- [Data Science: The XKCD Edition](https://davidlindelof.com/data-science-the-xkcd-edition/)

## Другие замечательные подборки

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
- [ML/AI Interview Prep](https://github.com/aasimansari1/ml-interview-prep) - 500+ вопросов и ответов для собеседований по ML/ИИ с исполняемым кодом: основы ML, глубокое обучение, NLP, PyTorch, конвейеры scikit-learn и системный дизайн.
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
- [Awesome Data Analysis](https://github.com/PavelGrigoryevDS/awesome-data-analysis) -  Подборка инструментов, библиотек и ресурсов для анализа данных.
- [Awesome Evidence Synthesis](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - Подборка открытых инструментов для систематических обзоров, метаанализа и синтеза доказательств.
- [Awesome Python Math Packages](https://github.com/VascoSch92/awesome_python_math_packages) - Подборка пакетов Python для математики: от линейной алгебры и оптимизации до статистики и топологии.
- [AI Dev Jobs](https://aidevboard.com/) - Доска вакансий по инженерии ИИ и машинного обучения: более 5 400 объявлений и бесплатный REST API.


### Хобби
- [Awesome Music Production](https://github.com/ad-si/awesome-music-production)
