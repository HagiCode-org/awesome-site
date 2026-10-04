# Подборка TypeScript

## 🗄️ Примечание об архиве

<details>
  <summary><strong>Краткое содержание (2026)</strong> — Почему список архивирован</summary>
<hr/>
Я запустил awesome-typescript 11 лет назад, когда TypeScript ещё формировался и был далёк от сегодняшнего статуса выбора по умолчанию. Тогда сбор и отбор ресурсов имели значение: они помогали первым пользователям находить надёжные материалы, делиться опытом и создавать сообщество вокруг инструмента, который многие разработчики недооценивали.

За прошедшие годы я много раз обсуждал будущее TypeScript (особенно в 2016–2018 годах). Я верил, что он станет краеугольным камнем современной разработки. Сегодня очевидно, что так и произошло. TypeScript теперь фактически является языком фронтенд-разработки и встречается повсюду: в приложениях, SDK, примерах и даже проектах, лишь косвенно связанных с ним.

Этот успех создал новую проблему для списка. Когда TypeScript используют почти в каждом проекте, принимать все возможные дополнения — уже не курирование, а бесконечная поддержка. Вклад сообщества сократился, соотношение сигнала и шума изменилось, а дальнейшее расширение списка перестало служить первоначальной цели.

Вместо поддержки списка, который больше не может отражать осмысленную подборку лучших ресурсов в нынешних условиях, я архивирую awesome-typescript и сохраняю его как исторический справочник.

Спасибо всем, кто участвовал: отправлял pull request, предлагал ресурсы или делился отзывами. Благодаря вам список был полезен тогда, когда это было особенно важно, и объединил раннее сообщество TypeScript.
<br/><hr />

</details>

<hr />

#### -= Awesome TypeScript =- [Awesome Elasticsearch](https://github.com/dzharii/awesome-elasticsearch) →

> Подборка отличных ресурсов TypeScript для клиентской и серверной разработки. Пишите отличный JavaScript на TypeScript. Вдохновлено списками [awesome](https://github.com/sindresorhus/awesome).

## Другие awesome-ресурсы

> [semlinker/awesome-typescript](https://github.com/semlinker/awesome-typescript) спасибо @semlinker за составление списка!

## Участие

Сначала ознакомьтесь с [правилами участия](/contributing.md). Если какой-либо пакет или проект здесь больше не поддерживается или не подходит, отправьте pull request, чтобы улучшить этот файл.

## Содержание

- [Основные ресурсы TypeScript](#awesome-typescript-essential-resources)
- [Стартовые шаблоны проектов TypeScript](#typescript-project-starters)
- [Книги](#books)
- [Справочные списки](#reference-lists)
- [Блоги](#blogs)
- [CLI и REPL](#cli-and-repl)
- [IDE](#ide)
- [Системы сборки](#build-systems)
- [Облачные хранилища данных](#cloud-data-warehousing)
- [Сборщики модулей](#module-bundlers)
- [CMS](#cms)
- [Инструменты](#tools)
- [CSS-in-JS с типами](#css-in-js-with-types)
- [Типы](#types)
- [Среда выполнения](#runtime)
- [Создано на TypeScript: мобильные приложения, веб, бэкенд API, автономные приложения, библиотеки](#built-with-typescript)
- [LLM](#llm)
- [Видеокурсы](#video-courses)
- [Руководства](#tutorials)
- [Дорожная карта](#roadmap)
- [Благодарности](#acknowledgements)

## Начало работы с (Awesome) TypeScript

### Основные ресурсы TypeScript
* :books: [Handbook - Welcome to TypeScript](http://www.typescriptlang.org/Handbook) — официальный ресурс для изучения TypeScript
* :books: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) авторства [Basarat Ali Syed](https://twitter.com/basarat)
* :octocat: [Microsoft/TypeScript on Github](https://github.com/Microsoft/TypeScript) форк TypeScript на GitHub! Или… просто изучите исходный код
* :octocat:[Официальная дорожная карта TypeScript](https://github.com/Microsoft/TypeScript/wiki/Roadmap)
* :books: [TypeScript Team Blog](http://blogs.msdn.com/b/typescript/) — новости и последние обновления
* :octocat: [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) — репозиторий высококачественных определений типов TypeScript, поддерживаемых Борисом Янковым и тысячами участников
* :octocat: [Type search](https://aka.ms/typings), поиск определений типов на npm
* :books: [Community Curated Resources](https://hackr.io/tutorials/learn-typescript)
* :octocat: [Принципы чистого кода, адаптированные для TypeScript](https://github.com/labs42io/clean-code-typescript)
* :computer: [Стоит ли изучать TypeScript? (преимущества и ресурсы)](https://snipcart.com/blog/learn-typescript-why-use-ts)
* :computer: [Узнайте, как раскрыть весь потенциал тьюринг-полной системы типов TypeScript!](https://type-level-typescript.com), 💵 онлайн-курс: первые 5 глав бесплатны, автор — [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud)
* :computer: [Codington](https://codington.io) Интерактивные упражнения по TypeScript с мгновенной обратной связью для обучения и преподавания.
* :octocat: [Codebook](https://github.com/gvanastasov/codebook-typescript) читайте и запускайте небольшие фрагменты кода, чтобы постепенно изучать TypeScript — от основ до продвинутых концепций.
* :octocat: [Type Challenges](https://github.com/type-challenges/type-challenges) Подборка заданий по типам TypeScript с онлайн-системой проверки.
- :books: [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide) Краткий набор соглашений и лучших практик для создания единообразного и удобного в сопровождении кода.
- :art: [Visual Types](https://types.kitlangton.com/) Интерактивная визуализация концепций TypeScript. Полюбуйтесь красивыми цветами.

### Стартовые шаблоны проектов TypeScript
* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — полнофункциональный шаблон для создания современных веб-приложений на Bun, TypeScript, React, tRPC, Drizzle ORM и Cloudflare Workers.
* [typescript-starter](https://github.com/bitjson/typescript-starter) — CLI для быстрого создания и настройки новых библиотек и проектов Node.js
* [next-smrt](https://github.com/csprance/next-smrt) — шаблон на TypeScript/Next.js с Redux, Styled Components, Material UI и TypeSafe Actions.
* :octocat: [Next-Postgres-With-Typescript](https://github.com/brandontle/next-postgres-with-typescript) — шаблон полнофункционального веб-приложения в стиле форума на Next.js 7.0.2 + Sequelize 4/Postgres + TypeScript + Redux + Passport Local Auth + Emotion
* [MicroTS](https://www.npmjs.com/package/microts) Генератор кода микросервисов с подходом «сначала интерфейс»: по спецификации REST API в OpenAPI (Swagger) создаётся готовый проект с кодом TypeScript, валидатором входных данных, интерфейсом, тестами и конфигурацией Docker.
* [pankod/next-boilerplate](https://github.com/pankod/next-boilerplate) Хорошо структурированный готовый к production шаблон Next.js с TypeScript, Redux, Jest, Enzyme, Express.js, Sass, CSS, EnvConfig, обратным прокси, анализатором бандла и встроенным CLI.
* [jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate) Актуальный, готовый для разработчиков и функциональный, но минималистичный шаблон. Сразу работает в большинстве проектов Node.js. Все основные инструменты включены и настроены. Поддерживает последние выпуски Node.js LTS и TypeScript.
* [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) — быстрый и простой стартовый шаблон TypeScript для Express.
* [The Knests Stack](https://github.com/tudorconstantin/knests/) — полнофункциональный шаблон (стартовый проект для хакатонов) с PostgreSQL, Knex.js, NestJS, Next.js, GraphQL, React (с хуками и TypeScript), Material-UI, многоэтапными образами Docker, Docker Compose и полностью настроенным конвейером GitLab CI/CD.
* [tRPC + Next.js](https://trpc.io/docs/nextjs/introduction) — полнофункциональные стартовые проекты для сквозной разработки с типобезопасностью и React
* [nd.ts](https://github.com/heyayushh/nd.ts/) — быстрое создание минимального проекта Node.ts
* :octocat: [samchon/backend](https://github.com/samchon/backend) — шаблон серверной части на TypeScript с [NestJS](https://nestjs.com) ([nestia](https://github.com/samchon/nestia)) и [TypeORM](https://typeorm.io) ([safe-typeorm](https://github.com/samchon/safe-typeorm)). Помогает начинающим разработчикам серверной части с помощью производных примеров проектов. Также поддерживает обновления без остановки на уровне процессов с помощью [pm2](https://pm2.keymetrics.io/).
* :ok_man: [ts-express-boilerplate](https://github.com/d4rkstar/ts-express-boilerplate) — шаблон ExpressJS/TypeScript для старта серверных проектов с упором на простоту и минимальный набор функций :P Встроены настройка журналирования и тестирования. Для доступа к данным используется TypeORM.
* [create-typescript-app](https://github.com/hein-htut-aung/create-typescript-app) — отправная точка для веб-приложений на TypeScript: pnpm, Rollup, Jest и CSS Modules с SCSS.
* [ts-vite-npm-template](https://github.com/kaandesu/ts-vite-npm-template) — универсальное решение для создания NPM-пакетов на TypeScript с Vite: включает публикацию интерактивной демонстрации на GitHub Pages, автоматизированные процессы тестирования и сборки, настройку модульных тестов на Vite, включая анализ покрытия, и шаблон README.md для пакета.

### Книги
* :books: [TypeScript in 50 Lessons](https://typescript-book.com/) авторства Stefan Baumgartner
* :books: :fire: [TypeScript Quickly](https://www.manning.com/books/typescript-quickly) Изучите современный TypeScript и создайте собственный блокчейн; примеры кода: :octocat:[yfain/getts](https://github.com/yfain/getts)
* :books: [Angular Development with Typescript, Second Edition (MEAP October 2017)](https://www.manning.com/books/angular-development-with-typescript-second-edition) Книга «Angular Development with TypeScript, Second Edition» — учебник среднего уровня, знакомящий с Angular и TypeScript разработчиков, уже умеющих создавать веб-приложения с помощью других платформ и инструментов. (авторы: Yakov Fain и Anton Moiseev; Manning)
* :books: [Angular 2 Development with TypeScript (2016)](https://www.manning.com/books/angular-2-development-with-typescript) авторства Yakov Fain и Anton Moiseev; Manning
* :books: [Learning TypeScript 2.x 2nd Ed.](https://www.learningtypescript.com) авторства Remo H. Jansen
* :books: [Mastering TypeScript 2nd Ed.](https://www.packtpub.com/application-development/mastering-typescript-second-edition) авторства Nathan Rozentals
* :books: [Beginning Angular 4 with TypeScript](https://www.amazon.com/Beginning-Angular-Typescript-Greg-Lim/dp/1542916674) авторства Greg Lim
* :books: [Programming with Types](https://www.manning.com/books/programming-with-types) — книга о проектировании безопасного, устойчивого и корректного ПО, которое легко сопровождать и понимать, используя возможности систем типов. (автор: Vlad Riscutia)
* :books: [Essential TypeScript 5](https://www.manning.com/books/essential-typescript-5) — третье издание бестселлера о TypeScript. (автор: Adam Freeman)
* :books: [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/) авторства Dan Vanderkam
* :books: [Advanced TypeScript 3 Programming Projects](https://www.packtpub.com/product/advanced-typescript-3-programming-projects/9781789133042) авторства Peter O'Hanlon
* :books: [The Concise TypeScript Book (Free and Open Source)](https://github.com/gibbok/typescript-book) авторства Simone Poggiali
* :books: [Acing the Frontend Interview (Early Access)](https://www.manning.com/books/acing-the-frontend-interview) авторства Jennifer Fu (Manning)

### Справочные списки
* [TypeScript Reference for JS developers](https://welldan97.github.io/typescript-reference/) — глоссарий ключевых слов, операторов, инструкций и директив

### Блоги
* [@captain-yossarian's blog](https://catchts.com/) — полностью посвящён статической типизации в TypeScript

### CLI и REPL
* [Taze](https://github.com/antfu/taze) Современный CLI-инструмент, который поддерживает актуальность ваших зависимостей
* Use [ts-node](https://github.com/TypeStrong/ts-node) для запуска скриптов или REPL используйте
* Как создавать исполняемые скрипты TypeScript:
  1. Убедитесь, что установлены `npx` (входит в `npm >= 5.2`) и пакет `typescript`
  1. Добавьте эту [шебанг-строку](https://en.wikipedia.org/wiki/Shebang_(Unix)) в качестве первой строки скрипта: `#!npx ts-node`
  1. Сделайте скрипт исполняемым: `chmod +x script.ts`
  1. Запустите напрямую: `./script.ts` :)

### Среды разработки (IDE)
#### Офлайн
##### Visual Studio
* [ Visual Studio Community Edition 2015](https://www.visualstudio.com/products/visual-studio-community-vs) — условно-бесплатная IDE со встроенной поддержкой TypeScript
  * [VS Addon - TypescriptSyntaxPaste](https://visualstudiogallery.msdn.microsoft.com/eb0887f8-3ac1-434a-b50b-f0112f1572f7) — позволяет копировать исходный код C#, а затем вставлять его в синтаксис TypeScript, помогая преобразовывать DTO или интерфейсы
* [NodeJS Tools for Visual Studio](https://github.com/Microsoft/nodejstools)

##### Другие (плагины || кроссплатформенные || с открытым исходным кодом || бесплатные)
* [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)
* [PhpStorm](https://www.jetbrains.com/phpstorm/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/)
* [CATS](http://jbaron.github.io/cats/) — IDE для разработчиков TypeScript и веб-разработки от @jbaron
* [TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) авторства @Microsoft
* [Atom TypeScript](https://github.com/TypeStrong/atom-typescript) авторства @TypeStrong
* [Интерактивная среда разработки TypeScript для Emacs](https://github.com/ananthakumaran/tide) авторства @ananthakumaran
* [TypeScript Syntax for VIM](https://github.com/leafgarland/typescript-vim)
* :octocat: [Дополнение TypeScript для](https://github.com/mrward/typescript-addin) MonoDevelop, SharpDevelop и Xamarin Studio; краткая [статья-обзор](http://lastexitcode.com/blog/2015/04/01/TypeScriptSupportInXamarinStudio/)
* [Инструменты TypeScript для Neovim](https://github.com/mhartington/nvim-typescript) — плагин языковой службы TypeScript для Neovim.
* [Coc](https://github.com/neoclide/coc.nvim) Сделайте Vim/Neovim таким же умным, как VSCode.

#### Онлайн

##### Песочница
* [TypeScript playground](https://agentcooper.github.io/typescript-play/) авторства @agentcooper; поддерживает несколько версий TS и целевых платформ компилятора
* [TypeScript playground-on-ace](https://github.com/hi104/typescript-playground-on-ace) авторства @hi104; [обновлён до TypeScript 1.5](https://github.com/basarat/TypeScriptEditor)
* [TypeScript official Playground](http://www.typescriptlang.org/Playground/)
* [JS Bin](http://jsbin.com/?js) (выберите TypeScript)
* [Codepen](http://codepen.io/) (выберите TypeScript)
* [TypeScript Interpret - Terminal Emulator](http://niutech.github.io/typescript-interpret/) авторства @niutech
* [TypeScript Editor](http://drake7707.github.io/Typescript-Editor/) авторства @drake7707

## Системы сборки
* [Grunt](http://gruntjs.com/) задачи:
  - [grunt-ts](https://www.npmjs.com/package/grunt-ts) — пакет npm, выполняющий компиляцию TypeScript в сценариях сборки GruntJS
* [Zwitterion](https://github.com/lastmjs/zwitterion) — предельно простой сервер разработки со встроенной поддержкой файлов TypeScript.
* [Nx](https://github.com/nrwl/nx) — умная, быстрая и расширяемая система сборки

## Облачные хранилища данных
* :sparkles: [Crisp BigQuery](https://github.com/winwiz1/crisp-bigquery) Стартовый проект, доставляющий данные Google BigQuery в браузеры конечных пользователей с контролем затрат. Позволяет реализовать широкие возможности представления данных.
* [DDB-Table](https://github.com/neuledge/ddb-table) Строго типизированные запросы и таблицы для AWS DynamoDB
* [DynamoDB-Toolbox](https://github.com/dynamodb-toolbox/dynamodb-toolbox) Лёгкий конструктор запросов для AWS DynamoDB с проверкой типов

## Сборщики модулей
* [Farm](https://farm-fe.github.io/) — чрезвычайно быстрый инструмент сборки веб-проектов, совместимый с Vite и написанный на Rust
* [Rspack](https://www.rspack.dev/) — быстрый сборщик веб-проектов на Rust 🦀️
* [Vite](https://vitejs.dev/) — инструменты фронтенд-разработки нового поколения
* [Webpack](http://webpack.github.io/) — поддерживает сборку модулей CommonJS и AMD
* [Browserify](http://browserify.org/) — сборщик модулей CommonJS. Не поддерживает TypeScript «из коробки», но его можно использовать с задачами [Grunt](http://gruntjs.com/): [grunt-ts](https://www.npmjs.com/package/grunt-ts), [grunt-browserify](https://www.npmjs.com/package/grunt-browserify), [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
* [fuse-box](https://github.com/fuse-box/fuse-box) | [http://fuse-box.org/](http://fuse-box.org/) — пример на TypeScript: [fuse-box-ts-react-reflux-seed](https://github.com/fuse-box/fuse-box-ts-react-reflux-seed)

## Системы управления контентом (CMS)
* [Factor](https://factor.dev) — CMS на JavaScript (встроенная поддержка TypeScript)
* [Graphweaver](https://github.com/exogee-technology/graphweaver) — объединяет несколько источников данных в единую безголовую CMS на GraphQL.

## Инструменты
* [sqlx-ts](https://github.com/JasonShin/sqlx-ts) — CLI-приложение с запросами, проверяемыми во время компиляции без DSL; генерирует типы по SQL-запросам, чтобы код оставался типобезопасным
* [bun](https://bun.sh/) — быстрая среда выполнения JavaScript, менеджер пакетов, сборщик и средство запуска тестов
* [deno](https://deno.land/) — безопасная среда выполнения JavaScript и TypeScript
* [OXC](https://github.com/web-infra-dev/oxc) — набор высокопроизводительных инструментов для JavaScript и TypeScript, написанных на Rust
* [biome](https://github.com/biomejs/biome) — форматирует и проверяет ваш код за доли секунды
* [SweetIQ/schemats](https://github.com/SweetIQ/schemats) Генерирует определения интерфейсов TypeScript из схемы базы данных SQL
* [TypeDoc](http://typedoc.org/) — генератор документации для проектов TypeScript
* [TypeScript Standard](https://github.com/e2tox/typescript-standard) — проверка стандарта TypeScript 2 без настройки
* [typed-install](https://github.com/xavdid/typed-install) — легко устанавливайте новые зависимости и соответствующие определения типов, где бы они ни находились
* [type-config](https://github.com/Saul-Mirone/type-config) — генератор конфигурации для tsconfig.
* [Zapatos](https://jawj.github.io/zapatos/) — Postgres для TypeScript без абстракций
* [dep-tree](https://github.com/gabotechs/dep-tree) — визуализирует дерево файловых зависимостей проекта и/или проверяет его по заданным вами правилам.
* [itertools-ts](https://github.com/Smoren/itertools-ts) — расширенный порт itertools для TypeScript и JavaScript. Предоставляет множество функций для работы с итерируемыми коллекциями, в том числе асинхронными.
* [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) — компилятор интернационализации, генерирующий полностью типобезопасные переводы
* [pg](https://github.com/datawan-labs/pg) — песочница PostgreSQL в браузере без сервера: только клиент и pglite (PostgreSQL на WebAssembly)
* [nocodb](https://github.com/nocodb/nocodb) — альтернатива Airtable с открытым исходным кодом
* [jqlite](https://github.com/Jay-Karia/jqlite) — язык запросов для JSON
* [pompelmi](https://github.com/pompelmi/pompelmi) — проверка загружаемых файлов на вредоносное ПО в Node.js для защиты от удалённого включения файлов (RFI); доступны адаптеры для Express, Koa и Next.js
* [codables](https://codableslib.com/) — основанный на декораторах декларативный сериализатор/десериализатор JSON с богатыми типами, поддерживающий почти любые типы данных
* [Rev-dep](https://github.com/jayu/rev-dep) — отслеживайте импорты, находите циклические зависимости и неиспользуемый код, очищайте node_modules — и всё это с помощью молниеносного CLI.

## Типы
* [jsonup](https://github.com/tani/jsonup) — парсер JSON на этапе компиляции
* [type-o-rama](https://github.com/stereobooster/type-o-rama) — совместимость систем типов JavaScript
* [utility-types](https://github.com/piotrwitek/utility-types) — вспомогательные типы TypeScript (совместимые со вспомогательными типами Flow)
* [elm-ts](https://github.com/gcanti/elm-ts) — перенос архитектуры Elm на TypeScript с использованием fp-ts, io-ts, rxjs5 и React
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) — все необходимые типы TypeScript в одном месте
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) — вспомогательные средства для обобщённых типов TypeScript
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) — утилиты для типов TypeScript
* [typesync](https://github.com/jeffijoe/typesync) — устанавливает отсутствующие определения типов TypeScript для зависимостей из package.json.
* [type-fest](https://github.com/sindresorhus/type-fest) — коллекция необходимых типов TypeScript
* [typetype](https://github.com/mistlog/typetype) — язык программирования для генерации типов TypeScript
* [nominal](https://github.com/Coder-Spirit/nominal) — номинальные и зависимые типы для TypeScript.
* [@tool-belt/type-predicates](https://github.com/tool-belt/type-predicates) — предикаты типов, функции утверждения и утилиты.
* [getmytypes](https://github.com/halchester/getmytypes) — устанавливает файлы @types в devDependencies.
* [ts-toolbelt](https://github.com/millsp/ts-toolbelt) — большая коллекция утилит для типов TypeScript
* [string-ts](https://github.com/gustavoguichard/string-ts) — строго типизированные строковые функции для любых задач
* [lib-result](https://github.com/AhmedOsman101/lib-result) — лёгкий тип `Result` в духе Rust для типобезопасной обработки ошибок в TypeScript и JavaScript.
* [iso-locale](https://github.com/reacture-io/iso-locale) — комплексная библиотека TypeScript со стандартами ISO для работы со странами, языками, диалектами и валютами.

## CSS-in-JS с типами
* [PandaCSS](https://panda-css.com/) — CSS-in-JS с генерацией стилей во время сборки, поддержкой RSC и множества вариантов, а также первоклассным опытом разработки
* [Vanilla-Extract](https://vanilla-extract.style/) — используйте TypeScript как препроцессор. Пишите типобезопасные локальные классы, переменные и темы, а затем генерируйте статические CSS-файлы во время сборки
* [StyleX](https://stylexjs.com/) — библиотека JavaScript для определения стилей оптимизированных пользовательских интерфейсов

### Среда выполнения
* [json-decoder](https://github.com/venil7/json-decoder) — типобезопасный декодер JSON и средство проверки во время выполнения
* [typescript-is](https://github.com/woutervh-/typescript-is) — трансформер TypeScript, генерирующий проверки типов во время выполнения.
* [type-plus](https://github.com/unional/type-plus) — дополнительные типы и утилиты с адаптированными типами
* [Agent Framework](https://github.com/agentframework/agentframework) Создавайте перехватчики для классов и методов с помощью декораторов
* [SunTori](https://github.com/LancerComet/SunTori) — сериализатор/десериализатор JSON для обеспечения безопасности данных во время выполнения.
* [config](https://github.com/mrspartak/config) — разрешение конфигурации во время выполнения

## Проверка
* [@core/match](https://github.com/tani/ts-match) — типобезопасное деструктурирующее присваивание с проверкой сопоставления с образцом
* [io-ts](https://github.com/gcanti/io-ts) — система типов времени выполнения для декодирования/кодирования ввода-вывода
* [zod](https://github.com/vriad/zod) — проверка схем с приоритетом TypeScript и статическим выводом типов
* [valibot](https://github.com/fabian-hiller/valibot) — библиотека схем TypeScript со статическим выводом типов; исключительно лёгкая по сравнению с Zod и не имеющая зависимостей.
* [runtypes](https://github.com/pelotom/runtypes) — проверка данных во время выполнения по статическим типам
* [ts-codec](https://github.com/julienvincent/ts-codec) — кодеки TypeScript для кодирования, декодирования и проверки данных
* [ow](https://github.com/sindresorhus/ow) — проверка аргументов функций для людей
* [superstruct](https://github.com/ianstormtaylor/superstruct) — простой и компонуемый способ проверки данных
* [computed-types](https://github.com/neuledge/computed-types) — проверки для TypeScript по образцу Joi 🦩
* [json-schema-to-ts](https://github.com/thomasaribart/json-schema-to-ts) — динамический вывод типов из схем JSON
* [Yunomix](https://github.com/LancerComet/MyWebLibs/tree/master/Yunomix) — набор средств проверки форм, спроектированный в стиле АОП.
* [typia](https://github.com/samchon/typia) — валидатор времени выполнения, в 20 000 раз быстрее, использующий чистые типы TypeScript. Требуется всего одна строка, например `typia.assert<T>(input)`. Также обеспечивает сериализацию JSON в 200 раз быстрее и поддерживает Protocol Buffers. 🚀 (см. также https://typia.io/docs)
* [fta](https://github.com/sgb-io/fta) — статический анализ на Rust для контроля качества кода
* [dto-classes](https://github.com/rsinger86/dto-classes) — удобный для разработчиков разбор, проверка и сериализация. Статические типы по умолчанию. Схемы полей задаются свойствами, а не декораторами.
* [iso-locale](https://github.com/reacture-io/iso-locale) — комплексная библиотека TypeScript со стандартами ISO для работы со странами, языками, диалектами и валютами.
## Создано на TypeScript
### Мобильные приложения
* :octocat: [ReactNative](https://reactnative.dev/) — создавайте нативные приложения для Android, iOS и других платформ с помощью React
* :octocat: [NativeScript](https://github.com/NativeScript/NativeScript) — платформа с открытым исходным кодом для создания кроссплатформенных действительно нативных мобильных приложений для iOS, Android и Windows на JavaScript
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### Веб
* :octocat: [Angular](https://github.com/angular/angular) — платформа разработки для создания мобильных и настольных веб-приложений
* :octocat: [It-Tools](https://it-tools.tech/) — коллекция полезных онлайн-инструментов для разработчиков с отличным UX
* :octocat: [Fedify](https://github.com/fedify-dev/fedify) — платформа TypeScript для создания федеративных серверных приложений на основе ActivityPub и Fediverse
* :octocat: [feednext.io](https://github.com/feednext/feednext) — социальное приложение с открытым исходным кодом, созданное на TypeScript как на клиентской, так и на серверной стороне.
* :octocat: [ionic](https://github.com/ionic-team/ionic) — платформа разработки мобильных приложений с открытым исходным кодом, написанная на TypeScript
* :octocat: [React-UWP](https://github.com/myxvisual/react-uwp) — компоненты React, реализующие дизайн UWP и Fluent Design от Microsoft.
* :octocat: [palantir/plottable](https://github.com/palantir/plottable) — библиотека модульных компонентов диаграмм на основе `D3` (см. также: http://plottablejs.org)
* :octocat: [APIs-guru/graphql-voyager](https://github.com/APIs-guru/graphql-voyager) — представляйте любой API GraphQL в виде интерактивного графа 🛰️
* :octocat: [Rebilly/ReDoc](https://github.com/Rebilly/Redoc) — справочная документация API, сгенерированная из OpenAPI/Swagger
* :octocat: [excaliburjs/Excalibur](https://github.com/excaliburjs/Excalibur) — бесплатный игровой движок JavaScript с открытым исходным кодом
* :octocat: [Bobril](https://github.com/Bobris/Bobril) — компонентный фреймворк, вдохновлённый Mithril и ReactJs. (см. также: http://bobril.com/)
* :octocat: [Stencil](https://github.com/ionic-team/stencil) — инструмент для создания современных веб-компонентов
* :octocat: [Langfuse](https://github.com/langfuse/langfuse) — платформа разработки LLM с открытым исходным кодом 🪢: трассировка, управление промптами, оценка, аналитика
* :octocat: [redux-zero](https://github.com/concretesolutions/redux-zero) — лёгкий контейнер состояния на основе Redux
* :octocat: [wretch](https://github.com/elbywan/wretch) — компактная (менее 2,2 КБ в gzip) оболочка над fetch с понятным синтаксисом.
* :octocat: [Cycle.js](https://github.com/cyclejs/cyclejs) — функциональный и реактивный фреймворк JavaScript для предсказуемого кода.
* :octocat: [Tridactyl](https://github.com/tridactyl/tridactyl) — расширение Firefox, заменяющее управление браузером на модель, основанную на единственном верном редакторе — Vim.
* :octocat: [armour/vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) — минималистичный шаблон админ-панели на vue-cli 3.0 и TypeScript, а также готовое для production решение фронтенда админ-интерфейсов ([демо](https://armour.github.io/vue-typescript-admin-template/#/dashboard))
* :octocat: [n8n.io](https://github.com/n8n-io/n8n) — инструмент автоматизации рабочих процессов с открытым исходным кодом
* :octocat: [Dnote](https://github.com/dnote/dnote) — блокнот командной строки с синхронизацией между устройствами и веб-интерфейсом.
* :octocat: [Thin Backend](https://github.com/digitallyinduced/thin-backend) — серверная часть реального времени для одностраничных приложений со сквозной типобезопасностью благодаря выведению типов из схемы Postgres
* :octocat: [Flowbite](https://github.com/themesberg/flowbite) — библиотека компонентов с открытым исходным кодом на базе Tailwind CSS с интерактивными компонентами интерфейса на TypeScript
* :octocat: [ILLA Cloud](https://www.illacloud.com/) — платформа low-code с открытым исходным кодом, альтернатива Retool и Appsmith, позволяющая разработчикам за минуты создавать внутренние инструменты.
* :octocat: [Treehouse](https://github.com/treehousedev/treehouse) — лёгкая библиотека с открытым исходным кодом для создания собственного инструмента ведения заметок.
* :octocat: [GOUI](https://github.com/intermesh/goui) — библиотека пользовательского интерфейса с открытым исходным кодом и множеством компонентов для создания веб-приложений
* :octocat: [InDom](https://github.com/constcallid/indom) — современная DOM-библиотека размером менее 4 КБ, не зависящая от стека, с автоматической очисткой, исходным кодом на TypeScript и определениями типов.
* :octocat: [Bubble Lab](https://github.com/bubblelabai/BubbleLab) — платформа автоматизации рабочих процессов на TypeScript с открытым исходным кодом, генерацией на базе ИИ, полной наблюдаемостью и экспортируемым кодом.

### Веб/ReactJS
* :octocat: [facebook/create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) Создавайте приложения React на TypeScript без настройки сборки
* :octocat: [Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) Стартовый шаблон TypeScript и React с подробным README о совместном использовании этих технологий; основан на `create-react-app`
* :scroll: [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) Шпаргалки для опытных разработчиков React, начинающих работать с TypeScript
* :octocat: [jsxtyper](https://github.com/fuselabs/jsxtyper) Генерирует интерфейсы TypeScript из файлов .jsx
* :octocat: [TodoMVC • TypeScript + React Example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react)
* :octocat: [Veritas Kanban](https://github.com/BradGroux/veritas-kanban) — самостоятельно размещаемая канбан-доска с интеграцией ИИ-агентов, созданная на React 19, TypeScript в строгом режиме и Vite 6; включает 1 255 тестов.
* :scroll: [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
* :guardsman: [**vortigern** — универсальный шаблон для создания веб-приложений с TypeScript, React, Redux и другими технологиями.](https://github.com/barbar/vortigern)
* :robot: [Автоматически преобразуйте код React в TypeScript](https://github.com/lyft/react-javascript-to-typescript-transform) Автоматическое преобразование кода React в TypeScript
* :octocat: [React Server Example TSX](https://github.com/styfle/react-server-example-tsx) Шаблон изоморфного веб-приложения с серверным рендерингом React на TypeScript
* :octocat: [React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide) Полное руководство по статической типизации в «React и Redux» с помощью TypeScript
* :octocat: [Typescript Monorepo CRA Example](https://github.com/deptno/typescript-monorepo-cra-example) — минималистичный монорепозиторий CRA + TypeScript.
* :octocat: [Typescript Monorepo Next Example](https://github.com/deptno/typescript-monorepo-next-example) — минималистичный монорепозиторий Next.js + TypeScript.
* :stars: [Crisp React](https://github.com/winwiz1/crisp-react) Шаблон с клиентской частью на React и серверной на Express. Обеспечивает производительность и расширенные возможности и помогает избежать распространённых проблем React и Express.
* :book: [React by Example](https://reactbyexample.github.io/) Учебник по React для программистов с акцентом на код
* :octocat: [Materio Free MUI React NextJS Typescript Admin Template](https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free) — мощнейший и наиболее полный бесплатный шаблон административной панели MUI React NextJS для разработчиков. Создан на TypeScript и JavaScript.
* :octocat: [Flowbite React](https://github.com/themesberg/flowbite-react) — библиотека компонентов с открытым исходным кодом на базе React, TypeScript и Tailwind CSS
* :octocat: [react-feedback-surveys](https://github.com/feedback-tools-platform/react-feedback-surveys) — лёгкие виджеты опросов без зависимостей для сбора отзывов пользователей (NPS, CSAT, CES) в приложениях React с полной поддержкой TypeScript

### Платформенная инженерия и DevOps
* :octocat: [CDK8s](https://cdk8s.io/) — определяйте приложения Kubernetes и повторно используемые абстракции с помощью TypeScript
* :octocat: [AWS CDK](https://github.com/aws/aws-cdk) — Cloud Development Kit для определения облачной инфраструктуры на TypeScript
* :octocat: [Pulumi](https://github.com/pulumi/pulumi) — инфраструктура как код на TypeScript, JavaScript, Python, Go и .NET
* :octocat: [Backstage](https://github.com/backstage/backstage) — платформа для создания порталов разработчиков, написанная на TypeScript

### Серверные API
* :octocat: [Actio](https://github.com/crufters/actio/) — фреймворк Node.js для монолитов и микросервисов.
* :octocat: [design-first](https://adam-hanna.github.io/design-first-docs/) — движок шаблонов REST API на TypeScript
* :octocat: [Fastify](https://github.com/fastify/fastify) — быстрый веб-фреймворк для Node.js с низкими накладными расходами
* :octocat: [Hono](https://hono.dev/) — небольшой, простой и сверхбыстрый веб-фреймворк для периферийных платформ. Работает в любой среде выполнения JavaScript
* :octocat: [Nest](https://github.com/nestjs/nest) — прогрессивный фреймворк Node.js для создания эффективных, масштабируемых серверных приложений корпоративного уровня на TypeScript 🚀 (см. также: https://nestjs.com/)
  * :octocat: [nestia](https://github.com/samchon/nestia) — валидация в 20 000 раз быстрее и декораторы сериализации JSON в 200 раз быстрее с помощью `typia`. Позволяет использовать чистые интерфейсы TypeScript в качестве DTO и повышает общую производительность сервера примерно в 30 раз. Также поддерживает генерацию SDK (набора функций `fetch` с определениями типов) и симулятора-заглушки (симулятора серверной части, встроенного в SDK), а также миграцию проекта NestJS только по файлу `swagger.json`. 🚀 (см. также: https://nestia.io/docs)
* :octocat: [LoopBack 4](https://github.com/strongloop/loopback-next) — чрезвычайно расширяемый фреймворк Node.js и TypeScript для создания API и микросервисов. :rocket: (см. также: https://loopback.io/)
* :octocat: [FoalTS](https://github.com/FoalTS/foal) — простой, интуитивный и полноценный фреймворк для создания приложений Node.js корпоративного уровня :boom: :rocket: (см. также: https://foalts.org)
* :octocat: [Enso](http://ensojs.netlify.com) — фреймворк Node.js с приоритетом TypeScript, вдохновлённый принципами предметно-ориентированного проектирования и ориентированный на композицию и удобство разработки
* :octocat: [Libstack](https://libstack.io) — набор модулей, упрощающих создание серверной части на TypeScript, готовой к развёртыванию в Docker.
* :octocat: [tinyhttp](https://github.com/talentlessguy/tinyhttp) — современный веб-фреймворк для Node.js в духе Express, написанный на TypeScript и скомпилированный в нативные ESM-модули.
* :octocat: [ZenTS](https://github.com/sahachide/ZenTS) — современный фреймворк для создания насыщенных веб-приложений на Node.js с приоритетом TypeScript
* :octocat: [Booster Framework](https://github.com/boostercloud/booster) — облачный бессерверный фреймворк GraphQL с открытым исходным кодом и событийной архитектурой из экосистемы Booster Cloud. Использует высокоуровневые абстракции и соглашения. (см. также: https://booster.cloud)

### ИИ

* :octocat: [MastraAI](https://github.com/mastra-ai/mastra) — фреймворк TypeScript с заданным набором соглашений, помогающий быстро создавать приложения и функции ИИ.
* :octocat: [VoltAgent](https://github.com/voltagent/voltagent) — фреймворк TypeScript для создания и запуска ИИ-агентов с инструментами, памятью и наблюдаемостью.
* :octocat: [Tambo](https://github.com/tambo-ai/tambo) — React SDK для создания генеративных интерфейсов с поддержкой MCP.
* :octocat: [Maxim AI](https://github.com/maximhq/maxim-js) — SDK для JS/TS, обеспечивающий наблюдаемость Maxim. Maxim — корпоративная платформа оценки и наблюдаемости. (см. также: https://getmaxim.ai)
* :octocat: [rehydra](https://github.com/rehydra-ai/rehydra-sdk) — SDK с нулевым доверием, локально анонимизирующий персональные данные перед отправкой промптов в LLM и незаметно восстанавливающий исходный вид ответа.

### Автономные приложения
* :octocat: [Visual Studio Code](https://github.com/Microsoft/vscode) — кроссплатформенная IDE.
* :octocat: [alm](https://github.com/alm-tools/alm) — IDE следующего поколения только для TypeScript, написанная на TypeScript и React
* :octocat: [App Outlet](https://github.com/app-outlet/app-outlet) — универсальный магазин приложений Linux для AppImages/Flatpaks/Snaps, написанный на TypeScript и Angular
* :octocat: [SnowFS](https://github.com/snowtrack/snowfs) — быстрое и масштабируемое хранилище файлов графики с контролем версий
* :octocat: [MemFree](https://github.com/memfreeme/memfree) — гибридная поисковая система на базе ИИ с открытым исходным кодом. Мгновенно получайте точные ответы из интернета, закладок, заметок и документов. Поддерживает развёртывание одним щелчком.
* :octocat: [Nostream](https://github.com/cameri/nostream) — ретранслятор Nostr, написанный на TypeScript
* :octocat: [Peekaping](https://github.com/0xfurai/peekaping) — решение для мониторинга доступности: отслеживайте веб-сайты, API и службы, получайте уведомления в реальном времени, красивые страницы состояния и подробную аналитику

##### Расширения Chrome
* [OctoLinker](https://github.com/OctoLinker/browser-extension)
* [lc-mate](https://github.com/cglotr/lc-mate) — расширение, добавляющее рейтинг участников соревнований к именам пользователей на LC

### Шаблоны проектирования
* :octocat: [Design Patterns implementation](https://github.com/torokmark/design_patterns_in_typescript) — реализация известных 23 шаблонов GoF
* :octocat: [Real World Design Patterns](https://github.com/vahidvdn/realworld-design-patterns) — шаблоны проектирования из реальной практики с тестами

### Декораторы
- :octocat: [Performance Decorators](https://github.com/RyanMyrvold/Performance-Decorators) — коллекция декораторов TypeScript для оптимизации производительности, включая журналирование времени выполнения, мониторинг использования памяти и многое другое.

### Библиотеки
* :octocat: [SuperJSON](https://github.com/blitz-js/superjson) — безопасная сериализация выражений JavaScript в расширенный вариант JSON, включающий даты, BigInt и многое другое
* :octocat: [Procedurem](https://github.com/ImVexed/Procedurem) — небольшая (2 КБ) и производительная двунаправленная RPC-библиотека на WebSocket.
* :octocat: [RxJS](https://github.com/ReactiveX/RxJS) — библиотека реактивного программирования для JavaScript.
* :octocat: [xstream](https://github.com/staltz/xstream) — чрезвычайно интуитивная, компактная и быстрая библиотека функциональных реактивных потоков для JavaScript.
* :octocat: [mockt](https://github.com/nbottarini/mockt) — удобная библиотека моков для TypeScript и JavaScript
* :octocat: [substitute.js](https://github.com/ffMathy/FluffySpoon.JavaScript.Testing) — гибкая библиотека моков для TypeScript, перенесённая из NSubstitute.
* :octocat: [TypeMoq](https://github.com/florinn/typemoq) — простая библиотека моков для TypeScript.
* :octocat: [fast-check](https://github.com/dubzzz/fast-check) — фреймворк тестирования на основе свойств для TypeScript.
* :octocat: [Suites](https://github.com/suites-dev/suites) — фреймворк модульного тестирования серверной части TypeScript с поддержкой инверсии управления (IoC) и внедрения зависимостей.
* :octocat: [InversifyJS](https://github.com/inversify/InversifyJS/) — мощный и лёгкий контейнер инверсии управления и внедрения зависимостей для приложений JavaScript и Node.js на TypeScript.
* :octocat: [TypeORM](https://github.com/typeorm/typeorm) — ORM для TypeScript и JavaScript (ES7, ES6, ES5). Поддерживает базы данных MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle и WebSQL. Работает на Node.js, в браузере, Ionic, Cordova и Electron.
  * :octocat: [Safe-TypeORM](https://github.com/samchon/safe-typeorm) — улучшает `TypeORM` на этапе компиляции и поддерживает автоматизированную настройку производительности посредством соединения на уровне приложения. Кроме того, типовое метапрограммирование обеспечивает безопасность необработанных SQL-запросов.
* :octocat: [MikroORM](https://github.com/mikro-orm/mikro-orm) — ORM для TypeScript и Node.js на основе шаблонов Data Mapper, Unit of Work и Identity Map. Поддерживает MongoDB, PostgreSQL, MySQL и SQLite.
* :octocat: [DrizzleORM](https://orm.drizzle.team/) — лёгкая ORM-библиотека для TypeScript в стиле SQL, обеспечивающая гибкий доступ к данным, готовая к бессерверной работе и не имеющая зависимостей.
* :octocat: [Prisma](https://github.com/prisma/prisma) — современный доступ к базам данных (альтернатива ORM) для Node.js и TypeScript | PostgreSQL, MySQL и SQLite
  * :octocat: [prisma-markdown](https://github.com/samchon/prisma-markdown): Генерирует Markdown-документ со схемами ERD и их описаниями.
* :octocat: [Corgi](https://github.com/cardog-ai/corgi) — декодер VIN на TypeScript с оптимизированной базой SQLite. Полностью автономная работа, декодирование менее чем за 1 мс, полный набор данных NHTSA размером 21 МБ.
* :octocat: [Neuledge](https://github.com/neuledge/engine-js) — универсальный язык для баз данных с передовыми инструментами моделирования данных, представления бизнес-логики и проверки схем.
* :octocat: [Typetta](https://github.com/twinlogix/typetta) — ORM для Node.js на TypeScript, использующая GraphQL в качестве языка определения схем | Поддерживает все основные SQL-базы данных и MongoDB.
* :octocat: [TypeGQL](https://github.com/prismake/typegql) — набор инструментов для создания схем GraphQL непосредственно из типизированных классов TypeScript.
* :octocat: [TSTL](https://github.com/samchon/tstl) — реализация C++ STL (Standard Template Library) на TypeScript. Включает контейнеры, итераторы, алгоритмы и функторы.
  * :octocat: [ECol](https://github.com/samchon/ecol) — расширение контейнеров TSTL; коллекции, отправляющие события ввода-вывода элементов.
  * :octocat: [TGrid](https://github.com/samchon/tgrid) — платформа распределённых вычислений, сетевое и потоковое расширение TSTL с поддержкой RFC (удалённого вызова функций).
  * :octocat: [Mutex-Server](https://github.com/samchon/mutex-server) — сетевой контроллер критических секций, например мьютексов и семафоров.
* :octocat: [Kalimdor.js](https://github.com/JasonShin/kalimdorjs) — библиотека машинного обучения для веба, Node и разработчиков!
* :octocat: [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) — функциональное программирование: неизменяемые персистентные коллекции, конструкции вроде Option и Either, комбинаторы.
* :octocat: [ee-ts](https://github.com/aleclarson/ee-ts) — типизированные диспетчеры событий
* :octocat: [io-ts](https://github.com/gcanti/io-ts) — проверка типов во время выполнения
* :octocat: [mokia](https://github.com/varHarrie/mokia) — сервер-заглушка со встроенной симуляцией данных и HTTP-службой.
* :octocat: [sub-events](https://github.com/vitaly-t/sub-events) — строго типизированные события.
* :octocat: [ts-audio](https://github.com/EvandroLG/ts-audio) — универсальная и простая в использовании библиотека для работы с API `AudioContext`
* :octocat: [tslog](https://github.com/fullstack-build/tslog) — мощная библиотека журналирования с нативной поддержкой TypeScript: удобная интерполяция, трассировка стека V8, маскирование секретов и поддержка requestId на основе AsyncLocalStorage
* :octocat: [tsParticles](https://github.com/matteobruni/tsparticles) — лёгкая библиотека для простого создания анимации частиц на веб-сайтах (также поддерживает ReactJS, VueJS, Angular, Svelte и другие платформы)
* :octocat: [statek](https://github.com/pie6k/statek) — библиотека управления реактивным состоянием
* :octocat: [Injex](https://www.injex.dev/) — простой, декорируемый и расширяемый фреймворк внедрения зависимостей для приложений TypeScript
* :octocat: [tRPC](https://www.trpc.io/) — набор инструментов TypeScript для создания сквозных API с проверкой типов
* :octocat: [vard](https://github.com/andersmyrmel/vard) — обнаружение внедрения промптов по шаблонам для TypeScript. Проверка менее чем за 0,5 мс; API для приложений LLM, вдохновлённый Zod.
* :octocat: [interface-forge](https://www.npmjs.com/package/interface-forge) — фабрики тестовых данных на основе типов и интерфейсов TypeScript
* :octocat: [iter-ops](https://github.com/vitaly-t/iter-ops) — операции с итерируемыми объектами
* :octocat: [Remult](https://github.com/remult/remult) — сквозные типобезопасные операции CRUD и совместное использование моделей между фронтендом и серверной частью в полнофункциональных приложениях TypeScript.
* :octocat: [Jest](https://github.com/facebook/jest) — комплексное решение для тестирования JavaScript. Сразу работает в большинстве проектов JavaScript.
* :octocat: [diod](https://github.com/artberri/diod) — контейнер инверсии управления и внедрения зависимостей с чётко заданной концепцией и малым размером для Node.js или браузерных приложений.
* :octocat: [@deliberative/crypto](https://github.com/deliberative/crypto) — библиотека TypeScript/WebAssembly для криптографии с открытым ключом, секретных контейнеров AEAD, разделения секрета Шамира и случайного перемешивания. Работает в Node.js, ESM, CommonJS и браузере.
* :octocat: [castore](https://github.com/castore-dev/castore) — библиотека TypeScript, упрощающая реализацию событийного моделирования (Event Sourcing) в приложении
* :octocat: [sweet-monads](https://github.com/JSMonk/sweet-monads) — библиотека TypeScript с популярными монадами (например, `Maybe` и `Either`) и высокопроизводительными итераторами.
* :octocat: [simple-mask-money](https://github.com/codermarcos/simple-mask-money) — 💰 простой, безопасный и типизированный пакет для форматирования денежных сумм!
* :octocat: [Color-Core](https://github.com/iamlite/color-core) — мощная типобезопасная библиотека для работы с цветом в приложениях TypeScript и JavaScript. Предоставляет полный набор инструментов для работы с цветами в разных цветовых пространствах и незаменима в проектах, требующих расширенной обработки цвета.
* :octocat: [PigmentTS](https://github.com/Jay-Karia/pigment-ts) — лёгкая утилита для работы с цветом и его преобразования.
* :octocat: [file-graph](https://github.com/DIY0R/file-graph) — библиотека для хранения графов в файлах и выполнения запросов к ним.
* :octocat: [@diy0r/nestjs-rabbitmq](https://github.com/DIY0R/nestjs-rabbitmq) — библиотека для создания микросервисов NestJS с RabbitMQ.
* :octocat: [Onion.JS](https://github.com/ThomasAribart/onion.js) — проектирование и применение обёрток (то есть функций высшего порядка) без нарушения типов! Основана на типах высшего порядка из [HotScript](https://github.com/gvergnaud/hotscript).
* :octocat: [text-smart-trimmer](https://github.com/vaidehimani/text-smart-trimmer) — лёгкая утилита TypeScript для обрезки текста с возможностью сохранять границы слов, пунктуацию и пользовательские суффиксы.
* :octocat: [nano-string-utils](https://github.com/Zheruel/nano-string-utils) — сверхлёгкие строковые утилиты без зависимостей. Поддерживает tree-shaking, полностью типизирована и оптимизирована для современного JavaScript.
* :octocat: [safe-fetch](https://github.com/asouei/safe-fetch) — оболочка fetch без зависимостей с безопасными результатами, двумя тайм-аутами, интеллектуальными повторами и нормализованными ошибками TypeScript.
* :octocat: [stunk](https://github.com/I-am-abdulazeez/stunk) — лёгкая, не зависящая от фреймворка библиотека управления состоянием с атомарными фрагментами для точечной реактивности; проста и подходит для любых приложений TypeScript.
* :octocat: [blastore](https://github.com/sergey-shablenko/blastore) — минималистичная высокопроизводительная оболочка для localStorage, AsyncStorage, памяти и любых синхронных/асинхронных хранилищ с полной типобезопасностью TypeScript.
* :octocat: [FilterQL](https://github.com/adamhl8/filterql) — небольшой язык запросов для фильтрации структурированных данных
* :octocat: [ffetch](https://github.com/fetch-kit/ffetch) — оболочка `fetch` с приоритетом TypeScript: повторы, тайм-ауты, автоматический выключатель и хуки жизненного цикла. Без зависимостей времени выполнения; работает везде, где доступен `fetch`
* :octocat: [iterflow](https://github.com/gv-sh/iterflow) — мощные утилиты для итераторов со статистическими операциями, оконными функциями и ленивыми вычислениями
* :octocat: [Nano Queries](https://github.com/vitonsky/nano-queries) — независимый от базы данных конструктор запросов с компонуемыми, вложенными и изменяемыми запросами. Используется в production с Postgres, SQLite, PGLite, DuckDB и другими системами.

# Большие языковые модели (LLM)
* [duckduckgo-ai-chat](https://github.com/mumu-lhl/duckduckgo-ai-chat) — предоставляет API DuckDuckGo AI Chat, позволяющий бесплатно использовать gpt-4o-mini.
* [Neurolink](https://github.com/juspay/neurolink) — универсальная платформа разработки ИИ, объединяющая более 12 поставщиков ИИ (OpenAI, Anthropic, Google, Bedrock, Azure) с поддержкой MCP, переключением между поставщиками и готовыми для enterprise функциями. SDK TypeScript + CLI.
* [rehydra](https://github.com/rehydra-ai/rehydra-sdk) — SDK с нулевым доверием, локально анонимизирующий персональные данные перед отправкой промптов в LLM и незаметно восстанавливающий исходный вид ответа.

# Видеокурсы
## :free: Бесплатные курсы
* [Angular Applications with TypeScript](https://mva.microsoft.com/en-US/training-courses/angular-applications-with-typescript-14330) (Microsoft Virtual Academy)
* [AngularJS with TypeScript made easy](https://www.youtube.com/watch?v=OZxnFB0yQHs) (SSW TV)
* [Full Stack React GraphQL TypeScript Tutorial - 14 hour course](https://www.youtube.com/watch?v=I6ypD7qv3Z8) (YouTube)
* [Evolving JavaScript with TypeScript](https://www.youtube.com/watch?v=Ut694dsIa8w) подробное знакомство с TypeScript
* [Why program in TypeScript?](https://www.youtube.com/watch?v=1TW9SdHIiXI) обзор основных синтаксических конструкций с упором на преимущества TypeScript перед JavaScript
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) — познакомьтесь с функциональным программированием на TypeScript и вместе с Sahand Javid создайте библиотеку наподобие fp-ts в этом доступном для начинающих плейлисте YouTube.
* [Building CRM from scratch with Typescript and Bun](https://www.youtube.com/watch?v=l4QjeBEkNLc) — создание практической CRM-системы с нуля без крупных фреймворков. Bun, TypeScript и Tailwind.

## :dollar: Платные курсы
* [TypeScript Fundamentals](https://www.pluralsight.com/courses/typescript) (Pluralsight)
* [Practical TypeScript Migration](https://www.pluralsight.com/courses/typescript-practical-migration) (Pluralsight)
* [Angular with TypeScript](http://www.pluralsight.com/courses/angular-typescript) (Pluralsight)
* [Using TypeScript for Large AngularJS Applications](https://www.pluralsight.com/courses/using-typescript-large-angularjs-apps) (Pluralsight)
* [Introduction to TypeScript](https://www.packtpub.com/application-development/introduction-typescript-video) (Packt)
* [Mastering TypeScript](https://www.packtpub.com/web-development/mastering-typescript-video) (Packt)
* [TypeScript: The Complete Developer's Guide](https://www.udemy.com/typescript-the-complete-developers-guide/) (Udemy)
* [Angular with TypeScript](https://www.manning.com/livevideo/angular-for-java-developers-typescript/) (Manning)
* [Mastering TypeScript - 2022 Edition](https://www.udemy.com/course/learn-typescript/) (Udemy)

# Руководства

* [Перенос приложения на чистом JavaScript на TypeScript](https://www.useanvil.com/blog/engineering/converting-vanilla-javascript-to-typescript)
* [Различия между TypeScript и JavaScript](https://www.scaler.com/topics/typescript-vs-javascript/)

# Дорожная карта

* [TypeScript Roadmap](https://roadmap.sh/typescript)
* [TypeScript Origins: The Documentary - YouTube](https://www.youtube.com/watch?v=U6s2pdxebSo) авторства OfferZen Origins
  > В документальном фильме представлены основные участники и представители сообщества, в том числе Anders Hejlsberg, Steve Lucco, Luke Hoban, Daniel Rosenwasser, Ryan Cavanaugh, Amanda Silver, Matt Pocock, Josh Goldberg и многие другие!

### Значки
* [TypeScript Badges](https://github.com/ellerbrock/typescript-badges/)
[![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/awesome/typescript125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/code/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/) [![TypeScript](https://raw.githubusercontent.com/ellerbrock/typescript-badges/master/badges/love/typescript-125x28.png)](https://github.com/ellerbrock/typescript-badges/)

### Социальные сети
 * [@typescriptlang](https://twitter.com/typescriptlang) — официальный аккаунт TypeScript в Twitter
 * [@angularjs](https://twitter.com/angularjs) — официальный аккаунт AngularJS в Twitter; TypeScript используется с версии 2.0
 * [@jntrnr](https://twitter.com/jntrnr) — руководитель программы TypeScript в Microsoft
 * [@ahejlsberg](https://twitter.com/ahejlsberg) — технический научный сотрудник Microsoft, участвующий в проекте TypeScript

### Благодарности
> (добавлено в 2023 году) Новый раздел со словами благодарности за вклад.

 - 2023 - ⚒ Спасибо Hamza ( @Hamza12700 https://github.com/Hamza12700 ) за [более 15 принятых pull request](https://github.com/dzharii/awesome-typescript/pulls?q=is%3Apr+author%3AHamza12700+is%3Aclosed). Большой вклад в актуализацию списка с учётом современных проектов TypeScript. **Участник года — 2023**.
