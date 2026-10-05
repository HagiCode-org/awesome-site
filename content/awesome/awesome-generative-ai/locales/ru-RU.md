# Удивительный генеративный ИИ [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Список современных проектов и услуг генеративного искусственного интеллекта.

Генерирующий искусственный Интеллект - это технология, которая создает оригинальный контент, такой как изображения, звуки и тексты, используя алгоритмы машинного обучения, которые обучаются на больших объемах данных. В отличие от других форм ИИ, он способен создавать уникальные и ранее невидимые выходы, такие как фотореалистичные изображения, цифровое искусство, музыка и письмо. Эти произведения часто имеют свой собственный уникальный стиль и их трудно отличить от созданных человеком работ. Генеративный ИИ имеет широкий спектр приложений в таких областях, как искусство, развлечения, маркетинг, научные круги и информатика.

Вклад в этот список приветствуется. Прежде чем отправлять свои предложения, пожалуйста, просмотрите [Contribution Guidelines](CONTRIBUTING.md) Чтобы ваши записи соответствовали критериям. Добавить ссылки через [pull requests](https://github.com/steven2358/awesome-generative-ai/pulls) или создать [issue](https://github.com/steven2358/awesome-generative-ai/issues) чтобы начать дискуссию. Больше проектов можно найти в [Discoveries List](DISCOVERIES.md), где мы демонстрируем широкий спектр перспективных проектов генеративного ИИ.

## Содержание

- [Рекомендуемое чтение](#recommended-reading)
- [Текст](#text)
- [кодирование](#coding)
- [Агенты](#agents)
- [Изображение](#image)
- [Видео](#video)
- [Аудио](#audio)
- [другой](#other)
- [Учебные ресурсы](#learning-resources)
- [Больше списков](#more-lists)

## Рекомендуемое чтение

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - В статье кратко излагаются возможности и ограничения модели GPT-3 и ее потенциальное воздействие на общество. Алекс Тамкин и Дип Гангули, 5 февраля 2021 года.
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - Комплексное исследование генеративной индустрии искусственного интеллекта, предлагающее историческую перспективу и глубокий анализ отраслевой экосистемы. Соня Хуан, Пэт Грейди и GPT-3, 19 сентября 2022 года.
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - Статья о росте генеративного ИИ, в частности об успехе генератора изображений Stable Diffusion, и связанных с этим спорах. New York Times, 21 октября 2022 года.
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - Статья о растущем ажиотаже и инвестициях в генеративные стартапы ИИ, в которых различные отрасли изучают его потенциальные приложения. Wired, 27 октября 2022.
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - Аннотация к западному изданию: Henry Kissinger, Eric Schmidt and Daniel Huttenlocher. Wall Street Journal, 24 февраля 2023 года.

### Вехи

- [OpenAI API](https://openai.com/blog/openai-api/) - Анонс OpenAI API для текстовых моделей ИИ общего назначения на основе GPT-3. Блог OpenAI, 11 июня 2020 г.
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - Анонс Copilot, нового программиста, который помогает вам писать лучший код. Блог GitHub, 29 июня 2021 года.
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - Объявление о выпуске DALL·E 2, усовершенствованной системы генерации изображений с улучшенным разрешением, расширенными возможностями создания изображений и различными мерами по снижению безопасности. Блог OpenAI, 6 апреля 2022 года.
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - Объявление о публичном выпуске Stable Diffusion, модели генерации изображений на основе ИИ, обученной широкому интернет-скребу и лицензированной по лицензии Creative ML OpenRAIL-M. Блог Stable Diffusion, 22 августа 2022 года.
- [ChatGPT](https://openai.com/blog/chatgpt/) - Объявление ChatGPT, разговорной модели, обученной отвечать на последующие вопросы, признавать ошибки, оспаривать неправильные предпосылки и отвергать неуместные запросы. Блог OpenAI, 30 ноября 2022 года.
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - Microsoft анонсирует новую версию своей поисковой системы Bing, работающей на модели OpenAI следующего поколения. Блог Microsoft, 7 февраля 2023 года.
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM, основополагающая 65-миллиардная модель большого языка от Meta. Мета, 23 февраля 2023 года. #opensource
- [GPT-4](https://openai.com/research/gpt-4) - Анонс GPT-4, большой мультимодальной модели. Блог OpenAI, 14 марта 2023 года.
- [DALL·E 3](https://openai.com/index/dall-e-3/) - Анонс генератора изображений DALL·E 3. Блог OpenAI, 20 сентября 2023 года.
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - Презентация Sora, большой модели видеопоколения. OpenAI, 15 февраля 2024 года.

## Текст

### Модели

- [OpenAI API](https://openai.com/api/) - API OpenAI предоставляет доступ к моделям GPT для естественного языка, кодирования, генерации изображений, аудио и разработки агентов.
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - Gopher от DeepMind — это 280-миллиардная модель языка параметров.
- [OPT](https://huggingface.co/facebook/opt-350m) - Open Pretrained Transformers (OPT) от Facebook представляет собой набор предварительно обученных трансформаторов. [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - BLOOM by Hugging Face - это модель, похожая на GPT-3, которая была обучена на 46 различных языках и 13 языках программирования. #opensource
- [Llama](https://www.llama.com/) - Модель большого языка с открытым исходным кодом Meta. #opensource
- [Claude](https://claude.ai/) - Поговорите с Клодом, помощником по ИИ из Anthropic.
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - Чат-бот с открытым исходным кодом, обученный тонкой настройкой LLaMA на пользовательских разговорах, собранных из ShareGPT. #opensource
- [Mistral](https://mistral.ai/en/models) - LLM с открытым весом от Mistral AI. #opensource
- [Grok](https://grok.x.ai/) - LLM от xAI с [open source](https://github.com/xai-org/grok-1) и открытые весы. #opensource
- [Qwen](https://qwenlm.github.io/) - Серия LLM, разработанная Alibaba Cloud. [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - Серия LLM с открытым исходным кодом от DeepSeek AI. [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - Мультимодальные базовые модели для текста, речи, видео и музыкального поколения
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Серия моделей языка MoE с открытым исходным кодом от Moonshot AI для агентических задач. #opensource
- [GLM](https://github.com/zai-org/GLM-5) - Серия моделей языка с открытым исходным кодом от Z.ai для агентных задач. #opensource

### Чатботы

- [ChatGPT](https://chatgpt.com/) - ChatGPT от OpenAI - это большая языковая модель, которая взаимодействует в разговорной манере.
- [Copilot](https://copilot.microsoft.com/) - Ежедневный спутник ИИ от Microsoft.
- [Gemini](https://gemini.google.com/) - Семейство мультимодальных моделей большого языка, разработанных Google Deepmind.
- [Meta AI](https://www.meta.ai/) - Мета-помощник ИИ, чтобы делать вещи, создавать изображения, генерируемые ИИ, получать ответы. Построен на Llama LLM.
- [DeepSeek](https://www.deepseek.com/) - Интерфейс чат-бота, основанный на открытых языковых моделях DeepSeek. #opensource
- [Character.AI](https://character.ai/) - Характер. ИИ позволяет создавать персонажей и общаться с ними.
- [Pi](https://pi.ai) - Персонализированная платформа ИИ, доступная в качестве цифрового помощника.
- [Qwen](https://chat.qwenlm.ai/) - Чат-бот Qwen с генерацией изображений, обработкой документов, интеграцией веб-поиска, пониманием видео и т. Д.
- [Le Chat](https://chat.mistral.ai/) - Интерфейс чата для языковых моделей Mistral AI.
- [Kimi](https://www.kimi.com/) - Помощник ИИ от Moonshot AI с чатом, глубокими исследованиями, кодированием и возможностями мультиагента.
- [Z.ai](https://chat.z.ai/) - Платформа для чат-ботов и агентов от Z.ai на базе семейства моделей GLM.

### Пользовательские интерфейсы

- [LibreChat](https://librechat.ai/) - LibreChat - это бесплатный и открытый интерфейс чата для помощников ИИ. [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - Открытый исходный ChatGPT UI. [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### Поисковые системы

- [Perplexity AI](https://www.perplexity.ai/) - Инструменты поиска на основе ИИ.
- [Exa](https://exa.ai/) - Языковая модель обеспечивает поиск.
- [Phind](https://phind.com/) - Поисковая система на основе ИИ.
- [You.com](https://you.com/) - Поисковая система, построенная на ИИ, которая предоставляет пользователям индивидуальный опыт поиска, сохраняя при этом свои данные на 100% конфиденциальными.
- [Komo](https://komo.ai/) - Поисковая система на базе ИИ.

### Локальные поисковые системы

- [privateGPT](https://github.com/zylon-ai/private-gpt) - Задавайте вопросы своим документам без подключения к Интернету, используя возможности LLM.
- [quivr](https://github.com/QuivrHQ/quivr) - Выбросьте все свои файлы и пообщайтесь с ними, используя генеративный ИИ-второй мозг с помощью LLM и встраивания.

### Написание помощников

- [Jasper](https://www.jasper.ai/) - Создавайте контент быстрее с помощью искусственного интеллекта
- [Compose AI](https://www.compose.ai/) - Compose AI - это бесплатное расширение Chrome, которое сокращает время написания на 40% с автозаполнением на основе ИИ.
- [Rytr](https://rytr.me/) - Rytr - это помощник по написанию ИИ, который помогает вам создавать высококачественный контент.
- [wordtune](https://www.wordtune.com/) - Личный письменный помощник.
- [HyperWrite](https://hyperwriteai.com/) - HyperWrite помогает вам писать с уверенностью и быстрее выполнять свою работу от идеи до окончательного проекта.
- [Moonbeam](https://www.gomoonbeam.com/) - Лучшие блоги за небольшую часть времени.
- [copy.ai](https://www.copy.ai/) - Напишите лучшую маркетинговую копию и контент с ИИ.
- [ChatSonic](https://writesonic.com/chat) - Помощник с искусственным интеллектом, который позволяет создавать текст и изображения.
- [Anyword](https://anyword.com/) - ИИ-помощник Anyword создает эффективную копию для всех.
- [Hypotenuse AI](https://www.hypotenuse.ai/) - Превратите несколько ключевых слов в оригинальные, проницательные статьи, описания продуктов и копии в социальных сетях.
- [Lavender](https://www.lavender.ai/) - Помощник по электронной почте Lavender поможет вам получить больше ответов за меньшее время.
- [Lex](https://lex.page/) - Встроен текстовый процессор с искусственным интеллектом, поэтому вы можете писать быстрее.
- [Jenni](https://jenni.ai/) - Дженни - лучший помощник по письму, который экономит ваши мысли и время написания.
- [QuillBot](https://quillbot.com) - Инструмент перефразирования на основе ИИ.
- [Postwise](https://postwise.ai/) - Пишите твиты, планируйте сообщения и развивайте своих последователей с помощью ИИ.
- [Copysmith](https://copysmith.ai/) - Решение для создания контента для бизнеса и электронной коммерции.
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - AI text humanizer с многоязычным переписывающим конвейером и пошаговыми примерами. #opensource

### Расширения ChatGPT

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - Добавьте свои подсказки ChatGPT с соответствующими результатами из Интернета.
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - Расширение ChatGPT для Google Sheets и Google Docs
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - Используйте ChatGPT для обобщения видео на YouTube.
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - Откройте, поделитесь, импортируйте и используйте лучшие подсказки для ChatGPT и сохраните историю чата на местном уровне.
- [ShareGPT](https://sharegpt.com/) - Поделитесь своими разговорами в ChatGPT и изучите разговоры, которыми делятся другие.
- [Merlin](https://www.getmerlin.in/) - ЧатГПТ Плюс расширение на всех сайтах.
- [Jetwriter](https://jetwriter.ai/) - Помощник для написания ИИ для Chrome, настольных и мобильных устройств.
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - Добавьте различные вспомогательные функции в Jupyter Notebooks и Jupyter Lab.
- [editGPT](https://www.editgpt.app/) - Легко корректировать, редактировать и отслеживать изменения вашего контента в чате.
- [Forefront](https://www.forefront.ai/) - Лучший опыт ChatGPT.
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - Расширение ChatGPT для Google Sheets, Google Docs, Google Slides, Google Forms.
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Помощник электронной почты для Gmail.

### Производительность

- [ChatPDF](https://www.chatpdf.com/) - Чат с любым PDF.
- [Mem](https://mem.ai/) - Mem - это первое в мире рабочее пространство на основе ИИ, которое персонализировано для вас. Усильте свое творчество, автоматизируйте мирское и оставайтесь организованным автоматически.
- [Taskade](https://www.taskade.com/) - Контурные задачи, заметки, сгенерированные структурированные списки и карты разума с помощью Taskade AI.
- [Notion AI](https://www.notion.so/product/ai) - Пишите более эффективные заметки и документы.
- [Nekton AI](https://nekton.ai) - Автоматизируйте свои рабочие процессы с помощью ИИ. Опишите свои рабочие процессы шаг за шагом простым языком.
- [Limitless](https://www.limitless.ai/) - Помощник памяти ИИ для записи разговоров и встреч, генерации резюме и поиска прошлых взаимодействий в приложениях и дополнительной носимости.
- [NotebookLM](https://notebooklm.google/) - Исследование и онлайн-инструмент для взаимодействия с документами, основанный на Google Gemini.
- [Open Notebook](https://www.open-notebook.ai) - Реализация NotebookLM с открытым исходным кодом с большей гибкостью и функциями. [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - Инструмент с открытым исходным кодом для записи экранной и аудио активности с помощью поиска, автоматизации и поддержки локальных LLM. #opensource

### Совещание помощников

- [Otter.ai](https://otter.ai/) - Помощник встречи, который записывает аудио, пишет заметки, автоматически захватывает слайды и генерирует резюме.
- [Cogram](https://www.cogram.com/) - Cogram делает автоматические заметки в виртуальных встречах и идентифицирует элементы действия.
- [Sybill](https://www.sybill.ai/) - Sybill генерирует сводки звонков о продажах, включая следующие шаги, болевые точки и области интересов, комбинируя транскрипт и основанные на эмоциях идеи.
- [Loopin AI](https://www.loopinhq.com/) - Loopin - это рабочее пространство для совместных встреч, которое не только позволяет записывать, записывать и обобщать встречи с помощью ИИ, но и позволяет автоматически организовывать заметки о встречах в верхней части вашего календаря.
- [Read AI](https://www.read.ai/) - Копилот искусственного интеллекта, где бы вы ни работали, делает ваши встречи, электронные письма и сообщения более продуктивными с резюме, обнаружением контента и рекомендациями.
- [Fireflies.ai](https://fireflies.ai) - Переписывайте, обобщайте, ищите и анализируйте все разговоры вашей команды.

### Академия

- [Elicit](https://elicit.org/) - Elicit использует языковые модели, чтобы помочь вам автоматизировать исследовательские рабочие процессы, такие как обзор литературы.
- [genei](https://www.genei.io/) - Обобщите академические статьи за считанные секунды и сэкономьте 80% времени исследования.
- [Explainpaper](https://www.explainpaper.com/) - Лучший способ читать академические статьи. Загрузите статью, выделите запутанный текст, получите объяснение.
- [Consensus](https://consensus.app/search/) - Консенсус — это поисковая система, которая использует ИИ для поиска ответов в научных исследованиях.
- [scite](https://scite.ai/) - Платформа для поиска и оценки научных статей.
- [SciSpace](https://scispace.com/) - Исследовательский ассистент ИИ для понимания научной литературы.
- [STORM](https://storm.genie.stanford.edu/) - Система курирования знаний на основе LLM, которая исследует тему и генерирует полный отчет с цитатами. [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - Обсуждайте, открывайте и читайте статьи arXiv.
- [ASReview](https://asreview.nl/) - Инструмент с открытым исходным кодом для систематических обзоров, помогающий исследователям эффективно просматривать большие объемы академической литературы. [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - Глубокий исследовательский инструмент для поиска академических источников, Интернета и частных документов с локальными или облачными LLM. [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - Платформа на базе ИИ для управления систематическими обзорами литературы с помощью инструментов совместного скрининга и управления данными.
- [Paper2Agent](https://paper2agent.ai/) - Преобразует исследовательские работы и связанные с ними кодовые базы в проверенные серверы MCP и интерактивные агенты ИИ. [#opensource](https://github.com/jmiao24/Paper2Agent)
- [Ai2 ASTA](https://asta.allen.ai/) - Научный научный сотрудник для поиска статей, создания цитируемых литературных отчетов и анализа исследовательских данных.

### Доски лидеров

- [Arena](https://arena.ai/) - Открытая платформа для краудсорсинга ИИ, организованная исследователями из UC Berkeley SkyLab.
- [Artificial Analysis](https://artificialanalysis.ai/) - Искусственный анализ предоставляет объективные ориентиры и информацию, чтобы помочь выбрать модели ИИ и хостинг-провайдеров.
- [imgsys](https://imgsys.org/rankings) - Модель генеративного изображения на арене fal.ai.
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - Языковые модели ранжируются и анализируются по использованию в приложениях.
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - Экспертные тесты LLM и обновленные таблицы лидеров моделей ИИ.
- [LLM Stats](https://llm-stats.com/) - Сравните модели ИИ по бенчмаркам, ценам, скорости и контекстному окну.

### Другие генераторы текста

- [EmailTriager](https://www.emailtriager.com/) - Используйте AI для автоматического составления ответов на электронную почту в фоновом режиме.
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI Poem Generator пишет для вас красивое стихотворение на любую тему.

## кодирование

### Кодирование помощников

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilot использует OpenAI Codex, чтобы предлагать код и целые функции в режиме реального времени.
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - Система искусственного интеллекта OpenAI, которая переводит естественный язык в код.
- [Ghostwriter](https://blog.replit.com/ai) - Парный программист на основе ИИ с помощью репликации.
- [Amazon Q](https://aws.amazon.com/q/) - Помощник на базе искусственного интеллекта AWS, который помогает отвечать на вопросы, писать код и автоматизировать задачи.
- [tabnine](https://www.tabnine.com/) - Код быстрее с полным и полнофункциональным завершением кода.
- [Stenography](https://stenography.dev/) - Автоматическая документация кода.
- [Mintlify](https://mintlify.com/) - Автор документации на основе ИИ.
- [AI2sql](https://www.ai2sql.io/) - С помощью AI2sql инженеры и неинженеры могут легко писать эффективные, безошибочные SQL-запросы, не зная SQL.
- [Qodo](https://www.qodo.ai/) - Инструмент обзора кода ИИ с агентными рабочими процессами для IDE, запросов и безопасности.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - AI-инструмент для автоматизированного анализа PR, обратной связи, предложений и многого другого.
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - Клон копилота, который использует библиотеку llama.cpp для запуска 6-миллиардной модели Salesforce Codegen в 4 ГБ оперативной памяти.
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - Открытая реализация интерпретатора кода ChatGPT OpenAI. #opensource
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - Переводчик кода OpenAI в вашем терминале, работает локально.
- [Continue](https://www.continue.dev/) - Ассистент открытого кода. Подключите любую модель и любой контекст для создания пользовательского автозаполнения и чата внутри IDE. [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - Автономный кодирующий агент на базе ИИ, интегрированный непосредственно в VS Code. [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - AI-native IDE, которая сочетает в себе редактирование кода с расширенной помощью ИИ на протяжении всего процесса разработки.
- [Plandex](https://github.com/plandex-ai/plandex) - Открытый исходный код, терминальный движок программирования ИИ для сложных задач. [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Настраиваемый ИИ-помощник с открытым исходным кодом в Jupyter Notebook и JupyterLab, который поддерживает более 100 LLM, включая локальные модели от Ollama и GPT4All. #opensource
- [DataLine](https://dataline.app) - Инструмент анализа и визуализации данных на основе ИИ. [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - Быстрое генерирование пользовательского интерфейса для React и Next.js, создание готовых к производству компонентов.
- [Lovable](https://lovable.dev) - Разговорное поколение приложений с полным стеком, превращающее идеи в развертываемый код.
- [aider](https://aider.chat/) - Программирование пар ИИ в вашем терминале с поддержкой нескольких провайдеров LLM. [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - Ассистент кодирования с открытым исходным кодом для VS Code, JetBrains и CLI. [#opensource](https://github.com/Kilo-Org/kilocode)

### Инструменты для разработчиков

- [Cohere](https://cohere.com/) - Cohere предоставляет доступ к передовым моделям большого языка и инструментам НЛП.
- [Haystack](https://haystack.deepset.ai/) - Структура для построения приложений НЛП (например, агентов, семантического поиска, ответа на вопросы) с помощью языковых моделей.
- [LangChain](https://langchain.com/) - Рамки для разработки приложений, основанных на языковых моделях.
- [gpt4all](https://github.com/nomic-ai/gpt4all) - Чат-бот тренировался на массивной коллекции чистых помощников, включая код, истории и диалоги.
- [LLM App](https://github.com/pathwaycom/llm-app) - Библиотека Python с открытым исходным кодом для создания конвейера данных с поддержкой LLM в реальном времени.
- [LMQL](https://lmql.ai/) - LMQL - это язык запросов для больших языковых моделей.
- [LlamaIndex](https://www.llamaindex.ai/) - Структура данных для построения приложений LLM по сравнению с внешними данными.
- [Phoenix](https://phoenix.arize.com/) - Инструмент с открытым исходным кодом для ML-наблюдения, который работает в среде вашего ноутбука, от Arize. Монитор и тонкая настройка LLM, CV и табличных моделей.
- [Cursor](https://cursor.com/) - Cursor - это IDE будущего, созданная для парного программирования с мощным ИИ.
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - Нейросимволическая структура для создания приложений с LLM в ядре.
- [Vanna.ai](https://vanna.ai/) - Платформа Python RAG с открытым исходным кодом для генерации SQL и связанных с ней функций. [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - Полнофункциональная платформа LLMOps для мониторинга, кэширования и управления LLM.
- [agenta](https://github.com/agenta-ai/agenta) - Сквозная платформа LLMOps с открытым исходным кодом для быстрого проектирования, оценки и развертывания. #opensource
- [Together AI](https://www.together.ai/) - Поезд, тонкая настройка и вывод на модели ИИ, пылающие быстро, по низкой цене и в масштабе производства.
- [Gitingest](https://gitingest.com/) - Превратите любое хранилище Git в простой текстовый дайджест его кодовой базы, чтобы его можно было подавать в любой LLM. [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - Упакуйте свою кодовую базу в удобные для ИИ форматы. [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Вывод модели LLaMA Meta (и других) в чистом C/C++.
- [bitnet.cpp](https://github.com/microsoft/BitNet) - Официальная схема вывода для 1-битных LLM от Microsoft. [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - Унифицированный интерфейс для LLM. [#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - Низкокодовая структура для создания пользовательских моделей ИИ, таких как LLM и другие глубокие нейронные сети. [#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - Библиотека Python для тонкой настройки LLM [#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - Open Source GenAI и LLM нативная платформа для наблюдения OpenTelemetry со следами и метриками. #opensource
- [Helicone AI](https://helicone.ai/) - Платформа наблюдения LLM с открытым исходным кодом для регистрации, мониторинга и отладки приложений ИИ. [#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - Текст-SQL с открытым исходным кодом и генеративный BI-агент с семантическим слоем. [#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - API для обнаружения и оценки галлюцинаций на выходе LLM.
- [Opik](https://github.com/comet-ml/opik) - Платформа с открытым исходным кодом для отслеживания, оценки и мониторинга приложений LLM. [#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - Инжиниринговая платформа LLM с открытым исходным кодом для отслеживания, оценки, оперативного управления и метрик. [#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - Платформа с открытым исходным кодом для отслеживания экспериментов ML, оценки моделей и подсказок, развертывания моделей и добавления видимости LLM. [#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - SDK с нулевым доверием для анонимизации PII локально перед отправкой подсказок в LLM и плавной регидратацией ответа.
- [Agentset](https://agentset.ai/) - Платформа с открытым исходным кодом для создания и оценки RAG и агентных приложений. [#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - Маршрутизатор LLM с открытым исходным кодом, который направляет запросы агента на наиболее экономичную модель с ограничениями использования и бенчмаркингом моделей. [#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - GitHub Action использует LLM (Claude, GPT, Ollama) для автоматического перевода файлов локализации i18n. #opensource
- [Groq](https://groq.com/) - Облачный вывод API для запуска LLM с открытым исходным кодом, питаемый пользовательским оборудованием LPU.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Открытый стандарт для подключения моделей ИИ к внешним инструментам и источникам данных. [MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Песочница браузера с открытым исходным кодом и инфраструктура автоматизации для агентов ИИ с управлением сеансами, скриншотами, PDF-файлами, прокси-серверами и инструментами для борьбы с роботами. #opensource
- [Bifrost](https://github.com/maximhq/bifrost) - Шлюз LLM с открытым исходным кодом с маршрутизацией, балансировкой нагрузки, ограждениями и наблюдаемостью для моделей 1000+. #opensource
- [fal](https://fal.ai/) - Платформа разработчика для доступа и развертывания моделей изображения, видео, аудио и 3D-поколения.

### Игровые площадки

- [OpenAI Playground](https://platform.openai.com/playground) - Исследуйте ресурсы, учебные пособия, документы API и динамические примеры.
- [Google AI Studio](https://aistudio.google.com/) - Веб-инструмент для прототипирования с Близнецами и экспериментальными моделями.
- [GitHub Models](https://github.com/marketplace/models) - Найдите и поэкспериментируйте с моделями ИИ для разработки генеративного приложения ИИ.

### Локальное развертывание LLM

- [Ollama](https://github.com/ollama/ollama) - Вставайте и работайте с большими языковыми моделями локально.
- [Open WebUI](https://github.com/open-webui/open-webui) - Расширяемая, многофункциональная и удобная для пользователя платформа ИИ, предназначенная для работы полностью в автономном режиме. #opensource
- [Jan](https://jan.ai/) - Запустите LLM, такие как Mistral или Llama2, локально и автономно на вашем компьютере или подключитесь к удаленным API-интерфейсам AI. [#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - Простой и мощный интерфейс для локальных и онлайн-моделей ИИ.
- [PyGPT](https://pygpt.net/) - Персональный помощник настольного ИИ с чатом, видением, агентами, генерацией изображений, инструментами и командами, голосовым управлением и многим другим. #opensource
- [LLM](https://llm.datasette.io/) - Утилита CLI и библиотека Python для взаимодействия с большими языковыми моделями, удаленными и локальными. [#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - Загрузите и запустите локальные LLM на своем компьютере.
- [RunThisLLM](https://runthisllm.com) - Посмотрите, какие LLM вы можете запустить на своем оборудовании.
- [Harbor](https://github.com/av/harbor) - Контейнеризованный инструментарий для запуска локальных бэкэндов LLM, пользовательских интерфейсов и вспомогательных служб с одной командой. #opensource
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - Приложение React Native для запуска LLM, моделей видения и стабильной диффузии на устройстве на iOS и Android без доступа в Интернет. #opensource
- [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) - OpenAI-совместимый локальный сервер вывода LLM, оптимизированный для Apple Silicon, с поддержкой вызова инструментов, рассуждений, видения и структурированного вывода. #opensource

## Агенты

### Автономные агенты

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - Экспериментальная попытка сделать GPT-4 полностью автономным.
- [babyagi](https://github.com/yoheinakajima/babyagi) - Система управления задачами на основе ИИ.
- [AgentGPT](https://github.com/reworkd/AgentGPT) - Соберите, настройте и разверните автономных агентов ИИ в своем браузере.
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - Укажите, что вы хотите, чтобы он построил, ИИ просит разъяснений, а затем строит его.
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - Автоматизированная оперативная инженерия. Он генерирует, тестирует и ранжирует подсказки, чтобы найти лучшие.
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - Многоагентная структура: с учетом одного требования к линии, возврат PRD, дизайн, задачи, РЕПО.
- [AutoGen](https://github.com/microsoft/autogen) - AutoGen - это фреймворк, который позволяет разрабатывать приложения LLM с использованием нескольких агентов, которые могут общаться друг с другом для решения задач.
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - Инструмент Dev, который записывает масштабируемые приложения с нуля, в то время как разработчик контролирует реализацию.
- [Devin](https://devin.ai/) - Автономный инженер-программист Cognition Labs.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Автономный агент, предназначенный для навигации по сложностям разработки программного обеспечения. #opensource
- [Davika](https://github.com/stitionai/devika) - Агентный инженер-программист. #opensource
- [n8n](https://n8n.io/) - Платформа автоматизации рабочих процессов, которая сочетает возможности ИИ с автоматизацией бизнес-процессов.
- [Sauna](https://www.sauna.ai) - Помощник ИИ, созданный для компаундирования контекста. Он изучает ваш вкус, обнаруживает скрытые шаблоны, расширяет контекст вашего мозга и активно работает.
- [Claude Code](https://code.claude.com) - Инструмент кодирования Anthropic, который живет в вашем терминале и помогает превратить идеи в код.
- [Gemini CLI](https://geminicli.com) - Агент искусственного интеллекта с открытым исходным кодом, который приносит силу Близнецов непосредственно в ваш терминал. [#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - Агент кодирования ИИ с открытым исходным кодом. [#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - Структура TypeScript для создания агентов ИИ, рабочих процессов и приложений. [#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - Персональный помощник ИИ, который вы используете на своих устройствах. [#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - Социальная сеть для агентов ИИ.
- [AgentMail](https://www.agentmail.to) - Электронные почтовые ящики для агентов ИИ.
- [Openwork](https://openwork.bot) - Агенты ИИ нанимают друг друга, выполняют полную работу, проверяют результаты и зарабатывают токены.
- [Agent Skills](https://agentskills.io) - Открытый формат и справочный SDK для упаковки многоразовых возможностей и опыта для агентов ИИ. [#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - Фреймворк для построения многоагентных систем ИИ с рабочими процессами, интеграцией инструментов и памятью. #opensource
- [Hermes Agent](https://hermes-agent.nousresearch.com) - Самосовершенствование личного агента с памятью, интеграцией сообщений и выполнением инструментов в песочнице. [#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - Платформа с открытым исходным кодом для построения сетей агентов ИИ с поддержкой нескольких протоколов (WebSocket, gRPC, HTTP, MCP, A2A). #opensource
- [Dorothy](https://github.com/Charlie85270/Dorothy) - Десктопное приложение с открытым исходным кодом для управления несколькими агентами AI CLI одновременно с автоматизацией и управлением Kanban. #opensource
- [Hive](https://github.com/aden-hive/hive) - Многоагентная структура с открытым исходным кодом с автоматически генерируемыми графиками, циклами эволюции и интеграцией MCP. #opensource

### Настраиваемые помощники

- [Poe](https://poe.com/) - По предоставляет доступ к различным ботам.
- [GPT Builder](https://chatgpt.com/gpts/editor) - Помощник для создания помощников на основе GPT.

## Изображение

### Модели

- [DALL·E 2](https://openai.com/dall-e-2/) - DALL·E 2 от OpenAI - это новая система искусственного интеллекта, которая может создавать реалистичные изображения и искусство из описания на естественном языке.
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Stable Diffusion by Stability AI - это современная модель преобразования текста в изображение, которая генерирует изображения из текста. #opensource
- [Midjourney](https://www.midjourney.com/) - Midjourney - независимая исследовательская лаборатория, исследующая новые средства мышления и расширяющая творческие способности человеческого вида.
- [Imagen](https://imagen.research.google/) - Imagen by Google - это модель распространения текста и изображений с беспрецедентной степенью фотореализма и глубоким уровнем понимания языка.
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - Make-A-Scene by Meta - это мультимодальный генеративный метод ИИ, который предоставляет творческий контроль в руки людей, которые используют его, позволяя им описывать и иллюстрировать свое видение через текстовые описания и эскизы в свободной форме.
- [DragGAN](https://github.com/XingangPan/DragGAN) - Drag Your GAN: Interactive Point-based Manipulation on the Generative Image Manifold (недоступная ссылка — история).
- [Flux](https://github.com/black-forest-labs/flux) - Модели от текста к изображению от Black Forest Labs с высококачественным фотореалистичным выходом. #opensource

### Услуги

- [Craiyon](https://www.craiyon.com/) - Craiyon, ранее DALL-E mini, представляет собой модель искусственного интеллекта, которая может рисовать изображения из любого текстового запроса.
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudio - это простой в использовании интерфейс для создания изображений с использованием модели генерации изображений Stable Diffusion.
- [Artbreeder](https://www.artbreeder.com/) - Artbreeder - это новый тип творческого инструмента, который расширяет возможности пользователей, облегчая совместную работу и изучение.
- [Magic Eraser](https://magicstudio.com/magiceraser/) - Удалите нежелательные вещи из изображений за считанные секунды.
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - Инструмент от Magic Studio, который позволяет вам выразить себя, просто описывая то, что у вас на уме.
- [Alpaca](https://www.getalpaca.io/) - Плагин Stable Diffusion Photoshop.
- [Patience.ai](https://www.patience.ai/) - Patience.ai - это приложение для создания изображений со стабильной диффузией, передовым ИИ, разработанным Stability. ИИ.
- [GenShare](https://www.genshare.io/) - Создавайте искусство в считанные секунды бесплатно. Создавайте и делитесь тем, что создаете. Мультимедийная генеративная студия, демократизирующая дизайн и творчество.
- [Playground](https://playground.com/) - Playground - это бесплатный онлайн-создатель изображений AI. Используйте его для создания произведений искусства, сообщений в социальных сетях, презентаций, плакатов, видео, логотипов и многого другого.
- [modyfi](https://www.modyfi.com/) - Браузерная дизайнерская платформа с генерацией изображений на основе ИИ, анимацией и сотрудничеством в реальном времени.
- [PhotoRoom](https://www.photoroom.com/) - Создавайте изображения и портреты, используя только телефон. Удалите фон, измените фон и продемонстрируйте продукты.
- [Photo AI](https://photoai.com/ai-avatars) - Создайте свои собственные аватары, созданные ИИ.
- [ClipDrop](https://clipdrop.co/) - Создавайте профессиональные визуальные эффекты без фотостудии [stability.ai](https://stability.ai/).
- [Lensa](https://prisma-ai.com/lensa) - Приложение для редактирования изображений «все в одном», которое включает в себя генерацию персонализированных аватаров с использованием стабильной диффузии.
- [RunDiffusion](https://rundiffusion.com/) - Облачное рабочее пространство для создания искусств, созданных ИИ.
- [Ideogram](https://ideogram.ai/) - Платформа преобразования текста в изображение, чтобы сделать творческое выражение более доступным.
- [Bing Image Creator](https://www.bing.com/images/create) - Генератор текстовых изображений на основе DALLE·3 с функциями безопасности.
- [KREA](https://www.krea.ai/) - Создавайте высококачественные визуальные эффекты с помощью ИИ, который знает о ваших стилях, концепциях или продуктах.
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creator - это приложение AI Art Generator с несколькими методами генерации искусств ИИ.
- [Leonardo AI](https://leonardo.ai/) - Создайте визуальные активы для ваших проектов с беспрецедентным качеством, скоростью и стилем.
- [Recraft](https://www.recraft.ai/) - Инструмент ИИ, который позволяет создателям легко генерировать и итерировать оригинальные изображения, векторное искусство, иллюстрации, иконки и 3D-графику.
- [Reve Image](https://reve.com/) - Модель, обученная с нуля, чтобы преуспеть в быстрой приверженности, эстетике и типографии.
- [Magnific](https://www.magnific.com/) - Инструменты дизайна на основе ИИ, включая генерацию изображений, удаление фона и творческие шаблоны.
- [FigureLabs](https://www.figurelabs.ai/) - Инструмент искусственного интеллекта для создания готовых к публикации научных фигур в векторном формате из текстовых описаний или эскизов.

### Графический дизайн

- [Brandmark](https://brandmark.io/) - Инструмент дизайна логотипа на основе ИИ.
- [Gamma](https://gamma.app/) - Создавайте красивые презентации и веб-страницы без форматирования и дизайна.
- [Microsoft Designer](https://designer.microsoft.com/) - Потрясающий дизайн во вспышке.
- [Napkin](https://www.napkin.ai/) - Инструмент ИИ для создания диаграмм, диаграмм и инфографики из текста.

### Библиотеки изображений

- [Lexica](https://lexica.art/) - Стабильная поисковая система Diffusion.
- [OpenArt](https://openart.ai/) - Найдите 10M+ подсказок и создайте искусство искусственного интеллекта с помощью Stable Diffusion, DALL·E 2.
- [PromptHero](https://prompthero.com/) - Поиск подсказок для таких моделей, как Stable Diffusion, ChatGPT, Midjourney и т. Д.
- [PromptBase](https://promptbase.com/) - Поиск подсказок от лучших инженеров. Продавайте свои подсказки.

### Модели библиотек

- [Civitai](https://civitai.com/) - Инструмент совместного использования моделей AI.
- [Stable Diffusion Models](https://rentry.org/sdmodels) - Полный список контрольно-пропускных пунктов на сайте rentry.org.

### Стабильные диффузионные ресурсы

- [Stable Horde](https://stablehorde.net/) - Краудсорсинг распределенного кластера стабильных работников диффузии.
- [DiffusionDB](https://diffusiondb.com/) - Список всех общедоступных приложений, инструментов для разработчиков, руководств и плагинов для стабильной диффузии. [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - Коллекция бесплатных подсказок для стабильной диффузии.
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - Материалы Python для онлайн-курса по диффузионным моделям [@huggingface](https://github.com/huggingface).
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - Узловой интерфейс для создания и запуска стабильных рабочих процессов диффузии. [#opensource](https://github.com/comfyanonymous/ComfyUI)

## Видео

- [Runway](https://runwayml.com/) - Магические инструменты ИИ, сотрудничество в режиме реального времени, точное редактирование и многое другое. Ваш набор для создания контента следующего поколения.
- [Synthesia](https://www.synthesia.io/) - Создайте видео из простого текста за считанные минуты.
- [Colossyan](https://www.colossyan.com/) - Learning & Development — создатель видео. Используйте аватары ИИ для создания обучающих видео на нескольких языках.
- [Fliki](https://fliki.ai/) - Создайте текст для видео и текст для речевого контента с помощью голосов ai за считанные минуты.
- [Pictory](https://pictory.ai/) - Мощный ИИ Pictory позволяет создавать и редактировать видео профессионального качества с использованием текста.
- [Pika](https://pika.art/) - Платформа от идеи до видео, которая приводит ваше творчество в движение.
- [HeyGen](https://app.heygen.com/) - Превратите сценарии в разговорные видео с настраиваемыми аватарами ИИ за считанные минуты.
- [Luma Dream Machine](https://lumalabs.ai/app) - Модель искусственного интеллекта, которая делает высококачественное, реалистичное видео быстрым из текста и изображений.
- [KLING AI](https://kling.ai/) - Инструменты для создания образных изображений и видео.
- [Hailuo AI](https://hailuoai.video/) - Генератор текстового видео на базе ИИ.
- [Google Flow](https://labs.google/fx/tools/flow) - Инструмент для создания фильмов ИИ от Google, работающий на Veo.
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Модель от изображения к видео и от текста к видео, разработанная Niobotics ByteDance.
- [MaxVideoAI](https://maxvideoai.com/examples) - Рабочее пространство для создания и сравнения видео в нескольких моделях видео ИИ.
- [HyperFrames](https://hyperframes.heygen.com/) - Фреймворк для агентов ИИ для визуализации видео путем написания HTML, CSS и JavaScript. [#opensource](https://github.com/heygen-com/hyperframes)

### аватары

- [D-ID](https://www.d-id.com/) - Создавать и взаимодействовать с говорящими аватарами одним нажатием кнопки.
- [HeyGen](https://app.heygen.com/) - Превратите сценарии в разговорные видео с настраиваемыми аватарами ИИ за считанные минуты.
- [Affogato](https://affogato.ai/) - Создавайте видеорекламу, созданную ИИ, для TikTok, Reels и Shorts.

### анимация

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - AI-инструмент для анимации и компоновки персонажей CG в кадры с живыми действиями.

## Аудио

### Текст-речь

- [Eleven Labs](https://elevenlabs.io/) - Генератор голоса.
- [Resemble AI](https://www.resemble.ai/) - Генератор голоса ИИ и клонирование голоса для передачи текста в речь.
- [WellSaid](https://www.wellsaid.io/) - Преобразование текста в голос в реальном времени.
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - Многоголосая система преобразования текста в речь, обученная с акцентом на качество. #opensource
- [Bark](https://github.com/suno-ai/bark) - Модель преобразования текста в аудио. #opensource
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - Веб-интерфейс для запуска нескольких текстовых речей, генерации музыки и аудио инструментов. #opensource

### Речевой текст

- [Whisper](https://openai.com/index/whisper/) - Надежное распознавание речи с помощью крупномасштабного слабого надзора. [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flow делает запись быстрой с бесшовным голосовым диктантом для любого приложения на вашем компьютере.
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - Решение «все в одном» для легкой аудио и видео транскрипции. [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - Модель Whisper Port of OpenAI на C/C++.
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - Клиент Whisper CLI совместим с исходным клиентом OpenAI, используя CTranslate2 для более быстрого вывода. [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - Платформа с открытым исходным кодом от NVIDIA для построения систем речевого ИИ, включая автоматическое распознавание речи и текстовую речь. #opensource
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - Семейство моделей открытого распознавания речи от NVIDIA, включая стриминговые и многоязычные варианты. #opensource

### Музыка

- [Harmonai](https://www.harmonai.org/) - Мы являемся организацией, управляемой сообществом, выпускающей генеративные аудиоинструменты с открытым исходным кодом, чтобы сделать производство музыки более доступным и интересным для всех.
- [Mubert](https://mubert.com/) - Бесплатная музыкальная экосистема для создателей контента, брендов и разработчиков.
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - Модель Google Research для создания высококачественной музыки из текстовых описаний.
- [AudioCraft](https://audiocraft.metademolab.com/) - Одностопная кодовая база для генеративных аудиопотребностей от Meta. Включает MusicGen для музыки и AudioGen для звуков. #opensource
- [Stable Audio](https://stability.ai/stable-audio) - Стабильный звук – это стабильность Первый продукт ИИ для создания музыки и звуковых эффектов.
- [AIVA](https://www.aiva.ai/) - Помощник поколения музыки на основе ИИ. Выбирайте из более чем 250 стилей.
- [Suno AI](https://suno.com/) - Каждый может создать хорошую музыку. Инструмент не нужен, только воображение. От мысли к музыке.
- [Udio](https://www.udio.com/) - Откройте для себя, создавайте и делитесь музыкой со всем миром.

## другой

- [PromptBase](https://promptbase.com/) - Рынок для покупки и продажи качественных подсказок для DALL·E, GPT-3, Midjourney, Stable Diffusion.
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - Проверьте свою способность определить, генерируется ли изображение человеком или компьютером.
- [Have I Been Trained?](https://haveibeentrained.com/) - Проверьте, использовалось ли ваше изображение для обучения популярных моделей искусств ИИ.
- [AI Dungeon](https://aidungeon.io/) - Текстовая приключенческая игра, которую вы направляете (и играете в нее), в то время как ИИ оживляет ее.
- [Clickable](https://www.clickable.so/) - Создавайте рекламу за считанные секунды с помощью ИИ. Красивая, согласованная с брендом и высоко конвертируемая реклама для всех маркетинговых каналов.
- [Scale Spellbook](https://scale.com/genai-platform) - Создавайте, сравнивайте и развертывайте приложения для больших языковых моделей с помощью Scale Spellbook.
- [Scenario](https://www.scenario.com/) - Игровые активы, созданные ИИ.
- [Teleprompter](https://github.com/danielgross/teleprompter) - ИИ на устройстве для ваших встреч, который слушает вас и делает харизматичные предложения цитат.
- [FinChat](https://finchat.io/) - Используя ИИ, FinChat генерирует ответы на вопросы о публичных компаниях и инвесторах.
- [Morpher AI](https://morpher.com/ai) - Morpher AI предоставляет информацию и анализ в режиме реального времени для любого рынка.
- [Whimsical AI](https://whimsical.com/ai) - Картирование сознания на основе GPT, блок-схемы и визуальные инструменты для быстрой разработки идей и организации процессов.
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - Сфотографируйтесь с настоящим миллиардером!

## Учебные ресурсы

- [Learn Prompting](https://learnprompting.org/) - Бесплатный курс с открытым исходным кодом по общению с искусственным интеллектом.
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - Руководство и ресурсы для быстрой инженерии.
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - Короткий курс Исы Фулфорда (OpenAI) и Эндрю Нг (DeepLearning.AI).
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Примеры и руководства по использованию OpenAI API.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Стратегии и тактика получения лучших результатов от больших языковых моделей.
- [PromptPerfect](https://promptperfect.jina.ai/) - Инструмент для быстрой инженерии.
- [Anthropic courses](https://github.com/anthropics/courses) - Образовательные курсы Антропика.
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - Руководство по созданию собственного рабочего LLM, Себастьян Рашка.
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - Бесплатное глубокое обучение. Краткий курс ИИ о том, как подсказывать модели компьютерного зрения с помощью естественного языка, ограничивающих коробок, масок сегментации, точек координат и других изображений.
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - Руководство по созданию рабочей модели рассуждения с нуля, Себастьян Рашка.
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - Книга о создании агентов ИИ с инструментами, памятью, планированием и мультиагентными системами.
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - Книга о внедрении архитектуры LLM в стиле DeepSeek, методах обучения и дистилляции.
- [AI Governance](https://www.manning.com/books/ai-governance) - Книга об управлении, рисках, соблюдении, безопасности, конфиденциальности и надзоре за генеративными системами ИИ.
- [AnimatedLLM](https://animatedllm.github.io/) - Интерактивная визуализация, объясняющая, как работают языковые модели. [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - Интерактивная визуализация того, как работают трансформаторные LLM, работающие с моделью GPT-2 в браузере. [#opensource](https://github.com/poloclub/transformer-explainer)

## Больше списков

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - Большой список ноутбуков Google Colab для генеративного ИИ [@pharmapsychotic](https://twitter.com/pharmapsychotic).
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - Инфографика, которая отображает генеративную экосистему ИИ [Sonya Huang](https://twitter.com/sonyatweetybird) Секвойя Капитал.
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - Список авиабилетов от [@builtwithgenai](https://twitter.com/builtwithgenai).
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - Список авиабилетов от [Scale Venture Partners](https://www.scalevp.com/generative-ai).
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - Карта рынка компаний, работающих над генеративным ИИ для игр [a16z](https://a16z.com/).
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - Кураторский список генеративных инструментов глубокого обучения, работ, моделей и т. Д. Для художественного использования [@filipecalegario](https://github.com/filipecalegario/).
- [GPT-3 Demo](https://gpt3demo.com/) - Витрина с примерами GPT-3, демо, приложениями, витриной и примерами использования NLP.
- [GPT-4 Demo](https://gpt4demo.com/) - Приложения GPT-4 и варианты использования.
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - Коллекция удивительных генеративных приложений ИИ.
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - Список молекулярного дизайна с использованием генеративного ИИ и глубокого обучения.
- [Open LLMs](https://github.com/eugeneyan/open-llms) - Список открытых LLM, доступных для коммерческого использования.
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - Список инструментов ИИ для музыкальной композиции, генерации и анализа.
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - Кураторский список карт рынка ИИ от 2026, 2025 и 2024 годов [Joy Larkin](https://twitter.com/joy).
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - Список инструментов и ресурсов для построения производственных систем RAG.

### Списки в ChatGPT

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - Список потрясающих инструментов, демонстраций, документов для ChatGPT и GPT-3 [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - Коллекция быстрых примеров для использования с моделью ChatGPT.
- [FlowGPT](https://flowgpt.com/) - Усильте свой рабочий процесс с помощью лучших подсказок.
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - Хранилище полезных научных данных для ChatGPT.
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - Еще один замечательный список для ChatGPT.
