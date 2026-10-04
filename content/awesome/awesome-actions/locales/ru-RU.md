<p align="center">
  <br>
    <img src="awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> Подборка полезных ресурсов, связанных с GitHub Actions.

Actions запускаются событиями платформы GitHub непосредственно в репозитории и выполняют рабочие процессы по запросу — на виртуальных машинах с Linux, Windows или macOS либо в контейнере. С помощью GitHub Actions можно автоматизировать весь рабочий процесс — от идеи до выпуска продукта.

## Содержание

- [Официальные ресурсы](#official-resources)
  - [Примеры рабочих процессов](#workflow-examples)
  - [Официальные Actions](#official-actions)
  - [Создание собственных Actions](#create-your-actions)
- [Ресурсы сообщества](#community-resources)
  - [Инструменты GitHub и управление](#github-tools-and-management)
  - [Подборки Actions](#collection-of-actions)
  - [Утилиты](#utility)
  - [Статический анализ](#static-analysis)
  - [Динамический анализ](#dynamic-analysis)
  - [Мониторинг](#monitoring)
  - [Pull request](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [Уведомления и сообщения](#notifications-and-messages)
  - [Развертывание](#deployment)
  - [Внешние сервисы](#external-services)
  - [Инструменты фронтенда](#frontend-tools)
  - [Операции машинного обучения](#machine-learning-ops)
  - [Сборка](#build)
  - [Базы данных](#database)
  - [Сети](#networking)
  - [Локализация](#localization)
  - [Для развлечения](#fun)
  - [Шпаргалка](#cheat-sheet)
- [Руководства](#tutorials)

## Официальные ресурсы

- [Официальный сайт](https://github.com/features/actions)
- [Официальная документация](https://help.github.com/en/actions)
- [Официальная организация Actions](https://github.com/actions)
  - [actions/virtual-environments](https://github.com/actions/virtual-environments) - Виртуальные окружения GitHub Actions.
  - [actions/runner](https://github.com/actions/runner) - Исполнитель GitHub Actions.
- [Объявление в блоге GitHub](https://github.blog/2018-10-17-action-demos/)

### Примеры рабочих процессов

- [actions/starter-workflows](https://github.com/actions/starter-workflows) - Управление шаблонами рабочих процессов.
- [actions/example-services](https://github.com/actions/example-services) - Примеры рабочих процессов с контейнерами служб.

### Официальные Actions

<!--lint disable no-dead-urls-->

#### Actions для инструментов рабочих процессов

Инструменты Actions для ваших рабочих процессов.

<!--lint ignore awesome-spell-check-->

- [actions/checkout](https://github.com/actions/checkout) - Настройка репозитория в рабочем процессе.
- [actions/upload-artifact](https://github.com/actions/upload-artifact) - Загрузка артефактов из рабочего процесса.
- [actions/download-artifact](https://github.com/actions/download-artifact) - Загрузка артефактов из сборки.
- [actions/cache](https://github.com/actions/cache) - Кеширование зависимостей и результатов сборки в GitHub Actions.
- [actions/github-script](https://github.com/actions/github-script) - Написание скрипта для GitHub API и контекстов рабочего процесса.

#### Actions для автоматизации GitHub

Автоматизируйте управление задачами, pull request и выпусками.

- [actions/create-release](https://github.com/actions/create-release) - Action для создания выпусков через GitHub Release API.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - Action для загрузки файла выпуска через GitHub Release API.
- [actions/first-interaction](https://github.com/actions/first-interaction) - Action для фильтрации pull request и issue от новых участников.
- [actions/stale](https://github.com/actions/stale) - Помечает issue и pull request, с которыми недавно не взаимодействовали.
- [actions/labeler](https://github.com/actions/labeler) - Action для автоматической расстановки меток в pull request.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Удаление версий пакета из GitHub Packages.

#### Actions для настройки окружения

Настройте рабочий процесс GitHub Actions для работы с конкретной версией языка программирования.

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET Core SDK](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC и Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [actions/setup-julia: Julia](https://github.com/julia-actions/setup-julia)

### Создание собственных Actions

#### Actions на JavaScript и TypeScript

- [actions/toolkit](https://github.com/actions/toolkit) - GitHub Toolkit для разработки GitHub Actions.
- [actions/hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action) - Шаблон для демонстрации сборки JavaScript Action.
- [actions/javascript-action](https://github.com/actions/javascript-action) - Создание Action на JavaScript.
- [actions/typescript-action](https://github.com/actions/typescript-action) - Создание Action на TypeScript.
- [actions/http-client](https://github.com/actions/http-client) - Лёгкий HTTP-клиент, оптимизированный для Actions; TypeScript с обобщениями и async/await.

#### Actions в контейнерах Docker

- [actions/hello-world-docker-action](https://github.com/actions/hello-world-docker-action) - Шаблон для демонстрации сборки Docker Action.
- [actions/container-toolkit-action](https://github.com/actions/container-toolkit-action) - Шаблонный репозиторий для создания контейнерных Actions с помощью actions/toolkit.

## Ресурсы сообщества

### Инструменты GitHub и управление

- [Декларативная настройка меток GitHub](https://github.com/lannonbr/issue-label-manager-action)
- [Action для синхронизации меток GitHub декларативным способом](https://github.com/micnncim/action-label-syncer)
- [Добавление выпусков в GitHub](https://github.com/elgohr/Github-Release-Action)
- [Публикация образа Docker в Dockerhub](https://github.com/elgohr/Publish-Docker-Github-Action)
- [Создание issue из содержимого файла](https://github.com/peter-evans/create-issue-from-file)
- [Публикация выпусков GitHub с файлами](https://github.com/softprops/action-gh-release)
- [Автоматизация проектов GitHub+](https://github.com/alex-page/github-project-automation-plus) - Автоматизируйте карточки GitHub Project с помощью событий любых веб-перехватчиков.
- [Запуск GitHub Actions локально через веб-интерфейс](https://github.com/phishy/wflow)
- [Запуск GitHub Actions локально в терминале](https://github.com/nektos/act)
- [Сборка и публикация отладочного APK для Android](https://github.com/ShaunLWM/action-release-debugapk)
- [Создание последовательных номеров сборок для GitHub Actions](https://github.com/einaregilsson/build-number)
- [Отправка изменений Git в репозиторий GitHub без проблем с аутентификацией](https://github.com/ad-m/github-push-action)
- [Создание заметок к выпуску на основе событий](https://github.com/Decathlon/release-notes-generator-action)
- [Создание страницы GitHub Wiki из указанного файла Markdown](https://github.com/Decathlon/wiki-page-creator-action)
- [Автоматическая расстановка меток в pull request (на основе закоммиченных файлов)](https://github.com/Decathlon/pull-request-labeler-action)
- [Добавление метки в pull request по названию команды автора](https://github.com/JulienKode/team-labeler-action)
- [Получение списка изменённых файлов для PR или push](https://github.com/trilom/file-changes-action)
- [Использование приватных Actions в любом рабочем процессе](https://github.com/InVisionApp/private-action-loader)
- [Расстановка меток для issue по его содержимому](https://github.com/damccorm/tag-ur-it)
- [Откат выпуска GitHub](https://github.com/author/action-rollback)
- [Блокировка закрытых issue и pull request после периода бездействия](https://github.com/dessant/lock-threads)
- [Получение числа коммитов, отличающихся между двумя ветками](https://github.com/jessicalostinspace/commit-difference-action)
- [Создание заметок к выпуску на основе ссылок Git](https://github.com/metcalfc/changelog-generator)
- [Применение политик к репозиториям и коммитам GitHub](https://github.com/talos-systems/conform)
- [Автоматическая расстановка меток для issue по его описанию](https://github.com/Renato66/auto-label)
- [Обновление настроенных GitHub Actions до последних версий](https://github.com/fabasoad/ghacu)
- [Создание ветки для issue](https://github.com/robvanderleek/create-issue-branch)
- [Удаление старых артефактов](https://github.com/c-hive/gha-remove-artifacts)
- [Экспорт данных коммита Git в переменные окружения](https://github.com/rlespinasse/git-commit-data-action)
- [Синхронизация выбранных файлов и бинарных файлов с Wiki или внешними репозиториями](https://github.com/kai-tub/external-repo-sync-action)
- [Создание, обновление или удаление страницы GitHub Wiki на основе любого файла](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions](https://github.com/jpmcb/prow-github-actions) - Автоматизация применения политик, chat-ops и автоматического слияния PR.
- [Проверка статуса GitHub в рабочем процессе](https://github.com/crazy-max/ghaction-github-status)
- [Управление метками GitHub (создание, переименование, изменение и удаление) как кодом](https://github.com/crazy-max/ghaction-github-labeler)
- [Непрерывное распределение финансирования между участниками проекта и его зависимостями](https://github.com/protontypes/libreselery)
- [Правила Herald для GitHub: добавление подписчиков, исполнителей, меток и другого в PR](https://github.com/gagoar/use-herald-action)
- [Проверка GitHub Codeowners](https://github.com/mszostok/codeowners-validator) - Проверяет корректность файла GitHub CODEOWNERS. Поддерживает публичные и приватные репозитории GitHub, а также GitHub Enterprise.
- [Action для Copybara](https://github.com/olivr/copybara-action) - Перемещение и преобразование кода между репозиториями (удобно для поддержки нескольких репозиториев из одного монорепозитория).

### Подборки Actions

- [Использование Terraform от HashiCorp](https://github.com/hashicorp/setup-terraform)
- [GitHub Actions для Yarn 1](https://github.com/Borales/actions-yarn)
- [GitHub Actions для Yarn 2](https://github.com/sergioramos/yarn-actions)
- [GitHub Actions для Golang](https://github.com/cedrickring/golang-action)
- [GitHub Actions для R и сопутствующего пакета #rstats](http://maxheld.de/ghactions/)
- [GitHub Actions для WordPress](https://github.com/10up/actions-wordpress/)
- [GitHub Actions для Composer](https://github.com/MilesChou/composer-action)
- [GitHub Actions для Flutter](https://github.com/subosito/flutter-action)
- [GitHub Actions для PHP](https://github.com/shivammathur/setup-php)
- [GitHub Actions для Rust](https://github.com/actions-rs)
- [GitHub Actions для Android](https://github.com/Malinskiy/action-android)
- [GitHub Actions для Logtalk и Prolog](https://github.com/logtalk-actions)
- [GitHub Actions для Deno](https://github.com/denolib/setup-deno)
- [GitHub Actions для Unity](https://github.com/webbertakken/unity-actions)
- [Octions — GitHub Actions для REST API GitHub](https://github.com/maxkomarychev/octions)
- [GitHub Actions для Docker](https://github.com/docker/github-actions)
- [GitHub Actions для AWS](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### Утилиты

- [Настройка `ssh-agent`](https://github.com/webfactory/ssh-agent) - Запускает `ssh-agent` с дополнительными ключами SSH для доступа к приватным репозиториям.
- [Значки GitHub Actions для вашего README](https://github.com/atrox/github-actions-badge)
- [GitHub Actions для проекта Python с Poetry](https://github.com/abatilo/actions-poetry)
- [GitHub Actions для проекта Python с pyenv](https://github.com/gabrielfalcao/pyenv-action)
- [GitHub Actions для компиляции документов LaTeX](https://github.com/xu-cheng/latex-action)
- [Обновление баз данных MaxMind](https://github.com/meetup/maxmind-updater)
- [Отладка по SSH через tmate](https://github.com/mxschmitt/action-tmate) - Отладка Action напрямую через SSH-подключение.
- [Разблокировка файлов git-crypt](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Кросс-компилятор Golang CGO](https://github.com/crazy-max/ghaction-xgo)
- [Запуск задачи на другой архитектуре: arm32, aarch64 и других](https://github.com/uraimo/run-on-arch-action)
- [Создание оглавления](https://github.com/technote-space/toc-generator)
- [Автоматическое добавление метки или исполнителя к issue](https://github.com/Naturalclar/issue-action)
- [Action для отправки реакции LGTM в виде изображения или GIF при сообщении «lgtm»](https://github.com/micnncim/action-lgtm-reaction)
- [Создание номеров сборок в нескольких областях видимости](https://github.com/zyborg/gh-action-buildnum)
- [Публикация артефактов выпуска GitHub](https://github.com/skx/github-action-publish-binaries)
- [Jekyll Diff Action](https://github.com/David-Byrne/jekyll-diff-action) - Сравнивает собранный сайт Jekyll после изменений и публикует результат в GitHub.
- [Бот защиты веток](https://github.com/benjefferies/branch-protection-bot) - Временно отключает и повторно включает параметр «Include administrators» в защите веток.
- [Ожидание статусов коммита](https://github.com/WyriHaximus/github-action-wait-for-status) - Ожидает успешного завершения всех статусов и проверок либо сбоя одной из них и устанавливает соответствующий выходной статус.
- [Получение последнего тега](https://github.com/WyriHaximus/github-action-get-previous-tag) - Получает предыдущий тег из git.
- [Создание этапа](https://github.com/WyriHaximus/github-action-create-milestone) - Создаёт новый открытый этап по указанным заголовку и описанию.
- [Закрытие этапа](https://github.com/WyriHaximus/github-action-close-milestone) - Закрывает указанный этап.
- [Action для применения правил именования веток](https://github.com/deepakputhraya/action-branch-name)
- [Экспорт slug некоторых переменных GitHub](https://github.com/marketplace/actions/github-slug)
- [awesome-lint как GitHub Action](https://github.com/max/awesome-lint)
- [Редактирование файла JSON](https://github.com/deef0000dragon1/json-edit-action)
- [Сборка документации Slate](https://github.com/Decathlon/slate-builder-action)
- [Чтение свойств](https://github.com/christian-draeger/read-properties) - Читает значения из файлов `.properties`.
- [Запись свойств](https://github.com/christian-draeger/write-properties) - Записывает значения в файлы `.properties`.
- [Autotag](https://github.com/butlerlogic/action-autotag) - Автоматически создаёт тег, когда меняется версия в файле манифеста (например, `package.json`).
- [Применение шаблонов с Jinja2](https://github.com/cuchi/jinja2-action) - Использует шаблонизатор Jinja2 для создания файлов из шаблонов.
- [Проверка наличия изменений](https://github.com/UnicornGlobal/has-changes-action) - Проверяет, появились ли изменения в коде на предыдущих этапах.
- [Mind Your Language Action](https://github.com/tailaiw/mind-your-language-action) - Находит оскорбительные комментарии в issue и pull request и предупреждает авторов.
- [Преобразователь YAML/JSON/XML](https://github.com/fabasoad/yaml-json-xml-converter-action) - Взаимно преобразует форматы файлов YAML/JSON/XML.
- [Обнаружение контента NSFW](https://github.com/fabasoad/nsfw-detection-action) - Обнаруживает контент NSFW в закоммиченных файлах.
- [Проверка изменённых путей](https://github.com/MarceloPrado/has-changed-path) - Условно запускает Actions в зависимости от изменённых путей.
- [Linguist](https://github.com/fabasoad/linguist-action) - Проверяет репозиторий и выводит сведения об используемых языках.
- [Голосовой звонок Twilio](https://github.com/fabasoad/twilio-voice-call-action/) - Совершает голосовой звонок Twilio с заданным текстом.
- [Настройка Xcode](https://github.com/maxim-lobanov/setup-xcode) - Переключает между предустановленными версиями Xcode в образах macOS.
- [Настройка Xamarin](https://github.com/maxim-lobanov/setup-xamarin) - Переключает между предустановленными версиями Xamarin и Mono в образах macOS.
- [Memer Action](https://github.com/Bhupesh-V/memer-action) - GitHub Action для мемов о программистах xD.
- [Настройка Cocoapods](https://github.com/maxim-lobanov/setup-cocoapods) - Настраивает определённую версию Cocoapods.
- [Публичный IP-адрес](https://github.com/haythem/public-ip) - Запрашивает публичный IP-адрес исполнителя GitHub Actions.
- [GitHub Actions для Lazarus/FPC](https://github.com/gcarreno/setup-lazarus)
- [Факс Twilio](https://github.com/fabasoad/twilio-fax-action/) - Отправляет документ по факсу с помощью учётной записи Twilio.
- [Настройка инструментов Kubernetes](https://github.com/yokawasa/action-setup-kube-tools) - Устанавливает инструменты Kubernetes (kubectl, kustomize, helm, kubeval, conftest и yq) на исполнителе.
- [Настройка Elastic Cloud Control Tool](https://github.com/yokawasa/action-setup-ecctl) - Устанавливает указанную версию ecctl на исполнителе.
- [Скрипт PowerShell](https://github.com/Amadevus/pwsh-script) - Запускает скрипты PowerShell с контекстами рабочего процесса (например, `$github.token`) и командлетами; возвращает результат как выходные данные Action.
- [Загрузка файлов и проверка через VirusTotal](https://github.com/crazy-max/ghaction-virustotal)
- [Импорт ключа GPG](https://github.com/crazy-max/ghaction-import-gpg)
- [Сжатие с помощью UPX](https://github.com/crazy-max/ghaction-upx) - Универсальный упаковщик исполняемых файлов.
- [Загрузка новой версии модуля Go в кеш прокси](https://github.com/andrewslotin/go-proxy-pull-action) - Гарантирует, что последняя версия модуля Go находится в кеше прокси. Также обновляет документацию pkg.go.dev при выпуске.
- [Удаление артефактов запуска](https://github.com/marketplace/actions/delete-run-artifacts) - Удаляет все артефакты по завершении запуска рабочего процесса.
- [Переменные окружения GitHub Actions](https://github.com/FranzDiebold/github-env-vars-action) - Экспортирует переменные окружения, например название ветки или тега, slug репозитория и slug ссылки.
- [Блокировки GitHub Action](https://github.com/abatilo/github-action-locks/blob/master/README.md) - Гарантирует атомарное выполнение рабочих процессов GitHub Action.
- [Фильтр путей](https://github.com/dorny/paths-filter) - Условно запускает Actions в зависимости от файлов, изменённых в PR, ветке функций или отправленных коммитах.
- [Minisauras](https://github.com/TeamTigers/minisauras) -  Получает все файлы JavaScript и CSS из базовой ветки, минифицирует их и создаёт pull request с новой веткой.
- [Сайт в GIF](https://github.com/PabloLec/website-to-gif) - Преобразует любую веб-страницу в GIF для README, документации и т. д.
- [Интерактивные входные данные — параметры рабочего процесса во время выполнения](https://github.com/boasiHQ/interactive-inputs) - Добавляет динамические входные параметры во время выполнения рабочих процессов GitHub Actions.

#### Окружения

- [Создание файла окружения](https://github.com/SpicyPizza/create-envfile)
- [Экспорт глобальных переменных окружения для последующих этапов сборки](https://github.com/zweitag/github-actions)
- [Программная установка переменных окружения для использования на последующих этапах](https://github.com/allenevans/set-env)
- [Установка окружений Conda для Python](https://github.com/goanpeca/setup-miniconda)
- [Настройка NativeScript](https://github.com/hrueger/setup-nativescript)
- [Создание файла окружения JSON](https://github.com/schdck/create-env-json)

#### Зависимости

- [Установка зависимостей NPM с кешированием](https://github.com/bahmutov/npm-install)
- [Выделение новых зависимостей NPM](https://github.com/hiwelo/new-dependencies-action) - Комментирует pull request сведениями о новых добавленных зависимостях NPM.
- [Кеширование зависимостей NPM](https://github.com/c-hive/gha-npm-cache)
- [Кеширование зависимостей Yarn](https://github.com/c-hive/gha-yarn-cache)

#### Семантическое версионирование

- [Следующие SemVer-версии](https://github.com/WyriHaximus/github-action-next-semvers) - Выводит следующую основную, дополнительную и исправляющую версии на основе указанной версии SemVer.
- [Получение последней версии SemVer и названия ветки по строке поиска](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [Создание ветки выпуска](https://github.com/jessicalostinspace/cut-release-action) - Создаёт ветку выпуска по префиксу ветки и необязательной семантической версии.
- [Увеличение семантической версии](https://github.com/christian-draeger/increment-semantic-version) - Повышает указанную семантическую версию (SemVer) в зависимости от типа выпуска.

### Статический анализ

- [Action для статического анализатора PHPStan](https://github.com/OskarStark/phpstan-ga)
- [Action для GraphQL Inspector](https://github.com/kamilkisiela/graphql-inspector)
- [Статический анализ PowerShell с PSScriptAnalyzer](https://github.com/devblackops/github-action-psscriptanalyzer)
- [Запуск tfsec с выводом reviewdog в PR](https://github.com/reviewdog/action-tfsec)

#### Тестирование

- [Запуск тестов через Puppeteer — Node API для Headless Chrome](https://github.com/ianwalter/puppeteer)
- [Отчёт xUnit в Slack: отправка сводки тестов из отчётов xUnit в канал Slack](https://github.com/ivanklee86/xunit-slack-reporter)
- [Запуск тестов Codeception](https://github.com/joelwmale/codeception-action)
- [Запуск тестов TestCafe](https://github.com/DevExpress/testcafe-action)
- [Запуск тестов Unity](https://github.com/webbertakken/unity-test-runner)
- [Запуск E2E-тестов Cypress](https://github.com/cypress-io/github-action)
- [Тестирование ролей Ansible с Molecule](https://github.com/robertdebock/molecule-action)
- [Нагрузочное тестирование с artillery.io](https://github.com/kenju/github-actions-artillery)
- [Поиск нестабильных тестов с BuildPulse](https://github.com/Workshop64/buildpulse-action)
- [Вывод встроенных аннотаций кода для тестов Jest](https://github.com/IgnusG/jest-report-action)
- [Запуск тестов Julia](https://github.com/julia-actions/julia-runtest)

#### Линтинг

- [Action для PHP Coding Standards Fixer](https://github.com/OskarStark/php-cs-fixer-ga)
- [Запуск Hadolint для Dockerfile в репозитории](https://github.com/burdzwastaken/hadolint-action)
- [Запуск ESLint с выводом reviewdog в PR](https://github.com/reviewdog/action-eslint)
- [Линтер на JavaScript для файлов \*.workflow](https://github.com/OmarTawfik/github-actions-js)
- [Линтинг файлов Terraform с помощью tflint и выводом reviewdog в PR](https://github.com/reviewdog/action-tflint)
- [autopep8: автоматическое форматирование кода Python по руководству PEP 8](https://github.com/peter-evans/autopep8)
- [Запуск `ergebnis/composer-normalize` для нормализации `composer.json` проекта PHP](https://github.com/ergebnis/composer-normalize-action)
- [Запуск `stolt/lean-package-validator`, чтобы в пакете оставались только необходимые артефакты `runtime`](https://github.com/raphaelstolt/lean-package-validator-action)
- [Проверка Go-кода линтером при событии PR](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js — автоматический запуск скриптов `format` и/или `lint` из пакета](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter — GitHub Action для запуска stylelint](https://github.com/exelban/stylelint)
- [Запуск stylelint с выводом reviewdog в PR](https://github.com/reviewdog/action-stylelint)
- [Action PyCodeStyle — комментарий к PR с результатами pycodestyle (autopep8)](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide — самый строгий линтер Python с возможностью вывода reviewdog в PR](https://github.com/wemake-services/wemake-python-styleguide)
- [Запуск TSLint с проверками статуса и аннотациями различий файлов](https://github.com/mooyoul/tslint-actions)
- [Проверка коммитов pull request с помощью commitlint](https://github.com/wagoid/commitlint-github-action)
- [Запуск vint с выводом reviewdog в PR](https://github.com/reviewdog/action-vint)
- [Запуск misspell с выводом reviewdog в PR](https://github.com/reviewdog/action-misspell)
- [Запуск golangci-lint с выводом reviewdog в PR](https://github.com/reviewdog/action-golangci-lint)
- [Запуск shellcheck с выводом reviewdog в PR](https://github.com/reviewdog/action-shellcheck)
- [Поиск нечутких и неуважительных формулировок в документации Markdown](https://github.com/theashraf/alex-action)
- [Запуск dotenv-linter для проверки файлов .env с возможностью вывода reviewdog в PR](https://github.com/wemake-services/dotenv-linter)
- [Запуск dotenv-linter с выводом reviewdog в PR](https://github.com/mgrachev/action-dotenv-linter)
- [Отображение и автоисправление ошибок линтинга для многих языков программирования](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer с аннотациями](https://github.com/chekalsky/phpcs-action)
- [Линтер Markdown (с наборами правил)](https://github.com/avto-dev/markdown-lint)
- [Сопоставитель проблем Stylelint для создания аннотаций](https://github.com/xt0rted/stylelint-problem-matcher)
- [Запуск sqlcheck для поиска антипаттернов в SQL-запросах PR](https://github.com/yokawasa/action-sqlcheck)
- [Проверка метаданных Fastlane Supply на соответствие правилам Play Store](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Запуск Golint для проверки кода Golang](https://github.com/Jerome1337/golint-action)

#### Безопасность

- [Сканер уязвимостей для образов Docker](https://github.com/phonito/phonito-scanner-action)
- [Автоматическое одобрение и слияние обновлений Dependabot](https://github.com/ridedott/dependabot-auto-merge-action)
- [Запуск линтера безопасности dlint для кода Python](https://github.com/xen0l/dlint-check)
- [Actions для AWS Secrets Manager](https://github.com/say8425/aws-secrets-manager-actions) - Задаёт секреты AWS Secrets Manager в виде значений окружения.
- [Проверка корректности и безопасности документов политик AWS IAM](https://github.com/xen0l/iam-lint)
- [Secret Spreader](https://github.com/webfactory/secret-spreader) - Это не Action как таковой, а инструмент для управления секретами Actions в списке репозиториев.
- [Action для синхронизации секретов](https://github.com/google/secrets-sync-action) - Синхронизирует секреты в нескольких репозиториях.
- [Action Snyk Test](https://github.com/snyk/actions)
- [Управление секретами GitHub Actions с помощью простой CLI](https://github.com/unfor19/githubsecrets)
- [SecretHub](https://github.com/secrethub/actions) - Позволяет хранить секреты в едином источнике истины и загружать их в GitHub Actions по запросу.

#### Покрытие кода

- [Сканирование кода с SonarCloud](https://github.com/sonarsource/sonarcloud-github-action)
- [Отправка покрытия кода в codecov.io](https://github.com/codecov/codecov-action)
- [Публикация покрытия кода в CodeClimate](https://github.com/paambaati/codeclimate-action)
- [Обновление карточки Go Report для репозитория](https://github.com/creekorful/goreportcard-action)

### Динамический анализ

- [Запуск Gofmt для проверки форматирования кода Golang](https://github.com/Jerome1337/gofmt-action)
- [Запуск Goimports для проверки порядка импортов Golang](https://github.com/Jerome1337/goimports-action)

### Мониторинг

- [Аудит веб-страницы с помощью тестов Google Chrome Lighthouse](https://github.com/jakejarvis/lighthouse-action)
- [Запуск Lighthouse и публикация результатов в PR и Slack](https://github.com/foo-software/lighthouse-check-action)
- [Запуск Lighthouse в CI с помощью GitHub Actions](https://github.com/treosh/lighthouse-ci-action)
- [Непрерывное тестирование производительности и визуализация бенчмарков для Go](https://github.com/bobheadxi/gobenchdata)
- [Action Size Limit](https://github.com/andresz1/size-limit-action) - Комментирует в PR сравнение стоимости JS и отклоняет его, если превышен лимит.
- [Проверка bundlephobia](https://github.com/carlesnunez/check-my-bundlephobia) - Комментирует размер новых и изменённых пакетов по данным bundlephobia.io и отклоняет PR при превышении порога.

### Pull request

- [Назначение проверяющих PR на основе исполнителей](https://github.com/pullreminders/assignee-to-reviewer-action)
- [Открытие или обновление PR при отправке ветки (с выбором ветки)](https://github.com/vsoch/pull-request-action)
- [Автоматический rebase PR](https://github.com/cirrus-actions/rebase)
- [Добавление метки к PR после заданного числа одобрений](https://github.com/pullreminders/label-when-approved-action)
- [Добавление меток к PR на основе совпадений с шаблонами файлов](https://github.com/banyan/auto-label)
- [Автоматическое одобрение PR](https://github.com/hmarr/auto-approve-action)
- [Автоматическое назначение проверяющих PR по файлу конфигурации](https://github.com/kentaro-m/auto-assign-action)
- [Добавление меток к PR на основе шаблонов названий веток](https://github.com/TimonVS/pr-labeler-action)
- [Добавление меток к PR на основе общего размера различий](https://github.com/pascalgn/size-label-action)
- [Автоматическое слияние готовых PR](https://github.com/pascalgn/automerge-action)
- [Проверка наличия ссылки на задачу в PR](https://github.com/vijaykramesh/pr-lint-action)
- [Создание PR для изменений репозитория в рабочем пространстве Actions](https://github.com/peter-evans/create-pull-request)
- [Линтинг PR](https://github.com/seferov/pr-lint-action)
- [ChatOps для PR](https://github.com/machine-learning-apps/actions-chatops)
- [Добавление префикса к заголовку и тексту PR на основе текста из названия ветки](https://github.com/tzkhan/pr-update-action)
- [Блокировка коммитов с autosquash](https://github.com/xt0rted/block-autosquash-commits-action)
- [Автоматическое увеличение версии и создание тега при слиянии](https://github.com/anothrNick/github-tag-action)
- [Автоматическое обновление PR с устаревшими проверками и слияние с squash тех, что проходят защиту веток](https://github.com/tibdex/autosquash)
- [Merge Pal — автоматическое обновление и слияние PR](https://github.com/maxkomarychev/merge-pal-action)
- [Применение правил именования заголовков pull request](https://github.com/deepakputhraya/action-pr-title)
- [Уведомление о зависшем pull request](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [Линтинг названий pull request с commitlint (особенно полезно при слиянии с squash!)](https://github.com/JulienKode/pull-request-name-linter-action)
- [Блокировка слияния PR при сбое проверок целевых веток](https://github.com/cirrus-actions/branch-guard)
- [Обновление скриншотов сгенерированного статического сайта по pull request](https://github.com/ssowonny/diff-pages-action)
- [Добавление меток в зависимости от того, находится ли pull request в работе](https://github.com/AlbertHernandez/working-label-action)
- [Action для проверки задачи](https://github.com/neofinancial/ticket-check-action) - Автоматически добавляет номер задачи или issue в начало заголовка каждого pull request.
- [Проверка pull request с помощью регулярных выражений](https://github.com/MorrisonCole/pr-lint-action)
- [Скрытые ловушки в pull request](https://github.com/tylermurry/github-pr-landmine)
- [Аннотирование GitHub pull request по XML-отчёту Checkstyle](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Статистика pull request](https://github.com/flowwer-dev/pull-request-stats) -  Публикует релевантную статистику о проверяющих.
- [Проверка описания pull request](https://github.com/derkinderfietsen/pr-description-enforcer) - Требует описание в pull request.

### GitHub Pages

- [Развертывание сайта Zola в GitHub Pages](https://github.com/shalzz/zola-deploy-action)
- [Сборка статического сайта Hugo и публикация в ветке gh-pages](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [Сборка сайта Jekyll с пользовательскими плагинами и скриптами и публикация в ветке Gh-Pages](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Метаданные Google Dataset Search](https://www.github.com/openschemas/extractors/) - И другие извлекатели schema.org, помогающие находить наборы данных на страницах GitHub.
- [GitHub Actions для развертывания в GitHub Pages с генераторами статических сайтов](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Action для Hexo](https://github.com/heowc/action-hexo)
- [Публикация статистики Google Analytics в GitHub Pages](https://github.com/cristianpb/analytics-google)
- [Платформа для блога на Jupyter Notebook на базе GitHub Actions, Pages и Jekyll](https://github.com/fastai/fastpages)
- [Развертывание статического сайта в GitHub Pages](https://github.com/appleboy/gh-pages-action) - Разворачивает сайт в пользовательский каталог и игнорирует выбранные папки и файлы.
- [Развертывание в GitHub Pages с расширенными настройками](https://github.com/crazy-max/ghaction-github-pages)

### Уведомления и сообщения

- [Отправка уведомления в Discord](https://github.com/Ilshidur/action-discord)
- [Отправка сообщения в Slack от имени бота](https://github.com/pullreminders/slack-action)
- [Отправка SMS из GitHub Actions через Nexmo](https://github.com/nexmo-community/nexmo-sms-action)
- [Отправка SMS из GitHub Actions через Clockworksms](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Отправка сообщения в Telegram](https://github.com/appleboy/telegram-action)
- [Отправка файла или текстового сообщения в Discord (настраиваемые цвет, имя пользователя и аватар)](https://github.com/appleboy/discord-action)
- [Совместная работа над твитами через pull request](https://github.com/gr2m/twitter-together)
- [Отправка push-уведомления через Push от Techulus](https://github.com/techulus/push-github-action)
- [Отправка электронной почты через SendGrid](https://github.com/peter-evans/sendgrid-action)
- [Отправка push-уведомления через Join](https://github.com/ShaunLWM/action-join)
- [Проверка новых версий пакетов npm](https://github.com/MeilCli/npm-update-check-action)
- [Проверка новых версий пакетов NuGet](https://github.com/MeilCli/nuget-update-check-action)
- [Проверка новых версий пакетов Gradle](https://github.com/MeilCli/gradle-update-check-action)
- [Отправка push-уведомления через Pushbullet](https://github.com/ShaunLWM/action-pushbullet)
- [Создание события календаря Outlook с помощью Microsoft Graph](https://github.com/anoopt/ms-graph-create-event)
- [Отслеживание изменений страниц GitHub Wiki и публикация в Slack](https://github.com/benmatselby/gollum-page-watcher-action)
- [Отправка SMS через MessageBird](https://github.com/nikitasavinov/messagebird-sms-action)
- [Ответы ботам для устаревших issue](https://github.com/c-hive/fresh-bot)
- [Отправка встроенного сообщения в Discord](https://github.com/sarisia/actions-status-discord)
- [Синхронизация PR с задачами Teamwork](https://github.com/Teamwork/github-sync)
- [Отправка уведомления в Microsoft Teams](https://github.com/opsless/ms-teams-github-actions)

### Развертывание

- [Развертывание в Netlify](https://github.com/netlify/actions)
- [Развертывание приложения Probot с помощью Actions](https://probot.github.io/docs/deployment/#github-actions)
- [Публикация плейлиста в Spotify](https://github.com/swinton/SpotHub)
- [Развертывание расширений VS Code с помощью vsce](https://github.com/lannonbr/vsce-action)
- [Очистка кеша Cloudflare после обновления сайта](https://github.com/jakejarvis/cloudflare-purge-action)
- [Развертывание конфигурации DNS с помощью DNS Control](https://github.com/koenrh/dnscontrol-action)
- [Развертывание темы в Shopify](https://github.com/pgrimaud/action-shopify)
- [Запуск нескольких конвейеров GitLab CI](https://github.com/appleboy/gitlab-ci-action)
- [Запуск нескольких заданий Jenkins](https://github.com/appleboy/jenkins-action)
- [GitHub Action для Homebrew Tap](https://github.com/izumin5210/action-homebrew-tap)
- [Копирование файлов и артефактов по SSH](https://github.com/appleboy/scp-action)
- [Выполнение удалённых команд SSH](https://github.com/appleboy/ssh-action)
- [Публикация дистрибутива Python в PyPI](https://github.com/pypa/gh-action-pypi-publish)
- [Развертывание статического сайта в Azure Storage](https://github.com/feeloor/azure-static-website-deploy)
- [Кроссплатформенная Chocolatey CLI для сборки и публикации пакетов](https://github.com/crazy-max/ghaction-chocolatey)
- [Развертывание библиотеки iOS Pod в Cocoapods](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [GitHub Action для TencentCloud Serverless](https://github.com/Juliiii/action-scf)
- [Публикация выпусков npm (в том числе предварительных)](https://github.com/epeli/npm-release/)
- [Развертывание статического сайта в Surge.sh](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [GitHub Action для GoReleaser — инструмента автоматизации выпуска проектов Go](https://github.com/goreleaser/goreleaser-action)
- [Action FTP Deploy для развертывания проекта GitHub на FTP-сервере](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Публикация статьи на Dev.to](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Action для Semantic Release](https://github.com/cycjimmy/semantic-release-action)
- [Публикация коллекции в Ansible Galaxy](https://github.com/artis3n/ansible_galaxy_collection)
- [Публикация модуля в Puppet Forge](https://github.com/barnumbirr/action-forge-publish)
- [Сборка и публикация приложений Electron](https://github.com/samuelmeuli/action-electron-builder)
- [Публикация пакета Maven](https://github.com/samuelmeuli/action-maven-publish)
- [Сборка и развертывание темы для Ghost CMS](https://github.com/TryGhost/action-deploy-theme)
- [Развертывание роли Ansible в Ansible Galaxy](https://github.com/robertdebock/galaxy-action)
- [Публикация одного или нескольких модулей JS в реестр](https://github.com/author/action-publish)
- [Публикация пакета с 2FA через Slack](https://github.com/erezrokah/2fa-with-slack-action)
- [Последовательное выполнение запусков рабочих процессов в конвейерах непрерывного развертывания](https://github.com/softprops/turnstyle)
- [GitHub Action для развертывания в Netlify при каждом коммите](https://github.com/nwtgck/actions-netlify)
- [Запуск плейбуков Ansible](https://github.com/arillso/action.playbook)
- [Публикация дистрибутива Python в Anaconda Cloud](https://github.com/fcakyon/conda-publish-action)
- [Развертывание расширения VS Code в Visual Studio Marketplace или реестр Open VSX](https://github.com/HaaLeo/publish-vscode-extension)
- [Публикация видео YouTube в подкасте Anchor.fm](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [Развертывание с помощью AWS CodeDeploy](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [Обновление описания репозитория Docker Hub из README.md](https://github.com/peter-evans/dockerhub-description)
- [Публикация образов Docker в реестре пакетов GitHub (GPR)](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Обновление «полного описания» репозитория на Docker Hub](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Сборка и публикация образов Docker в любом реестре с помощью Kaniko](https://github.com/outillage/kaniko-action)
- [Мониторинг и ограничение размера образа Docker](https://github.com/wemake-services/docker-image-size-limit)
- [Публикация образов Docker в Amazon Elastic Container Registry (ECR)](https://github.com/appleboy/docker-ecr-action)
- [Сборка и отправка образов Docker с кешированием каждого этапа для сокращения времени сборки](https://github.com/whoan/docker-build-with-cache-action)
- [Настройка Docker Buildx](https://github.com/crazy-max/ghaction-docker-buildx)
- [Преобразование названия ветки или тега в совместимую с Docker метку образа](https://github.com/ankitvgupta/ref-to-tag-action/)
- [Обновление описания репозитория контейнера из README.md](https://github.com/marketplace/actions/update-container-description-action) - Поддерживаемые реестры: Docker Hub, Quay, Harbor.

#### Kubernetes

- [Развертывание в любом облаке или Kubernetes с помощью Pulumi](https://github.com/pulumi/actions)
- [Развертывание в Kubernetes с помощью kubectl](https://github.com/steebchen/kubectl)
- [Получение файла Kubeconfig из Google Kubernetes Engine (GKE)](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Настройка YAML-конфигураций Kubernetes с помощью Kustomize](https://github.com/karancode/kustomize-github-action)
- [Создание кластера Kubernetes для тестирования с помощью Krucible](https://github.com/Krucible/krucible-github-action)

#### AWS

- [Синхронизация или загрузка каталога в бакет AWS S3](https://github.com/jakejarvis/s3-sync-action)
- [Развертывание кода Lambda в существующей функции](https://github.com/appleboy/lambda-action)

#### Terraform

- [Создание документации Terraform](https://github.com/Dirrk/terraform-docs) - Использует terraform-docs для создания документации модулей Terraform.
- [Пример использования Terraform для проверки и применения администрирования GitHub](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### Внешние сервисы

- [Использование Jenkinsfile](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [GitHub Action для Firebase](https://github.com/w9jds/firebase-action)
- [GitHub Action для Contentful Migration CLI](https://github.com/Shy/contentful-action)
- [GitHub Actions для Pixela (a-know/pi)](https://github.com/peaceiris/actions-pixela)
- [GitHub Action для Google Cloud Platform (GCP)](https://github.com/exelban/gcloud)
- [Загрузка файлов в любой сервис-провайдер OpenStack Swift](https://github.com/iksaku/openstack-swift-action)
- [GitHub Action для отправки публикаций Stack Overflow в Slack](https://github.com/logankilpatrick/StackOverflowBot)
- [Использование роли AWS](https://github.com/nordcloud/aws-assume-role/)
- [Создание пользовательского ответа с помощью JSONbin](https://github.com/fabasoad/jsonbin-action)

### Инструменты фронтенда

- [Выполнение задачи Gradle](https://github.com/MrRamych/gradle-actions)
- [Actions для сборки JS](https://github.com/elstudio/actions-js-build) - Запускает задачи сборки Grunt или Gulp и коммитит изменения файлов.
- [GitHub Action для Gatsby CLI](https://github.com/jzweifel/gatsby-cli-github-action)
- [Запуск аудита WebPageTest и публикация результатов в комментарии к коммиту](https://github.com/JCofman/webPagetestAction)
- [GitHub Actions для Hugo extended](https://github.com/peaceiris/actions-hugo)
- [Создание изображения OG](https://github.com/BoyWithSilverWings/generate-og-image) - Создаёт настраиваемые изображения Open Graph из файлов Markdown.
- [GitHub Actions для mdBook](https://github.com/peaceiris/actions-mdbook)
- [Настройка Mint](https://github.com/fabasoad/setup-mint-action) - Устанавливает Mint (язык программирования для создания одностраничных приложений).
- [Развертывание Gatsby в AWS S3](https://github.com/jonelantha/gatsby-s3-action) - Развертывает Gatsby в S3 (поддерживается CloudFront).

### Операции машинного обучения

- [Отправка Argo Workflows (не зависящим от облака способом)](https://github.com/machine-learning-apps/actions-argo)
- [Отправка Argo Workflows в GKE](https://github.com/machine-learning-apps/gke-argo)
- [Запрос результатов отслеживания экспериментов из Weights & Biases](https://github.com/machine-learning-apps/wandb-action)
- [Запуск параметризованных блокнотов Jupyter](https://github.com/yaananth/run-notebook)
- [Компиляция, развертывание и запуск конвейера Kubeflow](https://github.com/NikeNano/kubeflow-github-action)
- [Автоматическая упаковка репозитория по науке о данных в Docker как сервера Jupyter](https://github.com/jupyterhub/repo2docker-action)
- [Azure Machine Learning с GitHub Actions](https://github.com/machine-learning-apps/ml-template-azure)

### Сборка

- [run-cmake](https://github.com/lukka/run-cmake) - Мультиплатформенный Action для сборки программ на C/C++ с помощью [CMake](https://cmake.org) и [Ninja](https://ninja-build.org/).
- [run-vcpkg](https://github.com/lukka/run-vcpkg) - Мультиплатформенный Action для сборки и установки зависимостей C/C++ с помощью [vcpkg](https://github.com/microsoft/vcpkg).
- [Сборка приложений Go для нескольких платформ](https://github.com/izumin5210/action-go-crossbuild)
- [Создание ~/.m2/settings.xml для сборок Maven](https://github.com/whelk-io/maven-settings-xml-action)
- [Запуск скрипта Pascal](https://github.com/fabasoad/pascal-action)
- [Настройка Brainfuck](https://github.com/fabasoad/setup-brainfuck-action) - Устанавливает интерпретатор brainfuck.
- [Публикация бинарных файлов Go в ресурсах выпуска GitHub](https://github.com/wangyoucao577/go-release-action)
- [Настройка COBOL](https://github.com/fabasoad/setup-cobol-action)
- [Проверка версии Gradle](https://github.com/madhead/check-gradle-version) - Поддерживает версию Gradle в актуальном состоянии.

### Базы данных

- [Настройка схемы Cassandra](https://github.com/fabasoad/setup-cassandra-action) - Запускает скрипты из указанной папки в кластере Cassandra.

### Сети

- [Настройка ZeroTier](https://github.com/zerotier/github-action) - Подключает исполнителя к сети ZeroTier.

### Локализация

- [Поиск и автоматическое исправление опечаток и грамматических ошибок в коде](https://github.com/sobolevn/misspell-fixer-action)
- [Перевод](https://github.com/fabasoad/translation-action) - Переводит текст с любого языка на любой другой.

### Для развлечения

- [Добавление аналога кнопки «Нравится» в README](https://github.com/ariary/Readme-Like-Button) - Отображает одобрение сообщества для выбранной части README (можно использовать как опрос).

### Шпаргалка

- [Шпаргалка по фирменному стилю GitHub Actions](https://haya14busa.github.io/github-action-brandings/)

## Руководства

- [Непрерывное развертывание приложения Next.js с Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Преобразование Actions на Docker в Actions на JavaScript/TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [CI GitHub Actions для проектов Swift/iOS](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [Работа с GitHub Actions](https://jeffrafter.com/working-with-github-actions)
- [GitHub Actions для разработчиков Rails](https://www.youtube.com/watch?v=gGUXydw22zw)
- [Адвент-календарь GitHub Actions](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [Развертывание Laravel без простоя с помощью GitHub Actions](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Курс Pluralsight по созданию собственных GitHub Actions](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Непрерывное развертывание Django в DigitalOcean с Docker и GitHub Actions](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Развертывание собственных исполнителей GitHub Actions с Docker](https://testdriven.io/blog/github-actions-docker/) - Развертывает собственные исполнители GitHub Actions с Docker и Docker Swarm в DigitalOcean.
- [Настройка автоматически масштабируемых собственных исполнителей GitHub Actions на AWS Spot Instances](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [Основы GitHub Actions](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> Не стесняйтесь отправить pull request, если хотите поделиться другими ресурсами. Подробнее см. в [contributing.md](contributing.md).
