```
 █████╗ ██╗    ██╗███████╗███████╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██║    ██║██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔════╝
███████║██║ █╗ ██║█████╗  ███████╗██║   ██║██╔████╔██║█████╗
██╔══██║██║███╗██║██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
██║  ██║╚███╔███╔╝███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
███████╗██╗  ██╗███████╗██╗     ██╗
██╔════╝██║  ██║██╔════╝██║     ██║
███████╗███████║█████╗  ██║     ██║
╚════██║██╔══██║██╔══╝  ██║     ██║
███████║██║  ██║███████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
```

# Подборка ресурсов по Shell [![Awesome][awesome-badge]][awesome-link]

Кураторский список потрясающих фреймворков командной строки, наборов инструментов, руководств и гизмосов. Вдохновленный удивительным PHP. Эта потрясающая коллекция также доступна на [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Оболочки](#shells)
- [Производительность командной строки](#command-line-productivity)
  - [Директория Навигация](#directory-navigation)
- [кастомизация](#customization)
- [Для разработчиков](#for-developers)
- [Системные услуги](#system-utilities)
- [Скачать и обслуживать](#downloading-and-serving)
- [Мультимедиа и файловые форматы](#multimedia-and-file-formats)
- [Приложения](#applications)
- [Игры](#games)
- [Управление пакетами Shell](#shell-package-management)
- [Разработка сценариев Shell](#shell-script-development)
- [Руководители](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Другие удивительные списки](#other-awesome-lists)

## Оболочки

*Выберите базовую оболочку.*

* [bash](https://www.gnu.org/software/bash/) Оболочка проекта GNU (Bourne Again SHell)
* [elvish](https://elv.sh/) Дружественные, экспрессивные функции оболочки, такие как анонимные функции и структуры данных
* [es](https://wryun.github.io/es-shell/) Расширяемая оболочка, основанная на Плане 9 [рс](https://github.com/rakitzis/rc) снаряд
* [fish](https://fishshell.com) - Умная и удобная командная строка
* [ion](https://github.com/redox-os/ion) Современная системная оболочка, которая имеет простой, но мощный синтаксис. Она полностью написана в Русте.
* [ksh93](https://github.com/att/ast) Korn Shell
* [mksh](https://github.com/MirBSD/mksh) MirBSD Korn Shell
* [murex](https://github.com/lmorg/murex) - Более умная среда оболочки и сценариев с расширенными функциями, предназначенными для удобства использования, безопасности и производительности (например, более интеллектуальный инструментарий DevOps)
* [ngs](https://github.com/ngs-lang/ngs) - Разработан полнофункциональный скриптовый язык, созданный специально для Ops. REPL.
* [nushell](https://github.com/nushell/nushell) - Современная раковина, написанная на ржавчине
* [oksh](https://github.com/ibara/oksh) Портативный OpenBSD ksh
* [osh](https://www.oilshell.org) Bash-совместим с новым/современным языком оболочки Unix под названием Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) Общественное достояние Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) кроссплатформенная система автоматизации задач и управления конфигурацией, состоящая из оболочки командной строки и языка сценариев
* [shell++](https://github.com/alexst07/shell-plus-plus) Дружелюбный и современный функциональный и объектно-ориентированный язык сценариев оболочки
* [shenv](https://github.com/shenv/shenv) Простое управление версиями shell
* [tcsh](https://www.tcsh.org/) C-оболочка с завершением имени файла и редактированием командной строки
* [xonsh](https://xon.sh) Python-ish, похожий на BASHwards язык оболочки и командная строка
* [yash](https://github.com/magicant/yash) POSIX-совместимая командная строка с встроенной поддержкой завершения и прогнозирования на основе истории команд
* [zsh](https://www.zsh.org) - Мощная оболочка с языком сценариев

## Продуктивность командной строки

*Поиск, закладки, мультиплексирование и другие инструменты, которые делают ваш терминал более продуктивным.

* [AdvancedNewFile](https://github.com/tanrax/terminal-AdvancedNewFile) Быстрое создание файлов и каталогов рекурсивным способом. Вдохновлен плагином Vim.
* [ag](https://github.com/ggreer/the_silver_searcher) Супер быстрый поиск по строкам через иерархию каталогов
* [aliases](https://github.com/sebglazebrook/aliases) - Контекстные, динамические, организованные псевдонимы для bash
* [arttime](https://github.com/reportaman/arttime) Красота текстового искусства соответствует функциональности часов, таймера, тайм-менеджера pomodoro++
* [autoenv](https://github.com/hyperupcall/autoenv) - Среды на основе каталогов.
* [await](https://github.com/slavaGanzin/await) - одинарный двоичный код, который запускает список команд параллельно и ждет их завершения
* [bartib](https://github.com/nikolassv/bartib) - Простой таймтрекер для командной строки. Он сохраняет журнал всех отслеживаемых действий в виде простого текстового файла и позволяет создавать гибкие отчеты.
* [bashhub](https://github.com/rcaloras/bashhub-client) - :cloud: история Bash в облаке. Индексированный и поисковый.
* [boilr](https://github.com/tmrts/boilr) - Плавно быстрый инструмент CLI для создания проектов из шаблонов boilerplate.
* [boom](https://github.com/holman/boom) Храните ссылки и фрагменты в командной строке
* [borg](https://github.com/ok-borg/borg) - Поисковая система на основе терминала для команд bash
* [broot](https://github.com/Canop/broot) Лучший способ навигации по каталогам
* [browsh](https://github.com/browsh-org/browsh) - Современный текстовый браузер
* [Buku](https://github.com/jarun/Buku) Мощный менеджер закладок командной строки
* [byobu](https://www.byobu.org) - текстовый оконный менеджер и мультиплексор терминала
* [cod](https://github.com/dim-an/cod) Демон завершения для оболочки, которая учится, когда вы вызываете `--help` командовать
* [CloudClip](https://github.com/skywind3000/CloudClip) Ваш собственный буфер обмена в облаке, копируйте и вставляйте текст с сутью между различными системами
* [ddgr](https://github.com/jarun/ddgr) DuckDuckGo из терминала
* [desk](https://github.com/jamesob/desk) Легкий менеджер рабочего пространства для оболочки
* [direnv](https://github.com/direnv/direnv) - Окружающий переключатель для оболочки, сравните с autoenv
* [dnote](https://github.com/dnote/dnote) - Простой блокнот командной строки с синхронизацией нескольких устройств и веб-интерфейсом
* [eureka](https://github.com/simeg/eureka/) - :bulb: CLI инструмент для ввода и хранения ваших идей, не выходя из терминала
* [fasd](https://github.com/clvv/fasd) - Усилитель производительности командной строки, обеспечивает быстрый доступ к файлам и каталогам
* [fd](https://github.com/sharkdp/fd) Простая, быстрая и удобная альтернатива для поиска.
* [foxy](https://github.com/s-p-k/foxy) - Простые текстовые закладки для браузеров Firefox и серфинга.
* [fselect](https://github.com/jhspetersson/fselect) Найдите файлы с SQL-подобными запросами.
* [funky](https://github.com/bbugyi200/funky) Расширяет функциональность функций оболочки, делая их более мощными и гибкими.
* [fz](https://github.com/changyuheng/fz) - Бесшовное нечеткое завершение вкладки для z
* [fzf](https://github.com/junegunn/fzf) - Нечеткий искатель командной строки
* [gitmux](https://github.com/arl/gitmux) Показать статус Git в Tmux status bar
* [googler](https://github.com/jarun/googler) Google Search, Google Site Search, Google News с терминала
* [googlr](https://github.com/Astranno/googlr) Инструмент командной строки, который позволяет вам искать Google с вашего терминала.
* [has](https://github.com/kdabir/has) - `has` помогает проверить наличие различных инструментов командной строки и их версий на пути
* [how2](https://github.com/santinic/how2) - `how2` Найден самый простой способ сделать что-то в Unix-оболочке Это как `man`Но вы можете запросить его на естественном языке.
* [navi](https://github.com/denisidoro/navi) - Интерактивный инструмент чит-листа для командной строки
* [hhighlighter](https://github.com/paoloantinori/hhighlighter) - Раскраска слов в командном выходе
* [hr](https://github.com/LuRsT/hr) - `<hr />` для вашего терминала
* [hss](https://github.com/six-ddc/hss) - Интерактивный параллельный SSH-клиент с автозаполнением и асинхронным исполнением
* [hstr](https://github.com/dvorka/hstr) Bash History Suggest Box (альбом)
* [k](https://github.com/supercrabtree/k) - k - это скрипт Zsh, чтобы сделать списки каталогов более читаемыми, добавив статус Git, цвета с массой файла и даты гниения
* [k alias](https://github.com/lingtalfi/k) - получить kool псевдонимы (и многое другое), работая с простым однолинейным
* [lf](https://github.com/gokcehan/lf) Терминальный файловый менеджер, написанный в Go, вдохновленный рейнджером
* [lf.sh](https://github.com/suewonjp/lf.sh) - Быстрый поиск файлов с меньшим количеством наборов текста и делать гораздо больше (сканирование, копирование пути в буфер обмена и т. Д.)
* [lowcharts](https://github.com/juan-leon/lowcharts) Нарисуйте графики низкого разрешения в терминале
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Модули среды на основе Lua, которые улучшают модули на основе Tcl при обратной совместимости (сравните с модулями)
* [loop](https://github.com/Miserlou/Loop) - Писать и управлять сложными циклами в качестве однострочных
* [marker](https://github.com/pindexis/marker) - Закладка команд оболочки
* [mackup](https://github.com/lra/mackup/) - Поддерживайте синхронизацию настроек приложения (OS X/Linux)
* [mcfly](https://github.com/cantino/mcfly) - Пролетайте через историю вашей раковины. Великий шотландец!
* [modules](http://modules.sourceforge.net/) Классические модули среды на основе Tcl, управляющие средой оболочки (сравните с Lmod, direnv и autoenv)
* [nnn](https://github.com/jarun/nnn) - Браузер файлов и анализатор использования диска с отличной интеграцией с рабочим столом
* [ok-sh](https://github.com/secretGeek/ok-bash) — Вы работаете над разными проектами? И в каждом проекте есть команды, которые вы используете, которые специфичны для этого проекта? Вам нужен файл .ok.
* [parallel](https://www.gnu.org/software/parallel/) Создание и выполнение командных строк оболочки из стандартного ввода параллельно
* [pass](https://www.passwordstore.org/) Управляйте паролями из командной строки с помощью шифрования GPG и дополнительной интеграции git.
* [pathpicker](https://github.com/facebook/PathPicker) Принимает входные данные, такие как grep, поиски, git и т. Д.; позволяет выбирать файлы из результата ввода, которые затем можно открыть или предоставить в качестве аргумента для команды.
* [pdd](https://github.com/jarun/pdd) - Маленькая дата, калькулятор времени с таймерами
* [percol](https://github.com/mooz/percol) Добавляет вкус интерактивной фильтрации к традиционной концепции трубки оболочки UNIX
* [q](https://github.com/cal2195/q) Vim как макрорегистр для Bash и Zsh Shell
* [qfc](https://github.com/pindexis/qfc) Виджет завершения файлов для Bash и Zsh
* [resh](https://github.com/curusarn/resh) История контекстной оболочки для Zsh и Bash
* [rg](https://github.com/BurntSushi/ripgrep) - ripgrep - это линейный инструмент поиска, который сочетает в себе удобство использования The Silver Searcher с сырой скоростью GNU grep.
* [screen](https://www.gnu.org/software/screen/) мультиплексор терминалов GNU
* [shell-history](https://github.com/pawamoy/shell-history) Визуализируйте использование оболочки с помощью Highcharts
* [SHML](https://github.com/odb/shml) Структура стиля терминала (язык разметки Shell)
* [slugify](https://github.com/benlinton/slugify) Команда, которая преобразует имена файлов и каталоги в веб-дружественный формат
* [sman](https://github.com/tokozedg/sman) - :bug: менеджер фрагментов командной строки
* [spark](https://github.com/holman/spark) - В твоей раковине
* [spark.fish](https://github.com/jorgebucaran/spark.fish) Sparkline Генератор
* [sheet](https://github.com/oscardelben/sheet) Текстовые фрагменты для командной строки
* [spot](https://github.com/rauchg/spot) Утилита поиска крошечных файлов
- [snips](https://github.com/srijanshetty/snips) - Инструмент командной строки для управления фрагментами кода.
* [sqlline](https://github.com/julianhyde/sqlline) Shell для выпуска SQL в реляционные базы данных через JDBC (мультилин, завершение, выделение, поддержка диалектов)
* [sshfs](https://github.com/osxfuse/sshfs) Инструмент для установки удаленных файловых систем над SSH
* [sudocabulary](https://github.com/badarsh2/Sudocabulary) Изучите английский словарь в вашем терминале
* [surfraw](https://gitlab.com/surfraw/Surfraw) - просматривать конкретный сайт и искать в Интернете с вашего терминала без браузера.
* [task-manager](https://github.com/lingtalfi/task-manager) Выполните все ваши сценарии всего двумя или тремя нажатиями клавиш.
* [td-cli](https://github.com/darrikonn/td-cli) Менеджер командной строки Todo для организации и управления вашими делами в нескольких проектах.
* [tere](https://github.com/mgunyho/tere) Быстрая альтернатива cd + ls
* [thefuck](https://github.com/nvbn/thefuck) Исправьте распространенные ошибки оболочки, используя простую для запоминания команду
* [tldr](https://github.com/raylee/tldr-sh-client) Полностью функциональный клиент bash для Tldr, упрощенных и управляемых сообществом страниц
* [tmux](https://tmux.github.io/) Удивительный мультиплексор терминала
* [undollar](https://github.com/xtyrrell/undollar) Недоллар кусает знак доллара с наконечника команды, которую вы только что вставили в терминал.
* [usql](https://github.com/xo/usql) Универсальный интерфейс командной строки для баз данных SQL.
* [v](https://github.com/rupa/v) - z для vim.
* [wemux](https://github.com/zolrath/wemux) Многопользовательский Tmux Made Easy
* [xiki](https://github.com/trogdoro/xiki) - Делает консоль оболочки более дружелюбной и мощной
* [xplr](https://github.com/sayanarijit/xplr) - взломанный, минимальный, быстрый TUI файл
* [xsv](https://github.com/BurntSushi/xsv) - быстрый инструментарий командной строки CSV, написанный на Rust
* [xxh](https://github.com/xxh/xxh) Принесите свою любимую раковину, куда бы вы ни пошли.

### Навигация по каталогам

* [aliasme](https://github.com/Jintin/aliasme) - псевдоним помощник быстро изменить каталог
* [autojump](https://github.com/wting/autojump) - Команда cd, которая учится - легко перемещаться по каталогам из командной строки
* [bashmarks](https://github.com/huyng/bashmarks) - Закладки каталога для оболочки
* [bd](https://github.com/vigneshwaranr/bd) Быстро вернуться в родительский каталог
* [commacd](https://github.com/shyiko/commacd) Быстрый способ передвижения в Баше
* [enhancd](https://github.com/b4b4r07/enhancd) - :rocket: команда cd следующего поколения с интерактивным фильтром
* [goto](https://github.com/iridakos/goto) - Утилита оболочки для навигации в псевдонимные каталоги, поддерживающие автозаполнение
* [jump](https://github.com/gsamokovarov/jump) Jump помогает вам быстрее ориентироваться в файловой системе, изучая ваши привычки.
* [lazy-cd](https://github.com/pedramamini/lazy-cd) Простые команды bash для закладки навигации файловой системы, в комплекте с bash-завершением.
* [up](https://github.com/shannonmoeller/up) - Каталоги Вознесения по имени или счету; для bash, zsh и fish.
* [z](https://github.com/rupa/z) - z - это новый j, yo
* [z.lua](https://github.com/skywind3000/z.lua) Новая команда cd, которая поможет вам быстрее ориентироваться, изучая ваши привычки
* [zoxide](https://github.com/ajeetdsouza/zoxide) Более быстрый способ навигации по файловой системе, написанный на Rust
* [zpyi](https://github.com/sakshamsharma/zpyi) Python в Zsh - Easy Python скриптинг в оболочке

## Настройка

*Пользовательские подсказки, цветовые темы и т.д.*

* [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme) Минималистическая тема Афродиты (быстро) для сексуальных терминалов, которые работают в bash, fish и zsh
* [base16-builder](https://github.com/base16-builder/base16-builder) - Base16-Builder
* [bash-full-of-colors](https://github.com/slomkowski/bash-full-of-colors) Мощная подсказка с экраном, tmux, поддержкой git и многими другими
* [bash-git-prompt](https://github.com/magicmonty/bash-git-prompt) - Информативный и причудливый запрос Bash для пользователей Git
* [bash-powerline](https://github.com/riobard/bash-powerline) Powerline-стиль Bash в чистом сценарии Bash
* [bashstrap](https://github.com/barryclark/bashstrap) Быстрый способ увеличить терминал OSX
* [bullet-train-oh-my-zsh-theme](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain side: Тема оболочки oh-my-zsh на основе плагина Powerline Vim
* [emojify](https://github.com/mrowa44/emojify) Emoji в командной строке :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) Никерные цвета для терминала
* [geometry](https://github.com/geometry-zsh/geometry) Минимальная тема ZSH, где любая функция может быть добавлена к левой подсказке или (асинк) правой подсказке на лету.
* [git-prompt](https://github.com/lvv/git-prompt) Bash prompt с модулями Git, SVN и HG
* [gittify](https://github.com/momeni/gittify) - Красочная подсказка Bash + индивидуальные псевдонимы Git
* [Gogh - Color Scheme](https://github.com/Mayccoll/Gogh) Цветовая схема для терминала Gnome
* [liquidprompt](https://github.com/nojhan/liquidprompt) - Полноценный &Тщательно разработанная адаптивная подсказка для Bash &Зуб
* [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Колоризация для Mysql comand-line клиента
* [oh-my-git](https://github.com/arialdomartini/oh-my-git) - Убежденный гит подсказка для bash и zsh
* [oh-my-posh](https://ohmyposh.dev) Быстрый движок темы для любой оболочки и платформы, написанной на ходу.
* [polyglot](https://github.com/agkozak/polyglot) - Информативная подсказка Git, которая работает в bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busybox sh и osh
* [powerlevel10k](https://github.com/romkatv/powerlevel10k) Супер гибкая тема Powerline ZSH
* [sexy-bash-prompt](https://github.com/twolfson/sexy-bash-prompt) - Bash prompt с цветами, статусами Git и ветвями Git
* [starship](https://starship.rs/) - Быстрый, настраиваемый, кросс-оболочка, написанная ржавчиной
* [synth-shell](https://github.com/andresgongora/synth-shell) - Greeter с настраиваемым отчетом о состоянии и модной подсказкой bash

## Для разработчиков

*Разработка командной строки, контроль версий и развертывание.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) Аутентификация рабочих процессов Git и SSH с биометрической разблокировкой с использованием 1Password
* [ack](https://beyondgrep.com/) - Инструмент поиска, подобный grep, оптимизированный для исходного кода.
* [add-gitignore](https://github.com/TejasQ/add-gitignore) Интерактивный CLI, который генерирует .gitignore для вашего проекта на основе ваших потребностей.
* [bcal](https://github.com/jarun/bcal) Байт-калькулятор для конверсий и вычислений хранения
* [bitwise](https://github.com/mellowcandle/bitwise) - Интерактивный бит-манипулятор на основе терминала в проклятиях.
* [bocker](https://github.com/p8952/bocker) Docker реализован в 100 линиях bash
* [cloc](https://github.com/AlDanial/cloc) Графические строки кода
* [doclt](https://github.com/omgimanerd/doclt) Интерфейс командной строки для Digital Ocean
* [dokku](https://github.com/dokku/dokku) - Докер питал мини-Героку. Самая маленькая реализация PaaS, которую вы когда-либо видели.
* [forgit](https://github.com/wfxr/forgit) Полезный инструмент для `git` Использование Fuzzy Finder Fzf.
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Много дополнительных утилит. Чурн, ветвь, улучшенное слияние и многое другое.
* [git-extras](https://github.com/tj/git-extras) - Git утилиты - repo резюме, repl, changelog населения, автор фиксировать проценты и многое другое
* [git-open](https://github.com/paulirish/git-open) Тип `git open` открыть страницу или веб-сайт GitHub для репозитория в вашем браузере
* [git-quick-stats](https://github.com/arzzen/git-quick-stats) Быстрая статистика Git - это простой и эффективный способ доступа к различным статистическим данным в хранилище Git.
* [git-semver](https://github.com/markchalloner/git-semver) - Git плагин для облегчения семантической версии и проверки changelog
* [git-sh](https://github.com/rtomayko/git-sh) - Индивидуальная среда Bash, подходящая для работы Git
* [gita](https://github.com/nosarthur/gita) Инструмент командной строки для управления несколькими git-репозиториями.
* [hub](https://github.com/github/hub) - Хаб поможет тебе выиграть в глотке.
* [just](https://github.com/casey/just) - Задание бегуна для сохранения и выполнения команд проекта.
* [licins](https://github.com/dogoncouch/licins) - Insert прокомментировал лицензии на программное обеспечение в исходный код.
* [mkdkr](https://github.com/rosineygp/mkdkr) Makefile + Docker = Трубопровод CI
* [mr](https://myrepos.branchable.com) - Инструмент управления несколькими хранилищами
* [nve](https://github.com/ehmicky/nve) Запустите любую команду на определенных версиях Node.js.
* [overcommit](https://github.com/sds/overcommit) Полностью настраиваемый и расширяемый менеджер Git hook
* [pre-commit](https://pre-commit.com) - фреймворк для управления и поддержания многоязычных предварительных обязательств
* [rebound](https://github.com/shobrook/rebound) Мгновенный просмотр результатов переполнения стека в вашем терминале, когда вы получаете ошибку компилятора
* [repren](https://github.com/jlevy/repren) - Поиск и замена командной строки и переименование файла швейцарским армейским ножом
* [slap](https://github.com/slap-editor/slap) - Sublime-подобный текстовый редактор на основе терминала, который работает на Node.js
* [shipit](https://github.com/sapegin/shipit) Минимальное развертывание SSH
* [starring](https://github.com/ritz078/starring) Автоматически записывайте npm-пакеты, которые вы используете на GitHub.
* [tag](https://github.com/aykamko/tag) - Мгновенный прыжок к твоим спичкам.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) Блестяще быстрая мета-проверка кода и форматировщик
* [vmn](https://github.com/final-israel/vmn) - решение для автоматической версии и восстановления состояния на основе git, агностичное языку или архитектуре
* [wipe-modules](https://github.com/bntzio/wipe-modules) Небольшой агент, который удаляет папку node modules неактивных проектов

## Системные утилиты

*Инструменты, связанные с ОС, включая системное администрирование, отладку системы и управление файлами и процессами. *

* [atop](https://www.atoptool.nl) полноэкранный монитор производительности ASCII, способный сообщать о деятельности всех процессов;
* [bat](https://github.com/sharkdp/bat) - А `cat` клон с крыльями
* [bmon](https://github.com/tgraf/bmon) - Монитор пропускной способности сети в реальном времени и оценщик скорости с удобным для человека визуальным выходом
* [btop](https://github.com/aristocratos/btop) Монитор ресурсов Linux/OSX/FreeBSD
* [catcli](https://github.com/deadc0de6/catcli) - Инструмент каталога командной строки для ваших автономных данных
* [ccat](https://github.com/owenthereal/ccat) - Кошка - это окрашивающая кошка. Он работает как кошка, но отображает контент с подсветкой синтаксиса.
* [exa](https://github.com/ogham/exa) - современная версия `ls`.
* [progress](https://github.com/Xfennec/progress) Инструмент Linux для демонстрации прогресса `cp`, `rm`, `dd`И еще больше...
* [stronghold](https://github.com/alichtman/stronghold) Легко настроить настройки безопасности MacOS с терминала.
* [glances](https://github.com/nicolargo/glances) Взгляд на вашу систему
* [goaccess](https://github.com/allinurl/goaccess) GoAccess - это анализатор веб-журналов в реальном времени и интерактивный просмотрщик, который работает в терминале в системах \*nix.
* [hblock](https://github.com/hectorm/hblock) - Adblocker на основе хостов
* [histstat](https://github.com/vesche/histstat) История компании Netstat
* [htop](https://github.com/hishamhm/htop) - Интерактивный просмотрщик процессов на основе ncurses, который стремится быть лучше `top`
* [lnav](https://lnav.org) - Расширенный просмотрщик лог-файлов для малого масштаба
* [logdissect](https://github.com/dogoncouch/logdissect) Утилита CLI и API Python для анализа файлов журналов и других данных.
* [ls++](https://github.com/trapd00r/ls--) - Цветные ls на стероидах
* [lsd](https://github.com/Peltoche/lsd) - LSDeluxe, переписывайте GNU ls с множеством дополнительных функций, таких как цвета, значки, вид на дерево и другие варианты форматирования.
* [lsp](https://github.com/dborzov/lsp) - Улучшенный `ls`с описаниями файлов на простом языке и интеллектуальной группировкой файлов
* [maza](https://github.com/tanrax/maza-ad-blocking) - Локальный блокировщик рекламы. Как Pi-hole, но локальный и использующий вашу операционную систему.
* [mtr](https://github.com/traviscross/mtr) Функциональность программ «трассе» и «пинг» в одном сетевом диагностическом инструменте.
* [ncdu](https://dev.yorhel.nl/ncdu) - Использование диска NCurses
* [nmtui](https://github.com/NetworkManager/NetworkManager) Текстовый пользовательский интерфейс для управления NetworkManager
* [powertop](https://github.com/fenrus75/powertop) - Использование батареи/мощности и отслеживание статистики устройств с помощью инструмента командной строки с опциями настройки.
* [prettyping](https://github.com/denilsonsa/prettyping) - Сделать вывод из `ping` Красивее, красочнее, компактнее и легче читается.
* [procdog](https://github.com/jlevy/procdog) Легкий контроль командной строки долгоживущих процессов, таких как серверы
* [quick-secure](https://github.com/marshyski/quick-secure) Быстрая защита и укрепление систем UNIX/Linux
* [rng](https://github.com/nickolasburr/rng) - Копирование диапазона строк от файла или stdin до stdout.
* [tiptop](https://github.com/nschloe/tiptop) - Графический монитор командной строки.
* [wifi-wand](https://github.com/keithrbennett/wifiwand) - приложение командной строки Ruby для управления Wi-Fi на MacOS (установка `gem install wifi-wand`)
* [xiringuito](https://github.com/ivanilves/xiringuito) - SSH-based "VPN для бедных"

## Загрузка и раздача

*Самостоятельные, легкие серверы и сетевые инструменты, написанные в скриптах оболочки.

* [aria2](https://github.com/aria2/aria2) - aria2 - легкий мультипротокол &Multi-source, кросс-платформенная утилита загрузки работает в командной строке. Поддерживает HTTP/HTTPS, FTP, BitTorrent и Metalink.
* [balls](https://github.com/jneen/balls) - Баш на шарах
* [bashttpd](https://github.com/avleen/bashttpd) Веб-сервер, написанный на Bash
* [bashhub-server](https://github.com/nicksherron/bashhub-server) - История частных облачных оболочек. Открытый сервер для bashhub
* [bitpocket](https://github.com/sickill/bitpocket) - "DIY Dropbox" или "2-way Directory (r)sync с надлежащим удалением"
* [Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader) Dropbox Uploader - это скрипт Bash, который можно использовать для загрузки, загрузки, списка или удаления файлов из Dropbox.
* [httpie](https://github.com/httpie/httpie) HTTPie - это клиент HTTP командной строки, удобная замена CURL
* [HTTPLab](https://github.com/gchaincl/httplab) Интерактивный веб-сервер позволяет проверять HTTP-запросы и подделывать ответы.
* [Kapow!](https://github.com/BBVA/kapow) Если вы можете написать его, вы можете HTTP.
* [ngincat](https://github.com/jaburns/ngincat) Tiny Bash HTTP-сервер с использованием netcat
* [resty](https://github.com/micha/resty) Маленький клиент REST командной строки, который вы можете использовать в трубопроводах
* [shell2http](https://github.com/msoap/shell2http) HTTP-сервер для выполнения команд оболочки. Предназначен для разработки, прототипирования или дистанционного управления
* [tshare](https://github.com/trikko/tshare) - Обмен файлами из командной строки.
* [vesper](https://github.com/chris-rock/vesper) aVesper - это HTTP-фреймворк для Bash / Unix Shell
* [xh](https://github.com/ducaale/xh) Дружелюбный и быстрый инструмент для отправки HTTP-запросов
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Программа командной строки для загрузки видео с YouTube.com и других видеосайтов

## Мультимедиа и форматы файлов

*Инструменты для обработки видео и аудио файлов.*

* [adb-export](https://github.com/sromku/adb-export) Экспорт поставщиков контента для Android в формат CSV
* [Android-Kitchen](https://github.com/dsixda/Android-Kitchen) - текстовая кухня для настройки Android ROM. Использует скрипты оболочки и работает с Cygwin/OS X/Linux
* [Beets](https://github.com/beetbox/beets) Менеджер музыкальной библиотеки MusicBrainz Tagger
* [cmus](https://github.com/cmus/cmus) - Кроссплатформенный кли-аудиоплеер.
* [dasel](https://github.com/tomwright/dasel) Запрос и обновление структур данных с помощью селекторов из командной строки. сопоставимый с [q](https://github.com/stedolan/jq) / [yq](https://github.com/kislyuk/yq) Поддерживает JSON, YAML, TOML и XML с нулевой зависимостью от времени выполнения.
* [dzr](https://github.com/yne/dzr) Кроссплатформенный аудиоплеер Deezer.com.
* [fx](https://github.com/antonmedv/fx) - Инструмент обработки JSON командной строки с помощью функций JavaScript anononymus
* [gifgen](https://github.com/lukechilds/gifgen) - Простое высококачественное кодирование GIF
* [image-scraper](https://github.com/sananth12/ImageScraper) - Классный скребок изображений командной строки с множеством функций.
* [imgp](https://github.com/jarun/imgp) - Быстрый пакетный резизер изображений и ротатор
* [jc](https://github.com/kellyjonbrazil/jc) Преобразование командного вывода, типов файлов и общих строк в JSON или YAML для более простого использования в скриптах.
* [jo](https://github.com/jpmens/jo) Небольшая утилита для создания объектов JSON из аргументов командной строки.
* [jq](https://github.com/stedolan/jq) - Сед для данных Джонсона. Вы можете использовать его для срезания и фильтрации, отображения и преобразования структурированных данных.
* [korkut](https://github.com/oguzhaninan/korkut) Быстрая и простая обработка изображений в командной строке.
* [library](https://github.com/chapmanjacobd/library) Создание баз данных SQLITE для папок музыки, видео, изображений или онлайн-медиа. Играйте и отслеживайте мультимедиа, такие как Plex, но только CLI-интерфейс со многими вариантами сортировки.
* [mpv](https://mpv.io/) Позволяет воспроизводить большинство аудио и видео форматов (с использованием символов ASCII) в оболочке, а также в графическом интерфейсе.
* [nehm](https://github.com/bogem/nehm) Консольный инструмент, который загружает, устанавливает теги IDv3 и добавляет в ваш iTunes (если вы используете его) ваш SoundCloud нравится удобным способом.
* [PiCAST](https://github.com/lanceseidman/PiCAST) PiCAST превращает $35 Raspberry Pi в Chromecast
* [sejda](https://github.com/torakiki/sejda/) манипулирование командной строкой PDF-документов (расщепление, слияние, вращение, преобразование в jpg, извлечение текста и т.д.)
* [visidata](https://github.com/saulpw/visidata) - мультитул терминальной электронной таблицы для изучения и организации данных (csv/json/xml/xls/yaml/etc)
* [xidel](https://github.com/benibela/xidel/) Инструмент Cli для фильтрации, отображения и создания данных HTML/XML/JSON с помощью (Turing-complete) XPath и XQuery.
* [xmlstarlet](http://xmlstar.sourceforge.net/) Старый, но мощный инструмент для форматирования, фильтрации и манипулирования XML командной строкой.
* [yq](https://github.com/mikefarah/yq) - yq - портативный командный процессор YAML

## Приложения

*Приложения на основе командной строки или доступ к существующим службам.*

* [ansiweather](https://github.com/fcambus/ansiweather) Погода в вашем терминале с цветами ANSI и символами Unicode
* [awless](https://github.com/wallix/awless) Мощный, инновационный и небольшой поверхностный CLI для управления AWS.
* [bashblog](https://github.com/cfenollosa/bashblog) Сценарий Bash, который обрабатывает публикацию в блоге
* [carbon-now-cli](https://github.com/mixn/carbon-now-cli) Красивые изображения вашего кода — прямо внутри вашего терминала.
* [choosealicense-cli](https://github.com/lord63/choosealicense-cli) Выберите лицензию OSS из комфорта вашего терминала
* [cointop](https://github.com/miguelmota/cointop) Самое быстрое и интерактивное приложение пользовательского интерфейса на основе терминала для отслеживания криптовалют
* [dstask](https://github.com/naggie/dstask) - Единый двоичный терминальный TODO-менеджер с синхронизацией на основе git + разметкой за задачу
* [editly](https://github.com/mifi/editly) Редактор видео командной строки
* [facebook-cli](https://github.com/specious/facebook-cli) Инструмент командной строки Facebook
* [fanyi](https://github.com/afc163/fanyi) Перевод с английского на китайский в терминале
* [gcalcli](https://github.com/insanum/gcalcli) Интерфейс командной строки Google Calendar
* [geeknote](https://github.com/VitaliyRodnenko/geeknote) Командная строка Evernote Client
* [haxor-news](https://github.com/donnemartin/haxor-news) Скачать Hacker News Like a Haxor
* [hn-cli](https://github.com/rafaelrinaldi/hn-cli) Просмотр Hacker News с комфортом вашего терминала
* [iponmap](https://github.com/nogizhopaboroda/iponmap) Нарисуйте точку на карте мира, используя IP-адрес
* [isitup](https://github.com/lord63/isitup) Проверьте, есть ли сайт вверх или вниз
* [jrnl](https://github.com/jrnl-org/jrnl) Простое приложение журнала командной строки, которое хранит ваш журнал в простом текстовом файле
* [kanban.bash](https://github.com/coderofsalvation/kanban.bash) - доска командной строки asciii kanban для минималистской производительности bash хакеров (csv-based)
* [ledger](https://github.com/ledger/ledger) Учет командной строки
* [licen](https://github.com/lord63/licen) - Создай свою лицензию. Еще один вшей, но реализовать с Jinja2 и докопт
* [md2png](https://github.com/weaming/md2png) Преобразовать разметку в изображение PNG
* [moviemon](https://github.com/iCHAIT/moviemon) - Все о ваших фильмах в командной строке.
* [nomino](https://github.com/yaa110/nomino) - Утилита переименования пакетов с использованием параметров regex, сортировки и отображения файлов.
* [pcalc](https://github.com/alt-romes/programmer-calculator) Калькулятор, созданный для программистов, работающих с многократными представлениями чисел, размерами и в целом близкими к битам.
* [pockyt](https://github.com/achembarpu/pockyt) Читайте, управляйте и автоматизируйте [карман](https://getpocket.com) Коллекция.
* [pushblast](https://github.com/alebcay/pushblast) Получить уведомления PushBullet, когда программа оболочки выходит
* [pushbullet-bash](https://github.com/Red5d/pushbullet-bash) Интерфейс Bash для PushBullet API
* [ranger](https://github.com/ranger/ranger) Консольный файловый менеджер с VI-ключевыми привязками.
* [Reddit Terminal Viewer](https://github.com/michael-lazar/rtv) Просмотр Reddit с вашего терминала
* [SAWS](https://github.com/donnemartin/saws) Заряженный AWS CLI
* [taskbook](https://github.com/klaussinani/taskbook) - Задания, доски &Заметки для среды обитания командной строки
* [taskwarrior](https://taskwarrior.org/) Менеджер списка TODO командной строки
* [terjira](https://github.com/keepcosmos/terjira) Силовой инструмент командной строки для Jira
* [ticker](https://github.com/achannarasappa/ticker) - Терминальный тиккер с живыми обновлениями и отслеживанием позиций
* [vl](https://github.com/ellisonleao/vl) - Проверка ссылок URL на текстовые документы
* [wego](https://github.com/schachmat/wego) Погодное приложение для терминала
* [whales](https://github.com/Gueils/whales) Инструмент для автоматической докеризации ваших приложений
* [whereami](https://github.com/rafaelrinaldi/whereami) Получите информацию о геолокации из CLI
* [wttr.in](https://github.com/chubin/wttr.in) - :partly sunny: Правильный способ проверить погоду

## Игры

*Вся работа и никакой игры — это грязный способ провести свой день.

* [bash2048](https://github.com/mydzor/bash2048) Реализация Bash игры 2048
* [minesweeper](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Реализация тральщика
* [nudoku](https://github.com/jubalh/nudoku) Ncurses Based Sudoku Игра написана на C
* [piu-piu](https://github.com/vaniacer/piu-piu-SH) - Горизонтальная прокрутка в bash с многопользовательским режимом!
* [sedtris](https://github.com/uuner/sedtris) - Тетрис в сед
* [sed-scripts](https://github.com/aureliojargas/sed-scripts) Арканоид и Сокобан написаны с использованием сед
* [SHTAP](https://notimetoplay.org/engines/shtap/) Многоразовый текстовый приключенческий движок для Bash 4
* [tty-solitaire](https://github.com/mpereira/tty-solitaire) - Играй в пасьянс в своем терминале!

## Управление пакетами Shell

*Инструменты для управления несколькими конфигурациями оболочки. Для zsh-специфических инструментов см. раздел Zsh.

* [bash-it](https://github.com/Bash-it/bash-it) - фреймворк сообщества Bash
* [basher](https://github.com/basherpm/basher) - Менеджер пакетов для сценариев оболочки
* [bashing](https://github.com/xsc/bashing) Скачать игру Bash into Pieces
* [bpkg](https://www.bpkg.sh/) JavaScript имеет npm, Ruby имеет Gems, Python имеет pip и теперь Shell имеет bpkg
* [dotdrop](https://github.com/deadc0de6/dotdrop) Сохраните свои дотфилы один раз, разверните их везде
* [dotfiler](https://github.com/svetlyak40wt/dotfiler) Shell agnostic git based dotfiles package manager, написанный на Python.
* [fresh](https://github.com/freshshell/fresh) - Держите свои дотфилы свежими
* [homeshick](https://github.com/andsens/homeshick) Git dotfile синхронизатор, написанный в Bash
* [shallow-backup](https://github.com/alichtman/shallow-backup) - Легко создавать легкую документацию установленных пакетов, дотфилов и многое другое
* [shundle](https://github.com/javier-lopez/shundle) - Менеджер плагинов для сценариев shell
* [vcsh](https://github.com/RichiH/vcsh) Config Manager, основанный на Git
* [yadm](https://yadm.io/) - Git-based dotfiles Manager, поддерживающий шифрование, чередование и загрузку

## Разработка Shell-скриптов

*Инструменты для написания, улучшения или организации Bash или других скриптов оболочки*

* [ansi](https://github.com/fidian/ansi) - ANSI escape codes in pure bash - изменение цвета текста, позиционирование курсора, многое другое
* [assert.sh](https://github.com/lehmannro/assert.sh) - Рамки тестирования блока Bash
* [bashew](https://github.com/pforret/bashew) Создатель сценариев bash - от небольших автономных сценариев до сложных проектов с CI/CD и тестированием
* [bashful](https://github.com/jmcantrell/bashful) Коллекция библиотек для упрощения написания сценариев Bash
* [Bashlets](https://github.com/reale/bashlets) Модульный расширяемый набор инструментов для Bash
* [bashly](https://bashly.dannyb.co/) - Рамки командной строки Bash и генератор CLI
* [bashmanager](https://github.com/lingtalfi/bashmanager) - mini bash фреймворк для создания инструментов командной строки
* [bashwithnails](https://github.com/mindaugasbarysas/bashwithnails) - фреймворк Bash, написанный просто для удовольствия с тестированием, управлением зависимостью &упаковка
* [bash-language-server](https://github.com/bash-lsp/bash-language-server) - [LSP](https://microsoft.github.io/language-server-protocol/)Базовый сервер языка Bash
* [bash-modules](https://github.com/vlisivka/bash-modules) - функции для развития с [неофициальный строгий режим](http://redsymbol.net/articles/unofficial-bash-strict-mode/) включено.
* [bats](https://github.com/bats-core/bats-core) Автоматизированная система тестирования Bash
* [composure](https://github.com/erichs/composure) Составление, документирование, версия и организация функций оболочки
* [crash](https://github.com/molovo/crash) Правильная обработка ошибок, исключения и попытка / ловля для ZSH
* [critic.sh](https://github.com/Checksum/critic.sh) Dead Simple Test Framework для Bash с отчетностью о покрытии
* [dispatch](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) Парсер аргументов командной строки в 50 строках портативного сценария оболочки.
* [esh](https://github.com/jirutka/esh) - Простой шаблонный двигатель на основе оболочки, реализованный в ~ 290 строках оболочки POSIX и awk.
* [Fishtape](https://github.com/jorgebucaran/fishtape) Производитель TAP и тестовая упряжка для рыбы
* [getoptions](https://github.com/ko1nksm/getoptions) - Элегантный парсер опций для сценариев оболочки (sh, bash и всех оболочек POSIX)
* [getopts.fish](https://github.com/jorgebucaran/getopts.fish) CLI парсер для рыбы
* [is.sh](https://github.com/qzb/is.sh) Альтернатива встроенной тестовой команде сделает ваши утверждения «если» красивыми
* [lumberjack](https://github.com/molovo/lumberjack) - Интерфейс для регистрации сценариев оболочки
* [mo](https://github.com/tests-always-included/mo) - Шаблоны для усов в чистом бэше
* [optparse](https://github.com/nk412/optparse) - Обертка BASH для геоптов, для простых аргументов командной строки.
* [rerun](https://github.com/rerun/rerun) - Модульная система автоматизации оболочки для организации скриптов Keeper
* [revolver](https://github.com/molovo/revolver) - Спиннер многоразового прогресса для сценариев оболочки
* [phases](https://github.com/sorokine/phases) Минимально инвазивный препроцессор bash, выберите разделы вашего сценария для запуска
* [powscript](https://github.com/coderofsalvation/powscript) - транспилятор bash, написанный на bash (кофескрипт для bash)
* [semver_bash](https://github.com/cloudflare/semver_bash) Семантическая версия в Bash
* [sh-semver](https://github.com/qzb/sh-semver) - Инструмент Semver для bash - находит версии, соответствующие указанным правилам
* [shellcheck](https://github.com/koalaman/shellcheck) - Инструмент статического анализа для сценариев оболочки
* [shellfire](https://github.com/shellfire-dev/shellfire) - Репозиторий именных пространств, композитных библиотек функций оболочки (bash, sh и dash)
* [shellspec](https://github.com/shellspec/shellspec) - Полнофункциональная система тестирования BDD для dash, bash, ksh, zsh и всех оболочек POSIX
* [shfmt](https://github.com/mvdan/sh) - парсер оболочки, формататор и интерпретатор с поддержкой bash; включает в себя shfmt
* [shpec](https://github.com/rylnd/shpec) - Основы тестирования снарядов
* [shutit](https://ianmiell.github.io/shutit/) - фреймворк автоматизации на основе bash и pexpect
* [sub](https://github.com/basecamp/sub) Вкусный способ организации программ
* [ts](https://github.com/thinkerbot/ts) - Сценарий теста на раковину
* [urchin](https://github.com/tlevine/urchin) - Идиоматическая структура тестирования оболочки, которая использует только команды оболочки
* [shunit2](https://github.com/kward/shunit2) - Единичный тестовый фреймворк для сценариев Bash с ароматом JUnit/PyUnit.
* [rebash](https://github.com/jandob/rebash) - Сценарий библиотеки/фреймворка. Особенности: импорт, исключения, док-тесты...
* [zunit](https://github.com/zunit-zsh/zunit) Мощный модуль тестирования для ZSH

# Руководства

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  конкретно [Руководство по Башу](https://mywiki.wooledge.org/BashGuide), [Баш FAQ](https://mywiki.wooledge.org/BashFAQ) и [Баш ловушки](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# Другие списки Awesome

Другие удивительные списки можно найти в [потрясающе](https://github.com/emijrp/awesome-awesome) и [потрясающее изумление](https://github.com/bayandin/awesome-awesomeness).

### См. также

* [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps)
* [awesome-fish][awesome-fish]
* [awesome-zsh][awesome-zsh]
* [awesome-bash][awesome-bash]
* [terminals-are-sexy](https://github.com/k4m4/terminals-are-sexy)

[awesome-badge]: https://raw.githubusercontent.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[awesome-fish]: https://github.com/jorgebucaran/awsm.fish
[awesome-link]: https://github.com/sindresorhus/awesome
[awesome-zsh]: https://github.com/unixorn/awesome-zsh-plugins
[awesome-bash]: https://github.com/awesome-lists/awesome-bash
