# Awesome Chrome DevTools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Отличные инструменты и ресурсы в экосистеме Chrome DevTools

Инструменты, драйверы протокола, средства просмотра трассировок и автономные фронтенды, созданные вокруг Chrome DevTools и Chrome DevTools Protocol (CDP). Следуя [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md), мы держим этот список сфокусированным на действительно полезном, а не на индексации всего подряд в области.

## Содержание

- [Обучение](#обучение)
- [Трассировка и профилирование](#трассировка-и-профилирование)
- [Chrome DevTools Protocol](#chrome-devtools-protocol)
- [Использование фронтенда DevTools с другими платформами](#использование-фронтенда-devtools-с-другими-платформами)
- [Расширения DevTools](#расширения-devtools)
- [Архив](#архив)

---

## Обучение
- [Dev Tips](https://umaar.com/dev-tips/) - Большая подборка советов в виде анимированных gif.
- [DevTools Tips](https://devtoolstips.org/) - Подборка проиллюстрированных советов в виде мини-туториалов.
- [Web cheatcodes](https://codepo8.github.io/web-cheatcodes/) - Инструменты разработчика браузера для неразработчиков.
- [Dear Console](https://codepo8.github.io/dearconsole) - Подборка сниппетов для использования в консоли браузера.
- [Chrome Secret Menus](https://github.com/sparkyrider/chrome-secret-menus) - Руководство по внутренним страницам Chrome `chrome://` и диагностическим инструментам.
- [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook) - Практическое руководство по фронтенд-отладке в DevTools, расширениях фреймворков и IDE.

---

## Трассировка и профилирование

Трассировки DevTools Performance и логи V8 `.cpuprofile` — это по сути обычный JSON, и несколько автономных средств просмотра творят с ними чудеса:

- [trace.cafe](https://trace.cafe/) - Делитесь и просматривайте веб-трассировки производительности прямо в панели Performance DevTools ([исходный код](https://github.com/paulirish/trace.cafe)).
- [speedscope](https://github.com/jlfwong/speedscope) - Быстрый интерактивный просмотрщик flamegraph, импортирующий `.cpuprofile` и таймлайн-трассировки Chrome.
- [cpupro](https://github.com/discoveryjs/cpupro) - Глубокий анализатор V8/Chrome `.cpuprofile` с flamegraph, деревьями вызовов и диагностикой горячих точек.
- [Perfetto](https://github.com/google/perfetto) - Набор для системного профилирования и анализа трассировок ([ui.perfetto.dev](https://ui.perfetto.dev/)) с поддержкой трассировок Chromium и SQL-запросов к трассировкам.

---

## Chrome DevTools Protocol

Профессиональный совет: включите встроенный в Chrome [Protocol Monitor](https://developer.chrome.com/docs/devtools/protocol-monitor) (`More tools > Protocol monitor`), чтобы наблюдать живой CDP-трафик и отправлять сырые команды прямо в браузере.

- [ChromeDevTools/devtools-protocol](https://github.com/chromedevtools/devtools-protocol) - **Каноническое расположение JSON протокола**, типов TypeScript и трекера проблем для ошибок протокола.
- [DevTools Protocol API Docs](https://chromedevtools.github.io/devtools-protocol/) - Обозреваемый интерфейс для изучения доменов, методов и событий протокола.

### Разработка с протоколом
- [chrome-remote-interface Wiki](https://github.com/cyrus-and/chrome-remote-interface/wiki) - Удобные рецепты для типичных низкоуровневых задач CDP.
- [Chrome Protocol Proxy](https://github.com/wendigo/chrome-protocol-proxy) - Прокси для инспекции и отладки клиентского CDP-трафика.

### Две крупные библиотеки автоматизации
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Высокоуровневый Node.js API для управления Chrome через CDP и WebDriver BiDi. См. также [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer).
- [Playwright](https://github.com/microsoft/playwright) - Кросс-браузерная автоматизация для Chromium, Firefox и WebKit на Node.js, Python, .NET и Java. См. также [awesome-playwright](https://github.com/mxschmitt/awesome-playwright).

### Библиотеки для управления протоколом (или слоем выше)

- JavaScript/Node.js: [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - Низкоуровневый CDP-клиент
- Rust: [chromiumoxide](https://github.com/mattsse/chromiumoxide) - Асинхронная/tokio библиотека с генерируемыми типами
- Rust: [Rust Headless Chrome](https://github.com/rust-headless-chrome/rust-headless-chrome) - Высокоуровневый headless-клиент Chrome
- Java: [chrome-devtools-java-client](https://github.com/kklisura/chrome-devtools-java-client) - Низкоуровневый клиент протокола
- Java: [jvppeteer](https://github.com/fanyong920/jvppeteer) - Headless Chrome для Java
- Python: [Zendriver](https://github.com/cdpdriver/zendriver) - Асинхронная CDP-автоматизация браузера
- Python: [PyCDP](https://github.com/hyperiongray/python-chrome-devtools-protocol) - Обёртки без ввода-вывода (см. также [Trio driver](https://github.com/hyperiongray/trio-chrome-devtools-protocol))
- Python: [ChromeController](https://github.com/fake-name/ChromeController) - Высокоуровневое управление браузером
- Go: [chromedp](https://github.com/chromedp/chromedp) - Высокоуровневые действия и задачи
- Go: [Rod](https://github.com/go-rod/rod) - Высокоуровневая автоматизация и скрапинг
- Go: [cdp](https://github.com/mafredri/cdp) - Типобезопасные привязки для CDP
- C#/.NET: [Puppeteer Sharp](https://github.com/hardkoded/puppeteer-sharp) - Порт Puppeteer
- C#/.NET: [dotnet-chrome-protocol](https://github.com/seclerp/dotnet-chrome-protocol) - Библиотека времени выполнения и генерация кода схемы
- Ruby: [Ferrum](https://github.com/rubycdp/ferrum) - Высокоуровневый API управления Chrome
- Ruby: [Cuprite](https://github.com/rubycdp/cuprite) - Драйвер Capybara
- Kotlin: [chrome-devtools-kotlin](https://github.com/joffrey-bion/chrome-devtools-kotlin) - Клиентская библиотека на корутинах
- Kotlin: [kdriver](https://github.com/cdpdriver/kdriver) - Высокоуровневая автоматизация на корутинах
- Clojure: [clj-chrome-devtools](https://github.com/tatut/clj-chrome-devtools) - Автогенерируемая обёртка CDP
- Clojure: [cuic](https://github.com/milankinen/cuic) - Высокоуровневая автоматизация UI-тестов
- PHP: [chrome-devtools-protocol](https://github.com/jakubkulhan/chrome-devtools-protocol) - Клиентская библиотека

### Агентная автоматизация браузера

> Мы *чрезвычайно* придирчивы к этому разделу. Сейчас все оборачивают браузер для агентов — любой PR, добавляющий очередной MCP-сервер или CLI-агент, будет закрыт, если только у него нет реального веса и он не делает чего-то нового с CDP под капотом.

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Официальный MCP-сервер для Chrome DevTools, который также включает [CLI](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/skills/chrome-devtools-cli/SKILL.md).
- [Webcmd](https://github.com/agentrhq/webcmd) - Компилирует навигацию по сайту в детерминированные по-site CLI-команды для ИИ-агентов.
- [Lumen](https://github.com/omxyz/lumen) - Браузерный агент с приоритетом зрения и самовосстанавливающимся детерминированным воспроизведением через CDP.
- [bdg](https://github.com/szymdzum/browser-debugger-cli) - Постоянная фоновая CDP-сессия, предоставляющая DOM, сеть, консоль и сырые методы протокола как shell-команды.

### Браузерные адаптеры
- [devtools-remote-debugger](https://github.com/Nice-PLQ/devtools-remote-debugger) - Удалённая отладка веб-страницы через CDP-агент, реализованный на клиентском JS.
- [Inspect](https://inspect.dev/) - Используйте DevTools против браузеров и WebView iOS и Android. **(закрытый исходный код)**

## Использование фронтенда DevTools с другими платформами

UI DevTools — это веб-приложение, говорящее по CDP через WebSocket, поэтому вы можете встроить его или направить на Node, Ruby, мобильные webview или пользовательские среды выполнения (встроенные цели см. в `chrome://inspect`).

- [ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend) - Канонический исходный репозиторий UI Chrome DevTools (опубликован в npm как [chrome-devtools-frontend](https://www.npmjs.com/package/chrome-devtools-frontend)).
- [Chii](https://github.com/liriliri/chii) и [Eruda](https://github.com/liriliri/eruda) - Сервер удалённой отладки, использующий реальный UI `devtools-frontend` (`Chii`, современная замена Weinre) и консоль DevTools внутри страницы для мобильных (`Eruda`).
- [vscode-js-debug](https://github.com/microsoft/vscode-js-debug) - Официальный совместимый с DAP отладчик JavaScript и Chrome CDP, питающий VS Code.
- [VS Code - Elements for Microsoft Edge](https://github.com/microsoft/vscode-edge-devtools) - Панели Elements и Network, встроенные в VS Code.
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27) - Руководство по отладке и профилированию Node.js с `node --inspect`.
- [ruby/debug](https://github.com/ruby/debug) - Официальный отладчик Ruby, поддерживающий подключение Chrome DevTools через CDP (`rdbg --open=chrome`).

---

## Расширения DevTools

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Инспектируйте иерархии компонентов React, props и flamegraph профайлера.
- [Vue.js Developer Tools](https://github.com/vuejs/devtools) - Инспектируйте компоненты, состояние и маршрутизацию Vue.js.
- [Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) - Инспекция дерева компонентов и профилирование обнаружения изменений для Angular.
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) - Отладка с путешествием во времени и история действий для Redux.
- [Ember.js Inspector](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) - Инспектируйте объекты, маршруты и данные Ember.js.
- [Web Component DevTools](https://chromewebstore.google.com/detail/web-component-devtools/gdniinfdlmmmjpnhgnkmfpffipenjljo) - Инспектируйте, изменяйте и наблюдайте пользовательские элементы и shadow DOM на странице.
- [Clockwork](https://chromewebstore.google.com/detail/clockwork/dmggabnehkmmfmdffgajcflpdjlnoemp?hl=en) - Профилирование PHP-приложений и инспекция запросов в DevTools.
- [RailsPanel](https://chromewebstore.google.com/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg?hl=en-US) - Панель профилирования запросов и SQL Ruby on Rails.

## Архив
Старые проекты, вероятно, больше не поддерживаются… Но всё ещё крутые.

- [ndb](https://github.com/GoogleChromeLabs/ndb) - Улучшенный опыт отладки Node.js, построенный на фронтенде DevTools.
- [thetool](https://github.com/sfninja/thetool) - Профилирование CPU, памяти, покрытия и типов для Node.js.
- [Facebook Stetho](https://github.com/facebook/stetho) - Нативная отладка Android с Chrome DevTools.
- [PonyDebugger](https://github.com/square/PonyDebugger) - Удалённая отладка сети и Core Data для iOS-приложений через Chrome DevTools.
- [betwixt](https://github.com/kdzwinel/betwixt) - Системный сетевой прокси, инспектируемый через автономную панель Network DevTools.
- [Dirac](https://github.com/binaryage/dirac) - Отладка ClojureScript с пользовательским форком DevTools.
- [VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug/) - Исходный отладчик Chrome для VS Code (заменён встроенным [vscode-js-debug](https://github.com/microsoft/vscode-js-debug), имеющим богатую реализацию CDP/DAP).
- [noice-json-rpc](https://github.com/nojvek/noice-json-rpc) - Библиотека TypeScript/JS на основе прокси, предоставляющая домены CDP напрямую как API.
- [PuPHPeteer](https://github.com/rialto-php/puphpeteer) - PHP-мост к Node Puppeteer.
- [Insight](https://github.com/3Dparallax/insight/) - Набор инструментов отладки WebGL для Chrome DevTools.
- [Remote Debug Gateway](https://github.com/RemoteDebug/remotedebug-gateway) - Подключите отладочный клиент сразу к нескольким браузерам.
  - Многопользовательский DevTools: [DevTools Remote](https://github.com/auchenberg/devtools-remote) - Удалённая отладка чужого браузера.
- [DevTools Backend](https://github.com/christian-bromann/devtools-backend) - Автономная реализация бэкенда Chrome DevTools для отладки произвольных веб-сред.
- Python CDP-драйвер: [pychrome](https://github.com/fate0/pychrome) - Низкоуровневый обработчик транспорта CDP.
- [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy) - Предоставляет экземпляры Mobile Safari и UIWebView через CDP.
  - [Remote Debug iOS WebKit adapter](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter) - Строится на `ios-webkit-debug-proxy` и переводит Remote Debugging Protocol WebKit в CDP.
- [IE Diagnostics Adapter](https://github.com/Microsoft/IEDiagnosticsAdapter) - Адаптер протокола, переводящий IE 11 в CDP.
