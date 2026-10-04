<div align="center">
	<div>
		<img width="500" src="media/logo.svg" alt="Awesome Node.js">
		<br>
	</div>
	<br>
	<br>
	<br>
	<br>
	<hr>
	<p>
		<p>
			<sup>
				<a href="https://github.com/sponsors/sindresorhus">Мою работу над открытым исходным кодом поддерживает сообщество</a>
			</sup>
		</p>
		<sup>Особая благодарность:</sup>
		<br>
		<br>
		<br>
		<a href="https://depot.dev?utm_source=github&utm_medium=sindresorhus">
			<div>
				<picture>
					<source width="180" media="(prefers-color-scheme: dark)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-dark.svg">
					<source width="180" media="(prefers-color-scheme: light)" srcset="https://sindresorhus.com/assets/thanks/depot-logo-light.svg">
					<img width="180" src="https://sindresorhus.com/assets/thanks/depot-logo-light.svg" alt="Логотип Depot">
				</picture>
			</div>
			<b>Быстрая удаленная сборка контейнеров и исполнители GitHub Actions.</b>
		</a>
		<br>
		<br>
		<br>
	</p>
	<hr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<p>
		<sub>Просто введите <a href="https://node.cool"><code>node.cool</code></a>, чтобы перейти сюда. Подписывайтесь на меня в <a href="https://twitter.com/sindresorhus">Twitter</a>.</sub>
	</p>
	<br>
	<p>
		<a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a> — это среда выполнения JavaScript с открытым исходным кодом для разных платформ, предназначенная для создания серверов и инструментов командной строки.
	</p>
	<br>
</div>

## Содержание

- [Официальное](#official)
- [Пакеты](#packages)
	- [Безумная наука](#mad-science)
	- [Приложения командной строки](#command-line-apps)
	- [Функциональное программирование](#functional-programming)
	- [HTTP](#http)
	- [Отладка / профилирование](#debugging--profiling)
	- [Журналирование](#logging)
	- [Утилиты командной строки](#command-line-utilities)
	- [Инструменты сборки](#build-tools)
	- [Оборудование](#hardware)
	- [Шаблоны](#templating)
	- [Веб-фреймворки](#web-frameworks)
	- [Документация](#documentation)
	- [Файловая система](#filesystem)
	- [Поток управления](#control-flow)
	- [Потоки](#streams)
	- [Реальное время](#real-time)
	- [Изображения](#image)
	- [Текст](#text)
	- [Числа](#number)
	- [Математика](#math)
	- [Дата](#date)
	- [URL](#url)
	- [Проверка данных](#data-validation)
	- [Разбор](#parsing)
	- [Удобочитаемый формат](#humanize)
	- [Сжатие](#compression)
	- [Сеть](#network)
	- [База данных](#database)
	- [Тестирование](#testing)
	- [Безопасность](#security)
	- [Бенчмаркинг](#benchmarking)
	- [Минификаторы](#minifiers)
	- [Аутентификация](#authentication)
	- [Авторизация](#authorization)
	- [Электронная почта](#email)
	- [Очереди задач](#job-queues)
	- [Управление Node.js](#nodejs-management)
	- [Кроссплатформенная интеграция](#cross-platform-integration)
	- [Обработка естественного языка](#natural-language-processing)
	- [Управление процессами](#process-management)
	- [Автоматизация](#automation)
	- [AST](#ast)
	- [Генераторы статических сайтов](#static-site-generators)
	- [Системы управления контентом](#content-management-systems)
	- [Форум](#forum)
	- [Блогинг](#blogging)
	- [Странное](#weird)
	- [Сериализация](#serialization)
	- [Разное](#miscellaneous)
- [Менеджер пакетов](#package-manager)
- [Ресурсы](#resources)
	- [Руководства](#tutorials)
	- [Поиск](#discovery)
	- [Статьи](#articles)
	- [Рассылки](#newsletters)
	- [Видео](#videos)
	- [Книги](#books)
	- [Блоги](#blogs)
	- [Курсы](#courses)
	- [Шпаргалки](#cheatsheets)
	- [Инструменты](#tools)
	- [Сообщество](#community)
	- [Разное](#miscellaneous-1)
- [Связанные списки](#related-lists)

## Официальное

- [Сайт](https://nodejs.org)
- [Документация](https://nodejs.org/dist/latest/docs/api/)
- [Репозиторий](https://github.com/nodejs/node)

## Пакеты

### Безумная наука

- [webtorrent](https://github.com/webtorrent/webtorrent) - Потоковый торрент-клиент для Node.js и браузера.
- [peerflix](https://github.com/mafintosh/peerflix) - Потоковый торрент-клиент.
- [ipfs](https://github.com/ipfs/helia) - Распределённая файловая система, призванная объединить все вычислительные устройства общей системой файлов.
- [stackgl](https://github.com/stackgl) - Экосистема открытого программного обеспечения для WebGL на основе browserify и npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - Вся Википедия в BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Потоковая передача торрент-видео на Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Чистая, понятная и проверенная библиотека для Bitcoin.
- [Bitcore](https://github.com/bitpay/bitcore) - Чистая и мощная библиотека для Bitcoin.
- [PDFKit](https://github.com/foliojs/pdfkit) - Библиотека для создания PDF.
- [turf](https://github.com/Turfjs/turf) - Модульный движок для обработки и анализа геопространственных данных.
- [webcat](https://github.com/mafintosh/webcat) - P2P-канал через интернет на базе WebRTC, использующий открытый или закрытый ключ GitHub для аутентификации.
- [NodeOS](https://github.com/NodeOS/NodeOS) - Первая операционная система, работающая на базе npm.
- [YodaOS](https://github.com/yodaos-project/yodaos) - Операционная система с искусственным интеллектом.
- [Brain.js](https://github.com/BrainJS/brain.js) - Фреймворк для машинного обучения.
- [Pipcook](https://github.com/alibaba/pipcook) - Фронтенд-фреймворк для создания конвейеров машинного обучения.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Моделирование и анализ графов (то есть сетей) на основе теории графов.
- [js-git](https://github.com/creationix/js-git) - Реализация Git на JavaScript.
- [xlsx](https://github.com/SheetJS/sheetjs) - Чистая реализация для чтения и записи таблиц Excel на JavaScript.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Чистая реализация Git на JavaScript.

### Приложения командной строки

- [np](https://github.com/sindresorhus/np) - Улучшенная команда `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Проверяет, доступно ли имя пакета в npm.
- [gh-home](https://github.com/sindresorhus/gh-home) - Открывает страницу репозитория на GitHub для текущего каталога.
- [npm-home](https://github.com/sindresorhus/npm-home) - Открывает страницу пакета на npm.
- [trash](https://github.com/sindresorhus/trash) - Более безопасная альтернатива `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Проверяет скорость и задержку интернет-соединения.
- [pageres](https://github.com/sindresorhus/pageres) - Создаёт снимки веб-сайтов.
- [cpy](https://github.com/sindresorhus/cpy) - Копирует файлы.
- [vtop](https://github.com/MrRio/vtop) - Улучшенный top с наглядными диаграммами.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Очищает корзину.
- [is-up](https://github.com/sindresorhus/is-up) - Проверяет, доступен ли сайт.
- [is-online](https://github.com/sindresorhus/is-online) - Проверяет, подключён ли компьютер к интернету.
- [public-ip](https://github.com/sindresorhus/public-ip) - Получает ваш публичный IP-адрес.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Копирование и вставка из терминала.
- [XO](https://github.com/xojs/xo) - Обеспечивает строгое форматирование кода в стиле JavaScript happiness.
- [ESLint](https://github.com/eslint/eslint) - Расширяемый инструмент проверки кода JavaScript.
- [David](https://github.com/alanshaw/david) - Сообщает, когда зависимости npm вашего пакета устарели.
- [http-server](https://github.com/http-party/http-server) - Простой HTTP-сервер командной строки без настройки.
- [Live Server](https://github.com/tapio/live-server) - Сервер HTTP для разработки с автоматической перезагрузкой страницы.
- [bcat](https://github.com/kessler/node-bcat) - Перенаправляет вывод команды в браузер.
- [normit](https://github.com/pawurb/normit) - Google Переводчик с синтезом речи прямо в терминале.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Удобно завершает процессы; работает на разных платформах.
- [pjs](https://github.com/danielstjules/pjs) - Потоковая обработка JavaScript: быстро фильтрует, преобразует и сводит данные из терминала.
- [license-checker](https://github.com/davglass/license-checker) - Проверяет лицензии зависимостей приложения.
- [browser-run](https://github.com/juliangruber/browser-run) - Позволяет легко запускать код в браузере.
- [tmpin](https://github.com/sindresorhus/tmpin) - Добавляет поддержку stdin любому CLI-приложению, принимающему файлы на вход.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Меняет обои рабочего стола.
- [pen](https://github.com/hatashiro/pen) - Предварительный просмотр Markdown в браузере прямо из любимого редактора.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Включает и выключает тёмный режим macOS.
- [Jsome](https://github.com/Javascipt/Jsome) - Красиво выводит JSON с настраиваемыми цветами и отступами.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Генератор значков для мобильных приложений.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Генератор заставок для мобильных приложений.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Генератор красивого HTML-представления различий в Git.
- [trymodule](https://github.com/victorb/trymodule) - Позволяет попробовать пакеты npm в терминале.
- [jscpd](https://github.com/kucherenko/jscpd) - Поиск скопированных фрагментов в исходном коде.
- [atmo](https://github.com/Raathigesh/Atmo) - Мокирование API на стороне сервера.
- [auto-install](https://github.com/siddharthkp/auto-install) - Автоматически устанавливает зависимости по мере написания кода.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Помогает найти зависимости, замедляющие работу.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Открывает доступ к локальному серверу из интернета.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Позволяет делиться сеансами терминала в формате SVG.
- [gtop](https://github.com/aksakalli/gtop) - Панель мониторинга системы для терминала.
- [themer](https://github.com/themerdev/themer) - Создаёт темы оформления для редактора, терминала, обоев, Slack и других приложений.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Создаёт красивые изображения вашего кода прямо из терминала.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Конвертирует суммы между 170 валютами.
- [taskbook](https://github.com/klaussinani/taskbook) - Задачи, доски и заметки в командной строке.
- [discharge](https://github.com/brandonweiss/discharge) - Упрощает развёртывание статических сайтов в Amazon S3.
- [npkill](https://github.com/voidcosmos/npkill) - Помогает находить и удалять старые и занимающие много места каталоги node_modules.

### Функциональное программирование

- [lodash](https://github.com/lodash/lodash) - Библиотека утилит, обеспечивающая единообразие, гибкую настройку, производительность и другие возможности; улучшенная и более быстрая альтернатива Underscore.js.
- [immutable](https://github.com/immutable-js/immutable-js) - Неизменяемые коллекции данных.
- [Ramda](https://github.com/ramda/ramda) - Библиотека утилит для функциональной композиции с автоматическим каррированием и обратным порядком аргументов; не изменяет исходные данные.
- [Mout](https://github.com/mout/mout) - Библиотека утилит, главное отличие которой от аналогов — возможность загружать только нужные модули и функции, без лишних затрат.
- [RxJS](https://github.com/reactivex/rxjs) - Библиотека функционального реактивного программирования для преобразования, объединения и обработки запросов к различным типам данных.
- [Kefir.js](https://github.com/kefirjs/kefir) - Реактивная библиотека, ориентированная на высокую производительность и низкое потребление памяти.

### HTTP

- [got](https://github.com/sindresorhus/got) - Удобный интерфейс для встроенного модуля `http`.
- [undici](https://github.com/nodejs/undici) - Высокопроизводительный HTTP-клиент, написанный с нуля и не имеющий зависимостей.
- [ky-universal](https://github.com/sindresorhus/ky-universal) - Универсальный HTTP-клиент на основе Fetch.
- [node-fetch](https://github.com/node-fetch/node-fetch) - Реализация `window.fetch` для Node.js.
- [axios](https://github.com/axios/axios) - HTTP-клиент на основе промисов, работающий и в браузере.
- [superagent](https://github.com/visionmedia/superagent) - Библиотека для HTTP-запросов.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Создаёт имитацию серверной части на основе содержимого JSON-файлов или объектов JavaScript и настраиваемых маршрутов.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Оборачивает стандартные HTTP-запросы в соответствующий RFC механизм кэширования.
- [gotql](https://github.com/khaosdoctor/gotql) - Библиотека для GraphQL-запросов на основе [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Глобальный прокси-агент для HTTP/HTTPS с настройкой через переменные окружения.
- [smoke](https://github.com/sinedied/smoke) - HTTP-сервер-заглушка на основе файлов с возможностью записи запросов.
- [purest](https://github.com/simov/purest) - Клиент REST.

### Отладка / профилирование

- [debug](https://github.com/debug-js/debug) - Минималистичная утилита для отладки.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js работает, но вы не знаете почему?
- [njsTrace](https://github.com/valyouw/njstrace) - Инструментирует и отслеживает код: показывает вызовы функций, аргументы, возвращаемые значения и время выполнения каждой функции.
- [vstream](https://github.com/joyent/node-vstream) - Подключаемые модули для инструментирования потоков, позволяющие изучать их конвейер.
- [stackman](https://github.com/watson/stackman) - Дополняет трассировку стека ошибки фрагментами кода и другими полезными сведениями.
- [locus](https://github.com/alidavut/locus) - Запускает REPL во время выполнения с доступом ко всем переменным.
- [0x](https://github.com/davidmarkclements/0x) - Профилирование с помощью пламенных графиков.
- [ctrace](https://github.com/automation-stack/ctrace) - Удобная для чтения система трассировки системных вызовов и сигналов.
- [leakage](https://github.com/andywer/leakage) - Написание тестов для обнаружения утечек памяти.
- [llnode](https://github.com/nodejs/llnode) - Инструмент посмертного анализа: позволяет изучать объекты и получать сведения о завершившемся сбоем процессе Node.js.
- [thetool](https://github.com/sfninja/thetool) - Собирает профили загрузки процессора, памяти и других ресурсов в формате, удобном для Chrome DevTools.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Отслеживает вызовы API и мониторит производительность, состояние и метрики использования API.
- [NiM](https://github.com/june07/nim) - Управляет процессом отладки в DevTools.
- [dats](https://github.com/immobiliare/dats) - Минималистичный клиент [StatsD](https://github.com/statsd/statsd) без зависимостей.

### Журналирование

- [pino](https://github.com/pinojs/pino) - Чрезвычайно быстрый журналатор, созданный под влиянием Bunyan.
- [winston](https://github.com/winstonjs/winston) - Асинхронная библиотека журналирования с несколькими транспортами.
- [console-log-level](https://github.com/watson/console-log-level) - Предельно простой журналатор с уровнями журналирования и настраиваемыми префиксами.
- [storyboard](https://github.com/guigrpa/storyboard) - Цветные иерархические журналы и истории в реальном времени на всём пути выполнения.
- [consola](https://github.com/unjs/consola) - Журналатор для консоли.

### Утилиты командной строки

- [chalk](https://github.com/chalk/chalk) - Корректно оформляет строки в терминале.
- [meow](https://github.com/sindresorhus/meow) - Помощник для создания CLI-приложений.
- [yargs](https://github.com/yargs/yargs) - Парсер командной строки, автоматически создающий удобный пользовательский интерфейс.
- [ora](https://github.com/sindresorhus/ora) - Изящный индикатор загрузки для терминала.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Упрощает чтение данных из stdin.
- [log-update](https://github.com/sindresorhus/log-update) - Выводит записи, перезаписывая предыдущие строки в терминале; удобно для отображения индикаторов выполнения и анимации.
- [Ink](https://github.com/vadimdemedes/ink) - React для интерактивных приложений командной строки.
- [listr2](https://github.com/listr2/listr2) - Список задач для терминала.
- [conf](https://github.com/sindresorhus/conf) - Простое управление настройками приложения или модуля.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - Управление терминалом с помощью управляющих последовательностей ANSI.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Цветные символы для разных уровней журналирования.
- [figures](https://github.com/sindresorhus/figures) - Символы Unicode с заменами для Windows CMD.
- [boxen](https://github.com/sindresorhus/boxen) - Создаёт рамки в терминале.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - Создаёт в терминале кликабельные ссылки.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - Отображает изображения в терминале.
- [string-width](https://github.com/sindresorhus/string-width) - Определяет визуальную ширину строки — количество столбцов, необходимое для её отображения.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Обрезает строку до заданной ширины в терминале.
- [blessed](https://github.com/chjj/blessed) - Библиотека, похожая на curses.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Интерактивный запрос командной строки.
- [yn](https://github.com/sindresorhus/yn) - Разбирает значения, похожие на «да» и «нет».
- [cli-table3](https://github.com/cli-table/cli-table3) - Красивые таблицы с символами Unicode.
- [drawille](https://github.com/madbence/node-drawille) - Рисует в терминале с помощью символов Брайля Unicode.
- [ascii-charts](https://github.com/jstrace/chart) - Столбчатая диаграмма в формате ASCII для терминала.
- [progress](https://github.com/visionmedia/node-progress) - Гибкий индикатор выполнения в формате ASCII.
- [insight](https://github.com/yeoman/insight) - Помогает понять, как используется ваш инструмент, анонимно отправляя метрики использования в Google Analytics.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - Включает и выключает курсор CLI.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Выводит данные в виде столбцов с безопасной поддержкой Unicode и ANSI.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - Эффектные ASCII-шрифты для консоли.
- [multispinner](https://github.com/codekirei/node-multispinner) - Несколько одновременно работающих индикаторов загрузки с индивидуальным управлением.
- [omelette](https://github.com/f/omelette) - Помощник для автодополнения команд в оболочке.
- [cross-env](https://github.com/kentcdodds/cross-env) - Задаёт переменные окружения независимо от платформы.
- [shelljs](https://github.com/shelljs/shelljs) - Переносимые команды Unix для Node.js.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - Запрещает запуск приложения с правами root.
- [sparkly](https://github.com/sindresorhus/sparkly) - Создаёт спарклайны `▁▂▃▅▂▇`.
- [Bit](https://github.com/teambit/bit) - Создаёт, поддерживает, находит и использует небольшие модули и компоненты в разных репозиториях.
- [gradient-string](https://github.com/bokub/gradient-string) - Красивые цветовые градиенты в выводе терминала.
- [oclif](https://github.com/oclif/oclif) - Фреймворк для CLI с парсером, автоматической документацией, тестированием и плагинами.
- [terminal-size](https://github.com/sindresorhus/terminal-size) - Надёжно определяет размер окна терминала.
- [Cliffy](https://github.com/drew-y/cliffy) - Фреймворк для создания интерактивных CLI.
- [zx](https://github.com/google/zx) - Написание сценариев оболочки на JavaScript.

### Инструменты сборки

- [parcel](https://github.com/parcel-bundler/parcel) - Сверхбыстрый сборщик веб-приложений без необходимости настройки.
- [webpack](https://github.com/webpack/webpack) - Собирает модули и ресурсы для браузера.
- [rollup](https://github.com/rollup/rollup) - Сборщик модулей нового поколения для ES2015.
- [gulp](https://github.com/gulpjs/gulp) - Быстрая потоковая система сборки, в которой конфигурация задаётся кодом.
- [Broccoli](https://github.com/broccolijs/broccoli) - Быстрый и надёжный конвейер обработки ресурсов с постоянным временем пересборки и компактными описаниями сборки.
- [Brunch](https://github.com/brunch/brunch) - Инструмент сборки фронтенд-веб-приложений с простой декларативной конфигурацией, быстрой инкрементальной компиляцией и продуманным рабочим процессом.
- [FuseBox](https://github.com/fuse-box/fuse-box) - Быстрая система сборки, объединяющая возможности webpack, JSPM и SystemJS и обеспечивающая первоклассную поддержку TypeScript.
- [pkg](https://github.com/vercel/pkg) - Упаковывает проект Node.js в исполняемый файл.
- [Vite](https://github.com/vitejs/vite) - Инструмент сборки фронтенда с горячей заменой модулей и упаковкой статических ресурсов.

### Оборудование

- [johnny-five](https://github.com/rwaldron/johnny-five) - Фреймворк Arduino на основе Firmata.
- [serialport](https://github.com/serialport/node-serialport) - Доступ к последовательным портам для чтения и записи.
- [usb](https://github.com/node-usb/node-usb) - Библиотека для USB.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - Доступ к последовательной шине I2C.
- [onoff](https://github.com/fivdi/onoff) - Доступ к GPIO и обнаружение прерываний.
- [spi-device](https://github.com/fivdi/spi-device) - Доступ к последовательной шине SPI.
- [pigpio](https://github.com/fivdi/pigpio) - Быстрое управление GPIO, ШИМ и сервоприводами, отслеживание изменений состояния и обработка прерываний на Raspberry Pi.
- [gps](https://github.com/infusion/GPS.js) - Парсер NMEA для работы с GPS-приёмниками.
- [modbus-serial](https://github.com/yaacov/node-modbus-serial) - Чистая реализация MODBUS-RTU на JavaScript (последовательный порт и TCP).

### Шаблоны

- [marko](https://github.com/marko-js/marko) - Шаблонизатор на основе HTML, компилирующий шаблоны в модули CommonJS и поддерживающий потоки, асинхронный рендеринг и пользовательские теги.
- [nunjucks](https://github.com/mozilla/nunjucks) - Шаблонизатор с наследованием, асинхронным управлением и другими возможностями, созданный под влиянием Jinja2.
- [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Расширение шаблонов Mustache с полезными возможностями, например помощниками и более гибкими блоками.
- [EJS](https://github.com/mde/ejs) - Простой шаблонизатор без навязывания определённого стиля.
- [Pug](https://github.com/pugjs/pug) - Высокопроизводительный шаблонизатор, на который сильно повлиял Haml.

### Веб-фреймворки

- [Fastify](https://github.com/fastify/fastify) - Быстрый веб-фреймворк с низкими накладными расходами.
- [Next.js](https://github.com/vercel/next.js) - Минималистичный фреймворк для универсальных JavaScript-веб-приложений с рендерингом на сервере.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - Минималистичный фреймворк для приложений Vue.js с рендерингом на сервере.
- [Hapi](https://github.com/hapijs/hapi) - Фреймворк для создания приложений и сервисов.
- [Micro](https://github.com/vercel/micro) - Минималистичный фреймворк для микросервисов с асинхронной моделью.
- [Koa](https://github.com/koajs/koa) - Фреймворк, созданный командой Express; служит компактной, выразительной и надёжной основой для веб-приложений и API.
- [Express](https://github.com/expressjs/express) - Фреймворк для веб-приложений с широким набором возможностей для создания одностраничных, многостраничных и гибридных приложений.
- [Feathers](https://github.com/feathersjs/feathers) - Фреймворк для микросервисов, созданный в духе Express.
- [LoopBack](https://github.com/loopbackio/loopback-next) - Мощный фреймворк для создания REST API и простого подключения к источникам данных на стороне сервера.
- [Meteor](https://github.com/meteor/meteor) - Предельно простой веб-фреймворк на чистом JavaScript: база данных доступна повсюду, данные передаются по сети. *(Возможно, вам понравится [awesome-meteor](https://github.com/Urigo/awesome-meteor).)*
- [Restify](https://github.com/restify/node-restify) - Позволяет создавать корректные REST-веб-сервисы.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - Фреймворк с поддержкой ES2015+, WebSocket и REST API.
- [ActionHero](https://github.com/actionhero/actionhero) - Фреймворк для создания повторно используемых и масштабируемых API для TCP-сокетов, WebSocket и HTTP-клиентов.
- [seneca](https://github.com/senecajs/seneca) - Набор инструментов для создания микросервисов.
- [AdonisJs](https://github.com/adonisjs/core) - Полноценный MVC-фреймворк для Node.js на надёжной основе внедрения зависимостей и контейнера IoC.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Быстрый и мощный фреймворк для микросервисов.
- [Nest](https://github.com/nestjs/nest) - Фреймворк в духе Angular для создания эффективных и масштабируемых серверных приложений.
- [TypeGraphQL](https://github.com/MichalLytek/type-graphql) - Современный фреймворк для создания GraphQL API на TypeScript с использованием классов и декораторов.
- [Tinyhttp](https://github.com/tinyhttp/tinyhttp) - Современный быстрый веб-фреймворк, похожий на Express.
- [Marble.js](https://github.com/marblejs/marble) - Функциональный реактивный фреймворк для серверных приложений на TypeScript и RxJS.
- [Lad](https://github.com/ladjs/lad) - Фреймворк бывшего участника технического комитета Express и команды Koa, объединяющий веб-, API-, фоновые и прокси-серверы.
- [Ts.ED](https://github.com/tsedio/tsed) - Интуитивно понятный фреймворк TypeScript для серверных приложений на базе Express.js или Koa.js.
- [Hono](https://github.com/honojs/hono) - Компактный и быстрый веб-фреймворк.

### Документация

- [documentation.js](https://github.com/documentationjs/documentation) - Генератор документации API с поддержкой ES2015+ и аннотаций Flow.
- [Docco](https://github.com/jashkenas/docco) - Генератор документации: создаёт HTML-документ, в котором комментарии перемежаются с исходным кодом.
- [JSDoc](https://github.com/jsdoc/jsdoc) - Генератор документации API, похожий на JavaDoc и PHPDoc.
- [Docusaurus](https://github.com/facebook/docusaurus) - Генератор сайтов документации на базе React и Markdown со встроенной поддержкой перевода и версионирования.

### Файловая система

- [del](https://github.com/sindresorhus/del) - Удаляет файлы и каталоги с помощью глоб-шаблонов.
- [globby](https://github.com/sindresorhus/globby) - Находит файлы по нескольким глоб-шаблонам.
- [chokidar](https://github.com/paulmillr/chokidar) - Наблюдатель за файловой системой, стабилизирующий события `fs.watch` и `fs.watchFile`, а также использующий встроенный `fsevents` в macOS.
- [find-up](https://github.com/sindresorhus/find-up) - Ищет файл, переходя вверх по родительским каталогам.
- [proper-lockfile](https://github.com/moxystudio/node-proper-lockfile) - Утилита блокировки файлов между процессами и компьютерами.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Читает и разбирает JSON-файл.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - Преобразует данные в JSON и атомарно записывает файл.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - Атомарная альтернатива `fs.createWriteStream()`.
- [filenamify](https://github.com/sindresorhus/filenamify) - Преобразует строку в допустимое имя файла.
- [istextorbinary](https://github.com/bevry/istextorbinary) - Определяет, является ли файл текстовым или бинарным.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - Полностью переработанный API файловой системы для удобной повседневной работы.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Дополнительные методы для модуля `fs`.
- [package-directory](https://github.com/sindresorhus/package-directory) - Находит корневой каталог пакета npm.
- [filehound](https://github.com/nspragg/filehound) - Гибкий интерфейс с цепочками вызовов для поиска по файловой системе.
- [move-file](https://github.com/sindresorhus/move-file) - Перемещает файл, в том числе между разными устройствами.
- [tempy](https://github.com/sindresorhus/tempy) - Возвращает путь к случайному временному файлу или каталогу.

### Поток управления

- Промисы
	- [pify](https://github.com/sindresorhus/pify) - Преобразует функцию с обратным вызовом в функцию, возвращающую промис.
	- [delay](https://github.com/sindresorhus/delay) - Задерживает выполнение промиса на заданное время.
	- [promise-memoize](https://github.com/nodeca/promise-memoize) - Мемоизирует функции, возвращающие промис, с истечением срока действия и предварительной загрузкой.
	- [valvelet](https://github.com/lpinca/valvelet) - Ограничивает частоту вызова функции, возвращающей промис.
	- [p-map](https://github.com/sindresorhus/p-map) - Параллельно применяет функцию отображения к промисам.
	- [More…](https://github.com/sindresorhus/promise-fun)
- Наблюдаемые последовательности
	- [RxJS](https://github.com/ReactiveX/RxJS) - Реактивное программирование.
	- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Преобразует Observable в Promise.
	- [More…](https://github.com/sindresorhus/awesome-observables)
- Потоки
	- [Highland.js](https://github.com/caolan/highland) - Упрощает работу с синхронным и асинхронным кодом, используя только стандартный JavaScript и потоки в стиле Node.js.

### Потоки

- [get-stream](https://github.com/sindresorhus/get-stream) - Получает поток в виде строки или буфера.
- [from2](https://github.com/hughsk/from2) - Удобная обёртка над ReadableStream, созданная под влиянием `through2`.
- [into-stream](https://github.com/sindresorhus/into-stream) - Преобразует буфер, строку, массив или объект в поток.
- [duplexify](https://github.com/mafintosh/duplexify) - Объединяет потоки записи и чтения в единый двунаправленный поток Streams2.
- [pumpify](https://github.com/mafintosh/pumpify) - Объединяет массив потоков в один двунаправленный поток.
- [peek-stream](https://github.com/mafintosh/peek-stream) - Преобразующий поток, который позволяет посмотреть первую строку, прежде чем выбрать способ её разбора.
- [binary-split](https://github.com/maxogden/binary-split) - Разделяет поток по символу новой строки или другому разделителю.
- [byline](https://github.com/jahewson/node-byline) - Предельно простой построчный считыватель потока.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - Преобразует первый фрагмент потока.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - Дополняет каждую строку в потоке.
- [multistream](https://github.com/feross/multistream) - Объединяет несколько потоков в один.
- [readable-stream](https://github.com/nodejs/readable-stream) - Копия встроенных реализаций Streams2 и Streams3.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - Параллельно преобразует объектные потоки.

### Реальное время

- [µWebSockets](https://github.com/uNetworking/uWebSockets) - Высокомасштабируемая библиотека для WebSocket-сервера и клиента.
- [Socket.io](https://github.com/socketio/socket.io) - Обеспечивает двустороннюю событийную связь в реальном времени.
- [Faye](https://github.com/faye/faye) - Шина сообщений клиент-сервер для обмена данными в реальном времени на основе протокола Bayeux.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - Масштабируемый движок HTTP и WebSocket, работающий на нескольких ядрах процессора.
- [Primus](https://github.com/primus/primus) - Уровень абстракции для фреймворков реального времени, предотвращающий привязку к конкретным модулям.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - Масштабируемый фреймворк микросервисов для работы в реальном времени.
- [Kalm](https://github.com/kalm/kalm.js) - Низкоуровневый маршрутизатор сокетов и фреймворк промежуточного ПО.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - Клиент MQTT — протокола публикации и подписки для обмена сообщениями поверх TCP/IP.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - Реализация JSON-RPC 2.0 поверх WebSocket.
- [Aedes](https://github.com/moscajs/aedes) - Минимальный MQTT-сервер, работающий с любым сервером потоков.

### Изображения

- [sharp](https://github.com/lovell/sharp) - Самый быстрый модуль для изменения размера изображений JPEG, PNG, WebP и TIFF.
- [image-type](https://github.com/sindresorhus/image-type) - Определяет формат изображения.
- [image-dimensions](https://github.com/sindresorhus/image-dimensions) - Получает размеры изображения.
- [lwip](https://github.com/EyalAr/lwip) - Лёгкий обработчик изображений, которому не нужен ImageMagick.
- [pica](https://github.com/nodeca/pica) - Быстро изменяет размер изображения с высоким качеством (lanczos3) на чистом JavaScript. Альтернатива `canvas.drawImage()`, когда недопустима пикселизация.
- [jimp](https://github.com/oliver-moran/jimp) - Обработка изображений на чистом JavaScript.
- [qrcode](https://github.com/soldair/node-qrcode) - Генератор QR- и штрихкодов.
- [ImageScript](https://github.com/matmen/ImageScript) - Обрабатывает изображения на JavaScript, используя WebAssembly для повышения производительности.

### Текст

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Преобразует кодировки символов.
- [string-length](https://github.com/sindresorhus/string-length) - Определяет фактическую длину строки: корректно считает символы за пределами базовой многоязычной плоскости и игнорирует управляющие последовательности ANSI.
- [camelcase](https://github.com/sindresorhus/camelcase) - Преобразует строку с дефисами, точками, подчёркиваниями или пробелами в camelCase: `foo-bar` → `fooBar`.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - Экранирует специальные символы RegExp.
- [splice-string](https://github.com/sindresorhus/splice-string) - Удаляет или заменяет часть строки, как `Array#splice`.
- [indent-string](https://github.com/sindresorhus/indent-string) - Добавляет отступ к каждой строке.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Удаляет начальные пробелы из всех строк.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Определяет отступ в коде.
- [he](https://github.com/mathiasbynens/he) - Кодирует и декодирует HTML-сущности.
- [i18n-node](https://github.com/mashpie/i18n-node) - Простой модуль перевода с динамическим хранением данных в JSON.
- [babelfish](https://github.com/nodeca/babelfish) - Интернационализация с очень простым синтаксисом для множественных форм.
- [matcher](https://github.com/sindresorhus/matcher) - Простое сопоставление с шаблонами подстановки.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - Нормализует визуально похожие символы Unicode.
- [i18next](https://github.com/i18next/i18next) - Фреймворк интернационализации.
- [nanoid](https://github.com/ai/nanoid) - Компактный, безопасный и удобный для URL генератор уникальных строковых идентификаторов.
- [StegCloak](https://github.com/kurolabs/stegcloak) - Незаметно скрывает секреты в обычном тексте.

### Числа

- [random-int](https://github.com/sindresorhus/random-int) - Генерирует случайное целое число.
- [random-float](https://github.com/sindresorhus/random-float) - Генерирует случайное число с плавающей запятой.
- [unique-random](https://github.com/sindresorhus/unique-random) - Генерирует случайные числа, не повторяющиеся подряд.
- [round-to](https://github.com/sindresorhus/round-to) - Округляет число до заданного количества знаков после запятой: `1.234` → `1.2`.

### Математика

- [ndarray](https://github.com/scijs/ndarray) - Многомерные массивы.
- [mathjs](https://github.com/josdejong/mathjs) - Обширная математическая библиотека.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Ограничивает число заданным диапазоном.
- [algebra](https://github.com/fibo/algebra) - Алгебраические структуры.
- [multimath](https://github.com/nodeca/multimath) - Основа для быстрых математических операций над изображениями в WebAssembly и JavaScript.

### Дата

- [Luxon](https://github.com/moment/luxon) - Библиотека для работы с датами и временем.
- [date-fns](https://github.com/date-fns/date-fns) - Современная библиотека для работы с датами.
- [Day.js](https://github.com/iamkun/dayjs) - Неизменяемая библиотека дат, альтернатива Moment.js.
- [dateformat](https://github.com/felixge/node-dateformat) - Форматирование даты.
- [tz-format](https://github.com/samverschueren/tz-format) - Форматирует дату с указанием часового пояса: `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - Быстрый разбор, форматирование дат и преобразование часовых поясов.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - Нормализует URL.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - Приводит URL к удобочитаемому виду: https://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - Показывает полный адрес вместо сокращённого URL.
- [speakingurl](https://github.com/pid/speakingurl) - Создаёт человекочитаемый идентификатор из строки с транслитерацией.
- [linkify-it](https://github.com/markdown-it/linkify-it) - Обнаруживает ссылки с полной поддержкой Unicode.
- [url-pattern](https://github.com/snd/url-pattern) - Упрощает сопоставление URL и других строк с помощью строковых шаблонов вместо регулярных выражений.
- [embedza](https://github.com/nodeca/embedza) - Создаёт HTML-фрагменты и встраиваемые элементы из URL, используя данные oEmbed, Open Graph и метатеги.

### Проверка данных

- [joi](https://github.com/sideway/joi) - Язык описания схем объектов и валидатор объектов JavaScript.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - Валидатор JSON Schema, использующий генерацию кода для высокой скорости.
- [property-validator](https://github.com/nettofarah/property-validator) - Простая проверка свойств для Express.
- [schema-inspector](https://github.com/schema-inspector/schema-inspector) - Очистка и проверка JSON API.
- [ajv](https://github.com/ajv-validator/ajv) - Самый быстрый валидатор JSON Schema; поддерживает предложения версий 5, 6 и 7.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - Простой и расширяемый способ проверки данных в JavaScript и TypeScript.
- [yup](https://github.com/jquense/yup) - Проверка схем объектов.
- [zod](https://github.com/colinhacks/zod) - Валидатор для TypeScript с выводом статических типов.

### Разбор

- [remark](https://github.com/remarkjs/remark) - Обработчик Markdown с поддержкой плагинов.
- [markdown-it](https://github.com/markdown-it/markdown-it) - Парсер Markdown с полной поддержкой CommonMark, расширений и синтаксических плагинов.
- [parse5](https://github.com/inikulin/parse5) - Быстрый полнофункциональный парсер HTML, соответствующий спецификации.
- [@parcel/css](https://github.com/parcel-bundler/parcel-css) - Парсер, преобразователь и минификатор CSS, написанный на Rust.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - Удаляет комментарии из JSON.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Удаляет комментарии из CSS.
- [parse-json](https://github.com/sindresorhus/parse-json) - Разбирает JSON и выдаёт более информативные сообщения об ошибках.
- [URI.js](https://github.com/medialize/URI.js) - Изменение URL.
- [JSONStream](https://github.com/dominictarr/JSONStream) - Потоковый разбор и сериализация JSON.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - Быстрый парсер CSV с интерфейсом обратного вызова для предыдущего парсера.
- [csv-parser](https://github.com/mafintosh/csv-parser) - Потоковый парсер CSV, стремящийся работать быстрее аналогов.
- [PEG.js](https://github.com/pegjs/pegjs) - Простой генератор парсеров, создающий быстрые парсеры с подробными сообщениями об ошибках.
- [x-ray](https://github.com/matthewmueller/x-ray) - Инструмент для извлечения данных с веб-сайтов.
- [nearley](https://github.com/kach/nearley) - Простой, быстрый и мощный парсер для JavaScript.
- [binary-extract](https://github.com/juliangruber/binary-extract) - Извлекает значение из буфера с JSON, не разбирая его целиком.
- [Stylecow](https://github.com/stylecow/stylecow) - Разбирает, преобразует и конвертирует современный CSS для совместимости со всеми браузерами; расширяется с помощью плагинов.
- [js-yaml](https://github.com/nodeca/js-yaml) - Очень быстрый парсер YAML.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Преобразует XML в объект JavaScript.
- [Jison](https://github.com/zaach/jison) - Удобный генератор парсеров JavaScript, созданный на основе тех же принципов, что Bison, Yacc и другие подобные инструменты.
- [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) - Разбирает, форматирует, сохраняет и проверяет телефонные номера.
- [ref](https://github.com/TooTallNate/ref) - Читает и записывает структурированные бинарные данные в Buffer.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Чтение и запись файлов Excel XLSX.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - Очень быстрый и функциональный набор инструментов для создания парсеров JavaScript.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Проверяет и разбирает XML.

### Удобочитаемый формат

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - Преобразует байты в удобочитаемую строку: `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Преобразует миллисекунды в удобочитаемую строку: `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/vercel/ms) - Минималистичная утилита для преобразования миллисекунд.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - Делает сообщения об ошибках более понятными.
- [read-art](https://github.com/Tjatse/node-readability) - Извлекает удобочитаемое содержимое с любой веб-страницы.

### Сжатие

- [yazl](https://github.com/thejoshwolfe/yazl) - Создание ZIP-архивов.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - Распаковка ZIP-архивов.
- [Archiver](https://github.com/archiverjs/node-archiver) - Потоковый интерфейс для создания архивов ZIP и TAR.
- [pako](https://github.com/nodeca/pako) - Высокоскоростной порт zlib на чистом JavaScript (deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - Потоковый парсер и генератор TAR. См. также [tar-fs](https://github.com/mafintosh/tar-fs).

### Сеть

- [get-port](https://github.com/sindresorhus/get-port) - Получает свободный порт.
- [ipify](https://github.com/sindresorhus/ipify) - Получает ваш публичный IP-адрес.
- [getmac](https://github.com/bevry/getmac) - Получает MAC-адрес компьютера.
- [DHCP](https://github.com/infusion/node-dhcp) - Клиент и сервер DHCP.
- [netcat](https://github.com/roccomuso/netcat) - Реализация Netcat на чистом JavaScript.

### База данных

- Драйверы
	- [PostgreSQL](https://github.com/brianc/node-postgres) - Клиент PostgreSQL на чистом JavaScript с привязками к нативной библиотеке libpq.
	- [Redis](https://github.com/luin/ioredis) - Клиент Redis.
	- [LevelUP](https://github.com/Level/levelup) - LevelDB.
	- [MySQL](https://github.com/mysqljs/mysql) - Клиент MySQL.
	- [couchdb-nano](https://github.com/apache/couchdb-nano) - Клиент CouchDB.
	- [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Клиент Aerospike.
	- [Couchbase](https://github.com/couchbase/couchnode) - Клиент Couchbase.
	- [MongoDB](https://github.com/mongodb/node-mongodb-native) - Драйвер MongoDB.
- ODM / ORM
	- [Sequelize](https://github.com/sequelize/sequelize) - Многоязычная ORM для PostgreSQL, SQLite, MySQL и других баз данных.
	- [Bookshelf](https://github.com/bookshelf/bookshelf) - ORM для PostgreSQL, MySQL и SQLite3 в духе Backbone.js.
	- [Mongoose](https://github.com/Automattic/mongoose) - Элегантное моделирование объектов MongoDB.
	- [Waterline](https://github.com/balderdashy/waterline) - Независимый от хранилища инструмент, значительно упрощающий работу с одной или несколькими базами данных.
	- [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM для PostgreSQL, MySQL, SQLite3 и REST-хранилищ; аналог ActiveRecord.
	- [pg-promise](https://github.com/vitaly-t/pg-promise) - Фреймворк PostgreSQL для работы с обычным SQL через промисы.
	- [slonik](https://github.com/gajus/slonik) - Клиент PostgreSQL со строгой типизацией, подробным журналированием и проверками.
	- [Objection.js](https://github.com/Vincit/objection.js) - Лёгкая ORM на основе построителя SQL-запросов Knex.
	- [TypeORM](https://github.com/typeorm/typeorm) - ORM для PostgreSQL, MariaDB, MySQL, SQLite и других баз данных.
	- [MikroORM](https://github.com/mikro-orm/mikro-orm) - ORM для TypeScript на основе шаблонов Data Mapper, Unit of Work и Identity Map с поддержкой MongoDB, PostgreSQL, MySQL и SQLite.
	- [Prisma](https://github.com/prisma/prisma) - Современный доступ к базам данных и альтернатива ORM: автоматически создаваемый безопасный по типам построитель запросов на TypeScript с поддержкой PostgreSQL, MySQL и SQLite.
 	- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - ORM на TypeScript с поддержкой разных баз данных, например PostgreSQL.
- Построитель запросов
	- [Knex](https://github.com/knex/knex) - Построитель запросов для PostgreSQL, MySQL и SQLite3, разработанный как гибкий, переносимый и удобный инструмент.
- Другое
	- [NeDB](https://github.com/louischatriot/nedb) - Встроенная постоянная база данных, написанная на JavaScript.
	- [Lowdb](https://github.com/typicode/lowdb) - Небольшая база данных на JavaScript, использующая Lodash.
	- [Keyv](https://github.com/jaredwray/keyv) - Простое хранилище «ключ — значение» с поддержкой нескольких серверных систем.
	- [Finale](https://github.com/tommybananas/finale) - Генерирует REST-эндпоинты для моделей Sequelize.
	- [database-js](https://github.com/mlaanderson/database-js) - Обёртка для работы с несколькими базами данных через интерфейс подключения, похожий на JDBC.
	- [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - Заполняет базы MongoDB данными из файлов JavaScript и JSON.
	- [@databases](https://github.com/ForbesLindesay/atdatabases) - Позволяет выполнять обычные SQL-запросы к PostgreSQL, MySQL и SQLite3 без риска SQL-инъекций.
	- [pg-mem](https://github.com/oguimbal/pg-mem) - Экземпляр PostgreSQL в памяти для тестов.

### Тестирование

- [AVA](https://github.com/avajs/ava) - Футуристический тестовый раннер.
- [Mocha](https://github.com/mochajs/mocha) - Многофункциональный тестовый фреймворк, упрощающий и делающий удобным асинхронное тестирование.
- [nyc](https://github.com/istanbuljs/nyc) - Инструмент измерения покрытия кода на основе istanbul, работающий с дочерними процессами.
- [tap](https://github.com/tapjs/node-tap) - Тестовый фреймворк TAP.
- [tape](https://github.com/substack/tape) - Средство запуска тестов, выводящее TAP.
- [power-assert](https://github.com/power-assert-js/power-assert) - Выводит информативные сообщения при проверке утверждений через стандартный интерфейс assert.
- [Mochify](https://github.com/mantoni/mochify.js) - TDD с Browserify, Mocha, PhantomJS и WebDriver.
- [trevor](https://github.com/vadimdemedes/trevor) - Запускает тесты для нескольких версий Node.js, не требуя вручную переключать версии или отправлять код в Travis CI.
- [loadtest](https://github.com/alexfernandez/loadtest) - Запускает нагрузочные тесты веб-приложений и предоставляет API для автоматизации.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Шпионы, заглушки и моки для тестирования.
- [navit](https://github.com/nodeca/navit) - Обёртка над PhantomJS и SlimerJS, упрощающая написание сценариев браузерных тестов.
- [Nock](https://github.com/nock/nock) - Мокирование HTTP и проверка ожидаемого поведения.
- [intern](https://github.com/theintern/intern) - Комплекс инструментов для тестирования кода.
- [toxy](https://github.com/h2non/toxy) - Настраиваемый HTTP-прокси для имитации сбоев и условий сети.
- [hook-std](https://github.com/sindresorhus/hook-std) - Перехватывает и изменяет stdout/stderr.
- [testen](https://github.com/egoist/testen) - Запускает локально тесты для нескольких версий Node.js с помощью NVM.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Фреймворк автоматизированного тестирования интерфейсов на основе Selenium WebDriver.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Автоматизированное тестирование на основе протокола WebDriver.
- [Jest](https://github.com/facebook/jest) - Безболезненное тестирование JavaScript.
- [Vitest](https://github.com/vitest-dev/vitest) - Быстрый фреймворк модульного тестирования на базе Vite.
- [TestCafe](https://github.com/DevExpress/testcafe) - Автоматизированное тестирование в браузере.
- [abstruse](https://github.com/bleenco/abstruse) - Сервер непрерывной интеграции.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - Сквозное тестирование.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Безголовый Chrome.
- [Playwright](https://github.com/microsoft/playwright) - Безголовые Chromium, WebKit и Firefox с единым API.
- [nve](https://github.com/ehmicky/nve) - Запускает любую команду локально для нескольких версий Node.js.
- [axe-core](https://github.com/dequelabs/axe-core) - Движок доступности для автоматизированного тестирования веб-интерфейсов.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Создаёт лёгкие временные экземпляры популярных баз данных, браузеров Selenium и других сервисов, которые можно запустить в Docker-контейнере.

### Безопасность

- [upash](https://github.com/simonepri/upash) - Единый API для всех алгоритмов хеширования паролей.
- [themis](https://github.com/cossacklabs/themis) - Многоязычный фреймворк, упрощающий применение типовых схем шифрования: шифрование хранимых данных, аутентифицированный обмен данными, защита передачи, аутентификация и многое другое.
- [GuardRails](https://github.com/apps/guardrails) - Приложение GitHub, проверяющее запросы на включение изменений и предоставляющее замечания по безопасности.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Защита от перебора паролей и DDoS-атак.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - Асинхронное хеширование без блокировки.
- [jose-simple](https://github.com/davesag/jose-simple) - Шифрование и расшифровка данных по стандарту JOSE (JSON Object Signing and Encryption).

### Бенчмаркинг

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Библиотека для бенчмаркинга с таймерами высокого разрешения, выдающая статистически значимые результаты.

### Минификаторы

- [babel-minify](https://github.com/babel/minify) - Минификатор с поддержкой ES2015+, основанный на инструментарии Babel.
- [UglifyJS2](https://github.com/mishoo/UglifyJS) - Минификатор JavaScript.
- [clean-css](https://github.com/clean-css/clean-css) - Минификатор CSS.
- [minimize](https://github.com/Swaagie/minimize) - Минификатор HTML.
- [imagemin](https://github.com/imagemin/imagemin) - Минификатор изображений.

### Аутентификация

- [Passport](https://github.com/jaredhanson/passport) - Простая и ненавязчивая аутентификация.
- [Grant](https://github.com/simov/grant) - Провайдеры OAuth для Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel и многих других платформ.

### Авторизация

- [CASL](https://github.com/stalniy/casl) - Изоморфная авторизация для интерфейса и API.
- [node-casbin](https://github.com/casbin/node-casbin) - Библиотека авторизации с поддержкой моделей контроля доступа, таких как ACL, RBAC и ABAC.

### Электронная почта

- [Nodemailer](https://github.com/nodemailer/nodemailer) - Самый быстрый способ работать с электронной почтой.
- [emailjs](https://github.com/eleith/emailjs) - Отправляет текстовые и HTML-письма с вложениями на любой SMTP-сервер.
- [email-templates](https://github.com/forwardemail/email-templates) - Создаёт, предварительно просматривает и отправляет пользовательские шаблоны писем.
- [MJML](https://github.com/mjmlio/mjml) - Язык разметки, упрощающий создание адаптивных писем.
- [Forward Email](https://github.com/forwardemail/forwardemail.net) - Открытый почтовый сервис, который можно разместить на собственном сервере.

### Очереди задач

- [bull](https://github.com/OptimalBits/bull) - Постоянная очередь задач и сообщений.
- [agenda](https://github.com/agenda/agenda) - Планирование задач с хранением данных в MongoDB.
- [idoit](https://github.com/nodeca/idoit) - Движок очередей задач на базе Redis с расширенным управлением задачами.
- [node-resque](https://github.com/actionhero/node-resque) - Очередь задач на базе Redis.
- [rsmq](https://github.com/smrchy/rsmq) - Очередь сообщений на базе Redis.
- [bee-queue](https://github.com/bee-queue/bee-queue) - Высокопроизводительная очередь задач на базе Redis.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - Простая высокопроизводительная очередь сообщений Redis с мониторингом в реальном времени.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - Позволяет создавать приложения на базе Amazon Simple Queue Service (SQS) без шаблонного кода.
- [better-queue](https://github.com/diamondio/better-queue) - Простая и эффективная очередь задач для случаев, когда нельзя использовать Redis.
- [bullmq](https://github.com/taskforcesh/bullmq) - Постоянная очередь задач и сообщений.
- [bree](https://github.com/breejs/bree) - Планировщик задач с поддержкой потоков-исполнителей, cron, дат и синтаксиса, близкого к обычной речи.
- [graphile-worker](https://github.com/graphile/worker) - Высокопроизводительная очередь задач на базе PostgreSQL.

### Управление Node.js

- [n](https://github.com/tj/n) - Управление версиями Node.js.
- [nave](https://github.com/isaacs/nave) - Виртуальные среды для Node.js.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Виртуальная среда Node.js, совместимая с virtualenv для Python.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Управление версиями Node.js в Windows.
- [nodenv](https://github.com/nodenv/nodenv) - Менеджер версий, похожий на rbenv для Ruby, с автоматическим переключением версий.
- [fnm](https://github.com/Schniz/fnm) - Кроссплатформенный менеджер версий Node.js, написанный на Rust.

### Кроссплатформенная интеграция

- [napi-rs](https://github.com/napi-rs/napi-rs) - Фреймворк для создания скомпилированных дополнений Node.js на Rust через Node-API.
- [Neon](https://github.com/neon-bindings/neon) - Привязки к Rust для создания безопасных и быстрых нативных модулей Node.js.
- [Edge.js](https://github.com/agracio/edge-js) - Запускает код .NET и Node.js в одном процессе в Windows, macOS и Linux.
- [DotNetJS](https://github.com/Elringus/DotNetJS) - Позволяет использовать библиотеки .NET в Node.js с помощью слоя совместимости .NET.

### Обработка естественного языка

- [retext](https://github.com/retextjs/retext) - Расширяемая система для обработки естественного языка.
- [franc](https://github.com/wooorm/franc) - Определяет язык текста.
- [leven](https://github.com/sindresorhus/leven) - Измеряет различие между строками с помощью расстояния Левенштейна.
- [natural](https://github.com/NaturalNode/natural) - Инструментарий для обработки естественного языка.
- [nlp.js](https://github.com/axa-group/nlp.js) - Создание ботов с извлечением сущностей, анализом тональности, автоматическим определением языка и другими возможностями.

### Управление процессами

- [PM2](https://github.com/Unitech/pm2) - Продвинутый менеджер процессов.
- [nodemon](https://github.com/remy/nodemon) - Отслеживает изменения в приложении и автоматически перезапускает сервер.
- [node-mac](https://github.com/coreybutler/node-mac) - Запускает сценарии как нативную службу macOS и отправляет журналы в приложение Console.
- [node-linux](https://github.com/coreybutler/node-linux) - Запускает сценарии как системную службу и отправляет журналы в syslog.
- [node-windows](https://github.com/coreybutler/node-windows) - Запускает сценарии как службу Windows и записывает события в журнал событий.
- [supervisor](https://github.com/petruisfan/node-supervisor) - Запускает сценарии при сбое или изменении файла `*.js`.
- [Phusion Passenger](https://github.com/phusion/passenger) - Удобный менеджер процессов, который напрямую интегрируется с Nginx.

### Автоматизация

- [robotjs](https://github.com/octalmage/robotjs) - Автоматизация рабочего стола: управление мышью и клавиатурой, а также считывание изображения с экрана.
- [nut.js](https://github.com/nut-tree/nut.js) - Кроссплатформенный нативный фреймворк для автоматизации и тестирования графического интерфейса с сопоставлением изображений и интеграцией с Jest.

### AST

- [Acorn](https://github.com/acornjs/acorn) - Компактный и быстрый парсер JavaScript.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - Парсер JavaScript, используемый в Babel.

### Генераторы статических сайтов

- [DocPad](https://github.com/docpad/docpad) - Генератор статических сайтов с динамическими возможностями и большой экосистемой плагинов.
- [docsify](https://github.com/docsifyjs/docsify) - Генератор сайтов документации на Markdown, не требующий предварительно созданных HTML-файлов.
- [Charge](https://github.com/brandonweiss/charge) - Генератор статических сайтов без настроек, использующий JSX и MDX и предлагающий готовые решения.

### Системы управления контентом

- [KeystoneJS](https://github.com/keystonejs/keystone) - CMS и платформа веб-приложений на Express и MongoDB.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Система управления контентом на Express и MongoDB, ориентированная на удобное редактирование контента и администрирование на стороне клиента.
- [Strapi](https://github.com/strapi/strapi) - Фреймворк управления контентом (headless CMS) для создания мощных API.
- [Factor](https://github.com/FactorJS/factor) - Фреймворк панелей управления и headless CMS на Vue.js.
- [AdminBro](https://github.com/SoftwareBrothers/adminjs) - Автоматически создаваемая панель администратора с операциями CRUD для всех ресурсов.
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - CMS и headless GraphQL API.

### Форум

- [nodeBB](https://github.com/NodeBB/NodeBB) - Платформа форумов для современного веба.

### Блогинг

- [Ghost](https://github.com/TryGhost/Ghost) - Простая и мощная платформа для публикации материалов.
- [Hexo](https://github.com/hexojs/hexo) - Быстрый, простой и мощный фреймворк для ведения блогов.

### Странное

- [cows](https://github.com/sindresorhus/cows) - ASCII-коровы.
- [superb](https://github.com/sindresorhus/superb) - Подбирает слова вроде «великолепный».
- [cat-names](https://github.com/sindresorhus/cat-names) - Выдаёт популярные клички для кошек.
- [dog-names](https://github.com/sindresorhus/dog-names) - Выдаёт популярные клички для собак.
- [superheroes](https://github.com/sindresorhus/superheroes) - Выдаёт имена супергероев.
- [supervillains](https://github.com/sindresorhus/supervillains) - Выдаёт имена суперзлодеев.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - Выдаёт забавные ASCII-смайлики.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - Выдаёт данные на гиковские темы — например, о Гарри Поттере, «Звёздных войнах» и Pokémon.

### Сериализация

- [snappy](https://github.com/kesla/node-snappy) - Нативные привязки к библиотеке сжатия Snappy от Google.
- [protobuf](https://github.com/protobufjs/protobuf.js) - Реализация Protocol Buffers.
- [compactr](https://github.com/compactr/compactr.js) - Реализация протокола Compactr.

### Разное

- [execa](https://github.com/sindresorhus/execa) - Улучшенная альтернатива `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - Быстрая, гибкая и лёгкая реализация ядра jQuery, специально разработанная для сервера.
- [open](https://github.com/sindresorhus/open) - Упрощает открытие сайтов, файлов и исполняемых программ.
- [hasha](https://github.com/sindresorhus/hasha) - Просто вычисляет хеш буфера, строки, потока или файла.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - Получает свойство вложенного объекта по пути с точками.
- [onetime](https://github.com/sindresorhus/onetime) - Запускает функцию только один раз.
- [mem](https://github.com/sindresorhus/mem) - Мемоизирует функции — кэширует результаты одинаковых вызовов, ускоряя повторные вызовы с теми же аргументами.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - Удаляет метку порядка байтов UTF-8 (BOM) из строки, буфера или потока.
- [os-locale](https://github.com/sindresorhus/os-locale) - Получает системную локаль.
- [ssh2](https://github.com/mscdex/ssh2) - Клиент и сервер SSH2.
- [adit](https://github.com/markelog/adit) - Упрощает создание SSH-туннелей.
- [file-type](https://github.com/sindresorhus/file-type) - Определяет тип файла в Buffer.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - Ограничивает частоту операций.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - Лёгкая реализация API Web Worker с нативными потоками.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - Доступ к системному буферу обмена для копирования и вставки.
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Упрощает публикацию и установку бинарных дополнений C++ для Node.js.
- [opencv](https://github.com/peterbraden/node-opencv) - Привязки для OpenCV — общепринятой библиотеки компьютерного зрения.
- [dotenv](https://github.com/motdotla/dotenv) - Загружает переменные окружения из файла .env.
- [semver](https://github.com/npm/node-semver) - Парсер семантических версий.
- [nodegit](https://github.com/nodegit/nodegit) - Нативные привязки для Git.
- [json-strictify](https://github.com/pigulla/json-strictify) - Безопасно сериализует значение в JSON, не теряя данные и не зацикливаясь.
- [jsdom](https://github.com/jsdom/jsdom) - Реализация HTML и DOM на JavaScript.
- [@sindresorhus/is](https://github.com/sindresorhus/is) - Проверяет типы значений.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - Получает, задаёт и удаляет вложенные свойства `process.env` по пути с точками.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - Библиотека на чистом JavaScript для работы с видеофайлами MP4 и FLV, а также создания фрагментов MPEG-TS для потоковой передачи HLS.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) - Клиент FTP/FTPS.
- [cashify](https://github.com/xxczaki/cashify) - Конвертация валют.
- [genepi](https://github.com/Geode-solutions/genepi) - Автоматически создаёт нативное дополнение Node.js из кода C++.
- [husky](https://github.com/typicode/husky) - Создаёт сценарии хуков Git.
- [patch-package](https://github.com/ds300/patch-package) - Создаёт и сохраняет исправления зависимостей npm.
- [editly](https://github.com/mifi/editly) - Декларативный API для монтажа видео.
- [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - Пути к свойствам объектов с шаблонами подстановки и регулярными выражениями.
- [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) - Полезные утилиты для Uint8Array и Buffer.

## Менеджер пакетов

- [npm](https://docs.npmjs.com/about-npm) - Менеджер пакетов по умолчанию.
- [pnpm](https://pnpm.io) - Менеджер пакетов, экономно расходующий место на диске.
- [yarn](https://yarnpkg.com) - Альтернативный менеджер пакетов.
- [bun](https://bun.sh) - Универсальный набор инструментов для приложений на JavaScript и TypeScript.

## Ресурсы

### Руководства

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Подборка и обзор лучших материалов о рекомендуемых практиках Node.js, доступная на нескольких языках.
- [Nodeschool](https://github.com/nodeschool) - Изучайте Node.js с помощью интерактивных уроков.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - Введение в Node.js.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - Рекомендации по написанию новых модулей npm.
- [The Node Way](https://github.com/FredKSchott/the-node-way) - Философия лучших практик Node.js: принципы создания поддерживаемых модулей, масштабируемых приложений и удобочитаемого кода.
- [You Don't Know Node.js](https://github.com/azat-co/you-dont-know-node) - Введение в основные функции Node.js и асинхронный JavaScript.
- [Portable Node.js guide](https://github.com/ehmicky/cross-platform-node-guide) - Практическое руководство по написанию переносимого кода Node.js для разных платформ.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - Серия видеоуроков и прямых трансляций о создании и развёртывании полноценного веб-приложения с помощью нескольких простых библиотек и встроенных модулей Node.js.

### Поиск

- [npms](https://npms.io) - Отличный поиск пакетов с подробным анализом их качества по [множеству показателей](https://npms.io/about).
- [npm addict](https://npmaddict.com) - Ваша ежедневная порция пакетов npm.

### Статьи

- [Error Handling in Node.js](https://sematext.com/blog/node-js-error-handling/)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### Рассылки

- [Node Weekly](https://nodeweekly.com) - Еженедельная подборка новостей и статей о Node.js.

### Видео

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - Разговор о сборщике мусора V8.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Содержательное выступление создателя Node.js о некоторых ограничениях платформы.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Видеокурс по созданию REST API с помощью Node.js.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Создание REST API на чистом Node.js без фреймворка вроде Express.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - Основы архитектуры V8 и оптимизации выполнения JavaScript.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - Как V8 оптимизирует выполнение JavaScript.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - Как находить узкие места приложения и оптимизировать производительность, используя знания о V8.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - Внутреннее устройство Node.js с акцентом на V8 и libuv.
- [Introduction to libuv: What's a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - Архитектура `libuv`, пул потоков и цикл событий с разбором исходного кода.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - Подробный разбор архитектуры `libuv`, включая случаи фактического использования потоков.
- [You Don't Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - Внутреннее устройство Node.js с викторинами о V8, libuv, цикле событий, модулях, потоках и кластерах.

### Книги

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](https://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way/)
- [Professional Node.js: Building JavaScript Based Scalable Software](https://www.amazon.com/Professional-Node-js-Building-JavaScript-Scalable-ebook/dp/B009L7QETY/)
- [Secure Your Node.js Web Application](https://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### Блоги

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](https://webapplog.com/tag/node-js/) - Статьи о Node.js и JavaScript от автора книг «Practical Node.js» и «Pro Express.js», Azat Mardan.

### Курсы

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Видеокурс Уэса Боса.
- [Real Time Web with Node.js](https://www.pluralsight.com/courses/code-school-real-time-web-with-nodejs)
- [Learn and Understand Node.js](https://www.udemy.com/course/understand-nodejs/)
- [Node.js Full Stack Developer Course](https://kinsta.com/academy/course/node-js-full-stack-developer/)

### Шпаргалки

- [Express.js](https://github.com/azat-co/cheatsheets/tree/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - Ответы на частые вопросы о потоках, включая постраничную навигацию, события и многое другое.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Контрольный список для анализа безопасности исходного кода веб-сервиса на Node.js.

### Инструменты

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Расширение Chrome, превращающее зависимости в package.json и файлах .js, .jsx, .coffee и .md в ссылки на GitHub.
- [npm-hub](https://chrome.google.com/webstore/detail/npmhub/kbbbjimdjbjclaebffknlabpogocablj) - Расширение Chrome, показывающее зависимости npm внизу файла README репозитория.
- [RunKit](https://runkit.com) - Встраивает среду Node.js на любой веб-сайт.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Расширение Chrome со статистикой загрузок npm на GitHub.
- [npm semver calculator](https://semver.npmjs.com) - Позволяет наглядно посмотреть, каким версиям соответствует диапазон semver.
- [CodeSandbox](https://codesandbox.io/templates/node-http-server) - Онлайн-среда разработки и прототипирования.
- [Amplication](https://github.com/amplication/amplication) - Автоматически создаёт полностью функциональные приложения.
- [RunJS](https://runjs.app) - Настольная площадка для экспериментов с JavaScript.

### Сообщество

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discord.com/invite/96WGtJt)

### Разное

- [nodebots](https://nodebots.io) - Роботы, управляемые JavaScript.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Шаблонная заготовка для быстрого создания модуля Node.js.
- [modern-node](https://github.com/sheerun/modern-node) - Набор инструментов для создания модулей Node.js с Jest, Prettier, ESLint и Standard.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Создаёт каркас модуля Node.js.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Рекомендации, советы и ресурсы по работе с Node.js на платформах Microsoft.
- [Module Requests & Ideas](https://github.com/sindresorhus/project-ideas) - Предлагайте идеи для JavaScript-модулей, которых вам не хватает, или находите вдохновение.
- [v8-perf](https://github.com/thlorenz/v8-perf) - Заметки и ресурсы о производительности V8 и, следовательно, Node.js.

## Связанные списки

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Ресурсы и советы по использованию npm.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - Ресурсы для написания и тестирования кроссплатформенного кода.
